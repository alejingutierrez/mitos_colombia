"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

/**
 * Atom · CountUp
 * Cifra que cuenta hacia arriba al entrar en viewport (para estadísticas).
 * Interpola con ease-out cúbico; respeta prefers-reduced-motion.
 */
export function CountUp({ to = 0, duration = 1.4, suffix = "", className, ...props }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setValue(to);
      return;
    }
    let raf;
    let startTs;
    const step = (ts) => {
      if (startTs === undefined) startTs = ts;
      const p = Math.min(1, (ts - startTs) / (duration * 1000));
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration, reduce]);

  return (
    <span ref={ref} className={className} {...props}>
      {value.toLocaleString("es")}
      {suffix}
    </span>
  );
}
