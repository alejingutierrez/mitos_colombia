import { TarotTemplate } from "../../components/templates";
import { buildSeoMetadata, getSeoEntry } from "../../lib/seo";
import { dailySeed } from "../../lib/home-rotation";
import { getTarotCards, getDailyTarotSelection } from "../../lib/tarot";

export const revalidate = 1800;

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

export default async function TarotPage() {
  const seed = dailySeed();
  const tarotCards = (await getTarotCards()).map((card) => ({
    slug: card.slug, card_name: card.card_name, arcana: card.arcana, suit: card.suit,
    myth_title: card.myth_title, myth_slug: card.myth_slug, image_url: card.display_image_url || card.image_url || card.myth_image_url,
    reading_summary: card.reading_summary || card.meaning, selection_reason: card.selection_reason,
  }));

  // Carta del día: prioriza las que enlazan a un mito para que sea navegable.
  const linkable = (tarotCards || []).filter((c) => c.myth_slug);
  const dailyPool = linkable.length ? linkable : tarotCards;
  const daily = getDailyTarotSelection(dailyPool, 1, seed)[0] || null;

  return (
    <TarotTemplate
      title="Tarot de Colombia"
      description="Una baraja editorial que traduce relatos ancestrales en arcanos visuales. No es adivinación: es leer los arquetipos del territorio a través de sus mitos."
      cards={tarotCards}
      daily={daily}
    />
  );
}
