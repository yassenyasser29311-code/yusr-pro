// ================================================================
//  YUSR Pro — Cloudflare Worker (نسخة آمنة كاملة)
// ================================================================
// الفرق عن النسخة القديمة (worker_simple.js):
//
// 1) أي طلب لازم يبعت معاه توكن دخول حقيقي من Firebase
//    (Authorization: Bearer <idToken>) والووركر بيتحقق فعلياً من:
//    توقيع التوكن (عن طريق مفاتيح جوجل العامة)، تاريخ صلاحيته،
//    إنه صادر لمشروع Firebase بتاعك بالظبط، وإنه لحساب حقيقي
//    (مش زائر/anonymous). من غير توكن سليم = رفض فوري (401).
//
// 2) الـ CORS بقى مقفول على دومين موقعك بس (مش "*" مفتوح لأي حد).
//
// 3) حد أقصى لعدد الطلبات في الدقيقة لكل مستخدم لكل أداة (rate
//    limit عن طريق Cloudflare KV) عشان محدش يقدر يستهلك رصيد Groq
//    بسرعة جنونية حتى لو معاه توكن حقيقي. الصوت (edge-tts) مجاني
//    تماماً، بس السقف موجود برضه عشان محدش يضغط على الـ Worker
//    التاني بتاع الصوت بشكل غير طبيعي.
//
// 4) الباقة الشهرية (مجاني/أساسية/احترافية/سنوية) بتتفحص فعلياً من
//    قاعدة بيانات Firebase قبل تنفيذ أي حاجة، وبيتزوّد العداد
//    فعلياً بعد النجاح بس — بدل ما كان الموضوع بالكامل على جهاز
//    المستخدم (اللي أي حد كان يقدر يتلاعب فيه من الـ Console).
//
// 5) أي بيانات جايه من العميل (رسايل الشات، نص الصوت، معرّف الصوت)
//    بتتفحص شكلها وطولها قبل ما تتبعت لـ Groq / edge-tts.
//
// 6) أي خطأ داخلي مبيتبعتش بتفاصيله للمستخدم — بيتسجل بس في اللوج
//    بتاعك (تقدر تشوفه بأمر: wrangler tail).
//
// ملحوظة مهمة عن حدود الأمان الحقيقية:
// الـ CORS بيمنع مواقع تانية إنها تستخدم حساب حد تاني من غير علمه.
// اللي فعلاً بيمنع أي استغلال هو: التحقق من التوكن + سقف الطلبات
// + سقف الباقة. يعني لو مستخدم مسجل دخول فتح Developer Tools وبعت
// الطلب بنفسه بدل ما يضغط الزرار، ده حقه العادي بالظبط (زي أي حد
// بيستخدم حسابه) ولسه هيقف عند سقف باقته وسقف الطلبات. اللي مش
// هيقدر يعمله أبداً حتى من الـ Console هو: يستخدم الخدمة من غير
// تسجيل دخول، يتلاعب في عداد استخدامه، يستخدم توكن حساب مش بتاعه،
// أو يبعت بيانات ضخمة/غريبة عشان يكلفك فلوس.
//
// 7) [إضافة جديدة] مزوّد ذكاء اصطناعي بديل (fallback) اختياري: لو Groq
//    وقع أو رفض الطلب، وعندك مزوّد تاني متظبط في الـ secrets (شوف
//    FALLBACK_API_KEY / FALLBACK_BASE_URL / FALLBACK_MODEL تحت)، الووركر
//    بيحاول المزوّد التاني تلقائيًا قبل ما يرجّع خطأ للمستخدم. لو مفيش
//    فولباك متظبط، السلوك زي الأول بالظبط (يعني الإضافة دي آمنة 100%
//    ومش هتغيّر حاجة لحد ما تفعّلها بنفسك).
// ================================================================

// ---------------- إعدادات عامة (عدّل هنا لو احتجت) ----------------

// دومينات موقعك المسموح لها تستخدم الووركر ده. ما تضيفش "*" أبداً.
const ALLOWED_ORIGINS = [
  "https://yusr-pro.vercel.app",
  "http://localhost:2435" // للتجربة المحلية بس — شيله وقت ما توديه production لو حابب
  // لو ضفت دومين خاص بيك لاحقاً (مثلاً yusrpro.com) ضيفه هنا بنفس الشكل بالظبط
];

const FIREBASE_PROJECT_ID = "yusr-d054e";
const FIREBASE_DB_URL = "https://yusr-d054e-default-rtdb.firebaseio.com";
const JWKS_URL = "https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com";

// نفس أسماء وحدود الباقات الموجودة في index.html بالظبط
const PLAN_LIMITS = {
  "مجاني": 5,
  "الأساسية": 25,
  "الاحترافية": 150,
  "النخبة": Infinity,
  "السنوية": 150
};

// حد أقصى لعدد الطلبات في الدقيقة لكل مستخدم لكل أداة
const RATE_LIMITS = {
  groqChat: { max: 20, windowSeconds: 60 },
  groqTranscribe: { max: 10, windowSeconds: 60 },
  edgeTtsSpeak: { max: 20, windowSeconds: 60 }
};

// ============================== إعدادات الأدمن ==============================
// أفضل حاجة: متسيبش القيم دي هنا في الكود. حطهم كـ secrets بالأمر:
//   wrangler secret put ADMIN_USERNAME
//   wrangler secret put ADMIN_PASSWORD
// لو مش متظبطين كـ secrets، بيستخدم القيم الافتراضية تحت (عشان الموضوع
// يشتغل من أول مرة)، بس دي أضعف بكتير — لازم تنقلهم لـ secrets قبل الـ production.
const DEFAULT_ADMIN_USERNAME = "يس";
const DEFAULT_ADMIN_PASSWORD = "032011";

// نص/كود التأكيد اللي المفروض العميل يبعته في /adminConfirm بعد أول خطوة ناجحة.
// برضه الأفضل ينقل لـ secret (ADMIN_CONFIRM_CODE) بدل ما يفضل ثابت في الكود.
const DEFAULT_ADMIN_CONFIRM_CODE = "293";

// ============================== نظام الأدوار (Roles) ==============================
// أدمن واحد بس ("superadmin") شغّال فعليًا دلوقتي بنفس بيانات الدخول فوق.
// لو حبيت يوم تضيف أدمن تاني بصلاحيات أقل (يشوف بس من غير ما يعدل)، ضبّط الـ
// secrets دول وهيشتغلوا تلقائيًا بنفس شاشة تسجيل الدخول (بنفس كود التأكيد "293"):
//   wrangler secret put ADMIN_VIEWER_USERNAME
//   wrangler secret put ADMIN_VIEWER_PASSWORD
// لو مش متظبطين، مفيش دور "viewer" خالص ومفيش تغيير في السلوك الحالي.
// صاحب دور "viewer" يقدر يفتح اللوحة ويشوف كل حاجة (المستخدمين/الإحصائيات/سجل
// النشاط) لكنه ميقدرش يعمل أي تعديل (إيقاف/تفعيل/تغيير باقة/تصفير استخدام/
// إرسال رابط استعادة باسورد/تنزيل نسخة احتياطية) — الووركر بيرفض العمليات دي
// من أي جلسة دورها مش "superadmin" حتى لو الطلب اتبعت يدويًا من الـ Console.

// أقصى عدد محاولات دخول أدمن غلط لكل IP قبل القفل المؤقت
const ADMIN_LOGIN_MAX_FAILS = 5;
const ADMIN_LOGIN_LOCKOUT_SECONDS = 15 * 60; // 15 دقيقة

// مدة صلاحية توكن التأكيد المؤقت (بين خطوة اليوزر/الباسورد وخطوة التأكيد)
const ADMIN_PENDING_TTL_SECONDS = 5 * 60; // 5 دقايق

// مدة صلاحية جلسة الأدمن بعد التأكيد الناجح
const ADMIN_SESSION_TTL_SECONDS = 12 * 60 * 60; // 12 ساعة

// ملحوظة: مش محتاجين رابط عام لووركر الصوت خالص — الاتصال بيه بيتم عن طريق
// Service Binding (env.EDGE_TTS) المتظبط في wrangler config، شوف handleEdgeTts تحت.

// أصوات edge-tts المسموح بيها بس (whitelist) عشان محدش يبعت اسم صوت غريب
// أو يحاول يحقن حاجة في الطلب. لو حبيت تضيف لغة جديدة زوّد هنا.
const ALLOWED_EDGE_VOICES = new Set([
  "ar-EG-ShakirNeural", "ar-EG-SalmaNeural",
  "ar-SA-HamedNeural", "ar-SA-ZariyahNeural",
  "en-US-GuyNeural", "en-US-JennyNeural",
  "fr-FR-HenriNeural", "fr-FR-DeniseNeural",
  "es-ES-AlvaroNeural", "es-ES-ElviraNeural",
  "tr-TR-AhmetNeural", "tr-TR-EmelNeural",
  "de-DE-ConradNeural", "de-DE-KatjaNeural",
  "hi-IN-MadhurNeural", "hi-IN-SwaraNeural",
  "ur-PK-AsadNeural", "ur-PK-UzmaNeural",
  "fa-IR-FaridNeural", "fa-IR-DilaraNeural"
]);

// ============================== المدخل الرئيسي ==============================

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const origin = request.headers.get("Origin") || "";
    const originAllowed = ALLOWED_ORIGINS.includes(origin);
    const corsHeaders = buildCorsHeaders(origin, originAllowed);

    // ---- Preflight ----
    if (request.method === "OPTIONS") {
      if (!originAllowed) return new Response(null, { status: 403 });
      return new Response(null, { headers: corsHeaders });
    }

    // ---- أي دومين تاني غير المسموح بيه، برة حتى لو الرابط صحيح ----
    if (!originAllowed) {
      return json({ error: "origin_not_allowed" }, 403, corsHeaders);
    }

    if (request.method !== "POST") {
      return json({ error: "method_not_allowed" }, 405, corsHeaders);
    }

    // ---- مسارات الأدمن: منفصلة تماماً عن مسارات الأدوات، ومش محتاجة توكن Firebase ----
    // (بيانات الأدمن بتتحقق منها هنا جوه الووركر بس، ومش موجودة في كود الواجهة خالص)
    if (url.pathname === "/adminLogin") {
      return handleAdminLogin(request, env, corsHeaders);
    }
    if (url.pathname === "/adminConfirm") {
      return handleAdminConfirm(request, env, corsHeaders, ctx);
    }
    if (url.pathname === "/adminMe") {
      const admin = await requireAdminSession(request, env);
      if (!admin.ok) return json({ error: admin.error }, 401, corsHeaders);
      return json({ ok: true, role: admin.role }, 200, corsHeaders);
    }
    // ---- باقي مسارات لوحة الأدمن (كلها بتتحقق من جلسة الأدمن جوه نفسها) ----
    if (url.pathname === "/adminListUsers") {
      return handleAdminListUsers(request, env, corsHeaders);
    }
    if (url.pathname === "/adminStats") {
      return handleAdminStats(request, env, corsHeaders);
    }
    if (url.pathname === "/adminUserAction") {
      return handleAdminUserAction(request, env, corsHeaders, ctx);
    }
    if (url.pathname === "/adminSendPasswordReset") {
      return handleAdminSendPasswordReset(request, env, corsHeaders, ctx);
    }
    if (url.pathname === "/adminActivityLog") {
      return handleAdminActivityLog(request, env, corsHeaders);
    }
    if (url.pathname === "/adminBackupNow") {
      return handleAdminBackupNow(request, env, corsHeaders, ctx);
    }
    if (url.pathname === "/adminListSubscriptionRequests") {
      return handleAdminListSubscriptionRequests(request, env, corsHeaders);
    }
    if (url.pathname === "/adminReviewSubscriptionRequest") {
      return handleAdminReviewSubscriptionRequest(request, env, corsHeaders, ctx);
    }

    // ---- شات مباشر بين الأدمن ومستخدم بعينه: الأدمن بيبعت من لوحة التحكم
    //      (بتوكن X-Admin-Token)، والمستخدم بيبعت/يستقبل من "الشات العائم"
    //      في صفحته العادية (بتوكن Firebase Bearer العادي) ----
    if (url.pathname === "/chatSend") {
      return handleChatSend(request, env, corsHeaders, ctx);
    }
    if (url.pathname === "/chatPoll") {
      return handleChatPoll(request, env, corsHeaders);
    }

    // ---- مسار عام (مش أدمن): "نسيت الباسورد" لأي مستخدم عادي ----
    if (url.pathname === "/forgotPassword") {
      return handleForgotPassword(request, env, corsHeaders);
    }
    // ---- مسار عام: نبضة "أنا أونلاين" من أي مستخدم مسجّل دخول (يتنادى كل دقيقة من الواجهة) ----
    if (url.pathname === "/onlinePing") {
      return handleOnlinePing(request, env, corsHeaders);
    }

    // ---- تحديد الأداة المطلوبة من المسار ----
    let toolName;
    if (url.pathname === "/groqChat") toolName = "groqChat";
    else if (url.pathname === "/groqTranscribe") toolName = "groqTranscribe";
    else if (url.pathname === "/edgeTtsSpeak") toolName = "edgeTtsSpeak";
    else return json({ error: "not_found" }, 404, corsHeaders);

    try {
      // ---- 1) لازم توكن Firebase حقيقي وصحيح ----
      const auth = await verifyFirebaseToken(request, env);
      if (!auth.ok) {
        return json({ error: auth.error }, 401, corsHeaders);
      }
      const { uid, idToken } = auth;

      // ---- 2) سقف عدد الطلبات في الدقيقة ----
      const rl = await checkRateLimit(env, uid, toolName);
      if (!rl.ok) {
        return json({ error: "rate_limited" }, 429, corsHeaders);
      }

      // ---- 3) سقف الباقة الشهرية (من قاعدة بيانات Firebase فعلياً) ----
      // ملحوظة: edgeTtsSpeak (نطق الرد بالصوت) مستثنى عمداً من عداد الباقة الشهري.
      // ده مش فعل مستقل من المستخدم — هو مجرد نطق تلقائي لرد اتحسب بالفعل لما اتولّد
      // عن طريق /groqChat في نفس اللحظة (زي في المقابلة الصوتية: كل رد من الذكاء
      // الاصطناعي بينادي groqChat ثم edgeTtsSpeak فوراً بعده). لو حسبناه برضه هيبقى
      // كل "دور" واحد في المحادثة بيخصم محاولتين بدل واحدة من غير أي داعي.
      // edge-tts مجاني تماماً أصلاً، بس السقف في RATE_LIMITS فوق لسه موجود كحماية عامة.
      const quota = toolName === "edgeTtsSpeak"
        ? { ok: true, monthKey: null }
        : await checkPlanUsage(uid, idToken);
      if (!quota.ok) {
        return json({ error: quota.error || "usage_limit_reached" }, 403, corsHeaders);
      }

      // ---- 4) تنفيذ الأداة نفسها بعد فحص المدخلات ----
      let response;
      if (toolName === "groqChat") {
        response = await handleGroqChat(request, env, corsHeaders);
      } else if (toolName === "groqTranscribe") {
        response = await handleGroqTranscribe(request, env, corsHeaders);
      } else {
        response = await handleEdgeTts(request, env, corsHeaders);
      }

      // ---- 5) لو التنفيذ نجح فعلاً، سجّل الاستخدام الحقيقي بعده (مش قبله) ----
      if (response.status >= 200 && response.status < 300 && quota.monthKey) {
        ctx.waitUntil(
          incrementPlanUsage(uid, idToken, quota.monthKey, quota.currentCount)
        );
      }

      return response;
    } catch (e) {
      console.error("Unhandled worker error:", e && e.stack ? e.stack : e);
      return json({ error: "internal_error" }, 500, corsHeaders);
    }
  },

  // ---- نسخة احتياطية دورية تلقائية (اختيارية) ----
  // بتشتغل بس لو ضفت Cron Trigger في wrangler.toml، مثلاً:
  //   [triggers]
  //   crons = ["0 3 * * *"]   # كل يوم الساعة 3 صباحًا
  // ولو ضبّطت secret اسمه BACKUP_WEBHOOK (رابط Webhook بيقبل POST JSON —
  // زي Discord/Slack، أو أي سيرفر بتاعك بيستقبل ويخزّن الملف). لو مش
  // متظبطين، الـ trigger ميعملش حاجة غير إنه يسجّل في اللوج بس (مأمن 100%).
  async scheduled(event, env, ctx) {
    ctx.waitUntil(runScheduledBackup(env));
  }
};

// ============================== أدوات عامة ==============================

function buildCorsHeaders(origin, originAllowed) {
  const headers = {
    "Vary": "Origin",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Admin-Token",
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "no-referrer"
  };
  if (originAllowed) headers["Access-Control-Allow-Origin"] = origin;
  return headers;
}

function json(obj, status, headers) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { ...headers, "Content-Type": "application/json" }
  });
}

function getCurrentMonthKey() {
  return new Date().toISOString().slice(0, 7); // مثال: "2026-08"
}

// ============================== التحقق من توكن Firebase ==============================

async function verifyFirebaseToken(request, env) {
  const authHeader = request.headers.get("Authorization") || "";
  const match = authHeader.match(/^Bearer\s+(.+)$/i);
  if (!match) return { ok: false, error: "missing_token" };
  const idToken = match[1].trim();

  const parts = idToken.split(".");
  if (parts.length !== 3) return { ok: false, error: "invalid_token" };
  const [headerB64, payloadB64, sigB64] = parts;

  let header, payload;
  try {
    header = JSON.parse(base64UrlDecodeToText(headerB64));
    payload = JSON.parse(base64UrlDecodeToText(payloadB64));
  } catch (e) {
    return { ok: false, error: "invalid_token" };
  }

  if (header.alg !== "RS256") return { ok: false, error: "invalid_token" };

  const now = Math.floor(Date.now() / 1000);
  if (typeof payload.exp !== "number" || payload.exp < now) {
    return { ok: false, error: "token_expired" };
  }
  if (typeof payload.iat !== "number" || payload.iat > now + 60) {
    return { ok: false, error: "invalid_token" };
  }
  if (payload.aud !== FIREBASE_PROJECT_ID) return { ok: false, error: "invalid_token" };
  if (payload.iss !== `https://securetoken.google.com/${FIREBASE_PROJECT_ID}`) {
    return { ok: false, error: "invalid_token" };
  }
  if (!payload.sub || typeof payload.sub !== "string") return { ok: false, error: "invalid_token" };
  if (payload.firebase && payload.firebase.sign_in_provider === "anonymous") {
    return { ok: false, error: "anonymous_not_allowed" };
  }

  // ---- التحقق الفعلي من التوقيع باستخدام مفاتيح جوجل العامة (JWKS) ----
  let jwks;
  try {
    jwks = await getFirebaseJwks();
  } catch (e) {
    return { ok: false, error: "auth_unavailable" };
  }
  const jwk = jwks.keys && jwks.keys.find(k => k.kid === header.kid);
  if (!jwk) return { ok: false, error: "invalid_token" };

  let cryptoKey;
  try {
    cryptoKey = await crypto.subtle.importKey(
      "jwk",
      jwk,
      { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
      false,
      ["verify"]
    );
  } catch (e) {
    return { ok: false, error: "invalid_token" };
  }

  const signedData = new TextEncoder().encode(`${headerB64}.${payloadB64}`);
  const signatureBytes = base64UrlDecodeToBytes(sigB64);

  let isValid = false;
  try {
    isValid = await crypto.subtle.verify(
      "RSASSA-PKCS1-v1_5",
      cryptoKey,
      signatureBytes,
      signedData
    );
  } catch (e) {
    isValid = false;
  }
  if (!isValid) return { ok: false, error: "invalid_signature" };

  return { ok: true, uid: payload.sub, idToken };
}

async function getFirebaseJwks() {
  // بنستخدم كاش Cloudflare نفسه عشان منتعبش على جوجل في كل طلب
  const res = await fetch(JWKS_URL, { cf: { cacheTtl: 3600, cacheEverything: true } });
  if (!res.ok) throw new Error("jwks_fetch_failed");
  return await res.json();
}

function base64UrlDecodeToBytes(str) {
  const padLen = (4 - (str.length % 4)) % 4;
  const padded = str.replace(/-/g, "+").replace(/_/g, "/") + "=".repeat(padLen);
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

function base64UrlDecodeToText(str) {
  return new TextDecoder().decode(base64UrlDecodeToBytes(str));
}

// ============================== سقف عدد الطلبات (Rate limit) ==============================

async function checkRateLimit(env, uid, toolName) {
  if (!env.RATE_LIMIT_KV) return { ok: true }; // لو الـ KV مش متظبط، بنكمل من غير حد (فعّله في wrangler.toml)
  const limit = RATE_LIMITS[toolName];
  const windowId = Math.floor(Date.now() / 1000 / limit.windowSeconds);
  const key = `rl:${toolName}:${uid}:${windowId}`;

  let current = 0;
  try {
    current = parseInt((await env.RATE_LIMIT_KV.get(key)) || "0", 10);
  } catch (e) {
    return { ok: true }; // فشل قراءة الـ KV مؤقتاً؟ منسدّش على المستخدم الشرعي
  }
  if (current >= limit.max) return { ok: false };

  try {
    await env.RATE_LIMIT_KV.put(key, String(current + 1), {
      expirationTtl: limit.windowSeconds + 5
    });
  } catch (e) {
    // تجاهل فشل الكتابة، الفحص التالي هيبدأ من صفر وده مقبول لأداة حماية إضافية
  }
  return { ok: true };
}

// ============================== سقف الباقة الشهرية (Firebase RTDB) ==============================

async function checkPlanUsage(uid, idToken) {
  const monthKey = getCurrentMonthKey();
  const authQS = `auth=${encodeURIComponent(idToken)}`;

  // بنقرا نود المستخدم كامل بطلب واحد بدل طلبين (أسرع)، وده كمان بيدّينا
  // suspended و customLimit اللي لوحة الأدمن الجديدة بتضبطهم.
  let userRaw = null;
  try {
    const res = await fetch(`${FIREBASE_DB_URL}/users/${uid}.json?${authQS}`);
    userRaw = res.ok ? await res.json() : null;
  } catch (e) {
    // لو قاعدة البيانات مش متردّة، الأسلم إننا نمنع بدل ما نسيب الباب مفتوح من غير سقف
    return { ok: false };
  }
  if (!userRaw || typeof userRaw !== "object") userRaw = {};

  // ---- حساب موقوف من لوحة الأدمن ----
  if (userRaw.suspended === true) {
    return { ok: false, error: "account_suspended" };
  }

  // ---- صلاحية "استخدام غير محدود" اللي الأدمن يقدر يدّيها لمستخدم بعينه من
  // مساحة عمل المستخدم في لوحة الأدمن، بغض النظر عن باقته أو سقفه المخصّص ----
  if (userRaw.permissions && userRaw.permissions.unlimitedUsage === true) {
    return { ok: true, monthKey, currentCount: 0 };
  }

  const planName = PLAN_LIMITS.hasOwnProperty(userRaw.plan) ? userRaw.plan : "مجاني";
  // customLimit: سقف مخصّص حطّه الأدمن لليوزر ده بعينه، بيغلب سقف الباقة العادي
  let limit = PLAN_LIMITS[planName];
  if (typeof userRaw.customLimit === "number" && userRaw.customLimit >= 0) {
    limit = userRaw.customLimit;
  }

  const currentCount =
    userRaw.usage && typeof userRaw.usage[monthKey] === "number"
      ? userRaw.usage[monthKey]
      : 0;

  if (limit !== Infinity && currentCount >= limit) {
    return { ok: false, error: "usage_limit_reached" };
  }
  return { ok: true, monthKey, currentCount };
}

async function incrementPlanUsage(uid, idToken, monthKey, previousCount, attempt = 0) {
  // قاعدة الأمان في Firebase (Realtime Database) بترفض أي قفزة في العداد غير +1 بالظبط،
  // فلو حصل تعارض (طلب تاني للمستخدم نفسه زوّد العداد في نفس اللحظة) بنعيد القراءة ونحاول تاني.
  const authQS = `auth=${encodeURIComponent(idToken)}`;
  const refUrl = `${FIREBASE_DB_URL}/users/${uid}/usage/${monthKey}.json?${authQS}`;
  try {
    const newValue = previousCount + 1;
    const res = await fetch(refUrl, { method: "PUT", body: JSON.stringify(newValue) });
    if (res.ok) return;

    if (attempt >= 3) {
      console.warn("incrementPlanUsage: تم التخلي بعد عدة محاولات للمستخدم", uid);
      return;
    }
    const freshRes = await fetch(refUrl);
    const fresh = freshRes.ok ? await freshRes.json() : previousCount;
    await incrementPlanUsage(
      uid,
      idToken,
      monthKey,
      typeof fresh === "number" ? fresh : previousCount,
      attempt + 1
    );
  } catch (e) {
    console.warn("incrementPlanUsage فشل:", e);
  }
}

// ============================== /groqChat ==============================

async function handleGroqChat(request, env, corsHeaders) {
  let body;
  try {
    body = await request.json();
  } catch (e) {
    return json({ error: "invalid_json" }, 400, corsHeaders);
  }

  const { messages } = body || {};
  if (!Array.isArray(messages) || messages.length === 0) {
    return json({ error: "messages_required" }, 400, corsHeaders);
  }
  if (messages.length > 60) {
    return json({ error: "too_many_messages" }, 400, corsHeaders);
  }

  const ALLOWED_ROLES = new Set(["system", "user", "assistant"]);
  let totalChars = 0;
  for (const m of messages) {
    if (!m || typeof m !== "object") return json({ error: "invalid_message" }, 400, corsHeaders);
    if (!ALLOWED_ROLES.has(m.role)) return json({ error: "invalid_role" }, 400, corsHeaders);
    if (typeof m.content !== "string" || m.content.length === 0) {
      return json({ error: "invalid_content" }, 400, corsHeaders);
    }
    if (m.content.length > 8000) return json({ error: "message_too_long" }, 400, corsHeaders);
    totalChars += m.content.length;
  }
  if (totalChars > 40000) return json({ error: "conversation_too_long" }, 400, corsHeaders);

  // بنبعت بس role و content لـ Groq (منمنعش أي حقول زيادة تتهرّب مع الطلب)
  const cleanMessages = messages.map(m => ({ role: m.role, content: m.content }));

  // ---- المزوّد الأساسي: Groq ----
  const primary = await tryChatProvider(
    "https://api.groq.com/openai/v1/chat/completions",
    env.GROQ_API_KEY,
    "openai/gpt-oss-120b",
    cleanMessages
  );
  if (primary.ok) {
    return json({ content: primary.content, provider: "groq" }, 200, corsHeaders);
  }
  console.warn("Groq فشل:", primary.reason);

  // ---- المزوّد البديل (fallback): بيتفعّل تلقائيًا بس لو متظبط في env ----
  // عشان ده يبقى فيه فايدة حقيقية (مش مجرد Groq تاني)، لازم يكون مزوّد
  // مختلف فعليًا زي Cerebras أو Together AI أو OpenAI أو OpenRouter —
  // أي حد منهم بيوفّر endpoint متوافق مع شكل OpenAI Chat Completions.
  // للتفعيل: ضيف الـ 3 secrets دي في الووركر (wrangler secret put):
  //   FALLBACK_API_KEY   = مفتاح الحساب بتاعك عند المزوّد التاني
  //   FALLBACK_BASE_URL  = مثلاً https://api.cerebras.ai/v1/chat/completions
  //   FALLBACK_MODEL     = اسم الموديل عند المزوّد ده (مثلاً "llama3.1-70b")
  // لو الـ 3 دول مش متظبطين، الووركر هيرجع نفس رسالة الخطأ القديمة زي الأول
  // بالظبط (يعني مفيش أي تغيير في السلوك لحد ما تفعّل الفولباك بنفسك).
  if (env.FALLBACK_API_KEY && env.FALLBACK_BASE_URL && env.FALLBACK_MODEL) {
    const fallback = await tryChatProvider(
      env.FALLBACK_BASE_URL,
      env.FALLBACK_API_KEY,
      env.FALLBACK_MODEL,
      cleanMessages
    );
    if (fallback.ok) {
      console.warn("تم استخدام المزوّد البديل بعد فشل Groq");
      return json({ content: fallback.content, provider: "fallback" }, 200, corsHeaders);
    }
    console.warn("المزوّد البديل فشل برضه:", fallback.reason);
  }

  return json({ error: "groq_error" }, 502, corsHeaders);
}

// محاولة واحدة لأي مزوّد متوافق مع شكل OpenAI Chat Completions (Groq،
// Cerebras، Together، OpenRouter، OpenAI نفسه... كلهم بنفس الشكل).
async function tryChatProvider(baseUrl, apiKey, model, cleanMessages) {
  if (!apiKey) return { ok: false, reason: "no_api_key" };
  let r;
  try {
    r = await fetch(baseUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ model, messages: cleanMessages, temperature: 0.4 })
    });
  } catch (e) {
    return { ok: false, reason: "network_error: " + (e && e.message) };
  }
  let data;
  try {
    data = await r.json();
  } catch (e) {
    return { ok: false, reason: "bad_json_response" };
  }
  if (!r.ok || !data.choices || !data.choices[0] || !data.choices[0].message) {
    return { ok: false, reason: JSON.stringify(data).slice(0, 300) };
  }
  return { ok: true, content: data.choices[0].message.content };
}

// ============================== /groqTranscribe ==============================

async function handleGroqTranscribe(request, env, corsHeaders) {
  const contentType = request.headers.get("content-type") || "";
  if (!contentType.toLowerCase().startsWith("multipart/form-data")) {
    return json({ error: "invalid_content_type" }, 400, corsHeaders);
  }

  const MAX_AUDIO_BYTES = 20 * 1024 * 1024; // 20 ميجا
  const contentLength = parseInt(request.headers.get("content-length") || "0", 10);
  if (!contentLength || contentLength > MAX_AUDIO_BYTES) {
    return json({ error: "audio_too_large" }, 413, corsHeaders);
  }

  // بنحتفظ بنسخة من الصوت في الذاكرة عشان لو الأداة الأساسية فشلت نقدر
  // نعيد إرساله لمزوّد بديل من غير ما نطلب من المستخدم يرفع الصوت تاني.
  const audioBuffer = await request.arrayBuffer();

  let r, usedFallback = false;
  try {
    r = await fetch("https://api.groq.com/openai/v1/audio/transcriptions", {
      method: "POST",
      headers: { Authorization: `Bearer ${env.GROQ_API_KEY}`, "Content-Type": contentType },
      body: audioBuffer
    });
  } catch (e) {
    r = null;
  }

  // ---- مزوّد تفريغ صوتي بديل (اختياري) ----
  // نفس فكرة الفولباك النصي فوق: بيتفعّل بس لو ضبطت FALLBACK_TRANSCRIBE_BASE_URL
  // (مزوّد بيوفّر endpoint متوافق مع Whisper API، زي OpenAI أو Fireworks أو Together).
  if ((!r || !r.ok) && env.FALLBACK_API_KEY && env.FALLBACK_TRANSCRIBE_BASE_URL) {
    try {
      const fb = await fetch(env.FALLBACK_TRANSCRIBE_BASE_URL, {
        method: "POST",
        headers: { Authorization: `Bearer ${env.FALLBACK_API_KEY}`, "Content-Type": contentType },
        body: audioBuffer
      });
      if (fb.ok) { r = fb; usedFallback = true; }
    } catch (e) {
      console.warn("مزوّد التفريغ الصوتي البديل فشل:", e);
    }
  }

  if (!r) return json({ error: "groq_bad_response" }, 502, corsHeaders);

  let data;
  try {
    data = await r.json();
  } catch (e) {
    return json({ error: "groq_bad_response" }, 502, corsHeaders);
  }
  if (usedFallback) console.warn("تم استخدام مزوّد تفريغ صوتي بديل بعد فشل Groq");

  const segments = Array.isArray(data.segments)
    ? data.segments.map(s => ({
        start: Number(s.start) || 0,
        end: Number(s.end) || 0,
        text: (s.text || "").toString().trim()
      }))
    : [];

  return json({
    text: (data.text || "").toString().trim(),
    segments,
    language: data.language || null,
    duration: typeof data.duration === "number" ? data.duration : null
  }, r.ok ? 200 : 502, corsHeaders);
}

// ============================== /edgeTtsSpeak ==============================
// بينادي Worker تاني منفصل (cloudflare-edge-tts) بيحوّل النص لصوت مجاناً
// عن طريق خدمة Microsoft Edge TTS، من غير أي API key أو تكلفة.

async function handleEdgeTts(request, env, corsHeaders) {
  let body;
  try {
    body = await request.json();
  } catch (e) {
    return json({ error: "invalid_json" }, 400, corsHeaders);
  }

  const { text, voice } = body || {};
  if (typeof text !== "string" || !text.trim()) {
    return json({ error: "text_required" }, 400, corsHeaders);
  }
  if (text.length > 3000) {
    return json({ error: "text_too_long" }, 400, corsHeaders);
  }

  const DEFAULT_VOICE = "ar-EG-SalmaNeural";
  let v = DEFAULT_VOICE;
  if (voice !== undefined && voice !== null) {
    if (typeof voice !== "string" || !ALLOWED_EDGE_VOICES.has(voice)) {
      return json({ error: "invalid_voice" }, 400, corsHeaders);
    }
    v = voice;
  }

  // بنستخدم Service Binding (env.EDGE_TTS) للاتصال بووركر الصوت مباشرة جوه
  // Cloudflare نفسها، بدل رابط عام على الإنترنت — أسرع وأأمن ومحتاجش CORS.
  if (!env.EDGE_TTS) {
    console.warn("Edge TTS binding (env.EDGE_TTS) مش متظبط في wrangler config");
    return json({ error: "tts_not_configured" }, 502, corsHeaders);
  }

  let r;
  try {
    r = await env.EDGE_TTS.fetch("https://internal/tts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, voice: v })
    });
  } catch (e) {
    console.warn("Edge TTS worker unreachable:", e);
    return json({ error: "tts_error" }, 502, corsHeaders);
  }

  if (!r.ok) {
    console.warn("Edge TTS error:", r.status);
    return json({ error: "tts_error" }, 502, corsHeaders);
  }

  const buf = await r.arrayBuffer();
  return new Response(buf, { status: 200, headers: { ...corsHeaders, "Content-Type": "audio/mpeg" } });
}

// ============================== نظام دخول الأدمن ==============================
// الفكرة: نفس صفحة اللوجين العادية اللي أي مستخدم بيستخدمها. الواجهة (الفرونت
// إند) هي اللي هتقرر تبعت الطلب هنا (/adminLogin) بدل تسجيل الدخول العادي بـ
// Firebase — مثلاً لو حسّت إن القيم المكتوبة تطابق شكل بيانات الأدمن. حتى لو
// حد قرأ كود الواجهة وحاول يخمّن، القيم الحقيقية اللي بتتقارن فعلياً موجودة
// هنا بس جوه الووركر ومش بتتبعت للمتصفح خالص. مفيش أي رد بيقول "الاسم غلط"
// أو "الباسورد غلط" بشكل منفصل — عشان محدش يقدر يعرف من الرد إيه اللي صح
// وإيه اللي غلط (بيرجع نفس رسالة "بيانات غير صحيحة" في الحالتين).

function getClientIp(request) {
  return request.headers.get("CF-Connecting-IP") || "unknown";
}

async function isAdminIpLocked(env, ip) {
  if (!env.RATE_LIMIT_KV) return false; // لو مفيش KV، منقدرش نتتبع محاولات فاشلة (شوف ملحوظة تحت)
  const raw = await env.RATE_LIMIT_KV.get(`adminLoginFail:${ip}`);
  const count = parseInt(raw || "0", 10);
  return count >= ADMIN_LOGIN_MAX_FAILS;
}

async function registerAdminLoginFail(env, ip) {
  if (!env.RATE_LIMIT_KV) return;
  const key = `adminLoginFail:${ip}`;
  const raw = await env.RATE_LIMIT_KV.get(key);
  const count = parseInt(raw || "0", 10) + 1;
  await env.RATE_LIMIT_KV.put(key, String(count), {
    expirationTtl: ADMIN_LOGIN_LOCKOUT_SECONDS
  });
}

async function clearAdminLoginFails(env, ip) {
  if (!env.RATE_LIMIT_KV) return;
  await env.RATE_LIMIT_KV.delete(`adminLoginFail:${ip}`).catch(() => {});
}

// مقارنة نصوص بوقت ثابت (constant-time) عشان نقفل باب "timing attack" اللي
// ممكن يستنتج بيها حد طول/محتوى الباسورد من فرق ميكروثانية في وقت الرد.
function timingSafeEqual(a, b) {
  const aBytes = new TextEncoder().encode(String(a));
  const bBytes = new TextEncoder().encode(String(b));
  if (aBytes.length !== bBytes.length) {
    // برضه بنعمل مقارنة وهمية بنفس الطول عشان الوقت يفضل ثابت تقريباً
    let dummy = 0;
    for (let i = 0; i < aBytes.length; i++) dummy |= aBytes[i] ^ (bBytes[i % bBytes.length] || 0);
    return false;
  }
  let diff = 0;
  for (let i = 0; i < aBytes.length; i++) diff |= aBytes[i] ^ bBytes[i];
  return diff === 0;
}

// ---- الخطوة 1: اسم المستخدم + الباسورد ----
async function handleAdminLogin(request, env, corsHeaders) {
  let body;
  try {
    body = await request.json();
  } catch (e) {
    return json({ error: "invalid_json" }, 400, corsHeaders);
  }

  const ip = getClientIp(request);
  if (await isAdminIpLocked(env, ip)) {
    return json({ error: "too_many_attempts" }, 429, corsHeaders);
  }

  const username = typeof body?.username === "string" ? body.username.trim() : "";
  const password = typeof body?.password === "string" ? body.password : "";

  const expectedUsername = env.ADMIN_USERNAME || DEFAULT_ADMIN_USERNAME;
  const expectedPassword = env.ADMIN_PASSWORD || DEFAULT_ADMIN_PASSWORD;

  const superOk = timingSafeEqual(username, expectedUsername) && timingSafeEqual(password, expectedPassword);

  // ---- دور "viewer" (اختياري، شوف تعليق نظام الأدوار فوق) ----
  let viewerOk = false;
  if (!superOk && env.ADMIN_VIEWER_USERNAME && env.ADMIN_VIEWER_PASSWORD) {
    viewerOk =
      timingSafeEqual(username, env.ADMIN_VIEWER_USERNAME) &&
      timingSafeEqual(password, env.ADMIN_VIEWER_PASSWORD);
  }

  if (!superOk && !viewerOk) {
    await registerAdminLoginFail(env, ip);
    // رد عام مقصود — مش بيفرّق بين "يوزر غلط" و"باسورد غلط"، وبنفس شكل رد
    // اللوجين العادي الفاشل عشان محدش يعرف إنه لمس مسار مختلف خالص
    return json({ error: "invalid_credentials" }, 401, corsHeaders);
  }

  if (!env.RATE_LIMIT_KV) {
    // من غير KV منقدرش نعمل خطوة تأكيد مؤقتة بأمان (محتاجين مكان نخزن فيه
    // التوكن المؤقت). لازم تفعّل KV binding (RATE_LIMIT_KV) في wrangler config.
    return json({ error: "server_not_configured" }, 500, corsHeaders);
  }

  const role = superOk ? "superadmin" : "viewer";
  const confirmToken = crypto.randomUUID();
  await env.RATE_LIMIT_KV.put(`adminPending:${confirmToken}`, JSON.stringify({ role }), {
    expirationTtl: ADMIN_PENDING_TTL_SECONDS
  });

  return json({ needsConfirmation: true, confirmToken }, 200, corsHeaders);
}

// ---- الخطوة 2: تأكيد "293" ----
async function handleAdminConfirm(request, env, corsHeaders, ctx) {
  let body;
  try {
    body = await request.json();
  } catch (e) {
    return json({ error: "invalid_json" }, 400, corsHeaders);
  }

  const ip = getClientIp(request);
  if (await isAdminIpLocked(env, ip)) {
    return json({ error: "too_many_attempts" }, 429, corsHeaders);
  }

  const confirmToken = typeof body?.confirmToken === "string" ? body.confirmToken : "";
  const code = typeof body?.code === "string" ? body.code : "";
  const expectedCode = env.ADMIN_CONFIRM_CODE || DEFAULT_ADMIN_CONFIRM_CODE;

  if (!confirmToken || !timingSafeEqual(code, expectedCode)) {
    await registerAdminLoginFail(env, ip);
    return json({ error: "invalid_confirmation" }, 401, corsHeaders);
  }

  if (!env.RATE_LIMIT_KV) {
    return json({ error: "server_not_configured" }, 500, corsHeaders);
  }

  const pendingRaw = await env.RATE_LIMIT_KV.get(`adminPending:${confirmToken}`);
  if (!pendingRaw) {
    // إما التوكن غلط، أو خلصت صلاحيته (5 دقايق)، أو اتستخدم قبل كده
    await registerAdminLoginFail(env, ip);
    return json({ error: "invalid_or_expired_token" }, 401, corsHeaders);
  }
  // توكن استخدام واحد بس — بنمسحه فوراً عشان محدش يعيد استخدامه
  await env.RATE_LIMIT_KV.delete(`adminPending:${confirmToken}`);

  let role = "superadmin";
  try {
    const pending = JSON.parse(pendingRaw);
    if (pending && (pending.role === "superadmin" || pending.role === "viewer")) {
      role = pending.role;
    }
  } catch (e) {
    // توكنات قديمة قبل إضافة نظام الأدوار كانت بتتخزن كسترينج "1" بس —
    // بنعاملها كـ superadmin عشان مايحصلش انقطاع مفاجئ لأي جلسة شغّالة
  }

  // نجح الدخول فعلياً: نلغي أي عداد محاولات فاشلة على الـ IP ده
  await clearAdminLoginFails(env, ip);

  const sessionToken = crypto.randomUUID();
  await env.RATE_LIMIT_KV.put(
    `adminSession:${sessionToken}`,
    JSON.stringify({ role, createdAt: Date.now() }),
    { expirationTtl: ADMIN_SESSION_TTL_SECONDS }
  );

  // سجل نشاط + إشعار فوري — بعد الرد عشان ميبطّئش الدخول (ctx.waitUntil)
  if (ctx) {
    ctx.waitUntil(logAdminActivity(env, "admin_login", { ip, role }));
    ctx.waitUntil(notifyRealAdmin(env, ip, role));
  }

  return json({ adminToken: sessionToken, role }, 200, corsHeaders);
}

// ---- التحقق من جلسة أدمن قائمة (لأي مسار لوحة أدمن جاي في الخطوة الجاية) ----
async function requireAdminSession(request, env) {
  if (!env.RATE_LIMIT_KV) return { ok: false, error: "server_not_configured" };
  const token = request.headers.get("X-Admin-Token") || "";
  if (!token) return { ok: false, error: "missing_admin_token" };
  const raw = await env.RATE_LIMIT_KV.get(`adminSession:${token}`);
  if (!raw) return { ok: false, error: "invalid_or_expired_session" };
  let session;
  try {
    session = JSON.parse(raw);
  } catch (e) {
    return { ok: false, error: "invalid_session_data" };
  }
  return { ok: true, role: session.role || "admin", token };
}

// ---- سجل نشاط الأدمن (Activity Log) — بيتسجل في Firebase RTDB ----
// ملحوظة: ده لسه بسيط (تسجيل الدخول بس). في الخطوة الجاية هيتسجل كل عملية
// إدارية فعلية (إيقاف حساب، تعديل باقة...) لما نضيف مسارات لوحة الأدمن نفسها.
async function logAdminActivity(env, action, details) {
  // ملحوظة أمان: كان الطلب ده بيتبعت من غير أي auth، وده معناه إن أي حد يعرف
  // رابط قاعدة البيانات بتاعتك كان يقدر يكتب في /adminLogs من غير أي صلاحية
  // (حتى لو مش أدمن). بقى لازم FIREBASE_SERVICE_ACCOUNT_JSON زي باقي كتابة الأدمن.
  if (!env.FIREBASE_SERVICE_ACCOUNT_JSON) return;
  try {
    const token = await getFirebaseAccessToken(env);
    await fetch(
      `${FIREBASE_DB_URL}/adminLogs.json?access_token=${encodeURIComponent(token)}`,
      {
        method: "POST",
        body: JSON.stringify({
          action,
          details,
          time: new Date().toISOString()
        })
      }
    );
  } catch (e) {
    console.warn("logAdminActivity فشل:", e);
  }
}

// ---- إشعار فوري للأدمن الحقيقي عند أي دخول ناجح لحساب الأدمن ----
// شغّالة بس لو ضبطت ADMIN_NOTIFY_WEBHOOK كـ secret (رابط Webhook من Discord
// أو Slack أو Telegram — أي حد فيهم بيقبل POST بشكل JSON بسيط زي ده).
// لو مش متظبط، الدخول لسه بيشتغل عادي، بس من غير إشعار.
async function notifyRealAdmin(env, ip, role) {
  if (!env.ADMIN_NOTIFY_WEBHOOK) return;
  const roleLabel = role === "viewer" ? "أدمن (مشاهدة فقط)" : "أدمن (صلاحية كاملة)";
  try {
    await fetch(env.ADMIN_NOTIFY_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: `⚠️ تسجيل دخول لحساب ${roleLabel} — الوقت: ${new Date().toISOString()} — IP: ${ip}`,
        text: `⚠️ تسجيل دخول لحساب ${roleLabel} — الوقت: ${new Date().toISOString()} — IP: ${ip}`
      })
    });
  } catch (e) {
    console.warn("notifyRealAdmin فشل:", e);
  }
}

// ---- زي requireAdminSession بالظبط، بس بيرفض أي جلسة دورها مش "superadmin" ----
// (يعني صاحب دور "viewer" يقدر يشوف بس، ومينفعش يعدي من هنا لأي عملية تعديل)
async function requireSuperAdmin(request, env) {
  const admin = await requireAdminSession(request, env);
  if (!admin.ok) return admin;
  if (admin.role !== "superadmin") return { ok: false, error: "forbidden_role" };
  return admin;
}

// ================================================================
// ============================== لوحة الأدمن (إدارة المستخدمين) ==============================
// ================================================================
// كل المسارات هنا بتتحقق من requireAdminSession الأول (يعني لازم تسجيل
// دخول أدمن ناجح قبلها بالخطوتين اللي فوق). وكل قراءة/كتابة لكل مستخدمين
// قاعدة البيانات (مش مستخدم واحد بعينه) بتحتاج صلاحية أعلى من توكن أي
// مستخدم عادي — عشان كده لازم تضبط secret اسمه FIREBASE_SERVICE_ACCOUNT_JSON:
//   wrangler secret put FIREBASE_SERVICE_ACCOUNT_JSON
// القيمة: محتوى ملف الـ JSON اللي بتنزّله من Firebase Console -> Project
// settings -> Service accounts -> Generate new private key (الصق الملف
// كله كـ نص واحد، مش مسار للملف). ده البديل الرسمي الحديث لـ "database
// secret" القديم (اللي Firebase بقى يعتبره Legacy ومش متاح أصلاً في كتير
// من المشاريع الحديثة).
//
// كمان محتاجين FIREBASE_WEB_API_KEY (مش سر — نفس apiKey الموجود في كود
// تسجيل الدخول عندك في الواجهة) عشان نبعت إيميلات "استعادة الباسورد":
//   wrangler secret put FIREBASE_WEB_API_KEY

// ================================================================
// ====== Service Account JSON -> Google OAuth2 access token ======
// ================================================================
// بنوقّع JWT بالمفتاح الخاص (private_key) الموجود في ملف الـ service
// account باستخدام Web Crypto API (متاحة جوه Cloudflare Workers بشكل
// أساسي، مش محتاجين أي مكتبة خارجية)، وبنبادلها مع Google للحصول على
// access token صالح لمدة ساعة. بنكاشيه في الذاكرة (متغيّر عام بسيط) ونعيد
// استخدامه لحد ما يقرب ينتهي، عشان معظم الطلبات ماتحتاجش تولّد توكن جديد
// من الصفر في كل مرة (تولّد التوكن فيه توقيع RSA وطلب شبكة زيادة).
let _cachedFirebaseAccessToken = null; // { token, expiresAt(seconds) }
const GOOGLE_OAUTH_TOKEN_URL = "https://oauth2.googleapis.com/token";
const FIREBASE_DB_OAUTH_SCOPE = "https://www.googleapis.com/auth/firebase.database https://www.googleapis.com/auth/userinfo.email";

function base64UrlEncodeBytes(bytes) {
  let binary = "";
  const arr = new Uint8Array(bytes);
  for (let i = 0; i < arr.length; i++) binary += String.fromCharCode(arr[i]);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function base64UrlEncodeString(str) {
  return base64UrlEncodeBytes(new TextEncoder().encode(str));
}
function pemPrivateKeyToArrayBuffer(pem) {
  const b64 = pem
    .replace(/-----BEGIN PRIVATE KEY-----/, "")
    .replace(/-----END PRIVATE KEY-----/, "")
    .replace(/\s+/g, "");
  const binary = atob(b64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes.buffer;
}
async function importServiceAccountPrivateKey(pem) {
  const keyData = pemPrivateKeyToArrayBuffer(pem);
  return crypto.subtle.importKey(
    "pkcs8",
    keyData,
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["sign"]
  );
}
// بيرجّع access token صالح - إما من الكاش (لو لسه صالح لأكتر من دقيقة)
// أو بيولّد واحد جديد ويكاشيه. بيرمي استثناء واضح لو FIREBASE_SERVICE_ACCOUNT_JSON
// مش متظبط أو شكله غلط، عشان الدوال اللي بتستخدمه تقدر تفرّق بين "مش متظبط"
// و"فشل فعلي وقت الاتصال بـ Google".
async function getFirebaseAccessToken(env) {
  const nowSec = Math.floor(Date.now() / 1000);
  if (_cachedFirebaseAccessToken && _cachedFirebaseAccessToken.expiresAt - 60 > nowSec) {
    return _cachedFirebaseAccessToken.token;
  }
  if (!env.FIREBASE_SERVICE_ACCOUNT_JSON) {
    throw new Error("firebase_service_account_not_configured");
  }
  let sa;
  try {
    sa = JSON.parse(env.FIREBASE_SERVICE_ACCOUNT_JSON);
  } catch (e) {
    throw new Error("firebase_service_account_invalid_json");
  }
  if (!sa.client_email || !sa.private_key) {
    throw new Error("firebase_service_account_invalid_json");
  }

  const header = { alg: "RS256", typ: "JWT" };
  const claim = {
    iss: sa.client_email,
    scope: FIREBASE_DB_OAUTH_SCOPE,
    aud: GOOGLE_OAUTH_TOKEN_URL,
    iat: nowSec,
    exp: nowSec + 3600
  };
  const signingInput = `${base64UrlEncodeString(JSON.stringify(header))}.${base64UrlEncodeString(JSON.stringify(claim))}`;
  const key = await importServiceAccountPrivateKey(sa.private_key);
  const signature = await crypto.subtle.sign(
    { name: "RSASSA-PKCS1-v1_5" },
    key,
    new TextEncoder().encode(signingInput)
  );
  const jwt = `${signingInput}.${base64UrlEncodeBytes(signature)}`;

  const res = await fetch(GOOGLE_OAUTH_TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `grant_type=${encodeURIComponent("urn:ietf:params:oauth:grant-type:jwt-bearer")}&assertion=${encodeURIComponent(jwt)}`
  });
  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error("firebase_token_exchange_failed:" + res.status + ":" + detail.slice(0, 300));
  }
  const data = await res.json();
  _cachedFirebaseAccessToken = { token: data.access_token, expiresAt: nowSec + (data.expires_in || 3600) };
  return _cachedFirebaseAccessToken.token;
}

async function fbAdminGet(pathNoExt, env) {
  const token = await getFirebaseAccessToken(env);
  const res = await fetch(
    `${FIREBASE_DB_URL}/${pathNoExt}.json?access_token=${encodeURIComponent(token)}`
  );
  if (!res.ok) throw new Error("firebase_get_failed:" + res.status);
  return await res.json();
}

async function fbAdminPut(pathNoExt, value, env) {
  const token = await getFirebaseAccessToken(env);
  const res = await fetch(
    `${FIREBASE_DB_URL}/${pathNoExt}.json?access_token=${encodeURIComponent(token)}`,
    { method: "PUT", body: JSON.stringify(value) }
  );
  if (!res.ok) throw new Error("firebase_put_failed:" + res.status);
}

// اليوزر بيتعتبر "أونلاين" لو بعت نبضة /onlinePing خلال آخر دقيقتين
const ONLINE_THRESHOLD_MS = 2 * 60 * 1000;

// ---- GET (POST فعليًا) كل المستخدمين + حالتهم ----
async function handleAdminListUsers(request, env, corsHeaders) {
  const admin = await requireAdminSession(request, env);
  if (!admin.ok) return json({ error: admin.error }, 401, corsHeaders);
  if (!env.FIREBASE_SERVICE_ACCOUNT_JSON) {
    return json({ error: "firebase_service_account_not_configured" }, 500, corsHeaders);
  }

  try {
    const usersRaw = (await fbAdminGet("users", env)) || {};
    const monthKey = getCurrentMonthKey();
    const now = Date.now();

    const users = Object.entries(usersRaw).map(([uid, u]) => {
      u = u || {};
      const planName = PLAN_LIMITS.hasOwnProperty(u.plan) ? u.plan : "مجاني";
      const usageThisMonth =
        u.usage && typeof u.usage[monthKey] === "number" ? u.usage[monthKey] : 0;
      return {
        uid,
        email: u.email || null,
        // بعض الحسابات القديمة اتسجّل اسمها تحت "name" مش "displayName" -
        // بنقبل الاتنين عشان الاسم يظهر دايمًا في لوحة الأدمن.
        displayName: u.displayName || u.name || null,
        plan: planName,
        customLimit: typeof u.customLimit === "number" ? u.customLimit : null,
        suspended: u.suspended === true,
        permissions: (u.permissions && typeof u.permissions === "object") ? u.permissions : {},
        adminNote: typeof u.adminNote === "string" ? u.adminNote : "",
        usageThisMonth,
        lastSeen: typeof u.lastSeen === "number" ? u.lastSeen : null,
        online: typeof u.lastSeen === "number" && now - u.lastSeen < ONLINE_THRESHOLD_MS
      };
    });

    return json({ ok: true, users }, 200, corsHeaders);
  } catch (e) {
    console.error("handleAdminListUsers فشل:", e);
    return json({ error: "internal_error" }, 500, corsHeaders);
  }
}

// ---- طلبات الاشتراك (تحويل يدوي Vodafone Cash / InstaPay) اللي لسه معلّقة أو
//      اتراجعت بالفعل - العميل بيبعتها في "pending_requests" لما يضغط "تم التحويل،
//      ابعت الطلب" في صفحة الاشتراكات، وهنا الأدمن بس هو اللي يشوفها ----
async function handleAdminListSubscriptionRequests(request, env, corsHeaders) {
  const admin = await requireAdminSession(request, env);
  if (!admin.ok) return json({ error: admin.error }, 401, corsHeaders);
  if (!env.FIREBASE_SERVICE_ACCOUNT_JSON) {
    return json({ error: "firebase_service_account_not_configured" }, 500, corsHeaders);
  }

  try {
    const raw = (await fbAdminGet("pending_requests", env)) || {};
    // لو الطلب متسجّل من غير اسم أو إيميل (مثلاً طلبات قديمة، أو حصل خطأ في
    // الفورم وقت الإرسال)، بنكمّلهم من بيانات صاحب الحساب الفعلية على
    // users/{uid} - عشان الأدمن ميشوفش "بدون اسم" أبداً طالما فيه uid صحيح.
    let usersRaw = null;
    const requests = await Promise.all(
      Object.entries(raw).map(async ([id, r]) => {
        r = r || {};
        const entry = { id, ...r };
        if ((!entry.name || !entry.email) && entry.uid) {
          if (usersRaw === null) usersRaw = (await fbAdminGet("users", env)) || {};
          const u = usersRaw[entry.uid] || {};
          if (!entry.name) entry.name = u.displayName || u.name || "";
          if (!entry.email) entry.email = u.email || "";
        }
        return entry;
      })
    );
    requests.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
    return json({ ok: true, requests }, 200, corsHeaders);
  } catch (e) {
    console.error("handleAdminListSubscriptionRequests فشل:", e);
    return json({ error: "internal_error" }, 500, corsHeaders);
  }
}

// ---- موافقة/رفض طلب اشتراك واحد. عند الموافقة الباقة بتتفعّل فورًا وأوتوماتيك
//      على حساب المستخدم (users/{uid}/plan) - مفيش خطوة يدوية تانية بعد الموافقة ----
async function handleAdminReviewSubscriptionRequest(request, env, corsHeaders, ctx) {
  const admin = await requireSuperAdmin(request, env);
  if (!admin.ok) return json({ error: admin.error }, admin.error === "forbidden_role" ? 403 : 401, corsHeaders);
  if (!env.FIREBASE_SERVICE_ACCOUNT_JSON) {
    return json({ error: "firebase_service_account_not_configured" }, 500, corsHeaders);
  }

  let body;
  try {
    body = await request.json();
  } catch (e) {
    return json({ error: "invalid_json" }, 400, corsHeaders);
  }

  const requestId = typeof body?.requestId === "string" ? body.requestId.trim() : "";
  const action = typeof body?.action === "string" ? body.action : "";
  if (!requestId || (action !== "approve" && action !== "reject")) {
    return json({ error: "invalid_request" }, 400, corsHeaders);
  }

  try {
    const reqRaw = await fbAdminGet(`pending_requests/${requestId}`, env);
    if (!reqRaw) return json({ error: "request_not_found" }, 404, corsHeaders);

    if (action === "approve") {
      // الباقة المطلوبة لازم تكون واحدة من الباقات المعروفة عشان تتفعّل تلقائيًا.
      // لو باقة مخصّصة (زي فرق/جامعات) مش من ضمن PLAN_LIMITS، الأدمن يبعت
      // planOverride صريح وقت الموافقة يحدد بيه الباقة الفعلية اللي هتتفعّل.
      const planToSet = PLAN_LIMITS.hasOwnProperty(body.planOverride)
        ? body.planOverride
        : (PLAN_LIMITS.hasOwnProperty(reqRaw.plan) ? reqRaw.plan : null);
      if (!planToSet) {
        return json({ error: "unknown_plan_needs_override" }, 400, corsHeaders);
      }
      if (!reqRaw.uid) {
        return json({ error: "request_missing_uid" }, 400, corsHeaders);
      }
      await fbAdminPut(`users/${reqRaw.uid}/plan`, planToSet, env);
      await fbAdminPut(`pending_requests/${requestId}/status`, "approved", env);
      await fbAdminPut(`pending_requests/${requestId}/reviewedAt`, Date.now(), env);
      await fbAdminPut(`pending_requests/${requestId}/reviewedBy`, admin.role, env);
      if (ctx) ctx.waitUntil(logAdminActivity(env, "subscription_approved", { requestId, uid: reqRaw.uid, plan: planToSet }));
    } else {
      const reason = typeof body.reason === "string" ? body.reason.slice(0, 500) : "";
      await fbAdminPut(`pending_requests/${requestId}/status`, "rejected", env);
      await fbAdminPut(`pending_requests/${requestId}/reviewedAt`, Date.now(), env);
      await fbAdminPut(`pending_requests/${requestId}/reviewedBy`, admin.role, env);
      if (reason) await fbAdminPut(`pending_requests/${requestId}/rejectReason`, reason, env);
      if (ctx) ctx.waitUntil(logAdminActivity(env, "subscription_rejected", { requestId, uid: reqRaw.uid || null, reason }));
    }

    return json({ ok: true }, 200, corsHeaders);
  } catch (e) {
    console.error("handleAdminReviewSubscriptionRequest فشل:", e);
    return json({ error: "internal_error" }, 500, corsHeaders);
  }
}

// ================================================================
// ============== شات مباشر (أدمن ⇄ مستخدم) ==============
// ================================================================
// بيتخزن في Firebase تحت chat_messages/{uid}/{messageId}. كل رسالة:
// { from: "admin" | "user", text, createdAt, readByAdmin, readByUser }.
// "uid" هنا هو uid المستخدم صاحب المحادثة (مفيش تعدد محادثات لكل مستخدم -
// محادثة واحدة بينه وبين الدعم/الأدمن).

function makeChatMessageId() {
  return `${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}

// بيحدد هل الطلب جاي من الأدمن (X-Admin-Token) ولا من مستخدم عادي (Firebase
// Bearer token)، ويرجّع uid المحادثة المطلوبة + دور المرسل. لو الطلب أدمن
// لازم يبعت "uid" صريح في الـ body يحدد مع مين المحادثة.
async function resolveChatIdentity(request, env, body) {
  const adminTokenHeader = request.headers.get("X-Admin-Token");
  if (adminTokenHeader) {
    const admin = await requireAdminSession(request, env);
    if (!admin.ok) return { ok: false, error: admin.error, status: 401 };
    const targetUid = typeof body?.uid === "string" ? body.uid.trim() : "";
    if (!targetUid) return { ok: false, error: "uid_required", status: 400 };
    return { ok: true, role: "admin", adminRole: admin.role, uid: targetUid };
  }
  const auth = await verifyFirebaseToken(request, env);
  if (!auth.ok) return { ok: false, error: auth.error, status: 401 };
  return { ok: true, role: "user", uid: auth.uid };
}

// ---- إرسال رسالة (من الأدمن لمستخدم، أو من المستخدم لصفحة الدعم) ----
async function handleChatSend(request, env, corsHeaders, ctx) {
  if (!env.FIREBASE_SERVICE_ACCOUNT_JSON) {
    return json({ error: "firebase_service_account_not_configured" }, 500, corsHeaders);
  }
  let body;
  try {
    body = await request.json();
  } catch (e) {
    return json({ error: "invalid_json" }, 400, corsHeaders);
  }

  const identity = await resolveChatIdentity(request, env, body);
  if (!identity.ok) return json({ error: identity.error }, identity.status, corsHeaders);
  if (identity.role === "admin" && identity.adminRole !== "superadmin") {
    return json({ error: "forbidden_role" }, 403, corsHeaders);
  }

  const text = typeof body?.text === "string" ? body.text.trim() : "";
  if (!text) return json({ error: "text_required" }, 400, corsHeaders);
  if (text.length > 2000) return json({ error: "text_too_long" }, 400, corsHeaders);

  const message = {
    from: identity.role, // "admin" أو "user"
    text,
    createdAt: Date.now(),
    readByAdmin: identity.role === "admin",
    readByUser: identity.role === "user"
  };

  try {
    const messageId = makeChatMessageId();
    await fbAdminPut(`chat_messages/${identity.uid}/${messageId}`, message, env);
    if (identity.role === "admin" && ctx) {
      ctx.waitUntil(logAdminActivity(env, "chat_message_sent", { uid: identity.uid }));
    }
    return json({ ok: true, id: messageId }, 200, corsHeaders);
  } catch (e) {
    console.error("handleChatSend فشل:", e);
    return json({ error: "internal_error" }, 500, corsHeaders);
  }
}

// ---- جلب محادثة كاملة (الأدمن بيحدد uid في الـ body، المستخدم بيجيب محادثته هو بس) ----
//      وبيعلّم تلقائياً كل رسائل الطرف التاني كـ"مقروءة" أول ما تتجاب هنا.
async function handleChatPoll(request, env, corsHeaders) {
  if (!env.FIREBASE_SERVICE_ACCOUNT_JSON) {
    return json({ error: "firebase_service_account_not_configured" }, 500, corsHeaders);
  }
  let body;
  try {
    body = await request.json();
  } catch (e) {
    body = {};
  }

  const identity = await resolveChatIdentity(request, env, body);
  if (!identity.ok) return json({ error: identity.error }, identity.status, corsHeaders);

  try {
    const raw = (await fbAdminGet(`chat_messages/${identity.uid}`, env)) || {};
    const messages = Object.entries(raw)
      .map(([id, m]) => ({ id, ...(m || {}) }))
      .sort((a, b) => (a.createdAt || 0) - (b.createdAt || 0));

    // نعلّم رسائل الطرف التاني كمقروءة بس لو الطرف اللي بيسأل قايل صراحة إن
    // الشات فاتح عنده دلوقتي (markRead: true). ده مهم جدًا لأن البولينج الخلفي
    // (كل 20 ثانية والشات مقفول) كان بيندي الـ request ده برضه، فكان بيعلّم كل
    // حاجة "مقروءة" فورًا حتى لو المستخدم/الأدمن مفتحش الشات أصلاً — وده اللي
    // كان بيخلي عداد الرسايل الغير مقروءة يفضل صفر دايمًا.
    const shouldMarkRead = body?.markRead === true;
    const readField = identity.role === "admin" ? "readByAdmin" : "readByUser";
    const otherFrom = identity.role === "admin" ? "user" : "admin";
    const unreadIds = shouldMarkRead
      ? messages.filter(m => m.from === otherFrom && !m[readField]).map(m => m.id)
      : [];
    if (unreadIds.length) {
      await Promise.all(
        unreadIds.map(id => fbAdminPut(`chat_messages/${identity.uid}/${id}/${readField}`, true, env).catch(() => {}))
      );
      unreadIds.forEach(id => {
        const m = messages.find(x => x.id === id);
        if (m) m[readField] = true;
      });
    }

    return json({ ok: true, messages }, 200, corsHeaders);
  } catch (e) {
    console.error("handleChatPoll فشل:", e);
    return json({ error: "internal_error" }, 500, corsHeaders);
  }
}

// ---- إحصائيات لوحة التحكم: عدد الأونلاين، مين هما، توزيع الباقات ----
async function handleAdminStats(request, env, corsHeaders) {
  const admin = await requireAdminSession(request, env);
  if (!admin.ok) return json({ error: admin.error }, 401, corsHeaders);
  if (!env.FIREBASE_SERVICE_ACCOUNT_JSON) {
    return json({ error: "firebase_service_account_not_configured" }, 500, corsHeaders);
  }

  try {
    const usersRaw = (await fbAdminGet("users", env)) || {};
    const now = Date.now();

    const planCounts = {};
    for (const key of Object.keys(PLAN_LIMITS)) planCounts[key] = 0;

    let onlineCount = 0;
    let suspendedCount = 0;
    const onlineUsers = [];

    for (const [uid, raw] of Object.entries(usersRaw)) {
      const u = raw || {};
      const planName = PLAN_LIMITS.hasOwnProperty(u.plan) ? u.plan : "مجاني";
      planCounts[planName] = (planCounts[planName] || 0) + 1;

      if (u.suspended === true) suspendedCount++;

      if (typeof u.lastSeen === "number" && now - u.lastSeen < ONLINE_THRESHOLD_MS) {
        onlineCount++;
        onlineUsers.push({ uid, email: u.email || null, displayName: u.displayName || u.name || null });
      }
    }

    return json(
      {
        ok: true,
        totalUsers: Object.keys(usersRaw).length,
        onlineCount,
        onlineUsers,
        suspendedCount,
        planCounts // مثال: يوضحلك كام واحد مشترك في كل باقة (يعني أكتر باقة مبيعًا)
      },
      200,
      corsHeaders
    );
  } catch (e) {
    console.error("handleAdminStats فشل:", e);
    return json({ error: "internal_error" }, 500, corsHeaders);
  }
}

// ---- أي عملية على مستخدم بعينه: إيقاف / تفعيل / تغيير باقة / سقف مخصّص / تصفير الاستخدام ----
const ADMIN_VALID_ACTIONS = new Set([
  "suspend",
  "activate",
  "setPlan",
  "setCustomLimit",
  "resetUsage",
  "setPermissions",
  "setNote",
  "delete"
]);

async function handleAdminUserAction(request, env, corsHeaders, ctx) {
  const admin = await requireSuperAdmin(request, env);
  if (!admin.ok) return json({ error: admin.error }, admin.error === "forbidden_role" ? 403 : 401, corsHeaders);
  if (!env.FIREBASE_SERVICE_ACCOUNT_JSON) {
    return json({ error: "firebase_service_account_not_configured" }, 500, corsHeaders);
  }

  let body;
  try {
    body = await request.json();
  } catch (e) {
    return json({ error: "invalid_json" }, 400, corsHeaders);
  }

  const uid = typeof body?.uid === "string" ? body.uid.trim() : "";
  const action = typeof body?.action === "string" ? body.action : "";
  if (!uid || !ADMIN_VALID_ACTIONS.has(action)) {
    return json({ error: "invalid_request" }, 400, corsHeaders);
  }

  let path, value;
  if (action === "suspend") {
    path = `users/${uid}/suspended`;
    value = true;
  } else if (action === "activate") {
    path = `users/${uid}/suspended`;
    value = false;
  } else if (action === "setPlan") {
    if (!PLAN_LIMITS.hasOwnProperty(body.value)) {
      return json({ error: "invalid_plan" }, 400, corsHeaders);
    }
    path = `users/${uid}/plan`;
    value = body.value;
  } else if (action === "setCustomLimit") {
    // ابعت value: رقم (لكل باكيدج مخصّص لليوزر ده) أو null عشان ترجّعه لسقف الباقة العادي
    if (body.value === null) {
      value = null;
    } else {
      const n = Number(body.value);
      if (!Number.isFinite(n) || n < 0) {
        return json({ error: "invalid_limit" }, 400, corsHeaders);
      }
      value = n;
    }
    path = `users/${uid}/customLimit`;
  } else if (action === "resetUsage") {
    path = `users/${uid}/usage/${getCurrentMonthKey()}`;
    value = 0;
  } else if (action === "setPermissions") {
    // ابعت value: object فيه أي صلاحيات إضافية عايزها للمستخدم ده بالذات (مستقلة
    // تمامًا عن باقته)، مثلاً { unlimitedUsage: true, moderator: false, ... }
    if (typeof body.value !== "object" || body.value === null || Array.isArray(body.value)) {
      return json({ error: "invalid_permissions" }, 400, corsHeaders);
    }
    // تنضيف بسيط: بس قيم boolean مسموحة عشان مايتخزنش أي حاجة غريبة في الداتابيز
    const cleanPerms = {};
    for (const [k, v] of Object.entries(body.value)) {
      if (typeof k === "string" && k.length <= 64) cleanPerms[k] = v === true;
    }
    path = `users/${uid}/permissions`;
    value = cleanPerms;
  } else if (action === "setNote") {
    // ملاحظة إدارية داخلية بس - مش بتظهر للمستخدم نفسه في أي مكان
    const note = typeof body.value === "string" ? body.value.slice(0, 2000) : "";
    path = `users/${uid}/adminNote`;
    value = note;
  } else if (action === "delete") {
    // مسح فعلي بالكامل: النود بتاع اليوزر ده (users/{uid}) بيتشال تمامًا من
    // قاعدة البيانات - مفيش اسم/صورة/نقط/باقة/سجل استخدام ولا أي أثر ليه فيها.
    // ملحوظة مهمة برضه: حساب الدخول نفسه (Firebase Auth: الإيميل/الباسورد أو
    // حساب جوجل) بيفضل موجود تقنيًا برة قاعدة البيانات دي، لأن حذفه فعليًا
    // محتاج مفتاح Service Account منفصل مش متظبط عندك دلوقتي. يعني لو نفس
    // الشخص سجّل دخول تاني بنفس الحساب هيدخل كمستخدم جديد تمامًا (باقة مجانية
    // من الصفر) لأن مفيش أي أثر ليه في الداتابيز يمنعه.
    path = `users/${uid}`;
    value = null;
  }

  try {
    await fbAdminPut(path, value, env);
  } catch (e) {
    console.error("handleAdminUserAction فشل:", e);
    return json({ error: "firebase_write_failed" }, 502, corsHeaders);
  }

  if (ctx) ctx.waitUntil(logAdminActivity(env, "admin_user_action", { uid, action, value }));
  return json({ ok: true }, 200, corsHeaders);
}

// ---- الأدمن بيبعت رابط تغيير باسورد لإيميل مستخدم معيّن ----
async function handleAdminSendPasswordReset(request, env, corsHeaders, ctx) {
  const admin = await requireSuperAdmin(request, env);
  if (!admin.ok) return json({ error: admin.error }, admin.error === "forbidden_role" ? 403 : 401, corsHeaders);

  let body;
  try {
    body = await request.json();
  } catch (e) {
    return json({ error: "invalid_json" }, 400, corsHeaders);
  }

  const email = typeof body?.email === "string" ? body.email.trim() : "";
  if (!email || !email.includes("@")) {
    return json({ error: "invalid_email" }, 400, corsHeaders);
  }

  const sent = await sendPasswordResetEmail(email, env);
  if (!sent.ok) return json({ error: sent.error }, 502, corsHeaders);

  if (ctx) ctx.waitUntil(logAdminActivity(env, "admin_password_reset_sent", { email }));
  return json({ ok: true }, 200, corsHeaders);
}

// ---- سجل نشاط الأدمن: عرض آخر العمليات (تسجيل دخول/إيقاف/تعديل باقة...) ----
// متاح لأي جلسة أدمن (superadmin أو viewer) — مجرد عرض، مفيش تعديل هنا.
async function handleAdminActivityLog(request, env, corsHeaders) {
  const admin = await requireAdminSession(request, env);
  if (!admin.ok) return json({ error: admin.error }, 401, corsHeaders);
  if (!env.FIREBASE_SERVICE_ACCOUNT_JSON) {
    return json({ error: "firebase_service_account_not_configured" }, 500, corsHeaders);
  }

  try {
    const logsRaw = (await fbAdminGet("adminLogs", env)) || {};
    const logs = Object.entries(logsRaw)
      .map(([id, entry]) => ({ id, ...(entry || {}) }))
      .sort((a, b) => (b.time || "").localeCompare(a.time || ""))
      .slice(0, 200); // آخر 200 عملية بس، عشان الرد يفضل خفيف وسريع

    return json({ ok: true, logs }, 200, corsHeaders);
  } catch (e) {
    console.error("handleAdminActivityLog فشل:", e);
    return json({ error: "internal_error" }, 500, corsHeaders);
  }
}

// ---- نسخة احتياطية فورية: بتنزّل كل قاعدة البيانات كملف JSON للأدمن نفسه ----
// superadmin بس (مش viewer) — عشان دي بيانات كاملة حساسة.
async function handleAdminBackupNow(request, env, corsHeaders, ctx) {
  const admin = await requireSuperAdmin(request, env);
  if (!admin.ok) return json({ error: admin.error }, admin.error === "forbidden_role" ? 403 : 401, corsHeaders);
  if (!env.FIREBASE_SERVICE_ACCOUNT_JSON) {
    return json({ error: "firebase_service_account_not_configured" }, 500, corsHeaders);
  }

  try {
    const token = await getFirebaseAccessToken(env);
    const res = await fetch(
      `${FIREBASE_DB_URL}/.json?access_token=${encodeURIComponent(token)}`
    );
    if (!res.ok) throw new Error("firebase_get_failed:" + res.status);
    const fullData = await res.json();

    if (ctx) ctx.waitUntil(logAdminActivity(env, "admin_backup_download", { ip: getClientIp(request) }));

    return json(
      { ok: true, generatedAt: new Date().toISOString(), data: fullData },
      200,
      corsHeaders
    );
  } catch (e) {
    console.error("handleAdminBackupNow فشل:", e);
    return json({ error: "backup_failed" }, 502, corsHeaders);
  }
}

// ---- بتتنادى تلقائيًا من الـ Cron Trigger (شوف scheduled() فوق) ----
// لو معندكش Cron Trigger مضبوط في wrangler.toml، الدالة دي ببساطة مش هتتنادى
// أبدًا ومفيش أي تأثير على أي حاجة تانية.
async function runScheduledBackup(env) {
  if (!env.FIREBASE_SERVICE_ACCOUNT_JSON) {
    console.warn("runScheduledBackup: FIREBASE_SERVICE_ACCOUNT_JSON مش متظبط، اتلغى.");
    return;
  }
  try {
    const token = await getFirebaseAccessToken(env);
    const res = await fetch(
      `${FIREBASE_DB_URL}/.json?access_token=${encodeURIComponent(token)}`
    );
    if (!res.ok) throw new Error("firebase_get_failed:" + res.status);
    const fullData = await res.json();
    const sizeKb = Math.round(JSON.stringify(fullData).length / 1024);

    // لو ضبّطت BACKUP_WEBHOOK كـ secret، ابعتله تنبيه (ومحتوى النسخة لو صغير
    // بما يكفي، وإلا بس تنبيه إنها اتاخدت وحجمها). الأفضل لقاعدة بيانات كبيرة
    // إنك تربط Webhook بيرفع الملف فعليًا لتخزين خارجي (R2/S3) بدل ما يوصف هنا.
    if (env.BACKUP_WEBHOOK) {
      const payload = { time: new Date().toISOString(), sizeKb };
      if (sizeKb <= 512) payload.data = fullData; // ميتبعتش الملف كامل لو كبير
      await fetch(env.BACKUP_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      }).catch(() => {});
    }

    await logAdminActivity(env, "scheduled_backup", { sizeKb });
  } catch (e) {
    console.warn("runScheduledBackup فشل:", e);
  }
}

// ---- أي مستخدم عادي (مش أدمن) نسي الباسورد بتاعه ----
async function handleForgotPassword(request, env, corsHeaders) {
  let body;
  try {
    body = await request.json();
  } catch (e) {
    return json({ error: "invalid_json" }, 400, corsHeaders);
  }

  const email = typeof body?.email === "string" ? body.email.trim() : "";
  if (!email || !email.includes("@")) {
    return json({ error: "invalid_email" }, 400, corsHeaders);
  }

  // سقف بسيط لكل IP عشان محدش يستخدم الفورم ده لقصف إيميلات ناس تانية
  const ip = getClientIp(request);
  if (env.RATE_LIMIT_KV) {
    const key = `forgotPw:${ip}`;
    let count = 0;
    try {
      count = parseInt((await env.RATE_LIMIT_KV.get(key)) || "0", 10);
    } catch (e) {}
    if (count >= 5) return json({ error: "too_many_attempts" }, 429, corsHeaders);
    try {
      await env.RATE_LIMIT_KV.put(key, String(count + 1), { expirationTtl: 60 * 60 });
    } catch (e) {}
  }

  await sendPasswordResetEmail(email, env);

  // بنرجّع "ok: true" دايمًا حتى لو الإيميل مش مسجّل عندنا أصلاً — عشان محدش
  // يقدر يستخدم رسالة الخطأ عشان يعرف إيه الإيميلات المسجّلة عندنا (user
  // enumeration). لو حصل خطأ حقيقي (مفتاح مش متظبط...) بيتسجل في اللوج بس.
  return json({ ok: true }, 200, corsHeaders);
}

async function sendPasswordResetEmail(email, env) {
  if (!env.FIREBASE_WEB_API_KEY) {
    console.warn("FIREBASE_WEB_API_KEY مش متظبط — مينفعش نبعت إيميل استعادة باسورد");
    return { ok: false, error: "reset_email_not_configured" };
  }
  try {
    const res = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${encodeURIComponent(
        env.FIREBASE_WEB_API_KEY
      )}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ requestType: "PASSWORD_RESET", email })
      }
    );
    if (!res.ok) {
      const errText = await res.text().catch(() => "");
      console.warn("sendOobCode فشل:", errText);
      // "EMAIL_NOT_FOUND" من جوجل طبيعي جدًا لو حد كتب إيميل مش مسجّل —
      // مش بنعتبره فشل حقيقي عشان مانكشفش للمستخدم إن الإيميل ده مسجّل أو لأ
      if (errText.includes("EMAIL_NOT_FOUND")) return { ok: true };
      return { ok: false, error: "reset_send_failed" };
    }
    return { ok: true };
  } catch (e) {
    console.error("sendPasswordResetEmail فشل:", e);
    return { ok: false, error: "internal_error" };
  }
}

// ---- نبضة "أنا لسه أونلاين" — الواجهة تناديها كل دقيقة تقريبًا وهي فاتحة ----
async function handleOnlinePing(request, env, corsHeaders) {
  const auth = await verifyFirebaseToken(request, env);
  if (!auth.ok) return json({ error: auth.error }, 401, corsHeaders);

  const authQS = `auth=${encodeURIComponent(auth.idToken)}`;
  try {
    await fetch(`${FIREBASE_DB_URL}/users/${auth.uid}/lastSeen.json?${authQS}`, {
      method: "PUT",
      body: JSON.stringify(Date.now())
    });
  } catch (e) {
    console.warn("handleOnlinePing فشل:", e);
  }
  return json({ ok: true }, 200, corsHeaders);
}
