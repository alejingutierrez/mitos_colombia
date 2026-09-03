/**
 * Ruta · La riqueza que cobra
 *
 * Los mitos se declaran por SLUG. Contrato: content/rutas/model.mjs
 */
export const ruta = {
  slug: "la-riqueza-que-cobra",
  title: "La riqueza que cobra",
  description:
    "No es una ruta sobre tesoros sino sobre deuda: en este archivo el oro nunca es neutro, es una relación que exige pago.",
  detail: "Guacas con protocolo, pactos con letra pequeña y almas que penan.",
  tone: "Brillo, deuda y desvelo",
  accent: "ember",
  keywords: [
    "tesoro",
    "guaca",
    "oro",
    "pacto",
    "codicia",
    "deuda",
  ],

  intro: [
    "Aquí no se busca el tesoro: se examina la factura. En este archivo la riqueza nunca aparece sola. Viene con condiciones, y el relato es sorprendentemente preciso sobre cuáles son, quién las incumple y qué se cobra.",
    "El primer rasgo es el protocolo. Un armadillo de mina brilla en el monte como una lámpara, pero no se atrapa de cualquier modo: hay que llevar cincuenta o cien pesos preparados y un pañuelo nuevo; con la plata lista se puede envolver y levantar, entonces se vuelve liviano, y después hay que ponerlo en un baúl grande y alimentarlo con maíz. Si quien lo encuentra no lleva lo necesario, la aparición cambia. En Panán los mayores lo dicen en una frase: «la huaca es para el que le quiere dar». El tres de mayo algunas personas salen a velarlas porque a medianoche pueden brillar como llamaradas, y casi siempre un sueño o una distracción impide llegar.",
    "El segundo es el pacto, y es un ciclo real y localizado: Piedecuesta, la Villa de Arma, San Juan de Girón. El doctor Galeacer, Damián Vásquez Montiel, el herrero Pacho, el arriero Mateo. Ninguno de esos tratos falla por maldad: fallan por lectura. Siempre había una cláusula que el firmante no leyó, y el que creyó burlarse de lo infernal se reservó un destino peor que el planeado.",
    "El tercero es el que menos suele contarse: la riqueza construida sobre otros no se hereda, se pena. Anselmo Santamaría era un hacendado cuyas tierras se perdían en el horizonte, pero tan indolente que sus riquezas se construyeron sobre un suelo regado de lágrimas ajenas; por eso su alma no descansa. María Centeno quedó como advertencia de una ambición que desafió la naturaleza y el tiempo. Y en el llano, una familia encuentra un tesoro y la riqueza le trae la desgracia.",
    "El cierre nombra el castigo característico, que casi nunca es la muerte: es la desorientación. Perder el rumbo, el nombre, el poder o el juicio. Petapeta pierde su capacidad por codicia y engaño. Los U’wa apartan deliberadamente una riqueza que rompería su equilibrio, porque —dice la ficha— una riqueza así puede apartar a una comunidad de su identidad y de su territorio. Que es, al final, la manera más exacta de decir que el oro cobra.",
  ],
  galleryIntro:
    "Diecisiete relatos sobre oro que aparece con condiciones y sobre lo que se paga cuando no se cumplen.",
  closing: [
    "Trece de estos diecisiete relatos llegan sin comunidad atribuida, y muchos vienen de un mismo bloque santandereano y antioqueño con personajes nombrados y lugares reconocibles. Junto a ellos, cuatro fichas con fuente declarada —Nasa, Panán, U’wa— muestran que la misma economía moral se enuncia en registros muy distintos.",
  ],

  cover: "el-armadillo-de-mina",

  myths: [
    { slug: "el-armadillo-de-mina", label: "El armadillo de mina", featured: true },
    { slug: "la-huacas", label: "Las huacas de Panán", featured: true },
    { slug: "la-barbacoa-del-muerto", label: "La barbacoa del muerto", featured: true },
    { slug: "los-tunjos-de-la-cantera", label: "Los tunjos de la Cantera" },
    { slug: "el-venado-de-oro", label: "El venado de oro" },
    { slug: "el-doctor-galeacer", label: "El Doctor Galeacer" },
    { slug: "no-hay-deuda-que-no-se-pague", label: "No hay deuda que no se pague" },
    { slug: "la-mula-del-diablo", label: "La mula del diablo" },
    { slug: "la-cueva-del-diablo", label: "La cueva del diablo" },
    { slug: "tal-para-cual", label: "Tal para cual" },
    { slug: "maria-centeno", label: "María Centeno" },
    { slug: "la-tertulia-de-la-italiana", label: "La tertulia de la italiana" },
    { slug: "el-tesoro-de-morgan", label: "El tesoro de Morgan" },
    { slug: "duende-del-salto", label: "Duende del Salto" },
    { slug: "el-tesoro-de-buzaga", label: "El tesoro de Buzaga" },
    { slug: "petapeta", label: "Petapeta" },
    { slug: "yanoa-y-sirbetuna", label: "Yanoa y Sirbetuna" },
  ],

  momentos: [
    {
      slug: "el-oro-que-pide-condiciones",
      title: "El oro que pide condiciones",
      summary:
        "Ninguna riqueza del archivo se recoge sin protocolo: dinero preparado, pañuelo nuevo, permiso, hora.",
      prose: [
        "El armadillo de mina trae el procedimiento entero, paso por paso, y su lección lo cierra: ver una riqueza no basta; toda posesión exige condiciones, medida y responsabilidad. En Panán, las huacas son entierros que los mayores hicieron en tiempos difíciles, y no se entregan a cualquiera: la ruta conserva los dos fracasos que el testimonio recuerda, cuando alguien marcó el punto y al día siguiente encontró la tierra dura. Los tunjos de la Cantera son muñecos de oro vivientes vinculados a caciques y guerreros, no metal disponible. Y el venado de oro cruza de la memoria muisca a la narrativa urbana de Bogotá sin dejar de ser una figura que exige algo de quien la mira.",
      ],
      myths: [
        "el-armadillo-de-mina",
        "la-huacas",
        "los-tunjos-de-la-cantera",
        "el-venado-de-oro",
      ],
    },
    {
      slug: "la-letra-pequena-del-pacto",
      title: "La letra pequeña del pacto",
      summary:
        "El trato no falla por maldad sino por lectura: siempre había una cláusula que el firmante no vio.",
      prose: [
        "Este es un ciclo con domicilio: Piedecuesta, la Villa de Arma, los límites de Los Santos, San Juan de Girón. El doctor Galeacer termina transformado y deja en el pueblo un legado de misterio; la moraleja del relato es que la astucia humana, cuando intenta burlarse de lo infernal, suele reservarse un destino peor que el planeado. Damián Vásquez Montiel, el perulero, desaparece cargando el título mismo del relato. El herrero Pacho negocia por codicia. El arriero Mateo se topa con lo que buscaba. Y don Anselmo, en Girón, cierra el bloque con humor y sátira, que también es una forma de contabilidad.",
      ],
      myths: [
        "el-doctor-galeacer",
        "no-hay-deuda-que-no-se-pague",
        "la-mula-del-diablo",
        "la-cueva-del-diablo",
        "tal-para-cual",
      ],
    },
    {
      slug: "quien-acumula-sobre-el-llanto-ajeno",
      title: "Quien acumula sobre el llanto ajeno",
      summary:
        "La riqueza construida sobre otros no se hereda: se pena. Aquí el fantasma es una forma de contabilidad.",
      prose: [
        "Anselmo Santamaría tenía tierras que se perdían en el horizonte y una fortuna levantada sobre un suelo regado de lágrimas ajenas; el relato lo condena a vagar, y esa condena es la factura. María Centeno funciona como advertencia contra la codicia y, en varias versiones, como el símbolo de una ambición que quiso desafiar la naturaleza y el tiempo. En el llano, una familia encuentra un tesoro y lo que llega con él es la desgracia, hasta una tragedia inesperada. Y el tesoro de Morgan reúne traición y avaricia en el mismo lugar donde se guardó. Ninguno de los cuatro relatos culpa al oro: todos señalan a quien lo juntó y cómo.",
      ],
      myths: [
        "la-barbacoa-del-muerto",
        "maria-centeno",
        "la-tertulia-de-la-italiana",
        "el-tesoro-de-morgan",
      ],
    },
    {
      slug: "perder-el-rumbo-no-la-vida",
      title: "Perder el rumbo, no la vida",
      summary:
        "El castigo característico no es morir: es quedarse sin camino, sin poder o sin identidad.",
      prose: [
        "Muki, ángel caído convertido en guardián de tesoros escondidos, enfrenta a los intrusos en su caverna sin necesidad de matarlos. El tesoro de Buzaga sobrevive en versiones que difieren tanto en detalle como en tono, lo que ya dice algo sobre lo que la promesa de oro le hace a la memoria de un lugar. Petapeta pierde su poder mágico por codicia y engaño: lo que se le quita no es la vida sino la capacidad. Y los U’wa cierran la ruta con la decisión contraria: Dasa Duba enfrenta a Yanoa y Sirbetuna para apartar una riqueza que rompería el equilibrio, porque una riqueza así separa a una comunidad de su identidad y de su territorio.",
      ],
      myths: [
        "duende-del-salto",
        "el-tesoro-de-buzaga",
        "petapeta",
        "yanoa-y-sirbetuna",
      ],
    },
  ],
};

export default ruta;
