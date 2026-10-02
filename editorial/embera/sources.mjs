function source({
  title,
  author,
  year,
  type,
  url,
  summary,
  limitation,
}) {
  return {
    title,
    author,
    ...(year ? { year } : {}),
    type,
    url,
    summary,
    limitation,
  };
}

export const emberaSources = {
  dogiramaBurumia1984: source({
    title: "Los Burumia, en Zrõarã Nẽburã: Historia de los antiguos",
    author: "Odilia Dogiramá, narradora; Floresmiro Dogiramá y Mauricio Pardo, compilación",
    year: 1984,
    type: "narración oral publicada",
    url: "https://ppg.pueblosoriginarios.com/textos/embera/burumia.html",
    summary:
      "Publica el relato atribuido a Odilia Dogiramá: la comunidad Burumia de la quebrada Usagará, el cautiverio y fuga de dos jóvenes y el ataque organizado desde Bojayá.",
    limitation:
      "La edición está en castellano y utiliza vocabulario histórico que requiere explicación; una narración no prueba por sí sola que los hechos ocurrieran literalmente.",
  }),
  vascoReview1986: source({
    title: "Floresmiro Dogiramá: Zroara Nebura, Historia de los Antiguos",
    author: "Luis Guillermo Vasco Uribe",
    year: 1986,
    type: "reseña antropológica crítica",
    url: "https://publicaciones.banrepcultural.org/index.php/bmo/article/download/7263/7527/",
    summary:
      "Sitúa la colección en el Alto Baudó, identifica a sus narradores y explica que las historias articulan conocimiento y conceptos, no solo entretenimiento literario.",
    limitation:
      "Es una reseña interpretativa de dos páginas y no reemplaza la narración de Odilia Dogiramá.",
  }),
  pardoRegionalizacion1987: source({
    title:
      "Regionalización de indígenas Chocó: datos etnohistóricos, lingüísticos y asentamientos actuales",
    author: "Mauricio Pardo",
    year: 1987,
    type: "investigación etnohistórica y lingüística",
    url: "https://publicaciones.banrepcultural.org/index.php/bmo/article/download/7215/7478/14654",
    summary:
      "Distingue áreas dialectales y procesos históricos entre poblaciones Emberá y Wounaan, evitando tratar Emberá como una comunidad territorial única.",
    limitation:
      "La regionalización refleja la investigación disponible en la década de 1980 y no fija identidades actuales de manera inmutable.",
  }),
  onicDobida: source({
    title: "Embera Dobidá",
    author: "Organización Nacional Indígena de Colombia",
    type: "perfil de organización indígena",
    url: "https://www.onic.org.co/pueblos",
    summary:
      "Identifica a los Emberá Dóbida como gente de río y sitúa asentamientos en Bojayá, las cuencas del Atrato y el Baudó.",
    limitation:
      "Es un perfil panorámico que no edita ni comenta el relato de los Burumia.",
  }),
  minculturaDobida: source({
    title: "Caracterización del pueblo Emberá-Dóbida",
    author: "Ministerio de Cultura de Colombia",
    type: "caracterización institucional",
    url: "https://mng.mincultura.gov.co/prensa/noticias/Documents/Poblaciones/PUEBLO%20EMBERA-D%C3%93BIDA.pdf",
    summary:
      "Describe territorio, lengua, movilidad fluvial y organización del pueblo Emberá-Dóbida en el Chocó.",
    limitation:
      "Sintetiza información institucional y bibliográfica; no es una versión del mito ni una voz comunitaria individual.",
  }),
  icanhEmbera: source({
    title: "Pueblo Emberá",
    author: "Instituto Colombiano de Antropología e Historia",
    type: "perfil institucional de colecciones",
    url: "https://colecciones.icanh.gov.co/articulos/pueblos/EMBERA.php",
    summary:
      "Distingue a los Emberá Dóbida y Eperara Siapidara de los Emberá Chamí y Katío y presenta rasgos generales sin reducirlos a un solo grupo.",
    limitation:
      "Es una síntesis museográfica contemporánea; no permite atribuir automáticamente cada narración a un subgrupo.",
  }),
  vargas1993: source({
    title: "Los Emberá y los Cuna: impacto y reacción ante la ocupación española",
    author: "Patricia Vargas Sarmiento",
    year: 1993,
    type: "investigación etnohistórica",
    url: "https://books.google.com/books/about/Los_embera_y_los_cuna.html?id=n7dsAAAAMAAJ",
    summary:
      "Estudia relaciones, desplazamientos y nombres de pueblos en el Darién y el Chocó para contextualizar memorias de conflicto entre Emberá, Cuna y otros colectivos.",
    limitation:
      "El acceso digital es parcial y su evidencia histórica no convierte a los personajes de la narración en pueblos comprobados sin mediación.",
  }),
  chaves1945: source({
    title: "Mitos, tradiciones y cuentos de los indios Chamí",
    author: "Milciades Chaves Ch.",
    year: 1945,
    type: "colección etnográfica primaria",
    url: "https://publicaciones.icanh.gov.co/index.php/picanh/catalog/book/235",
    summary:
      "Incluye relatos narrados por un informante Katío, entre ellos Bibidigomia, útiles para contrastar motivos de cautiverio, seres antiguos y conflicto.",
    limitation:
      "Pertenece a otra región y a otro narrador; una semejanza de motivos no autoriza fusionarlo con Los Burumia.",
  }),
  usagaraMap: source({
    title: "Río Bojayá y confluencia del río Usagará",
    author: "WaterwayMap, a partir de OpenStreetMap",
    type: "fuente cartográfica",
    url: "https://waterwaymap.org/river/R%C3%ADo%20Bojay%C3%A1%20000469743989/",
    summary:
      "Ubica la desembocadura del Usagará en el río Bojayá cerca de 6°8′54″ N, 77°5′56″ O.",
    limitation:
      "La coordenada representa la confluencia cartográfica, no el alto exacto donde la narración sitúa las casas Burumia.",
  }),

  // ——— Búsqueda profunda 2026-09-19 ———
  dogiramaBurumia19842: source({
    title: "Los Burumia, relato 19 del capítulo «Historias de guerra», en Zrõarã Nẽburã: historia de los antiguos. Literatura oral emberá",
    author: "Odilia Dogiramá, narradora; Mauricio Pardo, recopilación; Centro Jorge Eliécer Gaitán, Bogotá",
    year: 1984,
    type: "colección de narraciones recogidas en campo",
    url: "https://pueblosoriginarios.com/textos/embera/burumia.html",
    summary:
      "Publica la narración de Odilia Dogiramá, prima de Floresmiro Dogiramá, recogida en el Alto Baudó: los Burumiá en un alto sobre la quebrada Usagará que cae al río Bojayá, el chiquero y la mata de primitivo cuyas frutas al rajarse marcan la hora de matar al cautivo, la vieja y los dos niños criados entre ellos, la guerra librada por error contra los Cuna por gente reunida del Atrato, Lloró, Dubasa, Pató y Munguidó, la fuga en la champa más grande con un perro, el silbido del pájaro buchelé, el explorador convertido en murciélago que cuenta las casas y olvida una, y la huida de los sobrevivientes por la cabecera del Bojayá hasta el río Valle.",
    limitation:
      "El libro de 1984 no está digitalizado en un repositorio institucional y este texto es una transcripción en línea que conserva capítulo, número de relato y narradora, pero no se cotejó contra el impreso. Es una narración y no una crónica: no prueba que los hechos ocurrieran, ni que «Burumiá» designe un pueblo históricamente identificable. La edición castellana usa «cholos» para nombrar a los emberá.",
  }),
  chMitos1945: source({
    title: "Mitos, tradiciones y cuentos de los indios Chamí",
    author: "Milcíades Chaves Ch., en Boletín de Arqueología, volumen I, tomo II, Servicio Arqueológico Nacional",
    year: 1945,
    type: "colección etnográfica primaria",
    url: "https://publicaciones.icanh.gov.co/index.php/picanh/catalog/download/235/257/1568",
    summary:
      "Aporta el hallazgo que reencuadra la ficha: en la nota comparativa al relato Bibidigomia cita al padre Rochereau, recogido entre los Katío, donde «un bibidi cogió de prisioneros a dos burumías y los volvieron eunucos para que engordaran», uno escapa, reúne un ejército de burumías, y una vieja Bibidi indignada por su ración ayuda a que los burumías triunfen. Mismo armazón que el relato de Odilia Dogiramá —dos prisioneros, engorde, una anciana que colabora, fuga y aniquilación del poblado— con los papeles invertidos. Trae además «La india Pixaawina», con captura, castración, engorde, una viejita que ayuda a escapar y la huida río abajo sobre un balso.",
    limitation:
      "Los relatos Bibidigomia y Pixaawina los narró Rafael Bailarín, indio katío casado con una mujer chamí, que dijo haberlos aprendido de su abuela: son de otro subgrupo emberá, de otro narrador y de otra región —vereda Corozal, Río Frío, Valle del Cauca— y no pueden fundirse con el relato del Alto Baudó. La cita de Rochereau se leyó aquí de segunda mano; el original no se localizó.",
  }),

  // ——— Búsqueda profunda 2026-09-22 ———
  isacssonGentilicios1980: source({
    title: "Gentilicios y desplazamientos de la población aborigen en el noroeste colombiano (1500-1700)",
    author: "Sven-Erik Isacsson",
    year: 1980,
    type: "artículo de revista científica (Indiana 6: 209-224, Ibero-Amerikanisches Institut, Berlín)",
    url: "https://journals.iai.spk-berlin.de/index.php/indiana/article/download/1677/1315/3635",
    summary:
      "Dedica una sección entera, «Los burumiá», a los enemigos de los citará (emberá del alto Atrato) en el siglo XVII, «cuya ferocidad y canibalismo dieron origen a varias leyendas que se mantienen vivas entre los emberá hasta hoy día». Rastrea el nombre en la documentación española (pormia 1636, porumeaes 1639, buromea 1640, burgumia 1645, bromeas 1649, poromea 1669-1672, burgamia y promia 1676, burgumea 1677) y fija su territorio entre el Atrato y el Pacífico, «particularmente su afluente Bojayá»: Guzmán y Céspedes (1671) da el Bojayá como domicilio de los burumiá y Bueso y Valdés remontó el Bojayá «hasta llegar al Burgumia». Los describe como «indios de río» con canoas enormes, tejedores de hamacas, famosos por engordar prisioneros para comerlos; documenta un ataque nocturno de los poromea que quemó las casas de los citará (1640) y la desaparición de los burumiá hacia 1670-1680. Cierra afirmando que siguen vivos en los cuentos del alto Baudó y el Atrato medio, con el engorde de los prisioneros y la aniquilación en las llamas como temas comunes.",
    limitation:
      "Es etnohistoria, no una edición del relato: no cita la narración de Odilia Dogiramá ni la colección de 1984. Su identificación de los burumiá con los gorgona/idibaez es una hipótesis del autor, y el propio artículo se presenta como informe preliminar. Sirve para decir que el Bojayá era, en la documentación del XVII, territorio burumiá; no para convertir el relato en crónica.",
  }),
  gomezMitos1997: source({
    title: "Mitos y leyendas de los Embera-chamí (capítulo «Los animales y su origen», pp. 60-71)",
    author: "Víctor Zuluaga Gómez, Universidad Tecnológica de Pereira",
    year: 1997,
    type: "libro / recopilación que transcribe versiones recogidas por otros investigadores",
    url: "https://repositorio.utp.edu.co/handle/11059/4877",
    summary:
      "Transcribe (pp. 63-71), de Patricia Vargas, una segunda versión del Bojayá del mismo relato, contada por Cristino Dojiramá, Antero Olea, Elvia Sanapi y Omar Dojiramá como parte del poblamiento emberá del río: los Burumia viven más arriba de Mojaudó, «en Usaragá», con sus casas en la quebrada Jinapetó; atacan de noche a los emberá que suben a montear y se llevan a los niños; a los cautivos les hacen sembrar un guineo y «cuando éste se rajaba, significaba que la gente estaba lista para ser sacrificada»; una niña y un niño capturados crecen cazando con ellos, descubren que son de otra raza, rompen las canoas en la boca de la quebrada («por eso el sitio se llama Rompecanoa»), paran las flechas con los canaletes, se hacen reconocer silbando, y los emberá de Lloró y Quibdó suben a atacar después de contar las casas, se les escapan las de cuatro, y los sobrevivientes labran canoas y huyen hacia Panamá. Concluye que los culpables no eran los Jura. Recoge además la síntesis de Vélez sobre Burumiáes y Carautas como edades sucesivas y la lectura de Vargas de que ambos nombres designan a los Cuna.",
    limitation:
      "Es de segunda mano: Zuluaga copia a Vargas (Los Embera y los Cuna: impacto y reacción ante la ocupación española, siglos XVI y XVII) y a Vélez, y no siempre separa su prosa de la del narrador. El libro se titula chamí pero este capítulo es del Chocó. Es un escaneo sin capa de texto (se leyó por OCR propio de las pp. 60-71 del impreso, pp. 66-77 del PDF): citar contra la imagen. No es la narración de Odilia Dogiramá sino otra, de otros narradores del mismo río; difiere en detalles (guineo y no primitivo, tigre y no perro, contadores pájaro y zorro y no murciélago, huida a Utría y Panamá y no al río Valle). La página del repositorio de la UTP pone una verificación anti-bots; el PDF se descargó por la API del DSpace. El original de Vargas (ICAN-CEREC, 1993) no está en abierto.",
  }),
  edicionNociones1929: source({
    title: "Nociones sobre creencias, usos y costumbres de los Catíos del occidente de Antioquia",
    author: "Hermanas misioneras de Santa Rosa de Osos (recolección); Henri Rochereau (envío); Paul Rivet (edición), en Journal de la Société des Américanistes, t. 21",
    year: 1929,
    type: "notas etnográficas misioneras",
    url: "https://archive.org/details/journaldelasocie0021vari",
    summary:
      "Es el original que Chaves citó de segunda mano. Trae dos apartados sobre los burumiá: «El indio primitivo (la raza llamada Burumía)», antropófagos que vivían en los árboles Genené, sacaban oro con las manos, cazaban con cerbatana y murieron quemados dormidos dentro de los árboles; y, en el apartado de los Bibidi, el pasaje de los dos burumiá capturados, castrados y engordados, uno que escapa y vuelve con un ejército, y la vieja bibidi que, ofendida por su ración, ayuda a que los burumiá aniquilen a los Bibidi. Permite leer de primera mano la inversión de papeles que la ficha discute en Versiones.",
    limitation:
      "Es katío del occidente antioqueño, no del Chocó, y pasa por traducción y redacción misionera. La nota de Rivet advierte que estas notas se usaron en parte para el libro de Severino de Santa Teresa (1924): no son testimonio independiente de él. No menciona el Bojayá ni a Odilia Dogiramá. Se cita por el tomo 21 completo en Internet Archive (pp. 71-105): la página de Persée sólo da metadatos y su PDF está cerrado a descarga. El OCR del tomo es de modelo francés y estropea tildes y eñes; citar contra la imagen.",
  }),
  teresaindios1959: source({
    title: "Los indios catíos. Los indios cunas (segunda edición de Creencias, ritos, usos y costumbres de los indios catíos de la Prefectura Apostólica de Urabá, 1924)",
    author: "Fray Severino de Santa Teresa, O.C.D.",
    year: 1959,
    type: "etnografía misionera",
    url: "https://archive.org/details/losindioscatiosl00seve",
    summary:
      "Explica de dónde sale el nombre del slug. En la primera parte, sobre las edades del mundo, pone en secuencia a «la primitiva raza de los Burumiáes», antropófagos unidos a las antomiá, habitantes de los Genené, inventores del veneno y quemados vivos por Dios dentro de sus árboles, y a «los indios de la segunda edad», los Carautas, ricos en oro, incestuosos y convertidos en animales. Es la fuente misionera de la pareja Burumiá-Carauta que la página anterior del catálogo fundió en una sola trama y que la ficha actual retira. Pardo (1987) la cita como «Santa Teresa 1959» entre los registros de gentilicios de guerra.",
    limitation:
      "Es katío de Urabá y occidente antioqueño, redactado por un misionero carmelita con categorías de edades del mundo y castigo divino que no están en el relato del Bojayá. Burumiáes y Carautas aparecen allí como humanidades sucesivas, no como protagonistas de una guerra: no trae cautiverio, fuga ni el episodio del murciélago. Sale del mismo fondo que Rochereau-Rivet 1929; la coincidencia entre los dos no corrobora nada.",
  }),
  gradoEmbera2023: source({
    title: "Embera bedea kiranduade e baida zorara nenburadeba: historias propias como caminos de aprendizaje para el fortalecimiento de la lengua ebera eyabida con niñas, niños, escuela del saber Koredó, comunidad Kichabi, Dabeiba, Antioquia",
    author: "Iris Dilanie Domicó Carupia (trabajo de grado, Licenciatura en Pedagogía de la Madre Tierra, Universidad de Antioquia)",
    year: 2023,
    type: "trabajo de grado que transcribe un relato con narrador acreditado",
    url: "https://hdl.handle.net/10495/36045",
    summary:
      "Transcribe (pp. 44-45) «Burumia o Bibidi o Bibidogomia», tomado de Luis Fernando Vélez, Relatos tradicionales de la cultura catía (1990, p. 87), contado por Rubén Domicó el 24 de agosto de 1981. Es una tercera figura del Burumiá en la tradición emberá: aquí un solo ser, «como un indio muy grande», con uñas de más de dos pulgadas, que vive en la copa de un árbol donde cuelga a los indios que caza «pegados como murciélagos»; la gente siembra ají, rodea el árbol de leña y lo tumba con el humo. Sirve para la advertencia que la ficha ya hace en Versiones: el nombre se repite entre colecciones con papeles distintos —pueblo captor en el Bojayá, víctimas de los Bibidi en Rochereau, ogro único en Vélez— y no se funden. La autora es eyabida de Dabeiba y comenta la mediación misionera de la antología de Vélez.",
    limitation:
      "Es katío de Antioquia, no dóbida del Chocó, y es cita de cita: la antología de Vélez no está en abierto y el relato llega por este trabajo de grado. Identifica Burumiá con Bibidí, cosa que ni Rochereau ni el relato del Bojayá hacen. No trata el cautiverio, la fuga ni la guerra con los Cuna. La página del repositorio pone una verificación anti-bots; el texto se leyó por la API del DSpace de la Universidad de Antioquia.",
  }),
};

export const defaultEmberaSourceKeys = [
  "dogiramaBurumia1984",
  "vascoReview1986",
  "onicDobida",
  "pardoRegionalizacion1987",
  "minculturaDobida",
  "icanhEmbera",
];

/**
 * Acepta una clave suelta o una clave con resumen y límite propios del mito
 * (`{ key, summary, limitation }`). La ficha bibliográfica la fija el pool; lo
 * que cambia por mito es qué dice esa obra sobre ese relato.
 */
export function pickEmberaSources(...entries) {
  const entradas = entries;
  const vistas = new Set();
  const salida = [];
  for (const entrada of entradas) {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = emberaSources[key];
    if (!selected) {
      const visto = typeof entrada === "string" ? entrada : JSON.stringify(entrada);
      throw new Error(`Fuente Emberá desconocida: ${visto}`);
    }
    if (vistas.has(key)) continue;
    vistas.add(key);
    salida.push(
      typeof entrada === "string"
        ? selected
        : {
            ...selected,
            ...(entrada.summary ? { summary: entrada.summary } : {}),
            ...(entrada.limitation ? { limitation: entrada.limitation } : {}),
          },
    );
  }
  return salida;
}
