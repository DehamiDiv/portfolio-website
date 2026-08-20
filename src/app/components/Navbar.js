"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const currentTheme = document.documentElement.dataset.theme || "dark";
    setTheme(currentTheme);

    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolledPercent = (winScroll / height) * 100;
      const progEl = document.getElementById("scrollProg");
      if (progEl) {
        progEl.style.width = `${scrolledPercent}%`;
      }

      const sections = ["home", "pipeline", "about", "skills", "projects", "journey", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    try {
      localStorage.setItem("de_theme", nextTheme);
    } catch (e) {
      // ignore
    }
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "pipeline", label: "Workflow" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "journey", label: "Journey" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const navH = 76;
      const elementPosition = target.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navH;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  return (
    <>
      <div id="scrollProg" />
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="wrap nav-inner">
          <a href="#home" className="nav-logo" onClick={(e) => handleNavClick(e, "home")}>
            <span className="logo-badge">DD</span>
            <span className="logo-title">DEHAMI<span className="dot">.</span></span>
          </a>

          {/* Desktop Nav Links */}
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={activeSection === link.id ? "active" : ""}
                  onClick={(e) => handleNavClick(e, link.id)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Actions */}
          <div className="nav-actions">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label="Toggle theme"
              title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              <div className="toggle-thumb">
                {theme === "dark" ? (
                  <span className="sun-icon">☀</span>
                ) : (
                  <span className="moon-icon">☾</span>
                )}
              </div>
            </button>

            {/* Mobile Hamburger */}
            <button
              className={`hamburger ${isOpen ? "open" : ""}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
          <div className="mobile-menu-inner">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`mobile-link ${activeSection === link.id ? "active" : ""}`}
                onClick={(e) => handleNavClick(e, link.id)}
              >
                <span className="link-arrow">›</span>
                {link.label}
              </a>
            ))}
            <div className="mobile-socials">
              <a href="https://github.com/DehamiDiv" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/dehami-divyanjalee-a14883276" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="mailto:dehamidivyanjali166@gmail.com">Email</a>
            </div>
          </div>
        </div>

        <style jsx>{`
          .navbar {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            height: var(--navH);
            z-index: 200;
            display: flex;
            align-items: center;
            background: rgba(3, 7, 18, 0.82);
            backdrop-filter: blur(28px) saturate(180%);
            -webkit-backdrop-filter: blur(28px) saturate(180%);
            border-bottom: 1px solid var(--bdr);
            transition: all 0.4s var(--ease);
          }

          :global([data-theme="light"]) .navbar {
            background: rgba(248, 250, 252, 0.88);
          }

          .navbar.scrolled {
            height: 64px;
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.35);
          }

          .nav-inner {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .nav-logo {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            cursor: pointer;
          }

          .logo-badge {
            width: 36px;
            height: 36px;
            border-radius: 10px;
            background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
            color: #ffffff;
            font-family: var(--font-heading);
            font-weight: 800;
            font-size: 0.95rem;
            display: grid;
            place-items: center;
            box-shadow: 0 4px 16px rgba(var(--violet-rgb), 0.45);
          }

          .logo-title {
            font-family: var(--font-heading);
            font-size: 1.25rem;
            font-weight: 800;
            letter-spacing: 0.04em;
            color: var(--tx);
          }

          .logo-title .dot {
            color: var(--secondary-light);
          }

          .nav-links {
            display: flex;
            align-items: center;
            gap: 2.2rem;
          }

          .nav-links a {
            font-family: var(--font-mono);
            font-size: 0.78rem;
            font-weight: 500;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: var(--tx2);
            transition: color 0.25s var(--ease);
            position: relative;
            padding: 4px 0;
          }

          .nav-links a::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, var(--primary), var(--secondary));
            border-radius: 2px;
            transform: scaleX(0);
            transform-origin: right;
            transition: transform 0.3s var(--ease);
          }

          .nav-links a:hover,
          .nav-links a.active {
            color: var(--tx);
          }

          .nav-links a.active {
            color: var(--secondary-light);
          }

          .nav-links a:hover::after,
          .nav-links a.active::after {
            transform: scaleX(1);
            transform-origin: left;
          }

          .nav-actions {
            display: flex;
            align-items: center;
            gap: 1.2rem;
          }

          .theme-toggle {
            width: 48px;
            height: 26px;
            border-radius: 13px;
            background: var(--surf2);
            border: 1px solid var(--bdr2);
            cursor: pointer;
            position: relative;
            display: flex;
            align-items: center;
            padding: 2px;
            transition: all 0.3s var(--ease);
          }

          .theme-toggle:hover {
            border-color: var(--secondary);
            box-shadow: 0 0 12px var(--secondaryA);
          }

          .toggle-thumb {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.35s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            transform: ${theme === "light" ? "translateX(22px)" : "translateX(0)"};
          }

          .sun-icon, .moon-icon {
            font-size: 11px;
            color: #ffffff;
            line-height: 1;
          }

          .hamburger {
            display: none;
            flex-direction: column;
            justify-content: center;
            gap: 5px;
            width: 32px;
            height: 32px;
            background: none;
            border: none;
            cursor: pointer;
            padding: 4px;
          }

          .hamburger span {
            display: block;
            width: 100%;
            height: 2px;
            background: var(--tx);
            border-radius: 2px;
            transition: all 0.3s var(--ease);
          }

          .hamburger.open span:nth-child(1) {
            transform: translateY(7px) rotate(45deg);
          }
          .hamburger.open span:nth-child(2) {
            opacity: 0;
          }
          .hamburger.open span:nth-child(3) {
            transform: translateY(-7px) rotate(-45deg);
          }

          .mobile-menu {
            display: none;
            position: fixed;
            top: var(--navH);
            left: 0;
            right: 0;
            background: var(--surf);
            border-bottom: 1px solid var(--bdr);
            padding: 1.5rem 2rem 2rem;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.4s var(--ease), padding 0.4s var(--ease);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
          }

          .mobile-menu.open {
            max-height: 480px;
          }

          .mobile-menu-inner {
            display: flex;
            flex-direction: column;
            gap: 1.2rem;
          }

          .mobile-link {
            font-family: var(--font-heading);
            font-size: 1.3rem;
            font-weight: 700;
            color: var(--tx2);
            display: flex;
            align-items: center;
            gap: 0.6rem;
            transition: color 0.2s;
          }

          .mobile-link.active, .mobile-link:hover {
            color: var(--secondary-light);
          }

          .link-arrow {
            color: var(--primary-light);
            font-family: var(--font-mono);
          }

          .mobile-socials {
            display: flex;
            gap: 1.2rem;
            margin-top: 1rem;
            padding-top: 1rem;
            border-top: 1px solid var(--bdr);
            font-family: var(--font-mono);
            font-size: 0.8rem;
            color: var(--secondary-light);
          }

          @media (max-width: 900px) {
            .nav-links {
              display: none;
            }
            .hamburger {
              display: flex;
            }
            .mobile-menu {
              display: block;
            }
          }
        `}</style>
      </nav>
    </>
  );
}
