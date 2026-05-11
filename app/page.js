import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import ProjectShowcase from "./components/ProjectShowcase";
import PriceSection from "./components/PriceSection";
import ProjectHighlights from "./components/ProjectHighlights";
import AmenitiesSection from "./components/AmenitiesSection";
import ProjectGallery from "./components/ProjectGallery";
import Location from "./components/Location";
import VillamentsSection from "./components/VillamentsSection";
import SustainabilitySection from "./components/SustainabilitySection";
import FAQSection from "./components/FAQSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import StickyButton from "./components/StickyButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section id="home" className="mt-20">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="showcase">
        <ProjectShowcase />
      </section>

      <section id="pricing">
        <PriceSection />
      </section>

      <section id="highlights">
        <ProjectHighlights />
      </section>

      <section id="amenities">
        <AmenitiesSection />
      </section>

      <section id="gallery">
        <ProjectGallery />
      </section>

      <section id="location">
        <Location />
      </section>

      <section id="residences">
        <VillamentsSection />
      </section>

      <section id="sustainability">
        <SustainabilitySection />
      </section>

      <section id="faq">
        <FAQSection />
      </section>

      <section id="contact">
        <ContactForm />
      </section>

      <Footer />
      <StickyButton />
    </main>
  );
}