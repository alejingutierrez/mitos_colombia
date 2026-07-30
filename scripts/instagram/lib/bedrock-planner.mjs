import {
  BedrockRuntimeClient,
  ConverseCommand,
} from "@aws-sdk/client-bedrock-runtime";
import {
  CAROUSEL_PLAN_SCHEMA,
  PLAN_TOOL_NAME,
  validateCarouselPlan,
} from "./plan-schema.mjs";

function envValue(env, ...keys) {
  return keys.map((key) => env[key]).find((value) => String(value || "").trim());
}

function createClient(env) {
  const region =
    envValue(env, "INSTAGRAM_BEDROCK_REGION", "BEDROCK_REGION", "AWS_REGION") ||
    "us-east-2";
  const profile = envValue(env, "INSTAGRAM_BEDROCK_PROFILE");
  const accessKeyId = envValue(
    env,
    "INSTAGRAM_BEDROCK_ACCESS_KEY_ID",
    "BEDROCK_AWS_ACCESS_KEY_ID",
    "AWS_ACCESS_KEY_ID"
  );
  const secretAccessKey = envValue(
    env,
    "INSTAGRAM_BEDROCK_SECRET_ACCESS_KEY",
    "BEDROCK_AWS_SECRET_ACCESS_KEY",
    "AWS_SECRET_ACCESS_KEY"
  );
  const sessionToken = envValue(
    env,
    "INSTAGRAM_BEDROCK_SESSION_TOKEN",
    "AWS_SESSION_TOKEN"
  );
  if (profile) process.env.AWS_PROFILE = profile;

  return new BedrockRuntimeClient({
    region,
    ...(!profile && accessKeyId && secretAccessKey
      ? {
          credentials: {
            accessKeyId,
            secretAccessKey,
            ...(sessionToken ? { sessionToken } : {}),
          },
        }
      : {}),
  });
}

function extractToolInput(payload) {
  const queue = [payload];
  const seen = new Set();
  while (queue.length) {
    const node = queue.pop();
    if (!node || typeof node !== "object" || seen.has(node)) continue;
    seen.add(node);
    if (Array.isArray(node)) {
      queue.push(...node);
      continue;
    }
    const toolUse = node.toolUse;
    if (
      toolUse?.name === PLAN_TOOL_NAME &&
      toolUse.input &&
      typeof toolUse.input === "object"
    ) {
      return toolUse.input;
    }
    queue.push(...Object.values(node));
  }
  return null;
}

export function buildPlannerSystemPrompt({
  requireThirdImage = false,
} = {}) {
  const prompt = [
    "Eres editor de mitos colombianos y director creativo de carruseles de Instagram.",
    "Tu trabajo es comprimir sin vaciar: narra una versión breve, autosuficiente y con continuidad. Incluso un mito corto necesita escenas, causas, transformaciones y consecuencias; no lo reduzcas a una sucesión de lemas.",
    "El carrusel debe tener entre 8 y 14 láminas. Usa 8 a 10 sólo cuando el relato sea realmente breve; si existe una tercera imagen o varios giros, usa entre 10 y 14.",
    requireThirdImage
      ? "Usa las dos imágenes canónicas exactamente una vez y exige exactamente una tercera imagen nueva. Identifica una escena, transformación, detalle u objeto narrativo esencial que todavía no esté representado. generated_image.needed debe ser true y una sola lámina debe usar asset_id generated_third."
      : "Usa las dos imágenes canónicas exactamente una vez. Puedes pedir exactamente una imagen nueva sólo cuando cubra una escena o detalle ausente. Nunca repitas una imagen dentro del carrusel.",
    "Distribuye las imágenes como hitos, no como una galería inicial. La portada es la secuencia 1; deja al menos tres láminas completas antes de la segunda imagen y otras tres antes de la tercera. La segunda imagen debe caer cerca del centro y la tercera en el último tercio, siempre antes del cierre.",
    "Si usas un mapa, sitúalo después de una lámina de relato y nunca inmediatamente antes o después de una imagen. El mapa también cuenta como pausa visual.",
    "No uses imágenes de otra comunidad, de otro mito o una portada comunitaria salvo que el input las declare expresamente como activo extraordinario aprobado. En este encargo no existen esos activos.",
    "Una lámina sin fotografía desarrolla un momento narrativo completo. Declara siempre text_density: short para hasta 32 palabras, medium para hasta 54 o narrative para hasta 78.",
    "En todo carrusel incluye al menos dos fichas medium o narrative; usa al menos tres cuando haya 11 o más secuencias. Una ficha narrativa no es relleno: debe aportar acción, contexto, causalidad o consecuencia que no esté contada en otra lámina.",
    "La mayor parte de las secuencias que no son imagen ni mapa deben ser fichas de relato. Las fichas gráficas breves funcionan como respiración, pero no pueden sustituir la historia ni dominar el carrusel.",
    "Cuando una lámina tipográfica necesite una intención visual más precisa que su función narrativa, usa design_role: identity, context, testimony, pause, symbol, sequence, development, turn, climax o closing. No elijas una plantilla concreta.",
    "Alterna densidades: una ficha narrativa necesita antes o después una lámina visual, breve o de pausa. No encadenes dos bloques narrativos.",
    "Usa al menos tres paletas de la familia disponible y nunca repitas el mismo fondo tres veces seguidas.",
    "Las plantillas ya contienen jerarquías, cambios de escala y posiciones distintas: asigna palette_id por lámina para reforzar cada giro.",
    "No inventes nombres, ceremonias, fechas, parentescos, rasgos culturales, geografía o diálogos. Distingue el núcleo del relato de las lecturas históricas.",
    "El inicio debe detener el scroll sin clickbait. El cierre debe dejar una idea o pregunta, no una llamada genérica a comentar.",
    "Las dos imágenes de referencia muestran identidad visual, pero no autorizan a repetir estereotipos o detalles que el texto corregido desmiente.",
    "Elige una plantilla sólo entre las elegibles. Devuelve únicamente la herramienta solicitada.",
  ];
  return prompt.join("\n\n");
}

function imageBlock(asset) {
  if (!asset?.bytes) return null;
  return {
    image: {
      format: asset.format === "png" ? "png" : "jpeg",
      source: { bytes: asset.bytes },
    },
  };
}

function buildPayload({
  myth,
  assets,
  templates,
  modelId,
  repair,
  requireThirdImage,
}) {
  const content = [
    {
      text: JSON.stringify({
        myth: {
          title: myth.title,
          slug: myth.slug,
          excerpt: myth.excerpt,
          content: myth.content,
          region: myth.region,
          community: myth.community,
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
  ];

  for (const asset of assets) {
    const block = imageBlock(asset);
    if (!block) continue;
    content.push({ text: `ACTIVO VISUAL ${asset.id}: ${asset.description}` });
    content.push(block);
  }

  return {
    modelId,
    system: [{ text: buildPlannerSystemPrompt({ requireThirdImage }) }],
    messages: [{ role: "user", content }],
    inferenceConfig: { maxTokens: 5500, temperature: 0.55 },
    toolConfig: {
      tools: [
        {
          toolSpec: {
            name: PLAN_TOOL_NAME,
            description:
              "Define la secuencia editorial completa de un carrusel de mito.",
            inputSchema: { json: CAROUSEL_PLAN_SCHEMA },
          },
        },
      ],
      toolChoice: { tool: { name: PLAN_TOOL_NAME } },
    },
  };
}

export async function planCarouselWithBedrock({
  myth,
  assets,
  templates,
  env = process.env,
  maxAttempts = 2,
  requireThirdImage = false,
}) {
  const modelId =
    envValue(
      env,
      "INSTAGRAM_BEDROCK_MODEL_ID",
      "BEDROCK_INFERENCE_PROFILE_ID",
      "BEDROCK_MODEL_ID"
    ) || "us.anthropic.claude-opus-4-8";
  const client = createClient(env);
  let repair = "";
  const failures = [];
  const eligibleTemplateIds = templates.map((item) => item.id);

  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    try {
      const response = await client.send(
        new ConverseCommand(
          buildPayload({
            myth,
            assets,
            templates,
            modelId,
            repair,
            requireThirdImage,
          })
        ),
        { abortSignal: AbortSignal.timeout(90_000) }
      );
      const plan = extractToolInput(response.output || response);
      if (!plan) {
        failures.push("tool_output_missing");
        repair = "La respuesta anterior no llamó la herramienta obligatoria.";
        continue;
      }
      const errors = validateCarouselPlan(plan, eligibleTemplateIds, {
        requireThirdImage,
      });
      if (!errors.length) {
        return {
          provider: "bedrock",
          model_id: modelId,
          usage: response.usage || null,
          plan,
        };
      }
      failures.push(...errors);
      repair = `Corrige únicamente estos incumplimientos: ${errors.join(", ")}.`;
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      failures.push(`bedrock_failed:${message.slice(0, 180)}`);
      repair =
        "La llamada anterior falló. Vuelve a emitir una herramienta completa y válida.";
    }
  }

  throw new Error(
    `No fue posible obtener un plan Bedrock válido: ${[
      ...new Set(failures),
    ].join(", ")}`
  );
}
