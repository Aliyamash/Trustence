import { ArrowUpRight, Layers } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getProjects } from "@/utils/content";
import { getServerLocale } from "@/i18n/server";
import { getCopy } from "@/i18n/copy";

export default async function Portfolio() {
  const locale = await getServerLocale();
  const content = getCopy(locale).home.portfolio;
  const projects = await getProjects(3, locale);
  const fa = locale === "fa";

  return (
    <section data-motion="section" className="overflow-hidden bg-[#e9edea] py-20 md:py-28" aria-labelledby="selected-work-title">
      <div className="container">
        <div className="grid gap-6 border-b border-[#123d27]/15 pb-10 md:grid-cols-[1fr_.75fr] md:items-end">
          <div><p className="mb-4 text-xs font-bold uppercase tracking-[.2em] text-[#245336]">{content.eyebrow}</p><h2 id="selected-work-title" className="title max-w-3xl text-4xl leading-tight text-[#07120c] md:text-6xl">{content.title}</h2></div>
          <p className="max-w-xl text-base leading-8 text-[#173326]/70 md:justify-self-end md:text-lg">{content.body}</p>
        </div>

        {projects.length === 0 ? <p className="py-20 text-center text-[#245336]">{content.empty}</p> : (
          <div data-motion-group className="mt-10 space-y-7">
            {projects.map((project, index) => {
              const detailHref = `/projects/${project.id}`;
              const tags = String(project.tags || "").split(",").map((tag) => tag.trim()).filter(Boolean).slice(0, 3);
              return (
                <article key={project.id} className={`group grid overflow-hidden rounded-[2rem] border border-[#123d27]/10 bg-[#f8f6ef] shadow-[0_20px_70px_rgba(7,18,12,.08)] ${index === 0 ? "lg:grid-cols-[1.35fr_.65fr]" : "lg:grid-cols-2"}`}>
                  <Link href={detailHref} className={`relative block min-h-72 overflow-hidden sm:min-h-96 ${index % 2 ? "lg:order-2" : ""}`} aria-label={`${content.explore}: ${project.title}`}>
                    <Image src={project.banner} alt={project.title} fill priority={index === 0} className="object-cover transition duration-700 ease-out group-hover:scale-[1.025]" sizes={index === 0 ? "(max-width: 1024px) 100vw, 65vw" : "(max-width: 1024px) 100vw, 50vw"} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-50" />
                    <span className="absolute end-5 top-5 grid h-12 w-12 place-items-center rounded-full bg-[#fff8ee] text-[#07120c] shadow-lg transition group-hover:-translate-y-1 group-hover:translate-x-1"><ArrowUpRight /></span>
                  </Link>
                  <div className={`flex min-h-72 flex-col justify-between p-7 md:p-10 ${index % 2 ? "lg:order-1" : ""}`}>
                    <div><div className="flex items-center justify-between gap-4 text-xs font-bold uppercase tracking-[.16em] text-[#245336]/65"><span>0{index + 1}</span><span>{project.category_name || (fa ? "پروژه دیجیتال" : "Digital project")}</span></div><h3 className="title mt-8 text-3xl leading-tight text-[#123d27] md:text-4xl">{project.title}</h3><p className="mt-5 line-clamp-3 leading-7 text-[#173326]/70">{project.intro}</p>{tags.length > 0 && <ul className="mt-6 flex flex-wrap gap-2">{tags.map((tag) => <li key={tag} className="rounded-full border border-[#245336]/15 px-3 py-1.5 text-xs text-[#245336]">{tag}</li>)}</ul>}</div>
                    <div className="mt-9 flex flex-wrap items-center gap-5"><Link href={detailHref} className="inline-flex items-center gap-2 font-bold text-[#123d27]">{content.explore}<ArrowUpRight className="h-4 w-4" /></Link>{project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm text-[#123d27]/55 underline decoration-[#123d27]/20 underline-offset-4">{fa ? "مشاهده نسخه آنلاین" : "View live experience"}</a>}</div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        <div className="mt-12 flex justify-center"><Link className="inline-flex items-center gap-3 rounded-2xl bg-[#123d27] px-6 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-[#07120c]" href="/projects">{content.all}<Layers className="h-5 w-5" /></Link></div>
      </div>
    </section>
  );
}
