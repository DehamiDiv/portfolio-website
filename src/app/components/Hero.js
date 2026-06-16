"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ["IT Undergraduate", "Full Stack Developer", "Tech Enthusiast"];

  useEffect(() => {
    const handleType = () => {
      const currentWord = words[wordIndex];
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));
        setTypingSpeed(100);

        if (text === currentWord) {
          // Pause at full word
          setTypingSpeed(2000);
          setIsDeleting(true);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));
        setTypingSpeed(50);

        if (text === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
          setTypingSpeed(500); // pause before starting next word
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, typingSpeed]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Background ambient lighting blobs */}
      <div className="ambient-glow glow-1"></div>
      <div className="ambient-glow glow-2"></div>
      <div className="grid-overlay"></div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Open for Internship Opportunities
          </div>
          
          <h1 className="hero-title">
            Hi, I&apos;m <span className="gradient-text hero-name">Dehami Divyanjalee</span>
          </h1>
          
          <h2 className="hero-subtitle">
            I am a <span className="typed-text">{text}</span>
            <span className="cursor">|</span>
          </h2>
          
          <p className="hero-description">
            Undergraduate IT student passionate about building highly interactive, modern, and robust web applications. Focus areas include full-stack development, cloud computing, and databases.
          </p>
          
          <div className="hero-ctas">
            <button onClick={() => scrollToSection("projects")} className="btn btn-primary">
              View My Work
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
            <button onClick={() => scrollToSection("contact")} className="btn btn-secondary">
              Let&apos;s Connect
            </button>
          </div>
        </div>

        <div className="hero-graphic">
          <div className="graphic-sphere-wrapper">
            <div className="graphic-ring ring-1"></div>
            <div className="graphic-ring ring-2"></div>
            <div className="profile-image-wrapper">
              <img
                src="/profile.jpg"
                alt="Dehami Divyanjalee"
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          background-color: var(--bg-primary);
          overflow: hidden;
          padding-top: 120px;
        }

        .grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
          background-size: 50px 50px;
          pointer-events: none;
          z-index: 1;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          align-items: center;
          gap: 40px;
          width: 100%;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(167, 139, 250, 0.1);
          border: 1px solid rgba(167, 139, 250, 0.2);
          color: var(--color-primary);
          padding: 10px 20px;
          border-radius: 50px;
          font-size: 0.95rem;
          font-weight: 600;
          margin-bottom: 28px;
          letter-spacing: 0.02em;
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #10b981;
          animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(0.9); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.5; }
          100% { transform: scale(0.9); opacity: 1; }
        }

        .hero-title {
          font-size: 4.2rem;
          line-height: 1.08;
          margin-bottom: 20px;
          font-weight: 800;
        }

        .hero-name {
          font-weight: 900;
        }

        .hero-subtitle {
          font-size: 2.2rem;
          font-weight: 500;
          margin-bottom: 28px;
          color: #f1f5f9;
          height: 55px; /* Prevent text shifting when changing words */
        }

        .typed-text {
          color: var(--color-secondary);
          font-weight: 600;
        }

        .cursor {
          color: var(--color-secondary);
          animation: blink 0.75s step-end infinite;
          margin-left: 4px;
        }

        @keyframes blink {
          from, to { color: transparent }
          50% { color: var(--color-secondary); }
        }

        .hero-description {
          font-size: 1.2rem;
          color: var(--text-body);
          line-height: 1.7;
          max-width: 580px;
          margin-bottom: 40px;
        }

        .hero-ctas {
          display: flex;
          gap: 16px;
        }

        /* Hero Visual Graphic */
        .hero-graphic {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .graphic-sphere-wrapper {
          position: relative;
          width: 440px;
          height: 440px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .profile-image-wrapper {
          width: 340px;
          height: 340px;
          border-radius: 50%;
          background: linear-gradient(135deg, #7c3aed 0%, #00e5ff 50%, #a78bfa 100%);
          padding: 6px;
          position: relative;
          box-shadow: 
            0 0 50px rgba(124, 58, 237, 0.4),
            0 0 100px rgba(34, 211, 238, 0.25);
          animation: float-graphic 6s ease-in-out infinite;
        }

        .profile-image {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          object-position: center top;
          display: block;
        }

        .graphic-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px dashed rgba(255, 255, 255, 0.15);
          animation: rotate-ring 20s linear infinite;
        }

        .ring-1 {
          width: 420px;
          height: 420px;
        }

        .ring-2 {
          width: 370px;
          height: 370px;
          border-style: dotted;
          animation-direction: reverse;
          animation-duration: 15s;
        }

        @keyframes float-graphic {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        @keyframes rotate-ring {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @media (max-width: 992px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 60px;
          }
          .hero-content {
            align-items: center;
          }
          .hero-title {
            font-size: 3.2rem;
          }
          .hero-graphic {
            order: -1; /* Place visual above content on small screens */
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2.6rem;
          }
          .hero-subtitle {
            font-size: 1.6rem;
            height: 45px;
          }
          .hero-ctas {
            flex-direction: column;
            width: 100%;
          }
          .hero-ctas button {
            width: 100%;
            justify-content: center;
          }
          .graphic-sphere-wrapper {
            width: 320px;
            height: 320px;
          }
          .profile-image-wrapper {
            width: 260px;
            height: 260px;
          }
          .ring-1 { width: 300px; height: 300px; }
          .ring-2 { width: 260px; height: 260px; }
        }
      `}</style>
    </section>
  );
}
