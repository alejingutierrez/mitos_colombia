import Link from "next/link";
import { cn } from "../../lib/utils";

/**
 * Atom · Tag
 * Etiqueta editorial rectangular para región, comunidad, tema, etc.
 * Variantes de color: neutral · jungle · river.
 */

const base =
  "inline-flex items-center gap-1 rounded-sm px-2 py-0.5 text-xs font-medium leading-normal";

const variants = {
  neutral: "border border-line-100 bg-mist-50 text-ink-700",
  jungle: "bg-jungle-tint text-jungle-700",
  river: "bg-river-tint text-river-700",
  outline: "border border-line-200 text-ink-700",
};

const linkHover = {
  neutral: "hover:border-line-200 hover:bg-mist-100",
  jungle: "hover:bg-jungle-500 hover:text-white",
  river: "hover:bg-river-500 hover:text-white",
  outline: "hover:border-line-300 hover:bg-mist-50",
};

export function Tag({ variant = "neutral", className, children, ...props }) {
  return (
    <span className={cn(base, variants[variant], className)} {...props}>
      {children}
    </span>
  );
}

export function TagLink({ href, variant = "neutral", className, children, ...props }) {
  return (
    <Link
      href={href}
      className={cn(base, variants[variant], "transition-colors duration-150", linkHover[variant], className)}
      {...props}
    >
      {children}
    </Link>
  );
}
