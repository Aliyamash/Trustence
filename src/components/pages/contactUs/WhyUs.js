import { BookOpenCheck, Heart, HeartHandshake } from "lucide-react";

export default function WhyUS() {
  return (
    <div className="bg-white pt-12 pb-44">
      <div className="container">
        <div className="text-center w-full mb-8">
          <h2 className="title font-bold text-5xl md:text-7xl text-[#326438]">
            Trustence
            <BookOpenCheck className="hidden sm:inline ml-12 w-[100px] h-[100px]" />
          </h2>
        </div>
        <div className="text-left md:text-center">
          <p className="text-2xl md:text-3xl font-bold text-pretty mb-24 mx-auto max-w-5xl">
            The quality of a digital partnership is felt long before launch—in
            the questions asked, the decisions explained, and the details respected.
          </p>
          <div className="flex lg:flex-row flex-col justify-between lg:items-center gap-8">
          <p className="text-xl text-left text-pretty lg:w-2/3 font-medium mb-6  ">
            We treat every engagement with discretion and commercial care.
            You receive a clear scope, honest technical guidance, and a digital
            solution shaped around the way your organisation actually operates.
            <HeartHandshake className="inline icon-btn-size2 ml-2 text-green-700" />
          </p>
         
          <p className="text-xl text-green-950 text-left text-pretty lg:w-7/12 font-medium mb-6">
            Our ambition is simple: make the process feel composed, make the
            technology feel dependable, and create work your business is proud to own.
          <Heart className="inline icon-btn-size2 ml-2 text-green-700 "/>
          </p>
        
          </div>
        </div>
      </div>
    </div>
  );
}
