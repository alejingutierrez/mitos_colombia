import { TarotCheckoutPage } from "../../../components/tarot-commerce/TarotCheckoutPages";
import { getTarotProduct } from "../../../lib/tarot-commerce";
import { getCurrentTarotAccount } from "../../../lib/tarot-auth";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Finaliza tu compra | Tarot de Mitos Colombianos",
  robots: { index: false, follow: false },
};

export default async function CheckoutPage() {
  const account = await getCurrentTarotAccount();
  return <TarotCheckoutPage product={getTarotProduct()} account={account} />;
}
