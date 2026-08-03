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

export function defineCaribeMestizoFinalMyth(entry) {
  const frame = caribeMestizoFinalGroupFrames[entry.group];
  if (!frame) throw new Error(`${entry.slug}: grupo desconocido ${entry.group}.`);
  const selectedSources = pickCaribeMestizoFinalSources(entry.group);
  if (selectedSources.length !== 8 || new Set(selectedSources.map(({ url }) => url)).size !== 8) {
    throw new Error(`${entry.slug}: se esperaban ocho fuentes únicas.`);
  }
  const seoTitle = titleForSeo(entry.title);
  const seoDescription = descriptionForSeo(entry.title);
  const excerpt = truncateSentence(entry.core, 180);
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
    mito: `El núcleo de ${entry.title} es el siguiente: ${entry.core}\n\n${frame.myth}\n\n${mythMethodBoundary}\n\n${boundary}`,
    historia: `${frame.history}\n\n${historyMethodBoundary}\n\nPara esta ruta, la investigación controla el núcleo “${entry.core}” y evita extenderlo más allá de la fuente o versión declarada. ${boundary}`,
    versiones: `${frame.versions}\n\n${versionsMethodBoundary}\n\nEn ${entry.title}, la variación responsable empieza por conservar este núcleo: ${entry.core} ${boundary}`,
    leccion: frame.lesson,
    similitudes: `${frame.similarities}\n\n${similaritiesMethodBoundary}`,
    excerpt,
    seoTitle,
    seoDescription,
    focusKeywords,
    sceneHorizontal: `${entry.title}: ${entry.core} Composición panorámica con personajes adultos o animales claramente separados, sin violencia gráfica, sin caricatura racial ni sexualización.`,
    sceneVertical: `Una segunda escena simbólica de ${entry.title}: huellas, objeto o gesto central del relato ascienden entre paisaje caribeño y capas de memoria, sin repetir la acción panorámica y sin violencia gráfica.`,
    keySources: selectedSources.slice(0, 3),
    sources: selectedSources.slice(3),
    researchNotes: `${frame.note} ${boundary}`,
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
