"use client";

import { Globe2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useLocale } from "@/i18n/LocaleProvider";

export default function LanguageSwitcher({ compact = false }) {
  const { locale, setLocale } = useLocale();
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const next = locale === "fa" ? "en" : "fa";
  const description = locale === "fa" ? "Switch website language to English" : "تغییر زبان سایت به فارسی";

  return (
    <button type="button" disabled={pending} onClick={() => { setLocale(next); startTransition(() => router.refresh()); }} aria-label={description} title={description} className={`group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[.055] font-bold text-white/70 shadow-inner shadow-white/[.03] transition duration-300 hover:border-[#cba792]/35 hover:bg-white/10 hover:text-white disabled:cursor-wait disabled:opacity-60 ${compact ? "h-11 px-2.5 text-[.68rem]" : "h-12 px-3 text-xs"}`}>
      <Globe2 className={`h-4 w-4 text-[#cba792] transition group-hover:rotate-12 ${pending ? "animate-pulse" : ""}`} aria-hidden="true" />
      <span className="uppercase tracking-[.12em]">{locale === "fa" ? "FA" : "EN"}</span>
      <span className="grid min-w-8 place-items-center rounded-full bg-white/10 px-2 py-1 text-[.62rem] text-white transition group-hover:bg-[#fff8ee] group-hover:text-[#07120c]">{locale === "fa" ? "EN" : "فا"}</span>
    </button>
  );
}
