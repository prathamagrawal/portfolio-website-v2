"use client";

import { useState, useEffect } from "react";

/**
 * Full-screen loader shown on the very first page load.
 * Fades out once the page is interactive (after fonts + hydration settle).
 */
export default function PageLoader() {
  const [phase, setPhase] = useState<"visible" | "leaving" | "gone">("visible");

  useEffect(() => {
    // Give the page ~800ms to hydrate and fonts to swap, then fade out
    const fadeTimer = setTimeout(() => setPhase("leaving"), 800);
    // Remove from DOM after the fade animation completes (400ms)
    const goneTimer = setTimeout(() => setPhase("gone"), 1200);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(goneTimer);
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <div
      aria-label="Loading"
      aria-live="polite"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        backgroundColor: "#0A0E14",
        opacity: phase === "leaving" ? 0 : 1,
        transition: "opacity 400ms cubic-bezier(0.4, 0, 0.2, 1)",
        pointerEvents: phase === "leaving" ? "none" : "all",
      }}
    >
      {/* Monogram */}
      <div
        style={{
          fontFamily: "var(--font-mono, monospace)",
          fontSize: "22px",
          fontWeight: 700,
          color: "#00B4D8",
          letterSpacing: "0.12em",
          opacity: 0.9,
          animation: "loaderPulse 1.4s ease-in-out infinite",
        }}
      >
        PA
      </div>

      {/* Spinner ring */}
      <div
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          border: "2px solid rgba(0, 180, 216, 0.15)",
          borderTopColor: "#00B4D8",
          animation: "loaderSpin 700ms linear infinite",
        }}
      />

      {/* Inline keyframes — scoped to this component */}
      <style>{`
        @keyframes loaderSpin {
          to { transform: rotate(360deg); }
        }
        @keyframes loaderPulse {
          0%, 100% { opacity: 0.5; }
          50%       { opacity: 1;   }
        }
      `}</style>
    </div>
  );
}
