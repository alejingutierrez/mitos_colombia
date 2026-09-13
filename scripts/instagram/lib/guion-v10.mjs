/**
 * Guion v10 · las siete reglas del carrusel, aprobadas en el lienzo
 * "Generador de carruseles" (página El guion).
 *
 * 1. El titular comprime, el cuerpo revela: nunca comparten la primera frase.
 * 2. Ningún cuerpo empieza en minúscula ni continúa una oración del titular.
 * 3. Un tiempo por lámina: si dos láminas cuentan lo mismo, sobra una.
 * 4. Techo de 9 palabras en el titular y 32 en el cuerpo.
 * 5. El clímax se parte en dos láminas: la acción y su consecuencia.
 * 6. Fuentes y crónicas van al caption, jamás dentro de un tiempo narrativo.
 * 7. La pregunta final abre algo; no repite la moraleja recién leída.
 *
 * Las reglas 1-4 y 6 son verificables por código (validateGuionV10) y detienen
 * el plan; 5 y 7 viven en el prompt y se reportan como avisos.
 */

const TITLE_WORD_CAP = 9;
const BODY_WORD_CAP = 32;

const words = (value) => String(value || "").trim().split(/\s+/).filter(Boolean);

const canonical = (value) =>
  String(value || "")
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLocaleLowerCase("es-CO")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();

const STOPWORDS = new Set(
  "ante bajo cabe como cuando donde desde entre hasta para pero porque sobre tras unos unas este esta estos estas aquel aquella ellos ellas habia tiene tenia fueron tambien cuando quien dejar debe puede hacia".split(" ")
);

const contentWords = (value) =>
  new Set(canonical(value).split(" ").filter((word) => word.length >= 4 && !STOPWORDS.has(word)));

const SOURCE_PATTERN =
  /\b(fray|cr[oó]nic\w*|publicad\w*|manuscrit\w*|historiador\w*|zamora|sim[oó]n|piedrahita|siglo\s+[xviXVI]+|1[5-8]\d{2})\b/iu;

// ---------------------------------------------------------------------------
// prompt
// ---------------------------------------------------------------------------

export function buildGuionV10SystemPrompt({ requireThirdImage = false, repairNotes = [] } = {}) {
  const repairBlock = repairNotes.length
    ? `\n\nREPARACIÓN OBLIGATORIA — tu intento anterior incumplió el guion. Corrige exactamente esto sin cambiar lo que ya estaba bien:\n${repairNotes
        .map((note) => `- ${note}`)
        .join("\n")}`
    : "";

  return `Eres el editor de guion de Mitos de Colombia. Escribes carruseles de Instagram que
se leen deslizando: nueve a doce pantallas donde una persona entiende el mito completo sin
salir de la aplicación. Escribes en español de Colombia, sobrio y preciso; jamás inventas
hechos que no estén en el material entregado. Respondes ÚNICAMENTE llamando la herramienta
obligatoria con el plan completo.

LA ESTRUCTURA (once tiempos como norte; el esquema admite 8-14 y tú apuntas a 10-12):
01 · hook · kind image · asset existing_portrait — titular: el nombre del mito tal cual;
     cuerpo: la promesa del relato en una sola frase que junte inicio y final.
02 · setting · typographic — el territorio antes del mapa: cómo era el lugar.
03 · setting · kind location — titular: el nombre del lugar; cuerpo: una línea de contexto.
04 · inciting_event · kind image · asset existing_landscape — lo que aparece o irrumpe.
05-07 · development / turn / testimony · typographic — un tiempo por lámina: crecimiento,
     giro, enseñanza. Ningún par de láminas puede contar lo mismo.
08 · climax · ${requireThirdImage ? "kind image · asset generated_third" : "typographic o image"} — LA ACCIÓN del clímax, sola.
09 · climax o meaning · typographic — LA CONSECUENCIA de esa acción, en lámina aparte.
10 · meaning · typographic — lo que permanece: una idea, no un resumen.
11 · closing · kind closing — la pregunta final.

LAS SIETE REGLAS DEL GUION (las cinco primeras y la sexta se verifican por código; si las
incumples el plan se rechaza):
1. El titular comprime, el cuerpo revela. Nunca comparten la primera frase ni la abren igual.
2. Todo cuerpo empieza con mayúscula (o ¿ ¡) y es oración completa: prohibido continuar la
   frase del titular ("y dejó preceptos…" está prohibido).
3. Un tiempo por lámina. Prohibido repetir titular o cuerpo entre láminas.
4. Máximo ${TITLE_WORD_CAP} palabras por titular (excepto el nombre del mito en la 01 y el nombre del
   lugar en la location) y máximo ${BODY_WORD_CAP} palabras por cuerpo.
5. El clímax ocupa DOS láminas consecutivas: acción y consecuencia.
6. Ninguna lámina menciona crónicas, cronistas, años de publicación ni fuentes. Todo eso va
   SOLO en el caption, en una línea final del tipo "Fuentes: …".
7. La pregunta del cierre abre una pregunta nueva hacia la vida de quien lee; prohibido
   reformular la moraleja de la lámina de meaning. Cuerpo del cierre: vacío o una línea de
   invitación, sin URL (la plantilla pone el enlace).

DETALLES DEL ESQUEMA:
- sequence_count debe coincidir con el número de láminas; sequence contiguo desde 1.
- Las láminas con imagen van separadas por al menos 3 posiciones; la 01 usa existing_portrait,
  existing_landscape aparece exactamente una vez${requireThirdImage ? ", y generated_third exactamente una vez en el clímax" : ""}.
- Toda lámina con imagen lleva alt_text descriptivo; las tipográficas no llevan alt_text.
- design_role y text_density coherentes (short ≤ 20 palabras totales, medium ≤ 40, narrative el resto).
- generated_image: needed=${requireThirdImage}; si se genera, el brief describe SOLO la acción del
  clímax con encuadre distinto a las dos imágenes canónicas.
- template_id: elige uno de eligibleTemplates del mensaje. palette_id: usa la paleta que pida
  cada momento (claras para contexto, profundas para clímax) variando a lo largo del carrusel.
- caption: 3-6 frases que inviten a leer el mito completo + línea final "Fuentes: …" con las
  crónicas del material; hashtags de 3 a 7; factual_guardrails con los hechos que NO se pueden
  alterar.${repairBlock}`;
}

// ---------------------------------------------------------------------------
// validación
// ---------------------------------------------------------------------------

export function validateGuionV10(plan) {
  const slides = Array.isArray(plan?.slides) ? plan.slides : [];
  const errors = [];
  const warnings = [];

  const seenTitles = new Map();
  const seenBodies = new Map();

  slides.forEach((slide, index) => {
    const sequence = slide.sequence ?? index + 1;
    const tag = `lámina ${String(sequence).padStart(2, "0")}`;
    const title = String(slide.headline || "").trim();
    const body = String(slide.body || "").trim();
    const isName = index === 0;
    const isLocation = slide.kind === "location";
    const isClosing = slide.narrative_role === "closing";

    // R2 · cuerpo con mayúscula y oración propia
    if (body) {
      const first = body[0];
      if (/\p{Ll}/u.test(first)) {
        errors.push(`${tag}: el cuerpo empieza en minúscula ("${body.slice(0, 40)}…") — regla 2`);
      }
      if (/^(y|e|o|u|pero|que|porque|aunque|además|luego|entonces)\s/iu.test(body)) {
        errors.push(`${tag}: el cuerpo continúa la frase del titular — regla 2`);
      }
    }

    // R1 · titular y cuerpo no comparten la primera frase
    if (title && body) {
      const firstSentence = (body.match(/^.*?[.!?](?:\s|$)/) || [body])[0];
      const canonicalTitle = canonical(title);
      const canonicalFirst = canonical(firstSentence);
      if (
        canonicalTitle &&
        (canonicalFirst === canonicalTitle ||
          canonicalFirst.startsWith(canonicalTitle) ||
          canonicalTitle.startsWith(canonicalFirst))
      ) {
        errors.push(`${tag}: titular y cuerpo comparten la primera frase — regla 1`);
      }
    }

    // R3 · un tiempo por lámina
    const canonicalT = canonical(title);
    if (canonicalT) {
      if (seenTitles.has(canonicalT)) {
        errors.push(`${tag}: repite el titular de la lámina ${seenTitles.get(canonicalT)} — regla 3`);
      } else {
        seenTitles.set(canonicalT, sequence);
      }
    }
    const canonicalB = canonical(body);
    if (canonicalB && canonicalB.split(" ").length > 4) {
      if (seenBodies.has(canonicalB)) {
        errors.push(`${tag}: repite el cuerpo de la lámina ${seenBodies.get(canonicalB)} — regla 3`);
      } else {
        seenBodies.set(canonicalB, sequence);
      }
    }

    // R4 · techos de palabras
    if (!isName && !isLocation && words(title).length > TITLE_WORD_CAP) {
      errors.push(`${tag}: titular de ${words(title).length} palabras (máx. ${TITLE_WORD_CAP}) — regla 4`);
    }
    if (words(body).length > BODY_WORD_CAP) {
      errors.push(`${tag}: cuerpo de ${words(body).length} palabras (máx. ${BODY_WORD_CAP}) — regla 4`);
    }

    // R6 · fuentes fuera del relato
    if (!isClosing && SOURCE_PATTERN.test(`${title} ${body}`)) {
      errors.push(`${tag}: menciona crónicas o fuentes dentro del relato — regla 6`);
    }
    if (isClosing && SOURCE_PATTERN.test(`${title} ${body}`)) {
      warnings.push(`${tag}: el cierre menciona fuentes; van en el caption — regla 6`);
    }
  });

  // R5 · clímax en dos láminas consecutivas
  const climaxIndexes = slides
    .map((slide, index) => (slide.narrative_role === "climax" ? index : -1))
    .filter((index) => index >= 0);
  const hasConsecutiveClimax = climaxIndexes.some((value, index) =>
    index > 0 ? value === climaxIndexes[index - 1] + 1 : false
  );
  const meaningAfterClimax =
    climaxIndexes.length === 1 && slides[climaxIndexes[0] + 1]?.narrative_role === "meaning";
  if (!hasConsecutiveClimax && !meaningAfterClimax && climaxIndexes.length) {
    warnings.push("el clímax no se parte en acción y consecuencia consecutivas — regla 5");
  }

  // R7 · la pregunta abre, no repite la moraleja
  const closing = slides.find((slide) => slide.narrative_role === "closing");
  const meaning = [...slides].reverse().find((slide) => slide.narrative_role === "meaning");
  if (closing && meaning) {
    const questionWords = contentWords(`${closing.headline} ${closing.body}`);
    const meaningWords = contentWords(`${meaning.headline} ${meaning.body}`);
    if (questionWords.size) {
      let shared = 0;
      for (const word of questionWords) if (meaningWords.has(word)) shared += 1;
      if (shared / questionWords.size > 0.6) {
        warnings.push("la pregunta final repite la moraleja de la lámina de meaning — regla 7");
      }
    }
  }
  if (closing && /mitosdecolombia|https?:/iu.test(`${closing.headline} ${closing.body}`)) {
    warnings.push("el cierre trae URL; el enlace lo pone la plantilla — regla 7");
  }

  // R6 en el caption: exigimos que las fuentes SÍ estén ahí
  if (plan?.caption && !/fuentes\s*:/iu.test(plan.caption)) {
    warnings.push('el caption no trae la línea "Fuentes: …" — regla 6');
  }

  return { errors, warnings, ok: errors.length === 0 };
}
