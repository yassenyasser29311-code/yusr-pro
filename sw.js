
const CACHE_VERSION = "v12";
const CACHE_NAME = `yusr-pro-shell-${CACHE_VERSION}`;

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
        ...SAME_ORIGIN_FILES.map((url) =>
          fetch(url).then((res) => {
            if (res && res.ok) return cache.put(url, res);
          }).catch((err) => console.warn("SW: تعذر تخزين", url, err))
        ),
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
        self.clients.matchAll({ type: "window" }).then((clients) =>
          clients.forEach((client) => client.postMessage({ type: "YUSR_SW_UPDATED" }))
        )
     )
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;

  if (req.method !== "GET") return;

  const url = new URL(req.url);

  if (url.hostname.endsWith("workers.dev") || url.pathname.startsWith("/groqChat") ||
      url.pathname.startsWith("/groqTranscribe") || url.pathname.startsWith("/edgeTtsSpeak") ||
      url.hostname === "www.gstatic.com" || url.hostname === "cdnjs.cloudflare.com" ||
      url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com" ||
      url.hostname === "cdn.tailwindcss.com") {
    return;
  }

  const isOwnFile = url.origin === self.location.origin;

  if (isOwnFile) {
    event.respondWith(
      fetch(req, { cache: "no-store" })
        .then((networkRes) => {
          if (networkRes && networkRes.ok) {
            const copy = networkRes.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, copy)).catch(() => {});
          }
          return networkRes;
        })
        .catch(() =>
          caches.open(CACHE_NAME).then((cache) =>
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
