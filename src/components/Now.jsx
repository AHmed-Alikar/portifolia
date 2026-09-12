import { NOW } from "../data/profile.js";

export default function Now() {
  return (
    <section className="section" aria-labelledby="now-heading">
      <div className="shell">
        <div className="section-head">
          <span className="num">03</span>
          <h2 id="now-heading">Now</h2>
        </div>
        <ul className="now-list">
          {NOW.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
