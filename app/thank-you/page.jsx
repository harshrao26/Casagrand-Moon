"use client";

import Link from "next/link";
import {
  CheckCircle2,
  ArrowLeft,
  Phone,
  Download,
  CalendarCheck,
  MapPin,
} from "lucide-react";

export default function ThankYouPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f7f4ec] px-4 py-8 sm:px-6 lg:px-10">
      {/* Background Effects */}
      <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#BD9E5A]/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full bg-white blur-[110px]" />

      <section className="relative z-10 flex min-h-[calc(100vh-64px)] items-center justify-center">
        <div className="mx-auto w-full max-w-4xl">
          <div className="overflow-hidden rounded-[36px] border border-black/10 bg-white shadow-[0_30px_100px_rgba(0,0,0,0.10)]">
            {/* Top Image / Banner */}
            <div className="relative h-[230px] overflow-hidden bg-black sm:h-[300px]">
              <img
                src="/indoor-images/Copy of s03.jpg"
                alt="Casagrand Moondance"
                className="h-full w-full object-cover opacity-75"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-6 left-5 right-5 text-center text-white sm:bottom-8">
                <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#BD9E5A] px-4 py-2 text-[10px] font-extrabold uppercase tracking-[2px] text-black">
                  <CheckCircle2 className="h-4 w-4" />
                  Enquiry Submitted
                </p>

                <h1 className="text-3xl font-extrabold leading-tight sm:text-5xl">
                  Thank You!
                </h1>
              </div>
            </div>

            {/* Content */}
            <div className="px-5 py-8 text-center sm:px-8 sm:py-10 lg:px-12">
              <h2 className="text-2xl font-extrabold leading-tight text-black sm:text-4xl">
                Our Team Will Contact You Shortly
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-black/60 sm:text-base">
                Your enquiry for Casagrand Moondance has been received. Our
                sales expert will reach out with pricing, floor plans, brochure,
                availability, and site visit assistance.
              </p>

           

              {/* CTA */}
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#BD9E5A] px-7 py-4 text-xs font-extrabold uppercase tracking-[1.6px] text-black transition hover:bg-black hover:text-white sm:w-auto"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back To Home
                </Link>

                
              </div>

              <p className="mt-7 text-[11px] leading-relaxed text-black/40">
                *Response time may vary based on sales team availability.
                Pricing, offers, and availability are subject to change.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}