import { Container } from "../atoms";
import { Reveal, Stagger, StaggerItem } from "../atoms";
import { SectionHeader, RouteCard } from "../molecules";

/**
 * Organismo · RouteGrid
 * Grilla de rutas editoriales curadas. Server component, props-driven.
 *
 * - <SectionHeader> opcional arriba (kicker "Rutas editoriales" por defecto).
 * - Grid 1 col → 2 cols (md) con una <RouteCard> por ruta.
 * - Si una ruta no trae `tone`, se alterna jungle (par) / river (impar) por índice.
 *
 * Props:
 *   routes      [{ title, href, description?, motif?, count?, tone? }]
 *   eyebrow     kicker del encabezado (por defecto "Rutas editoriales")
 *   title       título del encabezado
 *   description descripción del encabezado
 *   action      nodo opcional alineado a la derecha del encabezado
 *   className    clases extra en el <section>
 */

const DEFAULT_ROUTES = [
  {
    title: "Guardianes del agua",
    href: "#",
    description:
      "Mitos de ríos, lagunas y madres del agua que custodian los caudales de Colombia.",
    motif: "agua",
    count: 18,
    tone: "river",
  },
  {
    title: "Cartografía de la selva",
    href: "#",
    description:
      "Relatos del monte espeso: dueños del bosque, criaturas y espíritus de la espesura.",
    motif: "hoja",
    count: 24,
    tone: "jungle",
  },
];

export function RouteGrid({
  routes = DEFAULT_ROUTES,
  eyebrow = "Rutas editoriales",
  title,
  description,
  action,
  className,
}) {
  const items = Array.isArray(routes) ? routes : [];
  const hasHeader = Boolean(eyebrow || title || description || action);

  return (
    <Container size="wide" as="section" className={className}>
      {hasHeader ? (
        <Reveal>
          <SectionHeader
            eyebrow={eyebrow}
            title={title}
            description={description}
            action={action}
            className="mb-8"
          />
        </Reveal>
      ) : null}

      <Stagger as="div" className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {items.map((route, i) => (
          <StaggerItem key={route.href ? `${route.href}-${i}` : i}>
            <RouteCard
              {...route}
              tone={route.tone || (i % 2 === 0 ? "jungle" : "river")}
            />
          </StaggerItem>
        ))}
      </Stagger>
    </Container>
  );
}
