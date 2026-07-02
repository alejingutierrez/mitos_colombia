import { cn } from "../../lib/utils";
import { Stagger, StaggerItem } from "../atoms";
import { MythCard, SectionHeader, EmptyState, Pagination } from "../molecules";

/**
 * Organismo · MythGrid
 * Sección de grilla de mitos (rediseño 2026). Presentacional y props-driven:
 * recibe los mitos por props (sin llamadas a base de datos).
 *
 * - Encabezado <SectionHeader> opcional (si se pasa eyebrow/title/description/action).
 * - Grilla responsive 1→2→3 columnas con entrada en cascada (<Stagger>/<StaggerItem>).
 * - Estado vacío editorial si `myths` está vacío.
 * - Paginación opcional al final (si se pasa `pagination`).
 *
 * @param {Object[]} myths - [{ slug, title, excerpt, region, community, imageUrl?, motif? }]
 * @param {string}   [eyebrow] - kicker del encabezado
 * @param {string}   [title] - título del encabezado
 * @param {string}   [description] - descripción del encabezado
 * @param {React.ReactNode} [action] - acción alineada a la derecha del encabezado
 * @param {Object}   [pagination] - { page, totalPages, makeHref }
 */

const DEFAULT_MYTHS = [
  {
    slug: "la-madre-de-agua",
    title: "La Madre de Agua",
    excerpt:
      "Espíritu guardián de ríos y quebradas del Pacífico que castiga a quien profana las aguas y seduce a los caminantes hacia la corriente.",
    region: "Pacífico",
    community: "Afrocolombiana",
    motif: "agua",
  },
  {
    slug: "el-mohan",
    title: "El Mohán",
    excerpt:
      "Ser peludo y travieso de la región Andina que habita en los remansos de los ríos, roba pescado y enamora a las lavanderas con su música.",
    region: "Andina",
    community: "Campesina",
    motif: "anaconda",
  },
  {
    slug: "el-silbon",
    title: "El Silbón",
    excerpt:
      "Alma en pena de los Llanos que carga un saco de huesos y anuncia la muerte con un silbido: mientras más lejos suena, más cerca está.",
    region: "Orinoquía",
    community: "Llanera",
    motif: "luna",
  },
];

export function MythGrid({
  myths = DEFAULT_MYTHS,
  eyebrow,
  title,
  description,
  action,
  pagination,
  className,
}) {
  const hasHeader = Boolean(eyebrow || title || description || action);
  const items = Array.isArray(myths) ? myths : [];
  const isEmpty = items.length === 0;

  return (
    <section className={cn("flex flex-col", className)}>
      {hasHeader ? (
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          description={description}
          action={action}
          className="mb-8"
        />
      ) : null}

      {isEmpty ? (
        <EmptyState
          motif="condor"
          title="Sin mitos"
          description="No encontramos mitos que coincidan con esta selección. Ajusta los filtros o vuelve al catálogo completo."
        />
      ) : (
        <Stagger
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          gap={0.06}
        >
          {items.map((m, i) => (
            <StaggerItem key={m.slug || i} className="h-full">
              <MythCard myth={m} motif={m.motif} className="h-full" />
            </StaggerItem>
          ))}
        </Stagger>
      )}

      {!isEmpty && pagination ? (
        <div className="mt-10 flex justify-center">
          <Pagination
            page={pagination.page}
            totalPages={pagination.totalPages}
            makeHref={pagination.makeHref}
          />
        </div>
      ) : null}
    </section>
  );
}
