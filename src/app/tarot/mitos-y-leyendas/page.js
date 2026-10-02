import {
  TarotLandingPage,
  getTarotLandingMetadata,
} from "../../../components/tarot-commerce";

export const metadata = getTarotLandingMetadata("mitos-y-leyendas");

export default function MitosYLeyendasPage() {
  return <TarotLandingPage slug="mitos-y-leyendas" />;
}
