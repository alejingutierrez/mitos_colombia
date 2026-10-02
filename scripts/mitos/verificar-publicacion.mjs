#!/usr/bin/env node

/**
 * Verifica el lote de trípticos publicado desde sus recibos aditivos:
 * recibo -> Neon -> Vercel Blob -> HTML público.
 *
 * No modifica producción. Sólo escribe el reporte local de evidencia.
 */

import { createHash } from "node:crypto";
import { existsSync } from "node:fs";
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { basename, join, resolve } from "node:path";

import dotenv from "dotenv";
import { sql } from "@vercel/postgres";

const REPO_ROOT = resolve(new URL("../../", import.meta.url).pathname);
const COMMUNITY_ROOT = join(REPO_ROOT, "content/videos/muiscas");

function parseArgs(argv) {
  const args = { site: "https://www.mitosdecolombia.com" };
  for (let i = 2; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === "--publication-id") args.publicationId = argv[++i];
    else if (token === "--site") args.site = argv[++i];
    else if (token === "--output") args.output = argv[++i];
    else if (token === "--receipt-dir") args.receiptDir = argv[++i];
    else throw new Error(`Argumento no reconocido: ${token}`);
  }
  if (!args.publicationId) throw new Error("Falta --publication-id");
  return args;
}

function loadEnv() {
  dotenv.config({ path: join(REPO_ROOT, ".env.local"), quiet: true });
  dotenv.config({ path: join(REPO_ROOT, ".env"), quiet: true });
  if (!process.env.POSTGRES_URL && process.env.DATABASE_URL) {
    process.env.POSTGRES_URL = process.env.DATABASE_URL;
  }
  if (!process.env.POSTGRES_URL) throw new Error("Falta POSTGRES_URL");
}

async function mapLimit(items, limit, fn) {
  const out = new Array(items.length);
  let cursor = 0;
  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (cursor < items.length) {
      const index = cursor++;
      out[index] = await fn(items[index], index);
    }
  });
  await Promise.all(workers);
  return out;
}

async function probeImage(url, expectedHash = null) {
  try {
    const response = await fetch(url, { method: expectedHash ? "GET" : "HEAD", redirect: "follow" });
    const sha256 = expectedHash && response.ok
      ? createHash("sha256").update(Buffer.from(await response.arrayBuffer())).digest("hex") : null;
    return {
      url,
      ok: response.ok && (!expectedHash || sha256 === expectedHash),
      sha256,
      expected_sha256: expectedHash,
      status: response.status,
      content_type: response.headers.get("content-type"),
      content_length: Number(response.headers.get("content-length") || 0) || null,
    };
  } catch (error) {
    return { url, ok: false, error: error.message };
  }
}

async function probePage(site, receipt) {
  const url = `${site.replace(/\/+$/, "")}/mitos/${receipt.myth.slug}`;
  try {
    const response = await fetch(url, { redirect: "follow" });
    const html = await response.text();
    const expected = [
      receipt.after.image_url,
      receipt.after.vertical_image.image_url,
      receipt.after.square_image_url,
    ];
    const visible = Object.fromEntries(expected.map((imageUrl) => [
      basename(new URL(imageUrl).pathname),
      html.includes(basename(new URL(imageUrl).pathname)),
    ]));
    return {
      slug: receipt.myth.slug,
      url,
      ok: response.ok && Object.values(visible).every(Boolean),
      status: response.status,
      html_bytes: Buffer.byteLength(html),
      expected_image_basenames_present: visible,
    };
  } catch (error) {
    return { slug: receipt.myth.slug, url, ok: false, error: error.message };
  }
}

async function main() {
  const args = parseArgs(process.argv);
  loadEnv();
  const receiptDir = args.receiptDir ? resolve(args.receiptDir, args.publicationId) : join(COMMUNITY_ROOT, "publication-receipts", args.publicationId);
  if (!existsSync(receiptDir)) throw new Error(`No existe ${receiptDir}`);
  const receipts = [];
  for (const name of (await readdir(receiptDir)).filter((entry) => entry.endsWith(".json")).sort()) {
    const receipt = JSON.parse(await readFile(join(receiptDir, name), "utf8"));
    if (receipt.status !== "published") throw new Error(`${name} no está published`);
    receipts.push(receipt);
  }

  const slugs = receipts.map((receipt) => receipt.myth.slug);
  if (!slugs.length) throw new Error("No hay recibos: no es una verificación válida");
  const currentResult = await sql.query(
    `SELECT m.id, m.slug, m.image_url, m.square_image_url, m.content,
            v.id AS vertical_id, v.image_url AS vertical_image_url
       FROM myths m
       LEFT JOIN LATERAL (
         SELECT id, image_url
           FROM vertical_images
          WHERE entity_type = 'myth' AND entity_id = m.id
          ORDER BY updated_at DESC, id DESC
          LIMIT 1
       ) v ON TRUE
      WHERE m.slug = ANY($1::text[])`,
    [slugs]
  );
  const currentBySlug = new Map(currentResult.rows.map((row) => [row.slug, row]));
  const database = receipts.map((receipt) => {
    const row = currentBySlug.get(receipt.myth.slug);
    const narrativeMatches = !receipt.narrative_target_sha256 || (row && createHash("sha256").update(row.content).digest("hex") === receipt.narrative_target_sha256);
    const { content, ...publicRow } = row || {};
    return {
      slug: receipt.myth.slug,
      ok: Boolean(row) &&
        row.image_url === receipt.after.image_url &&
        Number(row.vertical_id) === Number(receipt.after.vertical_image.id) &&
        row.vertical_image_url === receipt.after.vertical_image.image_url &&
        row.square_image_url === receipt.after.square_image_url && narrativeMatches,
      narrative_preserved: Boolean(narrativeMatches),
      current: row ? publicRow : null,
    };
  });

  const historyIds = [...new Set(receipts.flatMap((receipt) => [
    receipt.before.vertical_image?.id,
    receipt.after.vertical_image?.id,
  ]).filter(Boolean).map(Number))];
  const historyResult = await sql.query(
    `SELECT id, image_url FROM vertical_images WHERE id = ANY($1::int[])`,
    [historyIds]
  );
  const historyById = new Map(historyResult.rows.map((row) => [Number(row.id), row.image_url]));
  const verticalHistory = receipts.map((receipt) => {
    const before = receipt.before.vertical_image;
    const after = receipt.after.vertical_image;
    return {
      slug: receipt.myth.slug,
      previous_preserved: !before || historyById.get(Number(before.id)) === before.image_url,
      published_preserved: historyById.get(Number(after.id)) === after.image_url,
      previous_id: before?.id || null,
      published_id: after.id,
    };
  });

  const newUrls = [...new Set(receipts.flatMap((receipt) => [
    receipt.after.image_url,
    receipt.after.vertical_image.image_url,
    receipt.after.square_image_url,
  ]))];
  const previousUrls = [...new Set(receipts.flatMap((receipt) => [
    receipt.before.image_url,
    receipt.before.vertical_image?.image_url,
    receipt.before.square_image_url,
  ]).filter(Boolean))];
  const expectedHashes = new Map(receipts.flatMap(receipt => Object.values(receipt.uploads || {}).map(item=>[item.url,item.sha256])));
  const [newImages, previousImages, pages, archives] = await Promise.all([
    mapLimit(newUrls, 16, url=>probeImage(url, expectedHashes.get(url))),
    mapLimit(previousUrls, 16, url=>probeImage(new URL(url,args.site).href)),
    mapLimit(receipts, 8, (receipt) => probePage(args.site, receipt)),
    mapLimit(receipts.filter(receipt=>receipt.remote_history_url), 8, async receipt=>{
      try {
        const response=await fetch(receipt.remote_history_url);
        const archive=await response.json();
        return {slug:receipt.myth.slug,url:receipt.remote_history_url,ok:response.ok &&
          JSON.stringify(archive.before)===JSON.stringify(receipt.before) &&
          JSON.stringify(archive.uploads)===JSON.stringify(receipt.uploads)};
      } catch(error) {return {slug:receipt.myth.slug,ok:false,error:error.message};}
    }),
  ]);

  const failures = [
    ...database.filter((row) => !row.ok).map((row) => `Neon no coincide: ${row.slug}`),
    ...verticalHistory.filter((row) => !row.previous_preserved || !row.published_preserved)
      .map((row) => `historial vertical incompleto: ${row.slug}`),
    ...newImages.filter((row) => !row.ok || !row.content_type?.startsWith("image/"))
      .map((row) => `blob nuevo no disponible: ${row.url}`),
    ...previousImages.filter((row) => !row.ok || !row.content_type?.startsWith("image/"))
      .map((row) => `blob anterior no preservado: ${row.url}`),
    ...pages.filter((row) => !row.ok).map((row) => `página pública no coincide: ${row.slug}`),
    ...archives.filter((row) => !row.ok).map((row) => `archivo remoto no coincide: ${row.slug}`),
  ];
  const report = {
    schema: "mitos-colombia-triptych-publication-verification-v1",
    verified_at: new Date().toISOString(),
    publication_id: args.publicationId,
    site: args.site,
    status: failures.length ? "failed" : "passed",
    summary: {
      receipts: receipts.length,
      database_rows_matching: database.filter((row) => row.ok).length,
      vertical_histories_preserved: verticalHistory.filter((row) => row.previous_preserved && row.published_preserved).length,
      new_blobs_online: newImages.filter((row) => row.ok && row.content_type?.startsWith("image/")).length,
      previous_blobs_online: previousImages.filter((row) => row.ok && row.content_type?.startsWith("image/")).length,
      public_pages_matching: pages.filter((row) => row.ok).length,
      remote_histories_matching: archives.filter((row) => row.ok).length,
    },
    database,
    vertical_history: verticalHistory,
    new_images: newImages,
    previous_images: previousImages,
    pages,
    archives,
    failures,
  };
  const output = resolve(
    args.output || join(COMMUNITY_ROOT, "certificacion", `verificacion-produccion-${args.publicationId}.json`)
  );
  await mkdir(resolve(output, ".."), { recursive: true });
  await writeFile(output, JSON.stringify(report, null, 2) + "\n");
  const digest = createHash("sha256").update(await readFile(output)).digest("hex");
  console.log(JSON.stringify({ ...report.summary, status: report.status, report: output.replace(`${REPO_ROOT}/`, ""), sha256: digest }, null, 2));
  if (failures.length) process.exitCode = 1;
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
