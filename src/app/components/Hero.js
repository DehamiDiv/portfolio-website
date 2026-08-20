"use client";

import { useState, useEffect } from "react";
import ParticleCanvas from "./ParticleCanvas";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(120);

  const roles = [
    "IT Undergraduate",
    "Full-Stack Developer",
    "Cloud & API Architect",
    "Creative Problem Solver"
  ];

  useEffect(() => {
    const handleType = () => {
      const current = roles[wordIdx];
      if (!isDeleting) {
        setTypedText(current.substring(0, typedText.length + 1));
        setSpeed(80);
        if (typedText === current) {
          setSpeed(2200);
          setIsDeleting(true);
        }
      } else {
        setTypedText(current.substring(0, typedText.length - 1));
        setSpeed(40);
        if (typedText === "") {
          setIsDeleting(false);
          setWordIdx((prev) => (prev + 1) % roles.length);
          setSpeed(450);
        }
      }
    };

    const timer = setTimeout(handleType, speed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, wordIdx, speed]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navH = 76;
      const pos = el.getBoundingClientRect().top + window.scrollY - navH;
      window.scrollTo({ top: pos, behavior: "smooth" });
    }
  };

  const outerOrbits = [
    { name: "React", icon: "⚛️", color: "var(--secondary-light)" },
    { name: "Next.js", icon: "▲", color: "#ffffff" },
    { name: "Node.js", icon: "🟢", color: "var(--emerald)" },
    { name: "PostgreSQL", icon: "🐘", color: "var(--secondary-light)" },
    { name: "Supabase", icon: "⚡", color: "var(--emerald)" },
    { name: "Python", icon: "🐍", color: "var(--primary-light)" },
  ];

  const innerOrbits = [
    { name: "TypeScript", icon: "TS", color: "var(--secondary-light)" },
    { name: "MongoDB", icon: "🍃", color: "var(--emerald)" },
    { name: "Git", icon: "🐙", color: "var(--accent-light)" },
    { name: "Tailwind", icon: "🌊", color: "var(--secondary-light)" },
  ];

  return (
    <section id="home" className="hero-section">
      <ParticleCanvas />

      {/* Atmospheric Ambient Glows */}
      <div className="hero-glow-layer" />

      <div className="wrap hero-container">
        <div className="hero-left">
          <div className="hero-tag">
            <span className="tag-arrow">›</span> FULL-STACK & CLOUD DEVELOPER
          </div>

          <h1 className="hero-h1">
            Hi, I&apos;m <br />
            <span className="hero-name-gradient">Dehami Divyanjalee</span>
          </h1>

          <div className="hero-role-line">
            <span className="role-prefix">Building modern systems as an</span>
            <span className="role-typed">{typedText}</span>
            <span className="role-caret">|</span>
          </div>

          <p className="hero-desc">
            Passionate IT Undergraduate at the <strong>University of Moratuwa</strong> crafting high-performance, responsive web applications, robust APIs, and intelligent full-stack products with sleek UI/UX.
          </p>

          <div className="hero-pills">
            <span className="pill pill-cyan">⚛️ Next.js & React 19</span>
            <span className="pill pill-violet">⚡ Serverless & REST APIs</span>
            <span className="pill pill-rose">🗄️ PostgreSQL & Supabase</span>
            <span className="pill pill-emerald">🤖 Robotics & IoT Automation</span>
          </div>

          <div className="hero-actions">
            <button onClick={() => scrollTo("projects")} className="btn btn-primary">
              Explore Projects
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
            <button onClick={() => scrollTo("contact")} className="btn btn-ghost">
              Get In Touch
            </button>
          </div>

          {/* Social Quick Badges */}
          <div className="hero-social-strip">
            <a href="https://github.com/DehamiDiv" target="_blank" rel="noopener noreferrer" className="social-pill" title="GitHub">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/dehami-divyanjalee-a14883276" target="_blank" rel="noopener noreferrer" className="social-pill" title="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              <span>LinkedIn</span>
            </a>
            <a href="mailto:dehamidivyanjali166@gmail.com" className="social-pill" title="Email">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <span>Email</span>
            </a>
          </div>

          <div className="availability-badge">
            <span className="avail-dot"></span>
            OPEN FOR INTERNSHIP OPPORTUNITIES
          </div>
        </div>

        {/* Hero Right: 3D Orbiting Ecosystem & Profile Picture */}
        <div className="hero-right">
          <div className="hero-orbit-stage">
            {/* Spinning decorative ambient rings */}
            <div className="orbit-ring ring-outer"></div>
            <div className="orbit-ring ring-inner"></div>

            {/* Conic spinning border */}
            <div className="photo-conic-border"></div>

            {/* Central Profile Image */}
            <div className="photo-wrapper">
              <img
                src="/profile.jpg"
                alt="Dehami Divyanjalee"
                className="hero-avatar"
              />
            </div>

            {/* Outer Orbit Group */}
            <div className="orbit-track track-outer">
              {outerOrbits.map((item, idx) => {
                const angle = (idx * 360) / outerOrbits.length;
                return (
                  <div
                    key={idx}
                    className="orbit-slot"
                    style={{ "--angle": `${angle}deg` }}
                  >
                    <div className="orbit-chip-counter">
                      <div className="tech-chip" style={{ "--chip-c": item.color }}>
                        <span className="chip-icon">{item.icon}</span>
                        <span className="chip-label">{item.name}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Inner Orbit Group */}
            <div className="orbit-track track-inner">
              {innerOrbits.map((item, idx) => {
                const angle = (idx * 360) / innerOrbits.length;
                return (
                  <div
                    key={idx}
                    className="orbit-slot"
                    style={{ "--angle": `${angle}deg` }}
                  >
                    <div className="orbit-chip-counter-rev">
                      <div className="tech-chip chip-sm" style={{ "--chip-c": item.color }}>
                        <span className="chip-icon">{item.icon}</span>
                        <span className="chip-label">{item.name}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Hero Stats Bottom Strip */}
      <div className="hero-stats-bar">
        <div className="wrap stats-grid">
          <div className="stat-col">
            <span className="stat-num">3+</span>
            <span className="stat-label">Years Coding & Building</span>
          </div>
          <div className="stat-col">
            <span className="stat-num">10+</span>
            <span className="stat-label">Projects & Prototypes</span>
          </div>
          <div className="stat-col">
            <span className="stat-num">100%</span>
            <span className="stat-label">Commitment & Clean Code</span>
          </div>
          <div className="stat-col">
            <span className="stat-num">UoM</span>
            <span className="stat-label">Univ. of Moratuwa IT</span>
          </div>
        </div>
      </div>

      {/* Scroll Down Hint */}
      <div className="hero-scroll-hint" onClick={() => scrollTo("pipeline")}>
        <span>SCROLL</span>
        <div className="scroll-line"></div>
      </div>

      <style jsx>{`
        .hero-section {
          min-height: 100vh;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: calc(var(--navH) + 2rem) 0 clamp(6rem, 10vh, 8rem);
          overflow: hidden;
          background: var(--bg);
        }

        .hero-glow-layer {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
          background: var(--hero-atmosphere);
        }

        .hero-container {
          position: relative;
          z-index: 2;
          width: 100%;
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(380px, 0.85fr);
          gap: clamp(2.5rem, 5vw, 5rem);
          align-items: center;
        }

        .hero-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .hero-tag {
          font-family: var(--font-mono);
          font-size: 0.76rem;
          font-weight: 600;
          letter-spacing: 0.28em;
          color: var(--secondary-light);
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .tag-arrow {
          color: var(--primary-light);
          font-size: 1.1rem;
        }

        .hero-h1 {
          font-size: clamp(2.8rem, 5.8vw, 5.2rem);
          font-weight: 800;
          line-height: 1.04;
          margin-bottom: 1.5rem;
          letter-spacing: -0.03em;
        }

        .hero-name-gradient {
          background: linear-gradient(135deg, #c084fc 0%, #22d3ee 50%, #fb7185 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
          filter: drop-shadow(0 0 30px rgba(var(--violet-rgb), 0.35));
        }

        .hero-role-line {
          font-size: clamp(1.05rem, 2vw, 1.35rem);
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.45rem;
          min-height: 2rem;
        }

        .role-prefix {
          color: var(--tx3);
          font-weight: 400;
        }

        .role-typed {
          color: var(--tx);
          font-weight: 700;
          font-family: var(--font-heading);
          background: linear-gradient(135deg, var(--secondary-light), var(--primary-light));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .role-caret {
          color: var(--secondary);
          animation: blink 0.9s step-end infinite;
          font-weight: 300;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .hero-desc {
          font-size: 1.05rem;
          color: var(--tx2);
          line-height: 1.75;
          max-width: 580px;
          margin-bottom: 1.8rem;
        }

        .hero-desc strong {
          color: var(--tx);
          font-weight: 600;
        }

        .hero-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-bottom: 2rem;
        }

        .pill {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.42rem 0.95rem;
          border-radius: 30px;
          font-size: 0.76rem;
          font-family: var(--font-mono);
          font-weight: 500;
          border: 1px solid;
          transition: transform 0.2s var(--ease);
        }

        .pill:hover {
          transform: translateY(-2px);
        }

        .pill-cyan {
          border-color: var(--secondary);
          color: var(--secondary-light);
          background: var(--secondaryA);
        }

        .pill-violet {
          border-color: var(--primary);
          color: var(--primary-light);
          background: var(--primaryA);
        }

        .pill-rose {
          border-color: var(--accent);
          color: var(--accent-light);
          background: var(--accentA);
        }

        .pill-emerald {
          border-color: var(--emerald);
          color: var(--emerald);
          background: var(--emeraldA);
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.8rem;
          flex-wrap: wrap;
        }

        .hero-social-strip {
          display: flex;
          gap: 0.75rem;
          margin-bottom: 1.6rem;
        }

        .social-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.45rem 0.95rem;
          border-radius: 999px;
          border: 1px solid var(--bdr2);
          background: rgba(255, 255, 255, 0.03);
          color: var(--tx2);
          font-family: var(--font-mono);
          font-size: 0.74rem;
          font-weight: 600;
          transition: all 0.25s var(--ease);
        }

        .social-pill:hover {
          border-color: var(--secondary);
          background: var(--secondaryA);
          color: var(--secondary-light);
          transform: translateY(-2px);
          box-shadow: 0 0 15px var(--secondaryA);
        }

        .availability-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          letter-spacing: 0.1em;
          color: var(--tx2);
        }

        .avail-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--emerald);
          box-shadow: 0 0 0 4px var(--emeraldA);
          animation: pulse 1.8s infinite;
        }

        /* 3D Orbit Stage on the Right */
        .hero-right {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-orbit-stage {
          position: relative;
          width: min(100%, clamp(360px, 34vw, 480px));
          aspect-ratio: 1;
          display: grid;
          place-items: center;
        }

        .photo-wrapper {
          width: 52%;
          height: 52%;
          border-radius: 50%;
          position: relative;
          z-index: 6;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6), 0 0 40px rgba(var(--violet-rgb), 0.25);
          transition: transform 0.4s var(--ease);
        }

        .hero-orbit-stage:hover .photo-wrapper {
          transform: scale(1.04);
        }

        .hero-avatar {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
        }

        /* Conic Gradient Animated Border */
        .photo-conic-border {
          position: absolute;
          inset: 22.5%;
          border-radius: 50%;
          padding: 3px;
          background: conic-gradient(from 0deg, var(--primary), var(--secondary), var(--accent), var(--primary));
          z-index: 5;
          animation: borderSpin 8s linear infinite;
        }

        .photo-conic-border::after {
          content: '';
          position: absolute;
          inset: 3px;
          border-radius: 50%;
          background: var(--bg);
        }

        @keyframes borderSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .orbit-ring {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        .ring-outer {
          inset: 4%;
          border: 1px solid rgba(var(--violet-rgb), 0.25);
          box-shadow: inset 0 0 30px rgba(var(--violet-rgb), 0.05);
          animation: spin 32s linear infinite;
        }

        .ring-inner {
          inset: 16%;
          border: 1px dashed rgba(var(--cyan-rgb), 0.3);
          animation: spinRev 24s linear infinite;
        }

        .orbit-track {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          z-index: 7;
          pointer-events: none;
        }

        .track-outer {
          --radius: clamp(140px, 15vw, 195px);
          animation: spin 26s linear infinite;
        }

        .track-inner {
          --radius: clamp(90px, 10vw, 130px);
          animation: spinRev 18s linear infinite;
        }

        .hero-orbit-stage:hover .track-outer,
        .hero-orbit-stage:hover .track-inner,
        .hero-orbit-stage:hover .orbit-chip-counter,
        .hero-orbit-stage:hover .orbit-chip-counter-rev {
          animation-play-state: paused;
        }

        .orbit-slot {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 0;
          height: 0;
          transform: rotate(var(--angle)) translateX(var(--radius));
        }

        .orbit-chip-counter {
          position: absolute;
          left: -40px;
          top: -18px;
          transform: rotate(calc(var(--angle) * -1));
          animation: spinRev 26s linear infinite;
          pointer-events: auto;
        }

        .orbit-chip-counter-rev {
          position: absolute;
          left: -32px;
          top: -16px;
          transform: rotate(calc(var(--angle) * -1));
          animation: spin 18s linear infinite;
          pointer-events: auto;
        }

        .tech-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.4rem 0.75rem;
          border-radius: 12px;
          background: rgba(12, 19, 36, 0.88);
          border: 1px solid var(--bdr2);
          backdrop-filter: blur(14px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45), 0 0 15px rgba(var(--violet-rgb), 0.15);
          font-family: var(--font-mono);
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--chip-c, var(--tx));
          transition: transform 0.2s var(--ease), border-color 0.2s, box-shadow 0.2s;
          white-space: nowrap;
        }

        :global([data-theme="light"]) .tech-chip {
          background: rgba(255, 255, 255, 0.94);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
        }

        .tech-chip.chip-sm {
          padding: 0.3rem 0.6rem;
          font-size: 0.65rem;
        }

        .tech-chip:hover {
          transform: scale(1.18);
          border-color: var(--secondary-light);
          box-shadow: 0 0 20px var(--secondaryA);
        }

        .hero-stats-bar {
          position: relative;
          z-index: 2;
          margin-top: clamp(3rem, 6vw, 4.5rem);
          padding-top: 2rem;
          border-top: 1px solid var(--bdr);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }

        .stat-col {
          display: flex;
          align-items: baseline;
          gap: 0.75rem;
        }

        .stat-num {
          font-family: var(--font-heading);
          font-size: clamp(1.8rem, 3.2vw, 2.5rem);
          font-weight: 800;
          color: var(--primary-light);
          line-height: 1;
        }

        .stat-label {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--tx3);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          line-height: 1.4;
        }

        .hero-scroll-hint {
          position: absolute;
          bottom: 2rem;
          right: clamp(1.5rem, 5vw, 5rem);
          z-index: 3;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
        }

        .hero-scroll-hint span {
          font-family: var(--font-mono);
          font-size: 0.62rem;
          letter-spacing: 0.25em;
          color: var(--tx3);
          writing-mode: vertical-rl;
        }

        .scroll-line {
          width: 1.5px;
          height: 40px;
          background: linear-gradient(to bottom, var(--primary-light), transparent);
          animation: sPulse 2s infinite;
        }

        @keyframes sPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(0.6); }
          50% { opacity: 1; transform: scaleY(1); }
        }

        @media (max-width: 992px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 3.5rem;
          }
          .hero-left {
            align-items: center;
          }
          .hero-desc {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-pills {
            justify-content: center;
          }
          .hero-actions {
            justify-content: center;
          }
          .hero-social-strip {
            justify-content: center;
          }
          .hero-right {
            order: -1;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
        }

        @media (max-width: 540px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
          .hero-scroll-hint {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
