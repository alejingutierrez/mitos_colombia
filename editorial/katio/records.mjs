import { defineKatioMyth } from "./define-editorial-myth.mjs";
import {
  composeArchiveHistory,
  composeCommunityHistory,
  composeSimilarities,
  composeVersions,
} from "./compose-sections.mjs";

const archiveResearch =
  "MEDIACIÓN: el relato pasó por traducción y edición misionera; no se presenta como voz comunitaria transparente. IMÁGENES: toda generación nueva debe ser ilustración full paper cut/paper quilling, nunca fotografía, maqueta física, diorama ni 3D.";

// Si el mito ya trae la capa escrita entera, se respeta: componerla desde los
// núcleos es la disposición heredada, para los que aún no se han reescrito.
function archiveRecord({
  sourceKeys,
  history,
  versions,
  similarities,
  ...input
}) {
  return defineKatioMyth({
    ...input,
    sourceKeys,
    historia: input.historia ?? composeArchiveHistory(history),
    versiones: input.versiones ?? composeVersions(versions),
    similitudes: input.similitudes ?? composeSimilarities(similarities),
  });
}

function communityRecord({
  sourceKeys,
  history,
  versions,
  similarities,
  ...input
}) {
  return defineKatioMyth({
    ...input,
    sourceKeys,
    historia: input.historia ?? composeCommunityHistory(history),
    versiones: input.versiones ?? composeVersions(versions),
    similitudes: input.similitudes ?? composeSimilarities(similarities),
  });
}

const records = [
  communityRecord({
    slug: "a-transformacion-del-hombre-que-no-podia-cazar",
    title: "La transformación del hombre que no podía cazar",
    mito: `Un hombre salía al monte con los demás, pero nunca conseguía una presa. Mientras sus compañeros regresaban con alimento, él volvía sin haber disparado o después de haber perdido el rastro. La dificultad no era simple falta de destreza: el cazador estaba aprendiendo, a través de sus fracasos, que los animales no eran objetos disponibles sin límite.

Un día siguió el camino de los animales monte adentro. Se apartó de las rutas conocidas, cruzó quebradas y llegó a un ámbito en el que la relación entre cazador y presa ya no podía sostenerse como antes. Allí comprendió que los seres del bosque tenían sus propios dueños, familias y lugares. Lo que para la gente podía parecer una jornada improductiva era, desde el otro lado de la relación, una vida que no había sido tomada.

El hombre permaneció con los animales. La separación de su comunidad se volvió transformación: dejó de ocupar el lugar del cazador que no podía matar y pasó al mundo de aquellos a quienes había seguido. No fue que la selva lo premiara por una virtud abstracta, ni que toda cacería quedara prohibida. Lo que quedó dicho es más preciso: cazar exige reconocer límites, pedir y recibir, y no confundir necesidad con persecución.

Cuando la comunidad advirtió que no regresaba, su ausencia quedó unida a los sonidos y movimientos del monte. Ya no podían burlarse del hombre como si el fracaso fuera únicamente suyo. Él había encontrado otra forma de pertenecer, y su partida obligaba a mirar la cacería desde los ojos de los animales.

Desde entonces se hace una advertencia antes de entrar al bosque. La persona que caza no entra a un espacio vacío: cruza un territorio vivo y relacionado. Si olvida esa condición, puede perder el camino humano; si la comprende, sabe que tomar alimento implica responsabilidad, medida y respeto por la continuidad de los seres que sostienen la vida.`,
    historia: `De esta historia se conserva el nombre de quien la narró, el sitio donde la narró, el nombre de quien la recogió y el libro donde salió; lo que no se conserva, en ningún sitio consultable, es la narración misma. Conviene decirlo sin rodeos: del contenido sólo se conoce un resumen de una línea, y el relato que esta página publica es una reconstrucción editorial anterior, no una transcripción. De la narración documentada sólo procede el arranque, el hombre que sale al monte con los demás y vuelve siempre sin presa; todo lo que sigue es elaboración de quien escribió la ficha y así hay que leerlo.

Lo documentado es esto. La narró Zaquidiama Domicó, cacique principal del Río Verde, Chocó. La recogió Antonio María Cardona. Salió bajo el título El hombre que no podía cazar en Cultura embera. Memorias del simposio sobre cultura embera, V Congreso Colombiano de Antropología, El Peñol, Antioquia, publicado por la Organización Indígena de Antioquia en Medellín, 1990, terminando en la página 168. La constancia está en la Guía bibliográfica sobre pueblos embera y wounaan, de la Biblioteca Luis Ángel Arango y el Banco de la República, que resume el contenido en una sola línea: narra el respeto que los hombres le deben a los animales de la selva. Nada más. La guía se sirve desde dos direcciones distintas, una del sitio de Luis Guillermo Vasco y otra del portal de la Gobernación de Antioquia, pero el archivo es el mismo y está mutilado por el margen derecho: en la entrada de este título se perdieron el año y la página inicial. El año de 1990 se recupera de otras entradas del mismo volumen en esa misma guía; la página inicial, no.

Conviene deshacer dos atribuciones que circulaban. La primera es geográfica: la guía dice Río Verde, Chocó, mientras que la Organización Nacional Indígena de Colombia registra un Río Verde entre los ríos del territorio embera katío de Córdoba, junto al Sinú y al Esmeralda, y la misma guía menciona todavía otro Río Verde en Nutibara, Antioquia. Tres ríos con el mismo nombre en tres departamentos: la localización del narrador no puede darse por resuelta con más precisión que la que da su propia fuente. La segunda atribución que sobraba es la de Dachi Chiuu y el Alto Andágueda, que no tiene ningún respaldo en esta lista y no vuelve a aparecer aquí.

Lo que sí puede sostenerse es el marco. Severino de Santa Teresa registra que entre los katío la aptitud para cazar se decide desde la infancia por prescripciones alimentarias, que sobre el recién nacido se formula el deseo de que salga buen cazador y pescador, y que el canto de cierto pájaro pronostica la suerte al que va a cazar: fallar no es torpeza, es señal. Javier Rosique y sus catorce coautores, entre ellos Nataly, Arnulfo y Justico Domicó, documentan en Chigorodó a Pãkõré, también llamada Imamá-Pãkõré, tigre-suegra, madre o patrona de los animales de presa del mundo de abajo, que según Hernández, 1995, rapta cazadores para unirlos conyugalmente con una hembra, y explican que el apelativo es un término de parentesco: la suegra entrega a su hija y recibe respeto y obediencia del yerno. Ese marco explica de qué habla el título, pero no es este relato y no debe leerse como si lo fuera.`,
    versiones: `Hay un solo testimonio de esta historia, no está transcrito en ninguna parte accesible, y la única constancia de él es una ficha de catálogo cuya línea de resumen tiene veintiuna palabras. No hay, por tanto, variantes que comparar: no hay un segundo narrador, ni una segunda edición, ni una grafía alternativa del nombre del narrador, ni un episodio que una versión traiga y otra no. Lo que hay es un hueco, y lo que sigue sirve para que no se rellene con material ajeno.

Tres narraciones que se le parecen no son suyas. La primera es el relato de Pãkõré que el jaibaná Arnulfo Domicó contó en Chigorodó y que Rosique y sus coautores publicaron en 2020: allí un joven interroga al sol, a las piedras, a los barrancos y a los árboles durante casi un año sin obtener respuesta, hasta que las plantas pequeñas le contestan en sueños y lo mandan a bañarse con el agua donde se reflejan los árboles, la luna y el arco iris, y luego a bajar donde hay gente para enseñar. Es un relato de origen del jaibanismo, no de cacería.

La segunda es la que Antonio María Cardona y Jairo Miguel Guerra resumieron en 2013 bajo el epígrafe de recompensa al valor: tres hombres y dos mujeres salen a cazar tigres, los rodea de noche una manada, los dos maridos huyen y el tercer cazador pelea toda la noche, mata a muchos y salva a las mujeres, que al llegar a la aldea abandonan públicamente a los cobardes y se van con él. Ahí el buen cazador gana y el mal cazador pierde: es el reverso exacto del título de esta página, y por eso mismo no puede servirle de relleno.

La tercera está en el mundo chamí. En la narración del nacido de la pierna que Reichel-Dolmatoff recogió en Río Frío en 1945, el protagonista es insoportable para su gente, que llega a planear matarlo mientras duerme, y se salva porque era un gran cazador y sólo por eso lo aguantaban. La destreza en la caza aparece ahí como crédito social, no como relación con los dueños del monte.

Ninguna de las tres pertenece a Zaquidiama Domicó ni a Río Verde, y mezclarlas produciría exactamente la historia inventada que esta página tenía antes: una anciana profética, una diosa de cabellos largos, un túnel de siete días y una transformación en manao, ninguna de las cuales tiene respaldo en la lista de fuentes.`,
    leccion:
      "Volver del monte con las manos vacías puede ser una señal y no una torpeza.",
    similitudes: `El primer paralelo documentado está en la etnografía del propio noroccidente antioqueño, y es el que hace inteligible el título. En los resguardos de Polines y Yaberaradó, en Chigorodó, la cacería depende de Pãkõré, también llamada Imamá-Pãkõré, tigre-suegra, madre de los animales de presa del mundo de abajo, que rapta cazadores para unirlos conyugalmente con una hembra zaíno o tatabro, precisamente porque son las piezas favoritas de los cazadores; el mismo trabajo recuerda que Nordenskiöld recogió del jaibaná Selimo la idea de que los puercos de monte tienen un capitán, huántra, y los tigres un imamáhuántra. La diferencia con el título de esta página es que allí el cazador se lleva la presa y por eso queda en deuda, mientras que aquí el cazador no se lleva nada.

El segundo paralelo es cosmológico y viene del alto Baudó, emberá dóbida. Mauricio Pardo describe un mundo llamado yhábera, debajo de este, con selvas y ríos, donde moran las madres o dueños de algunas especies, entre ellas la madre de los pecaríes, y precisa que para pasar de un mundo a otro un personaje se sumerge en una quebrada y aflora en una quebrada del otro mundo. Los dos mundos son contiguos y opuestos como las caras de una hoja. Ahí, apartarse de las rutas conocidas y cruzar quebradas deja de ser una metáfora. Pero el material de Pardo es dóbida y lo katío le entra por vía de Severino, así que la correspondencia es de estructura, no de procedencia.

Un tercer contraste, esta vez con cifras, viene del Alto San Jorge cordobés: en las comunidades embera katío de Ybudó, Mogaradó, Narindó y Mejondó se documentó que las presas apreciadas son el saíno y el manao, la guartinaja, el armadillo y el ñeque, y que a los grandes felinos se les tiene temor y respeto por ser competidores por esas mismas especies, con más valor simbólico para el puma que para el jaguar. La caza de la que habla el título no es un paisaje abstracto: tiene especies, nombres en lengua y competidores.`,
    excerpt:
      "Un hombre incapaz de cazar sigue a los animales y aprende que el monte exige medida, relación y respeto.",
    seoTitle: "El hombre que no podía cazar: relato Katío",
    seoDescription:
      "Lee el relato de Zaquidiama Domicó sobre el cazador que sigue a los animales y transforma su relación con el monte.",
    focusKeywords: [
      "el hombre que no podía cazar",
      "Zaquidiama Domicó",
      "mito Emberá Katío",
      "animales del monte",
      "Río Verde",
    ],
    tags: ["transformación", "naturaleza", "bosque", "tradición oral"],
    sourceKeys: [
      "cardonaHunter",
      "bicanGuide",
      "onicKatio",
      {
        key: "rosiqueGraciaTodos2020",
        summary:
          "Es la fuente que da nombre y mecanismo a lo que este relato cuenta sin explicar. La cacería, dicen, «depende de Pãkõré también llamada Imamá-Pãkõré (tigre-suegra), madre o patrona de los animales de presa del mundo de abajo», y citando a Hernández (1995:145): «Ella rapta los cazadores para unirlos conyugalmente con una mujer Yambéra, en especial una hembra zaíno o tatabro, dado que corresponden a las piezas favoritas de los cazadores. Por lo tanto, al ser la madre de los animales, bien justifica su apelativo de suegra». El hombre que sigue a los animales y se queda con ellos no está siendo premiado ni castigado: está siendo tomado como yerno por la dueña de la caza. El artículo añade que embera y animales de cacería son «presas recíprocas», que en los mitos del Chocó «hombres solos se convierten en animales con hábitos solitarios y grupos de hombres se convierten en manadas de cerdos salvajes», y que Nordenskiöld recogió del jaibaná Selimo la idea de que los puercos de monte tienen un capitán, huántra, y los tigres un imamáhuántra. Define además drua wãndra (drua: tierra donde no se puede entrar; wãndra: espíritu guardián o dueño del territorio), que es el ámbito al que el cazador entra.",
        limitation:
          "No transcribe el relato del hombre que no podía cazar: aporta el marco etnográfico que lo hace legible, no una versión. Los resguardos estudiados son emberá eyábida y también chamí, y la población de Chigorodó procede de las cuencas del Sinú y el San Jorge (Córdoba), de modo que lo que se describe es el katío del Urabá y Córdoba desplazado, no el del registro de 1924-1929. La cita clave sobre Pãkõré es de segunda mano (Hernández 1995), no de campo propio. El artículo se ocupa de sitios sagrados y armonización ritual, con un marco teórico (ontologías, perspectivismo) que impone su propio vocabulario.",
      },
      {
        key: "rojasescalera1986",
        summary:
          "Sitúa a los dueños de los animales en un lugar preciso del cosmos, que es adonde va el cazador del relato: «debajo de este mundo hay otro llamado /yhábera/, es similar a éste, con selvas y ríos. Allí moran algunos seres, algo así como espíritus, por ejemplo las 'madres' o 'dueños' de algunas especies (como la madre de los pecarís /idó papa/)». Añade un detalle topográfico que explica cómo se cruza: «para pasar de un mundo a otro un personaje se sumerge en una quebrada y aflora en una quebrada del otro mundo», es decir, los dos mundos son contiguos y opuestos «como las caras de una hoja». Eso convierte el «apartarse de las rutas conocidas y cruzar quebradas» de la ficha en un desplazamiento cosmológico reconocible y no en una metáfora.",
        limitation:
          "Los datos son del alto Baudó (dóbida) y de Guangui; lo katío entra por la vía de Severino de Santa Teresa. No trata la cacería como tema propio: la mención de las madres de especie es incidental dentro de un artículo de etnoastronomía. La transcripción fonémica sale deformada en el PDF digitalizado.",
      },
      {
        key: "cardonaMitologia2013",
        summary:
          "Sostiene explícitamente la lectura ecológica que la ficha propone, y con ejemplos: los mitos «son códigos de normas, tabúes y prescripciones y consejos de lo que no se debe hacer», y bajo el epígrafe «Ecológica» explica cómo la creencia en los nusí de las pozas profundas hace que «se cuidan los pescadores de las áreas de nusí, lo que significa un alivio para los peces». Aporta además la figura de Pakoré wera como creadora de «la Naturaleza, los animales y las plantas», y el mito donde los animales custodios (Genserá del agua, Jimo del fuego, Kumbarrá de las semillas) niegan los bienes a los humanos porque «los hombres no hicieron buen uso de los elementos»: la misma gramática de reciprocidad rota que está detrás del cazador sin presa.",
        limitation:
          "Es un texto de síntesis panorámica, no una monografía sobre cacería, y no contiene este relato. El campo es Nuquí, golfo de Tribugá (dóbida), con refuerzos de Córdoba sin separar sistemáticamente las atribuciones. El método declarado es de notas de memoria, no de transcripción literal, y hay tramos de prosa interpretativa del autor (comparaciones con Frazer, Einstein y Hawking) que no deben confundirse con la voz de los narradores.",
      },
      "raceroCasarrubiaPercepcion2008",
      {
        key: "severino1924",
        summary:
          "Aporta el trasfondo katío de lo que significa ser o no ser buen cazador, que es la premisa del relato. Registra que la aptitud se decide desde la infancia por prescripciones alimentarias («…animales, no sale buen cazador, por eso la primera vez que le…»), que el deseo que se formula sobre el niño es «que salga buen cazador y pescador, y basta», que el canto de cierto pájaro «le pronostica su suerte» al que va a pescar o a cazar, y que «tanto los cazadores como los pescadores tienen cuidado de…» observar restricciones. Es decir: en el registro katío, fallar en la caza no es torpeza sino signo, y eso es exactamente lo que el relato desarrolla.",
        limitation:
          "El libro no contiene este relato: ninguna de sus leyendas es la del hombre que no podía cazar, de modo que su aporte es de contexto y no de versión. Es la reelaboración de 1959, no la edición de 1924. Marco misionero explícito y sin identificación de narradores ni de localidades. La transcripción de archive.org es OCR de un impreso antiguo, con guiones de corte de línea y erratas frecuentes.",
      },
    ],
    researchNotes: `NARRADOR: Zaquidiama Domicó, principal de Río Verde.
FUENTE: Cardona 1990, pp. 165-168, acreditada por la guía BICAN.
DECISIÓN: retirar los episodios novelados que no aparecen en el resumen documental.
${archiveResearch}`,
  }),
  archiveRecord({
    slug: "ancastor",
    title: "Ancastor, el ave que viajó al cielo",
    mito: `Se murió una señora y su familia lloraba mucho. En ese tiempo todavía no había maíz en este mundo.

Una de las mujeres, ya muy aburrida de llorar, salió a una montaña, miró al sol y le dijo a la compañera que también a ellas les llegaría el día de morir. Al rato se apareció Ancastor, un ave blanca, que se volvió hombre y les preguntó por qué lloraban tanto. Ellas le dijeron que por la muerte de su hermana. Ancastor les respondió que no lloraran, porque ella estaba en el Bajía, el cielo. Ellas dijeron entonces que querían ir a verla.

Yo las llevo, les dijo. Pero cómo, preguntaron ellas. Cierren los ojos, dijo Ancastor, y abrió las alas y las hizo montar, una en cada ala, y les advirtió que no los abrieran. Así las llevó por el aire hasta el Bajía.

Allí se desmontaron y siguieron a pie. Llegaron a una casa grande y encontraron unas mujeres de senos tan grandes que les llegaban a las rodillas. Ancastor les dijo que no les hablaran, y siguieron. Más adelante encontraron mucha gente conocida que ya se había muerto, y entre esa gente estaban la hermana y también un hermano al que habían matado. Lo iban a abrazar, pero Ancastor les dijo que no. Dos días estuvieron en el Bajía.

A la vuelta vieron maíz y chontaduro, y les pareció muy bueno. Ancastor les dijo que no llevaran ninguna fruta, porque era muy peligroso bajarlas. Una de ellas guardó de todos modos un grano de maíz en la boca, y la otra guardó una fruta de chontaduro. Ancastor las bajó igual.

Cuando bajaron al mundo les contaron a los demás lo que habían visto: que uno se muere, pero que en el Bajía se encuentra otra vez con los suyos. Y les mostraron las frutas de maíz y de chontaduro que traían. Las sembraron, sacaron la semilla y después comieron. A todo el mundo le pareció bueno, y todos sembraron y cosecharon.`,
    historia: `Este es el único mito del corpus katío antiguo que llega con el nombre de quien lo narró. Lo contó Rafael Bailarín, indio katío, y lo recogió Milcíades Chaves Ch. Salió como relato quinto, «Cómo consiguieron los indios el maíz y el chonta-duro», en las páginas 149 y 150 de «Mitos, tradiciones y cuentos de los indios Chamí», Boletín de Arqueología, volumen I, número 3, Bogotá, 1945. En la página 134 Chaves deshace la confusión que arma su propio título: de los nueve cuentos que transcribe, los cuatro primeros se los narró Nicolás Henao, chamí de Balboa, y los cinco últimos los recogió de boca de Rafael Bailarín, indio katío. Chaves da además los datos del narrador: Bailarín era jaibaná, estaba casado con Pola Henao, mujer chamí, aprendió los cuentos de su abuela y tradujo él mismo del katío. No hay intermediario entre la lengua y la página.

Lo que la ficha publicada hasta ahora atribuía al libro de fray Severino de Santa Teresa no está en él. Buscado en los 610.154 caracteres del volumen de 1959 —que es la segunda edición de la obra de 1924—, el nombre Ancastor aparece cero veces. El material sí es katío, pero viene de otro libro y de otro año.

Eugenia Villa Posse lo sitúa en su capítulo katío en «Mitos y leyendas de Colombia», volumen III, 1993, y su nota remite a Chaves, no a Severino.

Aída Gálvez es la única autora académica que nombra a Ancastor, en «El binomio maíz-plátano: alimentación y símbolos en la cultura emberá», Boletín de Antropología 27, Universidad de Antioquia, 1997. Pero no llegó a él por Chaves sino por Víctor Manuel Patiño, «El maíz chococito», América Indígena XVIII-3, 1958, páginas 192 y 193, y en esa cadena se perdió el crédito: Gálvez describe al narrador sólo como «un indígena del noroccidente antioqueño», sin nombrar a Bailarín ni decir que era katío. Gálvez sí aporta lo que el archivo no dice: coloca el episodio en la estructura de los tres estratos —utre, egoró, annukurá— y lo contrasta con las versiones en que el maíz viene de abajo.

Antonio María Cardona y Jairo Miguel Guerra registraron en trabajo de campo de 2012, entre emberá dóbida de Jawa en el río Chorí, de Tandó y Nuquí arriba en el río Nuquí y de Yucal en el río Panguí, una frase que devuelve al ave su oficio y su especie: que nadie todavía había subido a horcajadas sobre Ankosotor, el golero blanco para viajar a Bajá, el mundo donde van los muertos. El ave que sube al cielo no es, entonces, un personaje suelto de un cuento de 1945.

Lo que ninguna de estas fuentes alcanza a decir es dónde y cuándo narró Bailarín. Chaves no lo anota.`,
    versiones: `Para la versión katía hay un solo testimonio: el de Rafael Bailarín, recogido una vez, publicado una vez. Eso significa que no hay con qué contrastarlo. No se puede saber qué episodios traía otro narrador katío, ni si el nombre se decía de otra manera en otro río, ni qué se suprimió al pasarlo al castellano. Todo lo que se sabe de este mito entre los katío se sabe por una tarde de trabajo de un etnólogo con un jaibaná.

Lo que sí se puede contrastar es la dirección del viaje, y ahí las tradiciones emberá se separan limpiamente. El propio Chaves pone al lado la versión que Erland Nordenskiöld recogió en 1927 entre los chocó del istmo de Panamá: allí el maíz no baja del cielo, sube de Chiapérera, el mundo de abajo; no lo esconde una mujer en la boca sino que un padre se lo hace tragar a su hijo y lo recupera de sus excrementos con un palo; y el final no es abundancia sino pérdida, porque la mujer chiapérera se vuelve a su mundo llevándose casi todo el maíz y sólo queda una mazorca de cada clase. Aída Gálvez añade la versión del Baudó que recogió Mauricio Pardo, en la que Jerú Potó, el hijo de Pierna, cae al mundo de abajo y regresa con semillas de chontaduro, caimito y ají. Luis Guillermo Vasco observa, sin nombrar a Ancastor, que maíz y chontaduro viajan siempre juntos y siempre cruzando una frontera de mundo, y que la dirección es justamente el punto donde las versiones se apartan.

Cambian también los nombres. Ancastor en 1945 y Ankosotor en 2012; Bajía en 1945 y Bajá en 2012. Son formas vecinas, no idénticas, y las comunidades tampoco son las mismas: Bailarín era katío, los narradores de Nuquí son dóbida. Nada demuestra que designen exactamente lo mismo, aunque el oficio del ave coincida.

Conviene además no confundir dos palabras que se parecen. El Bajía de este mito es el cielo, el lugar donde están los muertos. Baha, en el corpus de 1924 y 1929, es el trueno y el rayo. La cercanía es sonora y no se extiende al sentido.`,
    leccion:
      "El duelo no devuelve a nadie, pero puede volver con una semilla escondida en la boca.",
    similitudes: `El cotejo obligado es el mito chocó del maíz que Erland Nordenskiöld recogió en 1927 en el istmo de Panamá y que Chaves transcribe entero al lado de este. Allí un huérfano maltratado por su madrastra se va en canoa, lo seduce una muchacha venida de Chiapérera, el mundo de abajo, y de allá regresa con el maíz escondido en el estómago de su hijo. Lo semejante es la semilla escondida en un cuerpo para pasar una frontera. Lo distinto es todo lo demás: el viaje va hacia abajo y no hacia arriba, no hay duelo ni encuentro con los muertos, y el desenlace es una pérdida, porque la mujer vuelve a su mundo llevándose casi todo.

El segundo paralelo viene de un pueblo que no es emberá. Chaves reproduce el mito chimila que recogió con Gerardo Reichel-Dolmatoff, en el que la semilla del maíz estaba guardada arriba, en lo más alto de una ceiba, y el árbol se componía solo cada noche hasta que los hombres decidieron trabajar también de noche y lo tumbaron a medianoche. También aquí el maíz está arriba, pero arriba en un árbol de este mundo, y se consigue con trabajo sostenido, no con un vuelo prestado ni con una desobediencia. No hay ave, no hay muertos, no hay prohibición que romper.

El tercero está dentro del propio corpus emberá y lo señala Aída Gálvez: Jerú Potó, el nacido de la pierna, cae al mundo subterráneo en la versión del alto Baudó que recogió Mauricio Pardo y sube de allí el chontaduro. La pareja maíz-chontaduro es la misma, la frontera cruzada es la misma, y sólo se invierte el eje.`,
    excerpt:
      "Un ave blanca lleva a dos mujeres a Bajía, donde ven a sus muertos y esconden semillas para traerlas a la tierra.",
    seoTitle: "Ancastor: el ave blanca del cielo",
    seoDescription:
      "Conoce el relato de Ancastor, el ave que lleva a dos mujeres a Bajía y trae con ellas maíz y chontaduro.",
    focusKeywords: [
      "Ancastor",
      "ave blanca Emberá",
      "viaje a Bajía",
      "origen del maíz",
      "mito Katío",
    ],
    tags: ["Ancastor", "ave", "muerte", "origen"],
    sourceKeys: [
      "villa1993",
      "chaves1945",
      "minInteriorPlan",
      "galvezbinomio1997",
      {
        key: "cardonaMitologia2013",
        summary:
          "Registra, en trabajo de campo de 2012, un nombre casi idéntico y con la misma función: al contar que antes de que llegara la muerte «nadie todavía había subido a horcajadas sobre Ankosotor, el golero blanco para viajar a Bajá, el mundo donde van los muertos». Es decir, el ave blanca que lleva a Bajía no es un personaje suelto de un cuento de 1945: es la montura con que se viaja al mundo de los muertos, sigue nombrada casi un siglo después, y «golero blanco» le da una identidad zoológica —el gallinazo rey— que ni Chaves ni la ficha precisan.",
        limitation:
          "El nombre es Ankosotor y el cielo Bajá, no Ancastor y Bajía: son formas vecinas, no idénticas, y no hay demostración de que designen lo mismo. Las comunidades son de Nuquí, río Chorí y río Panguí (emberá dóbida de la costa chocoana), no katías; los propios autores anotan que allí Karagabí «tiene poco peso». La mención es de una línea, dentro de una síntesis, sin relato desarrollado.",
      },
      {
        key: "uribeplata2001",
        summary:
          "Explicita la alternativa entre los dos orígenes de la pareja maíz-chontaduro, que es justo lo que está en juego en Ancastor: Caragabí «está asociado con los otros mundos, bien con el de abajo, de donde provienen el jaibanismo, el maíz y el chontaduro, bien con el de arriba, de donde otras versiones hacen provenir también estos dos cultivos». Confirma que maíz y chontaduro viajan siempre juntos y siempre cruzando una frontera de mundo, y que la dirección del viaje —arriba o abajo— es precisamente el punto en que las versiones se separan.",
        limitation:
          "No menciona a Ancastor ni el episodio de las dos mujeres. Es un ensayo sobre el oro; la observación sobre maíz y chontaduro es incidental y se apoya en el trabajo previo del propio autor. Material sobre todo chamí y waunaan.",
      },
      {
        key: "compCuentos1933",
        summary:
          "Es el término de comparación obligado: contiene la versión chocó de cómo se consiguió el maíz, en la que el grano no baja del cielo sino que sube de Chiapérera, el mundo de abajo, escondido no en la boca sino en el estómago de un niño, y en la que el desenlace es una pérdida —la mujer chiapérera se vuelve a su mundo llevándose casi todo el maíz y sólo queda una mazorca de cada clase. Puesta al lado de Ancastor, deja ver que lo específico de la versión katía no es el motivo de la semilla escondida sino la dirección del viaje, la mediación del ave y el reencuentro con los muertos.",
        limitation:
          "NO PUDE LEER EL TEXTO COMPLETO. Persée sólo publica en línea el prólogo del artículo y la copia de Gallica está tras una verificación antibot que no franqueé. Lo que afirmo de su contenido procede de la transcripción literal que hace Chaves 1945 (pp. 150-151, referencia «9-107, 108») y de la cita de Gálvez 1997 (Wassén 1933: 107-110), no de lectura directa. Los narradores son emberá del istmo de Panamá, no katíos.",
      },
    ],
    imagePromptHorizontal:
      "Ilustración panorámica full paper cut y paper quilling, no fotografía: una gran ave blanca Ancastor vuela entre montañas y cielo llevando con cuidado a dos mujeres sobre sus alas; al fondo aparece Bajía como paisaje luminoso de papel, con maíz y chontaduro discretos, sin ángel humano, sin alas pegadas a una persona, sin iconografía cristiana, sin texto, sin maqueta física, diorama ni 3D.",
    imagePromptVertical:
      "Ilustración vertical full paper cut y paper quilling, no fotografía: Ancastor como ave blanca real ocupa el centro y desciende del cielo con dos viajeras sobre sus alas; una protege un grano de maíz y otra un fruto de chontaduro, nubes y cordillera en capas recortadas, sin ángel, aureola o santo, sin texto, sin maqueta física, diorama ni 3D.",
    researchNotes: `CADENA: Villa 1993 remite a Chaves 1945.
CORRECCIÓN VISUAL: Ancastor es un ave blanca que puede volverse hombre, no un ángel con alas.
REEMPLAZO: horizontal y vertical.
${archiveResearch}`,
  }),
  archiveRecord({
    slug: "antomia",
    sourceKeys: [
      "severino1924",
      "rochereau1929",
      "villa1993",
      "clacsoRegionalization",
      "onicKatio",
      {
        key: "uribeJaibanas1985",
        summary:
          "Es el tratamiento más extenso publicado del personaje y la mejor defensa de lo que esta ficha sostiene. Recorre todas sus apariciones bajo los nombres antomiá, antumiá, tumiaw y tumí: marido de la 'diabla' que inicia al primer jaibaná en uno de los mitos de origen del jaibanismo, causa de la locura —'basta con que Antumiá pase al lado de una persona para que esta enferme'—, y espíritu invocado por el jaibaná junto con los Dojura en la curación de la tierra y en el mito de la Jepá, en la narración de Clemente Nengarabe. Registra la discrepancia entre fuentes: Pinto lo tiene por deidad femenina ligada al agua, Loewen por masculino salvo en algunos grupos, Pineda y Gutiérrez por madre de agua que se lleva a los hombres pero nunca a los jaibanás, 'estando, al contrario, bajo sus órdenes'. Y concluye que el jaibaná no invoca sólo jais sino 'un ser mucho más poderoso, incluso con poder sobre los primeros, llamado Antumiá'. Sobre la traducción misionera es explícito: 'la relación entre el mal y el bien está distante de la creencia católica de la lucha entre el diablo y Dios'. Recoge además el episodio del tigre Antomiá torro quemado dentro de la olla, de donde el barro quedó frágil.",
        limitation:
          "El campo propio de Vasco es chamí, y varias de las versiones que discute son del Chocó y de otros autores (Pinto, Loewen, Reichel, Pineda y Gutiérrez); el material katío de Urabá entra citado de Santa Teresa. No trae los dos episodios de la ficha —la burla a Caragabí y la competencia por hacer gente— y no menciona a Antomiá paima. Su lectura es interpretativa: construye una serie de identidades (agua-Antumiá-tigre-barro-mundo de abajo) que es tesis del autor, no enunciado de los narradores. El PDF está en el sitio personal del autor.",
      },
      {
        key: "cardonaMitologia2013",
        summary:
          "Formula con claridad lo que la ficha declara sobre el filtro cristiano: 'Antomiá o Antumiá para otros, que vive con su Antomiá wera, más poderosa que él. Con la influencia cristiana ha tomado la categoría de diablo, señor del mal. Pero en las leyendas ancestrales, Antomiá no es bueno ni es malo, sencillamente rige el bien y el mal, a él debe aliarse el jaibaná para obtener jais para sus labores mágicas y de curación. Si fuera malo no se los daría para curar, es el hombre el que decide y dispone entre el bien y el mal y no Antomiá'. Añade una forma que desmiente cualquier iconografía demoníaca: 'entre los embera del río Sinú Antomiá se les aparece a los hombres en la forma de un niño tierno, hombre o mujer, sentado entre las aguas jugueteando con los peces'. Y lo sitúa rigiendo a los yamberas, nusi, aribada, guangano y madres de agua.",
        limitation:
          "El campo es de 2012 en el golfo de Tribugá (Nuquí, Chocó) más experiencias anteriores del Chocó y Córdoba; la única referencia explícitamente ligada a territorio katío es la del río Sinú. No narra ni la burla a Caragabí ni la competencia creadora ni la expulsión a Edaa, y no menciona Antomiá paima. El texto mezcla transcripción, interpretación y opinión del autor —incluidas valoraciones fuertes sobre la evangelización— sin separar los registros.",
      },
      {
        key: "rosiqueGraciaTodos2020",
        summary:
          "Documenta a Antumiá vigente entre emberá eyábida (katío) del Urabá antioqueño, la misma región del libro de 1924, y con jaibanás y sabias de la comunidad firmando como coautores. En los parajes de drua wãndra los puntos liminales —cuevas, rocas, pozas, cabeceras, cascadas— 'permiten el ingreso espiritual de los jaibanás, la movilización de espíritus de algunos muertos, del temido Antumiá del mundo de abajo, sin olvidar a los hombres y mujeres pertenecientes al pueblo Yhaberará'. Antumiá no está encerrado tras una puerta sellada como en la versión misionera de Edaa: circula por pasajes conocidos y nombrados del territorio, y el mundo de abajo del que viene es también de donde se espera sabiduría y conocimiento sobre las plantas.",
        limitation:
          "Es una sola mención, dentro de un inventario de habitantes de los sitios sagrados; no hay relato de Antomiá, ni la burla, ni la competencia creadora, ni la transformación en perros. Una de las cuatro comunidades del estudio, Dojura, es chamí, de modo que hay que verificar en qué resguardo se recogió cada dato. El foco del artículo es Pãkõré y la relación con las plantas y la cacería.",
      },
      {
        key: "rojasescalera1986",
        summary:
          "Da la ubicación cosmológica y la glosa del nombre sin pasar por la traducción misionera. Describiendo el mundo de abajo del alto Baudó, /yhábera/, dice que allí moran 'algunas 'madres' o 'dueños' de algunas especies... o los /atomiá/ o 'madre de agua' que son como unos hombres monstruosos que habitan en el río y que los jaibaná pueden controlar', y que los personajes de los relatos se desplazan entre ese submundo y el de la gente sumergiéndose por las quebradas. Es la lectura opuesta a demonio e infierno: /atomiá/ es un dueño de agua, controlable por el jaibaná, y el mundo de abajo se comunica con éste por el cauce de los ríos, no por una entrada que alguien cerró.",
        limitation:
          "Se trata de emberá del alto Baudó, no katíos, y de una descripción de niveles del cosmos dentro de un informe de etnoastronomía, no de una narración. Pardo no recoge ningún relato de Antomiá: ni la burla a Caragabí, ni la competencia creadora, ni Antomiá paima. La grafía /atomiá/ difiere de la del expediente misionero y él mismo advierte de la variación dialectal.",
      },
      {
        key: "uribeplata2001",
        summary:
          "Liga a Antomiá con el oro y con el mundo de abajo, una relación que la ficha no tiene. Por un lado, las «mujeres antomiáes» casadas con los burumiás fueron quienes «les enseñaron a valerse de las manos para sacar oro de los filones». Por otro, en los relatos chocoanos de Ventura, cuando éste «es raptado por los Antumiás y llevado al mundo de abajo y navega por los ríos, ve a su alrededor una gran abundancia de cántaros rebosantes de oro». Antomiá aparece así como dueño o vecino de la riqueza del mundo inferior, no como un derrotado sin bienes.",
        limitation:
          "Es un ensayo sobre metalurgia y tradición oral del oro; Antomiá entra como pieza de un argumento sobre el «lugar natural» del oro. Los relatos de Ventura son del Chocó (emberá dóbida y del Baudó), no del corpus katío de Urabá, y Vasco los resume sin transcribirlos.",
      },
    ],
    title: "Antomiá",
    mito: `De Antomiá dicen que también fue obra de Caragabí, aunque no saben decir de qué lo formó, y que en sus principios era bueno.

Dejó de serlo un día en que Caragabí se embriagó y quedó desnudo, y Antomiá se burló de él. Cuando el dios volvió en sí y supo lo ocurrido, lo cambió de condición y lo sepultó en Edaa, que está dentro de la tierra, y cerró su puerta para que no pudiera salir jamás. Con él bajaron otros compañeros suyos.

El encierro no lo quitó de en medio. Un día Antomiá se levantó contra Caragabí desafiándolo, diciendo que era tan sabio como él, y a semejanza suya quiso hacer también su gente. Caragabí lo encontró trabajando en esa obra y le preguntó qué hacía. Antomiá no se dignó contestarle. Volvió a preguntarle, y esta vez le respondió malhumorado que estaba haciendo usó, perros. A lo cual repuso Caragabí: pues que sean perros. Antomiá lo desafió, pero en la pelea quedó vencido, y él y los suyos, convertidos en perros, fueron arrojados a Edaa.

No hay un solo Antomiá. Hay dos clases, el blanco y el negro, y los dos tienen sus hazañas. El blanco quiso entrar en competencia con los dioses juzgándose igual a ellos y se metió en la gran olla de la prueba del fuego, pero no pudo soportarlo y salió todo quemado.

El negro era horriblemente ladrón. Atormentaba mucho a una india jaibaná, robándole cuanta comida hacía: a ella le gustaba pasear y dejaba el bohío arreglado con ollas de chicha, plátanos maduros, caldos y pescados, y a su vuelta no encontraba nada. Desde lejos lo veía llegar muy contento, cantando y bailando, y en el canto decía: ¿qué comida me tendrá hoy mi nuerita? Un día la india preparó una gran olla de caldo de pescado y, en lugar de plátano y yuca, le puso raíz de moindú, que parece arracacha y ensancha los intestinos. El ladrón, más contento que nunca, se lo comió todo; se paró junto a la escalera con el estómago inflado, cayó del tablado y se reventó con una explosión grandísima. De su vientre salieron fuego, humo y piedras. Antes no había nada de eso, y si no hubiera muerto así, los ríos serían lisos y no tendrían una sola piedra.

De otros diablos gigantes cuentan que se comían a los niños huérfanos de madre, hasta que un indio hizo una trampa y puso en ella a su propio hijo para que el diablo cayera. Así sucedió, y el indio, que atisbaba de lejos, le dio un golpazo con una barra de hierro. Quedó despedazado, y de sus despojos se formó el ñame.

Y de muy atrás viene otra cosa. Los indios de la primera edad, los burumiáes, andaban desnudos y no tenían herramientas, y se juntaron con mujeres antomiáes. Fue Antomiá quien les enseñó a valerse de sus manos como de unas aspas para sacar el oro de sus filones.`,
    historia: `Los dos episodios propios de esta historia —la burla al dios embriagado y la competencia por hacer gente— están únicamente en Severino de Santa Teresa, y en dos capítulos distintos y distantes: el primero en el apartado que él titula «Los ángeles», al final de la creación del hombre, y el segundo en el capítulo de la metempsicosis. En ninguno de los dos nombra al indio que se lo contó, ni el lugar, ni la fecha, y en ambos traduce de plano: Antomiá es «el demonio» y Edaa es «el infierno». Se leen en la segunda edición, la de 1959, porque la de 1924 no está en acceso abierto.

Conviene decirlo con todas sus letras: ninguna de las demás fuentes de esta lista trata esos dos episodios. Vasco Uribe (1985), que es el tratamiento más extenso publicado del personaje y recorre sus apariciones bajo los nombres antomiá, antumiá, tumiaw y tumí, no trae ni la burla ni la disputa por crear, y no menciona a Antomiá paima. Cardona y Guerra (2013) tampoco, y su única referencia ligada a territorio katío es la del río Sinú. Pardo Rojas (1986) describe a los /atomiá/ del alto Baudó y no recoge relato alguno. Rosique-Gracia y otros (2020) nombran a Antumiá una sola vez, dentro de un inventario de quienes transitan los sitios sagrados de Chigorodó. La ficha descansa, para su núcleo, en un solo texto.

Lo que sí añaden las notas de 1929 es el desdoblamiento del personaje y la historia del ladrón: distinguen «Antomiá torro (diablo blanco)» y «Antomiá paima (diablo negro)», y cuentan la muerte de este último por la raíz de moindú, de la que salen el fuego, el humo y las piedras. Las propias autoras avisan, en su introducción, que sus tradiciones a veces se contradicen y ponen como ejemplo precisamente el origen del fuego, «producido éste, como se verá en su lugar, por la muerte de Antomiá paima». Ese material lo recogieron las Hermanas misioneras de la Inmaculada Concepción y Santa Catalina de Sena; Rochereau lo remitió y Rivet lo publicó advirtiendo que ya se había usado en parte para el libro de 1924, así que no corrobora a Severino: sale del mismo fondo.

Contra la traducción misionera hay dos lecturas explícitas y verificables. Cardona y Guerra: «con la influencia cristiana ha tomado la categoría de diablo, señor del mal. Pero en las leyendas ancestrales, Antomiá no es bueno ni es malo, sencillamente rige el bien y el mal, a él debe aliarse el jaibaná para obtener jais para sus labores mágicas y de curación». Y Vasco, más seco: «la relación entre el mal y el bien está distante de la creencia católica de la lucha entre el diablo y Dios». Vasco (2001) añade el vínculo con el oro que el episodio de los burumiáes ya insinúa, y Pardo sitúa a los /atomiá/ como dueños de agua controlables por el jaibaná, que es exactamente lo contrario de un condenado tras una puerta cerrada.`,
    versiones: `El mismo expediente de 1929 trae la borrachera de Caragabí contada de otro modo, y sin Antomiá. Ahí el dios se embriaga y queda desnudo, y quien se burla es uno de sus hijos; el segundo apenas se sonríe y el tercero lo cubre y después le cuenta lo sucedido. Caragabí maldice al primero y a su descendencia, se enoja con el segundo y premia al tercero, y de ese reparto salen, según el texto, los tres grupos humanos. No hay conversión en demonio, no hay Edaa y no hay perros: el episodio se ha convertido en una explicación del origen de los pueblos calcada de un relato bíblico y ordenada en jerarquía racial. Es el marco de quienes escribieron, y así hay que leerlo.

También cambia quién enseñó el jaibanismo. Severino lo recogió de Donungubi Domicó como obra de una diabla que se llevó a dos niños al monte; las notas de 1929 dicen que fue Antomiá torro, el diablo blanco, y añaden por su cuenta la advertencia: «habíamos visto que era una diabla, pero ésta tradición es distinta de la primera y la cuenta otra tribu».

El episodio de la olla circula con dos protagonistas. Severino pone en ella a Antomiá-Torro, que sale todo quemado; María de Betania recogió la misma escena con un tigre, y en esa versión lo que queda del fracaso es que el barro se volvió frágil, cuando antes era duro como el metal.

Y el ser mismo no tiene una sola figura ni un solo sexo. Pinto lo tuvo por deidad femenina ligada al agua; Loewen por masculino salvo en algunos grupos; Pineda y Gutiérrez por una madre de agua que se lleva a los hombres pero nunca a los jaibanás, que están por encima de ella; Cardona y Guerra dicen que vive con su Antomiá wera, más poderosa que él, y que entre los emberá del río Sinú se aparece «en la forma de un niño tierno, hombre o mujer, sentado entre las aguas jugueteando con los peces». Las grafías acompañan esa dispersión: Antomiá, Antumiá, Tumiaw, Tumí, /atomiá/, y en el ejemplar digitalizado de 1929 el nombre no conserva sus tildes.`,
    leccion:
      "Una palabra dicha de mal humor puede fijar para siempre la forma de lo creado.",
    similitudes: `Entre los emberá del golfo de Tribugá, en Nuquí, Cardona y Guerra recogieron en 2012 un Antomiá que no está encerrado ni vencido: vive con su Antomiá wera, más poderosa que él, y el jaibaná debe aliarse con él para obtener los jais con que cura, porque «si fuera malo no se los daría para curar». Y entre los emberá del río Sinú se aparece «en la forma de un niño tierno, hombre o mujer, sentado entre las aguas jugueteando con los peces». Comparte el nombre y el campo de acción, pero no la caída: allí no hay burla, ni competencia por crear, ni puerta cerrada.

Entre los emberá del alto Baudó, Pardo Rojas registró a los /atomiá/ como «madre de agua», hombres monstruosos que habitan en el río y que los jaibaná pueden controlar, y anotó que los personajes de los relatos se desplazan entre el mundo de abajo y el de la gente sumergiéndose por las quebradas. El mundo inferior se comunica con este por el cauce de los ríos, no por una entrada que alguien selló, y quien manda en el trato no es el dios sino el especialista.

Entre los emberá eyábida de Chigorodó, en Urabá —la misma región del libro de 1924—, un estudio firmado también por jaibanás y sabias de la comunidad describe los parajes de drua wãndra como puntos liminales, «cuevas, rocas, pozas, cabeceras, cascadas», que «permiten el ingreso espiritual de los jaibanás, la movilización de espíritus de algunos muertos, del temido Antumiá del mundo de abajo». Sigue siendo temido, pero circula: en el mismo territorio donde el misionero lo dio por sepultado, hoy se lo nombra entre quienes van y vienen por pasajes conocidos.`,
    excerpt:
      "Antomiá desafía a Caragabí, intenta crear su propia gente y termina transformado y expulsado hacia Edaa.",
    seoTitle: "Antomiá: relato histórico Katío",
    seoDescription:
      "Lee los episodios de Antomiá, su conflicto con Caragabí y la variante de Antomiá paima, con mediación misionera explícita.",
    focusKeywords: [
      "Antomiá",
      "Caragabí y Antomiá",
      "Edaa",
      "jaibanismo Katío",
      "mitología Emberá Katío",
    ],
    tags: ["Antomiá", "demonios", "transformación", "orgullo"],
    researchNotes: `FUENTES: Severino 1924 y notas de 1929.
VARIANTE: Antomiá paima no se integra como continuación biográfica.
LÍMITE: “demonio” e “infierno” son traducciones misioneras.
${archiveResearch}`,
  }),
  archiveRecord({
    slug: "aribamias",
    sourceKeys: [
      "severino1924",
      "rochereau1929",
      "villa1993",
      "minInteriorPlan",
      {
        key: "chaves1945",
        summary:
          "En la nota comparativa al relato I, Chaves transcribe entero el pasaje de Rochereau sobre el Aribamia, y esa versión no coincide con la de Santa Teresa: allí es «un gran cuadrúpedo de cabeza enorme, en forma de cántaro», se alimenta de cangrejos, no puede ser herido «porque, a más de no morir, de cada gota de sangre surge otro nuevo Aribamia», y sólo el agua caliente impide que su sangre se reproduzca. Chaves usa ese dato para explicar por qué las dos mujeres del relato de Aribadá ponen a hervir dos ollas antes de matarlo. Además identifica Aribamia con Aribadá y con los Aripadá de Wassén y Nordenskiöld, de los que dice que hay dos clases, «unos de cuatro patas, parecidos al caballo, y otros de dos, que se parecen al hombre». Aporta un arma (el agua hirviendo), una forma zoológica distinta y una red de nombres que la ficha no registra.",
        limitation:
          "Chaves no recogió él mismo un relato de Aribamia: cita a Rochereau y añade comparaciones propias de 1945 (huitotos, Wassén, Nordenskiöld) que son hipótesis del recopilador y no palabras de ningún narrador. El artículo se publicó bajo el título «de los indios Chamí» aunque sólo los cuatro primeros relatos lo son; el pasaje de Aribamia está en la nota a uno de esos cuatro, es decir en contexto chamí.",
      },
      {
        key: "uribeJaibanas1985",
        summary:
          "Reúne y coteja todas las versiones de Aribamiá en un solo capítulo: la de Rochereau, la de María de Betania (cuerpo mitad indio, cabeza y garras de tigre, alimentación de cangrejos, güibán en menguante), la de Cayón en Villa Claret (güibán más la estaca de macana que clava el cuerpo al suelo), la de Pinto (los colegas del jaibaná cantan pidiéndole que no reencarne y entregan a la viuda los bastones y figuras, que «al pasar a manos extrañas pierden su virtud») y la de Loewen, único que distingue Aribamiá de Aripada según el momento en que el alma sale del cuerpo. Añade dos relatos de Pablo Emilio Yagarí sobre el mohán de Caramanta: el niño de cuatro años que el jaibaná resucita convertido en animal y que degüella con las uñas, y el muerto al que destapan sólo el pecho y clavan un palo labrado en punta. Vasco concluye que Aribamiá, Aribada y Mohana son el mismo ser y lo liga al jaguar (imamá).",
        limitation:
          "El trabajo de campo de Vasco es sobre todo emberá chamí (Pueblo Rico, Risaralda) y panameño; los datos katíos son de segunda mano (Pinto, Santa Teresa, Betania). La identificación Aribamiá = Aribada = Mohana es una conclusión suya que las fuentes que cita no sostienen unánimemente —Loewen las distingue— y que arrastra el término mestizo «mohán». El PDF está alojado en el sitio personal del autor, no en un repositorio institucional.",
      },
      "bogotaPor2020",
      "compCuentos1933",
    ],
    title: "Aribamia",
    mito: `El güibán colorado es una hoja, y quien quiere volverse Aribamia después de muerto la toma mientras todavía está vivo. La toman los jaibanás. La toma también cualquier otro que desee para sí ese destino, porque no hacen falta oficio ni cargo: hacen falta la hoja y la voluntad. Por fuera no se les nota nada. Enferman como enferma cualquiera, mueren como muere cualquiera y los entierran igual que a los demás.

Lo que viene después no se cuenta de una sola manera. Unos cuentan que al poco tiempo la sepultura amanece abierta y sin rastro de cadáver, y que eso basta para saber que el muerto ya se volvió Aribamia. Otros cuentan que a los quince días asoma sobre la sepultura una espumita blanca, que crece despacio y va tomando forma hasta que la forma es el animal. Y otros cuentan que la mudanza empieza antes del entierro, desde la agonía, cuando el cuerpo se va cubriendo de pelo y no para hasta quedar en Aribamia.

Del Aribamia se sabe la figura: un gran cuadrúpedo de cabeza enorme, hecha en forma de cántaro. Vive en los montes sombríos y solitarios, donde no llega nadie. Se alimenta de cangrejos. Y se come a quien encuentra.

Herirlo no sirve de nada. No muere de la herida, y además de cada gota de sangre que le cae al suelo se levanta un Aribamia nuevo, de modo que quien abre uno se queda con muchos delante, y ya con uno solo hay bastante espanto.

Queda una manera, y es el agua caliente. El agua caliente vuelve incapaz de reproducirse la sangre del Aribamia, y sin esa multiplicación el animal por fin se acaba. Pero saberlo no alcanza. Los grandes jaibanás sueñan cómo matarlos, y ese sueño no le llega a cualquiera: hay que ser de los grandes para que el sueño enseñe la regla.

Así están las cosas. La hoja se conoce, la espuma se conoce, el agua caliente se conoce. Lo que todavía no ha pasado es lo otro: al primer Aribamia nadie le ha dado muerte.`,
    historia: `El pasaje que sostiene esta entrada es una sección titulada Aribamias, en la página 94 de «Nociones sobre creencias, usos y costumbres de los Catíos del occidente de Antioquia», Journal de la Société des Américanistes, nueva serie, tomo 21, número 1, París, 1929, páginas 71 a 105. La nota inicial, firmada por Paul Rivet, reparte los papeles: las notas las reunieron las Hermanas misioneras de la Inmaculada Concepción y de Santa Catalina de Sena, de Santa Rosa de Osos; Henri Rochereau se las remitió; Rivet las publicó respetando la forma que les dieron sus autoras. No hay narrador con nombre, ni lugar de recolección, ni fecha del testimonio, ni traductor acreditado. Nadie anotó a quién se le estaba oyendo.

Fray Severino de Santa Teresa trae el mismo ser en el Libro Primero de «Los indios catíos, los indios cunas» (Medellín, Imprenta Departamental de Antioquia, 1959), que es la segunda edición de su obra de 1924. Allí el Aribamia tiene «cuerpo de indio y cabeza y garras de tigre», la espuma vaporosa sale del sepulcro a los quince días, el zumo de güibán se toma «en todas las menguantes» y el cadáver puede dejarse «cosido a la tierra con un chuzo de macana». Que los dos textos coincidan no corrobora nada: el propio Rivet advierte que esas notas ya se habían usado en parte para el libro de 1924, de modo que son dos salidas del mismo fondo misionero y no dos testimonios.

Milcíades Chaves Ch. copia entero el pasaje de 1929 en la nota comparativa a su primer relato, en «Mitos, tradiciones y cuentos de los indios Chamí», Boletín de Arqueología I-3, Bogotá, 1945, páginas 141 y 142, citándolo como 8-94. Esa copia importa más de lo que parece: el único ejemplar digitalizado del artículo de 1929 fue reconocido ópticamente con modelo de francés y no conserva una sola vocal acentuada correcta, así que la transcripción de Chaves es hoy la forma legible del texto.

Luis Guillermo Vasco Uribe reúne en «Jaibanás. Los verdaderos hombres» (1985) las lecturas de María de Betania, Cayón, Pinto, Rochereau, Santa Teresa y Loewen en un solo capítulo, y añade dos historias de Pablo Emilio Yagarí sobre Caramanta; su trabajo de campo, sin embargo, es sobre todo chamí y panameño. La cartilla de la Secretaría de Educación del Distrito (2020) publica un relato de aribada narrado por Germán Tamaniza, autoridad tradicional acreditada, pero Tamaniza es emberá chamí del resguardo Dai Drua, en Putumayo.

Queda una corrección sobre lo publicado hasta ahora aquí: el párrafo del peuarata y los haces de hojas de tobo, moindú, no pertenece a este expediente. En Severino está en la página 72, inmediatamente antes del Aribamia, y en el artículo de 1929 está en la página 83, a once páginas de distancia. Trata del alma de cualquier difunto que busca compañero para no andar solo, no del jaibaná que se transforma.`,
    versiones: `Dos cuerpos incompatibles llevan el mismo nombre y no deben fundirse. En las notas de 1929 el Aribamia es un gran cuadrúpedo de cabeza enorme en forma de cántaro. En Severino de Santa Teresa es un ser de cuerpo humano con cabeza y garras de tigre. No es diferencia de matiz: es un cuadrúpedo frente a un bípedo. Aquí se sigue el primero, por estar más cerca del registro y no refundido en tercera persona.

Cambia también el desenlace. El artículo de 1929 sostiene que el agua caliente acaba con él y que los grandes jaibanás sueñan cómo matarlo. Severino sostiene lo contrario, que este animal no puede ser matado de ninguna manera, y ofrece en cambio un recurso preventivo que el otro texto no trae: clavar el cadáver al suelo con un chuzo de macana para que no alcance a transformarse. Son dos respuestas opuestas al mismo miedo.

Cambia el modo de volverse Aribamia. En 1929 se registran tres maneras: la sepultura que amanece vacía, la espumita blanca a los quince días y el cuerpo que se cubre de pelo desde la agonía. Severino conserva sólo la espuma y precisa que el zumo de güibán se toma en menguante.

Cambian los nombres. Aribamia, Aribamiá, Aribadá, Aripadá y, por influencia de colonos antioqueños y caldenses, mohán o mohana. Chaves atribuye a Wassén la noticia de que hay dos clases de Aripadá, unos de cuatro patas parecidos al caballo y otros de dos parecidos al hombre, y añade que también los hombres pueden ser transformados. Loewen, según lo cita Vasco, es el único que separa Aribamiá de Aripada por el momento en que el alma sale del cuerpo; Vasco concluye lo contrario, que Aribamiá, Aribada y Mohana son el mismo ser, y lo liga al jaguar, imamá. La separación de Loewen y la identificación de Vasco no pueden sostenerse a la vez, y ninguna de las dos se decide aquí.

Hay por último un episodio que sólo aparece en el material contemporáneo: en la cartilla de 2020, Germán Tamaniza narra que el nombre no debe pronunciarse en voz alta y que la mujer que lo pronuncia muere degollada. Ese testimonio es chamí, del Putumayo, y no puede leerse como dato katío.`,
    leccion:
      "Herir aquello que se multiplica con la herida sólo aumenta lo que se quería acabar.",
    similitudes: `El paralelo más cercano está en el mismo volumen que conserva este pasaje. En «Erubida y Siebida», que Nicolás Henao, chamí de Balboa, narró a Milcíades Chaves, aparece Aribadá: un muchacho a quien un jaibaná devuelve a la vida y bautiza con ese nombre, que crece preñando mujeres casadas y matando gente, y a quien dos mujeres matan echándole encima dos ollas de agua hirviendo mientras duerme junto al fogón. El arma es la misma y la premisa es la contraria: Aribadá es un vivo fabricado por un jaibaná, no un jaibaná muerto que reaparece, y sus hijos Fronchí y Pononó sobreviven cantando de quién son hijos.

El segundo paralelo lo trae el propio Chaves. Entre los uitoto, en el mito «Cómo hubo comida y agua para beber» que recogió Plácido de Calella, el hombre que visita a una muchacha en forma de culebra muere cuando la madre de ella le echa encima una olla de agua bien caliente. Lo compartido es el arma contra aquello que no muere de otro modo; lo distinto es que allí el agua caliente corta un noviazgo y una fuente de comida, y aquí corta una sangre que se reproduce sola.

Dentro del propio corpus katío hay además un competidor directo. Pocas líneas después del Aribamia, Severino registra que algunos opinan que las almas de los jaibanás-brujos se vuelven Nunsí, un pez grande que vive en el fondo de los pozos, se come a quien se baña en ellos y sale de noche con los ojos brillando como fuego. El mismo pueblo y el mismo capítulo dan dos destinos distintos para el mismo muerto, y ninguno anula al otro. Antonio María Cardona y Jairo Miguel Guerra volvieron a registrar los nusí en trabajo de campo de 2012 entre emberá dóbida de Nuquí, como seres del mundo de los yambera que habitan las pozas profundas, y en esa misma lista nombran a la aribada.`,
    excerpt:
      "Tras la muerte de un jaibaná, una espuma puede elevarse de la tumba y tomar la forma cambiante de Aribamia.",
    seoTitle: "Aribamia: transformación jaibaná Katío",
    seoDescription:
      "Conoce las variantes históricas de Aribamia, la transformación de jaibanás muertos y las protecciones con hojas de moindú.",
    focusKeywords: [
      "Aribamia",
      "transformación jaibaná",
      "Peaurata",
      "moindú",
      "mitos Katío",
    ],
    tags: ["Aribamia", "chamán", "muerte", "transformación"],
    researchNotes: `FUENTES: Severino 1924 y notas de 1929.
DECISIÓN: singular editorial; anatomía no canónica por variantes explícitas.
IMAGEN EXISTENTE: reutilizable como interpretación full paper cut, no como retrato definitivo.
${archiveResearch}`,
  }),
  archiveRecord({
    slug: "baha",
    sourceKeys: [
      "severino1924",
      "rochereau1929",
      "villa1993",
      "onicKatio",
      {
        key: "rojasescalera1986",
        summary:
          "Dedica un apartado entero, el 8, a Ba, y resuelve la duda que la ficha deja abierta. Reúne las dos versiones de Severino —'el rayo era un indio muy rico que vivía en un bohío de oro. Karagabí quiso cambiarle el bohío pero no accedió. Entonces Karagabí lo cogió de la cabellera y lo arrojó al aire confinándolo a vivir ahí arriba llevando un tambor para avisar la lluvia', y el hombre que mataba niños emberá y a quien dos jaibanás vencieron con una lanza— y añade las de Betania (un tamborcito de oro tocado por los hijos de los dioses) y de Pinto (en el Andágueda, hijo de un jaibaná desterrado por molestar con un tambor de piel de sapo; en el Alto Sinú, el choque de dos grandes piedras de hielo). Y zanja la cuestión de los 'dos Baha': 'los emberá tienden a conceptualizar en una sola idea los fenómenos del trueno y el rayo. Al preguntar por cualquiera de los dos dan la palabra /ba/', y llaman al relámpago /ba purea/, 'lo rojo del rayo'. Confirma también la costumbre de la lanza, referida en el alto Baudó y en San Matías 'como una práctica abandonada, por hombres ya mayores'.",
        limitation:
          "Pardo trabajó en el alto Baudó y en Guanguí; el material katío del Andágueda y del Alto Sinú lo toma de Pinto García (1978) y el de Urabá de Santa Teresa, de modo que la parte propiamente katía es de segunda mano. Cita a Santa Teresa por la edición de 1959, con paginación distinta a la de 1924. Es un informe etnoastronómico y trata el trueno como fenómeno atmosférico entre otros, sin transcribir ninguna narración completa de Ba.",
      },
      {
        key: "uribeJaibanas1985",
        summary:
          "Trae una narración completa de Bá tomada a viva voz a Clemente Nengarabe, con un móvil distinto al del intercambio de bohíos: Bá es un hombre casado, aborrecido por sus cuñados, que hace un tambor nuevo y lo guarda en el zarzo; cuando lo emborrachan y lo golpean, baja el tambor, 'le tocó y les acabó a todos... Me iré al aire y ya no me van a ver... Cuando se oye el trueno, es el tambor de Bá que está tocando'. Junto a ella cita la versión de María de Betania para los katíos del Andágueda, donde el trueno es el hijo de un jaibaná con un tambor de piel de sapo de loma (memburé), castigado por su padre. Y cita literalmente el episodio de la lanza con su referencia —'Dos jaibanás soñaron que con una lanza vencerían a Baha. Estos eran de los más finos (Jaibaná ara). Le clavaron la lanza (miatzu) en el pecho y lo vencieron (Santa Teresa, 1924: 53)'—, aclarando que en el Chamí las miasú eran lanzas de madera para cazar y para defenderse de los espantos nocturnos. Añade que el trueno anuncia la llegada de grandes jaibanás.",
        limitation:
          "La narración de Clemente Nengarabe es chamí, no katía; la versión katía del Andágueda entra citada de María de Betania (1964), no recogida por Vasco. La transcripción respeta el habla del narrador pero el libro está organizado como argumento del autor sobre el jaibanismo, y los relatos aparecen troceados y al servicio de esa tesis. El PDF está alojado en el sitio personal del autor.",
      },
      "uribeResena1986",
      {
        key: "rosiqueGraciaTodos2020",
        summary:
          "Muestra qué sigue siendo hoy el trueno para los katíos de Urabá, y no es un enemigo vencido. En la narración del jaibaná Arnulfo Domicó, quien busca su identidad interroga uno por uno a los seres del mundo de arriba —'el sol, la luna, el viento, el rayo, la neblina, el arco iris'— y las plantas le indican después recorrerlos otra vez para impregnarse de su fuerza: 'usted debe bañarse cuando haya luna llena... y así con todos los que ha recorrido, con la luna, con los truenos, con los animales'. El trueno aparece como fuente de poder del jaibaná, no como adversario, lo que matiza la secuencia de los dos jaibanás que lo derrotan con la lanza.",
        limitation:
          "El rayo y el trueno aparecen sólo dentro de una lista y de una fórmula de baño; el artículo no recoge ningún relato de Ba ni menciona el tambor, el bohío de oro ni la lanza miatzu. Es un estudio sobre sitios sagrados y plantas, y una de las cuatro comunidades del estudio, Dojura, es chamí.",
      },
    ],
    title: "Baha, el trueno y el rayo",
    mito: `El trueno había sido un hombre, y de los más ricos: vivía en un bohío de oro más hermoso que el del propio dios. Caragabí quiso cambiarle el bohío por el suyo y Baha se negó rotundamente. Caragabí, que podía más, lo cogió de la cabellera, lo arrojó a los aires y le ordenó que viviera en ese elemento. Desde entonces lleva un tambor en la mano, y lo toca para avisar a los hombres que empieza la lluvia.

Al rayo también lo llaman Baha, y también había sido un hombre, pero no de los indios, y les tenía envidia. Le temían mucho, porque iba robándoles a los niños chiquitos y, después de matarlos, subía los cuerpos al cogollo de la palmera más alta para que los gallinazos comieran sus carnes calcinadas.

Dos jaibanás soñaron que con una lanza lo vencerían. Eran de los más finos, de los que llaman jaibaná ara. Cuando aquel hombre entró en su bohío, se respaldaron en un estantillo de la habitación y le clavaron la lanza, la miatzu, en el pecho, con sorpresa de los demás, que lo creían invencible. Vencido, quedó incapacitado para seguir robando y matando niños.

De aquello quedó una costumbre. En los bohíos se guarda una lanza que no tiene nada de bonito, y apenas oyen el bramido de Baha la sacan y la colocan en el tejado mirando al cielo, y descansan tranquilos fiados en la virtud de esa lanza, que recuerda la otra, la que desarmó al rayo.

Los niños llevan otras defensas. Al recién nacido le soban los labios con barro antes de que haya mamado por primera vez, o lo frotan con un grillo, con lombrices o con mariposas pequeñas antes de su primer alimento. Cuando hay tempestad y el niño está tendido en su hamaca, le ponen una totuma boca abajo sobre el estómago. Mientras truena, los niños no pueden jugar con los animales de la casa ni con el sapo. Y apenas ven el primer relámpago escupen, para inmunizarse, y lo mismo hacen las personas mayores.

El bramido no siempre anuncia peligro. Los truenos avisan con días de anticipación la llegada de los grandes jaibanás, y en la dirección por donde han de venir se oyen esos precursores.`,
    historia: `El relato está en el capítulo de la metempsicosis de Severino de Santa Teresa, en la página 70 de la segunda edición de 1959, la única consultable: la primera, de Bogotá 1924, no está en acceso abierto. Ahí mismo, seguidas y en ese orden, aparecen las dos secuencias: el trueno rico del bohío de oro arrojado a los aires con su tambor, y el rayo que robaba niños y a quien dos jaibanás clavaron la lanza miatzu. Vasco Uribe cita este segundo pasaje como «Santa Teresa, 1924: 53» y Pardo Rojas como «op. cit.: 70», lo que da la medida del problema de paginación entre las dos ediciones. Severino no nombra a quién se lo contó, ni dónde, ni cuándo, y describe al rayo con una calificación racial que era la suya y la de su época, no un rasgo del personaje; las prácticas de protección de los niños las consigna él mismo más adelante, en el capítulo de costumbres, remitiendo expresamente a esta leyenda.

Las notas de 1929 no corroboran nada de esto, porque salen del mismo fondo de papeles misioneros, y además no traen ni el bohío de oro ni la lanza: dan otra explicación entera, que va en Versiones. Sí recogen, igual que Severino, las defensas de los niños y el aviso de la llegada de los jaibanás.

La fuente que ordena el conjunto es Pardo Rojas (1986), que dedica a Ba un apartado propio. Resume las dos versiones de Severino, añade la de María de Betania y tres de Constancio Pinto, y resuelve la duda que el expediente deja abierta: «los emberá tienden a conceptualizar en una sola idea los fenómenos del trueno y el rayo. Al preguntar por cualquiera de los dos dan la palabra /ba/», y si se insiste en separar el ruido del resplandor llaman a este último /ba purea/, «lo rojo del rayo». No son dos seres mal cosidos por un editor: son una sola noción. Pardo confirma también la costumbre de la lanza, referida en el alto Baudó y en San Matías por hombres ya mayores y como práctica abandonada. Su trabajo de campo, eso sí, fue en el alto Baudó y en Guanguí, y lo katío del Andágueda y del alto Sinú lo toma de Pinto.

Vasco Uribe (1985) aporta lo que ninguna de las dos fuentes misioneras tiene: una narración de Ba tomada a viva voz, la de Clemente Nengarabe, y la referencia de que el trueno anuncia a los grandes jaibanás. Su reseña de «Zroara Nebura» (1986) acredita además que Ba es un ciclo con nombre propio en la tradición oral emberá, con capítulo aparte entre las veintiséis narraciones que reunió Floresmiro Dogiramá, cacique del río Baudó. Y Rosique-Gracia y otros (2020) muestran que entre los eyábida de Chigorodó el trueno no es hoy un enemigo vencido: en el relato del jaibaná Arnulfo Domicó, quien busca conocimiento debe bañarse «con la luna, con los truenos, con los animales».`,
    versiones: `Las notas de 1929 dan una explicación completamente distinta y sin personaje caído: «Trueno es el ruido que produce, al girar, un tamborcito de oro, tirado por un niño cualquiera de los habitantes de arriba», y el rayo, relámpago y chispa, «es la risa de alguno de los habitantes de arriba». Ahí no hay bohío de oro, ni despojo, ni lanza. María de Betania recogió esa misma idea del tamborcito de oro tocado por los hijos de los dioses.

Constancio Pinto reunió tres más. En el Andágueda le contaron que el trueno es el hijo de un jaibaná desterrado a las alturas por molestar demasiado con un tambor hecho de piel de sapo de loma, el memburé. En el alto Sinú, que el trueno es el ruido del choque de dos grandes piedras de hielo que están arriba y que al derretirse causan la lluvia. Y de la misma zona, que arriba hay unos hombres que pelean durante las tormentas y que el que pierde cae a la tierra en forma de rayo.

Clemente Nengarabe, chamí, se lo contó a Vasco de otra manera: Bá era un hombre casado, con muchos cuñados que lo aborrecían; hizo un tambor nuevo y lo guardó en el zarzo, y cuando lo emborracharon y le pegaron bajó el tambor, «le tocó y les acabó a todos... Me iré al aire y ya no me van a ver». No lo arroja ningún dios: se va él.

Hay también una confusión de etiquetas que conviene no heredar. Severino llama trueno al hombre rico del bohío de oro y rayo al que robaba niños; Pardo, al resumirlo, llama rayo al primero. Y hay una semejanza gráfica que no es identidad: Severino escribe Báha el cielo al que Caragabí lleva las almas, y Baha el trueno. Pardo registra el mundo de arriba como /bajá/ en el Baudó y /bajía/ en la transcripción de Chaves entre los chamí, mientras el trueno es /ba/, y en el relato katío que Rafael Bailarín narró a Chaves el cielo es el Bajía. Son palabras distintas que las transcripciones acercan.`,
    leccion:
      "Lo que atemoriza desde el cielo alguna vez tuvo casa, nombre y un arma que lo derrotó.",
    similitudes: `El paralelo más cercano es también el más distinto. Entre los emberá chamí, Clemente Nengarabe narró a Vasco Uribe un Bá que era «figura como nosotros mismos», casado, aborrecido por sus cuñados, que se hace un tambor nuevo y lo esconde en el zarzo; cuando lo emborrachan y lo golpean en el baile, baja el tambor, mata a todos los bailadores y sube por su propia decisión: «Cuando se oye el trueno, es el tambor de Bá que está tocando». Comparte el tambor y la subida al aire, pero no hay bohío de oro, ni dios que lo arroje por una casa que no quiso cambiar: el motivo es la violencia de la familia política.

Entre los katíos del Andágueda, Pinto recogió un trueno que es el hijo de un jaibaná, con un tambor de piel de sapo de loma, desterrado a las nubes por su propio padre porque molestaba tocándolo. Dentro del mismo pueblo, entonces, el trueno pasa de ser un rico castigado por un dios a ser un hijo castigado por su padre, y el tambor deja de ser instrumento de aviso para ser el motivo del castigo.

En el alto Sinú, el mismo compilador recogió una explicación sin persona alguna: el trueno es el ruido del choque de dos grandes piedras de hielo que están arriba y que, al derretirse, causan la lluvia. Ahí desaparece por completo la biografía y queda sólo el fenómeno.

Conviene decir que dos de estas tres versiones llegan por un solo recopilador, Pinto, y que la tercera es de otro pueblo emberá; el parecido entre ellas mide sobre todo la circulación del motivo del tambor, no un origen común demostrado.`,
    excerpt:
      "Baha, antiguo dueño de un bohío de oro, se vuelve trueno; otra secuencia cuenta cómo dos jaibanás vencen al rayo.",
    seoTitle: "Baha: mito Katío del trueno y el rayo",
    seoDescription:
      "Conoce a Baha, el trueno del tambor y el rayo vencido por dos jaibanás con la lanza Miautzu.",
    focusKeywords: [
      "Baha",
      "trueno Katío",
      "rayo y jaibanás",
      "lanza Miautzu",
      "mitología Emberá Katío",
    ],
    tags: ["tormenta", "ritual", "sobrenatural", "poder"],
    imagePromptHorizontal:
      "Ilustración panorámica full paper cut y paper quilling, no fotografía: tormenta sobre selva y río del noroccidente colombiano; Baha aparece como figura humana estilizada en las nubes tocando un tambor, mientras dos jaibanás junto a un tambo elevan una lanza Miautzu hacia el cielo, rayos hechos con tiras de papel, composición respetuosa, sin violencia explícita, sin texto, sin maqueta física, diorama ni render 3D.",
    imagePromptVertical:
      "Ilustración vertical full paper cut y paper quilling, no fotografía: una lanza protectora se eleva desde el techo de un tambo y conduce la mirada hasta Baha con su tambor entre nubes de tormenta; selva, palma y relámpago en capas recortadas, sin estereotipos, sin texto, sin maqueta física, diorama ni render 3D.",
    researchNotes: `MITO NUEVO: presente en Severino 1924 y Villa 1993.
FRONTERA: dos secuencias llamadas Baha, relación no resuelta.
IMÁGENES: requiere horizontal y vertical nuevas antes de publicación.
${archiveResearch}`,
  }),
  communityRecord({
    slug: "cobaima",
    title: "Cobaima, primer jaibaná",
    mito: `Caragabí no sólo creó el mundo. También creó a Cobaima, el primer jaibaná de los emberá katío. Cobaima era un sabedor indígena del Chocó, y es el primero del que se tiene noticia.

Caragabí le enseñó a cultivar plantas medicinales y a curar enfermedades con ellas, a distinguir los animales malos de los buenos y a comunicarse con los jais. Le contó también quiénes había en el Chocó: los emberá, los wounaan y los dule. Todos habían llegado primero a Quibdó y después se dividieron. Unos cogieron el río Andágueda hacia arriba para llegar a Antioquia, otros se fueron al San Juan, otros emigraron para Lloró y otros cogieron hacia el Bajo Baudó, a Pizarro.

Cobaima estuvo en una cárcel en Quibdó, pero se voló de ese lugar hacia la cabecera del río Andágueda, a ordenar el territorio, a organizar dónde quedaban los resguardos y a declarar qué se podía comer. Nombró los lugares donde vive la gente y los lugares donde viven los animales. Así comenzó su travesía.

En la cabecera de Bagadó, río arriba, se encontró con los animales malos: tigres, caballos, burros, tatabros. En ese tiempo los animales malos tomaban el espíritu de los humanos para comérselo, y si uno de ellos veía a una persona, esa persona moría sin salvación posible. Al terminar el encuentro, un tigre le preguntó qué iba a pasar con ellos ahora. Cobaima prefirió salvar la vida de los humanos y decretó que los animales malos sólo vivirían en las zonas profundas de los ríos. Desde entonces se alimentan de otros animales y no de gente.

Cobaima no se quedaba en el mismo sitio. En su recorrido fue encontrando ríos y lugares sin nombre y se dedicó a nombrarlos. En la primera parada vio un río con dos entradas, y después de mirarlo mucho tiempo se dio cuenta de que allí había una malla que no dejaba subir a los peces hasta la orilla. Retiró la malla, los liberó y llamó a ese río Odo, porque esa palabra significa atrapado. Siguió río abajo y en la segunda parada descubrió un río que tenía sal natural adentro, y resolvió llamarlo Comunidad Aguasal. Más abajo, en la tercera parada, vio un arcoíris grande donde vivían humanos, animales y plantas juntos, que no podían salir de allí sin exponer a la muerte a sus seres queridos y sin afectar el río y el bosque. Para evitar esos desastres los dejó encerrados en el arcoíris, y los llamó Comunidad Embibicuras, que es arcoíris.

Mucho después se encontró con una piedra gigante, bonita, parecida a un barco y apartada de los demás lugares. Se quedó pensando y supo, de la nada, que en ese pueblo había habido una inundación: todo quedó destruido menos esa piedra, que antes fue una casa. Se acercó y vio espíritus de mujeres trabajando con piedras, harina, hachas y barro, y vio también espíritus de otros jaibanás que habían muerto ahí. Por eso todo el que quisiera acercarse podía ser tragado por la piedra, enfermar o morir. Cobaima liberó ese lugar.

Terminado su trabajo con las comunidades del Chocó llegó a la cordillera, ya en Antioquia, a una mina donde el oro se comía a la gente y a los animales, y después de comérselos su popó se volvía oro. Cobaima hizo que el oro dejara de comerse a los seres vivos, para que la gente pudiera trabajar tranquila.

Fue el primer guardián de los seres vivos, y sabía dónde viven los humanos y dónde viven los animales.`,
    historia: `Cobaima no viene del archivo misionero que sostiene casi todo el corpus katío antiguo. Viene de «Dachi Chiuu, Nuestra Lucha. La historia de la comunidad embera Katío en Bogotá», una iniciativa de memoria histórica acompañada por el Centro Nacional de Memoria Histórica y priorizada en 2020. La comunidad que la hizo es emberá katío del Alto Andágueda y vive hoy en Bogotá, desplazada: el propio micrositio fecha el origen de ese desplazamiento en 1975, cuando el descubrimiento de la mina La Bruja en el Alto Andágueda desató conflictos dentro del resguardo Tahamí, y en los años ochenta, cuando la llegada de grupos armados presionó a cientos de familias a dejar sus tierras.

El trabajo se hizo con los colectivos Embera Bakata y Abauda Andagueda y con la Agrupación Conondo, el proyecto musical de la comunidad en Bogotá. Los relatos y las canciones se recogieron en tres talleres presenciales, complementados con entrevistas telefónicas. La comunidad decidió contar sus relatos de origen en su lengua, de modo que la pieza trae audio en emberá bedea y en español. El micrositio reúne seis piezas: tres relatos de origen —Caragabí, Cobaima y el amor prohibido entre Humántahu y Gedeco— y tres textos sobre la mina, el conflicto y el desplazamiento. En los créditos figuran la dirección general de Darío Acevedo Carmona, la coordinación de Edinso Culma Vargas, el apoyo a la investigación y la producción audiovisual de Mauricio Cañón, el diseño de Edna Carolina Suárez Pinto y Lizeth Sanabria y las ilustraciones de María Fernanda Mantilla, con la advertencia expresa del CNMH de que los contenidos son responsabilidad de sus autores.

No hay narrador individual acreditado: la autoría es colectiva y declarada como tal. Es lo contrario del archivo de 1924 y 1929, donde nadie aparece nombrado porque a nadie se le preguntó.

Y aquí hay que decir algo incómodo. Cobaima está agotado en fuentes. Fuera de este micrositio no existe literatura sobre el personaje; se probaron tres grafías del nombre y ninguna devuelve un registro académico. Las demás fuentes de esta lista tratan el lugar y el motivo, no el nombre. Luis Guillermo Vasco es el único autor con obra extensa sobre jaibanismo que nombra expresamente a los katíos del Andágueda —registra que para ellos el trueno es hijo de un jaibaná y recoge del padre Pinto que Ocotuma es un charco del Alto Andágueda donde vive un ser al que hay que tratar con cuidado—, pero no menciona a Cobaima ni una vez, ni en «Jaibanás. Los verdaderos hombres» (1985) ni en «El oro y la plata entre los embera y waunaan» (2001), donde describe la extracción de oro en el Alto Andágueda y en el río Ichó. El artículo de Tabula Rasa de 2020 sobre los sitios sagrados de Polines y Yaberaradó documenta el encierro de fieras por los primeros jaibanás con jaibanás vivos entre sus coautores, y tampoco lo menciona.`,
    versiones: `La propia comunidad advierte lo que esta entrada no puede hacer. El texto del micrositio se cierra diciendo que es una leyenda con muchas versiones y que lo que allí se publica es un intento de mantener las características básicas de Cobaima, su humanidad y su importancia. Quien narra declara, entonces, que está eligiendo una forma entre varias.

Fuera de esa pieza no hay ninguna otra versión publicada. Eso tiene consecuencias precisas y conviene enumerarlas: no se puede contrastar una grafía del nombre con otra, no se puede saber qué episodios trae una comunidad y no trae otra, no se puede decir qué parte del recorrido es antigua y cuál se fijó al escribirlo, y no hay ningún derecho a presentar este trazado como el credo de todo el pueblo katío. Es el relato de las familias del Alto Andágueda que hoy viven en Bogotá, y así hay que leerlo.

Hay además una segunda versión que existe pero no puede cotejarse: el audio en emberá bedea que acompaña la pieza. La página publica el texto en español y ofrece la narración en lengua, pero no transcribe esta última, de modo que no hay manera de comparar lo que se dice en un idioma con lo que se dice en el otro, ni de recuperar los topónimos en su forma propia. De los nombres de lugar que el recorrido deja —el río Odo, la Comunidad Aguasal, la Comunidad Embibicuras— sólo el primero viene con su traducción, atrapado.

Los motivos del recorrido sí reaparecen en otras partes con otros nombres, y esa es la única comparación disponible. Vasco registra en el Andágueda a Ocotuma, un charco donde vive un ser peligroso, y describe a Porré, la Madre de Oro que vive en las cabeceras de los ríos, come maíz y se cría, y a Costé, el dueño del oro que arrastra y devora a los indios. Ninguno de esos nombres es Cobaima, y la coincidencia de motivo no autoriza a trasladarlos a su itinerario.`,
    leccion:
      "Ordenar un territorio es decidir dónde cabe cada forma de vida sin que acabe con las demás.",
    similitudes: `El paralelo más fuerte está documentado en el mismo pueblo, con jaibanás vivos entre los autores. En los resguardos de Polines y Yaberaradó, en Chigorodó, los relatos fundacionales condicionan la suerte del poblamiento indígena al encierro de fieras en los bosques prístinos: entre el agua vivían ba, sokerrá, dojemiá, nuci purrú, coré y coré purru, prestas a devorar a los recién llegados, y el encierro lo hicieron los primeros jaibanás cuando esos territorios aún eran selva. Un jaibaná de Chigorodó explica que lo hizo para que no se acabara con la generación. Encerrar a las fieras en el fondo del agua no es, entonces, el rasgo de un personaje único sino el procedimiento con que un pueblo emberá katío abre un territorio. La diferencia es de escala y de sujeto: allí los emberá vienen del Sinú y el San Jorge, a más de doscientos kilómetros del Andágueda, el encierro funda un resguardo y ningún jaibaná aparece con nombre.

El segundo paralelo está en el archivo antiguo y es casi un reverso. Fray Severino registra entre los katío de Urabá a los Nunsí, peces grandes que viven en el fondo de los pozos, se comen a quien se baña en ellos y salen de noche con los ojos brillando como fuego, y anota que algunos opinan que son las almas de los jaibanás-brujos. En Bagadó el fondo del río es adonde un jaibaná manda a los animales para que dejen de comer gente; en Urabá el fondo del pozo es donde un jaibaná muerto sigue comiéndola. El mismo lugar del mundo cambia de signo según quién lo ocupe.

El tercero toca el oro. En las notas katías de 1929 los Costé son cuatro diablos que son de oro y son los dueños del oro, y por ellos se perdían los indios que salían a cazar, hasta que sucesivas expediciones los fueron matando, al primero con flechazos en los ojos y al segundo porque tenía el corazón en el dedo pulgar del pie izquierdo. Cobaima no mata al oro que devora: lo obliga a dejar de devorar.`,
    excerpt:
      "Cobaima, primer jaibaná, recorre el Alto Andágueda y ordena relaciones entre seres, aguas, animales y lugares.",
    seoTitle: "Cobaima: primer jaibaná del Alto Andágueda",
    seoDescription:
      "Conoce el relato comunitario de Cobaima, primer jaibaná que ordena seres y lugares del territorio Emberá Katío.",
    focusKeywords: [
      "Cobaima",
      "primer jaibaná",
      "Alto Andágueda",
      "Dachi Chiuu",
      "relatos Emberá Katío",
    ],
    tags: ["chamán", "naturaleza", "ríos", "sabiduría"],
    sourceKeys: [
      "cnmhCobaima",
      "cnmhDachi",
      "minInteriorPlan",
      {
        key: "uribeJaibanas1985",
        summary:
          "Es la única obra extensa que trata el jaibanismo nombrando expresamente a los katíos del Alto Andágueda, el territorio de Cobaima: registra que «para los katíos del Andágueda el trueno es el hijo de un jaibaná», y recoge del padre Pinto que Ocotuma es un charco del Alto Andágueda donde vive un ser que hay que tratar con cuidado. Da además el marco de oficio que la ficha describe sin fuente: cómo se forma un jaibaná, qué es un jai, por qué el jaibaná «encierra» y «destapa» animales y lugares en vez de eliminarlos, y por qué los primeros jaibanás son los más poderosos.",
        limitation:
          "No menciona a Cobaima ni una sola vez: sirve para el lugar y para el oficio, no para el personaje. El grueso del trabajo de campo es chamí y panameño; los datos del Andágueda entran de refilón y algunos por vía de Pinto, a quien el propio Vasco corrige en otros puntos.",
      },
      {
        key: "uribeplata2001",
        summary:
          "Es lo más cercano que hay al episodio del oro que se come a la gente en el recorrido de Cobaima. Describe la extracción de oro de veta y de aluvión en el Alto Andágueda y en el río Ichó con datos de campo propios, y expone la figura de Porré —«a la vez árbol y animal», la Madre de Oro que vive en las cabeceras de los ríos, que come maíz y se cría, y que al ser derribada deja el oro— y su equivalente Costé, el dueño del oro con barberas y dientes de oro que arrastra y devora a los indios. El oro, en estas versiones, no es materia inerte: tiene madre, come y mata, exactamente el problema que Cobaima va a contener.",
        limitation:
          "No nombra a Cobaima. El material sobre Porré y Costé es chamí y del Chocó medio, recogido de otros narradores; lo del Alto Andágueda que cita es trabajo inédito del propio autor. Es un ensayo temático sobre oro y plata, no una etnografía del Andágueda.",
      },
      {
        key: "rosiqueGraciaTodos2020",
        summary:
          "Documenta, con jaibanás vivos como coautores, el motivo exacto del recorrido de Cobaima: «los relatos fundacionales de los actuales resguardos […] condicionan la suerte del poblamiento indígena al «encierro de fieras» en los bosques prístinos. Entre el agua vivían ba, sokerrá, dojemiá, nuci purrú, coré y coré purru prestas a devorar a los recién llegados. El «encierro» lo hacían los «primeros jaibanás» cuando esos territorios aún eran selva». Y añade que «una de las primeras acciones de cualquier jaibaná para abrir un nuevo territorio es hacer un encierro espiritual», citando a un jaibaná de Chigorodó que lo hizo «para que no se acabara con la generación». Muestra que ordenar animales peligrosos confinándolos al fondo de los ríos no es un rasgo de un personaje único sino el procedimiento con que un pueblo emberá katío funda un territorio.",
        limitation:
          "No nombra a Cobaima. El territorio es Chigorodó (Urabá antioqueño), a más de doscientos kilómetros del Alto Andágueda, con comunidades procedentes del Sinú y el San Jorge: la coincidencia del motivo no autoriza a trasladar nombres de lugar ni de ser. La fuente del «encierro» en el artículo es a su vez otra obra (Bailarín, 2006), que no consulté.",
      },
    ],
    researchNotes: `FUENTE PRINCIPAL: Dachi Chiuu / CNMH, Alto Andágueda.
DECISIÓN: voz comunitaria contemporánea separada del archivo misionero.
IMAGEN: par existente reutilizable.
${archiveResearch}`,
  }),
  archiveRecord({
    slug: "coste",
    sourceKeys: [
      "rochereau1929",
      "clacsoRegionalization",
      {
        key: "uribeplata2001",
        summary:
          "Es la fuente decisiva para esta ficha y contiene el relato completo. Sitúa a Costé en el sistema de los dueños: «todos los elementos que conforman la naturaleza tienen su origen y su destino en relación con seres que en castellano reciben la denominación de 'madres' o 'dueños'. Así ocurre con el oro, cuya madre es llamada Porré en algunas zonas y Costé en otras». Y precisa: «En otros grupos, como entre los catíos, un ser parecido recibe la denominación de Costé, y se describe como un monstruo o demonio que está hecho de oro y es el dueño de este mineral. Antropófago, ataca y devora a los hombres que entran en sus dominios. Puede convertirse en tigre y otros animales». Cita luego, de Pineda y Gutiérrez de Pineda (1979), que Costé «son cuatro demonios dueños del oro y asesinos de los indios», y transcribe el ciclo entero: diez indígenas contra el primero, que «de un solo abrazo cortó la cabeza a uno»; las flechas a los ojos; veinte contra el segundo, «porque este demonio tenía el corazón en el dedo gordo del pie izquierdo»; el tercero en una gruta, quemado en una hoguera «cuyo reflejo llegó hasta la casa de los indios en forma de una luz quemante». Y da un final distinto del que hoy publica la ficha: es el CUARTO Costé, no las cenizas del tercero, el que «se convirtió en cuatro tigres», dos muertos por los indios; los otros dos vinieron a comerse animales domésticos, «los indios mataron a la tigresa, que había dado a luz a dos cachorros. Se apoderaron de ellos y los domesticaron; cuando estuvieron grandes los llevaron al monte, los mataron, les sacaron la piel y la vendieron». Los cachorros no huyen: los matan y venden la piel. Añade además una segunda versión katía, contada por Rubén Domicó Domicó de Dabeiba (Antioquia): el Costé de brazos con «barberas» y dientes de oro puro que coge a los indios «que se perdían en el monte, cuando estaban cazando», los castra y los engorda, y al que derrotan gracias a su propia madre, una vieja flaca a quien él sólo daba huesos. Vasco enlaza esa versión con los burumiás, los bibidí y los carautas, antepasados antropófagos de los embera.",
        limitation:
          "Vasco no recogió el relato de Costé en campo: lo toma de Pineda y Gutiérrez de Pineda (1979) y de Arango (1993), y de una conversación con Rubén Domicó. La atribución «entre los catíos» es suya y no viene acompañada de localidad ni de fecha para la versión de los cuatro demonios. El artículo es sobre metalurgia y concepción del oro, de modo que analiza el relato en clave de origen del mineral y no como narración completa. La versión de Dabeiba y la de los cuatro demonios difieren en casi todo salvo el nombre: no conviene fundirlas. El texto circula además en blogs y fichas de «mitología colombiana» sin crédito, copiando la versión de Rubén Domicó: esa es la fuente real de esas páginas.",
      },
      {
        key: "rosiqueGraciaTodos2020",
        summary:
          "Muestra que la asociación entre seres del mundo de abajo, oro y peligro sigue siendo actual en territorio katío del Urabá antioqueño, y no sólo un registro de 1929. Documenta que «los yhaberara son personas del mundo de abajo con aspecto humano que viven en el río Chigorodocito y a veces salen al pueblo llevando oro para cambiar por ropa en las tiendas», y que otros habitantes de los sitios sagrados, los chimorna, «se rodean siempre de ardillas, armadillos y otros animales pequeños, pero también de peligrosos tigres como 'guardias'». Ese par —dueños que tienen oro y que se hacen acompañar o se convierten en tigres— es la estructura que la ficha atribuye a Costé. Aporta también el marco general de drua wãndra como territorio donde no se puede entrar impunemente, que es de donde no vuelven los cazadores del relato.",
        limitation:
          "No menciona a Costé en ningún momento: la correspondencia entre los yhaberara con oro y el Costé dueño del oro es una comparación de motivos, no una identificación que haga la fuente. Los resguardos estudiados son eyábida y también chamí, con población procedente de Córdoba. El artículo se ocupa de sitios sagrados y de un ritual de armonización contemporáneo, con un aparato teórico propio.",
      },
      {
        key: "galvezbinomio1997",
        summary:
          "Aporta el paralelo textual más cercano al Costé de Dabeiba, y con cita de fuente: reproduce de Pardo (1984:201) el relato de los Burumiá, «Cuando los cholos venían a montiar, los Burumiá los cogían, los llevaban al pueblo de ellos, los capaban y los encerraban en un chiquero como a marranos. Ahí al mismo tiempo sembraban una mata de primitivo; entonces cuando el primitivo cargaba y las frutas maduras se rajaban, al mismo tiempo la piel del cholo se rajaba de la grasa y ahí era ya el tiempo de matarlo para comérselo». Captura durante la cacería, castración, engorde, momento de la matanza: es la misma secuencia del Costé katío. La autora explica además la función de esta familia de relatos: los antropófagos son el contrapunto del que la humanidad emberá se separa al adoptar un régimen alimenticio, la sal y la prohibición del incesto. Eso sostiene la lectura de la ficha según la cual el peligro no se extermina, sino que queda como frontera.",
        limitation:
          "No nombra a Costé: el relato citado es de los Burumiá, recogido por Pardo en el alto Baudó (dóbida) y contado por Odilia Dogiramá. La equivalencia con Costé es un paralelo de motivos, no una identificación de la fuente. El foco del artículo es el maíz y el plátano; el oro no aparece. PDF digitalizado con OCR degradado.",
      },
      {
        key: "cardonaMitologia2013",
        summary:
          "Da la clase de ser a la que pertenece Costé y explica sus metamorfosis sin recurrir al vocabulario del «demonio»: los yamberas «tienen el poder de transformarse en lo que ellos deseen: en seres diminutos, gigantes, humanos normales para engañar a los hombres… pueden adoptar la forma de grotescos monstruos generalmente con forma de animal feroz, pero combinando partes de estos». Eso vuelve inteligible tanto el paso de Costé a tigres como su cuerpo mixto (brazos-tenaza, dientes de oro). Aporta también la contraparte de Imamá, el tigre que «se da ínfulas de ser el más poderoso de la selva e impone el terror con los más débiles» y que termina vencido por la astucia de Kuriva el ñeque: en la tradición emberá el tigre no es figura invencible, y la ficha puede apoyarse en eso al leer el final del ciclo.",
        limitation:
          "No menciona a Costé ni el origen del oro. El campo es Nuquí, golfo de Tribugá (dóbida), con refuerzos de Córdoba sin deslinde sistemático. Método declarado de notas de memoria, sin transcripción literal, y con interpretación del autor entreverada en la exposición.",
      },
    ],
    title: "Costé",
    mito: `Había unos diablos que eran de oro y eran los dueños del oro. Se llamaban Costé y eran cuatro. Los indios desaparecían continuamente, y lo que pasaba era que alguno de los Costé los mataba.

Salió una vez una expedición de unos diez a buscarlo. Tropezaron con el primero, que de un solo abrazo le cortó la cabeza a uno de ellos. Los demás luchaban por matarlo y no lo conseguían, hasta que a alguien se le ocurrió dispararle las flechas a los ojos, y con eso murió.

Creyeron que ya no corrían peligro y volvieron a cazar. Tres veces fueron y regresaron sin novedad; a la cuarta no regresaron. Veinte salieron entonces a averiguar la suerte de sus compañeros y encontraron que habían sido presa de Costé. Se enfrentaron al segundo, que mató a cinco antes de caer. Este tenía el corazón colocado en el dedo pulgar del pie izquierdo, y por eso les costó tanto trabajo matarlo.

Poco tiempo después volvieron a cazar, creyéndose libres de todo peligro, y toparon con el tercer Costé en la cueva de una peña. Mató a uno de ellos y los demás huyeron. Volvieron después con más compañeros a darle su merecido y lo hallaron en una cueva donde guardaba los restos de los muertos. Le tiraron a los ojos y así murió. Dejaron el cadáver consumiéndose en una hoguera, y el reflejo de aquel fuego llegó hasta la casa de los indios en forma de una luz quemante.

El cuarto Costé se convirtió en cuatro tigres. Los indios mataron dos. Los otros dos bajaron a comerse animales de la gente, y en eso la tigresa, que era uno de esos dos, parió dos cachorros al pie de un gran árbol de comba. Los indios mataron a la tigresa y se apoderaron de las crías para domesticarlas. Cuando ya estuvieron grandes se fueron al monte, y allí les dieron muerte dos hombres, les sacaron la piel y la vendieron.

El oro no pasó nunca a manos de los vencedores. De todo aquello lo único que se vendió fue el cuero de los dos tigrecitos criados en casa.`,
    historia: `Costé no está en la obra de fray Severino de Santa Teresa, y conviene decirlo porque dieciocho fichas de esta comunidad la citan como si fuera el fondo común de todo. El nombre no aparece ni una sola vez en los 620.192 caracteres del volumen de 1959, que es la segunda edición de aquel libro, ni figura entre las once piezas del ciclo catío que Eugenia Villa Posse transcribió de la primera edición de 1924 en Mitos y leyendas de Colombia, volumen III. La salvedad honesta es que el volumen de 1959 salió, según su autor, corregido y aumentado sin marcar dónde, de modo que su silencio no prueba matemáticamente el silencio de 1924; pero desde los dos textos accesibles Costé no puede citarse.

El único texto antiguo que lo narra son las Nociones sobre creencias, usos y costumbres de los catíos del occidente de Antioquia, Journal de la Société des Américanistes, tomo 21, París, 1929, páginas 71 a 105, donde Costé va entre Antomiá y Bibidi gomia. Paul Rivet aclara ahí que las notas las reunieron las Hermanas misioneras de la Inmaculada Concepción y Santa Catalina de Sena, de Santa Rosa de Osos, que Henri Rochereau se limitó a remitirlas y que en parte ya se habían usado para el libro de 1924. No hay narrador identificado, ni lugar, ni fecha de recolección. El reconocimiento óptico de ese impreso perdió todas las vocales acentuadas, así que sirve para el contenido y nunca para la letra.

La segunda fuente es Luis Guillermo Vasco Uribe, El oro y la plata entre los embera y waunaan, Boletín Museo del Oro 48, 2001. Vasco sitúa a Costé en el sistema de las madres o dueños: la madre del oro se llama Porré en unas zonas y Costé en otras, y entre los catíos es un monstruo hecho de oro, antropófago, que puede convertirse en tigre. Reproduce luego la secuencia completa tomándola de Pineda Giraldo y Gutiérrez de Pineda, 1979, un trabajo publicado en la Miscelánea Paul Rivet, el mismo Rivet que editó las notas de 1929. Cotejada palabra por palabra, esa secuencia sigue punto por punto la de 1929: diez hombres, el abrazo que decapita, las flechas a los ojos, veinte hombres, el corazón en el dedo gordo del pie izquierdo, la gruta, la hoguera y la luz quemante, y el cuarto convertido en cuatro tigres. No es un segundo testimonio, es el mismo texto por otra mano.

Lo que sí añade Vasco es una historia distinta de Costé, contada por Rubén Domicó Domicó, de Dabeiba, Antioquia. Es el único punto de todo el expediente con narrador de nombre propio, aunque Vasco no da fecha ni circunstancia de la conversación. Esa es, además, la página que copian sin crédito los sitios de mitología colombiana que hoy circulan.`,
    versiones: `El desenlace que se venía publicando estaba equivocado en dos puntos comprobables. No es el tercer Costé el que se vuelve tigres, sino el cuarto: el tercero queda medio quemado en la hoguera y de ahí no sale nada. Y los cachorros no huyen al monte recobrando su fuerza: crecen en casa, se van al monte, allí los matan dos hombres, les sacan el cuero y lo venden. Las dos correcciones están en las notas de 1929 y las repite la secuencia que Vasco reproduce de Pineda y Gutiérrez de Pineda.

Entre esas dos salidas del mismo texto hay una diferencia menor que conviene no borrar. Las notas de 1929 dicen que los tigrecitos criados se fueron al monte y que allí los mataron dos indios; la versión que trae Vasco dice que los indios se los llevaron al monte y los mataron. En un caso los animales se van solos y los cazan; en el otro los llevan a matar. El árbol de comba bajo el cual nacen, que 1929 nombra, desaparece en la otra.

La historia de Rubén Domicó Domicó, de Dabeiba, no es una variante de esta: es otra, y no debe fundirse con ella. Allí Costé es uno solo, no cuatro; es como un indio pero muy grande; en los brazos tiene unas barberas enormes con las que corta lo que quiere y sus dientes son de oro puro. Coge a los que se pierden en el monte cuando están cazando, se los lleva a su tambo, los castra y los engorda ofreciéndoles carne de otros indios y, cuando no la aceptan, robando cerdos o reses. A los gordos los pone sobre una batea de madera para no perder nada, los destroza con los brazos y les bebe la sangre. Lo derrota su propia madre, una vieja muy flaca porque él no le daba sino huesos, que enseña a un cautivo a escaparse rodando desde un filo; el fugado describe las barberas y los dientes de oro, y más de cincuenta hombres con escopetas lo encuentran dormido y lo matan. Aquí Costé no es de oro, sólo sus dientes lo son.

Vasco observa además algo que la secuencia de los cuatro deja ver sola: aunque el nombre se usa como si fuera un solo ser, los cuatro no son idénticos, y por eso hace falta un procedimiento distinto para matar a cada uno. Los ojos sirven con el primero y el tercero, no con el segundo.`,
    leccion:
      "Saber dónde guarda el corazón un enemigo alarga la vida sin volver seguro el monte.",
    similitudes: `El paralelo más cercano no está lejos: en el mismo artículo de 1929, unas líneas después de Costé, están los Bibidi gomia, seres mezcla de diablo, animal e indio, con manos de cuchillo, que viven en la copa de los árboles más gigantescos y tienen un tigre de guardián. Uno de ellos captura a dos burumiás y los vuelve eunucos para engordarlos y comérselos; uno escapa, reúne un ejército y vuelve. La estructura es la de Costé en Dabeiba —captura durante la cacería, castración, engorde, fuga de uno solo, regreso colectivo— pero el dueño del oro no aparece por ninguna parte, y el que muere es el captor, no cuatro seres sucesivos.

El segundo paralelo está fuera del área katía y con narrador nombrado. Aída Gálvez, en El binomio maíz-plátano (Boletín de Antropología, 1997), reproduce de Mauricio Pardo el relato de los burumiá del alto Baudó, emberá dóbida: cogían a los cholos cuando venían a montiar, los llevaban a su pueblo, los capaban y los encerraban en un chiquero como a marranos, y sembraban al tiempo una mata de primitivo, de modo que cuando el fruto maduro se rajaba, se rajaba también la piel del cautivo de tanta grasa y llegaba el momento de matarlo. La misma secuencia, con un reloj vegetal que el Costé de Dabeiba no tiene. Gálvez recogió además en Dabeiba, en 1990, un fragmento sobre los carauta con esa misma práctica, y sus interlocutores eyábida nombran a burumiá, bibidikomía, carauta y jurá como pueblos antropófagos de antes de la conquista.

Y hay una resonancia contemporánea que no es identificación. En los resguardos de Polines y Yaberaradó, en Chigorodó, se documenta hoy a los yhaberara, gente del mundo de abajo que a veces sale al pueblo llevando oro para cambiarlo en las tiendas, y a los chimorna, que se rodean de tigres como guardias. Dueños que tienen oro y se acompañan de tigres: es la misma pareja de rasgos, pero nadie los llama Costé.`,
    excerpt:
      "Varios Costé atacan a los cazadores; cada uno exige descubrir una debilidad y el último sobrevive transformado en tigres.",
    seoTitle: "Costé: relato Katío de oro y tigres",
    seoDescription:
      "Lee el ciclo histórico de Costé, seres del monte asociados al oro, vulnerabilidades ocultas y transformación en tigres.",
    focusKeywords: [
      "Costé",
      "mito Katío del oro",
      "seres del monte",
      "transformación en tigres",
      "relatos de 1929",
    ],
    tags: ["Costé", "oro", "bestias", "bosque"],
    researchNotes: `FUENTE PRINCIPAL: notas de 1929.
CORRECCIÓN: se eliminan moralizaciones generadas y paralelos greconórdicos.
IMAGEN: par existente reutilizable.
${archiveResearch}`,
  }),
  archiveRecord({
    slug: "creacion-katios",
    sourceKeys: [
      "severino1924",
      "rochereau1929",
      "villa1993",
      "clacsoRegionalization",
      "onicKatio",
      "uribeJaibanas1985",
      "cardonaMitologia2013",
      "rosiqueGraciaTodos2020",
      "campoperdida2024",
      {
        key: "chaves1945",
        summary:
          "Cinco de los nueve relatos del artículo fueron narrados por Rafael Bailarín, jaibaná katío que aprendió los cuentos de su abuela y tradujo del katío: es material primario katío acreditado a una persona con nombre, algo que el archivo misionero de 1924 y 1929 casi nunca ofrece. 'La mujer de Karagabí' cierra con un episodio de origen de la gente actual: Karagabí convierte en animales al capitán Imaná y a los indios pícaros, deja sólo a los buenos, y después 'a todos éstos los mató la lluvia (kuetá bea sía). Sólo dejó en una canoa a un indio y a una india y de allí nacieron todos'. Chaves añade una nota comparativa que reproduce la versión de Santa Teresa según la transcripción de Wassén. El PDF completo del número está en el fondo editorial del ICANH.",
        limitation:
          "El artículo se publica bajo el título 'de los indios Chamí' y esconde el reparto de narradores, que Chaves sólo declara en la página 134: hay bibliografía posterior que atribuye a emberás del Chamí páginas que son de Bailarín, katío. Bailarín narraba en Río Frío (Valle), lejos de su territorio, casado con una mujer chamí, y traducía él mismo. Y este relato no es la cosmogonía de Caragabí y Tutruicá: es un origen por diluvio y por transformación en animales, que no debe fundirse con el de la piedra y el barro.",
      },
      "ferrariJinu2023",
      "rojasescalera1986",
    ],
    title: "Caragabí y Tutruicá crean a la gente",
    mito: `De la saliva de Tatzitzetze, que no tuvo principio y se hizo a sí mismo, brotó Caragabí. Aprendió mucho en pocos años, se alzó contra quien lo había hecho porque todo lo daba demasiado barato, lo venció y quedó dueño de este mundo. Debajo había otro, Armucurá, y lo gobernaba Tutruicá, que no nació de nadie. Los dos vivieron mucho tiempo sin conocerse.

Un día el dios de arriba divisó abajo algo como un globo envuelto en sombras y bajó a ver qué era. Así se encontraron y se contaron su origen, y de esa conversación salieron todos sus pleitos: el de abajo no se creía inferior, porque el otro procedía de alguien y él era eterno.

Enfurecido por el desprecio, Caragabí cogió un lazo corredizo y desde su mundo enlazó a Tutruicá, con ánimo de ahorcarlo y quedarse dueño de los dos mundos. El enlazado le contestó con altanería que podía intentarlo, pero que acabaría con todo. Caragabí empezó a correr el lazo y el otro opuso tanta resistencia que las fuerzas se neutralizaron. Aseguran que, si aquella vez hubiera vencido Tutruicá, los habitantes de este mundo gozaríamos de inmortalidad.

Probaron después el fuego. Construyeron un horno enorme y le tocó en suerte entrar primero a Caragabí. Tutruicá reunió a su gente y cortó leña seis días; al séptimo la metió toda, encendió y cerraron el horno herméticamente hasta la puesta del sol. Cuando lo abrieron, allí estaba Caragabí, hermoso, vestido el cuerpo de chaquiras de oro y con la cabellera cayéndole sobre los hombros. Le tocó el turno al otro y salió el mismo prodigio: los dos quedaron hermosos y rejuvenecidos.

Faltaba la prueba del agua. Cada uno tumbó un árbol corpulento, labró una canoa y salió a pescar, y el rival removió con una palanca la peña junto a la que estaba y lo arrastró al fondo con canoa y todo. Caragabí tomó forma de culebra, de lombriz, de hormiga, y no le sirvió de nada; se hizo agua y salió a flote. Otro tanto le pasó a Tutruicá. Con eso quedaron plenamente convencidos de que sus poderes eran iguales.

Entonces Caragabí formó al primer hombre y a la primera mujer de una piedra fina, mompahuará. Les sopló por las extremidades de los pies y de las manos y por la cabeza, y quedaron animados, pero no hablaban: tan sólo se reían. Tutruicá hizo otro tanto con barro, y sus muñecos, además de reír, se movían y andaban.

Caragabí tuvo que humillarse a suplicarle que le enseñara. Tutruicá lo trató de imbécil y volvió a motejarlo de dios creado, y él pensó en ahorcarlo si no le descubría el secreto. Al fin el de abajo se compadeció y le mandó una carta: que hiciera al hombre no de piedra, sino de barro. Caragabí obedeció, formó de barro la primera pareja, se quitó un pedacito de costilla, hizo con él una bolita y la introdujo en las dos imágenes. A su contacto resollaron, pero aún no se tenían de pies. Sopló sobre ellas y andaban y hablaban con toda perfección. Por virtud de la costilla se les quitó la pesadez que la tierra deja en lo que sale de ella.

Tutruicá no dejó pasar la ocasión de zaherirlo: al fin y al cabo, aquel hombre era mortal. Caragabí le repuso que no importaba, que después de la muerte él recogería las almas y se las llevaría al cielo.`,
    historia: `El episodio está en el Libro Primero de fray Severino de Santa Teresa, «Creencias, ritos, usos y costumbres de los indios catíos de la Prefectura Apostólica de Urabá», impreso en Bogotá en 1924 para el Año Santo y la Exposición Misional Vaticana de 1925. Esa primera edición no es consultable en línea: lo que se lee es la segunda, incorporada como Libro Primero a «Los indios catíos, los indios cunas» (Medellín, Imprenta Departamental de Antioquia, 1959) y digitalizada por Internet Archive sobre el ejemplar del Princeton Theological Seminary. El propio Severino dice en la razón de esa segunda edición que la sacó corregida y aumentada, y no marca dónde: cualquier frase de aquí es de 1924/1959, nunca de 1924 a secas. El encuentro de los dos dioses y las pruebas están en su capítulo primero; la creación del hombre, en el tercero.

Severino no nombra a nadie para este capítulo. En otros sí: Tohuratzabidá Domicó le contó el origen de catíos y cunas y Dobiarisá Domicó la tentación del paraíso. Aquí el relato llega ya refundido en tercera persona, sin narrador, sin lugar y sin fecha, y con el marco del misionero encima: escribe como Prefecto Apostólico evaluando una religión rival, intercala «risum teneatis» ante las luchas de los dioses y lee a Caragabí como figura crística y a Tutruicá como demonio. Esas equivalencias son suyas.

Las notas publicadas en 1929 en el «Journal de la Société des Américanistes» (tomo 21, pp. 71-105) traen el mismo diálogo casi palabra por palabra y parecen una confirmación. No lo son: la nota inicial firmada por Paul Rivet aclara que el material lo recogieron las Hermanas misioneras de la Inmaculada Concepción y Santa Catalina de Sena, de Santa Rosa de Osos, que Rochereau sólo lo remitió, y que esas notas ya se habían usado en parte para el libro de 1924. Son dos salidas del mismo fondo. De ese artículo, además, no puede copiarse ninguna palabra: el ejemplar digitalizado se reconoció ópticamente con modelo de francés y no sobrevive una sola vocal acentuada.

Pardo Rojas (1986) da el andamiaje que el relato presupone y lo atribuye: según Severino habría cuatro mundos encima y cuatro debajo, aunque sólo se da razón de tres, y debajo está /armukurá/, dominado por Tutruiká. Vasco Uribe (1985) reconstruye el ciclo entero, pero desde Pinto (1978), María de Betania (1964) y Santa Teresa, no desde una narración katía suya, y concluye que los emberá son «productos de la unidad entre Tutruicá y Carabí». Cardona y Guerra (2013) trabajaron en el golfo de Tribugá y advierten que allí Karagabí y Tutruika «tienen poco peso» y que «algunos llegan a afirmar que Karagabí es un dios de los katíos». Rosique-Gracia y otros (2020), con jaibanás y sabias de Chigorodó como coautores, no transcriben la creación: empiezan cuando ya terminó. Restrepo Campo y Turbay (2024) recogen en Jaikerazabi, Mutatá, un relato distinto sobre el reparto desigual de bienes. Y Chaves (1945) publica un origen katío por diluvio narrado por Rafael Bailarín, que no es este.

Sobre el nombre: la compilación de CLACSO muestra que la categoría regional catío la consolidó en parte el proyecto misionero, y la nomenclatura que fija el plan de salvaguarda es embera eyabida.`,
    versiones: `Severino cuenta el mismo episodio dos veces y no dice cuál prefiere. En la primera, la de arriba, Caragabí forma de una vez al hombre y a la mujer de piedra mompahuará, Tutruicá hace otro tanto con barro, y el secreto se pide y se concede por carta: una sola bolita de costilla anima a las dos figuras. En la segunda, que él presenta como modificada «según las tribus», el dios de abajo aparece llamado Yábea, contemporáneo, y vive no dentro de la tierra sino en el mundo próximo al nuestro; hay un diálogo de presentación, un año de trabajo, tres mensajeros sucesivos, y el barro que se concede es un pedacito del tamaño de la lengua de una paloma, que crece en las manos de Caragabí. Ahí el hombre se hace primero y se arrodilla a recibir la bendición, y diez años después Caragabí pide más barro con el pretexto de que se le perdió el primero y forma a la mujer con la primera costilla del lado derecho del hombre. Esta segunda es la que reproducen, casi idéntica, las notas de 1929.

El mismo Severino guarda un tercer origen, que no es de barro ni de piedra: Tohuratzabidá Domicó le contó que Caragabí produjo de la nada una gota de agua, la tapó con una totuma y al día siguiente era un indio catío; de otra gota salió la mujer; y cuando ella quiso repetirlo esparció la materia en forma de llovizna y de ahí salieron los cunas, que a los ocho días flecharon a su dios.

Cambian también los nombres y las grafías. Caragabí, Karagabí y Carabí; Tutruicá, Tutruiká, Trituku, Trutruicá y Tutruika; Tatzitzetze, Dachizese y /gayhizeze/; Armucurá, /armukurá/, aramúko y aremuko. En el ejemplar digitalizado de 1929 el nombre del dios de abajo aparece veintitrés veces en cinco grafías y ninguna es correcta, de modo que esas formas no sirven para fijar nada.

Vasco recoge además una variante del ciclo, tomada de María de Betania, en la que quien entra a la olla hirviente es un tigre y no un dios, y de ese fracaso queda que el barro sea frágil, cuando antes era duro como el metal; Severino cuenta lo mismo atribuyéndolo a Antomiá-Torro.`,
    leccion:
      "Quien crea solo fracasa y quien pide prestado el material acaba haciendo gente que muere.",
    similitudes: `En la comunidad emberá dóbida de Yucal, a orillas del río Panguí, Graciliano narró en 2022 un comienzo comparable: «Ankore cuando creó al embera creó solamente a un hombre y un perro. Entonces el embera se sentía muy solito», y después creó a la mujer y ensayó una gestación sin relación sexual que luego hubo que cambiar. La forma es la misma —el creador que ensaya, falla y corrige—, pero ahí no hay dos dioses ni apuesta: el ensayo fallido no es de materia sino de modo de engendrar, y el creador se llama Ankore.

Entre los emberá del golfo de Tribugá, Cardona y Guerra recogieron en 2012 una explicación distinta de la mortalidad: Ankoré tallaba un muñeco en palo de oquendo para que el hombre durara siempre, la madera dura hizo resbalar la hoja, se hirió un dedo y dejó la obra inconclusa, «es por esto que el hombre no es completo ni tampoco inmortal»; sólo entonces su mujer le sugirió un material más blando y lo hizo de tierra mezclada con agua. La mortalidad no viene ahí de haber pedido barro a un rival, sino de un corte en el dedo del creador, y quien aconseja cambiar de materia no es el adversario sino la esposa del dios.

Entre los emberá chamí de la vereda de Corozal, en Río Frío, Reichel-Dolmatoff transcribió en 1945 una primera humanidad fallida sin ninguna disputa: Karagabí hizo cortes en una palma barrigona, los tapó con hojas, y días después salió por los huecos mucha gente «como un chorro», pero «no eran gente que duraba», se morían de la picadura de una hormiga y sus mujeres criaban a los hijos en la pantorrilla, de modo que «Karagabí tuvo que hacer nueva gente». La segunda humanidad se explica ahí por el fracaso de la primera y no por el préstamo de una materia ajena.`,
    excerpt:
      "Caragabí fracasa al crear con piedra y aprende de Tutruicá a dar vida al barro, aunque su gente será mortal.",
    seoTitle: "Caragabí y Tutruicá: creación Katío",
    seoDescription:
      "Lee el relato histórico Katío sobre Caragabí, Tutruicá, la prueba de piedra y barro y el origen mortal de la gente.",
    focusKeywords: [
      "Caragabí y Tutruicá",
      "creación Katío",
      "Armucurá",
      "origen de la gente",
      "mitología Emberá",
    ],
    tags: ["Caragabí", "creación", "origen del hombre", "cosmogonía"],
    researchNotes: `FOCO: creación de la gente, no antología de todos los ciclos.
FUENTES: Severino 1924 y notas de 1929.
SEPARACIÓN: Genené conserva expediente propio.
${archiveResearch}`,
  }),
  archiveRecord({
    slug: "dabeiba",
    relatoCorto:
      "El único texto que narra esto, la sección Mitología de Uribe Ángel 1885, ocupa un solo párrafo; todo lo que excediera esas frases sería relleno.",
    sourceKeys: [
      "clacsoRegionalization",
      "onicKatio",
      "gobiernoMayorKatio",
      "minInteriorPlan",
      "angelGeografia1885",
      "paezhevexicos2004",
      "eComplejos1988",
      "rojasRegionalizacion1987",
    ],
    title: "Dabeiba, maestra y protectora",
    mito: `Los antepasados tuvieron la fortuna de vivir con una mujer providencial, llena de atributos celestiales. Se llamaba Dabeiba. Era joven, bellísima y estaba llena de sabiduría, y lo que trajo consigo no fue mando sino oficio.

Enseñó a labrar los terrenos. Enseñó a construir habitaciones y a levantar pueblos. Enseñó a fabricar tejidos. Enseñó a mantener económicamente el hogar, que es saber repartir lo que hay y hacer que alcance.

No se fue apenas terminó de enseñar. Se quedó mientras hizo falta. Cuando la obra de la civilización estuvo ya iniciada y en condición de ser continuada por quienes la habían aprendido, aquel ser tutelar subió a lo más empinado del Cerro León. Desde arriba se despidió de la tierra. Después se elevó airosamente al cielo y desapareció.

Aun así no dejó sola a la gente. Desde donde estaba siguió amparándola con su protección y su ayuda, y era ella la que con su inmenso poder presidía el cumplimiento de los grandes fenómenos naturales: la lluvia, el granizo, el trueno, el rayo, los huracanes, las borrascas y los terremotos.

De modo que quien había mostrado cómo se levanta una casa era también quien mandaba el viento capaz de tumbarla, y quien había enseñado a sembrar era quien soltaba el agua sobre lo sembrado. Los antepasados no separaban las dos cosas. Contaban juntas la enseñanza y la tormenta, porque venían de la misma mano.`,
    historia: `Lo que aquí se cuenta no viene del libro de la misión. Viene, casi frase por frase, de la Geografía general y compendio histórico del Estado de Antioquia en Colombia, que Manuel Uribe Ángel publicó en 1885. Está en el Capítulo Segundo, en una sección titulada Mitología, hacia la página 515 del ejemplar digitalizado en Internet Archive. Allí se lee que los indios catíos decían que sus antecesores habían tenido la fortuna de vivir con una mujer providencial llamada Dabeiba; que les había enseñado a labrar los terrenos, a construir habitaciones y pueblos, a fabricar tejidos y a mantener económicamente el hogar; que cuando la obra estuvo iniciada subió a lo más empinado del Cerro León, se elevó al cielo y desapareció, y que desde allí presidía la lluvia, el granizo, el trueno, el rayo, los huracanes, las borrascas y los terremotos.

Hasta ahora la procedencia declarada era otra: la obra de 1924 de fray Severino de Santa Teresa, mediante una cita de Ángel Manuel Uribe. Son dos errores encadenados. El nombre está invertido, porque es Manuel Uribe Ángel. Y el relato no está en el único texto consultable de la obra de 1924, que es el Libro Primero del volumen de 1959: allí Dabeiba aparece seis veces y siempre es la parroquia, el municipio y sus tribus, mientras que Cerro León no aparece ninguna. Severino sí cita a Uribe Ángel, una sola vez y para otra cosa: le pide el retrato moral de los indígenas y reproduce sin objetar que la raza india era apocada y débil, perezosa y holgazana por naturaleza. La salvedad honesta es que lo verificado es la segunda edición, que el autor declara corregida y aumentada; que el pasaje no esté ahí no prueba que faltara en 1924, pero sí que no puede citarse desde el texto que hoy puede abrirse. En las notas de 1929 publicadas por Paul Rivet el nombre Dabeiba no aparece ni una sola vez.

Queda entonces lo que hay, y hay que decirlo con todas sus letras: no un registro de campo, sino la mitología que un geógrafo antioqueño del siglo XIX escribió sobre los catíos. Uribe Ángel resume en tercera persona lo que decían, sin narrador, sin fecha, sin lengua y sin lugar de recolección, y cierra el párrafo llamándolos incultos pueblos que mecían un poco su imaginación en los senos fantásticos de la fábula. Cinco páginas más adelante enumera dónde vivían los que quedaban: Caramanta, Murrí, Chontaduro, Juntas, Musinga, Uramá-grande, Uramita, Pital, Ríoverde y Monos, en los distritos de Urrao, Frontino y Cañasgordas. Es la misma comarca donde, cuarenta años después, empezarían a tomar notas las misioneras.`,
    versiones: `De esta historia hay un solo testimonio, y conviene decirlo con esas palabras: una página impresa en 1885. No hay segundo relator, ni variante recogida más tarde, ni registro en lengua que permita cotejar. Cuanto circula hoy sobre Dabeiba como maestra de oficios desciende de ese párrafo o lo repite.

Lo que sí tiene muchas versiones es el nombre, y son de otra cosa. En la documentación colonial Dabaibe es territorio y vecindario, no divinidad. Neyla Castillo, repasando lo que los cronistas mencionan sobre el Atrato, enumera Abraime, Abanumaque, Abibaibe y Dabaibe como denominaciones de gentes y parajes. Patricia Vargas sitúa a los vecinos orientales de Dabaibe en los cacicazgos de Guaca y de Nore, y muestra cómo la fama aurífera de Buriticá y de Dabaibe movió las expediciones españolas. Sofía Botero propone, en esa misma línea, que la palabra catío podría ser hispanización de carauta, el nombre con que los emberá designan a la nación dueña del oro, asentada precisamente en Buriticá y en Dabeiba. La grafía cambia según quién escriba: Dabaibe y Dobaiba en las crónicas, Dabeiba en el impreso de 1885 y en el municipio actual.

Las dos cosas no deben fundirse. Una es una mujer que enseña oficios y sube a un cerro, contada en una página de geografía decimonónica. La otra es una provincia de oro perseguida por expediciones desde comienzos del siglo XVI, con documentos, con toponimia y con excavaciones. Comparten un nombre y nada más que se haya podido comprobar. Hacer de la segunda el origen de la primera, o de la primera el recuerdo de la segunda, es una operación que ninguno de los textos consultados autoriza.`,
    leccion:
      "Lo que alguien enseña sigue vivo cuando quienes aprendieron pueden continuar la obra sin él.",
    similitudes: `Dentro del propio corpus katío hay dos narraciones con narrador acreditado que sirven para medir lo que aquí sobra y lo que falta. La primera es Cómo consiguieron los indios el maíz y el chontaduro, que Rafael Bailarín, katío, le narró a Milcíades Chaves en 1945 y tradujo él mismo del katío. Allí lo que sostiene la vida no lo enseña nadie: dos mujeres que lloran a su hermana muerta son subidas al Bajía sobre las alas de Ancastor, ave blanca que se vuelve hombre, y al bajar traen escondidos en la boca un grano de maíz y una fruta de chontaduro, contra la advertencia expresa de no llevar fruta. El bien llega por contrabando, no por pedagogía, y quien lo consigue baja en vez de quedarse arriba. En la nota comparativa de ese mismo relato Chaves reproduce una versión chocó recogida por Nordenskiöld donde un muchacho baja a Chiapérera, el mundo de abajo, se casa allí y devuelve el maíz que ha tragado.

La segunda es La mujer de Karagabí, también narrada por Bailarín. Hay allí una escena de reparto parecida en la forma y opuesta en el fondo: Karagabí reúne a todos los indios, los hace gritar y por el grito los convierte en animales, empezando por el capitán, que queda vuelto Imaná, tigre. Es una asamblea en la que un dios decide lo que cada quien será. Dabeiba no decide nada: muestra cómo se hace algo y se va.

La diferencia que más pesa no es de motivo sino de archivo. Los dos relatos de comparación tienen narrador con nombre, tienen traductor, y son la misma persona. Este no tiene ninguno de los dos.`,
    excerpt:
      "Dabeiba enseña a cultivar, construir y tejer; luego sube desde Cerro León y continúa protegiendo a la gente.",
    seoTitle: "Dabeiba: maestra y protectora Katío",
    seoDescription:
      "Conoce a Dabeiba, figura histórica Katío que enseña agricultura, vivienda y tejido antes de ascender desde Cerro León.",
    focusKeywords: [
      "Dabeiba",
      "maestra Katío",
      "Cerro León",
      "diosa Dabeiba",
      "mitología Emberá Katío",
    ],
    tags: ["Dabeiba", "sabiduría", "tormentas", "civilización"],
    imagePromptHorizontal:
      "Ilustración panorámica full paper cut y paper quilling, no fotografía: Dabeiba como maestra humana acompaña una escena comunitaria con cultivo, tejido y construcción de tambo; Cerro León y nubes de tormenta al fondo sugieren su ascenso y protección, composición luminosa en capas recortadas, sin deidad mesoamericana, sin texto, sin maqueta física, diorama ni render 3D.",
    imagePromptVertical:
      "Conservar la ilustración vertical publicada de Dabeiba en estilo full paper cut/paper quilling; no regenerar, no fotografía ni maqueta física.",
    researchNotes: `CADENA: Severino 1924 cita a Ángel Manuel Uribe.
FRONTERA: Dabeiba Katío no se fusiona con Dobaida Cueva.
REEMPLAZO: solo horizontal; la vertical existente es reutilizable.
${archiveResearch}`,
  }),
  archiveRecord({
    slug: "dobaida",
    title: "Dobaida, memoria Cueva del bajo Atrato",
    mito: `Las fuentes coloniales escribieron Dobaida o Dobaiba para nombrar una figura vinculada con las tormentas y también un lugar del bajo Atrato. Los relatos llegaron a confundir territorio, poblado, santuario y persona sagrada porque quienes preguntaban buscaban riquezas y traducían lo que oían desde sus propias expectativas.

Dobaida pertenecía a la memoria de los Cueva o pueblos del Darién, vecinos históricos de otras sociedades del Atrato. Su nombre quedó asociado a lluvia, viento, trueno y a un centro que los invasores imaginaban lleno de oro. La noticia viajó por rutas fluviales y se transformó en promesa de conquista.

Los expedicionarios no se acercaron para comprender la relación entre la figura, el territorio y sus habitantes. Querían localizar un santuario y apoderarse de lo que suponían guardado allí. Cada información incompleta produjo una nueva búsqueda. Cuando no encontraban el lugar esperado, el nombre se desplazaba hacia otra montaña, otro río o una población más distante.

El expediente muestra cómo una tradición puede quedar atrapada dentro del archivo de quienes la persiguen. Dobaida aparece entre descripciones de tormenta y relatos de riquezas, pero las voces Cueva no fueron conservadas con la claridad de una narración oral completa. Lo que queda es una memoria fragmentaria, atravesada por traducciones, guerra y codicia.

Con el tiempo, Dobaida fue comparada con Dabeiba, maestra y protectora del corpus histórico Katío. La proximidad de los nombres y los fenómenos atmosféricos hizo atractiva la identificación. Sin embargo, las fuentes hablan de pueblos diferentes y construyen a cada figura mediante cadenas distintas.

Esta página no inventa una aventura para llenar los vacíos. Conserva la tradición como dossier histórico del bajo Atrato: una figura de tormenta, un nombre territorial y una memoria que la búsqueda colonial convirtió en objetivo. El límite también es contenido. Saber que no poseemos una versión comunitaria completa evita presentar la mirada conquistadora como si fuera el mito mismo.

Dobaida permanece, entonces, no como pirámide ni soberana mesoamericana, sino como nombre del Darién y del Atrato cuya historia escrita revela tanto una antigua sacralidad como la violencia con que fue perseguida.`,
    history: {
      sourceFocus:
        "Dobaida se retira del universo Katío y se conserva como tradición histórica mixta de los Cueva del bajo Atrato.",
      evidenceDetail:
        "Trimborn estudió las fuentes coloniales; la compilación de 1993 distingue Dabaiba como territorio o poblado, Dobaiba como figura Cueva y Dabeiba como nombre asociado al ámbito Katío.",
      editorialDecision:
        "La página abandona la falsa categoría Katío y la iconografía de pirámide mesoamericana, y declara que el archivo no conserva una voz Cueva completa.",
    },
    versions: {
      mainVariant:
        "Las crónicas asocian Dobaida con tormentas y con un centro del bajo Atrato perseguido por expediciones.",
      contrastVariant:
        "Dabeiba Katío enseña cultivo, vivienda y tejido antes de ascender desde Cerro León; esa secuencia no se traslada aquí.",
      boundary:
        "Dobaida queda en comunidad Mixto porque el sitio no cuenta con una taxonomía Cueva y porque su recepción es regional y colonial.",
    },
    leccion:
      "Nombrar una frontera incierta evita convertir la mirada del conquistador en voz de un pueblo.",
    similarities: {
      internalComparison:
        "Dobaida se compara con Dabeiba y Baha por tormentas, pero la primera pertenece al archivo Cueva y a búsquedas del bajo Atrato.",
      broaderComparison:
        "Los santuarios convertidos en rumores de oro se repiten en crónicas de conquista, aunque cada caso exige recuperar su territorio particular.",
    },
    excerpt:
      "Dobaida es una memoria Cueva del bajo Atrato atravesada por tormentas, territorio y búsquedas coloniales de riqueza.",
    seoTitle: "Dobaida: memoria Cueva del bajo Atrato",
    seoDescription:
      "Conoce la tradición histórica de Dobaida o Dobaiba y por qué no debe confundirse con Dabeiba Katío.",
    focusKeywords: [
      "Dobaida",
      "Dobaiba",
      "Cueva del bajo Atrato",
      "diosa de las tormentas",
      "Dabeiba y Dobaida",
    ],
    tags: ["Dobaiba", "tormentas", "río Atrato", "conquista"],
    sourceKeys: [
      "trimborn1953",
      "villa1993",
      "clacsoRegionalization",
      "restrepo2019",
      "severino1924",
      "minInteriorPlan",
    ],
    imagePromptHorizontal:
      "Ilustración panorámica full paper cut y paper quilling, no fotografía: paisaje del bajo Atrato y Darién con gran río, selva húmeda y tormenta; Dobaida sugerida como presencia humana-serena integrada a nubes, lluvia y viento, sin templo inventado, sin pirámide, sin oro ceremonial, sin tocado mesoamericano, sin texto, sin maqueta física, diorama ni render 3D.",
    imagePromptVertical:
      "Ilustración vertical full paper cut y paper quilling, no fotografía: el río Atrato asciende entre capas de selva hasta nubes de tormenta donde la presencia sutil de Dobaida se integra al viento y la lluvia; sin pirámide, plumas mesoamericanas, templo u oro, sin texto, sin maqueta física, diorama ni render 3D.",
    researchNotes: `TRANSFERENCIA: Katíos -> Mixto.
FRONTERA: Dobaida Cueva no equivale automáticamente a Dabeiba Katío.
REEMPLAZO VISUAL: par completo; la pirámide mesoamericana es ajena al expediente.
${archiveResearch}`,
  }),
  communityRecord({
    slug: "el-origen-del-sol-y-la-luna",
    title: "Humántahu y Gedeco, origen del sol y la luna",
    mito: `Cuando Caragabí terminó de formar al primer hombre y a la primera mujer, pensó en arreglar el sol y la luna. Llamó primero al sol y le señaló el lugar donde debía situarse para alumbrar la tierra, y lo mismo hizo con la luna. Ella le replicó que iba a situarse más lejos de lo que le mandaba, porque su frío era muy intenso para estar tan vecina de la tierra. El sol hizo también su reclamo, diciendo que sus rayos eran muy fuertes. Los dos fueron atendidos y se colocaron a muy respetable distancia. Después Caragabí arregló la luz y las estrellas.

Pero el sol y la luna no habían sido siempre astros. Humántahu, el sol, y Gedeco, la luna, en sus principios eran personas, y eran dos hermanos. Se amaban como no debían amarse, y por ese delito Caragabí los convirtió en astros y los apartó, cada uno con su camino y su hora.

La separación no acabó con lo que sentían. Gedeco quiere mucho a Humántahu, pero no lo puede alcanzar en su carrera. Él, al contrario, no la quiere, porque ella, como mujer, tiene la menstruación. Así siguen: ella detrás, él delante, y entre los dos se reparten el día y la noche sobre la gente que vive abajo.

Caragabí les prohibió además el incesto bajo severísimas penas. En aquel tiempo, dicen, un joven se unió con su hermana, y por eso recibieron un castigo que todavía están sufriendo, aunque de qué hechura sea ese castigo no se cuenta.

Queriendo evitar en adelante semejantes crímenes, Caragabí determinó dar a cada familia su apellido. Estando los indios reunidos en un convite, empezó a decirle a cada jefe de familia: usted será Carupia, usted Celis, el otro Chavarí, Bailarín, Guaseruca, Domicó, Sinigüí. Lo hacía para que nunca se casaran entre sí los del mismo apellido.

La regla quedó. Todavía hoy, cuando se les pregunta por su parentesco, responden que no, que él es Domicó y ella es Carupia, aunque haya muchos del mismo apellido sin más parentesco entre ellos que el de haber salido de la misma pareja. Y arriba siguen los dos hermanos, cada uno en su hora, a la vista el uno del otro y sin alcanzarse nunca.`,
    historia: `Los nombres de esta historia vienen del archivo de Urabá. Severino de Santa Teresa escribe, en el capítulo de la creación del hombre: «El sol (Humántahu) y la luna (Gedeco) suponen nuestros indios que en sus principios eran personas, y que Caragabí los convirtió en astros por no sé qué delitos», y añade que Gedeco quiere mucho a Humántahu y no lo alcanza, y que él no la quiere por las enfermedades propias de la mujer. Más adelante, en el capítulo de la metempsicosis, precisa el delito: «El sol y la luna eran dos hermanos que por incesto los convirtió Caragabí en astros». El reparto de apellidos está en su capítulo sobre la ley, inmediatamente después de contar que un joven se unió con su hermana y recibió un castigo que Severino se niega a describir, «por ser de no sé qué hechura no lo refiero aquí». Se lee en la segunda edición, la de 1959; la de 1924 no es consultable en línea, y el propio autor advierte que la reeditó corregida y aumentada sin marcar dónde.

El micrositio «Dachi Chiuu», del Centro Nacional de Memoria Histórica, publica la versión por la que esta historia entró al sitio, atribuida a comunidades emberá katío del Alto Andágueda, resguardo de Tahamí. Dice lo mismo en lo esencial —Humántahu y Gedeco eran «hermanos de sangre profundamente enamorados», Caragabí los transformó y los separó en extremos opuestos del cielo, y el relato narra además «el principio de los apellidos»— y añade un detalle propio: «unos días al mes la Luna comienza a mostrarse en el cielo para enamorar al Sol». Hay que decir que la página hermana del mismo micrositio, la de Karagabí, reproduce la secuencia entera del archivo de 1924/1959, de modo que esta pieza no puede tratarse sin más como testimonio independiente de aquel.

Pardo Rojas (1986) dedica al asunto su apartado sexto y es el inventario más completo que existe: ordena seis situaciones distintas en que aparecen los astros, atribuye a los emberá del Urabá antioqueño la pareja de hermanos castigados por incesto, con la menstruación como razón del rechazo, y da los nombres en lengua, /ũmagau/ para el sol y /jedeko/ para la luna, con la etimología que Horton propuso en el dialecto del alto Sinú, «el ojo que mira todo». Advierte él mismo que «las variantes no son consistentes las unas con las otras».

Cardona y Guerra (2013) aportan la función: «para prevenir el incesto, se le cuenta a los niños, que el sol y la luna eran dos hermanos que se amaban y Karagabí, en castigo los volvió astros y los separó para siempre en el firmamento». Es material del golfo de Tribugá, no del Andágueda. Vasco Uribe (1985) aporta el anclaje lingüístico: recogiendo a Horton, glosa «Umantau es el ojo que está mirando desde arriba, el sol», y sitúa a Umantau y Jedeko del lado positivo de esa clasificación, que es de Horton y no suya.`,
    versiones: `La versión del Alto Andágueda y la de Urabá coinciden en el núcleo y difieren en la razón del desencuentro. En la primera, Gedeco «siguió amando profundamente a Humántahu» y unos días al mes se muestra en el cielo para enamorarlo; en la segunda, él no la quiere por la menstruación. La del Andágueda no dice que el sol la rechace por eso, y la de Urabá no habla de un cortejo mensual.

Constancio Pinto recogió entre los emberá de Juan José, en Córdoba, una explicación de las fases hecha entera de cortejo y sin castigo: el sol y la luna son un hombre y una mujer, ella trata de enamorarlo y le manda guiños con un solo ojo, el otro se lo tapa con un palo y cada día descubre más la cara; cuando la luna se llena el sol se enamora y se casan, pero ella empieza a tener celos y a ocultar la cara otra vez. No son hermanos, no hay incesto y no interviene ningún dios.

En San Matías, municipio de Ituango, Pardo recogió otra: el sol y la luna eran marido y mujer, ella quedó embarazada y él huyó; sus hijos mellizos le hablaban desde el vientre y la guiaban; una vieja la mató y crió a los niños; el padre se les apareció y les dijo la verdad; sembraron dos palmas de don pedrito, vino una inundación, las palmas cayeron en direcciones opuestas y formaron un río, y la que cayó aguas abajo se convirtió en el sol y la que cayó hacia el curso alto en la luna. Los astros no son personas transformadas por nadie, sino árboles caídos.

En el mismo expediente de 1929 la luna aparece de otra manera todavía: es «una hermosa mujer» a quien el nacido de la pantorrilla, trepado por un sauce que crecía a su voz, le da una bofetada, «esa es la mancha que a la luna se le observa». Ahí la luna no tiene hermano ni castigo: tiene una cicatriz.

Y hay una atribución que choca de frente con todo lo anterior. El perfil de la Organización Nacional Indígena de Colombia describe los tres mundos y sitúa arriba, en el bajía, a «Karagabí (la luna y padre de Jinopotabar) y Ba (el trueno)». En Severino, Caragabí coloca a la luna y no es ella; y en el alto Baudó, Pardo escuchó que el sol y la luna eran flores que llevaban en la cabeza Karagabí y Trituku, y allí quien luce la luna como una radiante flor blanca es Trituku, no Karagabí. La identificación existe y hay que atribuirla a quien la hace, no darla por común.`,
    leccion:
      "Dos que no podían unirse abajo terminan midiendo el día y la noche desde lejos.",
    similitudes: `Entre los emberá de Juan José, en Córdoba, Constancio Pinto transcribió un sol y una luna que no son hermanos ni fueron castigados: ella lo corteja mandándole guiños con un solo ojo, se tapa el otro con un palo y cada día descubre más la cara, y cuando se llena él se enamora y se casan, hasta que los celos la hacen ocultarse otra vez. El parecido es exacto en el argumento —una que persigue y uno que se aparta— y la diferencia es entera en el sentido: allí las fases cuentan un noviazgo y no la vigilancia de una prohibición.

En San Matías, en el municipio de Ituango, al norte de Antioquia, Pardo recogió una historia donde los astros ni siquiera fueron personas convertidas: un hombre y una mujer se separan, ella muere, sus hijos mellizos siembran dos palmas de don pedrito que crecen durante una inundación, y al caer en direcciones opuestas forman un río y se vuelven, la de aguas abajo el sol y la de aguas arriba la luna. La separación del cielo se explica por una caída de árboles y por una venganza de huérfanos, no por el incesto de una pareja.

Entre los chamí, Reichel-Dolmatoff recogió en 1953 una tercera manera de entenderlos: «la gente del sol y la gente de la luna eran muy ricos, tenían mucho oro», y cuando un hombre encerró a los astros en un talego todo quedó oscuro y todo se murió. Aquí el sol y la luna no son individuos sino territorios habitados, y lo que está en juego no es una regla de parentesco sino la riqueza y la luz.`,
    excerpt:
      "Karagabí transforma a los amantes Humántahu y Gedeco en sol y luna y los separa en el cielo.",
    seoTitle: "Humántahu y Gedeco: sol y luna Katío",
    seoDescription:
      "Lee el relato comunitario del Alto Andágueda sobre Humántahu y Gedeco, amantes transformados en sol y luna.",
    focusKeywords: [
      "Humántahu y Gedeco",
      "origen del sol y la luna",
      "amor prohibido Emberá",
      "Alto Andágueda",
      "mito Katío",
    ],
    tags: ["Humántahu", "sol y luna", "amor", "separación"],
    sourceKeys: [
      "cnmhAmor",
      "cnmhDachi",
      "cnmhCaragabi",
      "onicKatio",
      {
        key: "rojasescalera1986",
        summary:
          "Su apartado VI, 'Sol y luna', es el inventario más completo que existe del tema y ordena seis situaciones distintas en que aparecen los astros. Dos tocan directamente esta ficha. La primera: 'para los emberá del Urabá antioqueño, los dos astros eran dos hermanos que fueron convertidos en el sol y la luna por haber incurrido en incesto; /jedeko/, la luna quiere mucho a /ümidau/, el sol pero no lo puede alcanzar, en cambio el sol no la quiere porque ella como mujer tiene la menstruación'. La segunda, de Pinto entre emberá de Juan José (Córdoba): 'la luna trata de enamorarlo y le manda sus guiños con un solo ojo, el otro se lo tapa con un palo y cada día descubre más la cara. Cuando la luna se llena el sol se enamora y se casan pero la luna empieza a tener celos'. Registra también que Karagabí, después de crear a los hombres, hizo el sol y la luna y les designó sus lugares, pero los astros se alejaron alegando que su brillo era muy fuerte. Y da los nombres en lengua: sol /ũmãdau/ o /umagau/, luna /jedeko/, con la etimología de Horton en el dialecto del alto Sinú, 'el ojo que mira todo'.",
        limitation:
          "La versión de Urabá la toma de Santa Teresa (edición de 1959) y la de Córdoba de Pinto (1978): ninguna es de campo propio de Pardo, cuyo terreno fue el alto Baudó y Guanguí. El propio autor advierte que 'las variantes no son consistentes las unas con las otras' y que interpretarlas requeriría un estudio aparte. Cuidado al usarlo: acredita en material emberá los motivos de la menstruación y del guiño que esta edición había retirado, pero los acredita para Urabá y Córdoba, no para el Alto Andágueda, que es la procedencia de Humántahu y Gedeco.",
      },
      {
        key: "cardonaMitologia2013",
        summary:
          "Da la función social del relato, que es lo que esta ficha argumenta y hasta ahora no podía sustentar fuera de la pieza del Andágueda. Bajo el epígrafe 'Tabú, prevenir' escribe: 'para prevenir el incesto, se le cuenta a los niños, que el sol y la luna eran dos hermanos que se amaban y Karagabí, en castigo los volvió astros y los separó para siempre en el firmamento'. Confirma que el mito se narra a la infancia como norma de parentesco y que la separación es el castigo, no un accidente cósmico; y lo hace desde comunidades vivas y en el siglo XXI.",
        limitation:
          "Aquí el sol y la luna son hermanos, no una pareja de amantes como Humántahu y Gedeco: la prohibición es explícitamente el incesto entre hermanos. El campo es de 2012 en el golfo de Tribugá (Nuquí, Chocó) y en experiencias previas del Chocó y Córdoba, no en el Alto Andágueda; los mismos autores dicen que en esas comunidades Karagabí 'tiene poco peso'. El artículo no da los nombres de los astros ni acredita al narrador de esta versión.",
      },
      {
        key: "uribeJaibanas1985",
        summary:
          "Aporta el anclaje lingüístico de los dos nombres de esta ficha. Recogiendo el análisis de Horton, sitúa a 'Umantau (el sol), Jedeko (la luna) y Chimiau' del lado positivo del sistema, frente a 'Tutuicá, antumiá, jai, jaipaná' del lado negativo, con Ankostor y Je como mediadores, y glosa 'Umantau es el ojo que está mirando desde arriba, el sol'. Es lo que permite reconocer que Humántahu y Gedeco no son nombres propios de una pareja local sino las palabras emberá para sol y luna, con variantes ortográficas, y que el relato del Andágueda nombra a los astros mismos.",
        limitation:
          "Es una mención breve, dentro de un repaso crítico de las clasificaciones de otros autores, no un tratamiento del mito: Vasco no recoge ninguna versión del origen del sol y la luna y la clasificación bien/mal que reproduce es de Horton, no suya ni de sus interlocutores. El campo de Vasco es chamí. El PDF está en el sitio personal del autor.",
      },
      {
        key: "ferrariJinu2023",
        summary:
          "Documenta otra ruta emberá hacia el mismo resultado —la alternancia de día y noche— sin transformación de amantes: 'en algunas variantes, se le atribuye a Jinu Potó el mérito de haber creado la noche, porque antes de su choque con la luna no había diferencia entre la actividad de esta y la del sol, posibilitando así el surgimiento del mundo de los sueños y del jaibanismo'. Registra también que las versiones coinciden en que las manchas de la luna quedaron del ataque. Sirve para mostrar que el orden del día y la noche no siempre se explica por el castigo de Karagabí, y que en esas versiones la separación de los astros es obra de un héroe humano.",
        limitation:
          "Es emberá dóbida del Chocó y el relato es el de Jinu Potó, no el del sol y la luna: ni Karagabí ni una pareja transformada aparecen. El pasaje citado es análisis del autor apoyado en Vasco (1985) y Rocha Vivas (2010), no una de las dos narraciones transcritas. El artículo persigue una cuestión metodológica sobre la enunciación oral, no fijar variantes míticas.",
      },
    ],
    researchNotes: `FUENTE PRINCIPAL: Dachi Chiuu / CNMH, Alto Andágueda.
CORRECCIÓN: retirar episodios y paralelos no acreditados.
IMAGEN: par existente reutilizable.
${archiveResearch}`,
  }),
  archiveRecord({
    slug: "el-tesoro-de-dabeiba",
    title: "El tesoro de Dobaida",
    mito: `Entre las noticias que circularon durante la conquista apareció el nombre Dobaida. Algunos lo entendieron como una figura asociada a tormentas; otros, como un poblado, un santuario o un territorio del bajo Atrato. A la ambigüedad se sumó un rumor poderoso: allí habría una riqueza extraordinaria.

Los expedicionarios escuchaban relatos sobre objetos de oro y un centro venerado. En lugar de reconocer que el nombre podía tener sentidos distintos, lo convirtieron en punto sobre un mapa. Prepararon viajes, interrogaron a habitantes y avanzaron por ríos y selvas buscando un tesoro que siempre parecía quedar más lejos.

Cuando una ruta no llevaba al lugar esperado, la historia no terminaba. Dobaida se desplazaba hacia otro afluente, otra montaña o una región todavía no dominada. El tesoro crecía a medida que faltaban pruebas. Cada fracaso alimentaba la idea de que los habitantes lo habían escondido o que una expedición rival estaba más cerca.

La búsqueda transformó una memoria territorial en objetivo de saqueo. Las referencias a tormentas, autoridad y santuario quedaron subordinadas al oro que los invasores deseaban encontrar. Las voces de los Cueva aparecen fragmentadas en los escritos de quienes avanzaban sobre su territorio.

Esta historia no incluye al arriero Roque, una luz de Semana Santa, un niño con dientes de huito ni un cafetal milagroso. Esos episodios pertenecían a una leyenda paisa generada para la ficha anterior y no a la tradición colonial documentada. Tampoco afirma que el tesoro premiara a quien tuviera buen corazón.

Lo que permanece es otra clase de advertencia. El tesoro de Dobaida muestra cómo la codicia puede reorganizar el conocimiento: un nombre se vuelve promesa, una tormenta se vuelve obstáculo y un territorio habitado se vuelve escondite que alguien cree tener derecho a abrir.

Dobaida nunca aparece como una guaca lista para ser recuperada. En el archivo, el tesoro es una búsqueda repetida y una razón de violencia. Su ausencia material no hace falsa la historia; revela el mecanismo con que la conquista fabricó certezas a partir de rumores y convirtió una tradición ajena en mandato de posesión.`,
    history: {
      sourceFocus:
        "La página se reconstruye como dossier de la búsqueda colonial del tesoro de Dobaida y se transfiere de Katío a Mixto.",
      evidenceDetail:
        "Las fuentes distinguen Dobaida de Dabeiba y muestran el desplazamiento del nombre entre figura, poblado y territorio del bajo Atrato.",
      editorialDecision:
        "Se elimina la leyenda inventada de guaca paisa, río Sucio y Semana Santa; la URL se conserva para no perder circulación ni SEO.",
    },
    versions: {
      mainVariant:
        "Las fuentes coloniales presentan un centro rico que las expediciones intentan localizar y cuya posición cambia dentro de los relatos de conquista.",
      contrastVariant:
        "La ficha anterior fusionaba Dabeiba Katío con motivos campesinos de guacas y añadía personajes sin fuente; no se conserva como variante.",
      boundary:
        "El título se corrige a Dobaida y la página queda como recepción histórica regional.",
    },
    leccion:
      "La codicia puede convertir un nombre, un pueblo y un territorio en permiso imaginario de saqueo.",
    similarities: {
      internalComparison:
        "el tesoro de Dobaida acompaña el dossier Dobaida y las memorias de conquista, pero no completa la biografía de Dabeiba Katío.",
      broaderComparison:
        "Los rumores de ciudades de oro impulsaron otras expediciones americanas; compararlos sirve para estudiar la conquista, no para igualar tradiciones.",
    },
    excerpt:
      "El tesoro de Dobaida fue un rumor colonial que convirtió una memoria del bajo Atrato en objetivo repetido de conquista.",
    seoTitle: "El tesoro de Dobaida: búsqueda colonial",
    seoDescription:
      "Conoce la tradición histórica del tesoro de Dobaida y cómo la conquista convirtió un nombre del bajo Atrato en objetivo de saqueo.",
    focusKeywords: [
      "tesoro de Dobaida",
      "bajo Atrato",
      "Dobaida y Dabeiba",
      "búsquedas coloniales",
      "leyendas de conquista",
    ],
    tags: ["tesoro", "oro", "conquista", "río Atrato"],
    sourceKeys: [
      "trimborn1953",
      "villa1993",
      "clacsoRegionalization",
      "restrepo2019",
      "severino1924",
      "bicanGuide",
    ],
    imagePromptHorizontal:
      "Ilustración panorámica full paper cut y paper quilling, no fotografía: pequeña expedición colonial avanza en canoa por un inmenso bajo Atrato de selva y lluvia, guiada por un mapa incompleto mientras el horizonte permanece cerrado; el centro es el territorio, no el oro, sin guaca luminosa, arriero, Semana Santa, pirámide o templo mesoamericano, sin texto, sin maqueta física, diorama ni 3D.",
    imagePromptVertical:
      "Ilustración vertical full paper cut y paper quilling, no fotografía: río del bajo Atrato en capas profundas, una canoa colonial diminuta y un mapa que se fragmenta entre lluvia y vegetación, la supuesta riqueza apenas como rumor dorado distante, sin guaca, arriero, pirámide ni regalia indígena, sin texto, sin maqueta física, diorama ni 3D.",
    researchNotes: `TRANSFERENCIA: Katíos -> Mixto.
TÍTULO: “El Tesoro de Dabeiba” -> “El tesoro de Dobaida”; URL preservada.
REEMPLAZO VISUAL: par completo por cambio integral de expediente.
${archiveResearch}`,
  }),
  archiveRecord({
    slug: "fragmentos-de-otras-tradiciones",
    title: "El árbol Genené",
    mito: `El mundo de Caragabí era hermoso, para envidia de Tutruicá, pero tenía un grave defecto: le faltaba el agua, y el propio dios sentía mucha necesidad de ese elemento. Tres veces soñó que había agua en el mundo sin saber dónde estaba depositada. Tenía una paloma que andaba buscándosela y al fin la consiguió, aunque no en este mundo sino en otro, cuyo soberano se llama Orre. Volvió Caragabí a soñar, y una vez vio un árbol inmensamente grande, llamado Genené, y le pareció que el agua estaba encerrada dentro de él.

Consideró que era necesario derribarlo para abastecer de agua al mundo. Fabricadas unas hachas de durísima piedra, fue con todos sus peones a derribar el Genené, pero les sobrevino la noche sin lograrlo. Volvieron al día siguiente y vieron que el árbol no tenía ninguna señal del trabajo de la víspera. Empezaron entonces con mayor fuerza, por turnos y sin cesar. Ya llegaba otra vez la noche y aún les faltaba mucho, y Caragabí, frotándose las manos, produjo una luz clarísima que iluminó todo alrededor del árbol, con lo cual pudieron seguir trabajando. Al tercer día, como a media mañana, acabaron de cortarlo.

No por eso quedaron vencidas todas las dificultades. Genené quedó enredado en multitud de bejucos que impedían que cayera en tierra y vertiera sus aguas. Caragabí llamó entonces a diversos animalitos, que por aquel tiempo aún eran seres racionales, y les mandó que se encaramaran por las ramas a cortar los bejucos. Todos debían trepar llevando una fruta en la boca, y el que cayera antes que la fruta al suelo sería el poderoso que había de tumbar el árbol del todo. El primero en subir fue el mico Yerre, pero no pudo. Luego el mono Zruá, que tampoco obtuvo resultado. Subió en tercer lugar el mono Amisurrá, impotente también para cortar los rebeldes bejucos. Trepó una ardilla, pero la fruta que llevaba cayó antes que ella, señal inequívoca de su impotencia. Por último subió otra ardilla más diminuta, que llaman Chidima: desenredó las ramas y cayó a una con la fruta y con el árbol, que volcó un impetuoso raudal de agua.

Al brotar las aguas se inundó toda la tierra y sus ondas arrastraron a todos los vivientes, menos a Caragabí y a diez personas más, que se salvaron en una elevada peña adonde no alcanzaron las aguas. Un año duró la inundación. Al cabo de ese tiempo Caragabí mandó a una garza que averiguara si había quedado algún paraje bueno para vivir, y la garza halló mucho pescado y no se cuidó de volver. Mandó luego un gallinazo, que tampoco volvió, por haberse quedado comiendo peces muertos. Envió en tercer lugar un pato de monte, que se entretuvo con un pescado llamado guacuco y también olvidó el encargo. Burlado por todos los emisarios, Caragabí escupió dos veces en el suelo, cubrió la saliva con una totuma y la saliva se convirtió en una blanquísima paloma. Esa sí volvió: contó lo que se habían quedado haciendo los anteriores y dio con el lugar seco y ameno donde podían vivir los sobrevivientes. Al momento Caragabí y las diez personas salvadas abandonaron la peña y se trasladaron allí.

De la inmensa concavidad de Genené procede el mar; de sus ramas, los ríos; de sus brotes, los riachuelos y arroyos; y de sus renuevos más pequeños, los charcos. El tronco de aquel árbol existe todavía, pero en un lugar desconocido. A sus cuatro lados hay otros tantos cirios encendidos de una piedra durísima, que arderán hasta el fin del mundo. Cuando llegue el fin de los siglos, de esos cirios se originará un río de fuego que irá en aumento y lo arrasará todo. Con eso se renovará la faz de la tierra, que quedará hermosísima para ser la morada definitiva de Caragabí con todos los que hubieren ido subiendo a poblar el cielo.`,
    historia: `Esta dirección nació como cajón de sastre: recogía retazos sueltos que no habían encontrado sitio en ninguna otra parte del corpus katío. Un cajón así no puede narrarse, porque no es una historia. Lo que se hizo, y aquí se mantiene, fue darle el episodio al que casi todos esos retazos apuntaban y que no tenía página propia: la caída del árbol Genené y el origen de las aguas. Ninguna otra ficha de la comunidad lo cubre. La creación de la gente, la escalera del cielo, Antomiá, Séver y los Domicó tienen la suya; el árbol, no la tenía.

El texto de arriba sigue la primera edición de fray Severino de Santa Teresa, Creencias, ritos, usos y costumbres de los indios catíos de Urabá (Bogotá, Imprenta de San Bernardo, 1924), parte primera, capítulo II. Esa edición no está digitalizada, pero Eugenia Villa Posse la transcribió en Mitos y leyendas de Colombia, volumen III (Quito, IADAP, 1993), bajo el epígrafe El árbol Genené, con la referencia de parte y capítulo al pie, y es por ahí por donde puede leerse. El Libro Primero de Los indios catíos, los indios cunas (Medellín, 1959) es la segunda edición del mismo libro, y en este pasaje trae un episodio entero que 1924 no tiene: el colibrí llamado domineju enviado a averiguar el paradero del agua, la peña con puerta de piedra, Gentzerá bañándose y pescando dentro, la negativa por tres veces y el castigo que la parte en dos y la convierte en la hormiga negra que carga agua en la boca. Allí Severino presenta el árbol como la alternativa que sostienen los más, y no como la única sede del agua.

Hay que leer estos textos sabiendo desde dónde se escribieron. Severino era prefecto apostólico de Urabá y escribe evaluando una religión rival; la creación aparece encajada a la fuerza en el fiat bíblico, y el propio autor interrumpe el relato para burlarse del dios que sueña y no sabe dónde está el agua. Esa voz es suya y de su época, no de quien le contó la historia; de quien se la contó no dejó ni el nombre ni el lugar ni la fecha.

La segunda salida del mismo fondo de notas misioneras son las Nociones sobre creencias, usos y costumbres de los catíos del occidente de Antioquia (Journal de la Société des Américanistes, tomo 21, París, 1929, pp. 71-105), reunidas por las Hermanas de la Inmaculada Concepción y Santa Catalina de Sena, de Santa Rosa de Osos, remitidas por Henri Rochereau y editadas por Paul Rivet, quien advierte en su nota inicial que ese material ya se había usado en parte para el libro de 1924. Coincidir con Severino, por tanto, no corrobora nada; divergir de él, en cambio, sí dice algo, y aquí divergen mucho.

Carlo Emilio Piazzini, en el volumen de los cincuenta años del Departamento de Antropología de la Universidad de Antioquia, resume por qué el rótulo con que estos textos llegaron pesa: lo katío, en la literatura lingüística sobre la lengua chocó, es el producto de un proyecto religioso de regionalización sobre las comunidades embera del occidente antioqueño, Urabá y Chocó. La nomenclatura propia, que la Organización Nacional Indígena de Colombia registra, es embera eyabida.`,
    versiones: `Las dos ediciones de Severino no cuentan lo mismo. La de 1924 va del sueño al árbol sin intermediarios; la de 1959 intercala el colibrí domineju, la peña de puerta de piedra y a Gentzerá, y presenta el árbol como la sede del agua que defienden los más, no como la única. Cambia también el nombre de la piedra de los cuatro cirios, que en la transcripción de 1924 se lee mompahuará y en el volumen de 1959, raompahuaiá.

Las notas de 1929 divergen en casi todos los detalles técnicos. Allí Gentserá no vive en una peña aparte: entra por una puerta invisible al propio jenené, donde se baña y pesca, y es un colibrí el que la sorprende. Las hachas no son de piedra sino de hierro, y se gastan sin resultado hasta que a Caragabí se le ocurre hacerlas de hierro y acero mezclados; el trabajo dura nueve meses, no tres días. La prueba de la fruta está invertida: lo que en Severino es señal de impotencia, caer antes que la fruta, es en 1929 lo que le da a Chidima el derecho a desenredar el árbol, y la razón declarada es que hacía falta agilidad para apartarse y no ahogarse cuando el agua saliera. Las aves enviadas son garza, cuervo y paloma, y no garza, gallinazo y pato de monte: la paloma vuelve por sí misma, sin que Caragabí tenga que crearla escupiendo bajo una totuma, y a la garza y al cuervo se les asigna ahí mismo su oficio, comer peces vivos la una y limpiar la tierra el otro. El reparto de las aguas también difiere: el tronco es el mar, los brazos grandes son los ríos caudalosos y los pequeños los arroyos, sin los charcos de los renuevos. Y los cuatro cirios son cuatro velas enormes de metal que Caragabí fabricó y colocó alrededor del árbol mientras lo derribaban, para alumbrarse de noche, lo que hace innecesaria la luz que en Severino le sale de las manos frotadas. El incendio final del mundo empezará en el lugar donde arden esas velas.

Una última variante, contemporánea y de otro subgrupo, no debe fundirse con estas. Antonio María Cardona y Jairo Miguel Guerra recogieron en el golfo de Tribugá, Nuquí, emberá dóbida, una secuencia donde el agua no estaba en el árbol desde el principio: los animales custodios recibieron los elementos de la vida para administrarlos, los hombres hicieron mal uso y les negaron el agua a una anciana sedienta, y entonces Genserá escondió el agua en la comba de un jenené gigante. El árbol es el mismo; el motivo por el que el agua está dentro, no.`,
    leccion:
      "El más pequeño de todos puede soltar el agua que ninguno de los grandes logró soltar.",
    similitudes: `El paralelo más próximo está en el mundo chamí y lo recogió Gerardo Reichel-Dolmatoff en 1945, en la vereda Corozal del municipio de Río Frío, Valle del Cauca. En su narración número once, un ser descubre el árbol jenéne y avisa a Karagabí, que reúne a su gente, muchas hachas y ocho arditas; trabajan ocho días y lo tumban, y al caer el palo la raíz se vuelve el mar y las ramas quebradas se vuelven ríos, las más grandes el Cauca y el Magdalena. Todo el episodio del concurso de la fruta desaparece, las ardillas son ocho y anónimas, y lo que les pasa es que las narigueras que llevaban puestas se les revientan con la caída. Hay además dos ríos con nombre propio donde el texto katío sólo dice ríos: la geografía entra en el mito.

El segundo paralelo es dóbida y contemporáneo. En el golfo de Tribugá, en Nuquí, el mismo árbol aparece como escondite del agua, pero por una razón moral que el texto katío no tiene: los hombres desperdiciaron los elementos que los animales custodios administraban y le negaron el agua a una anciana, y por eso Genserá la escondió en la comba de un jenené gigante y fue convertida en hormiga negra. En Severino, en cambio, nadie ha hecho nada malo todavía: el mundo simplemente nació sin agua.

Los diluvios y los árboles cósmicos son motivo repetido en muchas tradiciones, y el propio Severino lo notó y se apresuró a citar a Juan de Castellanos para decir que los catíos daban noticia del diluvio general y del arca. Esa lectura es suya, de misionero que buscaba reminiscencias bíblicas en lo que oía, y no dice nada sobre el origen de la historia. Lo que fija esta narración no es la inundación, sino la prueba de la fruta, el orden de las tres aves desobedientes y la anatomía fluvial del árbol, donde cada calibre de rama produce un calibre de agua.`,
    excerpt:
      "Caragabí y los animales derriban Genené; el agua inunda la tierra y sus ramas se convierten en ríos y arroyos.",
    seoTitle: "El árbol Genené: origen del agua Katío",
    seoDescription:
      "Lee el relato de Genené, el árbol que guardaba el agua y cayó cuando la pequeña ardilla Chidima cortó sus bejucos.",
    focusKeywords: [
      "árbol Genené",
      "origen del agua Katío",
      "Caragabí y Chidima",
      "diluvio Emberá",
      "mitología Katío",
    ],
    tags: ["árbol", "agua", "Caragabí", "origen"],
    researchNotes: `RECONSTRUCCIÓN: URL heredada reutilizada para Genené.
FUENTES: Severino 1924 y notas de 1929.
IMAGEN: par existente representa el árbol y se reutiliza.
${archiveResearch}`,
  }),
  archiveRecord({
    slug: "herupotoarra",
    title: "Herupotoarra, nacido de la pierna",
    mito: `Herupotoarra pertenecía, por parte de madre, al linaje de los domicoes. Una mujer de ese linaje estaba pescando cuando concibió de una nutria entre los dedos de un pie. El hijo le nació de la pantorrilla, y ella murió de resultas de aquel parto. El nombre que le quedó al niño decía lo que le había pasado: nacido de la pierna.

Llegado a la mayor edad, Herupotoarra averiguó con insistencia quién había causado la muerte de su madre. Le aseguraron que había sido la luna. Colocó entonces dos palos en forma de escala y empezó a subir por ellos, resuelto a cobrarle el daño a la reina de la noche. A medida que iba pronunciando uariáde, uariáde, que quiere decir sube, sube, la escala se estiraba hacia arriba, hasta que él quedó frente a la luna. Sin darle tiempo a replicar, le descargó en la cara una bofetada tremenda, y las manchas que la luna lleva son todavía la marca de aquel golpe.

Pasó volando un trienené, que es el pájaro carpintero, y con su pico barrenó en poco tiempo la escala encantada hasta dar con ella en tierra. Herupotoarra cayó asido a los palos diciendo por los aires mojopodo, mojopodo, sin peso, sin peso; y como si escala y escalador pesaran menos que una pluma, fueron a caer suavemente en otro mundo que hay debajo de la tierra, llamado Armucurá. Sus habitantes no morían: se alimentaban del vapor del chontaduro y estaban exentos de las necesidades del cuerpo.

Herupotoarra no se olvidó de la tierra. Volvió a armar su escala, la enderezó y subió de nuevo a este mundo. Una vez aquí le aseguraron que el causante de la muerte de su madre no había sido la luna, sino Ambuima, un jaibaná muy temido que vivía en un bohío bellísimo.

Hizo diez flechas para quitarle la vida con ellas. Lo flechó, pero todas le pasaban rozando el brazo sin herirlo. Ambuima, a su vez, le aplicó la mano en el costado, y a la mañana siguiente Herupotoarra apareció muerto. Al mediodía empezaron a salirle de la boca moscas, tábanos y mosquitos inofensivos: en eso se transformó su cuerpo. Murió también Ambuima, y él se convirtió en avispas venenosas.

La pregunta con que había subido al cielo y bajado al mundo de abajo nunca le fue respondida. Primero le señalaron a la luna y después a un jaibaná, y de toda aquella busca sólo quedaron en el aire dos clases de insectos: los que no hacen daño y los que envenenan.`,
    historia: `Este ciclo llegó a lo impreso por dos vías misioneras, y ninguna de las dos nombra a quien lo contó. La primera es fray Severino de Santa Teresa, carmelita descalzo y prefecto apostólico de Urabá, que lo publicó en Creencias, ritos, usos y costumbres de los indios catíos de Urabá (Bogotá, Imprenta de San Bernardo, 1924), parte primera, capítulo IV. Esa edición no está en acceso abierto, pero Eugenia Villa Posse la transcribió en Mitos y leyendas de Colombia, volumen III (Quito, IADAP, 1993), con la referencia exacta al pie de página, y por ahí sí puede leerse. Importa saberlo, porque el Libro Primero de Los indios catíos, los indios cunas (Medellín, 1959) es la segunda edición de aquel libro y en este pasaje dice menos: allí desaparecen el linaje domicó de la madre, la situación de Armucurá debajo de la tierra y la inmortalidad de sus habitantes, y el nombre del jaibaná se escribe Ambuima y Ambumiá en un mismo párrafo. El texto de 1924 trae además un dato que 1959 suprime por completo: que Herupotoarra fue el artífice a quien Caragabí buscó para que le construyera la escalera del cielo.

La segunda vía son las Nociones sobre creencias, usos y costumbres de los catíos del occidente de Antioquia, aparecidas en el Journal de la Société des Américanistes, tomo 21, París, 1929, páginas 71 a 105. Paul Rivet aclara en su nota inicial que esas notas las reunieron las Hermanas misioneras de la Inmaculada Concepción y Santa Catalina de Sena, de Santa Rosa de Osos; Henri Rochereau se las remitió, no las recogió, y parte de ese mismo material ya se había aprovechado para el libro de 1924. No son dos testimonios independientes, de modo que coincidir entre ellos no corrobora nada. Allí el título es Gerú-potó-uarra, el hijo de la pantorrilla, y lo que se cuenta es muy distinto.

Milcíades Chaves citó ese pasaje bajo el nombre de Rochereau en la nota comparativa de Mitos, tradiciones y cuentos de los indios chamí (Boletín de Arqueología I-3, Bogotá, 1945), y por esa cita circulan la grafía Geru-poto-uarra y la forma Armucará. Chaves declara en su página 134 que cinco de sus nueve narraciones se las dio Rafael Bailarín, jaibaná katío que aprendió de su abuela y tradujo él mismo del katío: el hijo de la pantorrilla no está entre esas cinco.

Mauricio Pardo desglosa el nombre en La escalera de cristal (Maguaré, 1986): jerúpotó es pantorrilla y oarra es hijo, y llama a este uno de los mitos más populares emberá, conservado en casi todas las zonas. Simone Ferrari reúne en 2023 y 2024 las versiones publicadas y deslinda los subgrupos. Sandra Turbay y José Joaquín Domicó, en Chungará (2021), explican con material de Murindó y Mutatá recogido entre julio y diciembre de 2018 que el nombre eyábida describe una circunstancia observada, que es exactamente lo que este nombre hace. Ninguno de los tres transcribe una narración katía nueva.`,
    versiones: `Dentro de la misma obra misionera hay dos textos que no dicen lo mismo. El de 1924 hace nacer al héroe de una mujer del linaje domicó, lo presenta como el artífice de la escalera del cielo, sitúa Armucurá debajo de la tierra y llama inmortales a sus habitantes. El de 1959 borra las cuatro cosas: la madre es sólo una india, el héroe no construye nada, Armucurá es otro planeta sin situar y de sus habitantes sólo se dice que estaban libres de necesidades naturales. Cambia también la grafía del lugar, que en 1959 pierde la tilde final.

Las notas de 1929 no traen una variante de detalle sino otra narración. Ahí quien concibe es un hombre, no una mujer: la nutria se le prende de la pantorrilla mientras está en el agua y el niño le sale por entre el pulgar y el índice del mismo pie, y el padre muere poco después. El niño no se alimenta sino de sangre menstrual. Las acusaciones son tres y no dos: una ballena que se lo traga y lo expulsa al cabo de dos días, un animal marino llamado ancumia al que va a ver y descarta, y por último la luna. Sube por un sauce que crece a su voz cada vez que le ordena crecer. El carpintero derriba el sauce porque quiere favorecer a la luna, y el árbol al caer lo deja en la parte opuesta del mundo, en las tierras de Tutruicá, que allí se llaman Armucurá: planas, sembradas sólo de chontaduros, con piedras azules de amolar. Come, provoca en los que no tienen ano un asco enorme y lo acosan para que salga; regresa por el mismo tronco tendido, guiado por una culebra. Y los mosquitos, moscas y tábanos no salen de él, sino del padre, que revienta al morir por haber sido gran jaibaná. No hay Ambuima ni avispas.

Gerardo Reichel-Dolmatoff recogió en 1945, entre chamíes de la vereda Corozal, municipio de Río Frío, Valle del Cauca, otra narración del mismo ciclo: la escalera es de guadua amarrada, la palabra que el héroe dice al caer es mofódda, que significa pluma, el mundo de abajo lo habitan indios muy bajitos que sólo comen humo, él les abre el ano con un palo de chontaduro y muchos mueren, lo expulsan montado en un animal y con los ojos cerrados, un venado lo devuelve a su casa y al final lo mata la picadura de una avispa grande, tras lo cual su cuerpo desaparece. Es el mismo ciclo y no la misma historia.

Las grafías publicadas del nombre son Herupotoarra, Gerú-potó-uarra, Geru-poto-uarra, jerúpotó oarra, Jinu Potó y Jinopotabar. Y hay un error de fecha que conviene no repetir: Ferrari cita el artículo de las religiosas como Rochereau 1933, tomo XXV, con las mismas páginas 71 a 105 que Persée fecha en 1929, tomo 21.`,
    leccion:
      "Quien atraviesa el cielo y el mundo de abajo buscando un culpable puede volver sin respuesta.",
    similitudes: `El ciclo se cruza con otros relatos que tocan el mismo mundo sin ano, y conviene ver dónde se separan. En el corpus chamí que recogió Reichel-Dolmatoff en Río Frío hay una narración breve, la número trece, donde el hijo de Karagabí baja al estado de los aramúko dohurá, que comen sólo jugo y no defecan, les corta las nalgas a cada uno para que puedan comer de todo, y todos se mueren. Es la misma operación que aquí ejecuta el nacido de la pierna, pero el que la hace no es un huérfano en busca de venganza sino el hijo del dios, y no lo expulsan: simplemente fracasa. En el relato chamí de Arrumía, que Nicolás Henao le narró a Milcíades Chaves en 1945, el visitante del mundo de abajo sí acierta con la operación, enseña a comer de a poquitos, se casa allá y se lleva a su madre a vivir con la gente de Aremuko.

En el mismo corpus chamí aparece además el nombre suelto de este ciclo aplicado a otra cosa: Reichel registra que una generación fracasada de gente, cuyas mujeres criaban a sus hijos en la pantorrilla y no en el vientre, se llamaba por eso híno-pota uára. El nombre viaja separado de la historia.

Fuera del área emberá, Chaves apuntó en 1945 que el viaje al mundo de abajo donde la gente se alimenta del vapor de los alimentos cocidos está muy difundido entre pueblos de América y se encuentra también entre los polinesios. Esa observación es hipótesis suya, de etnólogo de 1945, y no dice nada sobre el origen de la narración katía: lo que la fija no es el motivo del mundo sin ano, sino la nutria entre los dedos del pie, la palabra que quita el peso y las dos clases de insectos del desenlace.`,
    excerpt:
      "Nacido de una pantorrilla, Herupotoarra sube a la luna, cae en Armucurá y regresa para enfrentar a Ambuima.",
    seoTitle: "Herupotoarra: nacido de la pierna Katío",
    seoDescription:
      "Conoce la versión Katío de Herupotoarra: nacimiento de la pierna, viaje a la luna, caída en Armucurá y duelo con Ambuima.",
    focusKeywords: [
      "Herupotoarra",
      "nacido de la pierna",
      "Armucurá",
      "mito Katío de la luna",
      "Jinu Potó",
    ],
    tags: ["Herupotoarra", "luna", "muerte", "transformación"],
    sourceKeys: [
      "severino1924",
      "rochereau1929",
      "ferrari2023",
      "villa1993",
      {
        key: "rojasescalera1986",
        summary:
          "Da la etimología desglosada que la ficha sólo enuncia: «el hijo de la pierna /jerúpotó oarra/ (/jerúpotó/: pantorrilla; /oarra/: hijo)», y lo llama «uno de los mitos más populares entre los emberá y uno de los que se conserva en casi todas las zonas». Corrige además el nombre del mundo inferior: el lugar al que cae el héroe es /atau aramora/ (/atau/: ano; /aramora/: tapado), y Pardo propone que /aramora/ es la variante dialectal del /armacurá/ de Severino, con las formas /aramuko/ en Chaves 1945 y /aremuko/ en Reichel 1953; siguiendo a Pinto (1978:124) identifica ese mundo con el de Tutruiká. Registra también que en algunas variantes el héroe trae semillas del mundo de abajo (chontaduro, caimito, ají, flores de adorno), lo que enlaza este ciclo con los mitos de origen de los cultivos. Es la fuente que permite decir que «Armucurá» no es un topónimo opaco sino, con toda probabilidad, una descripción: «el ano tapado».",
        limitation:
          "El trabajo de campo es del alto río Baudó, es decir emberá dóbida, no katío: los datos katíos los toma de Severino de Santa Teresa y de Pinto García, no de informantes propios. El artículo es de etnoastronomía, así que trata el ciclo del hijo de la pierna de paso, para situar los niveles del cosmos; no transcribe una versión completa. El PDF es una digitalización con OCR sucio (las barras fonémicas y las vocales nasales salen deformadas).",
      },
      {
        key: "chaves1945",
        summary:
          "Es el eslabón que conecta la versión katía con la chamí y el único lugar donde se lee citada la versión del padre Rochereau bajo su nombre propio: «El Padre Rochereau, en su relato GERU-POTO-UARRA (El hijo de la Pantorrilla), dice lo siguiente: 'El árbol al caer dio con el muchacho en la otra parte que hay, opuesta a la nuestra… Son esas tierras perfectamente planas, sembradas de chonta-duros… las gentes no morían ni comían. Se alimentaban del vapor que despedían los chonta-duros cocidos… Esas tierras se llaman Armucará'». Sirve para dos cosas: fija la grafía Geru-poto-uarra frente a Herupotoarra, y muestra que el episodio de Armucará circulaba ya como pieza citable y comparable. Además, Chaves declara en p. 134 el reparto de narradores que su título esconde: los cuatro primeros cuentos son de Nicolás Henao, chamí de Balboa, y los cinco últimos de Rafael Bailarín, jaibaná katío que aprendió los relatos de su abuela y tradujo del katío. Ese reparto es la prueba documental de que material publicado como «chamí» es en buena parte katío.",
        limitation:
          "El ciclo del hijo de la pantorrilla no es uno de los nueve relatos que Chaves transcribe: aparece sólo en su «Nota comparativa» al relato del viaje al otro mundo, citando a Rochereau. Es decir, aporta la cita y la comparación, no una versión katía nueva. El título del artículo («de los indios Chamí») induce a error sobre la mitad katía del corpus, y hay bibliografía posterior que atribuye a chamíes páginas que corresponden a Bailarín. La árbol que cae en la versión de Rochereau sustituye a la escalera de Severino: son variantes del mismo episodio, no la misma narración.",
      },
      "ferrariJinu2024",
      {
        key: "cardonaMitologia2013",
        summary:
          "Confirma que el ciclo sigue vivo y no es sólo un registro de archivo: al listar lo que hoy se cuenta dice que «los mitos y leyendas más populares y vivos son: origen del hombre, las historias de Jinú-Potó-Warra, las de Jé, o Jepá, la serpiente gigante, las historias de Ventura…». Aporta también la pieza cosmológica que la ficha deja suelta: «Tutruika creó el mundo de los inmortales, los sin culo, llamado Armukurá», es decir, el lugar donde cae Herupotoarra tiene creador y dueño. Y trae un dato de deslinde entre pueblos que vale la pena citar: en las comunidades del Pacífico donde trabajaron, Karagabí y Tutruika «tienen poco peso, si bien se les conoce, algunos llegan a afirmar que Karagabí es un dios de los katíos».",
        limitation:
          "La investigación se hizo en el golfo de Tribugá, Nuquí (Chocó) —emberá dóbida— reforzada con trabajo anterior en Córdoba; los autores no separan sistemáticamente qué dato viene de cuál región, aunque sí anotan en pie de página las diferencias del Sinú. No transcribe el relato de Jinú-Potó-Warra: sólo lo nombra como ciclo vigente. La metodología es declaradamente no académica («notas rápidas de campo»), sin grabación ni transcripción literal, y la prosa mezcla exposición etnográfica con interpretación del autor.",
      },
      "ceballosNotas2021",
    ],
    researchNotes: `CICLO: nacido de la pierna con variantes regionales explícitas.
FUENTES: Severino 1924, notas de 1929 y Ferrari 2023.
IMAGEN: par existente reutilizable.
${archiveResearch}`,
  }),
  archiveRecord({
    slug: "icades-name",
    relatoCorto:
      "Los dos textos que registran este episodio lo despachan en pocas líneas —seis renglones en el volumen de Severino, ocho en las notas de 1929— y no hay ningún otro que lo narre. Escribir trescientas palabras exigiría inventar diálogos, ceremonias o un desenlace para el niño que ninguna fuente da. En Historia se explica qué falta.",
    sourceKeys: [
      "severino1924",
      "rochereau1929",
      "villa1993",
      "minInteriorPlan",
      {
        key: "galvezbinomio1997",
        summary:
          "Es el estudio que explica por qué un alimento tiene mito de origen y qué clase de mito le corresponde. Sostiene que los alimentos de base «son objeto de una evaluación polivalente en las culturas que los han acogido» y que «su condición de bienes culturales altamente apreciados se rastrea en los mitos». Sitúa el ñame entre los recursos del tiempo antiguo junto al táparo y el milpesos, y formula la tesis directamente aplicable a esta ficha: «en los mitos sobre el proceso de humanización de los emberá, la asunción de un patrón alimenticio contribuye a establecer la ruptura con los grupos ya mencionados, considerados salvajes y antropófagos en el imaginario indígena». Es decir, que un devorador de niños se convierta en comida no es una casualidad macabra: es la operación misma con la que el relato separa lo humano de lo antropófago. Añade que los cultivos llegan «por mediación de los dioses, de héroes o de hombres, quienes mediante estratagemas los obtienen» de quienes los poseían, que es exactamente la estructura del relato del yaedé.",
        limitation:
          "El artículo trata del maíz y el plátano: el ñame aparece sólo como mención en una lista de recursos antiguos, y no analiza este relato ni nombra al yaedé. El material etnográfico es del Chocó y del occidente antioqueño, con citas de Pardo 1984 (alto Baudó, dóbida) y de campo propio de la autora, sin un deslinde constante entre katío, chamí y dóbida. El PDF es una digitalización con OCR muy degradado en varios párrafos.",
      },
      {
        key: "cardonaMitologia2013",
        summary:
          "Aporta la categoría a la que pertenece el yaedé y evita que se lo lea como «gigante» genérico: los yamberas «tienen el poder de transformarse en lo que ellos deseen: en seres diminutos, gigantes, humanos normales para engañar a los hombres y hacer sus fechorías, pueden adoptar la forma de grotescos monstruos generalmente con forma de animal feroz, pero combinando partes de estos», y están regidos por Antomiá. Eso importa para esta ficha porque el registro de 1924-1959 coloca el relato del yaedé justo en la serie de Antomiá. Documenta además que entre los emberá del río Sinú —es decir, entre los katío— Antomiá se aparece «en la forma de un niño tierno, hombre o mujer, sentado entre las aguas jugueteando con los peces», y que «para los antiguos, Antomiá es el espíritu del río», no el diablo: una advertencia directa contra el encuadre misionero del que procede el texto fuente.",
        limitation:
          "No contiene el relato del yaedé ni menciona el origen del ñame. El campo es de Nuquí (dóbida) con referencias al Sinú (katío) que los autores no siempre separan. Método de notas de memoria, sin transcripción literal, y con capas de interpretación del autor superpuestas a la información de los mayores.",
      },
      {
        key: "raceroCasarrubiaPercepcion2008",
        summary:
          "Documenta entre emberá katío de Córdoba el miedo concreto del que el relato del yaedé es la forma mítica: sobre el águila arpía (Harpia harpyja) registra que «presenta mitos e historias en los cuales los indígenas estiman que es un peligro para los niños, puesto que fácilmente puede cargarlos y llevárselos en vuelo». El motivo del ser que entra en la casa y se lleva a los niños desprotegidos no es entonces un tópico literario importado: tiene correlato vivo, con especie nombrada, en el mismo pueblo. Sirve también para fechar la vigencia de esas historias, recogidas en talleres de 2007-2008.",
        limitation:
          "No menciona al yaedé, ni el ñame, ni ningún mito de origen de cultivos: es un inventario de fauna y patrones de uso, y los mitos entran como glosa a las fichas de especie. Las comunidades son del San Jorge cordobés, no del Urabá de la fuente de 1924. Los autores son biólogos y no analizan la tradición oral como tal. El paralelo entre el ave y el yaedé es una comparación de motivos que propongo yo: la fuente no la hace.",
      },
    ],
    title: "Los yaedé y el origen del ñame",
    mito: `Había antes unos diablos gigantes llamados Yaedé, y esos diablos se comían a los niños huérfanos. No a cualquier niño: a los que habían quedado sin madre. Venían por ellos y se los llevaban, y la cosa se repetía de tal modo que llegó a saberse cuándo iban a volver.

Un indio se preparó para vengarse. Armó una trampa con un lazo y puso en ella a su propio hijo, que era lo único que podía traer al Yaedé hasta donde él quería. Después se apartó y se quedó atisbando desde lejos, con una barra en la mano, esperando.

El Yaedé vino como venía siempre. Cayó en la trampa y quedó preso en el lazo, y apenas el padre de la criatura vio que estaba cogido salió de donde estaba y le dio un golpe con la barra. Fue un solo golpe y fue tan fuerte que lo despedazó allí mismo.

Y en seguida, sobre los pedazos, ocurrió lo otro. El Yaedé quedó convertido en Yame. De sus despojos se formó el ñame, y de ahí procede el ñame que se come ahora.`,
    historia: `Este episodio no tiene narrador conocido, ni lugar, ni fecha, y en ninguno de los dos textos que lo registran es un capítulo propio.

En fray Severino de Santa Teresa es un párrafo suelto dentro de la serie de Antomiá, en el Libro Primero de «Los indios catíos, los indios cunas» (Medellín, Imprenta Departamental de Antioquia, 1959), que es la segunda edición de su obra de 1924. Va justo después de la derrota de Antomiá y justo antes de los Nunsí, y dice así: «Otra leyenda habla de unos diablos gigantes (Yeadé), que comían los niños huérfanos. Una vez un indio puso su niño en trampa y se preparó para vengarse de él. Vino como de costumbre el Yaedé, y el padre de la criatura le dio tan fuerte golpe con una barra, que lo despedazó y en seguida Yeadé se convirtió en Yame. De ahí procede el ñame actual». Severino no nombra a nadie, no dice dónde lo oyó y no traduce: sus relatos llegan ya refundidos por él en tercera persona.

En el artículo de 1929 sí tiene título propio, «Icané (Ñame)», en la página 95, entre los Aribamias y los Costé. Sus autoras son las Hermanas misioneras de la Inmaculada Concepción y de Santa Catalina de Sena, de Santa Rosa de Osos; Henri Rochereau remitió las notas y Paul Rivet las publicó. Rivet advierte en su nota inicial que esas notas ya se habían usado en parte para el libro de 1924, de manera que la coincidencia entre los dos textos no corrobora nada: es un solo fondo saliendo dos veces.

De ese texto salen las tres correcciones que esta reescritura aplica. Primera: los niños comidos son los huérfanos, y la versión de 1929 precisa todavía más, son los que han quedado sin madre. Segunda: el arma es una barra —en 1929, una barra de hierro—, no una macana; ningún texto consultado menciona macana en este episodio. Tercera, y es la que cambia el sentido del final: el nombre del tubérculo está dentro del propio relato. Severino escribe que Yeadé se convirtió en Yame, y Yame es el ñame. El desenlace no es sólo una metamorfosis, es una etimología: el alimento se queda con el nombre del que se comía a los niños.

Queda decir de dónde salió el nombre falso. La dirección de esta entrada reproduce el encabezado de la sección de 1929, que nombra el tubérculo y no a ningún personaje. La ficha publicada lo convirtió en nombre propio. Y hay un añadido que tampoco es relato: las notas de 1929 cierran con una conjetura de quien escribía, que a toda planta de la familia, yuca y arracacha, le darían la misma procedencia.

Las otras fuentes de la lista no traen el episodio. Aída Gálvez (1997) no nombra al yaedé y sólo sitúa el ñame entre los recursos del tiempo antiguo, junto al táparo y el milpesos; lo que aporta es la tesis. Cardona y Guerra (2013) tampoco lo traen, pero dan la categoría del ser y una advertencia sobre el encuadre. Racero-Casarrubia y sus colegas (2008) no mencionan ni el yaedé ni el ñame.`,
    versiones: `Los dos registros difieren en quién muere, no en lo que pasa.

Severino nombra a los devoradores Yaedé —lo escribe Yeadé y Yaedé en el mismo párrafo— y cierra con el nombre del tubérculo. Las notas de 1929 dejan a los gigantes sin nombre y llaman Antomiá al que queda despedazado, de cuyos despojos se forma el ñame. Es una diferencia de peso: en un texto muere una especie de seres, en el otro muere el diablo mayor del corpus. La secuencia, en cambio, es idéntica en ambos, y por eso esta reescritura la sigue entera: niños huérfanos, trampa con el hijo propio, padre que atisba desde lejos, golpe de barra, despedazamiento, transformación en alimento.

Se sigue a Severino para la columna del relato porque es el único de los dos que nombra a los devoradores y el único que conserva la etimología final. Es una decisión discutible, porque las notas de 1929 están más cerca del registro que la refundición de Severino, y porque ambas salen del mismo fondo: ninguna corrobora a la otra.

Hay un tercer nombre en juego y conviene no confundirlo con los otros dos. Icané, que da título a la sección de 1929, nombra el ñame, no a un personaje ni a un héroe.

Un silencio que ninguna de las dos versiones llena: qué pasó con el niño. Ni Severino ni las notas de 1929 dicen si alcanzó a ser herido, si fue devuelto o si simplemente estaba ahí. La ficha anterior resolvía el silencio hablando de niños futuros salvados; eso no está en ningún texto.

Antonio María Cardona y Jairo Miguel Guerra permiten leer al yaedé sin convertirlo en gigante genérico: describen a los yamberas como seres que pueden transformarse en lo que deseen, en diminutos, en gigantes, en humanos normales para engañar, o en monstruos que combinan partes de animales feroces, y anotan que están regidos por Antomiá. Eso explicaría por qué un texto nombra Yaedé donde el otro nombra Antomiá, pero es una lectura de 2013 y hay que atribuirla a ellos. Los mismos autores advierten que entre los emberá del río Sinú, es decir entre los katío, Antomiá se aparece en forma de un niño tierno sentado entre las aguas jugueteando con los peces, y que para los antiguos es el espíritu del río, no el diablo del encuadre misionero.`,
    leccion:
      "Un alimento puede quedarse con el nombre de aquello que antes se comía a la gente.",
    similitudes: `El paralelo exacto está en el mismo artículo de 1929, tres páginas más allá. Antomiá paima, el diablo negro, le roba sistemáticamente la comida a una india jaibaná que sale a pasear; ella le prepara una gran olla de caldo de pescado y en lugar de plátano y yuca le pone raíz de moindú, que ensancha los intestinos, y lo espía desde fuera. El diablo come, se para junto a la escalera con el estómago inflado, cae del tablado y revienta con una explosión grandísima, y de su vientre salen fuego, humo y piedras. Antes de eso no había nada de eso, y los ríos habrían quedado lisos, sin piedras. La forma es la misma: un devorador liquidado con una trampa doméstica y unos restos que se vuelven algo permanente del mundo. Lo que cambia es qué queda: allí las piedras de los ríos, aquí un alimento que se siembra.

El segundo paralelo está en el propio pueblo katío y es el reverso del mecanismo. En «Cómo consiguieron los indios el maíz y el chonta-duro», que Rafael Bailarín narró a Milcíades Chaves en 1945, los dos cultivos no salen de ningún cuerpo: dos mujeres suben al Bajía llevadas por un ave, ven allí a sus muertos y bajan el maíz escondido en la boca y el chontaduro en la mano. Un mismo pueblo cuenta dos orígenes de alimento con procedimientos opuestos, el viaje con una semilla robada y el cadáver que se vuelve comida.

Aída Gálvez da el marco que hace legible esa pareja: sostiene que en los mitos sobre el proceso de humanización de los emberá la asunción de un patrón alimenticio es lo que establece la ruptura con los grupos considerados salvajes y antropófagos, y que los cultivos llegan por mediación de dioses, héroes u hombres que los obtienen mediante estratagemas. Que un devorador de niños se vuelva comida no es entonces una casualidad macabra.

Queda un correlato vivo que conviene marcar como comparación mía y no de la fuente: entre emberá katío del San Jorge cordobés, Javier Racero-Casarrubia y sus colegas registraron en talleres de 2007 y 2008 que el águila arpía es tenida por un peligro para los niños porque puede cargarlos y llevárselos en vuelo. No hay transformación ni alimento al final, pero el miedo del que el yaedé es la forma mítica tiene especie nombrada y fecha reciente.`,
    excerpt:
      "Un padre vence con una macana al gigante yaedé y su cuerpo se transforma en los primeros ñames.",
    seoTitle: "Los yaedé y el origen del ñame Katío",
    seoDescription:
      "Lee el relato histórico Katío del padre que vence a un gigante yaedé y transforma su cuerpo en ñame.",
    focusKeywords: [
      "yaedé",
      "origen del ñame",
      "mito Katío del ñame",
      "Antomiá",
      "relatos Emberá",
    ],
    tags: ["origen", "bestias", "sacrificio", "naturaleza"],
    researchNotes: `TÍTULO: “Icades (Ñame)” -> “Los yaedé y el origen del ñame”.
URL: se preserva el slug heredado.
FUENTES: Severino 1924 y paralelo de 1929.
${archiveResearch}`,
  }),
  archiveRecord({
    slug: "la-escalera-del-cielo",
    sourceKeys: [
      "severino1924",
      "rochereau1929",
      "villa1993",
      "onicKatio",
      {
        key: "rojasescalera1986",
        summary:
          "El artículo se llama como el mito y lo pone en el centro. Resume la versión de Severino —'en tiempos primordiales los emberá podían subir por una escalera como de cristal pero en castigo por el incesto, Karagabí les cortó esa comunicación'— y añade una variante geográfica que la ficha no tiene: María de Betania recogió en la zona de Dabeiba, en 1918, que la escalera se destruyó 'quedando en el lugar de su base una gran piedra que aún hoy se puede observar en las inmediaciones de Lloró'. Pardo apunta además que tierra se dice /egoró/, /jioró/ o /yoró/ según el dialecto y que los datos míticos convergen en señalar a Lloró como lugar de origen emberá. Y ofrece la lectura estructural: 'los hombres quedan desligados para siempre de los entes creadores al interrumpirse la comunicación con el mundo de Karagabí, al destruirse la escalera que comunicaba ambos niveles', con un diagrama de la escalera rota.",
        limitation:
          "Pardo cita a Santa Teresa por la edición de 1959 y a Betania por la de 1964, no por los originales de 1924 y 1929; la versión de Dabeiba él mismo la relativiza al advertir que se recogió 'en una zona del occidente antioqueño en la que aún hoy los indígenas no tienen idea clara sobre el territorio chocoano'. Su propio campo es alto Baudó y Guanguí, no Urabá. Ojo con el topónimo: lo que la ficha llama 'Gioró, cerca de Quibdó' es la misma palabra /jioró/, 'tierra', y aquí la base de la escalera se sitúa en Lloró, no en un caserío llamado Gioró.",
      },
      {
        key: "uribeJaibanas1985",
        summary:
          "Hace de la escalera rota la bisagra de todo el sistema: 'el mito habla de la escalera que comunicaba los mundos y que los hombres subían y bajaban con libertad; un día, la escala cayó y los mundos quedaron incomunicados; el Jaibaná restablece la comunicación y nuevamente puede ver aquel cielo', pasando 'ese velo engañoso que Carabí puso ante los ojos de los hombres para ocultarles el cielo'. La caída no queda entonces como una pérdida sin remedio sino como la condición del oficio del jaibaná. En paralelo, compara las versiones de la otra escalera, la que Jinú Potó levanta para llegar a la luna: 'el pájaro truenené trozó su soporte (escalera, sauce, guadua, ciprés, etc.) y él cayó en el mundo de abajo... Se le denomina el reino de Tutruicá, de nombre Armucurá', y anota que en varias versiones la salida se hace por el mismo árbol o escalera.",
        limitation:
          "Vasco no transcribe una narración katía de la escalera de Caragabí: la usa como concepto, ya recogida de Santa Teresa y de otros recopiladores. Sus versiones de primera mano —Clemente Nengarabe y demás— son chamí. Y hay que distinguir con cuidado las dos escaleras: la de cristal de Caragabí, que se rompe por una falta, y la de guadua de Jinú Potó, que corta un pájaro; el libro las trata en capítulos distintos y no son el mismo relato.",
      },
      {
        key: "ferrariJinu2023",
        summary:
          "Transcribe dos narraciones grabadas en 2022 con el episodio de la escalera dicho palabra por palabra por los narradores. La de Yucal: 'se fue a cortar varios palos de la guadua, larga que crece. Cortó varios palos de esos y empezó a hacerse la escalera. Se hizo una escalera... y en un momento se vino el señor carpintero, que es un ave de pico largo y de pelo rojo... ahí en la mitad de la guadua empezó a hacer una cueva. Iba a caerse'. La de Boca de Jagua conserva la conciencia del riesgo cósmico: 'si lo fueran dejado de pronto no habría luna en este mundo'. Aporta a esta ficha una escalera al cielo vigente, narrada hoy, con el motivo del soporte cortado y la caída a otro mundo, y con narradores identificados.",
        limitation:
          "Es emberá dóbida del Chocó, no katío, y es la escalera de Jinu Potó, no la escalera de cristal de Caragabí: no hay flores, ni cristal, ni Caragabí, ni mujer que sube con un niño. El artículo está escrito para estudiar la enunciación y los efectos del desplazamiento forzado sobre la narración, y las transcripciones fueron ligeramente corregidas por el autor (pronombres, sufijos verbales), como él declara en nota.",
      },
      "reichelDolmatoffAlgunos1953",
      {
        key: "rosiqueGraciaTodos2020",
        summary:
          "Documenta, entre katíos de Urabá, qué ocupó el lugar de la escalera después de la ruptura. En los parajes de drua wãndra 'hay puntos liminales por considerarse pasajes entre los mundos de arriba, del medio y de abajo: cuevas, rocas, pozas, cabeceras, cascadas, etc.; esos lugares permiten el ingreso espiritual de los jaibanás'. La comunicación entre pisos no desapareció: se volvió puntual, localizada en una geografía concreta del resguardo y reservada a quien sabe pasar. Uno de los testimonios recogidos describe incluso una abertura que 'no parecía una puerta hacia el mundo de arriba, sino más bien hacia el mundo de abajo'.",
        limitation:
          "No menciona la escalera ni el relato de su caída: es material contemporáneo sobre sitios sagrados que sólo puede leerse como continuación temática, nunca como versión del mito. Una de las cuatro comunidades estudiadas, Dojura, es chamí. Los datos son de la serranía de Abibe, en Chigorodó, y no de Lloró ni de Quibdó.",
      },
    ],
    title: "La escalera del cielo",
    mito: `Los habitantes de la tierra tenían trato frecuente con el cielo, que era morada de Caragabí y de otros dioses. En aquel tiempo el cielo no estaba tan lejos: desde abajo se alcanzaban a ver las cosas de allá y se oían muy bien sus cantos y sus músicas.

Los unía una escalera. Estaba formada por dos tallos de una planta bellísima, y sus peldaños eran botones, tallos y flores de la misma planta; era transparente como el cristal y llevaba en los flancos unas planchas de metal bruñido que brillaban, para que nadie se desmayara al subir y al bajar. Se apoyaba de un extremo en el cielo y del otro en la tierra, sobre dos hermosísimas flores. Unos dicen que la escalera era de Caragabí; otros, que la construyó un indio de la aristocracia de los Domicós, nacido de la pantorrilla de una mujer, llamado Heroputoharra.

Por ella subían y bajaban sin descanso, visitando el cielo como quien visita la casa de su padre. Había una sola condición, y era indispensable: no tocar las flores de la escalera.

Un día, entre los muchos que iban y venían, subía una india con un niño de brazos cargado a la espalda, como acostumbran cargarlos. En un momento de distracción de ella, el niño echó mano de una flor y la arrancó de su tallo. Inmediatamente la escalera se hizo trizas. Los que iban de la mitad para arriba treparon hasta el cielo; los que estaban de la mitad para abajo cayeron bruscamente a la tierra. Y se acabó el paso.

Esto sucedió en Gioró, tierra de Quibdó, que es tierra sagrada. Allí Caragabí hizo muchas de sus hazañas: allí convirtió en baracoco a su mujer y allí subió al cielo con su cuñada. Todavía se ven en Gioró restos de la escalera, o al menos sus bases, porque estaba puesta sobre una gran piedra lisa que aún se ve.

De la comunicación con el cielo quedó poco. Por causa de varios crímenes de las gentes, Caragabí les pasó por los ojos como un velo engañoso, para que vieran el cielo muy lejos y no se comunicaran con él ni vieran lo que allá pasaba. La música se sigue recordando, pero la subida ya no está.`,
    historia: `La escalera aparece en las dos fuentes antiguas, y no dicen lo mismo. Severino de Santa Teresa la trae en la página 42 de la edición de 1959 —la de 1924 no es consultable—, dentro de un capítulo sobre la religión donde la usa como prueba de que los indios conservaban «vestigios muy claros» de la justicia original: ahí la escalera es toda de finísimo cristal, con planchas de metal bruñido en los flancos y apoyada en dos flores, y Caragabí la quita «cuando pecaron los indios». Severino precisa que la falta fue de fornicación. Pardo Rojas, al resumirlo, escribe que fue «en castigo por el incesto»: la glosa es de Pardo, no del texto que cita.

Las notas de 1929, publicadas en el «Journal de la Société des Américanistes», tomo 21, pp. 93-94, describen la escalera de otro modo: dos tallos de una planta bellísima, con botones, tallos y flores por peldaños, transparente como el cristal, y una prohibición explícita de tocar las flores. Ahí la mujer lleva al niño a la espalda, no en los brazos. Esas notas las recogieron las Hermanas misioneras de la Inmaculada Concepción y Santa Catalina de Sena; Rochereau las remitió y Rivet las editó, y Rivet advierte que ya se habían usado en parte para el libro de 1924, de modo que coincidir con Severino no las corrobora. Ninguno de los dos textos nombra a quien narró.

El lugar tiene nombre en el mapa. El impreso de 1929 titula esa sección «Lloró o Gioró» —el reconocimiento óptico del ejemplar digitalizado la destroza como «Lord o Gioro»— y en el cuerpo sitúa la escalera en «Gioró, tierra de Quibdó». Pardo lo confirma desde la lengua: registra el lugar de origen o de contacto con el cielo como /jioró/ en el Baudó y anota que «Lloró es el topónimo en castellano traído por los distintos compiladores». Advierte además que tierra se dice /egoró/, /jioró/ o /yoró/ según la zona dialectal, y la propia Organización Nacional Indígena de Colombia llama egoró al mundo de los humanos: topónimo y nombre común se confunden con facilidad. Lloró queda un poco más abajo de la confluencia del Andágueda y el Atrato.

Sobre la piedra hay que ser exacto. En el impreso de 1929 hay dos, en dos pasajes distintos: la escalera «estaba puesta sobre una gran piedra lisa que aún se ve», y en la sección de Lloró o Gioró Caragabí pone «una piedra enorme» como seña del lugar donde castigó a un hermano y una hermana que vivían como matrimonio, dejándolos pegados, y de ahí vienen los eclipses cuando logran apartarse un poco. El texto no dice que sean la misma. Quien las junta en un solo hito visible es María de Betania, que recogió en 1918 en la zona de Dabeiba que la escalera se destruyó «quedando en el lugar de su base una gran piedra que aún hoy se puede observar en las inmediaciones de Lloró», y Pardo, que la reproduce y al mismo tiempo la relativiza porque se recogió donde la gente no tenía idea clara del territorio chocoano.

Vasco Uribe (1985) no transcribe ninguna narración katía de esta escalera: la usa como concepto, y hace de su caída la bisagra del oficio del jaibaná, que es quien vuelve a pasar «ese velo engañoso que Carabí puso ante los ojos de los hombres».`,
    versiones: `Severino guarda tres formas del mismo asunto y las presenta en escala. La primera y más general: Caragabí tenía una gran escalera para que los indios subieran a conversar con él cuando quisieran, y cuando pecaron se la quitó; además les pasó la mano por los ojos como sobándolos, y desde entonces ven menos, y les echó agua de coco en las cabezas para que envejecieran. La segunda, que introduce con un «algunos varían la historia», es la del niño que arranca la flor y la escalera que se parte en dos mitades. La tercera se la contó «uno de los indios que se tienen por más ilustrados a su manera», y es otra cosa: los primitivos oían las músicas del cielo, se engolosinaron y proyectaron construir una escalera propia; Caragabí se opuso, ellos insistieron, y él los derribó y llevó el cielo más lejos. Severino comenta que ahí ve «una sombra de la torre de Babel», y ese comentario es suyo.

Cambia también quién la hizo. En la variante que Severino anota, la escalera no es de Caragabí sino obra de un Domicó nacido de la pantorrilla de una mujer, Heroputoharra. Ese personaje es el mismo que en otras tradiciones emberá levanta una escalera de guadua para llegar a la luna, y su nombre se escribe Heroputoharra, Gerú-poté-uarra, híno-pota uára o Jinu Potó según quién transcriba. Conviene no confundir las dos escaleras: la de cristal se rompe por una flor tocada y corta el paso entre los mundos; la de guadua la troza un pájaro carpintero y hace caer al héroe al mundo de abajo. Son relatos distintos con un constructor de nombre compartido.

Difieren, por último, los detalles menores que suelen decidir una imagen: escalera de cristal o de tallos de planta con flores por peldaños; niño en brazos o niño a la espalda; escalera quitada por el dios o derribada por accidente; y un cielo que se aleja antes de la caída, por los crímenes de la gente, o después de ella, para impedir que la reconstruyan.`,
    leccion:
      "Un camino que todos usaban se rompe por una mano pequeña y no vuelve a levantarse.",
    similitudes: `Hay otra escalera emberá, y sirve justamente para medir la diferencia. Entre los chamí de la vereda de Corozal, en Río Frío, Reichel-Dolmatoff transcribió en 1945 sin retocar las palabras del narrador: «Se puso a cortar guadua en el monte. Se fue amarrando las guaduas y se fue para arriba como en una escalera. Cuando llegó al camino de la luna, se quedó allá esperándola. Pero entonces vino el pájaro carpintero y casi le trozó la escalera. El hombre se cayó». Aquí la escalera la hace un hombre, no un dios; la corta un pájaro, no una flor; y la caída no rompe la comunicación entre mundos sino que descubre uno: cae entre los indios muy bajitos que sólo comen humo «porque nosotros no tenemos ano».

La misma escalera sigue viva. En Yucal, río Panguí, Graciliano la narró en 2022: sembró una guadua y subió por ella para tumbar la luna, y el carpintero pequeño la trozó a picotazos. La consecuencia es la contraria de la de Gioró: «si lo fueran dejado de pronto no habría luna en este mundo». Ahí la escalera que se rompe salva el orden del cielo en vez de perderlo.

Y hay una subida katía que ocurre cuando la escalera ya no está. En el relato que Rafael Bailarín narró a Milcíades Chaves en 1945, dos mujeres que lloran a una muerta suben al Bajía en las alas de Ancastor, ave blanca que se vuelve hombre, con dos condiciones: no abrir los ojos y no bajar fruta. Una esconde en la boca un grano de maíz y la otra una fruta de chontaduro, y de esa desobediencia salen el maíz y el chontaduro. La estructura es la misma —un paso al cielo con una prohibición, y una mano que la rompe—, pero el resultado se invierte: allí la falta trae alimento en vez de cerrar el camino.`,
    excerpt:
      "Una escalera transparente apoyada en flores unía tierra y cielo hasta que un niño tocó su base y el paso se rompió.",
    seoTitle: "La escalera del cielo: relato Katío",
    seoDescription:
      "Lee el relato histórico Katío de la escalera transparente de Caragabí, sostenida por flores en Gioró.",
    focusKeywords: [
      "escalera del cielo Katío",
      "Caragabí",
      "Gioró",
      "flores sagradas",
      "mitología Emberá",
    ],
    tags: ["conexión divina", "desobediencia", "cielo", "Caragabí"].filter(
      (tag) => tag !== "cielo",
    ).concat("espiritualidad"),
    imagePromptHorizontal:
      "Ilustración panorámica full paper cut y paper quilling, no fotografía: una escalera transparente hecha de capas de papel cristalino asciende desde dos grandes flores en la selva de Gioró hacia un cielo musical; una familia se aproxima y un niño roza una flor mientras la estructura comienza a separarse, sin Virgen, santo, ángel, iglesia ni iconografía cristiana, sin texto, sin maqueta física, diorama ni 3D.",
    imagePromptVertical:
      "Ilustración vertical full paper cut y paper quilling, no fotografía: composición ascendente de una escalera transparente con barandas brillantes apoyada sobre dos flores de papel, cielo distante y figuras humanas pequeñas; el gesto de un niño toca una flor, sin aparición mariana, santo, aureola o templo, sin texto, sin maqueta física, diorama ni 3D.",
    researchNotes: `FUENTES: Severino 1924 y notas de 1929.
GEOGRAFÍA: Gioró cerca de Quibdó, aproximación regional.
REEMPLAZO VISUAL: par completo; retirar lectura mariana.
${archiveResearch}`,
  }),
  archiveRecord({
    slug: "los-bibidigomias",
    sourceKeys: [
      "rochereau1929",
      "villa1993",
      "minInteriorPlan",
      {
        key: "chaves1945",
        summary:
          "Es la versión de la que sale la secuencia entera de la ficha, y es katía por declaración del propio Chaves (p. 134: los cinco últimos relatos los recogió «de boca de Rafael Bailarín, indio katío», jaibaná, casado con la chamí Pola Henao, que aprendió los cuentos de su abuela y tradujo del katío). Añade detalles que la ficha ha limado: al explorador se le nombra «el indio Atamía (diablo)», es decir, el rastreador está glosado como Antomiá; el último bibidigomia «bajó en forma de un negro»; la niña cautiva no sólo abre la cabeza del niño, le come «el puro morró (seso)» y a un adulto además «el mé (órgano genital)». En la nota comparativa Chaves transcribe además la versión katía de Rochereau, que arranca distinto: un solo Bibidi baja, mata a una mujer en un bohío, y el dueño de casa lo persigue, sube por un bejuco, mata al tigre guardián y espera arriba para flecharlo.",
        limitation:
          "Publicado bajo el título «de los indios Chamí»: sólo la advertencia de la página 134 deshace la confusión, y hay bibliografía posterior que atribuye estas páginas a los chamí. Bailarín narró en castellano y Chaves transcribió; las notas comparativas (la antigüedad del mito, la convivencia con las fieras) son del recopilador en 1945, no del narrador. La versión de Rochereau que Chaves cita no es continuación de la suya sino otra trama con el mismo nombre.",
      },
      {
        key: "uribeJaibanas1985",
        summary:
          "Cita in extenso la versión de María de Betania y la coloca en su lugar dentro del ciclo de las edades: los bibidí o bibidí gomiá son «unos seres raros, mezcla de diablo, animal e indio», viven en copas de árboles gigantescos guardados por tigres y su jefe se llama Juratsarra, pero su guerra no es con los emberá actuales sino con los burumiás, los antropófagos de la primera edad. Y el desenlace es otro: un bibidí captura dos burumiás para engordarlos y comérselos, uno escapa y vuelve con un ejército, y quien decide la derrota es «una vieja bibidí, enojada porque le había tocado en ración el pene del burumiá», que llora y ayuda a los atacantes. Vasco añade en corchetes lo que le dijeron en el Chamí: que los bibidigomiá «eran hombres que vivían en cuevas de madera, árboles de abarcadura» y salían de noche a llevarse gente para comérsela.",
        limitation:
          "Es cita de cita: la versión larga viene de María de Betania (1964), que recogió en el noroccidente antioqueño y a quien Vasco corrige con paréntesis tomados de Santa Teresa. El testimonio de las cuevas de madera es una nota de campo chamí, no katía. La traición de la vieja bibidí y el motivo de engordar a los cautivos no están en el relato de Bailarín y no deben fundirse con él.",
      },
      "uribeplata2001",
    ],
    title: "Los Bibidigomia",
    mito: `Los indios iban de cacería y se perdían. Una vez los siguieron y vieron con sus propios ojos lo que pasaba: otros indios los cogían y se los llevaban. Los que vieron regresaron a avisar.

Esos indios que se robaban a los otros no tenían casa. Vivían en un gran árbol hueco que tenía como un balcón.

Mandaron entonces al indio Atamía a que siguiera el rastro, y Atamía los encontró en esa casa. Volvió y contó dónde estaban, y contó también la otra cosa: que a los que habían llevado ya se los habían comido.

Fueron todos, pero no encontraron la casa. La descubrió uno de ellos, porque un indio sacó la cabeza por encima del árbol; entonces fueron a mirar por debajo y ahí estaba. Se regresaron sin tocar nada, recogieron ajíes, barbascos y anamú por canastadas y volvieron a quemarlos en la raíz del palo donde vivían.

Con el humo se emborracharon los de adentro. Fueron cayendo uno por uno, y abajo, con garrote, los mataban. El último bajó en forma de un negro; un indio le dio un garrotazo, pero aquél lo agarró del pecho, lo mató y se fue, y el indio quedó muerto. Después bajó un tigre y también lo mataron, pero la tigra se salvó porque brincó muy lejos, y estaba preñada. Por eso todavía hay muchos tigres.

Entonces se asomaron al árbol y vieron un montón de calaveras: eran las de todos los indios que iban de cacería y que se habían comido.

Encontraron una indiecita de esa tribu y no la mataron, sino que se la llevaron a su casa. Un día la dejaron cuidando un niño en una hamaca mientras iban por agua y leña. Cuando volvieron la encontraron meciéndolo y le preguntaron si estaba dormido, y ella dijo que sí. Pasó la hora de despertar y lo encontraron muerto, porque se le había comido el seso. Llamaron a los otros indios para ver qué hacían con ella, y el mandón dijo que no la mataran, que la dejaran. Pero a la media noche pasó lo mismo con un indio, a quien le comió el puro morró y el mé. En seguida la mataron.`,
    historia: `Este relato lo narró Rafael Bailarín, indio katío, y lo recogió Milcíades Chaves Ch. Salió como relato octavo, con el título «Bibidigomia (Los indios caníbales)», en las páginas 155 y 156 de «Mitos, tradiciones y cuentos de los indios Chamí», Boletín de Arqueología, volumen I, número 3, Bogotá, 1945. En la página 134 Chaves advierte que de los nueve cuentos que publica bajo ese título sólo los cuatro primeros son chamí, de Nicolás Henao, y que los cinco últimos los recogió de boca de Bailarín, katío. Bailarín era jaibaná, estaba casado con Pola Henao, mujer chamí, aprendió los cuentos de su abuela y tradujo él mismo del katío al castellano.

La atribución que llevaba esta entrada es falsa. Buscado en los 610.154 caracteres del volumen de 1959 de fray Severino de Santa Teresa —que es la segunda edición de su obra de 1924—, «Bibidigom» aparece cero veces. Los Bibidigomia nunca estuvieron en ese libro.

Sí están, con otra trama, en las notas misioneras de 1929: la sección «Bibidi gomia» ocupa la página 96 de «Nociones sobre creencias, usos y costumbres de los Catíos del occidente de Antioquia», Journal de la Société des Américanistes, tomo 21, número 1. Esas notas las reunieron las Hermanas misioneras de la Inmaculada Concepción y de Santa Catalina de Sena, de Santa Rosa de Osos; Rochereau las remitió y Rivet las publicó. Chaves las conocía y transcribe su primera parte en su nota comparativa.

Y aquí hay que separar con cuidado. La frase que más circula sobre estos seres —que los Bibidigomia o indios caníbales viven en los grandes árboles pero al fin son descubiertos y vencidos por los indios— no es relato: es el comentario con que Chaves cierra su nota en 1945. De él es también la observación de que el mito delata una antigüedad muy grande porque aún aparecen las fieras conviviendo con los indios. Son hipótesis de un etnólogo de treinta años, no palabras de Bailarín.

Luis Guillermo Vasco cita in extenso, en «Jaibanás. Los verdaderos hombres» (1985), la versión de María de Betania de 1964, y en «El oro y la plata entre los embera y waunaan» (2001) coloca a los bibidí dentro del ciclo de los burumiás. Aída Gálvez, en 1997, registra algo distinto y valioso: que los eyabida le nombran a los bibidikomía, junto a los burumiá, los carauta y los jurá, como pueblos antropófagos que existieron «en tiempos de antes de Cristóbal Colón». El nombre sigue vivo en el noroccidente antioqueño, y no como monstruo sino como pueblo.

Lo que ninguna fuente dice es dónde ni cuándo narró Bailarín. Chaves no lo anotó.`,
    versiones: `Hay dos tramas distintas con el mismo nombre, y no son dos partes de una sola.

La que narró Bailarín empieza con cazadores que no vuelven y termina con una niña cautiva que mata dos veces dentro de la casa que la acogió. Los Bibidigomia son ahí «otros indios», sin descripción física, sin jefe y sin manos de cuchillo; el arma con que se los mata es el garrote, y el rastreador es el indio Atamía, a quien Chaves glosa entre paréntesis como diablo.

La de las notas de 1929 es otra historia. Allí los Bibidi gomia son seres raros, mezcla de diablo, animal e indio, que viven en la copa de los árboles más gigantescos —de un tamaño que ya no existe—, tienen cuchillos por manos y un jefe llamado Juratsarra. Uno solo baja, entra a un bohío, mata a una mujer; el dueño de la casa lo persigue hasta el árbol, sube por un bejuco, mata al tigre guardián —que allí tiene nombre, imamá pacoré, tigre-suegra—, recoge el bejuco para que el otro no pueda subir y lo flecha desde arriba, cubierto por el follaje. No hay humo, no hay ajíes, no hay comunidad que ataque en conjunto y no hay niña.

La segunda parte de esa misma sección de 1929 cuenta otra cosa todavía: un Bibidi toma prisioneros a dos burumiás y los vuelven eunucos para engordarlos, uno se escapa y vuelve con un ejército, y quien decide la derrota es una vieja bibidi indignada porque en el reparto le tocó un órgano vergonzoso. Conviene fijarse en el detalle, porque ese episodio es casi el argumento del relato noveno de Bailarín, «La india Pixaawina», donde a los cautivos los castran y engordan como marranitos y a una viejita sólo le dan el mé bien cocido. Lo que el narrador katío separa en dos relatos, las notas misioneras lo juntan bajo un solo nombre.

Vasco sigue en 1985 a María de Betania y hace de los bibidí enemigos de los burumiás, antropófagos de la primera edad, no de los emberá actuales. Esa guerra no está en Bailarín y no debe injertarse en su relato.

Cambia por último la grafía: Bibidigomia en Chaves, Bibidi gomia en 1929, bibidí y bibidí gomiá en Vasco, bibidikomía entre los eyabida que entrevistó Gálvez.`,
    leccion:
      "Ganar una guerra no cierra el daño cuando el enemigo se queda a vivir en la casa.",
    similitudes: `El paralelo más estrecho lo dio el mismo narrador. En «La india Pixaawina», relato noveno de Bailarín, unos indios que van de pesca son atraídos por una mujer, y a los que llevan vivos los amarran, los castran y los engordan con yuca cocida como a marranitos hasta que están gordos para comerlos; a una viejita sólo le dan el mé. Lo compartido es el tratamiento del cautivo como animal de cría. Lo distinto es la salida: allí la trampa se deshace desde adentro, porque Pixaawina deja sin castrar a un muchacho y termina huyendo con él río abajo sobre un balso para no dejar rastro. Aquí, en cambio, la cautiva entra a la casa ajena y la destruye.

El segundo paralelo está fuera del corpus antiguo y es contemporáneo. Mauricio Pardo recogió en el Baudó, y Aída Gálvez lo cita, el testimonio de que cuando los cholos venían a montiar los Burumiá los cogían, los llevaban a su pueblo, los capaban y los encerraban en un chiquero como a marranos, y sembraban al mismo tiempo una mata de primitivo, de modo que cuando las frutas maduras se rajaban también se rajaba de grasa la piel del cautivo y ya era tiempo de matarlo. El árbol hueco desaparece y el humo no hace falta: lo que ordena el horror es el calendario de un cultivo.

El tercero lo recogió la propia Gálvez en Dabeiba, entre eyabida: que los carauta eran indios que se comían a los emberá, que los cogían de la mano cuando iban a pescar o a montear, que recogían su sangre como sangre de marrano para hacer rellena, y que dejaron de comer gente cuando vino el diablo y les hizo un engaño. El final marca la diferencia: a los carauta los detiene una trampa ajena, no un cerco de la comunidad.`,
    excerpt:
      "La comunidad localiza a los Bibidigomia dentro de un árbol hueco y usa humo de plantas para detener sus ataques.",
    seoTitle: "Los Bibidigomia: relato histórico Katío",
    seoDescription:
      "Lee el relato de los Bibidigomia, habitantes de un árbol hueco enfrentados con humo de ají, barbasco y anamú.",
    focusKeywords: [
      "Bibidigomia",
      "Juratsarra",
      "mito Katío del árbol",
      "seres del monte",
      "tradición Emberá",
    ],
    tags: ["Juratsarra", "canibalismo", "bosque", "resistencia"],
    researchNotes: `FUENTE PRINCIPAL: Severino 1924.
CORRECCIÓN: se conserva violencia narrativa y se retira racialización editorial.
IMAGEN: par existente reutilizable.
${archiveResearch}`,
  }),
  archiveRecord({
    slug: "los-domicoes",
    sourceKeys: [
      "severino1924",
      "rochereau1929",
      "villa1993",
      "clacsoRegionalization",
      "turbayNotas2021",
      {
        key: "vargasemberas1991",
        summary:
          "Saca a los Domicó del relato y los mete en el archivo. Vargas encuentra en documentación colonial que \"Catalina Guaracu estaba casada con Domicó, indio de la encomienda de Miguel de Urnieta\", y concluye: \"Domicó es el apellido de una extensa familia Embera protagonista de la historia de la margen derecha de la cuenca del Atrato. Es posible relacionar a Caragabí con el apellido Domicó; algunas historias orales de la guerra con los cunas refieren que los Domicó lideraron los enfrentamientos\". O sea: la asociación entre Caragabí, el apellido Domicó y la guerra con los cunas no es invención del misionero, está en más de una tradición oral, y hay un Domicó documentado en el siglo XVII. Da también el contexto real del conflicto emberá-cuna en la cuenca del Atrato, sostenido más de cien años.",
        limitation:
          "La conexión Caragabí-Domicó la formula Vargas como posibilidad (\"es posible relacionar\"), no como hecho, y en nota. No discute el episodio de las cabezas centinela ni la lista de apellidos. Su historia oral procede del Atrato y el Baudó, no del occidente antioqueño.",
      },
      {
        key: "hernandezEstrategias2015",
        summary:
          "Sirve de contrapeso directo contra la tentación de leer \"los Domicó\" como un linaje épico. Salgado transcribe una comunicación oficial del 11 de junio de 1894 en la que la Prefectura de Occidente conmina al alcalde de Dabeiba a proteger \"a los indígenas Carmelo Majoré y Nepomuceno Domicó de los ataques a la propiedad de estos, efectuados por los colonos Nemesio David, Ignacio Sepúlveda, Ángel María Echavarría y otros\". Treinta años antes del libro de Severino, un Domicó aparece en el archivo no como guerrero de una saga sino como poseedor despojado que recurre al Estado. Es la misma región y casi la misma década en que la misión empezó a recoger relatos.",
        limitation:
          "No trata el relato ni la estructura de los apellidos; sólo aporta casos individuales. Y es precisamente el riesgo que el encargo advierte: hay que usarla para separar la genealogía documentada de la narración, no para fundir una en otra.",
      },
      {
        key: "rosiqueGraciaTodos2020",
        summary:
          "El propio pie de autoría es la corrección más eficaz que puede recibir esta ficha: Domicó y Chavarí —dos de los apellidos que el relato hace repartir a Caragabí— firman como investigadores emberá de Chigorodó en 2020. Cuatro de los diez coautores son emberá. La página habla de los Domicó en pasado bélico; el artículo muestra a personas con ese apellido produciendo conocimiento sobre su propio territorio hoy, en el mismo departamento. Y aporta el contenido: los sitios sagrados en cabeceras de montaña, la mediación del jaibaná y la reciprocidad con los pueblos de gente-espíritu.",
        limitation:
          "No estudia apellidos, parentesco ni reglas matrimoniales, y no dice nada sobre la guerra con los cunas. Las comunidades son de Chigorodó (eyábida) y una chamí (Dojura), no del occidente antioqueño del expediente de 1924.",
      },
    ],
    title: "Los Domicó y los linajes",
    mito: `Caragabí había prohibido el incesto bajo severísimas penas. Aun así, en aquel tiempo un joven se unió ilícitamente con su hermana, y por eso recibieron un castigo que todavía están sufriendo.

Queriendo evitar en adelante semejantes crímenes, Caragabí determinó darle a cada familia su apellido. Estando los indios reunidos en un convite, empezó a decirle a cada jefe de familia cuál sería el suyo: usted será Carupia, usted Celis, el otro Chavarí, Bailarín, Guaseruca, Domicó, Sinigüí. Lo hacía para que nunca se casaran los del mismo apellido.

Desde entonces se sabe con quién no hay que casarse. Cuando alguien anda averiguando parentescos para un matrimonio, ellos mismos se adelantan y dicen: yo soy Domicó, ese Carupia es. Y eso que hay muchos del mismo apellido que no tienen más parentesco que el de Adán.

Los Domicó volvieron a aparecer de otras maneras. Algunos aseguran que la escalera de finísimo cristal que subía desde la tierra hasta el cielo, para que los indios pudieran ir a conversar con Caragabí cuando quisieran, la construyó un indio de esa casa, nacido de la pantorrilla de una mujer, que se llamaba Heroputoharra.

Y está la guerra. Una vez los Cunas mataron a traición, a las orillas del mar, a tres indios Domicós. El Capitán de los Domicós reunió a su gente y los adiestró a todos dentro de su bohío a hacer blanco con los arcos, a fin de luchar con acierto. Cuando estuvieron listos descendieron a la arena y derrotaron a sus adversarios.

Cortaron las cabezas de los vencidos, las condujeron al bohío del Capitán y las suspendieron alrededor de él. Aquellas cabezas se movían por sí solas y se les erizaban los cabellos cuando se acercaba algún Cuna. De ese modo venían a ser como un toque de alarma.

Hicieron tal escarmiento, cuentan, que no dejaron más que dos.`,
    historia: `La entrega de los apellidos está en los dos textos antiguos del occidente antioqueño, y en los dos ocupa el mismo lugar: viene después de la prohibición del incesto y del castigo de una pareja de hermanos, y ocurre en una bebezón, que Severino de Santa Teresa llama convite. La guerra, en cambio, está sólo en Severino, en el Libro Primero, a continuación del ciclo de Séver, y es uno de los pocos episodios del volumen con narrador acreditado: se la refirió, dice, un Capitán Domicó de una tribu Catía, y es el propio Capitán quien añade el remate de que no dejaron más que dos Cunas. La comparación que cierra el pasaje, con Caín y Abel, con los Horacios y Curiacios de Roma y con los Tirios y Troyanos de Grecia, no es del Capitán: es de Severino.

Conviene corregir aquí algo que suele decirse de ese libro, que nunca nombra a quien narra. Para estos materiales sí lo hace, y todos los que nombra llevan el mismo apellido: Tohuratzabidá Domicó, que al bautizarse tomó el nombre de Fernando, para el origen de catíos y cunas; Dobiarisá Domicó, Cipriano después del bautismo, jaibaná, para la tentación del paraíso; Donungubi Domicó, bautizado Severiano, para el origen del jaibanismo; María Eva Domicó, Jaimerquma en su lengua, para las ceremonias de los jaies; y el Capitán de esta guerra. El capítulo que dice que Caragabí repartió el apellido Domicó es también el capítulo escrito con lo que le contaron personas apellidadas Domicó.

Y los apellidos no son linajes. Sandra Turbay y José Joaquín Domicó, en un trabajo de campo hecho entre julio y diciembre de 2018 en el resguardo de Jaikerazabi, en Mutatá, y entre eyábida de Chigorodó y Murindó, establecen que el repertorio de apellidos emberá es corto y estable, que los más frecuentes en los censos son Domicó, Sinigüí, Bailarín, Carupia, Majoré, Cuñapa, Zapia y Guaseruca, y que funcionan como indicador de etnicidad y no como marca de clan: no hay grupos de filiación, sólo parentelas bilaterales, y la memoria genealógica no pasa de los abuelos. Severino había registrado el hecho sin sacar la conclusión, cuando anotó que hay muchos del mismo apellido sin más parentesco que el de Adán.

Del archivo salen personas concretas, no sagas. Patricia Vargas encontró en documentación colonial que Catalina Guaracu estaba casada con Domicó, indio de la encomienda de Miguel de Urnieta. Elizabeth Karina Salgado transcribe la comunicación del 11 de junio de 1894 en que la Prefectura de Occidente, con sede en Santa Fe de Antioquia, conmina con multa de veinticinco pesos al alcalde de Dabeiba para que proteja a los indígenas Carmelo Majoré y Nepomuceno Domicó de los ataques a su propiedad por parte de los colonos Nemesio David, Ignacio Sepúlveda, Ángel María Echavarría y otros; y en 1911, Indalecio Celis y Calixto Majoré, autodenominándose indígenas y vecinos de Frontino, reclaman al gobernador el cumplimiento de una sentencia sobre las tierras de Dacidocito. Domicó y Celis están en la lista que el relato pone en boca de Caragabí. La genealogía existe, tiene fechas y tiene folios; por eso mismo no es el mito.`,
    versiones: `La escena del reparto aparece en las dos publicaciones antiguas con diferencias pequeñas y reveladoras. En el artículo de 1929 Caragabí empieza por Sinigüí y sigue con Chavarí, Domicó, Bailarín, Guaserucamá, Carupia y Celis; en Severino empieza por Carupia y Celis y termina en Domicó y Sinigüí. Una escribe Guaserucamá y la otra Guaseruca. Ninguna de las dos listas se cierra: las dos terminan en etcétera.

El castigo que motiva el reparto está contado entero en una de ellas y censurado en la otra. Severino escribe que la pareja recibió un castigo que aún están sufriendo y que por ser de no sé qué hechura no lo refiere. El artículo de 1929 sí lo refiere, aunque en otra pieza, la de Lloró o Gioró: el hermano y la hermana quedaron pegados en la acción vergonzosa, sin poderse desprender, y el día en que se desprendan se acabará el mundo; cuando logran apartarse un poquito suceden los eclipses; Caragabí puso una piedra enorme como seña del lugar y junto a ella muchísimos niños de brazos que están ahí continuamente desenojándolo.

Las dos versiones también siguen distinto después del reparto. En 1929 la entrega de apellidos empalma con otra bebezón en la que la mujer de Caragabí queda convertida en baracoco y él convierte en animales a los indios pecadores, antes de subir al cielo con su cuñada. Severino separa esos episodios y coloca en su lugar la guerra de los Domicó, que en el artículo de 1929 no existe. Allí la memoria de guerra está toda del lado de Séver, y los trofeos no son cabezas sino colmillos: los colmillos de los Cunas muertos, recogidos y ensartados en una especie de collar que, al rociarlo con chicha o guarapo, sonaba como campanas.

Fuera del occidente antioqueño hay otras versiones de lo mismo. Patricia Vargas recoge en el Atrato y el Baudó historias orales de la guerra con los cunas en las que los Domicó lideraron los enfrentamientos, y propone, expresamente como posibilidad y en nota, relacionar a Caragabí con ese apellido. Y Anne-Marie Losonczy, citada por Turbay y Domicó, encontró en el Chocó que los apellidos siguen siendo los mismos que impuso Karagabí, el Creador, para prevenir el incesto. La escena no es sólo un recuerdo de archivo: está viva y se cuenta en otras cuencas.`,
    leccion:
      "Un nombre compartido puede señalar de dónde viene alguien sin decir de quién desciende.",
    similitudes: `El paralelo más exacto está en el mismo corpus y con narrador acreditado. En La mujer de Karagabí, que Rafael Bailarín, katío, le narró a Milcíades Chaves en 1945 y tradujo él mismo, Karagabí llama a todos los indios, los reúne, los hace gritar y por el grito los convierte en animales: al capitán, que gritó jar, jar, juu, le dice que será Imaná, tigre, y que se vaya para el monte, y con los demás hace lo mismo; sólo deja a los que no eran pícaros, y de ellos nacieron todos los indios. Es la misma asamblea y el mismo gesto de asignar, con una diferencia entera: allí lo que se reparte son especies y aquí son nombres. En un caso el reparto saca gente del mundo humano; en el otro lo ordena por dentro.

El segundo paralelo es de guerra y sirve para medir la de los Domicó. Mauricio Pardo muestra que los relatos emberá de guerra contra los Cunas, a quienes llaman Jurá, están registrados en el Atrato, el Sinú y el Baudó, y que no son una manera genérica de nombrar al enemigo, porque los mismos narradores reconocen a los cunas contemporáneos y cuentan además guerras contra otros pueblos con gentilicio propio: burumiás, bibidícomias y carautas. Uno de esos relatos, Bibidigomia, es también de Bailarín, y allí el enemigo vive en un árbol hueco y muere ahumado con ajíes, barbascos y anamú. La guerra de los Domicó no es entonces un episodio excepcional de un linaje: es un ejemplar de un género regional.

Queda una comparación que conviene no repetir. Severino cerró el episodio diciendo que esta rivalidad india trae a la memoria la de Caín y Abel, la de los Horacios y Curiacios de Roma y la de los Tirios y Troyanos de Grecia. Tres equivalencias en una línea, ninguna documentada, y todas al servicio de convertir una memoria concreta del golfo en un lugar común de manual.`,
    excerpt:
      "Caragabí entrega nombres a los linajes; el relato sigue a los Domicó en una memoria de guerra y vigilancia.",
    seoTitle: "Los Domicó y los linajes Katío",
    seoDescription:
      "Conoce el relato histórico de los apellidos dados por Caragabí y la memoria de los Domicó en el occidente.",
    focusKeywords: [
      "Domicó",
      "linajes Katío",
      "apellidos Emberá",
      "Caragabí",
      "memoria de guerra",
    ],
    tags: ["linajes", "Caragabí", "conflicto", "ancestralidad"],
    researchNotes: `FUENTE: Severino 1924.
TRATAMIENTO: memoria narrativa de conflicto, no crónica literal.
LÍMITE: no inferir reglas contemporáneas desde el archivo.
${archiveResearch}`,
  }),
  archiveRecord({
    slug: "sever",
    sourceKeys: [
      "severino1924",
      "rochereau1929",
      "villa1993",
      "clacsoRegionalization",
      {
        key: "vargasemberas1991",
        summary:
          "Es el mejor marco disponible para leer la saga de Séver sin volverla crónica ni desecharla como fábula. Vargas sostiene que emberá y cunas, \"habitantes de la cuenca del Atrato al momento de la invasión española, tienen una larga historia de relaciones que se encuentran referidas en sus respectivas tradiciones orales\", y que al cruzar las versiones de origen de unos y otros se reconocen \"formas complementarias de narrar y de metaforizar un proceso de alianza-guerra y zona de frontera, vivido por más de cien años\", proceso que además está en la documentación española del XVI y XVII: los emberá se expanden del alto al medio Atrato y los cunas se transforman en olotule y migran al golfo de Urabá, al Tuira y a San Blas. La conclusión territorial del relato —que los enemigos se retiraron al Darién— tiene, así, un correlato documental que no depende del misionero. Cita a Severino en la edición de 1959.",
        limitation:
          "No analiza el ciclo de Séver ni menciona a Emágai, Chiano o Genené: trabaja con historias orales del Atrato recogidas por Pardo y por ella misma. Y su lectura de los mitos como historia es una propuesta metodológica declarada, no una equivalencia demostrada episodio por episodio.",
      },
      {
        key: "rojasRegionalizacion1987",
        summary:
          "Demuestra que el relato de Séver no es una pieza aislada del expediente katío sino un ejemplar de un género regional. Pardo escribe: \"En diferentes lugares como el Atrato, el Sinú, el Baudó, han sido registrados relatos tradicionales de guerras contra los Cunas a quienes los Emberaes llaman Jurá\", y descarta que Jurá sea un mero sinónimo de enemigo porque los emberá reconocen a los cunas actuales y narran además guerras contra otros grupos con gentilicio propio —Burumiás, Bibidícomias, Carautas—; entre sus referencias está Santa Teresa 1959. Documenta también el movimiento que la saga da por resultado: la expansión de los citarabirá desde el alto Atrato hacia el medio río y sus afluentes orientales, y la migración sistemática de emberá atrateños hacia el Darién panameño. Los topónimos Juradó (\"río de los Cuna\") y Jurubidá lo respaldan.",
        limitation:
          "No comenta el ciclo de Séver ni ninguna versión concreta; sus datos de guerra vienen del Baudó y el Atrato chocoano. Es de 1987 y su clasificación dialectal ha sido afinada después.",
      },
      {
        key: "uribeResena1986",
        summary:
          "Identifica el corpus emberá comparable más importante para leer a Séver, y da sus coordenadas exactas: veintiséis narraciones recopiladas íntegramente en el alto Baudó, Chocó, narradas sobre todo por Floresmiro Dogiramá, compiladas por Mauricio Pardo y publicadas por el Centro Jorge Eliécer Gaitán en 1984, agrupadas en capítulos de historias \"del principio, de Ba (el trueno), de cuñados, de Jaibanás, de guerra, de cimarrones, de animales\". Hay, pues, un bloque emberá entero de historias de guerra con narrador acreditado y sin edición misionera, que sirve de contraste directo para el ciclo de Séver: allí el motivo del adiestramiento con arcos antes de la expedición y el de la cabeza del jefe exhibida como trofeo reaparecen fuera del expediente de 1924. Vasco señala también la genealogía de intermediarios del narrador, de Nordenskiöld a Pardo.",
        limitation:
          "Es una reseña de tres páginas, no el corpus: para cotejar episodios hay que conseguir el libro de 1984, que no encontré en acceso abierto en el sitio de un editor (circula en repositorios no autorizados). Y el corpus es del alto Baudó —emberá del Chocó, no katío del occidente antioqueño—: sirve para comparar, no para completar.",
      },
      {
        key: "oIADiagnostico2012",
        summary:
          "Aporta un dato de toponimia que merece verificación y que la ficha no registra: entre los sitios sagrados del pueblo emberá eyábida y dóbida el documento enumera \"Katuma Chever en Dabeiba\", y en otros apartados Chever figura además como comunidad emberá eyábida del municipio de Dabeiba, junto a Karrá, Choromandó Bajo, El Pital, Guavia, Honda, Taparales y Llanogordo. El Pital y Antadó son, precisamente, dos de los parajes de Dabeiba que Severino nombra en 1924. El nombre del héroe del relato —Séver, Chever— sobrevive como cerro sagrado y como comunidad viva en el mismo municipio. También ordena la nomenclatura: \"Embera Eyabida (katío), Embera Chamí y Embera Dóbida\".",
        limitation:
          "El documento no establece ninguna relación entre el topónimo Chever y el personaje Séver: la proximidad fonética es una observación mía y habría que confirmarla con hablantes o con lingüistas antes de afirmarla en la página. Además es un diagnóstico jurídico-político, sin narraciones, y la fecha exacta de publicación no consta en portada (el convenio es de 2011 y el texto cita hechos hasta 2012).",
      },
    ],
    title: "Séver y sus hijos",
    mito: `Caragabí produjo de la nada una gota de agua, la tapó con una totuma nueva y al día siguiente, al descubrirla, la halló convertida en un indio catío. Produjo otra gota, la tapó con la misma totuma, y de ella salió una mujer. Le enseñó a hacer otra gota igual, pero ella esparció la materia en forma de llovizna y de la llovizna salió multitud de Cunas. Aprendieron muy bien a manejar el arco y vivían en bohíos hermosos, pero a los ocho días de creados flecharon a Caragabí sin poder herirlo, y él, por esa ingratitud, los desterró a las orillas del Atrato.

Más tarde Caragabí sacó otro hombre de una nueva gota de agua. Se llamó Séver, y aprendió de él a flechar con toda perfección. Para darle agilidad le enseñó a sobarse el cuerpo con ojos de tigre pulverizados; para ver de noche lo mismo que de día, se frotó con ojos de venado, de león y de guagua. Tuvo cinco hijos: Tragábari, Hainaeru, Chiano, Jaibama y Emágai, y les pasó lo suyo.

Séver escondía sus flechas en el sagrado árbol Genené. Espió de noche a los Cunas, que no veían en la oscuridad; lo recibieron mal y tuvo que volverse. Veinte Cunas subieron el Atrato en su persecución y los mató a todos. Aprendió de Caragabí a construir canoas, hizo una de Genené y bajó con sus cinco hijos, y vencieron. Al mes volvieron y vencieron otra vez. En la salida siguiente los Cunas mataron a Chiano, el tercer hijo, que atisbaba desde un cañaflechal; Séver incendió el cañaflechal, los sacó a las playas y los derrotó. Les arrancó los dientes, los ensartó en una pita y los colgó alrededor de su bohío: cuando aquellos dientes se agitaban solos y sonaban como campanas, era señal de que los suyos vencerían.

Salió un día Emágai, el menor, a cazar, y lo hirieron en el costado con flecha envenenada. Se la arrancó y corrió, pero se refugió entre las raíces de un árbol llamado Comba, donde lo hallaron. Unos querían acabar con él; otros, llevarlo en rehenes, y prevaleció lo segundo. Séver encontró rastros de sangre, juró represalias, se presentó armado en el poblado, halló vivo a su hijo e incendió quince bohíos aprovechando la noche, que para él era como el día. El Capitán de los Cunas intentaba matar al cautivo cada cuatro días y el pueblo no lo permitía. Emágai lo desafió, lo venció, y huyó al llegar la noche, cuando ellos ya no veían y él corría sin peligro. Séver celebró su regreso con inusitada pompa, porque no lo esperaban vivo.

Reanudada la guerra, acabaron con cincuenta canoas. Un mes después Séver fue a bañarse al Atrato muy lejos de su casa. Una expedición que subía amarró las canoas, se adelantó por el tupido ramaje de la orilla y todos a una lo flecharon. Quedó cosido a flechazos. Con sus huesos hicieron una flauta, pero al ensayarla se reventó. Llevaron su cabeza como trofeo.

Sus hijos bajaron en persecución y, gracias a su potencia visiva, hicieron una noche un gran escarmiento. Los Cunas abandonaron sus tierras y se retiraron muy lejos, y los descendientes de Séver quedaron dueños de sus posesiones. La causa de aquel odio, dicen, fue haber flechado los Cunas a Caragabí.`,
    historia: `El ciclo ocupa el capítulo cuarto del Libro Primero, titulado Catíos y Cunas, y es uno de los pocos lugares del volumen donde quien narra tiene nombre. Severino de Santa Teresa escribe que quien le refirió la leyenda con todos sus detalles se llama Tohuratzabidá Domicó, y que al ser bautizado tomó el nombre de Fernando; más abajo lo llama mi cicerone Tohuratzabidá y, al final del episodio, mi improvisado historiador. Eso cambia el valor del texto: se suele decir que Severino no acredita a nadie, y para este material sí lo hace. Por eso el relato sigue aquí su versión y no la del artículo de 1929, que es anónima.

Las costuras del misionero se ven y se pueden separar. Después del destierro de los Cunas interrumpe para pedirle al lector que note la alusión al destierro del primer hombre del paraíso; a la vuelta de Emágai se pregunta si tendrá que ver con el hijo pródigo. Son suyas, no del narrador. También es suya la palabra bautismo con que nombra la fiesta en que Séver da nombre a sus hijos: el artículo de 1929, contando lo mismo, dice que le hizo jemenede. Y el volumen que puede consultarse es la segunda edición, de 1959, que el autor declara corregida y aumentada sin marcar dónde, de modo que todo esto se cita como 1924 barra 1959 y nunca como 1924 a secas.

Hay una corrección menor y concreta. Ninguno de los dos textos dice Darién. Severino escribe que los Cunas abandonaron sus tierras y se retiraron muy lejos, y que los descendientes de Séver quedaron dueños de sus posesiones; el artículo de 1929 dice que se retiraron al mar, donde han permanecido hasta ahora. El Darién viene de la etnohistoria, no del relato: Patricia Vargas documenta que los cunas se transformaron en olotule y migraron al golfo de Urabá, al Tuira y a San Blas mientras los emberá se expandían del alto al medio Atrato, y Mauricio Pardo registra la migración sistemática de emberá atrateños hacia el Darién panameño. El desenlace territorial tiene correlato documental, pero no está en boca del narrador.

Queda una pista que hay que dar como pista. El Diagnóstico y Plan de Salvaguarda Embera, capítulo Antioquia, enumera entre los sitios sagrados del pueblo eyábida el Katuma Chever en Dabeiba, y en sus tablas de comunidades y de población registra en ese mismo municipio una comunidad escrita Sever, de doscientas setenta y siete personas, y otra llamada Sever Taparales; en su registro de homicidios el mismo municipio aparece con las dos grafías, Sever y Chever. El documento consigna además que Fabio Domicó, vicegobernador mayor indígena de Dabeiba, fue asesinado cuando se dirigía a coordinar la socialización del plan en la comunidad de Sever. El documento no establece ninguna relación entre ese topónimo y el personaje del relato, y la proximidad fonética no basta: habría que confirmarla con hablantes o con lingüistas antes de afirmarla.`,
    versiones: `El artículo de 1929 trae este ciclo bajo el título Guerras de los Cunas, sin narrador acreditado, y difiere en casi todos los detalles.

Allí Caragabí no produce gotas de la nada: tiene agua generadora en un frasco azul, hace con ella dos muñecos, les da vida y les encarga hacer otros para que se diviertan. Los muñecos sacan dos gotas con el dedo y, al sacudir el dedo mojado, de las gotas menudísimas se forman unas cincuenta personas más, porque Caragabí no les explicó que había que taparlas con totumitas nuevas. Esa gente resulta belicosa, le dispara flechas al no conocerlo, y él les da mujeres hechas de barro y los echa de allí. Los principales de los suyos son cinco, y uno se llama Séver. Sus hijos son cuatro y con otras grafías: Guiano, Dragábari, Jainaeru y Emángai. Caragabí los soba con una mezcla de ojos de tigre y de gato.

Los episodios también cambian de dueño. Quien muere en la emboscada del cañaflechal es Guiano, y son sus huesos los que los Cunas convierten en flautas que se rompen al tocarlas, como señal de que no vencerían; en Severino ese presagio se traslada al propio Séver, ya muerto. Los trofeos no son dientes ensartados en una pita alrededor del bohío, sino colmillos formando una especie de collar que suena como campanas cuando se lo rocía con chicha o guarapo. El hijo capturado no es Emágai: es el mayor de otros dos hijos nacidos de hombre y mujer, que cae herido junto a la raíz de un almendro, sana entre los Cunas, crece entre ellos, mata al jefe cuna y es él quien más tarde venga a su padre. Hay una bomba que los Cunas hacen estallar y ante la cual Séver se tira al agua fingiendo huida. Hay un Puerto Cuna adonde sólo vuelven las canoas ensangrentadas. Y hay un cierre distinto: los Cunas también eran valientes y no se rendían, pero después de aquella batalla se retiraron al mar, en donde han permanecido hasta ahora.

No se funden. Y como el artículo de 1929 y el libro de Severino salen del mismo fondo de apuntes misioneros, coincidir no prueba nada y diferir tampoco corrige nada: son dos escrituras del mismo material, una firmada por un narrador y otra no.`,
    leccion:
      "Una guerra heredada no termina con la muerte del más fuerte porque cada pérdida obliga a la siguiente.",
    similitudes: `El ciclo no es una pieza aislada sino un ejemplar de un género. Mauricio Pardo registra que en el Atrato, el Sinú y el Baudó se han recogido relatos tradicionales de guerras contra los cunas, a quienes los emberá llaman Jurá, y descarta que sea un nombre genérico de enemigo porque los mismos narradores reconocen a los cunas de hoy y cuentan además guerras contra burumiás, bibidícomias y carautas. Uno de esos relatos, recogido en el Baudó, narra la guerra de emberás confederados de los ríos Pepé, Munguidó, Quito y Atrato contra Jurás del río Dubasa, a quienes persiguen hasta Panamá. Los topónimos lo respaldan: Juradó significa río de los Cuna, y Jurubidá, de la región Cuna.

El segundo paralelo está dentro del mismo libro, veinte páginas después, y muestra cómo se repite el motivo del trofeo que avisa. En la guerra que un Capitán Domicó le refiere a Severino, los vencedores cortan las cabezas de los Cunas caídos y las cuelgan alrededor del bohío, y esas cabezas se mueven solas y se les erizan los cabellos cuando se acerca un enemigo. Tres objetos distintos para el mismo presagio: dientes en una pita, colmillos en un collar rociado con chicha, cabezas suspendidas.

El tercero cambia de voz. En Bibidigomia, que Rafael Bailarín, katío, narró a Milcíades Chaves en 1945 y tradujo él mismo, la guerra de exterminio contra un pueblo entero se cuenta sin héroe con nombre y sin genealogía: los indios rastrean a los que se llevan a su gente, encuentran su árbol hueco, lo ahuman con ajíes, barbascos y anamú y los matan uno por uno al caer. Séver es una saga de padre e hijos; aquella es una acción colectiva sin protagonista. La diferencia mayor, otra vez, es de archivo: allí hay un narrador katío que traduce lo suyo, aquí hay un narrador katío traducido y reescrito por un prefecto apostólico.`,
    excerpt:
      "Séver y sus cinco hijos recorren el Atrato en una memoria de guerra, cautiverio, muerte y venganza continuada.",
    seoTitle: "Séver y sus hijos: memoria Katío",
    seoDescription:
      "Lee el ciclo histórico de Séver, Emágai y sus hermanos en el Atrato, presentado como memoria de guerra y no como crónica literal.",
    focusKeywords: [
      "Séver",
      "Emágai",
      "mito Katío del Atrato",
      "hijos de Séver",
      "memoria de guerra",
    ],
    tags: ["Séver", "río Atrato", "conflicto", "venganza"],
    researchNotes: `FUENTES: Severino 1924 y fragmentos de 1929.
TRATAMIENTO: memoria de guerra, no historia literal.
IMAGEN: par existente reutilizable.
${archiveResearch}`,
  }),
  archiveRecord({
    slug: "tradicion-del-cerro",
    sourceKeys: [
      "severino1924",
      "rochereau1929",
      "villa1993",
      "clacsoRegionalization",
      {
        key: "trimborn1953",
        summary:
          "Da a Musinga el espesor que el relato supone. Piazzini muestra que Musinga es a la vez corregimiento, río, valle, vereda y alto dentro de Frontino, uno de los nueve corregimientos junto a El Cerro, Carauta, Murrí, Nutibara, Nobogá, Fuemia, Pontón y Chontaduro; que allí tienen resguardo comunidades emberá-catío, junto a los valles de Río Verde y Murrí; y que en las crestas entre los ríos Sucio, La Herradura, Nore, Musinga, Nobogá, Río Verde, Carauta y Murrí hay \"promontorios de tierra localmente conocidos como perúes que corresponden a túmulos funerarios\" saqueados desde el siglo XVI, y en El Cerro, Musinga y Carauta \"numerosos banqueos o aterrazamientos artificiales\" de antiguas viviendas. Rastrea además la toponimia contra fuentes de 1515 (Núñez), 1533 (Heredia) y 1537 (Vadillo), y registra el topónimo \"Beiba Viejo\". El cerro del relato está, entonces, en un paisaje ocupado, nombrado y disputado durante cinco siglos.",
        limitation:
          "No menciona el Cerro Plateado por ese nombre ni el relato; es geografía histórica y arqueología del territorio municipal, no etnografía del relato. Tampoco distingue variantes internas del pueblo emberá: usa \"emberá-catío\" como etiqueta administrativa.",
      },
      "upeguiEstrategias2015",
      "montoyaUpeguiHermanas2026",
      {
        key: "rosiqueGraciaTodos2020",
        summary:
          "Es la contraparte viva del cerro de la fuente misionera. Describe los drua wãndra —sitios sagrados— de comunidades emberá eyábida y chamí de Chigorodó, situados en cabeceras de montaña, y explica que crestas y cascadas funcionan como tránsitos entre el mundo de arriba, el del medio y el de abajo. Sostiene que esas montañas están habitadas por pueblos de gente-espíritu con personhood plena —oangaramia, yhaberará, chimorna— y presididas por Pãkõré, y que el jaibaná media esa relación por sueños y rituales en clave de reciprocidad, no de sometimiento. Da un marco para leer a los habitantes del cerro de Musinga como vecinos con los que se negocia (de los que incluso se aprende a curar), no como demonios absolutos.",
        limitation:
          "Es Chigorodó, no Frontino, y mezcla dos subgrupos: comunidades eyábida (Polines, Chigorodocito, Guapá Alto, Saundó) y una comunidad chamí (Dojura). Además es etnografía de 2015-2019: no autoriza a proyectar estas categorías hacia atrás sobre el registro de 1924, y el término Antomiá no aparece en ella.",
      },
      "oIADiagnostico2012",
    ],
    title: "El Cerro Plateado de Musinga",
    mito: `Hay dos clases de Antomiá. El Antomiá torro, el blanco, fue el que enseñó el jaibanismo. El Antomiá paima, el negro, es el ladrón.

Vecino a Frontino hay un cerro que ahora llaman el cerro plateado. Allí vivían el Antomiá negro y varios colegas suyos, y estaba robando sin cesar. Les robaba a los indios, que eran sus vecinos en Musinga.

En cierta ocasión se le antojó robarse un niño y una niña. El primero se le escapó y la segunda quedó con ellos. Para hacerse obedecer de ella le pegaba con una culebrita verde. La niña vivía asustada.

Un día vino su hermanito a buscarla y, al entrar, vio que los Antomiás celebraban una fiesta. Bailaban y tenían cuernos y cola. Muchos eran como gavilanes o como gallinazos. El niño gritó: Ave María purísima. Todas las luces se apagaron y quedó todo en silencio. Una mujer volvió a encender las luces y a brindar licores. El niño repitió lo que antes y tuvo el mismo resultado.

Sólo que al fin el niño fue cogido. Lo pusieron en un lugar del cerro que da al abismo profundo, y allí se sostiene, a punto de caer, pero sin poder caer.

Con los reflejos de esas luces con que celebraban la fiesta, Antomiá iluminó el pedazo de peña pelado en donde está el niño, y por eso refleja como plata. Es lo que se ve desde lejos, y es lo que le dio nombre al cerro.

La niña no salió de allí. Los indios que vivían en el valle hicieron un camino subterráneo que salía por Urrao y se retiraron a otras partes, por miedo. En ese camino aprendieron a sacar espinas chupando, como hacen los jaibanáes.

Todavía frecuentan los Antomiás las tierras del cerro. Y el niño está allí, en la misma posición que antes.`,
    historia: `Esta tradición está en las páginas finales del artículo de 1929 del Journal de la Société des Américanistes, entre la pieza de Gioró, donde un hermano y una hermana quedan pegados por castigo de Caragabí y sus forcejeos producen los eclipses, y la del birri. Ocupa poco más de media página y lleva en el impreso el título Tradición del cerro. El cerro está en el distrito de Frontino; Musinga es el valle vecino, el de los robados, no el del cerro.

Quién tomó estas notas importa. La nota inicial del artículo, firmada por Paul Rivet, aclara que Henri Rochereau se limitó a remitir unos apuntes recogidos por las Hermanas misioneras de la Inmaculada Concepción y Santa Catalina de Sena, de Santa Rosa de Osos, y que Rivet decidió publicarlos respetando la forma que les dieron sus autoras. Las autoras son religiosas de la misión. En esta pieza no hay narrador emberá identificado, ni fecha, ni lugar de recolección. Conviene despejar de paso una atribución que circula: el único narrador con nombre que aparece en el material antiguo del occidente antioqueño, un Capitán Domicó de una tribu Catía, es quien le refiere a Severino de Santa Teresa la guerra de los Domicó con los Cunas, no esta tradición del cerro. Aquí nadie firma. Y la misma nota de Rivet advierte que estos apuntes ya se habían usado en parte para el libro de Severino de 1924, de modo que el pasaje paralelo del Libro Primero de la edición de 1959 no corrobora nada: sale del mismo fondo.

El archivo consultable no permite citar ni una palabra literal. El reconocimiento óptico del tomo de la revista se hizo con modelo de francés sobre un texto español y no dejó una sola vocal acentuada correcta; convierte además la o final con tilde en e, lo que cambia la persona del verbo, y escribe Antomiá de varias maneras distintas. Sirve para saber qué dice, nunca para transcribir cómo lo dice.

Dos piezas de la lista alumbran la capa cristiana que el relato trae puesta. Laura Montoya Upegui documentó en 2015, con las crónicas de la propia congregación, que las misioneras del occidente antioqueño identificaron al jaibaná como el doctor y brujo que se comunicaba con Antomiá, dios del río, y lo tradujeron a interlocutor del diablo y a principal enemigo de la misión: la conversión de Antomiá en demonio es una operación fechable, de los mismos años en que se tomaron estos apuntes. Y el Diagnóstico y Plan de Salvaguarda Embera de Antioquia muestra que el cerro no es curiosidad de archivo sino categoría vigente, katuma, con lista nominal de cerros sagrados del occidente antioqueño y con las amenazas que hoy pesan sobre ellos.`,
    versiones: `Hay dos versiones publicadas de esta tradición y no cuentan lo mismo, aunque salgan del mismo fondo de apuntes misioneros.

La de 1929, que es la que aquí se sigue por ser la que menos manos tuvo entre el apunte y la imprenta, trae al hermanito que entra a buscar a su hermana, la culebrita verde, la frase gritada dos veces por él, el niño que queda al borde del abismo sin poder caer, el reflejo que Antomiá enciende sobre la peña pelada, el camino subterráneo hasta Urrao y el aprendizaje de sacar espinas chupando.

La de Severino, en el Libro Primero de 1959, cuenta otra cosa con los mismos elementos. Un Antomiá roba a una sola niña y la devuelve a diario cerca de los bohíos para que consiga comida; si empieza a llorar le pega en las piernas con una culebrita azul, no verde. No hay hermano que vaya al rescate: son los indios, cansados de los latrocinios, quienes cuecen raíces de tobo con carne y las dejan cerca de un bohío. Antomiá se ceba en la comida misteriosa, se infla, se pudre, los gavilanes lo dejan en los huesos, una hermana suya se los lleva y al tiempo resucita. Después convida a los indios a una bebezón, mientras los Antomiáes danzan con cuernos, pies torcidos y cola larga por donde echan fuego; dos de ellos se ponen a pelear y quien exclama Ave María Purísima, asustada, es una indiecita. Con esas palabras se apagan todas las luces, quedan todos encerrados con cinco puertas, y Antomiá queda pegado de una de ellas y se vuelve peña. Eso es lo que explica allí la blancura de la roca: no un reflejo, un cuerpo petrificado. No hay precipicio, ni niño suspendido, ni salida hacia Urrao, ni jaibanáes que aprendan nada por el camino.

No se funden. Y conviene ver qué hizo cada quien con las piezas sueltas. El episodio del tobo que mata al glotón es, en el artículo de 1929, un relato aparte y completo: el de Antomiá paima y la india jaibaná que lo envenena con caldo de pescado y raíz de moindú, y de cuyo vientre reventado salen el fuego, el humo y las piedras de los ríos. Severino lo soldó al cerro. Al revés, el sacar espinas chupando, que en 1929 lo aprenden los que huyen por el túnel, en Severino pertenece al origen del jaibanismo, donde una diabla se lo enseña a dos niños robados clavándoselas y sacándoselas.`,
    leccion:
      "Quien entra a interrumpir una fiesta ajena puede alterarla dos veces y quedarse atrapado en ella.",
    similitudes: `El molde de los dos niños robados reaparece en el mismo artículo de 1929, dos páginas más adelante y con desenlace invertido. En Origen de los jaibanáes, una diabla se roba dos indios, niño y niña, se los lleva a los montes y allí, vagando de monte en monte, les enseña a ser jaibanáes sometiéndolos a una vida muy dura. Severino recoge esa misma historia de boca de Donungubi Domicó, bautizado Severiano, y añade el detalle del método: la diabla clavaba una espina a uno de los niños y en seguida, chupando, se la sacaba. Es decir que el rapto que aquí termina en cautiverio sin rescate, allí es el origen de un saber; y la espina chupada, que aquí se aprende huyendo, allí se aprende en cautiverio.

El segundo paralelo es Bibidigomia, relato VIII de los que Rafael Bailarín, katío, le narró a Milcíades Chaves en 1945 y tradujo él mismo. También hay allí una morada de otros peligrosos, un gran árbol hueco con balcón donde viven los que roban gente, guardado por un tigre; también hay una niña cautiva que se llevan a casa. Pero los indios queman ajíes, barbascos y anamú en la raíz del árbol, los de adentro se emborrachan con el humo y van cayendo uno por uno. El asalto funciona: el cerro no.

El tercero es contemporáneo y de otro municipio. Javier Rosique y sus nueve coautores, cuatro de ellos emberá de Chigorodó, describen los drua wãndra, sitios sagrados en cabeceras de montaña habitados por tres pueblos de gente-espíritu, los oangaramia, los yhaberara y los chimorna, con quienes el jaibaná negocia en sueños bajo un principio de reciprocidad, mientras el temido Antumiá viene del mundo de abajo. Es etnografía de 2015 a 2019, en resguardos eyábida y chamí que no son los del expediente misionero, y no autoriza a proyectar hacia atrás. Sirve para otra cosa: para ver que un cerro habitado puede ser vecindario con el que se trata, y no sólo guarida de demonios.`,
    excerpt:
      "Un niño entra al Cerro Plateado de Musinga para buscar a su hermana e interrumpe una fiesta con una frase mariana.",
    seoTitle: "El Cerro Plateado de Musinga",
    seoDescription:
      "Lee la tradición histórica del Cerro Plateado de Musinga, su fiesta interior y la fuerte mediación cristiana del registro.",
    focusKeywords: [
      "Cerro Plateado",
      "Musinga",
      "mito Katío de Frontino",
      "tradición del cerro",
      "relatos de 1929",
    ],
    tags: ["Cerro Plateado", "diablo negro", "sobrenatural", "rescate"],
    latitude: 6.75611,
    longitude: -76.18528,
    researchNotes: `FUENTE PRINCIPAL: notas de 1929, pp. 100-101.
GEOGRAFÍA: Musinga, coordenada aproximada.
MEDIACIÓN: cristianización estructural explícita.
${archiveResearch}`,
  }),
  archiveRecord({
    slug: "tradiciones-relativas-a-la-conquista",
    sourceKeys: [
      "severino1924",
      "rochereau1929",
      "clacsoRegionalization",
      {
        key: "paezhevexicos2004",
        summary:
          "Es la fuente que permite distinguir de quién es esta memoria. Botero argumenta que asimilar embera y catíos es un error histórico: los \"catíos\" de las crónicas serían descendientes de la nación hevexico, y el propio nombre catío podría venir de carauta, como los emberá llaman a \"una nación sobresaliente por ser la dueña del oro\", asentada en Buriticá y Dabeiba. Eso cambia la lectura del primer fragmento: las cuatro casas adornadas con oro no son un reino katío perdido, sino el eco del motivo emberá de los dueños del oro, que en las crónicas españolas se convirtió en la fama aurífera de Buriticá y Dabeiba y movilizó las expediciones. Reconstruye además la secuencia documentada de resistencia: Sinago muerto, Yutengo y Arame que \"queman sus asientos y labranzas\" y huyen al \"partido de Carauta\".",
        limitation:
          "La identificación catío = hevexico = carauta es hipótesis abierta y discutida, no resultado establecido. Y nada en el artículo toca a Ambeu, a Corpus ni a Umucumia: esos nombres no aparecen en el archivo colonial que Botero maneja, y siguen sin verificación externa.",
      },
      "vargasemberas1991",
      {
        key: "eComplejos1988",
        summary:
          "Pone nombres y jerarquías a lo que el relato resume como \"un rey y una reina indígenas\". Castillo establece que las unidades sociopolíticas diferenciadas del occidente antioqueño en el siglo XVI eran Guacas, Nares, Catíos, Hevéjicos, Noriscos, Peques e Ituangos, con \"distintos niveles de desarrollo de sus estructuras sociopolíticas, desde un nivel tribal avanzado tal como aparece entre los Catíos, de cacicazgos en proceso de formación —Peques, Noriscos, Ituangos y Hevéjicos— hasta cacicazgos consolidados y en proceso de expansión como los Guacas\". El relato de reyes y reinas es, entonces, una traducción monárquica de organizaciones que no lo eran; y la confederación esporádica para enfrentar grupos foráneos que ella documenta sí tiene respaldo arqueológico.",
        limitation:
          "No se ocupa de narrativas orales ni de los emberá actuales, y advierte que la correlación entre complejos cerámicos y etnias de las crónicas arroja \"datos contradictorios\". Cubre el siglo XVI en el occidente antioqueño, no el Darién ni el bajo Atrato.",
      },
      "hernandezEstrategias2015",
      "restrepoSon2012",
    ],
    title: "Memorias Katío de la conquista",
    mito: `Hace mucho tiempo, allá muy lejos, en otra tierra, más allá del mar, vivían dos reyes blancos, rey y reina. De este lado del mar vivían también dos reyes indios, rey y reina. Estos tenían muchas riquezas, y entre ellas cuatro casas de oro, adornadas todas de oro.

Los reyes blancos lo supieron y arreglaron una expedición para arreglar amigablemente con los reyes indios la partición de esas riquezas. El rey indio se negó, y se entabló la lucha.

Los indios eran valientes, pero fueron vencidos por la superioridad de las armas extranjeras. Los soldados blancos le cortaron la cabeza al rey indio y tomaron cautiva a la reina, y luego se partieron: la mitad fue a dar cuenta al rey blanco y a presentarle la cabeza del rey indio y la viuda cautiva; la otra mitad se quedó con el propósito de apoderarse de los tesoros mientras los demás daban cuenta de la expedición.

El rey blanco, al oír las noticias de sus soldados y ver la cabeza del rey indio y a la reina cautiva, se indignó contra ellos, e hizo que la cautiva se sentara en su presencia, como para consolarla. Pero ella lloraba mucho. Entonces envió otra expedición con nuevas órdenes de traer riquezas. Cuando esa segunda expedición llegó, los soldados de la primera, los que se habían quedado, tenían ocultos todos los tesoros. Y aún permanecen ocultos.

En tiempo de la venida de los españoles había un jefe indio de extraordinario valor y destreza militar, llamado Ambeu. Este luchó valerosamente por salvar a su gente de los españoles, y aunque su gente fuese vencida, formaba tropas nuevas y hacía resistencia otra vez. Los españoles lo perseguían sin descanso. A fuerza de balas no habían podido matarlo, de modo que idearon otro medio: hicieron un hoyo profundo y lo cubrieron de ramas. En un combate él corrió por ahí, ignorando el peligro, y se fue a lo profundo. Los españoles se acercaron a tirarle flechas y piedras hasta que murió.

Corpus y Umucumia eran sus hijos y ayudantes, valerosos como él.`,
    historia: `Estas dos piezas están en el artículo de 1929 del Journal de la Société des Américanistes, bajo un encabezado común, Tradiciones relativas a la conquista, entre el detalle del gran jenené con las cuatro velas de metal y el Origen de los jaibanáes. Ocupan una página escasa y no hay más. Las notas fueron recogidas por las Hermanas misioneras de la Inmaculada Concepción y Santa Catalina de Sena, Henri Rochereau se limitó a remitirlas y Paul Rivet las publicó respetando la forma que les dieron sus autoras; ninguna de las dos piezas acredita narrador, ni lugar, ni fecha de recolección. Del archivo consultable no puede copiarse una sola palabra literal, porque el reconocimiento óptico del tomo se hizo con modelo de francés sobre un texto español y no dejó intacta ninguna vocal acentuada.

A diferencia de casi todo lo demás de este corpus, aquí no hay pasaje paralelo. En el Libro Primero de Severino de Santa Teresa no aparecen ni Ambeu, ni Corpus, ni Umucumia, ni las cuatro casas de oro: la guerra que organiza su libro es la de catíos contra cunas, y los españoles no figuran en ella como enemigos. Este mito descansa, por tanto, sobre un solo testimonio.

El primer fragmento cambia de sentido en cuanto se lo devuelve a su vecindario documental. Patricia Vargas, cruzando crónicas, documentos de encomienda e historia oral del Atrato y el Baudó, establece que los que son conocidos en las crónicas como catíos, en la tradición oral emberá se identifican como los carautas, los dueños del oro, y que la palabra carauta aparece en esas tradiciones como nombre genérico de una nación sobresaliente por ser dueña del oro, asentada en Guaca, Nore y Buriticá. Sofía Botero propone en la misma dirección que catío podría ser hispanización de carauta, y recuerda que Buriticá y Dabeiba fueron sitios legendarios desde la conquista por su riqueza aurífera. Las cuatro casas de oro no son entonces un reino katío perdido: son el motivo emberá de los dueños del oro, el mismo que en las crónicas españolas se volvió fama aurífera y movilizó expediciones. El nombre sigue en el mapa: Carauta es hoy corregimiento, río y cordillera del municipio de Frontino, según documenta Carlo Emilio Piazzini.

Los reyes también son una traducción. Neyla Castillo establece que las unidades sociopolíticas diferenciadas del occidente antioqueño en el siglo XVI eran Guacas, Nares, Catíos, Hevéjicos, Noriscos, Peques e Ituangos, con niveles que iban del tribal avanzado, como entre los catíos, a cacicazgos en formación y a cacicazgos consolidados como el de los Guacas. Hablar de rey y reina indios es verter en molde monárquico organizaciones que no lo eran, aunque la confederación ocasional frente a gente foránea que el relato supone sí tenga respaldo.

Lo que queda sin verificación externa son los nombres del segundo fragmento. Ambeu, Corpus y Umucumia no aparecen en el archivo colonial que manejan Botero, Vargas o Castillo. El despojo que sí quedó documentado es otro y es posterior: Elizabeth Karina Salgado sigue en el Archivo Histórico de Antioquia la colonización del occidente entre 1880 y 1920 sobre el resguardo de San Carlos de Cañasgordas, con memoriales, pleitos y quejas firmadas por indígenas. Esa conquista tiene nombres, fechas y folios. La del relato no.`,
    versiones: `Hay un solo texto y, dentro de él, dos fragmentos que llegaron juntos bajo un mismo encabezado sin que nada los ate. No comparten personaje, ni lugar, ni tiempo declarado: el primero no nombra españoles y transcurre en una geografía de reyes, el segundo los nombra y sitúa la acción en tiempo de su venida. No deben leerse como capítulos de una misma crónica ni fundirse en un héroe único.

Del primer fragmento se pierde casi siempre la mitad final, que es la que le da filo. No termina con la indignación del rey blanco. Termina con la segunda expedición llegando a buscar riquezas que los soldados de la primera ya habían escondido, y con la frase de que aún permanecen ocultos. El desenlace no es un rey justo corrigiendo a sus soldados, sino un tesoro robado dos veces y nunca devuelto.

Del segundo se pierde el detalle que explica la trampa. A Ambeu no lo matan en combate porque a fuerza de balas no habían podido; el hoyo cubierto de ramas es el recurso al que obliga esa invulnerabilidad, y quienes lo rematan en el fondo lo hacen con flechas y piedras, no con armas de fuego.

Fuera de este artículo hay memorias emparentadas que no son variantes de estas. Vargas recoge en el Atrato una sucesión de tres edades, burumias, carautas y emberas, en la que los carautas son los dueños del oro; y cita una versión donde esos carautas, muy ricos y trabajadores de oro, fueron castigados y convertidos en animales por sus uniones ilícitas. Allí la memoria de los dueños del oro termina en metamorfosis y no en conquista. Es otra manera de contar el mismo vecindario, y conviene no confundirla con esta.`,
    leccion:
      "Una memoria rota en dos pedazos alcanza para recordar quién resistió aunque no explique la derrota.",
    similitudes: `El primer paralelo es del mismo corpus katío y tiene narrador. En Bibidigomia, relato que Rafael Bailarín, katío, le contó a Milcíades Chaves en 1945 y tradujo él mismo, los indios pierden gente que sale de cacería y no vuelve, descubren que se la lleva un pueblo que vive en un gran árbol hueco con balcón, guardado por un tigre, y lo aniquilan quemando ajíes, barbascos y anamú en la raíz del árbol hasta que los de arriba caen emborrachados por el humo. La misma estructura de invasión y respuesta, con dos diferencias decisivas: el enemigo es un pueblo vecino con nombre propio, no un imperio de ultramar, y los invadidos ganan.

El segundo es regional y está documentado. Mauricio Pardo muestra que en el Atrato, el Sinú y el Baudó se han registrado relatos de guerra emberá contra los cunas, a quienes llaman Jurá, y también contra burumiás, bibidícomias y carautas, cada uno con gentilicio propio; el hecho de que los narradores reconozcan además a los cunas contemporáneos descarta que Jurá sea un simple sinónimo de enemigo. La conquista española, en ese conjunto, es una guerra más dentro de un repertorio bélico largo, y no la única ni la fundadora.

El tercero obliga a mirar desde el otro lado. Vargas sostiene que emberás y cunas, habitantes de la cuenca del Atrato al momento de la invasión española, narran en sus tradiciones respectivas formas complementarias de metaforizar un mismo proceso de alianza y guerra vivido por más de cien años, y apoya la lectura en testimonios de encomienda como el de Pedro Criollo, que declaró que su madre no era natural de esa gobernación, sino de la provincia de los heras, y que fue hurtada y cautivada estando entre sus parientes. El rapto de la reina cautiva del relato tiene, en ese archivo, un equivalente con nombre, con fecha y con folio, aunque no sea el mismo hecho.`,
    excerpt:
      "Dos fragmentos recuerdan casas de oro, una reina cautiva y la resistencia de Ambeu frente a la conquista.",
    seoTitle: "Memorias Katío de la conquista",
    seoDescription:
      "Lee dos fragmentos históricos sobre reyes, casas de oro, Ambeu, Corpus y Umucumia, presentados con sus límites documentales.",
    focusKeywords: [
      "memorias Katío de la conquista",
      "Ambeu",
      "Corpus y Umucumia",
      "casas de oro",
      "relatos de 1929",
    ],
    tags: ["Ambeu", "conquista", "resistencia", "oro"],
    imagePromptHorizontal:
      "Ilustración panorámica full paper cut y paper quilling, no fotografía: composición en dos escenas conectadas por selva y río, a la izquierda cuatro casas indígenas luminosas observadas desde muy lejos por una expedición marítima, a la derecha Ambeu evita una emboscada junto a un foso; énfasis en territorio y resistencia, sin guerrero con regalia dorada genérica, sin tocados mesoamericanos, sin violencia gráfica, sin texto, sin maqueta física, diorama ni 3D.",
    imagePromptVertical:
      "Ilustración vertical full paper cut y paper quilling, no fotografía: Ambeu en sendero de selva frente a un foso oculto, con sombras lejanas de invasores y, arriba, cuatro casas doradas como memoria y no como tesoro espectacular; dignidad y tensión, sin regalia panindígena, conquistador heroico, violencia gráfica o texto, sin maqueta física, diorama ni 3D.",
    researchNotes: `FUENTE: notas de 1929, p. 91.
TRATAMIENTO: dos fragmentos de memoria, no crónica literal.
REEMPLAZO VISUAL: par completo; retirar estereotipos de regalia dorada.
${archiveResearch}`,
  }),
];

export const katioMythsBySlug = Object.fromEntries(
  records.map((record) => [record.slug, record]),
);

if (Object.keys(katioMythsBySlug).length !== records.length) {
  throw new Error("Hay expedientes Katío duplicados.");
}

export default records;
