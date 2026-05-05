"use client";

import { useState } from "react";

const images = [
  {
    src: "/images/gallery1.webp",
    label: "CLUBHOUSE AMENITIES",
  },
  {
    src: "/images/gallery2.webp",
    label: "LIFEDESIGNED® RESIDENCES",
  },
  {
    src: "/images/gallery3.webp",
    label: "SMART AND SECURE HOMES",
  },
  {
    src: "/images/gallery4.webp",
    label: "LANDSCAPED GREENS",
  },
];

export default function ProjectGallery() {
  const [active, setActive] = useState(2); // default center

  return (
    <section className=" py-10">

      {/* Heading */}
      <h2 className="text-center text-black text-[28px] sm:text-[34px] font-semibold mb-6">
        Project Gallery
      </h2>

      {/* Gallery */}
      <div className="flex flex-col md:flex-row h-[200px] md:h-[400px] overflow-hidden">
        {images.map((item, index) => {
          const isActive = active === index;

          return (
            <div
              key={index}
              onMouseEnter={() => setActive(index)}
              className={`relative transition-all duration-500 ease-in-out cursor-pointer ${
                isActive ? "flex-[3]" : "flex-[1]"
              }`}
            >
              {/* Image */}
              <img
                src={item.src}
                alt=""
                className="w-full h-full object-cover"
              />

              {/* Dark Overlay */}
              <div
                className={`absolute inset-0 transition duration-500 ${
                  isActive ? "bg-black/0" : "bg-black/50"
                }`}
              />

              {/* Label */}
              <p className="absolute bottom-4 left-4 text-white text-sm tracking-wide">
                {item.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}