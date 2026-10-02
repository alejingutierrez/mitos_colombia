import { cn } from "../../lib/utils";
import { Motif } from "../atoms/Motif";
import { Heading } from "../atoms/Heading";
import { Text } from "../atoms/Text";

/**
 * Molécula · EmptyState
 * Estado vacío compuesto (sin resultados, sin comentarios aún). Motivo tenue +
 * título + descripción + acción opcional.
 */
export function EmptyState({ motif = "hoja", title, description, action, className }) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded border border-dashed border-line-200 px-6 py-14 text-center",
        className
      )}
    >
      <Motif name={motif} size={64} className="mb-4 opacity-25" />
      <Heading level={3} className="mb-1.5">
        {title}
      </Heading>
      {description ? (
        <Text size="sm" tone="muted" className="mb-5 max-w-sm">
          {description}
        </Text>
      ) : null}
      {action}
    </div>
  );
}
