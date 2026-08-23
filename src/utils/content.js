import { projects as fallbackProjects } from "@/data/projects";
import { team as fallbackTeam } from "@/data/team";
import { getFetch, resolveMediaUrl } from "./fetch";

function normalizeProject(project) {
  return {
    ...project,
    category_name: project.category_name || project.category || "Other",
    banner: typeof project.banner === "string" ? resolveMediaUrl(project.banner) : project.banner,
    link: project.link || project.project_url || "",
  };
}

function normalizeTeamMember(member) {
  return {
    ...member,
    image: typeof (member.profile || member.image) === "string"
      ? resolveMediaUrl(member.profile || member.image)
      : member.image,
  };
}

export async function getProjects(limit) {
  try {
    const endpoint = limit ? `/last-projects/${limit}` : "/projects";
    const response = await getFetch(endpoint, { cache: "force-cache", next: { revalidate: 300 }, timeout: 3000 });
    if (Array.isArray(response.data) && response.data.length) return response.data.map(normalizeProject);
  } catch (error) {
    console.warn("Using local project fallback:", error.message);
  }
  return fallbackProjects.slice(0, limit || fallbackProjects.length).map(normalizeProject);
}

export async function getTeamMembers() {
  try {
    const response = await getFetch("/our-team", { cache: "force-cache", next: { revalidate: 300 }, timeout: 3000 });
    if (Array.isArray(response.data) && response.data.length) return response.data.map(normalizeTeamMember);
  } catch (error) {
    console.warn("Using local team fallback:", error.message);
  }
  return fallbackTeam.map(normalizeTeamMember);
}
