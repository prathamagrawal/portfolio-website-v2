import SectionLabel from "./SectionLabel";
import ScrollReveal from "./ScrollReveal";

const ExternalIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const PUBS = [
  {
    title: "Artificial Intelligence at Healthcare Industry",
    year: "2020",
    venue: "ResearchGate",
    external: "https://www.researchgate.net/publication/348633701_ARTIFICIAL_INTELLIGENCE_AT_HEALTHCARE_INDUSTRY",
    desc: "Analysis of AI-based technology in the medical sector — comparing past, present, and future applications across diagnostics, drug discovery, and patient monitoring.",
  },
  {
    title: "Computational Approaches for Prediction of Cardiovascular Risks",
    year: "2022",
    venue: "Research",
    external: undefined,
    desc: "Two-part research: (a) cardiovascular risk prediction using ML and neural networks; (b) health classification from fitness tracker data via API feed.",
  },
  {
    title: "The Quest for a Martian Life",
    year: "2021",
    venue: "IET-VIT Medium",
    external: "https://medium.com/iet-vit/the-quest-for-a-martian-life-666efaf94d23",
    desc: "Comparative analysis of perspectives on Mars terraforming — whether it should be pursued or whether focus should remain on preserving Earth.",
  },
];

export default function Publications() {
  return (
    <SectionLabel label="publications">
      {/*
       * .card-grid-3 = 1-col mobile, 2-col sm, 3-col 900px+.
       * 3 items → 1 clean row on desktop, no orphan cells.
       */}
      <div className="card-grid-3">
        {PUBS.map((p, i) => (
          <ScrollReveal key={p.title} delay={i * 80} style={{ height: "100%" }}>
            <div className="item-card" style={{ height: "100%" }}>

              {/* Header: year + venue + external link */}
              <div className="item-card-header">
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span className="pub-year">{p.year}</span>
                  <span style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    color: "var(--text-muted)",
                    opacity: 0.5,
                    userSelect: "none",
                  }}>·</span>
                  <span style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    color: "var(--text-muted)",
                    letterSpacing: "0.04em",
                  }}>
                    {p.venue}
                  </span>
                </div>
                {p.external && (
                  <a
                    href={p.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Read: ${p.title}`}
                    className="item-card-icon"
                  >
                    <ExternalIcon />
                  </a>
                )}
              </div>

              {/* Title */}
              {p.external ? (
                <a
                  href={p.external}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pub-title"
                >
                  {p.title}
                </a>
              ) : (
                <span className="pub-title">{p.title}</span>
              )}

              {/* Description */}
              <p className="item-card-desc">{p.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionLabel>
  );
}
