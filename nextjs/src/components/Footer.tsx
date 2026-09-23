const STACK = ["Next.js", "Tailwind CSS v4"];

export default function Footer() {
  return (
    <footer className="footer-bar">
      <div className="footer-inner">

        {/* Left: credit */}
        <p className="footer-credit">
          Designed &amp; built by{" "}
          <a
            href="https://github.com/prathamagrawal"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pratham Agrawal
          </a>
          {" "}· © {new Date().getFullYear()}
        </p>

        {/* Right: stack */}
        <div className="footer-stack">
          {STACK.map((s, i) => (
            <span key={s} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              {i > 0 && <span className="footer-stack-sep" aria-hidden="true">·</span>}
              {s}
            </span>
          ))}
        </div>

      </div>
    </footer>
  );
}
