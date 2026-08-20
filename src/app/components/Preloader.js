"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1100);

    return () => clearTimeout(timer);
  }, []);

  if (loaded) return null;

  return (
    <div className={`preloader-overlay ${loaded ? "done" : ""}`}>
      <div className="preloader-content">
        <div className="preloader-logo">
          <span>DD</span>
        </div>
        <div className="preloader-text">DEHAMI DIVYANJALEE</div>
        <div className="preloader-bar">
          <div className="preloader-bar-fill"></div>
        </div>
      </div>

      <style jsx>{`
        .preloader-overlay {
          position: fixed;
          inset: 0;
          background: var(--bg);
          z-index: 999999;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 1.5rem;
          transition: opacity 0.6s var(--ease), visibility 0.6s;
          pointer-events: all;
        }

        .preloader-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .preloader-logo {
          font-family: var(--font-heading);
          font-size: 3.5rem;
          font-weight: 900;
          letter-spacing: -0.04em;
          background: linear-gradient(135deg, var(--primary-light) 0%, var(--secondary-light) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 20px rgba(var(--violet-rgb), 0.5));
          animation: plPulse 1.2s ease-in-out infinite;
        }

        .preloader-text {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          letter-spacing: 0.35em;
          color: var(--tx3);
          text-transform: uppercase;
        }

        .preloader-bar {
          width: 150px;
          height: 2.5px;
          background: var(--bdr);
          border-radius: 3px;
          overflow: hidden;
          position: relative;
          margin-top: 0.5rem;
        }

        .preloader-bar-fill {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 45%;
          background: linear-gradient(90deg, var(--primary), var(--secondary), var(--accent));
          border-radius: 3px;
          animation: plSlide 1.1s ease-in-out infinite;
        }

        @keyframes plPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.55; transform: scale(0.96); }
        }

        @keyframes plSlide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(350%); }
        }
      `}</style>
    </div>
  );
}
