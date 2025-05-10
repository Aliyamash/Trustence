import ApproachService from "@/components/pages/service/ApproachService";
import CoreService from "@/components/pages/service/CoreService";
import DiscoveryForm from "@/components/pages/service/DiscoverForm";
import FAQ from "@/components/pages/service/FAQ";
import PremiumService from "@/components/pages/service/PremiumSection";
import ServiceProView from "@/components/pages/service/ServiceProView";
import WelcomeService from "@/components/pages/service/WelcomeService";
import WhyUs from "@/components/pages/service/WhyUs";
import ProcessTimeline from "@/components/pages/service/WorkProcess";
import Portfilio from "@/components/Portfolio";

export default function service(){
    return(
        <>
        <WelcomeService/>
        <ApproachService/>
        <WhyUs/>
        <ServiceProView/>
        <CoreService/>
        <PremiumService/>
        <ProcessTimeline/>
        <Portfilio/>
        <FAQ/>
        <DiscoveryForm/>
        </>
    )
}