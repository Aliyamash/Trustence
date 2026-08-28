const capabilities = [
  {
    title: "Strategy and UX",
    description: "We clarify business goals, user needs, content structure, and the conversion path before design begins.",
  },
  {
    title: "Design and development",
    description: "We create responsive, accessible websites with purposeful interactions and maintainable technology.",
  },
  {
    title: "Search and performance",
    description: "We build in technical SEO, structured content, fast delivery, analytics, and post-launch improvement.",
  },
];

export default function ExpertiseSummary() {
  return (
    <section className="bg-white py-24" aria-labelledby="what-trustence-does">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 font-semibold uppercase tracking-[0.18em] text-[#245336]">Digital agency expertise</p>
          <h2 id="what-trustence-does" className="title text-3xl font-bold text-[#060e09] md:text-5xl">
            What does Trustence do?
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-700">
            Trustence is a web design and development agency that turns business goals into clear, credible, and high-performing digital experiences—from discovery and UX to launch and ongoing support.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {capabilities.map((capability) => (
            <article key={capability.title} className="rounded-3xl border border-[#245336]/15 bg-[#fff8ee] p-7">
              <h3 className="title text-xl font-bold text-[#114422]">{capability.title}</h3>
              <p className="mt-4 leading-7 text-zinc-700">{capability.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
