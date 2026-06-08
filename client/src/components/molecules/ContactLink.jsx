import React from 'react';
import './ContactLink.css';

export default function ContactLink({ label, text, href, icon = '@', target, rel }) {
  return (
    <a href={href} className="contact-link" target={target} rel={target === '_blank' ? 'noopener noreferrer' : rel}>
      <div className="contact-link-icon">{icon}</div>
      <div>
        <span className="contact-link-label">{label}</span>
        <div className="contact-link-text">{text}</div>
      </div>
    </a>
  );
}
