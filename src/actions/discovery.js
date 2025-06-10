"use server";

import { postFetch } from "@/utils/fetch";

async function formDiscover(state, formData) {
  const Full_Name = formData.get("Full_Name");
  const Email = formData.get("Email");
  const Phone_Number = formData.get("Phone_Number");
  const Inquiry = formData.get("Inquiry");
  const form_page = "discovery_section";


  
  if (
    Full_Name === "" ||
    Email === "" ||
    Inquiry === "" ||
    Phone_Number === "" 
  ) {
    return {
      status: "error",
      message: "Please fill in the field.",
    };
  }

  const data = await postFetch("/project-request/", {
    Full_Name,
    Email,
    Phone_Number,
    Inquiry,
    form_page,
  });    
   if (data.status == "200") {
    return {
      status: data.status,
      message: data.message,
    };
  } 
}
export { formDiscover };
