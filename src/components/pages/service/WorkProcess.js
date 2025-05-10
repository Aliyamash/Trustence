"use client"
import { motion } from "framer-motion";
import { Phone, FileText, Paintbrush, RefreshCw, Rocket } from "lucide-react";

export default function ProcessTimeline() {
  const steps = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Discovery Call",
      desc: "We understand your needs and goals.",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Proposal & Agreement",
      desc: "We send a clear offer and timeline.",
    },
    {
      icon: <Paintbrush className="w-6 h-6" />,
      title: "Design & Development",
      desc: "We craft your website with precision.",
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Review & Feedback",
      desc: "You review and we refine.",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Launch & Support",
      desc: "We go live and support you after launch.",
    },
  ];

  return (
    <section className="py-44 bg-[#fff8ee]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[#060e09] mb-16">
          Our Simple, Transparent Process
        </h2>

        <div className="relative flex flex-col md:flex-row justify-between items-center gap-16 md:gap-0">

          {/* Timeline Line */}
          <div className="absolute w-1 md:w-full h-[50rem] md:h-1 bg-[#1C422B] opacity-20 top-0 left-1/2 transform -translate-x-1/2 md:translate-y-0 md:top-1/4 md:left-0 md:translate-x-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center max-w-xs relative z-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#1C422B] text-white p-5 rounded-full mb-4 flex items-center justify-center">
                {step.icon}
              </div>
              <h3 className="font-bold text-xl mb-2">{step.title}</h3>
              <p className="text-zinc-600 w-4/5 mx-auto">{step.desc}</p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
