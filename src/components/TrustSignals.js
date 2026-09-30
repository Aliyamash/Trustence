"use client";

import { CheckCircle2, Code2, FileKey2, Globe2 } from "lucide-react";
import { useLocale } from "@/i18n/LocaleProvider";

const content = {
  en: {
    eyebrow: "Built for confident ownership",
    title: "A digital partner should make the work clearer, not more complicated.",
    body: "Our standard is practical: direct access to the people doing the work, decisions explained in plain language, and systems your organisation can genuinely own after launch.",
    items: [
      ["Worldwide collaboration", "A Switzerland-based studio working remotely across markets."],
      ["Multidisciplinary delivery", "Strategy, design, engineering, automation, and growth in one team."],
      ["Clear ownership", "Source, documentation, credentials, and handover remain transparent."],
      ["Responsible technology", "Accessible, maintainable systems without unnecessary complexity."],
    ],
  },
  fa: {
    eyebrow: "ساخته‌شده برای مالکیت مطمئن",
    title: "یک شریک دیجیتال باید مسیر را روشن‌تر کند، نه پیچیده‌تر.",
    body: "استاندارد ما عملی و شفاف است: ارتباط مستقیم با افراد سازنده، توضیح تصمیم‌ها با زبان روشن و تحویل سیستمی که پس از انتشار واقعاً در مالکیت سازمان شما باشد.",
    items: [
      ["همکاری بین‌المللی", "استودیویی مستقر در سوئیس با امکان همکاری از راه دور در بازارهای مختلف."],
      ["تحویل چندتخصصی", "استراتژی، طراحی، مهندسی، اتوماسیون و رشد در یک تیم منسجم."],
      ["مالکیت روشن", "سورس، مستندات، دسترسی‌ها و فرایند تحویل همیشه شفاف می‌ماند."],
      ["فناوری مسئولانه", "سیستم‌های دسترس‌پذیر و قابل نگهداری، بدون پیچیدگی غیرضروری."],
    ],
  },
};

const icons = [Globe2, Code2, FileKey2, CheckCircle2];

export default function TrustSignals() {
  const { locale } = useLocale();
  const copy = content[locale === "fa" ? "fa" : "en"];

  return (
    <section data-motion="section" className="border-y border-[#07120c]/10 bg-[#f4f2eb] py-16 text-[#07120c] md:py-20" aria-labelledby="trust-signals-title">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
          <div>
            <p className="eyebrow text-[#245336]">{copy.eyebrow}</p>
            <h2 id="trust-signals-title" className="title mt-4 max-w-4xl text-3xl leading-tight md:text-5xl">{copy.title}</h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-[#173326]/68 lg:justify-self-end md:text-lg">{copy.body}</p>
        </div>
        <div data-motion-group className="mt-10 grid overflow-hidden rounded-[1.75rem] border border-[#245336]/12 bg-[#245336]/12 sm:grid-cols-2 xl:grid-cols-4 xl:gap-px">
          {copy.items.map(([title, body], index) => {
            const Icon = icons[index];
            return <article key={title} className="bg-[#fbfaf6] p-6 md:p-7"><div className="flex items-center justify-between"><Icon className="h-5 w-5 text-[#245336]" /><span className="font-mono text-[10px] text-[#245336]/35">0{index + 1}</span></div><h3 className="mt-7 text-lg font-bold text-[#123522]">{title}</h3><p className="mt-3 text-sm leading-7 text-[#173326]/62">{body}</p></article>;
          })}
        </div>
      </div>
    </section>
  );
}
