import {
  Container,
  Heading,
  Text,
  Eyebrow,
  Icon,
  Surface,
} from "../atoms";
import { Header, CommentThread } from "../organisms";
import { StatCard } from "../molecules";

/**
 * Template · MapTemplate
 * Atlas territorial: intro + estadísticas + área del mapa interactivo. El mapa
 * real (react-leaflet, client-only) se pasa por `children`; sin él se muestra un
 * placeholder. Props: `{ stats, title, description, children }`.
 */

const DEFAULT_STATS = [
  { value: 342, label: "Mitos ubicados", motif: "agua" },
  { value: 128, label: "Ubicaciones", motif: "montana" },
  { value: 7, label: "Regiones", motif: "hoja" },
];

export function MapTemplate({
  stats = DEFAULT_STATS,
  title = "Atlas territorial",
  description = "Cada mito anclado a su geografía. Recorre el país de la selva al mar y descubre qué se cuenta en cada rincón.",
  children,
}) {
  return (
    <>
      <Header active="/mapa" />
      <main className="min-h-[100dvh] bg-paper">
        <Container size="wide" className="py-10 md:py-14">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.7fr] lg:gap-10">
            {/* Intro + stats */}
            <div>
              <Eyebrow tone="river" withRule className="mb-4">
                Explora el mapa
              </Eyebrow>
              <Heading level={1} accent="river">
                {title}
              </Heading>
              <Text size="base" className="mt-4">
                {description}
              </Text>
              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-line-100 pt-6">
                {stats.map((s) => (
                  <StatCard key={s.label} value={s.value} label={s.label} />
                ))}
              </div>
            </div>

            {/* Área del mapa */}
            <Surface className="overflow-hidden">
              {children ? (
                children
              ) : (
                <div className="flex aspect-[4/3] flex-col items-center justify-center gap-3 bg-mist-50 text-ink-500 lg:aspect-auto lg:h-full lg:min-h-[520px]">
                  <Icon name="map-pin" size={34} className="text-river-500" />
                  <p className="font-body text-sm">Mapa interactivo (Leaflet)</p>
                  <p className="max-w-xs text-center font-body text-xs text-ink-500">
                    Pins agrupados por ubicación; al hacer clic se despliegan y muestran una tarjeta de vista previa.
                  </p>
                </div>
              )}
            </Surface>
          </div>
        </Container>

        <Container size="wide" className="border-t border-line-100 py-14">
          <CommentThread comments={[]} />
        </Container>
      </main>
    </>
  );
}
