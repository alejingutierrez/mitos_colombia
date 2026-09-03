import Link from "next/link";
import { Container, Icon, MotifMask } from "../atoms";
import { Header, MythWall } from "../organisms";
import { MuralCell } from "../templates/MuralTemplate";
import { REGION_MOTIFS } from "../../lib/region-info";

/**
 * Plantilla · el registro de los relatos sin pueblo atribuido.
 *
 * No usa `MuralTemplate` por una razón de fondo: esa plantilla está hecha para
 * un sujeto —un pueblo, un territorio— con su portada, su cédula y **un** muro.
 * Aquí no hay sujeto. Hay 253 relatos que comparten exactamente una cosa: que
 * no se sabe de quién son. Por eso el muro se parte en seis, uno por
 * territorio, que es la única agrupación que el archivo puede sostener sin
 * inventar; y por eso la portada no es una obra sino tinta y motivo, como las
 * láminas de las comunidades que todavía no tienen ilustración.
 *
 * Poner aquí una fotografía de portada sería atribuirle una cara a un conjunto
 * que se define por no tenerla.
 */
export function UnattributedTemplate({
  label,
  lead,
  sections = [],
  territories = [],
  total = 0,
  bucketNames = [],
}) {
  const conRelatos = territories.filter((t) => t.myths?.length);

  return (
    <>
      <Header active="/comunidades" />
      <main id="contenido" className="min-h-[100dvh] overflow-x-clip bg-paper">
        <section
          className="relative min-h-[22rem] overflow-hidden md:min-h-[30rem]"
          style={{
            backgroundImage:
              "linear-gradient(152deg, rgb(var(--jungle-700)) 0%, rgb(var(--atlas-night)) 78%)",
          }}
        >
          <span aria-hidden className="absolute inset-0 overflow-hidden">
            {/* Los seis motivos de los seis territorios, grabados y solapados:
                el conjunto no tiene una casa, tiene seis. */}
            {conRelatos.map((territorio, i) => (
              <MotifMask
                key={territorio.slug}
                src={`/motifs/${REGION_MOTIFS[territorio.slug] || "condor"}-512.png`}
                width={190}
                className="absolute text-white/[0.055]"
                style={{
                  right: `${-4 + i * 8}%`,
                  bottom: `${-12 + (i % 3) * 24}%`,
                  transform: `rotate(${(i % 2 ? 1 : -1) * (4 + i * 2)}deg)`,
                }}
              />
            ))}
          </span>

          <Container
            size="atlas"
            className="atlas-on-image relative flex min-h-[22rem] items-end pb-9 text-white md:min-h-[30rem] md:pb-14"
          >
            <div className="min-w-0 max-w-[36ch]">
              <nav
                aria-label="Ruta de navegación"
                className="flex flex-wrap items-center gap-2 text-[0.8125rem] text-white/76"
              >
                <Link
                  href="/"
                  className="border-b border-white/40 transition-colors hover:text-white"
                >
                  Inicio
                </Link>
                <span aria-hidden className="opacity-60">
                  /
                </span>
                <Link
                  href="/comunidades"
                  className="border-b border-white/40 transition-colors hover:text-white"
                >
                  Comunidades
                </Link>
                <span aria-hidden className="opacity-60">
                  /
                </span>
                <span aria-current="page">{label}</span>
              </nav>

              <p className="atlas-kicker mt-5 !text-white/85">
                Territorio sin pueblo atribuido
              </p>
              <h1 className="atlas-h1 mt-3 !text-white">{label}</h1>
              <span className="atlas-rule bg-ember-500" />
            </div>
          </Container>
        </section>

        <section className="border-b border-line-100">
          <Container size="atlas" className="py-6 md:py-7">
            <div className="grid gap-4 lg:grid-cols-[1fr_1fr_1.5fr] lg:items-start lg:gap-0">
              <MuralCell label="Relatos en este registro" first>
                <span className="atlas-figure mt-1 block font-editorial text-[length:var(--step-4)] leading-none text-jungle-700">
                  {total}
                </span>
              </MuralCell>

              <MuralCell label="Cómo están etiquetados">
                <p className="mt-2.5 text-[0.8125rem] leading-relaxed text-ink-500">
                  {bucketNames.length
                    ? `En la base figuran bajo ${bucketNames
                        .map((b) => `«${b.toLowerCase()}»`)
                        .join(" y ")}, etiquetas del importador que no nombran a un pueblo.`
                    : "Bajo etiquetas del importador que no nombran a un pueblo."}
                </p>
              </MuralCell>

              <MuralCell label="Territorios">
                <div className="mt-2.5 flex flex-wrap gap-x-3.5 gap-y-1 text-[0.8125rem] leading-[1.7] text-ink-700">
                  {conRelatos.map((territorio) => (
                    <span key={territorio.slug} className="whitespace-nowrap">
                      <a
                        href={`#territorio-${territorio.slug}`}
                        className="border-b border-line-200 transition-colors hover:text-jungle-700"
                      >
                        {territorio.name}
                      </a>{" "}
                      <span className="atlas-figure text-ink-500">
                        {territorio.myths.length}
                      </span>
                    </span>
                  ))}
                </div>
              </MuralCell>
            </div>
          </Container>
        </section>

        <Container size="atlas" className="py-12 md:py-14">
          {lead ? (
            <p className="max-w-[44ch] text-[length:var(--step-2)] leading-[1.45] tracking-[-0.005em] text-ink-900">
              {lead}
            </p>
          ) : null}

          {sections.length ? (
            <div
              className={`grid gap-9 md:gap-11 ${lead ? "mt-11 border-t border-line-100 pt-8" : ""} md:grid-cols-2 lg:grid-cols-3`}
            >
              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="atlas-title-sm">{section.title}</h2>
                  {String(section.body || "")
                    .split(/\n+/)
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

        {conRelatos.map((territorio) => (
          <div key={territorio.slug} id={`territorio-${territorio.slug}`} className="scroll-mt-24">
            <MythWall
              myths={territorio.myths}
              motif={REGION_MOTIFS[territorio.slug] || "condor"}
              heading={territorio.name}
              meta={`${territorio.myths.length} ${
                territorio.myths.length === 1 ? "relato" : "relatos"
              } sin pueblo atribuido`}
            />
            {/* Sobre la misma tinta del muro para que no se lea como otra
                sección: el paso al territorio completo, donde estos relatos
                conviven con los que sí tienen pueblo. */}
            <section className="bg-[rgb(var(--atlas-night))]">
              <Container size="atlas" className="pb-12 md:pb-14">
                <Link
                  href={`/regiones/${territorio.slug}`}
                  className="atlas-link-invert group inline-flex"
                >
                  Todo el territorio {territorio.name}
                  <Icon name="arrow-right" size={17} className="mc-arrow" />
                </Link>
              </Container>
            </section>
          </div>
        ))}

        <Container size="atlas" className="py-12 md:py-14">
          <Link href="/comunidades" className="atlas-link group inline-flex">
            Volver a las comunidades del archivo
            <Icon name="arrow-right" size={17} className="mc-arrow" />
          </Link>
        </Container>
      </main>
    </>
  );
}

export default UnattributedTemplate;
