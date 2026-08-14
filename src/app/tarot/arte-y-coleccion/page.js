import {
  TarotLandingPage,
  getTarotLandingMetadata,
} from "../../../components/tarot-commerce";

export const metadata = getTarotLandingMetadata("arte-y-coleccion");

export default function ArteYColeccionPage() {
  return <TarotLandingPage slug="arte-y-coleccion" />;
}
