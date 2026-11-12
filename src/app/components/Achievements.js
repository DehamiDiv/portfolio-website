"use client";

export default function Achievements() {
  const achievements = [
    {
      id: "cre8x",
      year: "2025",
      badge: "FINALIST",
      badgeColor: "var(--primary-light)",
      event: "Cre8X 3.0 — Inter-University UI/UX Design Competition",
      organizer: "Faculty of Computing · General Sir John Kotelawala Defence University",
      description:
        "Recognized as a Finalist team at Cre8X 3.0, an inter-university UI/UX design competition hosted by KDU. Competed against top design teams from universities across Sri Lanka, showcasing innovative user experience design solutions.",
      images: [
        { src: "/cre8x-award1.jpg", alt: "Receiving the Cre8X 3.0 Finalist recognition award on stage" },
        { src: "/cre8x-award2.jpg", alt: "Cre8X 3.0 Finalist team group photo on stage" },
      ],
      tags: ["UI/UX Design", "Inter-University", "Team Project", "Figma", "Prototyping"],
      icon: "🏆",
    },
  ];

  return (
    <section id="achievements" className="section-wrapper section-alt">
      <div className="wrap">
        <div className="ach-head rv">
          <span className="label label-rose">COMPETITIONS &amp; RECOGNITION</span>
          <h2 className="section-h2">
            Achievements &amp; <span className="grad-cyan-rose">Awards</span>
          </h2>
          <p className="section-p">
            Competitions, recognitions, and milestones beyond the academic curriculum.
          </p>
        </div>

        <div className="ach-list">
          {achievements.map((item, idx) => (
            <div key={idx} className="ach-card rv">
              {/* Left: Text */}
              <div className="ach-info">
                <div className="ach-top">
                  <span className="ach-icon">{item.icon}</span>
                  <div className="ach-meta">
                    <span
                      className="ach-badge"
                      style={{ color: item.badgeColor, borderColor: item.badgeColor }}
                    >
                      {item.badge}
                    </span>
                    <span className="ach-year">{item.year}</span>
                  </div>
                </div>

                <h3 className="ach-title">{item.event}</h3>
                <div className="ach-org">{item.organizer}</div>
                <p className="ach-desc">{item.description}</p>

                <div className="ach-tags">
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="ach-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: Photo Gallery */}
              <div className="ach-gallery">
                {item.images.map((img, iIdx) => (
                  <div key={iIdx} className={`ach-img-wrap ach-img-${iIdx}`}>
                    <img src={img.src} alt={img.alt} className="ach-img" />
                    <div className="ach-img-overlay">
                      <span className="ach-img-label">
                        {iIdx === 0 ? "Award Ceremony" : "Finalist Team"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .ach-head {
          margin-bottom: 3.5rem;
        }

        .ach-list {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .ach-card {
          background: var(--surf);
          border: 1px solid var(--bdr);
          border-radius: 24px;
          padding: clamp(1.6rem, 3vw, 2.5rem);
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
          gap: clamp(2rem, 4vw, 3.5rem);
          align-items: center;
          box-shadow: var(--shadow);
          transition: border-color 0.3s var(--ease), box-shadow 0.3s var(--ease);
          position: relative;
          overflow: hidden;
        }

        .ach-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 60% 50% at 90% 50%, rgba(var(--rose-rgb), 0.06), transparent 70%);
          pointer-events: none;
        }

        .ach-card:hover {
          border-color: rgba(var(--rose-rgb), 0.4);
          box-shadow: var(--shadow), 0 0 40px rgba(var(--rose-rgb), 0.08);
        }

        .ach-top {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.2rem;
        }

        .ach-icon {
          font-size: 2rem;
          line-height: 1;
        }

        .ach-meta {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .ach-badge {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          padding: 0.2rem 0.6rem;
          border-radius: 999px;
          border: 1px solid;
          background: rgba(0, 0, 0, 0.15);
          align-self: flex-start;
        }

        .ach-year {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--tx3);
        }

        .ach-title {
          font-family: var(--font-heading);
          font-size: clamp(1.1rem, 2vw, 1.4rem);
          font-weight: 700;
          color: var(--tx);
          margin-bottom: 0.4rem;
          line-height: 1.3;
        }

        .ach-org {
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--accent-light);
          margin-bottom: 1rem;
        }

        .ach-desc {
          font-size: 0.9rem;
          color: var(--tx2);
          line-height: 1.72;
          margin-bottom: 1.4rem;
        }

        .ach-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .ach-tag {
          padding: 0.32rem 0.7rem;
          border-radius: 8px;
          background: var(--accentB);
          border: 1px solid rgba(var(--rose-rgb), 0.25);
          color: var(--accent-light);
          font-family: var(--font-mono);
          font-size: 0.7rem;
          transition: all 0.2s var(--ease);
        }

        .ach-tag:hover {
          background: var(--accentA);
          border-color: var(--accent);
          transform: translateY(-2px);
        }

        /* Photo Gallery */
        .ach-gallery {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          position: relative;
        }

        .ach-img-wrap {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid var(--bdr2);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
          aspect-ratio: 4 / 3;
          cursor: zoom-in;
          transition: transform 0.35s var(--ease), box-shadow 0.35s var(--ease);
        }

        .ach-img-0 {
          grid-column: 1 / -1;
          aspect-ratio: 16 / 10;
        }

        .ach-img-wrap:hover {
          transform: scale(1.03) translateY(-3px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.55), 0 0 25px rgba(var(--rose-rgb), 0.2);
          border-color: var(--accent-light);
          z-index: 2;
        }

        .ach-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transition: transform 0.5s var(--ease);
        }

        .ach-img-wrap:hover .ach-img {
          transform: scale(1.06);
        }

        .ach-img-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 0.6rem 0.9rem;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.75), transparent);
          opacity: 0;
          transition: opacity 0.3s var(--ease);
        }

        .ach-img-wrap:hover .ach-img-overlay {
          opacity: 1;
        }

        .ach-img-label {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: rgba(255, 255, 255, 0.9);
        }

        @media (max-width: 900px) {
          .ach-card {
            grid-template-columns: 1fr;
          }

          .ach-gallery {
            order: -1;
          }

          .ach-img-0 {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 540px) {
          .ach-gallery {
            grid-template-columns: 1fr;
          }

          .ach-img-0 {
            grid-column: auto;
          }
        }
      `}</style>
    </section>
  );
}

