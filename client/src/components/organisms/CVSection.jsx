import React, { useState } from 'react';
import AccordionItem from '../molecules/AccordionItem';

export default function CVSection({ cvItems = [], resumeDownloadUrl }) {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="cv">
      <div className="cv-layout">
        <div className="cv-sticky reveal">
          <p className="section-label">Resume</p>
          <h2 className="cv-sticky-title">My<br /><em>CV</em></h2>
          <p className="cv-sticky-text">Click any role to expand the full details, responsibilities, outcomes, and skills used.</p>
          <a href={resumeDownloadUrl || '#'} className="cv-dl" download>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1V11M8 11L4 7M8 11L12 7M2 14H14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
            Download CV
          </a>
        </div>
        <div className="accordion reveal reveal-delay-1">
          {cvItems.map((item) => (
            <AccordionItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
