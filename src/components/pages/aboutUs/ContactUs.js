import { Clock3, Mail, MapPin } from "lucide-react";
import Form from "./Form";
import { getServerLocale } from "@/i18n/server";

export default async function ContactUs() {
  const locale = await getServerLocale();
  const fa = locale === "fa";
  const copy = fa ? { eyebrow: "شروع یک گفت‌وگوی سنجیده", title: "چند خط درباره پروژه بنویسید؛ ما قدم بعدی را روشن می‌کنیم.", body: "فرم کوتاه زیر به ما کمک می‌کند پیش از اولین تماس، زمینه کسب‌وکار و مسئله اصلی را بشناسیم.", location: "سوئیس · همکاری جهانی", reply: "پاسخ معمولاً در یک روز کاری", direct: "ایمیل مستقیم", steps: [["01", "درخواست را بررسی می‌کنیم"], ["02", "در صورت تناسب، جلسه کوتاهی تنظیم می‌کنیم"], ["03", "دامنه، زمان‌بندی و قدم بعدی را روشن می‌کنیم"]] } : { eyebrow: "Begin a considered conversation", title: "Share a little context. We will make the next step clear.", body: "The short form helps us understand the business context and essential problem before the first conversation.", location: "Switzerland · Working worldwide", reply: "Usually replies within one business day", direct: "Direct email", steps: [["01", "We review the context"], ["02", "If there is a fit, we arrange a focused call"], ["03", "We clarify scope, timing, and the next step"]] };
  return <section id="contact-form" data-motion="section" className="bg-[#0a1810] py-20 text-white md:py-28">
    <div className="container grid gap-12 lg:grid-cols-[.78fr_1.22fr] lg:gap-16">
      <div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#cba792]">{copy.eyebrow}</p><h2 className="title mt-5 text-4xl leading-tight md:text-6xl">{copy.title}</h2><p className="mt-6 max-w-xl text-lg leading-8 text-white/58">{copy.body}</p><div className="mt-9 space-y-4 border-y border-white/10 py-6 text-sm text-white/65"><p className="flex items-center gap-3"><Mail className="h-4 w-4 text-[#86a58f]" /><span>{copy.direct}: </span><a className="text-white" href="mailto:trustenceagency@gmail.com">trustenceagency@gmail.com</a></p><p className="flex items-center gap-3"><MapPin className="h-4 w-4 text-[#86a58f]" />{copy.location}</p><p className="flex items-center gap-3"><Clock3 className="h-4 w-4 text-[#86a58f]" />{copy.reply}</p></div><ol className="mt-8 space-y-4">{copy.steps.map(([number, text]) => <li key={number} className="flex items-center gap-4 text-sm text-white/62"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/12 font-mono text-[10px] text-[#cba792]">{number}</span>{text}</li>)}</ol></div>
      <div className="rounded-[2rem] border border-white/10 bg-white/[.045] p-5 shadow-2xl shadow-black/20 md:p-8"><Form /></div>
    </div>
  </section>;
}
