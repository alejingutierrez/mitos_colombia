import {
  TarotLandingPage,
  getTarotLandingMetadata,
} from "../../../components/tarot-commerce";

export const metadata = getTarotLandingMetadata("regalo-colombiano");

export default function RegaloColombianoPage() {
  return <TarotLandingPage slug="regalo-colombiano" />;
}
