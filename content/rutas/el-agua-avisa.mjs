/**
 * Ruta · El agua avisa antes de venir
 *
 * Los mitos se declaran por SLUG. Contrato: content/rutas/model.mjs
 */
export const ruta = {
  slug: "el-agua-avisa",
  title: "El agua avisa antes de venir",
  description:
    "Ningún diluvio de este archivo llega por sorpresa: llega después de un sueño, de una piedra que suda o de alguien a quien nadie creyó.",
  detail: "Crecientes anunciadas, refugios mínimos y la geografía que dejaron.",
  tone: "Creciente y aviso",
  accent: "river",
  keywords: [
    "diluvio",
    "inundación",
    "creciente",
    "aviso",
    "laguna",
    "río",
  ],

  intro: [
    "«Guardianes del agua» habla del agua que ya tiene dueño y cobra. Esta ruta habla del agua en exceso, que primero avisa y después reordena. No es una colección de inundaciones: es un argumento sobre la advertencia.",
    "La estructura se repite con una precisión que sorprende. Entre los Kuiva, Namon anuncia que una gran inundación va a llegar y algunas personas se ríen: piensan que está mintiendo. Entre los Wayúu, Jururiana sueña con lluvias que borran los caminos y pide guardar semillas y asegurar animales oscuros antes de que cambie el cielo; unos obedecen y otros miran la mañana limpia. En el Perijá, la señal no es un sueño sino el cuerpo del territorio: una piedra que sudó, un árbol amanecido con las hojas al revés, un venado que se acercó a la casa sin huir. Y en una ficha amazónica de comunidad no atribuida, un mensajero recorre el valle avisando y un hombre de corazón duro se construye un horno de barro para reírse del agua.",
    "La causa, cuando el relato la nombra, suele ser una relación rota más que una maldad. Tacu desata la inundación tras la muerte accidental de Wiri. Chibchacum inunda la sabana que él mismo cuidaba y queda condenado a cargarla: cuando cambia de hombro, la tierra tiembla. Entre los Desana, Nügüye provoca el segundo incendio y Sëpïrõ desborda las aguas, y la lección advierte que una fuerza necesaria se vuelve destructiva cuando ignora la medida.",
    "Lo que casi ninguna otra ruta cuenta es el después. Aquí importa el equipaje: una semilla de maíz envuelta en hoja seca, una brasa escondida en una totuma, una casa redonda de piedra construida bajo tierra antes de que empezara a llover. Importa también la respuesta correcta, que nunca es suprimir el agua sino darle salida —la vara que parte la peña del Tequendama—, y el hecho, muy repetido, de que la creciente además funda: La Cocha y su isla, el río Páez que copia los zigzags de quien huyó, el mar que se forma cuando dos hermanos se encuentran, los Misak que llegan dentro de un derrumbe. En este archivo, sobrevivir no es fuerza: es haber escuchado a tiempo.",
  ],
  galleryIntro:
    "Diecisiete crecientes que empiezan con un aviso y terminan dejando un mapa.",
  closing: [
    "«El Diluvio (Guinadoma)» y «La Totuma de la Cocha» son fichas sin comunidad atribuida; entran aquí por lo que narran y no como testimonio de ningún pueblo en particular. El resto llega con fuente declarada y, en varios casos, con el nombre de quien contó.",
  ],

  cover: "la-piedra-que-flota",

  myths: [
    { slug: "la-piedra-que-flota", label: "La Piedra que Flota", featured: true },
    { slug: "el-indio-jururiana", label: "Jururiana y la gran lluvia", featured: true },
    { slug: "el-tequendama", label: "El Salto del Tequendama", featured: true },
    { slug: "el-diluvio-guinadoma", label: "El Diluvio (Guinadoma)" },
    { slug: "namon-y-la-inundacion", label: "Namon y la inundación" },
    { slug: "la-gran-inundacion", label: "La gran inundación y Wiri" },
    { slug: "chibchacum", label: "Chibchacum" },
    { slug: "nuguye-y-sepiro-fuego-y-creciente", label: "Nügüye y Sëpïrõ: fuego y creciente" },
    { slug: "el-diluvio", label: "El diluvio, la lechuza y el totumo" },
    { slug: "el-diluvio-y-las-hazanas-de-buinaima", label: "El diluvio y el origen de los bailes" },
    { slug: "huevo-de-chupaflor-el-diluvio-y-el-fuego", label: "Huevo-de-chupaflor, el diluvio y el fuego" },
    { slug: "el-mar", label: "El mar" },
    { slug: "formacion-del-rio-paez", label: "Formación del río Páez" },
    { slug: "cualanquizan", label: "Creación de La Cocha: el pilche y la laguna" },
    { slug: "origen-de-la-isla-la-corota", label: "El origen de la isla La Corota" },
    { slug: "creacion-misak-guambianos", label: "Los Pishau, hijos del agua" },
    { slug: "la-totuma-de-la-cocha", label: "La Totuma de la Cocha" },
  ],

  momentos: [
    {
      slug: "las-senales",
      title: "Las señales",
      summary:
        "Un sueño repetido, una piedra que suda, un mensajero en el valle: el agua se anuncia antes de llegar.",
      prose: [
        "El relato Yukpa trae la mejor descripción del aviso: la primera señal fue una piedra que sudó, la segunda un árbol amanecido con las hojas al revés, la tercera un venado que se acercó a la casa sin huir. Jururiana no espera señales del cielo: sueña, y traduce el sueño en instrucciones concretas —guardar semillas, asegurar animales— porque cuando cambie el cielo ya no habrá tiempo de buscar lo necesario. En el valle amazónico llega un mensajero de casa en casa. Y Namon avisa, sencillamente, y algunas personas se ríen. La ruta empieza aquí a propósito: el diluvio es lo segundo que pasa.",
      ],
      myths: [
        "la-piedra-que-flota",
        "el-indio-jururiana",
        "el-diluvio-guinadoma",
        "namon-y-la-inundacion",
      ],
    },
    {
      slug: "la-relacion-rota",
      title: "La relación rota",
      summary:
        "Cuando el relato nombra la causa, no es un capricho del cielo: es un vínculo que se quebró.",
      prose: [
        "En el llano, la muerte accidental de Wiri basta para que Tacu desate el agua, y la lección repara la lectura: cuidar a quien llega y escuchar las correcciones de los mayores sostienen la memoria colectiva. Chibchacum es el caso más duro, porque el que inunda es el mismo que protegía: acaba condenado a cargar la sabana que anegó, y sus temblores son el cansancio de esa carga. Entre los Desana, dos cataclismos encadenados —el fuego de Nügüye, la creciente de Sëpïrõ— completan una renovación que nadie quiso tan grande. La destrucción, aquí, es siempre desproporción, no maldad.",
      ],
      myths: ["la-gran-inundacion", "chibchacum", "nuguye-y-sepiro-fuego-y-creciente"],
    },
    {
      slug: "que-se-carga-en-la-canoa",
      title: "Qué se carga en la canoa",
      summary:
        "El equipaje mínimo con el que un mundo vuelve a empezar: una semilla, una brasa, un refugio pensado antes.",
      prose: [
        "Entre los Ette Ennaka, un hombre había construido de antemano una casa redonda de piedra bajo tierra, con pisos; lo que casi los pierde es la impaciencia de retirar una piedra del techo para ver el Sol. Después del agua, la gente prende fuego al monte para secar la tierra y por poco la incendia otra vez: sobrevivir una catástrofe, dice la ficha, exige cuidar también las acciones con las que se intenta reparar el mundo. Buinaima rescata humanidad, alimentos y fuego, y de ahí salen los bailes. Y en el relato Andoque, un hueso libera el diluvio y la recuperación del fuego necesita muchas ayudas distintas, ninguna suficiente por sí sola.",
      ],
      myths: [
        "el-diluvio",
        "el-diluvio-y-las-hazanas-de-buinaima",
        "huevo-de-chupaflor-el-diluvio-y-el-fuego",
      ],
    },
    {
      slug: "abrirle-cauce-no-quitarla",
      title: "Abrirle cauce, no quitarla",
      summary:
        "La respuesta correcta no es suprimir el agua sino darle salida y aceptar que abrirá caminos propios.",
      prose: [
        "Cuando la ira de Chibchacum inundó la sabana, Bochica no secó el agua: abrió con su vara la peña del Tequendama para devolverle cauce. La lección lo resume mejor que cualquier glosa —la fuerza que inunda y la que alimenta son la misma; solo cambia el cauce que se le abre—. En el Cauca, Tomás libera un río y Pedro corre a detenerlo, y cuando los dos se encuentran las aguas reunidas ya forman el mar: toda fuerza detenida conserva movimiento. Y Chautéh, que libera agua para calmar su sed, termina perseguido por una corriente que copia sus zigzags y funda con ellos el río Páez.",
      ],
      myths: ["el-tequendama", "el-mar", "formacion-del-rio-paez"],
    },
    {
      slug: "lo-que-la-creciente-dejo-fundado",
      title: "Lo que la creciente dejó fundado",
      summary:
        "Después del agua queda una laguna, una isla, un pueblo: la creciente no solo destruye, también funda.",
      prose: [
        "Dos memorias Quillacingas cuentan cómo un pilche se desbordó y formó La Cocha con sus cerros; en una de ellas, un acompañante se sube a una silla para no ser capturado, queda encantado y se convierte en la isla La Corota. Los Misak se cuentan a sí mismos como niños chumbados en los derrumbes que pare el agua. Y en La Cocha, la ficha mixta insiste en que la laguna no es un objeto turístico sino un ser con memoria: se visita como se visita a un mayor, saludando y dejando el lugar mejor de como se encontró. La ruta termina, entonces, en un lugar al que todavía se puede ir.",
      ],
      myths: [
        "cualanquizan",
        "origen-de-la-isla-la-corota",
        "creacion-misak-guambianos",
        "la-totuma-de-la-cocha",
      ],
    },
  ],
};

export default ruta;
