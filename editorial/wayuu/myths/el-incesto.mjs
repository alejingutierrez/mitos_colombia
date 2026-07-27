import { defineWayuuMyth } from "../define-editorial-myth.mjs";

const mito = `Dos hermanos vivían con su familia cerca del mar. Compartían comida, caminos y tareas, pero también una relación que debía permanecer dentro de los límites del parentesco.

La joven quedó embarazada. Cuando el vientre empezó a revelar lo ocurrido, el miedo entró en la casa. Los hermanos sabían que una unión entre ellos podía abrir un conflicto que no pertenecía solamente a dos personas: alcanzaba a madres, tíos y parientes de ambos lados.

Decidieron huir. Caminaron hacia la costa buscando un lugar donde nadie los reconociera. La mujer avanzaba con dificultad y el hombre la sostenía sobre la arena. Al llegar al agua, el paisaje pareció cerrarse alrededor de ellos.

Una fuerza que el relato atribuye a Mareiwa detuvo la fuga. Los cuerpos perdieron movimiento y quedaron convertidos en formas del litoral. La pareja no desapareció por completo: el territorio guardó su presencia como una señal que podía ser nombrada por quienes pasaran después.

Otra historia unida por el recopilador cuenta una transgresión entre un padre y su hija. También allí un embarazo vuelve visible una relación marcada por una desigualdad mayor. La joven no encuentra protección. Sube a un cerro y desde la altura termina con su vida.

El cerro recibió el nombre de Katetamana. La memoria no explica qué responsabilidad asumió el padre ni quién debía haber defendido a la hija. La narración se concentra en el cuerpo de ella y deja una ausencia que sigue siendo incómoda.

Los mayores señalaban el mar y la elevación cuando hablaban de esas historias. No eran solamente accidentes del paisaje. Eran marcas de relaciones que habían quebrado límites, silencios familiares y obligaciones de cuidado.

Con el tiempo, algunas personas llamaron “castigo” a toda la secuencia. Otras recordaron que no todas las partes tuvieron el mismo poder ni la misma posibilidad de escapar. Una hermana y un padre; una hija sin salida: las dos escenas no pueden juzgarse como si distribuyeran la responsabilidad de manera idéntica.

La piedra conserva el hecho, pero no dicta una lectura única. Quien escucha debe preguntar no solo qué norma se rompió, sino quién podía decidir, quién quedó expuesto y quién faltó cuando era necesario proteger.`;

const historia = `Chaves publicó bajo el título “El incesto” dos episodios: una relación entre hermano y hermana que termina en petrificación junto al mar y otra entre padre e hija asociada con el cerro Katetamana y el suicidio de la joven. El texto de 1946 los reúne por parentesco prohibido, pero no explica si su informante los narró como una sola unidad o si el editor los agrupó.

La palabra “incesto” describe una frontera social, pero puede ocultar diferencias decisivas de edad, autoridad, violencia y consentimiento. La relación padre-hija contiene una asimetría que impide repartir la responsabilidad como si se tratara de dos adultos con igual poder. La fuente no ofrece detalles suficientes para reconstruir la voz de la joven ni el papel de los parientes que debían protegerla.

El sistema de parentesco Wayuu es matrilineal y otorga funciones importantes a familiares maternos, incluido el tío. La documentación contemporánea sobre el Pütchipü’üi explica reparación y mediación entre clanes. No usamos esos datos para inventar un juicio que el relato no narra; sirven para evitar la falsa imagen de una sociedad regida únicamente por castigos sobrenaturales.

La reescritura mantiene los dos episodios porque así circulan en la fuente histórica, pero introduce la pregunta por poder y cuidado. No erotiza a las mujeres, no convierte el suicidio en moraleja romántica y no presenta la petrificación como prueba geológica.`;

const versiones = `La única versión narrativa localizada es la de Chaves, reeditada después por Villa Posse. Ambas publicaciones comparten texto y cadena de transmisión. No contamos con registro en wayuunaiki ni con el nombre del informante en la edición consultada, de modo que la literalidad de diálogos y topónimos debe tratarse con cautela.

El primer episodio desemboca en cuerpos asociados con el mar; el segundo fija el nombre de Katetamana. Algunas síntesis posteriores los presentan como dos castigos ejecutados directamente por Mareiwa. La fuente no desarrolla del mismo modo la intervención divina en ambos casos, por lo que esta revisión evita uniformarlos.

La ficha anterior añadía una lección general sobre obedecer reglas sociales y preservar la pureza de la comunidad. Esa formulación culpaba de manera abstracta y borraba las relaciones de poder. La lección revisada pone el énfasis en límites, protección y responsabilidad.

No se fusiona esta página con “La India Worunka” ni con “La sed de los civilizados”. Comparten cuerpos convertidos o ligados a piedra, pero sus conflictos narrativos son distintos: reproducción y parentesco, transformación del parto, y encuentro intercultural con la sed.`;

const leccion =
  "Los límites familiares solo protegen cuando también se reconoce quién tenía poder y quién necesitaba amparo.";

const similitudes = `Las Metamorfosis de Ovidio contienen uniones familiares prohibidas y cuerpos transformados, entre ellas la historia de Mirra. El paralelo muestra cómo distintas tradiciones inscriben una transgresión de parentesco en el cuerpo y el paisaje. No demuestra contacto ni permite trasladar la culpa, la genealogía o los dioses de una obra a la otra.

Dentro del corpus Wayuu, “La India Worunka” también sitúa reproducción y corporalidad femenina en el centro de una transformación. Worunka enlaza parto, alianzas y sequía; “El incesto” conserva dos daños familiares. Leerlas juntas revela cuánto de la organización social fue explicado sobre cuerpos de mujeres en registros producidos por investigadores varones.

“Serranías de La Guajira” y “La sed de los civilizados” convierten viajeros en relieve o piedra. Allí la transformación conserva movimiento, sed y territorio; aquí fija relaciones que no pudieron resolverse dentro de la familia. La repetición del motivo no lo vuelve un castigo idéntico.

La página puede dialogar con relatos universales sobre prohibiciones de parentesco, pero su lectura más responsable no busca una regla humana atemporal. Atiende la versión concreta, sus silencios y la desigualdad entre sus participantes.`;

export default defineWayuuMyth({
  slug: "el-incesto",
  title: "El incesto",
  mito,
  historia,
  versiones,
  leccion,
  similitudes,
  excerpt:
    "Dos episodios de parentesco prohibido quedan inscritos en el mar y en el cerro Katetamana, con responsabilidades que no son equivalentes.",
  seoTitle: "El incesto: relato Wayuu y lectura crítica",
  seoDescription:
    "Lee dos episodios Wayuu sobre parentesco prohibido, petrificación y Katetamana, con una revisión crítica de poder, cuidado y transmisión.",
  focusKeywords: [
    "El incesto Wayuu",
    "Katetamana",
    "mito Wayuu",
    "parentesco Wayuu",
    "petrificación en La Guajira",
    "Mareiwa",
  ],
  tags: ["Marelwa", "Wayúu", "castigo", "incesto", "transformación"],
  sourceKeys: [
    "chaves1946",
    "villa1993",
    "unescoPalabrero",
    "regimenMacuira",
    "minculturaWayuu",
    "ovidMetamorphoses",
  ],
  researchNotes: `NÚCLEO: dos episodios agrupados por Chaves, uno hermano-hermana y otro padre-hija; petrificación litoral y cerro Katetamana.

CAUTELA: la relación padre-hija es asimétrica; no se reparte responsabilidad sin atender poder, edad, protección y posible violencia.

MEDIACIÓN: no se localizó otra versión independiente ni registro en wayuunaiki.

IMAGEN: se preserva la existente sin regeneración.

GEOGRAFÍA: punto aproximado en la Alta Guajira; Katetamana no se georreferencia como hecho comprobado sin fuente territorial segura.`,
});
