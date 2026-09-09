"use client";

import { serviceCreate } from "@/actions/service";
import { Headset } from "lucide-react";
import { useActionState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import SubmitButton from "@/components/SubmitButton";
import { useLocale } from "@/i18n/LocaleProvider";

const fieldClass = "mt-2 w-full rounded-xl border border-[#07120c]/15 bg-white/60 p-3.5 outline-none transition placeholder:text-[#07120c]/30 focus:border-[#245336] focus:ring-2 focus:ring-[#245336]/15";
const labelClass = "block text-sm font-semibold text-[#07120c]/75";

export default function DiscoveryForm() {
  const { locale } = useLocale();
  const copy = locale === "fa" ? {
    eyebrow: "اولین قدم سنجیده", title: "درخواست جلسه آشنایی", body: "کمی زمینه در اختیار تیم ما بگذارید تا برای گفت‌وگویی کاربردی و تجاری آماده شویم.", name: "نام و نام خانوادگی", email: "نشانی ایمیل", phone: "شماره تماس", help: "در چه زمینه‌ای می‌توانیم کمک کنیم؟", choose: "یک خدمت انتخاب کنید", services: ["استراتژی و تجربه کاربری", "طراحی و توسعه وب", "n8n و اتوماسیون", "سئو، عملکرد و رشد", "برند و طراحی بصری", "بازاریابی و محتوای بصری", "سایر یا چندتخصصی"], budget: "بودجه تقریبی", range: "یک بازه انتخاب کنید", budgets: ["کمتر از ۳٬۰۰۰ یورو", "۳٬۰۰۰ تا ۷٬۵۰۰ یورو", "۷٬۵۰۰ تا ۱۵٬۰۰۰ یورو", "بیش از ۱۵٬۰۰۰ یورو", "هنوز تصمیم نگرفته‌ایم"], brief: "شرح پروژه", briefPlaceholder: "چه چیزی باید تغییر کند و یک نتیجه خوب برای شما چه شکلی است؟", submit: "درخواست جلسه خصوصی", sending: "در حال ارسال…", reply: "معمولاً در یک روز کاری پاسخ می‌دهیم",
  } : {
    eyebrow: "A considered first step", title: "Request a discovery session", body: "Share enough context for our team to prepare a useful, commercially focused conversation.", name: "Full name", email: "Email address", phone: "Phone number", help: "What can we help with?", choose: "Choose a service", services: ["Strategy & UX", "Web design & development", "n8n & workflow automation", "SEO, performance & growth", "Brand & visual design", "Marketing & visual content", "Other or multidisciplinary"], budget: "Indicative budget", range: "Select a range", budgets: ["Under €3,000", "€3,000 – €7,500", "€7,500 – €15,000", "€15,000+", "Not decided yet"], brief: "Project brief", briefPlaceholder: "What should change, and what would a good result look like?", submit: "Request a private session", sending: "Sending…", reply: "We usually respond within one business day",
  };
  const [state, formServiceAction] = useActionState(serviceCreate, null);
  const formRef = useRef(null);

  useEffect(() => {
    if (!state) return;
    if (state?.status === "error") toast.error(locale === "fa" ? "ارسال انجام نشد؛ لطفاً دوباره تلاش کنید." : state.message);
    else {
      toast.success(locale === "fa" ? "درخواست جلسه با موفقیت ثبت شد." : state.message);
      formRef.current?.reset();
    }
  }, [state, locale]);

  return (
    <div className="w-full rounded-[2rem] border border-white/10 bg-[#fff8ee] p-6 text-[#07120c] shadow-2xl shadow-black/20 md:p-10" id="formDiscovery">
      <div className="mb-8 border-b border-[#07120c]/10 pb-7">
        <p className="text-xs font-bold uppercase tracking-[.2em] text-[#245336]">{copy.eyebrow}</p>
        <h3 className="title mt-3 text-3xl font-semibold md:text-4xl">{copy.title}</h3>
        <p className="mt-3 leading-7 text-[#07120c]/60">{copy.body}</p>
      </div>

      <form ref={formRef} action={formServiceAction} className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className={labelClass} htmlFor="service-name">{copy.name}</label>
            <input id="service-name" type="text" name="Full_Name" className={fieldClass} placeholder={locale === "fa" ? "نام شما" : "John Doe"} autoComplete="name" required />
          </div>
          <div>
            <label className={labelClass} htmlFor="service-email">{copy.email}</label>
            <input id="service-email" type="email" name="Email" className={fieldClass} placeholder="john@example.com" autoComplete="email" required />
          </div>
        </div>
        <div>
          <label className={labelClass} htmlFor="service-phone">{copy.phone}</label>
          <input id="service-phone" type="tel" name="Phone_Number" className={fieldClass} placeholder="+41 00 000 00 00" autoComplete="tel" required />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className={labelClass} htmlFor="service-type">{copy.help}</label>
            <select id="service-type" name="Select_Service" className={fieldClass} defaultValue="" required>
              <option value="" disabled>{copy.choose}</option>
              {["Strategy and UX", "Web Design and Development", "n8n and Workflow Automation", "SEO and Growth", "Brand and Visual Design", "Marketing and Content", "Other"].map((value, index) => <option key={value} value={value}>{copy.services[index]}</option>)}
            </select>
          </div>
          <div>
            <label className={labelClass} htmlFor="service-budget">{copy.budget}</label>
            <select id="service-budget" name="Budget_Range" className={fieldClass} defaultValue="" required>
              <option value="" disabled>{copy.range}</option>
              {["Under EUR 3000", "EUR 3000 - EUR 7500", "EUR 7500 - EUR 15000", "EUR 15000+", "Not decided"].map((value, index) => <option key={value} value={value}>{copy.budgets[index]}</option>)}
            </select>
          </div>
        </div>
        <div>
          <label className={labelClass} htmlFor="service-brief">{copy.brief}</label>
          <textarea id="service-brief" name="Inquiry" rows="5" className={fieldClass} placeholder={copy.briefPlaceholder} required />
        </div>
        <SubmitButton title={copy.submit} loadingTitle={copy.sending} style="w-full rounded-xl bg-[#114422] py-4 font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#07120c] disabled:opacity-60" />
        <div className="flex items-center justify-center gap-2 text-[#07120c]/45"><p className="text-center text-xs">{copy.reply}</p><Headset className="h-4 w-4" /></div>
      </form>
    </div>
  );
}
