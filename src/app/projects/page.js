import Projects from "@/components/pages/projects/Projects";
import StructuredData from "@/components/StructuredData";
import { getProjects } from "@/utils/content";
import { absoluteUrl, breadcrumbSchema, createMetadata, webPageSchema } from "@/utils/seo";

const description = "Explore selected Trustence case studies across bespoke web design, software development, digital products, and distinctive online experiences.";
export const metadata = createMetadata({ title: "Selected Digital Work & Case Studies", description, path: "/projects" });
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
      webPageSchema({ name: "Selected Trustence digital work and case studies", description, path: "/projects", type: "CollectionPage" }),
      breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Projects", path: "/projects" }]),
      projectListSchema,
    ]} />
     <Projects initialProjects={serializableProjects}/>
    </>
  );
}
