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
import { getServerLocale } from "@/i18n/server";

const description = "Trustence is a boutique digital studio creating bespoke websites, custom platforms, intelligent automations, and search-ready digital experiences for ambitious businesses.";

export async function generateMetadata() {
  const locale = await getServerLocale();
  return createMetadata({
    title: locale === "fa" ? "طراحی وب، توسعه نرم‌افزار و اتوماسیون اختصاصی" : "Bespoke Web Design, Development & Automation",
    description: locale === "fa" ? "تراستنس، استراتژی، طراحی، مهندسی نرم‌افزار و اتوماسیون هوشمند را برای ساخت تجربه‌های دیجیتال متمایز کنار هم می‌آورد." : description,
    path: "/",
    locale,
  });
}

export default async function Home() {
  const locale = await getServerLocale();
  const fa = locale === "fa";
  const pageDescription = fa ? "تراستنس، استراتژی، طراحی، مهندسی نرم‌افزار و اتوماسیون هوشمند را برای ساخت تجربه‌های دیجیتال متمایز کنار هم می‌آورد." : description;
  return (
  <>
  <StructuredData data={[organizationSchema, { ...websiteSchema, inLanguage: fa ? "fa-IR" : "en" }, webPageSchema({ name: fa ? "استودیوی طراحی وب، توسعه و اتوماسیون تراستنس" : "Trustence bespoke web design, development and automation studio", description: pageDescription, path: "/", locale })]} />
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
