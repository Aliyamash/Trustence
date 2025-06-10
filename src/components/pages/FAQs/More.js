"use client"
import { faqCreate } from "@/actions/FAQ";
import SubmitButton from "@/components/SubmitButton";
import { getFetch } from "@/utils/fetch";
import { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";

export default function MoreQuestion(){

    const [ state , formActionFAQ] = useFormState(faqCreate)
    const [formFields , setFormField] = useState([])
    const formRef = useRef(null)
   useEffect(() => {
    const fetchFields = async () => {
      try {
        const data = await getFetch("/project-request-form/get_in_touch");     
        setFormField(data);
      } catch (err) {
        console.error("Error fetching fields:", err);
      }
    };

    fetchFields();
  }, []);
    
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
                    <h1 className="text-2xl font-bold select-none">More Question ? <span className="block my-2 text-green-500">Contact Us..</span></h1>
                </div>
            <div>
                <form ref={formRef} action={formActionFAQ}>
                   <div className="flex flex-col gap-5">
                     <div className="flex flex-col md:flex-row items-start gap-5">
                        <div className="w-full ">
                            <input className="bg-zinc-200 p-8 w-full rounded-3xl" name="Full_Name" type="text" placeholder="Full Name" />
                        </div>

                         <div className="w-full ">
                            <input className="bg-zinc-200 p-8 w-full rounded-3xl" name="Email" type="email" placeholder="Email Address" />
                        </div>
                    </div>
                    <div >
                        <textarea className="bg-zinc-200 p-8 w-full rounded-3xl" name="Inquiry" id="message" placeholder="Your Message" rows={8}></textarea>
                    </div>
                   </div>
                   
                    <SubmitButton title={"Send Message"} style={"my-2 w-full text-center p-6 font-bold text-lg text-white rounded-3xl bg-green-700 hover:bg-green-900 transition duration-500"}/>
                   
                </form>
            </div>
            </div>
        </div>
    )
}