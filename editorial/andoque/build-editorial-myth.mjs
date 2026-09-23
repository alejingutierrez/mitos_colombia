import bachue from "../myths/bachue.mjs";
import { andoqueMedia } from "./media.mjs";
import { andoqueCategoryBySlug } from "./universe.mjs";

const sharedHistory = `La cadena documental principal se identifica con claridad. Jon Landaburu y Roberto Pineda Camacho publicaron Cuentos del diluvio de fuego en 1981 y Tradiciones de la gente del hacha en 1984. El artículo informa que los ciclos fundacionales fueron recogidos en la comunidad Andoque de Aduche, abajo de Araracuara y cerca del río Caquetá, y que los relataron el capitán Yiñeko, del linaje de las Águilas, y Yiñefoque, testigo de la vida anterior a los caucheros.

La monografía de 1984 contiene los once títulos heredados del sitio. Su vista pública es fragmentaria: permite verificar índice, páginas y algunos pasajes, pero no leer todo el volumen. Esta revisión conserva los núcleos transmitidos en la base anterior solo cuando coinciden con esos fragmentos y declara los límites en vez de completar silencios con prosa inventada.

Los textos no son restos aislados. Landaburu y Pineda los presentan como parte de una ideología activa con la que la gente Andoque piensa el territorio, la guerra y cambios históricos recientes. La caracterización del Ministerio de Cultura aporta contexto, pero nunca sustituye a los narradores ni se usa como fuente de escenas.

La ortografía Andoque, Andoke y expresiones traducidas como «Gente del Hacha» pertenecen a documentos y momentos distintos. La página conserva la grafía de los títulos publicados cuando es relevante y evita imponer una equivalencia que borre esa historia editorial.`;

const sharedVersions = `Estas catorce fichas no forman un canon cerrado. Tres adiciones proceden de una transcripción completa del primer ciclo de fundación; once páginas corresponden a secciones de una monografía cuya vista digital es parcial. Se publican juntas por comunidad y trazabilidad, pero no se fuerza una sola cronología ni una única categoría de género.

Los materiales también mezclan mito, memoria territorial y testimonio histórico. «Los caucheros de la Casa Arana» y los dos retornos hablan de explotación, deportación y reagrupamiento; no se convierten en cosmogonías. «Los gigantes» y los ciclos del diluvio relacionan lugares, piedras y linajes con tiempos de origen. La etiqueta visible del sitio no elimina esas diferencias.

Los nombres traducidos —Garza-de-centro, Huevo-de-chupaflor, Doña Cucarrón-de-vida, Plumón-amarillo— se mantienen como aparecen en las publicaciones consultadas. No se inventan nombres en lengua Andoque ni se modernizan personajes hasta hacerlos irreconocibles. Cuando la evidencia solo confirma un título o un núcleo breve, la ficha lo dice expresamente.`;

const sharedSimilarities = `Diluvios, soles y lunas hermanos, árboles hostiles, aves caníbales, viajes bajo tierra, seres del agua y metamorfosis aparecen en muchas tradiciones. Esos paralelos sirven para reconocer motivos narrativos, pero no prueban copia, parentesco histórico ni equivalencia religiosa.

En el corpus Andoque la identificación depende de combinaciones concretas: Aduche, Duché, Quinché y Sitio-del-llanto; nombres como Nenefi, Trueno-de-piedra, Huevo-de-chupaflor y Canoa-de-Piedra; la espada verdadera de Trueno, el hueso que libera agua o la piedra tetee que conserva fuego. Separar esos detalles de su cadena documental produciría una comparación vacía.

El paisaje amazónico no es decorado genérico. Ríos, bocanas, chagras, malocas, yuca, coca, animales y sitios nombrados organizan acciones y memoria. Aun así, la revisión no añade vestuario, ceremonias, diálogos, moralejas ecológicas ni explicaciones espirituales que las fuentes no ofrecen. La comparación queda subordinada al relato y a sus límites.`;

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
  return `Ilustración panorámica digital 2D full paper cut y paper quilling, acabado gráfico plano: ${scene}; selva de tierra firme, ríos y chagras del entorno de Aduche y Araracuara, identidad Andoque sobria sin vestuario inventado, tocados panindígenas, máscaras genéricas, texto ni letras, sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

function verticalPrompt(scene) {
  return `Ilustración vertical digital 2D full paper cut y paper quilling, acabado gráfico plano: ${scene}; segunda escena complementaria del relato Andoque sin repetir el encuadre horizontal, sin vestuario inventado, tocados panindígenas, máscaras genéricas, texto ni letras, sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

export function buildAndoqueEditorialMyth(input) {
  const media = andoqueMedia[input.slug];
  if (!media) throw new Error(`Falta inventario visual para ${input.slug}.`);
  const categoryPath = andoqueCategoryBySlug[input.slug];
  if (!categoryPath) throw new Error(`Falta taxonomía para ${input.slug}.`);
  // Las fichas reescritas entregan el campo entero. `historyCore` y los dos
  // bloques compartidos son el camino viejo: componían un párrafo propio más
  // tres idénticos para las catorce fichas, que es la razón de que todas
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
    ...(input.fuentesAgotadas ? { fuentesAgotadas: input.fuentesAgotadas } : {}),
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
FUENTES: la fuente narrativa principal se distingue de documentos de contexto; Dialnet y RedCol documentan una misma publicación, mientras Google Books y Open Library describen una misma monografía.
UBICACIÓN: coordenadas comunitarias aproximadas de Aduche, no del sitio exacto de cada episodio.
IMÁGENES: pareja reutilizada por afinidad narrativa y cumplimiento visual; ilustración digital 2D full paper cut y paper quilling, nunca fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.`,
  };
  return { ...record, content: composeContent(record) };
}
