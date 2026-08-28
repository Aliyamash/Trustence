import FormDiscovery from "@/components/pages/discovery/FormDiscovery";
import HeroDiscovery from "@/components/pages/discovery/HeroDiscovery";
import WhatYouGet from "@/components/pages/discovery/WhatYouGet";
import WhyDiscovery from "@/components/pages/discovery/WhyDiscovery";
import StructuredData from "@/components/StructuredData";
import { breadcrumbSchema, createMetadata, webPageSchema } from "@/utils/seo";

const description = "Request a complimentary strategy conversation with Trustence to clarify your objectives, audience, technology, automation opportunities, scope, and next digital move.";
export const metadata = createMetadata({ title: "Request a Digital Strategy Call", description, path: "/discovery" });

export default function DiscoveryPage(){
return(
    <>
    <StructuredData data={[
      webPageSchema({ name: "Request a digital strategy discovery call", description, path: "/discovery" }),
      breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Strategy call", path: "/discovery" }]),
    ]} />
    <div className="bg-gradiant-discover">
        <HeroDiscovery/>
        <WhyDiscovery/>
        <WhatYouGet/>
        <FormDiscovery/>
    </div>
    </>
)
}
