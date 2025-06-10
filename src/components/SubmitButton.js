"use client"

import { useFormStatus } from "react-dom";

export default function SubmitButton({title , style}) {
  const { pending } = useFormStatus();
  return (
    <button className={style} type="sumbit" disabled={pending}>
      {title}
    </button>
  );
}
