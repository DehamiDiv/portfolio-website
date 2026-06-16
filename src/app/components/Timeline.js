"use client";

export default function Timeline() {
  const timelineData = [
    {
      year: "2025 - Present",
      title: "Full Stack Exploration & Next.js Specialization",
      subtitle: "3rd Year Undergraduate",
      description: "Focusing heavily on production-ready modern architectures. Specialized in Next.js App Router, edge hosting platforms (Vercel), and serverless database providers like Supabase.",
      badge: "Academic"
    },
    {
      year: "2024",
      title: "MERN Stack Projects & Database Foundations",
      subtitle: "2nd Year Undergraduate",
      description: "Mastered Relational Databases, SQL, NoSQL systems (MongoDB), and server architectures. Built complex frontend applications and integrated data visualization boards.",
      badge: "Projects"
    },
    {
      year: "2023",
      title: "Algorithms & Programming Fundamentals",
      subtitle: "1st Year Undergraduate",
      description: "Initiated higher education. Focused on basic data structures, object-oriented concepts, math principles, and standard responsive web designing with core HTML/CSS/JavaScript.",
      badge: "Academic"
    },
    {
      year: "2022",
      title: "Advanced Level Examination & Tech Interest",
      subtitle: "School Education",
      description: "Successfully passed G.C.E. Advanced Level in Sri Lanka, choosing the IT/Engineering stream, and decided to pursue a professional career in Software Engineering.",
      badge: "School"
    }
  ];

  return (
    <section id="timeline" className="timeline-section">
      <div className="ambient-glow glow-1" style={{ top: "20%", left: "70%" }}></div>

      <div className="container">
        <div className="section-title-wrapper">
          <h2 className="section-title">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle">
            A look back at my educational milestones, personal projects, and achievements.
          </p>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          <div className="timeline-list">
            {timelineData.map((item, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-dot-wrapper">
                  <div className="timeline-dot"></div>
                </div>

                <div className="timeline-card-wrapper">
                  <div className="timeline-card glass-card">
                    <div className="timeline-card-header">
                      <span className="timeline-year">{item.year}</span>
                      <span className={`timeline-badge badge-${item.badge.toLowerCase()}`}>
                        {item.badge}
                      </span>
                    </div>
                    <h3 className="timeline-title">{item.title}</h3>
                    <h4 className="timeline-subtitle">{item.subtitle}</h4>
                    <p className="timeline-text">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .timeline-section {
          background-color: var(--bg-primary);
        }

        .timeline-container {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px 0;
        }

        /* The timeline track line */
        .timeline-line {
          position: absolute;
          left: 30px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, 
            var(--color-primary) 0%, 
            var(--color-secondary) 50%, 
            rgba(255, 255, 255, 0.05) 100%
          );
        }

        .timeline-list {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .timeline-item {
          display: flex;
          position: relative;
        }

        /* Dot aligning with the line */
        .timeline-dot-wrapper {
          position: absolute;
          left: 21px;
          top: 24px;
          z-index: 5;
        }

        .timeline-dot {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--bg-primary);
          border: 3px solid var(--color-secondary);
          box-shadow: 0 0 10px var(--color-secondary);
          transition: all 0.3s ease;
        }

        .timeline-item:hover .timeline-dot {
          transform: scale(1.3);
          border-color: var(--color-accent);
          box-shadow: 0 0 15px var(--color-accent);
        }

        /* Card positioning */
        .timeline-card-wrapper {
          width: 100%;
          padding-left: 70px; /* offset from timeline line */
        }

        .timeline-card {
          padding: 24px;
        }

        .timeline-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .timeline-year {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--color-secondary);
        }

        .timeline-badge {
          font-size: 0.75rem;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 50px;
        }

        .badge-academic {
          background: rgba(167, 139, 250, 0.1);
          color: var(--color-primary);
          border: 1px solid rgba(167, 139, 250, 0.2);
        }

        .badge-projects {
          background: rgba(34, 211, 238, 0.1);
          color: var(--color-secondary);
          border: 1px solid rgba(34, 211, 238, 0.2);
        }

        .badge-school {
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-body);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .timeline-title {
          font-size: 1.25rem;
          margin-bottom: 4px;
          color: var(--text-title);
        }

        .timeline-subtitle {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-muted);
          margin-bottom: 16px;
        }

        .timeline-text {
          font-size: 0.95rem;
          color: var(--text-body);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .timeline-line {
            left: 20px;
          }
          .timeline-dot-wrapper {
            left: 11px;
          }
          .timeline-card-wrapper {
            padding-left: 50px;
          }
        }
      `}</style>
    </section>
  );
}
