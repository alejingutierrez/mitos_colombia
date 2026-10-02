import {
  TarotLandingPage,
  getTarotLandingMetadata,
} from "../../../components/tarot-commerce";

export const metadata = getTarotLandingMetadata("regalo-colombiano");

export default function RegaloColombianoPage() {
  return <TarotLandingPage slug="regalo-colombiano" />;
}

// Seller and payment configuration is injected at runtime, outside the public build snapshot.
export const dynamic = "force-dynamic";
