import bachue from "../myths/bachue.mjs";
import { barasanaMedia } from "./media.mjs";
import { barasanaCategoryBySlug } from "./universe.mjs";

const sharedHistory = `La documentación consultada pertenece a dos momentos que no deben confundirse. Alfonso Torres Laborde publicó en 1969 un estudio dedicado al mito y la cultura Barasana. Stephen Hugh-Jones trabajó entre 1968 y 1970 en comunidades del Pirá Paraná y reunió ocho conjuntos narrativos en The Palm and the Pleiades, de 1979. Esas obras permiten comprobar nombres, secuencias y relaciones, pero hablan mediante traducciones y marcos antropológicos de su época.

En 2015, ACAIPI publicó con la Fundación Gaia Amazonas Hee Yaia Godo ~ Bakari. No es una recopilación externa: el libro declara el conocimiento como bien colectivo de los pueblos del Pirá Paraná y acredita a sabedores, narradores, investigadores y traductores locales. Para las cuatro fichas contemporáneas, la revisión conserva esos créditos y no atribuye a los Barasana una narración acreditada solamente a otro pueblo.

El Plan de Vida de 2025 confirma que Hee Yaia Keti Oka sigue siendo un sistema vivo para cuidar territorio y vida. Por eso estas páginas no tratan los relatos como fósiles, entretenimiento aislado ni inventario exhaustivo de secretos. Separan la narración pública del comentario editorial y no convierten descripciones ceremoniales en instrucciones.

Las grafías Barasana, Barasano, ~Hadera, Muyhu, Abe, Méneri-Ya, Meneriyo y Wari~bi reflejan lenguas, traducciones y ediciones distintas. Los títulos visibles facilitan la lectura en español, mientras las notas explican qué forma procede de cada fuente.`;

const sharedVersions = `La selección de seis fichas no es un canon cerrado. La monografía de 1979 organiza ocho conjuntos —Romi Kumu, Ayawa, Sol y Luna, Warimi, Anaconda He, Anaconda Palo-de-Yuca, Yeba y los Truenos con Yuruparí—, pero varios se enlazan entre sí y con conocimientos ceremoniales que no corresponde convertir en una serie de resúmenes operativos.

La publicación colectiva de 2015 ordena el material de otra manera: palabra de origen, surgimiento de la gente, territorio-maloca y calendario ecológico. La revisión toma cuatro narraciones acreditadas a personas Barasano y conserva sus formas documentales: unas desarrollan acciones y personajes; otras explican un recorrido, una distribución territorial o una relación ecológica. No se fuerza a todas a parecer cuentos occidentales.

El relato heredado de Luna queda como ciclo de Muyhu, Méneri-Ya y Warimi. «Sol y Luna: día y noche» se publica aparte porque la fuente lo registra como M.3 y el ciclo de Warimi como M.4. Compartir personajes celestes no los vuelve duplicados.`;

const sharedSimilarities = `Anacondas ancestrales, hermanos celestes, inundaciones, árboles de frutos, jaguares, viajes fluviales y lugares de origen aparecen en muchas tradiciones del noroeste amazónico. La red regional de matrimonios, lenguas y rituales explica intercambios, pero una semejanza no autoriza a fundir pueblos ni a declarar que todos cuentan la misma historia.

En las versiones aquí atribuidas importan las combinaciones concretas: el Pirá Paraná como Río de Aguas de Yuruparí, el Amazonas como Río de Leche, Anaconda Yeba, Kahe Sawari, Kata Yai, la Cera de Abejas de la Tierra, Badi Serero, Kata Bahi y los nombres Barasana de las estaciones y lugares. Esos detalles sostienen la identidad documental de cada ficha.

La comparación se usa para orientar preguntas, no para reemplazar la narración. Se retiró la antigua equivalencia automática con Orfeo y Eurídice; tampoco se equiparan Warimi con héroes universales, los Cerros-Estantillos con templos ni los frutales con una moraleja ecológica genérica. La lectura permanece situada en las fuentes y en sus límites.`;

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
  return `Ilustración panorámica digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; río Pirá Paraná, selva húmeda y cielo amazónico como capas recortadas, identidad Barasana sobria sin copiar objetos ceremoniales restringidos, vestuario inventado, tocados panindígenas, texto ni letras, sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

function verticalPrompt(scene) {
  return `Ilustración vertical digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; segunda escena complementaria del relato Barasana sin repetir el encuadre horizontal, sin copiar objetos ceremoniales restringidos, vestuario inventado, tocados panindígenas, texto ni letras, sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

export function buildBarasanaEditorialMyth(input) {
  const media = barasanaMedia[input.slug];
  if (!media) throw new Error(`Falta inventario visual para ${input.slug}.`);
  const categoryPath = barasanaCategoryBySlug[input.slug];
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
FUENTES: la narración principal se distingue de las fuentes de contexto. La publicación comunitaria y la etnografía histórica no se presentan como testimonios equivalentes.
LÍMITE CULTURAL: se resume únicamente el material publicado; no se reconstruyen fórmulas, procedimientos, sitios exactos ni conocimiento ceremonial reservado.
UBICACIÓN: coordenadas aproximadas del río Pirá Paraná, no del sitio exacto de cada episodio.
IMÁGENES: ${media.reusedFrom === "barasana/la-luna" ? "se conserva la pareja heredada, aprobada tras auditoría visual" : `pareja reutilizada de ${media.reusedFrom}`}; ilustración digital 2D full paper cut y paper quilling a página completa, nunca fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.`,
  };
  return { ...record, content: composeContent(record) };
}
