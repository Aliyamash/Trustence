import { getFetch } from "@/utils/fetch";
import { getBlurDataUrl } from "@/utils/helper";
import { ArrowRight, Link } from "lucide-react";
import Image from "next/image";

export default async function Projects() {
  let projects = [];

  try {
    projects = await getFetch("/projects");
  } catch (error) {
    console.error("❌ خطا در دریافت پروژه‌ها:", error);
  }

  return (
    <>
      <section className="mx-16 pb-64">
        <h2 className="text-3xl font-bold text-white mb-6">Our Projects</h2>

        {projects.length === 0 ? (
          <p className="text-red-400 text-center text-xl">There was a problem loading projects.</p>
        ) : (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-items-center gap-12">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-zinc-300 w-full max-w-[26rem] h-[18rem] md:h-[20rem] rounded-3xl overflow-hidden shadow-zinc-600 shadow-xl bg-project transition duration-500"
              >
                <Image
                  src={`http://127.0.0.1:8000/${project.banner}`}
                  alt={project.title}
                  width="500"
                  height="650"
                  sizes="100vw"
                  className="w-[90%] h-full object-contain mx-auto"
                  placeholder="blur"
                  blurDataURL={getBlurDataUrl()}
                />
                <div className="bg-gray-project backdrop-blur-sm absolute top-0 left-0 right-0 h-full w-full transition duration-300 opacity-0 group-hover:opacity-100">
                  <div className="flex flex-col items-center justify-center h-full px-6 text-center space-y-4">
                    <h1 className="text-2xl title font-bold text-white">
                      {project.title}
                    </h1>
                    <p className="text-white text-sm opacity-80 leading-relaxed">
                      {project.intro}
                    </p>
                    <a
                      href={`/projects/${project.id}`}
                      className="mt-4 inline-block bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-[#1C422B] hover:text-white transition duration-500"
                    >
                      View Project
                      <Link className="ml-2 inline" size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
