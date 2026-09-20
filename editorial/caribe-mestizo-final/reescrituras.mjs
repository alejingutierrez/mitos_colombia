/**
 * Las fichas de este ciclo que ya se rehicieron, una por una.
 *
 * `catalog.mjs` guarda el inventario heredado —slug, título y un resumen sin
 * verificar— y `definition-helpers.mjs` los ocho marcos de grupo con los que se
 * compusieron las setenta fichas: la misma `historia` y las mismas 113 palabras
 * de `similitudes` para todas, el 86,6 % de las oraciones repetidas.
 *
 * Aquí vive lo contrario: lo que es de un solo mito. `records.mjs` fusiona este
 * mapa sobre el catálogo por slug, así que una ficha que aparezca abajo deja de
 * usar el marco en los campos que declare, y una que no aparezca sigue igual
 * que estaba. El ciclo se abre mito a mito, sin un corte grande.
 *
 * Cada entrada puede traer:
 *
 *   mito, historia, versiones, leccion, similitudes — los cinco campos, enteros
 *   sourceKeys      — sus fuentes: claves del pool, o { key, summary, limitation }
 *                     cuando lo que cambia es qué dice esa obra sobre ESTE relato
 *   relatoCorto     — la razón, cuando la fuente primaria no da para 300 palabras
 *   fuentesAgotadas — la razón, cuando el relato no sostiene ocho fuentes
 *   excerpt, seoTitle, seoDescription, researchNotes
 *
 * Lo escribe `importar-texto.mjs` desde
 * `content/editorial/caribe-mestizo-final/reescritura-<fecha>/<slug>.json`,
 * y antes de eso cada mito ha pasado por su acta de procedencia.
 */
export const caribeMestizoFinalReescrituras = {};

export default caribeMestizoFinalReescrituras;
