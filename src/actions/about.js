"use server";
import { submitRequest } from "./submitRequest";

async function aboutCreate(_state, formData) {
  const payload = { Full_Name: formData.get("Full_Name"), Email: formData.get("Email"), Inquiry: formData.get("Inquiry"), Agree_terms: Boolean(formData.get("Agree_terms")), form_page: "get_in_touch" };
  if (!payload.Agree_terms) return { status: "error", message: "Please accept the Terms and Privacy Policy." };
  return submitRequest(payload, ["Full_Name", "Email", "Inquiry"]);
}
export { aboutCreate };
