"use client";
import { getFaqs } from "@/components/FaqsOptions";
import { getCategories } from "@/components/IconsFAQ";
import FilterFaq from "@/components/FilterFaq";
import QuestionFAQ from "@/components/QuestionsFAQ";
import { useEffect, useState } from "react";
import { useLocale } from "@/i18n/LocaleProvider";

export default function QuestionFaq() {
  const { locale } = useLocale();
  const faqs = getFaqs(locale);
  const categories = getCategories(locale);
  const [item, setItem] = useState(faqs);
  const [activeCategory ,  setActiveCategory] = useState("")
  const filterItems = (category) => {
    const newItems = faqs.filter((newval) => newval.category === category);
    setItem(newItems);
     setActiveCategory(category);
  };

  useEffect(() => { setItem(faqs); setActiveCategory(""); }, [locale]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className=" bg-transparent pb-24">
      <div className="container">
        
          <div className=" mb-24">
          <FilterFaq
          activeCategory={activeCategory}
            faqItems={categories}
            filterItems={filterItems}
            setItem={setItem}
          />
        </div>
        

        <div className=" shadow-faq bg-white mx-auto rounded-2xl p-4">
          <QuestionFAQ faqs={item} />
        </div>

      </div>
    </div>
  );
}
