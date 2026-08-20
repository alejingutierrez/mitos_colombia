import { HomeTemplate } from "../components/templates";
import { mythMotif } from "../components/templates/MythSections";
import { getRoutePreviews } from "../lib/routes";
import { buildSeoMetadata, getSeoEntry } from "../lib/seo";
import {
  getCommunitySpotlights,
  getDiverseMyths,
  getFeaturedMythsWithImages,
  getHomeStats,
  getMythExtrasBySlugs,
  getTaxonomy,
} from "../lib/myths";
import { getTarotCards, getDailyTarotSelection } from "../lib/tarot";
import { getMythImage, withMythImageVariants } from "../lib/myth-images";

export const revalidate = 86400;

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

function getDailySeed() {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 0);
  const diff = now - startOfYear;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

/* «Varios», «Mestizo» y «Mixto» son bolsas del importador, no territorios ni
   pueblos: sirven para clasificar, no para recorrer. Se filtran de las secciones
   que presentan una entidad con nombre propio. */
const GENERIC_TAXA = new Set([
  "varios",
  "otros",
  "mixto",
  "mixta",
  "mestizo",
  "mestiza",
  "sin region",
  "sin región",
  "sin comunidad",
]);

function isGeneric(name) {
  return GENERIC_TAXA.has(String(name || "").trim().toLowerCase());
}

const REGION_MOTIFS = {
  Amazonas: "hoja",
  Andina: "montana",
  Caribe: "agua",
  Pacífico: "delfin",
  Orinoquía: "luna",
  Insular: "sol",
};

function mythMeta(myth) {
  return [myth?.region, myth?.community].filter(Boolean).join(" · ");
}

/* La línea de «por qué está aquí». Es un criterio real, no una etiqueta
   decorativa: primero el tema con el que está clasificado, y si no lo tiene, el
   pueblo que lo sostiene o el territorio del que viene. */
function mythReason(myth, primaryTag) {
  if (primaryTag?.name) return `Por tema · ${primaryTag.name.toLowerCase()}`;
  if (myth.community && !isGeneric(myth.community)) {
    return `Por comunidad · ${myth.community.toLowerCase()}`;
  }
  if (myth.region) return `Por territorio · ${myth.region.toLowerCase()}`;
  return "Entra hoy al archivo";
}

export default async function Home() {
  const seed = getDailySeed();

  const [
    featuredMyths,
    diverseMyths,
    stats,
    taxonomy,
    routePreviews,
    tarotCards,
    communitySpotlights,
  ] = await Promise.all([
    getFeaturedMythsWithImages(28, seed),
    getDiverseMyths(24, seed),
    getHomeStats(),
    getTaxonomy(),
    getRoutePreviews(seed),
    getTarotCards(),
    getCommunitySpotlights(12, seed),
  ]);

  // Un solo pozo sin repetidos: cada sección consume su tramo con un cursor.
  // Con `slice` fijos las secciones se solapaban y el mismo mito salía dos veces
  // en la misma pantalla.
  const pool = Array.from(
    new Map(
      [...(featuredMyths || []), ...(diverseMyths || [])]
        .filter((myth) => myth?.slug && myth?.image_url)
        .map((myth) => [myth.slug, myth])
    ).values()
  );

  let cursor = 0;
  const take = (count) => {
    const slice = pool.slice(cursor, cursor + count);
    cursor += slice.length;
    return slice;
  };

  const coverRaw = take(5);
  const todayRaw = take(10);
  const mapMythRaw = take(1)[0] || null;

  // Etiquetas y obra vertical, sólo de los mitos que la página va a pintar.
  const extras = await getMythExtrasBySlugs(
    [...coverRaw, ...todayRaw, mapMythRaw]
      .filter(Boolean)
      .map((myth) => myth.slug)
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

  // Los filtros de la mesa salen de las etiquetas reales de los diez elegidos.
  // Cada mito cae en un solo chip (el más frecuente que tenga), así que el
  // conteo hay que hacerlo DESPUÉS de repartir: contando etiquetas sueltas, un
  // chip anunciaba «2» y al pulsarlo aparecía una sola tarjeta.
  const tagFrequency = new Map();
  todayRaw.forEach((myth) => {
    (extras.get(myth.slug)?.tags || []).forEach((tag) => {
      if (!tag?.slug) return;
      const entry = tagFrequency.get(tag.slug) || { ...tag, count: 0 };
      entry.count += 1;
      tagFrequency.set(tag.slug, entry);
    });
  });
  const ranked = [...tagFrequency.values()].sort(
    (a, b) => b.count - a.count || a.name.localeCompare(b.name)
  );

  const assign = (candidates) => {
    const counts = new Map();
    todayRaw.forEach((myth) => {
      const tags = extras.get(myth.slug)?.tags || [];
      const chip = candidates.find((candidate) =>
        tags.some((tag) => tag.slug === candidate.slug)
      );
      if (chip) counts.set(chip.slug, (counts.get(chip.slug) || 0) + 1);
    });
    return counts;
  };

  // Se descartan los chips que acaban con una sola tarjeta y se reparte otra
  // vez: al caer uno, sus mitos pasan al siguiente que sí tengan.
  let chipTags = ranked.slice(0, 6);
  for (let pass = 0; pass < 4; pass += 1) {
    const counts = assign(chipTags);
    const kept = chipTags.filter((tag) => (counts.get(tag.slug) || 0) >= 2);
    if (kept.length === chipTags.length) break;
    chipTags = kept;
  }
  chipTags = chipTags.slice(0, 4);
  const chipSlugs = new Set(chipTags.map((tag) => tag.slug));

  const today = todayRaw.map((myth) => {
    const tags = extras.get(myth.slug)?.tags || [];
    const chip = chipTags.find((candidate) =>
      tags.some((tag) => tag.slug === candidate.slug)
    );
    return {
      slug: myth.slug,
      title: myth.title,
      excerpt: myth.excerpt,
      meta: mythMeta(myth),
      motif: mythMotif(myth),
      imageUrl: myth.image_url,
      why: mythReason(myth, chip || tags[0]),
      theme: chip?.slug || null,
    };
  });

  const todayFilters = [
    { key: "todos", label: "Todo el archivo", count: today.length },
    ...chipTags.map((tag) => ({
      key: tag.slug,
      label: tag.name,
      count: today.filter((myth) => myth.theme === tag.slug).length,
    })),
  ];

  const communities = (communitySpotlights || [])
    .filter((item) => item?.name && !isGeneric(item.name) && item.myth_image_url)
    .slice(0, 5)
    .map((item) => ({
      name: item.name,
      slug: item.slug,
      region: item.region,
      mythCount: Number(item.myth_count) || 0,
      myth: {
        slug: item.myth_slug,
        title: item.myth_title,
        excerpt: item.myth_excerpt,
        imageUrl: item.myth_image_url,
        motif: mythMotif({ slug: item.myth_slug, title: item.myth_title }),
      },
    }));

  // Ruta destacada: la primera con obra propia. El resto entra como fichas, y
  // el numeral es su posición real en /rutas, no el orden de esta rejilla.
  const allRoutes = (routePreviews || []).map((route, index) => ({
    slug: route.slug,
    title: route.title,
    detail: route.detail || route.description,
    index: String(index + 1).padStart(2, "0"),
    imageUrl: route.preview?.image_url || null,
    portraitImageUrl: route.preview?.vertical_image_url || null,
  }));
  const featuredRoute =
    allRoutes.find((route) => route.imageUrl) || allRoutes[0] || null;
  const routes = allRoutes.filter((route) => route.slug !== featuredRoute?.slug);

  const regions = (taxonomy.regions || [])
    .filter((region) => region?.name && !isGeneric(region.name))
    .sort((a, b) => Number(b.myth_count || 0) - Number(a.myth_count || 0))
    .slice(0, 5)
    .map((region) => ({
      title: region.name,
      slug: region.slug,
      count: Number(region.myth_count) || 0,
      imageUrl: region.image_url,
      motif: REGION_MOTIFS[region.name] || "hoja",
    }));

  const categories = (taxonomy.tags || [])
    .filter((tag) => tag?.name && tag?.slug)
    .slice(0, 22)
    .map((tag) => ({
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
    seed
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
      todayCriterio="diez relatos con obra propia, repartidos entre los territorios con registro. La mesa se rehace cada día a medianoche."
      communities={communities}
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
