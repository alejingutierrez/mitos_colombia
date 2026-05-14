import { handleLegacyTaxonomyRequest } from "../../../../lib/legacy-seo-route";

export const runtime = "nodejs";

export async function GET(request, { params }) {
  return handleLegacyTaxonomyRequest(request, params);
}

export const HEAD = GET;
