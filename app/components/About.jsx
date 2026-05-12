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
          Launching Casagrand Moondance — where living finds its rhythm again.
        </h2>

        {/* Paragraph 1 */}
        <p className="mt-6 text-[15px] leading-relaxed text-black/80 sm:text-[16px]">
          A thoughtfully planned low-rise residential community spread across
          8.64 acres with just 504 premium homes, designed around light,
          ventilation, greenery, privacy, and community living.
        </p>

        {/* Paragraph 2 */}
        <p className="mt-5 text-[15px] leading-relaxed text-black/80 sm:text-[16px]">
          With super spacious 2 & 3 BHK apartments, expansive courtyards, 69+
          amenities, a grand clubhouse and seamless connectivity off Mysore Road
          near RR Nagar, Moondance brings back a calmer, more open way of
          living.
        </p>

        {/* Closing Line */}
        <p className="mt-7 text-[18px] font-semibold leading-relaxed text-black sm:text-[22px]">
          Stop Adjusting. Start Living.
          <br />
          <span className="text-[#BD9E5A]">
            Welcome Home to Casagrand Moondance
          </span>
        </p>
      </div>
    </section>
  );
};

export default About;