import { redirectToPath } from "../../lib/legacy-seo-route";

export const runtime = "nodejs";

export const GET = redirectToPath("/");
export const HEAD = GET;
