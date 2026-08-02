import definitions from "./definitions.mjs";

export const amazonasMixtoResidualMythsBySlug = Object.fromEntries(
  definitions.map((record) => [record.slug, record]),
);

if (Object.keys(amazonasMixtoResidualMythsBySlug).length !== definitions.length) {
  throw new Error("Hay slugs residuales de Amazonas duplicados.");
}

export default definitions;
