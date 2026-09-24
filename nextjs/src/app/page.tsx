"use client";

import { ModeProvider, usePortfolioMode } from "@/context/ModeContext";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import FeaturedProjects from "@/components/FeaturedProjects";
import Publications from "@/components/Publications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SocialSidebar from "@/components/SocialSidebar";

// Personal Mode Components
import PersonalHero from "@/components/personal/PersonalHero";
import TrainingSection from "@/components/personal/TrainingSection";
import BikingSection from "@/components/personal/BikingSection";
import SportsSection from "@/components/personal/SportsSection";
import PersonalContact from "@/components/personal/PersonalContact";
import ModeTransitionLoader from "@/components/ModeTransitionLoader";
import PageLoader from "@/components/PageLoader";

function PortfolioContent() {
  const { mode } = usePortfolioMode();

  return (
    <>
      <PageLoader />
      <Nav />
      {/*
       * SocialSidebar is stationary all over the page
       * Adapts its colors seamlessly with CSS custom properties
       */}
      <SocialSidebar />
      {/* Mode switch transition loader — plays on every toggle */}
      <ModeTransitionLoader />

      <main className="layout-container">
        {mode === "technical" ? (
          <>
            <Hero />
            <About />
            <Experience />
            <Certifications />
            <FeaturedProjects />
            <Publications />
            <Contact />
          </>
        ) : (
          <>
            <PersonalHero />
            <TrainingSection />
            <BikingSection />
            <SportsSection />
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
