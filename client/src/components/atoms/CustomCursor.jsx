import React, { useEffect, useState, useRef } from 'react';
import './CustomCursor.css';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [ringPosition, setRingPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const ringRef = useRef({ x: 0, y: 0 });
  const requestRef = useRef(null);

  useEffect(() => {
    // Detect mobile or touch capability
    const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    const isMobileViewport = window.matchMedia("(max-width: 900px)").matches;
    setIsMobile(isTouch || isMobileViewport);

    if (isTouch || isMobileViewport) return;

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e) => {
      const target = e.target;
      if (target && (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('label') ||
        target.closest('.acc-trigger') ||
        target.closest('.cv-dl') ||
        target.closest('.contact-link') ||
        target.closest('.project-item')
      )) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const loop = () => {
      const dx = position.x - ringRef.current.x;
      const dy = position.y - ringRef.current.y;
      
      ringRef.current.x += dx * 0.12;
      ringRef.current.y += dy * 0.12;

      setRingPosition({ x: ringRef.current.x, y: ringRef.current.y });
      requestRef.current = requestAnimationFrame(loop);
    };

    requestRef.current = requestAnimationFrame(loop);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [position, isMobile]);

  if (isMobile) return null;

  return (
    <>
      <div className={`cursor ${isHovered ? 'hovered' : ''}`} style={{ left: `${position.x}px`, top: `${position.y}px` }}></div>
      <div className={`cursor-ring ${isHovered ? 'hovered' : ''}`} style={{ left: `${ringPosition.x}px`, top: `${ringPosition.y}px` }}></div>
    </>
  );
}
