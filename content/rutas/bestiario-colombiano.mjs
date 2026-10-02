/**
 * Ruta · Bestiario colombiano
 *
 * Los mitos se declaran por SLUG: es la identidad estable de un relato en el
 * archivo. `label` es sólo la manera en que la curaduría nombra el relato dentro
 * de la ruta; si alguien corrige el título del mito, la ruta no lo pierde.
 *
 * Contrato completo del objeto: content/rutas/model.mjs
 */
export const ruta = {
  slug: "bestiario-colombiano",
  title: "Bestiario colombiano",
  description:
    "Criaturas que encarnan miedos, pactos y fuerzas del paisaje.",
  detail: "Bestias tutelares, serpientes y metamorfosis.",
  tone: "Sombras y fuego",
  accent: "ember",
  keywords: [
    "caiman",
    "tigre",
    "serpiente",
    "brujo",
    "transformacion",
    "bestia",
  ],

  /* Prosa editorial. Admite string o array de párrafos. */
  intro: [
    "Un bestiario suele leerse como un catálogo: qué criaturas existen y cómo son. Esta ruta lo lee de otra manera. Casi ninguna de estas bestias empezó siendo bestia, y casi ninguna es una fuerza natural: son personas que cambiaron de cuerpo, y el relato casi siempre dice por qué.",
    "El caso más limpio abre la página. Un hombre Ette Ennaka sueña con un caimán y el caimán se lo traga; escapa con una flecha, se recupera en el monte y vuelve sabiendo llamar la caza con un silbido que aprendió del animal. Su lección marca el tono de toda la ruta: sobrevivir a un peligro puede transformar el miedo en conocimiento, pero no borra la advertencia inicial. La bestia enseña; eso no la vuelve inofensiva.",
    "El segundo tramo es el de la transformación como capacidad. Entre los Ette Ennaka hay buenos brujos que curan y llaman la lluvia, y malos que pueden volver como tigres —como descubre un viajero que se acostó a dormir en una casa funeraria sin preguntar de quién era—. Entre los Nasa, cazadores, ladrones y caminantes se vuelven tigres según lo que persigan, y la ficha lo formula sin moraleja: la fuerza sin medida puede proteger, robar o perseguir, según el deseo que la conduzca. Aribamia se eleva como espuma de la tumba de un jaibaná, porque la muerte no corta de inmediato los vínculos de poder y compañía.",
    "El tercer tramo es el que más le cuesta al catálogo. La niña que se volvió serpiente no era una serpiente: era una niña llegada con la creciente a la que dejaron fuera de una fiesta porque no tenía vestido, y el archivo lo dice con todas las letras —excluir a quien desea participar puede transformar una herida íntima en peligro colectivo—. Tasime queda rayado como un tigre por una marca que su hermana puso para saber quién la visitaba de noche. El Hombre Caimán queda detenido entre dos cuerpos por un frasco equivocado. En los tres, la criatura es el resultado, no la causa.",
  ],
  galleryIntro:
    "Diez relatos leídos al revés: no qué criatura aparece, sino qué pasó antes de que lo fuera.",
  closing: [
    "Siete de estas diez fichas llegan con comunidad y narrador identificados. Las tres restantes —Hombre Caimán, la Vieja Colmillona— circulan sin atribución por medio país; se conservan aquí porque son parte real del repertorio, no porque puedan asignarse a un pueblo.",
  ],

  /* Mito de portada. Debe estar en `myths`. */
  cover: "el-hombre-que-sono-con-caiman",

  /* Censo de la ruta: única fuente de pertenencia. Orden = orden de lectura. */
  myths: [
    { slug: "el-hombre-que-sono-con-caiman", label: "El hombre que soñó con caimán", featured: true },
    { slug: "los-brujos", label: "Los brujos", featured: true },
    { slug: "el-hombre-caiman", label: "El hombre caimán", featured: true },
    { slug: "el-hombre-tigre", label: "El hombre tigre" },
    { slug: "el-tigre", label: "El tigre" },
    { slug: "la-nina-que-se-volvio-serpiente", label: "La niña que se volvió serpiente" },
    { slug: "yepa-castiaga-a-los-animales", label: "Yepá castiaga a los animales" },
    { slug: "aribamias", label: "Aribamias" },
    { slug: "tasime-el-incesto", label: "Tasime (El Incesto)" },
    { slug: "la-vieja-colmillona", label: "La vieja colmillona" },
  ],

  /* Etapas del recorrido. `myths` referencia slugs ya declarados arriba.
     Migradas desde los `highlights` originales: conservan título y resumen,
     y esperan prosa larga y reparto de mitos por parte de la curaduría. */
  momentos: [
    {
      slug: "metamorfosis",
      title: "Lo que la bestia enseña",
      summary: "Encuentros de los que alguien vuelve con un saber nuevo, sin que el peligro deje de serlo.",
      prose: [
        "El soñador Ette Ennaka es tragado por un caimán, escapa con una flecha, se recupera en el monte y regresa con un silbido para llamar la caza que le aprendió al animal. Es la estructura entera de este bestiario en un solo relato: el encuentro deja conocimiento y deja advertencia, y ninguna de las dos cosas anula a la otra. Yepá Huáke, al declarar que los animales permanecerán como animales, fija el marco: cambiar de cuerpo transforma relaciones y responsabilidades, y ninguna especie queda fuera del riesgo recíproco de vivir.",
      ],
      myths: ["el-hombre-que-sono-con-caiman", "yepa-castiaga-a-los-animales"],
    },
    {
      slug: "fieras-tutelares",
      title: "La transformación como capacidad",
      summary: "Volverse tigre no es aquí una maldición sino un poder que alguien maneja, bien o mal.",
      prose: [
        "Entre los Ette Ennaka la distinción es de oficio: los buenos brujos curan y llaman la lluvia; los malos pueden volver como tigres, y quien duerme en una casa funeraria sin preguntar de quién era lo descubre por su cuenta. Entre los Nasa, cazadores, ladrones y caminantes se vuelven tigres para enfrentar animales, buscar ganado o perseguir un bastón de oro: la misma fuerza, tres destinos según el deseo que la conduzca. En el llano, una mujer descubre un jaguar dentro de la casa Tsorueto, saca a sus hijos por el techo y avisa. Y Aribamia se eleva como espuma desde la tumba de un jaibaná.",
      ],
      myths: ["los-brujos", "el-hombre-tigre", "el-tigre", "aribamias"],
    },
    {
      slug: "advertencias",
      title: "Lo que la comunidad hizo antes",
      summary: "Tres criaturas que son el resultado de una exclusión, una marca o un error ajeno.",
      prose: [
        "La niña llegada con la creciente quería ir a misa y no tenía vestido; sus cuidadores salieron sin ella y la exclusión —no la maldad— produjo la serpiente que se volvió peligro para todos. Tasime queda rayado como un tigre por una marca de beé que su hermana puso para reconocer al visitante nocturno; la señal no lo castiga, lo revela. El Hombre Caimán queda atrapado a medio camino entre dos formas por un frasco equivocado en Plato. Y la Vieja Colmillona cierra el bestiario del lado de las versiones sin atribución, esas que el archivo conserva sabiendo que no puede documentarlas.",
      ],
      myths: [
        "la-nina-que-se-volvio-serpiente",
        "tasime-el-incesto",
        "el-hombre-caiman",
        "la-vieja-colmillona",
      ],
    },
  ],
};

export default ruta;
