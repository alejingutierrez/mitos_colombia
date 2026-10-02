import {
  TarotLandingPage,
  getTarotLandingMetadata,
} from "../../../components/tarot-commerce";

export const metadata = getTarotLandingMetadata("souvenir-colombiano");

export default function SouvenirColombianoPage() {
  return <TarotLandingPage slug="souvenir-colombiano" />;
}

// Seller and payment configuration is injected at runtime, outside the public build snapshot.
export const dynamic = "force-dynamic";
