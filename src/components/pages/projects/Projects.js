"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, ExternalLink, ShieldCheck, Sparkles } from "lucide-react";
import { resolveMediaUrl } from "@/utils/fetch";
import { useLocale } from "@/i18n/LocaleProvider";

function projectImage(source) {
  if (!source || typeof source !== "string" || source.startsWith("http") || source.startsWith("/_next/") || source.startsWith("/images/")) return source;
  return resolveMediaUrl(source);
}

function ProjectPreview({ project, priority = false, featured = false, label, previewLabel }) {
  const source = projectImage(project.banner);

  return (
    <div className={`relative overflow-hidden bg-[#0b1510] ${featured ? "aspect-[16/10] lg:aspect-auto lg:min-h-[38rem]" : "aspect-[16/10]"}`}>
      <Image src={source} alt="" fill aria-hidden="true" sizes="(max-width: 1024px) 100vw, 55vw" className="scale-110 object-cover opacity-30 blur-2xl" />
      <div className="absolute inset-0 bg-[#07120c]/30" />

      <div className="absolute inset-x-3 bottom-3 top-11 overflow-hidden rounded-b-xl border border-white/10 bg-[#07120c]/65 shadow-2xl shadow-black/40 md:inset-x-5 md:bottom-5 md:top-14">
        <Image
          src={source}
          alt={`${previewLabel} ${project.title}`}
          fill
          priority={priority}
          sizes={featured ? "(max-width: 1024px) 100vw, 58vw" : "(max-width: 1024px) 100vw, 45vw"}
          className="object-contain object-center transition duration-700 ease-out group-hover:scale-[1.025]"
        />
      </div>

      <div className="absolute inset-x-0 top-0 flex h-11 items-center justify-between border-b border-white/10 bg-[#0a120d]/90 px-4 backdrop-blur-md md:h-14 md:px-5">
        <div className="flex gap-1.5" aria-hidden="true"><span className="h-2 w-2 rounded-full bg-[#cba792]" /><span className="h-2 w-2 rounded-full bg-[#86a58f]" /><span className="h-2 w-2 rounded-full bg-white/25" /></div>
        <span className="max-w-[58%] truncate rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[9px] uppercase tracking-[.16em] text-white/40 md:text-[10px]">trustence / {label}</span>
        <ExternalLink className="h-3.5 w-3.5 text-white/35" />
      </div>
    </div>
  );
}

export default function Projects({ initialProjects = [] }) {
  const { locale, isRtl } = useLocale();
  const copy = locale === "fa" ? { label: "نمونه‌کار منتخب", preview: "پیش‌نمایش پروژه", skills: "تخصص‌های پروژه", eyebrow: "نمونه‌کارهای منتخب · ساخته‌شده با هدف", title: <>کاری که <span className="text-[#86a58f]">توجه</span> و اعتماد به‌دست می‌آورد.</>, intro: "نگاهی نزدیک‌تر به اینکه چگونه استراتژی را به تجربه‌های دیجیتال روشن، مفید و ماندگار تبدیل می‌کنیم.", published: "مطالعه موردی منتشرشده", all: "همه پروژه‌ها", filters: "فیلتر پروژه‌ها", publishedLabel: "پروژه‌های منتشرشده", digital: "پروژه دیجیتال", fallback: "یک تجربه دیجیتال متمرکز که توسط تراستنس طراحی و توسعه یافته است.", caseStudy: "مشاهده جزئیات", live: "پروژه آنلاین", empty: "هنوز پروژه‌ای در این دسته وجود ندارد.", viewAll: "نمایش همه نمونه‌کارها", next: "پروژه بعدی می‌تواند متعلق به شما باشد", ctaTitle: "تجربه‌ای دیجیتال بسازیم که در ذهن مخاطب بماند.", start: "شروع پروژه" } : { label: "selected work", preview: "Project preview for", skills: "Project skills", eyebrow: "Selected work · Built with intent", title: <>Work that earns <span className="text-[#86a58f]">attention</span> and trust.</>, intro: "A closer look at how we translate strategy into clear, useful, and memorable digital experiences.", published: "published case studies", all: "All projects", filters: "Project filters", publishedLabel: "Published projects", digital: "Digital project", fallback: "A focused digital experience designed and developed by Trustence.", caseStudy: "View case study", live: "Live project", empty: "No projects in this category yet.", viewAll: "View all work", next: "Your project could be next", ctaTitle: "Let’s build a digital experience people choose to remember.", start: "Start a project" };
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", ...new Set(initialProjects.map((project) => project.category_name).filter(Boolean))];
  const projects = selectedCategory === "All" ? initialProjects : initialProjects.filter((project) => project.category_name === selectedCategory);

  return (
    <main className="overflow-hidden bg-[#07120c] text-[#fff8ee]">
      <section className="relative border-b border-white/10 px-5 pb-20 pt-40 md:px-10 md:pb-28 md:pt-56" aria-labelledby="projects-title">
        <div className="pointer-events-none absolute inset-0 opacity-70" style={{ backgroundImage: "radial-gradient(circle at 15% 22%, rgba(101,134,114,.34), transparent 30%), radial-gradient(circle at 85% 12%, rgba(203,167,146,.18), transparent 25%)" }} />
        <div className="pointer-events-none absolute inset-x-0 bottom-[-.2em] overflow-hidden text-center title text-[clamp(7rem,22vw,20rem)] leading-none tracking-[-.08em] text-white/[.018]" aria-hidden="true">WORK</div>
        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-end gap-12 lg:grid-cols-[1fr_22rem]">
            <div>
              <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#cba792]/30 bg-[#cba792]/10 px-4 py-2 text-xs font-bold uppercase tracking-[.22em] text-[#e6c9b6]"><Sparkles className="h-4 w-4" /> {copy.eyebrow}</p>
              <h1 id="projects-title" className="title max-w-5xl text-5xl font-semibold leading-[1.12] md:text-7xl lg:text-[6.2rem]">{copy.title}</h1>
            </div>
            <div className="border-l border-white/15 pl-6 lg:mb-2">
              <p className="text-lg leading-8 text-white/65">{copy.intro}</p>
              <div className="mt-8 flex items-center gap-4"><span className="title text-4xl text-white">{String(initialProjects.length).padStart(2, "0")}</span><span className="max-w-24 text-sm leading-5 text-[#cba792]">{copy.published}</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="sticky top-[7.25rem] z-20 border-b border-white/10 bg-[#07120c]/90 px-4 py-4 backdrop-blur-xl md:px-10" aria-label={copy.filters}>
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto [scrollbar-width:none]">
          {categories.map((category) => {
            const active = selectedCategory === category;
            return <button key={category} type="button" aria-pressed={active} onClick={() => setSelectedCategory(category)} className={`shrink-0 rounded-full px-5 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#cba792] ${active ? "bg-[#fff8ee] text-[#0b2117]" : "border border-white/10 text-white/55 hover:border-white/25 hover:text-white"}`}>{category === "All" ? copy.all : category}</button>;
          })}
        </div>
      </section>

      <section className="px-4 pb-28 pt-10 md:px-10 md:pb-40 md:pt-16" aria-label={copy.publishedLabel}>
        <div className="mx-auto max-w-7xl">
          {projects.length ? (
            <div className="space-y-8 md:space-y-12">
              {projects.map((project, index) => {
                const tags = project.tags ? project.tags.split(",").map((tag) => tag.trim()).filter(Boolean) : [];
                const externalUrl = project.link && project.link !== "#" ? project.link : null;
                const reverse = index % 2 === 1;

                return (
                  <article key={project.id} className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a1911] shadow-[0_35px_100px_-45px_rgba(0,0,0,.85)] transition duration-500 hover:border-[#86a58f]/40">
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100" style={{ backgroundImage: `radial-gradient(circle at ${reverse ? "80%" : "20%"} 20%, rgba(101,134,114,.2), transparent 38%)` }} />
                    <div className="relative grid lg:min-h-[36rem] lg:grid-cols-12">
                      <div className={`relative lg:col-span-7 ${reverse ? "lg:order-2" : ""}`}>
                        <ProjectPreview project={project} priority={index === 0} featured label={copy.label} previewLabel={copy.preview} />
                        <div className="pointer-events-none absolute bottom-4 start-4 rounded-full border border-white/10 bg-[#07120c]/70 px-4 py-2 font-mono text-[10px] uppercase tracking-[.2em] text-white/55 backdrop-blur md:bottom-7 md:start-7">{String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</div>
                      </div>
                      <div className={`relative flex min-h-[30rem] flex-col justify-between p-7 md:p-10 lg:col-span-5 lg:min-h-[36rem] lg:p-12 ${reverse ? "lg:order-1" : ""}`}>
                        <span className={`pointer-events-none absolute -top-10 title text-[11rem] leading-none text-white/[.025] ${isRtl ? "left-3" : "right-3"}`}>{String(index + 1).padStart(2, "0")}</span>
                        <div className="relative">
                          <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
                            <span className="text-[11px] font-bold uppercase tracking-[.16em] text-[#a9c2b0]">{project.category_name || copy.digital}</span>
                            <span className="inline-flex shrink-0 items-center gap-2 text-[10px] font-semibold uppercase tracking-[.14em] text-white/35"><ShieldCheck className="h-4 w-4 text-[#86a58f]" /> Trustence</span>
                          </div>
                          <div className="mt-10 h-px w-14 bg-[#cba792] transition-all duration-500 group-hover:w-28" />
                          <h2 className="title mt-7 text-4xl font-semibold leading-[1.08] text-[#fff8ee] md:text-5xl">{project.title}</h2>
                          <p className="mt-6 line-clamp-4 text-base leading-8 text-white/55">{project.intro || project.description || copy.fallback}</p>
                          {tags.length > 0 && <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2" aria-label={copy.skills}>{tags.slice(0, 5).map((tag) => <li key={tag} className="relative ps-3 text-xs text-white/48 before:absolute before:start-0 before:top-1/2 before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-[#86a58f]">{tag}</li>)}</ul>}
                        </div>
                        <div className="relative mt-10 flex flex-wrap items-center gap-3 border-t border-white/10 pt-6">
                          <Link href={`/projects/${project.id}`} className="inline-flex items-center gap-3 rounded-full bg-[#fff8ee] px-5 py-3.5 font-semibold text-[#0b2117] transition hover:-translate-y-0.5 hover:bg-white">{copy.caseStudy} <ArrowRight className={`h-4 w-4 ${isRtl ? "rotate-180" : ""}`} /></Link>
                          {externalUrl && <a href={externalUrl} target="_blank" rel="noopener noreferrer" aria-label={`${copy.live}: ${project.title}`} className="grid h-12 w-12 place-items-center rounded-full border border-white/15 text-white/65 transition hover:border-[#86a58f] hover:bg-[#86a58f] hover:text-[#07120c]"><ArrowUpRight className="h-4 w-4" /></a>}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="rounded-[2rem] border border-dashed border-white/15 py-28 text-center"><p className="text-xl font-semibold">{copy.empty}</p><button type="button" onClick={() => setSelectedCategory("All")} className="mt-5 text-[#cba792] underline underline-offset-4">{copy.viewAll}</button></div>
          )}
        </div>
      </section>

      <section className="border-t border-[#07120c]/10 bg-[#fff8ee] px-5 py-24 text-[#07120c] md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div><p className="mb-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.22em] text-[#245336]"><Check className="h-4 w-4" /> {copy.next}</p><h2 className="title max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">{copy.ctaTitle}</h2></div>
          <Link href="/discovery" className="inline-flex w-fit shrink-0 items-center gap-3 rounded-2xl bg-[#114422] px-6 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-[#07120c]">{copy.start} <ArrowUpRight className="h-5 w-5" /></Link>
        </div>
      </section>
    </main>
  );
}
