import { Key } from "lucide-react";
import Link from "next/link";
import PremiumOptions from "./PremiumOptions";
import CoreOptions from "./CoreOptions";

export default function PremiumService() {
  return (
    <>
      <div className="bg-[#fff8ee] py-44">
        <div className="container ">
          <div>
            <div className="flex gap-6 justify-center  items-center">
              <h2 className="title font-bold text-center text-2xl sm:text-3xl md:text-5xl">
                Premium Service
              </h2>
              <Key className="service-icons rotate-180" />
            </div>
            <p className="font-bold text-2xl text-center py-2 text-[#1C422B]">
              Consider your options. Decide the future of your business
              yourself.
            </p>
          </div>

          <div className="flex flex-col gap-12 lg:gap-0 lg:flex-row items-center justify-center mt-20 mx-auto">
            {/* core service */}
            <div className="p-8 rounded-xl border-2 border-black md:-mr-3 shadow-zinc-800 shadow-xl md:w-4/5 ">
              <div className="lg:w-11/12 w-full">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <h3 className="font-bold text-xl text-center">
                      Core Service
                    </h3>
                  </div>
                  <p className="mb-4 text-pretty">
                    Our Core Service provides a solid foundation for your
                    website, offering essential solutions designed to support
                    future growth and scalability.
                  </p>
                </div>

                <Link
                  href={"#formDiscovery"}
                  className="w-full transition duration-700 btn-premium block font-bold tracking-wider shadow-2xl shadow-black hover:shadow-zinc-400 hover:text-white text-white  bg-[#888] rounded-2xl py-4 px-5 mx-auto text-center"
                >
                  Get CoreService
                  <span className="dot-premium1 transition duration-700"></span>
                </Link>
                <CoreOptions />
              </div>
            </div>

            {/* premium service */}
            <div className="bg-[#fff8ee] rounded-xl shadow-green-900 shadow-xl md:w-4/5">
              <div className="p-8 rounded-xl border-2 border-green-700 bg-premium z-30 ">
                <div className="w-4/5">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <h3 className="font-bold text-xl text-center">
                        Premium Service
                      </h3>
                      <span className="px-2 border-2 text-red-400 border-red-400 font-bold rounded-lg text-sm">
                        POPULAR
                      </span>
                    </div>
                    <p className="mb-12">
                      Premium services aren't just an upgrade. they're your
                      shortcut to success
                    </p>
                  </div>
                </div>

                <Link
                  href={"#formDiscovery"}
                  className="w-full transition duration-700 btn-premium block font-bold tracking-wider  bg-[#245336] text-white rounded-2xl shadow-2xl shadow-black py-4 px-5 mx-auto text-center"
                >
                  Get Premium
                  <span className="dot-premium2 transition duration-700"></span>
                </Link>
                <PremiumOptions />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
