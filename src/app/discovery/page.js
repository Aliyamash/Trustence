import FormDiscovery from "@/components/pages/discovery/FormDiscovery";
import HeroDiscovery from "@/components/pages/discovery/HeroDiscovery";
import WhatYouGet from "@/components/pages/discovery/WhatYouGet";
import WhyDiscovery from "@/components/pages/discovery/WhyDiscovery";
import StructuredData from "@/components/StructuredData";
import { breadcrumbSchema, createMetadata, webPageSchema } from "@/utils/seo";
import { getServerLocale } from "@/i18n/server";

const description = "Request a complimentary strategy conversation with Trustence to clarify your objectives, audience, technology, automation opportunities, scope, and next digital move.";
export async function generateMetadata() {
  const locale = await getServerLocale();
  return createMetadata({ title: locale === "fa" ? "درخواست جلسه راهبردی دیجیتال" : "Request a Digital Strategy Call", description: locale === "fa" ? "در یک گفت‌وگوی راهبردی با تراستنس، هدف، مخاطب، فناوری، فرصت‌های اتوماسیون و قدم بعدی پروژه دیجیتال خود را روشن کنید." : description, path: "/discovery", locale });
}

export default async function DiscoveryPage(){
const locale = await getServerLocale();
const fa = locale === "fa";
const pageDescription = fa ? "در یک گفت‌وگوی راهبردی با تراستنس، هدف، مخاطب، فناوری، فرصت‌های اتوماسیون و قدم بعدی پروژه دیجیتال خود را روشن کنید." : description;
return(
    <>
    <StructuredData data={[
      webPageSchema({ name: fa ? "درخواست جلسه راهبردی دیجیتال" : "Request a digital strategy discovery call", description: pageDescription, path: "/discovery", locale }),
      breadcrumbSchema([{ name: fa ? "خانه" : "Home", path: "/" }, { name: fa ? "جلسه راهبردی" : "Strategy call", path: "/discovery" }]),
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
