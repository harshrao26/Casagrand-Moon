"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

export default function ContactForm() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    country: "+91 (India)",
    consent: false,
  });

  const [status, setStatus] = useState("idle"); // idle | loading | error
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setStatus("loading");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          source: "Contact Form",
          pageUrl: typeof window !== "undefined" ? window.location.href : "",
          project: "Casagrand Moondance",
          createdAt: new Date().toISOString(),
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Submission failed");
      }

      router.push("/thank-you");
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  return (
    <section className="bg-[#36295D] px-4 py-14 sm:px-6 sm:py-16 lg:px-10">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="mx-auto mb-8 max-w-3xl text-center text-white">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[2.5px] text-[#BD9E5A] sm:text-xs">
            Enquire Now
          </p>

          <h2 className="text-[28px] font-semibold leading-tight sm:text-[34px] lg:text-[42px]">
            Get Details of Casagrand Moondance
          </h2>

          <p className="mt-4 text-sm leading-7 text-white/80 sm:text-base">
            Share your details to receive pricing, floor plans, brochure,
            availability, and site visit assistance for Casagrand Moondance,
            Off Mysore Road, 10mins from RR nagar, Bengaluru.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mx-auto w-full max-w-xl text-white">
          {/* Name */}
          <input
            type="text"
            placeholder="*Name"
            value={form.name}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, name: e.target.value }))
            }
            className="mb-4 w-full rounded-none bg-white px-4 py-2.5 text-sm text-black outline-none placeholder:text-black/45"
            required
          />

          {/* Email */}
          <input
            type="email"
            placeholder="*Email Address"
            value={form.email}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, email: e.target.value }))
            }
            className="mb-4 w-full rounded-none bg-white px-4 py-2.5 text-sm text-black outline-none placeholder:text-black/45"
            required
          />

          {/* Phone Row */}
          <div className="mb-4 flex flex-col gap-3 sm:flex-row">
            <select
              value={form.country}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, country: e.target.value }))
              }
              className="w-full rounded-none bg-white px-3 py-2.5 text-sm text-black outline-none sm:w-[40%]"
            >
              <option>+91 (India)</option>
              <option>+1 (USA)</option>
              <option>+44 (UK)</option>
              <option>+971 (UAE)</option>
            </select>

            <input
              type="tel"
              placeholder="*Phone Number"
              value={form.phone}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, phone: e.target.value }))
              }
              className="flex-1 rounded-none bg-white px-4 py-2.5 text-sm text-black outline-none placeholder:text-black/45"
              required
            />
          </div>

          {/* Error */}
          {error && (
            <p className="mb-4 rounded bg-red-500/20 px-4 py-2.5 text-sm font-semibold text-red-300">
              {error}
            </p>
          )}

          {/* Checkbox */}
          <label className="mb-6 flex cursor-pointer items-start gap-2">
            <input
              type="checkbox"
              checked={form.consent}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, consent: e.target.checked }))
              }
              className="mt-1"
              required
            />

            <p className="text-[13px] leading-snug text-white/90">
              I agree to receive important updates, pricing details, floor plan
              information, brochure, and site visit assistance for Casagrand
              Moondance via WhatsApp, Email, SMS, or Call.*
            </p>
          </label>

          {/* Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center gap-2 rounded-full bg-[#BD9E5A] px-8 py-2.5 text-sm font-bold uppercase tracking-[1.6px] text-white transition hover:bg-white hover:text-[#36295D] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Enquiry"
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}