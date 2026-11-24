
"use client";

import { useEffect, useState } from "react";

import { FaGithub, FaLinkedinIn, FaFileAlt, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane, FaDownload, FaExternalLinkAlt, } from "react-icons/fa";

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
    image: "/portfolio/projects/lei.png",
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
    image: "/portfolio/projects/lmexchange.png",
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
    image: "/portfolio/projects/education.png",
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
    image: "/portfolio/projects/ecommerce.png",
    liveUrl: "",
    githubUrl: "",
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
    image: "/portfolio/projects/sentinel.png",
    liveUrl: "https://sentinel-ai-audit.vercel.app/",
    githubUrl: "https://github.com/omprakashtnv/SentinelAI_Audit",
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
    image: "/portfolio/projects/docusense.png",
    liveUrl: "",
    githubUrl: "https://github.com/omprakashtnv/Docusense.ai",
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



export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const CONTACT_EMAIL = "omprakash1997242@gmail.com";

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleContactSubmit = (e: any) => {
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

  const BASE_PATH = "/portfolio";

  return (
    <main className="portfolio">
      {/* NAVIGATION */}
      <header className="site-header">
        <a href="#home" className="logo">
          <span className="logo-icon">&lt;/&gt;</span>
          <span>OM</span>
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

      {/* HOME + ABOUT */}
      <section className="hero hero-simple" id="home">
        <div className="hero-portrait">
          <div className="about-photo-ring">
            <img src={`${BASE_PATH}/about/profile.png`} alt="Om Prakash Gupta" className="about-photo" />
          </div>
          <div className="about-socials" aria-label="Social profiles">
            <a href="https://github.com/omprakashtnv" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub size={20} /></a>
            <a href="https://www.linkedin.com/in/om-gupta-coding/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn size={20} /></a>
            <a href={`mailto:${CONTACT_EMAIL}`} aria-label="Email"><FaEnvelope size={20} /></a>
          </div>
        </div>
        <div className="copy" id="about">
          <div className="status"><span className="status-dot">●</span> OPEN TO OPPORTUNITIES</div>
          <p className="kicker">HELLO, I'M</p>
          <h1>Om Prakash <span>Gupta.</span></h1>
          <h2 className="role">Full Stack Developer &amp; Software Engineer</h2>
          <p className="description">
            I'm a Full Stack Developer with 3+ years of experience building
            enterprise SaaS platforms, FinTech applications and AI-powered products.
            I work with React, Next.js, TypeScript, Node.js, PostgreSQL and AWS,
            with hands-on experience in microservices, secure APIs and RAG.
          </p>
          <p className="hero-impact">
            At LEI International, I contributed to an enterprise platform serving
            26+ countries and worked on 5 microservices, developing 3 personally.
          </p>
          <div className="actions">
            <a href="#projects" className="primary" style={{ gap: "8px" }}>
              <FaExternalLinkAlt />
              View Projects
            </a>

            <a
              href="/portfolio/resume.pdf"
              download="Omprakash_Gupta_3+Yr_Resume.pdf"
              className="outline resume-button"
            >
              <FaDownload />
              Download Resume
            </a>
            <a href="#contact" className="outline">Contact Me</a>
          </div>
          <div className="stats">
            <div><strong>3+</strong><small>Years Experience</small></div>
            <div><strong>05</strong><small>Microservices</small></div>
            <div><strong>26+</strong><small>Countries Served</small></div>
            <div><strong>AI</strong><small>GenAI &amp; RAG</small></div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="projects" id="projects">
        <h2><span className="highlight">Featured</span>{" "}Projects</h2>
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


      {/* EDUCATION */}
      <section id="education" className="info education-section">
        <h2><span className="highlight">Education</span></h2>
        <div className="education-timeline">
          <article className="education-card">
            <span className="education-date">Sep 2024 – Sep 2025</span>
            <div className="education-degree">Minor Course in Artificial Intelligence (AI)</div>
            <p className="education-field">IIT Ropar</p>
            <p className="education-university">Artificial Intelligence · Minor Course</p>
          </article>
          <article className="education-card">
            <span className="education-date">July 2014 – Sep 2018</span>
            <div className="education-degree">Bachelor of Technology (B.Tech)</div>
            <p className="education-field">Electrical & Electronics Engineering</p>
            <p className="education-university">Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow</p>
          </article>
        </div>
      </section>

      {/* CONTACT */}

      <section id="contact" className="info contact-section">
        <div className="contact-heading">
          <h2>
            <span className="highlight">Get In</span> Touch
          </h2>

          <p>
            Hiring for a Full Stack, Backend or Software Engineer role?
            Let’s connect and discuss how I can contribute to your team.
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

              <a href="tel:+918115601041" className="contact-detail" aria-label="Call +91 81156 01041">
                <span className="contact-detail-icon">
                  <FaPhoneAlt />
                </span>
                <span>
                  <strong>Phone</strong>
                  <small>+91 81156 01041</small>
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
