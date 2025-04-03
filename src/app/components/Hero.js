import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="bg-[#245336] h-auto">
        <div className="container pb-24">
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
              href={"#"}
              className="bg-[#FFF8EE] rounded-lg mr-2 py-3 px-8 border-none"
            >
              Discover
            </Link>
            <Link
              href={"#"}
              className="bg-black text-white rounded-lg  py-3 px-8 border-none"
            >
              Book
            </Link>
          </div>
            <div className="rounded-xl overflow-hidden aspect-[16/9]">
              <img src={'/images/trustencepic2.jpg'} className="w-full h-full shadow object-cover rounded-xl" alt="customers picture" />
            </div>
        </div>
      </div>
    </>
  );
}
