import {
  TarotLandingPage,
  getTarotLandingMetadata,
} from "../../../components/tarot-commerce";

export const metadata = getTarotLandingMetadata("comprar");

export default function ComprarTarotPage() {
  return <TarotLandingPage slug="comprar" />;
}
