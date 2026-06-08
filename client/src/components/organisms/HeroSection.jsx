import React, { useState } from 'react';
import ScrollIndicator from '../atoms/ScrollIndicator';
import Button from '../atoms/Button';

export default function HeroSection({ profile = {}, onEnterDevMode }) {
  const { name = 'Himanshu Sah', initials = 'HS', role = 'Brand Strategist & Designer', description = '' } = profile;
  const [isActivating, setIsActivating] = useState(false);
  
  const nameParts = name.split(' ');
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(' ');

  const handleDevModeClick = (e) => {
    e.preventDefault();
    setIsActivating(true);
    setTimeout(() => {
      if (onEnterDevMode) onEnterDevMode();
      setIsActivating(false);
    }, 300);
  };

  return (
    <section id="hero">
      <div className="hero-bg"></div>
      <div className="hero-grain"></div>
      <ScrollIndicator />
      <div className="hero-big">{initials}</div>

      {/* Developer button with nested SVG rectangles for a clean flowing outline border path trace */}
      <button
        onClick={handleDevModeClick}
        className={`dev-portal-icon ${isActivating ? 'active' : ''}`}
        aria-label="Enter Developer Mode"
        title="View Developer Portfolio"
      >
        <svg className="dev-border-svg" width="100%" height="100%">
          <rect className="dev-border-rect" x="1" y="1" width="40" height="40" />
          <rect className="dev-border-flow" x="1" y="1" width="40" height="40" />
        </svg>
        <svg className="dev-icon-code" width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ position: 'relative', zIndex: 2 }}>
          <path d="M7 8L3 12L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17 8L21 12L17 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 4L10 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>

      <div className="hero-tag">{role}</div>
      <h1 className="hero-title">
        {firstName}
        <br />
        <em>{lastName}</em>
      </h1>
      <div className="hero-sub">
        <p className="hero-desc">{description}</p>
        <Button href="#work" className="hero-cta">
          View Work{' '}
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M4 10H16M16 10L10 4M16 10L10 16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </Button>
      </div>
    </section>
  );
}
