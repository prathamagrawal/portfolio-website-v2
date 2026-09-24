"use client";

import SectionLabel from "../SectionLabel";
import ScrollReveal from "../ScrollReveal";
import { useRef, useEffect, useState } from "react";

const EXPEDITIONS = [
  {
    title: "Himalayan High Passes",
    type: "ALPINE TREK",
    coords: "32.24°N, 77.18°E",
    alt: "3,200m",
    altPct: 85,
    date: "EXPEDITION",
    desc: "Trekking through remote alpine trails, glacial meltwater streams, and thin air. The stark minimalism of the high mountains puts engineering problems into grounded perspective.",
    tags: ["High Altitude", "Alpine Trails", "Glacial Valley", "Cold Weather"],
    gradient: "linear-gradient(135deg, rgba(45,106,79,0.14) 0%, rgba(82,183,136,0.06) 100%)",
  },
  {
    title: "Western Ghats Monsoon Ridge",
    type: "MONSOON TRAIL",
    coords: "12.92°N, 75.78°E",
    alt: "1,890m",
    altPct: 55,
    date: "TREK LOG",
    desc: "Navigating mist-covered ridges and dense tropical rainforest trails during peak monsoons. Extreme humidity, steep muddy ascents, and untamed green landscapes.",
    tags: ["Rainforest", "Monsoon Ridge", "Steep Gradient", "Endurance"],
    gradient: "linear-gradient(135deg, rgba(82,183,136,0.12) 0%, rgba(45,106,79,0.04) 100%)",
  },
  {
    title: "Coastal Highways & Horizon Runs",
    type: "COASTAL ROUTE",
    coords: "14.54°N, 74.31°E",
    alt: "Sea Level",
    altPct: 8,
    date: "COASTAL ROUTE",
    desc: "Riding open coastal highways where the asphalt meets the Arabian Sea. Endless crosswinds, salt air, and open horizon miles that test steady endurance.",
    tags: ["Coastline", "Crosswinds", "Endurance", "Long Distance"],
    gradient: "linear-gradient(135deg, rgba(0,119,182,0.10) 0%, rgba(72,202,228,0.04) 100%)",
  },
];

/** A single trek card with animated elevation bar triggered by IntersectionObserver */
function TrekCard({ exp, delay }: { exp: (typeof EXPEDITIONS)[0]; delay: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <ScrollReveal delay={delay} style={{ height: "100%" }}>
      <article ref={cardRef} className="trek-card" style={{ height: "100%" }}>

        {/* Colourful terrain header band */}
        <div className="trek-card-header" style={{ background: exp.gradient }}>

          {/* Pin + coords row */}
          <div className="trek-card-pin-row">
            <div className="trek-card-pin">
              {/* Teardrop pin */}
              <div className="trek-pin-icon" aria-hidden="true">
                <div className="trek-pin-icon-inner" />
              </div>
              <span className="trek-type-label">{exp.type}</span>
            </div>
            <span className="trek-card-coords">{exp.coords}</span>
          </div>

          {/* Altitude chip */}
          <div className="trek-alt-chip">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
            </svg>
            {exp.alt}
          </div>

          {/* Animated elevation bar */}
          <div className="trek-elevation-bar">
            <div className="trek-elevation-label">
              <span className="trek-elevation-key">ELEVATION</span>
              <span className="trek-elevation-val">{exp.alt}</span>
            </div>
            <div className="trek-elevation-track">
              <div
                className="trek-elevation-fill"
                style={{
                  width: inView ? `${exp.altPct}%` : "0%",
                  transition: `width 900ms cubic-bezier(0.25, 1, 0.5, 1) ${delay + 200}ms`,
                }}
              />
            </div>
          </div>

        </div>

        {/* Body */}
        <div className="trek-card-body">
          <span className="project-category-tag" style={{ fontSize: "10px", marginBottom: "2px" }}>
            {exp.date}
          </span>
          <h3 className="trek-card-title">{exp.title}</h3>
          <p className="trek-card-desc">{exp.desc}</p>

          <div className="item-card-tags tags-animated" style={{ marginTop: "8px" }}>
            {exp.tags.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>

      </article>
    </ScrollReveal>
  );
}

export default function TravelSection() {
  return (
    <SectionLabel label="expeditions & field logs" id="expeditions">
      <div className="card-grid-3">
        {EXPEDITIONS.map((exp, i) => (
          <TrekCard key={exp.title} exp={exp} delay={i * 80} />
        ))}
      </div>
    </SectionLabel>
  );
}
