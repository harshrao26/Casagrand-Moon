"use client";

// import { Youtube, Linkedin, Instagram, X } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f5] px-5 py-10 text-black/70 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Top Text */}
        <p className="max-w-5xl text-[12px] leading-relaxed sm:text-[13px]">
          The project “Casagrand Moondance” is a residential development located
          at Kumbalgodu, off Mysore Road, Bengaluru, Karnataka 560074. Project
          information, including prices, specifications, amenities, floor plans,
          availability, possession timelines, and approvals, is subject to change
          and must be verified with the authorised sales team before booking.
          RERA registration details will be updated upon confirmation.
        </p>

        <p className="mt-4 max-w-5xl text-[12px] leading-relaxed sm:text-[13px]">
          This website is for information and marketing purposes only and does
          not constitute an offer, advertisement, legal commitment, or invitation
          to purchase. All images, renders, plans, and visuals shown are
          indicative or artist impressions and may differ from actual
          construction.
        </p>

        {/* Links Row */}
        <div className="mt-6 flex flex-col gap-5 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Left Links */}
          <div className="flex flex-wrap gap-5 text-[13px] sm:gap-8">
            <a href="#" className="transition hover:text-black">
              RERA Details
            </a>

            <a href="#" className="transition hover:text-black">
              Privacy Policy
            </a>

            <a href="#" className="transition hover:text-black">
              Terms & Conditions
            </a>
          </div>

          {/* Social Icons */}
          {/* <div className="flex gap-4">
            <Youtube className="h-5 w-5 cursor-pointer hover:text-black transition" />
            <X className="h-5 w-5 cursor-pointer hover:text-black transition" />
            <Linkedin className="h-5 w-5 cursor-pointer hover:text-black transition" />
            <Instagram className="h-5 w-5 cursor-pointer hover:text-black transition" />
          </div> */}
        </div>

        {/* Bottom Text */}
        <div className="mt-6 text-[12px] leading-relaxed text-black/60">
          <p>© 2026 Casagrand Moondance. All rights reserved.</p>

          <p className="mt-1">
            Project Address: VFF2+QRJ, off Mysore Road, Kumabalgodu, Bengaluru,
            Karnataka – 560074.
          </p>

          <p className="mt-1">
            Sales Office Timings: Monday to Sunday, 10 AM – 7 PM.
          </p>
        </div>
      </div>
    </footer>
  );
}