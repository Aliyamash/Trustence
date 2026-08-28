import MoreQuestion from "@/components/pages/FAQs/More";
import QuestionFaq from "@/components/pages/FAQs/Questions";
import WelcomeFaq from "@/components/pages/FAQs/Welcome";
import StructuredData from "@/components/StructuredData";
import { faqs } from "@/components/FaqsOptions";
import { breadcrumbSchema, createMetadata, webPageSchema } from "@/utils/seo";

const description = "Clear answers about Trustence services, bespoke web projects, software and n8n automation, timelines, ownership, SEO, support, content, security, and collaboration.";
export const metadata = createMetadata({ title: "Digital Project & Automation FAQs", description, path: "/faqs" });


export default function fqasPage(){
    return(
        <div>
         <StructuredData data={[
           webPageSchema({ name: "Trustence digital project and automation questions", description, path: "/faqs", type: "CollectionPage" }),
           breadcrumbSchema([{ name: "Home", path: "/" }, { name: "FAQs", path: "/faqs" }]),
           {
             "@context": "https://schema.org",
             "@type": "FAQPage",
             mainEntity: faqs.map((faq) => ({
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
