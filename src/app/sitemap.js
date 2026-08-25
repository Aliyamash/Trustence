const siteUrl = "https://trust-ence.com";

export default function sitemap() {
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

  return pages.map(([path, changeFrequency, priority]) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
