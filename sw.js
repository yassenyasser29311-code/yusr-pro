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
// عشان أي تحديث جديد في app.js/styles.css يوصل فعلاً للمستخدمين
// (ومتفضلش نسخة قديمة متخزنة للأبد)، غيّر رقم CACHE_VERSION في كل
// مرة تنشر فيها تحديث حقيقي على الكود.
// ================================================================

const CACHE_VERSION = "v3";
const CACHE_NAME = `yusr-pro-shell-${CACHE_VERSION}`;

// ملفات "هيكل" الموقع بتاعتك (نفس الدومين) — لو غيّرت اسم أو رقم نسخة
// أي ملف من دول حدّث القائمة دي.
// ⚠️ لازم رقم النسخة هنا يطابق بالظبط رقم النسخة في وسم <script src="app.js?v=..."> جوه index.html.
const SAME_ORIGIN_FILES = [
  "/",
  "/index.html",
  "/app.js?v=2",
  "/styles.css?v=1",
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

  // Cache-first مع تحديث في الخلفية (stale-while-revalidate): يفتح فورًا من
  // الكاش لو موجود، وفي نفس الوقت يجيب نسخة جديدة من النت ويحدّث الكاش بيها
  // للمرة الجاية — كده الموقع سريع دايمًا لكن برضه بيتحدّث لوحده.
  event.respondWith(
    caches.open(CACHE_NAME).then((cache) =>
      cache.match(req).then((cached) => {
        const networkFetch = fetch(req, req.mode === "no-cors" ? req : undefined)
          .then((networkRes) => {
            // networkRes.ok مبيبقاش true للردود الـ "opaque" (مكتبات CDN من
            // غير CORS)، فبنخزنها برضه لو النوع opaque لأننا منقدرش نتأكد
            // من الـ status بتاعها أصلاً.
            if (networkRes && (networkRes.ok || networkRes.type === "opaque")) {
              cache.put(req, networkRes.clone());
            }
            return networkRes;
          })
          .catch(() => null);
        // لو عندنا نسخة مخزنة، ارجعها فورًا (وسيب التحديث يحصل في الخلفية).
        // لو مفيش نسخة مخزنة (أول زيارة)، استنى النت.
        return cached || networkFetch || new Response(
          "الموقع محتاج اتصال بالإنترنت أول مرة تفتحه فيها.",
          { status: 503, headers: { "Content-Type": "text/plain; charset=utf-8" } }
        );
      })
    )
  );
});
