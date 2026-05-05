"use client";

const highlights = [
  {
    value: "30+",
    label: "LifeDesigned® Amenities",
    image: "https://images.unsplash.com/photo-1634344656611-0773d8dbbe2c?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    value: "7.9",
    label: "Acres of Land Stretch",
    image: "https://images.unsplash.com/photo-1592595896551-12b371d546d5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    value: "218",
    label: "LifeDesigned® Residences",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    value: "1476",
    label: "sqm Exclusive Clubhouse",
    image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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