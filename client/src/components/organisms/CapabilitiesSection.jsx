import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import './CapabilitiesSection.css';

export default function CapabilitiesSection({ capabilities = [] }) {
  const [revealHeaderRef, isHeaderRevealed] = useIntersectionObserver();

  return (
    <section id="skills">
      <div ref={revealHeaderRef} className={`section-header reveal ${isHeaderRevealed ? 'visible' : ''}`}>
        <div>
          <p className="section-label">Capabilities</p>
          <h2 className="section-title">What I Do</h2>
        </div>
      </div>
      <div className="skills-grid">
        {capabilities.map((item, idx) => {
          const delayClass = idx === 0 ? '' : `reveal-delay-${idx}`;
          return (
            <SkillCard key={item.id} item={item} delayClass={delayClass} />
          );
        })}
      </div>
    </section>
  );
}

function SkillCard({ item, delayClass }) {
  const [revealRef, isRevealed] = useIntersectionObserver();
  const { id, name, desc } = item;
  return (
    <div ref={revealRef} className={`skill-card reveal ${delayClass} ${isRevealed ? 'visible' : ''}`}>
      <div className="skill-icon">{id}</div>
      <div className="skill-name">{name}</div>
      <p className="skill-desc">{desc}</p>
    </div>
  );
}
