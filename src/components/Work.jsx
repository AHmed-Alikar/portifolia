import { PROJECTS } from "../data/profile.js";

function Featured({ project }) {
  return (
    <article className="project-feature">
      <div className="project-feature-head">
        <div>
          <span className="project-kicker">Featured · {project.category}</span>
          <h3>{project.name}</h3>
        </div>
        <span className="status-pill">{project.status}</span>
      </div>
      <p className="project-oneliner">{project.oneLiner}</p>

      <div className="project-body">
        <div className="project-main">
          <div className="project-field">
            <h4>The problem</h4>
            <p>{project.problem}</p>
          </div>
          <div className="project-field">
            <h4>Who it&rsquo;s for</h4>
            <p>{project.whoFor}</p>
          </div>
          <div className="project-field">
            <h4>What&rsquo;s built</h4>
            <ul>
              {project.builtSoFar.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
          <div className="project-field">
            <h4>Decisions that mattered</h4>
            <dl className="decision-list">
              {project.decisions.map((d) => (
                <div key={d.title}>
                  <dt>{d.title}</dt>
                  <dd>{d.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <aside className="project-side">
          <div className="not-yet">
            <span className="not-yet-label">Not built yet</span>
            <ul>
              {project.notYet.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
          <ul className="tag-row">
            {project.stack.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <a
            className="btn btn-primary btn-block"
            href={project.href}
            target="_blank"
            rel="noreferrer"
          >
            View source on GitHub ↗
          </a>
        </aside>
      </div>
    </article>
  );
}

export default function Work() {
  const featured = PROJECTS.find((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <section className="section" id="work">
      <div className="shell">
        <div className="section-head">
          <span className="section-no">03</span>
          <h2>Selected work</h2>
        </div>
        <p className="section-dek">
          One project, done properly, beats five half-finished ones. Real
          projects land here as they ship — nothing is added before it&rsquo;s
          actually built.
        </p>

        {featured && <Featured project={featured} />}

        <div className="project-index">
          {rest.map((p) => (
            <a className="project-index-row" href={p.href} key={p.name}>
              <span className="n">{p.n}</span>
              <span className="name">{p.name}</span>
              <span className="desc">{p.oneLiner}</span>
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </a>
          ))}
          <div className="project-index-row is-placeholder">
            <span className="n">{String(PROJECTS.length + 1).padStart(2, "0")}</span>
            <span className="name">More in progress</span>
            <span className="desc">
              Five new, original projects are planned next — each one shipped
              completely before the next starts.
            </span>
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
}
