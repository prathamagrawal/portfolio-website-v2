"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import ModeToggle from "./ModeToggle";
import { usePortfolioMode } from "@/context/ModeContext";

const TECH_LINKS = [
  { name: "About",      href: "#about" },
  { name: "Experience", href: "#jobs" },
  { name: "Work",       href: "#projects" },
  { name: "Contact",    href: "#contact" },
];

const PERSONAL_LINKS = [
  { name: "Training",    href: "#training" },
  { name: "Biking",      href: "#biking" },
  { name: "Sports",      href: "#sports" },
  { name: "Expeditions", href: "#expeditions" },
  { name: "Connect",     href: "#contact" },
];

export default function Nav() {
  const { mode } = usePortfolioMode();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  const navLinks = mode === "personal" ? PERSONAL_LINKS : TECH_LINKS;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100 && currentScrollY > lastScrollY.current) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: "64px",
          backgroundColor: mode === "personal" ? "rgba(244, 239, 234, 0.92)" : "rgba(13,17,23,0.9)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderBottom: "1px solid var(--border)",
          transform: hidden ? "translateY(-100%)" : "translateY(0)",
          transition: "transform 300ms ease, background-color 300ms ease",
        }}
      >
        <div
          className="layout-container"
          style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative" }}
        >
          {/* Left: Logo */}
          <Link
            href="/"
            aria-label="Home"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "15px",
              fontWeight: 700,
              color: "var(--accent)",
              textDecoration: "none",
              transition: "color 120ms ease",
              letterSpacing: "-0.02em",
            }}
          >
            PA
          </Link>

          {/* Center: Mode Toggle — positioned dead center */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              alignItems: "center",
              zIndex: 10,
            }}
          >
            <ModeToggle />
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex" style={{ alignItems: "center", gap: "1.75rem" }}>
            {navLinks.map((l) => (
              <Link
                key={l.name}
                href={l.href}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "14px",
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  transition: "color 120ms ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                {l.name}
              </Link>
            ))}

            {mode === "technical" && (
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  color: "var(--accent)",
                  border: "1px solid var(--accent)",
                  padding: "5px 12px",
                  borderRadius: "4px",
                  textDecoration: "none",
                  transition: "background-color 150ms ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--accent-dim)")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
              >
                Resume ↗
              </a>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              color: "var(--text-secondary)",
              padding: "4px",
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            backgroundColor: "var(--bg)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            style={{
              position: "absolute",
              top: "20px",
              right: "24px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              color: "var(--text-secondary)",
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {navLinks.map((l) => (
            <Link
              key={l.name}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "20px",
                fontWeight: 600,
                color: "var(--text-primary)",
                textDecoration: "none",
              }}
            >
              {l.name}
            </Link>
          ))}

          {mode === "technical" && (
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "14px",
                color: "var(--accent)",
                border: "1px solid var(--accent)",
                padding: "8px 24px",
                borderRadius: "4px",
                textDecoration: "none",
                marginTop: "1rem",
              }}
            >
              Resume ↗
            </a>
          )}
        </div>
      )}
    </>
  );
}
