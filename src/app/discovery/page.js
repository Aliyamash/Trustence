import FormDiscovery from "@/components/pages/discovery/FormDiscovery";
import HeroDiscovery from "@/components/pages/discovery/HeroDiscovery";
import WhatYouGet from "@/components/pages/discovery/WhatYouGet";
import WhyDiscovery from "@/components/pages/discovery/WhyDiscovery";

export default function DiscoveryPage(){
return(
    <>
    <div className="bg-gradiant-discover">
        <HeroDiscovery/>
        <WhyDiscovery/>
        <WhatYouGet/>
        <FormDiscovery/>
    </div>
    </>
)
}