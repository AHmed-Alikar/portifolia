import { FACTS } from "../data/profile.js";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="shell">
        <div className="section-head">
          <span className="num">02</span>
          <h2>About</h2>
        </div>
        <div className="about-grid">
          {/*
            Reserved slot for a profile photo: public/images/profile.jpg.
            Not wired in yet — no file exists in the repo to point at, and
            an <img> referencing a missing asset would just ship a broken
            image. Once the file is added, this renders it hard-edged
            (no border-radius, no filter) inside the grid, matching the
            rest of the Raster identity.
          */}
          <p className="about-statement">
            I learn engineering by building things that have to actually
            work — a real database, real authentication, real failure
            modes — instead of following tutorials to the finish line and
            stopping there.
          </p>
          <div className="facts">
            {FACTS.map((fact) => (
              <div className="fact" key={fact.n}>
                <span className="n">{fact.n}</span>
                <span className="label">{fact.label}</span>
                <span className="value">{fact.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
