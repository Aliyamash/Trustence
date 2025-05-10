import ContactHero from "@/components/pages/contactUs/ContactHero";
import DiscoverContact from "@/components/pages/contactUs/Discovery";
import FormContact from "@/components/pages/contactUs/Form";
import WhyUS from "@/components/pages/contactUs/WhyUs";

export default function ContactUs(){
    return(
        <>
        <ContactHero/>
        <WhyUS/>
        <FormContact/>
        <DiscoverContact/>
        </>
    )
}