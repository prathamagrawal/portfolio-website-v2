import SectionLabel from "./SectionLabel";

export default function Contact() {
  return (
    <SectionLabel label="contact" id="contact">
      <div className="max-w-[600px]">
        <h2 className="font-sans text-[32px] font-bold text-primary mt-8">
          Let&apos;s talk systems.
        </h2>
        
        <p className="font-sans text-[16px] text-secondary mt-4 max-w-[480px] leading-relaxed">
          I&apos;m open to infra, data engineering, and ML platform roles.
          Prefer async — email first, calls by arrangement.
        </p>

        <div className="mt-8">
          <a 
            href="mailto:prathamagrawal1205@gmail.com"
            className="font-mono text-[15px] text-accent hover:underline"
          >
            prathamagrawal1205@gmail.com
          </a>
        </div>

        <hr className="border-t border-border mt-10 mb-6" />

        <div className="flex flex-wrap flex-row gap-6 font-mono text-[13px]">
          <a href="https://github.com/prathamagrawal" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/pratham-manish-agrawal" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent transition-colors">
            LinkedIn
          </a>
          <a href="https://twitter.com/fearsomejockey" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent transition-colors">
            Twitter
          </a>
          <a href="https://www.kaggle.com/fearsomejockey" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent transition-colors">
            Kaggle
          </a>
          <a href="https://www.instagram.com/prathammanishagrawal" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent transition-colors">
            Instagram
          </a>
        </div>
      </div>
    </SectionLabel>
  );
}
