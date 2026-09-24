import assert from "node:assert/strict";
import test from "node:test";

import {
  assertWebSearchConfigured,
  normalizeResultUrl,
  searchWeb,
  searchWebMany,
} from "../src/lib/web-search.js";

const SERPER_ENV = { WEB_SEARCH_PROVIDER: "serper", SERPER_API_KEY: "clave" };
const BRAVE_ENV = { WEB_SEARCH_PROVIDER: "brave", BRAVE_SEARCH_API_KEY: "clave" };

function jsonFetch(payload, { capture } = {}) {
  return async (input, init) => {
    if (capture) capture.push({ input, init });
    return { ok: true, status: 200, json: async () => payload, text: async () => "" };
  };
}

test("normalizeResultUrl quita campaña, ancla y barra final", () => {
  assert.equal(
    normalizeResultUrl("https://banrepcultural.org/mito/?utm_source=x&id=7#seccion"),
    "https://banrepcultural.org/mito/?id=7"
  );
  assert.equal(normalizeResultUrl("https://ejemplo.co/a/"), "https://ejemplo.co/a");
  assert.equal(normalizeResultUrl("javascript:alert(1)"), null);
  assert.equal(normalizeResultUrl("no es una url"), null);
});

test("el guardia nombra la variable que falta", () => {
  assert.throws(
    () => assertWebSearchConfigured({ WEB_SEARCH_PROVIDER: "serper" }),
    /Falta SERPER_API_KEY/
  );
  assert.throws(
    () => assertWebSearchConfigured({ WEB_SEARCH_PROVIDER: "brave" }),
    /Falta BRAVE_SEARCH_API_KEY/
  );
  assert.throws(
    () => assertWebSearchConfigured({ WEB_SEARCH_PROVIDER: "altavista" }),
    /no existe/
  );
  assert.doesNotThrow(() => assertWebSearchConfigured(SERPER_ENV));
});

test("Serper: manda la clave en cabecera y normaliza los orgánicos", async () => {
  const capture = [];
  const results = await searchWeb({
    query: "mito de Bachué laguna de Iguaque",
    env: SERPER_ENV,
    limit: 5,
    fetchImpl: jsonFetch(
      {
        organic: [
          { title: "Bachué", link: "https://banrepcultural.org/bachue/", snippet: "origen" },
          { title: "Repetida", link: "https://banrepcultural.org/bachue", snippet: "otra" },
          { title: "Iguaque", link: "https://icanh.gov.co/iguaque", snippet: "laguna" },
        ],
      },
      { capture }
    ),
  });
  assert.equal(capture[0].init.headers["X-API-KEY"], "clave");
  assert.deepEqual(JSON.parse(capture[0].init.body).q, "mito de Bachué laguna de Iguaque");
  assert.equal(JSON.parse(capture[0].init.body).gl, "co");
  // La segunda es la misma URL tras normalizar: no se repite.
  assert.equal(results.length, 2);
  assert.deepEqual(results.map((r) => r.url), [
    "https://banrepcultural.org/bachue",
    "https://icanh.gov.co/iguaque",
  ]);
});

test("Brave: limpia el marcado <strong> de los fragmentos", async () => {
  const results = await searchWeb({
    query: "Bachué",
    env: BRAVE_ENV,
    fetchImpl: jsonFetch({
      web: {
        results: [
          { title: "Bachué", url: "https://ejemplo.co/b", description: "la <strong>madre</strong> muisca" },
        ],
      },
    }),
  });
  assert.equal(results[0].snippet, "la madre muisca");
});

test("varias consultas se funden sin repetir URL y recuerdan su origen", async () => {
  const byQuery = {
    "consulta A": { organic: [{ title: "uno", link: "https://a.co/1", snippet: "" }] },
    "consulta B": {
      organic: [
        { title: "uno otra vez", link: "https://a.co/1", snippet: "" },
        { title: "dos", link: "https://b.co/2", snippet: "" },
      ],
    },
  };
  const { results, errors } = await searchWebMany(["consulta A", "consulta B"], {
    env: SERPER_ENV,
    fetchImpl: async (input, init) => ({
      ok: true,
      status: 200,
      json: async () => byQuery[JSON.parse(init.body).q],
      text: async () => "",
    }),
  });
  assert.equal(errors.length, 0);
  assert.deepEqual(results.map((r) => r.url), ["https://a.co/1", "https://b.co/2"]);
  assert.equal(results[0].query, "consulta A");
  assert.equal(results[1].query, "consulta B");
});

test("una consulta que falla no tumba la tanda", async () => {
  let call = 0;
  const { results, errors } = await searchWebMany(["rota", "buena"], {
    env: SERPER_ENV,
    fetchImpl: async () => {
      call += 1;
      if (call === 1) return { ok: false, status: 429, text: async () => "slow down" };
      return {
        ok: true,
        status: 200,
        json: async () => ({ organic: [{ title: "ok", link: "https://c.co/3", snippet: "" }] }),
        text: async () => "",
      };
    },
  });
  assert.equal(results.length, 1);
  assert.equal(errors.length, 1);
  assert.match(errors[0].message, /429/);
});

test("si todas fallan, se avisa en vez de devolver vacío en silencio", async () => {
  await assert.rejects(
    () =>
      searchWebMany(["a", "b"], {
        env: SERPER_ENV,
        fetchImpl: async () => ({ ok: false, status: 500, text: async () => "boom" }),
      }),
    /Ninguna consulta devolvió resultados/
  );
});
