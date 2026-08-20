"use client";

export default function About() {
  const stats = [
    { label: "Degree Level", val: "BSc (Hons)" },
    { label: "Academic Standing", val: "3rd Year" },
    { label: "Institution", val: "UoM, Sri Lanka" },
    { label: "Specialization", val: "Software & Web" },
  ];

  const focusChips = [
    "Full-Stack Web Engineering",
    "Next.js App Router",
    "PostgreSQL & Supabase",
    "Algorithms & Data Structures",
    "Microcontrollers & IoT (ESP32 / Arduino)",
    "RESTful APIs & Microservices",
    "Cloud & Edge Deployments"
  ];

  return (
    <section id="about" className="section-wrapper">
      <div className="wrap">
        <div className="about-grid">
          {/* Left: Framed Portrait Image */}
          <div className="about-img-col rv">
            <div className="about-img-wrap">
              <div className="about-img-deco"></div>
              <img
                src="/profile.jpg"
                alt="Dehami Divyanjalee"
                className="about-img"
              />
              <div className="about-badge-card">
                <span className="badge-icon">🎓</span>
                <div>
                  <div className="badge-t">Univ. of Moratuwa</div>
                  <div className="badge-s">Faculty of Information Tech</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Academic Bio & Highlights */}
          <div className="about-content-col rv rd2">
            <span className="label label-cyan">ACADEMIC & PROFESSIONAL PROFILE</span>
            <h2 className="section-h2">
              Driven by <span className="grad-violet-cyan">Curiosity</span>, Powered by Code.
            </h2>

            <p className="bio-text">
              I am an Information Technology undergraduate at the <strong>University of Moratuwa</strong>, passionate about building full-stack web applications, scalable database architectures, and embedded robotic hardware.
            </p>

            <p className="bio-text">
              My core engineering focus is delivering resilient digital products with production-grade performance, intuitive user experience, and clean architectural design. Whether developing an AI-driven web platform or engineering microcontroller systems for factory automation, I enjoy tackling complex challenges with creative, practical solutions.
            </p>

            {/* Quick Stats Grid */}
            <div className="about-stats-grid">
              {stats.map((item, idx) => (
                <div key={idx} className="about-stat-box">
                  <span className="stat-box-val">{item.val}</span>
                  <span className="stat-box-lbl">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Focus Chips */}
            <div className="about-chips-wrap">
              <span className="chips-title">CORE FOCUS AREAS</span>
              <div className="chips-list">
                {focusChips.map((chip, idx) => (
                  <span key={idx} className="focus-chip">
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-grid {
          display: grid;
          grid-template-columns: minmax(320px, 0.9fr) minmax(0, 1.25fr);
          gap: clamp(3rem, 6vw, 6.5rem);
          align-items: center;
        }

        .about-img-wrap {
          position: relative;
          max-width: 440px;
          margin: 0 auto;
        }

        .about-img {
          width: 100%;
          aspect-ratio: 4 / 5;
          object-fit: cover;
          object-position: center top;
          border-radius: var(--r);
          border: 1px solid var(--bdr2);
          box-shadow: var(--shadow);
          position: relative;
          z-index: 2;
          transition: filter 0.4s var(--ease), transform 0.4s var(--ease);
        }

        .about-img-wrap:hover .about-img {
          filter: brightness(1.05);
          transform: translateY(-4px);
        }

        .about-img-deco {
          position: absolute;
          inset: 16px -16px -16px 16px;
          border: 1.5px solid var(--primary);
          border-radius: var(--r);
          opacity: 0.45;
          z-index: 1;
          transition: all 0.4s var(--ease);
        }

        .about-img-wrap:hover .about-img-deco {
          inset: 20px -20px -20px 20px;
          opacity: 0.8;
          border-color: var(--secondary-light);
          box-shadow: 0 0 25px var(--secondaryA);
        }

        .about-badge-card {
          position: absolute;
          bottom: -20px;
          right: -15px;
          z-index: 3;
          background: rgba(12, 19, 36, 0.94);
          border: 1px solid var(--bdr2);
          backdrop-filter: blur(16px);
          padding: 0.85rem 1.2rem;
          border-radius: 14px;
          display: flex;
          align-items: center;
          gap: 0.85rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(var(--violet-rgb), 0.2);
        }

        :global([data-theme="light"]) .about-badge-card {
          background: rgba(255, 255, 255, 0.96);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .badge-icon {
          font-size: 1.6rem;
        }

        .badge-t {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--tx);
        }

        .badge-s {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--secondary-light);
        }

        .bio-text {
          font-size: 1.05rem;
          color: var(--tx2);
          line-height: 1.75;
          margin-bottom: 1.2rem;
        }

        .bio-text strong {
          color: var(--tx);
          font-weight: 600;
        }

        /* Stats Grid */
        .about-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          margin: 2.2rem 0;
        }

        .about-stat-box {
          background: var(--surf);
          border: 1px solid var(--bdr);
          border-radius: 12px;
          padding: 1.1rem 0.8rem;
          text-align: center;
          transition: transform 0.3s var(--ease), border-color 0.3s, box-shadow 0.3s;
        }

        .about-stat-box:hover {
          transform: translateY(-4px);
          border-color: var(--primary-light);
          box-shadow: 0 8px 25px rgba(var(--violet-rgb), 0.2);
        }

        .stat-box-val {
          display: block;
          font-family: var(--font-heading);
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--secondary-light);
          margin-bottom: 0.3rem;
        }

        .stat-box-lbl {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--tx3);
        }

        /* Focus Chips */
        .about-chips-wrap {
          margin-top: 1.8rem;
        }

        .chips-title {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          color: var(--tx3);
          margin-bottom: 0.8rem;
        }

        .chips-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }

        .focus-chip {
          padding: 0.45rem 0.85rem;
          border-radius: 8px;
          background: var(--surf);
          border: 1px solid var(--bdr);
          color: var(--tx2);
          font-family: var(--font-mono);
          font-size: 0.75rem;
          transition: all 0.25s var(--ease);
        }

        .focus-chip:hover {
          border-color: var(--secondary);
          color: var(--secondary-light);
          background: var(--secondaryA);
          transform: translateY(-2px);
        }

        @media (max-width: 960px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
          .about-img-wrap {
            margin-bottom: 2rem;
          }
          .about-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
}
