export function formatCategoryName(name) {
  const value = String(name || "").trim();
  if (!value) {
    return "";
  }
  return value.charAt(0).toUpperCase() + value.slice(1);
}
