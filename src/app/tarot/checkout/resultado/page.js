import { TarotOrderResultPage } from "../../../../components/tarot-commerce/TarotCheckoutPages";
import { getTarotProduct } from "../../../../lib/tarot-commerce";

export const metadata = {
  title: "Estado de tu compra | Tarot de Mitos Colombianos",
  robots: { index: false, follow: false },
};

export default async function ResultadoCheckoutPage({ searchParams }) {
  const params = await searchParams;
  const token = typeof params?.order === "string" ? params.order : "";
  return <TarotOrderResultPage token={token} product={getTarotProduct()} />;
}
