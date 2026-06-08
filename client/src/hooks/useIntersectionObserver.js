import { useEffect, useRef, useState } from 'react';

export default function useIntersectionObserver(options = { threshold: 0.08 }) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
      // Once it has revealed, we can unobserve if we want it to remain visible
      if (entry.isIntersecting) {
        observer.unobserve(currentElement);
      }
    }, options);

    observer.observe(currentElement);

    return () => {
      if (currentElement && !isIntersecting) {
        observer.unobserve(currentElement);
      }
    };
  }, [options, isIntersecting]);

  return [elementRef, isIntersecting];
}
