import { redirectToPath } from "../../lib/legacy-seo-route";

export const runtime = "nodejs";

/* La mejor URL del sitio no puede caer en la portada: «mitos de Colombia» es
   exactamente el archivo, no la home. Redirigía a «/» y desperdiciaba la
   coincidencia literal con la consulta que más gente escribe. */
export const GET = redirectToPath("/mitos");
export const HEAD = GET;
