import { PROJECTS } from "../data/profile.js";

export default function Projects() {
  return (
    <section className="section" id="work">
      <div className="shell">
        <div className="section-head">
          <span className="num">01</span>
          <h2>Work</h2>
        </div>

        {PROJECTS.map((project) => (
          <a
            className="project-row"
            href={project.href}
            target="_blank"
            rel="noreferrer"
            key={project.n}
          >
            <span className="n">{project.n}</span>
            <div className="name-col">
              <h3>{project.name}</h3>
              <span className="status">{project.status}</span>
            </div>
            <div className="meta">
              <p className="desc">{project.description}</p>
              <div className="tags">
                {project.stack.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </div>
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </a>
        ))}

        <div className="project-row more">
          <span className="n">
            {String(PROJECTS.length + 1).padStart(2, "0")}
          </span>
          <div className="name-col">
            <h3 style={{ color: "var(--grey)" }}>More in progress</h3>
          </div>
          <div className="meta">
            <p className="desc">
              Five new, original projects are planned next — each one built
              and shipped completely before the next starts. This index
              grows as they land, not before.
            </p>
          </div>
          <span />
        </div>
      </div>
    </section>
  );
}
