import SectionLabel from "./SectionLabel";

const publications = [
  {
    title: "Artificial Intelligence at Healthcare Industry",
    external: "https://www.researchgate.net/publication/348633701_ARTIFICIAL_INTELLIGENCE_AT_HEALTHCARE_INDUSTRY",
    year: "2020",
    desc: "Analysis of AI-based technology in the medical sector — comparing past, present, and future applications. Published on ResearchGate."
  },
  {
    title: "Computational Approaches for Prediction of Cardiovascular Risks",
    year: "2022",
    desc: "Two-part research: (a) cardiovascular risk prediction using ML/neural networks; (b) health classification from fitness tracker data via API feed."
  },
  {
    title: "The Quest for a Martian Life",
    external: "https://medium.com/iet-vit/the-quest-for-a-martian-life-666efaf94d23",
    year: "2021",
    desc: "Comparative analysis of perspectives on Mars terraforming — whether it should be pursued or whether focus should remain on Earth."
  }
];

export default function Publications() {
  return (
    <SectionLabel label="publications">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {publications.map((pub, index) => (
          <div 
            key={index} 
            className="flex flex-col relative bg-surface border border-border rounded p-5 hover:border-accent transition-colors duration-150"
          >
            <div className="absolute top-5 right-5 font-mono text-[11px] text-secondary">
              {pub.year}
            </div>
            
            <h3 className="font-sans text-[15px] font-bold text-primary pr-10">
              {pub.title}
            </h3>
            
            <p className="font-sans text-[13px] text-secondary mt-2 leading-relaxed">
              {pub.desc}
            </p>
            
            {pub.external && (
              <div className="flex flex-row gap-3 mt-auto pt-4">
                <a href={pub.external} target="_blank" rel="noopener noreferrer" className="font-mono text-[11px] text-secondary hover:text-accent transition-colors flex items-center gap-1">
                  Read ↗
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </SectionLabel>
  );
}
