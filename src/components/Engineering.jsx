import { ENGINEERING } from "../data/profile.js";

export default function Engineering() {
  return (
    <section className="section" id="engineering">
      <div className="shell">
        <div className="section-head">
          <span className="section-no">02</span>
          <h2>Engineering</h2>
        </div>
        <p className="section-dek">
          Grouped by area, not flattened into one badge wall. Within a
          group, tools are listed roughly in the order I actually reach
          for them.
        </p>
        <div className="eng-grid">
          {ENGINEERING.map((g) => (
            <div className="eng-card" key={g.id}>
              <div className="eng-card-head">
                <h3>{g.title}</h3>
                {g.note === "learning" && (
                  <span className="pill pill-learning">Learning</span>
                )}
              </div>
              <p className="eng-blurb">{g.blurb}</p>
              <ul className="eng-tags">
                {g.stack.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
