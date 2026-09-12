import { STACK } from "../data/profile.js";

const GROUPS = [
  { key: "core", label: "Daily driver" },
  { key: "working", label: "Comfortable with" },
  { key: "learning", label: "Actively learning" },
];

export default function Stack() {
  return (
    <section className="section" aria-labelledby="stack-heading">
      <div className="shell">
        <div className="section-head">
          <span className="num">—</span>
          <h2 id="stack-heading">Stack</h2>
        </div>
        {GROUPS.map((group) => (
          <div className={`stack-group ${group.key}`} key={group.key}>
            <span className="stack-label">{group.label}</span>
            <div className="stack-terms">
              {STACK[group.key].map((term) => (
                <span key={term}>{term}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
