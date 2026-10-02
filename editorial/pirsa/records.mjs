import { definePirsaMyth } from "./define-editorial-myth.mjs";
import pirsaDefinitions from "./definitions.mjs";

const records = pirsaDefinitions.map((definition) =>
  definePirsaMyth(definition),
);

export const pirsaMythsBySlug = Object.fromEntries(
  records.map((record) => [record.slug, record]),
);

if (Object.keys(pirsaMythsBySlug).length !== records.length) {
  throw new Error("Hay slugs Pirsa duplicados.");
}

export default records;
