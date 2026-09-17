import { defineWayuuMyth } from "../define-editorial-myth.mjs";

const mito = `Un conflicto enfrentó a familias Ipuana y Jayariyú. Entre los Ipuana había un guerrero cuya resistencia parecía imposible. Entraba al combate, recibía heridas y volvía a levantarse.

La primera vez que cayó, sus parientes llevaron el cuerpo a la ranchería. Durante el duelo abrió los ojos y pidió sus armas. A pesar de las súplicas, regresó al enfrentamiento.

Volvió a caer. También la segunda vez recuperó el aliento. La repetición aumentó su fama y su confianza. Algunos dijeron que ninguna flecha podía retenerlo entre los muertos.

Sus adversarios observaron. Comprendieron que herirlo no bastaba. En el siguiente encuentro lo rodearon y separaron la cabeza del cuerpo. El guerrero no volvió.

La familia recibió restos que ya no podían confundirse con sueño o desmayo. Preparó el duelo y guardó sus armas. La invulnerabilidad había terminado en una muerte más extrema.

Tiempo después, el hijo del guerrero salió a cazar. La noche anterior soñó con una majayura, un cardón y una advertencia. El sueño le indicaba que no siguiera cierto camino.

El joven despertó decidido a demostrar que no heredaba miedo. Entró en el monte y encontró las señales del sueño. En vez de regresar, continuó.

Una presencia lo desorientó. Persiguió una presa entre cardones y no vio a quienes se acercaban. Murió lejos de la casa.

Cuando llevaron su cuerpo, la familia comprendió que la muerte del padre no había cerrado el conflicto ni su modo de entender el valor. El hijo había recibido una advertencia, pero confundió prudencia con cobardía.

Los mayores conservaron ambas partes de la historia: el hombre que volvió dos veces y fue decapitado; el hijo que rechazó un sueño y no volvió. Ninguno perdió la vida por falta de fuerza.

La fama del guerrero había enseñado a resistir, pero también había hecho difícil detenerse. En una disputa entre familias, cada retorno al combate daba a los otros motivos para buscar un daño definitivo.

Las armas quedaron guardadas durante el duelo. Para que no hubiera un tercer cuerpo, los parientes necesitaban otra clase de valentía: enviar la palabra antes que otro guerrero.`;

const historia = `Chaves atribuye el relato a Enrique Epinayú. La narración contiene dos generaciones: un combatiente Ipuana que revive dos veces y finalmente es decapitado, y su hijo, muerto después de desatender un sueño con majayura y cardón. La ficha anterior separaba destino e invulnerabilidad sin examinar la continuidad familiar.

Los nombres Ipuana, Jayariyú y Epinayú corresponden a clanes o identificaciones Wayuu. El relato histórico menciona un conflicto, pero no autoriza a describir relaciones actuales entre esos grupos como enemistad permanente. Tampoco debe usarse para reconstruir un combate real sin fechas, lugares o testimonios adicionales.

La decapitación no se presenta como detalle espectacular. Cumple una función narrativa: cuando el adversario parece regresar de toda herida, la violencia escala hasta asegurar que no pueda volver. El sistema normativo Wayuu ofrece palabra, compensación y reparación precisamente como recursos para interrumpir ciclos entre familias; no afirmamos que un Pütchipü’üi participara en este episodio.

El sueño del hijo introduce otro camino que tampoco se toma. Pineda y Perrin documentan el peso de los sueños en decisiones y peligro, pero no permiten traducir cada elemento de la escena con un diccionario fijo.

La revisión cambia el énfasis de “guerrero invulnerable” a escalada, herencia y posibilidad de detenerse.

También mantiene separados valor y temeridad: sobrevivir una herida puede producir prestigio, pero regresar por obligación social a una disputa no demuestra protección sobrenatural ilimitada.`;

const versiones = `La versión de Chaves, reeditada por Villa Posse, es la única secuencia directa localizada. No se halló un registro independiente del guerrero o de su hijo. La identificación del informante, Enrique Epinayú, se conserva como parte de la procedencia.

Algunas síntesis presentan las dos resurrecciones como prueba de un don sobrenatural; otras pueden entenderlas como recuperaciones de heridas o muertes aparentes. El relato funciona sin decidir médicamente qué ocurrió.

La majayura del sueño no se identifica con la joven de Puró ni con Pülowi. Los personajes femeninos sobrenaturales no son intercambiables. El cardón permanece como señal territorial cuya interpretación completa no está documentada.

No se fusiona con “Los dos hermanos” ni con Kuriruputá. Los tres relatos incluyen conflicto y parentesco, pero ofrecen desenlaces distintos: escalada generacional, venganza de una hermana y rescate por hermanas. Su lectura conjunta es más útil que una sola ficha genérica de guerreros.

La continuidad padre-hijo tampoco prueba una maldición hereditaria: muestra cómo prestigio, expectativa y conflicto pueden atravesar generaciones cuando no existe una salida reconocida a tiempo.`;

const leccion =
  "La resistencia deja de ser valentía cuando obliga a repetir una violencia que cada vez exige daños mayores.";

const similitudes = `“Los dos hermanos” muestra cómo una muerte puede activar una represalia amplia; el guerrero Ipuana muestra cómo sobrevivir y regresar también puede escalar el método del adversario. Ambas historias ayudan a entender por qué terminar un conflicto requiere algo distinto de vencer.

Kuriruputá cae en combate, pero sus hermanas lo rescatan y la trama se desplaza hacia reconstrucción y alianza. Ese desenlace contrasta con un combatiente que vuelve por decisión propia hasta que ya no puede hacerlo.

Relatos épicos de muchas culturas celebran héroes que resisten heridas o regresan de la muerte. El guerrero Ipuana se acerca a ese motivo, pero su historia no culmina en gloria: la invulnerabilidad produce decapitación y deja al hijo dentro de una expectativa peligrosa.

El sueño ignorado se relaciona con Jururiana, quien actúa después de una visión. La comparación no dice que todo sueño sea orden. Muestra dos modos narrativos de responder a una advertencia: consultarla y prepararse, o rechazarla para demostrar valor.`;

export default defineWayuuMyth({
  slug: "el-indio-guerrero-ipuana",
  title: "El guerrero Ipuana",
  mito,
  historia,
  versiones,
  leccion,
  similitudes,
  excerpt:
    "Un guerrero Ipuana regresa dos veces al combate, pero la violencia escala hasta alcanzarlo a él y después a su hijo.",
  seoTitle: "El guerrero Ipuana: relato Wayuu",
  seoDescription:
    "Lee el relato Wayuu del guerrero Ipuana que vuelve después de caer y de su hijo, con contexto sobre sueños, clanes y escalada de violencia.",
  focusKeywords: [
    "guerrero Ipuana",
    "mito Ipuana",
    "relato Wayuu",
    "invulnerabilidad",
    "sueños Wayuu",
    "conflicto entre clanes",
  ],
  tags: ["Caribe", "Ipuana", "destino", "invulnerabilidad", "muerte"],
  sourceKeys: [
    "chaves1946",
    "villa1993",
    "unescoPalabrero",
    "pineda1950",
    "perrin1980",
    "regimenMacuira",
    "minculturaWayuu",
  ],
  researchNotes: `CADENA: Enrique Epinayú -> Milcíades Chaves.

NÚCLEO: dos retornos del guerrero, decapitación, sueño del hijo con majayura/cardón, advertencia ignorada y segunda muerte.

CAUTELA: no proyectar enemistad contemporánea entre Ipuana y Jayariyú ni identificar todas las majayuras.

IMAGEN: preservada sin regeneración.

GEOGRAFÍA: punto aproximado; la fuente no ofrece lugar verificable del conflicto.`,
});
