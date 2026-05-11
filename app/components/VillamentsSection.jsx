"use client";

import { useState } from "react";

const floorPlans = [
  {
    name: "AG01",
    title: "3 BHK Unit Plan - AG01",
    image: "/flooreplan/UNIT%20PLAN/3%20BHK%20/%20JPG/AG01.jpg",
  },
  {
    name: "AG03",
    title: "3 BHK Unit Plan - AG03",
    image: "/flooreplan/UNIT%20PLAN/3%20BHK%20/%20JPG/AG03.jpg",
  },
  {
    name: "AG05",
    title: "3 BHK Unit Plan - AG05",
    image: "/flooreplan/UNIT%20PLAN/3%20BHK%20/%20JPG/AG05.jpg",
  },
  {
    name: "AG08",
    title: "3 BHK Unit Plan - AG08",
    image: "/flooreplan/UNIT%20PLAN/3%20BHK%20/%20JPG/AG08.jpg",
  },
  {
    name: "AG09",
    title: "3 BHK Unit Plan - AG09",
    image: "/flooreplan/UNIT%20PLAN/3%20BHK%20/%20JPG/AG09.jpg",
  },
  {
    name: "AG10",
    title: "3 BHK Unit Plan - AG10",
    image: "/flooreplan/UNIT%20PLAN/3%20BHK%20/%20JPG/AG10.jpg",
  },
  {
    name: "AG11",
    title: "3 BHK Unit Plan - AG11",
    image: "/flooreplan/UNIT%20PLAN/3%20BHK%20/%20JPG/AG11.jpg",
  },
  {
    name: "AG16",
    title: "3 BHK Unit Plan - AG16",
    image: "/flooreplan/UNIT%20PLAN/3%20BHK%20/%20JPG/AG16.jpg",
  },
  {
    name: "AG24",
    title: "3 BHK Unit Plan - AG24",
    image: "/flooreplan/UNIT%20PLAN/3%20BHK%20/%20JPG/AG24.jpg",
  },
  {
    name: "AG26",
    title: "3 BHK Unit Plan - AG26",
    image: "/flooreplan/UNIT%20PLAN/3%20BHK%20/%20JPG/AG26.jpg",
  },
  {
    name: "AG34",
    title: "3 BHK Unit Plan - AG34",
    image: "/flooreplan/UNIT%20PLAN/3%20BHK%20/%20JPG/AG34.jpg",
  },
  {
    name: "AG37",
    title: "3 BHK Unit Plan - AG37",
    image: "/flooreplan/UNIT%20PLAN/3%20BHK%20/%20JPG/AG37.jpg",
  },
  {
    name: "B101",
    title: "3 BHK Unit Plan - B101",
    image: "/flooreplan/UNIT%20PLAN/3%20BHK%20/%20JPG/B101.jpg",
  },
  {
    name: "BG01",
    title: "3 BHK Unit Plan - BG01",
    image: "/flooreplan/UNIT%20PLAN/3%20BHK%20/%20JPG/BG01.jpg",
  },
  {
    name: "BG28",
    title: "3 BHK Unit Plan - BG28",
    image: "/flooreplan/UNIT%20PLAN/3%20BHK%20/%20JPG/BG28.jpg",
  },
  {
    name: "CG19",
    title: "3 BHK Unit Plan - CG19",
    image: "/flooreplan/UNIT%20PLAN/3%20BHK%20/%20JPG/CG19.jpg",
  },
];

export default function FloorPlanSection() {
  const [active, setActive] = useState(13);

  return (
    <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[2.5px] text-[#c99b21] sm:text-xs">
            Unit Plans
          </p>

          <h2 className="text-[32px] font-semibold leading-tight tracking-[2px] text-black sm:text-[42px] lg:text-[52px]">
            Our Floor Plans
          </h2>
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-[1.55fr_0.75fr] lg:gap-14">
          {/* Left Image */}
          <div className="flex min-h-[360px] items-center justify-center bg-white p-4 shadow-[0_18px_60px_rgba(0,0,0,0.04)] sm:min-h-[480px] sm:p-8 lg:min-h-[620px]">
            <img
              src={floorPlans[active].image}
              alt={floorPlans[active].title}
              className="max-h-[310px] w-full object-contain transition duration-500 sm:max-h-[430px] lg:max-h-[560px]"
            />
          </div>

          {/* Right List */}
          <div className="w-full">
            <div className="mb-5 lg:hidden">
              <h3 className="text-lg font-semibold text-black">
                {floorPlans[active].title}
              </h3>
              <p className="mt-1 text-sm text-black/55">
                Tap below to view another unit plan.
              </p>
            </div>

            <ul className="max-h-[390px] overflow-y-auto pr-1 lg:max-h-[520px]">
              {floorPlans.map((item, index) => {
                const isActive = active === index;

                return (
                  <li
                    key={item.name}
                    onClick={() => setActive(index)}
                    className="group cursor-pointer"
                  >
                    <div className="flex items-center justify-between border-b border-black/20 py-4 sm:py-5">
                      <span
                        className={`text-[15px] font-medium uppercase tracking-[1.8px] transition sm:text-[17px] lg:text-[19px] ${
                          isActive
                            ? "text-[#c99b21]"
                            : "text-black/75 group-hover:text-black"
                        }`}
                      >
                        {item.name}
                      </span>

                      <span
                        className={`h-[2px] transition-all duration-300 ${
                          isActive
                            ? "w-10 bg-[#c99b21]"
                            : "w-0 bg-black/40 group-hover:w-8"
                        }`}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <button className="rounded-full bg-[#FCB33A] px-7 py-3.5 text-xs font-extrabold uppercase tracking-[1.6px] text-black transition hover:bg-black hover:text-white">
                Download Floor Plan
              </button>

              <button className="rounded-full border border-black/15 bg-white px-7 py-3.5 text-xs font-extrabold uppercase tracking-[1.6px] text-black transition hover:border-black hover:bg-black hover:text-white">
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}