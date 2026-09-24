import SectionLabel from "../SectionLabel";
import ScrollReveal from "../ScrollReveal";

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

export default function TrainingSection() {
  return (
    <SectionLabel label="training & gym" id="training">

      {/* ── Full-width banner: gym-4 ── */}
      <ScrollReveal duration={650}>
        <div className="training-banner">
          <img
            src="/gym-4.png"
            alt="Training session"
            className="training-banner-img"
          />
          <div className="training-banner-overlay">
            <span className="training-banner-label">field log / gym</span>
            <span className="training-banner-text">5 days a week. 90 minutes minimum. No shortcuts.</span>
          </div>
        </div>
      </ScrollReveal>

      {/* ── 3 photo cards ── */}
      <div className="card-grid-3">
        {TRAINING_CARDS.map((card, i) => (
          <ScrollReveal key={card.title} delay={i * 80} style={{ height: "100%" }}>
            <div className="expedition-card" style={{ height: "100%" }}>

              {/* Photo */}
              <div className="expedition-media">
                <img
                  src={card.img}
                  alt={card.title}
                  className="training-photo-img"
                />
                <div className="expedition-badge-bar">
                  {card.metrics.map((m) => (
                    <span key={m.label} className="tag" style={{ background: "var(--accent-dim)", color: "var(--accent)", fontWeight: 600, backdropFilter: "blur(6px)" }}>
                      {m.val} <span style={{ opacity: 0.7, fontWeight: 400 }}>· {m.label}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Body — title, subtitle, tags only */}
              <div className="expedition-body">
                <span className="project-category-tag" style={{ fontSize: "10px" }}>
                  {card.subtitle}
                </span>
                <h3 className="expedition-title">
                  {card.title}
                </h3>
                <div className="item-card-tags">
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
