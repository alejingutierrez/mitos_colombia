"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Atom · Reveal
 * Revelado de entrada al hacer scroll (fade + subida sutil), con curva
 * editorial. `delay` permite escalonar (stagger) elementos hermanos.
 * Respeta prefers-reduced-motion.
 */
export function Reveal({ as = "div", delay = 0, y = 14, once = true, className, children, ...props }) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  if (reduce) {
    const Tag = as;
    return (
      <Tag className={className} {...props}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
