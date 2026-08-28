"use client";

import { serviceCreate } from "@/actions/service";
import { Headset } from "lucide-react";
import { useActionState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import SubmitButton from "@/components/SubmitButton";

const fieldClass = "mt-2 w-full rounded-xl border border-[#07120c]/15 bg-white/60 p-3.5 outline-none transition placeholder:text-[#07120c]/30 focus:border-[#245336] focus:ring-2 focus:ring-[#245336]/15";
const labelClass = "block text-sm font-semibold text-[#07120c]/75";

export default function DiscoveryForm() {
  const [state, formServiceAction] = useActionState(serviceCreate, null);
  const formRef = useRef(null);

  useEffect(() => {
    if (!state) return;
    if (state?.status === "error") toast.error(state.message);
    else {
      toast.success(state.message);
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <div className="w-full rounded-[2rem] border border-white/10 bg-[#fff8ee] p-6 text-[#07120c] shadow-2xl shadow-black/20 md:p-10" id="formDiscovery">
      <div className="mb-8 border-b border-[#07120c]/10 pb-7">
        <p className="text-xs font-bold uppercase tracking-[.2em] text-[#245336]">Project enquiry</p>
        <h3 className="title mt-3 text-3xl font-semibold md:text-4xl">Request a discovery session</h3>
        <p className="mt-3 leading-7 text-[#07120c]/60">Tell us enough to prepare a useful first conversation.</p>
      </div>

      <form ref={formRef} action={formServiceAction} className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className={labelClass} htmlFor="service-name">Full name</label>
            <input id="service-name" type="text" name="Full_Name" className={fieldClass} placeholder="John Doe" autoComplete="name" required />
          </div>
          <div>
            <label className={labelClass} htmlFor="service-email">Email address</label>
            <input id="service-email" type="email" name="Email" className={fieldClass} placeholder="john@example.com" autoComplete="email" required />
          </div>
        </div>
        <div>
          <label className={labelClass} htmlFor="service-phone">Phone number</label>
          <input id="service-phone" type="tel" name="Phone_Number" className={fieldClass} placeholder="+41 00 000 00 00" autoComplete="tel" required />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className={labelClass} htmlFor="service-type">What can we help with?</label>
            <select id="service-type" name="Select_Service" className={fieldClass} defaultValue="" required>
              <option value="" disabled>Choose a service</option>
              <option value="Strategy and UX">Strategy & UX</option>
              <option value="Web Design and Development">Web design & development</option>
              <option value="n8n and Workflow Automation">n8n & workflow automation</option>
              <option value="SEO and Growth">SEO, performance & growth</option>
              <option value="Brand and Visual Design">Brand & visual design</option>
              <option value="Marketing and Content">Marketing & visual content</option>
              <option value="Other">Other or multidisciplinary</option>
            </select>
          </div>
          <div>
            <label className={labelClass} htmlFor="service-budget">Indicative budget</label>
            <select id="service-budget" name="Budget_Range" className={fieldClass} defaultValue="" required>
              <option value="" disabled>Select a range</option>
              <option value="Under EUR 3000">Under €3,000</option>
              <option value="EUR 3000 - EUR 7500">€3,000 – €7,500</option>
              <option value="EUR 7500 - EUR 15000">€7,500 – €15,000</option>
              <option value="EUR 15000+">€15,000+</option>
              <option value="Not decided">Not decided yet</option>
            </select>
          </div>
        </div>
        <div>
          <label className={labelClass} htmlFor="service-brief">Project brief</label>
          <textarea id="service-brief" name="Inquiry" rows="5" className={fieldClass} placeholder="What should change, and what would a good result look like?" required />
        </div>
        <SubmitButton title="Request session" loadingTitle="Sending..." style="w-full rounded-xl bg-[#114422] py-4 font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#07120c] disabled:opacity-60" />
        <div className="flex items-center justify-center gap-2 text-[#07120c]/45"><p className="text-center text-xs">We usually respond within one business day</p><Headset className="h-4 w-4" /></div>
      </form>
    </div>
  );
}
