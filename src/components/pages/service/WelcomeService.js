import Image from "next/image";
import webService from "@/public/images/webservice.webp";
import Link from "next/link";

export default function WelcomeService() {
  return (
    <>
      <div className="bg-[#060e09] py-64">
        <div className="container  text-white text-center">
          <div>
            <h1 className="title text-4xl md:text-5xl  my-4">
              Web Design &amp; Development Services Built for Growth
            </h1>
            <p className="mb-12 md:mb-16 md:text-xl font-bold">
              Strategic Thinking, {" "}
              <span className="text-green-400 text-3xl">
                Purposeful Design
              </span>{" "}
              , Reliable Development{" "}
            </p>
            <Link
              className=" px-6 py-4 transition duration-500 font-black text-black hover:bg-white hover:shadow-[#46c972] hover:shadow-2xl rounded-2xl bg-[#46c972]"
              href={"#proservice"}
            >
              Explore Services
            </Link>
            <div className=" -mb-[25rem] mt-16 aspect-[16/16] shadow-2xl shadow-green-900 overflow-hidden rounded-2xl md:w-[25rem] w-[15rem] h-auto mx-auto">
              <Image
                src={webService}
                className="md:object-cover z-50 object-fill scale-125 rounded-xl w-full h-full"
                alt="Pro Service"
              />
              <div></div>
            </div>
          </div>
          
        </div>
      </div>
      
    </>
  );
}
