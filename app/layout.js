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
  title: "Casagrand Casablanca | Premium Apartments in Bengaluru",
  description:
    "Explore Casagrand Casablanca, a premium Roman-themed residential community in Bengaluru with luxury homes, world-class amenities, clubhouse, pricing, gallery and location details.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-sans antialiased">
        
        <LeadFormProvider>
          <Header/>
          
          {children}</LeadFormProvider>
      </body>
    </html>
  );
}