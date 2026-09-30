import { Compass, Handshake, Lightbulb, Target } from "lucide-react";
import { getServerLocale } from "@/i18n/server";

export default async function WhyDiscovery() {
  const locale = await getServerLocale();
  const copy = locale === "fa" ? {
    eyebrow: "چرا از شناخت شروع می‌کنیم؟", title: "وضوح، ارزشمندتر از شروع عجولانه است.", body: "قبل از انتخاب راه‌حل باید بدانیم چه چیزی واقعاً باید تغییر کند. این جلسه برای رسیدن به همان وضوح طراحی شده است.",
    items: [["هدف واقعی", "نتیجه کسب‌وکار را از فرضیات اولیه درباره راه‌حل جدا می‌کنیم."], ["سرمایه‌گذاری سنجیده", "ریسک، پیچیدگی و وابستگی‌ها را پیش از پرهزینه‌شدن می‌بینیم."], ["سیستم درست", "ترکیب درست طراحی، فناوری، اتوماسیون و رشد را بررسی می‌کنیم."], ["همکاری مناسب", "پیش از هر تعهدی، تناسب شیوه فکرکردن و کارکردن‌مان را می‌سنجیم."]]
  } : {
    eyebrow: "Why begin with discovery?", title: "Clarity is more valuable than a rushed start.", body: "Before choosing a solution, we need to understand what should genuinely change. This session is designed to create that clarity.",
    items: [["The real objective", "We separate the business outcome from early assumptions about the solution."], ["A considered investment", "We surface risk, complexity, and dependencies before they become expensive."], ["The right system", "We examine the right mix of design, technology, automation, and growth."], ["The right partnership", "Before commitment, we assess how well our ways of thinking and working align."]]
  };
  const icons = [Target, Lightbulb, Compass, Handshake];
  return (
    <section className="bg-[#fff8ee] px-5 py-24 text-[#07120c] md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#245336]">{copy.eyebrow}</p><h2 className="title mt-5 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">{copy.title}</h2></div>
          <p className="max-w-2xl border-s border-[#07120c]/15 ps-6 text-lg leading-8 text-[#07120c]/58 lg:justify-self-end">{copy.body}</p>
        </div>
        <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-[#07120c]/10 bg-[#07120c]/10 md:grid-cols-2 xl:grid-cols-4">
          {copy.items.map(([title, body], index) => { const Icon = icons[index]; return <article key={title} className="group relative min-h-72 bg-[#fffaf3] p-7 transition hover:bg-white md:p-8"><div className="flex items-center justify-between"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#e8efe8] text-[#245336] transition group-hover:-translate-y-1"><Icon className="h-5 w-5" /></span><span className="font-mono text-xs text-[#07120c]/25">0{index + 1}</span></div><h3 className="mt-12 text-xl font-bold">{title}</h3><p className="mt-4 text-sm leading-7 text-[#07120c]/55">{body}</p></article>; })}
        </div>
      </div>
    </section>
  );
}
