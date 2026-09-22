import bachue from "../myths/bachue.mjs";
import { chimilaMedia } from "./media.mjs";
import { chimilaCategoryBySlug } from "./universe.mjs";

const corpusHistory = `La base narrativa es “Mitos y cuentos de los indios Chimila”, publicada por Gerardo Reichel-Dolmatoff en 1945. El investigador afirma que los relatos le fueron contados en castellano por el cacique Tangrutaya Mutsu y que los presentó sin alterarlos. Esa declaración establece una atribución importante, pero no elimina la mediación: conocemos una versión fijada por escrito por un antropólogo, en otra lengua y desde la voz de un solo narrador.

Miguel Rocha Vivas volvió a publicar el conjunto dentro de “El sol babea jugo de piña” y lo situó como literatura Ette. Esa reedición permite reconocer la autoría oral y la cadena documental, pero no constituye otra versión independiente. Las fuentes contemporáneas prefieren el nombre Ette Ennaka y muestran que la cosmovisión siguió cambiando y transmitiéndose después de 1945.

Por eso esta ficha no presenta el relato como explicación universal de todas las personas Ette. Reconstruye con lenguaje actual la secuencia conservada, mantiene sus acciones difíciles cuando son indispensables y separa narración, comentario del recopilador y contexto histórico. No se añaden diálogos extensos, nombres, ceremonias, moralejas psicológicas ni clasificaciones como “viaje del héroe” cuando la fuente no los ofrece. Cada página señala también qué partes fueron corregidas frente a la expansión heredada.`;

const livingHistory = `Esta ficha no procede del corpus de Tangrutaya Mutsu de 1945. Su núcleo aparece en investigaciones y testimonios contemporáneos sobre el pueblo Ette Ennaka. La diferencia es editorialmente decisiva: el sitio incorpora una cosmogonía viva sin hacerla pasar por un capítulo perdido del documento histórico.

Las fuentes emplean grafías distintas para nombres y lugares, y algunas sintetizan testimonios más extensos. La página conserva esas variaciones en el apartado de versiones, atribuye cada afirmación y evita convertir explicaciones académicas en palabras literales de la comunidad. También mantiene el slug histórico “chimila” para no romper rutas, mientras el nombre visible se actualiza a Ette Ennaka (Chimila).

El relato se publica porque existe una cadena suficiente entre trabajo etnográfico, documentos organizativos y voces comunitarias recientes. Esa convergencia no vuelve idénticas todas las versiones: permite reconocer un núcleo compartido y, a la vez, dejar visibles sus diferencias.

El contexto actual también importa. Voces Ette insisten en fortalecer la lengua y la tradición como prácticas vivas, no como objetos recuperados después de una desaparición. Incorporar estos relatos corrige la imagen de un pueblo detenido en 1945 y hace visible la continuidad entre memoria, territorio, ceremonia y enseñanza contemporánea.`;

const corpusVersions = `La versión principal de esta página es la que Tangrutaya Mutsu narró en castellano y Reichel-Dolmatoff publicó en 1945. La antología de Miguel Rocha Vivas reproduce ese texto y aporta contexto literario, de modo que ambas publicaciones pertenecen a una misma cadena y no deben contarse como dos testimonios orales.

Las fuentes contemporáneas cambian el marco general. Emplean Ette Ennaka, Yaau, Numirinta y Yunari para explicar un universo de tierras superpuestas y ciclos de renovación. Esos elementos ayudan a comprender que el archivo de 1945 no agotó la tradición, pero no se insertan dentro de este cuento si Tangrutaya Mutsu no los mencionó.

La revisión retira las expansiones del Excel que convertían escenas breves en aventuras universales, atribuían emociones no dichas o clasificaban cada cuento con arquetipos de Campbell. Cuando una palabra histórica resulta problemática, se conserva dentro de la procedencia y se explica con vocabulario actual, sin fingir que el documento fue producido bajo criterios contemporáneos.`;

const livingVersions = `Las fuentes coinciden en el núcleo, pero no en todos los nombres, secuencias ni énfasis. Unas escriben Yunari y otras Yunnari; algunas emplean Ette Ennaka o Ette Enaka, y los documentos de circulación general aún conservan Chimila. La ficha no declara una ortografía definitiva que las fuentes consultadas no resuelven.

El artículo de Ministerio de las Culturas ofrece una síntesis breve desde voces comunitarias. Los trabajos de Juan Camilo Niño Vargas y Andrea Buitrago aportan una explicación cosmológica más amplia. El documento de la ONIC y el artículo de Uninorte reúnen esos motivos dentro de panoramas nacionales o sociohistóricos. Son fuentes relacionadas, no copias idénticas ni transcripciones completas de una sola narración.

Por eso el texto reconstruye el mínimo común documentado y coloca los detalles variables en contexto. No combina el relato con la creación de greda de 1945 como si ambos fueran una sola escena, aunque pueden convivir dentro de la tradición Ette.`;

const sharedSimilarities = `Este relato puede compararse con historias de otras comunidades colombianas que explican el origen de una práctica, una especie, un paisaje o una relación entre seres humanos y no humanos. La semejanza permite reconocer preguntas compartidas, pero no demuestra préstamo ni autoriza a reemplazar los nombres y acciones Ette con categorías ajenas.

También dialoga con narraciones donde animales hablan, sueños anticipan peligros, árboles guardan alimentos o una catástrofe reorganiza la vida. En el corpus de Tangrutaya Mutsu esos motivos están conectados entre sí: el sapo que trae el fuego es gente, el caimán enseña a cazar y la danta puede actuar con intención. Leer una ficha junto a las demás resulta más fiel que aislarla como fábula moral.

La revisión evita convertir esas resonancias en una moraleja universal. Su función es mostrar relaciones posibles y marcar diferencias: quién actúa, qué lugar se nombra, qué transformación ocurre y desde qué fuente conocemos la historia.`;

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
  return `Ilustración panorámica digital 2D full paper cut y paper quilling, acabado gráfico plano sin fotografía: ${scene}; paisaje de sabanas y bosque seco del Magdalena, identidad Ette Ennaka sobria, sin ranchería wayuu, pirámides, cactus desérticos, regalia inventada, tocados panindígenas, símbolos aztecas, mayas o muiscas, texto, letras, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

function verticalPrompt(scene) {
  return `Ilustración vertical digital 2D full paper cut y paper quilling, acabado gráfico plano sin fotografía: ${scene}; segunda escena complementaria del relato Ette Ennaka, sin repetir el encuadre horizontal, sin ranchería wayuu, pirámides, cactus desérticos, regalia inventada, tocados panindígenas, símbolos aztecas, mayas o muiscas, texto, letras, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

export function buildChimilaEditorialMyth(input) {
  const media = chimilaMedia[input.slug];
  if (!media) throw new Error(`Falta inventario visual para ${input.slug}.`);
  const categoryPath = chimilaCategoryBySlug[input.slug];
  if (!categoryPath) throw new Error(`Falta taxonomía para ${input.slug}.`);
  const living = input.sourceMode === "living";
  // Cada ficha escribe su propia capa documental. Los `…Core` más el bloque
  // compartido son la disposición heredada: sobrevive sólo para los mitos que
  // todavía no han pasado por la reescritura editorial.
  const historia =
    input.historia ??
    `${input.historyCore}\n\n${living ? livingHistory : corpusHistory}`;
  const versiones =
    input.versiones ??
    `${input.versionCore}\n\n${living ? livingVersions : corpusVersions}`;
  const similitudes =
    input.similitudes ?? `${input.similarityCore}\n\n${sharedSimilarities}`;
  const imagePromptHorizontal = horizontalPrompt(input.sceneHorizontal);
  const imagePromptVertical = verticalPrompt(input.sceneVertical);

  const record = {
    slug: input.slug,
    title: input.title,
    category_path: categoryPath,
    tags: input.tags,
    latitude: input.latitude ?? media.latitude,
    longitude: input.longitude ?? media.longitude,
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
FUENTES: ${living ? "cosmología Ette contemporánea" : "corpus de Tangrutaya Mutsu, 1945"}.
IMÁGENES: ilustración editorial digital 2D full paper cut y paper quilling, de acabado gráfico plano; nunca fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.`,
  };
  return {
    ...record,
    content: composeContent(record),
  };
}
