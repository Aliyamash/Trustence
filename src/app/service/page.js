import ServicesExperience from "@/components/pages/service/ServicesExperience";
import StructuredData from "@/components/StructuredData";
import { getServiceFaqs, getServices } from "@/data/services";
import { breadcrumbSchema, createMetadata, SITE_URL, webPageSchema } from "@/utils/seo";
import { getServerLocale } from "@/i18n/server";

const description = "Explore bespoke Trustence services for digital strategy, UX, web and software development, n8n automation, API integrations, SEO, brand design, marketing, and visual content.";
export async function generateMetadata() {
  const locale = await getServerLocale();
  return createMetadata({ title: locale === "fa" ? "خدمات دیجیتال اختصاصی و اتوماسیون n8n" : "Bespoke Digital Services & n8n Automation", description: locale === "fa" ? "خدمات تراستنس در راهبرد دیجیتال، تجربه کاربری، توسعه وب و نرم‌افزار، اتوماسیون n8n، اتصال API، سئو، برند و بازاریابی را ببینید." : description, path: "/service", locale });
}

export default async function ServicePage() {
  const locale = await getServerLocale();
  const fa = locale === "fa";
  const localizedServices = getServices(locale);
  const localizedFaqs = getServiceFaqs(locale);
  const pageDescription = fa ? "خدمات تراستنس در راهبرد دیجیتال، تجربه کاربری، توسعه وب و نرم‌افزار، اتوماسیون n8n، اتصال API، سئو، برند و بازاریابی را ببینید." : description;
  return (
    <>
      <StructuredData data={[
        webPageSchema({ name: fa ? "خدمات دیجیتال و اتوماسیون تراستنس" : "Trustence digital services and automation", description: pageDescription, path: "/service", locale }),
        breadcrumbSchema([{ name: fa ? "خانه" : "Home", path: "/" }, { name: fa ? "خدمات" : "Services", path: "/service" }]),
        {
          "@context": "https://schema.org", "@type": "Service",
          name: fa ? "خدمات طراحی، توسعه و اتوماسیون دیجیتال" : "Digital design, development, and automation services",
          serviceType: fa ? "راهبرد دیجیتال، طراحی تجربه کاربری، توسعه وب، اتوماسیون n8n، سئو، برندینگ، بازاریابی و محتوای بصری" : "Digital strategy, UX design, web development, n8n automation, SEO, branding, marketing, and visual content",
          description: pageDescription, url: `${SITE_URL}/service`, areaServed: fa ? "سراسر جهان" : "Worldwide",
          provider: { "@id": `${SITE_URL}/#organization` },
          audience: { "@type": "BusinessAudience", audienceType: fa ? "کسب‌وکارها و سازمان‌ها" : "Businesses and organisations" },
          hasOfferCatalog: {
            "@type": "OfferCatalog", name: fa ? "خدمات دیجیتال" : "Digital services",
            itemListElement: localizedServices.map(({ title, description: serviceDescription }) => ({
              "@type": "Offer", itemOffered: { "@type": "Service", name: title, description: serviceDescription },
            })),
          },
        },
        {
          "@context": "https://schema.org", "@type": "FAQPage",
          mainEntity: localizedFaqs.map(({ question, answer }) => ({
            "@type": "Question", name: question,
            acceptedAnswer: { "@type": "Answer", text: answer },
          })),
        },
      ]} />
      <ServicesExperience />
    </>
  );
}
