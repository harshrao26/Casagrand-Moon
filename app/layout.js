import "./globals.css";
 import { Montserrat } from "next/font/google";
import { LeadFormProvider } from "./components/LeadFormContext";
import Header from "./components/Header";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Casagrand Moondance | Premium Apartments Off Mysore Road, Bengaluru",
  description:
    "Explore Casagrand Moondance, a premium residential community at Off Mysore Road, 10mins from RR nagar, Bengaluru with luxury homes, world-class amenities, clubhouse, pricing, gallery and location details.",
  icons: {
    icon: "/image-removebg-preview.png",
    apple: "/image-removebg-preview.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-sans antialiased">
        
        <LeadFormProvider>
           
          {children}</LeadFormProvider>
      </body>
    </html>
  );
}