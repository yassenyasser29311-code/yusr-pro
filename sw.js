// ================================================================
//  YUSR Pro — Service Worker (تخزين هيكل الموقع عشان يفتح أوفلاين)
// ================================================================
// اللي بيعمله ده: بيحفظ نسخة من صفحة الموقع (HTML/CSS/JS) في تخزين
// المتصفح (Cache Storage) أول مرة تفتح فيها الموقع وانت متصل بالنت.
// المرة الجاية (حتى لو معاك نت أو النت بطيء/واقع)، الموقع هيفتح فوراً
// من النسخة المحفوظة دي بدل ما تشوف صفحة "لا يوجد اتصال" من المتصفح.
//
// ملحوظة مهمة وصريحة: ده بيخلي *واجهة* الموقع تفتح أوفلاين بس.
// أدوات الذكاء الاصطناعي (المقابلة، التلخيص، التفريغ الصوتي، ...)
// لازم اتصال حقيقي بالنت وقت الاستخدام لأنها بتتصل بسيرفر خارجي
// (Groq)، وده مستحيل تقنيًا يشتغل من غير نت أيًا كان الكود. اللي
// بيحصل بدل كده: لو حاولت تستخدم أداة ذكاء اصطناعي وانت أوفلاين،
// هتاخد رسالة واضحة "مفيش اتصال بالإنترنت" بدل ما الأداة تعلّق.
//
// عشان أي تحديث جديد في app.js/styles.css يوصل فعلاً للمستخدمين
// (ومتفضلش نسخة قديمة متخزنة للأبد)، غيّر رقم CACHE_VERSION في كل
// مرة تنشر فيها تحديث حقيقي على الكود.
// ================================================================

const CACHE_VERSION = "v1";
const CACHE_NAME = `yusr-pro-shell-${CACHE_VERSION}`;

// أهم ملفات "هيكل" الموقع اللي المفروض تتخزن عشان يفتح أوفلاين.
// ملحوظة: لو غيّرت اسم أي ملف من دول أو ضفت ملف جديد أساسي، حدّث القائمة دي.
const APP_SHELL_FILES = [
  "/",
  "/index.html",
  "/app.js?v=1",
  "/styles.css?v=1",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      // addAll بتفشل كلها لو ملف واحد فشل، فبنحاول كل ملف لوحده
      // عشان فشل ملف واحد (زي CDN خارجي بطيء) ميوقفش تخزين الباقي.
      Promise.all(
        APP_SHELL_FILES.map((url) =>
          cache.add(url).catch((err) => {
            console.warn("SW: تعذر تخزين", url, err);
          })
        )
      )
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
        const networkFetch = fetch(req)
          .then((networkRes) => {
            if (networkRes && networkRes.ok) cache.put(req, networkRes.clone());
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
