/**
 * Ruta · Criaturas nocturnas
 *
 * Los mitos se declaran por SLUG: es la identidad estable de un relato en el
 * archivo. `label` es sólo la manera en que la curaduría nombra el relato dentro
 * de la ruta; si alguien corrige el título del mito, la ruta no lo pierde.
 *
 * Contrato completo del objeto: content/rutas/model.mjs
 */
export const ruta = {
  slug: "criaturas-nocturnas",
  title: "Criaturas nocturnas",
  description:
    "Apariciones y lamentos que se cuentan para sobrevivir la noche.",
  detail: "Sombras, lamentos y presencias al filo de la noche.",
  tone: "Noches rituales",
  accent: "ink",
  keywords: [
    "fantasma",
    "diablo",
    "pacto",
    "noche",
    "bus",
    "guango",
    "misterio",
  ],

  /* Prosa editorial. Admite string o array de párrafos. */
  intro: [
    "Estos relatos se cuentan de noche y tratan de la noche, pero su asunto real es otro: la advertencia. Casi todos empiezan con alguien a quien le dijeron algo y decidió no hacer caso.",
    "El archivo lo formula sin rodeos en el relato andoque. Un visitante desoye las advertencias, se planta frente a un fantasma convencido de que la bravata basta, y descubre que no basta: desoír una advertencia por orgullo, dice la ficha, puede dejarnos sin respuesta frente a un peligro real. Esa frase sirve de llave para el resto de la página. El diablo del Puente del Común mide astucia contra poder en la sabana de Bogotá. Taik se hace pasar por el tío de dos muchachas para llevarlas a quemar hormigas arrieras. Y la niña de la carta llega envuelta en un contexto social y académico que el archivo describe porque es lo que le da peso al relato.",
    "El segundo tramo es el del pacto que vence. El doctor Galeacer y Damián Vásquez Montiel firman en Piedecuesta y en la Villa de Arma tratos cuyo problema nunca fue el precio sino la letra. Son historias con domicilio y con nombre propio, y el título de una de ellas es ya la sentencia entera.",
    "El tercer tramo desmonta el género desde dentro, y por eso vale la pena. El fantasma de El Horizonte, que aterró a Piedecuesta, era un burro disfrazado. La crónica colonial de Arma habla de humo, flores y una presencia de ojos luminosos, pero el archivo demuestra que la palabra Calgari no significaba diablo: leer un archivo colonial, advierte la ficha, exige separar la experiencia registrada de las categorías impuestas por quien la narró. Y el guando conserva prácticas funerarias precolombinas transformadas por la influencia colonial en una leyenda de castigo moral. Bajo la aparición hay casi siempre otra cosa: un animal, un traductor, un rito que cambió de dueño.",
  ],
  galleryIntro:
    "Diez relatos nocturnos leídos por lo que advierten y por lo que esconden debajo de la aparición.",
  closing: [
    "Ocho de estas diez fichas llegan sin comunidad atribuida. Dos —la andoque y la de Arma— vienen con fuente y con una advertencia metodológica incorporada, y son las que permiten leer a las otras ocho con más cuidado del que suele dárseles.",
  ],

  /* Mito de portada. Debe estar en `myths`. */
  cover: "el-diablo-del-puente-del-comun",

  /* Censo de la ruta: única fuente de pertenencia. Orden = orden de lectura. */
  myths: [
    { slug: "el-diablo-del-puente-del-comun", label: "El diablo del puente del Común", featured: true },
    { slug: "los-fantasmas", label: "Los fantasmas", featured: true },
    { slug: "el-doctor-galeacer", label: "El Doctor Galeacer", featured: true },
    { slug: "el-fantasma-de-el-horizonte", label: "El fantasma de El Horizonte" },
    { slug: "no-hay-deuda-que-no-se-pague", label: "No hay deuda que no se pague" },
    { slug: "el-diablo", label: "El diablo" },
    { slug: "el-guango", label: "El guango" },
    { slug: "el-bus-fantasma", label: "El bus fantasma" },
    { slug: "taik", label: "Taik" },
    { slug: "la-nina-de-la-carta", label: "La niña de la carta" },
  ],

  /* Etapas del recorrido. `myths` referencia slugs ya declarados arriba.
     Migradas desde los `highlights` originales: conservan título y resumen,
     y esperan prosa larga y reparto de mitos por parte de la curaduría. */
  momentos: [
    {
      slug: "lamentos",
      title: "El que no hizo caso",
      summary: "Casi todo empieza con alguien a quien le avisaron y decidió seguir de largo.",
      prose: [
        "El visitante andoque desoye las advertencias, enfrenta al fantasma con bravata y descubre que la bravata no es una respuesta; su lección funciona como llave de toda la página. El diablo del Puente del Común pone a prueba la astucia humana sobre una obra concreta de la sabana. Taik engaña a dos muchachas haciéndose pasar por su tío para llevarlas a quemar hormigas arrieras, que es la clase de detalle doméstico con que estos relatos se vuelven creíbles. Y la niña de la carta llega con el respaldo de un contexto social y académico que el archivo describe en vez de omitir.",
      ],
      myths: [
        "los-fantasmas",
        "el-diablo-del-puente-del-comun",
        "taik",
        "la-nina-de-la-carta",
      ],
    },
    {
      slug: "rituales-nocturnos",
      title: "La firma y el plazo",
      summary: "Pactos con nombre y domicilio: el problema nunca fue el precio sino la letra.",
      prose: [
        "El doctor Galeacer queda en la memoria de Piedecuesta por una transformación que el relato no ahorra. En la Villa de Arma, Damián Vásquez Montiel, el perulero, desaparece llevándose la respuesta, y el título del relato es ya toda su moraleja. Los dos comparten estructura con un tercer nocturno de esta ruta: el bus fantasma, donde la lucha del narrador es interna y lo que busca no es escapar sino redimirse. En los tres casos la noche no es el peligro: es el plazo.",
      ],
      myths: ["el-doctor-galeacer", "no-hay-deuda-que-no-se-pague", "el-bus-fantasma"],
    },
    {
      slug: "apariciones",
      title: "Lo que había debajo",
      summary: "Tres relatos que desmontan la aparición y muestran qué la producía.",
      prose: [
        "El fantasma de El Horizonte tuvo aterrado a Piedecuesta y era un burro disfrazado; el archivo lo conserva sin ironía, porque el susto fue real aunque la causa no lo fuera. La crónica de Arma describe humo, flores y una presencia de ojos luminosos, y la ficha demuestra que Calgari no significaba diablo: leer un archivo colonial exige separar la experiencia registrada de las categorías con que quien la narró la clasificó. Y el guando resulta ser una práctica funeraria precolombina transformada por la influencia colonial en leyenda de castigo moral. Debajo de la aparición hay un animal, un traductor o un rito con dueño nuevo.",
      ],
      myths: ["el-fantasma-de-el-horizonte", "el-diablo", "el-guango"],
    },
  ],
};

export default ruta;
