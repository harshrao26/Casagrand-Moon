"use client";

import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Home,
  Menu,
  X,
  Phone,
  MapPin,
  IndianRupee,
} from "lucide-react";
import { useLeadForm } from "./LeadFormContext";

const navItems = [
  { label: "Overview", href: "#about" },
  { label: "Showcase", href: "#showcase" },
  { label: "Pricing", href: "#pricing" },
  { label: "Highlights", href: "#highlights" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
  { label: "Floor Plans", href: "#residences" },
  { label: "FAQ", href: "#faq" },
];

const quickInfo = [
  {
    icon: MapPin,
    label: "Kumbalgodu",
  },
  {
    icon: IndianRupee,
    label: "₹72L Onwards*",
  },
];

export default function Header() {
  const { openLeadForm } = useLeadForm();

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);

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

  const handleLeadClick = () => {
    setIsOpen(false);
    openLeadForm();
  };

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full px-3 pt-3 sm:px-5">
        <div
          className={`mx-auto flex max-w-[1420px] items-center justify-between gap-4 rounded-[22px] border px-4 py-3 transition-all duration-300 sm:px-5 lg:px-6 ${
            isScrolled
              ? "border-black/10 bg-white/95 shadow-[0_18px_55px_rgba(0,0,0,0.12)] backdrop-blur-xl"
              : "border-white/40 bg-white/90 shadow-[0_14px_45px_rgba(0,0,0,0.08)] backdrop-blur-xl"
          }`}
        >
          {/* Logo */}
          <a
            href="#home"
            className="flex shrink-0 items-center gap-3"
            aria-label="Casagrand Moondance Home"
          >
            <img
              src="/logo.png"
              alt="Casagrand Moondance"
              className="h-9 w-auto object-contain sm:h-10 lg:h-11"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center justify-center gap-1 xl:flex">
            {navItems.slice(0, 8).map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3.5 py-2.5 text-[10px] font-extrabold uppercase tracking-[1.1px] text-black/60 transition hover:bg-[#BD9E5A]/15 hover:text-black 2xl:px-4"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right */}
          <div className="hidden shrink-0 items-center gap-3 lg:flex">
            
            <button
              type="button"
              onClick={handleLeadClick}
              className="group inline-flex h-11 items-center gap-2 rounded-full bg-[#BD9E5A] px-5 text-xs font-extrabold uppercase tracking-[1.4px] text-black transition hover:bg-black hover:text-white"
            >
              Book Visit
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
 
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#241812] text-white transition hover:bg-[#BD9E5A] hover:text-black xl:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5 stroke-[2.5]" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-[70] xl:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/55 backdrop-blur-sm"
            aria-label="Close menu overlay"
          />

          <aside className="absolute right-3 top-3 flex h-[calc(100vh-24px)] w-[min(420px,calc(100vw-24px))] flex-col overflow-hidden rounded-[28px] bg-[#f7f4ec] shadow-[-24px_24px_80px_rgba(0,0,0,0.28)]">
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-black/10 bg-white px-5 py-4">
              <a
                href="#home"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3"
                aria-label="Casagrand Moondance Home"
              >
                <img
                  src="/logo.png"
                  alt="Casagrand Moondance"
                  className="h-10 w-auto object-contain"
                />
              </a>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="grid h-11 w-11 place-items-center rounded-full bg-black/5 text-black transition hover:bg-black hover:text-white"
                aria-label="Close menu"
              >
                <X className="h-5 w-5 stroke-[2.5]" />
              </button>
            </div>

            {/* Quick Info */}
          

            {/* Nav */}
            <nav className="flex flex-1 flex-col gap-2 overflow-y-auto px-5 pb-5">
              <a
                href="#home"
                onClick={() => setIsOpen(false)}
                className="group flex items-center justify-between rounded-2xl bg-white px-5 py-4 text-[13px] font-extrabold uppercase tracking-[1.2px] text-black shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
              >
                <span className="flex items-center gap-3">
                  <Home className="h-4 w-4 fill-black stroke-black" />
                  Home
                </span>

                <ArrowUpRight className="h-4 w-4 opacity-60 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center justify-between rounded-2xl bg-white/70 px-5 py-4 text-[13px] font-bold uppercase tracking-[1.2px] text-black/70 transition hover:bg-white hover:text-black hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
                >
                  {item.label}

                  <ArrowUpRight className="h-4 w-4 opacity-0 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-60" />
                </a>
              ))}
            </nav>

            {/* Drawer CTA */}
            <div className="border-t border-black/10 bg-white p-5">
              <button
                type="button"
                onClick={handleLeadClick}
                className="group flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#BD9E5A] text-[11px] font-extrabold uppercase tracking-[1.7px] text-white transition hover:bg-white hover:text-"
              >
                Book A Site Visit
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}