"use server";

import { postFetch } from "@/utils/fetch";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitRequest(payload, requiredFields) {
  for (const field of requiredFields) {
    if (!String(payload[field] || "").trim()) {
      return { status: "error", message: "Please fill in all required fields." };
    }
  }
  if (!EMAIL_PATTERN.test(String(payload.Email || "").trim())) {
    return { status: "error", message: "Please enter a valid email address." };
  }
  try {
    const data = await postFetch("/project-request/", payload);
    return { status: "success", message: data?.message || "Your request was received successfully." };
  } catch (error) {
    console.error("Project request failed:", error);
    return { status: "error", message: "We could not send your request. Please try again shortly." };
  }
}
