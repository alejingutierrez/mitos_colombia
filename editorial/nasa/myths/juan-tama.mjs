import { defineNasaMyth } from "../define-editorial-myth.mjs";
import {
  composeNasaHistory,
  composeNasaSimilarities,
  composeNasaVersions,
} from "../compose-sections.mjs";

const mito = `Durante el tiempo de la lluvia grande, el día y la noche parecían durar lo mismo. Los médicos tradicionales habían observado las señales y avisaron a la comunidad que una laguna o una quebrada iba a dar a luz.

Las personas reunieron coca. Durante semanas, los sabedores prepararon el nacimiento y armonizaron el lugar. Cuando llegaron los rayos, la tempestad y la creciente de los ríos, caminaron de noche hacia el agua.

De la laguna salió un niño. Venía envuelto en un chumbe y llevaba como almohada un libro con títulos de los resguardos. Era Juan Tama, hijo del agua, de la estrella y del Trueno.

Los médicos lo recogieron y lo entregaron a mujeres jóvenes para que lo alimentaran. Las versiones recuerdan que sus nodrizas murieron. El niño creció en un tiempo marcado por violencia, despojo y ríos teñidos por la lucha.

Cuando estuvo preparado, Juan Tama comenzó a caminar. Recorrió montañas, ríos y límites del Cauca. No buscaba fundar un pueblo vacío, sino volver a orientar comunidades que ya existían y atravesaban conflictos.

Defendió los territorios y procuró que sus linderos fueran reconocidos. Enseñó que la tierra no debía venderse ni pasar a manos extrañas, que la autoridad debía sostenerse en comunidad y que la autonomía dependía de recordar las leyes propias.

En unas narraciones enfrentó invasiones españolas; en otras, conflictos con Pijaos o Misak. Cada comunidad sitúa el nacimiento en un agua cercana: Pátalo, el río Lucero, una quebrada de Pitayó u otros lugares. Ninguna laguna cancela a las demás.

Después de recorrer y aconsejar, Juan Tama regresó al agua. Algunas voces dicen que caminó por sí mismo hacia la laguna; otras, que la comunidad lo llevó. No murió como alguien separado del territorio: volvió al lugar que lo había dado a luz.

Desde allí su palabra continúa. El Trueno puede llamar a los Thê’jwala, las autoridades refrescan sus bastones y los mayores vuelven a narrar la historia según el sitio y el momento. Juan Tama permanece menos como retrato único que como orientación: agua, estrella, memoria, autoridad y defensa de una tierra que no termina de nacer.`;

const historia = composeNasaHistory({
  informants:
    "La página no depende de una sola voz: compara el análisis de Simone Ferrari sobre la obra bilingüe del diseñador Nasa Gustavo Yonda, un manuscrito de Álvaro Ulcué citado por Gustavo Wilches-Chaux y estudios de memoria de Tierradentro.",
  sourceDetail:
    "Juan Tama tiene además dimensión histórica. Documentos producidos entre 1698 y 1708 muestran a un cacique que solicitó reconocimiento de títulos territoriales ante la Real Audiencia. Una de esas memorias lo nombra hijo de la estrella y de la quebrada Tama. Mito, historia y acción jurídica no se separan de la misma manera que en una biografía occidental.",
  editorialDecision:
    "Su ausencia era la principal brecha del catálogo Nasa. Se incorpora como mito nuevo con trazabilidad propia, sin reemplazar a Llíban ni a Juan Chiracol. El Relato reúne solo elementos convergentes y marca las divergencias de lugar y adversarios.",
});

const versiones = composeNasaVersions({
  variantDetail:
    "Las versiones coinciden en un nacimiento acuático anunciado por tormenta, la intervención de médicos tradicionales, el crecimiento de una autoridad, la defensa territorial y el regreso a una laguna. Cambian el río o laguna de origen, los adversarios, la forma de crianza, los mandatos y la manera del retorno.",
  relationDetail:
    "Gustavo Yonda construyó una versión bilingüe y visual con mayores de Tierradentro; Álvaro Ulcué reelaboró el relato desde una perspectiva católica y caminante; otras transcripciones proceden de Macedonio Perdomo y Asdrúbal Plaza. Esta página no declara una de ellas canónica.",
});

const similitudes = composeNasaSimilarities({
  comparisonDetail:
    "El Popol Vuh presenta figuras que ordenan una comunidad en tiempos de prueba y cuya palabra vincula origen, territorio y continuidad. La comparación se limita a la función orientadora. Juan Tama nace del agua y la estrella, camina linderos y se relaciona con títulos de resguardo dentro de una historia Nasa propia.",
  internalDetail:
    "Llíban es hijo del Trueno o Trueno mismo, llega en una creciente, defiende la tierra y se retira a una laguna. Juan Chiracol deja consejos para no venderla y vigila desde El Caspe. Bernal ya observó semejanzas con Juan Tama; la nueva ficha hace visible esa red sin fusionar a los tres.",
});

export default defineNasaMyth({
  slug: "juan-tama",
  title: "Juan Tama de la Estrella",
  mito,
  historia,
  versiones,
  leccion:
    "La autonomía perdura cuando territorio, memoria y autoridad vuelven a cuidarse en comunidad.",
  similitudes,
  excerpt:
    "Juan Tama nace de una laguna durante la gran lluvia, recorre los linderos, defiende los resguardos y vuelve al agua.",
  seoTitle: "Juan Tama de la Estrella: mito fundacional Nasa",
  seoDescription:
    "Conoce el relato Nasa de Juan Tama: hijo del agua, la estrella y el Trueno, defensor de resguardos y autoridad que regresa a la laguna.",
  focusKeywords: [
    "Juan Tama de la Estrella",
    "mito fundacional Nasa",
    "hijo del agua y del Trueno",
    "laguna de Juan Tama",
    "resguardos Nasa",
    "Tierradentro",
  ],
  tags: ["Nasa", "Juan Tama", "trueno", "laguna", "liderazgo", "resistencia"],
  sourceKeys: [
    "ferrari2022",
    "wilches2005",
    "unicaucaMemory",
    "minculturaNasa",
    "cricTerritory",
    "onicNasa",
    "bernal1953",
  ],
  imagePromptHorizontal:
    "Maqueta artesanal de papel recortado y fibras naturales, composición horizontal 16:9. Noche de lluvia intensa en una laguna de páramo de Tierradentro; médicos tradicionales Nasa esperan en la orilla con jigras y bastones, mientras un niño envuelto en chumbe emerge del agua bajo una estrella y relámpagos. Ropa Nasa sobria y documentada, sin tocados panindígenas, sin texto, sin marcos, atmósfera sagrada y comunitaria.",
  imagePromptVertical:
    "Maqueta artesanal de papel recortado y fibras naturales, composición vertical 2:3, escena distinta. Juan Tama adulto camina por una cresta montañosa de Tierradentro señalando los límites del territorio; detrás, una comunidad Nasa sostiene bastones de autoridad y al fondo aparece la laguna bajo una estrella. Vestuario Nasa sobrio, sin plumas ni armaduras genéricas, sin texto, profundidad por capas y luz de amanecer.",
  researchNotes: `NUEVO: brecha central del universo Nasa; no existía en la base.
NÚCLEO: nacimiento acuático, tormenta, médicos, autoridad, defensa territorial y retorno.
VERSIONES: no fijar una laguna única; Pátalo, Lucero, Pitayó y otras comunidades conservan localizaciones propias.
HISTORIA: distinguir al cacique documentado y la memoria fundacional sin separarlos artificialmente.
GEOGRAFÍA: punto aproximado en Tierradentro; no se declara como lugar único del nacimiento.
IMAGEN: requiere par nuevo horizontal/vertical con escenas distintas antes de publicar.`,
});
