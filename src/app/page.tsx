"use client";

import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Code2,
  ExternalLink,
  HeartPulse,
  Mail,
  MapPin,
  Menu,
  Sparkles,
  X,
  Code,
  Briefcase,
} from "lucide-react";

type Project = {
  title: string;
  description: string;
  tech: string[];
  category: string;
  number: string;
  accent: string;
  link: string;
};

const projects: Project[] = [
  {
    number: "01",
    title: "Healthcare Management Dashboard",
    description:
      "Interactive dashboard concept for patient data visualization, management and analytics.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    category: "Healthcare",
    accent: "cyan",
    link: "#",
  },
  {
    number: "02",
    title: "Salesforce Integration Platform",
    description:
      "CRM-focused solution concept using Salesforce APIs for enterprise client management.",
    tech: ["Salesforce", "JavaScript", "Node.js"],
    category: "Enterprise",
    accent: "violet",
    link: "#",
  },
  {
    number: "03",
    title: "Employee Management System",
    description:
      "Full-stack employee management platform covering payroll, attendance and performance tracking.",
    tech: ["React", "Express", "PostgreSQL"],
    category: "Full Stack",
    accent: "lime",
    link: "#",
  },
];

const skills = [
  "Healthcare Technology",
  "Power BI",
  "Excel",
  "Salesforce",
  "Apex",
  "LWC",
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Data Analysis",
  "Digital Transformation",
];

export default function Home() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mouse, setMouse] = useState({ x: 50, y: 35 });

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      setMouse({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main
      className="site-shell"
      style={
        {
          "--mouse-x": `${mouse.x}%`,
          "--mouse-y": `${mouse.y}%`,
        } as React.CSSProperties
      }
    >
      <div className="noise" />
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="cursor-glow" />

      {/* Navigation */}
      <header className="nav-wrap">
        <nav className="nav">
          <button className="brand" onClick={() => scrollTo("home")} aria-label="Back to home">
            <span className="brand-mark">AP</span>
            <span className="brand-copy">
              <strong>AYUSH PARASHAR</strong>
              <small>TECH × HEALTHCARE</small>
            </span>
          </button>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <button className="nav-link active" onClick={() => scrollTo("home")}>
              Home
            </button>
            <button className="nav-link" onClick={() => scrollTo("about")}>
              About
            </button>
            <button className="nav-link" onClick={() => scrollTo("work")}>
              Work
            </button>
            <button className="nav-link" onClick={() => scrollTo("contact")}>
              Contact
            </button>
            <a
              className="nav-cta"
              href="https://www.linkedin.com/in/ayush-paras"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <ArrowUpRight size={14} />
            </a>
          </div>

          <button
            className="menu-button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="hero section-pad">
        <div className="hero-topline">
          <span className="eyebrow">
            <span className="status-dot" />
            OPEN TO OPPORTUNITIES
          </span>
          <span className="hero-location">
            <MapPin size={13} /> Goa, India
          </span>
        </div>

        <div className="hero-title-wrap">
          <p className="hero-kicker">ENGINEER → HEALTHCARE MANAGEMENT</p>
          <h1 className="hero-title">
            <span>BUILDING</span>
            <em>technology</em>
            <span>THAT MATTERS.</span>
          </h1>
          <p className="hero-intro">
            I&apos;m Ayush — an Information Science engineer now pursuing
            Healthcare Management at GIM Goa, combining technology, analytics
            and business thinking to solve real-world healthcare problems.
          </p>
        </div>

        <div className="hero-actions">
          <button className="primary-button" onClick={() => scrollTo("work")}>
            Explore my work <ArrowDown size={17} />
          </button>
          <button 
            className="secondary-button" 
            onClick={() => {
              const email = 'ayushparashar609@gmail.com';
              const subject = 'Let\'s Connect — Portfolio';
              const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}`;
              window.open(mailtoLink, '_blank');
            }}
          >
            Let&apos;s connect <ArrowUpRight size={17} />
          </button>
        </div>

        <div className="hero-bento">
          <article className="hero-card hero-card-main reveal-card">
            <div className="card-label">
              <span>01</span>
              <span>PROFILE</span>
            </div>
            <div className="profile-orbit">
              <div className="orbit orbit-a" />
              <div className="orbit orbit-b" />
              <div className="profile-core">AP</div>
            </div>
            <div>
              <h2>Engineer by training.</h2>
              <p>Healthcare innovator by direction.</p>
            </div>
            <div className="card-footer">
              <span>GIM Goa · PGDM</span>
              <HeartPulse size={16} />
            </div>
          </article>

          <article className="hero-card hero-card-stats reveal-card">
            <div className="card-label">
              <span>02</span>
              <span>AT A GLANCE</span>
            </div>
            <div className="big-stat">13</div>
            <p>academic &amp; technical projects</p>
            <div className="mini-divider" />
            <div className="stat-row">
              <span>Current focus</span>
              <strong>Digital Healthcare</strong>
            </div>
            <div className="stat-row">
              <span>Background</span>
              <strong>Information Science</strong>
            </div>
          </article>

          <article className="hero-card hero-card-focus reveal-card">
            <div className="card-label">
              <span>03</span>
              <span>FOCUS</span>
            </div>
            <div className="focus-icon"><BarChart3 size={26} /></div>
            <h3>Data → Decisions</h3>
            <p>Turning technical systems and data into useful business and healthcare insights.</p>
            <div className="tag-line">
              <span>ANALYTICS</span>
              <span>•</span>
              <span>TRANSFORMATION</span>
            </div>
          </article>
        </div>

        <div className="scroll-hint">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={15} />
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee-band" aria-hidden="true">
        <div className="marquee-track">
          <span>HEALTHCARE</span><i>✦</i><span>TECHNOLOGY</span><i>✦</i>
          <span>DATA</span><i>✦</i><span>DIGITAL TRANSFORMATION</span><i>✦</i>
          <span>HEALTHCARE</span><i>✦</i><span>TECHNOLOGY</span><i>✦</i>
          <span>DATA</span><i>✦</i><span>DIGITAL TRANSFORMATION</span><i>✦</i>
        </div>
      </div>

      {/* About */}
      <section id="about" className="section section-pad">
        <div className="section-heading">
          <div>
            <p className="eyebrow">ABOUT / 01</p>
            <h2>
              Different disciplines.
              <br />
              <em>One direction.</em>
            </h2>
          </div>
          <p className="section-note">
            My edge is the intersection — I can understand the technology,
            the data and the management problem sitting behind it.
          </p>
        </div>

        <div className="about-grid">
          <article className="panel about-story">
            <span className="panel-number">A</span>
            <h3>From code to care.</h3>
            <p>
              My engineering background taught me to break complex problems
              into systems. My current PGDM journey at Goa Institute of
              Management is teaching me to look at those systems through
              people, operations, strategy and impact.
            </p>
            <p>
              I&apos;m particularly interested in digital healthcare,
              analytics, process improvement and technology-enabled
              transformation.
            </p>
            <div className="signature">AYUSH / 2026</div>
          </article>

          <article className="panel education-card">
            <div className="education-line">
              <span className="timeline-dot" />
              <div>
                <small>2025 — PRESENT</small>
                <h3>Goa Institute of Management</h3>
                <p>PGDM · Healthcare Management</p>
              </div>
            </div>
            <div className="education-line">
              <span className="timeline-dot" />
              <div>
                <small>2021 — 2025</small>
                <h3>NIE Institute of Technology</h3>
                <p>B.E. · Information Science</p>
              </div>
            </div>
            <div className="education-bottom">
              <Code2 size={18} />
              <span>TECHNICAL FOUNDATION</span>
            </div>
          </article>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="section section-pad work-section">
        <div className="section-heading work-heading">
          <div>
            <p className="eyebrow">SELECTED WORK / 02</p>
            <h2>
              Things I&apos;ve
              <br />
              <em>built.</em>
            </h2>
          </div>
          <div className="work-counter">
            <span>PROJECTS</span>
            <strong>13</strong>
          </div>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <button
              key={project.number}
              className={`project-card project-${index + 1} accent-${project.accent}`}
              onClick={() => setActiveProject(project)}
            >
              <div className="project-top">
                <span>{project.number}</span>
                <span>{project.category}</span>
                <ArrowUpRight className="project-arrow" size={18} />
              </div>

              <div className="project-visual">
                <div className="visual-grid" />
                <div className="visual-shape">
                  {index === 0 ? <HeartPulse size={46} strokeWidth={1.2} /> :
                   index === 1 ? <BriefcaseBusiness size={46} strokeWidth={1.2} /> :
                   <BarChart3 size={46} strokeWidth={1.2} />}
                </div>
                <span className="visual-caption">INTERACTIVE / SYSTEM / DATA</span>
              </div>

              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-row">
                  {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
                </div>
              </div>
            </button>
          ))}

          <article className="project-card project-more">
            <div className="project-top">
              <span>04—13</span>
              <Sparkles size={17} />
            </div>
            <div className="more-number">+</div>
            <h3>More work in the archive.</h3>
            <p>
              Thirteen projects across engineering, analytics, healthcare and
              software. This portfolio highlights the work most relevant to
              where I&apos;m going next.
            </p>
            <span className="archive-label">ARCHIVE / IN PROGRESS</span>
          </article>
        </div>
      </section>

      {/* Skills */}
      <section className="section section-pad skills-section">
        <div className="skills-header">
          <p className="eyebrow">TOOLKIT / 03</p>
          <h2>What I work with.</h2>
        </div>
        <div className="skills-cloud">
          {skills.map((skill, index) => (
            <span key={skill} style={{ "--i": index } as React.CSSProperties}>
              <Check size={13} />
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section section-pad contact-section">
        <div className="contact-card">
          <div className="contact-orb" />
          <div className="contact-copy">
            <p className="eyebrow">LET&apos;S TALK / 04</p>
            <h2>
              Have a problem
              <br />
              worth <em>solving?</em>
            </h2>
            <p>
              I&apos;m always open to conversations around healthcare
              technology, analytics, digital transformation and interesting
              projects.
            </p>
          </div>
          <div className="contact-actions">
            <div className="social-row social-row-trio">
              <button
                type="button"
                className="social-card social-card-email"
                onClick={() => {
                  const email = "ayushparashar609@gmail.com";
                  const subject = "Let\'s Connect — Portfolio";
                  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}`;
                  window.open(gmailUrl, "_blank", "noopener,noreferrer");
                }}
                aria-label="Email Ayush Parashar"
              >
                <Mail size={24} />
              </button>
              <a href="https://www.linkedin.com/in/ayush-paras" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-card social-card-linkedin">
                <Briefcase size={23} />
              </a>
              <a href="https://github.com/cdrayush" target="_blank" rel="noreferrer" aria-label="GitHub" className="social-card social-card-github">
                <Code2 size={22} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <span>AYUSH PARASHAR © 2026</span>
        <span>BUILT WITH NEXT.JS · REACT · TYPESCRIPT</span>
        <span>GOA, INDIA ↗</span>
      </footer>

      {/* Project modal */}
      {activeProject && (
        <div className="modal-backdrop" onClick={() => setActiveProject(null)}>
          <div className="project-modal" onClick={(event) => event.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setActiveProject(null)}
              aria-label="Close project"
            >
              <X size={19} />
            </button>
            <span className="eyebrow">{activeProject.number} / {activeProject.category}</span>
            <h2>{activeProject.title}</h2>
            <p>{activeProject.description}</p>
            <div className="modal-tech">
              {activeProject.tech.map((tech) => <span key={tech}>{tech}</span>)}
            </div>
            {activeProject.link !== "#" ? (
              <a href={activeProject.link} target="_blank" rel="noreferrer" className="primary-button">
                Open project <ExternalLink size={16} />
              </a>
            ) : (
              <span className="modal-note">Project link can be added in the projects array.</span>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
