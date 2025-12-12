import AboutUs from "@/components/AboutUs";
import Discover from "@/components/Discover";
import FAQSection from "@/components/FAQSection";
import Hero from "@/components/Hero";
import Portfilio from "@/components/Portfolio";
import Service from "@/components/Service";
import TeamSection from "@/components/TeamSection";

export default function Home() {
  return (
  <>
  <Hero/>
  <Portfilio/>
  <TeamSection/>
  <AboutUs/>
  <Discover/>
  <Service/>
  <FAQSection/>
  </>);
}
