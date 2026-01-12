const fs = require("fs");
const path = require("path");
const xlsx = require("xlsx");
const { Client } = require("pg");

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

const workbook = xlsx.readFile(excelPath);
const sheetName = "Sheet1";
const sheet = workbook.Sheets[sheetName] || workbook.Sheets[workbook.SheetNames[0]];

if (!sheet) {
  console.error("No sheets found in the Excel file.");
  process.exit(1);
}

const rows = xlsx.utils.sheet_to_json(sheet, { defval: "" });

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
  const client = new Client({ connectionString: postgresUrl });
  await client.connect();

  const schemaSql = fs.readFileSync(schemaPath, "utf8");
  await client.query(schemaSql);

  await client.query(
    "TRUNCATE TABLE myth_tags, myth_keywords, myths, tags, communities, regions RESTART IDENTITY CASCADE"
  );

  try {
    await client.query("BEGIN");
    await client.query("SET synchronous_commit TO OFF");

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
    await client.query("ROLLBACK");
    throw error;
  } finally {
    await client.end();
  }
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
