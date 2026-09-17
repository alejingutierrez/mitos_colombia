/**
 * Ruta · Fronteras y caminos
 *
 * Los mitos se declaran por SLUG: es la identidad estable de un relato en el
 * archivo. `label` es sólo la manera en que la curaduría nombra el relato dentro
 * de la ruta; si alguien corrige el título del mito, la ruta no lo pierde.
 *
 * Contrato completo del objeto: content/rutas/model.mjs
 */
export const ruta = {
  slug: "fronteras-y-caminos",
  title: "Fronteras y caminos",
  description:
    "Cruces de camino y viajes sagrados donde se prueban los pactos.",
  detail: "Puentes, trochas y viajes entre mundos.",
  tone: "Cruces y caminos",
  accent: "ember",
  keywords: [
    "camino",
    "viaje",
    "puente",
    "ultratumba",
    "infierno",
    "tunjo",
    "redencion",
  ],

  /* Prosa editorial. Admite string o array de párrafos. */
  intro: [
    "Esta ruta trata de los que cruzan. No de los que llegan a un sitio, sino de los que pasan de un lado a otro y tienen que volver, y de lo que el regreso exige.",
    "El archivo describe el procedimiento con una precisión que sorprende. Tras la muerte de su hija, Canoa-de-Piedra entra al monte y conoce a la gente que vive debajo de la tierra: el duelo, dice la ficha, puede abrir una búsqueda de conocimiento, pero no borra el riesgo de la venganza. Tsamani y sus cinco hermanos danzan durante años, siguen una alimentación rigurosa y se vuelven livianos hasta ocupar un lugar entre las estrellas; lo que abrió su camino no fue un rapto ni un accidente sino una disciplina compartida sostenida en el tiempo, capaz de convertir la memoria familiar en orientación para quienes quedan.",
    "Cruzar, entonces, no es un golpe de suerte: es una técnica. Y los relatos mestizos de esta página cuentan la versión picaresca de la misma idea. El viaje al cielo conserva varias versiones en las que los personajes y su dinámica de grupo se mantienen constantes. Jaime Restrepo llega hasta el infierno a buscar una mina de oro con una astucia que el relato celebra en clave de humor. El diablo del Puente del Común convierte un paso de la sabana en una negociación. Y el tunjo transforma penas en abundancia en las llanuras del Salitre, con la condición implícita que todo tunjo lleva.",
    "El tramo más humano es el de las compañías del camino. El hombre flaco es un alma delgada y luminosa que acompaña de noche a un viajero borracho, evita que se caiga y lo lleva hasta su casa; la ayuda, apunta la ficha, puede llegar en silencio y desde una presencia que primero causa miedo. Las dos muchachas de Kugï y Nokuerai siguen a los patos y solo una regresa. La vieja pierde sus huevos por quedarse mirando algo que la asombró. Y la visita del Libertador y el padre Valenzuela recuerda que en este archivo también los caminos de la historia se cuentan como leyenda.",
  ],
  galleryIntro:
    "Diez relatos sobre cruzar de un lado a otro y sobre lo que hace falta para volver.",
  closing: [
    "Cuatro de estas fichas —Andoque, Sikuani, Nasa y Huitoto— llegan con fuente declarada y describen el cruce como una técnica con reglas. Las demás lo cuentan en clave picaresca o urbana. La ruta las mantiene juntas porque el contraste es parte de lo que muestra.",
  ],

  /* Mito de portada. Debe estar en `myths`. */
  cover: "el-diablo-del-puente-del-comun",

  /* Censo de la ruta: única fuente de pertenencia. Orden = orden de lectura. */
  myths: [
    { slug: "el-diablo-del-puente-del-comun", label: "El diablo del puente del Común", featured: true },
    { slug: "kugi-y-nokuerai", label: "Kugï y Nokuerai", featured: true },
    { slug: "el-mundo-de-ultratumba", label: "El mundo de ultratumba", featured: true },
    { slug: "el-viaje-al-cielo", label: "El viaje al cielo" },
    { slug: "la-mina-de-oro-en-el-infierno", label: "La mina de oro en el infierno" },
    { slug: "el-tunjo", label: "El tunjo" },
    { slug: "la-vista-del-libertador", label: "La vista del libertador" },
    { slug: "el-hombre-flaco", label: "El hombre flaco" },
    { slug: "la-vieja-el-burro-y-los-huevos", label: "La vieja, el burro y los huevos" },
    { slug: "la-comida-para-los-muertos", label: "La comida para los muertos" },
  ],

  /* Etapas del recorrido. `myths` referencia slugs ya declarados arriba.
     Migradas desde los `highlights` originales: conservan título y resumen,
     y esperan prosa larga y reparto de mitos por parte de la curaduría. */
  momentos: [
    {
      slug: "viajes-sagrados",
      title: "Cruzar es una técnica",
      summary: "Dos relatos que describen el paso al otro lado como un procedimiento con reglas, no como un accidente.",
      prose: [
        "Canoa-de-Piedra entra al monte después de la muerte de su hija y conoce a la gente que vive debajo de la tierra; su ficha no adorna el resultado: el duelo puede abrir una búsqueda de conocimiento, pero no borra el riesgo de la venganza. Tsamani y sus cinco hermanos, en el llano, danzan durante largo tiempo y siguen una alimentación rigurosa hasta volverse livianos y ocupar un lugar entre las estrellas. Lo que los lleva allí no es un rapto ni una casualidad: es una disciplina sostenida entre varios, capaz de convertir la memoria de una familia en orientación para los que quedan.",
      ],
      myths: ["el-mundo-de-ultratumba", "la-comida-para-los-muertos"],
    },
    {
      slug: "pactos-de-camino",
      title: "La versión picaresca del cruce",
      summary: "Los mismos umbrales contados con astucia, humor y negociación.",
      prose: [
        "El viaje al cielo sobrevive en varias versiones donde los personajes y su dinámica de grupo se mantienen constantes aunque cambie el detalle: es un relato hecho para repetirse. Jaime Restrepo baja a buscar una mina de oro al infierno con una travesura que el archivo describe como astucia antioqueña. En la sabana, el diablo del Puente del Común convierte un paso concreto en una negociación entre la astucia humana y algo más grande. Y el tunjo, muñeco de oro de las llanuras del Salitre, transforma penas en abundancia con la condición que nunca se enuncia del todo pero que siempre está.",
      ],
      myths: [
        "el-viaje-al-cielo",
        "la-mina-de-oro-en-el-infierno",
        "el-diablo-del-puente-del-comun",
        "el-tunjo",
      ],
    },
    {
      slug: "puentes-y-umbrales",
      title: "Compañías del camino",
      summary: "Quién va con uno cuando ya es de noche, y qué pasa cuando nadie va.",
      prose: [
        "El hombre flaco es un alma delgada y luminosa que acompaña a un viajero borracho, evita que se caiga y lo conduce hasta su casa: la ayuda, dice la ficha, puede llegar en silencio y desde una presencia que primero causa miedo. Las dos muchachas de Kugï y Nokuerai siguen la ruta de los patos hasta el baile y solo una regresa, transformada —conocer el rumbo importa tanto como tener valor para emprender el viaje—. La vieja pierde sus huevos por quedarse mirando algo que la asombró, en el relato más ligero de la página. Y la visita del Libertador recuerda que también la historia viaja por estos caminos convertida en leyenda.",
      ],
      myths: [
        "el-hombre-flaco",
        "kugi-y-nokuerai",
        "la-vieja-el-burro-y-los-huevos",
        "la-vista-del-libertador",
      ],
    },
  ],
};

export default ruta;
