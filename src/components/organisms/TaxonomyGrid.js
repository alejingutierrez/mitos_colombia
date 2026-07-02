import { cn } from "../../lib/utils";
import { Stagger, StaggerItem } from "../atoms";
import { SectionHeader, TaxonomyCard } from "../molecules";

/**
 * Organismo · TaxonomyGrid
 * Grilla editorial de taxonomías (regiones / comunidades / categorías).
 * - <SectionHeader> opcional arriba (eyebrow + título + descripción + acción).
 * - Grilla en cascada con <Stagger>/<StaggerItem>, una <TaxonomyCard> por item.
 *
 * Presentacional y props-driven: recibe los datos por props (sin llamadas a BD).
 */

const DEFAULT_ITEMS = [
  {
    title: "Amazonas",
    href: "/regiones/amazonas",
    count: 24,
    motif: "hoja",
    description: "Selva húmeda y mitos del agua profunda.",
  },
  {
    title: "Andina",
    href: "/regiones/andina",
    count: 38,
    motif: "montana",
    description: "Cumbres, páramos y guardianes de la montaña.",
  },
  {
    title: "Caribe",
    href: "/regiones/caribe",
    count: 19,
    motif: "agua",
    description: "Costa, ríos y leyendas del litoral.",
  },
];

export function TaxonomyGrid({
  items = DEFAULT_ITEMS,
  eyebrow,
  title,
  description,
  action,
  columns = 3,
  className,
}) {
  const list = Array.isArray(items) ? items : [];
  const hasHeader = eyebrow || title || description || action;

  return (
    <div className={cn("flex flex-col gap-8", className)}>
      {hasHeader ? (
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          description={description}
          action={action}
        />
      ) : null}

      <Stagger
        className={cn(
          "grid grid-cols-1 gap-4 sm:grid-cols-2",
          columns === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3"
        )}
        gap={0.05}
      >
        {list.map((t, i) => (
          <StaggerItem key={`${t.title || t.href || "tax"}-${i}`} className="h-full">
            <TaxonomyCard {...t} className="h-full" />
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}
