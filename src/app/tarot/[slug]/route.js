import { redirectToPath } from "../../../lib/legacy-seo-route";

export const runtime = "nodejs";

export const GET = redirectToPath("/tarot");
export const HEAD = GET;
