import Discover from "@/components/Discover";
import ContactUs from "@/components/pages/aboutUs/ContactUs";
import Form from "@/components/pages/aboutUs/ContactUs";
import DiscoverAbout from "@/components/pages/aboutUs/DiscoverAbout";
import HeadAbout from "@/components/pages/aboutUs/HeadAbout";
import PeopleAbout from "@/components/pages/aboutUs/peopleAbout";
import Team from "@/components/pages/aboutUs/Team";

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