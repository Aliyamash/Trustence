// components/FormDiscovery.jsx
"use client";

import { formDiscover } from "@/actions/discovery";
import SubmitButton from "@/components/SubmitButton";
import { useActionState, useRef, useEffect } from "react";
import { toast } from "react-toastify";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocale } from "@/i18n/LocaleProvider";

export default function FormDiscovery() {
  const { locale, isRtl } = useLocale();
  const copy = locale === "fa" ? { process: "یک فرایند ساده و سنجیده", steps: [["01", "زمینه را توضیح دهید", "بگویید چه چیزی را می‌خواهید بسازید، بهتر کنید یا خودکار کنید و چرا اکنون اهمیت دارد."], ["02", "با تیم گفت‌وگو کنید", "در یک تماس تصویری متمرکز، اهداف، محدودیت‌ها و تناسب همکاری را بررسی می‌کنیم."], ["03", "قدم بعدی روشن دریافت کنید", "اگر تناسب خوبی وجود داشته باشد، دامنه اختصاصی، زمان‌بندی و پیشنهاد تجاری آماده می‌کنیم."]], formTitle: "درخواست جلسه آشنایی", name: "نام و نام خانوادگی", namePlaceholder: "نام شما", email: "ایمیل", message: "پروژه، چالش یا فرصت", placeholder: "چه چیزی باید ساخته یا بهتر شود و یک نتیجه ارزشمند چه شکلی دارد؟", submit: "درخواست جلسه", sending: "در حال ارسال…" } : { process: "A simple, considered process", steps: [["01", "Share the context", "Tell us what you want to create, improve, or automate and why it matters now."], ["02", "Meet the team", "We hold a focused video conversation to examine goals, constraints, and fit."], ["03", "Receive a clear next step", "When there is a strong fit, we prepare a tailored scope, timeline, and commercial proposal."]], formTitle: "Request your discovery session", name: "Full name", namePlaceholder: "John Doe", email: "Email", message: "Project, challenge, or opportunity", placeholder: "What should be created or improved, and what would a valuable outcome look like?", submit: "Request session", sending: "Sending…" };
  const [state, formDiscoveryAction] = useActionState(formDiscover, null);
  const formRef = useRef(null);
  const containerRef = useRef(null);

  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const fields = containerRef.current.querySelectorAll(".form-field");
      const steps = containerRef.current.querySelectorAll(".step-card");

      gsap.set([fields, steps], { x: isRtl ? 20 : -20, y: 30, opacity: 0 });

      // مرحله‌ها
      gsap.to(steps, {
        x: 0, y: 0,
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
        x: 0, y: 0,
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
  }, [isRtl, locale]);

  // Toast و Reset
  useEffect(() => {
    if (!state) return; 
    if(state?.status === 'error'){
      toast.error(locale === "fa" ? "ارسال انجام نشد؛ لطفاً دوباره تلاش کنید." : state.message)
    }else{
      toast.success(locale === "fa" ? "درخواست جلسه با موفقیت ثبت شد." : state.message);
      formRef.current?.reset();
    }
  },[state, locale])


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
          {copy.process}
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {copy.steps.map(([icon, title, desc], i) => (
            <div
              key={i}
              className="step-card group relative p-8 rounded-3xl bg-white border border-[#e8e8e8] shadow-lg hover:shadow-2xl hover:shadow-[#658672]/10 transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#1C422B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="text-5xl mb-4">{icon}</div>
              <h3 className="text-2xl font-bold text-[#1C422B] mb-2">{title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* فرم */}
      <section className="max-w-2xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-12 text-[#46c972]" >
          {copy.formTitle}
        </h2>

        <form
          ref={formRef}
          action={formDiscoveryAction}
          className="bg-white/90 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-[#e8e8e8] space-y-8"
        >
          {/* نام کامل */}
          <div className="form-field">
            <label className="block text-sm font-medium text-[#1C422B] mb-2">{copy.name}</label>
            <input
              type="text"
              name="Full_Name"
              required
              placeholder={copy.namePlaceholder}
              className="w-full px-5 py-4 rounded-xl outline-none border border-[#d0d0d0] focus:border-[#658672] focus:ring-4 focus:ring-[#658672]/20 transition-all duration-300 bg-gray-50/50"
            />
          </div>

          {/* ایمیل */}
          <div className="form-field">
            <label className="block text-sm font-medium text-[#1C422B] mb-2">{copy.email}</label>
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
            <label className="block text-sm font-medium text-[#1C422B] mb-2">{copy.message}</label>
            <textarea
              name="Inquiry"
              required
              rows={5}
              placeholder={copy.placeholder}
              className="w-full px-5 py-4 rounded-xl border outline-none border-[#d0d0d0] focus:border-[#658672] focus:ring-4 focus:ring-[#658672]/20 transition-all duration-300 bg-gray-50/50 resize-none"
            />
          </div>

          {/* دکمه */}
          <SubmitButton
            title={copy.submit}
            loadingTitle={copy.sending}
            style="w-full text-lg py-5 rounded-2xl font-semibold bg-gradient-to-r from-[#1C422B] to-[#173520] text-white hover:shadow-xl hover:shadow-[#658672]/30 transform hover:scale-[1.02] transition-all duration-300"
          />
        </form>
      </section>
    </div>
  );
}
