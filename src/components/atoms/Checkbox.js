import { cn } from "../../lib/utils";

/**
 * Atom · Checkbox
 * Casilla del sistema editorial (acento verde selva). Con `label` opcional
 * se renderiza envuelto en <label> para un área de clic cómoda.
 */

const box =
  "h-4 w-4 cursor-pointer rounded-sm border-line-300 text-jungle-500 transition-colors focus:ring-2 focus:ring-jungle-500/30 focus:ring-offset-0";

export function Checkbox({ label, className, id, ...props }) {
  const input = (
    <input type="checkbox" id={id} className={cn(box, !label && className)} {...props} />
  );
  if (!label) return input;
  return (
    <label
      htmlFor={id}
      className={cn("inline-flex cursor-pointer items-center gap-2 font-body text-sm text-ink-900", className)}
    >
      {input}
      {label}
    </label>
  );
}
