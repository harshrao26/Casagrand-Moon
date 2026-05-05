"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is Birla Alokya?",
    a: "Birla Alokya is a premium residential project offering villa-style living with modern amenities in Whitefield, Bengaluru.",
  },
  {
    q: "What are the configurations of the units at Birla Alokya Whitefield?",
    a: "The project offers spacious 3 BHK duplex residences designed for luxury and comfort.",
  },
  {
    q: "Where is the location of Birla Alokya?",
    a: "It is located in Whitefield, one of Bengaluru’s prime IT hubs.",
  },
  {
    q: "What is the size of Birla Alokya Whitefield?",
    a: "The project spans across approximately 7.9 acres of land.",
  },
  {
    q: "What are total no. of floors in each tower of Birla Alokya Whitefield?",
    a: "The development consists of low-rise structures with limited floors to maintain exclusivity.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="bg-[#f5f5f5] py-10 px-4">

      {/* Heading */}
      <h2 className="text-center text-[28px] sm:text-[34px] font-semibold mb-10">
        FAQs
      </h2>

      {/* FAQ List */}
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((item, index) => {
          const isOpen = active === index;

          return (
            <div
              key={index}
              className="bg-white px-5 py-4 cursor-pointer transition hover:shadow-sm"
              onClick={() => toggle(index)}
            >
              {/* Question */}
              <div className="flex items-center justify-between">
                <p className="text-[15px] font-medium text-black/90">
                  {item.q}
                </p>

                <ChevronDown
                  className={`h-5 w-5 transition duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? "max-h-40 mt-3" : "max-h-0"
                }`}
              >
                <p className="text-[14px] text-black/70 leading-relaxed">
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