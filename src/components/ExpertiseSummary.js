const capabilities = [
  {
    title: "Digital direction",
    description: "We define the audience, commercial objective, user journey, and technical priorities before a single interface is designed.",
  },
  {
    title: "Bespoke web experiences",
    description: "We design and engineer distinctive, accessible websites and platforms with purposeful interaction and maintainable technology.",
  },
  {
    title: "Automation and integration",
    description: "We connect forms, CRMs, APIs, data, and internal tools through carefully designed n8n workflows and custom integrations.",
  },
  {
    title: "Visibility and growth",
    description: "We strengthen discoverability with technical SEO, structured content, performance, analytics, and considered post-launch improvement.",
  },
];

export default function ExpertiseSummary() {
  return (
    <section className="bg-white py-24" aria-labelledby="what-trustence-does">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 font-semibold uppercase tracking-[0.18em] text-[#245336]">A boutique digital practice</p>
          <h2 id="what-trustence-does" className="title text-3xl font-bold text-[#060e09] md:text-5xl">
            One team for the complete digital experience.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-700">
            Trustence brings strategy, design, software engineering, automation, search, and visual communication into one considered process—giving ambitious organisations fewer handovers and a more coherent result.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
