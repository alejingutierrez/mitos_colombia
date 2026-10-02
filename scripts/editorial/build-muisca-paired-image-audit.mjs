import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import dotenv from "dotenv";
import pg from "pg";
import sharp from "sharp";
import { muiscaImageDecisions } from "../../editorial/muisca/image-decisions.mjs";
import { canonicalMuiscaSlugs } from "../../editorial/muisca/universe.mjs";

const { Client } = pg;
const outputDir = path.resolve(
  process.argv[2] || "tmp/muisca-paired-image-audit",
);
const rowsPerSheet = 4;
const sheetWidth = 1720;
const rowHeight = 700;
const labelHeight = 76;
const horizontalWidth = 1120;
const horizontalHeight = 630;
const verticalWidth = 354;
const verticalHeight = 630;
const horizontalLeft = 0;
const verticalLeft = 1160;
const auditPath = path.resolve("docs/auditoria-imagenes-muiscas.md");

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function escapeHtml(value) {
  return escapeXml(value).replaceAll("'", "&#39;");
}

async function loadEditorialDecisions() {
  const markdown = await fs.readFile(auditPath, "utf8");
  const decisions = new Map();

  for (const line of markdown.split("\n")) {
    const match = line.match(
      /^\|\s*(\d+)\s*\|\s*`([^`]+)`\s*\|\s*(RECORTAR|VERTICAL|PAREJA)\s*\|\s*(.+)\s*\|$/,
    );
    if (!match) continue;
    decisions.set(match[2], {
      number: Number(match[1]),
      recommendation: match[3],
      rationale: match[4],
    });
  }

  return decisions;
}

function reviewCard(item) {
  const decision = item.decision;
  const recommendation = decision?.recommendation || "PENDIENTE";
  const selectedDecision = item.approvedDecision || recommendation;
  const rationale =
    decision?.rationale ||
    "Esta pareja todavía no tiene una evaluación editorial.";
  const horizontal = item.horizontal?.url;
  const vertical = item.vertical?.url;
  const label = `${String(item.index + 1).padStart(2, "0")} · ${item.title}`;

  return `
    <article class="card" data-recommendation="${escapeHtml(recommendation)}" data-selection="${escapeHtml(selectedDecision)}">
      <header>
        <div>
          <p class="slug">${escapeHtml(label)}</p>
          <h2>${escapeHtml(item.title)}</h2>
        </div>
        <span class="badge badge-${escapeHtml(recommendation.toLowerCase())}">
          ${escapeHtml(recommendation)}
        </span>
      </header>
      <div class="pair">
        <figure>
          ${
            horizontal
              ? `<img src="${escapeHtml(horizontal)}" alt="Escena principal actual de ${escapeHtml(item.title)}" loading="lazy">`
              : `<div class="missing">Falta la principal</div>`
          }
          <figcaption>
            Principal actual · ${escapeHtml(item.horizontal?.width || "?")}×${escapeHtml(item.horizontal?.height || "?")} ·
            ${escapeHtml(item.horizontal?.ratio || "?")}
          </figcaption>
        </figure>
        <figure class="vertical">
          ${
            vertical
              ? `<img src="${escapeHtml(vertical)}" alt="Segunda escena actual de ${escapeHtml(item.title)}" loading="lazy">`
              : `<div class="missing">Falta la segunda escena</div>`
          }
          <figcaption>
            Segunda escena actual · ${escapeHtml(item.vertical?.width || "?")}×${escapeHtml(item.vertical?.height || "?")} ·
            ${escapeHtml(item.vertical?.ratio || "?")}
          </figcaption>
        </figure>
      </div>
      <p class="rationale">${escapeHtml(rationale)}</p>
      <label class="decision">
        Tu decisión
        <select data-slug="${escapeHtml(item.slug)}" data-number="${item.index + 1}">
          <option value="RECORTAR" ${selectedDecision === "RECORTAR" ? "selected" : ""}>Conservar escenas y adaptar vertical a 9:16</option>
          <option value="VERTICAL" ${selectedDecision === "VERTICAL" ? "selected" : ""}>Conservar principal y rehacer segunda escena</option>
          <option value="PAREJA" ${selectedDecision === "PAREJA" ? "selected" : ""}>Rehacer la pareja completa</option>
          <option value="CONSERVAR" ${selectedDecision === "CONSERVAR" ? "selected" : ""}>Conservar ambas sin cambios</option>
          <option value="PENDIENTE">Dejar pendiente</option>
        </select>
      </label>
    </article>
  `;
}

function buildReviewHtml(items) {
  const cards = items.map(reviewCard).join("\n");
  const generatedAt = new Intl.DateTimeFormat("es-CO", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "America/Bogota",
  }).format(new Date());

  return `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='46' fill='%2317211d'/%3E%3C/svg%3E">
  <title>Decisión de imágenes muiscas</title>
  <style>
    :root {
      color-scheme: light;
      --ink: #17211d;
      --paper: #f2eee4;
      --card: #fffdf8;
      --line: #c9c1b3;
      --moss: #315747;
      --gold: #9b6b25;
      --wine: #7d4038;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      background: var(--paper);
      color: var(--ink);
      font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }
    .masthead {
      padding: 40px clamp(20px, 5vw, 72px);
      background: var(--ink);
      color: #fffdf8;
    }
    .masthead h1 { margin: 0 0 12px; font-family: Georgia, serif; font-size: clamp(2rem, 4vw, 4.2rem); }
    .masthead p { max-width: 850px; margin: 8px 0; line-height: 1.55; }
    .toolbar {
      position: sticky;
      z-index: 10;
      top: 0;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      align-items: center;
      padding: 14px clamp(20px, 5vw, 72px);
      border-bottom: 1px solid var(--line);
      background: rgb(242 238 228 / 94%);
      backdrop-filter: blur(12px);
    }
    button, select {
      border: 1px solid var(--ink);
      border-radius: 999px;
      background: var(--card);
      color: var(--ink);
      font: inherit;
    }
    button { cursor: pointer; padding: 9px 14px; }
    button.active, button:hover { background: var(--ink); color: white; }
    .counter { margin-left: auto; font-variant-numeric: tabular-nums; }
    main {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(100%, 580px), 1fr));
      gap: 24px;
      padding: 30px clamp(20px, 5vw, 72px) 80px;
    }
    .card {
      overflow: hidden;
      border: 1px solid var(--line);
      border-radius: 18px;
      background: var(--card);
      box-shadow: 0 10px 30px rgb(23 33 29 / 7%);
    }
    .card[hidden] { display: none; }
    .card > header {
      display: flex;
      gap: 16px;
      align-items: start;
      justify-content: space-between;
      padding: 20px 22px 15px;
    }
    h2 { margin: 2px 0 0; font-family: Georgia, serif; font-size: 1.45rem; }
    .slug { margin: 0; color: #66736d; font-size: .78rem; letter-spacing: .08em; text-transform: uppercase; }
    .badge { flex: none; border-radius: 999px; padding: 6px 10px; color: white; font-size: .75rem; font-weight: 750; }
    .badge-recortar { background: var(--moss); }
    .badge-vertical { background: var(--gold); }
    .badge-pareja { background: var(--wine); }
    .pair {
      display: grid;
      grid-template-columns: minmax(0, 16fr) minmax(150px, 9fr);
      gap: 10px;
      padding: 0 14px;
      align-items: stretch;
    }
    figure { display: flex; min-width: 0; margin: 0; flex-direction: column; }
    figure img, .missing {
      width: 100%;
      height: 320px;
      border-radius: 10px;
      background: #ded7ca;
      object-fit: contain;
    }
    figcaption { padding: 8px 2px; color: #66736d; font-size: .78rem; }
    .rationale { min-height: 92px; margin: 8px 22px 18px; line-height: 1.5; }
    .decision {
      display: grid;
      gap: 7px;
      padding: 0 22px 22px;
      font-size: .8rem;
      font-weight: 700;
      text-transform: uppercase;
    }
    .decision select {
      width: 100%;
      padding: 10px 13px;
      border-radius: 9px;
      font-weight: 500;
      text-transform: none;
    }
    dialog {
      width: min(720px, calc(100% - 32px));
      border: 1px solid var(--line);
      border-radius: 16px;
      background: var(--card);
      color: var(--ink);
      box-shadow: 0 30px 90px rgb(0 0 0 / 25%);
    }
    dialog::backdrop { background: rgb(23 33 29 / 75%); }
    textarea { width: 100%; min-height: 240px; padding: 12px; font: 14px/1.5 ui-monospace, monospace; }
    .dialog-actions { display: flex; gap: 10px; justify-content: end; margin-top: 12px; }
    @media (max-width: 700px) {
      .counter { width: 100%; margin-left: 0; }
      .pair { grid-template-columns: 1fr; }
      figure img, .missing { height: auto; max-height: 68vh; aspect-ratio: 16 / 9; }
      figure.vertical img, figure.vertical .missing { aspect-ratio: 2 / 3; }
      .rationale { min-height: 0; }
    }
  </style>
</head>
<body>
  <header class="masthead">
    <h1>Imágenes de los mitos muiscas</h1>
    <p>La principal siempre es 16:9. La vertical debe ser una segunda escena narrativa en 9:16, no un duplicado ni una portada genérica.</p>
    <p>Las selecciones parten de la curaduría propuesta, pero puedes cambiarlas mito por mito. Tus decisiones se guardan únicamente en este navegador.</p>
    <p><small>Inventario generado el ${escapeHtml(generatedAt)} · 41 parejas · ninguna imagen se modifica desde esta página.</small></p>
  </header>
  <nav class="toolbar" aria-label="Filtros de revisión">
    <button type="button" class="active" data-filter="TODOS">Todos</button>
    <button type="button" data-filter="RECORTAR">Adaptar</button>
    <button type="button" data-filter="VERTICAL">Solo vertical</button>
    <button type="button" data-filter="PAREJA">Pareja</button>
    <button type="button" id="summary">Preparar selección</button>
    <span class="counter" id="counter">41 mitos visibles</span>
  </nav>
  <main>${cards}</main>
  <dialog id="dialog">
    <h2>Selección para enviar</h2>
    <p>Copia este texto y envíalo en la conversación. Los números y slugs permiten ejecutar exactamente lo aprobado.</p>
    <textarea id="output" readonly></textarea>
    <div class="dialog-actions">
      <button type="button" id="copy">Copiar</button>
      <button type="button" id="close">Cerrar</button>
    </div>
  </dialog>
  <script>
    const selects = [...document.querySelectorAll("select[data-slug]")];
    const cards = [...document.querySelectorAll(".card")];
    const storageKey = "muisca-image-decisions-v1";
    const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
    for (const select of selects) {
      if (saved[select.dataset.slug]) select.value = saved[select.dataset.slug];
      select.addEventListener("change", () => {
        saved[select.dataset.slug] = select.value;
        localStorage.setItem(storageKey, JSON.stringify(saved));
      });
    }
    for (const button of document.querySelectorAll("[data-filter]")) {
      button.addEventListener("click", () => {
        document.querySelector("[data-filter].active")?.classList.remove("active");
        button.classList.add("active");
        const filter = button.dataset.filter;
        let visible = 0;
        for (const card of cards) {
          card.hidden = filter !== "TODOS" && card.dataset.recommendation !== filter;
          if (!card.hidden) visible += 1;
        }
        document.querySelector("#counter").textContent = visible + " mitos visibles";
      });
    }
    function buildSummary() {
      const groups = { RECORTAR: [], VERTICAL: [], PAREJA: [], CONSERVAR: [], PENDIENTE: [] };
      for (const select of selects) {
        groups[select.value].push(select.dataset.number + " " + select.dataset.slug);
      }
      return [
        "APROBACIÓN DE IMÁGENES MUISCAS",
        "",
        "ADAPTAR A 9:16 SIN GENERAR:",
        groups.RECORTAR.join(", ") || "ninguna",
        "",
        "REHACER SOLO SEGUNDA ESCENA 9:16:",
        groups.VERTICAL.join(", ") || "ninguna",
        "",
        "REHACER PAREJA 16:9 + 9:16:",
        groups.PAREJA.join(", ") || "ninguna",
        "",
        "CONSERVAR SIN CAMBIOS:",
        groups.CONSERVAR.join(", ") || "ninguna",
        "",
        "DEJAR PENDIENTE:",
        groups.PENDIENTE.join(", ") || "ninguna"
      ].join("\\n");
    }
    const dialog = document.querySelector("#dialog");
    const output = document.querySelector("#output");
    document.querySelector("#summary").addEventListener("click", () => {
      output.value = buildSummary();
      dialog.showModal();
    });
    document.querySelector("#copy").addEventListener("click", async () => {
      await navigator.clipboard.writeText(output.value);
      document.querySelector("#copy").textContent = "Copiado";
    });
    document.querySelector("#close").addEventListener("click", () => dialog.close());
  </script>
</body>
</html>`;
}

function labelSvg({ index, slug, title, horizontal, vertical }) {
  const horizontalMeta = horizontal
    ? `${horizontal.width}×${horizontal.height} · ${horizontal.ratio}`
    : "FALTA";
  const verticalMeta = vertical
    ? `${vertical.width}×${vertical.height} · ${vertical.ratio}`
    : "FALTA";
  return Buffer.from(`
    <svg width="${sheetWidth}" height="${labelHeight}">
      <rect width="100%" height="100%" fill="#17211d"/>
      <text x="18" y="30" fill="#f6f1e7" font-family="Arial, sans-serif"
            font-size="20">${String(index + 1).padStart(2, "0")} · ${escapeXml(slug)} · ${escapeXml(title)}</text>
      <text x="18" y="58" fill="#c8d6cd" font-family="Arial, sans-serif"
            font-size="17">Principal 16:9 — ${escapeXml(horizontalMeta)}</text>
      <text x="${verticalLeft}" y="58" fill="#c8d6cd" font-family="Arial, sans-serif"
            font-size="17">Segunda escena 9:16 — ${escapeXml(verticalMeta)}</text>
    </svg>
  `);
}

function ratioLabel(width, height) {
  if (!width || !height) return null;
  const ratio = width / height;
  if (Math.abs(ratio - 16 / 9) < 0.015) return "16:9";
  if (Math.abs(ratio - 9 / 16) < 0.015) return "9:16";
  if (Math.abs(ratio - 3 / 2) < 0.015) return "3:2";
  if (Math.abs(ratio - 2 / 3) < 0.015) return "2:3";
  return ratio.toFixed(3);
}

async function fetchImage(url, width, height) {
  if (!url) return null;
  const response = await fetch(url, {
    headers: { "user-agent": "MitosColombiaEditorialAudit/1.0" },
  });
  if (!response.ok) {
    return { url, error: `HTTP ${response.status}` };
  }
  const source = Buffer.from(await response.arrayBuffer());
  const metadata = await sharp(source).metadata();
  const rendered = await sharp(source)
    .rotate()
    .resize(width, height, {
      fit: "contain",
      background: "#ded7ca",
    })
    .jpeg({ quality: 88 })
    .toBuffer();
  return {
    url,
    width: metadata.width,
    height: metadata.height,
    format: metadata.format,
    ratio: ratioLabel(metadata.width, metadata.height),
    rendered,
  };
}

async function loadRows() {
  dotenv.config({ path: path.resolve(".env"), quiet: true });
  const connectionString =
    process.env.POSTGRES_URL_NON_POOLING ||
    process.env.DATABASE_URL_UNPOOLED ||
    process.env.POSTGRES_URL ||
    process.env.DATABASE_URL;
  if (!connectionString)
    throw new Error("No se encontró una conexión Postgres.");

  const client = new Client({
    connectionString,
    ssl: { rejectUnauthorized: false },
  });
  await client.connect();
  try {
    const result = await client.query(
      `
      SELECT m.id, m.slug, m.title,
             m.image_url AS horizontal_url,
             vi.image_url AS vertical_url
      FROM myths m
      LEFT JOIN vertical_images vi
        ON vi.entity_type = 'myth' AND vi.entity_id = m.id
      WHERE m.slug = ANY($1::text[])
      `,
      [canonicalMuiscaSlugs],
    );
    const bySlug = new Map(result.rows.map((row) => [row.slug, row]));
    return canonicalMuiscaSlugs.map((slug) => bySlug.get(slug) || { slug });
  } finally {
    await client.end();
  }
}

async function buildSheet(items, sheetIndex) {
  const sheet = sharp({
    create: {
      width: sheetWidth,
      height: rowsPerSheet * rowHeight,
      channels: 3,
      background: "#d8d0c3",
    },
  });
  const composites = [];

  for (let offset = 0; offset < items.length; offset += 1) {
    const item = items[offset];
    const top = offset * rowHeight;
    composites.push({
      input: labelSvg(item),
      left: 0,
      top,
    });
    if (item.horizontal?.rendered) {
      composites.push({
        input: item.horizontal.rendered,
        left: horizontalLeft,
        top: top + labelHeight,
      });
    }
    if (item.vertical?.rendered) {
      composites.push({
        input: item.vertical.rendered,
        left: verticalLeft,
        top: top + labelHeight,
      });
    }
  }

  const file = path.join(
    outputDir,
    `muisca-pairs-${String(sheetIndex + 1).padStart(2, "0")}.jpg`,
  );
  await sheet.composite(composites).jpeg({ quality: 90 }).toFile(file);
  return file;
}

async function run() {
  await fs.mkdir(outputDir, { recursive: true });
  const [rows, decisions] = await Promise.all([
    loadRows(),
    loadEditorialDecisions(),
  ]);
  const items = [];

  for (let index = 0; index < rows.length; index += 1) {
    const row = rows[index];
    const [horizontal, vertical] = await Promise.all([
      fetchImage(row.horizontal_url, horizontalWidth, horizontalHeight),
      fetchImage(row.vertical_url, verticalWidth, verticalHeight),
    ]);
    items.push({
      index,
      id: row.id,
      slug: row.slug,
      title: row.title || row.slug,
      horizontal,
      vertical,
      decision: decisions.get(row.slug) || null,
      approvedDecision: muiscaImageDecisions[row.slug] || null,
    });
  }

  const sheets = [];
  for (let start = 0; start < items.length; start += rowsPerSheet) {
    sheets.push(
      await buildSheet(
        items.slice(start, start + rowsPerSheet),
        start / rowsPerSheet,
      ),
    );
  }

  const manifest = items.map((item) => ({
    ...item,
    horizontal: item.horizontal
      ? { ...item.horizontal, rendered: undefined }
      : null,
    vertical: item.vertical ? { ...item.vertical, rendered: undefined } : null,
  }));
  const manifestPath = path.join(outputDir, "manifest.json");
  await fs.writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  const reviewPath = path.join(outputDir, "index.html");
  await fs.writeFile(reviewPath, buildReviewHtml(manifest));

  console.log(
    JSON.stringify(
      {
        myths: items.length,
        horizontalPresent: items.filter((item) => item.horizontal?.rendered)
          .length,
        verticalPresent: items.filter((item) => item.vertical?.rendered).length,
        horizontalExact: items.filter(
          (item) => item.horizontal?.ratio === "16:9",
        ).length,
        verticalExact: items.filter((item) => item.vertical?.ratio === "9:16")
          .length,
        errors: manifest.flatMap((item) =>
          [
            item.horizontal?.error
              ? {
                  slug: item.slug,
                  orientation: "horizontal",
                  ...item.horizontal,
                }
              : null,
            item.vertical?.error
              ? { slug: item.slug, orientation: "vertical", ...item.vertical }
              : null,
          ].filter(Boolean),
        ),
        sheets,
        manifestPath,
        reviewPath,
      },
      null,
      2,
    ),
  );
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
