"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { name: "About",      href: "#about"    },
  { name: "Experience", href: "#jobs"     },
  { name: "Work",       href: "#projects" },
  { name: "Contact",    href: "#contact"  },
];

function useScrollDirection() {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const handler = () => {
      const y = window.scrollY;
      // Only hide after scrolling down 80px from top
      if (y < 80) { setHidden(false); return; }
      setHidden(y > lastY.current && y - lastY.current > 4);
      lastY.current = y;
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return hidden;
}

export default function Nav() {
  const hidden = useScrollDirection();
  const [open, setOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50 h-16
          bg-bg/90 backdrop-blur-sm
          border-b border-border
          transition-transform duration-300 ease-in-out
          ${hidden ? "-translate-y-full" : "translate-y-0"}
        `}
      >
        <nav
          aria-label="Main navigation"
          className="h-full max-w-[1100px] mx-auto px-6 md:px-10 flex items-center justify-between"
        >
          {/* Logo */}
          <Link
            href="/"
            aria-label="Home"
            className="font-mono text-[15px] font-semibold text-accent hover:text-accent-hover transition-colors duration-120"
          >
            PA
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.name}
                href={l.href}
                className="font-sans text-[14px] text-secondary hover:text-primary transition-colors duration-120"
              >
                {l.name}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                font-mono text-[12px] text-accent border border-accent
                px-3 py-1.5 rounded hover:bg-accent-dim
                transition-colors duration-150
              "
            >
              Resume ↗
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span className="w-5 h-[1.5px] bg-secondary block rounded-full" />
            <span className="w-5 h-[1.5px] bg-secondary block rounded-full" />
            <span className="w-3 h-[1.5px] bg-secondary block rounded-full ml-[-8px]" />
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={`
          fixed inset-0 z-[60] bg-bg flex flex-col items-center justify-center
          transition-opacity duration-200
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        {/* Close */}
        <button
          className="absolute top-5 right-6 w-9 h-9 flex items-center justify-center text-secondary hover:text-primary transition-colors"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="1" y1="1" x2="17" y2="17" />
            <line x1="17" y1="1" x2="1" y2="17" />
          </svg>
        </button>

        <nav className="flex flex-col items-center gap-8">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.name}
              href={l.href}
              className="font-sans text-2xl text-secondary hover:text-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.name}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[14px] text-accent border border-accent px-5 py-2 rounded hover:bg-accent-dim transition-colors mt-2"
            onClick={() => setOpen(false)}
          >
            Resume ↗
          </a>
        </nav>
      </div>
    </>
  );
}
