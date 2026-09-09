"use client"
import { faqCreate } from "@/actions/FAQ";
import SubmitButton from "@/components/SubmitButton";
import { useActionState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { useLocale } from "@/i18n/LocaleProvider";

export default function MoreQuestion(){
    const { locale } = useLocale();
    const copy = locale === "fa" ? { title: "پروژه شما به پاسخی دقیق‌تر نیاز دارد.", ask: "مستقیم از تیم ما بپرسید.", name: "نام و نام خانوادگی", email: "نشانی ایمیل", message: "چه چیزی را می‌خواهید روشن کنید؟", send: "ارسال درخواست" } : { title: "Your project deserves a more specific answer.", ask: "Ask our team directly.", name: "Full name", email: "Email address", message: "What would you like to clarify?", send: "Send enquiry" };

    const [ state , formActionFAQ] = useActionState(faqCreate, null)
    const formRef = useRef(null)
     useEffect(() => {
        if (!state) return; 
        if(state?.status === 'error'){
          toast.error(locale === "fa" ? "ارسال انجام نشد؛ لطفاً دوباره تلاش کنید." : state.message)
        }else{
          toast.success(locale === "fa" ? "پرسش شما با موفقیت ارسال شد." : state.message);
          formRef.current?.reset();
        }
      },[state, locale])
    return(
        <div className="pb-24">
            <div className="container">
                <div className="my-12 text-center">
                    <h2 className="text-2xl font-bold select-none">{copy.title} <span className="block my-2 text-green-500">{copy.ask}</span></h2>
                </div>
            <div>
                <form ref={formRef} action={formActionFAQ}>
                   <div className="flex flex-col gap-5">
                     <div className="flex flex-col md:flex-row items-start gap-5">
                        <div className="w-full ">
                            <input className="bg-zinc-200 p-8 w-full rounded-3xl" name="Full_Name" type="text" placeholder={copy.name} required />
                        </div>

                         <div className="w-full ">
                            <input className="bg-zinc-200 p-8 w-full rounded-3xl" name="Email" type="email" placeholder={copy.email} required />
                        </div>
                    </div>
                    <div >
                        <textarea className="bg-zinc-200 p-8 w-full rounded-3xl" name="Inquiry" id="message" placeholder={copy.message} rows={8} required></textarea>
                    </div>
                   </div>
                   
                    <SubmitButton title={copy.send} loadingTitle={locale === "fa" ? "در حال ارسال…" : "Sending…"} style={"my-2 w-full text-center p-6 font-bold text-lg text-white rounded-3xl bg-green-700 hover:bg-green-900 transition duration-500"}/>
                   
                </form>
            </div>
            </div>
        </div>
    )
}
