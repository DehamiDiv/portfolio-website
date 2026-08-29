"use client";

import { useState } from "react";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const projectsData = [
    {
      title: "CoreHead – Intelligent Blog Builder",
      category: "Web",
      categoryLabel: "FULL-STACK SAAS PRODUCT",
      description: "Architected a multi-tenant headless CMS platform featuring an intuitive visual builder, multi-site context switching, and custom domain routing. Engineered the AI layout generator (prompt-to-layout), dynamic CMS binding panel, and high-performance public page rendering engine with end-to-end authentication (JWT & Google OAuth) and RBAC.",
      tags: ["Next.js", "React", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "OpenAI API", "Tailwind CSS"],
      github: "https://github.com/DehamiDiv/corehead-frontend",
      github2: "https://github.com/DehamiDiv/CoreHead-Backend",
      live: "https://corehead-frontend-production.up.railway.app/",
      gradient: "linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)",
      glyph: "🏗️",
      image: "/corehead-cms.jpg",
      accent: "var(--secondary-light)"
    },
    {
      title: "AI-Powered Website Builder",
      category: "Web",
      categoryLabel: "FULL-STACK AI PRODUCT",
      description: "A production full-stack platform that transforms conversational prompts into responsive, live-previewed websites in real time. Built with sandboxed iframe previews, real-time code revisions, credit balance management, and a Stripe payment integration.",
      tags: ["React.js", "Node.js", "PostgreSQL", "Prisma ORM", "OpenRouter API", "Stripe Checkout"],
      github: "https://github.com/DehamiDiv/Web-site-builder",
      live: null,
      gradient: "linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)",
      glyph: "🤖",
      image: "/website-builder.jpg",
      accent: "var(--secondary-light)"
    },
    {
      title: "Full-Stack Blog Application",
      category: "Web",
      categoryLabel: "NEXT.JS WEB APPLICATION",
      description: "A high-performance Next.js blog engine with dynamic markdown rendering, server-side API route handlers, MongoDB document storage, and a minimalist responsive reader interface.",
      tags: ["Next.js", "React.js", "MongoDB", "Tailwind CSS", "Axios", "Vercel"],
      github: "https://github.com/DehamiDiv/blog-app",
      live: "https://blog-app-lyart-sigma.vercel.app/",
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
      glyph: "📝",
      image: "/blog-app.jpg",
      accent: "var(--primary-light)"
    },
    {
      title: "Tasker - Smart Rail Delivery Robot",
      category: "System",
      categoryLabel: "ROBOTICS & IOT HARDWARE",
      description: "An automated rail-guided robotic transport vehicle for garment factories. Features RFID worker authentication, electromagnetic cargo compartments, ESP32 Wi-Fi supervisor web integration, and ultrasonic collision prevention.",
      tags: ["Arduino Mega", "ESP32 Wi-Fi", "Node.js", "React.js", "C++", "EasyEDA PCB"],
      github: "https://github.com/DehamiDiv",
      live: null,
      gradient: "linear-gradient(135deg, #06b6d4 0%, #10b981 100%)",
      glyph: "⚙️",
      image: "/tasker.jpg",
      accent: "var(--emerald)"
    },
    {
      title: "EduQuery - Academic Discussion Forum",
      category: "Web",
      categoryLabel: "STUDENT COLLABORATION",
      description: "A real-time academic discussion platform designed for university students to exchange course materials, discuss algorithm solutions, share resources, and upvote peer contributions.",
      tags: ["Next.js", "Supabase DB", "PostgreSQL", "Vanilla CSS", "Edge Functions"],
      github: "https://github.com/DehamiDiv",
      live: null,
      gradient: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
      glyph: "💬",
      accent: "var(--primary-light)"
    },
    {
      title: "FitSync - Workout & Milestone Analytics",
      category: "Web",
      categoryLabel: "MERN ANALYTICS DASHBOARD",
      description: "A MERN stack workout logger and body analytics portal. Features interactive chart visualizations, milestone progression tracking, and session goal planning.",
      tags: ["React.js", "Node.js", "Express", "MongoDB", "Chart.js"],
      github: "https://github.com/DehamiDiv",
      live: null,
      gradient: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
      glyph: "📊",
      accent: "var(--secondary-light)"
    },
    {
      title: "API-Gate - Serverless Auth & Access Manager",
      category: "System",
      categoryLabel: "CLOUD SECURITY LAYER",
      description: "A lightweight API proxy layer with rate-limiting middleware, token verification, route logging, and security role validation running on serverless edge functions.",
      tags: ["Next.js Edge", "Supabase Auth", "Node.js", "Edge Caching"],
      github: "https://github.com/DehamiDiv",
      live: null,
      gradient: "linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)",
      glyph: "🔒",
      accent: "var(--accent-light)"
    }
  ];

  const categories = ["All", "Web", "System"];

  const filteredProjects = projectsData.filter(
    (p) => filter === "All" || p.category === filter
  );

  return (
    <section id="projects" className="section-wrapper">
      <div className="wrap">
        <div className="projects-head">
          <div>
            <span className="label label-cyan">FEATURED WORK</span>
            <h2 className="section-h2">
              Selected <span className="grad-violet-cyan">Engineering Projects</span>
            </h2>
          </div>
          <p className="section-p">
            A showcase of production web applications, cloud systems, and microcontroller robotics engineered with precision.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? "active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat === "All" ? "All Projects" : cat === "Web" ? "Web Applications" : "Systems & Robotics"}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, idx) => (
            <div key={idx} className="project-card rv">
              {/* Visual Preview Header */}
              <div className="project-preview" style={{ background: project.gradient }}>
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-cover-img"
                  />
                ) : (
                  <div className="project-wireframe-box">
                    <span className="wireframe-glyph">{project.glyph}</span>
                    <div className="wireframe-lines">
                      <div className="line l1"></div>
                      <div className="line l2"></div>
                      <div className="line l3"></div>
                    </div>
                  </div>
                )}
                <div className="preview-overlay"></div>
              </div>

              {/* Card Details */}
              <div className="project-body">
                <div className="project-cat-kicker" style={{ color: project.accent }}>
                  {project.categoryLabel}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="p-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-footer">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-btn p-btn-gh"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                      {project.github2 ? "Frontend" : "Source Code"}
                    </a>
                  )}

                  {project.github2 && (
                    <a
                      href={project.github2}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-btn p-btn-gh"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                      Backend
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-btn p-btn-live"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .projects-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 2rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }

        .filter-bar {
          display: flex;
          gap: 0.75rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 0.55rem 1.3rem;
          border-radius: 999px;
          background: var(--surf);
          border: 1px solid var(--bdr);
          color: var(--tx2);
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.25s var(--ease);
        }

        .filter-btn:hover {
          border-color: var(--secondary);
          color: var(--tx);
        }

        .filter-btn.active {
          background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
          color: #ffffff;
          border-color: var(--secondary-light);
          font-weight: 700;
          box-shadow: 0 4px 20px rgba(var(--violet-rgb), 0.45);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
          gap: 2rem;
        }

        .project-card {
          border-radius: 20px;
          border: 1px solid var(--bdr);
          background: var(--surf);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow);
          transition: transform 0.35s var(--ease), border-color 0.35s, box-shadow 0.35s;
        }

        .project-card:hover {
          transform: translateY(-8px);
          border-color: var(--secondary-light);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.45), 0 0 30px var(--secondaryA);
        }

        .project-preview {
          position: relative;
          height: 220px;
          overflow: hidden;
          display: grid;
          place-items: center;
        }

        .project-cover-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          inset: 0;
          transition: transform 0.5s var(--ease);
        }

        .project-card:hover .project-cover-img {
          transform: scale(1.06);
        }

        .preview-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 40%, var(--surf) 100%);
          pointer-events: none;
        }

        .project-wireframe-box {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .wireframe-glyph {
          font-size: 3rem;
          filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.3));
        }

        .wireframe-lines {
          display: flex;
          flex-direction: column;
          gap: 4px;
          width: 120px;
        }

        .wireframe-lines .line {
          height: 4px;
          border-radius: 2px;
          background: rgba(255, 255, 255, 0.3);
        }
        .wireframe-lines .l1 { width: 100%; }
        .wireframe-lines .l2 { width: 75%; }
        .wireframe-lines .l3 { width: 50%; }

        .project-body {
          padding: 1.8rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .project-cat-kicker {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }

        .project-title {
          font-family: var(--font-heading);
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--tx);
          margin-bottom: 0.75rem;
        }

        .project-desc {
          font-size: 0.88rem;
          color: var(--tx2);
          line-height: 1.65;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
          margin-bottom: 1.6rem;
        }

        .p-tag {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          padding: 0.3rem 0.65rem;
          border-radius: 6px;
          background: var(--surf2);
          border: 1px solid var(--bdr);
          color: var(--tx2);
        }

        .project-footer {
          display: flex;
          gap: 0.8rem;
          padding-top: 1.2rem;
          border-top: 1px solid var(--bdr);
        }

        .p-btn {
          flex: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.65rem 1rem;
          border-radius: 10px;
          font-family: var(--font-mono);
          font-size: 0.76rem;
          font-weight: 600;
          transition: all 0.25s var(--ease);
        }

        .p-btn-gh {
          background: var(--surf2);
          border: 1px solid var(--bdr2);
          color: var(--tx);
        }

        .p-btn-gh:hover {
          border-color: var(--primary-light);
          color: var(--primary-light);
          background: var(--primaryA);
          transform: translateY(-2px);
        }

        .p-btn-live {
          background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
          border: none;
          color: #ffffff;
          box-shadow: 0 4px 15px rgba(var(--violet-rgb), 0.35);
        }

        .p-btn-live:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(var(--violet-rgb), 0.5);
          filter: brightness(1.1);
        }

        @media (max-width: 600px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
