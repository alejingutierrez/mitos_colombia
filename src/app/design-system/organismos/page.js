import { Eyebrow, IndexNumber, Container } from "../../../components/atoms";
import {
  Header,
  HeroSection,
  MythGrid,
  TaxonomyGrid,
  RouteGrid,
  CommentThread,
  FilterableArchive,
} from "../../../components/organisms";

export const metadata = {
  title: "Sistema de diseño · Organismos",
  robots: { index: false, follow: false },
};

function Label({ index, title }) {
  return (
    <Container size="wide" className="pb-2 pt-16">
      <div className="flex items-center gap-4 border-t border-line-100 pt-8">
        <IndexNumber value={index} />
        <Eyebrow>{title}</Eyebrow>
      </div>
    </Container>
  );
}

const REGIONS = [
  { title: "Amazonas", href: "/regiones/amazonas", count: 128, motif: "hoja", imageUrl: "/samples/amazonas.jpg", description: "Selva, ríos y cosmogonías de los pueblos amazónicos." },
  { title: "Andina", href: "/regiones/andina", count: 142, motif: "montana", imageUrl: "/samples/andina.jpg", description: "Páramos, lagunas sagradas y seres de la cordillera." },
  { title: "Caribe", href: "/regiones/caribe", count: 88, motif: "agua", imageUrl: "/samples/caribe.jpg", description: "Mar, manglar y relatos de la costa norte." },
];

export default function OrganismosPage() {
  return (
    <main className="min-h-[100dvh] bg-paper">
      {/* Header global (sticky) */}
      <Header active="/mitos" />

      <Container size="wide" className="pt-12">
        <Eyebrow tone="jungle" withRule className="mb-3">
          Rediseño 2026 · Organismos
        </Eyebrow>
      </Container>

      <Label index={1} title="HeroSection" />
      <HeroSection />

      <Label index={2} title="MythGrid" />
      <Container size="wide">
        <MythGrid
          eyebrow="Catálogo vivo"
          title="Mitos representativos"
          description="Una selección curada por región, comunidad y tema."
        />
      </Container>

      <Label index={3} title="FilterableArchive (listado /mitos)" />
      <FilterableArchive />

      <Label index={4} title="TaxonomyGrid" />
      <Container size="wide">
        <TaxonomyGrid
          eyebrow="Explora"
          title="Regiones de Colombia"
          description="Mitos agrupados por su territorio de origen."
          items={REGIONS}
        />
      </Container>

      <Label index={5} title="RouteGrid" />
      <RouteGrid
        eyebrow="Rutas editoriales"
        title="Colecciones curadas"
        description="Recorridos temáticos por el archivo."
      />

      <Label index={6} title="CommentThread" />
      <Container size="wide" className="pb-20">
        <CommentThread />
      </Container>
    </main>
  );
}
