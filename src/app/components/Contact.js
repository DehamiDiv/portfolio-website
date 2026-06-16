"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [status, setStatus] = useState({
    loading: false,
    success: null,
    message: ""
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
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({
          loading: false,
          success: true,
          message: "Thank you! Your message has been sent successfully."
        });
        // Clear form
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({
          loading: false,
          success: false,
          message: data.error || "Something went wrong. Please try again."
        });
      }
    } catch (err) {
      console.error(err);
      setStatus({
        loading: false,
        success: false,
        message: "Failed to connect to the server. Please check your internet connection and try again."
      });
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="ambient-glow glow-2" style={{ top: "60%", right: "80%" }}></div>

      <div className="container">
        <div className="section-title-wrapper">
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle">
            Have an internship role, a project idea, or just want to say hi? Feel free to reach out.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Side: Contact Info */}
          <div className="contact-info-panel glass-card">
            <h3 className="panel-title">Let&apos;s Connect</h3>
            <p className="panel-text">
              I am actively looking for software engineering internship opportunities. I am also open to freelance work and interesting hobby collaborations.
            </p>

            <div className="contact-methods">
              <a href="mailto:dehamidivyanjali166@gmail.com" className="method-item">
                <div className="method-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div className="method-details">
                  <span className="method-label">Email Me</span>
                  <span className="method-value">dehamidivyanjali166@gmail.com</span>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/dehami-divyanjalee-a14883276" target="_blank" rel="noopener noreferrer" className="method-item">
                <div className="method-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </div>
                <div className="method-details">
                  <span className="method-label">LinkedIn</span>
                  <span className="method-value">linkedin.com/in/dehami-divyanjalee-a14883276</span>
                </div>
              </a>

              <a href="https://github.com/DehamiDiv" target="_blank" rel="noopener noreferrer" className="method-item">
                <div className="method-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </div>
                <div className="method-details">
                  <span className="method-label">GitHub</span>
                  <span className="method-value">github.com/DehamiDiv</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="contact-form-panel glass-card">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g. John Doe"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="e.g. john@example.com"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Internship Inquiry"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Type your message here..."
                  className="form-input textarea"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status.loading}
                className="btn btn-primary submit-btn"
              >
                {status.loading ? "Sending Message..." : "Send Message"}
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

      <style jsx>{`
        .contact-section {
          background-color: var(--bg-primary);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 30px;
          align-items: start;
        }

        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }

        .panel-title {
          font-size: 1.5rem;
          color: var(--color-primary);
          margin-bottom: 16px;
          border-left: 3px solid var(--color-primary);
          padding-left: 12px;
        }

        .panel-text {
          font-size: 1.05rem;
          line-height: 1.6;
          color: var(--text-body);
          margin-bottom: 30px;
        }

        /* Contact Details Lists */
        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .method-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
        }

        .method-item:hover {
          background: rgba(124, 58, 237, 0.05);
          border-color: rgba(124, 58, 237, 0.25);
          transform: translateX(5px);
        }

        .method-icon {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: rgba(124, 58, 237, 0.1);
          color: var(--color-primary);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .method-item:nth-child(2) .method-icon {
          background: rgba(34, 211, 238, 0.1);
          color: var(--color-secondary);
        }

        .method-item:nth-child(3) .method-icon {
          background: rgba(236, 72, 153, 0.1);
          color: var(--color-accent);
        }

        .method-details {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .method-label {
          font-size: 0.8rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .method-value {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-title);
          word-break: break-all;
        }

        /* Contact Form */
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-title);
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .form-input {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          padding: 14px;
          font-size: 0.95rem;
          color: var(--text-title);
          transition: all 0.3s ease;
        }

        .form-input::placeholder {
          color: #475569;
        }

        .form-input:focus {
          outline: none;
          background: rgba(255, 255, 255, 0.04);
          border-color: var(--color-secondary);
          box-shadow: 0 0 10px rgba(34, 211, 238, 0.15);
        }

        .form-input.textarea {
          resize: vertical;
        }

        .submit-btn {
          width: 100%;
          justify-content: center;
          padding: 14px 28px;
        }

        .form-feedback {
          padding: 12px;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 500;
          text-align: center;
          margin-top: 10px;
        }

        .form-feedback.success {
          background: rgba(16, 185, 129, 0.1);
          color: #10b981;
          border: 1px solid rgba(16, 185, 129, 0.2);
        }

        .form-feedback.error {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
          border: 1px solid rgba(239, 68, 68, 0.2);
        }
      `}</style>
    </section>
  );
}
