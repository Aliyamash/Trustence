import { LocateIcon, LocateOffIcon, Mail, Phone } from "lucide-react";
import Form from "./Form";

export default function ContactUs() {
  return (
    <>
      <div className="bg-[#060e09] py-24 md:py-44 text-white">
        <div className="container">
          <div className="flex flex-col gap-16 lg:gap-8 justify-center lg:justify-around lg:flex-row  ">
            {/* info call */}
            <div>
              <p className="font-semibold">A direct conversation</p>
              <h2 className="text-5xl lg:text-7xl -ml-2 my-4">Tell us what you are building.</h2>
              <p className="max-w-lg text-lg leading-8 text-white/65">Share the ambition, the challenge, or the system that should work better. We will respond with a thoughtful next step.</p>

          <div className="mt-12">
          <div className="flex gap-8 my-6">
                <Mail />
                <a href="mailto:trustenceagency@gmail.com">trustenceagency@gmail.com</a>
              </div>

              <div className="flex gap-8 my-6">
                <LocateIcon />
                <p>Switzerland - Einigen</p>
              </div>
          </div>

            </div>
            {/* form */}
            <Form />
          </div>
        </div>
      </div>
    </>
  );
}
