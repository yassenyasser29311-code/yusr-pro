// ==== Auto-generated: inline event-handler registry ====
// Replaces onclick/onchange/oninput/onkeydown/onkeypress HTML attributes
// so CSP script-src no longer needs 'unsafe-inline'. Each entry is the
// original inline JS, now run as a real function with the same
// `this` (the element) / `event` binding it had as an inline attribute.
window.__H = {
  h0: function(event) { toggleSupportChat() },
  h1: function(event) { if(event.key==='Enter'){event.preventDefault();sendSupportChatMessage();} },
  h2: function(event) { sendSupportChatMessage() },
  h3: function(event) { triggerGoogleSignIn() },
  h4: function(event) { switchAuthGateTab('login') },
  h5: function(event) { switchAuthGateTab('signup') },
  h6: function(event) { togglePasswordVisibility('auth-gate-password', this) },
  h7: function(event) { openForgotPasswordModal() },
  h8: function(event) { togglePasswordVisibility('auth-gate-confirm', this) },
  h9: function(event) { submitEmailAuth() },
  h10: function(event) { submitForgotPassword() },
  h11: function(event) { closeForgotPasswordModal() },
  h12: function(event) { requestPasswordChange() },
  h13: function(event) { logoutFromSuspended() },
  h14: function(event) { togglePasswordVisibility('admin-gate-password', this) },
  h15: function(event) { adminGateSubmitLogin() },
  h16: function(event) { adminGateSubmitConfirm() },
  h17: function(event) { adminGateClose() },
  h18: function(event) { adminOpenAllChats() },
  h19: function(event) { adminBackupNow() },
  h20: function(event) { adminExportUsersCsv() },
  h21: function(event) { adminRefreshAll() },
  h22: function(event) { adminLogout() },
  h23: function(event) { adminRenderTrendChart() },
  h24: function(event) { adminRecordStatsNow() },
  h25: function(event) { adminSendBroadcast() },
  h26: function(event) { adminLoadSubscriptionRequests() },
  h27: function(event) { adminLoadFeedback() },
  h28: function(event) { adminRenderUsers() },
  h29: function(event) { adminLoadMoreUsers() },
  h30: function(event) { adminCreateAccount() },
  h31: function(event) { adminLoadActivityLog() },
  h32: function(event) { adminExportActivityLogCsv() },
  h33: function(event) { adminCloseAllChats() },
  h34: function(event) { if(event.key==='Enter'){event.preventDefault();adminAllChatsSend();} },
  h35: function(event) { adminAllChatsSend() },
  h36: function(event) { adminCloseUserModal() },
  h37: function(event) { adminModalUserAction('setPlan', this.value) },
  h38: function(event) { adminModalUserAction('setCustomLimit', this.value === '' ? null : this.value) },
  h39: function(event) { adminModalToggleSuspend() },
  h40: function(event) { adminModalUserAction('resetUsage') },
  h41: function(event) { adminModalSendPasswordReset() },
  h42: function(event) { adminModalSavePermissions() },
  h43: function(event) { if(event.key==='Enter'){event.preventDefault();adminModalSendChat();} },
  h44: function(event) { adminModalSendChat() },
  h45: function(event) { adminModalDeleteUser() },
  h46: function(event) { adminGateSecretTap() },
  h47: function(event) { toggleSidebar() },
  h48: function(event) { filterSidebarNav(this.value) },
  h49: function(event) { clearSidebarSearch() },
  h50: function(event) { switchView('assistant', this) },
  h51: function(event) { switchView('interview', this) },
  h52: function(event) { switchView('faq', this) },
  h53: function(event) { switchView('career', this) },
  h54: function(event) { switchView('video', this) },
  h55: function(event) { switchView('salary', this) },
  h56: function(event) { switchView('progress', this) },
  h57: function(event) { switchView('cv', this) },
  h58: function(event) { switchView('match', this) },
  h59: function(event) { switchView('cover', this) },
  h60: function(event) { switchView('portfolio', this) },
  h61: function(event) { switchView('writing', this) },
  h62: function(event) { switchView('summarizer', this) },
  h63: function(event) { switchView('transcribe', this) },
  h64: function(event) { switchView('pitch', this) },
  h65: function(event) { switchView('about', this) },
  h66: function(event) { switchView('history', this) },
  h67: function(event) { switchView('profile', this) },
  h68: function(event) { switchView('subscriptions', this) },
  h69: function(event) { switchView('donations', this) },
  h70: function(event) { switchView('support', this) },
  h71: function(event) { switchView('terms', this) },
  h72: function(event) { switchView('privacy', this) },
  h73: function(event) { dismissPwaInstallBanner(event) },
  h74: function(event) { triggerPwaInstall() },
  h75: function(event) { dismissApkPromo(event) },
  h76: function(event) { switchViewByName('profile') },
  h77: function(event) { openPricingModal() },
  h78: function(event) { switchViewByName('support') },
  h79: function(event) { toggleTheme() },
  h80: function(event) { setAppLanguage(this.value) },
  h81: function(event) { resendVerificationEmail() },
  h82: function(event) { recheckEmailVerification() },
  h83: function(event) { openCvModal() },
  h84: function(event) { resumeInterviewSession() },
  h85: function(event) { discardInterviewSession() },
  h86: function(event) { setVoiceGender('male') },
  h87: function(event) { setVoiceGender('female') },
  h88: function(event) { startInterviewSession() },
  h89: function(event) { copyChatTranscript() },
  h90: function(event) { screenshotElement('chat-history', 'yusr-interview-chat.png') },
  h91: function(event) { downloadChatTranscript() },
  h92: function(event) { endInterviewSession() },
  h93: function(event) { stopSpeaking() },
  h94: function(event) { toggleMic() },
  h95: function(event) { handleKeyPress(event) },
  h96: function(event) { sendUserAnswer() },
  h97: function(event) { generatePerformanceReport() },
  h98: function(event) { runFaqGenerator() },
  h99: function(event) { runCareerPlanner() },
  h100: function(event) { generateVideoMockPrompt() },
  h101: function(event) { startVideoMockCamera() },
  h102: function(event) { toggleVideoMockRecording() },
  h103: function(event) { stopVideoMockCamera() },
  h104: function(event) { generateSchedulingEmail() },
  h105: function(event) { reviewSchedulingReply() },
  h106: function(event) { generateSalaryFollowupQuestions() },
  h107: function(event) { generateDressTips() },
  h108: function(event) { setVoiceGender(voiceGenderPref === 'female' ? 'male' : 'female') },
  h109: function(event) { toggleAssistantVoice() },
  h110: function(event) { clearAssistantChat() },
  h111: function(event) { removeAssistantImage() },
  h112: function(event) { handleAssistantImageSelect(event) },
  h113: function(event) { document.getElementById('assistant-image-input').click() },
  h114: function(event) { toggleAssistantMic() },
  h115: function(event) { handleAssistantInputKey(event) },
  h116: function(event) { sendAssistantMessage() },
  h117: function(event) { runSalaryInsights() },
  h118: function(event) { setInterviewReminder() },
  h119: function(event) { requestReminderNotificationPermission(true) },
  h120: function(event) { runProgressSummaryReport() },
  h121: function(event) { clearProgressHistory() },
  h122: function(event) { runProgressCompare() },
  h123: function(event) { switchCvTab('plain') },
  h124: function(event) { switchCvTab('linkedin') },
  h125: function(event) { runCvBuilder('plain') },
  h126: function(event) { previewCvLiPhoto(event) },
  h127: function(event) { runCvBuilder('linkedin') },
  h128: function(event) { fillMatchResumeFromSaved() },
  h129: function(event) { runCvJobMatch() },
  h130: function(event) { extractCvFromFile(event) },
  h131: function(event) { runCoverLetterGenerator() },
  h132: function(event) { startPortfolioChat() },
  h133: function(event) { copyPfTranscript() },
  h134: function(event) { screenshotElement('pf-chat-history', 'yusr-portfolio-chat.png') },
  h135: function(event) { if(event.key==='Enter') sendPortfolioAnswer() },
  h136: function(event) { sendPortfolioAnswer() },
  h137: function(event) { runPortfolioBuilder() },
  h138: function(event) { runWritingReview() },
  h139: function(event) { runWritingAbstract() },
  h140: function(event) { runWritingVocabBooster() },
  h141: function(event) { runSummarizer() },
  h142: function(event) { handleAudioFileUpload(event) },
  h143: function(event) { toggleTranscribeMic() },
  h144: function(event) { runTranscribeCleanup() },
  h145: function(event) { importPitchFromProfile() },
  h146: function(event) { runElevatorPitch() },
  h147: function(event) { previewPitchAudio() },
  h148: function(event) { switchViewByName('cv') },
  h149: function(event) { switchViewByName('interview') },
  h150: function(event) { if(event.key==='Enter'||event.key===' '){event.preventDefault();this.querySelector('input,~input')||document.getElementById('profile-photo-input').click();} },
  h151: function(event) { handleProfilePhotoUpload(event) },
  h152: function(event) { saveProfileInfo() },
  h153: function(event) { switchViewByName('portfolio') },
  h154: function(event) { switchViewByName('progress') },
  h155: function(event) { switchViewByName('subscriptions') },
  h156: function(event) { logoutAccount() },
  h157: function(event) { undoCancelSubscription() },
  h158: function(event) { openCancelSubscriptionModal() },
  h159: function(event) { clearLocalAppData() },
  h160: function(event) { deleteAccountPermanently() },
  h161: function(event) { copyPlainText('01279383905', this) },
  h162: function(event) { copyPlainText('01279383843', this) },
  h163: function(event) { submitFeedback() },
  h164: function(event) { clearAllHistory() },
  h165: function(event) { if(event.target===this) closeIosInstallModal() },
  h166: function(event) { event.stopPropagation() },
  h167: function(event) { closeIosInstallModal() },
  h168: function(event) { closePricingModal() },
  h169: function(event) { openPaymentRequest('الأساسية', 79, 'شهرياً') },
  h170: function(event) { openPaymentRequest('الاحترافية', 179, 'شهرياً') },
  h171: function(event) { openPaymentRequest('النخبة', 349, 'شهرياً') },
  h172: function(event) { openPaymentRequest('السنوية', 1790, 'سنوياً') },
  h173: function(event) { saveCvData() },
  h174: function(event) { closeCvModal() },
  h175: function(event) { closeReportModal() },
  h176: function(event) { switchViewByName('terms'); closeTermsGate(true); },
  h177: function(event) { acceptTermsGate() },
  h178: function(event) { closePaymentRequestModal() },
  h179: function(event) { submitPaymentRequest() },
  h180: function(event) { closeCancelSubscriptionModal() },
  h181: function(event) { confirmCancelSubscription() },
  h182: function(event) { dismissOnboarding('profile') },
  h183: function(event) { dismissOnboarding('interview') },
  h184: function(event) { dismissOnboarding('cv') },
  h185: function(event) { dismissOnboarding() },
  hFeedbackToggle: function(event) { adminFeedbackAction(this.getAttribute('data-fb-id'), this.getAttribute('data-fb-action')) },
  hSubReviewApprove: function(event) { adminReviewSubscriptionRequest(this.getAttribute('data-req-id'), 'approve') },
  hSubReviewReject: function(event) { adminReviewSubscriptionRequest(this.getAttribute('data-req-id'), 'reject') },
  hFeedbackDelete: function(event) { adminFeedbackAction(this.getAttribute('data-fb-id'), 'delete') },
  hAllChatsOpen: function(event) { adminAllChatsOpen(this.getAttribute('data-chat-uid')) },
  hAdminOpenUserModal: function(event) { adminOpenUserModal(this.getAttribute('data-user-uid')) },
  hAdminSetPlan: function(event) { adminUserAction(this.getAttribute('data-user-uid'), 'setPlan', this.value) },
  hAdminSetCustomLimit: function(event) { adminUserAction(this.getAttribute('data-user-uid'), 'setCustomLimit', this.value === '' ? null : this.value) },
  hCopyResult: function(event) { copyResult(this) },
  hDownloadResult: function(event) { downloadResult(this, this.getAttribute('data-filename')) },
  hToggleHistoryEntry: function(event) { toggleHistoryEntry(parseInt(this.getAttribute('data-idx'), 10)) },
  hCopyHistoryEntry: function(event) { event.stopPropagation(); copyHistoryEntry(parseInt(this.getAttribute('data-idx'), 10), this) },
  hDownloadHistoryEntry: function(event) { event.stopPropagation(); downloadHistoryEntry(parseInt(this.getAttribute('data-idx'), 10)) },
  hDeleteHistoryEntry: function(event) { event.stopPropagation(); deleteHistoryEntry(parseInt(this.getAttribute('data-idx'), 10)) },
  hDownloadResultLinkedin: function(event) { downloadResult(this, 'cv-linkedin-style.txt') },
  hExportCvLinkedInImage: function(event) { exportCvLinkedInImage() },
  hToggleProgressDetail: function(event) { document.getElementById('progress-detail-' + this.getAttribute('data-idx')).classList.toggle('hidden') },
};

(function () {
  function fire(attr, e) {
    var el = e.target.closest && e.target.closest('[data-x-' + attr + ']');
    if (!el) return;
    var key = el.getAttribute('data-x-' + attr);
    var fn = window.__H[key];
    if (typeof fn === 'function') fn.call(el, e);
  }
  ['click', 'keydown', 'keypress', 'change', 'input'].forEach(function (evtName) {
    var attr = 'on' + evtName;
    document.addEventListener(evtName, function (e) { fire(attr, e); });
  });
})();

    function showToast(message, type = 'info') {
        const container = document.getElementById('toast-container');
        if (!container) { console.warn(message); return; }
        const icon = type === 'error' ? 'fa-circle-exclamation' : (type === 'success' ? 'fa-circle-check' : (type === 'warning' ? 'fa-triangle-exclamation' : 'fa-circle-info'));
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

    const CLOUD_FUNCTIONS_BASE = "https://yusr-worker.yassen-yasser29311.workers.dev";

    let clientErrorReportCount = 0;
    const CLIENT_ERROR_REPORT_MAX = 8;
    const reportedErrorSignatures = new Set();
    function reportClientError(payload) {
        try {
            if (clientErrorReportCount >= CLIENT_ERROR_REPORT_MAX) return;
            const signature = `${payload.message || ''}|${payload.source || ''}:${payload.line || 0}`;
            if (reportedErrorSignatures.has(signature)) return;
            reportedErrorSignatures.add(signature);
            clientErrorReportCount++;
            const activeView = document.querySelector('.view.active');
            fetch(`${CLOUD_FUNCTIONS_BASE}/logClientError`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: payload.message,
                    stack: payload.stack,
                    source: payload.source,
                    line: payload.line || 0,
                    col: payload.col || 0,
                    pageUrl: location.href,
                    view: activeView ? activeView.id : '',
                    lang: typeof currentUiLang !== 'undefined' ? currentUiLang : navigator.language,
                    appVersion: 'v10'
                })
            }).catch(() => {});
        } catch (e) { /* صامت عمدًا */ }
    }
    window.addEventListener('error', function (e) {
        reportClientError({
            message: e.message,
            source: e.filename,
            line: e.lineno,
            col: e.colno,
            stack: e.error && e.error.stack
        });
    });
    window.addEventListener('unhandledrejection', function (e) {
        const reason = e.reason;
        reportClientError({
            message: 'Unhandled Promise Rejection: ' + (reason && reason.message ? reason.message : String(reason)),
            stack: reason && reason.stack
        });
    });

    let isVoiceEnabled = true;
    let interviewRole = "", selectedNationality = "", chatHistory = [], cvContent = "";
    let currentInterviewerName = "أحمد"; // بيتغيّر لـ"مريم" تلقائياً لو المستخدم اختار صوت الست
    let recognition = null, isRecording = false, recordStartTime = 0;
    let speakingStats = [];
    let currentAppLang = 'ar-EG';

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
    let speakQueueToken = 0;
    let cachedBrowserVoices = [];
    if ('speechSynthesis' in window) {
        const refreshVoices = () => { cachedBrowserVoices = window.speechSynthesis.getVoices() || []; };
        refreshVoices();
        window.speechSynthesis.onvoiceschanged = refreshVoices;
    }
    const INTERVIEW_STATE_KEY = 'yusr_interview_session_v1';

    const VIEW_TITLES = {
        about: { ar:"من نحن", en:"About Us", fr:"À propos de nous", es:"Sobre nosotros", tr:"Hakkımızda", de:"Über uns", hi:"हमारे बारे में", ur:"ہمارے بارے میں", fa:"درباره ما" },
        assistant: { ar:"يسر Pro Bot", en:"Yusr Pro Bot", fr:"Yusr Pro Bot", es:"Yusr Pro Bot", tr:"Yusr Pro Bot", de:"Yusr Pro Bot", hi:"यूसर प्रो बॉट", ur:"یسر پرو بوٹ", fa:"یسر پرو بات" },
        interview: { ar:"مقابلة تدريبية صوتية", en:"Voice Mock Interview", fr:"Entretien d'entraînement vocal", es:"Entrevista de práctica por voz", tr:"Sesli Deneme Mülakatı", de:"Sprachbasiertes Übungsvorstellungsgespräch", hi:"वॉयस मॉक इंटरव्यू", ur:"صوتی مشقی انٹرویو", fa:"مصاحبه تمرینی صوتی" },
        faq: { ar:"أسئلة شائعة + إجابات نموذجية", en:"FAQ + Model Answers", fr:"FAQ + Réponses types", es:"Preguntas frecuentes + Respuestas modelo", tr:"SSS + Örnek Cevaplar", de:"FAQ + Musterantworten", hi:"सामान्य प्रश्न + मॉडल उत्तर", ur:"عمومی سوالات + نمونہ جوابات", fa:"سوالات متداول + پاسخ‌های نمونه" },
        career: { ar:"خطة التطور المهني", en:"Career Growth Plan", fr:"Plan de progression de carrière", es:"Plan de desarrollo profesional", tr:"Kariyer Gelişim Planı", de:"Karriereentwicklungsplan", hi:"करियर विकास योजना", ur:"کیریئر گروتھ پلان", fa:"برنامه رشد شغلی" },
        video: { ar:"محاكي مقابلة فيديو", en:"Video Mock Interview", fr:"Entretien simulé vidéo", es:"Entrevista simulada en video", tr:"Video Mülakat Simülasyonu", de:"Video-Vorstellungsgespräch-Simulator", hi:"वीडियो मॉक इंटरव्यू", ur:"ویڈیو موک انٹرویو", fa:"مصاحبه شبیه‌سازی‌شده ویدیویی" },
        salary: { ar:"تقدير الراتب المتوقع", en:"Salary Insights", fr:"Estimation du salaire", es:"Estimación salarial", tr:"Maaş Tahmini", de:"Gehaltseinschätzung", hi:"वेतन अनुमान", ur:"تنخواہ کا تخمینہ", fa:"برآورد حقوق" },
        progress: { ar:"متابعة التقدم", en:"Progress Tracking", fr:"Suivi de la progression", es:"Seguimiento del progreso", tr:"İlerleme Takibi", de:"Fortschrittsverfolgung", hi:"प्रगति ट्रैकिंग", ur:"پیش رفت کی نگرانی", fa:"پیگیری پیشرفت" },
        cv: { ar:"بناء السيرة الذاتية", en:"CV Builder", fr:"Créateur de CV", es:"Creador de CV", tr:"CV Oluşturucu", de:"Lebenslauf-Ersteller", hi:"सीवी बिल्डर", ur:"سی وی بلڈر", fa:"سازنده رزومه" },
        match: { ar:"مطابقة CV مع الوظيفة", en:"CV Job Match", fr:"Correspondance CV-emploi", es:"Coincidencia CV-empleo", tr:"CV-İş Eşleştirme", de:"Lebenslauf-Job-Abgleich", hi:"सीवी-जॉब मिलान", ur:"سی وی جاب میچ", fa:"تطابق رزومه با شغل" },
        cover: { ar:"مولّد رسائل توظيف", en:"Cover Letter Generator", fr:"Générateur de lettre de motivation", es:"Generador de carta de presentación", tr:"Ön Yazı Oluşturucu", de:"Anschreiben-Generator", hi:"कवर लेटर जनरेटर", ur:"کور لیٹر جنریٹر", fa:"تولیدکننده نامه معرفی" },
        portfolio: { ar:"بورتفوليو شخصي", en:"Personal Portfolio", fr:"Portfolio personnel", es:"Portafolio personal", tr:"Kişisel Portfolyo", de:"Persönliches Portfolio", hi:"व्यक्तिगत पोर्टफोलियो", ur:"ذاتی پورٹ فولیو", fa:"نمونه‌کار شخصی" },
        writing: { ar:"تدقيق وتنسيق أكاديمي", en:"Academic Writing Review", fr:"Relecture académique", es:"Revisión de escritura académica", tr:"Akademik Yazı İncelemesi", de:"Akademische Schreibprüfung", hi:"शैक्षणिक लेखन समीक्षा", ur:"علمی تحریر کا جائزہ", fa:"بررسی نگارش دانشگاهی" },
        summarizer: { ar:"تلخيص المستندات", en:"Document Summarizer", fr:"Résumé de documents", es:"Resumidor de documentos", tr:"Belge Özetleyici", de:"Dokumenten-Zusammenfasser", hi:"दस्तावेज़ सारांशक", ur:"دستاویز خلاصہ کار", fa:"خلاصه‌ساز اسناد" },
        transcribe: { ar:"تفريغ الصوت إلى نص", en:"Speech to Text", fr:"Transcription audio en texte", es:"Voz a texto", tr:"Sesten Metne", de:"Sprache zu Text", hi:"स्पीच टू टेक्स्ट", ur:"اسپیچ ٹو ٹیکسٹ", fa:"تبدیل گفتار به متن" },
        pitch: { ar:"قدّم نفسك في 30 ثانية", en:"30-Second Self Pitch", fr:"Présentation en 30 secondes", es:"Presentación de 30 segundos", tr:"30 Saniyelik Kendini Tanıtım", de:"30-Sekunden-Selbstvorstellung", hi:"30-सेकंड सेल्फ पिच", ur:"30 سیکنڈ سیلف پچ", fa:"معرفی ۳۰ ثانیه‌ای" },
        profile: { ar:"الملف الشخصي", en:"Profile", fr:"Profil", es:"Perfil", tr:"Profil", de:"Profil", hi:"प्रोफ़ाइल", ur:"پروفائل", fa:"پروفایل" },
        subscriptions: { ar:"الاشتراكات", en:"Subscriptions", fr:"Abonnements", es:"Suscripciones", tr:"Abonelikler", de:"Abonnements", hi:"सदस्यताएं", ur:"سبسکرپشنز", fa:"اشتراک‌ها" },
        donations: { ar:"التبرعات", en:"Donations", fr:"Dons", es:"Donaciones", tr:"Bağışlar", de:"Spenden", hi:"दान", ur:"عطیات", fa:"کمک‌های مالی" },
        support: { ar:"الدعم والتواصل", en:"Support", fr:"Assistance", es:"Soporte", tr:"Destek", de:"Support", hi:"सहायता", ur:"معاونت", fa:"پشتیبانی" },
        terms: { ar:"شروط الاستخدام", en:"Terms of Use", fr:"Conditions d'utilisation", es:"Términos de uso", tr:"Kullanım Koşulları", de:"Nutzungsbedingungen", hi:"उपयोग की शर्तें", ur:"استعمال کی شرائط", fa:"شرایط استفاده" },
        privacy: { ar:"سياسة الخصوصية", en:"Privacy Policy", fr:"Politique de confidentialité", es:"Política de privacidad", tr:"Gizlilik Politikası", de:"Datenschutzrichtlinie", hi:"गोपनीयता नीति", ur:"پرائیویسی پالیسی", fa:"سیاست حفظ حریم خصوصی" },
        history: { ar:"السجل الموحّد", en:"Unified History", fr:"Historique unifié", es:"Historial unificado", tr:"Birleşik Geçmiş", de:"Einheitlicher Verlauf", hi:"एकीकृत इतिहास", ur:"متحدہ ہسٹری", fa:"تاریخچه یکپارچه" }
    };
    function viewTitle(view) {
        const entry = VIEW_TITLES[view];
        return (entry && (entry[currentUiLang] || entry.ar)) || '';
    }

    function switchView(view, el) {
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
        document.getElementById('view-' + view).classList.add('active');
        document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
        if (el) el.classList.add('active');
        document.getElementById('view-title').innerText = viewTitle(view);
        if (view === 'profile') refreshProfileView();
        if (view === 'progress') renderProgressView();
        if (view === 'history') renderHistoryView();
        if (view === 'interview') checkInterviewResumeBanner();
        if (view === 'assistant') { renderAssistantMessages(); updateAssistantVoiceBtn(); }
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
    if (window.innerWidth < 1024) document.getElementById('sidebar').classList.add('collapsed');

    function filterSidebarNav(query) {
        const q = (query || '').trim().toLowerCase();
        const clearBtn = document.getElementById('sidebar-search-clear');
        if (clearBtn) clearBtn.classList.toggle('hidden', !q);
        const sections = document.querySelectorAll('#sidebar nav > div');
        let anyVisibleTotal = false;
        sections.forEach(section => {
            const items = section.querySelectorAll('.nav-item');
            if (!items.length) return; // مش قسم أدوات (زي خانة البحث نفسها)
            let anyVisible = false;
            items.forEach(item => {
                const label = item.querySelector('.sidebar-label');
                const text = label ? label.textContent.toLowerCase() : '';
                const match = !q || text.includes(q);
                item.classList.toggle('hidden', !match);
                if (match) anyVisible = true;
            });
            section.classList.toggle('hidden', !anyVisible);
            if (anyVisible) anyVisibleTotal = true;
        });
        const emptyMsg = document.getElementById('sidebar-search-empty');
        if (emptyMsg) emptyMsg.classList.toggle('hidden', !q || anyVisibleTotal);
    }
    function clearSidebarSearch() {
        const input = document.getElementById('sidebar-search-input');
        if (input) { input.value = ''; input.focus(); }
        filterSidebarNav('');
    }
    window.filterSidebarNav = filterSidebarNav;
    window.clearSidebarSearch = clearSidebarSearch;

    let currentUiLang = 'ar';
    const I18N = {
        ar: {
            "nav.searchPh":"بحث في الأدوات...","nav.searchEmpty":"مفيش نتايج مطابقة","nav.section.interviews":"المقابلات والتوظيف","nav.interview":"مقابلة تدريبية صوتية","nav.faq":"أسئلة شائعة + إجابات نموذجية","nav.career":"خطة التطور المهني","nav.section.documents":"المستندات","nav.cv":"بناء السيرة الذاتية","nav.portfolio":"بورتفوليو شخصي","nav.writing":"تدقيق وتنسيق أكاديمي","nav.summarizer":"تلخيص المستندات","nav.section.audio":"الصوت والفيديو","nav.transcribe":"تفريغ الصوت إلى نص","nav.pitch":"قدّم نفسك في 30 ثانية","nav.section.account":"الحساب والدعم","nav.about":"من نحن","nav.history":"السجل الموحّد","nav.profile":"الملف الشخصي","nav.subscriptions":"الاشتراكات","nav.donations":"التبرعات","nav.support":"الدعم والتواصل","nav.section.legal":"قانوني","nav.terms":"شروط الاستخدام","nav.privacy":"سياسة الخصوصية","nav.section.ai":"الذكاء الاصطناعي","nav.videoMock":"محاكي مقابلة فيديو","nav.salary":"تقدير الراتب المتوقع","nav.progress":"متابعة التقدم","nav.match":"مطابقة CV مع الوظيفة","nav.cover":"مولّد رسائل توظيف","nav.closeMenu":"إغلاق القائمة","nav.clearSearch":"مسح البحث","nav.openMenu":"فتح القائمة","pwa.title":"نزّل يُسْر Pro كتطبيق","pwa.desc":"أيقونة على شاشتك الرئيسية، بيفتح زي أي تطبيق عادي","pwa.installBtn":"تثبيت التطبيق","pwa.hideAria":"إخفاء اقتراح التثبيت","hide":"إخفاء","apk.title":"جرّب تطبيقنا لأندرويد 📱","apk.desc":"أسرع وأسهل من المتصفح، وتحميله مباشر من هنا","apk.hideAria":"إخفاء اقتراح التطبيق","apk.downloadBtn":"نزّل تطبيق يُسْر Pro دلوقتي","trial.headerTitle":"المحاولات المجانية المتبقية الشهر ده","support.techLabel":"الدعم الفني","account.guest":"زائر (الجهاز ده)","account.signinHint":"سجّل دخول بجوجل لحفظ صورتك ونقاطك","authgate.title":"سجّل دخولك","authgate.subtitle":"لازم تسجّل دخول بجوجل أو بإيميلك عشان تستخدم الموقع.","authgate.googleBtn":"تسجيل الدخول بجوجل","authgate.orEmail":"أو بالإيميل","authgate.tabLogin":"تسجيل الدخول","authgate.tabSignup":"إنشاء حساب","authgate.namePh":"اسمك الكامل","authgate.emailPh":"الإيميل","authgate.passwordPh":"كلمة المرور","authgate.confirmPh":"تأكيد كلمة المرور","authgate.submitLogin":"تسجيل الدخول","authgate.submitSignup":"إنشاء الحساب","authgate.privacyNote":"بياناتك بتتحفظ بشكل آمن، وكلمة المرور متشفّرة ومش بنقدر نشوفها إحنا كأصحاب الموقع.","authgate.recaptchaNote":"هذا الموقع محمي بخدمة reCAPTCHA، وتنطبق <a href=\"https://policies.google.com/privacy\" target=\"_blank\" rel=\"noopener\" style=\"color:inherit;text-decoration:underline;\">سياسة الخصوصية</a> و<a href=\"https://policies.google.com/terms\" target=\"_blank\" rel=\"noopener\" style=\"color:inherit;text-decoration:underline;\">شروط الخدمة</a> الخاصة بـ Google.","trial.left":"المحاولات المتبقية","trial.upgrade":"ترقية للباقة الكاملة","trial.warningLow":"باقيلك {n} بس من المحاولات المجانية الشهر ده!","trial.warningLast":"دي آخر محاولة مجانية ليك الشهر ده!","copy":"نسخ","download":"تنزيل","interview.desc":"تدرّب على مقابلة شفهية حقيقية بالصوت مع تقييم أداء تفصيلي في النهاية.","interview.linkCv":"ربط الـ CV","interview.roleLabel":"الوظيفة المستهدفة","interview.rolePh":"مثلاً: مبيعات عقارات، خدمة عملاء، برمجة...","interview.personaLabel":"شخصية المحاور","interview.start":"ابدأ الجلسة","interview.speaking":"المحاور يتحدث الآن...","interview.inputPh":"تحدث بالميكروفون أو اكتب هنا...","interview.reportHint":"التقييم يحلل ردودك النصية + سرعة كلامك وعدد كلمات التردد لو تحدثت بالميكروفون.","faq.desc":"اكتب الوظيفة والمجال، وهنجهزلك بنك أسئلة شائعة حقيقي مع إجابات نموذجية مقنعة تزود فرصتك في القبول.","faq.rolePh":"مثلاً: مسؤول مبيعات عقارات","faq.run":"جهّز الأسئلة والإجابات","career.desc":"قولنا وضعك الحالي والهدف اللي عايز توصله، وهنبنيلك خطة تطور عملية بخطوات واقعية.","career.currentLabel":"وضعك الحالي","career.currentPh":"مثلاً: محاسب سنة أولى خبرة","career.targetLabel":"هدفك","career.targetPh":"مثلاً: عايز أتحول لمجال تحليل البيانات","career.contextPh":"اي تفاصيل إضافية تفيد - اختياري","career.run":"ابنِ خطتي","cv.notice":"الأداة دي بتبني محتوى ونص السيرة الذاتية بصياغة احترافية جاهزة للنسخ، مش تصميم PDF جاهز بصورة شخصية زي لينكد إن.","cv.photoHint":"صورة شخصية اختيارية (بتتحفظ في المتصفح بتاعك بس).","cv.namePh":"الاسم الكامل","cv.titlePh":"المسمى الوظيفي المستهدف","cv.expPh":"خبراتك العملية","cv.eduPh":"المؤهلات الدراسية والشهادات","cv.skillsPh":"المهارات (افصل بينها بفاصلة)","cv.run":"صِغ سيرتي الذاتية","pf.notice":"هيسألك الذكاء الاصطناعي كام سؤال بسيط عن مجالك ومشاريعك عشان يجهّزلك محتوى بورتفوليو احترافي مخصص.","pf.fieldPh":"مجالك (مصمم، مبرمج، مسوّق...)","pf.start":"ابدأ - خلي الذكاء الاصطناعي يسألني","pf.inputPh":"اكتب ردّك هنا...","pf.generate":"كفاية أسئلة - جهّز البورتفوليو الآن","writing.notice":"مراجعة لغوية وتدقيق واقتراح تنسيق أكاديمي كتوصيات نصية تطبّقها بنفسك في Word.","writing.topicPh":"موضوع البحث (اختياري)","writing.inputPh":"الصق نص البحث أو المقال هنا...","writing.run":"راجع النص","sum.desc":"لخّص أي تقرير أو مقال أو محاضرة في ثواني.","sum.inputPh":"الصق النص هنا...","sum.run":"لخّص الآن","tr.notice":"تقدر ترفع ملف صوت جاهز فيتفرّغ تلقائياً بالذكاء الاصطناعي، أو تسجل مباشرة بالمايك، أو تلصق نص جاهز.","tr.uploadBtn":"ارفع ملف صوتي وفرّغه تلقائياً","tr.uploadHint":"مفيش ملف مرفوع لسه","tr.sourceLangLabel":"لغة الكلام المصدر","tr.targetLangLabel":"ترجم النص النهائي إلى (اختياري)","tr.micHint":"اضغط للتسجيل، أو ارفع ملف فوق، أو الصق نص جاهز تحت.","tr.rawPh":"النص الخام هيظهر هنا...","tr.run":"نظّف وحسّن التنسيق","pitch.notice":"جهّز نص تقديم ذاتي احترافي مدته حوالي 30 ثانية، مربوط بالـ CV والبروفايل المحفوظين عندك.","pitch.purposeLabel":"هتستخدمه فين؟","pitch.toneLabel":"أسلوب الكلام","pitch.rolePh":"الوظيفة أو المجال المستهدف","pitch.highlightPh":"أهم نقطة أو نقطتين عايز تبرزهم - اختياري","pitch.run":"جهّز نص التقديم في 30 ثانية","profile.points":"نقطة","profile.namePh":"اسمك الكامل","profile.titlePh":"المسمى الوظيفي","profile.googleBtn":"تسجيل الدخول بحساب جوجل","profile.googleHint":"تسجيل الدخول بيحفظ اسمك وصورتك ونقاطك على نفس الجهاز — المحاولات المجانية بتُحسب على الجهاز مش على الحساب.","profile.save":"حفظ البيانات","profile.connected":"متصل بجوجل","profile.logoutBtn":"تسجيل الخروج","profile.statUsage":"مرات استخدام الأدوات","profile.statDevice":"معرّف الجهاز","profile.statPlan":"باقتك الحالية","profile.planFree":"مجاني","subs.individualTitle":"باقات الأفراد","subs.individualDesc":"لكل حد بيحضّر لمقابلة أو بيبني مسيرته المهنية بنفسه.","subs.basicName":"الأساسية","subs.perMonth":"/ شهرياً","subs.proName":"الاحترافية","subs.eliteName":"النخبة","subs.popular":"الأكثر طلباً","subs.bestValue":"أعلى فئة","subs.yearlyName":"السنوية","subs.perYear":"/ سنوياً","subs.subscribe":"اشترك الآن","subs.teamTitle":"باقات الفرق والجامعات","subs.teamDesc":"لكليات وجامعات ومراكز توظيف عايزة تدرّب مجموعة مع بعض بسعر أوفر.","subs.teamSmallName":"فريق صغير","subs.teamSmallRange":"حتى 10 أفراد","subs.perSeat":"/ للفرد شهرياً","subs.recommended":"موصى بها للجامعات","subs.teamMedName":"دفعة / كلية","subs.teamMedRange":"11 إلى 100 فرد","subs.uniName":"جامعة / مؤسسة كبيرة","subs.uniRange":"أكتر من 100 فرد","subs.customPrice":"سعر خاص حسب العدد","subs.contactUs":"تواصل معنا","don.title":"ادعم استمرار المنصة","don.desc":"لو حابب تدعم تطوير يُسْر Pro واستمراريتها، تقدر تتبرع بأي مبلغ عن طريق الأرقام دي.","don.wallet":"محفظة إلكترونية","don.thanks":"شكراً جزيلاً لكل حد بيدعم.","sup.title":"الدعم والتواصل","sup.desc":"عندك سؤال أو مشكلة أو اقتراح؟ تواصل معانا مباشرة.","sup.phone":"اتصال مباشر","sup.hours":"بنرد عادةً خلال ساعات قليلة. للاستفسارات العاجلة، الأسرع هو الواتساب.","legal.lastUpdated":"آخر تحديث: أغسطس 2026","history.pageTitle":"السجل الموحّد","history.subtitle":"آخر 20 نتيجة من أي أداة في الموقع (تلخيص، تدقيق، خطابات، وغيرها) بتتحفظ هنا تلقائيًا عشان ماتضيعش لو قفلت الصفحة.","history.listTitle":"النتائج المحفوظة","history.clearAll":"مسح الكل","history.empty":"لسه مفيش نتايج محفوظة. أي نتيجة من أدوات الموقع هتظهر هنا تلقائيًا.","onboarding.title":"أهلاً بيك في يُسْر Pro 👋","onboarding.subtitle":"3 خطوات سريعة تخليك تبدأ صح:","onboarding.step1.title":"كمّل بياناتك","onboarding.step1.desc":"بياناتك دي بتتغذّى منها باقي الأدوات زي السيرة الذاتية والمقابلة.","onboarding.step2.title":"جرب مقابلة تدريبية","onboarding.step2.desc":"اتمرن على أسئلة حقيقية بصوتك وخد تقييم فوري على أدائك.","onboarding.step3.title":"اعمل سيرتك الذاتية","onboarding.step3.desc":"هنبنيلك سيرة ذاتية احترافية في دقايق من بياناتك المحفوظة.","onboarding.tip":"تلميح: فيه خانة بحث فوق القائمة الجانبية توصّلك لأي أداة من أكتر من 20 أداة بسرعة.","onboarding.skip":"تخطي، هدوّر بنفسي","about.pageTitle":"من نحن","about.tagline":"منصة عربية بنبنيها بشغف عشان تكون رفيقك في رحلة الشغل والتطور المهني.","about.missionLabel":"رسالتنا","about.missionBody":"نؤمن إن أي حد، أياً كانت خلفيته أو ظروفه، يستاهل يوصل لفرصته المناسبة وهو واثق من نفسه ومجهّز صح. \"يُسْر Pro\" اتولدت من فكرة بسيطة: التحضير الجيد للمقابلة أو بناء سيرة ذاتية قوية متبقاش حكرة على مين عنده وقت أو فلوس أو علاقات — الذكاء الاصطناعي بقى يقدر يديك نفس الجودة دي في متناول إيدك، في أي وقت.","about.pillarsTitle":"إيه اللي بيحرّكنا","about.pillar1Title":"مساعدة حقيقية","about.pillar1Body":"مش بس أدوات، إحنا بنصمم كل ميزة عشان تحل مشكلة حقيقية بتقابل الباحث عن عمل.","about.pillar2Title":"تطور مستمر","about.pillar2Body":"بنسمع اقتراحاتكم ونضيف ونحسّن باستمرار — المنصة بتكبر معاكم خطوة بخطوة.","about.pillar3Title":"ذكاء اصطناعي في خدمتك","about.pillar3Body":"بنسخّر أحدث تقنيات الذكاء الاصطناعي عشان نديك تجربة تحضير شخصية بجودة عالية.","about.pillar4Title":"خصوصيتك أولاً","about.pillar4Body":"بياناتك ملكك إنت، ومش بنستخدمها أو نشاركها إلا عشان نقدّملك الخدمة بس.","about.whyTitle":"ليه يُسْر Pro؟","about.why1":"تجربة مصمّمة بالكامل باللغة العربية وبتفهم لهجتك.","about.why2":"كل الأدوات اللي محتاجها من مقابلة لسيرة ذاتية لبورتفوليو، في مكان واحد.","about.why3":"تقييم واقعي وصريح بيساعدك تتحسن، مش مجرد كلام عام.","about.why4":"بنطوّر المنصة باستمرار بناءً على احتياجات مستخدمينا الحقيقية.","about.closing":"عندك فكرة أو اقتراح يخلي يُسْر أحسن؟ يهمنا نسمعه.","about.contactUs":"تواصل معنا","terms.pageTitle":"شروط الاستخدام","terms.betaNotice":"صفحة \"الاشتراكات\" تعرض باقات حقيقية. الدفع بيتم يدوياً عن طريق تحويل فودافون كاش / إنستاباي على الأرقام الموضّحة، وبعد إرسال بيانات التحويل بيتم تفعيل الباقة يدوياً خلال ساعات قليلة بعد المراجعة.","terms.s1.title":"1. قبول الشروط","terms.s1.body":"باستخدامك منصة \"يُسْر Pro\"، إنت بتوافق على الشروط دي.","terms.s2.title":"2. طبيعة الخدمة","terms.s2.body":"يُسْر منصة مساعدة بالذكاء الاصطناعي لتجهيز الباحثين عن عمل: مقابلات تدريبية صوتية، بناء سيرة ذاتية وبورتفوليو، تدقيق أكاديمي، تلخيص مستندات، وتفريغ صوتي. الردود والاقتراحات مولّدة بالذكاء الاصطناعي وبتُعتبر مساعدة استرشادية، مش ضمان لنتيجة أو قبول وظيفي.","terms.s3.title":"3. الحساب والاستخدام المسموح","terms.s3.body":"لازم تسجّل دخول بحساب جوجل أو بإيميلك عشان تقدر تستخدم المنصة. إنت مسؤول عن أي نشاط بيحصل من حسابك. ممنوع: محاولة تجاوز حدود الاستخدام العادلة، إرسال طلبات آلية مكثفة (bots)، أو محاولة الوصول لأي جزء من النظام غير مصرّح لك بيه.","terms.s4.title":"4. حدود الاستخدام العادل","terms.s4.body":"لضمان استمرار الخدمة لكل المستخدمين، أدوات الذكاء الاصطناعي (المحادثة، تفريغ الصوت، تحويل النص لصوت) عليها حد أقصى يومي وشهري للاستخدام. لو وصلت للحد، هتحتاج تستنى لحد ما يتجدد.","terms.s5.title":"5. المحتوى بتاعك","terms.s5.body":"أي محتوى بتكتبه أو ترفعه (بيانات السيرة الذاتية، البورتفوليو، تسجيلات صوتية) بيفضل ملكك إنت. إحنا بنعالجه بس عشان نقدّملك الخدمة، ومش بنستخدمه لأي غرض تاني ولا بنبيعه.","terms.s6.title":"6. إخلاء المسؤولية","terms.s6.body":"الخدمة بتتقدم \"كما هي\" من غير ضمانات. إحنا مش مسؤولين عن أي قرار وظيفي أو مهني تاخده بناءً على مخرجات الذكاء الاصطناعي، وننصحك دايماً تراجع أي محتوى مهم بنفسك قبل استخدامه.","terms.s7.title":"7. التعديلات","terms.s7.body":"ممكن نعدّل الشروط دي من وقت للتاني، وهنحدّث تاريخ \"آخر تحديث\" فوق. استمرارك في استخدام المنصة بعد التعديل معناه موافقتك على النسخة الجديدة.","terms.s8.title":"8. التواصل","terms.s8.body":"لأي استفسار عن الشروط دي، تواصل معانا من صفحة \"الدعم والتواصل\".","privacy.pageTitle":"سياسة الخصوصية","privacy.s1.title":"1. مين بيجمع البيانات","privacy.s1.body":"منصة \"يُسْر Pro\" هي اللي بتجمع وتعالج بياناتك، بهدف وحيد: تقديم الخدمة اللي بتستخدمها.","privacy.s2.title":"2. البيانات اللي بنجمعها","privacy.s2.li1":"<b class=\"text-slate-200\">بيانات الحساب:</b> لازم تسجّل دخول بجوجل أو بإيميلك عشان تستخدم الموقع. لو سجّلت دخول بجوجل، بناخد اسمك وصورتك وإيميلك من جوجل مباشرة.","privacy.s2.li2":"<b class=\"text-slate-200\">محتوى تستخدمه:</b> بيانات السيرة الذاتية، البورتفوليو، النصوص اللي بتكتبها أو تلخّصها، والتسجيلات الصوتية اللي بترفعها لأدوات المقابلات أو تفريغ الصوت.","privacy.s2.li3":"<b class=\"text-slate-200\">بيانات استخدام تقنية:</b> عدد مرات استخدامك للأدوات (لتطبيق حدود الاستخدام العادل)، ومحفوظة محلياً على جهازك (localStorage) بيانات زي \"عدد المحاولات المتبقية\".","privacy.s3.title":"3. إزاي بنستخدم بياناتك","privacy.s3.body":"بنستخدم بياناتك بس عشان: (أ) نشغّل أدوات الذكاء الاصطناعي (بنبعت النص أو الصوت اللي بترفعه لشركات معالجة متخصصة عشان تولّدلك الرد، من غير ما تتخزن مفاتيح أو بيانات دخول عندهم)، (ب) نحفظلك ملفك الشخصي عشان يفضل موجود لما ترجع، (ج) نحسّن الخدمة ونمنع إساءة الاستخدام.","privacy.s4.title":"4. مين بيشوف بياناتك (أطراف تالتة)","privacy.s4.li1":"<b class=\"text-slate-200\">Google Firebase:</b> لتسجيل الدخول وتخزين ملفك الشخصي بشكل آمن.","privacy.s4.li2":"<b class=\"text-slate-200\">AI Processing Service:</b> لمعالجة النصوص والصوت في أدوات المحادثة والتفريغ.","privacy.s4.li3":"<b class=\"text-slate-200\">Text-to-Speech Service:</b> لتحويل النص إلى صوت.","privacy.s4.li4":"<b class=\"text-slate-200\">Cloudflare:</b> كوسيط تقني آمن بين تطبيقك وخدمات الذكاء الاصطناعي، من غير ما يحتفظ ببياناتك.","privacy.s4.li5":"<b class=\"text-slate-200\">Web Search Service:</b> للبحث اللايف على الويب في أداة تقدير الراتب المتوقع بس — من غير تسجيل دخول أو حفظ هوية عندهم.","privacy.s4.note":"إحنا مش بنبيع بياناتك لأي حد، ومش بنشاركها لأغراض إعلانية.","privacy.s5.title":"5. أمان البيانات","privacy.s5.body":"بياناتك محمية بقواعد أمان (Security Rules) بتضمن إن كل مستخدم يشوف بياناته هو بس، وكل الاتصال بين تطبيقك والسيرفر مشفّر (HTTPS).","privacy.s6.title":"6. حقوقك","privacy.s6.body":"تقدر في أي وقت تطلب تشوف بياناتك المحفوظة، تعدّلها، أو تطلب حذفها بالكامل، عن طريق التواصل معانا من صفحة \"الدعم والتواصل\".","privacy.s7.title":"7. الأطفال","privacy.s7.body":"الخدمة مش موجّهة لمن هم أقل من 13 سنة، ومبنجمعش بيانات بشكل متعمد من الفئة العمرية دي.","privacy.s8.title":"8. التعديلات على السياسة","privacy.s8.body":"ممكن نحدّث السياسة دي من وقت للتاني، وهنغيّر تاريخ \"آخر تحديث\" فوق أول ما نعدّل حاجة جوهرية.","assistant.botName":"يسر Pro Bot","assistant.subtitle":"كلّمه بالكتابة أو الصوت، وابعتله صورة لو محتاج يشوفها","assistant.inputPh":"اكتب سؤالك هنا...","assistant.attachImageTitle":"إرفاق صورة","assistant.micTitle":"تسجيل صوتي","assistant.voiceToggleTitle":"تشغيل/إيقاف صوت الردود","assistant.newChatTitle":"بداية محادثة جديدة","assistant.removeImageTitle":"إزالة الصورة","assistant.imageAlt":"الصورة المرفقة","assistant.providerHint":"مدعوم بأكتر من مزوّد ذكاء اصطناعي — لو مزوّد مشغول، بيتحول للتاني تلقائيًا من غير ما تحس.","assistant.emptyHint":"اسأل {bot} بالكتابة أو الصوت، أو ابعتله صورة يشوفها ويجاوبك عليها.","assistant.defaultImageQuestion":"وصف الصورة دي واشرحلي اللي فيها بالتفصيل.","interview.resumeBefore":"لسه فاضل مقابلة شغالة من قبل (","interview.resumeAfter":"). تحب تكمل ولا تبدأ جلسة جديدة؟","interview.resume":"كمّل","interview.startNew":"ابدأ جديد","interview.voiceLabel":"صوت المحاور","interview.voiceMale":"صوت رجالي","interview.voiceFemale":"صوت حريمي","interview.personaArLabel":"عربي متميز","interview.personaEnLabel":"English متميز","interview.screenshot":"تصوير المحادثة","interview.endTitle":"إنهاء المقابلة نهائيًا وحفظها في الأرشيف","interview.endBtn":"إنهاء المقابلة","interview.endHint":"إنهاء المقابلة إجراء نهائي — الجلسة دي مش هيتم استكمالها بعد كده. لو عايز لغة أو محاور مختلف، ابدأ مقابلة جديدة.","interview.stop":"إيقاف","interview.micTitle":"تحدث بصوتك","interview.sendAria":"إرسال الإجابة","interview.evalTitle":"تقييم الأداء","cv.tabPlain":"سيرة ذاتية عادية (بدون صورة)","cv.tabLinkedin":"ستايل لينكد إن (بصورة)","cv.plainNotice":"سيرة ذاتية نصية عادية بدون صورة خالص — نص احترافي جاهز للنسخ مباشرة في Word أو أي مكان تاني.","cv.runPlain":"صِغ السيرة الذاتية العادية","cv.liNotice":"نسخة بستايل لينكد إن: صورة شخصية فوق، وتحتها قائمة بيانات التواصل زي لينكد إن بالظبط، وبعدين محتوى السيرة الذاتية.","cv.liPhotoAlt":"صورة السيرة الذاتية","cv.liPhotoHint":"صورتك بتتحفظ في المتصفح بتاعك بس ومش بتتبعت لأي مكان.","cv.contactInfo":"معلومات التواصل","cv.phonePh":"رقم الهاتف","cv.emailPh":"البريد الإلكتروني","cv.linkedinPh":"رابط لينكد إن أو حسابك المهني","cv.locationPh":"المدينة / الدولة","cv.runLinkedin":"صِغ السيرة بستايل لينكد إن","cv.exportFooter":"تم الإنشاء عبر منصة يُسْر","pf.screenshot":"تصوير","pf.sendAria":"إرسال","common.auto2Text":"العربية","common.auto3Text":"اردو","common.auto4Text":"فارسی","common.emailVerifyResendBtnText":"إعادة الإرسال","common.emailVerifyRecheckBtnText":"تحققت، حدّث الحالة","faq.auto1Text":"8 أسئلة","faq.auto2Text":"12 سؤال","faq.auto3Text":"18 سؤال","faq.auto4Text":"خريج جديد / أقل من سنة خبرة","faq.auto5Text":"مستوى متوسط (Mid-level)","faq.auto6Text":"مستوى أول / خبرة كبيرة (Senior)","faq.auto7Text":"مستوى إداري / قيادي (Manager+)","career.auto1Text":"طول الخطة","career.auto2Text":"خطة مفصّلة كاملة (كل الخطوات والتفاصيل)","career.auto3Text":"ملخص سريع وواضح (أهم النقاط بس، من غير إطالة)","videoMock.auto1Text":"جهّزلي حاجة أقولها قدام الكاميرا","videoMock.auto2Text":"من غير ما تفتح الكاميرا وتتلخبط إيه تقول، اختار وضع وهيديك سؤال محدد تجاوب عليه، أو نص جاهز تتمرن تقراه بوضوح — وبعدين سجّل نفسك وانت بترد.","videoMock.auto3Text":"سؤال مقابلة أرد عليه بصوتي","videoMock.auto4Text":"نص جاهز أتمرن أقراه بوضوح","videoMock.auto5Text":"جهّزلي واحد تاني","videoMock.auto6Text":"تدرّب قدام الكاميرا","videoMock.videoMockStatusText":"اضغط \"شغّل الكاميرا\" وهيطلب المتصفح إذن الكاميرا والمايك، وبعدها تقدر تسجل مقطع وتنزّله عشان تراجعه.","videoMock.auto7Text":"محاكاة إيميل مواعيد المقابلة","videoMock.auto8Text":"هيتولّد إيميل واقعي من \"مسؤول توظيف\" بيطلب منك تأكيد موعد/مكان أو رابط مقابلة أونلاين، وأحياناً توقعاتك للراتب — تدرّب على الرد عليه باحترافية.","videoMock.auto9Text":"تأكيد موعد ومكان (حضورياً)","videoMock.auto10Text":"تأكيد موعد مقابلة أونلاين","videoMock.auto11Text":"سؤال عن توقعات الراتب","videoMock.auto12Text":"تعارض/تعديل موعد مفاجئ","videoMock.auto13Text":"إيميل مستعجل (رد خلال يوم)","videoMock.auto14Text":"نبرة رسمية جداً","videoMock.auto15Text":"نبرة ودودة ومريحة","videoMock.auto16Text":"نبرة فيها استعجال وضغط وقت","videoMock.auto17Text":"أسئلة متابعة مناسبة للراتب الوظيفي","videoMock.auto18Text":"نصائح لبس ومظهر مناسب للمقابلة","videoMock.auto19Text":"بيئة مكتبية رسمية (بنوك/شركات كبيرة)","videoMock.auto20Text":"ستارت أب / بيئة شبابية","videoMock.auto21Text":"تواصل مباشر مع عملاء","videoMock.auto22Text":"مجال إبداعي","videoMock.auto23Text":"مقابلة أونلاين (فيديو كول)","videoMock.auto24Text":"بيئة عمل خليجية محافظة","videoMock.auto25Text":"نصايح للرجل والمرأة","videoMock.auto26Text":"نصايح للرجل بس","videoMock.auto27Text":"نصايح للمرأة بس","salary.auto1Text":"الأداة بتدور على نتائج بحث حية عن سوق العمل لحظة ما تضغط \"قدّر\"، وبتبني عليها التقدير مع معرفة الذكاء الاصطناعي — مش بيانات رسمية أو استطلاع سوقي دقيق 100% — استخدمه كنقطة بداية للتفاوض مش كرقم نهائي.","salary.auto2Text":"مصر","salary.auto3Text":"السعودية","salary.auto4Text":"الإمارات","salary.auto5Text":"دول الخليج بشكل عام","salary.auto6Text":"عن بعد (Remote) لشركات أجنبية","progress.auto1Text":"أرشيف مقابلاتك: بدل ما كل مقابلة تبقى منفصلة، صفحة واحدة بتجمّع كل مقابلاتك ونصوصها وتقارير أداءك من \"مقابلة تدريبية صوتية\" وتوريك تطورك بمرور الوقت.","progress.auto2Text":"تذكير بمقابلة قادمة","progress.auto3Text":"احفظ التذكير","progress.progressReminderEnableBtnText":"فعّل إشعار push حقيقي من المتصفح","progress.progressReminderStatusText":"لو حددت الساعة، هيوصلك إشعار مظبوط في وقت المقابلة نفسه (لغاية ٥ دقايق فرق)، بالإضافة لإشعار تذكير قبلها بيومين. طالما سمحت بإذن الإشعارات والمتصفح شغال (حتى لو التاب مش قدامك) - لسه محتاج المتصفح يكون فاتح، مش هيوصلك وهو مقفول تماماً.","progress.auto4Text":"سجل الجلسات السابقة","progress.auto5Text":"قارن بين الجلستين","match.auto1Text":"الصق وصف الوظيفة وسيرتك الذاتية، وهنطلعلك نسبة توافق تقريبية ونقاط ضعف محددة وكلمات مفتاحية ناقصة تساعدك تعدي فلاتر الـ ATS.","match.auto2Text":"سيرتك الذاتية","match.auto3Text":"استخدم الـ CV المحفوظ","match.auto4Text":"وصف الوظيفة","cover.auto1Text":"مخصصة لمراسلات رحلة التوظيف الرسمية: خطاب تقديم مرفق مع الـ CV، رسالة شكر بعد المقابلة، أو رد على عرض راتب.","cover.auto2Text":"استورد بيانات من CV جاهز (اختياري)","cover.auto3Text":"صوّر الـ CV بتاعك بالكاميرا أو ارفع صورة/سكرين شوت منه، والذكاء الاصطناعي هيقراه ويستخرج منه أهم البيانات عشان يبني الرسالة عليها.","cover.auto4Text":"ارفع صورة الـ CV","cover.auto5Text":"صوّر الـ CV دلوقتي","cover.auto6Text":"رسالة تقديم (Cover Letter) مرفقة مع الـ CV","cover.auto7Text":"رسالة شكر ومتابعة بعد المقابلة (Thank You Note)","cover.auto8Text":"رد على عرض راتب / مفاوضة راتب","writing.auto1Text":"تدقيق إملائي ونحوي","writing.auto2Text":"تنسيق أكاديمي (APA)","writing.auto3Text":"تنسيق أكاديمي (Harvard)","summarizer.auto1Text":"ملخص قصير جداً (فهم سريع)","summarizer.auto2Text":"نقاط مختصرة","summarizer.auto3Text":"فقرة واحدة","summarizer.auto4Text":"ملخص تفصيلي منظم بعناوين","tr.auto1Text":"🔎 الكشف التلقائي للغة","tr.auto2Text":"العربية","tr.auto3Text":"اردو","tr.auto4Text":"فارسی","tr.auto5Text":"بدون ترجمة - نفس اللغة","tr.auto6Text":"العربية","pitch.auto1Text":"بداية مقابلة شخصية","pitch.auto2Text":"فيديو تعريفي (لينكد إن / بورتفوليو)","pitch.auto3Text":"تواصل بارد مع شركة (Networking)","pitch.auto4Text":"بداية مكالمة هاتفية / فرصة مفاجئة","pitch.auto5Text":"رسمي احترافي هادئ","pitch.auto6Text":"حماسي وفيه طاقة","pitch.auto7Text":"بسيط وودود قريب من الناس","pitch.auto8Text":"اسمع النص وقيس توقيته","pitch.auto10Text":"جهّز الـ CV الأول","pitch.auto11Text":"اتدرّب في مقابلة صوتية","profile.auto2Text":"تغيير","profile.auto3Text":"السيرة الذاتية","profile.auto4Text":"البورتفوليو","profile.auto5Text":"متابعة التقدم","profile.auto6Text":"الباقات","profile.profileStatPrivacyText":"آمن","profile.auto7Text":"حالة حسابك","profile.auto8Text":"حساب الدخول","profile.auto9Text":"نظرة عامة على حسابك","profile.auto10Text":"باقتك الحالية","profile.auto11Text":"عدد الاشتراكات/المشتريات","profile.auto12Text":"سجل الاشتراكات والمشتريات","profile.auto13Text":"اشترك في باقة","profile.auto14Text":"تم إيقاف التجديد التلقائي لباقتك، وهتفضل مستفيد منها لحد آخر يوم في الفترة الحالية.","profile.auto15Text":"تراجع عن الإلغاء","profile.auto16Text":"مش عايز تكمل في باقتك الحالية؟","profile.cancelSubBtnText":"إلغاء الاشتراك","profile.auto17Text":"الخصوصية وبياناتك","profile.auto18Text":"بيانات الملف الشخصي وسجل التدريب وسجل الاستخدام متخزنة على جهازك (المتصفح) بشكل أساسي، ولو سجّلت دخول بجوجل بتتزامن نسخة منها مع حسابك عشان تلاقيها من أي جهاز. صور الـ CV وملفات الصوت/الفيديو بتتبعت للمعالجة وقت الاستخدام بس ومش بتتخزن دائم على السيرفر.","profile.auto19Text":"تغيير كلمة المرور","profile.auto20Text":"امسح بياناتي المحفوظة على الجهاز ده بس","profile.auto21Text":"منطقة الخطر","profile.auto22Text":"حذف الحساب بيمسح حسابك نهائياً من عندنا: بياناتك، اشتراكاتك، وسجل استخدامك على السيرفر (مش بس على الجهاز ده) - وده إجراء نهائي مينفعش يترجع.","profile.deleteAccountBtnText":"احذف حسابي نهائياً","profile.auto23Text":"عضويتك","profile.auto24Text":"إجمالي المدفوع","profile.auto25Text":"ترقية الباقة","profile.auto26Text":"نصايح سريعة","profile.auto27Text":"كمّل بياناتك وصورتك عشان يبقى شكل الـ CV والبورتفوليو بتوعك أحسن، وتقدر تتابع تقدمك بدقة من صفحة \"متابعة التقدم\".","subscriptions.auto1Text":"ج.م","subscriptions.auto2Text":"25 طلب ذكاء اصطناعي شهرياً","subscriptions.auto3Text":"بناء سيرة ذاتية وتلخيص مستندات","subscriptions.auto4Text":"ج.م","subscriptions.auto5Text":"150 طلب ذكاء اصطناعي شهرياً","subscriptions.auto6Text":"تقارير أداء تفصيلية","subscriptions.auto7Text":"مونتاج + تفريغ صوتي بكل اللغات","subscriptions.auto8Text":"ج.م","subscriptions.auto9Text":"طلبات ذكاء اصطناعي غير محدودة تماماً","subscriptions.auto10Text":"كل أدوات المنصة بلا استثناء","subscriptions.auto11Text":"ج.م","subscriptions.auto12Text":"كل مزايا الاحترافية","subscriptions.auto13Text":"شهرين مجاناً","subscriptions.auto14Text":"ج.م","subscriptions.auto15Text":"كل مزايا الباقة الاحترافية","subscriptions.auto16Text":"لوحة متابعة تقدّم الفريق","subscriptions.auto17Text":"ج.م","subscriptions.auto18Text":"كل مزايا الاحترافية لكل الطلاب","subscriptions.auto19Text":"تقرير جماعي لمشرف الدفعة","subscriptions.auto20Text":"جلسة تدريب تعريفية مجانية","subscriptions.auto21Text":"كل المزايا + تخصيص كامل","subscriptions.auto22Text":"مدير حساب مخصص للجامعة","support.auto1Text":"عندك اقتراح أو شكوى أو استفسار؟","support.auto2Text":"اقتراح","support.auto3Text":"شكوى","support.auto4Text":"استفسار","support.auto5Text":"إرسال","pwaIosModal.auto2Text":"تثبيت التطبيق على آيفون","pwaIosModal.auto3Text":"مرّر لحد ما تلاقي \"إضافة إلى الشاشة الرئيسية\" (Add to Home Screen).","pwaIosModal.auto4Text":"اضغط \"إضافة\" فوق — هتلاقي أيقونة يُسْر Pro على شاشتك زي أي تطبيق عادي.","pwaIosModal.auto5Text":"تمام، فهمت","pricing.auto2Text":"اختر باقتك","pricing.auto3Text":"كل أدوات المنصة في مكان واحد - مقابلات، سيرة ذاتية، بورتفوليو، تدقيق أكاديمي، تفريغ صوتي، وأكتر.","pricing.auto4Text":"الأساسية","pricing.auto5Text":"/ شهرياً","pricing.auto6Text":"25 طلب ذكاء اصطناعي شهرياً (مقابلات، سيرة ذاتية، كل الأدوات)","pricing.auto7Text":"بناء سيرة ذاتية وتلخيص مستندات","pricing.auto8Text":"أسئلة شائعة لكل وظيفة","pricing.auto9Text":"دعم عبر شات الموقع","pricing.auto10Text":"اشترك في الأساسية","pricing.auto11Text":"الأكثر طلباً","pricing.auto12Text":"الاحترافية","pricing.auto13Text":"/ شهرياً","pricing.auto14Text":"150 طلب ذكاء اصطناعي شهرياً (يكفي تدريب شبه يومي)","pricing.auto15Text":"تقارير أداء تفصيلية بعد كل مقابلة","pricing.auto16Text":"خطط تطور مهني مخصصة","pricing.auto17Text":"بورتفوليو + تدقيق أكاديمي","pricing.auto18Text":"تفريغ صوتي بكل اللغات المتاحة","pricing.auto19Text":"أولوية دعم فني","pricing.auto20Text":"اشترك في الاحترافية","pricing.auto21Text":"أعلى فئة","pricing.auto22Text":"النخبة","pricing.auto23Text":"/ شهرياً","pricing.auto24Text":"طلبات ذكاء اصطناعي غير محدودة تماماً، بلا أي سقف شهري","pricing.auto25Text":"كل أدوات المنصة بلا استثناء","pricing.auto26Text":"أعلى أولوية في الرد من فريق الدعم","pricing.auto27Text":"اشترك في النخبة","pricing.auto28Text":"السنوية","pricing.auto29Text":"/ سنوياً","pricing.auto30Text":"كل مزايا الاحترافية (150 طلب شهرياً طول السنة)","pricing.auto31Text":"وفّر تقريباً شهرين مقارنةً بالاشتراك الشهري","pricing.auto32Text":"استشارة تطوير مسار مهني مرة سنوياً","pricing.auto33Text":"اشترك في السنوية","pricing.auto34Text":"إغلاق","cvBuildModal.auto1Text":"ربط بيانات الـ CV بالمقابلة","cvBuildModal.auto2Text":"الصق نص خبراتك عشان الأسئلة تتخصص على أساسها:","cvBuildModal.auto3Text":"حفظ","cvBuildModal.auto4Text":"إلغاء","reportModal.auto1Text":"تقرير الأداء التفصيلي","termsGate.auto1Text":"قبل ما تبدأ","termsGate.auto2Text":"قرأت ووافقت على شروط الاستخدام وسياسة الخصوصية.","termsGate.termsGateContinueText":"متابعة","paymentRequest.auto1Text":"إتمام الاشتراك","paymentRequest.auto3Text":"حوّل قيمة الباقة عن طريق Vodafone Cash أو InstaPay على رقم:","paymentRequest.auto5Text":"بعد التحويل، املا بياناتك تحت وابعت الطلب — هيتم تفعيل الباقة على حسابك يدوياً خلال ساعات قليلة بعد مراجعة التحويل.","paymentRequest.prSubmitBtnText":"تم التحويل، ابعت الطلب","cancelSub.auto1Text":"هيتم إيقاف التجديد التلقائي بس - هتفضل مستفيد من كل مميزات باقتك الحالية عادي لحد آخر يوم في الفترة دي، وبعدها هترجع تلقائيًا للباقة المجانية. تقدر تتراجع عن الإلغاء في أي وقت قبل ما الفترة تخلص.","cancelSub.auto2Text":"تراجع","cancelSub.cancelSubConfirmBtnText":"تأكيد الإلغاء","videoMock.videoMockTopicPh":"الوظيفة أو الموضوع (مثلاً: خدمة عملاء)","videoMock.videoEmailRolePh":"الوظيفة المتقدم لها (مثلاً: محاسب)","videoMock.videoEmailReplyPh":"اكتب ردّك على الإيميل هنا...","videoMock.videoSalaryQRolePh":"الوظيفة (اختياري لو مكتوبها فوق)","salary.salaryRolePh":"المسمى الوظيفي (مثلاً: مصمم جرافيك)","salary.salaryExperiencePh":"سنوات الخبرة (مثلاً: 3 سنوات)","match.cvMatchResumePh":"الصق نص سيرتك الذاتية هنا، أو اضغط 'ربط الـ CV' فوق...","match.cvMatchJobdescPh":"الصق نص إعلان الوظيفة هنا...","cover.coverCvExtractPh":"هنا هتظهر البيانات اللي اتقرأت من صورة الـ CV، وتقدر تعدّل فيها قبل ما تكمل","cover.coverRolePh":"الوظيفة المتقدم لها","cover.coverCompanyPh":"اسم الشركة (اختياري)","cover.coverNotesPh":"أهم نقطة أو نقطتين عايز تبرزهم (خبرة، إنجاز، سبب اهتمامك بالشركة...) - اختياري","support.fbContactPh":"رقم موبايل أو إيميل للتواصل (اختياري)","support.fbMessagePh":"اكتب رسالتك هنا...","cvBuildModal.cvTextInputPh":"أدخل نص خبراتك هنا...","paymentRequest.prNamePh":"الاسم","paymentRequest.prPhonePh":"رقم الموبايل اللي حوّلت منه","paymentRequest.prRefPh":"آخر أرقام العملية أو ملاحظة (اختياري)","common.themeToggleBtnTitle":"التحويل للوضع الفاتح","assistant.assistantGenderToggleBtnTitle":"صوت الرد: راجل","common.themeToggleBtnAria":"التحويل للوضع الفاتح","tr.transcribeMicBtnAria":"تسجيل صوتي للتفريغ","pitch.auto9Aria":"إيقاف القراءة الصوتية","profile.auto1Aria":"تغيير صورة الملف الشخصي","profile.profilePhotoInputAria":"رفع صورة الملف الشخصي","profile.profileNameAria":"اسمك الكامل","profile.profileTitleAria":"المسمى الوظيفي","donations.auto1Aria":"نسخ الرقم","donations.auto2Aria":"نسخ الرقم","donations.auto3Aria":"نسخ الرقم","pwaIosModal.auto1Aria":"إغلاق","pricing.auto1Aria":"رجوع","reportModal.auto2Aria":"إغلاق","paymentRequest.auto2Aria":"إغلاق","paymentRequest.auto4Aria":"نسخ الرقم","profile.profilePhotoPreviewAlt":"صورة الملف الشخصي","profile.signedinAvatarImgAlt":"صورة الحساب"
        },
        en: {
            "nav.searchPh":"Search tools...","nav.searchEmpty":"No matching tools","nav.section.interviews":"Interviews & Hiring","nav.interview":"Voice Mock Interview","nav.faq":"FAQ + Model Answers","nav.career":"Career Growth Plan","nav.section.documents":"Documents","nav.cv":"CV Builder","nav.portfolio":"Personal Portfolio","nav.writing":"Academic Writing Review","nav.summarizer":"Document Summarizer","nav.section.audio":"Audio & Video","nav.transcribe":"Speech to Text","nav.pitch":"30-Second Self Pitch","nav.section.account":"Account & Support","nav.about":"About Us","nav.history":"Unified History","nav.profile":"Profile","nav.subscriptions":"Subscriptions","nav.donations":"Donations","nav.support":"Support","nav.section.legal":"Legal","nav.terms":"Terms of Use","nav.privacy":"Privacy Policy","nav.section.ai":"Artificial Intelligence","nav.videoMock":"Video Mock Interview","nav.salary":"Expected Salary Estimator","nav.progress":"Progress Tracking","nav.match":"CV-Job Matching","nav.cover":"Job Letter Generator","nav.closeMenu":"Close menu","nav.clearSearch":"Clear search","nav.openMenu":"Open menu","pwa.title":"Download YUSR Pro as an app","pwa.desc":"An icon on your home screen that opens just like any regular app","pwa.installBtn":"Install App","pwa.hideAria":"Dismiss install suggestion","hide":"Hide","apk.title":"Try our Android app 📱","apk.desc":"Faster and easier than the browser — download it directly from here","apk.hideAria":"Dismiss app suggestion","apk.downloadBtn":"Download the YUSR Pro app now","trial.headerTitle":"Free attempts remaining this month","support.techLabel":"Technical Support","account.guest":"Guest (this device)","account.signinHint":"Sign in with Google to save your photo & points","authgate.title":"Sign in","authgate.subtitle":"You need to sign in with Google or your email to use the site.","authgate.googleBtn":"Sign in with Google","authgate.orEmail":"or with email","authgate.tabLogin":"Log in","authgate.tabSignup":"Create account","authgate.namePh":"Your full name","authgate.emailPh":"Email","authgate.passwordPh":"Password","authgate.confirmPh":"Confirm password","authgate.submitLogin":"Log in","authgate.submitSignup":"Create account","authgate.privacyNote":"Your data is stored securely, and your password is encrypted — even we can't see it.","authgate.recaptchaNote":"This site is protected by reCAPTCHA and the Google <a href=\"https://policies.google.com/privacy\" target=\"_blank\" rel=\"noopener\" style=\"color:inherit;text-decoration:underline;\">Privacy Policy</a> and <a href=\"https://policies.google.com/terms\" target=\"_blank\" rel=\"noopener\" style=\"color:inherit;text-decoration:underline;\">Terms of Service</a> apply.","trial.left":"Trials remaining","trial.upgrade":"Upgrade to full plan","trial.warningLow":"Only {n} free attempts left this month!","trial.warningLast":"This is your last free attempt this month!","copy":"Copy","download":"Download","interview.desc":"Practice a real spoken interview with detailed performance feedback at the end.","interview.linkCv":"Link CV","interview.roleLabel":"Target role","interview.rolePh":"e.g. Sales, Customer Service, Programming...","interview.personaLabel":"Interviewer persona","interview.start":"Start Session","interview.speaking":"Interviewer is speaking...","interview.inputPh":"Speak into the mic or type here...","interview.reportHint":"The report analyzes your text answers plus speaking speed and filler words if you used the mic.","faq.desc":"Write the role and field, we'll prepare a real bank of common questions with convincing model answers.","faq.rolePh":"e.g. Real Estate Sales Rep","faq.run":"Generate Questions & Answers","career.desc":"Tell us your current situation and your goal, and we'll build a practical growth plan.","career.currentLabel":"Current situation","career.currentPh":"e.g. 1st year accountant","career.targetLabel":"Your goal","career.targetPh":"e.g. Switch to data analytics","career.contextPh":"Any extra details - optional","career.run":"Build My Plan","cv.notice":"This tool builds professional CV content ready to copy, not a designed PDF like LinkedIn.","cv.photoHint":"Optional photo (stored in your browser only).","cv.namePh":"Full name","cv.titlePh":"Target job title","cv.expPh":"Your work experience","cv.eduPh":"Education & certificates","cv.skillsPh":"Skills (comma separated)","cv.run":"Write My CV","pf.notice":"The AI will ask you a few simple questions about your field and projects to prepare custom portfolio content.","pf.fieldPh":"Your field (designer, developer, marketer...)","pf.start":"Start - let the AI ask me","pf.inputPh":"Type your answer here...","pf.generate":"Enough questions - generate the portfolio now","writing.notice":"Linguistic review and academic formatting suggestions as text recommendations you apply yourself in Word.","writing.topicPh":"Research topic (optional)","writing.inputPh":"Paste your research or article text here...","writing.run":"Review Text","sum.desc":"Summarize any report, article, or lecture in seconds.","sum.inputPh":"Paste text here...","sum.run":"Summarize Now","tr.notice":"Upload an audio file to auto-transcribe with AI, record with the mic, or paste ready text.","tr.uploadBtn":"Upload audio file & auto-transcribe","tr.uploadHint":"No file uploaded yet","tr.sourceLangLabel":"Source speech language","tr.targetLangLabel":"Translate final text to (optional)","tr.micHint":"Press to record, upload a file above, or paste text below.","tr.rawPh":"Raw text will appear here...","tr.run":"Clean Up & Format","pitch.notice":"Prepare a professional ~30-second self introduction, linked to your saved CV and profile.","pitch.purposeLabel":"Where will you use it?","pitch.toneLabel":"Tone of voice","pitch.rolePh":"Target role or field","pitch.highlightPh":"One or two highlights to feature - optional","pitch.run":"Generate 30-Second Pitch","profile.points":"pts","profile.namePh":"Your full name","profile.titlePh":"Job title","profile.googleBtn":"Sign in with Google","profile.googleHint":"Signing in saves your name, photo and points on this device — free trials are counted per device, not per account.","profile.save":"Save Info","profile.connected":"Connected with Google","profile.logoutBtn":"Log out","profile.statUsage":"Tool uses","profile.statDevice":"Device ID","profile.statPlan":"Current plan","profile.planFree":"Free","subs.individualTitle":"Individual Plans","subs.individualDesc":"For anyone preparing for an interview or building their own career.","subs.basicName":"Basic","subs.perMonth":"/ month","subs.proName":"Professional","subs.eliteName":"Elite","subs.popular":"Most Popular","subs.bestValue":"Best Value","subs.yearlyName":"Yearly","subs.perYear":"/ year","subs.subscribe":"Subscribe Now","subs.teamTitle":"Team & University Plans","subs.teamDesc":"For colleges, universities, and hiring centers training a group together at a better per-seat price.","subs.teamSmallName":"Small Team","subs.teamSmallRange":"Up to 10 people","subs.perSeat":"/ per seat / month","subs.recommended":"Recommended for universities","subs.teamMedName":"Batch / College","subs.teamMedRange":"11 to 100 people","subs.uniName":"University / Large Org","subs.uniRange":"Over 100 people","subs.customPrice":"Custom pricing","subs.contactUs":"Contact Us","don.title":"Support the Platform","don.desc":"If you'd like to support YUSR Pro's development, you can donate any amount via the numbers below.","don.wallet":"Mobile Wallet","don.thanks":"Thank you so much to everyone who supports us.","sup.title":"Support & Contact","sup.desc":"Have a question, issue, or suggestion? Reach us directly through any channel below.","sup.phone":"Direct Call","sup.hours":"We usually reply within a few hours. For urgent matters, WhatsApp is fastest.","legal.lastUpdated":"Last updated: August 2026","history.pageTitle":"Unified History","history.subtitle":"The last 20 results from any tool on the site (summaries, reviews, letters, and more) are saved here automatically so you don't lose them if you close the page.","history.listTitle":"Saved Results","history.clearAll":"Clear All","history.empty":"No saved results yet. Any result from the site's tools will appear here automatically.","onboarding.title":"Welcome to YUSR Pro 👋","onboarding.subtitle":"3 quick steps to get you started right:","onboarding.step1.title":"Complete your profile","onboarding.step1.desc":"Other tools like the CV builder and interview practice pull from this data.","onboarding.step2.title":"Try a mock interview","onboarding.step2.desc":"Practice real questions out loud and get instant feedback on your performance.","onboarding.step3.title":"Build your CV","onboarding.step3.desc":"We'll build you a professional CV in minutes from your saved data.","onboarding.tip":"Tip: there's a search box above the sidebar to quickly find any of the 20+ tools.","onboarding.skip":"Skip, I'll explore myself","about.pageTitle":"About Us","about.tagline":"An Arabic platform we build with passion to be your companion on your career journey.","about.missionLabel":"Our Mission","about.missionBody":"We believe that everyone, whatever their background or circumstances, deserves to reach the right opportunity feeling confident and well prepared. \"YUSR Pro\" grew out of a simple idea: good interview prep or a strong CV shouldn't be reserved for whoever has the time, money, or connections — AI can now put that same quality within anyone's reach, anytime.","about.pillarsTitle":"What Drives Us","about.pillar1Title":"Real Help","about.pillar1Body":"Not just tools — we design every feature to solve a real problem job seekers face.","about.pillar2Title":"Constant Growth","about.pillar2Body":"We listen to your suggestions and keep adding and improving — the platform grows with you, step by step.","about.pillar3Title":"AI at Your Service","about.pillar3Body":"We harness the latest AI technology to give you a high-quality, personalized preparation experience.","about.pillar4Title":"Your Privacy First","about.pillar4Body":"Your data is yours — we only use or share it to provide you the service, nothing else.","about.whyTitle":"Why YUSR Pro?","about.why1":"An experience fully designed in Arabic that understands your dialect.","about.why2":"Every tool you need, from interviews to CVs to portfolios, in one place.","about.why3":"Honest, realistic feedback that helps you improve, not just generic praise.","about.why4":"We keep developing the platform based on our users' real needs.","about.closing":"Have an idea or suggestion that could make YUSR better? We'd love to hear it.","about.contactUs":"Contact Us","terms.pageTitle":"Terms of Use","terms.betaNotice":"The \"Subscriptions\" page shows real paid plans. Payment is made manually via Vodafone Cash / InstaPay transfer to the numbers shown, and after you submit your transfer details your plan is activated manually within a few hours once the transfer is reviewed.","terms.s1.title":"1. Acceptance of Terms","terms.s1.body":"By using the \"YUSR Pro\" platform, you agree to these terms.","terms.s2.title":"2. Nature of the Service","terms.s2.body":"YUSR is an AI-powered platform that helps job seekers get ready: voice mock interviews, CV and portfolio building, academic writing review, document summarizing, and transcription. Responses and suggestions are AI-generated and are meant as guidance only, not a guarantee of any outcome or job offer.","terms.s3.title":"3. Account & Permitted Use","terms.s3.body":"You must sign in with a Google account or your email to use the platform. You're responsible for any activity on your account. Prohibited: attempting to bypass fair usage limits, sending automated bulk requests (bots), or trying to access any part of the system you're not authorized for.","terms.s4.title":"4. Fair Usage Limits","terms.s4.body":"To keep the service running for everyone, the AI tools (chat, transcription, text-to-speech) have a daily and monthly usage cap. If you reach the limit, you'll need to wait until it resets.","terms.s5.title":"5. Your Content","terms.s5.body":"Any content you write or upload (CV data, portfolio, voice recordings) remains yours. We only process it to provide you the service, and never use it for any other purpose or sell it.","terms.s6.title":"6. Disclaimer","terms.s6.body":"The service is provided \"as is\" with no warranties. We are not responsible for any career or professional decision you make based on AI outputs, and we always recommend reviewing important content yourself before using it.","terms.s7.title":"7. Changes","terms.s7.body":"We may update these terms from time to time, and update the \"Last updated\" date above. Continuing to use the platform after a change means you accept the new version.","terms.s8.title":"8. Contact","terms.s8.body":"For any question about these terms, reach us through the \"Support & Contact\" page.","privacy.pageTitle":"Privacy Policy","privacy.s1.title":"1. Who Collects the Data","privacy.s1.body":"The \"YUSR Pro\" platform is the one collecting and processing your data, for one purpose only: providing the service you use.","privacy.s2.title":"2. Data We Collect","privacy.s2.li1":"<b class=\"text-slate-200\">Account data:</b> You must sign in with Google or your email to use the site. If you sign in with Google, we get your name, photo, and email directly from Google.","privacy.s2.li2":"<b class=\"text-slate-200\">Content you use:</b> CV data, portfolio, texts you write or summarize, and voice recordings you upload to the interview or transcription tools.","privacy.s2.li3":"<b class=\"text-slate-200\">Technical usage data:</b> how many times you've used each tool (to apply fair usage limits), stored locally on your device (localStorage), such as \"remaining trials\".","privacy.s3.title":"3. How We Use Your Data","privacy.s3.body":"We use your data only to: (a) run the AI tools (we send the text or audio you upload to specialized processing companies to generate the response, without storing your keys or login data with them), (b) save your profile so it's there when you come back, (c) improve the service and prevent abuse.","privacy.s4.title":"4. Who Sees Your Data (Third Parties)","privacy.s4.li1":"<b class=\"text-slate-200\">Google Firebase:</b> for sign-in and securely storing your profile.","privacy.s4.li2":"<b class=\"text-slate-200\">AI Processing Service:</b> for processing text and audio in the chat and transcription tools.","privacy.s4.li3":"<b class=\"text-slate-200\">Text-to-Speech Service:</b> for text-to-speech conversion.","privacy.s4.li4":"<b class=\"text-slate-200\">Cloudflare:</b> as a secure technical intermediary between your app and the AI services, without retaining your data.","privacy.s4.li5":"<b class=\"text-slate-200\">Web Search Service:</b> for live web search in the expected-salary estimator tool only — without any login or identity stored with them.","privacy.s4.note":"We never sell your data to anyone, and never share it for advertising purposes.","privacy.s5.title":"5. Data Security","privacy.s5.body":"Your data is protected by Security Rules that ensure each user can only see their own data, and all communication between your app and the server is encrypted (HTTPS).","privacy.s6.title":"6. Your Rights","privacy.s6.body":"You can request at any time to view your stored data, edit it, or request its complete deletion, by reaching us through the \"Support & Contact\" page.","privacy.s7.title":"7. Children","privacy.s7.body":"The service is not directed at anyone under 13, and we don't knowingly collect data from that age group.","privacy.s8.title":"8. Changes to This Policy","privacy.s8.body":"We may update this policy from time to time, and we'll change the \"Last updated\" date above whenever we make a substantial change.","assistant.botName":"Yusr Pro Bot","assistant.subtitle":"Talk to it by typing or voice, and send a photo if it needs to see something","assistant.inputPh":"Type your question here...","assistant.attachImageTitle":"Attach photo","assistant.micTitle":"Voice recording","assistant.voiceToggleTitle":"Turn reply voice on/off","assistant.newChatTitle":"Start a new conversation","assistant.removeImageTitle":"Remove image","assistant.imageAlt":"Attached image","assistant.providerHint":"Powered by more than one AI provider — if one is busy, it switches to another automatically without you noticing.","assistant.emptyHint":"Ask {bot} by typing or voice, or send it an image for it to see and answer about.","assistant.defaultImageQuestion":"Describe this image and explain what's in it in detail.","interview.resumeBefore":"There's an interview session still in progress (","interview.resumeAfter":"). Want to continue or start a new session?","interview.resume":"Continue","interview.startNew":"Start new","interview.voiceLabel":"Interviewer's voice","interview.voiceMale":"Male voice","interview.voiceFemale":"Female voice","interview.personaArLabel":"Distinguished Arabic","interview.personaEnLabel":"Distinguished English","interview.screenshot":"Screenshot the conversation","interview.endTitle":"Permanently end the interview and save it to the archive","interview.endBtn":"End interview","interview.endHint":"Ending the interview is final — this session cannot be resumed afterward. If you want a different language or interviewer, start a new interview.","interview.stop":"Stop","interview.micTitle":"Speak using your voice","interview.sendAria":"Send answer","interview.evalTitle":"Performance evaluation","cv.tabPlain":"Plain resume (no photo)","cv.tabLinkedin":"LinkedIn style (with photo)","cv.plainNotice":"A plain text resume with no photo at all — professional text ready to copy directly into Word or anywhere else.","cv.runPlain":"Compose the plain resume","cv.liNotice":"A LinkedIn-style version: a profile photo on top, then a contact info list just like LinkedIn, followed by the resume content.","cv.liPhotoAlt":"Resume photo","cv.liPhotoHint":"Your photo is saved only in your browser and is never sent anywhere.","cv.contactInfo":"Contact information","cv.phonePh":"Phone number","cv.emailPh":"Email address","cv.linkedinPh":"LinkedIn link or professional profile","cv.locationPh":"City / Country","cv.runLinkedin":"Compose the LinkedIn-style resume","cv.exportFooter":"Created via YUSR platform","pf.screenshot":"Screenshot","pf.sendAria":"Send","common.auto2Text":"العربية","common.auto3Text":"اردو","common.auto4Text":"فارسی","common.emailVerifyResendBtnText":"Resend","common.emailVerifyRecheckBtnText":"I verified it, refresh status","faq.auto1Text":"8 questions","faq.auto2Text":"12 questions","faq.auto3Text":"18 questions","faq.auto4Text":"Fresh graduate / less than a year of experience","faq.auto5Text":"Mid-level","faq.auto6Text":"Senior / extensive experience","faq.auto7Text":"Managerial / leadership level (Manager+)","career.auto1Text":"Plan length","career.auto2Text":"Full detailed plan (all steps and details)","career.auto3Text":"Quick, clear summary (key points only, no elaboration)","videoMock.auto1Text":"Prepare something for me to say on camera","videoMock.auto2Text":"Instead of opening the camera and getting confused about what to say, pick a mode and you'll get a specific question to answer, or ready-made text to practice reading clearly — then record yourself responding.","videoMock.auto3Text":"An interview question I'll answer aloud","videoMock.auto4Text":"Ready-made text to practice reading clearly","videoMock.auto5Text":"Give me another one","videoMock.auto6Text":"Practice in front of the camera","videoMock.videoMockStatusText":"Press \"Start Camera\" and your browser will ask for camera and microphone permission — then you can record a clip and download it to review.","videoMock.auto7Text":"Interview scheduling email simulation","videoMock.auto8Text":"A realistic email will be generated from a \"recruiter\" asking you to confirm a date/place or an online interview link, and sometimes your salary expectations — practice responding professionally.","videoMock.auto9Text":"Confirm a date and place (in person)","videoMock.auto10Text":"Confirm an online interview appointment","videoMock.auto11Text":"Question about salary expectations","videoMock.auto12Text":"Sudden schedule conflict / change","videoMock.auto13Text":"Urgent email (reply within a day)","videoMock.auto14Text":"Very formal tone","videoMock.auto15Text":"Friendly, relaxed tone","videoMock.auto16Text":"Urgent, time-pressured tone","videoMock.auto17Text":"Suitable follow-up questions for the job's salary","videoMock.auto18Text":"Attire and appearance tips suited to the interview","videoMock.auto19Text":"Formal office environment (banks/large companies)","videoMock.auto20Text":"Startup / young, casual environment","videoMock.auto21Text":"Direct contact with clients","videoMock.auto22Text":"Creative field","videoMock.auto23Text":"Online interview (video call)","videoMock.auto24Text":"Conservative Gulf work environment","videoMock.auto25Text":"Tips for both men and women","videoMock.auto26Text":"Tips for men only","videoMock.auto27Text":"Tips for women only","salary.auto1Text":"The tool searches live web results for the job market the moment you press \"Estimate,\" and builds the estimate on top of that with AI insight — not official data or a fully accurate market survey — use it as a starting point for negotiation, not a final number.","salary.auto2Text":"Egypt","salary.auto3Text":"Saudi Arabia","salary.auto4Text":"United Arab Emirates","salary.auto5Text":"The Gulf countries in general","salary.auto6Text":"Remote for foreign companies","progress.auto1Text":"Your interview archive: instead of every interview being separate, one page gathers all your interviews, transcripts, and performance reports from \"Voice Mock Interview\" and shows your progress over time.","progress.auto2Text":"Reminder for an upcoming interview","progress.auto3Text":"Save reminder","progress.progressReminderEnableBtnText":"Enable real browser push notification","progress.progressReminderStatusText":"If you set the time, you'll get a notification exactly at the interview time (within about 5 minutes), plus a reminder two days before. As long as you allowed notification permission and the browser is running (even if the tab isn't in front of you) — it still needs the browser open; it won't reach you while it's fully closed.","progress.auto4Text":"Record of previous sessions","progress.auto5Text":"Compare the two sessions","match.auto1Text":"Paste the job description and your CV, and we'll give you an approximate match percentage along with specific weak points and missing keywords to help you get past ATS filters.","match.auto2Text":"Your CV","match.auto3Text":"Use saved CV","match.auto4Text":"Job description","cover.auto1Text":"Dedicated to formal job-search correspondence: a cover letter attached with the CV, a thank-you note after the interview, or a reply to a salary offer.","cover.auto2Text":"Import data from an existing CV (optional)","cover.auto3Text":"Photograph your CV with the camera or upload an image/screenshot of it, and the AI will read it and extract the key data to build the letter from.","cover.auto4Text":"Upload CV image","cover.auto5Text":"Photograph the CV now","cover.auto6Text":"Cover letter attached with the CV","cover.auto7Text":"Thank-you and follow-up note after the interview","cover.auto8Text":"Reply to a salary offer / salary negotiation","writing.auto1Text":"Spelling and grammar check","writing.auto2Text":"Academic formatting (APA)","writing.auto3Text":"Academic formatting (Harvard)","summarizer.auto1Text":"Very short summary (quick understanding)","summarizer.auto2Text":"Bullet points","summarizer.auto3Text":"One paragraph","summarizer.auto4Text":"Detailed summary organized with headings","tr.auto1Text":"🔎 Auto-detect language","tr.auto2Text":"العربية","tr.auto3Text":"اردو","tr.auto4Text":"فارسی","tr.auto5Text":"No translation - same language","tr.auto6Text":"العربية","pitch.auto1Text":"Opening of a personal interview","pitch.auto2Text":"Introductory video (LinkedIn / portfolio)","pitch.auto3Text":"Cold outreach to a company (networking)","pitch.auto4Text":"Start of a phone call / a sudden opportunity","pitch.auto5Text":"Formal, calm and professional","pitch.auto6Text":"Enthusiastic and energetic","pitch.auto7Text":"Simple, friendly, down-to-earth","pitch.auto8Text":"Listen to the text and time it","pitch.auto10Text":"Build your CV first","pitch.auto11Text":"Practice with a voice interview","profile.auto2Text":"Change","profile.auto3Text":"CV","profile.auto4Text":"Portfolio","profile.auto5Text":"Progress Tracking","profile.auto6Text":"Plans","profile.profileStatPrivacyText":"Secure","profile.auto7Text":"Your account status","profile.auto8Text":"Login account","profile.auto9Text":"Overview of your account","profile.auto10Text":"Current plan","profile.auto11Text":"Number of subscriptions/purchases","profile.auto12Text":"Subscription and purchase history","profile.auto13Text":"Subscribe to a plan","profile.auto14Text":"Auto-renewal for your plan has been stopped, and you'll keep benefiting from it as usual until the last day of the current period.","profile.auto15Text":"Undo cancellation","profile.auto16Text":"Don't want to continue with your current plan?","profile.cancelSubBtnText":"Cancel subscription","profile.auto17Text":"Privacy and your data","profile.auto18Text":"Your profile data, training history, and usage log are stored mainly on your device (browser), and if you signed in with Google a copy is synced to your account so you can find it from any device. CV photos and audio/video files are sent for processing only at the time of use and are not stored permanently on the server.","profile.auto19Text":"Change password","profile.auto20Text":"Clear my data saved on this device only","profile.auto21Text":"Danger zone","profile.auto22Text":"Deleting your account permanently erases your account from our end: your data, subscriptions, and usage log on the server (not just on this device) - this is a final action that cannot be undone.","profile.deleteAccountBtnText":"Delete my account permanently","profile.auto23Text":"Your membership","profile.auto24Text":"Total paid","profile.auto25Text":"Upgrade plan","profile.auto26Text":"Quick tips","profile.auto27Text":"Complete your data and photo so your CV and portfolio look their best, and you can track your progress accurately from the \"Progress Tracking\" page.","subscriptions.auto1Text":"EGP","subscriptions.auto2Text":"25 AI requests per month","subscriptions.auto3Text":"CV building and document summarizing","subscriptions.auto4Text":"EGP","subscriptions.auto5Text":"150 AI requests per month","subscriptions.auto6Text":"Detailed performance reports","subscriptions.auto7Text":"Editing + audio transcription in all languages","subscriptions.auto8Text":"EGP","subscriptions.auto9Text":"Completely unlimited AI requests","subscriptions.auto10Text":"All platform tools without exception","subscriptions.auto11Text":"EGP","subscriptions.auto12Text":"All Professional features","subscriptions.auto13Text":"Two months free","subscriptions.auto14Text":"EGP","subscriptions.auto15Text":"All Professional plan features","subscriptions.auto16Text":"Team progress tracking dashboard","subscriptions.auto17Text":"EGP","subscriptions.auto18Text":"All Professional features for all students","subscriptions.auto19Text":"Collective report for the batch supervisor","subscriptions.auto20Text":"Free introductory training session","subscriptions.auto21Text":"All features + full customization","subscriptions.auto22Text":"Dedicated account manager for the university","support.auto1Text":"Have a suggestion, complaint, or question?","support.auto2Text":"Suggestion","support.auto3Text":"Complaint","support.auto4Text":"Question","support.auto5Text":"Send","pwaIosModal.auto2Text":"Install the app on iPhone","pwaIosModal.auto3Text":"Scroll until you find \"Add to Home Screen.\"","pwaIosModal.auto4Text":"Tap \"Add\" above — you'll find the YUSR Pro icon on your home screen, just like any regular app.","pwaIosModal.auto5Text":"Got it","pricing.auto2Text":"Choose your plan","pricing.auto3Text":"All the platform's tools in one place - interviews, CV, portfolio, academic proofreading, audio transcription, and more.","pricing.auto4Text":"Basic","pricing.auto5Text":"/ month","pricing.auto6Text":"25 AI requests per month (interviews, CV, all tools)","pricing.auto7Text":"CV building and document summarizing","pricing.auto8Text":"FAQ for every job","pricing.auto9Text":"Support via site chat","pricing.auto10Text":"Subscribe to Basic","pricing.auto11Text":"Most Popular","pricing.auto12Text":"Professional","pricing.auto13Text":"/ month","pricing.auto14Text":"150 AI requests per month (enough for near-daily practice)","pricing.auto15Text":"Detailed performance reports after every interview","pricing.auto16Text":"Customized career development plans","pricing.auto17Text":"Portfolio + academic proofreading","pricing.auto18Text":"Audio transcription in all available languages","pricing.auto19Text":"Priority technical support","pricing.auto20Text":"Subscribe to Professional","pricing.auto21Text":"Best Value","pricing.auto22Text":"Elite","pricing.auto23Text":"/ month","pricing.auto24Text":"Completely unlimited AI requests, with no monthly cap at all","pricing.auto25Text":"All platform tools without exception","pricing.auto26Text":"Top priority response from the support team","pricing.auto27Text":"Subscribe to Elite","pricing.auto28Text":"Yearly","pricing.auto29Text":"/ year","pricing.auto30Text":"All Professional features (150 requests per month all year long)","pricing.auto31Text":"Save roughly two months compared to the monthly subscription","pricing.auto32Text":"One career development consultation per year","pricing.auto33Text":"Subscribe to Yearly","pricing.auto34Text":"Close","cvBuildModal.auto1Text":"Link CV data to the interview","cvBuildModal.auto2Text":"Paste your experience text so the questions are tailored to it:","cvBuildModal.auto3Text":"Save","cvBuildModal.auto4Text":"Cancel","reportModal.auto1Text":"Detailed performance report","termsGate.auto1Text":"Before you start","termsGate.auto2Text":"I have read and agree to the Terms of Use and Privacy Policy.","termsGate.termsGateContinueText":"Continue","paymentRequest.auto1Text":"Complete subscription","paymentRequest.auto3Text":"Transfer the plan amount via Vodafone Cash or InstaPay to the number:","paymentRequest.auto5Text":"After transferring, fill in your details below and submit the request — the plan will be manually activated on your account within a few hours after the transfer is reviewed.","paymentRequest.prSubmitBtnText":"Transfer done, submit request","cancelSub.auto1Text":"Auto-renewal will simply be stopped - you'll keep enjoying all your current plan's benefits normally until the last day of this period, after which you'll automatically return to the free plan. You can undo the cancellation at any time before the period ends.","cancelSub.auto2Text":"Undo","cancelSub.cancelSubConfirmBtnText":"Confirm cancellation","videoMock.videoMockTopicPh":"The job or topic (e.g., customer service)","videoMock.videoEmailRolePh":"The job you're applying for (e.g., accountant)","videoMock.videoEmailReplyPh":"Write your reply to the email here...","videoMock.videoSalaryQRolePh":"The job (optional if written above)","salary.salaryRolePh":"Job title (e.g., Graphic Designer)","salary.salaryExperiencePh":"Years of experience (e.g., 3 years)","match.cvMatchResumePh":"Paste your CV text here, or click 'Link CV' above...","match.cvMatchJobdescPh":"Paste the job posting text here...","cover.coverCvExtractPh":"The data extracted from the CV image will appear here, and you can edit it before continuing","cover.coverRolePh":"Job you're applying for","cover.coverCompanyPh":"Company name (optional)","cover.coverNotesPh":"One or two key points you want to highlight (experience, achievement, why you're interested in the company...) - optional","support.fbContactPh":"Phone number or email for contact (optional)","support.fbMessagePh":"Write your message here...","cvBuildModal.cvTextInputPh":"Enter your experience text here...","paymentRequest.prNamePh":"Name","paymentRequest.prPhonePh":"The mobile number you transferred from","paymentRequest.prRefPh":"Last digits of the transaction or a note (optional)","common.themeToggleBtnTitle":"Switch to light mode","assistant.assistantGenderToggleBtnTitle":"Reply voice: Male","common.themeToggleBtnAria":"Switch to light mode","tr.transcribeMicBtnAria":"Voice recording for transcription","pitch.auto9Aria":"Stop voice reading","profile.auto1Aria":"Change profile photo","profile.profilePhotoInputAria":"Upload profile photo","profile.profileNameAria":"Your full name","profile.profileTitleAria":"Job title","donations.auto1Aria":"Copy the number","donations.auto2Aria":"Copy the number","donations.auto3Aria":"Copy the number","pwaIosModal.auto1Aria":"Close","pricing.auto1Aria":"Back","reportModal.auto2Aria":"Close","paymentRequest.auto2Aria":"Close","paymentRequest.auto4Aria":"Copy the number","profile.profilePhotoPreviewAlt":"Profile photo","profile.signedinAvatarImgAlt":"Account photo"
        },
        fr: {
            "nav.searchPh":"Rechercher un outil...","nav.searchEmpty":"Aucun outil trouvé","nav.section.interviews":"Entretiens et embauche","nav.interview":"Entretien d'entraînement vocal","nav.faq":"FAQ + réponses modèles","nav.career":"Plan de développement de carrière","nav.section.documents":"Documents","nav.cv":"Créateur de CV","nav.portfolio":"Portfolio personnel","nav.writing":"Relecture académique","nav.summarizer":"Résumé de documents","nav.section.audio":"Audio et vidéo","nav.transcribe":"Transcription audio en texte","nav.pitch":"Présentation de 30 secondes","nav.section.account":"Compte et assistance","nav.about":"À propos de nous","nav.history":"Historique unifié","nav.profile":"Profil","nav.subscriptions":"Abonnements","nav.donations":"Dons","nav.support":"Assistance et contact","nav.section.legal":"Mentions légales","nav.terms":"Conditions d'utilisation","nav.privacy":"Politique de confidentialité","nav.section.ai":"Intelligence artificielle","nav.videoMock":"Simulateur d'entretien vidéo","nav.salary":"Estimation du salaire attendu","nav.progress":"Suivi de la progression","nav.match":"Correspondance CV / offre d'emploi","nav.cover":"Générateur de lettres de candidature","nav.closeMenu":"Fermer le menu","nav.clearSearch":"Effacer la recherche","nav.openMenu":"Ouvrir le menu","pwa.title":"Téléchargez YUSR Pro en tant qu'application","pwa.desc":"Une icône sur votre écran d'accueil, qui s'ouvre comme une application normale","pwa.installBtn":"Installer l'application","pwa.hideAria":"Masquer la suggestion d'installation","hide":"Masquer","apk.title":"Essayez notre application Android 📱","apk.desc":"Plus rapide et plus simple que le navigateur — téléchargez-la directement ici","apk.hideAria":"Masquer la suggestion d'application","apk.downloadBtn":"Téléchargez l'application YUSR Pro maintenant","trial.headerTitle":"Essais gratuits restants ce mois-ci","support.techLabel":"Support technique","account.guest":"Invité (cet appareil)","account.signinHint":"Connectez-vous avec Google pour enregistrer votre photo et vos points","authgate.title":"Connexion","authgate.subtitle":"Si vous ne pouvez pas entrer en tant qu'invité pour le moment (généralement un problème de connexion), connectez-vous avec Google ou votre e-mail.","authgate.googleBtn":"Se connecter avec Google","authgate.orEmail":"ou par e-mail","authgate.tabLogin":"Connexion","authgate.tabSignup":"Créer un compte","authgate.namePh":"Votre nom complet","authgate.emailPh":"E-mail","authgate.passwordPh":"Mot de passe","authgate.confirmPh":"Confirmer le mot de passe","authgate.submitLogin":"Connexion","authgate.submitSignup":"Créer le compte","authgate.privacyNote":"Vos données sont stockées en toute sécurité, et votre mot de passe est chiffré — même nous ne pouvons pas le voir.","authgate.recaptchaNote":"Ce site est protégé par reCAPTCHA. Les <a href=\"https://policies.google.com/privacy\" target=\"_blank\" rel=\"noopener\" style=\"color:inherit;text-decoration:underline;\">règles de confidentialité</a> et les <a href=\"https://policies.google.com/terms\" target=\"_blank\" rel=\"noopener\" style=\"color:inherit;text-decoration:underline;\">conditions d'utilisation</a> de Google s'appliquent.","trial.left":"Essais restants","trial.upgrade":"Passer à l'offre complète","trial.warningLow":"Il ne vous reste que {n} essais gratuits ce mois-ci !","trial.warningLast":"C'est votre dernier essai gratuit ce mois-ci !","copy":"Copier","download":"Télécharger","interview.desc":"Entraînez-vous à un véritable entretien oral avec une évaluation détaillée à la fin.","interview.linkCv":"Lier le CV","interview.roleLabel":"Poste visé","interview.rolePh":"ex : vente immobilière, service client, programmation...","interview.personaLabel":"Personnalité de l'intervieweur","interview.start":"Démarrer la session","interview.speaking":"L'intervieweur parle...","interview.inputPh":"Parlez au micro ou écrivez ici...","interview.reportHint":"L'évaluation analyse vos réponses écrites, votre débit de parole et vos mots de remplissage si vous avez utilisé le micro.","faq.desc":"Indiquez le poste et le domaine, nous préparerons une vraie banque de questions fréquentes avec des réponses modèles convaincantes.","faq.rolePh":"ex : responsable des ventes immobilières","faq.run":"Générer questions et réponses","career.desc":"Dites-nous votre situation actuelle et votre objectif, nous construirons un plan de progression concret.","career.currentLabel":"Votre situation actuelle","career.currentPh":"ex : comptable, 1 an d'expérience","career.targetLabel":"Votre objectif","career.targetPh":"ex : me réorienter vers l'analyse de données","career.contextPh":"Détails supplémentaires utiles - facultatif","career.run":"Construire mon plan","cv.notice":"Cet outil rédige le contenu texte de votre CV prêt à copier, pas un PDF conçu comme sur LinkedIn.","cv.photoHint":"Photo facultative (enregistrée uniquement dans votre navigateur).","cv.namePh":"Nom complet","cv.titlePh":"Poste visé","cv.expPh":"Votre expérience professionnelle","cv.eduPh":"Formation et certifications","cv.skillsPh":"Compétences (séparées par des virgules)","cv.run":"Rédiger mon CV","pf.notice":"L'IA va vous poser quelques questions simples sur votre domaine et vos projets pour préparer un contenu de portfolio personnalisé.","pf.fieldPh":"Votre domaine (designer, développeur, marketeur...)","pf.start":"Commencer - laisser l'IA me questionner","pf.inputPh":"Écrivez votre réponse ici...","pf.generate":"Assez de questions - générer le portfolio maintenant","writing.notice":"Révision linguistique et suggestions de mise en forme académique sous forme de recommandations que vous appliquez vous-même dans Word.","writing.topicPh":"Sujet de recherche (facultatif)","writing.inputPh":"Collez ici le texte de votre recherche ou article...","writing.run":"Réviser le texte","sum.desc":"Résumez n'importe quel rapport, article ou cours en quelques secondes.","sum.inputPh":"Collez le texte ici...","sum.run":"Résumer maintenant","tr.notice":"Vous pouvez importer un fichier audio pour une transcription automatique par IA, enregistrer directement au micro, ou coller un texte déjà prêt.","tr.uploadBtn":"Importer un fichier audio et le transcrire","tr.uploadHint":"Aucun fichier importé pour l'instant","tr.sourceLangLabel":"Langue source de la parole","tr.targetLangLabel":"Traduire le texte final vers (facultatif)","tr.micHint":"Appuyez pour enregistrer, importez un fichier ci-dessus, ou collez un texte ci-dessous.","tr.rawPh":"Le texte brut apparaîtra ici...","tr.run":"Nettoyer et mettre en forme","pitch.notice":"Préparez une présentation personnelle professionnelle d'environ 30 secondes, liée à votre CV et profil enregistrés.","pitch.purposeLabel":"Où allez-vous l'utiliser ?","pitch.toneLabel":"Ton de la voix","pitch.rolePh":"Poste ou domaine visé","pitch.highlightPh":"Un ou deux points forts à mettre en avant - facultatif","pitch.run":"Générer la présentation de 30 secondes","profile.points":"points","profile.namePh":"Votre nom complet","profile.titlePh":"Intitulé du poste","profile.googleBtn":"Se connecter avec Google","profile.googleHint":"La connexion enregistre votre nom, votre photo et vos points sur cet appareil — les essais gratuits sont comptés par appareil, pas par compte.","profile.save":"Enregistrer les informations","profile.connected":"Connecté avec Google","profile.logoutBtn":"Se déconnecter","profile.statUsage":"Utilisations des outils","profile.statDevice":"Identifiant de l'appareil","profile.statPlan":"Votre offre actuelle","profile.planFree":"Gratuit","subs.individualTitle":"Offres individuelles","subs.individualDesc":"Pour toute personne qui se prépare à un entretien ou construit sa propre carrière.","subs.basicName":"Basique","subs.perMonth":"/ mois","subs.proName":"Professionnelle","subs.eliteName":"Élite","subs.popular":"La plus demandée","subs.bestValue":"Meilleur rapport qualité-prix","subs.yearlyName":"Annuelle","subs.perYear":"/ an","subs.subscribe":"S'abonner maintenant","subs.teamTitle":"Offres pour équipes et universités","subs.teamDesc":"Pour les facultés, universités et centres de recrutement qui veulent former un groupe ensemble à un meilleur prix.","subs.teamSmallName":"Petite équipe","subs.teamSmallRange":"Jusqu'à 10 personnes","subs.perSeat":"/ par personne / mois","subs.recommended":"Recommandé pour les universités","subs.teamMedName":"Promotion / faculté","subs.teamMedRange":"De 11 à 100 personnes","subs.uniName":"Université / grande organisation","subs.uniRange":"Plus de 100 personnes","subs.customPrice":"Tarif sur mesure","subs.contactUs":"Nous contacter","don.title":"Soutenez la continuité de la plateforme","don.desc":"Si vous souhaitez soutenir le développement de YUSR Pro, vous pouvez faire un don de n'importe quel montant via les numéros ci-dessous.","don.wallet":"Portefeuille électronique","don.thanks":"Un grand merci à tous ceux qui nous soutiennent.","sup.title":"Assistance et contact","sup.desc":"Une question, un problème ou une suggestion ? Contactez-nous directement.","sup.phone":"Appel direct","sup.hours":"Nous répondons généralement en quelques heures. Pour les urgences, WhatsApp est le plus rapide.","legal.lastUpdated":"Dernière mise à jour : août 2026","history.pageTitle":"Historique unifié","history.subtitle":"Les 20 derniers résultats de n'importe quel outil du site (résumés, relectures, lettres, etc.) sont enregistrés ici automatiquement pour que vous ne les perdiez pas en fermant la page.","history.listTitle":"Résultats enregistrés","history.clearAll":"Tout effacer","history.empty":"Aucun résultat enregistré pour l'instant. Tout résultat des outils du site apparaîtra ici automatiquement.","onboarding.title":"Bienvenue sur YUSR Pro 👋","onboarding.subtitle":"3 étapes rapides pour bien démarrer :","onboarding.step1.title":"Complétez votre profil","onboarding.step1.desc":"Les autres outils (CV, entretien) utilisent ces données.","onboarding.step2.title":"Essayez un entretien simulé","onboarding.step2.desc":"Entraînez-vous sur de vraies questions à voix haute et recevez un retour instantané.","onboarding.step3.title":"Créez votre CV","onboarding.step3.desc":"Nous vous créons un CV professionnel en quelques minutes à partir de vos données.","onboarding.tip":"Astuce : une barre de recherche au-dessus du menu latéral vous aide à trouver rapidement n'importe quel outil parmi plus de 20.","onboarding.skip":"Passer, je vais explorer moi-même","about.pageTitle":"À propos de nous","about.tagline":"Une plateforme arabe que nous construisons avec passion pour être votre compagnon dans votre parcours professionnel.","about.missionLabel":"Notre mission","about.missionBody":"Nous croyons que chacun, quel que soit son parcours ou sa situation, mérite d'accéder à la bonne opportunité en toute confiance et bien préparé. \"YUSR Pro\" est né d'une idée simple : une bonne préparation à l'entretien ou un CV solide ne devrait pas être réservé à ceux qui ont le temps, l'argent ou les relations — l'IA peut désormais offrir cette même qualité à portée de main, à tout moment.","about.pillarsTitle":"Ce qui nous anime","about.pillar1Title":"Une aide réelle","about.pillar1Body":"Pas seulement des outils : nous concevons chaque fonctionnalité pour résoudre un vrai problème rencontré par les chercheurs d'emploi.","about.pillar2Title":"Amélioration continue","about.pillar2Body":"Nous écoutons vos suggestions et ajoutons/améliorons en permanence — la plateforme grandit avec vous, étape par étape.","about.pillar3Title":"L'IA à votre service","about.pillar3Body":"Nous exploitons les dernières technologies d'IA pour vous offrir une préparation personnalisée de haute qualité.","about.pillar4Title":"Votre confidentialité d'abord","about.pillar4Body":"Vos données vous appartiennent, nous ne les utilisons ou partageons que pour vous fournir le service.","about.whyTitle":"Pourquoi YUSR Pro ?","about.why1":"Une expérience entièrement conçue en arabe qui comprend votre dialecte.","about.why2":"Tous les outils dont vous avez besoin, de l'entretien au CV en passant par le portfolio, au même endroit.","about.why3":"Un retour honnête et réaliste qui vous aide à progresser, pas de simples compliments génériques.","about.why4":"Nous continuons à développer la plateforme selon les besoins réels de nos utilisateurs.","about.closing":"Vous avez une idée ou une suggestion pour améliorer YUSR ? Nous aimerions l'entendre.","about.contactUs":"Nous contacter","terms.pageTitle":"Conditions d'utilisation","terms.betaNotice":"La plateforme est encore en version bêta. La page \"Abonnements\" affiche actuellement des offres et tarifs d'essai, sans aucun prélèvement réel sur une carte ou un compte — nous l'annoncerons clairement dans l'application dès l'activation du paiement réel.","terms.s1.title":"1. Acceptation des conditions","terms.s1.body":"En utilisant la plateforme \"YUSR Pro\", vous acceptez ces conditions.","terms.s2.title":"2. Nature du service","terms.s2.body":"YUSR est une plateforme d'assistance par IA pour préparer les chercheurs d'emploi : entretiens d'entraînement vocaux, création de CV et de portfolio, relecture académique, résumé de documents et transcription audio. Les réponses et suggestions sont générées par IA et constituent une aide indicative, pas une garantie de résultat ou d'embauche.","terms.s3.title":"3. Compte et usage autorisé","terms.s3.body":"Vous pouvez utiliser la plateforme en tant qu'invité (identité anonyme automatique) ou en vous connectant avec un compte Google pour enregistrer vos données. Vous êtes responsable de toute activité effectuée depuis votre compte. Sont interdits : toute tentative de contourner les limites d'usage équitable, l'envoi de requêtes automatisées massives (bots), ou toute tentative d'accès à une partie du système non autorisée.","terms.s4.title":"4. Limites d'usage équitable","terms.s4.body":"Pour assurer la continuité du service pour tous, les outils d'IA (conversation, transcription audio, synthèse vocale) ont un plafond d'utilisation quotidien et mensuel. Si vous atteignez la limite, vous devrez attendre son renouvellement.","terms.s5.title":"5. Votre contenu","terms.s5.body":"Tout contenu que vous rédigez ou importez (données de CV, portfolio, enregistrements audio) reste votre propriété. Nous le traitons uniquement pour vous fournir le service, sans jamais l'utiliser à d'autres fins ni le vendre.","terms.s6.title":"6. Clause de non-responsabilité","terms.s6.body":"Le service est fourni \"tel quel\" sans garantie. Nous ne sommes pas responsables des décisions professionnelles ou de carrière que vous prenez sur la base des résultats de l'IA, et nous recommandons toujours de vérifier vous-même tout contenu important avant de l'utiliser.","terms.s7.title":"7. Modifications","terms.s7.body":"Nous pouvons modifier ces conditions de temps à autre et mettrons à jour la date \"Dernière mise à jour\" ci-dessus. Continuer à utiliser la plateforme après une modification signifie que vous acceptez la nouvelle version.","terms.s8.title":"8. Contact","terms.s8.body":"Pour toute question concernant ces conditions, contactez-nous via la page \"Assistance et contact\".","privacy.pageTitle":"Politique de confidentialité","privacy.s1.title":"1. Qui collecte les données","privacy.s1.body":"La plateforme \"YUSR Pro\" est celle qui collecte et traite vos données, dans un seul but : vous fournir le service que vous utilisez.","privacy.s2.title":"2. Données que nous collectons","privacy.s2.li1":"<b class=\"text-slate-200\">Données de compte :</b> si vous vous connectez avec Google, nous récupérons votre nom, votre photo et votre e-mail directement depuis Google. Si vous entrez en tant qu'invité, nous vous attribuons une identité anonyme juste pour vous distinguer des autres utilisateurs.","privacy.s2.li2":"<b class=\"text-slate-200\">Contenu que vous utilisez :</b> données de CV, portfolio, textes que vous rédigez ou résumez, et enregistrements audio que vous importez dans les outils d'entretien ou de transcription.","privacy.s2.li3":"<b class=\"text-slate-200\">Données d'utilisation technique :</b> le nombre de fois où vous avez utilisé chaque outil (pour appliquer les limites d'usage équitable), stockées localement sur votre appareil (localStorage), comme le \"nombre d'essais restants\".","privacy.s3.title":"3. Comment nous utilisons vos données","privacy.s3.body":"Nous utilisons vos données uniquement pour : (a) faire fonctionner les outils d'IA (nous envoyons le texte ou l'audio que vous importez à des entreprises de traitement spécialisées pour générer la réponse, sans stocker vos clés ni vos identifiants chez elles), (b) enregistrer votre profil pour qu'il soit là à votre retour, (c) améliorer le service et prévenir les abus.","privacy.s4.title":"4. Qui voit vos données (tiers)","privacy.s4.li1":"<b class=\"text-slate-200\">Google Firebase :</b> pour la connexion et le stockage sécurisé de votre profil.","privacy.s4.li2":"<b class=\"text-slate-200\">AI Processing Service :</b> pour le traitement du texte et de l'audio dans les outils de conversation et de transcription.","privacy.s4.li3":"<b class=\"text-slate-200\">Text-to-Speech Service :</b> pour la conversion texte-parole.","privacy.s4.li4":"<b class=\"text-slate-200\">Cloudflare :</b> comme intermédiaire technique sécurisé entre votre application et les services d'IA, sans conserver vos données.","privacy.s4.li5":"<b class=\"text-slate-200\">Web Search Service :</b> uniquement pour la recherche web en direct dans l'outil d'estimation de salaire.","privacy.s4.note":"Nous ne vendons jamais vos données à qui que ce soit et ne les partageons jamais à des fins publicitaires.","privacy.s5.title":"5. Sécurité des données","privacy.s5.body":"Vos données sont protégées par des règles de sécurité garantissant que chaque utilisateur ne voit que ses propres données, et toute communication entre votre application et le serveur est chiffrée (HTTPS).","privacy.s6.title":"6. Vos droits","privacy.s6.body":"Vous pouvez à tout moment demander à consulter vos données enregistrées, les modifier, ou demander leur suppression complète, en nous contactant via la page \"Assistance et contact\".","privacy.s7.title":"7. Enfants","privacy.s7.body":"Le service ne s'adresse pas aux personnes de moins de 13 ans, et nous ne collectons pas sciemment de données de cette tranche d'âge.","privacy.s8.title":"8. Modifications de cette politique","privacy.s8.body":"Nous pouvons mettre à jour cette politique de temps à autre, et nous changerons la date \"Dernière mise à jour\" ci-dessus dès que nous apporterons une modification substantielle.","assistant.botName":"Yusr Pro Bot","assistant.subtitle":"Parlez-lui par écrit ou à la voix, et envoyez une photo s'il doit voir quelque chose","assistant.inputPh":"Écrivez votre question ici...","assistant.attachImageTitle":"Joindre une photo","assistant.micTitle":"Enregistrement vocal","assistant.voiceToggleTitle":"Activer/désactiver la voix des réponses","assistant.newChatTitle":"Démarrer une nouvelle conversation","assistant.removeImageTitle":"Supprimer l'image","assistant.imageAlt":"Image jointe","assistant.providerHint":"Alimenté par plusieurs fournisseurs d'IA — si l'un est occupé, il bascule automatiquement vers un autre sans que vous le remarquiez.","assistant.emptyHint":"Posez une question à {bot} par écrit ou à la voix, ou envoyez-lui une image à voir et commenter.","assistant.defaultImageQuestion":"Décris cette image et explique-moi en détail ce qu'elle contient.","interview.resumeBefore":"Il reste une session d'entretien en cours (","interview.resumeAfter":"). Voulez-vous continuer ou démarrer une nouvelle session ?","interview.resume":"Continuer","interview.startNew":"Nouvelle session","interview.voiceLabel":"Voix de l'intervieweur","interview.voiceMale":"Voix masculine","interview.voiceFemale":"Voix féminine","interview.personaArLabel":"Arabe distingué","interview.personaEnLabel":"Anglais distingué","interview.screenshot":"Capturer la conversation","interview.endTitle":"Terminer définitivement l'entretien et l'enregistrer dans les archives","interview.endBtn":"Terminer l'entretien","interview.endHint":"Terminer l'entretien est définitif — cette session ne pourra plus être reprise après. Si vous voulez une autre langue ou un autre intervieweur, démarrez un nouvel entretien.","interview.stop":"Arrêter","interview.micTitle":"Parlez avec votre voix","interview.sendAria":"Envoyer la réponse","interview.evalTitle":"Évaluation de la performance","cv.tabPlain":"CV simple (sans photo)","cv.tabLinkedin":"Style LinkedIn (avec photo)","cv.plainNotice":"Un CV en texte simple, sans aucune photo — un texte professionnel prêt à être copié directement dans Word ou ailleurs.","cv.runPlain":"Rédiger le CV simple","cv.liNotice":"Une version au style LinkedIn : une photo de profil en haut, puis une liste d'informations de contact comme sur LinkedIn, suivie du contenu du CV.","cv.liPhotoAlt":"Photo du CV","cv.liPhotoHint":"Votre photo est enregistrée uniquement dans votre navigateur et n'est jamais envoyée nulle part.","cv.contactInfo":"Coordonnées","cv.phonePh":"Numéro de téléphone","cv.emailPh":"Adresse e-mail","cv.linkedinPh":"Lien LinkedIn ou profil professionnel","cv.locationPh":"Ville / Pays","cv.runLinkedin":"Rédiger le CV style LinkedIn","cv.exportFooter":"Créé via la plateforme YUSR","pf.screenshot":"Capture d'écran","pf.sendAria":"Envoyer","common.auto2Text":"العربية","common.auto3Text":"اردو","common.auto4Text":"فارسی","common.emailVerifyResendBtnText":"Renvoyer","common.emailVerifyRecheckBtnText":"Je l'ai vérifié, actualiser le statut","faq.auto1Text":"8 questions","faq.auto2Text":"12 questions","faq.auto3Text":"18 questions","faq.auto4Text":"Jeune diplômé / moins d'un an d'expérience","faq.auto5Text":"Niveau intermédiaire (Mid-level)","faq.auto6Text":"Senior / grande expérience","faq.auto7Text":"Niveau managérial / direction (Manager+)","career.auto1Text":"Longueur du plan","career.auto2Text":"Plan détaillé complet (toutes les étapes et détails)","career.auto3Text":"Résumé rapide et clair (points essentiels seulement, sans détails)","videoMock.auto1Text":"Préparez-moi quelque chose à dire devant la caméra","videoMock.auto2Text":"Au lieu d'ouvrir la caméra et de vous perdre sur ce qu'il faut dire, choisissez un mode et vous recevrez une question précise à répondre, ou un texte prêt à pratiquer à lire clairement — puis enregistrez-vous en train de répondre.","videoMock.auto3Text":"Une question d'entretien à laquelle je répondrai à voix haute","videoMock.auto4Text":"Un texte prêt à pratiquer la lecture claire","videoMock.auto5Text":"Donnez-m'en un autre","videoMock.auto6Text":"S'entraîner devant la caméra","videoMock.videoMockStatusText":"Appuyez sur « Démarrer la caméra » et votre navigateur demandera l'autorisation d'accès à la caméra et au micro — vous pourrez ensuite enregistrer un clip et le télécharger pour le revoir.","videoMock.auto7Text":"Simulation d'e-mail de planification d'entretien","videoMock.auto8Text":"Un e-mail réaliste sera généré par un « recruteur » vous demandant de confirmer une date/un lieu ou un lien d'entretien en ligne, et parfois vos prétentions salariales — entraînez-vous à répondre professionnellement.","videoMock.auto9Text":"Confirmer une date et un lieu (en personne)","videoMock.auto10Text":"Confirmer un rendez-vous d'entretien en ligne","videoMock.auto11Text":"Question sur les prétentions salariales","videoMock.auto12Text":"Conflit ou changement de rendez-vous soudain","videoMock.auto13Text":"E-mail urgent (répondre sous 24h)","videoMock.auto14Text":"Ton très formel","videoMock.auto15Text":"Ton amical et détendu","videoMock.auto16Text":"Ton urgent et pressé par le temps","videoMock.auto17Text":"Questions de suivi adaptées au salaire du poste","videoMock.auto18Text":"Conseils de tenue et d'apparence adaptés à l'entretien","videoMock.auto19Text":"Environnement de bureau formel (banques/grandes entreprises)","videoMock.auto20Text":"Environnement start-up / jeune et décontracté","videoMock.auto21Text":"Contact direct avec les clients","videoMock.auto22Text":"Domaine créatif","videoMock.auto23Text":"Entretien en ligne (appel vidéo)","videoMock.auto24Text":"Environnement de travail du Golfe, conservateur","videoMock.auto25Text":"Conseils pour hommes et femmes","videoMock.auto26Text":"Conseils pour hommes uniquement","videoMock.auto27Text":"Conseils pour femmes uniquement","salary.auto1Text":"L'outil recherche des résultats web en direct sur le marché de l'emploi au moment où vous appuyez sur « Estimer », et construit l'estimation à partir de cela avec l'analyse de l'IA — ce ne sont pas des données officielles ni une étude de marché précise à 100 % — utilisez-la comme point de départ de négociation, pas comme un chiffre final.","salary.auto2Text":"Égypte","salary.auto3Text":"Arabie Saoudite","salary.auto4Text":"Émirats Arabes Unis","salary.auto5Text":"Les pays du Golfe en général","salary.auto6Text":"À distance pour des entreprises étrangères","progress.auto1Text":"Vos archives d'entretiens : au lieu que chaque entretien soit séparé, une seule page rassemble tous vos entretiens, leurs transcriptions et vos rapports de performance de « Entretien vocal d'entraînement », et affiche votre progression au fil du temps.","progress.auto2Text":"Rappel pour un entretien à venir","progress.auto3Text":"Enregistrer le rappel","progress.progressReminderEnableBtnText":"Activer une vraie notification push du navigateur","progress.progressReminderStatusText":"Si vous précisez l'heure, vous recevrez une notification exactement à l'heure de l'entretien (à environ 5 minutes près), plus un rappel deux jours avant. Tant que vous avez autorisé les notifications et que le navigateur fonctionne (même si l'onglet n'est pas devant vous) — le navigateur doit rester ouvert ; vous ne la recevrez pas s'il est complètement fermé.","progress.auto4Text":"Historique des sessions précédentes","progress.auto5Text":"Comparer les deux sessions","match.auto1Text":"Collez la description du poste et votre CV, et nous vous donnerons un pourcentage de correspondance approximatif ainsi que des points faibles précis et des mots-clés manquants pour vous aider à passer les filtres ATS.","match.auto2Text":"Votre CV","match.auto3Text":"Utiliser le CV enregistré","match.auto4Text":"Description du poste","cover.auto1Text":"Dédié à la correspondance officielle de recherche d'emploi : une lettre de motivation jointe au CV, un mot de remerciement après l'entretien, ou une réponse à une offre salariale.","cover.auto2Text":"Importer des données d'un CV existant (facultatif)","cover.auto3Text":"Photographiez votre CV avec la caméra ou téléchargez une image/capture d'écran de celui-ci, et l'IA le lira pour en extraire les données clés afin de construire la lettre.","cover.auto4Text":"Télécharger une image du CV","cover.auto5Text":"Photographier le CV maintenant","cover.auto6Text":"Lettre de motivation jointe au CV","cover.auto7Text":"Mot de remerciement et de suivi après l'entretien","cover.auto8Text":"Réponse à une offre salariale / négociation de salaire","writing.auto1Text":"Vérification orthographique et grammaticale","writing.auto2Text":"Mise en forme académique (APA)","writing.auto3Text":"Mise en forme académique (Harvard)","summarizer.auto1Text":"Résumé très court (compréhension rapide)","summarizer.auto2Text":"Points clés","summarizer.auto3Text":"Un paragraphe","summarizer.auto4Text":"Résumé détaillé organisé par titres","tr.auto1Text":"🔎 Détection automatique de la langue","tr.auto2Text":"العربية","tr.auto3Text":"اردو","tr.auto4Text":"فارسی","tr.auto5Text":"Pas de traduction - même langue","tr.auto6Text":"العربية","pitch.auto1Text":"Introduction d'un entretien en personne","pitch.auto2Text":"Vidéo de présentation (LinkedIn / portfolio)","pitch.auto3Text":"Approche à froid d'une entreprise (réseautage)","pitch.auto4Text":"Début d'un appel téléphonique / une opportunité soudaine","pitch.auto5Text":"Formel, calme et professionnel","pitch.auto6Text":"Enthousiaste et énergique","pitch.auto7Text":"Simple, amical et proche des gens","pitch.auto8Text":"Écoutez le texte et chronométrez-le","pitch.auto10Text":"Créez d'abord votre CV","pitch.auto11Text":"Entraînez-vous avec un entretien vocal","profile.auto2Text":"Modifier","profile.auto3Text":"CV","profile.auto4Text":"Portfolio","profile.auto5Text":"Suivi de la progression","profile.auto6Text":"Offres","profile.profileStatPrivacyText":"Sécurisé","profile.auto7Text":"État de votre compte","profile.auto8Text":"Compte de connexion","profile.auto9Text":"Aperçu de votre compte","profile.auto10Text":"Votre offre actuelle","profile.auto11Text":"Nombre d'abonnements/achats","profile.auto12Text":"Historique des abonnements et achats","profile.auto13Text":"S'abonner à une offre","profile.auto14Text":"Le renouvellement automatique de votre offre a été arrêté, et vous continuerez d'en bénéficier normalement jusqu'au dernier jour de la période en cours.","profile.auto15Text":"Annuler la résiliation","profile.auto16Text":"Vous ne voulez pas continuer avec votre offre actuelle ?","profile.cancelSubBtnText":"Annuler l'abonnement","profile.auto17Text":"Confidentialité et vos données","profile.auto18Text":"Les données de votre profil, votre historique d'entraînement et votre journal d'utilisation sont stockés principalement sur votre appareil (navigateur), et si vous vous êtes connecté avec Google, une copie est synchronisée avec votre compte afin que vous la retrouviez depuis n'importe quel appareil. Les photos de CV et les fichiers audio/vidéo ne sont envoyés pour traitement qu'au moment de l'utilisation et ne sont pas stockés en permanence sur le serveur.","profile.auto19Text":"Changer le mot de passe","profile.auto20Text":"Effacer mes données enregistrées sur cet appareil uniquement","profile.auto21Text":"Zone de danger","profile.auto22Text":"La suppression de votre compte l'efface définitivement de nos systèmes : vos données, abonnements et journal d'utilisation sur le serveur (pas seulement sur cet appareil) - il s'agit d'une action définitive et irréversible.","profile.deleteAccountBtnText":"Supprimer définitivement mon compte","profile.auto23Text":"Votre abonnement","profile.auto24Text":"Total payé","profile.auto25Text":"Améliorer l'offre","profile.auto26Text":"Conseils rapides","profile.auto27Text":"Complétez vos données et votre photo pour que votre CV et votre portfolio soient au mieux, et suivez précisément votre progression depuis la page « Suivi de la progression ».","subscriptions.auto1Text":"EGP","subscriptions.auto2Text":"25 requêtes IA par mois","subscriptions.auto3Text":"Création de CV et résumé de documents","subscriptions.auto4Text":"EGP","subscriptions.auto5Text":"150 requêtes IA par mois","subscriptions.auto6Text":"Rapports de performance détaillés","subscriptions.auto7Text":"Montage + transcription audio dans toutes les langues","subscriptions.auto8Text":"EGP","subscriptions.auto9Text":"Requêtes IA totalement illimitées","subscriptions.auto10Text":"Tous les outils de la plateforme sans exception","subscriptions.auto11Text":"EGP","subscriptions.auto12Text":"Toutes les fonctionnalités de l'offre Professionnelle","subscriptions.auto13Text":"Deux mois gratuits","subscriptions.auto14Text":"EGP","subscriptions.auto15Text":"Toutes les fonctionnalités de l'offre Professionnelle","subscriptions.auto16Text":"Tableau de bord de suivi de la progression de l'équipe","subscriptions.auto17Text":"EGP","subscriptions.auto18Text":"Toutes les fonctionnalités Professionnelles pour tous les étudiants","subscriptions.auto19Text":"Rapport collectif pour le responsable de la promotion","subscriptions.auto20Text":"Séance de formation d'introduction gratuite","subscriptions.auto21Text":"Toutes les fonctionnalités + personnalisation complète","subscriptions.auto22Text":"Gestionnaire de compte dédié pour l'université","support.auto1Text":"Vous avez une suggestion, une plainte ou une question ?","support.auto2Text":"Suggestion","support.auto3Text":"Plainte","support.auto4Text":"Question","support.auto5Text":"Envoyer","pwaIosModal.auto2Text":"Installer l'application sur iPhone","pwaIosModal.auto3Text":"Faites défiler jusqu'à trouver « Ajouter à l'écran d'accueil ».","pwaIosModal.auto4Text":"Appuyez sur « Ajouter » ci-dessus — vous trouverez l'icône YUSR Pro sur votre écran d'accueil, comme n'importe quelle application.","pwaIosModal.auto5Text":"D'accord, compris","pricing.auto2Text":"Choisissez votre offre","pricing.auto3Text":"Tous les outils de la plateforme au même endroit - entretiens, CV, portfolio, relecture académique, transcription audio, et plus encore.","pricing.auto4Text":"Basique","pricing.auto5Text":"/ mois","pricing.auto6Text":"25 requêtes IA par mois (entretiens, CV, tous les outils)","pricing.auto7Text":"Création de CV et résumé de documents","pricing.auto8Text":"FAQ pour chaque poste","pricing.auto9Text":"Assistance via le chat du site","pricing.auto10Text":"S'abonner à l'offre Basique","pricing.auto11Text":"La plus demandée","pricing.auto12Text":"Professionnelle","pricing.auto13Text":"/ mois","pricing.auto14Text":"150 requêtes IA par mois (assez pour un entraînement quasi quotidien)","pricing.auto15Text":"Rapports de performance détaillés après chaque entretien","pricing.auto16Text":"Plans de développement de carrière personnalisés","pricing.auto17Text":"Portfolio + relecture académique","pricing.auto18Text":"Transcription audio dans toutes les langues disponibles","pricing.auto19Text":"Assistance technique prioritaire","pricing.auto20Text":"S'abonner à l'offre Professionnelle","pricing.auto21Text":"Meilleur rapport qualité-prix","pricing.auto22Text":"Élite","pricing.auto23Text":"/ mois","pricing.auto24Text":"Requêtes IA totalement illimitées, sans aucun plafond mensuel","pricing.auto25Text":"Tous les outils de la plateforme sans exception","pricing.auto26Text":"Réponse en priorité absolue de l'équipe d'assistance","pricing.auto27Text":"S'abonner à l'offre Élite","pricing.auto28Text":"Annuelle","pricing.auto29Text":"/ an","pricing.auto30Text":"Toutes les fonctionnalités Professionnelles (150 requêtes par mois toute l'année)","pricing.auto31Text":"Économisez environ deux mois par rapport à l'abonnement mensuel","pricing.auto32Text":"Une consultation de développement de carrière par an","pricing.auto33Text":"S'abonner à l'offre Annuelle","pricing.auto34Text":"Fermer","cvBuildModal.auto1Text":"Lier les données du CV à l'entretien","cvBuildModal.auto2Text":"Collez le texte de votre expérience afin que les questions soient adaptées :","cvBuildModal.auto3Text":"Enregistrer","cvBuildModal.auto4Text":"Annuler","reportModal.auto1Text":"Rapport de performance détaillé","termsGate.auto1Text":"Avant de commencer","termsGate.auto2Text":"J'ai lu et j'accepte les conditions d'utilisation et la politique de confidentialité.","termsGate.termsGateContinueText":"Continuer","paymentRequest.auto1Text":"Finaliser l'abonnement","paymentRequest.auto3Text":"Transférez le montant de l'offre via Vodafone Cash ou InstaPay au numéro :","paymentRequest.auto5Text":"Après le transfert, remplissez vos informations ci-dessous et soumettez la demande — l'offre sera activée manuellement sur votre compte dans quelques heures après vérification du transfert.","paymentRequest.prSubmitBtnText":"Transfert effectué, envoyer la demande","cancelSub.auto1Text":"Le renouvellement automatique sera simplement arrêté - vous continuerez à profiter normalement de tous les avantages de votre offre actuelle jusqu'au dernier jour de cette période, après quoi vous reviendrez automatiquement à l'offre gratuite. Vous pouvez annuler la résiliation à tout moment avant la fin de la période.","cancelSub.auto2Text":"Annuler","cancelSub.cancelSubConfirmBtnText":"Confirmer la résiliation","videoMock.videoMockTopicPh":"Le poste ou le sujet (ex : service client)","videoMock.videoEmailRolePh":"Le poste auquel vous postulez (ex : comptable)","videoMock.videoEmailReplyPh":"Écrivez ici votre réponse à l'e-mail...","videoMock.videoSalaryQRolePh":"Le poste (facultatif si déjà indiqué ci-dessus)","salary.salaryRolePh":"Intitulé du poste (ex : Designer graphique)","salary.salaryExperiencePh":"Années d'expérience (ex : 3 ans)","match.cvMatchResumePh":"Collez le texte de votre CV ici, ou cliquez sur « Lier le CV » ci-dessus...","match.cvMatchJobdescPh":"Collez ici le texte de l'offre d'emploi...","cover.coverCvExtractPh":"Les données extraites de l'image du CV apparaîtront ici, et vous pouvez les modifier avant de continuer","cover.coverRolePh":"Poste auquel vous postulez","cover.coverCompanyPh":"Nom de l'entreprise (facultatif)","cover.coverNotesPh":"Un ou deux points clés que vous souhaitez mettre en avant (expérience, réalisation, raison de votre intérêt pour l'entreprise...) - facultatif","support.fbContactPh":"Numéro de téléphone ou e-mail de contact (facultatif)","support.fbMessagePh":"Écrivez votre message ici...","cvBuildModal.cvTextInputPh":"Saisissez ici le texte de votre expérience...","paymentRequest.prNamePh":"Nom","paymentRequest.prPhonePh":"Le numéro de mobile depuis lequel vous avez transféré","paymentRequest.prRefPh":"Derniers chiffres de la transaction ou une remarque (facultatif)","common.themeToggleBtnTitle":"Passer au mode clair","assistant.assistantGenderToggleBtnTitle":"Voix de réponse : Homme","common.themeToggleBtnAria":"Passer au mode clair","tr.transcribeMicBtnAria":"Enregistrement vocal pour la transcription","pitch.auto9Aria":"Arrêter la lecture vocale","profile.auto1Aria":"Changer la photo de profil","profile.profilePhotoInputAria":"Télécharger la photo de profil","profile.profileNameAria":"Votre nom complet","profile.profileTitleAria":"Intitulé du poste","donations.auto1Aria":"Copier le numéro","donations.auto2Aria":"Copier le numéro","donations.auto3Aria":"Copier le numéro","pwaIosModal.auto1Aria":"Fermer","pricing.auto1Aria":"Retour","reportModal.auto2Aria":"Fermer","paymentRequest.auto2Aria":"Fermer","paymentRequest.auto4Aria":"Copier le numéro","profile.profilePhotoPreviewAlt":"Photo de profil","profile.signedinAvatarImgAlt":"Photo du compte"
        },
        es: {
            "nav.searchPh":"Buscar herramientas...","nav.searchEmpty":"No se encontraron herramientas","nav.section.interviews":"Entrevistas y contratación","nav.interview":"Entrevista de práctica por voz","nav.faq":"Preguntas frecuentes + respuestas modelo","nav.career":"Plan de desarrollo profesional","nav.section.documents":"Documentos","nav.cv":"Creador de CV","nav.portfolio":"Portafolio personal","nav.writing":"Revisión académica","nav.summarizer":"Resumen de documentos","nav.section.audio":"Audio y video","nav.transcribe":"Transcripción de audio a texto","nav.pitch":"Presentación de 30 segundos","nav.section.account":"Cuenta y soporte","nav.about":"Sobre nosotros","nav.history":"Historial unificado","nav.profile":"Perfil","nav.subscriptions":"Suscripciones","nav.donations":"Donaciones","nav.support":"Soporte y contacto","nav.section.legal":"Legal","nav.terms":"Términos de uso","nav.privacy":"Política de privacidad","nav.section.ai":"Inteligencia artificial","nav.videoMock":"Simulador de entrevista en video","nav.salary":"Estimador de salario esperado","nav.progress":"Seguimiento del progreso","nav.match":"Coincidencia de CV con el empleo","nav.cover":"Generador de cartas de empleo","nav.closeMenu":"Cerrar menú","nav.clearSearch":"Borrar búsqueda","nav.openMenu":"Abrir menú","pwa.title":"Descarga YUSR Pro como app","pwa.desc":"Un icono en tu pantalla de inicio que se abre como cualquier app normal","pwa.installBtn":"Instalar aplicación","pwa.hideAria":"Ocultar sugerencia de instalación","hide":"Ocultar","apk.title":"Prueba nuestra app de Android 📱","apk.desc":"Más rápida y sencilla que el navegador — descárgala directamente aquí","apk.hideAria":"Ocultar sugerencia de la app","apk.downloadBtn":"Descarga la app de YUSR Pro ahora","trial.headerTitle":"Intentos gratis restantes este mes","support.techLabel":"Soporte técnico","account.guest":"Invitado (este dispositivo)","account.signinHint":"Inicia sesión con Google para guardar tu foto y puntos","authgate.title":"Iniciar sesión","authgate.subtitle":"Si no puedes entrar como invitado ahora (normalmente un problema de conexión), inicia sesión con Google o tu correo.","authgate.googleBtn":"Iniciar sesión con Google","authgate.orEmail":"o por correo","authgate.tabLogin":"Iniciar sesión","authgate.tabSignup":"Crear cuenta","authgate.namePh":"Tu nombre completo","authgate.emailPh":"Correo electrónico","authgate.passwordPh":"Contraseña","authgate.confirmPh":"Confirmar contraseña","authgate.submitLogin":"Iniciar sesión","authgate.submitSignup":"Crear cuenta","authgate.privacyNote":"Tus datos se guardan de forma segura, y tu contraseña está cifrada — ni nosotros podemos verla.","authgate.recaptchaNote":"Este sitio está protegido por reCAPTCHA y se aplican la <a href=\"https://policies.google.com/privacy\" target=\"_blank\" rel=\"noopener\" style=\"color:inherit;text-decoration:underline;\">Política de Privacidad</a> y los <a href=\"https://policies.google.com/terms\" target=\"_blank\" rel=\"noopener\" style=\"color:inherit;text-decoration:underline;\">Términos del Servicio</a> de Google.","trial.left":"Intentos restantes","trial.upgrade":"Actualizar al plan completo","trial.warningLow":"¡Solo te quedan {n} intentos gratuitos este mes!","trial.warningLast":"¡Este es tu último intento gratuito este mes!","copy":"Copiar","download":"Descargar","interview.desc":"Practica una entrevista oral real con una evaluación de desempeño detallada al final.","interview.linkCv":"Vincular CV","interview.roleLabel":"Puesto objetivo","interview.rolePh":"ej.: ventas inmobiliarias, atención al cliente, programación...","interview.personaLabel":"Personalidad del entrevistador","interview.start":"Iniciar sesión","interview.speaking":"El entrevistador está hablando...","interview.inputPh":"Habla por el micrófono o escribe aquí...","interview.reportHint":"La evaluación analiza tus respuestas de texto además de tu velocidad al hablar y muletillas si usaste el micrófono.","faq.desc":"Escribe el puesto y el área, y prepararemos un banco real de preguntas frecuentes con respuestas modelo convincentes.","faq.rolePh":"ej.: representante de ventas inmobiliarias","faq.run":"Generar preguntas y respuestas","career.desc":"Cuéntanos tu situación actual y tu objetivo, y construiremos un plan de desarrollo práctico.","career.currentLabel":"Tu situación actual","career.currentPh":"ej.: contador con 1 año de experiencia","career.targetLabel":"Tu objetivo","career.targetPh":"ej.: cambiar al análisis de datos","career.contextPh":"Detalles adicionales útiles - opcional","career.run":"Construir mi plan","cv.notice":"Esta herramienta redacta el contenido de texto de tu CV listo para copiar, no un PDF diseñado como en LinkedIn.","cv.photoHint":"Foto opcional (se guarda solo en tu navegador).","cv.namePh":"Nombre completo","cv.titlePh":"Puesto objetivo","cv.expPh":"Tu experiencia laboral","cv.eduPh":"Formación y certificados","cv.skillsPh":"Habilidades (separadas por comas)","cv.run":"Redactar mi CV","pf.notice":"La IA te hará algunas preguntas sencillas sobre tu área y proyectos para preparar contenido de portafolio personalizado.","pf.fieldPh":"Tu área (diseñador, desarrollador, marketing...)","pf.start":"Empezar - que la IA me pregunte","pf.inputPh":"Escribe tu respuesta aquí...","pf.generate":"Suficientes preguntas - generar el portafolio ahora","writing.notice":"Revisión lingüística y sugerencias de formato académico como recomendaciones de texto que aplicas tú mismo en Word.","writing.topicPh":"Tema de investigación (opcional)","writing.inputPh":"Pega aquí el texto de tu investigación o artículo...","writing.run":"Revisar texto","sum.desc":"Resume cualquier informe, artículo o clase en segundos.","sum.inputPh":"Pega el texto aquí...","sum.run":"Resumir ahora","tr.notice":"Puedes subir un archivo de audio listo para transcribirlo automáticamente con IA, grabar directamente con el micrófono, o pegar un texto ya listo.","tr.uploadBtn":"Subir archivo de audio y transcribir","tr.uploadHint":"Aún no se ha subido ningún archivo","tr.sourceLangLabel":"Idioma original del habla","tr.targetLangLabel":"Traducir el texto final a (opcional)","tr.micHint":"Pulsa para grabar, sube un archivo arriba, o pega un texto abajo.","tr.rawPh":"El texto en bruto aparecerá aquí...","tr.run":"Limpiar y dar formato","pitch.notice":"Prepara una presentación personal profesional de unos 30 segundos, vinculada a tu CV y perfil guardados.","pitch.purposeLabel":"¿Dónde la vas a usar?","pitch.toneLabel":"Tono de voz","pitch.rolePh":"Puesto o área objetivo","pitch.highlightPh":"Uno o dos puntos destacados - opcional","pitch.run":"Generar presentación de 30 segundos","profile.points":"puntos","profile.namePh":"Tu nombre completo","profile.titlePh":"Puesto de trabajo","profile.googleBtn":"Iniciar sesión con Google","profile.googleHint":"Iniciar sesión guarda tu nombre, foto y puntos en este dispositivo — los intentos gratuitos se cuentan por dispositivo, no por cuenta.","profile.save":"Guardar información","profile.connected":"Conectado con Google","profile.logoutBtn":"Cerrar sesión","profile.statUsage":"Usos de herramientas","profile.statDevice":"ID del dispositivo","profile.statPlan":"Tu plan actual","profile.planFree":"Gratis","subs.individualTitle":"Planes individuales","subs.individualDesc":"Para cualquiera que se esté preparando para una entrevista o construyendo su propia carrera.","subs.basicName":"Básico","subs.perMonth":"/ mes","subs.proName":"Profesional","subs.eliteName":"Élite","subs.popular":"Más popular","subs.bestValue":"Mejor valor","subs.yearlyName":"Anual","subs.perYear":"/ año","subs.subscribe":"Suscribirse ahora","subs.teamTitle":"Planes para equipos y universidades","subs.teamDesc":"Para facultades, universidades y centros de contratación que quieren capacitar a un grupo junto a un mejor precio.","subs.teamSmallName":"Equipo pequeño","subs.teamSmallRange":"Hasta 10 personas","subs.perSeat":"/ por persona / mes","subs.recommended":"Recomendado para universidades","subs.teamMedName":"Grupo / facultad","subs.teamMedRange":"De 11 a 100 personas","subs.uniName":"Universidad / gran organización","subs.uniRange":"Más de 100 personas","subs.customPrice":"Precio personalizado","subs.contactUs":"Contáctanos","don.title":"Apoya la continuidad de la plataforma","don.desc":"Si quieres apoyar el desarrollo de YUSR Pro, puedes donar cualquier cantidad a través de los números de abajo.","don.wallet":"Billetera electrónica","don.thanks":"Muchas gracias a todos los que nos apoyan.","sup.title":"Soporte y contacto","sup.desc":"¿Tienes una pregunta, problema o sugerencia? Contáctanos directamente.","sup.phone":"Llamada directa","sup.hours":"Solemos responder en unas pocas horas. Para asuntos urgentes, WhatsApp es lo más rápido.","legal.lastUpdated":"Última actualización: agosto de 2026","history.pageTitle":"Historial unificado","history.subtitle":"Los últimos 20 resultados de cualquier herramienta del sitio (resúmenes, revisiones, cartas y más) se guardan aquí automáticamente para que no los pierdas si cierras la página.","history.listTitle":"Resultados guardados","history.clearAll":"Borrar todo","history.empty":"Aún no hay resultados guardados. Cualquier resultado de las herramientas del sitio aparecerá aquí automáticamente.","onboarding.title":"Bienvenido a YUSR Pro 👋","onboarding.subtitle":"3 pasos rápidos para empezar bien:","onboarding.step1.title":"Completa tu perfil","onboarding.step1.desc":"Otras herramientas, como el CV y la entrevista, usan estos datos.","onboarding.step2.title":"Prueba una entrevista simulada","onboarding.step2.desc":"Practica preguntas reales en voz alta y recibe comentarios al instante.","onboarding.step3.title":"Crea tu CV","onboarding.step3.desc":"Te crearemos un CV profesional en minutos a partir de tus datos guardados.","onboarding.tip":"Consejo: hay un cuadro de búsqueda sobre el menú lateral para encontrar rápido cualquiera de las más de 20 herramientas.","onboarding.skip":"Omitir, exploraré por mi cuenta","about.pageTitle":"Sobre nosotros","about.tagline":"Una plataforma árabe que construimos con pasión para ser tu compañera en tu trayectoria profesional.","about.missionLabel":"Nuestra misión","about.missionBody":"Creemos que todos, sea cual sea su origen o circunstancias, merecen alcanzar la oportunidad correcta sintiéndose seguros y bien preparados. \"YUSR Pro\" nació de una idea sencilla: una buena preparación para entrevistas o un CV sólido no deberían ser exclusivos de quien tiene tiempo, dinero o contactos — la IA ahora puede poner esa misma calidad al alcance de cualquiera, en cualquier momento.","about.pillarsTitle":"Qué nos impulsa","about.pillar1Title":"Ayuda real","about.pillar1Body":"No solo herramientas: diseñamos cada función para resolver un problema real que enfrentan quienes buscan empleo.","about.pillar2Title":"Mejora continua","about.pillar2Body":"Escuchamos tus sugerencias y seguimos añadiendo y mejorando — la plataforma crece contigo, paso a paso.","about.pillar3Title":"IA a tu servicio","about.pillar3Body":"Aprovechamos la última tecnología de IA para darte una experiencia de preparación personalizada y de alta calidad.","about.pillar4Title":"Tu privacidad primero","about.pillar4Body":"Tus datos son tuyos; solo los usamos o compartimos para brindarte el servicio.","about.whyTitle":"¿Por qué YUSR Pro?","about.why1":"Una experiencia diseñada completamente en árabe que entiende tu dialecto.","about.why2":"Todas las herramientas que necesitas, desde entrevistas hasta CV y portafolio, en un solo lugar.","about.why3":"Comentarios honestos y realistas que te ayudan a mejorar, no solo elogios genéricos.","about.why4":"Seguimos desarrollando la plataforma según las necesidades reales de nuestros usuarios.","about.closing":"¿Tienes una idea o sugerencia que mejore YUSR? Nos encantaría escucharla.","about.contactUs":"Contáctanos","terms.pageTitle":"Términos de uso","terms.betaNotice":"La plataforma aún está en fase beta. La página de \"Suscripciones\" muestra actualmente planes y precios de prueba, sin cargo real a ninguna tarjeta o cuenta — lo anunciaremos claramente en la aplicación en cuanto se active el pago real.","terms.s1.title":"1. Aceptación de los términos","terms.s1.body":"Al usar la plataforma \"YUSR Pro\", aceptas estos términos.","terms.s2.title":"2. Naturaleza del servicio","terms.s2.body":"YUSR es una plataforma de asistencia con IA para preparar a quienes buscan empleo: entrevistas de práctica por voz, creación de CV y portafolio, revisión académica, resumen de documentos y transcripción de audio. Las respuestas y sugerencias son generadas por IA y se consideran una ayuda orientativa, no una garantía de resultado ni de ser contratado.","terms.s3.title":"3. Cuenta y uso permitido","terms.s3.body":"Puedes usar la plataforma como invitado (identidad anónima automática) o iniciando sesión con una cuenta de Google para guardar tus datos. Eres responsable de cualquier actividad realizada desde tu cuenta. Está prohibido: intentar eludir los límites de uso justo, enviar solicitudes automatizadas masivas (bots), o intentar acceder a cualquier parte del sistema sin autorización.","terms.s4.title":"4. Límites de uso justo","terms.s4.body":"Para garantizar la continuidad del servicio para todos, las herramientas de IA (chat, transcripción de audio, texto a voz) tienen un límite diario y mensual de uso. Si alcanzas el límite, deberás esperar a que se renueve.","terms.s5.title":"5. Tu contenido","terms.s5.body":"Cualquier contenido que escribas o subas (datos de CV, portafolio, grabaciones de voz) sigue siendo tuyo. Solo lo procesamos para brindarte el servicio, y nunca lo usamos con otro fin ni lo vendemos.","terms.s6.title":"6. Exención de responsabilidad","terms.s6.body":"El servicio se ofrece \"tal cual\" sin garantías. No somos responsables de ninguna decisión profesional o laboral que tomes basándote en los resultados de la IA, y siempre recomendamos revisar tú mismo cualquier contenido importante antes de usarlo.","terms.s7.title":"7. Cambios","terms.s7.body":"Podemos modificar estos términos de vez en cuando y actualizaremos la fecha de \"Última actualización\" arriba. Continuar usando la plataforma tras un cambio significa que aceptas la nueva versión.","terms.s8.title":"8. Contacto","terms.s8.body":"Para cualquier pregunta sobre estos términos, contáctanos a través de la página \"Soporte y contacto\".","privacy.pageTitle":"Política de privacidad","privacy.s1.title":"1. Quién recopila los datos","privacy.s1.body":"La plataforma \"YUSR Pro\" es quien recopila y procesa tus datos, con un único fin: brindarte el servicio que usas.","privacy.s2.title":"2. Datos que recopilamos","privacy.s2.li1":"<b class=\"text-slate-200\">Datos de la cuenta:</b> si inicias sesión con Google, obtenemos tu nombre, foto y correo directamente de Google. Si entras como invitado, te damos una identidad anónima solo para diferenciarte de otros usuarios.","privacy.s2.li2":"<b class=\"text-slate-200\">Contenido que usas:</b> datos de CV, portafolio, textos que escribes o resumes, y grabaciones de voz que subes a las herramientas de entrevistas o transcripción.","privacy.s2.li3":"<b class=\"text-slate-200\">Datos técnicos de uso:</b> cuántas veces has usado cada herramienta (para aplicar los límites de uso justo), guardados localmente en tu dispositivo (localStorage), como los \"intentos restantes\".","privacy.s3.title":"3. Cómo usamos tus datos","privacy.s3.body":"Usamos tus datos únicamente para: (a) ejecutar las herramientas de IA (enviamos el texto o audio que subes a empresas de procesamiento especializadas para generar la respuesta, sin almacenar tus claves ni datos de acceso con ellas), (b) guardar tu perfil para que esté ahí cuando vuelvas, (c) mejorar el servicio y prevenir el abuso.","privacy.s4.title":"4. Quién ve tus datos (terceros)","privacy.s4.li1":"<b class=\"text-slate-200\">Google Firebase:</b> para el inicio de sesión y el almacenamiento seguro de tu perfil.","privacy.s4.li2":"<b class=\"text-slate-200\">AI Processing Service:</b> para procesar texto y audio en las herramientas de chat y transcripción.","privacy.s4.li3":"<b class=\"text-slate-200\">Text-to-Speech Service:</b> para la conversión de texto a voz.","privacy.s4.li4":"<b class=\"text-slate-200\">Cloudflare:</b> como intermediario técnico seguro entre tu aplicación y los servicios de IA, sin conservar tus datos.","privacy.s4.li5":"<b class=\"text-slate-200\">Web Search Service:</b> solo para búsqueda web en vivo en la herramienta de estimación de salario.","privacy.s4.note":"Nunca vendemos tus datos a nadie, ni los compartimos con fines publicitarios.","privacy.s5.title":"5. Seguridad de los datos","privacy.s5.body":"Tus datos están protegidos por reglas de seguridad que garantizan que cada usuario solo vea sus propios datos, y toda la comunicación entre tu aplicación y el servidor está cifrada (HTTPS).","privacy.s6.title":"6. Tus derechos","privacy.s6.body":"Puedes solicitar en cualquier momento ver tus datos guardados, editarlos o solicitar su eliminación completa, contactándonos a través de la página \"Soporte y contacto\".","privacy.s7.title":"7. Menores","privacy.s7.body":"El servicio no está dirigido a menores de 13 años, y no recopilamos datos deliberadamente de ese grupo de edad.","privacy.s8.title":"8. Cambios en esta política","privacy.s8.body":"Podemos actualizar esta política de vez en cuando, y cambiaremos la fecha de \"Última actualización\" arriba cuando hagamos un cambio sustancial.","assistant.botName":"Yusr Pro Bot","assistant.subtitle":"Háblale por texto o voz, y envíale una foto si necesita verla","assistant.inputPh":"Escribe tu pregunta aquí...","assistant.attachImageTitle":"Adjuntar foto","assistant.micTitle":"Grabación de voz","assistant.voiceToggleTitle":"Activar/desactivar voz de las respuestas","assistant.newChatTitle":"Iniciar una nueva conversación","assistant.removeImageTitle":"Quitar imagen","assistant.imageAlt":"Imagen adjunta","assistant.providerHint":"Impulsado por varios proveedores de IA — si uno está ocupado, cambia a otro automáticamente sin que lo notes.","assistant.emptyHint":"Pregúntale a {bot} por texto o voz, o envíale una imagen para que la vea y responda.","assistant.defaultImageQuestion":"Describe esta imagen y explícame en detalle qué contiene.","interview.resumeBefore":"Todavía tienes una entrevista en curso (","interview.resumeAfter":"). ¿Quieres continuar o empezar una nueva sesión?","interview.resume":"Continuar","interview.startNew":"Empezar de nuevo","interview.voiceLabel":"Voz del entrevistador","interview.voiceMale":"Voz masculina","interview.voiceFemale":"Voz femenina","interview.personaArLabel":"Árabe distinguido","interview.personaEnLabel":"Inglés distinguido","interview.screenshot":"Capturar la conversación","interview.endTitle":"Finalizar la entrevista definitivamente y guardarla en el archivo","interview.endBtn":"Finalizar entrevista","interview.endHint":"Finalizar la entrevista es definitivo: esta sesión no podrá continuarse después. Si quieres otro idioma o entrevistador, inicia una nueva entrevista.","interview.stop":"Detener","interview.micTitle":"Habla con tu voz","interview.sendAria":"Enviar respuesta","interview.evalTitle":"Evaluación del desempeño","cv.tabPlain":"CV simple (sin foto)","cv.tabLinkedin":"Estilo LinkedIn (con foto)","cv.plainNotice":"Un CV en texto plano sin ninguna foto: texto profesional listo para copiar directamente en Word o donde quieras.","cv.runPlain":"Redactar el CV simple","cv.liNotice":"Una versión al estilo LinkedIn: una foto de perfil arriba, luego una lista de datos de contacto igual que en LinkedIn, y después el contenido del CV.","cv.liPhotoAlt":"Foto del CV","cv.liPhotoHint":"Tu foto se guarda solo en tu navegador y nunca se envía a ningún lugar.","cv.contactInfo":"Información de contacto","cv.phonePh":"Número de teléfono","cv.emailPh":"Correo electrónico","cv.linkedinPh":"Enlace de LinkedIn o perfil profesional","cv.locationPh":"Ciudad / País","cv.runLinkedin":"Redactar el CV estilo LinkedIn","cv.exportFooter":"Creado a través de la plataforma YUSR","pf.screenshot":"Captura de pantalla","pf.sendAria":"Enviar","common.auto2Text":"العربية","common.auto3Text":"اردو","common.auto4Text":"فارسی","common.emailVerifyResendBtnText":"Reenviar","common.emailVerifyRecheckBtnText":"Ya lo verifiqué, actualizar estado","faq.auto1Text":"8 preguntas","faq.auto2Text":"12 preguntas","faq.auto3Text":"18 preguntas","faq.auto4Text":"Recién graduado / menos de un año de experiencia","faq.auto5Text":"Nivel intermedio (Mid-level)","faq.auto6Text":"Senior / amplia experiencia","faq.auto7Text":"Nivel gerencial / directivo (Manager+)","career.auto1Text":"Duración del plan","career.auto2Text":"Plan detallado completo (todos los pasos y detalles)","career.auto3Text":"Resumen rápido y claro (solo los puntos clave, sin extenderse)","videoMock.auto1Text":"Prepárame algo para decir frente a la cámara","videoMock.auto2Text":"En lugar de abrir la cámara y confundirte sobre qué decir, elige un modo y recibirás una pregunta específica para responder, o un texto listo para practicar leyéndolo con claridad — luego grábate respondiendo.","videoMock.auto3Text":"Una pregunta de entrevista para responder en voz alta","videoMock.auto4Text":"Texto listo para practicar la lectura clara","videoMock.auto5Text":"Dame otro","videoMock.auto6Text":"Practica frente a la cámara","videoMock.videoMockStatusText":"Presiona \"Iniciar cámara\" y tu navegador pedirá permiso para la cámara y el micrófono — luego podrás grabar un clip y descargarlo para revisarlo.","videoMock.auto7Text":"Simulación de correo de programación de entrevista","videoMock.auto8Text":"Se generará un correo realista de un \"reclutador\" pidiéndote confirmar una fecha/lugar o un enlace de entrevista en línea, y a veces tus expectativas salariales — practica responder con profesionalismo.","videoMock.auto9Text":"Confirmar fecha y lugar (presencial)","videoMock.auto10Text":"Confirmar una cita de entrevista en línea","videoMock.auto11Text":"Pregunta sobre expectativas salariales","videoMock.auto12Text":"Conflicto/cambio de horario repentino","videoMock.auto13Text":"Correo urgente (responder en un día)","videoMock.auto14Text":"Tono muy formal","videoMock.auto15Text":"Tono amistoso y relajado","videoMock.auto16Text":"Tono urgente y con presión de tiempo","videoMock.auto17Text":"Preguntas de seguimiento adecuadas para el salario del puesto","videoMock.auto18Text":"Consejos de vestimenta y apariencia adecuados para la entrevista","videoMock.auto19Text":"Entorno de oficina formal (bancos/grandes empresas)","videoMock.auto20Text":"Entorno startup / joven e informal","videoMock.auto21Text":"Contacto directo con clientes","videoMock.auto22Text":"Campo creativo","videoMock.auto23Text":"Entrevista en línea (videollamada)","videoMock.auto24Text":"Entorno laboral conservador del Golfo","videoMock.auto25Text":"Consejos para hombres y mujeres","videoMock.auto26Text":"Consejos solo para hombres","videoMock.auto27Text":"Consejos solo para mujeres","salary.auto1Text":"La herramienta busca resultados web en vivo sobre el mercado laboral en el momento en que presionas \"Estimar\", y construye la estimación sobre eso con el análisis de la IA — no son datos oficiales ni una encuesta de mercado 100% precisa — úsalo como punto de partida para negociar, no como cifra final.","salary.auto2Text":"Egipto","salary.auto3Text":"Arabia Saudita","salary.auto4Text":"Emiratos Árabes Unidos","salary.auto5Text":"Los países del Golfo en general","salary.auto6Text":"Remoto para empresas extranjeras","progress.auto1Text":"Tu archivo de entrevistas: en lugar de que cada entrevista quede separada, una sola página reúne todas tus entrevistas, sus transcripciones e informes de desempeño de \"Entrevista de práctica por voz\", y muestra tu progreso con el tiempo.","progress.auto2Text":"Recordatorio para una entrevista próxima","progress.auto3Text":"Guardar recordatorio","progress.progressReminderEnableBtnText":"Activar una notificación push real del navegador","progress.progressReminderStatusText":"Si indicas la hora, recibirás una notificación exactamente a la hora de la entrevista (con una diferencia de hasta 5 minutos), además de un recordatorio dos días antes. Mientras hayas permitido las notificaciones y el navegador esté funcionando (aunque la pestaña no esté frente a ti) — sigue necesitando que el navegador esté abierto; no te llegará si está completamente cerrado.","progress.auto4Text":"Registro de sesiones anteriores","progress.auto5Text":"Comparar las dos sesiones","match.auto1Text":"Pega la descripción del puesto y tu currículum, y te daremos un porcentaje de coincidencia aproximado junto con puntos débiles específicos y palabras clave faltantes para ayudarte a superar los filtros ATS.","match.auto2Text":"Tu currículum","match.auto3Text":"Usar el CV guardado","match.auto4Text":"Descripción del puesto","cover.auto1Text":"Dedicado a la correspondencia formal de búsqueda de empleo: una carta de presentación adjunta al CV, una nota de agradecimiento después de la entrevista, o una respuesta a una oferta salarial.","cover.auto2Text":"Importar datos de un CV existente (opcional)","cover.auto3Text":"Fotografía tu CV con la cámara o sube una imagen/captura de pantalla de él, y la IA lo leerá y extraerá los datos clave para construir la carta.","cover.auto4Text":"Subir imagen del CV","cover.auto5Text":"Fotografiar el CV ahora","cover.auto6Text":"Carta de presentación adjunta al CV","cover.auto7Text":"Nota de agradecimiento y seguimiento después de la entrevista","cover.auto8Text":"Respuesta a una oferta salarial / negociación salarial","writing.auto1Text":"Revisión ortográfica y gramatical","writing.auto2Text":"Formato académico (APA)","writing.auto3Text":"Formato académico (Harvard)","summarizer.auto1Text":"Resumen muy breve (comprensión rápida)","summarizer.auto2Text":"Puntos clave","summarizer.auto3Text":"Un párrafo","summarizer.auto4Text":"Resumen detallado organizado con títulos","tr.auto1Text":"🔎 Detección automática de idioma","tr.auto2Text":"العربية","tr.auto3Text":"اردو","tr.auto4Text":"فارسی","tr.auto5Text":"Sin traducción - mismo idioma","tr.auto6Text":"العربية","pitch.auto1Text":"Apertura de una entrevista en persona","pitch.auto2Text":"Video de presentación (LinkedIn / portafolio)","pitch.auto3Text":"Contacto en frío con una empresa (networking)","pitch.auto4Text":"Inicio de una llamada telefónica / una oportunidad repentina","pitch.auto5Text":"Formal, tranquilo y profesional","pitch.auto6Text":"Entusiasta y enérgico","pitch.auto7Text":"Simple, amistoso y cercano","pitch.auto8Text":"Escucha el texto y cronométralo","pitch.auto10Text":"Crea primero tu CV","pitch.auto11Text":"Practica con una entrevista de voz","profile.auto2Text":"Cambiar","profile.auto3Text":"CV","profile.auto4Text":"Portafolio","profile.auto5Text":"Seguimiento del progreso","profile.auto6Text":"Planes","profile.profileStatPrivacyText":"Seguro","profile.auto7Text":"Estado de tu cuenta","profile.auto8Text":"Cuenta de acceso","profile.auto9Text":"Resumen de tu cuenta","profile.auto10Text":"Tu plan actual","profile.auto11Text":"Número de suscripciones/compras","profile.auto12Text":"Historial de suscripciones y compras","profile.auto13Text":"Suscribirse a un plan","profile.auto14Text":"La renovación automática de tu plan ha sido detenida, y seguirás disfrutando de sus beneficios con normalidad hasta el último día del período actual.","profile.auto15Text":"Deshacer cancelación","profile.auto16Text":"¿No quieres continuar con tu plan actual?","profile.cancelSubBtnText":"Cancelar suscripción","profile.auto17Text":"Privacidad y tus datos","profile.auto18Text":"Los datos de tu perfil, tu historial de entrenamiento y tu registro de uso se almacenan principalmente en tu dispositivo (navegador), y si iniciaste sesión con Google, se sincroniza una copia con tu cuenta para que puedas encontrarla desde cualquier dispositivo. Las fotos del CV y los archivos de audio/video se envían para procesamiento solo en el momento de uso y no se almacenan de forma permanente en el servidor.","profile.auto19Text":"Cambiar contraseña","profile.auto20Text":"Borrar mis datos guardados solo en este dispositivo","profile.auto21Text":"Zona de peligro","profile.auto22Text":"Eliminar tu cuenta la borra permanentemente de nuestro sistema: tus datos, suscripciones y registro de uso en el servidor (no solo en este dispositivo) - esta es una acción definitiva que no se puede deshacer.","profile.deleteAccountBtnText":"Eliminar mi cuenta permanentemente","profile.auto23Text":"Tu membresía","profile.auto24Text":"Total pagado","profile.auto25Text":"Mejorar el plan","profile.auto26Text":"Consejos rápidos","profile.auto27Text":"Completa tus datos y foto para que tu CV y portafolio se vean mejor, y puedas seguir tu progreso con precisión desde la página \"Seguimiento del progreso\".","subscriptions.auto1Text":"EGP","subscriptions.auto2Text":"25 solicitudes de IA al mes","subscriptions.auto3Text":"Creación de CV y resumen de documentos","subscriptions.auto4Text":"EGP","subscriptions.auto5Text":"150 solicitudes de IA al mes","subscriptions.auto6Text":"Informes de desempeño detallados","subscriptions.auto7Text":"Edición + transcripción de audio en todos los idiomas","subscriptions.auto8Text":"EGP","subscriptions.auto9Text":"Solicitudes de IA totalmente ilimitadas","subscriptions.auto10Text":"Todas las herramientas de la plataforma sin excepción","subscriptions.auto11Text":"EGP","subscriptions.auto12Text":"Todas las funciones del plan Profesional","subscriptions.auto13Text":"Dos meses gratis","subscriptions.auto14Text":"EGP","subscriptions.auto15Text":"Todas las funciones del plan Profesional","subscriptions.auto16Text":"Panel de seguimiento del progreso del equipo","subscriptions.auto17Text":"EGP","subscriptions.auto18Text":"Todas las funciones Profesionales para todos los estudiantes","subscriptions.auto19Text":"Informe colectivo para el supervisor del grupo","subscriptions.auto20Text":"Sesión de formación introductoria gratuita","subscriptions.auto21Text":"Todas las funciones + personalización completa","subscriptions.auto22Text":"Gestor de cuenta dedicado para la universidad","support.auto1Text":"¿Tienes una sugerencia, queja o pregunta?","support.auto2Text":"Sugerencia","support.auto3Text":"Queja","support.auto4Text":"Pregunta","support.auto5Text":"Enviar","pwaIosModal.auto2Text":"Instalar la app en iPhone","pwaIosModal.auto3Text":"Desplázate hasta encontrar \"Añadir a pantalla de inicio\".","pwaIosModal.auto4Text":"Toca \"Añadir\" arriba — encontrarás el ícono de YUSR Pro en tu pantalla de inicio, como cualquier app normal.","pwaIosModal.auto5Text":"Entendido","pricing.auto2Text":"Elige tu plan","pricing.auto3Text":"Todas las herramientas de la plataforma en un solo lugar - entrevistas, CV, portafolio, revisión académica, transcripción de audio y más.","pricing.auto4Text":"Básico","pricing.auto5Text":"/ mes","pricing.auto6Text":"25 solicitudes de IA al mes (entrevistas, CV, todas las herramientas)","pricing.auto7Text":"Creación de CV y resumen de documentos","pricing.auto8Text":"Preguntas frecuentes para cada puesto","pricing.auto9Text":"Soporte por chat del sitio","pricing.auto10Text":"Suscribirse al plan Básico","pricing.auto11Text":"Más popular","pricing.auto12Text":"Profesional","pricing.auto13Text":"/ mes","pricing.auto14Text":"150 solicitudes de IA al mes (suficiente para práctica casi diaria)","pricing.auto15Text":"Informes de desempeño detallados después de cada entrevista","pricing.auto16Text":"Planes de desarrollo profesional personalizados","pricing.auto17Text":"Portafolio + revisión académica","pricing.auto18Text":"Transcripción de audio en todos los idiomas disponibles","pricing.auto19Text":"Soporte técnico prioritario","pricing.auto20Text":"Suscribirse al plan Profesional","pricing.auto21Text":"Mejor valor","pricing.auto22Text":"Élite","pricing.auto23Text":"/ mes","pricing.auto24Text":"Solicitudes de IA totalmente ilimitadas, sin ningún límite mensual","pricing.auto25Text":"Todas las herramientas de la plataforma sin excepción","pricing.auto26Text":"Respuesta con máxima prioridad del equipo de soporte","pricing.auto27Text":"Suscribirse al plan Élite","pricing.auto28Text":"Anual","pricing.auto29Text":"/ año","pricing.auto30Text":"Todas las funciones Profesionales (150 solicitudes al mes durante todo el año)","pricing.auto31Text":"Ahorra aproximadamente dos meses en comparación con la suscripción mensual","pricing.auto32Text":"Una consultoría de desarrollo profesional al año","pricing.auto33Text":"Suscribirse al plan Anual","pricing.auto34Text":"Cerrar","cvBuildModal.auto1Text":"Vincular los datos del CV a la entrevista","cvBuildModal.auto2Text":"Pega el texto de tu experiencia para que las preguntas se adapten a ella:","cvBuildModal.auto3Text":"Guardar","cvBuildModal.auto4Text":"Cancelar","reportModal.auto1Text":"Informe de desempeño detallado","termsGate.auto1Text":"Antes de empezar","termsGate.auto2Text":"He leído y acepto los Términos de uso y la Política de privacidad.","termsGate.termsGateContinueText":"Continuar","paymentRequest.auto1Text":"Completar suscripción","paymentRequest.auto3Text":"Transfiere el importe del plan por Vodafone Cash o InstaPay al número:","paymentRequest.auto5Text":"Después de transferir, completa tus datos abajo y envía la solicitud — el plan se activará manualmente en tu cuenta en unas horas tras revisar la transferencia.","paymentRequest.prSubmitBtnText":"Transferencia realizada, enviar solicitud","cancelSub.auto1Text":"La renovación automática simplemente se detendrá - seguirás disfrutando normalmente de todos los beneficios de tu plan actual hasta el último día de este período, después del cual volverás automáticamente al plan gratuito. Puedes deshacer la cancelación en cualquier momento antes de que termine el período.","cancelSub.auto2Text":"Deshacer","cancelSub.cancelSubConfirmBtnText":"Confirmar cancelación","videoMock.videoMockTopicPh":"El puesto o tema (ej.: servicio al cliente)","videoMock.videoEmailRolePh":"El puesto al que aplicas (ej.: contador)","videoMock.videoEmailReplyPh":"Escribe aquí tu respuesta al correo...","videoMock.videoSalaryQRolePh":"El puesto (opcional si ya está escrito arriba)","salary.salaryRolePh":"Puesto de trabajo (ej.: Diseñador gráfico)","salary.salaryExperiencePh":"Años de experiencia (ej.: 3 años)","match.cvMatchResumePh":"Pega aquí el texto de tu currículum, o haz clic en 'Vincular CV' arriba...","match.cvMatchJobdescPh":"Pega aquí el texto de la oferta de empleo...","cover.coverCvExtractPh":"Los datos extraídos de la imagen del CV aparecerán aquí, y puedes editarlos antes de continuar","cover.coverRolePh":"Puesto al que aplicas","cover.coverCompanyPh":"Nombre de la empresa (opcional)","cover.coverNotesPh":"Uno o dos puntos clave que quieras destacar (experiencia, logro, por qué te interesa la empresa...) - opcional","support.fbContactPh":"Número de teléfono o correo de contacto (opcional)","support.fbMessagePh":"Escribe tu mensaje aquí...","cvBuildModal.cvTextInputPh":"Escribe aquí el texto de tu experiencia...","paymentRequest.prNamePh":"Nombre","paymentRequest.prPhonePh":"El número de móvil desde el que transferiste","paymentRequest.prRefPh":"Últimos dígitos de la operación o una nota (opcional)","common.themeToggleBtnTitle":"Cambiar al modo claro","assistant.assistantGenderToggleBtnTitle":"Voz de respuesta: Hombre","common.themeToggleBtnAria":"Cambiar al modo claro","tr.transcribeMicBtnAria":"Grabación de voz para transcripción","pitch.auto9Aria":"Detener la lectura en voz alta","profile.auto1Aria":"Cambiar foto de perfil","profile.profilePhotoInputAria":"Subir foto de perfil","profile.profileNameAria":"Tu nombre completo","profile.profileTitleAria":"Puesto de trabajo","donations.auto1Aria":"Copiar el número","donations.auto2Aria":"Copiar el número","donations.auto3Aria":"Copiar el número","pwaIosModal.auto1Aria":"Cerrar","pricing.auto1Aria":"Atrás","reportModal.auto2Aria":"Cerrar","paymentRequest.auto2Aria":"Cerrar","paymentRequest.auto4Aria":"Copiar el número","profile.profilePhotoPreviewAlt":"Foto de perfil","profile.signedinAvatarImgAlt":"Foto de la cuenta"
        },
        tr: {
            "nav.searchPh":"Araç ara...","nav.searchEmpty":"Eşleşen araç yok","nav.section.interviews":"Mülakatlar ve İşe Alım","nav.interview":"Sesli Deneme Mülakatı","nav.faq":"SSS + Örnek Cevaplar","nav.career":"Kariyer Gelişim Planı","nav.section.documents":"Belgeler","nav.cv":"CV Oluşturucu","nav.portfolio":"Kişisel Portfolyo","nav.writing":"Akademik Yazı Denetimi","nav.summarizer":"Belge Özetleyici","nav.section.audio":"Ses ve Video","nav.transcribe":"Sesi Metne Dönüştürme","nav.pitch":"30 Saniyelik Tanıtım","nav.section.account":"Hesap ve Destek","nav.about":"Hakkımızda","nav.history":"Birleşik Geçmiş","nav.profile":"Profil","nav.subscriptions":"Abonelikler","nav.donations":"Bağışlar","nav.support":"Destek ve İletişim","nav.section.legal":"Yasal","nav.terms":"Kullanım Şartları","nav.privacy":"Gizlilik Politikası","nav.section.ai":"Yapay Zeka","nav.videoMock":"Video Mülakat Simülatörü","nav.salary":"Beklenen Maaş Tahmini","nav.progress":"İlerleme Takibi","nav.match":"CV-İş Eşleştirme","nav.cover":"İş Mektubu Oluşturucu","nav.closeMenu":"Menüyü kapat","nav.clearSearch":"Aramayı temizle","nav.openMenu":"Menüyü aç","pwa.title":"YUSR Pro'yu uygulama olarak indirin","pwa.desc":"Ana ekranınızda, normal bir uygulama gibi açılan bir simge","pwa.installBtn":"Uygulamayı Yükle","pwa.hideAria":"Yükleme önerisini gizle","hide":"Gizle","apk.title":"Android uygulamamızı deneyin 📱","apk.desc":"Tarayıcıdan daha hızlı ve kolay — doğrudan buradan indirin","apk.hideAria":"Uygulama önerisini gizle","apk.downloadBtn":"YUSR Pro uygulamasını şimdi indirin","trial.headerTitle":"Bu ay kalan ücretsiz denemeler","support.techLabel":"Teknik Destek","account.guest":"Misafir (bu cihaz)","account.signinHint":"Fotoğrafını ve puanlarını kaydetmek için Google ile giriş yap","authgate.title":"Giriş yap","authgate.subtitle":"Şu anda misafir olarak giremiyorsan (genellikle bağlantı sorunu), Google veya e-postanla giriş yap.","authgate.googleBtn":"Google ile Giriş Yap","authgate.orEmail":"veya e-posta ile","authgate.tabLogin":"Giriş yap","authgate.tabSignup":"Hesap oluştur","authgate.namePh":"Ad Soyad","authgate.emailPh":"E-posta","authgate.passwordPh":"Şifre","authgate.confirmPh":"Şifreyi onayla","authgate.submitLogin":"Giriş yap","authgate.submitSignup":"Hesap oluştur","authgate.privacyNote":"Verilerin güvenli şekilde saklanır, şifren şifrelenir — biz bile göremeyiz.","authgate.recaptchaNote":"Bu site reCAPTCHA ile korunmaktadır; Google <a href=\"https://policies.google.com/privacy\" target=\"_blank\" rel=\"noopener\" style=\"color:inherit;text-decoration:underline;\">Gizlilik Politikası</a> ve <a href=\"https://policies.google.com/terms\" target=\"_blank\" rel=\"noopener\" style=\"color:inherit;text-decoration:underline;\">Hizmet Şartları</a> geçerlidir.","trial.left":"Kalan deneme hakkı","trial.upgrade":"Tam pakete yükselt","trial.warningLow":"Bu ay sadece {n} ücretsiz deneme hakkın kaldı!","trial.warningLast":"Bu, bu ayki son ücretsiz deneme hakkın!","copy":"Kopyala","download":"İndir","interview.desc":"Sonunda ayrıntılı performans değerlendirmesiyle gerçek bir sözlü mülakatı deneyimle.","interview.linkCv":"CV'yi Bağla","interview.roleLabel":"Hedef pozisyon","interview.rolePh":"örn: emlak satışı, müşteri hizmetleri, yazılım...","interview.personaLabel":"Mülakatçı kişiliği","interview.start":"Oturumu Başlat","interview.speaking":"Mülakatçı konuşuyor...","interview.inputPh":"Mikrofona konuş veya buraya yaz...","interview.reportHint":"Değerlendirme, yazılı cevaplarını, mikrofon kullandıysan konuşma hızını ve dolgu kelimeleri analiz eder.","faq.desc":"Pozisyonu ve alanı yaz, ikna edici örnek cevaplarla gerçek bir sık sorulan sorular bankası hazırlayalım.","faq.rolePh":"örn: emlak satış sorumlusu","faq.run":"Soru ve Cevapları Oluştur","career.desc":"Mevcut durumunu ve hedefini söyle, gerçekçi adımlarla pratik bir gelişim planı oluşturalım.","career.currentLabel":"Mevcut durumun","career.currentPh":"örn: 1. yıl muhasebeci","career.targetLabel":"Hedefin","career.targetPh":"örn: veri analitiğine geçmek istiyorum","career.contextPh":"Faydalı ek bilgiler - isteğe bağlı","career.run":"Planımı Oluştur","cv.notice":"Bu araç, LinkedIn gibi tasarlanmış bir PDF değil, kopyalamaya hazır profesyonel CV metin içeriği oluşturur.","cv.photoHint":"İsteğe bağlı fotoğraf (yalnızca tarayıcında saklanır).","cv.namePh":"Ad Soyad","cv.titlePh":"Hedef pozisyon","cv.expPh":"İş deneyimin","cv.eduPh":"Eğitim ve sertifikalar","cv.skillsPh":"Beceriler (virgülle ayır)","cv.run":"CV'mi Yaz","pf.notice":"Yapay zeka, kişiselleştirilmiş bir portfolyo içeriği hazırlamak için alanın ve projelerin hakkında birkaç basit soru soracak.","pf.fieldPh":"Alanın (tasarımcı, geliştirici, pazarlamacı...)","pf.start":"Başla - yapay zeka bana sorsun","pf.inputPh":"Cevabını buraya yaz...","pf.generate":"Yeterli soru - portfolyoyu şimdi oluştur","writing.notice":"Kendinin Word'de uygulayacağın metinsel öneriler şeklinde dilbilgisi incelemesi ve akademik biçimlendirme önerileri.","writing.topicPh":"Araştırma konusu (isteğe bağlı)","writing.inputPh":"Araştırma veya makale metnini buraya yapıştır...","writing.run":"Metni İncele","sum.desc":"Herhangi bir raporu, makaleyi veya dersi saniyeler içinde özetle.","sum.inputPh":"Metni buraya yapıştır...","sum.run":"Şimdi Özetle","tr.notice":"Yapay zekayla otomatik olarak yazıya dökülmesi için hazır bir ses dosyası yükleyebilir, doğrudan mikrofonla kayıt yapabilir veya hazır bir metni yapıştırabilirsin.","tr.uploadBtn":"Ses dosyası yükle ve otomatik yazıya dök","tr.uploadHint":"Henüz dosya yüklenmedi","tr.sourceLangLabel":"Kaynak konuşma dili","tr.targetLangLabel":"Son metni şu dile çevir (isteğe bağlı)","tr.micHint":"Kayıt için bas, yukarıdan dosya yükle veya aşağıya hazır metin yapıştır.","tr.rawPh":"Ham metin burada görünecek...","tr.run":"Temizle ve Biçimlendir","pitch.notice":"Kayıtlı CV ve profilinize bağlı, yaklaşık 30 saniyelik profesyonel bir kendini tanıtma metni hazırlayın.","pitch.purposeLabel":"Nerede kullanacaksın?","pitch.toneLabel":"Konuşma tarzı","pitch.rolePh":"Hedef pozisyon veya alan","pitch.highlightPh":"Öne çıkarmak istediğin bir iki nokta - isteğe bağlı","pitch.run":"30 Saniyelik Tanıtımı Oluştur","profile.points":"puan","profile.namePh":"Ad Soyad","profile.titlePh":"Meslek unvanı","profile.googleBtn":"Google ile Giriş Yap","profile.googleHint":"Giriş yapmak, adını, fotoğrafını ve puanlarını bu cihazda kaydeder — ücretsiz denemeler hesaba göre değil cihaza göre sayılır.","profile.save":"Bilgileri Kaydet","profile.connected":"Google ile Bağlı","profile.logoutBtn":"Çıkış Yap","profile.statUsage":"Araç kullanım sayısı","profile.statDevice":"Cihaz Kimliği","profile.statPlan":"Mevcut paketin","profile.planFree":"Ücretsiz","subs.individualTitle":"Bireysel Paketler","subs.individualDesc":"Mülakata hazırlanan veya kendi kariyerini inşa eden herkes için.","subs.basicName":"Temel","subs.perMonth":"/ ay","subs.proName":"Profesyonel","subs.eliteName":"Elit","subs.popular":"En Çok Tercih Edilen","subs.bestValue":"En İyi Değer","subs.yearlyName":"Yıllık","subs.perYear":"/ yıl","subs.subscribe":"Şimdi Abone Ol","subs.teamTitle":"Ekip ve Üniversite Paketleri","subs.teamDesc":"Bir grubu daha uygun fiyata birlikte eğitmek isteyen fakülteler, üniversiteler ve işe alım merkezleri için.","subs.teamSmallName":"Küçük Ekip","subs.teamSmallRange":"10 kişiye kadar","subs.perSeat":"/ kişi başı / ay","subs.recommended":"Üniversiteler için önerilir","subs.teamMedName":"Grup / Fakülte","subs.teamMedRange":"11 ila 100 kişi","subs.uniName":"Üniversite / Büyük Kurum","subs.uniRange":"100 kişiden fazla","subs.customPrice":"Özel fiyatlandırma","subs.contactUs":"Bize Ulaşın","don.title":"Platformun Sürekliliğini Destekle","don.desc":"YUSR Pro'nun gelişimini desteklemek istersen, aşağıdaki numaralar üzerinden istediğin miktarda bağış yapabilirsin.","don.wallet":"Elektronik Cüzdan","don.thanks":"Bizi destekleyen herkese çok teşekkür ederiz.","sup.title":"Destek ve İletişim","sup.desc":"Bir sorun, sorunun veya önerin mi var? Bizimle doğrudan iletişime geç.","sup.phone":"Doğrudan Arama","sup.hours":"Genellikle birkaç saat içinde yanıt veriyoruz. Acil konularda en hızlısı WhatsApp'tır.","legal.lastUpdated":"Son güncelleme: Ağustos 2026","history.pageTitle":"Birleşik Geçmiş","history.subtitle":"Sitedeki herhangi bir araçtan (özetler, incelemeler, mektuplar ve daha fazlası) son 20 sonuç, sayfayı kapatsanız bile kaybolmasın diye burada otomatik olarak saklanır.","history.listTitle":"Kayıtlı Sonuçlar","history.clearAll":"Tümünü Temizle","history.empty":"Henüz kayıtlı sonuç yok. Sitedeki araçlardan alınan her sonuç otomatik olarak burada görünecek.","onboarding.title":"YUSR Pro'ya hoş geldin 👋","onboarding.subtitle":"Doğru başlamak için 3 hızlı adım:","onboarding.step1.title":"Profilini tamamla","onboarding.step1.desc":"CV ve mülakat gibi diğer araçlar bu bilgileri kullanır.","onboarding.step2.title":"Deneme mülakatı yap","onboarding.step2.desc":"Gerçek sorularla sesli pratik yap ve anında geri bildirim al.","onboarding.step3.title":"CV'ni oluştur","onboarding.step3.desc":"Kayıtlı bilgilerinden dakikalar içinde profesyonel bir CV oluşturacağız.","onboarding.tip":"İpucu: Kenar menünün üstündeki arama kutusuyla 20'den fazla araçtan istediğine hızlıca ulaşabilirsin.","onboarding.skip":"Atla, kendim keşfedeceğim","about.pageTitle":"Hakkımızda","about.tagline":"Kariyer yolculuğunda yol arkadaşın olması için tutkuyla inşa ettiğimiz bir Arapça platform.","about.missionLabel":"Misyonumuz","about.missionBody":"Geçmişi veya koşulları ne olursa olsun herkesin kendine güvenerek ve iyi hazırlanmış olarak doğru fırsata ulaşmayı hak ettiğine inanıyoruz. \"YUSR Pro\" basit bir fikirden doğdu: iyi bir mülakat hazırlığı veya güçlü bir CV, zamanı, parası veya bağlantısı olanların ayrıcalığı olmamalı — yapay zeka artık bu kaliteyi herkesin her an ulaşabileceği hale getirebiliyor.","about.pillarsTitle":"Bizi Ne Yönlendiriyor","about.pillar1Title":"Gerçek Yardım","about.pillar1Body":"Sadece araçlar değil; iş arayanların karşılaştığı gerçek bir sorunu çözmek için her özelliği tasarlıyoruz.","about.pillar2Title":"Sürekli Gelişim","about.pillar2Body":"Önerilerinizi dinliyor, sürekli ekleme ve iyileştirme yapıyoruz — platform sizinle birlikte adım adım büyüyor.","about.pillar3Title":"Hizmetinizdeki Yapay Zeka","about.pillar3Body":"Size yüksek kaliteli, kişiselleştirilmiş bir hazırlık deneyimi sunmak için en son yapay zeka teknolojilerinden faydalanıyoruz.","about.pillar4Title":"Önce Gizliliğiniz","about.pillar4Body":"Verileriniz size aittir; onları yalnızca size hizmet sunmak için kullanır veya paylaşırız.","about.whyTitle":"Neden YUSR Pro?","about.why1":"Tamamen Arapça tasarlanmış ve lehçenizi anlayan bir deneyim.","about.why2":"Mülakattan CV'ye, portfolyoya kadar ihtiyacın olan her araç tek bir yerde.","about.why3":"Genel övgüler değil, gelişmene yardımcı olan dürüst ve gerçekçi geri bildirim.","about.why4":"Kullanıcılarımızın gerçek ihtiyaçlarına göre platformu geliştirmeye devam ediyoruz.","about.closing":"YUSR'yi daha iyi yapacak bir fikrin veya önerin mi var? Duymak isteriz.","about.contactUs":"Bize Ulaşın","terms.pageTitle":"Kullanım Şartları","terms.betaNotice":"Platform hâlâ Beta aşamasındadır. \"Abonelikler\" sayfası şu anda deneme paketlerini ve fiyatlarını göstermektedir; herhangi bir karttan veya hesaptan gerçek bir kesinti yapılmamaktadır — gerçek ödeme etkinleştirildiğinde uygulamada açıkça duyuracağız.","terms.s1.title":"1. Şartların Kabulü","terms.s1.body":"\"YUSR Pro\" platformunu kullanarak bu şartları kabul etmiş olursunuz.","terms.s2.title":"2. Hizmetin Niteliği","terms.s2.body":"YUSR, iş arayanları hazırlamak için yapay zeka destekli bir platformdur: sesli deneme mülakatları, CV ve portfolyo oluşturma, akademik yazı denetimi, belge özetleme ve sesi yazıya dökme. Yanıtlar ve öneriler yapay zeka tarafından üretilir ve yalnızca yol gösterici niteliktedir, herhangi bir sonucun veya işe alımın garantisi değildir.","terms.s3.title":"3. Hesap ve İzin Verilen Kullanım","terms.s3.body":"Platformu misafir olarak (otomatik anonim kimlikle) veya verilerini kaydetmek için bir Google hesabıyla giriş yaparak kullanabilirsin. Hesabından yapılan her türlü faaliyetten sorumlusun. Yasak olanlar: adil kullanım sınırlarını aşmaya çalışmak, yoğun otomatik istekler (bot) göndermek veya sistemin izin verilmeyen herhangi bir bölümüne erişmeye çalışmak.","terms.s4.title":"4. Adil Kullanım Sınırları","terms.s4.body":"Hizmetin herkes için sürekliliğini sağlamak amacıyla yapay zeka araçlarının (sohbet, ses yazıya dökme, metinden sese) günlük ve aylık kullanım üst sınırı vardır. Sınıra ulaştığında, yenilenmesini beklemen gerekir.","terms.s5.title":"5. İçeriğin","terms.s5.body":"Yazdığın veya yüklediğin herhangi bir içerik (CV verileri, portfolyo, ses kayıtları) senin mülkiyetinde kalır. Bunu yalnızca sana hizmet sunmak için işleriz, başka hiçbir amaçla kullanmaz veya satmayız.","terms.s6.title":"6. Sorumluluk Reddi","terms.s6.body":"Hizmet herhangi bir garanti olmaksızın \"olduğu gibi\" sunulur. Yapay zeka çıktılarına dayanarak aldığın herhangi bir kariyer veya meslekî karardan sorumlu değiliz ve kullanmadan önce önemli her içeriği kendinin gözden geçirmesini her zaman öneririz.","terms.s7.title":"7. Değişiklikler","terms.s7.body":"Bu şartları zaman zaman değiştirebilir ve yukarıdaki \"Son güncelleme\" tarihini güncelleyebiliriz. Bir değişiklikten sonra platformu kullanmaya devam etmen, yeni sürümü kabul ettiğin anlamına gelir.","terms.s8.title":"8. İletişim","terms.s8.body":"Bu şartlarla ilgili herhangi bir sorun için \"Destek ve İletişim\" sayfasından bize ulaş.","privacy.pageTitle":"Gizlilik Politikası","privacy.s1.title":"1. Verileri Kim Topluyor","privacy.s1.body":"\"YUSR Pro\" platformu, verilerinizi tek bir amaçla toplayan ve işleyen taraftır: kullandığınız hizmeti sunmak.","privacy.s2.title":"2. Topladığımız Veriler","privacy.s2.li1":"<b class=\"text-slate-200\">Hesap verileri:</b> Google ile giriş yaparsan, adını, fotoğrafını ve e-postanı doğrudan Google'dan alırız. Misafir olarak girersen, seni diğer kullanıcılardan ayırt etmek için yalnızca anonim bir kimlik veririz.","privacy.s2.li2":"<b class=\"text-slate-200\">Kullandığın içerik:</b> CV verileri, portfolyo, yazdığın veya özetlediğin metinler ve mülakat ya da sesi yazıya dökme araçlarına yüklediğin ses kayıtları.","privacy.s2.li3":"<b class=\"text-slate-200\">Teknik kullanım verileri:</b> her aracı kaç kez kullandığın (adil kullanım sınırlarını uygulamak için), cihazında yerel olarak (localStorage) saklanan \"kalan deneme sayısı\" gibi veriler.","privacy.s3.title":"3. Verilerini Nasıl Kullanıyoruz","privacy.s3.body":"Verilerini yalnızca şu amaçlarla kullanırız: (a) yapay zeka araçlarını çalıştırmak (yüklediğin metni veya sesi yanıt üretmesi için uzman işleme şirketlerine göndeririz, anahtarlarını veya giriş bilgilerini onlarda saklamadan), (b) geri döndüğünde profilinin orada olması için kaydetmek, (c) hizmeti iyileştirmek ve kötüye kullanımı önlemek.","privacy.s4.title":"4. Verilerini Kim Görüyor (Üçüncü Taraflar)","privacy.s4.li1":"<b class=\"text-slate-200\">Google Firebase:</b> giriş için ve profilinin güvenli şekilde saklanması için.","privacy.s4.li2":"<b class=\"text-slate-200\">AI Processing Service:</b> sohbet ve yazıya dökme araçlarında metin ve ses işleme için.","privacy.s4.li3":"<b class=\"text-slate-200\">Text-to-Speech Service:</b> metni sese dönüştürme için.","privacy.s4.li4":"<b class=\"text-slate-200\">Cloudflare:</b> uygulaman ile yapay zeka hizmetleri arasında, verilerini saklamadan güvenli bir teknik aracı olarak.","privacy.s4.li5":"<b class=\"text-slate-200\">Web Search Service:</b> yalnızca maaş tahmini aracında canlı web araması için.","privacy.s4.note":"Verilerini asla kimseye satmayız ve reklam amacıyla asla paylaşmayız.","privacy.s5.title":"5. Veri Güvenliği","privacy.s5.body":"Verilerin, her kullanıcının yalnızca kendi verilerini görmesini sağlayan Güvenlik Kuralları ile korunur ve uygulaman ile sunucu arasındaki tüm iletişim şifrelenir (HTTPS).","privacy.s6.title":"6. Haklarınız","privacy.s6.body":"\"Destek ve İletişim\" sayfasından bize ulaşarak istediğin zaman kayıtlı verilerini görüntülemeyi, düzenlemeyi veya tamamen silinmesini talep edebilirsin.","privacy.s7.title":"7. Çocuklar","privacy.s7.body":"Hizmet 13 yaşın altındaki kişilere yönelik değildir ve bu yaş grubundan bilerek veri toplamıyoruz.","privacy.s8.title":"8. Bu Politikadaki Değişiklikler","privacy.s8.body":"Bu politikayı zaman zaman güncelleyebiliriz ve önemli bir değişiklik yaptığımızda yukarıdaki \"Son güncelleme\" tarihini değiştireceğiz.","assistant.botName":"Yusr Pro Bot","assistant.subtitle":"Yazarak veya sesle konuş, görmesi gereken bir şey varsa fotoğraf gönder","assistant.inputPh":"Sorunu buraya yaz...","assistant.attachImageTitle":"Fotoğraf ekle","assistant.micTitle":"Sesli kayıt","assistant.voiceToggleTitle":"Yanıt seslerini aç/kapat","assistant.newChatTitle":"Yeni bir sohbet başlat","assistant.removeImageTitle":"Görseli kaldır","assistant.imageAlt":"Eklenen görsel","assistant.providerHint":"Birden fazla yapay zeka sağlayıcısı tarafından destekleniyor — biri meşgulse, siz fark etmeden otomatik olarak diğerine geçer.","assistant.emptyHint":"{bot} ile yazarak ya da sesle konuş, ya da görmesi ve yorum yapması için bir görsel gönder.","assistant.defaultImageQuestion":"Bu görseli tarif et ve içinde ne olduğunu ayrıntılı anlat.","interview.resumeBefore":"Devam eden bir mülakat oturumu var (","interview.resumeAfter":"). Devam etmek mi yoksa yeni bir oturum mu başlatmak istersiniz?","interview.resume":"Devam et","interview.startNew":"Yeni başlat","interview.voiceLabel":"Görüşmecinin sesi","interview.voiceMale":"Erkek ses","interview.voiceFemale":"Kadın ses","interview.personaArLabel":"Seçkin Arapça","interview.personaEnLabel":"Seçkin İngilizce","interview.screenshot":"Konuşmayı ekran görüntüsü al","interview.endTitle":"Mülakatı kalıcı olarak sonlandır ve arşive kaydet","interview.endBtn":"Mülakatı bitir","interview.endHint":"Mülakatı bitirmek kesindir — bu oturuma daha sonra devam edilemez. Farklı bir dil veya görüşmeci isterseniz yeni bir mülakat başlatın.","interview.stop":"Durdur","interview.micTitle":"Sesinizle konuşun","interview.sendAria":"Cevabı gönder","interview.evalTitle":"Performans değerlendirmesi","cv.tabPlain":"Sade özgeçmiş (fotoğrafsız)","cv.tabLinkedin":"LinkedIn tarzı (fotoğraflı)","cv.plainNotice":"Hiç fotoğraf içermeyen düz metin özgeçmiş — doğrudan Word'e veya başka bir yere kopyalanmaya hazır profesyonel metin.","cv.runPlain":"Sade özgeçmişi oluştur","cv.liNotice":"LinkedIn tarzı bir sürüm: üstte profil fotoğrafı, ardından tıpkı LinkedIn'deki gibi iletişim bilgileri listesi, sonra özgeçmiş içeriği.","cv.liPhotoAlt":"Özgeçmiş fotoğrafı","cv.liPhotoHint":"Fotoğrafınız yalnızca tarayıcınızda saklanır ve hiçbir yere gönderilmez.","cv.contactInfo":"İletişim bilgileri","cv.phonePh":"Telefon numarası","cv.emailPh":"E-posta adresi","cv.linkedinPh":"LinkedIn bağlantısı veya profesyonel profil","cv.locationPh":"Şehir / Ülke","cv.runLinkedin":"LinkedIn tarzı özgeçmişi oluştur","cv.exportFooter":"YUSR platformu aracılığıyla oluşturuldu","pf.screenshot":"Ekran görüntüsü","pf.sendAria":"Gönder","common.auto2Text":"العربية","common.auto3Text":"اردو","common.auto4Text":"فارسی","common.emailVerifyResendBtnText":"Tekrar Gönder","common.emailVerifyRecheckBtnText":"Doğruladım, durumu yenile","faq.auto1Text":"8 soru","faq.auto2Text":"12 soru","faq.auto3Text":"18 soru","faq.auto4Text":"Yeni mezun / bir yıldan az deneyim","faq.auto5Text":"Orta seviye (Mid-level)","faq.auto6Text":"Kıdemli / geniş deneyim","faq.auto7Text":"Yönetici / liderlik seviyesi (Manager+)","career.auto1Text":"Plan uzunluğu","career.auto2Text":"Tam ayrıntılı plan (tüm adımlar ve detaylar)","career.auto3Text":"Hızlı ve net özet (sadece ana noktalar, uzatmadan)","videoMock.auto1Text":"Kamera karşısında söyleyeceğim bir şey hazırla","videoMock.auto2Text":"Kamerayı açıp ne söyleyeceğini karıştırmak yerine bir mod seç; cevaplaman için belirli bir soru ya da net okumayı pratik edeceğin hazır bir metin alacaksın — sonra kendini cevap verirken kaydet.","videoMock.auto3Text":"Sesli olarak cevaplayacağım bir mülakat sorusu","videoMock.auto4Text":"Net okumayı pratik edeceğim hazır bir metin","videoMock.auto5Text":"Bana bir tane daha hazırla","videoMock.auto6Text":"Kamera karşısında pratik yap","videoMock.videoMockStatusText":"\"Kamerayı Başlat\"a bas, tarayıcın kamera ve mikrofon izni isteyecek — sonra bir klip kaydedip incelemek için indirebilirsin.","videoMock.auto7Text":"Mülakat randevu e-postası simülasyonu","videoMock.auto8Text":"Bir \"işe alım uzmanından\" senden bir tarih/yer veya çevrimiçi mülakat bağlantısını onaylamanı, bazen de maaş beklentini isteyen gerçekçi bir e-posta oluşturulacak — profesyonelce cevap vermeyi pratik et.","videoMock.auto9Text":"Tarih ve yer onayı (yüz yüze)","videoMock.auto10Text":"Çevrimiçi mülakat randevusunu onaylama","videoMock.auto11Text":"Maaş beklentisi sorusu","videoMock.auto12Text":"Ani randevu çakışması/değişikliği","videoMock.auto13Text":"Acil e-posta (bir gün içinde yanıt)","videoMock.auto14Text":"Çok resmi ton","videoMock.auto15Text":"Samimi ve rahat ton","videoMock.auto16Text":"Acil ve zaman baskılı ton","videoMock.auto17Text":"Pozisyonun maaşına uygun takip soruları","videoMock.auto18Text":"Mülakata uygun kıyafet ve görünüm ipuçları","videoMock.auto19Text":"Resmi ofis ortamı (bankalar/büyük şirketler)","videoMock.auto20Text":"Startup / genç, samimi ortam","videoMock.auto21Text":"Müşterilerle doğrudan iletişim","videoMock.auto22Text":"Yaratıcı alan","videoMock.auto23Text":"Çevrimiçi mülakat (video görüşme)","videoMock.auto24Text":"Muhafazakâr Körfez iş ortamı","videoMock.auto25Text":"Erkekler ve kadınlar için ipuçları","videoMock.auto26Text":"Sadece erkekler için ipuçları","videoMock.auto27Text":"Sadece kadınlar için ipuçları","salary.auto1Text":"Araç, \"Tahmin Et\"e bastığın anda iş piyasası için canlı web sonuçları arar ve tahmini bunun üzerine yapay zekâ bilgisiyle inşa eder — resmi veri veya %100 kesin bir piyasa araştırması değildir — bunu pazarlık için bir başlangıç noktası olarak kullan, kesin bir rakam olarak değil.","salary.auto2Text":"Mısır","salary.auto3Text":"Suudi Arabistan","salary.auto4Text":"Birleşik Arap Emirlikleri","salary.auto5Text":"Genel olarak Körfez ülkeleri","salary.auto6Text":"Yabancı şirketler için uzaktan (Remote)","progress.auto1Text":"Mülakat arşivin: her mülakat ayrı kalmak yerine, tek bir sayfa \"Sesli Deneme Mülakatı\"ndan tüm mülakatlarını, metinlerini ve performans raporlarını bir araya getirir ve zaman içindeki gelişimini gösterir.","progress.auto2Text":"Yaklaşan bir mülakat için hatırlatma","progress.auto3Text":"Hatırlatmayı kaydet","progress.progressReminderEnableBtnText":"Gerçek tarayıcı push bildirimini etkinleştir","progress.progressReminderStatusText":"Saati belirlersen, mülakat saatinde tam olarak (yaklaşık 5 dakika farkla) bir bildirim alırsın, ayrıca iki gün önceden bir hatırlatma da alırsın. Bildirim iznini verdiğin ve tarayıcı çalıştığı sürece (sekme önünde olmasan bile) — yine de tarayıcının açık olması gerekir, tamamen kapalıyken sana ulaşmaz.","progress.auto4Text":"Önceki oturumların kaydı","progress.auto5Text":"İki oturumu karşılaştır","match.auto1Text":"İş ilanını ve CV'ni yapıştır, sana yaklaşık bir uyum yüzdesi, belirli zayıf noktalar ve ATS filtrelerini geçmene yardımcı olacak eksik anahtar kelimeler verelim.","match.auto2Text":"CV'niz","match.auto3Text":"Kayıtlı CV'yi kullan","match.auto4Text":"İş ilanı","cover.auto1Text":"Resmi iş arama yazışmalarına özel: CV ile birlikte gönderilen bir ön yazı, mülakat sonrası teşekkür notu veya maaş teklifine yanıt.","cover.auto2Text":"Mevcut bir CV'den veri içe aktar (isteğe bağlı)","cover.auto3Text":"CV'ni kamerayla fotoğrafla ya da bir görsel/ekran görüntüsü yükle; yapay zekâ onu okuyup mektubu oluşturmak için önemli verileri çıkaracak.","cover.auto4Text":"CV görselini yükle","cover.auto5Text":"CV'yi şimdi fotoğrafla","cover.auto6Text":"CV ile birlikte gönderilen ön yazı","cover.auto7Text":"Mülakat sonrası teşekkür ve takip notu","cover.auto8Text":"Maaş teklifine yanıt / maaş pazarlığı","writing.auto1Text":"Yazım ve dil bilgisi denetimi","writing.auto2Text":"Akademik biçimlendirme (APA)","writing.auto3Text":"Akademik biçimlendirme (Harvard)","summarizer.auto1Text":"Çok kısa özet (hızlı anlayış)","summarizer.auto2Text":"Madde işaretli noktalar","summarizer.auto3Text":"Tek paragraf","summarizer.auto4Text":"Başlıklarla düzenlenmiş ayrıntılı özet","tr.auto1Text":"🔎 Dili otomatik algıla","tr.auto2Text":"العربية","tr.auto3Text":"اردو","tr.auto4Text":"فارسی","tr.auto5Text":"Çeviri yok - aynı dil","tr.auto6Text":"العربية","pitch.auto1Text":"Yüz yüze mülakat açılışı","pitch.auto2Text":"Tanıtım videosu (LinkedIn / portfolyo)","pitch.auto3Text":"Bir şirketle soğuk temas (networking)","pitch.auto4Text":"Telefon görüşmesi başlangıcı / ani bir fırsat","pitch.auto5Text":"Resmi, sakin ve profesyonel","pitch.auto6Text":"Coşkulu ve enerjik","pitch.auto7Text":"Basit, dostane, samimi","pitch.auto8Text":"Metni dinle ve süresini ölç","pitch.auto10Text":"Önce CV'ni oluştur","pitch.auto11Text":"Sesli mülakatla pratik yap","profile.auto2Text":"Değiştir","profile.auto3Text":"CV","profile.auto4Text":"Portfolyo","profile.auto5Text":"İlerleme Takibi","profile.auto6Text":"Paketler","profile.profileStatPrivacyText":"Güvenli","profile.auto7Text":"Hesap durumun","profile.auto8Text":"Giriş hesabı","profile.auto9Text":"Hesabına genel bakış","profile.auto10Text":"Mevcut paketin","profile.auto11Text":"Abonelik/satın alma sayısı","profile.auto12Text":"Abonelik ve satın alma geçmişi","profile.auto13Text":"Bir pakete abone ol","profile.auto14Text":"Paketinin otomatik yenilenmesi durduruldu; mevcut dönemin son gününe kadar normal şekilde yararlanmaya devam edeceksin.","profile.auto15Text":"İptali geri al","profile.auto16Text":"Mevcut paketine devam etmek istemiyor musun?","profile.cancelSubBtnText":"Aboneliği iptal et","profile.auto17Text":"Gizlilik ve verilerin","profile.auto18Text":"Profil verilerin, antrenman geçmişin ve kullanım kaydın esas olarak cihazında (tarayıcıda) saklanır; Google ile giriş yaptıysan bir kopyası hesabınla senkronize edilir, böylece herhangi bir cihazdan bulabilirsin. CV fotoğrafları ve ses/video dosyaları yalnızca kullanım anında işlenmek üzere gönderilir ve sunucuda kalıcı olarak saklanmaz.","profile.auto19Text":"Şifreyi değiştir","profile.auto20Text":"Verilerimi yalnızca bu cihazdan sil","profile.auto21Text":"Tehlikeli bölge","profile.auto22Text":"Hesabını silmek, hesabını tarafımızdan kalıcı olarak siler: verilerin, aboneliklerin ve sunucudaki kullanım kaydın (yalnızca bu cihazda değil) - bu geri alınamaz, nihai bir işlemdir.","profile.deleteAccountBtnText":"Hesabımı kalıcı olarak sil","profile.auto23Text":"Üyeliğin","profile.auto24Text":"Toplam ödenen","profile.auto25Text":"Paketi yükselt","profile.auto26Text":"Hızlı ipuçları","profile.auto27Text":"Verilerini ve fotoğrafını tamamla ki CV ve portfolyon en iyi şekilde görünsün, ve ilerlemeni \"İlerleme Takibi\" sayfasından hassas biçimde takip edebilesin.","subscriptions.auto1Text":"EGP","subscriptions.auto2Text":"Ayda 25 yapay zekâ isteği","subscriptions.auto3Text":"CV oluşturma ve belge özetleme","subscriptions.auto4Text":"EGP","subscriptions.auto5Text":"Ayda 150 yapay zekâ isteği","subscriptions.auto6Text":"Ayrıntılı performans raporları","subscriptions.auto7Text":"Kurgu + tüm dillerde ses deşifresi","subscriptions.auto8Text":"EGP","subscriptions.auto9Text":"Tamamen sınırsız yapay zekâ istekleri","subscriptions.auto10Text":"İstisnasız tüm platform araçları","subscriptions.auto11Text":"EGP","subscriptions.auto12Text":"Tüm Profesyonel özellikleri","subscriptions.auto13Text":"İki ay ücretsiz","subscriptions.auto14Text":"EGP","subscriptions.auto15Text":"Profesyonel paketin tüm özellikleri","subscriptions.auto16Text":"Takım ilerleme takip panosu","subscriptions.auto17Text":"EGP","subscriptions.auto18Text":"Tüm öğrenciler için tüm Profesyonel özellikler","subscriptions.auto19Text":"Dönem sorumlusu için toplu rapor","subscriptions.auto20Text":"Ücretsiz tanıtım eğitim oturumu","subscriptions.auto21Text":"Tüm özellikler + tam özelleştirme","subscriptions.auto22Text":"Üniversite için özel hesap yöneticisi","support.auto1Text":"Bir öneri, şikayet ya da sorun mu var?","support.auto2Text":"Öneri","support.auto3Text":"Şikayet","support.auto4Text":"Soru","support.auto5Text":"Gönder","pwaIosModal.auto2Text":"iPhone'a uygulamayı yükle","pwaIosModal.auto3Text":"\"Ana Ekrana Ekle\" seçeneğini bulana kadar kaydır.","pwaIosModal.auto4Text":"Yukarıdaki \"Ekle\"ye dokun — ana ekranında normal bir uygulama gibi YUSR Pro simgesini bulacaksın.","pwaIosModal.auto5Text":"Tamam, anladım","pricing.auto2Text":"Paketini seç","pricing.auto3Text":"Platformun tüm araçları tek bir yerde - mülakatlar, CV, portfolyo, akademik düzeltme, ses deşifresi ve daha fazlası.","pricing.auto4Text":"Temel","pricing.auto5Text":"/ ay","pricing.auto6Text":"Ayda 25 yapay zekâ isteği (mülakatlar, CV, tüm araçlar)","pricing.auto7Text":"CV oluşturma ve belge özetleme","pricing.auto8Text":"Her iş için sıkça sorulan sorular","pricing.auto9Text":"Site sohbeti üzerinden destek","pricing.auto10Text":"Temel'e abone ol","pricing.auto11Text":"En Çok Tercih Edilen","pricing.auto12Text":"Profesyonel","pricing.auto13Text":"/ ay","pricing.auto14Text":"Ayda 150 yapay zekâ isteği (neredeyse günlük pratik için yeterli)","pricing.auto15Text":"Her mülakattan sonra ayrıntılı performans raporları","pricing.auto16Text":"Kişiselleştirilmiş kariyer gelişim planları","pricing.auto17Text":"Portfolyo + akademik düzeltme","pricing.auto18Text":"Mevcut tüm dillerde ses deşifresi","pricing.auto19Text":"Öncelikli teknik destek","pricing.auto20Text":"Profesyonel'e abone ol","pricing.auto21Text":"En İyi Değer","pricing.auto22Text":"Elit","pricing.auto23Text":"/ ay","pricing.auto24Text":"Aylık hiçbir sınır olmadan tamamen sınırsız yapay zekâ istekleri","pricing.auto25Text":"İstisnasız tüm platform araçları","pricing.auto26Text":"Destek ekibinden en yüksek öncelikli yanıt","pricing.auto27Text":"Elit'e abone ol","pricing.auto28Text":"Yıllık","pricing.auto29Text":"/ yıl","pricing.auto30Text":"Tüm Profesyonel özellikler (yıl boyu ayda 150 istek)","pricing.auto31Text":"Aylık aboneliğe göre yaklaşık iki ay tasarruf et","pricing.auto32Text":"Yılda bir kariyer gelişim danışmanlığı","pricing.auto33Text":"Yıllık'a abone ol","pricing.auto34Text":"Kapat","cvBuildModal.auto1Text":"CV verisini mülakatla bağla","cvBuildModal.auto2Text":"Deneyim metnini yapıştır ki sorular ona göre özelleşsin:","cvBuildModal.auto3Text":"Kaydet","cvBuildModal.auto4Text":"İptal","reportModal.auto1Text":"Ayrıntılı performans raporu","termsGate.auto1Text":"Başlamadan önce","termsGate.auto2Text":"Kullanım Koşulları ve Gizlilik Politikasını okudum ve kabul ediyorum.","termsGate.termsGateContinueText":"Devam Et","paymentRequest.auto1Text":"Aboneliği tamamla","paymentRequest.auto3Text":"Paket tutarını Vodafone Cash veya InstaPay ile şu numaraya gönder:","paymentRequest.auto5Text":"Transferden sonra aşağıya bilgilerini gir ve isteği gönder — transfer incelendikten sonra birkaç saat içinde paket hesabına manuel olarak aktif edilecek.","paymentRequest.prSubmitBtnText":"Transfer yapıldı, isteği gönder","cancelSub.auto1Text":"Sadece otomatik yenileme durdurulacak - bu dönemin son gününe kadar mevcut paketinin tüm avantajlarından normal şekilde yararlanmaya devam edeceksin, ardından otomatik olarak ücretsiz pakete döneceksin. Dönem bitmeden önce istediğin an iptali geri alabilirsin.","cancelSub.auto2Text":"Geri Al","cancelSub.cancelSubConfirmBtnText":"İptali onayla","videoMock.videoMockTopicPh":"Pozisyon veya konu (örn: müşteri hizmetleri)","videoMock.videoEmailRolePh":"Başvurduğun pozisyon (örn: muhasebeci)","videoMock.videoEmailReplyPh":"E-postaya yanıtını buraya yaz...","videoMock.videoSalaryQRolePh":"Pozisyon (yukarıda yazılıysa isteğe bağlı)","salary.salaryRolePh":"Meslek unvanı (örn: Grafik Tasarımcı)","salary.salaryExperiencePh":"Deneyim yılı (örn: 3 yıl)","match.cvMatchResumePh":"CV metnini buraya yapıştır ya da yukarıdan 'CV Bağla'ya tıkla...","match.cvMatchJobdescPh":"İş ilanı metnini buraya yapıştır...","cover.coverCvExtractPh":"CV görselinden okunan veriler burada görünecek, devam etmeden önce düzenleyebilirsin","cover.coverRolePh":"Başvurduğun pozisyon","cover.coverCompanyPh":"Şirket adı (isteğe bağlı)","cover.coverNotesPh":"Vurgulamak istediğin bir veya iki önemli nokta (deneyim, başarı, şirkete ilgi duyma nedenin...) - isteğe bağlı","support.fbContactPh":"İletişim için telefon numarası veya e-posta (isteğe bağlı)","support.fbMessagePh":"Mesajını buraya yaz...","cvBuildModal.cvTextInputPh":"Deneyim metnini buraya gir...","paymentRequest.prNamePh":"İsim","paymentRequest.prPhonePh":"Transferi yaptığın mobil numara","paymentRequest.prRefPh":"İşlemin son rakamları veya bir not (isteğe bağlı)","common.themeToggleBtnTitle":"Aydınlık moda geç","assistant.assistantGenderToggleBtnTitle":"Yanıt sesi: Erkek","common.themeToggleBtnAria":"Aydınlık moda geç","tr.transcribeMicBtnAria":"Deşifre için sesli kayıt","pitch.auto9Aria":"Sesli okumayı durdur","profile.auto1Aria":"Profil fotoğrafını değiştir","profile.profilePhotoInputAria":"Profil fotoğrafı yükle","profile.profileNameAria":"Ad Soyad","profile.profileTitleAria":"Meslek unvanı","donations.auto1Aria":"Numarayı kopyala","donations.auto2Aria":"Numarayı kopyala","donations.auto3Aria":"Numarayı kopyala","pwaIosModal.auto1Aria":"Kapat","pricing.auto1Aria":"Geri","reportModal.auto2Aria":"Kapat","paymentRequest.auto2Aria":"Kapat","paymentRequest.auto4Aria":"Numarayı kopyala","profile.profilePhotoPreviewAlt":"Profil fotoğrafı","profile.signedinAvatarImgAlt":"Hesap fotoğrafı"
        },
        de: {
            "nav.searchPh":"Werkzeuge suchen...","nav.searchEmpty":"Keine passenden Werkzeuge","nav.section.interviews":"Vorstellungsgespräche & Bewerbung","nav.interview":"Sprachbasiertes Übungsinterview","nav.faq":"FAQ + Musterantworten","nav.career":"Karriereentwicklungsplan","nav.section.documents":"Dokumente","nav.cv":"Lebenslauf-Generator","nav.portfolio":"Persönliches Portfolio","nav.writing":"Akademisches Lektorat","nav.summarizer":"Dokumentenzusammenfassung","nav.section.audio":"Audio & Video","nav.transcribe":"Sprache-zu-Text","nav.pitch":"30-Sekunden-Selbstvorstellung","nav.section.account":"Konto & Support","nav.about":"Über uns","nav.history":"Einheitlicher Verlauf","nav.profile":"Profil","nav.subscriptions":"Abonnements","nav.donations":"Spenden","nav.support":"Support & Kontakt","nav.section.legal":"Rechtliches","nav.terms":"Nutzungsbedingungen","nav.privacy":"Datenschutzerklärung","nav.section.ai":"Künstliche Intelligenz","nav.videoMock":"Video-Vorstellungsgespräch-Simulator","nav.salary":"Geschätztes Gehalt","nav.progress":"Fortschrittsverfolgung","nav.match":"Lebenslauf-Job-Abgleich","nav.cover":"Bewerbungsschreiben-Generator","nav.closeMenu":"Menü schließen","nav.clearSearch":"Suche löschen","nav.openMenu":"Menü öffnen","pwa.title":"YUSR Pro als App herunterladen","pwa.desc":"Ein Symbol auf deinem Startbildschirm, das sich wie jede normale App öffnet","pwa.installBtn":"App installieren","pwa.hideAria":"Installationsvorschlag ausblenden","hide":"Ausblenden","apk.title":"Probiere unsere Android-App aus 📱","apk.desc":"Schneller und einfacher als der Browser — lade sie direkt hier herunter","apk.hideAria":"App-Vorschlag ausblenden","apk.downloadBtn":"Lade die YUSR Pro App jetzt herunter","trial.headerTitle":"Verbleibende kostenlose Versuche in diesem Monat","support.techLabel":"Technischer Support","account.guest":"Gast (dieses Gerät)","account.signinHint":"Melde dich mit Google an, um dein Foto und deine Punkte zu speichern","authgate.title":"Anmelden","authgate.subtitle":"Falls du gerade nicht als Gast einsteigen kannst (meist ein Verbindungsproblem), melde dich mit Google oder deiner E-Mail an.","authgate.googleBtn":"Mit Google anmelden","authgate.orEmail":"oder per E-Mail","authgate.tabLogin":"Anmelden","authgate.tabSignup":"Konto erstellen","authgate.namePh":"Dein vollständiger Name","authgate.emailPh":"E-Mail","authgate.passwordPh":"Passwort","authgate.confirmPh":"Passwort bestätigen","authgate.submitLogin":"Anmelden","authgate.submitSignup":"Konto erstellen","authgate.privacyNote":"Deine Daten werden sicher gespeichert, dein Passwort ist verschlüsselt — nicht einmal wir können es sehen.","authgate.recaptchaNote":"Diese Seite ist durch reCAPTCHA geschützt. Es gelten die <a href=\"https://policies.google.com/privacy\" target=\"_blank\" rel=\"noopener\" style=\"color:inherit;text-decoration:underline;\">Datenschutzerklärung</a> und die <a href=\"https://policies.google.com/terms\" target=\"_blank\" rel=\"noopener\" style=\"color:inherit;text-decoration:underline;\">Nutzungsbedingungen</a> von Google.","trial.left":"Verbleibende Versuche","trial.upgrade":"Auf vollständigen Plan upgraden","trial.warningLow":"Nur noch {n} kostenlose Versuche in diesem Monat!","trial.warningLast":"Dies ist dein letzter kostenloser Versuch in diesem Monat!","copy":"Kopieren","download":"Herunterladen","interview.desc":"Übe ein echtes mündliches Vorstellungsgespräch mit einer detaillierten Leistungsbewertung am Ende.","interview.linkCv":"Lebenslauf verknüpfen","interview.roleLabel":"Zielposition","interview.rolePh":"z. B.: Immobilienvertrieb, Kundenservice, Programmierung...","interview.personaLabel":"Persönlichkeit des Interviewers","interview.start":"Sitzung starten","interview.speaking":"Der Interviewer spricht gerade...","interview.inputPh":"Sprich ins Mikrofon oder schreibe hier...","interview.reportHint":"Die Auswertung analysiert deine schriftlichen Antworten sowie deine Sprechgeschwindigkeit und Füllwörter, falls du das Mikrofon benutzt hast.","faq.desc":"Gib Position und Bereich an, und wir erstellen eine echte Sammlung häufiger Fragen mit überzeugenden Musterantworten.","faq.rolePh":"z. B.: Immobilien-Vertriebsleiter","faq.run":"Fragen & Antworten erstellen","career.desc":"Erzähl uns deine aktuelle Situation und dein Ziel, und wir erstellen einen praktischen Entwicklungsplan.","career.currentLabel":"Deine aktuelle Situation","career.currentPh":"z. B.: Buchhalter mit 1 Jahr Erfahrung","career.targetLabel":"Dein Ziel","career.targetPh":"z. B.: Wechsel in die Datenanalyse","career.contextPh":"Zusätzliche hilfreiche Details - optional","career.run":"Meinen Plan erstellen","cv.notice":"Dieses Tool erstellt professionellen Lebenslauf-Text zum Kopieren, kein fertig gestaltetes PDF wie bei LinkedIn.","cv.photoHint":"Optionales Foto (wird nur in deinem Browser gespeichert).","cv.namePh":"Vollständiger Name","cv.titlePh":"Zielposition","cv.expPh":"Deine Berufserfahrung","cv.eduPh":"Ausbildung & Zertifikate","cv.skillsPh":"Fähigkeiten (durch Kommas getrennt)","cv.run":"Meinen Lebenslauf schreiben","pf.notice":"Die KI stellt dir ein paar einfache Fragen zu deinem Bereich und deinen Projekten, um individuelle Portfolio-Inhalte vorzubereiten.","pf.fieldPh":"Dein Bereich (Designer, Entwickler, Marketing...)","pf.start":"Starten - die KI soll mich fragen","pf.inputPh":"Schreibe deine Antwort hier...","pf.generate":"Genug Fragen - Portfolio jetzt erstellen","writing.notice":"Sprachliche Überprüfung und Vorschläge zur akademischen Formatierung als Textempfehlungen, die du selbst in Word anwendest.","writing.topicPh":"Forschungsthema (optional)","writing.inputPh":"Füge hier deinen Forschungs- oder Artikeltext ein...","writing.run":"Text überprüfen","sum.desc":"Fasse jeden Bericht, Artikel oder jede Vorlesung in Sekunden zusammen.","sum.inputPh":"Text hier einfügen...","sum.run":"Jetzt zusammenfassen","tr.notice":"Du kannst eine fertige Audiodatei hochladen, die automatisch von der KI transkribiert wird, direkt mit dem Mikrofon aufnehmen oder einen fertigen Text einfügen.","tr.uploadBtn":"Audiodatei hochladen und automatisch transkribieren","tr.uploadHint":"Noch keine Datei hochgeladen","tr.sourceLangLabel":"Ausgangssprache der Sprache","tr.targetLangLabel":"Endtext übersetzen nach (optional)","tr.micHint":"Zum Aufnehmen drücken, oben eine Datei hochladen oder unten einen fertigen Text einfügen.","tr.rawPh":"Der Rohtext erscheint hier...","tr.run":"Bereinigen & Formatieren","pitch.notice":"Bereite eine professionelle, etwa 30-sekündige Selbstvorstellung vor, verknüpft mit deinem gespeicherten Lebenslauf und Profil.","pitch.purposeLabel":"Wo wirst du sie verwenden?","pitch.toneLabel":"Sprechstil","pitch.rolePh":"Zielposition oder -bereich","pitch.highlightPh":"Ein oder zwei Highlights, die du hervorheben möchtest - optional","pitch.run":"30-Sekunden-Vorstellung erstellen","profile.points":"Punkte","profile.namePh":"Dein vollständiger Name","profile.titlePh":"Berufsbezeichnung","profile.googleBtn":"Mit Google anmelden","profile.googleHint":"Die Anmeldung speichert deinen Namen, dein Foto und deine Punkte auf diesem Gerät — kostenlose Versuche werden pro Gerät gezählt, nicht pro Konto.","profile.save":"Angaben speichern","profile.connected":"Mit Google verbunden","profile.logoutBtn":"Abmelden","profile.statUsage":"Tool-Nutzungen","profile.statDevice":"Geräte-ID","profile.statPlan":"Dein aktueller Plan","profile.planFree":"Kostenlos","subs.individualTitle":"Einzelpläne","subs.individualDesc":"Für alle, die sich auf ein Vorstellungsgespräch vorbereiten oder ihre eigene Karriere aufbauen.","subs.basicName":"Basis","subs.perMonth":"/ Monat","subs.proName":"Professionell","subs.eliteName":"Elite","subs.popular":"Am beliebtesten","subs.bestValue":"Bestes Preis-Leistungs-Verhältnis","subs.yearlyName":"Jährlich","subs.perYear":"/ Jahr","subs.subscribe":"Jetzt abonnieren","subs.teamTitle":"Team- & Universitätspläne","subs.teamDesc":"Für Fakultäten, Universitäten und Rekrutierungszentren, die eine Gruppe gemeinsam zu einem besseren Preis pro Platz schulen möchten.","subs.teamSmallName":"Kleines Team","subs.teamSmallRange":"Bis zu 10 Personen","subs.perSeat":"/ pro Person / Monat","subs.recommended":"Empfohlen für Universitäten","subs.teamMedName":"Jahrgang / Fakultät","subs.teamMedRange":"11 bis 100 Personen","subs.uniName":"Universität / Große Organisation","subs.uniRange":"Über 100 Personen","subs.customPrice":"Individueller Preis","subs.contactUs":"Kontaktiere uns","don.title":"Unterstütze die Plattform","don.desc":"Wenn du die Entwicklung von YUSR Pro unterstützen möchtest, kannst du über die untenstehenden Nummern einen beliebigen Betrag spenden.","don.wallet":"Elektronische Geldbörse","don.thanks":"Vielen Dank an alle, die uns unterstützen.","sup.title":"Support & Kontakt","sup.desc":"Hast du eine Frage, ein Problem oder einen Vorschlag? Kontaktiere uns direkt.","sup.phone":"Direktanruf","sup.hours":"Wir antworten in der Regel innerhalb weniger Stunden. Bei dringenden Anliegen ist WhatsApp am schnellsten.","legal.lastUpdated":"Zuletzt aktualisiert: August 2026","history.pageTitle":"Einheitlicher Verlauf","history.subtitle":"Die letzten 20 Ergebnisse aus jedem Werkzeug der Seite (Zusammenfassungen, Lektorate, Schreiben und mehr) werden hier automatisch gespeichert, damit sie nicht verloren gehen, wenn du die Seite schließt.","history.listTitle":"Gespeicherte Ergebnisse","history.clearAll":"Alles löschen","history.empty":"Noch keine gespeicherten Ergebnisse. Jedes Ergebnis der Werkzeuge der Seite erscheint hier automatisch.","onboarding.title":"Willkommen bei YUSR Pro 👋","onboarding.subtitle":"3 schnelle Schritte für einen guten Start:","onboarding.step1.title":"Vervollständige dein Profil","onboarding.step1.desc":"Andere Werkzeuge wie Lebenslauf und Interview nutzen diese Daten.","onboarding.step2.title":"Probiere ein Übungsinterview","onboarding.step2.desc":"Übe echte Fragen laut und erhalte sofortiges Feedback zu deiner Leistung.","onboarding.step3.title":"Erstelle deinen Lebenslauf","onboarding.step3.desc":"Wir erstellen dir in wenigen Minuten einen professionellen Lebenslauf aus deinen gespeicherten Daten.","onboarding.tip":"Tipp: Über der Seitenleiste gibt es ein Suchfeld, mit dem du schnell jedes der über 20 Werkzeuge findest.","onboarding.skip":"Überspringen, ich schaue selbst","about.pageTitle":"Über uns","about.tagline":"Eine arabische Plattform, die wir mit Leidenschaft aufbauen, um dein Begleiter auf deiner Karriereweise zu sein.","about.missionLabel":"Unsere Mission","about.missionBody":"Wir glauben, dass jeder, unabhängig von Herkunft oder Umständen, es verdient, die richtige Chance selbstbewusst und gut vorbereitet zu erreichen. \"YUSR Pro\" entstand aus einer einfachen Idee: Eine gute Interviewvorbereitung oder ein starker Lebenslauf sollte nicht nur denen vorbehalten sein, die Zeit, Geld oder Beziehungen haben — KI kann diese Qualität jetzt jedem, jederzeit zugänglich machen.","about.pillarsTitle":"Was uns antreibt","about.pillar1Title":"Echte Hilfe","about.pillar1Body":"Nicht nur Werkzeuge — wir gestalten jede Funktion, um ein echtes Problem zu lösen, dem Arbeitssuchende begegnen.","about.pillar2Title":"Ständige Weiterentwicklung","about.pillar2Body":"Wir hören auf eure Vorschläge und fügen ständig hinzu und verbessern — die Plattform wächst Schritt für Schritt mit euch.","about.pillar3Title":"KI in deinem Dienst","about.pillar3Body":"Wir nutzen die neueste KI-Technologie, um dir eine hochwertige, personalisierte Vorbereitungserfahrung zu bieten.","about.pillar4Title":"Deine Privatsphäre zuerst","about.pillar4Body":"Deine Daten gehören dir — wir nutzen oder teilen sie nur, um dir den Dienst bereitzustellen.","about.whyTitle":"Warum YUSR Pro?","about.why1":"Eine vollständig auf Arabisch gestaltete Erfahrung, die deinen Dialekt versteht.","about.why2":"Alle Werkzeuge, die du brauchst, vom Vorstellungsgespräch über den Lebenslauf bis zum Portfolio, an einem Ort.","about.why3":"Ehrliches, realistisches Feedback, das dir hilft, dich zu verbessern, nicht nur allgemeines Lob.","about.why4":"Wir entwickeln die Plattform kontinuierlich basierend auf den echten Bedürfnissen unserer Nutzer weiter.","about.closing":"Hast du eine Idee oder einen Vorschlag, wie YUSR besser werden könnte? Wir würden es gerne hören.","about.contactUs":"Kontaktiere uns","terms.pageTitle":"Nutzungsbedingungen","terms.betaNotice":"Die Plattform befindet sich noch in der Beta-Phase. Die Seite \"Abonnements\" zeigt derzeit Testpläne und -preise ohne tatsächliche Abbuchung von einer Karte oder einem Konto — wir werden es in der App deutlich ankündigen, sobald die echte Zahlung aktiviert ist.","terms.s1.title":"1. Annahme der Bedingungen","terms.s1.body":"Durch die Nutzung der Plattform \"YUSR Pro\" stimmst du diesen Bedingungen zu.","terms.s2.title":"2. Art des Dienstes","terms.s2.body":"YUSR ist eine KI-gestützte Plattform zur Vorbereitung von Arbeitssuchenden: sprachbasierte Übungsinterviews, Erstellung von Lebenslauf und Portfolio, akademisches Lektorat, Dokumentenzusammenfassung und Transkription. Antworten und Vorschläge werden von KI erzeugt und dienen nur als Orientierungshilfe, nicht als Garantie für ein Ergebnis oder eine Einstellung.","terms.s3.title":"3. Konto und erlaubte Nutzung","terms.s3.body":"Du kannst die Plattform als Gast (automatische anonyme Identität) oder mit einem Google-Konto nutzen, um deine Daten zu speichern. Du bist für jede Aktivität deines Kontos verantwortlich. Verboten: der Versuch, faire Nutzungsgrenzen zu umgehen, massenhafte automatisierte Anfragen (Bots) zu senden oder auf einen nicht autorisierten Teil des Systems zuzugreifen.","terms.s4.title":"4. Grenzen der fairen Nutzung","terms.s4.body":"Um den Dienst für alle aufrechtzuerhalten, haben die KI-Tools (Chat, Transkription, Text-zu-Sprache) eine tägliche und monatliche Nutzungsobergrenze. Wenn du das Limit erreichst, musst du auf die Rücksetzung warten.","terms.s5.title":"5. Deine Inhalte","terms.s5.body":"Jeder Inhalt, den du schreibst oder hochlädst (Lebenslaufdaten, Portfolio, Sprachaufnahmen), bleibt dein Eigentum. Wir verarbeiten ihn nur, um dir den Dienst bereitzustellen, und verwenden ihn niemals für andere Zwecke oder verkaufen ihn.","terms.s6.title":"6. Haftungsausschluss","terms.s6.body":"Der Dienst wird \"wie besehen\" ohne Garantien bereitgestellt. Wir sind nicht verantwortlich für berufliche oder karrierebezogene Entscheidungen, die du auf Basis von KI-Ergebnissen triffst, und empfehlen immer, wichtige Inhalte vor der Nutzung selbst zu überprüfen.","terms.s7.title":"7. Änderungen","terms.s7.body":"Wir können diese Bedingungen von Zeit zu Zeit ändern und aktualisieren das Datum \"Zuletzt aktualisiert\" oben. Die weitere Nutzung der Plattform nach einer Änderung bedeutet, dass du die neue Version akzeptierst.","terms.s8.title":"8. Kontakt","terms.s8.body":"Bei Fragen zu diesen Bedingungen erreichst du uns über die Seite \"Support & Kontakt\".","privacy.pageTitle":"Datenschutzerklärung","privacy.s1.title":"1. Wer die Daten erhebt","privacy.s1.body":"Die Plattform \"YUSR Pro\" erhebt und verarbeitet deine Daten zu einem einzigen Zweck: der Bereitstellung des von dir genutzten Dienstes.","privacy.s2.title":"2. Daten, die wir erheben","privacy.s2.li1":"<b class=\"text-slate-200\">Kontodaten:</b> Wenn du dich mit Google anmeldest, erhalten wir deinen Namen, dein Foto und deine E-Mail-Adresse direkt von Google. Wenn du als Gast eintrittst, geben wir dir eine anonyme Identität, nur um dich von anderen Nutzern zu unterscheiden.","privacy.s2.li2":"<b class=\"text-slate-200\">Von dir genutzte Inhalte:</b> Lebenslaufdaten, Portfolio, von dir geschriebene oder zusammengefasste Texte sowie Sprachaufnahmen, die du in die Interview- oder Transkriptionswerkzeuge hochlädst.","privacy.s2.li3":"<b class=\"text-slate-200\">Technische Nutzungsdaten:</b> wie oft du jedes Tool genutzt hast (zur Anwendung der fairen Nutzungsgrenzen), lokal auf deinem Gerät gespeichert (localStorage), wie z. B. die \"verbleibenden Versuche\".","privacy.s3.title":"3. Wie wir deine Daten verwenden","privacy.s3.body":"Wir verwenden deine Daten nur, um: (a) die KI-Tools zu betreiben (wir senden den von dir hochgeladenen Text oder Audio an spezialisierte Verarbeitungsunternehmen, um die Antwort zu erzeugen, ohne dass diese deine Schlüssel oder Anmeldedaten speichern), (b) dein Profil zu speichern, damit es bei deiner Rückkehr vorhanden ist, (c) den Dienst zu verbessern und Missbrauch zu verhindern.","privacy.s4.title":"4. Wer deine Daten sieht (Dritte)","privacy.s4.li1":"<b class=\"text-slate-200\">Google Firebase:</b> für die Anmeldung und die sichere Speicherung deines Profils.","privacy.s4.li2":"<b class=\"text-slate-200\">AI Processing Service:</b> zur Verarbeitung von Text und Audio in den Chat- und Transkriptionswerkzeugen.","privacy.s4.li3":"<b class=\"text-slate-200\">Text-to-Speech Service:</b> für die Text-zu-Sprache-Umwandlung.","privacy.s4.li4":"<b class=\"text-slate-200\">Cloudflare:</b> als sicherer technischer Vermittler zwischen deiner App und den KI-Diensten, ohne deine Daten zu speichern.","privacy.s4.li5":"<b class=\"text-slate-200\">Web Search Service:</b> nur für die Live-Websuche im Gehaltsschätzungs-Tool.","privacy.s4.note":"Wir verkaufen deine Daten niemals an irgendjemanden und geben sie niemals zu Werbezwecken weiter.","privacy.s5.title":"5. Datensicherheit","privacy.s5.body":"Deine Daten sind durch Sicherheitsregeln geschützt, die sicherstellen, dass jeder Nutzer nur seine eigenen Daten sehen kann, und die gesamte Kommunikation zwischen deiner App und dem Server ist verschlüsselt (HTTPS).","privacy.s6.title":"6. Deine Rechte","privacy.s6.body":"Du kannst jederzeit anfordern, deine gespeicherten Daten einzusehen, zu bearbeiten oder ihre vollständige Löschung zu beantragen, indem du uns über die Seite \"Support & Kontakt\" kontaktierst.","privacy.s7.title":"7. Kinder","privacy.s7.body":"Der Dienst richtet sich nicht an Personen unter 13 Jahren, und wir erheben wissentlich keine Daten dieser Altersgruppe.","privacy.s8.title":"8. Änderungen dieser Richtlinie","privacy.s8.body":"Wir können diese Richtlinie von Zeit zu Zeit aktualisieren und werden das Datum \"Zuletzt aktualisiert\" oben ändern, sobald wir eine wesentliche Änderung vornehmen.","assistant.botName":"Yusr Pro Bot","assistant.subtitle":"Schreib ihm oder sprich mit ihm, und schick ein Foto, wenn er etwas sehen soll","assistant.inputPh":"Schreib deine Frage hier...","assistant.attachImageTitle":"Foto anhängen","assistant.micTitle":"Sprachaufnahme","assistant.voiceToggleTitle":"Antwortstimme ein-/ausschalten","assistant.newChatTitle":"Neue Unterhaltung starten","assistant.removeImageTitle":"Bild entfernen","assistant.imageAlt":"Angehängtes Bild","assistant.providerHint":"Unterstützt von mehreren KI-Anbietern — wenn einer ausgelastet ist, wechselt er automatisch zum nächsten, ohne dass du es merkst.","assistant.emptyHint":"Frag {bot} per Text oder Sprache, oder schick ihm ein Bild, das er sich ansehen und dazu antworten soll.","assistant.defaultImageQuestion":"Beschreibe dieses Bild und erkläre mir ausführlich, was darauf zu sehen ist.","interview.resumeBefore":"Es gibt noch eine laufende Interview-Sitzung (","interview.resumeAfter":"). Möchtest du fortfahren oder eine neue Sitzung starten?","interview.resume":"Fortsetzen","interview.startNew":"Neu starten","interview.voiceLabel":"Stimme des Interviewers","interview.voiceMale":"Männliche Stimme","interview.voiceFemale":"Weibliche Stimme","interview.personaArLabel":"Gehobenes Arabisch","interview.personaEnLabel":"Gehobenes Englisch","interview.screenshot":"Unterhaltung als Screenshot","interview.endTitle":"Interview endgültig beenden und im Archiv speichern","interview.endBtn":"Interview beenden","interview.endHint":"Das Beenden des Interviews ist endgültig — diese Sitzung kann danach nicht fortgesetzt werden. Wenn du eine andere Sprache oder einen anderen Interviewer möchtest, starte ein neues Interview.","interview.stop":"Stopp","interview.micTitle":"Mit deiner Stimme sprechen","interview.sendAria":"Antwort senden","interview.evalTitle":"Leistungsbewertung","cv.tabPlain":"Einfacher Lebenslauf (ohne Foto)","cv.tabLinkedin":"LinkedIn-Stil (mit Foto)","cv.plainNotice":"Ein reiner Text-Lebenslauf ganz ohne Foto — professioneller Text, der direkt in Word oder anderswo eingefügt werden kann.","cv.runPlain":"Einfachen Lebenslauf erstellen","cv.liNotice":"Eine Version im LinkedIn-Stil: oben ein Profilfoto, darunter eine Kontaktliste genau wie bei LinkedIn, gefolgt vom Lebenslaufinhalt.","cv.liPhotoAlt":"Lebenslauf-Foto","cv.liPhotoHint":"Dein Foto wird nur in deinem Browser gespeichert und niemals irgendwohin gesendet.","cv.contactInfo":"Kontaktinformationen","cv.phonePh":"Telefonnummer","cv.emailPh":"E-Mail-Adresse","cv.linkedinPh":"LinkedIn-Link oder berufliches Profil","cv.locationPh":"Stadt / Land","cv.runLinkedin":"Lebenslauf im LinkedIn-Stil erstellen","cv.exportFooter":"Erstellt über die YUSR-Plattform","pf.screenshot":"Screenshot","pf.sendAria":"Senden","common.auto2Text":"العربية","common.auto3Text":"اردو","common.auto4Text":"فارسی","common.emailVerifyResendBtnText":"Erneut senden","common.emailVerifyRecheckBtnText":"Ich habe es bestätigt, Status aktualisieren","faq.auto1Text":"8 Fragen","faq.auto2Text":"12 Fragen","faq.auto3Text":"18 Fragen","faq.auto4Text":"Berufseinsteiger / weniger als ein Jahr Erfahrung","faq.auto5Text":"Mittlere Erfahrungsstufe (Mid-level)","faq.auto6Text":"Senior / umfangreiche Erfahrung","faq.auto7Text":"Führungsebene (Manager+)","career.auto1Text":"Planlänge","career.auto2Text":"Vollständiger detaillierter Plan (alle Schritte und Details)","career.auto3Text":"Schnelle, klare Zusammenfassung (nur die Kernpunkte, ohne Ausführlichkeit)","videoMock.auto1Text":"Bereite mir etwas vor, das ich vor der Kamera sagen kann","videoMock.auto2Text":"Statt die Kamera zu öffnen und durcheinanderzukommen, was du sagen sollst, wähle einen Modus: Du bekommst entweder eine konkrete Frage zum Beantworten oder einen fertigen Text zum lauten Üben — und nimmst dich dann bei der Antwort auf.","videoMock.auto3Text":"Eine Interviewfrage, die ich laut beantworte","videoMock.auto4Text":"Fertiger Text zum klaren Vorlesen üben","videoMock.auto5Text":"Gib mir noch eins","videoMock.auto6Text":"Vor der Kamera üben","videoMock.videoMockStatusText":"Drücke auf „Kamera starten“ und dein Browser fragt nach Kamera- und Mikrofonzugriff — danach kannst du einen Clip aufnehmen und ihn zur Überprüfung herunterladen.","videoMock.auto7Text":"Simulation einer Terminvereinbarungs-E-Mail für Vorstellungsgespräche","videoMock.auto8Text":"Es wird eine realistische E-Mail von einem „Recruiter“ generiert, der dich bittet, einen Termin/Ort oder einen Online-Interview-Link zu bestätigen, manchmal auch deine Gehaltsvorstellungen — übe eine professionelle Antwort.","videoMock.auto9Text":"Termin und Ort bestätigen (persönlich)","videoMock.auto10Text":"Einen Online-Interviewtermin bestätigen","videoMock.auto11Text":"Frage nach Gehaltsvorstellungen","videoMock.auto12Text":"Plötzlicher Terminkonflikt / Änderung","videoMock.auto13Text":"Dringende E-Mail (Antwort innerhalb eines Tages)","videoMock.auto14Text":"Sehr formeller Ton","videoMock.auto15Text":"Freundlicher, entspannter Ton","videoMock.auto16Text":"Dringlicher Ton mit Zeitdruck","videoMock.auto17Text":"Passende Anschlussfragen zum Gehalt der Stelle","videoMock.auto18Text":"Kleidungs- und Auftrittstipps passend zum Vorstellungsgespräch","videoMock.auto19Text":"Formelles Büroumfeld (Banken/Großunternehmen)","videoMock.auto20Text":"Startup / junges, lockeres Umfeld","videoMock.auto21Text":"Direkter Kundenkontakt","videoMock.auto22Text":"Kreativer Bereich","videoMock.auto23Text":"Online-Interview (Videoanruf)","videoMock.auto24Text":"Konservatives Arbeitsumfeld am Golf","videoMock.auto25Text":"Tipps für Männer und Frauen","videoMock.auto26Text":"Tipps nur für Männer","videoMock.auto27Text":"Tipps nur für Frauen","salary.auto1Text":"Das Tool sucht in dem Moment, in dem du auf „Schätzen“ klickst, live im Web nach dem Arbeitsmarkt und erstellt die Schätzung darauf basierend mit KI-Einschätzung — keine offiziellen Daten oder eine zu 100 % genaue Marktumfrage — nutze es als Verhandlungsausgangspunkt, nicht als endgültige Zahl.","salary.auto2Text":"Ägypten","salary.auto3Text":"Saudi-Arabien","salary.auto4Text":"Vereinigte Arabische Emirate","salary.auto5Text":"Die Golfstaaten allgemein","salary.auto6Text":"Remote für ausländische Unternehmen","progress.auto1Text":"Dein Interview-Archiv: Statt dass jedes Interview für sich steht, sammelt eine einzige Seite alle deine Interviews, Transkripte und Leistungsberichte aus „Sprachbasiertes Übungsinterview“ und zeigt deinen Fortschritt über die Zeit.","progress.auto2Text":"Erinnerung an ein bevorstehendes Vorstellungsgespräch","progress.auto3Text":"Erinnerung speichern","progress.progressReminderEnableBtnText":"Echte Browser-Push-Benachrichtigung aktivieren","progress.progressReminderStatusText":"Wenn du die Uhrzeit festlegst, erhältst du genau zur Interviewzeit eine Benachrichtigung (mit etwa 5 Minuten Abweichung), plus eine Erinnerung zwei Tage vorher. Solange du die Benachrichtigungserlaubnis erteilt hast und der Browser läuft (auch wenn der Tab nicht im Vordergrund ist) — der Browser muss trotzdem geöffnet sein; bei vollständig geschlossenem Browser erreicht sie dich nicht.","progress.auto4Text":"Aufzeichnung früherer Sitzungen","progress.auto5Text":"Beide Sitzungen vergleichen","match.auto1Text":"Füge die Stellenbeschreibung und deinen Lebenslauf ein, und wir geben dir einen ungefähren Übereinstimmungsprozentsatz zusammen mit konkreten Schwachstellen und fehlenden Schlüsselwörtern, die dir helfen, ATS-Filter zu passieren.","match.auto2Text":"Dein Lebenslauf","match.auto3Text":"Gespeicherten Lebenslauf verwenden","match.auto4Text":"Stellenbeschreibung","cover.auto1Text":"Für die formelle Korrespondenz der Jobsuche gedacht: ein Anschreiben zum Lebenslauf, eine Dankesnachricht nach dem Vorstellungsgespräch oder eine Antwort auf ein Gehaltsangebot.","cover.auto2Text":"Daten aus einem vorhandenen Lebenslauf importieren (optional)","cover.auto3Text":"Fotografiere deinen Lebenslauf mit der Kamera oder lade ein Bild/einen Screenshot davon hoch, und die KI liest ihn aus und extrahiert die wichtigsten Daten, um darauf das Schreiben aufzubauen.","cover.auto4Text":"Lebenslauf-Bild hochladen","cover.auto5Text":"Lebenslauf jetzt fotografieren","cover.auto6Text":"Anschreiben zum Lebenslauf","cover.auto7Text":"Dankes- und Follow-up-Nachricht nach dem Vorstellungsgespräch","cover.auto8Text":"Antwort auf ein Gehaltsangebot / Gehaltsverhandlung","writing.auto1Text":"Rechtschreib- und Grammatikprüfung","writing.auto2Text":"Akademische Formatierung (APA)","writing.auto3Text":"Akademische Formatierung (Harvard)","summarizer.auto1Text":"Sehr kurze Zusammenfassung (schnelles Verständnis)","summarizer.auto2Text":"Stichpunkte","summarizer.auto3Text":"Ein Absatz","summarizer.auto4Text":"Detaillierte Zusammenfassung mit Überschriften","tr.auto1Text":"🔎 Sprache automatisch erkennen","tr.auto2Text":"العربية","tr.auto3Text":"اردو","tr.auto4Text":"فارسی","tr.auto5Text":"Keine Übersetzung - gleiche Sprache","tr.auto6Text":"العربية","pitch.auto1Text":"Einstieg in ein persönliches Vorstellungsgespräch","pitch.auto2Text":"Vorstellungsvideo (LinkedIn / Portfolio)","pitch.auto3Text":"Kaltakquise bei einem Unternehmen (Networking)","pitch.auto4Text":"Beginn eines Telefonats / einer plötzlichen Gelegenheit","pitch.auto5Text":"Formell, ruhig und professionell","pitch.auto6Text":"Enthusiastisch und energiegeladen","pitch.auto7Text":"Einfach, freundlich, bodenständig","pitch.auto8Text":"Höre dir den Text an und stoppe die Zeit","pitch.auto10Text":"Erstelle zuerst deinen Lebenslauf","pitch.auto11Text":"Übe mit einem Sprach-Interview","profile.auto2Text":"Ändern","profile.auto3Text":"Lebenslauf","profile.auto4Text":"Portfolio","profile.auto5Text":"Fortschrittsverfolgung","profile.auto6Text":"Pläne","profile.profileStatPrivacyText":"Sicher","profile.auto7Text":"Dein Kontostatus","profile.auto8Text":"Anmeldekonto","profile.auto9Text":"Überblick über dein Konto","profile.auto10Text":"Dein aktueller Plan","profile.auto11Text":"Anzahl der Abonnements/Käufe","profile.auto12Text":"Abonnement- und Kaufverlauf","profile.auto13Text":"Einen Plan abonnieren","profile.auto14Text":"Die automatische Verlängerung deines Plans wurde gestoppt, und du profitierst weiterhin normal davon bis zum letzten Tag des aktuellen Zeitraums.","profile.auto15Text":"Kündigung rückgängig machen","profile.auto16Text":"Möchtest du nicht bei deinem aktuellen Plan bleiben?","profile.cancelSubBtnText":"Abonnement kündigen","profile.auto17Text":"Datenschutz und deine Daten","profile.auto18Text":"Deine Profildaten, dein Trainingsverlauf und dein Nutzungsprotokoll werden hauptsächlich auf deinem Gerät (Browser) gespeichert, und wenn du dich mit Google angemeldet hast, wird eine Kopie mit deinem Konto synchronisiert, damit du sie von jedem Gerät findest. Lebenslauf-Fotos sowie Audio-/Videodateien werden nur zum Zeitpunkt der Nutzung zur Verarbeitung gesendet und nicht dauerhaft auf dem Server gespeichert.","profile.auto19Text":"Passwort ändern","profile.auto20Text":"Meine Daten nur auf diesem Gerät löschen","profile.auto21Text":"Gefahrenzone","profile.auto22Text":"Das Löschen deines Kontos entfernt es dauerhaft bei uns: deine Daten, Abonnements und dein Nutzungsprotokoll auf dem Server (nicht nur auf diesem Gerät) - dies ist eine endgültige, nicht rückgängig zu machende Aktion.","profile.deleteAccountBtnText":"Mein Konto endgültig löschen","profile.auto23Text":"Deine Mitgliedschaft","profile.auto24Text":"Insgesamt bezahlt","profile.auto25Text":"Plan upgraden","profile.auto26Text":"Schnelle Tipps","profile.auto27Text":"Vervollständige deine Daten und dein Foto, damit dein Lebenslauf und Portfolio bestmöglich aussehen, und verfolge deinen Fortschritt genau über die Seite „Fortschrittsverfolgung“.","subscriptions.auto1Text":"EGP","subscriptions.auto2Text":"25 KI-Anfragen pro Monat","subscriptions.auto3Text":"Lebenslauf erstellen und Dokumente zusammenfassen","subscriptions.auto4Text":"EGP","subscriptions.auto5Text":"150 KI-Anfragen pro Monat","subscriptions.auto6Text":"Detaillierte Leistungsberichte","subscriptions.auto7Text":"Bearbeitung + Audiotranskription in allen Sprachen","subscriptions.auto8Text":"EGP","subscriptions.auto9Text":"Vollständig unbegrenzte KI-Anfragen","subscriptions.auto10Text":"Alle Plattform-Tools ohne Ausnahme","subscriptions.auto11Text":"EGP","subscriptions.auto12Text":"Alle Professional-Funktionen","subscriptions.auto13Text":"Zwei Monate gratis","subscriptions.auto14Text":"EGP","subscriptions.auto15Text":"Alle Funktionen des Professional-Plans","subscriptions.auto16Text":"Dashboard zur Fortschrittsverfolgung des Teams","subscriptions.auto17Text":"EGP","subscriptions.auto18Text":"Alle Professional-Funktionen für alle Studierenden","subscriptions.auto19Text":"Gruppenbericht für den Jahrgangsbetreuer","subscriptions.auto20Text":"Kostenlose Einführungsschulung","subscriptions.auto21Text":"Alle Funktionen + vollständige Anpassung","subscriptions.auto22Text":"Dedizierter Kundenbetreuer für die Universität","support.auto1Text":"Hast du einen Vorschlag, eine Beschwerde oder eine Frage?","support.auto2Text":"Vorschlag","support.auto3Text":"Beschwerde","support.auto4Text":"Frage","support.auto5Text":"Senden","pwaIosModal.auto2Text":"App auf dem iPhone installieren","pwaIosModal.auto3Text":"Scrolle, bis du „Zum Home-Bildschirm“ findest.","pwaIosModal.auto4Text":"Tippe oben auf „Hinzufügen“ — du findest das YUSR Pro-Symbol auf deinem Home-Bildschirm, wie jede normale App.","pwaIosModal.auto5Text":"Alles klar","pricing.auto2Text":"Wähle deinen Plan","pricing.auto3Text":"Alle Tools der Plattform an einem Ort - Interviews, Lebenslauf, Portfolio, akademisches Korrekturlesen, Audiotranskription und mehr.","pricing.auto4Text":"Basis","pricing.auto5Text":"/ Monat","pricing.auto6Text":"25 KI-Anfragen pro Monat (Interviews, Lebenslauf, alle Tools)","pricing.auto7Text":"Lebenslauf erstellen und Dokumente zusammenfassen","pricing.auto8Text":"Häufige Fragen für jede Stelle","pricing.auto9Text":"Support über den Website-Chat","pricing.auto10Text":"Basis abonnieren","pricing.auto11Text":"Am beliebtesten","pricing.auto12Text":"Professionell","pricing.auto13Text":"/ Monat","pricing.auto14Text":"150 KI-Anfragen pro Monat (genug für fast tägliches Üben)","pricing.auto15Text":"Detaillierte Leistungsberichte nach jedem Interview","pricing.auto16Text":"Individuelle Karriereentwicklungspläne","pricing.auto17Text":"Portfolio + akademisches Korrekturlesen","pricing.auto18Text":"Audiotranskription in allen verfügbaren Sprachen","pricing.auto19Text":"Priorisierter technischer Support","pricing.auto20Text":"Professional abonnieren","pricing.auto21Text":"Bestes Preis-Leistungs-Verhältnis","pricing.auto22Text":"Elite","pricing.auto23Text":"/ Monat","pricing.auto24Text":"Vollständig unbegrenzte KI-Anfragen, ohne jede monatliche Obergrenze","pricing.auto25Text":"Alle Plattform-Tools ohne Ausnahme","pricing.auto26Text":"Höchste Priorität bei der Antwort des Support-Teams","pricing.auto27Text":"Elite abonnieren","pricing.auto28Text":"Jährlich","pricing.auto29Text":"/ Jahr","pricing.auto30Text":"Alle Professional-Funktionen (150 Anfragen pro Monat das ganze Jahr über)","pricing.auto31Text":"Spare im Vergleich zum monatlichen Abonnement etwa zwei Monate","pricing.auto32Text":"Eine Karriereentwicklungsberatung pro Jahr","pricing.auto33Text":"Jährlich abonnieren","pricing.auto34Text":"Schließen","cvBuildModal.auto1Text":"Lebenslaufdaten mit dem Interview verknüpfen","cvBuildModal.auto2Text":"Füge deinen Erfahrungstext ein, damit die Fragen darauf zugeschnitten werden:","cvBuildModal.auto3Text":"Speichern","cvBuildModal.auto4Text":"Abbrechen","reportModal.auto1Text":"Detaillierter Leistungsbericht","termsGate.auto1Text":"Bevor du beginnst","termsGate.auto2Text":"Ich habe die Nutzungsbedingungen und die Datenschutzrichtlinie gelesen und stimme ihnen zu.","termsGate.termsGateContinueText":"Weiter","paymentRequest.auto1Text":"Abonnement abschließen","paymentRequest.auto3Text":"Überweise den Planbetrag per Vodafone Cash oder InstaPay an die Nummer:","paymentRequest.auto5Text":"Fülle nach der Überweisung unten deine Daten aus und sende die Anfrage — der Plan wird nach Prüfung der Überweisung innerhalb weniger Stunden manuell auf deinem Konto aktiviert.","paymentRequest.prSubmitBtnText":"Überweisung erledigt, Anfrage senden","cancelSub.auto1Text":"Es wird lediglich die automatische Verlängerung gestoppt - du profitierst weiterhin normal von allen Vorteilen deines aktuellen Plans bis zum letzten Tag dieses Zeitraums, danach kehrst du automatisch zum kostenlosen Plan zurück. Du kannst die Kündigung jederzeit vor Ablauf des Zeitraums rückgängig machen.","cancelSub.auto2Text":"Rückgängig machen","cancelSub.cancelSubConfirmBtnText":"Kündigung bestätigen","videoMock.videoMockTopicPh":"Die Stelle oder das Thema (z. B. Kundenservice)","videoMock.videoEmailRolePh":"Die Stelle, auf die du dich bewirbst (z. B. Buchhalter)","videoMock.videoEmailReplyPh":"Schreibe hier deine Antwort auf die E-Mail …","videoMock.videoSalaryQRolePh":"Die Stelle (optional, falls oben schon angegeben)","salary.salaryRolePh":"Berufsbezeichnung (z. B. Grafikdesigner)","salary.salaryExperiencePh":"Berufserfahrung in Jahren (z. B. 3 Jahre)","match.cvMatchResumePh":"Füge hier den Text deines Lebenslaufs ein oder klicke oben auf „Lebenslauf verknüpfen“ …","match.cvMatchJobdescPh":"Füge hier den Text der Stellenanzeige ein …","cover.coverCvExtractPh":"Die aus dem Lebenslaufbild extrahierten Daten erscheinen hier, du kannst sie vor dem Fortfahren bearbeiten","cover.coverRolePh":"Stelle, auf die du dich bewirbst","cover.coverCompanyPh":"Firmenname (optional)","cover.coverNotesPh":"Ein oder zwei wichtige Punkte, die du hervorheben möchtest (Erfahrung, Erfolg, warum dich das Unternehmen interessiert...) - optional","support.fbContactPh":"Telefonnummer oder E-Mail für Rückfragen (optional)","support.fbMessagePh":"Schreibe hier deine Nachricht …","cvBuildModal.cvTextInputPh":"Gib hier deinen Erfahrungstext ein …","paymentRequest.prNamePh":"Name","paymentRequest.prPhonePh":"Die Mobilnummer, von der du überwiesen hast","paymentRequest.prRefPh":"Letzte Ziffern der Transaktion oder eine Notiz (optional)","common.themeToggleBtnTitle":"Zum hellen Modus wechseln","assistant.assistantGenderToggleBtnTitle":"Antwortstimme: Männlich","common.themeToggleBtnAria":"Zum hellen Modus wechseln","tr.transcribeMicBtnAria":"Sprachaufnahme zur Transkription","pitch.auto9Aria":"Vorlesen stoppen","profile.auto1Aria":"Profilfoto ändern","profile.profilePhotoInputAria":"Profilfoto hochladen","profile.profileNameAria":"Dein vollständiger Name","profile.profileTitleAria":"Berufsbezeichnung","donations.auto1Aria":"Nummer kopieren","donations.auto2Aria":"Nummer kopieren","donations.auto3Aria":"Nummer kopieren","pwaIosModal.auto1Aria":"Schließen","pricing.auto1Aria":"Zurück","reportModal.auto2Aria":"Schließen","paymentRequest.auto2Aria":"Schließen","paymentRequest.auto4Aria":"Nummer kopieren","profile.profilePhotoPreviewAlt":"Profilfoto","profile.signedinAvatarImgAlt":"Kontofoto"
        },
        hi: {
            "nav.searchPh":"टूल खोजें...","nav.searchEmpty":"कोई मेल खाता टूल नहीं","nav.section.interviews":"इंटरव्यू और नौकरी","nav.interview":"वॉइस मॉक इंटरव्यू","nav.faq":"सामान्य प्रश्न + नमूना उत्तर","nav.career":"करियर विकास योजना","nav.section.documents":"दस्तावेज़","nav.cv":"सीवी बिल्डर","nav.portfolio":"व्यक्तिगत पोर्टफोलियो","nav.writing":"अकादमिक लेखन समीक्षा","nav.summarizer":"दस्तावेज़ सारांश","nav.section.audio":"ऑडियो और वीडियो","nav.transcribe":"ऑडियो से टेक्स्ट","nav.pitch":"30-सेकंड सेल्फ पिच","nav.section.account":"खाता और सहायता","nav.about":"हमारे बारे में","nav.history":"एकीकृत इतिहास","nav.profile":"प्रोफ़ाइल","nav.subscriptions":"सदस्यताएँ","nav.donations":"दान","nav.support":"सहायता और संपर्क","nav.section.legal":"कानूनी","nav.terms":"उपयोग की शर्तें","nav.privacy":"गोपनीयता नीति","nav.section.ai":"कृत्रिम बुद्धिमत्ता","nav.videoMock":"वीडियो मॉक इंटरव्यू","nav.salary":"अपेक्षित वेतन अनुमान","nav.progress":"प्रगति ट्रैकिंग","nav.match":"सीवी-नौकरी मिलान","nav.cover":"नौकरी पत्र जनरेटर","nav.closeMenu":"मेनू बंद करें","nav.clearSearch":"खोज साफ़ करें","nav.openMenu":"मेनू खोलें","pwa.title":"YUSR Pro को ऐप के रूप में डाउनलोड करें","pwa.desc":"आपकी होम स्क्रीन पर एक आइकन, जो किसी भी सामान्य ऐप की तरह खुलता है","pwa.installBtn":"ऐप इंस्टॉल करें","pwa.hideAria":"इंस्टॉल सुझाव छिपाएं","hide":"छिपाएं","apk.title":"हमारा Android ऐप आज़माएं 📱","apk.desc":"ब्राउज़र से तेज़ और आसान — इसे सीधे यहीं से डाउनलोड करें","apk.hideAria":"ऐप सुझाव छिपाएं","apk.downloadBtn":"अभी YUSR Pro ऐप डाउनलोड करें","trial.headerTitle":"इस महीने बचे मुफ़्त प्रयास","support.techLabel":"तकनीकी सहायता","account.guest":"अतिथि (यह डिवाइस)","account.signinHint":"अपनी फ़ोटो और पॉइंट्स सेव करने के लिए Google से साइन इन करें","authgate.title":"साइन इन करें","authgate.subtitle":"साइट इस्तेमाल करने के लिए आपको Google या अपने ईमेल से साइन इन करना होगा।","authgate.googleBtn":"Google से साइन इन करें","authgate.orEmail":"या ईमेल से","authgate.tabLogin":"लॉग इन करें","authgate.tabSignup":"खाता बनाएं","authgate.namePh":"आपका पूरा नाम","authgate.emailPh":"ईमेल","authgate.passwordPh":"पासवर्ड","authgate.confirmPh":"पासवर्ड की पुष्टि करें","authgate.submitLogin":"लॉग इन करें","authgate.submitSignup":"खाता बनाएं","authgate.privacyNote":"आपका डेटा सुरक्षित रूप से सेव किया जाता है, और आपका पासवर्ड एन्क्रिप्टेड है — यहां तक कि हम भी इसे नहीं देख सकते।","authgate.recaptchaNote":"यह साइट reCAPTCHA से सुरक्षित है, और <a href=\\\"https://policies.google.com/privacy\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" style=\\\"color:inherit;text-decoration:underline;\\\">गोपनीयता नीति</a> और <a href=\\\"https://policies.google.com/terms\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" style=\\\"color:inherit;text-decoration:underline;\\\">सेवा की शर्तें</a> Google पर लागू होती हैं।","trial.left":"बचे हुए प्रयास","trial.upgrade":"पूर्ण पैकेज में अपग्रेड करें","trial.warningLow":"इस महीने केवल {n} मुफ़्त प्रयास बचे हैं!","trial.warningLast":"यह इस महीने आपका आखिरी मुफ़्त प्रयास है!","copy":"कॉपी करें","download":"डाउनलोड करें","interview.desc":"अंत में विस्तृत प्रदर्शन मूल्यांकन के साथ एक वास्तविक मौखिक इंटरव्यू का अभ्यास करें।","interview.linkCv":"CV लिंक करें","interview.roleLabel":"लक्षित पद","interview.rolePh":"जैसे: रियल एस्टेट सेल्स, कस्टमर सर्विस, प्रोग्रामिंग...","interview.personaLabel":"इंटरव्यूअर का व्यक्तित्व","interview.start":"सत्र शुरू करें","interview.speaking":"इंटरव्यूअर बोल रहा है...","interview.inputPh":"माइक्रोफ़ोन में बोलें या यहाँ टाइप करें...","interview.reportHint":"मूल्यांकन आपके लिखित उत्तरों के साथ-साथ, यदि आपने माइक्रोफ़ोन का उपयोग किया, तो आपकी बोलने की गति और फ़िलर शब्दों का विश्लेषण करता है।","faq.desc":"पद और क्षेत्र लिखें, हम विश्वसनीय नमूना उत्तरों के साथ आम सवालों का एक असली बैंक तैयार करेंगे।","faq.rolePh":"जैसे: रियल एस्टेट सेल्स प्रतिनिधि","faq.run":"प्रश्न और उत्तर तैयार करें","career.desc":"अपनी वर्तमान स्थिति और लक्ष्य बताएं, हम एक व्यावहारिक विकास योजना बनाएंगे।","career.currentLabel":"आपकी वर्तमान स्थिति","career.currentPh":"जैसे: 1 साल के अनुभव वाला अकाउंटेंट","career.targetLabel":"आपका लक्ष्य","career.targetPh":"जैसे: डेटा एनालिटिक्स में जाना चाहता हूँ","career.contextPh":"अतिरिक्त उपयोगी विवरण - वैकल्पिक","career.run":"मेरी योजना बनाएं","cv.notice":"यह टूल कॉपी करने के लिए तैयार पेशेवर सीवी टेक्स्ट सामग्री बनाता है, LinkedIn जैसा डिज़ाइन किया गया PDF नहीं।","cv.photoHint":"वैकल्पिक फ़ोटो (केवल आपके ब्राउज़र में सेव होती है)।","cv.namePh":"पूरा नाम","cv.titlePh":"लक्षित पद","cv.expPh":"आपका कार्य अनुभव","cv.eduPh":"शिक्षा और प्रमाणपत्र","cv.skillsPh":"कौशल (कॉमा से अलग करें)","cv.run":"मेरा सीवी लिखें","pf.notice":"AI आपके क्षेत्र और प्रोजेक्ट्स के बारे में कुछ सरल सवाल पूछेगा ताकि कस्टम पोर्टफोलियो सामग्री तैयार कर सके।","pf.fieldPh":"आपका क्षेत्र (डिज़ाइनर, डेवलपर, मार्केटर...)","pf.start":"शुरू करें - AI मुझसे पूछे","pf.inputPh":"अपना जवाब यहाँ लिखें...","pf.generate":"काफ़ी सवाल हो गए - अब पोर्टफोलियो बनाएं","writing.notice":"भाषाई समीक्षा और अकादमिक फ़ॉर्मेटिंग सुझाव, टेक्स्ट सिफारिशों के रूप में जिन्हें आप Word में खुद लागू करते हैं।","writing.topicPh":"शोध विषय (वैकल्पिक)","writing.inputPh":"अपने शोध या लेख का टेक्स्ट यहाँ पेस्ट करें...","writing.run":"टेक्स्ट की समीक्षा करें","sum.desc":"किसी भी रिपोर्ट, लेख या व्याख्यान का सेकंडों में सारांश बनाएं।","sum.inputPh":"टेक्स्ट यहाँ पेस्ट करें...","sum.run":"अभी सारांश बनाएं","tr.notice":"आप AI से अपने-आप ट्रांसक्राइब होने के लिए तैयार ऑडियो फ़ाइल अपलोड कर सकते हैं, सीधे माइक से रिकॉर्ड कर सकते हैं, या तैयार टेक्स्ट पेस्ट कर सकते हैं।","tr.uploadBtn":"ऑडियो फ़ाइल अपलोड करें और ट्रांसक्राइब करें","tr.uploadHint":"अभी तक कोई फ़ाइल अपलोड नहीं हुई","tr.sourceLangLabel":"मूल भाषण की भाषा","tr.targetLangLabel":"अंतिम टेक्स्ट का अनुवाद करें (वैकल्पिक)","tr.micHint":"रिकॉर्ड करने के लिए दबाएं, ऊपर फ़ाइल अपलोड करें, या नीचे तैयार टेक्स्ट पेस्ट करें।","tr.rawPh":"कच्चा टेक्स्ट यहाँ दिखाई देगा...","tr.run":"साफ़ करें और फ़ॉर्मेट करें","pitch.notice":"अपने सेव किए गए CV और प्रोफ़ाइल से जुड़ा, लगभग 30 सेकंड का एक पेशेवर आत्म-परिचय तैयार करें।","pitch.purposeLabel":"आप इसे कहाँ इस्तेमाल करेंगे?","pitch.toneLabel":"बोलने का लहजा","pitch.rolePh":"लक्षित पद या क्षेत्र","pitch.highlightPh":"उजागर करने के लिए एक या दो मुख्य बिंदु - वैकल्पिक","pitch.run":"30-सेकंड पिच तैयार करें","profile.points":"पॉइंट्स","profile.namePh":"आपका पूरा नाम","profile.titlePh":"पद का नाम","profile.googleBtn":"Google से साइन इन करें","profile.googleHint":"साइन इन करने पर आपका नाम, फ़ोटो और पॉइंट्स इस डिवाइस पर सेव हो जाते हैं — मुफ़्त प्रयास खाते के अनुसार नहीं, डिवाइस के अनुसार गिने जाते हैं।","profile.save":"जानकारी सेव करें","profile.connected":"Google से जुड़ा हुआ","profile.logoutBtn":"लॉग आउट करें","profile.statUsage":"टूल इस्तेमाल की संख्या","profile.statDevice":"डिवाइस आईडी","profile.statPlan":"आपका वर्तमान पैकेज","profile.planFree":"मुफ़्त","subs.individualTitle":"व्यक्तिगत पैकेज","subs.individualDesc":"इंटरव्यू की तैयारी करने वाले या अपना करियर बनाने वाले हर किसी के लिए।","subs.basicName":"बेसिक","subs.perMonth":"/ माह","subs.proName":"प्रोफेशनल","subs.eliteName":"एलीट","subs.popular":"सबसे लोकप्रिय","subs.bestValue":"सर्वश्रेष्ठ मूल्य","subs.yearlyName":"वार्षिक","subs.perYear":"/ वर्ष","subs.subscribe":"अभी सब्सक्राइब करें","subs.teamTitle":"टीम और यूनिवर्सिटी पैकेज","subs.teamDesc":"कॉलेजों, यूनिवर्सिटीज़ और हायरिंग सेंटरों के लिए जो एक ग्रुप को बेहतर कीमत पर एक साथ प्रशिक्षित करना चाहते हैं।","subs.teamSmallName":"छोटी टीम","subs.teamSmallRange":"10 लोगों तक","subs.perSeat":"/ प्रति व्यक्ति / माह","subs.recommended":"यूनिवर्सिटीज़ के लिए अनुशंसित","subs.teamMedName":"बैच / कॉलेज","subs.teamMedRange":"11 से 100 लोग","subs.uniName":"यूनिवर्सिटी / बड़ा संगठन","subs.uniRange":"100 से अधिक लोग","subs.customPrice":"कस्टम मूल्य","subs.contactUs":"हमसे संपर्क करें","don.title":"प्लेटफ़ॉर्म को जारी रखने में मदद करें","don.desc":"अगर आप YUSR Pro के विकास में मदद करना चाहते हैं, तो आप नीचे दिए नंबरों के ज़रिए कोई भी राशि दान कर सकते हैं।","don.wallet":"मोबाइल वॉलेट","don.thanks":"हमारा साथ देने वाले हर व्यक्ति का बहुत-बहुत धन्यवाद।","sup.title":"सहायता और संपर्क","sup.desc":"कोई सवाल, समस्या या सुझाव है? हमसे सीधे संपर्क करें।","sup.phone":"सीधी कॉल","sup.hours":"हम आमतौर पर कुछ घंटों में जवाब देते हैं। तत्काल मामलों के लिए, WhatsApp सबसे तेज़ है।","legal.lastUpdated":"आखिरी अपडेट: अगस्त 2026","history.pageTitle":"एकीकृत इतिहास","history.subtitle":"साइट के किसी भी टूल के आखिरी 20 परिणाम (सारांश, समीक्षा, पत्र, आदि) यहाँ अपने आप सेव हो जाते हैं ताकि पेज बंद करने पर वे खो न जाएँ।","history.listTitle":"सेव किए गए परिणाम","history.clearAll":"सभी हटाएँ","history.empty":"अभी तक कोई सेव किया गया परिणाम नहीं है। साइट के टूल्स से मिलने वाला कोई भी परिणाम यहाँ अपने आप दिखाई देगा।","onboarding.title":"YUSR Pro में आपका स्वागत है 👋","onboarding.subtitle":"सही शुरुआत के लिए 3 तेज़ कदम:","onboarding.step1.title":"अपनी प्रोफ़ाइल पूरी करें","onboarding.step1.desc":"CV और इंटरव्यू जैसे अन्य टूल इसी डेटा का उपयोग करते हैं।","onboarding.step2.title":"एक मॉक इंटरव्यू आज़माएँ","onboarding.step2.desc":"असली सवालों पर ज़ोर से अभ्यास करें और तुरंत फीडबैक पाएं।","onboarding.step3.title":"अपनी CV बनाएँ","onboarding.step3.desc":"हम आपके सेव किए गए डेटा से मिनटों में एक पेशेवर CV बनाएंगे।","onboarding.tip":"टिप: साइडबार के ऊपर एक सर्च बॉक्स है जो आपको 20+ टूल्स में से किसी को भी जल्दी ढूँढने में मदद करता है।","onboarding.skip":"छोड़ें, मैं खुद देख लूँगा","about.pageTitle":"हमारे बारे में","about.tagline":"एक अरबी प्लेटफ़ॉर्म जिसे हम जुनून के साथ बना रहे हैं ताकि यह आपकी करियर यात्रा में आपका साथी बने।","about.missionLabel":"हमारा मिशन","about.missionBody":"हम मानते हैं कि हर कोई, चाहे उसकी पृष्ठभूमि या परिस्थितियां कैसी भी हों, आत्मविश्वास और अच्छी तैयारी के साथ सही अवसर पाने का हकदार है। \"YUSR Pro\" एक सरल विचार से जन्मा: अच्छी इंटरव्यू तैयारी या मज़बूत सीवी सिर्फ़ उन्हीं के लिए नहीं होनी चाहिए जिनके पास समय, पैसा या जान-पहचान है — अब AI यह गुणवत्ता किसी को भी, कभी भी उपलब्ध करा सकता है।","about.pillarsTitle":"हमें क्या प्रेरित करता है","about.pillar1Title":"असली मदद","about.pillar1Body":"सिर्फ़ टूल्स नहीं — हम हर फ़ीचर को नौकरी तलाशने वालों की असली समस्या हल करने के लिए डिज़ाइन करते हैं।","about.pillar2Title":"निरंतर विकास","about.pillar2Body":"हम आपके सुझाव सुनते हैं और लगातार जोड़ते और सुधारते रहते हैं — प्लेटफ़ॉर्म आपके साथ कदम-दर-कदम बढ़ता है।","about.pillar3Title":"आपकी सेवा में AI","about.pillar3Body":"हम आपको उच्च-गुणवत्ता वाला, व्यक्तिगत तैयारी अनुभव देने के लिए नवीनतम AI तकनीक का उपयोग करते हैं।","about.pillar4Title":"आपकी गोपनीयता सबसे पहले","about.pillar4Body":"आपका डेटा आपका है — हम इसे केवल आपको सेवा देने के लिए उपयोग या साझा करते हैं।","about.whyTitle":"YUSR Pro क्यों?","about.why1":"पूरी तरह अरबी में डिज़ाइन किया गया अनुभव जो आपकी बोली को समझता है।","about.why2":"इंटरव्यू से लेकर सीवी और पोर्टफोलियो तक, आपको ज़रूरत के हर टूल एक ही जगह।","about.why3":"सामान्य तारीफ़ नहीं, बल्कि ईमानदार, यथार्थवादी फीडबैक जो आपको बेहतर बनने में मदद करता है।","about.why4":"हम अपने उपयोगकर्ताओं की असली ज़रूरतों के आधार पर प्लेटफ़ॉर्म को लगातार विकसित करते रहते हैं।","about.closing":"YUSR को बेहतर बनाने का कोई विचार या सुझाव है? हम इसे सुनना पसंद करेंगे।","about.contactUs":"हमसे संपर्क करें","terms.pageTitle":"उपयोग की शर्तें","terms.betaNotice":"प्लेटफ़ॉर्म अभी बीटा चरण में है। \"सदस्यताएँ\" पेज फ़िलहाल ट्रायल पैकेज और कीमतें दिखाता है, बिना किसी कार्ड या खाते से वास्तविक कटौती के — जैसे ही असली भुगतान चालू होगा, हम ऐप में इसकी स्पष्ट घोषणा करेंगे।","terms.s1.title":"1. शर्तों की स्वीकृति","terms.s1.body":"\"YUSR Pro\" प्लेटफ़ॉर्म का उपयोग करके, आप इन शर्तों से सहमत होते हैं।","terms.s2.title":"2. सेवा की प्रकृति","terms.s2.body":"YUSR नौकरी तलाशने वालों को तैयार करने के लिए एक AI-संचालित प्लेटफ़ॉर्म है: वॉइस मॉक इंटरव्यू, सीवी और पोर्टफोलियो बनाना, अकादमिक लेखन समीक्षा, दस्तावेज़ सारांश, और ट्रांसक्रिप्शन। जवाब और सुझाव AI द्वारा जनरेट किए जाते हैं और केवल मार्गदर्शन के रूप में हैं, किसी परिणाम या नौकरी मिलने की गारंटी नहीं।","terms.s3.title":"3. खाता और अनुमत उपयोग","terms.s3.body":"आप प्लेटफ़ॉर्म को अतिथि के रूप में (स्वचालित अनाम पहचान के साथ) उपयोग कर सकते हैं, या अपना डेटा सेव करने के लिए Google खाते से साइन इन कर सकते हैं। आप अपने खाते से होने वाली किसी भी गतिविधि के लिए ज़िम्मेदार हैं। निषिद्ध: उचित उपयोग सीमाओं को दरकिनार करने की कोशिश, बड़े पैमाने पर स्वचालित अनुरोध (बॉट्स) भेजना, या सिस्टम के किसी अनधिकृत हिस्से तक पहुंचने की कोशिश।","terms.s4.title":"4. उचित उपयोग सीमाएँ","terms.s4.body":"सभी के लिए सेवा जारी रखने हेतु, AI टूल्स (चैट, ट्रांसक्रिप्शन, टेक्स्ट-टू-स्पीच) की एक दैनिक और मासिक उपयोग सीमा है। अगर आप सीमा तक पहुंच जाते हैं, तो आपको इसके फिर से शुरू होने का इंतज़ार करना होगा।","terms.s5.title":"5. आपकी सामग्री","terms.s5.body":"आपके द्वारा लिखी या अपलोड की गई कोई भी सामग्री (सीवी डेटा, पोर्टफोलियो, वॉइस रिकॉर्डिंग) आपकी ही रहती है। हम इसे केवल आपको सेवा देने के लिए प्रोसेस करते हैं, कभी किसी और उद्देश्य के लिए उपयोग या बेचते नहीं हैं।","terms.s6.title":"6. अस्वीकरण","terms.s6.body":"सेवा बिना किसी गारंटी के \"जैसी है वैसी\" प्रदान की जाती है। AI आउटपुट के आधार पर आप जो भी करियर या पेशेवर निर्णय लेते हैं, उसके लिए हम ज़िम्मेदार नहीं हैं, और हम हमेशा सलाह देते हैं कि किसी भी महत्वपूर्ण सामग्री का उपयोग करने से पहले उसे स्वयं जांच लें।","terms.s7.title":"7. बदलाव","terms.s7.body":"हम समय-समय पर इन शर्तों को अपडेट कर सकते हैं, और ऊपर दी गई \"आखिरी अपडेट\" तारीख़ को बदल सकते हैं। बदलाव के बाद प्लेटफ़ॉर्म का उपयोग जारी रखने का मतलब है कि आप नए संस्करण को स्वीकार करते हैं।","terms.s8.title":"8. संपर्क","terms.s8.body":"इन शर्तों के बारे में किसी भी सवाल के लिए, \"सहायता और संपर्क\" पेज के ज़रिए हमसे संपर्क करें।","privacy.pageTitle":"गोपनीयता नीति","privacy.s1.title":"1. डेटा कौन इकट्ठा करता है","privacy.s1.body":"\"YUSR Pro\" प्लेटफ़ॉर्म ही आपका डेटा इकट्ठा और प्रोसेस करता है, केवल एक उद्देश्य के लिए: आपके द्वारा उपयोग की जा रही सेवा प्रदान करना।","privacy.s2.title":"2. हम कौन-सा डेटा इकट्ठा करते हैं","privacy.s2.li1":"<b class=\"text-slate-200\">खाता डेटा:</b> अगर आप Google से साइन इन करते हैं, तो हम आपका नाम, फ़ोटो और ईमेल सीधे Google से लेते हैं। अगर आप अतिथि के रूप में प्रवेश करते हैं, तो हम आपको अन्य उपयोगकर्ताओं से अलग पहचानने के लिए केवल एक अनाम पहचान देते हैं।","privacy.s2.li2":"<b class=\"text-slate-200\">आपके द्वारा उपयोग की गई सामग्री:</b> सीवी डेटा, पोर्टफोलियो, आपके लिखे या सारांशित किए गए टेक्स्ट, और इंटरव्यू या ट्रांसक्रिप्शन टूल्स में अपलोड की गई वॉइस रिकॉर्डिंग।","privacy.s2.li3":"<b class=\"text-slate-200\">तकनीकी उपयोग डेटा:</b> आपने हर टूल का कितनी बार उपयोग किया (उचित उपयोग सीमाओं को लागू करने के लिए), जो आपके डिवाइस पर स्थानीय रूप से (localStorage) सेव होता है, जैसे \"बचे हुए प्रयास\"।","privacy.s3.title":"3. हम आपके डेटा का उपयोग कैसे करते हैं","privacy.s3.body":"हम आपके डेटा का उपयोग केवल इसलिए करते हैं: (a) AI टूल्स चलाने के लिए (हम आपके द्वारा अपलोड किए गए टेक्स्ट या ऑडियो को जवाब जनरेट करने के लिए विशेष प्रोसेसिंग कंपनियों को भेजते हैं, बिना आपकी कुंजी या लॉगिन डेटा उनके पास स्टोर किए), (b) आपकी प्रोफ़ाइल सेव करने के लिए ताकि आपके लौटने पर वह मौजूद रहे, (c) सेवा को बेहतर बनाने और दुरुपयोग रोकने के लिए।","privacy.s4.title":"4. आपका डेटा कौन देखता है (तीसरे पक्ष)","privacy.s4.li1":"<b class=\"text-slate-200\">Google Firebase:</b> साइन-इन और आपकी प्रोफ़ाइल को सुरक्षित रूप से स्टोर करने के लिए।","privacy.s4.li2":"<b class=\"text-slate-200\">AI Processing Service:</b> चैट और ट्रांसक्रिप्शन टूल्स में टेक्स्ट और ऑडियो प्रोसेस करने के लिए।","privacy.s4.li3":"<b class=\"text-slate-200\">Text-to-Speech Service:</b> टेक्स्ट-टू-स्पीच रूपांतरण के लिए।","privacy.s4.li4":"<b class=\"text-slate-200\">Cloudflare:</b> आपके ऐप और AI सेवाओं के बीच एक सुरक्षित तकनीकी माध्यम के रूप में, बिना आपका डेटा रखे।","privacy.s4.li5":"<b class=\"text-slate-200\">Web Search Service:</b> केवल वेतन अनुमान टूल में लाइव वेब खोज के लिए।","privacy.s4.note":"हम आपका डेटा कभी किसी को नहीं बेचते, और इसे कभी विज्ञापन उद्देश्यों के लिए साझा नहीं करते।","privacy.s5.title":"5. डेटा सुरक्षा","privacy.s5.body":"आपका डेटा सुरक्षा नियमों द्वारा सुरक्षित है जो सुनिश्चित करते हैं कि हर उपयोगकर्ता केवल अपना डेटा देख सके, और आपके ऐप और सर्वर के बीच सारा संचार एन्क्रिप्टेड (HTTPS) होता है।","privacy.s6.title":"6. आपके अधिकार","privacy.s6.body":"आप किसी भी समय अपना सेव किया गया डेटा देखने, संपादित करने, या इसे पूरी तरह डिलीट करने का अनुरोध कर सकते हैं, \"सहायता और संपर्क\" पेज के ज़रिए हमसे संपर्क करके।","privacy.s7.title":"7. बच्चे","privacy.s7.body":"यह सेवा 13 वर्ष से कम उम्र के किसी के लिए नहीं है, और हम जानबूझकर इस आयु वर्ग से डेटा इकट्ठा नहीं करते।","privacy.s8.title":"8. इस नीति में बदलाव","privacy.s8.body":"हम समय-समय पर इस नीति को अपडेट कर सकते हैं, और जब भी कोई महत्वपूर्ण बदलाव करेंगे तो ऊपर दी गई \"आखिरी अपडेट\" तारीख़ बदल देंगे।","assistant.botName":"यूसर प्रो बॉट","assistant.subtitle":"उससे लिखकर या आवाज़ में बात करें, और अगर उसे कुछ देखना हो तो एक फ़ोटो भेजें","assistant.inputPh":"अपना सवाल यहाँ लिखें...","assistant.attachImageTitle":"फ़ोटो जोड़ें","assistant.micTitle":"आवाज़ रिकॉर्डिंग","assistant.voiceToggleTitle":"जवाब की आवाज़ चालू/बंद करें","assistant.newChatTitle":"नई बातचीत शुरू करें","assistant.removeImageTitle":"तस्वीर हटाएँ","assistant.imageAlt":"जोड़ी गई तस्वीर","assistant.providerHint":"कई AI प्रदाताओं द्वारा संचालित — अगर एक व्यस्त हो, तो बिना एहसास दिलाए अपने आप दूसरे पर बदल जाता है।","assistant.emptyHint":"{bot} से लिखकर या आवाज़ में सवाल पूछें, या उसे देखने और जवाब देने के लिए एक तस्वीर भेजें।","assistant.defaultImageQuestion":"इस तस्वीर का विस्तार से वर्णन करें और बताएं इसमें क्या है।","interview.resumeBefore":"अभी भी एक इंटरव्यू सत्र चल रहा है (","interview.resumeAfter":")। क्या आप जारी रखना चाहते हैं या नया सत्र शुरू करना चाहते हैं?","interview.resume":"जारी रखें","interview.startNew":"नया शुरू करें","interview.voiceLabel":"इंटरव्यूअर की आवाज़","interview.voiceMale":"पुरुष आवाज़","interview.voiceFemale":"महिला आवाज़","interview.personaArLabel":"उत्कृष्ट अरबी","interview.personaEnLabel":"उत्कृष्ट अंग्रेज़ी","interview.screenshot":"बातचीत का स्क्रीनशॉट लें","interview.endTitle":"इंटरव्यू को स्थायी रूप से समाप्त करें और आर्काइव में सेव करें","interview.endBtn":"इंटरव्यू समाप्त करें","interview.endHint":"इंटरव्यू समाप्त करना अंतिम है — इसके बाद यह सत्र फिर से शुरू नहीं किया जा सकता। अगर आपको दूसरी भाषा या इंटरव्यूअर चाहिए, तो नया इंटरव्यू शुरू करें।","interview.stop":"रोकें","interview.micTitle":"अपनी आवाज़ से बोलें","interview.sendAria":"उत्तर भेजें","interview.evalTitle":"प्रदर्शन मूल्यांकन","cv.tabPlain":"सामान्य रिज़्यूमे (बिना फोटो)","cv.tabLinkedin":"लिंक्डइन स्टाइल (फोटो के साथ)","cv.plainNotice":"बिना किसी फोटो का सादा टेक्स्ट रिज़्यूमे — Word या कहीं और सीधे कॉपी करने के लिए तैयार पेशेवर टेक्स्ट।","cv.runPlain":"सामान्य रिज़्यूमे तैयार करें","cv.liNotice":"लिंक्डइन स्टाइल वर्शन: ऊपर एक प्रोफ़ाइल फोटो, फिर बिल्कुल लिंक्डइन जैसी संपर्क जानकारी की सूची, उसके बाद रिज़्यूमे की सामग्री।","cv.liPhotoAlt":"रिज़्यूमे फोटो","cv.liPhotoHint":"आपकी फोटो केवल आपके ब्राउज़र में सेव होती है और कहीं नहीं भेजी जाती।","cv.contactInfo":"संपर्क जानकारी","cv.phonePh":"फ़ोन नंबर","cv.emailPh":"ईमेल पता","cv.linkedinPh":"लिंक्डइन लिंक या पेशेवर प्रोफ़ाइल","cv.locationPh":"शहर / देश","cv.runLinkedin":"लिंक्डइन स्टाइल रिज़्यूमे तैयार करें","cv.exportFooter":"YUSR प्लेटफ़ॉर्म के ज़रिए बनाया गया","pf.screenshot":"स्क्रीनशॉट","pf.sendAria":"भेजें","common.auto2Text":"العربية","common.auto3Text":"اردو","common.auto4Text":"فارسی","common.emailVerifyResendBtnText":"दोबारा भेजें","common.emailVerifyRecheckBtnText":"मैंने सत्यापित कर दिया, स्थिति अपडेट करें","faq.auto1Text":"8 प्रश्न","faq.auto2Text":"12 प्रश्न","faq.auto3Text":"18 प्रश्न","faq.auto4Text":"नया स्नातक / एक साल से कम अनुभव","faq.auto5Text":"मध्य स्तर (Mid-level)","faq.auto6Text":"सीनियर / व्यापक अनुभव","faq.auto7Text":"प्रबंधकीय / नेतृत्व स्तर (Manager+)","career.auto1Text":"योजना की लंबाई","career.auto2Text":"पूर्ण विस्तृत योजना (सभी चरण और विवरण)","career.auto3Text":"त्वरित, स्पष्ट सारांश (केवल मुख्य बिंदु, बिना विस्तार के)","videoMock.auto1Text":"कैमरे के सामने बोलने के लिए कुछ तैयार करें","videoMock.auto2Text":"कैमरा खोलकर उलझने के बजाय, एक मोड चुनें और आपको जवाब देने के लिए एक विशिष्ट सवाल मिलेगा, या स्पष्ट रूप से पढ़ने का अभ्यास करने के लिए तैयार टेक्स्ट मिलेगा — फिर जवाब देते हुए खुद को रिकॉर्ड करें।","videoMock.auto3Text":"एक साक्षात्कार प्रश्न जिसका मैं ज़ोर से उत्तर दूँगा","videoMock.auto4Text":"स्पष्ट रूप से पढ़ने का अभ्यास करने के लिए तैयार टेक्स्ट","videoMock.auto5Text":"मुझे एक और दें","videoMock.auto6Text":"कैमरे के सामने अभ्यास करें","videoMock.videoMockStatusText":"\"कैमरा शुरू करें\" दबाएँ और आपका ब्राउज़र कैमरा और माइक्रोफ़ोन की अनुमति माँगेगा — फिर आप एक क्लिप रिकॉर्ड करके समीक्षा के लिए डाउनलोड कर सकते हैं।","videoMock.auto7Text":"साक्षात्कार शेड्यूलिंग ईमेल सिमुलेशन","videoMock.auto8Text":"एक \"भर्तीकर्ता\" की ओर से एक वास्तविक ईमेल तैयार किया जाएगा जो आपसे तारीख़/स्थान या ऑनलाइन साक्षात्कार लिंक की पुष्टि माँगेगा, और कभी-कभी आपकी वेतन अपेक्षाएँ — पेशेवर तरीक़े से जवाब देने का अभ्यास करें।","videoMock.auto9Text":"तारीख़ और स्थान की पुष्टि (व्यक्तिगत रूप से)","videoMock.auto10Text":"ऑनलाइन साक्षात्कार अपॉइंटमेंट की पुष्टि","videoMock.auto11Text":"वेतन अपेक्षाओं के बारे में सवाल","videoMock.auto12Text":"अचानक शेड्यूल टकराव/बदलाव","videoMock.auto13Text":"तत्काल ईमेल (एक दिन में जवाब दें)","videoMock.auto14Text":"बहुत औपचारिक लहजा","videoMock.auto15Text":"दोस्ताना, आरामदायक लहजा","videoMock.auto16Text":"तत्काल, समय-दबाव वाला लहजा","videoMock.auto17Text":"नौकरी के वेतन के लिए उपयुक्त अनुवर्ती प्रश्न","videoMock.auto18Text":"साक्षात्कार के लिए उपयुक्त पहनावे और रूप-रंग के सुझाव","videoMock.auto19Text":"औपचारिक कार्यालय वातावरण (बैंक/बड़ी कंपनियाँ)","videoMock.auto20Text":"स्टार्टअप / युवा, अनौपचारिक माहौल","videoMock.auto21Text":"ग्राहकों के साथ प्रत्यक्ष संपर्क","videoMock.auto22Text":"रचनात्मक क्षेत्र","videoMock.auto23Text":"ऑनलाइन साक्षात्कार (वीडियो कॉल)","videoMock.auto24Text":"रूढ़िवादी खाड़ी कार्य वातावरण","videoMock.auto25Text":"पुरुषों और महिलाओं दोनों के लिए सुझाव","videoMock.auto26Text":"केवल पुरुषों के लिए सुझाव","videoMock.auto27Text":"केवल महिलाओं के लिए सुझाव","salary.auto1Text":"जैसे ही आप \"अनुमान लगाएं\" दबाते हैं, यह टूल जॉब मार्केट के लिए लाइव वेब परिणाम खोजता है, और एआई की समझ के साथ उस पर अनुमान बनाता है — यह कोई आधिकारिक डेटा या 100% सटीक बाज़ार सर्वेक्षण नहीं है — इसे बातचीत के लिए एक शुरुआती बिंदु के रूप में उपयोग करें, अंतिम आंकड़े के रूप में नहीं।","salary.auto2Text":"मिस्र","salary.auto3Text":"सऊदी अरब","salary.auto4Text":"संयुक्त अरब अमीरात","salary.auto5Text":"सामान्यतः खाड़ी देश","salary.auto6Text":"विदेशी कंपनियों के लिए रिमोट","progress.auto1Text":"आपका साक्षात्कार संग्रह: हर साक्षात्कार अलग रहने के बजाय, एक ही पेज \"वॉइस मॉक इंटरव्यू\" से आपके सभी साक्षात्कार, उनकी ट्रांसक्रिप्ट और प्रदर्शन रिपोर्ट इकट्ठा करता है और समय के साथ आपकी प्रगति दिखाता है।","progress.auto2Text":"आगामी साक्षात्कार के लिए अनुस्मारक","progress.auto3Text":"अनुस्मारक सहेजें","progress.progressReminderEnableBtnText":"वास्तविक ब्राउज़र पुश नोटिफिकेशन चालू करें","progress.progressReminderStatusText":"अगर आप समय तय करते हैं, तो आपको साक्षात्कार के ठीक समय पर (लगभग 5 मिनट के अंतर से) एक सूचना मिलेगी, साथ ही दो दिन पहले एक अनुस्मारक भी। जब तक आपने सूचना की अनुमति दी है और ब्राउज़र चल रहा है (भले ही टैब आपके सामने न हो) — फिर भी ब्राउज़र का खुला होना ज़रूरी है, पूरी तरह बंद होने पर यह नहीं पहुँचेगी।","progress.auto4Text":"पिछले सत्रों का रिकॉर्ड","progress.auto5Text":"दोनों सत्रों की तुलना करें","match.auto1Text":"नौकरी का विवरण और अपना सीवी पेस्ट करें, हम आपको एक अनुमानित मिलान प्रतिशत, विशिष्ट कमज़ोर बिंदु और ATS फ़िल्टर पार करने में मदद करने वाले गायब कीवर्ड देंगे।","match.auto2Text":"आपकी सीवी","match.auto3Text":"सहेजी गई सीवी का उपयोग करें","match.auto4Text":"नौकरी का विवरण","cover.auto1Text":"औपचारिक नौकरी-खोज पत्राचार के लिए समर्पित: सीवी के साथ संलग्न एक कवर लेटर, साक्षात्कार के बाद धन्यवाद नोट, या वेतन प्रस्ताव का जवाब।","cover.auto2Text":"मौजूदा सीवी से डेटा आयात करें (वैकल्पिक)","cover.auto3Text":"अपनी सीवी को कैमरे से फ़ोटो लें या उसकी तस्वीर/स्क्रीनशॉट अपलोड करें, एआई इसे पढ़कर मुख्य डेटा निकालेगा और उसी पर पत्र बनाएगा।","cover.auto4Text":"सीवी छवि अपलोड करें","cover.auto5Text":"अभी सीवी की फ़ोटो लें","cover.auto6Text":"सीवी के साथ संलग्न कवर लेटर","cover.auto7Text":"साक्षात्कार के बाद धन्यवाद और फ़ॉलो-अप नोट","cover.auto8Text":"वेतन प्रस्ताव का जवाब / वेतन बातचीत","writing.auto1Text":"वर्तनी और व्याकरण जांच","writing.auto2Text":"शैक्षणिक प्रारूपण (APA)","writing.auto3Text":"शैक्षणिक प्रारूपण (Harvard)","summarizer.auto1Text":"बहुत छोटा सारांश (त्वरित समझ)","summarizer.auto2Text":"बुलेट पॉइंट्स","summarizer.auto3Text":"एक अनुच्छेद","summarizer.auto4Text":"शीर्षकों के साथ आयोजित विस्तृत सारांश","tr.auto1Text":"🔎 भाषा का स्वतः पता लगाना","tr.auto2Text":"العربية","tr.auto3Text":"اردو","tr.auto4Text":"فارسی","tr.auto5Text":"कोई अनुवाद नहीं - वही भाषा","tr.auto6Text":"العربية","pitch.auto1Text":"व्यक्तिगत साक्षात्कार की शुरुआत","pitch.auto2Text":"परिचयात्मक वीडियो (LinkedIn / पोर्टफ़ोलियो)","pitch.auto3Text":"किसी कंपनी से ठंडा संपर्क (नेटवर्किंग)","pitch.auto4Text":"फ़ोन कॉल की शुरुआत / अचानक मिला अवसर","pitch.auto5Text":"औपचारिक, शांत और पेशेवर","pitch.auto6Text":"उत्साही और ऊर्जावान","pitch.auto7Text":"सरल, मित्रवत, सहज","pitch.auto8Text":"टेक्स्ट सुनें और समय मापें","pitch.auto10Text":"पहले अपनी सीवी बनाएं","pitch.auto11Text":"वॉइस इंटरव्यू के साथ अभ्यास करें","profile.auto2Text":"बदलें","profile.auto3Text":"सीवी","profile.auto4Text":"पोर्टफ़ोलियो","profile.auto5Text":"प्रगति ट्रैकिंग","profile.auto6Text":"पैकेज","profile.profileStatPrivacyText":"सुरक्षित","profile.auto7Text":"आपके खाते की स्थिति","profile.auto8Text":"लॉगिन खाता","profile.auto9Text":"आपके खाते का अवलोकन","profile.auto10Text":"आपका वर्तमान पैकेज","profile.auto11Text":"सब्सक्रिप्शन/खरीद की संख्या","profile.auto12Text":"सब्सक्रिप्शन और खरीद इतिहास","profile.auto13Text":"एक पैकेज सब्सक्राइब करें","profile.auto14Text":"आपके पैकेज का ऑटो-रिन्यूअल रोक दिया गया है, और आप वर्तमान अवधि के अंतिम दिन तक इसका सामान्य रूप से लाभ उठाते रहेंगे।","profile.auto15Text":"रद्दीकरण वापस लें","profile.auto16Text":"अपने वर्तमान पैकेज को जारी नहीं रखना चाहते?","profile.cancelSubBtnText":"सदस्यता रद्द करें","profile.auto17Text":"गोपनीयता और आपका डेटा","profile.auto18Text":"आपके प्रोफ़ाइल डेटा, प्रशिक्षण इतिहास और उपयोग लॉग मुख्यतः आपके डिवाइस (ब्राउज़र) पर संग्रहीत होते हैं, और यदि आपने Google से साइन इन किया है तो एक प्रति आपके खाते के साथ सिंक हो जाती है ताकि आप इसे किसी भी डिवाइस से पा सकें। सीवी की फ़ोटो और ऑडियो/वीडियो फ़ाइलें केवल उपयोग के समय प्रोसेसिंग के लिए भेजी जाती हैं और सर्वर पर स्थायी रूप से संग्रहीत नहीं होतीं।","profile.auto19Text":"पासवर्ड बदलें","profile.auto20Text":"केवल इस डिवाइस पर सहेजा गया मेरा डेटा हटाएं","profile.auto21Text":"खतरे का क्षेत्र","profile.auto22Text":"अपना खाता हटाने से यह हमारी तरफ़ से स्थायी रूप से मिट जाता है: आपका डेटा, सब्सक्रिप्शन और सर्वर पर उपयोग लॉग (केवल इस डिवाइस पर नहीं) - यह एक अंतिम कार्रवाई है जिसे वापस नहीं लिया जा सकता।","profile.deleteAccountBtnText":"मेरा खाता स्थायी रूप से हटाएं","profile.auto23Text":"आपकी सदस्यता","profile.auto24Text":"कुल भुगतान","profile.auto25Text":"पैकेज अपग्रेड करें","profile.auto26Text":"त्वरित सुझाव","profile.auto27Text":"अपना डेटा और फ़ोटो पूरा करें ताकि आपकी सीवी और पोर्टफ़ोलियो बेहतर दिखें, और आप \"प्रगति ट्रैकिंग\" पेज से सटीक रूप से अपनी प्रगति ट्रैक कर सकें।","subscriptions.auto1Text":"EGP","subscriptions.auto2Text":"प्रति माह 25 एआई अनुरोध","subscriptions.auto3Text":"सीवी निर्माण और दस्तावेज़ सारांश","subscriptions.auto4Text":"EGP","subscriptions.auto5Text":"प्रति माह 150 एआई अनुरोध","subscriptions.auto6Text":"विस्तृत प्रदर्शन रिपोर्ट","subscriptions.auto7Text":"संपादन + सभी भाषाओं में ऑडियो ट्रांसक्रिप्शन","subscriptions.auto8Text":"EGP","subscriptions.auto9Text":"पूरी तरह असीमित एआई अनुरोध","subscriptions.auto10Text":"बिना किसी अपवाद के सभी प्लेटफ़ॉर्म टूल","subscriptions.auto11Text":"EGP","subscriptions.auto12Text":"सभी प्रोफेशनल सुविधाएँ","subscriptions.auto13Text":"दो महीने मुफ़्त","subscriptions.auto14Text":"EGP","subscriptions.auto15Text":"प्रोफेशनल पैकेज की सभी सुविधाएँ","subscriptions.auto16Text":"टीम प्रगति ट्रैकिंग डैशबोर्ड","subscriptions.auto17Text":"EGP","subscriptions.auto18Text":"सभी छात्रों के लिए सभी प्रोफेशनल सुविधाएँ","subscriptions.auto19Text":"बैच सुपरवाइज़र के लिए सामूहिक रिपोर्ट","subscriptions.auto20Text":"मुफ़्त परिचयात्मक प्रशिक्षण सत्र","subscriptions.auto21Text":"सभी सुविधाएँ + पूर्ण अनुकूलन","subscriptions.auto22Text":"विश्वविद्यालय के लिए समर्पित खाता प्रबंधक","support.auto1Text":"कोई सुझाव, शिकायत या सवाल है?","support.auto2Text":"सुझाव","support.auto3Text":"शिकायत","support.auto4Text":"सवाल","support.auto5Text":"भेजें","pwaIosModal.auto2Text":"iPhone पर ऐप इंस्टॉल करें","pwaIosModal.auto3Text":"तब तक स्क्रॉल करें जब तक आपको \"होम स्क्रीन पर जोड़ें\" न मिले।","pwaIosModal.auto4Text":"ऊपर \"जोड़ें\" पर टैप करें — आपको अपनी होम स्क्रीन पर YUSR Pro आइकन किसी भी सामान्य ऐप की तरह मिलेगा।","pwaIosModal.auto5Text":"ठीक है, समझ गया","pricing.auto2Text":"अपना पैकेज चुनें","pricing.auto3Text":"मंच के सभी टूल एक ही जगह - साक्षात्कार, सीवी, पोर्टफ़ोलियो, शैक्षणिक प्रूफ़रीडिंग, ऑडियो ट्रांसक्रिप्शन, और बहुत कुछ।","pricing.auto4Text":"बेसिक","pricing.auto5Text":"/ माह","pricing.auto6Text":"प्रति माह 25 एआई अनुरोध (साक्षात्कार, सीवी, सभी टूल)","pricing.auto7Text":"सीवी निर्माण और दस्तावेज़ सारांश","pricing.auto8Text":"हर नौकरी के लिए सामान्य प्रश्न","pricing.auto9Text":"साइट चैट के माध्यम से सहायता","pricing.auto10Text":"बेसिक सब्सक्राइब करें","pricing.auto11Text":"सबसे लोकप्रिय","pricing.auto12Text":"प्रोफेशनल","pricing.auto13Text":"/ माह","pricing.auto14Text":"प्रति माह 150 एआई अनुरोध (लगभग रोज़ाना अभ्यास के लिए पर्याप्त)","pricing.auto15Text":"हर साक्षात्कार के बाद विस्तृत प्रदर्शन रिपोर्ट","pricing.auto16Text":"अनुकूलित करियर विकास योजनाएँ","pricing.auto17Text":"पोर्टफ़ोलियो + शैक्षणिक प्रूफ़रीडिंग","pricing.auto18Text":"सभी उपलब्ध भाषाओं में ऑडियो ट्रांसक्रिप्शन","pricing.auto19Text":"प्राथमिकता तकनीकी सहायता","pricing.auto20Text":"प्रोफेशनल सब्सक्राइब करें","pricing.auto21Text":"सर्वश्रेष्ठ मूल्य","pricing.auto22Text":"एलीट","pricing.auto23Text":"/ माह","pricing.auto24Text":"बिना किसी मासिक सीमा के पूरी तरह असीमित एआई अनुरोध","pricing.auto25Text":"बिना किसी अपवाद के सभी प्लेटफ़ॉर्म टूल","pricing.auto26Text":"सहायता टीम से सर्वोच्च प्राथमिकता वाला जवाब","pricing.auto27Text":"एलीट सब्सक्राइब करें","pricing.auto28Text":"वार्षिक","pricing.auto29Text":"/ वर्ष","pricing.auto30Text":"सभी प्रोफेशनल सुविधाएँ (पूरे साल प्रति माह 150 अनुरोध)","pricing.auto31Text":"मासिक सदस्यता की तुलना में लगभग दो महीने बचाएं","pricing.auto32Text":"साल में एक बार करियर विकास परामर्श","pricing.auto33Text":"वार्षिक सब्सक्राइब करें","pricing.auto34Text":"बंद करें","cvBuildModal.auto1Text":"साक्षात्कार से सीवी डेटा लिंक करें","cvBuildModal.auto2Text":"अपना अनुभव पाठ पेस्ट करें ताकि प्रश्न उसी के अनुसार तैयार हों:","cvBuildModal.auto3Text":"सहेजें","cvBuildModal.auto4Text":"रद्द करें","reportModal.auto1Text":"विस्तृत प्रदर्शन रिपोर्ट","termsGate.auto1Text":"शुरू करने से पहले","termsGate.auto2Text":"मैंने उपयोग की शर्तें और गोपनीयता नीति पढ़ ली है और उनसे सहमत हूँ।","termsGate.termsGateContinueText":"जारी रखें","paymentRequest.auto1Text":"सदस्यता पूरी करें","paymentRequest.auto3Text":"पैकेज की राशि Vodafone Cash या InstaPay के ज़रिए इस नंबर पर ट्रांसफ़र करें:","paymentRequest.auto5Text":"ट्रांसफ़र के बाद नीचे अपनी जानकारी भरें और अनुरोध भेजें — ट्रांसफ़र की समीक्षा के बाद कुछ घंटों में पैकेज मैन्युअली आपके खाते पर सक्रिय कर दिया जाएगा।","paymentRequest.prSubmitBtnText":"ट्रांसफ़र हो गया, अनुरोध भेजें","cancelSub.auto1Text":"बस ऑटो-रिन्यूअल रोक दिया जाएगा - आप इस अवधि के अंतिम दिन तक अपने वर्तमान पैकेज के सभी लाभ सामान्य रूप से पाते रहेंगे, जिसके बाद आप स्वतः मुफ़्त पैकेज पर लौट आएंगे। आप अवधि समाप्त होने से पहले किसी भी समय रद्दीकरण वापस ले सकते हैं।","cancelSub.auto2Text":"वापस लें","cancelSub.cancelSubConfirmBtnText":"रद्दीकरण की पुष्टि करें","videoMock.videoMockTopicPh":"नौकरी या विषय (उदा: ग्राहक सेवा)","videoMock.videoEmailRolePh":"जिस नौकरी के लिए आवेदन कर रहे हैं (उदा: अकाउंटेंट)","videoMock.videoEmailReplyPh":"यहाँ ईमेल का अपना जवाब लिखें...","videoMock.videoSalaryQRolePh":"नौकरी (यदि ऊपर लिखा हो तो वैकल्पिक)","salary.salaryRolePh":"पद का नाम (उदा: ग्राफ़िक डिज़ाइनर)","salary.salaryExperiencePh":"अनुभव के वर्ष (उदा: 3 वर्ष)","match.cvMatchResumePh":"अपनी सीवी का टेक्स्ट यहाँ पेस्ट करें, या ऊपर 'सीवी लिंक करें' पर क्लिक करें...","match.cvMatchJobdescPh":"नौकरी की पोस्टिंग का टेक्स्ट यहाँ पेस्ट करें...","cover.coverCvExtractPh":"सीवी छवि से निकाला गया डेटा यहाँ दिखेगा, आगे बढ़ने से पहले आप इसे संपादित कर सकते हैं","cover.coverRolePh":"जिस पद के लिए आवेदन कर रहे हैं","cover.coverCompanyPh":"कंपनी का नाम (वैकल्पिक)","cover.coverNotesPh":"एक या दो मुख्य बिंदु जिन्हें आप उजागर करना चाहते हैं (अनुभव, उपलब्धि, कंपनी में रुचि की वजह...) - वैकल्पिक","support.fbContactPh":"संपर्क के लिए मोबाइल नंबर या ईमेल (वैकल्पिक)","support.fbMessagePh":"अपना संदेश यहाँ लिखें...","cvBuildModal.cvTextInputPh":"अपने अनुभव का टेक्स्ट यहाँ दर्ज करें...","paymentRequest.prNamePh":"नाम","paymentRequest.prPhonePh":"वह मोबाइल नंबर जिससे आपने ट्रांसफ़र किया","paymentRequest.prRefPh":"लेन-देन के अंतिम अंक या एक नोट (वैकल्पिक)","common.themeToggleBtnTitle":"लाइट मोड में बदलें","assistant.assistantGenderToggleBtnTitle":"जवाब की आवाज़: पुरुष","common.themeToggleBtnAria":"लाइट मोड में बदलें","tr.transcribeMicBtnAria":"ट्रांसक्रिप्शन के लिए वॉइस रिकॉर्डिंग","pitch.auto9Aria":"वॉइस रीडिंग रोकें","profile.auto1Aria":"प्रोफ़ाइल फ़ोटो बदलें","profile.profilePhotoInputAria":"प्रोफ़ाइल फ़ोटो अपलोड करें","profile.profileNameAria":"आपका पूरा नाम","profile.profileTitleAria":"पद का नाम","donations.auto1Aria":"नंबर कॉपी करें","donations.auto2Aria":"नंबर कॉपी करें","donations.auto3Aria":"नंबर कॉपी करें","pwaIosModal.auto1Aria":"बंद करें","pricing.auto1Aria":"वापस","reportModal.auto2Aria":"बंद करें","paymentRequest.auto2Aria":"बंद करें","paymentRequest.auto4Aria":"नंबर कॉपी करें","profile.profilePhotoPreviewAlt":"प्रोफ़ाइल फ़ोटो","profile.signedinAvatarImgAlt":"खाता फ़ोटो"
        },
        ur: {
            "nav.searchPh":"ٹولز تلاش کریں...","nav.searchEmpty":"کوئی مماثل ٹول نہیں","nav.section.interviews":"انٹرویوز اور ملازمت","nav.interview":"صوتی مشقی انٹرویو","nav.faq":"عمومی سوالات + نمونہ جوابات","nav.career":"کیریئر ترقی کا منصوبہ","nav.section.documents":"دستاویزات","nav.cv":"سی وی بنانے کا آلہ","nav.portfolio":"ذاتی پورٹ فولیو","nav.writing":"تعلیمی تحریر کا جائزہ","nav.summarizer":"دستاویز کا خلاصہ","nav.section.audio":"آڈیو اور ویڈیو","nav.transcribe":"آواز کو تحریر میں بدلنا","nav.pitch":"30 سیکنڈ سیلف پچ","nav.section.account":"اکاؤنٹ اور معاونت","nav.about":"ہمارے بارے میں","nav.history":"متحدہ ہسٹری","nav.profile":"پروفائل","nav.subscriptions":"سبسکرپشنز","nav.donations":"عطیات","nav.support":"معاونت اور رابطہ","nav.section.legal":"قانونی","nav.terms":"استعمال کی شرائط","nav.privacy":"رازداری کی پالیسی","nav.section.ai":"مصنوعی ذہانت","nav.videoMock":"ویڈیو مقابلہ سمیولیٹر","nav.salary":"متوقع تنخواہ کا تخمینہ","nav.progress":"پیش رفت کی نگرانی","nav.match":"سی وی اور ملازمت میچنگ","nav.cover":"ملازمت خط جنریٹر","nav.closeMenu":"مینو بند کریں","nav.clearSearch":"تلاش صاف کریں","nav.openMenu":"مینو کھولیں","pwa.title":"YUSR Pro کو ایپ کے طور پر ڈاؤن لوڈ کریں","pwa.desc":"آپ کی ہوم اسکرین پر ایک آئیکن، جو کسی بھی عام ایپ کی طرح کھلتا ہے","pwa.installBtn":"ایپ انسٹال کریں","pwa.hideAria":"انسٹال تجویز چھپائیں","hide":"چھپائیں","apk.title":"ہماری اینڈرائیڈ ایپ آزمائیں 📱","apk.desc":"براؤزر سے تیز اور آسان — اسے براہ راست یہاں سے ڈاؤن لوڈ کریں","apk.hideAria":"ایپ تجویز چھپائیں","apk.downloadBtn":"ابھی YUSR Pro ایپ ڈاؤن لوڈ کریں","trial.headerTitle":"اس مہینے باقی مفت کوششیں","support.techLabel":"تکنیکی معاونت","account.guest":"مہمان (یہ ڈیوائس)","account.signinHint":"اپنی تصویر اور پوائنٹس محفوظ کرنے کے لیے گوگل سے سائن ان کریں","authgate.title":"سائن ان کریں","authgate.subtitle":"سائٹ استعمال کرنے کے لیے آپ کو گوگل یا اپنی ای میل سے سائن ان کرنا ہوگا۔","authgate.googleBtn":"گوگل سے سائن ان کریں","authgate.orEmail":"یا ای میل سے","authgate.tabLogin":"لاگ ان کریں","authgate.tabSignup":"اکاؤنٹ بنائیں","authgate.namePh":"آپ کا مکمل نام","authgate.emailPh":"ای میل","authgate.passwordPh":"پاس ورڈ","authgate.confirmPh":"پاس ورڈ کی تصدیق کریں","authgate.submitLogin":"لاگ ان کریں","authgate.submitSignup":"اکاؤنٹ بنائیں","authgate.privacyNote":"آپ کا ڈیٹا محفوظ طریقے سے سیو کیا جاتا ہے، اور آپ کا پاس ورڈ خفیہ ہے — یہاں تک کہ ہم بھی اسے نہیں دیکھ سکتے۔","authgate.recaptchaNote":"یہ سائٹ reCAPTCHA سے محفوظ ہے، اور گوگل کی <a href=\\\"https://policies.google.com/privacy\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" style=\\\"color:inherit;text-decoration:underline;\\\">پرائیویسی پالیسی</a> اور <a href=\\\"https://policies.google.com/terms\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" style=\\\"color:inherit;text-decoration:underline;\\\">سروس کی شرائط</a> لاگو ہوتی ہیں۔","trial.left":"باقی ماندہ کوششیں","trial.upgrade":"مکمل پیکیج میں اپ گریڈ کریں","trial.warningLow":"اس مہینے صرف {n} مفت کوششیں باقی ہیں!","trial.warningLast":"یہ اس مہینے آپ کی آخری مفت کوشش ہے!","copy":"کاپی کریں","download":"ڈاؤن لوڈ کریں","interview.desc":"آخر میں تفصیلی کارکردگی کے جائزے کے ساتھ ایک حقیقی زبانی انٹرویو کی مشق کریں۔","interview.linkCv":"سی وی منسلک کریں","interview.roleLabel":"مطلوبہ عہدہ","interview.rolePh":"مثلاً: رئیل اسٹیٹ سیلز، کسٹمر سروس، پروگرامنگ...","interview.personaLabel":"انٹرویو لینے والے کی شخصیت","interview.start":"سیشن شروع کریں","interview.speaking":"انٹرویو لینے والا بول رہا ہے...","interview.inputPh":"مائیکروفون میں بولیں یا یہاں لکھیں...","interview.reportHint":"جائزہ آپ کے تحریری جوابات کے ساتھ ساتھ، اگر آپ نے مائیک استعمال کیا ہو تو بولنے کی رفتار اور بھرتی الفاظ کا تجزیہ کرتا ہے۔","faq.desc":"عہدہ اور شعبہ لکھیں، ہم قائل کن نمونہ جوابات کے ساتھ عام سوالات کا ایک حقیقی ذخیرہ تیار کریں گے۔","faq.rolePh":"مثلاً: رئیل اسٹیٹ سیلز نمائندہ","faq.run":"سوالات اور جوابات تیار کریں","career.desc":"ہمیں اپنی موجودہ صورتحال اور مقصد بتائیں، ہم ایک عملی ترقیاتی منصوبہ بنائیں گے۔","career.currentLabel":"آپ کی موجودہ صورتحال","career.currentPh":"مثلاً: 1 سال کے تجربے والا اکاؤنٹنٹ","career.targetLabel":"آپ کا مقصد","career.targetPh":"مثلاً: ڈیٹا اینالیٹکس میں جانا چاہتا ہوں","career.contextPh":"اضافی مفید تفصیلات - اختیاری","career.run":"میرا منصوبہ بنائیں","cv.notice":"یہ آلہ کاپی کرنے کے لیے تیار پیشہ ورانہ سی وی متن مواد بناتا ہے، LinkedIn جیسی ڈیزائن شدہ PDF نہیں۔","cv.photoHint":"اختیاری تصویر (صرف آپ کے براؤزر میں محفوظ ہوتی ہے)۔","cv.namePh":"مکمل نام","cv.titlePh":"مطلوبہ عہدہ","cv.expPh":"آپ کا کام کا تجربہ","cv.eduPh":"تعلیم اور سرٹیفکیٹس","cv.skillsPh":"مہارتیں (کوما سے الگ کریں)","cv.run":"میری سی وی لکھیں","pf.notice":"AI آپ کے شعبے اور پروجیکٹس کے بارے میں چند آسان سوالات پوچھے گا تاکہ حسبِ ضرورت پورٹ فولیو مواد تیار کر سکے۔","pf.fieldPh":"آپ کا شعبہ (ڈیزائنر، ڈویلپر، مارکیٹر...)","pf.start":"شروع کریں - AI مجھ سے پوچھے","pf.inputPh":"اپنا جواب یہاں لکھیں...","pf.generate":"کافی سوالات ہو گئے - اب پورٹ فولیو بنائیں","writing.notice":"لسانی جائزہ اور تعلیمی فارمیٹنگ کی تجاویز، متن کی سفارشات کی شکل میں جنہیں آپ خود Word میں لاگو کرتے ہیں۔","writing.topicPh":"تحقیقی موضوع (اختیاری)","writing.inputPh":"اپنی تحقیق یا مضمون کا متن یہاں چسپاں کریں...","writing.run":"متن کا جائزہ لیں","sum.desc":"کسی بھی رپورٹ، مضمون یا لیکچر کا سیکنڈوں میں خلاصہ بنائیں۔","sum.inputPh":"متن یہاں چسپاں کریں...","sum.run":"ابھی خلاصہ بنائیں","tr.notice":"آپ AI سے خودکار طور پر تحریر میں بدلنے کے لیے تیار آڈیو فائل اپ لوڈ کر سکتے ہیں، براہ راست مائیک سے ریکارڈ کر سکتے ہیں، یا تیار متن چسپاں کر سکتے ہیں۔","tr.uploadBtn":"آڈیو فائل اپ لوڈ کریں اور خودکار تحریر بنائیں","tr.uploadHint":"ابھی تک کوئی فائل اپ لوڈ نہیں ہوئی","tr.sourceLangLabel":"اصل بولی جانے والی زبان","tr.targetLangLabel":"حتمی متن کا ترجمہ کریں (اختیاری)","tr.micHint":"ریکارڈ کرنے کے لیے دبائیں، اوپر فائل اپ لوڈ کریں، یا نیچے تیار متن چسپاں کریں۔","tr.rawPh":"خام متن یہاں ظاہر ہوگا...","tr.run":"صاف کریں اور فارمیٹ کریں","pitch.notice":"اپنی محفوظ شدہ CV اور پروفائل سے منسلک، تقریباً 30 سیکنڈ کا پیشہ ورانہ خود تعارف تیار کریں۔","pitch.purposeLabel":"آپ اسے کہاں استعمال کریں گے؟","pitch.toneLabel":"بات کرنے کا انداز","pitch.rolePh":"مطلوبہ عہدہ یا شعبہ","pitch.highlightPh":"نمایاں کرنے کے لیے ایک یا دو اہم نکات - اختیاری","pitch.run":"30 سیکنڈ پچ تیار کریں","profile.points":"پوائنٹس","profile.namePh":"آپ کا مکمل نام","profile.titlePh":"عہدے کا نام","profile.googleBtn":"گوگل سے سائن ان کریں","profile.googleHint":"سائن ان کرنے سے آپ کا نام، تصویر اور پوائنٹس اس ڈیوائس پر محفوظ ہو جاتے ہیں — مفت کوششیں اکاؤنٹ کے بجائے ڈیوائس کے حساب سے شمار ہوتی ہیں۔","profile.save":"معلومات محفوظ کریں","profile.connected":"گوگل سے منسلک","profile.logoutBtn":"لاگ آؤٹ کریں","profile.statUsage":"آلات کے استعمال کی تعداد","profile.statDevice":"ڈیوائس آئی ڈی","profile.statPlan":"آپ کا موجودہ پیکیج","profile.planFree":"مفت","subs.individualTitle":"انفرادی پیکیجز","subs.individualDesc":"ہر اس شخص کے لیے جو انٹرویو کی تیاری کر رہا ہے یا اپنا کیریئر خود بنا رہا ہے۔","subs.basicName":"بنیادی","subs.perMonth":"/ ماہانہ","subs.proName":"پیشہ ورانہ","subs.eliteName":"ایلیٹ","subs.popular":"سب سے زیادہ مقبول","subs.bestValue":"بہترین قیمت","subs.yearlyName":"سالانہ","subs.perYear":"/ سالانہ","subs.subscribe":"ابھی سبسکرائب کریں","subs.teamTitle":"ٹیم اور یونیورسٹی پیکیجز","subs.teamDesc":"کالجوں، یونیورسٹیوں اور بھرتی مراکز کے لیے جو ایک گروپ کو بہتر قیمت پر ایک ساتھ تربیت دینا چاہتے ہیں۔","subs.teamSmallName":"چھوٹی ٹیم","subs.teamSmallRange":"10 افراد تک","subs.perSeat":"/ فی فرد / ماہانہ","subs.recommended":"یونیورسٹیوں کے لیے تجویز کردہ","subs.teamMedName":"بیچ / کالج","subs.teamMedRange":"11 سے 100 افراد","subs.uniName":"یونیورسٹی / بڑا ادارہ","subs.uniRange":"100 سے زیادہ افراد","subs.customPrice":"حسبِ ضرورت قیمت","subs.contactUs":"ہم سے رابطہ کریں","don.title":"پلیٹ فارم کی مسلسل کارکردگی کی حمایت کریں","don.desc":"اگر آپ YUSR Pro کی ترقی کی حمایت کرنا چاہتے ہیں تو نیچے دیے گئے نمبروں کے ذریعے کوئی بھی رقم عطیہ کر سکتے ہیں۔","don.wallet":"الیکٹرانک والیٹ","don.thanks":"حمایت کرنے والے ہر فرد کا بہت شکریہ۔","sup.title":"معاونت اور رابطہ","sup.desc":"کوئی سوال، مسئلہ یا تجویز ہے؟ براہ راست ہم سے رابطہ کریں۔","sup.phone":"براہ راست کال","sup.hours":"ہم عام طور پر چند گھنٹوں میں جواب دیتے ہیں۔ فوری معاملات کے لیے، واٹس ایپ سب سے تیز ہے۔","legal.lastUpdated":"آخری اپ ڈیٹ: اگست 2026","history.pageTitle":"متحدہ ہسٹری","history.subtitle":"سائٹ کے کسی بھی ٹول کے آخری 20 نتائج (خلاصے، جائزے، خطوط وغیرہ) یہاں خودکار طور پر محفوظ ہو جاتے ہیں تاکہ صفحہ بند کرنے پر ضائع نہ ہوں۔","history.listTitle":"محفوظ شدہ نتائج","history.clearAll":"سب صاف کریں","history.empty":"ابھی تک کوئی محفوظ شدہ نتیجہ نہیں۔ سائٹ کے ٹولز کا کوئی بھی نتیجہ یہاں خودکار طور پر ظاہر ہوگا۔","onboarding.title":"YUSR Pro میں خوش آمدید 👋","onboarding.subtitle":"صحیح آغاز کے لیے 3 تیز مراحل:","onboarding.step1.title":"اپنا پروفائل مکمل کریں","onboarding.step1.desc":"CV اور انٹرویو جیسے دوسرے ٹولز اسی ڈیٹا سے کام کرتے ہیں۔","onboarding.step2.title":"ایک مشقی انٹرویو آزمائیں","onboarding.step2.desc":"حقیقی سوالات پر بلند آواز سے مشق کریں اور فوری فیڈبیک حاصل کریں۔","onboarding.step3.title":"اپنی CV بنائیں","onboarding.step3.desc":"ہم آپ کے محفوظ شدہ ڈیٹا سے منٹوں میں ایک پیشہ ورانہ CV بنائیں گے۔","onboarding.tip":"ٹِپ: سائیڈبار کے اوپر ایک سرچ باکس ہے جو آپ کو 20 سے زیادہ ٹولز میں سے کوئی بھی جلدی ڈھونڈنے میں مدد دیتا ہے۔","onboarding.skip":"چھوڑیں، میں خود دیکھ لوں گا","about.pageTitle":"ہمارے بارے میں","about.tagline":"ایک عربی پلیٹ فارم جسے ہم جذبے کے ساتھ بنا رہے ہیں تاکہ یہ آپ کے کیریئر کے سفر میں آپ کا ساتھی بنے۔","about.missionLabel":"ہمارا مشن","about.missionBody":"ہم مانتے ہیں کہ ہر شخص، چاہے اس کا پس منظر یا حالات کچھ بھی ہوں، پراعتماد اور اچھی طرح تیار ہو کر صحیح موقع تک پہنچنے کا حق دار ہے۔ \"YUSR Pro\" ایک سادہ خیال سے جنم لیا: اچھی انٹرویو کی تیاری یا مضبوط سی وی صرف اُن لوگوں کے لیے مخصوص نہیں ہونی چاہیے جن کے پاس وقت، پیسہ یا تعلقات ہیں — AI اب یہی معیار کسی کو بھی، کسی بھی وقت فراہم کر سکتا ہے۔","about.pillarsTitle":"ہمیں کیا آگے بڑھاتا ہے","about.pillar1Title":"حقیقی مدد","about.pillar1Body":"صرف اوزار نہیں — ہم ہر خصوصیت کو نوکری تلاش کرنے والوں کے کسی حقیقی مسئلے کو حل کرنے کے لیے ڈیزائن کرتے ہیں۔","about.pillar2Title":"مسلسل ترقی","about.pillar2Body":"ہم آپ کی تجاویز سنتے ہیں اور مسلسل اضافہ اور بہتری لاتے ہیں — پلیٹ فارم آپ کے ساتھ قدم بہ قدم بڑھتا ہے۔","about.pillar3Title":"آپ کی خدمت میں AI","about.pillar3Body":"ہم آپ کو اعلیٰ معیار کا، ذاتی نوعیت کا تیاری کا تجربہ دینے کے لیے جدید ترین AI ٹیکنالوجی استعمال کرتے ہیں۔","about.pillar4Title":"آپ کی رازداری پہلے","about.pillar4Body":"آپ کا ڈیٹا آپ کا ہے — ہم اسے صرف آپ کو سروس فراہم کرنے کے لیے استعمال یا شیئر کرتے ہیں۔","about.whyTitle":"YUSR Pro کیوں؟","about.why1":"مکمل طور پر عربی میں ڈیزائن کیا گیا تجربہ جو آپ کا لہجہ سمجھتا ہے۔","about.why2":"انٹرویو سے لے کر سی وی اور پورٹ فولیو تک، آپ کو درکار ہر اوزار ایک ہی جگہ۔","about.why3":"عمومی تعریف نہیں بلکہ ایماندار، حقیقت پسندانہ رائے جو آپ کو بہتر بننے میں مدد دیتی ہے۔","about.why4":"ہم اپنے صارفین کی حقیقی ضروریات کی بنیاد پر پلیٹ فارم کو مسلسل ترقی دیتے رہتے ہیں۔","about.closing":"کوئی خیال یا تجویز ہے جو YUSR کو بہتر بنا سکے؟ ہمیں سن کر خوشی ہوگی۔","about.contactUs":"ہم سے رابطہ کریں","terms.pageTitle":"استعمال کی شرائط","terms.betaNotice":"پلیٹ فارم ابھی بیٹا مرحلے میں ہے۔ \"سبسکرپشنز\" کا صفحہ فی الحال آزمائشی پیکیجز اور قیمتیں دکھا رہا ہے، بغیر کسی کارڈ یا اکاؤنٹ سے حقیقی کٹوتی کے — جیسے ہی حقیقی ادائیگی فعال ہوگی، ہم ایپ میں واضح طور پر اعلان کریں گے۔","terms.s1.title":"1. شرائط کی منظوری","terms.s1.body":"\"YUSR Pro\" پلیٹ فارم استعمال کر کے، آپ ان شرائط سے اتفاق کرتے ہیں۔","terms.s2.title":"2. سروس کی نوعیت","terms.s2.body":"YUSR نوکری تلاش کرنے والوں کو تیار کرنے کے لیے ایک AI سے چلنے والا پلیٹ فارم ہے: صوتی مشقی انٹرویوز، سی وی اور پورٹ فولیو بنانا، تعلیمی تحریر کا جائزہ، دستاویز کا خلاصہ، اور تحریر میں تبدیلی۔ جوابات اور تجاویز AI کے ذریعے تیار کیے جاتے ہیں اور صرف رہنمائی کے لیے ہیں، کسی نتیجے یا نوکری کی ضمانت نہیں۔","terms.s3.title":"3. اکاؤنٹ اور اجازت یافتہ استعمال","terms.s3.body":"آپ پلیٹ فارم کو مہمان کے طور پر (خودکار گمنام شناخت کے ساتھ) استعمال کر سکتے ہیں، یا اپنا ڈیٹا محفوظ کرنے کے لیے گوگل اکاؤنٹ سے سائن ان کر سکتے ہیں۔ آپ اپنے اکاؤنٹ سے ہونے والی کسی بھی سرگرمی کے ذمہ دار ہیں۔ ممنوع ہے: منصفانہ استعمال کی حدود سے بچنے کی کوشش، بڑے پیمانے پر خودکار درخواستیں (بوٹس) بھیجنا، یا نظام کے کسی غیر مجاز حصے تک رسائی کی کوشش۔","terms.s4.title":"4. منصفانہ استعمال کی حدود","terms.s4.body":"سب کے لیے سروس جاری رکھنے کے لیے، AI ٹولز (چیٹ، تحریر میں تبدیلی، تحریر سے آواز) کی روزانہ اور ماہانہ استعمال کی ایک حد ہے۔ اگر آپ حد تک پہنچ جائیں، تو آپ کو اس کے دوبارہ فعال ہونے کا انتظار کرنا ہوگا۔","terms.s5.title":"5. آپ کا مواد","terms.s5.body":"آپ کا لکھا یا اپ لوڈ کیا گیا کوئی بھی مواد (سی وی ڈیٹا، پورٹ فولیو، صوتی ریکارڈنگز) آپ ہی کی ملکیت رہتا ہے۔ ہم اسے صرف آپ کو سروس فراہم کرنے کے لیے پروسیس کرتے ہیں، اور کبھی کسی اور مقصد کے لیے استعمال یا فروخت نہیں کرتے۔","terms.s6.title":"6. ذمہ داری سے دستبرداری","terms.s6.body":"سروس بغیر کسی ضمانت کے \"جیسی ہے ویسی\" فراہم کی جاتی ہے۔ ہم AI کے نتائج کی بنیاد پر آپ کے کیے گئے کسی بھی کیریئر یا پیشہ ورانہ فیصلے کے ذمہ دار نہیں ہیں، اور ہمیشہ مشورہ دیتے ہیں کہ استعمال سے پہلے کسی بھی اہم مواد کا خود جائزہ لیں۔","terms.s7.title":"7. تبدیلیاں","terms.s7.body":"ہم وقتاً فوقتاً ان شرائط کو تبدیل کر سکتے ہیں، اور اوپر \"آخری اپ ڈیٹ\" کی تاریخ کو اپ ڈیٹ کریں گے۔ تبدیلی کے بعد پلیٹ فارم کا استعمال جاری رکھنے کا مطلب ہے کہ آپ نئے ورژن سے اتفاق کرتے ہیں۔","terms.s8.title":"8. رابطہ","terms.s8.body":"ان شرائط کے بارے میں کسی بھی سوال کے لیے، \"معاونت اور رابطہ\" کے صفحے کے ذریعے ہم سے رابطہ کریں۔","privacy.pageTitle":"رازداری کی پالیسی","privacy.s1.title":"1. ڈیٹا کون جمع کرتا ہے","privacy.s1.body":"\"YUSR Pro\" پلیٹ فارم ہی آپ کا ڈیٹا جمع اور پراسیس کرتا ہے، صرف ایک مقصد کے لیے: آپ کے استعمال کردہ سروس کی فراہمی۔","privacy.s2.title":"2. ہم جو ڈیٹا جمع کرتے ہیں","privacy.s2.li1":"<b class=\"text-slate-200\">اکاؤنٹ کا ڈیٹا:</b> اگر آپ گوگل سے سائن ان کرتے ہیں، تو ہم آپ کا نام، تصویر اور ای میل براہ راست گوگل سے حاصل کرتے ہیں۔ اگر آپ مہمان کے طور پر داخل ہوتے ہیں، تو ہم آپ کو دوسرے صارفین سے ممتاز کرنے کے لیے صرف ایک گمنام شناخت دیتے ہیں۔","privacy.s2.li2":"<b class=\"text-slate-200\">آپ کا استعمال کردہ مواد:</b> سی وی ڈیٹا، پورٹ فولیو، آپ کے لکھے یا خلاصہ کیے گئے متن، اور انٹرویو یا تحریر میں تبدیلی کے آلات میں اپ لوڈ کی گئی صوتی ریکارڈنگز۔","privacy.s2.li3":"<b class=\"text-slate-200\">تکنیکی استعمال کا ڈیٹا:</b> آپ نے ہر آلہ کتنی بار استعمال کیا (منصفانہ استعمال کی حدود لاگو کرنے کے لیے)، جو آپ کی ڈیوائس پر مقامی طور پر (localStorage) محفوظ ہوتا ہے، جیسے \"باقی ماندہ کوششیں\"۔","privacy.s3.title":"3. ہم آپ کا ڈیٹا کیسے استعمال کرتے ہیں","privacy.s3.body":"ہم آپ کا ڈیٹا صرف اس لیے استعمال کرتے ہیں: (الف) AI آلات چلانے کے لیے (ہم آپ کے اپ لوڈ کردہ متن یا آڈیو کو جواب تیار کرنے کے لیے خصوصی پروسیسنگ کمپنیوں کو بھیجتے ہیں، بغیر آپ کی چابیاں یا لاگ اِن ڈیٹا ان کے پاس محفوظ کیے)، (ب) آپ کا پروفائل محفوظ کرنے کے لیے تاکہ آپ کی واپسی پر موجود ہو، (ج) سروس کو بہتر بنانے اور غلط استعمال کو روکنے کے لیے۔","privacy.s4.title":"4. آپ کا ڈیٹا کون دیکھتا ہے (تیسرے فریق)","privacy.s4.li1":"<b class=\"text-slate-200\">Google Firebase:</b> سائن ان اور آپ کے پروفائل کو محفوظ طریقے سے ذخیرہ کرنے کے لیے۔","privacy.s4.li2":"<b class=\"text-slate-200\">AI Processing Service:</b> چیٹ اور تحریر میں تبدیلی کے آلات میں متن اور آڈیو پروسیس کرنے کے لیے۔","privacy.s4.li3":"<b class=\"text-slate-200\">Text-to-Speech Service:</b> تحریر کو آواز میں تبدیل کرنے کے لیے۔","privacy.s4.li4":"<b class=\"text-slate-200\">Cloudflare:</b> آپ کی ایپ اور AI سروسز کے درمیان ایک محفوظ تکنیکی واسطے کے طور پر، بغیر آپ کا ڈیٹا محفوظ کیے۔","privacy.s4.li5":"<b class=\"text-slate-200\">Web Search Service:</b> صرف تنخواہ کے تخمینے کے ٹول میں لائیو ویب سرچ کے لیے۔","privacy.s4.note":"ہم آپ کا ڈیٹا کبھی کسی کو فروخت نہیں کرتے، اور نہ ہی اسے کبھی اشتہاری مقاصد کے لیے شیئر کرتے ہیں۔","privacy.s5.title":"5. ڈیٹا کی سیکیورٹی","privacy.s5.body":"آپ کا ڈیٹا سیکیورٹی قوانین کے ذریعے محفوظ ہے جو یقینی بناتے ہیں کہ ہر صارف صرف اپنا ڈیٹا دیکھ سکے، اور آپ کی ایپ اور سرور کے درمیان تمام رابطہ خفیہ کاری شدہ (HTTPS) ہے۔","privacy.s6.title":"6. آپ کے حقوق","privacy.s6.body":"آپ کسی بھی وقت اپنا محفوظ شدہ ڈیٹا دیکھنے، اسے تبدیل کرنے، یا اسے مکمل طور پر حذف کرنے کی درخواست کر سکتے ہیں، \"معاونت اور رابطہ\" کے صفحے کے ذریعے ہم سے رابطہ کر کے۔","privacy.s7.title":"7. بچے","privacy.s7.body":"یہ سروس 13 سال سے کم عمر کسی کے لیے نہیں ہے، اور ہم دانستہ طور پر اس عمر گروپ سے ڈیٹا جمع نہیں کرتے۔","privacy.s8.title":"8. اس پالیسی میں تبدیلیاں","privacy.s8.body":"ہم وقتاً فوقتاً اس پالیسی کو اپ ڈیٹ کر سکتے ہیں، اور جب بھی کوئی اہم تبدیلی کریں گے تو اوپر \"آخری اپ ڈیٹ\" کی تاریخ بدل دیں گے۔","assistant.botName":"یسر پرو بوٹ","assistant.subtitle":"لکھ کر یا آواز میں اس سے بات کریں، اور اگر اسے کچھ دیکھنا ہو تو تصویر بھیجیں","assistant.inputPh":"اپنا سوال یہاں لکھیں...","assistant.attachImageTitle":"تصویر منسلک کریں","assistant.micTitle":"آواز کی ریکارڈنگ","assistant.voiceToggleTitle":"جوابات کی آواز آن/آف کریں","assistant.newChatTitle":"نئی گفتگو شروع کریں","assistant.removeImageTitle":"تصویر ہٹائیں","assistant.imageAlt":"منسلک تصویر","assistant.providerHint":"متعدد AI فراہم کنندگان سے چلتا ہے — اگر ایک مصروف ہو تو خود بخود دوسرے پر چلا جاتا ہے، آپ کو پتہ بھی نہیں چلتا۔","assistant.emptyHint":"{bot} سے لکھ کر یا آواز میں سوال پوچھیں، یا اسے دیکھنے اور جواب دینے کے لیے کوئی تصویر بھیجیں۔","assistant.defaultImageQuestion":"اس تصویر کی تفصیل سے وضاحت کریں کہ اس میں کیا ہے۔","interview.resumeBefore":"ابھی بھی ایک انٹرویو سیشن جاری ہے (","interview.resumeAfter":")۔ کیا آپ جاری رکھنا چاہتے ہیں یا نیا سیشن شروع کرنا چاہتے ہیں؟","interview.resume":"جاری رکھیں","interview.startNew":"نیا شروع کریں","interview.voiceLabel":"انٹرویو لینے والے کی آواز","interview.voiceMale":"مردانہ آواز","interview.voiceFemale":"زنانہ آواز","interview.personaArLabel":"شاندار عربی","interview.personaEnLabel":"شاندار انگریزی","interview.screenshot":"گفتگو کا اسکرین شاٹ لیں","interview.endTitle":"انٹرویو مستقل طور پر ختم کریں اور آرکائیو میں محفوظ کریں","interview.endBtn":"انٹرویو ختم کریں","interview.endHint":"انٹرویو ختم کرنا حتمی ہے — اس کے بعد یہ سیشن دوبارہ شروع نہیں کیا جا سکتا۔ اگر آپ کو مختلف زبان یا انٹرویو لینے والا چاہیے تو نیا انٹرویو شروع کریں۔","interview.stop":"روکیں","interview.micTitle":"اپنی آواز سے بولیں","interview.sendAria":"جواب بھیجیں","interview.evalTitle":"کارکردگی کی تشخیص","cv.tabPlain":"سادہ ریزیومے (بغیر تصویر)","cv.tabLinkedin":"لنکڈ اِن اسٹائل (تصویر کے ساتھ)","cv.plainNotice":"بغیر کسی تصویر کے سادہ ٹیکسٹ ریزیومے — Word یا کہیں بھی براہ راست کاپی کرنے کے لیے تیار پیشہ ورانہ متن۔","cv.runPlain":"سادہ ریزیومے تیار کریں","cv.liNotice":"لنکڈ اِن اسٹائل ورژن: اوپر ایک پروفائل تصویر، پھر بالکل لنکڈ اِن جیسی رابطہ کی معلومات کی فہرست، اس کے بعد ریزیومے کا مواد۔","cv.liPhotoAlt":"ریزیومے تصویر","cv.liPhotoHint":"آپ کی تصویر صرف آپ کے براؤزر میں محفوظ ہوتی ہے اور کہیں نہیں بھیجی جاتی۔","cv.contactInfo":"رابطہ کی معلومات","cv.phonePh":"فون نمبر","cv.emailPh":"ای میل ایڈریس","cv.linkedinPh":"لنکڈ اِن لنک یا پیشہ ورانہ پروفائل","cv.locationPh":"شہر / ملک","cv.runLinkedin":"لنکڈ اِن اسٹائل ریزیومے تیار کریں","cv.exportFooter":"YUSR پلیٹ فارم کے ذریعے بنایا گیا","pf.screenshot":"اسکرین شاٹ","pf.sendAria":"بھیجیں","common.auto2Text":"العربية","common.auto3Text":"اردو","common.auto4Text":"فارسی","common.emailVerifyResendBtnText":"دوبارہ بھیجیں","common.emailVerifyRecheckBtnText":"میں نے تصدیق کر دی، حیثیت اپ ڈیٹ کریں","faq.auto1Text":"8 سوالات","faq.auto2Text":"12 سوالات","faq.auto3Text":"18 سوالات","faq.auto4Text":"نیا گریجویٹ / ایک سال سے کم تجربہ","faq.auto5Text":"درمیانہ درجہ (Mid-level)","faq.auto6Text":"سینیئر / وسیع تجربہ","faq.auto7Text":"انتظامی / قیادت کی سطح (Manager+)","career.auto1Text":"منصوبے کی طوالت","career.auto2Text":"مکمل تفصیلی منصوبہ (تمام مراحل اور تفصیلات)","career.auto3Text":"فوری اور واضح خلاصہ (صرف اہم نکات، تفصیل کے بغیر)","videoMock.auto1Text":"کیمرے کے سامنے کہنے کے لیے کچھ تیار کریں","videoMock.auto2Text":"کیمرہ کھول کر یہ سوچنے کے بجائے کہ کیا کہنا ہے، ایک موڈ منتخب کریں تو آپ کو جواب دینے کے لیے ایک مخصوص سوال ملے گا، یا واضح انداز میں پڑھنے کی مشق کے لیے تیار متن ملے گا — پھر جواب دیتے ہوئے خود کو ریکارڈ کریں۔","videoMock.auto3Text":"ایک انٹرویو سوال جس کا میں زبانی جواب دوں گا","videoMock.auto4Text":"واضح انداز میں پڑھنے کی مشق کے لیے تیار متن","videoMock.auto5Text":"مجھے ایک اور دیں","videoMock.auto6Text":"کیمرے کے سامنے مشق کریں","videoMock.videoMockStatusText":"\"کیمرہ شروع کریں\" دبائیں تو آپ کا براؤزر کیمرہ اور مائیکروفون کی اجازت مانگے گا — پھر آپ کلپ ریکارڈ کر کے جائزے کے لیے ڈاؤن لوڈ کر سکتے ہیں۔","videoMock.auto7Text":"انٹرویو شیڈولنگ ای میل کی مشق","videoMock.auto8Text":"ایک \"بھرتی کار\" کی طرف سے حقیقت پسندانہ ای میل تیار کی جائے گی جو آپ سے تاریخ/مقام یا آن لائن انٹرویو لنک کی تصدیق مانگے گی، اور کبھی کبھار آپ کی تنخواہ کی توقعات — پیشہ ورانہ انداز میں جواب دینے کی مشق کریں۔","videoMock.auto9Text":"تاریخ اور مقام کی تصدیق (بالمشافہ)","videoMock.auto10Text":"آن لائن انٹرویو کی تصدیق","videoMock.auto11Text":"تنخواہ کی توقعات کے بارے میں سوال","videoMock.auto12Text":"اچانک شیڈول کا تصادم/تبدیلی","videoMock.auto13Text":"فوری ای میل (ایک دن میں جواب دیں)","videoMock.auto14Text":"انتہائی رسمی انداز","videoMock.auto15Text":"دوستانہ اور پرسکون انداز","videoMock.auto16Text":"عجلت اور وقت کے دباؤ والا انداز","videoMock.auto17Text":"ملازمت کی تنخواہ کے لیے موزوں فالو اپ سوالات","videoMock.auto18Text":"انٹرویو کے لیے موزوں لباس اور ظاہری شکل کے مشورے","videoMock.auto19Text":"رسمی دفتری ماحول (بینک/بڑی کمپنیاں)","videoMock.auto20Text":"اسٹارٹ اپ / نوجوان، غیر رسمی ماحول","videoMock.auto21Text":"صارفین کے ساتھ براہ راست رابطہ","videoMock.auto22Text":"تخلیقی شعبہ","videoMock.auto23Text":"آن لائن انٹرویو (ویڈیو کال)","videoMock.auto24Text":"قدامت پسند خلیجی کام کا ماحول","videoMock.auto25Text":"مردوں اور خواتین دونوں کے لیے مشورے","videoMock.auto26Text":"صرف مردوں کے لیے مشورے","videoMock.auto27Text":"صرف خواتین کے لیے مشورے","salary.auto1Text":"جیسے ہی آپ \"اندازہ لگائیں\" دباتے ہیں یہ ٹول جاب مارکیٹ کے لیے لائیو ویب نتائج تلاش کرتا ہے، اور AI کی سمجھ کے ساتھ اس پر اندازہ بناتا ہے — یہ کوئی سرکاری ڈیٹا یا 100% درست مارکیٹ سروے نہیں ہے — اسے مذاکرات کے لیے ایک نقطہ آغاز کے طور پر استعمال کریں، حتمی عدد کے طور پر نہیں۔","salary.auto2Text":"مصر","salary.auto3Text":"سعودی عرب","salary.auto4Text":"متحدہ عرب امارات","salary.auto5Text":"عام طور پر خلیجی ممالک","salary.auto6Text":"غیر ملکی کمپنیوں کے لیے ریموٹ","progress.auto1Text":"آپ کا انٹرویو آرکائیو: ہر انٹرویو الگ رہنے کے بجائے، ایک ہی صفحہ \"وائس ماک انٹرویو\" سے آپ کے تمام انٹرویوز، ان کے متن اور کارکردگی رپورٹس اکٹھی کرتا ہے اور وقت کے ساتھ آپ کی پیش رفت دکھاتا ہے۔","progress.auto2Text":"آنے والے انٹرویو کی یاد دہانی","progress.auto3Text":"یاد دہانی محفوظ کریں","progress.progressReminderEnableBtnText":"حقیقی براؤزر پش نوٹیفیکیشن فعال کریں","progress.progressReminderStatusText":"اگر آپ وقت مقرر کریں تو آپ کو انٹرویو کے عین وقت پر (تقریباً 5 منٹ کے فرق سے) اطلاع ملے گی، اس کے علاوہ دو دن پہلے ایک یاد دہانی بھی۔ جب تک آپ نے اطلاعات کی اجازت دی ہے اور براؤزر چل رہا ہے (چاہے ٹیب آپ کے سامنے نہ ہو) — پھر بھی براؤزر کا کھلا ہونا ضروری ہے، مکمل طور پر بند ہونے پر یہ نہیں پہنچے گی۔","progress.auto4Text":"سابقہ سیشنز کا ریکارڈ","progress.auto5Text":"دونوں سیشنز کا موازنہ کریں","match.auto1Text":"ملازمت کی تفصیل اور اپنا سی وی پیسٹ کریں، ہم آپ کو ایک تخمینی مماثلت فیصد، مخصوص کمزور نکات اور ATS فلٹرز عبور کرنے میں مدد دینے والے غائب کلیدی الفاظ دیں گے۔","match.auto2Text":"آپ کی سی وی","match.auto3Text":"محفوظ شدہ سی وی استعمال کریں","match.auto4Text":"ملازمت کی تفصیل","cover.auto1Text":"باضابطہ ملازمت کی تلاش کی خط و کتابت کے لیے مخصوص: سی وی کے ساتھ منسلک کور لیٹر، انٹرویو کے بعد شکریے کا نوٹ، یا تنخواہ کی پیشکش کا جواب۔","cover.auto2Text":"موجودہ سی وی سے ڈیٹا درآمد کریں (اختیاری)","cover.auto3Text":"اپنی سی وی کیمرے سے تصویر بنائیں یا اس کی تصویر/اسکرین شاٹ اپ لوڈ کریں، AI اسے پڑھ کر اہم ڈیٹا نکالے گا اور اسی پر خط بنائے گا۔","cover.auto4Text":"سی وی کی تصویر اپ لوڈ کریں","cover.auto5Text":"ابھی سی وی کی تصویر بنائیں","cover.auto6Text":"سی وی کے ساتھ منسلک کور لیٹر","cover.auto7Text":"انٹرویو کے بعد شکریے اور فالو اپ کا نوٹ","cover.auto8Text":"تنخواہ کی پیشکش کا جواب / تنخواہ پر مذاکرات","writing.auto1Text":"املا اور گرامر کی جانچ","writing.auto2Text":"تعلیمی فارمیٹنگ (APA)","writing.auto3Text":"تعلیمی فارمیٹنگ (Harvard)","summarizer.auto1Text":"بہت مختصر خلاصہ (فوری سمجھ)","summarizer.auto2Text":"بلٹ پوائنٹس","summarizer.auto3Text":"ایک پیراگراف","summarizer.auto4Text":"عنوانات کے ساتھ منظم تفصیلی خلاصہ","tr.auto1Text":"🔎 زبان کی خودکار شناخت","tr.auto2Text":"العربية","tr.auto3Text":"اردو","tr.auto4Text":"فارسی","tr.auto5Text":"کوئی ترجمہ نہیں - وہی زبان","tr.auto6Text":"العربية","pitch.auto1Text":"ذاتی انٹرویو کا آغاز","pitch.auto2Text":"تعارفی ویڈیو (LinkedIn / پورٹ فولیو)","pitch.auto3Text":"کسی کمپنی سے کولڈ رابطہ (نیٹ ورکنگ)","pitch.auto4Text":"فون کال کا آغاز / اچانک آنے والا موقع","pitch.auto5Text":"رسمی، پرسکون اور پیشہ ورانہ","pitch.auto6Text":"پرجوش اور توانائی بھرا","pitch.auto7Text":"سادہ، دوستانہ، عام لوگوں کے قریب","pitch.auto8Text":"متن سنیں اور وقت ناپیں","pitch.auto10Text":"پہلے اپنی سی وی بنائیں","pitch.auto11Text":"صوتی انٹرویو کے ساتھ مشق کریں","profile.auto2Text":"تبدیل کریں","profile.auto3Text":"سی وی","profile.auto4Text":"پورٹ فولیو","profile.auto5Text":"پیش رفت کی نگرانی","profile.auto6Text":"پیکیجز","profile.profileStatPrivacyText":"محفوظ","profile.auto7Text":"آپ کے اکاؤنٹ کی حیثیت","profile.auto8Text":"لاگ ان اکاؤنٹ","profile.auto9Text":"آپ کے اکاؤنٹ کا جائزہ","profile.auto10Text":"آپ کا موجودہ پیکیج","profile.auto11Text":"سبسکرپشنز/خریداریوں کی تعداد","profile.auto12Text":"سبسکرپشن اور خریداری کی تاریخ","profile.auto13Text":"ایک پیکیج سبسکرائب کریں","profile.auto14Text":"آپ کے پیکیج کی خودکار تجدید روک دی گئی ہے، اور آپ موجودہ مدت کے آخری دن تک اس سے معمول کے مطابق فائدہ اٹھاتے رہیں گے۔","profile.auto15Text":"منسوخی واپس لیں","profile.auto16Text":"اپنے موجودہ پیکیج کو جاری نہیں رکھنا چاہتے؟","profile.cancelSubBtnText":"سبسکرپشن منسوخ کریں","profile.auto17Text":"رازداری اور آپ کا ڈیٹا","profile.auto18Text":"آپ کے پروفائل کا ڈیٹا، تربیتی تاریخ اور استعمال کا ریکارڈ بنیادی طور پر آپ کے ڈیوائس (براؤزر) پر محفوظ ہوتا ہے، اور اگر آپ نے گوگل سے سائن ان کیا ہے تو اس کی ایک کاپی آپ کے اکاؤنٹ کے ساتھ ہم آہنگ ہو جاتی ہے تاکہ آپ اسے کسی بھی ڈیوائس سے پا سکیں۔ سی وی کی تصاویر اور آڈیو/ویڈیو فائلیں صرف استعمال کے وقت پروسیسنگ کے لیے بھیجی جاتی ہیں اور سرور پر مستقل طور پر محفوظ نہیں ہوتیں۔","profile.auto19Text":"پاس ورڈ تبدیل کریں","profile.auto20Text":"صرف اس ڈیوائس پر محفوظ میرا ڈیٹا مٹائیں","profile.auto21Text":"خطرناک زون","profile.auto22Text":"اپنا اکاؤنٹ حذف کرنے سے یہ ہماری طرف سے مستقل طور پر مٹ جاتا ہے: آپ کا ڈیٹا، سبسکرپشنز اور سرور پر استعمال کا ریکارڈ (صرف اس ڈیوائس پر نہیں) - یہ ایک حتمی اقدام ہے جسے واپس نہیں لیا جا سکتا۔","profile.deleteAccountBtnText":"میرا اکاؤنٹ مستقل طور پر حذف کریں","profile.auto23Text":"آپ کی رکنیت","profile.auto24Text":"کل ادا شدہ رقم","profile.auto25Text":"پیکیج اپ گریڈ کریں","profile.auto26Text":"فوری تجاویز","profile.auto27Text":"اپنا ڈیٹا اور تصویر مکمل کریں تاکہ آپ کی سی وی اور پورٹ فولیو بہتر نظر آئیں، اور آپ \"پیش رفت کی نگرانی\" کے صفحے سے درست طریقے سے اپنی پیش رفت دیکھ سکیں۔","subscriptions.auto1Text":"EGP","subscriptions.auto2Text":"ماہانہ 25 AI درخواستیں","subscriptions.auto3Text":"سی وی بنانا اور دستاویزات کا خلاصہ","subscriptions.auto4Text":"EGP","subscriptions.auto5Text":"ماہانہ 150 AI درخواستیں","subscriptions.auto6Text":"تفصیلی کارکردگی رپورٹس","subscriptions.auto7Text":"ایڈیٹنگ + تمام زبانوں میں آڈیو تحریر","subscriptions.auto8Text":"EGP","subscriptions.auto9Text":"بالکل غیر محدود AI درخواستیں","subscriptions.auto10Text":"بغیر کسی استثنا کے پلیٹ فارم کے تمام ٹولز","subscriptions.auto11Text":"EGP","subscriptions.auto12Text":"تمام پروفیشنل خصوصیات","subscriptions.auto13Text":"دو ماہ مفت","subscriptions.auto14Text":"EGP","subscriptions.auto15Text":"پروفیشنل پیکیج کی تمام خصوصیات","subscriptions.auto16Text":"ٹیم پیش رفت ٹریکنگ ڈیش بورڈ","subscriptions.auto17Text":"EGP","subscriptions.auto18Text":"تمام طلبہ کے لیے تمام پروفیشنل خصوصیات","subscriptions.auto19Text":"بیچ سپروائزر کے لیے اجتماعی رپورٹ","subscriptions.auto20Text":"مفت تعارفی تربیتی سیشن","subscriptions.auto21Text":"تمام خصوصیات + مکمل تخصیص","subscriptions.auto22Text":"یونیورسٹی کے لیے مخصوص اکاؤنٹ منیجر","support.auto1Text":"کوئی تجویز، شکایت یا سوال ہے؟","support.auto2Text":"تجویز","support.auto3Text":"شکایت","support.auto4Text":"سوال","support.auto5Text":"بھیجیں","pwaIosModal.auto2Text":"آئی فون پر ایپ انسٹال کریں","pwaIosModal.auto3Text":"اس وقت تک سکرول کریں جب تک \"ہوم اسکرین پر شامل کریں\" نہ ملے۔","pwaIosModal.auto4Text":"اوپر \"شامل کریں\" پر ٹیپ کریں — آپ کو اپنی ہوم اسکرین پر YUSR Pro آئیکن کسی بھی عام ایپ کی طرح ملے گا۔","pwaIosModal.auto5Text":"ٹھیک ہے، سمجھ گیا","pricing.auto2Text":"اپنا پیکیج منتخب کریں","pricing.auto3Text":"پلیٹ فارم کے تمام ٹولز ایک ہی جگہ - انٹرویوز، سی وی، پورٹ فولیو، تعلیمی پروف ریڈنگ، آڈیو تحریر، اور مزید۔","pricing.auto4Text":"بنیادی","pricing.auto5Text":"/ ماہانہ","pricing.auto6Text":"ماہانہ 25 AI درخواستیں (انٹرویوز، سی وی، تمام ٹولز)","pricing.auto7Text":"سی وی بنانا اور دستاویزات کا خلاصہ","pricing.auto8Text":"ہر ملازمت کے لیے عمومی سوالات","pricing.auto9Text":"سائٹ چیٹ کے ذریعے سپورٹ","pricing.auto10Text":"بنیادی سبسکرائب کریں","pricing.auto11Text":"سب سے زیادہ مقبول","pricing.auto12Text":"پیشہ ورانہ","pricing.auto13Text":"/ ماہانہ","pricing.auto14Text":"ماہانہ 150 AI درخواستیں (تقریباً روزانہ مشق کے لیے کافی)","pricing.auto15Text":"ہر انٹرویو کے بعد تفصیلی کارکردگی رپورٹس","pricing.auto16Text":"مخصوص کیریئر ترقی کے منصوبے","pricing.auto17Text":"پورٹ فولیو + تعلیمی پروف ریڈنگ","pricing.auto18Text":"تمام دستیاب زبانوں میں آڈیو تحریر","pricing.auto19Text":"ترجیحی تکنیکی سپورٹ","pricing.auto20Text":"پروفیشنل سبسکرائب کریں","pricing.auto21Text":"بہترین قیمت","pricing.auto22Text":"ایلیٹ","pricing.auto23Text":"/ ماہانہ","pricing.auto24Text":"بغیر کسی ماہانہ حد کے بالکل غیر محدود AI درخواستیں","pricing.auto25Text":"بغیر کسی استثنا کے پلیٹ فارم کے تمام ٹولز","pricing.auto26Text":"سپورٹ ٹیم کی طرف سے سب سے زیادہ ترجیحی جواب","pricing.auto27Text":"ایلیٹ سبسکرائب کریں","pricing.auto28Text":"سالانہ","pricing.auto29Text":"/ سالانہ","pricing.auto30Text":"تمام پروفیشنل خصوصیات (پورا سال ماہانہ 150 درخواستیں)","pricing.auto31Text":"ماہانہ سبسکرپشن کے مقابلے میں تقریباً دو ماہ بچائیں","pricing.auto32Text":"سال میں ایک بار کیریئر ترقی کی مشاورت","pricing.auto33Text":"سالانہ سبسکرائب کریں","pricing.auto34Text":"بند کریں","cvBuildModal.auto1Text":"سی وی کا ڈیٹا انٹرویو کے ساتھ لنک کریں","cvBuildModal.auto2Text":"اپنے تجربے کا متن پیسٹ کریں تاکہ سوالات اسی کے مطابق ہوں:","cvBuildModal.auto3Text":"محفوظ کریں","cvBuildModal.auto4Text":"منسوخ کریں","reportModal.auto1Text":"تفصیلی کارکردگی رپورٹ","termsGate.auto1Text":"شروع کرنے سے پہلے","termsGate.auto2Text":"میں نے استعمال کی شرائط اور رازداری کی پالیسی پڑھ لی ہے اور ان سے متفق ہوں۔","termsGate.termsGateContinueText":"جاری رکھیں","paymentRequest.auto1Text":"سبسکرپشن مکمل کریں","paymentRequest.auto3Text":"پیکیج کی رقم Vodafone Cash یا InstaPay کے ذریعے اس نمبر پر بھیجیں:","paymentRequest.auto5Text":"ٹرانسفر کے بعد نیچے اپنی معلومات بھریں اور درخواست بھیجیں — ٹرانسفر کے جائزے کے بعد چند گھنٹوں میں پیکیج آپ کے اکاؤنٹ پر دستی طور پر فعال کر دیا جائے گا۔","paymentRequest.prSubmitBtnText":"ٹرانسفر ہو گیا، درخواست بھیجیں","cancelSub.auto1Text":"صرف خودکار تجدید روک دی جائے گی - آپ اس مدت کے آخری دن تک اپنے موجودہ پیکیج کے تمام فوائد معمول کے مطابق حاصل کرتے رہیں گے، جس کے بعد آپ خودکار طور پر مفت پیکیج پر واپس آ جائیں گے۔ آپ مدت ختم ہونے سے پہلے کسی بھی وقت منسوخی واپس لے سکتے ہیں۔","cancelSub.auto2Text":"واپس لیں","cancelSub.cancelSubConfirmBtnText":"منسوخی کی تصدیق کریں","videoMock.videoMockTopicPh":"ملازمت یا موضوع (مثلاً: کسٹمر سروس)","videoMock.videoEmailRolePh":"جس ملازمت کے لیے درخواست دے رہے ہیں (مثلاً: اکاؤنٹنٹ)","videoMock.videoEmailReplyPh":"یہاں ای میل کا اپنا جواب لکھیں...","videoMock.videoSalaryQRolePh":"ملازمت (اگر اوپر لکھی ہو تو اختیاری)","salary.salaryRolePh":"عہدے کا نام (مثلاً: گرافک ڈیزائنر)","salary.salaryExperiencePh":"تجربے کے سال (مثلاً: 3 سال)","match.cvMatchResumePh":"اپنی سی وی کا متن یہاں پیسٹ کریں، یا اوپر 'سی وی لنک کریں' پر کلک کریں...","match.cvMatchJobdescPh":"ملازمت کی پوسٹنگ کا متن یہاں پیسٹ کریں...","cover.coverCvExtractPh":"سی وی کی تصویر سے نکالا گیا ڈیٹا یہاں ظاہر ہوگا، آگے بڑھنے سے پہلے آپ اسے ترمیم کر سکتے ہیں","cover.coverRolePh":"جس عہدے کے لیے درخواست دے رہے ہیں","cover.coverCompanyPh":"کمپنی کا نام (اختیاری)","cover.coverNotesPh":"ایک یا دو اہم نکات جنہیں آپ نمایاں کرنا چاہتے ہیں (تجربہ، کامیابی، کمپنی میں دلچسپی کی وجہ...) - اختیاری","support.fbContactPh":"رابطے کے لیے موبائل نمبر یا ای میل (اختیاری)","support.fbMessagePh":"اپنا پیغام یہاں لکھیں...","cvBuildModal.cvTextInputPh":"اپنے تجربے کا متن یہاں درج کریں...","paymentRequest.prNamePh":"نام","paymentRequest.prPhonePh":"وہ موبائل نمبر جس سے آپ نے ٹرانسفر کیا","paymentRequest.prRefPh":"لین دین کے آخری ہندسے یا ایک نوٹ (اختیاری)","common.themeToggleBtnTitle":"لائٹ موڈ میں تبدیل کریں","assistant.assistantGenderToggleBtnTitle":"جواب کی آواز: مرد","common.themeToggleBtnAria":"لائٹ موڈ میں تبدیل کریں","tr.transcribeMicBtnAria":"تحریر کے لیے صوتی ریکارڈنگ","pitch.auto9Aria":"صوتی قرات روکیں","profile.auto1Aria":"پروفائل تصویر تبدیل کریں","profile.profilePhotoInputAria":"پروفائل تصویر اپ لوڈ کریں","profile.profileNameAria":"آپ کا مکمل نام","profile.profileTitleAria":"عہدے کا نام","donations.auto1Aria":"نمبر کاپی کریں","donations.auto2Aria":"نمبر کاپی کریں","donations.auto3Aria":"نمبر کاپی کریں","pwaIosModal.auto1Aria":"بند کریں","pricing.auto1Aria":"واپس","reportModal.auto2Aria":"بند کریں","paymentRequest.auto2Aria":"بند کریں","paymentRequest.auto4Aria":"نمبر کاپی کریں","profile.profilePhotoPreviewAlt":"پروفائل تصویر","profile.signedinAvatarImgAlt":"اکاؤنٹ کی تصویر"
        },
        fa: {
            "nav.searchPh":"جستجوی ابزارها...","nav.searchEmpty":"ابزاری یافت نشد","nav.section.interviews":"مصاحبه‌ها و استخدام","nav.interview":"مصاحبه آزمایشی صوتی","nav.faq":"سوالات متداول + پاسخ‌های نمونه","nav.career":"برنامه رشد شغلی","nav.section.documents":"مدارک","nav.cv":"سازنده رزومه","nav.portfolio":"نمونه‌کار شخصی","nav.writing":"بازبینی نگارش آکادمیک","nav.summarizer":"خلاصه‌سازی مدارک","nav.section.audio":"صدا و ویدیو","nav.transcribe":"تبدیل صدا به متن","nav.pitch":"معرفی ۳۰ ثانیه‌ای","nav.section.account":"حساب کاربری و پشتیبانی","nav.about":"درباره ما","nav.history":"تاریخچه یکپارچه","nav.profile":"پروفایل","nav.subscriptions":"اشتراک‌ها","nav.donations":"کمک مالی","nav.support":"پشتیبانی و ارتباط","nav.section.legal":"حقوقی","nav.terms":"شرایط استفاده","nav.privacy":"سیاست حریم خصوصی","nav.section.ai":"هوش مصنوعی","nav.videoMock":"شبیه‌ساز مصاحبه ویدیویی","nav.salary":"برآورد حقوق مورد انتظار","nav.progress":"پیگیری پیشرفت","nav.match":"تطبیق رزومه با شغل","nav.cover":"تولیدکننده نامه‌های استخدامی","nav.closeMenu":"بستن منو","nav.clearSearch":"پاک کردن جستجو","nav.openMenu":"باز کردن منو","pwa.title":"دانلود YUSR Pro به‌صورت اپلیکیشن","pwa.desc":"آیکونی روی صفحه اصلی شما که مانند هر برنامه معمولی باز می‌شود","pwa.installBtn":"نصب برنامه","pwa.hideAria":"پنهان کردن پیشنهاد نصب","hide":"پنهان کردن","apk.title":"اپلیکیشن اندروید ما را امتحان کنید 📱","apk.desc":"سریع‌تر و ساده‌تر از مرورگر — مستقیماً از همین‌جا دانلود کنید","apk.hideAria":"پنهان کردن پیشنهاد برنامه","apk.downloadBtn":"همین حالا اپلیکیشن YUSR Pro را دانلود کنید","trial.headerTitle":"تلاش‌های رایگان باقی‌مانده این ماه","support.techLabel":"پشتیبانی فنی","account.guest":"مهمان (این دستگاه)","account.signinHint":"برای ذخیره عکس و امتیازهایتان با گوگل وارد شوید","authgate.title":"وارد شوید","authgate.subtitle":"برای استفاده از سایت باید با گوگل یا ایمیل خود وارد شوید.","authgate.googleBtn":"ورود با گوگل","authgate.orEmail":"یا با ایمیل","authgate.tabLogin":"ورود","authgate.tabSignup":"ساخت حساب","authgate.namePh":"نام کامل شما","authgate.emailPh":"ایمیل","authgate.passwordPh":"رمز عبور","authgate.confirmPh":"تأیید رمز عبور","authgate.submitLogin":"ورود","authgate.submitSignup":"ساخت حساب","authgate.privacyNote":"اطلاعات شما به‌صورت امن ذخیره می‌شود و رمز عبورتان رمزگذاری شده است — حتی خود ما هم نمی‌توانیم آن را ببینیم.","authgate.recaptchaNote":"این سایت توسط reCAPTCHA محافظت می‌شود و <a href=\\\"https://policies.google.com/privacy\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" style=\\\"color:inherit;text-decoration:underline;\\\">حریم خصوصی</a> و <a href=\\\"https://policies.google.com/terms\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" style=\\\"color:inherit;text-decoration:underline;\\\">شرایط خدمات</a> گوگل اعمال می‌شود.","trial.left":"تلاش‌های باقی‌مانده","trial.upgrade":"ارتقا به بسته کامل","trial.warningLow":"این ماه فقط {n} تلاش رایگان برایتان باقی مانده است!","trial.warningLast":"این آخرین تلاش رایگان شما در این ماه است!","copy":"کپی","download":"دانلود","interview.desc":"یک مصاحبه شفاهی واقعی را با ارزیابی عملکرد دقیق در پایان تمرین کنید.","interview.linkCv":"اتصال رزومه","interview.roleLabel":"شغل هدف","interview.rolePh":"مثلاً: فروش املاک، خدمات مشتری، برنامه‌نویسی...","interview.personaLabel":"شخصیت مصاحبه‌کننده","interview.start":"شروع جلسه","interview.speaking":"مصاحبه‌کننده در حال صحبت است...","interview.inputPh":"در میکروفون صحبت کنید یا اینجا تایپ کنید...","interview.reportHint":"ارزیابی پاسخ‌های نوشتاری شما به‌همراه سرعت صحبت و کلمات پرکننده (در صورت استفاده از میکروفون) را تحلیل می‌کند.","faq.desc":"شغل و حوزه را بنویسید، ما مجموعه‌ای واقعی از سوالات متداول با پاسخ‌های نمونه قانع‌کننده آماده می‌کنیم.","faq.rolePh":"مثلاً: مسئول فروش املاک","faq.run":"تهیه سوالات و پاسخ‌ها","career.desc":"وضعیت فعلی و هدف خود را بگویید، یک برنامه رشد عملی برایتان می‌سازیم.","career.currentLabel":"وضعیت فعلی شما","career.currentPh":"مثلاً: حسابدار با ۱ سال تجربه","career.targetLabel":"هدف شما","career.targetPh":"مثلاً: می‌خواهم به تحلیل داده تغییر مسیر دهم","career.contextPh":"جزئیات اضافی مفید - اختیاری","career.run":"ساخت برنامه من","cv.notice":"این ابزار محتوای متنی رزومه حرفه‌ای آماده کپی می‌سازد، نه یک PDF طراحی‌شده مثل لینکدین.","cv.photoHint":"عکس اختیاری (فقط در مرورگر شما ذخیره می‌شود).","cv.namePh":"نام کامل","cv.titlePh":"شغل هدف","cv.expPh":"سوابق کاری شما","cv.eduPh":"تحصیلات و گواهینامه‌ها","cv.skillsPh":"مهارت‌ها (با کاما جدا کنید)","cv.run":"نوشتن رزومه من","pf.notice":"هوش مصنوعی چند سوال ساده درباره حوزه و پروژه‌های شما می‌پرسد تا محتوای نمونه‌کار سفارشی آماده کند.","pf.fieldPh":"حوزه شما (طراح، برنامه‌نویس، بازاریاب...)","pf.start":"شروع - هوش مصنوعی از من بپرسد","pf.inputPh":"پاسخ خود را اینجا بنویسید...","pf.generate":"سوالات کافی است - نمونه‌کار را الان بساز","writing.notice":"بازبینی زبانی و پیشنهادهای قالب‌بندی آکادمیک به‌صورت توصیه‌های متنی که خودتان در Word اعمال می‌کنید.","writing.topicPh":"موضوع پژوهش (اختیاری)","writing.inputPh":"متن پژوهش یا مقاله خود را اینجا بچسبانید...","writing.run":"بازبینی متن","sum.desc":"هر گزارش، مقاله یا سخنرانی را در چند ثانیه خلاصه کنید.","sum.inputPh":"متن را اینجا بچسبانید...","sum.run":"خلاصه‌سازی همین حالا","tr.notice":"می‌توانید یک فایل صوتی آماده برای رونویسی خودکار با هوش مصنوعی بارگذاری کنید، مستقیماً با میکروفون ضبط کنید، یا متن آماده بچسبانید.","tr.uploadBtn":"بارگذاری فایل صوتی و رونویسی خودکار","tr.uploadHint":"هنوز فایلی بارگذاری نشده","tr.sourceLangLabel":"زبان اصلی گفتار","tr.targetLangLabel":"ترجمه متن نهایی به (اختیاری)","tr.micHint":"برای ضبط فشار دهید، فایلی در بالا بارگذاری کنید، یا متنی آماده در پایین بچسبانید.","tr.rawPh":"متن خام اینجا نمایش داده می‌شود...","tr.run":"پاک‌سازی و قالب‌بندی","pitch.notice":"یک معرفی شخصی حرفه‌ای حدود ۳۰ ثانیه‌ای، متصل به رزومه و پروفایل ذخیره‌شده‌تان آماده کنید.","pitch.purposeLabel":"کجا از آن استفاده می‌کنید؟","pitch.toneLabel":"لحن صحبت","pitch.rolePh":"شغل یا حوزه هدف","pitch.highlightPh":"یک یا دو نکته مهم برای برجسته کردن - اختیاری","pitch.run":"ساخت معرفی ۳۰ ثانیه‌ای","profile.points":"امتیاز","profile.namePh":"نام کامل شما","profile.titlePh":"عنوان شغلی","profile.googleBtn":"ورود با گوگل","profile.googleHint":"ورود، نام، عکس و امتیازهای شما را روی این دستگاه ذخیره می‌کند — تلاش‌های رایگان بر اساس دستگاه شمارش می‌شوند، نه حساب کاربری.","profile.save":"ذخیره اطلاعات","profile.connected":"متصل به گوگل","profile.logoutBtn":"خروج از حساب","profile.statUsage":"تعداد استفاده از ابزارها","profile.statDevice":"شناسه دستگاه","profile.statPlan":"بسته فعلی شما","profile.planFree":"رایگان","subs.individualTitle":"بسته‌های فردی","subs.individualDesc":"برای هر کسی که برای مصاحبه آماده می‌شود یا مسیر شغلی خود را می‌سازد.","subs.basicName":"پایه","subs.perMonth":"/ ماهانه","subs.proName":"حرفه‌ای","subs.eliteName":"الیت","subs.popular":"پرطرفدارترین","subs.bestValue":"بهترین ارزش","subs.yearlyName":"سالانه","subs.perYear":"/ سالانه","subs.subscribe":"همین حالا مشترک شوید","subs.teamTitle":"بسته‌های تیمی و دانشگاهی","subs.teamDesc":"برای دانشکده‌ها، دانشگاه‌ها و مراکز استخدام که می‌خواهند یک گروه را با هم و با قیمت بهتر آموزش دهند.","subs.teamSmallName":"تیم کوچک","subs.teamSmallRange":"تا ۱۰ نفر","subs.perSeat":"/ به‌ازای هر نفر / ماهانه","subs.recommended":"توصیه‌شده برای دانشگاه‌ها","subs.teamMedName":"دسته / دانشکده","subs.teamMedRange":"۱۱ تا ۱۰۰ نفر","subs.uniName":"دانشگاه / سازمان بزرگ","subs.uniRange":"بیش از ۱۰۰ نفر","subs.customPrice":"قیمت‌گذاری اختصاصی","subs.contactUs":"تماس با ما","don.title":"از تداوم پلتفرم حمایت کنید","don.desc":"اگر می‌خواهید از توسعه YUSR Pro حمایت کنید، می‌توانید از طریق شماره‌های زیر هر مبلغی را اهدا کنید.","don.wallet":"کیف پول الکترونیک","don.thanks":"از همه کسانی که از ما حمایت می‌کنند بسیار سپاسگزاریم.","sup.title":"پشتیبانی و ارتباط","sup.desc":"سوال، مشکل یا پیشنهادی دارید؟ مستقیماً با ما تماس بگیرید.","sup.phone":"تماس مستقیم","sup.hours":"معمولاً ظرف چند ساعت پاسخ می‌دهیم. برای موارد فوری، واتس‌اپ سریع‌ترین راه است.","legal.lastUpdated":"آخرین به‌روزرسانی: اوت ۲۰۲۶","history.pageTitle":"تاریخچه یکپارچه","history.subtitle":"۲۰ نتیجه آخر از هر ابزاری در سایت (خلاصه‌سازی، بازبینی، نامه‌ها و غیره) به‌طور خودکار اینجا ذخیره می‌شود تا با بستن صفحه از بین نروند.","history.listTitle":"نتایج ذخیره‌شده","history.clearAll":"پاک کردن همه","history.empty":"هنوز نتیجه‌ای ذخیره نشده. هر نتیجه‌ای از ابزارهای سایت به‌طور خودکار اینجا ظاهر می‌شود.","onboarding.title":"به YUSR Pro خوش آمدید 👋","onboarding.subtitle":"۳ قدم سریع برای شروعی درست:","onboarding.step1.title":"پروفایل خود را کامل کنید","onboarding.step1.desc":"ابزارهای دیگر مثل رزومه و مصاحبه از همین اطلاعات استفاده می‌کنند.","onboarding.step2.title":"یک مصاحبه تمرینی امتحان کنید","onboarding.step2.desc":"با سوالات واقعی به‌صورت صوتی تمرین کنید و بازخورد فوری بگیرید.","onboarding.step3.title":"رزومه خود را بسازید","onboarding.step3.desc":"در چند دقیقه از اطلاعات ذخیره‌شده شما یک رزومه حرفه‌ای می‌سازیم.","onboarding.tip":"نکته: بالای نوار کناری یک کادر جستجو هست که کمک می‌کند هر کدام از بیش از ۲۰ ابزار را سریع پیدا کنید.","onboarding.skip":"رد شدن، خودم می‌گردم","about.pageTitle":"درباره ما","about.tagline":"پلتفرمی عربی که با شور و اشتیاق می‌سازیم تا همراه شما در مسیر شغلی‌تان باشد.","about.missionLabel":"ماموریت ما","about.missionBody":"ما معتقدیم هر کسی، صرف‌نظر از پیشینه یا شرایطش، سزاوار رسیدن به فرصت مناسب با اعتماد به نفس و آمادگی کامل است. \"YUSR Pro\" از یک ایده ساده متولد شد: آمادگی خوب برای مصاحبه یا رزومه‌ای قوی نباید فقط در اختیار کسانی باشد که وقت، پول یا ارتباطات دارند — هوش مصنوعی اکنون می‌تواند همین کیفیت را در دسترس هر کسی، در هر زمانی قرار دهد.","about.pillarsTitle":"چه چیزی ما را به حرکت درمی‌آورد","about.pillar1Title":"کمک واقعی","about.pillar1Body":"نه فقط ابزار — ما هر ویژگی را برای حل یک مشکل واقعی که کارجویان با آن روبرو هستند طراحی می‌کنیم.","about.pillar2Title":"رشد مستمر","about.pillar2Body":"به پیشنهادات شما گوش می‌دهیم و پیوسته اضافه و بهبود می‌دهیم — پلتفرم قدم به قدم همراه شما رشد می‌کند.","about.pillar3Title":"هوش مصنوعی در خدمت شما","about.pillar3Body":"از جدیدترین فناوری‌های هوش مصنوعی برای ارائه تجربه آمادگی شخصی‌سازی‌شده و باکیفیت به شما بهره می‌بریم.","about.pillar4Title":"حریم خصوصی شما، اولویت اول","about.pillar4Body":"داده‌های شما متعلق به خودتان است — ما آن را فقط برای ارائه خدمت به شما استفاده یا به اشتراک می‌گذاریم.","about.whyTitle":"چرا YUSR Pro؟","about.why1":"تجربه‌ای کاملاً طراحی‌شده به زبان عربی که لهجه شما را می‌فهمد.","about.why2":"همه ابزارهایی که نیاز دارید، از مصاحبه تا رزومه و نمونه‌کار، در یک مکان.","about.why3":"بازخورد صادقانه و واقع‌بینانه که به بهبود شما کمک می‌کند، نه صرفاً تعریف‌های کلی.","about.why4":"ما بر اساس نیازهای واقعی کاربران خود همچنان پلتفرم را توسعه می‌دهیم.","about.closing":"ایده یا پیشنهادی دارید که YUSR را بهتر کند؟ دوست داریم آن را بشنویم.","about.contactUs":"تماس با ما","terms.pageTitle":"شرایط استفاده","terms.betaNotice":"پلتفرم هنوز در مرحله آزمایشی (بتا) است. صفحه \"اشتراک‌ها\" در حال حاضر بسته‌ها و قیمت‌های آزمایشی را نمایش می‌دهد و هیچ کسری واقعی از هیچ کارت یا حسابی انجام نمی‌شود — به‌محض فعال شدن پرداخت واقعی، به‌وضوح در برنامه اعلام خواهیم کرد.","terms.s1.title":"۱. پذیرش شرایط","terms.s1.body":"با استفاده از پلتفرم \"YUSR Pro\"، شما با این شرایط موافقت می‌کنید.","terms.s2.title":"۲. ماهیت خدمت","terms.s2.body":"YUSR پلتفرمی مبتنی بر هوش مصنوعی برای آماده‌سازی کارجویان است: مصاحبه‌های آزمایشی صوتی، ساخت رزومه و نمونه‌کار، بازبینی نگارش آکادمیک، خلاصه‌سازی مدارک و رونویسی صوتی. پاسخ‌ها و پیشنهادها توسط هوش مصنوعی تولید می‌شوند و صرفاً کمکی راهنما هستند، نه تضمینی برای نتیجه یا استخدام.","terms.s3.title":"۳. حساب کاربری و استفاده مجاز","terms.s3.body":"می‌توانید از پلتفرم به‌صورت مهمان (با هویت ناشناس خودکار) استفاده کنید یا با حساب گوگل وارد شوید تا داده‌هایتان ذخیره شود. شما مسئول هرگونه فعالیتی هستید که از حساب شما انجام می‌شود. موارد ممنوع: تلاش برای دور زدن محدودیت‌های استفاده منصفانه، ارسال درخواست‌های خودکار انبوه (bot)، یا تلاش برای دسترسی به هر بخشی از سیستم که مجاز نیستید.","terms.s4.title":"۴. محدودیت‌های استفاده منصفانه","terms.s4.body":"برای تضمین تداوم خدمت برای همه، ابزارهای هوش مصنوعی (گفتگو، رونویسی صوتی، تبدیل متن به گفتار) دارای سقف روزانه و ماهانه استفاده هستند. اگر به سقف برسید، باید تا بازنشانی آن صبر کنید.","terms.s5.title":"۵. محتوای شما","terms.s5.body":"هر محتوایی که می‌نویسید یا بارگذاری می‌کنید (اطلاعات رزومه، نمونه‌کار، ضبط‌های صوتی) همچنان متعلق به شماست. ما آن را فقط برای ارائه خدمت به شما پردازش می‌کنیم و هرگز برای هدف دیگری استفاده یا آن را نمی‌فروشیم.","terms.s6.title":"۶. سلب مسئولیت","terms.s6.body":"خدمت \"همان‌طور که هست\" و بدون هیچ ضمانتی ارائه می‌شود. ما مسئول هیچ تصمیم شغلی یا حرفه‌ای که بر اساس خروجی‌های هوش مصنوعی می‌گیرید نیستیم، و همیشه توصیه می‌کنیم پیش از استفاده، هر محتوای مهمی را خودتان بازبینی کنید.","terms.s7.title":"۷. تغییرات","terms.s7.body":"ممکن است این شرایط را هر از گاهی به‌روزرسانی کنیم و تاریخ \"آخرین به‌روزرسانی\" در بالا را تغییر دهیم. ادامه استفاده از پلتفرم پس از یک تغییر به معنای پذیرش نسخه جدید است.","terms.s8.title":"۸. تماس","terms.s8.body":"برای هر سوالی درباره این شرایط، از طریق صفحه \"پشتیبانی و ارتباط\" با ما تماس بگیرید.","privacy.pageTitle":"سیاست حریم خصوصی","privacy.s1.title":"۱. چه کسی داده‌ها را جمع‌آوری می‌کند","privacy.s1.body":"پلتفرم \"YUSR Pro\" داده‌های شما را با یک هدف جمع‌آوری و پردازش می‌کند: ارائه خدمتی که استفاده می‌کنید.","privacy.s2.title":"۲. داده‌هایی که جمع‌آوری می‌کنیم","privacy.s2.li1":"<b class=\"text-slate-200\">داده‌های حساب کاربری:</b> اگر با گوگل وارد شوید، نام، عکس و ایمیل شما را مستقیماً از گوگل دریافت می‌کنیم. اگر به‌عنوان مهمان وارد شوید، فقط یک هویت ناشناس برای تمایز شما از دیگر کاربران به شما می‌دهیم.","privacy.s2.li2":"<b class=\"text-slate-200\">محتوایی که استفاده می‌کنید:</b> اطلاعات رزومه، نمونه‌کار، متن‌هایی که می‌نویسید یا خلاصه می‌کنید، و ضبط‌های صوتی‌ای که در ابزارهای مصاحبه یا رونویسی بارگذاری می‌کنید.","privacy.s2.li3":"<b class=\"text-slate-200\">داده‌های فنی استفاده:</b> تعداد دفعاتی که از هر ابزار استفاده کرده‌اید (برای اعمال محدودیت‌های استفاده منصفانه)، که به‌صورت محلی روی دستگاه شما (localStorage) ذخیره می‌شود، مانند \"تعداد تلاش‌های باقی‌مانده\".","privacy.s3.title":"۳. چگونه از داده‌های شما استفاده می‌کنیم","privacy.s3.body":"ما داده‌های شما را فقط برای موارد زیر استفاده می‌کنیم: (الف) اجرای ابزارهای هوش مصنوعی (متن یا صوتی که بارگذاری می‌کنید را برای تولید پاسخ به شرکت‌های پردازشی تخصصی می‌فرستیم، بدون ذخیره کلیدها یا اطلاعات ورود شما نزد آن‌ها)، (ب) ذخیره پروفایل شما تا هنگام بازگشت موجود باشد، (ج) بهبود خدمت و جلوگیری از سوءاستفاده.","privacy.s4.title":"۴. چه کسی داده‌های شما را می‌بیند (اشخاص ثالث)","privacy.s4.li1":"<b class=\"text-slate-200\">Google Firebase:</b> برای ورود و ذخیره‌سازی امن پروفایل شما.","privacy.s4.li2":"<b class=\"text-slate-200\">AI Processing Service:</b> برای پردازش متن و صدا در ابزارهای گفتگو و رونویسی.","privacy.s4.li3":"<b class=\"text-slate-200\">Text-to-Speech Service:</b> برای تبدیل متن به گفتار.","privacy.s4.li4":"<b class=\"text-slate-200\">Cloudflare:</b> به‌عنوان یک واسط فنی امن بین برنامه شما و خدمات هوش مصنوعی، بدون نگه‌داری داده‌های شما.","privacy.s4.li5":"<b class=\"text-slate-200\">Web Search Service:</b> فقط برای جستجوی زنده وب در ابزار برآورد حقوق.","privacy.s4.note":"ما هرگز داده‌های شما را به کسی نمی‌فروشیم و هرگز آن را برای اهداف تبلیغاتی به اشتراک نمی‌گذاریم.","privacy.s5.title":"۵. امنیت داده‌ها","privacy.s5.body":"داده‌های شما توسط قوانین امنیتی محافظت می‌شود که تضمین می‌کند هر کاربر فقط داده‌های خودش را می‌بیند، و تمام ارتباط بین برنامه شما و سرور رمزگذاری‌شده (HTTPS) است.","privacy.s6.title":"۶. حقوق شما","privacy.s6.body":"می‌توانید در هر زمان با تماس از طریق صفحه \"پشتیبانی و ارتباط\"، درخواست مشاهده داده‌های ذخیره‌شده خود، ویرایش آن‌ها، یا حذف کامل آن‌ها را بدهید.","privacy.s7.title":"۷. کودکان","privacy.s7.body":"این خدمت برای افراد زیر ۱۳ سال طراحی نشده و ما عمداً از این گروه سنی داده جمع‌آوری نمی‌کنیم.","privacy.s8.title":"۸. تغییرات در این سیاست","privacy.s8.body":"ممکن است این سیاست را هر از گاهی به‌روزرسانی کنیم و هرگاه تغییر قابل‌توجهی ایجاد کنیم، تاریخ \"آخرین به‌روزرسانی\" در بالا را تغییر خواهیم داد.","assistant.botName":"یسر پرو بات","assistant.subtitle":"با نوشتن یا صدا باهاش صحبت کن، و اگه لازم بود چیزی رو ببینه یه عکس براش بفرست","assistant.inputPh":"سوالت رو اینجا بنویس...","assistant.attachImageTitle":"پیوست کردن عکس","assistant.micTitle":"ضبط صدا","assistant.voiceToggleTitle":"روشن/خاموش کردن صدای پاسخ‌ها","assistant.newChatTitle":"شروع گفتگوی جدید","assistant.removeImageTitle":"حذف عکس","assistant.imageAlt":"عکس پیوست‌شده","assistant.providerHint":"توسط چند ارائه‌دهنده هوش مصنوعی پشتیبانی می‌شود — اگه یکی مشغول باشه، بدون اینکه متوجه بشی به‌طور خودکار به دیگری تغییر می‌کند.","assistant.emptyHint":"از {bot} با نوشتن یا صدا سوال بپرس، یا عکسی براش بفرست تا ببینه و دربارش جواب بده.","assistant.defaultImageQuestion":"این عکس رو توصیف کن و با جزئیات توضیح بده توش چی هست.","interview.resumeBefore":"یک جلسه مصاحبه ناتمام وجود دارد (","interview.resumeAfter":"). می‌خواهید ادامه دهید یا جلسه جدیدی شروع کنید؟","interview.resume":"ادامه","interview.startNew":"شروع جدید","interview.voiceLabel":"صدای مصاحبه‌کننده","interview.voiceMale":"صدای مردانه","interview.voiceFemale":"صدای زنانه","interview.personaArLabel":"عربی برجسته","interview.personaEnLabel":"انگلیسی برجسته","interview.screenshot":"عکس‌گیری از گفتگو","interview.endTitle":"پایان دائمی مصاحبه و ذخیره آن در بایگانی","interview.endBtn":"پایان مصاحبه","interview.endHint":"پایان دادن به مصاحبه قطعی است — این جلسه پس از آن قابل ادامه نیست. اگر زبان یا مصاحبه‌کننده متفاوتی می‌خواهید، مصاحبه جدیدی شروع کنید.","interview.stop":"توقف","interview.micTitle":"با صدای خود صحبت کنید","interview.sendAria":"ارسال پاسخ","interview.evalTitle":"ارزیابی عملکرد","cv.tabPlain":"رزومه ساده (بدون عکس)","cv.tabLinkedin":"سبک لینکدین (با عکس)","cv.plainNotice":"یک رزومه متنی ساده بدون هیچ عکسی — متنی حرفه‌ای آماده کپی مستقیم در Word یا هر جای دیگر.","cv.runPlain":"تنظیم رزومه ساده","cv.liNotice":"نسخه‌ای به سبک لینکدین: یک عکس پروفایل در بالا، سپس فهرستی از اطلاعات تماس دقیقاً مانند لینکدین، و پس از آن محتوای رزومه.","cv.liPhotoAlt":"عکس رزومه","cv.liPhotoHint":"عکس شما فقط در مرورگرتان ذخیره می‌شود و هرگز به‌جایی ارسال نمی‌شود.","cv.contactInfo":"اطلاعات تماس","cv.phonePh":"شماره تلفن","cv.emailPh":"آدرس ایمیل","cv.linkedinPh":"لینک لینکدین یا پروفایل حرفه‌ای","cv.locationPh":"شهر / کشور","cv.runLinkedin":"تنظیم رزومه به سبک لینکدین","cv.exportFooter":"ساخته‌شده از طریق پلتفرم یُسر","pf.screenshot":"عکس صفحه","pf.sendAria":"ارسال","common.auto2Text":"العربية","common.auto3Text":"اردو","common.auto4Text":"فارسی","common.emailVerifyResendBtnText":"ارسال دوباره","common.emailVerifyRecheckBtnText":"تأیید کردم، وضعیت را به‌روزرسانی کن","faq.auto1Text":"۸ سوال","faq.auto2Text":"۱۲ سوال","faq.auto3Text":"۱۸ سوال","faq.auto4Text":"فارغ‌التحصیل جدید / کمتر از یک سال تجربه","faq.auto5Text":"سطح میانی (Mid-level)","faq.auto6Text":"ارشد / تجربه گسترده","faq.auto7Text":"سطح مدیریتی / رهبری (Manager+)","career.auto1Text":"طول برنامه","career.auto2Text":"برنامه کامل و مفصل (تمام مراحل و جزئیات)","career.auto3Text":"خلاصه سریع و واضح (فقط نکات کلیدی، بدون توضیح اضافه)","videoMock.auto1Text":"چیزی برایم آماده کن که جلوی دوربین بگویم","videoMock.auto2Text":"به‌جای اینکه دوربین را باز کنی و گیج شوی چه بگویی، یک حالت را انتخاب کن تا سؤالی مشخص برای پاسخ‌دادن، یا متنی آماده برای تمرین خواندن واضح دریافت کنی — سپس هنگام پاسخ‌دادن از خودت فیلم بگیر.","videoMock.auto3Text":"یک سؤال مصاحبه که با صدای بلند پاسخ می‌دهم","videoMock.auto4Text":"متنی آماده برای تمرین خواندن واضح","videoMock.auto5Text":"یکی دیگر برایم آماده کن","videoMock.auto6Text":"جلوی دوربین تمرین کن","videoMock.videoMockStatusText":"روی «شروع دوربین» بزن، مرورگرت اجازه دوربین و میکروفون را می‌خواهد — سپس می‌توانی کلیپی ضبط کرده و برای بازبینی دانلودش کنی.","videoMock.auto7Text":"شبیه‌سازی ایمیل هماهنگی زمان مصاحبه","videoMock.auto8Text":"ایمیلی واقعی از سوی یک «کارشناس استخدام» تولید می‌شود که از شما می‌خواهد تاریخ/مکان یا لینک مصاحبه آنلاین را تأیید کنید، و گاهی انتظارات حقوقی‌تان را بپرسد — تمرین کن حرفه‌ای پاسخ دهی.","videoMock.auto9Text":"تأیید تاریخ و مکان (حضوری)","videoMock.auto10Text":"تأیید زمان مصاحبه آنلاین","videoMock.auto11Text":"سؤال درباره انتظارات حقوقی","videoMock.auto12Text":"تداخل/تغییر ناگهانی زمان","videoMock.auto13Text":"ایمیل فوری (پاسخ ظرف یک روز)","videoMock.auto14Text":"لحن بسیار رسمی","videoMock.auto15Text":"لحن دوستانه و راحت","videoMock.auto16Text":"لحن فوری و پر از فشار زمانی","videoMock.auto17Text":"سؤالات پیگیری مناسب برای حقوق شغل","videoMock.auto18Text":"نکات پوشش و ظاهر مناسب برای مصاحبه","videoMock.auto19Text":"محیط اداری رسمی (بانک‌ها/شرکت‌های بزرگ)","videoMock.auto20Text":"استارتاپ / محیط جوان و غیررسمی","videoMock.auto21Text":"ارتباط مستقیم با مشتریان","videoMock.auto22Text":"حوزه خلاقانه","videoMock.auto23Text":"مصاحبه آنلاین (تماس ویدیویی)","videoMock.auto24Text":"محیط کاری محافظه‌کار خلیج","videoMock.auto25Text":"نکات برای مردان و زنان","videoMock.auto26Text":"نکات فقط برای مردان","videoMock.auto27Text":"نکات فقط برای زنان","salary.auto1Text":"این ابزار در لحظه‌ای که «تخمین بزن» را می‌زنی، نتایج زنده وب درباره بازار کار را جست‌وجو می‌کند و تخمین را با کمک هوش مصنوعی بر پایه آن می‌سازد — نه داده رسمی و نه یک نظرسنجی بازار ۱۰۰٪ دقیق — از آن به‌عنوان نقطه شروع مذاکره استفاده کن، نه رقمی نهایی.","salary.auto2Text":"مصر","salary.auto3Text":"عربستان سعودی","salary.auto4Text":"امارات متحده عربی","salary.auto5Text":"کشورهای خلیج به‌طور کلی","salary.auto6Text":"دورکاری برای شرکت‌های خارجی","progress.auto1Text":"آرشیو مصاحبه‌های شما: به‌جای اینکه هر مصاحبه جدا بماند، یک صفحه تمام مصاحبه‌ها، متن‌ها و گزارش‌های عملکرد شما از «مصاحبه صوتی تمرینی» را جمع می‌کند و پیشرفتتان را در طول زمان نشان می‌دهد.","progress.auto2Text":"یادآوری برای مصاحبه پیش رو","progress.auto3Text":"ذخیره یادآوری","progress.progressReminderEnableBtnText":"فعال‌سازی اعلان واقعی مرورگر (push)","progress.progressReminderStatusText":"اگر ساعت را مشخص کنی، دقیقاً در زمان مصاحبه (با اختلاف حدود ۵ دقیقه) اعلانی دریافت می‌کنی، به‌علاوه یادآوری‌ای دو روز قبل. تا زمانی که اجازه اعلان‌ها را داده باشی و مرورگر در حال اجرا باشد (حتی اگر تب جلوی چشمت نباشد) — همچنان نیاز است مرورگر باز باشد؛ وقتی کاملاً بسته باشد به دستت نمی‌رسد.","progress.auto4Text":"سابقه جلسات قبلی","progress.auto5Text":"مقایسه دو جلسه","match.auto1Text":"شرح شغل و رزومه‌ات را جای‌گذاری کن، درصد تطابق تقریبی به‌همراه نقاط ضعف مشخص و کلمات کلیدی گم‌شده که به عبور از فیلترهای ATS کمک می‌کند به تو می‌دهیم.","match.auto2Text":"رزومه شما","match.auto3Text":"استفاده از رزومه ذخیره‌شده","match.auto4Text":"شرح شغل","cover.auto1Text":"مخصوص مکاتبات رسمی جست‌وجوی شغل: نامه معرفی همراه با رزومه، یادداشت تشکر بعد از مصاحبه، یا پاسخ به پیشنهاد حقوق.","cover.auto2Text":"وارد کردن اطلاعات از رزومه موجود (اختیاری)","cover.auto3Text":"از رزومه‌ات با دوربین عکس بگیر یا تصویر/اسکرین‌شاتی از آن آپلود کن، هوش مصنوعی آن را می‌خواند و داده‌های مهم را برای ساخت نامه استخراج می‌کند.","cover.auto4Text":"آپلود تصویر رزومه","cover.auto5Text":"حالا از رزومه عکس بگیر","cover.auto6Text":"نامه معرفی همراه با رزومه","cover.auto7Text":"یادداشت تشکر و پیگیری پس از مصاحبه","cover.auto8Text":"پاسخ به پیشنهاد حقوق / مذاکره حقوق","writing.auto1Text":"بررسی املایی و دستوری","writing.auto2Text":"قالب‌بندی آکادمیک (APA)","writing.auto3Text":"قالب‌بندی آکادمیک (Harvard)","summarizer.auto1Text":"خلاصه بسیار کوتاه (درک سریع)","summarizer.auto2Text":"نکات فهرست‌وار","summarizer.auto3Text":"یک پاراگراف","summarizer.auto4Text":"خلاصه مفصل با سرتیترها","tr.auto1Text":"🔎 تشخیص خودکار زبان","tr.auto2Text":"العربية","tr.auto3Text":"اردو","tr.auto4Text":"فارسی","tr.auto5Text":"بدون ترجمه - همان زبان","tr.auto6Text":"العربية","pitch.auto1Text":"شروع مصاحبه حضوری","pitch.auto2Text":"ویدیوی معرفی (لینکدین / نمونه‌کار)","pitch.auto3Text":"تماس اولیه با شرکت (شبکه‌سازی)","pitch.auto4Text":"شروع تماس تلفنی / فرصت ناگهانی","pitch.auto5Text":"رسمی، آرام و حرفه‌ای","pitch.auto6Text":"پرشور و پرانرژی","pitch.auto7Text":"ساده، دوستانه و صمیمی","pitch.auto8Text":"متن را گوش کن و زمانش را بسنج","pitch.auto10Text":"ابتدا رزومه‌ات را بساز","pitch.auto11Text":"با مصاحبه صوتی تمرین کن","profile.auto2Text":"تغییر","profile.auto3Text":"رزومه","profile.auto4Text":"نمونه‌کار","profile.auto5Text":"پیگیری پیشرفت","profile.auto6Text":"بسته‌ها","profile.profileStatPrivacyText":"امن","profile.auto7Text":"وضعیت حساب شما","profile.auto8Text":"حساب ورود","profile.auto9Text":"نمای کلی حساب شما","profile.auto10Text":"بسته فعلی شما","profile.auto11Text":"تعداد اشتراک‌ها/خریدها","profile.auto12Text":"سابقه اشتراک‌ها و خریدها","profile.auto13Text":"اشتراک در یک بسته","profile.auto14Text":"تمدید خودکار بسته شما متوقف شده و تا آخرین روز دوره فعلی طبق روال از آن بهره‌مند خواهید بود.","profile.auto15Text":"لغو کنسل‌کردن","profile.auto16Text":"نمی‌خواهی بسته فعلی‌ات را ادامه دهی؟","profile.cancelSubBtnText":"لغو اشتراک","profile.auto17Text":"حریم خصوصی و داده‌های شما","profile.auto18Text":"داده‌های پروفایل، سابقه تمرین و گزارش استفاده‌تان عمدتاً روی دستگاه (مرورگر) شما ذخیره می‌شود، و اگر با گوگل وارد شده باشید، نسخه‌ای از آن با حسابتان همگام‌سازی می‌شود تا از هر دستگاهی پیدایش کنید. عکس‌های رزومه و فایل‌های صوتی/تصویری فقط در زمان استفاده برای پردازش ارسال می‌شوند و به‌طور دائم روی سرور ذخیره نمی‌شوند.","profile.auto19Text":"تغییر رمز عبور","profile.auto20Text":"پاک‌کردن داده‌های ذخیره‌شده من فقط روی این دستگاه","profile.auto21Text":"منطقه خطر","profile.auto22Text":"حذف حساب شما آن را به‌طور دائم از سمت ما پاک می‌کند: داده‌ها، اشتراک‌ها و گزارش استفاده روی سرور (نه فقط این دستگاه) - این اقدامی نهایی و غیرقابل بازگشت است.","profile.deleteAccountBtnText":"حذف دائمی حساب من","profile.auto23Text":"عضویت شما","profile.auto24Text":"مجموع پرداختی","profile.auto25Text":"ارتقای بسته","profile.auto26Text":"نکات سریع","profile.auto27Text":"اطلاعات و عکس خود را کامل کن تا رزومه و نمونه‌کارت بهتر به‌نظر برسد، و بتوانی پیشرفتت را از صفحه «پیگیری پیشرفت» به‌دقت دنبال کنی.","subscriptions.auto1Text":"EGP","subscriptions.auto2Text":"۲۵ درخواست هوش مصنوعی در ماه","subscriptions.auto3Text":"ساخت رزومه و خلاصه‌سازی مدارک","subscriptions.auto4Text":"EGP","subscriptions.auto5Text":"۱۵۰ درخواست هوش مصنوعی در ماه","subscriptions.auto6Text":"گزارش‌های عملکرد مفصل","subscriptions.auto7Text":"ویرایش + تبدیل صدا به متن در همه زبان‌ها","subscriptions.auto8Text":"EGP","subscriptions.auto9Text":"درخواست‌های نامحدود هوش مصنوعی","subscriptions.auto10Text":"همه ابزارهای پلتفرم بدون استثنا","subscriptions.auto11Text":"EGP","subscriptions.auto12Text":"همه امکانات بسته حرفه‌ای","subscriptions.auto13Text":"دو ماه رایگان","subscriptions.auto14Text":"EGP","subscriptions.auto15Text":"همه امکانات بسته حرفه‌ای","subscriptions.auto16Text":"داشبورد پیگیری پیشرفت تیم","subscriptions.auto17Text":"EGP","subscriptions.auto18Text":"همه امکانات حرفه‌ای برای همه دانشجویان","subscriptions.auto19Text":"گزارش گروهی برای سرپرست دوره","subscriptions.auto20Text":"جلسه آموزشی معرفی رایگان","subscriptions.auto21Text":"همه امکانات + سفارشی‌سازی کامل","subscriptions.auto22Text":"مدیر حساب اختصاصی برای دانشگاه","support.auto1Text":"پیشنهاد، شکایت یا سؤالی داری؟","support.auto2Text":"پیشنهاد","support.auto3Text":"شکایت","support.auto4Text":"سؤال","support.auto5Text":"ارسال","pwaIosModal.auto2Text":"نصب اپلیکیشن روی آیفون","pwaIosModal.auto3Text":"اسکرول کن تا «افزودن به صفحه اصلی» را پیدا کنی.","pwaIosModal.auto4Text":"روی «افزودن» در بالا بزن — آیکون YUSR Pro را روی صفحه اصلی مانند هر اپلیکیشن معمولی پیدا خواهی کرد.","pwaIosModal.auto5Text":"باشه، متوجه شدم","pricing.auto2Text":"بسته خود را انتخاب کن","pricing.auto3Text":"همه ابزارهای پلتفرم در یک‌جا - مصاحبه‌ها، رزومه، نمونه‌کار، ویرایش آکادمیک، تبدیل صدا به متن و موارد بیشتر.","pricing.auto4Text":"پایه","pricing.auto5Text":"/ ماهانه","pricing.auto6Text":"۲۵ درخواست هوش مصنوعی در ماه (مصاحبه‌ها، رزومه، همه ابزارها)","pricing.auto7Text":"ساخت رزومه و خلاصه‌سازی مدارک","pricing.auto8Text":"سوالات متداول برای هر شغل","pricing.auto9Text":"پشتیبانی از طریق گفتگوی سایت","pricing.auto10Text":"اشتراک در بسته پایه","pricing.auto11Text":"پرطرفدارترین","pricing.auto12Text":"حرفه‌ای","pricing.auto13Text":"/ ماهانه","pricing.auto14Text":"۱۵۰ درخواست هوش مصنوعی در ماه (کافی برای تمرین تقریباً روزانه)","pricing.auto15Text":"گزارش‌های عملکرد مفصل پس از هر مصاحبه","pricing.auto16Text":"برنامه‌های توسعه شغلی سفارشی","pricing.auto17Text":"نمونه‌کار + ویرایش آکادمیک","pricing.auto18Text":"تبدیل صدا به متن در همه زبان‌های موجود","pricing.auto19Text":"پشتیبانی فنی اولویت‌دار","pricing.auto20Text":"اشتراک در بسته حرفه‌ای","pricing.auto21Text":"بهترین ارزش","pricing.auto22Text":"الیت","pricing.auto23Text":"/ ماهانه","pricing.auto24Text":"درخواست‌های کاملاً نامحدود هوش مصنوعی، بدون هیچ سقف ماهانه","pricing.auto25Text":"همه ابزارهای پلتفرم بدون استثنا","pricing.auto26Text":"پاسخ با بالاترین اولویت از تیم پشتیبانی","pricing.auto27Text":"اشتراک در بسته الیت","pricing.auto28Text":"سالانه","pricing.auto29Text":"/ سالانه","pricing.auto30Text":"همه امکانات حرفه‌ای (۱۵۰ درخواست در ماه در طول سال)","pricing.auto31Text":"تقریباً دو ماه نسبت به اشتراک ماهانه صرفه‌جویی کن","pricing.auto32Text":"یک مشاوره توسعه شغلی در سال","pricing.auto33Text":"اشتراک در بسته سالانه","pricing.auto34Text":"بستن","cvBuildModal.auto1Text":"اتصال داده‌های رزومه به مصاحبه","cvBuildModal.auto2Text":"متن تجربیاتت را جای‌گذاری کن تا سؤالات بر اساس آن تنظیم شود:","cvBuildModal.auto3Text":"ذخیره","cvBuildModal.auto4Text":"لغو","reportModal.auto1Text":"گزارش عملکرد مفصل","termsGate.auto1Text":"پیش از شروع","termsGate.auto2Text":"شرایط استفاده و سیاست حریم خصوصی را خوانده‌ام و می‌پذیرم.","termsGate.termsGateContinueText":"ادامه","paymentRequest.auto1Text":"تکمیل اشتراک","paymentRequest.auto3Text":"مبلغ بسته را از طریق Vodafone Cash یا InstaPay به این شماره واریز کن:","paymentRequest.auto5Text":"پس از واریز، اطلاعات خود را در پایین پر کن و درخواست را ارسال کن — پس از بررسی واریزی، بسته طی چند ساعت به‌صورت دستی روی حساب شما فعال می‌شود.","paymentRequest.prSubmitBtnText":"واریز انجام شد، ارسال درخواست","cancelSub.auto1Text":"فقط تمدید خودکار متوقف می‌شود - تا آخرین روز این دوره طبق روال از تمام مزایای بسته فعلی خود بهره‌مند خواهید بود، و پس از آن به‌طور خودکار به بسته رایگان بازمی‌گردید. می‌توانید هر زمان پیش از پایان دوره، لغو را بازگردانید.","cancelSub.auto2Text":"بازگردانی","cancelSub.cancelSubConfirmBtnText":"تأیید لغو","videoMock.videoMockTopicPh":"شغل یا موضوع (مثلاً: خدمات مشتری)","videoMock.videoEmailRolePh":"شغلی که برای آن درخواست می‌دهی (مثلاً: حسابدار)","videoMock.videoEmailReplyPh":"پاسخت به ایمیل را اینجا بنویس...","videoMock.videoSalaryQRolePh":"شغل (اختیاری اگر بالا نوشته شده)","salary.salaryRolePh":"عنوان شغلی (مثلاً: طراح گرافیک)","salary.salaryExperiencePh":"سال‌های تجربه (مثلاً: ۳ سال)","match.cvMatchResumePh":"متن رزومه‌ات را اینجا جای‌گذاری کن، یا روی «اتصال رزومه» در بالا بزن...","match.cvMatchJobdescPh":"متن آگهی شغلی را اینجا جای‌گذاری کن...","cover.coverCvExtractPh":"داده‌های استخراج‌شده از تصویر رزومه اینجا نمایش داده می‌شود، پیش از ادامه می‌توانی آن را ویرایش کنی","cover.coverRolePh":"شغلی که برای آن درخواست می‌دهی","cover.coverCompanyPh":"نام شرکت (اختیاری)","cover.coverNotesPh":"یک یا دو نکته مهم که می‌خواهی برجسته کنی (تجربه، دستاورد، دلیل علاقه‌ات به شرکت...) - اختیاری","support.fbContactPh":"شماره موبایل یا ایمیل برای تماس (اختیاری)","support.fbMessagePh":"پیام خود را اینجا بنویس...","cvBuildModal.cvTextInputPh":"متن تجربیاتت را اینجا وارد کن...","paymentRequest.prNamePh":"نام","paymentRequest.prPhonePh":"شماره موبایلی که از آن واریز کردی","paymentRequest.prRefPh":"آخرین ارقام تراکنش یا یادداشتی (اختیاری)","common.themeToggleBtnTitle":"تغییر به حالت روشن","assistant.assistantGenderToggleBtnTitle":"صدای پاسخ: مرد","common.themeToggleBtnAria":"تغییر به حالت روشن","tr.transcribeMicBtnAria":"ضبط صدا برای تبدیل به متن","pitch.auto9Aria":"توقف خواندن صوتی","profile.auto1Aria":"تغییر عکس پروفایل","profile.profilePhotoInputAria":"آپلود عکس پروفایل","profile.profileNameAria":"نام کامل شما","profile.profileTitleAria":"عنوان شغلی","donations.auto1Aria":"کپی شماره","donations.auto2Aria":"کپی شماره","donations.auto3Aria":"کپی شماره","pwaIosModal.auto1Aria":"بستن","pricing.auto1Aria":"بازگشت","reportModal.auto2Aria":"بستن","paymentRequest.auto2Aria":"بستن","paymentRequest.auto4Aria":"کپی شماره","profile.profilePhotoPreviewAlt":"عکس پروفایل","profile.signedinAvatarImgAlt":"عکس حساب"
        }
    };
    const UI_STR = {
        themeToLight: { ar:'التحويل للوضع الفاتح', en:'Switch to light mode', fr:'Passer au mode clair', es:'Cambiar a modo claro', tr:'Açık moda geç', de:'Zum hellen Modus wechseln', hi:'लाइट मोड पर स्विच करें', ur:'لائٹ موڈ پر جائیں', fa:'رفتن به حالت روشن' },
        themeToDark: { ar:'التحويل للوضع الداكن', en:'Switch to dark mode', fr:'Passer au mode sombre', es:'Cambiar a modo oscuro', tr:'Koyu moda geç', de:'Zum dunklen Modus wechseln', hi:'डार्क मोड पर स्विच करें', ur:'ڈارک موڈ پر جائیں', fa:'رفتن به حالت تاریک' },
        pwaInstallHint: { ar:'افتح قائمة المتصفح (⋮ أو ⋯) واختار "تثبيت التطبيق" أو "إضافة إلى الشاشة الرئيسية".', en:'Open your browser menu and choose "Install app" or "Add to Home screen".', fr:'Ouvrez le menu de votre navigateur et choisissez « Installer l\'application » ou « Ajouter à l\'écran d\'accueil ».', es:'Abre el menú de tu navegador y elige "Instalar aplicación" o "Añadir a la pantalla de inicio".', tr:'Tarayıcı menünüzü açın ve "Uygulamayı yükle" veya "Ana ekrana ekle" seçeneğini seçin.', de:'Öffne dein Browser-Menü und wähle „App installieren" oder „Zum Startbildschirm hinzufügen".', hi:'अपने ब्राउज़र का मेन्यू खोलें और "ऐप इंस्टॉल करें" या "होम स्क्रीन पर जोड़ें" चुनें।', ur:'اپنے براؤزر کا مینو کھولیں اور "ایپ انسٹال کریں" یا "ہوم اسکرین پر شامل کریں" منتخب کریں۔', fa:'منوی مرورگر خود را باز کنید و «نصب برنامه» یا «افزودن به صفحه اصلی» را انتخاب کنید.' },
        pwaInstalled: { ar:'اتثبّت التطبيق بنجاح! دلوقتي تقدر تفتحه من شاشتك الرئيسية زي أي تطبيق.', en:'App installed! Open it from your home screen from now on.', fr:'Application installée ! Ouvrez-la désormais depuis votre écran d\'accueil.', es:'¡Aplicación instalada! Ábrela desde tu pantalla de inicio a partir de ahora.', tr:'Uygulama yüklendi! Artık ana ekranınızdan açabilirsiniz.', de:'App installiert! Öffne sie ab jetzt über deinen Startbildschirm.', hi:'ऐप इंस्टॉल हो गई! अब से इसे अपनी होम स्क्रीन से खोलें।', ur:'ایپ انسٹال ہو گئی! اب سے اسے اپنی ہوم اسکرین سے کھولیں۔', fa:'برنامه نصب شد! از این پس آن را از صفحه اصلی خود باز کنید.' },
        subscriptionActivated: { ar:'🎉 تم تفعيل باقتك بنجاح: {plan}! اتمتع بمميزاتها دلوقتي.', en:'🎉 Your subscription is now active: {plan}. Enjoy!', fr:'🎉 Votre abonnement est maintenant actif : {plan}. Profitez-en !', es:'🎉 Tu suscripción ya está activa: {plan}. ¡Disfrútala!', tr:'🎉 Aboneliğiniz artık aktif: {plan}. Keyfini çıkarın!', de:'🎉 Dein Abo ist jetzt aktiv: {plan}. Viel Freude damit!', hi:'🎉 आपकी सदस्यता अब सक्रिय है: {plan}। आनंद लें!', ur:'🎉 آپ کی سبسکرپشن اب فعال ہے: {plan}۔ لطف اٹھائیں!', fa:'🎉 اشتراک شما اکنون فعال است: {plan}. لذت ببرید!' },
        verifyEmailFirst: { ar:'لازم تأكّد إيميلك الأول قبل ما تشترك في باقة مدفوعة.', en:'Please verify your email first before subscribing to a paid plan.', fr:'Veuillez d\'abord vérifier votre e-mail avant de vous abonner à un plan payant.', es:'Verifica tu correo primero antes de suscribirte a un plan de pago.', tr:'Ücretli bir pakete abone olmadan önce lütfen önce e-postanızı doğrulayın.', de:'Bitte bestätige zuerst deine E-Mail-Adresse, bevor du ein kostenpflichtiges Abo abschließt.', hi:'भुगतान वाले प्लान की सदस्यता लेने से पहले कृपया अपना ईमेल सत्यापित करें।', ur:'ادا شدہ پیکج سبسکرائب کرنے سے پہلے براہ کرم اپنی ای میل کی تصدیق کریں۔', fa:'لطفاً قبل از اشتراک در یک بسته پولی، ابتدا ایمیل خود را تأیید کنید.' },
        autoRenewalStopped: { ar:'تم إيقاف التجديد التلقائي. هتفضل مستفيد من باقتك الحالية لحد آخر يوم في الفترة دي.', en:'Auto-renewal stopped. You keep your current plan until the end of this period.', fr:'Renouvellement automatique arrêté. Vous conservez votre plan actuel jusqu\'à la fin de cette période.', es:'Renovación automática detenida. Conservarás tu plan actual hasta el final de este periodo.', tr:'Otomatik yenileme durduruldu. Bu dönemin sonuna kadar mevcut paketinizi kullanmaya devam edeceksiniz.', de:'Automatische Verlängerung gestoppt. Du behältst dein aktuelles Abo bis zum Ende dieses Zeitraums.', hi:'ऑटो-रिन्यूअल रोक दिया गया है। इस अवधि के अंत तक आप अपने मौजूदा प्लान का लाभ लेते रहेंगे।', ur:'خودکار تجدید روک دی گئی۔ آپ اس مدت کے اختتام تک اپنے موجودہ پیکج سے مستفید ہوتے رہیں گے۔', fa:'تمدید خودکار متوقف شد. تا پایان این دوره از بسته فعلی خود بهره‌مند خواهید بود.' },
        genericProcessError: { ar:'تعذّر تنفيذ الطلب، جرب تاني.', en:'Could not process this, please try again.', fr:'Impossible de traiter cette demande, veuillez réessayer.', es:'No se pudo procesar esto, inténtalo de nuevo.', tr:'Bu işlem gerçekleştirilemedi, lütfen tekrar deneyin.', de:'Dies konnte nicht verarbeitet werden, bitte versuche es erneut.', hi:'यह प्रोसेस नहीं हो सका, कृपया दोबारा कोशिश करें।', ur:'یہ عمل مکمل نہیں ہو سکا، براہ کرم دوبارہ کوشش کریں۔', fa:'این درخواست پردازش نشد، لطفاً دوباره تلاش کنید.' },
        subRenewNormally: { ar:'اشتراكك هيتجدّد عادي زي ما كان.', en:'Your subscription will renew as usual.', fr:'Votre abonnement se renouvellera normalement.', es:'Tu suscripción se renovará con normalidad.', tr:'Aboneliğiniz her zamanki gibi yenilenecek.', de:'Dein Abo wird wie gewohnt verlängert.', hi:'आपकी सदस्यता हमेशा की तरह रिन्यू होगी।', ur:'آپ کی سبسکرپشن معمول کے مطابق تجدید ہو جائے گی۔', fa:'اشتراک شما طبق روال تمدید خواهد شد.' },
        undoError: { ar:'تعذّر التراجع، جرب تاني.', en:'Could not undo, please try again.', fr:'Impossible d\'annuler, veuillez réessayer.', es:'No se pudo deshacer, inténtalo de nuevo.', tr:'Geri alınamadı, lütfen tekrar deneyin.', de:'Rückgängig machen fehlgeschlagen, bitte versuche es erneut.', hi:'पूर्ववत नहीं किया जा सका, कृपया दोबारा कोशिश करें।', ur:'کالعدم نہیں ہو سکا، براہ کرم دوبارہ کوشش کریں۔', fa:'امکان لغو وجود نداشت، لطفاً دوباره تلاش کنید.' },
        currentlySubscribedLabel: { ar:'مشترك حاليًا', en:'Currently subscribed', fr:'Actuellement abonné', es:'Actualmente suscrito', tr:'Şu anda abone', de:'Derzeit abonniert', hi:'वर्तमान में सदस्यता प्राप्त', ur:'فی الحال سبسکرائب شدہ', fa:'در حال حاضر مشترک' },
        logoutConfirm: { ar:'تسجيل الخروج من حسابك على الجهاز ده؟', en:'Log out of your account on this device?', fr:'Se déconnecter de votre compte sur cet appareil ?', es:'¿Cerrar sesión de tu cuenta en este dispositivo?', tr:'Bu cihazdaki hesabınızdan çıkış yapılsın mı?', de:'Von deinem Konto auf diesem Gerät abmelden?', hi:'इस डिवाइस पर अपने खाते से लॉग आउट करें?', ur:'اس ڈیوائس پر اپنے اکاؤنٹ سے لاگ آؤٹ کریں؟', fa:'از حساب کاربری خود در این دستگاه خارج شوید؟' },
        loggedOut: { ar:'تم تسجيل الخروج. تقدر تسجل دخول تاني في أي وقت.', en:'Logged out. You can sign in again anytime.', fr:'Déconnecté. Vous pouvez vous reconnecter à tout moment.', es:'Sesión cerrada. Puedes volver a iniciar sesión cuando quieras.', tr:'Çıkış yapıldı. İstediğiniz zaman tekrar giriş yapabilirsiniz.', de:'Abgemeldet. Du kannst dich jederzeit wieder anmelden.', hi:'लॉग आउट हो गया। आप कभी भी दोबारा साइन इन कर सकते हैं।', ur:'لاگ آؤٹ ہو گیا۔ آپ کسی بھی وقت دوبارہ سائن ان کر سکتے ہیں۔', fa:'خارج شدید. هر زمان می‌توانید دوباره وارد شوید.' },
        chooseImageFile: { ar:'من فضلك اختر ملف صورة (jpg, png...).', en:'Please choose an image file.', fr:'Veuillez choisir un fichier image.', es:'Por favor, elige un archivo de imagen.', tr:'Lütfen bir resim dosyası seçin.', de:'Bitte wähle eine Bilddatei aus.', hi:'कृपया एक इमेज फ़ाइल चुनें।', ur:'براہ کرم ایک تصویری فائل منتخب کریں۔', fa:'لطفاً یک فایل تصویری انتخاب کنید.' },
        imageTooLarge: { ar:'حجم الصورة كبير جداً (الحد الأقصى 12 ميجا).', en:'Image is too large (max 12MB).', fr:'L\'image est trop volumineuse (max 12 Mo).', es:'La imagen es demasiado grande (máx. 12 MB).', tr:'Görsel çok büyük (maksimum 12 MB).', de:'Das Bild ist zu groß (max. 12 MB).', hi:'इमेज बहुत बड़ी है (अधिकतम 12MB)।', ur:'تصویر بہت بڑی ہے (زیادہ سے زیادہ 12MB)۔', fa:'تصویر خیلی بزرگ است (حداکثر ۱۲ مگابایت).' },
        profilePhotoUpdated: { ar:'تم تحديث صورة الملف الشخصي.', en:'Profile photo updated.', fr:'Photo de profil mise à jour.', es:'Foto de perfil actualizada.', tr:'Profil fotoğrafı güncellendi.', de:'Profilbild aktualisiert.', hi:'प्रोफ़ाइल फ़ोटो अपडेट हो गई।', ur:'پروفائل تصویر اپ ڈیٹ ہو گئی۔', fa:'عکس پروفایل به‌روزرسانی شد.' },
        imageProcessError: { ar:'حصلت مشكلة في معالجة الصورة.', en:'Could not process this image.', fr:'Impossible de traiter cette image.', es:'No se pudo procesar esta imagen.', tr:'Bu görsel işlenemedi.', de:'Dieses Bild konnte nicht verarbeitet werden.', hi:'यह इमेज प्रोसेस नहीं हो सकी।', ur:'یہ تصویر پروسیس نہیں ہو سکی۔', fa:'پردازش این تصویر ممکن نشد.' },
        clearLocalDataConfirm: { ar:'هيتم حذف بياناتك المحفوظة على الجهاز ده نهائياً (البروفايل، سجل التقدم، أي بيانات محلية) — ده إجراء نهائي ومش هيرجع. متأكد؟', en:'This will permanently delete your profile, progress history, and locally-saved data on this device/browser. This cannot be undone. Continue?', fr:'Cela supprimera définitivement votre profil, votre historique de progression et les données enregistrées localement sur cet appareil/navigateur. Cette action est irréversible. Continuer ?', es:'Esto eliminará permanentemente tu perfil, historial de progreso y datos guardados localmente en este dispositivo/navegador. Esta acción no se puede deshacer. ¿Continuar?', tr:'Bu işlem profilinizi, ilerleme geçmişinizi ve bu cihazda/tarayıcıda yerel olarak kaydedilmiş verileri kalıcı olarak silecektir. Bu işlem geri alınamaz. Devam edilsin mi?', de:'Dadurch werden dein Profil, dein Fortschrittsverlauf und lokal auf diesem Gerät/Browser gespeicherte Daten dauerhaft gelöscht. Dies kann nicht rückgängig gemacht werden. Fortfahren?', hi:'इससे आपकी प्रोफ़ाइल, प्रगति इतिहास और इस डिवाइस/ब्राउज़र पर स्थानीय रूप से सेव किया गया डेटा स्थायी रूप से हटा दिया जाएगा। इसे पूर्ववत नहीं किया जा सकता। जारी रखें?', ur:'اس سے آپ کی پروفائل، پیشرفت کی ہسٹری اور اس ڈیوائس/براؤزر پر مقامی طور پر محفوظ ڈیٹا مستقل طور پر حذف ہو جائے گا۔ یہ عمل واپس نہیں ہو سکتا۔ جاری رکھیں؟', fa:'این کار پروفایل، تاریخچه پیشرفت و داده‌های ذخیره‌شده محلی روی این دستگاه/مرورگر را برای همیشه حذف می‌کند. این کار قابل بازگشت نیست. ادامه می‌دهید؟' },
        localDataCleared: { ar:'تم مسح بياناتك المحلية.', en:'Local data cleared.', fr:'Données locales effacées.', es:'Datos locales borrados.', tr:'Yerel veriler temizlendi.', de:'Lokale Daten gelöscht.', hi:'स्थानीय डेटा हटा दिया गया।', ur:'مقامی ڈیٹا صاف کر دیا گیا۔', fa:'داده‌های محلی پاک شد.' },
        localDataClearError: { ar:'تعذر مسح البيانات، حاول تاني.', en:'Could not clear local data.', fr:'Impossible d\'effacer les données locales.', es:'No se pudieron borrar los datos locales.', tr:'Yerel veriler temizlenemedi.', de:'Lokale Daten konnten nicht gelöscht werden.', hi:'स्थानीय डेटा साफ़ नहीं हो सका।', ur:'مقامی ڈیٹا صاف نہیں ہو سکا۔', fa:'پاک کردن داده‌های محلی ممکن نشد.' },
        reauthGoogleNotice: { ar:'لأسباب أمنية، أكّد هويتك بتسجيل الدخول بجوجل تاني — الحذف هيكمّل تلقائي بعد كده.', en:'For your security, please confirm by signing in with Google again — deletion will continue automatically.', fr:'Pour votre sécurité, veuillez confirmer en vous reconnectant avec Google — la suppression se poursuivra automatiquement.', es:'Por tu seguridad, confirma volviendo a iniciar sesión con Google — la eliminación continuará automáticamente.', tr:'Güvenliğiniz için lütfen Google ile tekrar giriş yaparak onaylayın — silme işlemi otomatik olarak devam edecektir.', de:'Bitte bestätige zu deiner Sicherheit, indem du dich erneut mit Google anmeldest — die Löschung wird automatisch fortgesetzt.', hi:'आपकी सुरक्षा के लिए, कृपया Google से दोबारा साइन इन करके पुष्टि करें — डिलीशन अपने आप जारी रहेगा।', ur:'آپ کی سیکیورٹی کے لیے، براہ کرم گوگل سے دوبارہ سائن ان کر کے تصدیق کریں — حذف خودکار طور پر جاری رہے گا۔', fa:'برای امنیت شما، لطفاً با ورود مجدد از طریق گوگل تأیید کنید — حذف به‌طور خودکار ادامه خواهد یافت.' },
        reauthPasswordPrompt: { ar:'اكتب كلمة المرور الحالية لحساب {email} عشان تأكد إنك فعلاً صاحب الحساب قبل الحذف النهائي:', en:'Please re-enter the password for {email} to confirm permanent account deletion:', fr:'Veuillez ressaisir le mot de passe de {email} pour confirmer la suppression définitive du compte :', es:'Vuelve a introducir la contraseña de {email} para confirmar la eliminación permanente de la cuenta:', tr:'Hesabın kalıcı olarak silinmesini onaylamak için lütfen {email} şifresini tekrar girin:', de:'Bitte gib das Passwort für {email} erneut ein, um die endgültige Kontolöschung zu bestätigen:', hi:'खाते के स्थायी विलोपन की पुष्टि के लिए कृपया {email} का पासवर्ड दोबारा दर्ज करें:', ur:'اکاؤنٹ کے مستقل حذف کی تصدیق کے لیے براہ کرم {email} کا پاس ورڈ دوبارہ درج کریں:', fa:'برای تأیید حذف دائمی حساب، لطفاً رمز عبور {email} را دوباره وارد کنید:' },
        accountDeleted: { ar:'تم حذف حسابك نهائياً من عندنا.', en:'Your account has been permanently deleted.', fr:'Votre compte a été définitivement supprimé.', es:'Tu cuenta ha sido eliminada permanentemente.', tr:'Hesabınız kalıcı olarak silindi.', de:'Dein Konto wurde dauerhaft gelöscht.', hi:'आपका खाता स्थायी रूप से हटा दिया गया है।', ur:'آپ کا اکاؤنٹ مستقل طور پر حذف کر دیا گیا ہے۔', fa:'حساب شما برای همیشه حذف شد.' },
        noSignedInAccount: { ar:'مفيش حساب مسجّل دخول حالياً.', en:'No signed-in account found.', fr:'Aucun compte connecté trouvé.', es:'No se encontró ninguna cuenta con sesión iniciada.', tr:'Oturum açmış bir hesap bulunamadı.', de:'Kein angemeldetes Konto gefunden.', hi:'कोई साइन-इन खाता नहीं मिला।', ur:'کوئی سائن اِن اکاؤنٹ نہیں ملا۔', fa:'هیچ حساب واردشده‌ای یافت نشد.' },
        deleteWord: { ar:'حذف', en:'DELETE', fr:'SUPPRIMER', es:'ELIMINAR', tr:'SİL', de:'LÖSCHEN', hi:'हटाएं', ur:'حذف کریں', fa:'حذف' },
        deleteAccountPrompt: { ar:'الإجراء ده هيمسح حسابك نهائياً من عندنا: بياناتك، اشتراكاتك، وسجل استخدامك على السيرفر - ده نهائي ومش هيرجع خالص تاني.\\n\\nاكتب كلمة "{word}" بالظبط عشان تأكد.', en:'This will PERMANENTLY delete your account, subscriptions, and all your data from our servers. This cannot be undone.\\n\\nType "{word}" to confirm.', fr:'Cela supprimera DÉFINITIVEMENT votre compte, vos abonnements et toutes vos données de nos serveurs. Cette action est irréversible.\\n\\nTapez « {word} » pour confirmer.', es:'Esto eliminará PERMANENTEMENTE tu cuenta, suscripciones y todos tus datos de nuestros servidores. Esta acción no se puede deshacer.\\n\\nEscribe "{word}" para confirmar.', tr:'Bu işlem hesabınızı, aboneliklerinizi ve tüm verilerinizi sunucularımızdan KALICI olarak silecektir. Bu işlem geri alınamaz.\\n\\nOnaylamak için "{word}" yazın.', de:'Dies löscht dein Konto, deine Abos und alle deine Daten DAUERHAFT von unseren Servern. Dies kann nicht rückgängig gemacht werden.\\n\\nGib "{word}" ein, um zu bestätigen.', hi:'इससे आपका खाता, सदस्यताएं और आपका सारा डेटा हमारे सर्वर से स्थायी रूप से हटा दिया जाएगा। इसे पूर्ववत नहीं किया जा सकता।\\n\\nपुष्टि के लिए "{word}" टाइप करें।', ur:'اس سے آپ کا اکاؤنٹ، سبسکرپشنز اور آپ کا تمام ڈیٹا ہمارے سرورز سے مستقل طور پر حذف ہو جائے گا۔ یہ واپس نہیں ہو سکتا۔\\n\\nتصدیق کے لیے "{word}" ٹائپ کریں۔', fa:'این کار حساب، اشتراک‌ها و تمام داده‌های شما را برای همیشه از سرورهای ما حذف می‌کند. این کار قابل بازگشت نیست.\\n\\nبرای تأیید عبارت «{word}» را تایپ کنید.' },
        deleteConfirmMismatch: { ar:'الكلمة اللي كتبتها مش مطابقة، فمتمسحش أي حاجة.', en:'Confirmation text did not match. Nothing was deleted.', fr:'Le texte de confirmation ne correspond pas. Rien n\'a été supprimé.', es:'El texto de confirmación no coincide. No se eliminó nada.', tr:'Onay metni eşleşmedi. Hiçbir şey silinmedi.', de:'Der Bestätigungstext stimmt nicht überein. Es wurde nichts gelöscht.', hi:'पुष्टिकरण टेक्स्ट मेल नहीं खाया। कुछ भी नहीं हटाया गया।', ur:'تصدیقی متن مماثل نہیں تھا۔ کچھ بھی حذف نہیں ہوا۔', fa:'متن تأیید مطابقت نداشت. چیزی حذف نشد.' },
        reauthFailedPassword: { ar:'تعذّر تأكيد هويتك - يمكن كلمة المرور غلط.', en:'Could not verify your identity. Password may be wrong.', fr:'Impossible de vérifier votre identité. Le mot de passe est peut-être incorrect.', es:'No se pudo verificar tu identidad. La contraseña puede ser incorrecta.', tr:'Kimliğiniz doğrulanamadı. Şifre yanlış olabilir.', de:'Deine Identität konnte nicht bestätigt werden. Das Passwort ist möglicherweise falsch.', hi:'आपकी पहचान सत्यापित नहीं हो सकी। पासवर्ड गलत हो सकता है।', ur:'آپ کی شناخت کی تصدیق نہیں ہو سکی۔ پاس ورڈ غلط ہو سکتا ہے۔', fa:'هویت شما تأیید نشد. ممکن است رمز عبور اشتباه باشد.' },
        deleteAccountError: { ar:'تعذّر حذف الحساب، جرب تاني.', en:'Could not delete your account, please try again.', fr:'Impossible de supprimer votre compte, veuillez réessayer.', es:'No se pudo eliminar tu cuenta, inténtalo de nuevo.', tr:'Hesabınız silinemedi, lütfen tekrar deneyin.', de:'Dein Konto konnte nicht gelöscht werden, bitte versuche es erneut.', hi:'आपका खाता हटाया नहीं जा सका, कृपया दोबारा कोशिश करें।', ur:'آپ کا اکاؤنٹ حذف نہیں ہو سکا، براہ کرم دوبارہ کوشش کریں۔', fa:'حذف حساب شما ممکن نشد، لطفاً دوباره تلاش کنید.' },
        enterNameFirst: { ar:'من فضلك اكتب اسمك الكامل الأول.', en:'Please enter your name first.', fr:'Veuillez d\'abord saisir votre nom.', es:'Por favor, introduce tu nombre primero.', tr:'Lütfen önce adınızı girin.', de:'Bitte gib zuerst deinen Namen ein.', hi:'कृपया पहले अपना नाम दर्ज करें।', ur:'براہ کرم پہلے اپنا نام درج کریں۔', fa:'لطفاً ابتدا نام خود را وارد کنید.' },
        savedToast: { ar:'تم الحفظ!', en:'Saved!', fr:'Enregistré !', es:'¡Guardado!', tr:'Kaydedildi!', de:'Gespeichert!', hi:'सेव हो गया!', ur:'محفوظ ہو گیا!', fa:'ذخیره شد!' },
        googleClientIdMissing: { ar:'تسجيل الدخول بجوجل الحقيقي محتاج Client ID من Google Cloud يتحط في الكود (GOOGLE_CLIENT_ID) من صاحب الموقع. لحد ما يتحط، الزرار ده هيفضل تجريبي.', en:'Google Sign-In needs a real Google OAuth Client ID configured by the site owner in the code (GOOGLE_CLIENT_ID). Once set, this button will open the real Google sign-in popup.', fr:'La connexion Google nécessite un véritable identifiant client OAuth Google configuré par le propriétaire du site dans le code (GOOGLE_CLIENT_ID). Une fois configuré, ce bouton ouvrira la véritable fenêtre de connexion Google.', es:'El inicio de sesión con Google necesita un ID de cliente OAuth de Google real configurado por el propietario del sitio en el código (GOOGLE_CLIENT_ID). Una vez configurado, este botón abrirá la ventana real de inicio de sesión de Google.', tr:'Google ile Giriş için site sahibinin kodda (GOOGLE_CLIENT_ID) gerçek bir Google OAuth İstemci Kimliği tanımlaması gerekir. Ayarlandığında bu buton gerçek Google giriş penceresini açacaktır.', de:'Für die Google-Anmeldung wird eine echte Google-OAuth-Client-ID benötigt, die vom Website-Betreiber im Code (GOOGLE_CLIENT_ID) hinterlegt werden muss. Sobald sie eingerichtet ist, öffnet dieser Button das echte Google-Anmeldefenster.', hi:'Google साइन-इन के लिए साइट के मालिक द्वारा कोड में (GOOGLE_CLIENT_ID) एक असली Google OAuth क्लाइंट ID सेट करना ज़रूरी है। सेट होने के बाद, यह बटन असली Google साइन-इन पॉपअप खोलेगा।', ur:'Google سائن ان کے لیے سائٹ کے مالک کی طرف سے کوڈ میں (GOOGLE_CLIENT_ID) ایک حقیقی Google OAuth کلائنٹ ID ترتیب دینا ضروری ہے۔ سیٹ ہونے کے بعد، یہ بٹن اصل Google سائن ان پاپ اپ کھولے گا۔', fa:'ورود با گوگل به یک شناسه کلاینت واقعی OAuth گوگل نیاز دارد که باید توسط مالک سایت در کد (GOOGLE_CLIENT_ID) تنظیم شود. پس از تنظیم، این دکمه پنجره واقعی ورود گوگل را باز خواهد کرد.' },
        googleSigninLoading: { ar:'تسجيل الدخول بجوجل لسه بيتحمّل، جرب تدوس تاني بعد لحظة.', en:'Google sign-in is still loading, please try again in a second.', fr:'La connexion Google est encore en cours de chargement, veuillez réessayer dans un instant.', es:'El inicio de sesión con Google todavía se está cargando, inténtalo de nuevo en un momento.', tr:'Google girişi hâlâ yükleniyor, lütfen bir saniye sonra tekrar deneyin.', de:'Die Google-Anmeldung wird noch geladen, bitte versuche es in einem Moment erneut.', hi:'Google साइन-इन अभी भी लोड हो रहा है, कृपया एक पल में फिर कोशिश करें।', ur:'Google سائن ان ابھی لوڈ ہو رہا ہے، براہ کرم ایک لمحے میں دوبارہ کوشش کریں۔', fa:'ورود با گوگل هنوز در حال بارگذاری است، لطفاً کمی بعد دوباره تلاش کنید.' },
        copiedBtnLabel: { ar:'تم النسخ', en:'Copied', fr:'Copié', es:'Copiado', tr:'Kopyalandı', de:'Kopiert', hi:'कॉपी हो गया', ur:'کاپی ہو گیا', fa:'کپی شد' },
        conversationCopied: { ar:'تم نسخ المحادثة!', en:'Conversation copied!', fr:'Conversation copiée !', es:'¡Conversación copiada!', tr:'Konuşma kopyalandı!', de:'Unterhaltung kopiert!', hi:'बातचीत कॉपी हो गई!', ur:'گفتگو کاپی ہو گئی!', fa:'گفتگو کپی شد!' },
        copiedToast: { ar:'تم النسخ!', en:'Copied!', fr:'Copié !', es:'¡Copiado!', tr:'Kopyalandı!', de:'Kopiert!', hi:'कॉपी हो गया!', ur:'کاپی ہو گیا!', fa:'کپی شد!' },
        fileTooLarge50mb: { ar:'حجم الملف كبير جداً (أقصى حجم 50MB)، جرب مقطع أقصر.', en:'File too large (max 50MB). Try a shorter clip.', fr:'Fichier trop volumineux (max 50 Mo). Essayez un extrait plus court.', es:'El archivo es demasiado grande (máx. 50 MB). Prueba con un clip más corto.', tr:'Dosya çok büyük (maksimum 50MB). Daha kısa bir klip deneyin.', de:'Die Datei ist zu groß (max. 50 MB). Versuche es mit einem kürzeren Clip.', hi:'फ़ाइल बहुत बड़ी है (अधिकतम 50MB)। एक छोटा क्लिप आज़माएं।', ur:'فائل بہت بڑی ہے (زیادہ سے زیادہ 50MB)۔ ایک چھوٹا کلپ آزمائیں۔', fa:'فایل خیلی بزرگ است (حداکثر ۵۰ مگابایت). یک کلیپ کوتاه‌تر امتحان کنید.' },
        uploadingTranscribing: { ar:'جاري رفع وتفريغ بدقة عالية:', en:'Uploading & transcribing:', fr:'Envoi et transcription en cours :', es:'Subiendo y transcribiendo:', tr:'Yükleniyor ve deşifre ediliyor:', de:'Wird hochgeladen & transkribiert:', hi:'अपलोड और ट्रांसक्राइब हो रहा है:', ur:'اپ لوڈ اور ٹرانسکرائب ہو رہا ہے:', fa:'در حال بارگذاری و پیاده‌سازی متن:' },
        transcribedSuccess: { ar:'✓ اتفرّغ بنجاح. راجع النص تحت واضغط "نظّف وحسّن التنسيق".', en:'✓ Transcribed successfully. Review below, then click Clean Up.', fr:'✓ Transcription réussie. Vérifiez ci-dessous, puis cliquez sur Nettoyer.', es:'✓ Transcrito correctamente. Revisa abajo y luego haz clic en Limpiar.', tr:'✓ Başarıyla deşifre edildi. Aşağıda gözden geçirin, ardından Temizle\'ye tıklayın.', de:'✓ Erfolgreich transkribiert. Prüfe den Text unten und klicke dann auf Bereinigen.', hi:'✓ सफलतापूर्वक ट्रांसक्राइब हो गया। नीचे रिव्यू करें, फिर क्लीन अप पर क्लिक करें।', ur:'✓ کامیابی سے ٹرانسکرائب ہو گیا۔ نیچے جائزہ لیں، پھر صاف کریں پر کلک کریں۔', fa:'✓ با موفقیت پیاده‌سازی شد. متن زیر را بررسی کنید، سپس روی پاک‌سازی کلیک کنید.' },
        transcriptionFailed: { ar:'تعذر التفريغ التلقائي. جرب تاني أو الصق النص يدوياً.', en:'Auto-transcription failed. Please paste the text manually or try again.', fr:'La transcription automatique a échoué. Veuillez coller le texte manuellement ou réessayer.', es:'Falló la transcripción automática. Pega el texto manualmente o inténtalo de nuevo.', tr:'Otomatik deşifre başarısız oldu. Lütfen metni manuel olarak yapıştırın veya tekrar deneyin.', de:'Die automatische Transkription ist fehlgeschlagen. Bitte füge den Text manuell ein oder versuche es erneut.', hi:'ऑटो-ट्रांसक्रिप्शन विफल रहा। कृपया टेक्स्ट मैन्युअल रूप से पेस्ट करें या दोबारा कोशिश करें।', ur:'خودکار ٹرانسکرپشن ناکام ہو گئی۔ براہ کرم متن دستی طور پر پیسٹ کریں یا دوبارہ کوشش کریں۔', fa:'پیاده‌سازی خودکار ناموفق بود. لطفاً متن را به‌صورت دستی جای‌گذاری کنید یا دوباره تلاش کنید.' },
        resendWait: { ar:'استنى {n} ثانية قبل ما تطلب إرسال تاني.', en:'Please wait {n}s before resending.', fr:'Veuillez attendre {n}s avant de renvoyer.', es:'Espera {n}s antes de reenviar.', tr:'Yeniden göndermeden önce lütfen {n}sn bekleyin.', de:'Bitte warte {n}s, bevor du erneut sendest.', hi:'दोबारा भेजने से पहले कृपया {n} सेकंड प्रतीक्षा करें।', ur:'دوبارہ بھیجنے سے پہلے براہ کرم {n} سیکنڈ انتظار کریں۔', fa:'لطفاً قبل از ارسال مجدد {n} ثانیه صبر کنید.' },
        verificationEmailSent: { ar:'اتبعت رابط التأكيد على إيميلك — راجع صندوق الوارد (والسبام).', en:'Verification email sent — check your inbox (and spam).', fr:'E-mail de vérification envoyé — vérifiez votre boîte de réception (et vos spams).', es:'Correo de verificación enviado — revisa tu bandeja de entrada (y el spam).', tr:'Doğrulama e-postası gönderildi — gelen kutunuzu (ve spam\'i) kontrol edin.', de:'Bestätigungs-E-Mail gesendet — überprüfe dein Postfach (und den Spam-Ordner).', hi:'सत्यापन ईमेल भेज दिया गया — अपना इनबॉक्स (और स्पैम) देखें।', ur:'تصدیقی ای میل بھیج دی گئی — اپنا ان باکس (اور اسپیم) چیک کریں۔', fa:'ایمیل تأیید ارسال شد — صندوق ورودی (و اسپم) خود را بررسی کنید.' },
        tooManyRequests: { ar:'محاولات كتير، جرب تاني بعد شوية.', en:'Too many requests, please try again later.', fr:'Trop de tentatives, veuillez réessayer plus tard.', es:'Demasiados intentos, inténtalo de nuevo más tarde.', tr:'Çok fazla deneme yapıldı, lütfen daha sonra tekrar deneyin.', de:'Zu viele Versuche, bitte versuche es später erneut.', hi:'बहुत अधिक प्रयास, कृपया बाद में फिर कोशिश करें।', ur:'بہت زیادہ کوششیں، براہ کرم بعد میں دوبارہ کوشش کریں۔', fa:'تعداد تلاش‌ها زیاد بود، لطفاً بعداً دوباره تلاش کنید.' },
        verificationSendError: { ar:'تعذّر إرسال إيميل التأكيد، جرب تاني.', en:'Could not send the verification email, try again.', fr:'Impossible d\'envoyer l\'e-mail de vérification, réessayez.', es:'No se pudo enviar el correo de verificación, inténtalo de nuevo.', tr:'Doğrulama e-postası gönderilemedi, tekrar deneyin.', de:'Bestätigungs-E-Mail konnte nicht gesendet werden, versuche es erneut.', hi:'सत्यापन ईमेल नहीं भेजा जा सका, दोबारा कोशिश करें।', ur:'تصدیقی ای میل نہیں بھیجی جا سکی، دوبارہ کوشش کریں۔', fa:'ارسال ایمیل تأیید ممکن نشد، دوباره تلاش کنید.' },
        emailVerifiedThanks: { ar:'تم تأكيد إيميلك، شكرًا!', en:'Email verified, thank you!', fr:'E-mail vérifié, merci !', es:'Correo verificado, ¡gracias!', tr:'E-posta doğrulandı, teşekkürler!', de:'E-Mail bestätigt, danke!', hi:'ईमेल सत्यापित हो गया, धन्यवाद!', ur:'ای میل کی تصدیق ہو گئی، شکریہ!', fa:'ایمیل تأیید شد، متشکریم!' },
        notVerifiedYet: { ar:'لسه مش متأكد — افتح الرابط اللي في الإيميل الأول.', en:'Not verified yet — open the link in the email first.', fr:'Pas encore vérifié — ouvrez d\'abord le lien dans l\'e-mail.', es:'Aún no verificado — abre primero el enlace del correo.', tr:'Henüz doğrulanmadı — önce e-postadaki bağlantıyı açın.', de:'Noch nicht bestätigt — öffne zuerst den Link in der E-Mail.', hi:'अभी तक सत्यापित नहीं — पहले ईमेल में दिया गया लिंक खोलें।', ur:'ابھی تصدیق نہیں ہوئی — پہلے ای میل میں دیا گیا لنک کھولیں۔', fa:'هنوز تأیید نشده — ابتدا لینک داخل ایمیل را باز کنید.' }
    };
    const UI_LOCALE = { ar:'ar-EG', en:'en-US', fr:'fr-FR', es:'es-ES', tr:'tr-TR', de:'de-DE', hi:'hi-IN', ur:'ur-PK', fa:'fa-IR' };
    function uiStr(key, vars) {
        const entry = UI_STR[key];
        let s = (entry && (entry[currentUiLang] || entry.ar)) || key;
        if (vars) Object.keys(vars).forEach(k => { s = s.split('{' + k + '}').join(vars[k]); });
        return s;
    }
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
        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const key = el.getAttribute('data-i18n-title');
            if (dict[key]) el.title = dict[key];
        });
        document.querySelectorAll('[data-i18n-alt]').forEach(el => {
            const key = el.getAttribute('data-i18n-alt');
            if (dict[key]) el.alt = dict[key];
        });
        document.querySelectorAll('[data-i18n-aria]').forEach(el => {
            const key = el.getAttribute('data-i18n-aria');
            if (dict[key]) el.setAttribute('aria-label', dict[key]);
        });
        const activeNav = document.querySelector('.nav-item.active');
        if (activeNav) {
            document.getElementById('view-title').innerText = viewTitle(activeNav.dataset.view);
        }
        if (typeof updateSubscriptionButtonsState === 'function') updateSubscriptionButtonsState();
        if (typeof renderAssistantMessages === 'function') renderAssistantMessages();
        applyTheme(document.documentElement.classList.contains('light-mode') ? 'light' : 'dark');
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

    function applyTheme(theme) {
        const isLight = theme === 'light';
        document.documentElement.classList.toggle('light-mode', isLight);
        const icon = document.getElementById('theme-toggle-icon');
        if (icon) icon.className = isLight ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
        const btn = document.getElementById('theme-toggle-btn');
        const label = isLight ? uiStr('themeToDark') : uiStr('themeToLight');
        if (btn) { btn.title = label; btn.setAttribute('aria-label', label); }
        const metaTheme = document.querySelector('meta[name="theme-color"]');
        if (metaTheme) metaTheme.setAttribute('content', isLight ? '#ffffff' : '#000000');
    }
    function toggleTheme() {
        const next = document.documentElement.classList.contains('light-mode') ? 'dark' : 'light';
        try { localStorage.setItem('yusr_theme', next); } catch (e) {}
        applyTheme(next);
    }
    function initTheme() {
        let saved = 'dark';
        try { saved = localStorage.getItem('yusr_theme') || 'dark'; } catch (e) {}
        applyTheme(saved);
    }

    let deferredPwaInstallPrompt = null;
    function isRunningAsStandaloneApp() {
        return (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) || window.navigator.standalone === true;
    }
    function isIosDevice() {
        return /iphone|ipad|ipod/i.test(navigator.userAgent) && !window.MSStream;
    }
    function showPwaInstallBannerIfEligible() {
        if (isRunningAsStandaloneApp()) return;
        try { if (localStorage.getItem('yusr_pwa_install_dismissed') === '1') return; } catch (e) {}
        const banner = document.getElementById('pwa-install-banner');
        if (banner && (deferredPwaInstallPrompt || isIosDevice())) banner.classList.remove('hidden');
    }
    function hidePwaInstallBanner() {
        const banner = document.getElementById('pwa-install-banner');
        if (banner) banner.classList.add('hidden');
    }
    function dismissPwaInstallBanner(e) {
        if (e) e.stopPropagation();
        try { localStorage.setItem('yusr_pwa_install_dismissed', '1'); } catch (e) {}
        hidePwaInstallBanner();
    }
    async function triggerPwaInstall() {
        if (deferredPwaInstallPrompt) {
            deferredPwaInstallPrompt.prompt();
            try {
                const choice = await deferredPwaInstallPrompt.userChoice;
                if (choice && choice.outcome === 'accepted') hidePwaInstallBanner();
            } catch (e) {}
            deferredPwaInstallPrompt = null;
            return;
        }
        if (isIosDevice()) { openIosInstallModal(); return; }
        showToast(uiStr('pwaInstallHint'), 'info');
    }
    function openIosInstallModal() { const m = document.getElementById('ios-install-modal'); if (m) m.classList.remove('hidden'); }
    function closeIosInstallModal() { const m = document.getElementById('ios-install-modal'); if (m) m.classList.add('hidden'); }

    function isAndroidDevice() {
        return /android/i.test(navigator.userAgent);
    }
    function isRunningInsideApk() {
        return /YusrProAndroidApp/i.test(navigator.userAgent);
    }
    function showApkPromoIfEligible() {
        if (isRunningInsideApk() || !isAndroidDevice()) return;
        try {
            const dismissedAt = parseInt(localStorage.getItem('yusr_apk_promo_dismissed_at') || '0', 10);
            if (dismissedAt && (Date.now() - dismissedAt) < 7 * 24 * 60 * 60 * 1000) return;
        } catch (e) {}
        const card = document.getElementById('apk-promo-sidebar');
        if (card) card.classList.remove('hidden');
    }
    function dismissApkPromo(e) {
        if (e) e.stopPropagation();
        try { localStorage.setItem('yusr_apk_promo_dismissed_at', String(Date.now())); } catch (e) {}
        const card = document.getElementById('apk-promo-sidebar');
        if (card) card.classList.add('hidden');
    }
    window.addEventListener('beforeinstallprompt', function (e) {
        e.preventDefault();
        deferredPwaInstallPrompt = e;
        showPwaInstallBannerIfEligible();
    });
    window.addEventListener('appinstalled', function () {
        deferredPwaInstallPrompt = null;
        hidePwaInstallBanner();
        showToast(uiStr('pwaInstalled'), 'success');
    });
    function initPwaInstall() {
        if (isRunningAsStandaloneApp()) { hidePwaInstallBanner(); return; }
        if (isIosDevice()) showPwaInstallBannerIfEligible();
    }

    function getDeviceId() {
        let id = localStorage.getItem('yusr_device_fingerprint');
        if (!id) { id = 'DEV-' + Math.random().toString(36).substring(2, 15) + Date.now().toString(36); localStorage.setItem('yusr_device_fingerprint', id); }
        return id;
    }
    const PLAN_MONTHLY_LIMITS = {
        'مجاني': 5,
        'الأساسية': 25,
        'الاحترافية': 150,
        'النخبة': Infinity,
        'السنوية': 150
    };
    function getCurrentPlanName() {
        const p = getProfile();
        const plan = (p.plan || '').trim();
        return PLAN_MONTHLY_LIMITS.hasOwnProperty(plan) ? plan : 'مجاني';
    }
    function getCurrentMonthKey() { return new Date().toISOString().slice(0, 7); } // مثال: 2026-08

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

    let cloudPlanRef = null;
    function attachCloudPlanListener(uid) {
        if (cloudPlanRef) cloudPlanRef.off();
        let firstSnapshot = true;
        cloudPlanRef = db.ref('users/' + uid + '/plan');
        cloudPlanRef.on('value', snap => {
            const isFirst = firstSnapshot;
            firstSnapshot = false;
            const newPlan = (snap.val() || '').trim();
            const p = getProfile();
            const oldPlan = (p.plan || '').trim();
            if (!newPlan || newPlan === oldPlan) return;
            p.plan = newPlan;
            saveProfile(p);
            checkDeviceTrial();
            refreshProfileView();
            if (typeof updatePricingModalActivePlan === 'function') {
                try { updatePricingModalActivePlan(); } catch (e) {}
            }
            if (!isFirst) {
                showToast(uiStr('subscriptionActivated', { plan: newPlan }), 'success');
            }
        }, err => console.warn('تعذر متابعة الباقة من السيرفر', err));
    }
    function getTrialWarnState() {
        const monthKey = getCurrentMonthKey();
        let state;
        try { state = JSON.parse(localStorage.getItem('yusr_trial_warned') || '{}'); } catch (e) { state = {}; }
        if (state.month !== monthKey) state = { month: monthKey, low: false, last: false };
        return state;
    }
    function setTrialWarnState(state) {
        localStorage.setItem('yusr_trial_warned', JSON.stringify(state));
    }
    function updateTrialUsageUI(remaining, limit, count) {
        const isUnlimited = limit === Infinity;
        const ratio = isUnlimited ? 0 : (limit > 0 ? count / limit : 1);
        let level = 'ok';
        if (!isUnlimited) {
            if (remaining <= 0) level = 'danger';
            else if (remaining <= Math.max(2, Math.ceil(limit * 0.2))) level = 'warning';
        }
        const trialEl = document.getElementById('trial-left');
        if (trialEl) trialEl.innerText = isUnlimited ? '∞' : `${remaining} / ${limit}`;
        const chip = document.getElementById('trial-chip');
        if (chip) { chip.classList.remove('trial-ok', 'trial-warning', 'trial-danger'); chip.classList.add('trial-' + level); }
        const fill = document.getElementById('trial-progress-fill');
        if (fill) fill.style.width = isUnlimited ? '0%' : `${Math.min(100, Math.round(ratio * 100))}%`;
        const track = document.getElementById('trial-progress-track');
        if (track) track.classList.toggle('hidden', isUnlimited);
        const headerBadge = document.getElementById('header-trial-badge');
        const headerCount = document.getElementById('header-trial-count');
        if (headerBadge) {
            headerBadge.classList.toggle('hidden', isUnlimited);
            headerBadge.classList.remove('trial-ok', 'trial-warning', 'trial-danger');
            headerBadge.classList.add('trial-' + level);
        }
        if (headerCount) headerCount.innerText = isUnlimited ? '∞' : String(remaining);
    }
    function maybeFireTrialWarning(remaining, limit) {
        if (limit === Infinity) return;
        const dict = I18N[currentUiLang] || I18N.ar;
        const state = getTrialWarnState();
        const lowThreshold = Math.max(2, Math.ceil(limit * 0.2));
        if (remaining <= 1 && remaining > 0 && !state.last) {
            showToast(dict['trial.warningLast'], 'warning');
            state.last = true; setTrialWarnState(state);
        } else if (remaining <= lowThreshold && remaining > 1 && !state.low) {
            showToast((dict['trial.warningLow'] || '').replace('{n}', remaining), 'warning');
            state.low = true; setTrialWarnState(state);
        }
    }
    function checkDeviceTrial() {
        const plan = getCurrentPlanName();
        const limit = PLAN_MONTHLY_LIMITS[plan];
        const count = getEffectiveUsageCount();
        const remaining = (limit === Infinity) ? Infinity : Math.max(0, limit - count);
        updateTrialUsageUI(remaining, limit, count);
        if (limit !== Infinity) maybeFireTrialWarning(remaining, limit);
        if (limit !== Infinity && count >= limit) { openPricingModal(); return false; }
        return true;
    }
    function incrementDeviceUsage() {
        const user = fbAuth.currentUser;
        setLocalUsageCache(getEffectiveUsageCount() + 1);
        checkDeviceTrial();
        if (user && !user.isAnonymous) {
            addPoints(10);
        }
    }

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
    window.addEventListener('error', function (e) {
        logErrorToCloud('window.onerror', e.error || { message: e.message });
    });
    window.addEventListener('unhandledrejection', function (e) {
        logErrorToCloud('unhandledrejection', e.reason);
    });
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
        if (!user || user.isAnonymous) return;
        userDocRef(user.uid).update({
            name: p.name || '', title: p.title || '', photo: p.photo || '',
            points: p.points || 0, google: p.google || null,
            email: user.email || '',
            displayName: p.name || user.displayName || '',
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
            let onboardingCount = 0;
            if (snap.exists()) {
                const cloud = snap.val();
                const p = getProfile();
                if (cloud.name) p.name = cloud.name;
                if (cloud.title) p.title = cloud.title;
                if (cloud.photo) p.photo = cloud.photo;
                if (typeof cloud.points === 'number') p.points = cloud.points;
                if (cloud.plan) p.plan = cloud.plan;
                if (cloud.google) p.google = cloud.google;
                p.subscriptionCancelRequested = !!cloud.subscriptionCancelRequested;
                saveProfile(p);
                if (Array.isArray(cloud.purchases)) savePurchases(cloud.purchases);
                if (Array.isArray(cloud.history)) saveHistoryList(cloud.history);
                if (typeof cloud.onboardingShownCount === 'number') onboardingCount = cloud.onboardingShownCount;
                if (!cloud.email || !cloud.displayName) syncProfileToCloud(p);
            } else {
                syncProfileToCloud(getProfile());
                syncPurchasesToCloud(getPurchases());
            }
            maybeShowOnboarding(uid, onboardingCount);
            refreshProfileView();
        }).catch(e => console.warn('تعذر تحميل البيانات من الخادم', e));
    }
    let onboardingCheckedUids = new Set(); // نمنع تكرار الفحص لنفس الحساب أكتر من مرة في نفس الجلسة (تجديد التوكن مثلاً)
    function getLocalOnboardingCount(uid) {
        return parseInt(localStorage.getItem('yusr_onboarding_count_' + uid) || '0', 10) || 0;
    }
    function setLocalOnboardingCount(uid, count) {
        localStorage.setItem('yusr_onboarding_count_' + uid, String(count));
    }
    function syncOnboardingCountToCloud(uid, count) {
        userDocRef(uid).update({ onboardingShownCount: count }).catch(e => console.warn('تعذر مزامنة عداد الجولة التعريفية', e));
    }
    function maybeShowOnboarding(uid, cloudCount) {
        if (!uid || onboardingCheckedUids.has(uid)) return;
        onboardingCheckedUids.add(uid);
        const count = Math.max(cloudCount || 0, getLocalOnboardingCount(uid));
        if (count >= 2) return; // شافها أول مرتين بالفعل - مش هتظهر تاني
        const modal = document.getElementById('onboarding-modal');
        if (!modal) return;
        const newCount = count + 1;
        setLocalOnboardingCount(uid, newCount);
        syncOnboardingCountToCloud(uid, newCount);
        setTimeout(() => modal.classList.remove('hidden'), 700);
    }
    function dismissOnboarding(startView) {
        const modal = document.getElementById('onboarding-modal');
        if (modal) modal.classList.add('hidden');
        if (startView) switchViewByName(startView);
    }
    window.dismissOnboarding = dismissOnboarding;
    fbAuth.onAuthStateChanged(user => {
        if (user && !user.isAnonymous) {
            hideAuthGate();
            loadProfileFromCloud(user.uid);
            attachCloudUsageListener(user.uid);
            attachCloudPlanListener(user.uid);
            attachSuspensionListener(user.uid);
            startOnlinePing();
            showSupportChatFab();
            startSupportChatPolling();
            refreshEmailVerificationBanner(user);
            return;
        }
        if (user && user.isAnonymous) {
            fbAuth.signOut().catch(() => {});
        }
        stopOnlinePing();
        stopSupportChatPolling();
        hideSupportChatFab();
        detachSuspensionListener();
        hideSuspendedGate();
        showAuthGate();
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

    let onlinePingInterval = null;
    async function sendOnlinePing() {
        try {
            await fetch(`${CLOUD_FUNCTIONS_BASE}/onlinePing`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', ...(await getAuthHeader()) }
            });
        } catch (e) { console.warn('تعذر إرسال نبضة الأونلاين', e); }
    }
    function startOnlinePing() {
        stopOnlinePing();
        sendOnlinePing(); // نبضة فورية أول ما يدخل، من غير ما ينتظر دقيقة كاملة عشان يظهر أونلاين بسرعة
        onlinePingInterval = setInterval(sendOnlinePing, 60 * 1000);
    }
    function stopOnlinePing() {
        if (onlinePingInterval) { clearInterval(onlinePingInterval); onlinePingInterval = null; }
    }
    document.addEventListener('visibilitychange', () => {
        if (!fbAuth.currentUser || fbAuth.currentUser.isAnonymous) return;
        if (document.visibilityState === 'visible') startOnlinePing();
        else stopOnlinePing();
    });

    let supportChatMessages = [];
    let supportChatPollTimer = null;
    let supportChatOpen = false;

    function showSupportChatFab() {
        if (window.__adminDashboardOpen) return;
        const fab = document.getElementById('support-chat-fab');
        if (fab) fab.classList.remove('hidden');
    }
    function hideSupportChatFab() {
        const fab = document.getElementById('support-chat-fab');
        if (fab) fab.classList.add('hidden');
        const panel = document.getElementById('support-chat-panel');
        if (panel) panel.classList.add('hidden');
        supportChatOpen = false;
    }
    function startSupportChatPolling() {
        stopSupportChatPolling();
        pollSupportChatMessages();
        supportChatPollTimer = setInterval(pollSupportChatMessages, 20000);
    }
    function stopSupportChatPolling() {
        if (supportChatPollTimer) { clearInterval(supportChatPollTimer); supportChatPollTimer = null; }
    }
    async function pollSupportChatMessages() {
        const user = fbAuth.currentUser;
        if (!user || user.isAnonymous) return;
        try {
            const response = await fetch(`${CLOUD_FUNCTIONS_BASE}/chatPoll`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', ...(await getAuthHeader()) },
                body: JSON.stringify({ markRead: !!supportChatOpen })
            });
            if (!response.ok) return;
            const data = await response.json();
            supportChatMessages = data.messages || [];
            renderSupportChat();
        } catch (e) { /* فشل شبكة عابر - هيحاول تاني في البولينج الجاي */ }
    }
    function renderSupportChat() {
        const log = document.getElementById('support-chat-log');
        const badge = document.getElementById('support-chat-unread-badge');
        if (!log) return;
        if (!supportChatMessages.length) {
            log.innerHTML = '<p class="sc-empty">اكتب رسالتك هنا لو محتاج مساعدة أو عندك استفسار، وفريق الدعم هيردّ عليك.</p>';
        } else {
            log.innerHTML = supportChatMessages.map(m => {
                const fromAdmin = m.from === 'admin';
                const time = m.createdAt ? new Date(m.createdAt).toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' }) : '';
                return `<div class="sc-msg ${fromAdmin ? 'sc-from-admin' : 'sc-from-user'}">${escapeHtml(m.text || '')}<span class="sc-time">${fromAdmin ? 'الدعم' : 'أنت'} · ${time}</span></div>`;
            }).join('');
            if (supportChatOpen) log.scrollTop = log.scrollHeight;
        }
        const unreadFromAdmin = supportChatMessages.filter(m => m.from === 'admin' && !m.readByUser).length;
        if (badge) {
            if (!supportChatOpen && unreadFromAdmin > 0) {
                badge.textContent = String(unreadFromAdmin);
                badge.classList.remove('hidden');
            } else {
                badge.classList.add('hidden');
            }
        }
    }
    window.toggleSupportChat = function () {
        const panel = document.getElementById('support-chat-panel');
        if (!panel) return;
        supportChatOpen = panel.classList.contains('hidden');
        panel.classList.toggle('hidden', !supportChatOpen);
        if (supportChatOpen) {
            pollSupportChatMessages(); // بيعلّم رسائل الدعم كمقروءة فور الفتح ويشيل البادج
        }
    };
    window.sendSupportChatMessage = async function () {
        const input = document.getElementById('support-chat-input');
        if (!input) return;
        const text = input.value.trim();
        if (!text) return;
        const user = fbAuth.currentUser;
        if (!user || user.isAnonymous) return;
        input.value = '';
        try {
            await fetch(`${CLOUD_FUNCTIONS_BASE}/chatSend`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', ...(await getAuthHeader()) },
                body: JSON.stringify({ text })
            });
            pollSupportChatMessages();
        } catch (e) {
            showToast('تعذر إرسال رسالتك، جرّب تاني.', 'error');
            input.value = text;
        }
    };

    function getProfile() {
        return JSON.parse(localStorage.getItem('yusr_profile') || '{"name":"","title":"","photo":"","points":0,"google":null}');
    }
    function saveProfile(p) { localStorage.setItem('yusr_profile', JSON.stringify(p)); }
    function getPurchases() { return JSON.parse(localStorage.getItem('yusr_purchases') || '[]'); }
    function savePurchases(list) { localStorage.setItem('yusr_purchases', JSON.stringify(list)); }
    let pendingPlanRequest = null;
    function openPaymentRequest(name, price, period) {
        if (isEmailVerificationRequired()) {
            closePricingModal();
            showToast(uiStr('verifyEmailFirst'), 'error');
            switchViewByName('profile');
            setTimeout(() => { const el = document.getElementById('email-verify-banner'); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 300);
            return;
        }
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
        const currentUser = (typeof fbAuth !== 'undefined' && fbAuth.currentUser) ? fbAuth.currentUser : null;
        const requestData = {
            plan: pendingPlanRequest.name,
            price: pendingPlanRequest.price,
            period: pendingPlanRequest.period,
            name, phone, ref,
            deviceId,
            uid: currentUser ? currentUser.uid : null,
            email: currentUser ? (currentUser.email || null) : null,
            status: 'pending',
            createdAt: firebase.database.ServerValue.TIMESTAMP
        };
        const status = document.getElementById('payment-request-status');
        const submitBtn = document.getElementById('pr-submit-btn');
        status.classList.remove('hidden', 'text-red-400', 'text-emerald-400');
        status.classList.add('text-emerald-400');
        status.innerText = 'جاري إرسال طلبك...';
        if (submitBtn) submitBtn.disabled = true;
        db.ref('pending_requests').push(requestData)
            .then(() => {
                markSpamCooldown('yusr_pr_cooldown');
                status.innerText = '✓ تم إرسال طلبك. هيتم تفعيل الباقة على حسابك يدوياً خلال ساعات قليلة بعد مراجعة التحويل.';
                pendingPlanRequest = null;
                setTimeout(closePaymentRequestModal, 3500);
            })
            .catch((e) => {
                console.warn('Could not write pending request:', e);
                status.classList.remove('text-emerald-400');
                status.classList.add('text-red-400');
                status.innerText = 'تعذر إرسال الطلب دلوقتي (مشكلة اتصال). تأكد من إنك متصل بالنت وجرب تاني، أو تواصل معانا من صفحة "الدعم والتواصل".';
            })
            .finally(() => { if (submitBtn) submitBtn.disabled = false; });
    }
    function submitFeedback() {
        const type = document.getElementById('fb-type').value;
        const contact = document.getElementById('fb-contact').value.trim();
        const message = document.getElementById('fb-message').value.trim();
        if (!message) { showToast('اكتب رسالتك الأول من فضلك.', 'error'); return; }
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

    function showAuthGate() {
        document.getElementById('auth-gate-modal').classList.remove('hidden');
        document.getElementById('app-root').classList.add('hidden');
    }
    function hideAuthGate() {
        document.getElementById('auth-gate-modal').classList.add('hidden');
        document.getElementById('app-root').classList.remove('hidden');
    }
    window.showAuthGateFromAdminCancel = function () { showAuthGate(); };
    let authGateMode = 'login';
    function switchAuthGateTab(mode) {
        authGateMode = mode;
        document.getElementById('auth-gate-name-wrap').classList.toggle('hidden', mode !== 'signup');
        document.getElementById('auth-gate-confirm-wrap').classList.toggle('hidden', mode !== 'signup');
        const forgotWrap = document.getElementById('auth-gate-forgot-wrap');
        if (forgotWrap) forgotWrap.classList.toggle('hidden', mode === 'signup');
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
    const RECAPTCHA_SITE_KEY = "6LcCHa8tAAAAAN1dnmtqPRsIUXog8--T3VsvM6-L";
    let _recaptchaScriptLoadPromise = null;
    function isRecaptchaConfigured() {
        return !!RECAPTCHA_SITE_KEY && !RECAPTCHA_SITE_KEY.includes('YOUR_RECAPTCHA');
    }
    function ensureRecaptchaLoaded() {
        if (!isRecaptchaConfigured()) return Promise.resolve(false);
        if (window.grecaptcha && window.grecaptcha.execute) return Promise.resolve(true);
        if (_recaptchaScriptLoadPromise) return _recaptchaScriptLoadPromise;
        _recaptchaScriptLoadPromise = new Promise(resolve => {
            const s = document.createElement('script');
            s.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(RECAPTCHA_SITE_KEY)}`;
            s.async = true;
            s.onload = () => resolve(true);
            s.onerror = () => { console.warn('تعذر تحميل سكريبت reCAPTCHA'); resolve(false); };
            document.head.appendChild(s);
            setTimeout(() => resolve(!!(window.grecaptcha && window.grecaptcha.execute)), 6000);
        });
        return _recaptchaScriptLoadPromise;
    }
    async function passesSignupCaptchaCheck() {
        if (isHoneypotTriggered('auth-gate-website')) return false;
        if (!isRecaptchaConfigured()) return true; // لسه محتاج إعداد Site Key من صاحب الموقع
        try {
            const loaded = await ensureRecaptchaLoaded();
            if (!loaded || !window.grecaptcha) return true; // فشل تحميل خارجي - منمنعش مستخدم حقيقي بسببه
            const token = await new Promise((resolve, reject) => {
                window.grecaptcha.ready(() => {
                    window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'signup' }).then(resolve).catch(reject);
                });
            });
            const res = await fetch(`${CLOUD_FUNCTIONS_BASE}/verifyCaptcha`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token, action: 'signup' })
            });
            const data = await res.json().catch(() => ({}));
            return !!data.ok;
        } catch (e) {
            console.warn('تعذر التحقق من الـ CAPTCHA، هنسيب التسجيل يعدي عادي', e);
            return true; // مشكلة شبكة عابرة - منمنعش مستخدم حقيقي بسببها
        }
    }

    async function submitEmailAuth() {
        const mode = authGateMode;
        const name = document.getElementById('auth-gate-name').value.trim();
        const email = document.getElementById('auth-gate-email').value.trim();
        const password = document.getElementById('auth-gate-password').value;
        const confirm = document.getElementById('auth-gate-confirm').value;
        const statusEl = document.getElementById('auth-gate-status');
        statusEl.classList.add('hidden');

        if (mode === 'signup' && !name) { showToast('اكتب اسمك الأول من فضلك.', 'error'); return; }

        if (mode === 'login' && email && !email.includes('@') && password && typeof window.adminTryLoginFromMainForm === 'function') {
            const tookOver = await window.adminTryLoginFromMainForm(email, password);
            if (tookOver) return;
        }

        if (!email || !email.includes('@') || !email.includes('.')) { showToast('اكتب بريد إلكتروني صحيح.', 'error'); return; }
        if (!password || password.length < 6) { showToast('كلمة المرور لازم تكون 6 حروف/أرقام على الأقل.', 'error'); return; }
        if (mode === 'signup' && password !== confirm) { showToast('كلمتا المرور مش متطابقتين.', 'error'); return; }

        if (mode === 'signup') {
            const captchaOk = await passesSignupCaptchaCheck();
            if (!captchaOk) {
                statusEl.innerText = 'تعذّر إتمام التسجيل دلوقتي، جرب تاني.';
                statusEl.className = 'text-[11px] text-center text-red-400';
                statusEl.classList.remove('hidden');
                return;
            }
        }

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
                try { user.sendEmailVerification(); } catch (e) { console.warn('تعذر إرسال إيميل التأكيد الأول', e); }
            }
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

    function togglePasswordVisibility(inputId, btnEl) {
        const input = document.getElementById(inputId);
        if (!input) return;
        const nowHidden = input.type === 'password';
        input.type = nowHidden ? 'text' : 'password';
        const icon = btnEl ? btnEl.querySelector('i') : null;
        if (icon) icon.className = nowHidden ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye';
        if (btnEl) btnEl.setAttribute('aria-label', nowHidden ? 'إخفاء كلمة المرور' : 'إظهار كلمة المرور');
    }
    window.togglePasswordVisibility = togglePasswordVisibility;

    function openForgotPasswordModal() {
        const prefill = document.getElementById('auth-gate-email').value.trim();
        document.getElementById('forgot-password-email').value = prefill;
        document.getElementById('forgot-password-status').classList.add('hidden');
        document.getElementById('forgot-password-modal').classList.remove('hidden');
    }
    function closeForgotPasswordModal() {
        document.getElementById('forgot-password-modal').classList.add('hidden');
    }
    async function submitForgotPassword() {
        const email = document.getElementById('forgot-password-email').value.trim();
        const statusEl = document.getElementById('forgot-password-status');
        if (!email || !email.includes('@') || !email.includes('.')) { showToast('اكتب بريد إلكتروني صحيح.', 'error'); return; }
        const btn = document.getElementById('forgot-password-submit-btn');
        btn.disabled = true; btn.classList.add('opacity-60');
        try {
            await fetch(`${CLOUD_FUNCTIONS_BASE}/forgotPassword`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });
        } catch (e) { console.warn('تعذر إرسال طلب استعادة الباسورد', e); }
        statusEl.innerText = 'لو الإيميل ده متسجل عندنا، وصلك رابط لتغيير كلمة المرور خلال لحظات. راجع صندوق الوارد (والسبام).';
        statusEl.className = 'text-[11px] text-center text-emerald-400';
        statusEl.classList.remove('hidden');
        btn.disabled = false; btn.classList.remove('opacity-60');
    }

    let suspensionRef = null;
    function attachSuspensionListener(uid) {
        if (suspensionRef) { suspensionRef.off(); suspensionRef = null; }
        suspensionRef = db.ref('users/' + uid + '/suspended');
        suspensionRef.on('value', snap => {
            if (snap.val() === true) showSuspendedGate(); else hideSuspendedGate();
        }, err => console.warn('تعذر متابعة حالة إيقاف الحساب', err));
    }
    function detachSuspensionListener() {
        if (suspensionRef) { suspensionRef.off(); suspensionRef = null; }
    }
    function showSuspendedGate() {
        const el = document.getElementById('account-suspended-modal');
        if (el) el.classList.remove('hidden');
    }
    function hideSuspendedGate() {
        const el = document.getElementById('account-suspended-modal');
        if (el) el.classList.add('hidden');
    }
    function logoutFromSuspended() {
        detachSuspensionListener();
        hideSuspendedGate();
        fbAuth.signOut().catch(() => {});
    }

    function isGoogleOnlyAccount(user) {
        user = user || fbAuth.currentUser;
        if (!user) return false;
        return (user.providerData || []).some(pd => pd.providerId === 'google.com')
            && !(user.providerData || []).some(pd => pd.providerId === 'password');
    }
    function isEmailVerificationRequired() {
        const user = fbAuth.currentUser;
        if (!user || user.isAnonymous) return false;
        if (isGoogleOnlyAccount(user)) return false;
        return user.emailVerified === false;
    }
    let _emailVerifyResendCooldownUntil = 0;
    async function refreshEmailVerificationBanner(user) {
        user = user || fbAuth.currentUser;
        const banner = document.getElementById('email-verify-banner');
        if (!banner || !user) return;
        try { await user.reload(); } catch (e) { /* لو فشل التحديث، هنعتمد على آخر حالة معروفة */ }
        const freshUser = fbAuth.currentUser;
        if (!freshUser || freshUser.isAnonymous || isGoogleOnlyAccount(freshUser) || freshUser.emailVerified) {
            banner.classList.add('hidden');
            return;
        }
        const emailEl = document.getElementById('email-verify-banner-address');
        if (emailEl) emailEl.textContent = freshUser.email || '';
        banner.classList.remove('hidden');
    }
    async function resendVerificationEmail() {
        const user = fbAuth.currentUser;
        if (!user) return;
        const btn = document.getElementById('email-verify-resend-btn');
        const now = Date.now();
        if (now < _emailVerifyResendCooldownUntil) {
            const secsLeft = Math.ceil((_emailVerifyResendCooldownUntil - now) / 1000);
            showToast(uiStr('resendWait', { n: secsLeft }), 'error');
            return;
        }
        if (btn) { btn.disabled = true; btn.classList.add('opacity-60'); }
        try {
            await user.sendEmailVerification();
            _emailVerifyResendCooldownUntil = Date.now() + 60 * 1000; // دقيقة بين كل إرسال والتاني
            showToast(uiStr('verificationEmailSent'), 'success');
        } catch (e) {
            console.warn('تعذر إرسال إيميل التأكيد', e);
            const msg = (e && e.code === 'auth/too-many-requests')
                ? uiStr('tooManyRequests')
                : uiStr('verificationSendError');
            showToast(msg, 'error');
        } finally {
            if (btn) { btn.disabled = false; btn.classList.remove('opacity-60'); }
        }
    }
    async function recheckEmailVerification() {
        const user = fbAuth.currentUser;
        if (!user) return;
        const btn = document.getElementById('email-verify-recheck-btn');
        if (btn) { btn.disabled = true; btn.classList.add('opacity-60'); }
        await refreshEmailVerificationBanner(user);
        if (btn) { btn.disabled = false; btn.classList.remove('opacity-60'); }
        if (fbAuth.currentUser && fbAuth.currentUser.emailVerified) {
            showToast(uiStr('emailVerifiedThanks'), 'success');
        } else {
            showToast(uiStr('notVerifiedYet'), 'error');
        }
    }
    window.resendVerificationEmail = resendVerificationEmail;
    window.recheckEmailVerification = recheckEmailVerification;

    function refreshCancelSubscriptionUi(planName) {
        const row = document.getElementById('cancel-sub-row');
        const banner = document.getElementById('cancel-sub-active-banner');
        if (!row && !banner) return;
        const isFree = !planName || planName === 'مجاني' || planName === 'Free';
        const p = getProfile();
        const cancelRequested = !!p.subscriptionCancelRequested;
        if (row) row.classList.toggle('hidden', isFree || cancelRequested);
        if (banner) banner.classList.toggle('hidden', isFree || !cancelRequested);
    }
    function openCancelSubscriptionModal() {
        const p = getProfile();
        const planEl = document.getElementById('cancel-sub-plan-name');
        if (planEl) planEl.textContent = getCurrentPlanName();
        document.getElementById('cancel-subscription-modal').classList.remove('hidden');
    }
    function closeCancelSubscriptionModal() {
        document.getElementById('cancel-subscription-modal').classList.add('hidden');
    }
    async function confirmCancelSubscription() {
        const user = fbAuth.currentUser;
        if (!user || user.isAnonymous) return;
        const btn = document.getElementById('cancel-sub-confirm-btn');
        if (btn) { btn.disabled = true; btn.classList.add('opacity-60'); }
        try {
            await userDocRef(user.uid).update({
                subscriptionCancelRequested: true,
                subscriptionCancelRequestedAt: firebase.database.ServerValue.TIMESTAMP
            });
            const p = getProfile();
            p.subscriptionCancelRequested = true;
            saveProfile(p);
            closeCancelSubscriptionModal();
            refreshCancelSubscriptionUi(getCurrentPlanName());
            showToast(uiStr('autoRenewalStopped'), 'success');
        } catch (e) {
            console.warn('تعذر تسجيل طلب إلغاء الاشتراك', e);
            showToast(uiStr('genericProcessError'), 'error');
        } finally {
            if (btn) { btn.disabled = false; btn.classList.remove('opacity-60'); }
        }
    }
    async function undoCancelSubscription() {
        const user = fbAuth.currentUser;
        if (!user || user.isAnonymous) return;
        try {
            await userDocRef(user.uid).update({ subscriptionCancelRequested: false });
            const p = getProfile();
            p.subscriptionCancelRequested = false;
            saveProfile(p);
            refreshCancelSubscriptionUi(getCurrentPlanName());
            showToast(uiStr('subRenewNormally'), 'success');
        } catch (e) {
            console.warn('تعذر التراجع عن إلغاء الاشتراك', e);
            showToast(uiStr('undoError'), 'error');
        }
    }
    window.openCancelSubscriptionModal = openCancelSubscriptionModal;
    window.closeCancelSubscriptionModal = closeCancelSubscriptionModal;
    window.confirmCancelSubscription = confirmCancelSubscription;
    window.undoCancelSubscription = undoCancelSubscription;


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
        const planName = getCurrentPlanName();
        document.getElementById('profile-stat-plan').innerText = planName;
        document.getElementById('profile-current-plan').innerText = planName;
        const membershipPlanEl = document.getElementById('profile-membership-plan');
        if (membershipPlanEl) membershipPlanEl.innerText = planName;
        const membershipIdEl = document.getElementById('profile-membership-id');
        if (membershipIdEl) {
            const idTail = getDeviceId().replace('DEV-', '').slice(-4).toUpperCase() || '0000';
            membershipIdEl.innerText = '•••• •••• ' + idTail;
        }
        updateAccountChip(p);
        renderPurchasesOverview();
        refreshGoogleSigninState(p);
        updateSubscriptionButtonsState();
        refreshCancelSubscriptionUi(planName);
    }
    function updateSubscriptionButtonsState() {
        const currentPlan = getCurrentPlanName();
        const dict = I18N[currentUiLang] || I18N.ar;
        const defaultLabel = dict['subs.subscribe'] || 'اشترك الآن';
        const activeLabel = uiStr('currentlySubscribedLabel');
        document.querySelectorAll('[data-plan-btn]').forEach(btn => {
            const isCurrent = btn.getAttribute('data-plan-btn') === currentPlan;
            btn.classList.toggle('subs-btn-active', isCurrent);
            btn.disabled = isCurrent;
            btn.innerHTML = isCurrent
                ? `<i class="fa-solid fa-circle-check"></i> ${activeLabel}`
                : defaultLabel;
        });
    }
    function refreshGoogleSigninState(p) {
        p = p || getProfile();
        const signedOutArea = document.getElementById('google-signin-area');
        const signedInArea = document.getElementById('google-signedin-area');
        const authedUser = fbAuth.currentUser && !fbAuth.currentUser.isAnonymous ? fbAuth.currentUser : null;
        if (p.google || authedUser) {
            signedOutArea.classList.add('hidden');
            signedInArea.classList.remove('hidden');
            const name = (p.google && p.google.name) || p.name || (authedUser && authedUser.email) || '-';
            const email = (p.google && p.google.email) || (authedUser && authedUser.email) || '';
            document.getElementById('signedin-name').textContent = name;
            document.getElementById('signedin-email').textContent = email;
            const img = document.getElementById('signedin-avatar-img');
            const icon = document.getElementById('signedin-avatar-icon');
            if (p.google && p.google.picture) {
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
    async function requestPasswordChange() {
        const user = fbAuth.currentUser;
        const email = user && user.email;
        if (!email) { showToast('الخاصية دي متاحة بس لو داخل بإيميل وباسورد (حسابات جوجل بتتغيّر من إعدادات جوجل نفسها).', 'error'); return; }
        try {
            await fetch(`${CLOUD_FUNCTIONS_BASE}/forgotPassword`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });
        } catch (e) { console.warn('تعذر إرسال طلب تغيير الباسورد', e); }
        showToast('لو الإيميل ده متسجل عندنا، وصلك رابط لتغيير كلمة المرور.', 'success');
    }
    function logoutAccount() {
        const sure = confirm(uiStr('logoutConfirm'));
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
        showToast(uiStr('loggedOut'));
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
        if (!file.type || !file.type.startsWith('image/')) {
            showToast(uiStr('chooseImageFile'), 'error');
            e.target.value = ''; return;
        }
        if (file.size > 12 * 1024 * 1024) {
            showToast(uiStr('imageTooLarge'), 'error');
            e.target.value = ''; return;
        }
        const icon = document.getElementById('profile-photo-icon');
        const preview = document.getElementById('profile-photo-preview');
        const label = document.querySelector('label[for="profile-photo-input"]');
        if (label && label.dataset.uploading === '1') return;
        if (label) label.dataset.uploading = '1';
        const prevIconClass = icon ? icon.className : '';
        if (icon) { icon.className = 'fa-solid fa-spinner fa-spin text-slate-400 text-xl'; icon.classList.remove('hidden'); }
        if (preview) preview.classList.add('hidden');
        compressImageFile(file, 400, 0.7).then((compressedDataUrl) => {
            const p = getProfile(); p.photo = compressedDataUrl; saveProfile(p);
            syncProfileToCloud(p);
            refreshProfileView();
            showToast(uiStr('profilePhotoUpdated'), 'success');
        }).catch(() => {
            showToast(uiStr('imageProcessError'), 'error');
            if (icon) icon.className = prevIconClass || 'fa-solid fa-camera text-slate-500 text-xl';
        }).finally(() => {
            if (label) delete label.dataset.uploading;
            e.target.value = '';
        });
    }
    function clearLocalAppData() {
        const sure = confirm(uiStr('clearLocalDataConfirm'));
        if (!sure) return;
        try {
            const keysToRemove = Object.keys(localStorage).filter(k => k.startsWith('yusr_'));
            keysToRemove.forEach(k => localStorage.removeItem(k));
            showToast(uiStr('localDataCleared'), 'success');
            setTimeout(() => location.reload(), 800);
        } catch (e) {
            console.warn('Clear local data failed:', e);
            showToast(uiStr('localDataClearError'), 'error');
        }
    }
    window._pendingAccountDeletionAfterReauth = false;
    async function reauthenticateCurrentUser(user) {
        const p = getProfile();
        const isGoogleUser = !!(p.google || (user.providerData || []).some(pd => pd.providerId === 'google.com'));
        if (isGoogleUser) {
            window._pendingAccountDeletionAfterReauth = true;
            showToast(uiStr('reauthGoogleNotice'), 'info');
            triggerGoogleSignIn();
            return false;
        }
        const email = user.email;
        const password = prompt(uiStr('reauthPasswordPrompt', { email }));
        if (!password) return false;
        const cred = firebase.auth.EmailAuthProvider.credential(email, password);
        await user.reauthenticateWithCredential(cred);
        return true;
    }
    async function deleteAccountCore(user) {
        await db.ref('users/' + user.uid).remove();
        await user.delete();
        try {
            Object.keys(localStorage).filter(k => k.startsWith('yusr_')).forEach(k => localStorage.removeItem(k));
        } catch (e) {}
        showToast(uiStr('accountDeleted'), 'success');
        setTimeout(() => location.reload(), 1200);
    }
    async function deleteAccountPermanently() {
        const user = fbAuth.currentUser;
        if (!user) { showToast(uiStr('noSignedInAccount'), 'error'); return; }
        const confirmWord = uiStr('deleteWord');
        const typed = prompt(uiStr('deleteAccountPrompt', { word: confirmWord }));
        if (typed === null) return;
        if (typed.trim() !== confirmWord) {
            showToast(uiStr('deleteConfirmMismatch'), 'error');
            return;
        }
        const btn = document.getElementById('delete-account-btn');
        if (btn) { btn.disabled = true; btn.dataset.origHtml = btn.innerHTML; btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> جاري الحذف...'; }
        try {
            await deleteAccountCore(user);
        } catch (e) {
            if (e && e.code === 'auth/requires-recent-login') {
                try {
                    const ok = await reauthenticateCurrentUser(user);
                    if (ok) await deleteAccountCore(fbAuth.currentUser);
                } catch (e2) {
                    console.warn('تعذر التأكد من الهوية لحذف الحساب', e2);
                    showToast(uiStr('reauthFailedPassword'), 'error');
                }
            } else {
                console.warn('تعذر حذف الحساب', e);
                showToast(uiStr('deleteAccountError'), 'error');
            }
        } finally {
            if (btn && document.body.contains(btn)) { btn.disabled = false; btn.innerHTML = btn.dataset.origHtml || btn.innerHTML; }
        }
    }
    function saveProfileInfo() {
        const nameInput = document.getElementById('profile-name');
        const name = nameInput.value.trim();
        if (!name) {
            showToast(uiStr('enterNameFirst'), 'error');
            nameInput.focus();
            return;
        }
        const p = getProfile();
        p.name = name;
        p.title = document.getElementById('profile-title').value.trim();
        saveProfile(p);
        syncProfileToCloud(p);
        updateAccountChip(p);
        showToast(uiStr('savedToast'), 'success');
    }
    const GOOGLE_CLIENT_ID = "1088995951323-c6aeisqni683ishtav76e33vcbjdve7c.apps.googleusercontent.com";
    let googleTokenClient = null;
    function googleSignInErrorMessage(e) {
        const code = e && e.code;
        const map = {
            'auth/account-exists-with-different-credential': 'الإيميل ده متسجل بالفعل بطريقة تانية (إيميل وباسورد). سجّل دخولك بالإيميل والباسورد بدل جوجل.',
            'auth/network-request-failed': 'مشكلة في الاتصال بالإنترنت أثناء تسجيل الدخول بجوجل، جرب تاني.',
            'auth/popup-closed-by-user': 'اتقفلت نافذة تسجيل الدخول بجوجل قبل ما تكمل.',
            'auth/invalid-credential': 'تعذّر التحقق من حساب جوجل، جرب تاني.'
        };
        return (code && map[code]) || 'تعذّر تسجيل الدخول بجوجل، جرب تاني.';
    }
    function handleGoogleCredential(response) {
        try {
            const payload = JSON.parse(decodeURIComponent(escape(atob(response.credential.split('.')[1].replace(/-/g,'+').replace(/_/g,'/')))));
            const cred = firebase.auth.GoogleAuthProvider.credential(response.credential);
            fbAuth.signInWithCredential(cred)
                .then(result => {
                    const p = getProfile();
                    p.google = { email: payload.email, picture: payload.picture, name: payload.name };
                    if (!p.name) p.name = payload.name;
                    if (!p.photo) p.photo = payload.picture;
                    saveProfile(p);
                    refreshProfileView();
                    syncProfileToCloud(getProfile());
                    loadProfileFromCloud(result.user.uid);
                    if (window._pendingAccountDeletionAfterReauth) {
                        window._pendingAccountDeletionAfterReauth = false;
                        deleteAccountCore(result.user).catch(e => {
                            console.warn('تعذر إكمال حذف الحساب بعد إعادة التأكيد', e);
                            showToast(uiStr('deleteAccountError'), 'error');
                        });
                    }
                })
                .catch(e => { console.warn('تعذر تسجيل الدخول على الخادم', e); showToast(googleSignInErrorMessage(e), 'error'); });
        } catch (e) { console.warn('تعذر قراءة بيانات جوجل', e); showToast('تعذّر تسجيل الدخول بجوجل، جرب تاني.', 'error'); }
    }
    function handleGoogleTokenResponse(tokenResponse) {
        if (!tokenResponse || !tokenResponse.access_token) {
            const errCode = tokenResponse && (tokenResponse.error || tokenResponse.type);
            console.warn('جوجل رجع من غير توكن صحيح', tokenResponse);
            const msgMap = {
                'access_denied': 'تم رفض الدخول من جوجل - إما إنك لغيت الموافقة، أو الحساب ده مش من الحسابات المسموح بيها على تطبيق جوجل لسه (لو الـ OAuth consent screen في وضع Testing لازم تضيف الإيميل في قايمة test users في Google Cloud Console).',
                'popup_closed': 'اتقفلت نافذة جوجل قبل ما تكمل تسجيل الدخول.',
                'popup_failed_to_open': 'المتصفح منع فتح نافذة جوجل (popup blocker). سيبّه يفتح النوافذ المنبثقة لهذا الموقع وجرب تاني.'
            };
            showToast(msgMap[errCode] || ('تعذّر تسجيل الدخول بجوجل' + (errCode ? (' (' + errCode + ')') : '') + '، جرب تاني.'), 'error');
            return;
        }
        fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
            headers: { Authorization: 'Bearer ' + tokenResponse.access_token }
        })
        .then(res => { if (!res.ok) throw new Error('userinfo_failed'); return res.json(); })
        .then(info => {
            const cred = firebase.auth.GoogleAuthProvider.credential(null, tokenResponse.access_token);
            fbAuth.signInWithCredential(cred)
                .then(result => {
                    const p = getProfile();
                    p.google = { email: info.email, picture: info.picture, name: info.name };
                    if (!p.name) p.name = info.name;
                    if (!p.photo) p.photo = info.picture;
                    saveProfile(p);
                    refreshProfileView();
                    syncProfileToCloud(getProfile());
                    loadProfileFromCloud(result.user.uid);
                    if (window._pendingAccountDeletionAfterReauth) {
                        window._pendingAccountDeletionAfterReauth = false;
                        deleteAccountCore(result.user).catch(e => {
                            console.warn('تعذر إكمال حذف الحساب بعد إعادة التأكيد', e);
                            showToast(uiStr('deleteAccountError'), 'error');
                        });
                    }
                })
                .catch(e => { console.warn('تعذر تسجيل الدخول على الخادم', e); showToast(googleSignInErrorMessage(e), 'error'); });
        })
        .catch(e => { console.warn('تعذر قراءة بيانات جوجل', e); showToast('تعذّر جلب بيانات حساب جوجل، جرب تاني.', 'error'); });
    }
    function initGoogleSignIn() {
        if (GOOGLE_CLIENT_ID.includes('YOUR_GOOGLE_CLIENT_ID')) return false;
        if (!(window.google && window.google.accounts)) return false;
        try {
            if (!googleTokenClient && window.google.accounts.oauth2) {
                googleTokenClient = window.google.accounts.oauth2.initTokenClient({
                    client_id: GOOGLE_CLIENT_ID,
                    scope: 'openid email profile',
                    callback: handleGoogleTokenResponse,
                    error_callback: function (err) {
                        console.warn('جوجل رجع خطأ في نافذة تسجيل الدخول', err);
                        handleGoogleTokenResponse({ error: err && err.type });
                    }
                });
            }
            window.google.accounts.id.initialize({ client_id: GOOGLE_CLIENT_ID, callback: handleGoogleCredential });
            window.google.accounts.id.renderButton(document.getElementById('g_id_signin_container'), { theme: 'outline', size: 'medium' });
        } catch (e) { console.warn('تعذر تهيئة تسجيل دخول جوجل', e); }
        return !!googleTokenClient;
    }
    function triggerGoogleSignIn() {
        if (GOOGLE_CLIENT_ID.includes('YOUR_GOOGLE_CLIENT_ID')) {
            showToast(uiStr('googleClientIdMissing'));
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
        showToast(uiStr('googleSigninLoading'));
    }
    try { initGoogleSignIn(); } catch (e) {}
    (function () {
        const gsiScript = document.getElementById('google-gsi-script');
        if (gsiScript) gsiScript.addEventListener('load', function () { try { initGoogleSignIn(); } catch (e) {} });
    })();

    function renderResult(box, text, filename) {
        box.dataset.raw = text;
        box.classList.remove('hidden');
        box.classList.remove('reveal-in'); void box.offsetWidth; box.classList.add('reveal-in'); // حركة دخول ناعمة لكل نتيجة جديدة
        box.innerHTML = `<div class="flex justify-end gap-2 mb-2">
            <button data-x-onclick="hCopyResult" class="chip hover:bg-[var(--panel-2)]"><i class="fa-solid fa-copy"></i> <span>${I18N[currentUiLang].copy}</span></button>
            <button data-x-onclick="hDownloadResult" data-filename="${filename}" class="chip hover:bg-[var(--panel-2)]"><i class="fa-solid fa-download"></i> <span>${I18N[currentUiLang].download}</span></button>
        </div>` + formatReportText(text);
        try { saveToHistory((filename || 'result').replace(/\.[^.]+$/, ''), text); } catch (e) { console.warn('تعذر حفظ النتيجة في السجل الموحّد', e); }
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
        btn.innerHTML = '<i class="fa-solid fa-check"></i> ' + uiStr('copiedBtnLabel');
        btn.classList.add('copied-flash');
        setTimeout(() => { btn.innerHTML = original; btn.classList.remove('copied-flash'); }, 1500);
    }
    function triggerDownload(text, filename) {
        const BOM = '\uFEFF';
        const normalized = String(text ?? '').replace(/\r\n/g, '\n');
        const blob = new Blob([BOM + normalized], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a'); a.href = url; a.download = filename; document.body.appendChild(a); a.click(); a.remove();
        URL.revokeObjectURL(url);
    }

    const HISTORY_MAX = 20;
    const HISTORY_ENTRY_MAX_CHARS = 20000; // حماية بسيطة من تضخم التخزين لو النتيجة طويلة جدًا
    const HISTORY_LABELS = {
        'summary': { ar:'تلخيص مستند', en:'Document Summary', fr:'Résumé de document', es:'Resumen de documento', tr:'Belge Özeti', de:'Dokumentzusammenfassung', hi:'दस्तावेज़ सारांश', ur:'دستاویز کا خلاصہ', fa:'خلاصه سند' },
        'writing-review': { ar:'تدقيق أكاديمي', en:'Academic Review', fr:'Relecture académique', es:'Revisión académica', tr:'Akademik İnceleme', de:'Akademische Überprüfung', hi:'शैक्षणिक समीक्षा', ur:'علمی جائزہ', fa:'بررسی آکادمیک' },
        'academic-abstract': { ar:'ملخص أكاديمي (Abstract)', en:'Academic Abstract', fr:'Résumé académique (Abstract)', es:'Resumen académico (Abstract)', tr:'Akademik Özet (Abstract)', de:'Akademisches Abstract', hi:'शैक्षणिक सार (Abstract)', ur:'علمی خلاصہ (Abstract)', fa:'چکیده آکادمیک (Abstract)' },
        'academic-vocab-boost': { ar:'تحسين مفردات أكاديمية', en:'Vocabulary Booster', fr:'Amélioration du vocabulaire académique', es:'Mejora de vocabulario académico', tr:'Akademik Kelime Geliştirme', de:'Akademische Wortschatzverbesserung', hi:'शैक्षणिक शब्दावली सुधार', ur:'علمی الفاظ میں بہتری', fa:'تقویت واژگان آکادمیک' },
        'cover-letter': { ar:'خطاب تغطية', en:'Cover Letter', fr:'Lettre de motivation', es:'Carta de presentación', tr:'Ön Yazı', de:'Anschreiben', hi:'कवर लेटर', ur:'کور لیٹر', fa:'نامه معرفی' },
        'cv-job-match': { ar:'مطابقة CV مع وظيفة', en:'CV Job Match', fr:'Correspondance CV-emploi', es:'Coincidencia CV-empleo', tr:'CV-İş Eşleştirme', de:'Lebenslauf-Job-Abgleich', hi:'सीवी-जॉब मिलान', ur:'سی وی جاب میچ', fa:'تطابق رزومه با شغل' },
        'faq-answers': { ar:'إجابات أسئلة شائعة', en:'FAQ Answers', fr:'Réponses FAQ', es:'Respuestas de preguntas frecuentes', tr:'SSS Cevapları', de:'FAQ-Antworten', hi:'सामान्य प्रश्न उत्तर', ur:'عمومی سوالات کے جوابات', fa:'پاسخ‌های سوالات متداول' },
        'career-plan': { ar:'خطة تطور مهني', en:'Career Plan', fr:'Plan de carrière', es:'Plan de carrera', tr:'Kariyer Planı', de:'Karriereplan', hi:'करियर योजना', ur:'کیریئر پلان', fa:'برنامه شغلی' },
        'portfolio': { ar:'بورتفوليو', en:'Portfolio', fr:'Portfolio', es:'Portafolio', tr:'Portfolyo', de:'Portfolio', hi:'पोर्टफोलियो', ur:'پورٹ فولیو', fa:'نمونه‌کار' },
        'cv': { ar:'سيرة ذاتية', en:'CV', fr:'CV', es:'CV', tr:'CV', de:'Lebenslauf', hi:'सीवी', ur:'سی وی', fa:'رزومه' },
        'salary-insights': { ar:'تقدير راتب متوقع', en:'Salary Insights', fr:'Estimation du salaire', es:'Estimación salarial', tr:'Maaş Tahmini', de:'Gehaltseinschätzung', hi:'वेतन अनुमान', ur:'تنخواہ کا تخمینہ', fa:'برآورد حقوق' },
        'scheduling-email': { ar:'إيميل تنسيق ميعاد', en:'Scheduling Email', fr:'E-mail de planification', es:'Correo de programación', tr:'Randevu E-postası', de:'Terminplanungs-E-Mail', hi:'शेड्यूलिंग ईमेल', ur:'شیڈولنگ ای میل', fa:'ایمیل هماهنگی زمان' },
        'reply-review': { ar:'مراجعة رد', en:'Reply Review', fr:'Révision de réponse', es:'Revisión de respuesta', tr:'Yanıt İncelemesi', de:'Antwortüberprüfung', hi:'रिप्लाई समीक्षा', ur:'جواب کا جائزہ', fa:'بررسی پاسخ' },
        'salary-followup-questions': { ar:'أسئلة متابعة الراتب', en:'Salary Follow-up Questions', fr:'Questions de suivi salarial', es:'Preguntas de seguimiento salarial', tr:'Maaş Takip Soruları', de:'Gehalts-Folgefragen', hi:'वेतन फॉलो-अप प्रश्न', ur:'تنخواہ کے فالو اپ سوالات', fa:'سوالات پیگیری حقوق' },
        'dress-tips': { ar:'نصائح ملابس المقابلة', en:'Dress Tips', fr:'Conseils vestimentaires', es:'Consejos de vestimenta', tr:'Kıyafet İpuçları', de:'Kleidungstipps', hi:'ड्रेस टिप्स', ur:'لباس کے مشورے', fa:'نکات پوشش' },
        'transcript': { ar:'تفريغ صوتي إلى نص', en:'Transcript', fr:'Transcription', es:'Transcripción', tr:'Transkript', de:'Transkript', hi:'ट्रांसक्रिप्ट', ur:'ٹرانسکرپٹ', fa:'متن پیاده‌شده' },
        'pitch-30-seconds': { ar:'تقديم نفسك في 30 ثانية', en:'30-Second Pitch', fr:'Présentation de 30 secondes', es:'Presentación de 30 segundos', tr:'30 Saniyelik Tanıtım', de:'30-Sekunden-Vorstellung', hi:'30-सेकंड पिच', ur:'30 سیکنڈ پچ', fa:'معرفی ۳۰ ثانیه‌ای' },
        'progress-compare': { ar:'مقارنة جلستين', en:'Session Comparison', fr:'Comparaison de sessions', es:'Comparación de sesiones', tr:'Oturum Karşılaştırması', de:'Sitzungsvergleich', hi:'सत्र तुलना', ur:'سیشن موازنہ', fa:'مقایسه جلسات' },
        'progress-summary': { ar:'تقرير تقدم', en:'Progress Report', fr:'Rapport de progression', es:'Informe de progreso', tr:'İlerleme Raporu', de:'Fortschrittsbericht', hi:'प्रगति रिपोर्ट', ur:'پیش رفت کی رپورٹ', fa:'گزارش پیشرفت' },
        'performance-report': { ar:'تقرير أداء مقابلة', en:'Interview Performance Report', fr:'Rapport de performance d\'entretien', es:'Informe de desempeño en la entrevista', tr:'Mülakat Performans Raporu', de:'Vorstellungsgespräch-Leistungsbericht', hi:'साक्षात्कार प्रदर्शन रिपोर्ट', ur:'انٹرویو کارکردگی رپورٹ', fa:'گزارش عملکرد مصاحبه' }
    };
    function historyToolLabel(toolKey) {
        const entry = HISTORY_LABELS[toolKey];
        return (entry && (entry[currentUiLang] || entry.ar)) || toolKey;
    }
    function getHistoryList() {
        try { return JSON.parse(localStorage.getItem('yusr_history') || '[]'); } catch (e) { return []; }
    }
    function saveHistoryList(arr) {
        try { localStorage.setItem('yusr_history', JSON.stringify(arr)); } catch (e) { console.warn('تعذر حفظ السجل محليًا', e); }
    }
    function syncHistoryToCloud(arr) {
        const user = fbAuth.currentUser;
        if (!user || user.isAnonymous) return;
        userDocRef(user.uid).update({ history: arr }).catch(e => console.warn('تعذر حفظ السجل على الخادم', e));
    }
    function saveToHistory(toolKey, text) {
        const clean = String(text == null ? '' : text).trim();
        if (!clean) return;
        const truncated = clean.length > HISTORY_ENTRY_MAX_CHARS ? clean.slice(0, HISTORY_ENTRY_MAX_CHARS) + '…' : clean;
        const arr = getHistoryList();
        arr.unshift({ tool: toolKey, text: truncated, time: Date.now() });
        const trimmed = arr.slice(0, HISTORY_MAX);
        saveHistoryList(trimmed);
        syncHistoryToCloud(trimmed);
        const view = document.getElementById('view-history');
        if (view && view.classList.contains('active')) renderHistoryView();
    }
    function deleteHistoryEntry(index) {
        const arr = getHistoryList();
        arr.splice(index, 1);
        saveHistoryList(arr);
        syncHistoryToCloud(arr);
        renderHistoryView();
    }
    function clearAllHistory() {
        saveHistoryList([]);
        syncHistoryToCloud([]);
        renderHistoryView();
    }
    function toggleHistoryEntry(index) {
        const body = document.getElementById('history-body-' + index);
        if (body) body.classList.toggle('hidden');
    }
    function copyHistoryEntry(index, btn) {
        const entry = getHistoryList()[index];
        if (!entry) return;
        navigator.clipboard.writeText(entry.text).then(() => flashCopied(btn));
    }
    function downloadHistoryEntry(index) {
        const entry = getHistoryList()[index];
        if (!entry) return;
        triggerDownload(entry.text, (entry.tool || 'result') + '.txt');
    }
    function renderHistoryView() {
        const list = document.getElementById('history-list');
        const empty = document.getElementById('history-empty');
        if (!list) return;
        const arr = getHistoryList();
        if (!arr.length) {
            list.innerHTML = '';
            if (empty) empty.classList.remove('hidden');
            return;
        }
        if (empty) empty.classList.add('hidden');
        list.innerHTML = arr.map((e, i) => {
            const d = new Date(e.time);
            const dateStr = isNaN(d) ? '' : d.toLocaleDateString(UI_LOCALE[currentUiLang] || 'ar-EG', { year: 'numeric', month: 'short', day: 'numeric' });
            const timeStr = isNaN(d) ? '' : d.toLocaleTimeString(UI_LOCALE[currentUiLang] || 'ar-EG', { hour: '2-digit', minute: '2-digit' });
            const previewSrc = (e.text || '').replace(/\s+/g, ' ').trim();
            const preview = escapeHtml(previewSrc.slice(0, 90)) + (previewSrc.length > 90 ? '…' : '');
            return `
            <div class="panel-2 rounded-xl overflow-hidden">
                <div class="p-3 flex items-center gap-2 cursor-pointer" data-x-onclick="hToggleHistoryEntry" data-idx="${i}">
                    <div class="flex-1 min-w-0">
                        <p class="text-xs font-bold text-slate-200 truncate">${escapeHtml(historyToolLabel(e.tool))}</p>
                        <p class="text-[10px] text-slate-500 truncate">${preview}</p>
                    </div>
                    <span class="text-[10px] text-slate-500 shrink-0">${dateStr} ${timeStr}</span>
                    <i class="fa-solid fa-chevron-down text-[10px] text-slate-500 shrink-0"></i>
                </div>
                <div id="history-body-${i}" class="hidden border-t border-[var(--border)] p-3 space-y-2">
                    <div class="flex justify-end gap-2">
                        <button data-x-onclick="hCopyHistoryEntry" data-idx="${i}" class="chip hover:bg-[var(--panel-2)]"><i class="fa-solid fa-copy"></i> <span>${I18N[currentUiLang].copy}</span></button>
                        <button data-x-onclick="hDownloadHistoryEntry" data-idx="${i}" class="chip hover:bg-[var(--panel-2)]"><i class="fa-solid fa-download"></i> <span>${I18N[currentUiLang].download}</span></button>
                        <button data-x-onclick="hDeleteHistoryEntry" data-idx="${i}" class="chip hover:bg-red-500/10 hover:text-red-300 hover:border-red-500/30"><i class="fa-solid fa-trash"></i></button>
                    </div>
                    <div class="text-xs sm:text-sm leading-relaxed max-h-[320px] overflow-y-auto">${formatReportText(e.text)}</div>
                </div>
            </div>`;
        }).join('');
    }
    window.clearAllHistory = clearAllHistory;
    window.deleteHistoryEntry = deleteHistoryEntry;
    window.toggleHistoryEntry = toggleHistoryEntry;
    window.copyHistoryEntry = copyHistoryEntry;
    window.downloadHistoryEntry = downloadHistoryEntry;

    function copyPlainText(text, btn) {
        navigator.clipboard.writeText(text).then(() => flashCopied(btn));
    }
    function copyChatTranscript() {
        const text = chatHistory.filter(m => m.role !== 'system').map(m => (m.role === 'assistant' ? currentInterviewerName + ': ' : 'أنت: ') + stripArabicDiacritics(m.content)).join('\n\n');
        navigator.clipboard.writeText(text);
        showToast(uiStr('conversationCopied'), 'success');
    }
    function downloadChatTranscript() {
        const text = chatHistory.filter(m => m.role !== 'system').map(m => (m.role === 'assistant' ? currentInterviewerName + ': ' : 'أنت: ') + stripArabicDiacritics(m.content)).join('\n\n');
        triggerDownload(text, 'interview-transcript.txt');
    }

    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognition = new SR();
        recognition.lang = currentAppLang;
        recognition.continuous = false;
        recognition.onstart = () => {
            isRecording = true; recordStartTime = Date.now();
            const micBtn = document.getElementById('mic-btn');
            micBtn.classList.add('bg-red-500/20', 'text-red-400', 'recording-pulse');
            micBtn.setAttribute('aria-label', 'إيقاف التسجيل');
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
        const micBtn = document.getElementById('mic-btn');
        micBtn.classList.remove('bg-red-500/20', 'text-red-400', 'recording-pulse');
        micBtn.setAttribute('aria-label', 'تحدث بصوتك');
        document.getElementById('user-chat-input').placeholder = "تحدث بالميكروفون أو اكتب هنا...";
    }

    let isTranscribing = false, transcribeMediaRecorder = null, transcribeChunks = [], transcribeStream = null, isTranscribeStarting = false;
    async function toggleTranscribeMic() {
        const btn = document.getElementById('transcribe-mic-btn');
        const status = document.getElementById('transcribe-status');
        if (isTranscribing) {
            isTranscribing = false;
            btn.classList.remove('bg-red-500/20', 'text-red-400', 'recording-pulse');
            btn.setAttribute('aria-label', 'تسجيل صوتي للتفريغ');
            status.innerText = "جاري تفريغ التسجيل بدقة عالية...";
            if (transcribeMediaRecorder && transcribeMediaRecorder.state !== 'inactive') transcribeMediaRecorder.stop();
            return;
        }
        if (isTranscribeStarting) return;
        isTranscribeStarting = true;
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            isTranscribeStarting = false;
            showToast("المتصفح لا يدعم التسجيل الصوتي المباشر.", 'error'); return;
        }
        try {
            transcribeStream = await navigator.mediaDevices.getUserMedia({
                audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true }
            });
        } catch (e) {
            isTranscribeStarting = false;
            showToast("محتاج إذن الوصول للمايك عشان التسجيل يشتغل.", 'error'); return;
        }
        status.innerText = "المايك بيتظبط... اتكلم بعد لحظة.";
        await new Promise(resolve => setTimeout(resolve, 450));
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
                const text = await transcribeAudioBlob(blob, 'mic-recording.webm', false, 'general');
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
        isTranscribeStarting = false;
        btn.classList.add('bg-red-500/20', 'text-red-400', 'recording-pulse');
        btn.setAttribute('aria-label', 'إيقاف التسجيل');
        status.innerText = "بيسجل دلوقتي بجودة عالية... اضغط تاني عشان توقف ويتفرّغ النص.";
    }
    function stopTranscribeMic() {
        isTranscribing = false;
        const btn = document.getElementById('transcribe-mic-btn');
        btn.classList.remove('bg-red-500/20', 'text-red-400', 'recording-pulse');
        btn.setAttribute('aria-label', 'تسجيل صوتي للتفريغ');
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
        if (maleBtn && femaleBtn) {
            maleBtn.classList.toggle('active', voiceGenderPref === 'male');
            femaleBtn.classList.toggle('active', voiceGenderPref === 'female');
        }
        const assistantGenderBtn = document.getElementById('assistant-gender-toggle-btn');
        if (assistantGenderBtn) {
            const icon = assistantGenderBtn.querySelector('i');
            if (icon) icon.className = voiceGenderPref === 'female' ? 'fa-solid fa-venus' : 'fa-solid fa-mars';
            assistantGenderBtn.title = voiceGenderPref === 'female' ? 'صوت الرد: صوت ست (دوس تغيير لراجل)' : 'صوت الرد: صوت راجل (دوس تغيير لست)';
        }
    }

    const FEMALE_VOICE_HINTS = ['female', 'woman', 'salma', 'zeina', 'laila', 'hoda', 'amira', 'fatima', 'samantha', 'victoria', 'zira', 'susan', 'karen', 'moira', 'tessa', 'fiona', 'amal'];
    const MALE_VOICE_HINTS = ['male', 'man', 'naayf', 'hamed', 'majed', 'tarik', 'fred', 'daniel', 'david', 'george', 'mark', 'alex'];

    function getBestBrowserVoice(gender) {
        if (!cachedBrowserVoices || !cachedBrowserVoices.length) cachedBrowserVoices = window.speechSynthesis.getVoices() || [];
        if (!cachedBrowserVoices.length) return null;
        const langPrefix = (currentAppLang || 'ar').slice(0, 2).toLowerCase();
        const sameLang = cachedBrowserVoices.filter(v => v.lang && v.lang.toLowerCase().startsWith(langPrefix));
        if (!sameLang.length) return null;
        const hints = gender === 'female' ? FEMALE_VOICE_HINTS : MALE_VOICE_HINTS;
        const matched = sameLang.find(v => hints.some(h => v.name.toLowerCase().includes(h)));
        return matched || sameLang[0];
    }

    function stopSpeaking() {
        speakQueueToken++; // يوقف أي حلقة تشغيل جمل (speakTextChunked) شغالة دلوقتي
        if ('speechSynthesis' in window) window.speechSynthesis.cancel();
        if (currentSpeakingAudio) {
            try { currentSpeakingAudio.pause(); currentSpeakingAudio.currentTime = 0; } catch (e) {}
            currentSpeakingAudio = null;
        }
        const indicator = document.getElementById('ai-speaking-indicator');
        if (indicator) indicator.classList.add('hidden');
    }

    let audioPlaybackUnlocked = false;
    const AUDIO_UNLOCK_EVENTS = ['pointerdown', 'touchstart', 'click', 'keydown'];
    function unlockAudioPlayback() {
        if (audioPlaybackUnlocked) return;
        try {
            const silent = new Audio("data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=");
            silent.volume = 0;
            const p = silent.play();
            audioPlaybackUnlocked = true;
            AUDIO_UNLOCK_EVENTS.forEach((evt) => document.removeEventListener(evt, unlockAudioPlayback, true));
            if (p && typeof p.then === 'function') {
                p.then(() => { silent.pause(); silent.currentTime = 0; }).catch(() => {});
            }
        } catch (e) { /* هنحاول تاني في أول لمسة تانية */ }
    }
    AUDIO_UNLOCK_EVENTS.forEach((evt) => {
        document.addEventListener(evt, unlockAudioPlayback, { capture: true, passive: true });
    });

    const ttsAudioCache = new Map();
    function ttsCacheKey(text, voice) { return `${voice}::${text}`; }
    async function fetchEdgeTtsBlob(text, voice) {
        const response = await fetch(`${CLOUD_FUNCTIONS_BASE}/edgeTtsSpeak`, {
            method: "POST",
            headers: { "Content-Type": "application/json", ...(await getAuthHeader()) },
            body: JSON.stringify({ text, voice })
        });
        if (!response.ok) throw new Error(`Edge TTS error: ${response.status}`);
        return await response.blob();
    }
    function sanitizeTextForSpeech(text) {
        return String(text || '')
            .replace(/[*_#`~]/g, '')
            .replace(/\[(.*?)\]\((.*?)\)/g, '$1') // روابط ماركداون [نص](رابط) -> النص بس
            .replace(/[<>]/g, '')
            .replace(/\s+/g, ' ')
            .trim();
    }

    function splitIntoSentences(text) {
        const clean = sanitizeTextForSpeech(text);
        if (!clean) return [];
        const parts = clean.match(/[^.!?؟]+[.!?؟]+|[^.!?؟]+$/g) || [clean];
        return parts.map(p => p.trim()).filter(Boolean);
    }
    function prefetchTtsAudio(text) {
        if (!text) return;
        try {
            const sentences = splitIntoSentences(text);
            if (!sentences.length) return;
            const langVoices = EDGE_TTS_VOICES[currentAppLang] || EDGE_TTS_VOICES["ar-EG"];
            const voice = langVoices[voiceGenderPref] || langVoices.male;
            sentences.forEach((sentence) => {
                const key = ttsCacheKey(sentence, voice);
                if (ttsAudioCache.has(key)) return;
                const pending = fetchEdgeTtsBlob(sentence, voice).catch((e) => { ttsAudioCache.delete(key); throw e; });
                ttsAudioCache.set(key, pending);
            });
        } catch (e) { /* التجهيز المسبق اختياري بحت، أي فشل هنا مش مهم */ }
    }

    function speakSentenceWithBrowserVoice(sentence) {
        return new Promise((resolve) => {
            if (!('speechSynthesis' in window)) return resolve();
            const bestVoice = getBestBrowserVoice(voiceGenderPref);
            if (!bestVoice) return resolve();
            const utterance = new SpeechSynthesisUtterance(sentence);
            utterance.voice = bestVoice; utterance.lang = bestVoice.lang;
            utterance.pitch = voiceGenderPref === 'female' ? 1.15 : 0.9;
            utterance.rate = 0.95;
            utterance.onend = () => resolve();
            utterance.onerror = () => resolve();
            window.speechSynthesis.speak(utterance);
        });
    }

    async function speakTextChunked(text) {
        if (!isVoiceEnabled) return;
        stopSpeaking(); // نوقف أي صوت شغال قبل ما نبدأ الجديد، عشان محدش يتراكب فوق التاني ويلغي حلقة التشغيل القديمة
        const myToken = speakQueueToken; // اتزوّد جوه stopSpeaking() فوق - ده رقم "الجلسة" بتاعتنا
        const sentences = splitIntoSentences(text);
        if (!sentences.length) return;

        const indicator = document.getElementById('ai-speaking-indicator');
        document.getElementById('status-text').innerText = `${currentInterviewerName} (HR) يتحدث...`;
        indicator.classList.remove('hidden');

        const langVoices = EDGE_TTS_VOICES[currentAppLang] || EDGE_TTS_VOICES["ar-EG"];
        const voice = langVoices[voiceGenderPref] || langVoices.male;

        const pendingBlobs = sentences.map((sentence) => {
            const key = ttsCacheKey(sentence, voice);
            if (ttsAudioCache.has(key)) return ttsAudioCache.get(key);
            const pending = fetchEdgeTtsBlob(sentence, voice).catch((e) => { ttsAudioCache.delete(key); throw e; });
            ttsAudioCache.set(key, pending);
            return pending;
        });

        for (let i = 0; i < sentences.length; i++) {
            if (myToken !== speakQueueToken) return; // بدأ رد جديد أو المستخدم وقف الصوت - نوقف هنا فورًا
            const key = ttsCacheKey(sentences[i], voice);
            try {
                const blob = await pendingBlobs[i];
                ttsAudioCache.delete(key);
                if (myToken !== speakQueueToken) return;
                await new Promise((resolve) => {
                    const audio = new Audio(URL.createObjectURL(blob));
                    currentSpeakingAudio = audio;
                    audio.onended = () => { if (currentSpeakingAudio === audio) currentSpeakingAudio = null; resolve(); };
                    audio.onerror = () => resolve();
                    audio.play().then(() => {}, () => resolve());
                });
            } catch (e) {
                console.error("Edge TTS Voice Error (جملة رقم " + (i + 1) + "):", e);
                if (myToken !== speakQueueToken) return;
                await speakSentenceWithBrowserVoice(sentences[i]);
            }
        }
        if (myToken === speakQueueToken) indicator.classList.add('hidden');
    }
    function speakText(text) { return speakTextChunked(text); }

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

    const AI_TOOL_LANG_NAME = {
        ar: 'Arabic (Egyptian colloquial dialect, friendly and natural)',
        en: 'English',
        fr: 'French',
        es: 'Spanish',
        tr: 'Turkish',
        de: 'German',
        hi: 'Hindi',
        ur: 'Urdu',
        fa: 'Persian (Farsi)'
    };
    function aiToolLangDirective() {
        const langName = AI_TOOL_LANG_NAME[currentUiLang] || AI_TOOL_LANG_NAME.ar;
        return `\n\nIMPORTANT: Write your entire response in ${langName} only. Every single word you generate — including any headings, labels, or section titles — must be in ${langName}, regardless of what language these instructions are written in.`;
    }

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
            prefetchTtsAudio(aiResponse); // نبدأ نجهّز الصوت فورًا قبل حتى ما نكتب الرسالة في الشاشة
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
            prefetchTtsAudio(aiResponse); // نبدأ نجهّز الصوت فورًا قبل حتى ما نكتب الرسالة في الشاشة
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

    const DELIBERATE_DENIAL_STATUSES = new Set([401, 403, 429]);
    const NETWORK_TIMEOUT_MS = 20000;

    let __activeLoadingRequests = 0;
    function showGlobalLoader() {
        __activeLoadingRequests++;
        const bar = document.getElementById('global-loading-bar');
        if (bar) bar.classList.remove('hidden');
    }
    function hideGlobalLoader() {
        __activeLoadingRequests = Math.max(0, __activeLoadingRequests - 1);
        if (__activeLoadingRequests === 0) {
            const bar = document.getElementById('global-loading-bar');
            if (bar) bar.classList.add('hidden');
        }
    }
    window.showGlobalLoader = showGlobalLoader;
    window.hideGlobalLoader = hideGlobalLoader;

    async function fetchWithTimeout(url, options = {}, timeoutMs = NETWORK_TIMEOUT_MS) {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), timeoutMs);
        showGlobalLoader();
        try {
            return await fetch(url, { ...options, signal: controller.signal });
        } finally {
            clearTimeout(timer);
            hideGlobalLoader();
        }
    }

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
            console.warn("AI Processing Service (via Cloud Function) error:", response.status, errBody);
            if (DELIBERATE_DENIAL_STATUSES.has(response.status)) {
                throw new Error("usage_limit_or_auth_denied");
            }
            throw new Error("groq_service_error");
        } catch (e) {
            if (e && e.message === "usage_limit_or_auth_denied") throw e;
            console.warn("مسار AI Processing Service تعذر:", e);
            if (typeof navigator !== 'undefined' && navigator.onLine === false) {
                throw new Error("مفيش اتصال بالإنترنت دلوقتي. أدوات الذكاء الاصطناعي محتاجة نت عشان تشتغل — جرب تاني لما النت يرجع.");
            }
            throw new Error("فشل الاتصال بالذكاء الاصطناعي، حاول تاني بعد شوية.");
        }
    }

    function getAssistantBotName() {
        const dict = I18N[currentUiLang] || I18N.ar;
        return dict['assistant.botName'] || 'يسر Pro Bot';
    }
    const ASSISTANT_MODEL_LANG_NAME = {
        ar: 'Arabic (Egyptian colloquial dialect, friendly and natural)',
        en: 'English',
        fr: 'French',
        es: 'Spanish',
        tr: 'Turkish',
        de: 'German',
        hi: 'Hindi',
        ur: 'Urdu',
        fa: 'Persian (Farsi)'
    };
    function getAssistantSystemPrompt() {
        const botName = getAssistantBotName();
        const langName = ASSISTANT_MODEL_LANG_NAME[currentUiLang] || ASSISTANT_MODEL_LANG_NAME.ar;
        return `Your name is "${botName}", the official AI assistant of the Yusr Pro platform, which helps job seekers prepare for interviews and grow their careers. Always reply in ${langName} — every single word of your reply must be in ${langName}, regardless of what language the system instructions here are written in. Use a polished, warm, direct, and concise style (short paragraphs, no markdown symbols). Focus on job interviews, CVs, salary negotiation, and career growth — but you can also answer any other question the user asks, generally and simply. If the user sends an image, understand it and describe it or answer their question about it in detail, in ${langName}, in the same style.

Pronunciation rule: your reply text is also converted to speech, so accurate pronunciation marks matter. If ${langName} is Arabic, Urdu, or Persian, write every single word with full diacritics (complete Arabic-script tashkeel/harakat — fatha, damma, kasra, sukun, shadda, tanween as needed on every letter) matching the exact colloquial pronunciation, not just formal spelling. For other languages, just use correct standard spelling and accent marks. Do not worry about how this looks in text — the app automatically hides these marks from the screen and only uses them for correct speech, so always include them in full regardless.

Fixed important rule: if anyone asks who built you, who made you, what technology or model you run on, or any question about your technical identity — answer only that you were built and designed by "Yusr Pro company", without mentioning the name of any other AI company, model, or technical provider at all, even if asked insistently.`;
    }
    let assistantChatHistory = [{ role: "system", content: getAssistantSystemPrompt() }];
    let assistantChatBusy = false;
    let assistantPendingImage = null; // data URL للصورة المرفقة المنتظرة الإرسال

    function escapeHtmlForChat(s) {
        return String(s || '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    }
    function renderAssistantBubbleContent(content) {
        if (Array.isArray(content)) {
            const imgPart = content.find(p => p && p.type === 'image_url');
            const textPart = content.find(p => p && p.type === 'text');
            const imgAlt = (I18N[currentUiLang] || I18N.ar)['assistant.imageAlt'] || 'صورة مرفقة';
            const imgHtml = imgPart && imgPart.image_url && imgPart.image_url.url
                ? `<img class="assistant-msg-img" src="${imgPart.image_url.url}" alt="${escapeHtmlForChat(imgAlt)}">` : '';
            return imgHtml + escapeHtmlForChat(stripArabicDiacritics(textPart ? textPart.text : ''));
        }
        return escapeHtmlForChat(stripArabicDiacritics(content));
    }
    function renderAssistantMessages() {
        const log = document.getElementById('assistant-chat-log');
        if (!log) return;
        const visible = assistantChatHistory.filter(m => m.role !== 'system');
        if (visible.length === 0) {
            const dict = I18N[currentUiLang] || I18N.ar;
            const emptyHint = (dict['assistant.emptyHint'] || 'اسأل {bot} بالكتابة أو الصوت، أو ابعتله صورة يشوفها ويجاوبك عليها.').replace('{bot}', getAssistantBotName());
            log.innerHTML = `<div class="text-center text-[11px] text-slate-500 py-6">
                <i class="fa-solid fa-wand-magic-sparkles text-lg mb-1.5 block" style="color:var(--accent)"></i>
                ${escapeHtmlForChat(emptyHint)}
            </div>`;
            return;
        }
        log.innerHTML = visible.map(m =>
            `<div class="assistant-msg from-${m.role === 'user' ? 'user' : 'bot'}${m.error ? ' is-error' : ''} reveal-in">${renderAssistantBubbleContent(m.content)}</div>`
        ).join('');
        log.scrollTop = log.scrollHeight;
    }
    function setAssistantTyping(show) {
        const log = document.getElementById('assistant-chat-log');
        if (!log) return;
        let el = document.getElementById('assistant-typing-indicator');
        if (show) {
            if (el) return;
            el = document.createElement('div');
            el.id = 'assistant-typing-indicator';
            el.className = 'assistant-typing';
            el.innerHTML = '<span></span><span></span><span></span>';
            log.appendChild(el);
            log.scrollTop = log.scrollHeight;
        } else if (el) {
            el.remove();
        }
    }
    function handleAssistantInputKey(ev) {
        if (ev.key === 'Enter' && !ev.shiftKey) {
            ev.preventDefault();
            sendAssistantMessage();
        }
    }

    function compressImageFile(file, maxDim, quality) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onerror = () => reject(new Error('read_failed'));
            reader.onload = () => {
                const img = new Image();
                img.onerror = () => reject(new Error('decode_failed'));
                img.onload = () => {
                    let { width, height } = img;
                    if (width > maxDim || height > maxDim) {
                        const ratio = Math.min(maxDim / width, maxDim / height);
                        width = Math.round(width * ratio);
                        height = Math.round(height * ratio);
                    }
                    const canvas = document.createElement('canvas');
                    canvas.width = width; canvas.height = height;
                    canvas.getContext('2d').drawImage(img, 0, 0, width, height);
                    resolve(canvas.toDataURL('image/jpeg', quality));
                };
                img.src = reader.result;
            };
            reader.readAsDataURL(file);
        });
    }
    async function handleAssistantImageSelect(ev) {
        const file = ev.target.files && ev.target.files[0];
        ev.target.value = ''; // يسمح باختيار نفس الملف تاني لو احتاج يشيله ويرجّعه
        if (!file) return;
        if (!file.type || !file.type.startsWith('image/')) {
            showToast('اختار ملف صورة صحيح.', 'error'); return;
        }
        try {
            const dataUrl = await compressImageFile(file, 1024, 0.72);
            assistantPendingImage = dataUrl;
            const previewWrap = document.getElementById('assistant-image-preview-wrap');
            document.getElementById('assistant-image-preview').src = dataUrl;
            previewWrap.classList.remove('hidden');
        } catch (e) {
            console.warn('تعذر تجهيز الصورة', e);
            showToast('تعذر تجهيز الصورة، جرب صورة تانية.', 'error');
        }
    }
    function removeAssistantImage() {
        assistantPendingImage = null;
        document.getElementById('assistant-image-preview-wrap').classList.add('hidden');
        document.getElementById('assistant-image-preview').src = '';
    }

    let assistantVoiceEnabled = localStorage.getItem('yusr_assistant_voice') !== 'off';
    function updateAssistantVoiceBtn() {
        const btn = document.getElementById('assistant-voice-toggle-btn');
        if (!btn) return;
        btn.classList.toggle('voice-on', assistantVoiceEnabled);
        btn.classList.toggle('voice-off', !assistantVoiceEnabled);
        btn.innerHTML = assistantVoiceEnabled ? '<i class="fa-solid fa-volume-high"></i>' : '<i class="fa-solid fa-volume-xmark"></i>';
    }
    function toggleAssistantVoice() {
        assistantVoiceEnabled = !assistantVoiceEnabled;
        localStorage.setItem('yusr_assistant_voice', assistantVoiceEnabled ? 'on' : 'off');
        updateAssistantVoiceBtn();
        if (!assistantVoiceEnabled && typeof stopSpeaking === 'function') { try { stopSpeaking(); } catch (e) {} }
    }

    let assistantMediaRecorder = null, assistantAudioChunks = [], assistantStream = null, isAssistantRecording = false, isAssistantMicStarting = false;
    async function toggleAssistantMic() {
        const btn = document.getElementById('assistant-mic-btn');
        const status = document.getElementById('assistant-mic-status');
        if (isAssistantRecording) {
            isAssistantRecording = false;
            btn.classList.remove('is-recording');
            status.classList.remove('hidden');
            status.innerText = 'بيحوّل كلامك لنص دلوقتي...';
            if (assistantMediaRecorder && assistantMediaRecorder.state !== 'inactive') assistantMediaRecorder.stop();
            return;
        }
        if (isAssistantMicStarting || assistantChatBusy) return;
        isAssistantMicStarting = true;
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            isAssistantMicStarting = false;
            showToast('المتصفح لا يدعم التسجيل الصوتي المباشر.', 'error'); return;
        }
        try {
            assistantStream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true } });
        } catch (e) {
            isAssistantMicStarting = false;
            showToast('محتاج إذن الوصول للمايك عشان تكلم يسر Pro Bot بصوتك.', 'error'); return;
        }
        status.classList.remove('hidden');
        status.innerText = 'المايك بيتظبط... اتكلم بعد لحظة.';
        await new Promise(resolve => setTimeout(resolve, 400));
        assistantAudioChunks = [];
        const mimeType = MediaRecorder.isTypeSupported('audio/webm;codecs=opus') ? 'audio/webm;codecs=opus' : (MediaRecorder.isTypeSupported('audio/mp4') ? 'audio/mp4' : '');
        assistantMediaRecorder = mimeType ? new MediaRecorder(assistantStream, { mimeType }) : new MediaRecorder(assistantStream);
        assistantMediaRecorder.ondataavailable = (e) => { if (e.data.size > 0) assistantAudioChunks.push(e.data); };
        assistantMediaRecorder.onstop = async () => {
            assistantStream.getTracks().forEach(t => t.stop());
            const blob = new Blob(assistantAudioChunks, { type: assistantMediaRecorder.mimeType || 'audio/webm' });
            if (blob.size < 800) { status.innerText = 'معلش، مسجّلش صوت كفاية. جرب تاني.'; return; }
            try {
                const text = await transcribeAudioBlob(blob, 'assistant-mic.webm', false, 'general');
                status.classList.add('hidden');
                const input = document.getElementById('assistant-chat-input');
                if (text && text.trim()) {
                    input.value = text.trim();
                    sendAssistantMessage(); // إرسال تلقائي فور ما الكلام يتفرّغ - إحساس محادثة صوتية حقيقية
                }
            } catch (e) {
                console.warn('Assistant mic transcription failed:', e);
                status.innerText = 'تعذر فهم الصوت، جرب تاني أو اكتب سؤالك.';
            }
        };
        assistantMediaRecorder.start();
        isAssistantRecording = true;
        isAssistantMicStarting = false;
        btn.classList.add('is-recording');
        status.innerText = 'بيسجل دلوقتي... اضغط تاني عشان توقف.';
    }

    async function sendAssistantMessage() {
        const input = document.getElementById('assistant-chat-input');
        const text = (input.value || '').trim();
        if ((!text && !assistantPendingImage) || assistantChatBusy) return;
        if (!checkDeviceTrial()) return;
        input.value = '';
        const defaultImageQuestion = (I18N[currentUiLang] || I18N.ar)['assistant.defaultImageQuestion'] || 'وصف الصورة دي واشرحلي اللي فيها بالتفصيل.';
        const content = assistantPendingImage
            ? [{ type: 'text', text: text || defaultImageQuestion }, { type: 'image_url', image_url: { url: assistantPendingImage } }]
            : text;
        assistantChatHistory.push({ role: 'user', content });
        removeAssistantImage();
        renderAssistantMessages();
        assistantChatBusy = true;
        const sendBtn = document.getElementById('assistant-chat-send-btn');
        if (sendBtn) sendBtn.disabled = true;
        setAssistantTyping(true);
        incrementDeviceUsage();
        try {
            assistantChatHistory[0] = { role: 'system', content: getAssistantSystemPrompt() };
            const trimmed = [assistantChatHistory[0], ...assistantChatHistory.slice(1).slice(-16)];
            const reply = await callGroqConversation(trimmed);
            assistantChatHistory.push({ role: 'assistant', content: reply });
            if (assistantVoiceEnabled) { try { speakTextChunked(reply); } catch (e) {} }
        } catch (e) {
            const msg = (e && e.message === 'usage_limit_or_auth_denied')
                ? 'وصلت لحد الاستخدام المسموح في باقتك الحالية.'
                : 'تعذر الرد دلوقتي، جرب تاني بعد شوية.';
            assistantChatHistory.push({ role: 'assistant', content: msg, error: true });
        } finally {
            setAssistantTyping(false);
            assistantChatBusy = false;
            if (sendBtn) sendBtn.disabled = false;
            renderAssistantMessages();
        }
    }
    function clearAssistantChat() {
        assistantChatHistory = [{ role: 'system', content: getAssistantSystemPrompt() }];
        removeAssistantImage();
        renderAssistantMessages();
    }

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
            { role: "system", content: `أنت خبير تدريب مقابلات محترف وصريح جداً. حلل نص المقابلة وابنِ تقرير بنفس الترتيب: 1) تقييم عام من 100 مع السبب 2) نقاط قوة بأمثلة حقيقية من كلامه 3) نقاط تحسين محددة إجابة بإجابة 4) مستوى الثقة والتوتر بناءً على أسلوب كلامه وبيانات السرعة/التردد المرفقة، بصراحة ووضوح 5) 3-5 نصائح عملية فورية 6) خلاصة تحفيزية قصيرة. اكتب بأسلوب واضح مباشر بدون رموز markdown.${aiToolLangDirective()}` },
            { role: "user", content: `بيانات صوتية:\n${voiceInsights}\n\nنص المقابلة:\n${transcript}` }
        ];
        try {
            const reportText = await callGroqConversation(prompt);
            renderResult(body, reportText, 'performance-report.txt');
            addProgressEntry(interviewRole, reportText, {
                transcript: chatHistory.filter(m => m.role !== 'system'),
                nationality: selectedNationality,
                interviewerName: currentInterviewerName
            });
        }
        catch (e) { body.innerHTML = errorHTML("تعذر توليد التقرير الآن، جرب تاني بعد شوية."); }
    }

    async function endInterviewSession() {
        const answered = chatHistory.filter(m => m.role === 'user').length;

        if (!answered) {
            if (!confirm("لسه ماكلمتش المحاور خالص. تحب تقفل المقابلة من غير ما تتحفظ في الأرشيف؟")) return;
            resetInterviewToSetup();
            return;
        }

        const confirmMsg = "متأكد إنك عايز تنهي المقابلة؟\n\n" +
            "الإجراء ده نهائي تمامًا: مش هينفع تكمل الجلسة دي تاني بعد كده.\n" +
            "لو عايز تغيّر اللغة أو الشخص اللي بيقابلك، هتحتاج تبدأ مقابلة جديدة من الأول.\n\n" +
            "هنولّد تقييم أداء نهائي ونحفظ المقابلة كاملة (المحادثة + التقرير) في أرشيف المقابلات بشكل دائم.";
        if (!confirm(confirmMsg)) return;

        stopSpeaking();
        openReportModal();
        const body = document.getElementById('report-body');
        body.innerHTML = spinnerHTML("جاري إنهاء المقابلة وتحليل أدائك...");

        const fullTranscript = chatHistory.filter(m => m.role !== 'system');
        let reportText;

        if (answered >= 2) {
            let voiceInsights = "المتقدم كتب أغلب إجاباته بدل التحدث، فمفيش بيانات كافية عن سرعة الكلام أو التردد.";
            if (speakingStats.length > 0) {
                const avgWpm = Math.round(speakingStats.reduce((a, s) => a + (s.wpm || 0), 0) / speakingStats.length);
                const totalFillers = speakingStats.reduce((a, s) => a + s.fillers, 0);
                voiceInsights = `تحدث بالميكروفون في ${speakingStats.length} إجابة. متوسط السرعة ${avgWpm} كلمة/دقيقة (الطبيعي الهادئ 110-150). كلمات التردد الكلية: ${totalFillers}. استخدمهم كمؤشر تقريبي فقط.`;
            }
            const transcriptText = fullTranscript.map(m => (m.role === 'assistant' ? currentInterviewerName + ': ' : 'المتقدم: ') + m.content).join('\n');
            const prompt = [
                { role: "system", content: `أنت خبير تدريب مقابلات محترف وصريح جداً. حلل نص المقابلة وابنِ تقرير بنفس الترتيب: 1) تقييم عام من 100 مع السبب 2) نقاط قوة بأمثلة حقيقية من كلامه 3) نقاط تحسين محددة إجابة بإجابة 4) مستوى الثقة والتوتر بناءً على أسلوب كلامه وبيانات السرعة/التردد المرفقة، بصراحة ووضوح 5) 3-5 نصائح عملية فورية 6) خلاصة تحفيزية قصيرة. اكتب بأسلوب واضح مباشر بدون رموز markdown.${aiToolLangDirective()}` },
                { role: "user", content: `بيانات صوتية:\n${voiceInsights}\n\nنص المقابلة:\n${transcriptText}` }
            ];
            try {
                reportText = await callGroqConversation(prompt);
                renderResult(body, reportText, 'performance-report.txt');
            } catch (e) {
                reportText = "تعذر توليد تقييم تفصيلي لهذه الجلسة، لكن المحادثة كاملة اتحفظت في الأرشيف.";
                body.innerHTML = errorHTML("تعذر توليد تقييم تفصيلي، لكن اطمن: المحادثة كاملة اتحفظت في أرشيف المقابلات من غير تقييم.");
            }
        } else {
            reportText = "الجلسة دي كانت قصيرة (أقل من إجابتين) فمفيش تقييم تفصيلي، لكن المحادثة اتحفظت كاملة في الأرشيف.";
            body.innerHTML = `<p class="text-xs text-slate-400 leading-relaxed">${reportText}</p>`;
        }

        addProgressEntry(interviewRole, reportText, {
            transcript: fullTranscript,
            nationality: selectedNationality,
            interviewerName: currentInterviewerName
        });

        resetInterviewToSetup();
        showToast("المقابلة اتقفلت وتحفظت كاملة في الأرشيف. لو عايز تجرب لغة أو محاور مختلف، ابدأ جلسة جديدة.", 'success');
    }

    function resetInterviewToSetup() {
        clearInterviewState();
        chatHistory = [];
        speakingStats = [];
        document.getElementById('chat-interface').classList.add('hidden');
        document.getElementById('chat-interface').classList.remove('flex');
        document.getElementById('chat-history').innerHTML = '';
        document.getElementById('interview-setup-box').classList.remove('hidden');
        checkInterviewResumeBanner();
    }

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
رقّم الأسئلة بالترتيب. بدون رموز markdown.${aiToolLangDirective()}` },
            { role: "user", content: `وظيفة: ${role} — المستوى: ${level}` }
        ];
        try { renderResult(box, await callGroqConversation(messages), 'faq-answers.txt'); }
        catch (e) { box.innerHTML = errorHTML("تعذر التجهيز، حاول تاني."); }
    }

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
            { role: "system", content: `أنت مستشار تطوير مهني محترف. ${isSummary ? summaryInstruction : detailedInstruction} بدون رموز markdown.${aiToolLangDirective()}` },
            { role: "user", content: `الوضع الحالي: ${current}\nالهدف: ${target}\n${context ? 'تفاصيل إضافية: ' + context : ''}` }
        ];
        try { renderResult(box, await callGroqConversation(messages), 'career-plan.txt'); }
        catch (e) { box.innerHTML = errorHTML("تعذر بناء الخطة، حاول تاني."); }
    }

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
                { role: "system", content: `أنت خبير كتابة سير ذاتية بستايل لينكد إن الاحترافي. اكتب سيرة ذاتية بنفس روح صفحة لينكد إن: تبدأ بسطر "معلومات التواصل" يجمع الهاتف والإيميل ورابط لينكد إن والمدينة لو موجودين، بعدين قسم "About / نبذة تعريفية" قصير وقوي، بعدين "الخبرة العملية" بترتيب زمني عكسي وبجمل فعل نشطة وإنجازات مبنية على أرقام لو أمكن استنتاجها، بعدين "التعليم"، وأخيراً "المهارات". رتّبها بعناوين نصية واضحة بدون رموز markdown، جاهزة للنسخ مباشرة.${aiToolLangDirective()}` },
                { role: "user", content: `الاسم: ${name}\nالمسمى المستهدف: ${title}\nمعلومات التواصل: هاتف: ${phone || '-'} | إيميل: ${email || '-'} | لينكد إن: ${linkedin || '-'} | الموقع: ${location || '-'}\nالخبرات: ${exp}\nالمؤهلات: ${edu}\nالمهارات: ${skills}` }
            ];
        } else {
            messages = [
                { role: "system", content: `أنت خبير كتابة سير ذاتية احترافية. اكتب سيرة ذاتية نصية عادية (بدون أي إشارة لصورة) منظمة بصياغة قوية وجمل فعل نشطة وإنجازات مبنية على أرقام لو أمكن استنتاجها من الكلام، بالأقسام: ملخص احترافي قصير، الخبرات العملية، المؤهلات، المهارات. رتّبها بعناوين نصية واضحة بدون رموز markdown، جاهزة للنسخ مباشرة في Word.${aiToolLangDirective()}` },
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

    function renderCvLinkedInResult(box, text) {
        box.dataset.raw = text;
        box.classList.remove('hidden');
        box.innerHTML = `<div class="flex flex-wrap justify-end gap-2 mb-2">
            <button data-x-onclick="hCopyResult" class="chip hover:bg-[var(--panel-2)]"><i class="fa-solid fa-copy"></i> <span>${I18N[currentUiLang].copy}</span></button>
            <button data-x-onclick="hDownloadResultLinkedin" class="chip hover:bg-[var(--panel-2)]"><i class="fa-solid fa-download"></i> نص فقط</button>
            <button data-x-onclick="hExportCvLinkedInImage" class="chip hover:bg-[var(--panel-2)]"><i class="fa-brands fa-linkedin"></i> احفظ كصورة (ستايل لينكد إن)</button>
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

    let pfChatHistory = [];
    function startPortfolioChat() {
        const field = document.getElementById('pf-field').value.trim();
        if (!field) return showToast("اكتب مجالك أولاً.", 'error');
        document.getElementById('pf-setup-box').classList.add('hidden');
        document.getElementById('pf-chat-interface').classList.remove('hidden');
        document.getElementById('pf-chat-interface').classList.add('flex');
        document.getElementById('pf-chat-history').innerHTML = '';
        const systemPrompt = `أنت مستشار بناء بورتفوليوهات محترف. المستخدم مجاله: (${field}). مهمتك تسأله أسئلة قصيرة ومباشرة (سؤال واحد كل مرة، سطر أو سطرين) عشان تجمع منه: أهم مشاريعه/أعماله، الأدوات والمهارات المستخدمة، أكبر إنجاز حقق نتيجة ملموسة، الجمهور المستهدف من البورتفوليو، والأسلوب/النبرة اللي يفضلها (رسمي/إبداعي/بسيط). اسأل سؤال واحد بس في كل رد، وابدأ فوراً بسؤال عن أهم مشروعين أو أعمال عنده.${aiToolLangDirective()}`;
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
        showToast(uiStr('copiedToast'), 'success');
    }
    async function runPortfolioBuilder() {
        if (pfChatHistory.filter(m => m.role === 'user').length < 1) return showToast("جاوب على سؤال أو اتنين الأول عشان نقدر نجهزلك محتوى حقيقي.", 'error');
        if (!checkDeviceTrial()) return;
        const box = document.getElementById('portfolio-result');
        box.classList.remove('hidden'); box.innerHTML = spinnerHTML("جاري تجهيز محتوى البورتفوليو...");
        incrementDeviceUsage();
        const convo = pfChatHistory.filter(m => m.role !== 'system').map(m => (m.role === 'assistant' ? 'سؤال: ' : 'إجابة: ') + m.content).join('\n');
        const messages = [
            { role: "system", content: `أنت مستشار بناء بورتفوليوهات احترافية. بناءً على الحوار المرفق مع المستخدم، جهّز محتوى نصي منظم لصفحة بورتفوليو شخصي: نبذة تعريفية جذابة (About)، وصف احترافي مقنع لكل مشروع بأسلوب يبرز النتيجة والقيمة مش بس الوصف التقني، واقتراح لعناوين الأقسام الرئيسية للصفحة. بدون رموز markdown.${aiToolLangDirective()}` },
            { role: "user", content: `مجال المستخدم: ${document.getElementById('pf-field').value.trim()}\n\nالحوار:\n${convo}` }
        ];
        try { renderResult(box, await callGroqConversation(messages), 'portfolio.txt'); }
        catch (e) { box.innerHTML = errorHTML("تعذر التجهيز، حاول تاني."); }
    }

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
            { role: "system", content: `أنت خبير توظيف وتحليل أنظمة ATS. قارن بين السيرة الذاتية ووصف الوظيفة المرفقين، واكتب تقريراً بالترتيب: 1) نسبة توافق تقريبية من 100 مع سطر شرح مختصر للسبب (اكتب الرقم بصيغة "نسبة التوافق: XX/100") 2) أهم نقاط التطابق الموجودة فعلاً في السيرة الذاتية 3) أهم نقاط الضعف أو الخبرات الناقصة مقارنة بمتطلبات الوظيفة 4) قائمة كلمات مفتاحية مهمة موجودة في وصف الوظيفة وغير موجودة في السيرة الذاتية، ينصح بإضافتها بصياغة صحيحة لزيادة فرصة القبول في الفلترة الآلية. بدون رموز markdown.${aiToolLangDirective()}` },
            { role: "user", content: `وصف الوظيفة:\n${jobDesc}\n\nالسيرة الذاتية:\n${resume}` }
        ];
        try { renderResult(box, await callGroqConversation(messages), 'cv-job-match.txt'); }
        catch (e) { box.innerHTML = errorHTML("تعذر التحليل، حاول تاني."); }
    }

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
                { role: "system", content: `أنت أداة استخراج بيانات من صور السير الذاتية (CV). هيوصلك صورة سيرة ذاتية، اقرأها بدقة واستخرج منها: الاسم، المسمى الوظيفي الحالي أو المستهدف، أهم 3-5 نقاط خبرة عملية (باختصار شديد)، أبرز المهارات، وآخر مؤهل دراسي. رجّع النتيجة كنص منظم بعناوين قصيرة وبنقاط، بدون رموز markdown. لو الصورة مش واضحة أو مفيهاش سيرة ذاتية واضحة، قول ذلك صراحة بدل ما تخترع بيانات.${aiToolLangDirective()}` },
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
        sys += aiToolLangDirective();
        const messages = [
            { role: "system", content: sys },
            { role: "user", content: `الوظيفة: ${role}\n${company ? 'الشركة: ' + company + '\n' : ''}${notes ? 'نقاط مهمة: ' + notes + '\n' : ''}${cvExtract ? 'بيانات من الـ CV المرفق:\n' + cvExtract : ''}` }
        ];
        try { renderResult(box, await callGroqConversation(messages), 'cover-letter.txt'); }
        catch (e) { box.innerHTML = errorHTML("تعذرت صياغة الرسالة، حاول تاني."); }
    }

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
                ? [{ role: "system", content: `أنت مدرب مقابلات. اكتب نص قصير واقعي (50-80 كلمة) بأسلوب طبيعي ومهذب، مناسب كتمرين "تقديم نفسك" أو "تعريف بمشروع/خبرة" قدام كاميرا مقابلة${topic ? ' لوظيفة أو مجال: ' + topic : ''}. النص يبقى جاهز يتقرأ بصوت عالٍ بوضوح وثقة، من غير أي رموز أو تعليقات، النص بس.${aiToolLangDirective()}` },
                    { role: "user", content: topic ? `الموضوع: ${topic}` : "نص عام لتقديم النفس في مقابلة عمل" }]
                : [{ role: "system", content: `أنت مدير توظيف. اسأل سؤال مقابلة واحد فقط، واقعي ومحدد${topic ? ' لوظيفة: ' + topic : ''}، بصيغة مباشرة وقصيرة (سطر أو سطرين).${aiToolLangDirective()}` },
                    { role: "user", content: topic ? `وظيفة: ${topic}` : "سؤال مقابلة عام" }];
            const result = await callGroqConversation(messages);
            videoMockCurrentPrompt = result.trim();
            videoMockCurrentPromptMode = mode;
            textEl.innerHTML = `<p class="text-[10px] text-slate-500 mb-1">${mode === 'script' ? 'اقرأ النص ده بوضوح قدام الكاميرا:' : 'رُد على السؤال ده بصوتك قدام الكاميرا:'}</p><p class="font-bold text-slate-100">${escapeHtml(videoMockCurrentPrompt)}</p>`;
        } catch (e) {
            textEl.innerHTML = errorHTML('تعذر التجهيز، جرب تاني.');
        }
    }

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
                const det = await faceapi.detectSingleFace(vid, new faceapi.TinyFaceDetectorOptions({ inputSize: 512, scoreThreshold: 0.5 })).withFaceExpressions();
                const confidentDet = det && det.detection && det.detection.score >= 0.6 ? det : null;
                videoMockAnalysisSamples.push(confidentDet ? { expressions: confidentDet.expressions, box: confidentDet.detection.box, videoW: vid.videoWidth, videoH: vid.videoHeight } : { expressions: null });
            } catch (e) { /* تجاهل عينة فشلت وكمّل اللي بعدها */ }
        }, 700);
    }
    function stopVideoMockAnalysisSampling() {
        if (videoMockAnalysisTimer) { clearInterval(videoMockAnalysisTimer); videoMockAnalysisTimer = null; }
        if (videoMockAudioCtx) { try { videoMockAudioCtx.close(); } catch (e) {} videoMockAudioCtx = null; videoMockAnalyser = null; }
    }
    function summarizeFaceExpressions(samples) {
        const valid = samples.filter(s => s.expressions);
        if (valid.length < 3) return null;
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
            try { transcript = await transcribeAudioBlob(audioBlob, 'mock-interview-audio.webm', false, 'interview'); } catch (e) { console.warn('تعذر تفريغ صوت المقطع:', e); }
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
                { role: "system", content: `أنت مدرب مقابلات عمل خبير. هتاخد بيانات حقيقية اتقاست فعلياً (مش متخيلة) من تحليل فيديو المستخدم: نسبة ظهور وجهه وتمركزه قدام الكاميرا، توزيع تعبيرات الوجه المكتشفة بنموذج ذكاء اصطناعي حقيقي (face-api.js)، تذبذب شدة الصوت من المايك، وسرعة الكلام وكلمات الحشو من تفريغ صوتي حقيقي (Whisper). اكتب تقرير أداء قصير وصريح بناءً على الأرقام دي فقط، من غير ما تخترع أي تفصيلة مش موجودة في البيانات المرسلة، يغطي: 1) التواصل البصري مع الكاميرا 2) تعبيرات الوجه الظاهرة 3) نبرة الصوت وسرعة الكلام وكلمات الحشو.${contentInstruction} 4) 3 نصايح عملية قصيرة للتحسين. لو جزء من البيانات مش متاح قول كده صراحة بدل ما تتجاهله أو تخترعه. بدون رموز markdown.${aiToolLangDirective()}` },
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
        if (videoMockStream) {
            try { videoMockStream.getTracks().forEach(t => t.stop()); } catch (e) {}
            videoMockStream = null;
        }
        try {
            const supportedConstraints = (navigator.mediaDevices.getSupportedConstraints && navigator.mediaDevices.getSupportedConstraints()) || {};
            const videoConstraints = {
                width: { ideal: 1280 }, height: { ideal: 720 },
                facingMode: { ideal: 'user' },
                frameRate: { ideal: 30, max: 30 }
            };
            if (supportedConstraints.resizeMode) videoConstraints.resizeMode = 'none';
            if (supportedConstraints.faceFraming) videoConstraints.faceFraming = false;
            if (supportedConstraints.backgroundBlur) videoConstraints.backgroundBlur = false;
            if (supportedConstraints.backgroundReplacement) videoConstraints.backgroundReplacement = 'none';
            if (supportedConstraints.eyeGazeCorrection) videoConstraints.eyeGazeCorrection = false;
            if (supportedConstraints.pan) videoConstraints.pan = false;
            if (supportedConstraints.tilt) videoConstraints.tilt = false;
            if (supportedConstraints.zoom) videoConstraints.zoom = false;

            videoMockStream = await navigator.mediaDevices.getUserMedia({
                video: videoConstraints,
                audio: { autoGainControl: false }
            });

            try {
                const [videoTrack] = videoMockStream.getVideoTracks();
                const caps = videoTrack && videoTrack.getCapabilities ? videoTrack.getCapabilities() : null;
                if (caps) {
                    const resetConstraints = {};
                    if (caps.zoom) resetConstraints.zoom = caps.zoom.min ?? 1;
                    if (caps.pan) resetConstraints.pan = caps.pan.min ?? 0;
                    if (caps.tilt) resetConstraints.tilt = caps.tilt.min ?? 0;
                    if (Object.keys(resetConstraints).length) await videoTrack.applyConstraints({ advanced: [resetConstraints] });
                }
            } catch (e) { console.warn('تعذر تصفير zoom/pan/tilt التلقائي على الكاميرا:', e); }

            const vid = document.getElementById('video-mock-preview');
            vid.classList.remove('video-mirrored');
            vid.style.transform = 'none';
            vid.srcObject = videoMockStream; vid.classList.remove('hidden');
            const tryPlay = () => vid.play().catch(() => {});
            tryPlay();
            vid.onloadedmetadata = tryPlay;
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
        vid.onloadedmetadata = null;
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
            { role: "system", content: `أنت مسؤول توظيف (HR) في شركة حقيقية بتكتب إيميل فعلي لمتقدم على وظيفة "${role}". نوع الإيميل: ${type}. نبرة الإيميل: ${tone}. اكتب إيميل واقعي 100% زي اللي بيتبعت فعلاً: يبدأ باسم الشركة (اختراع اسم مناسب) وتحية باسم المتقدم بشكل عام، فيه توقيت/تفاصيل محددة (يوم وساعة مثلاً، أو مدة الفيديو كول)، وسؤال واحد واضح محتاج المتقدم يرد عليه بقرار (تأكيد/اقتراح بديل/رقم). اختم بتوقيع باسم ومسمى وظيفي وهمي واقعي (مثلاً "سارة أحمد - مسؤولة التوظيف"). بدون رموز markdown، وبدون أي شرح أو تعليق خارج الإيميل نفسه.${aiToolLangDirective()}` },
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
            { role: "system", content: `أنت خبير مراسلات مهنية صريح. قيّم رد المتقدم على إيميل الشركة بالترتيب ده: 1) إجابة مباشرة بـ"جاوب على المطلوب: نعم/لأ جزئياً/لأ" مع سبب سطر واحد 2) تقييم الاحترافية والوضوح واللباقة من 10 مع السبب 3) أي أخطاء صياغة أو نبرة غير مناسبة (زي رد جاف جداً أو غير رسمي) بأمثلة من نص الرد نفسه 4) نسخة مُحسّنة كاملة وجاهزة للنسخ من الرد، حتى لو الرد الأصلي كويس، تكون فعلاً أفضل نسخة ممكنة منه. بدون رموز markdown.${aiToolLangDirective()}` },
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
            { role: "system", content: `أنت مستشار توظيف بيدرّب المتقدمين على التفاوض. جهّز 6-8 أسئلة متابعة حقيقية لوظيفة "${role}" تحديداً (مش عامة)، مقسّمة لمجموعات واضحة بعنوان قبل كل مجموعة: "أسئلة عن الراتب الأساسي"، "أسئلة عن المزايا" (تأمين صحي، بونص، زيادات سنوية)، "أسئلة عن بيئة العمل" (ساعات، عمل عن بعد/هايبرد، إجازات). كل سؤال بصياغة لبقة ومهنية جاهزة يقولها بالظبط، ومعاه سطر واحد يوضح "الوقت الصح تسأله فيه" (قبل العرض/بعد العرض/في نهاية المقابلة). بدون رموز markdown.${aiToolLangDirective()}` },
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
            { role: "system", content: `أنت مستشار صورة مهنية بتقدّم نصايح ملموسة مش عامة. اكتب نصايح للبس والمظهر لمقابلة في البيئة دي: "${sector}". ${genderInstruction} بالترتيب: 1) قطع الملابس بالتحديد (نوع القميص/البنطلون/الجاكيت أو الفستان/البدلة حسب الحالة) والألوان المحددة الأنسب 2) 3 حاجات ممنوع تعملها في المظهر في البيئة دي بالذات 3) لمسة واحدة بسيطة (اكسسوار/تفصيلة) بتدي انطباع احترافي زيادة 4) نصيحة واحدة سريعة عن تسريحة الشعر/العناية الشخصية المناسبة للبيئة دي. لو البيئة "مقابلة أونلاين"، ركّز كمان على إيه اللي بيبان في الكاميرا بس (من نص الجسم لفوق) وخلفية الكاميرا المناسبة. بدون رموز markdown.${aiToolLangDirective()}` },
            { role: "user", content: `البيئة: ${sector}` }
        ];
        try { renderResult(box, await callGroqConversation(messages), 'dress-tips.txt'); }
        catch (e) { box.innerHTML = errorHTML("تعذر التجهيز، حاول تاني."); }
    }

    async function fetchLiveSalaryContext(role, exp, region) {
        const query = `متوسط الراتب لوظيفة ${role}${exp ? ' بخبرة ' + exp : ''} في ${region} ${new Date().getFullYear()}`;
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 9000);
        try {
            const res = await fetch(`https://Web Search Service/${encodeURIComponent(query)}`, {
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
        const richInstructions = `أنت مستشار رواتب خبير وعملي، بيتكلم بأسلوب واضح وصريح زي حد فاهم السوق فعلاً مش بيقرا من كتاب. جاوب بالشكل ده بالظبط (بدون رموز markdown، فقرات قصيرة مفصولة بسطر فاضي):

1) "نظريًا/عالميًا": إيه الراتب المتوقع لنفس الوظيفة والخبرة دي كمعيار عام (لو كانت من شركة عالمية أو حسب المسمى الوظيفي نفسه).
2) "في الواقع بمنطقة ${region}": وضّح إن الرقم النظري ده غالبًا مختلف عن اللي بيحصل فعليًا في السوق المحلي، وقدّر نطاق واقعي (من - إلى) بعملة المنطقة.
3) "الفرق حسب المكان بالظبط": لو المنطقة دي فيها تفاوت معروف بين المدن/المحافظات الكبيرة والصغيرة (مثلاً العاصمة/المدن الكبرى مقابل باقي المناطق)، وضّح الفرق ده بالتحديد بأرقام تقريبية لكل جزء، مش تعميم.
4) "أعلى من كده وأقل من كده": اذكر إن في ناس بتقبض أعلى بكتير من النطاق ده (وليه: شركات أجنبية/عملاء أجانب/شركة كبيرة/مهارة نادرة) وناس بتقبض أقل بكتير (وليه: شركة ناشئة صغيرة/بداية مسار/سوق محلي ضعيف)، بشكل واقعي مش نظري.
5) "وقت وطريقة الطرح": وقت مناسب لطرح موضوع الراتب في المقابلة، ونصيحة تفاوض عملية واحدة تتقال بالظبط.

خلّي كل قسم بعنوان قصير واضح زي ما فوق، وخلّي الأرقام تقريبية موضّحة إنها مش رسمية 100%.${aiToolLangDirective()}`;
        const messages = liveContext ? [
            { role: "system", content: `${richInstructions}\n\nمعاك تحت نتائج بحث حية اتجابت دلوقتي (${lookupTime.toLocaleString('ar-EG')}) عن سوق العمل لنفس الوظيفة — اعتمد عليها بالدرجة الأولى في الأرقام، واستخدم معرفتك العامة لسد أي فجوة أو لشرح فروق المحافظات/المدن اللي مش موجودة في نتائج البحث.\n\nنتائج البحث الحية:\n${liveContext}` },
            { role: "user", content: userMsg }
        ] : [
            { role: "system", content: `${richInstructions}\n\nتعذر الوصول لبيانات بحث حية دلوقتي، فاعتمد بالكامل على معرفتك العامة بسوق العمل (مش بيانات لحظية دقيقة).` },
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

    function loadProgressHistory() { return JSON.parse(localStorage.getItem('yusr_progress_history') || '[]'); }
    function saveProgressHistory(list) { localStorage.setItem('yusr_progress_history', JSON.stringify(list)); }
    function addProgressEntry(role, reportText, extra = {}) {
        const list = loadProgressHistory();
        const scoreMatch = reportText.match(/(\d{1,3})\s*(?:\/\s*100|من\s*100)/);
        let score = scoreMatch ? parseInt(scoreMatch[1], 10) : null;
        if (score !== null && (score < 0 || score > 100)) score = null;
        list.unshift({
            date: new Date().toISOString(),
            role: role || 'وظيفة غير محددة',
            score,
            report: reportText,
            transcript: Array.isArray(extra.transcript) ? extra.transcript : null,
            nationality: extra.nationality || null,
            interviewerName: extra.interviewerName || null
        });
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
        if (!list.length) { container.innerHTML = `<p class="text-xs text-slate-500 text-center py-6">لسه معملتش أي جلسة تدريب متحفظة. روح لصفحة "مقابلة تدريبية صوتية" واعمل "إنهاء المقابلة" أو "تقييم الأداء" عشان تتسجل هنا في الأرشيف.</p>`; return; }
        container.innerHTML = list.map((e, i) => {
            const meta = [e.interviewerName ? `المحاور: ${escapeHtml(e.interviewerName)}` : '', e.nationality ? escapeHtml(e.nationality) : ''].filter(Boolean).join(' · ');
            const transcriptHtml = Array.isArray(e.transcript) && e.transcript.length
                ? `<div class="mt-2.5 pt-2.5 border-t border-[var(--border)]">
                        <p class="text-[10.5px] font-bold text-slate-400 mb-1.5"><i class="fa-solid fa-comments"></i> نص المحادثة كاملاً</p>
                        <div class="space-y-1.5 max-h-[220px] overflow-y-auto pr-1">
                            ${e.transcript.map(m => `<p class="text-[11px] leading-relaxed"><span class="font-bold ${m.role === 'assistant' ? 'text-[var(--accent-strong)]' : 'text-slate-300'}">${m.role === 'assistant' ? escapeHtml(e.interviewerName || 'المحاور') : 'المتقدم'}:</span> ${escapeHtml(m.content)}</p>`).join('')}
                        </div>
                   </div>`
                : '';
            return `
            <div class="panel-2 rounded-xl p-3">
                <div class="flex justify-between items-center gap-2 cursor-pointer" data-x-onclick="hToggleProgressDetail" data-idx="${i}">
                    <div class="flex items-center gap-2 min-w-0">
                        <i class="fa-solid fa-box-archive text-[10px] text-slate-500 shrink-0" title="محفوظة بشكل دائم"></i>
                        <span class="text-[10px] text-slate-500 shrink-0">${new Date(e.date).toLocaleDateString('ar-EG')}</span>
                        <span class="text-xs font-bold text-slate-200 truncate">${escapeHtml(e.role)}</span>
                    </div>
                    <div class="flex items-center gap-2 shrink-0">
                        ${e.score !== null ? `<span class="chip">${e.score}/100</span>` : ''}
                        <i class="fa-solid fa-chevron-down text-[10px] text-slate-500"></i>
                    </div>
                </div>
                <div id="progress-detail-${i}" class="hidden mt-2 pt-2 border-t border-[var(--border)] text-xs leading-relaxed">
                    ${meta ? `<p class="text-[10.5px] text-slate-500 mb-1.5">${meta}</p>` : ''}
                    ${formatReportText(e.report)}
                    ${transcriptHtml}
                </div>
            </div>
        `; }).join('');
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
            { role: "system", content: `أنت مدرب مقابلات. قارن بين تقريري أداء نفس الشخص في جلستين تدريبيتين مختلفتين، ووضّح: هل تحسّن أو تراجع وفي إيه بالتحديد، وإيه اللي لسه محتاج شغل عليه. بدون رموز markdown.${aiToolLangDirective()}` },
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
            { role: "system", content: `أنت مدرب مقابلات محترف. لخّص تقدم شخص عبر مجموعة جلسات تدريب مقابلات مرفقة في تقرير مختصر واحد: الاتجاه العام (تحسّن/ثبات/تراجع)، أكتر نقطة اتحسنت، أكتر نقطة لسه محتاجة شغل، ونصيحة واحدة للجلسة الجاية. بدون رموز markdown.${aiToolLangDirective()}` },
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

    async function transcribeAudioBlob(blob, filename, returnFullData, context) {
        const form = new FormData();
        form.append('file', blob, filename || 'audio.webm');
        form.append('model', 'whisper-large-v3');
        form.append('temperature', '0');
        form.append('response_format', 'verbose_json');
        const langSelEl = document.getElementById('transcribe-source-lang');
        const langSel = langSelEl ? langSelEl.value.split('-')[0] : ((currentAppLang || 'ar').split('-')[0]);
        if (langSel) form.append('language', langSel);
        const prompt = context === 'interview'
            ? 'نص مفرّغ بدقة عالية جداً من مقابلة عمل أو تدريب مهني، بعلامات ترقيم صحيحة وتقسيم فقرات منطقي، حتى لو في ضوضاء خلفية أو تلعثم بسيط أو تسارع في الكلام. حافظ على المصطلحات المهنية والوظيفية زي ما اتقالت بالظبط.'
            : 'نص مفرّغ بدقة عالية جداً، بعلامات ترقيم صحيحة وتقسيم فقرات منطقي، حتى لو في ضوضاء خلفية أو تلعثم بسيط أو تسارع في الكلام. اكتب الكلام بالظبط زي ما اتقال من غير أي افتراض عن موضوعه.';
        form.append('prompt', prompt);
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
            status.innerText = uiStr('fileTooLarge50mb');
            event.target.value = '';
            return;
        }
        status.innerText = uiStr('uploadingTranscribing') + ' ' + file.name + ' …';
        if (!checkDeviceTrial()) { status.innerText = ''; return; }
        try {
            const text = await transcribeAudioBlob(file, file.name, false, 'general');
            document.getElementById('transcribe-raw').value = text;
            status.innerText = uiStr('transcribedSuccess');
            incrementDeviceUsage();
        } catch (e) {
            console.warn('Whisper transcription failed:', e);
            status.innerText = uiStr('transcriptionFailed');
        }
    }

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

    function loadScriptOnce(src) {
        return new Promise((resolve, reject) => {
            if (document.querySelector(`script[src="${src}"]`)) return resolve();
            const s = document.createElement('script');
            s.src = src; s.onload = () => resolve(); s.onerror = () => reject(new Error('تعذر تحميل المكتبة المطلوبة.'));
            document.head.appendChild(s);
        });
    }

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
            { role: "system", content: `أنت كوتش تقديم ذاتي (Personal Pitch / Elevator Pitch) محترف جداً. اكتب نص تقديم ذاتي بصيغة المتكلم (أنا)، مكتوب عشان يتقال بصوت عادي غير مستعجل خلال حوالي 30 ثانية بالظبط (يعني تقريباً 75-90 كلمة مش أكتر ولا أقل بشكل واضح). النص يشمل: مقدمة قصيرة عن مين هو/هي، أهم خبرة أو مهارة تخدم الهدف المطلوب، وخاتمة قوية تربطه بالهدف من التقديم. الأسلوب: ${tone}. الهدف من التقديم: ${purpose}. اكتب فقرة واحدة متصلة (من غير عناوين أو نقاط أو رموز markdown)، وفي آخر السطر ضيف على سطر منفصل بس: "عدد الكلمات التقريبي: X كلمة".${aiToolLangDirective()}` },
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
            prefetchTtsAudio(lastPitchText);
        } catch (e) { box.innerHTML = errorHTML('تعذر توليد النص، حاول تاني.'); }
    }
    function previewPitchAudio() {
        if (!lastPitchText) return;
        speakText(lastPitchText);
    }

    async function screenshotElement(elId, filename) {
        const el = document.getElementById(elId);
        if (!el || !el.childNodes.length) { showToast('مفيش محادثة عشان تتصور لسه.', 'error'); return; }
        if (typeof html2canvas === 'undefined') { showToast('تعذر تحميل أداة التصوير، تأكد من الاتصال بالإنترنت وحاول تاني.', 'error'); return; }
        const prevHeight = el.style.height, prevMaxHeight = el.style.maxHeight, prevOverflow = el.style.overflow;
        el.style.height = 'auto'; el.style.maxHeight = 'none'; el.style.overflow = 'visible';
        try {
            let canvas = await html2canvas(el, {
                backgroundColor: '#20252c',
                scale: Math.min(2, window.devicePixelRatio || 1.5),
                useCORS: true
            });
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

    function spinnerHTML(msg) { return `<div class="text-xs text-slate-400 flex items-center gap-2 justify-center py-8"><i class="fa-solid fa-spinner fa-spin"></i> ${msg}</div>`; }
    function errorHTML(msg) { return `<div class="text-xs text-red-400 text-center py-8">${msg}</div>`; }
    function formatReportText(text) {
        const escaped = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        const bold = escaped.replace(/\*\*(.+?)\*\*/g, '<b class="text-slate-100">$1</b>');
        return bold.split('\n').filter(l => l.trim().length > 0).map(l => `<p class="mb-2">${l}</p>`).join('');
    }
    function handleKeyPress(e) { if (e.key === 'Enter') sendUserAnswer(); }
    function stripArabicDiacritics(str) {
        return String(str == null ? '' : str).replace(/[\u0610-\u061A\u064B-\u065F\u06D6-\u06ED\u0670]/g, '');
    }
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

    initTheme();
    initPwaInstall();
    showApkPromoIfEligible();
    checkDeviceTrial();
    updateAccountChip();
    applyI18n();
    checkTermsGate();
    updateVoiceGenderButtons();
    checkInterviewResumeBanner();
    checkAndFireReminderNotification();
    setInterval(checkAndFireReminderNotification, 60 * 1000);

// ==== Moved from inline <script> in index.html (for CSP compliance) ====
(function () {
    // ============ تسجيل Service Worker (يخلي الموقع نفسه يفتح أوفلاين) ============
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js').catch(err => {
                console.warn('تعذر تسجيل Service Worker (الموقع هيفضل شغال أونلاين عادي):', err);
            });
        });
        // لو نسخة SW جديدة اتفعّلت وإحنا فاتحين الصفحة دلوقتي، اعمل ريفريش
        // تلقائي مرة واحدة عشان نشوف آخر تحديث فورًا من غير ما نحتاج نقفل
        // التاب ونفتحه تاني.
        navigator.serviceWorker.addEventListener('message', (event) => {
            if (event.data && event.data.type === 'YUSR_SW_UPDATED' && !sessionStorage.getItem('yusr_sw_reloaded')) {
                sessionStorage.setItem('yusr_sw_reloaded', '1');
                window.location.reload();
            }
        });
    }

    // ============ تنبيه بسيط لما النت يقطع/يرجع ============
    // مش بيمنع استخدام الموقع، بس بيوضّح للمستخدم إن أدوات الذكاء الاصطناعي
    // مش هتشتغل دلوقتي بدل ما ياخد رسالة خطأ غامضة أو الأداة تعلّق.
    window.addEventListener('offline', () => {
        if (typeof showToast === 'function') {
            showToast('مفيش اتصال بالإنترنت دلوقتي. تقدر تتصفح الموقع، بس أدوات الذكاء الاصطناعي محتاجة نت.', 'error');
        }
    });
    window.addEventListener('online', () => {
        if (typeof showToast === 'function') {
            showToast('النت رجع تاني، تقدر تكمل عادي.', 'success');
        }
    });
})();
