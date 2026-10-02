import { buildCaribeMestizoFinalMyth } from "./build-editorial-myth.mjs";
import { caribeMestizoFinalGroupFrames } from "./definition-helpers.mjs";
import { pickCaribeMestizoFinalSources } from "./sources.mjs";

const mythMethodBoundary = `Esta forma de lectura separa cuatro capas. El núcleo narrativo explica qué ocurre dentro del relato. La procedencia identifica quién lo escribió, recopiló, grabó o publicó. El contexto aporta datos verificables del territorio sin usarlos para certificar lo sobrenatural. La interpretación editorial compara motivos y explicita daños, pero no suplanta la voz de una comunidad. Mantener esas capas evita que una prosa reciente se disfrace de tradición antigua y permite que una página siga abierta a futuras fuentes. También impide convertir coordenadas aproximadas, templos, viviendas, cuevas o caminos en lugares comprobados de aparición. La ficha invita a leer, no a invadir propiedad, buscar tesoros sin autorización, repetir remedios, ejercer violencia ni atribuir una conducta a todas las personas del Caribe.`;

const historyMethodBoundary = `La fecha de una edición indica cuándo puede controlarse esa forma escrita, no cuándo nació el motivo. Un catálogo prueba que el libro existe; una investigación contextual prueba datos de su tema; una fuente oral identifica circulación cuando declara narrador y situación. La ficha no suma esas funciones como votos equivalentes. Las afirmaciones que continúan sin apoyo quedan atribuidas al relato o marcadas como pendientes.`;

const versionsMethodBoundary = `Una variante responsable cambia elementos narrativos sin apropiarse de una autoría o identidad ajena. Diferencia abreviación, adaptación, traducción y nueva sesión oral, y deja visible qué fuente sostiene cada forma.`;

const similaritiesMethodBoundary = `Estas comparaciones describen recursos narrativos y contrastes directos; no demuestran un origen común, préstamo automático ni equivalencia cultural.`;

function truncateSentence(value, max) {
  if (value.length <= max) return value;
  const slice = value.slice(0, max - 1);
  const boundary = slice.lastIndexOf(" ");
  return `${slice.slice(0, boundary > max * 0.55 ? boundary : max - 1).replace(/[,:;\s]+$/u, "")}.`;
}

function titleForSeo(title) {
  return truncateSentence(`${title}: revisión y fuentes`, 60);
}

function descriptionForSeo(title) {
  return truncateSentence(
    `Revisión documentada de ${title}: relato, procedencia, variantes y límites de su circulación en el Caribe colombiano, sin confundir ficción con historia.`,
    165,
  );
}

/**
 * Construye una ficha del ciclo.
 *
 * Hasta el 2026-09-19 sólo sabía hacer una cosa: pegar el marco del grupo. Las
 * setenta fichas compartían la misma `historia` y las mismas 113 palabras de
 * `similitudes`, y el 86,6 % de sus oraciones se repetían. El reparto de
 * fuentes también era por grupo: ocho iguales para las treinta y tres de
 * Martínez.
 *
 * Ahora la entrada puede traer lo suyo. Si el `entry` declara `mito`,
 * `historia`, `versiones`, `leccion` o `similitudes`, se usan tal cual y el
 * marco no interviene en ese campo. Si declara `sourceKeys`, esas son sus
 * fuentes. Mientras una ficha no se haya reescrito sigue cayendo en el marco,
 * así que el ciclo se puede abrir mito a mito sin romper las demás.
 */
export function defineCaribeMestizoFinalMyth(entry) {
  const frame = caribeMestizoFinalGroupFrames[entry.group];
  if (!frame) throw new Error(`${entry.slug}: grupo desconocido ${entry.group}.`);

  const propio = Boolean(entry.mito || entry.historia || entry.versiones || entry.similitudes);
  const selectedSources = pickCaribeMestizoFinalSources(entry.sourceKeys || entry.group);
  const urlsUnicas = new Set(selectedSources.map(({ url }) => url)).size;
  if (urlsUnicas !== selectedSources.length) {
    throw new Error(`${entry.slug}: hay URLs repetidas entre sus fuentes.`);
  }
  // El piso del bloque mestizo y mixto es 8, no un número fijo: una ficha
  // reescrita puede traer doce, y una agotada seis con su razón declarada.
  const minimo = entry.fuentesAgotadas ? 1 : 8;
  if (selectedSources.length < minimo) {
    throw new Error(
      `${entry.slug}: ${selectedSources.length} fuentes, y el piso es ${minimo}. ` +
        "Si el relato no da más, declara `fuentesAgotadas` con su razón.",
    );
  }
  const seoTitle = entry.seoTitle ?? titleForSeo(entry.title);
  const seoDescription = entry.seoDescription ?? descriptionForSeo(entry.title);
  const excerpt = entry.excerpt ?? truncateSentence(entry.core, 180);
  const boundary = entry.boundary
    ? `Límite particular: ${entry.boundary}`
    : "El argumento se conserva con atribución y sin convertir sus detalles en hechos externos.";
  const focusKeywords = [
    entry.title,
    frame.label,
    "relatos del Caribe colombiano",
    "tradición narrativa colombiana",
    "mitos y leyendas de Colombia",
  ];
  return buildCaribeMestizoFinalMyth({
    slug: entry.slug,
    title: entry.title,
    tags: frame.tags,
    // Campo a campo: lo propio manda; si no lo hay, queda el marco heredado.
    mito: entry.mito
      ?? `El núcleo de ${entry.title} es el siguiente: ${entry.core}\n\n${frame.myth}\n\n${mythMethodBoundary}\n\n${boundary}`,
    historia: entry.historia
      ?? `${frame.history}\n\n${historyMethodBoundary}\n\nPara esta ruta, la investigación controla el núcleo “${entry.core}” y evita extenderlo más allá de la fuente o versión declarada. ${boundary}`,
    versiones: entry.versiones
      ?? `${frame.versions}\n\n${versionsMethodBoundary}\n\nEn ${entry.title}, la variación responsable empieza por conservar este núcleo: ${entry.core} ${boundary}`,
    leccion: entry.leccion ?? frame.lesson,
    similitudes: entry.similitudes
      ?? `${frame.similarities}\n\n${similaritiesMethodBoundary}`,
    relatoCorto: entry.relatoCorto,
    excerpt,
    seoTitle,
    seoDescription,
    focusKeywords,
    sceneHorizontal: `${entry.title}: ${entry.core} Composición panorámica con personajes adultos o animales claramente separados, sin violencia gráfica, sin caricatura racial ni sexualización.`,
    sceneVertical: `Una segunda escena simbólica de ${entry.title}: huellas, objeto o gesto central del relato ascienden entre paisaje caribeño y capas de memoria, sin repetir la acción panorámica y sin violencia gráfica.`,
    keySources: selectedSources.slice(0, 3),
    sources: selectedSources.slice(3),
    researchNotes: entry.researchNotes ?? (propio ? boundary : `${frame.note} ${boundary}`),
    seo: {
      meta_title: seoTitle,
      meta_description: seoDescription,
      meta_keywords: focusKeywords.join(", "),
      og_title: seoTitle,
      og_description: seoDescription,
      twitter_title: seoTitle,
      twitter_description: seoDescription,
      canonical_path: `/mitos/${entry.slug}`,
    },
  });
}
