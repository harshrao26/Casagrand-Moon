"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is Casagrand Moondance?",
    a: "Casagrand Moondance is a premium residential apartment community in Kumbalgodu, off Mysore Road, Bengaluru, offering thoughtfully planned homes with lifestyle amenities and open community spaces.",
  },
  {
    q: "What apartment configurations are available at Casagrand Moondance?",
    a: "The project offers spacious 2 & 3 BHK apartments designed for different family needs, from compact homes to larger premium residences.",
  },
  {
    q: "Where is Casagrand Moondance located?",
    a: "Casagrand Moondance is located in Kumbalgodu, off Mysore Road / NH 275, Bengaluru, with connectivity to NICE Road, Kengeri, Rajarajeshwari Nagar, and Mysore Road Metro.",
  },
  {
    q: "What is the total project size of Casagrand Moondance?",
    a: "Casagrand Moondance is spread across approximately 8.25 acres and includes 504 apartment homes across 3 residential wings.",
  },
  {
    q: "How many floors are planned in Casagrand Moondance?",
    a: "The project follows a low-rise B+G+4 floor structure, offering a more open and community-focused residential environment.",
  },
  {
    q: "What is the starting price of Casagrand Moondance?",
    a: "The apartments are positioned from around ₹86.22 Lakhs onwards, depending on configuration, size, availability, and current offer details.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
      {/* Heading */}
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <p className="mb-3 text-[11px] font-bold uppercase tracking-[2.5px] text-[#BD9E5A] sm:text-xs">
          Frequently Asked Questions
        </p>

        <h2 className="text-[28px] font-semibold leading-tight text-black sm:text-[34px] lg:text-[42px]">
          FAQs
        </h2>

        <p className="mt-4 text-sm leading-7 text-black/65 sm:text-base">
          Quick answers about Casagrand Moondance location, configurations,
          project size, floor structure, and pricing.
        </p>
      </div>

      {/* FAQ List */}
      <div className="mx-auto max-w-4xl space-y-4">
        {faqs.map((item, index) => {
          const isOpen = active === index;

          return (
            <div
              key={index}
              className="cursor-pointer rounded-[22px] bg-white px-5 py-4 shadow-[0_12px_35px_rgba(0,0,0,0.04)] transition hover:shadow-[0_18px_45px_rgba(0,0,0,0.07)] sm:px-6 sm:py-5"
              onClick={() => toggle(index)}
            >
              {/* Question */}
              <div className="flex items-center justify-between gap-4">
                <p className="text-[14px] font-semibold leading-6 text-black/90 sm:text-[15px]">
                  {item.q}
                </p>

                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition ${
                    isOpen
                      ? "bg-[#BD9E5A] text-black"
                      : "bg-black/5 text-black"
                  }`}
                >
                  <ChevronDown
                    className={`h-5 w-5 transition duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </div>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? "mt-3 max-h-48" : "max-h-0"
                }`}
              >
                <p className="text-[14px] leading-relaxed text-black/70">
                  {item.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}