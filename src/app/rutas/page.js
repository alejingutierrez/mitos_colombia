import Link from "next/link";
import { Container, Icon } from "../../components/atoms";
import { Header } from "../../components/organisms";
import { VisualIndex } from "../../components/organisms/VisualIndex";
import { ArchivePageHeader } from "../../components/editorial/ArchivePageHeader";
import canvas from "../../components/editorial/archive-canvas.module.css";
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
      <main id="contenido" className={canvas.canvas}>
        <ArchivePageHeader eyebrow="Las otras cartografías" title="Maneras de cruzar el archivo" description="Recorridos que conectan relatos de distintos pueblos y territorios. Elige una imagen y sigue el hilo." meta={`${ROUTES.length} rutas · ${reunidos} relatos reunidos${totals.myths ? ` de ${totals.myths}` : ""}`} />
        <Container id="rutas" size="atlas" className="pb-12">
          <VisualIndex label="rutas" items={routes.map((route) => ({...route,href:`/rutas/${route.slug}`,count:route.mythCount,regionName:route.regions.join(" · ")}))} />
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
