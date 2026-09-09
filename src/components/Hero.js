"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight, Check, MessageCircleMore, Sparkles } from "lucide-react";
import TypewriterText from "./TypewriterText";
import { useLocale } from "@/i18n/LocaleProvider";
import { getCopy } from "@/i18n/copy";

export default function Hero() {
  const sectionRef = useRef(null);
  const { locale, isRtl } = useLocale();
  const { hero } = getCopy(locale).home;

  useEffect(() => {
    const media = gsap.matchMedia();
    const ctx = gsap.context(() => {
      media.add("(prefers-reduced-motion: no-preference)", () => {
        const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
        timeline
          .from("[data-hero-copy]", { x: isRtl ? 34 : -34, opacity: 0, duration: 0.75, stagger: 0.1 })
          .from("[data-hero-card]", { x: isRtl ? -42 : 42, opacity: 0, scale: 0.97, duration: 0.8 }, "-=0.5")
          .from("[data-hero-step]", { y: 18, opacity: 0, duration: 0.45, stagger: 0.09 }, "-=0.45");
      });
    }, sectionRef);
    return () => { ctx.revert(); media.revert(); };
  }, [isRtl, locale]);

  return (
    <section ref={sectionRef} className="relative isolate min-h-[90vh] overflow-hidden bg-[#07120c] px-5 pb-20 pt-36 text-[#fff8ee] md:px-10 md:pb-28 md:pt-44">
      <div className="pointer-events-none absolute inset-0 -z-10" style={{ backgroundImage: "radial-gradient(circle at 12% 15%, rgba(101,134,114,.36), transparent 30%), radial-gradient(circle at 85% 35%, rgba(203,167,146,.18), transparent 25%)" }} />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-56 bg-gradient-to-t from-[#0d2016] to-transparent" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.08fr_.92fr]">
        <div>
          <p data-hero-copy className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#cba792]/25 bg-[#cba792]/10 px-4 py-2 text-xs font-bold uppercase tracking-[.15em] text-[#e6c9b6]"><Sparkles className="h-4 w-4" />{hero.eyebrow}</p>
          <h1
            data-hero-copy
            className={`title max-w-4xl text-4xl font-semibold leading-[1.12] sm:text-5xl md:text-7xl ${isRtl ? "hero-title-fa" : ""}`}
          >
            {hero.title}
          </h1>
          <TypewriterText text={hero.lead} className="mt-7 max-w-3xl text-xl font-medium leading-9 text-white/72 md:text-2xl" delay={0.35} />
          <p data-hero-copy className="mt-5 max-w-2xl text-base leading-8 text-white/52 md:text-lg">{hero.body}</p>

          <div data-hero-copy className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/discovery" className="inline-flex items-center justify-center gap-3 rounded-2xl bg-[#fff8ee] px-6 py-4 font-bold text-[#07120c] shadow-xl shadow-black/10 transition hover:-translate-y-1 hover:bg-white">{getCopy(locale).common.discover}<ArrowRight className={`h-5 w-5 transition ${isRtl ? "rotate-180" : ""}`} /></Link>
            <Link href="/aboutus" className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-4 font-semibold text-white/78 transition hover:border-[#86a58f] hover:bg-white/10 hover:text-white">{hero.secondary}</Link>
          </div>

          <ul data-hero-copy className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/52">{hero.trust.map((item) => <li key={item} className="flex items-center gap-2"><Check className="h-4 w-4 text-[#86a58f]" />{item}</li>)}</ul>
        </div>

        <aside data-hero-card className="relative mx-auto w-full max-w-xl rounded-[2rem] border border-white/12 bg-white/[.055] p-5 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8">
          <div className="absolute -inset-px -z-10 rounded-[2rem] bg-gradient-to-br from-[#cba792]/20 via-transparent to-[#86a58f]/20 opacity-70" />
          <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-6">
            <div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#cba792]">{hero.cardEyebrow}</p><h2 className="mt-3 text-2xl font-bold leading-snug sm:text-3xl">{hero.cardTitle}</h2></div>
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#cba792]/15 text-[#e6c9b6]"><MessageCircleMore className="h-6 w-6" /></span>
          </div>
          <ol className="mt-6 space-y-3">{hero.steps.map((step, index) => <li data-hero-step key={step} className="flex items-center gap-4 rounded-2xl border border-white/8 bg-[#061009]/55 p-4"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#86a58f]/15 font-mono text-xs text-[#b7ccb9]">0{index + 1}</span><span className="font-semibold text-white/78">{step}</span></li>)}</ol>
          <p data-hero-step className="mt-5 flex items-center gap-2 rounded-2xl bg-[#fff8ee] px-4 py-3 text-sm font-bold text-[#114422]"><span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />{hero.reply}</p>
        </aside>
      </div>
    </section>
  );
}
