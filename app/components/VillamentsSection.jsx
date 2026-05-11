"use client";

import { useMemo, useState } from "react";
import {
  ArrowDownToLine,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const floorPlanGroups = [
  {
    id: "site-plan",
    label: "SITE PLAN",
    title: "Site Plan",
    description: "Overall master layout of Casagrand Moondance.",
    images: [
      {
        name: "Site Plan",
        src: "/flooreplan/SITE PLAN/JPG/SITE PLAN.jpg",
      },
    ],
  },
  {
    id: "basement-floor-plan",
    label: "BASEMENT FLOOR PLAN",
    title: "Basement Floor Plan",
    description: "Basement level planning and parking layout.",
    images: [
      {
        name: "Basement Floor Plan",
        src: "/flooreplan/BASEMENT FLOOR PLAN/JPG/BASEMENT FLOOR PLAN.jpg",
      },
    ],
  },
  {
    id: "floor-plan",
    label: "FLOOR PLAN",
    title: "Floor Plans",
    description: "Typical floor plans across residential levels.",
    images: [
      {
        name: "First Floor Plan",
        src: "/flooreplan/FLOOR PLAN/JPG/FIRST FLOOR PLAN.jpg",
      },
      {
        name: "Second Floor Plan",
        src: "/flooreplan/FLOOR PLAN/JPG/SECOND FLOOR PLAN.jpg",
      },
      {
        name: "Third Floor Plan",
        src: "/flooreplan/FLOOR PLAN/JPG/THIRD FLOOR PLAN.jpg",
      },
      {
        name: "Fourth Floor Plan",
        src: "/flooreplan/FLOOR PLAN/JPG/FOURTH FLOOR PLAN.jpg",
      },
      {
        name: "Terrace Floor Plan",
        src: "/flooreplan/FLOOR PLAN/JPG/TERRACE FLOOR PLAN.jpg",
      },
    ],
  },
  {
    id: "club-house",
    label: "CLUB HOUSE",
    title: "Club House Plans",
    description: "Clubhouse plans across different levels.",
    images: [
      {
        name: "Ground Floor Plan",
        src: "/flooreplan/CLUB HOUSE/JPG/GROUND FLOOR PLAN.jpg",
      },
      {
        name: "First Floor Plan",
        src: "/flooreplan/CLUB HOUSE/JPG/FIRST FLOOR PLAN.jpg",
      },
      {
        name: "Second Floor Plan",
        src: "/flooreplan/CLUB HOUSE/JPG/SECOND FLOOR PLAN.jpg",
      },
      {
        name: "Third Floor Plan",
        src: "/flooreplan/CLUB HOUSE/JPG/THIRD FLOOR PLAN.jpg",
      },
      {
        name: "Terrace Floor Plan",
        src: "/flooreplan/CLUB HOUSE/JPG/TERRACE FLOOR PLAN.jpg",
      },
    ],
  },
  {
    id: "1bhk-unit-plan",
    label: "1 BHK UNIT PLAN",
    title: "1 BHK Unit Plans",
    description: "Compact and efficient 1 BHK apartment layouts.",
    images: [
      { name: "AG14", src: "/flooreplan/UNIT PLAN/1BHK/JPG/AG14.jpg" },
      { name: "AG22", src: "/flooreplan/UNIT PLAN/1BHK/JPG/AG22.jpg" },
      { name: "BG03", src: "/flooreplan/UNIT PLAN/1BHK/JPG/BG03.jpg" },
      { name: "BG17", src: "/flooreplan/UNIT PLAN/1BHK/JPG/BG17.jpg" },
      { name: "BG25", src: "/flooreplan/UNIT PLAN/1BHK/JPG/BG25.jpg" },
      { name: "CG14", src: "/flooreplan/UNIT PLAN/1BHK/JPG/CG14.jpg" },
    ],
  },
  {
    id: "2bhk-unit-plan",
    label: "2 BHK UNIT PLAN",
    title: "2 BHK Unit Plans",
    description: "Well-planned 2 BHK homes for modern family living.",
    images: [
      { name: "A122", src: "/flooreplan/UNIT PLAN/2BHK/JPG/A122.jpg" },
      { name: "AG17", src: "/flooreplan/UNIT PLAN/2BHK/JPG/AG17.jpg" },
      { name: "AG18", src: "/flooreplan/UNIT PLAN/2BHK/JPG/AG18.jpg" },
      { name: "AG20", src: "/flooreplan/UNIT PLAN/2BHK/JPG/AG20.jpg" },
      { name: "AG28", src: "/flooreplan/UNIT PLAN/2BHK/JPG/AG28.jpg" },
      { name: "BG12", src: "/flooreplan/UNIT PLAN/2BHK/JPG/BG12.jpg" },
      { name: "BG13", src: "/flooreplan/UNIT PLAN/2BHK/JPG/BG13.jpg" },
      { name: "BG24", src: "/flooreplan/UNIT PLAN/2BHK/JPG/BG24.jpg" },
      { name: "CG02", src: "/flooreplan/UNIT PLAN/2BHK/JPG/CG02.jpg" },
      { name: "CG11", src: "/flooreplan/UNIT PLAN/2BHK/JPG/CG11.jpg" },
      { name: "CG18", src: "/flooreplan/UNIT PLAN/2BHK/JPG/CG18.jpg" },
      { name: "CG25", src: "/flooreplan/UNIT PLAN/2BHK/JPG/CG25.jpg" },
      {
        name: "Model Flat - AG17",
        src: "/flooreplan/UNIT PLAN/2BHK/JPG/MODEL FLAT - AG17.jpg",
      },
    ],
  },
  {
    id: "3bhk-unit-plan",
    label: "3 BHK UNIT PLAN",
    title: "3 BHK Unit Plans",
    description: "Spacious 3 BHK apartment layouts with functional planning.",
    images: [
      { name: "AG01", src: "/flooreplan/UNIT PLAN/3BHK/JPG/AG01.jpg" },
      { name: "AG03", src: "/flooreplan/UNIT PLAN/3BHK/JPG/AG03.jpg" },
      { name: "AG05", src: "/flooreplan/UNIT PLAN/3BHK/JPG/AG05.jpg" },
      { name: "AG08", src: "/flooreplan/UNIT PLAN/3BHK/JPG/AG08.jpg" },
      { name: "AG09", src: "/flooreplan/UNIT PLAN/3BHK/JPG/AG09.jpg" },
      { name: "AG10", src: "/flooreplan/UNIT PLAN/3BHK/JPG/AG10.jpg" },
      { name: "AG11", src: "/flooreplan/UNIT PLAN/3BHK/JPG/AG11.jpg" },
      { name: "AG16", src: "/flooreplan/UNIT PLAN/3BHK/JPG/AG16.jpg" },
      { name: "AG24", src: "/flooreplan/UNIT PLAN/3BHK/JPG/AG24.jpg" },
      { name: "AG26", src: "/flooreplan/UNIT PLAN/3BHK/JPG/AG26.jpg" },
      { name: "AG34", src: "/flooreplan/UNIT PLAN/3BHK/JPG/AG34.jpg" },
      { name: "AG37", src: "/flooreplan/UNIT PLAN/3BHK/JPG/AG37.jpg" },
      { name: "B101", src: "/flooreplan/UNIT PLAN/3BHK/JPG/B101.jpg" },
      { name: "BG01", src: "/flooreplan/UNIT PLAN/3BHK/JPG/BG01.jpg" },
      { name: "BG28", src: "/flooreplan/UNIT PLAN/3BHK/JPG/BG28.jpg" },
      { name: "CG19", src: "/flooreplan/UNIT PLAN/3BHK/JPG/CG19.jpg" },
    ],
  },
];

export default function VillamentsSection() {
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);

  const activeGroup = floorPlanGroups[activeGroupIndex];

  const activeImage = useMemo(() => {
    return activeGroup.images[activeImageIndex] || activeGroup.images[0];
  }, [activeGroup, activeImageIndex]);

  const changeGroup = (index) => {
    setActiveGroupIndex(index);
    setActiveImageIndex(0);
    setIsDropdownOpen(false);
  };

  const goPrev = () => {
    setActiveImageIndex((prev) =>
      prev === 0 ? activeGroup.images.length - 1 : prev - 1
    );
  };

  const goNext = () => {
    setActiveImageIndex((prev) =>
      prev === activeGroup.images.length - 1 ? 0 : prev + 1
    );
  };

  const handleTouchStart = (event) => {
    setTouchStartX(event.touches[0].clientX);
  };

  const handleTouchEnd = (event) => {
    if (touchStartX === null) return;

    const touchEndX = event.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 45) {
      if (diff > 0) {
        goNext();
      } else {
        goPrev();
      }
    }

    setTouchStartX(null);
  };

  return (
    <section
      id="residences"
      className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[2.5px] text-[#c99b21] sm:text-xs">
            Floor Plans
          </p>

          <h2 className="text-[28px] font-semibold leading-tight tracking-[1px] text-black sm:text-[38px] lg:text-[48px]">
            Explore Unit Plans
          </h2>

          <p className="mt-4 text-sm leading-7 text-black/65 sm:text-base">
            Select a floor type to view site plan, floor plans, clubhouse plans,
            and apartment unit layouts.
          </p>
        </div>

        {/* Mobile Dropdown */}
        <div className="relative mb-6 lg:hidden">
          <button
            type="button"
            onClick={() => setIsDropdownOpen((prev) => !prev)}
            className="flex w-full items-center justify-between rounded-[24px] border border-black/10 bg-white px-5 py-4 text-left shadow-[0_14px_45px_rgba(0,0,0,0.06)]"
          >
            <span>
              <span className="block text-[10px] font-bold uppercase tracking-[2px] text-[#c99b21]">
                Select Floor Type
              </span>
              <span className="mt-1 block md:text-lg font-semibold text-black">
                {activeGroup.title}
              </span>
            </span>

            <ChevronDown
              className={`h-5 w-5 transition ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isDropdownOpen && (
            <div className="absolute left-0 right-0 top-[calc(100%+10px)] z-30 max-h-[360px] overflow-y-auto rounded-[24px] border border-black/10 bg-white p-2 shadow-[0_24px_70px_rgba(0,0,0,0.18)]">
              {floorPlanGroups.map((group, index) => {
                const isActive = activeGroupIndex === index;

                return (
                  <button
                    key={group.id}
                    type="button"
                    onClick={() => changeGroup(index)}
                    className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left transition ${
                      isActive
                        ? "bg-[#BD9E5A] text-black"
                        : "text-black/70 hover:bg-black/5"
                    }`}
                  >
                    <span>
                      <span className="block text-[12px] font-extrabold uppercase tracking-[1.4px]">
                        {group.label}
                      </span>
                      <span className="mt-1 block text-[11px] text-black/55">
                        {group.images.length}{" "}
                        {group.images.length === 1 ? "image" : "images"}
                      </span>
                    </span>

                    <ChevronRight className="h-4 w-4" />
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[1.45fr_0.72fr] lg:gap-12">
          {/* Left Image Preview */}
          <div>
            <div className="overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
              {/* Preview Header */}
              <div className="flex flex-col gap-4 border-b border-black/10 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#c99b21] sm:text-xs">
                    {activeGroup.label}
                  </p>

                  
                </div>

                <a
                  href={activeImage.src}
                  download
                  className="inline-flex w-fit items-center gap-2 rounded-full bg-[#BD9E5A] px-5 py-3 text-[11px] font-extrabold uppercase tracking-[1.4px] text-black transition hover:bg-black hover:text-white"
                >
                  <ArrowDownToLine className="h-4 w-4" />
                  Download
                </a>
              </div>

              {/* Image Area */}
              <div
                className="relative flex min-h-[360px] items-center justify-center bg-[#fbfbfb] p-3 sm:min-h-[520px] sm:p-6 lg:min-h-[620px]"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <img
                  src={activeImage.src}
                  alt={activeImage.name}
                  className="max-h-[330px] w-full select-none object-contain transition duration-500 sm:max-h-[500px] lg:max-h-[590px]"
                  draggable={false}
                />

                {activeGroup.images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={goPrev}
                      className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-black/10 bg-white/90 text-black shadow-lg backdrop-blur-xl transition hover:bg-[#BD9E5A] sm:left-5 sm:h-12 sm:w-12"
                      aria-label="Previous floor plan"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>

                    <button
                      type="button"
                      onClick={goNext}
                      className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-black/10 bg-white/90 text-black shadow-lg backdrop-blur-xl transition hover:bg-[#BD9E5A] sm:right-5 sm:h-12 sm:w-12"
                      aria-label="Next floor plan"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/70 px-4 py-2 text-[11px] font-bold text-white backdrop-blur-xl">
                      {activeImageIndex + 1} / {activeGroup.images.length}
                    </div>
                  </>
                )}
              </div>
            </div>
 
          </div>

          {/* Desktop Floor Type List */}
          <div className="hidden lg:block">
            <div className="sticky top-28 rounded-[28px] border border-black/10 bg-white p-5 shadow-[0_18px_60px_rgba(0,0,0,0.06)]">
              <div className="mb-4 border-b border-black/10 pb-4">
                <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#c99b21]">
                  Select Floor Type
                </p>
                <h3 className="mt-1 md:text-xl font-semibold text-black">
                  {activeGroup.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-black/55">
                  {activeGroup.description}
                </p>
              </div>

              <ul className="space-y-2">
                {floorPlanGroups.map((group, index) => {
                  const isActive = activeGroupIndex === index;

                  return (
                    <li key={group.id}>
                      <button
                        type="button"
                        onClick={() => changeGroup(index)}
                        className={`group flex w-full items-center justify-between gap-4 rounded-2xl px-4 py-4 text-left transition ${
                          isActive
                            ? "bg-[#BD9E5A] text-black"
                            : "bg-[#f6f6f6] text-black/70 hover:bg-black hover:text-white"
                        }`}
                      >
                        <span>
                          <span className="block text-[12px] font-extrabold uppercase tracking-[1.5px]">
                            {group.label}
                          </span>

                          <span
                            className={`mt-1 block text-[11px] font-medium ${
                              isActive
                                ? "text-black/70"
                                : "text-black/45 group-hover:text-white/65"
                            }`}
                          >
                            {group.images.length}{" "}
                            {group.images.length === 1 ? "image" : "images"}
                          </span>
                        </span>

                        <ChevronRight
                          className={`h-5 w-5 shrink-0 transition ${
                            isActive
                              ? "translate-x-1"
                              : "group-hover:translate-x-1"
                          }`}
                        />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}