"use client";

import React, { createContext, useContext, useState } from "react";
import { Mail, Phone, Send, User, X, CalendarCheck, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

const LeadFormContext = createContext(null);
const INDIAN_MOBILE_REGEX = /^[6-9]\d{9}$/;
const STATIC_HOSTS = ["casagrandmoondance.com", "www.casagrandmoondance.com"];
const VERCEL_API_ORIGIN = "https://casagrand-moon.vercel.app";

const getLeadApiUrl = () => {
  if (
    typeof window !== "undefined" &&
    STATIC_HOSTS.includes(window.location.hostname)
  ) {
    return `${VERCEL_API_ORIGIN}/api/leads`;
  }

  return "/api/leads";
};

const goToThankYouPage = (router) => {
  if (
    typeof window !== "undefined" &&
    STATIC_HOSTS.includes(window.location.hostname)
  ) {
    window.location.href = "/thank-you.html";
    return;
  }

  router.push("/thank-you");
};

export const useLeadForm = () => {
  const context = useContext(LeadFormContext);

  if (!context) {
    throw new Error("useLeadForm must be used inside LeadFormProvider");
  }

  return context;
};

export const LeadFormFields = ({
  consentId = "lead-consent",
  onSuccess,
  buttonText = "Enquire Now",
  source = "Lead Form",
  className = "",
}) => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    consent: true,
  });

  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const updateField = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: field === "phone" ? value.replace(/\D/g, "").slice(0, 10) : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (!formData.name.trim()) {
      setError("Please enter your name.");
      return;
    }

    const phone = formData.phone.trim();

    if (!phone) {
      setError("Please enter your mobile number.");
      return;
    }

    if (!INDIAN_MOBILE_REGEX.test(phone)) {
      setError("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    if (!formData.email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    setStatus("loading");

    try {
      const payload = {
        name: formData.name,
        phone,
        email: formData.email,
        source,
        pageUrl:
          typeof window !== "undefined" ? window.location.href : "",
        project: "Casagrand Moondance",
        createdAt: new Date().toISOString(),
      };

      const response = await fetch(getLeadApiUrl(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        throw new Error(data.error || "Submission failed");
      }

      setStatus("success");

      setFormData({
        name: "",
        phone: "",
        email: "",
        consent: true,
      });

      onSuccess?.();

      goToThankYouPage(router);
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  return (
    <form className={`space-y-4 ${className}`} onSubmit={handleSubmit}>
      <div className="relative">
        <User
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#BD9E5A]"
          size={20}
        />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={(e) => updateField("name", e.target.value)}
          placeholder="Your Name"
          className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 py-3.5 pl-12 pr-5 text-sm font-semibold text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-[#BD9E5A] focus:bg-white focus:ring-4 focus:ring-[#BD9E5A]/15"
          required
        />
      </div>

      <div className="relative">
        <Phone
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#BD9E5A]"
          size={20}
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={(e) => updateField("phone", e.target.value)}
          placeholder="Mobile Number"
          inputMode="numeric"
          maxLength={10}
          pattern="[6-9][0-9]{9}"
          className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 py-3.5 pl-12 pr-5 text-sm font-semibold text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-[#BD9E5A] focus:bg-white focus:ring-4 focus:ring-[#BD9E5A]/15"
          required
        />
      </div>

      <div className="relative">
        <Mail
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#BD9E5A]"
          size={20}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={(e) => updateField("email", e.target.value)}
          placeholder="Email Address"
          className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 py-3.5 pl-12 pr-5 text-sm font-semibold text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-[#BD9E5A] focus:bg-white focus:ring-4 focus:ring-[#BD9E5A]/15"
          required
        />
      </div>

      <div className="flex items-start gap-3 rounded-2xl bg-zinc-50 p-4">
        <input
          type="checkbox"
          id={consentId}
          checked={formData.consent}
          onChange={(e) => updateField("consent", e.target.checked)}
          className="mt-1 accent-[#BD9E5A]"
          required
        />

        <label
          htmlFor={consentId}
          className="text-xs leading-relaxed text-zinc-500"
        >
          I agree to the{" "}
          <a href="https://www.casagrand.co.in/new-privacy-policy/" className="font-bold text-zinc-950 hover:underline">
            Privacy Policy
          </a>{" "}
          and authorize Casagrand to contact me.
        </label>
      </div>

      {error && (
        <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#BD9E5A] px-6 py-4 text-sm font-bold uppercase tracking-[1.5px] text-black shadow-xl shadow-[#BD9E5A]/20 transition hover:bg-zinc-950 hover:text-white disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <span>{buttonText}</span>
            <Send
              size={18}
              className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </>
        )}
      </button>
    </form>
  );
};

const LeadFormModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center px-4 py-8">
      <button
        type="button"
        aria-label="Close lead form"
        className="absolute inset-0 bg-black/75 backdrop-blur-md"
        onClick={onClose}
      />

      <div className="relative grid max-h-[92vh] w-full max-w-4xl overflow-hidden rounded-[34px] bg-white shadow-[0_40px_140px_rgba(0,0,0,0.45)] md:grid-cols-[0.85fr_1.15fr]">
        <div className="relative hidden md:block bg-[#120d08] p-6 text-white sm:p-8">
          <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-[#BD9E5A]/20 blur-[100px]" />

          <div className="relative z-10">
            <p className="inline-flex rounded-full bg-[#BD9E5A] px-4 py-2 text-[10px] font-extrabold uppercase tracking-[2px] text-black">
              New Launch
            </p>

            <h2 className="mt-6 text-3xl font-extrabold leading-tight sm:text-4xl">
              Get Early Buyer Offer Details
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/65">
              Receive pricing, current availability, floor plans, and expert
              assistance before booking.
            </p>

            <div className="mt-7 space-y-3">
              {["2 & 3 BHK Apartments", "Off Mysore Road, 10mins from RR nagar", "8.64 Acres Community"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold"
                  >
                    {item}
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        <div className="relative max-h-[92vh] overflow-y-auto p-5 sm:p-7">
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-zinc-100 text-zinc-900 transition hover:bg-zinc-950 hover:text-white"
          >
            <X size={20} />
          </button>

          <div className="mb-6 pr-12">
            <p className="mb-2 text-[11px] font-extrabold uppercase tracking-[2px] text-[#BD9E5A]">
              Enquire Now
            </p>
            <h3 className="text-xl md:text-2xl font-extrabold text-zinc-950">
              Fill Your Details
            </h3>
          </div>

          <LeadFormFields
            consentId="modal-lead-consent"
            source="Popup Lead Form"
            onSuccess={onClose}
            buttonText="Get Offer Details"
          />
        </div>
      </div>
    </div>
  );
};

export const LeadFormProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openLeadForm = () => setIsOpen(true);
  const closeLeadForm = () => setIsOpen(false);

  return (
    <LeadFormContext.Provider value={{ openLeadForm, closeLeadForm }}>
      {children}
      <LeadFormModal isOpen={isOpen} onClose={closeLeadForm} />
    </LeadFormContext.Provider>
  );
};
