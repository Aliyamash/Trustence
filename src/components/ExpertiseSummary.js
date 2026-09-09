"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { getCopy } from "@/i18n/copy";

export default function ExpertiseSummary() {
  const { locale } = useLocale();
  const content = getCopy(locale).home.expertise;
  return (
    <section className="bg-white py-24" aria-labelledby="what-trustence-does">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 font-semibold uppercase tracking-[0.18em] text-[#245336]">{content.eyebrow}</p>
          <h2 id="what-trustence-does" className="title text-3xl font-bold text-[#060e09] md:text-5xl">
            {content.title}
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-700">
            {content.body}
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {content.items.map(([title, description]) => (
            <article key={title} className="rounded-3xl border border-[#245336]/15 bg-[#fff8ee] p-7">
              <h3 className="title text-xl font-bold text-[#114422]">{title}</h3>
              <p className="mt-4 leading-7 text-zinc-700">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
