"use client"

import { useFormStatus } from "react-dom";
import { useLocale } from "@/i18n/LocaleProvider";

export default function SubmitButton({ title, loadingTitle, style }) {
  const { pending } = useFormStatus();
  const { locale } = useLocale();
  return (
    <button className={style} type="submit" disabled={pending} aria-disabled={pending}>
      {pending ? (loadingTitle || (locale === "fa" ? "در حال ارسال…" : "Sending…")) : title}
    </button>
  );
}
