"use client"
import { Headset, PhoneCall } from "lucide-react";
import { useState } from "react";

export default function DiscoveryForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <section className="bg-[#fff8ee]  p-12 rounded-2xl shadow-lg max-w-3xl mx-auto my-12" id="formDiscovery">
      <h2 className="text-3xl font-bold text-[#1C422B] mb-2">Request a Discovery Session</h2>
      <p className="text-zinc-600 mb-6">Get a free consultation and a tailored plan for your business 🚀</p>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        
        <div>
          <label className="block text-sm font-medium text-zinc-700">Full Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="mt-1 w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1C422B]"
            placeholder="John Doe"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700">Email Address</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="mt-1 w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1C422B]"
            placeholder="john@example.com"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="mt-1 w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1C422B]"
            placeholder="+1 234 567 890"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700">Select Service</label>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="mt-1 w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1C422B]"
            required
          >
            <option value="">Choose...</option>
            <option value="Normal Website Design">Normal Website Design</option>
            <option value="Professional Website Design">Professional Website Design</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700">Budget Range</label>
          <select
            name="budget"
            value={form.budget}
            onChange={handleChange}
            className="mt-1 w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1C422B]"
            required
          >
            <option value="">Select Budget</option>
            <option value="$1000 - $3000">$1000 - $3000</option>
            <option value="$3000 - $5000">$3000 - $5000</option>
            <option value="$5000+">$5000+</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700">Project Brief</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="4"
            className="mt-1 w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1C422B]"
            placeholder="Tell us a bit about your project..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-gradient-to-r from-[#1C422B] to-[#4CAF50] text-white font-bold hover:opacity-90 transition"
        >
          Request Session
        </button>

        <div className="flex flex-row gap-2 justify-center items-center">
        <p className="text-xs text-zinc-500 inline text-center mt-2 ">
          We'll get back to you within 24 hours
        </p> 
        
        <Headset/>
        </div>
      </form>
    </section>
  );
}
