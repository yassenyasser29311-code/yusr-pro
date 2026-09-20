

const ALLOWED_ORIGINS = [
  "https://yusr-pro.vercel.app",
  "http://localhost:2435" // للتجربة المحلية بس — شيله وقت ما توديه production لو حابب
];

const FIREBASE_PROJECT_ID = "yusr-d054e";
const FIREBASE_DB_URL = "https://yusr-d054e-default-rtdb.firebaseio.com";
const JWKS_URL = "https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com";

const PLAN_LIMITS = {
  "مجاني": 5,
  "الأساسية": 25,
  "الاحترافية": 150,
  "النخبة": Infinity,
  "السنوية": 150
};

const RATE_LIMITS = {
  groqChat: { max: 20, windowSeconds: 60 },
  groqTranscribe: { max: 25, windowSeconds: 60 },
  edgeTtsSpeak: { max: 20, windowSeconds: 60 }
};

const RECAPTCHA_MIN_SCORE = 0.5;


const ADMIN_LOGIN_MAX_FAILS = 5;
const ADMIN_LOGIN_LOCKOUT_SECONDS = 15 * 60; // 15 دقيقة

const ADMIN_PENDING_TTL_SECONDS = 5 * 60; // 5 دقايق

const ADMIN_SESSION_TTL_SECONDS = 12 * 60 * 60; // 12 ساعة


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


export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const origin = request.headers.get("Origin") || "";
    const originAllowed = ALLOWED_ORIGINS.includes(origin);
    const corsHeaders = buildCorsHeaders(origin, originAllowed);

    if (request.method === "OPTIONS") {
      if (!originAllowed) return new Response(null, { status: 403 });
      return new Response(null, { headers: corsHeaders });
    }

    if (!originAllowed) {
      return json({ error: "origin_not_allowed" }, 403, corsHeaders);
    }

    if (request.method !== "POST") {
      return json({ error: "method_not_allowed" }, 405, corsHeaders);
    }

    if (url.pathname === "/adminLogin") {
      return handleAdminLogin(request, env, corsHeaders);
    }
    if (url.pathname === "/adminConfirm") {
      return handleAdminConfirm(request, env, corsHeaders, ctx);
    }
    if (url.pathname === "/adminMe") {
      const admin = await requireAdminSession(request, env);
      if (!admin.ok) return json({ error: admin.error }, 401, corsHeaders);
      return json({ ok: true, role: admin.role, name: admin.name }, 200, corsHeaders);
    }
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
    if (url.pathname === "/adminListFeedback") {
      return handleAdminListFeedback(request, env, corsHeaders);
    }
    if (url.pathname === "/adminFeedbackAction") {
      return handleAdminFeedbackAction(request, env, corsHeaders, ctx);
    }
    if (url.pathname === "/adminBroadcast") {
      return handleAdminBroadcast(request, env, corsHeaders, ctx);
    }
    if (url.pathname === "/adminStatsHistory") {
      return handleAdminStatsHistory(request, env, corsHeaders);
    }
    if (url.pathname === "/adminRecordStatsNow") {
      return handleAdminRecordStatsNow(request, env, corsHeaders, ctx);
    }
    if (url.pathname === "/adminListAdmins") {
      return handleAdminListAdmins(request, env, corsHeaders);
    }
    if (url.pathname === "/adminCreateAdmin") {
      return handleAdminCreateAdmin(request, env, corsHeaders, ctx);
    }
    if (url.pathname === "/adminDeleteAdmin") {
      return handleAdminDeleteAdmin(request, env, corsHeaders, ctx);
    }
    if (url.pathname === "/adminListChats") {
      return handleAdminListChats(request, env, corsHeaders);
    }

    if (url.pathname === "/chatSend") {
      return handleChatSend(request, env, corsHeaders, ctx);
    }
    if (url.pathname === "/chatPoll") {
      return handleChatPoll(request, env, corsHeaders);
    }

    if (url.pathname === "/forgotPassword") {
      return handleForgotPassword(request, env, corsHeaders);
    }
    if (url.pathname === "/verifyCaptcha") {
      return handleVerifyCaptcha(request, env, corsHeaders);
    }
    if (url.pathname === "/onlinePing") {
      return handleOnlinePing(request, env, corsHeaders);
    }
    if (url.pathname === "/logUserActivity") {
      return handleLogUserActivity(request, env, corsHeaders);
    }
    if (url.pathname === "/adminUserActivity") {
      return handleAdminUserActivity(request, env, corsHeaders);
    }

    if (url.pathname === "/logClientError") {
      return handleLogClientError(request, env, corsHeaders);
    }

    let toolName;
    if (url.pathname === "/groqChat") toolName = "groqChat";
    else if (url.pathname === "/groqTranscribe") toolName = "groqTranscribe";
    else if (url.pathname === "/edgeTtsSpeak") toolName = "edgeTtsSpeak";
    else return json({ error: "not_found" }, 404, corsHeaders);

    try {
      const auth = await verifyFirebaseToken(request, env);
      if (!auth.ok) {
        return json({ error: auth.error }, 401, corsHeaders);
      }
      const { uid, idToken } = auth;

      const rl = await checkRateLimit(env, uid, toolName);
      if (!rl.ok) {
        return json({ error: "rate_limited" }, 429, corsHeaders);
      }

      const quota = toolName === "edgeTtsSpeak"
        ? { ok: true, monthKey: null }
        : await checkPlanUsage(uid, idToken);
      if (!quota.ok) {
        return json({ error: quota.error || "usage_limit_reached" }, 403, corsHeaders);
      }

      let response;
      if (toolName === "groqChat") {
        response = await handleGroqChat(request, env, corsHeaders);
      } else if (toolName === "groqTranscribe") {
        response = await handleGroqTranscribe(request, env, corsHeaders);
      } else {
        response = await handleEdgeTts(request, env, corsHeaders);
      }

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

  async scheduled(event, env, ctx) {
    ctx.waitUntil(runScheduledBackup(env));
    ctx.waitUntil(recordDailyStats(env));
  }
};


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
  }
  return { ok: true };
}


async function checkPlanUsage(uid, idToken) {
  const monthKey = getCurrentMonthKey();
  const authQS = `auth=${encodeURIComponent(idToken)}`;

  let userRaw = null;
  try {
    const res = await fetch(`${FIREBASE_DB_URL}/users/${uid}.json?${authQS}`);
    userRaw = res.ok ? await res.json() : null;
  } catch (e) {
    return { ok: false };
  }
  if (!userRaw || typeof userRaw !== "object") userRaw = {};

  if (userRaw.suspended === true) {
    return { ok: false, error: "account_suspended" };
  }

  if (userRaw.permissions && userRaw.permissions.unlimitedUsage === true) {
    return { ok: true, monthKey, currentCount: 0 };
  }

  const planName = PLAN_LIMITS.hasOwnProperty(userRaw.plan) ? userRaw.plan : "مجاني";
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
  const MAX_IMAGE_DATA_URL_LEN = 1_800_000;
  const MAX_IMAGES_PER_REQUEST = 4;
  let totalChars = 0;
  let imageCount = 0;
  let hasImage = false; // بيبقى true لو أي رسالة فيها صورة - محتاجينه عشان نختار موديل يدعم الصور بدل موديل نصي بس
  for (const m of messages) {
    if (!m || typeof m !== "object") return json({ error: "invalid_message" }, 400, corsHeaders);
    if (!ALLOWED_ROLES.has(m.role)) return json({ error: "invalid_role" }, 400, corsHeaders);

    if (typeof m.content === "string") {
      if (m.content.length === 0) return json({ error: "invalid_content" }, 400, corsHeaders);
      if (m.content.length > 8000) return json({ error: "message_too_long" }, 400, corsHeaders);
      totalChars += m.content.length;
      continue;
    }

    if (Array.isArray(m.content)) {
      if (m.content.length === 0 || m.content.length > 4) {
        return json({ error: "invalid_content" }, 400, corsHeaders);
      }
      for (const part of m.content) {
        if (!part || typeof part !== "object") return json({ error: "invalid_content" }, 400, corsHeaders);
        if (part.type === "text") {
          if (typeof part.text !== "string" || part.text.length > 8000) {
            return json({ error: "invalid_content" }, 400, corsHeaders);
          }
          totalChars += part.text.length;
        } else if (part.type === "image_url") {
          const url = part.image_url && part.image_url.url;
          if (typeof url !== "string" || !url.startsWith("data:image/") || url.length > MAX_IMAGE_DATA_URL_LEN) {
            return json({ error: "invalid_image" }, 400, corsHeaders);
          }
          imageCount++;
          hasImage = true;
          if (imageCount > MAX_IMAGES_PER_REQUEST) return json({ error: "too_many_images" }, 400, corsHeaders);
        } else {
          return json({ error: "invalid_content" }, 400, corsHeaders);
        }
      }
      continue;
    }

    return json({ error: "invalid_content" }, 400, corsHeaders);
  }
  if (totalChars > 40000) return json({ error: "conversation_too_long" }, 400, corsHeaders);

  const cleanMessages = messages.map(m => ({ role: m.role, content: m.content }));

  const GROQ_TEXT_MODEL = "openai/gpt-oss-120b";
  const GROQ_VISION_MODEL = "qwen/qwen3.8-27b";
  const providerChain = [
    {
      name: "groq",
      baseUrl: "https://api.groq.com/openai/v1/chat/completions",
      apiKey: env.GROQ_API_KEY,
      model: hasImage ? GROQ_VISION_MODEL : GROQ_TEXT_MODEL
    },
    {
      name: "openai",
      baseUrl: "https://api.openai.com/v1/chat/completions",
      apiKey: env.OPENAI_API_KEY,
      model: env.OPENAI_MODEL || "gpt-4o-mini"
    },
    {
      name: "gemini",
      baseUrl: "https://generativelanguage.googleapis.com/v1beta/openai/chat/completions",
      apiKey: env.GEMINI_API_KEY,
      model: env.GEMINI_MODEL || "gemini-3.6-flash"
    },
    {
      name: "fallback",
      baseUrl: env.FALLBACK_BASE_URL,
      apiKey: env.FALLBACK_API_KEY,
      model: env.FALLBACK_MODEL
    }
  ];

  let lastReason = "no_provider_configured";
  const attemptLog = [];
  for (const provider of providerChain) {
    if (!provider.apiKey || !provider.baseUrl || !provider.model) {
      attemptLog.push({ name: provider.name, skipped: true, hasKey: !!provider.apiKey });
      continue; // مش متظبط، اتخطاه
    }
    // طلبات الصور: موديل Qwen على Groq بيدخل في تكرار لا نهائي (ههههه...) مع temperature واطية، فبنستخدم
    // القيم اللي Groq نفسه بيوصي بيها في الدوكيومنتيشن بتاع الرؤية (temperature=1, top_p=1)، وبنحط سقف لطول الرد. (سقف Groq هنا 700 لأن الخطة الحالية على موديل الصور محدودة بـ 1000 توكن خرج في الدقيقة.)
    const sampling = !hasImage ? undefined
      : (provider.name === "groq" ? { temperature: 1, topP: 1, maxTokens: 700 } : { maxTokens: 4096 });
    const attempt = await tryChatProvider(provider.baseUrl, provider.apiKey, provider.model, cleanMessages, sampling);
    if (attempt.ok) {
      if (provider.name !== "groq") {
        console.warn(`تم الرد عن طريق مزوّد بديل (${provider.name}) بعد فشل اللي قبله`);
      }
      return json({ content: attempt.content, provider: provider.name }, 200, corsHeaders);
    }
    lastReason = attempt.reason;
    attemptLog.push({ name: provider.name, skipped: false, reason: attempt.reason });
    console.warn(`مزوّد ${provider.name} فشل:`, attempt.reason);

    // لو آخر رسالة من المستخدم نص عادي (سؤال متابعة بعد صورة قديمة في المحادثة) وموديل الصور على Groq فشل
    // (غالباً حد التوكنز/دقيقة في الخطة)، بنعيد المحاولة على موديل النص بتاع Groq من غير الصور القديمة،
    // بدل ما نروح لمزوّدين تانيين ممكن حسابهم واقف. لو الرسالة الحالية فيها صورة مش بنعمل كده عشان الرد مايبقاش تخمين.
    if (provider.name === "groq" && hasImage && !lastUserMessageHasImage(cleanMessages)) {
      const retry = await tryChatProvider(provider.baseUrl, provider.apiKey, GROQ_TEXT_MODEL, stripImagesFromMessages(cleanMessages));
      if (retry.ok) {
        return json({ content: retry.content, provider: "groq" }, 200, corsHeaders);
      }
      lastReason = retry.reason;
      attemptLog.push({ name: "groq-text-retry", skipped: false, reason: retry.reason });
      console.warn("مزوّد groq (موديل النص بدون صور) فشل:", retry.reason);
    }
  }

  return json({ error: "groq_error", detail: lastReason, attempted: attemptLog }, 502, corsHeaders);
}

function lastUserMessageHasImage(msgs) {
  for (let i = msgs.length - 1; i >= 0; i--) {
    if (msgs[i].role !== "user") continue;
    const c = msgs[i].content;
    return Array.isArray(c) && c.some(part => part && part.type === "image_url");
  }
  return false;
}

// بيحوّل الرسايل اللي فيها صور لنص عادي (بيشيل الصورة ويسيب سطر ينبّه الموديل إن فيه صورة كانت هنا).
function stripImagesFromMessages(msgs) {
  return msgs.map(m => {
    if (!Array.isArray(m.content)) return m;
    const text = m.content.filter(p => p && p.type === "text").map(p => p.text).join("\n");
    return {
      role: m.role,
      content: (text ? text + "\n" : "") + "[المستخدم كان بعت صورة هنا في المحادثة، بس مش متاحة دلوقتي — اعتمد على وصفك ليها في ردودك السابقة، ولو السؤال محتاج تشوف الصورة تاني قوله يبعتها من جديد.]"
    };
  });
}

// بيكشف الردود "العالقة" اللي معظمها نفس الحرف/المقطع بيتكرر (زي ههههه... أو ااااا...) عشان نعتبرها فشل ونجرّب المزوّد اللي بعده.
function looksDegenerate(text) {
  const t = String(text || "").replace(/\s+/g, "");
  if (t.length < 40) return false;
  let repeated = 0;
  const re = /(.{1,6}?)\1{14,}/gu;
  let m;
  while ((m = re.exec(t)) !== null) repeated += m[0].length;
  return repeated / t.length > 0.5;
}

async function tryChatProvider(baseUrl, apiKey, model, cleanMessages, sampling) {
  if (!apiKey) return { ok: false, reason: "no_api_key" };
  let r;
  try {
    r = await fetch(baseUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model,
        messages: cleanMessages,
        temperature: (sampling && sampling.temperature !== undefined) ? sampling.temperature : 0.4,
        ...(sampling && sampling.topP !== undefined ? { top_p: sampling.topP } : {}),
        ...(sampling && sampling.maxTokens ? { max_tokens: sampling.maxTokens } : {})
      })
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
  const cleanedContent = stripThinkTags(data.choices[0].message.content);
  if (typeof cleanedContent !== "string" || cleanedContent.trim().length === 0) {
    // مهم: لو رجع رد فاضي، متعتبروش نجاح - لأن الرد الفاضي ده بيتحفظ في سجل
    // المحادثة وبعدين يفشّل أي رسالة جايه بعده (invalid_content). امنعه من الأول
    // وجرّب المزوّد اللي بعده بدل ما نرجّع رد فاضي للمستخدم.
    return { ok: false, reason: "empty_content" };
  }
  if (looksDegenerate(cleanedContent)) {
    return { ok: false, reason: "degenerate_output" };
  }
  return { ok: true, content: cleanedContent };
}

function stripThinkTags(text) {
  if (typeof text !== "string") return text;
  return text
    .replace(/<think>[\s\S]*?<\/think>/gi, "")
    .replace(/<think>[\s\S]*$/gi, "")
    .trim();
}


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

function timingSafeEqual(a, b) {
  const aBytes = new TextEncoder().encode(String(a));
  const bBytes = new TextEncoder().encode(String(b));
  if (aBytes.length !== bBytes.length) {
    let dummy = 0;
    for (let i = 0; i < aBytes.length; i++) dummy |= aBytes[i] ^ (bBytes[i % bBytes.length] || 0);
    return false;
  }
  let diff = 0;
  for (let i = 0; i < aBytes.length; i++) diff |= aBytes[i] ^ bBytes[i];
  return diff === 0;
}

async function hashPassword(password, saltB64) {
  const enc = new TextEncoder();
  const salt = saltB64
    ? base64UrlDecodeToBytes(saltB64) // نعيد استخدام دالة فك الـ base64url الموجودة فوق أصلاً
    : crypto.getRandomValues(new Uint8Array(16));
  const keyMaterial = await crypto.subtle.importKey("raw", enc.encode(password), "PBKDF2", false, ["deriveBits"]);
  const bits = await crypto.subtle.deriveBits(
    { name: "PBKDF2", salt, iterations: 100000, hash: "SHA-256" },
    keyMaterial,
    256
  );
  return {
    salt: saltB64 || base64UrlEncodeBytes(salt),
    hash: base64UrlEncodeBytes(new Uint8Array(bits))
  };
}
async function verifyPassword(password, saltB64, expectedHashB64) {
  try {
    const { hash } = await hashPassword(password, saltB64);
    return timingSafeEqual(hash, expectedHashB64);
  } catch (e) {
    return false;
  }
}
async function findDynamicAdminByUsername(username, env) {
  const all = (await fbAdminGet("adminAccounts", env)) || {};
  for (const [id, acc] of Object.entries(all)) {
    if (acc && timingSafeEqual(acc.username || "", username)) {
      return { id, ...acc };
    }
  }
  return null;
}

async function handleAdminListAdmins(request, env, corsHeaders) {
  const admin = await requireSuperAdmin(request, env);
  if (!admin.ok) return json({ error: admin.error }, admin.error === "forbidden_role" ? 403 : 401, corsHeaders);
  if (!env.FIREBASE_SERVICE_ACCOUNT_JSON) {
    return json({ error: "firebase_service_account_not_configured" }, 500, corsHeaders);
  }
  try {
    const raw = (await fbAdminGet("adminAccounts", env)) || {};
    const admins = Object.entries(raw).map(([id, a]) => ({
      id,
      username: a.username || "",
      role: a.role === "superadmin" ? "superadmin" : "viewer",
      createdAt: a.createdAt || null,
      createdBy: a.createdBy || null
    }));
    return json({ ok: true, admins }, 200, corsHeaders);
  } catch (e) {
    console.error("handleAdminListAdmins فشل:", e);
    return json({ error: "internal_error" }, 500, corsHeaders);
  }
}

async function handleAdminCreateAdmin(request, env, corsHeaders, ctx) {
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
  const username = typeof body?.username === "string" ? body.username.trim() : "";
  const password = typeof body?.password === "string" ? body.password : "";
  const role = body?.role === "superadmin" ? "superadmin" : "viewer";
  if (!username || username.length < 3 || username.length > 60) {
    return json({ error: "invalid_username" }, 400, corsHeaders);
  }
  if (!password || password.length < 6 || password.length > 200) {
    return json({ error: "weak_password" }, 400, corsHeaders);
  }
  const expectedUsername = env.ADMIN_USERNAME || "";
  if ((expectedUsername && timingSafeEqual(username, expectedUsername)) ||
      (env.ADMIN_VIEWER_USERNAME && timingSafeEqual(username, env.ADMIN_VIEWER_USERNAME))) {
    return json({ error: "username_reserved" }, 400, corsHeaders);
  }
  try {
    const existing = await findDynamicAdminByUsername(username, env);
    if (existing) return json({ error: "username_taken" }, 409, corsHeaders);

    const { salt, hash } = await hashPassword(password, null);
    const id = crypto.randomUUID();
    await fbAdminPut(`adminAccounts/${id}`, {
      username, role, salt, hash,
      createdAt: Date.now(),
      createdBy: admin.name || admin.role
    }, env);
    if (ctx) ctx.waitUntil(logAdminActivity(env, "admin_account_created", { username, role, by: admin.name || admin.role }));
    return json({ ok: true, id }, 200, corsHeaders);
  } catch (e) {
    console.error("handleAdminCreateAdmin فشل:", e);
    return json({ error: "internal_error" }, 500, corsHeaders);
  }
}

async function handleAdminDeleteAdmin(request, env, corsHeaders, ctx) {
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
  const id = typeof body?.id === "string" ? body.id.trim() : "";
  if (!id) return json({ error: "invalid_request" }, 400, corsHeaders);
  try {
    const existing = await fbAdminGet(`adminAccounts/${id}`, env);
    await fbAdminPut(`adminAccounts/${id}`, null, env);
    if (ctx) ctx.waitUntil(logAdminActivity(env, "admin_account_deleted", { username: existing?.username || id, by: admin.name || admin.role }));
    return json({ ok: true }, 200, corsHeaders);
  } catch (e) {
    console.error("handleAdminDeleteAdmin فشل:", e);
    return json({ error: "internal_error" }, 500, corsHeaders);
  }
}

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

  const expectedUsername = env.ADMIN_USERNAME || "";
  const expectedPassword = env.ADMIN_PASSWORD || "";

  const superOk = !!(expectedUsername && expectedPassword) &&
    timingSafeEqual(username, expectedUsername) && timingSafeEqual(password, expectedPassword);

  let viewerOk = false;
  if (!superOk && env.ADMIN_VIEWER_USERNAME && env.ADMIN_VIEWER_PASSWORD) {
    viewerOk =
      timingSafeEqual(username, env.ADMIN_VIEWER_USERNAME) &&
      timingSafeEqual(password, env.ADMIN_VIEWER_PASSWORD);
  }

  let role = null;
  let name = null;
  if (superOk) { role = "superadmin"; name = username || "الأدمن الرئيسي"; }
  else if (viewerOk) { role = "viewer"; name = username || "مشاهد"; }

  if (!role && env.FIREBASE_SERVICE_ACCOUNT_JSON && username) {
    try {
      const dynamicAdmin = await findDynamicAdminByUsername(username, env);
      if (dynamicAdmin && await verifyPassword(password, dynamicAdmin.salt, dynamicAdmin.hash)) {
        role = dynamicAdmin.role === "superadmin" ? "superadmin" : "viewer";
        name = dynamicAdmin.username;
      }
    } catch (e) {
      console.warn("فحص حسابات الأدمن الإضافية فشل:", e);
    }
  }

  if (!role) {
    await registerAdminLoginFail(env, ip);
    return json({ error: "invalid_credentials" }, 401, corsHeaders);
  }

  if (!env.RATE_LIMIT_KV) {
    return json({ error: "server_not_configured" }, 500, corsHeaders);
  }

  const confirmToken = crypto.randomUUID();
  await env.RATE_LIMIT_KV.put(`adminPending:${confirmToken}`, JSON.stringify({ role, name }), {
    expirationTtl: ADMIN_PENDING_TTL_SECONDS
  });

  return json({ needsConfirmation: true, confirmToken }, 200, corsHeaders);
}

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
  const expectedCode = env.ADMIN_CONFIRM_CODE || "";

  if (!confirmToken || !expectedCode || !timingSafeEqual(code, expectedCode)) {
    await registerAdminLoginFail(env, ip);
    return json({ error: "invalid_confirmation" }, 401, corsHeaders);
  }

  if (!env.RATE_LIMIT_KV) {
    return json({ error: "server_not_configured" }, 500, corsHeaders);
  }

  const pendingRaw = await env.RATE_LIMIT_KV.get(`adminPending:${confirmToken}`);
  if (!pendingRaw) {
    await registerAdminLoginFail(env, ip);
    return json({ error: "invalid_or_expired_token" }, 401, corsHeaders);
  }
  await env.RATE_LIMIT_KV.delete(`adminPending:${confirmToken}`);

  let role = "superadmin";
  let name = "الأدمن الرئيسي";
  try {
    const pending = JSON.parse(pendingRaw);
    if (pending && (pending.role === "superadmin" || pending.role === "viewer")) {
      role = pending.role;
      if (typeof pending.name === "string" && pending.name) name = pending.name;
    }
  } catch (e) {
  }

  await clearAdminLoginFails(env, ip);

  const sessionToken = crypto.randomUUID();
  await env.RATE_LIMIT_KV.put(
    `adminSession:${sessionToken}`,
    JSON.stringify({ role, name, createdAt: Date.now() }),
    { expirationTtl: ADMIN_SESSION_TTL_SECONDS }
  );

  if (ctx) {
    ctx.waitUntil(logAdminActivity(env, "admin_login", { ip, role, by: name }));
    ctx.waitUntil(notifyRealAdmin(env, ip, role, name));
  }

  return json({ adminToken: sessionToken, role, name }, 200, corsHeaders);
}

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
  return { ok: true, role: session.role || "admin", name: session.name || null, token };
}

async function logAdminActivity(env, action, details) {
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

async function notifyRealAdmin(env, ip, role, name) {
  if (!env.ADMIN_NOTIFY_WEBHOOK) return;
  const roleLabel = role === "viewer" ? "أدمن (مشاهدة فقط)" : "أدمن (صلاحية كاملة)";
  const who = name ? ` — الاسم: ${name}` : "";
  try {
    await fetch(env.ADMIN_NOTIFY_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: `⚠️ تسجيل دخول لحساب ${roleLabel}${who} — الوقت: ${new Date().toISOString()} — IP: ${ip}`,
        text: `⚠️ تسجيل دخول لحساب ${roleLabel}${who} — الوقت: ${new Date().toISOString()} — IP: ${ip}`
      })
    });
  } catch (e) {
    console.warn("notifyRealAdmin فشل:", e);
  }
}

async function requireSuperAdmin(request, env) {
  const admin = await requireAdminSession(request, env);
  if (!admin.ok) return admin;
  if (admin.role !== "superadmin") return { ok: false, error: "forbidden_role" };
  return admin;
}


let _cachedFirebaseAccessToken = null; // { token, expiresAt(seconds) }
const GOOGLE_OAUTH_TOKEN_URL = "https://oauth2.googleapis.com/token";
const FIREBASE_DB_OAUTH_SCOPE = "https://www.googleapis.com/auth/firebase.database https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/identitytoolkit";

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

async function deleteFirebaseAuthAccount(uid, env) {
  try {
    const token = await getFirebaseAccessToken(env);
    const res = await fetch(
      `https://identitytoolkit.googleapis.com/v1/projects/${FIREBASE_PROJECT_ID}/accounts:delete`,
      {
        method: "POST",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify({ localId: uid })
      }
    );
    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.warn("deleteFirebaseAuthAccount فشل:", res.status, detail.slice(0, 300));
      return { ok: false };
    }
    return { ok: true };
  } catch (e) {
    console.warn("deleteFirebaseAuthAccount استثناء:", e);
    return { ok: false };
  }
}

const ONLINE_THRESHOLD_MS = 2 * 60 * 1000;

const ADMIN_USERS_DEFAULT_PAGE_SIZE = 200;
const ADMIN_USERS_MAX_PAGE_SIZE = 1000;

async function handleAdminListUsers(request, env, corsHeaders) {
  const admin = await requireAdminSession(request, env);
  if (!admin.ok) return json({ error: admin.error }, 401, corsHeaders);
  if (!env.FIREBASE_SERVICE_ACCOUNT_JSON) {
    return json({ error: "firebase_service_account_not_configured" }, 500, corsHeaders);
  }

  let body = {};
  try { body = await request.json(); } catch (e) { body = {}; }
  let limit = parseInt(body?.limit, 10);
  if (!Number.isFinite(limit) || limit <= 0) limit = ADMIN_USERS_DEFAULT_PAGE_SIZE;
  limit = Math.min(limit, ADMIN_USERS_MAX_PAGE_SIZE);
  const cursor = typeof body?.cursor === "string" && body.cursor ? body.cursor : null;

  try {
    const token = await getFirebaseAccessToken(env);
    let url = `${FIREBASE_DB_URL}/users.json?access_token=${encodeURIComponent(token)}` +
      `&orderBy=${encodeURIComponent('"$key"')}&limitToFirst=${limit + 1}`;
    if (cursor) url += `&startAt=${encodeURIComponent('"' + cursor + '"')}`;

    const res = await fetch(url);
    if (!res.ok) throw new Error("firebase_get_failed:" + res.status);
    const usersRaw = (await res.json()) || {};

    const monthKey = getCurrentMonthKey();
    const now = Date.now();
    let entries = Object.entries(usersRaw);
    entries.sort((a, b) => (a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0));

    let nextCursor = null;
    if (entries.length > limit) {
      nextCursor = entries[limit][0]; // أول uid في الصفحة الجاية
      entries = entries.slice(0, limit);
    }
    if (cursor && entries.length && entries[0][0] === cursor) {
      entries = entries.slice(1);
    }

    const users = entries.map(([uid, u]) => {
      u = u || {};
      const planName = PLAN_LIMITS.hasOwnProperty(u.plan) ? u.plan : "مجاني";
      const usageThisMonth =
        u.usage && typeof u.usage[monthKey] === "number" ? u.usage[monthKey] : 0;
      return {
        uid,
        email: u.email || null,
        displayName: u.displayName || u.name || null,
        plan: planName,
        customLimit: typeof u.customLimit === "number" ? u.customLimit : null,
        points: typeof u.points === "number" ? u.points : 0,
        suspended: u.suspended === true,
        permissions: (u.permissions && typeof u.permissions === "object") ? u.permissions : {},
        adminNote: typeof u.adminNote === "string" ? u.adminNote : "",
        usageThisMonth,
        lastSeen: typeof u.lastSeen === "number" ? u.lastSeen : null,
        online: typeof u.lastSeen === "number" && now - u.lastSeen < ONLINE_THRESHOLD_MS
      };
    });

    return json({ ok: true, users, nextCursor, pageSize: limit }, 200, corsHeaders);
  } catch (e) {
    console.error("handleAdminListUsers فشل:", e);
    return json({ error: "internal_error" }, 500, corsHeaders);
  }
}

async function handleAdminListSubscriptionRequests(request, env, corsHeaders) {
  const admin = await requireAdminSession(request, env);
  if (!admin.ok) return json({ error: admin.error }, 401, corsHeaders);
  if (!env.FIREBASE_SERVICE_ACCOUNT_JSON) {
    return json({ error: "firebase_service_account_not_configured" }, 500, corsHeaders);
  }

  try {
    const raw = (await fbAdminGet("pending_requests", env)) || {};
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
      const existingPurchases = (await fbAdminGet(`users/${reqRaw.uid}/purchases`, env)) || [];
      const purchasesList = Array.isArray(existingPurchases) ? existingPurchases : Object.values(existingPurchases);
      purchasesList.push({
        name: planToSet,
        price: Number(reqRaw.price) || 0,
        period: reqRaw.period || "",
        date: Date.now()
      });
      await fbAdminPut(`users/${reqRaw.uid}/purchases`, purchasesList, env);
      await fbAdminPut(`pending_requests/${requestId}/status`, "approved", env);
      await fbAdminPut(`pending_requests/${requestId}/reviewedAt`, Date.now(), env);
      await fbAdminPut(`pending_requests/${requestId}/reviewedBy`, admin.role, env);
      if (ctx) ctx.waitUntil(logAdminActivity(env, "subscription_approved", { requestId, uid: reqRaw.uid, plan: planToSet, by: admin.name || admin.role }));
    } else {
      const reason = typeof body.reason === "string" ? body.reason.slice(0, 500) : "";
      await fbAdminPut(`pending_requests/${requestId}/status`, "rejected", env);
      await fbAdminPut(`pending_requests/${requestId}/reviewedAt`, Date.now(), env);
      await fbAdminPut(`pending_requests/${requestId}/reviewedBy`, admin.role, env);
      if (reason) await fbAdminPut(`pending_requests/${requestId}/rejectReason`, reason, env);
      if (ctx) ctx.waitUntil(logAdminActivity(env, "subscription_rejected", { requestId, uid: reqRaw.uid || null, reason, by: admin.name || admin.role }));
    }

    return json({ ok: true }, 200, corsHeaders);
  } catch (e) {
    console.error("handleAdminReviewSubscriptionRequest فشل:", e);
    return json({ error: "internal_error" }, 500, corsHeaders);
  }
}


function makeChatMessageId() {
  return `${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}

async function resolveChatIdentity(request, env, body) {
  const adminTokenHeader = request.headers.get("X-Admin-Token");
  if (adminTokenHeader) {
    const admin = await requireAdminSession(request, env);
    if (!admin.ok) return { ok: false, error: admin.error, status: 401 };
    const targetUid = typeof body?.uid === "string" ? body.uid.trim() : "";
    if (!targetUid) return { ok: false, error: "uid_required", status: 400 };
    return { ok: true, role: "admin", adminRole: admin.role, adminName: admin.name, uid: targetUid };
  }
  const auth = await verifyFirebaseToken(request, env);
  if (!auth.ok) return { ok: false, error: auth.error, status: 401 };
  return { ok: true, role: "user", uid: auth.uid };
}

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
      ctx.waitUntil(logAdminActivity(env, "chat_message_sent", { uid: identity.uid, by: identity.adminName || identity.adminRole }));
    }
    return json({ ok: true, id: messageId }, 200, corsHeaders);
  } catch (e) {
    console.error("handleChatSend فشل:", e);
    return json({ error: "internal_error" }, 500, corsHeaders);
  }
}

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

    const shouldMarkRead = body?.markRead === true;
    const readField = identity.role === "admin" ? "readByAdmin" : "readByUser";
    const otherFrom = identity.role === "admin" ? "user" : "admin";
    const unreadIds = shouldMarkRead
      ? messages.filter(m => m.from === otherFrom && !m[readField]).map(m => m.id)
      : [];
    if (unreadIds.length) {
      const results = await Promise.allSettled(
        unreadIds.map(id => fbAdminPut(`chat_messages/${identity.uid}/${id}/${readField}`, true, env))
      );
      unreadIds.forEach((id, i) => {
        if (results[i].status !== "fulfilled") {
          console.error(`فشل تعليم رسالة ${id} كمقروءة:`, results[i].reason);
          return; // نسيبها زي ما هي "مش مقروءة" في الرد عشان تتحاول تاني بعدين
        }
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

const ADMIN_VALID_ACTIONS = new Set([
  "suspend",
  "activate",
  "setPlan",
  "setCustomLimit",
  "setPoints",
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
  } else if (action === "setPoints") {
    const n = Number(body.value);
    if (!Number.isFinite(n) || n < 0) {
      return json({ error: "invalid_points" }, 400, corsHeaders);
    }
    path = `users/${uid}/points`;
    value = Math.round(n);
  } else if (action === "resetUsage") {
    path = `users/${uid}/usage/${getCurrentMonthKey()}`;
    value = 0;
  } else if (action === "setPermissions") {
    if (typeof body.value !== "object" || body.value === null || Array.isArray(body.value)) {
      return json({ error: "invalid_permissions" }, 400, corsHeaders);
    }
    const cleanPerms = {};
    for (const [k, v] of Object.entries(body.value)) {
      if (typeof k === "string" && k.length <= 64) cleanPerms[k] = v === true;
    }
    path = `users/${uid}/permissions`;
    value = cleanPerms;
  } else if (action === "setNote") {
    const note = typeof body.value === "string" ? body.value.slice(0, 2000) : "";
    path = `users/${uid}/adminNote`;
    value = note;
  } else if (action === "delete") {
    path = `users/${uid}`;
    value = null;
  }

  try {
    await fbAdminPut(path, value, env);
  } catch (e) {
    console.error("handleAdminUserAction فشل:", e);
    return json({ error: "firebase_write_failed" }, 502, corsHeaders);
  }

  let authDeleted = null;
  if (action === "delete") {
    const authResult = await deleteFirebaseAuthAccount(uid, env);
    authDeleted = authResult.ok;
  }

  if (ctx) {
    ctx.waitUntil(logAdminActivity(env, "admin_user_action", {
      uid, action, value, authDeleted, by: admin.name || admin.role
    }));
  }
  return json({ ok: true, authDeleted }, 200, corsHeaders);
}

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

  if (ctx) ctx.waitUntil(logAdminActivity(env, "admin_password_reset_sent", { email, by: admin.name || admin.role }));
  return json({ ok: true }, 200, corsHeaders);
}

async function handleAdminActivityLog(request, env, corsHeaders) {
  const admin = await requireAdminSession(request, env);
  if (!admin.ok) return json({ error: admin.error }, 401, corsHeaders);
  if (!env.FIREBASE_SERVICE_ACCOUNT_JSON) {
    return json({ error: "firebase_service_account_not_configured" }, 500, corsHeaders);
  }

  let body = {};
  try { body = await request.json(); } catch (e) { body = {}; }
  let limit = parseInt(body?.limit, 10);
  if (!Number.isFinite(limit) || limit <= 0) limit = 200;
  limit = Math.min(limit, 5000);
  const actionFilter = typeof body?.action === "string" ? body.action.trim() : "";
  const sinceTime = typeof body?.sinceTime === "string" ? body.sinceTime : "";

  try {
    const logsRaw = (await fbAdminGet("adminLogs", env)) || {};
    let logs = Object.entries(logsRaw)
      .map(([id, entry]) => ({ id, ...(entry || {}) }))
      .sort((a, b) => (b.time || "").localeCompare(a.time || ""));

    if (actionFilter) logs = logs.filter(l => l.action === actionFilter);
    if (sinceTime) logs = logs.filter(l => (l.time || "") >= sinceTime);

    const total = logs.length;
    logs = logs.slice(0, limit);

    return json({ ok: true, logs, total }, 200, corsHeaders);
  } catch (e) {
    console.error("handleAdminActivityLog فشل:", e);
    return json({ error: "internal_error" }, 500, corsHeaders);
  }
}

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

    if (ctx) ctx.waitUntil(logAdminActivity(env, "admin_backup_download", { ip: getClientIp(request), by: admin.name || admin.role }));

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

async function handleAdminListFeedback(request, env, corsHeaders) {
  const admin = await requireAdminSession(request, env);
  if (!admin.ok) return json({ error: admin.error }, 401, corsHeaders);
  if (!env.FIREBASE_SERVICE_ACCOUNT_JSON) {
    return json({ error: "firebase_service_account_not_configured" }, 500, corsHeaders);
  }
  try {
    const raw = (await fbAdminGet("feedback", env)) || {};
    const items = Object.entries(raw)
      .map(([id, f]) => ({ id, ...(f || {}) }))
      .sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
    const unreadCount = items.filter(f => !f.adminRead).length;
    return json({ ok: true, items, unreadCount }, 200, corsHeaders);
  } catch (e) {
    console.error("handleAdminListFeedback فشل:", e);
    return json({ error: "internal_error" }, 500, corsHeaders);
  }
}

const ADMIN_FEEDBACK_ACTIONS = new Set(["markRead", "markUnread", "delete"]);
async function handleAdminFeedbackAction(request, env, corsHeaders, ctx) {
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
  const id = typeof body?.id === "string" ? body.id.trim() : "";
  const action = typeof body?.action === "string" ? body.action : "";
  if (!id || !ADMIN_FEEDBACK_ACTIONS.has(action)) {
    return json({ error: "invalid_request" }, 400, corsHeaders);
  }
  try {
    if (action === "markRead") await fbAdminPut(`feedback/${id}/adminRead`, true, env);
    else if (action === "markUnread") await fbAdminPut(`feedback/${id}/adminRead`, false, env);
    else if (action === "delete") await fbAdminPut(`feedback/${id}`, null, env);
    if (ctx) ctx.waitUntil(logAdminActivity(env, "feedback_action", { id, action, by: admin.name || admin.role }));
    return json({ ok: true }, 200, corsHeaders);
  } catch (e) {
    console.error("handleAdminFeedbackAction فشل:", e);
    return json({ error: "internal_error" }, 500, corsHeaders);
  }
}

async function handleAdminBroadcast(request, env, corsHeaders, ctx) {
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
  const text = typeof body?.text === "string" ? body.text.trim() : "";
  const target = typeof body?.target === "string" ? body.target : "all"; // "all" أو اسم باقة بعينها
  if (!text) return json({ error: "text_required" }, 400, corsHeaders);
  if (text.length > 2000) return json({ error: "text_too_long" }, 400, corsHeaders);
  if (target !== "all" && !PLAN_LIMITS.hasOwnProperty(target)) {
    return json({ error: "invalid_target" }, 400, corsHeaders);
  }

  try {
    const usersRaw = (await fbAdminGet("users", env)) || {};
    const uids = Object.entries(usersRaw)
      .filter(([, u]) => {
        if (target === "all") return true;
        const planName = PLAN_LIMITS.hasOwnProperty(u?.plan) ? u.plan : "مجاني";
        return planName === target;
      })
      .map(([uid]) => uid);

    if (!uids.length) return json({ error: "no_matching_users" }, 400, corsHeaders);

    const message = {
      from: "admin",
      text,
      createdAt: Date.now(),
      readByAdmin: true,
      readByUser: false,
      broadcast: true
    };

    const CHUNK_SIZE = 25;
    let sent = 0, failed = 0;
    for (let i = 0; i < uids.length; i += CHUNK_SIZE) {
      const chunk = uids.slice(i, i + CHUNK_SIZE);
      const results = await Promise.allSettled(
        chunk.map(uid => fbAdminPut(`chat_messages/${uid}/${makeChatMessageId()}`, message, env))
      );
      results.forEach(r => { if (r.status === "fulfilled") sent++; else failed++; });
    }

    if (ctx) ctx.waitUntil(logAdminActivity(env, "admin_broadcast", { target, count: uids.length, sent, failed, by: admin.name || admin.role }));
    return json({ ok: true, sent, failed, total: uids.length }, 200, corsHeaders);
  } catch (e) {
    console.error("handleAdminBroadcast فشل:", e);
    return json({ error: "internal_error" }, 500, corsHeaders);
  }
}

async function computeDailyStatsSnapshot(env) {
  const usersRaw = (await fbAdminGet("users", env)) || {};
  const planCounts = {};
  for (const key of Object.keys(PLAN_LIMITS)) planCounts[key] = 0;
  let totalRevenue = 0;
  let totalUsers = 0;

  for (const u of Object.values(usersRaw)) {
    totalUsers++;
    const planName = PLAN_LIMITS.hasOwnProperty(u?.plan) ? u.plan : "مجاني";
    planCounts[planName] = (planCounts[planName] || 0) + 1;
    const purchases = u?.purchases;
    if (Array.isArray(purchases)) {
      for (const p of purchases) totalRevenue += Number(p?.price) || 0;
    } else if (purchases && typeof purchases === "object") {
      for (const p of Object.values(purchases)) totalRevenue += Number(p?.price) || 0;
    }
  }

  return { totalUsers, planCounts, totalRevenue, recordedAt: Date.now() };
}

async function recordDailyStats(env) {
  if (!env.FIREBASE_SERVICE_ACCOUNT_JSON) return;
  try {
    const snapshot = await computeDailyStatsSnapshot(env);
    const dateKey = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
    await fbAdminPut(`dailyStats/${dateKey}`, snapshot, env);
  } catch (e) {
    console.warn("recordDailyStats فشل:", e);
  }
}

async function handleAdminStatsHistory(request, env, corsHeaders) {
  const admin = await requireAdminSession(request, env);
  if (!admin.ok) return json({ error: admin.error }, 401, corsHeaders);
  if (!env.FIREBASE_SERVICE_ACCOUNT_JSON) {
    return json({ error: "firebase_service_account_not_configured" }, 500, corsHeaders);
  }
  let body = {};
  try { body = await request.json(); } catch (e) { body = {}; }
  let days = parseInt(body?.days, 10);
  if (!Number.isFinite(days) || days <= 0) days = 30;
  days = Math.min(days, 365);

  try {
    const raw = (await fbAdminGet("dailyStats", env)) || {};
    const history = Object.entries(raw)
      .map(([date, s]) => ({ date, ...(s || {}) }))
      .sort((a, b) => a.date.localeCompare(b.date))
      .slice(-days);
    return json({ ok: true, history }, 200, corsHeaders);
  } catch (e) {
    console.error("handleAdminStatsHistory فشل:", e);
    return json({ error: "internal_error" }, 500, corsHeaders);
  }
}

async function handleAdminRecordStatsNow(request, env, corsHeaders, ctx) {
  const admin = await requireSuperAdmin(request, env);
  if (!admin.ok) return json({ error: admin.error }, admin.error === "forbidden_role" ? 403 : 401, corsHeaders);
  if (!env.FIREBASE_SERVICE_ACCOUNT_JSON) {
    return json({ error: "firebase_service_account_not_configured" }, 500, corsHeaders);
  }
  try {
    const snapshot = await computeDailyStatsSnapshot(env);
    const dateKey = new Date().toISOString().slice(0, 10);
    await fbAdminPut(`dailyStats/${dateKey}`, snapshot, env);
    if (ctx) ctx.waitUntil(logAdminActivity(env, "stats_snapshot_manual", { by: admin.name || admin.role }));
    return json({ ok: true, snapshot }, 200, corsHeaders);
  } catch (e) {
    console.error("handleAdminRecordStatsNow فشل:", e);
    return json({ error: "internal_error" }, 500, corsHeaders);
  }
}

async function handleAdminListChats(request, env, corsHeaders) {
  const admin = await requireAdminSession(request, env);
  if (!admin.ok) return json({ error: admin.error }, 401, corsHeaders);
  if (!env.FIREBASE_SERVICE_ACCOUNT_JSON) {
    return json({ error: "firebase_service_account_not_configured" }, 500, corsHeaders);
  }
  try {
    const [chatsRaw, usersRaw] = await Promise.all([
      fbAdminGet("chat_messages", env),
      fbAdminGet("users", env)
    ]);
    const chats = chatsRaw || {};
    const users = usersRaw || {};

    const conversations = Object.entries(chats).map(([uid, messagesRaw]) => {
      const messages = Object.values(messagesRaw || {});
      messages.sort((a, b) => (a.createdAt || 0) - (b.createdAt || 0));
      const last = messages[messages.length - 1] || {};
      const unreadFromUser = messages.filter(m => m.from === "user" && !m.readByAdmin).length;
      const u = users[uid] || {};
      return {
        uid,
        email: u.email || null,
        displayName: u.displayName || u.name || null,
        lastMessage: last.text || "",
        lastFrom: last.from || null,
        lastTime: last.createdAt || 0,
        unreadFromUser,
        totalMessages: messages.length
      };
    });

    conversations.sort((a, b) => b.lastTime - a.lastTime);
    return json({ ok: true, conversations }, 200, corsHeaders);
  } catch (e) {
    console.error("handleAdminListChats فشل:", e);
    return json({ error: "internal_error" }, 500, corsHeaders);
  }
}

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

  return json({ ok: true }, 200, corsHeaders);
}

async function handleVerifyCaptcha(request, env, corsHeaders) {
  let body;
  try {
    body = await request.json();
  } catch (e) {
    return json({ error: "invalid_json" }, 400, corsHeaders);
  }

  const token = typeof body?.token === "string" ? body.token.trim() : "";
  const expectedAction = typeof body?.action === "string" ? body.action : "";

  if (!env.RECAPTCHA_SECRET_KEY) {
    return json({ ok: true, configured: false }, 200, corsHeaders);
  }

  if (!token) {
    return json({ ok: false, error: "missing_token" }, 400, corsHeaders);
  }

  try {
    const params = new URLSearchParams();
    params.set("secret", env.RECAPTCHA_SECRET_KEY);
    params.set("response", token);
    const ip = getClientIp(request);
    if (ip) params.set("remoteip", ip);

    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString()
    });
    if (!res.ok) {
      console.warn("reCAPTCHA siteverify فشل (status):", res.status);
      return json({ ok: true, configured: true, degraded: true }, 200, corsHeaders);
    }
    const data = await res.json();
    const success = !!data.success;
    const score = typeof data.score === "number" ? data.score : 0;
    const actionMatches = !expectedAction || !data.action || data.action === expectedAction;
    const passed = success && actionMatches && score >= RECAPTCHA_MIN_SCORE;
    if (!passed) {
      console.warn("reCAPTCHA رفض الطلب:", { success, score, action: data.action, errors: data["error-codes"] });
    }
    return json({ ok: passed, score }, 200, corsHeaders);
  } catch (e) {
    console.error("handleVerifyCaptcha فشل:", e);
    return json({ ok: true, configured: true, degraded: true }, 200, corsHeaders);
  }
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
      if (errText.includes("EMAIL_NOT_FOUND")) return { ok: true };
      return { ok: false, error: "reset_send_failed" };
    }
    return { ok: true };
  } catch (e) {
    console.error("sendPasswordResetEmail فشل:", e);
    return { ok: false, error: "internal_error" };
  }
}

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

// ---- سجل نشاط كل مستخدم: أي حركة يعملها المستخدم (دخول/خروج/تغيير باسورد/تغيير باقة...)
// بتتسجل هنا تحت userActivity/{uid} عشان الأدمن يقدر يشوفها في مساحة إدارة الحساب ----
const USER_ACTIVITY_MAX_DETAILS_LEN = 500;

async function handleLogUserActivity(request, env, corsHeaders) {
  const auth = await verifyFirebaseToken(request, env);
  if (!auth.ok) return json({ error: auth.error }, 401, corsHeaders);
  if (!env.FIREBASE_SERVICE_ACCOUNT_JSON) return json({ ok: true }, 200, corsHeaders);

  let body = {};
  try { body = await request.json(); } catch (e) { body = {}; }
  const type = typeof body?.type === "string" && body.type.trim() ? body.type.trim().slice(0, 60) : "unknown";
  let details = body?.details;
  if (details && typeof details === "object") {
    try { details = JSON.stringify(details); } catch (e) { details = String(details); }
  } else if (details !== undefined && details !== null) {
    details = String(details);
  } else {
    details = "";
  }
  details = details.slice(0, USER_ACTIVITY_MAX_DETAILS_LEN);

  const ip = request.headers.get("CF-Connecting-IP") || "";
  const ua = (request.headers.get("User-Agent") || "").slice(0, 200);

  try {
    const authQS = `auth=${encodeURIComponent(auth.idToken)}`;
    await fetch(`${FIREBASE_DB_URL}/userActivity/${auth.uid}.json?${authQS}`, {
      method: "POST",
      body: JSON.stringify({
        type,
        details,
        ip,
        ua,
        time: Date.now()
      })
    });
  } catch (e) {
    console.warn("handleLogUserActivity فشل:", e);
  }
  return json({ ok: true }, 200, corsHeaders);
}

const ADMIN_USER_ACTIVITY_DEFAULT_LIMIT = 200;
const ADMIN_USER_ACTIVITY_MAX_LIMIT = 2000;

async function handleAdminUserActivity(request, env, corsHeaders) {
  const admin = await requireAdminSession(request, env);
  if (!admin.ok) return json({ error: admin.error }, 401, corsHeaders);
  if (!env.FIREBASE_SERVICE_ACCOUNT_JSON) {
    return json({ error: "firebase_service_account_not_configured" }, 500, corsHeaders);
  }

  let body = {};
  try { body = await request.json(); } catch (e) { body = {}; }
  const uid = typeof body?.uid === "string" ? body.uid.trim() : "";
  if (!uid) return json({ error: "missing_uid" }, 400, corsHeaders);
  let limit = parseInt(body?.limit, 10);
  if (!Number.isFinite(limit) || limit <= 0) limit = ADMIN_USER_ACTIVITY_DEFAULT_LIMIT;
  limit = Math.min(limit, ADMIN_USER_ACTIVITY_MAX_LIMIT);

  try {
    const raw = (await fbAdminGet(`userActivity/${uid}`, env)) || {};
    let entries = Object.entries(raw).map(([id, e]) => ({ id, ...(e || {}) }));
    entries.sort((a, b) => (b.time || 0) - (a.time || 0));
    const total = entries.length;
    entries = entries.slice(0, limit);
    return json({ ok: true, activity: entries, total }, 200, corsHeaders);
  } catch (e) {
    console.error("handleAdminUserActivity فشل:", e);
    return json({ error: "internal_error" }, 500, corsHeaders);
  }
}

function truncateField(v, max) {
  if (v === undefined || v === null) return "";
  const s = String(v);
  return s.length > max ? s.slice(0, max) + "…" : s;
}
async function handleLogClientError(request, env, corsHeaders) {
  if (request.method !== "POST") return json({ error: "method_not_allowed" }, 405, corsHeaders);

  let body;
  try {
    body = await request.json();
  } catch (e) {
    return json({ error: "invalid_json" }, 400, corsHeaders);
  }

  const webhook = env.ERROR_NOTIFY_WEBHOOK || env.ADMIN_NOTIFY_WEBHOOK;
  if (!webhook) return json({ ok: true, delivered: false }, 200, corsHeaders); // مفيش webhook متظبط، مش مشكلة تكسر بيها تجربة المستخدم

  const message = truncateField(body.message, 300) || "(بدون رسالة)";
  const stack = truncateField(body.stack, 700);
  const source = truncateField(body.source, 200);
  const pageUrl = truncateField(body.pageUrl, 200);
  const view = truncateField(body.view, 60);
  const lang = truncateField(body.lang, 20);
  const appVersion = truncateField(body.appVersion, 20);
  const line = Number.isFinite(body.line) ? body.line : 0;
  const col = Number.isFinite(body.col) ? body.col : 0;
  const ip = getClientIp(request);

  const lines = [
    `🐞 خطأ جديد في الواجهة — يُسْر Pro`,
    `الرسالة: ${message}`,
    source ? `المصدر: ${source}:${line}:${col}` : null,
    view ? `الصفحة/الأداة: ${view}` : null,
    pageUrl ? `الرابط: ${pageUrl}` : null,
    `اللغة: ${lang || "-"}  |  نسخة الموقع: ${appVersion || "-"}  |  IP: ${ip}`,
    `الوقت: ${new Date().toISOString()}`,
    stack ? `\nStack:\n${stack}` : null
  ].filter(Boolean);
  const text = lines.join("\n");

  try {
    await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: text, text })
    });
  } catch (e) {
    console.warn("handleLogClientError: تعذر إرسال الإشعار:", e);
  }
  return json({ ok: true, delivered: true }, 200, corsHeaders);
}
