import bachue from "../myths/bachue.mjs";
import { huitotoMedia } from "./media.mjs";
import { huitotoCategoryBySlug } from "./universe.mjs";

const sharedHistory = `La colección no procede de una lista anónima. Su eje documental es Las palabras del origen, publicado por Fernando Urbina Rangel con el nombre de quienes narraron, tradujeron o ayudaron a reconstruir cada versión. Los relatos fueron registrados principalmente entre 1971 y 1986 en La Samaritana, El Encanto, el río Caraparaná, Leticia y Araracuara. La ficha conserva esos créditos porque una narración localizada no equivale a una doctrina de todo un pueblo.

El libro reúne voces de Jitoma Naïre, Félix Kuegajima, José García, Jitoma Zafiama, Moisés Tejada, Julio Ribera, Pablo Bigïdïma, Eudocio Becerra, Juvenal Flaviano Castilla y Filomena Tejada. También deja ver traducciones y continuidades entre hablantes búe, mika, minika, nipode, Muinane y Murui-Muina. Por eso la página usa Huitoto como término de búsqueda heredado, pero explica la diversidad detrás de esa etiqueta.

Konrad Theodor Preuss recopiló un corpus anterior en 1914; la edición colombiana de 1994 fue revisada lingüísticamente por Eudocio Becerra y Gabriele Petersen. Ese antecedente permite comparar nombres y estructuras, no fusionar relatos por una semejanza superficial. El perfil de la ONIC recuerda además que el auge cauchero dispersó comunidades y produjo pérdidas humanas y culturales decisivas.

La historia editorial también exige distinguir transcripción, adaptación y reelaboración. Urbina publica versiones con relator identificado; Hugo Niño vuelve a contar materiales amazónicos como obra literaria; una antología escolar puede circular un cuento sin precisar el pueblo. Cada expediente declara qué clase de fuente usa, qué no puede comprobar y qué partes de la prosa heredada fueron retiradas.`;

const sharedVersions = `Estas veintidós páginas no equivalen a veintidós mitos totalmente independientes. Dieciséis siguen capítulos de Las palabras del origen. Las dos páginas relacionadas con Yarokamena son ventanas complementarias de un solo ciclo extenso: «De cómo se crió Yarocomena» se concentra en Kïtobeni, su pérdida y el nacimiento de la fuerza vengadora; «Yarokamena» sigue el árbol formidable, el gusano y la intervención de los dos Jitoma.

Las grafías cambian entre narradores, traductores y ediciones: Nofïzazima aparece también como Nofí Zazime; Jitoma como Hitoma; Fïboi y Fïzido no deben confundirse; «Jobiya Jitoma» es un nombre adquirido dentro del relato de Jitoma y Nokaido. La revisión corrige títulos para hacer rastreable la fuente, pero conserva los slugs públicos.

La ficha Creación sigue la reelaboración de Hugo Niño sobre Jutíñamúi y no la mezcla con el diluvio de Buinaima. Unámarai y los Yoria también permanecen asociados a esa edición literaria y se presentan como versiones publicadas, no como transcripciones literales. Jirayauma se reconstruye desde el ciclo de la Mujer-Jaguar y el Cerbatanero, que contradice por completo la historia generada que ocupaba la página.

Peleas y aventuras entre el sobrino conejo y el tío tigre continúa publicada porque la falta de referencia no obliga a borrarla. Sin embargo, la antología localizada solo la sitúa en una sección amplia de Llanos Orientales y Amazonía. Por eso la página no afirma que sea una tradición Huitoto confirmada ni inventa un relator.`;

const sharedSimilarities = `Madres de la tierra, padres-palabra, héroes solares, diluvios, árboles de abundancia, jaguares, anacondas y embaucadores aparecen en muchos pueblos amazónicos. La comparación solo es útil cuando conserva la combinación concreta de personajes, acciones, relator y territorio de cada versión.

Los relatos publicados aquí se reconocen por nombres y cadenas precisas: Nofïdeño sostiene y mueve la tierra; Uuikï es corazón y palabra; Jitoma persigue a Fïboi o a Nokaido en ciclos distintos; Dïïjoma enfrenta a su propio espíritu-serpiente y luego adopta la perspectiva del águila; Buinaima rehace humanidad, alimentos y bailes; Yiida Buinama se transforma en maguaré.

No se equiparan estas narraciones con Noé, Prometeo, Narciso, Loki ni otras figuras usadas por las fichas heredadas. Esas analogías generales borraban más de lo que explicaban. También se evita llamar «ley natural» a sanciones de género, venganza o canibalismo que pertenecen al conflicto de una versión.

Las semejanzas internas sí ayudan: el ciclo de los dos Jitoma continúa la búsqueda del padre y la derrota de Yarokamena; Jirayauma se cruza con Dïïjoma; los relatos breves de Filomena Tejada usan animales pequeños para invertir el poder del jaguar. La colección enlaza esas relaciones sin convertirlas en una sola historia.`;

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
  return `Ilustración panorámica digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; río, selva, chagra y maloca amazónica como capas recortadas planas, identidad Huitoto / Murui-Muina sobria sin copiar objetos ceremoniales restringidos, vestuario inventado, tocados panindígenas, texto ni letras, sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

function verticalPrompt(scene) {
  return `Ilustración vertical digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; segunda escena complementaria del relato Huitoto / Murui-Muina sin repetir el encuadre horizontal, sin copiar objetos ceremoniales restringidos, vestuario inventado, tocados panindígenas, texto ni letras, sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

export function buildHuitotoEditorialMyth(input) {
  const media = huitotoMedia[input.slug];
  if (!media) throw new Error(`Falta inventario visual para ${input.slug}.`);
  const categoryPath = huitotoCategoryBySlug[input.slug];
  if (!categoryPath) throw new Error(`Falta taxonomía para ${input.slug}.`);
  // Cada ficha escribe su propia capa documental. Los `…Core` más el bloque
  // compartido son la disposición heredada: sobrevive sólo para los mitos que
  // todavía no han pasado por la reescritura editorial.
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
FUENTES: se distingue entre relato con narrador identificado, edición académica, reelaboración literaria y catálogo escolar.
LÍMITE CULTURAL: se resume únicamente material publicado; no se reconstruyen fórmulas, dietas, procedimientos, sitios exactos ni conocimiento ceremonial operativo.
UBICACIÓN: coordenadas aproximadas del Predio Putumayo, no del lugar exacto de cada episodio.
IMÁGENES: pareja reutilizada de ${media.reusedFrom}; ilustración digital 2D full paper cut y paper quilling a página completa, nunca fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.`,
  };
  return { ...record, content: composeContent(record) };
}
