"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track scroll position to change background styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section based on scroll position
      const sections = ["home", "about", "skills", "projects", "timeline", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "timeline", label: "Journey" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // offset for sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`nav-wrapper ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <a href="#home" className="nav-logo" onClick={(e) => handleNavClick(e, "home")}>
          <span className="logo-text-gradient">&lt;DevPortfolio /&gt;</span>
        </a>

        {/* Desktop Menu */}
        <ul className="nav-menu">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`nav-link ${activeSection === link.id ? "active" : ""}`}
                onClick={(e) => handleNavClick(e, link.id)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className={`nav-toggle ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Mobile Dropdown Menu */}
        <div className={`nav-mobile-dropdown ${isOpen ? "open" : ""}`}>
          <ul className="nav-mobile-menu">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`nav-mobile-link ${activeSection === link.id ? "active" : ""}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx>{`
        .nav-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 80px;
          display: flex;
          align-items: center;
          z-index: 1000;
          transition: all 0.4s ease;
          border-bottom: 1px solid transparent;
        }

        .nav-wrapper.scrolled {
          height: 70px;
          background: rgba(8, 8, 15, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
        }

        .nav-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
        }

        .nav-logo {
          font-family: var(--font-display);
          font-size: 1.3rem;
          font-weight: 700;
          letter-spacing: -0.03em;
        }

        .logo-text-gradient {
          background: linear-gradient(135deg, #a78bfa 0%, #22d3ee 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nav-menu {
          display: flex;
          list-style: none;
          gap: 32px;
          align-items: center;
        }

        .nav-link {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-body);
          position: relative;
          padding: 6px 0;
          transition: color 0.3s ease;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #a78bfa, #22d3ee);
          transition: width 0.3s ease;
        }

        .nav-link:hover {
          color: var(--text-title);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-link.active {
          color: var(--color-secondary);
        }

        .nav-link.active::after {
          width: 100%;
          background: var(--color-secondary);
        }

        /* Mobile Hamburger Toggle */
        .nav-toggle {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 24px;
          height: 18px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 1001;
        }

        .hamburger-line {
          width: 100%;
          height: 2px;
          background-color: var(--text-title);
          border-radius: 2px;
          transition: all 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6);
        }

        .nav-toggle.open .hamburger-line:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }

        .nav-toggle.open .hamburger-line:nth-child(2) {
          opacity: 0;
        }

        .nav-toggle.open .hamburger-line:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
        }

        /* Mobile Dropdown Menu */
        .nav-mobile-dropdown {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background: var(--bg-secondary);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.4s ease-in-out;
          box-shadow: 0 10px 25px rgba(0,0,0,0.5);
        }

        .nav-mobile-dropdown.open {
          max-height: 400px;
        }

        .nav-mobile-menu {
          list-style: none;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .nav-mobile-link {
          font-size: 1.1rem;
          font-weight: 500;
          color: var(--text-body);
          display: block;
          padding: 8px 0;
          transition: color 0.3s ease;
        }

        .nav-mobile-link.active {
          color: var(--color-secondary);
          padding-left: 8px;
          border-left: 2px solid var(--color-secondary);
        }

        @media (max-width: 768px) {
          .nav-menu {
            display: none;
          }

          .nav-toggle {
            display: flex;
          }

          .nav-mobile-dropdown {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
}
