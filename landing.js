(function(){
var KEY='yusr_pending_view';
var G=[
['الذكاء الاصطناعي',[['assistant','wand-magic-sparkles','يُسْر Pro Bot']]],
['المقابلات والتوظيف',[['interview','comments','مقابلة تدريبية صوتية'],['faq','circle-question','أسئلة شائعة + إجابات نموذجية'],['career','route','خطة التطور المهني'],['video','video','محاكي مقابلة فيديو'],['salary','sack-dollar','تقدير الراتب المتوقع'],['progress','chart-line','متابعة التقدم']]],
['المستندات',[['cv','id-card','بناء السيرة الذاتية'],['match','bullseye','مطابقة CV مع الوظيفة'],['cover','envelope-open-text','مولّد رسائل توظيف'],['portfolio','briefcase','بورتفوليو شخصي'],['writing','spell-check','تدقيق وتنسيق أكاديمي'],['summarizer','file-lines','تلخيص المستندات']]],
['الصوت والفيديو',[['transcribe','microphone-lines','تفريغ الصوت إلى نص'],['pitch','stopwatch','قدّم نفسك في 30 ثانية']]],
['الحساب والدعم',[['about','circle-info','من نحن'],['history','clock-rotate-left','السجل الموحّد'],['profile','user','الملف الشخصي'],['subscriptions','gem','الاشتراكات'],['donations','hand-holding-heart','التبرعات'],['support','headset','الدعم والتواصل']]],
['قانوني',[['terms','file-contract','شروط الاستخدام'],['privacy','shield-halved','سياسة الخصوصية']]]];
var PUBLIC=['about','terms','privacy','support','donations'];
var root=document.getElementById('landing-page');if(!root)return;
var CNT=0;G.forEach(function(g){CNT+=g[1].length});var bars='';for(var i=0;i<38;i++){var h=20+Math.abs(Math.sin(i*.7)*70)+(i%5)*4;bars+='<i style="height:'+Math.min(h,100)+'%;animation-delay:'+(i*.06)+'s"></i>';}
function tool(t){return '<button class="lp-tool" data-go="'+t[0]+'"><i class="fa-solid fa-'+t[1]+'"></i>'+t[2]+'</button>';}
var grid=G.map(function(g){return '<h3 class="lp-sub" style="margin:22px 0 10px;color:#5FD0D0;font-weight:700">'+g[0]+'</h3><div class="lp-grid rv">'+g[1].map(tool).join('')+'</div>';}).join('');
root.innerHTML='<div id="lp-inner">'+
'<div class="lp-nav"><div class="lp-wrap"><div class="lp-logo"><img src="logo.png" alt="">يُسْر Pro</div>'+
'<div class="lp-links"><a data-scroll="lp-features">المميزات</a><a data-scroll="lp-tools">كل الأدوات</a><a data-go="subscriptions">الأسعار</a><a data-go="about">من نحن</a><a data-go="support">الدعم</a></div>'+
'<button class="lp-btn" data-auth="login">ابدأ الآن</button></div></div>'+
'<div class="lp-wrap"><section class="lp-hero"><div class="lp-ht"><span class="lp-pill"><i></i>ابدأ مجانًا النهاردة</span><h1>مقابلتك الجاية <span>هتبقى أسهل</span> بكتير</h1>'+
'<p>تدرّب بالصوت قدام مُحاور ذكي، وخد تقييم فوري، وجهّز سيرتك وبورتفوليو من مكان واحد وبالعربي.</p>'+
'<div class="lp-cta"><button class="lp-btn" data-auth="signup">ابدأ تجربتك المجانية</button><button class="lp-btn ghost" data-auth="login">تسجيل الدخول</button></div></div>'+
'<div class="lp-demo"><div class="lp-dh"><span>مقابلة تدريبية</span><em><i></i>مباشر</em></div><div class="lp-wave">'+bars+'</div>'+
'<div class="lp-q">احكيلي عن موقف قدرت فيه تحل مشكلة صعبة في شغلك؟</div>'+
'<div class="lp-m"><label>الوضوح<b style="--w:88%"></b></label><label>الثقة<b style="--w:76%"></b></label><label>الإقناع<b style="--w:92%"></b></label></div></div></section>'+
'<div class="lp-stats rv"><div><b data-n="'+CNT+'">0</b><span>أداة في مكان واحد</span></div><div><b data-n="'+G.length+'">0</b><span>أقسام متكاملة</span></div><div><b>24/7</b><span>متاح في أي وقت</span></div><div><b>عربي</b><span>مبني لك من الأساس</span></div></div>'+
'<h2 class="lp-h2 rv" id="lp-features">كل اللي تحتاجه للوظيفة</h2><p class="lp-sub rv">اضغط على أي ميزة وهنوديك ليها بعد تسجيل الدخول.</p>'+
'<div class="lp-cards rv">'+
'<div class="lp-card"><div class="lp-ic"><i class="fa-solid fa-headset"></i></div><h3>مقابلات تدريبية صوتية</h3><p>محاكاة واقعية بالصوت مع تقييم أداء تفصيلي بعد كل إجابة.</p><button class="lp-btn" data-go="interview">جرّب الآن</button></div>'+
'<div class="lp-card"><div class="lp-ic"><i class="fa-solid fa-sack-dollar"></i></div><h3>تقدير الراتب</h3><p>اعرف الراتب المتوقع واستعد للتفاوض بثقة.</p><button class="lp-btn" data-go="salary">استكشف</button></div>'+
'<div class="lp-card"><div class="lp-ic"><i class="fa-solid fa-route"></i></div><h3>التطوير المهني</h3><p>خطة تطور وسيرة ذاتية ومراجعة مخصصة ليك.</p><button class="lp-btn" data-go="career">اعرف أكتر</button></div></div>'+
'<h2 class="lp-h2 rv">إزاي تبدأ؟</h2><div class="lp-steps rv"><div><b>1</b><h3>سجّل حسابك</h3><p>في ثواني، من غير تعقيد.</p></div><div><b>2</b><h3>اختار الأداة</h3><p>مقابلة، سيرة ذاتية أو أي أداة تانية.</p></div><div><b>3</b><h3>اتقدّم بثقة</h3><p>خد تقييمك وحسّن أدائك مع كل محاولة.</p></div></div>'+
'<h2 class="lp-h2 rv" id="lp-tools">كل أدوات الموقع</h2>'+grid+
'<div class="lp-final rv"><h2>جاهز تبدأ؟</h2><p>جرّب أول مقابلة مجانًا وشوف الفرق بنفسك.</p><button class="lp-btn" data-auth="signup">ابدأ الآن</button></div><footer class="lp-foot2"><div class="lf-brand"><img src="logo.png" alt=""><b>يُسْر Pro</b></div><p>منصة مهنية بالذكاء الاصطناعي لتجهيزك للمقابلات والتوظيف بالعربي.</p><strong>جميع الحقوق محفوظة © 2026</strong><div class="lf-cols"><div><h4>الصفحات</h4><a data-scroll="lp-features">المميزات</a><a data-scroll="lp-tools">كل الأدوات</a><a data-go="subscriptions">الأسعار</a><a data-go="about">من نحن</a><a data-go="support">الدعم</a></div><div><h4>تواصل معنا</h4><a href="https://instagram.com/yvssen_yvsser1" target="_blank" rel="noopener"><i class="fa-brands fa-instagram"></i>انستجرام</a><a href="https://wa.me/201279383905" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i>واتساب</a><a data-go="privacy">سياسة الخصوصية</a><a data-go="terms">شروط الاستخدام</a></div></div></footer></div></div>';
var io=new IntersectionObserver(function(es){es.forEach(function(x){if(!x.isIntersecting)return;x.target.classList.add('in');io.unobserve(x.target);x.target.querySelectorAll('[data-n]').forEach(function(e){var n=+e.dataset.n,v=0,t=setInterval(function(){v++;e.textContent=v;if(v>=n)clearInterval(t)},Math.max(30,900/n))})})},{root:root,threshold:.15});
root.querySelectorAll('.rv').forEach(function(e){io.observe(e)});
root.querySelectorAll('.lp-card').forEach(function(c){c.addEventListener('pointermove',function(e){var r=c.getBoundingClientRect();c.style.setProperty('--mx',(e.clientX-r.left)+'px');c.style.setProperty('--my',(e.clientY-r.top)+'px')})});


var bar=document.createElement('div');bar.className='lp-prog';bar.innerHTML='<i></i>';root.appendChild(bar);
var up=document.createElement('button');up.className='lp-up';up.setAttribute('aria-label','للأعلى');
up.innerHTML='<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="21"/><circle class="pg" cx="24" cy="24" r="21"/></svg><i class="fa-solid fa-arrow-up"></i>';root.appendChild(up);
var nav=root.querySelector('.lp-nav'),pg=up.querySelector('.pg'),CC=2*Math.PI*21;pg.style.strokeDasharray=CC;
function onS(){var m=root.scrollHeight-root.clientHeight,p=m>0?root.scrollTop/m:0;bar.firstChild.style.transform='scaleX('+p+')';pg.style.strokeDashoffset=CC*(1-p);up.classList.toggle('on',root.scrollTop>420);if(nav)nav.classList.toggle('sc',root.scrollTop>20);}
root.addEventListener('scroll',onS,{passive:true});onS();
up.onclick=function(){root.scrollTo({top:0,behavior:'smooth'})};
var DESIGN_W=1100,inner=document.getElementById('lp-inner');
function fit(){inner.style.width='';inner.style.zoom='';}
window.addEventListener('resize',fit);window.addEventListener('orientationchange',fit);fit();
function show(){root.classList.remove('hidden');fit();}
function hide(){root.classList.add('hidden');var r=document.getElementById('lp-reader');if(r)r.classList.add('hidden');}
function openAuth(mode){window.__landing.dismissed=true;hide();try{if(window.switchAuthGateTab)switchAuthGateTab(mode||'login');}catch(e){}}

var reader=document.createElement('div');reader.id='lp-reader';reader.className='hidden';reader.setAttribute('dir','rtl');
reader.innerHTML='<div class="lpr-bar"><button class="lp-btn ghost" data-r="back">→ رجوع</button><b></b><button class="lp-btn" data-r="login">تسجيل الدخول</button></div><div class="lpr-body"></div>';
document.body.appendChild(reader);
function label(id){var l='';G.forEach(function(g){g[1].forEach(function(t){if(t[0]===id)l=t[2];});});return l;}
function openReader(id){
var src=document.getElementById('view-'+id);if(!src)return false;
var c=src.cloneNode(true);c.removeAttribute('id');c.classList.remove('view','active');
var fb=c.querySelector('#fb-type');if(fb&&fb.closest('.panel-2'))fb.closest('.panel-2').remove();
c.querySelectorAll('[id]').forEach(function(n){n.removeAttribute('id');});
if(id!=='donations')[c].concat([].slice.call(c.querySelectorAll('*'))).forEach(function(n){[].slice.call(n.attributes).forEach(function(a){if(a.name.indexOf('data-x-')===0)n.removeAttribute(a.name);});});
reader.querySelector('b').textContent=label(id);
var body=reader.querySelector('.lpr-body');body.innerHTML='';body.appendChild(c);
reader.classList.remove('hidden');reader.scrollTop=0;return true;}
reader.addEventListener('click',function(e){var b=e.target.closest('[data-r]');if(!b)return;
if(b.dataset.r==='back'){reader.classList.add('hidden');}else{reader.classList.add('hidden');openAuth('login');}});

function phoneFix(){
var coarse=window.matchMedia&&matchMedia('(pointer:coarse)').matches;
var devW=Math.min(screen.width,screen.height),vv=window.visualViewport,k=1;
if(coarse&&devW<=600&&window.innerWidth>devW*1.3)k=window.innerWidth/devW;
else if(coarse&&vv&&vv.scale<0.8)k=1/vv.scale;
var cssW=window.innerWidth/k;
function set(el,w){if(!el)return;if(k>1){el.style.zoom=k;el.style.width=w+'px';el.style.maxWidth='none';}else{el.style.zoom='';el.style.width='';el.style.maxWidth='';}}
set(document.querySelector('#auth-gate-modal>.panel'),cssW-32);
set(document.querySelector('#forgot-password-modal>.panel'),cssW-32);
set(reader.querySelector('.lpr-bar'),cssW);
set(reader.querySelector('.lpr-body'),cssW);
}
window.addEventListener('resize',phoneFix);window.addEventListener('orientationchange',phoneFix);phoneFix();
root.addEventListener('click',function(e){
var el=e.target.closest('[data-go],[data-auth],[data-scroll]');if(!el)return;
if(el.dataset.scroll){var t=document.getElementById(el.dataset.scroll);if(t){var nav=root.querySelector('.lp-nav'),nh=nav?nav.getBoundingClientRect().height:0;
root.scrollTo({top:root.scrollTop+t.getBoundingClientRect().top-root.getBoundingClientRect().top-nh-8,behavior:'smooth'});
var fl=[t],n=t.nextElementSibling;while(n&&n.tagName!=='H2'&&n.tagName!=='FOOTER'){fl.push(n);n=n.nextElementSibling;}
var items=[];fl.forEach(function(x){items.push(x);[].slice.call(x.querySelectorAll('.lp-card,.lp-tool')).forEach(function(y){items.push(y);});});
items.forEach(function(x){x.classList.remove('lp-flash');void x.offsetWidth;x.classList.add('lp-flash');});
setTimeout(function(){items.forEach(function(x){x.classList.remove('lp-flash');});},1900);}return;}
if(el.dataset.go&&PUBLIC.indexOf(el.dataset.go)>-1&&openReader(el.dataset.go))return;
if(el.dataset.go){try{sessionStorage.setItem(KEY,el.dataset.go);}catch(x){}}
openAuth(el.dataset.auth||'login');});
window.__landing={dismissed:false,
show:function(){if(this.dismissed)return false;show();return true;},
hide:function(){this.dismissed=false;hide();},
home:function(){this.dismissed=false;show();},
takePending:function(){var v=null;try{v=sessionStorage.getItem(KEY);sessionStorage.removeItem(KEY);}catch(x){}return v;}};
var b=document.getElementById('auth-back-home');if(b)b.addEventListener('click',function(){window.__landing.home();});
})();

/* ===== اختيار اللغة (عربي / English) + الترجمة ===== */
(function () {
var Y = window.__yusr; if (!Y) return;
var AR = /[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF]/;
var NAMES = [['ar-EG','العربية','Arabic'],['en-US','English','English']];
// ar -> en (fallback for every non-Arabic language; never shows Arabic)
var LEX = {
'المميزات':'Features','كل الأدوات':'All tools','الأسعار':'Pricing','الدعم':'Support','ابدأ الآن':'Get started','ابدأ مجانًا النهاردة':'Start free today',
'تدرّب بالصوت قدام مُحاور ذكي، وخد تقييم فوري، وجهّز سيرتك وبورتفوليو من مكان واحد وبالعربي.':'Practice out loud with a smart interviewer, get instant feedback, and prepare your CV and portfolio in one place.',
'ابدأ تجربتك المجانية':'Start your free trial','مقابلة تدريبية':'Practice interview','مباشر':'Live',
'احكيلي عن موقف قدرت فيه تحل مشكلة صعبة في شغلك؟':'Tell me about a time you solved a hard problem at work.',
'الوضوح':'Clarity','الثقة':'Confidence','الإقناع':'Persuasion','أداة في مكان واحد':'tools in one place','أقسام متكاملة':'complete sections','متاح في أي وقت':'Available anytime','عربي':'Arabic','مبني لك من الأساس':'Built for you from the ground up',
'كل اللي تحتاجه للوظيفة':'Everything you need for the job','اضغط على أي ميزة وهنوديك ليها بعد تسجيل الدخول.':'Tap any feature and we will take you to it after you sign in.',
'مقابلات تدريبية صوتية':'Voice practice interviews','محاكاة واقعية بالصوت مع تقييم أداء تفصيلي بعد كل إجابة.':'Realistic voice simulation with detailed feedback after every answer.','جرّب الآن':'Try now',
'تقدير الراتب':'Salary estimate','اعرف الراتب المتوقع واستعد للتفاوض بثقة.':'Know the expected salary and negotiate with confidence.','استكشف':'Explore',
'التطوير المهني':'Career growth','خطة تطور وسيرة ذاتية ومراجعة مخصصة ليك.':'A growth plan, CV and review tailored to you.','اعرف أكتر':'Learn more',
'إزاي تبدأ؟':'How to start','سجّل حسابك':'Create your account','في ثواني، من غير تعقيد.':'In seconds, no hassle.','اختار الأداة':'Pick a tool','مقابلة، سيرة ذاتية أو أي أداة تانية.':'Interview, CV, or any other tool.',
'اتقدّم بثقة':'Move forward with confidence','خد تقييمك وحسّن أدائك مع كل محاولة.':'Get your feedback and improve with every attempt.','كل أدوات الموقع':'All site tools',
'جاهز تبدأ؟':'Ready to start?','جرّب أول مقابلة مجانًا وشوف الفرق بنفسك.':'Try your first interview free and see the difference.',
'منصة مهنية بالذكاء الاصطناعي لتجهيزك للمقابلات والتوظيف بالعربي.':'An AI career platform that prepares you for interviews and hiring.',
'جميع الحقوق محفوظة © 2026':'All rights reserved © 2026','الصفحات':'Pages','تواصل معنا':'Contact us','انستجرام':'Instagram','واتساب':'WhatsApp','→ رجوع':'← Back',
'يُسْر Pro':'YUSR Pro','يُسْر Pro Bot':'YUSR Pro Bot','الصفحة الرئيسية':'Home','نسيت كلمة السر؟':'Forgot your password?','استعادة كلمة المرور':'Reset password',
'اكتب الإيميل المسجّل بيه حسابك، وهنبعتلك رابط لتغيير كلمة المرور.':'Enter your account email and we will send you a link to change your password.',
'إرسال رابط الاستعادة':'Send reset link','رجوع لتسجيل الدخول':'Back to sign in','للأعلى':'Back to top','الإيميل':'Email'
};
var BLK = [['.lp-hero h1', 'Your next interview <span>will be a lot easier</span>']];
var TITLE = 'YUSR Pro | Your smart professional platform';
var REV = {}; Object.keys(Y.I18N.ar).forEach(function (k) { var v = Y.I18N.ar[k]; if (!(v in REV)) REV[v] = k; });
var orig = new WeakMap(), wrote = new WeakMap();
function tr(s, l) {
  var k = REV[s];
  if (k) { var d = Y.I18N; return (d[l] && d[l][k]) || d.en[k] || LEX[s] || null; }
  return LEX[s] || null;
}
function txt(n, l) {
  var p = n.parentNode; if (!p || /^(SCRIPT|STYLE|TEXTAREA|NOSCRIPT)$/.test(p.nodeName)) return;
  if (orig.has(n) && wrote.get(n) !== n.nodeValue) orig.delete(n);
  var o = orig.has(n) ? orig.get(n) : n.nodeValue;
  if (!AR.test(o)) return;
  var out = o;
  if (l !== 'ar') { var m = /^(\s*)([\s\S]*?)(\s*)$/.exec(o), t = tr(m[2], l); if (t != null) out = m[1] + t + m[3]; }
  if (out !== o) orig.set(n, o); 
  if (n.nodeValue !== out) { n.nodeValue = out; wrote.set(n, out); }
}
var ATTRS = ['placeholder', 'title', 'aria-label', 'alt'];
function el(e, l) {
  if (e.nodeType !== 1) return;
  if (/^(SCRIPT|STYLE)$/.test(e.nodeName)) return;
  ATTRS.forEach(function (a) {
    if (!e.hasAttribute(a)) return;
    e.__o = e.__o || {}; e.__w = e.__w || {};
    var cur = e.getAttribute(a);
    if (e.__o[a] !== undefined && e.__w[a] !== cur) delete e.__o[a];
    var o = e.__o[a] !== undefined ? e.__o[a] : cur;
    if (!AR.test(o)) return;
    var out = o; if (l !== 'ar') { var t = tr(o.trim(), l); if (t != null) out = t; }
    if (out !== o) e.__o[a] = o;
    if (cur !== out) { e.setAttribute(a, out); e.__w[a] = out; }
  });
  for (var c = e.firstChild; c; c = c.nextSibling) { if (c.nodeType === 3) txt(c, l); else el(c, l); }
}
function blocks(l) {
  BLK.forEach(function (b) {
    var n = document.querySelector(b[0]); if (!n) return;
    if (n.__h === undefined) n.__h = n.innerHTML;
    var want = l === 'ar' ? n.__h : b[1];
    if (n.innerHTML !== want) n.innerHTML = want;
  });
}
function relabel(l) {
  var native = (l === 'ar' || l === 'ur' || l === 'fa');
  document.querySelectorAll('select option').forEach(function (o) {
    NAMES.forEach(function (x) { if (o.value === x[0]) { var w = native ? x[1] : x[2]; if (o.textContent !== w) o.textContent = w; } });
  });
}
var busy = false;
function run(root) {
  var l = Y.getLang(); busy = true;
  try { el(root || document.body, l); blocks(l); relabel(l);
    document.title = l === 'ar' ? (document.title.indexOf('YUSR Pro |') === 0 ? 'يُسْر Pro | YUSR - منصتك المهنية الذكية' : document.title) : TITLE;
    var d = document.documentElement.dir;
    ['landing-page', 'lp-reader'].forEach(function (id) { var n = document.getElementById(id); if (n) n.setAttribute('dir', d); });
  } finally { busy = false; }
}
function addPickers() {
  function mk(id, cls) {
    var w = document.createElement('div'); w.id = id; w.className = 'lang-seg ' + cls; w.setAttribute('role', 'group'); w.setAttribute('aria-label', 'Language');
    w.innerHTML = '<i class="fa-solid fa-globe"></i>';
    [['ar-EG', 'AR'], ['en-US', 'EN']].forEach(function (x) {
      var b = document.createElement('button'); b.type = 'button'; b.dataset.l = x[0]; b.textContent = x[1];
      b.addEventListener('click', function () { Y.set(x[0]); }); w.appendChild(b);
    });
    return w; }
  var nav = document.querySelector('#landing-page .lp-nav .lp-wrap');
  if (nav && !document.getElementById('lp-lang')) nav.insertBefore(mk('lp-lang', 'lp-lang'), nav.querySelector('.lp-btn'));
  var back = document.getElementById('auth-back-home');
  if (back && !document.getElementById('auth-lang')) { var w = document.createElement('div'); w.className = 'auth-top'; back.parentNode.insertBefore(w, back); w.appendChild(back); w.appendChild(mk('auth-lang', 'auth-lang')); }
}
function sync() { ['lp-lang', 'auth-lang', 'lang-picker'].forEach(function (id) { var s = document.getElementById(id); if (!s) return;
    if (s.tagName === 'SELECT') s.value = Y.getFull();
    else [].forEach.call(s.querySelectorAll('button'), function (b) { b.classList.toggle('on', b.dataset.l === Y.getFull()); }); }); }
addPickers();
document.addEventListener('yusr:lang', function () { run(); sync(); });
var pend = false;
new MutationObserver(function (ms) {
  if (busy || pend) return; pend = true;
  requestAnimationFrame(function () { pend = false; run(); });
}).observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ATTRS });
run(); sync();
// dev helper: console -> __findArabic() lists Arabic still visible in a non-Arabic language
window.__findArabic = function () {
  var out = [], w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (w.nextNode()) { var n = w.currentNode, p = n.parentNode; if (/^(SCRIPT|STYLE)$/.test(p.nodeName)) continue; if (AR.test(n.nodeValue)) out.push(n.nodeValue.trim().slice(0, 70)); }
  return out;
};
})();
