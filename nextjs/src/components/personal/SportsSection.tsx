import SectionLabel from "../SectionLabel";

const SPORTS = [
  {
    title: "Badminton",
    role: "COMPETITIVE SINGLES & DOUBLES",
    desc: "Fast-twitch reflexes, court spatial awareness, and tactical deceptive shotmaking. A high-tempo cardiovascular game that demands rapid decision making under extreme anaerobic pressure.",
    stats: "Reflexes · Agility · Smashing Pace",
    tags: ["Court Coverage", "Explosive Movement", "Footwork"],
  },
  {
    title: "Cricket & Sports Analytics",
    role: "STRATEGY & BOWLING ROTATION",
    desc: "Analytical breakdown of match momentum, field placement geometry, and bowling variations. This passion led directly to building analytical projects like IPL Analysis and Sportlight.",
    stats: "Match Geometry · Pace Tactics",
    tags: ["Data Modeling", "Strategy", "Game Theory"],
  },
  {
    title: "Football / Team Dynamics",
    role: "MIDFIELD & PLAYMAKING",
    desc: "Vision, communication, and high-intensity interval movement across 90 minutes. Understanding team spacing and anticipating teammate runs mirrors orchestrating distributed services.",
    stats: "High Intensity · Spatial Vision",
    tags: ["Team Spacing", "Stamina", "Playmaking"],
  },
];

export default function SportsSection() {
  return (
    <SectionLabel label="sports & competition" id="sports">
      <div className="card-grid-3">
        {SPORTS.map((sport) => (
          <div key={sport.title} className="item-card">
            <div>
              <span className="project-category-tag" style={{ fontSize: "10px", marginBottom: "4px" }}>
                {sport.role}
              </span>
              <h3 className="item-card-title" style={{ fontSize: "16px", marginBottom: "8px" }}>
                {sport.title}
              </h3>
              <p className="item-card-desc" style={{ marginBottom: "12px" }}>
                {sport.desc}
              </p>
            </div>

            <div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--accent)", marginBottom: "8px", fontWeight: 600 }}>
                {sport.stats}
              </div>
              <div className="item-card-tags">
                {sport.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionLabel>
  );
}
