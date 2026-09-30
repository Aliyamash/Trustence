import { ArrowDown, Mail, Sparkles } from "lucide-react";
import { getServerLocale } from "@/i18n/server";

export default async function ContactHero() {
  const locale = await getServerLocale();
  const fa = locale === "fa";
  const copy = fa ? { eyebrow: "یک گفت‌وگوی مستقیم", title: "از چیزی که باید ساخته یا بهتر شود برایمان بگویید.", body: "ایده، اصطکاک یا فرصت را توضیح دهید. ما با نگاهی تجاری و فنی بررسی می‌کنیم و یک قدم بعدی روشن پیشنهاد می‌دهیم.", jump: "شروع گفت‌وگو", email: "یا مستقیماً ایمیل بزنید" } : { eyebrow: "A direct conversation", title: "Tell us what needs to be created or made better.", body: "Share the ambition, friction, or opportunity. We will consider it through a commercial and technical lens, then suggest a clear next step.", jump: "Start the conversation", email: "Or email the studio directly" };
  return <section className="relative isolate overflow-hidden bg-[#061009] px-5 pb-16 pt-36 text-[#fff8ee] md:px-10 md:pb-24 md:pt-48">
    <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_22%,rgba(101,134,114,.34),transparent_31%),radial-gradient(circle_at_85%_32%,rgba(203,167,146,.16),transparent_25%)]" />
    <div className="mx-auto max-w-7xl"><p className="inline-flex items-center gap-2 rounded-full border border-[#cba792]/25 bg-[#cba792]/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[.18em] text-[#e6c9b6]"><Sparkles className="h-4 w-4" />{copy.eyebrow}</p><div className="mt-7 grid gap-8 lg:grid-cols-[1.15fr_.85fr] lg:items-end"><h1 className="title max-w-5xl text-balance text-[clamp(2.75rem,6.5vw,6.5rem)] leading-[1.05]">{copy.title}</h1><div className="lg:pb-2"><p className="max-w-xl text-lg leading-8 text-white/65 md:text-xl">{copy.body}</p><div className="mt-8 flex flex-wrap items-center gap-5"><a href="#contact-form" className="inline-flex items-center gap-2 rounded-2xl bg-[#fff8ee] px-5 py-3.5 font-bold text-[#07120c]">{copy.jump}<ArrowDown className="h-4 w-4" /></a><a href="mailto:trustenceagency@gmail.com" className="inline-flex items-center gap-2 text-sm text-white/55 hover:text-white"><Mail className="h-4 w-4" />{copy.email}</a></div></div></div></div>
  </section>;
}
