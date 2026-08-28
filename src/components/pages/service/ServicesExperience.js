import Link from "next/link";
import {
  ArrowRight, ArrowUpRight, Bot, Braces, Check, Code2, Megaphone,
  Palette, PenTool, Search, ShieldCheck, Sparkles, Users, Video, Workflow, Zap,
} from "lucide-react";
import DiscoveryForm from "./DiscoverForm";
import { automationUseCases, serviceFaqs, services } from "@/data/services";

const serviceIcons = {
  strategy: PenTool,
  development: Code2,
  automation: Workflow,
  growth: Search,
  brand: Palette,
  content: Video,
};

const workflowSteps = [
  { label: "Trigger", detail: "Form, event or schedule", icon: Zap },
  { label: "Logic", detail: "Rules, AI and approvals", icon: Braces },
  { label: "Tools", detail: "CRM, email, data and APIs", icon: Workflow },
  { label: "Result", detail: "A useful action, automatically", icon: Check },
];

const disciplines = [
  { title: "Engineering", detail: "Software engineers building reliable digital systems.", icon: Code2 },
  { title: "Growth", detail: "Marketing specialists connecting products with the right audience.", icon: Megaphone },
  { title: "Identity", detail: "Design and visual content that make brands recognisable.", icon: Palette },
  { title: "Direction", detail: "Strategic partnership keeping decisions tied to business value.", icon: Users },
];

const process = [
  ["01", "Discover", "We clarify the audience, problem, constraints, and the result worth pursuing."],
  ["02", "Scope", "You receive a focused plan with deliverables, responsibilities, and milestones."],
  ["03", "Design", "We turn strategy into an accessible, distinctive experience and validate the important flows."],
  ["04", "Build & automate", "Development, integrations, and n8n workflows come together as one tested system."],
  ["05", "Launch & improve", "We hand over clearly, monitor the essentials, and prioritise the next useful improvement."],
];

const engagementModels = [
  { eyebrow: "Defined outcome", title: "Project delivery", description: "A complete website, product, identity, or digital experience delivered through clear milestones." },
  { eyebrow: "Focused improvement", title: "Automation sprint", description: "Map one high-value process, build the workflow, test edge cases, and document the handover." },
  { eyebrow: "Continuous progress", title: "Growth partnership", description: "Ongoing design, engineering, content, and optimisation for teams that need steady momentum." },
];

export default function ServicesExperience() {
  return (
    <main className="overflow-hidden bg-[#07120c] text-[#fff8ee]">
      <section className="relative border-b border-white/10 px-5 pb-24 pt-40 md:px-10 md:pb-32 md:pt-56" aria-labelledby="services-title">
        <div className="pointer-events-none absolute inset-0 opacity-70" style={{ backgroundImage: "radial-gradient(circle at 14% 18%, rgba(101,134,114,.35), transparent 29%), radial-gradient(circle at 82% 16%, rgba(203,167,146,.19), transparent 25%)" }} />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-end gap-14 lg:grid-cols-[1fr_23rem]">
            <div>
              <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#cba792]/30 bg-[#cba792]/10 px-4 py-2 text-xs font-bold uppercase tracking-[.22em] text-[#e6c9b6]">
                <Sparkles className="h-4 w-4" /> Capabilities · Europe & worldwide
              </p>
              <h1 id="services-title" className="title max-w-5xl text-5xl font-semibold leading-[1.03] md:text-7xl lg:text-[6rem]">
                Bespoke digital systems, designed to work <span className="text-[#86a58f]">beautifully.</span>
              </h1>
            </div>
            <div className="border-l border-white/15 pl-6 lg:mb-2">
              <p className="text-lg leading-8 text-white/65">Strategy, design, software engineering, automation, and growth—brought together with the focus and care of one boutique team.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/discovery" className="inline-flex items-center gap-2 rounded-xl bg-[#fff8ee] px-5 py-3.5 font-semibold text-[#07120c] transition hover:-translate-y-0.5 hover:bg-white">Start a project <ArrowUpRight className="h-4 w-4" /></Link>
                <Link href="/projects" className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3.5 font-semibold text-white/75 transition hover:border-[#86a58f] hover:text-white">See our work <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </div>
          </div>
          <ul className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3" aria-label="How we work">
            {["Strategy before execution", "Craft without compromise", "Built for ownership"].map((item) => (
              <li key={item} className="flex items-center gap-3 bg-[#0b1911] px-5 py-4 text-sm text-white/70"><Check className="h-4 w-4 text-[#86a58f]" /> {item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-5 py-24 md:px-10 md:py-36" aria-labelledby="capabilities-title">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 grid gap-6 md:grid-cols-2 md:items-end">
            <div><p className="mb-4 text-xs font-bold uppercase tracking-[.24em] text-[#cba792]">The complete digital experience</p><h2 id="capabilities-title" className="title text-4xl font-semibold leading-tight md:text-6xl">One ambition. Every discipline it deserves.</h2></div>
            <p className="max-w-xl text-lg leading-8 text-white/55 md:justify-self-end">Engage a focused specialist capability or bring the disciplines together as one coherent team. The scope is shaped around value, not a predetermined package.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = serviceIcons[service.icon];
              return (
                <article key={service.number} className={`group flex min-h-[27rem] flex-col justify-between rounded-[2rem] border p-7 transition duration-500 hover:-translate-y-1 md:p-9 ${service.featured ? "border-[#86a58f]/45 bg-[#123321]" : "border-white/10 bg-[#0c1e14] hover:border-white/20"}`}>
                  <div>
                    <div className="flex items-center justify-between"><span className="font-mono text-xs tracking-[.24em] text-white/35">SERVICE {service.number}</span><span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/5 text-[#cba792] transition group-hover:rotate-3 group-hover:bg-[#fff8ee] group-hover:text-[#114422]"><Icon className="h-5 w-5" /></span></div>
                    <h3 className="title mt-12 text-3xl font-semibold leading-tight">{service.title}</h3>
                    <p className="mt-5 leading-7 text-white/55">{service.description}</p>
                  </div>
                  <ul className="mt-10 space-y-3 border-t border-white/10 pt-6">
                    {service.capabilities.map((capability) => <li key={capability} className="flex items-center gap-3 text-sm text-white/70"><span className="h-1.5 w-1.5 rounded-full bg-[#86a58f]" /> {capability}</li>)}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 md:px-10 md:pb-36" aria-labelledby="automation-title">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#fff8ee] text-[#07120c]">
          <div className="grid lg:grid-cols-[.92fr_1.08fr]">
            <div className="relative overflow-hidden bg-[#153c27] p-7 text-white md:p-12 lg:p-16">
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" /><div className="absolute -right-10 -top-10 h-44 w-44 rounded-full border border-white/10" />
              <p className="relative mb-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.24em] text-[#cba792]"><Bot className="h-4 w-4" /> n8n automation studio</p>
              <h2 id="automation-title" className="title relative text-4xl font-semibold leading-tight md:text-6xl">Intelligent operations, without unnecessary friction.</h2>
              <p className="relative mt-7 max-w-xl text-lg leading-8 text-white/65">We design n8n workflows around the way your organisation actually works—from a single lead flow to connected operations across teams.</p>
              <div className="relative mt-12 space-y-3">
                {workflowSteps.map((step, index) => {
                  const Icon = step.icon;
                  return <div key={step.label} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/10 p-4 backdrop-blur"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-[#cba792]"><Icon className="h-5 w-5" /></span><div className="min-w-0 flex-1"><p className="font-semibold">{step.label}</p><p className="truncate text-sm text-white/50">{step.detail}</p></div><span className="font-mono text-xs text-white/30">0{index + 1}</span></div>;
                })}
              </div>
            </div>
            <div className="p-7 md:p-12 lg:p-16">
              <div className="grid gap-4 sm:grid-cols-2">
                {automationUseCases.map((useCase, index) => <article key={useCase.title} className="rounded-2xl border border-[#07120c]/10 bg-white/45 p-6"><span className="font-mono text-xs text-[#245336]">0{index + 1}</span><h3 className="mt-5 text-xl font-bold">{useCase.title}</h3><p className="mt-3 text-sm leading-6 text-[#07120c]/60">{useCase.description}</p></article>)}
              </div>
              <div className="mt-8 rounded-2xl border border-[#245336]/20 bg-[#e9efe8] p-6"><p className="flex items-center gap-2 font-bold text-[#114422]"><ShieldCheck className="h-5 w-5" /> Designed for responsible ownership</p><p className="mt-3 leading-7 text-[#07120c]/60">Hosting choice, least-privilege credentials, clear failure paths, and documented handover are considered from the start—not added after launch.</p></div>
              <Link href="/discovery" className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#114422] px-6 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#07120c]">Explore an automation <ArrowUpRight className="h-5 w-5" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0a1710] px-5 py-24 md:px-10 md:py-32" aria-labelledby="team-title">
        <div className="mx-auto max-w-7xl"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div><p className="mb-4 text-xs font-bold uppercase tracking-[.24em] text-[#cba792]">A boutique multidisciplinary team</p><h2 id="team-title" className="title text-4xl font-semibold leading-tight md:text-6xl">Specialist minds. One exacting standard.</h2><p className="mt-6 max-w-lg text-lg leading-8 text-white/55">Your website, software, automation, brand, and marketing should reinforce each other. Our structure makes that coherence part of the process.</p></div>
          <div className="grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 sm:grid-cols-2">
            {disciplines.map((discipline) => { const Icon = discipline.icon; return <article key={discipline.title} className="bg-[#0c1e14] p-7 md:p-9"><Icon className="h-6 w-6 text-[#86a58f]" /><h3 className="mt-8 text-xl font-bold">{discipline.title}</h3><p className="mt-3 leading-7 text-white/50">{discipline.detail}</p></article>; })}
          </div>
        </div></div>
      </section>

      <section className="px-5 py-24 md:px-10 md:py-36" aria-labelledby="process-title">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl"><p className="mb-4 text-xs font-bold uppercase tracking-[.24em] text-[#cba792]">A composed collaboration</p><h2 id="process-title" className="title text-4xl font-semibold leading-tight md:text-6xl">From ambition to a system you are proud to own.</h2></div>
          <ol className="border-t border-white/15">{process.map(([number, title, detail]) => <li key={number} className="grid gap-4 border-b border-white/10 py-7 transition hover:bg-white/[.025] md:grid-cols-[6rem_15rem_1fr] md:items-center md:px-5"><span className="font-mono text-sm text-[#86a58f]">{number}</span><h3 className="text-xl font-bold">{title}</h3><p className="max-w-2xl leading-7 text-white/50">{detail}</p></li>)}</ol>
        </div>
      </section>

      <section className="bg-[#fff8ee] px-5 py-24 text-[#07120c] md:px-10 md:py-32" aria-labelledby="engagement-title">
        <div className="mx-auto max-w-7xl"><div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr]">
          <div><p className="mb-4 text-xs font-bold uppercase tracking-[.24em] text-[#245336]">Ways to work together</p><h2 id="engagement-title" className="title text-4xl font-semibold leading-tight md:text-6xl">The right shape for the work.</h2></div>
          <div className="grid gap-4 md:grid-cols-3">{engagementModels.map((model) => <article key={model.title} className="flex min-h-[21rem] flex-col justify-between rounded-[1.75rem] border border-[#07120c]/10 bg-white/55 p-6"><p className="text-xs font-bold uppercase tracking-[.18em] text-[#245336]">{model.eyebrow}</p><div><h3 className="text-2xl font-bold">{model.title}</h3><p className="mt-4 leading-7 text-[#07120c]/60">{model.description}</p></div></article>)}</div>
        </div></div>
      </section>

      <section className="px-5 py-24 md:px-10 md:py-32" aria-labelledby="faq-title">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <div><p className="mb-4 text-xs font-bold uppercase tracking-[.24em] text-[#cba792]">Useful answers</p><h2 id="faq-title" className="title text-4xl font-semibold leading-tight md:text-6xl">Before we begin.</h2></div>
          <div className="border-t border-white/15">{serviceFaqs.map((faq, index) => <details key={faq.question} className="group border-b border-white/10 py-2"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6 text-lg font-semibold marker:content-none"><span><span className="mr-4 font-mono text-xs text-[#86a58f]">0{index + 1}</span>{faq.question}</span><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/15 text-xl text-white/60 transition group-open:rotate-45">+</span></summary><p className="max-w-2xl pb-7 pl-10 leading-8 text-white/55">{faq.answer}</p></details>)}</div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#0c1e14] px-5 py-20 md:px-10 md:py-28" aria-label="Request a project consultation">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-28"><p className="mb-4 text-xs font-bold uppercase tracking-[.24em] text-[#cba792]">A conversation worth having</p><h2 className="title text-4xl font-semibold leading-tight md:text-6xl">Let’s define the right next move.</h2><p className="mt-6 max-w-lg text-lg leading-8 text-white/55">Share the outcome, the current tools, or the process that should feel more capable. We will begin with the questions that make the investment clearer.</p></div>
          <DiscoveryForm />
        </div>
      </section>
    </main>
  );
}
