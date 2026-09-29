"use client";

import { aboutCreate } from "@/actions/about";
import SubmitButton from "@/components/SubmitButton";
import { useActionState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import Link from "next/link";
import { useLocale } from "@/i18n/LocaleProvider";

const fieldClass = "w-full rounded-xl border border-white/10 bg-white/[.055] px-4 py-3.5 text-white outline-none transition placeholder:text-white/28 focus:border-[#86a58f] focus:bg-white/[.08]";

export default function Form() {
  const { locale } = useLocale();
  const fa = locale === "fa";
  const copy = fa ? {
    name: "نام و نام خانوادگی", company: "شرکت یا سازمان", email: "ایمیل کاری", service: "چه کمکی نیاز دارید؟", choose: "انتخاب خدمت", services: ["طراحی و توسعه وب", "پلتفرم یا نرم‌افزار اختصاصی", "اتوماسیون n8n و یکپارچه‌سازی", "سئو، عملکرد و رشد", "طراحی محصول و UI/UX", "همکاری چندتخصصی"], budget: "بودجه تقریبی", budgetChoose: "انتخاب بازه", budgets: ["کمتر از ۳٬۰۰۰ یورو", "۳٬۰۰۰ تا ۷٬۵۰۰ یورو", "۷٬۵۰۰ تا ۱۵٬۰۰۰ یورو", "بیشتر از ۱۵٬۰۰۰ یورو", "هنوز مشخص نیست"], timeline: "زمان شروع", timelinePlaceholder: "مثلاً ماه آینده", enquiry: "پروژه، چالش یا فرصت", placeholder: "چه چیزی باید ساخته یا بهتر شود و نتیجه ارزشمند برای شما چیست؟", agree: "با", terms: "شرایط استفاده", and: "و", privacy: "سیاست حریم خصوصی", submit: "ارسال درخواست", sending: "در حال ارسال…",
  } : {
    name: "Full name", company: "Company or organisation", email: "Work email", service: "What can we help with?", choose: "Choose a service", services: ["Web design & development", "Custom platform or software", "n8n automation & integration", "SEO, performance & growth", "Product and UI/UX design", "Multidisciplinary partnership"], budget: "Indicative budget", budgetChoose: "Choose a range", budgets: ["Under €3,000", "€3,000–€7,500", "€7,500–€15,000", "€15,000+", "Not decided yet"], timeline: "Preferred start", timelinePlaceholder: "For example, next month", enquiry: "Project, challenge, or opportunity", placeholder: "What should be created or improved, and what would a valuable outcome look like?", agree: "I agree to the", terms: "Terms of service", and: "and", privacy: "Privacy policy", submit: "Send enquiry", sending: "Sending…",
  };
  const [state, action] = useActionState(aboutCreate, null);
  const formRef = useRef(null);

  useEffect(() => { if (!state) return; if (state.status === "error") toast.error(fa ? "ارسال انجام نشد؛ لطفاً اطلاعات را بررسی کنید." : state.message); else { toast.success(fa ? "درخواست شما ثبت شد؛ به‌زودی پاسخ می‌دهیم." : state.message); formRef.current?.reset(); } }, [state, fa]);

  return <form ref={formRef} action={action} className="grid gap-5 sm:grid-cols-2">
    <label className="block text-sm text-white/65"><span>{copy.name}</span><input className={`${fieldClass} mt-2`} name="Full_Name" required autoComplete="name" placeholder={fa ? "نام شما" : "John Doe"} /></label>
    <label className="block text-sm text-white/65"><span>{copy.company}</span><input className={`${fieldClass} mt-2`} name="Company" autoComplete="organization" placeholder={fa ? "نام مجموعه" : "Company name"} /></label>
    <label className="block text-sm text-white/65"><span>{copy.email}</span><input className={`${fieldClass} mt-2`} type="email" name="Email" required autoComplete="email" placeholder="name@company.com" /></label>
    <label className="block text-sm text-white/65"><span>{copy.timeline}</span><input className={`${fieldClass} mt-2`} name="Timeline" placeholder={copy.timelinePlaceholder} /></label>
    <label className="block text-sm text-white/65"><span>{copy.service}</span><select className={`${fieldClass} mt-2`} name="Service" defaultValue=""><option value="" disabled>{copy.choose}</option>{copy.services.map((item) => <option className="bg-[#10291c]" key={item}>{item}</option>)}</select></label>
    <label className="block text-sm text-white/65"><span>{copy.budget}</span><select className={`${fieldClass} mt-2`} name="Budget" defaultValue=""><option value="" disabled>{copy.budgetChoose}</option>{copy.budgets.map((item) => <option className="bg-[#10291c]" key={item}>{item}</option>)}</select></label>
    <label className="block text-sm text-white/65 sm:col-span-2"><span>{copy.enquiry}</span><textarea className={`${fieldClass} mt-2 min-h-40 resize-y`} name="Inquiry" required placeholder={copy.placeholder} /></label>
    <label className="flex items-start gap-3 text-xs leading-6 text-white/50 sm:col-span-2"><input className="mt-1 h-4 w-4 accent-[#86a58f]" type="checkbox" name="Agree_terms" required /><span>{copy.agree} <Link href="/terms" className="text-white underline underline-offset-4">{copy.terms}</Link> {copy.and} <Link href="/privacy" className="text-white underline underline-offset-4">{copy.privacy}</Link></span></label>
    <div className="sm:col-span-2"><SubmitButton title={copy.submit} loadingTitle={copy.sending} style="w-full rounded-xl bg-[#fff8ee] px-6 py-4 font-bold text-[#07120c] transition hover:bg-white disabled:opacity-60" /></div>
  </form>;
}
