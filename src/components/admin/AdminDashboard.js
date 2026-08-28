"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Bell,
  BarChart3,
  ChevronLeft,
  CircleUserRound,
  CheckCircle2,
  CloudUpload,
  FolderKanban,
  Eye,
  ImageIcon,
  LayoutDashboard,
  LogOut,
  Menu,
  MailOpen,
  MessageSquareText,
  Plus,
  RefreshCw,
  Search,
  Send,
  ShieldCheck,
  Trash2,
  TrendingUp,
  Users,
  X,
} from "lucide-react";

const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "") || "";
const mediaBase = process.env.NEXT_PUBLIC_MEDIA_URL?.replace(/\/$/, "") || "";

const navigation = [
  { id: "dashboard", label: "داشبورد", icon: LayoutDashboard },
  { id: "analytics", label: "آمار بازدید", icon: BarChart3 },
  { id: "projects", label: "پروژه‌ها", icon: FolderKanban },
  { id: "team", label: "اعضای تیم", icon: Users },
  { id: "messages", label: "پیام‌ها", icon: MessageSquareText },
];

const inputClass = "w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10";

function mediaUrl(source) {
  if (!source || source.startsWith("http")) return source;
  return `${mediaBase}/${source.replace(/^\//, "")}`;
}

async function apiRequest(path, apiKey, options = {}) {
  if (!apiBase) throw new Error("آدرس API تنظیم نشده است.");
  const response = await fetch(`${apiBase}${path}`, {
    ...options,
    headers: {
      "x-admin-api-key": apiKey,
      ...(options.body instanceof FormData ? {} : { "Content-Type": "application/json" }),
      ...options.headers,
    },
  });
  if (response.status === 204) return null;
  const payload = await response.json().catch(() => null);
  if (!response.ok) throw new Error(payload?.message || "درخواست انجام نشد.");
  return payload?.data;
}

async function uploadImage(file, apiKey) {
  const body = new FormData();
  body.append("image", file);
  return apiRequest("/admin/uploads", apiKey, { method: "POST", body });
}

function formatNumber(value) {
  return new Intl.NumberFormat("fa-IR").format(Number(value || 0));
}

function formatDate(value) {
  return value
    ? new Intl.DateTimeFormat("fa-IR", { dateStyle: "medium", timeStyle: "short" }).format(new Date(`${value.replace(" ", "T")}Z`))
    : "—";
}

function Login({ onLogin, loading, error }) {
  const [value, setValue] = useState("");
  return (
    <main dir="rtl" className="fixed inset-0 z-[100] grid place-items-center overflow-auto bg-[#06140d] p-5 text-right">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-[30rem] w-[30rem] rounded-full bg-teal-400/10 blur-3xl" />
      </div>
      <form
        onSubmit={(event) => { event.preventDefault(); onLogin(value); }}
        className="relative w-full max-w-md overflow-hidden rounded-[2rem] border border-white/10 bg-white/95 p-8 shadow-2xl shadow-emerald-950/50 backdrop-blur-xl"
      >
        <div className="mb-8 flex items-center gap-4">
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-800 text-white shadow-lg shadow-emerald-600/30">
            <ShieldCheck size={28} />
          </div>
          <div>
            <p className="text-xs font-bold tracking-[0.24em] text-emerald-700">TRUSTENCE</p>
            <h1 className="mt-1 text-2xl font-black text-slate-900">ورود به پنل مدیریت</h1>
          </div>
        </div>
        <p className="mb-6 text-sm leading-7 text-slate-500">برای دسترسی به داشبورد، کلید مدیریت تعریف‌شده در بک‌اند را وارد کنید.</p>
        <label className="text-sm font-bold text-slate-700">
          کلید API مدیریت
          <input className={`${inputClass} mt-2`} type="password" value={value} onChange={(event) => setValue(event.target.value)} autoFocus required />
        </label>
        {error && <p className="mt-4 rounded-xl bg-rose-50 p-3 text-sm text-rose-700">{error}</p>}
        <button disabled={loading} className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-l from-emerald-600 to-emerald-800 px-5 py-4 font-bold text-white shadow-xl shadow-emerald-700/20 transition hover:-translate-y-0.5 disabled:opacity-60">
          {loading ? <RefreshCw className="animate-spin" size={19} /> : <ChevronLeft size={19} />}
          ورود امن
        </button>
      </form>
    </main>
  );
}

function StatCard({ title, value, subtitle, icon: Icon, accent }) {
  return (
    <article className="group relative overflow-hidden rounded-[1.6rem] border border-white bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className={`absolute -left-8 -top-8 h-24 w-24 rounded-full opacity-10 ${accent}`} />
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <p className="mt-3 text-3xl font-black text-slate-900">{formatNumber(value)}</p>
          <p className="mt-2 text-xs text-slate-400">{subtitle}</p>
        </div>
        <div className={`grid h-12 w-12 place-items-center rounded-2xl text-white shadow-lg ${accent}`}><Icon size={23} /></div>
      </div>
    </article>
  );
}

function ActivityChart({ activity = [], title = "فعالیت ۷ روز اخیر", subtitle = "تعداد پیام‌های ثبت‌شده در هر روز" }) {
  const max = Math.max(...activity.map((item) => item.count), 1);
  return (
    <section className="rounded-[1.8rem] border border-white bg-white p-6 shadow-sm lg:col-span-2">
      <div className="mb-7 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-black text-slate-900">{title}</h2>
          <p className="mt-1 text-xs text-slate-400">{subtitle}</p>
        </div>
        <div className="rounded-xl bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-700">به‌روزرسانی زنده</div>
      </div>
      <div className="flex h-60 items-end gap-3 sm:gap-5">
        {activity.map((item, index) => (
          <div key={item.day} className="group flex h-full flex-1 flex-col items-center justify-end gap-3">
            <span className="text-xs font-bold text-slate-500 opacity-0 transition group-hover:opacity-100">{formatNumber(item.count)}</span>
            <div className="relative w-full max-w-16 overflow-hidden rounded-t-xl bg-emerald-50" style={{ height: `${Math.max((item.count / max) * 78, 8)}%` }}>
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-700 to-emerald-400 transition group-hover:brightness-110" />
            </div>
            <span className="text-[11px] text-slate-400">{new Intl.DateTimeFormat("fa-IR", { weekday: "short" }).format(new Date(`${item.day}T12:00:00`))}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

const deviceLabels = { desktop: "دسکتاپ", mobile: "موبایل", tablet: "تبلت", smarttv: "تلویزیون هوشمند", wearable: "پوشیدنی", console: "کنسول", embedded: "دستگاه توکار", unknown: "نامشخص" };

function countryLabel(code) {
  if (!code || code === "ZZ") return "کشور نامشخص";
  try { return new Intl.DisplayNames(["fa"], { type: "region" }).of(code) || code; } catch { return code; }
}

function countryFlag(code) {
  return /^[A-Z]{2}$/.test(code || "") && code !== "ZZ"
    ? String.fromCodePoint(...code.split("").map((letter) => 127397 + letter.charCodeAt(0)))
    : "🌐";
}

function DistributionCard({ title, subtitle, items = [], label = (value) => value }) {
  const total = items.reduce((sum, item) => sum + Number(item.views || 0), 0) || 1;
  return (
    <article className="rounded-[1.8rem] border border-white bg-white p-5 shadow-sm sm:p-6">
      <h3 className="text-lg font-black text-slate-900">{title}</h3><p className="mt-1 text-xs text-slate-400">{subtitle}</p>
      <div className="mt-6 space-y-4">{items.slice(0, 8).map((item) => { const percentage = Math.round((item.views / total) * 100); return <div key={item.label}><div className="mb-2 flex items-center justify-between gap-3 text-sm"><span className="truncate font-bold text-slate-700">{label(item.label)}</span><span className="shrink-0 text-xs text-slate-400">{formatNumber(item.views)} · {formatNumber(percentage)}٪</span></div><div className="h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-gradient-to-l from-emerald-400 to-emerald-700" style={{ width: `${percentage}%` }} /></div></div>; })}{!items.length && <p className="py-10 text-center text-sm text-slate-400">هنوز داده‌ای ثبت نشده است.</p>}</div>
    </article>
  );
}

function AnalyticsOverview({ stats }) {
  const summary = stats.summary || {};
  return (
    <section className="space-y-6">
      <div>
        <p className="text-sm font-bold text-emerald-700">رفتار بازدیدکنندگان</p>
        <h2 className="mt-1 text-3xl font-black text-slate-900">آمار بازدید سایت</h2>
        <p className="mt-2 text-sm leading-7 text-slate-500">آمار داخلی و بدون ذخیره IP؛ نشست‌ها با یک شناسه تصادفی در مرورگر تفکیک می‌شوند.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <StatCard title="کل بازدیدها" value={summary.pageViews} subtitle="از زمان فعال‌شدن آمار" icon={BarChart3} accent="bg-emerald-600" />
        <StatCard title="نشست‌های یکتا" value={summary.uniqueSessions} subtitle="بر اساس نشست مرورگر" icon={Users} accent="bg-indigo-600" />
        <StatCard title="بازدید امروز" value={summary.todayPageViews} subtitle="از ابتدای امروز" icon={TrendingUp} accent="bg-amber-500" />
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <ActivityChart activity={stats.traffic} title="بازدید ۷ روز اخیر" subtitle="بازدید صفحه در هر روز" />
        <div className="rounded-[1.8rem] bg-[#0b2117] p-6 text-white shadow-sm">
          <h3 className="text-lg font-black">منابع ورودی برتر</h3>
          <div className="mt-5 space-y-3">
            {(stats.referrers || []).map((item) => (
              <div key={item.referrer} className="rounded-2xl bg-white/5 p-3">
                <p className="truncate text-xs text-slate-300" title={item.referrer}>{item.referrer}</p>
                <p className="mt-1 font-black text-emerald-300">{formatNumber(item.views)} بازدید</p>
              </div>
            ))}
            {!stats.referrers?.length && <p className="py-10 text-center text-sm text-slate-400">هنوز منبع ورودی ثبت نشده است.</p>}
          </div>
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <DistributionCard title="کشور بازدیدکنندگان" subtitle="موقعیت تقریبی بر اساس IP؛ بدون ذخیره IP" items={stats.countries} label={(code) => `${countryFlag(code)} ${countryLabel(code)}`} />
        <DistributionCard title="نوع دستگاه" subtitle="دسکتاپ، موبایل، تبلت و سایر دستگاه‌ها" items={stats.devices} label={(value) => deviceLabels[value] || value} />
        <DistributionCard title="مرورگرها" subtitle="مرورگر و نسخه اصلی" items={stats.browsers} />
        <DistributionCard title="سیستم‌عامل‌ها" subtitle="سیستم‌عامل تشخیص‌داده‌شده" items={stats.operatingSystems} />
      </div>
      <div className="overflow-hidden rounded-[1.8rem] bg-white p-5 shadow-sm sm:p-7">
        <h3 className="text-lg font-black text-slate-900">صفحات پربازدید</h3>
        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[560px] text-right text-sm">
            <thead><tr className="border-b border-slate-100 text-xs text-slate-400"><th className="px-4 py-4">مسیر صفحه</th><th className="px-4 py-4">بازدید</th><th className="px-4 py-4">نشست یکتا</th></tr></thead>
            <tbody>{(stats.topPages || []).map((item) => <tr key={item.path} className="border-b border-slate-50"><td className="px-4 py-4 font-bold text-slate-800" dir="ltr">{item.path}</td><td className="px-4 py-4 text-emerald-700">{formatNumber(item.views)}</td><td className="px-4 py-4 text-slate-500">{formatNumber(item.sessions)}</td></tr>)}</tbody>
          </table>
          {!stats.topPages?.length && <p className="py-14 text-center text-sm text-slate-400">پس از اولین بازدید، داده‌ها در این بخش نمایش داده می‌شوند.</p>}
        </div>
      </div>
      <div className="overflow-hidden rounded-[1.8rem] bg-white p-5 shadow-sm sm:p-7">
        <div><h3 className="text-lg font-black text-slate-900">آخرین دستگاه‌های بازدیدکننده</h3><p className="mt-1 text-xs text-slate-400">مشخصات تقریبی استخراج‌شده از User-Agent</p></div>
        <div className="mt-5 overflow-x-auto"><table className="w-full min-w-[850px] text-right text-sm"><thead><tr className="border-b border-slate-100 text-xs text-slate-400"><th className="px-4 py-4">صفحه</th><th className="px-4 py-4">کشور</th><th className="px-4 py-4">دستگاه</th><th className="px-4 py-4">سیستم‌عامل</th><th className="px-4 py-4">مرورگر</th><th className="px-4 py-4">زمان</th></tr></thead><tbody>{(stats.recentVisits || []).map((visit, index) => <tr key={`${visit.created_at}-${index}`} className="border-b border-slate-50 transition hover:bg-slate-50"><td className="px-4 py-4 font-bold text-slate-800" dir="ltr">{visit.path}</td><td className="px-4 py-4">{countryFlag(visit.country_code)} {countryLabel(visit.country_code)}</td><td className="px-4 py-4"><p className="font-bold text-slate-700">{deviceLabels[visit.device_type] || visit.device_type || "نامشخص"}</p><p className="mt-1 text-xs text-slate-400">{visit.device_name || "—"}</p></td><td className="px-4 py-4 text-slate-500">{visit.operating_system || "—"}</td><td className="px-4 py-4 text-slate-500">{visit.browser || "—"}</td><td className="px-4 py-4 text-xs text-slate-400">{formatDate(visit.created_at)}</td></tr>)}</tbody></table>{!stats.recentVisits?.length && <p className="py-14 text-center text-sm text-slate-400">اطلاعات دستگاه از بازدید بعدی ثبت می‌شود.</p>}</div>
      </div>
    </section>
  );
}

function MessageTable({ messages, onStatus, onOpen }) {
  const [localMessage, setLocalMessage] = useState(null);
  const statusStyle = { new: "bg-amber-50 text-amber-700", contacted: "bg-blue-50 text-blue-700", closed: "bg-emerald-50 text-emerald-700" };
  const statusLabel = { new: "جدید", contacted: "پیگیری شد", closed: "بسته" };
  return (
    <>
    <div className="overflow-x-auto">
      <table className="w-full min-w-[780px] text-right text-sm">
        <thead><tr className="border-b border-slate-100 text-xs text-slate-400"><th className="px-4 py-4">فرستنده</th><th className="px-4 py-4">نوع فرم</th><th className="px-4 py-4">پیام</th><th className="px-4 py-4">تاریخ</th><th className="px-4 py-4">وضعیت</th><th className="px-4 py-4">جزئیات</th></tr></thead>
        <tbody>
          {messages.map((message) => (
            <tr key={message.id} className="border-b border-slate-50 transition hover:bg-slate-50/70">
              <td className="px-4 py-4"><p className="font-bold text-slate-800">{message.full_name || "عضو خبرنامه"}</p><p className="mt-1 text-xs text-slate-400">{message.email}</p></td>
              <td className="px-4 py-4 text-slate-500">{message.form_page}</td>
              <td className="max-w-xs truncate px-4 py-4 text-slate-500">{message.inquiry || "—"}</td>
              <td className="px-4 py-4 text-xs text-slate-400">{formatDate(message.created_at)}</td>
              <td className="px-4 py-4">
                <select value={message.status} onChange={(event) => onStatus(message.id, event.target.value)} className={`rounded-xl border-0 px-3 py-2 text-xs font-bold outline-none ${statusStyle[message.status] || statusStyle.new}`}>
                  {Object.entries(statusLabel).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
                </select>
              </td>
              <td className="px-4 py-4"><button onClick={() => onOpen ? onOpen(message) : setLocalMessage(message)} className="flex items-center gap-2 rounded-xl bg-slate-900 px-3 py-2 text-xs font-bold text-white transition hover:bg-emerald-700"><Eye size={15} />مشاهده</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      {!messages.length && <div className="py-16 text-center text-sm text-slate-400">هنوز پیامی ثبت نشده است.</div>}
    </div>
    {localMessage && <MessageDetails message={localMessage} onClose={() => setLocalMessage(null)} onStatus={async (id, status) => { await onStatus(id, status); setLocalMessage((current) => current ? { ...current, status } : current); }} />}
    </>
  );
}

function MessageDetails({ message, onClose, onStatus }) {
  if (!message) return null;
  const fields = [
    ["نام", message.full_name || "عضو خبرنامه"],
    ["ایمیل", message.email],
    ["شماره تماس", message.phone_number || "—"],
    ["سرویس انتخابی", message.select_service || "—"],
    ["بازه بودجه", message.budget_range || "—"],
    ["فرم مبدأ", message.form_page],
  ];
  return (
    <div className="fixed inset-0 z-[150] flex items-end justify-center bg-[#03120b]/70 p-0 backdrop-blur-md sm:items-center sm:p-5" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <article className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-[2rem] bg-white shadow-2xl sm:rounded-[2rem]">
        <header className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-100 bg-white/95 p-5 backdrop-blur-xl sm:p-7">
          <div className="flex items-center gap-4"><div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-100 text-emerald-700"><MailOpen /></div><div><p className="text-xs font-bold text-emerald-700">جزئیات درخواست #{formatNumber(message.id)}</p><h2 className="mt-1 text-xl font-black text-slate-900">{message.full_name || message.email}</h2></div></div>
          <button onClick={onClose} className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-100 text-slate-500 transition hover:bg-rose-50 hover:text-rose-600"><X size={20} /></button>
        </header>
        <div className="space-y-6 p-5 sm:p-7">
          <div className="grid gap-3 sm:grid-cols-2">{fields.map(([label, value]) => <div key={label} className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4"><p className="text-xs text-slate-400">{label}</p><p className="mt-2 break-words font-bold text-slate-800" dir={label === "ایمیل" ? "ltr" : undefined}>{value}</p></div>)}</div>
          <section className="rounded-[1.5rem] border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-5 sm:p-6"><p className="mb-3 text-xs font-black text-emerald-700">متن کامل پیام</p><p className="whitespace-pre-wrap break-words text-base leading-8 text-slate-700">{message.inquiry || "برای این فرم متنی ثبت نشده است."}</p></section>
          <div className="flex flex-col justify-between gap-4 border-t border-slate-100 pt-5 sm:flex-row sm:items-center"><p className="text-sm text-slate-400">دریافت‌شده در {formatDate(message.created_at)}</p><div className="flex flex-wrap gap-2"><button onClick={() => onStatus(message.id, "contacted")} className="flex items-center gap-2 rounded-xl bg-blue-50 px-4 py-2.5 text-sm font-bold text-blue-700"><MailOpen size={16} />پیگیری شد</button><button onClick={() => onStatus(message.id, "closed")} className="flex items-center gap-2 rounded-xl bg-emerald-700 px-4 py-2.5 text-sm font-bold text-white"><CheckCircle2 size={16} />بستن درخواست</button></div></div>
        </div>
      </article>
    </div>
  );
}

function CreatePanel({ type, apiKey, onClose, onCreated }) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [galleryCount, setGalleryCount] = useState(0);
  const isProject = type === "project";

  async function submit(event) {
    event.preventDefault();
    setBusy(true);
    setError("");
    try {
      const form = new FormData(event.currentTarget);
      const uploaded = await uploadImage(form.get("image"), apiKey);
      const body = isProject
        ? { title: form.get("title"), category_name: form.get("category_name"), intro: form.get("intro"), description: form.get("description"), link: form.get("link"), tags: form.get("tags"), banner: uploaded.path, is_published: true }
        : { name: form.get("name"), position: form.get("position"), bio: form.get("bio"), github: form.get("github"), twitter: form.get("twitter"), linkedin: form.get("linkedin"), sort_order: Number(form.get("sort_order") || 0), profile: uploaded.path, is_published: true };
      const created = await apiRequest(isProject ? "/admin/projects" : "/admin/team", apiKey, { method: "POST", body: JSON.stringify(body) });
      if (isProject) {
        const galleryFiles = form.getAll("gallery_images").filter((file) => file instanceof File && file.size > 0);
        const galleryUploads = await Promise.all(galleryFiles.map((file) => uploadImage(file, apiKey)));
        await Promise.all(galleryUploads.map((image, index) => apiRequest(`/admin/projects/${created.id}/images`, apiKey, {
          method: "POST",
          body: JSON.stringify({ path: image.path, alt_text: `${body.title} – project image ${index + 1}`, sort_order: index }),
        })));
      }
      await onCreated();
      onClose();
    } catch (submitError) {
      setError(submitError.message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="fixed inset-0 z-[130] flex items-end justify-center bg-slate-950/45 p-0 backdrop-blur-sm sm:items-center sm:p-5" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <form onSubmit={submit} className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-[2rem] bg-white p-6 shadow-2xl sm:rounded-[2rem] sm:p-8">
        <div className="mb-7 flex items-center justify-between"><div><p className="text-xs font-bold text-emerald-600">محتوای جدید</p><h2 className="mt-1 text-2xl font-black text-slate-900">{isProject ? "افزودن پروژه" : "افزودن عضو تیم"}</h2></div><button type="button" onClick={onClose} className="grid h-10 w-10 place-items-center rounded-xl bg-slate-100 text-slate-500"><X size={20} /></button></div>
        <div className="grid gap-4 sm:grid-cols-2">
          {isProject ? <><input className={inputClass} name="title" placeholder="عنوان پروژه" required /><input className={inputClass} name="category_name" placeholder="دسته‌بندی" required /><textarea className={`${inputClass} sm:col-span-2`} name="intro" placeholder="معرفی کوتاه" required /><textarea className={`${inputClass} sm:col-span-2`} name="description" placeholder="توضیحات کامل" /><input className={inputClass} name="tags" placeholder="تگ‌ها با کاما" /><input className={inputClass} name="link" type="url" placeholder="https://project.example" /></> : <><input className={inputClass} name="name" placeholder="نام کامل" required /><input className={inputClass} name="position" placeholder="سمت" required /><textarea className={`${inputClass} sm:col-span-2`} name="bio" placeholder="بیوگرافی" /><input className={inputClass} name="github" type="url" placeholder="لینک GitHub" /><input className={inputClass} name="linkedin" type="url" placeholder="لینک LinkedIn" /><input className={inputClass} name="twitter" type="url" placeholder="لینک X/Twitter" /><input className={inputClass} name="sort_order" type="number" min="0" defaultValue="0" placeholder="ترتیب" /></>}
          <label className="flex cursor-pointer items-center gap-3 rounded-2xl border-2 border-dashed border-emerald-200 bg-emerald-50/60 p-5 text-sm font-bold text-emerald-800 sm:col-span-2"><CloudUpload /><span>{isProject ? "تصویر اصلی پروژه" : "تصویر عضو تیم"} (حداکثر ۸ مگابایت)</span><input className="hidden" name="image" type="file" accept="image/jpeg,image/png,image/webp,image/gif" required /></label>
          {isProject && <label className="flex cursor-pointer items-center gap-3 rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 p-5 text-sm font-bold text-slate-700 sm:col-span-2"><ImageIcon className="text-emerald-700" /><span>تصاویر تکمیلی گالری {galleryCount ? `(${formatNumber(galleryCount)} تصویر انتخاب شده)` : "(اختیاری)"}</span><input className="hidden" name="gallery_images" type="file" accept="image/jpeg,image/png,image/webp,image/gif" multiple onChange={(event) => setGalleryCount(event.target.files?.length || 0)} /></label>}
        </div>
        {error && <p className="mt-4 rounded-xl bg-rose-50 p-3 text-sm text-rose-700">{error}</p>}
        <button disabled={busy} className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-700 px-5 py-4 font-bold text-white shadow-lg shadow-emerald-700/20 disabled:opacity-60">{busy ? <RefreshCw className="animate-spin" size={18} /> : <CloudUpload size={18} />}{busy ? "در حال آپلود..." : "آپلود و انتشار"}</button>
      </form>
    </div>
  );
}

function ProjectGalleryPanel({ project, apiKey, onClose, onChanged }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const loadImages = useCallback(async () => {
    setLoading(true);
    try {
      setImages(await apiRequest(`/admin/projects/${project.id}/images`, apiKey));
    } catch (loadError) {
      setError(loadError.message);
    } finally {
      setLoading(false);
    }
  }, [apiKey, project.id]);

  useEffect(() => { loadImages(); }, [loadImages]);

  async function addImages(event) {
    const files = Array.from(event.target.files || []).filter((file) => file.size > 0);
    if (!files.length) return;
    setBusy(true);
    setError("");
    try {
      const uploaded = await Promise.all(files.map((file) => uploadImage(file, apiKey)));
      await Promise.all(uploaded.map((image, index) => apiRequest(`/admin/projects/${project.id}/images`, apiKey, {
        method: "POST",
        body: JSON.stringify({ path: image.path, alt_text: `${project.title} – project image ${images.length + index + 1}`, sort_order: images.length + index }),
      })));
      event.target.value = "";
      await loadImages();
      await onChanged();
    } catch (uploadError) {
      setError(uploadError.message);
    } finally {
      setBusy(false);
    }
  }

  async function removeImage(image) {
    if (!window.confirm("این تصویر از گالری پروژه حذف شود؟")) return;
    setBusy(true);
    setError("");
    try {
      await apiRequest(`/admin/projects/${project.id}/images/${image.id}`, apiKey, { method: "DELETE" });
      setImages((items) => items.filter((item) => item.id !== image.id));
      await onChanged();
    } catch (removeError) {
      setError(removeError.message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="fixed inset-0 z-[140] flex items-end justify-center bg-slate-950/55 p-0 backdrop-blur-sm sm:items-center sm:p-5" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section className="max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-t-[2rem] bg-white shadow-2xl sm:rounded-[2rem]">
        <header className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-100 bg-white/95 p-5 backdrop-blur-xl sm:p-7">
          <div><p className="text-xs font-black text-emerald-700">گالری پروژه</p><h2 className="mt-1 text-xl font-black text-slate-900">{project.title}</h2><p className="mt-1 text-xs text-slate-400">تصاویر گالری در صفحهٔ جزئیات پروژه نمایش داده می‌شوند؛ تصویر اصلی تکرار نمی‌شود.</p></div>
          <button type="button" onClick={onClose} className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-100 text-slate-500 transition hover:bg-rose-50 hover:text-rose-600"><X size={20} /></button>
        </header>
        <div className="p-5 sm:p-7">
          <label className={`flex cursor-pointer items-center justify-center gap-3 rounded-[1.4rem] border-2 border-dashed border-emerald-200 bg-emerald-50/70 p-6 text-sm font-black text-emerald-800 transition hover:border-emerald-400 ${busy ? "pointer-events-none opacity-60" : ""}`}><CloudUpload size={22} /><span>{busy ? "در حال آپلود تصاویر..." : "افزودن چند تصویر به گالری"}</span><input className="hidden" type="file" accept="image/jpeg,image/png,image/webp,image/gif" multiple onChange={addImages} disabled={busy} /></label>
          {error && <p className="mt-4 rounded-2xl bg-rose-50 p-4 text-sm text-rose-700">{error}</p>}
          {loading ? <div className="grid min-h-64 place-items-center text-sm text-slate-400"><RefreshCw className="animate-spin text-emerald-600" /></div> : <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{images.map((image, index) => <article key={image.id} className="group overflow-hidden rounded-[1.4rem] border border-slate-100 bg-slate-50"><div className="relative aspect-[4/3] overflow-hidden bg-slate-200"><Image src={mediaUrl(image.path)} alt={image.alt_text || `${project.title} – project image ${index + 1}`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" /><div className="absolute left-3 top-3 rounded-full bg-slate-950/65 px-2.5 py-1 text-[10px] font-black text-white backdrop-blur">تصویر {formatNumber(index + 1)}</div></div><div className="flex items-center justify-between gap-3 p-3"><p className="truncate text-xs text-slate-500">{image.alt_text || "بدون متن جایگزین"}</p><button type="button" disabled={busy} onClick={() => removeImage(image)} className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-rose-50 text-rose-600 transition hover:bg-rose-600 hover:text-white disabled:opacity-50" aria-label="حذف تصویر"><Trash2 size={16} /></button></div></article>)}{!images.length && <div className="col-span-full rounded-[1.5rem] border border-dashed border-slate-200 py-16 text-center text-sm text-slate-400">هنوز تصویر تکمیلی برای این پروژه ثبت نشده است.</div>}</div>}
        </div>
      </section>
    </div>
  );
}

export default function AdminDashboard() {
  const [apiKey, setApiKey] = useState("");
  const [active, setActive] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [createType, setCreateType] = useState(null);
  const [galleryProject, setGalleryProject] = useState(null);
  const [stats, setStats] = useState({ summary: {}, activity: [], traffic: [], topPages: [], referrers: [], countries: [], devices: [], browsers: [], operatingSystems: [], recentVisits: [], recent: [] });
  const [projects, setProjects] = useState([]);
  const [team, setTeam] = useState([]);
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const loadData = useCallback(async (key = apiKey) => {
    setLoading(true);
    setError("");
    try {
      const [statsData, projectsData, teamData, messagesData] = await Promise.all([
        apiRequest("/admin/stats", key), apiRequest("/admin/projects", key), apiRequest("/admin/team", key), apiRequest("/admin/submissions", key),
      ]);
      setStats(statsData); setProjects(projectsData); setTeam(teamData); setMessages(messagesData);
      setApiKey(key); sessionStorage.setItem("trustence-admin-key", key);
      return true;
    } catch (loadError) {
      setError(loadError.message);
      return false;
    } finally { setLoading(false); }
  }, [apiKey]);

  useEffect(() => {
    const saved = sessionStorage.getItem("trustence-admin-key");
    if (saved) loadData(saved);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const filteredProjects = useMemo(() => projects.filter((item) => `${item.title} ${item.category_name}`.toLowerCase().includes(query.toLowerCase())), [projects, query]);
  const filteredTeam = useMemo(() => team.filter((item) => `${item.name} ${item.position}`.toLowerCase().includes(query.toLowerCase())), [team, query]);
  const filteredMessages = useMemo(() => messages.filter((item) => `${item.full_name} ${item.email} ${item.inquiry}`.toLowerCase().includes(query.toLowerCase())), [messages, query]);
  const unreadMessages = useMemo(() => messages.filter((item) => item.status === "new"), [messages]);

  async function remove(path, label) {
    if (!window.confirm(`آیا از حذف ${label} مطمئن هستید؟`)) return;
    try { await apiRequest(path, apiKey, { method: "DELETE" }); await loadData(); } catch (removeError) { setError(removeError.message); }
  }

  async function updateMessageStatus(id, status) {
    try {
      const updated = await apiRequest(`/admin/submissions/${id}`, apiKey, { method: "PATCH", body: JSON.stringify({ status }) });
      setMessages((items) => items.map((item) => item.id === id ? updated : item));
      setStats((current) => {
        const previous = messages.find((item) => item.id === id);
        const change = previous?.status === "new" && status !== "new" ? -1 : previous?.status !== "new" && status === "new" ? 1 : 0;
        return { ...current, summary: { ...current.summary, newSubmissions: Math.max(0, Number(current.summary.newSubmissions || 0) + change) }, recent: current.recent.map((item) => item.id === id ? updated : item) };
      });
      setSelectedMessage((current) => current?.id === id ? updated : current);
    } catch (statusError) { setError(statusError.message); }
  }

  function logout() { sessionStorage.removeItem("trustence-admin-key"); setApiKey(""); setError(""); }
  if (!apiKey) return <Login onLogin={loadData} loading={loading} error={error} />;

  const currentTitle = navigation.find((item) => item.id === active)?.label;
  return (
    <main dir="rtl" className="fixed inset-0 z-[100] overflow-hidden bg-[#edf4f0] text-right text-slate-800" style={{ backgroundImage: "radial-gradient(circle at 10% 5%, rgba(16,185,129,.12), transparent 28%), radial-gradient(circle at 80% 100%, rgba(20,184,166,.08), transparent 32%)" }}>
      <aside className={`fixed inset-y-0 right-0 z-[120] flex w-72 flex-col border-l border-white/5 bg-gradient-to-b from-[#061a10] via-[#082217] to-[#04110b] p-5 text-white shadow-2xl transition-transform lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex items-center justify-between border-b border-white/10 pb-6"><div className="flex items-center gap-3"><div className="grid h-11 w-11 place-items-center rounded-2xl bg-emerald-500 font-black text-[#071b12]">T</div><div><p className="font-black">Trustence</p><p className="text-[10px] tracking-[.22em] text-emerald-300">ADMIN SPACE</p></div></div><button onClick={() => setSidebarOpen(false)} className="lg:hidden"><X /></button></div>
        <nav className="mt-8 space-y-2">{navigation.map(({ id, label, icon: Icon }) => <button key={id} onClick={() => { setActive(id); setSidebarOpen(false); setQuery(""); }} className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3.5 text-sm font-bold transition ${active === id ? "bg-emerald-500 text-[#071b12] shadow-lg shadow-emerald-900/40" : "text-slate-300 hover:bg-white/5 hover:text-white"}`}><Icon size={20} />{label}{id === "messages" && stats.summary.newSubmissions > 0 && <span className="mr-auto rounded-full bg-rose-500 px-2 py-0.5 text-[10px] text-white">{formatNumber(stats.summary.newSubmissions)}</span>}</button>)}</nav>
        <div className="mt-auto rounded-2xl border border-white/10 bg-white/5 p-4"><div className="flex items-center gap-3"><CircleUserRound className="text-emerald-400" /><div><p className="text-sm font-bold">مدیر Trustence</p><p className="text-xs text-slate-400">دسترسی کامل</p></div></div><button onClick={logout} className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-white/5 py-2.5 text-xs text-slate-300 hover:bg-rose-500/20 hover:text-rose-300"><LogOut size={16} />خروج امن</button></div>
      </aside>

      {sidebarOpen && <button aria-label="بستن منو" onClick={() => setSidebarOpen(false)} className="fixed inset-0 z-[110] bg-slate-950/50 lg:hidden" />}

      <div className="h-full overflow-y-auto lg:mr-72">
        <header className="sticky top-0 z-40 flex h-20 items-center gap-4 border-b border-white/70 bg-white/80 px-4 shadow-sm shadow-slate-900/[.03] backdrop-blur-2xl sm:px-7">
          <button onClick={() => setSidebarOpen(true)} className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-100 lg:hidden"><Menu /></button>
          <div><p className="text-xs text-slate-400">فضای مدیریت</p><h1 className="text-xl font-black text-slate-900">{currentTitle}</h1></div>
          <div className="mr-auto flex items-center gap-2 sm:gap-3">
            {["projects", "team", "messages"].includes(active) && <label className="hidden items-center gap-2 rounded-2xl border border-slate-100 bg-white px-3 shadow-sm sm:flex"><Search size={17} className="text-slate-400" /><input value={query} onChange={(event) => setQuery(event.target.value)} className="w-40 bg-transparent py-2.5 text-sm outline-none" placeholder="جستجو..." /></label>}
            <button aria-label="به‌روزرسانی" onClick={() => loadData()} className="grid h-11 w-11 place-items-center rounded-2xl border border-slate-100 bg-white text-slate-500 shadow-sm transition hover:-translate-y-0.5 hover:text-emerald-700"><RefreshCw className={loading ? "animate-spin" : ""} size={18} /></button>
            <div className="relative">
              <button aria-label="اعلان‌ها" aria-expanded={notificationsOpen} onClick={() => setNotificationsOpen((value) => !value)} className={`relative grid h-11 w-11 place-items-center rounded-2xl border shadow-sm transition ${notificationsOpen ? "border-emerald-200 bg-emerald-50 text-emerald-700" : "border-slate-100 bg-white text-slate-500 hover:text-emerald-700"}`}><Bell size={18} />{unreadMessages.length > 0 && <span className="absolute -left-1 -top-1 grid min-h-5 min-w-5 place-items-center rounded-full bg-rose-500 px-1 text-[10px] font-black text-white ring-2 ring-white">{formatNumber(unreadMessages.length)}</span>}</button>
              {notificationsOpen && <div className="absolute left-0 top-14 w-[min(22rem,calc(100vw-2rem))] overflow-hidden rounded-[1.5rem] border border-slate-100 bg-white shadow-2xl shadow-slate-900/15">
                <div className="flex items-center justify-between border-b border-slate-100 p-4"><div><p className="font-black text-slate-900">اعلان‌ها</p><p className="mt-1 text-xs text-slate-400">{formatNumber(unreadMessages.length)} پیام جدید</p></div><div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-emerald-700"><Bell size={18} /></div></div>
                <div className="max-h-80 overflow-y-auto p-2">{unreadMessages.slice(0, 6).map((message) => <button key={message.id} onClick={() => { setSelectedMessage(message); setNotificationsOpen(false); }} className="flex w-full gap-3 rounded-2xl p-3 text-right transition hover:bg-emerald-50"><span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-rose-500" /><span className="min-w-0"><span className="block truncate text-sm font-black text-slate-800">{message.full_name || message.email}</span><span className="mt-1 block truncate text-xs text-slate-500">{message.inquiry || "عضویت یا درخواست جدید"}</span><span className="mt-1 block text-[10px] text-slate-400">{formatDate(message.created_at)}</span></span></button>)}{!unreadMessages.length && <div className="py-10 text-center"><CheckCircle2 className="mx-auto text-emerald-500" /><p className="mt-3 text-sm font-bold text-slate-600">اعلان جدیدی نداری</p></div>}</div>
                <button onClick={() => { setActive("messages"); setNotificationsOpen(false); }} className="w-full border-t border-slate-100 p-3 text-sm font-black text-emerald-700 hover:bg-emerald-50">مشاهده همه پیام‌ها</button>
              </div>}
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-[1500px] p-4 sm:p-7">
          {error && <div className="mb-5 flex items-center justify-between rounded-2xl bg-rose-50 p-4 text-sm text-rose-700"><span>{error}</span><button onClick={() => setError("")}><X size={18} /></button></div>}

          {active === "dashboard" && <div className="space-y-6"><section className="overflow-hidden rounded-[2rem] bg-gradient-to-l from-[#0a2d1d] via-[#0d432a] to-emerald-600 p-7 text-white shadow-xl"><div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="text-sm text-emerald-200">مدیریت محتوای سایت</p><h2 className="mt-3 text-3xl font-black sm:text-4xl">همه‌چیز تحت کنترل است.</h2><p className="mt-3 max-w-xl text-sm leading-7 text-emerald-100/70">پیام‌ها، آمار بازدید، پروژه‌ها، اعضای تیم و فایل‌های آپلودشده را از یک فضای یکپارچه مدیریت کنید.</p></div><button onClick={() => { setCreateType("project"); }} className="flex w-fit items-center gap-2 rounded-2xl bg-white px-5 py-3 font-bold text-emerald-900 shadow-lg"><Plus size={19} />پروژه جدید</button></div></section><section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5"><StatCard title="کل بازدیدها" value={stats.summary.pageViews} subtitle={`${formatNumber(stats.summary.todayPageViews)} بازدید امروز`} icon={BarChart3} accent="bg-emerald-600" /><StatCard title="کل پروژه‌ها" value={stats.summary.projects} subtitle={`${formatNumber(stats.summary.publishedProjects)} پروژه منتشرشده`} icon={FolderKanban} accent="bg-teal-600" /><StatCard title="اعضای تیم" value={stats.summary.teamMembers} subtitle="پروفایل‌های فعال تیم" icon={Users} accent="bg-cyan-600" /><StatCard title="کل پیام‌ها" value={stats.summary.submissions} subtitle={`${formatNumber(stats.summary.newSubmissions)} پیام خوانده‌نشده`} icon={MessageSquareText} accent="bg-indigo-600" /><StatCard title="فایل‌های آپلودشده" value={stats.summary.uploads} subtitle={`${formatNumber(stats.summary.todaySubmissions)} پیام امروز`} icon={ImageIcon} accent="bg-amber-500" /></section><section className="grid gap-6 lg:grid-cols-3"><ActivityChart activity={stats.traffic} title="بازدید ۷ روز اخیر" subtitle="تعداد بازدید صفحه در هر روز" /><div className="rounded-[1.8rem] bg-[#0b2117] p-6 text-white shadow-sm"><h2 className="text-lg font-black">نمای سریع</h2><div className="mt-6 space-y-3">{[{ label: "نرخ انتشار پروژه", value: stats.summary.projects ? Math.round((stats.summary.publishedProjects / stats.summary.projects) * 100) : 0 }, { label: "پیام‌های رسیدگی‌شده", value: stats.summary.submissions ? Math.round(((stats.summary.submissions - stats.summary.newSubmissions) / stats.summary.submissions) * 100) : 0 }].map((item) => <div key={item.label} className="rounded-2xl bg-white/5 p-4"><div className="mb-3 flex justify-between text-xs"><span>{item.label}</span><span className="text-emerald-300">{formatNumber(item.value)}٪</span></div><div className="h-2 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-emerald-400" style={{ width: `${item.value}%` }} /></div></div>)}</div><button onClick={() => setActive("analytics")} className="mt-5 flex w-full items-center justify-between rounded-2xl border border-white/10 p-4 text-sm text-emerald-200"><span>مشاهده آمار کامل</span><ChevronLeft /></button></div></section><section className="rounded-[1.8rem] border border-white bg-white p-6 shadow-sm"><div className="mb-4 flex items-center justify-between"><div><h2 className="text-lg font-black">آخرین پیام‌ها</h2><p className="mt-1 text-xs text-slate-400">جدیدترین درخواست‌های کاربران</p></div><button onClick={() => setActive("messages")} className="text-sm font-bold text-emerald-700">مشاهده همه</button></div><MessageTable messages={stats.recent || []} onStatus={updateMessageStatus} /></section></div>}

          {active === "analytics" && <AnalyticsOverview stats={stats} />}

          {active === "projects" && <section className="space-y-5"><div className="flex items-center justify-between"><div><h2 className="text-2xl font-black">پروژه‌ها</h2><p className="mt-1 text-sm text-slate-400">نمونه‌کارهای منتشرشده، پیش‌نویس‌ها و گالری تصویر هر پروژه</p></div><button onClick={() => setCreateType("project")} className="flex items-center gap-2 rounded-2xl bg-emerald-700 px-4 py-3 text-sm font-bold text-white shadow-lg"><Plus size={18} />افزودن پروژه</button></div><div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{filteredProjects.map((project) => <article key={project.id} className="overflow-hidden rounded-[1.7rem] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><div className="h-48 bg-slate-200 bg-cover bg-center" style={{ backgroundImage: `url("${mediaUrl(project.banner)}")` }} /><div className="p-5"><div className="flex items-center justify-between"><span className="rounded-lg bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-700">{project.category_name}</span><span className={`h-2.5 w-2.5 rounded-full ${project.is_published ? "bg-emerald-500" : "bg-slate-300"}`} /></div><h3 className="mt-4 text-lg font-black">{project.title}</h3><p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">{project.intro}</p><div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4"><button type="button" onClick={() => setGalleryProject(project)} className="flex items-center gap-2 rounded-xl bg-emerald-50 px-3 py-2 text-xs font-black text-emerald-700 transition hover:bg-emerald-100"><ImageIcon size={15} />گالری {formatNumber(project.gallery_count || 0)}</button><div className="flex items-center gap-3"><span className="text-xs text-slate-400">{formatDate(project.created_at)}</span><button onClick={() => remove(`/admin/projects/${project.id}`, project.title)} className="grid h-9 w-9 place-items-center rounded-xl bg-rose-50 text-rose-600"><Trash2 size={16} /></button></div></div></div></article>)}</div>{!filteredProjects.length && <div className="rounded-3xl bg-white py-24 text-center text-slate-400">پروژه‌ای پیدا نشد.</div>}</section>}

          {active === "team" && <section className="space-y-5"><div className="flex items-center justify-between"><div><p className="text-xs font-black text-emerald-700">تیم Trustence</p><h2 className="mt-1 text-2xl font-black">اعضای تیم</h2><p className="mt-1 text-sm text-slate-400">تمام اطلاعات و تصاویر منتقل‌شده از صفحه اصلی</p></div><button onClick={() => setCreateType("team")} className="flex items-center gap-2 rounded-2xl bg-gradient-to-l from-emerald-600 to-emerald-800 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-800/20"><Plus size={18} />عضو جدید</button></div><div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{filteredTeam.map((member) => <article key={member.id} className="group overflow-hidden rounded-[1.8rem] border border-white bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-950/10"><div className="relative h-56 overflow-hidden bg-slate-200"><div className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105" style={{ backgroundImage: `url("${mediaUrl(member.profile)}")` }} /><div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" /><div className="absolute bottom-4 right-4 text-white"><h3 className="text-xl font-black">{member.name}</h3><p className="mt-1 text-sm text-emerald-200">{member.position}</p></div><span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-black text-emerald-800 backdrop-blur">فعال</span></div><div className="p-5"><p className="line-clamp-3 min-h-[4.5rem] text-sm leading-6 text-slate-500">{member.bio || "بیوگرافی ثبت نشده است."}</p><div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4"><span className="text-xs text-slate-400">ترتیب نمایش: {formatNumber(member.sort_order)}</span><button aria-label={`حذف ${member.name}`} onClick={() => remove(`/admin/team/${member.id}`, member.name)} className="grid h-10 w-10 place-items-center rounded-xl bg-rose-50 text-rose-600 transition hover:bg-rose-600 hover:text-white"><Trash2 size={16} /></button></div></div></article>)}</div>{!filteredTeam.length && <div className="rounded-3xl bg-white py-24 text-center text-slate-400">عضوی پیدا نشد.</div>}</section>}

          {active === "messages" && <section className="overflow-hidden rounded-[2rem] border border-white bg-white/90 p-5 shadow-xl shadow-slate-900/[.04] backdrop-blur sm:p-7"><div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center"><div><p className="text-xs font-black text-emerald-700">صندوق ورودی</p><h2 className="mt-1 text-2xl font-black">پیام‌ها و درخواست‌ها</h2><p className="mt-1 text-sm text-slate-400">برای خواندن متن کامل روی دکمه «مشاهده» بزنید.</p></div><div className="flex items-center gap-2 rounded-2xl bg-emerald-50 px-4 py-3 text-xs font-bold text-emerald-700"><Send size={15} />{formatNumber(filteredMessages.length)} پیام</div></div><MessageTable messages={filteredMessages} onStatus={updateMessageStatus} onOpen={setSelectedMessage} /></section>}
        </div>
      </div>
      {createType && <CreatePanel type={createType} apiKey={apiKey} onClose={() => setCreateType(null)} onCreated={() => loadData()} />}
      {galleryProject && <ProjectGalleryPanel project={galleryProject} apiKey={apiKey} onClose={() => setGalleryProject(null)} onChanged={() => loadData()} />}
      {selectedMessage && <MessageDetails message={selectedMessage} onClose={() => setSelectedMessage(null)} onStatus={updateMessageStatus} />}
    </main>
  );
}
