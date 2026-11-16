/* =====================================================================
   Math Adventures GCC — Tutor training · TEXTS (EN)
   Translators: edit only the text inside quotes. Do not change ids, keys,
   numbers (a: = correct answer index) or anything outside the quotes.
   ===================================================================== */
window.KL_CONTENT = (function(){
const LTR = s => `<span class="ltr">${s}</span>`;
const minEN = n => n+' min';

/* ---------- interface texts ---------- */
const UI = {
  foot:'© 2026 Kodland. Internal training material for Math Adventures tutors.<br>This material is the exclusive property of Kodland. Unauthorized duplication, distribution, or use outside of Kodland’s internal training program is strictly prohibited.',
  sub:'Math Adventures Training', back:'← Modules', min:minEN, mins:n=>n+' minutes',
  st:{intro:'Introductory part', collab:'Collaborative work', self:'Self-study', refl:'Reflection', add:'Additional part'},
  flipT:'Click a card to flip it', inter:'Interactive', tap:'CLICK TO FLIP ↻',
  carT:'Swipe through', carP:'Carousel', yourPart:'Your part:',
  sortT:'Mini game: Do or Don’t?', score:'Score',
  tlT:'The 80-minute lesson', clickBlock:'Click a block',
  addBtn:(n,m)=>`➕ <b>${n}</b> · up to ${m} min — click to see when to use it`, onlyIf:'Only if time allows', starts:(s,m)=>`Starts ${s} · ${m} minutes`,
  seqDone:(o,n)=>`${o} / ${n} correct on the first try`, again:'Play again', qOf:(i,n)=>`Question ${i} of ${n}`, next:'Next →', seeRes:'See result', notQuite:'Not quite — try another option.',
  iconsT:'Test yourself: what does this icon mean?', scenT:'Choose the best reaction', game:'Game',
  ckT:'Before your first lesson', ready:'ready', readyToast:'✅ You are ready for your first lesson!', step:'Step',
  rulesDone:'All 10 rules read — you know the standard for every lesson.',
  modes:`<div class="modes">
      <div class="mode c"><span class="gbtn red">▶</span><h4>Collaborative mode</h4><ul><li>You share your screen and lead the group</li><li>New topic: theory + guided practice</li><li>Discussion, games, questions to everyone</li></ul></div>
      <div class="mode s"><span class="gbtn blue">▶</span> <span class="gbtn green">▶</span><h4>Self-study mode</h4><ul><li>Each student works alone in Genially</li><li>Students share screens; you switch and support</li><li>Shows each child’s real understanding</li></ul></div></div>
      <div class="callout ct"><span class="ci">💡</span><span>Self-study button: <b>blue</b> in Levels 4–5, <b>green</b> in Levels 6–7. Collaborative button: <b>red/pink</b> in every level.</span></div>`,
  legend:[['Mandatory slide','always teach it'],['Additional slide','use if time allows'],['Additional, higher difficulty','for strong groups'],['Hint','navigating question, scheme or clue'],['Answer','hide it again so students reproduce it'],['Audio','share your screen with sound'],['Tutor’s direct speech','in the lesson plan'],['Step-by-step','explanation button'],['Collaborative mode','button'],['Self-study','button, Levels 4–5'],['Self-study','button, Levels 6–7']],
  gc:{leg:[['Group name',(slot,txt)=>`Your group’s code. The last part shows the <b>day and start time</b>: <code>${slot}</code> = ${txt}.`],
     ['Course materials',()=>`The exact course and level you must teach in this group.<div class="gcwarn"><b>Use ONLY this course.</b> Open the Wiki lesson plan and the Genially lesson of exactly this level — never materials from another level, even if the topic looks similar.</div>`],
     ['Age range',()=>`How old your students are. Adapt your language, pace and examples to this age.`],
     ['Comments',()=>`Notes from the TL or CS team about the students in this group. <b>Read them before the lesson.</b>`]]},
  lv:{age:'Age', school:'School level', lessons:'Lessons', lessonsV:'32 · weekly', lesson:'Lesson', lessonV:'80 min', group:'Group', groupV:'Up to 8', diff:'Difficulty', mascot:'Mascot', selfBtn:'Self-study button', colors:{blue:'Blue',green:'Green'},
    goal:'🎯 Main goal', entry:'🤓 Students should already…', track:'👀 How progress is tracked',
    trackL:['<b>Self-study tasks</b> in every lesson','<b>Weekly challenge</b> — gamified, replaces homework','<b>Quest</b> every 8 lessons (term review)','<b>Exit-grade exam</b> in lesson 32'],
    mapP:'Each level has <b>4 modules × 8 lessons</b>. The lesson you will teach first is highlighted in pink.', syl:n=>'Level '+n+' syllabus', mods4:'4 modules', modOf:i=>`Module ${i} of 4`, result:'Result:',
    planP:'The first lesson of the year: you meet the group, set routines and start the first topic.', obj:'📄 Lesson objectives', out:'🎓 Learning outcomes', sched:'M1L1 schedule',
    collabGoal:'Recap, new topic and guided practice on your shared screen.', bonus:'Bonus slides for fast finishers', nextL:'In the next lesson… – 1 min: ', inThis:'In this lesson: ',
    walkP:'Click through the key slides of the first lesson. For each one you see the stage, the timing and what <b>you</b> do. Click the picture to enlarge it.', slidesT:'M1L1 slides', slidesN:'10 slides',
    nextC:'In the next lesson:', nextC2:'Announce it with excitement — it motivates students to come back.',
    secs:['📋 Course at a glance','🗺️ Course map','🧱 First lesson plan','🎬 M1L1 walkthrough','💡 Tutor tips']},
  home:{eyebrow:'🧮 Tutor training program · GCC', dev:'DEV · all modules open', h1:'Prepare to teach<br><span class="h-pill">Math Adventures</span><br>to kids',
    p:(n,p)=>`Work through all ${n} modules and pass each quiz with at least ${p}% to unlock the next one. Levels 4–7 · groups of up to 8 · 80-minute lessons.`,
    completed:'modules completed', yours:'Your modules', module:i=>'Module '+i, done:p=>`✓ Done · ${p}%`, start:'Start', locked:'🔒 Locked', qlen:n=>n+'-question quiz', complete:i=>'Complete Module '+i,
    finalStage:'Final stage', finalT:'Training complete', finalD:'Finish the training and get ready for your Digital Skill Test (DST).', open:'Open', passAll:'Pass all modules first'},
  mod:{of:(i,n)=>`Module ${i} of ${n}`, obj:'Objective:', quizInfo:(q,p,k,last)=>`The quiz has ${q} questions. Score at least ${p}% (${k} of ${q}) to ${last?'finish the training':'unlock the next module'}.`, take:'📝 Take the quiz →'},
  quiz:{ctr:(m,i,n)=>`Module ${m} · Question ${i} of ${n}`, ok:'✅ Correct!', bad:'❌ Not quite. Review this part of the module after the quiz.', nextQ:'Next question →', seeMine:'See my result →',
    passed:'Module passed!', almost:'Almost there!', of:(o,n)=>`${o} of ${n} correct.`, unlocked:'The next module is now unlocked.', allDone:'You finished all modules!', need:p=>`You need at least ${p}%. Review the module and try again.`,
    nextM:t=>`Next: ${t} →`, finish:'Finish the training 🎉', retry:'Try the quiz again', review:'Review the module', all:'← All modules'},
  fin:{h:'Congratulations!', lbl:'Training complete', t:n=>`You have passed all ${n} modules`, p1:'Please <b>close this training</b> and go back to the <b>LMS</b>.', p2:'Wait a moment — your <b>Digital Skill Test (DST)</b> will appear there automatically.', back:'← Back to modules'},
  toast:{prev:'🔒 Pass the previous module first.', all:'🔒 Pass all modules first.'},
  title:'Math Adventures GCC — Tutor training', dir:'ltr'
 };

/* ---------- surveys (English in every language) ---------- */
const SURVEY = {
  /* Surveys are in English in every language (decision for GCC).
     The ids and keys below are Google Sheet columns — never translate them. */
  sectionTitle:'📝 Final survey',
  startTag:'Before you start',
  startTitle:'Quick start survey',
  startIntro:'Please answer a few short questions before you start the training. It takes about 1 minute.',
  finalTitle:'Final survey',
  finalPill:'Required',
  finalIntro:'Tell us how you feel now that you have finished the training. Your e-mail and region are already filled in.',
  finalDone:'Thank you! Your final survey has been sent. The module check is now unlocked.',
  lockMsg:'🔒 Send the survey above to unlock the module check.',
  emailLabel:'Corporate e-mail',
  emailError:'Please enter your corporate e-mail (it must contain @kodland).',
  regionLabel:'Region',
  regionPlaceholder:'Choose your region',
  required:'This question is required.',
  optional:'(optional)',
  scaleMin:'Not at all',
  scaleMax:'Completely',
  send:'Send',
  devSkip:'Skip survey (dev mode)',
  fixErrors:'Please complete the highlighted fields.',
  thanks:'Thank you! Your answers have been sent.',
  /* Region keys (fixed, English) */
  regions:[
    {key:'brazil', label:'Brazil'}, {key:'latam', label:'LATAM'}, {key:'mena', label:'MENA'}, {key:'italy', label:'Italy'},
    {key:'poland', label:'Poland'}, {key:'uk', label:'UK'}, {key:'usa', label:'USA'}, {key:'indonesia', label:'Indonesia'},
    {key:'gcc', label:'GCC'}, {key:'cis', label:'CIS'}],
  /* Region preselected from the language (the tutor can change it) */
  defaultRegion:{ es:'latam', pt:'brazil', it:'italy', pl:'poland', ru:'cis', tr:'mena', id:'indonesia', 'en-US':'usa', ar:'gcc' },
  /* Feeling options: key = value sent to the Sheet */
  feelings:[
    {key:'excited', emoji:'🤩', label:'Excited'}, {key:'curious', emoji:'🤔', label:'Curious'}, {key:'calm', emoji:'😌', label:'Calm'},
    {key:'unsure', emoji:'😕', label:'Unsure'}, {key:'worried', emoji:'😟', label:'Worried'}, {key:'overwhelmed', emoji:'😵', label:'Overwhelmed'}],
  startQuestions:[
    {id:'feeling', type:'choice', text:'How do you feel about this new launch right now?'},
    {id:'confidence', type:'scale', text:'How confident do you feel about teaching this new course or format?'},
    {id:'understand_why', type:'scale', text:'I understand why we are making this change.'},
    {id:'know_where', type:'scale', text:'I know where to find what I need and who to ask for help.'},
    {id:'worries', type:'open', optional:true, text:'What worries you most about this launch?'}],
  finalGroups:[
    {title:'How you feel', questions:[
      {id:'feeling', type:'choice', text:'How do you feel about this new launch now?'},
      {id:'confidence', type:'scale', text:'How confident do you feel about teaching this new course or format?'},
      {id:'understand_why', type:'scale', text:'I understand why we are making this change.'},
      {id:'know_where', type:'scale', text:'I know where to find what I need and who to ask for help.'}]},
    {title:'Your confidence to teach', questions:[
      {id:'ready_first_lesson', type:'scale', text:'I feel ready to run my first lesson from start to finish.'},
      {id:'know_course', type:'scale', text:'I know what students do and achieve in this course.'},
      {id:'ready_tools', type:'scale', text:'I feel ready to use Back Office, Wiki, Genially, the Classroom and the tools in class.'}]},
    {title:'The training materials', questions:[
      {id:'training_clear', type:'scale', text:'The training was clear and easy to follow.'}]}]
};

/* ---------- training content ---------- */

/* ---------- shared building blocks ---------- */
const STAGES = [
  {key:'intro', name:'Introductory part', short:'Introduction', min:20, start:'00:00', color:'#7C5CFF',
   goal:'Mark attendance, get to know each other, set the atmosphere and announce the plan.',
   items:['Greeting from the tutor and the mascot','Red / blue (green) button','Agreements','Getting to know each other','How to use Classroom and Kodland Platform','Mode of work','Level & Module intro','Objectives and plan of the lesson']},
  {key:'collab', name:'Main part · Collaborative work', short:'Collaborative work', min:35, start:'00:20', color:'#FF4F8B',
   goal:'Recap, new theory and guided practice together on the tutor’s shared screen. Ends with a 3-minute break.',
   items:['Recap game (warm-up)','New topic: short theory','Guided practice with hints and answers','Word problems / real-life task','Break – 3 min']},
  {key:'self', name:'Main part · Self-study', short:'Self-study', min:15, start:'00:55', color:'#2F80ED',
   goal:'Each student works alone in the Genially presentation while sharing their screen. You switch between screens and support individually.',
   items:['Send the link and logins','All students share their screens','Students click the self-study button on slide 3','Bonus slides for fast finishers','Call everyone back after 15 min']},
  {key:'refl', name:'Reflection', short:'Reflection', min:10, start:'01:10', color:'#2BB673',
   goal:'Summarise results, revise key ideas, check how students feel and motivate them for the next lesson.',
   items:['Summarising the lesson – 2 min','Let’s revise everything – 4 min','Reflection – 3 min','In the next lesson… – 1 min']}
];
const GROUPCARD = {
  name:'GCC_grp_512_', slot:'SAT-17', slotText:'Saturday, 17:00',
  course:'[2310]Math Adventures Level 4[2026][8-10][80 min][32 L][GCC][in progress]',
  left:[['👤','Tutor','Your name'],['🛠️','Tech Support','–'],['💼','Business Branch','GCC'],['🔻','AMO Funnel','GCC Pipeline'],['🈯','Language','Arabic'],['🌐','Timezone','Asia/Dubai']],
  right:[['🏷️','[21] Group | standard'],['👥','6 students'],['⏱️','80 minutes'],['AGE','8-10 years'],['📅','0/32'],['🗓️','2027-06-26']],
  students:[['Ahmed','ahmed@email.com'],['Layla','layla@email.com']]
};
const ADDITIONAL = {name:'Additional part (optional)', min:10,
  goal:'Logic tasks, a math “trick” or a surprise. It is NOT part of the lesson timing — use it only if you have spare time, and skip it without guilt if you don’t.'};

/* ---------- MODULE 1 ---------- */
const M1 = {
  id:1, icon:'🧭', short:'Math Adventures',
  title:'What is Kodland Math Adventures?',
  desc:'The course, our students, parents’ expectations, your role, the lesson model and the tools you need.',
  obj:'Understand what Math Adventures is, who our students are, what parents expect, what your role is, and how every 80-minute lesson and its tools work.',
  pages:[
    {title:'🎒 Welcome to Math Adventures', blocks:[
      {t:'lead', html:`<b>Math Adventures</b> is Kodland’s online math course for children. In GCC you will teach <b>Levels 4–7</b> — four courses, each one a full school year of math, taught in small online groups through interactive Genially lessons.`},
      {t:'chips', items:[['🎓','Levels 4 – 7'],['🙂','Ages 8 – 13'],['📅','32 lessons per level'],['🗓️','1 lesson per week'],['⏱️','80 minutes'],['👥','Up to 8 students'],['🏠','Weekly challenge instead of homework']]},
      {t:'quote', html:`Our main goal: give children strong math skills <b>and</b> remove the fear behind phrases like <i>“Math is not for me”</i> or <i>“Math is too difficult.”</i>`},
      {t:'cards3', items:[
        ['🧩','4 modules per level','Every level has 4 modules × 8 lessons. Lesson 8 of each module is a review / quest lesson.'],
        ['🏫','Aligned with school','Topics follow the grade-level school curriculum, so students stay on track — and ahead.'],
        ['📈','Progress every lesson','The self-study part of every lesson shows you exactly how each child is doing.']]}
    ]},
    {title:'🧒 The student at the centre', blocks:[
      {t:'p', html:`Everything in the course is built around the child, not around the textbook. Tap each card to see what this means in a real lesson.`},
      {t:'flips', items:[
        ['💪','Confidence before speed','We want children to feel “I can do math”. A confident child learns faster than a scared one.','In the lesson: praise the strategy, not only the right answer. Mistakes are normal steps.'],
        ['🌍','Math from real life','Money, games, temperature, pizza, sports tournaments — every topic is linked to the child’s world.','In the lesson: click “How can I use it?” on the module intro slide and ask students for their own examples.'],
        ['🧠','Thinking, not memorising','Students must understand <i>why</i> a rule works, not just repeat it.','In the lesson: ask “How did you get that?” even when the answer is correct.'],
        ['🙋','Everyone participates','In a group of 8 the quiet child can easily disappear. Our lessons are built so that every child speaks.','In the lesson: call students by name and pass questions around the group.'],
        ['🚀','Independence','In the self-study part each child works alone at their own pace.','In the lesson: support with hints and questions — do not solve the task for them.'],
        ['🎮','Learning through play','Quizzes, games, mascots, quests and weekly challenges keep motivation high.','In the lesson: use the games with energy — your mood is contagious!']]}
    ]},
    {title:'👪 What parents expect', blocks:[
      {t:'p', html:`Parents choose Kodland for clear reasons. Swipe through their expectations and what <b>you</b> do to meet each one.`},
      {t:'carousel', items:[
        {icon:'🏫', title:'“My child keeps up with school.”', body:'Each level follows the grade curriculum: Level 4 ≈ Grade 4, Level 7 ≈ Grade 7.', you:'Teach every mandatory slide, check understanding, and link topics to what students see at school.'},
        {icon:'😌', title:'“My child is no longer afraid of math.”', body:'Many children come to us after bad experiences at school.', you:'Create a safe atmosphere: no mocking, no rushing, celebrate effort.'},
        {icon:'📊', title:'“I can see real progress.”', body:'Progress is tracked through self-study tasks, weekly challenges and a quest every 8 lessons.', you:'Watch every child during self-study and note who needs extra support.'},
        {icon:'✨', title:'“Lessons are fun, not boring.”', body:'Genially games, mascots and real-life stories make math attractive.', you:'Use your voice, names, and the 📢 tutor phrases. Keep the pace lively.'},
        {icon:'⏰', title:'“Lessons are organised and on time.”', body:'Parents pay for 80 well-structured minutes.', you:'Start on time, follow the stage timing, end with reflection and a clear “next lesson”.'}]}
    ]},
    {title:'🧑‍🏫 Your role as a tutor', blocks:[
      {t:'cards3', items:[
        ['🧭','Guide','You lead the group through the presentation and explain new ideas simply.'],
        ['🔎','Observer','You watch how every child thinks — especially in self-study — and react in time.'],
        ['🔥','Motivator','You keep energy high, praise effort and help children believe in themselves.']]},
      {t:'cards3', items:[
        ['🗂️','Organiser','You manage time, logins, links, screens and the stage plan.'],
        ['❓','Question-asker','You ask navigating questions instead of giving ready answers.'],
        ['🤝','Team member','You report technical problems, follow Kodland standards and use the Wiki.']]},
      {t:'sort', labels:['✅ Do','❌ Don’t'], items:[
        ['Ask “What is the difference between neighbouring numbers?” when a student is stuck on a pattern.',0,'Navigating questions help students find the rule themselves.'],
        ['Show the answer immediately so the group doesn’t lose time.',1,'Use the 💡 hint first. Show 👁 answers only after students have tried.'],
        ['Call students by their names during the introduction.',0,'Names make children feel seen and keep them active.'],
        ['Let the most active student answer every question.',1,'Pass questions around the group so everyone participates.'],
        ['Skip the additional part when time is short.',0,'The additional part is outside lesson timing — reflection is more important.'],
        ['Skip the reflection to finish all practice slides.',1,'Reflection is a mandatory stage. Always close the lesson properly.']]}
    ]},
    {title:'⏱️ How a lesson works', blocks:[
      {t:'p', html:`Every Math Adventures lesson uses the <b>special teaching model</b>: the group first works <b>together</b> with you, then each child works <b>alone</b>.`},
      {t:'modes'},
      {t:'timeline'}
    ]},
    {title:'💻 Tools & technical setup', blocks:[
      {t:'p', html:`These are the tools you will use in every lesson.`},
      {t:'tools', items:[
        ['🎥','Classroom','Where the lesson happens: video, microphone, screen sharing, chat. You share the Genially lesson here.'],
        ['🔑','Kodland Platform','Students’ accounts and lesson materials. Students use their <b>login</b> (or a private <b>magic link</b>) to enter.'],
        ['🖼️','Genially','The interactive lesson presentation. Each lesson has one link with collaborative and self-study parts. Its drawing tool is your whiteboard.'],
        ['🗄️','Backoffice','Your schedule and Group Cards (group name, course, age, students). Mark attendance here.'],
        ['📚','Wiki','The lesson plan for every lesson (with tutor notes) and the teaching-model guide. Study the plan at least 1 day before each lesson.'],
        ['🛟','Technical Support','Contact them for any technical issue you cannot solve in 1–2 minutes.']]},
      {t:'checklist', items:[
        'A laptop or PC (not a phone or tablet) with an updated Chrome browser',
        'Stable internet — use a cable or sit close to the router',
        'Headset with a microphone and a working webcam',
        'Quiet room, good light, neutral background',
        'I read the teaching-model page on the Wiki',
        'I studied the Wiki lesson plan and the Genially lesson at least 1 day before',
        'I checked my Group Card: course, age range and comments',
        'I collected every student’s Kodland Platform login BEFORE the lesson',
        'I have the magic links ready to send privately',
        'I opened the Genially lesson and clicked through it once',
        'I checked I can share my screen with computer sound (for 🔊 audio slides)',
        'Notebook and pen on my desk']}
    ]},
    {title:'🪪 How to read your Group Card', blocks:[
      {t:'p', html:`Before the first lesson with a new group, open its Group Card in Backoffice and check these <b>4 things</b>. Click a number to see what it means. <i>(The card below is an example.)</i>`},
      {t:'groupcard'}
    ]},
    {title:'✅ Before every lesson: 10 rules', blocks:[
      {t:'p', html:`These rules apply to every Math Adventures lesson in GCC. Click a rule to mark it as read.`},
      {t:'rules', items:[
        ['📚','Prepare at least 1 day before','Study the lesson plan on the <b>Wiki</b> (including the tutor notes) and click through the <b>Genially</b> lesson. The plan must be 100% clear to you before you teach it.'],
        ['🦊','Start with the story and the mascots','Open each lesson with the story and Foxy (Levels 4–5) or Rafi & Sofía (Levels 6–7). Start from a <b>real problem</b>, not from the rule.'],
        ['🔴','Two buttons = two modes','<b>Red</b> = collaborative work together; <b>blue</b> (L4–5) / <b>green</b> (L6–7) = self-study. Check in the lesson plan which part needs which mode, and run it that way.'],
        ['🎯','Focus on the learning outcomes','Every lesson ends with a check of the outcomes (“Let’s revise everything”). In Math there are no projects — the outcomes are the result.'],
        ['🖥️','Share the lesson the right way','Share the Genially lesson in Classroom <b>with computer sound</b>. Report any technical issue to Technical Support right away.'],
        ['🧑‍💻','Each student solves on their own','Every self-study task must be solved by <b>each student</b> in their own Genially (logged in with their Kodland Platform login). A task solved only on your screen tells you nothing about the student.'],
        ['🔍','Check results, then react','Watch every student’s screen during self-study. If many students made mistakes, explain again with a <b>different example</b> and let them retry.'],
        ['💡','Hint first, answer later','Give hints with guiding questions (💡). Show the full solution (👁) only after students have tried.'],
        ['⛔','Never skip self-study and reflection','Self-study shows each child’s real level; reflection closes the lesson. Bonus slides are only for fast finishers.'],
        ['✏️','Use the drawing tool as a whiteboard','Use the drawing tool in Genially (or the Classroom whiteboard) to write, draw and highlight while you explain.']]},
      {t:'seq', id:'rules', title:'True or false?', items:[
        {q:'“I can open the lesson plan for the first time 10 minutes before the lesson.”', opts:['True','False'], a:1, fb:'Study the Wiki plan and the Genially lesson at least 1 day before.'},
        {q:'“Students can watch me solve the self-study tasks on my screen.”', opts:['True','False'], a:1, fb:'Each student must solve the tasks in their own Genially — that is how you see their real level.'},
        {q:'“I start the lesson with the rule, then give examples.”', opts:['True','False'], a:1, fb:'Start with the story, the mascots and a real problem. The rule comes after.'},
        {q:'“If many students make the same mistake, I explain again with a different example.”', opts:['True','False'], a:0, fb:'Yes — a new example, then let them retry.'},
        {q:'“The Group Card tells me exactly which course and level I must teach.”', opts:['True','False'], a:0, fb:'Use only the course on the Group Card — never materials from another level.'}]}
    ]},
    {title:'🖼️ Genially toolkit', blocks:[
      {t:'p', html:`Genially slides use the same icons in every lesson. Learn them once and you will navigate any lesson with ease.`},
      {t:'legend'},
      {t:'seq', id:'icons', items:[
        {q:'<span class="rib g"></span>', opts:['Mandatory slide','Additional slide','Slide of increased complexity','Answer slide'], a:0, fb:'Green ribbon = mandatory. Never skip these slides.'},
        {q:'<span class="rib o"></span>', opts:['Mandatory slide','Additional slide','Hint','Break slide'], a:1, fb:'Orange ribbon = additional. Use it if you have time.'},
        {q:'<span class="rib r"></span>', opts:['Error slide','Mandatory slide','Additional slide of increased complexity','Self-study slide'], a:2, fb:'Red ribbon = additional slide of higher difficulty — great for strong groups.'},
        {q:'<span class="ic hint">💡</span>', opts:['Answer','Hint: navigating question, scheme or clue','Audio','Next slide'], a:1, fb:'Use the hint FIRST when a student is stuck.'},
        {q:'<span class="ic eye">👁</span>', opts:['Answer','Hint','Video','Zoom in'], a:0, fb:'The eye shows the answer — after students have tried.'},
        {q:'<span class="ic snd">🔊</span>', opts:['Mute students','Audio information — share your screen with sound','Microphone test','Music for the break'], a:1, fb:'Share your screen with computer sound so students can hear it.'},
        {q:'<span class="gbtn blue">▶</span> / <span class="gbtn green">▶</span>', opts:['Collaborative mode','Self-study mode','Start the video','End of lesson'], a:1, fb:'Blue (Levels 4–5) or green (Levels 6–7) = self-study. Red/pink = collaborative.'}]}
    ]}
  ],
  quiz:[
    {q:'What is the maximum number of students in a Math Adventures group?', o:['4','6','8','12'], a:2},
    {q:'In which part of the lesson do students work alone while you watch their shared screens?', o:['Introductory part','Collaborative work','Self-study','Reflection'], a:2},
    {q:'A student is stuck on a task. Which icon should you use first?', o:['👁 Answer','💡 Hint','🔊 Audio','The red ribbon'], a:1},
    {q:'What replaces traditional homework in Math Adventures?', o:['Worksheets sent to parents','A weekly challenge','Extra Genially slides','Nothing — there is no homework'], a:1},
    {q:'When must you study the Wiki lesson plan and the Genially lesson?', o:['Right before the lesson starts','At least 1 day before the lesson','Only before the first lesson of the year','After the lesson, to review it'], a:1},
    {q:'Which course materials do you use for a group?', o:['Any level with a similar topic','Only the course written on the Group Card','The materials you like most','The previous level, to revise'], a:1},
    {q:'What must you collect BEFORE the first lesson?', o:['Students’ school grades','Students’ Kodland Platform logins','Parents’ phone numbers','Students’ notebooks'], a:1}
  ]
};

/* ---------- MODULE 2 ---------- */
const M2 = {
  id:2, icon:'🧑‍🏫', short:'Teaching math to kids',
  title:'Teaching Math to Children Online',
  desc:'Why math feels hard, practical teaching techniques, managing a group of 8 and solving technical issues.',
  obj:'Learn practical ways to teach math to children online, prevent the most common difficulties, manage a group of up to 8 students and handle technical issues calmly.',
  pages:[
    {title:'🤯 Why math feels hard for children', blocks:[
      {t:'p', html:`Most problems in a math lesson are predictable. Tap each card to see <b>what it looks like</b> and <b>what to do</b>.`},
      {t:'flips', items:[
        ['😰','Math anxiety','Freezes, says “I don’t know” before trying, keeps the camera off.','Start with easy wins, praise effort, never compare children. Say: “Let’s try it together.”'],
        ['🧱','Gaps in the basics','Slow with times tables or place value, so every new topic feels heavy.','Use the recap games at the start. Note who struggles and give them more practice in self-study.'],
        ['📖','Reading word problems','Understands the math but doesn’t know what the question asks.','Read the problem aloud, ask “What do we know? What do we need to find?” Underline key numbers.'],
        ['🔣','Abstract symbols','Negative numbers, ∈, |−5|, letters in expressions feel meaningless.','Go concrete first: temperature, debt, steps on a number line, eggs and plates for sets.'],
        ['🏃','Rushing & guessing','Clicks answers quickly to “win”, many careless mistakes.','Ask “How did you get it?” Answers disappear after a few seconds — students must reproduce them.'],
        ['🙈','Afraid of mistakes','Doesn’t want to answer in front of the group.','Normalise mistakes: “Great mistake — let’s see what it teaches us.” Let them answer in the chat first.'],
        ['📱','Losing focus online','Looks away, plays with things, drifts during long explanations.','Keep theory short, ask questions every 1–2 minutes, use names and the break activities.'],
        ['⚖️','Different speeds in one group','Fast students get bored, slow ones give up.','Use bonus slides for fast finishers and quiet one-to-one support during self-study.']]}
    ]},
    {title:'🛠️ Practical teaching techniques', blocks:[
      {t:'p', html:`Swipe through the techniques used in every Math Adventures lesson.`},
      {t:'carousel', items:[
        {icon:'🍎', title:'Concrete → Visual → Abstract', body:'Start with real objects or stories, then a picture or model, then numbers and symbols.', you:'Example (Level 6): a prime factorisation is a “burger” of ingredients → factor tree → 18 = 2 × 3 × 3.'},
        {icon:'❓', title:'Ask, don’t tell', body:'Navigating questions lead students to the answer step by step.', you:'“What is the difference between 1 and 4? 4 and 7? So what is the rule?”'},
        {icon:'⏳', title:'Wait time', body:'After a question, wait 3–5 seconds before helping. Thinking needs silence.', you:'Count silently. If nobody answers, give a 💡 hint — not the answer.'},
        {icon:'🗣️', title:'Model one, then let them try', body:'Think aloud while solving the first example, then hand the next one to the group.', you:'“I look at the hundreds first… 5 is bigger than 3, so…” — then: “Amira, your turn!”'},
        {icon:'🌍', title:'Real-life hooks', body:'Connect every topic to money, games, shopping, sports or temperature.', you:'Rounding: “Do I have enough money for these headphones?”'},
        {icon:'💡', title:'Hint before answer', body:'Hints (💡) keep thinking alive. Answers (👁) close the task.', you:'Order: question → wait → hint → student tries → answer → short explanation.'},
        {icon:'🌟', title:'Praise strategy and effort', body:'“Clever — you rounded first!” is better than “Good job.”', you:'Be specific and sincere. Praise effort especially for anxious students.'},
        {icon:'🔁', title:'Check understanding', body:'A correct answer can be a guess. Ask for the reasoning.', you:'“How do you know?”, “Can you explain it to Omar?”, “Is there another way?”'}]}
    ]},
    {title:'👥 Classroom management in a group', blocks:[
      {t:'p', html:`With up to 8 children online, clear routines matter more than anything. These are the routines built into every lesson.`},
      {t:'cards3', items:[
        ['📜','Agreements','Camera on, raise your hand, be on time, mute when not speaking, bring a notebook. Click each one on the slide and get a “yes” from everyone.'],
        ['🙋','Names & turns','Use names all the time. Pass questions around: “Layla, then Yusuf, then Sara.”'],
        ['⏱️','Timing','Follow the stage plan. If you are behind, shorten practice — not the reflection.']]},
      {t:'h3', html:'The self-study routine (15 minutes)'},
      {t:'steps', items:[
        ['🔗','Send the Genially link (or ask students to open it from the Kodland Platform).'],
        ['🔑','Students enter their Kodland Platform login. Send logins privately in the chat if needed.'],
        ['🖥️','All students share their screens. You switch between them to follow each child.'],
        ['▶️','Students click the self-study button on slide 3 and start.'],
        ['🤝','Help individually with hints and questions. Fast students move to bonus slides.'],
        ['🔔','After 15 minutes call everyone back, stop screen sharing and share your screen again.']]}
    ]},
    {title:'🎭 What would you do?', blocks:[
      {t:'p', html:`Real situations from group lessons. Choose the best reaction.`},
      {t:'seq', id:'scen', items:[
        {q:'During recap, Omar answers every question before anyone else can speak.', opts:['Let him — he keeps the energy up','Thank him and say: “Great! Let’s hear Sara’s idea now”, then name who answers next','Mute his microphone'], a:1, fb:'Recognise his energy, then manage turns by name. Give him a bonus task later.'},
        {q:'Layla has been silent for 20 minutes with her camera off.', opts:['Ignore it — she is listening','Ask her a simple, friendly question by name and praise her answer','Tell her in front of the group that the agreements require the camera'], a:1, fb:'A gentle, easy question brings her back without embarrassment. Remind about the camera privately if needed.'},
        {q:'Yusuf finishes self-study in 6 minutes. Others need 10 more minutes.', opts:['Start the reflection for everyone','Let him wait quietly','Direct him to the bonus slides'], a:2, fb:'Bonus slides exist exactly to even out the pace of the group.'},
        {q:'A student says: “I’m just bad at math.”', opts:['“Don’t worry, not everyone is good at math.”','“You’re not bad — you’re learning. Look, you already got the first step right!”','Move on without reacting'], a:1, fb:'Challenge the belief with evidence of progress. That is the core goal of the course.'},
        {q:'It is 01:09 and you haven’t started the additional part.', opts:['Skip it and go to reflection','Do the additional part and skip reflection','Run both quickly in 5 minutes'], a:0, fb:'The additional part is outside the timing. Reflection always comes first.'},
        {q:'A student joins 15 minutes late, in the middle of collaborative work.', opts:['Restart the explanation for them','Welcome them briefly, continue, and help them catch up during self-study','Ask them to join next week'], a:1, fb:'Don’t stop the group. A short welcome and individual support later work best.'}]}
    ]},
    {title:'🔧 Technical issues & solutions', blocks:[
      {t:'p', html:`Technical problems will happen. The golden rule: <b>don’t spend more than 1–2 minutes fixing one issue while the group waits</b> — give the others a task and contact Technical Support. Tap each problem to see the fix.`},
      {t:'flips', items:[
        ['🔑','Student can’t log in','Login not working or forgotten.','Send the login or magic link privately in the chat. As a backup, send the direct Genially link.'],
        ['🐢','Genially is slow or blank','The presentation doesn’t load.','Refresh the page, try Chrome, close other tabs. Meanwhile, keep the student following your shared screen.'],
        ['🔇','Students can’t hear audio','The 🔊 slide is silent for students.','Re-share your screen with computer sound enabled.'],
        ['🖥️','Student can’t share screen','Self-study monitoring is impossible.','Guide them step by step once. If it still fails, ask them to tell you their answers in the chat and report the issue.'],
        ['📶','Your internet drops','You disconnect from the lesson.','Reconnect immediately (cable/hotspot backup). Inform Technical Support and your coordinator if the lesson was affected.'],
        ['📱','Student uses a phone','Small screen, can’t do interactive tasks.','Help as much as possible in this lesson and ask parents to use a laptop/PC next time.'],
        ['🎙️','Echo or noise','Background noise disturbs everyone.','Remind the agreement: mute when not speaking. Mute the student if needed and tell them kindly.'],
        ['🛟','Nothing works','A problem you can’t solve.','Contact Technical Support right away and continue the lesson with the other students.']]}
    ]}
  ],
  quiz:[
    {q:'A student says 9 is a prime number. What is the best reaction?', o:['“Wrong. 9 is composite.”','“Can you find a number other than 1 and 9 that divides 9?”','Show the answer with 👁 immediately','Ask another student to correct them'], a:1},
    {q:'A fast student finishes self-study early. What should they do?', o:['Wait quietly','Start the next lesson','Work on the bonus slides','Help other students by sharing answers'], a:2},
    {q:'How do you follow each student’s work during self-study?', o:['Ask them to send screenshots after the lesson','All students share their screens and you switch between them','Check the answers next week','You can’t — it is independent work'], a:1},
    {q:'Which order is correct when a student is stuck?', o:['Answer → hint → question','Question → wait → hint → student tries → answer','Answer → explanation → next task','Hint → answer → skip'], a:1},
    {q:'A technical problem takes more than 1–2 minutes to fix. What do you do?', o:['Stop the lesson until it is fixed','Give the group a task and contact Technical Support','Cancel the lesson','Ignore it'], a:1}
  ]
};

/* ---------- LEVEL MODULES ---------- */
function levelModule(o){ return o; }

const LV = {
4:{age:'8 – 10', grade:'Grade 4', diff:1, diffName:'Foundation', mascot:'Foxy 🦊', selfBtn:'blue',
  overview:'Math Adventures Level 4 strengthens core skills: working with large numbers, all four operations, fractions, and spatial thinking through geometry and measurement. Students also learn to read and build graphs and solve real-life logic problems.',
  goal:'Give children essential skills in arithmetic, early algebra and geometry, build confidence and remove misconceptions such as “Math is not for me”.',
  entry:['Completed Grade 3 math or equivalent','Basic +, −, ×, ÷','Simple fractions and place value up to thousands','Curiosity for numbers and puzzles'],
  terms:[
    ['Numbers and Operations',['Introduction to Large Numbers and Place Value','Numbers up to 100 000 000 and their place value','Comparing and Ordering Numbers','Adding and Subtracting Large Numbers – Strategies','Column method for simple addition and subtraction','Column method with big numbers and word problems','Estimation and Rounding Numbers','Problem-Solving Practice: Term Review'],'Strong foundation in large numbers, place value, addition, subtraction and estimation.'],
    ['Operations with Numbers and Fractions',['Multiplication of Whole Numbers','Division of Whole Numbers','Multiplication and Division Word Problems','Introduction to Fractions: comparing and ordering','Types of Fractions: proper, improper, mixed','Adding and subtracting fractions with the same denominator','Logic and word problems with fractions','Problem-Solving Practice: Term Review'],'Basic fraction concepts and operations applied to real-life problems.'],
    ['Geometry and Measurement',['Identifying and Classifying 2D Shapes','3D Shapes: Cubes and Rectangular Prisms','Measuring and Identifying Angles','Length and Perimeter of Squares and Rectangles','Area Using Unit Squares','Introduction to Volume of Rectangular Prisms','Measurement: Weight, Volume and Time','Problem-Solving Practice: Term Review'],'Spatial awareness and measurement: area, perimeter and volume.'],
    ['Data Analysis and Problem Solving',['Tables and Bar Graphs','Interpreting Data with Fractions and Decimals','Double-Bar Graphs and Line Graphs','Problem Solving with Data and Fractions','Estimation in Data Handling','Logical Problems and Number Sequences','Final Review: Problem-Solving Session','Exit-Grade Exam'],'Collect, represent and interpret data; logical reasoning for real-world problems.']],
  m1l1:{topic:'Introduction to Large Numbers and Place Value',
    objectives:['Get to know the students','Teach them how to use Classroom and the Kodland Platform','Revise numbers up to 1000','Introduce the concept of place value','Revise comparing numbers','Revise patterns and sequences'],
    outcomes:['Represents a three-digit number as hundreds + tens + ones without errors','Compares three-digit numbers using place value','Arranges three-digit numbers in ascending / descending order'],
    main:[['Recap: place value quiz',5,'00:20'],['Place value – theory',2,'00:25'],['Number & units comparing – practice',18,'00:27'],['Patterns and sequences',7,'00:45'],['Break: eye gymnastics with Foxy',3,'00:52']],
    self:'Place value and comparison practice', add:'Logic task with food pictures (discussion)', next:'Big numbers like millions, word problems and Foxy’s logic puzzles.'},
  slides:[
    ['l4_009','intro','00:00 · 1 min','Greeting from the tutor & Foxy','Introduce yourself with energy, then welcome Foxy — the guide of Levels 4–5. Read Foxy’s message aloud like a story.'],
    ['l4_011','intro','00:02 · 2 min','Blue or red button','Explain both buttons: <b>blue</b> = self-study, <b>red</b> = collaborative. Today click <b>red</b> and continue together.'],
    ['l4_012','intro','00:04 · 2 min','Agreements','Read each rule and click it to mark it “done”. Ask every student to confirm with a thumbs-up.'],
    ['l4_020','collab','00:20 · 5 min','Recap: place value quiz','Play the short quiz (“What is the value of the 1 in 719?”). Make sure every student answers at least once.'],
    ['l4_021','collab','00:25 · 2 min','Place value – theory','543 = 500 + 40 + 3. Click each digit to show its place name. Keep the theory short — practice follows.'],
    ['l4_026','collab','00:27 · 18 min','Comparing numbers','Compare from the <b>highest</b> place value. If those digits are equal, move to the next place. 👁 shows answers; the 💡 bulb reminds of ascending/descending order.'],
    ['l4_030','collab','00:45 · 7 min','Patterns and sequences','Ask: “What is the difference between neighbouring numbers?” Conclude the rule together (e.g. +3). Slide C reveals Foxy’s Fibonacci fun fact.'],
    ['l4_035','collab','00:52 · 3 min','Break','Click Foxy to show the eye exercise. The timer can be paused and restarted.'],
    ['l4_039','self','00:55 · 15 min','Self-study','Send link/logins, all students share screens and click the <b>blue</b> button on slide 3. Switch between screens; fast students do bonus slides.'],
    ['l4_043','add','After 01:10 · optional','Additional part: logic task','Run it as a discussion: “What number is the cake? The cookie? So which statement is false?” Skip it if time is short.']],
  tips:[
    ['0️⃣','Zero is a digit too','In 208 the 0 holds the tens place. Ask: “How many tens are in 208?”'],
    ['🔢','Compare digit by digit','Students often compare the last digits. Always start from the hundreds.'],
    ['🔁','Patterns: find the rule first','Before filling gaps, students must say the rule out loud (“+3 each time”).'],
    ['🐢','First lesson = slower pace','The introduction takes 20 minutes. It is fine — routines built today save time all year.']],
  quiz:[
    {q:'Which mascot guides students in Level 4?', o:['Rafi and Sofía','Foxy','Kodi','There is no mascot'], a:1},
    {q:'What is the topic of Level 4, Module 1, Lesson 1?', o:['Estimation and Rounding','Introduction to Large Numbers and Place Value','Prime and Composite Numbers','Fractions'], a:1},
    {q:'How should students compare 316 and 326?', o:['Compare the ones first','Compare the hundreds; equal → compare the tens','Add the digits','Compare the number of digits only'], a:1},
    {q:'Which button do students click to start self-study in Level 4?', o:['Red','Green','Blue','Orange'], a:2},
    {q:'What do you ask to help students find the rule of a number pattern?', o:['“What is the biggest number?”','“What is the difference between neighbouring numbers?”','“How many numbers are there?”','“Which number is even?”'], a:1}]},

5:{age:'10 – 12', grade:'Grade 5', diff:2, diffName:'Intermediate', mascot:'Foxy 🦊', selfBtn:'blue',
  overview:'Math Adventures Level 5 deepens core concepts: multi-digit multiplication and division, exponents, fractions, decimals and the order of operations. It also explores geometry, measurement, data analysis and logical problem-solving through real-world tasks and visual models.',
  goal:'Equip children with stronger skills in arithmetic, fractions, decimals, geometry and data, and build confidence with multi-step problems and independent thinking.',
  entry:['Completed Grade 4 math or equivalent','Confident multi-digit +, −, ×, ÷','Basic fractions, decimals, place value up to hundred thousands','Interest in puzzles and patterns'],
  terms:[
    ['Numbers and Operations',['Estimation and Rounding','Multiplication of One-Digit by Two-Digit Numbers','Multiplication of Multi-Digit Numbers','Basic Division Concepts','Division of Multi-Digit Numbers','Exponents and Powers','Order of Operations','Problem-Solving Practice: Term Review'],'Multiplication, division, estimation, exponents and order of operations.'],
    ['Fractions and Decimals',['Introduction to Fractions','Types of Fractions','Real-World Problems with Fractions','Addition and Subtraction with Fractions','Understanding Decimals','Representing and Ordering Decimals','Addition and Subtraction of Decimals','Problem-Solving Practice: Term Review'],'Types and operations of fractions and decimals in real-life contexts.'],
    ['Geometry and Measurement',['Understanding Angles','Parallel and Perpendicular Lines, Segments, Rays','Introduction to Polygons','Triangles and Quadrilaterals','Length and Area Measurement','3D Figures and Surface Area','Advanced Time Measurement','Problem-Solving Practice: Term Review'],'Angles, polygons, length, area and 3D shapes.'],
    ['Data Analysis and Problem Solving',['Frequency Tables','Line Graphs','Pie and Bar Graphs','Keywords in Word Problems','Number Sequences and Logic Problems','Using Equations in Problem-Solving','Final Review: Problem-Solving Session','Exit-Grade Exam'],'Interpret data and graphs, solve logic problems with clear strategies.']],
  m1l1:{topic:'Estimation and Rounding',
    objectives:['Get to know the students','Teach them how to use Classroom and the Kodland Platform','Show why estimation matters in everyday tasks','Teach rounding to a given digit','Use rounding to calculate by estimation','Introduce word problems solved by estimation'],
    outcomes:['Rounds numbers up to 10 000 to any digit','Calculates +, −, ×, ÷ expressions by estimation','Applies estimation to real-world problems'],
    main:[['Recap: multiplication & place value quizzes',5,'00:20'],['Rounding',8,'00:25'],['Rounding to digits',7,'00:32'],['Calculations by estimating',7,'00:40'],['Word problems',5,'00:47'],['Break',3,'00:52']],
    self:'Rounding and estimation practice', add:'Foxy’s surprise (math trick) + logic tasks', next:'Multiplication with two-digit numbers and fast methods for bigger numbers.'},
  slides:[
    ['l5_010','intro','00:01 · 1 min','Greeting from Foxy','Foxy introduces the year: rounding, multiplying, dividing and tricky problems. Read with excitement.'],
    ['l5_014','intro','00:18 · 1 min','Level 5 & Module 1 intro','Module 1: rounding & estimation, big-number × and ÷, exponents and order of operations. Click “How can I use it?” for real-life examples.'],
    ['l5_016','collab','00:20 · 5 min','Recap: multiplication quiz','Rounding needs strong times tables and place value. Play the multiplication quiz, then the place-value quiz.'],
    ['l5_019','collab','00:25 · 15 min','Rounding & rounding to digits','Look at the digit to the right of the rounding place: 0–4 → round down, 5–9 → round up. 85 → 90.'],
    ['l5_021','collab','00:40 · 7 min','Calculations by estimating','Round first, then calculate: 67 × 94 ≈ 70 × 90 = 6 300. Ask: “Why is this faster?”'],
    ['l5_029','collab','00:47 · 5 min','Word problems','“Tom walks 4 587 steps… round to the nearest thousand” → 5 000. Read the problem together first.'],
    ['l5_018','self','00:55 · 15 min','Self-study','Students click the <b>blue</b> button and solve rounding tasks (e.g. 354 + 654 ≈ 400 + 700 = 1 100). Switch between screens.'],
    ['l5_032','self','Bonus','Bonus slides','For fast students: find 10 rockets, logic ordering problem. Their goal is to even out the group’s pace.'],
    ['l5_034','add','Optional','Foxy’s surprise','A math trick. Present it as “magic” — no need to explain how it works. Invite students to show it to family.'],
    ['l5_037','refl','01:16 · 3 min','Reflection','Students raise their hands <b>physically</b> (not in Classroom) for the part they liked most.']],
  tips:[
    ['🎯','Which digit decides?','Always circle the digit to the RIGHT of the rounding place. That digit alone decides up or down.'],
    ['5️⃣','The “5” rule','5 rounds up: 4 508 → 5 000 (to thousands), 4 500 (to hundreds), 4 510 (to tens).'],
    ['≈','Use the ≈ sign','Teach students to write ≈ for estimates. An estimate is not “wrong” if it is reasonable.'],
    ['💰','Real-life money','“Do I have enough for headphones?” makes estimation meaningful.']],
  quiz:[
    {q:'What is the topic of Level 5, M1L1?', o:['Place Value','Estimation and Rounding','Integers','Order of Operations'], a:1},
    {q:'Round 6 385 to the nearest hundred.', o:['6 300','6 380','6 400','6 000'], a:2},
    {q:'Estimate 67 × 94 by rounding to tens.', o:['6 300','6 400','5 400','7 000'], a:0},
    {q:'Why does the lesson start with a multiplication and place-value recap?', o:['To fill time','Rounding and estimation depend on these skills','It is the homework check','To test the platform'], a:1},
    {q:'How do students show their reflection in Level 5 M1L1?', o:['They write an essay','They raise their hands physically for the parts they liked','They send emojis to parents','There is no reflection'], a:1}]},

6:{age:'11 – 13', grade:'Grade 6', diff:3, diffName:'Upper-intermediate', mascot:'Rafi & Sofía 👦👧', selfBtn:'green',
  overview:'Math Adventures Level 6 builds key arithmetic skills, fractions and decimals, basic algebra and geometry problem-solving. Real-life examples, interactive tasks and an adventure quest every 8th lesson show how math works in everyday situations.',
  goal:'Give children essential skills in arithmetic, algebra and geometry, grow a love for math and eliminate fear and misconceptions like “Math is not for me”.',
  entry:['Confident multi-digit operations','Operations with fractions (+, −, ×, ÷)','Basic geometry: angles and area','Simplifying basic expressions'],
  terms:[
    ['Numbers, Divisibility and Integers',['Prime and Composite Numbers','Divisibility Rules','Exponents and Powers','Common Divisors and Multiples','Introduction to Sets','Introduction to Integers','Comparing and Ordering Integers, Absolute Value','Problem-Solving Practice: Term Review'],'Number properties, divisibility, factors, multiples, integers and sets.'],
    ['Fractions, Decimals and Algebraic Foundations',['Review of Fractions and Operations','Multiplication and Division of Fractions','Review of Decimals','Multiplying Decimals','Dividing Decimals','Ratio','Algebraic Expressions','Problem-Solving Practice: Term Review'],'Fractions and decimals, ratios and first algebraic expressions.'],
    ['Geometry and Measurement',['Angles','Area of Triangles','Area of Rectangles and Parallelograms','Circumference of a Circle','Understanding Volume of Rectangular Prisms','Calculating Volume of Rectangular Prisms','Liquid Measurement','Problem-Solving Practice: Term Review'],'Areas, volumes and angles.'],
    ['Data Analysis and Probability',['Double Frequency Tables and Bar Graphs','Range of a Data Set','Arithmetic Mean','Basic Concepts of Probability','Calculating Probability','Number Sequences and Logic Problems','Final Review: Problem-Solving Session','Exit-Grade Exam'],'Data representation, mean and range, introduction to probability.']],
  m1l1:{topic:'Prime and Composite Numbers',
    objectives:['Get to know the students','Teach them how to use Classroom and the Kodland Platform','Learn the Fundamental Theorem of Arithmetic','Explore prime and composite numbers','Perform prime factorisation','Solve word problems with factorisation'],
    outcomes:['Distinguishes prime and composite numbers','Factors composite numbers into primes','Solves a word problem using factorisation'],
    main:[['Recap: multiplication box game',5,'00:20'],['Prime and composite numbers',8,'00:25'],['Factorisation practice',12,'00:33'],['Solve the problem',9,'00:43'],['Break',3,'00:52']],
    self:'Maze-chase game + factorisation tasks', add:'Surprise from Sofía and Rafi (math trick)', next:'Divisibility rules for 2, 3, 5, 9 and 10.'},
  slides:[
    ['l6_010','intro','00:01 · 1 min','Greeting from Rafi & Sofía','New guides for Levels 6–7 — older characters for older students. Let each student say hello to them.'],
    ['l6_011','intro','00:02 · 2 min','Green or red button','From Level 6 the self-study button is <b>green</b> (not blue!). Red = collaborative. Click red to continue.'],
    ['l6_021','collab','00:25 · 8 min','Prime vs composite','Prime: exactly two factors (1 and itself). Composite: more than two. Click Rafi’s bubble to discuss factors. Then play True or False.'],
    ['l6_023','collab','In the theory block','Is 1 prime or composite?','Students vote with reactions in Classroom. Reveal: 1 has only one factor, so it is <b>neither</b>.'],
    ['l6_025','collab','00:33 · 12 min','Factorisation practice','“A number is a burger made of prime ingredients.” 18 = 2 × 3 × 3. Students enter numbers and press Check.'],
    ['l6_029','collab','00:43 · 9 min','Solve the problem','Gaming tournament with 110 players: factorise 110 = 2 × 5 × 11 and test team/zone/level combinations.'],
    ['l6_031','collab','00:52 · 3 min','Break','Students choose an activity. Chat with those still at the computer — e.g. find stickers in the chat.'],
    ['l6_034','self','00:55 · 15 min','Self-study: maze chase','Students steer a rabbit with arrow keys to the correct answers, then factorise numbers. Smallest factor goes on the left.'],
    ['l6_043','add','Optional','Surprise from Sofía & Rafi','A math trick — play it several times if there is time.'],
    ['l6_046','refl','01:16 · 3 min','Reflection scale','Move the arrow on the scale for each student. Encourage comments, but don’t insist.']],
  tips:[
    ['1️⃣','1 is special','1 is neither prime nor composite — it has only one factor. Expect this question!'],
    ['2️⃣','2 is the only even prime','Every other even number is divisible by 2, so it is composite.'],
    ['🍔','Use the burger analogy','Prime factors are the “basic ingredients” that cannot be broken down further.'],
    ['⬅️','Order of factors','Write factors from smallest to largest: 180 = 2 × 2 × 3 × 3 × 5.']],
  quiz:[
    {q:'Which mascots guide students in Level 6?', o:['Foxy','Rafi and Sofía','Leo and Mia','No mascots'], a:1},
    {q:'What colour is the self-study button in Level 6?', o:['Blue','Red','Green','Orange'], a:2},
    {q:'A student asks if 1 is prime. What is correct?', o:['Yes, 1 is prime','1 is composite','1 is neither prime nor composite','It depends on the level'], a:2},
    {q:'What is the prime factorisation of 18?', o:['2 × 9','3 × 6','2 × 3 × 3','1 × 18'], a:2},
    {q:'Which statement is TRUE?', o:['9 is prime','2 is the only even prime number','15 is prime','All odd numbers are prime'], a:1}]},

7:{age:'12 – 13', grade:'Grade 7', diff:4, diffName:'Advanced', mascot:'Rafi & Sofía 👦👧', selfBtn:'green',
  overview:'Math Adventures Level 7 helps students master rational numbers, algebraic expressions and equations, and solve real-world problems with proportions, percentages and geometry. Students also explore statistics and probability, with an adventure quest every 8th lesson.',
  goal:'Equip children with advanced skills in rational numbers, algebra and geometry, build confidence with complex topics and overcome misconceptions like “Math is too difficult”.',
  entry:['Operations with whole numbers, fractions and decimals','Simple equations and simplifying expressions','Angles, area and properties of shapes','Proportions and percentages','Reading graphs and calculating the mean'],
  terms:[
    ['Numbers, Rational Numbers and Ratios',['Review of Integers and Basic Operations','Multiplication and Division of Integers','Understanding and Using Exponents','Review of Fractions and Decimals','Operations with Fractions and Decimals','Ratio and Proportion Basics','Working with Percentages','Problem-Solving Practice: Term Review'],'Integers, rational numbers, ratios and percentages.'],
    ['Expressions, Patterns and Equations',['Review of Algebraic Expressions','Simplifying Algebraic Expressions','Expanding Algebraic Expressions','Patterns and Rules in Algebraic Form','Principle of Equality in Equations','Introduction to Two-Step Equations','Two-Step Equations with Decimals and Fractions','Problem-Solving Practice: Term Review'],'Expressions, patterns and solving equations.'],
    ['Geometry and Measurement',['Lines and Angles','Introduction to Polygons','Properties of Quadrilaterals','Area and Perimeter of Quadrilaterals','Circle Circumference and Arc Length','Area of Circles and Sectors','Different Views of Solids','Problem-Solving Practice: Term Review'],'Area, perimeter and properties of 2D and 3D shapes.'],
    ['Data Analysis and Probability',['Constructing and Interpreting Line Graphs','Mean, Median and Mode','Understanding and Creating Pie Charts','Converting Between Graph Types','Selecting Measures and Comparing Data','Analysing Real-Life Data','Final Review: Problem-Solving Session','Exit-Grade Exam'],'Data representation and statistical analysis.']],
  m1l1:{topic:'Review of Integers and Basic Operations',
    objectives:['Get to know the students','Teach them how to use Classroom and the Kodland Platform','Review the concept of integers','Represent integers on a number line','Review addition and subtraction of integers'],
    outcomes:['Represents any integer on a number line','Compares integers','Adds and subtracts integers','Solves word problems with integers and natural numbers'],
    main:[['Recap: historical math signs',4,'00:20'],['Set theory',5,'00:24'],['Set theory practice',3,'00:29'],['Parts of the number line',4,'00:32'],['Comparing integers – practice',5,'00:36'],['Adding & subtracting integers',4,'00:41'],['Adding & subtracting – practice',7,'00:45'],['Break',3,'00:52']],
    self:'Integer practice tasks', add:'Tournament points table (logic task)', next:'Multiplying and dividing integers by positive and negative numbers.'},
  slides:[
    ['l7_009','collab','00:20 · 4 min','Recap: historical signs','Students drag historical +, −, ×, ÷ signs to make expressions true. Hover over a sign to see where it comes from.'],
    ['l7_010','collab','00:24 · 5 min','Set theory with eggs','Yolk ∈ albumen ∈ plate. Show the “belongs to” symbol and ask for other examples of sets.'],
    ['l7_014','collab','00:24 · 5 min','ℕ ⊂ ℤ ⊂ ℚ','Natural = counting apples, integers = temperature, rational = pizza slices. Every natural number is an integer, every integer is rational.'],
    ['l7_017','collab','00:32 · 4 min','Parts of the number line','Absolute value = distance from zero: |−5| = |5| = 5.'],
    ['l7_018','collab','00:36 · 5 min','Comparing integers','Match products with storage temperatures. Hint: the distance between marks is 3. Then order from least to greatest — negatives first.'],
    ['l7_021','collab','00:41 · 11 min','Adding & subtracting integers','Move the ninja: + positive → right, + negative → left. Same signs: add and keep the sign. Different signs: subtract, take the sign of the larger.'],
    ['l7_026','collab','In practice','Word problems','A hiker at 150 m below sea level climbs 60 m: −150 + 60 = −90. Enter ALL answers, then press Check.'],
    ['l7_028','add','Optional','Tournament points table','Win +3, tie +1, loss −3. Analyse row by row: “Whole Number Warriors beat Rational Rulers → +3 and −3.”'],
    ['l7_030','refl','01:12 · 4 min','Let’s revise everything','Find the correct statements. Repeat the two sign rules one more time.'],
    ['l7_031','refl','01:16 · 3 min','Reflection scale','Ask each student how easy and how fun the lesson was. Encourage comments without pressure.']],
  tips:[
    ['🌡️','Negative comparison','−3 < −1 feels wrong to many students. Use temperature: −3 °C is colder than −1 °C.'],
    ['➕➖','Two sign rules','Same signs → add, keep the sign. Different signs → subtract, take the sign of the larger absolute value.'],
    ['📏','Draw the number line','When students struggle, go back to the number line and “walk” the steps.'],
    ['🥚','Sets: concrete first','Before symbols ∈ and ⊂, use the egg (yolk, albumen, plate) picture.']],
  quiz:[
    {q:'What is the topic of Level 7, M1L1?', o:['Prime numbers','Review of Integers and Basic Operations','Equations','Percentages'], a:1},
    {q:'Which statement about number sets is correct?', o:['Every integer is a natural number','Every natural number is an integer','Rational numbers are only fractions','0 is a natural number in this lesson'], a:1},
    {q:'What is |−5|?', o:['−5','0','5','10'], a:2},
    {q:'−150 + 60 = ?', o:['−210','−90','90','210'], a:1},
    {q:'Which comparison is correct?', o:['−3 > −1','−3 < −7','−3 < −1','2 < −1'], a:2}]}
};

const LEVEL_MODULES = [4,5,6,7].map((n,i)=>({
  id:3+i, level:n, icon:['🦊','🦊','🧑‍🤝‍🧑','🧑‍🤝‍🧑'][i], short:'Math Level '+n,
  title:'Math Adventures — Level '+n,
  desc:'Course overview, syllabus and a walkthrough of the first lesson: '+LV[n].m1l1.topic+'.',
  obj:'Know the Level '+n+' course — who it is for, what students learn during the year — and be ready to teach the first lesson: '+LV[n].m1l1.topic+'.',
  quiz:LV[n].quiz
}));

const MODULES = [M1, M2, ...LEVEL_MODULES];


return {UI, SURVEY, STAGES, GROUPCARD, ADDITIONAL, LV, MODULES};
})();
