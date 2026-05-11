"use client";

import { useEffect, useRef } from "react";

const images = [
  "/indoor-images/Copy of c26.jpg",
  "/indoor-images/Copy of s02.jpg",
  "/indoor-images/Copy of s03.jpg",
  "/indoor-images/Copy of s11.jpg",
  "/indoor-images/Copy of s12.jpg",
  "/indoor-images/Copy of s14.jpg",
  "/indoor-images/Copy of s15.jpg",
  "/indoor-images/Copy of s20.jpg",
  "/indoor-images/Copy of s21.jpg",
  "/indoor-images/Copy of s24.jpg",
  "/indoor-images/Copy of s26.jpg",
  "/indoor-images/Copy of s27.jpg",
  "/indoor-images/Copy of s28.jpg",
  "/indoor-images/Copy of s30.jpg",
  "/indoor-images/Copy of s31.jpg",
  "/indoor-images/Copy of s34.jpg",
  "/indoor-images/Copy of s35.jpg",
  "/indoor-images/Copy of s36.jpg",
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
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="   py-10">
      
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
                className="w-screen   object-cover"
              />

              {/* Overlay */}
               
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}