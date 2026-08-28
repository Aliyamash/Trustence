// src/components/pages/projects/Projects.js
"use client";

import { useState, useEffect } from "react";
import { resolveMediaUrl } from "@/utils/fetch";
import { getBlurDataUrl } from "@/utils/helper";
import { ArrowRight, Filter, ArrowUpRight, Lock, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Projects({ initialProjects = [] }) {
  const [projects] = useState(initialProjects);
  const [filteredProjects, setFilteredProjects] = useState(initialProjects);
  const [categories] = useState(["All", ...new Set(initialProjects.map((project) => project.category_name).filter(Boolean))]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const loading = false;
  const error = null;
  const [hoveredId, setHoveredId] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const greenGrad = "from-[#114422] via-[#245336] to-[#22c55e]";

  const colorMap = {
    "Online Store": greenGrad,
    SaaS: greenGrad,
    Mobile: greenGrad,
    Analytics: greenGrad,
    Branding: greenGrad,
    Marketing: greenGrad,
  };

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((p) => p.category_name === selectedCategory)
      );
    }
  }, [selectedCategory, projects]);

  return (
    <section className="mx-4 sm:mx-8 lg:mx-16 py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* عنوان */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#22c55e]/10 to-[#245336]/5 rounded-full mb-4 border border-[#22c55e]/40">
            <Sparkles className="w-5 h-5 text-[#114422] mr-2" />
            <span className="font-medium text-[#114422]">Featured Work</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-4">
            Our Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {filteredProjects.length} Projects in {selectedCategory}
          </p>
        </div>

        {/* فیلترها */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          <button
            onClick={() => setSelectedCategory("All")}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              selectedCategory === "All"
                ? `bg-gradient-to-r ${greenGrad} text-white shadow-lg shadow-[#114422]/30`
                : "bg-white text-slate-700 border-2 border-[#245336]/30 hover:border-[#114422]"
            }`}
          >
            All Projects
          </button>
          {categories
            .filter((c) => c !== "All")
            .map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === cat
                    ? `bg-gradient-to-r ${greenGrad} text-white shadow-lg shadow-[#114422]/30`
                    : "bg-white text-slate-700 border-2 border-[#245336]/30 hover:border-[#114422]"
                }`}
              >
                {cat}
              </button>
            ))}
        </div>

        {/* وضعیت‌ها */}
        {error && (
          <div className="text-center py-20 text-red-400 text-xl">{error}</div>
        )}
        {loading && (
          <div className="flex justify-center py-32">
            <div className="w-16 h-16 border-4 border-[#245336]/20 border-t-[#22c55e] rounded-full animate-spin"></div>
          </div>
        )}
        {!loading && !error && filteredProjects.length === 0 && (
          <div className="text-center py-20 text-slate-600 text-xl">
            No projects found.
          </div>
        )}

        {/* کارت‌ها — قفل‌شده هم هاور داره! */}
        {!loading && !error && filteredProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => {
              const isClient = project.link && project.link !== "#";
              const isLocked = !isClient;
              const gradientColor =
                colorMap[project.category_name] || greenGrad;
              const tags = project.tags
                ? project.tags.split(",").map((t) => t.trim())
                : [];

              return (
                <div
                  key={project.id}
                  className={`group relative h-96 rounded-2xl overflow-hidden transition-all duration-500 ${
                    isLocked ? "cursor-normal" : "cursor-pointer"
                  }`}
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.08}s both`,
                  }}
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => isClient && setSelectedProject(project)}
                >
                  {/* تصویر + گرادیان */}

                  <div
                    className={`absolute inset-0 ${
                      isLocked ? "blur-[2px]" : ""
                    }`}
                  >
                    <Image
                      src={
                        project.banner?.startsWith("http")
                          ? project.banner
                          : resolveMediaUrl(project.banner)
                      }
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 90vw, 26rem"
                      className={`object-cover transition-transform duration-700 ${
                        hoveredId === project.id && !isLocked
                          ? "scale-110"
                          : "scale-100"
                      }`}
                      placeholder="blur"
                      blurDataURL={getBlurDataUrl()}
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent transition-opacity duration-300 ${
                        hoveredId === project.id ? "opacity-70" : "opacity-60"
                      }`}
                    />
                  </div>

                  {/* لایه قفل — وسط کارت */}
                  {isLocked && (
                    <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-2xl ">
                          <Lock className="w-9 h-9 text-white" />
                        </div>
                        <p className="text-white/70 text-sm mt-1 tracking-wider">
                          Private
                        </p>
                      </div>
                    </div>
                  )}

                  {/* آیکون بالا راست */}
                  {isClient && (
                    <div
                      className={`absolute top-6 right-6 w-12 h-12 bg-gradient-to-br ${gradientColor} rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 scale-90 group-hover:scale-100 shadow-xl`}
                    >
                      <ArrowUpRight className="w-6 h-6 text-white" />
                    </div>
                  )}

                  {/* محتوا */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-between z-20">
                    <div />

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div
                          className={`inline-block px-3 py-1 rounded-full text-sm font-medium backdrop-blur-md ${
                            isLocked
                              ? "bg-white/10 text-white/80"
                              : "bg-white/20 text-white"
                          }`}
                        >
                          {project.category_name}
                          {isLocked && " • Customer project"}
                        </div>
                        <h3
                          className={`text-2xl font-bold leading-tight ${
                            isLocked ? "text-white/90" : "text-white"
                          } drop-shadow-md`}
                        >
                          {project.title}
                        </h3>
                        <Link
                          href={`/projects/${project.id}`}
                          onClick={(event) => event.stopPropagation()}
                          className="inline-flex items-center gap-1 text-sm font-semibold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white"
                        >
                          View case study <ArrowRight className="h-4 w-4" />
                        </Link>

                        <p
                          className={`text-sm leading-relaxed text-slate-100 transition-all duration-500 ${
                            hoveredId === project.id
                              ? "max-h-24 opacity-100 translate-y-0"
                              : "max-h-0 opacity-0 translate-y-2"
                          } overflow-hidden`}
                        >
                          {project.intro || "No description available."}
                        </p>
                      </div>

                      {tags.length > 0 && (
                        <div
                          className={`flex flex-wrap gap-2 transition-all duration-500 delay-75 ${
                            hoveredId === project.id
                              ? "max-h-12 opacity-100 translate-y-0"
                              : "max-h-0 opacity-0 translate-y-4"
                          } overflow-hidden`}
                        >
                          {tags.slice(0, 3).map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-1 bg-white/15 backdrop-blur-sm rounded-full text-xs text-white font-medium border border-white/20"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* بردر هاور */}
                  <div
                    className={`absolute inset-0 border-2 rounded-2xl transition-all duration-400 pointer-events-none ${
                      hoveredId === project.id
                        ? "border-white/30 shadow-2xl shadow-white/10"
                        : isLocked
                        ? "border-white/10"
                        : "border-white/0"
                    }`}
                  />
                </div>
              );
            })}
          </div>
        )}

        {/* مودال */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={
                    selectedProject.banner?.startsWith("http")
                      ? selectedProject.banner
                      : `${process.env.NEXT_PUBLIC_MEDIA_URL}/${selectedProject.banner}`
                  }
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={getBlurDataUrl()}
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-slate-100"
                >
                  <span className="text-2xl">×</span>
                </button>
              </div>
              <div className="p-8">
                <span
                  className={`inline-block px-3 py-1 bg-gradient-to-r ${
                    colorMap[selectedProject.category_name] || greenGrad
                  } text-white rounded-full text-sm font-medium mb-3 shadow-lg`}
                >
                  {selectedProject.category_name}
                </span>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  {selectedProject.title}
                </h2>
                <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                  {selectedProject.intro}
                </p>
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-slate-900 mb-3">
                    Key Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags?.split(",").map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-[#245336]/10 text-[#114422] rounded-full text-sm font-medium border border-[#245336]/30"
                      >
                        {tag.trim()}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${greenGrad} text-white rounded-lg font-medium hover:shadow-xl hover:scale-105 transition-all shadow-xl`}
                >
                  View site <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
