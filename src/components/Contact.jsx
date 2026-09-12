import { PROFILE } from "../data/profile.js";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="shell">
        <span className="eyebrow">04 — Get in touch</span>
        <a className="contact-link" href={`mailto:${PROFILE.email}`}>
          {PROFILE.email}
        </a>
        <div className="contact-secondary">
          <a href={PROFILE.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
