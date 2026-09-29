import assert from "node:assert/strict";
import test from "node:test";

import {
  createBedrockTextClient,
  stripCodeFence,
  toConverseMessages,
} from "../src/lib/bedrock-text.js";

test("los mensajes de sistema salen de la conversación", () => {
  const { system, messages } = toConverseMessages([
    { role: "system", content: "Eres un editor." },
    { role: "user", content: "Formatea esto." },
  ]);
  assert.deepEqual(system, [{ text: "Eres un editor." }]);
  assert.deepEqual(messages, [{ role: "user", content: [{ text: "Formatea esto." }] }]);
});

test("dos turnos seguidos del mismo rol se funden en uno", () => {
  const { messages } = toConverseMessages([
    { role: "user", content: "primero" },
    { role: "user", content: "segundo" },
  ]);
  assert.equal(messages.length, 1);
  assert.deepEqual(messages[0].content, [{ text: "primero" }, { text: "segundo" }]);
});

test("la conversación siempre abre con un turno de usuario", () => {
  const { messages } = toConverseMessages([
    { role: "system", content: "Eres un editor." },
    { role: "assistant", content: "Listo." },
  ]);
  assert.equal(messages[0].role, "user");
});

test("stripCodeFence desenvuelve el JSON emvallado", () => {
  assert.equal(stripCodeFence('```json\n{"a":1}\n```'), '{"a":1}');
  assert.equal(stripCodeFence('{"a":1}'), '{"a":1}');
});

function fakeClient(responses) {
  const sent = [];
  return {
    sent,
    send: async (command) => {
      sent.push(command.input);
      const next = responses.shift();
      if (next instanceof Error) throw next;
      return next;
    },
  };
}

const okResponse = (text) => ({
  output: { message: { content: [{ text }] } },
  usage: { inputTokens: 10, outputTokens: 4, totalTokens: 14 },
  stopReason: "end_turn",
  $metadata: { requestId: "req-1" },
});

test("la respuesta llega con la forma de OpenAI que leen las rutas", async () => {
  const client = fakeClient([okResponse("  hola  ")]);
  const bedrock = createBedrockTextClient({ client, modelId: "modelo-x" });
  const response = await bedrock.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: "di hola" }],
    temperature: 0.3,
  });
  assert.equal(response.choices[0].message.content, "hola");
  assert.equal(response.provider, "bedrock");
  assert.equal(response.model, "modelo-x");
  assert.equal(response.usage.total_tokens, 14);
  // El `model` de OpenAI se ignora: manda la configuración de Bedrock.
  assert.equal(client.sent[0].modelId, "modelo-x");
  assert.equal(client.sent[0].inferenceConfig.temperature, 0.3);
});

test("response_format json_object añade la orden y limpia la valla", async () => {
  const client = fakeClient([okResponse('```json\n{"ok":true}\n```')]);
  const bedrock = createBedrockTextClient({ client, modelId: "modelo-x" });
  const response = await bedrock.chat.completions.create({
    messages: [{ role: "user", content: "dame json" }],
    response_format: { type: "json_object" },
  });
  assert.deepEqual(JSON.parse(response.choices[0].message.content), { ok: true });
  const system = client.sent[0].system.map((block) => block.text).join(" ");
  assert.match(system, /JSON válido/);
});

test("el throttling se reintenta y el error final dice el modelo", async () => {
  const throttle = Object.assign(new Error("Too many tokens per day"), {
    name: "ThrottlingException",
  });
  const client = fakeClient([throttle, okResponse("segunda")]);
  const bedrock = createBedrockTextClient({ client, modelId: "modelo-x" });
  const response = await bedrock.chat.completions.create({
    messages: [{ role: "user", content: "hola" }],
  });
  assert.equal(response.choices[0].message.content, "segunda");
  assert.equal(client.sent.length, 2);
});

test("structured obliga a la herramienta y devuelve el objeto parseado", async () => {
  const schema = {
    type: "object",
    properties: { latitude: { type: "number" }, location_name: { type: "string" } },
    required: ["latitude", "location_name"],
  };
  const client = fakeClient([
    {
      output: {
        message: {
          content: [
            {
              toolUse: {
                name: "emitir_resultado",
                input: { latitude: 5.66, location_name: "Laguna de Iguaque" },
              },
            },
          ],
        },
      },
      usage: { inputTokens: 50, outputTokens: 20 },
      $metadata: {},
    },
  ]);
  const bedrock = createBedrockTextClient({ client, modelId: "modelo-x" });
  const result = await bedrock.structured({
    system: "Eres geógrafo.",
    input: { myth: "Bachué" },
    schema,
    maxTokens: 700,
  });
  assert.deepEqual(result.data, { latitude: 5.66, location_name: "Laguna de Iguaque" });
  // Quien esperaba `output_text` de OpenAI sigue funcionando.
  assert.deepEqual(JSON.parse(result.output_text), result.data);
  const sent = client.sent[0];
  assert.equal(sent.toolConfig.toolChoice.tool.name, "emitir_resultado");
  assert.deepEqual(sent.toolConfig.tools[0].toolSpec.inputSchema.json, schema);
  assert.equal(sent.system[0].text, "Eres geógrafo.");
});

test("structured reintenta si el modelo no llama la herramienta", async () => {
  const sinHerramienta = {
    output: { message: { content: [{ text: "lo siento" }] } },
    $metadata: {},
  };
  const conHerramienta = {
    output: { message: { content: [{ toolUse: { name: "emitir_resultado", input: { ok: true } } }] } },
    $metadata: {},
  };
  const client = fakeClient([sinHerramienta, conHerramienta]);
  const bedrock = createBedrockTextClient({ client, modelId: "modelo-x" });
  const result = await bedrock.structured({ input: "x", schema: { type: "object" } });
  assert.deepEqual(result.data, { ok: true });
  assert.equal(client.sent.length, 2);
});

test("un error no reintentable falla de una vez", async () => {
  const denied = Object.assign(new Error("not available for this account"), {
    name: "AccessDeniedException",
  });
  const client = fakeClient([denied]);
  const bedrock = createBedrockTextClient({ client, modelId: "modelo-x" });
  await assert.rejects(
    () => bedrock.chat.completions.create({ messages: [{ role: "user", content: "hola" }] }),
    /Bedrock \(modelo-x\) falló/
  );
  assert.equal(client.sent.length, 1);
});
