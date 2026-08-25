export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/admin/"],
    },
    sitemap: "https://trust-ence.com/sitemap.xml",
    host: "https://trust-ence.com",
  };
}
