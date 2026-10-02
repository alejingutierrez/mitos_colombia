"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { buttonClass } from "./Button";

/**
 * Atom · MagneticButton
 * CTA que se atrae ligeramente hacia el cursor (micro-física magnética).
 * Usa useMotionValue/useSpring fuera del ciclo de render (sin re-renders).
 * Respeta prefers-reduced-motion.
 */
export function MagneticButton({
  variant = "primary",
  size = "md",
  strength = 0.35,
  className,
  children,
  ...props
}) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 170, damping: 15, mass: 0.1 });
  const sy = useSpring(y, { stiffness: 170, damping: 15, mass: 0.1 });

  function handleMove(e) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  }
  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.button
      ref={ref}
      type="button"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={reduce ? undefined : { x: sx, y: sy }}
      className={buttonClass(variant, size, className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}
