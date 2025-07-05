import { getFetch } from "@/utils/fetch"
import { getBlurDataUrl } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";

export default async function soloProjectPage({params}){
      let project = null;

  try {
    project = await getFetch(`/projects/${params.id}`);
  } catch (error) {
    console.error("Difficulty receiving information", error);

  }

  if (!project) {
    return (
      <div className="min-h-screen bg-[#060e09] text-white flex items-center justify-center">
        <p className="text-xl">Difficulty receiving information</p>
      </div>
    );
  }
    
    return(
<div className="bg-[#060e09] text-white pt-64">
  {/* Hero Section */}
  <section className=" px-6 md:px-24 py-24 bg-[#326d4a]">
  <div className="text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-12">{project.title}</h1>
    <p className="text-lg md:text-xl text-center text-[#fff8ee] mb-8">
      {project.intro}
    </p>
    <Link href={project.link} className="bg-white text-black rounded-2xl px-6 py-2 text-base">
      View Live Site
    </Link>
  </div>
  </section>

  {/* Project Info */}
  <section className=" bg-[#326d4a] px-6 md:px-24 py-44 grid md:grid-cols-2 gap-10">
    <div>
      <h2 className="text-4xl font-semibold mb-4">Project Information</h2>
      <ul className="space-y-2 text-[#fff8ee]">
        <li>Category: E-commerce</li>
        <li>Technologies: Next.js, Tailwind, GSAP</li>
        <li>Duration: 4 weeks</li>
        <li>Our Role: UI Design, Front-end Development</li>
      </ul>
    </div>
    <div>
      <h2 className="text-4xl font-semibold mb-4">Challenges & Solutions</h2>
      <p className="text-[#fff8ee] leading-7">
        {project.description}
      </p>
    </div>
  </section>

  {/* Gallery Section */}
  <section className="bg-[#326d4a] px-6 md:px-24 py-32">
    <h2 className="text-2xl font-semibold mb-8">Project Images</h2>
    <div className="grid md:grid-cols-2 gap-6">
      <div className="relative w-full h-64 rounded-xl overflow-hidden">
        <Image
          src={`http://127.0.0.1:8000/${project.banner}`}
          alt="Project Screenshot"
          fill
          className="object-cover"
        />
      </div>
      <div className="relative w-full h-64 rounded-xl overflow-hidden">
        <Image
          src={`http://127.0.0.1:8000/${project.banner}`}
          alt="Project Screenshot"
          fill
          className="object-cover"
        />
      </div>
    </div>
  </section>

  {/* Process Section */}
  <section className="px-6 md:px-24 py-32 bg-[#fff8ee]  text-black">
    <h2 className="text-2xl font-semibold mb-8">Project Workflow</h2>
    <ol className="list-decimal space-y-3 pl-5">
      <li>Understanding client needs</li>
      <li>Initial design & wireframing</li>
      <li>Page development with Tailwind</li>
      <li>Adding interactive animations with GSAP</li>
      <li>Delivery and support</li>
    </ol>
  </section>

  {/* CTA Section */}
  <section className="px-6 md:px-24 pt-44 pb-44 text-center">
    <h2 className="text-4xl  font-bold mb-8">Want a similar project?</h2>
    <Link href={'/discovery'}  className="bg-[#1C422B] text-white hover:text-black hover:bg-white transition
     duration-300 rounded-2xl px-8 py-4 text-lg">
      Request a Discovery Call
    </Link>
  </section>
</div>

    )
}