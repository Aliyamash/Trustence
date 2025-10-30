// app/projects/[id]/page.js
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getBlurDataUrl } from '@/utils/helper';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

// API Base URL (در .env.local تعریف کن)
const API_BASE_URL = process.env.API_BASE_URL || 'http://86.106.158.93:8000';

async function getProject(id) {
  try {
    const res = await fetch(`${API_BASE_URL}/api/projects/${id}`, {
      cache: 'no-store', // همیشه تازه
      headers: { 'Content-Type': 'application/json' },
    });

    if (!res.ok) throw new Error('Project not found');
    return await res.json();
  } catch (error) {
    console.error('Error fetching project:', error);
    return null;
  }
}

export default async function SoloProjectPage({ params }) {
  const { id } = params;

  // چک کن id معتبر باشه
  if (!id || isNaN(id)) {
    notFound();
  }

  const project = await getProject(id);

  // اگر پروژه پیدا نشد → 404
  if (!project) {
    notFound();
  }

  return (
    <div className="bg-[#060e09] text-white">

      {/* Hero Section */}
      <section className="px-6 md:px-24 py-24 bg-[#326d4a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#114422] to-[#245336] bg-clip-text text-transparent">
            {project.title}
          </h1>
          <p className="text-lg md:text-xl text-[#fff8ee] mb-8 max-w-3xl mx-auto">
            {project.intro}
          </p>
          {project.project_url && (
            <Link
              href={project.project_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#114422] rounded-2xl px-6 py-3 text-base font-semibold hover:bg-[#245336] hover:text-white transition-all shadow-lg"
            >
              View Live Site
            </Link>
          )}
        </div>
      </section>

      {/* Project Info */}
      <section className="bg-[#326d4a] px-6 md:px-24 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-semibold mb-6 text-white">Project Information</h2>
            <ul className="space-y-3 text-[#fff8ee] text-lg">
              <li><strong>Category:</strong> {project.category || '—'}</li>
              <li><strong>Technologies:</strong> Next.js, Tailwind, GSAP</li>
              <li><strong>Duration:</strong> 4 weeks</li>
              <li><strong>Our Role:</strong> UI Design, Front-end Development</li>
            </ul>
          </div>
          <div>
            <h2 className="text-4xl font-semibold mb-6 text-white">Challenges & Solutions</h2>
            <p className="text-[#fff8ee] leading-7 text-lg">
              {project.description || project.intro || 'No detailed description available.'}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-[#326d4a] px-6 md:px-24 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-white">Project Gallery</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <div key={i} className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={project.banner?.startsWith('http') ? project.banner : `${API_BASE_URL}/${project.banner}`}
                  alt={`Project Screenshot ${i}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  placeholder="blur"
                  blurDataURL={getBlurDataUrl()}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-6 md:px-24 py-20 bg-[#fff8ee] text-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8">Project Workflow</h2>
          <ol className="list-decimal space-y-3 pl-6 text-lg max-w-3xl">
            <li>Understanding client needs and goals</li>
            <li>Initial design concepts & wireframing</li>
            <li>Responsive development with Tailwind CSS</li>
            <li>Adding interactive animations with GSAP</li>
            <li>Final delivery and ongoing support</li>
          </ol>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-24 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Want a similar project?</h2>
          <p className="text-xl text-gray-400 mb-8">Let’s bring your vision to life.</p>
          <Link
            href="/discovery"
            className="inline-flex items-center gap-2 bg-[#1C422B] text-white hover:bg-white hover:text-[#1C422B] transition-all duration-300 rounded-2xl px-8 py-4 text-lg font-semibold shadow-lg"
          >
            Request a Discovery Call
          </Link>
        </div>
      </section>

      {/* Back Button */}
      <div className="px-6 md:px-24 py-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-[#245336] transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Projects
        </Link>
      </div>
    </div>
  );
}