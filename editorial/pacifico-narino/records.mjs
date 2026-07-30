import definitions from "./definitions.mjs";

export const pacificoNarinoMythsBySlug = Object.fromEntries(
  definitions.map((record) => [record.slug, record]),
);

if (Object.keys(pacificoNarinoMythsBySlug).length !== definitions.length) {
  throw new Error("Hay slugs Pacífico Nariño duplicados.");
}

export default definitions;
