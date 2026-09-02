import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

import {
  FALLBACK_IMAGE_ASPECT,
  getImageAspect,
  getImageDimensionKey,
} from "../src/lib/myth-images.js";
import {
  describeRatio,
  readImageDimensions,
  serializeMap,
  toDimensionKey,
} from "./probe-vertical-dimensions.mjs";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const MAP_PATH = path.join(ROOT, "src", "lib", "vertical-image-dimensions.json");
const RAW = readFileSync(MAP_PATH, "utf8");

/**
 * Piso de cobertura. El archivo medido tenía 669 obras el 2026-09-02 (596
 * mitos, 14 categorías, 5 comunidades y los respaldos apaisados). 500 deja aire
 * para que se retiren obras sin que el test se vuelva ruido, pero salta si el
 * mapa se vacía o se regenera a medias.
 */
const COVERAGE_FLOOR = 500;

test("el mapa de dimensiones es JSON válido", () => {
  const map = JSON.parse(RAW);
  assert.equal(typeof map, "object");
  assert.notEqual(map, null);
  assert.ok(!Array.isArray(map));
});

test("cubre el archivo vertical por encima del piso", () => {
  const map = JSON.parse(RAW);
  const total = Object.keys(map).length;
  assert.ok(
    total >= COVERAGE_FLOOR,
    `el mapa tiene ${total} entradas, por debajo del piso de ${COVERAGE_FLOOR}`
  );
});

test("cada entrada trae un ancho y un alto enteros y positivos", () => {
  const map = JSON.parse(RAW);
  for (const [key, value] of Object.entries(map)) {
    assert.ok(key.length > 0, "hay una clave vacía");
    assert.ok(value && typeof value === "object", `${key}: valor no es objeto`);
    assert.ok(Number.isInteger(value.w), `${key}: ancho no entero (${value.w})`);
    assert.ok(Number.isInteger(value.h), `${key}: alto no entero (${value.h})`);
    assert.ok(value.w > 0, `${key}: ancho no positivo`);
    assert.ok(value.h > 0, `${key}: alto no positivo`);
    assert.deepEqual(
      Object.keys(value).sort(),
      ["h", "w"],
      `${key}: la entrada trae campos de más`
    );
  }
});

test("las claves quedan ordenadas para que el diff sea determinista", () => {
  const keys = Object.keys(JSON.parse(RAW));
  assert.deepEqual(keys, [...keys].sort());
});

test("las claves son rutas de blob, nunca URL completas", () => {
  for (const key of Object.keys(JSON.parse(RAW))) {
    assert.ok(!key.startsWith("/"), `${key}: empieza con barra`);
    assert.ok(!key.includes("://"), `${key}: conserva el host`);
    assert.ok(!key.includes("?"), `${key}: conserva la query`);
  }
});

test("getImageAspect devuelve la medida real y su proporción", () => {
  const map = JSON.parse(RAW);
  const [key, value] = Object.entries(map)[0];
  const aspect = getImageAspect(
    `https://c5htob7za0dl3b5x.public.blob.vercel-storage.com/${key}`
  );

  assert.deepEqual(aspect, { w: value.w, h: value.h, ratio: value.w / value.h });
});

test("resuelve igual la ruta suelta, con barra inicial y con query", () => {
  const [key, value] = Object.entries(JSON.parse(RAW))[0];
  const esperado = { w: value.w, h: value.h, ratio: value.w / value.h };

  assert.deepEqual(getImageAspect(key), esperado);
  assert.deepEqual(getImageAspect(`/${key}`), esperado);
  assert.deepEqual(getImageAspect(`/${key}?v=2`), esperado);
});

test("una URL desconocida devuelve null en vez de romper", () => {
  assert.equal(getImageAspect("https://example.com/no/esta/en/el/mapa.jpg"), null);
  assert.equal(getImageAspect("vertical/myth/inventado-000.jpg"), null);
  assert.equal(getImageAspect(null), null);
  assert.equal(getImageAspect(undefined), null);
  assert.equal(getImageAspect(""), null);
  assert.equal(getImageAspect("   "), null);
  assert.equal(getImageAspect(42), null);
});

test("la proporción de respaldo es usable tal cual", () => {
  assert.equal(FALLBACK_IMAGE_ASPECT.w, 2);
  assert.equal(FALLBACK_IMAGE_ASPECT.h, 3);
  assert.equal(FALLBACK_IMAGE_ASPECT.ratio, 2 / 3);
});

test("la clave se deriva igual en la sonda y en el consumidor", () => {
  const url =
    "https://c5htob7za0dl3b5x.public.blob.vercel-storage.com/vertical/myth/el-cueche-1784912646870.jpg?x=1";
  assert.equal(
    getImageDimensionKey(url),
    "vertical/myth/el-cueche-1784912646870.jpg"
  );
  assert.equal(toDimensionKey(url), getImageDimensionKey(url));
  assert.equal(toDimensionKey(""), null);
  assert.equal(toDimensionKey(null), null);
});

/* ---------------- lectores de cabecera de la sonda ---------------- */

function pngHeader(w, h) {
  const buffer = Buffer.alloc(24);
  Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]).copy(buffer, 0);
  buffer.writeUInt32BE(13, 8);
  buffer.write("IHDR", 12, "latin1");
  buffer.writeUInt32BE(w, 16);
  buffer.writeUInt32BE(h, 20);
  return buffer;
}

function jpegHeader(w, h) {
  const app0 = Buffer.alloc(18);
  app0.writeUInt16BE(0xffe0, 0);
  app0.writeUInt16BE(16, 2); // longitud del segmento APP0
  app0.write("JFIF\0", 4, "latin1");

  const sof0 = Buffer.alloc(19);
  sof0.writeUInt16BE(0xffc0, 0);
  sof0.writeUInt16BE(17, 2);
  sof0.writeUInt8(8, 4);
  sof0.writeUInt16BE(h, 5);
  sof0.writeUInt16BE(w, 7);
  sof0.writeUInt8(3, 9);

  return Buffer.concat([Buffer.from([0xff, 0xd8]), app0, sof0]);
}

function webpVp8xHeader(w, h) {
  const buffer = Buffer.alloc(30);
  buffer.write("RIFF", 0, "latin1");
  buffer.writeUInt32LE(22, 4);
  buffer.write("WEBP", 8, "latin1");
  buffer.write("VP8X", 12, "latin1");
  buffer.writeUInt32LE(10, 16);
  buffer.writeUIntLE(w - 1, 24, 3);
  buffer.writeUIntLE(h - 1, 27, 3);
  return buffer;
}

test("lee PNG, JPEG (saltando APPn) y WebP VP8X", () => {
  assert.deepEqual(readImageDimensions(pngHeader(941, 1672)), {
    status: "ok",
    format: "png",
    w: 941,
    h: 1672,
  });
  assert.deepEqual(readImageDimensions(jpegHeader(1024, 1536)), {
    status: "ok",
    format: "jpeg",
    w: 1024,
    h: 1536,
  });
  assert.deepEqual(readImageDimensions(webpVp8xHeader(1512, 2688)), {
    status: "ok",
    format: "webp",
    w: 1512,
    h: 2688,
  });
});

test("distingue una cabecera incompleta de algo que no es imagen", () => {
  assert.equal(
    readImageDimensions(jpegHeader(1024, 1536).subarray(0, 14)).status,
    "truncated"
  );
  assert.equal(readImageDimensions(Buffer.alloc(4)).status, "truncated");
  assert.equal(
    readImageDimensions(Buffer.from("<!doctype html><html><body>404")).status,
    "unsupported"
  );
});

test("describeRatio reduce la fracción", () => {
  assert.equal(describeRatio(1024, 1536), "2:3");
  assert.equal(describeRatio(864, 1536), "9:16");
  assert.equal(describeRatio(1512, 2688), "9:16");
});

test("serializeMap ordena, deja una obra por línea y es estable", () => {
  const salida = serializeMap({
    "b.jpg": { w: 2, h: 3 },
    "a.jpg": { w: 4, h: 5 },
  });

  assert.equal(
    salida,
    '{\n  "a.jpg": { "w": 4, "h": 5 },\n  "b.jpg": { "w": 2, "h": 3 }\n}\n'
  );
  assert.equal(serializeMap({}), "{}\n");
  assert.equal(RAW, serializeMap(JSON.parse(RAW)));
});
