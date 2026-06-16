"use client";

export default function About() {
  const academicFacts = [
    { label: "Degree", value: "BSc (Hons) in Information Technology" },
    { label: "University", value: "University of Moratuwa" }, // Placeholder for Sri Lankan Universities
    { label: "Academic Year", value: "3rd Year Undergraduate" },
    { label: "Location", value: "Elpitiya, Sri Lanka" },
  ];

  return (
    <section id="about" className="about-section">
      <div
        className="ambient-glow glow-2"
        style={{ top: "30%", left: "60%" }}
      ></div>

      <div className="container">
        <div className="section-title-wrapper">
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            Get to know my academic background, career objectives, and what
            drives me as an aspiring engineer.
          </p>
        </div>

        <div className="about-content">
          <div className="about-bio glass-card">
            <h3 className="bio-title">My Journey & Objectives</h3>
            <p className="bio-text">
              I am an undergraduate student pursuing my degree in Information
              Technology. From a young age, I have been fascinated by software
              systems and how they can solve complex, real-world problems. This
              passion led me to specialize in software engineering.
            </p>
            <p className="bio-text">
              My current goal is to secure a software engineering internship
              where I can apply my knowledge in full-stack development, modern
              web architectures, and databases. I love learning new
              technologies, writing clean code, and working alongside
              collaborative engineering teams.
            </p>
            <p className="bio-text">
              Outside of university lectures, I participate in hackathons, work
              on open-source projects, and build functional applications to
              expand my technical horizon.
            </p>

            <div className="core-values">
              <div className="value-item">
                <div className="value-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </div>
                <span>Continuous Learning</span>
              </div>
              <div className="value-item">
                <div className="value-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                    <polyline points="2 17 12 22 22 17"></polyline>
                    <polyline points="2 12 12 17 22 12"></polyline>
                  </svg>
                </div>
                <span>Clean Architecture</span>
              </div>
              <div className="value-item">
                <div className="value-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="9" y1="9" x2="15" y2="15"></line>
                    <line x1="15" y1="9" x2="9" y2="15"></line>
                  </svg>
                </div>
                <span>Problem Solving</span>
              </div>
            </div>
          </div>

          <div className="about-details glass-card">
            <h3 className="details-title">Academic Profile</h3>
            <div className="facts-grid">
              {academicFacts.map((fact, index) => (
                <div key={index} className="fact-card">
                  <span className="fact-label">{fact.label}</span>
                  <span className="fact-value">{fact.value}</span>
                </div>
              ))}
            </div>

            <div className="education-highlights">
              <h4 className="highlights-title">Core Focus Areas</h4>
              <div className="focus-tags">
                <span className="focus-tag">Web Development</span>
                <span className="focus-tag">Algorithms & DS</span>
                <span className="focus-tag">Database Management</span>
                <span className="focus-tag">Cloud Foundations</span>
                <span className="focus-tag">Object Oriented Programming</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-section {
          background-color: var(--bg-secondary);
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }

        .bio-title,
        .details-title {
          font-size: 1.5rem;
          margin-bottom: 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding-bottom: 12px;
          color: var(--color-primary);
        }

        .bio-text {
          font-size: 1.05rem;
          color: var(--text-body);
          line-height: 1.7;
          margin-bottom: 18px;
        }

        .bio-text:last-of-type {
          margin-bottom: 30px;
        }

        /* Core Values Row */
        .core-values {
          display: flex;
          gap: 20px;
          justify-content: space-between;
          flex-wrap: wrap;
        }

        .value-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-title);
        }

        .value-icon {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(34, 211, 238, 0.1);
          color: var(--color-secondary);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* Facts Grid on the right card */
        .facts-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          margin-bottom: 30px;
        }

        .fact-card {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 12px;
          background: rgba(255, 255, 255, 0.02);
          border-left: 3px solid var(--color-secondary);
          border-radius: 0 8px 8px 0;
        }

        .fact-label {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
        }

        .fact-value {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-title);
        }

        /* Focus tags */
        .education-highlights {
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 20px;
        }

        .highlights-title {
          font-size: 1.1rem;
          margin-bottom: 12px;
          color: var(--text-title);
        }

        .focus-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .focus-tag {
          font-size: 0.85rem;
          padding: 6px 14px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 50px;
          color: var(--text-body);
          transition: all 0.3s ease;
        }

        .focus-tag:hover {
          background: rgba(167, 139, 250, 0.15);
          border-color: rgba(167, 139, 250, 0.3);
          color: var(--color-primary);
        }

        @media (max-width: 992px) {
          .about-content {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .core-values {
            flex-direction: column;
            gap: 12px;
          }
        }
      `}</style>
    </section>
  );
}
