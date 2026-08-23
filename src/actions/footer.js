"use server";
import { submitRequest } from "./submitRequest";

async function create(_state, formData) {
  return submitRequest({ Email: formData.get("Email"), form_page: "footer" }, ["Email"]);
}
export { create };
