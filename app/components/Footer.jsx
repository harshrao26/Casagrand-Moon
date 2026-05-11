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

          <div className="pt-10 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center text-zinc-500 text-sm">
          <p>© 2026 Casagrand Builder Pvt. Ltd. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://www.casagrand.co.in/new-privacy-policy/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="https://www.casagrand.co.in/terms-and-condition/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
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

       <p className='text-xs text-zinc-500 text-center max-w-4xl mx-auto mt-10 pb-2'>
*Disclaimer: The information provided on this website is for general informational purposes only. All renderings, floor plans, and maps are artist&apos;s conceptions and not actual depictions of the building or its surroundings. Prices and availability are subject to change without notice. Please verify all details with our sales team before making a purchase.


 
      </p>
    </footer>
  );
}