"use client";

const locations = [
  {
    name: "NICE Road Interchange",
    x: "24%",
    y: "30%",
    img: "/images/loc1.webp",
  },
  {
    name: "Mysore Road Metro Station",
    x: "31%",
    y: "55%",
    img: "/images/loc2.webp",
  },
  {
    name: "Kengeri",
    x: "46%",
    y: "68%",
    img: "/images/loc3.webp",
  },
  {
    name: "Rajarajeshwari Nagar",
    x: "70%",
    y: "43%",
    img: "/images/loc4.webp",
  },
  {
    name: "Mysore Road / NH 275",
    x: "66%",
    y: "72%",
    img: "/images/loc5.webp",
  },
];

export default function LocationHighlights() {
  return (
    <section className="overflow-hidden bg-[#f5f5f5] px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[2.5px] text-[#d79616] sm:text-xs">
            Location Advantage
          </p>

          <h2 className="text-[28px] font-semibold leading-tight text-black sm:text-[34px] lg:text-[42px]">
            Location Highlights
          </h2>

          <p className="mt-4 text-sm leading-7 text-black/65 sm:text-base">
            Casagrand Moondance is located in Kumbalgodu, off Mysore Road, with
            strong access to NH 275, NICE Road, Kengeri, Rajarajeshwari Nagar,
            and Mysore Road Metro connectivity.
          </p>
        </div>

        {/* Map Outer Wrapper */}
        <div className="relative mx-auto max-w-6xl overflow-visible px-0 sm:px-4">
          {/* Map Container */}
          <div className="relative mx-auto h-[430px] overflow-visible rounded-[36px]   border-black/10 bg-whit sh adow-[0_24px_80px_rgba(0,0,0,0.08)] sm:h-[500px] lg:h-[560px] lg:rounded-[999px]">
            {/* Soft Inner Background */}
            <div className="absolute inset-4 rounded-[30px] bg- [#fffdf7] lg:inset-8 lg:rounded-[999px]" />

            {/* Concentric Circles */}
            <div className="absolute inset-0 flex items-center justify-center">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="absolute rounded-full border border-[#d79616]/30"
                  style={{
                    width: `min(${i * 140}px, ${i * 18}vw)`,
                    height: `min(${i * 140}px, ${i * 18}vw)`,
                  }}
                />
              ))}
            </div>

            {/* Larger Desktop Circles */}
            <div className="absolute inset-0 hidden items-center justify-center lg:flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="absolute rounded-full border border-[#d79616]/25"
                  style={{
                    width: `${i * 165}px`,
                    height: `${i * 165}px`,
                  }}
                />
              ))}
            </div>

            {/* Center Point */}
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              <div className="flex h-[92px] w-[92px] items-center justify-center rounded-full border border-[#d79616] bg-whit shadow-[0_15px_45px_rgba(0,0,0,0.12)] sm:h-[108px] sm:w-[108px]">
                <div className="text-center">
                  <p className="text-[24px] font-bold leading-none text-[#d79616] sm:text-[30px]">
                    0
                  </p>
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-[1.5px] text-[#d79616]">
                    KMS
                  </p>
                  <p className="mt-1 text-[9px] font-bold uppercase tracking-[1px] text-black/50">
                    Moondance
                  </p>
                </div>
              </div>
            </div>

            {/* Desktop / Tablet Location Points */}
            <div className="relative z-20 hidden h-full sm:block">
              {locations.map((loc, i) => (
                <div
                  key={i}
                  className="group absolute flex cursor-pointer items-center gap-3"
                  style={{
                    left: loc.x,
                    top: loc.y,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {/* <div className="h-11 w-11 shrink-0 overflow-hidden rounded-full border-2 border-white bg-whit shadow-md transition duration-300 group-hover:scale-110">
                    <img
                      src={loc.img}
                      alt={loc.name}
                      className="h-full w-full object-cover"
                    />
                  </div> */}

                  <p className="max-w-[170px] text-left text-[12px] font-semibold leading-tight text-black transition group-hover:text-[#d79616] sm:text-[13px] lg:text-[15px]">
                    {loc.name}
                  </p>
                </div>
              ))}
            </div>

            {/* Mobile Location List */}
            <div className="absolute inset-x-4 bottom-5 z-20 grid grid-cols-1 gap-2 sm:hidden">
              {locations.map((loc, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-full border border-black/10   px-3 py-2 shadow-sm backdrop-blur-xl"
                >
                  <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full border-2 border-white bg-whit shadow-md">
                    <img
                      src={loc.img}
                      alt={loc.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <p className="text-[11px] font-bold uppercase tracking-[1px] text-black/70">
                    {loc.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

         
      </div>
    </section>
  );
}