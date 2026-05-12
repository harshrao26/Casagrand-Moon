"use client";

import { useEffect, useState } from "react";
import { Building2, IndianRupee, MapPin, Sofa } from "lucide-react";
import { useLeadForm } from "./LeadFormContext";

const stats = [
  {
    icon: MapPin,
    label: "Location",
    value: "Off Mysore Road, 10mins from RR nagar, Bengaluru",
  },
  {
    icon: IndianRupee,
    label: "Price",
    value: "₹72L - ₹1.08Cr Onwards*",
  },
  {
    icon: Building2,
    label: "Project Size",
    value: "8.64 Acres | 504 Homes",
  },
  {
    icon: Sofa,
    label: "Configuration",
    value: " 2 & 3 BHK Apartments",
  },
];

export default function HeroSection() {
  const { openLeadForm } = useLeadForm();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % stats.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const ActiveIcon = stats[active].icon;

  return (
    <section className="relative    overflow-hidden bg-black   ">
      {/* Background */}
      <img
        src="/indoor-images/Copy of s03.jpg"
        className=""
        alt="Casagrand Moondance OFF mysore road, 10mins from RR nagar Bengaluru"
      />

     

     
    </section>
  );
}