import Header from "../components/Header";
import HomeV3 from "../components/home/HomeV3";
import { getRoutePreviews } from "../lib/routes";
import { buildSeoMetadata, getSeoEntry } from "../lib/seo";
import {
  getFeaturedMythsWithImages,
  getDiverseMyths,
  getHomeStats,
  getTaxonomy,
} from "../lib/myths";
import { getDailyTarotSelection, getTarotCards } from "../lib/tarot";
import { filterAllowedCommunities } from "../lib/communityFilters";

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

const regionDescriptions = {
  Amazonas: "Selva, ciclos rituales y guardianes del agua.",
  Andina: "Montañas, páramos y memorias del camino.",
  Caribe: "Mareas, viento y cantos del puerto.",
  Pacífico: "Manglares, ritmo y memoria afro del litoral.",
  Orinoquía: "Llanos, sabanas y hombres de a caballo.",
  Insular: "Raizales y memorias de alta mar.",
  Varios: "Historias que cruzan territorios.",
};

const MAJOR_ROMAN = [
  "0",
  "I",
  "II",
  "III",
  "IV",
  "V",
  "VI",
  "VII",
  "VIII",
  "IX",
  "X",
  "XI",
  "XII",
  "XIII",
  "XIV",
  "XV",
  "XVI",
  "XVII",
  "XVIII",
  "XIX",
  "XX",
  "XXI",
];

export default async function Home() {
  const seed = getDailySeed();

  const [
    featuredMyths,
    diverseMyths,
    stats,
    taxonomy,
    routePreviews,
    tarotCards,
  ] = await Promise.all([
    getFeaturedMythsWithImages(9, seed),
    getDiverseMyths(6, seed),
    getHomeStats(),
    getTaxonomy(),
    getRoutePreviews(seed),
    getTarotCards(),
  ]);

  const heroMyths = featuredMyths.slice(0, 3);
  const galleryPool =
    featuredMyths.length > 3 ? featuredMyths.slice(3) : diverseMyths;
  const galleryMyths = galleryPool.slice(0, 6);

  const totalCommunities = filterAllowedCommunities(taxonomy.communities, 6);

  const displayStats = [
    { value: `${stats.total_myths || 505}`, label: "Mitos curados" },
    { value: `${stats.total_regions || 6}`, label: "Regiones culturales" },
    {
      value: `${totalCommunities.length || 50}+`,
      label: "Comunidades portadoras",
    },
  ];

  const regions = (taxonomy.regions || []).map((r) => ({
    name: r.name,
    slug: r.slug,
    myth_count: r.myth_count,
    image_url: r.image_url,
    description:
      regionDescriptions[r.name] || "Explora los mitos de esta región.",
  }));

  const routes = routePreviews.map((r) => ({
    slug: r.slug,
    title: r.title,
    tone: r.tone,
    detail: r.detail,
    accent: r.accent,
    preview: r.preview,
    mythCount: r.preview ? undefined : undefined,
  }));

  const tarotWithImages = tarotCards.filter((c) => c.image_url);
  const tarotSource =
    tarotWithImages.length >= 3 ? tarotWithImages : tarotCards;
  const dailyTarot = getDailyTarotSelection(tarotSource, 3, seed).map((c) => {
    const roman =
      c.arcana === "major" && typeof c.order_index === "number"
        ? MAJOR_ROMAN[c.order_index] || ""
        : "";
    return {
      slug: c.slug,
      name: c.card_name,
      image_url: c.image_url,
      myth_title: c.myth_title || "",
      roman_numeral: roman,
    };
  });

  const communities = totalCommunities
    .slice()
    .sort((a, b) => Number(b.myth_count || 0) - Number(a.myth_count || 0))
    .slice(0, 10)
    .map((c) => ({
      name: c.name,
      slug: c.slug,
      region: c.region || "",
    }));

  return (
    <>
      <Header taxonomy={taxonomy} />
      <main className="relative min-h-screen">
        <HomeV3
          featuredMyths={heroMyths}
          galleryMyths={galleryMyths}
          stats={displayStats}
          regions={regions}
          routes={routes}
          tarotCards={dailyTarot}
          communities={communities}
          totalMyths={stats.total_myths || 505}
        />
      </main>
    </>
  );
}
