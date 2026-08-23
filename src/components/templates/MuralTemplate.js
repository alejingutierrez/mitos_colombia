import { Children } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "../../lib/utils";
import { Container, Motif } from "../atoms";
import { Header, MythWall } from "../organisms";

/**
 * Plantilla · MuralTemplate — el armazón de las internas de taxonomía.
 *
 * Sustituye a `CedulaTemplate`, donde el archivo se servía en dos piezas:
 * cuatro relatos con obra y el resto como renglones de texto. Sólo cuatro
 * mostraban imagen aunque todos la tienen, esos cuatro se repetían al
 * principio del índice, y la cifra salía dos veces —en la portada y en la
 * columna fija.
 *
 * El orden aquí es:
 *
 *   portada   la obra del territorio o del pueblo, con velo liviano
 *   banda     la ficha dura en horizontal — cada página compone sus celdas
 *   texto     entradilla grande + los bloques repartidos en columnas
 *   muro      todos los relatos, una vez cada uno, con su obra
 *
 * La columna fija de 268px desaparece: le robaba ancho al texto para
 * sostener tres datos que caben en una banda.
 */

/** Celda de la banda de ficha. Apilada en móvil, con filete al canto en ancho. */
export function MuralCell({ label, first = false, className, children }) {
  return (
    <div
      className={cn(
        "border-t border-line-100 pt-4",
        first
          ? "lg:border-t-0 lg:pt-0"
          : "lg:border-l lg:border-t-0 lg:pl-9 lg:pt-0",
        className
      )}
    >
      <p className="atlas-kicker">{label}</p>
      {children}
    </div>
  );
}

/**
 * Lista en línea de una celda de la banda: los pueblos de un territorio, los
 * vecinos de un pueblo.
 *
 * Sin separador. Se probó con punto medio y no funciona al plegarse: el corte
 * de línea cae en el espacio que sigue al punto, así que el punto se queda
 * colgando al final de la línea —y en móvil, donde cada elemento ocupa su
 * propia línea, cuelga uno en cada una. Aquí el aire del `gap` separa y el
 * subrayado de cada enlace delimita, que es lo que el punto intentaba hacer.
 *
 * Cada elemento va entero: `whitespace-nowrap` impide que un nombre se parta
 * de su cifra.
 */
export function MuralInlineList({ children, className }) {
  const items = Children.toArray(children);
  if (!items.length) return null;

  return (
    <div
      className={cn(
        "mt-2.5 flex flex-wrap gap-x-3.5 gap-y-1 text-[0.8125rem] leading-[1.7] text-ink-700",
        className
      )}
    >
      {items.map((item, i) => (
        <span key={i} className="whitespace-nowrap">
          {item}
        </span>
      ))}
    </div>
  );
}

export function MuralTemplate({
  active,
  kicker,
  name,
  count,
  imageUrl,
  motif = "hoja",
  breadcrumb = [],
  strip,
  stripColumns = "lg:grid-cols-[1fr_1fr_1.5fr]",
  lead,
  sections = [],
  myths = [],
  countLabel,
  children,
}) {
  const total = Number(count) || 0;

  // Los bloques de texto se reparten según cuántos haya escritos. Los pueblos
  // sin `sections` caen a un bloque único, y a ese conviene darle medida de
  // lectura, no un tercio de la página.
  const spreadColumns =
    sections.length >= 3
      ? "md:grid-cols-2 lg:grid-cols-3"
      : sections.length === 2
        ? "md:grid-cols-2"
        : "max-w-prose";

  return (
    <>
      <Header active={active} />
      <main id="contenido" className="min-h-[100dvh] overflow-x-clip bg-paper">
        <section className="relative min-h-[24rem] overflow-hidden bg-[rgb(var(--atlas-night))] md:min-h-[35rem]">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt=""
              fill
              priority
              sizes="100vw"
              quality={68}
              className="object-cover"
            />
          ) : (
            <span className="absolute inset-0 flex items-center justify-center opacity-20">
              <Motif name={motif} size={220} />
            </span>
          )}
          {/* `atlas-scrim-portada` y no `atlas-scrim-cover`: la cifra bajó a la
              banda de ficha, así que el velo vertical puede ceder y dejar ver
              la obra, que es el mejor activo del archivo. */}
          <span className="atlas-scrim-portada absolute inset-0" />
          <Container
            size="atlas"
            className="atlas-on-image relative flex min-h-[24rem] items-end pb-9 text-white md:min-h-[35rem] md:pb-14"
          >
            <div className="min-w-0 max-w-[34ch]">
              {breadcrumb.length ? (
                <nav
                  aria-label="Ruta de navegación"
                  className="flex flex-wrap items-center gap-2 text-[0.8125rem] text-white/76"
                >
                  {breadcrumb.map((crumb, i) => (
                    <span key={crumb.label} className="flex items-center gap-2">
                      {i > 0 ? (
                        <span aria-hidden className="opacity-60">
                          /
                        </span>
                      ) : null}
                      {crumb.href ? (
                        <Link
                          href={crumb.href}
                          className="border-b border-white/40 transition-colors hover:text-white"
                        >
                          {crumb.label}
                        </Link>
                      ) : (
                        <span aria-current="page">{crumb.label}</span>
                      )}
                    </span>
                  ))}
                </nav>
              ) : null}

              {kicker ? (
                <p className="atlas-kicker mt-5 !text-white/85">{kicker}</p>
              ) : null}
              <h1 className="atlas-h1 mt-3 !text-white">{name}</h1>
              <span className="atlas-rule bg-ember-500" />
            </div>
          </Container>
        </section>

        {strip ? (
          <section className="border-b border-line-100">
            <Container size="atlas" className="py-6 md:py-7">
              <div className={cn("grid gap-4 lg:items-start lg:gap-0", stripColumns)}>
                {strip}
              </div>
            </Container>
          </section>
        ) : null}

        {sections.length || lead ? (
          <Container size="atlas" className="py-12 md:py-14">
            {lead ? (
              <p className="max-w-[44ch] text-[length:var(--step-2)] leading-[1.45] tracking-[-0.005em] text-ink-900">
                {lead}
              </p>
            ) : null}

            {sections.length ? (
              <div
                className={cn(
                  "grid gap-9 md:gap-11",
                  lead && "mt-11 border-t border-line-100 pt-8",
                  spreadColumns
                )}
              >
                {sections.map((section) => (
                  <section key={section.title}>
                    <h2 className="atlas-title-sm">{section.title}</h2>
                    {String(section.body || "")
                      .split(/\n{1,}/)
                      .map((paragraph) => paragraph.trim())
                      .filter(Boolean)
                      .map((paragraph, i) => (
                        <p key={i} className="mt-2.5 leading-[1.72] text-ink-700">
                          {paragraph}
                        </p>
                      ))}
                  </section>
                ))}
              </div>
            ) : null}
          </Container>
        ) : null}

        <MythWall
          myths={myths}
          motif={motif}
          heading={countLabel || (total === 1 ? "Su relato" : `Los ${total} relatos`)}
          meta="Archivo completo"
        />

        {children}
      </main>
    </>
  );
}
