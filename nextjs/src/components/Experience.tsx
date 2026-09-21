import SectionLabel from "./SectionLabel";

const jobs = [
  {
    company: "Affinsys AI",
    title: "Software Engineer",
    range: "Jan 2024 – Present",
    location: "Bangalore, India",
    url: "https://affinsys.com/",
    bullets: [
      <>Designed and shipped DBOps — an LLM-driven ETL pipeline generator converting natural-language requests into executable workflows via Claude (Anthropic API), structured prompt chaining, and iterative self-correction. Pipeline authoring: hours → <span className="text-metric font-mono">under 2 minutes</span>.</>,
      <>Architected Datalens, a self-serve analytics platform translating NL questions to SQL with metadata-driven query construction, SQL sanitization, and a <span className="text-metric font-mono">15+</span> chart-type catalog. Dashboard creation time cut by <span className="text-metric font-mono">90%</span>; non-technical stakeholders now build reports independently.</>,
      <>Led development of the multi-tenant Analytics service powering <span className="text-metric font-mono">20+</span> dashboards and <span className="text-metric font-mono">200+</span> charts. Introduced materialized SQL views, cutting database load by <span className="text-metric font-mono">40%</span> and average API response time from <span className="text-metric font-mono">800ms</span> → <span className="text-metric font-mono">480ms</span>.</>,
      <>Built the Analytics Scheduler — automates recurring delivery of <span className="text-metric font-mono">100+</span> reports via email, saving <span className="text-metric font-mono">~15</span> engineering hours per week.</>,
      <>Implemented the Archival service: guaranteed data consistency and referential integrity across <span className="text-metric font-mono">10+</span> services, including foreign-key resolution, failover strategy, purge workflows, and MinIO → AWS S3 migration.</>,
      <>Built Eventlogger: high-throughput event-driven warehouse ingesting from <span className="text-metric font-mono">10+</span> services via AMQP and NATS into <span className="text-metric font-mono">40+</span> structured tables. Sub-second ingestion latency. Single source of truth for analytics.</>
    ]
  },
  {
    company: "CME Group",
    title: "SDE Intern",
    range: "May 2023 – Nov 2023",
    location: "Bangalore & Remote, India",
    url: "http://cmegroup.com/",
    bullets: [
      <>Re-engineered report generation and scheduled delivery pipelines for a high-frequency trading data platform. Throughput improved <span className="text-metric font-mono">30%</span> by refactoring legacy batch processing logic.</>,
      <>Built internal data extraction and transformation tooling, reducing pipeline latency by <span className="text-metric font-mono">40%</span> and enabling faster downstream reporting for trading operations teams.</>
    ]
  },
  {
    company: "Hacklabs Solutions",
    title: "AI Intern",
    range: "Aug 2022 – Nov 2022",
    location: "Remote, India",
    url: "https://www.hacklab.solutions/",
    bullets: [
      <>Assisted development of Docker container for core image segmentation model migration from YOLOv5 to YOLOv7.</>,
      <>Worked on a leakage detection algorithm using image segmentation and processing.</>
    ]
  },
  {
    company: "Samsung Prism",
    title: "Research Intern",
    range: "Dec 2022",
    location: "Remote, India",
    url: "https://www.samsungprism.com/",
    bullets: [
      <>Investigated and implemented Boolean Expression Tree (BE-Tree) for AD platform targeting.</>,
      <>Reduced boolean expression evaluation latency through algorithmic optimization.</>
    ]
  },
  {
    company: "IET-VIT",
    title: "Chairperson",
    range: "Jan 2021 – Dec 2021",
    location: "Vellore, India",
    url: "https://www.iet-vit.tech/",
    bullets: [
      <>Led a <span className="text-metric font-mono">200+</span> member technical society; coordinated events generating <span className="text-metric font-mono">25%</span> net chapter profit.</>,
      <>Mentored members across technical and management tracks toward outlined objectives.</>
    ]
  }
];

export default function Experience() {
  return (
    <SectionLabel label="experience" id="jobs">
      <div className="relative">
        <div className="absolute top-[24px] bottom-0 left-0 w-[1px] bg-border" />
        
        <div className="flex flex-col gap-12">
          {jobs.map((job, index) => (
            <div key={index} className="relative pl-8">
              <div className="absolute left-[-4px] top-[24px] w-2 h-2 rounded-full bg-accent" />
              
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                <a 
                  href={job.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-sans text-[18px] font-bold text-primary hover:text-accent transition-colors"
                >
                  {job.company}
                </a>
                <div className="font-mono text-[12px] text-secondary mt-1 md:mt-0">
                  {job.title} · {job.range} · {job.location}
                </div>
              </div>
              
              <ul className="list-disc pl-4 mt-3 space-y-2 font-sans text-[14px] text-secondary marker:text-border">
                {job.bullets.map((bullet, i) => (
                  <li key={i} className="pl-1 leading-relaxed">
                    {bullet}
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
