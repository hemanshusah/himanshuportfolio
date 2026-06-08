import React from 'react';

export default function CapabilitiesSection({ capabilities = [] }) {
  return (
    <section id="skills">
      <div className="section-header reveal">
        <div>
          <p className="section-label">Capabilities</p>
          <h2 className="section-title">What I Do</h2>
        </div>
      </div>
      <div className="skills-grid">
        {capabilities.map((item, idx) => {
          const delayClass = idx === 0 ? '' : `reveal-delay-${idx}`;
          return (
            <div className={`skill-card reveal ${delayClass}`} key={item.id}>
              <div className="skill-icon">{item.id}</div>
              <div className="skill-name">{item.name}</div>
              <p className="skill-desc">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
