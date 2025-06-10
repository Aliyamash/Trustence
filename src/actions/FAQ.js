"use server";
import { postFetch } from "@/utils/fetch";

async function faqCreate(state, formData) {
  const Full_Name = formData.get("Full_Name");
  const Email = formData.get("Email");
  const Inquiry = formData.get("Inquiry");
  const form_page = "get_in_touch";

  if (Full_Name === "" || Email === "" || Inquiry === "") {
    return {
      status: "error",
      message: "Please fill in the field.",
    };
  }
  const data = await postFetch('/project-request/' , { Full_Name , Email , Inquiry , form_page})
    
   if (data.status == "200") {
    return {
      status: data.status,
      message: data.message,
    };
  } 
}
export { faqCreate };
