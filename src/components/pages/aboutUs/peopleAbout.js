import { HandHeart, Sprout } from "lucide-react";
import Image from "next/image";
import picAbout from '@/public/images/pic-about2.webp';

export default function PeopleAbout() {
  return (
    <div className="bg-[#fff] py-24 lg:py-32">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-8 justify-between lg:items-center">
          {/* icons , title , description */}
          <div className="lg:w-1/2">
            <div className="flex flex-col md:mb-16">
              {/* title */}
              <div>
                <h1 className="title font-bold text-2xl md:text-4xl mb-8">
                  Empowering geniuses to dominate markets, not just the
                  competition
                </h1>
              </div>
              {/* description */}
              <div>
                <p className="text-xl text-pretty">
                  We excel at creating outstanding websites. Our priority is
                  helping you increase your customer base. Remember, a unique
                  showcase reflects professionalism for you and your business.😉
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 md:flex-row mt-8">
              <div className="mb-4">
                <h1 className="font-bold text-lg  mb-2">Our focus <Sprout className="inline-block icon-btn-size mx-1 -mt-1" /></h1>
                <p className="text">
                  is on particular clients whose websites serve as the primary
                  gateway to their business.
                 
                </p>
              </div>

              <div className="mb-4">
                <h1 className="font-bold text-lg  mb-2">Why Choose Us<HandHeart className="inline-block icon-btn-size2 mx-1 -mt-1" /></h1>
                <p className="text">
                  Your trust is our most valued currency. That’s why we
                  prioritize transparency, discretion, and a partnership that
                  evolves with your needs because true luxury lies in the
                  confidence of knowing you’re in the right hands.
                  
                </p>
              </div>
            </div>
          </div>


          {/* picture */}
          <div className="mx-auto w-[17rem] sm:w-[20rem] md:w-[25rem] lg:w-[35rem] 2xl:w-[40rem] h-full">
            <Image className="w-full h-full" src={picAbout} alt="Trustence team collaborating" />
          </div>


        </div>
      </div>
    </div>
  );
}
