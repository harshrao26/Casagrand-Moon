"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    country: "+91 (India)",
    consent: false,
  });

  return (
    <section className="bg-[#8a0c6b] py-16 px-4 flex justify-center">

      <div className="w-full max-w-xl text-white">

        {/* Name */}
        <input
          type="text"
          placeholder="*Name"
          className="w-full py-1 text-sm px-4 bg-white text-black outline-none mb-4"
        />

        {/* Phone Row */}
        <div className="flex gap-3 mb-4">
          
          <select className="py-1 text-sm px-3 bg-white text-black outline-none w-[40%]">
            <option>+91 (India)</option>
            <option>+1 (USA)</option>
          </select>

          <input
            type="text"
            placeholder="*Phone Number"
            className="flex-1 py-1 text-sm px-4 bg-white text-black outline-none"
          />
        </div>

        {/* Checkbox */}
        <div className="flex items-start gap-2 mb-6">
          <input type="checkbox" className="mt-1" />

          <p className="text-[13px] leading-snug text-white/90">
            Opt-in for receiving important information and updates on
            WhatsApp/Email/SMS/Call*
          </p>
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <button className="bg-[#c99b21] text-white text-sm px-8 py-2 tracking-wide hover:opacity-90 transition">
            SUBMIT
          </button>
        </div>
      </div>
    </section>
  );
}