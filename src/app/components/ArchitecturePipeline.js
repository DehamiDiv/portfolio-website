"use client";

import { useRef } from "react";

export default function ArchitecturePipeline() {
  const containerRef = useRef(null);

  const stages = [
    {
      step: "01",
      phase: "FOUNDATION",
      title: "System Architecture",
      accent: "var(--primary-light)",
      accentA: "var(--primaryA)",
      desc: "Careful schema modeling, relational data structuring, ER diagramming, and planning clean API contracts before writing code.",
      result: "SOLID & Scalable Schemas",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6.01" y2="6"></line>
          <line x1="6" y1="18" x2="6.01" y2="18"></line>
        </svg>
      ),
    },
    {
      step: "02",
      phase: "INTERFACE",
      title: "Interactive Frontend",
      accent: "var(--secondary-light)",
      accentA: "var(--secondaryA)",
      desc: "Building accessible, dynamic, and fluid UI experiences with React, Next.js, responsive layouts, and interactive micro-animations.",
      result: "Zero-Lag User Experiences",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      ),
    },
    {
      step: "03",
      phase: "BACKEND",
      title: "Serverless & APIs",
      accent: "var(--accent-light)",
      accentA: "var(--accentA)",
      desc: "Architecting resilient RESTful APIs, edge route handlers, Supabase/PostgreSQL integrations, and secure JWT authentication systems.",
      result: "Optimized High-Throughput APIs",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
          <line x1="4" y1="22" x2="4" y2="15"></line>
        </svg>
      ),
    },
    {
      step: "04",
      phase: "DELIVERY",
      title: "Edge Cloud & CI/CD",
      accent: "var(--emerald)",
      accentA: "var(--emeraldA)",
      desc: "Deploying production builds to serverless edge networks (Vercel, Netlify), implementing automated versioning, and continuous performance testing.",
      result: "Global Edge Low Latency",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 14 14"></polyline>
        </svg>
      ),
    },
  ];

  const handleMouseMove = (e, card) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = (y - centerY) / 12;
    const tiltY = (centerX - x) / 12;

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
    <section id="pipeline" className="section-wrapper section-alt">
      <div className="wrap">
        <div className="pipeline-header">
          <span className="label label-violet">DEVELOPMENT WORKFLOW</span>
          <h2 className="section-h2">
            Engineering <span className="grad-violet-cyan">Methodology</span>
          </h2>
          <p className="section-p">
            From algorithmic foundations to reactive frontend interfaces and cloud deployments, each project follows a structured engineering workflow.
          </p>
        </div>

        <div className="pipeline-grid-wrap" ref={containerRef}>
          {/* Animated Connecting Flow Track */}
          <div className="pipeline-flow">
            <div className="flow-pulse pulse-1"></div>
            <div className="flow-pulse pulse-2"></div>
            <div className="flow-pulse pulse-3"></div>
          </div>

          <div className="pipeline-grid">
            {stages.map((stage, idx) => (
              <div
                key={idx}
                className="id-card rv"
                style={{ "--stage": stage.accent, "--stageA": stage.accentA }}
                onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
              >
                <div className="id-card-top">
                  <span className="id-step">{stage.step}</span>
                  <span className="id-phase">{stage.phase}</span>
                </div>

                <div className="id-visual">
                  <div className="visual-glyph">{stage.icon}</div>
                </div>

                <div className="id-content">
                  <h3 className="id-title">{stage.title}</h3>
                  <p className="id-desc">{stage.desc}</p>
                  <div className="id-result">{stage.result}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .pipeline-header {
          margin-bottom: 3.5rem;
        }

        .pipeline-grid-wrap {
          position: relative;
          isolation: isolate;
        }

        .pipeline-flow {
          position: absolute;
          left: 5%;
          right: 5%;
          top: 38%;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--primary), var(--secondary), var(--accent), transparent);
          opacity: 0.45;
          z-index: 0;
        }

        .flow-pulse {
          position: absolute;
          top: -3px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--secondary-light);
          box-shadow: 0 0 14px var(--secondary-light), 0 0 28px var(--primary);
          animation: pipelineSignal 6s linear infinite;
        }

        .pulse-2 {
          animation-delay: -2s;
          background: var(--primary-light);
        }

        .pulse-3 {
          animation-delay: -4s;
          background: var(--accent-light);
        }

        @keyframes pipelineSignal {
          from { left: 0%; opacity: 0; }
          10%, 90% { opacity: 1; }
          to { left: 100%; opacity: 0; }
        }

        .pipeline-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          position: relative;
          z-index: 1;
        }

        .id-card {
          --tilt-x: 0deg;
          --tilt-y: 0deg;
          --spot-x: 50%;
          --spot-y: 10%;
          position: relative;
          border-radius: 20px;
          padding: 1.8rem 1.6rem;
          min-height: 380px;
          display: flex;
          flex-direction: column;
          background: linear-gradient(155deg, var(--surf), var(--bg2));
          border: 1px solid var(--bdr);
          transform: perspective(900px) rotateX(var(--tilt-x)) rotateY(var(--tilt-y));
          transform-style: preserve-3d;
          transition: transform 0.25s var(--ease), border-color 0.3s, box-shadow 0.35s;
          overflow: hidden;
        }

        .id-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(280px circle at var(--spot-x) var(--spot-y), var(--stageA), transparent 70%);
          opacity: 0.65;
          pointer-events: none;
          transition: opacity 0.3s;
        }

        .id-card:hover {
          transform: perspective(900px) rotateX(var(--tilt-x)) rotateY(var(--tilt-y)) translateY(-8px);
          border-color: var(--stage);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4), 0 0 35px var(--stageA);
        }

        .id-card > * {
          position: relative;
          z-index: 1;
        }

        .id-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
        }

        .id-step {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--stage);
          letter-spacing: 0.1em;
        }

        .id-phase {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--tx3);
          padding: 0.3rem 0.6rem;
          border-radius: 999px;
          border: 1px solid var(--bdr);
          background: rgba(0, 0, 0, 0.2);
        }

        .id-visual {
          height: 100px;
          display: grid;
          place-items: center;
          margin-bottom: 1.5rem;
          transform: translateZ(20px);
        }

        .visual-glyph {
          width: 60px;
          height: 60px;
          border-radius: 16px;
          border: 1px solid var(--bdr2);
          background: var(--stageA);
          color: var(--stage);
          display: grid;
          place-items: center;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
          transition: transform 0.3s var(--ease);
        }

        .visual-glyph svg {
          width: 28px;
          height: 28px;
        }

        .id-card:hover .visual-glyph {
          transform: scale(1.15) rotate(4deg);
        }

        .id-content {
          margin-top: auto;
          transform: translateZ(15px);
        }

        .id-title {
          font-family: var(--font-heading);
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 0.65rem;
          color: var(--tx);
        }

        .id-desc {
          font-size: 0.86rem;
          color: var(--tx2);
          line-height: 1.65;
          margin-bottom: 1.2rem;
        }

        .id-result {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding-top: 0.85rem;
          border-top: 1px solid var(--bdr);
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 600;
          color: var(--stage);
        }

        .id-result::before {
          content: '';
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--stage);
          box-shadow: 0 0 8px var(--stage);
        }

        @media (max-width: 1080px) {
          .pipeline-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .pipeline-flow {
            display: none;
          }
        }

        @media (max-width: 600px) {
          .pipeline-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
