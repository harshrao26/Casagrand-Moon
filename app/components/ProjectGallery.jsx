"use client";

import { useState } from "react";

const images = [
  {
    src: "https://plus.unsplash.com/premium_photo-1670360414483-64e6d9ba9038?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    label: "CLUBHOUSE AMENITIES",
  },
  {
    src: "https://images.unsplash.com/photo-1723110994499-df46435aa4b3?q=80&w=1179&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    label: "LIFEDESIGNED® RESIDENCES",
  },
  {
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    label: "SMART AND SECURE HOMES",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1734543932576-2d8c6b6233c6?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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