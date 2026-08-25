import Discover from "@/components/Discover";
import ContactUs from "@/components/pages/aboutUs/ContactUs";
import Form from "@/components/pages/aboutUs/ContactUs";
import DiscoverAbout from "@/components/pages/aboutUs/DiscoverAbout";
import HeadAbout from "@/components/pages/aboutUs/HeadAbout";
import PeopleAbout from "@/components/pages/aboutUs/peopleAbout";
import Team from "@/components/pages/aboutUs/Team";

export const metadata = {
  title: "About Our Team",
  description: "Meet the designers, developers, and strategists behind Trustence and the digital work we create.",
  alternates: { canonical: "/aboutus" },
};

export default function AboutUsPage() {
    return(
        <>
            <HeadAbout/>
            <Team/>
            <PeopleAbout/>
            <ContactUs/>
            <DiscoverAbout />
        </>
    )
}
