import React, { useEffect, useState, useRef } from 'react';
import './StatNum.css';

export default function StatNum({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animated.current) {
        animated.current = true;
        let startTimestamp = null;
        const duration = 1800;
        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3); // cubic ease-out
          setCount(Math.floor(ease * target));
          if (progress < 1) {
            requestAnimationFrame(step);
          }
        };
        requestAnimationFrame(step);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.2 }); // Trigger slightly earlier for a better responsive feel

    const currentEl = elementRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
    };
  }, [target]);

  return (
    <div ref={elementRef} className="stat-num">
      {count}{suffix}
    </div>
  );
}
