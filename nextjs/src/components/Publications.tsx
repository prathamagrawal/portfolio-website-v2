import SectionLabel from "./SectionLabel";

const PUBS = [
  {
    title: "Artificial Intelligence at Healthcare Industry",
    year: "2020",
    external:
      "https://www.researchgate.net/publication/348633701_ARTIFICIAL_INTELLIGENCE_AT_HEALTHCARE_INDUSTRY",
    desc: "Analysis of AI-based technology in the medical sector — comparing past, present, and future applications across diagnostics, drug discovery, and patient monitoring.",
  },
  {
    title: "Computational Approaches for Prediction of Cardiovascular Risks",
    year: "2022",
    external: undefined,
    desc: "Two-part research: (a) cardiovascular risk prediction using ML and neural networks; (b) health classification from fitness tracker data via API feed.",
  },
  {
    title: "The Quest for a Martian Life",
    year: "2021",
    external:
      "https://medium.com/iet-vit/the-quest-for-a-martian-life-666efaf94d23",
    desc: "Comparative analysis of perspectives on Mars terraforming — whether it should be pursued or whether focus should remain on preserving Earth.",
  },
];

export default function Publications() {
  return (
    <SectionLabel label="publications">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {PUBS.map((p) => (
          <div
            key={p.title}
            className="card flex flex-col p-5 gap-3 rounded"
          >
            {/* Year badge + link */}
            <div className="flex items-start justify-between gap-2">
              <span className="font-mono text-[11px] text-muted">{p.year}</span>
              {p.external && (
                <a
                  href={p.external}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${p.title} — read publication`}
                  className="text-muted hover:text-accent transition-colors duration-120 shrink-0"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              )}
            </div>

            {/* Title */}
            <h3 className="font-sans text-[14px] font-semibold text-primary leading-snug">
              {p.external ? (
                <a
                  href={p.external}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors duration-120"
                >
                  {p.title}
                </a>
              ) : (
                p.title
              )}
            </h3>

            {/* Description */}
            <p className="font-sans text-[13px] text-secondary leading-[1.75] flex-1">
              {p.desc}
            </p>
          </div>
        ))}
      </div>
    </SectionLabel>
  );
}
