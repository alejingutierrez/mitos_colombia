import { cn } from "../../lib/utils";

/**
 * Atom · StatusDot
 * Punto de estado con latido perpetuo (indicadores "vivos": en línea, activo).
 */

const tones = {
  jungle: "text-jungle-500",
  river: "text-river-500",
  ink: "text-ink-500",
};

export function StatusDot({ tone = "jungle", size = 8, className, ...props }) {
  return (
    <span
      className={cn("relative inline-flex", tones[tone], className)}
      style={{ width: size, height: size }}
      {...props}
    >
      <span className="mc-pulse absolute inset-0 rounded-full" aria-hidden="true" />
      <span className="relative inline-block h-full w-full rounded-full bg-current" />
    </span>
  );
}
