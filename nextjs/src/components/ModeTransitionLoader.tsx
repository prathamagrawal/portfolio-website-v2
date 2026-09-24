"use client";

import { useEffect, useState } from "react";
import { usePortfolioMode } from "@/context/ModeContext";

/**
 * Full-screen transition loader that plays when the portfolio mode changes.
 * Shows a 700ms overlay with a spinning ring and label, then fades out.
 */
export default function ModeTransitionLoader() {
  const { mode } = usePortfolioMode();

  // "idle" | "entering" | "leaving"
  const [phase, setPhase] = useState<"idle" | "entering" | "leaving">("idle");
  const [targetMode, setTargetMode] = useState<"personal" | "technical">(mode);

  // Detect mode changes after first render
  const [prevMode, setPrevMode] = useState<string>(mode);

  useEffect(() => {
    if (mode === prevMode) return;

    // Start the overlay transition
    setTargetMode(mode);
    setPhase("entering");
    setPrevMode(mode);

    // After content has switched (~600ms) start fading out
    const fadeOutTimer = setTimeout(() => setPhase("leaving"), 620);

    // Fully remove overlay after fade-out animation (260ms)
    const idleTimer = setTimeout(() => setPhase("idle"), 900);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(idleTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  if (phase === "idle") return null;

  const label =
    targetMode === "personal" ? "switching to personal" : "switching to technical";

  return (
    <div
      className={`mode-transition-overlay to-${targetMode} ${phase}`}
      aria-live="polite"
      aria-label={label}
    >
      {/* Spinner */}
      <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div className="mode-loader-pulse" />
        <div className="mode-loader-ring" />
      </div>

      {/* Label */}
      <span className="mode-loader-label">{label}</span>
    </div>
  );
}
