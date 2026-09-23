"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type PortfolioMode = "technical" | "personal";

interface ModeContextType {
  mode: PortfolioMode;
  setMode: (mode: PortfolioMode) => void;
  toggleMode: () => void;
}

const ModeContext = createContext<ModeContextType>({
  mode: "technical",
  setMode: () => {},
  toggleMode: () => {},
});

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<PortfolioMode>("technical");

  useEffect(() => {
    // Check URL search param on load (e.g. ?mode=personal or ?view=offline)
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const urlMode = params.get("mode") || params.get("view");
      if (urlMode === "personal" || urlMode === "offline") {
        setModeState("personal");
      }
    }
  }, []);

  const setMode = (newMode: PortfolioMode) => {
    setModeState(newMode);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      if (newMode === "personal") {
        url.searchParams.set("mode", "personal");
      } else {
        url.searchParams.delete("mode");
      }
      window.history.replaceState({}, "", url.toString());
    }
  };

  const toggleMode = () => {
    setMode(mode === "technical" ? "personal" : "technical");
  };

  return (
    <ModeContext.Provider value={{ mode, setMode, toggleMode }}>
      <div data-mode={mode} className={mode === "personal" ? "theme-personal" : ""} style={{ minHeight: "100vh", backgroundColor: "var(--bg)", color: "var(--text-primary)", transition: "background-color 300ms ease, color 300ms ease" }}>
        {children}
      </div>
    </ModeContext.Provider>
  );
}

export function usePortfolioMode() {
  return useContext(ModeContext);
}
