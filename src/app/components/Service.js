import {
  ChartNoAxesCombined,
  ChevronRight,
  Handshake,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

export default function Service() {
  return (
    <div className="bg-[#D3DCD6]">
      <div className="container py-20 md:pt-40 md:pb-25">
        <div>
          <h1 className="title text-4xl mb-20 md:mb-32 text-black md:text-center">
            Tailored Services for Your Exceptional Growth
          </h1>
        </div>

        <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-12 justify-center gap-8">
          <div className="my-4 h-fit">
            <Handshake className="icon-title-size mb-4" />
            <h1 className="title text-2xl text-black">
              Cutting-Edge Technology with Unmatched Reliability. Your Success,
              Our Priority
            </h1>
            <p className="mt-5 ">
              Together, we blend cutting-edge technology and trusted reliability
              to fuel your success. Your vision is our shared mission, let's
              build something remarkable, side by side.
            </p>
            <div className="flex transition duration-500 service-container bg-btn w-fit px-2 py-3 rounded-xl items-center my-8">
              <Link
                className="btn-service pr-1 ml-2 text-lg transition-all duration-500 "
                href={"#"}
              >
                Explore
              </Link>
              <ChevronRight className="icon-btn-size transition-all duration-500" />
            </div>
          </div>

          <div className="my-4">
            <ChartNoAxesCombined className="icon-title-size mb-4" />
            <h1 className="title text-2xl text-black">
              Our expert web design services are crafted to enhance user
              experience and drive measurable results.
            </h1>
            <p className="mt-5 ">
              Our team brings specialized knowledge and refined skills to every
              project, ensuring technically excellent and aesthetically stunning
              results
            </p>
            <div className="flex transition duration-500 service-container bg-btn w-fit px-2 py-3 rounded-xl items-center my-8">
              <Link
                className="btn-service pr-1 ml-2 text-lg transition-all duration-500 "
                href={"#"}
              >
                Discover
              </Link>
              <ChevronRight className="icon-btn-size transition-all duration-500" />
            </div>
          </div>

          <div className="my-4 sm:col-span-2 sm:justify-self-center sm:w-2/3  lg:col-span-1 lg:justify-self-center lg:w-full">
            <ShieldCheck className="icon-title-size mb-4" />
            <h1 className="title text-2xl font-black text-black">
              End-to-End Long-Term Support:{" "}
              <span className="text-xl font-semibold">
                Your Success Is Our Ongoing Commitment. From Implementation to
                Evolution
              </span>
            </h1>
            <p className="mt-5 ">
              Our dedicated Long-Term Support (LTS) program ensures your systems
              remain cutting-edge, secure, and optimized. With 24/7 monitoring,
              regular updates, and proactive maintenance, we grow alongside your
              business. because your success doesn’t end at launch, and neither
              does our partnership.
            </p>
            <div className="flex transition duration-500 delay-0 service-container bg-btn w-fit px-2 py-3 rounded-xl items-center my-8">
              <Link
                className="btn-service pr-1 ml-2 text-lg transition-all duration-500 "
                href={"#"}
              >
                Learn
              </Link>
              <ChevronRight className="icon-btn-size transition-all duration-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
