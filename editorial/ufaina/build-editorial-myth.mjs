import bachue from "../myths/bachue.mjs";
import { ufainaMedia } from "./media.mjs";
import { ufainaCategoryBySlug } from "./universe.mjs";

const sharedHistory = `Martín von Hildebrand recogió este ciclo entre noviembre y diciembre de 1972 con hablantes Tanimuka que se autodenominaban Ufaina. Guaraná Tanimuka, reconocido como un hombre que «piensa bien», fue el narrador principal; el investigador insertó un fragmento del fallecido Ñaki Tanimuka para aclarar un episodio. Hildebrand afirmó haber reunido cuatro versiones, en Tanimuka y en español, con cuatro sabedores.

La publicación de 1975 debe leerse con sus propias cautelas. El investigador explicó que el nacimiento del mundo no podía contarse de manera completa a una persona externa, porque conocerlo concede poder sobre la comunidad. Los narradores saltaron episodios o cambiaron su orden. La división en cuarenta y cuatro capítulos fue obra del editor para destacar temas: los Ufaina contaban el conjunto de forma seguida. Esta página conserva por eso una sola URL y se presenta como selección pública de un ciclo, no como transcripción total.

Existe además un límite explícito. Hildebrand dejó fuera la parte del Yuruparí porque sus interlocutores pidieron que permaneciera entre los hombres y no llegara a oídos de las mujeres. La revisión respeta esa decisión y evita fórmulas, curaciones operativas, instrucciones rituales y sitios sensibles. Que una fuente histórica haya sido publicada no elimina la responsabilidad de distinguir lo narrable de lo restringido.

Investigaciones posteriores nombran a los Imarimakâra como los Cuatro Seres Vivientes y muestran que estas historias siguen enlazadas con cuerpo, territorio y Camino del Pensamiento. El pueblo aparece hoy también como Tanimuka o Yairi marâ en fuentes institucionales y territoriales. No se trata de un vestigio inmóvil: la memoria de los creadores participa en formas contemporáneas de cuidar el mundo y afirmar la continuidad colectiva.`;

const sharedVersions = `La grafía cambia entre las fuentes: Imarikakana en la edición de 1975 e Imarimakâra en trabajos contemporáneos. El registro temprano nombra a los cuatro hermanos como Imárika Minokuribí, Imárika Karifú, Imárika Borokurí e Imárika Kayafikí. Esta página usa el nombre colectivo y conserva a Kayafikí cuando la acción depende específicamente del menor.

La secuencia de 1975 no es una versión única ni completa. Su forma escrita combina narraciones en Tanimuka y español, traducción, edición y notas antropológicas. Las secciones sobre la primera maloca, la obtención de la noche, el agua y el árbol que se vuelve Apaporis pertenecen a la misma corriente narrativa, aunque pueden recibir distinto énfasis según quien cuenta, el momento del año y el contexto.

La adaptación selecciona episodios que la fuente hizo públicos y los ordena sin añadir diálogos, vestuario, parentescos, ceremonias ni explicaciones espirituales. No intenta condensar cada uno de los cuarenta y cuatro capítulos. Tampoco convierte las palabras españolas «dios», «diablo» o «brujería» usadas por el registro en equivalentes transparentes de conceptos Ufaina; el propio autor advirtió que cargaban sentidos diferentes.

Tanimuka, Ufaina y Yairi marâ aparecen en fuentes de épocas distintas. Se conservan juntos para facilitar la búsqueda, pero no se afirma que todas las personas prefieran siempre el mismo nombre. La comunidad contemporánea y sus autoridades tienen prioridad para corregir nombres, límites y decisiones de publicación.`;

const sharedSimilarities = `Stephen Hugh-Jones compara numerosas narraciones del noroeste amazónico en las que la noche llega dentro de un recipiente y se libera durante el camino. Entre Baniwa y Yucuna cambian el portador, el material del contenedor, los sonidos y las consecuencias. El episodio Ufaina se distingue por los cuatro Imarikakana, el abuelo dueño de la noche, la pequeña esfera negra abierta por Kayafikí y la formación de animales capaces de moverse en la oscuridad.

La transformación de un gran árbol en agua o río también tiene paralelos regionales. En la tradición Makuna publicada colaborativamente por Kaj Århem, Luis Cayón, Gladys Angulo, Maximiliano García y narradores Makuna, los Ayawa derriban un árbol que contiene aguas y peces. En la secuencia Ufaina, la hija del Sol recompone las astillas, Kayafikí las arroja al lago para que sean peces, corta las ataduras celestes y el árbol cae convertido en el Apaporis.

Estas resonancias son importantes porque los pueblos del bajo Apaporis mantienen relaciones históricas y territoriales. No prueban, sin embargo, que exista un único mito amazónico ni autorizan a reemplazar nombres, héroes o conocimientos entre pueblos. La primera maloca Ufaina, los cuatro hermanos y el río Apaporis forman una combinación propia dentro de una región de intercambio.

La comparación antigua con Pandora se retira. Abrir algo antes de tiempo es una semejanza demasiado general y hacía perder la arquitectura regional del relato. Los paralelos elegidos están documentados de manera directa y explican también las diferencias.`;

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
  return `Ilustración panorámica digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; selva húmeda del bajo Apaporis construida con capas recortadas digitales, palmas de bombona y milpesos, verdes profundos, azul río y ocres vegetales, figuras humanas adultas como siluetas lisas secundarias sin rasgos étnicos inventados, tocados, pintura corporal, joyas ni vestuario ceremonial, sin símbolos panindígenas, texto ni letras, sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

function verticalPrompt(scene) {
  return `Ilustración vertical digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; segunda escena Ufaina claramente distinta de la portada, capas recortadas digitales de borde limpio y quilling selectivo, figuras humanas adultas como siluetas lisas secundarias sin rasgos étnicos inventados, tocados, pintura corporal, joyas ni vestuario ceremonial, sin instrucciones rituales, texto ni letras, sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

export function buildUfainaEditorialMyth(input) {
  const media = ufainaMedia[input.slug];
  if (!media) throw new Error(`Falta inventario visual para ${input.slug}.`);
  const categoryPath = ufainaCategoryBySlug[input.slug];
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
FUENTES: Hildebrand 1975 aporta la secuencia; las otras seis referencias documentan cosmos, continuidad, territorio y paralelos regionales.
LÍMITE CULTURAL: se excluye el Yuruparí por la petición registrada de los interlocutores y no se reproducen fórmulas, curaciones operativas ni localizaciones sensibles.
UBICACIÓN: coordenadas aproximadas del bajo Apaporis dentro del territorio multiétnico, no de un sitio sagrado.
IMÁGENES: pareja propia del mito; generación OpenAI gpt-image-2 en alta calidad, ilustración digital 2D full paper cut y paper quilling, nunca fotografía, objeto físico, maqueta, diorama, CGI ni render 3D. Trazabilidad en editorial/ufaina/provenance.json.`,
  };
  return { ...record, content: composeContent(record) };
}
