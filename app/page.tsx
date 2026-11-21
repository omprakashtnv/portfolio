
"use client";

import { useEffect, useState } from "react";

import { FaGithub, FaLinkedinIn, FaFileAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, } from "react-icons/fa";

const technologies = [
  {
    title: "Frontend",
    subtitle: "React · Next.js",
    icon: "⚛",
    className: "frontend",
  },
  {
    title: "Backend",
    subtitle: "Node.js · Express",
    icon: "⬡",
    className: "backend",
  },
  {
    title: "AWS Cloud",
    subtitle: "Lambda · API GW",
    icon: "☁",
    className: "aws",
  },
  {
    title: "AI / RAG",
    subtitle: "LangChain · pgvector",
    icon: "✧",
    className: "ai",
  },
];



type Project = {
  title: string;
  type: "professional" | "personal";
  category: string;
  description: string;
  highlights: string[];
  tags: string[];
  className: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
};

// Replace demo links below with your real URLs before publishing.

const projects: Project[] = [
  {
    title: "LEI Enterprise Platform",
    type: "professional",
    category: "Enterprise SaaS · FinTech",
    description:
      "Multi-tenant enterprise SaaS platform supporting Legal Entity Identifier (LEI) registration, issuance, renewal, transfer and entity management workflows across 26+ countries.",
    highlights: [
      "Contributed to 5 microservices, personally developing 3",
      "AWS Lambda, API Gateway, EventBridge and SNS workflows",
      "Secure REST APIs with JWT, RBAC and tenant isolation",
      "AI-powered document processing and RAG integration",
    ],
    tags: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "AWS Lambda",
      "Microservices",
      "LangChain",
      "RAG",
    ],
    className: "lei",
    image: "/projects/lei.png",
    liveUrl: "",
    githubUrl: "",
  },
  {
    title: "LM Exchange",
    type: "professional",
    category: "FinTech · International Remittance",
    description:
      "International money exchange platform for a Dubai-based exchange house, supporting cross-border financial workflows, real-time data integration and third-party banking services.",
    highlights: [
      "Built React.js interfaces and Node.js REST APIs",
      "Integrated third-party banking and multi-country APIs",
      "Implemented authentication and financial security controls",
      "Worked with PostgreSQL, Redis, unit tests and deployment",
    ],
    tags: [
      "React.js",
      "JavaScript",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "REST APIs",
      "Authentication",
      "Unit Testing",
    ],
    className: "lmexchange",
    image: "/projects/lmexchange.png",
    liveUrl: "",
    githubUrl: "",
  },
  {
    title: "Education Platform",
    type: "professional",
    category: "EdTech · Client Project",
    description:
      "Education-focused web application developed as part of a service-based engineering team, contributing to frontend and backend features for digital learning workflows.",
    highlights: [
      "Developed and maintained education-related application features",
      "Contributed to frontend and backend integrations",
      "Collaborated on client requirements and feature delivery",
    ],
    tags: [
      "Next.js",
      "React.js",
      "JavaScript",
      "TypeScript",
      "NestJS",
      "MongoDB",
      "GraphQL",
    ],
    // Verify that each technology was used in this project.
    className: "education",
    image: "/projects/education.png",
    liveUrl: "",
    githubUrl: "",
  },
  {
    title: "E-commerce Platform",
    type: "professional",
    category: "E-commerce · Client Project",
    description:
      "Full Stack e-commerce application supporting customer-facing shopping workflows and database-driven backend services.",
    highlights: [
      "Developed responsive frontend application features",
      "Integrated backend APIs for e-commerce workflows",
      "Worked on database operations and application improvements",
    ],
    tags: [
      "React.js",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "GraphQL",
    ],
    // Confirm MongoDB/GraphQL versus MySQL/REST for this project.
    className: "ecommerce",
    image: "/projects/ecommerce.png",
    liveUrl: "",
    githubUrl: "",
  },
  {
    title: "DocuSense AI",
    type: "personal",
    category: "Generative AI · RAG",
    description:
      "AI-powered document intelligence application that allows users to upload PDFs, perform semantic search and ask natural-language questions grounded in document content.",
    highlights: [
      "RAG pipeline with PDF extraction, chunking and embeddings",
      "Semantic vector search using PostgreSQL and pgvector",
      "Gemini AI and LangChain for context-aware answers",
      "Document metadata management and retrieval workflows",
    ],
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "pgvector",
      "LangChain",
      "Gemini AI",
      "RAG",
    ],
    className: "docusense",
    image: "/projects/docusense.png",
    liveUrl: "https://example.com/docusense-demo",
    githubUrl: "https://github.com/YOUR_USERNAME/docusense-ai",
  },
  {
    title: "SentinelAI",
    type: "personal",
    category: "AI · Cybersecurity",
    description:
      "AI-assisted source code security auditing platform for scanning repositories, identifying potential vulnerabilities and providing actionable remediation guidance.",
    highlights: [
      "Rule-based vulnerability scanning for ZIP and GitHub imports",
      "OpenAI-powered explanations and suggested code fixes",
      "JWT authentication and secure refresh-token rotation",
      "Interactive scan dashboards and remediation workflows",
    ],
    tags: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "OpenAI API",
      "JWT",
      "Security Auditing",
    ],
    className: "sentinel",
    image: "/projects/sentinel.png",
    liveUrl: "https://example.com/sentinel-demo",
    githubUrl: "https://github.com/YOUR_USERNAME/sentinel-ai",
  },
];


const experiences = [
  {
    role: "Software Engineer",
    company: "LEI International Pvt. Ltd.",
    type: "Product-Based",
    location: "Lucknow, India",
    duration: "August 2025 – Present",
    highlights: [
      "Contributed to a multi-tenant enterprise SaaS platform supporting LEI operations across 26+ countries.",
      "Worked on 5 microservices, personally developing 3, with secure REST APIs and enterprise workflows.",
      "Implemented AWS Lambda, API Gateway, EventBridge and SNS-based serverless workflows.",
      "Developed JWT authentication, RBAC, tenant isolation and secure data processing features.",
      "Contributed to AI-powered document processing and RAG integrations.",
    ],
    skills: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "AWS",
      "Microservices",
      "REST APIs",
      "Unit Testing",
      "RAG",
    ],
  },
  {
    role: "Software Engineer",
    company: "Aipxperts Technolabs Pvt. Ltd.",
    type: "Service-Based",
    location: "Ahmedabad, India",
    duration: "April 2025 – June 2025",
    highlights: [
      "Contributed to client-focused web applications and feature development.",
      "Worked on frontend and backend functionality, API integrations and application improvements.",
      "Collaborated with the development team to deliver client requirements.",
    ],
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Node.js",
      "REST APIs",
      "GraphQL",
      "Unit Testing", 
            "Git"
   
    ],
  },
  {
    role: "Full Stack Engineer",
    company: "Modex Trading Private Limited",
    type: "Product-Based",
    location: "Bangalore, India",
    duration: "April 2023 – January 2025",
    highlights: [
      "Developed and maintained full-stack web applications and reusable frontend components.",
      "Worked on backend APIs, database integration and business application workflows.",
      "Contributed to application enhancements, debugging and production feature delivery.",
    ],
    skills: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScripts",
      "Node.js",
      "Express",
      "REST APIs",
      "MongoDB",
      "Unit Testing",
      "Git"
    ],
  },
  {
    role: "Full Stack Web Developer (Trainee)",
    company: "Masai School",
    // type: "Pr",
    location: "Remote",
    duration: "January 2022 – February 2023",
    highlights: [
      "Completed hands-on full-stack web development training.",
      "Built practical projects using frontend and backend technologies.",
      "Strengthened problem-solving, data structures and web development fundamentals.",
    ],
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScripts",
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
            "Git",

      "DSA"
    ],
  },
];


const technicalSkills = [
  {
    title: "Frontend",
    skills: [
      "JavaScript", "TypeScript", "React.js",
      "Next.js", "Redux", "Tailwind CSS"
    ],
  },
  {
    title: "Backend & Databases",
    skills: [
      "Node.js", "Express.js", "REST APIs",
      "Microservices", "PostgreSQL",
      "MongoDB", "Prisma", "Redis"
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "AWS", "Docker", "CI/CD",
      "Git", "GitHub Actions"
    ],
  },
  {
    title: "AI & LLM",
    skills: [
      "OpenAI API", "Gemini API",
      "LangChain", "RAG", "pgvector"
    ],
  },
];

const professionalSkills = [
  "Problem Solving",
  "Communication",
  "Team Collaboration",
  "Technical Ownership",
  "Time Management",
  "Adaptability",
];



const codeLines = [
  "import React from 'react';",
  "",
  "const Developer = () => {",
  "  return (",
  "    <Portfolio",
  '      role="Full Stack Developer"',
  '      skills={["React", "Node.js",',
  '        "AWS", "AI/RAG"]}',
  "    />",
  "  );",
  "};",
];

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

const CONTACT_EMAIL = "omprakash1997242@gmail.com";

const [contactForm, setContactForm] = useState({
  name: "",
  email: "",
  message: "",
});

const handleContactSubmit = (e:any) => {
  e.preventDefault();

  const subject = encodeURIComponent(
    `Portfolio Inquiry from ${contactForm.name}`
  );

  const body = encodeURIComponent(
    `Name: ${contactForm.name}\n` +
    `Email: ${contactForm.email}\n\n` +
    `Message:\n${contactForm.message}`
  );

  window.location.href =
    `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
};


  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <main className="portfolio">
      {/* NAVIGATION */}
      <header className="site-header">
        <a href="#home" className="logo">
          <span className="logo-icon">&lt;/&gt;</span>
          <span>OPG.</span>
        </a>

        <nav className="navigation">
          <a href="#home" className="active">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>

        <button
          type="button"
          className="theme"
          onClick={() =>
            setTheme((current) =>
              current === "dark" ? "light" : "dark"
            )
          }
          aria-label="Toggle theme"
        >
          {theme === "dark" ? "☼ Light" : "☾ Dark"}
        </button>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="copy">
          <div className="status">
            <span className="status-dot">●</span>
            OPEN TO OPPORTUNITIES
          </div>

          <p className="kicker">HELLO, I'M</p>

          <h1>
            Om Prakash <span>Gupta.</span>
          </h1>

          <h2 className="role">
            Full Stack Developer
            <span className="cursor"> |</span>
          </h2>

          <p className="description">
            I build scalable, secure and intelligent web
            solutions with modern technology, cloud and AI.
          </p>

          <div className="actions">
            <a href="#projects" className="primary">
              View Projects ↗
            </a>

            <a
              href="#contact"
              className="outline resume-button"
            >
              ↓ Download Resume
            </a>

            <a href="#contact" className="outline">
              ✉ Contact Me
            </a>
          </div>

          <div className="stats">
            <div>
              <strong>3.5+</strong>
              <small>Years Experience</small>
            </div>

            <div>
              <strong>05</strong>
              <small>Microservices</small>
            </div>

            <div>
              <strong>AWS</strong>
              <small>Cloud & Serverless</small>
            </div>

            <div>
              <strong>AI</strong>
              <small>GenAI & RAG</small>
            </div>
          </div>
        </div>

        {/* RIGHT HERO VISUAL */}
        <div className="hero-visual">
          <div className="visual-glow" />

          {/* Decorative orbit */}
          <div className="orbit-ring" />

          {/* Layered glass panels */}
          <div className="glass-layer layer-one" />
          <div className="glass-layer layer-two" />
          <div className="glass-layer layer-three" />

          {/* Code Terminal */}
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="window-dots">
                <span />
                <span />
                <span />
              </div>

              <span className="terminal-title">
                ⚛ portfolio.tsx
              </span>
            </div>

            <div className="terminal-body">
              {codeLines.map((line, index) => (
                <div className="code-line" key={index}>
                  <span className="line-number">
                    {index + 1}
                  </span>

                  <code>{line || "\u00A0"}</code>
                </div>
              ))}
            </div>
          </div>

          {/* Floating cards */}
          <div className="tech-orbit">
            {technologies.map((tech) => (
              <div
                key={tech.title}
                className={`tech-card ${tech.className}`}
              >
                <div className="tech-icon">
                  {tech.icon}
                </div>

                <strong>{tech.title}</strong>
                <small>{tech.subtitle}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BACKGROUND DECORATION */}
      <div className="neon-wave" aria-hidden="true" />
      <div className="decorative-dots" aria-hidden="true" />

      {/* FEATURED PROJECTS */}
      <section className="projects" id="projects">
        <h2><span className="dash">—</span> Featured Projects</h2>
        <p className="projects-intro">Real-world engineering experience and independently built AI applications.</p>

        {([
          { type: "professional", heading: "Professional Projects", subtitle: "Enterprise and client applications developed during employment." },
          { type: "personal", heading: "Personal & AI Projects", subtitle: "Independent projects with demo and source-code links." },
        ] as const).map((group) => (
          <div className="project-group" key={group.type}>
            <div className="project-group-heading">
              <h3>{group.heading}</h3>
              <p>{group.subtitle}</p>
            </div>
            <div className="cards">
              {projects.filter((project) => project.type === group.type).map((project) => (
                <article className={`project-card ${project.className}`} key={project.title}>
                  <div className="art">
                    <img src={project.image} alt={`${project.title} illustration`} className="project-image" loading="lazy" />
                  </div>
                  <div className="card-copy">
                    <span className="project-type">{project.category}</span>
                    <h3>{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-highlights">
                      <h4>Key Highlights</h4>
                      <ul>{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
                    </div>
                    {project.tags.length > 0 && (
                      <div className="project-tags" aria-label={`${project.title} tech stack`}>
                        {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                      </div>
                    )}
                    {(project.liveUrl || project.githubUrl) && (
                      <div className="project-links">
                        {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link demo-link">Live Demo ↗</a>}
                        {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link github-link">GitHub Code ↗</a>}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ABOUT */}
<section id="about" className="info about-section">
  <div className="about-layout">
    <div className="about-content">
      <h2>
        <span className="highlight">About</span> Me
      </h2>

      <p>
        I'm a <strong>Full Stack Developer and Software Engineer</strong>{" "}
        with <strong>3+ years of experience</strong> building
        enterprise SaaS platforms, FinTech applications, and
        AI-powered solutions.
      </p>

      <p>
        I specialize in <strong>React.js, Next.js, Node.js,
        TypeScript, PostgreSQL, MongoDB, and AWS</strong>.
        My experience includes microservices, secure REST APIs,
        cloud-based workflows, and third-party integrations.
      </p>

      <p>
        At <strong>LEI International</strong>, I contributed to a
        multi-tenant enterprise platform supporting operations
        across <strong>26+ countries</strong>, working on
        <strong> 5 microservices</strong>, including
        <strong> 3 developed personally</strong>.
      </p>

      <p>
        I also build AI-powered products using
        <strong> LLMs, LangChain, RAG, embeddings, and vector search</strong>,
        including DocuSense AI and SentinelAI.
      </p>
    </div>

    <div className="about-profile">
      <div className="about-photo-ring">
        <img
          src="/about/profile.png"
          alt="Om Prakash Gupta"
          className="about-photo"
          loading="lazy"
        />
      </div>

      <h3>Om Prakash Gupta</h3>
      <p className="about-profile-role">
        Full Stack Developer
      </p>

     
<div className="about-socials">
  <a
    href="https://github.com/omprakashtnv"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub Profile"
    title="GitHub"
  >
    <FaGithub size={21} />
  </a>

  <a
    href="https://www.linkedin.com/in/om-gupta-coding/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn Profile"
    title="LinkedIn"
  >
    <FaLinkedinIn size={21} />
  </a>

  <a
    href="/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="View Resume"
    title="Resume"
  >
    <FaFileAlt size={21} />
  </a>
</div>

    </div>
  </div>
</section>



      {/* EXPERIENCE */}
   
<section
  id="experience"
  className="info experience-section"
>
  <h2>
    <span className="highlight">Professional</span>{" "}
    Experience
  </h2>

  <div className="experience-timeline">
    {experiences.map((exp) => (
      <div
        className="experience-item"
        key={exp.company}
      >
        <div className="experience-dot" />

        <div className="experience-card">
          <div className="experience-header">
            <h3>
              <span className="experience-role">
                {exp.role}
              </span>

              <span className="experience-separator">
                {" | "}
              </span>

              <span className="experience-company">
                {exp.company}
              </span>{" "}

            
{exp.type?.trim() && (
  <span className="experience-company-type">
    ({exp.type})
  </span>
)}

            </h3>
          </div>

          <p className="experience-meta">
            {exp.location}
            <span className="experience-meta-separator">
              {" | "}
            </span>
            {exp.duration}
          </p>

          <ul className="experience-highlights">
            {exp.highlights.map((highlight) => (
              <li key={highlight}>
                {highlight}
              </li>
            ))}
          </ul>

          <div className="experience-skills">
            {exp.skills.map((skill) => (
              <span key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* SKILLS */}

<section id="skills" className="info skills-section">
  <h2>
    <span className="highlight">Technical</span> Skills
  </h2>

  <div className="skills-grid">
    {technicalSkills.map((category) => (
      <div className="skill-card" key={category.title}>
        <h3>{category.title}</h3>

        <div className="skill-tags">
          {category.skills.map((skill) => (
            <span className="skill-tag" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>

  <div className="professional-skills">
    <h2>
      <span className="highlight">Soft Skills</span>
      {" & Leadership"}
    </h2>

    <div className="skill-tags">
      {professionalSkills.map((skill) => (
        <span className="skill-tag" key={skill}>
          {skill}
        </span>
      ))}
    </div>
  </div>
</section>


      {/* CONTACT */}
    
<section id="contact" className="info contact-section">
  <div className="contact-heading">
    <h2>
      <span className="highlight">Get In</span> Touch
    </h2>

    <p>
      Have a project in mind, a job opportunity, or just want
      to connect? Feel free to reach out.
    </p>
  </div>

  <div className="contact-layout">
    {/* LEFT: CONTACT DETAILS */}

    <div className="contact-info">
      <h3>Let's Work Together</h3>

      <p className="contact-intro">
        I'm open to Full Stack Developer, Backend Engineer,
        and AI-powered application development opportunities.
        Let's connect and build something meaningful.
      </p>

      <div className="contact-details">
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="contact-detail"
        >
          <span className="contact-detail-icon">
            <FaEnvelope />
          </span>

          <span>
            <strong>Email</strong>
            <small>{CONTACT_EMAIL}</small>
          </span>
        </a>

        <div className="contact-detail">
          <span className="contact-detail-icon">
            <FaMapMarkerAlt />
          </span>

          <span>
            <strong>Location</strong>
            <small>Lucknow, Uttar Pradesh, India</small>
          </span>
        </div>
      </div>

      <h4>Connect With Me</h4>

      <div className="contact-socials">
        <a
          href="https://github.com/omprakashtnv"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          title="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/om-gupta-coding/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <FaLinkedinIn />
        </a>

        <a
          href={`mailto:${CONTACT_EMAIL}`}
          aria-label="Email"
          title="Email"
        >
          <FaEnvelope />
        </a>
      </div>
    </div>

    {/* RIGHT: CONTACT FORM */}

    <form
      className="contact-form"
      onSubmit={handleContactSubmit}
    >
      <h3>Send Me a Message</h3>

      <div className="contact-field">
        <label htmlFor="contact-name">Your Name</label>
        <input
          id="contact-name"
          type="text"
          placeholder="Enter your name"
          value={contactForm.name}
          onChange={(e) =>
            setContactForm({
              ...contactForm,
              name: e.target.value,
            })
          }
          required
        />
      </div>

      <div className="contact-field">
        <label htmlFor="contact-email">Email Address</label>
        <input
          id="contact-email"
          type="email"
          placeholder="Enter your email"
          value={contactForm.email}
          onChange={(e) =>
            setContactForm({
              ...contactForm,
              email: e.target.value,
            })
          }
          required
        />
      </div>

      <div className="contact-field">
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          rows={5}
          placeholder="Tell me about your project or opportunity..."
          value={contactForm.message}
          onChange={(e) =>
            setContactForm({
              ...contactForm,
              message: e.target.value,
            })
          }
          required
        />
      </div>

      <button type="submit" className="contact-submit">
        <FaPaperPlane />
        Send Message
      </button>

      <p className="contact-form-note">
        Opens your default email application to send the message.
      </p>
    </form>
  </div>
</section>

    </main>
  );
}
