export default function LegalPage({ title, updated, intro, sections, action, email }) {
  return (
    <div className="gradiant-bg min-h-screen px-4 py-40 text-white">
      <header className="mx-auto mb-12 max-w-4xl text-center"><h1 className="title text-4xl font-bold md:text-6xl">{title}</h1><p className="mt-3 text-base opacity-75 md:text-lg">{updated}</p></header>
      <main className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-black/15 p-6 shadow-2xl backdrop-blur-sm md:p-10">
        <p className="mb-10 text-lg leading-9 text-white/90">{intro}</p>
        <div className="space-y-9">{sections.map((section) => <section key={section.title}><h2 className="mb-4 text-2xl font-bold md:text-3xl">{section.title}</h2>{section.body && <p className="text-lg leading-9 text-white/80">{section.body}</p>}{section.items && <ul className="list-disc space-y-3 ps-6 text-lg leading-8 text-white/80">{section.items.map((item) => <li key={item}>{item}</li>)}</ul>}</section>)}</div>
        <a href={`mailto:${email}`} className="mt-12 inline-block rounded-xl bg-white px-7 py-4 text-lg font-bold text-[#1a3c34] transition hover:-translate-y-0.5 hover:bg-[#fff8ee]">{action}</a>
      </main>
    </div>
  );
}
