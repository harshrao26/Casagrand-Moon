"use client";

import { useEffect, useRef } from "react";
import {
  Dumbbell,
  Dog,
  Coffee,
  Store,
  Waves,
  Building2,
  Laptop,
  Sparkles,
} from "lucide-react";

const amenities = [
  { icon: Building2, label: "CLUB HOUSE" },
  { icon: Dog, label: "PET PARK" },
  { icon: Dumbbell, label: "GYMNASIUM" },
  { icon: Sparkles, label: "SPA & SAUNA" },
  { icon: Coffee, label: "GARDEN CAFE" },
  { icon: Laptop, label: "CO-WORKING SPACE" },
  { icon: Waves, label: "SWIMMING POOL" },
  { icon: Store, label: "CONVENIENCE STORE" },

  { icon: Building2, label: "MINI THEATRE" },
  { icon: Dog, label: "KIDS PLAY AREA" },
  { icon: Dumbbell, label: "YOGA / MEDITATION" },
  { icon: Sparkles, label: "LANDSCAPED GARDENS" },
];

export default function AmenitiesSection() {
  const sliderRef = useRef(null);

  // duplicate for infinite scroll
  const data = [...amenities, ...amenities];

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      index++;

      if (!sliderRef.current) return;

      sliderRef.current.style.transition = "transform 0.6s ease";
      sliderRef.current.style.transform = `translateX(-${index * 100}%)`;

      // reset for infinite loop
      if (index >= amenities.length) {
        setTimeout(() => {
          sliderRef.current.style.transition = "none";
          sliderRef.current.style.transform = "translateX(0)";
          index = 0;
        }, 700);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="  py-10 ">

      {/* Heading */}
      <h2 className="text-center text-[26px] font-semibold mb-8">
        Project Amenities
      </h2>

      {/* MOBILE GRID SLIDER */}
      <div className="overflow-hidden">

        <div ref={sliderRef} className="flex">

          {data.map(({ icon: Icon, label }, i) => (
            <div
              key={i}
              className="min-w-full grid grid-cols-3 gap-y-12 text-center"
            >
              {/* 9 items per screen */}
              {data.slice(i, i + 9).map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center"
                >
                  <item.icon className="h-8 w-8 text-gray-700" />
                  <p className="mt-2 text-[11px] leading-tight">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          ))}

        </div>
      </div>
      <div className="flex justify-center mt-10">
        <button className="bg-[#c99b21] text-white px-4 py-2 md:px-8 md:py-3 text-xs md:text-sm tracking-wide hover:opacity-90 transition">
          DOWNLOAD BROCHURE
        </button>
      </div>
    </section>
  );
}