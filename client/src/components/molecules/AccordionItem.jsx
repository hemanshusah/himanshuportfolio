import React from 'react';
import './AccordionItem.css';

export default function AccordionItem({ item, isOpen, onToggle }) {
  const { index, role, company, tag, date, highlight, highlightLabel, bullets } = item;
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
          <span className="acc-tag">{tag}</span>
          <span className="acc-date">{date}</span>
        </div>
        <svg className="acc-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
      <div className="acc-body">
        <div className="acc-inner">
          <div className="acc-content">
            {highlight && (
              <div className="acc-highlight">
                <div>
                  <div className="acc-highlight-num">{highlight}</div>
                  <div className="acc-highlight-label">{highlightLabel}</div>
                </div>
              </div>
            )}
            <ul className="acc-bullets">
              {bullets.map((bullet, idx) => (
                <li key={idx}>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
