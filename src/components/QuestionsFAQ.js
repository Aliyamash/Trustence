"use client"
import { CircleChevronDown, CircleChevronUp } from "lucide-react";
import { useState } from "react";

export default function QuestionFAQ({ faqs }) {
  const [openId, setOpenId] = useState(null); 


 
  const handleClick = (id) => {
 setOpenId(openId === id ? null : id);
  };

  return (
    <>
      {faqs.map((faq) =>{
         if (!faq.id) return null;
        const isOpen = openId === faq.id;
       return(
        
        <div className=" my-4 text-left bg-zinc-50 py-8 px-6 rounded-3xl shadow-lg" key={faq.id}>
          <div className="flex items-center justify-between ">
            <h1
            className="text-xl font-bold cursor-pointer select-none"
            onClick={() => handleClick(faq.id)} 
          >
            {faq.question}
          </h1>
          <div className="cursor-pointer" onClick={() => handleClick(faq.id)}>
            {isOpen ? (<CircleChevronUp className="icon-question-faq-up" />) : (<CircleChevronDown className="icon-question-faq-down"/>)}
          </div>
          </div>
          
          {openId === faq.id && (
            <p className="text-zinc-500 select-none mt-4 font-bold pl-2">{faq.answer}</p>
          )}
        </div>
      )}
      )}
    </>
  );
}

