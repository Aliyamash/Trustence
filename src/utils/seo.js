export const SITE_URL = "https://trust-ence.com";
export const SITE_NAME = "Trustence";
export const SITE_PUBLISHED_DATE = "2025-08-25";
export const CONTENT_LAST_MODIFIED = "2026-09-28";
export const DEFAULT_DESCRIPTION =
  "Trustence is a boutique digital studio creating bespoke websites, custom platforms, intelligent automations, and search-ready digital experiences for ambitious businesses.";
export const DEFAULT_DESCRIPTION_FA =
  "تراستنس یک استودیوی دیجیتال بوتیک برای طراحی وب‌سایت اختصاصی، پلتفرم سفارشی، اتوماسیون هوشمند و تجربه‌های دیجیتال آماده رشد است.";

export const socialProfiles = [
  "https://www.linkedin.com/in/trustence-agency-b13a9038a",
  "https://www.instagram.com/trustence.official/",
  "https://t.me/Real_MoOorGan",
];

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

export function schemaDate(value, fallback = CONTENT_LAST_MODIFIED) {
  if (!value) return fallback;
  const dateOnly = String(value).match(/^\d{4}-\d{2}-\d{2}/)?.[0];
  if (dateOnly) return dateOnly;

  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? fallback : date.toISOString();
}

export function createMetadata({ title, description, path = "/", noIndex = false, locale = "en" }) {
  const isFa = locale === "fa";
  const resolvedDescription = description || (isFa ? DEFAULT_DESCRIPTION_FA : DEFAULT_DESCRIPTION);
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const url = absoluteUrl(path);

  return {
    title: { absolute: fullTitle },
    description: resolvedDescription,
    alternates: { canonical: url },
    other: { "last-modified": CONTENT_LAST_MODIFIED },
    openGraph: {
      type: "website",
      locale: isFa ? "fa_IR" : "en_US",
      alternateLocale: isFa ? ["en_US"] : ["fa_IR"],
      url,
      siteName: SITE_NAME,
      title: fullTitle,
      description: resolvedDescription,
      images: [{ url: absoluteUrl("/opengraph-image"), width: 1200, height: 630, alt: isFa ? "استودیوی دیجیتال تراستنس برای وب، نرم‌افزار و اتوماسیون" : `${SITE_NAME} boutique digital studio for web, software and automation` }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: resolvedDescription,
      images: [absoluteUrl("/opengraph-image")],
    },
    robots: noIndex
      ? { index: false, follow: false, googleBot: { index: false, follow: false } }
      : { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: "Trustence Agency",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: absoluteUrl("/android-chrome-512x512.png"),
    width: 512,
    height: 512,
  },
  image: absoluteUrl("/opengraph-image"),
  description: DEFAULT_DESCRIPTION,
  email: "trustenceagency@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Einigen",
    addressCountry: "CH",
  },
  areaServed: "Worldwide",
  knowsAbout: [
    "Web design",
    "Web development",
    "Custom software development",
    "User experience design",
    "n8n workflow automation",
    "API integration",
    "Technical SEO",
    "Website performance optimization",
    "Brand design",
    "Digital marketing",
  ],
  sameAs: socialProfiles,
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  alternateName: "Trustence Agency",
  description: DEFAULT_DESCRIPTION,
  inLanguage: "en",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function webPageSchema({ name, description, path, type = "WebPage", locale = "en" }) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    datePublished: SITE_PUBLISHED_DATE,
    dateModified: CONTENT_LAST_MODIFIED,
    inLanguage: locale === "fa" ? "fa-IR" : "en",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
  };
}
