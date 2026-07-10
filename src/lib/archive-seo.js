export const ARCHIVE_QUERY_KEYS = [
  "q",
  "region",
  "community",
  "tag",
  "limit",
  "offset",
];

export function hasArchiveQuery(searchParams = {}) {
  return ARCHIVE_QUERY_KEYS.some((key) => {
    const value = searchParams?.[key];
    if (Array.isArray(value)) {
      return value.some((item) => Boolean(String(item || "").trim()));
    }
    return Boolean(String(value || "").trim());
  });
}

export function archiveRobots(searchParams = {}) {
  return hasArchiveQuery(searchParams)
    ? { index: false, follow: true }
    : undefined;
}
