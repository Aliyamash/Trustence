import Link from "next/link";
import heroImg from "@/public/images/trustencepic2.jpg"
import Image from "next/image";
export default function Hero() {
  return (
    <>
      <div className="gradiant-bg py-24 h-auto">
        <div className="container">
          {/* hero title (nich) */}
          <div className="md:w-4/5">
           
            <h1 className="title mt-24 md:text-8xl pb-2 text-pretty text-5xl text-[#CBA792] font-semibold">
               85% of Users
            </h1>
            <h1 className="title lightColor font-semibold md:text-5xl text-3xl pb-6 text-pretty" >Trust Websites with Professional Design Let’s Transform Yours into a Customer Magnet !</h1>
          </div>
          {/* discription */}
          <p className="text-xl text-white">
            Our web designs are the bridge to your business growth and success
          </p>
          {/* btns */}
          <div className="my-12">
            <Link
              href={"/discovery"}
              className="bg-[#FFF8EE] rounded-xl mr-2 py-3 px-8 border-none hover:text-[#FFF8EE] hover:bg-[#114422] transition duration-300"
            >
             Free Discover Call
            </Link>
           
          </div>
            <div className="rounded-xl overflow-hidden aspect-[16/9]">
              <Image src={heroImg} className="w-full h-full shadow object-cover rounded-xl" alt="customers picture" />
            </div>
        </div>
      </div>
    </>
  );
}
