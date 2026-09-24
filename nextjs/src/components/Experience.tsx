"use client";

import { useState, ReactNode } from "react";
import SectionLabel from "./SectionLabel";
import ScrollReveal from "./ScrollReveal";

const INITIAL_JOB_COUNT = 2;

const JOBS: {
  company: string;
  url: string;
  title: string;
  range: string;
  location: string;
  current?: boolean;
  bullets: ReactNode[];
}[] = [
  {
    company: "Affinsys AI",
    url: "https://affinsys.com/",
    title: "Software Engineer",
    range: "Jan 2024 – Present",
    location: "Bangalore, India",
    current: true,
    bullets: [
      <>
        Designed and shipped <strong style={{ color: "var(--text-primary)", fontWeight: 500 }}>DBOps</strong> — an
        LLM-driven ETL pipeline generator converting natural-language requests into
        executable workflows via Claude (Anthropic API), structured prompt chaining, and
        iterative self-correction. Pipeline authoring: hours →{" "}
        <span className="metric">under 2 minutes</span>.
      </>,
      <>
        Architected <strong style={{ color: "var(--text-primary)", fontWeight: 500 }}>Datalens</strong>, a
        self-serve analytics platform translating NL questions to SQL with
        metadata-driven query construction, SQL sanitization, and a{" "}
        <span className="metric">15+</span> chart-type catalog. Dashboard creation time
        cut <span className="metric">90%</span>; non-technical stakeholders now build
        reports independently.
      </>,
      <>
        Led the multi-tenant <strong style={{ color: "var(--text-primary)", fontWeight: 500 }}>Analytics</strong>{" "}
        service powering <span className="metric">20+</span> dashboards and{" "}
        <span className="metric">200+</span> charts. Materialized SQL views cut database
        load by <span className="metric">40%</span> and API response time from{" "}
        <span className="metric">800ms → 480ms</span>.
      </>,
      <>
        Built the <strong style={{ color: "var(--text-primary)", fontWeight: 500 }}>Analytics Scheduler</strong>{" "}
        — automates recurring delivery of <span className="metric">100+</span> reports
        via email, saving <span className="metric">~15 hrs/wk</span> of engineering effort.
      </>,
      <>
        Implemented the <strong style={{ color: "var(--text-primary)", fontWeight: 500 }}>Archival</strong>{" "}
        service: guaranteed data consistency across{" "}
        <span className="metric">10+</span> services including foreign-key resolution,
        failover strategy, purge workflows, and MinIO → AWS S3 migration.
      </>,
      <>
        Built <strong style={{ color: "var(--text-primary)", fontWeight: 500 }}>Eventlogger</strong>: a
        high-throughput event-driven warehouse ingesting from{" "}
        <span className="metric">10+</span> services via AMQP and NATS into{" "}
        <span className="metric">40+</span> structured tables at{" "}
        <span className="metric">sub-second</span> latency.
      </>,
    ],
  },
  {
    company: "CME Group",
    url: "http://cmegroup.com/",
    title: "SDE Intern",
    range: "May 2023 – Nov 2023",
    location: "Bangalore & Remote, India",
    bullets: [
      <>
        Re-engineered report generation and scheduled delivery pipelines for a
        high-frequency trading data platform. Throughput improved{" "}
        <span className="metric">30%</span> by refactoring legacy batch processing logic.
      </>,
      <>
        Built internal data extraction and transformation tooling, reducing pipeline
        latency by <span className="metric">40%</span> and enabling faster downstream
        reporting for trading operations teams.
      </>,
    ],
  },
  {
    company: "Hacklabs Solutions",
    url: "https://www.hacklab.solutions/",
    title: "AI Intern",
    range: "Aug 2022 – Nov 2022",
    location: "Remote, India",
    bullets: [
      "Assisted development of Docker container for core image segmentation model migration from YOLOv5 to YOLOv7.",
      "Worked on a leakage detection algorithm using image segmentation and processing.",
    ],
  },
  {
    company: "Samsung Prism",
    url: "https://www.samsungprism.com/",
    title: "Research Intern",
    range: "Dec 2022",
    location: "Remote, India",
    bullets: [
      "Investigated and implemented Boolean Expression Tree (BE-Tree) for AD platform targeting.",
      "Reduced boolean expression evaluation latency through algorithmic optimization.",
    ],
  },
  {
    company: "IET-VIT",
    url: "https://www.iet-vit.tech/",
    title: "Chairperson",
    range: "Jan 2021 – Dec 2021",
    location: "Vellore, India",
    bullets: [
      <>
        Led a <span className="metric">200+</span> member technical society;
        coordinated events generating <span className="metric">25%</span> net chapter profit.
      </>,
      "Mentored members across technical and management tracks toward outlined objectives.",
    ],
  },
];

export default function Experience() {
  const [expanded, setExpanded] = useState(false);
  const visibleJobs = expanded ? JOBS : JOBS.slice(0, INITIAL_JOB_COUNT);

  const handleToggle = () => {
    if (expanded) {
      setExpanded(false);
      document.getElementById("jobs")?.scrollIntoView({ behavior: "smooth" });
    } else {
      setExpanded(true);
    }
  };

  return (
    <SectionLabel label="experience" id="jobs">
      {/*
       * timeline-wrapper: relative container with left padding for the rail.
       * timeline-rail: the 1px vertical line (gradient accent→border top).
       * timeline-dot / timeline-dot-dim: the node on the rail.
       * All structural classes defined in globals.css — no Tailwind arbitrary values.
       */}
      <div className="timeline-wrapper">
        <div className="timeline-rail" aria-hidden="true" />

        {visibleJobs.map((job, idx) => (
          <ScrollReveal key={job.company} delay={idx * 60}>
            <div className="timeline-entry">
              {/* Node dot on the rail */}
              <span
                className={job.current ? "timeline-dot" : "timeline-dot-dim"}
                aria-hidden="true"
              />

              {/* ── Header row ── */}
              <div className="timeline-header">
                <a
                  href={job.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="timeline-company"
                >
                  {job.company}
                  {job.current && (
                    <span
                      style={{
                        display: "inline-block",
                        marginLeft: "8px",
                        fontFamily: "var(--font-mono)",
                        fontSize: "10px",
                        color: "var(--accent)",
                        background: "var(--accent-dim)",
                        padding: "1px 6px",
                        borderRadius: "2px",
                        verticalAlign: "middle",
                        fontWeight: 400,
                        letterSpacing: "0.06em",
                      }}
                    >
                      current
                    </span>
                  )}
                </a>

                <div className="timeline-meta">
                  <span>{job.title}</span>
                  <span className="timeline-meta-sep">·</span>
                  <span>{job.range}</span>
                  <span className="timeline-meta-sep">·</span>
                  <span>{job.location}</span>
                </div>
              </div>

              {/* ── Bullet list ── */}
              <ul className="timeline-bullets">
                {job.bullets.map((b, i) => (
                  <li key={i} className="timeline-bullet">
                    {/* span wrapper is critical: makes the ReactNode a single flex item.
                        Without it, JSX fragments expand into multiple DOM text/element
                        nodes each becoming a separate flex column. */}
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        ))}

        {/* ── Expand / Collapse Toggle ── */}
        <div style={{ marginTop: "1rem" }}>
          <button
            type="button"
            onClick={handleToggle}
            className="expand-toggle-btn"
            aria-expanded={expanded}
          >
            <span>
              {expanded
                ? "Show less experience ↑"
                : `Show earlier roles (${JOBS.length - INITIAL_JOB_COUNT} more) ↓`}
            </span>
          </button>
        </div>
      </div>
    </SectionLabel>
  );
}
