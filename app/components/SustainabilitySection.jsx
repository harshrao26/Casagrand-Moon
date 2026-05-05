"use client";

export default function SustainabilitySection() {
  return (
    <section className="bg-[#f5f5f5] py-10 px-4">

      {/* Heading */}
      <h2 className="text-center text-[28px] sm:text-[34px] font-semibold mb-10">
        What are we doing for <span className="font-bold">Sustainability</span>
      </h2>

      {/* Wrapper */}
      <div className="relative max-w-5xl mx-auto h-[380px]">

        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1668911494509-14baf3b42fda?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full h-full object-cover"
        />

        {/* Overlay Card */}
        <div className="absolute left-6 bottom-6 sm:left-10 sm:bottom-10 bg-white p-6 sm:p-8 max-w-md shadow-xl">

          <h3 className="text- font-bold leading-tight">
            SUSTAINABILITY <br /> ENDEAVOURS
          </h3>

          <p className="mt-4 text-[14px] text-black/70 leading-relaxed">
            Aims to achieve Green Building Certification (Gold rated) for its entire
            portfolio. Ambition to actively promote and implement water conservation
            measures across all projects and operations to reduce environmental
            footprint and create sustainable living environments.
          </p>

          {/* Button */}
          <button className="mt-6 bg-[#c99b21] text-white px-6 py-3 text-sm tracking-wide flex items-center gap-2 hover:opacity-90 transition">
            KNOW MORE →
          </button>
        </div>
      </div>
    </section>
  );
}