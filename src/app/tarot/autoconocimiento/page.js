import {
  TarotLandingPage,
  getTarotLandingMetadata,
} from "../../../components/tarot-commerce";

export const metadata = getTarotLandingMetadata("autoconocimiento");

export default function AutoconocimientoTarotPage() {
  return <TarotLandingPage slug="autoconocimiento" />;
}
