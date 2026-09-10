import Projects from "@/components/pages/projects/Projects";
import StructuredData from "@/components/StructuredData";
import { getProjects } from "@/utils/content";
import { absoluteUrl, breadcrumbSchema, createMetadata, webPageSchema } from "@/utils/seo";
import { getServerLocale } from "@/i18n/server";

const description = "Explore selected Trustence case studies across bespoke web design, software development, digital products, and distinctive online experiences.";
export async function generateMetadata() {
  const locale = await getServerLocale();
  return createMetadata({ title: locale === "fa" ? "نمونه‌کارها و مطالعات موردی منتخب" : "Selected Digital Work & Case Studies", description: locale === "fa" ? "نمونه‌کارهای منتخب تراستنس در طراحی وب اختصاصی، توسعه نرم‌افزار، محصولات دیجیتال و تجربه‌های آنلاین متمایز را ببینید." : description, path: "/projects", locale });
}
export const revalidate = 300;

export default async function ProjectsPage() {
  const locale = await getServerLocale();
  const fa = locale === "fa";
  const pageDescription = fa ? "نمونه‌کارهای منتخب تراستنس در طراحی وب اختصاصی، توسعه نرم‌افزار، محصولات دیجیتال و تجربه‌های آنلاین متمایز را ببینید." : description;
  const projects = await getProjects(undefined, locale);
  const serializableProjects = projects.map((project) => ({
    ...project,
    banner: typeof project.banner === "string" ? project.banner : project.banner?.src,
  }));
  const projectListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: fa ? "پروژه‌های تراستنس" : "Trustence projects",
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
      webPageSchema({ name: fa ? "نمونه‌کارها و مطالعات موردی منتخب تراستنس" : "Selected Trustence digital work and case studies", description: pageDescription, path: "/projects", type: "CollectionPage", locale }),
      breadcrumbSchema([{ name: fa ? "خانه" : "Home", path: "/" }, { name: fa ? "نمونه‌کارها" : "Projects", path: "/projects" }]),
      projectListSchema,
    ]} />
     <Projects initialProjects={serializableProjects}/>
    </>
  );
}
