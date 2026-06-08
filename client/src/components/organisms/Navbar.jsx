import React, { useEffect, useState } from 'react';

export default function Navbar({ initials }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav id="mainNav" style={{
      backdropFilter: scrolled ? 'blur(20px)' : '',
      background: scrolled ? 'rgba(10, 10, 10, 0.9)' : ''
    }}>
      <a href="#hero" className="nav-logo">{initials || 'HS'}<span>*</span></a>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#tools">Tools</a></li>
        <li><a href="#cv">CV</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
