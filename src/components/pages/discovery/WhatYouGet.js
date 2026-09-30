import { ArrowDownRight, Check } from "lucide-react";
import { getSessionBenefits } from "@/components/OptionsDiscover";
import { getServerLocale } from "@/i18n/server";

export default async function WhatYouGet() {
  const locale = await getServerLocale();
  const benefits = getSessionBenefits(locale);
  const fa = locale === "fa";
  return (
    <section className="relative overflow-hidden bg-[#123522] px-5 py-24 text-white md:px-10 md:py-32">
      <div className="pointer-events-none absolute -end-32 -top-32 h-[30rem] w-[30rem] rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -end-16 -top-16 h-72 w-72 rounded-full border border-white/10" />
      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.72fr_1.28fr]">
        <div className="lg:sticky lg:top-32 lg:h-fit">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[#d4b39e]">{fa ? "خروجی جلسه" : "What you leave with"}</p>
          <h2 className="title mt-5 text-4xl font-semibold leading-tight text-[#fff8ee] md:text-6xl">{fa ? "یک گفت‌وگو؛ چهار خروجی کاربردی." : "One conversation. Four useful outcomes."}</h2>
          <p className="mt-6 max-w-md text-lg leading-8 text-white/55">{fa ? "حتی اگر همکاری را ادامه ندهیم، این جلسه باید دید شما را دقیق‌تر و تصمیم بعدی را روشن‌تر کند." : "Even if we do not continue together, the session should sharpen your perspective and clarify the next decision."}</p>
          <ArrowDownRight className="mt-10 hidden h-10 w-10 text-[#d4b39e] lg:block" />
        </div>
        <div className="divide-y divide-white/12 border-y border-white/12">
          {benefits.map((benefit, index) => <article key={benefit.id} className="group grid gap-5 py-8 sm:grid-cols-[auto_1fr] md:py-10"><div className="flex items-start gap-4"><span className="font-mono text-xs text-white/30">0{index + 1}</span><span className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/[.06]"><Check className="h-4 w-4 text-[#b7d1bd]" /></span></div><div><h3 className="text-xl font-semibold text-[#fff8ee] md:text-2xl">{benefit.title}</h3><p className="mt-3 max-w-2xl leading-7 text-white/50">{benefit.subtitle}</p></div></article>)}
        </div>
      </div>
    </section>
  );
}
