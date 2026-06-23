

import React from "react";
import HeroSection from "../components/HeroSection";
import ExperienceSection from "../components/ExperienceSection";
import FeaturedProject from "../components/FeaturedProject";
import WorkSlider from "../components/WorkSlider";
import About from "../components/About";
import Services from "../components/Services";
import LogoSliderMain from "../components/LogoSliderMain";
import ContactForm from "../components/ContactForm";
import Globe from "../components/Globe";
import CultureSection from "../components/CultureSection";

function Home() {
  return (
    <>
      <section id="home">
        <HeroSection />
      </section>

      <section id="experience" className="scroll-mt-24">
        <ExperienceSection />
      </section>

      <section id="work" className="scroll-mt-24">
        <FeaturedProject />
      </section>

      <section id="projects" className="scroll-mt-24">
        <WorkSlider />
      </section>

      <section id="about" className="scroll-mt-24">
        <About />
      </section>

      <section id="services" className="scroll-mt-24">
        <Services />
      </section>

      <section id="globe" className="scroll-mt-24">
        <Globe />
      </section>

      <section id="clients" className="scroll-mt-24">
        <LogoSliderMain />
      </section>

      <section id="culture" className="scroll-mt-24">
        <CultureSection />
      </section>

      <section id="contact" className="scroll-mt-24">
        <ContactForm />
      </section>
    </>
  );
}

export default Home;