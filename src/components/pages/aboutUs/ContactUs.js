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
              <p className="font-semibold">Connect</p>
              <h1 className="text-5xl lg:text-7xl -ml-2 my-4">Get in Touch</h1>
              <p className="text-lg">We love hearing from you </p>
              <p className="text-lg">Please feel free also to contact us.</p>

          <div className="mt-12">
          <div className="flex gap-8 my-6">
                <Mail />
                <p>TrustenceAgency@gmail.com</p>
              </div>

              <div className="flex gap-8 my-6">
                <Phone />
                <p>(+98) 921-155-7398</p>
              </div>

              <div className="flex gap-8 my-6">
                <LocateIcon />
                <p>Iran - Isfahan - Zarinshahr</p>
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
