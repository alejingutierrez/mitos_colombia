import { defineNasaMyth } from "../define-editorial-myth.mjs";
import {
  composeNasaHistory,
  composeNasaSimilarities,
  composeNasaVersions,
} from "../compose-sections.mjs";

const mito = `Los primeros habitantes de Calderas contaban que un joven desconocido llegó a vivir en uno de los filos de la parcialidad. Una muchacha comenzó a visitarlo con frecuencia. Cuando su madre le preguntaba adónde iba, ella decía que una culebra arrojaba torcazas muertas desde las ramas y que subía a recogerlas.

La joven quedó embarazada. Al nacer, el niño tenía sobre el cuerpo unas formas parecidas a gusanos. La madre advirtió que nadie debía quitarlas porque eran parte de su vida. Cierto día fue a trabajar a la labranza y dejó al pequeño dormido en la hamaca. El niño despertó mientras ella tardaba. La abuela se acercó, lo levantó, vio los gusanos y los retiró uno por uno. El niño murió.

Al regresar, la madre comprendió lo ocurrido. Reprochó a la abuela haber tocado aquello que debía dejarse en paz y corrió hacia una laguna cercana. Se lanzó al agua, pero no se ahogó: desapareció. También desapareció el joven que vivía en el filo.

Los médicos dijeron que la pareja continuaba viviendo dentro de la laguna. La abuela quiso obligar a la muchacha a salir y convocó una reunión de médicos. Ellos pidieron un zapallo quiteño y los trapos de una mujer menstruante, los unieron y los arrojaron al centro del agua. El procedimiento no devolvió a la pareja. El desconocido y la joven se trasladaron a la laguna de Santa Rosa.

La laguna de Calderas se secó. Según el relato, los barriales que quedaban en los potreros eran sus restos. La salida de la pareja se reconoció porque, hacia las cuatro de la tarde, una nube negra cruzó el lugar. La historia no explica quién era el joven ni convierte al niño en monstruo. Guarda el misterio de una relación entre el filo, la culebra, el cuerpo del recién nacido, los médicos y dos lagunas comunicadas por una fuga.`;

const historia = composeNasaHistory({
  informants:
    "Bernal atribuye el relato a Juan Petins y registra a Marco Antonio Penkue como intérprete.",
  sourceDetail:
    "La narración fue publicada como una sola secuencia, sin variantes enumeradas. Sus detalles —torcazas, gusanos vitales, hamaca, zapallo, trapos, Santa Rosa y nube negra— son específicos y se conservan sin sustituirlos por explicaciones médicas o morales externas.",
  editorialDecision:
    "La versión anterior embellecía escenas y afirmaba intenciones que la fuente no expresa. La revisión vuelve al orden documental, evita llamar demoníaco al recién nacido y presenta la práctica de los médicos como parte del relato, no como instrucción actual.",
});

const versiones = composeNasaVersions({
  variantDetail:
    "Bernal no publica una segunda versión de esta historia. La única voz atribuida es la de Juan Petins. Por ello se evita inventar identidades para el joven, la culebra o los gusanos. El texto solo afirma que los médicos situaron a la pareja dentro de la laguna y que después la trasladaron a Santa Rosa.",
  relationDetail:
    "El forastero bajo apariencia humana recuerda al viejo de “El Trueno”, mientras la desaparición acuática dialoga con Juan Tama, Llíban y Juan Chiracol. La semejanza es estructural: seres y autoridades pasan entre agua, cielo y territorio.",
});

const similitudes = composeNasaSimilarities({
  comparisonDetail:
    "Las Metamorfosis de Ovidio contienen uniones entre humanos y seres de naturaleza incierta, nacimientos extraordinarios y desapariciones en el paisaje. El parecido se limita a esa inestabilidad de las formas; el zapallo, la menstruación, la reunión de médicos y las lagunas de Calderas pertenecen a otra trama cultural.",
  internalDetail:
    "En el corpus de Calderas, “El Trueno” también presenta un desconocido que convoca una nube negra y se lleva personas hacia una laguna. “La niña que se volvió serpiente” enlaza infancia, agua y transformación, pero desarrolla otro conflicto: exclusión de una fiesta, ataque a una iglesia y caída de una serpiente.",
});

export default defineNasaMyth({
  slug: "la-visita-del-joven-desconocido",
  title: "La visita del joven desconocido",
  mito,
  historia,
  versiones,
  leccion:
    "Lo desconocido exige cuidado, escucha y respeto por advertencias que sostienen la vida.",
  similitudes,
  excerpt:
    "Una joven visita a un desconocido, pierde a su hijo y desaparece con él entre las lagunas de Calderas y Santa Rosa.",
  seoTitle: "La visita del joven desconocido: mito Nasa",
  seoDescription:
    "Conoce el relato Nasa de la joven, el niño de vida frágil y la pareja que desaparece entre dos lagunas de Tierradentro.",
  focusKeywords: [
    "joven desconocido Nasa",
    "mito de Calderas",
    "laguna de Santa Rosa",
    "relatos de Tierradentro",
    "mitología Nasa",
    "Juan Petins",
  ],
  tags: [
    "Nasa",
    "joven desconocido",
    "laguna",
    "misterio",
    "encuentros sobrenaturales",
  ],
  researchNotes: `NÚCLEO: se conserva la secuencia publicada por Bernal sin identificar al joven.
FUENTE: Juan Petins; intérprete Marco Antonio Penkue.
CAUTELA: no interpretar los gusanos como diagnóstico ni la práctica ritual como recomendación.
GEOGRAFÍA: Calderas aproximado; Santa Rosa queda mencionada sin fijar una coordenada narrativa exacta.
IMAGEN: se conserva el par publicado y auditado.`,
});
