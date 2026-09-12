import { PROFILE } from "../data/profile.js";

export default function Hero() {
  return (
    <section className="hero">
      <div className="shell">
        <span className="eyebrow">Software engineering, in public</span>
        <h1>
          {PROFILE.name.split(" ")[0].toUpperCase()}
          <br />
          <span className="role">{PROFILE.role.toUpperCase()}</span>
        </h1>
        <p className="statement">{PROFILE.statement}</p>
        <div className="rule" aria-hidden="true" />
      </div>
    </section>
  );
}
