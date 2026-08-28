import FormDiscovery from "@/components/pages/discovery/FormDiscovery";
import HeroDiscovery from "@/components/pages/discovery/HeroDiscovery";
import WhatYouGet from "@/components/pages/discovery/WhatYouGet";
import WhyDiscovery from "@/components/pages/discovery/WhyDiscovery";
import StructuredData from "@/components/StructuredData";
import { breadcrumbSchema, createMetadata, webPageSchema } from "@/utils/seo";

const description = "Book a free discovery conversation with Trustence to clarify your goals, audience, scope, and next steps for a digital project.";
export const metadata = createMetadata({ title: "Book a Free Website Discovery Call", description, path: "/discovery" });

export default function DiscoveryPage(){
return(
    <>
    <StructuredData data={[
      webPageSchema({ name: "Book a free discovery call", description, path: "/discovery" }),
      breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Discovery call", path: "/discovery" }]),
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
