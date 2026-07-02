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
      </main>
    </>
  );
}
