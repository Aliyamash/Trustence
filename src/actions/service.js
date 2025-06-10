"use server";

import { postFetch } from "@/utils/fetch";

async function serviceCreate(state, formData) {
  const Full_Name = formData.get("Full_Name");
  const Email = formData.get("Email");
  const Phone_Number = formData.get("Phone_Number");
  const Select_Service = formData.get("Select_Service");
  const Budget_Range = formData.get("Budget_Range");
  const Inquiry = formData.get("Inquiry");
  const form_page = "service";


  
  if (
    Full_Name === "" ||
    Email === "" ||
    Inquiry === "" ||
    Phone_Number === "" ||
    Select_Service === '' ||
    Budget_Range === ""
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
    Select_Service,
    Budget_Range,
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
export { serviceCreate };
