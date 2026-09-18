// Carril v2 — el bloque común y los prompts de anclas, lookdev, fichas e insertos.
//
// La regla que v1 no cumplió y que aquí es código: NINGÚN prompt sale sin el
// bloque común (técnica, idéntico, nunca, deslinde, hora, luz). En v1 la
// maestra de figura omitía los invariantes —de ahí la laguna en un mito cuyo
// deslinde es "ni una gota de agua"— y la de cuadro pegaba los positivos bajo
// "NUNCA:". Aquí hay una sola función y un test (`assertComun`) que se niega a
// mandar un prompt que no la contenga.
import fs from "node:fs/promises";
import path from "node:path";

export const bloque = (titulo, lineas) => `${titulo}\n${(lineas || []).map((l) => `- ${l}`).join("\n")}`;

export async function cargarPlano(specPath) {
  const spec = JSON.parse(await fs.readFile(specPath, "utf8"));
  const comun = JSON.parse(await fs.readFile(path.join(path.dirname(specPath), "_comun.json"), "utf8"));
  return { ...comun, ...spec, nunca: [...(comun.nunca || []), ...(spec.nunca || [])], identico: [...(comun.identico || []), ...(spec.identico || [])], luz: { ...(comun.luz || {}), ...(spec.luz || {}) } };
}

export const MARCA = "=== BLOQUE COMÚN DEL MUNDO ===";

export function bloqueComun(p) {
  const luz = p.luz || {};
  return [
    MARCA,
    bloque("TÉCNICA (idéntica en todo el video):", p.estilo),
    "",
    bloque("IDÉNTICO en todos los fotogramas y planos:", p.identico),
    "",
    bloque("NUNCA (cualquiera de estas cosas invalida la imagen):", p.nunca),
    "",
    `DESLINDE DEL MITO: ${p.deslinde}`,
    `HORA: ${p.hora}`,
    `LUZ: fuente ${luz.fuente}; altura ${luz.altura}; color ${luz.color}.`,
    `PALETA: ${p.paleta}.`,
    "=== FIN DEL BLOQUE COMÚN ===",
  ].join("\n");
}

export function assertComun(prompt) {
  if (!prompt.includes(MARCA) || !prompt.includes("NUNCA") || !prompt.includes("DESLINDE DEL MITO")) {
    throw new Error("prompt sin bloque común: no se manda");
  }
  return prompt;
}

const roles = (refs) => (refs || []).map((r, i) => `- Referencia ${i + 1}: ${r.rol}`).join("\n");

/** Fotograma A: el primer estado del plano, con el mundo atado por imagen. */
export function promptA(p) {
  return assertComun([
    "Dirección de arte para un video de mitos colombianos (pueblo muisca, altiplano cundiboyacense).",
    bloqueComun(p),
    "",
    `PLANO ${p.plano} — ${p.escala}. ${p.mirada ? `Mirada: ${p.mirada}.` : ""} Fotograma vertical 9:16, cámara fija.`,
    bloque("DECORADO:", p.decorado),
    p.sujeto?.length ? bloque("SUJETO (uno solo, salvo que el decorado diga otra cosa):", p.sujeto) : "NO HAY PERSONAS NI ANIMALES EN EL CUADRO.",
    "",
    `FOTOGRAMA A — ESTADO ABSOLUTO: ${p.A}`,
    "",
    "PAPEL DE CADA IMAGEN ADJUNTA:",
    roles(p.refs),
    "",
    "Composición: el 15% inferior del encuadre libre de rostros, manos y objetos narrativos; el 20% superior sin elementos críticos. Sin texto, sin marca de agua, sin bordes.",
  ].join("\n"));
}

/** Fotograma B: la MISMA fotografía, con un solo cambio de estado dicho en absoluto. */
export function promptB(p) {
  return assertComun([
    "Dirección de arte para un video de mitos colombianos (pueblo muisca, altiplano cundiboyacense).",
    bloqueComun(p),
    "",
    `La referencia 1 es el FOTOGRAMA A del plano ${p.plano}, ya fotografiado. Devuelve LA MISMA FOTOGRAFÍA —mismo encuadre, misma distancia y altura de cámara, mismo decorado píxel a píxel, misma luz, mismos materiales— cambiando ÚNICAMENTE lo que describe el estado B. Lo que ese cambio arrastra SÍ cambia con él: su sombra proyectada, el contacto de los pies o de la base con el suelo, la luz del fogón sobre la tela.`,
    "",
    `FOTOGRAMA B — ESTADO ABSOLUTO: ${p.B}`,
    "",
    "PAPEL DE LAS DEMÁS IMÁGENES ADJUNTAS:",
    roles([{ rol: "el fotograma A (autoridad sobre todo lo que no cambia)" }, ...(p.refs || []).slice(0, 3)]),
    "",
    "Sin texto, sin marca de agua, sin bordes.",
  ].join("\n"));
}

/** Hoja de lookdev: los cuatro decorados del video en una sola pasada. */
export function promptLookdev(p, celdas) {
  return assertComun([
    "Dirección de arte para un video de mitos colombianos (pueblo muisca, altiplano cundiboyacense).",
    bloqueComun(p),
    "",
    `Genera una HOJA DE LOOKDEV de exactamente 2 filas y 2 columnas: cuatro DECORADOS distintos del mismo mundo, cada uno un fotograma vertical 9:16 completo, en orden de izquierda a derecha y de arriba abajo. Los cuatro comparten técnica, materiales, paleta, hora y la LUNA DE PAPEL en la misma posición (alta, a la DERECHA). Sin personas ni animales en ninguna celda.`,
    "Rejilla regular a sangre, SIN canales, bordes, líneas divisorias, etiquetas ni números.",
    "",
    "La referencia adjunta es la ficha de paisaje de la biblia: copia de ella los bohíos, las vasijas, los fogones y la factura del papel.",
    "",
    ...celdas.map((c, i) => `Celda ${i + 1} — ${c}`),
  ].join("\n"));
}

/** Ficha de producción: tres vistas del mismo personaje sobre gris, con su atrezo. */
export function promptFicha(p, f) {
  return assertComun([
    "Dirección de arte para un video de mitos colombianos (pueblo muisca, altiplano cundiboyacense).",
    bloqueComun(p),
    "",
    `Genera una FICHA DE PRODUCCIÓN de exactamente 1 fila y 3 columnas: el MISMO personaje tres veces, de cuerpo entero, al mismo tamaño y a la misma altura, sobre fondo mate liso gris medio idéntico en las tres celdas. Celda 1: de frente. Celda 2: de perfil tres cuartos hacia la izquierda. Celda 3: de perfil puro hacia la izquierda. ${f.extra || ""}`,
    "Rejilla regular a sangre, SIN canales, bordes, líneas divisorias, etiquetas ni números. Sin decorado.",
    "",
    bloque("PERSONAJE:", f.desc),
    "",
    "La referencia adjunta es la ficha de la biblia: la identidad, los materiales y la ropa son EXACTAMENTE los de ahí.",
  ].join("\n"));
}

/** Hoja de recortes para un INSERTO: el objeto solo, sobre alfa, de A hasta un paso antes de B. */
export function promptHojaInserto(p, n) {
  return assertComun([
    "Dirección de arte para un video de mitos colombianos (pueblo muisca, altiplano cundiboyacense).",
    bloqueComun(p),
    "",
    `Las referencias 1 y 2 son los fotogramas A (inicio) y B (fin) de un inserto de stop-motion. Genera UNA hoja de exactamente 3 filas y 3 columnas: ${n} fotogramas consecutivos de UN SOLO OBJETO (${p.objeto}) RECORTADO SOBRE FONDO COMPLETAMENTE TRANSPARENTE, sin decorado, sin suelo, sin sombra proyectada.`,
    `La celda 1 es EXACTAMENTE el estado del objeto en A; la celda ${n} es EXACTAMENTE el estado del objeto en B (con lo que el estado final añade: la mancha, la pluma); las celdas intermedias reparten la acción sin retroceder nunca. ${p.carta_texto || ""}`,
    "TODAS las celdas muestran la misma vista 9:16 completa, con la misma escala que en A: el objeto se mueve DENTRO de la celda como se movería dentro del fotograma, en la misma posición absoluta que tendría en A o en B. Nada de centrar el objeto en cada celda.",
    "Rejilla regular a sangre, SIN canales, bordes, líneas divisorias, etiquetas ni números.",
  ].join("\n"));
}
