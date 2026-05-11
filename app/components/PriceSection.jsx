"use client";

import { ArrowDownToLine, TrendingDown } from "lucide-react";

const priceRows = [
  {
    projectName: "Kumbalgodu",
    bhk: "2 BHK",
    launchSqft: "5199",
    area: "1171 - 1470 Sq.ft",
    price: "₹72L - ₹86L",
  },
  {
    projectName: "Kumbalgodu",
    bhk: "3 BHK",
    launchSqft: "5199",
    area: "1641 - 1866 Sq.ft",
    price: "₹97L - ₹1.08Cr",
  },
];

export default function PriceSection() {
  return (
    <section
      id="pricing"
      className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-9 max-w-3xl text-center">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[2.5px] text-[#c78305] sm:text-xs">
            Price Details
          </p>

          <h2 className="text-[28px] font-semibold leading-tight text-black sm:text-[34px] lg:text-[42px]">
            Casagrand Moondance Pricing
          </h2>

          <p className="mt-4 text-sm leading-7 text-black/60 sm:text-base">
            Choose from spacious 2 & 3 BHK premium apartments at Kumbalgodu, off
            Mysore Road, Bengaluru.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden overflow-hidden rounded-[28px] bg-white shadow-[0_24px_80px_rgba(0,0,0,0.08)] lg:block">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#36295d] text-white">
                <th className="border-r border-white/10 px-8 py-6 text-left text-[13px] font-extrabold uppercase tracking-[2.5px]">
                  Project Name
                </th>
                <th className="border-r border-white/10 px-8 py-6 text-center text-[13px] font-extrabold uppercase tracking-[2.5px]">
                  BHK
                </th>
                <th className="border-r border-white/10 px-8 py-6 text-center text-[13px] font-extrabold uppercase tracking-[2.5px]">
                  Launch / Sq.ft
                </th>
                <th className="border-r border-white/10 px-8 py-6 text-center text-[13px] font-extrabold uppercase tracking-[2.5px]">
                  Area (Sq.ft)
                </th>
                <th className="px-8 py-6 text-center text-[13px] font-extrabold uppercase tracking-[2.5px]">
                  Launch Price
                </th>
              </tr>
            </thead>

            <tbody>
              {priceRows.map((row, index) => (
                <tr
                  key={`${row.bhk}-${index}`}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="border-r border-black/10 px-8 py-8 text-[15px] font-extrabold uppercase tracking-[1.8px] text-black">
                    {row.projectName}
                  </td>

                  <td className="border-r border-black/10 px-8 py-8 text-center text-[16px] font-extrabold uppercase tracking-[1.5px] text-black">
                    {row.bhk}
                  </td>

                  <td className="border-r border-black/10 px-8 py-8 text-center text-[16px] font-extrabold text-black">
                    {row.launchSqft}
                  </td>

                  <td className="border-r border-black/10 px-8 py-8 text-center text-[16px] font-extrabold text-black">
                    {row.area}
                  </td>

                  <td className="px-8 py-8 text-center text-[16px] font-extrabold text-black">
                    {row.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="space-y-4 lg:hidden">
          {priceRows.map((row, index) => (
            <div
              key={`${row.bhk}-${index}`}
              className="overflow-hidden rounded-[24px] bg-white shadow-[0_18px_55px_rgba(0,0,0,0.07)]"
            >
              <div className="bg-[#130323] px-5 py-4 text-white">
                <p className="text-[10px] font-bold uppercase tracking-[2px] text-white/60">
                  Project Name
                </p>

                <div className="mt-1 flex items-center justify-between gap-4">
                  <h3 className="text-lg font-extrabold uppercase tracking-[1.5px]">
                    {row.projectName}
                  </h3>

                  <span className="rounded-full bg-[#BD9E5A] px-4 py-2 text-xs font-extrabold text-black">
                    {row.bhk}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 divide-x divide-y divide-black/10">
                <div className="p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[1.8px] text-black/45">
                    Launch / Sq.ft
                  </p>
                  <p className="mt-2 text-base font-extrabold text-black">
                    {row.launchSqft}
                  </p>
                </div>

                <div className="p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[1.8px] text-black/45">
                    Area
                  </p>
                  <p className="mt-2 text-base font-extrabold text-black">
                    {row.area}
                  </p>
                </div>

                <div className="col-span-2 p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[1.8px] text-black/45">
                    Launch Price
                  </p>
                  <p className="mt-2 text-xl font-extrabold text-black">
                    {row.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Row */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#BD9E5A] px-8 py-4 text-xs font-extrabold uppercase tracking-[2px] text-white shadow-[0_18px_45px_rgba(199,131,5,0.25)] transition hover:bg-black sm:w-auto sm:min-w-[280px]">
            <ArrowDownToLine className="h-5 w-5" />
            Get Offer Details
          </button>

         
        </div>
      </div>
    </section>
  );
}