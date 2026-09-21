"use client";

import { useState, useEffect } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const METRICS = [
  { value: "sub-60s",   label: "failover time"          },
  { value: "sub-1s",    label: "ingestion latency"      },
  { value: "90%",       label: "dashboard time cut"     },
  { value: "40%",       label: "DB load reduction"      },
  { value: "15 hrs/wk", label: "reporting effort saved" },
  { value: "10+",       label: "services integrated"    },
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
      }, 500);
      ids.push(t1);
    }, 300);
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
    <section style={{ minHeight: "92vh", display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: "80px", paddingBottom: "64px" }}>
      {/* .hero-grid handles the two-column responsive layout via CSS */}
      <div className="hero-grid">

        {/* ── Left column ── */}
        <div className="hero-left" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>

          <p style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--text-secondary)", letterSpacing: "0.12em", marginBottom: "20px" }}>
            pratham agrawal
          </p>

          <h1 style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 700,
            color: "var(--text-primary)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            fontSize: "clamp(2.2rem, 5.5vw, 4rem)",
            marginBottom: 0,
          }}>
            Backend &amp;<br />
            Data Infrastructure<br />
            Engineer.
          </h1>

          <p className="hero-sub" style={{ fontFamily: "var(--font-sans)", fontSize: "15px", color: "var(--text-secondary)", marginTop: "24px", lineHeight: 1.75 }}>
            Building high-throughput pipelines, distributed systems, and
            LLM-powered automation.{" "}
            <span style={{ color: "var(--text-primary)", opacity: 0.65 }}>Currently at Affinsys AI.</span>
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: "32px", marginTop: "36px" }}>
            <a
              href="#projects"
              style={{ fontFamily: "var(--font-sans)", fontSize: "14px", fontWeight: 500, color: "var(--accent)", textDecoration: "none", display: "flex", alignItems: "center", gap: "6px", transition: "color 120ms ease" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent-hover)"; (e.currentTarget.querySelector("span") as HTMLElement).style.transform = "translateX(4px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "var(--accent)"; (e.currentTarget.querySelector("span") as HTMLElement).style.transform = "translateX(0)"; }}
            >
              <span style={{ display: "inline-block", transition: "transform 200ms ease" }}>→</span>
              View my work
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--text-secondary)", textDecoration: "none", transition: "color 120ms ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              resume.pdf ↗
            </a>
          </div>
        </div>

        {/* ── Right column: Metrics Panel ── */}
        <div className="hero-right" style={{ width: "100%" }}>
          <div style={{
            backgroundColor: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "4px",
            overflow: "hidden",
          }}>
            {/* Panel header */}
            <div style={{
              padding: "10px 20px",
              borderBottom: "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.12em" }}>
                system / metrics
              </span>
              <div style={{ display: "flex", gap: "5px" }} aria-hidden="true">
                {[0,1,2].map((i) => (
                  <span key={i} style={{ width: "9px", height: "9px", borderRadius: "50%", backgroundColor: "var(--border)" }} />
                ))}
              </div>
            </div>

            {/* Metrics rows */}
            <div style={{ padding: "8px 0", position: "relative" }}>
              {cursor && (
                <div aria-hidden="true" style={{
                  position: "absolute", top: "12px", left: "20px",
                  fontFamily: "var(--font-mono)", fontSize: "18px", color: "var(--metric)",
                  animation: "pulse 1s ease-in-out infinite",
                }}>|</div>
              )}
              {METRICS.map((m, i) => (
                <div
                  key={m.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "9px 20px",
                    borderBottom: i < METRICS.length - 1 ? "1px solid var(--border-muted)" : "none",
                    opacity: visible[i] ? 1 : 0,
                    transform: visible[i] ? "translateY(0)" : "translateY(4px)",
                    transition: `opacity 200ms ease ${i * 30}ms, transform 200ms ease ${i * 30}ms`,
                  }}
                >
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "17px", fontWeight: 600, color: "var(--metric)", minWidth: "80px" }}>
                    {typed[i] || m.value}
                  </span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text-secondary)", textAlign: "right" }}>
                    {m.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Panel footer */}
            <div style={{
              padding: "10px 20px",
              borderTop: "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "var(--accent)", display: "inline-block" }} aria-hidden="true" />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text-secondary)" }}>
                currently · Affinsys AI, Bangalore
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
