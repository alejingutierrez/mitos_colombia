import { handleLegacyPostRequest } from "../../../lib/legacy-seo-route";

export const runtime = "nodejs";

export async function GET(request, { params }) {
  return handleLegacyPostRequest(request, params);
}

export const HEAD = GET;
