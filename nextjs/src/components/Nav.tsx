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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

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
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: "64px",
          backgroundColor: "rgba(13,17,23,0.9)",
          backdropFilter: "blur(8px)",
          borderBottom: "1px solid var(--border)",
          transform: hidden ? "translateY(-100%)" : "translateY(0)",
          transition: "transform 300ms ease",
        }}
      >
        {/* Inner container — uses .layout-container so it centers at 1100px */}
        <div
          className="layout-container"
          style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}
        >
          <Link
            href="/"
            aria-label="Home"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "15px",
              fontWeight: 600,
              color: "var(--accent)",
              textDecoration: "none",
              transition: "color 120ms ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-hover)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--accent)")}
          >
            PA
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex" style={{ alignItems: "center", gap: "2rem" }}>
            {NAV_LINKS.map((l) => (
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
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            style={{ background: "none", border: "none", cursor: "pointer", padding: "8px", display: "flex", flexDirection: "column", gap: "5px" }}
          >
            <span style={{ display: "block", width: "20px", height: "1.5px", backgroundColor: "var(--text-secondary)", borderRadius: "2px" }} />
            <span style={{ display: "block", width: "20px", height: "1.5px", backgroundColor: "var(--text-secondary)", borderRadius: "2px" }} />
            <span style={{ display: "block", width: "13px", height: "1.5px", backgroundColor: "var(--text-secondary)", borderRadius: "2px" }} />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 60,
          backgroundColor: "var(--bg)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 200ms ease",
        }}
      >
        <button
          style={{
            position: "absolute",
            top: "20px",
            right: "24px",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--text-secondary)",
            padding: "8px",
          }}
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="1" y1="1" x2="17" y2="17" />
            <line x1="17" y1="1" x2="1" y2="17" />
          </svg>
        </button>

        <nav style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem" }}>
          {NAV_LINKS.map((l) => (
            <Link
              key={l.name}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ fontFamily: "var(--font-sans)", fontSize: "22px", color: "var(--text-secondary)", textDecoration: "none" }}
            >
              {l.name}
            </Link>
          ))}
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
              padding: "8px 20px",
              borderRadius: "4px",
              textDecoration: "none",
              marginTop: "8px",
            }}
          >
            Resume ↗
          </a>
        </nav>
      </div>
    </>
  );
}
