
export default function WhyUs() {
  return (
    <div className=" bg-whyus relative -z-50">
      <div className="absolute top-0 right-0 left-0 bg-[#c9c9c9d8] md:bg-[#b1c7b2cb] blur -z-10 w-full h-full"></div>
      <div className="container py-24 md:py-40 z-50 text-white text-center">
        <div className="lg:w-4/5 mx-auto lg:p-20">
          <h2 className="text-2xl md:text-4xl title text-black font-bold mb-12 leading-loose ">
            Why Do Clients Choose{" "}
            <span className="text-white text-2xl md:text-3xl px-4 py-2 shadow-xl shadow-green-900 rounded-2xl bg-green-700 ">
              Trustence
            </span>{" "}
            ?
          </h2>
          <p className="text-lg md:text-xl text-black leading-relaxed">
            In a world where AI tools promise speed and low cost, we focus on
            what machines can’t offer:
            <span className="font-semibold text-xl md:text-2xl ">
              {" "}
              real human understanding, true creativity, and tailored strategy
            </span>
            . With Trustence, you're not just getting a website; you're getting
            a custom-crafted journey built around your real business goals.
          </p>
          <h1 className=" mt-16 font-bold text-xl text-gray-800"><span className="title mb-2 text-green-800 text-3xl md:text-5xl inline font-bold">Trustence</span> where professionalism meets trust</h1>
        </div>
      </div>
    </div>
  );
}
