$ = jQuery;

$(function () {

    // settings panel stuff
    var settingsCallback = null;
    $('.show-settings').on('click', function (e) {
        e.preventDefault();
        $('.fly-in-panel, #settings-confirm-clear').remove();
        var section = $(this).data('section') || window.defaultSettingsPanel;

        $.get('/settings', function (pnl) {
            $('body').append(pnl);

            // save the inital state of each form
            $('#settings-panel').find('form').each(function () {
                var form = $(this);
                var data = form.serialize();
                form.data('initstate', data);
            });

            if (section) {
                var sp = $('#settings-panel');
                var form = sp.find('[data-action="' + section + '"]');
                form.prev('a').trigger('click');
            }

            setTimeout(function () {
                $('#settings-panel').addClass('visible');
                if (settingsCallback) {
                    settingsCallback();
                    settingsCallback = null;
                }
            }, 50);
        });
    });

    $(document).on('click', '.close-settings', function (e) {
        e.preventDefault();
        $('.fly-in-panel').removeClass('visible');
        $('body').removeClass('noscroll');
    });

    $(document).on('click', '#settings-panel .save-settings-confirm', function (e) {
        e.preventDefault();
        var btn = $(this);
        var form = btn.parents('form');
        var saveButton = btn.next('.save-settings');
        var confirmText = btn.data('confirm') || 'Are you sure you want to save these settings?';
        $('#settings-confirm-message').text(confirmText);
        $('#cancel-reason').toggle(confirmText.indexOf('cancel your subscription') > 0);

        if (form.find('.save-danger:checked').length > 0) {
            $('#settings-confirm-danger').modal({
                backdrop: 'static',
                keyboard: false,
                show: true // added property here
            });

            $('#btn-confirm-danger').off('click').on('click', function () {
                // copy cancel reason to form that will be submitted
                var cr = $('#cancel-reason textarea').val();
                $('[name="CancelReason"]').val(cr);
                $('#settings-confirm-danger').modal('hide')

                saveButton.trigger('click');
            });
        }
        else {
            saveButton.trigger('click');
        }

    });

    $(document).on('click', '.dashboard-alert-close', function () {
        var alert = $(this).parents('.dashboard-alert');
        var alertId = alert.data('alertid');
        $.getJSON('/dashboard/dismissalert', { alertId: alertId }, function () {
            alert.addClass('dismissed');
            setTimeout(function () {
                alert.addClass('hidden');
            }, 500);
        });
    });

    $(document).on('click', '.set-smtp-port', function (e) {
        var text = $(this).text();
        $('#SmtpPort').val(text);
        e.preventDefault();
    });
    $(document).on('click', '.set-smtp-server', function (e) {
        var value = $(this).data('value');
        var vals = value.split('|');
        $('#SmtpServer').val(vals[0]);
        $('#SmtpPort').val(vals[1]);
        if (vals.length > 2)
            $('#SmtpUsername').val(vals[2]);
        e.preventDefault();
    });

    //regular save button
    $(document).on('click', '#settings-panel .save-settings', function (e) {
        e.preventDefault();
        var btn = $(this);
        var form = btn.parents('form');
        var action = 'Save' + form.data('action');
        var data = form.serialize();



        form.find('.saving').css('display', 'inline-block');
        form.find('.save-result').hide().removeClass('text-danger text-success');

        btn.prop('disabled', true);
        $.ajax({
            url: '/settings/' + action.toLowerCase(),
            data: data,
            type: 'POST',
            dataType: 'json',
            success: function (ret) {
                if (ret.error) {
                    form.find('.save-result').html(ret.message  + '<br><br><a href="#" class=reset-settings>reset</a>').addClass('text-danger').show();
                }
                else {
                    form.find('.save-result').html(ret.message).addClass('text-success').show();
                    form.addClass('can-clear');
                    if (action.toLowerCase().includes("savetransactional") && ret.message.includes("for paid users")) {
                        $("#TrackSMTPOpens").prop("checked", false);
                        $("#TrackSMTPClicks").prop("checked", false);
                    }
                }

                if (ret.demotionDate) {
                    $('#demotion-date').text(ret.demotionDate);
                    $('#plan-cancelled').show();
                    $('#change-plan').hide();
                }
            },
            error: function () {
                form.find('.save-result').text('There was an error saving this setting').addClass('text-danger').show();
            },
            complete: function () {
                form.find('.saving').css('display', 'none');
                btn.prop('disabled', false);
            }
        })
    });

    $(document).on('click', '.reset-settings', function (e) {
        var lnk = $(this);
        var form = lnk.parents('form');
        var data = form.data('initstate');

        var formFieldArray = data.split("&");
        $.each(formFieldArray, function (i, pair) {
            var nameValue = pair.split("=");
            var name = decodeURIComponent(nameValue[0]);
            var value = decodeURIComponent(nameValue[1]);
            var $field = form.find('[name=' + name + ']');

            if ($field[0].type == "radio" || $field[0].type == "checkbox") {
                var $fieldWithValue = $field.filter('[value="' + value + '"]');
                $fieldWithValue.prop('checked', true);
            } else {
                $field.val(value);
            }
        });
        updateTeamStatus();
        updatePlanSliders(-2, -2);
        form.find('.save-result').hide();
        e.preventDefault();
    });

    //anytime there's a CLEAR button
    $(document).on('click', '#settings-panel .clear-settings', function (e) {
        e.preventDefault();
        var lnk = $(this);
        var form = lnk.parents('form');
        var btn = form.find('.save-settings');
        var action = 'Clear' + form.data('action');

        $('#settings-confirm-clear').modal({
            backdrop: 'static',
            keyboard: false,
            show: true // added property here
        });

        $('#btn-confirm-clear').off('click').on('click', function () {
            $('#settings-confirm-clear').modal('hide')

            form.find('.saving').css('display', 'inline-block');
            form.find('.save-result').hide().removeClass('text-danger text-success');

            btn.prop('disabled', true);
            $.getJSON('/settings/' + action.toLowerCase(), function (ret) {
                if (ret.error) {
                    form.find('.save-result').text(ret.message).addClass('text-danger').show();
                }
                else {
                    form.find('.save-result').text(ret.message).addClass('text-success').show();
                    form.removeClass('can-clear');
                    //all input fields except checkboxes and buttons, so in Tracking section, don't want to eliminate the values for checkboxes, because then they stop working
                    form.find(':input:not(:checkbox):not(:button)').val('');
                }


                form.find('.saving').css('display', 'none');
                btn.prop('disabled', false);
            });
        });

    });

    // handle settings link
    if (window.location.hash.length > 0) {
        var type = window.location.hash.substr(1);
        if (type.split('/')[0] == 'settings') {
            var which = type.split('/')[1];
            $('.show-settings').trigger('click');
            settingsCallback = function () {
                var sp = $('#settings-panel');
                var form = sp.find('[data-action="' + which + '"]');
                form.addClass('show').css('display', 'block');
            }
        }
    }

    function resizeAlertBarPush() {
        var abh = $('header.alert-bar').outerHeight() || 0;
        var ab = document.getElementById('header-bar-push');
        if (ab) {
            ab.style.height = abh + 'px';
        }
    }
    resizeAlertBarPush();

    $('header .close-alert-bar').on('click', function (e) {
        var h = $(this).parents('header');
        h.animate({ height: 0 }, 500);

        $('#header-bar-push').animate({ height: 0 }, 500);

        var realHeader = h.next('header');
        realHeader.animate({ top: 0 }, 500);

        var intro = realHeader.next('.intro');
        intro.animate({ paddingTop: parseInt(intro.css('paddingTop')) - 50 }, 500);

        var date = new Date();
        date.setTime(date.getTime() + (1 * 24 * 60 * 60 * 1000));
        document.cookie = "GMassCloseAlert" + "=" + "true; expires =" + date.toUTCString() + "; path=/;";
        setTimeout(resizeAlertBarPush, 600);
        e.preventDefault();
    });

    $('.open-alert-bar').on('click', function (e) {
        $('.header.alert-bar').removeClass('dismissed');
        document.cookie = 'GMassCloseAlert=; Max-Age=0';
        resizeAlertBarPush();
        e.preventDefault();
    });

    var spanIndex = 0;
    var spans = $('.alert-bar-text > span');
    spans.filter('.off-left').hide();
    setInterval(function () {

        var cs = spans.filter(':not(.off-left)');
        cs.fadeOut(function () {
            spans.hide().addClass('off-left');

            var ns = spans.eq(spanIndex);
            ns.show();
            setTimeout(function () { ns.removeClass('off-left'); }, 1);
        });
        spanIndex = (spanIndex + 1) % spans.length;
    }, 5000);


  $(".preloader").fadeOut(300);

  var main_menu = $(".header-inn > nav > ul").clone();
  main_menu.removeAttr("id class").find("li").removeAttr("id");
  main_menu.find("li > a").removeAttr("class");
  main_menu.appendTo("#mobilemenu-inner");

// add the right arrows
$('#mobilemenu li.menu-item-has-children > a').each(function () {
    $(this).before('<a href=# class="mm-next">&#9655;</a>');
});

// add the left arrows
$('#mobilemenu .submenu').each(function () {
    $(this).prepend('<li><a href=# class="mm-prev">&#9665;</a><a class=submenu-title>title here</a></li>');
});

// listen to next button click
$('#mobilemenu .mm-next').on('click', function (e) {
    var lnk = $(this);
    var title = lnk.next('a').text();
    $('.menu-item-has-children.level2').removeClass('level2');
    lnk.parent('li').addClass('level2');
    lnk.parent('li').find('.submenu-title').text(title);
    $('#mobilemenu-inner').addClass('level2');
});


// listen to prev button click
$('#mobilemenu .mm-prev').on('click', function (e) {
    var lnk = $(this);
    lnk.parent('li').removeClass('level2');
    $('#mobilemenu-inner').removeClass('level2');
});

// hamburger
    $('.mobile-hamb').on('click', function (e) {
        $('#mobilemenu').toggleClass('open');
        e.preventDefault();
    });

  // ACCORDION
  $(document).on('click', ".toggle", function(e) {
    e.preventDefault();

    var $this = $(this);

    if ($this.next().hasClass("show")) {
      $this.next().removeClass("show");
        $this.next().slideUp(250);
        $this.parent('li').removeClass('expanded');
    } else {
        $this.parent('li').addClass('expanded');
      $this
        .parent()
        .parent()
        .find("li .inner")
        .removeClass("show");
      $this
        .parent()
        .parent()
        .find("li .inner")
        .slideUp(250);
      $this.next().toggleClass("show");
      $this.next().slideToggle(250);
    }
  });
  // ACCORDION

  // CAROUSEL
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    autoplayTimeout: 7000,
    loop: true,
    items: 1,
    thumbs: true,
    thumbImage: true,
    thumbContainerClass: "owl-thumbs",
    thumbItemClass: "owl-thumb-item",
    dots: false,
    margin: 20,
    animateOut: "fadeOut",
    smartSpeed: 400
  });
  // CAROUSEL

  // MATCHHEIGHT
  $(".fb-thumb").matchHeight();
  // MATCHHEIGHT

  // PRICING TABS
  $(".tab_content").hide();
  $(".tab_content:first").show();
  $("ul.tabs li").click(function() {
    $(".tab_content").hide();
    var activeTab = $(this).attr("rel");
    $("#"+activeTab).show();
    $("ul.tabs li").removeClass("active");
    $(this).addClass("active");
  });

  $(".tab_content_2").hide();
  $(".tab_content_2:first").show();
  $("ul.tabs_2 li").click(function() {
    $(".tab_content_2").hide();
    var activeTab = $(this).attr("rel");
    $("#"+activeTab).show();
    $("ul.tabs_2 li").removeClass("active");
    $(this).addClass("active");
  });

  $(".tab_content_3").hide();
  $(".tab_content_3:first").show();
  $("ul.tabs_3 li").click(function() {
    $(".tab_content_3").hide();
    var activeTab = $(this).attr("rel");
    $("#"+activeTab).show();
    $("ul.tabs_3 li").removeClass("active");
    $(this).addClass("active");
  });

  $(".tab_content_4").hide();
  $(".tab_content_4:first").show();
  $("ul.tabs_4 li").click(function() {
    $(".tab_content_4").hide();
    var activeTab = $(this).attr("rel");
    $("#"+activeTab).show();
    $("ul.tabs_4 li").removeClass("active");
    $(this).addClass("active");
  });

  $(".tab_content_5").hide();
  $(".tab_content_5:first").show();
  $("ul.tabs_5 li").click(function() {
    $(".tab_content_5").hide();
    var activeTab = $(this).attr("rel");
    $("#"+activeTab).show();
    $("ul.tabs_5 li").removeClass("active");
    $(this).addClass("active");
  });
  // PRICING TABS

  // // ANIMATION
  AOS.init({
    once: true,
    disable: function() {
      var maxWidth = 800;
      return window.innerWidth < maxWidth;
    }
  });
  // // ANIMATION

  // SCROLL TO ID
  /*$(".scrollId").mPageScroll2id({
    offset: 100,
    scrollSpeed: 500,
    scrollEasing: 'easeOutCubic'
  });*/
  // SCROLL TO ID


  // ON LOAD
  $(window).on("load",function(){
    var $this = $(this);
    if ($this.scrollTop() > 50) {
       $('.header').addClass('scrollable');
    } else {
       $('.header').removeClass('scrollable');
    }
  });
  // ON LOAD

  // SCROLL
  $(window).scroll(function () {
    var $this = $(this);
    if ($this.scrollTop() > 50) {
       $('.header').addClass('scrollable');
    } else {
       $('.header').removeClass('scrollable');
    }
  });
  // SCROLL

  // VIDEO HOVER
  $('.video-box').mouseover(function(){
    $(this).find('video').get(0).play();
  }).mouseout(function(){
    $(this).find('video').get(0).pause();
  });
  // VIDEO HOVER

  if (navigator.userAgent.toLowerCase().indexOf("chrome") == -1) {
      $('a.install-extension')
        .html("Install button won't work<BR>GMass requires Chrome")
        .css({
              'line-height': '1em',
              'height': 'auto',
              'padding-top': '0.5em',
              'padding-bottom': '0.5em',

              'opacity': 0.6,
              'cursor': 'not-allowed'
        })
        .attr('href', '')
        .attr('target', '')
        .attr('disabled', true)
        .on('click', function (e) {
          e.preventDefault();
          return false;
        });
  } else {
      $('a.install-extension').on('click', function (e) {

          function popupWindow(url, title, win, w, h) {
              const y = win.top.outerHeight / 2 + win.top.screenY - (h / 2);
              const x = win.top.outerWidth / 2 + win.top.screenX - (w / 2);
              return win.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + y + ', left=' + x);
          }


          var url = 'https://chrome.google.com/webstore/detail/gmass-powerful-mail-merge/ehomdgjhgmbidokdgicgmdiedadncbgf';

          var scale = 0.75;
          var newWin = popupWindow(url, 'Install GMass', window, window.top.outerWidth * scale,
              window.top.outerHeight * scale)

          if (document.getElementById('overlay') == null)
              $(document.body).append('<div id=overlay></div>');

          // without timeout, it shows visible without animation
          setTimeout(function () {
              $('#overlay').addClass('visible');
          }, 100);

          $('#overlay').on('click', function () {
              $('#overlay').removeClass('visible');
          });

          var timer = setInterval(function () {
              if (newWin.closed) {
                  clearInterval(timer);
                  $('#overlay').removeClass('visible');
              }
          }, 250);

          // don't go to the url but still allow onclick event tracker to run
          return false;
      });
    }

});
