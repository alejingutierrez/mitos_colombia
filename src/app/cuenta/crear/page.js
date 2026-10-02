import { redirect } from "next/navigation";
import { TarotAccountAuthPage } from "../../../components/tarot-commerce/TarotAccountAuthPage";
import { getCurrentTarotAccount } from "../../../lib/tarot-auth";

export const dynamic = "force-dynamic";
export const metadata = {
  title: "Crear cuenta | Mitos de Colombia",
  robots: { index: false, follow: false },
};

function safeNext(value) {
  return typeof value === "string" && value.startsWith("/") && !value.startsWith("//") ? value : "/cuenta";
}

export default async function CrearCuentaPage({ searchParams }) {
  const params = await searchParams;
  const nextPath = safeNext(params?.next);
  const account = await getCurrentTarotAccount();
  if (account) redirect(nextPath);
  return (
    <TarotAccountAuthPage
      mode="register"
      orderToken={typeof params?.order === "string" ? params.order : ""}
      nextPath={nextPath}
    />
  );
}
