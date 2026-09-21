"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }
      setLastScrollY(scrollY > 0 ? scrollY : 0);
    };
    window.addEventListener("scroll", updateScrollDirection);
    return () => window.removeEventListener("scroll", updateScrollDirection);
  }, [scrollDirection, lastScrollY]);

  return scrollDirection;
}

export default function Nav() {
  const scrollDirection = useScrollDirection();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#jobs" },
    { name: "Work", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-16 bg-bg/85 backdrop-blur border-b border-border transition-transform duration-300 ${
        scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <nav aria-label="Main navigation" className="h-full max-w-[1100px] mx-auto px-6 md:px-8 flex items-center justify-between">
        <Link href="/" className="font-mono text-base text-accent hover:text-accent/80 transition-colors" aria-label="Home">
          PA
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-sans text-secondary hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-sans text-secondary hover:text-primary transition-colors flex items-center gap-1"
          >
            Resume <span className="font-mono text-[11px] leading-none">↗</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="w-6 h-[2px] bg-secondary block"></span>
          <span className="w-6 h-[2px] bg-secondary block"></span>
          <span className="w-6 h-[2px] bg-secondary block"></span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-bg flex flex-col items-center justify-center">
          <button
            className="absolute top-5 right-6 w-8 h-8 flex items-center justify-center text-secondary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close mobile menu"
          >
            <span className="text-2xl leading-none">&times;</span>
          </button>
          
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xl font-sans text-secondary hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-sans text-secondary hover:text-primary transition-colors flex items-center gap-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Resume <span className="font-mono text-sm">↗</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
