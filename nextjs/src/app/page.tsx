"use client";

import { ModeProvider, usePortfolioMode } from "@/context/ModeContext";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import FeaturedProjects from "@/components/FeaturedProjects";
import OtherProjects from "@/components/OtherProjects";
import Publications from "@/components/Publications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SocialSidebar from "@/components/SocialSidebar";

// Personal Mode Components
import PersonalHero from "@/components/personal/PersonalHero";
import TrainingSection from "@/components/personal/TrainingSection";
import BikingSection from "@/components/personal/BikingSection";
import SportsSection from "@/components/personal/SportsSection";
import TravelSection from "@/components/personal/TravelSection";
import PersonalContact from "@/components/personal/PersonalContact";

function PortfolioContent() {
  const { mode } = usePortfolioMode();

  return (
    <>
      <Nav />
      {/*
       * SocialSidebar is stationary all over the page
       * Adapts its colors seamlessly with CSS custom properties
       */}
      <SocialSidebar />

      <main className="layout-container">
        {mode === "technical" ? (
          <>
            <Hero />
            <About />
            <Experience />
            <FeaturedProjects />
            <OtherProjects />
            <Publications />
            <Contact />
          </>
        ) : (
          <>
            <PersonalHero />
            <TrainingSection />
            <BikingSection />
            <SportsSection />
            <TravelSection />
            <PersonalContact />
          </>
        )}
        <Footer />
      </main>
    </>
  );
}

export default function Home() {
  return (
    <ModeProvider>
      <PortfolioContent />
    </ModeProvider>
  );
}
