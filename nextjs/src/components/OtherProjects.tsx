import SectionLabel from "./SectionLabel";

const PROJECTS = [
  {
    title: "IPL Analysis",
    github: "https://github.com/prathamagrawal/IPL-Analysis",
    external:
      "https://www.kaggle.com/datasets/fearsomejockey/ipl-batting-and-bowling-dataset-20182022",
    tech: ["Python", "Jupyter"],
    desc: "Data analysis and visualization toolset for answering complex analytical questions about IPL batting and bowling data (2018–2022).",
  },
  {
    title: "Olympics Data Visualization",
    github: undefined,
    external: "https://github.com/prathamagrawal",
    tech: ["Python", "R", "Plotly", "Dash", "Flask"],
    desc: "Dataset of 270,000+ rows covering 124 years of Olympic athlete history. Web app built with Dash and Plotly to surface trends and outliers across the full timeline.",
  },
  {
    title: "Image Colorisation",
    github: "https://github.com/prathamagrawal/Image-colorisation",
    external: undefined,
    tech: ["Python", "Flask", "Jupyter"],
    desc: "Deep neural network tool for colorizing and enhancing grayscale images.",
  },
  {
    title: "LeetCode Solutions",
    github: "https://github.com/prathamagrawal/Leetcode",
    external: "https://www.prathamagrawal.me/leetcode",
    tech: ["C++", "Python", "Java"],
    desc: "Curated solutions repository covering a range of algorithmic and data structure problems.",
  },
];

export default function OtherProjects() {
  return (
    <SectionLabel label="other projects">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {PROJECTS.map((p) => (
          <div
            key={p.title}
            className="
              card flex flex-col p-5 gap-3
              rounded group
            "
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-sans text-[15px] font-semibold text-primary leading-snug">
                {p.title}
              </h3>
              {/* Link icons */}
              <div className="flex items-center gap-3 shrink-0 pt-0.5">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.title} on GitHub`}
                    className="text-muted hover:text-accent transition-colors duration-120"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>
                )}
                {p.external && (
                  <a
                    href={p.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.title} — external link`}
                    className="text-muted hover:text-accent transition-colors duration-120"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="font-sans text-[13px] text-secondary leading-[1.75] flex-1">
              {p.desc}
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {p.tech.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionLabel>
  );
}
