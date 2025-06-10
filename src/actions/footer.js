"use server";

import { postFetch } from "@/utils/fetch";

async function create(state, formData) {
  const Email = formData.get("Email");
  const form_page = "footer";

  if (Email === "") {
    return {
      status: "error",
      message: "Please fill in the field.",
    };
  }

  const data = await postFetch("/project-request/", { Email, form_page });
  if (data.status == "200") {
    return {
      status: data.status,
      message: data.message,
    };
  } 
}
export { create };
