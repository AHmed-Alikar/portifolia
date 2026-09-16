import { PROFILE } from "../data/profile.js";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="shell hero-grid">
        <div className="hero-main">
          <span className="eyebrow">Software Engineer</span>
          <h1>
            {PROFILE.name}
            <span className="hero-role">builds real software.</span>
          </h1>
          <p className="hero-positioning">{PROFILE.positioning}</p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="#work">
              View my work
            </a>
            <a
              className="btn btn-ghost"
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </div>
        <div className="hero-portrait">
          <img
            src={`${import.meta.env.BASE_URL}images/profile.jpg`}
            alt="Ahmed Alikar"
            width="360"
            height="360"
          />
        </div>
      </div>
    </section>
  );
}
