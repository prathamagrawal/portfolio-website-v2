import Image from "next/image";
import SectionLabel from "./SectionLabel";

const PROJECTS = [
  {
    title: "Mirror-DB",
    cover: "/mirror-db-architecture.jpeg",
    github: "https://github.com/prathamagrawal/mirror-db",
    external:
      "https://github.com/users/prathamagrawal/packages/container/package/mirror-db%2Fmirror-db",
    tech: ["Kubernetes", "PostgreSQL", "PgBouncer", "Helm"],
    description:
      "Designed a high-availability PostgreSQL cluster on Kubernetes to eliminate production downtime during primary failover. Achieved sub-60s automatic failover with a 4-node replication topology and service-driven role switching. Reduced connection overhead by 70–90% using PgBouncer pooling; supports read/write splitting for zero-downtime operations. Implemented dynamic service discovery, automated pod labeling, and a full monitoring stack for health, replication lag, and failover visibility.",
  },
  {
    title: "LogHive",
    cover: "/loghive.png",
    github: "https://github.com/prathamagrawal/loghive",
    external: "https://pypi.org/project/loghive/",
    tech: ["Python", "RabbitMQ", "Redis", "PostgreSQL", "Docker"],
    description:
      "A log archival pipeline for high-volume systems with compression, indexed retrieval, and controlled back-pressure handling. Benchmarked for high-throughput ingestion while maintaining 99.99% write durability on PostgreSQL. Adaptive RabbitMQ consumer scaling and Redis-based producer rate limiting prevent queue saturation during traffic spikes.",
  },
  {
    title: "Clusterbase",
    cover: "/Clusterbase.png",
    github: "https://github.com/prathamagrawal/clusterbase",
    external: "https://www.github.com/prathamagrawal/clusterbase",
    tech: ["Python", "Next.js", "Firebase"],
    description:
      "A real-time clustering system configurable across any number and type of parameters and clustering rules. Values are dynamically provided by the user; clustering runs live. Includes a web console for adding new clusters and querying all active cluster state.",
  },
  {
    title: "Crypto2csv",
    cover: "/Crypto2csv.png",
    github: "https://github.com/prathamagrawal/crypto2csv",
    external: "https://www.github.com/prathamagrawal/crypto2csv",
    tech: ["Python", "CLI", "API"],
    description:
      "A Python command-line tool for retrieving cryptocurrency data as structured CSV. Covers 80+ parameters across a wide range of cryptocurrencies, with configurable fetch options: intervals, coin selection, date ranges. Built for pipelines — pipe directly into downstream analysis tools.",
  },
  {
    title: "Sportlight",
    cover: "/demo.png",
    github: "https://www.github.com/prathamagrawal/Sportlight",
    external: "https://www.knowunknowns.co/",
    tech: ["React", "Python", "NLTK", "NLP", "JavaScript"],
    description:
      "Highlights extraction for sports matches using ML and public APIs, reducing effective match watch time by 90%. NLTK model using WordNet achieves 93% classification accuracy.",
  },
];

export default function FeaturedProjects() {
  return (
    <SectionLabel label="featured projects" id="projects">
      {PROJECTS.map((project, index) => {
        const imageLeft = index % 2 === 0;

        return (
          <div key={project.title}>
            {/*
             * .project-row handles the responsive flex layout.
             * .image-right flips direction for odd-indexed projects.
             * Column widths (47/53) defined in globals.css — NOT Tailwind bracket values.
             */}
            <div className={`project-row${imageLeft ? "" : " image-right"}`}>

              {/* ── Image column ────────────────── */}
              <div className="project-image-col">
                <a
                  href={project.external}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-image-link"
                  aria-label={`${project.title} — view project`}
                >
                  <div className="project-image-inner">
                    <Image
                      src={project.cover}
                      alt={`${project.title} screenshot`}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, 47vw"
                    />
                    <div className="project-image-overlay" aria-hidden="true" />
                  </div>
                </a>
              </div>

              {/* ── Content column ──────────────── */}
              <div
                className={`project-content-col${imageLeft ? " pad-left" : " pad-right"}`}
              >
                <p className="project-eyebrow">featured project</p>

                <a
                  href={project.external}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-title"
                >
                  {project.title}
                </a>

                {/* Description */}
                <div className="project-desc-panel">
                  <p>{project.description}</p>
                </div>

                {/* Tech tags */}
                <div className="project-tags">
                  {project.tech.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>

                {/* Links */}
                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      GitHub ↗
                    </a>
                  )}
                  {project.external && (
                    <a
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      Live ↗
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Divider — except after last project */}
            {index < PROJECTS.length - 1 && (
              <hr className="project-divider" />
            )}
          </div>
        );
      })}
    </SectionLabel>
  );
}
