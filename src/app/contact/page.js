import ContactHero from "@/components/pages/contactUs/ContactHero";
import DiscoverContact from "@/components/pages/contactUs/Discovery";
import FormContact from "@/components/pages/contactUs/Form";
import WhyUS from "@/components/pages/contactUs/WhyUs";
import StructuredData from "@/components/StructuredData";
import { breadcrumbSchema, createMetadata, webPageSchema } from "@/utils/seo";
import { getServerLocale } from "@/i18n/server";

const description = "Contact Trustence to discuss a bespoke website, custom platform, n8n automation, digital redesign, technical SEO, or long-term digital partnership.";
export async function generateMetadata() {
    const locale = await getServerLocale();
    return createMetadata({ title: locale === "fa" ? "درباره پروژه دیجیتال خود با ما گفت‌وگو کنید" : "Discuss Your Digital Project", description: locale === "fa" ? "برای طراحی وب‌سایت اختصاصی، پلتفرم سفارشی، اتوماسیون n8n، بازطراحی دیجیتال یا سئوی فنی با تراستنس گفت‌وگو کنید." : description, path: "/contact", locale });
}

export default async function ContactUs(){
    const locale = await getServerLocale();
    const fa = locale === "fa";
    const pageDescription = fa ? "برای طراحی وب‌سایت اختصاصی، پلتفرم سفارشی، اتوماسیون n8n، بازطراحی دیجیتال یا سئوی فنی با تراستنس گفت‌وگو کنید." : description;
    return(
        <>
        <StructuredData data={[
          webPageSchema({ name: fa ? "گفت‌وگو درباره پروژه دیجیتال با تراستنس" : "Discuss a digital project with Trustence", description: pageDescription, path: "/contact", type: "ContactPage", locale }),
          breadcrumbSchema([{ name: fa ? "خانه" : "Home", path: "/" }, { name: fa ? "تماس" : "Contact", path: "/contact" }]),
        ]} />
        <ContactHero/>
        <WhyUS/>
        <FormContact/>
        <DiscoverContact/>
        </>
    )
}
