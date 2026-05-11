"use client";

import React, { createContext, useContext, useState } from "react";
import { Mail, Phone, Send, User, X, CalendarCheck, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

const LeadFormContext = createContext(null);

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
      [field]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (!formData.name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!formData.phone.trim()) {
      setError("Please enter your mobile number.");
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
        phone: formData.phone,
        email: formData.email,
        source,
        pageUrl:
          typeof window !== "undefined" ? window.location.href : "",
        project: "Casagrand Casablanca",
        createdAt: new Date().toISOString(),
      };

      await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      setStatus("success");

      setFormData({
        name: "",
        phone: "",
        email: "",
        consent: true,
      });

      onSuccess?.();

      router.push("/thank-you");
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
          <a href="#" className="font-bold text-zinc-950 hover:underline">
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
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-[34px] bg-white p-5 shadow-[0_35px_120px_rgba(0,0,0,0.35)] md:p-7">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#BD9E5A]/15 blur-[90px]" />

        <div className="relative z-10 mb-6 flex items-start justify-between gap-6">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#BD9E5A]/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[2px] text-[#BD9E5A]">
              <CalendarCheck size={14} />
              Casagrand Casablanca
            </p>

            <h2 className="text-3xl font-extrabold leading-tight text-zinc-950 md:text-4xl">
              Book Your <span className="text-[#BD9E5A]">Site Visit</span>
            </h2>

            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Share your details and our team will contact you shortly.
            </p>
          </div>

          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-zinc-900 transition hover:bg-zinc-200"
          >
            <X size={20} />
          </button>
        </div>

        <div className="relative z-10">
          <LeadFormFields
            consentId="modal-lead-consent"
            source="Popup Lead Form"
            onSuccess={onClose}
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