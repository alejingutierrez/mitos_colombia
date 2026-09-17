import { defineNasaMyth } from "../define-editorial-myth.mjs";
import {
  composeNasaHistory,
  composeNasaSimilarities,
  composeNasaVersions,
} from "../compose-sections.mjs";

const mito = `Un hombre estuvo a punto de morir y sintió que su alma subía al cielo. Llegó a una planicie tan amplia que la mirada se perdía. A la entrada había bosque.

La Virgen le dijo que aquel terreno estaba destinado a sus hijos y que él también tendría una parte. El camino hacia el cielo empezaba siendo bueno, pero después se perdía entre vegetación. La senda más cerrada conducía al palacio de María Santísima.

El viajero había oído que no debía comerse el erizo. Quien lo hacía podía presentarse ante María vestido con las púas del animal. En el trayecto también estaba el diablo. No siempre podía sujetar a quien pasaba, pero llevaba garabatos para arrastrarlo.

Por eso el hombre invocaba a Dios y a María al acostarse y al levantarse. El palacio de la Virgen brillaba con una luz que enceguecía. Ella llevaba al Niño; solo en raras ocasiones lo ponía en otro lugar.

El hombre regresó y contó a sus semejantes lo que había visto. Algunas personas se burlaron. Él insistía en que la experiencia era sagrada y debía respetarse.

Explicó que al cielo llegaban los buenos. No los definía por riqueza ni rango, sino como quienes no maltrataban a otras personas, no hablaban mal de ellas y no se comportaban con rudeza.

La narración recibe el título “El dalo”, pero la fuente publicada no explica el término. Su centro es el testimonio de una experiencia cercana a la muerte: ascenso, camino que se vuelve difícil, encuentro con María, peligro del diablo, retorno y discusión con quienes no creen.

Dentro de Calderas, esta visión se relaciona con relatos nocturnos de almas, luces y caminos. El hombre flaco acompaña en silencio a un viajero e impide que caiga; aquí el alma atraviesa un paisaje luminoso y vuelve para hablar. En ambos casos, la frontera con la muerte no elimina la responsabilidad hacia otras personas.`;

const historia = composeNasaHistory({
  informants:
    "Bernal atribuye esta narración en primera persona a Agustín Muse; Marco Antonio Penkue figura como intérprete en la sección inmediata del artículo.",
  sourceDetail:
    "La entrada combina una experiencia personal de enfermedad con imágenes católicas y criterios morales explícitos. No debe presentarse como mapa doctrinal completo del más allá Nasa ni como prueba clínica de un viaje literal.",
  editorialDecision:
    "La revisión conserva la primera persona y reconoce el carácter sagrado que el narrador reclama. No define “dalo” sin evidencia lingüística, no corrige la visión para ajustarla a una teología oficial y no convierte la burla de otros en consenso comunitario.",
});

const versiones = composeNasaVersions({
  variantDetail:
    "Bernal no publica otra versión de “El dalo”. La única voz es la de Agustín Muse, quien relata su propia cercanía a la muerte. El texto no aclara cuánto duró, quién lo cuidaba ni cómo regresó al cuerpo; tampoco traduce el título.",
  relationDetail:
    "El hombre flaco es llamado alma y lleva luz en un camino nocturno; la cabeza anda de noche y vuelve a una casa con parientes. Estas páginas muestran relaciones distintas con los muertos y no deben fusionarse en una doctrina única.",
});

const similitudes = composeNasaSimilarities({
  comparisonDetail:
    "Numerosas tradiciones describen un viaje del alma por caminos que conducen a una morada luminosa y un retorno para testimoniar. El dalo comparte esa estructura, pero su bosque, el erizo, los garabatos, la Virgen con el Niño y la definición de bondad pertenecen a la voz concreta registrada en Calderas.",
  internalDetail:
    "El hombre flaco protege a un viajero borracho sin hablar; el diablo desaparece por una puerta en la quebrada. El dalo reúne luz, camino y juicio moral desde la perspectiva de quien estuvo moribundo y volvió, no desde un encuentro externo.",
});

export default defineNasaMyth({
  slug: "el-dalo",
  title: "El dalo",
  mito,
  historia,
  versiones,
  leccion:
    "Una vida buena se reconoce por no maltratar, difamar ni humillar a los demás.",
  similitudes,
  excerpt:
    "Un hombre moribundo asciende a una planicie, visita el palacio luminoso de María y vuelve para contar lo que vio.",
  seoTitle: "El dalo: visión del más allá en Calderas",
  seoDescription:
    "Lee el testimonio Nasa de El dalo: un viaje del alma, el palacio de María, un camino difícil y una enseñanza sobre el buen trato.",
  focusKeywords: [
    "El dalo Nasa",
    "visión del más allá Calderas",
    "Agustín Muse",
    "relatos Nasa de la muerte",
    "María Santísima Nasa",
    "mitología de Tierradentro",
  ],
  tags: ["Nasa", "alma", "ascensión", "María Santísima", "moralidad"],
  researchNotes: `NÚCLEO: testimonio en primera persona de Agustín Muse.
CAUTELA: no definir “dalo” ni convertir el relato en teología Nasa general.
GEOGRAFÍA: Calderas aproximado; el cielo no se geocodifica.
IMAGEN: se conserva el par publicado aunque ambos encuadres son semejantes; cumple doble formato.`,
});
