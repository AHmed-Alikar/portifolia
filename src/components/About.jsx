import { ABOUT } from "../data/profile.js";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="shell">
        <div className="section-head">
          <span className="section-no">01</span>
          <h2>About</h2>
        </div>
        <div className="about-grid">
          <div className="about-copy">
            {ABOUT.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <dl className="focus-list">
            {ABOUT.focus.map((f) => (
              <div className="focus-row" key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
