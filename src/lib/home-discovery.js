import { balancedPick, hashString, isImporterBucket, shuffleSeeded } from "./home-rotation.js";

export const MESA_COUNT = 24;
export const DISCOVERY_THEMES = ["origen", "agua", "animales", "transformacion", "muerte", "naturaleza", "amor", "astucia"];

/** Mantiene el reparto territorial y elige, dentro de cada turno, temas y
 * comunidades menos vistos. Sólo usa etiquetas e identidades del archivo. */
export function discoveryPick({ items = [], count = MESA_COUNT, seed = 0, exclude = [] } = {}) {
  const used = new Set(exclude);
  const regions = new Map();
  for (const item of shuffleSeeded(items, seed)) {
    if (!item?.slug || used.has(item.slug) || isImporterBucket(item.region)) continue;
    used.add(item.slug);
    const key = item.region_slug || item.regionSlug || item.region;
    if (!regions.has(key)) regions.set(key, []);
    regions.get(key).push(item);
  }
  const queues = shuffleSeeded([...regions.values()], seed ^ hashString("territorios"));
  const topics = new Map();
  const communities = new Map();
  const selected = [];
  while (selected.length < count && queues.some((queue) => queue.length)) {
    for (const queue of queues) {
      if (!queue.length || selected.length >= count) continue;
      const score = (item) => {
        const tags = (item.tags || []).filter((tag) => DISCOVERY_THEMES.includes(tag.slug));
        const topicScore = tags.length ? Math.max(...tags.map((tag) => 8 / (1 + (topics.get(tag.slug) || 0)))) : 0;
        const community = item.community_slug || item.community || "";
        return topicScore + 3 / (1 + (communities.get(community) || 0));
      };
      let best = 0;
      for (let i = 1; i < queue.length; i++) if (score(queue[i]) > score(queue[best])) best = i;
      const [item] = queue.splice(best, 1);
      selected.push(item);
      for (const tag of item.tags || []) topics.set(tag.slug, (topics.get(tag.slug) || 0) + 1);
      const community = item.community_slug || item.community || "";
      communities.set(community, (communities.get(community) || 0) + 1);
    }
  }
  return selected;
}

/** Un mismo pueblo puede tener filas en varios territorios. Se conserva una
 * pestaña por slug, con el total y las obras de todas sus filas. */
export function communityCatalog(rows = [], exclude = []) {
  const excluded = new Set(exclude);
  const grouped = new Map();
  for (const row of rows) {
    if (row.generic || !row.slug) continue;
    const entry = grouped.get(row.slug) || { ...row, mythCount: 0, myths: [] };
    entry.mythCount += Number(row.mythCount) || 0;
    const seen = new Set(entry.myths.map((myth) => myth.slug));
    for (const myth of row.myths || []) {
      if (myth.imageUrl && !seen.has(myth.slug)) {
        entry.myths.push(myth);
        seen.add(myth.slug);
      }
    }
    grouped.set(row.slug, entry);
  }
  // Preferir obras nuevas sin vaciar los pueblos con un corpus pequeño.
  return [...grouped.values()].filter((entry) => entry.myths.length).map((entry) => ({ ...entry, myths: [...entry.myths.filter((myth) => !excluded.has(myth.slug)), ...entry.myths.filter((myth) => excluded.has(myth.slug))].slice(0, 8) }));
}

export function communitySelection(items = [], seed = 0, exclude = []) {
  return balancedPick({ items, count: 6, seed, exclude, groupBy: (item) => item.regionSlug, keyOf: (item) => item.slug }).sort((a, b) => (b.myths?.length || 0) - (a.myths?.length || 0));
}
