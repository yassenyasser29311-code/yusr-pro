// ================================================================
//  YUSR Pro — Service Worker (تخزين هيكل الموقع عشان يفتح أوفلاين)
// ================================================================
// اللي بيعمله ده: بيحفظ نسخة من صفحة الموقع (HTML/CSS/JS) + المكتبات
// الخارجية الأساسية (Tailwind، Firebase) في تخزين المتصفح أول مرة تفتح
// فيها الموقع وانت متصل بالنت. المرة الجاية (حتى لو معاك نت بطيء أو واقع)،
// الموقع هيفتح فورًا من النسخة المحفوظة دي بدل ما يبعت طلبات للنت وتفشل.
//
// ملحوظة مهمة وصريحة: ده بيخلي *واجهة* الموقع تفتح أوفلاين بس (الشكل،
// الأزرار، شاشة تسجيل الدخول تتخبي صح، ...). أدوات الذكاء الاصطناعي
// (المقابلة، التلخيص، التفريغ الصوتي، الصوت) لازم اتصال حقيقي بالنت وقت
// الاستخدام لأنها بتتصل بسيرفر خارجي (Groq/edge-tts)، وده مستحيل تقنيًا
// يشتغل من غير نت أيًا كان الكود. لو حاولت تستخدمهم أوفلاين هتاخد رسالة
// واضحة "مفيش اتصال بالإنترنت" بدل ما الأداة تعلّق أو تفشل بصمت.
//
// ملاحظة: ملفات الموقع نفسها (index.html/app.js/styles.css) بقت
// "Network-first" تحت في الـ fetch handler - يعني بتتجاب من النت
// كل مرة فورًا، فأي تحديث بترفعه يظهر للمستخدمين على طول من غير ما
// تحتاج تزوّد رقم CACHE_VERSION يدويًا في كل نشر. غيّره فقط لو عايز
// تجبر تنظيف الكاش القديم بالكامل (نادر).
//
// ============ فيكس (نقطة 9): عدم تزامن رقم نسخة app.js/styles.css ============
// المشكلة الأصلية: SAME_ORIGIN_FILES تحت فيها أرقام نسخة (?v=) لازم تتحدّث
// يدويًا يدًا بيد مع نفس الأرقام في وسوم <script>/<link> جوه index.html.
// لو حصل نسيان (زي ما حصل فعلاً: هنا كان مكتوب app.js?v=6 بينما index.html
// بيطلب v=7)، أول تحميل أوفلاين كان ممكن يرجّع 503 "محتاج نت" بالغلط لأن
// cache.match() الافتراضي بيقارن الـ query string كمان، فمش بيلاقي تطابق
// مع نسخة التخزين المؤقت القديمة. الحل الدائم: استخدام {ignoreSearch:true}
// في أي cache.match() لملفاتنا (تحت في الـ fetch handler)، فبقينا نتجاهل
// رقم النسخة في المطابقة ونعتمد بس على المسار (pathname). يعني حتى لو نسيت
// تحدّث الرقم هنا تاني، النسخة المخزّنة (أيًا كان رقمها) هتتلاقى وتتقدّم
// للمستخدم أوفلاين بدل ما يفشل الطلب بالكامل. الأرقام تحت لسه بنحدّثها
// كـ best practice (يخلي أول تخزين وقت التثبيت يجيب أحدث نسخة من النت)
// بس مش شرط تتظبط يدويًا بنفس الدقة زي الأول.
// ================================================================

const CACHE_VERSION = "v11";
const CACHE_NAME = `yusr-pro-shell-${CACHE_VERSION}`;

// ملفات "هيكل" الموقع بتاعتك (نفس الدومين) — لو غيّرت اسم أو رقم نسخة
// أي ملف من دول حدّث القائمة دي.
// تنبيه: يُفضّل (مش شرط بعد فيكس نقطة 9 فوق) إن رقم النسخة هنا يطابق رقم
// النسخة في وسوم تحميل app.js/styles.css جوه index.html، عشان أول تخزين
// وقت التثبيت يجيب أحدث نسخة فورًا. لو اتنسي تحديثه، المطابقة وقت offline
// هتفضل شغالة برضه بفضل {ignoreSearch:true} في الـ fetch handler تحت.
const SAME_ORIGIN_FILES = [
  "/",
  "/index.html",
  "/app.js?v=12",
  "/styles.css?v=7",
  "/site.webmanifest",
  "/favicon.ico",
  "/favicon-16x16.png",
  "/favicon-32x32.png",
  "/apple-touch-icon.png",
  "/android-chrome-192x192.png",
  "/android-chrome-512x512.png",
  "/og-image.png",
];

// مكتبات خارجية (CDN) لازمة عشان الموقع يبان صح أوفلاين. دي روابط
// من مواقع تانية فبنطلبها بطريقة "no-cors" (منقدرش نتأكد من status
// بتاعها بدقة، بس بنخزنها زي ما هي عشان تشتغل).
const CDN_FILES = [
  "https://cdn.tailwindcss.com",
  "https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js",
  "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth-compat.js",
  "https://www.gstatic.com/firebasejs/10.13.2/firebase-database-compat.js",
  "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      Promise.all([
        // ملفاتنا احنا: fetch عادي (cors) عشان نقدر نتأكد إنها اتحمّلت صح
        ...SAME_ORIGIN_FILES.map((url) =>
          fetch(url).then((res) => {
            if (res && res.ok) return cache.put(url, res);
          }).catch((err) => console.warn("SW: تعذر تخزين", url, err))
        ),
        // مكتبات الـ CDN: لازم no-cors عشان الطلب ينجح أصلاً حتى لو
        // مفيش CORS headers من المزوّد، والرد بيبقى "opaque" (منقدرش
        // نشوف الـ status بتاعه، بس نخزنه على أساس إنه نجح).
        ...CDN_FILES.map((url) =>
          fetch(url, { mode: "no-cors" }).then((res) => {
            if (res) return cache.put(url, res);
          }).catch((err) => console.warn("SW: تعذر تخزين CDN", url, err))
        ),
      ])
    ).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key.startsWith("yusr-pro-shell-") && key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    ).then(() => self.clients.claim())
     .then(() =>
        // نبلّغ أي تاب فاتح فعلًا إن نسخة جديدة اتفعّلت، عشان يعمل ريفريش
        // لوحده ويشوف التحديث على طول من غير ما يحتاج يقفل ويفتح تاني.
        self.clients.matchAll({ type: "window" }).then((clients) =>
          clients.forEach((client) => client.postMessage({ type: "YUSR_SW_UPDATED" }))
        )
     )
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;

  // منتدخّلش خالص في أي حاجة مش GET (زي طلبات POST لـ /groqChat على الووركر) —
  // دي لازم تروح للسيرفر مباشرة كل مرة، ومينفعش تتخزن أو تتجاوب من الكاش.
  if (req.method !== "GET") return;

  const url = new URL(req.url);

  // منتدخّلش في طلبات الووركر (API) خالص — لازم تعدي على النت الحقيقي دايمًا
  // عشان تبقى نتيجة الذكاء الاصطناعي/الباقة/الرصيد صحيحة ومحدّثة.
  if (url.hostname.endsWith("workers.dev") || url.pathname.startsWith("/groqChat") ||
      url.pathname.startsWith("/groqTranscribe") || url.pathname.startsWith("/edgeTtsSpeak")) {
    return;
  }

  // أي ملف على نفس الدومين بتاعك (HTML/JS/CSS/صور/أيقونات/manifest...) —
  // مش بس اللي في القايمة فوق. القايمة فوق دلوقتي بتستخدم للـ pre-cache وقت
  // "install" بس (عشان تشتغل أوفلاين من أول زيارة)، أما التحديث نفسه بقى
  // Network-first لأي حاجة same-origin تلقائيًا، فمحتاجش تحدّث الملف ده أو
  // تزوّد رقم نسخة يدويًا كل مرة عشان صورة أو أيقونة جديدة تظهر — بمجرد
  // الرفع (deploy)، أي زيارة جديدة هتجيب النسخة الجديدة على طول.
  const isOwnFile = url.origin === self.location.origin;

  if (isOwnFile) {
    // Network-first لأي ملف same-origin (index.html / app.js / styles.css /
    // الصور / الأيقونات / site.webmanifest): بنجيب من النت الحقيقي كل مرة
    // أول حاجة، عشان أي تحديث بترفعه يوصل فورًا لأي حد بيفتح الموقع.
    // الكاش هنا مجرد خطة بديلة لو النت واقع بس.
    event.respondWith(
      fetch(req, { cache: "no-store" })
        .then((networkRes) => {
          if (networkRes && networkRes.ok) {
            caches.open(CACHE_NAME).then((cache) => cache.put(req, networkRes.clone()));
          }
          return networkRes;
        })
        .catch(() =>
          caches.open(CACHE_NAME).then((cache) =>
            // ignoreSearch:true (فيكس نقطة 9): بنطابق بالمسار بس من غير ما نتقيّد
            // برقم النسخة (?v=) بالظبط - عشان لو رقم النسخة في السطر فوق (SAME_ORIGIN_FILES)
            // اتنسى تحديثه، النسخة المخزّنة القديمة تتلاقى برضه بدل ما ترجع 503.
            cache.match(req, { ignoreSearch: true }).then(
              (cached) =>
                cached ||
                new Response(
                  "الموقع محتاج اتصال بالإنترنت أول مرة تفتحه فيها.",
                  { status: 503, headers: { "Content-Type": "text/plain; charset=utf-8" } }
                )
            )
          )
        )
    );
    return;
  }

  // Cache-first مع تحديث في الخلفية (stale-while-revalidate) - للمكتبات
  // الخارجية بس (CDN) اللي بتتغيّر نادرًا، فمفيش داعي نستنى النت كل مرة.
  event.respondWith(
    caches.open(CACHE_NAME).then((cache) =>
      cache.match(req).then((cached) => {
        const networkFetch = fetch(req, req.mode === "no-cors" ? req : undefined)
          .then((networkRes) => {
            if (networkRes && (networkRes.ok || networkRes.type === "opaque")) {
              cache.put(req, networkRes.clone());
            }
            return networkRes;
          })
          .catch(() => null);
        return cached || networkFetch || new Response(
          "الموقع محتاج اتصال بالإنترنت أول مرة تفتحه فيها.",
          { status: 503, headers: { "Content-Type": "text/plain; charset=utf-8" } }
        );
      })
    )
  );
});
