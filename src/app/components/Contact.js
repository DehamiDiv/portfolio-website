"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: null,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({
          loading: false,
          success: true,
          message: "Thank you! Your message has been sent successfully. I will get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({
          loading: false,
          success: false,
          message: data.error || "Something went wrong. Please try again.",
        });
      }
    } catch (err) {
      console.error(err);
      setStatus({
        loading: false,
        success: false,
        message: "Message could not be sent right now. Please reach out directly via email.",
      });
    }
  };

  return (
    <section id="contact" className="section-wrapper">
      <div className="wrap">
        <div className="contact-head">
          <span className="label label-rose">START A CONVERSATION</span>
          <h2 className="section-h2">
            Let&apos;s Build Something <span className="grad-cyan-rose">Remarkable</span>
          </h2>
          <p className="section-p">
            Whether you have an internship opportunity, a software project, or want to connect — feel free to reach out.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Methods */}
          <div className="contact-info-col rv">
            <div className="info-card">
              <h3 className="info-title">Contact Channels</h3>
              <p className="info-desc">
                I am actively seeking software engineering internships, collaborative development projects, and exciting tech initiatives.
              </p>

              <div className="channels-list">
                <a href="mailto:dehamidivyanjali166@gmail.com" className="channel-item">
                  <div className="channel-icon icon-email">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <div className="channel-details">
                    <span className="channel-label">Email Address</span>
                    <span className="channel-val">dehamidivyanjali166@gmail.com</span>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/dehami-divyanjalee-a14883276"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-item"
                >
                  <div className="channel-icon icon-linkedin">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </div>
                  <div className="channel-details">
                    <span className="channel-label">LinkedIn Profile</span>
                    <span className="channel-val">linkedin.com/in/dehami-divyanjalee</span>
                  </div>
                </a>

                <a
                  href="https://github.com/DehamiDiv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-item"
                >
                  <div className="channel-icon icon-github">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </div>
                  <div className="channel-details">
                    <span className="channel-label">GitHub Repositories</span>
                    <span className="channel-val">github.com/DehamiDiv</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="contact-form-col rv rd2">
            <div className="form-card">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="name" className="field-label">YOUR NAME</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Maya Silva"
                      className="field-input"
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="email" className="field-label">EMAIL ADDRESS</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="e.g. maya@example.com"
                      className="field-input"
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="subject" className="field-label">SUBJECT</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Software Internship Opportunity"
                    className="field-input"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="message" className="field-label">MESSAGE</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Share the details of your project or inquiry..."
                    className="field-input textarea"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status.loading}
                  className="btn btn-primary submit-btn"
                >
                  {status.loading ? "Transmitting..." : "Send Message"}
                  {!status.loading && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                  )}
                </button>

                {status.message && (
                  <div className={`form-feedback ${status.success ? "success" : "error"}`}>
                    {status.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-head {
          margin-bottom: 3.5rem;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: minmax(300px, 0.85fr) minmax(0, 1.15fr);
          gap: 2.5rem;
          align-items: start;
        }

        .info-card,
        .form-card {
          background: var(--surf);
          border: 1px solid var(--bdr);
          border-radius: 20px;
          padding: clamp(1.6rem, 3vw, 2.5rem);
          box-shadow: var(--shadow);
        }

        .info-title {
          font-family: var(--font-heading);
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--tx);
          margin-bottom: 0.75rem;
        }

        .info-desc {
          font-size: 0.92rem;
          color: var(--tx2);
          line-height: 1.65;
          margin-bottom: 2rem;
        }

        .channels-list {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .channel-item {
          display: flex;
          align-items: center;
          gap: 1.1rem;
          padding: 1rem 1.2rem;
          border-radius: 14px;
          background: var(--surf2);
          border: 1px solid var(--bdr);
          transition: all 0.3s var(--ease);
        }

        .channel-item:hover {
          border-color: var(--secondary-light);
          transform: translateX(6px);
          background: var(--secondaryB);
          box-shadow: 0 4px 20px var(--secondaryA);
        }

        .channel-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: grid;
          place-items: center;
          flex-shrink: 0;
        }

        .icon-email {
          background: var(--primaryA);
          color: var(--primary-light);
          border: 1px solid rgba(var(--violet-rgb), 0.35);
        }

        .icon-linkedin {
          background: var(--secondaryA);
          color: var(--secondary-light);
          border: 1px solid rgba(var(--cyan-rgb), 0.35);
        }

        .icon-github {
          background: var(--accentA);
          color: var(--accent-light);
          border: 1px solid rgba(var(--rose-rgb), 0.35);
        }

        .channel-details {
          display: flex;
          flex-direction: column;
          gap: 2px;
          min-width: 0;
        }

        .channel-label {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--tx3);
        }

        .channel-val {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--tx);
          word-break: break-all;
        }

        /* Form styling */
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.4rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.2rem;
        }

        .form-field {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .field-label {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          color: var(--tx2);
        }

        .field-input {
          background: var(--surf2);
          border: 1px solid var(--bdr2);
          border-radius: 10px;
          padding: 0.85rem 1.1rem;
          font-size: 0.95rem;
          color: var(--tx);
          transition: all 0.25s var(--ease);
        }

        .field-input:focus {
          outline: none;
          border-color: var(--secondary-light);
          box-shadow: 0 0 0 3px var(--secondaryA);
          background: var(--bg);
        }

        .field-input.textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          width: 100%;
          margin-top: 0.5rem;
        }

        .form-feedback {
          padding: 0.85rem 1rem;
          border-radius: 10px;
          font-family: var(--font-mono);
          font-size: 0.78rem;
          text-align: center;
        }

        .form-feedback.success {
          background: var(--emeraldA);
          border: 1px solid var(--emerald);
          color: var(--emerald);
        }

        .form-feedback.error {
          background: var(--accentA);
          border: 1px solid var(--accent);
          color: var(--accent);
        }

        @media (max-width: 850px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
