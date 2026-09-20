import bachue from "../myths/bachue.mjs";
import { zenuMedia } from "./media.mjs";
import { zenuCategoryBySlug } from "./universe.mjs";

const sharedZenuHistory = `El pueblo Zenú habita principalmente en Córdoba y Sucre, con una historia territorial que conecta las sabanas, los valles del Sinú y del San Jorge, el resguardo de San Andrés de Sotavento y numerosos cabildos. El nombre reúne continuidades contemporáneas y una larga tradición arqueológica, pero no convierte dos mil años de historia en una sola voz sin cambios.

El Museo del Oro documenta sociedades que desde el 200 a. C. manejaron inundaciones mediante una extensa red de canales y campos elevados. También muestra una metáfora del tejido en canales, redes, alfarería y orfebrería. La investigación comunitaria sobre agricultura anfibia confirma que agua, semillas y trabajo colectivo siguen siendo una memoria activa. Estas evidencias explican el territorio de los relatos; no autorizan a presentar toda obra hidráulica o pieza de oro como episodio mítico.

Las fuentes narrativas tienen alcances distintos. Una recopilación educativa de San Andrés de Sotavento publica el ciclo de Mexión, Manexca, Ninha y Thi. El Documento Madre de SMT-ONIC ofrece otra síntesis de Ley de Origen y el relato del sombrero-universo. Josef Drexler registra testimonios sobre cosmología, montes y el caimán de oro. Una cartilla de la Defensoría y proyectos escolares conservan versiones de Tofeme, Torcorá y el totumo.

La revisión da prioridad a esas voces identificables, declara cuando falta el nombre individual del narrador y mantiene separados los relatos que solo comparten oro, agua o extravío. Autoridades, mayores, narradores y comunidades Zenú conservan prioridad para corregir nombres, lugares, límites e incluso la conveniencia de publicar una versión.`;

const sharedZenuVersions = `No existe una versión única que deba imponerse a todos los cabildos. Mexión puede aparecer junto a Manexca desde el comienzo o como descendiente de Ixitoco. Los listados de hijos y lugares cambian, al igual que la relación entre Ninha, Thi, Sol y Luna. La página creadora mantiene visibles esas procedencias en vez de ensamblarlas como una transcripción total.

El caimán de oro también cambia de orientación. Algunas versiones colocan cabeza o corazón bajo la iglesia de San Andrés y distribuyen cola y extremidades hacia Tofeme, Chimá, Sampués, Palmito o Ciénaga de Oro. La constante es territorial: el cuerpo sostiene el resguardo y retirarlo implicaría hundimiento o destrucción.

Corcovao, Tofeme y Mocán pueden nombrar cerro, guardián o personaje según la publicación. El trueno funciona como aviso de peligro y la tormenta como defensa, pero no todas las fuentes coinciden en intervalos, refugios o señales. El totumo de oro aparece dentro de ese ciclo y también en pruebas breves de extravío; por eso las dos páginas se conectan sin repetirse.

Torcorá procede de una compilación educativa de circulación pública y conserva una geografía narrativa en La Sierpe. La edición no afirma que el tesoro exista ni reconstruye instrucciones para encontrarlo. Comparar motivos ayuda a reconocer variantes, pero nunca permite completar una fuente con escenas tomadas de otra.`;

const sharedJuanHistory = `Juan Lara pertenece al repertorio oral de Córdoba y del Caribe. Las compilaciones de Lorica y Montería lo describen como espíritu burlón o enamorado cuya presencia se reconoce por piedras sobre los techos y risas que parecen venir del aire. Los materiales educativos departamentales muestran que estas leyendas circulan como patrimonio regional, sin adjudicarlas necesariamente a una sola comunidad.

La ficha heredada lo había clasificado como Zenú y añadió una explicación según la cual era una “trenza suelta del mundo”. También inventó una joven protegida por una abuela tejedora y un amuleto de caña flecha. Esos elementos no aparecen en las fuentes consultadas. Vincular automáticamente cualquier relato cordobés con el pueblo Zenú borra la diferencia entre territorio compartido, folclor mestizo y narración atribuida.

La URL se conserva para no romper enlaces, pero la categoría pasa a Caribe, Córdoba, Mestizo. Esa decisión no niega que personas Zenú puedan conocer o contar la leyenda; indica solamente que la evidencia pública disponible no permite presentarla como mito específicamente Zenú. La página conserva el núcleo breve y reconoce que los relatos de aparición cambian entre familias y pueblos.`;

const sharedJuanVersions = `Las fuentes coinciden en un personaje masculino invisible o difícil de ver, interesado en mujeres y capaz de anunciarse con risas y pedradas. Algunas lo llaman enamorado, otras burlón o acosador. Cambian los regalos, las horas, las respuestas familiares y la forma en que cesa la aparición.

La revisión no elige una biografía definitiva ni convierte el asedio en romance. Tampoco conserva la trenza del aire, el amuleto, el sombrero flotante o el desafío verbal de la versión heredada, porque fueron añadidos durante la expansión editorial. El relato se presenta como una reconstrucción prudente del motivo compartido y no como transcripción literal de un narrador identificado.

Su parecido con otros espíritus nocturnos del Caribe se limita a sonidos, persecución y aparición. No se fusiona con el Mohán, el Hombre Caimán, el Sombrerón ni guardianes Zenú del agua.`;

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
  const territory =
    scope === "mestizo"
      ? "paisaje cordobés nocturno de sabana y vivienda rural"
      : "paisaje Zenú de sabana, cerro, ciénaga o resguardo según la escena";
  return `Ilustración panorámica digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; ${territory} expresado con capas digitales recortadas de bordes limpios, formas mate y superposición plana sin volumen físico, paleta azul agua, verde ciénaga, ocre tierra y oro apagado; figuras humanas adultas secundarias sin rasgos étnicos, tocados, pintura corporal, joyas ni vestuario ceremonial inventado; sin texto ni letras, sin fotografía, fibras reales, pliegues reales, grosor de papel, sombras proyectadas, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

function verticalPrompt(scene, scope) {
  const territory =
    scope === "mestizo"
      ? "atmósfera nocturna del folclor rural cordobés"
      : "territorio Zenú representado sin revelar sitios sensibles ni inventar símbolos ceremoniales";
  return `Ilustración vertical digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; segunda escena claramente distinta de la portada, ${territory}, capas digitales recortadas de borde limpio, formas mate y quilling dibujado selectivo sin volumen físico; figuras humanas adultas secundarias sin rasgos étnicos, tocados, pintura corporal, joyas ni vestuario ceremonial inventado; sin horror gráfico, texto ni letras, sin fotografía, fibras reales, pliegues reales, grosor de papel, sombras proyectadas, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

// Las fichas reescritas entregan el campo entero; si no lo traen, se compone
// como antes. El camino viejo daba un párrafo propio y el resto idéntico para
// toda la comunidad: por eso todas medían lo mismo y se leían igual.
export function buildZenuEditorialMyth(input) {
  const media = zenuMedia[input.slug];
  if (!media) throw new Error(`Falta inventario visual para ${input.slug}.`);
  const categoryPath = zenuCategoryBySlug[input.slug];
  if (!categoryPath) throw new Error(`Falta taxonomía para ${input.slug}.`);
  const scope = input.scope || "zenu";
  const sharedHistory =
    scope === "mestizo" ? sharedJuanHistory : sharedZenuHistory;
  const sharedVersions =
    scope === "mestizo" ? sharedJuanVersions : sharedZenuVersions;
  const historia = input.historia ?? `${input.historyCore}\n\n${sharedHistory}`;
  const versiones = input.versiones ?? `${input.versionCore}\n\n${sharedVersions}`;
  const imagePromptHorizontal = horizontalPrompt(
    input.sceneHorizontal,
    scope,
  );
  const imagePromptVertical = verticalPrompt(input.sceneVertical, scope);
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
    researchNotes: `${input.researchNotes}
FUENTES: se distinguen documentos indígenas colectivos, registros comunitarios, etnografía, arqueología, materiales educativos y contexto institucional; la matriz está en editorial/zenu/evidence.mjs.
FRONTERA EDITORIAL: no se convierten conocimientos medicinales, mortuorios o rituales en instrucciones; no se revelan sitios sensibles ni se completan fragmentos con ficción.
ATRIBUCIÓN: las versiones de San Andrés de Sotavento, Tofeme, La Sierpe y el folclor cordobés permanecen diferenciadas; Zenú no se presenta como una voz única.
UBICACIÓN: coordenadas regionales aproximadas, nunca un punto sagrado, un tesoro ni la residencia de un narrador.
IMÁGENES: pareja propia; generación OpenAI gpt-image-2 en alta calidad, ilustración digital 2D full paper cut y paper quilling, nunca fotografía, objeto físico, maqueta, diorama, CGI ni render 3D. Trazabilidad pendiente en editorial/zenu/provenance.json.`,
  };
  return { ...record, content: composeContent(record) };
}
