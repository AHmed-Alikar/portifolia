import { PROJECTS } from "../data/profile.js";

function ProjectRow({ project }) {
  return (
    <article className="project-row">
      <div className="project-row-top">
        <span className="project-row-n">{project.n}</span>
        <div className="project-row-heading">
          <div className="project-row-title-line">
            <h3>{project.name}</h3>
            <span className="status-pill">{project.status}</span>
          </div>
          <span className="project-row-category">{project.category}</span>
        </div>
      </div>

      <p className="project-row-oneliner">{project.oneLiner}</p>

      <div className="project-row-meta">
        <ul className="tag-row">
          {project.stack.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <a
          className="project-row-link"
          href={project.href}
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>
      </div>

      <details className="project-details">
        <summary>Case study — problem, decisions, what&rsquo;s not done</summary>
        <div className="project-details-body">
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
          <div className="not-yet">
            <span className="not-yet-label">Not built yet</span>
            <ul>
              {project.notYet.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </div>
      </details>
    </article>
  );
}

export default function Work() {
  return (
    <section className="section" id="work">
      <div className="shell">
        <div className="section-head">
          <span className="section-no">03</span>
          <h2>Selected projects</h2>
        </div>
        <p className="section-dek">
          Real projects, added as they ship — not before. This index is
          built to hold many; right now it holds one, honestly.
        </p>

        <div className="project-list">
          {PROJECTS.map((p) => (
            <ProjectRow project={p} key={p.name} />
          ))}
          <div className="project-row project-row-placeholder">
            <div className="project-row-top">
              <span className="project-row-n">
                {String(PROJECTS.length + 1).padStart(2, "0")}
              </span>
              <div className="project-row-heading">
                <div className="project-row-title-line">
                  <h3>More, planned</h3>
                  <span className="status-pill status-pill-muted">
                    Not started
                  </span>
                </div>
              </div>
            </div>
            <p className="project-row-oneliner">
              Five new, original projects are planned next — across
              different domains, one built and shipped completely before
              the next starts. Nothing here until it&rsquo;s real.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
