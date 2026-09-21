"use client";

import { useState, useEffect } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const METRICS = [
  { value: "sub-60s",    label: "failover time"          },
  { value: "sub-1s",     label: "ingestion latency"      },
  { value: "90%",        label: "dashboard time cut"     },
  { value: "40%",        label: "DB load reduction"      },
  { value: "15 hrs/wk",  label: "reporting effort saved" },
  { value: "10+",        label: "services integrated"    },
];

function useTypewriterSequence(
  items: { value: string }[],
  prefersReducedMotion: boolean,
) {
  const [typed, setTyped]   = useState<string[]>(items.map(() => ""));
  const [visible, setVisible] = useState<boolean[]>(items.map(() => false));
  const [cursor, setCursor] = useState(false);
  const [done, setDone]     = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      setTyped(items.map((m) => m.value));
      setVisible(items.map(() => true));
      setDone(true);
      return;
    }

    const ids: ReturnType<typeof setTimeout>[] = [];

    // 300ms initial pause → cursor blink for 500ms → then type rows
    const t0 = setTimeout(() => {
      setCursor(true);
      const t1 = setTimeout(() => {
        setCursor(false);

        items.forEach((item, ri) => {
          const rowDelay = ri * 90;

          const tRow = setTimeout(() => {
            setVisible((prev) => {
              const n = [...prev]; n[ri] = true; return n;
            });
            const chars = item.value.split("");
            chars.forEach((_, ci) => {
              const tChar = setTimeout(() => {
                setTyped((prev) => {
                  const n = [...prev];
                  n[ri] = item.value.slice(0, ci + 1);
                  return n;
                });
                if (ri === items.length - 1 && ci === chars.length - 1) {
                  setDone(true);
                }
              }, ci * 28);
              ids.push(tChar);
            });
          }, rowDelay);
          ids.push(tRow);
        });
      }, 500);
      ids.push(t1);
    }, 300);
    ids.push(t0);

    return () => ids.forEach(clearTimeout);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefersReducedMotion]);

  return { typed, visible, cursor, done };
}

export default function Hero() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { typed, visible, cursor, done } = useTypewriterSequence(METRICS, prefersReducedMotion);
  const _ = done; // used downstream if needed

  return (
    <section className="min-h-[92vh] flex flex-col justify-center pt-24 pb-16">
      <div className="flex flex-col-reverse md:flex-row md:items-center gap-10 md:gap-8 lg:gap-16">

        {/* ── Left ─────────────────────────────────────── */}
        <div className="flex flex-col items-start md:w-[55%]">

          {/* Eyebrow */}
          <p className="font-mono text-[12px] text-secondary tracking-[0.12em] mb-5">
            pratham agrawal
          </p>

          {/* Headline */}
          <h1
            className="
              font-sans font-bold text-primary leading-[1.1] tracking-tight
              text-[clamp(2.4rem,6vw,4.2rem)]
            "
          >
            Backend &amp;<br />
            Data Infrastructure<br />
            Engineer.
          </h1>

          {/* Sub */}
          <p className="font-sans text-[15px] md:text-base text-secondary mt-6 max-w-[480px] leading-[1.75]">
            Building high-throughput pipelines, distributed systems, and
            LLM-powered automation.{" "}
            <span className="text-primary/70">Currently at Affinsys AI.</span>
          </p>

          {/* CTA row */}
          <div className="flex items-center gap-8 mt-10">
            <a
              href="#projects"
              className="
                font-sans text-[14px] font-medium text-accent
                flex items-center gap-1.5 group
                hover:text-accent-hover transition-colors duration-120
              "
            >
              <span
                className="
                  inline-block transition-transform duration-200
                  group-hover:translate-x-1
                "
              >
                →
              </span>
              View my work
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[12px] text-secondary hover:text-primary transition-colors duration-120 flex items-center gap-1"
            >
              resume.pdf <span className="text-[10px]">↗</span>
            </a>
          </div>
        </div>

        {/* ── Right: Metrics Panel ──────────────────────── */}
        <div className="md:w-[45%]">
          <div
            className="
              bg-surface border border-border rounded
              overflow-hidden
            "
          >
            {/* Panel header */}
            <div className="px-6 py-3 border-b border-border flex items-center justify-between">
              <span className="font-mono text-[11px] text-muted tracking-[0.12em]">
                system / metrics
              </span>
              {/* Traffic-light dots — purely decorative, aria-hidden */}
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="w-2.5 h-2.5 rounded-full bg-border" />
                <span className="w-2.5 h-2.5 rounded-full bg-border" />
                <span className="w-2.5 h-2.5 rounded-full bg-border" />
              </div>
            </div>

            {/* Metrics list */}
            <div className="px-6 py-4 relative">
              {/* Cursor blink */}
              {cursor && (
                <div
                  aria-hidden="true"
                  className="absolute top-4 left-6 font-mono text-[18px] text-metric animate-pulse"
                >
                  |
                </div>
              )}

              {METRICS.map((m, i) => (
                <div
                  key={m.label}
                  style={{
                    transitionDelay: prefersReducedMotion ? "0ms" : `${i * 30}ms`,
                  }}
                  className={`
                    flex items-center justify-between py-2.5
                    border-b border-border-muted last:border-0
                    transition-all duration-200
                    ${visible[i]
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-1"
                    }
                  `}
                >
                  {/* Metric value */}
                  <span className="font-mono text-[17px] font-semibold text-metric min-w-[80px]">
                    {typed[i] || m.value}
                  </span>
                  {/* Label */}
                  <span className="font-mono text-[11px] text-secondary text-right leading-tight">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Panel footer */}
            <div className="px-6 py-3 border-t border-border flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" aria-hidden="true" />
              <span className="font-mono text-[11px] text-secondary">
                currently · Affinsys AI, Bangalore
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
