import AboutUs from "@/components/AboutUs";
import Discover from "@/components/Discover";
import FAQSection from "@/components/FAQSection";
import Hero from "@/components/Hero";
import Portfilio from "@/components/Portfolio";
import Service from "@/components/Service";
import TeamSection from "@/components/TeamSection";
import ExpertiseSummary from "@/components/ExpertiseSummary";
import StructuredData from "@/components/StructuredData";
import { createMetadata, organizationSchema, websiteSchema, webPageSchema } from "@/utils/seo";

const description = "Trustence is a boutique digital studio creating bespoke websites, custom platforms, intelligent automations, and search-ready digital experiences for ambitious businesses.";

export const metadata = createMetadata({
  title: "Bespoke Web Design, Development & Automation",
  description,
  path: "/",
});

export default function Home() {
  return (
  <>
  <StructuredData data={[organizationSchema, websiteSchema, webPageSchema({ name: "Trustence bespoke web design, development and automation studio", description, path: "/" })]} />
  <Hero/>
  <ExpertiseSummary />
  <Portfilio/>
  <TeamSection/>
  <AboutUs/>
  <Discover/>
  <Service/>
  <FAQSection/>
  </>);
}
