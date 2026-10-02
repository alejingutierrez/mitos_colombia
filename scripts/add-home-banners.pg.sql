CREATE TABLE IF NOT EXISTS home_banners (
  id SERIAL PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  subtitle TEXT,
  description TEXT NOT NULL,
  cta_label TEXT NOT NULL,
  cta_href TEXT NOT NULL,
  image_prompt TEXT NOT NULL,
  image_url TEXT,
  order_index INTEGER NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_home_banners_active_order ON home_banners(is_active, order_index);

INSERT INTO home_banners (
  slug,
  title,
  subtitle,
  description,
  cta_label,
  cta_href,
  image_prompt,
  order_index,
  is_active
) VALUES
(
  'envia-tu-mito',
  'Envia tu mito',
  'Convocatoria abierta',
  'Abrimos un canal para recibir relatos, versiones y memorias de tu territorio. Si tu comunidad protege una historia, queremos escucharla.',
  'Escribenos',
  '/contacto',
  'Ilustracion horizontal (16:9) estilo paper quilling + paper cut. Un escritorio editorial con cartas, cuadernos, mapas antiguos, hilos de colores y fragmentos de selva colombiana. Luz calida, texturas de papel, paleta verde selva, azul rio y dorado tierra. Sin texto, sin logos, sin marcas.',
  1,
  TRUE
),
(
  'libro-en-camino',
  'Libro en camino',
  'Edicion impresa',
  'Estamos preparando un libro con relatos seleccionados, entrevistas y arte original. Un archivo para leer con calma y guardar en casa.',
  'Conocer mas',
  '/sobre-el-proyecto',
  'Ilustracion horizontal (16:9) estilo paper quilling + paper cut. Un libro abierto que se transforma en montanas, rios y nieblas; capas de papel formando un paisaje colombiano. Luz suave, atmosfera editorial, paleta verde, azul, dorado. Sin texto.',
  2,
  TRUE
),
(
  'rutas-editoriales',
  'Rutas para explorar',
  'Cartografias editoriales',
  'Recorridos tematicos que conectan simbolos, guardianes y paisajes. Una forma de leer el territorio como un mapa vivo.',
  'Ver rutas',
  '/rutas',
  'Ilustracion horizontal (16:9) estilo paper quilling + paper cut. Mapa abstracto con caminos y rutas que conectan rios, montanas y selva; pines de papel y trazos curvos. Paleta verde selva, azul rio, dorado tierra. Sin texto.',
  3,
  TRUE
),
(
  'metodologia-editorial',
  'Nuestra metodologia',
  'Como curamos los mitos',
  'Cada mito pasa por un proceso de investigacion, verificacion y edicion sensible. La metodologia deja ver el tejido de voces y fuentes.',
  'Leer metodologia',
  '/metodologia',
  'Ilustracion horizontal (16:9) estilo paper quilling + paper cut. Mesa de archivo con fichas, etiquetas, lupa, hilos que conectan notas y mapas; simbolos editoriales. Paleta verde, azul, dorado. Sin texto.',
  4,
  TRUE
),
(
  'mapa-vivo',
  'Mapa vivo',
  'Geografia del mito',
  'Los relatos no flotan: nacen de rios, montes y caminos reales. Mira donde respiran y visita su territorio.',
  'Explorar mapa',
  '/mapa',
  'Ilustracion horizontal (16:9) estilo paper quilling + paper cut. Mapa de Colombia en relieve de papel con rios azules, selva verde y pines dorados; textura artesanal. Sin texto.',
  5,
  TRUE
)
ON CONFLICT (slug) DO NOTHING;
