import {
  TarotLandingPage,
  getTarotLandingMetadata,
} from "../../../components/tarot-commerce";

export const metadata = getTarotLandingMetadata("arte-y-coleccion");

export default function ArteYColeccionPage() {
  return <TarotLandingPage slug="arte-y-coleccion" />;
}

// Seller and payment configuration is injected at runtime, outside the public build snapshot.
export const dynamic = "force-dynamic";
