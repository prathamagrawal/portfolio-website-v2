import Image from "next/image";
import SectionLabel from "./SectionLabel";
import ScrollReveal from "./ScrollReveal";

const SKILL_GROUPS = [
  {
    label: "languages & databases",
    skills: ["Python", "SQL", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    label: "infrastructure & orchestration",
    skills: ["Kubernetes", "Docker", "Helm", "Apache Airflow", "GitHub Actions"],
  },
  {
    label: "messaging & streaming",
    skills: ["RabbitMQ", "NATS", "Apache Kafka", "Apache Spark"],
  },
  {
    label: "observability & cloud",
    skills: ["Prometheus", "Grafana", "AWS S3 / EC2"],
  },
  {
    label: "apis & ai",
    skills: ["FastAPI", "Anthropic API", "Next.js"],
  },
];

export default function About() {
  return (
    <SectionLabel label="about" id="about">
      <div className="about-grid">

        {/* ── Prose + Skills ───────────────────────────────── */}
        <ScrollReveal direction="left" distance={24} duration={600} style={{ width: "100%" }}>
          <div className="about-text">

            <div className="about-prose">
              <p>
                I build the infrastructure that makes data move. Not{" "}
                <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>&ldquo;full-stack&rdquo;</span>
                {" "}— specifically the layer between raw events and actionable insight:
                message queues, replication topologies, distributed caches, event-driven
                warehouses, and the orchestration glue that holds them together under load.
              </p>
              <p>
                At Affinsys AI I&apos;ve shipped an NLQ-to-SQL analytics engine that cut
                dashboard creation time by{" "}
                <span className="metric">90%</span>, a Kubernetes-hosted PostgreSQL cluster
                with <span className="metric">sub-60s</span> automatic failover, and an
                event-driven warehouse ingesting from{" "}
                <span className="metric">10+</span> services at{" "}
                <span className="metric">sub-second</span> latency. The common thread:
                systems that behave predictably when the inputs are anything but.
              </p>
              <p>
                I care about observable systems — the kind where a 3am alert tells you
                exactly what broke, why, and what to do next. That means structured
                logging, metric discipline, and architecture that makes failure modes
                explicit. If you want to talk distributed systems, data pipelines, or
                LLM-powered automation, I&apos;m interested.
              </p>
            </div>

            {/* Skills — grouped by domain */}
            <div style={{ marginTop: "2.5rem" }}>
              {SKILL_GROUPS.map((group) => (
                <div key={group.label}>
                  <p className="skills-group-label">{group.label}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "4px" }}>
                    {group.skills.map((s) => (
                      <span key={s} className="tag">{s}</span>
                    ))}
                  </div>
                </div>
              ))}

              {/* Verified Cloud Certification Callout */}
              <div style={{ marginTop: "1.75rem", paddingTop: "1.25rem", borderTop: "1px solid var(--border-muted)" }}>
                <p className="skills-group-label" style={{ marginBottom: "8px" }}>verified certification</p>
                <a
                  href="#certifications"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "6px 12px",
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "4px",
                    textDecoration: "none",
                    transition: "all var(--transition-fast)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent)";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <span
                    style={{
                      width: "7px",
                      height: "7px",
                      borderRadius: "50%",
                      backgroundColor: "#3fb950",
                      boxShadow: "0 0 8px #3fb950",
                    }}
                    aria-hidden="true"
                  />
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "11.5px", color: "var(--text-primary)", fontWeight: 500 }}>
                    AWS Certified Data Engineer – Associate
                  </span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--metric)" }}>
                    (DEA-C01) ↓
                  </span>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ── Photo ────────────────────────────────────────── */}
        <ScrollReveal direction="right" distance={24} duration={600} delay={120} style={{ width: "100%" }}>
          <div className="about-photo">
            <div className="about-photo-wrap">
              <Image
                src="/photo.jpg"
                alt="Pratham Agrawal"
                width={500}
                height={500}
                quality={100}
                style={{
                  width: "100%",
                  height: "auto",
                  aspectRatio: "1/1",
                  objectFit: "cover",
                  objectPosition: "top center",
                  borderRadius: "6px",
                  display: "block",
                }}
                priority
              />
            </div>
          </div>
        </ScrollReveal>

      </div>
    </SectionLabel>
  );
}
