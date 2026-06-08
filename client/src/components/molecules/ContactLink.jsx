import React from 'react';
import './ContactLink.css';

export default function ContactLink({ label, text, href, icon = '@' }) {
  return (
    <a href={href} className="contact-link">
      <div className="contact-link-icon">{icon}</div>
      <div>
        <span className="contact-link-label">{label}</span>
        <div className="contact-link-text">{text}</div>
      </div>
    </a>
  );
}
