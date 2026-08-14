import { TarotCheckoutPage } from "../../../components/tarot-commerce/TarotCheckoutPages";
import { getTarotProduct } from "../../../lib/tarot-commerce";

export const metadata = {
  title: "Finaliza tu compra | Tarot de Mitos Colombianos",
  robots: { index: false, follow: false },
};

export default function CheckoutPage() {
  return <TarotCheckoutPage product={getTarotProduct()} />;
}
