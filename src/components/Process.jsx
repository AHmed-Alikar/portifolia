import { PRINCIPLES } from "../data/profile.js";

export default function Process() {
  return (
    <section className="process-section" id="how-i-work">
      <div className="shell process-grid">
        <div className="process-portrait">
          <img
            src={`${import.meta.env.BASE_URL}images/profile.jpg`}
            alt="Ahmed Alikar at work"
            width="480"
            height="480"
            loading="lazy"
          />
        </div>
        <div className="process-copy">
          <div className="section-head">
            <span className="section-no">04</span>
            <h2>How I work</h2>
          </div>
          <ol className="principles-list">
            {PRINCIPLES.map((p) => (
              <li key={p.n}>
                <span className="principle-n">{p.n}</span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
