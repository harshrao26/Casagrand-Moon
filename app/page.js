import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import ProjectShowcase from './components/ProjectShowcase'
import ProjectHighlights from './components/ProjectHighlights'
import AmenitiesSection from './components/AmenitiesSection'
import ProjectGallery from './components/ProjectGallery'
import LocationHighlights from './components/LocationHighlights'
import VillamentsSection from './components/VillamentsSection'
import SustainabilitySection from './components/SustainabilitySection'
import ConstructionStatus from './components/ConstructionStatus'
import FAQSection from './components/FAQSection'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
const page = () => {
  return (
    <div>
      
      <Hero/>
      <About/>
      <ProjectShowcase/>

      <ProjectHighlights/>
      <AmenitiesSection/>
      <ProjectGallery/>
      <LocationHighlights/>
      <VillamentsSection/>
      <SustainabilitySection/>
      {/* <ConstructionStatus/> */}
      <FAQSection/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default page