import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Services from './components/Service'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import Tests from './components/Test'
import LocationSection from './components/LocationSection'
import BlogSection from './components/BlogSection'



const App = () => {
  return (
    <>
    <Navbar />
  
    <Hero />
    <Services />
    <Tests />
    <AboutSection />
    <ContactSection />
    <LocationSection />
    <BlogSection />
    <Footer />
    

    <div className="">
      
    </div>
  </>
  )
}

export default App
