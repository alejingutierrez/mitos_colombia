import { defineNasaMyth } from "../define-editorial-myth.mjs";
import {
  composeNasaHistory,
  composeNasaSimilarities,
  composeNasaVersions,
} from "../compose-sections.mjs";

const mito = `Dos muchachas bajaron desde el filo de Zenzepachi huyendo de los Pijaos. Llevaban papas y otros productos para alimentarse. Con herramientas de piedra y mucho trabajo abrieron un espacio en la montaña y comenzaron a vivir allí.

Un día llegaron sus perseguidores y mataron a una de ellas. La sobreviviente quedó sola. Se unió a un tigre y de esa relación nació Juan Chiracol. El tigre cuidaba al niño y llevaba carne del monte. Cuando Juan creció, su padre se internó de nuevo en la montaña.

Juan Chiracol conocía los sufrimientos que había pasado su madre. Era inteligente y decidió combatir a quienes la habían perseguido. Los enfrentó hasta liberar el lugar. Después, madre e hijo se trasladaron al sitio donde estaba el panteón y comenzaron a construir una iglesia.

Antes de partir, Juan reunió a la gente y dejó consejos. Las tierras no debían venderse porque pertenecían a la comunidad y por ellas se había luchado. Él se marcharía, pero seguiría observando desde la laguna de El Caspe.

El Caspe quedaba lejos, por los linderos de Até, y tenía fama de laguna brava. Cuando un árbol caía o una peña se desprendía, se decía que Juan Chiracol estaba regresando para reprender a quienes olvidaban sus palabras. Su voz se oía como un llamado prolongado desde la distancia.

El relato afirma que Juan no dejó descendencia. Su permanencia no dependía de hijos, sino de la vigilancia desde el agua, de los consejos y del vínculo entre la memoria de su madre y la defensa de la tierra.

En otra narración, Juan Chiracol aparece junto a Llíban. Ambos eran caciques de Calderas: Juan en la parte oriental y Llíban en la occidental. Tras vencer el peligro conversaron y tomaron caminos diferentes hacia sus lagunas. La historia conjunta confirma su alianza, pero mantiene dos destinos y dos nombres.`;

const historia = composeNasaHistory({
  informants:
    "Bernal atribuye el relato individual y la narración conjunta con Llíban a Agustín Muse.",
  sourceDetail:
    "La fuente presenta a Juan Chiracol como hijo de una mujer y un tigre, defensor de la tierra, consejero y presencia asociada a la laguna de El Caspe. El tigre no es un acompañante decorativo: forma parte de su nacimiento, cuida al niño y abastece a la familia.",
  editorialDecision:
    "La edición elimina coordenadas erróneas cercanas a Bogotá y usa Calderas como referencia aproximada. También evita representar a Juan con tocados o armas genéricas de otros pueblos; el contenido visual queda señalado para corrección.",
});

const versiones = composeNasaVersions({
  variantDetail:
    "Bernal publica un relato individual y otro que reúne a Juan Chiracol con Llíban. El primero detalla a la madre, el tigre, la iglesia, los consejos y El Caspe. El segundo lo presenta como cacique del oriente de Calderas y resume su acción junto al cacique occidental.",
  relationDetail:
    "No se fusionan las páginas: la narración individual explica un origen y una memoria materna que la historia conjunta no conserva. Llíban comparte defensa territorial y retiro a una laguna, mientras Juan Tama comparte el papel de autoridad cuya palabra continúa orientando.",
});

const similitudes = composeNasaSimilarities({
  comparisonDetail:
    "Las Metamorfosis de Ovidio incluyen descendencias extraordinarias y fronteras móviles entre humanidad y animalidad. El paralelo formal ayuda a reconocer un nacimiento no ordinario, pero el tigre de Juan Chiracol pertenece a la montaña, al cuidado familiar y a una historia territorial Nasa, no a una genealogía clásica.",
  internalDetail:
    "“El hombre tigre” vuelve sobre personas capaces de actuar como tigres, aunque con énfasis en caza, fuerza y robo. Llíban y Juan Tama se aproximan más por el liderazgo, la defensa de tierras y el regreso al agua. La madre sobreviviente distingue a Juan Chiracol dentro de ese conjunto.",
});

export default defineNasaMyth({
  slug: "juan-chiracol",
  title: "Juan Chiracol",
  mito,
  historia,
  versiones,
  leccion:
    "La tierra defendida permanece viva cuando sus consejos pasan de una generación a otra.",
  similitudes,
  excerpt:
    "Hijo de una mujer sobreviviente y un tigre, Juan Chiracol defiende la tierra y vigila desde la laguna de El Caspe.",
  seoTitle: "Juan Chiracol: cacique y mito Nasa",
  seoDescription:
    "Conoce a Juan Chiracol, hijo del tigre, defensor de Calderas y cacique que dejó consejos sobre la tierra antes de partir a El Caspe.",
  focusKeywords: [
    "Juan Chiracol",
    "mito Nasa Juan Chiracol",
    "laguna de El Caspe",
    "cacique de Calderas",
    "hijo del tigre",
    "Tierradentro",
  ],
  tags: ["Nasa", "Juan Chiracol", "tigre", "laguna", "resistencia"],
  researchNotes: `NÚCLEO: relato individual de Agustín Muse y relación con la entrada conjunta.
CAUTELA: se conserva “tigre” como término de la fuente; no se fuerza una especie zoológica.
GEOGRAFÍA: se retira la coordenada de Bogotá y se usa Calderas como aproximación; El Caspe no se geocodifica.
IMAGEN: el par existente requiere sustitución por iconografía genérica ajena al contexto Nasa.`,
});
