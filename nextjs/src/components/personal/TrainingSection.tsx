"use client";

import SectionLabel from "../SectionLabel";
import ScrollReveal from "../ScrollReveal";
import ImageWithSkeleton from "../ImageWithSkeleton";
import { useState } from "react";

const TRAINING_CARDS = [
  {
    title: "The Split",
    subtitle: "6-DAY CUSTOM ARCHITECTURE",
    metrics: [{ val: "6 days", label: "weekly frequency" }, { val: "90+ min", label: "per session" }],
    tags: ["Back", "Chest", "Arms", "Shoulders", "Core", "Legs"],
    img: "/gym-1.png",
  },
  {
    title: "Progressive Overload",
    subtitle: "LOAD MANAGEMENT",
    metrics: [{ val: "5x / wk", label: "training days" }, { val: "linear", label: "progression model" }],
    tags: ["Volume Tracking", "Compound Lifts", "Overload", "Consistency"],
    img: "/gym-2.png",
  },
  {
    title: "Recovery & Ritual",
    subtitle: "POST-SESSION PROTOCOL",
    metrics: [{ val: "10+ hrs", label: "sleep target" }, { val: "ice bath", label: "active recovery" }],
    tags: ["Sleep", "Ice Bath", "Coffee", "Active Recovery"],
    img: "/gym-3.png",
  },
];

/** Banner with skeleton */
function BannerWithSkeleton() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="training-banner" style={{ position: "relative" }}>
      {/* Shimmer sits behind the image */}
      <div className={`skeleton skeleton-dark${loaded ? " skeleton-resolved" : ""}`} />
      <img
        src="/gym-4.png"
        alt="Training session"
        className={`training-banner-img ${loaded ? "img-loaded" : "img-loading"}`}
        style={{ position: "relative", zIndex: 2, opacity: loaded ? 1 : 0, transition: "opacity 350ms ease" }}
        onLoad={() => setLoaded(true)}
      />
      <div className="training-banner-overlay" style={{ zIndex: 3 }}>
        <span className="training-banner-label">field log / gym</span>
        <span className="training-banner-text">5 days a week. 90 minutes minimum. No shortcuts.</span>
      </div>
    </div>
  );
}

export default function TrainingSection() {
  return (
    <SectionLabel label="training & gym" id="training">

      {/* ── Full-width banner with skeleton ── */}
      <ScrollReveal duration={650}>
        <BannerWithSkeleton />
      </ScrollReveal>

      {/* ── 3 photo cards with skeleton + hover micro-interactions ── */}
      <div className="card-grid-3">
        {TRAINING_CARDS.map((card, i) => (
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
