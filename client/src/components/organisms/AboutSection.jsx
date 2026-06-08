import React from 'react';
import StatNum from '../atoms/StatNum';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import pic from '../../assets/pic.png';
import './AboutSection.css';

export default function AboutSection({ stats = [] }) {
  const [revealRef, isRevealed] = useIntersectionObserver();

  return (
    <section id="about" ref={revealRef} className={`reveal ${isRevealed ? 'visible' : ''}`}>
      <div>
        <p className="about-label">Who I Am</p>
        <h2 className="about-heading">Building<br />Brands<br /><em>that last</em></h2>
        <p className="about-text">
          With a focus on trust, creativity, and transparency, I craft
          brand identities and go-to-market strategies that resonate deeply. From zero-budget scrappy startups to
          institutional GTM plays - I work where ideas need to find their audience.
        </p>
        <div className="about-stats">
          {stats.map((stat, idx) => (
            <div className="stat" key={idx}>
              <StatNum target={stat.value} suffix={stat.suffix} />
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="about-visual">
        <div className="photo-frame">
          <img src={pic} alt="Himanshu Sah" />
          <div className="photo-label-tag">Himanshu Sah</div>
        </div>
        <div className="about-deco">Strategy</div>
      </div>
    </section>
  );
}
