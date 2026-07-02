import { cn } from "../../lib/utils";

/**
 * Atom · Spinner
 * Indicador de carga circular. Hereda color vía currentColor.
 */
export function Spinner({ size = 20, className, label = "Cargando", ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("inline-block animate-spin text-jungle-500", className)}
      role="status"
      aria-label={label}
      {...props}
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.2" strokeWidth="3" />
      <path
        d="M21 12a9 9 0 0 0-9-9"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
