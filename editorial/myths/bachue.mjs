const keySources = [
  {
    title:
      "Fray Pedro Simón, Noticias historiales, vol. II, Cuarta noticia, cap. II (ed. 1882; original de 1627)",
    summary:
      "Testimonio colonial más antiguo usado para fijar el núcleo del relato: Iguaque, la mujer llamada Bachué o Farachogua, el niño sin nombre, la descendencia, la exhortación final y el retorno como serpientes.",
    url: "https://archive.org/details/tierrafirmeindias02simbrich/page/n299/mode/2up",
  },
  {
    title:
      "Medicina Tradicional y Partería de la Comunidad Muisca de Bosa",
    summary:
      "Memoria viva construida con sabedores, parteras y médicos tradicionales. Vincula a madre Bachué con la ley de origen y con el cuidado del cuerpo, la comunidad, el territorio y los elementos.",
    url: "https://www.saludcapital.gov.co/Documents/com_etnias/Med_Trad_Com_Muisca_Bosa.pdf",
  },
  {
    title:
      "Sánchez, Martínez Celis y Vinasco Téllez, Cosmological Relations in the Muisca Myth of Bachue (2024)",
    summary:
      "Estudio académico reciente que propone relaciones entre el relato, el paisaje, la Vía Láctea, el Sol, las Pléyades y vasijas muiscas con serpientes. Se presenta como hipótesis interpretativa, no como consenso cerrado.",
    url: "https://doi.org/10.1558/jsa.29614",
  },
  {
    title:
      "Juan F. Cobo Betancourt, The Coming of the Kingdom, cap. 1 (Cambridge, 2024)",
    summary:
      "Revisión histórica de las fuentes coloniales y de sus categorías. Sustenta una lectura cauta de la supuesta religión muisca homogénea y describe grupos de parentesco matrilineal con liderazgos generalmente masculinos.",
    url: "https://doi.org/10.1017/9781009314046.003",
  },
];

const sources = [
  {
    title: "Santuario de Fauna y Flora Iguaque — Parques Nacionales Naturales",
    summary:
      "Contexto territorial actual de la laguna sagrada: ubicación, ecosistemas de páramo y bosque altoandino, función hídrica y memoria cultural asociada a Bachué.",
    url: "https://www.parquesnacionales.gov.co/nuestros-parques/santuario-de-fauna-y-flora-iguaque/",
  },
  {
    title:
      "Sandra Turbay Ceballos, Las familias indígenas de Santafé según los testamentos de los siglos XVI y XVII (2012)",
    summary:
      "Evidencia histórica de rasgos matrilineales en herencias y sucesión de cacicazgos. Ayuda a no confundir matrilinealidad con matriarcado.",
    url: "https://revistas.unal.edu.co/index.php/achsc/article/view/34162",
  },
  {
    title: "Pueblo Muisca — Instituto Colombiano de Antropología e Historia",
    summary:
      "Síntesis institucional sobre territorio, actividades históricas y presencia contemporánea del pueblo muisca a través de sus cabildos y procesos de recuperación cultural y lingüística.",
    url: "https://colecciones.icanh.gov.co/articulos/pueblos/MUISCA.php",
  },
  {
    title: "Lago Titicaca — Portal del Inca Garcilaso, Biblioteca Virtual Miguel de Cervantes",
    summary:
      "Referencia para comparar, sin afirmar parentesco directo, el surgimiento lacustre de Manco Cápac y Mama Ocllo y su papel como pareja fundadora.",
    url: "https://www.cervantesvirtual.com/portales/inca_garcilaso_de_la_vega/imagenes_motivos/imagen/imagenes_motivos_01_inca_garcilaso_lago/",
  },
  {
    title: "Ovidio, Metamorfosis I: Deucalión y Pirra — University of Virginia",
    summary:
      "Fuente clásica para contrastar otra pareja que repuebla el mundo. La comparación destaca diferencias de contexto: un nuevo comienzo después del diluvio, no una aparición primordial desde una laguna.",
    url: "https://ovid.lib.virginia.edu/book1.html",
  },
  {
    title: "Stories of the Creation of Japan — Library of Congress",
    summary:
      "Referencia institucional sobre Izanagi e Izanami como pareja creadora de las islas y deidades de Japón; sirve para comparar la función de las parejas primordiales sin borrar las diferencias culturales.",
    url: "https://www.loc.gov/exhibits/world/accounts.html#obj13",
  },
];

const mito = `En lo alto de las montañas de Iguaque, donde el frío mantiene la neblina cerca del agua, había una laguna. El mundo ya tenía luz, plantas y animales, pero todavía no tenía gente.

Una mañana, de la laguna salió una mujer. Se llamaba Bachué; también la llamaban Farachogua, la Mujer Buena. Llevaba de la mano a un niño de unos tres años. No venían de otro pueblo ni habían cruzado un camino: venían del agua.

Bachué y el niño bajaron de la sierra hasta la parte llana de Iguaque. Allí construyeron una casa. Pasaron los años. Cuando él se hizo adulto, se unieron como pareja. El relato antiguo no le da un nombre.

Tuvieron hijos, muchos más de los que cabrían en una sola familia. La crónica de Fray Pedro Simón dice que nacían cuatro o seis en cada parto. Bachué y su compañero recorrieron el territorio. Donde se detenían quedaban hijos, y esos hijos formaban nuevas familias. Así explica el mito el origen común del pueblo muisca.

La tierra se llenó de gente. También fue necesario aprender a vivir juntos. Bachué dejó preceptos para cuidar la paz, la vida en común y la relación con lo sagrado. En memorias muiscas contemporáneas, esa enseñanza sigue nombrándose como cuidado: del agua, de la tierra, del cuerpo, del pensamiento y de los demás.

Mucho tiempo después, Bachué y su compañero envejecieron. Volvieron a Iguaque y llamaron a su descendencia para que caminara con ellos hasta la laguna. Frente al agua, Bachué les pidió conservar la paz y las leyes que habían recibido.

Entonces llegó la despedida. Hubo llanto a ambos lados: entre quienes se quedaban en la orilla y entre quienes regresaban al lugar del comienzo. Bachué y su compañero se transformaron en dos grandes serpientes y entraron en la laguna. No volvieron a salir como personas.

El relato termina donde empezó. El agua no es un simple escenario: guarda el origen, recibe a los antepasados y sostiene la continuidad de la vida. Por eso Iguaque no señala un pasado remoto y cerrado. La laguna permanece como un lugar de memoria, y Bachué, como una presencia que recuerda que ninguna comunidad existe por sí sola ni puede vivir separada del territorio que la alimenta.`;

const historia = `La versión escrita más antigua que usamos aparece en las Noticias historiales de Fray Pedro Simón, publicadas en 1627. Simón escribió décadas después de la invasión española y desde el propósito evangelizador de un fraile. Conserva nombres, lugares y una secuencia fundamental, pero no registra una voz muisca de manera neutral: llama “engaño” a las creencias que describe y las traduce a categorías cristianas. Es una fuente primaria colonial, no una autoridad única.

La investigación reciente también corrige dos fórmulas comunes. Los pueblos que hoy agrupamos bajo el nombre muisca no formaban un imperio uniforme. Eran comunidades diversas, organizadas en grupos de parentesco y unidades políticas compuestas. Había transmisión matrilineal de pertenencias y cargos —a menudo de un hombre al hijo de su hermana—, pero eso no prueba un “matriarcado”. La centralidad de Bachué puede dialogar con el linaje materno sin explicar por sí sola toda la sociedad.

Iguaque aporta otra clave. La laguna está a 3.599 metros, en un territorio de páramo y bosque altoandino que regula y distribuye agua hacia poblaciones vecinas. El paisaje hace visible una necesidad material y social: la vida del altiplano depende del agua. El mito convierte esa dependencia en parentesco. La comunidad no solo bebe de la laguna; dice que viene de ella.

Desde una lectura antropológica, Bachué responde varias preguntas: de dónde venimos, qué debemos a los antepasados y cómo convivir en un territorio frágil. El regreso como serpientes enlaza nacimiento, muerte y renovación. Para la Comunidad Muisca de Bosa, Bachué sigue vinculada a la ley de origen y al cuidado del ser, la familia, la comunidad y el territorio. Esa voz contemporánea impide tratar el relato como una reliquia sin descendientes.`;

const versiones = `En el núcleo narrado por Fray Pedro Simón, Bachué también recibe el nombre Farachogua, “mujer buena”. Sale de Iguaque con un niño de unos tres años; el pasaje no le asigna nombre. La pareja puebla la tierra, vuelve anciana a la laguna, exhorta a la paz y se transforma en dos grandes serpientes. Esta es la columna vertebral de nuestra reescritura.

Relatos posteriores amplían su papel: Bachué enseña a tejer, levantar casas, trabajar el barro, cultivar y transformar metales. Algunas versiones llaman al compañero Iguaque o Sungunsua. La Comunidad Muisca de Bosa la integra a una ley de origen centrada en el cuidado. Conservamos estas variantes como capas identificadas; no fingimos que todas aparecen en la crónica de Simón.

El nombre “Labaque”, usado en la versión anterior de esta página, no tiene respaldo claro en el pasaje primario revisado y probablemente nació de una transcripción defectuosa. Por eso se retira del relato. Cuando una fuente no permite decidir entre nombres o episodios, la metodología prefiere declarar la duda antes que rellenarla con una certeza atractiva.

Una investigación arqueoastronómica de 2024 relaciona el mito con Iguaque, El Infiernito, la Vía Láctea, el Sol, las Pléyades y vasijas muiscas con serpientes. Es una hipótesis contemporánea, no una “versión secreta” ni un hecho demostrado.`;

const similitudes = `Bachué pertenece a una familia amplia de relatos sobre parejas fundadoras. Comparar no significa afirmar que una cultura copió a otra.

En la tradición inca narrada por el Inca Garcilaso, Manco Cápac y Mama Ocllo salen del lago Titicaca y fundan un orden social. También aquí una pareja aparece desde agua sagrada. Pero Bachué explica la descendencia del pueblo y regresa a la laguna; la pareja inca funda una ciudad y una dinastía entre poblaciones existentes.

En las Metamorfosis de Ovidio, Deucalión y Pirra restauran la humanidad después de un diluvio: las piedras que arrojan se vuelven personas. La pareja garantiza la continuidad humana, pero el relato griego habla de supervivencia después de un castigo; Bachué habla de un comienzo.

Izanagi e Izanami, en la tradición japonesa del Kojiki, forman las islas y engendran deidades. Comparten la imagen de una pareja primordial que une genealogía y geografía. Su historia organiza el archipiélago y el linaje divino japonés; Iguaque ancla el parentesco muisca en una laguna andina concreta.

Las comparaciones muestran una pregunta humana recurrente: imaginar el origen como relación y no como acto solitario. Lo propio de Bachué es la forma de esa relación: agua de páramo, descendencia común, consejo de convivencia y retorno serpentino.`;

const leccion =
  "Venimos de un mundo que nos sostiene: pertenecer exige cuidar el agua, la comunidad y la continuidad de la vida.";

const content = [
  ["Mito", mito],
  ["Historia", historia],
  ["Versiones", versiones],
  ["Lección", leccion],
  ["Similitudes", similitudes],
]
  .map(([heading, body]) => `${heading}\n${body}`)
  .join("\n\n");

const editorialMyth = {
  slug: "bachue",
  title: "Bachué",
  mito,
  historia,
  versiones,
  leccion,
  similitudes,
  content,
  excerpt:
    "De la laguna de Iguaque salió Bachué con un niño de la mano. Juntos poblaron el mundo muisca y regresaron al agua como serpientes.",
  seo_title: "Bachué: origen muisca en Iguaque",
  seo_description:
    "Lee el mito de Bachué: su origen en Iguaque, el regreso como serpiente y lo que revela sobre agua, parentesco y memoria del pueblo muisca.",
  seo: {
    meta_title: "Bachué: origen muisca en Iguaque",
    meta_description:
      "Lee el mito de Bachué: su origen en Iguaque, el regreso como serpiente y lo que revela sobre agua, parentesco y memoria del pueblo muisca.",
    meta_keywords:
      "mito de Bachué, Bachué, laguna de Iguaque, origen muisca, cosmogonía muisca, pueblo muisca",
    og_title: "Bachué y el origen muisca en Iguaque",
    og_description:
      "Bachué sale de la laguna de Iguaque, puebla el mundo muisca y regresa al agua. Una versión investigada, clara y acompañada de sus fuentes.",
    twitter_title: "Bachué y el origen muisca en Iguaque",
    twitter_description:
      "Una versión investigada del mito de Bachué, con contexto muisca, variantes, comparaciones y fuentes consultables.",
    canonical_path: "/mitos/bachue",
  },
  methodologySeo: {
    meta_title: "Metodología editorial en prueba",
    meta_description:
      "Conoce el método piloto para investigar, contrastar y reescribir mitos colombianos con fuentes visibles, contexto cultural y una prosa más clara.",
    meta_keywords:
      "metodología editorial, investigación de mitos, fuentes, antropología, reescritura, Bachué",
    og_title: "Investigar antes de volver a contar",
    og_description:
      "Un método editorial en prueba para separar fuentes, versiones e interpretaciones y narrar los mitos de Colombia con claridad y evidencia.",
    twitter_title: "Investigar antes de volver a contar",
    twitter_description:
      "Así funciona el piloto editorial de Mitos de Colombia: investigación, matriz de evidencia, reescritura y verificación pública.",
    canonical_path: "/metodologia",
  },
  focus_keyword: "mito de Bachué",
  focus_keywords: [
    "mito de Bachué",
    "Bachué",
    "laguna de Iguaque",
    "origen muisca",
    "cosmogonía muisca",
    "pueblo muisca",
    "serpientes acuáticas",
    "agua sagrada",
    "Boyacá",
  ],
  image_prompt: `Fotografía editorial horizontal 16:9 de una maqueta artesanal hecha a mano con papel cortado, fibras y cartón, no una ilustración digital. Laguna de Iguaque entre páramo frío, montañas y neblina; Bachué, mujer adulta, emerge del agua y lleva de la mano a un niño pequeño. Vestuario sobrio de fibras tejidas, sin coronas ni fantasía europea. Dos formas de serpiente apenas insinuadas bajo el agua anticipan el retorno final. Composición frontal de un solo tableau, relieve bajo, bordes de papel visibles, pequeñas imperfecciones humanas, luz de estudio suave, verde páramo, azul profundo y tierra húmeda. Tratamiento respetuoso del pueblo muisca. Sin texto, sin logos, sin oro ornamental inventado, sin símbolos aztecas o mayas, sin aspecto CGI ni 3D renderizado.`,
  image_prompt_horizontal: `Maqueta horizontal 16:9 de papel artesanal fotografiada de frente: la laguna de Iguaque, páramo con neblina, Bachué emergiendo del agua y tomando de la mano a un niño. Dos serpientes acuáticas muy sutiles bajo la superficie conectan origen y retorno. Paleta verde páramo, azul profundo y tierra. Relieve bajo, fibras visibles, luz natural suave. Sin texto, coronas, iconografía mesoamericana ni apariencia CGI.`,
  image_prompt_vertical: `Maqueta vertical 2:3 de papel artesanal fotografiada de frente: Bachué adulta sale de la laguna de Iguaque con un niño de la mano; el agua ocupa el primer plano y el páramo nublado se eleva detrás. Una curva serpentina discreta aparece bajo la superficie. Texturas manuales, sobriedad, respeto cultural, sin texto, sin joyería inventada y sin aspecto de render digital.`,
  keySources,
  sources,
  researchNotes: `ESTADO: piloto editorial con revisión documental, académica, territorial, comparativa y de memoria comunitaria.

NÚCLEO DE ALTA CONFIANZA: Iguaque; Bachué/Farachogua; niño de unos tres años sin nombre en Simón; unión al llegar él a la adultez; descendencia múltiple; recorrido para poblar; regreso en la vejez; exhortación a paz y leyes; transformación de ambos en serpientes.

CAPAS QUE NO SE FUSIONAN: la enseñanza detallada de tejido, bohíos, barro, agricultura y metales aparece en reelaboraciones posteriores y memoria comunitaria, no en el núcleo citado de Simón. Los nombres Iguaque y Sungunsua pertenecen a versiones posteriores/contemporáneas. “Labaque” se retira por falta de respaldo documental claro.

CAUTELAS: Pedro Simón escribe desde una mirada colonial y evangelizadora. No describir al conjunto muisca como un imperio homogéneo. No convertir matrilinealidad en matriarcado. No presentar la propuesta arqueoastronómica de 2024 como hecho establecido.

LECTURA EDITORIAL: el agua funciona como origen, parentesco, sustento territorial y lugar de retorno. La serpiente permite hablar de continuidad y transformación. Esta es una interpretación declarada, no una traducción literal de una doctrina muisca única.

CRITERIO LITERARIO: escenas concretas, verbos claros, imagen suficiente para imaginar y ausencia de ornamentación no sustentada. La emoción se concentra en la salida, la expansión de la familia y la despedida; no se fuerza mediante adjetivos grandilocuentes.`,
};

export default editorialMyth;
