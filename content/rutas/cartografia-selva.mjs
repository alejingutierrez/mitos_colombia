/**
 * Ruta · Cartografía de la selva
 *
 * Los mitos se declaran por SLUG: es la identidad estable de un relato en el
 * archivo. `label` es sólo la manera en que la curaduría nombra el relato dentro
 * de la ruta; si alguien corrige el título del mito, la ruta no lo pierde.
 *
 * Contrato completo del objeto: content/rutas/model.mjs
 */
export const ruta = {
  slug: "cartografia-selva",
  title: "Cartografía de la selva",
  description:
    "Relatos de monte donde la selva marca fronteras invisibles.",
  detail: "Mapas vivos, límites sagrados y guardianes del monte.",
  tone: "Selva y bruma",
  accent: "jungle",
  keywords: [
    "selva",
    "monte",
    "cazador",
    "tigre",
    "castigo",
    "venganza",
  ],

  /* Prosa editorial. Admite string o array de párrafos. */
  intro: [
    "Esta ruta parte de una idea sencilla y la sostiene: en la selva la orientación no es geográfica sino relacional. Lo que dice dónde estás no es el terreno sino con quién estás tratando, y el error que castigan estos relatos casi nunca es tomar el camino equivocado: es tratar mal a quien encontraste en él.",
    "La primera frontera es la lengua. Un hombre Ette Ennaka se pierde y llega a una casa levantada por los muertos; el lugar parece una casa conocida, pero él no entiende lo que allí se habla, y ese detalle —no el miedo— es lo que le permite reconocer el peligro y volver. Dos comerciantes alijuna cruzan Utta confiando en la panela que cargan, se apartan del camino conocido y pierden de vista a quienes sabían orientarse: entrar en un territorio, dice la ficha wayúu, exige escuchar a quienes lo conocen y no confundir mercancía con sustento.",
    "La segunda frontera es la caza. El morrocoyo herido no era un animal cualquiera: había sido gente, y la respuesta que da convierte la cercanía en distancia duradera. Yepá Huáke establece que los animales quedarán como animales, y con eso cambia quién puede comer y ser comido: ninguna especie queda fuera del riesgo recíproco de vivir. En el mismo registro, el cazador de la leyenda mestiza queda advertido por su propia obsesión.",
    "La tercera frontera es la que marca el poder mal aprendido. Dïïjoma cría la boa nacida de un aprendizaje que no completó, entra en su cuerpo y termina compartiendo su suerte; Juma pierde su atuendo y, mientras lo recupera, deja convertidos en piedra a quienes jugaron con él. Y hay dos relatos que son literalmente cartografía: Jitoma persigue al Tucán nombrando lugares durante el recorrido, y los patos de Kugï y Nokuerai siguen una ruta que las muchachas no supieron seguir. Una ruta narrada, apunta la ficha, guarda memoria del territorio y también de sus conflictos.",
  ],
  galleryIntro:
    "Diez relatos donde la selva se lee por las relaciones que impone, no por la forma del terreno.",
  closing: [
    "Ocho de estos diez relatos llegan con comunidad y narrador identificados —Ette Ennaka, Wayúu, Huitoto, Tucano—, y varias fichas advierten expresamente contra las lecturas fáciles: la de «Peleas entre el sobrino Conejo y el tío Tigre» aclara que su atribución huitoto no está confirmada.",
  ],

  /* Mito de portada. Debe estar en `myths`. */
  cover: "los-muertos-en-el-monte",

  /* Censo de la ruta: única fuente de pertenencia. Orden = orden de lectura. */
  myths: [
    { slug: "los-muertos-en-el-monte", label: "Los muertos en el monte", featured: true },
    { slug: "la-sed-da-los-civilizados", label: "La sed da los civilizados", featured: true },
    { slug: "el-morrocoyo", label: "El Morrocoyo", featured: true },
    { slug: "juma", label: "Juma" },
    { slug: "peleas-y-aventuras-entre-el-sobrino-conejo-y-el-tio-tigre", label: "Peleas y aventuras entre el sobrino conejo y el tío tigre" },
    { slug: "diijoma", label: "Dïïjoma" },
    { slug: "kugi-y-nokuerai", label: "Kugï y Nokuerai" },
    { slug: "jobiya-jitoma", label: "Jobiya Jitoma" },
    { slug: "yepa-castiaga-a-los-animales", label: "Yepá castiaga a los animales" },
    { slug: "el-cazador", label: "El cazador" },
  ],

  /* Etapas del recorrido. `myths` referencia slugs ya declarados arriba.
     Migradas desde los `highlights` originales: conservan título y resumen,
     y esperan prosa larga y reparto de mitos por parte de la curaduría. */
  momentos: [
    {
      slug: "fronteras-vivas",
      title: "Fronteras vivas",
      summary: "Lo que marca el límite no es el terreno: es no entender con quién se está tratando.",
      prose: [
        "La casa de los muertos en el monte es la mejor puerta de entrada a esta ruta porque su frontera es acústica: el hombre perdido reconoce el peligro cuando no entiende la lengua que allí se habla. La sed de los forasteros lo dice desde el otro lado: dos comerciantes se separan del camino conocido y de la gente que sabía orientarlos, y ninguna mercancía sustituye eso. Y Juma recorre el raudal de Jidïma buscando su atuendo mientras deja, a su paso, un paisaje poblado por seres detenidos.",
      ],
      myths: ["los-muertos-en-el-monte", "la-sed-da-los-civilizados", "juma"],
    },
    {
      slug: "senales-del-monte",
      title: "Rutas que alguien ya recorrió",
      summary: "Relatos que son, literalmente, cartografía: nombran lugares mientras avanzan.",
      prose: [
        "Nokaido huye con la mujer de Jitoma, y el héroe cambia de apariencia para perseguirlo nombrando lugares durante todo el recorrido: el relato es a la vez una venganza y un itinerario. Los patos de Kugï y Nokuerai siguen una ruta hasta el baile mientras dos muchachas se extravían y solo una vuelve, transformada. Y en la versión amazónica de las peleas entre Conejo y el tío Tigre, la atención y la palabra bastan para dar vuelta a una situación dominada por la fuerza; la ficha advierte que su atribución huitoto no está confirmada, y conviene tenerlo presente al leerla.",
      ],
      myths: [
        "jobiya-jitoma",
        "kugi-y-nokuerai",
        "peleas-y-aventuras-entre-el-sobrino-conejo-y-el-tio-tigre",
      ],
    },
    {
      slug: "guardianes-del-territorio",
      title: "La caza y sus consecuencias",
      summary: "Presencias que no castigan la presencia sino la manera: el trato roto vuelve sobre quien lo rompió.",
      prose: [
        "El morrocoyo había sido gente, y lo que sigue a la herida no es venganza de un monstruo sino una cadena de agresiones que convierte la semejanza en distancia. Yepá Huáke fija después la regla del mundo: los animales quedan como animales, y con eso cambia quién puede comer y ser comido —ninguna especie queda fuera del riesgo recíproco de vivir—. Dïïjoma muestra el reverso del poder: la boa nace de un aprendizaje que no completó, y cuando la destruyen, hombre y boa sufren juntos. Cierra el cazador de la leyenda mestiza, advertido por su propia obsesión.",
      ],
      myths: [
        "el-morrocoyo",
        "yepa-castiaga-a-los-animales",
        "diijoma",
        "el-cazador",
      ],
    },
  ],
};

export default ruta;
