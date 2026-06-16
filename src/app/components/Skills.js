"use client";

import { useState } from "react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React / Next.js", level: 85 },
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "HTML5 / CSS3", level: 95 },
        { name: "Sleek Custom UI Styling", level: 85 },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js / Express", level: 80 },
        { name: "RESTful API Design", level: 85 },
        { name: "Serverless Route Handlers", level: 75 },
        { name: "Authentication (JWT / Supabase)", level: 80 },
      ]
    },
    {
      title: "Databases & Storage",
      skills: [
        { name: "Supabase (PostgreSQL)", level: 80 },
        { name: "MongoDB", level: 85 },
        { name: "SQL Query Optimization", level: 75 },
        { name: "Relational Modeling", level: 80 },
      ]
    },
    {
      title: "Tools & Workflows",
      skills: [
        { name: "Git & Version Control", level: 90 },
        { name: "GitHub Collaborative Dev", level: 85 },
        { name: "VS Code & Debugging", level: 90 },
        { name: "Hosting (Vercel / Netlify)", level: 85 },
      ]
    }
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <section id="skills" className="skills-section">
      <div className="ambient-glow glow-1" style={{ top: "40%", left: "-10%" }}></div>

      <div className="container">
        <div className="section-title-wrapper">
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of my technical stack and tools I use to build modern applications.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="skills-filter">
          <button 
            className={`filter-btn ${activeCategory === "All" ? "active" : ""}`}
            onClick={() => setActiveCategory("All")}
          >
            All Areas
          </button>
          {skillCategories.map((category, idx) => (
            <button
              key={idx}
              className={`filter-btn ${activeCategory === category.title ? "active" : ""}`}
              onClick={() => setActiveCategory(category.title)}
            >
              {category.title.split(" ")[0]} {/* Frontend, Backend, etc. */}
            </button>
          ))}
        </div>

        {/* Grid Container */}
        <div className="skills-grid">
          {skillCategories
            .filter(cat => activeCategory === "All" || cat.title === activeCategory)
            .map((category, index) => (
              <div key={index} className="skill-category-card glass-card">
                <h3 className="category-title">{category.title}</h3>
                <div className="skills-list">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                      <div className="skill-bar-bg">
                        <div 
                          className="skill-bar-fill"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>

      <style jsx>{`
        .skills-section {
          background-color: var(--bg-primary);
        }

        /* Skills Filter Buttons */
        .skills-filter {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 50px;
          flex-wrap: wrap;
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

        /* Skills Grid */
        .skills-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }

        @media (max-width: 992px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }

        .category-title {
          font-size: 1.3rem;
          margin-bottom: 24px;
          color: var(--text-title);
          border-left: 3px solid var(--color-primary);
          padding-left: 12px;
        }

        .skills-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .skill-item {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .skill-info {
          display: flex;
          justify-content: space-between;
          font-size: 0.95rem;
          font-weight: 500;
        }

        .skill-name {
          color: var(--text-title);
        }

        .skill-level {
          color: var(--color-secondary);
        }

        .skill-bar-bg {
          width: 100%;
          height: 6px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          overflow: hidden;
        }

        .skill-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
          border-radius: 10px;
          transition: width 1s cubic-bezier(0.1, 0.8, 0.2, 1);
        }

        .skill-category-card:hover .skill-bar-fill {
          filter: brightness(1.2);
          box-shadow: 0 0 10px var(--color-secondary);
        }
      `}</style>
    </section>
  );
}
