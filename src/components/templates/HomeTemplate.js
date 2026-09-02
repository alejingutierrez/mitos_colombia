import { Container } from "../atoms";
import { Header } from "../organisms";
import { AtlasSectionHeader } from "../editorial/AtlasEditorial";
import {
  CategoryCloud,
  CommunityTabs,
  HomeClosing,
  HomeCover,
  RouteBanner,
  RouteCards,
  TarotBand,
  TerritoryBanner,
  TerritoryMedallions,
  TodayTable,
  UnattributedBand,
} from "../home";

/**
 * Home · plantilla.
 *
 * Ritmo de la página, una mecánica distinta por sección: portada rotativa →
 * mesa curada con filtros → comunidades en pestañas → ruta a sangre → fichas de
 * las otras cartografías → medallones de territorio → mapa en noche → nube de
 * categorías a escala → oráculo → cierre.
 *
 * Lo que no se debe deshacer:
 *  · El buscador vive en el header, no en la portada (tapaba la obra).
 *  · Lo que se pinta arriba no se repite abajo: la página reparte el feed con
 *    `partitionSections`, que da a cada sección su propio sorteo equilibrado.
 *    (Antes era un cursor `take(n)` compartido, y ese cursor era el bug: nunca
 *    pasaba del índice 16, así que una sección entera no llegaba a pintarse.)
 *  · «Varios» y las bolsas del importador no entran a las pestañas de pueblo,
 *    pero sí al archivo: viven en su propia banda, `UnattributedBand`.
 */
export function HomeTemplate({
  hero,
  cover = [],
  today = [],
  todayFilters = [],
  communities = [],
  unattributed = null,
  featuredRoute,
  routes = [],
  regions = [],
  mapImageUrl,
  categories = [],
  tarot = [],
  totalMyths,
}) {
  return (
    <>
      <Header active="/" />
      <main id="contenido" className="overflow-x-clip bg-paper">
        <HomeCover hero={hero} slides={cover} />

        <section className="atlas-section-y border-b border-line-100 bg-mist-50">
          <Container size="atlas">
            <AtlasSectionHeader
              title="La mesa de hoy"
              description="Diez relatos, distinto cada día. Filtra por tema o vuelve a barajar."
              actionHref="/mitos"
              actionLabel="Ver todos los mitos"
            />
            <TodayTable myths={today} filters={todayFilters} />
          </Container>
        </section>

        <Container size="atlas" className="atlas-section-y">
          <AtlasSectionHeader
            title="Una comunidad, muchas voces"
            description="Los relatos sobreviven porque un pueblo los cuenta, los transforma y los vuelve a contar. Cambia de comunidad y cambia el archivo entero."
            actionHref="/comunidades"
            actionLabel="Explorar comunidades"
          />
          <CommunityTabs communities={communities} />
        </Container>

        {/* Va DESPUÉS de los pueblos y fuera de sus pestañas a propósito: son
            relatos sin procedencia atribuible, no un pueblo más. */}
        <UnattributedBand data={unattributed} />

        <section>
          <RouteBanner route={featuredRoute} />
        </section>

        <Container size="atlas" className="atlas-section-y">
          <AtlasSectionHeader
            title="Las otras cartografías"
            description="Cada ruta agrupa relatos por lo que comparten —un elemento, una hora, una frontera— y no por la región de la que vienen."
            actionHref="/rutas"
            actionLabel="Ver todas las rutas"
          />
          <RouteCards routes={routes} />
        </Container>

        <section className="atlas-section-y border-y border-line-100 bg-mist-50">
          <Container size="atlas">
            <AtlasSectionHeader
              title="Los cinco territorios"
              description="Cada paisaje cambia la voz, los seres y los pactos de sus relatos. La cifra es lo que hay documentado hoy."
              actionHref="/regiones"
              actionLabel="Ver todas las regiones"
            />
            <TerritoryMedallions regions={regions} />
          </Container>
        </section>

        <Container size="atlas" className="atlas-section-y">
          <AtlasSectionHeader
            title="El territorio también cuenta"
            description="Buena parte del archivo tiene coordenadas. El mapa deja leerlo como geografía y no como índice."
            actionHref="/mapa"
            actionLabel="Explorar el mapa"
          />
          <TerritoryBanner imageUrl={mapImageUrl} />
        </Container>

        <section className="atlas-section-y border-y border-line-100 bg-mist-50">
          <Container size="atlas">
            <AtlasSectionHeader
              title="Los hilos del archivo"
              description="Cada categoría reúne relatos que comparten un tema o un motivo. El tamaño es cuántos hay."
              actionHref="/categorias"
              actionLabel="Ver todas las categorías"
            />
            <CategoryCloud categories={categories} />
          </Container>
        </section>

        <TarotBand cards={tarot} />

        <Container size="atlas" className="atlas-section-y">
          <HomeClosing totalMyths={totalMyths} />
        </Container>
      </main>
    </>
  );
}
