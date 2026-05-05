"use client";

// import {   Youtube, Linkedin, Instagram, X } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f5] px-6 py-10 text-black/70">

      <div className="max-w-6xl mx-auto">

        {/* Top Text */}
        <p className="text-[13px] leading-relaxed max-w-4xl">
          The Project “Birla Alokya” comprising of 218 Villaments and a Club house is registered with Karnataka RERA under the Registration No. PRM/KA/RERA/1250/304/PR/190724/002725 and can be viewed at:{" "}
          <a
            href="https://rera.karnataka.gov.in/"
            target="_blank"
            className="text-[#c99b21] underline"
          >
            https://rera.karnataka.gov.in/
          </a>
        </p>

        {/* Links Row */}
        <div className="flex flex-wrap items-center justify-between mt-6">

          {/* Left Links */}
          <div className="flex gap-8 text-[13px]">
            <a href="#" className="hover:text-black transition">
              RERA Details
            </a>
            <a href="#" className="hover:text-black transition">
              Privacy Policy
            </a>
          </div>

          {/* Social Icons */}
          {/* <div className="flex gap-4 mt-4 sm:mt-0">
            <Facebook className="h-5 w-5 cursor-pointer hover:text-black transition" />
            <Youtube className="h-5 w-5 cursor-pointer hover:text-black transition" />
            <X className="h-5 w-5 cursor-pointer hover:text-black transition" />
            <Linkedin className="h-5 w-5 cursor-pointer hover:text-black transition" />
            <Instagram className="h-5 w-5 cursor-pointer hover:text-black transition" />
          </div> */}
        </div>

        {/* Bottom Text */}
        <div className="mt-6 text-[12px] text-black/60">
          <p>© Birla Estates 2024. All rights reserved.</p>
          <p className="mt-1">
            CIN Number- U70100MH2017PTC303291
          </p>
        </div>
      </div>
    </footer>
  );
}