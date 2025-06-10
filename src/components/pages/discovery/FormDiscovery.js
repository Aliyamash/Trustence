"use client";

import { formDiscover } from "@/actions/discovery";
import SubmitButton from "@/components/SubmitButton";
import { getFetch } from "@/utils/fetch";
import { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";

export default function FormDiscovery() {
  const [state, formDiscoveryAction] = useFormState(formDiscover);
  const [formField, setFormField] = useState([]);
  const formRef = useRef(null);

  useEffect(() => {
    const fetchFields = async () => {
      try {
        const data = await getFetch("/project-request-form/discovery_section");
        setFormField(data);
      } catch (err) {
        console.error("Error fetching fields:", err);
      }
    };

    fetchFields();
  }, []);

  useEffect(() => {
    if (!state) return;
    if (state?.status === "error") {
      toast.error(state.message);
    } else {
      toast.success(state.message);
      formRef.current?.reset();
    }
  }, [state]);
  return (
    <div className="relative container pb-44 space-y-16" id="formDiscover">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#fff8ee] via-white to-[#fff8ee] opacity-60"></div>

      <section className="space-y-8">
        <h2 className="text-4xl font-bold text-center text-green-500">
          Discovery Session Steps
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl shadow-md p-6 hover:scale-105 transition-transform border border-[#1C422B] bg-white space-y-2">
            <div className="text-4xl">📝</div>
            <h3 className="text-xl font-semibold text-[#1C422B]">
              1. Submit the Form
            </h3>
            <p className="text-sm text-muted-foreground">
              Fill out the form below to give us initial info about your
              project.
            </p>
          </div>

          <div className="rounded-2xl shadow-md p-6 hover:scale-105 transition-transform border border-[#1C422B] bg-white space-y-2">
            <div className="text-4xl">🎥</div>
            <h3 className="text-xl font-semibold text-[#1C422B]">
              2. Video Call
            </h3>
            <p className="text-sm text-muted-foreground">
              We'll have a 30-minute call to dive deeper into your goals.
            </p>
          </div>

          <div className="rounded-2xl shadow-md p-6 hover:scale-105 transition-transform border border-[#1C422B] bg-white space-y-2">
            <div className="text-4xl">📄</div>
            <h3 className="text-xl font-semibold text-[#1C422B]">
              3. Get Your Proposal
            </h3>
            <p className="text-sm text-muted-foreground">
              You'll receive a tailored proposal and project timeline.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-4xl font-bold text-center text-green-500">
          Book Your Free Discovery Session
        </h2>
        <form
          ref={formRef}
          action={formDiscoveryAction}
          className="space-y-4 max-w-xl mx-auto bg-[#fff8ee] p-8 rounded-2xl shadow-md"
        >
        {formField.map((field) => {
  if (!field.is_active) return null;

  const placeholder = field.input.replace("_", " ");
  const commonProps = {
    name: field.input,
    placeholder,
    className: "w-full p-3 rounded-md border border-gray-300",
  };

  return (
    <div key={field.input} className="mb-4">
      {field.input_type === "textarea" ? (
        <textarea {...commonProps} rows={4} />
      ) : (
        <input type="text" {...commonProps} />
      )}
    </div>
  );
})}

          <SubmitButton
            title={"Book Session"}
            style={
              "w-full text-lg py-3 rounded-2xl bg-[#1C422B] hover:bg-[#173520] text-white"
            }
          />
        </form>
      </section>
    </div>
  );
}
