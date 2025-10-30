// src/components/pages/projects/Projects.js
'use client';

import { useState, useEffect } from 'react';
import { getFetch } from "@/utils/fetch";
import { getBlurDataUrl } from "@/utils/helper";
import { ArrowRight, Filter } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [categories, setCategories] = useState(['All']);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // دریافت داده‌ها
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await getFetch("/projects");

        // پشتیبانی از ساختارهای مختلف API
        let data = [];
        if (Array.isArray(response)) {
          data = response;
        } else if (response && Array.isArray(response.data)) {
          data = response.data;
        } else if (response && Array.isArray(response.projects)) {
          data = response.projects;
        } else {
          console.warn("ساختار داده پروژه‌ها نامعتبر است:", response);
          data = [];
        }

        setProjects(data);

        // استخراج دسته‌بندی‌ها
        const uniqueCategories = Array.from(
          new Set(data.map(p => p.category).filter(Boolean))
        );
        setCategories(['All', ...uniqueCategories]);

        setFilteredProjects(data);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError("Failed to load projects");
        setProjects([]);
        setFilteredProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // فیلتر بر اساس دسته‌بندی
  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter(p => p.category === selectedCategory)
      );
    }
  }, [selectedCategory, projects]);

  return (
    <section className="mx-4 sm:mx-8 lg:mx-16 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto">
        {/* عنوان */}
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-4">
            Our Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {filteredProjects.length} Projects in {selectedCategory}
          </p>
        </div>

        {/* فیلتر دسته‌بندی */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <div className="flex items-center gap-2 px-3 py-2 bg-[#245336]/10 border border-[#245336]/30 rounded-lg">
            <Filter className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-400 font-medium">Filter:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setError(null) || setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-[#114422] to-[#245336] text-white shadow-lg shadow-[#245336]/40'
                  : 'bg-[#245336]/10 text-gray-300 hover:bg-[#245336]/20 border border-[#245336]/30 hover:border-[#245336]/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* خطا */}
        {error && (
          <div className="text-center py-20">
            <p className="text-red-400 text-xl">{error}</p>
          </div>
        )}

        {/* لودینگ */}
        {loading && (
          <div className="flex justify-center py-32">
            <div className="w-16 h-16 border-4 border-[#245336]/20 border-t-[#245336] rounded-full animate-spin"></div>
          </div>
        )}

        {/* بدون پروژه */}
        {!loading && !error && Array.isArray(filteredProjects) && filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl">No projects found in this category.</p>
          </div>
        )}

        {/* گالری پروژه‌ها */}
        {!loading && !error && Array.isArray(filteredProjects) && filteredProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
            {filteredProjects.map((project, index) => {
              const isFeatured = project.is_active === 1 || project.is_active === true;

              return (
                <div
                  key={project.id}
                  className="group relative bg-[#0f1512] w-full max-w-[26rem] h-[18rem] md:h-[20rem] rounded-3xl overflow-hidden shadow-xl shadow-[#114422]/20 transition-all duration-500 hover:shadow-[#245336]/40 hover:shadow-2xl cursor-pointer"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.08}s both`,
                  }}
                >
                  {/* تصویر */}
                  <Image
                    src={project.banner?.startsWith('http') ? project.banner : `http://86.106.158.93:8000/${project.banner}`}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 40vw, 26rem"
                    className="object-contain transition-transform duration-700 group-hover:scale-110"
                    placeholder="blur"
                    blurDataURL={getBlurDataUrl()}
                  />

                  {/* گرادیان پس‌زمینه */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f0d] via-[#0a0f0d]/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

                  {/* نشان Featured */}
                  {isFeatured && (
                    <div className="absolute top-4 left-4 flex items-center gap-1.5 px-2.5 py-1 bg-[#245336]/20 border border-[#245336]/50 rounded-full backdrop-blur-sm">
                      <div className="w-1.5 h-1.5 bg-[#245336] rounded-full"></div>
                      <span className="text-xs font-semibold text-[#245336]">Featured</span>
                    </div>
                  )}

                  {/* محتوای هاور */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm">
                    <h3 className="text-2xl font-bold text-white mb-3 bg-gradient-to-r from-[#114422] to-[#245336] bg-clip-text text-transparent">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed max-w-xs mx-auto mb-6 opacity-90">
                      {project.intro}
                    </p>
                    <a
                      href={`/projects/${project.id}`}
                      className="inline-flex items-center gap-2 bg-white text-[#114422] px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#245336] hover:text-white transition-all duration-300 shadow-lg hover:shadow-[#245336]/50 transform hover:scale-105"
                    >
                      View Project
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* انیمیشن fadeInUp */}
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