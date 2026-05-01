// src/hooks/useScrollAnimation.js
import { useEffect, useRef, useState } from "react";

export function useScrollAnimation(threshold = 0.15) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    const current = ref.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [threshold]);

  return { ref, isVisible };
}

export function useCountUp(target, duration = 2000, isVisible = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    // Parse numeric part
    const numStr = target.replace(/[^0-9.]/g, "");
    const num = parseFloat(numStr);
    if (isNaN(num)) return;

    const start = 0;
    const increment = num / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= num) {
        current = num;
        clearInterval(timer);
      }
      setCount(Math.floor(current));
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, target, duration]);

  // Re-attach suffix/prefix
  const suffix = target.replace(/[0-9.]/g, "");
  return suffix ? count + suffix : String(count);
}
