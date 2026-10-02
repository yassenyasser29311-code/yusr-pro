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
  function mk(id, cls) { var s = document.createElement('select'); s.id = id; s.className = cls; s.setAttribute('aria-label', 'Language');
    NAMES.forEach(function (x) { var o = document.createElement('option'); o.value = x[0]; o.textContent = x[1]; s.appendChild(o); });
    s.addEventListener('change', function () { Y.set(s.value); }); return s; }
  var nav = document.querySelector('#landing-page .lp-nav .lp-wrap');
  if (nav && !document.getElementById('lp-lang')) nav.insertBefore(mk('lp-lang', 'lp-lang'), nav.querySelector('.lp-btn'));
  var back = document.getElementById('auth-back-home');
  if (back && !document.getElementById('auth-lang')) { var w = document.createElement('div'); w.className = 'auth-top'; back.parentNode.insertBefore(w, back); w.appendChild(back); w.appendChild(mk('auth-lang', 'auth-lang')); }
}
function sync() { ['lp-lang', 'auth-lang', 'lang-picker'].forEach(function (id) { var s = document.getElementById(id); if (s) s.value = Y.getFull(); }); }
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
