import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { getServerLocale } from "@/i18n/server";

export default async function DiscoverAbout() {
  const locale = await getServerLocale();
  const fa = locale === "fa";
  const copy = fa ? { eyebrow: "قدم بعدی", title: "با یک جلسه آشنایی سنجیده آغاز کنید.", body: "اهداف، محدودیت‌ها و فرصت اصلی را در یک گفت‌وگوی متمرکز بررسی می‌کنیم و قدم بعدی قابل اتکایی تعریف می‌کنیم.", services: "مشاهده خدمات", session: "درخواست جلسه" } : { eyebrow: "The next step", title: "Begin with a considered discovery session.", body: "We examine the objective, constraints, and highest-value opportunity in one focused conversation, then define a credible next step.", services: "Explore services", session: "Request a session" };
  return <section className="relative overflow-hidden bg-[#658672] py-20 text-white md:py-28"><div className="pointer-events-none absolute -end-20 -top-28 h-96 w-96 rounded-full border border-white/15" /><div className="container relative grid gap-8 md:grid-cols-[1fr_auto] md:items-end"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#10291c]">{copy.eyebrow}</p><h2 className="title mt-5 max-w-5xl text-4xl leading-tight text-[#fff8ee] md:text-6xl">{copy.title}</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">{copy.body}</p></div><div className="flex flex-wrap gap-3"><Link href="/service" className="rounded-xl border border-white/25 px-5 py-3.5 font-bold text-white transition hover:bg-white/10">{copy.services}</Link><Link href="/discovery" className="inline-flex items-center gap-2 rounded-xl bg-[#fff8ee] px-5 py-3.5 font-bold text-[#07120c]">{copy.session}<ArrowUpRight className={fa ? "-rotate-90" : ""} /></Link></div></div></section>;
}
