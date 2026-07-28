import { defineNasaMyth } from "../define-editorial-myth.mjs";
import {
  composeNasaHistory,
  composeNasaSimilarities,
  composeNasaVersions,
} from "../compose-sections.mjs";

const mito = `Un hombre regresaba del mercado después de tomar chicha. Se emborrachó y quedó dormido junto al camino.

A medianoche despertó y reanudó la marcha. Vio un perro muy flaco y le pegó. Poco después apareció un hombre igual de delgado, con el corazón colgando fuera del cuerpo.

La figura echó a correr. El viajero corrió también. Más adelante levantó el fuete y golpeó lo que creía perseguir. Sin darse cuenta llegó a un terreno plano, cayó y volvió a dormirse.

Cuando amaneció, no encontró al perro ni al hombre. Vio flores machacadas. Durante la noche había estado azotándolas sin comprender qué tenía delante.

El relato no afirma que la figura fuera dueño del perro ni explica el corazón visible. Une agresión, miedo y percepción alterada: el hombre golpea primero al animal, después persigue una aparición y finalmente descubre que sus golpes cayeron sobre plantas.

En otra historia de Calderas también aparece un hombre flaco, pero actúa de manera opuesta. Era un alma luminosa que sostenía a un viajero borracho, evitaba que cayera en una zanja y lo acompañaba hasta casa sin hablar.

Una cabeza sola persigue a quien la golpea y lo encuentra por el olor. Animales invisibles rodean a otro caminante después de sus disparos. Estas narraciones comienzan con una acción humana —pegar, disparar, viajar bajo los efectos de la chicha— y devuelven una presencia que no se deja dominar.

El hombre y el perro flaco conserva la incertidumbre del amanecer. Quizá la persecución fue sobrenatural; quizá el estado del viajero trastornó lo que veía. La fuente no resuelve esa alternativa.

Lo verificable dentro del cuento son las flores dañadas. Al final, la violencia que se dirigía contra un perro y una figura imposible queda inscrita en seres frágiles del camino. El miedo desaparece con la luz, pero el daño permanece.`;

const historia = composeNasaHistory({
  informants:
    "Bernal registra la voz familiar “mi papá”, pero no consigna un nombre individual ni intérprete al final de esta entrada.",
  sourceDetail:
    "La historia preserva mercado, chicha, medianoche, perro, corazón colgando, fuete y flores. No identifica a la aparición como alma, diablo o castigo; esa apertura distingue el testimonio.",
  editorialDecision:
    "La revisión no presenta la borrachera como explicación definitiva ni el episodio como prueba objetiva de un ser sobrenatural. Conserva ambas posibilidades y separa esta página del hombre flaco protector.",
});

const versiones = composeNasaVersions({
  variantDetail:
    "No hay variantes enumeradas. La similitud de títulos con “El hombre flaco” no indica que sean dos versiones de un mismo encuentro: cambian la conducta, la luz, el perro, el corazón y el desenlace.",
  relationDetail:
    "La cabeza y los animales responden también a golpes o disparos en la noche. Esas conexiones forman un ciclo de percepción y peligro, pero cada narración conserva su objeto, su reacción y su marca al amanecer.",
});

const similitudes = composeNasaSimilarities({
  comparisonDetail:
    "Los cuentos de aparecidos suelen dejar al amanecer una señal material que obliga a revisar lo visto durante la noche. Aquí son flores machacadas. La estructura puede compararse, pero el mercado, la chicha, el fuete y el corazón visible pertenecen a esta memoria de Calderas.",
  internalDetail:
    "El hombre flaco protector ofrece el contraste ético más claro: un alma ayuda donde el viajero agrede. Los animales invisibles también retroceden ante la luz. La candela y el amanecer no solo iluminan; revelan la diferencia entre amenaza percibida y daño realizado.",
});

export default defineNasaMyth({
  slug: "el-hombre-y-el-perro-flaco",
  title: "El hombre y el perro flaco",
  mito,
  historia,
  versiones,
  leccion:
    "El miedo no justifica golpear, porque la violencia puede caer sobre lo más frágil.",
  similitudes,
  excerpt:
    "Un viajero golpea a un perro, persigue a un hombre con el corazón colgando y descubre al amanecer flores machacadas.",
  seoTitle: "El hombre y el perro flaco: relato Nasa",
  seoDescription:
    "Lee el relato Nasa del viajero, el perro flaco, la figura con el corazón colgando y las flores que revelan sus golpes al amanecer.",
  focusKeywords: [
    "hombre y perro flaco Nasa",
    "relatos nocturnos Calderas",
    "aparecidos Nasa",
    "mitología de Tierradentro",
    "cuento de la chicha",
    "encuentros sobrenaturales",
  ],
  tags: ["Nasa", "hombre", "miedo", "percepción", "encuentros sobrenaturales"],
  researchNotes: `NÚCLEO: testimonio familiar sin informante individual consignado.
DISTINCIÓN: no es variante del hombre flaco protector.
CAUTELA: no resolver como alucinación ni como ser objetivo.
GEOGRAFÍA: Calderas aproximado.
IMAGEN: se conserva el par publicado y auditado.`,
});
