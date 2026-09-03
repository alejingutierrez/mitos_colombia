import Link from "next/link";
import { Container, Icon, Motif } from "../../components/atoms";
import { Header } from "../../components/organisms";
import { RoutePlate } from "../../components/rutas";
import { ROUTES } from "../../lib/routes";
import { buildSeoMetadata, getSeoEntry } from "../../lib/seo";
import { getArchiveTotals, getRoutesAtlas, summarizeRoute } from "./route-data";

export const revalidate = 86400;

export async function generateMetadata() {
  const seo = await getSeoEntry("page", "rutas");
  return buildSeoMetadata({
    fallback: {
      title: "Rutas | Mitos de Colombia",
      description: `Las ${ROUTES.length} rutas editoriales del archivo: recorridos que reúnen mitos colombianos por lo que tienen en común, con su territorio y su pueblo de origen.`,
      keywords: [
        "rutas",
        "mitos colombianos",
        "curaduría",
        "territorio",
        "tradición oral",
      ],
    },
    seo,
    canonicalPath: "/rutas",
  });
}

const GUIDE = [
  [
    "Cada ruta sostiene una idea",
    "No agrupa por etiqueta ni por región: reúne relatos que resuelven un mismo asunto —el castigo que queda en la piedra, el agua que avisa antes de venir— aunque vengan de pueblos que nunca se cruzaron.",
  ],
  [
    "El recorrido va por movimientos",
    "Dentro de cada ruta los relatos se leen en tramos, y cada tramo explica qué comparten los que están en él. Se puede entrar por cualquiera.",
  ],
  [
    "Debajo siempre está el dato",
    "Al final de cada ruta quedan sus relatos completos, con el territorio del que vienen y el pueblo en cuyo registro figuran, para volver a la ficha original.",
  ],
];

export default async function RutasPage() {
  const [atlas, totals] = await Promise.all([getRoutesAtlas(), getArchiveTotals()]);

  /* El índice se pinta desde el censo de curaduría, no desde lo que devolvió
     la consulta: si la base de datos falla, las diecinueve rutas siguen
     listadas y lo único que se pierde es la obra. */
  const routes = ROUTES.map((route, index) => {
    const hydrated = atlas.routes.find((item) => item.slug === route.slug);
    const summary = hydrated ? summarizeRoute(hydrated) : null;
    return {
      slug: route.slug,
      index,
      title: route.title,
      detail: route.detail || route.description,
      tone: route.tone,
      accent: route.accent,
      imageUrl: atlas.art.get(route.slug)?.url || null,
      mythCount: summary?.mythCount || route.mythSlugs.length,
      regions: summary?.regions.slice(0, 4).map((region) => region.name) || [],
    };
  });

  const reunidos = new Set(ROUTES.flatMap((route) => route.mythSlugs)).size;

  return (
    <>
      <Header active="/rutas" />
      <main id="contenido" className="min-h-[100dvh] overflow-x-clip bg-paper">
        {/* Portada tipográfica: las diecinueve fichas de abajo son obra, y
            una foto más arriba las apagaría. Además ninguna ruta merece ser
            la cara de todas las demás. */}
        <section className="relative overflow-hidden bg-[rgb(var(--atlas-night))] text-white">
          {/* Marca de agua. Oculta en teléfono: a 340px sobre una pantalla de
              375 no es una marca, es el fondo entero detrás del texto. */}
          <span
            className="pointer-events-none absolute right-10 top-1/2 hidden -translate-y-1/2 opacity-[0.12] md:block"
            aria-hidden="true"
          >
            <Motif name="montana" size={340} />
          </span>
          <Container size="atlas" className="relative py-16 md:py-24">
            <p className="atlas-kicker !text-ember-400">El atlas de rutas</p>
            <h1 className="atlas-h1 mt-4 max-w-[18ch] !text-white">
              Maneras de cruzar el archivo
            </h1>
            <span className="atlas-rule bg-ember-500" />
            <p className="mt-6 max-w-[54ch] text-[length:var(--step-1)] leading-[1.6] text-white/82">
              Una ruta reúne relatos que resuelven el mismo asunto, aunque los
              cuenten pueblos que nunca se cruzaron. Cada una se lee de
              principio a fin o se abre por donde interese.
            </p>

            <dl className="mt-10 flex flex-wrap gap-x-12 gap-y-6 border-t border-white/15 pt-7">
              <div>
                <dt className="atlas-kicker !text-white/60">Rutas publicadas</dt>
                <dd className="atlas-figure mt-1.5 font-editorial text-[length:var(--step-4)] leading-none text-ember-400">
                  {ROUTES.length}
                </dd>
              </div>
              <div>
                <dt className="atlas-kicker !text-white/60">Relatos reunidos</dt>
                <dd className="atlas-figure mt-1.5 font-editorial text-[length:var(--step-4)] leading-none text-ember-400">
                  {reunidos}
                  {totals.myths ? (
                    <span className="text-[length:var(--step-1)] text-white/60">
                      {" "}
                      de {totals.myths}
                    </span>
                  ) : null}
                </dd>
              </div>
              {totals.regions ? (
                <div>
                  <dt className="atlas-kicker !text-white/60">Territorios</dt>
                  <dd className="atlas-figure mt-1.5 font-editorial text-[length:var(--step-4)] leading-none text-ember-400">
                    {totals.regions}
                  </dd>
                </div>
              ) : null}
            </dl>
          </Container>
        </section>

        {/* El índice. Una ficha por ruta, todas del mismo tamaño: el punto es
            poder compararlas, no que una destaque. */}
        <Container id="rutas" size="atlas" className="scroll-mt-20 py-14 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <h2 className="atlas-section-heading">El índice</h2>
              <span className="atlas-rule" />
            </div>
            <p className="atlas-kicker shrink-0 text-ink-500">
              En orden de publicación
            </p>
          </div>

          <ul className="mt-9 grid list-none gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {routes.map((route) => (
              <li key={route.slug}>
                <RoutePlate {...route} priority={route.index < 3} />
              </li>
            ))}
          </ul>
        </Container>

        <section className="border-t border-line-100 bg-mist-50">
          <Container size="atlas" className="py-14 md:py-20">
            <h2 className="atlas-section-heading">Cómo se lee una ruta</h2>
            <span className="atlas-rule" />
            <div className="mt-10 grid gap-9 md:grid-cols-3 md:gap-11">
              {GUIDE.map(([title, description], index) => (
                <div key={title}>
                  <span className="atlas-figure font-editorial text-[length:var(--step-4)] leading-none text-jungle-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="atlas-title-sm mt-4">{title}</h3>
                  <p className="mt-3 leading-[1.72] text-ink-700">{description}</p>
                </div>
              ))}
            </div>
            <Link href="/mitos" className="atlas-link mt-10">
              Abrir el archivo completo
              <Icon name="arrow-right" size={17} className="mc-arrow" />
            </Link>
          </Container>
        </section>
      </main>
    </>
  );
}
