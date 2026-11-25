(()=>{'use strict';
const KEY='rad145-interactive-v1', byId=id=>document.getElementById(id);
const clean=t=>String(t??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const rich=t=>clean(t).replace(/\n/g,'<br>');
const day=86400000;
const today=()=>new Date().toISOString().slice(0,10);
const rnd=(a,b)=>Math.floor(Math.random()*(b-a+1))+a;
const pick=a=>a[rnd(0,a.length-1)];
const shuffle=a=>{const b=a.slice();for(let i=b.length-1;i>0;i--){const j=rnd(0,i);[b[i],b[j]]=[b[j],b[i]];}return b};
const fmt=n=>Number(Number(n).toFixed(4)).toLocaleString('en-US',{maximumFractionDigits:4});
const findRoute=()=>{const parts=(location.hash||'#/').slice(2).split('/').filter(Boolean);return {page:parts[0]||'home',id:parts[1]||''}};
function readStore(){try {return JSON.parse(localStorage.getItem(KEY))||{}}catch(e){return {}}}
const state=Object.assign({cards:{},stats:{},history:[],custom:{},reports:[],theme:'light'},readStore());
if(!Array.isArray(state.reports))state.reports=[];
function save(){try{localStorage.setItem(KEY,JSON.stringify(state));return true}catch(e){alert('Browser storage could not be saved. Use Export Backup on the Progress page.');return false}}
const library=window.RAD145_DATA||{modules:[]};
function modules(){const a=library.modules.map(m=>JSON.parse(JSON.stringify(m)));for(const m of Object.values(state.custom||{})){if(!m||!m.id||!Array.isArray(m.items))continue;let old=a.find(x=>x.id===m.id);if(old){const ids=new Set(old.items.map(x=>x.id));for(const c of m.items)if(c.id&&!ids.has(c.id)){old.items.push(c);ids.add(c.id)}if(Array.isArray(m.lesson))old.lesson.push(...m.lesson)}else a.push(m)}return a}
const moduleById=id=>modules().find(m=>m.id===id);
const allItems=()=>modules().flatMap(m=>m.items.map(i=>({...i,section:m.id,sectionTitle:m.title,course:m.course})));
const itemPool=ms=>ms.flatMap(m=>m.items.filter(i=>Array.isArray(i.wrong)&&i.wrong.length>=3).map(i=>({...i,section:m.id,sectionTitle:m.title})));
const cardTotal=()=>modules().reduce((n,m)=>n+m.items.length,0);
function cardStatsFor(m){let known=0,due=0,seen=0;for(const x of m.items){let c=state.cards[x.id];if(c?.seen){seen++;if(c.streak>=2)known++;if(!c.due||c.due<=today())due++;}else due++;}return {known,due,seen,total:m.items.length}}
function questionStats(m){let attempts=0,correct=0;for(const i of m.items){let s=state.stats[i.id];if(s){attempts+=s.attempts;correct+=s.correct}}return{attempts,correct}}
const sectionLink=(p,id)=>`#/${p}/${encodeURIComponent(id)}`;
const escUrl=x=>encodeURIComponent(String(x));
const navActive=()=>{document.querySelectorAll('.nav a').forEach(a=>a.classList.toggle('active',a.hash===location.hash));};
function readCourseFilter(id){
 try{return decodeURIComponent(id)}catch{return null}
}
function pageHeader(name,intro,course='',id=''){return `<nav class="breadcrumb" aria-label="Breadcrumb"><a href="#/">All subjects</a> / ${id&&course?`<a href="${clean(sectionLink('course',course))}">${clean(course)}</a>`:clean(course||'Study Center')}</nav><h1 class="page-title">${clean(name)}</h1><p class="intro">${clean(intro)}</p>${id?`<div class="section-links"><a class="button small secondary" href="${sectionLink('study',id)}">Study notes</a><a class="button small secondary" href="${sectionLink('cards',id)}">Flashcards</a><a class="button small secondary" href="${sectionLink('test',id)}">Section test</a></div>`:''}`}
// Corrections are local, suggested changes only. Built-in answer keys are never changed here.
const CORRECTION_FORMAT='rad145-correction-reports-v1';
function correctionKey(kind,sectionId,itemId){return JSON.stringify([kind,sectionId,String(itemId)])}
function flagButton(kind,sectionId,ref){const t=flagTarget(kind,sectionId,ref);const marked=t&&state.reports.some(r=>r?.key===correctionKey(t.kind,t.sectionId,t.itemId));return `<button type="button" class="button small secondary" data-flag-kind="${clean(kind)}" data-flag-section="${clean(sectionId)}" data-flag-ref="${clean(ref)}">${marked?'Flagged — edit report':'Flag correction'}</button>`}
function flagTarget(kind,sectionId,ref){
 const m=moduleById(sectionId);if(!m)return null;
 if(kind==='lesson'){
  const i=Number(ref),l=Number.isInteger(i)?m.lesson?.[i]:null;if(!l)return null;
  return {kind:'lesson',sectionId,itemId:'lesson-'+i,course:m.course,lesson:m.title,question:l.head,answer:l.text,source:l.source||m.source};
 }
 if(kind==='reference'&&ref==='triangles')return {kind:'reference',sectionId,itemId:'formula-triangles',course:m.course,lesson:m.title,question:'Three formula triangles',answer:'Ohm: V=IR; Power: P=IV; Power loss: P=I²R. See the formulas panel for the diagram and rearrangements.',source:m.source};
 if(kind==='card'){
  const x=m.items.find(i=>i.id===ref);if(!x)return null;
  return {kind:'card',sectionId,itemId:x.id,course:m.course,lesson:m.title,question:x.q,answer:x.a,explanation:x.why||'',source:x.source||m.source};
 }
 if(kind==='quiz'){
  const i=Number(ref),x=Number.isInteger(i)?quiz?.questions?.[i]:null;
  if(!x||x.section!==sectionId)return null;
  return {kind:x.type==='number'?'numeric':'card',sectionId,itemId:x.id,course:m.course,lesson:m.title,question:x.q,answer:x.type==='number'?fmt(x.answer)+' '+x.unit:x.answer,explanation:x.why||'',source:x.source||m.source};
 }
 return null;
}
function openCorrectionEditor(button){
 const target=flagTarget(button.dataset.flagKind,button.dataset.flagSection,button.dataset.flagRef);
 if(!target)return alert('The source item could not be located. Reload this lesson and try again.');
 const key=correctionKey(target.kind,target.sectionId,target.itemId),prior=state.reports.find(r=>r?.key===key);
 document.querySelectorAll('[data-correction-editor]').forEach(el=>el.remove());
 const editor=document.createElement('div');editor.className='panel';editor.dataset.correctionEditor='true';
 editor.innerHTML=`<h3>Flag for review</h3><p class="small muted">This report is saved only in your browser until you export and share it. It will not change the official answer or your test score.</p><p><strong>Lesson:</strong> ${clean(target.lesson)}</p><p><strong>Question or topic:</strong> ${clean(target.question)}</p><p><strong>Current answer / text:</strong> ${rich(target.answer)}</p>${target.explanation?`<p class="small"><strong>Current explanation:</strong> ${rich(target.explanation)}</p>`:''}<p class="source">${clean(target.source||'')}</p><form data-correction-form><label class="field"><span>Proposed corrected answer or wording *</span><textarea name="suggested" required maxlength="4000">${clean(prior?.suggested||'')}</textarea></label><label class="field"><span>Why? Instructor slide or supporting explanation (optional)</span><textarea name="reason" maxlength="1500">${clean(prior?.reason||'')}</textarea></label><div class="toolbar"><button type="submit" class="button small">Save correction flag</button><button type="button" class="button small secondary" data-cancel-correction>Cancel</button></div></form>`;
 const host=button.closest('.lesson-card, .question-card')||(button.closest('#cardHost'))||button.closest('.panel')||button.parentElement;
 host.appendChild(editor);
 editor.querySelector('[data-cancel-correction]').onclick=()=>editor.remove();
 editor.querySelector('form').onsubmit=e=>{
  e.preventDefault();const d=new FormData(e.target),suggested=String(d.get('suggested')||'').trim(),reason=String(d.get('reason')||'').trim();
  if(!suggested){alert('Please enter a proposed corrected answer.');return;}
  const now=new Date().toISOString(),existing=state.reports.findIndex(r=>r?.key===key);
  const record={id:prior?.id||'flag-'+Date.now()+'-'+rnd(10000,99999),key,...target,suggested,reason,status:'Needs review',createdAt:prior?.createdAt||now,updatedAt:now};
  if(existing>=0)state.reports[existing]=record;else state.reports.push(record);
  if(!save())return;
  editor.innerHTML='<p><strong>Correction flagged for review.</strong> Saved locally. Export the report from Content & Backup to share it with the study-site maintainer.</p>';
  button.textContent='Flagged — edit report';
 };
 editor.scrollIntoView({behavior:'smooth',block:'nearest'});
}
function correctionManagementHTML(){
 const rows=state.reports.slice().reverse().map(r=>`<div class="lesson-card" style="margin-top:12px"><p class="small"><strong>${clean(r.lesson||r.sectionId)}</strong> · ${clean(r.kind||'item')} · ${clean(r.status||'Needs review')}</p><p><strong>Original:</strong> ${clean(r.question||'')}</p><p><strong>Current:</strong> ${clean(r.answer||'')}</p><p><strong>Suggested:</strong> ${clean(r.suggested||'')}</p>${r.reason?`<p class="small"><strong>Reason:</strong> ${clean(r.reason)}</p>`:''}<p class="tiny">${clean(r.source||'')} · ${clean(r.updatedAt||'')}</p><button class="button small secondary" type="button" data-remove-correction="${clean(r.id||'')}">Remove flag</button></div>`).join('');
 return `<div class="panel"><h2>Correction reports (${state.reports.length})</h2><p class="small">Flag questionable answers in flashcards, graded tests, or study notes. Suggestions stay on this device until you export them. An instructor/source review is required before changing the shared curriculum.</p><button class="button secondary full" id="exportCorrections" ${state.reports.length?'':'disabled'}>Export correction reports (JSON)</button><details class="details"><summary>Review my flagged items (${state.reports.length})</summary><div id="correctionList">${rows||'<p class="muted">No corrections flagged yet.</p>'}</div></details></div>`;
}
function exportCorrections(){
 if(!state.reports.length)return alert('There are no correction reports to export.');
 const reports=state.reports.map(r=>({id:r.id,kind:r.kind,sectionId:r.sectionId,itemId:r.itemId,course:r.course,lesson:r.lesson,question:r.question,answer:r.answer,explanation:r.explanation||'',source:r.source,suggested:r.suggested,reason:r.reason,status:r.status,createdAt:r.createdAt,updatedAt:r.updatedAt}));
 downloadJSON('RAD145-corrections-'+today()+'.json',{format:CORRECTION_FORMAT,exportedAt:new Date().toISOString(),reports});
}
function renderHome(course=null){const ms=modules(),h=state.history;
const courses=[...new Set(ms.map(m=>m.course))];
const selectedCourse=courses.includes(course)?course:null;
const filterHadFocus=document.activeElement?.matches('#filters button');
byId('app').innerHTML=`<div class="hero"><div class="shell"><span class="eyebrow">RAD145 • Offline study workspace</span><h1>Know it. Remember it. Apply it.</h1><p>Instructor-aligned lessons, recall cards, section quizzes, and a cumulative exam in one expandable local website. Your progress is stored in this browser.</p><a class="button" href="#/exam">Build a cumulative exam</a></div></div><main class="shell"><div class="stat-grid"><div class="stats-card"><strong>${ms.length}</strong><span>Study sections</span></div><div class="stats-card"><strong>${cardTotal()}</strong><span>Recall cards + question prompts</span></div><div class="stats-card"><strong>${h.length}</strong><span>Completed quizzes</span></div><div class="stats-card"><strong>${h.length?fmt(h.slice(-5).reduce((s,x)=>s+x.correct/x.total,0)/Math.min(5,h.length)*100)+'%':'—'}</strong><span>Average of last 5 tests</span></div></div><div class="heading-row"><div><h2>Study library</h2><p>Choose a subject, then open its notes, cards, or test.</p></div><div class="tabs" id="filters"><button class="tab${selectedCourse===null?' active':''}" data-filter="" aria-pressed="${selectedCourse===null}">All</button>${courses.map(c=>`<button class="tab${selectedCourse===c?' active':''}" data-filter="${clean(c)}" aria-pressed="${selectedCourse===c}">${clean(c)}</button>`).join('')}</div></div><div class="cards-grid" id="moduleGrid"></div><div class="panel" style="margin-top:24px"><h2>A growing study library</h2><p>New lessons and practice questions appear here as the study files are updated. You can export your saved study progress from <a href="#/progress">Progress</a> or <a href="#/manage">Content & Backup</a>.</p><p class="small muted">Study content follows the relevant instructor materials and revised references. Practice questions and numeric variations are for review, not copies of instructor exams.</p></div></main>`;
{const selected=ms.filter(m=>selectedCourse===null||m.course===selectedCourse);let previous='',previousChapter='';byId('moduleGrid').innerHTML=selected.map(m=>{const group=m.course===previous?'':`<h2 class="subject-heading">${clean(m.course)}</h2>`;const chapter=m.course==='Radiographic Positioning'||m.course==='Radiographic Physics'?m.unit.split(' · ')[0]:m.course==='Anatomy & Physiology I'?(m.unit.startsWith('Chapter 13')?m.unit.split(' · ').slice(0,2).join(' · '):m.unit.split(' · ')[0]):'';const chapterHeading=chapter&&chapter!==previousChapter?`<h3 class="chapter-heading">${clean(chapter)}</h3>`:'';previous=m.course;previousChapter=chapter;let cs=cardStatsFor(m);const q=questionStats(m);return `${group}${chapterHeading}<article class="topic-card"><div class="course-label">${clean(m.course)} · ${clean(m.unit)}</div><h3>${clean(m.title)}</h3><p>${clean(m.summary)}</p><div class="progress"><span style="width:${Math.round(cs.seen/cs.total*100)||0}%"></span></div><div class="micro">${cs.seen}/${cs.total} cards reviewed · ${q.attempts} quiz responses</div><div class="topic-actions"><a class="button small" href="${sectionLink('study',m.id)}">Study</a><a class="button small secondary" href="${sectionLink('cards',m.id)}">Cards</a><a class="button small secondary" href="${sectionLink('test',m.id)}">Test</a></div></article>`}).join('')}
const filters=byId('filters');
if(filterHadFocus)filters.querySelector('.active')?.focus({preventScroll:true});
filters.onclick=e=>{
 const button=e.target.closest('[data-filter]');
 if(!button)return;
 const hash=button.dataset.filter?sectionLink('course',button.dataset.filter):'#/';
 if(location.hash!==hash)location.hash=hash;
};
}
function triangles(){const items=[['Ohm’s Law','V','I','R','V = IR; I = V/R; R = V/I'],['Power Law','P','I','V','P = IV; I = P/V; V = P/I'],['Power Loss','P','I²','R','P = I²R; I = √(P/R); R = P/I²']];return `<div class="triangles">${items.map(([n,t,l,r,f])=>`<div class="triangle-panel"><h3>${n}</h3><div class="triangle"><div><div class="top">${t}</div><div class="left">${l}</div><div class="right">${r}</div></div></div><div class="formula-list">${clean(f)}</div></div>`).join('')}</div><p class="tiny">To use a triangle, cover the unknown. For Power Loss, I² is squared—take the square root when finding I.</p>`}
function renderStudy(id){const m=moduleById(id);if(!m)return notFound();const img={'atomic-theory':'atom_concept_diagram.png','shells-binding':'tungsten_shell_diagram.png','em-energy':'em_wave_diagram.png','circuits':'series_circuit.png'};byId('app').innerHTML=`<main class="shell">${pageHeader(m.title,m.summary,m.course,m.id)}<div class="two-col"><div>${(m.lesson||[]).map((l,i)=>`<article class="lesson-card"><h2>${clean(l.head)}</h2><p>${rich(l.text)}</p><p class="source">${clean(l.source||m.source||'')}</p>${flagButton('lesson',m.id,i)}</article>`).join('')}${img[id]?`<div class="panel"><h2>Diagram from the revised reference journal</h2><img class="study-illustration" src="assets/${img[id]}" alt="Course study illustration"></div>`:''}${id==='circuits'?'<div class="panel"><h2>Parallel circuit schematic</h2><img class="study-illustration" src="assets/parallel_circuit.png" alt="Parallel circuit diagram"></div>':''}${id==='formulas'?`<div class="panel"><h2>Three formula triangles</h2>${triangles()}${flagButton('reference',id,'triangles')}</div>`:''}${m.visuals?.length?`<section class="panel"><h2>Study visuals</h2><p class="small muted">Selected lecture illustrations and supplied labeling worksheets. See the source description below each image.</p><div class="visual-gallery">${m.visuals.map(v=>`<figure><a class="study-visual-link" data-study-visual href="${clean(v.src)}" target="_blank" rel="noopener noreferrer" title="Enlarge image: ${clean(v.label)}" aria-label="Enlarge image: ${clean(v.label)}"><img loading="lazy" src="${clean(v.src)}" alt="${clean(v.alt||v.label)}"></a><figcaption>${clean(v.label)}</figcaption></figure>`).join('')}</div></section>`:''}<div class="panel"><h2>Recall checkpoint</h2><p>There are <strong>${m.items.length}</strong> short-answer prompts and <strong>${m.numerics.length}</strong> calculation templates available for this section.</p><div class="toolbar"><a href="${sectionLink('cards',id)}" class="button">Open flashcards</a><a href="${sectionLink('test',id)}" class="button secondary">Take section test</a></div></div></div><aside><div class="panel"><h3>Source</h3><p class="small">${clean(m.source)}</p><p class="tiny">Physics notes use the revised study journals. Positioning and A&P I notes follow their instructor lectures. Source maps and documented corrections are in references/.</p><a href="references/READ_ME_FIRST.txt" class="small">Reference-file guide</a></div><div class="panel"><h3>Section progress</h3><p>${cardStatsFor(m).seen} of ${m.items.length} flashcards reviewed.</p><p>${questionStats(m).attempts} quiz answers recorded.</p><a href="#/progress" class="button secondary small">View progress</a></div></aside></div></main>`}
// Study visuals: native, accessible image dialog. Original-image links remain usable without JS.
function visualDialog(){
 let d=byId('studyVisualDialog');
 if(d)return d;
 d=document.createElement('dialog');
 d.id='studyVisualDialog';d.className='study-visual-dialog';
 d.setAttribute('aria-labelledby','studyVisualTitle');
 d.innerHTML=`<div class="study-visual-modal-head"><strong id="studyVisualTitle"></strong><button class="button small secondary" type="button" data-visual-close aria-label="Close enlarged image">Close ×</button></div><div class="study-visual-modal-body"><img id="studyVisualLarge" alt=""></div><div class="study-visual-modal-foot"><span id="studyVisualCount" class="small muted"></span><a id="studyVisualOriginal" target="_blank" rel="noopener noreferrer">Open original in new tab</a><div class="study-visual-modal-nav"><button class="button small secondary" type="button" data-visual-prev aria-label="Previous image">Previous</button><button class="button small secondary" type="button" data-visual-next aria-label="Next image">Next</button></div></div>`;
 document.body.appendChild(d);
 d.querySelector('[data-visual-close]').addEventListener('click',()=>d.close());
 d.querySelector('[data-visual-prev]').addEventListener('click',()=>showVisualAt(d,d._visualIndex-1));
 d.querySelector('[data-visual-next]').addEventListener('click',()=>showVisualAt(d,d._visualIndex+1));
 d.addEventListener('click',e=>{if(e.target===d)d.close()});
 d.addEventListener('keydown',e=>{
  if(e.key==='ArrowLeft'){e.preventDefault();showVisualAt(d,d._visualIndex-1)}
  else if(e.key==='ArrowRight'){e.preventDefault();showVisualAt(d,d._visualIndex+1)}
 });
 return d;
}
function showVisualAt(d,index){
 const links=d._visualLinks||[];
 if(index<0||index>=links.length)return;
 d._visualIndex=index;
 const a=links[index],img=a.querySelector('img'),caption=a.closest('figure')?.querySelector('figcaption')?.textContent||img?.alt||'Study visual';
 byId('studyVisualTitle').textContent=caption;
 const large=byId('studyVisualLarge');large.src=a.href;large.alt=img?.alt||caption;
 byId('studyVisualOriginal').href=a.href;
 byId('studyVisualCount').textContent=`Image ${index+1} of ${links.length}`;
 d.querySelector('[data-visual-prev]').disabled=index===0;
 d.querySelector('[data-visual-next]').disabled=index===links.length-1;
}
document.addEventListener('click',e=>{
 const a=e.target.closest('.visual-gallery a[data-study-visual]');
 if(!a||e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;
 // If dialog is unavailable, the existing target=_blank link still opens the full-size image.
 if(typeof HTMLDialogElement==='undefined'||typeof HTMLDialogElement.prototype.showModal!=='function')return;
 const links=Array.from(a.closest('.visual-gallery').querySelectorAll('a[data-study-visual]'));
 const d=visualDialog();d._visualLinks=links;
 showVisualAt(d,links.indexOf(a));
 if(!d.open)d.showModal();
 e.preventDefault();
});
let deck=null;
function cardsFor(m,filter){const a=m.items.filter(x=>{const c=state.cards[x.id];if(filter==='due')return !c?.due||c.due<=today();if(filter==='missed')return c?.streak===0&&c.seen;return true});return a}
function renderCards(id){const m=moduleById(id);if(!m)return notFound();deck={id,filter:'all',index:0,flipped:false,ids:[],order:[]};byId('app').innerHTML=`<main class="shell">${pageHeader(m.title+' — Flashcards','Try to answer before flipping. Mark “Know it” or “Again” to build a spaced-review queue.',m.course,m.id)}<div class="panel"><div class="toolbar"><label class="field" style="margin:0"><span>Cards to show</span><select id="cardFilter"><option value="all">All cards</option><option value="due">Due or new</option><option value="missed">Most recently missed</option></select></label><button class="button secondary small" id="shuffleCards">Shuffle</button><button class="button secondary small" id="shareSectionCards">Export my cards</button><button class="button secondary small push" id="showCardBuilder">+ Add card</button></div><div id="cardHost"></div></div><details class="details flash-maker" id="cardMaker"><summary>Create a flashcard (and optional quiz question)</summary><form id="addCardForm"><label class="field"><span>Question / front *</span><input name="q" required maxlength="250"></label><label class="field"><span>Short answer / back *</span><textarea name="a" required maxlength="400"></textarea></label><label class="field"><span>Explanation or example</span><textarea name="why" maxlength="600"></textarea></label><p class="small muted">To also include this card in multiple-choice tests, supply all three wrong answers.</p><label class="field"><span>Wrong choice 1</span><input name="w1" maxlength="200"></label><label class="field"><span>Wrong choice 2</span><input name="w2" maxlength="200"></label><label class="field"><span>Wrong choice 3</span><input name="w3" maxlength="200"></label><button class="button" type="submit">Save to this section</button><p class="tiny">Your additions are saved in this browser; export a backup to move them to another device.</p></form></details><details class="details" id="sharedCardsTools"><summary>Import shared flashcards (JSON)</summary><p class="small">Choose a flashcard pack sent by a classmate. Cards are placed in their matching lessons and existing cards are preserved. No scores or review history are imported.</p><label class="field"><span>Flashcard share file</span><input type="file" id="sharedCardsFileSection" accept=".json,application/json"></label><p class="tiny">Share files are separate from Progress Backup files and weekly source updates.</p></details></main>`;
byId('cardFilter').onchange=e=>{deck.filter=e.target.value;deck.index=0;deck.flipped=false;refreshDeck()};byId('shuffleCards').onclick=()=>{deck.order=shuffle(deck.order);deck.index=0;deck.flipped=false;drawCard()};byId('showCardBuilder').onclick=()=>{byId('cardMaker').open=true;byId('cardMaker').scrollIntoView({behavior:'smooth',block:'start'})};byId('shareSectionCards').onclick=()=>exportSharedCards(id);byId('sharedCardsFileSection').onchange=e=>importSharedCards(e.target.files?.[0],e.target);
byId('addCardForm').onsubmit=e=>{e.preventDefault();let f=new FormData(e.target),q=String(f.get('q')||'').trim(),a=String(f.get('a')||'').trim(),why=String(f.get('why')||'').trim(),wrong=['w1','w2','w3'].map(k=>String(f.get(k)||'').trim());if(!q||!a)return; if(wrong.some(Boolean)&&wrong.some(x=>!x)){alert('Supply all three wrong choices or leave all three empty.');return}const item={id:`custom-${id}-${Date.now()}-${rnd(100,999)}`,q,a,why:why||a,wrong:wrong.every(Boolean)?wrong:[],source:'User-created'};addCustomItem(id,item);save();e.target.reset();byId('cardMaker').open=false;refreshDeck();};refreshDeck()}
function addCustomItem(sectionId,item){let m=moduleById(sectionId);if(!state.custom[sectionId])state.custom[sectionId]={id:sectionId,items:[],lesson:[]};state.custom[sectionId].items.push(item)}
function refreshDeck(){let m=moduleById(deck.id);deck.order=cardsFor(m,deck.filter).map(c=>c.id);deck.index=0;deck.flipped=false;drawCard()}
function drawCard(){const m=moduleById(deck.id),items=m.items,ids=deck.order,host=byId('cardHost');if(!host)return;if(!ids.length){host.innerHTML='<div class="empty">No cards in this filter. Choose “All cards” to review the entire section.</div>';return}deck.index=(deck.index+ids.length)%ids.length;const x=items.find(i=>i.id===ids[deck.index]);const status=state.cards[x.id]||{},src=clean(x.source||m.source);host.innerHTML=`<div class="small muted" style="text-align:center;margin-bottom:10px">Card <strong class="flash-count">${deck.index+1} / ${ids.length}</strong> · ${status.seen?'Reviewed':'New'} ${status.due?'· Next review: '+clean(status.due):''}</div><button id="flashFace" type="button" class="flash-stage" aria-label="Flip flashcard"><span class="flash-kicker">${deck.flipped?'Answer':'Question'}</span><span class="flash-question">${clean(deck.flipped?x.a:x.q)}</span>${deck.flipped?`<span class="flash-explain">${clean(x.why||'')}</span><span class="source">${src}</span>`:''}<span class="flash-hint">Select the card to ${deck.flipped?'see the question':'reveal the answer'} · Spacebar flips</span></button><div class="flash-nav"><button class="button secondary small" id="prevCard">Previous</button><button class="button secondary small" id="flipCard">Flip</button><button class="button secondary small" id="nextCard">Next</button></div><div class="toolbar" style="justify-content:center"><button class="button warn" id="againCard">Again</button><button class="button" id="knowCard">Know it</button></div><p class="tiny" style="text-align:center">Marking a card updates its local spaced-review schedule.</p>${deck.flipped?`<div class="toolbar" style="justify-content:center">${flagButton('card',m.id,x.id)}</div>`:''}`;
byId('flashFace').onclick=byId('flipCard').onclick=()=>{deck.flipped=!deck.flipped;drawCard()};byId('prevCard').onclick=()=>{deck.index--;deck.flipped=false;drawCard()};byId('nextCard').onclick=()=>{deck.index++;deck.flipped=false;drawCard()};byId('againCard').onclick=()=>rateCard(x.id,false);byId('knowCard').onclick=()=>rateCard(x.id,true);}
function rateCard(id,known){let c=state.cards[id]||{seen:0,streak:0};c.seen++;c.streak=known?Math.min(c.streak+1,7):0;c.last=today();c.due=new Date(Date.now()+((known?[0,1,3,7,14,30,60,90][c.streak]:0)*day)).toISOString().slice(0,10);state.cards[id]=c;save();if(deck.filter!=='all'){const keep=deck.order.indexOf(id);deck.order.splice(keep,1);if(deck.index>=deck.order.length)deck.index=0}else deck.index++;deck.flipped=false;drawCard()}
function makeNumeric(template,section){const k=template.kind,id=template.id;const mul=(a,b)=>a*b;let q='',v=0,unit='',ex='';let I,V,R,P,n,t,A,Z,d,f;
switch(k){
case 'ohm-v': I=rnd(2,12);R=rnd(2,15);v=I*R;unit='V';q=`A circuit has I = ${I} A and R = ${R} Ω. Find voltage V.`;ex=`V = I×R = ${I}×${R} = ${v} V.`;break;
case 'ohm-i': I=rnd(2,12);R=rnd(2,12);V=I*R;v=I;unit='A';q=`A resistor has V = ${V} V and R = ${R} Ω. Find I.`;ex=`I = V/R = ${V}/${R} = ${v} A.`;break;
case 'ohm-r': R=rnd(2,15);I=rnd(2,12);V=R*I;v=R;unit='Ω';q=`A circuit has V = ${V} V and I = ${I} A. Find R.`;ex=`R = V/I = ${V}/${I} = ${v} Ω.`;break;
case 'power-p': V=pick([12,24,60,120,240]);I=rnd(2,10);v=V*I;unit='W';q=`Find P when V = ${V} V and I = ${I} A.`;ex=`P = VI = ${V}×${I} = ${v} W.`;break;
case 'power-v': V=pick([12,24,60,120]);I=rnd(2,8);P=V*I;v=V;unit='V';q=`Find V when P = ${P} W and I = ${I} A.`;ex=`V = P/I = ${P}/${I} = ${v} V.`;break;
case 'power-i': V=pick([12,24,60,120]);I=rnd(2,10);P=V*I;v=I;unit='A';q=`Find I when P = ${P} W and V = ${V} V.`;ex=`I = P/V = ${P}/${V} = ${v} A.`;break;
case 'loss-p':I=rnd(2,10);R=rnd(2,8);v=I*I*R;unit='W';q=`Resistive heating: I = ${I} A, R = ${R} Ω. Find power loss P.`;ex=`P = I²R = ${I}²×${R} = ${v} W.`;break;
case 'loss-i':I=rnd(2,10);R=rnd(2,8);P=I*I*R;v=I;unit='A';q=`Power loss is ${P} W through ${R} Ω. Find I.`;ex=`I = √(P/R) = √(${P}/${R}) = ${v} A.`;break;
case 'loss-r':I=rnd(2,10);R=rnd(2,8);P=I*I*R;v=R;unit='Ω';q=`Power loss is ${P} W at I = ${I} A. Find R.`;ex=`R = P/I² = ${P}/${I}² = ${v} Ω.`;break;
case 'pvr': I=rnd(2,9);R=rnd(2,10);V=I*R;v=V*I;unit='W';q=`A resistor has V = ${V} V and R = ${R} Ω. Find P without knowing I.`;ex=`P = V²/R = ${V}²/${R} = ${v} W.`;break;
case 'vpr': I=rnd(2,9);R=rnd(2,10);V=I*R;P=V*I;v=V;unit='V';q=`Power is ${P} W across resistance ${R} Ω. Find voltage V.`;ex=`V = √(PR) = √(${P}×${R}) = ${v} V.`;break;
case 'rvp': I=rnd(2,9);R=rnd(2,12);V=I*R;P=V*I;v=R;unit='Ω';q=`Power is ${P} W with V = ${V} V. Find resistance R.`;ex=`R = V²/P = ${V}²/${P} = ${v} Ω.`;break;
case 'mas':I=pick([100,150,200,250,300,400,500]);t=pick([.1,.2,.4,.5,1,2]);v=I*t;unit='mAs';q=`Current is ${I} mA for ${t} seconds. Find mAs.`;ex=`mAs = mA×s = ${I}×${t} = ${fmt(v)} mAs.`;break;
case 'qit':I=rnd(2,10);t=rnd(2,8);v=I*t;unit='C';q=`Current is ${I} A for ${t} seconds. Find charge Q.`;ex=`Q = I×t = ${I}×${t} = ${v} C.`;break;
case 'half':A=pick([80,100,120,200,400]);t=pick([4,6,8,10]);n=rnd(1,4);v=A/2**n;unit='mCi';q=`A radioisotope begins at ${A} mCi and has a ${t}-day half-life. How many mCi remain after ${t*n} days?`;ex=`${t*n}/${t} = ${n} half-lives. Remaining = ${A}×(1/2)^${n} = ${fmt(v)} mCi.`;break;
case 'shell':n=rnd(1,6);v=2*n*n;unit='electrons';q=`Using 2n², how many electrons can a shell with n = ${n} hold?`;ex=`2×${n}² = ${v} electrons.`;break;
case 'neutrons':[Z,A]=pick([[35,80],[74,184],[6,12],[8,16],[53,131],[92,235]]);v=A-Z;unit='neutrons';q=`A nucleus has atomic number Z = ${Z} and mass number A = ${A}. Find neutron count.`;ex=`Neutrons = A−Z = ${A}−${Z} = ${v}.`;break;
case 'inverse':n=pick([2,3]);P=pick([36,72,108]);v=P/(n*n);unit='units';q=`Two charges exert ${P} force units. Separation becomes ${n} times as large. Find new force (unchanged charges).`;ex=`F₂ = F₁/(distance factor)² = ${P}/${n}² = ${fmt(v)} force units.`;break;
case 'series':I=rnd(1,10);V=rnd(1,10);R=rnd(1,10);v=I+V+R;unit='Ω';q=`Find series total resistance: R₁=${I} Ω, R₂=${V} Ω, R₃=${R} Ω.`;ex=`Rₜ = ${I}+${V}+${R} = ${v} Ω.`;break;
case 'parallel':[I,R]=pick([[4,4],[6,3],[12,6],[4,12],[8,8],[10,5],[12,12]]);v=I*R/(I+R);unit='Ω';q=`Two resistors in parallel: R₁=${I} Ω and R₂=${R} Ω. Find Rₜ.`;ex=`Rₜ = (R₁R₂)/(R₁+R₂) = (${I}×${R})/(${I}+${R}) = ${fmt(v)} Ω.`;break;
case 'binding':{const from=pick([['L',12],['M',3],['N',.6]]);v=69.5-from[1];unit='keV';q=`Tungsten: an electron falls from ${from[0]} to a K-shell vacancy. K ≈ 69.5 keV; ${from[0]} ≈ ${from[1]} keV. Find emitted photon energy.`;ex=`E = 69.5−${from[1]} = ${fmt(v)} keV (course-rounded values).`;break;}
case 'period':f=pick([50,60,100,200]);v=1/f;unit='seconds';q=`A wave has frequency ${f} Hz. Find period T in seconds (4 decimal places).`;ex=`T = 1/f = 1/${f} = ${v.toFixed(4)} seconds.`;break;
default:return null;
}return {id,type:'number',q,answer:v,unit,why:ex,source:section?.source||'Derived calculation',section:section?.id||'formulas',sectionTitle:section?.title||'Formula Lab',tolerance:Math.max(.005,Math.abs(v)*.001)}}
let quiz=null;
function renderQuiz(id,major=false){const m=moduleById(id);if(!major&&!m)return notFound();const opts=major?[['all','All subjects'],...[...new Set(modules().map(m=>m.course))].map(c=>[c,c+' only'])]:[];byId('app').innerHTML=`<main class="shell">${pageHeader(major?'Cumulative Exam Builder':m.title+' — Section Test',major?'Build a mixed exam from all completed study sections.':'Answer first, then submit everything for grading. No hints or scores appear mid-test.',major?'RAD145':m.course,major?'':m.id)}<div id="quizArea"><div class="panel" style="max-width:800px"><h2>Test setup</h2><div class="form-grid">${major?`<label class="field"><span>Subject</span><select id="quizCourse">${opts.map(([x,y])=>`<option value="${clean(x)}">${clean(y)}</option>`).join('')}</select></label>`:''}<label class="field"><span>Questions</span><select id="quizCount"><option value="10">10 questions</option><option value="20">20 questions</option><option value="30">30 questions</option><option value="50">50 questions</option><option value="100">100 questions</option><option value="all">All available questions</option></select></label></div><div class="toolbar"><label class="small"><input type="checkbox" id="numericCheck" checked> Include calculation problems</label><label class="small"><input type="checkbox" id="missedCheck"> Missed questions only</label></div><p class="tiny">Multiple-choice questions are drawn from the verified study material. Numerical values are randomized; they are newly generated practice, not instructor exam questions.</p><button class="button" id="startQuiz">Start ${major?'exam':'test'}</button></div></div></main>`;byId('startQuiz').onclick=()=>startQuiz(major,id)}
function poolFor(ms,withNums,missed){let questions=itemPool(ms).filter(i=>!missed||state.stats[i.id]?.latest===false).map(i=>{const opts=shuffle([i.a,...i.wrong.slice(0,3)]);return {id:i.id,type:'choice',q:i.q,options:opts,answer:i.a,correct:opts.indexOf(i.a),why:i.why,source:i.source,section:i.section,sectionTitle:i.sectionTitle}});if(withNums)for(const m of ms)for(const t of m.numerics||[]){if(missed&&state.stats[t.id]?.latest!==false)continue;const n=makeNumeric(t,m);if(n)questions.push(n)}return questions}
function startQuiz(major,id){let ms=major?modules().filter(m=>byId('quizCourse').value==='all'||m.course===byId('quizCourse').value):[moduleById(id)];const missed=byId('missedCheck').checked,withNums=byId('numericCheck').checked,n=byId('quizCount').value;const pool=shuffle(poolFor(ms,withNums,missed));if(!pool.length){byId('quizArea').innerHTML='<div class="empty">No matching questions yet. Turn off “missed only” or add more questions.</div>';return}const questions=pool.slice(0,n==='all'?pool.length:Number(n));quiz={questions,major,section:id,completed:false};drawQuiz()}
function drawQuiz(){const out=byId('quizArea');if(!out)return;out.innerHTML=`<div class="panel"><div class="toolbar"><strong>${quiz.questions.length} questions</strong><span class="pill">Grade at the end</span><button class="button small secondary push" id="abandonQuiz">Change setup</button></div><div class="progress"><span id="quizProgress" style="width:0%"></span></div><p class="tiny" id="quizProgressLabel">0 of ${quiz.questions.length} answered</p></div><form id="quizForm">${quiz.questions.map((x,i)=>`<article class="question-card" id="q-${i}"><div class="ordinal">Question ${i+1} of ${quiz.questions.length} · ${clean(x.sectionTitle)}</div><h3>${clean(x.q)}</h3>${x.type==='choice'?x.options.map((o,j)=>`<label class="choice"><input type="radio" name="q${i}" value="${j}"><span>${clean(o)}</span></label>`).join(''):`<label class="field"><span>Enter a number (${clean(x.unit)})</span><input type="text" name="q${i}" inputmode="decimal" autocomplete="off" placeholder="Number only (e.g. 12.5)"></label><p class="tiny">Answer unit: ${clean(x.unit)}. Rounding within a small tolerance is accepted.</p>`}</article>`).join('')}<div class="panel"><button class="button" type="submit">Grade all ${quiz.questions.length} questions</button><p class="tiny">You may leave answers blank. Feedback appears only after submitting the entire test.</p></div></form>`;byId('abandonQuiz').onclick=()=>renderQuiz(quiz.section,quiz.major);const form=byId('quizForm');form.oninput=()=>{const d=new FormData(form);let c=0;for(let i=0;i<quiz.questions.length;i++)if(String(d.get('q'+i)||'').trim())c++;byId('quizProgress').style.width=`${c/quiz.questions.length*100}%`;byId('quizProgressLabel').textContent=`${c} of ${quiz.questions.length} answered`};form.onsubmit=e=>{e.preventDefault();gradeQuiz(form)}}
function parseNumber(s){s=String(s||'').trim().replace(/,/g,'').replace(/^[^\d+\-.]+/,'');if(!s)return NaN;return /^[-+]?\d*\.?\d+(?:e[-+]?\d+)?$/i.test(s)?Number(s):NaN}
function gradeQuiz(form){if(!quiz||quiz.completed)return;quiz.completed=true;const d=new FormData(form);let correct=0,missed=[];quiz.questions.forEach((x,i)=>{const ans=String(d.get('q'+i)??'').trim();const pass=x.type==='choice'?ans!==''&&Number(ans)===x.correct:Number.isFinite(parseNumber(ans))&&Math.abs(parseNumber(ans)-x.answer)<=x.tolerance;if(pass)correct++;else missed.push(x);let s=state.stats[x.id]||{attempts:0,correct:0};s.attempts++;if(pass)s.correct++;s.latest=pass;s.last=today();state.stats[x.id]=s;let e=byId('q-'+i);e.classList.add(pass?'correct':'incorrect');e.insertAdjacentHTML('beforeend',`<div class="answer-note"><strong class="${pass?'correct-text':'incorrect-text'}">${pass?'Correct':'Incorrect'}</strong><p><strong>Your answer:</strong> ${clean(x.type==='choice'?(ans!==''?x.options[Number(ans)]:'Not answered'):(ans||'Not answered'))}</p><p><strong>Correct:</strong> ${clean(x.type==='choice'?x.answer:fmt(x.answer)+' '+x.unit)}</p><p>${clean(x.why||'')}</p><p class="source">${clean(x.source||'')}</p>${flagButton('quiz',x.section,i)}</div>`);e.querySelectorAll('input').forEach(inp=>inp.disabled=true)});
const total=quiz.questions.length,pct=correct/total*100;state.history.push({id:'test-'+Date.now(),date:new Date().toISOString(),course:quiz.major?'Cumulative':moduleById(quiz.section)?.title||'Section',correct,total,percent:Math.round(pct)});if(state.history.length>500)state.history=state.history.slice(-500);save();const formWrap=byId('quizForm');formWrap.querySelector('[type=submit]').remove();const result=`<div class="panel"><div class="upper">Results · ${quiz.major?'Cumulative exam':'Section test'}</div><div class="score-number ${pct>=80?'score-high':pct>=65?'score-mid':'score-low'}">${Math.round(pct)}%</div><p><strong>${correct}/${total} correct</strong> · ${missed.length} to revisit</p><div class="toolbar"><button class="button" id="retryTest">Build another test</button><button class="button secondary" id="reviewMissed" ${!missed.length?'disabled':''}>Redo missed questions</button><a class="button secondary" href="#/progress">See history</a></div><p class="tiny">Scroll down for every correct answer, your response, and an explanation. Results are saved locally.</p></div>`;byId('quizArea').insertAdjacentHTML('afterbegin',result);byId('retryTest').onclick=()=>renderQuiz(quiz.section,quiz.major);byId('reviewMissed').onclick=()=>{const qs=missed.map(x=>x.type==='choice'?{...x,options:shuffle(x.options)}:makeNumeric({kind:findNumericKind(x.id)},moduleById(x.section)));for(const x of qs)if(x?.type==='choice')x.correct=x.options.indexOf(x.answer);quiz={major:quiz.major,section:quiz.section,questions:qs.filter(Boolean),completed:false};drawQuiz()};byId('quizArea').scrollIntoView({behavior:'smooth'});
}
function findNumericKind(id){const x=id.split('-');for(const m of modules())for(const n of m.numerics||[])if(id.startsWith(n.id+'-'))return n.kind;return 'ohm-v'}
function renderProgress(){
 const h=state.history.slice().reverse();
 const studied=Object.values(state.cards).filter(c=>c.seen).length;
 const due=modules().reduce((n,m)=>n+cardStatsFor(m).due,0);
 const recent=h.slice(0,5);
 const historyRows=h.map((x,revIndex)=>{
  const originalIndex=state.history.length-1-revIndex;
  const when=Number.isNaN(new Date(x.date).getTime())?'Date unavailable':new Date(x.date).toLocaleString();
  return `<li><div class="toolbar" style="margin:0;align-items:center"><div style="flex:1;min-width:180px"><strong>${clean(x.course)}</strong> · ${clean(x.correct)}/${clean(x.total)} (${clean(x.percent)}%)<br><span class="tiny">${clean(when)}</span></div><button type="button" class="button small secondary" data-remove-test="${originalIndex}" aria-label="Remove this test result">Remove</button></div></li>`;
 });
 byId('app').innerHTML=`<main class="shell">${pageHeader('Progress & Backup','Saved results stay in this browser. Use Export Backup to preserve your scores and custom study content.','RAD145')}<div class="stat-grid"><div class="stats-card"><strong>${studied}</strong><span>Distinct cards reviewed</span></div><div class="stats-card"><strong>${due}</strong><span>Cards due / new</span></div><div class="stats-card"><strong>${h.length}</strong><span>Tests completed</span></div><div class="stats-card"><strong>${recent.length?fmt(recent.reduce((s,x)=>s+x.correct/x.total,0)/recent.length*100)+'%':'—'}</strong><span>Last 5 test average</span></div></div><div class="two-col"><div><div class="panel"><h2>Per-section recall</h2>${modules().map(m=>{const s=cardStatsFor(m),q=questionStats(m);return `<div style="margin:14px 0"><a href="${sectionLink('cards',m.id)}"><strong>${clean(m.title)}</strong></a><p class="tiny">Cards reviewed ${s.seen}/${s.total} · Confident ${s.known} · Due/new ${s.due} · Question responses ${q.attempts}</p><div class="progress"><span style="width:${Math.round(s.seen/s.total*100)||0}%"></span></div></div>`}).join('')}</div></div><aside><div class="panel"><h2>Test history</h2><p class="small">Remove individual results or clear your test history. Your flashcard progress is unaffected unless you choose the full reset below.</p><ul class="history-list" id="testHistoryList" style="max-height:400px;overflow:auto">${historyRows.slice(0,12).join('')||'<li class="muted">No tests completed yet.</li>'}</ul>${h.length>12?`<button class="button small secondary" id="showFullTestHistory" style="margin-top:12px">Show all ${h.length} tests</button>`:''}<button class="button small secondary" id="clearTestHistory" style="margin-top:12px" ${h.length?'':'disabled'}>Clear all test history and quiz counts</button><p class="tiny">Removing a single test updates history and averages, but earlier per-question response counts remain. Clearing all test history also resets those counts.</p></div><div class="panel"><h2>Keep a safe backup</h2><p class="small">Export progress and your added cards or imported modules. Import the backup when switching browsers or computers.</p><button class="button" id="exportBackup">Export Backup (JSON)</button><label class="field"><span>Restore a backup</span><input type="file" id="restoreBackup" accept=".json,application/json"></label><details class="details"><summary>Reset all study progress</summary><p class="small">Starts flashcards and tests from zero. Preserves your added study content and theme. Export a backup first if you may want this data later.</p><button class="button warn small" type="button" id="resetAllProgress">Reset all study progress</button></details></div></aside></div></main>`;
 byId('testHistoryList').onclick=e=>{
  const button=e.target.closest('[data-remove-test]');if(!button)return;
  const index=Number(button.dataset.removeTest);
  if(!Number.isInteger(index)||index<0||index>=state.history.length)return;
  const entry=state.history[index];
  if(!confirm(`Remove this ${entry.course||'test'} result (${entry.correct}/${entry.total}) from your history? This cannot be undone without a backup.`))return;
  state.history.splice(index,1);save();renderProgress();
 };
 const show=byId('showFullTestHistory');
 if(show)show.onclick=()=>{byId('testHistoryList').innerHTML=historyRows.join('');show.remove()};
 byId('clearTestHistory').onclick=()=>{
  if(!state.history.length)return;
  if(!confirm(`Clear all ${state.history.length} test records and per-question quiz counts? Flashcard progress and custom content will be kept. Export a backup first if you want to keep these results.`))return;
  state.history=[];state.stats={};save();renderProgress();
 };
 byId('resetAllProgress').onclick=()=>{
  if(!confirm('Reset ALL study progress? This removes test history, quiz answer counts, and flashcard review progress. Your custom cards, imported lessons, and theme will remain. Export a backup first if you may want to restore progress.'))return;
  if(!confirm('Final confirmation: start all flashcards and quizzes from zero?'))return;
  state.history=[];state.stats={};state.cards={};save();renderProgress();
 };
 byId('exportBackup').onclick=exportBackup;
 byId('restoreBackup').onchange=e=>restoreBackupJSON(e.target.files?.[0]);
}
function downloadJSON(filename,obj){const blob=new Blob([JSON.stringify(obj,null,2)],{type:'application/json'});const u=URL.createObjectURL(blob);const a=document.createElement('a');a.href=u;a.download=filename;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),500)}
// Portable classmate flashcard packs contain no progress, history, or browser settings.
const SHARED_CARDS_FORMAT='rad145-shared-flashcards-v1';
const shareableCard=c=>c&&typeof c.q==='string'&&typeof c.a==='string'&&(c.source==='User-created'||c.source==='Shared by classmate'||c.sharedCard===true);
function collectSharedCards(sectionId=''){
 const result=[];for(const [id,m] of Object.entries(state.custom||{})){
  if(sectionId&&id!==sectionId)continue;
  for(const c of (Array.isArray(m?.items)?m.items:[]))if(shareableCard(c))result.push({sectionId:id,id:c.id,q:c.q,a:c.a,why:c.why||c.a,wrong:Array.isArray(c.wrong)?c.wrong.slice(0,3):[]});
 }return result;
}
function exportSharedCards(sectionId=''){
 const cards=collectSharedCards(sectionId);
 if(!cards.length){alert('No personal or shared flashcards to export'+(sectionId?' in this section':'')+'. Create a card first, or import a shared pack.');return;}
 const safe=sectionId?sectionId.replace(/[^a-z0-9_-]/gi,'-'):'all-sections';
 downloadJSON('RAD145-flashcards-'+safe+'-'+today()+'.json',{format:SHARED_CARDS_FORMAT,exportedAt:new Date().toISOString(),cards});
}
function importSharedCards(file,input){
 if(input)input.value='';
 if(!file)return;
 if(file.size>2*1024*1024){alert('This flashcard file is too large (maximum 2 MB).');return;}
 const reader=new FileReader();
 reader.onerror=()=>alert('Could not read the selected flashcard file.');
 reader.onload=()=>{
  let pack;try{pack=JSON.parse(reader.result)}catch(e){alert('Not a valid JSON flashcard file.');return;}
  if(pack?.format!==SHARED_CARDS_FORMAT||!Array.isArray(pack.cards)||pack.cards.length>2000){alert('This is not a supported RAD145 flashcard share file. Use a shared flashcard pack, not a progress backup.');return;}
  const installed=new Map(modules().map(m=>[m.id,m]));
  const incoming=new Map();const staged=new Map();let invalid=0,duplicate=0,unknown=0;
  for(const c of pack.cards){
   if(!c||typeof c.sectionId!=='string'||typeof c.q!=='string'||typeof c.a!=='string'||!c.q.trim()||!c.a.trim()||c.q.length>250||c.a.length>400||typeof c.why!=='string'&&c.why!==undefined||String(c.why||'').length>600||!Array.isArray(c.wrong)||c.wrong.length!==0&&c.wrong.length!==3||c.wrong.some(x=>typeof x!=='string'||!x.trim()||x.length>200)){invalid++;continue;}
   const m=installed.get(c.sectionId);if(!m){unknown++;continue;}
   const signature=(x)=>String(x.q||'').trim().replace(/\s+/g,' ').toLowerCase()+'\u0000'+String(x.a||'').trim().replace(/\s+/g,' ').toLowerCase();
   if(!incoming.has(c.sectionId))incoming.set(c.sectionId,new Set(m.items.map(signature)));
   const sig=signature(c);if(incoming.get(c.sectionId).has(sig)){duplicate++;continue;}
   const exists=new Set([...(m.items||[]),...(staged.get(c.sectionId)||[])].map(x=>x.id));
   let id=(typeof c.id==='string'&&/^custom-[a-z0-9_-]{1,160}$/i.test(c.id)&&!exists.has(c.id))?c.id:'';
   if(!id){do{id=`custom-${c.sectionId}-${Date.now()}-${rnd(100000,999999)}`}while(exists.has(id));}
   const item={id,q:c.q.trim(),a:c.a.trim(),why:(c.why||c.a).trim(),wrong:c.wrong.slice(),source:'Shared by classmate',sharedCard:true};
   if(!staged.has(c.sectionId))staged.set(c.sectionId,[]);
   staged.get(c.sectionId).push(item);incoming.get(c.sectionId).add(sig);
  }
  const count=[...staged.values()].reduce((n,a)=>n+a.length,0);
  if(!count){alert(`No new cards to import. Duplicates: ${duplicate}; unknown lessons: ${unknown}; invalid cards: ${invalid}.`);return;}
  if(!confirm(`Import ${count} new flashcards into ${staged.size} matching sections? ${duplicate} duplicates, ${unknown} cards for unavailable lessons, and ${invalid} invalid entries will be skipped. Existing cards and study progress will remain untouched.`))return;
  for(const [sectionId,items] of staged){
   if(!state.custom[sectionId])state.custom[sectionId]={id:sectionId,items:[],lesson:[]};
   if(!Array.isArray(state.custom[sectionId].items))state.custom[sectionId].items=[];
   state.custom[sectionId].items.push(...items);
  }
  save();render();alert(`Imported ${count} shared flashcards into ${staged.size} lessons. Skipped: ${duplicate} duplicates, ${unknown} unavailable lessons, ${invalid} invalid entries.`);
 };
 reader.readAsText(file);
}
function exportBackup(){downloadJSON('RAD145-backup-'+today()+'.json',{format:'rad145-study-backup-v1',exportedAt:new Date().toISOString(),state})}
function restoreBackupJSON(file){if(!file)return;const reader=new FileReader;reader.onload=()=>{let data;try{data=JSON.parse(reader.result)}catch(e){alert('Not a valid JSON file.');return}if(data.format!=='rad145-study-backup-v1'||!data.state||!data.state.cards||!data.state.stats){alert('This does not appear to be a RAD145 progress backup.');return}if(!confirm('Restore backup and replace the current local progress and custom content? Export your current backup first if needed.'))return;for(const key of ['cards','stats','history','custom','theme'])if(data.state[key]!==undefined)state[key]=data.state[key];state.reports=Array.isArray(data.state.reports)?data.state.reports.filter(r=>r&&typeof r==='object'&&typeof r.key==='string'&&typeof r.suggested==='string'):[];save();location.hash='#/progress';render();alert('Backup restored.');};reader.readAsText(file)}
function renderManage(){byId('app').innerHTML=`<main class="shell">${pageHeader('Content & Backup','Review reference materials, export your progress, or restore a saved study backup.','RAD145')}<div class="two-col"><div><div class="panel"><h2>Reference library</h2><p class="small">Physics journals, formula toolkit, Positioning slide map, and A&P I lesson map are included under <code>references/</code>. On-screen lessons use concise recall-oriented wording.</p><div class="section-links"><a href="references/Structure_of_Matter_Study_Edition.md">Structure journal (MD)</a><a href="references/Electricity_Study_Edition.md">Electricity journal (MD)</a><a href="references/Magnetism_and_Electromagnetism_Study_Edition.md">Magnetism journal (MD)</a><a href="references/Magnetism_and_Electromagnetism_Study_Edition.docx">Magnetism journal (Word)</a><a href="references/Electricity_Formula_Triangles.docx">Formula toolkit (Word)</a><a href="references/POSITIONING_LESSON_MAP.md">Positioning source map (MD)</a><a href="references/ANATOMY_PHYSIOLOGY_I_LESSON_MAP.md">A&P I lesson map (MD)</a></div></div><div class="panel"><h2>Important about storage</h2><p>Progress and browser-created content are saved using localStorage, which can be deleted if you clear browser data, change browsers, or move the website. The Export Backup file is your portable record.</p><p>The local version and GitHub Pages have separate browser storage. Export from one and restore on the other when transferring results.</p><p>New course lessons are added through website updates, not by uploading slides here. ChatGPT does not automatically receive your local quiz scores. Export a backup when you want help generating an exam based on your history.</p></div></div><aside><div class="panel"><h2>Backup tools</h2><button class="button full" id="exportData">Export progress + additions</button><label class="field"><span>Restore a progress backup (JSON)</span><input type="file" id="importData" accept=".json,application/json"></label><p class="tiny">A progress backup restores only this browser's study data. No file is uploaded to a server.</p></div><div class="panel"><h2>Share flashcards with classmates</h2><p class="small">Export only personal and shared cards (no scores or history). Send the JSON file to classmates manually; they can import it into their matching lessons.</p><button class="button secondary full" id="exportSharedCardsAll">Export my flashcards (JSON)</button><label class="field"><span>Import classmates' flashcards (JSON)</span><input type="file" id="importSharedCardsAll" accept=".json,application/json"></label><p class="tiny">Imports merge new cards without changing saved quiz results. Not a weekly slide/content importer.</p></div>${correctionManagementHTML()}<div class="panel"><h2>Installed content</h2><p><strong>${modules().length}</strong> modules</p><p><strong>${cardTotal()}</strong> cards/question prompts</p><p><strong>${Object.keys(state.custom||{}).length}</strong> imported or edited section datasets</p><a href="#/exam" class="button secondary small">Take a major test</a></div></aside></div></main>`;byId('exportData').onclick=exportBackup;byId('importData').onchange=e=>restoreBackupJSON(e.target.files?.[0]);byId('exportSharedCardsAll').onclick=()=>exportSharedCards();byId('importSharedCardsAll').onchange=e=>importSharedCards(e.target.files?.[0],e.target);byId('exportCorrections').onclick=exportCorrections;byId('correctionList').onclick=e=>{const b=e.target.closest('[data-remove-correction]');if(!b)return;const i=state.reports.findIndex(r=>r.id===b.dataset.removeCorrection);if(i<0)return;if(!confirm('Remove this locally saved correction flag? Export a report first if it has not been sent for review.'))return;state.reports.splice(i,1);save();renderManage()}}
function notFound(){byId('app').innerHTML='<main class="shell"><div class="panel"><h1>Section not found</h1><p>Return to the <a href="#/">study library</a>.</p></div></main>'}
function render(){const visual=byId('studyVisualDialog');if(visual?.open)visual.close();navActive();document.documentElement.dataset.theme=state.theme==='dark'?'dark':'light';const r=findRoute();if(r.page==='home'||r.page==='course')renderHome(r.page==='course'?readCourseFilter(r.id):null);else if(r.page==='study')renderStudy(r.id);else if(r.page==='cards')renderCards(r.id);else if(r.page==='test')renderQuiz(r.id,false);else if(r.page==='exam')renderQuiz('',true);else if(r.page==='progress')renderProgress();else if(r.page==='manage')renderManage();else notFound();if(!document.activeElement?.matches('#filters button'))window.scrollTo(0,0)}
document.addEventListener('click',e=>{const b=e.target.closest('[data-flag-kind]');if(b)openCorrectionEditor(b)});
const textSizeKey='rad145-text-size';
const textSizeButtons=document.querySelectorAll('[data-text-size]');
function applyTextSize(preset){
 if(!['small','default','large'].includes(preset))preset='default';
 document.documentElement.dataset.textSize=preset;
 textSizeButtons.forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.textSize===preset)));
}
let savedTextSize;
try{savedTextSize=localStorage.getItem(textSizeKey)}catch{}
applyTextSize(savedTextSize);
textSizeButtons.forEach(button=>button.addEventListener('click',()=>{
 const preset=button.dataset.textSize;
 applyTextSize(preset);
 try{localStorage.setItem(textSizeKey,preset)}catch{}
}));
byId('themeToggle').onclick=()=>{state.theme=state.theme==='dark'?'light':'dark';save();render()};window.addEventListener('hashchange',render);document.addEventListener('keydown',e=>{if(!deck||findRoute().page!=='cards'||/INPUT|TEXTAREA|SELECT|BUTTON|A/.test(document.activeElement?.tagName||''))return;if(e.key===' '){e.preventDefault();deck.flipped=!deck.flipped;drawCard()}else if(e.key==='ArrowRight'){deck.index++;deck.flipped=false;drawCard()}else if(e.key==='ArrowLeft'){deck.index--;deck.flipped=false;drawCard()}});render();
})();
