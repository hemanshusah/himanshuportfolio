import React from 'react';
import './MarqueeSection.css';

export default function MarqueeSection({ items = [] }) {
  // Duplicate the array to support infinite scrolling wraps
  const listToRender = items.length > 0 ? [...items, ...items, ...items, ...items] : [];

  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {listToRender.map((item, idx) => (
          <div className="marquee-item" key={idx}>
            <span className="marquee-dot"></span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
