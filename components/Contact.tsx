"use client";

import { useState, type FormEvent } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <section className="section steel" id="contact">
      <div className="container contact-grid">
        <div>
          <span className="eyebrow">Visit or Call</span>
          <h2 className="h2">Get a quote for<br />your next project</h2>
          <p className="lead">Tell us what you are building. We will prepare a material list and the best price within hours.</p>
          <div className="info-list">
            <div className="info">
              <div className="ic">📍</div>
              <div>
                <b>IronHub Showroom</b>
                <span>Shop 12, Hardware Market, Saddar, Karachi</span>
              </div>
            </div>
            <div className="info">
              <div className="ic">📞</div>
              <div>
                <b>+92 300 123 4567</b>
                <span>Mon–Sat, 9am – 9pm</span>
              </div>
            </div>
            <div className="info">
              <div className="ic">✉️</div>
              <div>
                <b>sales@ironhub.pk</b>
                <span>We reply within 2 hours</span>
              </div>
            </div>
          </div>
        </div>

        <form className="form" onSubmit={submit}>
          <h3>Request a quote</h3>
          <div className="row2">
            <input required placeholder="Your name" aria-label="Your name" />
            <input required type="tel" placeholder="Phone number" aria-label="Phone number" />
          </div>
          <select aria-label="Project type" defaultValue="">
            <option value="" disabled>
              Project type
            </option>
            <option>Home renovation</option>
            <option>Construction site</option>
            <option>Plumbing / Electrical work</option>
            <option>Workshop tools</option>
          </select>
          <textarea required placeholder="Tell us what you need…" aria-label="Message" />
          <button className="btn btn-primary" type="submit" style={{ justifyContent: "center" }}>
            Send Request →
          </button>
          {sent && <div className="ok">✅ Thank you! Our team will contact you shortly.</div>}
        </form>
      </div>
    </section>
  );
}
