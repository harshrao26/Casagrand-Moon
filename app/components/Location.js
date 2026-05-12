"use client";

import React from "react";
import {
  Hospital,
  Building2,
  Train,
  MapPin,
  Clock,
  Bus,
  Store,
  Route,
  GraduationCap,
  Navigation,
} from "lucide-react";

const Location = () => {
  const essentials = [
    {
      icon: Bus,
      label: "Kambipura",
      dist: "1 Min",
      km: "0.2 Km",
      type: "Connectivity",
    },
    {
      icon: Route,
      label: "Govt SCL Road",
      dist: "5 Min",
      km: "1.3 Km",
      type: "Connectivity",
    },
    {
      icon: Train,
      label: "Challaghatta Metro Station",
      dist: "10 Min",
      km: "3.1 Km",
      type: "Transport",
    },
    {
      icon: Route,
      label: "NICE Road",
      dist: "12 Min",
      km: "4 Km",
      type: "Connectivity",
    },
    {
      icon: Store,
      label: "Decathlon Sports",
      dist: "14 Min",
      km: "5 Km",
      type: "Entertainment",
    },
    {
      icon: Train,
      label: "Kengeri Metro Station",
      dist: "15 Min",
      km: "5.3 Km",
      type: "Transport",
    },
    {
      icon: Bus,
      label: "Kengeri Railway Station",
      dist: "18 Min",
      km: "6.6 Km",
      type: "Transport",
    },
    {
      icon: Bus,
      label: "Kengeri Bus Terminal",
      dist: "21 Min",
      km: "7.8 Km",
      type: "Transport",
    },
    {
      icon: Building2,
      label: "Sattva Global City",
      dist: "20 Min",
      km: "8.5 Km",
      type: "Business Hub",
    },
    {
      icon: GraduationCap,
      label: "Don Bosco Institute of Technology",
      dist: "8 Min",
      km: "2.9 Km",
      type: "Institution",
    },
    {
      icon: Hospital,
      label: "Rajarajeshwari Medical College & Hospital",
      dist: "11 Min",
      km: "3.3 Km",
      type: "Hospital",
    },
    {
      icon: Hospital,
      label: "SPARSH Hospital",
      dist: "29 Min",
      km: "12 Km",
      type: "Hospital",
    },
  ];

  const featured = [
    {
      icon: Bus,
      label: "Kambipura",
      dist: "1 Min",
      km: "0.2 Km",
    },
    {
      icon: Route,
      label: "NICE Road",
      dist: "12 Min",
      km: "4 Km",
    },
    {
      icon: Train,
      label: "Challaghatta Metro Station",
      dist: "10 Min",
      km: "3.1 Km",
    },
    {
      icon: Train,
      label: "Kengeri Metro Station",
      dist: "15 Min",
      km: "5.3 Km",
    },
  ];

  return (
    <section
      id="location"
      className="relative overflow-hidden bg-gray-50 px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-24"
    >
      
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[3px] text-[#BD9E5A] sm:text-xs">
              Location Advantage
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl">
              Off Mysore Road Nearby{" "}
              <span className="text-[#BD9E5A]">Connectivity</span>
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-7 text-black/60 sm:text-base lg:ml-auto lg:text-right">
            Enjoy quick access to NICE Road, metro stations, railway
            connectivity, hospitals, education hubs, business destinations, and
            daily conveniences around Off Mysore Road, 10mins from RR nagar.
          </p>
        </div>

        {/* Featured Nearby */}
        <div className="mb-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {featured.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group rounded-[24px] border border-black/10 bg-white p-4 text-center shadow-[0_14px_45px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#BD9E5A]/60 hover:shadow-[0_22px_65px_rgba(0,0,0,0.08)] sm:p-5"
              >
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#BD9E5A]/15 text-[#BD9E5A] transition-all duration-300 group-hover:bg-[#BD9E5A] group-hover:text-black sm:h-14 sm:w-14">
                  <Icon size={22} strokeWidth={1.8} />
                </div>

                <p className="text-[11px] font-extrabold uppercase leading-5 tracking-[1.2px] text-black sm:text-sm">
                  {item.label}
                </p>

                <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
                  <p className="inline-flex items-center gap-1.5 rounded-full bg-[#f5f2ea] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[1px] text-[#BD9E5A] sm:text-xs">
                    <Clock size={12} />
                    {item.dist}
                  </p>

                  <p className="rounded-full bg-[#f5f2ea] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[1px] text-black/55 sm:text-xs">
                    {item.km}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Map */}
        <div className="overflow-hidden rounded-[30px] border border-black/10 bg-white p-2 shadow-[0_28px_90px_rgba(0,0,0,0.1)] sm:rounded-[36px] sm:p-3">
          <div className="relative h-[360px] overflow-hidden rounded-[24px] sm:h-[460px] lg:h-[580px] lg:rounded-[30px]">
            <iframe
              src="https://www.google.com/maps?q=VFF2%2BQRJ%2C%20off%20Mysore%20Road%2C%20Kumbalgodu%2C%20Bengaluru%2C%20Karnataka%20560074&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

            <div className="absolute bottom-4 left-4 right-4 rounded-[24px] border border-white/15 bg-black/55 p-4 text-center shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:bottom-5 sm:left-5 sm:right-5 sm:p-5 lg:text-left">
              <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[2.5px] text-[#BD9E5A] sm:text-xs">
                    Project Location
                  </p>

                  <h3 className="mt-2 text-sm font-semibold text-white sm:text-xl">
                    Casagrand Moondance, Off Mysore Road
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-white/70 sm:text-sm">
                    VFF2+QRJ, Off Mysore Road, 10mins from RR nagar, Bengaluru,
                    Karnataka 560074
                  </p>
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=VFF2%2BQRJ%2C%20off%20Mysore%20Road%2C%20Kumbalgodu%2C%20Bengaluru%2C%20Karnataka%20560074"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#BD9E5A] px-6 py-3 text-xs font-extrabold uppercase tracking-[1.4px] text-white transition hover:bg-white sm:text-sm"
                >
                  <Navigation size={17} />
                  View Location
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Full Nearby List */}
        <div className="mt-7 overflow-hidden rounded-[30px] border border-black/10 bg-white shadow-[0_20px_70px_rgba(0,0,0,0.06)] sm:rounded-[34px]">
          <div className="border-b border-black/10 p-5 sm:p-6">
            <p className="text-[11px] font-extrabold uppercase tracking-[2.5px] text-[#BD9E5A] sm:text-xs">
              Nearby Places
            </p>

            <h3 className="mt-2 text-xl font-semibold text-black sm:text-2xl">
              Key landmarks around the project
            </h3>
          </div>

          <div className="grid gap-px bg-black/10 md:grid-cols-2 lg:grid-cols-3">
            {essentials.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-white p-4 transition hover:bg-[#f9f5ea] sm:p-5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#BD9E5A]/15 text-[#BD9E5A]">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="line-clamp-2 text-sm font-bold leading-5 text-black">
                          {item.label}
                        </p>

                        <p className="mt-1 text-[10px] font-bold uppercase tracking-[1.4px] text-black/40">
                          {item.type}
                        </p>
                      </div>

                      <div className="shrink-0 text-right">
                        <p className="text-xs font-extrabold text-[#BD9E5A]">
                          {item.dist}
                        </p>

                        <p className="mt-1 text-[10px] font-semibold text-black/45">
                          {item.km}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;