import React from "react";

const About = () => {
  return (
    <section className="bg-[#f5f5f5] px-5 py-14 sm:py-16 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-5xl text-center">
        {/* Label */}
        <p className="mb-3 text-[11px] font-bold uppercase tracking-[2.5px] text-[#BD9E5A] sm:text-xs">
          About Casagrand Moondance
        </p>

        {/* Heading */}
        <h2 className="text-[26px] font-semibold leading-snug text-black sm:text-[32px] lg:text-[40px]">
          2 & 3 BHK Premium Apartments in Off Mysore Road, 10mins from RR nagar, Bengaluru
        </h2>

        {/* Paragraph 1 */}
        <p className="mt-6 text-[15px] leading-relaxed text-black/80 sm:text-[16px]">
          Casagrand Moondance is a thoughtfully planned residential community in
          Off Mysore Road, 10mins from RR nagar, Bengaluru. Designed for modern families,
          the project offers premium 2 & 3 BHK apartments with elegant
          layouts, landscaped open spaces, and a peaceful low-rise living
          environment.
        </p>

        {/* Paragraph 2 */}
        <p className="mt-5 text-[15px] leading-relaxed text-black/80 sm:text-[16px]">
          Spread across 8.64 acres with 504 premium homes across 3 residential
          wings, Casagrand Moondance combines everyday comfort, smart planning,
          lifestyle amenities, and strong connectivity to key parts of
          Bengaluru through Mysore Road.
        </p>
      </div>
    </section>
  );
};

export default About;