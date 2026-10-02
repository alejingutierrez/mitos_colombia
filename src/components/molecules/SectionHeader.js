import { cn } from "../../lib/utils";
import { Eyebrow } from "../atoms/Eyebrow";
import { Heading } from "../atoms/Heading";
import { Text } from "../atoms/Text";

/**
 * Molécula · SectionHeader
 * Encabezado de sección editorial: kicker + título + descripción, con acción
 * opcional alineada a la derecha (botón "ver todo", filtro, etc.).
 */
export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  level = 2,
  className,
}) {
  return (
    <div className={cn("flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between", className)}>
      <div className="max-w-2xl">
        {eyebrow ? (
          <Eyebrow withRule tone="jungle" className="mb-3">
            {eyebrow}
          </Eyebrow>
        ) : null}
        {title ? <Heading level={level}>{title}</Heading> : null}
        {description ? (
          <Text size="base" tone="muted" className="mt-2">
            {description}
          </Text>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
