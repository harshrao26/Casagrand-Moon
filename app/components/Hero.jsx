"use client";

import { useEffect, useState } from "react";
import {
  Building2,
  IndianRupee,
  KeyRound,
  Sofa,
} from "lucide-react";

const stats = [
  {
    icon: Building2,
    label: "Construction Status",
    value: "Ready To Move In",
  },
  {
    icon: IndianRupee,
    label: "Price",
    value: "Rs. 2.15 Cr* Onwards",
  },
  {
    icon: KeyRound,
    label: "Possession",
    value: "Aug 2023 Onwards",
  },
  {
    icon: Sofa,
    label: "Configuration",
    value: "3 BHK Duplex",
  },
];

export default function HeroSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % stats.length);
    }, 3000); // slower = premium feel

    return () => clearInterval(interval);
  }, []);

  const ActiveIcon = stats[active].icon;

  return (
    <section className="relative h-[80vh] md:h-[90vh] bg-black overflow-hidden">

      {/* Background */}
      <img
        src="/images/hero-banner.webp"
        className="absolute inset-0 w-full h-full object-cover"
        alt=""
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-5">

        <h5 className="text-white text-3xl sm:text-4xl font-semibold leading-tight">
          Luxury of a Villa Community <br />
          with Apartment Lifestyle
        </h5>

        <p className="mt-4 text-muted max-w-xl">
          A premium gated community designed for comfort, privacy, and modern living.
        </p>

        {/* CTA */}
         
      </div>

      {/* Bottom Stats (Desktop) */}
      <div className="absolute bottom-0 left-0 right-0 hidden lg:grid grid-cols-4 gap-6 px-10 py-8 bg-black/60">
        {stats.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex items-center gap-3 text-white">
            <Icon className="h-6 w-6" />
            <div>
              <p className="text-sm text-muted">{label}</p>
              <p className="font-semibold">{value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Rotating Stat */}
      <div className="absolute bottom-0 left-0 right-0 lg:hidden bg-black/70 py-6 text-center text-white">

        <div className="flex flex-col items-center">
          <ActiveIcon className="h-8 w-8 mb-2" />

          <p className="text-sm text-muted">
            {stats[active].label}
          </p>

          <p className="text-lg font-bold">
            {stats[active].value}
          </p>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {stats.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full ${
                active === i ? "bg-[#c99b21]" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}