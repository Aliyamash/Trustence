import Projects from "@/components/pages/projects/Projects";
import StructuredData from "@/components/StructuredData";
import { getProjects } from "@/utils/content";
import { absoluteUrl, breadcrumbSchema, createMetadata, webPageSchema } from "@/utils/seo";

const description = "Explore selected Trustence web design and development case studies, project goals, technologies, and outcomes.";
export const metadata = createMetadata({ title: "Web Design & Development Projects", description, path: "/projects" });
export const revalidate = 300;

export default async function ProjectsPage() {
  const projects = await getProjects();
  const serializableProjects = projects.map((project) => ({
    ...project,
    banner: typeof project.banner === "string" ? project.banner : project.banner?.src,
  }));
  const projectListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Trustence projects",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(`/projects/${project.id}`),
      name: project.title,
    })),
  };

  return (
    <>
    <StructuredData data={[
      webPageSchema({ name: "Trustence web design and development projects", description, path: "/projects", type: "CollectionPage" }),
      breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Projects", path: "/projects" }]),
      projectListSchema,
    ]} />
    <div className="container pt-64">
        <h1 className="title text-5xl font-bold text-center mb-6">Web Design &amp; Development Projects</h1>
        <p className="text-xl font-bold text-center ">Strategic design, real-world impact, and partnerships built on clarity, care, and confidence.</p>
    </div>
     <Projects initialProjects={serializableProjects}/>
    </>
  );
}
