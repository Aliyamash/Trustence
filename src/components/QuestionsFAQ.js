"use client";
import { CircleChevronDown, CircleChevronUp } from "lucide-react";
import { useState } from "react";

export default function QuestionFAQ({ faqs }) {
  const [openId, setOpenId] = useState(null);

  const handleClick = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      {faqs.map((faq) => {
        const isOpen = openId === faq.id;
        return (
          <div
            className="my-4 text-left bg-zinc-50 py-8 px-6 rounded-3xl shadow-lg"
            key={faq.id}
          >
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-xl font-bold select-none">
                <button
                type="button"
                className="text-left"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${faq.id}`}
                onClick={() => handleClick(faq.id)}
              >
                {faq.question}
                </button>
              </h2>
              <button
                type="button"
                aria-label={isOpen ? "Collapse answer" : "Expand answer"}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${faq.id}`}
                className="cursor-pointer"
                onClick={() => handleClick(faq.id)}
              >
                {isOpen ? (
                  <CircleChevronUp className="icon-question-faq-up" />
                ) : (
                  <CircleChevronDown className="icon-question-faq-down" />
                )}
              </button>
            </div>

              <p id={`faq-answer-${faq.id}`} hidden={!isOpen} className="text-zinc-500 select-none mt-4 font-bold pl-2">
                {faq.answer}
              </p>
          </div>
        );
      })}
    </>
  );
}
