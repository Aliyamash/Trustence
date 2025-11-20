"use client";

import {
  Heart,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import telegram from "@/public/images/telegram.svg";
import WhatsApp from "@/public/images/whatsapp.svg";
import logo from "@/public/images/logo.webp";
import Image from "next/image";
import Link from "next/link";
import { useFormState } from "react-dom";
import { create } from "@/actions/footer";
import SubmitButton from "../SubmitButton";
import { useEffect, useRef } from "react";
import { toast } from "react-toastify";

export default function Footer() {
  const [state, formAction] = useFormState(create);
  const formRef = useRef(null)

  useEffect(() => {
    if (!state) return; 
    if(state?.status === 'error'){
      toast.error(state.message)
    }else{
      toast.success(state.message);
      formRef.current?.reset();
    }
  },[state])
  return (
    <div className="bg-[#060e09] text-white -mt-2 py-24">
      <div className="container">
        <div className="flex flex-col md:flex-row  lg:items-center lg:justify-between md:gap-8 mb-20">
          {/* about footer */}
          <div>
            <h2 className="font-bold title text-shadow shadow-green-500 w-fit bg-none text-2xl mb-2">
              Trustence
            </h2>
            <p>Where trust meets innovation</p>
            <p className="text-pretty">
              Our agency is founded on trust, with your confidence as our top
              priority.
            </p>
          </div>
          {/* input footer */}
          <div className="mt-8">
            <form ref={formRef} action={formAction}>
              <div className="flex flex-col sm:flex-row gap-4 p-1">
                <input
                  className="px-4 lg:w-[20rem] w-full py-2 text-lg rounded-lg bg-[#54524C]"
                  type="email"
                  name="Email"
                  placeholder="Your email here"
                />
                <SubmitButton
                  title="join"
                  style="px-6 py-2 text-lg rounded-lg bg-[#54524C]"
                />
              </div>

              <div className="flex gap-2 mt-1">
                <Heart />
                <p>
                  We’d love to hear from you! Type in your email and let’s start the conversation.
                </p>
              </div>
            </form>
          </div>
        </div>

        <div className="flex flex-col flex-wrap justify-between md:flex-row items-stretch">
          <div className="overflow-hidden w-[9rem] h-[9rem] md:mt-8 ">
            <Image
              className="object-fit rounded-xl scale-150 "
              priority
              width="auto"
              height="auto"
              src={logo}
              alt="trustence-logo"
            />
          </div>

          <div>
            <p className="font-bold mb-4 mt-12 text-lg">Quick Links</p>
            <div className="flex flex-col gap-2">
              <Link href={"#"}>Home page</Link>
              <Link href={"/aboutus"}>About Us</Link>
              <Link href={"/service"}>Our Service</Link>
              <Link href={"/contact"}>Contact Us</Link>
              {/* <Link href={"/blog"}>Blog Posts</Link> */}
            </div>
          </div>

          <div>
            <p className="font-bold mb-4 mt-12 text-lg">Resources</p>
            <div className="flex flex-col gap-2">
              <Link href={"/projects"}>Portfilio</Link>
              <Link href={"mailto:trustenceagecy@gmail.com"}>Support</Link>
              <Link href={"/aboutus"}>Careers</Link>
            </div>
          </div>

          <div>
            <p className="font-bold mb-4 mt-12 text-lg">Follow Us</p>
            <div className="flex flex-col gap-2">
              <Link href={"https://www.t.me/Real_MoOorGan"}>Telegram Account</Link>
              <Link href={"http://linkedin.com/in/trustence-agency-b13a9038a"}>LinkedIn Profile</Link>
              <Link href={"https://www.instagram.com/trustence.official/"}>Instagram Gallery</Link>
              <Link href={"https://wa.me/989217332763"}>WhatsApp Account</Link>
            </div>
          </div>

          <div>
            <p className="font-bold mb-4 mt-12 text-lg">Contact Info</p>
            <div className="flex flex-col gap-2">
              <Link href={"/Privacy"}>Privacy Policy</Link>
              <Link href={"/terms"}>Term of Use</Link>
              <Link href={"/copyright"}>Copyright Notice</Link>
            </div>
          </div>
        </div>

        <hr className="border-zinc-600 mt-20 md:mb-10 mb-6" />
        <div className="flex justify-between  flex-col-reverse md:flex-row px-2 ">
          <div className="flex flex-col-reverse md:flex-row gap-3 md:gap-12 ">
            <p className="text-sm pt-12 md:pt-0">
              © 2024 Trustence. All rights reserved.
            </p>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Term of Use</Link>
          </div>

          <div className="flex gap-4 mb-8 md:mb-0">
            <Link href={"https://www.instagram.com/trustence.official/"}>
              <Instagram className="icon-btn-size2" />
            </Link>
            <Link href={"https://wa.me/989217332763"}>
              <Image src={WhatsApp} className="icon-btn-size2" alt="whats app" />
            </Link>
            <Link href={"http://linkedin.com/in/trustence-agency-b13a9038a"}>
              <Linkedin className="icon-btn-size2" />
            </Link>
            <Link href={"https://www.t.me/Real_MoOorGan"}>
              <Image src={telegram} className="icon-btn-size2" alt="telegram" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
