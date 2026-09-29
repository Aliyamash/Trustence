"use client";

import { ArrowUpRight, ChartNoAxesCombined, Handshake, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useLocale } from "@/i18n/LocaleProvider";
import { getCopy } from "@/i18n/copy";

export default function Service() {
  const { locale, isRtl } = useLocale();
  const content = getCopy(locale).home.services;
  const icons = [Handshake, ChartNoAxesCombined, ShieldCheck];
  return (
    <section data-motion="section" className="bg-[#d3dcd6] py-20 md:py-28" id="service">
      <div className="container">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="mb-4 text-xs font-bold uppercase tracking-[.2em] text-[#245336]">{locale === "fa" ? "روش همکاری" : "How we create value"}</p><h2 className="title max-w-4xl text-4xl leading-tight text-[#07120c] md:text-6xl">{content.title}</h2></div><Link href="/service" className="inline-flex w-fit items-center gap-2 font-bold text-[#123d27]">{getCopy(locale).common.services}<ArrowUpRight className={`h-5 w-5 ${isRtl ? "-rotate-90" : ""}`} /></Link></div>
        <div data-motion-group className="mt-12 grid overflow-hidden rounded-[2rem] border border-[#123d27]/15 bg-[#123d27]/15 lg:grid-cols-3 lg:gap-px">
          {content.items.map(([title, body, cta], index) => { const Icon = icons[index]; return <article key={title} className="group flex min-h-80 flex-col bg-[#edf0ed] p-7 transition duration-500 hover:bg-[#fff8ee] md:p-9"><div className="flex items-center justify-between"><span className="font-mono text-xs text-[#245336]/55">0{index + 1}</span><Icon className="h-8 w-8 stroke-[1.5] text-[#658672]" /></div><h3 className="title mt-10 text-2xl leading-snug text-[#07120c]">{title}</h3><p className="mt-5 leading-7 text-[#173326]/68">{body}</p><Link className="mt-auto flex items-center gap-2 pt-8 font-bold text-[#123d27]" href="/service">{cta}<ArrowUpRight className={`h-4 w-4 transition group-hover:-translate-y-1 ${isRtl ? "-rotate-90 group-hover:-translate-x-1" : "group-hover:translate-x-1"}`} /></Link></article>; })}
        </div>
      </div>
    </section>
  );
}
