import OpenAI from "openai";
import { buildPlannerSystemPrompt } from "./bedrock-planner.mjs";
import {
  CAROUSEL_PLAN_SCHEMA,
  validateCarouselPlan,
} from "./plan-schema.mjs";

function imageDataUrl(asset) {
  if (!asset?.bytes) return "";
  const mime = asset.format === "png" ? "image/png" : "image/jpeg";
  return `data:${mime};base64,${asset.bytes.toString("base64")}`;
}

export async function planCarouselWithOpenAI({
  myth,
  assets,
  templates,
  env = process.env,
  requireThirdImage = false,
  maxAttempts = 2,
}) {
  const model = env.INSTAGRAM_OPENAI_MODEL || "gpt-5-mini";
  const client = new OpenAI({ apiKey: env.OPENAI_API_KEY });
  const eligibleTemplateIds = templates.map((item) => item.id);
  let repair = "";
  const failures = [];

  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    try {
      const response = await client.responses.create({
        model,
        reasoning: { effort: "low" },
        max_output_tokens: 6500,
        instructions: buildPlannerSystemPrompt({ requireThirdImage }),
        input: [
          {
            role: "user",
            content: [
              {
                type: "input_text",
                text: JSON.stringify({
                  myth: {
                    title: myth.title,
                    slug: myth.slug,
                    excerpt: myth.excerpt,
                    content: myth.content,
                    region: myth.region,
                    community: myth.community,
                    latitude: myth.latitude,
                    longitude: myth.longitude,
                    sources: myth.sources,
                    keySources: myth.keySources,
                  },
                  assets: assets.map(({ id, role, description, url }) => ({
                    id,
                    role,
                    description,
                    url,
                  })),
                  eligibleTemplates: templates,
                  repair: repair || null,
                }),
              },
              ...assets
                .map((asset) => imageDataUrl(asset))
                .filter(Boolean)
                .map((imageUrl) => ({
                  type: "input_image",
                  image_url: imageUrl,
                  detail: "low",
                })),
            ],
          },
        ],
        text: {
          format: {
            type: "json_schema",
            name: "instagram_carousel_plan",
            strict: false,
            schema: CAROUSEL_PLAN_SCHEMA,
          },
        },
      });
      const plan = JSON.parse(response.output_text || "{}");
      const errors = validateCarouselPlan(plan, eligibleTemplateIds, {
        requireThirdImage,
      });
      if (!errors.length) {
        return {
          provider: "openai_fallback",
          model_id: model,
          usage: response.usage || null,
          plan,
        };
      }
      failures.push(...errors);
      repair = `Corrige únicamente estos incumplimientos: ${errors.join(", ")}.`;
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      failures.push(`openai_failed:${message.slice(0, 240)}`);
      repair =
        "La respuesta anterior falló. Emite de nuevo un JSON completo y válido.";
    }
  }

  throw new Error(
    `No fue posible obtener un plan OpenAI válido: ${[
      ...new Set(failures),
    ].join(", ")}`
  );
}
