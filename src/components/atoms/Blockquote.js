import { cn } from "../../lib/utils";

/**
 * Atom · Blockquote
 * Cita destacada dentro del contenido de un mito. Acento verde selva al margen.
 */
export function Blockquote({ cite, className, children, ...props }) {
  return (
    <figure className={cn("my-4", className)} {...props}>
      <blockquote className="border-l-2 border-jungle-500 pl-4 font-display text-lg leading-snug text-ink-900">
        {children}
      </blockquote>
      {cite ? (
        <figcaption className="mt-2 pl-4 font-body text-sm text-ink-500">— {cite}</figcaption>
      ) : null}
    </figure>
  );
}
