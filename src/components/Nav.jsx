import { useEffect, useState } from "react";
import { PROFILE } from "../data/profile.js";
import ThemeToggle from "./ThemeToggle.jsx";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Engineering", href: "#engineering" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-nav">
      <div className="shell nav-inner">
        <a className="mark" href="#top">
          {PROFILE.name}
        </a>
        <nav className="nav-links" aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <ThemeToggle />
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span className="nav-toggle-bars" aria-hidden="true"></span>
          </button>
        </div>
      </div>
      <nav
        id="mobile-nav"
        className={`mobile-nav ${open ? "is-open" : ""}`}
        aria-label="Mobile"
        hidden={!open}
      >
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
