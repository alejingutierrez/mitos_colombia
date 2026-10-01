import {
  TarotLandingPage,
  getTarotLandingMetadata,
} from "../../../components/tarot-commerce";

export const metadata = getTarotLandingMetadata("comprar");

export default function ComprarTarotPage() {
  return <TarotLandingPage slug="comprar" />;
}

// Seller and payment configuration is injected at runtime, outside the public build snapshot.
export const dynamic = "force-dynamic";
