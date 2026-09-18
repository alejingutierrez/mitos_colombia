import definitions from "./definitions.mjs";

export const tucanoMythsBySlug = Object.fromEntries(
  definitions.map((record) => [record.slug, record]),
);

if (Object.keys(tucanoMythsBySlug).length !== definitions.length) {
  throw new Error("Hay slugs Tucano duplicados.");
}

export default definitions;
