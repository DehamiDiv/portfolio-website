"use client";

import { useState } from "react";

export default function Projects() {
  const projectsData = [
    {
      title: "EduQuery - Academic Discussion Forum",
      category: "Web",
      description: "A real-time question and answer platform designed for university students to discuss courses, share PDF resources, and upvote answers. Features live notifications and markdown rendering.",
      tags: ["Next.js", "Supabase", "PostgreSQL", "Vanilla CSS"],
      github: "https://github.com",
      live: "https://vercel.app",
      gradient: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
      glyph: "</>"
    },
    {
      title: "FitSync - Gym Activity & Workout Analytics",
      category: "Web",
      description: "A MERN stack application mapping gym workouts, exercise sessions, and target milestones. Integrates interactive dashboard charts to graph body index changes over time.",
      tags: ["React.js", "Node.js", "Express", "MongoDB", "Chart.js"],
      github: "https://github.com",
      live: "https://vercel.app",
      gradient: "linear-gradient(135deg, #3b82f6 0%, #86efac 100%)",
      glyph: "📊"
    },
    {
      title: "API-Gate - Serverless Auth & Access Manager",
      category: "System",
      description: "A lightweight API security layer providing rate-limiting, dynamic token logging, role checking, and simple console administration. Runs on serverless edge functions.",
      tags: ["Next.js", "Supabase Auth", "Node.js", "Edge Caching"],
      github: "https://github.com",
      live: "https://vercel.app",
      gradient: "linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)",
      glyph: "🔒"
    }
  ];

  const [filter, setFilter] = useState("All");

  const filteredProjects = projectsData.filter(
    (project) => filter === "All" || project.category === filter
  );

  return (
    <section id="projects" className="projects-section">
      <div className="ambient-glow glow-2" style={{ bottom: "10%", left: "40%" }}></div>

      <div className="container">
        <div className="section-title-wrapper">
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            A selection of my recent academic, hobby, and collaborative engineering projects.
          </p>
        </div>

        {/* Categories */}
        <div className="projects-filter">
          {["All", "Web", "System"].map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? "active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat} Projects
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, idx) => (
            <div key={idx} className="project-card glass-card">
              {/* Premium CSS Visual Header */}
              <div 
                className="project-visual" 
                style={{ background: project.gradient }}
              >
                <div className="visual-overlay"></div>
                <div className="visual-icon">{project.glyph}</div>
                <div className="visual-wireframe">
                  <div className="wireframe-bar"></div>
                  <div className="wireframe-lines">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>

              {/* Card content */}
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link-btn github"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    Source Code
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link-btn live"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .projects-section {
          background-color: var(--bg-secondary);
        }

        /* Filter Tab buttons */
        .projects-filter {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 50px;
        }

        .filter-btn {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: var(--text-body);
          padding: 8px 20px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .filter-btn:hover {
          border-color: var(--color-secondary);
          background: rgba(34, 211, 238, 0.05);
          color: var(--text-title);
        }

        .filter-btn.active {
          background: var(--gradient-main);
          color: #000;
          border: none;
          box-shadow: var(--shadow-glow-cyan);
        }

        /* Grid */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 30px;
        }

        @media (max-width: 480px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }

        .project-card {
          padding: 0;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        /* Project Visual CSS header */
        .project-visual {
          height: 200px;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }

        .visual-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(8,8,15,0.1) 0%, var(--bg-card) 100%);
          z-index: 1;
        }

        .visual-icon {
          font-size: 3rem;
          z-index: 2;
          filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.4));
          animation: bounce-icon 3s ease-in-out infinite alternate;
        }

        .visual-wireframe {
          position: absolute;
          bottom: 20px;
          left: 20px;
          right: 20px;
          background: rgba(8, 8, 15, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          height: 60px;
          padding: 10px;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 6px;
          opacity: 0.7;
          backdrop-filter: blur(4px);
        }

        .wireframe-bar {
          height: 8px;
          width: 40%;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 4px;
        }

        .wireframe-lines {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .wireframe-lines span {
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
        }

        .wireframe-lines span:nth-child(1) { width: 90%; }
        .wireframe-lines span:nth-child(2) { width: 75%; }
        .wireframe-lines span:nth-child(3) { width: 50%; }

        @keyframes bounce-icon {
          from { transform: translateY(0); }
          to { transform: translateY(-8px); }
        }

        /* Project Info */
        .project-info {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .project-title {
          font-size: 1.25rem;
          margin-bottom: 12px;
          color: var(--text-title);
        }

        .project-description {
          font-size: 0.95rem;
          color: var(--text-body);
          line-height: 1.5;
          margin-bottom: 20px;
          flex-grow: 1;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 24px;
        }

        .project-tag {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--color-secondary);
          background: rgba(34, 211, 238, 0.08);
          border: 1px solid rgba(34, 211, 238, 0.15);
          padding: 4px 10px;
          border-radius: 50px;
        }

        .project-links {
          display: flex;
          gap: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 18px;
        }

        .project-link-btn {
          flex: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 10px;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .project-link-btn.github {
          background: rgba(255, 255, 255, 0.04);
          color: var(--text-title);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .project-link-btn.github:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .project-link-btn.live {
          background: rgba(167, 139, 250, 0.1);
          color: var(--color-primary);
          border: 1px solid rgba(167, 139, 250, 0.2);
        }

        .project-link-btn.live:hover {
          background: rgba(167, 139, 250, 0.15);
          border-color: var(--color-primary);
          box-shadow: var(--shadow-glow-purple);
        }
      `}</style>
    </section>
  );
}
