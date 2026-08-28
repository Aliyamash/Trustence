import { getProjects } from "@/utils/content";
import { SITE_URL } from "@/utils/seo";

export const revalidate = 3600;

export default async function sitemap() {
  const pages = [
    ["/", "weekly", 1],
    ["/service", "monthly", 0.9],
    ["/projects", "weekly", 0.9],
    ["/aboutus", "monthly", 0.8],
    ["/contact", "monthly", 0.8],
    ["/discovery", "monthly", 0.8],
    ["/faqs", "monthly", 0.6],
    ["/privacy", "yearly", 0.3],
    ["/terms", "yearly", 0.3],
    ["/copyright", "yearly", 0.2],
  ];

  const staticPages = pages.map(([path, changeFrequency, priority]) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency,
    priority,
  }));

  const projects = await getProjects();
  const projectPages = projects.map((project) => ({
    url: `${SITE_URL}/projects/${project.id}`,
    lastModified: project.updated_at || project.created_at || undefined,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...projectPages];
}
