"use client";

import SectionLabel from "../SectionLabel";
import ScrollReveal from "../ScrollReveal";
import ImageWithSkeleton from "../ImageWithSkeleton";
import { useState } from "react";

const SPORTS_CARDS = [
  {
    title: "Badminton",
    subtitle: "COURT / REFLEX / SMASH",
    metrics: [{ val: "singles", label: "preferred format" }, { val: "fast-twitch", label: "play style" }],
    tags: ["Smash", "Footwork", "Reflexes", "Court Coverage"],
    img: "/badminton.JPG",
  },
  {
    title: "Swimming",
    subtitle: "POOL / OPEN WATER",
    metrics: [{ val: "freestyle", label: "preferred stroke" }, { val: "endurance", label: "focus" }],
    tags: ["Freestyle", "Lap Swimming", "Breath Control", "Recovery"],
    img: "/swimming.jpg",
  },
  {
    title: "Go-Karting",
    subtitle: "TRACK / SPEED / LINES",
    metrics: [{ val: "full throttle", label: "only mode" }, { val: "racing lines", label: "obsession" }],
    tags: ["Racing Lines", "Throttle Control", "Speed", "Competitive"],
    img: "/gokaarting.jpeg",
  },
];

/** Adventure banner with skeleton behind the main image */
function AdventureBannerWithSkeleton() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="adventure-banner">
      <div className="adventure-backdrop" aria-hidden="true" />
      {!loaded && (
        <div
          className="skeleton skeleton-dark"
          style={{ position: "absolute", inset: 0, zIndex: 1, borderRadius: 0 }}
        />
      )}
      <img
        src="/leopard.jpg"
        alt="Leopard face rock climb"
        className="adventure-img-main"
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 350ms ease",
        }}
        onLoad={() => setLoaded(true)}
      />
      <div className="bike-banner-overlay" style={{ zIndex: 3 }}>
        <span className="bike-banner-label">field log / adventures</span>
        <span className="bike-banner-text">
          Climbed a rock that looks like a leopard face. Bucket list: skydive · scuba.
        </span>
      </div>
    </div>
  );
}

export default function SportsSection() {
  return (
    <SectionLabel label="sports & activities" id="sports">

      {/* ── Banner with skeleton ── */}
      <ScrollReveal duration={650}>
        <AdventureBannerWithSkeleton />
      </ScrollReveal>

      {/* ── 3 sport photo cards with skeleton + hover micro-interactions ── */}
      <div className="card-grid-3">
        {SPORTS_CARDS.map((card, i) => (
          <ScrollReveal key={card.title} delay={i * 80} style={{ height: "100%" }}>
            <div className="expedition-card" style={{ height: "100%" }}>

              {/* Photo with skeleton */}
              <div className="expedition-media">
                <ImageWithSkeleton
                  src={card.img}
                  alt={card.title}
                  className="training-photo-img"
                />
                <div className="expedition-badge-bar" style={{ zIndex: 3 }}>
                  {card.metrics.map((m) => (
                    <span
                      key={m.label}
                      className="tag"
                      style={{
                        background: "var(--accent-dim)",
                        color: "var(--accent)",
                        fontWeight: 600,
                        backdropFilter: "blur(6px)",
                      }}
                    >
                      {m.val}{" "}
                      <span style={{ opacity: 0.7, fontWeight: 400 }}>· {m.label}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Body */}
              <div className="expedition-body">
                <span className="project-category-tag" style={{ fontSize: "10px" }}>
                  {card.subtitle}
                </span>
                <h3 className="expedition-title">{card.title}</h3>
                <div className="item-card-tags tags-animated">
                  {card.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>

            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionLabel>
  );
}
