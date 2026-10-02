import { cn } from "../../lib/utils";

/**
 * Atom · Skeleton
 * Placeholder de carga con brillo en movimiento (shimmer). Combinar varios
 * para esbozar cards/listas manteniendo su geometría.
 */
export function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn("mc-shimmer rounded bg-mist-100", className)}
      aria-hidden="true"
      {...props}
    />
  );
}
