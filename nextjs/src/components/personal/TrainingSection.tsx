import SectionLabel from "../SectionLabel";

const TRAINING_CARDS = [
  {
    title: "Progressive Overload",
    subtitle: "DATA-DRIVEN STRENGTH",
    metrics: [{ val: "4x", label: "weekly splits" }, { val: "RPE 8", label: "target load" }],
    desc: "Treating strength training like an adaptive system. Focus on progressive compound lifts, recorded load volume, and calibrated recovery. Consistency over extreme intensity.",
    tags: ["Squat", "Deadlift", "Bench Press", "Overhead Press"],
  },
  {
    title: "Split Architecture",
    subtitle: "PUSH / PULL / LEGS",
    metrics: [{ val: "75 min", label: "avg session" }, { val: "2x", label: "frequency/muscle" }],
    desc: "Structured split prioritizing joint longevity, posterior chain resilience, and compound volume. Balanced with mobility work to counter long hours sitting at workstations.",
    tags: ["Hypertrophy", "Posterior Chain", "Rotator Cuff", "Mobility"],
  },
  {
    title: "Recovery Discipline",
    subtitle: "RESTORATION & SLEEP",
    metrics: [{ val: "7.5h+", label: "sleep target" }, { val: "100%", label: "hydration rate" }],
    desc: "You don't grow in the gym; you grow in recovery. Strict sleep hygiene, protein targets, and active deload cycles to maintain year-round peak physical output.",
    tags: ["Sleep Quality", "Nutrition", "Deload Protocol", "Sauna"],
  },
];

export default function TrainingSection() {
  return (
    <SectionLabel label="training & gym" id="training">
      <div className="card-grid-3">
        {TRAINING_CARDS.map((card) => (
          <div key={card.title} className="item-card">
            <div>
              <span className="project-category-tag" style={{ fontSize: "10px", marginBottom: "4px" }}>
                {card.subtitle}
              </span>
              <h3 className="item-card-title" style={{ fontSize: "16px", marginBottom: "10px" }}>
                {card.title}
              </h3>

              {/* Metrics */}
              <div style={{ display: "flex", gap: "6px", marginBottom: "12px" }}>
                {card.metrics.map((m) => (
                  <span key={m.label} className="tag" style={{ background: "var(--accent-dim)", color: "var(--accent)", fontWeight: 600 }}>
                    {m.val} <span style={{ opacity: 0.7, fontWeight: 400 }}>· {m.label}</span>
                  </span>
                ))}
              </div>

              <p className="item-card-desc">
                {card.desc}
              </p>
            </div>

            <div className="item-card-tags" style={{ marginTop: "12px" }}>
              {card.tags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionLabel>
  );
}
