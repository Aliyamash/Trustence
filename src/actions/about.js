"use server";
import { submitRequest } from "./submitRequest";

async function aboutCreate(_state, formData) {
  const details = [
    ["Company", formData.get("Company")],
    ["Service", formData.get("Service")],
    ["Budget", formData.get("Budget")],
    ["Timeline", formData.get("Timeline")],
  ].filter(([, value]) => String(value || "").trim()).map(([label, value]) => `${label}: ${value}`).join("\n");
  const message = String(formData.get("Inquiry") || "").trim();
  const payload = { Full_Name: formData.get("Full_Name"), Email: formData.get("Email"), Inquiry: `${details}${details ? "\n\n" : ""}${message}`, Agree_terms: Boolean(formData.get("Agree_terms")), form_page: "get_in_touch" };
  if (!payload.Agree_terms) return { status: "error", message: "Please accept the Terms and Privacy Policy." };
  return submitRequest(payload, ["Full_Name", "Email", "Inquiry"]);
}
export { aboutCreate };
