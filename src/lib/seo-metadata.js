import { isStaticDataBuild, isTransientDbError } from "./db-resilience.js";

const TITLE_LIMIT = 60;
const DESCRIPTION_MIN = 70;
const DESCRIPTION_LIMIT = 160;
const BRAND_SUFFIX = " | Mitos de Colombia";
const SHORT_DESCRIPTION_SUFFIX =
  " Conecta relatos, territorio y tradicion oral colombiana.";

function cleanText(value) {
  return String(value || "").replace(/\s+/g, " ").trim();
}

function truncateAtWord(value, maxLength) {
  const text = cleanText(value);
  if (text.length <= maxLength) return text;

  const ellipsis = "...";
  const hardLimit = Math.max(1, maxLength - ellipsis.length);
  const slice = text.slice(0, hardLimit + 1);
  const lastBreak = Math.max(
    slice.lastIndexOf(" "),
    slice.lastIndexOf(","),
    slice.lastIndexOf(":"),
    slice.lastIndexOf(";")
  );
  const cutoff = lastBreak > Math.floor(hardLimit * 0.55) ? lastBreak : hardLimit;
  const shortened = slice.slice(0, cutoff).replace(/[\s,;:.-]+$/g, "");
  return `${shortened}${ellipsis}`;
}

function splitBrandSuffix(title) {
  const text = cleanText(title);
  const match = text.match(/^(.*?)(?:\s[|-]\s*Mitos de Colombia)$/i);
  if (!match) {
    return { base: text, suffix: "" };
  }
  return { base: cleanText(match[1]), suffix: BRAND_SUFFIX };
}

export function normalizeSeoTitle(value, maxLength = TITLE_LIMIT) {
  const title = cleanText(value);
  if (!title) return title;

  const { base, suffix } = splitBrandSuffix(title);
  if (suffix) {
    const baseLimit = Math.max(12, maxLength - suffix.length);
    return `${truncateAtWord(base, baseLimit)}${suffix}`;
  }

  return truncateAtWord(title, maxLength);
}

export function normalizeSeoDescription(value) {
  let description = cleanText(value);
  if (!description) return description;

  if (description.length < DESCRIPTION_MIN) {
    description = `${description.replace(/[.。]+$/g, "")}.${SHORT_DESCRIPTION_SUFFIX}`;
  }

  return truncateAtWord(description, DESCRIPTION_LIMIT);
}

export function pickSeoTitle({ seoTitle, fallbackTitle, preferFallbackTitle = false }) {
  if (preferFallbackTitle && cleanText(fallbackTitle)) {
    return cleanText(fallbackTitle);
  }
  return cleanText(seoTitle) || cleanText(fallbackTitle);
}

export function shouldRethrowSeoLoadError(error, env = process.env) {
  return isStaticDataBuild(env) && isTransientDbError(error);
}
