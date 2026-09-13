import { PROFILE } from "../data/profile.js";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Engineering", href: "#engineering" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div className="footer-top">
          <div className="footer-identity">
            <h2>{PROFILE.name}</h2>
            <p>{PROFILE.role}</p>
          </div>
          <a className="footer-cta" href={`mailto:${PROFILE.email}`}>
            Start a conversation ↗
          </a>
        </div>

        <div className="footer-links">
          <nav aria-label="Footer">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>
          <a
            className="footer-github"
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </div>

        <div className="footer-meta">
          <span>
            © {new Date().getFullYear()} {PROFILE.name}
          </span>
          <span>Built with React + Vite, deployed on GitHub Pages</span>
        </div>
      </div>
    </footer>
  );
}
