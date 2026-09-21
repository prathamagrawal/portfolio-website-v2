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
      <div className="flex flex-col">
        {PROJECTS.map((project, index) => {
          const imageLeft = index % 2 === 0;

          return (
            <div key={project.title}>
              <div
                className={`
                  flex flex-col gap-8
                  md:flex-row md:items-center
                  ${imageLeft ? "" : "md:flex-row-reverse"}
                `}
              >
                {/* ── Image ───────────────────────── */}
                <div className="md:w-[46%]">
                  <a
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      block relative w-full overflow-hidden
                      border border-border rounded
                      group focus-visible:outline-none
                      focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg
                    "
                    aria-label={`${project.title} — view project`}
                  >
                    <div className="relative w-full h-[220px] md:h-[280px]">
                      <Image
                        src={project.cover}
                        alt={`${project.title} screenshot`}
                        fill
                        className="
                          object-cover
                          brightness-90 group-hover:brightness-100
                          scale-100 group-hover:scale-[1.02]
                          transition-all duration-500
                        "
                        sizes="(max-width: 768px) 100vw, 46vw"
                      />
                      {/* Overlay tint */}
                      <div className="
                        absolute inset-0 bg-bg/30
                        group-hover:bg-bg/0
                        transition-colors duration-500
                      " />
                    </div>
                  </a>
                </div>

                {/* ── Content ─────────────────────── */}
                <div
                  className={`
                    md:w-[54%] flex flex-col
                    ${imageLeft ? "md:pl-10 lg:pl-14" : "md:pr-10 lg:pr-14"}
                  `}
                >
                  <p className="font-mono text-[11px] text-muted tracking-[0.1em] mb-2">
                    featured project
                  </p>

                  <a
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      font-sans text-[22px] md:text-[24px] font-bold text-primary
                      hover:text-accent transition-colors duration-120
                      mb-4 inline-block
                    "
                  >
                    {project.title}
                  </a>

                  {/* Description panel */}
                  <div className="bg-surface border border-border rounded p-5 md:p-6">
                    <p className="font-sans text-[14px] text-secondary leading-[1.8]">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {project.tech.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-5 mt-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-[12px] text-secondary hover:text-accent transition-colors duration-120 flex items-center gap-1"
                      >
                        GitHub <span className="text-[10px]">↗</span>
                      </a>
                    )}
                    {project.external && (
                      <a
                        href={project.external}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-[12px] text-secondary hover:text-accent transition-colors duration-120 flex items-center gap-1"
                      >
                        Live <span className="text-[10px]">↗</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Divider between projects */}
              {index < PROJECTS.length - 1 && (
                <hr className="rule my-16 md:my-20" />
              )}
            </div>
          );
        })}
      </div>
    </SectionLabel>
  );
}
