import { TarotCartPage } from "../../../components/tarot-commerce/TarotCheckoutPages";
import { getTarotProduct } from "../../../lib/tarot-commerce";

export const metadata = {
  title: "Tu carrito | Tarot de Mitos Colombianos",
  robots: { index: false, follow: false },
};

export default function CarritoPage() {
  return <TarotCartPage product={getTarotProduct()} />;
}
