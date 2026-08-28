import {
  ChartNoAxesCombined,
  ChevronRight,
  Handshake,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

export default function Service() {
  return (
    <div className="bg-[#D3DCD6]" id="service">
      <div className="container py-20 md:pt-40 md:pb-25">
        <div>
          <h2 className="title text-4xl mb-20 md:mb-32 text-black md:text-center">
            Specialist capabilities. One considered digital partner.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-12 justify-center gap-8">
          <div className="my-4 h-fit">
            <Handshake className="icon-title-size mb-4" />
            <h3 className="title text-2xl font-black text-black">
              Digital strategy and systems shaped around your business.
            </h3>
            <p className="mt-5 ">
              We begin with the commercial objective, then define the right mix
              of experience design, architecture, integrations, and technology.
              The result is tailored, coherent, and built for ownership.
            </p>
            <div className="flex transition duration-500 service-container bg-btn w-fit px-2 py-3 rounded-xl items-center my-8">
              <Link
                className="btn-service pr-1 ml-2 text-lg transition-all duration-500 "
                href={"/service"}
              >
                Explore capabilities
              </Link>
              <ChevronRight className="icon-btn-size transition-all duration-500" />
            </div>
          </div>

          <div className="my-4">
            <ChartNoAxesCombined className="icon-title-size mb-4" />
            <h3 className="title text-2xl font-bold text-black">
              Bespoke websites with presence, performance, and purpose.
            </h3>
            <p className="mt-5 ">
              Distinctive interfaces are paired with accessible development,
              technical SEO, and careful performance work—so the experience is
              as dependable as it is refined.
            </p>
            <div className="flex transition duration-500 service-container bg-btn w-fit px-2 py-3 rounded-xl items-center my-8">
              <Link
                className="btn-service pr-1 ml-2 text-lg transition-all duration-500 "
                href={"/service"}
              >
                View web services
              </Link>
              <ChevronRight className="icon-btn-size transition-all duration-500" />
            </div>
          </div>

          <div className="my-4 sm:col-span-2 sm:justify-self-center sm:w-2/3  lg:col-span-1 lg:justify-self-center lg:w-full">
            <ShieldCheck className="icon-title-size mb-4" />
            <h3 className="title text-2xl font-black text-black">
              Automation and long-term digital stewardship:{" "}
              <span className="text-xl font-semibold">
                from connected workflows to considered improvement.
              </span>
            </h3>
            <p className="mt-5 ">
              We design n8n automations, custom integrations, maintenance plans,
              and measured optimisation around the systems your team relies on.
              Scope, ownership, and the path forward remain clear after launch.
            </p>
            <div className="flex transition duration-500 delay-0 service-container bg-btn w-fit px-2 py-3 rounded-xl items-center my-8">
              <Link
                className="btn-service pr-1 ml-2 text-lg transition-all duration-500 "
                href={"/service"}
              >
                Explore automation
              </Link>
              <ChevronRight className="icon-btn-size transition-all duration-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
