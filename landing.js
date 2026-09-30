(function(){
var KEY='yusr_pending_view';
var G=[
['الذكاء الاصطناعي',[['assistant','wand-magic-sparkles','يُسْر Pro Bot']]],
['المقابلات والتوظيف',[['interview','comments','مقابلة تدريبية صوتية'],['faq','circle-question','أسئلة شائعة + إجابات نموذجية'],['career','route','خطة التطور المهني'],['video','video','محاكي مقابلة فيديو'],['salary','sack-dollar','تقدير الراتب المتوقع'],['progress','chart-line','متابعة التقدم']]],
['المستندات',[['cv','id-card','بناء السيرة الذاتية'],['match','bullseye','مطابقة CV مع الوظيفة'],['cover','envelope-open-text','مولّد رسائل توظيف'],['portfolio','briefcase','بورتفوليو شخصي'],['writing','spell-check','تدقيق وتنسيق أكاديمي'],['summarizer','file-lines','تلخيص المستندات']]],
['الصوت والفيديو',[['transcribe','microphone-lines','تفريغ الصوت إلى نص'],['pitch','stopwatch','قدّم نفسك في 30 ثانية']]],
['الحساب والدعم',[['about','circle-info','من نحن'],['history','clock-rotate-left','السجل الموحّد'],['profile','user','الملف الشخصي'],['subscriptions','gem','الاشتراكات'],['donations','hand-holding-heart','التبرعات'],['support','headset','الدعم والتواصل']]],
['قانوني',[['terms','file-contract','شروط الاستخدام'],['privacy','shield-halved','سياسة الخصوصية']]]];
var root=document.getElementById('landing-page');if(!root)return;
var bars='';for(var i=0;i<38;i++){var h=20+Math.abs(Math.sin(i*.7)*70)+(i%5)*4;bars+='<i style="height:'+Math.min(h,100)+'%;animation-delay:'+(i*.06)+'s"></i>';}
function tool(t){return '<button class="lp-tool" data-go="'+t[0]+'"><i class="fa-solid fa-'+t[1]+'"></i>'+t[2]+'</button>';}
var grid=G.map(function(g){return '<h3 class="lp-sub" style="margin:22px 0 10px;color:#c084fc;font-weight:700">'+g[0]+'</h3><div class="lp-grid">'+g[1].map(tool).join('')+'</div>';}).join('');
root.innerHTML='<div id="lp-inner">'+
'<div class="lp-nav"><div class="lp-wrap"><div class="lp-logo"><b>يس</b>يُسْر Pro</div>'+
'<div class="lp-links"><a data-scroll="lp-features">المميزات</a><a data-scroll="lp-tools">كل الأدوات</a><a data-go="subscriptions">الأسعار</a><a data-go="about">من نحن</a><a data-go="support">الدعم</a></div>'+
'<button class="lp-btn" data-auth="login">ابدأ الآن</button></div></div>'+
'<div class="lp-wrap"><section class="lp-hero"><div><h1>أتقن مقابلتك <span>بالذكاء الاصطناعي</span></h1>'+
'<p>مقابلات تدريبية صوتية، تقييم فوري، سيرة ذاتية وبورتفوليو، وأدوات مهنية كاملة بالعربي في مكان واحد.</p>'+
'<div class="lp-cta"><button class="lp-btn" data-auth="signup">ابدأ تجربتك المجانية</button><button class="lp-btn ghost" data-auth="login">تسجيل الدخول</button></div></div>'+
'<div class="lp-wave">'+bars+'</div></section>'+
'<h2 class="lp-h2" id="lp-features">كل اللي تحتاجه للوظيفة</h2><p class="lp-sub">اضغط على أي ميزة وهنوديك ليها بعد تسجيل الدخول.</p>'+
'<div class="lp-cards">'+
'<div class="lp-card"><div class="lp-ic"><i class="fa-solid fa-headset"></i></div><h3>مقابلات تدريبية صوتية</h3><p>محاكاة واقعية بالصوت مع تقييم أداء تفصيلي.</p><button class="lp-btn" data-go="interview">جرّب الآن</button></div>'+
'<div class="lp-card"><div class="lp-ic"><i class="fa-solid fa-sack-dollar"></i></div><h3>تقدير الراتب</h3><p>اعرف الراتب المتوقع واستعد للتفاوض بثقة.</p><button class="lp-btn" data-go="salary">استكشف</button></div>'+
'<div class="lp-card"><div class="lp-ic"><i class="fa-solid fa-route"></i></div><h3>التطوير المهني</h3><p>خطة تطور، سيرة ذاتية، ومراجعة مخصصة ليك.</p><button class="lp-btn" data-go="career">اعرف أكتر</button></div></div>'+
'<h2 class="lp-h2" id="lp-tools">كل أدوات الموقع</h2>'+grid+
'<footer class="lp-foot"><span>© يُسْر Pro</span><div><a data-go="terms">شروط الاستخدام</a><a data-go="privacy">سياسة الخصوصية</a><a data-go="donations">التبرعات</a><a data-go="support">الدعم</a></div></footer></div></div>';
var DESIGN_W=1100,inner=document.getElementById('lp-inner');
function fit(){var w=window.innerWidth,z=Math.min(1,w/DESIGN_W);inner.style.width=z<1?DESIGN_W+'px':'';inner.style.zoom=z;}
window.addEventListener('resize',fit);window.addEventListener('orientationchange',fit);fit();
function show(){root.classList.remove('hidden');fit();}
function hide(){root.classList.add('hidden');}
function openAuth(mode){window.__landing.dismissed=true;hide();try{if(window.switchAuthGateTab)switchAuthGateTab(mode||'login');}catch(e){}}
root.addEventListener('click',function(e){
var el=e.target.closest('[data-go],[data-auth],[data-scroll]');if(!el)return;
if(el.dataset.scroll){var t=document.getElementById(el.dataset.scroll);if(t)t.scrollIntoView({behavior:'smooth'});return;}
if(el.dataset.go){try{sessionStorage.setItem(KEY,el.dataset.go);}catch(x){}}
openAuth(el.dataset.auth||'login');});
window.__landing={dismissed:false,
show:function(){if(this.dismissed)return false;show();return true;},
hide:function(){this.dismissed=false;hide();},
home:function(){this.dismissed=false;show();},
takePending:function(){var v=null;try{v=sessionStorage.getItem(KEY);sessionStorage.removeItem(KEY);}catch(x){}return v;}};
var b=document.getElementById('auth-back-home');if(b)b.addEventListener('click',function(){window.__landing.home();});
})();
