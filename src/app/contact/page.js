import ContactHero from "@/components/pages/contactUs/ContactHero";
import DiscoverContact from "@/components/pages/contactUs/Discovery";
import FormContact from "@/components/pages/contactUs/Form";
import WhyUS from "@/components/pages/contactUs/WhyUs";
import StructuredData from "@/components/StructuredData";
import { breadcrumbSchema, createMetadata, webPageSchema } from "@/utils/seo";

const description = "Contact Trustence to discuss a bespoke website, custom platform, n8n automation, digital redesign, technical SEO, or long-term digital partnership.";
export const metadata = createMetadata({ title: "Discuss Your Digital Project", description, path: "/contact" });

export default function ContactUs(){
    return(
        <>
        <StructuredData data={[
          webPageSchema({ name: "Discuss a digital project with Trustence", description, path: "/contact", type: "ContactPage" }),
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]),
        ]} />
        <ContactHero/>
        <WhyUS/>
        <FormContact/>
        <DiscoverContact/>
        </>
    )
}
