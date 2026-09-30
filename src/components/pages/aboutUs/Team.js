import Image from "next/image";
import { ArrowUpRight, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { getTeamMembers } from "@/utils/content";
import { getServerLocale } from "@/i18n/server";

export default async function Team() {
  const locale = await getServerLocale();
  const fa = locale === "fa";
  const teams = await getTeamMembers(locale);
  const copy = fa ? { eyebrow: "آدم‌های پشت کار", title: "یک تیم؛ جایگاه برابر، تخصص‌های متفاوت.", body: "هر عضو با همان میزان اهمیت، نگاه و تخصص خود را وارد پروژه می‌کند؛ از مهندسی و طراحی تا استراتژی، رشد و روایت بصری.", count: "متخصص در تیم و شبکه اصلی", empty: "عضوی برای نمایش پیدا نشد.", extended: "شبکه تخصصی ما", extendedBody: "هر زمان دامنه پروژه نیاز داشته باشد، متخصصان تکمیلی و همکاران مورد اعتماد با همان استاندارد کیفیت به تیم اضافه می‌شوند.", talk: "گفت‌وگو با تیم" } : { eyebrow: "The people behind the work", title: "One team. Equal voices. Distinct disciplines.", body: "Every person brings equal weight and a distinct point of view, spanning engineering, design, strategy, growth, and visual storytelling.", count: "specialists across our core network", empty: "No members found.", extended: "Our specialist network", extendedBody: "When the scope calls for it, trusted specialists and collaborators join the team with the same standard of craft.", talk: "Talk to the team" };

  return <section data-motion="section" className="relative overflow-hidden bg-[#07120c] py-20 text-white md:py-32" id="team">
    <div className="pointer-events-none absolute -start-40 top-32 h-[32rem] w-[32rem] rounded-full bg-[#245336]/25 blur-[120px]" />
    <div className="pointer-events-none absolute -end-48 bottom-10 h-[28rem] w-[28rem] rounded-full bg-[#cba792]/10 blur-[120px]" />
    <div className="pointer-events-none absolute inset-0 opacity-[.035]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)", backgroundSize: "72px 72px" }} />
    <div className="container relative">
      <div className="grid gap-8 lg:grid-cols-[1fr_.72fr] lg:items-end">
        <div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#cba792]">{copy.eyebrow}</p><h2 className="title mt-5 max-w-4xl text-4xl leading-tight md:text-6xl">{copy.title}</h2></div>
        <div className="lg:justify-self-end"><p className="max-w-xl text-lg leading-8 text-white/58">{copy.body}</p><div className="mt-6 flex items-end gap-3 border-t border-white/10 pt-5"><span className="title text-5xl text-[#fff8ee]">{String(teams.length).padStart(2, "0")}</span><span className="max-w-44 pb-1 text-xs leading-5 text-[#86a58f]">{copy.count}</span></div></div>
      </div>

      {teams.length ? <div data-motion-group className="mt-14 grid items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-4">{teams.map((member, index) => <article key={member.id} className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0d2117] transition duration-500 hover:-translate-y-1.5 hover:border-[#86a58f]/40 hover:shadow-2xl hover:shadow-black/30">
        <div className="relative aspect-[2/3] w-full shrink-0 overflow-hidden bg-[#10291c]"><Image src={member.image} alt="" fill sizes="(max-width:640px) 100vw, (max-width:1280px) 50vw, 25vw" aria-hidden="true" className="scale-110 object-cover object-center opacity-30 blur-xl transition duration-700 group-hover:scale-[1.16]" /><Image src={member.image} alt={member.name} fill sizes="(max-width:640px) 100vw, (max-width:1280px) 50vw, 25vw" className="object-contain object-center saturate-[.86] contrast-[1.02] transition duration-700 group-hover:scale-[1.018] group-hover:saturate-100" /><div className="absolute inset-0 bg-gradient-to-t from-[#07120c] via-transparent to-black/5" /><span className="absolute start-4 top-4 rounded-full border border-white/15 bg-[#07120c]/55 px-3 py-1.5 font-mono text-[10px] text-white/65 backdrop-blur">{String(index + 1).padStart(2, "0")}</span></div>
        <div className="relative -mt-16 flex flex-1 flex-col p-6 pt-0"><div className="mb-4 h-px w-12 bg-[#cba792] transition-all duration-500 group-hover:w-24" /><h3 className="text-2xl font-bold text-[#fff8ee]">{member.name}</h3><p className="mt-1 text-sm font-semibold text-[#86a58f]">{member.position}</p>{member.bio && <p className="mt-4 line-clamp-3 text-sm leading-7 text-white/52">{member.bio}</p>}{[[member.github, Github, "GitHub"], [member.linkedin, Linkedin, "LinkedIn"], [member.twitter, Twitter, "X"]].some(([href]) => href && href !== "#") && <div className="mt-5 flex gap-2">{[[member.github, Github, "GitHub"], [member.linkedin, Linkedin, "LinkedIn"], [member.twitter, Twitter, "X"]].map(([href, Icon, label]) => href && href !== "#" ? <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} ${label}`} className="grid h-9 w-9 place-items-center rounded-full border border-white/12 text-white/55 transition hover:border-white hover:bg-white hover:text-[#07120c]"><Icon className="h-3.5 w-3.5" /></a> : null)}</div>}</div>
      </article>)}</div> : <p className="mt-12 text-white/50">{copy.empty}</p>}

      <div className="mt-8 grid gap-6 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[.045] p-7 backdrop-blur md:grid-cols-[1fr_auto] md:items-center md:p-9"><div><h3 className="title text-2xl text-[#fff8ee]">{copy.extended}</h3><p className="mt-3 max-w-3xl leading-7 text-white/52">{copy.extendedBody}</p></div><Link href="/discovery" className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#fff8ee] px-5 py-3 font-bold text-[#07120c] transition hover:-translate-y-0.5">{copy.talk}<ArrowUpRight className={fa ? "-rotate-90" : ""} /></Link></div>
    </div>
  </section>;
}
