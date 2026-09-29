"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowDown, ArrowRight, Check, Sparkles } from "lucide-react";
import { useLocale } from "@/i18n/LocaleProvider";
import { getCopy } from "@/i18n/copy";

export default function Hero() {
  const sectionRef = useRef(null);
  const { locale, isRtl } = useLocale();
  const copy = getCopy(locale);
  const { hero } = copy.home;

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.timeline({ defaults: { ease: "power3.out" } })
        .from("[data-hero-reveal]", { y: 34, opacity: 0, duration: 0.75, stagger: 0.1 })
        .from("[data-hero-proof]", { y: 20, opacity: 0, duration: 0.5, stagger: 0.07 }, "-=.35");
    }, sectionRef);
    return () => ctx.revert();
  }, [locale]);

  return (
    <section ref={sectionRef} className="relative isolate overflow-hidden bg-[#07120c] px-5 pb-10 pt-32 text-[#fff8ee] sm:px-8 md:pb-12 md:pt-40">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(101,134,114,.34),transparent_30%),radial-gradient(circle_at_86%_30%,rgba(203,167,146,.16),transparent_26%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="mx-auto flex min-h-[calc(88svh-8rem)] max-w-7xl flex-col justify-center">
        <div className="max-w-6xl">
          <p data-hero-reveal className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#cba792]/25 bg-[#cba792]/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[.16em] text-[#e6c9b6]"><Sparkles className="h-4 w-4" />{hero.eyebrow}</p>
          <h1 data-hero-reveal className={`title max-w-6xl text-balance text-[clamp(2.65rem,7.2vw,7.25rem)] font-semibold leading-[1.03] ${isRtl ? "hero-title-fa" : ""}`}>{hero.title}</h1>
          <div className="mt-7 grid gap-7 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p data-hero-reveal className="max-w-3xl text-lg font-medium leading-8 text-white/76 md:text-2xl md:leading-10">{hero.lead}</p>
              <p data-hero-reveal className="mt-3 max-w-2xl text-sm leading-7 text-white/48 md:text-base">{hero.body}</p>
            </div>
            <div data-hero-reveal className="flex flex-col gap-3 sm:flex-row">
              <Link href="/discovery" className="inline-flex items-center justify-center gap-3 rounded-2xl bg-[#fff8ee] px-6 py-4 font-bold text-[#07120c] transition hover:-translate-y-1 hover:bg-white">{copy.common.discover}<ArrowRight className={`h-5 w-5 ${isRtl ? "rotate-180" : ""}`} /></Link>
              <Link href="/projects" className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-4 font-semibold text-white/80 transition hover:bg-white/10">{copy.common.work}</Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-6 lg:flex-row lg:items-center lg:justify-between">
          <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/58">{hero.trust.map((item) => <li data-hero-proof key={item} className="flex items-center gap-2"><Check className="h-4 w-4 text-[#86a58f]" />{item}</li>)}</ul>
          <a data-hero-proof href="#expertise" className="hidden items-center gap-2 text-xs font-bold uppercase tracking-[.16em] text-white/40 transition hover:text-white md:flex">{locale === "fa" ? "مرور توانمندی‌ها" : "Explore our capabilities"}<ArrowDown className="h-4 w-4" /></a>
        </div>
      </div>

      <div className="mx-auto mt-3 grid max-w-7xl gap-px overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/10 sm:grid-cols-3">
        {hero.steps.map((step, index) => <div data-hero-proof key={step} className="flex items-center gap-4 bg-[#0b1b12]/95 px-5 py-4"><span className="font-mono text-xs text-[#cba792]">0{index + 1}</span><span className="text-sm font-semibold text-white/72">{step}</span></div>)}
      </div>
    </section>
  );
}
