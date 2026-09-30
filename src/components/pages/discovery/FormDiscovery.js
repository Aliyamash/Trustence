"use client";

import { formDiscover } from "@/actions/discovery";
import SubmitButton from "@/components/SubmitButton";
import { useActionState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, Clock3, LockKeyhole, Video } from "lucide-react";
import { useLocale } from "@/i18n/LocaleProvider";

export default function FormDiscovery() {
  const { locale, isRtl } = useLocale();
  const fa = locale === "fa";
  const copy = fa ? {
    eyebrow: "مسیر شروع همکاری", process: "ساده، شفاف و بدون فشار.", processBody: "برای شروع نیازی به بریف کامل ندارید. فقط مسئله را با زبان خودتان توضیح دهید؛ ما برای ادامه، پرسش‌های درست را مطرح می‌کنیم.",
    steps: [["زمینه را تعریف کنید", "هدف، چالش یا فرصتی که اکنون اهمیت دارد را کوتاه توضیح دهید."], ["جلسه متمرکز", "در یک تماس ۴۵ دقیقه‌ای، مسئله، محدودیت‌ها و تناسب همکاری را بررسی می‌کنیم."], ["قدم بعدی روشن", "در صورت تناسب، پیشنهاد مشخصی برای دامنه، زمان‌بندی و سرمایه‌گذاری دریافت می‌کنید."]],
    formEyebrow: "درخواست خصوصی", formTitle: "پروژه شما از اینجا شروع می‌شود.", formBody: "سه بخش کوتاه را تکمیل کنید. یکی از اعضای ارشد تیم شخصاً درخواست را بررسی می‌کند.", name: "نام و نام خانوادگی", namePlaceholder: "نام شما", email: "ایمیل کاری", emailPlaceholder: "name@company.com", message: "چه چیزی باید تغییر کند؟", placeholder: "کمی درباره پروژه، چالش فعلی، نتیجه دلخواه و زمان‌بندی احتمالی بنویسید…", submit: "ارسال درخواست جلسه", sending: "در حال ارسال…", reply: "پاسخ در یک روز کاری", private: "اطلاعات کاملاً محرمانه", remote: "جلسه آنلاین ۴۵ دقیقه‌ای", footer: "با ارسال فرم، فقط برای هماهنگی همین درخواست با شما تماس می‌گیریم."
  } : {
    eyebrow: "How engagement begins", process: "Simple, clear, and pressure-free.", processBody: "You do not need a finished brief. Describe the situation in your own words; we will bring the right questions to the conversation.",
    steps: [["Share the context", "Briefly describe the objective, challenge, or opportunity that matters now."], ["Focused conversation", "In a 45-minute call, we examine the problem, constraints, and mutual fit."], ["A clear next move", "When there is a fit, you receive a tailored direction for scope, timing, and investment."]],
    formEyebrow: "Private enquiry", formTitle: "Your project begins here.", formBody: "Complete three short fields. A senior member of our team will personally review your request.", name: "Full name", namePlaceholder: "Your name", email: "Work email", emailPlaceholder: "name@company.com", message: "What needs to change?", placeholder: "Tell us about the project, the current challenge, the outcome you want, and any timing you have in mind…", submit: "Send session request", sending: "Sending…", reply: "Reply within one business day", private: "Strictly confidential", remote: "45-minute video session", footer: "By submitting, you agree to be contacted only in relation to this enquiry."
  };
  const [state, formDiscoveryAction] = useActionState(formDiscover, null);
  const formRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;
    const ctx = gsap.context(() => {
      const elements = containerRef.current?.querySelectorAll("[data-discovery-reveal]");
      gsap.fromTo(elements, { y: 32, opacity: 0 }, { y: 0, opacity: 1, duration: .75, ease: "power2.out", stagger: .09, scrollTrigger: { trigger: containerRef.current, start: "top 78%" } });
    }, containerRef);
    return () => ctx.revert();
  }, [isRtl, locale]);

  useEffect(() => {
    if (!state) return;
    if (state?.status === "error") toast.error(fa ? "ارسال انجام نشد؛ لطفاً دوباره تلاش کنید." : state.message);
    else { toast.success(fa ? "درخواست جلسه با موفقیت ثبت شد." : state.message); formRef.current?.reset(); }
  }, [state, fa]);

  const inputClass = "mt-2.5 w-full rounded-2xl border border-[#07120c]/12 bg-[#f8f6f0] px-5 py-4 text-[#07120c] outline-none transition placeholder:text-[#07120c]/30 hover:border-[#245336]/30 focus:border-[#245336] focus:bg-white focus:ring-4 focus:ring-[#658672]/12";

  return (
    <section ref={containerRef} id="formDiscover" className="relative overflow-hidden bg-[#e9eee8] px-5 py-24 text-[#07120c] md:px-10 md:py-32">
      <div className="pointer-events-none absolute -start-36 bottom-0 h-96 w-96 rounded-full bg-[#cba792]/18 blur-[90px]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.78fr_1.22fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p data-discovery-reveal className="text-xs font-bold uppercase tracking-[.2em] text-[#245336]">{copy.eyebrow}</p>
          <h2 data-discovery-reveal className="title mt-5 text-4xl font-semibold leading-tight md:text-6xl">{copy.process}</h2>
          <p data-discovery-reveal className="mt-6 max-w-lg text-lg leading-8 text-[#07120c]/58">{copy.processBody}</p>
          <ol className="mt-10 space-y-3">
            {copy.steps.map(([title, description], index) => <li data-discovery-reveal key={title} className="grid grid-cols-[auto_1fr] gap-4 rounded-2xl border border-[#07120c]/8 bg-white/50 p-5"><span className="grid h-9 w-9 place-items-center rounded-full bg-[#123522] font-mono text-xs text-white">0{index + 1}</span><div><h3 className="font-bold">{title}</h3><p className="mt-1 text-sm leading-6 text-[#07120c]/50">{description}</p></div></li>)}
          </ol>
        </div>

        <div data-discovery-reveal className="overflow-hidden rounded-[2rem] border border-[#07120c]/10 bg-[#fffaf3] shadow-2xl shadow-[#153c27]/10">
          <div className="border-b border-[#07120c]/8 px-6 py-7 md:px-10 md:py-9">
            <div className="flex flex-wrap items-center justify-between gap-4"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#8e614b]">{copy.formEyebrow}</p><span className="inline-flex items-center gap-2 text-xs text-[#07120c]/45"><LockKeyhole className="h-4 w-4 text-[#245336]" />{copy.private}</span></div>
            <h2 className="title mt-4 text-3xl font-semibold md:text-5xl">{copy.formTitle}</h2>
            <p className="mt-4 max-w-2xl leading-7 text-[#07120c]/55">{copy.formBody}</p>
          </div>
          {state?.status === "success" ? <div role="status" className="p-6 md:p-10"><div className="rounded-[1.5rem] border border-[#245336]/18 bg-[#e9eee8] p-7 md:p-9"><span className="grid h-12 w-12 place-items-center rounded-full bg-[#123522] text-white"><Check className="h-5 w-5" /></span><h3 className="title mt-6 text-2xl font-semibold md:text-3xl">{fa ? "درخواست شما به دست ما رسید." : "Your request is with us."}</h3><p className="mt-4 max-w-xl leading-8 text-[#07120c]/60">{fa ? "یکی از اعضای ارشد تیم درخواست را بررسی می‌کند و حداکثر تا یک روز کاری برای هماهنگی قدم بعدی با شما تماس می‌گیریم." : "A senior member of the team will review it and contact you within one business day to coordinate the clearest next step."}</p><div className="mt-7 flex flex-wrap gap-3 text-xs font-semibold text-[#245336]"><span className="rounded-full border border-[#245336]/15 bg-white/60 px-4 py-2">{copy.reply}</span><span className="rounded-full border border-[#245336]/15 bg-white/60 px-4 py-2">{copy.private}</span></div></div></div> : <form ref={formRef} action={formDiscoveryAction} className="space-y-6 p-6 md:p-10">
            <div className="grid gap-6 md:grid-cols-2">
              <div><label htmlFor="discovery-name" className="text-sm font-bold">{copy.name}</label><input id="discovery-name" type="text" name="Full_Name" required autoComplete="name" placeholder={copy.namePlaceholder} className={inputClass} /></div>
              <div><label htmlFor="discovery-email" className="text-sm font-bold">{copy.email}</label><input id="discovery-email" type="email" name="Email" required autoComplete="email" inputMode="email" dir="ltr" placeholder={copy.emailPlaceholder} className={inputClass} /></div>
            </div>
            <div><label htmlFor="discovery-inquiry" className="text-sm font-bold">{copy.message}</label><textarea id="discovery-inquiry" name="Inquiry" required minLength={20} rows={7} placeholder={copy.placeholder} className={`${inputClass} resize-y`} /></div>
            <div className="grid gap-3 sm:grid-cols-3">
              {[[Clock3, copy.reply], [LockKeyhole, copy.private], [Video, copy.remote]].map(([Icon, text]) => <div key={text} className="flex items-center gap-2 rounded-xl bg-[#e9eee8] px-3 py-3 text-xs font-semibold text-[#07120c]/60"><Icon className="h-4 w-4 shrink-0 text-[#245336]" />{text}</div>)}
            </div>
            <SubmitButton title={copy.submit} loadingTitle={copy.sending} style="w-full rounded-2xl bg-[#123522] px-6 py-4 text-base font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#07120c] disabled:cursor-wait disabled:opacity-60" />
            <p className="flex items-start justify-center gap-2 text-center text-xs leading-5 text-[#07120c]/38"><Check className="mt-0.5 h-3.5 w-3.5 shrink-0" />{copy.footer}</p>
          </form>}
        </div>
      </div>
    </section>
  );
}
