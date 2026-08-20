"use client";

export default function Timeline() {
  const milestones = [
    {
      year: "2025 — PRESENT",
      badge: "CURRENT FOCUS",
      badgeColor: "var(--secondary-light)",
      title: "Advanced Full-Stack & Next.js Specialization",
      org: "3rd Year Undergraduate · University of Moratuwa",
      desc: "Architecting cloud-native web applications, serverless route handlers, and AI integrations (OpenRouter & Gemini APIs). Specializing in Next.js App Router, edge database deployments (Supabase/PostgreSQL), and complex full-stack web platforms.",
    },
    {
      year: "2024",
      badge: "SYSTEMS & DB",
      badgeColor: "var(--primary-light)",
      title: "Database Modeling, MERN Architecture & IoT Systems",
      org: "2nd Year Undergraduate · University of Moratuwa",
      desc: "Engineered multi-tier full stack applications with React and MongoDB. Developed the Tasker smart rail delivery robot with Arduino Mega, ESP32 Wi-Fi modules, and custom PCB circuits.",
    },
    {
      year: "2023",
      badge: "FOUNDATIONS",
      badgeColor: "var(--accent-light)",
      title: "Algorithms, Data Structures & Object-Oriented Engineering",
      org: "1st Year Undergraduate · Faculty of Information Tech",
      desc: "Commenced BSc (Hons) in Information Technology. Mastered core software engineering fundamentals, algorithmic complexity analysis, clean coding practices, and modern JavaScript.",
    },
    {
      year: "2022",
      badge: "MILESTONE",
      badgeColor: "var(--emerald)",
      title: "G.C.E. Advanced Level Examination",
      org: "Engineering & IT Stream · Sri Lanka",
      desc: "Excelled in the competitive G.C.E. A/L examination in the Physical Science/IT stream, gaining prestigious admission to the University of Moratuwa Faculty of Information Technology.",
    },
  ];

  return (
    <section id="journey" className="section-wrapper section-alt">
      <div className="wrap">
        <div className="timeline-head">
          <span className="label label-violet">CHRONOLOGICAL MILESTONES</span>
          <h2 className="section-h2">
            Educational & <span className="grad-violet-cyan">Engineering Path</span>
          </h2>
          <p className="section-p">
            Key steps, academic milestones, and engineering achievements that define my development path.
          </p>
        </div>

        <div className="timeline-wrap">
          {/* Vertical Track Line */}
          <div className="timeline-track"></div>

          <div className="timeline-items">
            {milestones.map((item, idx) => (
              <div key={idx} className="timeline-item rv">
                {/* Glowing Node */}
                <div className="timeline-node">
                  <div className="node-ring"></div>
                </div>

                <div className="timeline-card">
                  <div className="card-top">
                    <span className="item-year">{item.year}</span>
                    <span
                      className="item-badge"
                      style={{ color: item.badgeColor, borderColor: item.badgeColor }}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="item-title">{item.title}</h3>
                  <div className="item-org">{item.org}</div>
                  <p className="item-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .timeline-head {
          margin-bottom: 3.5rem;
        }

        .timeline-wrap {
          position: relative;
          max-width: 860px;
          margin: 0 auto;
          padding-left: 2.5rem;
        }

        /* Vertical Line */
        .timeline-track {
          position: absolute;
          left: 11px;
          top: 10px;
          bottom: 10px;
          width: 2px;
          background: linear-gradient(
            to bottom,
            var(--primary) 0%,
            var(--secondary) 50%,
            rgba(255, 255, 255, 0.05) 100%
          );
        }

        .timeline-items {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .timeline-item {
          position: relative;
        }

        /* Glowing Node */
        .timeline-node {
          position: absolute;
          left: -2.5rem;
          top: 1.5rem;
          width: 24px;
          height: 24px;
          display: grid;
          place-items: center;
          z-index: 2;
        }

        .node-ring {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--bg);
          border: 3px solid var(--secondary);
          box-shadow: 0 0 14px var(--secondary);
          transition: transform 0.3s var(--ease), border-color 0.3s, box-shadow 0.3s;
        }

        .timeline-item:hover .node-ring {
          transform: scale(1.35);
          border-color: var(--primary-light);
          box-shadow: 0 0 20px var(--primary);
        }

        .timeline-card {
          background: var(--surf);
          border: 1px solid var(--bdr);
          border-radius: 18px;
          padding: 1.8rem;
          box-shadow: var(--shadow);
          transition: transform 0.3s var(--ease), border-color 0.3s, box-shadow 0.3s;
        }

        .timeline-card:hover {
          transform: translateX(6px);
          border-color: var(--secondary-light);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4), 0 0 20px var(--secondaryA);
        }

        .card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.8rem;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .item-year {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--secondary-light);
          letter-spacing: 0.1em;
        }

        .item-badge {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          padding: 0.25rem 0.65rem;
          border-radius: 999px;
          border: 1px solid;
          background: rgba(0, 0, 0, 0.2);
        }

        .item-title {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--tx);
          margin-bottom: 0.35rem;
        }

        .item-org {
          font-size: 0.88rem;
          font-weight: 500;
          color: var(--tx2);
          margin-bottom: 1rem;
        }

        .item-desc {
          font-size: 0.88rem;
          color: var(--tx3);
          line-height: 1.7;
        }

        @media (max-width: 600px) {
          .timeline-wrap {
            padding-left: 2rem;
          }
          .timeline-node {
            left: -2rem;
          }
          .timeline-track {
            left: 3px;
          }
        }
      `}</style>
    </section>
  );
}
