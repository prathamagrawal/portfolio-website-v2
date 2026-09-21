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
      <main className="max-w-[1100px] mx-auto px-6 md:px-8">
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
