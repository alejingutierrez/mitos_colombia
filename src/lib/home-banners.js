import { unstable_cache } from "next/cache";
import { getSqlClient, getSqliteDb, isPostgres } from "./db";

const ONE_DAY = 60 * 60 * 24;

export const HOME_BANNER_DEFAULTS = [
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
    image_url: null,
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
    image_url: null,
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
    image_url: null,
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
    image_url: null,
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
    image_url: null,
    order_index: 5,
    is_active: true,
  },
];

function normalizeHomeBanner(row) {
  if (!row) {
    return null;
  }
  const rawActive = row.is_active;
  const isActive =
    typeof rawActive === "boolean" ? rawActive : Number(rawActive) !== 0;
  return {
    slug: row.slug,
    title: row.title,
    subtitle: row.subtitle,
    description: row.description,
    cta_label: row.cta_label,
    cta_href: row.cta_href,
    image_prompt: row.image_prompt,
    image_url: row.image_url,
    order_index: Number(row.order_index) || 0,
    is_active: isActive,
  };
}

function mergeHomeBanners(rows) {
  const normalized = (rows || [])
    .map(normalizeHomeBanner)
    .filter(Boolean);
  const bySlug = new Map(normalized.map((row) => [row.slug, row]));
  const defaultSlugs = new Set(HOME_BANNER_DEFAULTS.map((banner) => banner.slug));

  const mergedDefaults = HOME_BANNER_DEFAULTS.map((banner) => {
    const dbRow = bySlug.get(banner.slug);
    return {
      ...banner,
      ...dbRow,
      is_active: dbRow?.is_active ?? banner.is_active,
    };
  }).filter((banner) => banner.is_active);

  const extras = normalized
    .filter((row) => !defaultSlugs.has(row.slug))
    .filter((row) => row.is_active)
    .sort((a, b) => (a.order_index || 0) - (b.order_index || 0));

  return [...mergedDefaults, ...extras];
}

async function getHomeBannersPostgres() {
  const db = getSqlClient();
  const result = await db`
    SELECT
      slug,
      title,
      subtitle,
      description,
      cta_label,
      cta_href,
      image_prompt,
      image_url,
      order_index,
      is_active
    FROM home_banners
    ORDER BY order_index ASC, id ASC
  `;
  return result.rows || result;
}

function getHomeBannersSqlite() {
  const db = getSqliteDb();
  const sql = `
    SELECT
      slug,
      title,
      subtitle,
      description,
      cta_label,
      cta_href,
      image_prompt,
      image_url,
      order_index,
      is_active
    FROM home_banners
    ORDER BY order_index ASC, id ASC
  `;
  return db.prepare(sql).all();
}

async function homeBannersTableExistsPostgres() {
  const db = getSqlClient();
  const result = await db.query(
    "SELECT to_regclass('public.home_banners') AS table_name"
  );
  return Boolean(result.rows?.[0]?.table_name);
}

function homeBannersTableExistsSqlite() {
  const db = getSqliteDb();
  const row = db
    .prepare(
      "SELECT name FROM sqlite_master WHERE type = 'table' AND name = 'home_banners'"
    )
    .get();
  return Boolean(row?.name);
}

const getHomeBannersCached = unstable_cache(
  async () => {
    if (isPostgres()) {
      const exists = await homeBannersTableExistsPostgres();
      if (!exists) {
        return [];
      }
      return await getHomeBannersPostgres();
    }
    if (!homeBannersTableExistsSqlite()) {
      return [];
    }
    return getHomeBannersSqlite();
  },
  ["home-banners"],
  { revalidate: ONE_DAY }
);

export async function getHomeBanners() {
  try {
    const rows = await getHomeBannersCached();
    return mergeHomeBanners(rows);
  } catch (error) {
    console.error("Error getting home banners:", error);
    return mergeHomeBanners([]);
  }
}

export function getHomeBannerDefaults() {
  return HOME_BANNER_DEFAULTS;
}
