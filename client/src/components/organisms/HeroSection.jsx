import React from 'react';
import ScrollIndicator from '../atoms/ScrollIndicator';
import Button from '../atoms/Button';
import './HeroSection.css';

export default function HeroSection({ profile = {} }) {
  const { name = 'Himanshu Sah', initials = 'HS', role = 'Brand Strategist & Marketer', description = '' } = profile;
  
  const nameParts = name.split(' ');
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(' ');

  return (
    <section id="hero">
      <div className="hero-bg"></div>
      <div className="hero-grain"></div>
      <ScrollIndicator />
      <div className="hero-big">{initials}</div>
      <div className="hero-tag">{role}</div>
      <h1 className="hero-title">
        {firstName}
        <br />
        <em>{lastName}</em>
      </h1>
      <div className="hero-sub">
        <p className="hero-desc">{description}</p>
        <Button href="#cv" className="hero-cta">
          View Resume{' '}
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
