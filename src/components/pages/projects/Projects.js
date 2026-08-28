"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ShieldCheck, Sparkles } from "lucide-react";
import { resolveMediaUrl } from "@/utils/fetch";

function projectImage(source) {
  if (
    !source ||
    typeof source !== "string" ||
    source.startsWith("http") ||
    source.startsWith("/_next/") ||
    source.startsWith("/images/")
  ) return source;
  return resolveMediaUrl(source);
}

export default function Projects({ initialProjects = [] }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = [
    "All",
    ...new Set(initialProjects.map((project) => project.category_name).filter(Boolean)),
  ];
  const projects = selectedCategory === "All"
    ? initialProjects
    : initialProjects.filter((project) => project.category_name === selectedCategory);

  return (
    <main className="overflow-hidden bg-[#07120c] text-[#fff8ee]">
      <section
        className="relative border-b border-white/10 px-6 pb-24 pt-44 md:px-10 md:pb-32 md:pt-56"
        aria-labelledby="projects-title"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(circle at 18% 22%, rgba(101,134,114,.32), transparent 30%), radial-gradient(circle at 84% 12%, rgba(203,167,146,.18), transparent 24%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-end gap-12 lg:grid-cols-[1fr_22rem]">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#cba792]/30 bg-[#cba792]/10 px-4 py-2 text-xs font-bold uppercase tracking-[.24em] text-[#e6c9b6]">
                <Sparkles className="h-4 w-4" /> Selected work
              </div>
              <h1 id="projects-title" className="title max-w-5xl text-5xl font-semibold leading-[1.02] md:text-7xl lg:text-[6.4rem]">
                Digital work built to be <span className="text-[#86a58f]">remembered.</span>
              </h1>
            </div>
            <div className="border-l border-white/15 pl-6 lg:mb-3">
              <p className="text-lg leading-8 text-white/65">
                A curated collection of websites and digital experiences shaped by strategy, clear design, and dependable development.
              </p>
              <div className="mt-7 flex items-center gap-3 text-sm text-[#cba792]">
                <span className="text-3xl font-semibold text-white">{initialProjects.length}</span>
                <span className="max-w-24 leading-5">published projects</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-6 md:px-10" aria-label="Project filters">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto rounded-2xl border border-white/10 bg-white/[.035] p-2 [scrollbar-width:none]">
          {categories.map((category) => {
            const active = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                aria-pressed={active}
                onClick={() => setSelectedCategory(category)}
                className={`shrink-0 rounded-xl px-5 py-3 text-sm font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#cba792] ${
                  active
                    ? "bg-[#fff8ee] text-[#0b2117] shadow-lg"
                    : "text-white/55 hover:bg-white/5 hover:text-white"
                }`}
              >
                {category === "All" ? "All work" : category}
              </button>
            );
          })}
        </div>
      </section>

      <section className="px-4 pb-28 pt-8 md:px-10 md:pb-40" aria-label="Published projects">
        <div className="mx-auto max-w-7xl">
          {projects.length ? (
            <div className="space-y-8 md:space-y-12">
              {projects.map((project, index) => {
                const tags = project.tags
                  ? project.tags.split(",").map((tag) => tag.trim()).filter(Boolean)
                  : [];
                const externalUrl = project.link && project.link !== "#" ? project.link : null;
                const reversed = index % 2 === 1;

                return (
                  <article
                    key={project.id}
                    className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0c1e14] shadow-2xl shadow-black/20"
                  >
                    <div className="grid lg:grid-cols-12">
                      <div className={`relative min-h-[22rem] overflow-hidden md:min-h-[32rem] lg:col-span-7 ${reversed ? "lg:order-2" : ""}`}>
                        <Image
                          src={projectImage(project.banner)}
                          alt={`${project.title} web design project`}
                          fill
                          priority={index === 0}
                          sizes="(max-width: 1024px) 100vw, 60vw"
                          className="object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#07120c]/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0c1e14]/25" />
                        <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-[#07120c]/65 px-4 py-2 text-xs font-bold uppercase tracking-[.18em] text-white backdrop-blur-md md:left-7 md:top-7">
                          {project.category_name || "Digital project"}
                        </span>
                      </div>

                      <div className={`relative flex min-h-[30rem] flex-col justify-between p-7 md:p-12 lg:col-span-5 ${reversed ? "lg:order-1" : ""}`}>
                        <div>
                          <div className="mb-12 flex items-center justify-between">
                            <span className="font-mono text-sm tracking-[.25em] text-[#86a58f]">
                              CASE {String(index + 1).padStart(2, "0")}
                            </span>
                            <span className="inline-flex items-center gap-2 text-xs font-semibold text-white/45">
                              <ShieldCheck className="h-4 w-4 text-[#86a58f]" /> Trustence work
                            </span>
                          </div>

                          <h2 className="title text-3xl font-semibold leading-tight text-[#fff8ee] md:text-5xl">
                            {project.title}
                          </h2>
                          <p className="mt-6 text-base leading-8 text-white/60 md:text-lg">
                            {project.intro || project.description || "A focused digital experience designed and developed by Trustence."}
                          </p>

                          {tags.length > 0 && (
                            <ul className="mt-8 flex flex-wrap gap-2" aria-label="Project skills">
                              {tags.slice(0, 5).map((tag) => (
                                <li key={tag} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/55">
                                  {tag}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>

                        <div className="mt-12 flex flex-wrap gap-3 border-t border-white/10 pt-7">
                          <Link
                            href={`/projects/${project.id}`}
                            className="inline-flex items-center gap-3 rounded-xl bg-[#fff8ee] px-5 py-3.5 font-semibold text-[#0b2117] transition hover:-translate-y-0.5 hover:bg-white"
                          >
                            Read case study <ArrowRight className="h-4 w-4" />
                          </Link>
                          {externalUrl && (
                            <a
                              href={externalUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3.5 font-semibold text-white/75 transition hover:border-[#86a58f] hover:text-white"
                            >
                              Visit website <ArrowUpRight className="h-4 w-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="rounded-[2rem] border border-dashed border-white/15 py-28 text-center">
              <p className="text-xl font-semibold">No projects in this category yet.</p>
              <button type="button" onClick={() => setSelectedCategory("All")} className="mt-5 text-[#cba792] underline underline-offset-4">
                View all work
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#fff8ee] px-6 py-24 text-[#07120c] md:py-32">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[.22em] text-[#245336]">Your project could be next</p>
            <h2 className="title max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">Let’s build a digital experience people trust.</h2>
          </div>
          <Link href="/discovery" className="inline-flex w-fit shrink-0 items-center gap-3 rounded-2xl bg-[#114422] px-6 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-[#07120c]">
            Start a project <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
