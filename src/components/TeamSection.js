import Image from "next/image";
import { ArrowRight, Linkedin, MoveHorizontal } from "lucide-react";
import Link from "next/link";
import { getTeamMembers } from "@/utils/content";
import { getServerLocale } from "@/i18n/server";
import { getCopy } from "@/i18n/copy";

export default async function TeamSection() {
  const locale = await getServerLocale();
  const content = getCopy(locale).home.team;
  const teamMembers = await getTeamMembers(locale);
  const visibleMembers = teamMembers.slice(0, 4);
  const isRtl = locale === "fa";

  return (
    <section data-motion="section" className="overflow-hidden bg-[#fff8ee] py-20 md:py-28" aria-labelledby="home-team-title">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-[1fr_.65fr] md:items-end">
          <div><p className="mb-4 text-xs font-bold uppercase tracking-[.2em] text-[#658672]">{isRtl ? "آدم‌های پشت کار" : "The people behind the work"}</p><h2 id="home-team-title" className="title max-w-4xl text-4xl leading-tight text-[#07120c] md:text-6xl">{content.titleBefore} <span className="text-[#245336]">Trustence</span></h2></div>
          <p className="max-w-xl text-lg leading-8 text-[#1c422b]/65 md:justify-self-end">{content.body}</p>
        </div>

        {visibleMembers.length ? (<>
          <div className="mt-8 flex items-center justify-between text-xs text-[#1c422b]/50 lg:hidden"><span>{isRtl ? `${visibleMembers.length} عضو منتخب` : `${visibleMembers.length} featured members`}</span><span className="inline-flex items-center gap-2">{isRtl ? "برای دیدن ادامه بکشید" : "Swipe to explore"}<MoveHorizontal className="h-4 w-4" /></span></div>
          <div data-motion-group className="mt-5 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5 pe-[18%] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:pe-[8%] lg:mt-12 lg:grid lg:grid-cols-4 lg:overflow-visible lg:pe-0">
            {visibleMembers.map((member) => <article key={member.id} className="group relative min-w-[82%] snap-center overflow-hidden rounded-[1.75rem] bg-[#10291c] sm:min-w-[46%] lg:min-w-0">
              <div className="relative aspect-[4/5] overflow-hidden"><Image src={member.image} alt="" aria-hidden="true" fill unoptimized sizes="(max-width: 640px) 82vw, (max-width: 1024px) 46vw, 25vw" className="scale-110 object-cover opacity-30 blur-xl" /><Image src={member.image} alt={member.name} fill unoptimized sizes="(max-width: 640px) 82vw, (max-width: 1024px) 46vw, 25vw" className="object-contain object-center saturate-[.88] transition duration-700 group-hover:scale-[1.025] group-hover:saturate-100" /><div className="absolute inset-0 bg-gradient-to-t from-[#061009] via-transparent to-transparent" /></div>
              <div className="absolute inset-x-0 bottom-0 p-5 text-white"><div className="flex items-end justify-between gap-3"><div><h3 className="text-xl font-bold">{member.name}</h3><p className="mt-1 text-sm text-white/62">{member.position}</p></div>{member.linkedin && member.linkedin !== "#" && <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} LinkedIn`} className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/10 backdrop-blur"><Linkedin className="h-4 w-4" /></a>}</div></div>
            </article>)}
          </div></>
        ) : <p className="mt-12 text-[#1c422b]/60">{content.missing}</p>}

        <div className="mt-8 flex items-center justify-between border-t border-[#245336]/15 pt-7"><p className="text-sm text-[#1c422b]/55">{isRtl ? "مهندسی، طراحی، استراتژی، رشد و هنر بصری" : "Engineering, design, strategy, growth, and visual craft"}</p><Link href="/aboutus#team" className="inline-flex items-center gap-2 rounded-full border border-[#245336]/20 px-5 py-3 font-bold text-[#123d27] transition hover:bg-[#123d27] hover:text-white">{content.meet}<ArrowRight className={`h-4 w-4 ${isRtl ? "rotate-180" : ""}`} /></Link></div>
      </div>
    </section>
  );
}
