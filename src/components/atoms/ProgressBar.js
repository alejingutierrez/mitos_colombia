import { cn } from "../../lib/utils";

/**
 * Atom · ProgressBar
 * Barra de progreso (p. ej. avance de lectura de un mito). `value` de 0 a 100.
 */
export function ProgressBar({ value = 0, className, trackClassName, ...props }) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div
      className={cn("h-1 w-full overflow-hidden bg-mist-100", trackClassName)}
      role="progressbar"
      aria-valuenow={Math.round(pct)}
      aria-valuemin={0}
      aria-valuemax={100}
      {...props}
    >
      <div
        className={cn("h-full bg-jungle-500 transition-[width] duration-150", className)}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
