import SectionLabel from "./SectionLabel";

const projects = [
  {
    title: "IPL Analysis",
    github: "https://github.com/prathamagrawal/IPL-Analysis",
    external: "https://www.kaggle.com/datasets/fearsomejockey/ipl-batting-and-bowling-dataset-20182022",
    tech: ["Python", "Jupyter"],
    desc: "Data analysis and visualization toolset for answering complex analytical questions about IPL batting and bowling data (2018–2022)."
  },
  {
    title: "Olympics Data Visualization",
    external: "https://github.com/prathamagrawal",
    tech: ["Python", "R", "Plotly", "Dash", "Flask"],
    desc: "Dataset of 270,000+ rows covering 124 years of Olympic athlete history. Web app built with Dash and Plotly to surface trends and outliers across the full timeline."
  },
  {
    title: "Image Colorisation",
    github: "https://github.com/prathamagrawal/Image-colorisation",
    tech: ["Python", "Flask", "Jupyter"],
    desc: "Deep neural network tool for colorizing and enhancing grayscale images."
  },
  {
    title: "LeetCode Solutions",
    github: "https://github.com/prathamagrawal/Leetcode",
    external: "https://www.prathamagrawal.me/leetcode",
    tech: ["C++", "Python", "Java"],
    desc: "Curated solutions repository covering a range of algorithmic and data structure problems."
  }
];

export default function OtherProjects() {
  return (
    <SectionLabel label="other projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="flex flex-col bg-surface border border-border rounded p-5 hover:border-accent transition-colors duration-150"
          >
            <h3 className="font-sans text-[15px] font-bold text-primary">
              {project.title}
            </h3>
            <p className="font-sans text-[13px] text-secondary mt-2 leading-relaxed">
              {project.desc}
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tech.map(t => (
                <span key={t} className="font-mono text-[11px] text-secondary bg-[rgba(56,139,253,0.12)] px-2 py-1 rounded-[2px]">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex flex-row gap-3 mt-auto pt-4">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="font-mono text-[11px] text-secondary hover:text-accent transition-colors flex items-center gap-1">
                  GitHub ↗
                </a>
              )}
              {project.external && (
                <a href={project.external} target="_blank" rel="noopener noreferrer" className="font-mono text-[11px] text-secondary hover:text-accent transition-colors flex items-center gap-1">
                  ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionLabel>
  );
}
