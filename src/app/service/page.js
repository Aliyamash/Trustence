import ServicesExperience from "@/components/pages/service/ServicesExperience";
import StructuredData from "@/components/StructuredData";
import { serviceFaqs, services } from "@/data/services";
import { breadcrumbSchema, createMetadata, SITE_URL, webPageSchema } from "@/utils/seo";

const description = "Explore bespoke Trustence services for digital strategy, UX, web and software development, n8n automation, API integrations, SEO, brand design, marketing, and visual content.";
export const metadata = createMetadata({ title: "Bespoke Digital Services & n8n Automation", description, path: "/service" });

export default function ServicePage() {
  return (
    <>
      <StructuredData data={[
        webPageSchema({ name: "Trustence digital services and automation", description, path: "/service" }),
        breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/service" }]),
        {
          "@context": "https://schema.org", "@type": "Service",
          name: "Digital design, development, and automation services",
          serviceType: "Digital strategy, UX design, web development, n8n automation, SEO, branding, marketing, and visual content",
          description, url: `${SITE_URL}/service`, areaServed: "Worldwide",
          provider: { "@id": `${SITE_URL}/#organization` },
          audience: { "@type": "BusinessAudience", audienceType: "Businesses and organisations" },
          hasOfferCatalog: {
            "@type": "OfferCatalog", name: "Digital services",
            itemListElement: services.map(({ title, description: serviceDescription }) => ({
              "@type": "Offer", itemOffered: { "@type": "Service", name: title, description: serviceDescription },
            })),
          },
        },
        {
          "@context": "https://schema.org", "@type": "FAQPage",
          mainEntity: serviceFaqs.map(({ question, answer }) => ({
            "@type": "Question", name: question,
            acceptedAnswer: { "@type": "Answer", text: answer },
          })),
        },
      ]} />
      <ServicesExperience />
    </>
  );
}
