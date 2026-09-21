import { ReactNode } from "react";
import SectionLabel from "./SectionLabel";

const JOBS: {
  company: string;
  url: string;
  title: string;
  range: string;
  location: string;
  bullets: ReactNode[];
}[] = [
  {
    company: "Affinsys AI",
    url: "https://affinsys.com/",
    title: "Software Engineer",
    range: "Jan 2024 – Present",
    location: "Bangalore, India",
    bullets: [
      <>
        Designed and shipped <strong className="text-primary font-medium">DBOps</strong> — an
        LLM-driven ETL pipeline generator converting natural-language requests into
        executable workflows via Claude (Anthropic API), structured prompt chaining, and
        iterative self-correction. Pipeline authoring: hours →{" "}
        <span className="metric">under 2 minutes</span>.
      </>,
      <>
        Architected <strong className="text-primary font-medium">Datalens</strong>, a
        self-serve analytics platform translating NL questions to SQL with
        metadata-driven query construction, SQL sanitization, and a{" "}
        <span className="metric">15+</span> chart-type catalog. Dashboard creation time
        cut <span className="metric">90%</span>; non-technical stakeholders now build
        reports independently.
      </>,
      <>
        Led the multi-tenant <strong className="text-primary font-medium">Analytics</strong>{" "}
        service powering <span className="metric">20+</span> dashboards and{" "}
        <span className="metric">200+</span> charts. Materialized SQL views cut database
        load by <span className="metric">40%</span> and API response time from{" "}
        <span className="metric">800ms → 480ms</span>.
      </>,
      <>
        Built the <strong className="text-primary font-medium">Analytics Scheduler</strong>{" "}
        — automates recurring delivery of <span className="metric">100+</span> reports via
        email, saving <span className="metric">~15 hrs/wk</span> of engineering effort.
      </>,
      <>
        Implemented the <strong className="text-primary font-medium">Archival</strong>{" "}
        service: guaranteed data consistency across{" "}
        <span className="metric">10+</span> services including foreign-key resolution,
        failover strategy, purge workflows, and MinIO → AWS S3 migration.
      </>,
      <>
        Built <strong className="text-primary font-medium">Eventlogger</strong>: a
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
        Led a <span className="metric">200+</span> member technical society; coordinated
        events generating <span className="metric">25%</span> net chapter profit.
      </>,
      "Mentored members across technical and management tracks toward outlined objectives.",
    ],
  },
];

export default function Experience() {
  return (
    <SectionLabel label="experience" id="jobs">
      <div className="relative">
        {/* Vertical rail */}
        <div
          className="absolute top-3 bottom-0 left-0 w-px bg-border"
          aria-hidden="true"
        />

        <div className="flex flex-col gap-12">
          {JOBS.map((job) => (
            <div key={job.company} className="relative pl-7 md:pl-9">
              {/* Rail dot */}
              <span
                className="
                  absolute left-[-3.5px] top-[11px]
                  w-[7px] h-[7px] rounded-full
                  bg-accent ring-2 ring-bg
                "
                aria-hidden="true"
              />

              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-4">
                <a
                  href={job.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    font-sans text-[17px] font-semibold text-primary
                    hover:text-accent transition-colors duration-120
                  "
                >
                  {job.company}
                </a>
                <div className="font-mono text-[11px] text-muted flex flex-wrap gap-x-3 gap-y-0.5 shrink-0">
                  <span>{job.title}</span>
                  <span className="text-border select-none">·</span>
                  <span>{job.range}</span>
                  <span className="text-border select-none">·</span>
                  <span>{job.location}</span>
                </div>
              </div>

              {/* Bullet list */}
              <ul className="space-y-2.5 pl-0">
                {job.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="
                      relative pl-4 text-[14px] text-secondary leading-[1.75]
                      before:content-['–'] before:absolute before:left-0
                      before:text-border-muted before:select-none
                    "
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </SectionLabel>
  );
}
