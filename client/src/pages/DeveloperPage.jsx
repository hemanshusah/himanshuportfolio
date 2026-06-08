import React, { useState, useEffect } from 'react';
import './DeveloperPage.css';

export default function DeveloperPage({ onBackToPortfolio }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    requestAnimationFrame(() => setIsVisible(true));
  }, []);

  const technicalSkills = [
    { category: 'Languages', items: ['JavaScript (ES6+)', 'Python', 'HTML5', 'CSS3', 'SQL'] },
    { category: 'Frontend & UI', items: ['React.js', 'Vite', 'DOM APIs', 'Responsive Design', 'Vanilla CSS', 'UI Animation'] },
    { category: 'Backend & APIs', items: ['Node.js', 'Express.js', 'REST APIs', 'CRUD Operations', 'HTTP Protocols'] },
    { category: 'DevOps & Database', items: ['PostgreSQL', 'SQLite', 'Git & GitHub', 'CLI Tools', 'Deployment Flows'] },
    { category: 'Integrations & Tools', items: ['Google Tag Manager', 'Figma', 'Postman', 'VS Code', 'GitHub Actions'] }
  ];

  const projects = [
    {
      name: 'Vibecam',
      desc: 'Real-time social camera integration platform facilitating live video feeds and filters. Built with modern clientside capture protocols and fluid React transitions.',
      tech: ['React.js', 'WebRTC', 'Vite', 'CSS Keyframes'],
      link: 'https://github.com/hemanshusah'
    },
    {
      name: 'Event Booking Engine',
      desc: 'Full-stack online event hosting and ticket-booking platform. Integrates automated confirmation emails, RSVP databases, and guest tracking mechanisms.',
      tech: ['Node.js', 'Express', 'SQLite', 'Email APIs'],
      link: 'https://github.com/hemanshusah/event'
    },
    {
      name: 'foundershub',
      desc: 'Interactive database portal cataloging founder profiles, investment statuses, and community interactions. Curated high-performance backend pipelines.',
      tech: ['JavaScript', 'Express', 'PostgreSQL', 'RESTful API'],
      link: 'https://github.com/hemanshusah'
    },
    {
      name: 'launch-my-dreams-fund',
      desc: 'Transactional crowdfunding and contribution tracking system featuring active database verification and clean, trust-focused UX workflows.',
      tech: ['React.js', 'Express', 'State Management', 'Validations'],
      link: 'https://github.com/hemanshusah'
    }
  ];

  const recruitmentInfo = [
    {
      title: 'Hybrid Competency',
      desc: 'Bridging the gap between GTM Strategy and Functional Engineering. I build custom tooling, dashboard views, and automation routines that reduce time-to-market.'
    },
    {
      title: 'Clean Architectures',
      desc: 'Familiar with Atomic Design systems, RESTful API design, database normalization, and structured front-end development workflows.'
    },
    {
      title: 'DevOps & Automation',
      desc: 'Experienced setting up webhook routines (n8n), telemetry pipelines, automated analytics integrations, and lightweight web service hosting configurations.'
    }
  ];

  const stats = [
    { value: '30+', label: 'Github Repositories' },
    { value: '45,000+', label: 'Estimated LOC' },
    { value: '6+', label: 'Core Languages & Tools' },
    { value: '100%', label: 'Hands-on Builder' }
  ];

  return (
    <div className={`dev-page ${isVisible ? 'visible' : ''}`}>
      {/* Navigation */}
      <nav className="dev-nav">
        <button className="dev-nav-back" onClick={onBackToPortfolio}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Portfolio
        </button>
        <a href="https://github.com/hemanshusah" target="_blank" rel="noreferrer" className="dev-nav-github">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          GitHub
        </a>
      </nav>

      {/* Hero */}
      <header className="dev-hero">
        <div className="dev-hero-label">Developer Profile</div>
        <h1 className="dev-hero-title">
          The <em>Technical</em><br/>Side
        </h1>
        <p className="dev-hero-desc">
          Beyond brand strategy, I write clean code, build backends, and automate operations.
          From engineering core logic engines to crawling platforms, here are my active systems.
        </p>
        <div className="dev-stats">
          {stats.map((stat, idx) => (
            <div className="dev-stat" key={idx}>
              <div className="dev-stat-value">{stat.value}</div>
              <div className="dev-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </header>

      {/* Recruiter Focus Section */}
      <section className="dev-section">
        <div className="dev-section-header">
          <span className="dev-section-label">Overview</span>
          <h2 className="dev-section-title">Why Hire Me</h2>
        </div>
        <div className="recruiter-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {recruitmentInfo.map((info, idx) => (
            <div className="recruiter-card" key={idx} style={{ background: 'var(--dev-surface)', border: '1px solid var(--dev-border)', padding: '2rem 1.8rem', transition: 'border-color 0.3s' }}>
              <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '1.2rem', textTransform: 'uppercase', color: 'var(--dev-green)', marginBottom: '1rem' }}>{info.title}</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--dev-text-dim)', lineHeight: '1.7', fontWeight: 300, margin: 0 }}>{info.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Stack */}
      <section className="dev-section">
        <div className="dev-section-header">
          <span className="dev-section-label">Stack</span>
          <h2 className="dev-section-title">Technical Skills</h2>
        </div>
        <div className="dev-skills-grid">
          {technicalSkills.map((cat, idx) => (
            <div className="dev-skill-category" key={idx}>
              <h3 className="dev-skill-cat-title">{cat.category}</h3>
              <div className="dev-skill-pills">
                {cat.items.map((item, i) => (
                  <span className="dev-skill-pill" key={i}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="dev-section">
        <div className="dev-section-header">
          <span className="dev-section-label">GitHub Repositories</span>
          <h2 className="dev-section-title">Featured Projects</h2>
        </div>
        <div className="dev-projects-grid">
          {projects.map((project, idx) => (
            <a href={project.link} target="_blank" rel="noreferrer" className="dev-project-card" key={idx}>
              <div className="dev-project-num">{String(idx + 1).padStart(2, '0')}</div>
              <h3 className="dev-project-name">{project.name}</h3>
              <p className="dev-project-desc">{project.desc}</p>
              <div className="dev-project-tech">
                {project.tech.map((t, i) => (
                  <span className="dev-tech-tag" key={i}>{t}</span>
                ))}
              </div>
              <div className="dev-project-link-arrow">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* GitHub CTA */}
      <section className="dev-github-cta">
        <div className="dev-github-cta-inner">
          <h2 className="dev-github-title">Explore More on GitHub</h2>
          <p className="dev-github-text">Check out my repositories, contributions, and open-source work.</p>
          <a href="https://github.com/hemanshusah" target="_blank" rel="noreferrer" className="dev-github-btn">
            View GitHub Profile
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="dev-footer">
        <span>HS<span className="dev-footer-accent">*</span></span>
        <span className="dev-footer-copy">Developer Portfolio — Himanshu Sah</span>
      </footer>
    </div>
  );
}
