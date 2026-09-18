import bachue from "../myths/bachue.mjs";
import { desanaMedia } from "./media.mjs";
import { desanaCategoryBySlug } from "./universe.mjs";

const sharedHistory = `La fuente narrativa principal es Antes o mundo não existia, escrita e ilustrada por Umusĩ Pãrõkumu y Tõrãmũ Kẽhíri, padre e hijo del clan Desana-Kêhíripõrã. Su primera edición apareció en 1980; FOIRN y UNIRT publicaron una segunda edición en 1995 y Dantes una tercera en 2019. No es una transcripción producida por un investigador externo, sino una obra de autoría indígena que pasó de la narración oral a la escritura y al dibujo.

La tercera edición revisó grafías, ilustraciones y pasajes con participación de Tõrãmũ Kẽhíri. El trabajo editorial importa: las variantes impresas de nombres no se tratan como personajes diferentes ni se corrigen por intuición. Los títulos de estas páginas facilitan la lectura en español, mientras el cuerpo conserva nombres rastreables en la edición abierta.

El perfil del Instituto Socioambiental y el Museu do Índio sitúan a los Desana —también denominados Umukomasã— en el Alto Río Negro, el Tiquié, el Papuri y el Uaupés, dentro de un sistema regional multilingüe. Esa red explica motivos compartidos con otros pueblos tukano orientales, pero no autoriza a etiquetar cualquier relato de Yuruparí como Desana.

La existencia de otra publicación del grupo Wari Dihputiro Põrã demuestra que el libro Kêhíripõrã no es el canon total del pueblo. Cada ficha dice qué versión sigue, separa narración y comentario, y no completa los silencios con escenas inventadas.`;

const sharedVersions = `Esta colección organiza ocho fichas públicas, no la totalidad de la mitología Desana. Mantiene tres URLs heredadas y añade cinco relatos que la fuente primaria distingue con claridad. Guramüye conserva su propia página; Nügüye y Sëpïrõ se reúnen en una sola porque completan la sección editorial de los tres cataclismos y porque fragmentarlos produciría dos resúmenes demasiado dependientes entre sí.

La URL heredada «yurupari» se conserva para no romper enlaces, pero el título se corrige como El robo de las flautas sagradas. La edición Kêhíripõrã no cuenta allí la biografía de un héroe universal llamado Yuruparí: narra cómo las hijas de Abe encuentran las flautas nacidas de la paxiúba y cómo cambian las tareas entre mujeres y hombres.

No se convierte en ficha independiente cada episodio publicado. Las tres historias de Buhtari Gõãmü contienen escenas sexuales y relaciones cuyo sentido se perdería al sanitizarlas para una página general. Los ciclos posteriores de Diroá y Koáyea tampoco se reducen a un párrafo autónomo. Esa selección editorial no declara que esos relatos sean menores; reconoce que resumir también puede distorsionar.

Los nombres, ortografías y traducciones cambian entre ediciones, clanes y lenguas de circulación. La ficha bibliográfica del grupo Wari Dihputiro Põrã y el estudio etnoterminológico se usan como límites: una semejanza de tema no convierte dos versiones en idénticas.`;

const sharedSimilarities = `Canoas-anaconda, casas de transformación, flautas sagradas, dueños del día o de la noche, incendios e inundaciones recorren el noroeste amazónico. Son relaciones históricas dentro de una región de lenguas, matrimonios e intercambios, no pruebas de que todos los pueblos cuenten una sola historia.

La versión Kêhíripõrã se reconoce por combinaciones concretas: Yebá Buró sobre su banco de cuarzo blanco; Yebá Gõãmü; Pamürïgahsiru como Canoa de la Futura Humanidad; el cofre de Ñami; Guramüye; Nügüye; Sëpïrõ; Baaribo; Gãïpayã y Ãgãmahsãpu. Mantener esos nombres impide reemplazar la narración con una plantilla panamazónica.

El gran ciclo llamado Yuruparí en fuentes regionales puede incluir instrumentos, iniciaciones y relaciones de género. Esta revisión no lo usa como etiqueta automática. Tampoco presenta la Canoa de Transformación como una versión de Noé, los tres cataclismos como castigos bíblicos ni la obtención de semillas como una moraleja agrícola universal.

Las similitudes ayudan a ubicar preguntas comparativas, pero la atribución depende de la fuente. Cuando una ficha reúne dos capítulos o limita una escena, lo declara; no inventa un parentesco para hacer más familiar el relato.`;

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
  return `Ilustración panorámica digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; ríos del Alto Río Negro, selva húmeda y cielo amazónico como capas recortadas, identidad Desana sobria sin copiar objetos ceremoniales restringidos, vestuario inventado, tocados panindígenas, texto ni letras, sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

function verticalPrompt(scene) {
  return `Ilustración vertical digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; segunda escena complementaria del relato Desana sin repetir el encuadre horizontal, sin copiar objetos ceremoniales restringidos, vestuario inventado, tocados panindígenas, texto ni letras, sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

export function buildDesanaEditorialMyth(input) {
  const media = desanaMedia[input.slug];
  if (!media) throw new Error(`Falta inventario visual para ${input.slug}.`);
  const categoryPath = desanaCategoryBySlug[input.slug];
  if (!categoryPath) throw new Error(`Falta taxonomía para ${input.slug}.`);
  const historia = `${input.historyCore}\n\n${sharedHistory}`;
  const versiones = `${input.versionCore}\n\n${sharedVersions}`;
  const similitudes = `${input.similarityCore}\n\n${sharedSimilarities}`;
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
FUENTES: la narración procede del libro de autoría indígena Desana-Kêhíripõrã; las otras seis fuentes aportan contexto editorial, territorial, bibliográfico o lingüístico.
LÍMITE CULTURAL: se resume únicamente material publicado; no se reconstruyen fórmulas, procedimientos, sitios exactos ni conocimiento ceremonial reservado.
UBICACIÓN: coordenadas aproximadas del Alto Río Negro, no del lugar exacto de cada episodio.
IMÁGENES: pareja reutilizada de ${media.reusedFrom}; ilustración digital 2D full paper cut y paper quilling a página completa, nunca fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.`,
  };
  return { ...record, content: composeContent(record) };
}
