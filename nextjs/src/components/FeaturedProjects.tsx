"use client";

import { useState } from "react";
import Image from "next/image";
import SectionLabel from "./SectionLabel";
import ScrollReveal from "./ScrollReveal";

const INITIAL_PROJECT_COUNT = 2;

const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const ExternalIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const PROJECTS = [
  {
    title: "Mirror-DB",
    category: "SYS.01 // DISTRIBUTED STORAGE & HA",
    cover: "/mirror-db-architecture.jpeg",
    windowTitle: "mirror-db / architecture-topology.spec",
    windowBadge: "DIAGRAM",
    objectFit: "contain" as const,
    github: "https://github.com/prathamagrawal/mirror-db",
    external:
      "https://github.com/users/prathamagrawal/packages/container/package/mirror-db%2Fmirror-db",
    externalLabel: "Container Image",
    metrics: [
      { val: "sub-60s", label: "failover" },
      { val: "70–90%", label: "pool cut" },
      { val: "4-node", label: "HA mesh" },
    ],
    tech: ["Kubernetes", "PostgreSQL", "PgBouncer", "Helm", "StatefulSet"],
    description:
      "Engineered a high-availability PostgreSQL cluster on Kubernetes to eliminate production downtime during primary failover. Implemented a 4-node replication topology with automated sub-60s role switching, PgBouncer pooling for read/write splitting, dynamic service discovery, and full replication lag observability.",
  },
  {
    title: "LogHive",
    category: "SYS.02 // DISTRIBUTED LOGGING & ARCHIVAL",
    cover: "/loghive.png",
    windowTitle: "loghive / backpressure-pipeline.py",
    windowBadge: "PIPELINE",
    objectFit: "cover" as const,
    github: "https://github.com/prathamagrawal/loghive",
    external: "https://pypi.org/project/loghive/",
    externalLabel: "PyPI Package",
    metrics: [
      { val: "99.99%", label: "durability" },
      { val: "sub-1s", label: "ingestion" },
      { val: "adaptive", label: "backpressure" },
    ],
    tech: ["Python", "RabbitMQ", "Redis", "PostgreSQL", "Docker"],
    description:
      "High-throughput log archival pipeline designed for zero-data-loss ingestion under traffic surges. Features LZ4 stream compression, multi-index retrieval, adaptive RabbitMQ consumer autoscaling, and Redis rate-limiting to prevent queue saturation while guaranteeing 99.99% write durability on PostgreSQL.",
  },
  {
    title: "Clusterbase",
    category: "SYS.03 // REAL-TIME DATA CLUSTERING",
    cover: "/Clusterbase.png",
    windowTitle: "clusterbase / telemetry-console.ui",
    windowBadge: "CONSOLE UI",
    objectFit: "cover" as const,
    github: "https://github.com/prathamagrawal/clusterbase",
    external: "https://www.github.com/prathamagrawal/clusterbase",
    externalLabel: "Repository",
    metrics: [
      { val: "live", label: "streaming" },
      { val: "N-param", label: "dynamic rules" },
    ],
    tech: ["Python", "Next.js", "Firebase", "Tailwind CSS"],
    description:
      "Configurable real-time clustering engine that groups multi-dimensional data streams on the fly. Allows operators to define and adjust custom clustering parameters and rules live without redeployment, paired with an interactive monitoring web console.",
  },
  {
    title: "Crypto2csv",
    category: "SYS.04 // STREAM ETL & CLI PIPELINE",
    cover: "/Crypto2csv.png",
    windowTitle: "crypto2csv / cli-stream.sh",
    windowBadge: "CLI TOOL",
    objectFit: "contain" as const,
    github: "https://github.com/prathamagrawal/crypto2csv",
    external: "https://www.github.com/prathamagrawal/crypto2csv",
    externalLabel: "Repository",
    metrics: [
      { val: "80+", label: "parameters" },
      { val: "composable", label: "Unix pipes" },
    ],
    tech: ["Python", "CLI", "REST API", "Data Pipelines"],
    description:
      "High-performance command-line ETL utility for querying and transforming cryptocurrency market data into standardized CSV streams. Designed for Unix pipeline composability with configurable fetch intervals, currency pairs, and timestamp pagination.",
  },
  {
    title: "Sportlight",
    category: "SYS.05 // ML HIGHLIGHT EXTRACTION",
    cover: "/demo.png",
    windowTitle: "sportlight / video-pipeline.ml",
    windowBadge: "ML MODEL",
    objectFit: "cover" as const,
    github: "https://www.github.com/prathamagrawal/Sportlight",
    external: "https://www.knowunknowns.co/",
    externalLabel: "Live Demo",
    metrics: [
      { val: "90%", label: "watch time cut" },
      { val: "93%", label: "ML accuracy" },
    ],
    tech: ["React", "Python", "NLTK", "NLP", "FastAPI"],
    description:
      "Automated sports match highlight extraction platform utilizing NLP and event streams. Employs an NLTK model with WordNet semantic parsing to classify pivotal moments and generate concise video recaps, cutting effective match watch time by 90%.",
  },
];

export default function FeaturedProjects() {
  const [expanded, setExpanded] = useState(false);
  const visibleProjects = expanded ? PROJECTS : PROJECTS.slice(0, INITIAL_PROJECT_COUNT);

  const handleToggle = () => {
    if (expanded) {
      setExpanded(false);
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    } else {
      setExpanded(true);
    }
  };

  return (
    <SectionLabel label="featured projects" id="projects">
      <div>
        {visibleProjects.map((project, index) => {
          const isReverse = index % 2 !== 0;

          return (
            <ScrollReveal key={project.title} delay={index * 60}>
              <article className="project-card">
                <div className={`project-card-grid${isReverse ? " reverse" : ""}`}>

                  {/* ── Blueprint Window Frame (Visual Canvas) ── */}
                  <div className="project-card-visual">
                    <a
                      href={project.external || project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-window-frame"
                      aria-label={`${project.title} — view project`}
                    >
                      {/* Window Title Bar */}
                      <div className="project-window-header">
                        <div className="project-window-dots" aria-hidden="true">
                          <span className="project-window-dot red" />
                          <span className="project-window-dot yellow" />
                          <span className="project-window-dot green" />
                        </div>
                        <span className="project-window-title">
                          {project.windowTitle}
                        </span>
                        <span className="project-window-badge">
                          {project.windowBadge}
                        </span>
                      </div>

                      {/* Canvas Area with Image */}
                      <div className="project-window-canvas">
                        <Image
                          src={project.cover}
                          alt={`${project.title} architectural overview`}
                          fill
                          style={{
                            objectFit: project.objectFit,
                            objectPosition: "center",
                            padding: project.objectFit === "contain" ? "16px" : "0",
                          }}
                          sizes="(max-width: 900px) 100vw, 500px"
                        />
                      </div>
                    </a>
                  </div>

                  {/* ── Project Intelligence Specs ── */}
                  <div className="project-card-info">
                    <div>
                      {/* Category Eyebrow */}
                      <span className="project-category-tag">
                        {project.category}
                      </span>

                      {/* Title */}
                      <h3 style={{ margin: 0, padding: 0 }}>
                        <a
                          href={project.external || project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-card-title"
                        >
                          {project.title}
                        </a>
                      </h3>

                      {/* Impact Telemetry Metrics Strip */}
                      <div className="project-metric-chips" aria-label="Key project metrics">
                        {project.metrics.map((m) => (
                          <div key={m.label} className="project-metric-chip">
                            <span className="project-metric-chip-val">{m.val}</span>
                            <span className="project-metric-chip-lbl">· {m.label}</span>
                          </div>
                        ))}
                      </div>

                      {/* Architectural Description */}
                      <p className="project-card-desc">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack & Action Buttons */}
                    <div>
                      <div className="project-card-tech">
                        {project.tech.map((t) => (
                          <span key={t} className="tag">
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="project-action-group">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-action-btn"
                          >
                            <GithubIcon />
                            <span>Source</span>
                          </a>
                        )}
                        {project.external && (
                          <a
                            href={project.external}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-action-btn primary"
                          >
                            <ExternalIcon />
                            <span>{project.externalLabel}</span>
                          </a>
                        )}
                      </div>
                    </div>

                  </div>

                </div>
              </article>
            </ScrollReveal>
          );
        })}
      </div>

      {/* ── Expand / Collapse Toggle ── */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "2.5rem" }}>
        <button
          type="button"
          onClick={handleToggle}
          className="expand-toggle-btn"
          aria-expanded={expanded}
        >
          <span>
            {expanded
              ? "Show fewer projects ↑"
              : `Show all featured projects (${PROJECTS.length - INITIAL_PROJECT_COUNT} more) ↓`}
          </span>
        </button>
      </div>
    </SectionLabel>
  );
}
