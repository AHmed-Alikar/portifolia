import { NOW } from "../data/profile.js";

export default function Now() {
  return (
    <section className="section" id="now">
      <div className="shell">
        <div className="section-head">
          <span className="section-no">04</span>
          <h2>Currently building</h2>
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
