import React from 'react'
import HeroSection from '../components/HeroSection'
import ExperienceSection from '../components/ExperienceSection'
import FeaturedProject from '../components/FeaturedProject'
import WorkSlider from '../components/WorkSlider'
import About from '../components/About'
import Services from '../components/Services'
import LogoSliderMain from '../components/LogoSliderMain'
import ContactForm from '../components/ContactForm'
import Globe from '../components/Globe'
import CultureSection from '../components/CultureSection'


function Home() {
  return (
    <>
       <HeroSection/>
       <ExperienceSection/>
       <FeaturedProject/>
       <WorkSlider/>
       <About/>
       <Services/>
       <Globe/>
       <LogoSliderMain/>
       <CultureSection/>
       <ContactForm/>
    </>
  )
}

export default Home