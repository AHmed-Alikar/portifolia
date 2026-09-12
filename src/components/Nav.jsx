import { PROFILE } from "../data/profile.js";

const LINKS = [
  { idx: "01", label: "Work", href: "#work" },
  { idx: "02", label: "About", href: "#about" },
  { idx: "03", label: "Contact", href: "#contact" },
];

export default function Nav() {
  return (
    <header className="site-nav">
      <div className="shell">
        <a className="mark" href="#main">
          {PROFILE.name}
        </a>
        <nav aria-label="Primary">
          <ul className="links">
            {LINKS.map((link) => (
              <li key={link.idx}>
                <a href={link.href}>
                  <span className="idx">{link.idx}</span>
                  <span className="label">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
