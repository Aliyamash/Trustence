"use server";
import { submitRequest } from "./submitRequest";

async function serviceCreate(_state, formData) {
  const payload = { Full_Name: formData.get("Full_Name"), Email: formData.get("Email"), Phone_Number: formData.get("Phone_Number"), Select_Service: formData.get("Select_Service"), Budget_Range: formData.get("Budget_Range"), Inquiry: formData.get("Inquiry"), form_page: "service" };
  return submitRequest(payload, ["Full_Name", "Email", "Phone_Number", "Select_Service", "Budget_Range", "Inquiry"]);
}
export { serviceCreate };
