/**
 * Ruta · Bosques y niebla
 *
 * Los mitos se declaran por SLUG: es la identidad estable de un relato en el
 * archivo. `label` es sólo la manera en que la curaduría nombra el relato dentro
 * de la ruta; si alguien corrige el título del mito, la ruta no lo pierde.
 *
 * Contrato completo del objeto: content/rutas/model.mjs
 */
export const ruta = {
  slug: "bosques-y-niebla",
  title: "Bosques y niebla",
  description:
    "Relatos en bosque húmedo donde la bruma guía y extravía.",
  detail: "Hojarasquín, duendes y sombras del monte.",
  tone: "Humedad y bruma",
  accent: "jungle",
  keywords: [
    "bosque",
    "niebla",
    "monte",
    "pacto",
    "cazador",
    "diablo",
    "redencion",
  ],

  /* Prosa editorial. Admite string o array de párrafos. */
  intro: [
    "En estos relatos el bosque no es un lugar peligroso: es un lugar con reglas. Y las reglas se aprenden de una sola manera, que es la que ordena la ruta: alguien entra, se equivoca, y el monte le responde con una lección que no siempre puede aprovechar.",
    "El primer tramo pertenece a los que ponen a prueba. El Domínguez tiene dos versiones que el archivo conserva juntas —la juguetona y la que se complica cuando trata con humanos—, y esa duplicidad es exactamente lo que hace difícil clasificarlo. El diablo del Puente del Común convierte una obra de ingeniería de la sabana en el escenario de un pulso entre la astucia humana y algo más grande. Y en el bosque katío, varios Costé atacan a los cazadores y cada uno exige descubrir una debilidad distinta: conocer una debilidad, apunta la ficha, permite sobrevivir, pero no vuelve dominable todo el monte.",
    "El segundo tramo es el de los pactos, y aquí el bosque se retira para dejar ver quién firma. El doctor Galeacer y don Anselmo hacen tratos que no fallan por maldad sino por lectura: alguna cláusula no se leyó. Son relatos con domicilio —Piedecuesta, San Juan de Girón— y personajes con nombre, y su humor no debe confundirse con ligereza: lo que está en juego es siempre lo mismo, quién se queda con qué.",
    "El tercer tramo cambia de tono y es el que justifica la ruta. En el monte también se sale bien parado. El guatín encadena engaños contra jaguar, oso, puma y ardilla, y cuando por fin sus perseguidores aceptan hacer la paz, el relato subraya que la inteligencia protege al pequeño pero la paz llega cuando termina la cadena de venganzas. Dos hermanos abandonados recuperan la vista y sobreviven a una mujer caníbal porque cooperan y escuchan a quien los orienta. Y un hombre moribundo asciende a una planicie, visita el palacio luminoso de María y regresa a contarlo con la regla más clara de esta página: una vida buena se reconoce por no maltratar, difamar ni humillar a los demás.",
  ],
  galleryIntro:
    "Diez relatos de monte donde el follaje impone reglas y alguien tiene que aprenderlas sobre la marcha.",
  closing: [
    "Conviven aquí dos maneras de escribir: fichas Katío, Nasa y Sikuani con narrador identificado, y leyendas mestizas recogidas en registro literario. La ruta no las mezcla para igualarlas, sino para que se lean unas al lado de otras.",
  ],

  /* Mito de portada. Debe estar en `myths`. */
  cover: "el-dominguez",

  /* Censo de la ruta: única fuente de pertenencia. Orden = orden de lectura. */
  myths: [
    { slug: "el-dominguez", label: "El Dominguez", featured: true },
    { slug: "los-muertos-en-el-monte", label: "Los muertos en el monte", featured: true },
    { slug: "el-diablo-del-puente-del-comun", label: "El diablo del puente del Común", featured: true },
    { slug: "el-doctor-galeacer", label: "El Doctor Galeacer" },
    { slug: "historia-de-un-viejo", label: "Historia de un viejo" },
    { slug: "coste", label: "Coste" },
    { slug: "el-dalo", label: "El dalo" },
    { slug: "el-guatin-astuto", label: "El guatín astuto" },
    { slug: "tal-para-cual", label: "Tal para cual" },
    { slug: "el-cazador", label: "El cazador" },
  ],

  /* Etapas del recorrido. `myths` referencia slugs ya declarados arriba.
     Migradas desde los `highlights` originales: conservan título y resumen,
     y esperan prosa larga y reparto de mitos por parte de la curaduría. */
  momentos: [
    {
      slug: "bruma-protectora",
      title: "Los que ponen a prueba",
      summary: "Presencias que no cierran el paso: lo condicionan, y cada una exige algo distinto.",
      prose: [
        "El Domínguez llega con sus dos versiones a cuestas —la del duende juguetón y la de su trato más difícil con la gente— y el archivo las conserva sin decidir cuál es la buena. El diablo del Puente del Común hace de una obra de la sabana el escenario de un pulso entre astucia y poder. Los Costé del bosque katío atacan por turnos, y cada uno obliga a descubrir una debilidad nueva: el último cazador sobrevive transformado en tigres. La lección es contenida y por eso vale: conocer una debilidad permite sobrevivir, pero no vuelve dominable todo el monte.",
      ],
      myths: ["el-dominguez", "el-diablo-del-puente-del-comun", "coste"],
    },
    {
      slug: "duendes-del-bosque",
      title: "La letra pequeña",
      summary: "Pactos con nombre y domicilio, que no fallan por maldad sino por lectura.",
      prose: [
        "El doctor Galeacer termina transformado y deja en Piedecuesta un legado que el pueblo siguió contando; el relato es explícito en su moraleja, que la astucia humana, cuando intenta burlarse de lo infernal, suele reservarse un destino peor que el planeado. En San Juan de Girón, don Anselmo y Cirilo cierran su trato con humor y sátira, que en este archivo no es lo contrario de la seriedad sino otra forma de llevar la cuenta. Y la casa de los muertos en el monte deja la advertencia estructural: un lugar puede parecer conocido y no serlo, y lo que lo delata es la lengua que allí se habla.",
      ],
      myths: ["el-doctor-galeacer", "tal-para-cual", "los-muertos-en-el-monte"],
    },
    {
      slug: "sombras-del-monte",
      title: "Salir bien parado",
      summary: "El monte también deja volver, y estos tres relatos explican con qué.",
      prose: [
        "El guatín encadena engaños contra animales más fuertes hasta que los perseguidores aceptan hacer la paz; la lección Chamí añade el matiz que el resto de la ruta necesitaba: la inteligencia protege al pequeño, pero la paz llega cuando termina la cadena de venganzas. En el llano, dos hermanos abandonados recuperan la vista, sobreviven a una mujer caníbal y reciben cuatro perros surgidos de su cabeza, y lo que los salva es cooperar y escuchar. El Dalo cierra con un hombre moribundo que asciende a una planicie, visita el palacio luminoso de María y vuelve a contar lo que vio. Enfrente, el cazador de la leyenda mestiza no vuelve de la suya.",
      ],
      myths: ["el-guatin-astuto", "historia-de-un-viejo", "el-dalo", "el-cazador"],
    },
  ],
};

export default ruta;
