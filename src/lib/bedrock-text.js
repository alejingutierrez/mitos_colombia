/**
 * Puerta única de texto del proyecto: todo lo que no sea imagen sale por
 * Bedrock, no por OpenAI. OpenAI queda reservado a `images.generate` y
 * `images.edit` (ver `image-generation.js`).
 *
 * El cliente imita la superficie de `openai.chat.completions.create` que ya
 * usan las rutas de admin —mismos `messages`, misma lectura de
 * `response.choices[0].message.content`— para que migrar un sitio sea cambiar
 * el cliente y nada más. Lo que no imita, porque Bedrock no lo tiene, es la
 * búsqueda web alojada del pipeline editorial.
 */

import {
  BedrockRuntimeClient,
  ConverseCommand,
} from "@aws-sdk/client-bedrock-runtime";

/**
 * Converse no tiene `json_schema` como OpenAI, pero sí herramientas con esquema
 * de entrada. Obligar al modelo a llamar una herramienta única es el
 * equivalente estricto: o devuelve algo que encaja en el esquema, o no
 * devuelve. Es lo que ya hace el planificador de carruseles.
 */
const STRUCTURED_TOOL_NAME = "emitir_resultado";

function envValue(env, ...keys) {
  return keys.map((key) => env[key]).find((value) => String(value || "").trim());
}

// Modelo por defecto para las tareas cortas que antes hacía gpt-4o-mini
// (reescritura de prompts, descripciones, SEO, formato). Sale por variable
// propia y NO hereda de INSTAGRAM_BEDROCK_MODEL_ID: esa la pisa el carril de
// carruseles y hoy apunta a un modelo retirado.
export const BEDROCK_TEXT_MODEL_ID =
  process.env.BEDROCK_TEXT_MODEL_ID ||
  "us.anthropic.claude-haiku-4-5-20251001-v1:0";

// Tope de salida por defecto. `format-content` devuelve el mito entero
// reorganizado, así que un tope corto lo truncaría a mitad de párrafo.
const DEFAULT_MAX_TOKENS = Number.parseInt(
  process.env.BEDROCK_TEXT_MAX_TOKENS || "8192",
  10
);

const MAX_ATTEMPTS = Number.parseInt(
  process.env.BEDROCK_TEXT_MAX_ATTEMPTS || "4",
  10
);

const JSON_INSTRUCTION =
  "Responde EXCLUSIVAMENTE con un objeto JSON válido. Sin explicaciones, " +
  "sin texto antes ni después, sin vallas de código.";

/**
 * La API key de Bedrock (formato `ABSK…`) no es lo mismo que unas credenciales
 * de IAM: es una clave propia de Bedrock, puede pertenecer a otra cuenta que la
 * del perfil de AWS, y por eso da acceso a otro catálogo de modelos. Es la vía
 * preferida aquí: es la que usa ODA y la que tiene los Claude nuevos.
 *
 * El SDK la lee de `AWS_BEARER_TOKEN_BEDROCK`; si además se le pasan
 * credenciales explícitas, manda IAM y la clave se ignora en silencio. Por eso
 * cuando hay bearer token se construye el cliente SIN credenciales.
 */
function bedrockBearerToken(env = process.env) {
  const token = envValue(env, "AWS_BEARER_TOKEN_BEDROCK", "BEDROCK_API_KEY", "BEDROCK_ACCESS_KEY");
  return token && String(token).startsWith("ABSK") ? String(token) : "";
}

/**
 * Falla temprano y con un mensaje que dice qué falta. Sustituye a los viejos
 * `if (!process.env.OPENAI_API_KEY)` de las rutas de texto: ese guardia ya no
 * describe lo que la ruta necesita.
 */
export function assertBedrockConfigured(env = process.env) {
  if (bedrockBearerToken(env)) return;
  const hasKeys =
    envValue(env, "BEDROCK_AWS_ACCESS_KEY_ID", "INSTAGRAM_BEDROCK_ACCESS_KEY_ID", "AWS_ACCESS_KEY_ID") &&
    envValue(env, "BEDROCK_AWS_SECRET_ACCESS_KEY", "INSTAGRAM_BEDROCK_SECRET_ACCESS_KEY", "AWS_SECRET_ACCESS_KEY");
  const hasProfile = envValue(env, "BEDROCK_PROFILE", "INSTAGRAM_BEDROCK_PROFILE");
  if (hasKeys || hasProfile) return;
  throw new Error(
    "Bedrock no está configurado: define AWS_BEARER_TOKEN_BEDROCK (la API key " +
      "`ABSK…`, la vía preferida), o BEDROCK_AWS_ACCESS_KEY_ID y " +
      "BEDROCK_AWS_SECRET_ACCESS_KEY, o BEDROCK_PROFILE en local."
  );
}

export function createBedrockRuntimeClient(env = process.env) {
  const region =
    envValue(env, "BEDROCK_REGION", "INSTAGRAM_BEDROCK_REGION", "AWS_REGION") ||
    "us-east-2";

  // 1. API key de Bedrock: gana sobre todo lo demás.
  const bearerToken = bedrockBearerToken(env);
  if (bearerToken) {
    process.env.AWS_BEARER_TOKEN_BEDROCK = bearerToken;
    return new BedrockRuntimeClient({ region });
  }

  const profile = envValue(env, "BEDROCK_PROFILE", "INSTAGRAM_BEDROCK_PROFILE");
  const accessKeyId = envValue(
    env,
    "BEDROCK_AWS_ACCESS_KEY_ID",
    "INSTAGRAM_BEDROCK_ACCESS_KEY_ID",
    "AWS_ACCESS_KEY_ID"
  );
  const secretAccessKey = envValue(
    env,
    "BEDROCK_AWS_SECRET_ACCESS_KEY",
    "INSTAGRAM_BEDROCK_SECRET_ACCESS_KEY",
    "AWS_SECRET_ACCESS_KEY"
  );
  const sessionToken = envValue(
    env,
    "BEDROCK_AWS_SESSION_TOKEN",
    "INSTAGRAM_BEDROCK_SESSION_TOKEN",
    "AWS_SESSION_TOKEN"
  );

  // 2. Credenciales IAM explícitas. 3. Un perfil, que sólo sirve en local:
  // en Vercel no hay ~/.aws.
  if (accessKeyId && secretAccessKey) {
    return new BedrockRuntimeClient({
      region,
      credentials: {
        accessKeyId,
        secretAccessKey,
        ...(sessionToken ? { sessionToken } : {}),
      },
    });
  }
  if (profile) process.env.AWS_PROFILE = profile;
  return new BedrockRuntimeClient({ region });
}

/**
 * Traduce los `messages` de OpenAI al par (system, messages) de Converse.
 * Converse no acepta el rol `system` dentro de la conversación ni dos turnos
 * seguidos del mismo rol, así que los mensajes de sistema se extraen y los
 * consecutivos del mismo rol se funden.
 */
export function toConverseMessages(messages = []) {
  const system = [];
  const turns = [];
  for (const message of messages) {
    const text = typeof message?.content === "string"
      ? message.content
      : Array.isArray(message?.content)
        ? message.content.map((part) => part?.text || "").join("\n")
        : "";
    if (!text.trim()) continue;
    if (message.role === "system" || message.role === "developer") {
      system.push({ text });
      continue;
    }
    const role = message.role === "assistant" ? "assistant" : "user";
    const previous = turns[turns.length - 1];
    if (previous?.role === role) {
      previous.content.push({ text });
      continue;
    }
    turns.push({ role, content: [{ text }] });
  }
  // Converse exige que la conversación abra con un turno de usuario.
  if (!turns.length || turns[0].role !== "user") {
    turns.unshift({ role: "user", content: [{ text: "Continúa." }] });
  }
  return { system, messages: turns };
}

/** Quita vallas de código ```json … ``` que el modelo añade pese a la orden. */
export function stripCodeFence(text) {
  const trimmed = String(text || "").trim();
  const fenced = trimmed.match(/^```(?:json)?\s*\n?([\s\S]*?)\n?```$/);
  return fenced ? fenced[1].trim() : trimmed;
}

function isRetryable(error) {
  const name = error?.name || "";
  return (
    name === "ThrottlingException" ||
    name === "TooManyRequestsException" ||
    name === "ServiceUnavailableException" ||
    name === "ModelTimeoutException" ||
    name === "InternalServerException" ||
    error?.$metadata?.httpStatusCode >= 500
  );
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Cliente con la forma mínima de `openai.chat.completions.create` que usan las
 * rutas: acepta `{ model, messages, temperature, max_tokens, response_format }`
 * y devuelve `{ choices: [{ message: { content } }], usage, model }`.
 *
 * `model` se ignora a propósito: los sitios migrados todavía traen el nombre
 * viejo de OpenAI y quien manda es `BEDROCK_TEXT_MODEL_ID`. Para forzar otro
 * modelo se pasa `bedrockModelId`.
 */
export function createBedrockTextClient(options = {}) {
  const env = options.env || process.env;
  const client = options.client || createBedrockRuntimeClient(env);
  const defaultModelId =
    options.modelId || envValue(env, "BEDROCK_TEXT_MODEL_ID") || BEDROCK_TEXT_MODEL_ID;

  async function create({
    messages = [],
    temperature,
    max_tokens: maxTokens,
    max_completion_tokens: maxCompletionTokens,
    response_format: responseFormat,
    bedrockModelId,
    topP,
    abortSignal,
  } = {}) {
    const modelId = bedrockModelId || defaultModelId;
    const wantsJson = responseFormat?.type === "json_object";
    const converse = toConverseMessages(messages);
    if (wantsJson) converse.system.push({ text: JSON_INSTRUCTION });

    const payload = {
      modelId,
      messages: converse.messages,
      ...(converse.system.length ? { system: converse.system } : {}),
      inferenceConfig: {
        maxTokens: maxTokens || maxCompletionTokens || DEFAULT_MAX_TOKENS,
        ...(typeof temperature === "number" ? { temperature } : {}),
        ...(typeof topP === "number" ? { topP } : {}),
      },
    };

    let lastError = null;
    for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt += 1) {
      try {
        const response = await client.send(new ConverseCommand(payload), {
          abortSignal: abortSignal || AbortSignal.timeout(120_000),
        });
        const raw = (response.output?.message?.content || [])
          .map((block) => block?.text || "")
          .join("")
          .trim();
        const content = wantsJson ? stripCodeFence(raw) : raw;
        return {
          id: response.$metadata?.requestId || null,
          model: modelId,
          provider: "bedrock",
          choices: [
            {
              index: 0,
              message: { role: "assistant", content },
              finish_reason: response.stopReason || "stop",
            },
          ],
          usage: {
            prompt_tokens: response.usage?.inputTokens ?? null,
            completion_tokens: response.usage?.outputTokens ?? null,
            total_tokens: response.usage?.totalTokens ?? null,
          },
        };
      } catch (error) {
        lastError = error;
        if (!isRetryable(error) || attempt === MAX_ATTEMPTS) break;
        // La cuenta tiene tope de tokens por día: el reintento se espacia de
        // verdad en vez de golpear la misma pared cuatro veces seguidas.
        await sleep(Math.min(2 ** attempt * 1000, 20_000));
      }
    }
    const detail = lastError instanceof Error ? lastError.message : String(lastError);
    const wrapped = new Error(`Bedrock (${modelId}) falló: ${detail}`);
    wrapped.cause = lastError;
    throw wrapped;
  }

  /**
   * Salida estructurada contra un JSON Schema, para lo que en OpenAI era
   * `text.format.json_schema`. Devuelve el objeto ya parseado y su texto, para
   * que quien esperaba `output_text` siga funcionando.
   */
  async function structured({
    system,
    input,
    schema,
    name = STRUCTURED_TOOL_NAME,
    description = "Devuelve el resultado en el esquema exigido.",
    temperature,
    maxTokens,
    bedrockModelId,
    abortSignal,
  } = {}) {
    const modelId = bedrockModelId || defaultModelId;
    const payload = {
      modelId,
      ...(system ? { system: [{ text: system }] } : {}),
      messages: [
        {
          role: "user",
          content: [{ text: typeof input === "string" ? input : JSON.stringify(input) }],
        },
      ],
      inferenceConfig: {
        maxTokens: maxTokens || DEFAULT_MAX_TOKENS,
        ...(typeof temperature === "number" ? { temperature } : {}),
      },
      toolConfig: {
        tools: [{ toolSpec: { name, description, inputSchema: { json: schema } } }],
        toolChoice: { tool: { name } },
      },
    };

    let lastError = null;
    for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt += 1) {
      try {
        const response = await client.send(new ConverseCommand(payload), {
          abortSignal: abortSignal || AbortSignal.timeout(180_000),
        });
        const block = (response.output?.message?.content || []).find(
          (item) => item?.toolUse?.name === name
        );
        if (!block?.toolUse?.input) {
          lastError = new Error("el modelo no llamó la herramienta obligatoria");
          continue;
        }
        return {
          data: block.toolUse.input,
          output_text: JSON.stringify(block.toolUse.input),
          model: modelId,
          provider: "bedrock",
          usage: response.usage || null,
        };
      } catch (error) {
        lastError = error;
        if (!isRetryable(error) || attempt === MAX_ATTEMPTS) break;
        await sleep(Math.min(2 ** attempt * 1000, 20_000));
      }
    }
    const detail = lastError instanceof Error ? lastError.message : String(lastError);
    const wrapped = new Error(`Bedrock (${modelId}) falló: ${detail}`);
    wrapped.cause = lastError;
    throw wrapped;
  }

  return {
    chat: { completions: { create } },
    structured,
    modelId: defaultModelId,
  };
}
