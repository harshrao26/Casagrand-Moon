"use client";

import React from "react";
import { Phone, FileText } from "lucide-react";
import { useLeadForm } from "./LeadFormContext";

const StickyButton = () => {
  const { openLeadForm } = useLeadForm();

  return (
    <div className="fixed bottom-0 left-0 w-full z-50">

      <div className="flex w-full shadow-lg border-t border-gray-200">

        {/* Book Visit */}
        <button
          onClick={openLeadForm}
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#BD9E5A] text-white font-semibold text-sm hover:opacity-90 transition"
        >
          <Phone className="h-4 w-4" />
          Book Visit
        </button>

        {/* Download Brochure */}
        <button
          onClick={openLeadForm}
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#372A5E] text-white font-medium text-sm hover:bg-gray-100 transition border-l border-gray-200"
        >
          <FileText className="h-4 w-4" />
          Download Brochure
        </button>

      </div>
    </div>
  );
};

export default StickyButton;