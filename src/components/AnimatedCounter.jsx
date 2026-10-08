import React, { useEffect, useState, useRef } from 'react';

export default function AnimatedCounter({ end, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !startedRef.current) {
          startedRef.current = true;
          let startTime = null;

          const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            
            // Ease out cubic
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const currentCount = Math.floor(easeOutProgress * end);
            
            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [end, duration]);

  return (
    <span ref={elementRef} className="counter-number">
      {count.toLocaleString()}{suffix}
    </span>
  );
}
