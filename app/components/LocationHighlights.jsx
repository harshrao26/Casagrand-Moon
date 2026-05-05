"use client";

const locations = [
  {
    name: "INORBIT MALL",
    x: "25%",
    y: "25%",
    img: "/images/loc1.webp",
  },
  {
    name: "ITPL",
    x: "30%",
    y: "45%",
    img: "/images/loc2.webp",
  },
  {
    name: "BANGALORE INTERNATIONAL ACADEMY",
    x: "45%",
    y: "55%",
    img: "/images/loc3.webp",
  },
  {
    name: "HOPE FARM JUNCTION",
    x: "75%",
    y: "40%",
    img: "/images/loc4.webp",
  },
  {
    name: "WHITEFIELD GLOBAL SCHOOL",
    x: "70%",
    y: "65%",
    img: "/images/loc5.webp",
  },
];

export default function LocationHighlights() {
  return (
    <section className="bg-[#f5f5f5] py-10  ">

      {/* Heading */}
      <h2 className="text-center text-[28px] sm:text-[34px] font-semibold">
        Location Highlights
      </h2>

      {/* Map Container */}
      <div className="relative max-w-6xl mx-auto h-[500px] rounded-full overflow-hidden">

        {/* Concentric Circles */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="absolute rounded-full border border-[#c99b21]/40"
              style={{
                width: `${i * 150}px`,
                height: `${i * 150}px`,
              }}
            />
          ))}
        </div>

        {/* Center Point */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-[90px] h-[90px] rounded-full border border-[#c99b21] flex items-center justify-center">
              <div>
                <p className="text-[28px] font-bold text-[#c99b21]">0</p>
                <p className="text-[12px] text-[#c99b21]">KMS</p>
              </div>
            </div>
          </div>
        </div>

        {/* Location Points */}
        {locations.map((loc, i) => (
          <div
            key={i}
            className="absolute flex items-center gap-2 group cursor-pointer"
            style={{
              left: loc.x,
              top: loc.y,
              transform: "translate(-50%, -50%)",
            }}
          >
            {/* Dot */}
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-md">
              <img
                src={loc.img}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            {/* Label */}
            <p className="text-[12px] sm:text-[13px] font-medium text-black group-hover:text-[#c99b21] transition">
              {loc.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}