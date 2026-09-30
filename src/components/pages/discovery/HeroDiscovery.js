import { ArrowDown, Check, Clock3, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";
import { getServerLocale } from "@/i18n/server";

export default async function HeroDiscovery() {
  const locale = await getServerLocale();
  const fa = locale === "fa";
  const copy = fa
    ? {
        eyebrow: "جلسه راهبردی خصوصی · تراستنس",
        title: "پیش از ساختن، تصمیم درست را پیدا کنیم.",
        body: "یک گفت‌وگوی متمرکز برای روشن‌کردن مسئله، فرصت و بهترین مسیر دیجیتال؛ بدون ارائه فروش آماده و بدون تعهد زودهنگام.",
        button: "درخواست جلسه خصوصی",
        note: "پاسخ اولیه معمولاً در یک روز کاری",
        cardEyebrow: "در این جلسه",
        cardTitle: "از ابهام به یک قدم بعدی روشن می‌رسیم.",
        points: ["اهداف تجاری و معیار موفقیت", "مخاطب، تجربه و اصطکاک‌های فعلی", "دامنه، فناوری و فرصت‌های اتوماسیون"],
        meta: [["۴۵ دقیقه", "گفت‌وگوی ویدیویی"], ["رایگان", "بدون تعهد"]],
      }
    : {
        eyebrow: "Private strategy session · Trustence",
        title: "Before we build, let’s find the right decision.",
        body: "A focused conversation to clarify the problem, the opportunity, and the strongest digital path, without a rehearsed sales pitch or premature commitment.",
        button: "Request a private session",
        note: "Initial response usually within one business day",
        cardEyebrow: "During the session",
        cardTitle: "We turn uncertainty into a credible next move.",
        points: ["Business objectives and success criteria", "Audience, experience, and current friction", "Scope, technology, and automation potential"],
        meta: [["45 minutes", "Focused video call"], ["Complimentary", "No obligation"]],
      };

  return (
    <section className="relative overflow-hidden bg-[#07120c] px-5 pb-24 pt-44 text-white md:px-10 md:pb-32 md:pt-52">
      <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="pointer-events-none absolute -start-40 top-20 h-[34rem] w-[34rem] rounded-full bg-[#245336]/30 blur-[110px]" />
      <div className="pointer-events-none absolute -end-32 bottom-0 h-96 w-96 rounded-full bg-[#cba792]/10 blur-[100px]" />
      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.08fr_.72fr] lg:items-end">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-[#cba792]/25 bg-[#cba792]/10 px-4 py-2 text-xs font-bold uppercase tracking-[.18em] text-[#e6c9b6]"><Sparkles className="h-4 w-4" /> {copy.eyebrow}</p>
          <h1 className="title mt-8 max-w-5xl text-5xl font-semibold leading-[1.08] text-[#fff8ee] md:text-7xl lg:text-[5.6rem]">{copy.title}</h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/62 md:text-xl md:leading-9">{copy.body}</p>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Link href="#formDiscover" className="group inline-flex items-center gap-3 rounded-2xl bg-[#fff8ee] px-6 py-4 font-bold text-[#07120c] transition hover:-translate-y-1 hover:bg-white">{copy.button}<ArrowDown className="h-5 w-5 transition group-hover:translate-y-1" /></Link>
            <span className="inline-flex items-center gap-2 text-sm text-white/45"><Clock3 className="h-4 w-4 text-[#86a58f]" />{copy.note}</span>
          </div>
        </div>
        <aside className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.055] p-7 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-9">
          <div className="absolute end-0 top-0 h-32 w-32 rounded-bl-full bg-[#658672]/10" />
          <p className="relative text-xs font-bold uppercase tracking-[.2em] text-[#cba792]">{copy.cardEyebrow}</p>
          <h2 className="relative mt-5 text-2xl font-semibold leading-snug text-[#fff8ee] md:text-3xl">{copy.cardTitle}</h2>
          <ul className="relative mt-8 space-y-4">{copy.points.map((point) => <li key={point} className="flex items-start gap-3 border-t border-white/10 pt-4 text-sm leading-6 text-white/65"><span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#658672]/20"><Check className="h-3.5 w-3.5 text-[#b7d1bd]" /></span>{point}</li>)}</ul>
          <div className="relative mt-9 grid grid-cols-2 gap-3">{copy.meta.map(([value, label]) => <div key={value} className="rounded-2xl border border-white/10 bg-black/15 p-4"><p className="font-bold text-[#fff8ee]">{value}</p><p className="mt-1 text-xs text-white/40">{label}</p></div>)}</div>
          <p className="relative mt-5 flex items-center gap-2 text-xs text-white/38"><ShieldCheck className="h-4 w-4 text-[#86a58f]" /> {fa ? "اطلاعات شما محرمانه می‌ماند." : "Your information is treated confidentially."}</p>
        </aside>
      </div>
    </section>
  );
}
