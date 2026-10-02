import { cn } from "../../lib/utils";
import { FIELD_BASE, FIELD_INVALID, RING_FIELD } from "./_shared";

/**
 * Atom · Textarea
 * Área de texto (comentarios, contacto). Misma base que Input, altura flexible.
 */
export function Textarea({ className, invalid, rows = 4, ...props }) {
  return (
    <textarea
      rows={rows}
      className={cn(FIELD_BASE, "min-h-[96px] resize-y px-3 py-2 leading-relaxed", RING_FIELD, invalid && FIELD_INVALID, className)}
      aria-invalid={invalid || undefined}
      {...props}
    />
  );
}
