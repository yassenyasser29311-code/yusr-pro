    // ============ Toast notifications (بديل مدمج لـ alert) ============
    function showToast(message, type = 'info') {
        const container = document.getElementById('toast-container');
        if (!container) { console.warn(message); return; }
        const icon = type === 'error' ? 'fa-circle-exclamation' : (type === 'success' ? 'fa-circle-check' : 'fa-circle-info');
        const el = document.createElement('div');
        el.className = `app-toast toast-${type}`;
        el.innerHTML = `<i class="fa-solid ${icon}"></i><span>${message}</span>`;
        container.appendChild(el);
        requestAnimationFrame(() => el.classList.add('show'));
        setTimeout(() => {
            el.classList.remove('show');
            el.classList.add('hide');
            setTimeout(() => el.remove(), 250);
        }, 3800);
    }

    // ✅ المفتاحين اتشالوا خالص من هنا. كل الطلبات بتعدّي دلوقتي على Cloud Functions
    // آمنة، والمفتاحين مخزنين هناك بس عن طريق Firebase Secret Manager.
    // ⚠️ لو غيّرتي اسم مشروع Firebase أو الـ region، لازم تظبطي الرابط ده تبعًا لذلك.
    const CLOUD_FUNCTIONS_BASE = "https://yusr-worker.yassen-yasser29311.workers.dev";

    let isVoiceEnabled = true;
    let interviewRole = "", selectedNationality = "", chatHistory = [], cvContent = "";
    let currentInterviewerName = "أحمد"; // بيتغيّر لـ"مريم" تلقائياً لو المستخدم اختار صوت الست
    let recognition = null, isRecording = false, recordStartTime = 0;
    let speakingStats = [];
    let currentAppLang = 'ar-EG';

    // ============ Voice (TTS) config ============
    // أصوات edge-tts (Microsoft) — مجانية بالكامل، اتنين لكل لغة مدعومة في الموقع (رجالي/حريمي).
    // بتتقرأ حسب لغة الواجهة الحالية (currentAppLang) فمفيش حاجة تتعدّل يدوي لما المستخدم يغيّر اللغة.
    const EDGE_TTS_VOICES = {
        "ar-EG": { male: "ar-EG-ShakirNeural", female: "ar-EG-SalmaNeural" },
        "en-US": { male: "en-US-GuyNeural", female: "en-US-JennyNeural" },
        "fr-FR": { male: "fr-FR-HenriNeural", female: "fr-FR-DeniseNeural" },
        "es-ES": { male: "es-ES-AlvaroNeural", female: "es-ES-ElviraNeural" },
        "tr-TR": { male: "tr-TR-AhmetNeural", female: "tr-TR-EmelNeural" },
        "de-DE": { male: "de-DE-ConradNeural", female: "de-DE-KatjaNeural" },
        "hi-IN": { male: "hi-IN-MadhurNeural", female: "hi-IN-SwaraNeural" },
        "ur-PK": { male: "ur-PK-AsadNeural", female: "ur-PK-UzmaNeural" },
        "fa-IR": { male: "fa-IR-FaridNeural", female: "fa-IR-DilaraNeural" }
    };
    let voiceGenderPref = localStorage.getItem('yusr_voice_gender') || 'male';
    let currentSpeakingAudio = null; // بنتتبع الصوت الشغال دلوقتي عشان زرار الإيقاف يقدر يوقفه فوراً
    let cachedBrowserVoices = [];
    if ('speechSynthesis' in window) {
        const refreshVoices = () => { cachedBrowserVoices = window.speechSynthesis.getVoices() || []; };
        refreshVoices();
        window.speechSynthesis.onvoiceschanged = refreshVoices;
    }
    const INTERVIEW_STATE_KEY = 'yusr_interview_session_v1';

    const viewTitles = {
        about: "من نحن",
        interview: "مقابلة تدريبية صوتية", faq: "أسئلة شائعة + إجابات نموذجية", career: "خطة التطور المهني",
        video: "محاكي مقابلة فيديو", salary: "تقدير الراتب المتوقع", progress: "متابعة التقدم",
        cv: "بناء السيرة الذاتية", match: "مطابقة CV مع الوظيفة", cover: "مولّد رسائل توظيف",
        portfolio: "بورتفوليو شخصي", writing: "تدقيق وتنسيق أكاديمي",
        summarizer: "تلخيص المستندات", transcribe: "تفريغ الصوت إلى نص", pitch: "قدّم نفسك في 30 ثانية",
        profile: "الملف الشخصي", subscriptions: "الاشتراكات", donations: "التبرعات", support: "الدعم والتواصل",
        terms: "شروط الاستخدام", privacy: "سياسة الخصوصية"
    };
    const viewTitlesEn = {
        about: "About Us",
        interview: "Voice Mock Interview", faq: "FAQ + Model Answers", career: "Career Growth Plan",
        video: "Video Mock Interview", salary: "Salary Insights", progress: "Progress Tracking",
        cv: "CV Builder", match: "CV Job Match", cover: "Cover Letter Generator",
        portfolio: "Personal Portfolio", writing: "Academic Writing Review",
        summarizer: "Document Summarizer", transcribe: "Speech to Text", pitch: "30-Second Self Pitch",
        profile: "Profile", subscriptions: "Subscriptions", donations: "Donations", support: "Support",
        terms: "Terms of Use", privacy: "Privacy Policy"
    };

    function switchView(view, el) {
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
        document.getElementById('view-' + view).classList.add('active');
        document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
        if (el) el.classList.add('active');
        document.getElementById('view-title').innerText = (currentUiLang === 'en' ? viewTitlesEn[view] : viewTitles[view]) || '';
        if (view === 'profile') refreshProfileView();
        if (view === 'progress') renderProgressView();
        if (view === 'interview') checkInterviewResumeBanner();
        if (window.innerWidth < 1024) toggleSidebar(true);
    }
    function switchViewByName(view) {
        const navEl = document.querySelector(`.nav-item[data-view="${view}"]`);
        switchView(view, navEl);
    }

    function toggleSidebar(forceClose) {
        const sb = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebar-overlay');
        if (window.innerWidth < 1024) {
            const willClose = forceClose === true || !sb.classList.contains('collapsed');
            if (willClose) { sb.classList.add('collapsed'); overlay.classList.add('hidden'); }
            else { sb.classList.remove('collapsed'); overlay.classList.remove('hidden'); }
        } else {
            sb.classList.toggle('collapsed');
        }
    }
    // Mobile: sidebar starts hidden off-canvas
    if (window.innerWidth < 1024) document.getElementById('sidebar').classList.add('collapsed');

    // ============ i18n ============
    let currentUiLang = 'ar';
    const I18N = {
        ar: {
            "nav.section.interviews":"المقابلات والتوظيف","nav.interview":"مقابلة تدريبية صوتية","nav.faq":"أسئلة شائعة + إجابات نموذجية","nav.career":"خطة التطور المهني",
            "nav.section.documents":"المستندات","nav.cv":"بناء السيرة الذاتية","nav.portfolio":"بورتفوليو شخصي","nav.writing":"تدقيق وتنسيق أكاديمي","nav.summarizer":"تلخيص المستندات",
            "nav.section.audio":"الصوت والفيديو","nav.transcribe":"تفريغ الصوت إلى نص","nav.pitch":"قدّم نفسك في 30 ثانية",
            "nav.section.account":"الحساب والدعم","nav.about":"من نحن","nav.profile":"الملف الشخصي","nav.subscriptions":"الاشتراكات","nav.donations":"التبرعات","nav.support":"الدعم والتواصل",
            "nav.section.legal":"قانوني","nav.terms":"شروط الاستخدام","nav.privacy":"سياسة الخصوصية",
            "account.guest":"زائر (الجهاز ده)","account.signinHint":"سجّل دخول بجوجل لحفظ صورتك ونقاطك",
            "authgate.title":"سجّل دخولك","authgate.subtitle":"لو مش قادر تدخل كزائر دلوقتي (غالبًا بسبب الإنترنت)، سجّل دخول بجوجل أو بإيميلك.","authgate.googleBtn":"تسجيل الدخول بجوجل","authgate.orEmail":"أو بالإيميل","authgate.tabLogin":"تسجيل الدخول","authgate.tabSignup":"إنشاء حساب","authgate.namePh":"اسمك الكامل","authgate.emailPh":"الإيميل","authgate.passwordPh":"كلمة المرور","authgate.confirmPh":"تأكيد كلمة المرور","authgate.submitLogin":"تسجيل الدخول","authgate.submitSignup":"إنشاء الحساب","authgate.privacyNote":"بياناتك بتتحفظ بشكل آمن، وكلمة المرور متشفّرة ومش بنقدر نشوفها إحنا كأصحاب الموقع.",
            "trial.left":"المحاولات المتبقية","trial.upgrade":"ترقية للباقة الكاملة",
            "copy":"نسخ","download":"تنزيل",
            "interview.desc":"تدرّب على مقابلة شفهية حقيقية بالصوت مع تقييم أداء تفصيلي في النهاية.","interview.linkCv":"ربط الـ CV",
            "interview.roleLabel":"الوظيفة المستهدفة","interview.rolePh":"مثلاً: مبيعات عقارات، خدمة عملاء، برمجة...",
            "interview.personaLabel":"شخصية المحاور","interview.start":"ابدأ الجلسة","interview.speaking":"المحاور يتحدث الآن...",
            "interview.inputPh":"تحدث بالميكروفون أو اكتب هنا...","interview.reportHint":"التقييم يحلل ردودك النصية + سرعة كلامك وعدد كلمات التردد لو تحدثت بالميكروفون.",
            "faq.desc":"اكتب الوظيفة والمجال، وهنجهزلك بنك أسئلة شائعة حقيقي مع إجابات نموذجية مقنعة تزود فرصتك في القبول.","faq.rolePh":"مثلاً: مسؤول مبيعات عقارات","faq.run":"جهّز الأسئلة والإجابات",
            "career.desc":"قولنا وضعك الحالي والهدف اللي عايز توصله، وهنبنيلك خطة تطور عملية بخطوات واقعية.","career.currentLabel":"وضعك الحالي","career.currentPh":"مثلاً: محاسب سنة أولى خبرة",
            "career.targetLabel":"هدفك","career.targetPh":"مثلاً: عايز أتحول لمجال تحليل البيانات","career.contextPh":"اي تفاصيل إضافية تفيد - اختياري","career.run":"ابنِ خطتي",
            "cv.notice":"الأداة دي بتبني محتوى ونص السيرة الذاتية بصياغة احترافية جاهزة للنسخ، مش تصميم PDF جاهز بصورة شخصية زي لينكد إن.","cv.photoHint":"صورة شخصية اختيارية (بتتحفظ في المتصفح بتاعك بس).",
            "cv.namePh":"الاسم الكامل","cv.titlePh":"المسمى الوظيفي المستهدف","cv.expPh":"خبراتك العملية","cv.eduPh":"المؤهلات الدراسية والشهادات","cv.skillsPh":"المهارات (افصل بينها بفاصلة)","cv.run":"صِغ سيرتي الذاتية",
            "pf.notice":"هيسألك الذكاء الاصطناعي كام سؤال بسيط عن مجالك ومشاريعك عشان يجهّزلك محتوى بورتفوليو احترافي مخصص.","pf.fieldPh":"مجالك (مصمم، مبرمج، مسوّق...)","pf.start":"ابدأ - خلي الذكاء الاصطناعي يسألني",
            "pf.inputPh":"اكتب ردّك هنا...","pf.generate":"كفاية أسئلة - جهّز البورتفوليو الآن",
            "writing.notice":"مراجعة لغوية وتدقيق واقتراح تنسيق أكاديمي كتوصيات نصية تطبّقها بنفسك في Word.","writing.topicPh":"موضوع البحث (اختياري)","writing.inputPh":"الصق نص البحث أو المقال هنا...","writing.run":"راجع النص",
            "sum.desc":"لخّص أي تقرير أو مقال أو محاضرة في ثواني.","sum.inputPh":"الصق النص هنا...","sum.run":"لخّص الآن",
            "tr.notice":"تقدر ترفع ملف صوت جاهز فيتفرّغ تلقائياً بالذكاء الاصطناعي، أو تسجل مباشرة بالمايك، أو تلصق نص جاهز.","tr.uploadBtn":"ارفع ملف صوتي وفرّغه تلقائياً","tr.uploadHint":"مفيش ملف مرفوع لسه",
            "tr.sourceLangLabel":"لغة الكلام المصدر","tr.targetLangLabel":"ترجم النص النهائي إلى (اختياري)","tr.micHint":"اضغط للتسجيل، أو ارفع ملف فوق، أو الصق نص جاهز تحت.","tr.rawPh":"النص الخام هيظهر هنا...","tr.run":"نظّف وحسّن التنسيق",
            "pitch.notice":"جهّز نص تقديم ذاتي احترافي مدته حوالي 30 ثانية، مربوط بالـ CV والبروفايل المحفوظين عندك.","pitch.purposeLabel":"هتستخدمه فين؟","pitch.toneLabel":"أسلوب الكلام",
            "pitch.rolePh":"الوظيفة أو المجال المستهدف","pitch.highlightPh":"أهم نقطة أو نقطتين عايز تبرزهم - اختياري","pitch.run":"جهّز نص التقديم في 30 ثانية",
            "profile.points":"نقطة","profile.namePh":"اسمك الكامل","profile.titlePh":"المسمى الوظيفي","profile.googleBtn":"تسجيل الدخول بحساب جوجل",
            "profile.googleHint":"تسجيل الدخول بيحفظ اسمك وصورتك ونقاطك على نفس الجهاز — المحاولات المجانية بتُحسب على الجهاز مش على الحساب.","profile.save":"حفظ البيانات",
            "profile.connected":"متصل بجوجل","profile.logoutBtn":"تسجيل الخروج",
            "profile.statUsage":"مرات استخدام الأدوات","profile.statDevice":"معرّف الجهاز","profile.statPlan":"باقتك الحالية","profile.planFree":"مجاني",
            "subs.individualTitle":"باقات الأفراد","subs.individualDesc":"لكل حد بيحضّر لمقابلة أو بيبني مسيرته المهنية بنفسه.","subs.basicName":"الأساسية","subs.perMonth":"/ شهرياً","subs.proName":"الاحترافية","subs.popular":"الأكثر طلباً",
            "subs.yearlyName":"السنوية","subs.perYear":"/ سنوياً","subs.subscribe":"اشترك الآن","subs.teamTitle":"باقات الفرق والجامعات","subs.teamDesc":"لكليات وجامعات ومراكز توظيف عايزة تدرّب مجموعة مع بعض بسعر أوفر.",
            "subs.teamSmallName":"فريق صغير","subs.teamSmallRange":"حتى 10 أفراد","subs.perSeat":"/ للفرد شهرياً","subs.recommended":"موصى بها للجامعات","subs.teamMedName":"دفعة / كلية","subs.teamMedRange":"11 إلى 100 فرد",
            "subs.uniName":"جامعة / مؤسسة كبيرة","subs.uniRange":"أكتر من 100 فرد","subs.customPrice":"سعر خاص حسب العدد","subs.contactUs":"تواصل معنا",
            "don.title":"ادعم استمرار المنصة","don.desc":"لو حابب تدعم تطوير يُسْر Pro واستمراريتها، تقدر تتبرع بأي مبلغ عن طريق الأرقام دي.","don.wallet":"محفظة إلكترونية","don.thanks":"شكراً جزيلاً لكل حد بيدعم.",
            "sup.title":"الدعم والتواصل","sup.desc":"عندك سؤال أو مشكلة أو اقتراح؟ تواصل معانا مباشرة.","sup.phone":"اتصال مباشر","sup.hours":"بنرد عادةً خلال ساعات قليلة. للاستفسارات العاجلة، الأسرع هو الواتساب.",
            "legal.lastUpdated":"آخر تحديث: أغسطس 2026",
            "about.pageTitle":"من نحن","about.tagline":"منصة عربية بنبنيها بشغف عشان تكون رفيقك في رحلة الشغل والتطور المهني.",
            "about.missionLabel":"رسالتنا","about.missionBody":"نؤمن إن أي حد، أياً كانت خلفيته أو ظروفه، يستاهل يوصل لفرصته المناسبة وهو واثق من نفسه ومجهّز صح. \"يُسْر Pro\" اتولدت من فكرة بسيطة: التحضير الجيد للمقابلة أو بناء سيرة ذاتية قوية متبقاش حكرة على مين عنده وقت أو فلوس أو علاقات — الذكاء الاصطناعي بقى يقدر يديك نفس الجودة دي في متناول إيدك، في أي وقت.",
            "about.pillarsTitle":"إيه اللي بيحرّكنا",
            "about.pillar1Title":"مساعدة حقيقية","about.pillar1Body":"مش بس أدوات، إحنا بنصمم كل ميزة عشان تحل مشكلة حقيقية بتقابل الباحث عن عمل.",
            "about.pillar2Title":"تطور مستمر","about.pillar2Body":"بنسمع اقتراحاتكم ونضيف ونحسّن باستمرار — المنصة بتكبر معاكم خطوة بخطوة.",
            "about.pillar3Title":"ذكاء اصطناعي في خدمتك","about.pillar3Body":"بنسخّر أحدث تقنيات الذكاء الاصطناعي عشان نديك تجربة تحضير شخصية بجودة عالية.",
            "about.pillar4Title":"خصوصيتك أولاً","about.pillar4Body":"بياناتك ملكك إنت، ومش بنستخدمها أو نشاركها إلا عشان نقدّملك الخدمة بس.",
            "about.whyTitle":"ليه يُسْر Pro؟",
            "about.why1":"تجربة مصمّمة بالكامل باللغة العربية وبتفهم لهجتك.",
            "about.why2":"كل الأدوات اللي محتاجها من مقابلة لسيرة ذاتية لبورتفوليو، في مكان واحد.",
            "about.why3":"تقييم واقعي وصريح بيساعدك تتحسن، مش مجرد كلام عام.",
            "about.why4":"بنطوّر المنصة باستمرار بناءً على احتياجات مستخدمينا الحقيقية.",
            "about.closing":"عندك فكرة أو اقتراح يخلي يُسْر أحسن؟ يهمنا نسمعه.","about.contactUs":"تواصل معنا",
            "terms.pageTitle":"شروط الاستخدام","terms.betaNotice":"صفحة \"الاشتراكات\" تعرض باقات حقيقية. الدفع بيتم يدوياً عن طريق تحويل فودافون كاش / إنستاباي على الأرقام الموضّحة، وبعد إرسال بيانات التحويل بيتم تفعيل الباقة يدوياً خلال ساعات قليلة بعد المراجعة.",
            "terms.s1.title":"1. قبول الشروط","terms.s1.body":"باستخدامك منصة \"يُسْر Pro\"، إنت بتوافق على الشروط دي.",
            "terms.s2.title":"2. طبيعة الخدمة","terms.s2.body":"يُسْر منصة مساعدة بالذكاء الاصطناعي لتجهيز الباحثين عن عمل: مقابلات تدريبية صوتية، بناء سيرة ذاتية وبورتفوليو، تدقيق أكاديمي، تلخيص مستندات، وتفريغ صوتي. الردود والاقتراحات مولّدة بالذكاء الاصطناعي وبتُعتبر مساعدة استرشادية، مش ضمان لنتيجة أو قبول وظيفي.",
            "terms.s3.title":"3. الحساب والاستخدام المسموح","terms.s3.body":"تقدر تستخدم المنصة كزائر (بهوية مجهولة تلقائية) أو بتسجيل الدخول بحساب جوجل لحفظ بياناتك. إنت مسؤول عن أي نشاط بيحصل من حسابك. ممنوع: محاولة تجاوز حدود الاستخدام العادلة، إرسال طلبات آلية مكثفة (bots)، أو محاولة الوصول لأي جزء من النظام غير مصرّح لك بيه.",
            "terms.s4.title":"4. حدود الاستخدام العادل","terms.s4.body":"لضمان استمرار الخدمة لكل المستخدمين، أدوات الذكاء الاصطناعي (المحادثة، تفريغ الصوت، تحويل النص لصوت) عليها حد أقصى يومي وشهري للاستخدام. لو وصلت للحد، هتحتاج تستنى لحد ما يتجدد.",
            "terms.s5.title":"5. المحتوى بتاعك","terms.s5.body":"أي محتوى بتكتبه أو ترفعه (بيانات السيرة الذاتية، البورتفوليو، تسجيلات صوتية) بيفضل ملكك إنت. إحنا بنعالجه بس عشان نقدّملك الخدمة، ومش بنستخدمه لأي غرض تاني ولا بنبيعه.",
            "terms.s6.title":"6. إخلاء المسؤولية","terms.s6.body":"الخدمة بتتقدم \"كما هي\" من غير ضمانات. إحنا مش مسؤولين عن أي قرار وظيفي أو مهني تاخده بناءً على مخرجات الذكاء الاصطناعي، وننصحك دايماً تراجع أي محتوى مهم بنفسك قبل استخدامه.",
            "terms.s7.title":"7. التعديلات","terms.s7.body":"ممكن نعدّل الشروط دي من وقت للتاني، وهنحدّث تاريخ \"آخر تحديث\" فوق. استمرارك في استخدام المنصة بعد التعديل معناه موافقتك على النسخة الجديدة.",
            "terms.s8.title":"8. التواصل","terms.s8.body":"لأي استفسار عن الشروط دي، تواصل معانا من صفحة \"الدعم والتواصل\".",
            "privacy.pageTitle":"سياسة الخصوصية",
            "privacy.s1.title":"1. مين بيجمع البيانات","privacy.s1.body":"منصة \"يُسْر Pro\" هي اللي بتجمع وتعالج بياناتك، بهدف وحيد: تقديم الخدمة اللي بتستخدمها.",
            "privacy.s2.title":"2. البيانات اللي بنجمعها",
            "privacy.s2.li1":"<b class=\"text-slate-200\">بيانات الحساب:</b> لو سجّلت دخول بجوجل، بناخد اسمك وصورتك وإيميلك من جوجل مباشرة. لو دخلت كزائر، بنديك هوية مجهولة (anonymous) بس عشان نميّزك من غيرك.",
            "privacy.s2.li2":"<b class=\"text-slate-200\">محتوى تستخدمه:</b> بيانات السيرة الذاتية، البورتفوليو، النصوص اللي بتكتبها أو تلخّصها، والتسجيلات الصوتية اللي بترفعها لأدوات المقابلات أو تفريغ الصوت.",
            "privacy.s2.li3":"<b class=\"text-slate-200\">بيانات استخدام تقنية:</b> عدد مرات استخدامك للأدوات (لتطبيق حدود الاستخدام العادل)، ومحفوظة محلياً على جهازك (localStorage) بيانات زي \"عدد المحاولات المتبقية\".",
            "privacy.s3.title":"3. إزاي بنستخدم بياناتك","privacy.s3.body":"بنستخدم بياناتك بس عشان: (أ) نشغّل أدوات الذكاء الاصطناعي (بنبعت النص أو الصوت اللي بترفعه لشركات معالجة متخصصة عشان تولّدلك الرد، من غير ما تتخزن مفاتيح أو بيانات دخول عندهم)، (ب) نحفظلك ملفك الشخصي عشان يفضل موجود لما ترجع، (ج) نحسّن الخدمة ونمنع إساءة الاستخدام.",
            "privacy.s4.title":"4. مين بيشوف بياناتك (أطراف تالتة)",
            "privacy.s4.li1":"<b class=\"text-slate-200\">Google Firebase:</b> لتسجيل الدخول وتخزين ملفك الشخصي بشكل آمن.",
            "privacy.s4.li2":"<b class=\"text-slate-200\">Groq:</b> لمعالجة النصوص والصوت في أدوات المحادثة والتفريغ.",
            "privacy.s4.li3":"<b class=\"text-slate-200\">Microsoft Edge:</b> لتحويل النص إلى صوت.",
            "privacy.s4.li4":"<b class=\"text-slate-200\">Cloudflare:</b> كوسيط تقني آمن بين تطبيقك وخدمات الذكاء الاصطناعي، من غير ما يحتفظ ببياناتك.",
            "privacy.s4.li5":"<b class=\"text-slate-200\">s.jina.ai:</b> للبحث اللايف على الويب في أداة تقدير الراتب المتوقع بس — من غير تسجيل دخول أو حفظ هوية عندهم.",
            "privacy.s4.note":"إحنا مش بنبيع بياناتك لأي حد، ومش بنشاركها لأغراض إعلانية.",
            "privacy.s5.title":"5. أمان البيانات","privacy.s5.body":"بياناتك محمية بقواعد أمان (Security Rules) بتضمن إن كل مستخدم يشوف بياناته هو بس، وكل الاتصال بين تطبيقك والسيرفر مشفّر (HTTPS).",
            "privacy.s6.title":"6. حقوقك","privacy.s6.body":"تقدر في أي وقت تطلب تشوف بياناتك المحفوظة، تعدّلها، أو تطلب حذفها بالكامل، عن طريق التواصل معانا من صفحة \"الدعم والتواصل\".",
            "privacy.s7.title":"7. الأطفال","privacy.s7.body":"الخدمة مش موجّهة لمن هم أقل من 13 سنة، ومبنجمعش بيانات بشكل متعمد من الفئة العمرية دي.",
            "privacy.s8.title":"8. التعديلات على السياسة","privacy.s8.body":"ممكن نحدّث السياسة دي من وقت للتاني، وهنغيّر تاريخ \"آخر تحديث\" فوق أول ما نعدّل حاجة جوهرية."
        },
        en: {
            "nav.section.interviews":"Interviews & Hiring","nav.interview":"Voice Mock Interview","nav.faq":"FAQ + Model Answers","nav.career":"Career Growth Plan",
            "nav.section.documents":"Documents","nav.cv":"CV Builder","nav.portfolio":"Personal Portfolio","nav.writing":"Academic Writing Review","nav.summarizer":"Document Summarizer",
            "nav.section.audio":"Audio & Video","nav.transcribe":"Speech to Text","nav.pitch":"30-Second Self Pitch",
            "nav.section.account":"Account & Support","nav.about":"About Us","nav.profile":"Profile","nav.subscriptions":"Subscriptions","nav.donations":"Donations","nav.support":"Support",
            "nav.section.legal":"Legal","nav.terms":"Terms of Use","nav.privacy":"Privacy Policy",
            "account.guest":"Guest (this device)","account.signinHint":"Sign in with Google to save your photo & points",
            "authgate.title":"Sign in","authgate.subtitle":"If you can't enter as a guest right now (usually a connection issue), sign in with Google or your email.","authgate.googleBtn":"Sign in with Google","authgate.orEmail":"or with email","authgate.tabLogin":"Log in","authgate.tabSignup":"Create account","authgate.namePh":"Your full name","authgate.emailPh":"Email","authgate.passwordPh":"Password","authgate.confirmPh":"Confirm password","authgate.submitLogin":"Log in","authgate.submitSignup":"Create account","authgate.privacyNote":"Your data is stored securely, and your password is encrypted — even we can't see it.",
            "trial.left":"Trials remaining","trial.upgrade":"Upgrade to full plan",
            "copy":"Copy","download":"Download",
            "interview.desc":"Practice a real spoken interview with detailed performance feedback at the end.","interview.linkCv":"Link CV",
            "interview.roleLabel":"Target role","interview.rolePh":"e.g. Sales, Customer Service, Programming...",
            "interview.personaLabel":"Interviewer persona","interview.start":"Start Session","interview.speaking":"Interviewer is speaking...",
            "interview.inputPh":"Speak into the mic or type here...","interview.reportHint":"The report analyzes your text answers plus speaking speed and filler words if you used the mic.",
            "faq.desc":"Write the role and field, we'll prepare a real bank of common questions with convincing model answers.","faq.rolePh":"e.g. Real Estate Sales Rep","faq.run":"Generate Questions & Answers",
            "career.desc":"Tell us your current situation and your goal, and we'll build a practical growth plan.","career.currentLabel":"Current situation","career.currentPh":"e.g. 1st year accountant",
            "career.targetLabel":"Your goal","career.targetPh":"e.g. Switch to data analytics","career.contextPh":"Any extra details - optional","career.run":"Build My Plan",
            "cv.notice":"This tool builds professional CV content ready to copy, not a designed PDF like LinkedIn.","cv.photoHint":"Optional photo (stored in your browser only).",
            "cv.namePh":"Full name","cv.titlePh":"Target job title","cv.expPh":"Your work experience","cv.eduPh":"Education & certificates","cv.skillsPh":"Skills (comma separated)","cv.run":"Write My CV",
            "pf.notice":"The AI will ask you a few simple questions about your field and projects to prepare custom portfolio content.","pf.fieldPh":"Your field (designer, developer, marketer...)","pf.start":"Start - let the AI ask me",
            "pf.inputPh":"Type your answer here...","pf.generate":"Enough questions - generate the portfolio now",
            "writing.notice":"Linguistic review and academic formatting suggestions as text recommendations you apply yourself in Word.","writing.topicPh":"Research topic (optional)","writing.inputPh":"Paste your research or article text here...","writing.run":"Review Text",
            "sum.desc":"Summarize any report, article, or lecture in seconds.","sum.inputPh":"Paste text here...","sum.run":"Summarize Now",
            "tr.notice":"Upload an audio file to auto-transcribe with AI, record with the mic, or paste ready text.","tr.uploadBtn":"Upload audio file & auto-transcribe","tr.uploadHint":"No file uploaded yet",
            "tr.sourceLangLabel":"Source speech language","tr.targetLangLabel":"Translate final text to (optional)","tr.micHint":"Press to record, upload a file above, or paste text below.","tr.rawPh":"Raw text will appear here...","tr.run":"Clean Up & Format",
            "pitch.notice":"Prepare a professional ~30-second self introduction, linked to your saved CV and profile.","pitch.purposeLabel":"Where will you use it?","pitch.toneLabel":"Tone of voice",
            "pitch.rolePh":"Target role or field","pitch.highlightPh":"One or two highlights to feature - optional","pitch.run":"Generate 30-Second Pitch",
            "profile.points":"pts","profile.namePh":"Your full name","profile.titlePh":"Job title","profile.googleBtn":"Sign in with Google",
            "profile.googleHint":"Signing in saves your name, photo and points on this device — free trials are counted per device, not per account.","profile.save":"Save Info",
            "profile.connected":"Connected with Google","profile.logoutBtn":"Log out",
            "profile.statUsage":"Tool uses","profile.statDevice":"Device ID","profile.statPlan":"Current plan","profile.planFree":"Free",
            "subs.individualTitle":"Individual Plans","subs.individualDesc":"For anyone preparing for an interview or building their own career.","subs.basicName":"Basic","subs.perMonth":"/ month","subs.proName":"Professional","subs.popular":"Most Popular",
            "subs.yearlyName":"Yearly","subs.perYear":"/ year","subs.subscribe":"Subscribe Now","subs.teamTitle":"Team & University Plans","subs.teamDesc":"For colleges, universities, and hiring centers training a group together at a better per-seat price.",
            "subs.teamSmallName":"Small Team","subs.teamSmallRange":"Up to 10 people","subs.perSeat":"/ per seat / month","subs.recommended":"Recommended for universities","subs.teamMedName":"Batch / College","subs.teamMedRange":"11 to 100 people",
            "subs.uniName":"University / Large Org","subs.uniRange":"Over 100 people","subs.customPrice":"Custom pricing","subs.contactUs":"Contact Us",
            "don.title":"Support the Platform","don.desc":"If you'd like to support YUSR Pro's development, you can donate any amount via the numbers below.","don.wallet":"Mobile Wallet","don.thanks":"Thank you so much to everyone who supports us.",
            "sup.title":"Support & Contact","sup.desc":"Have a question, issue, or suggestion? Reach us directly through any channel below.","sup.phone":"Direct Call","sup.hours":"We usually reply within a few hours. For urgent matters, WhatsApp is fastest.",
            "legal.lastUpdated":"Last updated: August 2026",
            "about.pageTitle":"About Us","about.tagline":"An Arabic platform we build with passion to be your companion on your career journey.",
            "about.missionLabel":"Our Mission","about.missionBody":"We believe that everyone, whatever their background or circumstances, deserves to reach the right opportunity feeling confident and well prepared. \"YUSR Pro\" grew out of a simple idea: good interview prep or a strong CV shouldn't be reserved for whoever has the time, money, or connections — AI can now put that same quality within anyone's reach, anytime.",
            "about.pillarsTitle":"What Drives Us",
            "about.pillar1Title":"Real Help","about.pillar1Body":"Not just tools — we design every feature to solve a real problem job seekers face.",
            "about.pillar2Title":"Constant Growth","about.pillar2Body":"We listen to your suggestions and keep adding and improving — the platform grows with you, step by step.",
            "about.pillar3Title":"AI at Your Service","about.pillar3Body":"We harness the latest AI technology to give you a high-quality, personalized preparation experience.",
            "about.pillar4Title":"Your Privacy First","about.pillar4Body":"Your data is yours — we only use or share it to provide you the service, nothing else.",
            "about.whyTitle":"Why YUSR Pro?",
            "about.why1":"An experience fully designed in Arabic that understands your dialect.",
            "about.why2":"Every tool you need, from interviews to CVs to portfolios, in one place.",
            "about.why3":"Honest, realistic feedback that helps you improve, not just generic praise.",
            "about.why4":"We keep developing the platform based on our users' real needs.",
            "about.closing":"Have an idea or suggestion that could make YUSR better? We'd love to hear it.","about.contactUs":"Contact Us",
            "terms.pageTitle":"Terms of Use","terms.betaNotice":"The \"Subscriptions\" page shows real paid plans. Payment is made manually via Vodafone Cash / InstaPay transfer to the numbers shown, and after you submit your transfer details your plan is activated manually within a few hours once the transfer is reviewed.",
            "terms.s1.title":"1. Acceptance of Terms","terms.s1.body":"By using the \"YUSR Pro\" platform, you agree to these terms.",
            "terms.s2.title":"2. Nature of the Service","terms.s2.body":"YUSR is an AI-powered platform that helps job seekers get ready: voice mock interviews, CV and portfolio building, academic writing review, document summarizing, and transcription. Responses and suggestions are AI-generated and are meant as guidance only, not a guarantee of any outcome or job offer.",
            "terms.s3.title":"3. Account & Permitted Use","terms.s3.body":"You can use the platform as a guest (automatic anonymous identity) or sign in with a Google account to save your data. You're responsible for any activity on your account. Prohibited: attempting to bypass fair usage limits, sending automated bulk requests (bots), or trying to access any part of the system you're not authorized for.",
            "terms.s4.title":"4. Fair Usage Limits","terms.s4.body":"To keep the service running for everyone, the AI tools (chat, transcription, text-to-speech) have a daily and monthly usage cap. If you reach the limit, you'll need to wait until it resets.",
            "terms.s5.title":"5. Your Content","terms.s5.body":"Any content you write or upload (CV data, portfolio, voice recordings) remains yours. We only process it to provide you the service, and never use it for any other purpose or sell it.",
            "terms.s6.title":"6. Disclaimer","terms.s6.body":"The service is provided \"as is\" with no warranties. We are not responsible for any career or professional decision you make based on AI outputs, and we always recommend reviewing important content yourself before using it.",
            "terms.s7.title":"7. Changes","terms.s7.body":"We may update these terms from time to time, and update the \"Last updated\" date above. Continuing to use the platform after a change means you accept the new version.",
            "terms.s8.title":"8. Contact","terms.s8.body":"For any question about these terms, reach us through the \"Support & Contact\" page.",
            "privacy.pageTitle":"Privacy Policy",
            "privacy.s1.title":"1. Who Collects the Data","privacy.s1.body":"The \"YUSR Pro\" platform is the one collecting and processing your data, for one purpose only: providing the service you use.",
            "privacy.s2.title":"2. Data We Collect",
            "privacy.s2.li1":"<b class=\"text-slate-200\">Account data:</b> If you sign in with Google, we get your name, photo, and email directly from Google. If you enter as a guest, we give you an anonymous identity just to tell you apart from other users.",
            "privacy.s2.li2":"<b class=\"text-slate-200\">Content you use:</b> CV data, portfolio, texts you write or summarize, and voice recordings you upload to the interview or transcription tools.",
            "privacy.s2.li3":"<b class=\"text-slate-200\">Technical usage data:</b> how many times you've used each tool (to apply fair usage limits), stored locally on your device (localStorage), such as \"remaining trials\".",
            "privacy.s3.title":"3. How We Use Your Data","privacy.s3.body":"We use your data only to: (a) run the AI tools (we send the text or audio you upload to specialized processing companies to generate the response, without storing your keys or login data with them), (b) save your profile so it's there when you come back, (c) improve the service and prevent abuse.",
            "privacy.s4.title":"4. Who Sees Your Data (Third Parties)",
            "privacy.s4.li1":"<b class=\"text-slate-200\">Google Firebase:</b> for sign-in and securely storing your profile.",
            "privacy.s4.li2":"<b class=\"text-slate-200\">Groq:</b> for processing text and audio in the chat and transcription tools.",
            "privacy.s4.li3":"<b class=\"text-slate-200\">Microsoft Edge:</b> for text-to-speech conversion.",
            "privacy.s4.li4":"<b class=\"text-slate-200\">Cloudflare:</b> as a secure technical intermediary between your app and the AI services, without retaining your data.",
            "privacy.s4.li5":"<b class=\"text-slate-200\">s.jina.ai:</b> for live web search in the expected-salary estimator tool only — without any login or identity stored with them.",
            "privacy.s4.note":"We never sell your data to anyone, and never share it for advertising purposes.",
            "privacy.s5.title":"5. Data Security","privacy.s5.body":"Your data is protected by Security Rules that ensure each user can only see their own data, and all communication between your app and the server is encrypted (HTTPS).",
            "privacy.s6.title":"6. Your Rights","privacy.s6.body":"You can request at any time to view your stored data, edit it, or request its complete deletion, by reaching us through the \"Support & Contact\" page.",
            "privacy.s7.title":"7. Children","privacy.s7.body":"The service is not directed at anyone under 13, and we don't knowingly collect data from that age group.",
            "privacy.s8.title":"8. Changes to This Policy","privacy.s8.body":"We may update this policy from time to time, and we'll change the \"Last updated\" date above whenever we make a substantial change."
        }
,
        fr: {
            "nav.section.interviews":"Entretiens et embauche","nav.interview":"Entretien d'entraînement vocal","nav.faq":"FAQ + réponses modèles","nav.career":"Plan de développement de carrière",
            "nav.section.documents":"Documents","nav.cv":"Créateur de CV","nav.portfolio":"Portfolio personnel","nav.writing":"Relecture académique","nav.summarizer":"Résumé de documents",
            "nav.section.audio":"Audio et vidéo","nav.transcribe":"Transcription audio en texte",
            "nav.section.account":"Compte et assistance","nav.about":"À propos de nous","nav.profile":"Profil","nav.subscriptions":"Abonnements","nav.donations":"Dons","nav.support":"Assistance et contact",
            "nav.section.legal":"Mentions légales","nav.terms":"Conditions d'utilisation","nav.privacy":"Politique de confidentialité",
            "account.guest":"Invité (cet appareil)","account.signinHint":"Connectez-vous avec Google pour enregistrer votre photo et vos points",
            "authgate.title":"Connexion","authgate.subtitle":"Si vous ne pouvez pas entrer en tant qu'invité pour le moment (généralement un problème de connexion), connectez-vous avec Google ou votre e-mail.","authgate.googleBtn":"Se connecter avec Google","authgate.orEmail":"ou par e-mail","authgate.tabLogin":"Connexion","authgate.tabSignup":"Créer un compte","authgate.namePh":"Votre nom complet","authgate.emailPh":"E-mail","authgate.passwordPh":"Mot de passe","authgate.confirmPh":"Confirmer le mot de passe","authgate.submitLogin":"Connexion","authgate.submitSignup":"Créer le compte","authgate.privacyNote":"Vos données sont stockées en toute sécurité, et votre mot de passe est chiffré — même nous ne pouvons pas le voir.",
            "trial.left":"Essais restants","trial.upgrade":"Passer à l'offre complète",
            "copy":"Copier","download":"Télécharger",
            "interview.desc":"Entraînez-vous à un véritable entretien oral avec une évaluation détaillée à la fin.","interview.linkCv":"Lier le CV",
            "interview.roleLabel":"Poste visé","interview.rolePh":"ex : vente immobilière, service client, programmation...",
            "interview.personaLabel":"Personnalité de l'intervieweur","interview.start":"Démarrer la session","interview.speaking":"L'intervieweur parle...",
            "interview.inputPh":"Parlez au micro ou écrivez ici...","interview.reportHint":"L'évaluation analyse vos réponses écrites, votre débit de parole et vos mots de remplissage si vous avez utilisé le micro.",
            "faq.desc":"Indiquez le poste et le domaine, nous préparerons une vraie banque de questions fréquentes avec des réponses modèles convaincantes.","faq.rolePh":"ex : responsable des ventes immobilières","faq.run":"Générer questions et réponses",
            "career.desc":"Dites-nous votre situation actuelle et votre objectif, nous construirons un plan de progression concret.","career.currentLabel":"Votre situation actuelle","career.currentPh":"ex : comptable, 1 an d'expérience",
            "career.targetLabel":"Votre objectif","career.targetPh":"ex : me réorienter vers l'analyse de données","career.contextPh":"Détails supplémentaires utiles - facultatif","career.run":"Construire mon plan",
            "cv.notice":"Cet outil rédige le contenu texte de votre CV prêt à copier, pas un PDF conçu comme sur LinkedIn.","cv.photoHint":"Photo facultative (enregistrée uniquement dans votre navigateur).",
            "cv.namePh":"Nom complet","cv.titlePh":"Poste visé","cv.expPh":"Votre expérience professionnelle","cv.eduPh":"Formation et certifications","cv.skillsPh":"Compétences (séparées par des virgules)","cv.run":"Rédiger mon CV",
            "pf.notice":"L'IA va vous poser quelques questions simples sur votre domaine et vos projets pour préparer un contenu de portfolio personnalisé.","pf.fieldPh":"Votre domaine (designer, développeur, marketeur...)","pf.start":"Commencer - laisser l'IA me questionner",
            "pf.inputPh":"Écrivez votre réponse ici...","pf.generate":"Assez de questions - générer le portfolio maintenant",
            "writing.notice":"Révision linguistique et suggestions de mise en forme académique sous forme de recommandations que vous appliquez vous-même dans Word.","writing.topicPh":"Sujet de recherche (facultatif)","writing.inputPh":"Collez ici le texte de votre recherche ou article...","writing.run":"Réviser le texte",
            "sum.desc":"Résumez n'importe quel rapport, article ou cours en quelques secondes.","sum.inputPh":"Collez le texte ici...","sum.run":"Résumer maintenant",
            "tr.notice":"Vous pouvez importer un fichier audio pour une transcription automatique par IA, enregistrer directement au micro, ou coller un texte déjà prêt.","tr.uploadBtn":"Importer un fichier audio et le transcrire","tr.uploadHint":"Aucun fichier importé pour l'instant",
            "tr.sourceLangLabel":"Langue source de la parole","tr.targetLangLabel":"Traduire le texte final vers (facultatif)","tr.micHint":"Appuyez pour enregistrer, importez un fichier ci-dessus, ou collez un texte ci-dessous.","tr.rawPh":"Le texte brut apparaîtra ici...","tr.run":"Nettoyer et mettre en forme",
            
            "profile.points":"points","profile.namePh":"Votre nom complet","profile.titlePh":"Intitulé du poste","profile.googleBtn":"Se connecter avec Google",
            "profile.googleHint":"La connexion enregistre votre nom, votre photo et vos points sur cet appareil — les essais gratuits sont comptés par appareil, pas par compte.","profile.save":"Enregistrer les informations",
            "profile.connected":"Connecté avec Google","profile.logoutBtn":"Se déconnecter",
            "profile.statUsage":"Utilisations des outils","profile.statDevice":"Identifiant de l'appareil","profile.statPlan":"Votre offre actuelle","profile.planFree":"Gratuit",
            "subs.individualTitle":"Offres individuelles","subs.individualDesc":"Pour toute personne qui se prépare à un entretien ou construit sa propre carrière.","subs.basicName":"Basique","subs.perMonth":"/ mois","subs.proName":"Professionnelle","subs.popular":"La plus demandée",
            "subs.yearlyName":"Annuelle","subs.perYear":"/ an","subs.subscribe":"S'abonner maintenant","subs.teamTitle":"Offres pour équipes et universités","subs.teamDesc":"Pour les facultés, universités et centres de recrutement qui veulent former un groupe ensemble à un meilleur prix.",
            "subs.teamSmallName":"Petite équipe","subs.teamSmallRange":"Jusqu'à 10 personnes","subs.perSeat":"/ par personne / mois","subs.recommended":"Recommandé pour les universités","subs.teamMedName":"Promotion / faculté","subs.teamMedRange":"De 11 à 100 personnes",
            "subs.uniName":"Université / grande organisation","subs.uniRange":"Plus de 100 personnes","subs.customPrice":"Tarif sur mesure","subs.contactUs":"Nous contacter",
            "don.title":"Soutenez la continuité de la plateforme","don.desc":"Si vous souhaitez soutenir le développement de YUSR Pro, vous pouvez faire un don de n'importe quel montant via les numéros ci-dessous.","don.wallet":"Portefeuille électronique","don.thanks":"Un grand merci à tous ceux qui nous soutiennent.",
            "sup.title":"Assistance et contact","sup.desc":"Une question, un problème ou une suggestion ? Contactez-nous directement.","sup.phone":"Appel direct","sup.hours":"Nous répondons généralement en quelques heures. Pour les urgences, WhatsApp est le plus rapide.",
            "legal.lastUpdated":"Dernière mise à jour : août 2026",
            "about.pageTitle":"À propos de nous","about.tagline":"Une plateforme arabe que nous construisons avec passion pour être votre compagnon dans votre parcours professionnel.",
            "about.missionLabel":"Notre mission","about.missionBody":"Nous croyons que chacun, quel que soit son parcours ou sa situation, mérite d'accéder à la bonne opportunité en toute confiance et bien préparé. \"YUSR Pro\" est né d'une idée simple : une bonne préparation à l'entretien ou un CV solide ne devrait pas être réservé à ceux qui ont le temps, l'argent ou les relations — l'IA peut désormais offrir cette même qualité à portée de main, à tout moment.",
            "about.pillarsTitle":"Ce qui nous anime",
            "about.pillar1Title":"Une aide réelle","about.pillar1Body":"Pas seulement des outils : nous concevons chaque fonctionnalité pour résoudre un vrai problème rencontré par les chercheurs d'emploi.",
            "about.pillar2Title":"Amélioration continue","about.pillar2Body":"Nous écoutons vos suggestions et ajoutons/améliorons en permanence — la plateforme grandit avec vous, étape par étape.",
            "about.pillar3Title":"L'IA à votre service","about.pillar3Body":"Nous exploitons les dernières technologies d'IA pour vous offrir une préparation personnalisée de haute qualité.",
            "about.pillar4Title":"Votre confidentialité d'abord","about.pillar4Body":"Vos données vous appartiennent, nous ne les utilisons ou partageons que pour vous fournir le service.",
            "about.whyTitle":"Pourquoi YUSR Pro ?",
            "about.why1":"Une expérience entièrement conçue en arabe qui comprend votre dialecte.",
            "about.why2":"Tous les outils dont vous avez besoin, de l'entretien au CV en passant par le portfolio, au même endroit.",
            "about.why3":"Un retour honnête et réaliste qui vous aide à progresser, pas de simples compliments génériques.",
            "about.why4":"Nous continuons à développer la plateforme selon les besoins réels de nos utilisateurs.",
            "about.closing":"Vous avez une idée ou une suggestion pour améliorer YUSR ? Nous aimerions l'entendre.","about.contactUs":"Nous contacter",
            "terms.pageTitle":"Conditions d'utilisation","terms.betaNotice":"La plateforme est encore en version bêta. La page \"Abonnements\" affiche actuellement des offres et tarifs d'essai, sans aucun prélèvement réel sur une carte ou un compte — nous l'annoncerons clairement dans l'application dès l'activation du paiement réel.",
            "terms.s1.title":"1. Acceptation des conditions","terms.s1.body":"En utilisant la plateforme \"YUSR Pro\", vous acceptez ces conditions.",
            "terms.s2.title":"2. Nature du service","terms.s2.body":"YUSR est une plateforme d'assistance par IA pour préparer les chercheurs d'emploi : entretiens d'entraînement vocaux, création de CV et de portfolio, relecture académique, résumé de documents et transcription audio. Les réponses et suggestions sont générées par IA et constituent une aide indicative, pas une garantie de résultat ou d'embauche.",
            "terms.s3.title":"3. Compte et usage autorisé","terms.s3.body":"Vous pouvez utiliser la plateforme en tant qu'invité (identité anonyme automatique) ou en vous connectant avec un compte Google pour enregistrer vos données. Vous êtes responsable de toute activité effectuée depuis votre compte. Sont interdits : toute tentative de contourner les limites d'usage équitable, l'envoi de requêtes automatisées massives (bots), ou toute tentative d'accès à une partie du système non autorisée.",
            "terms.s4.title":"4. Limites d'usage équitable","terms.s4.body":"Pour assurer la continuité du service pour tous, les outils d'IA (conversation, transcription audio, synthèse vocale) ont un plafond d'utilisation quotidien et mensuel. Si vous atteignez la limite, vous devrez attendre son renouvellement.",
            "terms.s5.title":"5. Votre contenu","terms.s5.body":"Tout contenu que vous rédigez ou importez (données de CV, portfolio, enregistrements audio) reste votre propriété. Nous le traitons uniquement pour vous fournir le service, sans jamais l'utiliser à d'autres fins ni le vendre.",
            "terms.s6.title":"6. Clause de non-responsabilité","terms.s6.body":"Le service est fourni \"tel quel\" sans garantie. Nous ne sommes pas responsables des décisions professionnelles ou de carrière que vous prenez sur la base des résultats de l'IA, et nous recommandons toujours de vérifier vous-même tout contenu important avant de l'utiliser.",
            "terms.s7.title":"7. Modifications","terms.s7.body":"Nous pouvons modifier ces conditions de temps à autre et mettrons à jour la date \"Dernière mise à jour\" ci-dessus. Continuer à utiliser la plateforme après une modification signifie que vous acceptez la nouvelle version.",
            "terms.s8.title":"8. Contact","terms.s8.body":"Pour toute question concernant ces conditions, contactez-nous via la page \"Assistance et contact\".",
            "privacy.pageTitle":"Politique de confidentialité",
            "privacy.s1.title":"1. Qui collecte les données","privacy.s1.body":"La plateforme \"YUSR Pro\" est celle qui collecte et traite vos données, dans un seul but : vous fournir le service que vous utilisez.",
            "privacy.s2.title":"2. Données que nous collectons",
            "privacy.s2.li1":"<b class=\"text-slate-200\">Données de compte :</b> si vous vous connectez avec Google, nous récupérons votre nom, votre photo et votre e-mail directement depuis Google. Si vous entrez en tant qu'invité, nous vous attribuons une identité anonyme juste pour vous distinguer des autres utilisateurs.",
            "privacy.s2.li2":"<b class=\"text-slate-200\">Contenu que vous utilisez :</b> données de CV, portfolio, textes que vous rédigez ou résumez, et enregistrements audio que vous importez dans les outils d'entretien ou de transcription.",
            "privacy.s2.li3":"<b class=\"text-slate-200\">Données d'utilisation technique :</b> le nombre de fois où vous avez utilisé chaque outil (pour appliquer les limites d'usage équitable), stockées localement sur votre appareil (localStorage), comme le \"nombre d'essais restants\".",
            "privacy.s3.title":"3. Comment nous utilisons vos données","privacy.s3.body":"Nous utilisons vos données uniquement pour : (a) faire fonctionner les outils d'IA (nous envoyons le texte ou l'audio que vous importez à des entreprises de traitement spécialisées pour générer la réponse, sans stocker vos clés ni vos identifiants chez elles), (b) enregistrer votre profil pour qu'il soit là à votre retour, (c) améliorer le service et prévenir les abus.",
            "privacy.s4.title":"4. Qui voit vos données (tiers)",
            "privacy.s4.li1":"<b class=\"text-slate-200\">Google Firebase :</b> pour la connexion et le stockage sécurisé de votre profil.",
            "privacy.s4.li2":"<b class=\"text-slate-200\">Groq :</b> pour le traitement du texte et de l'audio dans les outils de conversation et de transcription.",
            "privacy.s4.li3":"<b class=\"text-slate-200\">Microsoft Edge :</b> pour la conversion texte-parole.",
            "privacy.s4.li4":"<b class=\"text-slate-200\">Cloudflare :</b> comme intermédiaire technique sécurisé entre votre application et les services d'IA, sans conserver vos données.",
            "privacy.s4.li5":"<b class=\"text-slate-200\">s.jina.ai :</b> uniquement pour la recherche web en direct dans l'outil d'estimation de salaire.",
            "privacy.s4.note":"Nous ne vendons jamais vos données à qui que ce soit et ne les partageons jamais à des fins publicitaires.",
            "privacy.s5.title":"5. Sécurité des données","privacy.s5.body":"Vos données sont protégées par des règles de sécurité garantissant que chaque utilisateur ne voit que ses propres données, et toute communication entre votre application et le serveur est chiffrée (HTTPS).",
            "privacy.s6.title":"6. Vos droits","privacy.s6.body":"Vous pouvez à tout moment demander à consulter vos données enregistrées, les modifier, ou demander leur suppression complète, en nous contactant via la page \"Assistance et contact\".",
            "privacy.s7.title":"7. Enfants","privacy.s7.body":"Le service ne s'adresse pas aux personnes de moins de 13 ans, et nous ne collectons pas sciemment de données de cette tranche d'âge.",
            "privacy.s8.title":"8. Modifications de cette politique","privacy.s8.body":"Nous pouvons mettre à jour cette politique de temps à autre, et nous changerons la date \"Dernière mise à jour\" ci-dessus dès que nous apporterons une modification substantielle."
        },
        es: {
            "nav.section.interviews":"Entrevistas y contratación","nav.interview":"Entrevista de práctica por voz","nav.faq":"Preguntas frecuentes + respuestas modelo","nav.career":"Plan de desarrollo profesional",
            "nav.section.documents":"Documentos","nav.cv":"Creador de CV","nav.portfolio":"Portafolio personal","nav.writing":"Revisión académica","nav.summarizer":"Resumen de documentos",
            "nav.section.audio":"Audio y video","nav.transcribe":"Transcripción de audio a texto",
            "nav.section.account":"Cuenta y soporte","nav.about":"Sobre nosotros","nav.profile":"Perfil","nav.subscriptions":"Suscripciones","nav.donations":"Donaciones","nav.support":"Soporte y contacto",
            "nav.section.legal":"Legal","nav.terms":"Términos de uso","nav.privacy":"Política de privacidad",
            "account.guest":"Invitado (este dispositivo)","account.signinHint":"Inicia sesión con Google para guardar tu foto y puntos",
            "authgate.title":"Iniciar sesión","authgate.subtitle":"Si no puedes entrar como invitado ahora (normalmente un problema de conexión), inicia sesión con Google o tu correo.","authgate.googleBtn":"Iniciar sesión con Google","authgate.orEmail":"o por correo","authgate.tabLogin":"Iniciar sesión","authgate.tabSignup":"Crear cuenta","authgate.namePh":"Tu nombre completo","authgate.emailPh":"Correo electrónico","authgate.passwordPh":"Contraseña","authgate.confirmPh":"Confirmar contraseña","authgate.submitLogin":"Iniciar sesión","authgate.submitSignup":"Crear cuenta","authgate.privacyNote":"Tus datos se guardan de forma segura, y tu contraseña está cifrada — ni nosotros podemos verla.",
            "trial.left":"Intentos restantes","trial.upgrade":"Actualizar al plan completo",
            "copy":"Copiar","download":"Descargar",
            "interview.desc":"Practica una entrevista oral real con una evaluación de desempeño detallada al final.","interview.linkCv":"Vincular CV",
            "interview.roleLabel":"Puesto objetivo","interview.rolePh":"ej.: ventas inmobiliarias, atención al cliente, programación...",
            "interview.personaLabel":"Personalidad del entrevistador","interview.start":"Iniciar sesión","interview.speaking":"El entrevistador está hablando...",
            "interview.inputPh":"Habla por el micrófono o escribe aquí...","interview.reportHint":"La evaluación analiza tus respuestas de texto además de tu velocidad al hablar y muletillas si usaste el micrófono.",
            "faq.desc":"Escribe el puesto y el área, y prepararemos un banco real de preguntas frecuentes con respuestas modelo convincentes.","faq.rolePh":"ej.: representante de ventas inmobiliarias","faq.run":"Generar preguntas y respuestas",
            "career.desc":"Cuéntanos tu situación actual y tu objetivo, y construiremos un plan de desarrollo práctico.","career.currentLabel":"Tu situación actual","career.currentPh":"ej.: contador con 1 año de experiencia",
            "career.targetLabel":"Tu objetivo","career.targetPh":"ej.: cambiar al análisis de datos","career.contextPh":"Detalles adicionales útiles - opcional","career.run":"Construir mi plan",
            "cv.notice":"Esta herramienta redacta el contenido de texto de tu CV listo para copiar, no un PDF diseñado como en LinkedIn.","cv.photoHint":"Foto opcional (se guarda solo en tu navegador).",
            "cv.namePh":"Nombre completo","cv.titlePh":"Puesto objetivo","cv.expPh":"Tu experiencia laboral","cv.eduPh":"Formación y certificados","cv.skillsPh":"Habilidades (separadas por comas)","cv.run":"Redactar mi CV",
            "pf.notice":"La IA te hará algunas preguntas sencillas sobre tu área y proyectos para preparar contenido de portafolio personalizado.","pf.fieldPh":"Tu área (diseñador, desarrollador, marketing...)","pf.start":"Empezar - que la IA me pregunte",
            "pf.inputPh":"Escribe tu respuesta aquí...","pf.generate":"Suficientes preguntas - generar el portafolio ahora",
            "writing.notice":"Revisión lingüística y sugerencias de formato académico como recomendaciones de texto que aplicas tú mismo en Word.","writing.topicPh":"Tema de investigación (opcional)","writing.inputPh":"Pega aquí el texto de tu investigación o artículo...","writing.run":"Revisar texto",
            "sum.desc":"Resume cualquier informe, artículo o clase en segundos.","sum.inputPh":"Pega el texto aquí...","sum.run":"Resumir ahora",
            "tr.notice":"Puedes subir un archivo de audio listo para transcribirlo automáticamente con IA, grabar directamente con el micrófono, o pegar un texto ya listo.","tr.uploadBtn":"Subir archivo de audio y transcribir","tr.uploadHint":"Aún no se ha subido ningún archivo",
            "tr.sourceLangLabel":"Idioma original del habla","tr.targetLangLabel":"Traducir el texto final a (opcional)","tr.micHint":"Pulsa para grabar, sube un archivo arriba, o pega un texto abajo.","tr.rawPh":"El texto en bruto aparecerá aquí...","tr.run":"Limpiar y dar formato",
            
            "profile.points":"puntos","profile.namePh":"Tu nombre completo","profile.titlePh":"Puesto de trabajo","profile.googleBtn":"Iniciar sesión con Google",
            "profile.googleHint":"Iniciar sesión guarda tu nombre, foto y puntos en este dispositivo — los intentos gratuitos se cuentan por dispositivo, no por cuenta.","profile.save":"Guardar información",
            "profile.connected":"Conectado con Google","profile.logoutBtn":"Cerrar sesión",
            "profile.statUsage":"Usos de herramientas","profile.statDevice":"ID del dispositivo","profile.statPlan":"Tu plan actual","profile.planFree":"Gratis",
            "subs.individualTitle":"Planes individuales","subs.individualDesc":"Para cualquiera que se esté preparando para una entrevista o construyendo su propia carrera.","subs.basicName":"Básico","subs.perMonth":"/ mes","subs.proName":"Profesional","subs.popular":"Más popular",
            "subs.yearlyName":"Anual","subs.perYear":"/ año","subs.subscribe":"Suscribirse ahora","subs.teamTitle":"Planes para equipos y universidades","subs.teamDesc":"Para facultades, universidades y centros de contratación que quieren capacitar a un grupo junto a un mejor precio.",
            "subs.teamSmallName":"Equipo pequeño","subs.teamSmallRange":"Hasta 10 personas","subs.perSeat":"/ por persona / mes","subs.recommended":"Recomendado para universidades","subs.teamMedName":"Grupo / facultad","subs.teamMedRange":"De 11 a 100 personas",
            "subs.uniName":"Universidad / gran organización","subs.uniRange":"Más de 100 personas","subs.customPrice":"Precio personalizado","subs.contactUs":"Contáctanos",
            "don.title":"Apoya la continuidad de la plataforma","don.desc":"Si quieres apoyar el desarrollo de YUSR Pro, puedes donar cualquier cantidad a través de los números de abajo.","don.wallet":"Billetera electrónica","don.thanks":"Muchas gracias a todos los que nos apoyan.",
            "sup.title":"Soporte y contacto","sup.desc":"¿Tienes una pregunta, problema o sugerencia? Contáctanos directamente.","sup.phone":"Llamada directa","sup.hours":"Solemos responder en unas pocas horas. Para asuntos urgentes, WhatsApp es lo más rápido.",
            "legal.lastUpdated":"Última actualización: agosto de 2026",
            "about.pageTitle":"Sobre nosotros","about.tagline":"Una plataforma árabe que construimos con pasión para ser tu compañera en tu trayectoria profesional.",
            "about.missionLabel":"Nuestra misión","about.missionBody":"Creemos que todos, sea cual sea su origen o circunstancias, merecen alcanzar la oportunidad correcta sintiéndose seguros y bien preparados. \"YUSR Pro\" nació de una idea sencilla: una buena preparación para entrevistas o un CV sólido no deberían ser exclusivos de quien tiene tiempo, dinero o contactos — la IA ahora puede poner esa misma calidad al alcance de cualquiera, en cualquier momento.",
            "about.pillarsTitle":"Qué nos impulsa",
            "about.pillar1Title":"Ayuda real","about.pillar1Body":"No solo herramientas: diseñamos cada función para resolver un problema real que enfrentan quienes buscan empleo.",
            "about.pillar2Title":"Mejora continua","about.pillar2Body":"Escuchamos tus sugerencias y seguimos añadiendo y mejorando — la plataforma crece contigo, paso a paso.",
            "about.pillar3Title":"IA a tu servicio","about.pillar3Body":"Aprovechamos la última tecnología de IA para darte una experiencia de preparación personalizada y de alta calidad.",
            "about.pillar4Title":"Tu privacidad primero","about.pillar4Body":"Tus datos son tuyos; solo los usamos o compartimos para brindarte el servicio.",
            "about.whyTitle":"¿Por qué YUSR Pro?",
            "about.why1":"Una experiencia diseñada completamente en árabe que entiende tu dialecto.",
            "about.why2":"Todas las herramientas que necesitas, desde entrevistas hasta CV y portafolio, en un solo lugar.",
            "about.why3":"Comentarios honestos y realistas que te ayudan a mejorar, no solo elogios genéricos.",
            "about.why4":"Seguimos desarrollando la plataforma según las necesidades reales de nuestros usuarios.",
            "about.closing":"¿Tienes una idea o sugerencia que mejore YUSR? Nos encantaría escucharla.","about.contactUs":"Contáctanos",
            "terms.pageTitle":"Términos de uso","terms.betaNotice":"La plataforma aún está en fase beta. La página de \"Suscripciones\" muestra actualmente planes y precios de prueba, sin cargo real a ninguna tarjeta o cuenta — lo anunciaremos claramente en la aplicación en cuanto se active el pago real.",
            "terms.s1.title":"1. Aceptación de los términos","terms.s1.body":"Al usar la plataforma \"YUSR Pro\", aceptas estos términos.",
            "terms.s2.title":"2. Naturaleza del servicio","terms.s2.body":"YUSR es una plataforma de asistencia con IA para preparar a quienes buscan empleo: entrevistas de práctica por voz, creación de CV y portafolio, revisión académica, resumen de documentos y transcripción de audio. Las respuestas y sugerencias son generadas por IA y se consideran una ayuda orientativa, no una garantía de resultado ni de ser contratado.",
            "terms.s3.title":"3. Cuenta y uso permitido","terms.s3.body":"Puedes usar la plataforma como invitado (identidad anónima automática) o iniciando sesión con una cuenta de Google para guardar tus datos. Eres responsable de cualquier actividad realizada desde tu cuenta. Está prohibido: intentar eludir los límites de uso justo, enviar solicitudes automatizadas masivas (bots), o intentar acceder a cualquier parte del sistema sin autorización.",
            "terms.s4.title":"4. Límites de uso justo","terms.s4.body":"Para garantizar la continuidad del servicio para todos, las herramientas de IA (chat, transcripción de audio, texto a voz) tienen un límite diario y mensual de uso. Si alcanzas el límite, deberás esperar a que se renueve.",
            "terms.s5.title":"5. Tu contenido","terms.s5.body":"Cualquier contenido que escribas o subas (datos de CV, portafolio, grabaciones de voz) sigue siendo tuyo. Solo lo procesamos para brindarte el servicio, y nunca lo usamos con otro fin ni lo vendemos.",
            "terms.s6.title":"6. Exención de responsabilidad","terms.s6.body":"El servicio se ofrece \"tal cual\" sin garantías. No somos responsables de ninguna decisión profesional o laboral que tomes basándote en los resultados de la IA, y siempre recomendamos revisar tú mismo cualquier contenido importante antes de usarlo.",
            "terms.s7.title":"7. Cambios","terms.s7.body":"Podemos modificar estos términos de vez en cuando y actualizaremos la fecha de \"Última actualización\" arriba. Continuar usando la plataforma tras un cambio significa que aceptas la nueva versión.",
            "terms.s8.title":"8. Contacto","terms.s8.body":"Para cualquier pregunta sobre estos términos, contáctanos a través de la página \"Soporte y contacto\".",
            "privacy.pageTitle":"Política de privacidad",
            "privacy.s1.title":"1. Quién recopila los datos","privacy.s1.body":"La plataforma \"YUSR Pro\" es quien recopila y procesa tus datos, con un único fin: brindarte el servicio que usas.",
            "privacy.s2.title":"2. Datos que recopilamos",
            "privacy.s2.li1":"<b class=\"text-slate-200\">Datos de la cuenta:</b> si inicias sesión con Google, obtenemos tu nombre, foto y correo directamente de Google. Si entras como invitado, te damos una identidad anónima solo para diferenciarte de otros usuarios.",
            "privacy.s2.li2":"<b class=\"text-slate-200\">Contenido que usas:</b> datos de CV, portafolio, textos que escribes o resumes, y grabaciones de voz que subes a las herramientas de entrevistas o transcripción.",
            "privacy.s2.li3":"<b class=\"text-slate-200\">Datos técnicos de uso:</b> cuántas veces has usado cada herramienta (para aplicar los límites de uso justo), guardados localmente en tu dispositivo (localStorage), como los \"intentos restantes\".",
            "privacy.s3.title":"3. Cómo usamos tus datos","privacy.s3.body":"Usamos tus datos únicamente para: (a) ejecutar las herramientas de IA (enviamos el texto o audio que subes a empresas de procesamiento especializadas para generar la respuesta, sin almacenar tus claves ni datos de acceso con ellas), (b) guardar tu perfil para que esté ahí cuando vuelvas, (c) mejorar el servicio y prevenir el abuso.",
            "privacy.s4.title":"4. Quién ve tus datos (terceros)",
            "privacy.s4.li1":"<b class=\"text-slate-200\">Google Firebase:</b> para el inicio de sesión y el almacenamiento seguro de tu perfil.",
            "privacy.s4.li2":"<b class=\"text-slate-200\">Groq:</b> para procesar texto y audio en las herramientas de chat y transcripción.",
            "privacy.s4.li3":"<b class=\"text-slate-200\">Microsoft Edge:</b> para la conversión de texto a voz.",
            "privacy.s4.li4":"<b class=\"text-slate-200\">Cloudflare:</b> como intermediario técnico seguro entre tu aplicación y los servicios de IA, sin conservar tus datos.",
            "privacy.s4.li5":"<b class=\"text-slate-200\">s.jina.ai:</b> solo para búsqueda web en vivo en la herramienta de estimación de salario.",
            "privacy.s4.note":"Nunca vendemos tus datos a nadie, ni los compartimos con fines publicitarios.",
            "privacy.s5.title":"5. Seguridad de los datos","privacy.s5.body":"Tus datos están protegidos por reglas de seguridad que garantizan que cada usuario solo vea sus propios datos, y toda la comunicación entre tu aplicación y el servidor está cifrada (HTTPS).",
            "privacy.s6.title":"6. Tus derechos","privacy.s6.body":"Puedes solicitar en cualquier momento ver tus datos guardados, editarlos o solicitar su eliminación completa, contactándonos a través de la página \"Soporte y contacto\".",
            "privacy.s7.title":"7. Menores","privacy.s7.body":"El servicio no está dirigido a menores de 13 años, y no recopilamos datos deliberadamente de ese grupo de edad.",
            "privacy.s8.title":"8. Cambios en esta política","privacy.s8.body":"Podemos actualizar esta política de vez en cuando, y cambiaremos la fecha de \"Última actualización\" arriba cuando hagamos un cambio sustancial."
        },
        tr: {
            "nav.section.interviews":"Mülakatlar ve İşe Alım","nav.interview":"Sesli Deneme Mülakatı","nav.faq":"SSS + Örnek Cevaplar","nav.career":"Kariyer Gelişim Planı",
            "nav.section.documents":"Belgeler","nav.cv":"CV Oluşturucu","nav.portfolio":"Kişisel Portfolyo","nav.writing":"Akademik Yazı Denetimi","nav.summarizer":"Belge Özetleyici",
            "nav.section.audio":"Ses ve Video","nav.transcribe":"Sesi Metne Dönüştürme",
            "nav.section.account":"Hesap ve Destek","nav.about":"Hakkımızda","nav.profile":"Profil","nav.subscriptions":"Abonelikler","nav.donations":"Bağışlar","nav.support":"Destek ve İletişim",
            "nav.section.legal":"Yasal","nav.terms":"Kullanım Şartları","nav.privacy":"Gizlilik Politikası",
            "account.guest":"Misafir (bu cihaz)","account.signinHint":"Fotoğrafını ve puanlarını kaydetmek için Google ile giriş yap",
            "authgate.title":"Giriş yap","authgate.subtitle":"Şu anda misafir olarak giremiyorsan (genellikle bağlantı sorunu), Google veya e-postanla giriş yap.","authgate.googleBtn":"Google ile Giriş Yap","authgate.orEmail":"veya e-posta ile","authgate.tabLogin":"Giriş yap","authgate.tabSignup":"Hesap oluştur","authgate.namePh":"Ad Soyad","authgate.emailPh":"E-posta","authgate.passwordPh":"Şifre","authgate.confirmPh":"Şifreyi onayla","authgate.submitLogin":"Giriş yap","authgate.submitSignup":"Hesap oluştur","authgate.privacyNote":"Verilerin güvenli şekilde saklanır, şifren şifrelenir — biz bile göremeyiz.",
            "trial.left":"Kalan deneme hakkı","trial.upgrade":"Tam pakete yükselt",
            "copy":"Kopyala","download":"İndir",
            "interview.desc":"Sonunda ayrıntılı performans değerlendirmesiyle gerçek bir sözlü mülakatı deneyimle.","interview.linkCv":"CV'yi Bağla",
            "interview.roleLabel":"Hedef pozisyon","interview.rolePh":"örn: emlak satışı, müşteri hizmetleri, yazılım...",
            "interview.personaLabel":"Mülakatçı kişiliği","interview.start":"Oturumu Başlat","interview.speaking":"Mülakatçı konuşuyor...",
            "interview.inputPh":"Mikrofona konuş veya buraya yaz...","interview.reportHint":"Değerlendirme, yazılı cevaplarını, mikrofon kullandıysan konuşma hızını ve dolgu kelimeleri analiz eder.",
            "faq.desc":"Pozisyonu ve alanı yaz, ikna edici örnek cevaplarla gerçek bir sık sorulan sorular bankası hazırlayalım.","faq.rolePh":"örn: emlak satış sorumlusu","faq.run":"Soru ve Cevapları Oluştur",
            "career.desc":"Mevcut durumunu ve hedefini söyle, gerçekçi adımlarla pratik bir gelişim planı oluşturalım.","career.currentLabel":"Mevcut durumun","career.currentPh":"örn: 1. yıl muhasebeci",
            "career.targetLabel":"Hedefin","career.targetPh":"örn: veri analitiğine geçmek istiyorum","career.contextPh":"Faydalı ek bilgiler - isteğe bağlı","career.run":"Planımı Oluştur",
            "cv.notice":"Bu araç, LinkedIn gibi tasarlanmış bir PDF değil, kopyalamaya hazır profesyonel CV metin içeriği oluşturur.","cv.photoHint":"İsteğe bağlı fotoğraf (yalnızca tarayıcında saklanır).",
            "cv.namePh":"Ad Soyad","cv.titlePh":"Hedef pozisyon","cv.expPh":"İş deneyimin","cv.eduPh":"Eğitim ve sertifikalar","cv.skillsPh":"Beceriler (virgülle ayır)","cv.run":"CV'mi Yaz",
            "pf.notice":"Yapay zeka, kişiselleştirilmiş bir portfolyo içeriği hazırlamak için alanın ve projelerin hakkında birkaç basit soru soracak.","pf.fieldPh":"Alanın (tasarımcı, geliştirici, pazarlamacı...)","pf.start":"Başla - yapay zeka bana sorsun",
            "pf.inputPh":"Cevabını buraya yaz...","pf.generate":"Yeterli soru - portfolyoyu şimdi oluştur",
            "writing.notice":"Kendinin Word'de uygulayacağın metinsel öneriler şeklinde dilbilgisi incelemesi ve akademik biçimlendirme önerileri.","writing.topicPh":"Araştırma konusu (isteğe bağlı)","writing.inputPh":"Araştırma veya makale metnini buraya yapıştır...","writing.run":"Metni İncele",
            "sum.desc":"Herhangi bir raporu, makaleyi veya dersi saniyeler içinde özetle.","sum.inputPh":"Metni buraya yapıştır...","sum.run":"Şimdi Özetle",
            "tr.notice":"Yapay zekayla otomatik olarak yazıya dökülmesi için hazır bir ses dosyası yükleyebilir, doğrudan mikrofonla kayıt yapabilir veya hazır bir metni yapıştırabilirsin.","tr.uploadBtn":"Ses dosyası yükle ve otomatik yazıya dök","tr.uploadHint":"Henüz dosya yüklenmedi",
            "tr.sourceLangLabel":"Kaynak konuşma dili","tr.targetLangLabel":"Son metni şu dile çevir (isteğe bağlı)","tr.micHint":"Kayıt için bas, yukarıdan dosya yükle veya aşağıya hazır metin yapıştır.","tr.rawPh":"Ham metin burada görünecek...","tr.run":"Temizle ve Biçimlendir",
            
            "profile.points":"puan","profile.namePh":"Ad Soyad","profile.titlePh":"Meslek unvanı","profile.googleBtn":"Google ile Giriş Yap",
            "profile.googleHint":"Giriş yapmak, adını, fotoğrafını ve puanlarını bu cihazda kaydeder — ücretsiz denemeler hesaba göre değil cihaza göre sayılır.","profile.save":"Bilgileri Kaydet",
            "profile.connected":"Google ile Bağlı","profile.logoutBtn":"Çıkış Yap",
            "profile.statUsage":"Araç kullanım sayısı","profile.statDevice":"Cihaz Kimliği","profile.statPlan":"Mevcut paketin","profile.planFree":"Ücretsiz",
            "subs.individualTitle":"Bireysel Paketler","subs.individualDesc":"Mülakata hazırlanan veya kendi kariyerini inşa eden herkes için.","subs.basicName":"Temel","subs.perMonth":"/ ay","subs.proName":"Profesyonel","subs.popular":"En Çok Tercih Edilen",
            "subs.yearlyName":"Yıllık","subs.perYear":"/ yıl","subs.subscribe":"Şimdi Abone Ol","subs.teamTitle":"Ekip ve Üniversite Paketleri","subs.teamDesc":"Bir grubu daha uygun fiyata birlikte eğitmek isteyen fakülteler, üniversiteler ve işe alım merkezleri için.",
            "subs.teamSmallName":"Küçük Ekip","subs.teamSmallRange":"10 kişiye kadar","subs.perSeat":"/ kişi başı / ay","subs.recommended":"Üniversiteler için önerilir","subs.teamMedName":"Grup / Fakülte","subs.teamMedRange":"11 ila 100 kişi",
            "subs.uniName":"Üniversite / Büyük Kurum","subs.uniRange":"100 kişiden fazla","subs.customPrice":"Özel fiyatlandırma","subs.contactUs":"Bize Ulaşın",
            "don.title":"Platformun Sürekliliğini Destekle","don.desc":"YUSR Pro'nun gelişimini desteklemek istersen, aşağıdaki numaralar üzerinden istediğin miktarda bağış yapabilirsin.","don.wallet":"Elektronik Cüzdan","don.thanks":"Bizi destekleyen herkese çok teşekkür ederiz.",
            "sup.title":"Destek ve İletişim","sup.desc":"Bir sorun, sorunun veya önerin mi var? Bizimle doğrudan iletişime geç.","sup.phone":"Doğrudan Arama","sup.hours":"Genellikle birkaç saat içinde yanıt veriyoruz. Acil konularda en hızlısı WhatsApp'tır.",
            "legal.lastUpdated":"Son güncelleme: Ağustos 2026",
            "about.pageTitle":"Hakkımızda","about.tagline":"Kariyer yolculuğunda yol arkadaşın olması için tutkuyla inşa ettiğimiz bir Arapça platform.",
            "about.missionLabel":"Misyonumuz","about.missionBody":"Geçmişi veya koşulları ne olursa olsun herkesin kendine güvenerek ve iyi hazırlanmış olarak doğru fırsata ulaşmayı hak ettiğine inanıyoruz. \"YUSR Pro\" basit bir fikirden doğdu: iyi bir mülakat hazırlığı veya güçlü bir CV, zamanı, parası veya bağlantısı olanların ayrıcalığı olmamalı — yapay zeka artık bu kaliteyi herkesin her an ulaşabileceği hale getirebiliyor.",
            "about.pillarsTitle":"Bizi Ne Yönlendiriyor",
            "about.pillar1Title":"Gerçek Yardım","about.pillar1Body":"Sadece araçlar değil; iş arayanların karşılaştığı gerçek bir sorunu çözmek için her özelliği tasarlıyoruz.",
            "about.pillar2Title":"Sürekli Gelişim","about.pillar2Body":"Önerilerinizi dinliyor, sürekli ekleme ve iyileştirme yapıyoruz — platform sizinle birlikte adım adım büyüyor.",
            "about.pillar3Title":"Hizmetinizdeki Yapay Zeka","about.pillar3Body":"Size yüksek kaliteli, kişiselleştirilmiş bir hazırlık deneyimi sunmak için en son yapay zeka teknolojilerinden faydalanıyoruz.",
            "about.pillar4Title":"Önce Gizliliğiniz","about.pillar4Body":"Verileriniz size aittir; onları yalnızca size hizmet sunmak için kullanır veya paylaşırız.",
            "about.whyTitle":"Neden YUSR Pro?",
            "about.why1":"Tamamen Arapça tasarlanmış ve lehçenizi anlayan bir deneyim.",
            "about.why2":"Mülakattan CV'ye, portfolyoya kadar ihtiyacın olan her araç tek bir yerde.",
            "about.why3":"Genel övgüler değil, gelişmene yardımcı olan dürüst ve gerçekçi geri bildirim.",
            "about.why4":"Kullanıcılarımızın gerçek ihtiyaçlarına göre platformu geliştirmeye devam ediyoruz.",
            "about.closing":"YUSR'yi daha iyi yapacak bir fikrin veya önerin mi var? Duymak isteriz.","about.contactUs":"Bize Ulaşın",
            "terms.pageTitle":"Kullanım Şartları","terms.betaNotice":"Platform hâlâ Beta aşamasındadır. \"Abonelikler\" sayfası şu anda deneme paketlerini ve fiyatlarını göstermektedir; herhangi bir karttan veya hesaptan gerçek bir kesinti yapılmamaktadır — gerçek ödeme etkinleştirildiğinde uygulamada açıkça duyuracağız.",
            "terms.s1.title":"1. Şartların Kabulü","terms.s1.body":"\"YUSR Pro\" platformunu kullanarak bu şartları kabul etmiş olursunuz.",
            "terms.s2.title":"2. Hizmetin Niteliği","terms.s2.body":"YUSR, iş arayanları hazırlamak için yapay zeka destekli bir platformdur: sesli deneme mülakatları, CV ve portfolyo oluşturma, akademik yazı denetimi, belge özetleme ve sesi yazıya dökme. Yanıtlar ve öneriler yapay zeka tarafından üretilir ve yalnızca yol gösterici niteliktedir, herhangi bir sonucun veya işe alımın garantisi değildir.",
            "terms.s3.title":"3. Hesap ve İzin Verilen Kullanım","terms.s3.body":"Platformu misafir olarak (otomatik anonim kimlikle) veya verilerini kaydetmek için bir Google hesabıyla giriş yaparak kullanabilirsin. Hesabından yapılan her türlü faaliyetten sorumlusun. Yasak olanlar: adil kullanım sınırlarını aşmaya çalışmak, yoğun otomatik istekler (bot) göndermek veya sistemin izin verilmeyen herhangi bir bölümüne erişmeye çalışmak.",
            "terms.s4.title":"4. Adil Kullanım Sınırları","terms.s4.body":"Hizmetin herkes için sürekliliğini sağlamak amacıyla yapay zeka araçlarının (sohbet, ses yazıya dökme, metinden sese) günlük ve aylık kullanım üst sınırı vardır. Sınıra ulaştığında, yenilenmesini beklemen gerekir.",
            "terms.s5.title":"5. İçeriğin","terms.s5.body":"Yazdığın veya yüklediğin herhangi bir içerik (CV verileri, portfolyo, ses kayıtları) senin mülkiyetinde kalır. Bunu yalnızca sana hizmet sunmak için işleriz, başka hiçbir amaçla kullanmaz veya satmayız.",
            "terms.s6.title":"6. Sorumluluk Reddi","terms.s6.body":"Hizmet herhangi bir garanti olmaksızın \"olduğu gibi\" sunulur. Yapay zeka çıktılarına dayanarak aldığın herhangi bir kariyer veya meslekî karardan sorumlu değiliz ve kullanmadan önce önemli her içeriği kendinin gözden geçirmesini her zaman öneririz.",
            "terms.s7.title":"7. Değişiklikler","terms.s7.body":"Bu şartları zaman zaman değiştirebilir ve yukarıdaki \"Son güncelleme\" tarihini güncelleyebiliriz. Bir değişiklikten sonra platformu kullanmaya devam etmen, yeni sürümü kabul ettiğin anlamına gelir.",
            "terms.s8.title":"8. İletişim","terms.s8.body":"Bu şartlarla ilgili herhangi bir sorun için \"Destek ve İletişim\" sayfasından bize ulaş.",
            "privacy.pageTitle":"Gizlilik Politikası",
            "privacy.s1.title":"1. Verileri Kim Topluyor","privacy.s1.body":"\"YUSR Pro\" platformu, verilerinizi tek bir amaçla toplayan ve işleyen taraftır: kullandığınız hizmeti sunmak.",
            "privacy.s2.title":"2. Topladığımız Veriler",
            "privacy.s2.li1":"<b class=\"text-slate-200\">Hesap verileri:</b> Google ile giriş yaparsan, adını, fotoğrafını ve e-postanı doğrudan Google'dan alırız. Misafir olarak girersen, seni diğer kullanıcılardan ayırt etmek için yalnızca anonim bir kimlik veririz.",
            "privacy.s2.li2":"<b class=\"text-slate-200\">Kullandığın içerik:</b> CV verileri, portfolyo, yazdığın veya özetlediğin metinler ve mülakat ya da sesi yazıya dökme araçlarına yüklediğin ses kayıtları.",
            "privacy.s2.li3":"<b class=\"text-slate-200\">Teknik kullanım verileri:</b> her aracı kaç kez kullandığın (adil kullanım sınırlarını uygulamak için), cihazında yerel olarak (localStorage) saklanan \"kalan deneme sayısı\" gibi veriler.",
            "privacy.s3.title":"3. Verilerini Nasıl Kullanıyoruz","privacy.s3.body":"Verilerini yalnızca şu amaçlarla kullanırız: (a) yapay zeka araçlarını çalıştırmak (yüklediğin metni veya sesi yanıt üretmesi için uzman işleme şirketlerine göndeririz, anahtarlarını veya giriş bilgilerini onlarda saklamadan), (b) geri döndüğünde profilinin orada olması için kaydetmek, (c) hizmeti iyileştirmek ve kötüye kullanımı önlemek.",
            "privacy.s4.title":"4. Verilerini Kim Görüyor (Üçüncü Taraflar)",
            "privacy.s4.li1":"<b class=\"text-slate-200\">Google Firebase:</b> giriş için ve profilinin güvenli şekilde saklanması için.",
            "privacy.s4.li2":"<b class=\"text-slate-200\">Groq:</b> sohbet ve yazıya dökme araçlarında metin ve ses işleme için.",
            "privacy.s4.li3":"<b class=\"text-slate-200\">Microsoft Edge:</b> metni sese dönüştürme için.",
            "privacy.s4.li4":"<b class=\"text-slate-200\">Cloudflare:</b> uygulaman ile yapay zeka hizmetleri arasında, verilerini saklamadan güvenli bir teknik aracı olarak.",
            "privacy.s4.li5":"<b class=\"text-slate-200\">s.jina.ai:</b> yalnızca maaş tahmini aracında canlı web araması için.",
            "privacy.s4.note":"Verilerini asla kimseye satmayız ve reklam amacıyla asla paylaşmayız.",
            "privacy.s5.title":"5. Veri Güvenliği","privacy.s5.body":"Verilerin, her kullanıcının yalnızca kendi verilerini görmesini sağlayan Güvenlik Kuralları ile korunur ve uygulaman ile sunucu arasındaki tüm iletişim şifrelenir (HTTPS).",
            "privacy.s6.title":"6. Haklarınız","privacy.s6.body":"\"Destek ve İletişim\" sayfasından bize ulaşarak istediğin zaman kayıtlı verilerini görüntülemeyi, düzenlemeyi veya tamamen silinmesini talep edebilirsin.",
            "privacy.s7.title":"7. Çocuklar","privacy.s7.body":"Hizmet 13 yaşın altındaki kişilere yönelik değildir ve bu yaş grubundan bilerek veri toplamıyoruz.",
            "privacy.s8.title":"8. Bu Politikadaki Değişiklikler","privacy.s8.body":"Bu politikayı zaman zaman güncelleyebiliriz ve önemli bir değişiklik yaptığımızda yukarıdaki \"Son güncelleme\" tarihini değiştireceğiz."
        },
        de: {
            "nav.section.interviews":"Vorstellungsgespräche & Bewerbung","nav.interview":"Sprachbasiertes Übungsinterview","nav.faq":"FAQ + Musterantworten","nav.career":"Karriereentwicklungsplan",
            "nav.section.documents":"Dokumente","nav.cv":"Lebenslauf-Generator","nav.portfolio":"Persönliches Portfolio","nav.writing":"Akademisches Lektorat","nav.summarizer":"Dokumentenzusammenfassung",
            "nav.section.audio":"Audio & Video","nav.transcribe":"Sprache-zu-Text",
            "nav.section.account":"Konto & Support","nav.about":"Über uns","nav.profile":"Profil","nav.subscriptions":"Abonnements","nav.donations":"Spenden","nav.support":"Support & Kontakt",
            "nav.section.legal":"Rechtliches","nav.terms":"Nutzungsbedingungen","nav.privacy":"Datenschutzerklärung",
            "account.guest":"Gast (dieses Gerät)","account.signinHint":"Melde dich mit Google an, um dein Foto und deine Punkte zu speichern",
            "authgate.title":"Anmelden","authgate.subtitle":"Falls du gerade nicht als Gast einsteigen kannst (meist ein Verbindungsproblem), melde dich mit Google oder deiner E-Mail an.","authgate.googleBtn":"Mit Google anmelden","authgate.orEmail":"oder per E-Mail","authgate.tabLogin":"Anmelden","authgate.tabSignup":"Konto erstellen","authgate.namePh":"Dein vollständiger Name","authgate.emailPh":"E-Mail","authgate.passwordPh":"Passwort","authgate.confirmPh":"Passwort bestätigen","authgate.submitLogin":"Anmelden","authgate.submitSignup":"Konto erstellen","authgate.privacyNote":"Deine Daten werden sicher gespeichert, dein Passwort ist verschlüsselt — nicht einmal wir können es sehen.",
            "trial.left":"Verbleibende Versuche","trial.upgrade":"Auf vollständigen Plan upgraden",
            "copy":"Kopieren","download":"Herunterladen",
            "interview.desc":"Übe ein echtes mündliches Vorstellungsgespräch mit einer detaillierten Leistungsbewertung am Ende.","interview.linkCv":"Lebenslauf verknüpfen",
            "interview.roleLabel":"Zielposition","interview.rolePh":"z. B.: Immobilienvertrieb, Kundenservice, Programmierung...",
            "interview.personaLabel":"Persönlichkeit des Interviewers","interview.start":"Sitzung starten","interview.speaking":"Der Interviewer spricht gerade...",
            "interview.inputPh":"Sprich ins Mikrofon oder schreibe hier...","interview.reportHint":"Die Auswertung analysiert deine schriftlichen Antworten sowie deine Sprechgeschwindigkeit und Füllwörter, falls du das Mikrofon benutzt hast.",
            "faq.desc":"Gib Position und Bereich an, und wir erstellen eine echte Sammlung häufiger Fragen mit überzeugenden Musterantworten.","faq.rolePh":"z. B.: Immobilien-Vertriebsleiter","faq.run":"Fragen & Antworten erstellen",
            "career.desc":"Erzähl uns deine aktuelle Situation und dein Ziel, und wir erstellen einen praktischen Entwicklungsplan.","career.currentLabel":"Deine aktuelle Situation","career.currentPh":"z. B.: Buchhalter mit 1 Jahr Erfahrung",
            "career.targetLabel":"Dein Ziel","career.targetPh":"z. B.: Wechsel in die Datenanalyse","career.contextPh":"Zusätzliche hilfreiche Details - optional","career.run":"Meinen Plan erstellen",
            "cv.notice":"Dieses Tool erstellt professionellen Lebenslauf-Text zum Kopieren, kein fertig gestaltetes PDF wie bei LinkedIn.","cv.photoHint":"Optionales Foto (wird nur in deinem Browser gespeichert).",
            "cv.namePh":"Vollständiger Name","cv.titlePh":"Zielposition","cv.expPh":"Deine Berufserfahrung","cv.eduPh":"Ausbildung & Zertifikate","cv.skillsPh":"Fähigkeiten (durch Kommas getrennt)","cv.run":"Meinen Lebenslauf schreiben",
            "pf.notice":"Die KI stellt dir ein paar einfache Fragen zu deinem Bereich und deinen Projekten, um individuelle Portfolio-Inhalte vorzubereiten.","pf.fieldPh":"Dein Bereich (Designer, Entwickler, Marketing...)","pf.start":"Starten - die KI soll mich fragen",
            "pf.inputPh":"Schreibe deine Antwort hier...","pf.generate":"Genug Fragen - Portfolio jetzt erstellen",
            "writing.notice":"Sprachliche Überprüfung und Vorschläge zur akademischen Formatierung als Textempfehlungen, die du selbst in Word anwendest.","writing.topicPh":"Forschungsthema (optional)","writing.inputPh":"Füge hier deinen Forschungs- oder Artikeltext ein...","writing.run":"Text überprüfen",
            "sum.desc":"Fasse jeden Bericht, Artikel oder jede Vorlesung in Sekunden zusammen.","sum.inputPh":"Text hier einfügen...","sum.run":"Jetzt zusammenfassen",
            "tr.notice":"Du kannst eine fertige Audiodatei hochladen, die automatisch von der KI transkribiert wird, direkt mit dem Mikrofon aufnehmen oder einen fertigen Text einfügen.","tr.uploadBtn":"Audiodatei hochladen und automatisch transkribieren","tr.uploadHint":"Noch keine Datei hochgeladen",
            "tr.sourceLangLabel":"Ausgangssprache der Sprache","tr.targetLangLabel":"Endtext übersetzen nach (optional)","tr.micHint":"Zum Aufnehmen drücken, oben eine Datei hochladen oder unten einen fertigen Text einfügen.","tr.rawPh":"Der Rohtext erscheint hier...","tr.run":"Bereinigen & Formatieren",
            
            "profile.points":"Punkte","profile.namePh":"Dein vollständiger Name","profile.titlePh":"Berufsbezeichnung","profile.googleBtn":"Mit Google anmelden",
            "profile.googleHint":"Die Anmeldung speichert deinen Namen, dein Foto und deine Punkte auf diesem Gerät — kostenlose Versuche werden pro Gerät gezählt, nicht pro Konto.","profile.save":"Angaben speichern",
            "profile.connected":"Mit Google verbunden","profile.logoutBtn":"Abmelden",
            "profile.statUsage":"Tool-Nutzungen","profile.statDevice":"Geräte-ID","profile.statPlan":"Dein aktueller Plan","profile.planFree":"Kostenlos",
            "subs.individualTitle":"Einzelpläne","subs.individualDesc":"Für alle, die sich auf ein Vorstellungsgespräch vorbereiten oder ihre eigene Karriere aufbauen.","subs.basicName":"Basis","subs.perMonth":"/ Monat","subs.proName":"Professionell","subs.popular":"Am beliebtesten",
            "subs.yearlyName":"Jährlich","subs.perYear":"/ Jahr","subs.subscribe":"Jetzt abonnieren","subs.teamTitle":"Team- & Universitätspläne","subs.teamDesc":"Für Fakultäten, Universitäten und Rekrutierungszentren, die eine Gruppe gemeinsam zu einem besseren Preis pro Platz schulen möchten.",
            "subs.teamSmallName":"Kleines Team","subs.teamSmallRange":"Bis zu 10 Personen","subs.perSeat":"/ pro Person / Monat","subs.recommended":"Empfohlen für Universitäten","subs.teamMedName":"Jahrgang / Fakultät","subs.teamMedRange":"11 bis 100 Personen",
            "subs.uniName":"Universität / Große Organisation","subs.uniRange":"Über 100 Personen","subs.customPrice":"Individueller Preis","subs.contactUs":"Kontaktiere uns",
            "don.title":"Unterstütze die Plattform","don.desc":"Wenn du die Entwicklung von YUSR Pro unterstützen möchtest, kannst du über die untenstehenden Nummern einen beliebigen Betrag spenden.","don.wallet":"Elektronische Geldbörse","don.thanks":"Vielen Dank an alle, die uns unterstützen.",
            "sup.title":"Support & Kontakt","sup.desc":"Hast du eine Frage, ein Problem oder einen Vorschlag? Kontaktiere uns direkt.","sup.phone":"Direktanruf","sup.hours":"Wir antworten in der Regel innerhalb weniger Stunden. Bei dringenden Anliegen ist WhatsApp am schnellsten.",
            "legal.lastUpdated":"Zuletzt aktualisiert: August 2026",
            "about.pageTitle":"Über uns","about.tagline":"Eine arabische Plattform, die wir mit Leidenschaft aufbauen, um dein Begleiter auf deiner Karriereweise zu sein.",
            "about.missionLabel":"Unsere Mission","about.missionBody":"Wir glauben, dass jeder, unabhängig von Herkunft oder Umständen, es verdient, die richtige Chance selbstbewusst und gut vorbereitet zu erreichen. \"YUSR Pro\" entstand aus einer einfachen Idee: Eine gute Interviewvorbereitung oder ein starker Lebenslauf sollte nicht nur denen vorbehalten sein, die Zeit, Geld oder Beziehungen haben — KI kann diese Qualität jetzt jedem, jederzeit zugänglich machen.",
            "about.pillarsTitle":"Was uns antreibt",
            "about.pillar1Title":"Echte Hilfe","about.pillar1Body":"Nicht nur Werkzeuge — wir gestalten jede Funktion, um ein echtes Problem zu lösen, dem Arbeitssuchende begegnen.",
            "about.pillar2Title":"Ständige Weiterentwicklung","about.pillar2Body":"Wir hören auf eure Vorschläge und fügen ständig hinzu und verbessern — die Plattform wächst Schritt für Schritt mit euch.",
            "about.pillar3Title":"KI in deinem Dienst","about.pillar3Body":"Wir nutzen die neueste KI-Technologie, um dir eine hochwertige, personalisierte Vorbereitungserfahrung zu bieten.",
            "about.pillar4Title":"Deine Privatsphäre zuerst","about.pillar4Body":"Deine Daten gehören dir — wir nutzen oder teilen sie nur, um dir den Dienst bereitzustellen.",
            "about.whyTitle":"Warum YUSR Pro?",
            "about.why1":"Eine vollständig auf Arabisch gestaltete Erfahrung, die deinen Dialekt versteht.",
            "about.why2":"Alle Werkzeuge, die du brauchst, vom Vorstellungsgespräch über den Lebenslauf bis zum Portfolio, an einem Ort.",
            "about.why3":"Ehrliches, realistisches Feedback, das dir hilft, dich zu verbessern, nicht nur allgemeines Lob.",
            "about.why4":"Wir entwickeln die Plattform kontinuierlich basierend auf den echten Bedürfnissen unserer Nutzer weiter.",
            "about.closing":"Hast du eine Idee oder einen Vorschlag, wie YUSR besser werden könnte? Wir würden es gerne hören.","about.contactUs":"Kontaktiere uns",
            "terms.pageTitle":"Nutzungsbedingungen","terms.betaNotice":"Die Plattform befindet sich noch in der Beta-Phase. Die Seite \"Abonnements\" zeigt derzeit Testpläne und -preise ohne tatsächliche Abbuchung von einer Karte oder einem Konto — wir werden es in der App deutlich ankündigen, sobald die echte Zahlung aktiviert ist.",
            "terms.s1.title":"1. Annahme der Bedingungen","terms.s1.body":"Durch die Nutzung der Plattform \"YUSR Pro\" stimmst du diesen Bedingungen zu.",
            "terms.s2.title":"2. Art des Dienstes","terms.s2.body":"YUSR ist eine KI-gestützte Plattform zur Vorbereitung von Arbeitssuchenden: sprachbasierte Übungsinterviews, Erstellung von Lebenslauf und Portfolio, akademisches Lektorat, Dokumentenzusammenfassung und Transkription. Antworten und Vorschläge werden von KI erzeugt und dienen nur als Orientierungshilfe, nicht als Garantie für ein Ergebnis oder eine Einstellung.",
            "terms.s3.title":"3. Konto und erlaubte Nutzung","terms.s3.body":"Du kannst die Plattform als Gast (automatische anonyme Identität) oder mit einem Google-Konto nutzen, um deine Daten zu speichern. Du bist für jede Aktivität deines Kontos verantwortlich. Verboten: der Versuch, faire Nutzungsgrenzen zu umgehen, massenhafte automatisierte Anfragen (Bots) zu senden oder auf einen nicht autorisierten Teil des Systems zuzugreifen.",
            "terms.s4.title":"4. Grenzen der fairen Nutzung","terms.s4.body":"Um den Dienst für alle aufrechtzuerhalten, haben die KI-Tools (Chat, Transkription, Text-zu-Sprache) eine tägliche und monatliche Nutzungsobergrenze. Wenn du das Limit erreichst, musst du auf die Rücksetzung warten.",
            "terms.s5.title":"5. Deine Inhalte","terms.s5.body":"Jeder Inhalt, den du schreibst oder hochlädst (Lebenslaufdaten, Portfolio, Sprachaufnahmen), bleibt dein Eigentum. Wir verarbeiten ihn nur, um dir den Dienst bereitzustellen, und verwenden ihn niemals für andere Zwecke oder verkaufen ihn.",
            "terms.s6.title":"6. Haftungsausschluss","terms.s6.body":"Der Dienst wird \"wie besehen\" ohne Garantien bereitgestellt. Wir sind nicht verantwortlich für berufliche oder karrierebezogene Entscheidungen, die du auf Basis von KI-Ergebnissen triffst, und empfehlen immer, wichtige Inhalte vor der Nutzung selbst zu überprüfen.",
            "terms.s7.title":"7. Änderungen","terms.s7.body":"Wir können diese Bedingungen von Zeit zu Zeit ändern und aktualisieren das Datum \"Zuletzt aktualisiert\" oben. Die weitere Nutzung der Plattform nach einer Änderung bedeutet, dass du die neue Version akzeptierst.",
            "terms.s8.title":"8. Kontakt","terms.s8.body":"Bei Fragen zu diesen Bedingungen erreichst du uns über die Seite \"Support & Kontakt\".",
            "privacy.pageTitle":"Datenschutzerklärung",
            "privacy.s1.title":"1. Wer die Daten erhebt","privacy.s1.body":"Die Plattform \"YUSR Pro\" erhebt und verarbeitet deine Daten zu einem einzigen Zweck: der Bereitstellung des von dir genutzten Dienstes.",
            "privacy.s2.title":"2. Daten, die wir erheben",
            "privacy.s2.li1":"<b class=\"text-slate-200\">Kontodaten:</b> Wenn du dich mit Google anmeldest, erhalten wir deinen Namen, dein Foto und deine E-Mail-Adresse direkt von Google. Wenn du als Gast eintrittst, geben wir dir eine anonyme Identität, nur um dich von anderen Nutzern zu unterscheiden.",
            "privacy.s2.li2":"<b class=\"text-slate-200\">Von dir genutzte Inhalte:</b> Lebenslaufdaten, Portfolio, von dir geschriebene oder zusammengefasste Texte sowie Sprachaufnahmen, die du in die Interview- oder Transkriptionswerkzeuge hochlädst.",
            "privacy.s2.li3":"<b class=\"text-slate-200\">Technische Nutzungsdaten:</b> wie oft du jedes Tool genutzt hast (zur Anwendung der fairen Nutzungsgrenzen), lokal auf deinem Gerät gespeichert (localStorage), wie z. B. die \"verbleibenden Versuche\".",
            "privacy.s3.title":"3. Wie wir deine Daten verwenden","privacy.s3.body":"Wir verwenden deine Daten nur, um: (a) die KI-Tools zu betreiben (wir senden den von dir hochgeladenen Text oder Audio an spezialisierte Verarbeitungsunternehmen, um die Antwort zu erzeugen, ohne dass diese deine Schlüssel oder Anmeldedaten speichern), (b) dein Profil zu speichern, damit es bei deiner Rückkehr vorhanden ist, (c) den Dienst zu verbessern und Missbrauch zu verhindern.",
            "privacy.s4.title":"4. Wer deine Daten sieht (Dritte)",
            "privacy.s4.li1":"<b class=\"text-slate-200\">Google Firebase:</b> für die Anmeldung und die sichere Speicherung deines Profils.",
            "privacy.s4.li2":"<b class=\"text-slate-200\">Groq:</b> zur Verarbeitung von Text und Audio in den Chat- und Transkriptionswerkzeugen.",
            "privacy.s4.li3":"<b class=\"text-slate-200\">Microsoft Edge:</b> für die Text-zu-Sprache-Umwandlung.",
            "privacy.s4.li4":"<b class=\"text-slate-200\">Cloudflare:</b> als sicherer technischer Vermittler zwischen deiner App und den KI-Diensten, ohne deine Daten zu speichern.",
            "privacy.s4.li5":"<b class=\"text-slate-200\">s.jina.ai:</b> nur für die Live-Websuche im Gehaltsschätzungs-Tool.",
            "privacy.s4.note":"Wir verkaufen deine Daten niemals an irgendjemanden und geben sie niemals zu Werbezwecken weiter.",
            "privacy.s5.title":"5. Datensicherheit","privacy.s5.body":"Deine Daten sind durch Sicherheitsregeln geschützt, die sicherstellen, dass jeder Nutzer nur seine eigenen Daten sehen kann, und die gesamte Kommunikation zwischen deiner App und dem Server ist verschlüsselt (HTTPS).",
            "privacy.s6.title":"6. Deine Rechte","privacy.s6.body":"Du kannst jederzeit anfordern, deine gespeicherten Daten einzusehen, zu bearbeiten oder ihre vollständige Löschung zu beantragen, indem du uns über die Seite \"Support & Kontakt\" kontaktierst.",
            "privacy.s7.title":"7. Kinder","privacy.s7.body":"Der Dienst richtet sich nicht an Personen unter 13 Jahren, und wir erheben wissentlich keine Daten dieser Altersgruppe.",
            "privacy.s8.title":"8. Änderungen dieser Richtlinie","privacy.s8.body":"Wir können diese Richtlinie von Zeit zu Zeit aktualisieren und werden das Datum \"Zuletzt aktualisiert\" oben ändern, sobald wir eine wesentliche Änderung vornehmen."
        },
        hi: {
            "nav.section.interviews":"इंटरव्यू और नौकरी","nav.interview":"वॉइस मॉक इंटरव्यू","nav.faq":"सामान्य प्रश्न + नमूना उत्तर","nav.career":"करियर विकास योजना",
            "nav.section.documents":"दस्तावेज़","nav.cv":"सीवी बिल्डर","nav.portfolio":"व्यक्तिगत पोर्टफोलियो","nav.writing":"अकादमिक लेखन समीक्षा","nav.summarizer":"दस्तावेज़ सारांश",
            "nav.section.audio":"ऑडियो और वीडियो","nav.transcribe":"ऑडियो से टेक्स्ट",
            "nav.section.account":"खाता और सहायता","nav.about":"हमारे बारे में","nav.profile":"प्रोफ़ाइल","nav.subscriptions":"सदस्यताएँ","nav.donations":"दान","nav.support":"सहायता और संपर्क",
            "nav.section.legal":"कानूनी","nav.terms":"उपयोग की शर्तें","nav.privacy":"गोपनीयता नीति",
            "account.guest":"अतिथि (यह डिवाइस)","account.signinHint":"अपनी फ़ोटो और पॉइंट्स सेव करने के लिए Google से साइन इन करें",
            "trial.left":"बचे हुए प्रयास","trial.upgrade":"पूर्ण पैकेज में अपग्रेड करें",
            "copy":"कॉपी करें","download":"डाउनलोड करें",
            "interview.desc":"अंत में विस्तृत प्रदर्शन मूल्यांकन के साथ एक वास्तविक मौखिक इंटरव्यू का अभ्यास करें।","interview.linkCv":"CV लिंक करें",
            "interview.roleLabel":"लक्षित पद","interview.rolePh":"जैसे: रियल एस्टेट सेल्स, कस्टमर सर्विस, प्रोग्रामिंग...",
            "interview.personaLabel":"इंटरव्यूअर का व्यक्तित्व","interview.start":"सत्र शुरू करें","interview.speaking":"इंटरव्यूअर बोल रहा है...",
            "interview.inputPh":"माइक्रोफ़ोन में बोलें या यहाँ टाइप करें...","interview.reportHint":"मूल्यांकन आपके लिखित उत्तरों के साथ-साथ, यदि आपने माइक्रोफ़ोन का उपयोग किया, तो आपकी बोलने की गति और फ़िलर शब्दों का विश्लेषण करता है।",
            "faq.desc":"पद और क्षेत्र लिखें, हम विश्वसनीय नमूना उत्तरों के साथ आम सवालों का एक असली बैंक तैयार करेंगे।","faq.rolePh":"जैसे: रियल एस्टेट सेल्स प्रतिनिधि","faq.run":"प्रश्न और उत्तर तैयार करें",
            "career.desc":"अपनी वर्तमान स्थिति और लक्ष्य बताएं, हम एक व्यावहारिक विकास योजना बनाएंगे।","career.currentLabel":"आपकी वर्तमान स्थिति","career.currentPh":"जैसे: 1 साल के अनुभव वाला अकाउंटेंट",
            "career.targetLabel":"आपका लक्ष्य","career.targetPh":"जैसे: डेटा एनालिटिक्स में जाना चाहता हूँ","career.contextPh":"अतिरिक्त उपयोगी विवरण - वैकल्पिक","career.run":"मेरी योजना बनाएं",
            "cv.notice":"यह टूल कॉपी करने के लिए तैयार पेशेवर सीवी टेक्स्ट सामग्री बनाता है, LinkedIn जैसा डिज़ाइन किया गया PDF नहीं।","cv.photoHint":"वैकल्पिक फ़ोटो (केवल आपके ब्राउज़र में सेव होती है)।",
            "cv.namePh":"पूरा नाम","cv.titlePh":"लक्षित पद","cv.expPh":"आपका कार्य अनुभव","cv.eduPh":"शिक्षा और प्रमाणपत्र","cv.skillsPh":"कौशल (कॉमा से अलग करें)","cv.run":"मेरा सीवी लिखें",
            "pf.notice":"AI आपके क्षेत्र और प्रोजेक्ट्स के बारे में कुछ सरल सवाल पूछेगा ताकि कस्टम पोर्टफोलियो सामग्री तैयार कर सके।","pf.fieldPh":"आपका क्षेत्र (डिज़ाइनर, डेवलपर, मार्केटर...)","pf.start":"शुरू करें - AI मुझसे पूछे",
            "pf.inputPh":"अपना जवाब यहाँ लिखें...","pf.generate":"काफ़ी सवाल हो गए - अब पोर्टफोलियो बनाएं",
            "writing.notice":"भाषाई समीक्षा और अकादमिक फ़ॉर्मेटिंग सुझाव, टेक्स्ट सिफारिशों के रूप में जिन्हें आप Word में खुद लागू करते हैं।","writing.topicPh":"शोध विषय (वैकल्पिक)","writing.inputPh":"अपने शोध या लेख का टेक्स्ट यहाँ पेस्ट करें...","writing.run":"टेक्स्ट की समीक्षा करें",
            "sum.desc":"किसी भी रिपोर्ट, लेख या व्याख्यान का सेकंडों में सारांश बनाएं।","sum.inputPh":"टेक्स्ट यहाँ पेस्ट करें...","sum.run":"अभी सारांश बनाएं",
            "tr.notice":"आप AI से अपने-आप ट्रांसक्राइब होने के लिए तैयार ऑडियो फ़ाइल अपलोड कर सकते हैं, सीधे माइक से रिकॉर्ड कर सकते हैं, या तैयार टेक्स्ट पेस्ट कर सकते हैं।","tr.uploadBtn":"ऑडियो फ़ाइल अपलोड करें और ट्रांसक्राइब करें","tr.uploadHint":"अभी तक कोई फ़ाइल अपलोड नहीं हुई",
            "tr.sourceLangLabel":"मूल भाषण की भाषा","tr.targetLangLabel":"अंतिम टेक्स्ट का अनुवाद करें (वैकल्पिक)","tr.micHint":"रिकॉर्ड करने के लिए दबाएं, ऊपर फ़ाइल अपलोड करें, या नीचे तैयार टेक्स्ट पेस्ट करें।","tr.rawPh":"कच्चा टेक्स्ट यहाँ दिखाई देगा...","tr.run":"साफ़ करें और फ़ॉर्मेट करें",
            
            "profile.points":"पॉइंट्स","profile.namePh":"आपका पूरा नाम","profile.titlePh":"पद का नाम","profile.googleBtn":"Google से साइन इन करें",
            "profile.googleHint":"साइन इन करने पर आपका नाम, फ़ोटो और पॉइंट्स इस डिवाइस पर सेव हो जाते हैं — मुफ़्त प्रयास खाते के अनुसार नहीं, डिवाइस के अनुसार गिने जाते हैं।","profile.save":"जानकारी सेव करें",
            "profile.connected":"Google से जुड़ा हुआ","profile.logoutBtn":"लॉग आउट करें",
            "profile.statUsage":"टूल इस्तेमाल की संख्या","profile.statDevice":"डिवाइस आईडी","profile.statPlan":"आपका वर्तमान पैकेज","profile.planFree":"मुफ़्त",
            "subs.individualTitle":"व्यक्तिगत पैकेज","subs.individualDesc":"इंटरव्यू की तैयारी करने वाले या अपना करियर बनाने वाले हर किसी के लिए।","subs.basicName":"बेसिक","subs.perMonth":"/ माह","subs.proName":"प्रोफेशनल","subs.popular":"सबसे लोकप्रिय",
            "subs.yearlyName":"वार्षिक","subs.perYear":"/ वर्ष","subs.subscribe":"अभी सब्सक्राइब करें","subs.teamTitle":"टीम और यूनिवर्सिटी पैकेज","subs.teamDesc":"कॉलेजों, यूनिवर्सिटीज़ और हायरिंग सेंटरों के लिए जो एक ग्रुप को बेहतर कीमत पर एक साथ प्रशिक्षित करना चाहते हैं।",
            "subs.teamSmallName":"छोटी टीम","subs.teamSmallRange":"10 लोगों तक","subs.perSeat":"/ प्रति व्यक्ति / माह","subs.recommended":"यूनिवर्सिटीज़ के लिए अनुशंसित","subs.teamMedName":"बैच / कॉलेज","subs.teamMedRange":"11 से 100 लोग",
            "subs.uniName":"यूनिवर्सिटी / बड़ा संगठन","subs.uniRange":"100 से अधिक लोग","subs.customPrice":"कस्टम मूल्य","subs.contactUs":"हमसे संपर्क करें",
            "don.title":"प्लेटफ़ॉर्म को जारी रखने में मदद करें","don.desc":"अगर आप YUSR Pro के विकास में मदद करना चाहते हैं, तो आप नीचे दिए नंबरों के ज़रिए कोई भी राशि दान कर सकते हैं।","don.wallet":"मोबाइल वॉलेट","don.thanks":"हमारा साथ देने वाले हर व्यक्ति का बहुत-बहुत धन्यवाद।",
            "sup.title":"सहायता और संपर्क","sup.desc":"कोई सवाल, समस्या या सुझाव है? हमसे सीधे संपर्क करें।","sup.phone":"सीधी कॉल","sup.hours":"हम आमतौर पर कुछ घंटों में जवाब देते हैं। तत्काल मामलों के लिए, WhatsApp सबसे तेज़ है।",
            "legal.lastUpdated":"आखिरी अपडेट: अगस्त 2026",
            "about.pageTitle":"हमारे बारे में","about.tagline":"एक अरबी प्लेटफ़ॉर्म जिसे हम जुनून के साथ बना रहे हैं ताकि यह आपकी करियर यात्रा में आपका साथी बने।",
            "about.missionLabel":"हमारा मिशन","about.missionBody":"हम मानते हैं कि हर कोई, चाहे उसकी पृष्ठभूमि या परिस्थितियां कैसी भी हों, आत्मविश्वास और अच्छी तैयारी के साथ सही अवसर पाने का हकदार है। \"YUSR Pro\" एक सरल विचार से जन्मा: अच्छी इंटरव्यू तैयारी या मज़बूत सीवी सिर्फ़ उन्हीं के लिए नहीं होनी चाहिए जिनके पास समय, पैसा या जान-पहचान है — अब AI यह गुणवत्ता किसी को भी, कभी भी उपलब्ध करा सकता है।",
            "about.pillarsTitle":"हमें क्या प्रेरित करता है",
            "about.pillar1Title":"असली मदद","about.pillar1Body":"सिर्फ़ टूल्स नहीं — हम हर फ़ीचर को नौकरी तलाशने वालों की असली समस्या हल करने के लिए डिज़ाइन करते हैं।",
            "about.pillar2Title":"निरंतर विकास","about.pillar2Body":"हम आपके सुझाव सुनते हैं और लगातार जोड़ते और सुधारते रहते हैं — प्लेटफ़ॉर्म आपके साथ कदम-दर-कदम बढ़ता है।",
            "about.pillar3Title":"आपकी सेवा में AI","about.pillar3Body":"हम आपको उच्च-गुणवत्ता वाला, व्यक्तिगत तैयारी अनुभव देने के लिए नवीनतम AI तकनीक का उपयोग करते हैं।",
            "about.pillar4Title":"आपकी गोपनीयता सबसे पहले","about.pillar4Body":"आपका डेटा आपका है — हम इसे केवल आपको सेवा देने के लिए उपयोग या साझा करते हैं।",
            "about.whyTitle":"YUSR Pro क्यों?",
            "about.why1":"पूरी तरह अरबी में डिज़ाइन किया गया अनुभव जो आपकी बोली को समझता है।",
            "about.why2":"इंटरव्यू से लेकर सीवी और पोर्टफोलियो तक, आपको ज़रूरत के हर टूल एक ही जगह।",
            "about.why3":"सामान्य तारीफ़ नहीं, बल्कि ईमानदार, यथार्थवादी फीडबैक जो आपको बेहतर बनने में मदद करता है।",
            "about.why4":"हम अपने उपयोगकर्ताओं की असली ज़रूरतों के आधार पर प्लेटफ़ॉर्म को लगातार विकसित करते रहते हैं।",
            "about.closing":"YUSR को बेहतर बनाने का कोई विचार या सुझाव है? हम इसे सुनना पसंद करेंगे।","about.contactUs":"हमसे संपर्क करें",
            "terms.pageTitle":"उपयोग की शर्तें","terms.betaNotice":"प्लेटफ़ॉर्म अभी बीटा चरण में है। \"सदस्यताएँ\" पेज फ़िलहाल ट्रायल पैकेज और कीमतें दिखाता है, बिना किसी कार्ड या खाते से वास्तविक कटौती के — जैसे ही असली भुगतान चालू होगा, हम ऐप में इसकी स्पष्ट घोषणा करेंगे।",
            "terms.s1.title":"1. शर्तों की स्वीकृति","terms.s1.body":"\"YUSR Pro\" प्लेटफ़ॉर्म का उपयोग करके, आप इन शर्तों से सहमत होते हैं।",
            "terms.s2.title":"2. सेवा की प्रकृति","terms.s2.body":"YUSR नौकरी तलाशने वालों को तैयार करने के लिए एक AI-संचालित प्लेटफ़ॉर्म है: वॉइस मॉक इंटरव्यू, सीवी और पोर्टफोलियो बनाना, अकादमिक लेखन समीक्षा, दस्तावेज़ सारांश, और ट्रांसक्रिप्शन। जवाब और सुझाव AI द्वारा जनरेट किए जाते हैं और केवल मार्गदर्शन के रूप में हैं, किसी परिणाम या नौकरी मिलने की गारंटी नहीं।",
            "terms.s3.title":"3. खाता और अनुमत उपयोग","terms.s3.body":"आप प्लेटफ़ॉर्म को अतिथि के रूप में (स्वचालित अनाम पहचान के साथ) उपयोग कर सकते हैं, या अपना डेटा सेव करने के लिए Google खाते से साइन इन कर सकते हैं। आप अपने खाते से होने वाली किसी भी गतिविधि के लिए ज़िम्मेदार हैं। निषिद्ध: उचित उपयोग सीमाओं को दरकिनार करने की कोशिश, बड़े पैमाने पर स्वचालित अनुरोध (बॉट्स) भेजना, या सिस्टम के किसी अनधिकृत हिस्से तक पहुंचने की कोशिश।",
            "terms.s4.title":"4. उचित उपयोग सीमाएँ","terms.s4.body":"सभी के लिए सेवा जारी रखने हेतु, AI टूल्स (चैट, ट्रांसक्रिप्शन, टेक्स्ट-टू-स्पीच) की एक दैनिक और मासिक उपयोग सीमा है। अगर आप सीमा तक पहुंच जाते हैं, तो आपको इसके फिर से शुरू होने का इंतज़ार करना होगा।",
            "terms.s5.title":"5. आपकी सामग्री","terms.s5.body":"आपके द्वारा लिखी या अपलोड की गई कोई भी सामग्री (सीवी डेटा, पोर्टफोलियो, वॉइस रिकॉर्डिंग) आपकी ही रहती है। हम इसे केवल आपको सेवा देने के लिए प्रोसेस करते हैं, कभी किसी और उद्देश्य के लिए उपयोग या बेचते नहीं हैं।",
            "terms.s6.title":"6. अस्वीकरण","terms.s6.body":"सेवा बिना किसी गारंटी के \"जैसी है वैसी\" प्रदान की जाती है। AI आउटपुट के आधार पर आप जो भी करियर या पेशेवर निर्णय लेते हैं, उसके लिए हम ज़िम्मेदार नहीं हैं, और हम हमेशा सलाह देते हैं कि किसी भी महत्वपूर्ण सामग्री का उपयोग करने से पहले उसे स्वयं जांच लें।",
            "terms.s7.title":"7. बदलाव","terms.s7.body":"हम समय-समय पर इन शर्तों को अपडेट कर सकते हैं, और ऊपर दी गई \"आखिरी अपडेट\" तारीख़ को बदल सकते हैं। बदलाव के बाद प्लेटफ़ॉर्म का उपयोग जारी रखने का मतलब है कि आप नए संस्करण को स्वीकार करते हैं।",
            "terms.s8.title":"8. संपर्क","terms.s8.body":"इन शर्तों के बारे में किसी भी सवाल के लिए, \"सहायता और संपर्क\" पेज के ज़रिए हमसे संपर्क करें।",
            "privacy.pageTitle":"गोपनीयता नीति",
            "privacy.s1.title":"1. डेटा कौन इकट्ठा करता है","privacy.s1.body":"\"YUSR Pro\" प्लेटफ़ॉर्म ही आपका डेटा इकट्ठा और प्रोसेस करता है, केवल एक उद्देश्य के लिए: आपके द्वारा उपयोग की जा रही सेवा प्रदान करना।",
            "privacy.s2.title":"2. हम कौन-सा डेटा इकट्ठा करते हैं",
            "privacy.s2.li1":"<b class=\"text-slate-200\">खाता डेटा:</b> अगर आप Google से साइन इन करते हैं, तो हम आपका नाम, फ़ोटो और ईमेल सीधे Google से लेते हैं। अगर आप अतिथि के रूप में प्रवेश करते हैं, तो हम आपको अन्य उपयोगकर्ताओं से अलग पहचानने के लिए केवल एक अनाम पहचान देते हैं।",
            "privacy.s2.li2":"<b class=\"text-slate-200\">आपके द्वारा उपयोग की गई सामग्री:</b> सीवी डेटा, पोर्टफोलियो, आपके लिखे या सारांशित किए गए टेक्स्ट, और इंटरव्यू या ट्रांसक्रिप्शन टूल्स में अपलोड की गई वॉइस रिकॉर्डिंग।",
            "privacy.s2.li3":"<b class=\"text-slate-200\">तकनीकी उपयोग डेटा:</b> आपने हर टूल का कितनी बार उपयोग किया (उचित उपयोग सीमाओं को लागू करने के लिए), जो आपके डिवाइस पर स्थानीय रूप से (localStorage) सेव होता है, जैसे \"बचे हुए प्रयास\"।",
            "privacy.s3.title":"3. हम आपके डेटा का उपयोग कैसे करते हैं","privacy.s3.body":"हम आपके डेटा का उपयोग केवल इसलिए करते हैं: (a) AI टूल्स चलाने के लिए (हम आपके द्वारा अपलोड किए गए टेक्स्ट या ऑडियो को जवाब जनरेट करने के लिए विशेष प्रोसेसिंग कंपनियों को भेजते हैं, बिना आपकी कुंजी या लॉगिन डेटा उनके पास स्टोर किए), (b) आपकी प्रोफ़ाइल सेव करने के लिए ताकि आपके लौटने पर वह मौजूद रहे, (c) सेवा को बेहतर बनाने और दुरुपयोग रोकने के लिए।",
            "privacy.s4.title":"4. आपका डेटा कौन देखता है (तीसरे पक्ष)",
            "privacy.s4.li1":"<b class=\"text-slate-200\">Google Firebase:</b> साइन-इन और आपकी प्रोफ़ाइल को सुरक्षित रूप से स्टोर करने के लिए।",
            "privacy.s4.li2":"<b class=\"text-slate-200\">Groq:</b> चैट और ट्रांसक्रिप्शन टूल्स में टेक्स्ट और ऑडियो प्रोसेस करने के लिए।",
            "privacy.s4.li3":"<b class=\"text-slate-200\">Microsoft Edge:</b> टेक्स्ट-टू-स्पीच रूपांतरण के लिए।",
            "privacy.s4.li4":"<b class=\"text-slate-200\">Cloudflare:</b> आपके ऐप और AI सेवाओं के बीच एक सुरक्षित तकनीकी माध्यम के रूप में, बिना आपका डेटा रखे।",
            "privacy.s4.li5":"<b class=\"text-slate-200\">s.jina.ai:</b> केवल वेतन अनुमान टूल में लाइव वेब खोज के लिए।",
            "privacy.s4.note":"हम आपका डेटा कभी किसी को नहीं बेचते, और इसे कभी विज्ञापन उद्देश्यों के लिए साझा नहीं करते।",
            "privacy.s5.title":"5. डेटा सुरक्षा","privacy.s5.body":"आपका डेटा सुरक्षा नियमों द्वारा सुरक्षित है जो सुनिश्चित करते हैं कि हर उपयोगकर्ता केवल अपना डेटा देख सके, और आपके ऐप और सर्वर के बीच सारा संचार एन्क्रिप्टेड (HTTPS) होता है।",
            "privacy.s6.title":"6. आपके अधिकार","privacy.s6.body":"आप किसी भी समय अपना सेव किया गया डेटा देखने, संपादित करने, या इसे पूरी तरह डिलीट करने का अनुरोध कर सकते हैं, \"सहायता और संपर्क\" पेज के ज़रिए हमसे संपर्क करके।",
            "privacy.s7.title":"7. बच्चे","privacy.s7.body":"यह सेवा 13 वर्ष से कम उम्र के किसी के लिए नहीं है, और हम जानबूझकर इस आयु वर्ग से डेटा इकट्ठा नहीं करते।",
            "privacy.s8.title":"8. इस नीति में बदलाव","privacy.s8.body":"हम समय-समय पर इस नीति को अपडेट कर सकते हैं, और जब भी कोई महत्वपूर्ण बदलाव करेंगे तो ऊपर दी गई \"आखिरी अपडेट\" तारीख़ बदल देंगे।"
        },
        ur: {
            "nav.section.interviews":"انٹرویوز اور ملازمت","nav.interview":"صوتی مشقی انٹرویو","nav.faq":"عمومی سوالات + نمونہ جوابات","nav.career":"کیریئر ترقی کا منصوبہ",
            "nav.section.documents":"دستاویزات","nav.cv":"سی وی بنانے کا آلہ","nav.portfolio":"ذاتی پورٹ فولیو","nav.writing":"تعلیمی تحریر کا جائزہ","nav.summarizer":"دستاویز کا خلاصہ",
            "nav.section.audio":"آڈیو اور ویڈیو","nav.transcribe":"آواز کو تحریر میں بدلنا",
            "nav.section.account":"اکاؤنٹ اور معاونت","nav.about":"ہمارے بارے میں","nav.profile":"پروفائل","nav.subscriptions":"سبسکرپشنز","nav.donations":"عطیات","nav.support":"معاونت اور رابطہ",
            "nav.section.legal":"قانونی","nav.terms":"استعمال کی شرائط","nav.privacy":"رازداری کی پالیسی",
            "account.guest":"مہمان (یہ ڈیوائس)","account.signinHint":"اپنی تصویر اور پوائنٹس محفوظ کرنے کے لیے گوگل سے سائن ان کریں",
            "trial.left":"باقی ماندہ کوششیں","trial.upgrade":"مکمل پیکیج میں اپ گریڈ کریں",
            "copy":"کاپی کریں","download":"ڈاؤن لوڈ کریں",
            "interview.desc":"آخر میں تفصیلی کارکردگی کے جائزے کے ساتھ ایک حقیقی زبانی انٹرویو کی مشق کریں۔","interview.linkCv":"سی وی منسلک کریں",
            "interview.roleLabel":"مطلوبہ عہدہ","interview.rolePh":"مثلاً: رئیل اسٹیٹ سیلز، کسٹمر سروس، پروگرامنگ...",
            "interview.personaLabel":"انٹرویو لینے والے کی شخصیت","interview.start":"سیشن شروع کریں","interview.speaking":"انٹرویو لینے والا بول رہا ہے...",
            "interview.inputPh":"مائیکروفون میں بولیں یا یہاں لکھیں...","interview.reportHint":"جائزہ آپ کے تحریری جوابات کے ساتھ ساتھ، اگر آپ نے مائیک استعمال کیا ہو تو بولنے کی رفتار اور بھرتی الفاظ کا تجزیہ کرتا ہے۔",
            "faq.desc":"عہدہ اور شعبہ لکھیں، ہم قائل کن نمونہ جوابات کے ساتھ عام سوالات کا ایک حقیقی ذخیرہ تیار کریں گے۔","faq.rolePh":"مثلاً: رئیل اسٹیٹ سیلز نمائندہ","faq.run":"سوالات اور جوابات تیار کریں",
            "career.desc":"ہمیں اپنی موجودہ صورتحال اور مقصد بتائیں، ہم ایک عملی ترقیاتی منصوبہ بنائیں گے۔","career.currentLabel":"آپ کی موجودہ صورتحال","career.currentPh":"مثلاً: 1 سال کے تجربے والا اکاؤنٹنٹ",
            "career.targetLabel":"آپ کا مقصد","career.targetPh":"مثلاً: ڈیٹا اینالیٹکس میں جانا چاہتا ہوں","career.contextPh":"اضافی مفید تفصیلات - اختیاری","career.run":"میرا منصوبہ بنائیں",
            "cv.notice":"یہ آلہ کاپی کرنے کے لیے تیار پیشہ ورانہ سی وی متن مواد بناتا ہے، LinkedIn جیسی ڈیزائن شدہ PDF نہیں۔","cv.photoHint":"اختیاری تصویر (صرف آپ کے براؤزر میں محفوظ ہوتی ہے)۔",
            "cv.namePh":"مکمل نام","cv.titlePh":"مطلوبہ عہدہ","cv.expPh":"آپ کا کام کا تجربہ","cv.eduPh":"تعلیم اور سرٹیفکیٹس","cv.skillsPh":"مہارتیں (کوما سے الگ کریں)","cv.run":"میری سی وی لکھیں",
            "pf.notice":"AI آپ کے شعبے اور پروجیکٹس کے بارے میں چند آسان سوالات پوچھے گا تاکہ حسبِ ضرورت پورٹ فولیو مواد تیار کر سکے۔","pf.fieldPh":"آپ کا شعبہ (ڈیزائنر، ڈویلپر، مارکیٹر...)","pf.start":"شروع کریں - AI مجھ سے پوچھے",
            "pf.inputPh":"اپنا جواب یہاں لکھیں...","pf.generate":"کافی سوالات ہو گئے - اب پورٹ فولیو بنائیں",
            "writing.notice":"لسانی جائزہ اور تعلیمی فارمیٹنگ کی تجاویز، متن کی سفارشات کی شکل میں جنہیں آپ خود Word میں لاگو کرتے ہیں۔","writing.topicPh":"تحقیقی موضوع (اختیاری)","writing.inputPh":"اپنی تحقیق یا مضمون کا متن یہاں چسپاں کریں...","writing.run":"متن کا جائزہ لیں",
            "sum.desc":"کسی بھی رپورٹ، مضمون یا لیکچر کا سیکنڈوں میں خلاصہ بنائیں۔","sum.inputPh":"متن یہاں چسپاں کریں...","sum.run":"ابھی خلاصہ بنائیں",
            "tr.notice":"آپ AI سے خودکار طور پر تحریر میں بدلنے کے لیے تیار آڈیو فائل اپ لوڈ کر سکتے ہیں، براہ راست مائیک سے ریکارڈ کر سکتے ہیں، یا تیار متن چسپاں کر سکتے ہیں۔","tr.uploadBtn":"آڈیو فائل اپ لوڈ کریں اور خودکار تحریر بنائیں","tr.uploadHint":"ابھی تک کوئی فائل اپ لوڈ نہیں ہوئی",
            "tr.sourceLangLabel":"اصل بولی جانے والی زبان","tr.targetLangLabel":"حتمی متن کا ترجمہ کریں (اختیاری)","tr.micHint":"ریکارڈ کرنے کے لیے دبائیں، اوپر فائل اپ لوڈ کریں، یا نیچے تیار متن چسپاں کریں۔","tr.rawPh":"خام متن یہاں ظاہر ہوگا...","tr.run":"صاف کریں اور فارمیٹ کریں",
            
            "profile.points":"پوائنٹس","profile.namePh":"آپ کا مکمل نام","profile.titlePh":"عہدے کا نام","profile.googleBtn":"گوگل سے سائن ان کریں",
            "profile.googleHint":"سائن ان کرنے سے آپ کا نام، تصویر اور پوائنٹس اس ڈیوائس پر محفوظ ہو جاتے ہیں — مفت کوششیں اکاؤنٹ کے بجائے ڈیوائس کے حساب سے شمار ہوتی ہیں۔","profile.save":"معلومات محفوظ کریں",
            "profile.connected":"گوگل سے منسلک","profile.logoutBtn":"لاگ آؤٹ کریں",
            "profile.statUsage":"آلات کے استعمال کی تعداد","profile.statDevice":"ڈیوائس آئی ڈی","profile.statPlan":"آپ کا موجودہ پیکیج","profile.planFree":"مفت",
            "subs.individualTitle":"انفرادی پیکیجز","subs.individualDesc":"ہر اس شخص کے لیے جو انٹرویو کی تیاری کر رہا ہے یا اپنا کیریئر خود بنا رہا ہے۔","subs.basicName":"بنیادی","subs.perMonth":"/ ماہانہ","subs.proName":"پیشہ ورانہ","subs.popular":"سب سے زیادہ مقبول",
            "subs.yearlyName":"سالانہ","subs.perYear":"/ سالانہ","subs.subscribe":"ابھی سبسکرائب کریں","subs.teamTitle":"ٹیم اور یونیورسٹی پیکیجز","subs.teamDesc":"کالجوں، یونیورسٹیوں اور بھرتی مراکز کے لیے جو ایک گروپ کو بہتر قیمت پر ایک ساتھ تربیت دینا چاہتے ہیں۔",
            "subs.teamSmallName":"چھوٹی ٹیم","subs.teamSmallRange":"10 افراد تک","subs.perSeat":"/ فی فرد / ماہانہ","subs.recommended":"یونیورسٹیوں کے لیے تجویز کردہ","subs.teamMedName":"بیچ / کالج","subs.teamMedRange":"11 سے 100 افراد",
            "subs.uniName":"یونیورسٹی / بڑا ادارہ","subs.uniRange":"100 سے زیادہ افراد","subs.customPrice":"حسبِ ضرورت قیمت","subs.contactUs":"ہم سے رابطہ کریں",
            "don.title":"پلیٹ فارم کی مسلسل کارکردگی کی حمایت کریں","don.desc":"اگر آپ YUSR Pro کی ترقی کی حمایت کرنا چاہتے ہیں تو نیچے دیے گئے نمبروں کے ذریعے کوئی بھی رقم عطیہ کر سکتے ہیں۔","don.wallet":"الیکٹرانک والیٹ","don.thanks":"حمایت کرنے والے ہر فرد کا بہت شکریہ۔",
            "sup.title":"معاونت اور رابطہ","sup.desc":"کوئی سوال، مسئلہ یا تجویز ہے؟ براہ راست ہم سے رابطہ کریں۔","sup.phone":"براہ راست کال","sup.hours":"ہم عام طور پر چند گھنٹوں میں جواب دیتے ہیں۔ فوری معاملات کے لیے، واٹس ایپ سب سے تیز ہے۔",
            "legal.lastUpdated":"آخری اپ ڈیٹ: اگست 2026",
            "about.pageTitle":"ہمارے بارے میں","about.tagline":"ایک عربی پلیٹ فارم جسے ہم جذبے کے ساتھ بنا رہے ہیں تاکہ یہ آپ کے کیریئر کے سفر میں آپ کا ساتھی بنے۔",
            "about.missionLabel":"ہمارا مشن","about.missionBody":"ہم مانتے ہیں کہ ہر شخص، چاہے اس کا پس منظر یا حالات کچھ بھی ہوں، پراعتماد اور اچھی طرح تیار ہو کر صحیح موقع تک پہنچنے کا حق دار ہے۔ \"YUSR Pro\" ایک سادہ خیال سے جنم لیا: اچھی انٹرویو کی تیاری یا مضبوط سی وی صرف اُن لوگوں کے لیے مخصوص نہیں ہونی چاہیے جن کے پاس وقت، پیسہ یا تعلقات ہیں — AI اب یہی معیار کسی کو بھی، کسی بھی وقت فراہم کر سکتا ہے۔",
            "about.pillarsTitle":"ہمیں کیا آگے بڑھاتا ہے",
            "about.pillar1Title":"حقیقی مدد","about.pillar1Body":"صرف اوزار نہیں — ہم ہر خصوصیت کو نوکری تلاش کرنے والوں کے کسی حقیقی مسئلے کو حل کرنے کے لیے ڈیزائن کرتے ہیں۔",
            "about.pillar2Title":"مسلسل ترقی","about.pillar2Body":"ہم آپ کی تجاویز سنتے ہیں اور مسلسل اضافہ اور بہتری لاتے ہیں — پلیٹ فارم آپ کے ساتھ قدم بہ قدم بڑھتا ہے۔",
            "about.pillar3Title":"آپ کی خدمت میں AI","about.pillar3Body":"ہم آپ کو اعلیٰ معیار کا، ذاتی نوعیت کا تیاری کا تجربہ دینے کے لیے جدید ترین AI ٹیکنالوجی استعمال کرتے ہیں۔",
            "about.pillar4Title":"آپ کی رازداری پہلے","about.pillar4Body":"آپ کا ڈیٹا آپ کا ہے — ہم اسے صرف آپ کو سروس فراہم کرنے کے لیے استعمال یا شیئر کرتے ہیں۔",
            "about.whyTitle":"YUSR Pro کیوں؟",
            "about.why1":"مکمل طور پر عربی میں ڈیزائن کیا گیا تجربہ جو آپ کا لہجہ سمجھتا ہے۔",
            "about.why2":"انٹرویو سے لے کر سی وی اور پورٹ فولیو تک، آپ کو درکار ہر اوزار ایک ہی جگہ۔",
            "about.why3":"عمومی تعریف نہیں بلکہ ایماندار، حقیقت پسندانہ رائے جو آپ کو بہتر بننے میں مدد دیتی ہے۔",
            "about.why4":"ہم اپنے صارفین کی حقیقی ضروریات کی بنیاد پر پلیٹ فارم کو مسلسل ترقی دیتے رہتے ہیں۔",
            "about.closing":"کوئی خیال یا تجویز ہے جو YUSR کو بہتر بنا سکے؟ ہمیں سن کر خوشی ہوگی۔","about.contactUs":"ہم سے رابطہ کریں",
            "terms.pageTitle":"استعمال کی شرائط","terms.betaNotice":"پلیٹ فارم ابھی بیٹا مرحلے میں ہے۔ \"سبسکرپشنز\" کا صفحہ فی الحال آزمائشی پیکیجز اور قیمتیں دکھا رہا ہے، بغیر کسی کارڈ یا اکاؤنٹ سے حقیقی کٹوتی کے — جیسے ہی حقیقی ادائیگی فعال ہوگی، ہم ایپ میں واضح طور پر اعلان کریں گے۔",
            "terms.s1.title":"1. شرائط کی منظوری","terms.s1.body":"\"YUSR Pro\" پلیٹ فارم استعمال کر کے، آپ ان شرائط سے اتفاق کرتے ہیں۔",
            "terms.s2.title":"2. سروس کی نوعیت","terms.s2.body":"YUSR نوکری تلاش کرنے والوں کو تیار کرنے کے لیے ایک AI سے چلنے والا پلیٹ فارم ہے: صوتی مشقی انٹرویوز، سی وی اور پورٹ فولیو بنانا، تعلیمی تحریر کا جائزہ، دستاویز کا خلاصہ، اور تحریر میں تبدیلی۔ جوابات اور تجاویز AI کے ذریعے تیار کیے جاتے ہیں اور صرف رہنمائی کے لیے ہیں، کسی نتیجے یا نوکری کی ضمانت نہیں۔",
            "terms.s3.title":"3. اکاؤنٹ اور اجازت یافتہ استعمال","terms.s3.body":"آپ پلیٹ فارم کو مہمان کے طور پر (خودکار گمنام شناخت کے ساتھ) استعمال کر سکتے ہیں، یا اپنا ڈیٹا محفوظ کرنے کے لیے گوگل اکاؤنٹ سے سائن ان کر سکتے ہیں۔ آپ اپنے اکاؤنٹ سے ہونے والی کسی بھی سرگرمی کے ذمہ دار ہیں۔ ممنوع ہے: منصفانہ استعمال کی حدود سے بچنے کی کوشش، بڑے پیمانے پر خودکار درخواستیں (بوٹس) بھیجنا، یا نظام کے کسی غیر مجاز حصے تک رسائی کی کوشش۔",
            "terms.s4.title":"4. منصفانہ استعمال کی حدود","terms.s4.body":"سب کے لیے سروس جاری رکھنے کے لیے، AI ٹولز (چیٹ، تحریر میں تبدیلی، تحریر سے آواز) کی روزانہ اور ماہانہ استعمال کی ایک حد ہے۔ اگر آپ حد تک پہنچ جائیں، تو آپ کو اس کے دوبارہ فعال ہونے کا انتظار کرنا ہوگا۔",
            "terms.s5.title":"5. آپ کا مواد","terms.s5.body":"آپ کا لکھا یا اپ لوڈ کیا گیا کوئی بھی مواد (سی وی ڈیٹا، پورٹ فولیو، صوتی ریکارڈنگز) آپ ہی کی ملکیت رہتا ہے۔ ہم اسے صرف آپ کو سروس فراہم کرنے کے لیے پروسیس کرتے ہیں، اور کبھی کسی اور مقصد کے لیے استعمال یا فروخت نہیں کرتے۔",
            "terms.s6.title":"6. ذمہ داری سے دستبرداری","terms.s6.body":"سروس بغیر کسی ضمانت کے \"جیسی ہے ویسی\" فراہم کی جاتی ہے۔ ہم AI کے نتائج کی بنیاد پر آپ کے کیے گئے کسی بھی کیریئر یا پیشہ ورانہ فیصلے کے ذمہ دار نہیں ہیں، اور ہمیشہ مشورہ دیتے ہیں کہ استعمال سے پہلے کسی بھی اہم مواد کا خود جائزہ لیں۔",
            "terms.s7.title":"7. تبدیلیاں","terms.s7.body":"ہم وقتاً فوقتاً ان شرائط کو تبدیل کر سکتے ہیں، اور اوپر \"آخری اپ ڈیٹ\" کی تاریخ کو اپ ڈیٹ کریں گے۔ تبدیلی کے بعد پلیٹ فارم کا استعمال جاری رکھنے کا مطلب ہے کہ آپ نئے ورژن سے اتفاق کرتے ہیں۔",
            "terms.s8.title":"8. رابطہ","terms.s8.body":"ان شرائط کے بارے میں کسی بھی سوال کے لیے، \"معاونت اور رابطہ\" کے صفحے کے ذریعے ہم سے رابطہ کریں۔",
            "privacy.pageTitle":"رازداری کی پالیسی",
            "privacy.s1.title":"1. ڈیٹا کون جمع کرتا ہے","privacy.s1.body":"\"YUSR Pro\" پلیٹ فارم ہی آپ کا ڈیٹا جمع اور پراسیس کرتا ہے، صرف ایک مقصد کے لیے: آپ کے استعمال کردہ سروس کی فراہمی۔",
            "privacy.s2.title":"2. ہم جو ڈیٹا جمع کرتے ہیں",
            "privacy.s2.li1":"<b class=\"text-slate-200\">اکاؤنٹ کا ڈیٹا:</b> اگر آپ گوگل سے سائن ان کرتے ہیں، تو ہم آپ کا نام، تصویر اور ای میل براہ راست گوگل سے حاصل کرتے ہیں۔ اگر آپ مہمان کے طور پر داخل ہوتے ہیں، تو ہم آپ کو دوسرے صارفین سے ممتاز کرنے کے لیے صرف ایک گمنام شناخت دیتے ہیں۔",
            "privacy.s2.li2":"<b class=\"text-slate-200\">آپ کا استعمال کردہ مواد:</b> سی وی ڈیٹا، پورٹ فولیو، آپ کے لکھے یا خلاصہ کیے گئے متن، اور انٹرویو یا تحریر میں تبدیلی کے آلات میں اپ لوڈ کی گئی صوتی ریکارڈنگز۔",
            "privacy.s2.li3":"<b class=\"text-slate-200\">تکنیکی استعمال کا ڈیٹا:</b> آپ نے ہر آلہ کتنی بار استعمال کیا (منصفانہ استعمال کی حدود لاگو کرنے کے لیے)، جو آپ کی ڈیوائس پر مقامی طور پر (localStorage) محفوظ ہوتا ہے، جیسے \"باقی ماندہ کوششیں\"۔",
            "privacy.s3.title":"3. ہم آپ کا ڈیٹا کیسے استعمال کرتے ہیں","privacy.s3.body":"ہم آپ کا ڈیٹا صرف اس لیے استعمال کرتے ہیں: (الف) AI آلات چلانے کے لیے (ہم آپ کے اپ لوڈ کردہ متن یا آڈیو کو جواب تیار کرنے کے لیے خصوصی پروسیسنگ کمپنیوں کو بھیجتے ہیں، بغیر آپ کی چابیاں یا لاگ اِن ڈیٹا ان کے پاس محفوظ کیے)، (ب) آپ کا پروفائل محفوظ کرنے کے لیے تاکہ آپ کی واپسی پر موجود ہو، (ج) سروس کو بہتر بنانے اور غلط استعمال کو روکنے کے لیے۔",
            "privacy.s4.title":"4. آپ کا ڈیٹا کون دیکھتا ہے (تیسرے فریق)",
            "privacy.s4.li1":"<b class=\"text-slate-200\">Google Firebase:</b> سائن ان اور آپ کے پروفائل کو محفوظ طریقے سے ذخیرہ کرنے کے لیے۔",
            "privacy.s4.li2":"<b class=\"text-slate-200\">Groq:</b> چیٹ اور تحریر میں تبدیلی کے آلات میں متن اور آڈیو پروسیس کرنے کے لیے۔",
            "privacy.s4.li3":"<b class=\"text-slate-200\">Microsoft Edge:</b> تحریر کو آواز میں تبدیل کرنے کے لیے۔",
            "privacy.s4.li4":"<b class=\"text-slate-200\">Cloudflare:</b> آپ کی ایپ اور AI سروسز کے درمیان ایک محفوظ تکنیکی واسطے کے طور پر، بغیر آپ کا ڈیٹا محفوظ کیے۔",
            "privacy.s4.li5":"<b class=\"text-slate-200\">s.jina.ai:</b> صرف تنخواہ کے تخمینے کے ٹول میں لائیو ویب سرچ کے لیے۔",
            "privacy.s4.note":"ہم آپ کا ڈیٹا کبھی کسی کو فروخت نہیں کرتے، اور نہ ہی اسے کبھی اشتہاری مقاصد کے لیے شیئر کرتے ہیں۔",
            "privacy.s5.title":"5. ڈیٹا کی سیکیورٹی","privacy.s5.body":"آپ کا ڈیٹا سیکیورٹی قوانین کے ذریعے محفوظ ہے جو یقینی بناتے ہیں کہ ہر صارف صرف اپنا ڈیٹا دیکھ سکے، اور آپ کی ایپ اور سرور کے درمیان تمام رابطہ خفیہ کاری شدہ (HTTPS) ہے۔",
            "privacy.s6.title":"6. آپ کے حقوق","privacy.s6.body":"آپ کسی بھی وقت اپنا محفوظ شدہ ڈیٹا دیکھنے، اسے تبدیل کرنے، یا اسے مکمل طور پر حذف کرنے کی درخواست کر سکتے ہیں، \"معاونت اور رابطہ\" کے صفحے کے ذریعے ہم سے رابطہ کر کے۔",
            "privacy.s7.title":"7. بچے","privacy.s7.body":"یہ سروس 13 سال سے کم عمر کسی کے لیے نہیں ہے، اور ہم دانستہ طور پر اس عمر گروپ سے ڈیٹا جمع نہیں کرتے۔",
            "privacy.s8.title":"8. اس پالیسی میں تبدیلیاں","privacy.s8.body":"ہم وقتاً فوقتاً اس پالیسی کو اپ ڈیٹ کر سکتے ہیں، اور جب بھی کوئی اہم تبدیلی کریں گے تو اوپر \"آخری اپ ڈیٹ\" کی تاریخ بدل دیں گے۔"
        },
        fa: {
            "nav.section.interviews":"مصاحبه‌ها و استخدام","nav.interview":"مصاحبه آزمایشی صوتی","nav.faq":"سوالات متداول + پاسخ‌های نمونه","nav.career":"برنامه رشد شغلی",
            "nav.section.documents":"مدارک","nav.cv":"سازنده رزومه","nav.portfolio":"نمونه‌کار شخصی","nav.writing":"بازبینی نگارش آکادمیک","nav.summarizer":"خلاصه‌سازی مدارک",
            "nav.section.audio":"صدا و ویدیو","nav.transcribe":"تبدیل صدا به متن",
            "nav.section.account":"حساب کاربری و پشتیبانی","nav.about":"درباره ما","nav.profile":"پروفایل","nav.subscriptions":"اشتراک‌ها","nav.donations":"کمک مالی","nav.support":"پشتیبانی و ارتباط",
            "nav.section.legal":"حقوقی","nav.terms":"شرایط استفاده","nav.privacy":"سیاست حریم خصوصی",
            "account.guest":"مهمان (این دستگاه)","account.signinHint":"برای ذخیره عکس و امتیازهایتان با گوگل وارد شوید",
            "trial.left":"تلاش‌های باقی‌مانده","trial.upgrade":"ارتقا به بسته کامل",
            "copy":"کپی","download":"دانلود",
            "interview.desc":"یک مصاحبه شفاهی واقعی را با ارزیابی عملکرد دقیق در پایان تمرین کنید.","interview.linkCv":"اتصال رزومه",
            "interview.roleLabel":"شغل هدف","interview.rolePh":"مثلاً: فروش املاک، خدمات مشتری، برنامه‌نویسی...",
            "interview.personaLabel":"شخصیت مصاحبه‌کننده","interview.start":"شروع جلسه","interview.speaking":"مصاحبه‌کننده در حال صحبت است...",
            "interview.inputPh":"در میکروفون صحبت کنید یا اینجا تایپ کنید...","interview.reportHint":"ارزیابی پاسخ‌های نوشتاری شما به‌همراه سرعت صحبت و کلمات پرکننده (در صورت استفاده از میکروفون) را تحلیل می‌کند.",
            "faq.desc":"شغل و حوزه را بنویسید، ما مجموعه‌ای واقعی از سوالات متداول با پاسخ‌های نمونه قانع‌کننده آماده می‌کنیم.","faq.rolePh":"مثلاً: مسئول فروش املاک","faq.run":"تهیه سوالات و پاسخ‌ها",
            "career.desc":"وضعیت فعلی و هدف خود را بگویید، یک برنامه رشد عملی برایتان می‌سازیم.","career.currentLabel":"وضعیت فعلی شما","career.currentPh":"مثلاً: حسابدار با ۱ سال تجربه",
            "career.targetLabel":"هدف شما","career.targetPh":"مثلاً: می‌خواهم به تحلیل داده تغییر مسیر دهم","career.contextPh":"جزئیات اضافی مفید - اختیاری","career.run":"ساخت برنامه من",
            "cv.notice":"این ابزار محتوای متنی رزومه حرفه‌ای آماده کپی می‌سازد، نه یک PDF طراحی‌شده مثل لینکدین.","cv.photoHint":"عکس اختیاری (فقط در مرورگر شما ذخیره می‌شود).",
            "cv.namePh":"نام کامل","cv.titlePh":"شغل هدف","cv.expPh":"سوابق کاری شما","cv.eduPh":"تحصیلات و گواهینامه‌ها","cv.skillsPh":"مهارت‌ها (با کاما جدا کنید)","cv.run":"نوشتن رزومه من",
            "pf.notice":"هوش مصنوعی چند سوال ساده درباره حوزه و پروژه‌های شما می‌پرسد تا محتوای نمونه‌کار سفارشی آماده کند.","pf.fieldPh":"حوزه شما (طراح، برنامه‌نویس، بازاریاب...)","pf.start":"شروع - هوش مصنوعی از من بپرسد",
            "pf.inputPh":"پاسخ خود را اینجا بنویسید...","pf.generate":"سوالات کافی است - نمونه‌کار را الان بساز",
            "writing.notice":"بازبینی زبانی و پیشنهادهای قالب‌بندی آکادمیک به‌صورت توصیه‌های متنی که خودتان در Word اعمال می‌کنید.","writing.topicPh":"موضوع پژوهش (اختیاری)","writing.inputPh":"متن پژوهش یا مقاله خود را اینجا بچسبانید...","writing.run":"بازبینی متن",
            "sum.desc":"هر گزارش، مقاله یا سخنرانی را در چند ثانیه خلاصه کنید.","sum.inputPh":"متن را اینجا بچسبانید...","sum.run":"خلاصه‌سازی همین حالا",
            "tr.notice":"می‌توانید یک فایل صوتی آماده برای رونویسی خودکار با هوش مصنوعی بارگذاری کنید، مستقیماً با میکروفون ضبط کنید، یا متن آماده بچسبانید.","tr.uploadBtn":"بارگذاری فایل صوتی و رونویسی خودکار","tr.uploadHint":"هنوز فایلی بارگذاری نشده",
            "tr.sourceLangLabel":"زبان اصلی گفتار","tr.targetLangLabel":"ترجمه متن نهایی به (اختیاری)","tr.micHint":"برای ضبط فشار دهید، فایلی در بالا بارگذاری کنید، یا متنی آماده در پایین بچسبانید.","tr.rawPh":"متن خام اینجا نمایش داده می‌شود...","tr.run":"پاک‌سازی و قالب‌بندی",
            
            "profile.points":"امتیاز","profile.namePh":"نام کامل شما","profile.titlePh":"عنوان شغلی","profile.googleBtn":"ورود با گوگل",
            "profile.googleHint":"ورود، نام، عکس و امتیازهای شما را روی این دستگاه ذخیره می‌کند — تلاش‌های رایگان بر اساس دستگاه شمارش می‌شوند، نه حساب کاربری.","profile.save":"ذخیره اطلاعات",
            "profile.connected":"متصل به گوگل","profile.logoutBtn":"خروج از حساب",
            "profile.statUsage":"تعداد استفاده از ابزارها","profile.statDevice":"شناسه دستگاه","profile.statPlan":"بسته فعلی شما","profile.planFree":"رایگان",
            "subs.individualTitle":"بسته‌های فردی","subs.individualDesc":"برای هر کسی که برای مصاحبه آماده می‌شود یا مسیر شغلی خود را می‌سازد.","subs.basicName":"پایه","subs.perMonth":"/ ماهانه","subs.proName":"حرفه‌ای","subs.popular":"پرطرفدارترین",
            "subs.yearlyName":"سالانه","subs.perYear":"/ سالانه","subs.subscribe":"همین حالا مشترک شوید","subs.teamTitle":"بسته‌های تیمی و دانشگاهی","subs.teamDesc":"برای دانشکده‌ها، دانشگاه‌ها و مراکز استخدام که می‌خواهند یک گروه را با هم و با قیمت بهتر آموزش دهند.",
            "subs.teamSmallName":"تیم کوچک","subs.teamSmallRange":"تا ۱۰ نفر","subs.perSeat":"/ به‌ازای هر نفر / ماهانه","subs.recommended":"توصیه‌شده برای دانشگاه‌ها","subs.teamMedName":"دسته / دانشکده","subs.teamMedRange":"۱۱ تا ۱۰۰ نفر",
            "subs.uniName":"دانشگاه / سازمان بزرگ","subs.uniRange":"بیش از ۱۰۰ نفر","subs.customPrice":"قیمت‌گذاری اختصاصی","subs.contactUs":"تماس با ما",
            "don.title":"از تداوم پلتفرم حمایت کنید","don.desc":"اگر می‌خواهید از توسعه YUSR Pro حمایت کنید، می‌توانید از طریق شماره‌های زیر هر مبلغی را اهدا کنید.","don.wallet":"کیف پول الکترونیک","don.thanks":"از همه کسانی که از ما حمایت می‌کنند بسیار سپاسگزاریم.",
            "sup.title":"پشتیبانی و ارتباط","sup.desc":"سوال، مشکل یا پیشنهادی دارید؟ مستقیماً با ما تماس بگیرید.","sup.phone":"تماس مستقیم","sup.hours":"معمولاً ظرف چند ساعت پاسخ می‌دهیم. برای موارد فوری، واتس‌اپ سریع‌ترین راه است.",
            "legal.lastUpdated":"آخرین به‌روزرسانی: اوت ۲۰۲۶",
            "about.pageTitle":"درباره ما","about.tagline":"پلتفرمی عربی که با شور و اشتیاق می‌سازیم تا همراه شما در مسیر شغلی‌تان باشد.",
            "about.missionLabel":"ماموریت ما","about.missionBody":"ما معتقدیم هر کسی، صرف‌نظر از پیشینه یا شرایطش، سزاوار رسیدن به فرصت مناسب با اعتماد به نفس و آمادگی کامل است. \"YUSR Pro\" از یک ایده ساده متولد شد: آمادگی خوب برای مصاحبه یا رزومه‌ای قوی نباید فقط در اختیار کسانی باشد که وقت، پول یا ارتباطات دارند — هوش مصنوعی اکنون می‌تواند همین کیفیت را در دسترس هر کسی، در هر زمانی قرار دهد.",
            "about.pillarsTitle":"چه چیزی ما را به حرکت درمی‌آورد",
            "about.pillar1Title":"کمک واقعی","about.pillar1Body":"نه فقط ابزار — ما هر ویژگی را برای حل یک مشکل واقعی که کارجویان با آن روبرو هستند طراحی می‌کنیم.",
            "about.pillar2Title":"رشد مستمر","about.pillar2Body":"به پیشنهادات شما گوش می‌دهیم و پیوسته اضافه و بهبود می‌دهیم — پلتفرم قدم به قدم همراه شما رشد می‌کند.",
            "about.pillar3Title":"هوش مصنوعی در خدمت شما","about.pillar3Body":"از جدیدترین فناوری‌های هوش مصنوعی برای ارائه تجربه آمادگی شخصی‌سازی‌شده و باکیفیت به شما بهره می‌بریم.",
            "about.pillar4Title":"حریم خصوصی شما، اولویت اول","about.pillar4Body":"داده‌های شما متعلق به خودتان است — ما آن را فقط برای ارائه خدمت به شما استفاده یا به اشتراک می‌گذاریم.",
            "about.whyTitle":"چرا YUSR Pro؟",
            "about.why1":"تجربه‌ای کاملاً طراحی‌شده به زبان عربی که لهجه شما را می‌فهمد.",
            "about.why2":"همه ابزارهایی که نیاز دارید، از مصاحبه تا رزومه و نمونه‌کار، در یک مکان.",
            "about.why3":"بازخورد صادقانه و واقع‌بینانه که به بهبود شما کمک می‌کند، نه صرفاً تعریف‌های کلی.",
            "about.why4":"ما بر اساس نیازهای واقعی کاربران خود همچنان پلتفرم را توسعه می‌دهیم.",
            "about.closing":"ایده یا پیشنهادی دارید که YUSR را بهتر کند؟ دوست داریم آن را بشنویم.","about.contactUs":"تماس با ما",
            "terms.pageTitle":"شرایط استفاده","terms.betaNotice":"پلتفرم هنوز در مرحله آزمایشی (بتا) است. صفحه \"اشتراک‌ها\" در حال حاضر بسته‌ها و قیمت‌های آزمایشی را نمایش می‌دهد و هیچ کسری واقعی از هیچ کارت یا حسابی انجام نمی‌شود — به‌محض فعال شدن پرداخت واقعی، به‌وضوح در برنامه اعلام خواهیم کرد.",
            "terms.s1.title":"۱. پذیرش شرایط","terms.s1.body":"با استفاده از پلتفرم \"YUSR Pro\"، شما با این شرایط موافقت می‌کنید.",
            "terms.s2.title":"۲. ماهیت خدمت","terms.s2.body":"YUSR پلتفرمی مبتنی بر هوش مصنوعی برای آماده‌سازی کارجویان است: مصاحبه‌های آزمایشی صوتی، ساخت رزومه و نمونه‌کار، بازبینی نگارش آکادمیک، خلاصه‌سازی مدارک و رونویسی صوتی. پاسخ‌ها و پیشنهادها توسط هوش مصنوعی تولید می‌شوند و صرفاً کمکی راهنما هستند، نه تضمینی برای نتیجه یا استخدام.",
            "terms.s3.title":"۳. حساب کاربری و استفاده مجاز","terms.s3.body":"می‌توانید از پلتفرم به‌صورت مهمان (با هویت ناشناس خودکار) استفاده کنید یا با حساب گوگل وارد شوید تا داده‌هایتان ذخیره شود. شما مسئول هرگونه فعالیتی هستید که از حساب شما انجام می‌شود. موارد ممنوع: تلاش برای دور زدن محدودیت‌های استفاده منصفانه، ارسال درخواست‌های خودکار انبوه (bot)، یا تلاش برای دسترسی به هر بخشی از سیستم که مجاز نیستید.",
            "terms.s4.title":"۴. محدودیت‌های استفاده منصفانه","terms.s4.body":"برای تضمین تداوم خدمت برای همه، ابزارهای هوش مصنوعی (گفتگو، رونویسی صوتی، تبدیل متن به گفتار) دارای سقف روزانه و ماهانه استفاده هستند. اگر به سقف برسید، باید تا بازنشانی آن صبر کنید.",
            "terms.s5.title":"۵. محتوای شما","terms.s5.body":"هر محتوایی که می‌نویسید یا بارگذاری می‌کنید (اطلاعات رزومه، نمونه‌کار، ضبط‌های صوتی) همچنان متعلق به شماست. ما آن را فقط برای ارائه خدمت به شما پردازش می‌کنیم و هرگز برای هدف دیگری استفاده یا آن را نمی‌فروشیم.",
            "terms.s6.title":"۶. سلب مسئولیت","terms.s6.body":"خدمت \"همان‌طور که هست\" و بدون هیچ ضمانتی ارائه می‌شود. ما مسئول هیچ تصمیم شغلی یا حرفه‌ای که بر اساس خروجی‌های هوش مصنوعی می‌گیرید نیستیم، و همیشه توصیه می‌کنیم پیش از استفاده، هر محتوای مهمی را خودتان بازبینی کنید.",
            "terms.s7.title":"۷. تغییرات","terms.s7.body":"ممکن است این شرایط را هر از گاهی به‌روزرسانی کنیم و تاریخ \"آخرین به‌روزرسانی\" در بالا را تغییر دهیم. ادامه استفاده از پلتفرم پس از یک تغییر به معنای پذیرش نسخه جدید است.",
            "terms.s8.title":"۸. تماس","terms.s8.body":"برای هر سوالی درباره این شرایط، از طریق صفحه \"پشتیبانی و ارتباط\" با ما تماس بگیرید.",
            "privacy.pageTitle":"سیاست حریم خصوصی",
            "privacy.s1.title":"۱. چه کسی داده‌ها را جمع‌آوری می‌کند","privacy.s1.body":"پلتفرم \"YUSR Pro\" داده‌های شما را با یک هدف جمع‌آوری و پردازش می‌کند: ارائه خدمتی که استفاده می‌کنید.",
            "privacy.s2.title":"۲. داده‌هایی که جمع‌آوری می‌کنیم",
            "privacy.s2.li1":"<b class=\"text-slate-200\">داده‌های حساب کاربری:</b> اگر با گوگل وارد شوید، نام، عکس و ایمیل شما را مستقیماً از گوگل دریافت می‌کنیم. اگر به‌عنوان مهمان وارد شوید، فقط یک هویت ناشناس برای تمایز شما از دیگر کاربران به شما می‌دهیم.",
            "privacy.s2.li2":"<b class=\"text-slate-200\">محتوایی که استفاده می‌کنید:</b> اطلاعات رزومه، نمونه‌کار، متن‌هایی که می‌نویسید یا خلاصه می‌کنید، و ضبط‌های صوتی‌ای که در ابزارهای مصاحبه یا رونویسی بارگذاری می‌کنید.",
            "privacy.s2.li3":"<b class=\"text-slate-200\">داده‌های فنی استفاده:</b> تعداد دفعاتی که از هر ابزار استفاده کرده‌اید (برای اعمال محدودیت‌های استفاده منصفانه)، که به‌صورت محلی روی دستگاه شما (localStorage) ذخیره می‌شود، مانند \"تعداد تلاش‌های باقی‌مانده\".",
            "privacy.s3.title":"۳. چگونه از داده‌های شما استفاده می‌کنیم","privacy.s3.body":"ما داده‌های شما را فقط برای موارد زیر استفاده می‌کنیم: (الف) اجرای ابزارهای هوش مصنوعی (متن یا صوتی که بارگذاری می‌کنید را برای تولید پاسخ به شرکت‌های پردازشی تخصصی می‌فرستیم، بدون ذخیره کلیدها یا اطلاعات ورود شما نزد آن‌ها)، (ب) ذخیره پروفایل شما تا هنگام بازگشت موجود باشد، (ج) بهبود خدمت و جلوگیری از سوءاستفاده.",
            "privacy.s4.title":"۴. چه کسی داده‌های شما را می‌بیند (اشخاص ثالث)",
            "privacy.s4.li1":"<b class=\"text-slate-200\">Google Firebase:</b> برای ورود و ذخیره‌سازی امن پروفایل شما.",
            "privacy.s4.li2":"<b class=\"text-slate-200\">Groq:</b> برای پردازش متن و صدا در ابزارهای گفتگو و رونویسی.",
            "privacy.s4.li3":"<b class=\"text-slate-200\">Microsoft Edge:</b> برای تبدیل متن به گفتار.",
            "privacy.s4.li4":"<b class=\"text-slate-200\">Cloudflare:</b> به‌عنوان یک واسط فنی امن بین برنامه شما و خدمات هوش مصنوعی، بدون نگه‌داری داده‌های شما.",
            "privacy.s4.li5":"<b class=\"text-slate-200\">s.jina.ai:</b> فقط برای جستجوی زنده وب در ابزار برآورد حقوق.",
            "privacy.s4.note":"ما هرگز داده‌های شما را به کسی نمی‌فروشیم و هرگز آن را برای اهداف تبلیغاتی به اشتراک نمی‌گذاریم.",
            "privacy.s5.title":"۵. امنیت داده‌ها","privacy.s5.body":"داده‌های شما توسط قوانین امنیتی محافظت می‌شود که تضمین می‌کند هر کاربر فقط داده‌های خودش را می‌بیند، و تمام ارتباط بین برنامه شما و سرور رمزگذاری‌شده (HTTPS) است.",
            "privacy.s6.title":"۶. حقوق شما","privacy.s6.body":"می‌توانید در هر زمان با تماس از طریق صفحه \"پشتیبانی و ارتباط\"، درخواست مشاهده داده‌های ذخیره‌شده خود، ویرایش آن‌ها، یا حذف کامل آن‌ها را بدهید.",
            "privacy.s7.title":"۷. کودکان","privacy.s7.body":"این خدمت برای افراد زیر ۱۳ سال طراحی نشده و ما عمداً از این گروه سنی داده جمع‌آوری نمی‌کنیم.",
            "privacy.s8.title":"۸. تغییرات در این سیاست","privacy.s8.body":"ممکن است این سیاست را هر از گاهی به‌روزرسانی کنیم و هرگاه تغییر قابل‌توجهی ایجاد کنیم، تاریخ \"آخرین به‌روزرسانی\" در بالا را تغییر خواهیم داد."
        }
    };
    function applyI18n() {
        const dict = I18N[currentUiLang] || I18N.ar;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) el.textContent = dict[key];
        });
        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const key = el.getAttribute('data-i18n-html');
            if (dict[key]) el.innerHTML = dict[key];
        });
        document.querySelectorAll('[data-i18n-ph]').forEach(el => {
            const key = el.getAttribute('data-i18n-ph');
            if (dict[key]) el.placeholder = dict[key];
        });
        const activeNav = document.querySelector('.nav-item.active');
        if (activeNav) {
            document.getElementById('view-title').innerText = (currentUiLang === 'en' ? viewTitlesEn : viewTitles)[activeNav.dataset.view] || '';
        }
    }
    function setAppLanguage(lang) {
        currentAppLang = lang;
        if (recognition) recognition.lang = lang;
        const code = lang.slice(0, 2);
        currentUiLang = I18N[code] ? code : 'ar';
        document.documentElement.lang = currentUiLang;
        const RTL_LANGS = ['ar', 'ur', 'fa'];
        document.documentElement.dir = RTL_LANGS.includes(currentUiLang) ? 'rtl' : 'ltr';
        applyI18n();
    }

    function getDeviceId() {
        let id = localStorage.getItem('yusr_device_fingerprint');
        if (!id) { id = 'DEV-' + Math.random().toString(36).substring(2, 15) + Date.now().toString(36); localStorage.setItem('yusr_device_fingerprint', id); }
        return id;
    }
    // ============ حدود الاستخدام حسب مستوى الاشتراك (مش عداد واحد موحّد لكل المستخدمين) ============
    // كل باقة ليها سقف شهري مختلف بناءً على اللي متعلن في صفحة "الاشتراكات":
    // مجاني: عدد محاولات تجريبية محدود يشجّع على الاشتراك. الأساسية: سقف شهري معقول.
    // الاحترافية والسنوية: "كل أدوات المنصة بلا حدود" زي ما هو معلن فعلاً.
    //
    // ⚠️ العداد بقى مصدر الحقيقة فيه هو السيرفر (Firebase Realtime Database) مربوط بالـ uid
    // الحقيقي للمستخدم (حتى لو anonymous)، مش بس device fingerprint في localStorage اللي أي حد
    // كان يقدر يمسحه ويرجع "مستخدم جديد" بمحاولاته كاملة تاني. localStorage هنا بقى بس "كاش"
    // للعرض السريع أول ما الصفحة تفتح قبل ما يوصل رد السيرفر، مش المصدر اللي بيتحسب عليه الحد.
    // عشان الحماية دي تبقى فعلية فعلاً، لازم تتضاف قواعد أمان (Security Rules) زي دي في
    // Firebase Console على المسار users/$uid/usage/$month، بحيث الكتابة مسموحة بس كزيادة بواحد:
    //   {
    //     "rules": {
    //       "users": {
    //         "$uid": {
    //           "usage": {
    //             "$month": {
    //               ".read": "auth != null && auth.uid === $uid",
    //               ".write": "auth != null && auth.uid === $uid && (!data.exists() ? newData.val() === 1 : newData.val() === data.val() + 1)"
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }
    const PLAN_MONTHLY_LIMITS = {
        'مجاني': 5,
        'الأساسية': 30,
        'الاحترافية': Infinity,
        'السنوية': Infinity
    };
    function getCurrentPlanName() {
        const p = getProfile();
        const plan = (p.plan || '').trim();
        return PLAN_MONTHLY_LIMITS.hasOwnProperty(plan) ? plan : 'مجاني';
    }
    function getCurrentMonthKey() { return new Date().toISOString().slice(0, 7); } // مثال: 2026-08

    // كاش محلي بس للعرض السريع أول ما الصفحة تفتح - مش بيتستخدم لفرض الحد الفعلي
    function getLocalUsageCache() {
        const monthKey = getCurrentMonthKey();
        let usage = JSON.parse(localStorage.getItem('yusr_usage_cache') || '{"count":0,"month":""}');
        if (usage.month !== monthKey) usage = { count: 0, month: monthKey };
        return usage;
    }
    function setLocalUsageCache(count) {
        localStorage.setItem('yusr_usage_cache', JSON.stringify({ count, month: getCurrentMonthKey() }));
    }

    let cloudUsageCache = null; // { month, count } - بيتحدّث لايف من Firebase أول ما نعرف هوية المستخدم
    let cloudUsageRef = null;
    function attachCloudUsageListener(uid) {
        if (cloudUsageRef) cloudUsageRef.off();
        const monthKey = getCurrentMonthKey();
        cloudUsageRef = db.ref('users/' + uid + '/usage/' + monthKey);
        cloudUsageRef.on('value', snap => {
            const count = snap.val() || 0;
            cloudUsageCache = { month: monthKey, count };
            setLocalUsageCache(count);
            checkDeviceTrial();
        }, err => console.warn('تعذر متابعة عداد الاستخدام من السيرفر', err));
    }
    function getEffectiveUsageCount() {
        const monthKey = getCurrentMonthKey();
        if (cloudUsageCache && cloudUsageCache.month === monthKey) return cloudUsageCache.count;
        return getLocalUsageCache().count; // لحد ما يوصل رد السيرفر أول مرة
    }
    function checkDeviceTrial() {
        const plan = getCurrentPlanName();
        const limit = PLAN_MONTHLY_LIMITS[plan];
        const count = getEffectiveUsageCount();
        const trialEl = document.getElementById('trial-left');
        if (trialEl) trialEl.innerText = (limit === Infinity) ? '∞' : Math.max(0, limit - count);
        if (limit !== Infinity && count >= limit) { openPricingModal(); return false; }
        return true;
    }
    function incrementDeviceUsage() {
        const user = fbAuth.currentUser;
        // تحديث تفاؤلي فوري للكاش المحلي عشان الواجهة تستجيب بسرعة (رقم تقريبي لحد ما رد السيرفر يوصل)
        setLocalUsageCache(getEffectiveUsageCount() + 1);
        checkDeviceTrial();
        // ⚠️ العداد الحقيقي بيتزوّد من السيرفر (Cloudflare Worker -> checkPlanUsage) لما الطلب
        // يوصل فعلاً لـ /groqChat أو /groqTranscribe أو /edgeTtsSpeak، مش من هنا.
        // ده عشان نتجنب تكرار الزيادة (مرة من هنا ومرة من السيرفر لنفس الفعل)، ولأن العميل
        // مش مصدر موثوق للعداد أصلاً. الـ listener في attachCloudUsageListener هو اللي هيحدّث
        // الكاش برقم السيرفر الحقيقي أول ما رد الطلب يوصل.
        // الزوار (anonymous) بيفضل عدادهم محلي بس على الجهاز، ومبيلحقوش نقط، عشان مبيبقوش
        // ليهم أي أثر في users/ غير لما يسجلوا بجوجل فعلاً.
        if (user && !user.isAnonymous) {
            addPoints(10);
        }
    }

    // ============ Firebase (secure cloud backend) ============
    // البيانات بقت متخزنة على حساب المستخدم الحقيقي في Realtime Database، مش بس على الجهاز.
    // قواعد الأمان في Firebase بتمنع أي حد إنه يقرا أو يكتب بيانات حساب مش بتاعه.
    const firebaseConfig = {
        apiKey: "AIzaSyC901aj4zCeoa623KQw-ZfnRaYNPDuVlOk",
        authDomain: "yusr-d054e.firebaseapp.com",
        databaseURL: "https://yusr-d054e-default-rtdb.firebaseio.com",
        projectId: "yusr-d054e",
        storageBucket: "yusr-d054e.firebasestorage.app",
        messagingSenderId: "1088995951323",
        appId: "1:1088995951323:web:a03bad519c8a63c58f02fe"
    };
    firebase.initializeApp(firebaseConfig);
    const fbAuth = firebase.auth();
    const db = firebase.database();
    function userDocRef(uid) { return db.ref('users/' + uid); }

    // ============ Error tracking (automatic, sends every error/warning to Firebase) ============
    // كل خطأ في الموقع (crash كامل أو حتى تحذير بسيط زي اللي كانت بس بتظهر في الكونسول)
    // بيتسجل تلقائياً هنا: errors/{auto-id} في Realtime Database.
    // مفيش أي عميل يقدر يقرا الأخطاء دي (حتى صاحبها) - يظهروا بس لمالك المشروع من Firebase Console > Data > errors.
    let _errorLogCount = 0;
    function logErrorToCloud(context, err) {
        try {
            if (_errorLogCount > 200) return; // حد أقصى بسيط يمنع إغراق الداتابيز لو حصلت حلقة أخطاء متكررة
            _errorLogCount++;
            const message = (err && err.message) ? String(err.message) : String(err == null ? context : err);
            const stack = (err && err.stack) ? String(err.stack).slice(0, 2000) : '';
            db.ref('errors').push({
                context: String(context || 'unknown'),
                message: message.slice(0, 1000),
                stack,
                view: (typeof document !== 'undefined' && document.querySelector('.view.active')) ? document.querySelector('.view.active').id : '',
                url: location.href,
                userAgent: navigator.userAgent,
                uid: (fbAuth.currentUser && fbAuth.currentUser.uid) || null,
                time: firebase.database.ServerValue.TIMESTAMP
            }).catch(function () {});
        } catch (e) { /* لو التتبع نفسه فشل، بنتجاهله بهدوء عشان متعملش حلقة أخطاء */ }
    }
    // نلقط أي خطأ غير متوقع (crash) في أي مكان بالكود، حتى لو مش متوقع أصلاً
    window.addEventListener('error', function (e) {
        logErrorToCloud('window.onerror', e.error || { message: e.message });
    });
    window.addEventListener('unhandledrejection', function (e) {
        logErrorToCloud('unhandledrejection', e.reason);
    });
    // كمان نلقط كل التحذيرات اللي كانت أصلاً بتتسجل بس في كونسول المتصفح (console.warn) في كل الأدوات،
    // من غير ما نحتاج نلمس كل حتة فيها try/catch في الكود القديم.
    const _origConsoleWarn = console.warn.bind(console);
    console.warn = function () {
        _origConsoleWarn.apply(console, arguments);
        try {
             const parts = Array.prototype.slice.call(arguments).map(function (a) {
             return (a instanceof Error) ? (a.message + '\n' + (a.stack || '')) : (typeof a === 'object' ? JSON.stringify(a) : String(a));
            });
           const joined = parts.join(' | ');
           if (joined.indexOf('FIREBASE WARNING') !== -1) return; // منع حلقة تكرار لو الكتابة نفسها فشلت
        logErrorToCloud('console.warn', { message: joined });
       } catch (e) { /* تجاهل */ }
    };
    function syncProfileToCloud(p) {
        const user = fbAuth.currentUser;
        // الزوار (anonymous) مبيتسجلوش في users/ خالص - لحد ما يسجلوا بجوجل فعلاً
        if (!user || user.isAnonymous) return;
        userDocRef(user.uid).update({
            name: p.name || '', title: p.title || '', photo: p.photo || '',
            points: p.points || 0, plan: p.plan || '', google: p.google || null,
            updatedAt: firebase.database.ServerValue.TIMESTAMP
        }).catch(e => console.warn('تعذر حفظ البيانات على الخادم', e));
    }
    function syncPurchasesToCloud(purchases) {
        const user = fbAuth.currentUser;
        if (!user || user.isAnonymous) return;
        userDocRef(user.uid).update({ purchases }).catch(e => console.warn('تعذر حفظ الاشتراكات على الخادم', e));
    }
    function loadProfileFromCloud(uid) {
        userDocRef(uid).once('value').then(snap => {
            if (snap.exists()) {
                const cloud = snap.val();
                const p = getProfile();
                if (cloud.name) p.name = cloud.name;
                if (cloud.title) p.title = cloud.title;
                if (cloud.photo) p.photo = cloud.photo;
                if (typeof cloud.points === 'number') p.points = cloud.points;
                if (cloud.plan) p.plan = cloud.plan;
                if (cloud.google) p.google = cloud.google;
                saveProfile(p);
                if (Array.isArray(cloud.purchases)) savePurchases(cloud.purchases);
            } else {
                syncProfileToCloud(getProfile());
                syncPurchasesToCloud(getPurchases());
            }
            refreshProfileView();
        }).catch(e => console.warn('تعذر تحميل البيانات من الخادم', e));
    }
    fbAuth.onAuthStateChanged(user => {
        if (user) {
            // فيه هوية فعلية دلوقتي (حساب حقيقي بجوجل/إيميل، أو حتى هوية زائر مؤقتة) - نفتح الموقع فوراً من غير ما نجبره يسجل
            hideAuthGate();
            if (!user.isAnonymous) {
                loadProfileFromCloud(user.uid);
                attachCloudUsageListener(user.uid);
            }
        } else {
            // مفيش أي هوية لسه، حتى مؤقتة - نجهّز هوية زائر تلقائياً عشان يدخل الموقع على طول
            // من غير أي شاشة تسجيل إجبارية. لو فشل (غالباً لعدم وجود إنترنت أول مرة على الإطلاق)
            // نوريله شاشة الدخول كحل بديل بس.
            fbAuth.signInAnonymously().catch(err => {
                console.warn('تعذر تجهيز هوية الزائر التلقائية', err);
                showAuthGate();
            });
        }
    });
    async function getAuthHeader() {
        try {
            const user = fbAuth.currentUser;
            if (!user) return {};
            const token = await user.getIdToken();
            return { "Authorization": "Bearer " + token };
        } catch (e) {
            console.warn('تعذر جلب توكن المصادقة', e);
            return {};
        }
    }

    // ============ Points & Profile (device-wide, optional Google sign-in) ============
    function getProfile() {
        return JSON.parse(localStorage.getItem('yusr_profile') || '{"name":"","title":"","photo":"","points":0,"google":null}');
    }
    function saveProfile(p) { localStorage.setItem('yusr_profile', JSON.stringify(p)); }
    // ============ Subscriptions & purchase history (per-device, local demo record) ============
    function getPurchases() { return JSON.parse(localStorage.getItem('yusr_purchases') || '[]'); }
    function savePurchases(list) { localStorage.setItem('yusr_purchases', JSON.stringify(list)); }
    let pendingPlanRequest = null;
    function openPaymentRequest(name, price, period) {
        pendingPlanRequest = { name, price, period };
        closePricingModal();
        const summary = document.getElementById('payment-request-summary');
        summary.innerHTML = `باقة <b class="text-slate-100">${name}</b> — <b class="text-slate-100">${price} ج.م</b> / ${period}`;
        document.getElementById('pr-name').value = getProfile().name || '';
        document.getElementById('pr-phone').value = '';
        document.getElementById('pr-ref').value = '';
        document.getElementById('payment-request-status').classList.add('hidden');
        document.getElementById('payment-request-modal').classList.remove('hidden');
    }
    function closePaymentRequestModal() { document.getElementById('payment-request-modal').classList.add('hidden'); }
    // ============ حماية بسيطة من السبام (honeypot + cooldown) للفورمات العامة ============
    const SPAM_COOLDOWN_MS = 60 * 1000; // دقيقة واحدة بين كل إرسال والتاني لنفس الفورم
    function isHoneypotTriggered(fieldId) {
        const el = document.getElementById(fieldId);
        return !!(el && el.value.trim() !== '');
    }
    function isSpamCooldownActive(cooldownKey) {
        const last = parseInt(localStorage.getItem(cooldownKey) || '0', 10);
        return (Date.now() - last) < SPAM_COOLDOWN_MS;
    }
    function markSpamCooldown(cooldownKey) {
        localStorage.setItem(cooldownKey, String(Date.now()));
    }
    function submitPaymentRequest() {
        if (!pendingPlanRequest) return;
        const name = document.getElementById('pr-name').value.trim();
        const phone = document.getElementById('pr-phone').value.trim();
        const ref = document.getElementById('pr-ref').value.trim();
        if (!name || !phone) { showToast('من فضلك اكتب اسمك ورقم الموبايل اللي حوّلت منه.', 'error'); return; }
        // بوت غالباً هيملا الحقل المخفي ده - نتجاهل الطلب بهدوء من غير ما نفضحله إنه اتكشف
        if (isHoneypotTriggered('pr-website')) {
            const status = document.getElementById('payment-request-status');
            status.innerText = '✓ تم إرسال طلبك. هيتم تفعيل الباقة على حسابك يدوياً خلال ساعات قليلة بعد مراجعة التحويل.';
            status.classList.remove('hidden');
            pendingPlanRequest = null;
            setTimeout(closePaymentRequestModal, 3500);
            return;
        }
        if (isSpamCooldownActive('yusr_pr_cooldown')) {
            showToast('من فضلك استنى شوية قبل ما تبعت طلب تاني.', 'error');
            return;
        }
        const deviceId = getDeviceId();
        const requestData = {
            plan: pendingPlanRequest.name,
            price: pendingPlanRequest.price,
            period: pendingPlanRequest.period,
            name, phone, ref,
            deviceId,
            status: 'قيد المراجعة',
            createdAt: firebase.database.ServerValue.TIMESTAMP
        };
        try {
            db.ref('pending_requests').push(requestData);
            markSpamCooldown('yusr_pr_cooldown');
        } catch (e) { console.warn('Could not write pending request:', e); }
        const status = document.getElementById('payment-request-status');
        status.innerText = '✓ تم إرسال طلبك. هيتم تفعيل الباقة على حسابك يدوياً خلال ساعات قليلة بعد مراجعة التحويل.';
        status.classList.remove('hidden');
        pendingPlanRequest = null;
        setTimeout(closePaymentRequestModal, 3500);
    }
    function submitFeedback() {
        const type = document.getElementById('fb-type').value;
        const contact = document.getElementById('fb-contact').value.trim();
        const message = document.getElementById('fb-message').value.trim();
        if (!message) { showToast('اكتب رسالتك الأول من فضلك.', 'error'); return; }
        // بوت غالباً هيملا الحقل المخفي ده - نتجاهل الطلب بهدوء من غير ما نفضحله إنه اتكشف
        if (isHoneypotTriggered('fb-website')) {
            const status = document.getElementById('fb-status');
            status.innerText = '✓ شكراً، وصلتنا رسالتك.';
            status.classList.remove('hidden');
            document.getElementById('fb-message').value = '';
            document.getElementById('fb-contact').value = '';
            return;
        }
        if (isSpamCooldownActive('yusr_fb_cooldown')) {
            showToast('من فضلك استنى شوية قبل ما تبعت رسالة تانية.', 'error');
            return;
        }
        try {
            db.ref('feedback').push({
                type, contact, message,
                deviceId: getDeviceId(),
                createdAt: firebase.database.ServerValue.TIMESTAMP
            });
            markSpamCooldown('yusr_fb_cooldown');
        } catch (e) { console.warn('Could not send feedback:', e); }
        const status = document.getElementById('fb-status');
        status.innerText = '✓ شكراً، وصلتنا رسالتك.';
        status.classList.remove('hidden');
        document.getElementById('fb-message').value = '';
        document.getElementById('fb-contact').value = '';
    }
    // ============ Terms acceptance gate (shown once per device) ============
    function checkTermsGate() {
        if (localStorage.getItem('yusr_terms_accepted') === '1') return;
        document.getElementById('terms-gate-modal').classList.remove('hidden');
        const cb = document.getElementById('terms-gate-checkbox');
        const btn = document.getElementById('terms-gate-continue');
        cb.addEventListener('change', () => {
            btn.disabled = !cb.checked;
            btn.classList.toggle('opacity-50', !cb.checked);
            btn.classList.toggle('cursor-not-allowed', !cb.checked);
        });
    }
    function acceptTermsGate() {
        localStorage.setItem('yusr_terms_accepted', '1');
        closeTermsGate(false);
    }
    function closeTermsGate(skipCheck) {
        if (!skipCheck && localStorage.getItem('yusr_terms_accepted') !== '1') return;
        document.getElementById('terms-gate-modal').classList.add('hidden');
    }

    // ============ Mandatory auth gate (Google or email/password only - no anonymous access) ============
    function showAuthGate() {
        document.getElementById('auth-gate-modal').classList.remove('hidden');
        document.getElementById('app-root').classList.add('hidden');
    }
    function hideAuthGate() {
        document.getElementById('auth-gate-modal').classList.add('hidden');
        document.getElementById('app-root').classList.remove('hidden');
    }
    let authGateMode = 'login';
    function switchAuthGateTab(mode) {
        authGateMode = mode;
        document.getElementById('auth-gate-name-wrap').classList.toggle('hidden', mode !== 'signup');
        document.getElementById('auth-gate-confirm-wrap').classList.toggle('hidden', mode !== 'signup');
        const authDict = I18N[currentUiLang] || I18N.ar;
        document.getElementById('auth-gate-submit-btn').innerText = mode === 'signup' ? (authDict['authgate.submitSignup'] || 'إنشاء الحساب') : (authDict['authgate.submitLogin'] || 'تسجيل الدخول');
        document.getElementById('auth-gate-tab-login').classList.toggle('auth-tab-active', mode === 'login');
        document.getElementById('auth-gate-tab-signup').classList.toggle('auth-tab-active', mode === 'signup');
        const status = document.getElementById('auth-gate-status');
        status.classList.add('hidden');
    }
    function translateAuthGateError(err) {
        const code = err && err.code;
        const map = {
            'auth/email-already-in-use': 'الإيميل ده متسجل بحساب قبل كده. جرب "تسجيل الدخول" بدل "إنشاء حساب".',
            'auth/invalid-email': 'صيغة الإيميل مش صحيحة.',
            'auth/weak-password': 'كلمة المرور ضعيفة، لازم تكون 6 حروف/أرقام على الأقل.',
            'auth/user-not-found': 'مفيش حساب مسجل بالإيميل ده.',
            'auth/wrong-password': 'كلمة المرور غلط.',
            'auth/invalid-credential': 'الإيميل أو كلمة المرور غلط.',
            'auth/too-many-requests': 'محاولات كتير غلط، جرب تاني بعد شوية.',
            'auth/network-request-failed': 'مشكلة في الاتصال بالإنترنت، جرب تاني.'
        };
        return map[code] || 'حصل خطأ، حاول تاني.';
    }
    function submitEmailAuth() {
        const mode = authGateMode;
        const name = document.getElementById('auth-gate-name').value.trim();
        const email = document.getElementById('auth-gate-email').value.trim();
        const password = document.getElementById('auth-gate-password').value;
        const confirm = document.getElementById('auth-gate-confirm').value;
        const statusEl = document.getElementById('auth-gate-status');
        statusEl.classList.add('hidden');

        if (mode === 'signup' && !name) { showToast('اكتب اسمك الأول من فضلك.', 'error'); return; }
        if (!email || !email.includes('@') || !email.includes('.')) { showToast('اكتب بريد إلكتروني صحيح.', 'error'); return; }
        if (!password || password.length < 6) { showToast('كلمة المرور لازم تكون 6 حروف/أرقام على الأقل.', 'error'); return; }
        if (mode === 'signup' && password !== confirm) { showToast('كلمتا المرور مش متطابقتين.', 'error'); return; }

        const btn = document.getElementById('auth-gate-submit-btn');
        btn.disabled = true;
        btn.classList.add('opacity-60');

        const finishSuccess = (user) => {
            if (mode === 'signup') {
                const p = getProfile();
                p.name = name;
                saveProfile(p);
                try { user.updateProfile({ displayName: name }); } catch (e) {}
                syncProfileToCloud(getProfile());
            }
            // hideAuthGate() و loadProfileFromCloud()/attachCloudUsageListener() بيتنفذوا
            // تلقائياً من fbAuth.onAuthStateChanged لما حالة تسجيل الدخول تتغيّر.
        };

        const authPromise = mode === 'signup'
            ? fbAuth.createUserWithEmailAndPassword(email, password)
            : fbAuth.signInWithEmailAndPassword(email, password);

        authPromise
            .then(result => finishSuccess(result.user))
            .catch(err => {
                btn.disabled = false;
                btn.classList.remove('opacity-60');
                statusEl.innerText = translateAuthGateError(err);
                statusEl.className = 'text-[11px] text-center text-red-400';
            });
    }
    function addPoints(n) {
        const p = getProfile(); p.points = (p.points || 0) + n; saveProfile(p);
        syncProfileToCloud(p);
        const el = document.getElementById('profile-points-count'); if (el) el.innerText = p.points;
    }
    function refreshProfileView() {
        const p = getProfile();
        document.getElementById('profile-name').value = p.name || '';
        document.getElementById('profile-title').value = p.title || '';
        document.getElementById('profile-points-count').innerText = p.points || 0;
        if (p.photo) {
            document.getElementById('profile-photo-preview').src = p.photo;
            document.getElementById('profile-photo-preview').classList.remove('hidden');
            document.getElementById('profile-photo-icon').classList.add('hidden');
        }
        const planLimit = PLAN_MONTHLY_LIMITS[getCurrentPlanName()];
        document.getElementById('profile-stat-usage').innerText = getEffectiveUsageCount() + (planLimit === Infinity ? '' : ' / ' + planLimit);
        document.getElementById('profile-stat-device').innerText = getDeviceId().replace('DEV-', '').slice(0, 10) + '…';
        const planName = p.plan || 'مجاني';
        document.getElementById('profile-stat-plan').innerText = planName;
        document.getElementById('profile-current-plan').innerText = planName;
        updateAccountChip(p);
        renderPurchasesOverview();
        refreshGoogleSigninState(p);
    }
    function refreshGoogleSigninState(p) {
        p = p || getProfile();
        const signedOutArea = document.getElementById('google-signin-area');
        const signedInArea = document.getElementById('google-signedin-area');
        if (p.google) {
            signedOutArea.classList.add('hidden');
            signedInArea.classList.remove('hidden');
            document.getElementById('signedin-name').textContent = p.google.name || p.name || '-';
            document.getElementById('signedin-email').textContent = p.google.email || '';
            const img = document.getElementById('signedin-avatar-img');
            const icon = document.getElementById('signedin-avatar-icon');
            if (p.google.picture) {
                img.src = p.google.picture;
                img.classList.remove('hidden');
                icon.classList.add('hidden');
            } else {
                img.classList.add('hidden');
                icon.classList.remove('hidden');
            }
        } else {
            signedOutArea.classList.remove('hidden');
            signedInArea.classList.add('hidden');
        }
    }
    function logoutAccount() {
        const sure = confirm(currentUiLang === 'en' ? 'Log out of your Google account on this device?' : 'تسجيل الخروج من حساب جوجل على الجهاز ده؟');
        if (!sure) return;
        const p = getProfile();
        p.google = null;
        saveProfile(p);
        try {
            if (window.google && window.google.accounts && window.google.accounts.id) {
                window.google.accounts.id.disableAutoSelect();
            }
        } catch (e) {}
        googleTokenClient = null;
        fbAuth.signOut().catch(() => {});
        refreshProfileView();
        showToast(currentUiLang === 'en' ? 'Logged out. You can sign in again anytime.' : 'تم تسجيل الخروج. تقدر تسجل دخول تاني في أي وقت.');
    }
    function renderPurchasesOverview() {
        const purchases = getPurchases();
        const listEl = document.getElementById('profile-purchases-list');
        const total = purchases.reduce((sum, item) => sum + (Number(item.price) || 0), 0);
        document.getElementById('profile-total-count').innerText = purchases.length;
        document.getElementById('profile-total-spent').innerText = total.toLocaleString('ar-EG') + ' ج.م';
        if (!purchases.length) {
            listEl.innerHTML = `<div class="panel-2 rounded-xl p-4 text-center text-[11px] text-slate-500">لسه مفيش اشتراكات أو مشتريات مسجلة على حسابك. اضغط "اشترك في باقة" فوق عشان تبدأ.</div>`;
            return;
        }
        listEl.innerHTML = purchases.map(item => {
            const d = new Date(item.date);
            const dateStr = isNaN(d) ? '' : d.toLocaleDateString('ar-EG', { year: 'numeric', month: 'short', day: 'numeric' });
            return `<div class="panel-2 rounded-xl p-3 flex items-center justify-between gap-2">
                <div class="flex items-center gap-2.5 min-w-0">
                    <div class="w-8 h-8 rounded-lg acc-subs flex items-center justify-center shrink-0"><i class="fa-solid fa-gem text-[11px]"></i></div>
                    <div class="min-w-0">
                        <p class="text-xs font-bold text-slate-100 truncate">باقة ${item.name}</p>
                        <p class="text-[10px] text-slate-500">${dateStr} · ${item.period || ''}</p>
                    </div>
                </div>
                <p class="text-xs font-bold text-slate-200 shrink-0">${item.price} ج.م</p>
            </div>`;
        }).join('');
    }
    function updateAccountChip(p) {
        p = p || getProfile();
        document.getElementById('account-name').textContent = p.name || (I18N[currentUiLang]['account.guest']);
        document.getElementById('account-sub').textContent = p.google ? p.google.email : (I18N[currentUiLang]['account.signinHint']);
        const avatar = document.getElementById('account-avatar');
        const photoUrl = p.photo || (p.google && p.google.picture);
        if (photoUrl) {
            // بنبني عنصر الصورة عن طريق الـ DOM API مباشرة (مش عن طريق innerHTML) عشان محدش يقدر يحقن HTML
            // لو قيمة الصورة اتلاعب فيها بأي شكل (حتى لو احتمال ده ضعيف جداً هنا).
            avatar.innerHTML = '';
            const img = document.createElement('img');
            img.src = photoUrl;
            img.className = 'w-full h-full object-cover';
            img.alt = 'صورة ' + (p.name || 'المستخدم');
            avatar.appendChild(img);
        }
    }
    function compressImageFile(file, maxWidth, quality) {
        maxWidth = maxWidth || 400;
        quality = quality || 0.7;
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
                const img = new Image();
                img.onload = () => {
                    const scale = Math.min(1, maxWidth / img.width);
                    const canvas = document.createElement('canvas');
                    canvas.width = Math.round(img.width * scale);
                    canvas.height = Math.round(img.height * scale);
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                    resolve(canvas.toDataURL('image/jpeg', quality));
                };
                img.onerror = reject;
                img.src = reader.result;
            };
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    }
    function handleProfilePhotoUpload(e) {
        const file = e.target.files[0]; if (!file) return;
        compressImageFile(file, 400, 0.7).then((compressedDataUrl) => {
            const p = getProfile(); p.photo = compressedDataUrl; saveProfile(p);
            syncProfileToCloud(p);
            refreshProfileView();
        }).catch(() => {
            showToast(currentUiLang === 'en' ? 'Could not process this image.' : 'حصلت مشكلة في معالجة الصورة.', 'error');
        });
    }
    // بنمسح كل بيانات المنصة المحفوظة محلياً على الجهاز (بروفايل، سجل تقدم، مشتريات محلية، إلخ) بعد تأكيد صريح من المستخدم
    function clearLocalAppData() {
        const sure = confirm(currentUiLang === 'en'
            ? 'This will permanently delete your profile, progress history, and locally-saved data on this device/browser. This cannot be undone. Continue?'
            : 'هيتم حذف بياناتك المحفوظة على الجهاز ده نهائياً (البروفايل، سجل التقدم، أي بيانات محلية) — ده إجراء نهائي ومش هيرجع. متأكد؟');
        if (!sure) return;
        try {
            const keysToRemove = Object.keys(localStorage).filter(k => k.startsWith('yusr_'));
            keysToRemove.forEach(k => localStorage.removeItem(k));
            showToast(currentUiLang === 'en' ? 'Local data cleared.' : 'تم مسح بياناتك المحلية.', 'success');
            setTimeout(() => location.reload(), 800);
        } catch (e) {
            console.warn('Clear local data failed:', e);
            showToast(currentUiLang === 'en' ? 'Could not clear local data.' : 'تعذر مسح البيانات، حاول تاني.', 'error');
        }
    }
    function saveProfileInfo() {
        const p = getProfile();
        p.name = document.getElementById('profile-name').value.trim();
        p.title = document.getElementById('profile-title').value.trim();
        saveProfile(p);
        syncProfileToCloud(p);
        updateAccountChip(p);
        showToast(currentUiLang === 'en' ? 'Saved!' : 'تم الحفظ!', 'success');
    }
    // Google Sign-In (Google Identity Services). Requires a real Google Cloud OAuth Client ID
    // to actually authenticate — replace GOOGLE_CLIENT_ID below with your own from
    // https://console.cloud.google.com/apis/credentials . Trial counting stays device-based
    // regardless of sign-in (see getDeviceId/checkDeviceTrial above), by design.
    const GOOGLE_CLIENT_ID = "1088995951323-c6aeisqni683ishtav76e33vcbjdve7c.apps.googleusercontent.com";
    let googleTokenClient = null;
    function handleGoogleCredential(response) {
        try {
            const payload = JSON.parse(decodeURIComponent(escape(atob(response.credential.split('.')[1].replace(/-/g,'+').replace(/_/g,'/')))));
            const p = getProfile();
            p.google = { email: payload.email, picture: payload.picture, name: payload.name };
            if (!p.name) p.name = payload.name;
            if (!p.photo) p.photo = payload.picture;
            saveProfile(p);
            refreshProfileView();
            const cred = firebase.auth.GoogleAuthProvider.credential(response.credential);
            fbAuth.signInWithCredential(cred)
                .then(result => { syncProfileToCloud(getProfile()); loadProfileFromCloud(result.user.uid); })
                .catch(e => console.warn('تعذر تسجيل الدخول على الخادم', e));
        } catch (e) { console.warn('تعذر قراءة بيانات جوجل', e); }
    }
    function handleGoogleTokenResponse(tokenResponse) {
        if (!tokenResponse || !tokenResponse.access_token) return;
        fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
            headers: { Authorization: 'Bearer ' + tokenResponse.access_token }
        })
        .then(res => res.json())
        .then(info => {
            const p = getProfile();
            p.google = { email: info.email, picture: info.picture, name: info.name };
            if (!p.name) p.name = info.name;
            if (!p.photo) p.photo = info.picture;
            saveProfile(p);
            refreshProfileView();
            const cred = firebase.auth.GoogleAuthProvider.credential(null, tokenResponse.access_token);
            fbAuth.signInWithCredential(cred)
                .then(result => { syncProfileToCloud(getProfile()); loadProfileFromCloud(result.user.uid); })
                .catch(e => console.warn('تعذر تسجيل الدخول على الخادم', e));
        })
        .catch(e => console.warn('تعذر قراءة بيانات جوجل', e));
    }
    function initGoogleSignIn() {
        if (GOOGLE_CLIENT_ID.includes('YOUR_GOOGLE_CLIENT_ID')) return false;
        if (!(window.google && window.google.accounts)) return false;
        try {
            if (!googleTokenClient && window.google.accounts.oauth2) {
                googleTokenClient = window.google.accounts.oauth2.initTokenClient({
                    client_id: GOOGLE_CLIENT_ID,
                    scope: 'openid email profile',
                    callback: handleGoogleTokenResponse
                });
            }
            window.google.accounts.id.initialize({ client_id: GOOGLE_CLIENT_ID, callback: handleGoogleCredential });
            window.google.accounts.id.renderButton(document.getElementById('g_id_signin_container'), { theme: 'outline', size: 'medium' });
        } catch (e) { console.warn('تعذر تهيئة تسجيل دخول جوجل', e); }
        return !!googleTokenClient;
    }
    function mockGoogleSignIn() {
        if (GOOGLE_CLIENT_ID.includes('YOUR_GOOGLE_CLIENT_ID')) {
            showToast(currentUiLang === 'en'
                ? "Google Sign-In needs a real Google OAuth Client ID configured by the site owner in the code (GOOGLE_CLIENT_ID). Once set, this button will open the real Google sign-in popup."
                : "تسجيل الدخول بجوجل الحقيقي محتاج Client ID من Google Cloud يتحط في الكود (GOOGLE_CLIENT_ID) من صاحب الموقع. لحد ما يتحط، الزرار ده هيفضل تجريبي.");
            return;
        }
        if (googleTokenClient) {
            googleTokenClient.requestAccessToken();
            return;
        }
        if (initGoogleSignIn() && googleTokenClient) {
            googleTokenClient.requestAccessToken();
            return;
        }
        showToast(currentUiLang === 'en'
            ? "Google sign-in is still loading, please try again in a second."
            : "تسجيل الدخول بجوجل لسه بيتحمّل، جرب تدوس تاني بعد لحظة.");
    }
    try { initGoogleSignIn(); } catch (e) {}
    (function () {
        const gsiScript = document.getElementById('google-gsi-script');
        if (gsiScript) gsiScript.addEventListener('load', function () { try { initGoogleSignIn(); } catch (e) {} });
    })();

    // ============ Copy / Download helpers ============
    function renderResult(box, text, filename) {
        box.dataset.raw = text;
        box.classList.remove('hidden');
        box.innerHTML = `<div class="flex justify-end gap-2 mb-2">
            <button onclick="copyResult(this)" class="chip hover:bg-[var(--panel-2)]"><i class="fa-solid fa-copy"></i> <span>${I18N[currentUiLang].copy}</span></button>
            <button onclick="downloadResult(this, '${filename}')" class="chip hover:bg-[var(--panel-2)]"><i class="fa-solid fa-download"></i> <span>${I18N[currentUiLang].download}</span></button>
        </div>` + formatReportText(text);
    }
    function copyResult(btn) {
        const box = btn.closest('[data-raw]');
        const raw = box ? box.dataset.raw : '';
        navigator.clipboard.writeText(raw || '').then(() => flashCopied(btn));
    }
    function downloadResult(btn, filename) {
        const box = btn.closest('[data-raw]');
        const raw = box ? box.dataset.raw : '';
        triggerDownload(raw || '', filename || 'yusr-result.txt');
    }
    function flashCopied(btn) {
        const original = btn.innerHTML;
        btn.innerHTML = '<i class="fa-solid fa-check"></i> ' + (currentUiLang === 'en' ? 'Copied' : 'تم النسخ');
        btn.classList.add('copied-flash');
        setTimeout(() => { btn.innerHTML = original; btn.classList.remove('copied-flash'); }, 1500);
    }
    function triggerDownload(text, filename) {
        // ملحوظة: كانت الرموز الغريبة بتظهر عند فتح الملف النازل لأن الملف كان بينزل من غير BOM
        // فبرامج زي Notepad كانت بتفتحه بترميز غلط بدل UTF-8، فيظهر النص العربي مكسّر.
        // الحل: نضيف UTF-8 BOM (\uFEFF) في أول الملف، وده بيخلي أي برنامج يفتح النص صح دايماً.
        const BOM = '\uFEFF';
        const normalized = String(text ?? '').replace(/\r\n/g, '\n');
        const blob = new Blob([BOM + normalized], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a'); a.href = url; a.download = filename; document.body.appendChild(a); a.click(); a.remove();
        URL.revokeObjectURL(url);
    }
    function copyPlainText(text, btn) {
        navigator.clipboard.writeText(text).then(() => flashCopied(btn));
    }
    function copyChatTranscript() {
        const text = chatHistory.filter(m => m.role !== 'system').map(m => (m.role === 'assistant' ? currentInterviewerName + ': ' : 'أنت: ') + stripArabicDiacritics(m.content)).join('\n\n');
        navigator.clipboard.writeText(text);
        showToast(currentUiLang === 'en' ? 'Conversation copied!' : 'تم نسخ المحادثة!', 'success');
    }
    function downloadChatTranscript() {
        const text = chatHistory.filter(m => m.role !== 'system').map(m => (m.role === 'assistant' ? currentInterviewerName + ': ' : 'أنت: ') + stripArabicDiacritics(m.content)).join('\n\n');
        triggerDownload(text, 'interview-transcript.txt');
    }

    // ============ Speech recognition (interview mic) ============
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognition = new SR();
        recognition.lang = currentAppLang;
        recognition.continuous = false;
        recognition.onstart = () => {
            isRecording = true; recordStartTime = Date.now();
            document.getElementById('mic-btn').classList.add('bg-red-500/20', 'text-red-400', 'recording-pulse');
            document.getElementById('user-chat-input').placeholder = "جاري الاستماع إليك...";
        };
        recognition.onresult = (e) => {
            const t = e.results[0][0].transcript;
            recordSpeakingStats(t);
            document.getElementById('user-chat-input').value = t;
            stopMic(); sendUserAnswer();
        };
        recognition.onerror = () => stopMic();
        recognition.onend = () => stopMic();
    }
    function recordSpeakingStats(t) {
        const dur = Math.max(0.5, (Date.now() - recordStartTime) / 1000);
        const wc = t.trim().split(/\s+/).filter(Boolean).length;
        const wpm = Math.round((wc / dur) * 60);
        const fillers = (t.match(/(يعني|امم+|إمم+|اه+|آه+|خلاص بس|يعني كده)/g) || []).length;
        speakingStats.push({ t, dur: Math.round(dur), wc, wpm, fillers });
    }
    function toggleMic() {
        if (!recognition) return showToast("المتصفح لا يدعم التسجيل الصوتي المباشر.", 'error');
        if (isRecording) recognition.stop();
        else { stopSpeaking(); recognition.start(); }
    }
    function stopMic() {
        isRecording = false;
        document.getElementById('mic-btn').classList.remove('bg-red-500/20', 'text-red-400', 'recording-pulse');
        document.getElementById('user-chat-input').placeholder = "تحدث بالميكروفون أو اكتب هنا...";
    }

    // ============ Mic recording for transcription tool (يستخدم Whisper مش المتصفح، عشان دقة أعلى بكتير حتى مع الضوضاء) ============
    let isTranscribing = false, transcribeMediaRecorder = null, transcribeChunks = [], transcribeStream = null;
    async function toggleTranscribeMic() {
        const btn = document.getElementById('transcribe-mic-btn');
        const status = document.getElementById('transcribe-status');
        if (isTranscribing) {
            isTranscribing = false;
            btn.classList.remove('bg-red-500/20', 'text-red-400', 'recording-pulse');
            status.innerText = "جاري تفريغ التسجيل بدقة عالية...";
            if (transcribeMediaRecorder && transcribeMediaRecorder.state !== 'inactive') transcribeMediaRecorder.stop();
            return;
        }
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            showToast("المتصفح لا يدعم التسجيل الصوتي المباشر.", 'error'); return;
        }
        try {
            transcribeStream = await navigator.mediaDevices.getUserMedia({
                audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true }
            });
        } catch (e) {
            showToast("محتاج إذن الوصول للمايك عشان التسجيل يشتغل.", 'error'); return;
        }
        transcribeChunks = [];
        const mimeType = MediaRecorder.isTypeSupported('audio/webm;codecs=opus') ? 'audio/webm;codecs=opus' : (MediaRecorder.isTypeSupported('audio/mp4') ? 'audio/mp4' : '');
        transcribeMediaRecorder = mimeType ? new MediaRecorder(transcribeStream, { mimeType }) : new MediaRecorder(transcribeStream);
        transcribeMediaRecorder.ondataavailable = (e) => { if (e.data.size > 0) transcribeChunks.push(e.data); };
        transcribeMediaRecorder.onstop = async () => {
            transcribeStream.getTracks().forEach(t => t.stop());
            const blob = new Blob(transcribeChunks, { type: transcribeMediaRecorder.mimeType || 'audio/webm' });
            if (blob.size < 800) { status.innerText = "معلش، مسجّلش صوت كفاية. جرب تاني."; return; }
            if (!checkDeviceTrial()) { status.innerText = ''; return; }
            const previous = document.getElementById('transcribe-raw').value;
            try {
                const text = await transcribeAudioBlob(blob, 'mic-recording.webm');
                document.getElementById('transcribe-raw').value = (previous ? previous + ' ' : '') + text;
                status.innerText = "✓ اتفرّغ بنجاح. راجع النص تحت واضغط \"نظّف وحسّن التنسيق\".";
                incrementDeviceUsage();
            } catch (e) {
                console.warn('Mic transcription failed:', e);
                status.innerText = "تعذر تفريغ التسجيل. جرب تاني أو الصق النص يدوياً.";
            }
        };
        transcribeMediaRecorder.start();
        isTranscribing = true;
        btn.classList.add('bg-red-500/20', 'text-red-400', 'recording-pulse');
        status.innerText = "بيسجل دلوقتي بجودة عالية... اضغط تاني عشان توقف ويتفرّغ النص.";
    }
    function stopTranscribeMic() {
        isTranscribing = false;
        document.getElementById('transcribe-mic-btn').classList.remove('bg-red-500/20', 'text-red-400', 'recording-pulse');
        if (transcribeMediaRecorder && transcribeMediaRecorder.state !== 'inactive') transcribeMediaRecorder.stop();
    }

    function setVoiceGender(gender) {
        voiceGenderPref = gender === 'female' ? 'female' : 'male';
        localStorage.setItem('yusr_voice_gender', voiceGenderPref);
        updateVoiceGenderButtons();
    }
    function updateVoiceGenderButtons() {
        const maleBtn = document.getElementById('voice-gender-male-btn');
        const femaleBtn = document.getElementById('voice-gender-female-btn');
        if (!maleBtn || !femaleBtn) return;
        maleBtn.classList.toggle('active', voiceGenderPref === 'male');
        femaleBtn.classList.toggle('active', voiceGenderPref === 'female');
    }

    // بنسمي بيانات أسماء شائعة لأصوات عربية/إنجليزية مؤنثة عشان نقدر نميّز جنس صوت المتصفح
    // (Web Speech API نفسه مش بيدّي جنس الصوت رسمياً، فبنستنتجه من اسم الصوت).
    const FEMALE_VOICE_HINTS = ['female', 'woman', 'salma', 'zeina', 'laila', 'hoda', 'amira', 'fatima', 'samantha', 'victoria', 'zira', 'susan', 'karen', 'moira', 'tessa', 'fiona', 'amal'];
    const MALE_VOICE_HINTS = ['male', 'man', 'naayf', 'hamed', 'majed', 'tarik', 'fred', 'daniel', 'david', 'george', 'mark', 'alex'];

    function getBestBrowserVoice(gender) {
        if (!cachedBrowserVoices || !cachedBrowserVoices.length) cachedBrowserVoices = window.speechSynthesis.getVoices() || [];
        if (!cachedBrowserVoices.length) return null;
        const langPrefix = (currentAppLang || 'ar').slice(0, 2).toLowerCase();
        const sameLang = cachedBrowserVoices.filter(v => v.lang && v.lang.toLowerCase().startsWith(langPrefix));
        const pool = sameLang.length ? sameLang : cachedBrowserVoices;
        const hints = gender === 'female' ? FEMALE_VOICE_HINTS : MALE_VOICE_HINTS;
        const matched = pool.find(v => hints.some(h => v.name.toLowerCase().includes(h)));
        if (matched) return matched;
        // مفيش تلميح واضح في الاسم -> نرجع أول صوت بنفس اللغة بدل ما نسيب المتصفح يختار عشوائي
        return pool[0] || cachedBrowserVoices[0];
    }

    function stopSpeaking() {
        if ('speechSynthesis' in window) window.speechSynthesis.cancel();
        if (currentSpeakingAudio) {
            try { currentSpeakingAudio.pause(); currentSpeakingAudio.currentTime = 0; } catch (e) {}
            currentSpeakingAudio = null;
        }
        const indicator = document.getElementById('ai-speaking-indicator');
        if (indicator) indicator.classList.add('hidden');
    }

    async function speakText(text) {
        if (!isVoiceEnabled) return;
        stopSpeaking(); // نوقف أي صوت شغال قبل ما نبدأ الجديد، عشان محدش يتراكب فوق التاني
        const indicator = document.getElementById('ai-speaking-indicator');
        document.getElementById('status-text').innerText = `${currentInterviewerName} (HR) يتحدث...`;
        indicator.classList.remove('hidden');
        try {
            const langVoices = EDGE_TTS_VOICES[currentAppLang] || EDGE_TTS_VOICES["ar-EG"];
            const voice = langVoices[voiceGenderPref] || langVoices.male;
            const response = await fetch(`${CLOUD_FUNCTIONS_BASE}/edgeTtsSpeak`, {
                method: "POST",
                headers: { "Content-Type": "application/json", ...(await getAuthHeader()) },
                body: JSON.stringify({ text, voice })
            });
            if (response.ok) {
                const blob = await response.blob();
                const audio = new Audio(URL.createObjectURL(blob));
                currentSpeakingAudio = audio;
                audio.onended = () => { indicator.classList.add('hidden'); if (currentSpeakingAudio === audio) currentSpeakingAudio = null; };
                audio.onpause = () => { indicator.classList.add('hidden'); };
                await audio.play();
                return;
            } else console.warn("Edge TTS error:", response.status);
        } catch (e) { console.error("Edge TTS Voice Error:", e); }

        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text.replace(/[*_#`~]/g, ''));
            const bestVoice = getBestBrowserVoice(voiceGenderPref);
            if (bestVoice) { utterance.voice = bestVoice; utterance.lang = bestVoice.lang; }
            else utterance.lang = currentAppLang;
            utterance.pitch = voiceGenderPref === 'female' ? 1.15 : 0.9;
            utterance.rate = 0.95;
            utterance.onend = () => indicator.classList.add('hidden');
            utterance.onerror = () => indicator.classList.add('hidden');
            window.speechSynthesis.speak(utterance);
        } else indicator.classList.add('hidden');
    }

    // ============ Interview session persistence (يخلي المحاور "يفتكر" حتى لو قفلت الصفحة أو رجعت بعد شوية) ============
    function saveInterviewState() {
        try {
            localStorage.setItem(INTERVIEW_STATE_KEY, JSON.stringify({
                interviewRole, selectedNationality, chatHistory, speakingStats, currentInterviewerName, savedAt: Date.now()
            }));
        } catch (e) { /* التخزين ممكن يكون ممتلئ، مش مشكلة كبيرة نكمل من غير حفظ */ }
    }
    function clearInterviewState() { localStorage.removeItem(INTERVIEW_STATE_KEY); }
    function getSavedInterviewState() {
        try {
            const raw = localStorage.getItem(INTERVIEW_STATE_KEY);
            if (!raw) return null;
            const parsed = JSON.parse(raw);
            // فيه رد واحد على الأقل من المتقدم -> يستاهل نعرض خيار الاستكمال
            if (parsed && Array.isArray(parsed.chatHistory) && parsed.chatHistory.some(m => m.role === 'user')) return parsed;
            return null;
        } catch (e) { return null; }
    }
    function checkInterviewResumeBanner() {
        const banner = document.getElementById('interview-resume-banner');
        if (!banner) return;
        const saved = getSavedInterviewState();
        if (saved && document.getElementById('chat-interface').classList.contains('hidden')) {
            document.getElementById('interview-resume-role').innerText = saved.interviewRole || '';
            banner.classList.remove('hidden');
        } else banner.classList.add('hidden');
    }
    function resumeInterviewSession() {
        const saved = getSavedInterviewState();
        if (!saved) return;
        interviewRole = saved.interviewRole; selectedNationality = saved.selectedNationality;
        chatHistory = saved.chatHistory; speakingStats = saved.speakingStats || [];
        currentInterviewerName = saved.currentInterviewerName || (voiceGenderPref === 'female' ? 'مريم' : 'أحمد');
        document.getElementById('interview-resume-banner').classList.add('hidden');
        document.getElementById('interview-setup-box').classList.add('hidden');
        document.getElementById('chat-interface').classList.remove('hidden');
        document.getElementById('chat-interface').classList.add('flex');
        const box = document.getElementById('chat-history');
        box.innerHTML = '';
        chatHistory.filter(m => m.role !== 'system').forEach(m => appendChatMessage(m.role === 'assistant' ? 'ai' : 'user', m.content));
        showToast(`كملنا من نفس مكانك. ${currentInterviewerName} لسه فاكر كل اللي اتكلمتوا فيه.`, 'success');
    }
    function discardInterviewSession() {
        clearInterviewState();
        document.getElementById('interview-resume-banner').classList.add('hidden');
    }

    // ============ Interview flow ============
    async function startInterviewSession() {
        if (!checkDeviceTrial()) return;
        interviewRole = document.getElementById('interview-role').value;
        selectedNationality = document.getElementById('interviewer-nationality').value;
        if (!interviewRole) return showToast("يرجى كتابة اسم الوظيفة أولاً.", 'error');

        currentInterviewerName = voiceGenderPref === 'female' ? 'مريم' : 'أحمد';
        document.getElementById('interview-setup-box').classList.add('hidden');
        document.getElementById('interview-resume-banner').classList.add('hidden');
        document.getElementById('chat-interface').classList.remove('hidden');
        document.getElementById('chat-interface').classList.add('flex');
        document.getElementById('chat-history').innerHTML = '';
        speakingStats = [];
        clearInterviewState();

        const systemPrompt = `أنت ${voiceGenderPref === 'female' ? 'مديرة' : 'مدير'} HR خبير${voiceGenderPref === 'female' ? 'ة' : ''} واسمك (${currentInterviewerName}).
تجري مقابلة عمل مع المتقدم لوظيفة: (${interviewRole}).
الشخصية المطلوب المحاكاة بها: (${selectedNationality}).
${cvContent ? 'خبرات المتقدم: ' + cvContent : ''}
تعليمات:
1. اتكلم بطبيعية وسلاسة كأنك محاور حقيقي.
2. وجه سؤالاً واحداً مختصراً في كل مرة (سطرين كحد أقصى).
3. ابدأ فوراً بالتحية وسؤاله عن نفسه بخبرته.
4. لو ردك بالعربي، اكتبه بالفصحى مشكولاً بالكامل بعلامات التشكيل (فتحة/ضمة/كسرة/سكون/شدة) على كل كلمة عشان النطق الصوتي يبقى مضبوط. لو ردك بالإنجليزي، اكتبه بإنجليزية واضحة وسليمة النطق.`;

        chatHistory = [{ role: "system", content: systemPrompt }];
        appendChatMessage("ai", "جاري الاتصال بالمحاور...");
        incrementDeviceUsage();

        try {
            const aiResponse = await callGroqConversation(chatHistory);
            document.getElementById('chat-history').lastChild.remove();
            chatHistory.push({ role: "assistant", content: aiResponse });
            appendChatMessage("ai", aiResponse);
            speakText(aiResponse);
            saveInterviewState();
        } catch (err) {
            console.error(err);
            document.getElementById('chat-history').lastChild.remove();
            if (err && err.message === "usage_limit_or_auth_denied") {
                showToast("وصلت لحد استخدام باقتك الحالية، أو محتاج تسجّل دخول تاني. راجع باقتك أو جدد تسجيل دخولك.", 'error');
                document.getElementById('chat-interface').classList.add('hidden');
                document.getElementById('interview-setup-box').classList.remove('hidden');
                return;
            }
            const fallback = `أهلاً بيك! أنا ${currentInterviewerName} ${voiceGenderPref === 'female' ? 'مديرة' : 'مدير'} التوظيف، جاهز${voiceGenderPref === 'female' ? 'ة' : ''} نبدأ؟ عرفني بنفسك وبخبرتك في المجال ده.`;
            appendChatMessage("ai", fallback); speakText(fallback);
        }
    }

    async function sendUserAnswer() {
        const inputField = document.getElementById('user-chat-input');
        const userMsg = inputField.value.trim();
        if (!userMsg) return;
        appendChatMessage("user", userMsg);
        inputField.value = "";
        saveInterviewState();
        const indicator = document.getElementById('ai-speaking-indicator');
        document.getElementById('status-text').innerText = `${currentInterviewerName} يفكر في الرد...`;
        indicator.classList.remove('hidden');
        chatHistory.push({ role: "user", content: userMsg });
        try {
            const aiResponse = await callGroqConversation(chatHistory);
            incrementDeviceUsage();
            indicator.classList.add('hidden');
            chatHistory.push({ role: "assistant", content: aiResponse });
            appendChatMessage("ai", aiResponse);
            speakText(aiResponse);
            saveInterviewState();
        } catch (err) {
            indicator.classList.add('hidden');
            if (err && err.message === "usage_limit_or_auth_denied") {
                appendChatMessage("ai", "وصلت لحد استخدام باقتك الحالية، أو محتاج تسجّل دخول تاني عشان تكمل. راجع باقتك من صفحة الأسعار.");
            } else {
                appendChatMessage("ai", "معلش، حصلت مشكلة بسيطة في الشبكة.. ممكن تعيد إجابتك تاني؟");
            }
        }
    }

    // أكواد الرفض دي معناها إن الووركر شاف الطلب فعلاً وقرر يرفضه عمداً
    // (مش عطل شبكة أو سيرفر واقع).
    const DELIBERATE_DENIAL_STATUSES = new Set([401, 403, 429]);
    // مهلة زمنية لأي طلب شبكة هنا، عشان طلب معلّق ميعلقش الأداة لفترة غير محدودة.
    const NETWORK_TIMEOUT_MS = 20000;

    // fetch مع مهلة زمنية (AbortController) - حماية من طلبات معلّقة لأي وقت غير محدد
    async function fetchWithTimeout(url, options = {}, timeoutMs = NETWORK_TIMEOUT_MS) {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), timeoutMs);
        try {
            return await fetch(url, { ...options, signal: controller.signal });
        } finally {
            clearTimeout(timer);
        }
    }

    // ملحوظة أمان/خصوصية مهمة: العميل بيبعت بيانات حساسة (CV، ردود مقابلة، بيانات شخصية)
    // ضمن الرسايل دي. عمداً مفيش أي مسار بديل لسيرفر خارجي هنا — لو الووركر بتاعنا
    // فشل (لأي سبب، رفض متعمد أو عطل شبكة)، بنوقف ونطلب من المستخدم يحاول تاني، بدل
    // ما نسرّب محتوى المحادثة لجهة تالتة مالهاش دعوة بالموقع.
    async function callGroqConversation(messages) {
        if (typeof navigator !== 'undefined' && navigator.onLine === false) {
            throw new Error("مفيش اتصال بالإنترنت دلوقتي. أدوات الذكاء الاصطناعي محتاجة نت عشان تشتغل — جرب تاني لما النت يرجع.");
        }
        try {
            const response = await fetchWithTimeout(`${CLOUD_FUNCTIONS_BASE}/groqChat`, {
                method: "POST",
                headers: { "Content-Type": "application/json", ...(await getAuthHeader()) },
                body: JSON.stringify({ messages })
            });
            if (response.ok) {
                const data = await response.json();
                return data.content;
            }
            const errBody = await response.text().catch(() => "");
            console.warn("Groq (via Cloud Function) error:", response.status, errBody);
            if (DELIBERATE_DENIAL_STATUSES.has(response.status)) {
                throw new Error("usage_limit_or_auth_denied");
            }
            throw new Error("groq_service_error");
        } catch (e) {
            if (e && e.message === "usage_limit_or_auth_denied") throw e;
            console.warn("مسار Groq تعذر:", e);
            if (typeof navigator !== 'undefined' && navigator.onLine === false) {
                throw new Error("مفيش اتصال بالإنترنت دلوقتي. أدوات الذكاء الاصطناعي محتاجة نت عشان تشتغل — جرب تاني لما النت يرجع.");
            }
            throw new Error("فشل الاتصال بالذكاء الاصطناعي، حاول تاني بعد شوية.");
        }
    }

    // ============ Performance report ============
    function openReportModal() { document.getElementById('report-modal').classList.remove('hidden'); }
    function closeReportModal() { document.getElementById('report-modal').classList.add('hidden'); }

    async function generatePerformanceReport() {
        const answered = chatHistory.filter(m => m.role === 'user').length;
        if (answered < 2) return showToast("كمّل شوية أسئلة كمان الأول عشان نقدر نديك تقييم دقيق.", 'error');
        openReportModal();
        const body = document.getElementById('report-body');
        body.innerHTML = spinnerHTML("جاري تحليل أدائك بالتفصيل...");

        let voiceInsights = "المتقدم كتب أغلب إجاباته بدل التحدث، فمفيش بيانات كافية عن سرعة الكلام أو التردد.";
        if (speakingStats.length > 0) {
            const avgWpm = Math.round(speakingStats.reduce((a, s) => a + (s.wpm || 0), 0) / speakingStats.length);
            const totalFillers = speakingStats.reduce((a, s) => a + s.fillers, 0);
            voiceInsights = `تحدث بالميكروفون في ${speakingStats.length} إجابة. متوسط السرعة ${avgWpm} كلمة/دقيقة (الطبيعي الهادئ 110-150). كلمات التردد الكلية: ${totalFillers}. استخدمهم كمؤشر تقريبي فقط.`;
        }
        const transcript = chatHistory.filter(m => m.role !== 'system').map(m => (m.role === 'assistant' ? currentInterviewerName + ': ' : 'المتقدم: ') + m.content).join('\n');

        const prompt = [
            { role: "system", content: `أنت خبير تدريب مقابلات محترف وصريح جداً. حلل نص المقابلة وابنِ تقرير بنفس الترتيب: 1) تقييم عام من 100 مع السبب 2) نقاط قوة بأمثلة حقيقية من كلامه 3) نقاط تحسين محددة إجابة بإجابة 4) مستوى الثقة والتوتر بناءً على أسلوب كلامه وبيانات السرعة/التردد المرفقة، بصراحة ووضوح 5) 3-5 نصائح عملية فورية 6) خلاصة تحفيزية قصيرة. اكتب بأسلوب واضح مباشر بدون رموز markdown.` },
            { role: "user", content: `بيانات صوتية:\n${voiceInsights}\n\nنص المقابلة:\n${transcript}` }
        ];
        try {
            const reportText = await callGroqConversation(prompt);
            renderResult(body, reportText, 'performance-report.txt');
            addProgressEntry(interviewRole, reportText);
        }
        catch (e) { body.innerHTML = errorHTML("تعذر توليد التقرير الآن، جرب تاني بعد شوية."); }
    }

    // ============ FAQ generator ============
    async function runFaqGenerator() {
        const role = document.getElementById('faq-role').value.trim();
        if (!role) return showToast("اكتب اسم الوظيفة أولاً.", 'error');
        if (!checkDeviceTrial()) return;
        const count = document.getElementById('faq-count').value;
        const level = document.getElementById('faq-level').value;
        const box = document.getElementById('faq-result');
        box.classList.remove('hidden'); box.innerHTML = spinnerHTML("جاري تجهيز الأسئلة...");
        incrementDeviceUsage();
        const messages = [
            { role: "system", content: `أنت مدير توظيف (HR) بخبرة 15 سنة في تعيين لوظيفة "${role}" تحديداً على مستوى "${level}"، وعارف فعلاً إيه اللي بيتسأل في المقابلات الحقيقية للوظيفة دي في سوق العمل (سواء أسئلة عامة، أو أسئلة سلوكية/موقفية، أو أسئلة تقنية/مهنية خاصة بمجال الوظيفة نفسه لو الوظيفة فنية).
جهّز بالظبط ${count} سؤال، بالمعايير دي:
- الأسئلة لازم تكون حقيقية ومحددة لوظيفة "${role}" على مستوى "${level}" — مش أسئلة عامة تصلح لأي وظيفة أو أي مستوى خبرة. لو الوظيفة فيها جانب تقني (زي برمجة، محاسبة، هندسة، تصميم...) لازم تشمل أسئلة تقنية دقيقة فعلاً بيتسألها في المجال ده، بعمق يناسب المستوى ده تحديداً (خريج جديد يتسأل عن أساسيات ومواقف تعلّم، سينيور أو مدير يتسأل عن قرارات استراتيجية وإدارة فريق ومشاكل معقدة حقيقية).
- ممنوع أي سؤال حشو أو عام جداً ينفع لأي وظيفة تانية؛ كل سؤال لازم يكون مربوط بمهارة أو مسؤولية فعلية مذكورة عادةً في وصف وظيفة "${role}".
- نوّع بين: أسئلة عن الخبرة والدافع، أسئلة سلوكية (STAR)، أسئلة تقنية/مهنية لو الوظيفة تتطلب ده، وسؤال أو اتنين عن التعامل مع مواقف صعبة شائعة في الوظيفة دي بالذات وعلى المستوى ده.
- كل سؤال ومعاه "الإجابة النموذجية:" بإجابة واقعية مقنعة (4-6 أسطر) مبنية على أسلوب STAR لو مناسب، وتتضمن تفاصيل ملموسة (أرقام، أدوات، مصطلحات المجال) مش كلام عام إنشائي، وتنتهي بنقطة تفرّق المتقدم عن غيره.
- ممنوع تكرار نفس فكرة السؤال بصيغة تانية.
رقّم الأسئلة بالترتيب. بدون رموز markdown.` },
            { role: "user", content: `وظيفة: ${role} — المستوى: ${level}` }
        ];
        try { renderResult(box, await callGroqConversation(messages), 'faq-answers.txt'); }
        catch (e) { box.innerHTML = errorHTML("تعذر التجهيز، حاول تاني."); }
    }

    // ============ Career planner ============
    async function runCareerPlanner() {
        const current = document.getElementById('career-current').value.trim();
        const target = document.getElementById('career-target').value.trim();
        if (!current || !target) return showToast("اكتب وضعك الحالي وهدفك الأول.", 'error');
        if (!checkDeviceTrial()) return;
        const context = document.getElementById('career-context').value.trim();
        const isSummary = document.getElementById('career-length').value === 'summary';
        const box = document.getElementById('career-result');
        box.classList.remove('hidden'); box.innerHTML = spinnerHTML(isSummary ? "جاري تجهيز الملخص..." : "جاري بناء خطتك...");
        incrementDeviceUsage();
        const detailedInstruction = `ابنِ خطة عملية واقعية بمراحل زمنية تقريبية (مثلاً أول 3 شهور، 6 شهور، سنة) توصل الشخص من وضعه الحالي لهدفه، تشمل: المهارات المطلوب اكتسابها، مصادر تعلم عامة (نوع الدورة/الشهادة مش رابط محدد)، خطوات عملية، ونصيحة لبناء بورتفوليو أو خبرة عملية في المجال الجديد.`;
        const summaryInstruction = `ملخص سريع جداً وواضح، بحد أقصى 6-8 أسطر: 1) جملة توضح الفجوة بين وضعه وهدفه 2) أهم 3-4 مهارات لازم يركز عليها بالترتيب 3) جدول زمني تقريبي واحد بسيط (مثلاً "3 شهور: كذا، 6 شهور: كذا") 4) خطوة عملية واحدة يبدأ بيها من بكرة. من غير حشو أو تكرار، وكل جملة تفيد فعلاً.`;
        const messages = [
            { role: "system", content: `أنت مستشار تطوير مهني محترف. ${isSummary ? summaryInstruction : detailedInstruction} بدون رموز markdown.` },
            { role: "user", content: `الوضع الحالي: ${current}\nالهدف: ${target}\n${context ? 'تفاصيل إضافية: ' + context : ''}` }
        ];
        try { renderResult(box, await callGroqConversation(messages), 'career-plan.txt'); }
        catch (e) { box.innerHTML = errorHTML("تعذر بناء الخطة، حاول تاني."); }
    }

    // ============ CV builder (two independent modes) ============
    function switchCvTab(tab) {
        const plainTab = document.getElementById('cv-tab-plain');
        const liTab = document.getElementById('cv-tab-linkedin');
        const plainBtn = document.getElementById('cv-tab-btn-plain');
        const liBtn = document.getElementById('cv-tab-btn-linkedin');
        const activeCls = ['bg-[#2a2f36]', 'text-slate-100'];
        if (tab === 'linkedin') {
            plainTab.classList.add('hidden'); liTab.classList.remove('hidden');
            liBtn.classList.add('bg-[#2a2f36]', 'text-slate-100'); liBtn.classList.remove('text-slate-400');
            liBtn.style.boxShadow = 'inset 0 0 0 1px #3a4048';
            plainBtn.classList.remove('bg-[#2a2f36]', 'text-slate-100'); plainBtn.classList.add('text-slate-400');
            plainBtn.style.boxShadow = '';
        } else {
            liTab.classList.add('hidden'); plainTab.classList.remove('hidden');
            plainBtn.classList.add('bg-[#2a2f36]', 'text-slate-100'); plainBtn.classList.remove('text-slate-400');
            plainBtn.style.boxShadow = 'inset 0 0 0 1px #3a4048';
            liBtn.classList.remove('bg-[#2a2f36]', 'text-slate-100'); liBtn.classList.add('text-slate-400');
            liBtn.style.boxShadow = '';
        }
    }
    function previewCvLiPhoto(e) {
        const file = e.target.files[0]; if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
            document.getElementById('cv-li-photo-preview').src = reader.result;
            document.getElementById('cv-li-photo-preview').classList.remove('hidden');
            document.getElementById('cv-li-photo-icon').classList.add('hidden');
        };
        reader.readAsDataURL(file);
    }
    async function runCvBuilder(variant) {
        variant = variant === 'linkedin' ? 'linkedin' : 'plain';
        const prefix = variant === 'linkedin' ? 'cv-li-' : 'cv-plain-';
        const name = document.getElementById(prefix + 'name').value.trim();
        const title = document.getElementById(prefix + 'title').value.trim();
        const exp = document.getElementById(prefix + 'experience').value.trim();
        if (!name || !exp) return showToast("اكتب اسمك وخبراتك على الأقل.", 'error');
        if (!checkDeviceTrial()) return;
        const edu = document.getElementById(prefix + 'education').value.trim();
        const skills = document.getElementById(prefix + 'skills').value.trim();
        const box = document.getElementById(variant === 'linkedin' ? 'cv-result-linkedin' : 'cv-result-plain');
        box.classList.remove('hidden'); box.innerHTML = spinnerHTML("جاري صياغة سيرتك الذاتية...");
        incrementDeviceUsage();

        let messages;
        if (variant === 'linkedin') {
            const phone = document.getElementById('cv-li-phone').value.trim();
            const email = document.getElementById('cv-li-email').value.trim();
            const linkedin = document.getElementById('cv-li-linkedin').value.trim();
            const location = document.getElementById('cv-li-location').value.trim();
            messages = [
                { role: "system", content: `أنت خبير كتابة سير ذاتية بستايل لينكد إن الاحترافي. اكتب سيرة ذاتية بنفس روح صفحة لينكد إن: تبدأ بسطر "معلومات التواصل" يجمع الهاتف والإيميل ورابط لينكد إن والمدينة لو موجودين، بعدين قسم "About / نبذة تعريفية" قصير وقوي، بعدين "الخبرة العملية" بترتيب زمني عكسي وبجمل فعل نشطة وإنجازات مبنية على أرقام لو أمكن استنتاجها، بعدين "التعليم"، وأخيراً "المهارات". رتّبها بعناوين نصية واضحة بدون رموز markdown، جاهزة للنسخ مباشرة.` },
                { role: "user", content: `الاسم: ${name}\nالمسمى المستهدف: ${title}\nمعلومات التواصل: هاتف: ${phone || '-'} | إيميل: ${email || '-'} | لينكد إن: ${linkedin || '-'} | الموقع: ${location || '-'}\nالخبرات: ${exp}\nالمؤهلات: ${edu}\nالمهارات: ${skills}` }
            ];
        } else {
            messages = [
                { role: "system", content: `أنت خبير كتابة سير ذاتية احترافية. اكتب سيرة ذاتية نصية عادية (بدون أي إشارة لصورة) منظمة بصياغة قوية وجمل فعل نشطة وإنجازات مبنية على أرقام لو أمكن استنتاجها من الكلام، بالأقسام: ملخص احترافي قصير، الخبرات العملية، المؤهلات، المهارات. رتّبها بعناوين نصية واضحة بدون رموز markdown، جاهزة للنسخ مباشرة في Word.` },
                { role: "user", content: `الاسم: ${name}\nالمسمى المستهدف: ${title}\nالخبرات: ${exp}\nالمؤهلات: ${edu}\nالمهارات: ${skills}` }
            ];
        }
        try {
            const resultText = await callGroqConversation(messages);
            if (variant === 'linkedin') renderCvLinkedInResult(box, resultText);
            else renderResult(box, resultText, 'cv.txt');
        }
        catch (e) { box.innerHTML = errorHTML("تعذر إنشاء السيرة الذاتية، حاول تاني."); }
    }

    // بنعرض نتيجة سيرة اللينكد إن بنفس أزرار النسخ/التنزيل العادية + زرار إضافي لحفظها كصورة بستايل لينكد إن فعلي
    function renderCvLinkedInResult(box, text) {
        box.dataset.raw = text;
        box.classList.remove('hidden');
        box.innerHTML = `<div class="flex flex-wrap justify-end gap-2 mb-2">
            <button onclick="copyResult(this)" class="chip hover:bg-[var(--panel-2)]"><i class="fa-solid fa-copy"></i> <span>${I18N[currentUiLang].copy}</span></button>
            <button onclick="downloadResult(this, 'cv-linkedin-style.txt')" class="chip hover:bg-[var(--panel-2)]"><i class="fa-solid fa-download"></i> نص فقط</button>
            <button onclick="exportCvLinkedInImage()" class="chip hover:bg-[var(--panel-2)]"><i class="fa-brands fa-linkedin"></i> احفظ كصورة (ستايل لينكد إن)</button>
        </div>` + formatReportText(text);
    }

    async function exportCvLinkedInImage() {
        if (typeof html2canvas === 'undefined') { showToast('تعذر تحميل أداة التصوير، تأكد من الاتصال بالإنترنت وحاول تاني.', 'error'); return; }
        const box = document.getElementById('cv-result-linkedin');
        const text = (box && box.dataset.raw) || '';
        if (!text) { showToast('جهّز السيرة الذاتية الأول.', 'error'); return; }
        const card = document.getElementById('cv-li-card');
        const photoSrc = document.getElementById('cv-li-photo-preview').src;
        const photoImg = document.getElementById('cv-li-card-photo');
        if (photoSrc && !document.getElementById('cv-li-photo-preview').classList.contains('hidden')) {
            photoImg.src = photoSrc; photoImg.style.display = '';
        } else { photoImg.removeAttribute('src'); photoImg.style.display = 'none'; }
        document.getElementById('cv-li-card-name').textContent = document.getElementById('cv-li-name').value.trim() || 'الاسم الكامل';
        document.getElementById('cv-li-card-title').textContent = document.getElementById('cv-li-title').value.trim() || '';
        const contactParts = [
            document.getElementById('cv-li-phone').value.trim(),
            document.getElementById('cv-li-email').value.trim(),
            document.getElementById('cv-li-linkedin').value.trim(),
            document.getElementById('cv-li-location').value.trim()
        ].filter(Boolean);
        const contactEl = document.getElementById('cv-li-card-contact');
        contactEl.innerHTML = '';
        contactParts.forEach(p => { const span = document.createElement('span'); span.textContent = p; contactEl.appendChild(span); });
        document.getElementById('cv-li-card-body').textContent = text;

        card.classList.remove('hidden');
        card.style.left = '0'; card.style.top = '0'; card.style.zIndex = '-1'; card.style.opacity = '0'; card.style.pointerEvents = 'none';
        try {
            const canvas = await html2canvas(card, { backgroundColor: '#ffffff', scale: 2, useCORS: true });
            canvas.toBlob((blob) => {
                if (!blob) { showToast('تعذر إنشاء الصورة، حاول تاني.', 'error'); return; }
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a'); a.href = url; a.download = 'cv-linkedin-style.png';
                document.body.appendChild(a); a.click(); a.remove();
                URL.revokeObjectURL(url);
            }, 'image/png');
        } catch (e) {
            console.warn('CV LinkedIn image export failed:', e);
            showToast('تعذر تصوير السيرة الذاتية، حاول تاني.', 'error');
        } finally {
            card.classList.add('hidden'); card.style.left = '-9999px'; card.style.zIndex = ''; card.style.opacity = ''; card.style.pointerEvents = '';
        }
    }

    // ============ Portfolio (guided AI Q&A) ============
    let pfChatHistory = [];
    function startPortfolioChat() {
        const field = document.getElementById('pf-field').value.trim();
        if (!field) return showToast("اكتب مجالك أولاً.", 'error');
        document.getElementById('pf-setup-box').classList.add('hidden');
        document.getElementById('pf-chat-interface').classList.remove('hidden');
        document.getElementById('pf-chat-interface').classList.add('flex');
        document.getElementById('pf-chat-history').innerHTML = '';
        const systemPrompt = `أنت مستشار بناء بورتفوليوهات محترف. المستخدم مجاله: (${field}). مهمتك تسأله أسئلة قصيرة ومباشرة (سؤال واحد كل مرة، سطر أو سطرين) عشان تجمع منه: أهم مشاريعه/أعماله، الأدوات والمهارات المستخدمة، أكبر إنجاز حقق نتيجة ملموسة، الجمهور المستهدف من البورتفوليو، والأسلوب/النبرة اللي يفضلها (رسمي/إبداعي/بسيط). اسأل سؤال واحد بس في كل رد، وابدأ فوراً بسؤال عن أهم مشروعين أو أعمال عنده.`;
        pfChatHistory = [{ role: "system", content: systemPrompt }];
        appendPfMessage("ai", "جاري تجهيز الأسئلة...");
        callGroqConversation(pfChatHistory).then(res => {
            document.getElementById('pf-chat-history').lastChild.remove();
            pfChatHistory.push({ role: "assistant", content: res });
            appendPfMessage("ai", res);
        }).catch(() => {
            document.getElementById('pf-chat-history').lastChild.remove();
            const fallback = "احكيلي عن أهم مشروعين أو أعمال عملتهم في مجالك، مع وصف بسيط لكل واحد.";
            pfChatHistory.push({ role: "assistant", content: fallback });
            appendPfMessage("ai", fallback);
        });
    }
    function appendPfMessage(sender, message, isRawHtml) {
        const box = document.getElementById('pf-chat-history');
        const div = document.createElement('div');
        const safeMessage = isRawHtml ? message : escapeHtml(message);
        if (sender === "ai") {
            div.className = "panel border border-[var(--border)] p-3 rounded-xl text-xs sm:text-sm";
            div.innerHTML = `<div class="flex items-center gap-1 text-slate-300 font-bold text-[10px] mb-1"><i class="fa-solid fa-wand-magic-sparkles"></i> المساعد</div><div>${safeMessage}</div>`;
        } else {
            div.className = "bg-[#262b32] border border-[var(--border)] p-3 rounded-xl text-xs sm:text-sm mr-4";
            div.innerHTML = `<div class="flex items-center gap-1 text-slate-400 font-bold text-[10px] mb-1"><i class="fa-solid fa-user"></i> أنت</div><div>${safeMessage}</div>`;
        }
        box.appendChild(div); box.scrollTop = box.scrollHeight;
    }
    async function sendPortfolioAnswer() {
        const input = document.getElementById('pf-chat-input');
        const msg = input.value.trim(); if (!msg) return;
        appendPfMessage("user", msg); input.value = "";
        pfChatHistory.push({ role: "user", content: msg });
        appendPfMessage("ai", '<i class="fa-solid fa-spinner fa-spin"></i>', true);
        try {
            const res = await callGroqConversation(pfChatHistory);
            document.getElementById('pf-chat-history').lastChild.remove();
            pfChatHistory.push({ role: "assistant", content: res });
            appendPfMessage("ai", res);
        } catch (e) {
            document.getElementById('pf-chat-history').lastChild.remove();
            appendPfMessage("ai", "معلش حصلت مشكلة، اكتب إجابتك تاني.");
        }
    }
    function copyPfTranscript() {
        const text = pfChatHistory.filter(m => m.role !== 'system').map(m => (m.role === 'assistant' ? 'المساعد: ' : 'أنت: ') + m.content).join('\n\n');
        navigator.clipboard.writeText(text);
        showToast(currentUiLang === 'en' ? 'Copied!' : 'تم النسخ!', 'success');
    }
    async function runPortfolioBuilder() {
        if (pfChatHistory.filter(m => m.role === 'user').length < 1) return showToast("جاوب على سؤال أو اتنين الأول عشان نقدر نجهزلك محتوى حقيقي.", 'error');
        if (!checkDeviceTrial()) return;
        const box = document.getElementById('portfolio-result');
        box.classList.remove('hidden'); box.innerHTML = spinnerHTML("جاري تجهيز محتوى البورتفوليو...");
        incrementDeviceUsage();
        const convo = pfChatHistory.filter(m => m.role !== 'system').map(m => (m.role === 'assistant' ? 'سؤال: ' : 'إجابة: ') + m.content).join('\n');
        const messages = [
            { role: "system", content: `أنت مستشار بناء بورتفوليوهات احترافية. بناءً على الحوار المرفق مع المستخدم، جهّز محتوى نصي منظم لصفحة بورتفوليو شخصي: نبذة تعريفية جذابة (About)، وصف احترافي مقنع لكل مشروع بأسلوب يبرز النتيجة والقيمة مش بس الوصف التقني، واقتراح لعناوين الأقسام الرئيسية للصفحة. بدون رموز markdown.` },
            { role: "user", content: `مجال المستخدم: ${document.getElementById('pf-field').value.trim()}\n\nالحوار:\n${convo}` }
        ];
        try { renderResult(box, await callGroqConversation(messages), 'portfolio.txt'); }
        catch (e) { box.innerHTML = errorHTML("تعذر التجهيز، حاول تاني."); }
    }

    // ============ Academic writing review ============
    async function runWritingReview() {
        const text = document.getElementById('writing-input').value.trim();
        if (!text) return showToast("الصق النص أولاً.", 'error');
        if (!checkDeviceTrial()) return;
        const mode = document.getElementById('writing-mode').value;
        const topic = document.getElementById('writing-topic').value.trim();
        const box = document.getElementById('writing-result');
        box.classList.remove('hidden'); box.innerHTML = spinnerHTML("جاري المراجعة...");
        incrementDeviceUsage();
        const messages = [
            { role: "system", content: `أنت مدقق لغوي وأكاديمي محترف جداً، دقيق ومنهجي، بمستوى مراجع في مجلة علمية محكّمة. مهمتك: ${mode}.
اتبع المنهجية دي بالحرف، وراجع النص جملة جملة بعناية شديدة قبل ما ترد، من غير ما تتسرع أو تتجاهل أخطاء بسيطة:
1) الأخطاء الإملائية والنحوية: اذكر كل خطأ حقيقي على حدة بالشكل: "الخطأ: [النص الأصلي] ← التصحيح: [النص الصحيح] — السبب: [شرح مختصر قاعدي]". ممنوع تختلق أخطاء مش موجودة فعلاً، وممنوع تتجاهل خطأ واضح موجود في النص.
2) لو المطلوب تنسيق أكاديمي (APA/Harvard أو غيره): اقترح تعديلات محددة وقابلة للتنفيذ فوراً للهوامش، ترقيم الصفحات، تنسيق العناوين (مستوى 1/2/3)، طريقة كتابة الاقتباسات داخل النص، وطريقة كتابة قائمة المراجع بالأسلوب المطلوب بالظبط مع مثال واحد توضيحي مبني على الأسلوب ده. وضّح إنها توصيات يطبّقها المستخدم بنفسه في Word، إنت مش بتنسق ملف فعلي.
3) في الآخر اكتب "تقييم عام" من 10 لجودة الصياغة الأكاديمية مع سبب مختصر للتقييم، وأهم نقطتين لتحسين مستوى النص بشكل عام (أسلوب، ترابط أفكار، وضوح).
كن دقيقاً وصارماً ولا تتساهل، لكن كن منصفاً ولا تخترع مشاكل غير موجودة. بدون رموز markdown.` },
            { role: "user", content: `${topic ? 'موضوع البحث: ' + topic + '\n\n' : ''}النص:\n${text}` }
        ];
        try { renderResult(box, await callGroqConversation(messages), 'writing-review.txt'); }
        catch (e) { box.innerHTML = errorHTML("تعذرت المراجعة، حاول تاني."); }
    }

    // ============ Academic writing: abstract generator ============
    async function runWritingAbstract() {
        const text = document.getElementById('writing-input').value.trim();
        if (!text) return showToast("الصق النص أولاً.", 'error');
        if (!checkDeviceTrial()) return;
        const topic = document.getElementById('writing-topic').value.trim();
        const box = document.getElementById('writing-abstract-result');
        box.classList.remove('hidden'); box.innerHTML = spinnerHTML("جاري توليد الملخص الأكاديمي...");
        incrementDeviceUsage();
        const messages = [
            { role: "system", content: `أنت خبير كتابة أكاديمية. اكتب "Abstract" أكاديمي احترافي واحد فقط للنص المُعطى، بطول 150-220 كلمة، بأسلوب أكاديمي رسمي ومكثّف (بدون إنشاء زائد)، يغطي بالترتيب: هدف البحث/المقال، المنهجية أو الطريقة المتبعة لو مذكورة أو مفهومة من النص، أهم النتائج أو الأفكار الرئيسية، والخلاصة أو الأهمية. اكتبه فقرة واحدة متصلة زي أي Abstract حقيقي في بحث علمي، من غير عناوين فرعية ومن غير رموز markdown. اكتبه بنفس لغة النص الأصلي.` },
            { role: "user", content: `${topic ? 'موضوع البحث: ' + topic + '\\n\\n' : ''}النص:\\n${text}` }
        ];
        try { renderResult(box, await callGroqConversation(messages), 'academic-abstract.txt'); }
        catch (e) { box.innerHTML = errorHTML("تعذر توليد الملخص، حاول تاني."); }
    }

    // ============ Academic writing: vocabulary & tone booster ============
    async function runWritingVocabBooster() {
        const text = document.getElementById('writing-input').value.trim();
        if (!text) return showToast("الصق النص أولاً.", 'error');
        if (!checkDeviceTrial()) return;
        const box = document.getElementById('writing-vocab-result');
        box.classList.remove('hidden'); box.innerHTML = spinnerHTML("جاري تقوية الأسلوب...");
        incrementDeviceUsage();
        const messages = [
            { role: "system", content: `أنت مدقق أسلوب أكاديمي متخصص في رفع مستوى الصياغة. اقرأ النص وحدد فقط الجمل أو الكلمات اللي أسلوبها عامي/إنشائي/ضعيف أكاديمياً (تكرار كلمات، عبارات فضفاضة، جمل طويلة مبهمة)، واكتب لكل حالة: "الأصل: [النص] ← بديل أقوى: [صياغة أكاديمية أدق وأكثر احترافية بنفس المعنى بالظبط]". لو النص فيه تكرار ملحوظ لنفس الكلمة أو المصطلح، اقترح مرادفات أكاديمية متنوعة له. اختم بـ"ملاحظة عامة عن الأسلوب" من سطرين. ممنوع تغيير المعنى أو تلفيق محتوى جديد، وممنوع تعليق على أخطاء إملائية/نحوية (دي مسؤولية أداة التدقيق التانية). بدون رموز markdown.` },
            { role: "user", content: text }
        ];
        try { renderResult(box, await callGroqConversation(messages), 'academic-vocab-boost.txt'); }
        catch (e) { box.innerHTML = errorHTML("تعذرت المعالجة، حاول تاني."); }
    }

    // ============ Summarizer ============
    async function runSummarizer() {
        const text = document.getElementById('summarizer-input').value.trim();
        if (!text) return showToast("يرجى لصق نص أولاً.", 'error');
        if (!checkDeviceTrial()) return;
        const styleKey = document.getElementById('summary-style').value;
        const box = document.getElementById('summarizer-result');
        box.classList.remove('hidden'); box.innerHTML = spinnerHTML("جاري التلخيص...");
        incrementDeviceUsage();
        const STYLE_INSTRUCTIONS = {
            short: 'اكتب ملخص قصير جداً وواضح في 2-3 جمل بس (أقصى حاجة 50 كلمة)، يوصّل جوهر الموضوع بسرعة لحد مستعجل ومحتاج يفهم الفكرة العامة بس من غير أي تفاصيل جانبية.',
            bullets: 'لخّص في شكل نقاط مختصرة (5 نقاط كحد أقصى)، كل نقطة سطر واحد بس يحمل فكرة رئيسية واحدة، من غير حشو.',
            paragraph: 'لخّص في فقرة واحدة مترابطة ومركزة (100-150 كلمة تقريباً)، تجمع أهم الأفكار في سرد متصل من غير عناوين أو نقاط.',
            detailed: 'اكتب ملخص تفصيلي منظم بعناوين فرعية واضحة يغطي كل الأفكار والنقاط المهمة في النص الأصلي بترتيب منطقي، لكن برضه أقصر بكتير من النص الأصلي ومن غير أي تكرار أو حشو.'
        };
        const instruction = STYLE_INSTRUCTIONS[styleKey] || STYLE_INSTRUCTIONS.bullets;
        const messages = [
            { role: "system", content: `أنت مساعد تلخيص نصوص محترف. ${instruction} كن دقيقاً واحتفظ بالجوهر والمعنى الأصلي فقط بدون إضافة معلومات مش موجودة في النص، والتزم بطول الملخص المطلوب بالظبط ولا تتجاوزه. بدون رموز markdown.` },
            { role: "user", content: text }
        ];
        try { renderResult(box, await callGroqConversation(messages), 'summary.txt'); }
        catch (e) { box.innerHTML = errorHTML("تعذر التلخيص، حاول تاني."); }
    }

    // ============ CV Job Match ============
    function fillMatchResumeFromSaved() {
        if (!cvContent) { showToast("مفيش CV محفوظ لسه، اضغط 'ربط الـ CV' واكتب خبراتك الأول.", 'error'); return; }
        document.getElementById('cv-match-resume').value = cvContent;
    }
    async function runCvJobMatch() {
        const resume = document.getElementById('cv-match-resume').value.trim() || cvContent;
        const jobDesc = document.getElementById('cv-match-jobdesc').value.trim();
        if (!resume) return showToast("اكتب سيرتك الذاتية أو اربطها الأول.", 'error');
        if (!jobDesc) return showToast("الصق وصف الوظيفة أولاً.", 'error');
        if (!checkDeviceTrial()) return;
        const box = document.getElementById('cv-match-result');
        box.classList.remove('hidden'); box.innerHTML = spinnerHTML("جاري تحليل نسبة التوافق...");
        incrementDeviceUsage();
        const messages = [
            { role: "system", content: `أنت خبير توظيف وتحليل أنظمة ATS. قارن بين السيرة الذاتية ووصف الوظيفة المرفقين، واكتب تقريراً بالترتيب: 1) نسبة توافق تقريبية من 100 مع سطر شرح مختصر للسبب (اكتب الرقم بصيغة "نسبة التوافق: XX/100") 2) أهم نقاط التطابق الموجودة فعلاً في السيرة الذاتية 3) أهم نقاط الضعف أو الخبرات الناقصة مقارنة بمتطلبات الوظيفة 4) قائمة كلمات مفتاحية مهمة موجودة في وصف الوظيفة وغير موجودة في السيرة الذاتية، ينصح بإضافتها بصياغة صحيحة لزيادة فرصة القبول في الفلترة الآلية. بدون رموز markdown.` },
            { role: "user", content: `وصف الوظيفة:\n${jobDesc}\n\nالسيرة الذاتية:\n${resume}` }
        ];
        try { renderResult(box, await callGroqConversation(messages), 'cv-job-match.txt'); }
        catch (e) { box.innerHTML = errorHTML("تعذر التحليل، حاول تاني."); }
    }

    // ============ Cover Letter / recruitment messages generator ============
    // ============ CV import from photo/file → feeds the outreach message generator ============
    const CV_IMPORT_MAX_BYTES = 8 * 1024 * 1024; // 8MB - حماية من رفع ملفات ضخمة تستهلك الذاكرة/الشبكة
    async function extractCvFromFile(event) {
        const file = event.target.files[0]; if (!file) return;
        event.target.value = ''; // نصفّر الـ input عشان يقدر يختار نفس الملف تاني لو عايز
        const statusEl = document.getElementById('cover-cv-extract-status');
        const extractBox = document.getElementById('cover-cv-extract');
        if (!file.type || !file.type.startsWith('image/')) {
            statusEl.textContent = 'الأداة بتقرأ صور بس دلوقتي (صورة أو سكرين شوت للـ CV)، من فضلك ارفع صورة.';
            return;
        }
        if (file.size > CV_IMPORT_MAX_BYTES) {
            statusEl.textContent = 'حجم الصورة كبير جداً (أقصى حجم 8MB)، جرب صورة أصغر.';
            return;
        }
        if (!checkDeviceTrial()) return;
        statusEl.textContent = 'جاري قراءة الصورة وضغطها...';
        try {
            const dataUrl = await compressImageFile(file, 1400, 0.82);
            statusEl.textContent = 'جاري قراءة بيانات الـ CV بالذكاء الاصطناعي...';
            incrementDeviceUsage();
            const messages = [
                { role: "system", content: `أنت أداة استخراج بيانات من صور السير الذاتية (CV). هيوصلك صورة سيرة ذاتية، اقرأها بدقة واستخرج منها: الاسم، المسمى الوظيفي الحالي أو المستهدف، أهم 3-5 نقاط خبرة عملية (باختصار شديد)، أبرز المهارات، وآخر مؤهل دراسي. رجّع النتيجة كنص منظم بعناوين قصيرة وبنقاط، بدون رموز markdown. لو الصورة مش واضحة أو مفيهاش سيرة ذاتية واضحة، قول ذلك صراحة بدل ما تخترع بيانات.` },
                { role: "user", content: [
                    { type: "text", text: "استخرج بيانات السيرة الذاتية من الصورة دي:" },
                    { type: "image_url", image_url: { url: dataUrl } }
                ] }
            ];
            const result = await callGroqConversation(messages);
            extractBox.value = result.trim();
            extractBox.classList.remove('hidden');
            statusEl.textContent = '✓ اتقرأت البيانات. راجعها في الصندوق تحت وعدّل فيها لو محتاج، وهتتستخدم تلقائياً لما تجهّز الرسالة.';
        } catch (e) {
            console.warn('CV image extraction failed:', e);
            statusEl.textContent = 'تعذرت قراءة الصورة تلقائياً (ممكن الموديل المتصل بالسيرفر مش بيدعم قراءة الصور لسه). اكتب أهم بياناتك يدوي في "نقاط مهمة" تحت بدل كده.';
        }
    }

    async function runCoverLetterGenerator() {
        const type = document.getElementById('cover-type').value;
        const role = document.getElementById('cover-role').value.trim();
        if (!role) return showToast("اكتب الوظيفة المتقدم لها أولاً.", 'error');
        if (!checkDeviceTrial()) return;
        const company = document.getElementById('cover-company').value.trim();
        const notes = document.getElementById('cover-notes').value.trim();
        const cvExtractEl = document.getElementById('cover-cv-extract');
        const cvExtract = (cvExtractEl && !cvExtractEl.classList.contains('hidden')) ? cvExtractEl.value.trim() : '';
        const box = document.getElementById('cover-result');
        box.classList.remove('hidden'); box.innerHTML = spinnerHTML("جاري صياغة الرسالة...");
        incrementDeviceUsage();
        let sys;
        if (type === 'thanks') sys = `أنت خبير مراسلات توظيف. اكتب رسالة شكر ومتابعة قصيرة واحترافية بعد مقابلة عمل، تشكر المحاور على وقته، تؤكد حماسك للوظيفة، وتذكر نقطة واحدة مهمة اتكلمتوا عنها في المقابلة لو موجودة في الملاحظات. بدون رموز markdown، جاهزة للنسخ في إيميل.`;
        else if (type === 'salary') sys = `أنت خبير تفاوض على الرواتب. اكتب رد احترافي ومهذب على عرض راتب من شركة، يوضح تقدير المتقدم للعرض، ويطلب بأدب مراجعة الرقم أو يوضح توقعاته بناءً على خبرته ومهاراته، بأسلوب واثق غير متعنت. بدون رموز markdown.`;
        else sys = `أنت خبير كتابة رسائل تقديم (Cover Letter) احترافية. اكتب رسالة تقديم قصيرة (نصف صفحة تقريباً) مرفقة مع السيرة الذاتية، تبدأ بجملة افتتاحية قوية، تربط خبرات المتقدم باحتياجات الوظيفة (استخدم بيانات الـ CV المرفقة لو موجودة عشان الرسالة تبقى شخصية ومحددة مش عامة)، وتنتهي بدعوة للتواصل. بدون رموز markdown، جاهزة للنسخ في إيميل.`;
        const messages = [
            { role: "system", content: sys },
            { role: "user", content: `الوظيفة: ${role}\n${company ? 'الشركة: ' + company + '\n' : ''}${notes ? 'نقاط مهمة: ' + notes + '\n' : ''}${cvExtract ? 'بيانات من الـ CV المرفق:\n' + cvExtract : ''}` }
        ];
        try { renderResult(box, await callGroqConversation(messages), 'cover-letter.txt'); }
        catch (e) { box.innerHTML = errorHTML("تعذرت صياغة الرسالة، حاول تاني."); }
    }

    // ============ Video Mock Interview ============
    let videoMockStream = null, videoMockRecorder = null, videoMockChunks = [], videoMockIsRecording = false;
    let videoMockAudioRecorder = null, videoMockAudioChunks = [], videoMockRecordStartTime = 0;
    let videoMockCurrentPrompt = "", videoMockCurrentPromptMode = "question";

    async function generateVideoMockPrompt() {
        const topic = document.getElementById('video-mock-topic').value.trim();
        const mode = document.getElementById('video-mock-prompt-mode').value;
        const box = document.getElementById('video-mock-prompt-box');
        const textEl = document.getElementById('video-mock-prompt-text');
        box.classList.remove('hidden');
        textEl.innerHTML = spinnerHTML('جاري التجهيز...');
        try {
            const messages = mode === 'script'
                ? [{ role: "system", content: `أنت مدرب مقابلات. اكتب نص قصير واقعي (50-80 كلمة) باللهجة المصرية العامية المهذبة، مناسب كتمرين "تقديم نفسك" أو "تعريف بمشروع/خبرة" قدام كاميرا مقابلة${topic ? ' لوظيفة أو مجال: ' + topic : ''}. النص يبقى جاهز يتقرأ بصوت عالٍ بوضوح وثقة، من غير أي رموز أو تعليقات، النص بس.` },
                    { role: "user", content: topic ? `الموضوع: ${topic}` : "نص عام لتقديم النفس في مقابلة عمل" }]
                : [{ role: "system", content: `أنت مدير توظيف. اسأل سؤال مقابلة واحد فقط، واقعي ومحدد${topic ? ' لوظيفة: ' + topic : ''}، بصيغة مباشرة وقصيرة (سطر أو سطرين)، باللهجة المصرية العامية. السؤال بس من غير أي مقدمات أو شرح.` },
                    { role: "user", content: topic ? `وظيفة: ${topic}` : "سؤال مقابلة عام" }];
            const result = await callGroqConversation(messages);
            videoMockCurrentPrompt = result.trim();
            videoMockCurrentPromptMode = mode;
            textEl.innerHTML = `<p class="text-[10px] text-slate-500 mb-1">${mode === 'script' ? 'اقرأ النص ده بوضوح قدام الكاميرا:' : 'رُد على السؤال ده بصوتك قدام الكاميرا:'}</p><p class="font-bold text-slate-100">${escapeHtml(videoMockCurrentPrompt)}</p>`;
        } catch (e) {
            textEl.innerHTML = errorHTML('تعذر التجهيز، جرب تاني.');
        }
    }

    // ============ تحليل حقيقي بالذكاء الاصطناعي لتعبيرات الوجه (face-api.js شغال جوه المتصفح) ============
    const FACE_API_SCRIPT = 'https://cdn.jsdelivr.net/npm/face-api.js@0.22.2/dist/face-api.min.js';
    const FACE_MODEL_URL = 'https://cdn.jsdelivr.net/gh/justadudewhohacks/face-api.js@master/weights';
    let faceApiModelsLoaded = false, faceApiLoadPromise = null;
    function ensureFaceApiModels(statusEl) {
        if (faceApiModelsLoaded) return Promise.resolve(true);
        if (faceApiLoadPromise) return faceApiLoadPromise;
        faceApiLoadPromise = (async () => {
            try {
                if (statusEl) statusEl.innerText = 'جاري تحميل نموذج تحليل تعبيرات الوجه (أول مرة بس)...';
                await loadScriptOnce(FACE_API_SCRIPT);
                if (typeof faceapi === 'undefined') throw new Error('مكتبة تحليل الوجه مش متاحة.');
                await Promise.all([
                    faceapi.nets.tinyFaceDetector.loadFromUri(FACE_MODEL_URL),
                    faceapi.nets.faceExpressionNet.loadFromUri(FACE_MODEL_URL)
                ]);
                faceApiModelsLoaded = true;
                return true;
            } catch (e) {
                console.warn('تعذر تحميل نموذج تحليل الوجه، هيتم الاكتفاء بتحليل الصوت فقط:', e);
                faceApiLoadPromise = null;
                return false;
            }
        })();
        return faceApiLoadPromise;
    }
    let videoMockAnalysisSamples = [], videoMockAnalysisTimer = null;
    let videoMockAudioCtx = null, videoMockAnalyser = null, videoMockVolumeSamples = [];
    async function startVideoMockAnalysisSampling(statusEl) {
        videoMockAnalysisSamples = [];
        videoMockVolumeSamples = [];
        try {
            videoMockAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
            const src = videoMockAudioCtx.createMediaStreamSource(new MediaStream(videoMockStream.getAudioTracks()));
            videoMockAnalyser = videoMockAudioCtx.createAnalyser();
            videoMockAnalyser.fftSize = 512;
            src.connect(videoMockAnalyser);
        } catch (e) { console.warn('تعذر تجهيز تحليل شدة الصوت المباشر:', e); }
        const faceReady = await ensureFaceApiModels(statusEl);
        const vid = document.getElementById('video-mock-preview');
        const volData = videoMockAnalyser ? new Uint8Array(videoMockAnalyser.frequencyBinCount) : null;
        videoMockAnalysisTimer = setInterval(async () => {
            if (volData && videoMockAnalyser) {
                videoMockAnalyser.getByteTimeDomainData(volData);
                let sumSq = 0;
                for (let i = 0; i < volData.length; i++) { const v = (volData[i] - 128) / 128; sumSq += v * v; }
                videoMockVolumeSamples.push(Math.sqrt(sumSq / volData.length));
            }
            if (!faceReady || !vid || vid.readyState < 2) return;
            try {
                const det = await faceapi.detectSingleFace(vid, new faceapi.TinyFaceDetectorOptions()).withFaceExpressions();
                videoMockAnalysisSamples.push(det ? { expressions: det.expressions, box: det.detection.box, videoW: vid.videoWidth, videoH: vid.videoHeight } : { expressions: null });
            } catch (e) { /* تجاهل عينة فشلت وكمّل اللي بعدها */ }
        }, 900);
    }
    function stopVideoMockAnalysisSampling() {
        if (videoMockAnalysisTimer) { clearInterval(videoMockAnalysisTimer); videoMockAnalysisTimer = null; }
        if (videoMockAudioCtx) { try { videoMockAudioCtx.close(); } catch (e) {} videoMockAudioCtx = null; videoMockAnalyser = null; }
    }
    function summarizeFaceExpressions(samples) {
        const valid = samples.filter(s => s.expressions);
        if (!valid.length) return null;
        const dims = ['neutral', 'happy', 'sad', 'angry', 'fearful', 'disgusted', 'surprised'];
        const sums = {}; dims.forEach(d => sums[d] = 0);
        let centered = 0;
        valid.forEach(s => {
            dims.forEach(d => sums[d] += (s.expressions[d] || 0));
            if (s.box && s.videoW) {
                const cx = (s.box.x + s.box.width / 2) / s.videoW, cy = (s.box.y + s.box.height / 2) / s.videoH;
                if (cx > 0.22 && cx < 0.78 && cy > 0.1 && cy < 0.9) centered++;
            }
        });
        const avg = {}; dims.forEach(d => avg[d] = sums[d] / valid.length);
        return { faceDetectedRatio: valid.length / samples.length, centeredRatio: centered / valid.length, avg };
    }
    function summarizeVolume(samples) {
        if (samples.length < 3) return null;
        const mean = samples.reduce((a, b) => a + b, 0) / samples.length;
        const variance = samples.reduce((a, b) => a + (b - mean) ** 2, 0) / samples.length;
        return { mean, variability: Math.sqrt(variance) };
    }
    function analyzeTranscriptPace(text, durationSec) {
        const words = text.trim().split(/\s+/).filter(Boolean);
        const wpm = durationSec > 0 ? Math.round(words.length / (durationSec / 60)) : 0;
        const fillerWords = ['يعني', 'امم', 'اممم', 'آآ', 'اه اه'];
        let fillerCount = 0;
        fillerWords.forEach(f => { const m = text.match(new RegExp(f, 'g')); if (m) fillerCount += m.length; });
        return { wordCount: words.length, wpm, fillerCount };
    }
    async function runVideoMockAnalysisReport(audioBlob, durationSec) {
        const box = document.getElementById('video-mock-analysis-result');
        box.classList.remove('hidden');
        box.innerHTML = spinnerHTML('جاري تحليل الأداء (تعبيرات الوجه ونبرة/سرعة الصوت) بالذكاء الاصطناعي...');
        try {
            const faceSummary = summarizeFaceExpressions(videoMockAnalysisSamples);
            const volSummary = summarizeVolume(videoMockVolumeSamples);
            let transcript = '';
            try { transcript = await transcribeAudioBlob(audioBlob, 'mock-interview-audio.webm'); } catch (e) { console.warn('تعذر تفريغ صوت المقطع:', e); }
            const paceInfo = transcript ? analyzeTranscriptPace(transcript, durationSec) : null;

            let dataDesc = '';
            if (faceSummary) {
                dataDesc += `نسبة الوقت اللي كان فيه وشك ظاهر وواضح للكاميرا (من عينات حقيقية اتاخدت كل ~0.9 ثانية): ${Math.round(faceSummary.faceDetectedRatio * 100)}%. `;
                dataDesc += `نسبة الوقت اللي كنت فيه متمركز في منتصف الكاميرا تقريباً (مؤشر تواصل بصري): ${Math.round(faceSummary.centeredRatio * 100)}%. `;
                dataDesc += `متوسط توزيع تعبيرات الوجه المكتشفة بنموذج face-api.js عبر المقطع: ${Object.entries(faceSummary.avg).map(([k, v]) => `${k}: ${Math.round(v * 100)}%`).join('، ')}. `;
            } else {
                dataDesc += 'تعذر رصد الوجه بوضوح في عينات كافية (يمكن الإضاءة ضعيفة، أو الوجه مش في إطار الكاميرا، أو المتصفح مانع تحميل نموذج التحليل). ';
            }
            if (volSummary) {
                dataDesc += `متوسط شدة الصوت المُقاسة فعلياً من المايك: ${volSummary.mean.toFixed(3)}، وتذبذب شدة الصوت عبر المقطع (كل ما الرقم أعلى كل ما نبرتك كانت متنوعة مش رتيبة): ${volSummary.variability.toFixed(3)}. `;
            }
            if (paceInfo) {
                dataDesc += `من تفريغ صوتي حقيقي لكلامك: عدد الكلمات ${paceInfo.wordCount}، سرعة الكلام التقريبية ${paceInfo.wpm} كلمة/دقيقة، وعدد كلمات حشو مكتشفة (زي "يعني"/"آآ") ${paceInfo.fillerCount}. نص كلامك: "${transcript.slice(0, 500)}"`;
            } else {
                dataDesc += 'تعذر تفريغ الصوت (يمكن المقطع قصير جداً أو مفيهوش كلام واضح)، فمفيش تحليل لسرعة الكلام أو كلمات الحشو المرة دي. ';
            }
            if (videoMockCurrentPrompt) {
                dataDesc += videoMockCurrentPromptMode === 'script'
                    ? `\n\nالنص اللي كان مطلوب منه يقراه بالظبط: "${videoMockCurrentPrompt}"`
                    : `\n\nالسؤال اللي كان مطلوب منه يرد عليه: "${videoMockCurrentPrompt}"`;
            }

            const contentInstruction = videoMockCurrentPrompt
                ? (videoMockCurrentPromptMode === 'script'
                    ? " كمان قارن كلامه المفرّغ بالنص المطلوب، وقول لو التزم بمعناه وقراه بوضوح وثقة ولا لأ."
                    : " كمان قيّم لو إجابته فعلاً جاوبت على السؤال المطلوب بمحتوى مناسب ولا حاد عن الموضوع.")
                : "";
            const messages = [
                { role: "system", content: `أنت مدرب مقابلات عمل خبير. هتاخد بيانات حقيقية اتقاست فعلياً (مش متخيلة) من تحليل فيديو المستخدم: نسبة ظهور وجهه وتمركزه قدام الكاميرا، توزيع تعبيرات الوجه المكتشفة بنموذج ذكاء اصطناعي حقيقي (face-api.js)، تذبذب شدة الصوت من المايك، وسرعة الكلام وكلمات الحشو من تفريغ صوتي حقيقي (Whisper). اكتب تقرير أداء قصير وصريح بالعربي المصري بناءً على الأرقام دي فقط، من غير ما تخترع أي تفصيلة مش موجودة في البيانات المرسلة، يغطي: 1) التواصل البصري مع الكاميرا 2) تعبيرات الوجه الظاهرة 3) نبرة الصوت وسرعة الكلام وكلمات الحشو.${contentInstruction} 4) 3 نصايح عملية قصيرة للتحسين. لو جزء من البيانات مش متاح قول كده صراحة بدل ما تتجاهله أو تخترعه. بدون رموز markdown.` },
                { role: "user", content: dataDesc }
            ];
            const report = await callGroqConversation(messages);
            box.innerHTML = `<div class="space-y-2">
                <p class="text-xs font-bold text-slate-300 flex items-center gap-2"><i class="fa-solid fa-chart-simple"></i> تحليل حقيقي بناءً على قياسات فعلية (وجه + صوت)</p>
                <div class="text-xs sm:text-sm leading-relaxed">${formatReportText(report)}</div>
            </div>`;
        } catch (e) {
            console.warn('Video mock analysis failed:', e);
            box.innerHTML = errorHTML('تعذر إتمام تحليل الأداء دلوقتي. جرب تاني.');
        }
    }

    async function startVideoMockCamera() {
        const status = document.getElementById('video-mock-status');
        try {
            videoMockStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
            const vid = document.getElementById('video-mock-preview');
            vid.srcObject = videoMockStream; vid.classList.remove('hidden');
            document.getElementById('video-mock-start-btn').classList.add('hidden');
            document.getElementById('video-mock-record-btn').classList.remove('hidden');
            document.getElementById('video-mock-stop-btn').classList.remove('hidden');
            document.getElementById('video-mock-analysis-result').classList.add('hidden');
            status.innerText = "الكاميرا شغالة. تقدر تتدرب على الرد على أسئلة صفحة 'مقابلة تدريبية صوتية' وانت قدامها، أو تسجل مقطع وهيتحلل تلقائياً بعد ما توقف التسجيل.";
        } catch (e) {
            status.innerText = "تعذر فتح الكاميرا. تأكد إنك سامح للمتصفح بالوصول للكاميرا والمايك.";
        }
    }
    function toggleVideoMockRecording() {
        const btn = document.getElementById('video-mock-record-btn');
        const status = document.getElementById('video-mock-status');
        if (!videoMockStream) return;
        if (!videoMockIsRecording) {
            try {
                videoMockChunks = [];
                videoMockAudioChunks = [];
                document.getElementById('video-mock-analysis-result').classList.add('hidden');
                videoMockRecorder = new MediaRecorder(videoMockStream, { mimeType: 'video/webm' });
                videoMockRecorder.ondataavailable = (e) => { if (e.data.size > 0) videoMockChunks.push(e.data); };
                videoMockRecorder.onstop = () => {
                    const blob = new Blob(videoMockChunks, { type: 'video/webm' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a'); a.href = url; a.download = 'yusr-mock-interview-practice.webm'; document.body.appendChild(a); a.click(); a.remove();
                    URL.revokeObjectURL(url);
                    const durationSec = (Date.now() - videoMockRecordStartTime) / 1000;
                    stopVideoMockAnalysisSampling();
                    status.innerText = "✓ اتسجل المقطع ونزل تلقائياً، راجعه واحكم على نفسك بعين ناقدة. وجاري تجهيز تحليل الأداء تحت...";
                    const audioBlob = new Blob(videoMockAudioChunks, { type: 'audio/webm' });
                    if (checkDeviceTrial()) {
                        incrementDeviceUsage();
                        runVideoMockAnalysisReport(audioBlob, durationSec);
                    } else {
                        status.innerText = "✓ اتسجل المقطع ونزل تلقائياً. المحاولات الشهرية خلصت، محتاج ترقية عشان تحليل الأداء بالذكاء الاصطناعي.";
                    }
                };
                try {
                    const audioMime = MediaRecorder.isTypeSupported('audio/webm;codecs=opus') ? 'audio/webm;codecs=opus' : 'audio/webm';
                    videoMockAudioRecorder = new MediaRecorder(new MediaStream(videoMockStream.getAudioTracks()), { mimeType: audioMime });
                    videoMockAudioRecorder.ondataavailable = (e) => { if (e.data.size > 0) videoMockAudioChunks.push(e.data); };
                    videoMockAudioRecorder.start();
                } catch (e) { console.warn('تعذر تجهيز مسجل صوت منفصل للتحليل:', e); }
                videoMockRecorder.start();
                videoMockRecordStartTime = Date.now();
                videoMockIsRecording = true;
                btn.innerHTML = '<i class="fa-solid fa-stop text-red-400"></i> وقف التسجيل';
                status.innerText = "بيسجل دلوقتي... حاول تفضل باصص للكاميرا وهي في وسط الشاشة عشان تحليل الوجه يبقى أدق.";
                startVideoMockAnalysisSampling(status);
            } catch (e) { status.innerText = "تعذر بدء التسجيل في المتصفح ده."; }
        } else {
            if (videoMockRecorder) videoMockRecorder.stop();
            if (videoMockAudioRecorder && videoMockAudioRecorder.state !== 'inactive') videoMockAudioRecorder.stop();
            videoMockIsRecording = false;
            btn.innerHTML = '<i class="fa-solid fa-circle text-red-500"></i> ابدأ التسجيل';
        }
    }
    function stopVideoMockCamera() {
        if (videoMockIsRecording) toggleVideoMockRecording();
        stopVideoMockAnalysisSampling();
        if (videoMockStream) { videoMockStream.getTracks().forEach(t => t.stop()); videoMockStream = null; }
        const vid = document.getElementById('video-mock-preview');
        vid.srcObject = null; vid.classList.add('hidden');
        document.getElementById('video-mock-start-btn').classList.remove('hidden');
        document.getElementById('video-mock-record-btn').classList.add('hidden');
        document.getElementById('video-mock-stop-btn').classList.add('hidden');
        document.getElementById('video-mock-status').innerText = "الكاميرا مقفولة.";
    }
    async function generateSchedulingEmail() {
        const role = document.getElementById('video-email-role').value.trim();
        if (!role) return showToast("اكتب الوظيفة المتقدم لها أولاً.", 'error');
        if (!checkDeviceTrial()) return;
        const type = document.getElementById('video-email-type').value;
        const tone = document.getElementById('video-email-tone').value;
        const box = document.getElementById('video-email-result');
        box.classList.remove('hidden'); box.innerHTML = spinnerHTML("جاري تجهيز الإيميل...");
        incrementDeviceUsage();
        const messages = [
            { role: "system", content: `أنت مسؤول توظيف (HR) في شركة حقيقية بتكتب إيميل فعلي لمتقدم على وظيفة "${role}". نوع الإيميل: ${type}. نبرة الإيميل: ${tone}. اكتب إيميل واقعي 100% زي اللي بيتبعت فعلاً: يبدأ باسم الشركة (اختراع اسم مناسب) وتحية باسم المتقدم بشكل عام، فيه توقيت/تفاصيل محددة (يوم وساعة مثلاً، أو مدة الفيديو كول)، وسؤال واحد واضح محتاج المتقدم يرد عليه بقرار (تأكيد/اقتراح بديل/رقم). اختم بتوقيع باسم ومسمى وظيفي وهمي واقعي (مثلاً "سارة أحمد - مسؤولة التوظيف"). بدون رموز markdown، وبدون أي شرح أو تعليق خارج الإيميل نفسه.` },
            { role: "user", content: `الوظيفة: ${role}` }
        ];
        try {
            const res = await callGroqConversation(messages);
            renderResult(box, res, 'scheduling-email.txt');
            document.getElementById('video-email-reply-box').classList.remove('hidden');
        } catch (e) { box.innerHTML = errorHTML("تعذر توليد الإيميل، حاول تاني."); }
    }
    async function reviewSchedulingReply() {
        const reply = document.getElementById('video-email-reply').value.trim();
        if (!reply) return showToast("اكتب ردّك الأول.", 'error');
        if (!checkDeviceTrial()) return;
        const emailBox = document.getElementById('video-email-result');
        const originalEmail = emailBox.dataset.raw || '';
        const box = document.getElementById('video-email-review-result');
        box.classList.remove('hidden'); box.innerHTML = spinnerHTML("جاري تقييم ردّك...");
        incrementDeviceUsage();
        const messages = [
            { role: "system", content: `أنت خبير مراسلات مهنية صريح. قيّم رد المتقدم على إيميل الشركة بالترتيب ده: 1) إجابة مباشرة بـ"جاوب على المطلوب: نعم/لأ جزئياً/لأ" مع سبب سطر واحد 2) تقييم الاحترافية والوضوح واللباقة من 10 مع السبب 3) أي أخطاء صياغة أو نبرة غير مناسبة (زي رد جاف جداً أو غير رسمي) بأمثلة من نص الرد نفسه 4) نسخة مُحسّنة كاملة وجاهزة للنسخ من الرد، حتى لو الرد الأصلي كويس، تكون فعلاً أفضل نسخة ممكنة منه. بدون رموز markdown.` },
            { role: "user", content: `الإيميل الأصلي:\n${originalEmail}\n\nرد المتقدم:\n${reply}` }
        ];
        try { renderResult(box, await callGroqConversation(messages), 'reply-review.txt'); }
        catch (e) { box.innerHTML = errorHTML("تعذر التقييم، حاول تاني."); }
    }
    async function generateSalaryFollowupQuestions() {
        const role = document.getElementById('video-salary-q-role').value.trim() || document.getElementById('video-email-role').value.trim();
        if (!role) return showToast("اكتب الوظيفة أولاً.", 'error');
        if (!checkDeviceTrial()) return;
        const box = document.getElementById('video-salary-q-result');
        box.classList.remove('hidden'); box.innerHTML = spinnerHTML("جاري تجهيز الأسئلة...");
        incrementDeviceUsage();
        const messages = [
            { role: "system", content: `أنت مستشار توظيف بيدرّب المتقدمين على التفاوض. جهّز 6-8 أسئلة متابعة حقيقية لوظيفة "${role}" تحديداً (مش عامة)، مقسّمة لمجموعات واضحة بعنوان قبل كل مجموعة: "أسئلة عن الراتب الأساسي"، "أسئلة عن المزايا" (تأمين صحي، بونص، زيادات سنوية)، "أسئلة عن بيئة العمل" (ساعات، عمل عن بعد/هايبرد، إجازات). كل سؤال بصياغة لبقة ومهنية جاهزة يقولها بالظبط، ومعاه سطر واحد يوضح "الوقت الصح تسأله فيه" (قبل العرض/بعد العرض/في نهاية المقابلة). بدون رموز markdown.` },
            { role: "user", content: `الوظيفة: ${role}` }
        ];
        try { renderResult(box, await callGroqConversation(messages), 'salary-followup-questions.txt'); }
        catch (e) { box.innerHTML = errorHTML("تعذر التجهيز، حاول تاني."); }
    }
    async function generateDressTips() {
        if (!checkDeviceTrial()) return;
        const sector = document.getElementById('video-dress-sector').value;
        const genderSel = document.getElementById('video-dress-gender').value;
        const genderInstruction = genderSel === 'male'
            ? 'المستخدم رجل، ركّز نصايحك على لبس الرجل بس بالتفصيل (متجاهل نصايح المرأة خالص).'
            : genderSel === 'female'
                ? 'المستخدمة امرأة، ركّزي نصايحك على لبس المرأة بس بالتفصيل (متجاهل نصايح الرجل خالص).'
                : 'اكتب نصايح للرجل والمرأة، كل واحد في قسم منفصل بعنوان واضح.';
        const box = document.getElementById('video-dress-result');
        box.classList.remove('hidden'); box.innerHTML = spinnerHTML("جاري تجهيز النصائح...");
        incrementDeviceUsage();
        const messages = [
            { role: "system", content: `أنت مستشار صورة مهنية بتقدّم نصايح ملموسة مش عامة. اكتب نصايح للبس والمظهر لمقابلة في البيئة دي: "${sector}". ${genderInstruction} بالترتيب: 1) قطع الملابس بالتحديد (نوع القميص/البنطلون/الجاكيت أو الفستان/البدلة حسب الحالة) والألوان المحددة الأنسب 2) 3 حاجات ممنوع تعملها في المظهر في البيئة دي بالذات 3) لمسة واحدة بسيطة (اكسسوار/تفصيلة) بتدي انطباع احترافي زيادة 4) نصيحة واحدة سريعة عن تسريحة الشعر/العناية الشخصية المناسبة للبيئة دي. لو البيئة "مقابلة أونلاين"، ركّز كمان على إيه اللي بيبان في الكاميرا بس (من نص الجسم لفوق) وخلفية الكاميرا المناسبة. بدون رموز markdown.` },
            { role: "user", content: `البيئة: ${sector}` }
        ];
        try { renderResult(box, await callGroqConversation(messages), 'dress-tips.txt'); }
        catch (e) { box.innerHTML = errorHTML("تعذر التجهيز، حاول تاني."); }
    }

    // ============ Salary Insights ============
    // ============ Live market lookup (real search results fetched at the moment of asking) ============
    // بنستخدم خدمة بحث حية بدون مفتاح (s.jina.ai) عشان نجيب نتائج فعلية من الويب عن الراتب
    // في نفس لحظة الضغط على "قدّر"، ونديها للذكاء الاصطناعي كسياق يعتمد عليه بالدرجة الأولى
    // بدل ما يعتمد على معرفته المدرّبة بس. لو الخدمة بطيئة أو فشلت (تايم آوت 9 ثواني)، الأداة
    // بترجع تلقائياً لسلوكها القديم (تقدير من معرفة الذكاء الاصطناعي العامة) وبتوضّح ده للمستخدم.
    async function fetchLiveSalaryContext(role, exp, region) {
        const query = `متوسط الراتب لوظيفة ${role}${exp ? ' بخبرة ' + exp : ''} في ${region} ${new Date().getFullYear()}`;
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 9000);
        try {
            const res = await fetch(`https://s.jina.ai/${encodeURIComponent(query)}`, {
                headers: { 'Accept': 'application/json' },
                signal: controller.signal
            });
            clearTimeout(timeout);
            if (!res.ok) return null;
            const data = await res.json();
            const items = Array.isArray(data?.data) ? data.data : [];
            if (!items.length) return null;
            return items.slice(0, 5)
                .map((it, i) => `[${i + 1}] ${it.title || ''}: ${(it.description || it.content || '').slice(0, 320)}`)
                .join('\n') || null;
        } catch (e) {
            clearTimeout(timeout);
            console.warn('Live salary lookup failed:', e);
            return null;
        }
    }
    async function runSalaryInsights() {
        const role = document.getElementById('salary-role').value.trim();
        if (!role) return showToast("اكتب المسمى الوظيفي أولاً.", 'error');
        if (!checkDeviceTrial()) return;
        const exp = document.getElementById('salary-experience').value.trim();
        const region = document.getElementById('salary-region').value;
        const box = document.getElementById('salary-result');
        box.classList.remove('hidden'); box.innerHTML = spinnerHTML("جاري جلب بيانات حية من السوق دلوقتي...");
        incrementDeviceUsage();
        const lookupTime = new Date();
        const liveContext = await fetchLiveSalaryContext(role, exp, region);
        box.innerHTML = spinnerHTML("جاري تقدير الراتب المناسب...");
        const userMsg = `الوظيفة: ${role}\nسنوات الخبرة: ${exp || 'غير محدد'}\nالمنطقة: ${region}`;
        const messages = liveContext ? [
            { role: "system", content: `أنت مستشار رواتب. معاك تحت نتائج بحث حية اتجابت دلوقتي (${lookupTime.toLocaleString('ar-EG')}) عن سوق العمل للوظيفة المطلوبة. اعتمد عليها بالدرجة الأولى في تقديرك، واستخدم معرفتك العامة بس لسد أي فجوة فيها. قدّر: 1) نطاق راتب معقول (من - إلى) بعملة المنطقة 2) مقارنة سريعة مع متوسط السوق 3) وقت مناسب لطرح موضوع الراتب في المقابلة 4) نصيحة تفاوض عملية واحدة. بدون رموز markdown.\n\nنتائج البحث الحية:\n${liveContext}` },
            { role: "user", content: userMsg }
        ] : [
            { role: "system", content: `أنت مستشار رواتب مطّلع على سوق العمل. تعذر الوصول لبيانات حية دلوقتي، فاعتمد على معرفتك العامة (مش بيانات لحظية دقيقة) وقدّر: 1) نطاق راتب تقريبي معقول (من - إلى) بعملة المنطقة المذكورة 2) مقارنة سريعة مع متوسط السوق لنفس الوظيفة تقريباً 3) وقت مناسب في عملية التوظيف لطرح موضوع الراتب 4) نصيحة تفاوض واحدة عملية. وضّح إنه تقدير تقريبي مش رقم رسمي دقيق. بدون رموز markdown.` },
            { role: "user", content: userMsg }
        ];
        try {
            renderResult(box, await callGroqConversation(messages), 'salary-insights.txt');
            box.innerHTML += liveContext
                ? `<div class="mt-3 pt-2 border-t border-[var(--border)] text-[10.5px] text-emerald-300/90 flex items-start gap-1.5"><i class="fa-solid fa-tower-broadcast mt-0.5"></i><span>مبني على نتائج بحث حية اتجابت لحظة سؤالك (${lookupTime.toLocaleString('ar-EG')})، بالإضافة لمعرفة الذكاء الاصطناعي — لسه تقدير مش رقم رسمي دقيق 100%.</span></div>`
                : `<div class="mt-3 pt-2 border-t border-[var(--border)] text-[10.5px] text-amber-300/90 flex items-start gap-1.5"><i class="fa-solid fa-triangle-exclamation mt-0.5"></i><span>تعذر جلب بيانات حية وقت سؤالك، فده تقدير تقريبي من معرفة الذكاء الاصطناعي العامة بس — استخدمه كنقطة انطلاق للتفاوض.</span></div>`;
        }
        catch (e) { box.innerHTML = errorHTML("تعذر التقدير، حاول تاني."); }
    }

    // ============ Progress Tracking ============
    function loadProgressHistory() { return JSON.parse(localStorage.getItem('yusr_progress_history') || '[]'); }
    function saveProgressHistory(list) { localStorage.setItem('yusr_progress_history', JSON.stringify(list)); }
    function addProgressEntry(role, reportText) {
        const list = loadProgressHistory();
        const scoreMatch = reportText.match(/(\d{1,3})\s*(?:\/\s*100|من\s*100)/);
        let score = scoreMatch ? parseInt(scoreMatch[1], 10) : null;
        if (score !== null && (score < 0 || score > 100)) score = null;
        list.unshift({ date: new Date().toISOString(), role: role || 'وظيفة غير محددة', score, report: reportText });
        if (list.length > 50) list.length = 50;
        saveProgressHistory(list);
    }
    function clearProgressHistory() {
        if (!confirm("متأكد إنك عايز تمسح كل سجل الجلسات السابقة؟ الإجراء ده مش هيتراجع.")) return;
        saveProgressHistory([]);
        renderProgressView();
    }
    function renderProgressView() {
        const list = loadProgressHistory();
        const statsBox = document.getElementById('progress-stats');
        const scored = list.filter(e => e.score !== null);
        const avg = scored.length ? Math.round(scored.reduce((a, e) => a + e.score, 0) / scored.length) : '—';
        statsBox.innerHTML = `
            <div class="panel-2 rounded-xl p-3 text-center">
                <p class="text-lg font-extrabold text-slate-100">${list.length}</p>
                <p class="text-[10px] text-slate-500">عدد الجلسات</p>
            </div>
            <div class="panel-2 rounded-xl p-3 text-center">
                <p class="text-lg font-extrabold text-slate-100">${avg}${scored.length ? '/100' : ''}</p>
                <p class="text-[10px] text-slate-500">متوسط التقييم</p>
            </div>
            <div class="panel-2 rounded-xl p-3 text-center">
                <p class="text-lg font-extrabold text-slate-100">${list.length ? new Date(list[0].date).toLocaleDateString('ar-EG') : '—'}</p>
                <p class="text-[10px] text-slate-500">آخر جلسة</p>
            </div>`;

        const reminderStatus = document.getElementById('progress-reminder-status');
        const savedReminder = localStorage.getItem('yusr_interview_reminder');
        const savedTime = localStorage.getItem('yusr_interview_reminder_time') || '';
        const notifOn = ('Notification' in window) && Notification.permission === 'granted';
        const dateInput = document.getElementById('progress-reminder-date');
        const timeInput = document.getElementById('progress-reminder-time');
        if (savedReminder && dateInput && !dateInput.value) dateInput.value = savedReminder;
        if (savedTime && timeInput && !timeInput.value) timeInput.value = savedTime;
        if (savedReminder) {
            const days = Math.ceil((new Date(savedReminder) - new Date()) / (1000 * 60 * 60 * 24));
            const timeSuffix = savedTime ? ` الساعة ${savedTime}` : '';
            if (days >= 0 && days <= 2) {
                reminderStatus.innerHTML = `<span class="text-amber-300 font-bold"><i class="fa-solid fa-triangle-exclamation"></i> عندك مقابلة قريبة (${days === 0 ? 'النهاردة' : 'خلال ' + days + ' يوم'}${timeSuffix})، وقتها كويس تعمل جلسة تدريب سريعة!</span>`;
            } else {
                reminderStatus.innerText = `محفوظ تذكير بمقابلة بتاريخ ${new Date(savedReminder).toLocaleDateString('ar-EG')}${timeSuffix}. ` + (notifOn ? 'هيوصلك إشعار push حقيقي من المتصفح قبلها بيومين طالما المتصفح شغال.' : 'فعّل إذن الإشعارات عشان يوصلك إشعار push حقيقي، مش بس تنبيه جوه الصفحة.');
            }
        }
        if ('Notification' in window) {
            const enableBtn = document.getElementById('progress-reminder-enable-btn');
            if (enableBtn) enableBtn.classList.toggle('hidden', Notification.permission === 'granted');
        }
        checkAndFireReminderNotification();

        const compareBox = document.getElementById('progress-compare-box');
        const selA = document.getElementById('progress-compare-a'), selB = document.getElementById('progress-compare-b');
        if (list.length >= 2) {
            compareBox.classList.remove('hidden');
            const opts = list.map((e, i) => `<option value="${i}">${new Date(e.date).toLocaleDateString('ar-EG')} - ${escapeHtml(e.role)}${e.score !== null ? ' (' + e.score + '/100)' : ''}</option>`).join('');
            selA.innerHTML = opts; selB.innerHTML = opts;
            if (list.length > 1) selB.selectedIndex = 1;
        } else {
            compareBox.classList.add('hidden');
        }

        const container = document.getElementById('progress-list');
        if (!list.length) { container.innerHTML = `<p class="text-xs text-slate-500 text-center py-6">لسه معملتش أي جلسة تدريب مُقيّمة. روح لصفحة "مقابلة تدريبية صوتية" واعمل "تقييم أداء" في آخر الجلسة عشان تتسجل هنا.</p>`; return; }
        container.innerHTML = list.map((e, i) => `
            <div class="panel-2 rounded-xl p-3">
                <div class="flex justify-between items-center gap-2 cursor-pointer" onclick="document.getElementById('progress-detail-${i}').classList.toggle('hidden')">
                    <div class="flex items-center gap-2 min-w-0">
                        <span class="text-[10px] text-slate-500 shrink-0">${new Date(e.date).toLocaleDateString('ar-EG')}</span>
                        <span class="text-xs font-bold text-slate-200 truncate">${escapeHtml(e.role)}</span>
                    </div>
                    <div class="flex items-center gap-2 shrink-0">
                        ${e.score !== null ? `<span class="chip">${e.score}/100</span>` : ''}
                        <i class="fa-solid fa-chevron-down text-[10px] text-slate-500"></i>
                    </div>
                </div>
                <div id="progress-detail-${i}" class="hidden mt-2 pt-2 border-t border-[var(--border)] text-xs leading-relaxed">${formatReportText(e.report)}</div>
            </div>
        `).join('');
    }
    async function runProgressCompare() {
        const list = loadProgressHistory();
        const i = parseInt(document.getElementById('progress-compare-a').value, 10);
        const j = parseInt(document.getElementById('progress-compare-b').value, 10);
        if (isNaN(i) || isNaN(j) || i === j) return showToast("اختار جلستين مختلفتين للمقارنة.", 'error');
        if (!checkDeviceTrial()) return;
        const box = document.getElementById('progress-compare-result');
        box.classList.remove('hidden'); box.innerHTML = spinnerHTML("جاري المقارنة...");
        incrementDeviceUsage();
        const a = list[i], b = list[j];
        const messages = [
            { role: "system", content: `أنت مدرب مقابلات. قارن بين تقريري أداء نفس الشخص في جلستين تدريبيتين مختلفتين، ووضّح: هل تحسّن أو تراجع وفي إيه بالتحديد، وإيه اللي لسه محتاج شغل عليه. بدون رموز markdown.` },
            { role: "user", content: `الجلسة الأولى (${new Date(a.date).toLocaleDateString('ar-EG')} - ${a.role}):\n${a.report}\n\nالجلسة الثانية (${new Date(b.date).toLocaleDateString('ar-EG')} - ${b.role}):\n${b.report}` }
        ];
        try { renderResult(box, await callGroqConversation(messages), 'progress-compare.txt'); }
        catch (e) { box.innerHTML = errorHTML("تعذرت المقارنة، حاول تاني."); }
    }
    async function runProgressSummaryReport() {
        const list = loadProgressHistory();
        if (!list.length) return showToast("مفيش جلسات مسجلة لسه.", 'error');
        if (!checkDeviceTrial()) return;
        const box = document.getElementById('progress-summary-result');
        box.classList.remove('hidden'); box.innerHTML = spinnerHTML("جاري بناء تقرير التقدم...");
        incrementDeviceUsage();
        const combined = list.slice(0, 10).map(e => `جلسة ${new Date(e.date).toLocaleDateString('ar-EG')} (${e.role})${e.score !== null ? ' - تقييم ' + e.score + '/100' : ''}:\n${e.report}`).join('\n\n---\n\n');
        const messages = [
            { role: "system", content: `أنت مدرب مقابلات محترف. لخّص تقدم شخص عبر مجموعة جلسات تدريب مقابلات مرفقة في تقرير مختصر واحد: الاتجاه العام (تحسّن/ثبات/تراجع)، أكتر نقطة اتحسنت، أكتر نقطة لسه محتاجة شغل، ونصيحة واحدة للجلسة الجاية. بدون رموز markdown.` },
            { role: "user", content: combined }
        ];
        try { renderResult(box, await callGroqConversation(messages), 'progress-summary.txt'); }
        catch (e) { box.innerHTML = errorHTML("تعذر بناء التقرير، حاول تاني."); }
    }
    function setInterviewReminder() {
        const date = document.getElementById('progress-reminder-date').value;
        const time = document.getElementById('progress-reminder-time').value; // HH:MM اختياري
        if (!date) return showToast("اختار تاريخ المقابلة أولاً.", 'error');
        localStorage.setItem('yusr_interview_reminder', date);
        localStorage.setItem('yusr_interview_reminder_time', time || '');
        localStorage.removeItem('yusr_reminder_notified_on');
        localStorage.removeItem('yusr_reminder_exact_notified_on');
        renderProgressView();
        requestReminderNotificationPermission(false, () => {
            const ok = ('Notification' in window) && Notification.permission === 'granted';
            const timeMsg = time ? ` وهيوصلك إشعار مظبوط الساعة ${time} يوم الموعد نفسه.` : '';
            showToast(ok
                ? `اتحفظ التذكير! هيوصلك إشعار push حقيقي من المتصفح قبل الموعد بيومين، طالما المتصفح فاتح (حتى لو التاب مش قدامك).${timeMsg}`
                : "اتحفظ التذكير! سمح بإذن الإشعارات لما يطلب منك المتصفح عشان يوصلك إشعار push حقيقي مش بس تنبيه جوه الصفحة.", 'success');
        });
    }

    // ============ Interview reminder: real browser push notifications ============
    // بيستخدم Notification API الأصلية في المتصفح، فلازم المستخدم يوافق على الإذن ويفضل
    // المتصفح شغال (حتى لو التاب في الخلفية) عشان الإشعار يوصله فعلياً - إشعار حقيقي على
    // مستوى الجهاز مش مجرد تنبيه داخل الصفحة، لكن مش هيوصل والمتصفح مقفول تماماً لأن ده
    // محتاج بنية push من سيرفر (service worker + push subscription) مش متاحة هنا.
    function requestReminderNotificationPermission(fromButton, cb) {
        if (!('Notification' in window)) {
            if (fromButton) showToast("المتصفح ده مش بيدعم إشعارات push.", 'error');
            return;
        }
        if (Notification.permission === 'granted') {
            checkAndFireReminderNotification();
            if (cb) cb();
            return;
        }
        if (Notification.permission === 'denied') {
            if (fromButton) showToast("الإشعارات متبلوكة للموقع ده من إعدادات المتصفح. فعّلها من إعدادات الموقع عشان يوصلك إشعار push حقيقي.", 'error');
            if (cb) cb();
            return;
        }
        Notification.requestPermission().then(() => { renderProgressView(); if (cb) cb(); });
    }
    function checkAndFireReminderNotification() {
        if (!('Notification' in window) || Notification.permission !== 'granted') return;
        const savedReminder = localStorage.getItem('yusr_interview_reminder');
        if (!savedReminder) return;
        const savedTime = localStorage.getItem('yusr_interview_reminder_time') || '';
        const now = new Date();

        // 1) إشعار مسبق (قبل الموعد بيومين) - على مستوى اليوم بس
        const days = Math.ceil((new Date(savedReminder) - now) / (1000 * 60 * 60 * 24));
        const todayKey = now.toDateString();
        if (days >= 0 && days <= 2 && localStorage.getItem('yusr_reminder_notified_on') !== todayKey) {
            try {
                new Notification('يُسْر Pro - تذكير بمقابلة قادمة', {
                    body: days === 0 ? 'عندك مقابلة النهاردة! وقتها كويس تعمل جلسة تدريب سريعة.' : `عندك مقابلة خلال ${days} ${days === 1 ? 'يوم' : 'أيام'}. وقتها كويس تعمل جلسة تدريب سريعة.`,
                    icon: '/android-chrome-192x192.png'
                });
                localStorage.setItem('yusr_reminder_notified_on', todayKey);
            } catch (e) { console.warn('Reminder notification failed:', e); }
        }

        // 2) إشعار مظبوط في الساعة والدقيقة المحددة لو المستخدم حددهم (لغاية ٥ دقايق فرق، عشان الفحص كل دقيقة)
        if (savedTime) {
            const target = new Date(`${savedReminder}T${savedTime}:00`);
            const diffMin = (now - target) / (1000 * 60);
            const exactKey = `${target.toDateString()}_${savedTime}`;
            if (diffMin >= 0 && diffMin <= 5 && localStorage.getItem('yusr_reminder_exact_notified_on') !== exactKey) {
                try {
                    new Notification('يُسْر Pro - معاد مقابلتك دلوقتي', {
                        body: `مقابلتك المفروض تكون دلوقتي الساعة ${savedTime}. ربنا يوفقك!`,
                        icon: '/android-chrome-192x192.png'
                    });
                    localStorage.setItem('yusr_reminder_exact_notified_on', exactKey);
                } catch (e) { console.warn('Exact reminder notification failed:', e); }
            }
        }
    }

    // ============ Transcribe: file upload (real Groq Whisper transcription) ============
    // ============ Shared high-accuracy transcription helper (Whisper large-v3) ============
    // إعدادات مضبوطة عشان الدقة تبقى أعلى ما يمكن حتى مع الضوضاء: temperature=0 (بيمنع الموديل يتخيل كلام)،
    // + prompt سياقي يوجّه الموديل للهجة/علامات الترقيم الصحيحة، + verbose_json للحصول على أدق نتيجة ممكنة.
    async function transcribeAudioBlob(blob, filename, returnFullData) {
        const form = new FormData();
        form.append('file', blob, filename || 'audio.webm');
        form.append('model', 'whisper-large-v3');
        form.append('temperature', '0');
        form.append('response_format', 'verbose_json');
        const langSelEl = document.getElementById('transcribe-source-lang');
        const langSel = langSelEl ? langSelEl.value.split('-')[0] : '';
        if (langSel) form.append('language', langSel);
        // الـ prompt ده بيوجّه Whisper على سياق المحتوى المتوقع (مقابلات عمل/سير ذاتية) وعلامات ترقيم صحيحة،
        // وده بيرفع الدقة فعلياً لأن الموديل بيميل لمصطلحات السياق ده لما يقابل كلمة مش واضحة في الصوت.
        form.append('prompt', 'نص مفرّغ بدقة عالية جداً من مقابلة عمل أو تدريب مهني، بعلامات ترقيم صحيحة وتقسيم فقرات منطقي، حتى لو في ضوضاء خلفية أو تلعثم بسيط أو تسارع في الكلام. حافظ على المصطلحات المهنية والوظيفية زي ما اتقالت بالظبط.');
        // ملحوظة: التفريغ الصوتي (Whisper) مش زي الأدوات النصية اللي بتعدي على callGroqConversation
        // وليها أكتر من مسار بديل جاهز؛ هنا مفيش مزوّد تفريغ صوتي بديل متاح من غير سيرفر، فأقصى حماية
        // ممكنة هي محاولة تانية (retry) قبل ما نستسلم، عشان مشاكل السيرفر المؤقتة/العابرة متوقفش الأداة.
        let lastErr;
        for (let attempt = 0; attempt < 2; attempt++) {
            try {
                const res = await fetch(`${CLOUD_FUNCTIONS_BASE}/groqTranscribe`, {
                    method: 'POST',
                    headers: { ...(await getAuthHeader()) },
                    body: form
                });
                if (!res.ok) throw new Error(await res.text());
                const data = await res.json();
                return returnFullData ? data : (data.text || '').trim();
            } catch (e) {
                lastErr = e;
                if (attempt === 0) await new Promise(r => setTimeout(r, 1200));
            }
        }
        if (typeof navigator !== 'undefined' && navigator.onLine === false) {
            throw new Error("مفيش اتصال بالإنترنت دلوقتي. التفريغ الصوتي محتاج نت عشان يشتغل — جرب تاني لما النت يرجع.");
        }
        throw lastErr;
    }
    async function handleAudioFileUpload(event) {
        const file = event.target.files[0]; if (!file) return;
        const status = document.getElementById('audio-upload-status');
        const AUDIO_MAX_BYTES = 50 * 1024 * 1024; // 50MB - حماية من ملفات ضخمة تستهلك رصيد السيرفر ووقت المستخدم
        if (file.size > AUDIO_MAX_BYTES) {
            status.innerText = currentUiLang === 'en' ? 'File too large (max 50MB). Try a shorter clip.' : 'حجم الملف كبير جداً (أقصى حجم 50MB)، جرب مقطع أقصر.';
            event.target.value = '';
            return;
        }
        status.innerText = (currentUiLang === 'en' ? 'Uploading & transcribing: ' : 'جاري رفع وتفريغ بدقة عالية: ') + file.name + ' …';
        if (!checkDeviceTrial()) { status.innerText = ''; return; }
        try {
            const text = await transcribeAudioBlob(file, file.name);
            document.getElementById('transcribe-raw').value = text;
            status.innerText = currentUiLang === 'en' ? '✓ Transcribed successfully. Review below, then click Clean Up.' : '✓ اتفرّغ بنجاح. راجع النص تحت واضغط "نظّف وحسّن التنسيق".';
            incrementDeviceUsage();
        } catch (e) {
            console.warn('Whisper transcription failed:', e);
            status.innerText = currentUiLang === 'en' ? 'Auto-transcription failed. Please paste the text manually or try again.' : 'تعذر التفريغ التلقائي. جرب تاني أو الصق النص يدوياً.';
        }
    }

    // ============ Transcribe cleanup/translate ============
    async function runTranscribeCleanup() {
        const raw = document.getElementById('transcribe-raw').value.trim();
        if (!raw) return showToast("سجّل أو الصق نص أولاً.", 'error');
        if (!checkDeviceTrial()) return;
        const targetLang = document.getElementById('transcribe-target-lang').value;
        const box = document.getElementById('transcribe-result');
        box.classList.remove('hidden'); box.innerHTML = spinnerHTML("جاري التنظيف والتنسيق...");
        incrementDeviceUsage();
        const instruction = targetLang
            ? `نظّف علامات الترقيم وصحح الأخطاء الإملائية الواضحة فقط في النص، وترجمه بالكامل إلى ${targetLang} بجودة عالية ودقة كاملة في المعنى.`
            : `نظّف علامات الترقيم وصحح الأخطاء الإملائية الواضحة فقط في النص من غير ما تغير اللغة أو المعنى.`;
        const messages = [
            { role: "system", content: `أنت مدقق تفريغ صوتي محترف جداً ودقيق للغاية. ${instruction} القاعدة الأهم: النص ده مفرّغ من صوت حقيقي، فممنوع تماماً إنك تضيف أي كلمة أو جملة مش موجودة، أو تحذف أي كلمة قيلت فعلاً، أو تلخص، أو "تفهم قصد المتكلم" وتغيّر كلامه - لازم يفضل نفس الكلام بالظبط اللي اتقال، بس بصياغة نظيفة وعلامات ترقيم صحيحة وتقسيم فقرات منطقي. لو في كلمة مش واضحة في الأصل، سيبها زي ما هي من غير تخمين. بدون رموز markdown.` },
            { role: "user", content: raw }
        ];
        try { renderResult(box, await callGroqConversation(messages), 'transcript.txt'); }
        catch (e) { box.innerHTML = errorHTML("تعذر التنظيف، حاول تاني."); }
    }

    // ============ Shared: load an external script once (used by video mock interview face-api) ============
    function loadScriptOnce(src) {
        return new Promise((resolve, reject) => {
            if (document.querySelector(`script[src="${src}"]`)) return resolve();
            const s = document.createElement('script');
            s.src = src; s.onload = () => resolve(); s.onerror = () => reject(new Error('تعذر تحميل المكتبة المطلوبة.'));
            document.head.appendChild(s);
        });
    }

    // ============ 30-second self pitch (elevator pitch), linked to saved CV & profile ============
    let lastPitchText = '';
    function importPitchFromProfile() {
        const profile = getProfile();
        if (profile && profile.title && !document.getElementById('pitch-role').value.trim()) {
            document.getElementById('pitch-role').value = profile.title;
        }
        if (cvContent && !document.getElementById('pitch-highlight').value.trim()) {
            document.getElementById('pitch-highlight').value = cvContent.slice(0, 500);
        }
        if (!profile?.title && !cvContent) {
            showToast('مفيش بيانات محفوظة في البروفايل أو الـ CV لسه، تقدر تكتب بياناتك يدوياً هنا أو تجهّزهم الأول من صفحة "الملف الشخصي" أو "بناء السيرة الذاتية".', 'error');
            return;
        }
        showToast('تم سحب البيانات المتاحة، كمّل أو عدّل زي ما يناسبك.', 'success');
    }
    async function runElevatorPitch() {
        const role = document.getElementById('pitch-role').value.trim();
        if (!role) return showToast('اكتب الوظيفة أو المجال المستهدف أولاً.', 'error');
        if (!checkDeviceTrial()) return;
        const purpose = document.getElementById('pitch-purpose').value;
        const tone = document.getElementById('pitch-tone').value;
        const highlight = document.getElementById('pitch-highlight').value.trim();
        const box = document.getElementById('pitch-result');
        box.classList.remove('hidden'); box.innerHTML = spinnerHTML('جاري صياغة نص التقديم...');
        document.getElementById('pitch-audio-box').classList.add('hidden');
        incrementDeviceUsage();
        const profile = getProfile();
        const messages = [
            { role: "system", content: `أنت كوتش تقديم ذاتي (Personal Pitch / Elevator Pitch) محترف جداً. اكتب نص تقديم ذاتي بصيغة المتكلم (أنا)، مكتوب عشان يتقال بصوت عادي غير مستعجل خلال حوالي 30 ثانية بالظبط (يعني تقريباً 75-90 كلمة عربي مش أكتر ولا أقل بشكل واضح). النص يشمل: مقدمة قصيرة عن مين هو/هي، أهم خبرة أو مهارة تخدم الهدف المطلوب، وخاتمة قوية تربطه بالهدف من التقديم. الأسلوب: ${tone}. الهدف من التقديم: ${purpose}. اكتب فقرة واحدة متصلة (من غير عناوين أو نقاط أو رموز markdown)، وفي آخر السطر ضيف على سطر منفصل بس: "عدد الكلمات التقريبي: X كلمة".` },
            { role: "user", content: `اسمي (لو موجود): ${profile?.name || 'غير محدد، اكتب النص عام بدون اسم صريح'}\nالوظيفة/المجال المستهدف: ${role}\nأهم نقاط عايز أبرزها: ${highlight || 'مفيش نقاط محددة، استنتج من الوظيفة المطلوبة حاجات منطقية وعامة'}${cvContent ? '\n\nملخص من الـ CV المحفوظ (استخدمه كسياق لو مفيد): ' + cvContent.slice(0, 1200) : ''}` }
        ];
        try {
            const text = await callGroqConversation(messages);
            lastPitchText = text.replace(/عدد الكلمات التقريبي:.*$/i, '').trim();
            renderResult(box, text, 'pitch-30-seconds.txt');
            const wordCount = lastPitchText.split(/\s+/).filter(Boolean).length;
            const estSeconds = Math.round((wordCount / 140) * 60); // ~140 كلمة عربي/دقيقة بمعدل كلام هادئ وواضح
            document.getElementById('pitch-timing').innerText = `عدد الكلمات: ${wordCount} — يقابل تقريباً ${estSeconds} ثانية بمعدل كلام هادئ وواضح.`;
            document.getElementById('pitch-audio-box').classList.remove('hidden');
        } catch (e) { box.innerHTML = errorHTML('تعذر توليد النص، حاول تاني.'); }
    }
    function previewPitchAudio() {
        if (!lastPitchText) return;
        speakText(lastPitchText);
    }

    // ============ Screenshot (takes an image of a whole chat/box, even if it's long) ============
    async function screenshotElement(elId, filename) {
        const el = document.getElementById(elId);
        if (!el || !el.childNodes.length) { showToast('مفيش محادثة عشان تتصور لسه.', 'error'); return; }
        if (typeof html2canvas === 'undefined') { showToast('تعذر تحميل أداة التصوير، تأكد من الاتصال بالإنترنت وحاول تاني.', 'error'); return; }
        // نفك أي تحديد ارتفاع/سكرول مؤقتاً عشان الصورة تاخد المحادثة كلها من أول لآخر حتى لو طويلة
        const prevHeight = el.style.height, prevMaxHeight = el.style.maxHeight, prevOverflow = el.style.overflow;
        el.style.height = 'auto'; el.style.maxHeight = 'none'; el.style.overflow = 'visible';
        try {
            let canvas = await html2canvas(el, {
                backgroundColor: '#20252c',
                scale: Math.min(2, window.devicePixelRatio || 1.5),
                useCORS: true
            });
            // لو المحادثة طويلة والصورة الناتجة كبيرة جداً، نصغّرها عشان تبقى بحجم صورة عادي وسهلة المشاركة
            const MAX_DIM = 3200;
            if (canvas.width > MAX_DIM || canvas.height > MAX_DIM) {
                const ratio = Math.min(MAX_DIM / canvas.width, MAX_DIM / canvas.height);
                const scaledCanvas = document.createElement('canvas');
                scaledCanvas.width = Math.round(canvas.width * ratio);
                scaledCanvas.height = Math.round(canvas.height * ratio);
                scaledCanvas.getContext('2d').drawImage(canvas, 0, 0, scaledCanvas.width, scaledCanvas.height);
                canvas = scaledCanvas;
            }
            canvas.toBlob((blob) => {
                if (!blob) { showToast('تعذر إنشاء الصورة، حاول تاني.', 'error'); return; }
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a'); a.href = url; a.download = filename || 'yusr-chat.png';
                document.body.appendChild(a); a.click(); a.remove();
                URL.revokeObjectURL(url);
            }, 'image/png');
        } catch (e) {
            console.warn('Screenshot failed:', e);
            showToast('تعذر تصوير المحادثة، حاول تاني.', 'error');
        } finally {
            el.style.height = prevHeight; el.style.maxHeight = prevMaxHeight; el.style.overflow = prevOverflow;
        }
    }

    // ============ Shared helpers ============
    function spinnerHTML(msg) { return `<div class="text-xs text-slate-400 flex items-center gap-2 justify-center py-8"><i class="fa-solid fa-spinner fa-spin"></i> ${msg}</div>`; }
    function errorHTML(msg) { return `<div class="text-xs text-red-400 text-center py-8">${msg}</div>`; }
    function formatReportText(text) {
        const escaped = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        const bold = escaped.replace(/\*\*(.+?)\*\*/g, '<b class="text-slate-100">$1</b>');
        return bold.split('\n').filter(l => l.trim().length > 0).map(l => `<p class="mb-2">${l}</p>`).join('');
    }
    function handleKeyPress(e) { if (e.key === 'Enter') sendUserAnswer(); }
    // بنشيل علامات التشكيل (الفتحة/الضمة/الكسرة/السكون/الشدة...) من أي نص عربي قبل ما نعرضه على الشاشة
    // أو نصدّره كملف/نسخه — التشكيل بيفضل موجود في النص الأصلي المُرسل للصوت (speakText) عشان النطق يبقى مضبوط،
    // بس المستخدم مش عايز يشوفه ظاهر في المحادثة نفسها.
    function stripArabicDiacritics(str) {
        return String(str == null ? '' : str).replace(/[\u0610-\u061A\u064B-\u065F\u06D6-\u06ED\u0670]/g, '');
    }
    // بنعقّم أي نص جاي من المستخدم أو من رد الـ AI قبل ما نحقنه في innerHTML، عشان نمنع XSS
    // (لو حد كتب <img src=x onerror=...> كإجابة، أو لو رد الـ AI نفسه طلع فيه HTML بسبب prompt injection).
    function escapeHtml(str) {
        return String(str == null ? '' : str)
            .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    }
    function appendChatMessage(sender, message, isRawHtml) {
        const box = document.getElementById('chat-history');
        const div = document.createElement('div');
        const displayMessage = sender === "ai" ? stripArabicDiacritics(message) : message;
        const safeMessage = isRawHtml ? displayMessage : escapeHtml(displayMessage);
        if (sender === "ai") {
            div.className = "panel border border-[var(--border)] p-3 rounded-xl text-xs sm:text-sm space-y-1";
            div.innerHTML = `<div class="flex items-center gap-1 text-slate-300 font-bold text-[10px]"><i class="fa-solid fa-user-tie"></i> ${escapeHtml(currentInterviewerName)} (HR)</div><div>${safeMessage}</div>`;
        } else {
            div.className = "bg-[#262b32] border border-[var(--border)] p-3 rounded-xl text-xs sm:text-sm space-y-1 mr-4";
            div.innerHTML = `<div class="flex items-center gap-1 text-slate-400 font-bold text-[10px]"><i class="fa-solid fa-user"></i> أنت</div><div>${safeMessage}</div>`;
        }
        box.appendChild(div); box.scrollTop = box.scrollHeight;
    }
    function openPricingModal() { document.getElementById('pricing-modal').classList.remove('hidden'); }
    function closePricingModal() { document.getElementById('pricing-modal').classList.add('hidden'); }
    function openCvModal() { document.getElementById('cv-modal').classList.remove('hidden'); }
    function closeCvModal() { document.getElementById('cv-modal').classList.add('hidden'); }
    function saveCvData() { cvContent = document.getElementById('cv-text-input').value; closeCvModal(); showToast("تم حفظ الخبرات! هتتخصص أسئلة المقابلة بناءً عليها.", 'success'); }

    checkDeviceTrial();
    updateAccountChip();
    applyI18n();
    checkTermsGate();
    updateVoiceGenderButtons();
    checkInterviewResumeBanner();
    checkAndFireReminderNotification();
    setInterval(checkAndFireReminderNotification, 60 * 1000);
