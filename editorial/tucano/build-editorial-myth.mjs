import bachue from "../myths/bachue.mjs";
import { tucanoMedia } from "./media.mjs";
import { tucanoCategoryBySlug } from "./universe.mjs";

const sharedHistory = `El núcleo más antiguo usado por esta revisión procede de dos publicaciones de Marcos Fulop. En 1953 trabajó pocas semanas en Guadalajara, sobre el río Paca, y registró con Marcos Sierra y el intérprete Manuel Sierra el ciclo de Yepá Huáke y Yúpuri Baúro. En 1954 volvió a la zona y reunió otros relatos, publicados en 1956. El propio investigador advirtió que su permanencia fue breve, que dependía principalmente de un narrador y que no podía asegurar que el resultado representara toda la tradición Tukano.

Esa advertencia impide presentar las transcripciones como un canon. También obliga a distinguir el pueblo Yepá-mahsã —conocido en castellano como Tucano o Tukano— de la familia lingüística tukano oriental y del conjunto de pueblos del Vaupés. Las narraciones circulan en una región multilingüe, con intercambios matrimoniales, rituales y territoriales; un motivo regional no se adjudica automáticamente a una sola comunidad.

Las fuentes contemporáneas modifican además la relación entre investigador y conocimiento. Gabriel dos Santos Gentil escribió como sabedor Tukano; la colección Narradores Indígenas do Rio Negro identifica autores y clanes; informes territoriales actuales registran la autodenominación Yepá-mahsã y la Canoa de Transformación. Esta edición usa esas obras para reconocer continuidad, autoría y pluralidad, sin apropiarse de material que no está abierto o que tiene carácter ritual.

Dos fichas heredadas salieron del universo Tucano. «El descubrimiento del agua y los peces» corresponde en el inventario crítico consultado a una reelaboración Tanimuka; «El hijo de Tuhixana» solo figura como relato del Vaupés. Se mantienen publicadas bajo Amazonas Mixto hasta que sus comunidades sean revisadas. Las seis URL restantes se corrigen, y una séptima página recupera un relato autónomo de 1956.`;

const sharedVersions = `Esta versión es una paráfrasis editorial de publicaciones históricas, no una traducción nueva ni una transcripción literal. Mantiene los nombres que aparecen en las fuentes —con variaciones como Yepá, Yepá Huáke, Yúpuri Baúro y Yepara— y explica solo lo necesario para que la secuencia sea comprensible. No transforma las grafías cambiantes en personajes distintos ni corrige la voz de los narradores con una ortografía inventada.

Cinco páginas proceden de episodios conectados de la cosmogonía publicada en 1954. Se separan para facilitar la lectura, pero cada una declara que pertenece a un ciclo mayor. Boraró y La semilla de la yuca proceden de la colección de 1956 y se presentan como relatos autónomos dentro de ese volumen. La división del sitio, por tanto, es una decisión editorial transparente y no una afirmación de que existan siete mitos independientes en todas las comunidades.

La investigación contemporánea muestra otras formas de ordenar la trayectoria ancestral, entre ellas la Canoa de Transformación. Cuando una fuente reciente ayuda a nombrar el marco, se la cita como contexto; no se mezclan sus secuencias con las de Marcos Sierra. Tampoco se reproducen cantos, fórmulas, instrucciones ceremoniales, lugares sensibles ni detalles gráficos de pasajes sexuales. Esos límites no se llenan con imaginación.`;

const sharedSimilarities = `Canoas ancestrales, viajes por ríos, animales que antes fueron gente, semillas obtenidas mediante transformación y diferencias entre memoria oral y escritura aparecen en muchas tradiciones amazónicas. Esos motivos pueden ayudar a comparar, pero no prueban que dos pueblos narren el mismo mito ni autorizan a trasladar nombres, objetos o ceremonias entre comunidades.

En este corpus importan las combinaciones documentadas: Yepá Huáke y Yúpuri Baúro; la Canoa de Transformación y las casas de surgimiento; el reparto desigual de memoria y papel; el sueño y la noche; la pérdida de la condición humana de los animales; Boraró y Boraró Numió; la yuca nacida de una planta ligada a una persona. Las similitudes se formulan desde esos rasgos, no desde una idea genérica de “leyenda de la selva”.

La región del Vaupés es un sistema social multilingüe. Por eso un paralelo con otros pueblos tukano orientales puede expresar historia compartida o circulación regional, pero sigue necesitando atribución. Las ilustraciones aplican el mismo principio: río, selva, casas y seres transformados se representan sin tocados panindígenas, pintura corporal genérica, instrumentos rituales inventados ni una estética turística que borre las diferencias.`;

function composeContent({ mito, historia, versiones, leccion, similitudes }) {
  return [
    ["Mito", mito],
    ["Historia", historia],
    ["Versiones", versiones],
    ["Lección", leccion],
    ["Similitudes", similitudes],
  ]
    .map(([heading, body]) => `${heading}\n${body}`)
    .join("\n\n");
}

function horizontalPrompt(scene) {
  return `Ilustración panorámica digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; paisaje fluvial del Vaupés construido con capas recortadas digitales, bordes limpios, espirales de papel selectivas y profundidad gráfica, paleta de verde selva, azul río, ocres minerales, fibras y semillas, sin tocados panindígenas, pintura corporal genérica, instrumentos rituales inventados, texto ni letras, sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

function verticalPrompt(scene) {
  return `Ilustración vertical digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; segunda escena narrativa Tucano claramente distinta del encuadre horizontal, capas recortadas digitales de borde limpio y formas quilling, sin tocados panindígenas, pintura corporal genérica, instrumentos rituales inventados, texto ni letras, sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

export function buildTucanoEditorialMyth(input) {
  const media = tucanoMedia[input.slug];
  if (!media) throw new Error(`Falta inventario visual para ${input.slug}.`);
  const categoryPath = tucanoCategoryBySlug[input.slug];
  if (!categoryPath) throw new Error(`Falta taxonomía para ${input.slug}.`);
  // Las fichas reescritas entregan el campo entero. `historyCore` y los tres
  // bloques compartidos son el camino viejo: daban un párrafo propio y el
  // resto idéntico para toda la comunidad, que es la razón de que todas
  // midieran lo mismo y se leyeran igual.
  const historia = input.historia ?? `${input.historyCore}\n\n${sharedHistory}`;
  const versiones = input.versiones ?? `${input.versionCore}\n\n${sharedVersions}`;
  const similitudes =
    input.similitudes ?? `${input.similarityCore}\n\n${sharedSimilarities}`;
  const imagePromptHorizontal = horizontalPrompt(input.sceneHorizontal);
  const imagePromptVertical = verticalPrompt(input.sceneVertical);
  const record = {
    slug: input.slug,
    title: input.title,
    category_path: categoryPath,
    tags: input.tags,
    latitude: media.latitude,
    longitude: media.longitude,
    mito: input.mito,
    ...(input.relatoCorto ? { relatoCorto: input.relatoCorto } : {}),
    historia,
    versiones,
    leccion: input.leccion,
    similitudes,
    excerpt: input.excerpt,
    seo_title: input.seoTitle,
    seo_description: input.seoDescription,
    seo: input.seo,
    methodologySeo: bachue.methodologySeo,
    focus_keyword: input.focusKeywords[0],
    focus_keywords: input.focusKeywords,
    image_prompt: imagePromptHorizontal,
    image_prompt_horizontal: imagePromptHorizontal,
    image_prompt_vertical: imagePromptVertical,
    image_url: media.horizontal,
    vertical_image_url: media.vertical,
    keySources: input.keySources,
    sources: input.sources,
    researchNotes: `${input.researchNotes}
FUENTES: ${input.sourceNote}
LÍMITE CULTURAL: se parafrasea material publicado; no se reproducen cantos, fórmulas, instrucciones rituales, instrumentos restringidos ni localizaciones sensibles.
UBICACIÓN: coordenadas aproximadas del Vaupés, no del lugar exacto de cada episodio.
IMÁGENES: pareja propia del mito; generación OpenAI gpt-image-2 en alta calidad, ilustración digital 2D full paper cut y paper quilling, nunca fotografía, objeto físico, maqueta, diorama, CGI ni render 3D. Trazabilidad en editorial/tucano/provenance.json.`,
  };
  return { ...record, content: composeContent(record) };
}
