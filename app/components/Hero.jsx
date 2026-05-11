"use client";

import { useEffect, useState } from "react";
import { Building2, IndianRupee, MapPin, Sofa } from "lucide-react";

const stats = [
  {
    icon: MapPin,
    label: "Location",
    value: "Kumbalgodu, Bengaluru",
  },
  {
    icon: IndianRupee,
    label: "Price",
    value: "₹72L - ₹1.08Cr Onwards*",
  },
  {
    icon: Building2,
    label: "Project Size",
    value: "8.25 Acres | 504 Homes",
  },
  {
    icon: Sofa,
    label: "Configuration",
    value: "1, 2 & 3 BHK Apartments",
  },
];

export default function HeroSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % stats.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const ActiveIcon = stats[active].icon;

  return (
    <section className="relative h-[82vh] min-h-[620px] overflow-hidden bg-black md:h-[90vh] md:min-h-[720px]">
      {/* Background */}
      <img
        src="/indoor-images/Copy of s03.jpg"
        className="absolute inset-0 h-full w-full object-cover"
        alt="Casagrand Moondance Kumbalgodu Bengaluru"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

      {/* Center Content */}
      <div className="relative z-10 mx-auto flex min-h-full max-w-7xl flex-col items-center justify-center px-4 pb-36 pt-24 text-center sm:px-6 lg:pb-28">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[2px] text-white backdrop-blur-xl sm:text-xs">
          <MapPin className="h-3.5 w-3.5 text-[#FCB33A]" />
          Kumbalgodu, Off Mysore Road
        </div>

        <h1 className="max-w-4xl text-3xl font-semibold leading-[1.12] tracking-tight text-white sm:text-4xl md:text-6xl lg:text-7xl">
          Casagrand Moondance
          <span className="mt-2 block text-[#FCB33A]">
            1, 2 & 3 BHK Premium Apartments
          </span>
        </h1>

        {/* <p className="mt-5 max-w-2xl text-sm font-medium leading-7 text-zinc-200 sm:text-base md:text-lg md:leading-8">
          A new launch residential community off Mysore Road, spread across
          8.25 acres with 504 thoughtfully planned homes, low-rise B+G+4 wings,
          landscaped open spaces, and lifestyle amenities.
        </p> */}

        <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row">
          <button className="rounded-full bg-[#FCB33A] px-7 py-3.5 text-xs font-extrabold uppercase tracking-[1.6px] text-black transition hover:bg-white sm:px-8 sm:py-4">
            Enquire Now
          </button>

          <button className="rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-xs font-extrabold uppercase tracking-[1.6px] text-white backdrop-blur-xl transition hover:bg-white hover:text-black sm:px-8 sm:py-4">
            Download Brochure
          </button>
        </div>
      </div>

      {/* Bottom Stats - Desktop */}
      <div className="absolute bottom-0 left-0 right-0 z-20 hidden border-t border-white/10 bg-black/65 px-8 py-7 backdrop-blur-xl lg:block">
        <div className="mx-auto grid max-w-7xl grid-cols-4 gap-6">
          {stats.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="flex items-center gap-4 border-r border-white/10 last:border-r-0"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FCB33A]/15 text-[#FCB33A]">
                <Icon className="h-5 w-5" />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[1.5px] text-zinc-400">
                  {label}
                </p>
                <p className="mt-1 text-sm font-bold text-white xl:text-base">
                  {value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Rotating Stat */}
      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/10 bg-black/75 px-4 py-5 text-center text-white backdrop-blur-xl lg:hidden">
        <div className="flex flex-col items-center">
          <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#FCB33A]/15 text-[#FCB33A]">
            <ActiveIcon className="h-6 w-6" />
          </div>

          <p className="text-[11px] font-bold uppercase tracking-[1.8px] text-zinc-400">
            {stats[active].label}
          </p>

          <p className="mt-1 text-base font-extrabold leading-snug text-white sm:text-lg">
            {stats[active].value}
          </p>
        </div>

        {/* Dots */}
        <div className="mt-4 flex justify-center gap-2">
          {stats.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all ${
                active === i ? "w-6 bg-[#FCB33A]" : "w-2 bg-white/35"
              }`}
              aria-label={`Show stat ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}