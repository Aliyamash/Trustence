import { BookOpenCheck, Heart, HeartHandshake } from "lucide-react";

export default function WhyUS() {
  return (
    <div className="bg-white pt-12 pb-44">
      <div className="container">
        <div className="text-center w-full mb-8">
          <h1 className="title font-bold text-5xl md:text-7xl text-[#326438]">
            Trustence
            <BookOpenCheck className="hidden sm:inline ml-12 w-[100px] h-[100px]" />
          </h1>
        </div>
        <div className="text-left md:text-center">
          <p className="text-2xl md:text-3xl font-bold text-pretty mb-24 mx-auto max-w-5xl">
            We know you're ready to get in touch, but as a matter of courtesy,
            we'd like to briefly share the core values that define our team.
          </p>
          <div className="flex lg:flex-row flex-col justify-between lg:items-center gap-8">
          <p className="text-xl md:text-2xl text-left text-pretty lg:w-2/3 font-medium mb-6  ">
            At the heart of our agency lies the essence of trust, the
            cornerstone of our team. We are committed first to honoring our
            clients with deep respect, and second, to building powerful
            platforms that drive their growth and success.
            <HeartHandshake className="inline icon-btn-size2 ml-2 text-green-700" />
          </p>
         
          <p className="text-lg text-green-950 md:text-lg text-left text-pretty lg:w-7/12 font-medium mb-6">
            In a world where distrust has become the norm, we choose to be
            different, by creating genuine connections built on trust.
          <Heart className="inline icon-btn-size2 ml-2 text-green-700 "/>
          </p>
        
          </div>
        </div>
      </div>
    </div>
  );
}
