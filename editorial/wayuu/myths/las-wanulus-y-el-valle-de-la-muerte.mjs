import { defineWayuuMyth } from "../define-editorial-myth.mjs";

const mito = `Dos hermanos dejaron una zona de La Guajira donde el agua no alcanzaba para sus cultivos. Habían oído hablar de una tierra más húmeda, pero para llegar debían cruzar un valle que otras personas evitaban.

Caminaron de noche y descansaron cuando el sol era más fuerte. Usaron las estrellas para conservar el rumbo y repartieron el agua con cuidado. Encontraron huesos de animales y señales que no supieron reconocer.

Al salir del valle llegaron a un lugar verde. Construyeron una casa, abrieron una parcela y sembraron. Durante algunos días creyeron haber dejado atrás el peligro.

Después cambiaron los cantos de las aves. Cerca del fuego aparecieron dos ojos brillantes. El hermano mayor tomó un rifle y disparó.

Encontraron una gran serpiente. La llamaron wanurü, aunque las fuentes etnográficas no describen a Wanurü simplemente como una especie de serpiente. En los relatos puede adoptar formas animales o ser percibido por quien va a morir.

Esa noche uno de los hermanos soñó con una advertencia: habían matado una presencia y otra vendría a buscar reparación.

Los hermanos reforzaron la casa. Esperaron varios días, atentos a silbidos y huellas. Nada apareció de manera abierta, pero el miedo cambió su relación con la tierra que habían llamado fértil.

Comprendieron que llegar no equivalía a recibir permiso. Habían leído el valle como obstáculo vacío y a la serpiente como amenaza sin dueño. Ahora debían decidir si permanecer, regresar o buscar a quienes conocieran el lugar.

Visitaron una familia cercana. Contaron el sueño sin presentar el disparo como hazaña. Los mayores no confirmaron que dos Wanurü persiguieran a los viajeros. Les pidieron reconocer que el nombre no debía usarse para cualquier animal peligroso.

Los hermanos regresaron a recoger la cosecha y dejaron una parte sin tocar. Después se trasladaron a un lugar acompañado por parientes.

Nunca supieron si otra presencia los había seguido. El valle quedó en la memoria como un camino donde la sed, el miedo y el deseo de dominar una tierra podían confundirse.

Esta versión conserva la trama publicada en el sitio, pero no finge haber encontrado su fuente primaria. La llama “relato de documentación pendiente” y separa la serpiente narrativa de la identidad más compleja de Wanurü.`;

const historia = `No localizamos la fuente primaria de la trama de dos hermanos, valle, tierra fértil, rifle, serpiente y segunda Wanurü. No aparece entre las quince narraciones de Chaves ni entre los ciclos principales transcritos por Finol. La ficha previa presentaba su propio resumen como prueba de origen y añadía una comparación con la Hidra.

Según la instrucción del usuario, el vacío no obliga a despublicar. La revisión conserva la estructura reconocible, elimina prosa que afirmaba una tradición comprobada y marca el estado “documentación pendiente” tanto aquí como en las notas de investigación.

La identidad de Wanurü sí cuenta con respaldo. Pineda y Perrin la vinculan con enfermedad, muerte, seres peligrosos y apariciones; puede adoptar formas animales, pero no se reduce a “serpiente gigante vengadora”. Tampoco es un ayudante benévolo que luego cambia de bando, como sugería la ficha anterior.

El rifle, el cultivo y la migración sitúan la historia en un mundo de contacto y cambio tecnológico. No hay razón para remover esos elementos por no parecer antiguos.

La revisión evita romantizar la búsqueda de “tierra virgen”. Un territorio aparentemente vacío puede tener habitantes, dueños, memorias y límites. Esa cautela editorial no pretende sustituir el desenlace desconocido de una fuente que aún debe localizarse.

La nota de procedencia queda dentro del contenido visible y no solo en archivos técnicos, para que la incertidumbre acompañe el relato allí donde el público realmente lo lee.`;

const versiones = `La única versión disponible es la ficha publicada en la base de datos. Se trata como testimonio de circulación digital, no como fuente oral independiente. Sus frases sobre wanurü, estrellas y valle pudieron combinar materiales de procedencias distintas.

Pineda y Perrin corrigen el marco cosmológico: Wanurü se asocia con muerte y peligro, puede verse bajo formas variadas y no habla necesariamente como monstruo de aventura. Ninguno confirma a estos dos hermanos.

La nueva narración añade una consulta a mayores para hacer explícita la incertidumbre; no se atribuye a un informante ni se presenta como episodio tradicional. Es una intervención editorial visible que evita cerrar con una persecución inventada.

No se fusiona con Guanurú porque sus estados documentales son distintos: Guanurú se reconstruye a partir de notas etnográficas localizadas; el valle conserva una trama sin procedencia primaria. Tampoco se fusiona con Arámai, aunque ambas páginas mencionen Wanurü.

Si aparece una fuente verificable, esta ficha debe revisarse de nuevo y distinguir sus detalles de los añadidos digitales. Hasta entonces, ninguna fuente contextual se contará como confirmación de la trama ni de su desenlace.`;

const leccion =
  "Conservar un relato sin fuente exige declarar la incertidumbre y evitar que un nombre conocido legitime detalles inventados.";

const similitudes = `La Hidra griega produce nuevas amenazas cuando es herida, y la ficha anterior usaba esa comparación para explicar una segunda Wanurü. El parecido es superficial: aquí no hay múltiples cabezas ni héroe encargado de exterminar monstruos. Sin fuente primaria, la analogía no debe llenar los vacíos.

“Guanurú” y “Jirairay” muestran otros errores nacidos de juntar nombres Wayuu con categorías de demonio. Las tres páginas se corrigen de manera distinta: ordenar notas, devolver un término al canto y conservar una trama como documentación pendiente.

“La sed de los forasteros” y “Serranías de La Guajira” también narran desplazamientos bajo escasez de agua. El valle añade búsqueda agrícola y miedo sobrenatural, pero su falta de procedencia impide afirmar que pertenece a la misma tradición narrativa.

En cuentos de colonización, dos hermanos cruzan un espacio peligroso y fundan una parcela. Esta forma puede haber influido en la ficha digital. La posibilidad se registra como hipótesis, no como veredicto ni como evidencia de falsedad total.`;

export default defineWayuuMyth({
  slug: "las-wanulus-y-el-valle-de-la-muerte",
  title: "Las Wanurü y el valle de la muerte",
  mito,
  historia,
  versiones,
  leccion,
  similitudes,
  excerpt:
    "Dos hermanos cruzan un valle, matan una serpiente llamada wanurü y reciben una advertencia; la procedencia primaria de la trama sigue pendiente.",
  seoTitle: "Las Wanurü y el valle de la muerte",
  seoDescription:
    "Lee el relato de las Wanurü y el valle de la muerte con una advertencia editorial clara: su trama sigue sin fuente primaria localizada.",
  focusKeywords: [
    "Wanurü y valle de la muerte",
    "Wanurü Wayuu",
    "mito Wayuu sin fuente",
    "serpiente en La Guajira",
    "relatos Wayuu",
    "documentación de mitos",
  ],
  tags: ["bestias", "desierto", "sobrenatural", "supervivencia", "wanulu"],
  sourceKeys: [
    "pineda1950",
    "perrin1980",
    "perrin1979",
    "finol2007",
    "minculturaWayuu",
    "onicWayuu",
    "regimenMacuira",
  ],
  researchNotes: `ESTADO: DOCUMENTACIÓN PENDIENTE. No se localizó fuente primaria para hermanos/valle/serpiente/segunda Wanurü.

DECISIÓN: se conserva publicada por instrucción expresa; la incertidumbre se vuelve visible.

CORRECCIÓN: Wanurü no se reduce a serpiente gigante ni se valida la “maldición” con fuentes contextuales.

IMAGEN: se mantiene la imagen actual; no se generaron activos.

GEOGRAFÍA: punto aproximado y no un “valle de la muerte” oficialmente identificado.`,
});
