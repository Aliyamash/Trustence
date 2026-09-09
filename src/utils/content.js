import { projects as fallbackProjects } from "@/data/projects";
import { team as fallbackTeam } from "@/data/team";
import { getFetch, resolveMediaUrl } from "./fetch";

const projectFa = {
  "Animated Portfolio Website": { title: "وب‌سایت پورتفولیوی متحرک", category_name: "طراحی وب / پورتفولیو", intro: "یک تجربه سینمایی برای نمایش حرفه‌ای آثار، با حرکت‌های سنجیده و هویتی بصری که در ذهن می‌ماند." },
  "Creative Portfolio & Shop Website": { title: "وب‌سایت خلاقانه پورتفولیو و فروشگاه", category_name: "پورتفولیو / تجارت الکترونیک / طراحی وب", intro: "تجربه‌ای یکپارچه برای روایت شخصی، نمایش آثار و فروش محصولات با هویتی متمایز و حرفه‌ای." },
};

function normalizeProject(project, locale) {
  const localized = locale === "fa" ? projectFa[project.title] : null;
  return {
    ...project,
    ...localized,
    category_name: localized?.category_name || project.category_name || project.category || (locale === "fa" ? "سایر" : "Other"),
    banner: typeof project.banner === "string" ? resolveMediaUrl(project.banner) : project.banner,
    link: project.link || project.project_url || "",
  };
}

const teamFa = {
  "Maziar Dehghani": ["مهندس نرم‌افزار", "ایده‌های بلندپروازانه را با تمرکز بر معماری تمیز، عملکرد و مالکیت آسان به نرم‌افزار قابل اتکا تبدیل می‌کند."],
  "Ali Ashrafi": ["مهندس نرم‌افزار", "مهندسی نرم‌افزار را با نگاه بصری قوی ترکیب می‌کند تا تجربه‌های وب متمایز، تعامل سنجیده و محصولات دیجیتال دقیق بسازد."],
  "Mohammad Shekarchian": ["متخصص بازاریابی", "با تحلیل مخاطب و داده‌های عملکرد، مسیر بازاریابی و کمپین‌هایی را شکل می‌دهد که ارتباط و حرکت تجاری برند را تقویت می‌کنند."],
  "Sina Norozi": ["دستیار بازاریابی", "با توجه دقیق به مخاطب و یکپارچگی، از اجرای کمپین و عملیات محتوا پشتیبانی می‌کند."],
  "Elias Kiloua": ["طراح گرافیک", "سیستم‌های بصری سنجیده‌ای می‌سازد که به ایده‌ها وضوح، شخصیت و حضوری منسجم می‌دهند."],
  "Arian Shahrestani": ["شریک راهبردی", "جهت‌گیری کسب‌وکار را به اجرا متصل می‌کند و به تیم برای ارزیابی فرصت‌ها و تصمیم‌گیری روشن کمک می‌کند."],
  "Javad Mostatabi": ["سازنده محتوای بصری", "تصاویر خام را با ریتم، صدا و تدوین دقیق به روایت‌های بصری حرفه‌ای و اثرگذار تبدیل می‌کند."],
};

function normalizeTeamMember(member, locale) {
  const localized = locale === "fa" ? teamFa[member.name] : null;
  return {
    ...member,
    position: localized?.[0] || member.position,
    bio: localized?.[1] || member.bio,
    image: typeof (member.profile || member.image) === "string"
      ? resolveMediaUrl(member.profile || member.image)
      : member.image,
  };
}

export async function getProjects(limit, locale = "en") {
  try {
    const endpoint = limit ? `/last-projects/${limit}` : "/projects";
    const response = await getFetch(endpoint, { cache: "force-cache", next: { revalidate: 300 }, timeout: 3000 });
    if (Array.isArray(response.data) && response.data.length) return response.data.map((project) => normalizeProject(project, locale));
  } catch (error) {
    console.warn("Using local project fallback:", error.message);
  }
  return fallbackProjects.slice(0, limit || fallbackProjects.length).map((project) => normalizeProject(project, locale));
}

export async function getTeamMembers(locale = "en") {
  try {
    const response = await getFetch("/our-team", { cache: "force-cache", next: { revalidate: 300 }, timeout: 3000 });
    if (Array.isArray(response.data) && response.data.length) return response.data.map((member) => normalizeTeamMember(member, locale));
  } catch (error) {
    console.warn("Using local team fallback:", error.message);
  }
  return fallbackTeam.map((member) => normalizeTeamMember(member, locale));
}
