import React from 'react';
import './Footer.css';

export default function Footer({ initials, location }) {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-logo">{initials || 'HS'}<span>*</span></div>
      <div className="footer-copy">© {year} Himanshu Sah | {location || 'Bengaluru, India'}</div>
    </footer>
  );
}
