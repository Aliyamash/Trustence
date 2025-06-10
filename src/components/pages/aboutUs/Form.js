"use client";
import { aboutCreate } from "@/actions/about";
import SubmitButton from "@/components/SubmitButton";
import { getFetch } from "@/utils/fetch";
import { useRef, useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";

export default function Form() {
  const [state, aboutFormAction] = useFormState(aboutCreate);
  const [formField , setFormField] = useState([]);
  const formRef = useRef(null);

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
    if (state?.status === "error") {
      toast.error(state.message);
    } else {
      toast.success(state.message);
      formRef.current?.reset();
    }
  }, [state]);
  return (
    <>
      <div className="text-white">
        <form ref={formRef} action={aboutFormAction}>
          {formField.map((field) => {
            if (!field.is_active) return null;

            switch (field.input_type) {
              case "text":
                return (
                  <div key={field.input} className="mb-8">
                    <label className="block text-sm -ml-1 mb-2">
                      {field.input.replace("_", " ")}
                    </label>
                    <input
                      type="text"
                      name={field.input}
                      className="w-full lg:w-[30rem] bg-[#1a221d] rounded-lg px-4 py-2"
                    />
                  </div>
                );
              case "textarea":
                return (
                  <div key={field.input} className="mb-8">
                    <label className="block text-sm -ml-1 mb-2">
                      {field.input.replace("_", " ")}
                    </label>
                    <textarea
                      name={field.input}
                      className="w-full lg:w-[30rem] bg-[#1a221d] rounded-lg p-3"
                      rows={10}
                    />
                  </div>
                );
              case "checkbox":
                return (
                  <label key={field.input} className="custom-checkbox text-sm">
                    <input type="checkbox" name={field.input} required />
                    <span className="checkmark"></span>I agree to the Terms
                  </label>
                );
              default:
                return null;
            }
          })}

          <SubmitButton
            title="Send"
            style="text-sm block my-8 transition duration-500 service-container bg-btn w-fit px-8 py-2 rounded-xl items-center"
          />
        </form>
      </div>
    </>
  );
}
