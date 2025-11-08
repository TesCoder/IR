// components/CountUp.js
import { useEffect, useRef, useState } from "react";

export default function CountUp({ end = 100, duration = 5000, prefix = "", suffix = "" }) {
  const [val, setVal] = useState(0);
  const started = useRef(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const animate = (t) => {
          const p = Math.min(1, (t - start) / duration);
          const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
          setVal(Math.round(end * eased));
          if (p < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }
    }, { threshold: 0.3 });

    io.observe(el);
    return () => io.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {prefix}{val.toLocaleString()}{suffix}
    </span>
  );
}
