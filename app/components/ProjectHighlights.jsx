"use client";

const highlights = [
  {
    value: "30+",
    label: "LifeDesigned® Amenities",
    image: "/images/highlight1.webp",
  },
  {
    value: "7.9",
    label: "Acres of Land Stretch",
    image: "/images/highlight2.webp",
  },
  {
    value: "218",
    label: "LifeDesigned® Residences",
    image: "/images/highlight3.webp",
  },
  {
    value: "1476",
    label: "sqm Exclusive Clubhouse",
    image: "/images/highlight4.webp",
  },
];

export default function ProjectHighlights() {
  return (
    <section className="bg-[#f3f3f3] py-14 px-4">
      
      {/* Heading */}
      <h2 className="text-center text-[28px] sm:text-[34px] font-semibold mb-10">
        Project Highlights
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2   lg:grid-cols-4">
        {highlights.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center text-center py-12 px-6 border-r last:border-r-0 border-gray-300"
          >
            {/* Image Text Effect */}
            <h3
              className="text-[60px] sm:text-[70px] lg:text-[80px] font-extrabold leading-none"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {item.value} 
            </h3>

            {/* Label */}
            <p className="mt-4 text-[16px] text-black/70 leading-snug">
              {item.label} 
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}