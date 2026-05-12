"use client";

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f5] px-5 py-10 text-black/70 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Disclaimer Text */}
        <div className="space-y-4 text-[12px] leading-relaxed sm:text-[13px]">
          <p>
            The project “Casagrand Moondance” is a residential development
            located at Off Mysore Road, 10mins from RR nagar, Bengaluru, Karnataka –
            560074. Project information including pricing, specifications,
            amenities, floor plans, availability, possession timelines, and
            approvals is subject to change and should be verified with the
            authorised sales team before making any booking decision.
          </p>

          <p>
            This website is for general information and marketing purposes only.
            It does not constitute an offer, legal commitment, advertisement, or
            invitation to purchase. All images, renders, floor plans, maps,
            layouts, and visuals shown are indicative or artist impressions and
            may differ from the actual development.
          </p>

          <p>
            Prices and availability are subject to change without prior notice.
            Buyers are advised to independently verify all details, approvals,
            carpet area, saleable area, payment plans, taxes, and statutory
            charges before proceeding.
          </p>
        </div>

        {/* Links Row */}
        <div className="mt-8 flex flex-col gap-5 border-t border-black/10 pt-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-5 text-[13px] font-medium sm:gap-8">
            <a
              href="#"
              className="transition hover:text-black"
            >
              RERA Details
            </a>

            <a
              href="https://www.casagrand.co.in/new-privacy-policy/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-black"
            >
              Privacy Policy
            </a>

            <a
              href="https://www.casagrand.co.in/terms-and-condition/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-black"
            >
              Terms & Conditions
            </a>
          </div>

          <p className="text-[12px] text-black/55">
            © 2026 Casagrand Moondance. All rights reserved.
          </p>
        </div>

        {/* Bottom Info */}
        <div className="mt-6 grid gap-3 rounded-[22px] border border-black/10 bg-white p-5 text-[12px] leading-relaxed text-black/60 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-bold uppercase tracking-[1.4px] text-black/80">
              Project Address
            </p>
            <p className="mt-1">
              VFF2+QRJ, Off Mysore Road, 10mins from RR nagar, Bengaluru, Karnataka –
              560074.
            </p>
          </div>

          <div>
            <p className="font-bold uppercase tracking-[1.4px] text-black/80">
              Sales Office Timing
            </p>
            <p className="mt-1">Monday to Sunday, 10 AM – 7 PM.</p>
          </div>

          <div>
            <p className="font-bold uppercase tracking-[1.4px] text-black/80">
              Developer
            </p>
            <p className="mt-1">Casagrand Builder Pvt. Ltd.</p>
          </div>
        </div>

        {/* Final Note */}
        <p className="mx-auto mt-8 max-w-4xl text-center text-[11px] leading-relaxed text-black/45">
          *Disclaimer: The information provided on this website is for
          informational purposes only. Renderings, layouts, floor plans, maps,
          amenities, and specifications are indicative and subject to change.
          Please verify all details with the sales team before making a purchase.
        </p>
      </div>
    </footer>
  );
}