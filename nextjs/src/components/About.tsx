import Image from "next/image";
import SectionLabel from "./SectionLabel";

const SKILLS = [
  "Python",        "PostgreSQL",     "Kubernetes",
  "RabbitMQ",      "NATS",           "Redis",
  "Apache Kafka",  "Docker",         "Helm",
  "Prometheus",    "Grafana",        "Apache Airflow",
  "Apache Spark",  "AWS S3 / EC2",   "GitHub Actions",
  "Anthropic API", "FastAPI",        "Next.js",
];

export default function About() {
  return (
    <SectionLabel label="about" id="about">
      <div className="flex flex-col-reverse md:flex-row gap-12 md:gap-16 lg:gap-20">

        {/* ── Prose + Skills ───────────────────── */}
        <div className="md:flex-[3]">
          <div className="space-y-5 prose-container">
            <p className="text-[15px] leading-[1.8] text-secondary">
              I build the infrastructure that makes data move. Not{" "}
              <span className="text-primary">&ldquo;full-stack&rdquo;</span>
              {" "}— specifically the layer between raw events and actionable
              insight: message queues, replication topologies, distributed
              caches, event-driven warehouses, and the orchestration glue that
              holds them together under load.
            </p>
            <p className="text-[15px] leading-[1.8] text-secondary">
              At Affinsys AI I&apos;ve shipped an NLQ-to-SQL analytics engine that
              eliminated dashboard creation time by{" "}
              <span className="metric">90%</span>, a Kubernetes-hosted
              PostgreSQL cluster with{" "}
              <span className="metric">sub-60s</span> automatic failover, and
              an event-driven warehouse ingesting from{" "}
              <span className="metric">10+</span> services at{" "}
              <span className="metric">sub-second</span> latency. The common
              thread: systems that behave predictably when the inputs are
              anything but.
            </p>
            <p className="text-[15px] leading-[1.8] text-secondary">
              I care about observable systems — the kind where a 3am alert
              tells you exactly what broke, why, and what to do next. That
              means structured logging, metric discipline, and architecture
              that makes failure modes explicit. If you want to talk
              distributed systems, data pipelines, or LLM-powered automation,
              I&apos;m interested.
            </p>
          </div>

          {/* Skills grid */}
          <div className="mt-10 flex flex-wrap gap-2">
            {SKILLS.map((skill) => (
              <span key={skill} className="tag">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* ── Photo ───────────────────────────── */}
        <div className="md:flex-[1] flex justify-start">
          <div className="relative w-[160px] h-[160px] md:w-[220px] md:h-[220px] flex-shrink-0">
            <Image
              src="/photo.jpg"
              alt="Pratham Agrawal"
              fill
              className="object-cover object-top rounded border border-border"
              sizes="(max-width: 768px) 160px, 220px"
              priority
            />
          </div>
        </div>

      </div>
    </SectionLabel>
  );
}
