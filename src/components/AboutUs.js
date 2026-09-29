"use client";

import { ChevronRight } from "lucide-react";
import aboutImg from "@/public/images/trustencpic.jpg"
import Link from "next/link";
import Image from "next/image";
import { useLocale } from "@/i18n/LocaleProvider";
import { getCopy } from "@/i18n/copy";

export default function AboutUs() {
  const { locale, isRtl } = useLocale();
  const content = getCopy(locale).home.about;
  return (
    <section data-motion="section" className="bg-[#658672] py-20 md:py-28" id="about">
      <div className="container grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
        <div className="text-white">
          <p className="mb-4 text-xs font-bold uppercase tracking-[.2em] text-[#10291c]">{content.eyebrow}</p>
          <div>
            
            <h2 className="title max-w-3xl pb-6 text-4xl leading-tight text-[#fff8ee] md:text-6xl">
              {content.title}
            </h2>
          </div>
          <p className="mb-8 max-w-2xl text-lg leading-8 text-white/80">
            {content.body}
          </p>
          <div className="grid gap-px overflow-hidden rounded-3xl border border-white/15 bg-white/15 sm:grid-cols-2">
            <div className="bg-[#5c7d68] p-5">
              <h3 className="title mb-2 text-lg text-[#07120c]">{content.point1}</h3>
              <p className="text-sm leading-7 text-white/75">{content.point1Body}</p>
            </div>
            <div className="bg-[#5c7d68] p-5">
              <h3 className="title mb-2 text-lg text-[#07120c]">{content.point2}</h3>
              <p className="text-sm leading-7 text-white/75">{content.point2Body}</p>
            </div>
          </div>
          {/* btns */}
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Link
              className="rounded-2xl bg-[#fff8ee] px-6 py-4 font-bold text-[#07120c] transition hover:-translate-y-1"
              href={"/aboutus"}
            >
              {content.studio}
            </Link>
            <div className="flex items-center text-white/80 hover:text-white">
              <Link
                className="px-1 font-bold transition-all duration-500"
                href={"/discovery"}
              >
                {content.discuss}
              </Link>
              <ChevronRight className={`transition-all duration-500 ${isRtl ? "rotate-180" : ""}`} />
            </div>
          </div>
        </div>
        <div className="relative w-full overflow-hidden rounded-[2rem] bg-[#10291c] p-3 shadow-2xl shadow-[#07120c]/20">
          <Image
            src={aboutImg}
            className="aspect-[5/4] h-full w-full rounded-[1.4rem] object-cover"
            alt={isRtl ? "تیم تراستنس در حال برنامه‌ریزی یک پروژه دیجیتال" : "Trustence team planning a website design project"}
          />
          <div className="absolute inset-x-7 bottom-7 rounded-2xl border border-white/15 bg-[#07120c]/80 p-4 text-sm text-white/75 backdrop-blur-xl">{locale === "fa" ? "تفکر تجاری، طراحی سنجیده و مهندسی قابل اتکا؛ در یک فرایند منسجم." : "Commercial thinking, considered design, and dependable engineering—in one coherent process."}</div>
        </div>
      </div>
    </section>
  );
}
