"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Home, Menu, X } from "lucide-react";

const navItems = [
  "Showcase",
  "Highlights",
  "Amenities",
  "Gallery",
  "Location",
  "Residences",
  "Sustainability",
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full px-3 pt-3 sm:px-5">
        <div
          className={`mx-auto flex max-w-[1380px] items-center justify-between rounded-[22px] border transition-all duration-300 ${
            isScrolled
              ? "border-black/10 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.12)] backdrop-blur-xl"
              : "border-white/35 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl"
          } px-4 py-3 sm:px-5 lg:px-6`}
        >
          <a href="#home" className="flex items-center gap-3" aria-label="Birla Alokya Home">
            <span className=" relative ">
              <img
                src="/logo.png"
                alt="Birla Alokya"
                className="h-10"  
               />
            </span>

            <span className="hidden leading-none sm:block">
              
              
            </span>
          </a>

          <nav className="hidden items-center rounded-full  p-1.5 xl:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="rounded-full px-4 py-2.5 text-[11px] font-semibold uppercase text-[#5f5143] transition hover:bg-white hover:text-[#241812] hover:shadow-[0_8px_24px_rgba(36,24,18,0.08)]"
              > 
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="#contact"
              className="group hidden h-11 items-center gap-2 rounded-full bg-[#FBBD47] px-5 text-xs  font-bold uppercase   text-black transition hover:bg-[#ad8d4d] lg:inline-flex"
            >
              Book Visit
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

           <div className="md:hidden block ">
             <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="grid   h-11 w-11 place-items-center rounded-full bg-[#241812] text-white transition hover:bg-[#ad8d4d]"
              aria-label="Open menu"
            >
              <Menu className="h-5   w-5 stroke-[2.5]" />
            </button>
           </div>
          </div>
        </div>
      </header>

      {isOpen && (
        <div className="fixed inset-0 z-[70] xl:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-[#241812]/55 backdrop-blur-sm"
            aria-label="Close menu overlay"
          />

          <aside className="absolute right-3 top-3 flex h-[calc(100vh-24px)] w-[min(410px,calc(100vw-24px))] flex-col overflow-hidden rounded-[26px] bg-white shadow-[-24px_24px_80px_rgba(0,0,0,0.28)]">
            <div className="flex items-center justify-between   px-5 py-4">
              <a
                href="#home"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3"
                aria-label="Birla Alokya Home"
              >
                <span className="grid   place-items-center rounded-2xl bg-white ring-1 ring-black/5">
                  <img
                    src="/logo.png"
                    alt="Birla Alokya"
                    className=" h-9  object-contain"
                  />
                </span>

                 
              </a>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="grid h-11 w-11 place-items-center rounded-full bg-white text-[#241812] ring-1 ring-black/10 transition hover:bg-[#241812] hover:text-white"
                aria-label="Close menu"
              >
                <X className="h-5 w-5 stroke-[2.5]" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-5 py-6">
              <a
                href="#home"
                onClick={() => setIsOpen(false)}
                className="group flex items-center justify-between rounded-2xl bg-white px-5 py-4 text-[12px] font-semibold text-[#241812] shadow-[0_10px_30px_rgba(36,24,18,0.06)]"
              >
                <span className="flex items-center gap-3">
                  <Home className="h-4 w-4 fill-[#241812] stroke-[#241812]" />
                  Home
                </span>
                <ArrowUpRight className="h-4 w-4 opacity-60 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center justify-between rounded-2xl px-5 py-4 text-[12px] font-semibold text-[#241812] transition hover:bg-white hover:shadow-[0_10px_30px_rgba(36,24,18,0.06)]"
                >
                  {item}
                  <ArrowUpRight className="h-4 w-4 opacity-0 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-60" />
                </a>
              ))}
            </nav>

            <div className="border-t border-black/5 p-5">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="group flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#241812] text-[10px] font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#ad8d4d]"
              >
                Book A Site Visit
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
