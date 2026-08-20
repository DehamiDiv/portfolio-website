"use client";

export default function Skills() {
  const marqueeTech = [
    { name: "React.js", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "TypeScript", icon: "📘" },
    { name: "JavaScript (ES6+)", icon: "💛" },
    { name: "Node.js", icon: "🟢" },
    { name: "Express.js", icon: "⚡" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Supabase", icon: "🔥" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Tailwind CSS", icon: "🌊" },
    { name: "Python", icon: "🐍" },
    { name: "Prisma ORM", icon: "💎" },
    { name: "Arduino & ESP32", icon: "🤖" },
    { name: "Git & GitHub", icon: "🐙" },
    { name: "Vercel Edge", icon: "🚀" },
  ];

  const skillCards = [
    {
      index: "01",
      accent: "cyan",
      title: "Frontend Engineering",
      desc: "Building intuitive, high-performance, and responsive user interfaces with server-side rendering, smooth micro-interactions, and component modularity.",
      tools: ["React.js", "Next.js 14/15", "Vanilla CSS", "Tailwind CSS", "HTML5 Semantic", "State Management", "Responsive UI/UX"],
      glyph: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      )
    },
    {
      index: "02",
      accent: "violet",
      title: "Backend & Cloud APIs",
      desc: "Developing secure RESTful endpoints, edge runtime route handlers, JWT authentication, and integrating cloud services with high throughput.",
      tools: ["Node.js", "Express.js", "Serverless Routes", "RESTful Architecture", "Supabase Auth", "Stripe Checkout", "Axios"],
      glyph: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6.01" y2="6"></line>
          <line x1="6" y1="18" x2="6.01" y2="18"></line>
        </svg>
      )
    },
    {
      index: "03",
      accent: "rose",
      title: "Databases & ORM",
      desc: "Designing normalized relational schemas, NoSQL document collections, transactional integrity, and querying via Prisma and native SQL.",
      tools: ["PostgreSQL", "Supabase DB", "MongoDB", "Prisma ORM", "SQL Optimization", "Relational Modeling", "NoSQL Aggregations"],
      glyph: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        </svg>
      )
    },
    {
      index: "04",
      accent: "emerald",
      title: "Hardware, IoT & Embedded",
      desc: "Engineering microcontroller robotics, wireless telemetry, sensor integrations, RFID security lockers, and embedded C++ programming.",
      tools: ["Arduino Mega", "ESP32 Wi-Fi/BLE", "C++ / Embedded C", "EasyEDA PCB", "Ultrasonic Sensors", "RFID Modules", "IoT Web Supervisor"],
      glyph: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
          <rect x="9" y="9" width="6" height="6"></rect>
          <line x1="9" y1="1" x2="9" y2="4"></line>
          <line x1="15" y1="1" x2="15" y2="4"></line>
          <line x1="9" y1="20" x2="9" y2="23"></line>
          <line x1="15" y1="20" x2="15" y2="23"></line>
          <line x1="20" y1="9" x2="23" y2="9"></line>
          <line x1="20" y1="14" x2="23" y2="14"></line>
          <line x1="1" y1="9" x2="4" y2="9"></line>
          <line x1="1" y1="14" x2="4" y2="14"></line>
        </svg>
      )
    }
  ];

  const handleMouseMove = (e, card) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = (y - centerY) / 14;
    const tiltY = (centerX - x) / 14;

    card.style.setProperty("--tilt-x", `${tiltX}deg`);
    card.style.setProperty("--tilt-y", `${tiltY}deg`);
    card.style.setProperty("--spot-x", `${(x / rect.width) * 100}%`);
    card.style.setProperty("--spot-y", `${(y / rect.height) * 100}%`);
  };

  const handleMouseLeave = (card) => {
    card.style.setProperty("--tilt-x", "0deg");
    card.style.setProperty("--tilt-y", "0deg");
  };

  return (
    <section id="skills" className="section-wrapper section-alt">
      <div className="wrap">
        <div className="skills-head">
          <div>
            <span className="label label-violet">TECHNICAL ARSENAL</span>
            <h2 className="section-h2">
              Capabilities & <span className="grad-cyber">Core Stack</span>
            </h2>
          </div>
          <div className="skills-head-r">
            <p className="section-p">
              Continuous learning and mastery across frontend ecosystems, backend microservices, and hardware systems.
            </p>
            <div className="skills-status">
              <span className="status-dot"></span>
              PRODUCTION READY STACK
            </div>
          </div>
        </div>

        {/* Terminal Console Wrapper */}
        <div className="skill-console rv">
          <div className="skill-console-inner">
            {/* Terminal Header Bar */}
            <div className="console-bar">
              <div className="console-dots">
                <i className="dot-rose"></i>
                <i className="dot-violet"></i>
                <i className="dot-cyan"></i>
              </div>
              <div className="console-path">~/dehami/workspace/production-stack</div>
              <div className="console-mode">
                <span>◆</span> ACTIVE WORKSPACE
              </div>
            </div>

            {/* Continuous Logo Marquee */}
            <div className="skill-marquee">
              <div className="skill-marquee-track">
                {[...marqueeTech, ...marqueeTech].map((tech, idx) => (
                  <div key={idx} className="marquee-item">
                    <span className="marquee-icon">{tech.icon}</span>
                    <span className="marquee-name">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3D Skills Matrix Cards */}
            <div className="skills-matrix">
              {skillCards.map((card, idx) => (
                <div
                  key={idx}
                  className="skill-card"
                  data-accent={card.accent}
                  onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                  onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
                >
                  <div className="skill-card-top">
                    <div className="skill-glyph">{card.glyph}</div>
                    <span className="skill-index">{card.index}</span>
                  </div>

                  <h3 className="skill-title">{card.title}</h3>
                  <p className="skill-copy">{card.desc}</p>

                  <div className="skill-tags">
                    {card.tools.map((tool, tIdx) => (
                      <span key={tIdx} className="skill-tag">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .skills-head {
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(300px, 0.8fr);
          gap: 2.5rem;
          align-items: end;
          margin-bottom: 3rem;
        }

        .skills-status {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          margin-top: 1.2rem;
          padding: 0.45rem 0.9rem;
          border: 1px solid rgba(var(--cyan-rgb), 0.3);
          border-radius: 999px;
          background: var(--secondaryB);
          color: var(--secondary-light);
          font-family: var(--font-mono);
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.1em;
        }

        .status-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--emerald);
          box-shadow: 0 0 0 4px var(--emeraldA);
          animation: pulse 1.8s infinite;
        }

        /* Terminal Console */
        .skill-console {
          position: relative;
          padding: 1px;
          border-radius: 24px;
          background: linear-gradient(135deg, rgba(var(--violet-rgb), 0.4), var(--bdr) 35%, rgba(var(--cyan-rgb), 0.35) 75%, rgba(var(--rose-rgb), 0.3));
          box-shadow: var(--shadow);
          overflow: hidden;
        }

        .skill-console-inner {
          position: relative;
          background: linear-gradient(145deg, var(--surf), var(--bg2));
          border-radius: 23px;
          padding: clamp(1.2rem, 2.5vw, 2rem);
        }

        .console-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 1.2rem;
          border-bottom: 1px solid var(--bdr);
        }

        .console-dots {
          display: flex;
          gap: 0.45rem;
        }

        .console-dots i {
          display: block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
        .dot-rose { background: var(--accent); }
        .dot-violet { background: var(--primary); }
        .dot-cyan { background: var(--secondary); }

        .console-path {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--tx3);
        }

        .console-mode {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          font-weight: 600;
          color: var(--secondary-light);
          letter-spacing: 0.1em;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        /* Marquee */
        .skill-marquee {
          position: relative;
          margin: 1.5rem 0;
          overflow: hidden;
          border: 1px solid var(--bdr);
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.02);
        }

        .skill-marquee::before,
        .skill-marquee::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          width: 80px;
          z-index: 2;
          pointer-events: none;
        }

        .skill-marquee::before {
          left: 0;
          background: linear-gradient(90deg, var(--surf), transparent);
        }

        .skill-marquee::after {
          right: 0;
          background: linear-gradient(-90deg, var(--surf), transparent);
        }

        .skill-marquee-track {
          display: flex;
          width: max-content;
          gap: 0.85rem;
          padding: 0.85rem;
          animation: marquee 24s linear infinite;
        }

        .skill-marquee:hover .skill-marquee-track {
          animation-play-state: paused;
        }

        @keyframes marquee {
          to { transform: translateX(-50%); }
        }

        .marquee-item {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          padding: 0.48rem 0.85rem;
          border-radius: 10px;
          background: var(--surf2);
          border: 1px solid var(--bdr);
          color: var(--tx);
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 500;
          white-space: nowrap;
          transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
        }

        .marquee-item:hover {
          border-color: var(--secondary-light);
          transform: translateY(-2px);
          box-shadow: 0 4px 15px var(--secondaryA);
        }

        .marquee-icon {
          font-size: 1rem;
        }

        /* Skills Matrix Cards */
        .skills-matrix {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
          margin-top: 1.25rem;
        }

        .skill-card {
          --tilt-x: 0deg;
          --tilt-y: 0deg;
          --spot-x: 50%;
          --spot-y: 10%;
          --card-accent: var(--secondary-light);
          --card-tint: var(--secondaryA);
          position: relative;
          padding: 1.6rem;
          border-radius: 18px;
          border: 1px solid var(--bdr);
          background: linear-gradient(155deg, rgba(255, 255, 255, 0.025), rgba(255, 255, 255, 0.005));
          transform: perspective(900px) rotateX(var(--tilt-x)) rotateY(var(--tilt-y));
          transform-style: preserve-3d;
          transition: transform 0.25s var(--ease), border-color 0.3s, box-shadow 0.3s;
          overflow: hidden;
        }

        .skill-card[data-accent="violet"] {
          --card-accent: var(--primary-light);
          --card-tint: var(--primaryA);
        }
        .skill-card[data-accent="rose"] {
          --card-accent: var(--accent-light);
          --card-tint: var(--accentA);
        }
        .skill-card[data-accent="emerald"] {
          --card-accent: var(--emerald);
          --card-tint: var(--emeraldA);
        }

        .skill-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at var(--spot-x) var(--spot-y), var(--card-tint), transparent 50%);
          opacity: 0.55;
          pointer-events: none;
        }

        .skill-card:hover {
          border-color: var(--card-accent);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35), 0 0 35px var(--card-tint);
          transform: perspective(900px) rotateX(var(--tilt-x)) rotateY(var(--tilt-y)) translateY(-5px);
        }

        .skill-card > * {
          position: relative;
          z-index: 1;
        }

        .skill-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.2rem;
        }

        .skill-glyph {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: var(--card-tint);
          border: 1px solid var(--bdr2);
          color: var(--card-accent);
          display: grid;
          place-items: center;
        }

        .skill-glyph svg {
          width: 22px;
          height: 22px;
        }

        .skill-index {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--tx3);
          font-weight: 600;
        }

        .skill-title {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--tx);
          margin-bottom: 0.5rem;
        }

        .skill-copy {
          font-size: 0.85rem;
          color: var(--tx2);
          line-height: 1.65;
          margin-bottom: 1.2rem;
        }

        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
        }

        .skill-tag {
          padding: 0.35rem 0.65rem;
          border-radius: 7px;
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid var(--bdr);
          color: var(--tx2);
          font-family: var(--font-mono);
          font-size: 0.7rem;
          transition: all 0.2s var(--ease);
        }

        :global([data-theme="light"]) .skill-tag {
          background: rgba(255, 255, 255, 0.7);
        }

        .skill-tag:hover {
          color: var(--card-accent);
          border-color: var(--card-accent);
          background: var(--card-tint);
          transform: translateY(-2px);
        }

        @media (max-width: 900px) {
          .skills-head {
            grid-template-columns: 1fr;
          }
          .skills-matrix {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
