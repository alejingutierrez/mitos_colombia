import {
  TarotLandingPage,
  getTarotLandingMetadata,
} from "../../../components/tarot-commerce";

export const metadata = getTarotLandingMetadata("autoconocimiento");

export default function AutoconocimientoTarotPage() {
  return <TarotLandingPage slug="autoconocimiento" />;
}

// Seller and payment configuration is injected at runtime, outside the public build snapshot.
export const dynamic = "force-dynamic";
