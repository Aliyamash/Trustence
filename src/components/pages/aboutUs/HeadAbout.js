"use client";

import { useEffect, useRef } from "react";
import { ArrowDown, Sparkles } from "lucide-react";
import { gsap } from "gsap";
import { useLocale } from "@/i18n/LocaleProvider";

export default function HeadAbout() {
  const { locale } = useLocale();
  const sectionRef = useRef(null);
  const copy = locale === "fa" ? {
    eyebrow: "استودیوی دیجیتال بوتیک · تراستنس",
    title: "تیمی کوچک با دامنه‌ای عمیق؛ برای کارهای دیجیتالی که باید ماندگار باشند.",
    body: "استراتژی، مهندسی نرم‌افزار، طراحی، اتوماسیون و رشد را در یک تیم متمرکز کنار هم می‌آوریم تا تصمیم‌ها منسجم‌تر، مسیر آرام‌تر و نتیجه قابل مالکیت باشد.",
    note: "سوئیس · همکاری در سراسر جهان",
    stats: [["یک تیم", "از جهت‌گیری تا انتشار"], ["مالکیت روشن", "سورس، مستندات و تحویل"], ["ارتباط مستقیم", "بدون لایه‌های غیرضروری"]],
    explore: "داستان و اصول ما",
  } : {
    eyebrow: "Boutique digital studio · Trustence",
    title: "A small team with deep range—for digital work built to endure.",
    body: "We bring strategy, software engineering, design, automation, and growth into one focused team, creating more coherent decisions, a calmer process, and work you can truly own.",
    note: "Switzerland · Working worldwide",
    stats: [["One team", "From direction to launch"], ["Clear ownership", "Source, documentation, handover"], ["Direct access", "No unnecessary layers"]],
    explore: "Our story and principles",
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => gsap.from("[data-about-reveal]", { y: 34, opacity: 0, duration: 0.75, stagger: 0.1, ease: "power3.out" }), sectionRef);
    return () => ctx.revert();
  }, [locale]);

  return <section ref={sectionRef} className="relative isolate overflow-hidden bg-[#061009] px-5 pb-14 pt-36 text-[#fff8ee] md:px-10 md:pb-20 md:pt-48">
    <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_18%,rgba(101,134,114,.32),transparent_30%),radial-gradient(circle_at_85%_35%,rgba(203,167,146,.16),transparent_25%)]" />
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
        <div><p data-about-reveal className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#cba792]/25 bg-[#cba792]/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[.18em] text-[#e6c9b6]"><Sparkles className="h-4 w-4" />{copy.eyebrow}</p><h1 data-about-reveal className="title max-w-5xl text-balance text-[clamp(2.6rem,6.5vw,6.5rem)] font-semibold leading-[1.05]">{copy.title}</h1></div>
        <div className="lg:pb-3"><p data-about-reveal className="max-w-xl text-lg leading-8 text-white/68 md:text-xl">{copy.body}</p><p data-about-reveal className="mt-7 text-xs font-bold uppercase tracking-[.2em] text-[#86a58f]">{copy.note}</p></div>
      </div>
      <div className="mt-16 grid gap-px overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/10 sm:grid-cols-3">{copy.stats.map(([title, body], index) => <div data-about-reveal key={title} className="bg-[#0a1810]/95 p-5 md:p-7"><span className="font-mono text-xs text-[#cba792]">0{index + 1}</span><h2 className="mt-5 text-lg font-bold">{title}</h2><p className="mt-2 text-sm text-white/48">{body}</p></div>)}</div>
      <a data-about-reveal href="#principles" className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.16em] text-white/45 transition hover:text-white">{copy.explore}<ArrowDown className="h-4 w-4" /></a>
    </div>
  </section>;
}
