"use client";

import { aboutCreate } from "@/actions/about";
import SubmitButton from "@/components/SubmitButton";
import { useActionState, useRef, useEffect } from "react";
import { toast } from "react-toastify";
import Link from "next/link";
import { useLocale } from "@/i18n/LocaleProvider";

export default function Form() {
  const { locale } = useLocale();
  const copy = locale === "fa" ? { name: "نام و نام خانوادگی", namePlaceholder: "نام شما", email: "ایمیل", enquiry: "پروژه یا درخواست", placeholder: "قصد دارید چه چیزی بسازید، بهتر کنید یا خودکار کنید؟", agree: "با", terms: "شرایط استفاده", and: "و", privacy: "سیاست حریم خصوصی", submit: "ارسال درخواست", sending: "در حال ارسال…" } : { name: "Full name", namePlaceholder: "John Doe", email: "Email", enquiry: "Project or enquiry", placeholder: "What are you looking to create, improve, or automate?", agree: "I agree to the", terms: "Terms of service", and: "and", privacy: "Privacy policy", submit: "Send enquiry", sending: "Sending…" };
  const [state, aboutFormAction] = useActionState(aboutCreate, null);
  const formRef = useRef(null);

 
   useEffect(() => {
    if (!state) return; 
    if(state?.status === 'error'){
      toast.error(locale === "fa" ? "ارسال انجام نشد؛ لطفاً دوباره تلاش کنید." : state.message)
    }else{
      toast.success(locale === "fa" ? "درخواست شما با موفقیت ثبت شد." : state.message);
      formRef.current?.reset();
    }
  },[state, locale])

  return (
    <div className="text-white">
      <form ref={formRef} action={aboutFormAction}>
        {/* نام و نام خانوادگی */}
        <div className="mb-8">
          <label className="block text-sm -ml-1 mb-2">{copy.name}</label>
          <input
            type="text"
            name="Full_Name"
            required
            placeholder={copy.namePlaceholder}
            className="w-full lg:w-[30rem] bg-[#1a221d] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#658672] transition"
          />
        </div>

        {/* ایمیل */}
        <div className="mb-8">
          <label className="block text-sm -ml-1 mb-2">{copy.email}</label>
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
          <label className="block text-sm -ml-1 mb-2">{copy.enquiry}</label>
          <textarea
            name="Inquiry"
            required
            placeholder={copy.placeholder}
            rows={6}
            className="w-full lg:w-[30rem] bg-[#1a221d] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#658672] transition"
          />
        </div>

        {/* چک‌باکس */}
        <div className="mb-8">
          <label className="custom-checkbox text-sm flex items-center gap-2">
            <input type="checkbox" name="Agree_terms" required />
            <span className="checkmark"></span>
            {copy.agree} <Link href={"/terms"} className="underline hover:text-green-500">{copy.terms}</Link> {copy.and} <Link href={"/privacy"} className="underline hover:text-green-500">{copy.privacy}</Link>
          </label>
        </div>

        {/* دکمه ارسال */}
        <SubmitButton
          title={copy.submit}
          loadingTitle={copy.sending}
          style="text-sm block my-8 transition duration-500 service-container bg-btn w-fit px-8 py-2 rounded-xl items-center hover:scale-105 hover:text-white"
        />
      </form>
    </div>
  );
}
