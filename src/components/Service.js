"use client";

import {
  ChartNoAxesCombined,
  ChevronRight,
  Handshake,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { useLocale } from "@/i18n/LocaleProvider";
import { getCopy } from "@/i18n/copy";

export default function Service() {
  const { locale, isRtl } = useLocale();
  const content = getCopy(locale).home.services;
  const icons = [Handshake, ChartNoAxesCombined, ShieldCheck];
  return (
    <div className="bg-[#D3DCD6]" id="service">
      <div className="container py-20 md:pt-40 md:pb-25">
        <div>
          <h2 className="title text-4xl mb-20 md:mb-32 text-black md:text-center">
            {content.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-12 justify-center gap-8">
          {content.items.map(([title, body, cta], index) => { const Icon = icons[index]; return <article key={title} className={`my-4 ${index === 2 ? "sm:col-span-2 sm:w-2/3 sm:justify-self-center lg:col-span-1 lg:w-full" : ""}`}><Icon className="icon-title-size mb-4" /><h3 className="title text-2xl font-bold text-black">{title}</h3><p className="mt-5 leading-7">{body}</p><div className="service-container my-8 flex w-fit items-center rounded-xl bg-btn px-3 py-3 transition duration-500"><Link className="btn-service text-lg transition-all duration-500" href="/service">{cta}</Link><ChevronRight className={`icon-btn-size transition-all duration-500 ${isRtl ? "rotate-180" : ""}`} /></div></article>; })}
        </div>
      </div>
    </div>
  );
}
