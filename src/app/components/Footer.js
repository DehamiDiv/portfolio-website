"use client";

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer-wrapper">
      <div className="wrap footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="f-badge">DD</span>
            <span className="f-name">DEHAMI DIVYANJALEE</span>
          </div>
          <p className="footer-tagline">
            IT Undergraduate & Full Stack Developer · University of Moratuwa
          </p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#pipeline">Workflow</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#journey">Journey</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Dehami Divyanjalee. Built with Next.js, React 19 & Vanilla CSS.
          </p>

          <div className="footer-actions">
            <div className="footer-socials">
              <a
                href="https://github.com/DehamiDiv"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
              <a
                href="https://www.linkedin.com/in/dehami-divyanjalee-a14883276"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a
                href="mailto:dehamidivyanjali166@gmail.com"
                aria-label="Email"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="scroll-top-btn"
              aria-label="Scroll back to top"
              title="Back to Top"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-wrapper {
          background: var(--bg);
          border-top: 1px solid var(--bdr);
          padding: 4rem 0 2.5rem;
          position: relative;
          z-index: 10;
        }

        .footer-inner {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .f-badge {
          width: 32px;
          height: 32px;
          border-radius: 9px;
          background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
          color: #ffffff;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 0.85rem;
          display: grid;
          place-items: center;
          box-shadow: 0 4px 14px rgba(var(--violet-rgb), 0.35);
        }

        .f-name {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          color: var(--tx);
        }

        .footer-tagline {
          font-size: 0.88rem;
          color: var(--tx3);
        }

        .footer-links {
          display: flex;
          flex-wrap: wrap;
          gap: 1.8rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid var(--bdr);
        }

        .footer-links a {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--tx2);
          transition: color 0.25s var(--ease);
        }

        .footer-links a:hover {
          color: var(--secondary-light);
        }

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .copyright {
          font-size: 0.82rem;
          color: var(--tx3);
        }

        .footer-actions {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .footer-socials {
          display: flex;
          gap: 0.75rem;
        }

        .footer-socials a {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid var(--bdr);
          background: var(--surf);
          color: var(--tx2);
          display: grid;
          place-items: center;
          transition: all 0.25s var(--ease);
        }

        .footer-socials a:hover {
          border-color: var(--secondary-light);
          color: var(--secondary-light);
          background: var(--secondaryA);
          transform: translateY(-2px);
          box-shadow: 0 0 15px var(--secondaryA);
        }

        .scroll-top-btn {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          border: 1px solid var(--bdr2);
          background: var(--surf2);
          color: var(--secondary-light);
          cursor: pointer;
          display: grid;
          place-items: center;
          transition: all 0.25s var(--ease);
        }

        .scroll-top-btn:hover {
          background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
          color: #ffffff;
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(var(--violet-rgb), 0.45);
        }

        @media (max-width: 768px) {
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </footer>
  );
}
