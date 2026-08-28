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

const description = "Trustence creates strategic, high-performance websites, accessible digital experiences, and search-ready products for growing businesses.";

export const metadata = createMetadata({
  title: "Web Design & Development Agency",
  description,
  path: "/",
});

export default function Home() {
  return (
  <>
  <StructuredData data={[organizationSchema, websiteSchema, webPageSchema({ name: "Trustence Web Design & Development Agency", description, path: "/" })]} />
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
