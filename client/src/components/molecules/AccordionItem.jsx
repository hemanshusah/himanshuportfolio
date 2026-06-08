import React from 'react';

export default function AccordionItem({ item, isOpen, onToggle }) {
  const { index, role, company, tag, tagClass = '', date, highlights = [], bullets = [], skills = [] } = item;
  return (
    <div className={`acc-item ${isOpen ? 'open' : ''}`}>
      <button className="acc-trigger" onClick={onToggle} aria-expanded={isOpen}>
        <div className="acc-trigger-left">
          <span className="acc-index">{index}</span>
          <div className="acc-title-wrap">
            <div className="acc-role">{role}</div>
            <div className="acc-company">{company}</div>
          </div>
        </div>
        <div className="acc-meta">
          <span className={`acc-tag ${tagClass}`}>{tag}</span>
          <span className="acc-date">{date}</span>
        </div>
        <svg className="acc-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
      <div className="acc-body">
        <div className="acc-inner">
          <div className="acc-content">
            {highlights && highlights.length > 0 && (
              <div className="acc-highlight" style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem' }}>
                {highlights.map((hl, idx) => (
                  <div key={idx}>
                    <div className="acc-highlight-num">{hl.num}</div>
                    <div className="acc-highlight-label" dangerouslySetInnerHTML={{ __html: hl.label }}></div>
                  </div>
                ))}
              </div>
            )}
            <ul className="acc-bullets">
              {bullets.map((bullet, idx) => (
                <li key={idx} dangerouslySetInnerHTML={{ __html: bullet }}></li>
              ))}
            </ul>
            {skills && skills.length > 0 && (
              <div className="acc-skills-row">
                {skills.map((skill, idx) => (
                  <span className="acc-skill-chip" key={idx}>{skill}</span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
