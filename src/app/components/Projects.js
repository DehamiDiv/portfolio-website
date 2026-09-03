"use client";

import { useState, useEffect } from "react";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [copiedBullets, setCopiedBullets] = useState(false);

  // Close modal on Escape key press and handle body scroll lock
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  const copyBulletPoints = (bullets) => {
    if (!bullets || bullets.length === 0) return;
    const text = bullets.map((b) => `• ${b}`).join("\n");
    navigator.clipboard.writeText(text);
    setCopiedBullets(true);
    setTimeout(() => setCopiedBullets(false), 2400);
  };

  const projectsData = [
    {
      id: "lakeesha-pos",
      title: "Lakeesha Super Center – Modern POS & Inventory System",
      category: "Web",
      categoryLabel: "FULL-STACK ENTERPRISE POS & RETAIL",
      description: "A robust, full-stack POS and inventory management web application built with React (Vite), Spring Boot 3, and MySQL. It features real-time billing, automated inventory tracking, low-stock alerts, role-based access control (Admin & Cashier), and comprehensive sales analytics dashboards with secure JWT authentication.",
      tags: ["React 19", "Vite", "Spring Boot 3", "Java 23", "MySQL 8.0", "Spring Security", "JWT", "Swagger UI", "RESTful API"],
      github: "https://github.com/DehamiDiv/lakeesha-pos-system-",
      live: "https://lakeesha-pos-system.vercel.app/",
      gradient: "linear-gradient(135deg, #059669 0%, #0284c7 100%)",
      glyph: "🛒",
      image: "/lakeesha-pos.jpg",
      accent: "var(--emerald)",
      details: {
        subtitle: "Retail POS & Inventory Management System",
        overview: "Lakeesha Super Center POS is a secure, high-performance retail management web application designed to streamline cashier checkouts, catalog management, and stock auditing in real time. It bridges a modern, responsive user interface with an enterprise-grade backend architecture.",
        features: [
          {
            icon: "⚡",
            title: "High-Speed POS Terminal",
            desc: "Interactive checkout screen with instant product search, barcode-friendly workflows, cart calculations, discount handling, and receipt generation."
          },
          {
            icon: "📦",
            title: "Inventory & Stock Control",
            desc: "Real-time stock decrementing upon sale, automated low-stock warnings, and audit logging for stock replenishment."
          },
          {
            icon: "🔐",
            title: "Role-Based Access Control (RBAC)",
            desc: "Multi-tier user management (Admin/Manager & Cashier) secured with Spring Security and JWT authentication."
          },
          {
            icon: "📊",
            title: "Business Analytics & Dashboard",
            desc: "Real-time metrics on total revenue (LKR), gross profits, transaction counts, and visual sales performance charts."
          },
          {
            icon: "🏷️",
            title: "Product & Category Management",
            desc: "Complete CRUD operations for inventory items, categories, pricing, and stock thresholds."
          },
          {
            icon: "📖",
            title: "API Documentation",
            desc: "Fully documented RESTful endpoints powered by Swagger UI / OpenAPI."
          }
        ],
        techStack: [
          {
            category: "Frontend",
            items: ["React 19", "Vite", "React Router 7", "Lucide Icons", "Modern Responsive CSS"]
          },
          {
            category: "Backend",
            items: ["Java 23", "Spring Boot 3.3.4", "Spring Data JPA", "Spring Security", "JWT"]
          },
          {
            category: "Database",
            items: ["MySQL 8.0"]
          },
          {
            category: "Tools & API Docs",
            items: ["Maven", "Swagger UI / Springdoc OpenAPI", "Postman"]
          }
        ],
        highlights: [
          "Architected and developed a full-stack POS and Inventory Management system using React 19, Spring Boot 3, and MySQL.",
          "Implemented secure authentication & authorization with Spring Security and JWT, enforcing role-based permissions (Admin vs. Cashier).",
          "Engineered a fast checkout terminal & real-time inventory tracking module that prevents stock discrepancies and triggers low-stock alerts.",
          "Designed interactive analytics dashboards to monitor real-time revenue, profit margins, and daily transaction metrics.",
          "Documented and tested RESTful APIs utilizing Swagger UI / OpenAPI and Postman."
        ]
      }
    },
    {
      id: "corehead-cms",
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
      accent: "var(--secondary-light)",
      details: {
        subtitle: "Multi-Tenant Visual Headless CMS & Layout Engine",
        overview: "CoreHead is a modern, developer-friendly multi-tenant CMS designed to streamline dynamic website building. It combines visual component editing with AI-assisted layout generation, instant publishing, and custom domain routing.",
        features: [
          {
            icon: "🤖",
            title: "AI Prompt-to-Layout Generator",
            desc: "Generates structured, responsive component layouts instantly from conversational natural language prompts."
          },
          {
            icon: "🏢",
            title: "Multi-Tenant Architecture",
            desc: "Complete tenant isolation with multi-site switching, dynamic database routing, and role-based permissions."
          },
          {
            icon: "🎨",
            title: "Visual Component Builder",
            desc: "Drag-and-drop live builder with custom styles, real-time preview, and dynamic data-binding capabilities."
          },
          {
            icon: "🔑",
            title: "OAuth & Secure Authentication",
            desc: "End-to-end authentication supporting JWT, refresh tokens, and Google OAuth 2.0 with granular user permissions."
          }
        ],
        techStack: [
          {
            category: "Frontend",
            items: ["Next.js 14", "React", "TypeScript", "Tailwind CSS"]
          },
          {
            category: "Backend",
            items: ["Node.js", "Express.js", "OpenAI API", "JWT & OAuth"]
          },
          {
            category: "Database & ORM",
            items: ["PostgreSQL", "Prisma ORM"]
          },
          {
            category: "Deployment",
            items: ["Railway", "Vercel"]
          }
        ],
        highlights: [
          "Engineered a multi-tenant site routing architecture supporting independent subdomains.",
          "Integrated OpenAI layout synthesis to generate production-ready component trees dynamically.",
          "Implemented comprehensive JWT authentication and role-based access control (RBAC)."
        ]
      }
    },
    {
      id: "website-builder",
      title: "AI-Powered Website Builder",
      category: "Web",
      categoryLabel: "FULL-STACK AI PRODUCT",
      description: "A production full-stack platform that transforms conversational prompts into responsive, live-previewed websites in real time. Built with sandboxed iframe previews, real-time code revisions, credit balance management, and a Stripe payment integration.",
      tags: ["React.js", "Node.js", "PostgreSQL", "Prisma ORM", "OpenRouter API", "Stripe Checkout"],
      github: "https://github.com/DehamiDiv/Web-site-builder",
      live: "https://ai-website-builder-zeta-nine.vercel.app/",
      gradient: "linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)",
      glyph: "🤖",
      image: "/website-builder.jpg",
      accent: "var(--secondary-light)",
      details: {
        subtitle: "Conversational Prompt-to-Code Web Generator",
        overview: "An AI platform empowering creators to generate, iterate, and publish functional websites using conversational prompts, featuring sandboxed execution and pay-as-you-go credit subscriptions.",
        features: [
          {
            icon: "💬",
            title: "Conversational Prompt Engineering",
            desc: "Iterative conversational prompting to refine designs, add sections, and update styling on the fly."
          },
          {
            icon: "🛡️",
            title: "Sandboxed Iframe Previews",
            desc: "Secure, isolated iframe execution environment providing instant real-time visual code execution."
          },
          {
            icon: "💳",
            title: "Stripe Monetization & Credits",
            desc: "Automated billing tiers with webhooks for instantaneous credit allocation upon checkout."
          }
        ],
        techStack: [
          {
            category: "Frontend",
            items: ["React.js", "Vite", "Modern CSS", "Monaco Code Editor"]
          },
          {
            category: "Backend",
            items: ["Node.js", "Express.js", "OpenRouter API", "Stripe API"]
          },
          {
            category: "Database",
            items: ["PostgreSQL", "Prisma ORM"]
          }
        ],
        highlights: [
          "Engineered sandboxed iframe rendering for real-time AI code execution and live previews.",
          "Integrated Stripe checkout for usage-based credit tiers and transaction verification.",
          "Architected token-optimized prompt chains to deliver production-ready responsive web code."
        ]
      }
    },
    {
      id: "blog-app",
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
      accent: "var(--primary-light)",
      details: {
        subtitle: "High-Performance Next.js Markdown Publishing Engine",
        overview: "A minimalist, speed-optimized blogging platform designed for seamless markdown writing, tag-based taxonomy, and fast edge delivery.",
        features: [
          {
            icon: "⚡",
            title: "Serverless Route Handlers",
            desc: "Clean RESTful endpoints built using Next.js App Router for CRUD post operations."
          },
          {
            icon: "📄",
            title: "Dynamic Markdown Rendering",
            desc: "Real-time parsing of markdown syntax with code block highlighting and embedded media."
          },
          {
            icon: "🔍",
            title: "Taxonomy & Fast Search",
            desc: "Categorization by tags, reading time calculation, and indexed MongoDB querying."
          }
        ],
        techStack: [
          {
            category: "Framework",
            items: ["Next.js", "React.js", "Tailwind CSS"]
          },
          {
            category: "Database",
            items: ["MongoDB Atlas", "Mongoose"]
          },
          {
            category: "Hosting",
            items: ["Vercel Edge Network"]
          }
        ],
        highlights: [
          "Implemented serverless API routes for article publishing and tagging.",
          "Configured MongoDB aggregation queries for fast text search and filtering.",
          "Optimized Core Web Vitals to achieve high Lighthouse performance scores."
        ]
      }
    },
    {
      id: "tasker",
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
      accent: "var(--emerald)",
      details: {
        subtitle: "Automated Rail Logistics & Factory Transport Robot",
        overview: "Engineered an autonomous rail transport rover designed to streamline material transfer within garment assembly lines, minimizing transit latency and enhancing cargo traceability.",
        features: [
          {
            icon: "🔒",
            title: "RFID Worker Authentication",
            desc: "Secure access control to lock and unlock cargo bays only for authorized personnel badges."
          },
          {
            icon: "📡",
            title: "IoT Wi-Fi Telemetry",
            desc: "Real-time communication between ESP32 and central web supervisor dashboard for live tracking."
          },
          {
            icon: "🛡️",
            title: "Collision Avoidance System",
            desc: "Ultrasonic sensor feedback loops triggering automatic emergency stops when obstacles are detected."
          }
        ],
        techStack: [
          {
            category: "Embedded & Hardware",
            items: ["Arduino Mega", "ESP32 Wi-Fi/BLE", "C++", "EasyEDA PCB Design"]
          },
          {
            category: "Sensors & Actuators",
            items: ["RFID RC522", "Ultrasonic Sensors", "Electromagnetic Locks", "L298N Motor Drivers"]
          },
          {
            category: "Web Supervisor",
            items: ["React.js", "Node.js", "WebSockets"]
          }
        ],
        highlights: [
          "Designed and fabricated custom PCB circuits for motor drivers and sensor arrays.",
          "Programmed low-latency telemetry between ESP32 microcontrollers and the web supervisor.",
          "Implemented fail-safe collision avoidance routines with ultrasonic proximity interrupts."
        ]
      }
    },
    {
      id: "neon-dj",
      title: "NEON//DJ – Gesture-Controlled Audio Mixer",
      category: "System",
      categoryLabel: "INTERACTIVE AUDIO ENGINEERING",
      description: "A touchless 4-channel real-time audio loop station and synthesizer utilizing procedural sound generation via the Web Audio API. Features MediaPipe computer vision for gesture-controlled DSP parameter modulation and high-framerate HTML5 Canvas visualizations including real-time frequency spectrograms and audio VU meters.",
      tags: ["JavaScript", "Web Audio API", "MediaPipe", "HTML5 Canvas", "WebGL/CSS3"],
      github: "https://github.com/DehamiDiv/Dj-Mixer",
      live: "https://dj-mixer-orcin.vercel.app/",
      gradient: "linear-gradient(135deg, #a855f7 0%, #06b6d4 100%)",
      glyph: "🎧",
      image: "/neondj-mixer.jpg",
      accent: "var(--primary-light)",
      details: {
        subtitle: "Computer-Vision Powered Touchless Audio Workstation",
        overview: "An experimental touchless digital audio workstation running directly in the browser, enabling performers to manipulate filters, effects, and loop transitions via natural hand gestures.",
        features: [
          {
            icon: "🖐️",
            title: "MediaPipe Computer Vision",
            desc: "Real-time 21-point hand landmark tracking for contactless pitch and cutoff modulation."
          },
          {
            icon: "🎛️",
            title: "Web Audio DSP Engine",
            desc: "Custom low-latency Web Audio API graph with biquad filters, distortion, reverb, and delays."
          },
          {
            icon: "📈",
            title: "60 FPS Canvas Spectrogram",
            desc: "High-framerate visualizer rendering live audio frequencies and animated VU level meters."
          }
        ],
        techStack: [
          {
            category: "Audio & Vision",
            items: ["Web Audio API", "MediaPipe Hands", "HTML5 Canvas 2D"]
          },
          {
            category: "Core Tech",
            items: ["Modern JavaScript (ES6+)", "CSS3 Glassmorphism", "Vercel"]
          }
        ],
        highlights: [
          "Engineered zero-latency Web Audio routing and custom DSP filter graphs.",
          "Leveraged MediaPipe hand landmarks for real-time 3D gesture parameter mapping.",
          "Rendered 60fps real-time frequency visualizers using hardware-accelerated Canvas."
        ]
      }
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
            A showcase of production web applications, enterprise POS systems, cloud platforms, and microcontroller robotics.
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
              <div
                className="project-preview"
                style={{ background: project.gradient }}
                onClick={() => setSelectedProject(project)}
                role="button"
                tabIndex={0}
                title={`Click to view details for ${project.title}`}
              >
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
                <div className="preview-overlay">
                  <span className="preview-click-hint">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    View Project Case Study
                  </span>
                </div>
              </div>

              {/* Card Details */}
              <div className="project-body">
                <div className="project-cat-kicker" style={{ color: project.accent }}>
                  {project.categoryLabel}
                </div>
                <h3
                  className="project-title clickable-title"
                  onClick={() => setSelectedProject(project)}
                >
                  {project.title}
                </h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="p-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-footer">
                  {/* Dedicated Details Trigger Button */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="p-btn p-btn-details"
                    title="View architecture, key features, and deep-dive details"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                    Details
                  </button>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-btn p-btn-gh"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                      {project.github2 ? "Frontend" : "Code"}
                    </a>
                  )}

                  {project.github2 && (
                    <a
                      href={project.github2}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-btn p-btn-gh"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
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
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* Interactive Project Detail Modal                                          */}
      {/* ========================================================================= */}
      {selectedProject && (
        <div
          className="modal-backdrop"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedProject(null);
          }}
        >
          <div className="modal-card" role="dialog" aria-modal="true">
            {/* Modal Top Banner with Image */}
            <div
              className="modal-header-banner"
              style={{ background: selectedProject.gradient }}
            >
              {selectedProject.image && (
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="modal-banner-img"
                />
              )}
              <div className="modal-banner-gradient-shade"></div>

              {/* Close Button */}
              <button
                className="modal-close-btn"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project modal"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>

              <div className="modal-banner-info">
                <span className="modal-category-badge" style={{ color: selectedProject.accent }}>
                  {selectedProject.categoryLabel}
                </span>
                <h2 className="modal-project-title">
                  <span className="title-glyph">{selectedProject.glyph}</span> {selectedProject.title}
                </h2>
                {selectedProject.details?.subtitle && (
                  <p className="modal-project-sub">{selectedProject.details.subtitle}</p>
                )}
              </div>
            </div>

            {/* Modal Body */}
            <div className="modal-body-scroll">
              {/* Overview Section */}
              <div className="modal-section">
                <div className="modal-sec-header">
                  <span className="sec-icon">📌</span>
                  <h3 className="modal-sec-title">Project Overview</h3>
                </div>
                <p className="modal-sec-text">
                  {selectedProject.details?.overview || selectedProject.description}
                </p>
              </div>

              {/* Key Features Grid */}
              {selectedProject.details?.features && (
                <div className="modal-section">
                  <div className="modal-sec-header">
                    <span className="sec-icon">✨</span>
                    <h3 className="modal-sec-title">Key Architectural Features</h3>
                  </div>
                  <div className="features-grid">
                    {selectedProject.details.features.map((feat, fIdx) => (
                      <div key={fIdx} className="feature-item-card">
                        <div className="feature-item-top">
                          <span className="feat-glyph">{feat.icon}</span>
                          <h4 className="feat-title">{feat.title}</h4>
                        </div>
                        <p className="feat-desc">{feat.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack & Architecture */}
              {selectedProject.details?.techStack && (
                <div className="modal-section">
                  <div className="modal-sec-header">
                    <span className="sec-icon">🛠️</span>
                    <h3 className="modal-sec-title">Tech Stack & Architecture</h3>
                  </div>
                  <div className="tech-stack-groups">
                    {selectedProject.details.techStack.map((group, gIdx) => (
                      <div key={gIdx} className="tech-group-card">
                        <span className="group-title">{group.category}</span>
                        <div className="group-tags">
                          {group.items.map((it, iIdx) => (
                            <span key={iIdx} className="group-tag-pill">
                              {it}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Resume / LinkedIn Bullet Points */}
              {selectedProject.details?.highlights && (
                <div className="modal-section">
                  <div className="modal-sec-header justify-between">
                    <div className="flex items-center gap-2">
                      <span className="sec-icon">🎯</span>
                      <h3 className="modal-sec-title">Engineering Highlights (CV / LinkedIn)</h3>
                    </div>
                    <button
                      onClick={() => copyBulletPoints(selectedProject.details.highlights)}
                      className="copy-bullets-btn"
                      title="Copy bullet points formatted for CV / LinkedIn"
                    >
                      {copiedBullets ? (
                        <>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          Copied to Clipboard!
                        </>
                      ) : (
                        <>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                          Copy Bullet Points
                        </>
                      )}
                    </button>
                  </div>
                  <ul className="highlights-list">
                    {selectedProject.details.highlights.map((bullet, bIdx) => (
                      <li key={bIdx} className="highlight-item">
                        <span className="bullet-check">▹</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Modal Footer Controls */}
            <div className="modal-action-bar">
              <div className="modal-action-links">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-btn modal-btn-gh"
                  >
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    View Repository on GitHub
                  </a>
                )}
                {selectedProject.github2 && (
                  <a
                    href={selectedProject.github2}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-btn modal-btn-gh"
                  >
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    Backend Repository
                  </a>
                )}
                {selectedProject.live && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-btn modal-btn-live"
                  >
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    Open Live Deployment
                  </a>
                )}
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="modal-btn modal-btn-close"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

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
          cursor: pointer;
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
          background: linear-gradient(to bottom, transparent 35%, rgba(10, 10, 20, 0.85) 100%);
          display: flex;
          align-items: flex-end;
          padding: 1rem 1.2rem;
          opacity: 0.9;
          transition: opacity 0.3s;
        }

        .project-preview:hover .preview-overlay {
          opacity: 1;
        }

        .preview-click-hint {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: rgba(255, 255, 255, 0.85);
          background: rgba(0, 0, 0, 0.55);
          backdrop-filter: blur(8px);
          padding: 0.3rem 0.65rem;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          transform: translateY(0);
          transition: all 0.25s var(--ease);
        }

        .project-preview:hover .preview-click-hint {
          background: var(--primaryA);
          border-color: var(--secondary-light);
          color: #ffffff;
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
          line-height: 1.35;
        }

        .clickable-title {
          cursor: pointer;
          transition: color 0.25s var(--ease);
        }

        .clickable-title:hover {
          color: var(--secondary-light);
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
          gap: 0.6rem;
          padding-top: 1.2rem;
          border-top: 1px solid var(--bdr);
          flex-wrap: wrap;
        }

        .p-btn {
          flex: 1;
          min-width: 90px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          padding: 0.62rem 0.85rem;
          border-radius: 10px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 600;
          transition: all 0.25s var(--ease);
          cursor: pointer;
          text-decoration: none;
        }

        .p-btn-details {
          background: var(--surf2);
          border: 1px solid var(--bdr2);
          color: var(--secondary-light);
        }

        .p-btn-details:hover {
          background: var(--primaryA);
          border-color: var(--secondary-light);
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 4px 14px var(--secondaryA);
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

        /* ========================================================================= */
        /* Modal Styles                                                              */
        /* ========================================================================= */
        .modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(5, 5, 12, 0.82);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          display: grid;
          place-items: center;
          padding: 1.5rem;
          animation: modalFadeIn 0.25s ease-out;
        }

        .modal-card {
          width: 100%;
          max-width: 840px;
          max-height: 88vh;
          border-radius: 22px;
          background: var(--bg);
          border: 1px solid var(--bdr2);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.7), 0 0 45px rgba(var(--violet-rgb), 0.25);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          animation: modalScaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .modal-header-banner {
          position: relative;
          height: 200px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 1.8rem 2rem;
        }

        .modal-banner-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.7);
        }

        .modal-banner-gradient-shade {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, var(--bg) 0%, rgba(10, 10, 20, 0.75) 60%, rgba(10, 10, 20, 0.4) 100%);
        }

        .modal-close-btn {
          position: absolute;
          top: 1.2rem;
          right: 1.2rem;
          z-index: 10;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(15, 15, 25, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: var(--tx);
          display: grid;
          place-items: center;
          cursor: pointer;
          transition: all 0.2s var(--ease);
        }

        .modal-close-btn:hover {
          background: var(--rose);
          border-color: var(--rose);
          color: #ffffff;
          transform: rotate(90deg);
        }

        .modal-banner-info {
          position: relative;
          z-index: 2;
        }

        .modal-category-badge {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 0.35rem;
          display: inline-block;
        }

        .modal-project-title {
          font-family: var(--font-heading);
          font-size: 1.65rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 0.25rem;
          line-height: 1.25;
        }

        .title-glyph {
          margin-right: 0.4rem;
        }

        .modal-project-sub {
          font-size: 0.9rem;
          color: var(--tx2);
        }

        .modal-body-scroll {
          padding: 2rem;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          scrollbar-width: thin;
          scrollbar-color: var(--bdr) transparent;
        }

        .modal-body-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .modal-body-scroll::-webkit-scrollbar-thumb {
          background: var(--bdr2);
          border-radius: 3px;
        }

        .modal-section {
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
        }

        .modal-sec-header {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .modal-sec-header.justify-between {
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.8rem;
        }

        .sec-icon {
          font-size: 1.2rem;
        }

        .modal-sec-title {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--tx);
        }

        .modal-sec-text {
          font-size: 0.94rem;
          color: var(--tx2);
          line-height: 1.7;
          background: var(--surf);
          padding: 1.2rem 1.4rem;
          border-radius: 14px;
          border: 1px solid var(--bdr);
        }

        /* Features Grid */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1rem;
        }

        .feature-item-card {
          background: var(--surf);
          border: 1px solid var(--bdr);
          border-radius: 14px;
          padding: 1.1rem 1.25rem;
          transition: border-color 0.25s, transform 0.25s;
        }

        .feature-item-card:hover {
          border-color: var(--secondary-light);
          transform: translateY(-2px);
        }

        .feature-item-top {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 0.45rem;
        }

        .feat-glyph {
          font-size: 1.1rem;
        }

        .feat-title {
          font-family: var(--font-heading);
          font-size: 0.96rem;
          font-weight: 700;
          color: var(--tx);
        }

        .feat-desc {
          font-size: 0.84rem;
          color: var(--tx2);
          line-height: 1.6;
        }

        /* Tech Stack Grouping */
        .tech-stack-groups {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 1rem;
        }

        .tech-group-card {
          background: var(--surf);
          border: 1px solid var(--bdr);
          border-radius: 14px;
          padding: 1.1rem;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .group-title {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--secondary-light);
        }

        .group-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
        }

        .group-tag-pill {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          padding: 0.25rem 0.55rem;
          border-radius: 6px;
          background: var(--surf2);
          border: 1px solid var(--bdr2);
          color: var(--tx);
        }

        /* Highlights (Resume Bullet Points) */
        .copy-bullets-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 600;
          color: var(--secondary-light);
          background: var(--surf2);
          border: 1px solid var(--bdr2);
          padding: 0.4rem 0.8rem;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.25s var(--ease);
        }

        .copy-bullets-btn:hover {
          background: var(--primaryA);
          border-color: var(--secondary-light);
          color: #ffffff;
        }

        .highlights-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .highlight-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.88rem;
          color: var(--tx);
          line-height: 1.65;
          background: var(--surf);
          border: 1px solid var(--bdr);
          padding: 0.9rem 1.2rem;
          border-radius: 12px;
          transition: border-color 0.2s;
        }

        .highlight-item:hover {
          border-color: var(--primary-light);
        }

        .bullet-check {
          color: var(--secondary-light);
          font-size: 1.1rem;
          line-height: 1.2;
          font-weight: 700;
        }

        /* Action Bar at Bottom of Modal */
        .modal-action-bar {
          padding: 1.2rem 2rem;
          border-top: 1px solid var(--bdr);
          background: var(--surf);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .modal-action-links {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .modal-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.65rem 1.25rem;
          border-radius: 10px;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.25s var(--ease);
        }

        .modal-btn-gh {
          background: var(--surf2);
          border: 1px solid var(--bdr2);
          color: var(--tx);
        }

        .modal-btn-gh:hover {
          border-color: var(--primary-light);
          color: var(--primary-light);
          background: var(--primaryA);
          transform: translateY(-2px);
        }

        .modal-btn-live {
          background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
          border: none;
          color: #ffffff;
          box-shadow: 0 4px 15px rgba(var(--violet-rgb), 0.4);
        }

        .modal-btn-live:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(var(--violet-rgb), 0.6);
          filter: brightness(1.1);
        }

        .modal-btn-close {
          background: var(--surf2);
          border: 1px solid var(--bdr);
          color: var(--tx2);
        }

        .modal-btn-close:hover {
          color: var(--tx);
          border-color: var(--tx2);
        }

        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes modalScaleUp {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(15px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @media (max-width: 768px) {
          .modal-header-banner {
            height: 180px;
            padding: 1.2rem;
          }
          .modal-project-title {
            font-size: 1.3rem;
          }
          .modal-body-scroll {
            padding: 1.2rem;
          }
          .features-grid {
            grid-template-columns: 1fr;
          }
          .modal-action-bar {
            padding: 1rem 1.2rem;
            flex-direction: column;
            align-items: stretch;
          }
          .modal-action-links {
            flex-direction: column;
          }
          .modal-btn {
            justify-content: center;
          }
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
