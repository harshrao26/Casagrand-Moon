"use client";

import { useEffect, useRef } from "react";
import {
  Dumbbell,
  Coffee,
  Store,
  Waves,
  Building2,
  Laptop,
  Sparkles,
  Baby,
  TreePalm,
  Gamepad2,
  Flower2,
  ShieldCheck,
} from "lucide-react";

const amenities = [
  { icon: Building2, label: "CLUBHOUSE" },
  { icon: Waves, label: "SWIMMING POOL" },
  { icon: Dumbbell, label: "GYMNASIUM" },
  { icon: Flower2, label: "YOGA / MEDITATION" },
  { icon: Baby, label: "KIDS PLAY AREA" },
  { icon: TreePalm, label: "LANDSCAPED GARDENS" },
  { icon: Gamepad2, label: "INDOOR GAMES" },
  { icon: Coffee, label: "CAFE / LOUNGE" },
  { icon: Laptop, label: "CO-WORKING SPACE" },
  { icon: Sparkles, label: "MULTIPURPOSE HALL" },
  { icon: Store, label: "CONVENIENCE STORE" },
  { icon: ShieldCheck, label: "GATED SECURITY" },
];

export default function AmenitiesSection() {
  const sliderRef = useRef(null);

  const slides = [
    amenities.slice(0, 9),
    amenities.slice(3, 12),
    amenities.slice(0, 9),
  ];

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      index++;

      if (!sliderRef.current) return;

      sliderRef.current.style.transition = "transform 0.6s ease";
      sliderRef.current.style.transform = `translateX(-${index * 100}%)`;

      if (index >= slides.length - 1) {
        setTimeout(() => {
          if (!sliderRef.current) return;

          sliderRef.current.style.transition = "none";
          sliderRef.current.style.transform = "translateX(0)";
          index = 0;
        }, 700);
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[2.5px] text-[#FCB33A] sm:text-xs">
            Lifestyle Amenities
          </p>

          <h2 className="text-[26px] font-semibold leading-tight text-black sm:text-[34px] lg:text-[42px]">
            Project Amenities at Casagrand Moondance
          </h2>

          <p className="mt-4 text-sm leading-7 text-black/65 sm:text-base">
            Designed for modern families, Casagrand Moondance brings together
            leisure, wellness, recreation, community spaces, and everyday
            convenience within a peaceful low-rise residential environment.
          </p>
        </div>

        {/* Mobile Slider */}
        <div className="overflow-hidden rounded-[28px] border border-black/10 bg-[#f7f7f7] py-10 shadow-[0_18px_50px_rgba(0,0,0,0.05)] lg:hidden">
          <div ref={sliderRef} className="flex">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                className="grid min-w-full grid-cols-3 gap-y-10 px-4 text-center"
              >
                {slide.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex flex-col items-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#FCB33A] shadow-sm">
                      <Icon className="h-7 w-7" />
                    </div>

                    <p className="mt-3 max-w-[90px] text-[10px] font-bold uppercase leading-tight tracking-[1px] text-black/70">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden grid-cols-4 overflow-hidden rounded-[30px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_50px_rgba(0,0,0,0.05)] lg:grid">
          {amenities.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="group flex min-h-[170px] flex-col items-center justify-center border-b border-r border-black/10 px-6 py-8 text-center transition hover:bg-white"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#FCB33A] shadow-sm transition group-hover:scale-110 group-hover:bg-[#FCB33A] group-hover:text-black">
                <Icon className="h-8 w-8" />
              </div>

              <p className="mt-4 text-xs font-bold uppercase tracking-[1.5px] text-black/70">
                {label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button className="rounded-full bg-[#FCB33A] px-7 py-3.5 text-xs font-extrabold uppercase tracking-[1.6px] text-black transition hover:bg-black hover:text-white md:px-9 md:py-4 md:text-sm">
            Download Brochure
          </button>
        </div>
      </div>
    </section>
  );
}