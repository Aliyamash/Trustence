"use client";

import { ArrowUpRight, Check, Clock3, Instagram, Linkedin, Mail, MapPin, Send, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { create } from "@/actions/footer";
import SubmitButton from "../SubmitButton";
import { useActionState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { useLocale } from "@/i18n/LocaleProvider";
import { getCopy } from "@/i18n/copy";

export default function Footer() {
  const { locale, isRtl } = useLocale();
  const copy = getCopy(locale);
  const fa = locale === "fa";
  const [state, formAction] = useActionState(create, null);
  const formRef = useRef(null);
  const local = fa ? {
    eyebrow: "یک گفت‌وگوی سنجیده",
    title: "اگر چیزی باید بهتر کار کند، از همان‌جا شروع کنیم.",
    body: "ایده، چالش یا فرایند فعلی را کوتاه توضیح دهید. تیم ما شخصاً بررسی می‌کند و یک قدم بعدی روشن پیشنهاد می‌دهد.",
    emailLabel: "ایمیل کاری شما",
    submit: "شروع گفت‌وگو",
    sending: "در حال ارسال",
    success: "درخواست شما ثبت شد. حداکثر تا یک روز کاری پاسخ می‌دهیم.",
    reassurance: "بدون پیام تبلیغاتی؛ فقط درباره همین درخواست با شما تماس می‌گیریم.",
    location: "سوئیس · همکاری در سراسر جهان",
    response: "پاسخ در یک روز کاری",
    private: "بررسی خصوصی و مسئولانه",
    capabilities: "توانمندی‌ها",
    company: "استودیو",
  } : {
    eyebrow: "A considered conversation",
    title: "If something should work better, let’s begin there.",
    body: "Share the idea, challenge, or current process in a few words. Our team will review it personally and suggest a clear next step.",
    emailLabel: "Your work email",
    submit: "Start a conversation",
    sending: "Sending",
    success: "Your request is with us. Expect a thoughtful reply within one business day.",
    reassurance: "No promotional messages. We will contact you only about this enquiry.",
    location: "Switzerland · Working worldwide",
    response: "Reply within one business day",
    private: "Private, responsible review",
    capabilities: "Capabilities",
    company: "Studio",
  };

  useEffect(() => {
    if (!state) return;
    if (state.status === "error") toast.error(fa ? "ارسال انجام نشد؛ لطفاً دوباره تلاش کنید." : state.message);
    else formRef.current?.reset();
  }, [state, fa]);

  const groups = [
    [local.company, [[copy.nav.home, "/"], [copy.nav.about, "/aboutus"], [copy.nav.work, "/projects"], [copy.nav.contact, "/contact"]]],
    [local.capabilities, [[copy.nav.services, "/service"], [copy.footer.selected, "/projects"], [copy.nav.call, "/discovery"], [copy.footer.careers, "/aboutus#team"]]],
    [copy.footer.legal, [[copy.footer.privacy, "/privacy"], [copy.footer.terms, "/terms"], [copy.footer.copyright, "/copyright"], [copy.footer.studioEmail, "mailto:trustenceagency@gmail.com"]]],
  ];

  return (
    <footer className="relative overflow-hidden bg-[#050d08] text-white">
      <div className="pointer-events-none absolute -start-48 top-20 h-[34rem] w-[34rem] rounded-full bg-[#245336]/20 blur-[130px]" />
      <div className="pointer-events-none absolute -end-40 top-0 h-[28rem] w-[28rem] rounded-full bg-[#cba792]/10 blur-[120px]" />
      <div className="container relative py-16 md:py-24">
        <section className="grid gap-10 rounded-[2rem] border border-white/10 bg-white/[.035] p-6 shadow-2xl shadow-black/20 backdrop-blur md:p-10 lg:grid-cols-[1.1fr_.9fr] lg:items-end" aria-labelledby="footer-conversation-title">
          <div><p className="eyebrow text-[#cba792]">{local.eyebrow}</p><h2 id="footer-conversation-title" className="title mt-5 max-w-4xl text-4xl leading-tight text-[#fff8ee] md:text-6xl">{local.title}</h2><p className="mt-5 max-w-2xl text-base leading-8 text-white/58 md:text-lg">{local.body}</p></div>
          <div>
            {state?.status === "success" ? <div role="status" className="rounded-2xl border border-[#86a58f]/30 bg-[#86a58f]/10 p-5"><span className="grid h-10 w-10 place-items-center rounded-full bg-[#86a58f] text-[#07120c]"><Check className="h-5 w-5" /></span><p className="mt-4 font-semibold leading-7 text-[#fff8ee]">{local.success}</p></div> : <form ref={formRef} action={formAction} className="rounded-2xl border border-white/10 bg-[#0a1810] p-3"><label htmlFor="footer-email" className="sr-only">{local.emailLabel}</label><div className="flex flex-col gap-3 sm:flex-row"><div className="relative flex-1"><Mail className="absolute start-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#86a58f]" /><input id="footer-email" className="h-14 w-full rounded-xl border border-white/10 bg-white/[.055] pe-4 ps-11 text-white outline-none transition placeholder:text-white/35 focus:border-[#cba792]/50 focus:ring-4 focus:ring-[#cba792]/10" type="email" name="Email" autoComplete="email" dir="ltr" placeholder={local.emailLabel} required /></div><SubmitButton title={local.submit} loadingTitle={local.sending} style="inline-flex h-14 items-center justify-center rounded-xl bg-[#fff8ee] px-5 font-bold text-[#07120c] transition hover:bg-white disabled:opacity-60" /></div><p className="mt-3 flex items-start gap-2 px-1 text-xs leading-5 text-white/38"><ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#86a58f]" />{local.reassurance}</p></form>}
          </div>
        </section>

        <div className="mt-14 grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-[1.05fr_1.4fr]">
          <div><Link href="/" className="title inline-flex items-center text-3xl text-[#fff8ee]" aria-label={fa ? "خانه تراستنس" : "Trustence home"}>Trustence<span className="ms-2 h-2.5 w-2.5 rounded-full bg-[#cba792]" /></Link><p className="mt-5 max-w-md leading-7 text-white/48">{copy.footer.body}</p><ul className="mt-7 space-y-3 text-sm text-white/62"><li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-[#86a58f]" />{local.location}</li><li className="flex items-center gap-3"><Clock3 className="h-4 w-4 text-[#86a58f]" />{local.response}</li><li className="flex items-center gap-3"><ShieldCheck className="h-4 w-4 text-[#86a58f]" />{local.private}</li></ul></div>
          <nav className="grid grid-cols-2 gap-x-7 gap-y-10 sm:grid-cols-3" aria-label={fa ? "پیوندهای فوتر" : "Footer navigation"}>{groups.map(([heading, links]) => <div key={heading}><h3 className="text-xs font-bold uppercase tracking-[.16em] text-[#cba792]">{heading}</h3><ul className="mt-5 space-y-3">{links.map(([label, href]) => <li key={`${label}-${href}`}><Link href={href} className="group inline-flex items-center gap-2 text-sm text-white/55 transition hover:text-white">{label}<ArrowUpRight className={`h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100 ${isRtl ? "-rotate-90" : ""}`} /></Link></li>)}</ul></div>)}</nav>
        </div>

        <div className="flex flex-col gap-6 pt-7 text-xs text-white/38 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} Trustence. {copy.footer.rights}</p><div className="flex items-center gap-3"><a href="https://www.linkedin.com/in/trustence-agency-b13a9038a" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/55 transition hover:border-[#86a58f] hover:text-white"><Linkedin className="h-4 w-4" /></a><a href="https://www.instagram.com/trustence.official/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/55 transition hover:border-[#86a58f] hover:text-white"><Instagram className="h-4 w-4" /></a><a href="mailto:trustenceagency@gmail.com" aria-label={fa ? "ایمیل تراستنس" : "Email Trustence"} className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/55 transition hover:border-[#86a58f] hover:text-white"><Send className="h-4 w-4" /></a></div></div>
      </div>
    </footer>
  );
}
