import Image from "next/image";
import { ArrowUpRight, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { getTeamMembers } from "@/utils/content";
import { getServerLocale } from "@/i18n/server";

export default async function Team() {
  const locale = await getServerLocale();
  const fa = locale === "fa";
  const teams = await getTeamMembers(locale);
  const copy = fa ? { eyebrow: "آدم‌های پشت کار", title: "یک استاندارد؛ چند تخصص.", body: "برای هر همکاری، ترکیب درستی از مهندسی، طراحی، استراتژی، رشد و هنر بصری شکل می‌گیرد.", empty: "عضوی برای نمایش پیدا نشد.", extended: "شبکه تخصصی ما", extendedBody: "هر زمان دامنه پروژه نیاز داشته باشد، متخصصان تکمیلی و همکاران مورد اعتماد به تیم اصلی اضافه می‌شوند.", talk: "گفت‌وگو با تیم" } : { eyebrow: "The people behind the work", title: "One standard. Multiple disciplines.", body: "Every engagement is shaped by the right combination of engineering, design, strategy, growth, and visual craft.", empty: "No members found.", extended: "Our specialist network", extendedBody: "When the scope calls for it, trusted specialists and collaborators join the core team with the same standard of craft.", talk: "Talk to the team" };

  return <section data-motion="section" className="bg-[#0a1810] py-20 text-white md:py-28" id="team">
    <div className="container">
      <div className="grid gap-6 md:grid-cols-[1fr_.65fr] md:items-end"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#cba792]">{copy.eyebrow}</p><h2 className="title mt-5 text-4xl leading-tight md:text-6xl">{copy.title}</h2></div><p className="max-w-xl text-lg leading-8 text-white/58 md:justify-self-end">{copy.body}</p></div>
      {teams.length ? <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{teams.map((member, index) => <article key={member.id} className={`group overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#10291c] ${index === 0 ? "sm:col-span-2 lg:grid lg:grid-cols-2" : ""}`}>
        <div className={`relative overflow-hidden ${index === 0 ? "min-h-[28rem]" : "aspect-[4/5]"}`}><Image src={member.image} alt={member.name} fill sizes={index === 0 ? "(max-width:1024px) 100vw, 45vw" : "(max-width:640px) 100vw, 33vw"} className="object-cover object-top transition duration-700 group-hover:scale-[1.03]" /><div className="absolute inset-0 bg-gradient-to-t from-[#07120c]/60 via-transparent to-transparent" /></div>
        <div className={`flex flex-col p-6 ${index === 0 ? "justify-end md:p-9" : ""}`}><p className="font-mono text-xs text-[#cba792]">{String(index + 1).padStart(2, "0")}</p><h3 className="mt-5 text-2xl font-bold">{member.name}</h3><p className="mt-1 text-sm text-[#86a58f]">{member.position}</p>{member.bio && <p className={`mt-5 leading-7 text-white/55 ${index !== 0 ? "line-clamp-3" : ""}`}>{member.bio}</p>}<div className="mt-auto flex gap-3 pt-7">{[[member.github, Github, "GitHub"], [member.linkedin, Linkedin, "LinkedIn"], [member.twitter, Twitter, "X"]].map(([href, Icon, label]) => href && href !== "#" ? <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} ${label}`} className="grid h-10 w-10 place-items-center rounded-full border border-white/12 text-white/65 transition hover:bg-white hover:text-[#07120c]"><Icon className="h-4 w-4" /></a> : null)}</div></div>
      </article>)}</div> : <p className="mt-12 text-white/50">{copy.empty}</p>}
      <div className="mt-7 grid gap-6 rounded-[1.75rem] border border-white/10 bg-white/[.035] p-7 md:grid-cols-[1fr_auto] md:items-center md:p-9"><div><h3 className="title text-2xl text-[#fff8ee]">{copy.extended}</h3><p className="mt-3 max-w-3xl leading-7 text-white/52">{copy.extendedBody}</p></div><Link href="/discovery" className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#fff8ee] px-5 py-3 font-bold text-[#07120c]">{copy.talk}<ArrowUpRight className={fa ? "-rotate-90" : ""} /></Link></div>
    </div>
  </section>;
}
