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

const description = "Meet the designers, developers, strategists, and creative specialists behind Trustence and the digital work we create.";
export const metadata = createMetadata({ title: "About Our Team", description, path: "/aboutus" });

export default async function AboutUsPage() {
    const team = await getTeamMembers();
    const peopleSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Trustence team",
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
                webPageSchema({ name: "About the Trustence team", description, path: "/aboutus", type: "AboutPage" }),
                breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/aboutus" }]),
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
