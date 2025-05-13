"use client";
import { faqs } from "@/components/FaqsOptions";
import { categories } from "@/components/IconsFAQ";
import FilterFaq from "@/components/FilterFaq";
import QuestionFAQ from "@/components/QuestionsFAQ";
import { useState } from "react";

export default function QuestionFaq() {
  const [item, setItem] = useState(faqs);
  const [activeCategory ,  setActiveCategory] = useState("")
  const filterItems = (category) => {
    const newItems = faqs.filter((newval) => newval.category === category);
    setItem(newItems);
     setActiveCategory(category);
  };

  return (
    <div className="bg-transparent pb-44">
      <div className="container">
        <div className="mb-24">
          <FilterFaq
          activeCategory={activeCategory}
            faqItems={categories}
            filterItems={filterItems}
            setItem={setItem}
          />
        </div>

        <div className="w-4/5 shadow-faq bg-zinc-200 mx-auto rounded-2xl p-4">
          <QuestionFAQ faqs={item} />
        </div>

      </div>
    </div>
  );
}
