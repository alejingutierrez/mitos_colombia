import { cn } from "../../lib/utils";
import { FIELD_BASE, FIELD_INVALID, RING_FIELD, CONTROL_HEIGHTS } from "./_shared";

/**
 * Atom · Input
 * Campo de texto del sistema editorial: borde recto, foco verde selva,
 * altura alineada con Button/Select.
 */
export function Input({ type = "text", className, invalid, ...props }) {
  return (
    <input
      type={type}
      className={cn(FIELD_BASE, CONTROL_HEIGHTS.md, "px-3", RING_FIELD, invalid && FIELD_INVALID, className)}
      aria-invalid={invalid || undefined}
      {...props}
    />
  );
}
