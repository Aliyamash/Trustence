"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useLocale } from "@/i18n/LocaleProvider";
import { getCopy } from "@/i18n/copy";

export default function Discover() {
  const { locale, isRtl } = useLocale();
  const copy = getCopy(locale);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => gsap.from("[data-cta-reveal]", { y: 32, opacity: 0, duration: 0.75, stagger: 0.12, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 78%", once: true } }), sectionRef);
    return () => ctx.revert();
  }, [locale]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#123d27] py-20 text-[#fff8ee] md:py-28">
      <div className="pointer-events-none absolute -end-24 -top-24 h-96 w-96 rounded-full border border-white/10" /><div className="pointer-events-none absolute -end-8 -top-8 h-56 w-56 rounded-full border border-[#cba792]/20" />
      <div className="container relative grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
        <div><p data-cta-reveal className="mb-4 text-xs font-bold uppercase tracking-[.2em] text-[#cba792]">{locale === "fa" ? "قدم بعدی" : "A considered next step"}</p><h2 data-cta-reveal className="title max-w-5xl text-4xl leading-tight md:text-7xl">{copy.home.discover.title}</h2><p data-cta-reveal className="mt-5 max-w-2xl text-lg leading-8 text-white/60">{locale === "fa" ? "هدف، محدودیت‌ها و فرصت اصلی را در یک گفت‌وگوی متمرکز روشن می‌کنیم؛ بدون ارائه فروش از پیش آماده." : "Clarify the objective, constraints, and highest-value opportunity in one focused conversation—without a rehearsed sales pitch."}</p></div>
        <Link data-cta-reveal className="inline-flex w-fit items-center gap-3 rounded-2xl bg-[#fff8ee] px-6 py-4 font-bold text-[#07120c] transition hover:-translate-y-1" href="/discovery">{copy.common.discover}<ArrowUpRight className={isRtl ? "-rotate-90" : ""} /></Link>
      </div>
    </section>
  );
}
