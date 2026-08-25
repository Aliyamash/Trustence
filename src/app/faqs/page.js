import MoreQuestion from "@/components/pages/FAQs/More";
import QuestionFaq from "@/components/pages/FAQs/Questions";
import WelcomeFaq from "@/components/pages/FAQs/Welcome";

export const metadata = {
  title: "Frequently Asked Questions",
  description: "Answers to common questions about working with Trustence on web design and development projects.",
  alternates: { canonical: "/faqs" },
};


export default function fqasPage(){
    return(
        <div>
         <WelcomeFaq />
         <QuestionFaq/>
         <MoreQuestion/>
        </div>
    )
}
