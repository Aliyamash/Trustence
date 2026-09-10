import Discover from "@/components/Discover";
import ContactUs from "@/components/pages/aboutUs/ContactUs";
import Form from "@/components/pages/aboutUs/ContactUs";
import DiscoverAbout from "@/components/pages/aboutUs/DiscoverAbout";
import HeadAbout from "@/components/pages/aboutUs/HeadAbout";
import PeopleAbout from "@/components/pages/aboutUs/peopleAbout";
import Team from "@/components/pages/aboutUs/Team";
import StructuredData from "@/components/StructuredData";
import { getTeamMembers } from "@/utils/content";
import { breadcrumbSchema, createMetadata, SITE_URL, webPageSchema } from "@/utils/seo";
import { getServerLocale } from "@/i18n/server";

const description = "Meet the multidisciplinary team behind Trustence: a boutique digital studio combining strategy, software engineering, automation, design, marketing, and visual craft.";
export async function generateMetadata() {
    const locale = await getServerLocale();
    return createMetadata({ title: locale === "fa" ? "درباره استودیوی دیجیتال بوتیک ما" : "About Our Boutique Digital Studio", description: locale === "fa" ? "با تیم چندتخصصی تراستنس در زمینه استراتژی، مهندسی نرم‌افزار، اتوماسیون، طراحی، بازاریابی و محتوای بصری آشنا شوید." : description, path: "/aboutus", locale });
}

export default async function AboutUsPage() {
    const locale = await getServerLocale();
    const fa = locale === "fa";
    const pageDescription = fa ? "با تیم چندتخصصی تراستنس در زمینه استراتژی، مهندسی نرم‌افزار، اتوماسیون، طراحی، بازاریابی و محتوای بصری آشنا شوید." : description;
    const team = await getTeamMembers(locale);
    const peopleSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: fa ? "تیم تراستنس" : "Trustence team",
        itemListElement: team.map((member, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
                "@type": "Person",
                name: member.name,
                jobTitle: member.position,
                description: member.bio || undefined,
                image: typeof member.image === "string" ? member.image : undefined,
                worksFor: { "@id": `${SITE_URL}/#organization` },
                sameAs: [member.github, member.linkedin, member.twitter].filter((url) => url && url !== "#"),
            },
        })),
    };
    return(
        <>
            <StructuredData data={[
                webPageSchema({ name: fa ? "درباره استودیوی دیجیتال بوتیک تراستنس" : "About the Trustence boutique digital studio", description: pageDescription, path: "/aboutus", type: "AboutPage", locale }),
                breadcrumbSchema([{ name: fa ? "خانه" : "Home", path: "/" }, { name: fa ? "درباره ما" : "About", path: "/aboutus" }]),
                peopleSchema,
            ]} />
            <HeadAbout/>
            <Team/>
            <PeopleAbout/>
            <ContactUs/>
            <DiscoverAbout />
        </>
    )
}
