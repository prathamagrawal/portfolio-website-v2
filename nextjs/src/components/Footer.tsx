export default function Footer() {
  return (
    <footer>
      <hr className="border-t border-border" />
      <div className="py-6 flex justify-between items-center font-mono text-[11px] text-secondary">
        <div>Designed & built by Pratham Agrawal</div>
        <div>© {new Date().getFullYear()}</div>
      </div>
    </footer>
  );
}
