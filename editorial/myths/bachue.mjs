import { withMuiscaImagePrompts } from "../muisca/image-prompts.mjs";

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
  {
    title:
      "Fray Alonso de Zamora, Historia de la provincia de San Antonino del Nuevo Reino de Granada (1701)",
    summary:
      "Segunda crónica colonial contrastada para el núcleo narrativo. Nombra a la mujer Bacuche, conserva al niño de tres años, los partos múltiples, la despedida ante la descendencia y el ingreso a la laguna como serpientes.",
    url: "https://www.cervantesvirtual.com/obra/historia-de-la-provincia-de-san-antonino-del-nuevo-reino-de-granada-tomo-i-1072975/",
  },
];

const sources = [
  {
    title: "Santuario de Fauna y Flora Iguaque — Parques Nacionales Naturales",
    summary:
      "Contexto territorial actual de la laguna sagrada: ubicación, coordenadas oficiales, ecosistemas de páramo y bosque altoandino, función hídrica y memoria cultural asociada a Bachué.",
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

const mito = `Antes del primer bohío, la laguna de Iguaque guardaba un silencio de agua fría. Los frailejones empapaban la niebla, el viento bajaba por la sierra y nadie había hollado aún los caminos del altiplano.

Un amanecer, la superficie se abrió desde el centro. Salió una mujer de cabello oscuro, y de la mano traía a un niño de unos tres años, que apoyó los pies desnudos en la orilla como quien aprende a sostener el peso de la tierra. La llamaban Bachué, y también Farachogua, la mujer buena.

Bajaron juntos hasta el llano. Donde el frío aflojaba, levantaron una casa de barro y paja; encendieron fuego y el humo subió por primera vez sobre aquellos montes. El niño creció junto a ella. Cuando su voz se hizo grave, unieron sus vidas, y la casa se fue llenando.

Nacían cuatro hijos de un parto; en otro, seis. Dormían arropados en mantas, corrían tras el fuego, aprendían a escuchar el agua contra el barro. Y cuando la casa quedó chica, los padres tomaron el camino con la descendencia. Por laderas, valles y sabanas iban dejando familias y fogones. Los hijos tuvieron hijos; los senderos se encontraron; la tierra se llenó de nombres.

Bachué enseñaba a su gente que convivir cuesta más que construir. Medió disputas, sembró el consejo, recordó que nadie guarda el agua solo para sí. Pero no hay precepto que detenga la vejez. Un día el cabello de Bachué perdió el color y su compañero necesitó un bastón para subir la cuesta.

Reunieron a los hijos, a los hijos de los hijos y a todos los nacidos después. La multitud subió con ellos hasta Iguaque, y el camino de vuelta fue más lento que el primero. Junto al agua, Bachué se detuvo. Pidió paz, pidió memoria, pidió que cuidaran las leyes y el fuego de cada casa. —El agua es de todos —dijo—, como la memoria.

Entonces se despidió.

Lloraron los dos viejos y lloró la multitud. Bachué tomó la mano de su compañero y entraron al agua. El cuerpo se alargó en silencio; los brazos se recogieron; dos grandes serpientes nadaron una vuelta alrededor de la laguna y se hundieron. El agua se cerró detrás de ellas.

Nadie se movió de la orilla por un largo rato.

Desde entonces, cuando la gente muisca mira a Iguaque, a veces ve una línea que cruza el agua sin que sople el viento. Dicen que es Bachué que vuelve a mirar a los suyos. Y quien lo sabe calla, porque la laguna no devuelve las palabras: guarda el primer nombre y el último silencio.`;

const historia = `Las dos crónicas que conservan el relato son las Noticias historiales de Fray Pedro Simón, escritas en 1627, y la Historia de la provincia de San Antonino del Nuevo Reino de Granada, de Alonso de Zamora, publicada en 1701. Ambas sitúan la laguna en las sierras de Iguaque, a unas cuatro leguas de Tunja, un territorio frío y neblinoso de páramo que hoy corresponde al santuario de fauna y flora administrado por Parques Nacionales Naturales. Coinciden en la secuencia esencial: la mujer sale del agua con un niño de la mano, la casa, el crecimiento, la descendencia, la exhortación final y el regreso como serpientes.

Ninguna de las dos es una transcripción neutral. Simón y Zamora escriben décadas después de la invasión y desde una mirada evangelizadora: llaman "engaño" al relato, atribuyen al demonio las ofrendas y traducen categorías muiscas a términos de idolatría. La ficha los trata como fuentes históricas necesarias, no como autoridades únicas. Eugenia Villa Posse, en su compilación crítica de 1993, ordena el material, advierte cuándo una figura no constituye propiamente un mito y registra los cuatro nombres dados a la madre en las crónicas (Bachué, Furachogua, Labaque, Bacuche), mientras el consorte queda sin nombre.

Sobre esa asimetría, Villa Posse propone una lectura de matriarcado. La investigación reciente invita a la cautela: la evidencia documental muestra grupos de parentesco con rasgos matrilineales, herencias y sucesiones que corren por línea materna, pero la matrilinealidad no equivale a un gobierno de mujeres ni a un "matriarcado" como sistema político. La centralidad de Bachué puede dialogar con el linaje materno sin explicar por sí sola toda la sociedad.

Queda una voz contemporánea. Para la Comunidad Muisca de Bosa, madre Bachué sigue vinculada a la ley de origen y al cuidado del ser, la familia, la comunidad y el territorio. Esa memoria viva impide tratar el relato como una reliquia sin descendientes.`;

const versiones = `Simón narra el núcleo: la mujer que él llama Bachué o Farachogua, "mujer buena", saca del agua a un niño de unos tres años, bajan al llano, edifican casa, ella se une a él al llegar a la edad adulta, de cada parto nacen cuatro o seis hijos y la pareja recorre muchas partes dejando descendencia. Al final, vieja, exhorta a la paz y a la guarda de preceptos y leyes, se despide entre lágrimas y entra como culebra a la laguna. El mismo Simón añade que luego fue contada entre sus dioses y que fue amparo de las legumbres, con ofrendas de moque y resinas.

Zamora, en 1701, la llama Bacuche, con el mismo sentido de "mujer buena". Mantiene el niño de tres años, los partos de cuatro o seis hijos, la plática a los descendientes y la entrada como culebras. También en su versión el compañero queda sin nombre.

Villa Posse agrupa las denominaciones de las crónicas en cuatro: Bachué o Bachúe, Furachogua, Labaque y Bacuche, todas aplicadas a la mujer. Advierte además que no consta que Bachué fuera madre del niño al sacarlo del agua. En las reelaboraciones literarias del siglo XIX y XX, la figura se amplía: Bachué enseña a tejer, a construir bohíos, a labrar la tierra, a trabajar el barro y los metales, y dicta preceptos morales y religiosos. Esas capas no aparecen en el núcleo de Simón o Zamora y se conservan como reelaboraciones identificadas, no como una versión única del mito.`;

const similitudes = `Dentro del mismo corpus muisca, el agua trabaja en dos direcciones. En Iguaque es origen; en la laguna de Guatavita es destino de ofrendas, como registra el propio Simón al describir sacrificios y ofrendas de oro en las aguas del altiplano. La resonancia es el agua como umbral entre lo humano y lo sagrado; la diferencia es de dirección: en Guatavita la gente entrega al agua, en Iguaque el agua entrega a la gente.

En el Popol Vuh, la abuela Xmucané muele maíz para formar a los primeros seres y aconseja a los héroes k'iche'. Resuena con Bachué como figura femenina que da origen a la gente y le enseña a vivir. La diferencia: Xmucané trabaja materia, maíz y masa, dentro de una cosmogonía mesoamericana; Bachué no fabrica a los primeros hombres sino que los procrea, y emerge del agua para luego regresar a ella.

También en los Andes, Viracocha aparece ligado al agua del Titicaca, ordena la creación, enseña y desaparece caminando sobre el mar. Comparte con Bachué el ciclo de aparecer, enseñar y partir, con el agua como escenario. Se separa en que Viracocha es un creador único que piensa y manda, mientras Bachué no crea el mundo: lo puebla y lo aconseja.

En el Génesis, Eva recibe el título de "madre de todos los vivientes". La resonancia es la madre primordial como origen de un linaje entero. La diferencia es el marco: en el texto bíblico una divinidad forma a la pareja y el relato se ordena en torno al mandato y la falta; Bachué no recibe el ser de nadie y su despedida no es castigo sino regreso. Villa Posse apunta además el motivo de la mujer-serpiente madre de todos los hombres, que asoma en varias tradiciones del mundo; en Bachué la serpiente no tienta ni amenaza: es la forma del retorno, cuna y sepulcro a la vez.`;

const leccion =
  "Lo que nace del agua vuelve al agua, y entre un abrazo y otro queda la vida entera.";

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
  category_path: "Andina > Varios > Muiscas",
  tags: ["Bachué", "agua", "laguna", "muiscas", "serpiente"],
  latitude: 5.68728,
  longitude: -73.43681,
  mito,
  historia,
  versiones,
  leccion,
  similitudes,
  content,
  excerpt:
    "Una mujer y un niño salen de la laguna de Iguaque, pueblan el altiplano y regresan al agua convertidos en serpientes.",
  seo_title: "Mito de Bachué: madre del pueblo muisca",
  seo_description:
    "Bachué emerge de la laguna de Iguaque con un niño de la mano, enseña a su descendencia y vuelve al agua como serpiente. El origen del pueblo muisca.",
  seo: {
    meta_title: "Mito de Bachué: madre del pueblo muisca",
    meta_description:
      "Bachué emerge de la laguna de Iguaque con un niño de la mano, enseña a su descendencia y vuelve al agua como serpiente. El origen del pueblo muisca.",
    meta_keywords:
      "mito de Bachué, Bachué, laguna de Iguaque, leyenda de Bachué, origen del pueblo muisca, mitología muisca, madre Bachué, serpientes de Iguaque",
    og_title: "Bachué, la madre que salió de la laguna",
    og_description:
      "Del agua nace la primera familia muisca; al agua vuelve convertida en serpiente. El relato, sus versiones y sus fuentes.",
    twitter_title: "Mito de Bachué: madre del pueblo muisca",
    twitter_description:
      "Bachué emerge de la laguna de Iguaque con un niño de la mano, enseña a su descendencia y vuelve al agua como serpiente.",
    canonical_path: "/mitos/bachue",
  },
  methodologySeo: {
    meta_title: "Metodología editorial",
    meta_description:
      "Así investigamos, contrastamos, reescribimos y publicamos cada mito colombiano: fuentes, antropología, narrativa, SEO y verificación pública.",
    meta_keywords:
      "metodología editorial, investigación de mitos, fuentes, antropología, reescritura literaria, SEO, mitos de Colombia",
    og_title: "Cómo investigamos y reescribimos cada mito",
    og_description:
      "El estándar de Mitos de Colombia para investigar fuentes, distinguir versiones, narrar con imaginación y comprobar cada publicación.",
    twitter_title: "Metodología editorial de Mitos de Colombia",
    twitter_description:
      "Fuentes, matriz de evidencia, reescritura literaria, contexto cultural, SEO y prueba en producción para cada mito.",
    canonical_path: "/metodologia",
  },
  focus_keyword: "mito de Bachué",
  focus_keywords: [
    "mito de Bachué",
    "Bachué",
    "laguna de Iguaque",
    "leyenda de Bachué",
    "origen del pueblo muisca",
    "mitología muisca",
    "madre Bachué",
    "serpientes de Iguaque",
  ],
  image_prompt: `Fotografía editorial horizontal 16:9 de una maqueta artesanal hecha a mano con papel cortado, fibras y cartón, no una ilustración digital. Laguna de Iguaque entre páramo frío, montañas y neblina; Bachué, mujer adulta, emerge del agua y lleva de la mano a un niño pequeño. Vestuario sobrio de fibras tejidas, sin coronas ni fantasía europea. Dos formas de serpiente apenas insinuadas bajo el agua anticipan el retorno final. Composición frontal de un solo tableau, relieve bajo, bordes de papel visibles, pequeñas imperfecciones humanas, luz de estudio suave, verde páramo, azul profundo y tierra húmeda. Tratamiento respetuoso del pueblo muisca. Sin texto, sin logos, sin oro ornamental inventado, sin símbolos aztecas o mayas, sin aspecto CGI ni 3D renderizado.`,
  image_prompt_horizontal: `Maqueta horizontal 16:9 de papel artesanal fotografiada de frente: la laguna de Iguaque, páramo con neblina, Bachué emergiendo del agua y tomando de la mano a un niño. Dos serpientes acuáticas muy sutiles bajo la superficie conectan origen y retorno. Paleta verde páramo, azul profundo y tierra. Relieve bajo, fibras visibles, luz natural suave. Sin texto, coronas, iconografía mesoamericana ni apariencia CGI.`,
  image_prompt_vertical: `Maqueta vertical 2:3 de papel artesanal fotografiada de frente: Bachué adulta sale de la laguna de Iguaque con un niño de la mano; el agua ocupa el primer plano y el páramo nublado se eleva detrás. Una curva serpentina discreta aparece bajo la superficie. Texturas manuales, sobriedad, respeto cultural, sin texto, sin joyería inventada y sin aspecto de render digital.`,
  image_url:
    "https://c5htob7za0dl3b5x.public.blob.vercel-storage.com/mitos/bachue-1784765776300.jpg",
  keySources,
  sources,
  researchNotes: `ESTADO: tercera revisión del expediente de Bachué. Relato literario separado de la discusión documental; fuentes coloniales contrastadas con síntesis histórica, evidencia social, memoria comunitaria y comparaciones verificables.

NÚCLEO DOCUMENTADO: salida de la laguna de Iguaque de una mujer (Bachué/Farachogua o Bacuche) con un niño de unos tres años de la mano; descenso al llano; casa; unión al llegar él a la adultez; partos de cuatro o seis hijos; recorrido poblando la tierra; regreso en la vejez; plática de paz y leyes; transformación de ambos en grandes serpientes que entran a la laguna. Coincide en Simón (1627) y Zamora (1701).

VARIANTES: Simón añade Farachogua ("mujer buena"), la aparición posterior entre sus dioses, el amparo de las legumbres y las ofrendas de moque y resinas. Zamora la llama Bacuche con el mismo sentido. Villa Posse agrupa cuatro denominaciones (Bachué, Furachogua, Labaque, Bacuche), advierte que no consta que Bachué fuera madre del niño y propone una lectura de matriarcado que la investigación reciente modera hacia rasgos matrilineales. Las enseñanzas de tejer, construir, cultivar y trabajar metales provienen de reelaboraciones posteriores, no del núcleo citado.

LICENCIA EDITORIAL: se usa la fecundidad múltiple y la enseñanza de convivencia como desarrollo literario compatible con el núcleo de Simón y Zamora, sin fusionar las variantes como una versión única. El agua se lee como origen, parentesco y retorno; es interpretación declarada, no doctrina muisca única. No se afirma matriarcado ni se presenta hipótesis arqueoastronómicas como hecho establecido.

DUDA: el nombre del consorte no aparece en las crónicas; "Labaque" designa a la madre en Simón y en la síntesis de Villa Posse, no al compañero. No consta que Bachué fuera madre del niño al emerger.

GEOGRAFÍA: laguna de Iguaque, serranías al noreste de Tunja, Boyacá; coordenadas oficiales de Parques Nacionales Naturales: 5.68728, -73.43681.

REGISTRO LINGÜÍSTICO: español contemporáneo neutro para Colombia; sin arcaísmos de crónica del XVII; léxico del altiplano (bohío, laguna, niebla, mantas) solo donde la fuente lo respalda; el campo mito mantiene la narración pura, sin fuentes ni fechas.`,
};

export default withMuiscaImagePrompts(editorialMyth);
