import Link from "next/link";

export default function Discover() {
  return (
    <div className="bg-[#245336] py-44 h-fit">
      <div className="container">
        <div className="mt-24 md:mt-36">
          <h1 className="title-discover title text-center md:text-7xl text-5xl text-[#fff8ee]">
            Your business breakthrough starts with this strategic conversation.
          </h1>
          <div className="flex overflow-hidden relative font-bold transition-shadow duration-700 text-white hover:text-black hover:shadow-xl hover:shadow-[#658672] p-btn mt-32 items-center bg-btn2 px-8 py-4 mx-auto w-fit rounded-xl anime-btn">
          <div className="transition-all absolute duration-700  top-1.5/3 left-4  z-0 dot bg-white h-1.5 w-1.5 rounded-full"></div>
          <div className="transition-all absolute duration-700  top-1.5/3 right-4  z-0 dot bg-white h-1.5 w-1.5 rounded-full"></div>
              <Link
                className="z-10 text-lg transition-all duration-700"
                href={"/discovery"}
              >
                Free Discover Call
              </Link>
            </div>
        </div>
      </div>
    </div>
  );
}
