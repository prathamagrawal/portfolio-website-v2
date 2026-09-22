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

export default function Home() {
  return (
    <>
      <Nav />
      {/*
       * SocialSidebar is position:fixed and sits outside <main>
       * so it doesn't affect the document flow.
       * Hidden via CSS on viewports < 1380px.
       */}
      <SocialSidebar />
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
