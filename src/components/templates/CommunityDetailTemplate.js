import Image from "next/image";
import Link from "next/link";
import { cn } from "../../lib/utils";
import { Container, Icon, Motif } from "../atoms";
import { Header, MythWall } from "../organisms";

/**
 * Plantilla · CommunityDetailTemplate — la ficha de un pueblo, dirección «Mural».
 *
 * Antes componía `CedulaTemplate` (columna fija a la izquierda + cuatro
 * tarjetas destacadas + índice de renglones). Tres problemas de esa versión:
 * sólo cuatro relatos mostraban obra aunque todos la tienen; esos cuatro se
 * repetían como 01–04 del índice; y la cifra de relatos salía dos veces, en la
 * portada y en la columna.
 *
 * Aquí el orden es otro:
 *
 *   portada   la obra del pueblo, con velo liviano por la derecha
 *   banda     la ficha dura en horizontal — territorio, cifra, pueblos hermanos
 *   texto     entradilla grande + los bloques del pueblo repartidos en columnas
 *   muro      todos los relatos, una vez cada uno, con su obra
 *
 * `CedulaTemplate` sigue en pie sin tocar: es lo que usa la ficha de región,
 * que es otro encargo y se decide aparte.
 */

/** Celda de la banda de ficha. Apilada en móvil, con filete al canto en ancho. */
function StripCell({ label, first = false, className, children }) {
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

export function CommunityDetailTemplate({
  community,
  region,
  siblings = [],
  sections = [],
  lead,
  myths = [],
  motif = "condor",
  children,
}) {
  const { name, count, imageUrl, kicker } = community || {};
  const total = Number(count) || 0;

  const breadcrumb = [
    { label: "Comunidades", href: "/comunidades" },
    ...(region ? [{ label: region.name, href: `/regiones/${region.slug}` }] : []),
    { label: name },
  ];

  // Los bloques de texto se reparten según cuántos haya escritos. Sólo unos
  // pocos pueblos tienen `sections` en `COMMUNITY_INFO`; el resto cae a un
  // bloque único, y a ese conviene darle medida de lectura, no un tercio.
  const spreadColumns =
    sections.length >= 3
      ? "md:grid-cols-2 lg:grid-cols-3"
      : sections.length === 2
        ? "md:grid-cols-2"
        : "max-w-prose";

  return (
    <>
      <Header active="/comunidades" />
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
          {/* Velo propio de esta portada, más liviano que `.atlas-scrim-cover`:
              el texto vive en la banda izquierda y en la derecha la obra se
              deja ver. La cifra ya no va encima de la imagen —está en la banda
              de abajo— así que el pie necesita menos tinta que antes. */}
          <span className="atlas-scrim-portada absolute inset-0" />
          <Container
            size="atlas"
            className="atlas-on-image relative flex min-h-[24rem] items-end pb-9 text-white md:min-h-[35rem] md:pb-14"
          >
            <div className="min-w-0 max-w-[34ch]">
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

              {kicker ? (
                <p className="atlas-kicker mt-5 !text-white/85">{kicker}</p>
              ) : null}
              <h1 className="atlas-h1 mt-3 !text-white">{name}</h1>
              <span className="atlas-rule bg-ember-500" />
            </div>
          </Container>
        </section>

        <section className="border-b border-line-100">
          <Container size="atlas" className="py-6 md:py-7">
            <div className="grid gap-4 lg:grid-cols-[1fr_1fr_1.5fr] lg:items-center lg:gap-0">
              {region ? (
                <StripCell label="Territorio" first>
                  <Link
                    href={`/regiones/${region.slug}`}
                    className="atlas-title-sm group mt-2 inline-block"
                  >
                    {region.name}
                    <Icon
                      name="arrow-right"
                      size={16}
                      className="mc-arrow ml-1.5 inline"
                    />
                  </Link>
                  {region.count ? (
                    <span className="atlas-figure mt-1 block text-[0.8125rem] text-ink-500">
                      {region.count} relatos en la región
                    </span>
                  ) : null}
                </StripCell>
              ) : null}

              <StripCell label="Relatos de este pueblo" first={!region}>
                <span className="atlas-figure mt-1 block font-editorial text-[length:var(--step-4)] leading-none text-jungle-700">
                  {total}
                </span>
              </StripCell>

              {siblings.length ? (
                <StripCell label={`Otros pueblos de ${region?.name || "este territorio"}`}>
                  <p className="mt-2.5 text-[0.8125rem] leading-[1.9] text-ink-700">
                    {siblings.map((s, i) => (
                      <span key={s.slug} className="whitespace-nowrap">
                        {i > 0 ? (
                          <span aria-hidden className="mx-2 text-line-300">
                            ·
                          </span>
                        ) : null}
                        <Link
                          href={`/comunidades/${s.slug}`}
                          className="border-b border-line-200 transition-colors hover:text-jungle-700"
                        >
                          {s.name}
                        </Link>{" "}
                        <span className="atlas-figure text-ink-500">{s.count}</span>
                      </span>
                    ))}
                  </p>
                </StripCell>
              ) : (
                <StripCell label="Otros pueblos">
                  <p className="mt-2.5 text-[0.8125rem] leading-relaxed text-ink-500">
                    Ningún otro pueblo de este territorio supera todavía el umbral
                    de relatos que da página propia.
                  </p>
                </StripCell>
              )}
            </div>
          </Container>
        </section>

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
                        <p
                          key={i}
                          className="mt-2.5 leading-[1.72] text-ink-700"
                        >
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
          heading={total === 1 ? "Su relato" : `Los ${total} relatos`}
          meta="Archivo completo"
        />

        {children}
      </main>
    </>
  );
}
