// app/projects/[id]/page.js
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getBlurDataUrl } from '@/utils/helper';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getFetch, resolveMediaUrl } from '@/utils/fetch';
import { cache } from 'react';
import StructuredData from '@/components/StructuredData';
import { absoluteUrl, breadcrumbSchema, createMetadata, SITE_URL } from '@/utils/seo';

const getProject = cache(async (id) => {
  try {
    const response = await getFetch(`/projects/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching project:', error);
    return null;
  }
});

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = await getProject(id);

  if (!project) {
    return { title: "Project Not Found", robots: { index: false, follow: false } };
  }

  const title = project.title || "Project";
  const description = project.description || project.intro || `A Trustence project: ${title}.`;
  const image = project.banner ? resolveMediaUrl(project.banner) : undefined;

  const metadata = createMetadata({ title, description, path: `/projects/${id}` });

  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      type: "article",
      images: image ? [{ url: image, alt: title }] : [],
    },
  };
}

export default async function SoloProjectPage({ params }) {
  const { id } = await params;

  // چک کن id معتبر باشه
  if (!id || isNaN(id)) {
    notFound();
  }

  const project = await getProject(id);

  // اگر پروژه پیدا نشد → 404
  if (!project) {
    notFound();
  }

  const description = project.description || project.intro || `A Trustence project: ${project.title}.`;
  const tags = typeof project.tags === "string" ? project.tags.split(",").map((tag) => tag.trim()).filter(Boolean) : [];
  const projectUrl = `/projects/${id}`;
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${absoluteUrl(projectUrl)}#project`,
    name: project.title,
    description,
    url: absoluteUrl(projectUrl),
    image: project.banner ? resolveMediaUrl(project.banner) : undefined,
    keywords: tags.length ? tags.join(", ") : undefined,
    genre: project.category_name || project.category || undefined,
    creator: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntityOfPage: absoluteUrl(projectUrl),
    sameAs: project.link || project.project_url || undefined,
  };

  return (
    <>
    <StructuredData data={[
      breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Projects", path: "/projects" }, { name: project.title, path: projectUrl }]),
      projectSchema,
    ]} />
    <article className="bg-[#060e09] text-white">

      {/* Hero Section */}
      <section className="px-6 md:px-24 py-24 bg-[#326d4a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#114422] to-[#245336] bg-clip-text text-transparent">
            {project.title}
          </h1>
          <p className="text-lg md:text-xl text-[#fff8ee] mb-8 max-w-3xl mx-auto">
            {project.intro}
          </p>
          {(project.link || project.project_url) && (
            <Link
              href={project.link || project.project_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#114422] rounded-2xl px-6 py-3 text-base font-semibold hover:bg-[#245336] hover:text-white transition-all shadow-lg"
            >
              Experience the Live Project
            </Link>
          )}
        </div>
      </section>

      {/* Project Info */}
      <section className="bg-[#326d4a] px-6 md:px-24 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-semibold mb-6 text-white">The Engagement</h2>
            <ul className="space-y-3 text-[#fff8ee] text-lg">
              <li><strong>Category:</strong> {project.category_name || project.category || '—'}</li>
              <li><strong>Services:</strong> {tags.length ? tags.join(", ") : "Web design and development"}</li>
              <li><strong>Approach:</strong> Strategy, design, engineering, and considered launch support</li>
            </ul>
          </div>
          <div>
            <h2 className="text-4xl font-semibold mb-6 text-white">Challenge &amp; Direction</h2>
            <p className="text-[#fff8ee] leading-7 text-lg">
              {project.description || project.intro || 'No detailed description available.'}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-[#326d4a] px-6 md:px-24 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-white">A Closer Look</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <div key={i} className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={resolveMediaUrl(project.banner)}
                  alt={`${project.title} project screenshot ${i}`}
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
          <h2 className="text-3xl font-semibold mb-8">A Considered Delivery Process</h2>
          <ol className="list-decimal space-y-3 pl-6 text-lg max-w-3xl">
            <li>Clarifying the objective, audience, and constraints</li>
            <li>Defining the experience, content structure, and visual direction</li>
            <li>Engineering the responsive digital experience</li>
            <li>Refining interaction, performance, and technical foundations</li>
            <li>Launching with clear ownership and an agreed path forward</li>
          </ol>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-24 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Your project should feel unmistakably yours.</h2>
          <p className="text-xl text-gray-400 mb-8">Tell us what the next digital experience needs to achieve.</p>
          <Link
            href="/discovery"
            className="inline-flex items-center gap-2 bg-[#1C422B] text-white hover:bg-white hover:text-[#1C422B] transition-all duration-300 rounded-2xl px-8 py-4 text-lg font-semibold shadow-lg"
          >
            Discuss Your Project
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
    </article>
    </>
  );
}
