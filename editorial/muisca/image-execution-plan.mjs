import { muiscaImageDecisions } from "./image-decisions.mjs";
import { canonicalMuiscaSlugs } from "./universe.mjs";

export const CONSERVED_VERTICAL_POLICIES = {
  PENDING: "PENDING",
  ADAPT_9_16: "ADAPT_9_16",
  KEEP_2_3: "KEEP_2_3",
};

export const APPROVED_CONSERVED_VERTICAL_POLICY =
  CONSERVED_VERTICAL_POLICIES.KEEP_2_3;

const DECISION_VALUES = new Set(["CONSERVAR", "VERTICAL", "PAREJA"]);
const POLICY_VALUES = new Set(Object.values(CONSERVED_VERTICAL_POLICIES));

export function buildMuiscaImageExecutionPlan({
  conservedVerticalPolicy = APPROVED_CONSERVED_VERTICAL_POLICY,
} = {}) {
  if (!POLICY_VALUES.has(conservedVerticalPolicy)) {
    throw new Error(
      `Política de verticales conservadas desconocida: ${conservedVerticalPolicy}`,
    );
  }

  const decisionSlugs = Object.keys(muiscaImageDecisions).sort();
  if (
    decisionSlugs.length !== canonicalMuiscaSlugs.length ||
    decisionSlugs.some((slug, index) => slug !== canonicalMuiscaSlugs[index])
  ) {
    throw new Error("Las decisiones visuales no cubren el universo muisca.");
  }

  const operations = [];

  for (const slug of canonicalMuiscaSlugs) {
    const decision = muiscaImageDecisions[slug];
    if (!DECISION_VALUES.has(decision)) {
      throw new Error(`${slug}: decisión visual desconocida: ${decision}`);
    }

    if (decision === "PAREJA") {
      operations.push(
        {
          slug,
          decision,
          action: "GENERATE",
          orientation: "HORIZONTAL",
        },
        {
          slug,
          decision,
          action: "GENERATE",
          orientation: "VERTICAL",
        },
      );
      continue;
    }

    if (decision === "VERTICAL") {
      operations.push({
        slug,
        decision,
        action: "GENERATE",
        orientation: "VERTICAL",
      });
      continue;
    }

    const action =
      conservedVerticalPolicy === CONSERVED_VERTICAL_POLICIES.ADAPT_9_16
        ? "ADAPT_TO_9_16"
        : conservedVerticalPolicy === CONSERVED_VERTICAL_POLICIES.KEEP_2_3
          ? "KEEP_2_3"
          : "AWAIT_POLICY";
    operations.push({
      slug,
      decision,
      action,
      orientation: "VERTICAL",
    });
  }

  const generationOperations = operations.filter(
    (operation) => operation.action === "GENERATE",
  );
  const horizontalGenerationSlugs = generationOperations
    .filter((operation) => operation.orientation === "HORIZONTAL")
    .map((operation) => operation.slug);
  const verticalGenerationSlugs = generationOperations
    .filter((operation) => operation.orientation === "VERTICAL")
    .map((operation) => operation.slug);
  const conservedSlugs = operations
    .filter((operation) => operation.decision === "CONSERVAR")
    .map((operation) => operation.slug);
  const unresolvedSlugs = operations
    .filter((operation) => operation.action === "AWAIT_POLICY")
    .map((operation) => operation.slug);

  return {
    conservedVerticalPolicy,
    operations,
    horizontalGenerationSlugs,
    verticalGenerationSlugs,
    conservedSlugs,
    unresolvedSlugs,
    summary: {
      myths: canonicalMuiscaSlugs.length,
      horizontalGenerations: horizontalGenerationSlugs.length,
      verticalGenerations: verticalGenerationSlugs.length,
      totalGenerations: generationOperations.length,
      adaptations:
        conservedVerticalPolicy === CONSERVED_VERTICAL_POLICIES.ADAPT_9_16
          ? conservedSlugs.length
          : 0,
      keptAtTwoByThree:
        conservedVerticalPolicy === CONSERVED_VERTICAL_POLICIES.KEEP_2_3
          ? conservedSlugs.length
          : 0,
      unresolved: unresolvedSlugs.length,
    },
  };
}
