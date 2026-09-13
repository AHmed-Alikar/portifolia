import { ENGINEERING } from "../data/profile.js";

function Card({ g }) {
  return (
    <div className="eng-card">
      <div className="eng-card-head">
        <h3>{g.title}</h3>
      </div>
      <p className="eng-blurb">{g.blurb}</p>
      <ul className="eng-tags">
        {g.stack.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Engineering() {
  const core = ENGINEERING.filter((g) => g.tier === "core");
  const expanding = ENGINEERING.filter((g) => g.tier === "expanding");

  return (
    <section className="section" id="engineering">
      <div className="shell">
        <div className="section-head">
          <span className="section-no">02</span>
          <h2>Engineering</h2>
        </div>
        <p className="section-dek">
          What I actually build with, first — and what I&rsquo;m
          deliberately expanding into, kept separate rather than blended
          in as if it were the same thing.
        </p>

        <div className="eng-grid eng-grid-core">
          {core.map((g) => (
            <Card g={g} key={g.id} />
          ))}
        </div>

        <div className="eng-expanding">
          <span className="eng-expanding-label">Expanding into</span>
          <div className="eng-grid eng-grid-expanding">
            {expanding.map((g) => (
              <Card g={g} key={g.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
