import { projects as fallbackProjects } from "@/data/projects";
import { team as fallbackTeam } from "@/data/team";
import { getFetch, resolveMediaUrl } from "./fetch";

const projectFa = {
  "Animated Portfolio Website": { title: "وب‌سایت پورتفولیوی متحرک", category_name: "طراحی وب / پورتفولیو", intro: "یک تجربه سینمایی برای نمایش حرفه‌ای آثار، با حرکت‌های سنجیده و هویتی بصری که در ذهن می‌ماند.", description: "پورتفولیویی تعاملی که با حرکت هدفمند، روایت بصری و اجرای فنی دقیق، آثار را به تجربه‌ای به‌یادماندنی تبدیل می‌کند." },
  "Creative Portfolio & Shop Website": { title: "وب‌سایت خلاقانه پورتفولیو و فروشگاه", category_name: "پورتفولیو / تجارت الکترونیک / طراحی وب", intro: "تجربه‌ای یکپارچه برای روایت شخصی، نمایش آثار و فروش محصولات با هویتی متمایز و حرفه‌ای.", description: "یک وب‌سایت ترکیبی که معرفی خلاقانه آثار را با مسیری ساده و منسجم برای کشف و خرید محصولات همراه می‌کند." },
};

const projectTermFa = new Map([
  ["Web Design", "طراحی وب"], ["Portfolio", "پورتفولیو"], ["E-commerce", "تجارت الکترونیک"],
  ["Web Development", "توسعه وب"], ["Software Development", "توسعه نرم‌افزار"], ["Branding", "برندینگ"],
  ["Automation", "اتوماسیون"], ["UI Design", "طراحی رابط کاربری"], ["UX Design", "طراحی تجربه کاربری"],
  ["Responsive Design", "طراحی واکنش‌گرا"], ["Digital Strategy", "راهبرد دیجیتال"], ["SEO", "سئو"],
]);

function localizeTerms(value) {
  if (!value || typeof value !== "string") return value;
  return value.split(/([,/·])/).map((part) => projectTermFa.get(part.trim()) || part.trim()).join(" ").replace(/\s+([,/·])\s+/g, " $1 ");
}

export function localizeProject(project, locale) {
  const localized = locale === "fa" ? projectFa[project.title] : null;
  return {
    ...project,
    ...localized,
    title: locale === "fa" ? (project.title_fa || localized?.title || project.title) : (project.title_en || project.title),
    intro: locale === "fa" ? (project.intro_fa || localized?.intro || project.intro) : (project.intro_en || project.intro),
    description: locale === "fa" ? (project.description_fa || localized?.description || project.description) : (project.description_en || project.description),
    category_name: locale === "fa"
      ? (project.category_name_fa || localized?.category_name || localizeTerms(project.category_name || project.category) || "سایر")
      : (project.category_name_en || project.category_name || project.category || "Other"),
    tags: locale === "fa" ? (project.tags_fa || localizeTerms(project.tags)) : (project.tags_en || project.tags),
    banner: typeof project.banner === "string" ? resolveMediaUrl(project.banner) : project.banner,
    link: project.link || project.project_url || "",
  };
}

const teamFa = {
  "Maziar Dehghani": ["مازیار دهقانی", "مهندس نرم‌افزار", "ایده‌های بلندپروازانه را با تمرکز بر معماری تمیز، عملکرد و مالکیت آسان به نرم‌افزار قابل اتکا تبدیل می‌کند."],
  "Ali Ashrafi": ["علی اشرفی", "مهندس نرم‌افزار", "مهندسی نرم‌افزار را با نگاه بصری قوی ترکیب می‌کند تا تجربه‌های وب متمایز، تعامل سنجیده و محصولات دیجیتال دقیق بسازد."],
  "Mohammad Shekarchian": ["محمد شکارچیان", "متخصص بازاریابی", "با تحلیل مخاطب و داده‌های عملکرد، مسیر بازاریابی و کمپین‌هایی را شکل می‌دهد که ارتباط و حرکت تجاری برند را تقویت می‌کنند."],
  "Sina Norozi": ["سینا نوروزی", "دستیار بازاریابی", "با توجه دقیق به مخاطب و یکپارچگی، از اجرای کمپین و عملیات محتوا پشتیبانی می‌کند."],
  "Elias Kiloua": ["الیاس کیلوا", "طراح گرافیک", "سیستم‌های بصری سنجیده‌ای می‌سازد که به ایده‌ها وضوح، شخصیت و حضوری منسجم می‌دهند."],
  "Arian Shahrestani": ["آرین شهرستانی", "شریک راهبردی", "جهت‌گیری کسب‌وکار را به اجرا متصل می‌کند و به تیم برای ارزیابی فرصت‌ها و تصمیم‌گیری روشن کمک می‌کند."],
  "Javad Mostatabi": ["جواد مستطابی", "سازنده محتوای بصری", "تصاویر خام را با ریتم، صدا و تدوین دقیق به روایت‌های بصری حرفه‌ای و اثرگذار تبدیل می‌کند."],
};

function normalizeTeamMember(member, locale) {
  const localized = locale === "fa" ? teamFa[member.name] : null;
  return {
    ...member,
    name: locale === "fa" ? (member.name_fa || localized?.[0] || member.name) : (member.name_en || member.name),
    position: locale === "fa" ? (member.position_fa || localized?.[1] || member.position) : (member.position_en || member.position),
    bio: locale === "fa" ? (member.bio_fa || localized?.[2] || member.bio) : (member.bio_en || member.bio),
    image: typeof (member.profile || member.image) === "string"
      ? resolveMediaUrl(member.profile || member.image)
      : member.image,
  };
}

export async function getProjects(limit, locale = "en", fetchOptions = {}) {
  try {
    const endpoint = limit ? `/last-projects/${limit}` : "/projects";
    const response = await getFetch(endpoint, { cache: "no-store", timeout: 3000, ...fetchOptions });
    if (Array.isArray(response.data) && response.data.length) return response.data.map((project) => localizeProject(project, locale));
  } catch (error) {
    console.warn("Using local project fallback:", error.message);
  }
  return fallbackProjects.slice(0, limit || fallbackProjects.length).map((project) => localizeProject(project, locale));
}

export async function getTeamMembers(locale = "en") {
  try {
    const response = await getFetch("/our-team", { cache: "no-store", timeout: 3000 });
    if (Array.isArray(response.data) && response.data.length) return response.data.map((member) => normalizeTeamMember(member, locale));
  } catch (error) {
    console.warn("Using local team fallback:", error.message);
  }
  return fallbackTeam.map((member) => normalizeTeamMember(member, locale));
}
