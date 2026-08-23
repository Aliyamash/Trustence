"use client"

import { useFormStatus } from "react-dom";

export default function SubmitButton({ title, loadingTitle = "Sending...", style }) {
  const { pending } = useFormStatus();
  return (
    <button className={style} type="submit" disabled={pending} aria-disabled={pending}>
      {pending ? loadingTitle : title}
    </button>
  );
}
