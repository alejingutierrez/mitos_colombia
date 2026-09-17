"use client";

import { useEffect } from "react";
import { captureTarotAttribution } from "../lib/tarot-attribution";

/**
 * Captura de campaña para todo el sitio.
 *
 * Un anuncio puede aterrizar en cualquier página —el archivo, un mito, la
 * portada— y no sólo en las landings comerciales. Sin esta captura, el `gclid`
 * y los `utm_*` se pierden en la primera navegación y la compra posterior
 * llega a Google Ads sin origen.
 *
 * Sólo guarda la lista blanca de `cleanTarotCampaign` (utm, gclid, gbraid,
 * wbraid y la intención de la landing). Nunca lee ni almacena datos personales.
 */
export function CampaignAttribution() {
  useEffect(() => {
    if (window.location.pathname.startsWith("/admin")) return;
    // Corre después de los efectos de la página, así que conserva la intención
    // que la landing ya haya declarado para esta misma visita.
    captureTarotAttribution({ keepStoredContext: true });
  }, []);

  return null;
}
