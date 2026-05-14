import { NextResponse } from "next/server";
import { getTaxonomy } from "./myths";
import { getSearchSuggestions } from "./search";
import {
  normalizeLegacySlug,
  resolveLegacyPostTarget,
  resolveLegacyTaxonomyTarget,
} from "./legacy-seo";

export const runtime = "nodejs";

function absoluteUrl(request, pathname) {
  return new URL(pathname, request.url);
}

export function legacyGoneResponse() {
  return new Response("Gone", {
    status: 410,
    headers: {
      "Cache-Control": "public, max-age=0, must-revalidate",
      "Content-Type": "text/plain; charset=utf-8",
      "X-Robots-Tag": "noindex",
    },
  });
}

export function legacyRedirectResponse(request, pathname) {
  return NextResponse.redirect(absoluteUrl(request, pathname), 308);
}

export function redirectToPath(pathname) {
  return function handleStaticLegacyRedirect(request) {
    return legacyRedirectResponse(request, pathname);
  };
}

export function gone() {
  return legacyGoneResponse();
}

export async function handleLegacyTaxonomyRequest(request, params) {
  const resolvedParams = await params;
  const taxonomy = await getTaxonomy();
  const target = resolveLegacyTaxonomyTarget(resolvedParams?.slug, taxonomy);

  return target ? legacyRedirectResponse(request, target) : legacyGoneResponse();
}

export async function handleLegacyPostRequest(request, params) {
  const resolvedParams = await params;
  const slug = normalizeLegacySlug(resolvedParams?.slug);
  if (!slug) return legacyGoneResponse();

  const query = slug.replace(/-/g, " ");
  const suggestions = await getSearchSuggestions(query, 5);
  const target = resolveLegacyPostTarget(slug, suggestions);

  return target ? legacyRedirectResponse(request, target) : legacyGoneResponse();
}
