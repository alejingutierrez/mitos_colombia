import Link from "next/link";
import { cn } from "../../lib/utils";
import { CONTROL_HEIGHTS, RING_BUTTON, PRESS } from "./_shared";

/**
 * Atom · Button
 * Sistema editorial minimal: esquinas rectas, texto sentence-case, peso medio.
 * Variantes: primary (verde selva) · secondary (contorno) · ghost · river.
 * Sombra tintada al acento en hover para profundidad premium.
 */

const base = cn(
  "inline-flex select-none items-center justify-center gap-2 whitespace-nowrap rounded font-body font-medium leading-none tracking-[-0.005em]",
  PRESS,
  RING_BUTTON,
  "disabled:pointer-events-none disabled:opacity-50"
);

const variants = {
  primary:
    "bg-jungle-500 text-white hover:bg-jungle-600 active:bg-jungle-700 hover:shadow-[0_10px_30px_-10px_rgba(28,92,63,0.5)]",
  secondary:
    "border border-line-200 bg-white text-ink-900 hover:border-line-300 hover:bg-mist-50 active:bg-mist-100 hover:shadow-card",
  ghost: "text-ink-700 hover:bg-mist-50 active:bg-mist-100",
  river:
    "bg-river-500 text-white hover:bg-river-600 active:bg-river-700 hover:shadow-[0_10px_30px_-10px_rgba(31,95,139,0.5)]",
};

const sizes = {
  sm: cn(CONTROL_HEIGHTS.sm, "gap-1.5 px-3 text-[13px]"),
  md: cn(CONTROL_HEIGHTS.md, "px-4 text-sm"),
  lg: cn(CONTROL_HEIGHTS.lg, "px-5 text-[15px]"),
};

/** Helper de clases compartido (reutilizado por MagneticButton). */
export function buttonClass(variant = "primary", size = "md", className) {
  return cn(base, variants[variant], sizes[size], className);
}

export function Button({ variant = "primary", size = "md", className, type = "button", ...props }) {
  return <button type={type} className={buttonClass(variant, size, className)} {...props} />;
}

export function ButtonLink({ href, variant = "primary", size = "md", className, ...props }) {
  return <Link href={href} className={buttonClass(variant, size, className)} {...props} />;
}
