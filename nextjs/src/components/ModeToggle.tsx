"use client";

import { usePortfolioMode } from "@/context/ModeContext";

export default function ModeToggle() {
  const { mode, setMode } = usePortfolioMode();

  return (
    <div className="portfolio-mode-toggle" role="group" aria-label="Portfolio mode switch">
      <button
        type="button"
        onClick={() => setMode("technical")}
        className={`mode-toggle-btn ${mode === "technical" ? "active" : ""}`}
        aria-pressed={mode === "technical"}
      >
        <span className="mode-toggle-dot" aria-hidden="true" />
        <span>systems</span>
      </button>
      <button
        type="button"
        onClick={() => setMode("personal")}
        className={`mode-toggle-btn ${mode === "personal" ? "active" : ""}`}
        aria-pressed={mode === "personal"}
      >
        <span className="mode-toggle-dot" aria-hidden="true" />
        <span>offline</span>
      </button>
    </div>
  );
}
