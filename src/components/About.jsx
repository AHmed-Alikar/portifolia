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
          <div className="about-left">
            <img
              className="about-photo"
              src={`${import.meta.env.BASE_URL}images/profile.jpg`}
              alt="Ahmed Alikar"
              width="220"
              height="220"
            />
            <p className="about-statement">
              I learn engineering by building things that have to actually
              work — a real database, real authentication, real failure
              modes — instead of following tutorials to the finish line and
              stopping there.
            </p>
          </div>
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
