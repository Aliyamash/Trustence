"use client";

import { Languages } from "lucide-react";
import { useLocale } from "@/i18n/LocaleProvider";

export default function LanguageSwitcher({ compact = false }) {
  const { locale } = useLocale();
  const label = locale === "fa" ? "EN" : "فا";
  const description = locale === "fa" ? "Switch to English" : "نمایش فارسی";

  return (
    <button
      type="button"
      onClick={() => {
        const url = new URL(window.location.href);
        url.searchParams.set("lang", locale === "fa" ? "en" : "fa");
        window.location.assign(url.toString());
      }}
      aria-label={description}
      title={description}
      className={`inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 font-bold text-white transition hover:border-[#cba792]/60 hover:bg-white/10 hover:text-[#e6c9b6] ${compact ? "h-10 min-w-12 px-2 text-xs" : "h-11 min-w-16 px-3 text-sm"}`}
    >
      <Languages className="h-4 w-4" aria-hidden="true" />
      <span>{label}</span>
    </button>
  );
}
