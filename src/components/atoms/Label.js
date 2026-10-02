import { cn } from "../../lib/utils";

/**
 * Atom · Label
 * Etiqueta de campo de formulario.
 */
export function Label({ className, children, required, ...props }) {
  return (
    <label
      className={cn("mb-1.5 block font-body text-sm font-medium text-ink-900", className)}
      {...props}
    >
      {children}
      {required ? <span className="ml-0.5 text-jungle-600">*</span> : null}
    </label>
  );
}
