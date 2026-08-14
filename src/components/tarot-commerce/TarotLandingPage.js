import { notFound } from "next/navigation";
import { BreadcrumbJsonLd, ProductJsonLd } from "../StructuredData";
import { getTarotCards } from "../../lib/tarot";
import {
  getTarotLandingVariant,
  getTarotProduct,
} from "../../lib/tarot-commerce";
import { TarotCommerceExperience } from "./TarotCommerceExperience";

const PREFERRED_CARDS = [
  "La Emperatriz",
  "El Ermitaño",
  "La Templanza",
  "El Diablo",
  "La Estrella",
  "As de Copas",
  "Seis de Bastos",
  "Tres de Espadas",
  "Reina de Oros",
  "Siete de Espadas",
];

const RAW_SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "");
const SITE_URL =
  RAW_SITE_URL.trim().replace(/\/+$/, "") || "https://www.mitosdecolombia.com";

function publicCard(card) {
  return {
    slug: card.slug,
    card_name: card.card_name,
    myth_title: card.myth_title,
    myth_slug: card.myth_slug,
    myth_excerpt: card.myth_excerpt || null,
    myth_region: card.myth_region || null,
    myth_community: card.myth_community || null,
    meaning: card.meaning || null,
    arcana: card.arcana || null,
    suit: card.suit || null,
    rank_label: card.rank_label || null,
    image_url:
      card.display_image_url || card.image_url || card.myth_image_url || null,
  };
}

function selectLandingCards(cards, count) {
  const byName = new Map(cards.map((card) => [card.card_name, card]));
  const selected = PREFERRED_CARDS.slice(0, count)
    .map((name) => byName.get(name))
    .filter(Boolean);
  const selectedNames = new Set(selected.map((card) => card.card_name));

  for (const card of cards) {
    if (selected.length >= count) break;
    if (selectedNames.has(card.card_name)) continue;
    if (card.display_image_url || card.image_url || card.myth_image_url) {
      selected.push(card);
      selectedNames.add(card.card_name);
    }
  }

  return selected.slice(0, count).map(publicCard);
}

export function getTarotLandingMetadata(slug) {
  const variant = getTarotLandingVariant(slug);
  if (!variant) return {};
  return {
    title: `${variant.title} | Mitos de Colombia`,
    description: variant.subtitle,
    alternates: { canonical: variant.path },
    openGraph: {
      title: variant.title,
      description: variant.subtitle,
      type: "website",
      url: variant.path,
      images: [
        {
          url: variant.heroVisual?.src || "/commerce/tarot-product-provisional.png",
          width: 1536,
          height: 1024,
          alt:
            variant.heroVisual?.alt ||
            "Visualización provisional del Tarot de Mitos Colombianos",
        },
      ],
    },
  };
}

export async function TarotLandingPage({ slug }) {
  const variant = getTarotLandingVariant(slug);
  if (!variant) notFound();

  const cards = selectLandingCards(
    await getTarotCards(),
    variant.galleryCount
  );
  const product = getTarotProduct();

  return (
    <>
      <ProductJsonLd product={product} variant={variant} siteUrl={SITE_URL} />
      <BreadcrumbJsonLd
        items={[
          { name: "Mitos de Colombia", url: `${SITE_URL}/` },
          { name: "Tarot", url: `${SITE_URL}/tarot` },
          { name: variant.title, url: `${SITE_URL}${variant.path}` },
        ]}
      />
      <TarotCommerceExperience
        variant={variant}
        product={product}
        cards={cards}
      />
    </>
  );
}
