import { HomeTemplate } from "../components/templates";
import { mythMotif } from "../components/templates/MythSections";
import { getRoutePreviews } from "../lib/routes";
import { buildSeoMetadata, getSeoEntry } from "../lib/seo";
import {
  getFeaturedMythsWithImages,
  getDiverseMyths,
  getHomeStats,
  getTaxonomy,
} from "../lib/myths";
import { getTarotCards, getDailyTarotSelection } from "../lib/tarot";

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

const MAJOR_ROMAN = [
  "0", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X",
  "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX", "XXI",
];

const regionMotifs = {
  Amazonas: "hoja",
  Andina: "montana",
  Caribe: "agua",
  Pacífico: "delfin",
  Orinoquía: "luna",
  Insular: "sol",
  Varios: "condor",
};

function mapMyth(m) {
  return {
    slug: m.slug,
    title: m.title,
    excerpt: m.excerpt,
    region: m.region,
    community: m.community,
    imageUrl: m.image_url,
    motif: mythMotif(m),
  };
}

export default async function Home() {
  const seed = getDailySeed();

  const [featuredMyths, diverseMyths, stats, taxonomy, routePreviews, tarotCards] =
    await Promise.all([
      getFeaturedMythsWithImages(24, seed),
      getDiverseMyths(24, seed),
      getHomeStats(),
      getTaxonomy(),
      getRoutePreviews(seed),
      getTarotCards(),
    ]);

  // Mito líder para la obra de portada: primero con imagen, si no el primero.
  const pool = Array.from(
    new Map(
      [...(featuredMyths || []), ...(diverseMyths || [])]
        .filter((myth) => myth?.slug)
        .map((myth) => [myth.slug, myth])
    ).values()
  );
  const leadRaw = pool.find((m) => m.image_url) || pool[0] || diverseMyths[0];
  const lead = leadRaw ? mapMyth(leadRaw) : undefined;
  const featured = pool
    .filter((m) => !lead || m.slug !== lead.slug)
    .slice(0, 23)
    .map(mapMyth);

  const totalMyths = Number(stats.total_myths) || 882;

  const regions = (taxonomy.regions || [])
    .slice()
    .sort((a, b) => Number(b.myth_count || 0) - Number(a.myth_count || 0))
    .slice(0, 6)
    .map((r) => ({
      title: r.name,
      href: `/regiones/${r.slug}`,
      count: r.myth_count,
      motif: regionMotifs[r.name] || "hoja",
      imageUrl: r.image_url,
    }));

  const routes = (routePreviews || []).slice(0, 4).map((r) => ({
    title: r.title,
    href: `/rutas/${r.slug}`,
    tone: r.accent === "river" ? "river" : "jungle",
    motif: r.accent === "river" ? "agua" : "hoja",
    description: r.detail || r.description,
    imageUrl: r.preview?.image_url,
  }));

  // Tres cartas de tarot para la sala del oráculo (selección diaria).
  const tarotSource = (tarotCards || []).filter((c) => c.card_name);
  const tarot = getDailyTarotSelection(tarotSource, 3, seed).map((c) => ({
    card_name: c.card_name,
    roman:
      c.arcana === "major" && typeof c.order_index === "number"
        ? MAJOR_ROMAN[c.order_index] || ""
        : "",
    myth_slug: c.myth_slug || "",
    motif: mythMotif({ slug: c.myth_slug || c.slug, title: c.card_name }),
  }));

  const taxonomyWords = [
    ...(taxonomy.regions || []).map((r) => r.name),
    "Cosmogonía",
    "Criaturas",
    "Agua",
    "Memoria",
  ];

  return (
    <HomeTemplate
      hero={{
        description: `Un archivo vivo de la tradición oral: ${totalMyths} relatos, criaturas y territorios que dan forma a la memoria de los pueblos de Colombia.`,
      }}
      lead={lead}
      featured={featured}
      regions={regions}
      routes={routes}
      tarot={tarot.length ? tarot : undefined}
      quote={{
        text: "Cada mito existe porque alguien lo escuchó, lo contó, y lo sostuvo en el tiempo.",
        cite: "Tradición oral colombiana",
      }}
      taxonomyWords={taxonomyWords}
    />
  );
}
