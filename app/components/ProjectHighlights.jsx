"use client";

const highlights = [
  {
    value: "01",
    label: "8.25 Acres of Land Area",
    image:
      "https://images.unsplash.com/photo-1592595896551-12b371d546d5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    value: "02",
    label: "Low-Rise Community Design",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    value: "03",
    label: "504 Premium Apartment Homes",
    image:
      "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    value: "04",
    label: "3 Residential Wings",
    image:
      "https://images.unsplash.com/photo-1634344656611-0773d8dbbe2c?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
];

export default function ProjectHighlights() {
  return (
    <section className="bg-[#f3f3f3] px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[2.5px] text-[#BD9E5A] sm:text-xs">
            Casagrand Moondance
          </p>

          <h2 className="text-[28px] font-semibold leading-tight text-black sm:text-[34px] lg:text-[42px]">
            Project Highlights
          </h2>

          <p className="mt-4 text-sm leading-7 text-black/65 sm:text-base">
            A thoughtfully planned residential community in Kumbalgodu, off
            Mysore Road, designed with low-rise living, open landscapes, and
            modern apartment comfort.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)] lg:grid-cols-4">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="group flex min-h-[190px] flex-col items-center justify-center border-b border-r border-black/10 px-4 py-10 text-center last:border-r-0 sm:min-h-[220px] sm:px-6 sm:py-12 lg:border-b-0"
            >
              {/* Image Text Effect */}
              <h3
                className="text-[46px] font-extrabold leading-none transition-transform duration-300 group-hover:scale-105 sm:text-[62px] lg:text-[72px]"
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

              <p className="mt-4 max-w-[180px] text-[11px] font-bold uppercase tracking-[1.8px] text-black/60 sm:text-xs">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}