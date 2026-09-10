import MoreQuestion from "@/components/pages/FAQs/More";
import QuestionFaq from "@/components/pages/FAQs/Questions";
import WelcomeFaq from "@/components/pages/FAQs/Welcome";
import StructuredData from "@/components/StructuredData";
import { getFaqs } from "@/components/FaqsOptions";
import { breadcrumbSchema, createMetadata, webPageSchema } from "@/utils/seo";
import { getServerLocale } from "@/i18n/server";

const description = "Clear answers about Trustence services, bespoke web projects, software and n8n automation, timelines, ownership, SEO, support, content, security, and collaboration.";
export async function generateMetadata() {
    const locale = await getServerLocale();
    return createMetadata({ title: locale === "fa" ? "پرسش‌های متداول پروژه دیجیتال و اتوماسیون" : "Digital Project & Automation FAQs", description: locale === "fa" ? "پاسخ‌های روشن درباره خدمات تراستنس، پروژه‌های وب و نرم‌افزار، اتوماسیون n8n، زمان‌بندی، مالکیت، سئو، امنیت و پشتیبانی." : description, path: "/faqs", locale });
}


export default async function fqasPage(){
    const locale = await getServerLocale();
    const fa = locale === "fa";
    const pageDescription = fa ? "پاسخ‌های روشن درباره خدمات تراستنس، پروژه‌های وب و نرم‌افزار، اتوماسیون n8n، زمان‌بندی، مالکیت، سئو، امنیت و پشتیبانی." : description;
    const faqItems = getFaqs(locale);
    return(
        <div>
         <StructuredData data={[
           webPageSchema({ name: fa ? "پرسش‌های پروژه دیجیتال و اتوماسیون تراستنس" : "Trustence digital project and automation questions", description: pageDescription, path: "/faqs", type: "CollectionPage", locale }),
           breadcrumbSchema([{ name: fa ? "خانه" : "Home", path: "/" }, { name: fa ? "پرسش‌های متداول" : "FAQs", path: "/faqs" }]),
           {
             "@context": "https://schema.org",
             "@type": "FAQPage",
             mainEntity: faqItems.map((faq) => ({
               "@type": "Question",
               name: faq.question,
               acceptedAnswer: { "@type": "Answer", text: faq.answer },
             })),
           },
         ]} />
         <WelcomeFaq />
         <QuestionFaq/>
         <MoreQuestion/>
        </div>
    )
}
