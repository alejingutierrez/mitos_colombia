import {
  TarotLandingPage,
  getTarotLandingMetadata,
} from "../../../components/tarot-commerce";

export const metadata = getTarotLandingMetadata("souvenir-colombiano");

export default function SouvenirColombianoPage() {
  return <TarotLandingPage slug="souvenir-colombiano" />;
}
