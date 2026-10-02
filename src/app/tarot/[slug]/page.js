import { notFound, permanentRedirect } from "next/navigation";
import { resolveRouteParams } from "../../../lib/next-route-props";
import {
  TAROT_RETIRED_LANDINGS,
  resolveRetiredTarotLanding,
} from "../../../lib/tarot-landing-routes";

export const runtime = "nodejs";
export const dynamicParams = true;

export const metadata = {
  title: "Landing de tarot no encontrada",
  description:
    "La dirección solicitada bajo /tarot no corresponde a ninguna landing publicada.",
  robots: { index: false, follow: false },
};

export function generateStaticParams() {
  return Object.keys(TAROT_RETIRED_LANDINGS).map((slug) => ({ slug }));
}

/**
 * Las seis landings publicadas tienen su propia ruta estática y ganan sobre
 * este segmento dinámico. Aquí sólo llegan direcciones que no existen: las
 * jubiladas de forma explícita se redirigen con 308 y el resto responde 404
 * para que una URL de anuncio equivocada falle a la vista y no en silencio.
 */
export default async function TarotLandingFallbackPage({ params }) {
  const { slug } = await resolveRouteParams(params);
  const target = resolveRetiredTarotLanding(slug);
  if (target) permanentRedirect(target);
  notFound();
}
