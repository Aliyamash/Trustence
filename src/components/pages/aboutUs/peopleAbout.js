import { ArrowUpRight, Compass, HandHeart, Layers3, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import picAbout from "@/public/images/pic-about2.webp";
import { getServerLocale } from "@/i18n/server";

export default async function PeopleAbout() {
  const locale = await getServerLocale();
  const fa = locale === "fa";
  const copy = fa ? {
    eyebrow: "چرا تراستنس شکل گرفت",
    title: "کار دیجیتال ممتاز، از وضوح و مسئولیت‌پذیری شروع می‌شود.",
    body: "تراستنس برای سازمان‌هایی ساخته شده که دیجیتال را صرفاً یک ویترین نمی‌دانند. ما کیفیت را در سؤال‌های درست، دامنه روشن، طراحی سنجیده و فناوری‌ای می‌بینیم که سال‌ها قابل نگهداری باشد.",
    principles: [["وضوح پیش از اجرا", "پیش از طراحی و توسعه، هدف تجاری، مخاطب و معیار موفقیت را روشن می‌کنیم."], ["یکپارچگی تصمیم‌ها", "استراتژی، تجربه، فناوری و رشد در یک مسیر مشترک تصمیم‌گیری می‌شوند."], ["مالکیت واقعی", "راهکار نهایی، سورس و دانش لازم برای ادامه مسیر متعلق به شماست."], ["اعتماد در جزئیات", "ارتباط شفاف، محرمانگی و توضیح صادقانه تصمیم‌ها بخشی از تحویل ماست."]],
    method: "روش همکاری ما", methodBody: "تیمی متناسب با مسئله شکل می‌گیرد؛ نه بزرگ‌تر از نیاز و نه محدودتر از نتیجه‌ای که باید ساخته شود.", cta: "مشاهده خدمات",
  } : {
    eyebrow: "Why Trustence exists",
    title: "Exceptional digital work begins with clarity and responsibility.",
    body: "Trustence is built for organisations that see digital as more than a shop window. We find quality in the right questions, precise scope, considered design, and technology that remains maintainable for years.",
    principles: [["Clarity before execution", "We define the commercial objective, audience, and measure of success before design and development."], ["Coherent decisions", "Strategy, experience, technology, and growth are considered through one connected process."], ["Genuine ownership", "The final solution, source, and knowledge required to move forward belong to you."], ["Trust in the details", "Clear communication, discretion, and honest explanation of decisions are part of the delivery."]],
    method: "How we collaborate", methodBody: "The team is shaped around the problem. It is never larger than necessary or smaller than the outcome demands.", cta: "Explore our services",
  };
  const icons = [Compass, Layers3, HandHeart, ShieldCheck];

  return <section id="principles" data-motion="section" className="bg-[#fff8ee] py-20 text-[#07120c] md:py-28">
    <div className="container">
      <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#245336]">{copy.eyebrow}</p><h2 className="title mt-5 text-4xl leading-tight md:text-6xl">{copy.title}</h2><p className="mt-6 text-lg leading-8 text-[#173326]/68">{copy.body}</p><div className="relative mt-9 overflow-hidden rounded-[2rem]"><Image src={picAbout} alt={fa ? "همکاری تیم تراستنس" : "Trustence team collaborating"} className="aspect-[5/4] w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#07120c]/55 to-transparent" /><p className="absolute inset-x-6 bottom-6 text-sm leading-7 text-white/85">{copy.methodBody}</p></div></div>
        <div className="grid gap-4 sm:grid-cols-2">{copy.principles.map(([title, body], index) => { const Icon = icons[index]; return <article key={title} className="flex min-h-72 flex-col rounded-[1.75rem] border border-[#245336]/12 bg-white/60 p-7 transition hover:-translate-y-1 hover:bg-white"><div className="flex items-center justify-between"><span className="font-mono text-xs text-[#245336]/45">0{index + 1}</span><Icon className="h-7 w-7 stroke-[1.5] text-[#658672]" /></div><h3 className="title mt-10 text-2xl text-[#123d27]">{title}</h3><p className="mt-4 leading-7 text-[#173326]/65">{body}</p></article>; })}<article className="flex min-h-64 flex-col justify-between rounded-[1.75rem] bg-[#123d27] p-7 text-white sm:col-span-2"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#cba792]">{copy.method}</p><p className="mt-5 max-w-2xl text-xl leading-9 text-white/72">{copy.methodBody}</p></div><Link href="/service" className="mt-8 inline-flex w-fit items-center gap-2 font-bold">{copy.cta}<ArrowUpRight className={fa ? "-rotate-90" : ""} /></Link></article></div>
      </div>
    </div>
  </section>;
}
