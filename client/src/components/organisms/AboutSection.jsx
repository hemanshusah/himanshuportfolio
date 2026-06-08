import React from 'react';
import StatNum from '../atoms/StatNum';
import pic from '../../assets/pic.png';

export default function AboutSection({ stats = [] }) {
  return (
    <section id="about">
      <div>
        <p className="about-label reveal">Who I Am</p>
        <h2 className="about-heading reveal reveal-delay-1">Building<br />Brands<br /><em>that last</em></h2>
        <p className="about-text reveal reveal-delay-2">
          With a focus on trust, creativity, and transparency, I craft
          brand identities and go-to-market strategies that resonate deeply. From zero-budget scrappy startups to
          institutional GTM plays - I work where ideas need to find their audience.
        </p>
        <div className="about-stats reveal reveal-delay-3">
          {stats.map((stat, idx) => (
            <div className="stat" key={idx}>
              <StatNum target={stat.value} suffix={stat.suffix} />
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="about-visual reveal reveal-delay-2">
        <div className="photo-frame">
          <img src={pic} alt="Himanshu Sah" />
          <div className="photo-label-tag">Himanshu Sah</div>
        </div>
        <div className="about-deco">Strategy</div>
      </div>
    </section>
  );
}
