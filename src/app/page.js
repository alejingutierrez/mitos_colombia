import { HomeTemplate } from "../components/templates";
import { mythMotif } from "../components/templates/MythSections";
import { getRoutePreviews } from "../lib/routes";
import { buildSeoMetadata, getSeoEntry } from "../lib/seo";
import {
  getCommunitySpotlights,
  getHomeStats,
  getMythExtrasBySlugs,
  getRotatingMythPool,
  getTaxonomy,
} from "../lib/myths";
import {
  HOME_SECTIONS,
  UNATTRIBUTED_LABEL,
  assignThemeChips,
  balancedPick,
  buildMesaFilters,
  dailySeed,
  isImporterBucket,
  mythMeta,
  partitionSections,
  pickSeeded,
  sectionSeed,
  shuffleSeeded,
  toMesaCard,
} from "../lib/home-rotation";
import { getTarotCards, getDailyTarotSelection } from "../lib/tarot";
import { getMythImage, withMythImageVariants } from "../lib/myth-images";

/**
 * Home.
 *
 * La rotación entera cuelga de `dailySeed()` (reloj de Bogotá, salto a
 * medianoche local) y de `sectionSeed()`, en `src/lib/home-rotation.js`. Aquí no
 * se inventa azar: esta página elige QUÉ consulta y con qué semilla, y el motor
 * decide el reparto.
 */

/**
 * Cada cuánto se rehace el HTML.
 *
 * Estaba en 86400 (24 h), y ese era el muro detrás de TODA queja de rotación: la
 * portada quedaba clavada al día en que se generó, y el cambio de mesa podía
 * tardar casi un día entero en verse. Pero bajarlo a un minuto tampoco tiene
 * sentido: el contenido sólo cambia UNA vez al día, a medianoche de Bogotá.
 *
 * 1800 s (30 min) es el punto medio honesto: el retraso máximo entre la
 * medianoche colombiana y la mesa nueva es de media hora, a cambio de como mucho
 * 48 regeneraciones al día (~5 consultas cada una, y las pesadas van además con
 * `unstable_cache` sembrado por día, así que la mayoría ni tocan Neon). Las
 * fichas de mito usan 3600 porque su contenido no rota: sólo cambia cuando lo
 * edita alguien.
 */
export const revalidate = 1800;

export async function generateMetadata() {
  const seo = await getSeoEntry("page", "home");
  return buildSeoMetadata({
    fallback: {
      title: "Mitos de Colombia",
      description:
        "Archivo editorial de mitos colombianos organizado por regiones, comunidades y rutas temáticas.",
      keywords: [
        "mitos colombianos",
        "leyendas",
        "folclor",
        "tradición oral",
        "Colombia",
      ],
    },
    seo,
    canonicalPath: "/",
  });
}

const REGION_MOTIFS = {
  Amazonas: "hoja",
  Andina: "montana",
  Caribe: "agua",
  Pacífico: "delfin",
  Orinoquía: "luna",
  Insular: "sol",
};

/* La nube pinta el tamaño según cuántos relatos tiene la categoría. Con 1108
   etiquetas y 837 de ellas con tres relatos o menos, dejar entrar a las de cola
   llenaría la nube de polvo tipográfico. Cuatro es el piso para que una etiqueta
   sea un hilo del archivo y no un accidente del importador. */
const MIN_TAG_COUNT = 4;
/* Las más grandes se quedan siempre: son la columna vertebral de la nube y sin
   ellas la escala de tamaños se derrumba. El resto rota. */
const TAG_SPINE = 6;
const TAG_TOTAL = 22;

export default async function Home() {
  const daySeed = dailySeed();

  const [pool, communityRows, stats, taxonomy, routePreviews, tarotCards] =
    await Promise.all([
      getRotatingMythPool({ seed: daySeed, perRegion: 20 }),
      // Se piden SEIS por comunidad para pintar cuatro: los que ya están en la
      // portada se descartan abajo y hace falta ese margen.
      getCommunitySpotlights({ seed: daySeed, perCommunity: 6 }),
      getHomeStats(),
      getTaxonomy(),
      getRoutePreviews(daySeed),
      getTarotCards(),
    ]);

  /* Reparto sin cursor compartido: cada sección saca su tramo del pozo ENTERO
     con su propia semilla, y `partitionSections` sólo se encarga de que no se
     repita nada en pantalla. Antes había un `take(n)` que avanzaba un índice
     único sobre dos consultas concatenadas — y como nunca pasaba del elemento 16,
     las 24 filas de la consulta equilibrada se traían en cada render sin poder
     llegar jamás a la página. */
  /* «Varios» NO es un territorio: es la región-bolsa del importador, y sus 11
     relatos son exactamente los mismos que ya cuelgan de «Mestizo · Varios» y
     «Mixto · Varios», o sea que llegan a la home por la superficie de «sin pueblo
     identificado». Dejarla en el reparto la convertía en una sexta región con el
     mismo peso que la Andina: 11 relatos (el 1,8 % del archivo) se llevaban el
     17 % de la mesa y el visitante diario veía los mismos seis mitos una y otra
     vez. Medido: con la bolsa dentro, Varios sacaba 102 de 600 cupos. */
  const picks = partitionSections({
    items: (pool || []).filter(
      (myth) => myth?.slug && myth?.image_url && !isImporterBucket(myth.region)
    ),
    daySeed,
    keyOf: (myth) => myth.slug,
    groupBy: (myth) => myth.region_slug || "sin-region",
    sections: [
      { key: HOME_SECTIONS.PORTADA, count: 5 },
      { key: HOME_SECTIONS.MESA, count: 10 },
      { key: HOME_SECTIONS.MAPA, count: 1 },
    ],
  });

  const coverRaw = picks[HOME_SECTIONS.PORTADA] || [];
  const mesaRaw = picks[HOME_SECTIONS.MESA] || [];
  const mapMythRaw = (picks[HOME_SECTIONS.MAPA] || [])[0] || null;

  // Etiquetas y obra vertical, sólo de los mitos que la página va a pintar.
  const extras = await getMythExtrasBySlugs(
    [...coverRaw, ...mesaRaw, mapMythRaw].filter(Boolean).map((myth) => myth.slug)
  );

  const cover = coverRaw.map((myth) => {
    const withVariants = withMythImageVariants({
      ...myth,
      vertical_image_url: extras.get(myth.slug)?.verticalImageUrl || null,
    });
    return {
      slug: myth.slug,
      title: myth.title,
      meta: mythMeta(myth),
      imageUrl: getMythImage(withVariants, "landscape"),
      portraitImageUrl: getMythImage(withVariants, "portrait", { fallback: false }),
      thumbUrl: getMythImage(withVariants, "landscape"),
    };
  });
  const coverSlugs = new Set(cover.map((slide) => slide.slug));

  /* Lo que ya se pinta arriba no se repite abajo. Con sólo la portada excluida,
     cuatro de los diez relatos de la mesa volvían a salir dentro de las pestañas
     de comunidad en la misma carga. */
  const shownSlugs = new Set([
    ...coverSlugs,
    ...mesaRaw.map((myth) => myth.slug),
  ]);

  /* Los chips salen de las etiquetas reales de los diez elegidos, y el conteo se
     hace después de repartir (cada mito cae en UN chip). La misma función la usa
     `/api/mesa`, para que «Barajar» devuelva chips coherentes con los pintados. */
  const tagsOf = (myth) => extras.get(myth.slug)?.tags || [];
  const { chips, themeOf } = assignThemeChips({ items: mesaRaw, tagsOf });

  const today = mesaRaw.map((myth) =>
    toMesaCard(myth, {
      tags: tagsOf(myth),
      theme: themeOf.get(myth.slug) || null,
      motif: mythMotif(myth),
    })
  );
  const todayFilters = buildMesaFilters(today, chips);

  /* ---- Comunidades ---------------------------------------------------- *
     Antes llegaban SIEMPRE las mismas cinco: la consulta ordenaba por número de
     relatos y la página cortaba a cinco, sin que la semilla tocara nada. Ahora la
     selección rota y se reparte entre territorios, así que ningún pueblo se
     queda con la pestaña en propiedad. */
  /* El piso son CUATRO relatos: es lo que pinta una pestaña, y con menos queda a
     medias. Deja fuera a los pueblos con uno, dos o tres relatos registrados
     (Awa, Yukpa, Ansermas…), que siguen llegando por la mesa y por /comunidades:
     la pestaña promete «muchas voces» y con dos tarjetas eso no se cumple.
     Quedan 21 pueblos reales rotando sobre las cinco regiones. */
  const COMMUNITY_MYTHS = 4;
  const peoples = (communityRows || [])
    .filter((item) => item?.name && !item.generic && item.mythCount >= COMMUNITY_MYTHS)
    .map((item) => ({
      ...item,
      myths: (item.myths || []).filter(
        (myth) => myth.imageUrl && !shownSlugs.has(myth.slug)
      ),
    }))
    .filter((item) => item.myths.length >= COMMUNITY_MYTHS);

  const communities = balancedPick({
    items: peoples,
    count: 8,
    seed: sectionSeed(daySeed, HOME_SECTIONS.COMUNIDADES),
    groupBy: (item) => item.regionSlug || "sin-region",
    keyOf: (item) => String(item.id),
  }).map((item) => {
    const myths = item.myths.slice(0, COMMUNITY_MYTHS).map((myth) => ({
      slug: myth.slug,
      title: myth.title,
      excerpt: myth.excerpt,
      imageUrl: myth.imageUrl,
      motif: mythMotif({ slug: myth.slug, title: myth.title }),
    }));
    return {
      name: item.name,
      slug: item.slug,
      region: item.region,
      regionSlug: item.regionSlug,
      mythCount: item.mythCount,
      kind: "pueblo",
      label: item.name,
      myths,
      // `myth` = `myths[0]`. Lo conserva `CommunityTabs`, que hoy pinta uno solo.
      myth: myths[0] || null,
    };
  });

  /* ---- Sin pueblo identificado ---------------------------------------- *
     «Mestizo» y «Mixto» son diez bolsas del importador con 253 relatos: el 42,5 %
     del archivo, que hasta ahora la home descartaba entero por no ser un pueblo.
     No lo son —y por eso NO entran a las pestañas de comunidad— pero sí son
     archivo, y entran con su propia etiqueta y su propio nombre. */
  const buckets = (communityRows || []).filter((item) => item?.generic && item.myths?.length);
  const unattributedMyths = balancedPick({
    items: buckets.flatMap((item) => item.myths),
    count: 4,
    seed: sectionSeed(daySeed, HOME_SECTIONS.SIN_PUEBLO),
    groupBy: (myth) => myth.regionSlug || "sin-region",
    keyOf: (myth) => myth.slug,
    exclude: coverSlugs,
  }).map((myth) => ({
    slug: myth.slug,
    title: myth.title,
    excerpt: myth.excerpt,
    imageUrl: myth.imageUrl,
    region: myth.region,
    motif: mythMotif({ slug: myth.slug, title: myth.title }),
  }));

  const unattributed = unattributedMyths.length
    ? {
        kind: "sin-pueblo",
        label: UNATTRIBUTED_LABEL,
        description:
          "Relatos que el archivo no puede atribuir a un pueblo concreto. Se recogieron sin esa procedencia, así que se muestran por territorio y no por comunidad.",
        mythCount: buckets.reduce((total, item) => total + (item.mythCount || 0), 0),
        regions: [...new Set(buckets.map((item) => item.region).filter(Boolean))],
        myths: unattributedMyths,
      }
    : null;

  /* ---- Rutas ----------------------------------------------------------- *
     `getRoutePreviews` resuelve la obra de cada ruta por título curado, así que
     la semilla no la tocaba nunca: la ruta a sangre y el orden de las fichas eran
     los mismos todos los días desde que existe la sección. El numeral sigue
     siendo la posición real en /rutas — se calcula ANTES de barajar. */
  const allRoutes = (routePreviews || []).map((route, index) => ({
    slug: route.slug,
    title: route.title,
    detail: route.detail || route.description,
    index: String(index + 1).padStart(2, "0"),
    imageUrl: route.preview?.image_url || null,
    portraitImageUrl: route.preview?.vertical_image_url || null,
  }));
  const routeSeed = sectionSeed(daySeed, HOME_SECTIONS.RUTAS);
  const routesWithArt = allRoutes.filter((route) => route.imageUrl);
  const featuredRoute =
    pickSeeded(routesWithArt.length ? routesWithArt : allRoutes, 1, routeSeed)[0] || null;
  const routes = shuffleSeeded(
    allRoutes.filter((route) => route.slug !== featuredRoute?.slug),
    routeSeed
  );

  /* Los cinco territorios son un conjunto CERRADO a propósito: son las regiones
     reales del archivo, no una selección. No rotan porque la sección no promete
     rotación — promete el mapa completo. «Varios» sí se cae: es una bolsa. */
  const regions = (taxonomy.regions || [])
    .filter((region) => region?.name && !isImporterBucket(region.name))
    .sort((a, b) => Number(b.myth_count || 0) - Number(a.myth_count || 0))
    .slice(0, 5)
    .map((region) => ({
      title: region.name,
      slug: region.slug,
      count: Number(region.myth_count) || 0,
      imageUrl: region.image_url,
      motif: REGION_MOTIFS[region.name] || "hoja",
    }));

  /* ---- Categorías ------------------------------------------------------ *
     Eran las 22 primeras por número de relatos, sin semilla: las mismas 22 de las
     1108 que hay, en el mismo orden, todos los días. Ahora se queda la columna
     vertebral (las seis mayores, que sostienen la escala de tamaños) y el resto
     rota entre las etiquetas con peso real. */
  const catSeed = sectionSeed(daySeed, HOME_SECTIONS.CATEGORIAS);
  const tagPool = (taxonomy.tags || []).filter(
    (tag) => tag?.name && tag?.slug && Number(tag.myth_count || 0) >= MIN_TAG_COUNT
  );
  const categories = shuffleSeeded(
    [
      ...tagPool.slice(0, TAG_SPINE),
      ...pickSeeded(tagPool.slice(TAG_SPINE), TAG_TOTAL - TAG_SPINE, catSeed),
    ],
    catSeed
  ).map((tag) => ({
    name: tag.name,
    slug: tag.slug,
    count: Number(tag.myth_count) || 0,
  }));

  // La sala del oráculo muestra la obra real de la carta: las 78 la tienen.
  const tarotSource = (tarotCards || []).filter((card) => card.card_name);
  const tarotWithArt = tarotSource.filter((card) => card.image_url);
  const tarot = getDailyTarotSelection(
    tarotWithArt.length >= 3 ? tarotWithArt : tarotSource,
    3,
    sectionSeed(daySeed, HOME_SECTIONS.ORACULO)
  ).map((card) => ({
    name: card.card_name,
    imageUrl: card.display_image_url || card.image_url || card.myth_image_url || "",
    mythTitle: card.myth_title || "",
    mythSlug: card.myth_slug || "",
  }));

  const totalMyths = Number(stats.total_myths) || 0;

  return (
    <HomeTemplate
      hero={{
        kicker: "Archivo vivo de la tradición oral",
        description: totalMyths
          ? `${totalMyths} relatos, criaturas y territorios que dan forma a la memoria de los pueblos de Colombia. Cinco entran hoy a la portada.`
          : "Relatos, criaturas y territorios que dan forma a la memoria de los pueblos de Colombia.",
      }}
      cover={cover}
      today={today}
      todayFilters={todayFilters}
      communities={communities}
      unattributed={unattributed}
      featuredRoute={featuredRoute}
      routes={routes}
      regions={regions}
      mapImageUrl={mapMythRaw?.image_url || null}
      categories={categories}
      tarot={tarot}
      totalMyths={totalMyths}
    />
  );
}
