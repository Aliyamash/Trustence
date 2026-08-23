"use client";

import { aboutCreate } from "@/actions/about";
import SubmitButton from "@/components/SubmitButton";
import { useActionState, useRef, useEffect } from "react";
import { toast } from "react-toastify";
import Link from "next/link";

export default function Form() {
  const [state, aboutFormAction] = useActionState(aboutCreate, null);
  const formRef = useRef(null);

 
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
    <div className="text-white">
      <form ref={formRef} action={aboutFormAction}>
        {/* نام و نام خانوادگی */}
        <div className="mb-8">
          <label className="block text-sm -ml-1 mb-2">Full Name</label>
          <input
            type="text"
            name="Full_Name"
            required
            placeholder="John Doe"
            className="w-full lg:w-[30rem] bg-[#1a221d] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#658672] transition"
          />
        </div>

        {/* ایمیل */}
        <div className="mb-8">
          <label className="block text-sm -ml-1 mb-2">Email</label>
          <input
            type="email"
            name="Email"
            required
            placeholder="john@example.com"
            className="w-full lg:w-[30rem] bg-[#1a221d] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#658672] transition"
          />
        </div>

        {/* پیام */}
        <div className="mb-8">
          <label className="block text-sm -ml-1 mb-2">Message</label>
          <textarea
            name="Inquiry"
            required
            placeholder="Tell us about your project..."
            rows={6}
            className="w-full lg:w-[30rem] bg-[#1a221d] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#658672] transition"
          />
        </div>

        {/* چک‌باکس */}
        <div className="mb-8">
          <label className="custom-checkbox text-sm flex items-center gap-2">
            <input type="checkbox" name="Agree_terms" required />
            <span className="checkmark"></span>
            I agree to the <Link href={"/terms"} className="underline hover:text-green-500">Terms of Service</Link> and <Link href={"/privacy"} className="underline hover:text-green-500">Privacy Policy</Link>
          </label>
        </div>

        {/* دکمه ارسال */}
        <SubmitButton
          title="Send Message"
          loadingTitle="Sending..."
          style="text-sm block my-8 transition duration-500 service-container bg-btn w-fit px-8 py-2 rounded-xl items-center hover:scale-105 hover:text-white"
        />
      </form>
    </div>
  );
}
