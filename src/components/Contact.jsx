import { PROFILE } from "../data/profile.js";

export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="shell">
        <div className="section-head">
          <span className="section-no">05</span>
          <h2>Contact</h2>
        </div>
        <p className="contact-lede">
          Let&rsquo;s talk about software, a project, or a role.
        </p>
        <a className="contact-email" href={`mailto:${PROFILE.email}`}>
          {PROFILE.email}
        </a>
        <div className="contact-secondary">
          <a href={`tel:${PROFILE.phone}`}>{PROFILE.phoneDisplay}</a>
          <a href={PROFILE.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
