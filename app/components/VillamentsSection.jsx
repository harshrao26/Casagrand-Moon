"use client";

import { useState } from "react";

const villaments = [
  {
    name: "ARDRA",
    image: "/images/villament1.webp",
  },
  {
    name: "STEYA",
    image: "/images/villament2.webp",
  },
  {
    name: "VIONA",
    image: "/images/villament3.webp",
  },
  {
    name: "IRUM",
    image: "/images/villament4.webp",
  },
  {
    name: "VYOM",
    image: "/images/villament5.webp",
  },
];

export default function VillamentsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="  py-10 px-6">

      {/* Heading */}
      <h2 className="text-center text-[28px] sm:text-[34px] font-semibold mb-">
        Our Villaments
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">

        {/* Left Image */}
        <div className="w-full lg:w-[65%]">
          <img
            src={villaments[active].image}
            alt=""
            className="w-full h-auto object-contain transition duration-500"
          />
        </div>

        {/* Right List */}
        <div className="w-full lg:w-[35%]">
          <ul className="space-y-4">
            {villaments.map((item, index) => {
              const isActive = active === index;

              return (
                <li
                  key={item.name}
                  onClick={() => setActive(index)}
                  className="cursor-pointer group"
                >
                  <div className="flex items-center justify-between border-b border-gray-300 pb-3">

                    {/* Name */}
                    <span
                      className={`text-[14px] tracking-wide transition ${
                        isActive
                          ? "text-[#c99b21] font-semibold"
                          : "text-black/70 group-hover:text-black"
                      }`}
                    >
                      {item.name}
                    </span>

                    {/* Indicator */}
                    <span
                      className={`h-[2px] w-6 transition ${
                        isActive
                          ? "bg-[#c99b21]"
                          : "bg-transparent group-hover:bg-black/40"
                      }`}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}