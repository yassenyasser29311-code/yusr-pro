(function () {
    // ⚠️ ضع رابط الـ Cloudflare Worker بتاعك هنا (نفس اللي app.js بيكلمه فعليًا)
    // مثال: "https://yusr-worker.your-subdomain.workers.dev"
    const ADMIN_API_BASE = "https://yusr-worker.yassen-yasser29311.workers.dev";

    const PLAN_NAMES = ["مجاني", "الأساسية", "الاحترافية", "النخبة", "السنوية"];
    let adminToken = sessionStorage.getItem("yusr_admin_token") || null;
    let adminRole = sessionStorage.getItem("yusr_admin_role") || null; // "superadmin" أو "viewer"
    let adminUsersCache = [];
    let secretTapCount = 0;
    let secretTapTimer = null;
    // ---- حالة إضافية: كاش سجل النشاط (لتصدير CSV)، والشكاوى، والمحادثة المفتوحة في مودال "كل المحادثات" ----
    let adminActivityLogCache = [];
    let adminFeedbackCache = [];
    let adminAllChatsCurrentUid = null;
    let adminAllChatsListPollTimer = null;
    let adminAllChatsCurrentPollTimer = null;

    // ---- دور "viewer" بيشوف بس من غير ما يعدل أي حاجة (شوف نظام الأدوار في الووركر) ----
    function isViewerRole() { return adminRole === "viewer"; }

    function applyAdminRoleUI() {
        const badge = document.getElementById("admin-role-badge");
        if (adminRole) {
            badge.classList.remove("hidden");
            if (isViewerRole()) {
                badge.textContent = "مشاهدة فقط";
                badge.className = "admin-badge admin-badge-suspended";
            } else {
                badge.textContent = "صلاحية كاملة";
                badge.className = "admin-badge admin-badge-online";
            }
        } else {
            badge.classList.add("hidden");
        }
        const backupBtn = document.getElementById("admin-backup-btn");
        if (backupBtn) backupBtn.classList.toggle("hidden", isViewerRole());
        const accountsPanel = document.getElementById("admin-accounts-panel");
        if (accountsPanel) accountsPanel.classList.toggle("hidden", isViewerRole());
    }

    function adminToast(msg, type) {
        if (typeof showToast === "function") showToast(msg, type || "info");
        else alert(msg);
    }

    async function adminFetch(path, options) {
        options = options || {};
        const headers = Object.assign({ "Content-Type": "application/json" }, options.headers || {});
        if (adminToken) headers["X-Admin-Token"] = adminToken;
        if (typeof window.showGlobalLoader === "function") window.showGlobalLoader();
        try {
            const res = await fetch(ADMIN_API_BASE + path, Object.assign({ method: "POST" }, options, { headers }));
            let data = {};
            try { data = await res.json(); } catch (e) {}
            if (!res.ok) throw Object.assign(new Error(data.error || "request_failed"), { data, status: res.status });
            return data;
        } finally {
            if (typeof window.hideGlobalLoader === "function") window.hideGlobalLoader();
        }
    }

    // ---- Secret entry point: اضغط شعار "يس" أعلى القائمة الجانبية 5 مرات ----
    window.adminGateSecretTap = function () {
        secretTapCount++;
        clearTimeout(secretTapTimer);
        secretTapTimer = setTimeout(() => { secretTapCount = 0; }, 2500);
        if (secretTapCount >= 5) {
            secretTapCount = 0;
            document.getElementById("admin-gate-step1").classList.remove("hidden");
            document.getElementById("admin-gate-step2").classList.add("hidden");
            document.getElementById("admin-gate-status").classList.add("hidden");
            document.getElementById("admin-gate-username").value = "";
            document.getElementById("admin-gate-password").value = "";
            document.getElementById("admin-gate-modal").classList.remove("hidden");
        }
    };

    window.adminGateClose = function () {
        document.getElementById("admin-gate-modal").classList.add("hidden");
        // لو المستخدم لسه مسجّلش دخول أصلاً (يعني جاي من فورم تسجيل الدخول العادي
        // مش من الضغطة السرية على الشعار)، رجّعله شاشة تسجيل الدخول العادية.
        const appRoot = document.getElementById("app-root");
        if (appRoot && appRoot.classList.contains("hidden") && typeof window.showAuthGateFromAdminCancel === "function") {
            window.showAuthGateFromAdminCancel();
        }
    };

    // ============================================================
    // نفس صفحة تسجيل الدخول العادية بالظبط (بند 6 المطلوب): لو حد كتب في
    // خانة "الإيميل" في فورم تسجيل الدخول العادي قيمة مش شكلها إيميل (يعني
    // مفيهاش @) بنجرب نبعتها كـ "اسم مستخدم أدمن" لـ /adminLogin هنا بهدوء
    // قبل ما نرفضها كإيميل غلط. لو مطابقة (يوزر+باسورد الأدمن)، بتظهر خطوة
    // تأكيد "293" في نفس المودال ده. لو مش مطابقة، بترجع false عادي وفورم
    // تسجيل الدخول العادي بيكمل برسالة "إيميل غير صحيح" العادية بالظبط -
    // يعني من برة مفيش أي فرق ملحوظ بين المحاولتين.
    window.adminTryLoginFromMainForm = async function (usernameOrEmail, password) {
        if (ADMIN_API_BASE.indexOf("http") !== 0) return false;
        try {
            const data = await adminFetch("/adminLogin", { method: "POST", body: JSON.stringify({ username: usernameOrEmail, password }) });
            if (data && data.needsConfirmation && data.confirmToken) {
                pendingConfirmToken = data.confirmToken;
                document.getElementById("app-root").classList.add("hidden");
                const authGate = document.getElementById("auth-gate-modal");
                if (authGate) authGate.classList.add("hidden");
                document.getElementById("admin-gate-step1").classList.add("hidden");
                document.getElementById("admin-gate-step2").classList.remove("hidden");
                document.getElementById("admin-gate-status").classList.add("hidden");
                document.getElementById("admin-gate-code").value = "";
                document.getElementById("admin-gate-modal").classList.remove("hidden");
                document.getElementById("admin-gate-code").focus();
                return true;
            }
            return false;
        } catch (e) {
            return false;
        }
    };

    function adminGateSetStatus(msg, isError) {
        const el = document.getElementById("admin-gate-status");
        el.textContent = msg;
        el.className = "text-[11px] text-center " + (isError ? "text-red-400" : "text-emerald-400");
        el.classList.remove("hidden");
    }

    let pendingConfirmToken = null;

    window.adminGateSubmitLogin = async function () {
        if (ADMIN_API_BASE.indexOf("http") !== 0) {
            adminGateSetStatus("لازم تحط رابط الـ Worker جوه الكود الأول.", true);
            return;
        }
        const username = document.getElementById("admin-gate-username").value.trim();
        const password = document.getElementById("admin-gate-password").value;
        const btn = document.getElementById("admin-gate-login-btn");
        btn.disabled = true;
        try {
            const data = await adminFetch("/adminLogin", { method: "POST", body: JSON.stringify({ username, password }) });
            if (data.needsConfirmation && data.confirmToken) {
                pendingConfirmToken = data.confirmToken;
                document.getElementById("admin-gate-step1").classList.add("hidden");
                document.getElementById("admin-gate-step2").classList.remove("hidden");
                document.getElementById("admin-gate-status").classList.add("hidden");
                document.getElementById("admin-gate-code").value = "";
                document.getElementById("admin-gate-code").focus();
            }
        } catch (e) {
            const code = (e && e.data && e.data.error) || (e && e.message) || "";
            if (code === "too_many_attempts") {
                adminGateSetStatus("محاولات كتير غلط. الدخول مقفول مؤقتاً لمدة 15 دقيقة، جرب تاني بعدين.", true);
            } else {
                adminGateSetStatus("بيانات غير صحيحة.", true);
            }
        } finally {
            btn.disabled = false;
        }
    };

    window.adminGateSubmitConfirm = async function () {
        const code = document.getElementById("admin-gate-code").value.trim();
        const btn = document.getElementById("admin-gate-confirm-btn");
        btn.disabled = true;
        try {
            const data = await adminFetch("/adminConfirm", { method: "POST", body: JSON.stringify({ confirmToken: pendingConfirmToken, code }) });
            if (data.adminToken) {
                adminToken = data.adminToken;
                adminRole = data.role || "superadmin";
                sessionStorage.setItem("yusr_admin_token", adminToken);
                sessionStorage.setItem("yusr_admin_role", adminRole);
                applyAdminRoleUI();
                document.getElementById("admin-gate-modal").classList.add("hidden");
                document.getElementById("admin-dashboard").classList.remove("hidden");
                window.__adminDashboardOpen = true;
                if (typeof hideSupportChatFab === "function") hideSupportChatFab();
                adminRefreshAll();
            }
        } catch (e) {
            adminGateSetStatus("كود غير صحيح أو انتهت صلاحيته.", true);
        } finally {
            btn.disabled = false;
        }
    };

    window.adminLogout = function () {
        adminToken = null;
        adminRole = null;
        sessionStorage.removeItem("yusr_admin_token");
        sessionStorage.removeItem("yusr_admin_role");
        document.getElementById("admin-dashboard").classList.add("hidden");
        window.__adminDashboardOpen = false;
        if (typeof showSupportChatFab === "function" && typeof fbAuth !== "undefined" && fbAuth.currentUser && !fbAuth.currentUser.isAnonymous) showSupportChatFab();
    };

    // ---- لو فيه جلسة أدمن سابقة صالحة في نفس التبويب، رجّعها تلقائي ----
    async function adminTryRestoreSession() {
        if (!adminToken || ADMIN_API_BASE.indexOf("http") !== 0) return;
        try {
            const me = await adminFetch("/adminMe");
            adminRole = me.role || adminRole || "superadmin";
            sessionStorage.setItem("yusr_admin_role", adminRole);
            applyAdminRoleUI();
            document.getElementById("admin-dashboard").classList.remove("hidden");
            window.__adminDashboardOpen = true;
            if (typeof hideSupportChatFab === "function") hideSupportChatFab();
            adminRefreshAll();
        } catch (e) {
            adminToken = null;
            adminRole = null;
            sessionStorage.removeItem("yusr_admin_token");
            sessionStorage.removeItem("yusr_admin_role");
        }
    }
    adminTryRestoreSession();

    // ---- تحميل الإحصائيات + أول صفحة مستخدمين + سجل النشاط ----
    let adminUsersNextCursor = null;
    window.adminRefreshAll = async function () {
        try {
            const [stats, list] = await Promise.all([
                adminFetch("/adminStats"),
                adminFetch("/adminListUsers", { method: "POST", body: JSON.stringify({}) })
            ]);
            renderAdminStats(stats);
            adminUsersCache = list.users || [];
            adminUsersNextCursor = list.nextCursor || null;
            adminRenderUsers();
            updateAdminUsersLoadMoreUI();
        } catch (e) {
            adminToast("خطأ: " + (e.status || "") + " - " + (e.message || "unknown"), "error");
            console.log(e);
        }
        adminLoadActivityLog();
        adminLoadSubscriptionRequests();
        adminLoadFeedback();
        adminRenderTrendChart();
        if (!isViewerRole()) adminLoadAccounts();
        adminRefreshAllChatsBadge();
    };

    // ---- بند 2: تحميل صفحة تانية من المستخدمين (Pagination) بدل ما نجيبهم كلهم مرة واحدة ----
    function updateAdminUsersLoadMoreUI() {
        const btn = document.getElementById("admin-users-loadmore-btn");
        const label = document.getElementById("admin-users-count-label");
        btn.classList.toggle("hidden", !adminUsersNextCursor);
        label.textContent = `اتحمّل ${adminUsersCache.length} مستخدم${adminUsersNextCursor ? " (فيه أكتر)" : ""}`;
    }
    window.adminLoadMoreUsers = async function () {
        if (!adminUsersNextCursor) return;
        const btn = document.getElementById("admin-users-loadmore-btn");
        btn.disabled = true;
        try {
            const list = await adminFetch("/adminListUsers", { method: "POST", body: JSON.stringify({ cursor: adminUsersNextCursor }) });
            adminUsersCache = adminUsersCache.concat(list.users || []);
            adminUsersNextCursor = list.nextCursor || null;
            adminRenderUsers();
            updateAdminUsersLoadMoreUI();
        } catch (e) {
            adminToast("تعذر تحميل المزيد.", "error");
        } finally {
            btn.disabled = false;
        }
    };

    // ---- طلبات الاشتراك (تحويل يدوي Vodafone Cash / InstaPay) ----
    let adminSubReqCache = [];
    window.adminLoadSubscriptionRequests = async function () {
        const tbody = document.getElementById("admin-subreq-tbody");
        const empty = document.getElementById("admin-subreq-empty");
        const badge = document.getElementById("admin-subreq-pending-badge");
        try {
            const data = await adminFetch("/adminListSubscriptionRequests");
            adminSubReqCache = data.requests || [];
            const pendingCount = adminSubReqCache.filter(r => (r.status || "pending") === "pending").length;
            if (pendingCount > 0) {
                badge.textContent = pendingCount + " معلّق";
                badge.classList.remove("hidden");
            } else {
                badge.classList.add("hidden");
            }
            tbody.innerHTML = "";
            empty.classList.toggle("hidden", adminSubReqCache.length > 0);
            adminSubReqCache.forEach(r => {
                const status = r.status || "pending";
                const statusLabel = status === "approved" ? "تمت الموافقة" : status === "rejected" ? "مرفوض" : "قيد المراجعة";
                const statusClass = status === "approved" ? "admin-badge-online" : status === "rejected" ? "admin-badge-suspended" : "";
                const date = r.createdAt ? new Date(r.createdAt).toLocaleString("ar-EG") : "-";
                const transferInfo = `${escapeHtml(r.phone || "-")}${r.ref ? " — " + escapeHtml(r.ref) : ""}`;
                const priceLabel = (r.price != null) ? `${escapeHtml(String(r.price))} ج.م / ${escapeHtml(r.period || "")}` : "";
                const tr = document.createElement("tr");
                tr.innerHTML = `
                    <td class="text-slate-200 font-bold">${escapeHtml(r.name || "-")}</td>
                    <td class="text-slate-400" dir="ltr" style="overflow-wrap:anywhere;">${escapeHtml(r.email || "-")}</td>
                    <td class="text-slate-300">${escapeHtml(r.plan || "-")}<br><span class="text-slate-500">${priceLabel}</span></td>
                    <td class="text-slate-400" dir="ltr" style="overflow-wrap:anywhere;">${transferInfo}</td>
                    <td class="text-slate-500 whitespace-nowrap">${escapeHtml(date)}</td>
                    <td><span class="admin-badge ${statusClass}" style="font-size:.6rem;">${statusLabel}</span></td>
                    <td class="whitespace-nowrap">
                        ${status === "pending" ? `
                            <button data-x-onclick="hSubReviewApprove" data-req-id="${r.id}" class="admin-mini-btn" style="color:#34d399;">موافقة</button>
                            <button data-x-onclick="hSubReviewReject" data-req-id="${r.id}" class="admin-mini-btn" style="color:#f87171;">رفض</button>
                        ` : `-`}
                    </td>`;
                tbody.appendChild(tr);
            });
        } catch (e) {
            empty.classList.remove("hidden");
            empty.textContent = "تعذر تحميل طلبات الاشتراك.";
        }
    };

    window.adminReviewSubscriptionRequest = async function (requestId, action) {
        if (isViewerRole()) { adminToast("دور المشاهدة مش مسموح له بمراجعة الطلبات.", "error"); return; }
        const req = adminSubReqCache.find(r => r.id === requestId);
        let planOverride;
        if (action === "approve" && req && !PLAN_NAMES.includes(req.plan)) {
            planOverride = prompt(`الباقة "${req.plan || ''}" مش من الباقات القياسية.\nاكتب اسم الباقة اللي هتتفعّل بالظبط: ${PLAN_NAMES.join(" / ")}`, PLAN_NAMES[1]);
            if (!planOverride || !PLAN_NAMES.includes(planOverride)) { adminToast("اسم باقة غير صحيح، اتلغت العملية.", "error"); return; }
        }
        let reason;
        if (action === "reject") {
            reason = prompt("سبب الرفض (اختياري):", "") || "";
        }
        const sure = confirm(action === "approve" ? "تأكيد الموافقة على الطلب وتفعيل الباقة فورًا؟" : "تأكيد رفض الطلب؟");
        if (!sure) return;
        try {
            await adminFetch("/adminReviewSubscriptionRequest", {
                method: "POST",
                body: JSON.stringify({ requestId, action, planOverride, reason })
            });
            adminToast(action === "approve" ? "تمت الموافقة وتفعيل الباقة." : "تم رفض الطلب.", "success");
            adminLoadSubscriptionRequests();
            adminRefreshAll();
        } catch (e) {
            adminToast("خطأ: " + (e.data && e.data.error ? e.data.error : (e.message || "unknown")), "error");
        }
    };

    // ---- سجل نشاط الأدمن (بند 8: فلترة بنوع العملية + limit مخصّص + عمود "بواسطة" + عدّاد النتائج) ----
    window.adminLoadActivityLog = async function () {
        const tbody = document.getElementById("admin-log-tbody");
        const empty = document.getElementById("admin-log-empty");
        const countLabel = document.getElementById("admin-log-count-label");
        const action = document.getElementById("admin-log-filter-action").value;
        let limit = parseInt(document.getElementById("admin-log-limit").value, 10);
        if (!Number.isFinite(limit) || limit <= 0) limit = 200;
        try {
            const data = await adminFetch("/adminActivityLog", { method: "POST", body: JSON.stringify({ limit, action }) });
            const logs = data.logs || [];
            adminActivityLogCache = logs; // نحتفظ بيها هنا عشان زرار "تصدير CSV" يصدّر نفس اللي متعروض بالظبط
            tbody.innerHTML = "";
            empty.classList.toggle("hidden", logs.length > 0);
            logs.forEach(entry => {
                const tr = document.createElement("tr");
                const time = entry.time ? new Date(entry.time).toLocaleString("ar-EG") : "-";
                const by = (entry.details && entry.details.by) ? entry.details.by : "-";
                const details = entry.details ? escapeHtml(JSON.stringify(entry.details)) : "-";
                tr.innerHTML = `
                    <td class="text-slate-400 whitespace-nowrap">${escapeHtml(time)}</td>
                    <td class="font-bold text-slate-200">${escapeHtml(entry.action || "-")}</td>
                    <td class="text-slate-400 whitespace-nowrap">${escapeHtml(by)}</td>
                    <td class="text-slate-500" style="max-width:340px; overflow-wrap:anywhere;">${details}</td>`;
                tbody.appendChild(tr);
            });
            const totalKnown = typeof data.total === "number" ? data.total : logs.length;
            countLabel.textContent = totalKnown > logs.length
                ? `معروض ${logs.length} من إجمالي ${totalKnown}`
                : `عدد النتائج: ${logs.length}`;
        } catch (e) {
            empty.classList.remove("hidden");
            empty.textContent = "تعذر تحميل سجل النشاط.";
            countLabel.textContent = "";
        }
    };

    // ---- تصدير سجل النشاط المعروض حاليًا كملف CSV ----
    window.adminExportActivityLogCsv = function () {
        if (!adminActivityLogCache.length) { adminToast("مفيش سجل نشاط لتصديره بعد. اضغط \"تحديث السجل\" الأول.", "error"); return; }
        const headers = ["الوقت", "العملية", "بواسطة", "التفاصيل"];
        const rows = adminActivityLogCache.map(entry => [
            entry.time ? new Date(entry.time).toLocaleString("ar-EG") : "",
            entry.action || "",
            (entry.details && entry.details.by) ? entry.details.by : "",
            entry.details ? JSON.stringify(entry.details) : ""
        ]);
        const csvEscape = v => `"${String(v).replace(/"/g, '""')}"`;
        const csv = "\uFEFF" + [headers, ...rows].map(r => r.map(csvEscape).join(",")).join("\r\n");
        const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = `yusr-activity-log-${new Date().toISOString().slice(0, 10)}.csv`;
        document.body.appendChild(a); a.click(); a.remove();
    };

    // ================================================================
    // ============== بند 1: الشكاوى والاقتراحات (Feedback) ==============
    // ================================================================
    window.adminLoadFeedback = async function () {
        const tbody = document.getElementById("admin-feedback-tbody");
        const empty = document.getElementById("admin-feedback-empty");
        const badge = document.getElementById("admin-feedback-badge");
        try {
            const data = await adminFetch("/adminListFeedback");
            const items = data.items || [];
            adminFeedbackCache = items;
            tbody.innerHTML = "";
            empty.classList.toggle("hidden", items.length > 0);
            const readOnly = isViewerRole();
            items.forEach(f => {
                const tr = document.createElement("tr");
                if (!f.adminRead) tr.style.background = "rgba(138,180,248,.06)";
                const time = f.createdAt ? new Date(f.createdAt).toLocaleString("ar-EG") : "-";
                tr.innerHTML = `
                    <td class="text-slate-300 whitespace-nowrap">${escapeHtml(f.type || "-")}</td>
                    <td class="text-slate-400" dir="ltr" style="max-width:140px; overflow-wrap:anywhere;">${escapeHtml(f.contact || "-")}</td>
                    <td class="text-slate-300" style="max-width:280px; overflow-wrap:anywhere;">${escapeHtml(f.message || "")}</td>
                    <td class="text-slate-500 whitespace-nowrap">${escapeHtml(time)}</td>
                    <td>
                        <div class="flex flex-wrap gap-1">
                            <button class="admin-mini-btn" ${readOnly ? "disabled" : ""} data-x-onclick="hFeedbackToggle" data-fb-id="${f.id}" data-fb-action="${f.adminRead ? 'markUnread' : 'markRead'}">${f.adminRead ? "غير مقروء" : "علّم كمقروء"}</button>
                            <button class="admin-mini-btn hover:bg-red-500/10 hover:text-red-300" ${readOnly ? "disabled" : ""} data-x-onclick="hFeedbackDelete" data-fb-id="${f.id}"><i class="fa-solid fa-trash"></i></button>
                        </div>
                    </td>`;
                tbody.appendChild(tr);
            });
            const unread = data.unreadCount || 0;
            badge.classList.toggle("hidden", unread === 0);
            badge.textContent = unread + " جديد";
        } catch (e) {
            empty.classList.remove("hidden");
            empty.textContent = "تعذر تحميل الشكاوى.";
        }
    };

    window.adminFeedbackAction = async function (id, action) {
        if (isViewerRole()) { adminToast("دور المشاهدة مش مسموح له بالتعديل.", "error"); return; }
        try {
            await adminFetch("/adminFeedbackAction", { method: "POST", body: JSON.stringify({ id, action }) });
            adminLoadFeedback();
        } catch (e) {
            adminToast("تعذر تنفيذ الإجراء.", "error");
        }
    };

    // ================================================================
    // ============== بند 5: منحنى نمو المستخدمين/الإيرادات ==============
    // ================================================================
    window.adminRenderTrendChart = async function () {
        const svg = document.getElementById("admin-trend-chart");
        const emptyEl = document.getElementById("admin-trend-empty");
        const metric = document.getElementById("admin-trend-metric").value;
        try {
            const data = await adminFetch("/adminStatsHistory", { method: "POST", body: JSON.stringify({ days: 30 }) });
            const history = data.history || [];
            if (history.length < 2) {
                svg.innerHTML = "";
                emptyEl.classList.remove("hidden");
                return;
            }
            emptyEl.classList.add("hidden");
            const values = history.map(h => Number(h[metric]) || 0);
            const maxV = Math.max(...values, 1);
            const minV = Math.min(...values, 0);
            const W = 640, H = 180, PAD = 26;
            const stepX = values.length > 1 ? (W - PAD * 2) / (values.length - 1) : 0;
            const scaleY = v => H - PAD - ((v - minV) / ((maxV - minV) || 1)) * (H - PAD * 2);
            const points = values.map((v, i) => `${PAD + i * stepX},${scaleY(v)}`).join(" ");
            const accent = "#8ab4f8";
            let svgContent = `<polyline points="${points}" fill="none" stroke="${accent}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"></polyline>`;
            const labelEvery = Math.max(1, Math.ceil(values.length / 6));
            values.forEach((v, i) => {
                const x = PAD + i * stepX, y = scaleY(v);
                svgContent += `<circle cx="${x}" cy="${y}" r="2.5" fill="${accent}"></circle>`;
                if (i === 0 || i === values.length - 1 || i % labelEvery === 0) {
                    svgContent += `<text x="${x}" y="${H - 6}" font-size="9" fill="#94a3b8" text-anchor="middle">${escapeHtml(String(history[i].date || "").slice(5))}</text>`;
                }
            });
            svgContent += `<text x="${PAD}" y="14" font-size="10" fill="#94a3b8">أعلى قيمة: ${maxV.toLocaleString("ar-EG")}</text>`;
            svg.innerHTML = svgContent;
        } catch (e) {
            emptyEl.classList.remove("hidden");
            emptyEl.textContent = "تعذر تحميل بيانات المنحنى.";
        }
    };

    window.adminRecordStatsNow = async function () {
        if (isViewerRole()) { adminToast("دور المشاهدة مش مسموح له بهذا الإجراء.", "error"); return; }
        try {
            await adminFetch("/adminRecordStatsNow");
            adminToast("اتسجلت لقطة إحصائيات جديدة لليوم.", "success");
            adminRenderTrendChart();
        } catch (e) {
            adminToast("تعذر تسجيل اللقطة.", "error");
        }
    };

    // ================================================================
    // ============== بند 6: إدارة حسابات الأدمن الإضافية ==============
    // ================================================================
    window.adminLoadAccounts = async function () {
        if (isViewerRole()) return; // اللوحة نفسها متخفية عن الـ viewer برضه، ده مجرد حماية إضافية
        const tbody = document.getElementById("admin-accounts-tbody");
        const empty = document.getElementById("admin-accounts-empty");
        try {
            const data = await adminFetch("/adminListAdmins");
            const admins = data.admins || [];
            tbody.innerHTML = "";
            empty.classList.toggle("hidden", admins.length > 0);
            admins.forEach(a => {
                const tr = document.createElement("tr");
                tr.innerHTML = `
                    <td class="font-bold text-slate-200">${escapeHtml(a.username)}</td>
                    <td>${a.role === "superadmin" ? "صلاحية كاملة" : "مشاهدة فقط"}</td>
                    <td class="text-slate-500">${escapeHtml(a.createdBy || "-")}</td>
                    <td><button class="admin-mini-btn hover:bg-red-500/10 hover:text-red-300" type="button"><i class="fa-solid fa-trash"></i> حذف</button></td>`;
                // ملحوظة إصلاح: كان الزرار مبني بـ onclick="...${JSON.stringify(a.username)}"
                // جوه attribute متقفول بعلامة تنصيص مزدوجة " " — وJSON.stringify بترجع
                // string متقفول هو نفسه بعلامتين تنصيص مزدوجة، فكانت بتقفل الـ attribute
                // بدري وتكسر الزرار مع أي حساب أدمن تاني (مش بس أسماء فيها رموز خاصة).
                // الحل: نربط الحدث بـ addEventListener بدل ما نحط القيم جوه نص الـ HTML،
                // وده أسلم كمان (مفيش أي خطر إدخال كود لو اسم المستخدم فيه علامات تنصيص).
                tr.querySelector("button").addEventListener("click", () => adminDeleteAccount(a.id, a.username));
                tbody.appendChild(tr);
            });
        } catch (e) {
            empty.classList.remove("hidden");
            empty.textContent = "تعذر تحميل حسابات الأدمن.";
        }
    };

    window.adminCreateAccount = async function () {
        if (isViewerRole()) { adminToast("دور المشاهدة مش مسموح له بهذا الإجراء.", "error"); return; }
        const usernameInput = document.getElementById("admin-newacc-username");
        const passwordInput = document.getElementById("admin-newacc-password");
        const username = usernameInput.value.trim();
        const password = passwordInput.value;
        const role = document.getElementById("admin-newacc-role").value;
        if (!username || username.length < 3) { adminToast("اكتب اسم مستخدم صحيح (3 أحرف على الأقل).", "error"); return; }
        if (!password || password.length < 6) { adminToast("كلمة المرور لازم تكون 6 أحرف على الأقل.", "error"); return; }
        try {
            await adminFetch("/adminCreateAdmin", { method: "POST", body: JSON.stringify({ username, password, role }) });
            adminToast("اتضاف حساب الأدمن بنجاح.", "success");
            usernameInput.value = "";
            passwordInput.value = "";
            adminLoadAccounts();
        } catch (e) {
            const reason = (e && e.data && e.data.error) || "";
            const msgMap = {
                username_taken: "اسم المستخدم ده مستخدم بالفعل.",
                username_reserved: "اسم المستخدم ده محجوز.",
                weak_password: "كلمة المرور دي ضعيفة.",
                invalid_username: "اسم المستخدم غير صالح."
            };
            adminToast(msgMap[reason] || "تعذر إضافة الحساب.", "error");
        }
    };

    window.adminDeleteAccount = async function (id, username) {
        if (isViewerRole()) { adminToast("دور المشاهدة مش مسموح له بهذا الإجراء.", "error"); return; }
        const ok = await adminConfirm(`متأكد إنك عايز تحذف حساب الأدمن "${username}"؟`);
        if (!ok) return;
        try {
            await adminFetch("/adminDeleteAdmin", { method: "POST", body: JSON.stringify({ id }) });
            adminToast("اتحذف الحساب.", "success");
            adminLoadAccounts();
        } catch (e) {
            adminToast("تعذر حذف الحساب.", "error");
        }
    };

    // ================================================================
    // ============== بند 4: رسالة جماعية (Broadcast) ==============
    // ================================================================
    window.adminSendBroadcast = async function () {
        if (isViewerRole()) { adminToast("دور المشاهدة مش مسموح له بإرسال رسائل جماعية.", "error"); return; }
        const target = document.getElementById("admin-broadcast-target").value;
        const textInput = document.getElementById("admin-broadcast-text");
        const text = textInput.value.trim();
        if (!text) { adminToast("اكتب نص الرسالة الأول.", "error"); return; }
        const targetLabel = target === "all" ? "كل المستخدمين" : `مستخدمي باقة "${target}"`;
        const ok = await adminConfirm(`متأكد إنك عايز تبعت الرسالة دي لـ ${targetLabel}؟`);
        if (!ok) return;
        try {
            const data = await adminFetch("/adminBroadcast", { method: "POST", body: JSON.stringify({ target, text }) });
            adminToast(`اتبعتت الرسالة لـ ${data.sent} مستخدم.`, "success");
            textInput.value = "";
        } catch (e) {
            const reason = (e && e.data && e.data.error) || "";
            adminToast(reason === "no_matching_users" ? "مفيش مستخدمين مطابقين للفئة دي." : "تعذر إرسال الرسالة.", "error");
        }
    };

    // ================================================================
    // ============== نظرة عامة على كل المحادثات (Global Chat Inbox) ==============
    // ================================================================
    window.adminOpenAllChats = async function () {
        document.getElementById("admin-allchats-modal").classList.remove("hidden");
        document.getElementById("admin-allchats-current-name").textContent = "اختر محادثة من القائمة";
        document.getElementById("admin-allchats-log").innerHTML = "";
        adminAllChatsCurrentUid = null;
        await adminAllChatsLoadList();
        clearInterval(adminAllChatsListPollTimer);
        adminAllChatsListPollTimer = setInterval(adminAllChatsLoadList, 15000);
    };

    window.adminCloseAllChats = function () {
        document.getElementById("admin-allchats-modal").classList.add("hidden");
        clearInterval(adminAllChatsListPollTimer);
        clearInterval(adminAllChatsCurrentPollTimer);
        adminAllChatsCurrentUid = null;
    };

    window.adminAllChatsLoadList = async function () {
        const listEl = document.getElementById("admin-allchats-list");
        const emptyEl = document.getElementById("admin-allchats-empty");
        const badge = document.getElementById("admin-allchats-badge");
        try {
            const data = await adminFetch("/adminListChats");
            const conversations = data.conversations || [];
            emptyEl.classList.toggle("hidden", conversations.length > 0);
            const totalUnread = conversations.reduce((sum, c) => sum + (c.unreadFromUser || 0), 0);
            badge.classList.toggle("hidden", totalUnread === 0);
            badge.textContent = totalUnread;
            listEl.innerHTML = conversations.map(c => {
                const time = c.lastTime ? new Date(c.lastTime).toLocaleString("ar-EG", { hour: "2-digit", minute: "2-digit", day: "2-digit", month: "2-digit" }) : "";
                const activeStyle = c.uid === adminAllChatsCurrentUid ? "background:rgba(138,180,248,.1);" : "";
                return `<button type="button" class="w-full text-right p-2.5 hover:bg-[var(--panel)] transition-colors" style="${activeStyle}" data-x-onclick="hAllChatsOpen" data-chat-uid="${c.uid}">
                    <div class="flex items-center justify-between gap-2">
                        <p class="font-bold text-slate-200 text-[11px]">${escapeHtml(c.displayName || c.email || c.uid)}</p>
                        ${c.unreadFromUser ? `<span class="admin-badge admin-badge-suspended" style="font-size:.55rem;">${c.unreadFromUser}</span>` : ""}
                    </div>
                    <p class="text-slate-500 text-[10px] truncate">${escapeHtml(c.lastMessage || "")}</p>
                    <p class="text-slate-600 text-[9px] mt-0.5">${escapeHtml(time)}</p>
                </button>`;
            }).join("");
        } catch (e) {
            emptyEl.classList.remove("hidden");
            emptyEl.textContent = "تعذر تحميل المحادثات.";
        }
    };

    window.adminAllChatsOpen = async function (uid) {
        adminAllChatsCurrentUid = uid;
        const u = adminFindUser(uid);
        document.getElementById("admin-allchats-current-name").textContent = (u && (u.displayName || u.email)) || uid;
        await adminAllChatsLoadCurrent();
        clearInterval(adminAllChatsCurrentPollTimer);
        adminAllChatsCurrentPollTimer = setInterval(adminAllChatsLoadCurrent, 8000);
        adminAllChatsLoadList(); // عشان نحدّث الهايلايت وعدّاد الغير مقروء في القائمة
    };

    window.adminAllChatsLoadCurrent = async function () {
        if (!adminAllChatsCurrentUid) return;
        const uid = adminAllChatsCurrentUid;
        try {
            const data = await adminFetch("/chatPoll", { method: "POST", body: JSON.stringify({ uid }) });
            if (adminAllChatsCurrentUid !== uid) return; // اتغيّرت المحادثة المفتوحة قبل ما الرد يوصل
            const log = document.getElementById("admin-allchats-log");
            const messages = data.messages || [];
            if (!messages.length) {
                log.innerHTML = '<p class="text-slate-500 text-center">لسه مفيش أي رسائل في المحادثة دي.</p>';
                return;
            }
            log.innerHTML = messages.map(m => {
                const isAdmin = m.from === "admin";
                const time = m.createdAt ? new Date(m.createdAt).toLocaleTimeString("ar-EG", { hour: "2-digit", minute: "2-digit" }) : "";
                return `<div style="text-align:${isAdmin ? "left" : "right"};">
                    <span class="inline-block rounded-lg px-2 py-1" style="max-width:85%; background:${isAdmin ? "var(--accent-strong)" : "var(--panel-2)"}; color:${isAdmin ? "#08131f" : "inherit"};">
                        ${escapeHtml(m.text || "")}
                    </span>
                    <div class="text-[9px] text-slate-500 mt-0.5">${isAdmin ? "أنت (الدعم)" : "المستخدم"} · ${time}</div>
                </div>`;
            }).join("");
            log.scrollTop = log.scrollHeight;
        } catch (e) { /* فشل التحميل مش خطير - هيحاول تاني في البولينج الجاي */ }
    };

    window.adminAllChatsSend = async function () {
        if (!adminAllChatsCurrentUid) { adminToast("اختر محادثة من القائمة الأول.", "error"); return; }
        if (isViewerRole()) { adminToast("دور المشاهدة مش مسموح له بإرسال رسائل.", "error"); return; }
        const input = document.getElementById("admin-allchats-input");
        const text = input.value.trim();
        if (!text) return;
        input.value = "";
        try {
            await adminFetch("/chatSend", { method: "POST", body: JSON.stringify({ uid: adminAllChatsCurrentUid, text }) });
            adminAllChatsLoadCurrent();
        } catch (e) {
            adminToast("تعذر إرسال الرسالة.", "error");
            input.value = text;
        }
    };

    // ---- تصدير كل المستخدمين كملف CSV (بيتفتح في Excel عادي) ----
    window.adminExportUsersCsv = function () {
        if (!adminUsersCache.length) { adminToast("مفيش بيانات مستخدمين لتصديرها بعد.", "error"); return; }
        const headers = ["UID", "الإيميل", "الاسم", "الباقة", "سقف مخصص", "الاستخدام الشهري", "موقوف", "أونلاين"];
        const rows = adminUsersCache.map(u => [
            u.uid, u.email || "", u.displayName || "", u.plan || "",
            u.customLimit ?? "", u.usageThisMonth ?? 0, u.suspended ? "نعم" : "لا", u.online ? "نعم" : "لا"
        ]);
        const csvEscape = v => `"${String(v).replace(/"/g, '""')}"`;
        const csv = "\uFEFF" + [headers, ...rows].map(r => r.map(csvEscape).join(",")).join("\r\n");
        const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = `yusr-users-${new Date().toISOString().slice(0, 10)}.csv`;
        document.body.appendChild(a); a.click(); a.remove();
    };

    // ---- نسخة احتياطية فورية لكل قاعدة البيانات (superadmin بس) ----
    window.adminBackupNow = async function () {
        if (isViewerRole()) { adminToast("دور المشاهدة مش مسموح له بعمل نسخة احتياطية.", "error"); return; }
        const btn = document.getElementById("admin-backup-btn");
        btn.disabled = true;
        try {
            const data = await adminFetch("/adminBackupNow");
            const blob = new Blob([JSON.stringify(data.data, null, 2)], { type: "application/json" });
            const a = document.createElement("a");
            a.href = URL.createObjectURL(blob);
            a.download = `yusr-backup-${new Date().toISOString().replace(/[:.]/g, "-")}.json`;
            document.body.appendChild(a); a.click(); a.remove();
            adminToast("اتنزلت النسخة الاحتياطية.", "success");
        } catch (e) {
            adminToast("تعذر إنشاء النسخة الاحتياطية.", "error");
        } finally {
            btn.disabled = false;
        }
    };

    function renderAdminStats(stats) {
        document.getElementById("admin-stat-total").textContent = stats.totalUsers ?? "-";
        document.getElementById("admin-stat-online").textContent = stats.onlineCount ?? "-";
        document.getElementById("admin-stat-suspended").textContent = stats.suspendedCount ?? "-";

        const planCounts = stats.planCounts || {};
        let topPlan = "-", topCount = -1;
        const breakdown = document.getElementById("admin-plan-breakdown");
        breakdown.innerHTML = "";
        PLAN_NAMES.forEach((p) => {
            const c = planCounts[p] || 0;
            if (c > topCount) { topCount = c; topPlan = p; }
            const div = document.createElement("div");
            div.className = "admin-plan-chip";
            div.innerHTML = `<p class="text-sm font-bold text-slate-100">${c}</p><p class="text-[10px] text-slate-500 mt-0.5">${p}</p>`;
            breakdown.appendChild(div);
        });
        document.getElementById("admin-stat-topplan").textContent = topCount > 0 ? topPlan : "-";

        const onlineList = document.getElementById("admin-online-list");
        const online = stats.onlineUsers || [];
        if (!online.length) {
            onlineList.innerHTML = '<span class="text-[11px] text-slate-500">لا أحد أونلاين حاليًا</span>';
        } else {
            onlineList.innerHTML = online.map(u =>
                `<span class="admin-badge admin-badge-online"><span class="dot"></span>${escapeHtml(u.displayName || u.email || u.uid)}</span>`
            ).join("");
        }
    }

    function escapeHtml(s) {
        return String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
    }

    window.adminRenderUsers = function () {
        const q = (document.getElementById("admin-user-search").value || "").trim().toLowerCase();
        const tbody = document.getElementById("admin-users-tbody");
        const empty = document.getElementById("admin-users-empty");
        const filtered = adminUsersCache.filter(u => {
            if (!q) return true;
            return (u.email || "").toLowerCase().includes(q) || (u.displayName || "").toLowerCase().includes(q) || u.uid.toLowerCase().includes(q);
        });
        tbody.innerHTML = "";
        empty.classList.toggle("hidden", filtered.length > 0);

        const readOnly = isViewerRole();
        filtered.forEach(u => {
            const tr = document.createElement("tr");
            const planOptions = PLAN_NAMES.map(p => `<option value="${p}" ${p === u.plan ? "selected" : ""}>${p}</option>`).join("");
            tr.innerHTML = `
                <td>
                    <button type="button" class="text-right hover:opacity-75 transition-opacity" data-x-onclick="hAdminOpenUserModal" data-user-uid="${u.uid}" title="افتح مساحة إدارة هذا المستخدم">
                        <p class="font-bold text-slate-200">${escapeHtml(u.displayName || "بدون اسم")}</p>
                        <p class="text-slate-500 text-[10px]">${escapeHtml(u.email || u.uid)}</p>
                    </button>
                </td>
                <td><select class="admin-mini-input" style="width:auto" ${readOnly ? "disabled" : ""} data-x-onchange="hAdminSetPlan" data-user-uid="${u.uid}">${planOptions}</select></td>
                <td class="text-center">${u.usageThisMonth ?? 0}</td>
                <td><input type="number" min="0" class="admin-mini-input" placeholder="افتراضي" value="${u.customLimit ?? ""}" ${readOnly ? "disabled" : ""} data-x-onchange="hAdminSetCustomLimit" data-user-uid="${u.uid}"></td>
                <td>
                    ${u.suspended ? '<span class="admin-badge admin-badge-suspended">موقوف</span>' : (u.online ? '<span class="admin-badge admin-badge-online"><span class="dot"></span>أونلاين</span>' : '<span class="admin-badge admin-badge-offline">غير متصل</span>')}
                </td>
                <td>
                    <button class="admin-mini-btn" data-x-onclick="hAdminOpenUserModal" data-user-uid="${u.uid}"><i class="fa-solid fa-gear"></i> ${readOnly ? "عرض" : "إدارة"}</button>
                </td>`;
            tbody.appendChild(tr);
        });
    };

    window.adminUserAction = async function (uid, action, value) {
        if (isViewerRole()) { adminToast("دور المشاهدة مش مسموح له بالتعديل.", "error"); return; }
        try {
            await adminFetch("/adminUserAction", { method: "POST", body: JSON.stringify({ uid, action, value }) });
            adminToast("تم بنجاح.", "success");
            adminRefreshAll();
        } catch (e) {
            adminToast("الإجراء فشل.", "error");
        }
    };

    window.adminSendPasswordReset = async function (uid, email) {
        if (isViewerRole()) { adminToast("دور المشاهدة مش مسموح له بالتعديل.", "error"); return; }
        try {
            await adminFetch("/adminSendPasswordReset", { method: "POST", body: JSON.stringify({ email }) });
            adminToast("اتبعت رابط استعادة الباسورد على " + email, "success");
        } catch (e) {
            adminToast("تعذر إرسال الرابط.", "error");
        }
    };

    // ================================================================
    // ============== مساحة عمل مستخدم واحد (Admin User Workspace) ==============
    // ================================================================
    // كل حاجة تخص مستخدم بعينه بقت في مكان واحد بيتفتح بالضغط على اسمه في
    // الجدول - مفيش داعي تطلع لأي أداة خارجية (Wrangler أو غيرها) عشان تدير
    // حساب حد. من هنا تقدر: تغيّر باقته/سقفه، توقفه/تفعّله، تصفّر استخدامه،
    // تبعتله رابط استعادة باسورد، تدّيله أي صلاحية إضافية عايزها (أو تكتب
    // ملاحظة إدارية داخلية عليه)، أو تمسحه نهائيًا.
    const ADMIN_PERMISSION_DEFS = [
        { key: "unlimitedUsage", label: "استخدام غير محدود" },
        { key: "betaFeatures", label: "ميزات تجريبية (Beta)" },
        { key: "moderator", label: "صلاحية مشرف" },
        { key: "noAds", label: "بدون إعلانات" },
        { key: "prioritySupport", label: "دعم أولوية" },
        { key: "extraStorage", label: "تخزين إضافي" }
    ];
    let adminUserModalUid = null;
    function adminFindUser(uid) { return adminUsersCache.find(u => u.uid === uid); }

    window.adminOpenUserModal = function (uid) {
        const u = adminFindUser(uid);
        if (!u) { adminToast("تعذر العثور على بيانات هذا المستخدم - حدّث الصفحة وجرّب تاني.", "error"); return; }
        adminUserModalUid = uid;
        const readOnly = isViewerRole();

        document.getElementById("admin-user-modal-name").textContent = u.displayName || "بدون اسم";
        document.getElementById("admin-user-modal-email").textContent = u.email || u.uid;
        document.getElementById("admin-user-modal-status-badge").innerHTML = u.suspended
            ? '<span class="admin-badge admin-badge-suspended">الحساب موقوف</span>'
            : (u.online ? '<span class="admin-badge admin-badge-online"><span class="dot"></span>أونلاين دلوقتي</span>' : '<span class="admin-badge admin-badge-offline">غير متصل حاليًا</span>');

        const planSel = document.getElementById("admin-user-modal-plan");
        planSel.innerHTML = PLAN_NAMES.map(p => `<option value="${p}" ${p === u.plan ? "selected" : ""}>${p}</option>`).join("");
        planSel.disabled = readOnly;

        const limitInput = document.getElementById("admin-user-modal-limit");
        limitInput.value = u.customLimit ?? "";
        limitInput.disabled = readOnly;

        const pointsInput = document.getElementById("admin-user-modal-points");
        if (pointsInput) {
            pointsInput.value = u.points ?? 0;
            pointsInput.disabled = readOnly;
        }

        document.getElementById("admin-user-modal-usage").textContent = u.usageThisMonth ?? 0;

        const suspendBtn = document.getElementById("admin-user-modal-suspend-btn");
        suspendBtn.textContent = u.suspended ? "تفعيل الحساب" : "إيقاف الحساب";
        suspendBtn.disabled = readOnly;

        const resetPwBtn = document.getElementById("admin-user-modal-reset-pw-btn");
        resetPwBtn.style.display = u.email ? "" : "none";
        resetPwBtn.disabled = readOnly;

        const permsWrap = document.getElementById("admin-user-modal-permissions");
        const perms = u.permissions || {};
        permsWrap.innerHTML = ADMIN_PERMISSION_DEFS.map(p => `
            <label class="flex items-center gap-1.5 text-[11px] text-slate-300 panel rounded-lg px-2 py-1.5 ${readOnly ? "" : "cursor-pointer"}">
                <input type="checkbox" data-perm-key="${p.key}" ${perms[p.key] ? "checked" : ""} ${readOnly ? "disabled" : ""}>
                ${p.label}
            </label>`).join("");

        const noteEl = document.getElementById("admin-user-modal-note");
        noteEl.value = u.adminNote || "";
        noteEl.disabled = readOnly;

        document.getElementById("admin-user-modal").classList.remove("hidden");
        adminModalLoadChat();
        clearInterval(adminModalChatPollTimer);
        adminModalChatPollTimer = setInterval(adminModalLoadChat, 15000);
    };

    window.adminCloseUserModal = function () {
        document.getElementById("admin-user-modal").classList.add("hidden");
        adminUserModalUid = null;
        clearInterval(adminModalChatPollTimer);
    };

    // ---- شات مباشر مع المستخدم المفتوح في المودال دلوقتي ----
    let adminModalChatPollTimer = null;
    window.adminModalLoadChat = async function () {
        if (!adminUserModalUid) return;
        const uid = adminUserModalUid;
        try {
            const data = await adminFetch("/chatPoll", { method: "POST", body: JSON.stringify({ uid }) });
            if (adminUserModalUid !== uid) return; // المستخدم اتقفل/اتغيّر لحد ما الرد رجع
            const log = document.getElementById("admin-user-modal-chat-log");
            const messages = data.messages || [];
            if (!messages.length) {
                log.innerHTML = '<p class="text-slate-500 text-center">لسه مفيش أي رسائل في المحادثة دي.</p>';
                return;
            }
            log.innerHTML = messages.map(m => {
                const isAdmin = m.from === "admin";
                const time = m.createdAt ? new Date(m.createdAt).toLocaleTimeString("ar-EG", { hour: "2-digit", minute: "2-digit" }) : "";
                return `<div style="text-align:${isAdmin ? "left" : "right"};">
                    <span class="inline-block rounded-lg px-2 py-1" style="max-width:85%; background:${isAdmin ? "var(--accent-strong)" : "var(--panel-2)"}; color:${isAdmin ? "#08131f" : "inherit"};">
                        ${escapeHtml(m.text || "")}
                    </span>
                    <div class="text-[9px] text-slate-500 mt-0.5">${isAdmin ? "أنت (الدعم)" : "المستخدم"} · ${time}</div>
                </div>`;
            }).join("");
            log.scrollTop = log.scrollHeight;
        } catch (e) { /* فشل التحميل مش خطير - هيحاول تاني في البولينج الجاي */ }
    };

    window.adminModalSendChat = async function () {
        if (!adminUserModalUid) return;
        if (isViewerRole()) { adminToast("دور المشاهدة مش مسموح له بإرسال رسائل.", "error"); return; }
        const input = document.getElementById("admin-user-modal-chat-input");
        const text = input.value.trim();
        if (!text) return;
        input.value = "";
        try {
            await adminFetch("/chatSend", { method: "POST", body: JSON.stringify({ uid: adminUserModalUid, text }) });
            adminModalLoadChat();
        } catch (e) {
            adminToast("تعذر إرسال الرسالة.", "error");
            input.value = text;
        }
    };

    window.adminModalUserAction = async function (action, value) {
        if (!adminUserModalUid) return;
        if (isViewerRole()) { adminToast("دور المشاهدة مش مسموح له بالتعديل.", "error"); return; }
        try {
            await adminFetch("/adminUserAction", { method: "POST", body: JSON.stringify({ uid: adminUserModalUid, action, value }) });
            adminToast("تم بنجاح.", "success");
            const uidToReopen = adminUserModalUid;
            await adminRefreshAll();
            if (uidToReopen) window.adminOpenUserModal(uidToReopen); // نفتح نفس المستخدم تاني ببياناته المحدّثة بدل ما نقفل المودال فجأة
        } catch (e) {
            adminToast("الإجراء فشل.", "error");
        }
    };

    window.adminModalToggleSuspend = function () {
        const u = adminFindUser(adminUserModalUid);
        if (!u) return;
        window.adminModalUserAction(u.suspended ? "activate" : "suspend");
    };

    window.adminModalSendPasswordReset = async function () {
        const u = adminFindUser(adminUserModalUid);
        if (!u || !u.email) return;
        if (isViewerRole()) { adminToast("دور المشاهدة مش مسموح له بالتعديل.", "error"); return; }
        try {
            await adminFetch("/adminSendPasswordReset", { method: "POST", body: JSON.stringify({ email: u.email }) });
            adminToast("اتبعت رابط استعادة الباسورد على " + u.email, "success");
        } catch (e) {
            adminToast("تعذر إرسال الرابط.", "error");
        }
    };

    window.adminModalSavePermissions = async function () {
        if (!adminUserModalUid) return;
        if (isViewerRole()) { adminToast("دور المشاهدة مش مسموح له بالتعديل.", "error"); return; }
        const permsWrap = document.getElementById("admin-user-modal-permissions");
        const perms = {};
        permsWrap.querySelectorAll("input[data-perm-key]").forEach(cb => { perms[cb.getAttribute("data-perm-key")] = cb.checked; });
        const note = document.getElementById("admin-user-modal-note").value;
        try {
            await adminFetch("/adminUserAction", { method: "POST", body: JSON.stringify({ uid: adminUserModalUid, action: "setPermissions", value: perms }) });
            await adminFetch("/adminUserAction", { method: "POST", body: JSON.stringify({ uid: adminUserModalUid, action: "setNote", value: note }) });
            adminToast("اتحفظت الصلاحيات والملاحظة.", "success");
            adminRefreshAll();
        } catch (e) {
            adminToast("تعذر الحفظ.", "error");
        }
    };

    // ---- بديل عام لـ window.confirm() اللي ممكن يكون متمنوع أو مش شغال كويس
    // جوه بعض متصفحات الموبايل/الـ webviews - وده على الأرجح كان سبب إحساسك
    // إن "زرار حذف نهائي مش شغال": الضغط عليه كان بيستدعي confirm() المتصفح
    // اللي في بعض البيئات (خصوصًا داخل تطبيقات موبايل مغلّفة) بيترفض يظهر
    // أصلاً أو بيرجع false تلقائيًا من غير ما تشوفه، فالعملية توقف بصمت. ==== 
    function adminConfirm(message) {
        return new Promise(resolve => {
            const modal = document.getElementById("admin-confirm-modal");
            document.getElementById("admin-confirm-modal-text").textContent = message;
            const yesBtn = document.getElementById("admin-confirm-modal-yes");
            const noBtn = document.getElementById("admin-confirm-modal-no");
            const cleanup = (result) => {
                modal.classList.add("hidden");
                yesBtn.onclick = null; noBtn.onclick = null;
                resolve(result);
            };
            yesBtn.onclick = () => cleanup(true);
            noBtn.onclick = () => cleanup(false);
            modal.classList.remove("hidden");
        });
    }

    window.adminModalDeleteUser = async function () {
        if (!adminUserModalUid) return;
        if (isViewerRole()) { adminToast("دور المشاهدة مش مسموح له بالتعديل.", "error"); return; }
        const uid = adminUserModalUid;
        const u = adminFindUser(uid);
        const label = (u && (u.displayName || u.email)) || uid;
        const ok1 = await adminConfirm(`متأكد إنك عايز تمسح "${label}" نهائيًا من قاعدة البيانات؟ الإجراء ده مينفعش يترجع.`);
        if (!ok1) return;
        const ok2 = await adminConfirm("تأكيد أخير: هيتشال بالكامل (الاسم/الصورة/النقط/الباقة/الصلاحيات/سجل الاستخدام). لو سجّل دخول تاني بنفس حسابه هيدخل كمستخدم جديد من الصفر. متابعة؟");
        if (!ok2) return;
        try {
            await adminFetch("/adminUserAction", { method: "POST", body: JSON.stringify({ uid, action: "delete" }) });
            adminToast("اتمسح من قاعدة البيانات بنجاح.", "success");
            window.adminCloseUserModal();
            adminRefreshAll();
        } catch (e) {
            const reason = (e && e.data && e.data.error) ? e.data.error : "خطأ غير معروف";
            adminToast("تعذر حذف البيانات (" + reason + ").", "error");
        }
    };
})();
