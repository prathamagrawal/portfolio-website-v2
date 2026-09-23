import SectionLabel from "../SectionLabel";

const EXPEDITIONS = [
  {
    title: "Himalayan High Passes",
    coords: "32.24°N, 77.18°E",
    alt: "3,200m",
    date: "EXPEDITION",
    desc: "Trekking through remote alpine trails, glacial meltwater streams, and thin air. The stark minimalism of the high mountains puts engineering problems into grounded perspective.",
    tags: ["High Altitude", "Alpine Trails", "Glacial Valley", "Cold Weather"],
  },
  {
    title: "Western Ghats Monsoon Ridge",
    coords: "12.92°N, 75.78°E",
    alt: "1,890m",
    date: "TREK LOG",
    desc: "Navigating mist-covered ridges and dense tropical rainforest trails during peak monsoons. Extreme humidity, steep muddy ascents, and untamed green landscapes.",
    tags: ["Rainforest", "Monsoon Ridge", "Steep Gradient", "Endurance"],
  },
  {
    title: "Coastal Highways & Horizon Runs",
    coords: "14.54°N, 74.31°E",
    alt: "Sea Level",
    date: "COASTAL ROUTE",
    desc: "Riding open coastal highways where the asphalt meets the Arabian Sea. Endless crosswinds, salt air, and open horizon miles that test steady endurance.",
    tags: ["Coastline", "Crosswinds", "Endurance", "Long Distance"],
  },
];

export default function TravelSection() {
  return (
    <SectionLabel label="expeditions & field logs" id="expeditions">
      <div className="card-grid-3">
        {EXPEDITIONS.map((exp) => (
          <article key={exp.title} className="expedition-card">
            {/* Visual Canvas with Coordinates */}
            <div className="expedition-media">
              <div className="expedition-badge-bar">
                <span className="expedition-coord-chip font-mono">
                  {exp.coords}
                </span>
                <span className="tag" style={{ background: "var(--accent-dim)", color: "var(--accent)", fontWeight: 600 }}>
                  alt: {exp.alt}
                </span>
              </div>

              {/* Architectural topo wireframe placeholder ready for real photo */}
              <div style={{ textAlign: "center", padding: "20px" }}>
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ margin: "0 auto 8px auto", opacity: 0.6, color: "var(--accent)" }}>
                  <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                  <path d="M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19" />
                </svg>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text-muted)", display: "block" }}>
                  photo placeholder · ready for your shot
                </span>
              </div>
            </div>

            {/* Expedition Body */}
            <div className="expedition-body">
              <span className="project-category-tag" style={{ fontSize: "10px", marginBottom: "2px" }}>
                {exp.date}
              </span>
              <h3 className="expedition-title">
                {exp.title}
              </h3>
              <p className="expedition-desc">
                {exp.desc}
              </p>

              <div className="item-card-tags" style={{ marginTop: "8px" }}>
                {exp.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionLabel>
  );
}
