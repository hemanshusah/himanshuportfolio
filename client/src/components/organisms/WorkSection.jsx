import React from 'react';

export default function WorkSection({ projects = [] }) {
  const countLabel = `${String(projects.length).padStart(2, '0')} Cases`;

  return (
    <section id="work">
      <div className="section-header reveal">
        <div>
          <p className="section-label">Selected Work</p>
          <h2 className="section-title">Projects</h2>
        </div>
        <div className="section-count">{countLabel}</div>
      </div>
      <div className="projects-list">
        {projects.map((project, idx) => {
          const delayClass = idx === 0 ? '' : `reveal-delay-${idx}`;
          return (
            <div className={`project-item reveal ${delayClass}`} key={project.num}>
              <div className="project-num">{project.num}</div>
              <div>
                <div className="project-name">{project.name}</div>
                <div className="project-sub">{project.sub}</div>
              </div>
              <div className={`project-type ${project.tagClass || ''}`}>{project.type}</div>
              <div className="project-result">
                <strong>{project.result}</strong>
                <span>{project.resultSub}</span>
              </div>
              <div className="project-arrow">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M4 11H18M18 11L11 4M18 11L11 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
