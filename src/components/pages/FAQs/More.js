"use client"
import { faqCreate } from "@/actions/FAQ";
import SubmitButton from "@/components/SubmitButton";
import { useActionState, useEffect, useRef } from "react";
import { toast } from "react-toastify";

export default function MoreQuestion(){

    const [ state , formActionFAQ] = useActionState(faqCreate, null)
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
    return(
        <div className="pb-24">
            <div className="container">
                <div className="my-12 text-center">
                    <h2 className="text-2xl font-bold select-none">Still have a question? <span className="block my-2 text-green-500">Contact us.</span></h2>
                </div>
            <div>
                <form ref={formRef} action={formActionFAQ}>
                   <div className="flex flex-col gap-5">
                     <div className="flex flex-col md:flex-row items-start gap-5">
                        <div className="w-full ">
                            <input className="bg-zinc-200 p-8 w-full rounded-3xl" name="Full_Name" type="text" placeholder="Full Name" required />
                        </div>

                         <div className="w-full ">
                            <input className="bg-zinc-200 p-8 w-full rounded-3xl" name="Email" type="email" placeholder="Email Address" required />
                        </div>
                    </div>
                    <div >
                        <textarea className="bg-zinc-200 p-8 w-full rounded-3xl" name="Inquiry" id="message" placeholder="Your Message" rows={8} required></textarea>
                    </div>
                   </div>
                   
                    <SubmitButton title={"Send Message"} style={"my-2 w-full text-center p-6 font-bold text-lg text-white rounded-3xl bg-green-700 hover:bg-green-900 transition duration-500"}/>
                   
                </form>
            </div>
            </div>
        </div>
    )
}
