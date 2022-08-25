$(document).ready(function () {
  let toggle = 0
  let toggle_next = 1

  let toggles = ['#main-1', '#main-2', '#main-3']
  let buttonSubmitContents =[ 'How come?', 'What does that have to do with this?', `LIU LLC doesn't care if you don't agree, this is removing liability of entrapment for us`]
  let styles = [
    'style="font-family:quiche-text,sans-serif; font-size:8.5pt;"',
    'style="font-family:neumond,sans-serif; font-size:12pt; font-weight:200;"',
    'style="font-family:itc-avant-garde-gothic-pro,sans-serif; font-weight:200;; font-size:9.5pt"',
    'style="font-family:transducer,sans-serif; font-weight:200;; font-size:16pt"',

  ]
  let content = [
    `                        <p style="font-family:lunatix,sans-serif; font-size:16pt;">
                                
                          <h3>Since LinkedIn Security suddenly seems to have forgotten how to unrestrict linkedin accounts within a timely fashion because it's been over 11 days now of nothing but undue process in restrictions.</h3>
                          <cite style="font-family:lunatix,sans-serif; font-size:12pt; >Forgetting how, well it's obvious this "forggetting of how to unrestrict" is by means done from Amazon Legal, given how it was so desperate in finding ways to outwit Dr. Liu
                          that it called the FBI to go give Dr. Liu a scare even though Dr. Liu told Amazon Legal that he was working with the FBI since Amazon Legal is obvously at a stage of pre-emptive motions in 
                          retaliation courses towards Ziping Liu and that Ziping Liu says don't do it it wont' be wnat you think you wil gain from such actions. 
                          I am not what you think I am: below Andy jassy or Jeff bezos as a person. Of course it would be such a case that Amazon Legal now is just that desperate to try to 
                        somehow ongoing, in their deluded minds as arch-angles for God Andy and his son Adam that Ziping Liu doesn't exist and Ziping Liu's medical leaves 
                    that he needs to get his disability issues resolved since I guess it's hard to actually understand that Ziping Liu has a disabilities, as you can see from the 
                medications he takes for his ailments, and such be issues like this happening</cite>
                            Notice of billable payments to collect from for all Billers: here's another entity to send to collections for billing: LInkedIn they owe us ${
                              (new Date().getDay() - 15) * 5
                            } thousand USD in penalties as of now for non clear, vague
                            and non-compliant in business operating ethics for domestic incoporated businessies in California, odd)</b>,
                        And so we would like to express our sincere apoligies for the delays in our plans, it's very
    difficult to do IT PRESS, RESEARCH, and SECURITY <cite>(Because of course the FBI is too scared to
    provide adequate security for ZIPING LIU</cite>, and it's simply a fairytale of a true tale of stupidity and idiocy by so
    called Andy <a href="https://twitter.com/ajassy">a father of two allegedly</a> - well thanks to him he's also the father of the New Panama Papers
    BORN OUT OF NONE OTHER THAN the savage wastelands of the Amazonian
    egregious jungles
    </a>.`,
  
    `      <p>I don't give a damn <i>and neither does God be damned to give a damn as a hypothetical</i>, about how rich YOU ARE BEZOS - if you can't perform your role and expectations, 
    and execute out my FMLA medical leave without retaliation and without adverse actions,
    as set forth by operational stands, because I guess we keep forgetting why Amazon Legal freaked out, and the root
    reason is because they messed up my medical leave. It's that simple. And yes, in order to "fix" this mess,
    they retaliated against me and then commited vioaltions in the American Disability Act, 
    FMLA Act, Civil Rights Act of 1964, the Fair Labour Act, and the Forced Labor Act, to just name a few.
    And as a reminder, by what means? Well by preending my FMLA medical leave never was issued out and 
    approved, and pretending that sending Law enforcement officers,
    to MY FUCKING HOUSE AT 11:45 PM CST, TO TELL ME THAT
    IS THE RIGHT ACTION AND MATURE ACTION, AND THE LP'S GUIDED LEARSHIP ACTION TO EXECUTIVE AND MOTION
    OUT THROUGH THEIR BY LAWS OF ORGANIZATION. AND NO I AM NOT AT ALL AND WAS NOT SACRED BY SUCH A
    CHILDISH BABY BOOMER ATROCITY. I AM FUCKING ANGRY. 
    IT'S 90 DAYS. WHAT DO YOU WANT? YOU WANT ME TO SERVE YOU? TO BE FUCKING HONEST WITH YOU,
    THE FBI, THE CIA, AND I, WE DON'T HAVE FUCKING TIME TO SERVE MOTIONS ON SOMETHING AS STUPID,
    INSANE, AND PATHETIC, AND SCHIZO-AFFECTIVE VIA NARCISSIM AND PSYCHOPATHIC CHARACTERISCS FROM 
    BABY BOOMER BEZOS AND ANDY JASSY THE FATHER OF SO CALLED TWO. I don't give a damn hwo much of a father or man you think you are Andy jassy: - if you can't perform your role and expectiations set forth by operational stands - such as like
    Marty Walsh, 
    and if you can't resolve an issue from an employee 
    that isn't even that hard of an executive level of cirifical error to solve, 
    then why are you in your role and position because it's been 90 days and what ahve we done?
    You ahve lead the ERC Amazon to have achieved nothing, no progress and by the way that is a huge demoralizing 
    effect on your employees with faile dleaderships towards resolutions in midst problems;
    so you are literally leading in the opossite direction that your leadership priciples define, 
    one being "<a href="https://aboutamazon.me/implicit" target="_blank">leading with empathy</a>" which is not implicit or expolicitly shown wherein.
    And so great I'm glad you can pay for an infinite amount of attorneys  to 
    have to tell you to sit around and do nothing; but money is NEVER
    compensation for stupid - IN CASE YOU FORGOT MONEY IS JUST A BUNCH OF CLOTH
    SCRIPTS AND TINY SLIPS AT THE END OF THE DAY, and as of right now there's a lot
    of stupid with a lot of CEO's and Founders right now, in tow with so called JD Armies and
    yet when they see Ziping, what do they do? They book it into the woods.) and also as a customer
    satisfaction gauranteed policy we would like to at this time offer a re-release of an
    archived website from July 4th 2022, in the meantime as compensation for the wait
    required for our delays, now viewable here: <a href="https://julyfourth.cn"  target="_blank">
    julyfourth.cn
    </a>.</p>`,
    `<h2>As a furthered restatement of our policies, such restrictions are undue given our data and privacy requirements that stand in good-faith beyond any good-faith terms of LinkedIn</h2>
    
    Writing and other content (including but not limited to comments, videos, and stuff) written or produced by Ziping Liu or ZIPING LIU may be in a form of satire (including but not limited to usage of profanity) and not reflective of the author(s)’s state of mind. Excluding words of “love” or empathic nature, satire not applicable. Regarding, words of “faith” and/or “hope”, satire may be applicable when “faith” and/or “hope” cannot be retained in good faith with all parties involved. But prismed∿love or blind-faith, remains always, or as known as love, from my faith alone, driven by my soul force and ℎ𝑜𝑡.𝑎|𝑓>𝑒𝑎𝑟𝑠.
    
    Through augmentation, self-pioneering-hope then creates synergy for unconditional-love. Because hope implies a chance of failure. Yet, blind-hope then means, the destination need not matter. Ergo, unconditional-love is then retained, if and only if, blind-faith exists as well by way of Harmony~☯️ through pioneering-new-hope. Because, through a philosophical analogy: independence and freedom can be said as mutually necessary. Anyone to anyone and/or nobody, through deduction/reduction/contradiction/�🔍 by way of empathy💕through anyone, as the logic follows, allows anyone to Anyone to BE the light for our world, as a scientific analogy - like using one candle to ∿💡⩫ another candle. I’m not special ~ I’m just a Human being and I’m just constantly striving to overcome my biological and genetic programming by way of unconditional love 💗
    
    Which is something Anyone or anyone can do, as said earlier in this paragraph. Notice-Addendum If you are chuckling to yourself and still bothering me and/or are going through actions of stopping services, you agree fully that your legal counsel and/or team cannot claim entrapment 
    when your accounting affiliates or associates lose rights regarding CPAs, and/or you agree that LIU LLC is not responsible for the loss of rights regarding CPAs and /or you agre LIU LLC has full priviledge and rights of 
    reviewing accounting books of double ledgers to ensure that th echarged ammount being sent to collections and/or have been sent is mathematically to decimal thousandth precision in round offs of cents, with full history date backed by at least 12 months of accounting 
    as deemed required to review the context by LIU LLC of: taxes witheld, and/or compnay service fees shown are rightfully stated in good-faith; and your accounts payable and/or receivable team agree that failure to comply in allowing audits of accounting is automatically 
    admission to accountants and/or accounting teams not at all in good faith as billers and thereby you agree you are liable to all grievances and/or civil penalities reuquired to LIU LLC, fo rZIpign Liu, while he is on FMLA medical leave and/or disability leave 
    from Amazon as of current wherein Amazon does not or does not know how to initiate process of such leaves appropriately and has ongoing, now, past the date of leave state, March 30th, not at all started any type of leave fo Ziping Liu,
    and moreover have withheld and frozen his assets due to knownable reasons of retaliation and/or adverse action by Amazon legal and officers of Amazon. And yyou aggree all actions hindering investitagionts ongoing will be 
    recorded as associated with Amazon Legal regardless of you or your entities assocation or affilation with Amazon and regardless of your sector or busienss sector or country of residence. 
    <p>

    
    `,
  ]


  $('#submit').click(function (event) {
    // $(`#main`).replaceWith(`<blockquote id="main" ${styles[toggle_next]}>${$(content[toggle_next]).text()}</blockquote>`);

    $(`#main`).replaceWith(
      `<blockquote id="main" ${styles[toggle]}>${content[toggle]}</blockquote>`,
    )
    var back = document.getElementById('back')
    back.style = ''
    back = document.getElementById('back')
    back.style = ''
    back = document.getElementById('submit')
    back.style = ''
    toggle_next = (toggle + 1) % toggles.length;

    back.textContent = buttonSubmitContents[toggle_next];

    toggle = toggle_next
    console.log(toggle)
    return false
  })
  $('#back').click(function (event) {
    // $(`#main`).replaceWith(`<blockquote id="main" ${styles[toggle_next]}>${$(content[toggle_next]).text()}</blockquote>`);
    toggle_next = (toggle_next -1) == -1 ? toggles.length - 1 : toggle_next - 1;
    toggle =  (toggle-1) == -1 ? toggles.length - 1 : toggle - 1;

    $(`#main`).replaceWith(
      `<blockquote id="main" ${styles[toggle_next]}>${content[toggle_next]}</blockquote>`,
    )
    var back = document.getElementById('back')
    back.style = ''
    back = document.getElementById('back')
    back.style = ''
    back = document.getElementById('submit')
    back.style = ''
    back.textContent = buttonSubmitContents[toggle];
    
    console.log(toggle)
    
    return true
  })
})
// let content2 = [
//   `<p style="font-family:lunatix,sans-serif; font-size:16pt;">
//                         <h3>Since LinkedIn Security suddenly seems to have forgotten how to unrestrict linkedin accounts within a timely fashion because it's been over 11 days now of nothing but undue process in restrictions.</h3>
//                         <cite>Forgetting how, well it's obvious this "forggetting of how to unrestrict" is by means done from Amazon Legal, given how it was so desperate in finding ways to outwit Dr. Liu
//                         that it called the FBI to go give Dr. Liu a scare even though Dr. Liu told Amazon Legal that he was working with the FBI since Amazon Legal is obvously at a stage of pre-emptive motions in 
//                         retaliation courses towards Ziping Liu and that Ziping Liu says don't do it it wont' be wnat you think you wil gain from such actions. 
//                         I am not what you think I am: below Andy jassy or Jeff bezos as a person. Of course it would be such a case that Amazon Legal now is just that desperate to try to 
//                       somehow, <b>still</b>, in their deluded minds as arch-angles for God Andy and his son Adam that Ziping Liu doesn't exist and Ziping Liu's medical leaves 
//                   that he needs to get his disability issues resolved since I guess it's hard to actually understand that Ziping Liu has a disabilities, as you can see from the 
//               medications he takes for his ailments, and such be issues like this happening</cite>
//                           Notice of billable payments to collect from for all Billers: here's another entity to send to collections for billing: LInkedIn they owe us ${
//                             (new Date().getDay() - 15) * 5
//                           } thousand USD in penalties as of now for non clear, vague
//                           and non-compliant in business operating ethics for domestic incoporated businessies in California, odd)</b>,
//                       And so we would like to express our sincere apoligies for the delays in our plans, it's very
//   difficult to do IT PRESS, RESEARCH, and SECURITY <cite>(Because of course the FBI is too scared to
//   provide adequate security for ZIPING LIU; and it's simply a fairytale of a true tale of stupidity and idiocy by so
//   called Andy a father of 2 - well thanks to him he's also the father of the New Panama Papers
//   BORN OUT OF NONE OTHER THAN the savage wastelands of the Amazonian
//   egregious jungles,</cite>`,
//   `<h3>As a further restatement of our policies, such restrictions are undue given our data and privacy requirements that stand in good-faith beyond any good-faith terms of LinkedIn</h3>
//   Writing and other content (including but not limited to comments, videos, and stuff) written or produced by Ziping Liu or ZIPING LIU may be in a form of satire (including but not limited to usage of profanity) and not reflective of the author(s)’s state of mind. Excluding words of “love” or empathic nature, satire not applicable. Regarding, words of “faith” and/or “hope”, satire may be applicable when “faith” and/or “hope” cannot be retained in good faith with all parties involved. But prismed∿love or blind-faith, remains always, or as known as love, from my faith alone, driven by my soul force and ℎ𝑜𝑡.𝑎|𝑓>𝑒𝑎𝑟𝑠.
//   Through augmentation, self-pioneering-hope then creates synergy for unconditional-love. Because hope implies a chance of failure. Yet, blind-hope then means, the destination need not matter. Ergo, unconditional-love is then retained, if and only if, blind-faith exists as well by way of Harmony~☯️ through pioneering-new-hope. Because, through a philosophical analogy: independence and freedom can be said as mutually necessary. Anyone to anyone and/or nobody, through deduction/reduction/contradiction/�🔍 by way of empathy💕through anyone, as the logic follows, allows anyone to Anyone to BE the light for our world, as a scientific analogy - like using one candle to ∿💡⩫ another candle. I’m not special ~ I’m just a Human being and I’m just constantly striving to overcome my biological and genetic programming by way of unconditional love 💗<br><br>
//   Which is something Anyone or anyone can do, as said earlier in this paragraph.<br>
//   `,
//   `<h2>Notice-Addendum: If you<sup> *</sup> are chuckling to yourself and still bothering me</h2>
//   <p>And/or are going through actions of stopping services as a <sup>** </sup>billing specialist; you are free to chuckle and regardless:
//   <br>you agree fully that your legal counsel and/or team cannot claim entrapment 
//   when your accounting affiliates or associates lose rights regarding CPAs, and/or you agree that LIU LLC is not responsible for the loss of rights regarding CPAs and /or you agre LIU LLC has full priviledge and rights of 
//   reviewing accounting books of double ledgers to ensure that th echarged ammount being sent to collections and/or have been sent is mathematically to decimal thousandth precision in round offs of cents, with full history date backed by at least 12 months of accounting 
//   as deemed required to review the context by LIU LLC of: taxes witheld, and/or compnay service fees shown are rightfully stated in good-faith; and your accounts payable and/or receivable team agree that failure to comply in allowing audits of accounting is automatically 
//   admission to accountants and/or accounting teams not at all in good faith as billers and thereby you agree you are liable to all grievances and/or civil penalities reuquired to LIU LLC, fo rZIpign Liu, while he is on FMLA medical leave and/or disability leave 
//   from Amazon as of current wherein Amazon does not or does not know how to initiate process of such leaves appropriately and has ongoing, now, past the date of leave state, March 30th, not at all started any type of leave fo Ziping Liu,
//   and moreover have withheld and frozen his assets due to knownable reasons of retaliation and/or adverse action by Amazon legal and officers of Amazon. And yyou aggree all actions hindering investitagionts ongoing will be 
//   recorded as associated with Amazon Legal regardless of you or your entities assocation or affilation with Amazon and regardless of your sector or busienss sector or country of residence.</p>`
//   `       <p class="form__pre-action__description__nape"><strong>Tip: </strong>You can upload a
//                           picture clicked with your cell phone if needed.<cite>We actually have a back up page of our linkedin.com/in/liu,<br>
//                           you can view it <a href="https://jeffbezos.art">here</a> since we knew it was gong to happen.</cite>
//                       </p>`,
//                       ``,
//                       `<p>
//                       And if you can't resolve an issue from an employee 
//                       that isn't even that hard of an executive level of cirifical error to solve, 
//                       then why are you in your role and position because it's been 90 days and what ahve we done?
//                       You ahve lead the ERC Amazon to have achieved nothing, no progress and by the way that is a huge demoralizing 
//                       effect on your employees with faile dleaderships towards resolutions in midst problems;
//                       so you are literally leading in the opossite direction that your leadership priciples define, 
//                       one being "<a href="https://aboutamazon.me/implicit" target="_blank">leading with empathy</a>" which is not implicit or expolicitly shown wherein.
//                       And so great I'm glad you can pay for an infinite amount of attorneys  to 
//                       have to tell you to sit around and do nothing; but money is NEVER
//                       compensation for stupid - IN CASE YOU FORGOT MONEY IS JUST A BUNCH OF CLOTH
//                       SCRIPTS AND TINY SLIPS AT THE END OF THE DAY, and as of right now there's a lot
//                       of stupid with a lot of CEO's and Founders right now, in tow with so called JD Armies and
//                       yet when they see Ziping, what do they do? They book it into the woods.) and also as a customer
//                       satisfaction gauranteed policy we would like to at this time offer a re-release of an
//                       archived website from July 4th 2022, in the meantime as compensation for the wait
//                       required for our delays, now viewable here: <a href="https://julyfourth.cn"  target="_blank">
//                       julyfourth.cn
//                       </p>`
// ]