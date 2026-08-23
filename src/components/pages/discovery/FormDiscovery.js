// components/FormDiscovery.jsx
"use client";

import { formDiscover } from "@/actions/discovery";
import SubmitButton from "@/components/SubmitButton";
import { useActionState, useRef, useEffect } from "react";
import { toast } from "react-toastify";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function FormDiscovery() {
  const [state, formDiscoveryAction] = useActionState(formDiscover, null);
  const formRef = useRef(null);
  const containerRef = useRef(null);

  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const fields = containerRef.current.querySelectorAll(".form-field");
      const steps = containerRef.current.querySelectorAll(".step-card");

      gsap.set([fields, steps], { y: 50, opacity: 0 });

      // مرحله‌ها
      gsap.to(steps, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      // فیلدها
      gsap.to(fields, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 85%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  // Toast و Reset
  useEffect(() => {
    if (!state) return; 
    if(state?.status === 'error'){
      toast.error(state.message)
    }else{
      toast.success(state.message);
      formRef.current?.reset();
    }
  },[state])


  const gradientText = {
    backgroundImage: "linear-gradient(to right, #1C422B, #658672)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    color: "transparent",
    display: "inline-block",
  };

  return (
    <div ref={containerRef} className="relative container pb-44 space-y-20" id="formDiscover">
      {/* پس‌زمینه گرادیان */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#fff8ee] via-white to-[#fff8ee] opacity-70"></div>

      {/* مرحله‌ها */}
      <section className="space-y-10 text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-center text-[#46c972]" >
          Discovery Session Steps
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { icon: "📝", title: "1. Submit the Form", desc: "Fill out the form below to give us initial info about your project." },
            { icon: "🎥", title: "2. Video Call", desc: "We'll have a 30-minute call to dive deeper into your goals." },
            { icon: "📄", title: "3. Get Your Proposal", desc: "You'll receive a tailored proposal and project timeline." },
          ].map((step, i) => (
            <div
              key={i}
              className="step-card group relative p-8 rounded-3xl bg-white border border-[#e8e8e8] shadow-lg hover:shadow-2xl hover:shadow-[#658672]/10 transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#1C422B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="text-5xl mb-4">{step.icon}</div>
              <h3 className="text-2xl font-bold text-[#1C422B] mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* فرم */}
      <section className="max-w-2xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-12 text-[#46c972]" >
          Book Your Free Discovery Session
        </h2>

        <form
          ref={formRef}
          action={formDiscoveryAction}
          className="bg-white/90 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-[#e8e8e8] space-y-8"
        >
          {/* نام کامل */}
          <div className="form-field">
            <label className="block text-sm font-medium text-[#1C422B] mb-2">Full Name</label>
            <input
              type="text"
              name="Full_Name"
              required
              placeholder="John Doe"
              className="w-full px-5 py-4 rounded-xl outline-none border border-[#d0d0d0] focus:border-[#658672] focus:ring-4 focus:ring-[#658672]/20 transition-all duration-300 bg-gray-50/50"
            />
          </div>

          {/* ایمیل */}
          <div className="form-field">
            <label className="block text-sm font-medium text-[#1C422B] mb-2">Email</label>
            <input
              type="email"
              name="Email"
              required
              placeholder="john@example.com"
              className="w-full px-5 py-4 rounded-xl border outline-none border-[#d0d0d0] focus:border-[#658672] focus:ring-4 focus:ring-[#658672]/20 transition-all duration-300 bg-gray-50/50"
            />
          </div>

          {/* پیام */}
          <div className="form-field">
            <label className="block text-sm font-medium text-[#1C422B] mb-2">Your Project</label>
            <textarea
              name="Inquiry"
              required
              rows={5}
              placeholder="Tell us about your vision, goals, and timeline..."
              className="w-full px-5 py-4 rounded-xl border outline-none border-[#d0d0d0] focus:border-[#658672] focus:ring-4 focus:ring-[#658672]/20 transition-all duration-300 bg-gray-50/50 resize-none"
            />
          </div>

          {/* دکمه */}
          <SubmitButton
            title="Book Session"
            loadingTitle="Sending..."
            style="w-full text-lg py-5 rounded-2xl font-semibold bg-gradient-to-r from-[#1C422B] to-[#173520] text-white hover:shadow-xl hover:shadow-[#658672]/30 transform hover:scale-[1.02] transition-all duration-300"
          />
        </form>
      </section>
    </div>
  );
}
