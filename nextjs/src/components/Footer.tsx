export default function Footer() {
  return (
    <footer className="mt-4 pb-10">
      <hr className="rule mb-8" />
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="font-mono text-[11px] text-muted">
          Designed &amp; built by{" "}
          <a
            href="https://github.com/prathamagrawal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-accent transition-colors duration-120"
          >
            Pratham Agrawal
          </a>
        </p>
        <p className="font-mono text-[11px] text-muted">
          Next.js · Tailwind CSS · IBM Plex Mono
        </p>
      </div>
    </footer>
  );
}
