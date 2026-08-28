export const SITE_URL = "https://trust-ence.com";
export const SITE_NAME = "Trustence";
export const DEFAULT_DESCRIPTION =
  "Trustence designs and develops fast, accessible, search-ready websites and digital experiences for ambitious businesses.";

export const socialProfiles = [
  "https://www.linkedin.com/in/trustence-agency-b13a9038a",
  "https://www.instagram.com/trustence.official/",
  "https://t.me/Real_MoOorGan",
];

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

export function createMetadata({ title, description = DEFAULT_DESCRIPTION, path = "/", noIndex = false }) {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const url = absoluteUrl(path);

  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      images: [{ url: absoluteUrl("/opengraph-image"), width: 1200, height: 630, alt: `${SITE_NAME} web design and development agency` }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
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
    "User experience design",
    "Technical SEO",
    "Website performance optimization",
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

export function webPageSchema({ name, description, path, type = "WebPage" }) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    inLanguage: "en",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
  };
}
