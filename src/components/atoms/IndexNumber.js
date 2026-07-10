import { cn } from "../../lib/utils";

/**
 * Atom · IndexNumber
 * Numeral de índice editorial (01, 02…) — cifra grande y tenue, recurso de
 * revista para numerar secciones o pasos.
 */

const sizes = {
  sm: "text-lg",
  md: "text-2xl",
  lg: "text-4xl",
};

export function IndexNumber({ value, size = "md", className, ...props }) {
  const label = typeof value === "number" ? String(value).padStart(2, "0") : value;
  return (
    <span
      className={cn(
        "mc-index font-display font-semibold tabular-nums text-ink-700",
        sizes[size],
        className
      )}
      aria-hidden="true"
      {...props}
    >
      {label}
    </span>
  );
}
