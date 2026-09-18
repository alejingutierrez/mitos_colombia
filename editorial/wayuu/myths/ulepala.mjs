import { defineWayuuMyth } from "../define-editorial-myth.mjs";

const mito = `Ulépala se llevó a una joven y quiso reunir entre sus parientes los bienes necesarios para formalizar la unión. Partió con varios compañeros en busca de la dote. Durante su ausencia, la muchacha murió.

Cuando regresó, la encontró convertida en yolujaa. Intentó retenerla, pero la mujer ya pertenecía al mundo de los muertos. Ella le pidió acompañarla a la casa de sus parientes.

Viajaron hasta Jepira. En la orilla, la mujer dejó a Ulépala mientras avisaba a su familia. Hermanos, tíos y abuelas preguntaron por el visitante y ordenaron que fuera recibido.

Le dieron comida y un chinchorro. Ulépala quería recuperar la relación que había tenido con su compañera, pero ella se negaba. La muerte había cambiado su cuerpo y sus posibilidades. Él insistió durante varias noches.

Una abuela le propuso trabajar en un sembrado de algodón para aliviar la ansiedad. Ulépala aceptó. La tarea lo llevó a aprender que las cosas del otro mundo no siempre tenían la apariencia con que él las conocía.

Después emprendió un recorrido mayor. Llegó al dominio de Juyá, quien lo recibió como hijo o protegido y le dio órdenes difíciles. Pedía venados, conejos, patillas y auyamas, pero Ulépala veía personas.

Juyá le enseñó a interpretar las formas. Los jóvenes elegantes podían convertirse en venados; quienes jugaban aparecían después como conejos; personas de cuerpo o color particulares eran frutos. La enseñanza es violenta para un lector actual: conocer implica flechar cuerpos que primero parecen humanos.

Ulépala aprendió también labores de ganado, tejido, música y caza. No toda abundancia podía tomarse sin condición. Pülowi marcaba el límite de los lugares y seres que Juyá le mostraba.

Una anciana araña ayudó a Ulépala a regresar. Le indicó que guardara silencio durante dos ciclos de lluvia. Si contaba antes, perdería la vida.

De vuelta en casa, un amigo y su mujer insistieron. Ulépala empezó a relatar el viaje. Antes de terminar, una flecha de Mareiwa lo alcanzó; quienes escuchaban también murieron.

Juyá pidió el corazón de su protegido. Al extraerlo, se convirtió en un cardenal rojo cuyo canto anuncia la proximidad de las lluvias.

La historia no convierte el rapto inicial ni la insistencia sexual en derechos. Muestra que Ulépala debe aprender, tarde y con costo, que atravesar la muerte transforma relaciones, apariencias y permisos.`;

const historia = `José Enrique Finol transcribe “La historia de Ulépala” a partir de Ramón Paz Ipuana y la compara con “El viaje al más allá” recopilado por Michel Perrin. El ciclo de Ulépala es mucho más extenso que la ficha anterior y pasa por tres espacios: tierra familiar, Jepira y dominio de Juyá.

Paz Ipuana era escritor e investigador Wayuu. Finol reconoce la elaboración estética de su castellano. La historia no es una grabación sin intervención; tampoco pierde por ello su procedencia. La versión usa lenguaje amoroso para un inicio donde Ulépala rapta a una joven y para escenas donde insiste ante su negativa sexual. La revisión nombra consentimiento y evita convertir posesión en prueba de amor.

Jepira no es simplemente “paraíso” ni coordenada única. Fuentes territoriales y etnográficas la relacionan con el Cabo de la Vela, el mar y el destino de los muertos, dentro de prácticas funerarias y memorias que incluyen segunda sepultura.

El dominio de Juyá ocupa un segmento propio y por eso conserva una página enfocada, pero no se presenta allí como mito independiente. Esta ficha ofrece el arco completo: pérdida, mundo de muertos, aprendizaje, regreso, secreto, muerte y cardenal.

El relato fue publicado con detalle sexual y violencia. Se conserva su conflicto sin reproducir pasajes extensos ni convertir a la mujer muerta en obstáculo para el deseo masculino.`;

const versiones = `La versión de Paz Ipuana nombra a Ulépala, comienza con rapto y dote, desarrolla trabajo en Jepira y concluye con el corazón convertido en cardenal de Juyá. La versión de Perrin no nombra del mismo modo al protagonista y empieza con un viudo que llora hasta que su esposa muerta vuelve por él.

Ambas versiones atraviesan Jepira y el dominio de Juyá, presentan formas que deben reinterpretarse y terminan con una condición sobre el regreso. Cambian la relación inicial, el modo de llegar, diversos guardianes y el desenlace.

Finol las analiza en conjunto y distingue tres secuencias espaciales. Esta revisión sigue esa arquitectura, pero no adopta todas sus categorías estructuralistas como voz de la tradición.

“El viaje del más allá” conserva la versión Perrin. “Los dominios de Juyá” amplía el segmento compartido. No son tres mitos sin relación: son dos versiones y una lectura focal de un mismo ciclo.

La ficha de Ulépala se mantiene canónica por el nombre y el final del cardenal, mientras las otras páginas enlazan explícitamente esta procedencia.`;

const leccion =
  "Cruzar una frontera no concede derechos sobre quienes cambiaron ni permiso para divulgar todo lo aprendido al regresar.";

const similitudes = `Orfeo desciende al mundo de los muertos por Eurídice y la pierde al incumplir una condición. Ulépala también sigue a una mujer muerta y enfrenta una prohibición, pero Jepira, Juyá, Pülowi, parentesco y cardenal pertenecen a una cosmología distinta.

La versión Perrin, publicada como “El viaje del más allá”, es el paralelo interno directo. Las diferencias no son adornos: cambian la agencia de la mujer, el inicio del duelo, el recorrido y la manera de volver.

“Los dominios de Juyá” muestra personas que son animales o plantas desde otra perspectiva. “Jaichuasay” experimenta una transformación cercana al volverse venado. En un caso se aprende a cazar interpretando formas; en el otro, el cazador aprende desde el cuerpo de la presa.

Waleker, la araña tejedora, pertenece a otro relato, pero una anciana araña actúa como protectora del regreso de Ulépala. La semejanza de especie no demuestra que ambas sean el mismo personaje.`;

export default defineWayuuMyth({
  slug: "ulepala",
  title: "Ulépala",
  mito,
  historia,
  versiones,
  leccion,
  similitudes,
  excerpt:
    "Ulépala sigue a su compañera muerta hasta Jepira, aprende en el dominio de Juyá y muere al contar el viaje antes del plazo.",
  seoTitle: "Ulépala: viaje Wayuu a Jepira y Juyá",
  seoDescription:
    "Lee la historia Wayuu de Ulépala: Jepira, el dominio de Juyá, las formas cambiantes, el regreso y el cardenal que anuncia la lluvia.",
  focusKeywords: [
    "Ulépala",
    "historia de Ulépala",
    "Jepira",
    "dominio de Juyá",
    "viaje al más allá Wayuu",
    "cardenal de Juyá",
  ],
  tags: ["ULÉPALA", "Wayúu", "amor", "muerte", "transformación"],
  sourceKeys: [
    "finol2007",
    "pazIpuana",
    "perrin1980",
    "geografiasMiticas",
    "uisViaje",
    "uasbAlimentos",
    "ovidOrpheus",
  ],
  researchNotes: `CADENA: Paz Ipuana -> edición/análisis de Finol; elaboración literaria explícita.

NÚCLEO: rapto/dote, muerte, Jepira, negativa, algodón, Juyá, formas de animales/alimentos, regreso, secreto y cardenal.

RELACIÓN: El viaje del más allá es versión Perrin; Los dominios de Juyá es episodio focal del ciclo, no mito autónomo.

IMAGEN: se conserva la portada actual.

GEOGRAFÍA: punto aproximado de Jepira/Cabo de la Vela como paisaje de memoria, no coordenada literal de todo el más allá.`,
});
