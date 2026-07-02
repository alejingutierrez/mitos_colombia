import { TarotTemplate } from "../../components/templates";
import { buildSeoMetadata, getSeoEntry } from "../../lib/seo";
import { getTarotCards, getDailyTarotSelection } from "../../lib/tarot";

export const revalidate = 86400;

export async function generateMetadata() {
  const seo = await getSeoEntry("page", "tarot");
  return buildSeoMetadata({
    fallback: {
      title: "Tarot de la mitología colombiana",
      description:
        "Una baraja editorial que vincula arcanos del tarot con mitos colombianos para explorar símbolos, territorios y relatos ancestrales.",
      keywords: [
        "tarot",
        "mitología colombiana",
        "arcanos",
        "mitos",
        "paper quilling",
      ],
    },
    seo,
    canonicalPath: "/tarot",
  });
}

function getDailySeed() {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 0);
  const diff = now - startOfYear;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

export default async function TarotPage() {
  const seed = getDailySeed();
  const tarotCards = await getTarotCards();

  // Carta del día: prioriza las que enlazan a un mito para que sea navegable.
  const linkable = (tarotCards || []).filter((c) => c.myth_slug);
  const dailyPool = linkable.length ? linkable : tarotCards;
  const daily = getDailyTarotSelection(dailyPool, 1, seed)[0] || null;

  return (
    <TarotTemplate
      title="Tarot de la mitología colombiana"
      description="Una baraja editorial que traduce relatos ancestrales en arcanos visuales. No es adivinación: es leer los arquetipos del territorio a través de sus mitos."
      cards={tarotCards}
      daily={daily}
    />
  );
}
