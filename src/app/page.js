import AboutUs from "@/components/AboutUs";
import Discover from "@/components/Discover";
import FAQSection from "@/components/FAQSection";
import Hero from "@/components/Hero";
import Portfilio from "@/components/Portfolio";
import Service from "@/components/Service";
import TeamSection from "@/components/TeamSection";

export const metadata = {
  title: "Web Design & Development Agency",
  description: "Trustence creates strategic, high-performance websites, brand experiences, and digital products for growing businesses.",
  alternates: { canonical: "/" },
};

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
