import { Container } from "../atoms";
import { Header } from "../organisms";
import { AtlasSectionHeader } from "../editorial/AtlasEditorial";
import { HomeJourney } from "../home/HomeJourney";
import styles from "../home/home-journey.module.css";
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
 * Escena de portada y contactos → mesa en carril → comunidades panorámicas →
 * rutas en bandas → cinco territorios → mapa e hilos → oráculo y cierre.
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
  communityPool = [],
  communitySeed = 0,
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
      <Header active="/" immersive />
      <main id="contenido" className={`${styles.home} overflow-x-clip`}>
        <HomeCover hero={hero} slides={cover} />
        <HomeJourney />

        <section id="mesa" data-home-chapter className={`${styles.section} ${styles.mesa}`}>
          <Container size="atlas">
            <AtlasSectionHeader
              className={styles.sectionHeader}
              title="La mesa de hoy"
              description={`${today.length} relatos para explorar y barajar.`}
              actionHref="/mitos"
              actionLabel="Ver todos los mitos"
            />
            <TodayTable myths={today} filters={todayFilters} exclude={cover.map((slide) => slide.slug)} />
          </Container>
        </section>

        <section id="comunidades" data-home-chapter className={styles.section}>
          <Container size="atlas">
          <AtlasSectionHeader
            className={styles.sectionHeader}
            title="Una comunidad, muchas voces"
            description="Conoce las historias desde quienes las viven y las transmiten."
            actionHref="/comunidades"
            actionLabel="Explorar comunidades"
          />
          </Container>
          <CommunityTabs communities={communities} pool={communityPool} seed={communitySeed} />
        </section>

        {/* Va DESPUÉS de los pueblos y fuera de sus pestañas a propósito: son
            relatos sin procedencia atribuible, no un pueblo más. */}
        <UnattributedBand data={unattributed} />

        <section id="rutas" data-home-chapter className={styles.panorama}>
          <RouteBanner route={featuredRoute} />
        </section>

        <Container size="atlas" className={styles.section}>
          <AtlasSectionHeader
            className={styles.sectionHeader}
            title="Las otras cartografías"
            description="Rutas para explorar el territorio a través de sus historias."
            actionHref="/rutas"
            actionLabel="Ver todas las rutas"
          />
        </Container>
        <RouteCards routes={routes} />

        <section id="territorios" data-home-chapter className={styles.section}>
          <Container size="atlas">
            <AtlasSectionHeader
              className={styles.sectionHeader}
              title="Los cinco territorios"
              description="Cinco formas de habitar, contar y sentir Colombia."
              actionHref="/regiones"
              actionLabel="Ver todas las regiones"
            />
          </Container>
          <TerritoryMedallions regions={regions} />
        </section>

        <Container size="atlas" className={`${styles.section} ${styles.lowerWorlds}`}>
          <section className="min-w-0">
            <AtlasSectionHeader className={styles.sectionHeader} title="El territorio también cuenta" description="Explora los lugares, mitos y rutas en nuestro mapa interactivo." />
            <TerritoryBanner imageUrl={mapImageUrl} />
          </section>
          <section className="min-w-0">
            <AtlasSectionHeader className={styles.sectionHeader} title="Los hilos del archivo" description="Temas que tejen las historias de todo el país." actionHref="/categorias" actionLabel="Ver las categorías" />
            <CategoryCloud categories={categories} />
          </section>
        </Container>

        <TarotBand cards={tarot}><HomeClosing totalMyths={totalMyths} /></TarotBand>
      </main>
    </>
  );
}
