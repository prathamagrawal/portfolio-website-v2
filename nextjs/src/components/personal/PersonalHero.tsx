"use client";

import { useState, useEffect } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const PHYSICAL_METRICS = [
  { value: "5x / wk",  label: "lifting split consistency", pct: 92 },
  { value: "150+ km",  label: "longest single ride",       pct: 95 },
  { value: "3+",       label: "sports actively played",    pct: 70 },
  { value: "daily",    label: "mobility & active recovery",pct: 100 },
  { value: "queued",   label: "skydive · scuba diving",    pct: 8 },
];

export default function PersonalHero() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section style={{ minHeight: "88vh", display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: "84px", paddingBottom: "72px" }}>
      <div className="hero-grid">

        {/* ── Left Column: Headline & Bio ── */}
        <div className="hero-left" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>

          {/* Status badge */}
          <div
            className="hero-status-pill"
            style={{
              opacity: prefersReducedMotion || mounted ? 1 : 0,
              transform: prefersReducedMotion || mounted ? "translateY(0)" : "translateY(-10px)",
              transition: prefersReducedMotion ? "none" : "opacity 400ms ease, transform 400ms ease",
            }}
          >
            <div className="hero-status-name-group">
              <span className="hero-pulse-dot" aria-hidden="true" />
              <span className="hero-status-name">Pratham Agrawal</span>
            </div>
            <span className="hero-status-sep" aria-hidden="true">/</span>
            <span className="hero-status-role">
              offline &amp; in motion
            </span>
          </div>

          {/* Headline */}
          <h1
            className="hero-headline"
            style={{
              opacity: prefersReducedMotion || mounted ? 1 : 0,
              transform: prefersReducedMotion || mounted ? "translateY(0)" : "translateY(16px)",
              transition: prefersReducedMotion ? "none" : "opacity 500ms cubic-bezier(0.16, 1, 0.3, 1) 120ms, transform 500ms cubic-bezier(0.16, 1, 0.3, 1) 120ms",
            }}
          >
            The version of me<br />
            <span className="hero-headline-highlight" style={{ background: "linear-gradient(120deg, #2D6A4F 0%, #52B788 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              that doesn&apos;t ship code.
            </span>
          </h1>

          {/* Lead description */}
          <p
            className="hero-lead-text"
            style={{
              opacity: prefersReducedMotion || mounted ? 1 : 0,
              transform: prefersReducedMotion || mounted ? "translateY(0)" : "translateY(16px)",
              transition: prefersReducedMotion ? "none" : "opacity 500ms cubic-bezier(0.16, 1, 0.3, 1) 220ms, transform 500ms cubic-bezier(0.16, 1, 0.3, 1) 220ms",
            }}
          >
            I&apos;m usually in the gym, on the bike, or somewhere with bad cell reception.
            This is that side.
          </p>

          {/* Action links */}
          <div
            className="hero-cta-wrap"
            style={{
              opacity: prefersReducedMotion || mounted ? 1 : 0,
              transform: prefersReducedMotion || mounted ? "translateY(0)" : "translateY(16px)",
              transition: prefersReducedMotion ? "none" : "opacity 500ms cubic-bezier(0.16, 1, 0.3, 1) 320ms, transform 500ms cubic-bezier(0.16, 1, 0.3, 1) 320ms",
            }}
          >
            <a href="#training" className="hero-btn-primary" style={{ borderColor: "var(--accent)" }}>
              <span>Explore field logs</span>
              <span aria-hidden="true" style={{ fontSize: "14px", transform: "translateY(1px)" }}>↓</span>
            </a>
            <a
              href="#biking"
              className="hero-btn-secondary"
            >
              <span>Route logs ↗</span>
            </a>
          </div>

        </div>

        {/* ── Right Column: Physical Telemetry ── */}
        <div
          className="hero-right"
          style={{
            width: "100%",
            opacity: prefersReducedMotion || mounted ? 1 : 0,
            transform: prefersReducedMotion || mounted ? "translateY(0)" : "translateY(20px)",
            transition: prefersReducedMotion ? "none" : "opacity 600ms cubic-bezier(0.16, 1, 0.3, 1) 200ms, transform 600ms cubic-bezier(0.16, 1, 0.3, 1) 200ms",
          }}
        >
          <div className="hero-console-box">

            {/* Console Header */}
            <div className="hero-console-header">
              <div className="hero-console-title">
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#2D6A4F", boxShadow: "0 0 6px #2D6A4F" }} aria-hidden="true" />
                <span>telemetry / physical-stats</span>
              </div>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--text-muted)", letterSpacing: "0.05em" }}>
                active season
              </span>
            </div>

            {/* Metrics List */}
            <div style={{ padding: "4px 0" }}>
              {PHYSICAL_METRICS.map((m) => (
                <div key={m.label} className="hero-metric-row">
                  <div className="hero-metric-content">
                    <span className="hero-metric-value" style={{ color: "var(--metric)" }}>
                      {m.value}
                    </span>
                    <span className="hero-metric-label">
                      {m.label}
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="hero-metric-bar-bg" aria-hidden="true">
                    <div
                      className="hero-metric-bar-fill"
                      style={{
                        width: `${m.pct}%`,
                      background: "linear-gradient(90deg, #2D6A4F 0%, #52B788 100%)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Console Footer */}
            <div className="hero-console-footer">
              <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "var(--accent)" }} aria-hidden="true" />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text-secondary)" }}>
                  state: active &amp; recovering · Bangalore, India
                </span>
              </div>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--text-muted)" }}>
                weekly sync
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
