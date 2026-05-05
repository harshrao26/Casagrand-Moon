"use client";

import { useEffect, useRef, useState } from "react";

const slides = [
  {
    img: "https://images.unsplash.com/photo-1647579350413-a6ada4e480ed?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "22/12/2023",
    text: "B1 - Finishing under progress",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1661954372617-15780178eb2e?q=80&w=1460&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "10/01/2024",
    text: "Structure completed",
  },
  {
    img: "https://images.unsplash.com/photo-1756435292384-1bf32eff7baf?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "05/02/2024",
    text: "Interior work ongoing",
  },
];

export default function ConstructionStatus() {
  const [index, setIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${index * 100}%)`;
      sliderRef.current.style.transition = "transform 0.6s ease-in-out";
    }
  }, [index]);

  return (
    <section className="bg] py-10 px-4">

      {/* Heading */}
      <h2 className="text-center text-[28px] sm:text-[34px] font-semibold mb-10">
        Construction <span className="font-bold">Status</span>
      </h2>

      {/* Slider Wrapper */}
      <div className="relative max-w-4xl mx-auto overflow-hidden">

        {/* Slides */}
        <div ref={sliderRef} className="flex">
          {slides.map((slide, i) => (
            <div key={i} className="min-w-full">
              <img
                src={slide.img}
                alt=""
                className="w-full h-[350px] object-cover"
              />
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={() =>
            setIndex((prev) =>
              prev === 0 ? slides.length - 1 : prev - 1
            )
          }
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#c99b21] text-white w-8 h-8 flex items-center justify-center"
        >
          ←
        </button>

        <button
          onClick={() =>
            setIndex((prev) => (prev + 1) % slides.length)
          }
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#c99b21] text-white w-8 h-8 flex items-center justify-center"
        >
          →
        </button>
      </div>

      {/* Info Card */}
      <div className="mt-6 flex flex-col items-center text-center">

        <div className="bg-white px-6 py-4 shadow-md">
          <p className="text-[#c99b21] font-semibold">
            Date : {slides[index].date}
          </p>
          <p className="text-sm text-black/70 mt-1">
            {slides[index].text}
          </p>
        </div>

        {/* Dots */}
        <div className="flex gap-2 mt-4">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full ${
                i === index ? "bg-[#c99b21]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}