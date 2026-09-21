import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import FeaturedProjects from "@/components/FeaturedProjects";
import OtherProjects from "@/components/OtherProjects";
import Publications from "@/components/Publications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      {/*
       * .layout-container = max-width 1100px, centered, px-6/px-10.
       * Cannot use max-w-[1100px] — Tailwind v4 does not JIT-scan
       * arbitrary bracket values from JSX strings.
       */}
      <main className="layout-container">
        <Hero />
        <About />
        <Experience />
        <FeaturedProjects />
        <OtherProjects />
        <Publications />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
