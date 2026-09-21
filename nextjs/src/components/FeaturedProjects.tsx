import Image from "next/image";
import SectionLabel from "./SectionLabel";

const projects = [
  {
    title: "Mirror-DB",
    cover: "/mirror-db-architecture.jpeg",
    github: "https://github.com/prathamagrawal/mirror-db",
    external: "https://github.com/users/prathamagrawal/packages/container/package/mirror-db%2Fmirror-db",
    tech: ["Kubernetes", "PostgreSQL", "PgBouncer", "Helm Chart"],
    description: "Designed a high-availability PostgreSQL cluster on Kubernetes to eliminate production downtime during primary failover. Achieved sub-60s automatic failover with a 4-node replication topology and service-driven role switching. Reduced connection overhead by 70–90% using PgBouncer pooling; supports read/write splitting for zero-downtime operations. Implemented dynamic service discovery, automated pod labeling, and a full monitoring stack for health, replication lag, and failover visibility."
  },
  {
    title: "LogHive",
    cover: "/loghive.png",
    github: "https://github.com/prathamagrawal/loghive",
    external: "https://pypi.org/project/loghive/",
    tech: ["Python", "RabbitMQ", "Redis", "PostgreSQL", "Docker"],
    description: "A log archival pipeline for high-volume systems with compression, indexed retrieval, and controlled back-pressure handling. Benchmarked for high-throughput ingestion while maintaining 99.99% write durability on PostgreSQL. Adaptive RabbitMQ consumer scaling and Redis-based producer rate limiting prevent queue saturation during traffic spikes."
  },
  {
    title: "Clusterbase",
    cover: "/Clusterbase.png",
    github: "https://github.com/prathamagrawal/clusterbase",
    external: "https://www.github.com/prathamagrawal/clusterbase",
    tech: ["Python", "Next.js", "Google Firebase"],
    description: "A real-time clustering system configurable across any number and type of parameters and clustering rules. Values are dynamically provided by the user; clustering runs live. Includes a web console for adding new clusters and querying all active cluster state."
  },
  {
    title: "Crypto2csv",
    cover: "/Crypto2csv.png",
    github: "https://github.com/prathamagrawal/crypto2csv",
    external: "https://www.github.com/prathamagrawal/crypto2csv",
    tech: ["Python", "CLI", "API"],
    description: "A Python command-line tool for retrieving cryptocurrency data as structured CSV. Covers 80+ parameters across a wide range of cryptocurrencies, with configurable fetch options: intervals, coin selection, date ranges. Built for pipelines — pipe directly into downstream analysis tools."
  },
  {
    title: "Sportlight",
    cover: "/demo.png",
    github: "https://www.github.com/prathamagrawal/Sportlight",
    external: "https://www.knowunknowns.co/",
    tech: ["React", "Python", "NLTK", "NLP", "JavaScript"],
    description: "Highlights extraction for sports matches using ML and public APIs, reducing effective match watch time by 90%. NLTK model using WordNet achieves 93% classification accuracy."
  }
];

export default function FeaturedProjects() {
  return (
    <SectionLabel label="featured projects" id="projects">
      <div className="flex flex-col">
        {projects.map((project, index) => {
          const isImageLeft = index % 2 === 0;

          return (
            <div key={project.title} className="flex flex-col mb-16 last:mb-0">
              <div className={`flex flex-col md:flex-row items-center w-full ${isImageLeft ? "" : "md:flex-row-reverse"}`}>
                
                {/* Image Side */}
                <div className="w-full md:w-[45%] mb-8 md:mb-0">
                  <a href={project.external} target="_blank" rel="noopener noreferrer" className="block relative w-full h-[250px] md:h-[300px] border border-border rounded overflow-hidden group">
                    <Image 
                      src={project.cover} 
                      alt={project.title} 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </a>
                </div>

                {/* Content Side */}
                <div className={`w-full md:w-[55%] flex flex-col ${isImageLeft ? "md:pl-12" : "md:pr-12"}`}>
                  <p className="font-mono text-[11px] text-secondary mb-2">
                    featured project
                  </p>
                  <a 
                    href={project.external} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-sans text-[24px] font-bold text-primary hover:text-accent transition-colors mb-4 inline-block"
                  >
                    {project.title}
                  </a>
                  
                  <div className="bg-surface border border-border rounded p-5 relative z-10 font-sans text-[14px] text-secondary leading-relaxed">
                    {project.description}
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map(t => (
                      <span key={t} className="font-mono text-[11px] text-secondary bg-[rgba(56,139,253,0.12)] px-2 py-1 rounded-[2px]">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-row gap-4 mt-4">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="font-mono text-[12px] text-secondary hover:text-accent transition-colors flex items-center gap-1">
                        GitHub ↗
                      </a>
                    )}
                    {project.external && (
                      <a href={project.external} target="_blank" rel="noopener noreferrer" className="font-mono text-[12px] text-secondary hover:text-accent transition-colors flex items-center gap-1">
                        Live ↗
                      </a>
                    )}
                  </div>
                </div>

              </div>
              
              {index !== projects.length - 1 && (
                <hr className="w-full border-t border-border my-16" />
              )}
            </div>
          );
        })}
      </div>
    </SectionLabel>
  );
}
