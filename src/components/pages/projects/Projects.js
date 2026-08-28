"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, ExternalLink, ShieldCheck, Sparkles } from "lucide-react";
import { resolveMediaUrl } from "@/utils/fetch";

function projectImage(source) {
  if (!source || typeof source !== "string" || source.startsWith("http") || source.startsWith("/_next/") || source.startsWith("/images/")) return source;
  return resolveMediaUrl(source);
}

function ProjectPreview({ project, priority = false, featured = false }) {
  const source = projectImage(project.banner);

  return (
    <div className={`relative overflow-hidden bg-[#0b1510] ${featured ? "aspect-[16/10] lg:aspect-auto lg:min-h-[38rem]" : "aspect-[16/10]"}`}>
      <Image src={source} alt="" fill aria-hidden="true" sizes="(max-width: 1024px) 100vw, 55vw" className="scale-110 object-cover opacity-30 blur-2xl" />
      <div className="absolute inset-0 bg-[#07120c]/30" />

      <div className="absolute inset-x-3 bottom-3 top-11 overflow-hidden rounded-b-xl border border-white/10 bg-[#07120c]/65 shadow-2xl shadow-black/40 md:inset-x-5 md:bottom-5 md:top-14">
        <Image
          src={source}
          alt={`${project.title} project preview`}
          fill
          priority={priority}
          sizes={featured ? "(max-width: 1024px) 100vw, 58vw" : "(max-width: 1024px) 100vw, 45vw"}
          className="object-contain object-center transition duration-700 ease-out group-hover:scale-[1.025]"
        />
      </div>

      <div className="absolute inset-x-0 top-0 flex h-11 items-center justify-between border-b border-white/10 bg-[#0a120d]/90 px-4 backdrop-blur-md md:h-14 md:px-5">
        <div className="flex gap-1.5" aria-hidden="true"><span className="h-2 w-2 rounded-full bg-[#cba792]" /><span className="h-2 w-2 rounded-full bg-[#86a58f]" /><span className="h-2 w-2 rounded-full bg-white/25" /></div>
        <span className="max-w-[58%] truncate rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[9px] uppercase tracking-[.16em] text-white/40 md:text-[10px]">trustence / selected work</span>
        <ExternalLink className="h-3.5 w-3.5 text-white/35" />
      </div>
    </div>
  );
}

export default function Projects({ initialProjects = [] }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", ...new Set(initialProjects.map((project) => project.category_name).filter(Boolean))];
  const projects = selectedCategory === "All" ? initialProjects : initialProjects.filter((project) => project.category_name === selectedCategory);

  return (
    <main className="overflow-hidden bg-[#07120c] text-[#fff8ee]">
      <section className="relative border-b border-white/10 px-5 pb-20 pt-40 md:px-10 md:pb-28 md:pt-56" aria-labelledby="projects-title">
        <div className="pointer-events-none absolute inset-0 opacity-70" style={{ backgroundImage: "radial-gradient(circle at 15% 22%, rgba(101,134,114,.34), transparent 30%), radial-gradient(circle at 85% 12%, rgba(203,167,146,.18), transparent 25%)" }} />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-end gap-12 lg:grid-cols-[1fr_22rem]">
            <div>
              <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#cba792]/30 bg-[#cba792]/10 px-4 py-2 text-xs font-bold uppercase tracking-[.22em] text-[#e6c9b6]"><Sparkles className="h-4 w-4" /> Selected work · Built with intent</p>
              <h1 id="projects-title" className="title max-w-5xl text-5xl font-semibold leading-[1.03] md:text-7xl lg:text-[6.2rem]">Work that earns <span className="text-[#86a58f]">attention</span> and trust.</h1>
            </div>
            <div className="border-l border-white/15 pl-6 lg:mb-2">
              <p className="text-lg leading-8 text-white/65">A closer look at how we translate strategy into clear, useful, and memorable digital experiences.</p>
              <div className="mt-8 flex items-center gap-4"><span className="title text-4xl text-white">{String(initialProjects.length).padStart(2, "0")}</span><span className="max-w-24 text-sm leading-5 text-[#cba792]">published case studies</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="sticky top-[7.25rem] z-20 border-b border-white/10 bg-[#07120c]/90 px-4 py-4 backdrop-blur-xl md:px-10" aria-label="Project filters">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto [scrollbar-width:none]">
          {categories.map((category) => {
            const active = selectedCategory === category;
            return <button key={category} type="button" aria-pressed={active} onClick={() => setSelectedCategory(category)} className={`shrink-0 rounded-full px-5 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#cba792] ${active ? "bg-[#fff8ee] text-[#0b2117]" : "border border-white/10 text-white/55 hover:border-white/25 hover:text-white"}`}>{category === "All" ? "All projects" : category}</button>;
          })}
        </div>
      </section>

      <section className="px-4 pb-28 pt-10 md:px-10 md:pb-40 md:pt-16" aria-label="Published projects">
        <div className="mx-auto max-w-7xl">
          {projects.length ? (
            <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
              {projects.map((project, index) => {
                const tags = project.tags ? project.tags.split(",").map((tag) => tag.trim()).filter(Boolean) : [];
                const externalUrl = project.link && project.link !== "#" ? project.link : null;
                const featured = index % 5 === 0;

                return (
                  <article key={project.id} className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0c1e14] shadow-2xl shadow-black/20 transition duration-500 hover:-translate-y-1 hover:border-[#86a58f]/35 ${featured ? "lg:col-span-12" : "lg:col-span-6"}`}>
                    <div className={featured ? "lg:grid lg:grid-cols-12" : ""}>
                      <div className={featured ? "lg:col-span-7" : ""}><ProjectPreview project={project} priority={index === 0} featured={featured} /></div>
                      <div className={`relative flex flex-col justify-between p-7 md:p-10 ${featured ? "min-h-[29rem] lg:col-span-5 lg:min-h-[38rem] lg:p-12" : "min-h-[27rem]"}`}>
                        <span className="pointer-events-none absolute -right-2 -top-8 title text-[7rem] leading-none text-white/[.025] md:text-[9rem]">{String(index + 1).padStart(2, "0")}</span>
                        <div className="relative">
                          <div className="flex items-center justify-between gap-4">
                            <span className="rounded-full border border-[#86a58f]/25 bg-[#86a58f]/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[.14em] text-[#a9c2b0]">{project.category_name || "Digital project"}</span>
                            <span className="inline-flex shrink-0 items-center gap-2 text-xs font-semibold text-white/35"><ShieldCheck className="h-4 w-4 text-[#86a58f]" /> Trustence</span>
                          </div>
                          <h2 className={`title mt-9 font-semibold leading-tight text-[#fff8ee] ${featured ? "text-3xl md:text-5xl" : "text-3xl md:text-4xl"}`}>{project.title}</h2>
                          <p className="mt-5 line-clamp-4 text-base leading-8 text-white/55">{project.intro || project.description || "A focused digital experience designed and developed by Trustence."}</p>
                          {tags.length > 0 && <ul className="mt-7 flex flex-wrap gap-2" aria-label="Project skills">{tags.slice(0, 5).map((tag) => <li key={tag} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/50">{tag}</li>)}</ul>}
                        </div>
                        <div className="relative mt-10 flex flex-wrap gap-3 border-t border-white/10 pt-6">
                          <Link href={`/projects/${project.id}`} className="inline-flex items-center gap-3 rounded-xl bg-[#fff8ee] px-5 py-3.5 font-semibold text-[#0b2117] transition hover:bg-white">View case study <ArrowRight className="h-4 w-4" /></Link>
                          {externalUrl && <a href={externalUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3.5 font-semibold text-white/70 transition hover:border-[#86a58f] hover:text-white">Live project <ArrowUpRight className="h-4 w-4" /></a>}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="rounded-[2rem] border border-dashed border-white/15 py-28 text-center"><p className="text-xl font-semibold">No projects in this category yet.</p><button type="button" onClick={() => setSelectedCategory("All")} className="mt-5 text-[#cba792] underline underline-offset-4">View all work</button></div>
          )}
        </div>
      </section>

      <section className="border-t border-[#07120c]/10 bg-[#fff8ee] px-5 py-24 text-[#07120c] md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div><p className="mb-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.22em] text-[#245336]"><Check className="h-4 w-4" /> Your project could be next</p><h2 className="title max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">Let’s build a digital experience people choose to remember.</h2></div>
          <Link href="/discovery" className="inline-flex w-fit shrink-0 items-center gap-3 rounded-2xl bg-[#114422] px-6 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-[#07120c]">Start a project <ArrowUpRight className="h-5 w-5" /></Link>
        </div>
      </section>
    </main>
  );
}
