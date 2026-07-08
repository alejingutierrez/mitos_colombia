import { Container, Eyebrow, Heading, Text } from "../../components/atoms";
import { Header } from "../../components/organisms";
import MapaPageClient from "./MapaPageClient";
import { buildSeoMetadata, getSeoEntry } from "../../lib/seo";

export async function generateMetadata() {
  const seo = await getSeoEntry("page", "mapa");
  return buildSeoMetadata({
    fallback: {
      title: "Mapa de mitos | Mitos de Colombia",
      description:
        "Mapa interactivo de mitos colombianos. Explora relatos por ubicación y territorio.",
      keywords: ["mapa", "mitos colombianos", "territorio", "geografía"],
    },
    seo,
    canonicalPath: "/mapa",
  });
}

export default function MapaPage() {
  return (
    <>
      <Header active="/mapa" />
      <main className="min-h-[100dvh] bg-paper">
        <Container size="wide" className="pt-10 md:pt-14">
          <div className="max-w-2xl">
            <Eyebrow tone="river" withRule className="mb-4">
              Atlas territorial
            </Eyebrow>
            <Heading level={1} accent="river">
              El mapa de los mitos de Colombia
            </Heading>
            <Text size="lg" className="mt-4">
              Cada mito anclado a su geografía. Recorre el país de la selva al
              mar y descubre qué se cuenta en cada rincón del territorio.
            </Text>
          </div>
        </Container>
        <MapaPageClient />
        <Container size="wide" className="border-t border-line-100 py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <Eyebrow tone="river" withRule className="mb-4">
                Lectura territorial
              </Eyebrow>
              <Heading level={2}>Cuando el mito toma lugar</Heading>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <Text>
                El mapa reúne relatos con coordenadas editoriales para mostrar
                cómo la tradición oral se ancla en ríos, montañas, lagunas,
                caminos, selvas y poblaciones. No busca reducir el mito a un
                punto exacto, sino revelar la relación entre memoria, paisaje y
                comunidad.
              </Text>
              <Text>
                Al leer los mitos desde el territorio aparecen patrones que no
                siempre son visibles en una lista: guardianes del agua cerca de
                riberas, apariciones asociadas a caminos, relatos de origen en
                zonas selváticas y ciclos regionales que se repiten con variantes
                locales.
              </Text>
              <Text>
                Cada ubicación funciona como una pista para seguir explorando.
                Desde un punto del mapa puedes volver al relato completo, cruzar
                hacia su región o encontrar otras historias que comparten
                geografía, tema o comunidad de origen.
              </Text>
              <Text>
                Esta cartografía seguirá creciendo con nuevas fuentes, revisión
                editorial y datos más precisos. Su valor principal está en hacer
                visible que los mitos colombianos no flotan en abstracto: habitan
                lugares, nombran relaciones y conservan formas de orientarse en el
                mundo.
              </Text>
              <Text>
                El atlas también ayuda a leer ausencias. Cuando un relato todavía
                no tiene coordenadas, queda abierta una tarea de investigación:
                contrastar versiones, ubicar ríos o veredas mencionadas y decidir
                si el punto representa un lugar narrado, una comunidad de origen o
                una zona cultural más amplia.
              </Text>
              <Text>
                Por eso cada marca del mapa debe entenderse como una referencia
                editorial y no como una frontera definitiva. Los relatos cambian de
                boca en boca, cruzan departamentos y a veces comparten un mismo
                motivo con nombres distintos.
              </Text>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
