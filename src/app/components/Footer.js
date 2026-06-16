"use client";

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="footer-panel">
      <div className="container footer-container">
        <div className="footer-left">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} Dehami Divyanjalee. All rights reserved.
          </p>
          <p className="tech-badge">
            Designed & Developed using <span className="tech-gradient">Next.js & Supabase</span>
          </p>
        </div>

        <div className="footer-right">
          <div className="social-links-list">
            <a href="https://www.linkedin.com/in/dehami-divyanjalee-a14883276" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://github.com/DehamiDiv" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
          </div>

          <a href="#" onClick={scrollToTop} className="scroll-top-btn" aria-label="Scroll to top">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
          </a>
        </div>
      </div>

      <style jsx>{`
        .footer-panel {
          background-color: var(--bg-secondary);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding: 40px 24px;
        }

        .footer-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .footer-left {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .copyright-text {
          font-size: 0.95rem;
          color: var(--text-title);
          font-weight: 500;
        }

        .tech-badge {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .tech-gradient {
          font-weight: 600;
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .footer-right {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        /* Social Icons */
        .social-links-list {
          display: flex;
          gap: 12px;
        }

        .social-link {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          color: var(--text-body);
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: rgba(34, 211, 238, 0.1);
          color: var(--color-secondary);
          border-color: var(--color-secondary);
          transform: translateY(-2px);
        }

        /* Back to top */
        .scroll-top-btn {
          width: 38px;
          height: 38px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          color: var(--text-body);
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .scroll-top-btn:hover {
          background: rgba(167, 139, 250, 0.1);
          color: var(--color-primary);
          border-color: var(--color-primary);
          transform: translateY(-2px);
        }

        @media (max-width: 600px) {
          .footer-container {
            flex-direction: column;
            text-align: center;
            gap: 24px;
          }
          .footer-left {
            align-items: center;
          }
        }
      `}</style>
    </footer>
  );
}
