import { cn } from "../../lib/utils";

/**
 * Atom · Count
 * Píldora numérica para conteos (p. ej. "505" mitos, N por región/tema).
 * Cifras con `tabular-nums` para alineación consistente.
 */

const variants = {
  neutral: "bg-mist-50 text-ink-700",
  jungle: "bg-jungle-tint text-jungle-700",
  river: "bg-river-tint text-river-700",
};

export function Count({ variant = "neutral", className, children, ...props }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm px-1.5 py-0.5 text-xs font-medium tabular-nums",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
