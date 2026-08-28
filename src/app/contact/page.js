import ContactHero from "@/components/pages/contactUs/ContactHero";
import DiscoverContact from "@/components/pages/contactUs/Discovery";
import FormContact from "@/components/pages/contactUs/Form";
import WhyUS from "@/components/pages/contactUs/WhyUs";
import StructuredData from "@/components/StructuredData";
import { breadcrumbSchema, createMetadata, webPageSchema } from "@/utils/seo";

const description = "Contact Trustence to discuss your next website, digital product, redesign, or technical SEO project.";
export const metadata = createMetadata({ title: "Contact Trustence", description, path: "/contact" });

export default function ContactUs(){
    return(
        <>
        <StructuredData data={[
          webPageSchema({ name: "Contact Trustence", description, path: "/contact", type: "ContactPage" }),
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]),
        ]} />
        <ContactHero/>
        <WhyUS/>
        <FormContact/>
        <DiscoverContact/>
        </>
    )
}
