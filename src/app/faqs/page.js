import MoreQuestion from "@/components/pages/FAQs/More";
import QuestionFaq from "@/components/pages/FAQs/Questions";
import WelcomeFaq from "@/components/pages/FAQs/Welcome";


export default function fqasPage(){
    return(
        <div>
         <WelcomeFaq />
         <QuestionFaq/>
         <MoreQuestion/>
        </div>
    )
}