/**
 * Ruta · Guardianes del agua
 *
 * Los mitos se declaran por SLUG: es la identidad estable de un relato en el
 * archivo. `label` es sólo la manera en que la curaduría nombra el relato dentro
 * de la ruta; si alguien corrige el título del mito, la ruta no lo pierde.
 *
 * Contrato completo del objeto: content/rutas/model.mjs
 */
export const ruta = {
  slug: "guardianes-del-agua",
  title: "Guardianes del agua",
  description:
    "Guardianes, pactos y relatos donde el agua dicta el equilibrio del territorio.",
  detail: "Ríos sagrados, lagunas encantadas y pactos con el agua.",
  tone: "Ríos y neblina",
  accent: "river",
  keywords: [
    "agua",
    "laguna",
    "mohan",
    "poira",
    "madre",
    "tesoro",
    "pescadores",
  ],

  /* Prosa editorial. Admite string o array de párrafos. */
  intro: [
    "El agua de esta ruta ya existe y ya tiene dueño. No se trata de su origen —eso ocurre en otra página— sino de la relación que impone: quién la custodia, qué pide a cambio y qué pasa cuando alguien decide que puede tomarla sin preguntar.",
    "La figura del guardián aparece en registros muy distintos y conviene no confundirlos. Entre los Emberá Chamí hay un guardián que la retiene: Karagabí descubre el jenené de Héntserá, lo derriba con su gente, y la raíz se vuelve mar mientras las ramas forman los ríos; el agua, dice esa ficha, se vuelve común mediante observación y cooperación. En Jeguada, en cambio, el agua no se guarda sino que se cría: pequeños seres crecen hasta volverse jepás, y los jaibanás tienen que conducirlos por los ríos y juzgar a la culpable. Ninguno de los dos relatos habla de castigo caprichoso; los dos hablan de un trabajo que alguien tiene que hacer.",
    "El registro cambia por completo cuando el agua entra en la leyenda mestiza. Ahí el guardián se vuelve tesoro y el tesoro se vuelve prueba: en las lagunas encantadas se entrelazan creencias indígenas y coloniales; el Carriazo de la vereda San Isidro pone pruebas míticas a quien busca lo enterrado; el Reventón de Jacobo, en Piedecuesta, transforma el destino de un hombre por un encuentro con lo escondido; y en los Llanos, el tesoro de Caribare junta un relato indígena del diluvio con la narrativa histórica de un tesoro jesuita. Son piezas de otra generación editorial —prosa florida, sin fuente declarada— y se leen aquí junto a las anteriores para que la diferencia se note.",
    "El tercer tramo es el del agua que corrige. Zequiel es una historia de amor, traición y justicia a orillas del Caimán, con tensiones sociales muy concretas debajo. En el Amazonas, dos muchachas se extravían siguiendo la ruta de los patos hacia el baile, y solo una regresa: conocer el rumbo, remata la ficha, importa tanto como tener valor para emprender el viaje. Y Plumón-amarillo reúne a los sobrevivientes de la devastación cauchera antes de una nueva deportación, en el relato más duro y más contemporáneo de esta página.",
  ],
  galleryIntro:
    "Diez relatos donde el agua no es paisaje sino relación: custodia, deuda, advertencia y regreso.",
  closing: [
    "Media ruta llega con narrador y comunidad identificados —Chamí, Huitoto, Andoque— y la otra media sin atribución, en el registro literario con que se recogieron muchas leyendas mestizas. Leerlas seguidas no las iguala: deja ver dos maneras de contar el mismo elemento.",
  ],

  /* Mito de portada. Debe estar en `myths`. */
  cover: "la-madre-agua",

  /* Censo de la ruta: única fuente de pertenencia. Orden = orden de lectura. */
  myths: [
    { slug: "la-madre-agua", label: "La madre agua", featured: true },
    { slug: "hentsera-y-el-agua", label: "Héntserá y el agua", featured: true },
    { slug: "lagunas-encantadas", label: "Lagunas encantadas", featured: true },
    { slug: "zequiel", label: "Zequiel" },
    { slug: "el-tesoro-de-caribare", label: "El tesoro de Caribare" },
    { slug: "kugi-y-nokuerai", label: "Kugï y Nokuerai" },
    { slug: "el-retorno-de-plumon-amarillo", label: "El retorno de plumón amarillo" },
    { slug: "el-origen-del-agua", label: "El origen del agua" },
    { slug: "el-carriazo-de-vereda-san-isidro", label: "El Carriazo de vereda San Isidro" },
    { slug: "el-reventon-de-jacobo", label: "El Reventón de Jacobo" },
  ],

  /* Etapas del recorrido. `myths` referencia slugs ya declarados arriba.
     Migradas desde los `highlights` originales: conservan título y resumen,
     y esperan prosa larga y reparto de mitos por parte de la curaduría. */
  momentos: [
    {
      slug: "rios-con-memoria",
      title: "Ríos con memoria",
      summary: "Relatos donde el agua tiene quien la críe y quien responda por ella.",
      prose: [
        "La Madre de Agua abre la ruta con la versión más difundida y menos documentada: una figura que atrae a los niños con su belleza, contada en medio país sin fuente que la ancle. Enseguida el archivo cambia de registro. Karagabí observa el jenené de Héntserá antes de derribarlo, y el agua se reparte porque alguien miró con paciencia y trabajó acompañado. En Jeguada, los jaibanás conducen a las jepás por los ríos y tienen que juzgar a la culpable de un daño: el cuidado del agua aparece allí como una responsabilidad colectiva, con procedimiento incluido.",
      ],
      myths: ["la-madre-agua", "hentsera-y-el-agua", "el-origen-del-agua"],
    },
    {
      slug: "lagunas-sagradas",
      title: "Lagunas y tesoros custodiados",
      summary: "Cuando el agua guarda algo, el relato deja de hablar del agua y empieza a hablar de quien la busca.",
      prose: [
        "Las lagunas encantadas entrelazan creencias indígenas y coloniales en un mismo lugar, que es exactamente lo que hace difícil leerlas. El Carriazo de la vereda San Isidro convierte la búsqueda en una sucesión de pruebas. El Reventón de Jacobo, en Piedecuesta, cuenta un encuentro con un tesoro oculto que le cambia el destino a un hombre. Y el tesoro de Caribare superpone, en los Llanos Orientales, un relato indígena del diluvio y la memoria de un tesoro jesuita: dos capas que el archivo conserva juntas sin fundirlas.",
      ],
      myths: [
        "lagunas-encantadas",
        "el-carriazo-de-vereda-san-isidro",
        "el-reventon-de-jacobo",
        "el-tesoro-de-caribare",
      ],
    },
    {
      slug: "corrientes-invisibles",
      title: "Corrientes invisibles",
      summary: "Señales, extravíos y regresos: lo que el agua mueve además del agua.",
      prose: [
        "Zequiel cuenta amor, traición y justicia en el Caimán, con las tensiones económicas de su época debajo de la historia. En el Amazonas, los patos siguen una ruta conocida hasta el baile mientras dos muchachas se extravían y solo una regresa transformada. Y el cierre es de una gravedad distinta: después de la devastación cauchera, Plumón-amarillo reúne a los sobrevivientes antes de una nueva deportación, y la ficha nombra ese gesto por lo que es —reunir a quienes quedaron es una forma de continuidad, incluso bajo una amenaza que no se ha ido—.",
      ],
      myths: ["zequiel", "kugi-y-nokuerai", "el-retorno-de-plumon-amarillo"],
    },
  ],
};

export default ruta;
