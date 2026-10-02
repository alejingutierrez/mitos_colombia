import { communitySlugs, loadStoryCatalog, mapLimit, optionalJson } from "../../scripts/instagram/lib/story-catalog.mjs";
import path from "node:path";

const cache = new Map();
export function cachedStoryCatalog(community, slug) {
  const key = `${community}/${slug}`;
  const old = cache.get(key);
  if (old && Date.now() - old.created < 30_000) return old.promise;
  const promise = loadStoryCatalog({ community, slug }).catch((error) => { cache.delete(key); throw error; });
  cache.set(key, { created: Date.now(), promise });
  return promise;
}

export async function storyLibrary(community) {
  const slugs = await communitySlugs(community);
  return mapLimit(slugs, 4, async (slug) => {
    const story = await optionalJson(path.join(process.cwd(), "content/instagram/stories", community, `${slug}.json`));
    return { slug, title: story?.title || slug.replace(/-/g, " "), ready: !!story };
  });
}

export function isLocalStoryRequest(request) {
  if (process.env.NODE_ENV === "production") return false;
  const url = new URL(request.url);
  if (!["127.0.0.1", "localhost", "[::1]"].includes(url.hostname)) return false;
  // Next can normalize request.url to localhost while preserving 127.0.0.1 in
  // Host. Compare the browser's Origin against that original authority.
  const authority = new URL(`${url.protocol}//${request.headers.get("host") || url.host}`);
  if (!["127.0.0.1", "localhost", "[::1]"].includes(authority.hostname)) return false;
  const origin = request.headers.get("origin");
  return !origin || origin === authority.origin;
}
