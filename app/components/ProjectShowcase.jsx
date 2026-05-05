"use client";

import { useEffect, useRef } from "react";

const images = [
  "/images/showcase1.webp",
  "/images/showcase2.webp",
  "/images/showcase3.webp",
];

export default function ProjectShowcase() {
  const sliderRef = useRef(null);

  useEffect(() => {
    let scrollAmount = 0;

    const interval = setInterval(() => {
      if (!sliderRef.current) return;

      scrollAmount += window.innerWidth;

      sliderRef.current.style.transform = `translateX(-${scrollAmount}px)`;
      sliderRef.current.style.transition = "transform 0.8s ease-in-out";

      // reset when last image reached
      if (scrollAmount >= window.innerWidth * (images.length - 1)) {
        setTimeout(() => {
          sliderRef.current.style.transition = "none";
          sliderRef.current.style.transform = "translateX(0px)";
          scrollAmount = 0;
        }, 900);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="  py-10">
      
      {/* Heading */}
      <h2 className="text-center text-[28px] sm:text-[34px] font-semibold mb-6">
        Project Showcase
      </h2>

      {/* Slider Wrapper */}
      <div className="relative overflow-hidden w-full">
        
        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex w-full"
        >
          {images.map((img, i) => (
            <div key={i} className="min-w-full relative">
              
              <img
                src={img}
                alt=""
                className="w-full h-[400px] md:h-[500px] object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="bg-black/40 px-6 py-3 text-white text-lg md:text-xl font-medium backdrop-blur-sm">
                  Select Residences with Sprawling Private Terrace
                </p>
              </div>

              {/* Bottom label */}
              <p className="absolute bottom-3 left-4 text-white/80 text-xs">
                Artist’s Impression
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}