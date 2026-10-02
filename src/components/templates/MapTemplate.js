import { Container, Icon } from "../atoms";
import { Header } from "../organisms";
import { ArchivePageHeader } from "../editorial/ArchivePageHeader";
import canvas from "../editorial/archive-canvas.module.css";

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
      <main id="contenido" className={canvas.canvas}>
        <ArchivePageHeader eyebrow="El territorio también cuenta" title={title} description={description} meta={stats.map((stat) => `${stat.value} ${stat.label.toLowerCase()}`).join(" · ")} />
        <Container size="atlas" className="pb-10"><div className="overflow-hidden border-y border-line-200">{children || <div className="flex min-h-[520px] items-center justify-center bg-mist-50"><Icon name="map-pin" size={34} /><p>Explora los mitos en el mapa</p></div>}</div></Container>
      </main>
    </>
  );
}
