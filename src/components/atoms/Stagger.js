"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Atom · Stagger / StaggerItem
 * Orquestación en cascada: los hijos aparecen escalonados al entrar en viewport.
 * Envuelve una grilla/lista en <Stagger> y cada hijo en <StaggerItem>.
 * Respeta prefers-reduced-motion.
 */

export function Stagger({ as = "div", gap = 0.07, delay = 0, once = true, className, children, ...props }) {
  const reduce = useReducedMotion();
  if (reduce) {
    const Tag = as;
    return (
      <Tag className={className} {...props}>
        {children}
      </Tag>
    );
  }
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-8% 0px" }}
      variants={{ show: { transition: { staggerChildren: gap, delayChildren: delay } } }}
      {...props}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerItem({ as = "div", y = 16, className, children, ...props }) {
  const reduce = useReducedMotion();
  if (reduce) {
    const Tag = as;
    return (
      <Tag className={className} {...props}>
        {children}
      </Tag>
    );
  }
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
      }}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
