import Link from "next/link";

export default function FAQ() {
  return (
    <div className="bg-white">
      <div className="container py-44 lg:py-64">
        <div className="flex lg:flex-row flex-col justify-center lg:justify-between gap-16">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl lg:text-4xl font-bold mb-2">Have a question?</h2>
            <p className="text-xl lg:text-2xl font-bold text-green-900">
              Explore our FAQ page to find the answers you need.
            </p>
          </div>

          <div className="flex gap-4">
            <div className="flex overflow-hidden w-fit lg:w-[20rem] justify-center relative font-bold transition-shadow duration-700 text-black hover:text-white hover:shadow-xl hover:shadow-[#658672] p-btn items-center bg-btn px-8 py-4 mx-auto rounded-xl">
              <div className="transition-all absolute duration-700  bottom-3 right-4  z-0 dot2 bg-[#205033] h-1.5 lg:h-3 w-1.5 lg:w-3 rounded-full"></div>
              <Link
                className="z-10 text-xl transition-all duration-700"
                href={"/faqs"}
              >
                Your Answer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
