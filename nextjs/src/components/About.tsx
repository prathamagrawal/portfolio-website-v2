import Image from "next/image";
import SectionLabel from "./SectionLabel";

export default function About() {
  const skills = [
    "Python", "PostgreSQL", "Kubernetes",
    "RabbitMQ / NATS", "Redis", "Apache Kafka",
    "Docker", "Helm", "Prometheus / Grafana",
    "Apache Airflow", "Apache Spark", "AWS (S3, EC2)",
    "SQL", "MongoDB", "GitHub Actions",
    "Anthropic API / OpenAI", "FastAPI", "Next.js"
  ];

  return (
    <SectionLabel label="about" id="about">
      <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-16">
        
        {/* Left: Prose + Skills */}
        <div className="flex-[3]">
          <div className="font-sans text-base text-primary space-y-5 leading-relaxed max-w-[680px]">
            <p>
              I build the infrastructure that makes data move. Not &quot;full-stack&quot; — specifically the layer between raw events and actionable insight: message queues, replication topologies, distributed caches, event-driven warehouses, and the orchestration glue that holds them together under load.
            </p>
            <p>
              At Affinsys AI I&apos;ve shipped an NLQ-to-SQL analytics engine that eliminated dashboard creation lag by 90%, a Kubernetes-hosted PostgreSQL cluster with sub-60s automatic failover, and an event-driven warehouse ingesting from 10+ services at sub-second latency. The common thread: systems that behave predictably when the inputs are anything but.
            </p>
            <p>
              I care about observable systems — the kind where a 3am alert tells you exactly what broke, why, and what to do next. That means structured logging, metric discipline, and architecture that makes failure modes explicit. If you want to talk distributed systems, data pipelines, or LLM-powered automation, I&apos;m interested.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {skills.map(skill => (
              <div 
                key={skill} 
                className="font-mono text-[11px] text-secondary bg-[rgba(56,139,253,0.12)] px-2 py-1 rounded-[2px] w-fit"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Photo */}
        <div className="flex-[1] flex justify-center md:justify-start">
          <Image 
            src="/photo.jpg" 
            alt="Pratham Agrawal" 
            width={280} 
            height={280} 
            className="w-[160px] h-[160px] md:w-[280px] md:h-[280px] border border-border rounded object-cover flex-shrink-0"
          />
        </div>

      </div>
    </SectionLabel>
  );
}
