import React, { useEffect, useState } from 'react';
import './Navbar.css';

export default function Navbar({ initials }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav id="mainNav" className={scrolled ? 'scrolled' : ''}>
      <a href="#hero" className="nav-logo">{initials || 'HS'}<span>*</span></a>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#tools">Tools</a></li>
        <li><a href="#cv">CV</a></li>
        <li><a href="#journey">Journey</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
