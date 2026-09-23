import bachue from "../myths/bachue.mjs";
import { yucunaMedia } from "./media.mjs";
import { yucunaCategoryBySlug } from "./universe.mjs";

const sharedYucunaHistory = `La escritura Yucuna aparece también como Yukuna. No designa una voz homogénea: Laurent Fontaine describe cinco grupos de filiación que hoy usan la lengua, entre ellos los Kamejeya y los Jupichiya o Matapí. Las versiones de esta revisión mantienen los nombres de narradores y filiaciones cuando las fuentes los ofrecen, sin presentar sus diferencias como errores.

Leonor Herrera Ángel publicó en 1975 y 1976 dos registros extensos narrados en español y transcritos con colaboración Yukuna-Matapí. Explicó que realizó cambios para hacerlos comprensibles a lectores externos. Kanumá quedó expresamente inconcluso; El nacimiento de los Matapí fue organizado en dos partes y diecisiete secciones. Por eso ninguna página afirma reproducir la narración completa ni transforma cada sección editorial en un mito independiente.

María Clara van der Hammen trabajó después con Chápune y familias de Puerto Córdoba. Su etnografía distingue varios ciclos interconectados: Jeechú; los Karipulakena; Kawarimi; Kanumá; Kari; y los jaguares de Yanama. La autora publicó fragmentos para explicar territorio, plantas, agua, pesca y monte, no un canon cerrado. Esta revisión conserva como fichas los ciclos con suficiente secuencia pública y atribuida.

Fontaine transcribió dos versiones del ciclo Karipú Lakena: una de Mario Matapí, llamado Píteru, y otra de Milciades Yucuna, llamado Túwemi. Las diferencias alcanzan nombres, orden, árboles de agua y acciones de los cuatro hermanos. La edición no elige una versión como verdadera; centra la nueva ficha en la aparición de la noche, episodio que ambas permiten comparar con precisión.

Las fuentes etnográficas contienen conjuros, dietas, instrumentos y procedimientos asociados con Yuruparí, curación, pesca y noche. Aquí solo se conserva su función narrativa pública. No se reproducen palabras operativas, instrucciones ni objetos restringidos. Las personas y autoridades Yucuna y Matapí conservan prioridad para corregir nombres, límites y decisiones de publicación.`;

const sharedYucunaVersions = `Los ciclos Yucuna no son libros con capítulos fijos. Van der Hammen explica que sus episodios pueden contarse aislados como reflexión sobre un acontecimiento y que personajes de un ciclo aparecen en otros. La revisión usa una página por ventana narrativa amplia: no fabrica una cosmogonía única, pero tampoco multiplica cada incidente como si fuera un mito autónomo.

Kanumá se conserva como un ciclo largo porque la publicación enlaza la salida de las primeras mujeres con el retorno de alimentos y coca. Yuruparí y las mujeres se cita como estudio complementario, no como ficha duplicada. La violencia y las relaciones de género se narran como acciones históricas de una versión, no como reglas que definan a las mujeres ni a los hombres Yucuna actuales.

El nacimiento de los Matapí pertenece a la memoria Upichiya y a un contexto de lengua Yucuna. La adaptación selecciona el nacimiento y el comienzo de la relación entre Ka'amarí e Himuri. Declara la guerra y la descendencia que ocupan el resto del registro sin convertirlas en una sucesión de escenas espectaculares.

La ficha de los Karipú Lakena se concentra en la primera noche. El ciclo más amplio incluye maloca, agua, peces, cacería y ríos; varios de esos motivos circulan también entre pueblos vecinos. La página no traslada episodios Ufaina, Makuna o Barasana para rellenar la versión Yucuna.

El origen de las frutas cambia de comunidad. La antología de Idartes solo lo situaba en Putumayo, pero los nombres y una fuente atribuida lo conectan con Moniya Amena, relato Huitoto-Muinane. La URL permanece publicada y la transferencia queda visible en Historia y Versiones.`;

const sharedAbundanceHistory = `Fernando Urbina publicó en Las palabras del origen una versión narrada por el abuelo Julio Ribera, miembro del pueblo Muinane, en Araracuara en 1985. Ismael Mendoza la tradujo en Bogotá en 1987. Ribera narró en lengua uitoto La metamorfosis de Yiida Buinama, un ciclo extenso que enlaza el Árbol de la Abundancia con transformaciones posteriores y el origen del maguaré.

La antología Mitos de creación de Idartes publicó otra versión bajo el título El origen de las frutas y la localización general Putumayo. Sus personajes aparecen como Monalla Tirisa, Cullo Buinayma y Monalla Jurama; la edición no identifica narrador ni registro de origen. Antes de esta revisión, el sitio clasificó esa adaptación como Yucuna sin evidencia.

Museo Nacional, Banco de la República, Biblioteca Nacional y estudios dedicados a Moniya Amena confirman su circulación entre Huitoto y Muinane. La ficha conserva el slug y declara la transferencia a Huitoto / Murui-Muina. No afirma que los nombres de dos versiones sean intercambiables ni que exista una sola forma del Árbol de la Abundancia. La corrección preserva la memoria de la clasificación anterior para que el cambio pueda auditarse y no parezca una atribución silenciosa.`;

const sharedAbundanceVersions = `En la versión de Julio Ribera, Yiida Buinama se presenta mediante aroma de frutas y Monayakono o Monaya Tirizaï lo oculta bajo su asiento. Después de que la madre le arroja agua caliente, el don se retira y el hijo queda asociado con Moniya Amena. Una hormiga revela la yuca guardada durante la hambruna. El árbol reúne frutos y, en la variante explicada por Urbina, debe derribarse cuando crece fuera del alcance.

La versión de Idartes llama al visitante Cullo Buinayma, a la joven Monalla Tirisa y al árbol Monilla Amena. Añade a Iga, el bejuco y el ojo de Jurama convertido en estrella. Es una adaptación pública útil, pero sin atribución individual; esos episodios no se mezclan con la narración de Ribera como si procedieran de una sola voz.

El capítulo de Ribera continúa hacia el maguaré, ya representado en otra URL del sitio. Esta ficha se concentra en el rechazo inicial del don, la hambruna, la hormiga y el crecimiento del árbol. Las dos páginas se presentan como ventanas distintas de un ciclo relacionado, no como mitos sin conexión.`;

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

function horizontalPrompt(scene, scope) {
  return `Ilustración panorámica digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; ${scope}; capas recortadas digitales de borde limpio, formas mate y superposición sin volumen físico, paleta verde profunda, azul de río, ocre vegetal y acentos cálidos; personajes humanos como siluetas adultas secundarias sin rasgos étnicos, pintura corporal, tocados, joyas, plumas ni vestuario ceremonial inventado; sin objetos rituales restringidos, texto ni letras, sin fotografía, fibras reales, pliegues reales, grosor de papel, sombras proyectadas, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

function verticalPrompt(scene, scope) {
  return `Ilustración vertical digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; segunda escena claramente distinta de la portada, ${scope}; capas recortadas digitales de borde limpio y quilling dibujado selectivo, sin volumen físico; personajes humanos como siluetas adultas secundarias sin rasgos étnicos, pintura corporal, tocados, joyas, plumas ni vestuario ceremonial inventado; sin objetos rituales restringidos, horror gráfico, texto ni letras, sin fotografía, fibras reales, pliegues reales, grosor de papel, sombras proyectadas, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

// Las fichas reescritas entregan el campo entero; si no lo traen, se compone
// como antes. El camino viejo daba un párrafo propio y el resto idéntico para
// toda la comunidad: por eso todas medían lo mismo y se leían igual.
export function buildYucunaEditorialMyth(input) {
  const media = yucunaMedia[input.slug];
  if (!media) throw new Error(`Falta inventario visual para ${input.slug}.`);
  const categoryPath = yucunaCategoryBySlug[input.slug];
  if (!categoryPath) throw new Error(`Falta taxonomía para ${input.slug}.`);
  const transferred = input.editorialScope === "abundance-transfer";
  const historia = input.historia ?? `${input.historyCore}\n\n${
    transferred ? sharedAbundanceHistory : sharedYucunaHistory
  }`;
  const versiones = input.versiones ?? `${input.versionCore}\n\n${
    transferred ? sharedAbundanceVersions : sharedYucunaVersions
  }`;
  const visualScope = transferred
    ? "paisaje de chagra, maloca, quebrada y selva del Putumayo, sin convertir una adaptación en inventario etnográfico"
    : "paisaje del Mirití-Paraná y bajo Caquetá construido como selva amazónica y río, sin estética panindígena";
  const imagePromptHorizontal = horizontalPrompt(
    input.sceneHorizontal,
    visualScope,
  );
  const imagePromptVertical = verticalPrompt(
    input.sceneVertical,
    visualScope,
  );
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
    similitudes: input.similitudes ?? input.similarityCore,
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
    editorial_scope: input.editorialScope,
    researchNotes: `${input.researchNotes}
FUENTES: las fuentes narrativas directas se distinguen de estudios, perfiles institucionales, antologías y controles bibliográficos; la matriz de afirmaciones está en editorial/yucuna/evidence.mjs.
FRONTERA EDITORIAL: no se publican conjuros, instrumentos, dietas, fórmulas ni procedimientos rituales. Los ciclos catalogados sin una versión pública suficiente permanecen como contexto.
ATRIBUCIÓN: Yucuna/Yukuna no se usa como rótulo para borrar la especificidad Kamejeya, Jupichiya/Matapí o Muinane de cada narración.
UBICACIÓN: coordenadas regionales aproximadas, no de una maloca, un sitio sagrado ni el lugar de un narrador concreto.
IMÁGENES: pareja propia; generación OpenAI gpt-image-2 en alta calidad, ilustración digital 2D full paper cut y paper quilling, nunca fotografía, objeto físico, maqueta, diorama, CGI ni render 3D. Trazabilidad en editorial/yucuna/provenance.json.`,
  };
  return { ...record, content: composeContent(record) };
}
