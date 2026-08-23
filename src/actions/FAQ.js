"use server";
import { submitRequest } from "./submitRequest";

async function faqCreate(_state, formData) {
  return submitRequest({ Full_Name: formData.get("Full_Name"), Email: formData.get("Email"), Inquiry: formData.get("Inquiry"), form_page: "faq" }, ["Full_Name", "Email", "Inquiry"]);
}
export { faqCreate };
