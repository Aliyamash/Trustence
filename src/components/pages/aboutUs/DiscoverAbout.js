import Link from "next/link";

export default function DiscoverAbout() {
  return (
    <>
      <div className="py-24 md:py-44">
        <div className="container">
          <div className="flex flex-col gap-20 md:flex-row justify-between items-center">
            {/* title */}
            <div>
              <h2 className="text-3xl md:text-5xl font-bold my-4">
                Begin with a considered discovery session.
              </h2>
              <p className="text-lg font-semibold">
                A focused conversation to understand your objectives, identify
                the right digital opportunity, and define a credible next step.
              </p>
            </div>

            {/* buttons */}
            <div className="flex gap-4">
              <div className="flex overflow-hidden relative font-bold transition-shadow duration-700 text-black hover:text-white hover:shadow-xl hover:shadow-[#658672] p-btn items-center bg-btn px-8 py-4 mx-auto w-fit rounded-xl">

                <div className="transition-all absolute duration-700  top-1.5/3 right-4  z-0 dot bg-[#205033] h-1.5 w-1.5 rounded-full"></div>
                <Link
                  className="z-10 text-lg transition-all duration-700"
                  href={"/service"}
                >
                  Explore services
                </Link>
              </div>

              <div className="flex overflow-hidden relative font-bold transition-shadow duration-700 text-black hover:text-white hover:shadow-xl hover:shadow-[#658672] p-btn items-center bg-btn px-8 py-4 mx-auto w-fit rounded-xl ">
                <div className="transition-all absolute duration-700  top-1.5/3 left-4  z-0 dot bg-[#205033] h-1.5 w-1.5 rounded-full"></div>
               
                <Link
                  className="z-10 text-lg transition-all duration-700"
                  href={"/discovery"}
                >
                  Request a session
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
