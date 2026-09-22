"use client";

import { useState, useEffect } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const METRICS = [
  { value: "sub-60s",   label: "failover time (Mirror-DB)",   pct: 88  },
  { value: "sub-1s",    label: "ingestion latency (Eventlogger)", pct: 94 },
  { value: "90%",       label: "dashboard time cut (Datalens)", pct: 90 },
  { value: "40%",       label: "DB load reduction (SQL views)", pct: 40 },
  { value: "15 hrs/wk", label: "reporting effort automated",  pct: 75  },
  { value: "10+",       label: "services in event mesh",       pct: 100 },
];

function useTypewriterSequence(
  items: { value: string }[],
  prefersReducedMotion: boolean,
) {
  const [typed,   setTyped]   = useState<string[]>(items.map(() => ""));
  const [visible, setVisible] = useState<boolean[]>(items.map(() => false));
  const [cursor,  setCursor]  = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      setTyped(items.map((m) => m.value));
      setVisible(items.map(() => true));
      return;
    }
    const ids: ReturnType<typeof setTimeout>[] = [];
    const t0 = setTimeout(() => {
      setCursor(true);
      const t1 = setTimeout(() => {
        setCursor(false);
        items.forEach((item, ri) => {
          const tRow = setTimeout(() => {
            setVisible((prev) => { const n = [...prev]; n[ri] = true; return n; });
            item.value.split("").forEach((_, ci) => {
              const tChar = setTimeout(() => {
                setTyped((prev) => { const n = [...prev]; n[ri] = item.value.slice(0, ci + 1); return n; });
              }, ci * 28);
              ids.push(tChar);
            });
          }, ri * 90);
          ids.push(tRow);
        });
      }, 450);
      ids.push(t1);
    }, 250);
    ids.push(t0);
    return () => ids.forEach(clearTimeout);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefersReducedMotion]);

  return { typed, visible, cursor };
}

export default function Hero() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { typed, visible, cursor } = useTypewriterSequence(METRICS, prefersReducedMotion);

  return (
    <section style={{ minHeight: "90vh", display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: "84px", paddingBottom: "72px" }}>
      <div className="hero-grid">

        {/* ── Left Column: Headline & Position ── */}
        <div className="hero-left" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>

          {/* Status badge — bold, high-contrast systems chip */}
          <div className="hero-status-pill">
            <div className="hero-status-name-group">
              <span className="hero-pulse-dot" aria-hidden="true" />
              <span className="hero-status-name">pratham agrawal</span>
            </div>
            <span className="hero-status-sep" aria-hidden="true">/</span>
            <span className="hero-status-role">systems &amp; data infra</span>
          </div>

          {/* Clean, balanced headline */}
          <h1 className="hero-headline">
            Backend &amp; Data<br />
            <span className="hero-headline-highlight">Infrastructure</span> Engineer.
          </h1>

          {/* Lead description */}
          <p className="hero-lead-text">
            Building high-throughput data pipelines, distributed storage topologies, and
            LLM-powered automation.{" "}
            <span style={{ color: "var(--text-primary)", opacity: 0.75 }}>Currently at Affinsys AI.</span>
          </p>

          {/* Interactive CTAs */}
          <div className="hero-cta-wrap">
            <a href="#projects" className="hero-btn-primary">
              <span>View my work</span>
              <span aria-hidden="true" style={{ fontSize: "14px", transform: "translateY(1px)" }}>↓</span>
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn-secondary"
            >
              <span>resume.pdf</span>
              <span aria-hidden="true" style={{ fontSize: "12px", opacity: 0.7 }}>↗</span>
            </a>
          </div>

        </div>

        {/* ── Right Column: Telemetry / Metrics Console ── */}
        <div className="hero-right" style={{ width: "100%" }}>
          <div className="hero-console-box">

            {/* Console Header */}
            <div className="hero-console-header">
              <div className="hero-console-title">
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#3fb950", boxShadow: "0 0 6px #3fb950" }} aria-hidden="true" />
                <span>telemetry / production-metrics</span>
              </div>
              <div className="hero-console-window-dots" aria-hidden="true">
                {[0, 1, 2].map((i) => (
                  <span key={i} className="hero-console-window-dot" />
                ))}
              </div>
            </div>

            {/* Metrics List */}
            <div style={{ padding: "4px 0", position: "relative" }}>
              {cursor && (
                <div aria-hidden="true" style={{
                  position: "absolute", top: "12px", left: "20px",
                  fontFamily: "var(--font-mono)", fontSize: "16px", color: "var(--metric)",
                }}>|</div>
              )}
              {METRICS.map((m, i) => (
                <div
                  key={m.label}
                  className="hero-metric-row"
                  style={{
                    opacity: visible[i] ? 1 : 0,
                    transform: visible[i] ? "translateY(0)" : "translateY(4px)",
                    transition: `opacity 200ms ease ${i * 30}ms, transform 200ms ease ${i * 30}ms`,
                  }}
                >
                  <div className="hero-metric-content">
                    <span className="hero-metric-value">
                      {typed[i] || m.value}
                    </span>
                    <span className="hero-metric-label">
                      {m.label}
                    </span>
                  </div>

                  {/* Visual telemetry progress gauge */}
                  <div className="hero-metric-bar-bg" aria-hidden="true">
                    <div
                      className="hero-metric-bar-fill"
                      style={{
                        width: visible[i] ? `${m.pct}%` : "0%",
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
                  cluster: healthy · Affinsys AI, Bangalore
                </span>
              </div>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--text-muted)", letterSpacing: "0.06em" }}>
                p99 live
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
