/**
 * Censo de rutas editoriales.
 *
 * El ORDEN de este array es el orden de publicación: /rutas numera las bandas
 * por posición y la portada usa el mismo índice. Añadir una ruta al final no
 * renumera las existentes.
 *
 * Para añadir una ruta: crear `content/rutas/<slug>.mjs` siguiendo el contrato de
 * `content/rutas/model.mjs`, importarla aquí y añadirla al array. `scripts/rutas.test.mjs`
 * valida el resultado.
 */
import guardianesDelAgua from "./guardianes-del-agua.mjs";
import cartografiaSelva from "./cartografia-selva.mjs";
import bestiarioColombiano from "./bestiario-colombiano.mjs";
import bosquesYNiebla from "./bosques-y-niebla.mjs";
import criaturasNocturnas from "./criaturas-nocturnas.mjs";
import ritosDelMar from "./ritos-del-mar.mjs";
import fronterasYCaminos from "./fronteras-y-caminos.mjs";
import vocesUrbanas from "./voces-urbanas.mjs";
import montanasParamos from "./montanas-paramos.mjs";
import laPiedraGuardaLaSentencia from "./la-piedra-guarda-la-sentencia.mjs";
import elPrimerFuegoLaPrimeraSemilla from "./el-primer-fuego-la-primera-semilla.mjs";
import antesDeQueHubieraLuz from "./antes-de-que-hubiera-luz.mjs";
import elAguaAvisa from "./el-agua-avisa.mjs";
import elMonteSeCierra from "./el-monte-se-cierra.mjs";
import elCuerpoComoPrueba from "./el-cuerpo-como-prueba.mjs";
import elHijoQueNacioAlOtroLado from "./el-hijo-que-nacio-al-otro-lado.mjs";
import elPequenoQueGana from "./el-pequeno-que-gana.mjs";
import laRiquezaQueCobra from "./la-riqueza-que-cobra.mjs";
import losQueLlegaronDelOtroLadoDelMar from "./los-que-llegaron-del-otro-lado-del-mar.mjs";

export const RUTAS = [
  /* Las nueve originales. Su orden no cambia: /rutas las numera por posición. */
  guardianesDelAgua,
  cartografiaSelva,
  bestiarioColombiano,
  bosquesYNiebla,
  criaturasNocturnas,
  ritosDelMar,
  fronterasYCaminos,
  vocesUrbanas,
  montanasParamos,
  /* Tanda 2 · diez rutas nuevas, en orden de publicación. */
  laPiedraGuardaLaSentencia,
  elPrimerFuegoLaPrimeraSemilla,
  antesDeQueHubieraLuz,
  elAguaAvisa,
  elMonteSeCierra,
  elCuerpoComoPrueba,
  elHijoQueNacioAlOtroLado,
  elPequenoQueGana,
  laRiquezaQueCobra,
  losQueLlegaronDelOtroLadoDelMar,
];

export default RUTAS;
