import ApproachService from "@/components/pages/service/ApproachService";
import CoreService from "@/components/pages/service/CoreService";
import DiscoveryForm from "@/components/pages/service/DiscoverForm";
import FAQ from "@/components/pages/service/FAQ";
import PremiumService from "@/components/pages/service/PremiumSection";
import ServiceProView from "@/components/pages/service/ServiceProView";
import WelcomeService from "@/components/pages/service/WelcomeService";
import WhyUs from "@/components/pages/service/WhyUs";
import ProcessTimeline from "@/components/pages/service/WorkProcess";
import Portfilio from "@/components/Portfolio";
import StructuredData from "@/components/StructuredData";
import { breadcrumbSchema, createMetadata, SITE_URL, webPageSchema } from "@/utils/seo";

const description = "Explore Trustence services: strategy, UX, responsive web design, development, technical SEO, performance optimization, and ongoing support.";
export const metadata = createMetadata({ title: "Web Design, Development & Digital Services", description, path: "/service" });

export default function service(){
    return(
        <>
        <StructuredData data={[
            webPageSchema({ name: "Trustence web design and development services", description, path: "/service" }),
            breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/service" }]),
            {
                "@context": "https://schema.org",
                "@type": "Service",
                name: "Web design and development services",
                serviceType: "Website strategy, UX design, web development, technical SEO, and support",
                description,
                url: `${SITE_URL}/service`,
                areaServed: "Worldwide",
                provider: { "@id": `${SITE_URL}/#organization` },
                audience: { "@type": "BusinessAudience", audienceType: "Businesses and organizations" },
                hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Digital services",
                    itemListElement: ["Website strategy and UX", "Responsive web design", "Web development", "Technical SEO", "Performance optimization", "Ongoing support"].map((name) => ({
                        "@type": "Offer",
                        itemOffered: { "@type": "Service", name },
                    })),
                },
            },
        ]} />
        <WelcomeService/>
        <ApproachService/>
        <WhyUs/>
        <ServiceProView/>
        <CoreService/>
        <PremiumService/>
        <ProcessTimeline/>
        <Portfilio/>
        <FAQ/>
        <DiscoveryForm/>
        </>
    )
}
