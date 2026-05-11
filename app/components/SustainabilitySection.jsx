"use client";

export default function SustainabilitySection() {
  return (
    <section className="bg-[#f5f5f5] px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
      {/* Heading */}
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <p className="mb-3 text-[11px] font-bold uppercase tracking-[2.5px] text-[#BD9E5A] sm:text-xs">
          Greener Living
        </p>

        <h2 className="text-[28px] font-semibold leading-tight text-black sm:text-[34px] lg:text-[42px]">
          What are we doing for{" "}
          <span className="font-bold">Sustainability</span>
        </h2>

        <p className="mt-4 text-sm leading-7 text-black/65 sm:text-base">
          Casagrand Moondance is planned as a peaceful low-rise community with
          open landscapes, mindful living spaces, and features that support a
          healthier everyday lifestyle.
        </p>
      </div>

      {/* Wrapper */}
      <div className="relative mx-auto h-[560px] max-w-6xl overflow-hidden rounded-[30px] shadow-[0_24px_80px_rgba(0,0,0,0.12)] sm:h-[500px] lg:h-[540px]">
        {/* Background Image */}
        <img
          src="/indoor-images/Copy of s11.jpg"
          alt="Sustainable landscaped living at Casagrand Moondance"
          className="h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent sm:bg-gradient-to-r sm:from-black/55 sm:via-black/10 sm:to-transparent" />

        {/* Overlay Card */}
        <div className="absolute inset-x-4 bottom-4 rounded-[24px] bg-white p-5 shadow-xl sm:bottom-8 sm:left-8 sm:right-auto sm:max-w-md sm:p-8 lg:left-10 lg:bottom-10">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[2px] text-[#BD9E5A] sm:text-xs">
            Casagrand Moondance
          </p>

          <h3 className="text-2xl font-bold leading-tight text-black sm:text-3xl">
            SUSTAINABILITY <br /> ENDEAVOURS
          </h3>

          <p className="mt-4 text-[14px] leading-relaxed text-black/70 sm:text-[15px]">
            Designed across 8.25 acres, Casagrand Moondance brings together
            landscaped open spaces, low-rise planning, natural light,
            ventilation, and community areas that encourage balanced and
            comfortable urban living.
          </p>

          <p className="mt-3 text-[14px] leading-relaxed text-black/70 sm:text-[15px]">
            The project focuses on creating a calmer residential environment
            with open greenery, lifestyle amenities, and thoughtfully planned
            spaces for families in Kumbalgodu, off Mysore Road.
          </p>

          {/* Button */}
          <button className="mt-6 flex items-center gap-2 rounded-full bg-[#BD9E5A] px-6 py-3 text-xs font-extrabold uppercase tracking-[1.5px] text-black transition hover:bg-black hover:text-white sm:text-sm">
            Know More →
          </button>
        </div>
      </div>
    </section>
  );
}