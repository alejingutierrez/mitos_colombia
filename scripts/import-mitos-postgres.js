const fs = require("fs");
const path = require("path");
const { Client } = require("pg");
const { readWorkbookRows } = require("./read-workbook-rows");

const rootDir = path.resolve(__dirname, "..");
const excelPath = path.join(rootDir, "docs", "mitos_seo_actualizados.xlsx");
const schemaPath = path.join(rootDir, "scripts", "schema.pg.sql");

const postgresUrl =
  process.env.POSTGRES_URL_NON_POOLING ||
  process.env.DATABASE_URL_UNPOOLED ||
  process.env.POSTGRES_URL ||
  process.env.DATABASE_URL;

if (!postgresUrl) {
  console.error(
    "POSTGRES_URL (or DATABASE_URL) is required to import into Postgres."
  );
  process.exit(1);
}

if (!fs.existsSync(excelPath)) {
  console.error(`Missing Excel file: ${excelPath}`);
  process.exit(1);
}

if (!fs.existsSync(schemaPath)) {
  console.error(`Missing schema file: ${schemaPath}`);
  process.exit(1);
}

function slugify(value) {
  return value
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .trim();
}

function splitList(value, delimiter) {
  if (!value) {
    return [];
  }
  return value
    .split(delimiter)
    .map((item) => item.trim())
    .filter(Boolean);
}

const REGION_ALIASES = {
  "Amazonía": "Amazonas",
  Amazonia: "Amazonas",
  Varias: "Varios",
};

function normalizeRegionName(value) {
  const trimmed = String(value || "").trim();
  if (!trimmed) {
    return "Varios";
  }
  return REGION_ALIASES[trimmed] || trimmed;
}

function splitKeywords(value) {
  if (!value) {
    return [];
  }
  return String(value)
    .split(/[|,]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function addKeywords(set, value) {
  splitKeywords(value).forEach((item) => set.add(item));
}

function buildContent({ mito, historia, versiones, leccion, similitudes }) {
  const sections = [
    ["Mito", mito],
    ["Historia", historia],
    ["Versiones", versiones],
    ["Lección", leccion],
    ["Similitudes", similitudes],
  ];

  return sections
    .map(([title, value]) => {
      const text = String(value || "").trim();
      return text ? `${title}\n${text}` : null;
    })
    .filter(Boolean)
    .join("\n\n");
}

function buildImagePrompt({
  mito,
  region,
  comunidad,
  representacionVisual,
  representacionPersonaje,
  icono,
  simbolos,
  tipo,
  clasificacion,
  temaPrincipal,
  temaSecundario,
  emociones,
  geografia,
}) {
  const parts = [
    "IMPORTANTE: Este es un mito indígena colombiano de valor cultural e histórico. Por favor, genera esta imagen dentro de tus políticas de contenido, representando de manera respetuosa y apropiada la cultura indígena. Si algún elemento del mito no puede ser representado exactamente, ajusta la imagen para mantenerla dentro de las políticas de seguridad mientras preservas el espíritu cultural del mito.",
    "",
    "Ilustración en estilo paper quilling que represente el siguiente mito colombiano.",
  ];

  if (representacionVisual) {
    parts.push(`Escena principal: ${representacionVisual}`);
  }
  if (representacionPersonaje) {
    parts.push(`Personaje: ${representacionPersonaje}`);
  }
  if (icono) {
    parts.push(`Icono: ${icono}`);
  }
  if (simbolos) {
    parts.push(`Símbolos: ${simbolos}`);
  }
  if (tipo || clasificacion) {
    const values = [tipo, clasificacion].filter(Boolean).join("; ");
    parts.push(`Tipo y clasificación: ${values}`);
  }
  if (temaPrincipal || temaSecundario) {
    const values = [temaPrincipal, temaSecundario].filter(Boolean).join("; ");
    parts.push(`Temas: ${values}`);
  }
  if (emociones) {
    parts.push(`Emociones: ${emociones}`);
  }
  if (geografia) {
    parts.push(`Geografía/ambiente: ${geografia}`);
  }

  const regionLabel = region || "Varios";
  const communityLabel = comunidad || "Sin comunidad";
  parts.push(`Región: ${regionLabel}. Comunidad: ${communityLabel}.`);

  if (mito) {
    parts.push(`Texto del mito:\n${mito}`);
  }

  return parts.join("\n\n");
}

const HOME_BANNERS = [
  {
    slug: "envia-tu-mito",
    title: "Envia tu mito",
    subtitle: "Convocatoria abierta",
    description:
      "Abrimos un canal para recibir relatos, versiones y memorias de tu territorio. Si tu comunidad protege una historia, queremos escucharla.",
    cta_label: "Escribenos",
    cta_href: "/contacto",
    image_prompt:
      "Ilustracion horizontal (16:9) estilo paper quilling + paper cut. Un escritorio editorial con cartas, cuadernos, mapas antiguos, hilos de colores y fragmentos de selva colombiana. Luz calida, texturas de papel, paleta verde selva, azul rio y dorado tierra. Sin texto, sin logos, sin marcas.",
    order_index: 1,
    is_active: true,
  },
  {
    slug: "libro-en-camino",
    title: "Libro en camino",
    subtitle: "Edicion impresa",
    description:
      "Estamos preparando un libro con relatos seleccionados, entrevistas y arte original. Un archivo para leer con calma y guardar en casa.",
    cta_label: "Conocer mas",
    cta_href: "/sobre-el-proyecto",
    image_prompt:
      "Ilustracion horizontal (16:9) estilo paper quilling + paper cut. Un libro abierto que se transforma en montanas, rios y nieblas; capas de papel formando un paisaje colombiano. Luz suave, atmosfera editorial, paleta verde, azul, dorado. Sin texto.",
    order_index: 2,
    is_active: true,
  },
  {
    slug: "rutas-editoriales",
    title: "Rutas para explorar",
    subtitle: "Cartografias editoriales",
    description:
      "Recorridos tematicos que conectan simbolos, guardianes y paisajes. Una forma de leer el territorio como un mapa vivo.",
    cta_label: "Ver rutas",
    cta_href: "/rutas",
    image_prompt:
      "Ilustracion horizontal (16:9) estilo paper quilling + paper cut. Mapa abstracto con caminos y rutas que conectan rios, montanas y selva; pines de papel y trazos curvos. Paleta verde selva, azul rio, dorado tierra. Sin texto.",
    order_index: 3,
    is_active: true,
  },
  {
    slug: "metodologia-editorial",
    title: "Nuestra metodologia",
    subtitle: "Como curamos los mitos",
    description:
      "Cada mito pasa por un proceso de investigacion, verificacion y edicion sensible. La metodologia deja ver el tejido de voces y fuentes.",
    cta_label: "Leer metodologia",
    cta_href: "/metodologia",
    image_prompt:
      "Ilustracion horizontal (16:9) estilo paper quilling + paper cut. Mesa de archivo con fichas, etiquetas, lupa, hilos que conectan notas y mapas; simbolos editoriales. Paleta verde, azul, dorado. Sin texto.",
    order_index: 4,
    is_active: true,
  },
  {
    slug: "mapa-vivo",
    title: "Mapa vivo",
    subtitle: "Geografia del mito",
    description:
      "Los relatos no flotan: nacen de rios, montes y caminos reales. Mira donde respiran y visita su territorio.",
    cta_label: "Explorar mapa",
    cta_href: "/mapa",
    image_prompt:
      "Ilustracion horizontal (16:9) estilo paper quilling + paper cut. Mapa de Colombia en relieve de papel con rios azules, selva verde y pines dorados; textura artesanal. Sin texto.",
    order_index: 5,
    is_active: true,
  },
];

// Tablas que este script vacía y reconstruye desde el Excel.
const TRUNCATE_TABLES = [
  "myth_tags",
  "myth_keywords",
  "myths",
  "tags",
  "communities",
  "regions",
];

// Tablas que guardan ids de las tablas de arriba SIN llave foránea (referencias
// polimórficas). El TRUNCATE no las toca: sus filas sobreviven apuntando a ids
// que ya no existen. Por eso el TRUNCATE va SIN `RESTART IDENTITY` (ver la nota
// en run()): con los ids reiniciados, esas filas no quedan huérfanas sino
// reasignadas en silencio a OTRA entidad.
const UNMANAGED_REFERENCES = [
  {
    table: "vertical_images",
    column: "entity_id",
    where: null,
    label: "imágenes verticales (9:16) ya publicadas",
    repair: "se pueden reasociar por `entity_slug`",
  },
  {
    table: "tarot_cards",
    column: "myth_id",
    where: "myth_id IS NOT NULL",
    label: "cartas de tarot ligadas a un mito",
    repair: "se pueden reasociar por `myth_slug`",
  },
];

const LOCAL_HOSTS = new Set([
  "localhost",
  "127.0.0.1",
  "::1",
  "0.0.0.0",
  "host.docker.internal",
  "db",
  "postgres",
]);

function envIsYes(name) {
  return String(process.env[name] || "")
    .trim()
    .toLowerCase() === "yes";
}

// Lee host y base del connection string. Si no se puede parsear, asumimos lo
// peor (producción) para que el guardado por defecto siga siendo "no correr".
function parseConnectionTarget(rawUrl) {
  try {
    const parsed = new URL(rawUrl);
    const host = parsed.hostname || "";
    return {
      host: host || "(desconocido)",
      database: decodeURIComponent(parsed.pathname.replace(/^\//, "")) || "(desconocida)",
      isLocal: LOCAL_HOSTS.has(host.toLowerCase()),
    };
  } catch {
    return {
      host: "(no se pudo leer la URL)",
      database: "(no se pudo leer la URL)",
      isLocal: false,
    };
  }
}

function abort(lines) {
  console.error(`\n${lines.join("\n")}\n`);
  process.exit(1);
}

// Compuerta: por defecto el script se NIEGA a correr. Se evalúa antes de
// conectar, para que una ejecución no confirmada no toque la base siquiera.
function assertConfirmed(target) {
  const header = [
    "═══════════════════════════════════════════════════════════════",
    "  IMPORTACIÓN DESTRUCTIVA — ABORTADA",
    "═══════════════════════════════════════════════════════════════",
    "",
    `  Destino : ${target.host} · base ${target.database}`,
    `            ${target.isLocal ? "(local)" : "*** REMOTO / PRODUCCIÓN ***"}`,
    `  Fuente  : ${path.relative(rootDir, excelPath)}`,
    "",
    "  Este script NO actualiza: VACÍA y reconstruye desde el Excel las",
    `  tablas ${TRUNCATE_TABLES.join(", ")}`,
    "  y, por CASCADE, todo lo que dependa de ellas (dossiers editoriales,",
    "  comentarios y notas de investigación incluidos).",
    "",
    "  El Excel es una foto de enero: cualquier corrección editorial hecha",
    "  después se pierde sin vuelta atrás.",
    "",
  ];

  if (!envIsYes("CONFIRM_DESTRUCTIVE_IMPORT")) {
    abort([
      ...header,
      "  Falta la confirmación explícita.",
      "",
      "  Para ver qué se destruiría, SIN tocar nada:",
      "    DESTRUCTIVE_IMPORT_DRY_RUN=yes npm run db:import:pg",
      "",
      "  Para ejecutarlo de verdad:",
      "    CONFIRM_DESTRUCTIVE_IMPORT=yes npm run db:import:pg",
      "═══════════════════════════════════════════════════════════════",
    ]);
  }

  if (!target.isLocal && !envIsYes("CONFIRM_PRODUCTION_WIPE")) {
    abort([
      ...header,
      `  El destino NO es local (${target.host}): se trata como PRODUCCIÓN.`,
      "  Hay confirmación de borrado, pero falta la de producción.",
      "",
      "  Saca un backup verificable ANTES de continuar. Si aun así quieres:",
      "    CONFIRM_DESTRUCTIVE_IMPORT=yes CONFIRM_PRODUCTION_WIPE=yes \\",
      "      npm run db:import:pg",
      "═══════════════════════════════════════════════════════════════",
    ]);
  }
}

async function tableExists(client, tableName) {
  const result = await client.query("SELECT to_regclass($1) IS NOT NULL AS present", [
    `public.${tableName}`,
  ]);
  return Boolean(result.rows[0].present);
}

async function countRows(client, tableName, where) {
  const filter = where ? ` WHERE ${where}` : "";
  const result = await client.query(`SELECT COUNT(*)::int AS total FROM ${tableName}${filter}`);
  return result.rows[0].total;
}

// Cierre transitivo del CASCADE: qué tablas arrastra el TRUNCATE además de las
// nombradas. Se calcula del catálogo, no de una lista a mano, para que una FK
// nueva no pase desapercibida.
async function collectCascadeTables(client, tables) {
  const result = await client.query(
    `WITH RECURSIVE named AS (
       SELECT c.oid
       FROM pg_class c
       JOIN pg_namespace n ON n.oid = c.relnamespace
       WHERE n.nspname = 'public' AND c.relname = ANY($1::text[])
     ),
     closure AS (
       SELECT oid FROM named
       UNION
       SELECT k.conrelid
       FROM pg_constraint k
       JOIN closure cl ON k.confrelid = cl.oid
       WHERE k.contype = 'f'
     )
     SELECT oid::regclass::text AS table_name FROM closure ORDER BY 1`,
    [tables]
  );
  return result.rows.map((row) => row.table_name);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function countdown(seconds) {
  for (let remaining = seconds; remaining > 0; remaining -= 1) {
    process.stdout.write(`\r  Empieza en ${remaining}s… (Ctrl+C para cancelar)    `);
    await sleep(1000);
  }
  process.stdout.write("\r  Adelante.                                        \n");
}

// Imprime, con conteos REALES leídos de la base, exactamente qué se destruye.
async function reportDestruction(client, target, incomingRows) {
  const cascadeTables = await collectCascadeTables(client, TRUNCATE_TABLES);
  const named = cascadeTables.filter((name) => TRUNCATE_TABLES.includes(name));
  const dragged = cascadeTables.filter((name) => !TRUNCATE_TABLES.includes(name));

  console.log("");
  console.log("═══════════════════════════════════════════════════════════════");
  console.log("  IMPORTACIÓN DESTRUCTIVA — LO QUE SE VA A BORRAR");
  console.log("═══════════════════════════════════════════════════════════════");
  console.log(`  Destino : ${target.host} · base ${target.database}`);
  console.log(`            ${target.isLocal ? "(local)" : "*** REMOTO / PRODUCCIÓN ***"}`);
  console.log(`  Fuente  : ${path.relative(rootDir, excelPath)} (${incomingRows} filas)`);
  console.log("");
  console.log("  Tablas nombradas en el TRUNCATE:");
  for (const name of named) {
    console.log(`    ${name.padEnd(28)} ${await countRows(client, name)} filas → se borran`);
  }

  if (dragged.length) {
    console.log("");
    console.log("  Arrastradas por CASCADE (NO las repuebla el Excel):");
    for (const name of dragged) {
      console.log(`    ${name.padEnd(28)} ${await countRows(client, name)} filas → se borran`);
    }
  }

  const survivors = [];
  for (const reference of UNMANAGED_REFERENCES) {
    if (!(await tableExists(client, reference.table))) {
      continue;
    }
    const total = await countRows(client, reference.table, reference.where);
    if (total > 0) {
      survivors.push({ ...reference, total });
    }
  }

  if (survivors.length) {
    console.log("");
    console.log("  ⚠  REFERENCIAS SIN LLAVE FORÁNEA — sobreviven al TRUNCATE:");
    for (const survivor of survivors) {
      console.log(
        `    ${survivor.table}.${survivor.column}: ${survivor.total} filas (${survivor.label})`
      );
      console.log(`      quedarán HUÉRFANAS apuntando a ids que ya no existen; ${survivor.repair}`);
    }
    console.log("");
    console.log("    El TRUNCATE corre SIN `RESTART IDENTITY` justamente por esto:");
    console.log("    con los ids reiniciados desde 1 estas filas no quedarían huérfanas,");
    console.log("    sino calladamente reasignadas a OTRA entidad (imagen equivocada en");
    console.log("    el mito equivocado, sin ningún error visible).");
  }

  console.log("═══════════════════════════════════════════════════════════════");
  console.log("");
}

const usedSlugs = new Set();

function buildSlug(base, region, community, index) {
  const baseSlug = slugify(base) || `mito-${index + 1}`;
  const candidates = [baseSlug];

  if (community) {
    candidates.push(`${baseSlug}-${slugify(community)}`);
  }
  if (region) {
    candidates.push(`${baseSlug}-${slugify(region)}`);
  }

  for (const candidate of candidates) {
    if (!usedSlugs.has(candidate)) {
      usedSlugs.add(candidate);
      return candidate;
    }
  }

  let counter = 2;
  while (usedSlugs.has(`${baseSlug}-${counter}`)) {
    counter += 1;
  }

  const finalSlug = `${baseSlug}-${counter}`;
  usedSlugs.add(finalSlug);
  return finalSlug;
}

async function run() {
  const target = parseConnectionTarget(postgresUrl);
  const dryRun = envIsYes("DESTRUCTIVE_IMPORT_DRY_RUN");

  if (!dryRun) {
    assertConfirmed(target);
  }

  const rows = await readWorkbookRows(excelPath);
  const client = new Client({ connectionString: postgresUrl });
  await client.connect();

  try {
    if (!dryRun) {
      const schemaSql = fs.readFileSync(schemaPath, "utf8");
      await client.query(schemaSql);
    }

    await reportDestruction(client, target, rows.length);

    if (dryRun) {
      console.log("Simulacro (DESTRUCTIVE_IMPORT_DRY_RUN=yes): no se tocó nada.");
      return;
    }

    if (!target.isLocal) {
      await countdown(10);
    }

    try {
      await client.query("BEGIN");
      await client.query("SET synchronous_commit TO OFF");

      // El TRUNCATE va DENTRO de la transacción (en Postgres es transaccional):
      // si algo falla más abajo, el ROLLBACK devuelve la base entera a como
      // estaba en vez de dejarla vacía. Antes se ejecutaba antes del BEGIN, así
      // que se confirmaba solo y no había vuelta atrás.
      //
      // Sin `RESTART IDENTITY` a propósito: las tablas de UNMANAGED_REFERENCES
      // guardan ids sin llave foránea, sobreviven al TRUNCATE y con las
      // secuencias reiniciadas terminarían apuntando a la entidad equivocada.
      // Dejando correr las secuencias, los ids nuevos nunca chocan con los
      // viejos: esas filas quedan huérfanas (detectable y reparable por slug)
      // en vez de corruptas en silencio. La importación no depende de los ids:
      // todos se resuelven con RETURNING id.
      await client.query(`TRUNCATE TABLE ${TRUNCATE_TABLES.join(", ")} CASCADE`);

      const regionCache = new Map();
      const communityCache = new Map();
      const tagCache = new Map();

      for (const [index, row] of rows.entries()) {
        const regionName = normalizeRegionName(row.region);
        const departmentName = String(row.departamento || "").trim();
        const communityName = String(row.comunidad || "").trim();
        const categoryPath = [regionName, departmentName, communityName]
          .filter(Boolean)
          .join(" > ");

        let regionId = regionCache.get(regionName);
        if (!regionId) {
          const regionSlug = slugify(regionName);
          const regionResult = await client.query(
            `INSERT INTO regions (name, slug)
             VALUES ($1, $2)
             ON CONFLICT (name)
             DO UPDATE SET slug = EXCLUDED.slug
             RETURNING id`,
            [regionName, regionSlug]
          );
          regionId = regionResult.rows[0].id;
          regionCache.set(regionName, regionId);
        }

        let communityId = null;
        if (communityName) {
          const communityKey = `${regionId}:${communityName}`;
          communityId = communityCache.get(communityKey);
          if (!communityId) {
            const communitySlug = slugify(communityName);
            const communityResult = await client.query(
              `INSERT INTO communities (region_id, name, slug)
               VALUES ($1, $2, $3)
               ON CONFLICT (region_id, name)
               DO UPDATE SET slug = EXCLUDED.slug
               RETURNING id`,
              [regionId, communityName, communitySlug]
            );
            communityId = communityResult.rows[0].id;
            communityCache.set(communityKey, communityId);
          }
        }

        const title = String(row.nombre || "").trim();
        const slug = buildSlug(title, regionName, communityName, index);

        const tags = Array.from(
          new Set(splitList(String(row.etiquetas || ""), ","))
        );
        const tagsRaw = tags.join(", ");

        const mito = String(row.mito || "").trim();
        const historia = String(row.historia || "").trim();
        const versiones = String(row.versiones || "").trim();
        const leccion = String(row["lección"] || "").trim();
        const similitudes = String(row.similitudes || "").trim();

        const content = buildContent({
          mito,
          historia,
          versiones,
          leccion,
          similitudes,
        });
        const excerpt = String(row.excerpt || "").trim();
        const seoTitle = title;
        const seoDescription = excerpt;

        const personaje = String(row.personaje || "").trim();
        const focusKeyword =
          personaje || String(row.tema_principal || "").trim() || title;

        const keywordSet = new Set();
        addKeywords(keywordSet, row.etiquetas);
        addKeywords(keywordSet, row.tema_principal);
        addKeywords(keywordSet, row.tema_secundario);
        addKeywords(keywordSet, row.tipo);
        addKeywords(keywordSet, row["clasificación"]);
        addKeywords(keywordSet, row.personaje);
        addKeywords(keywordSet, row.simbolos);
        addKeywords(keywordSet, row.emociones);
        addKeywords(keywordSet, row["geografía"]);
        addKeywords(keywordSet, regionName);
        addKeywords(keywordSet, departmentName);
        addKeywords(keywordSet, communityName);

        if (focusKeyword) {
          keywordSet.add(focusKeyword);
        }

        const focusKeywordsRaw = Array.from(keywordSet).join("|");
        const imagePrompt = buildImagePrompt({
          mito,
          region: regionName,
          comunidad: communityName,
          representacionVisual: String(row["representación_visual"] || "").trim(),
          representacionPersonaje: String(
            row.representacion_personaje || ""
          ).trim(),
          icono: String(row.icono || "").trim(),
          simbolos: String(row.simbolos || "").trim(),
          tipo: String(row.tipo || "").trim(),
          clasificacion: String(row["clasificación"] || "").trim(),
          temaPrincipal: String(row.tema_principal || "").trim(),
          temaSecundario: String(row.tema_secundario || "").trim(),
          emociones: String(row.emociones || "").trim(),
          geografia: String(row["geografía"] || "").trim(),
        });

        const mythResult = await client.query(
          `INSERT INTO myths (
            title,
            slug,
            region_id,
            community_id,
            category_path,
            tags_raw,
            mito,
            historia,
            versiones,
            leccion,
            similitudes,
            content,
            excerpt,
            seo_title,
            seo_description,
            focus_keyword,
            focus_keywords_raw,
            image_prompt,
            source_row
          ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19)
          RETURNING id`,
          [
            title,
            slug,
            regionId,
            communityId,
            categoryPath || regionName,
            tagsRaw,
            mito,
            historia,
            versiones,
            leccion,
            similitudes,
            content,
            excerpt,
            seoTitle,
            seoDescription,
            focusKeyword,
            focusKeywordsRaw,
            imagePrompt,
            index + 2,
          ]
        );
        const mythId = mythResult.rows[0].id;

        const tagIds = [];
        for (const tag of tags) {
          const tagSlug = slugify(tag);
          if (!tagSlug) {
            continue;
          }

          let tagId = tagCache.get(tagSlug);
          if (!tagId) {
            const tagResult = await client.query(
              `INSERT INTO tags (name, slug)
               VALUES ($1, $2)
               ON CONFLICT (slug)
               DO UPDATE SET name = EXCLUDED.name
               RETURNING id`,
              [tag, tagSlug]
            );
            tagId = tagResult.rows[0].id;
            tagCache.set(tagSlug, tagId);
          }
          tagIds.push(tagId);
        }

        if (tagIds.length) {
          const values = [];
          const placeholders = tagIds.map((tagId) => {
            values.push(mythId, tagId);
            const idx = values.length;
            return `($${idx - 1}, $${idx})`;
          });

          await client.query(
            `INSERT INTO myth_tags (myth_id, tag_id)
             VALUES ${placeholders.join(", ")}
             ON CONFLICT DO NOTHING`,
            values
          );
        }

        const keywords = Array.from(new Set(splitList(focusKeywordsRaw, "|")));
        if (keywords.length) {
          const values = [];
          const placeholders = keywords.map((keyword) => {
            values.push(mythId, keyword);
            const idx = values.length;
            return `($${idx - 1}, $${idx})`;
          });

          await client.query(
            `INSERT INTO myth_keywords (myth_id, keyword)
             VALUES ${placeholders.join(", ")}
             ON CONFLICT DO NOTHING`,
            values
          );
        }
      }

      if (HOME_BANNERS.length) {
        const bannerValues = [];
        const bannerPlaceholders = HOME_BANNERS.map((banner, index) => {
          const offset = index * 9;
          bannerValues.push(
            banner.slug,
            banner.title,
            banner.subtitle,
            banner.description,
            banner.cta_label,
            banner.cta_href,
            banner.image_prompt,
            banner.order_index,
            banner.is_active
          );
          return `($${offset + 1}, $${offset + 2}, $${offset + 3}, $${offset + 4}, $${offset + 5}, $${offset + 6}, $${offset + 7}, $${offset + 8}, $${offset + 9})`;
        });

        await client.query(
          `INSERT INTO home_banners (
            slug,
            title,
            subtitle,
            description,
            cta_label,
            cta_href,
            image_prompt,
            order_index,
            is_active
          ) VALUES ${bannerPlaceholders.join(", ")}
          ON CONFLICT (slug) DO NOTHING`,
          bannerValues
        );
      }

      await client.query("COMMIT");

      const counts = await client.query(
        `SELECT
          (SELECT COUNT(*) FROM myths) AS myths,
          (SELECT COUNT(*) FROM regions) AS regions,
          (SELECT COUNT(*) FROM communities) AS communities,
          (SELECT COUNT(*) FROM tags) AS tags,
          (SELECT COUNT(*) FROM myth_keywords) AS keywords,
          (SELECT COUNT(*) FROM home_banners) AS home_banners`
      );

      console.log("Import complete.");
      console.log(counts.rows[0]);
    } catch (error) {
      // El ROLLBACK puede fallar por su cuenta (conexión caída); si eso pasa no
      // debe tapar el error original, que es el que explica qué salió mal.
      try {
        await client.query("ROLLBACK");
        console.error("Importación revertida: la base quedó como estaba.");
      } catch (rollbackError) {
        console.error(`No se pudo revertir la transacción: ${rollbackError.message}`);
      }
      throw error;
    }
  } finally {
    await client.end();
  }
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
