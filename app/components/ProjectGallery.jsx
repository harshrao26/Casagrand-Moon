"use client";

import { useState } from "react";

const images = [
  {
    src: "/indoor-images/Copy of s03.jpg",
    label: "PREMIUM APARTMENT LIVING",
  },
  {
    src: "/indoor-images/Copy of s11.jpg",
    label: "LOW-RISE COMMUNITY DESIGN",
  },
  {
    src: "/indoor-images/Copy of s12.jpg",
    label: "LANDSCAPED OPEN SPACES",
  },
  {
    src: "/indoor-images/Copy of s14.jpg",
    label: "MODERN LIFESTYLE AMENITIES",
  },
];

export default function ProjectGallery() {
  const [active, setActive] = useState(2);

  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[2.5px] text-[#BD9E5A] sm:text-xs">
            Project Gallery
          </p>

          <h2 className="text-[28px] font-semibold leading-tight text-black sm:text-[34px] lg:text-[42px]">
            Explore Casagrand Moondance
          </h2>

          <p className="mt-4 text-sm leading-7 text-black/65 sm:text-base">
            A glimpse of premium apartment living, landscaped surroundings,
            thoughtfully planned spaces, and modern community experiences at
            Kumbalgodu, off Mysore Road.
          </p>
        </div>

        {/* Gallery */}
        <div className="flex h-[520px] flex-col overflow-hidden rounded-[28px] bg-black shadow-[0_24px_70px_rgba(0,0,0,0.18)] sm:h-[580px] md:h-[430px] md:flex-row lg:h-[500px]">
          {images.map((item, index) => {
            const isActive = active === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setActive(index)}
                onClick={() => setActive(index)}
                className={`relative min-h-[120px] cursor-pointer overflow-hidden transition-all duration-500 ease-in-out md:min-h-0 ${
                  isActive ? "flex-[2.8]" : "flex-[1]"
                }`}
              >
                {/* Image */}
                <img
                  src={item.src}
                  alt={item.label}
                  className={`h-full w-full object-cover transition duration-700 ${
                    isActive ? "scale-105" : "scale-100"
                  }`}
                />

                {/* Overlay */}
                <div
                  className={`absolute inset-0 transition duration-500 ${
                    isActive
                      ? "bg-gradient-to-t from-black/70 via-black/10 to-transparent"
                      : "bg-black/55"
                  }`}
                />

                {/* Label */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <p className="text-[11px] font-extrabold uppercase tracking-[1.8px] text-white sm:text-xs">
                    {item.label}
                  </p>

                  {isActive && (
                    <p className="mt-2 max-w-sm text-xs font-medium leading-5 text-white/75 sm:text-sm">
                      Casagrand Moondance brings together comfort, greenery,
                      lifestyle amenities, and peaceful low-rise living.
                    </p>
                  )}
                </div>

                {/* Number */}
                <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xs font-bold text-white backdrop-blur-xl">
                  0{index + 1}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center">
          <button className="rounded-full bg-[#BD9E5A] px-7 py-3.5 text-xs font-extrabold uppercase tracking-[1.6px] text-black transition hover:bg-black hover:text-white md:px-9 md:py-4 md:text-sm">
            Download Brochure
          </button>
        </div>
      </div>
    </section>
  );
}