"use client";

import { useRef } from "react";
import { cn } from "../../lib/utils";

/**
 * Atom · Spotlight
 * Superficie con foco de luz que sigue el cursor. Actualiza variables CSS por
 * ref (sin re-render) para máximo rendimiento. `color` define el tinte del halo.
 */
export function Spotlight({ as: Tag = "div", color = "rgba(28,92,63,0.12)", className, children, style, ...props }) {
  const ref = useRef(null);

  function handleMove(e) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  }

  return (
    <Tag
      ref={ref}
      onMouseMove={handleMove}
      className={cn("mc-spotlight", className)}
      style={{ "--spot": color, ...style }}
      {...props}
    >
      {children}
    </Tag>
  );
}
