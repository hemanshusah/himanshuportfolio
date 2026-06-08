import React from 'react';

export default function Footer({ initials, location }) {
  return (
    <footer>
      <div className="footer-logo">{initials || 'HS'}<span>*</span></div>
      <div className="footer-copy">© 2025 Himanshu Sah — Brand Strategist</div>
      <div className="footer-copy">{location || 'Bengaluru, India'}</div>
    </footer>
  );
}
