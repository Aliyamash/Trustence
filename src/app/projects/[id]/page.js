import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { cache } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, ExternalLink, Sparkles } from "lucide-react";
import { getFetch, resolveMediaUrl } from "@/utils/fetch";
import StructuredData from "@/components/StructuredData";
import { absoluteUrl, breadcrumbSchema, createMetadata, SITE_URL } from "@/utils/seo";

const getProject = cache(async (id) => {
  try {
    const response = await getFetch(`/projects/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching project:", error);
    return null;
  }
});

function projectMedia(source) {
  if (!source || typeof source !== "string" || source.startsWith("http")) return source;
  return resolveMediaUrl(source);
}

function galleryFor(project) {
  const banner = projectMedia(project.banner);
  const gallery = Array.isArray(project.gallery) ? project.gallery : [];
  const seen = new Set([banner]);

  return gallery
    .map((image) => ({
      path: projectMedia(typeof image === "string" ? image : image.path || image.image),
      alt: typeof image === "string" ? "" : image.alt_text || "",
      id: typeof image === "string" ? image : image.id,
    }))
    .filter((image) => image.path && !seen.has(image.path) && seen.add(image.path));
}

function BrowserFrame({ source, alt, priority = false, featured = false }) {
  return (
    <div className={`relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0b1811] shadow-2xl shadow-black/25 ${featured ? "aspect-[4/3] md:aspect-[16/10]" : "aspect-[4/3]"}`}>
      <Image src={source} alt="" aria-hidden="true" fill sizes="100vw" className="scale-110 object-cover opacity-30 blur-2xl" />
      <div className="absolute inset-0 bg-[#07120c]/25" />
      <div className="absolute inset-x-3 bottom-3 top-12 overflow-hidden rounded-b-xl border border-white/10 bg-[#07120c]/60 md:inset-x-5 md:bottom-5 md:top-14">
        <Image src={source} alt={alt} fill priority={priority} sizes={featured ? "(max-width: 1024px) 100vw, 62vw" : "(max-width: 768px) 100vw, 45vw"} className="object-contain object-center transition duration-700 group-hover:scale-[1.02]" />
      </div>
      <div className="absolute inset-x-0 top-0 flex h-12 items-center justify-between border-b border-white/10 bg-[#0a120d]/90 px-4 backdrop-blur-xl md:h-14 md:px-5">
        <div className="flex gap-1.5" aria-hidden="true"><span className="h-2 w-2 rounded-full bg-[#cba792]" /><span className="h-2 w-2 rounded-full bg-[#86a58f]" /><span className="h-2 w-2 rounded-full bg-white/25" /></div>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[9px] uppercase tracking-[.18em] text-white/40">Trustence case study</span>
        <ExternalLink className="h-3.5 w-3.5 text-white/35" />
      </div>
    </div>
  );
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = await getProject(id);

  if (!project) return { title: "Project Not Found", robots: { index: false, follow: false } };

  const title = project.title || "Project";
  const description = project.description || project.intro || `A Trustence project: ${title}.`;
  const image = project.banner ? projectMedia(project.banner) : undefined;
  const metadata = createMetadata({ title, description, path: `/projects/${id}` });

  return {
    ...metadata,
    openGraph: { ...metadata.openGraph, type: "article", images: image ? [{ url: image, alt: title }] : [] },
  };
}

export default async function SoloProjectPage({ params }) {
  const { id } = await params;
  if (!id || Number.isNaN(Number(id))) notFound();

  const project = await getProject(id);
  if (!project) notFound();

  const banner = projectMedia(project.banner);
  const gallery = galleryFor(project);
  const description = project.description || project.intro || "No detailed description is available for this project yet.";
  const tags = typeof project.tags === "string" ? project.tags.split(",").map((tag) => tag.trim()).filter(Boolean) : [];
  const category = project.category_name || project.category || "Digital project";
  const externalUrl = project.link || project.project_url;
  const projectUrl = `/projects/${id}`;
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${absoluteUrl(projectUrl)}#project`,
    name: project.title,
    description,
    url: absoluteUrl(projectUrl),
    image: [banner, ...gallery.map((image) => image.path)].filter(Boolean),
    keywords: tags.length ? tags.join(", ") : undefined,
    genre: category,
    creator: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntityOfPage: absoluteUrl(projectUrl),
    sameAs: externalUrl || undefined,
  };

  return (
    <>
      <StructuredData data={[
        breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Projects", path: "/projects" }, { name: project.title, path: projectUrl }]),
        projectSchema,
      ]} />

      <article className="overflow-hidden bg-[#07120c] text-[#fff8ee]">
        <section className="relative border-b border-white/10 px-5 pb-20 pt-36 md:px-10 md:pb-28 md:pt-48">
          <div className="pointer-events-none absolute inset-0 opacity-70" style={{ backgroundImage: "radial-gradient(circle at 14% 15%, rgba(101,134,114,.37), transparent 31%), radial-gradient(circle at 84% 25%, rgba(203,167,146,.17), transparent 25%)" }} />
          <div className="relative mx-auto max-w-7xl">
            <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-white/55 transition hover:text-[#cba792]"><ArrowLeft className="h-4 w-4" /> Back to selected work</Link>
            <div className="mt-10 grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
              <div>
                <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#cba792]/30 bg-[#cba792]/10 px-4 py-2 text-xs font-bold uppercase tracking-[.2em] text-[#e6c9b6]"><Sparkles className="h-4 w-4" /> {category}</p>
                <h1 className="title max-w-3xl text-4xl font-semibold leading-[1.06] md:text-6xl">{project.title}</h1>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65">{project.intro}</p>
                <div className="mt-9 flex flex-wrap gap-3">
                  {externalUrl && <a href={externalUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-xl bg-[#fff8ee] px-5 py-3.5 font-semibold text-[#07120c] transition hover:-translate-y-0.5 hover:bg-white">Experience the live project <ArrowUpRight className="h-4 w-4" /></a>}
                  <a href="#project-overview" className="inline-flex items-center gap-3 rounded-xl border border-white/15 px-5 py-3.5 font-semibold text-white/70 transition hover:border-[#86a58f] hover:text-white">Read the case study <ArrowRight className="h-4 w-4" /></a>
                </div>
              </div>
              <div className="group"><BrowserFrame source={banner} alt={`${project.title} project preview`} priority featured /></div>
            </div>
          </div>
        </section>

        <section id="project-overview" className="bg-[#fff8ee] px-5 py-20 text-[#07120c] md:px-10 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.72fr_1.28fr]">
            <aside className="rounded-[2rem] bg-[#0c1e14] p-7 text-[#fff8ee] md:p-9">
              <p className="text-xs font-bold uppercase tracking-[.22em] text-[#cba792]">Project snapshot</p>
              <dl className="mt-9 space-y-6">
                <div><dt className="text-xs uppercase tracking-[.15em] text-white/40">Category</dt><dd className="mt-2 text-lg font-semibold">{category}</dd></div>
                <div><dt className="text-xs uppercase tracking-[.15em] text-white/40">Capability</dt><dd className="mt-2 text-lg font-semibold">{tags.length ? tags.join(" · ") : "Digital strategy · Design · Development"}</dd></div>
                <div><dt className="text-xs uppercase tracking-[.15em] text-white/40">Delivery</dt><dd className="mt-2 text-lg font-semibold">Strategy, design, engineering, and considered launch support</dd></div>
              </dl>
            </aside>
            <div className="rounded-[2rem] border border-[#07120c]/10 bg-white/55 p-7 md:p-11">
              <p className="text-xs font-bold uppercase tracking-[.22em] text-[#245336]">The brief and direction</p>
              <h2 className="title mt-5 max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">A digital experience designed around a real operational need.</h2>
              <p className="mt-7 max-w-3xl whitespace-pre-line text-lg leading-8 text-[#07120c]/65">{description}</p>
              {tags.length > 0 && <ul className="mt-9 flex flex-wrap gap-2" aria-label="Project capabilities">{tags.map((tag) => <li key={tag} className="rounded-full border border-[#245336]/15 bg-[#e9efe8] px-3 py-2 text-xs font-semibold text-[#245336]">{tag}</li>)}</ul>}
            </div>
          </div>
        </section>

        {gallery.length > 0 && (
          <section className="px-5 py-20 md:px-10 md:py-28" aria-labelledby="gallery-title">
            <div className="mx-auto max-w-7xl">
              <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="mb-4 text-xs font-bold uppercase tracking-[.22em] text-[#cba792]">Inside the project</p><h2 id="gallery-title" className="title text-4xl font-semibold leading-tight md:text-6xl">A closer look at the details.</h2></div><p className="max-w-md leading-7 text-white/55">Additional project visuals selected and managed from the Trustence content studio.</p></div>
              <div className="grid gap-5 md:grid-cols-2">{gallery.map((image, index) => <div key={image.id || image.path} className={`group ${index === 0 && gallery.length % 2 === 1 ? "md:col-span-2" : ""}`}><BrowserFrame source={image.path} alt={image.alt || `${project.title} project visual ${index + 1}`} featured={index === 0 && gallery.length % 2 === 1} /></div>)}</div>
            </div>
          </section>
        )}

        <section className="border-y border-white/10 bg-[#0a1710] px-5 py-20 md:px-10 md:py-28" aria-labelledby="process-title">
          <div className="mx-auto max-w-7xl"><div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]"><div><p className="mb-4 text-xs font-bold uppercase tracking-[.22em] text-[#cba792]">How the work comes together</p><h2 id="process-title" className="title text-4xl font-semibold leading-tight md:text-6xl">A considered path from brief to launch.</h2></div><ol className="grid gap-3 sm:grid-cols-2">{[["01", "Clarify", "Define the objective, audience, and constraints."], ["02", "Shape", "Set the experience, content, and visual direction."], ["03", "Engineer", "Build the responsive system and required integrations."], ["04", "Refine", "Test the essential flows, details, and technical foundations."], ["05", "Launch", "Hand over with clear ownership and a practical next step."]].map(([number, title, detail]) => <li key={number} className="rounded-2xl border border-white/10 bg-white/[.035] p-5"><span className="font-mono text-xs text-[#86a58f]">{number}</span><h3 className="mt-6 text-lg font-bold">{title}</h3><p className="mt-2 leading-7 text-white/50">{detail}</p></li>)}</ol></div></div>
        </section>

        <section className="bg-[#fff8ee] px-5 py-20 text-[#07120c] md:px-10 md:py-28">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-9 md:flex-row md:items-end"><div><p className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.22em] text-[#245336]"><Check className="h-4 w-4" /> Your project could be next</p><h2 className="title max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">Let’s create something your organisation is proud to own.</h2></div><Link href="/discovery" className="inline-flex w-fit shrink-0 items-center gap-3 rounded-2xl bg-[#114422] px-6 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-[#07120c]">Discuss your project <ArrowUpRight className="h-5 w-5" /></Link></div>
        </section>
      </article>
    </>
  );
}
