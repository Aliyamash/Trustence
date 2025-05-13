"use client"
import { useState } from "react";

export default function QuestionFAQ({ faqs }) {
  const [openId, setOpenId] = useState(null); // برای ذخیره کردن ID سوال باز شده

  const handleClick = (id) => {
    setOpenId(openId === id ? null : id); // اگر همون سوال کلیک شد، اون رو ببند، وگرنه باز کن
  };

  return (
    <>
      {faqs.map((faq) =>{
         if (!faq.id) return null;
       return(
        
        <div className="p-5 text-left" key={faq.id}>
          <h1
            className="text-xl mb-1 cursor-pointer select-none"
            onClick={() => handleClick(faq.id)} // وقتی کلیک شد، سوال رو باز یا بسته می‌کنیم
          >
            {faq.question}
          </h1>
          {/* فقط وقتی openId برابر با faq.id بود، جواب رو نشون می‌دهیم */}
          {openId === faq.id && (
            <p>{faq.answer}</p>
          )}
        </div>
      )}
      )}
    </>
  );
}

