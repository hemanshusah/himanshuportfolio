import React from 'react';
import './JourneyCard.css';

export default function JourneyCard({ item }) {
  const { role, company, tags, date, current } = item;
  return (
    <div className="journey-card">
      <div>
        <div className="journey-role">{role}</div>
        <div className="journey-company">{company}</div>
        <div className="journey-tags">
          {tags.map((t, idx) => (
            <span className="journey-tag" key={idx}>{t}</span>
          ))}
        </div>
      </div>
      <div className="journey-right">
        <div className="journey-date">{date}</div>
        {current && <span className="journey-badge now">Current</span>}
      </div>
    </div>
  );
}
