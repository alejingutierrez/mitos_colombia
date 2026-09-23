function myth({ title, summary, tags, mito, ...definition }) {
  const seoTitle = `${title} | Desana`;
  const focusKeywords = [title, "relatos Desana", ...tags.slice(0, 3)];
  return {
    ...definition,
    title,
    summary,
    tags,
    mito,
    excerpt: summary,
    seoTitle,
    seoDescription: summary,
    focusKeywords,
  };
}

export const desanaDefinitions = [
  myth({
    slug: "creacion-desana",
    sourceKeys: [
      "lanaLana1995",
      "diakuruKisibi1996",
      "galvao2004",
      "desanaTexts1989",
      "amazonianCosmos1971",
      "ribeiro1994",
      "bruzzi1994",
      "andrellohumanidade2022",
      "angeloLivros2020",
      "freireTradicao1992",
      {
        key: "fernandesBueri2006",
        summary:
          "Abre el calendario desana con la creciente yahi puiro (de la garza), que recuerda la llegada de la Pamurĩ Yukusiru, la Canoa de Transformación, a Siruriduri, la cachoeira de Ipanoré; cuenta que en esa época encostan en Ipanoré mandi, aracu (boreka) y surubí como símbolo de la llegada de la Gente de Transformación, y que hacia 1940 los pueblos del Tiquié aún festejaban juntos ese aniversario. Trata también la jerarquía de clanes encabezada por Boreka.",
        limitation:
          "Es del lado brasileño y es la voz del clan Wari Dihputiro Põrã de Cucura, no la del Kẽhíripõrã que narra la ficha. No es otra versión del mito sino el libro de enseñanzas —calendario, dabucuris, historia de los clanes— que remite a su volumen de 1996.",
      },
      {
        key: "buchilletMaladie1983",
        summary:
          "Resume el origen según los desana del Tiquié: Yeba biro, la Abuela, pide al tercer Trueno las joyas ceremoniales que serán gente; el Trueno se vuelve Pabidi-gasiru, la canoa-de-transformación en forma de anaconda, que sube desde el Lago de Leche con el Creador de la Tierra y Boreka por el Amazonas, el Negro, el Uaupés y el Tiquié, parando en casas donde los ancestros bailan y crecen 'como el niño de año en año', hasta salir en los rápidos de Siruri duri, Ipanoré, donde se separan blancos e indios. Reproduce dibujos de Feliciano Lana.",
        limitation:
          "Es del lado brasileño: campo de doce meses (1980-1981) con dos clanes desana del Tiquié y del igarapé Umari, el de Tolaman Kenhíri y el Kisibi; los mitos transcritos en el anexo son del clan Kisibi, no del Kẽhíripõrã. Texto completo en el repositorio del IRD (ficha: https://www.documentation.ird.fr/hor/fdi:15520); el escaneo tiene errores de OCR. Es una tesis sobre enfermedad y terapéutica, no una colección de mitos.",
      },
      "kehiriNosso1993",
      "hughJonesDesana",
    ],
    title: "Yebá Buró y la Canoa de Transformación",
    summary:
      "Yebá Buró crea el universo, el Sol y la Canoa de Transformación que conduce a la futura humanidad por los ríos.",
    tags: ["Yebá Buró", "Canoa de Transformación", "creación", "Umukomasã"],
    mito: `Antes de que hubiera nada, en plena oscuridad, apareció por sí sola una mujer sostenida sobre un banco de cuarzo blanco. Junto al banco había otras cinco cosas misteriosas: la horquilla para sostener el cigarro, la cuia de ipadu y su soporte, la cuia de harina de tapioca y el suyo. Sobre esas seis cosas se transformó a sí misma, y por eso la llaman la No Creada. Se llamaba Yebá Burõ, la Abuela del Mundo.

Mascó ipadu, fumó y se puso a pensar cómo debía ser el mundo. Del pensamiento se levantó algo parecido a un globo, coronado por una torre, que envolvió la oscuridad entera. Ese globo era el mundo y ella lo llamó Maloca del Universo. Del ipadu que se sacó de la boca hizo cinco Truenos, los Hombres de Cuarzo Blanco, y a cada uno le dio un cuarto que después se volvió maloca: la Maloca de Leche al sur, la Maloca de la Cachoeira de la Corteza al este, la Maloca de Arriba en lo alto, una al oeste sobre el Apaporis y la Maloca de la Cabecera al norte. En la punta de la torre quedó un sexto cuarto con un murciélago enorme parecido a un gavilán.

Los Truenos no hicieron la luz ni la humanidad; se quedaron cada uno en su maloca. Entonces la Abuela pensó otro ser, y del humo se formó Yebá Gõãmü, que no tenía cuerpo y no se podía ver ni tocar. Él levantó su bastón ceremonial, el que llaman hueso de pajé, hasta la cima de la torre. Ella adornó la punta con plumas atadas y con pendientes, y el adorno quedó brillando en blanco, azul, verde y amarillo hasta tomar rostro humano. Era Abe, el Sol.

Yebá Gõãmü fue creando esteras en el espacio. La Abuela sacó del seno izquierdo semillas de tabaco y las esparció encima, y después leche para abonarlas: así se formó la tierra por capas, como el nido de la avispa. Subió hasta la Maloca de Arriba, donde el tercer Trueno guardaba las riquezas. El Trueno se apretó la barriga y las vomitó sobre una estera: coronas de plumas, collares de cuarzo, collares de dientes de jaguar, placas pectorales. Ahí mismo las riquezas se volvieron gente, dieron una vuelta por la maloca y volvieron a ser adornos. Esa era la humanidad futura.

Tragaron una hoja de ipadu y, al vomitar en el río, salieron dos mujeres, y Umukomahsü Boreka las sacó del agua de la mano. Después el tercer Trueno bajó al Lago de Leche convertido en una serpiente inmensa cuya cabeza parecía la proa de una lancha: Pamürïgahsiru, la Canoa de la Futura Humanidad. Yebá Gõãmü viajó de pie en la proa con su bastón y Boreka en el centro.

La canoa avanzó por debajo del agua, como un submarino, y fue tocando maloca por maloca. En cada una repetían la ceremonia y los que venían dentro iban creciendo, como crece un niño año por año. Subieron por el Amazonas, el río Negro, el Uaupés y el Tiquié. En la trigésima, la Maloca de los Cantos, nació Gahpimahsü, el Hijo del Caapi; con las visiones del caapi nadie volvió a entenderse con nadie, y ahí cada quien empezó a hablar su propia lengua.

En la cachoeira de Ipanoré pisaron tierra por primera vez. Salieron por sí mismos por unos huecos que todavía se ven en la laja. Primero salió Doethiro, llamado Wauro, jefe de los Tukano; segundo, Umukomahsü Boreka, jefe de los Desana; después el Pira-tapuyo, el Siriano, el Baniwa con su arco, el Makú, el Blanco con la escopeta y el Padre con un libro en la mano. La canoa se quedó en el fondo del agua y no volvió a salir.`,
    historia: `Esta versión la dictó Umusĩ Pãrõkumu, Firmiano Arantes Lana, nacido en 1927 a orillas del río Tiquié, hijo de tuxaua y él mismo tuxaua, baya —maestro de ceremonia— y kumu. Nunca quiso aprender portugués y exigió que sus siete hijos hablaran desana. Murió en 1990. Quien la escribió fue su hijo mayor, Tõrãmũ Kẽhíri, Luiz Gomes Lana, nacido en 1947. Empezó en 1968 y sin grabadora: «Él dictaba y yo escribía; no tenía grabadora, sólo tenía un cuaderno que yo mismo compré. Lápiz, cuaderno, era todo mío». Lo contó en 1978, en el poblado de São João Batista, a la antropóloga Berta Ribeiro. El primer cuaderno lleno, que iba de la creación del mundo hasta los Diroá, se lo mandó al misionero salesiano Casimiro Beksta para que las hojas no se perdieran ni se quemaran.

El libro salió en 1980 y se reeditó, revisado y ampliado, en 1995 por UNIRT y FOIRN; abre la colección Narradores Indígenas do Rio Negro, hecha sobre todo para lectores indígenas de la región. Dominique Buchillet revisó el manuscrito con la orientación del propio Luiz Lana, y los dibujos son de él y de su primo Feliciano. Padre e hijo son desana del clan Kẽhíripõrã y viven en el Tiquié, en Brasil: la ortografía de estos nombres viene de allá, y esa frontera cuenta.

Del lado colombiano, el material más citado no viene de un narrador nombrado. «Amazonian Cosmos» se armó en una oficina de Bogotá, en sesiones diarias de una a tres horas durante seis meses, con un solo interlocutor: Antonio Guzmán, desana del sib semé-peyáru-porá, del Macú-paraná, afluente de la margen izquierda del Papurí, cerca de la frontera. Reichel-Dolmatoff lo llama informante y después asistente de investigación en la Universidad de los Andes. No lo acreditó como coautor en ninguna edición.`,
    versiones: `El libro Kẽhíripõrã no es el canon del pueblo. Hay otras dos colecciones desana publicadas por narradores de otros clanes, y no cuentan esto igual.

Diakuru, Américo Castro Fernandes, kumu y tuxaua de Cucura, en el igarapé del mismo nombre, dictó a su hijo Kisibi, Dorvalino Moura Fernandes, la versión de los Wari Dihputiro Põrã, publicada en 1996. Tardaron cinco años: cada cuaderno se retraducía al desana para que el padre corrigiera, y los que no servían se botaban. Allí el demiurgo se llama Deyubari Gõãmü, y la Maloca de Leche del principio se identifica con el Pan de Azúcar de Río de Janeiro.

Tõrãmũ Bayaru, Wenceslau Sampaio Galvão, nacido en 1908, kumu y baya como su padre y su abuelo, grabó en desana la versión de los Guahari Diputiro Porã entre 1986 y 1997; su hijo mayor Guahari Ye Ni, Raimundo Castro Galvão, la revisó después de la muerte de su padre en 2001, y salió en 2004. Allí la transformación la conducen dos figuras, Kisibi y Deyubari Gõãmü; hubo cuatro intentos de poblar el mundo y cuatro viajes sucesivos, no uno; y algunos sitúan el Lago de Leche en la bahía de Guanabara.

Los tres libros comparten la canoa que sube el río y las casas donde la gente se va haciendo gente. Difieren en los nombres de quienes la conducen, en el número de viajes y en dónde queda cada lugar. La primera edición de la versión de Cucura lo dice de frente: cada etnia y hasta cada grupo de descendencia tiene su propia visión, y las marcas de identidad están justamente en esos detalles.`,
    similitudes: `El hueco de Ipanoré no es exclusivo de los desana. Alcionilio Brüzzi, misionero salesiano que trabajó en el Uaupés, recogió que en la cachoeira de Ipanoré aparecieron tukano, desana y pira-tapuya, y también recogió versiones en las que la creación ocurrió en varios lugares y cada pueblo tiene origen distinto. Son pueblos vecinos del alto río Negro, no la misma gente.

La canoa-anaconda que sube el río repartiendo antepasados circula entre los pueblos tukano orientales del Uaupés y sus afluentes, que se casan entre sí y hablan lenguas distintas dentro de una misma casa. El motivo viaja porque la región es un sistema de intercambio matrimonial, no porque todos cuenten lo mismo.

Lo propio de esta versión está en la combinación: el banco de cuarzo blanco con las otras cinco cosas misteriosas, los cinco Truenos repartidos en cinco direcciones con el murciélago en la torre, el bastón hueso de pajé, la semilla de tabaco y la leche del seno izquierdo, y el orden exacto de salida en Ipanoré con Boreka en segundo lugar, detrás del jefe de los Tukano.

Reichel-Dolmatoff registró del lado colombiano que hasta las variedades de yuca brava llevan nombre de sib: boréka dehke se relaciona por mito con el sib Boreka, el mismo nombre que encabeza aquí la salida de los desana.`,
    leccion:
      "La gente no aparece hecha: se vuelve gente atravesando lugares que la van diferenciando.",
    sceneHorizontal:
      "Yebá Buró contempla una canoa-anaconda luminosa que recorre bajo el agua varias casas de transformación",
    sceneVertical:
      "la futura humanidad emerge por una abertura de piedra al amanecer mientras la canoa-serpiente queda en el río",
    researchNotes:
      "CORRECCIÓN INTEGRAL: conserva el slug histórico y reemplaza la expansión generada por la secuencia publicada de Yebá Buró y Pamürïgahsiru.",
  }),
  myth({
    slug: "el-origen-de-la-noche-desana",
    sourceKeys: [
      "lanaLana1995",
      "diakuruKisibi1996",
      "galvao2004",
      "desanaTexts1989",
      "bruzzi1994",
      "amazonianCosmos1971",
      "beksta1988",
      "fernandesBueri20062",
      "hughJonesorigem2015",
      "buchilletMaladie19832",
    ],
    title: "Ñami y el origen de la noche",
    summary:
      "Los Desana viajan hasta Ñami para obtener la noche, pero abren antes de tiempo el recipiente que guardaba la oscuridad.",
    tags: ["Ñami", "noche", "Abe", "sabiduría"],
    mito: `Al principio sólo había día. La gente se cansó de vivir siempre con luz y se puso a mirar hacia el norte, donde de rato en rato se levantaba una nube negra que después desaparecía. Allá vivía Ñami, el Dueño de la Noche. Los Umukomahsã le pidieron a Yebá Gõãmü que fuera con ellos a hacer el trato.

Llegaron a una casa que parecía vacía. Saludaron tres veces antes de que contestara una vieja detrás del cuarto cercado con esteras. El viejo Ñami seguía roncando; ella calentó un pedazo de olla en el fuego y se lo puso en el pecho para despertarlo. Salió un viejo feísimo, que dijo que iba a bañarse. Algunos lo siguieron a espiar: en la orilla se agarró el pelo, se subió la piel y por dentro estaba joven. Se había vestido de viejo para dormir.

Volvió del baño hecho un muchacho. «Te daré la noche, mi nieto», le dijo a Yebá Gõãmü, «quédate aquí mirando todas las ceremonias que voy a hacer». Se metió al cuarto y se oyó un peso enorme arrastrándose por el suelo: era la maleta de la noche. La azotó con el látigo con que se azota a los iniciados y cantó «titi titi». Mascó ipadu y fumó cigarro de sueño, y el sueño se les fue metiendo en los ojos a los visitantes.

Fue empujando la maleta con la punta del pie. En la puerta del cuarto golpeó dos veces y cantó dos veces: eran las ocho. Junto al horno golpeó y cantó tres veces: era medianoche. En el espacio de baile cantó «titi titi» y después «sirá sirá»: eran las dos. Cerca de la puerta cantó las dos frases seguidas y se retiró. Cuando los otros despertaron eran las cinco y media y estaba amaneciendo. Ninguno de los que se durmieron supo nada. El único que vio todo, del principio al fin, fue el hermano menor de Yebá Gõãmü, al que el sueño no atacó.

Ñami les entregó la maleta con una orden: llevarla hasta la casa, mandar preparar caxiri y abrirla el día de baile, no antes. Pero pesaba demasiado. A mitad de camino se pusieron a hablar y la abrieron para ver qué había dentro. Salió volando el japú de la noche y detrás los grillos de la noche, y la maleta quedó vacía. Oscureció de golpe y cayó un aguacero como nunca; no tenían dónde guarecerse. El japú llegó hasta la casa de Ñami a contarle que los Umukomahsã estaban pasando mal, y el dueño de la noche se entristeció.

Quisieron hacer lo que Ñami había hecho y no supieron. Inventaron palabras —«que salga el día, que salga»— y no sirvieron de nada. Yebá Gõãmü untó un árbol con el ipadu que tenía en la boca, una vez para arriba y otra para abajo, y el ipadu se volvió un hongo grande de los que se encuentran en el monte. Entonces el hermano menor les habló duro: «¿Por qué no saben? ¿Parece que ustedes no vieron nada?». Preparó el azote, hizo las ceremonias en el mismo orden y cantó como había cantado el dueño, hasta que amaneció.

Siguieron viaje y dejaron la maleta botada. Quedó en el río Caiari, que es el Uaupés, y todavía se ve allá un cajón de piedra abierto. La noche se quedó para siempre.`,
    historia: `El capítulo se titula «Mito de origem da noite» y termina diciendo de quién es: «es un mito de los Desana del grupo Kẽhíripõrã». No es una fórmula de cortesía. Lo cierra una «Explicación» que dice para qué se contaba: los antiguos se lo contaban a hijos y nietos para que no consideraran inferiores a los demás y para que respetaran las órdenes de los kumua. «El que los libró de la oscuridad fue él, porque escuchó las palabras de Ñami. Fue el más sabio de todos. Por eso los antiguos recomendaban siempre no insistir en la inferioridad de nadie, porque la sabiduría le llega a cualquiera.»

Quien lo narró fue Umusĩ Pãrõkumu, Firmiano Arantes Lana, kumu, baya y tuxaua del clan Kẽhíripõrã, nacido en 1927 y muerto en 1990. Quien lo escribió, en cuadernos de escuela y sin grabadora, fue su hijo Tõrãmũ Kẽhíri, Luiz Gomes Lana, nacido en 1947. Viven en São João Batista, a la orilla del Tiquié, en el Amazonas brasileño; los desana de Brasil eran entonces unos mil, repartidos en medio centenar de comunidades del Tiquié y del Papurí. El Papurí es el río que baja hacia Colombia y por ahí pasa el parentesco, pero este texto es de allá.

La primera edición es de 1980, con introducción y notas de la antropóloga Berta Ribeiro. La segunda, revisada y ampliada, la publicaron UNIRT y FOIRN en 1995 con dos mil ejemplares. Luiz Lana había dicho en 1978 que, terminados los mitos, quería escribir también los rezos de los viejos, «porque ahora sólo hay kumu, ya no hay pajé».`,
    versiones: `La versión de los Wari Dihputiro Põrã, narrada por Diakuru y escrita por su hijo Kisibi en Cucura, cambia casi todo lo que importa. Allí el dueño se llama Ñamiri, «Noches», y no vive al norte sino al poniente, en lo que ellos llaman la Serra de Bogotá, en Colombia, su Maloca de las Noches. Los que van no son un demiurgo y sus acompañantes sino cinco hermanos, y en la tercera visita le entregan a su propia hermana en matrimonio: la noche se paga con una alianza, no se pide de favor.

La explicación técnica también es otra. Allí la tierra es una cuia asentada en un soporte, amarrada con un cordón de mostacillas cerrado con un nudo; mientras el nudo esté hecho la tierra no rota y no hay día ni noche. Lo que Ñamiri enseña es la ceremonia para deshacer el nudo, y los hermanos se duermen antes de aprenderla. La maleta pesa porque él la llenó con las piedras del mundo entero mediante un rezo. Cuando la abren en el camino salen japús, guacamayas, loros, micos nocturnos e insectos que cantan de noche. Mientras duermen bajo la lluvia, las hormigas les cortan el pelo, y con eso explican por qué unos pueblos de la región lo tienen ensortijado y otros liso.

Los Guahari Diputiro Porã, del medio Papurí, tienen su propio capítulo sobre los desana que fueron a buscar la maleta de la noche.

En las tres versiones se repite una sola cosa: el que aprendió fue el menor.`,
    similitudes: `Brüzzi recogió en el Uaupés una versión mucho más corta del mismo motivo: unos hombres trajeron del Uaupés una caja de insectos negros pequeños hasta Bela Vista y después pasaron al Içana, donde la abandonaron; al abrirla soltaron unos cuantos y empezó a oscurecer, y si los hubieran soltado todos sería noche para siempre. Es material de vecinos del alto río Negro, no desana, y sirve para ver qué sobrevive cuando el relato se resume: la caja, la fuga y la medida.

La caja que no se debe abrir antes de tiempo aparece en muchas partes. Lo que no aparece en muchas partes es el detalle que aquí hace la historia: la noche no es una cosa que se suelta, sino una ceremonia que se ejecuta por horas, con golpes y cantos contados y con la maleta empujada de un punto a otro de la casa. El objeto se puede llevar; el rito no.

El anfitrión que se quita la piel de viejo y aparece joven, y el hermano menor subestimado que resulta ser el que sabe, circulan también por el noroeste amazónico y en las tres colecciones desana publicadas. Aquí quedan amarrados a un lugar concreto: el cajón de piedra abierto que se muestra en el Uaupés.`,
    leccion:
      "Lo que se recibe sin haber aprendido a manejarlo se derrama antes de llegar a casa.",
    sceneHorizontal:
      "viajeros cargan el recipiente de Ñami mientras aves nocturnas y grillos se escapan sobre el río",
    sceneVertical:
      "el hermano menor permanece despierto dentro de la oscuridad y reconoce una línea de amanecer",
    researchNotes:
      "ADICIÓN DOCUMENTADA: capítulo «A origem da noite» de la obra Desana-Kêhíripõrã.",
  }),
  myth({
    slug: "guelamun-ye-el-nieto-del-trueno",
    sourceKeys: [
      "lanaLana1995",
      "galvao2004",
      "diakuruKisibi1996",
      "amazonianCosmos1971",
      "desanaTexts1989",
      "geografiaChamanistica",
      "ribeiro1994",
      "kramerCosmologia1982",
      {
        key: "fernandesBueri20062",
        summary:
          "Cuenta que Mirupu apareció entre las frutas de un dabucuri en la maloca del igarapé Macucu, afluente del Papurí, y que por eso se le tiene por Miriá Porã Masú, dueño de las frutas del monte; explica que todos los clanes desana dan el nombre de Mirupu al segundo hijo. En el capítulo de la iniciación anota que no se podía comer nada caliente durante el ayuno porque Gãmoyeri Wãhtĩ mató a los muchachos que comieron uacú asado, y remite a «A vingança de Mirupu ou Miñapõrã mahsü» del libro de 1996 (pp. 147-150).",
        limitation:
          "Es del lado brasileño y del clan Wari/Wahari Diputiro Porã: comenta el episodio y la regla de iniciación que funda, no lo vuelve a narrar, y usa los nombres de ese clan (Mirupu, Gãmoyeri Wãhtĩ), no Guramüye. PDF completo en la página del ISA.",
      },
      "barrosKapiwaya2012",
      {
        key: "andrellohumanidade2022",
        summary:
          "Compara las narraciones tukano, desana y baniwa sobre Jurupari y la iniciación de la primera generación de muchachos: en unas versiones los rapazes desobedecen y son devorados por Jurupari, al que los padres vengan quemándolo vivo en una gran hoguera, y de sus cenizas nacen las paxiúbas de las flautas; señala que hay narraciones desana que combinan este episodio con el de las paxiúbas que irrumpen desde el mundo de abajo. Anota que en los relatos tukano Jurupari nace de la segunda preñez primordial, por medio del ipadu, y cita la versión desana de Diakuru y Kisibi (1996) en que el tronco del niño sale disparado al cielo y es el Jurupari que luego vendrá a iniciar a los hijos de la humanidad; sitúa en el igarapé Macucu, afluente del Papurí, el centro del universo marcado por las primeras paxiúbas.",
        limitation:
          "Es un ensayo comparativo sobre género y parentesco en todo el noroeste amazónico (tukano, desana, baniwa), del lado brasileño; no narra la versión Kẽhíripõrã de la ficha ni nombra a Guramüye, y usa el nombre Jurupari que la ficha evita a propósito.",
      },
      "barrosResena2015",
    ],
    title: "Guramüye y el primer cataclismo",
    summary:
      "Guramüye vuelve para una iniciación, retiene a quienes rompen el ayuno y su muerte desata el primer gran incendio.",
    tags: ["Guramüye", "cataclismo", "fuego", "paxiúba"],
    mito: `Los primeros hombres querían levantar las Malocas de las Flautas Sagradas y no sabían cómo hacerlo. Rezaron el cigarro y el ipadu y se los dieron a las dos primeras mujeres, con el poder de tener hijos sin varón. La que fumó quedó preñada del Hijo del Caapi; la que mascó ipadu, de Guramüye. Las primeras mujeres no tenían todavía por dónde parir, y fueron los hombres los que abrieron la puerta del parto para que el niño saliera. Desde entonces las mujeres la tienen.

La madre no alcanzó a verlo. Lo metieron en una cuia tapada y se lo llevaron a la Maloca del Universo. A mitad de camino destaparon para mirarlo: era un niño hermosísimo y su llanto era fuerte como el trueno. Taparon rápido, pero la madre lo oyó y reclamó. Le dijeron que un día volvería.

Volvió el día del Iniciado, que también llaman el Día del Azote, cuando los muchachos llegan a los doce, trece o catorce años. Bajó de madrugada, todavía oscuro, y empezó los ritos. Zumbaba solo: las manos, los pies, el cuerpo entero le zumbaban las músicas de las flautas. Las mujeres esperaron afuera todo el día. Al anochecer las mandó entrar, sacó su sonido fuera de la maloca y bailó; así lo vio su madre por primera vez, ya hecho hombre.

Se quedó cuidando a los iniciados. El ayuno era durísimo: sólo hormigas maniuara, beiju de tapioca, harina de tapioca y espuma de manicuera, y nada asado. Tres grupos aguantaron. El cuarto no. Un día los llevó al monte a recoger frutas de uacú para un dabucuri; él se subió al árbol a tumbarlas y ellos, muertos de hambre, prendieron candela abajo y las pusieron a asar. El humo le llegó a la nariz.

Se vino sobre ellos gritando que iban a pasar peor que él. Llegaron la lluvia y el trueno y se hizo de noche. Entonces se abrió el ano como un hueco de palo y los llamó: entren aquí para no mojarse tanto. Entraron todos menos uno. Los apretó adentro y subió a la maloca de su abuelo sin avisarle a nadie.

El que no entró contó lo que había pasado. Los padres lo llamaron y él no venía. Lo engañaron ofreciéndole caxiri: de caña, ya lo había probado; simple, también; de fruta de pan, también; de aguacate, ese no. Vino por el aguacate. Lo emborracharon y le preguntaron por qué se había comido a sus hijos. Contestó que la culpa era de ellos, que no habían obedecido sus leyes, y agregó: si me van a matar por sus hijos, háganlo, pero antes busquen estas cuatro leñas. Y las nombró una por una.

Buscaron las leñas y lo echaron a la hoguera con todos sus adornos. En realidad él no se quemó: subió a la Maloca del Universo, y lo que ardió fueron los adornos. Pero el fuego pasó al pasto, después a la tierra, después a los árboles y por fin al aire mismo. El mundo entero se quemó y la humanidad desapareció. La tierra tardó años en enfriarse; cuando se enfrió, la humanidad volvió a llenarla de repente. Fue el primero de los tres cataclismos.

Donde lo quemaron brotó una palma de paxiúba. Era su hueso. Salió desde la capa de abajo hasta la superficie y de ahí se repartió a toda la humanidad. Los primeros hombres tumbaron esa palma, y todavía se ve la marca en las piedras cerca de algunas cachoeiras. Antes de arder había dicho que se quedaría dentro de las flautas.`,
    historia: `La dirección «guelamun-ye» viene del corpus inicial del sitio y es una transcripción fallida; el libro escribe Guramüye y también lo llama Miñapõrãmahsü, «hombre de las flautas sagradas». Se conserva la dirección para no romper enlaces.

El capítulo es el primero de los tres cataclismos, y en medio del relato el narrador se detiene a explicar por qué hay un hueco. Seis de las casas del viaje de la humanidad se llaman igual, Malocas de las Flautas Sagradas, y no se sabe en cuál de las seis nació Guramüye: «mi viejo padre, que está contando, dice que su padre no le dijo en qué maloca nació Guramüye». Y da la razón: cuando los misioneros llegaron a la región destruyeron todas las malocas y decían que eran «cosas del diablo, de Satanás», y por eso el abuelo no quiso enseñarle todo a su hijo y muchas cosas desaparecieron. La nota del libro precisa que eran los salesianos.

Ese pasaje identifica tres generaciones con nombre. El abuelo, gran sabio, cantor y jefe de maloca, que dejó de enseñar. Umusĩ Pãrõkumu, Firmiano Arantes Lana, nacido en 1927 y muerto en 1990, que narró lo que alcanzó a recibir. Y Tõrãmũ Kẽhíri, Luiz Gomes Lana, nacido en 1947, que lo escribió a mano en cuadernos de escuela desde 1968 para que no se perdiera. El libro salió en 1980 y se reeditó en 1995 en UNIRT y FOIRN.

El personaje que la ficha heredada llamaba «nieto del trueno» es, en el texto, un hijo nacido de una de las dos primeras mujeres sin relación con varón, y criado en la maloca del Abuelo del Mundo.`,
    versiones: `Los otros dos clanes cuentan el mismo nudo con otro protagonista y otro desenlace.

Entre los Wari Dihputiro Põrã se llama primero Mirupu. Su tronco sale disparado por el aire llevándose el ritmo de los instrumentos; lo buscan por todo el universo y lo encuentran cerca del Trueno, y sólo después de calmarlo consiguen que se encargue de los jóvenes. Ahí toma el nombre de Miñapõrã mahsü. Cuando los muchachos comen uacú asado a escondidas y él se los traga, cambia otra vez de nombre: pasa a ser Gãmõyeri wãhtĩ. Y el que se salva no es un anónimo: es el periquito marianita Gáhépáyé, que se queda recostado por fuera del palo hueco y al que el devorador se lleva vivo a su maloca de piedra para comérselo otro día.

Entre los Guahari Diputiro Porã del medio Papurí el personaje es Miriá Porã Masü, al que en lengua general le dicen Jurupari, y el número cambia el sentido del mundo entero: no mató a un grupo de iniciados sino a tres, y por eso fracasaron los tres primeros intentos de poblar la tierra; la humanidad de hoy es la cuarta. Allí la paxiúba tampoco brota en cualquier parte: se levanta en el Agujero del Trueno, en la cabecera del igarapé Cuiú-Cuiú, afluente de la margen izquierda del río Papurí.

Las tres versiones coinciden en el ayuno roto, el olor a asado y el palo hueco. Difieren en el nombre del personaje, en cuántos murieron y en dónde queda la palma.`,
    similitudes: `El que muere quemado y de cuyo cuerpo brota la planta con que se hacen los instrumentos es un encadenamiento conocido en la Amazonía, y en el Vaupés la planta es casi siempre la paxiúba, la palma con que efectivamente se fabrican las flautas. Lo que hace comparable esta versión no es el motivo suelto sino la cadena completa: ayuno, transgresión, devoración, hoguera y palma, en ese orden y como origen del primer incendio del mundo.

Reichel-Dolmatoff describió del lado colombiano la ceremonia con la que este relato se amarra: una fiesta anual de hombres iniciados en la que suenan flautas grandes que las mujeres no pueden ver ni oír, se traen frutas del monte y a veces se incorpora a un grupo de muchachos. Registró también que «yuruparí» es un préstamo de la lengua general cuya etimología no está aclarada, y que buena parte de la literatura sobre esa ceremonia son especulaciones que poco se acercan a lo que dicen los propios indígenas. Por eso esta página no llama yuruparí al personaje.

El anclaje material es local y verificable en el texto: las señales que, según el libro, todavía se ven en piedras cercanas a algunas cachoeiras, donde los primeros hombres tumbaron la primera paxiúba.`,
    leccion:
      "Una respuesta desmedida a una falta termina alcanzando a quienes no tuvieron parte.",
    sceneHorizontal:
      "Guramüye frente a una gran maloca mientras el fuego avanza y una palma de paxiúba brota detrás",
    sceneVertical:
      "los adornos de Guramüye se transforman en una palma alta después del incendio del mundo",
    researchNotes:
      "CORRECCIÓN DE IDENTIDAD: conserva el slug «guelamun-ye», recupera Guramüye y retira la genealogía genérica no sustentada.",
  }),
  myth({
    slug: "nuguye-y-sepiro-fuego-y-creciente",
    sourceKeys: [
      "lanaLana1995",
      "diakuruKisibi1996",
      "galvao2004",
      "desanaTexts1989",
      "geografiaChamanistica",
      "bruzzi1994",
      "amazonianCosmos1971",
      {
        key: "buchilletMaladie19832",
        summary:
          "Recoge entre los desana del clan Kisibi un mito del diluvio mandado por el Creador en el que algunos, para escapar del agua, cavan un hueco y se meten en lo hondo de la tierra, donde se convierten en wai mahsã, la gente-pez: la misma solución que la versión Wari Dihputiro Põrã da a la creciente de Sëpïrõ (la gente que cava huecos y los tapa en vez de subirse a los cerros).",
        limitation:
          "Es una nota al pie de unas pocas líneas, no una narración del episodio, y la autora la juzga «probablemente de inspiración cristiana». Trabajo de campo en el Uaupés brasileño con el clan Kisibi, otra versión de clan; no nombra a Nügüye ni a Sëpïrõ.",
      },
      "hughJonesDesana2002",
    ],
    title: "Nügüye y Sëpïrõ: fuego y creciente",
    summary:
      "Nügüye provoca el segundo incendio y Sëpïrõ desborda las aguas; dos cataclismos completan la renovación del mundo.",
    tags: ["Nügüye", "Sëpïrõ", "cataclismos", "creciente"],
    mito: `Nügüye, «Pajé de Raíz», era un muchacho huérfano que vivía de criado en la maloca de Abe, el Sol. Con él vivía su hermanita, de nueve o diez años, que pasaba el día cargando al hijo de Abe. La mujer de Abe casi no le daba de comer. La niña era gente de gavilán, y para aguantar el hambre le chupaba el cerebro a la criatura, que se fue poniendo amarilla. Cuando la mujer supo por qué, le quebró los huesos a la niña y la echó al horno de hacer beiju.

Nügüye estaba en la orilla de un lago echándose pimienta en la cara. El alma de su hermana bajó al agua gritándole. La envolvió en una hoja y se la guardó. De regreso se sacó el hueso del muslo derecho y lo volvió un cañaveral de los de hacer flautas, y cerca de la maloca dejó el alma encima de la puerta. Esa noche un murciélago mordió a la mujer de Abe, y en esa casa al mordido lo echaban a un hueco.

Entró como si no supiera nada y se puso a tocar la flauta hecha con su hueso. Estaba llorando a su hermana: «nosotros que crecimos huérfanos acabamos así». Los hijos de Abe corrieron a preguntarle dónde la había conseguido y les dijo que allá había muchas.

Al otro día fueron todos. Se quedó atrás con el menor, su ahijado, y le fue diciendo el rezo que tendría que decir en cada cosa que iba a pasarle al regreso: si el caño se pone rojo, si el monte tiembla. Cuando llegaron, los otros ya estaban en medio del cañaveral. El fuego que habían prendido para cocinar los peces se corrió, se partió en dos y se los comió. Sólo salió el ahijado.

Nügüye se volvió gavilán, llegó antes que él y cantó desde el caballete: la mujer de Abe quemó a la hermana de Nügüye, y Nügüye quemó a todos los hijos de Abe. Abe sopló una flecha envenenada, lo agarró y lo echó a la hoguera. El gavilán movió las alas, el fuego prendió en las plumas, pasó al pasto, a las hojas, al suelo, y el mundo entero ardió. Fue el segundo cataclismo.

El tercero empezó por encargo. Gõãmü, viendo que las culebras, los jaguares y los espíritus del monte se estaban acabando a la gente, mandó a Sëpïrõ —el séptimo Trueno, al que también le dicen culebra grande del río— a cerrar con la cola la Puerta de las Aguas. Le puso una medida: que el agua tapara árboles y colinas, pero que las montañas más altas quedaran afuera para que la gente pudiera subirse. Creó las pirañas y las nutrias grandes para que se comieran a los bichos dañinos, y se subió al cerro Numú a mirar.

Se pasó de la medida y se hundieron también las montañas bajas y las pirañas alcanzaron a la gente. En el cerro Yairue quedaron Yairó, el inambú, y su mujer; a él ya le habían comido la cola, y por eso no tiene. Ella lloró diciéndole que siempre presumía de sabio y la estaba llevando a la muerte. Él se tapó con su cuia de sabiduría y cantó a las nueve, a medianoche y de madrugada, y a cada canto el cerro creció un palmo, nueve en total.

Gõãmü hizo aparecer una embarcación y la envolvió con esteras invisibles para que las pirañas no la vieran. Encontró a Sëpïrõ con el agua al cuello y le sopló curare en el pescuezo. Sëpïrõ soltó la puerta y saltó hacia el oriente, donde quedó una piedra grande. El agua bajó. Los árboles, que sumergidos no habían podido respirar, se secaron y ardieron, y después la lluvia lavó el carbón del mundo.

Cuatro montañas no se hundieron: Numú, Yairue, Pari y Buriri. Son los pilares del cielo, que de noche baja y aprieta el aire para dar sueño.`,
    historia: `El libro agrupa tres cataclismos en un solo capítulo —dos incendios y un diluvio— y esta página toma el segundo y el tercero. Van juntos porque la fuente los presenta seguidos y porque cierran la misma cuenta: al final el texto dice que se exterminaron y se renovaron tres humanidades y que la cuarta somos nosotros, y que el demiurgo decidió que no habría más desastres porque rehacer la humanidad daba mucho trabajo.

Lo narró Umusĩ Pãrõkumu, Firmiano Arantes Lana, kumu, baya y tuxaua, nacido en 1927 en el río Tiquié y muerto en 1990, y lo escribió su hijo Tõrãmũ Kẽhíri, Luiz Gomes Lana, nacido en 1947. Salió en 1980 y se reeditó revisado en 1995 en UNIRT y FOIRN, en São João Batista do Rio Tiquié y São Gabriel da Cachoeira: es una versión brasileña, del clan Kẽhíripõrã del Tiquié.

Del lado colombiano hay narradores con nombre para el mismo episodio. Reichel-Dolmatoff grabó cincuenta textos dictados por cuatro kumua desana: Begeyeri, Torame, Mirí y Payatege. El del diluvio y el incendio lo dictó Torame, que venía del bajo Papurí y que había presenciado personalmente la quema de los objetos más sagrados de su pueblo por los misioneros católicos de Montfort; no hablaba una palabra de español, vivía retirado cerca de Mitú y pasaba las horas pescando en su canoa. Begeyeri, alto, de voz fuerte y kumu de alto rango, murió en 1975 después de pasar sus últimos años aislado en una región remota. Payatege era un viejo diminuto que murió poco después de las grabaciones.`,
    versiones: `Torame contó el diluvio al revés de como lo cuenta el Tiquié. Allí no hay encargo ni medida: quien hace subir el agua es see, la Vía Láctea, concebida como una anaconda celeste o como la piel que la culebra deja al mudar. Alguien preparó una canoa antes de que el río creciera y los demás no se dieron cuenta; esa canoa es la forma terrestre de la anaconda. Se ahogaron los jaguares y los demás bichos que se llevaban a la gente. Después la vegetación se secó y ardió. El único que se salvó fue el inambú, escondido en la paja, y cantó nyairororo, que se traduce «estoy cocido», «estoy listo» o «estoy salvado». Al final, el Hombre de Hueso miró hacia abajo y dijo que su gente se había acabado, y se puso a buscar huesos humanos para hacer gente otra vez. «Por eso somos de tierra; lo único que tenemos es el alma.»

Los Wari Dihputiro Põrã convierten a Sé-pírõ de instrumento en enemigo. Allí no obedece a nadie: supo que los Umuñ mahsã iban a volverse seres humanos, los odió, quiso quedarse de dueño del mundo y provocó primero la inundación y después la caída de un gran fuego sobre la tierra. La gente no se subió a los cerros: cavó huecos en la tierra y los tapó con hornos de barro. Y Yairo gõãmü, el inambú, no es un sobreviviente: es el Abuelo del universo transformado, que baja a enfriar la tierra quemada y a hacer montes y montes nuevos. Sé-pírõ vivía dentro de una palma de buriti, al naciente, y salía sólo a medianoche a cantar.`,
    similitudes: `El detalle que atraviesa las tres versiones, y que ninguna copia de otra, es el pájaro. En el Tiquié el inambú sobrevive encaramado en un cerro que él mismo hace crecer cantando. En el bajo Papurí el inambú es el único que queda vivo después del incendio, escondido en la paja. En Cucura el inambú es la figura que toma el Abuelo del universo para enfriar la tierra quemada. Un mismo animal ocupa tres lugares distintos dentro del mismo episodio.

Los incendios y las crecientes universales son un lugar común comparativo y por sí solos no dicen nada. Lo que sí es propio de esta región es que las montañas que quedaron fuera del agua se sigan nombrando una por una y se usen como pilares del cielo: cuatro cerros con nombre, no una idea general de montaña.

Reichel-Dolmatoff anotó que las grandes inundaciones son corrientes a lo largo del Amazonas pero no ocurren en el territorio del Vaupés, y que la palabra que el narrador usa para «canoa» significa literalmente cáscara o corteza, lo que sugiere que las canoas desana fueron antes de corteza de árbol. El relato conserva una técnica, no sólo una catástrofe.`,
    leccion:
      "Una fuerza encargada de una tarea destruye lo que debía salvar cuando ignora el límite.",
    sceneHorizontal:
      "un gavilán cruza sobre un cañaveral en llamas mientras al otro lado crecen las aguas y montañas",
    sceneVertical:
      "Yairó y su esposa sobre una montaña que crece por encima de la gran creciente bajo cuatro pilares celestes",
    researchNotes:
      "UNIFICACIÓN EDITORIAL: reúne el segundo y tercer cataclismo publicados, manteniendo separados sus personajes y causalidades.",
  }),
  myth({
    slug: "yurupari",
    sourceKeys: [
      "lanaLana1995",
      "diakuruKisibi1996",
      "galvao2004",
      "amazonianCosmos1971",
      "desanaTexts1989",
      "beksta1988",
      "bruzzi1994",
      {
        key: "kramerCosmologia1982",
        summary:
          "Compara la primera edición del libro de los Lana (1980) con Reichel-Dolmatoff (1968) y dedica un apartado, «Las flautas sagradas: distribución del poder entre los sexos», al mismo capítulo que narra la ficha: Abé deja dos trozos de paxiúba y un bejuco de vomitar en el puerto, el hijo dormilón no despierta, las dos hijas encuentran la paxiúba dorada que se les escapa, el hombre-pez les enseña a soplarla, los hombres barren la maloca a las diez de la mañana, la flauta nueva lanzada hacia el sur mata al hermano y Ngoamãn sopla en su lugar. Lo contrasta con la versión colombiana de Reichel, donde las flautas nacen del incesto del Sol con su hija y denuncian el crimen.",
        limitation:
          "Cita la edición de 1980, no la revisada de 1995 que sigue la ficha, y transcribe en portugués los pasajes; la lectura interpretativa (poder procreador frente a conocimiento) es de la autora. Es la versión Kẽhíripõrã del Tiquié, del lado brasileño, puesta al lado de la colombiana de Reichel-Dolmatoff.",
      },
      {
        key: "barrosKapiwaya2012",
        summary:
          "Tiene un apartado entero, «Sobre o roubo das flautas sagradas», con la versión del clan Guahari Diputiro Porã: de las cenizas de Miriá Porã Masü nacen las paxiúbas que sonaban solas; Kisibi, hijo de Abe, se levanta tarde para vomitar de madrugada; las mujeres se apoderan de las flautas y de las funciones masculinas; Kisibi las cerca en Tauripu (cachoeira de Aracapá), mascan pimienta y escupen, y de ahí salen las flautas Sĩmiomĩ y Põrerõ, con las que las espantan y recuperan las sagradas. Lo cruza con el repertorio que se toca hoy en el dabucuri.",
        limitation:
          "Es la versión Guahari Diputiro Porã del Papurí brasileño, resumida a partir del libro de los Galvão (2004) y del bayá Raimundo Galvão; no es la Kẽhíripõrã que narra la ficha. El eje del artículo es un repertorio musical, no el mito. Lado brasileño.",
      },
      "barrosMusic2015",
      {
        key: "barrosResena2015",
        summary:
          "Reseña del estudio de Mello sobre el mito de las flautas sagradas en su versión desana del clan Guahari Diputiro Porã, narrada por el bayá Raimundo Galvão: de las cenizas de Miriá Porã Masü (Gurumuyé) brota la paxiúba, sus pedazos dan las flautas, su custodia pasa a Kisibi, que descuida las reglas, las mujeres las encuentran y se las llevan, y la disputa termina con la derrota de ellas y la prohibición de las flautas a las mujeres.",
        limitation:
          "Es una reseña, no el libro, y trata la versión Guahari Diputiro Porã del Papurí brasileño (igarapé Urucu), no la Kẽhíripõrã que narra la ficha; la compara además con la versión baniwa de Kuwai, que es de otro pueblo. Lado brasileño.",
      },
      {
        key: "buchilletMaladie19832",
        summary:
          "Resume el mito desana de las flautas sagradas tal como lo recogió en el clan Kisibi: los instrumentos pertenecieron primero a las mujeres, el mundo estaba invertido y los hombres hacían las tareas domésticas; la reconquista de las flautas por los hombres explica el origen de la menstruación, y las flautas quedan como el análogo masculino de las reglas femeninas. Describe además el rito de iniciación en que las flautas, sacadas del río, se muestran a los muchachos y se prohíben a la vista de las mujeres.",
        limitation:
          "Trabajo de campo en el Uaupés brasileño, con el clan Kisibi: otra versión de clan, distinta de la Kẽhíripõrã del Tiquié que narra la ficha, y dada en resumen, no como texto dictado. Es una tesis sobre enfermedad y terapéutica; el mito de las flautas ocupa unos párrafos. La ficha del IRD enlaza el PDF completo.",
      },
      {
        key: "hughJonesDesana2002",
        summary:
          "La entrada del ISA sobre los desana explica que cada grupo tukano tiene sus flautas y trompetas Yurupari de paxiúba, que son los huesos del ancestro, y resume el mito: al principio las mujeres poseían las flautas mientras los hombres procesaban la yuca y hacían tareas femeninas, y al quitárselas les pasaron la menstruación. Cuenta también el mito del Yurupari que, quemado, deja de sus cenizas la palma de la que se hacen los instrumentos, y cita el libro de los Lana y el de los Wari Dihputiro Põrã como bibliografía desana.",
        limitation:
          "Es una síntesis regional del sistema tukano oriental firmada por un especialista en los barasana, no una versión desana: sus ejemplos narrativos son sobre todo barasana y el resumen del mito es genérico para el Uaupés. Lado brasileño.",
      },
      "silvaAnalogia2004",
    ],
    title: "El robo de las flautas sagradas",
    summary:
      "Las hijas de Abe encuentran primero las flautas surgidas de la paxiúba y alteran la distribución de tareas en la maloca.",
    tags: ["flautas sagradas", "Abe", "paxiúba", "maloca"],
    mito: `Después de que Guramüye ardió, la gente salió a buscar dónde iban a brotar las palmas de paxiúba, porque a cada quien le tocaba la suya. El desana que salió a buscar la de ellos se llamaba Abe, Luna. Encontró la palma, cortó dos pedazos y los llevó hasta su maloca, que quedaba en el río Papurí, abajo de la misión colombiana de Piracuara. Los dejó en el puerto, al pie de un árbol llamado nogemü, y junto a ellos dejó un bejuco que sirve para hacer vomitar.

Le avisó a su hijo que fuera al puerto de madrugada, todavía oscuro, a tocar las flautas sagradas. Pero el muchacho era dormilón y se le pasó la hora. El padre lo sacudía y nada. Con el ruido se despertaron las dos hijas y vieron al padre tratando de despertar al hermano y hablándole al oído. Entendieron que le hablaba del bejuco y se ofrecieron a buscarlo. Abe ya no pudo disimular y las dejó ir.

Llegaron al puerto con su antorcha encendida. Debajo del árbol vieron dos pedazos de paxiúba que brillaban como oro. Las paxiúbas huían a medida que ellas se acercaban, pero las alcanzaron. Se las llevaron a la orilla del río preguntándose para qué servirían. Venían subiendo los Waimahsã, la Gente Pez, que eran los que debían enseñarle al hijo de Abe; al ver mujeres se devolvieron. Al final llegó el aracú de cabeza roja, agarró los pedazos y sopló, y ahí mismo sonaron. «Ahora que ya sabemos para qué sirven, toquemos nosotras», dijeron, y así hicieron.

No volvieron a la casa. Se quedaron en el puerto tocando, y el sonido se oyó en todo el universo. Vino gente de todas partes a celebrar otra vez el día del azote, como lo hacía Guramüye, y al ver a las mujeres dueñas de las flautas se apartaron espantados. Se juntaron todas y decidieron entrar a la casa de Abe. Eran como las diez de la mañana y los hombres estaban barriendo y haciendo todo el oficio de las mujeres. Cuando ellas entraron, Abe salió y se escondió, y detrás de él se escondieron todos. La maloca se llenó de mujeres con sus flautas y ningún hombre se atrevió a entrar.

Sólo entonces cayeron en cuenta de que las flautas se les habían ido, y se pusieron furiosos. Del corazón de otra paxiúba sacaron un pedazo y fabricaron una flauta distinta. Le dieron pimienta al dormilón para que mascara y escupiera un hilo largo de saliva; le agarraron el hilo de la boca y el muchacho cayó fulminado, y con un rito lo revivieron. El hilo se volvió un bejuco que partieron en pedacitos para acompañar la música.

Probaron la flauta hacia el sur. Una de las hijas de Abe, para oír mejor, hizo un gesto con la mano junto a la oreja, y el muchacho cayó muerto. Ahí los hombres cercaron la maloca. El que iba a soplar era el dormilón, pero Gõãmü levantó la flauta y sopló él mismo. El sonido desbarató a las mujeres, que cayeron sin sentido y salieron huyendo dejando los instrumentos; una alcanzó a esconderse un pedacito. Los hombres retomaron la maloca y volvieron a quedarse con las flautas.

Las dos hijas de Abe huyeron llorando hacia el sur y no volvieron nunca. Ya abajo, escribieron en una piedra de Itapinima, en el bajo Uaupés, debajo de Taracuá, la historia de cómo habían conquistado las flautas sagradas.`,
    historia: `La dirección «yurupari» se conserva porque ya está en la arquitectura del sitio; el título, no. El capítulo se llama «El robo de las flautas sagradas por las mujeres» y no cuenta la biografía de un héroe legislador. Reichel-Dolmatoff advirtió que «yuruparí» es un préstamo de la lengua general cuya etimología no se ha aclarado, que nombra un complejo ceremonial y no un personaje, y que la versión más poética que circula, la de Stradelli, es también la menos auténtica.

Lo que sí hay, y la ficha heredada no tenía, es geografía colombiana. La fuente sitúa la maloca del que encuentra la palma en el río Papurí, aguas abajo de la misión colombiana de Piracuara, y hace terminar el episodio en la piedra grabada de Itapinima, en el bajo Uaupés, debajo de Taracuá. El personaje se llama Abe y el texto lo glosa «Luna», no «Sol», aunque la misma palabra desana nombre a los dos astros; la ficha anterior lo daba por Sol.

Lo narró Umusĩ Pãrõkumu, Firmiano Arantes Lana, kumu, baya y tuxaua del clan Kẽhíripõrã, nacido en 1927 y muerto en 1990. Lo escribió su hijo Tõrãmũ Kẽhíri, Luiz Gomes Lana, nacido en 1947, que estudió hasta quinto de primaria en régimen de internado en la Misión Salesiana de Pari-Cachoeira y anotó el dictado de su padre en cuadernos de escuela desde 1968. Se publicó en 1980 y se reeditó en 1995 en UNIRT y FOIRN, dentro de una colección pensada para circular en las escuelas indígenas de la región.`,
    versiones: `Los Wari Dihputiro Põrã nombran lo que aquí no tiene nombre. Las dos hermanas se llaman Wihsu y Yugupó, el hermano dormilón se llama Wahori, y las flautas se esconden en un árbol lleno de huecos, el omamo; los huecos del tronco son, dicen, los sitios donde se metieron. Los peces maestros se niegan uno tras otro —el pacú, el aracú, el aracú pintado, la pescada, a la que le tiran piedras en la cabeza— hasta que obligan al jacundá a enseñar. Y agregan una pérdida que la otra versión no menciona: el uirapuru, que era el corazón y el alma de las flautas, se salió de ellas disgustado y se fue a vivir aparte del universo. Antes las flautas sonaban solas y bastaba con sostenerlas; desde entonces hay que soplarlas. Las flautas nuevas que hacen los hombres se llaman põrérõ y su'hiomi, y al final Wihsu huye al poniente y Yugupó al naciente.

Los Guahari Diputiro Porã, del medio Papurí, ponen la persecución en el terreno: quien persigue a las mujeres es Kisibi, nacido del vómito del hijo del Sol, y las persigue a lo largo del igarapé Cuiú-Cuiú y del río Papurí, que son los ríos de ese clan.

Del lado colombiano, Reichel-Dolmatoff registró que en la ceremonia las flautas se tocan siempre por pares, una «macho» llamada poré y una «hembra» llamada ponenó. El nombre de la flauta nueva en la versión de Cucura, põrérõ, es el mismo.`,
    similitudes: `Las flautas que las mujeres tuvieron primero y los hombres recuperaron después son un relato compartido en todo el Vaupés y en buena parte de la Amazonía. Lo que cambia entre versiones no es el desenlace, sino quién enseña a tocarlas y qué se pierde en el cambio de manos.

Aquí enseña un pez, el aracú de cabeza roja, después de que los demás se devuelven al ver mujeres. En la versión de Cucura enseña el jacundá bajo amenaza y se va el alma de las flautas. En las dos, el resultado técnico es el mismo: la música deja de venir sola.

La inversión de tareas —hombres barriendo la maloca a las diez de la mañana mientras las mujeres tocan— aparece también en versiones vecinas del alto río Negro y del Içana recogidas por el misionero Alcionilio Brüzzi. Son vecinos del sistema regional, no desana.

El anclaje que no se repite es la piedra. Las hijas de Abe dejan escrita su versión en Itapinima, en el bajo Uaupés. Reichel-Dolmatoff fotografió petroglifos antiguos en los raudales del Macú-paraná, del lado colombiano, y en esta región las lajas grabadas siguen siendo la forma de sostener que algo pasó ahí.`,
    leccion:
      "Quien queda con el instrumento queda también con el trabajo, el lugar y la disputa.",
    sceneHorizontal:
      "las hijas de Abe encuentran flautas entre una paxiúba, peces y ondas musicales junto a la maloca",
    sceneVertical:
      "dos grupos intercambian posiciones alrededor de una maloca mientras el sonido sube como cintas de papel",
    researchNotes:
      "CORRECCIÓN DE ATRIBUCIÓN: conserva el slug histórico «yurupari», retira el héroe panamazónico y restituye el capítulo de las flautas.",
  }),
  myth({
    slug: "el-origen-de-la-mandioca-desana",
    sourceKeys: [
      "lanaLana1995",
      "diakuruKisibi1996",
      "galvao2004",
      "ribeiro1994",
      "desanaTexts1989",
      "amazonianCosmos1971",
      "dantes2019",
      {
        key: "andrellohumanidade2022",
        summary:
          "Presenta a Baseboo o Baariboo como el 'dueño de la alimentación' que ya traía en su cuerpo todas las manivas (esquejes de yuca) que la humanidad cultivaría, junto al Abuelo y la Abuela del Mundo, apoyándose en la versión desana de Bayaru y Ye Ni (2004) y en una tukano; y lo liga a la generación de los 'moradores del hueso de multiplicación de Baaribo'.",
        limitation:
          "Es del lado brasileño y sigue la versión Guahari Diputiro Porã (2004), no el capítulo de la chagra del libro Kẽhíripõrã que narra la ficha. Es comparativo y es un artículo.",
      },
      {
        key: "fernandesBueri2006",
        summary:
          "Resume el mismo núcleo de la ficha desde otro clan: Baaribo, Dueño de la Fartura, escondió los pies de maniva y otras plantas para castigar a su primogénito, que había matado al hermano menor por acostarse con su mujer; después le ofreció un dabucuri de mandioca, tapioca y harina y le enseñó a tumbar y sembrar (remite a 'A vida de Baaribo', 1996, pp. 79-92). Explica que en el dabucuri de mandioca los oferentes dicen 'Somos Baaribo Masá'.",
        limitation:
          "Es del lado brasileño y es la voz del clan Wari Dihputiro Põrã de Cucura, no la del Kẽhíripõrã que narra la ficha. No es otra versión del mito sino el libro de enseñanzas —calendario, dabucuris, historia de los clanes— que remite a su volumen de 1996.",
      },
      "bidouTrois1996",
      "oliveiraMulheres2023",
      "buchilletInterpretacao1988",
      "coordSistema2019",
      {
        key: "buchilletMaladie1983",
        summary:
          "Transcribe el mito M.5, 'Origine du manioc', del clan Kisibi: Baribo, 'el Maestro de la comida', tenía una piedra blanca (bariboye) que daba toda la comida y la ponía bajo la batea del almidón; la nuera la descubre y la esconde, Baribo la recupera y se va a vivir con las dos hijas del agutí, y 'no hubo nunca más almidón'. Por la desobediencia de ellas hace crecer una cáscara dura en el tubérculo: el mismo origen del trabajo de pelar la yuca que cuenta la ficha.",
        limitation:
          "Es del lado brasileño: campo de doce meses (1980-1981) con dos clanes desana del Tiquié y del igarapé Umari, el de Tolaman Kenhíri y el Kisibi; los mitos transcritos en el anexo son del clan Kisibi, no del Kẽhíripõrã. Texto completo en el repositorio del IRD (ficha: https://www.documentation.ird.fr/hor/fdi:15520); el escaneo tiene errores de OCR. Es una tesis sobre enfermedad y terapéutica, no una colección de mitos. Su versión del episodio de las dos esposas es distinta (hijas del agutí, piedra de almidón) y no trae la chagra que arde.",
      },
    ],
    title: "Baaribo y el origen de la mandioca",
    summary:
      "Baaribo guarda plantas alimenticias en su cuerpo, abre una chagra y entrega la mandioca a una nueva generación.",
    tags: ["Baaribo", "mandioca", "chagra", "alimentos"],
    mito: `Baaribo, «el que tiene comida», llevaba dentro de sí toda clase de plantas que la gente come; transformándose, producía el alimento, y a él nunca le faltó. Vivía por el norte con una mujer del grupo de la maquisapa y con dos hijos, Doé y Abe.

El menor se acostumbró a estar con la mujer de su hermano. Doé sospechó, los vigiló y los encontró en el puerto. Cogió un palo y mató a su hermano; a la mujer no le hizo nada. Envolvió el cuerpo en una estera, lo enterró en el barro, volvió a la casa y no le dijo nada a nadie, para que nadie supiera.

Baaribo salió a buscar a su hijo menor y nadie le daba razón. Entonces se le ocurrió convertirse en japú para oír conversaciones sin despertar sospechas. Voló a los poblados lejanos y no oyó nada. Fue a las chagras y bajó en una donde trabajaban cuatro mujeres, y movió las alas como pidiendo comida. Una preguntó de quién sería ese japú; otra dijo que debía ser del hijo de Baaribo, que andaba buscando a su dueño; y una tercera contó todo: cómo lo habían matado y dónde lo habían enterrado.

Se apartó de la casa de Doé y llegó a otra familia. Allí tomó por esposas a dos hermanas y les dijo que le mostraran el monte donde quisieran su chagra. Mientras ellas marcaban el redondel, él recogía bejuco y tejía canastos. Les advirtió que se devolvieran y que no fueran a mirar aunque oyeran ruido. Después se fue al centro del círculo y se puso a arder por sí mismo. El fuego prendió en los árboles grandes y quemó el monte sin pasarse de la raya marcada. La hermana mayor no aguantó y fue a espiar: lo vio en medio del fuego con todos sus adornos, y a él se le cayó el pendiente de la oreja, con lo que supo que lo estaban mirando.

Al día siguiente la chagra estaba llena de frutas y de abejas zumbando en las flores de la yuca. La mayor salió corriendo a gritar que eran sus frutas y sus estacas; dio tres pasos, tropezó con un tocón y cayó sin sentido, y donde cayó la orina empezó a brotar la maleza. Si no hubiera desobedecido, no habría maleza en las chagras. Baaribo la revivió con una ceremonia y las mandó a arrancar yuca: la raíz salía sin cáscara, lista para rallar. Les dijo que no comieran nada antes de rallarlo todo.

Obedecieron y en un instante rallaron todo, como si fuera poco. Al otro día la chagra ya estaba llena de maleza. Al quinto día la mayor llegó de la chagra con mucha hambre y comió antes de rallar, y en los mismos canastos la yuca empezó a criar cáscara. Pidieron ayuda a unos sapos para pelarla, y por eso esos sapos tienen los labios grandes. Desde entonces la yuca sale de la tierra con cáscara.

Las dos tuvieron un hijo cada una: Estrella Vespertina y Estrella de la Mañana. Cuando ya eran muchachos, Baaribo se acordó del hijo al que había maldecido y pensó que también era hijo suyo, y que en lugar del muerto ya tenía dos. Mandó a Estrella de la Mañana hacia el norte a invitarlo. Doé llegó el día señalado con su mujer, con su madre vieja y con la viuda del hermano muerto, que lloró al ver al muchacho parecido a su marido. Baaribo lo recibió llorando, le dio caxiri, recordaron juntos todo lo que había pasado y al final le dio la mano de la paz y levantó la maldición. Esa misma tarde empezó a enseñarle: le dijo que había escondido las estacas de yuca al pie del árbol nogemü, y que rozara alrededor, tumbara el monte cercano y quemara, para que brotaran las estacas y todos tuvieran yuca.`,
    historia: `El capítulo se titula «Mito de origem da mandioca» y es uno de los tramos más largos del libro. El nombre del protagonista, Baaribo, se traduce allí mismo como «aquel que tiene comida». Es también el capítulo que más explica el trabajo: de dónde salió la maleza que hay que desyerbar y de dónde salió la cáscara que hay que pelar.

Lo narró Umusĩ Pãrõkumu, Firmiano Arantes Lana, nacido en 1927, kumu, baya y tuxaua del clan Kẽhíripõrã, y lo escribió su hijo Tõrãmũ Kẽhíri, Luiz Gomes Lana, nacido en 1947, en cuadernos de escuela, a partir de 1968 y sin grabadora. Viven en el río Tiquié, en Brasil. El libro salió en 1980 y se reeditó en 1995 en UNIRT y FOIRN, con notas seleccionadas entre las que la antropóloga Berta Ribeiro había preparado para la primera edición, incluyendo cuando fue posible los nombres científicos de las plantas y los animales mencionados en desana.

Del lado colombiano, Reichel-Dolmatoff registró en el Vaupés que los desana distinguen varias clases de yuca brava y que una de ellas, boréka dehke, está relacionada por mito con el sib Boreka, el mismo antepasado que encabeza la salida de los desana en el relato de origen. Otras variedades que anotó llevan nombre de color: yuca blanca, yuca amarilla. Allá la yuca tarda de seis a nueve meses, es el cultivo principal, y el rallador, según los propios desana, es de origen uanano. Esa clasificación no viene de un narrador nombrado: viene del trabajo de Bogotá con Antonio Guzmán.`,
    versiones: `En la versión de los Wari Dihputiro Põrã, Baaribo no reparte la comida haciendo una chagra sino guardándola: cuando terminó su tiempo de trabajo, metió la comida de la gente dentro de un árbol grande llamado wayuku-gü, un árbol de piedra preciosa. El problema que esa versión plantea es otro. En esa época los animales, las aves, los peces, los insectos y la gente comían todos lo mismo, y la comida no alcanzaba para todos. Por eso el líder del universo, antes de empezar la transformación de la humanidad, convocó a todos los seres vivos para repartir entre ellos los alimentos que estaban en el árbol, y de paso los instrumentos musicales que estaban guardados ahí mismo. La yuca no aparece como invención de una chagra sino como una porción dentro de un reparto general de dietas.

Los Guahari Diputiro Porã, del medio Papurí, tienen su propia historia de Baaribo y una historia aparte sobre el origen del fuego. En su libro, Baaribo es el Dueño de la Alimentación, y del humo de su cigarro mezclado con polvo de ipadu nacieron los pájaros cuyas plumas serían después los adornos de baile de los antepasados de los pueblos del río Negro; a ese conjunto lo llaman «los que aparecieron del benzimiento del cigarro de Baaribo».

Tres libros, tres funciones distintas para el mismo nombre: el que hace la chagra, el que guarda la comida dentro de un árbol y el que hace nacer a los pájaros.`,
    similitudes: `El origen del alimento en el cuerpo de un ser que lo contiene es un motivo amazónico extendido y por sí solo no identifica a nadie. Lo identificable aquí es cómo el relato reparte responsabilidades: la planta la trae él, pero la maleza y la cáscara las trae una desobediencia, y de esa desobediencia nace, dice el texto, el tiempo en que la mujer trabaja duro y suda mucho. El mito no explica sólo de dónde vino la yuca, sino por qué cuesta.

La quema circular desde el centro, que no se pasa del límite marcado, describe una técnica real de tumba y quema, y el texto la cuenta como técnica: se marca el redondel, se quema hacia afuera, no se deja correr el fuego.

Reichel-Dolmatoff documentó del lado colombiano que las variedades de yuca brava llevan nombres emparentados con sibs y con colores, y que la yuca es allí el cultivo principal. Que una variedad se llame como el antepasado desana muestra que la clasificación agrícola y la genealogía se piensan juntas. Ese parentesco entre planta y linaje es lo que sostiene la comparación, no la idea general de un dios agrícola.`,
    leccion:
      "Lo que da de comer llega con el trabajo que exige, y ese trabajo tiene historia.",
    sceneHorizontal:
      "Baaribo abre una chagra circular donde brotan mandioca, frutos y hojas en capas planas de colores",
    sceneVertical:
      "una planta de mandioca asciende desde la tierra mientras Baaribo transmite alimentos a una nueva generación",
    researchNotes:
      "ADICIÓN DOCUMENTADA: adapta el capítulo de Baaribo sin explotar sus escenas íntimas ni publicar conocimiento operativo.",
  }),
  myth({
    slug: "gainpaya-y-el-origen-del-chontaduro",
    sourceKeys: [
      "lanaLana1995",
      "diakuruKisibi1996",
      "galvao2004",
      "ribeiro1994",
      "bruzzi1994",
      "amazonianCosmos1971",
      "geografiaChamanistica",
      {
        key: "fernandesBueri20062",
        summary:
          "En el calendario de constelaciones, el «verano de pupunha» (ürĩ weri bohori, finales de febrero y comienzos de marzo) recuerda que un Umurĩ Masú se casó con una mujer Wai Masó (Gente-Peixe) que sólo comía insectos; al visitar al suegro llevaron insectos y frutas secas de regalo, y en la maloca del suegro él robó un carozo de pupunha convertido en el pájaro yeoro, escondiéndolo debajo de la barbilla, para sembrarlo en esta tierra. Del carozo guardado en lo oscuro sale la sequía nublada de ese verano y un tumor que tiene rezo propio. Distingue la pupunha verdadera (diciembre-febrero) de la pupunha de agua.",
        limitation:
          "Es del lado brasileño y del clan Wari/Wahari Diputiro Porã: es otra versión, sin el nombre de Gãipayã, sin las pruebas del suegro y sin las cuatro variedades; el carozo va bajo la barbilla, no tragado. Es un pasaje de calendario de una página, no un capítulo narrativo. PDF completo en la página del ISA.",
      },
      "saHistorias2020",
      {
        key: "buchilletMaladie19832",
        summary:
          "Compara la versión publicada por los Lana (1980), con Gain Panan, el antepasado de los periquitos, que se traga el carozo y lo recupera en la letrina, con otra versión que la autora recogió en otra aldea desana, donde el héroe no tiene nombre y podría ser Butari Gõãmü, ya casado con una mujer de la Gente-del-Agua. Explica que el robo del carozo contra la voluntad del wai-mahsã funda un rezo de curación: en cada punto del cuerpo donde se escondió la semilla —planta del pie, corva, ingle, axila, bajo la lengua— puede levantarse un tumor (bihiribu), y la incantación se construye sobre el episodio. Menciona también que el héroe creó hierbas para atraer los insectos con que alimentaba a su mujer.",
        limitation:
          "Es una tesis sobre enfermedad y terapéutica, del lado brasileño: usa el mito para explicar un rezo, no lo publica completo. Su versión de campo difiere de la ficha en el protagonista. El registro del IRD da el PDF escaneado completo, con OCR imperfecto.",
      },
    ],
    title: "Gãïpayã y el origen del chontaduro",
    summary:
      "Gãïpayã supera pruebas bajo el agua y lleva hasta la tierra una semilla de la palma que reunía cuatro chontaduros.",
    tags: ["Gãïpayã", "chontaduro", "pupunha", "semilla"],
    mito: `Gãipayã fue el antepasado de los periquitos, pero tenía figura humana. Vivía solo en su maloca, en un lugar del río Uaupés llamado Lago de la Tobillera. Hizo varios intentos de conseguir esposa y no lo quisieron: ni las mujeres ni los padres de ellas.

Cuando llegó el tiempo del ucuquí, iba todos los días a ver su árbol y nunca encontraba fruta madura. Lo cercó con varas y siguió sin encontrar nada. Entonces se subió a un árbol vecino a vigilar de noche. Al clarear llegó un grupo de muchachas bonitas, cada una con su canasto. Bajó despacito para agarrarlas y se le escaparon. Volvió a cercar el árbol, ahora con espinos de bejuco, y a la noche siguiente sólo alcanzó a una, porque se le enredó el pelo en los espinos. Se lo desenredó y vio que estaba embarazada. Aun así se puso contento y se la llevó.

En la casa le preguntó qué comía. Dijo que saltamontes, comejenes y hormigas. Él le recogía insectos y comía aparte comida de gente. Un día quiso vivir con ella, pero desconfió: la llevó al monte, le puso una hoja, fingió acostarse encima, y cuando sacó la hoja estaba toda carcomida. Vio que tenía pirañas dentro. Entendió que era hija de Pirõ, la culebra más grande del río, y que había sido mujer de un hombre-piraña. Le pidió barbasco a la araña invisible, la llevó al caño y con eso sacó las pirañas muertas. Sólo entonces vivieron como marido y mujer.

Después le preguntó qué comía el padre de ella. Recogió los insectos, los tostó y prepararon el viaje. Bajaron el Tiquié hasta el lago Patavá. Pasando el lago, ella le mandó botar los insectos al río, y subieron toda clase de peces a comérselos: era el regalo para calmar a sus hermanos-peces antes de llegar, porque si no podían hacerle daño al marido. Después agitó el agua con un látigo pintado de dos colores y el agua se abrió para que entraran a pie enjuto.

En la maloca los recibieron dos veces. Primero en forma de culebras gigantes del río; el hermano, una culebra pintada de rojo, le lamió la cara a ella y después a él, y ella le sostuvo la mano entre los muslos para que no saliera corriendo de espanto. Después se quitaron la vestimenta de culebra y volvieron como gente, hablando lengua humana.

El viejo Pirõ lo puso a prueba varias veces. Le mandó hilar una hamaca de un cogollo de miriti, y la mujer le enseñó a escondidas el modo de hacerla en una tarde. Lo llevó a sacar ipadu dándole sed, y él no tomó agua. Lo invitó a bañarse, y él no fue; volvieron convertidos en lechuzas y llenaron la casa de un olor insoportable, y él respiró por su cerbatana metida en la pared. Luego se desquitó: se puso la piel de sus amigos los gavilanes tijereta y dejó la maloca oliendo a gavilán. El viejo desistió de matarlo.

Al lado de la maloca del suegro había una sola palma de chontaduro cargada de frutos de cuatro clases: rojo anaranjado, blanco, listado y verde menudo. Un día cocinaron unos racimos y no quisieron que él recogiera semilla; a la mujer también le prohibieron dársela, porque no querían que la palma se regara por el mundo. Él se hizo invisible, abrió una fruta y se guardó la semilla debajo del pie. Ella sospechó y le fue pidiendo que levantara el pie, que levantara el brazo, que abriera la boca, que mostrara la lengua; y él la fue pasando del pie al sobaco, del sobaco a la boca, de la boca a debajo de la lengua, hasta que se la tragó. Cuando fue a la letrina la recogió, y la sembró junto a su casa. Creció igualita a la que había visto: un solo tronco que daba todas las clases de chontaduro.`,
    historia: `El capítulo se titula «El mito de Gãipayã y el origen de la pupunha» y va suelto, después del ciclo de la yuca. La fruta que allí se llama pupunha es la que en Colombia se llama chontaduro; el título de esta página adopta el nombre colombiano y el cuerpo conserva los dos, porque son la misma palma. El libro nombra las cuatro variedades en desana: üridiari, la rojo anaranjada; üriboho, la blanca; ürinahsikatu, la listada; y ürisawe, la verde menuda. También identifica al personaje: es el antepasado del periquito Brotogeris tirica.

Lo narró Umusĩ Pãrõkumu, Firmiano Arantes Lana, nacido en 1927 en el Tiquié, kumu, baya y tuxaua del clan Kẽhíripõrã, muerto en 1990. Lo escribió su hijo Tõrãmũ Kẽhíri, Luiz Gomes Lana, nacido en 1947, en cuadernos de escuela y a partir de 1968. La segunda edición, revisada y ampliada por Dominique Buchillet con la orientación del propio Luiz Lana, la publicaron UNIRT y FOIRN en 1995 dentro de la colección Narradores Indígenas do Rio Negro, pensada sobre todo para el público indígena de la región.

Los lugares del relato están en Brasil: el Lago de la Tobillera, en el Uaupés; la bajada por el Tiquié; el lago Patavá. Los desana del Tiquié y del Papurí son vecinos de los desana colombianos y forman parte del mismo sistema de matrimonios entre pueblos que habla lenguas distintas, pero este episodio se cuenta desde allá y con topónimos de allá.`,
    versiones: `El nombre de Gãipayã aparece en los tres libros desana y en cada uno hace otra cosa, lo que impide tratar esta historia como la historia.

Aquí es el abuelo de los periquitos y el que trae la semilla del chontaduro desde la casa subacuática del suegro.

En la versión de los Wari Dihputiro Põrã, el mismo nombre —escrito Gáhépáyé y glosado como el periquito marianita— es el único iniciado que no alcanza a ser tragado por el devorador de jóvenes: se queda recostado por fuera del palo hueco, y el devorador lo cerca, se lo lleva vivo a su maloca de piedra y lo guarda con intención de comérselo otro día.

En la de los Guahari Diputiro Porã, el periquito Gã'i está encerrado dentro del cuerpo del dueño de las flautas, que le lleva comida y no lo deja salir para que no vaya a contar nada. Gã'i pide maíz, lo asa cerca de la pared, el maíz revienta y abre un hueco; tapa el hueco con la tusa y por ahí espía. Ve que el guamo está maduro y que el chontaduro está casi maduro, y va pidiendo primero guamo y después chontaduro. El libro anota los meses: el guamo madura en octubre y noviembre, el chontaduro en enero. Cuando el dueño sale otra vez a buscarle comida, Gã'i destapa el hueco y se escapa volando. Por eso, dicen, el periquito come chontaduro cuando está madurando.

En dos de los tres libros el periquito y el chontaduro quedan amarrados; en dos de los tres, el periquito es el que se escapa del cuerpo de otro.`,
    similitudes: `La visita al suegro-culebra bajo el agua, con pruebas que hay que sortear una por una, es una estructura reconocible en el noroeste amazónico, y funciona como lo que es: un matrimonio con afines peligrosos, contado con las reglas del matrimonio que rigen en el Uaupés, donde uno se casa por fuera de su propia lengua. El yerno llega cargado de regalos para el suegro y tiene que probar que sirve.

El robo de la semilla escondida en el cuerpo tiene aquí una particularidad que conviene no perder: quien lo persigue paso a paso, pidiéndole que muestre el pie, el brazo, la boca y la lengua, es su propia esposa, que es de la casa del suegro. No es un héroe engañando a extraños.

La palma única que da cuatro frutos distintos es la parte que más se sostiene en el terreno. El chontaduro es una palma cultivada que se propaga por semilla y por retoño, y el relato explica a la vez el origen de la planta y el origen de su diversidad dentro de un mismo tronco. Las cuatro variedades nombradas en desana son la firma de esta versión, y ninguna de las otras dos colecciones cuenta este episodio con esta palma.`,
    leccion:
      "Una semilla cruza una frontera escondida en el cuerpo y llega con todas sus variedades juntas.",
    sceneHorizontal:
      "Gãïpayã observa bajo el agua una palma de chontaduro que produce cuatro colores de fruto",
    sceneVertical:
      "la semilla llevada por Gãïpayã brota junto a la casa y se abre en cuatro racimos",
    researchNotes:
      "ADICIÓN DOCUMENTADA: mantiene pupunha en el cuerpo y explica la equivalencia colombiana chontaduro.",
  }),
  myth({
    slug: "agamahsapu-y-el-tiempo-del-umari",
    sourceKeys: [
      "lanaLana1995",
      "diakuruKisibi1996",
      "galvao2004",
      "ribeiro1994",
      "desanaTexts1989",
      "geografiaChamanistica",
      "beksta1988",
      "fernandesBueri2006",
      "lanaChuvas1987",
      "buchilletMaladie1983",
    ],
    title: "Ãgãmahsãpu y el tiempo del umarí",
    summary:
      "Ãgãmahsãpu, padre de las aves, recorre casas de transformación y vincula sus cantos con el umarí y la abundancia venidera.",
    tags: ["Ãgãmahsãpu", "umarí", "aves", "calendario"],
    mito: `Ãgãmahsãpu era el jefe de todas las aves que cantan en su tiempo: inambúes, pavas, trompeteros, paujiles. Bajó desde el norte hasta la Maloca del Río de Leche para subir por donde había subido la humanidad y entrar en las mismas casas de transformación, haciendo en cada una la ceremonia del umarí. Todavía no era tiempo de que diera fruto y él llegaba repartiéndolo. De él aprendieron los desana esa ceremonia, la que hace que al año siguiente haya mucho umarí.

Se supo que venía bailando maloca por maloca y buscando mujeres. En la trigésima casa, la Maloca de los Cantos, vivía Diápirõ con dos hijas. Ellas oyeron hablar de él y ya lo querían sin conocerlo; él también quería llevárselas. El padre las escondió dentro de una maleta de guardar plumas.

Entró haciendo sus ceremonias. La música era tan bonita que las muchachas, metidas en la maleta, le rogaron al padre que la abriera un poquito. Él dijo que los visitantes eran muy feos. «Con una voz tan bonita no pueden ser tan feos.» Tanto insistieron que a las nueve abrió una rendija. Vieron a los bailadores y salieron.

En esa maloca había otro, Oá, la chucha. Llegó diciendo que venía a ayudarle a su primo a tomar las bebidas, pero venía a estorbar: cada vez que Ãgãmahsãpu se acercaba a las muchachas, corría a oír. Al final habló claro: nos las llevamos.

De madrugada, Ãgãmahsãpu les dio la cita y les explicó el camino. El de la derecha lleva al Uaupés y es el mío; ahí voy a dejar una pluma de la cola de la guacamaya roja. El de la izquierda es el Tiquié y lleva a la casa de Oá; ahí dejo una de guacamaya verde. Oá oyó todo.

El día señalado fue a la encrucijada a cambiar las plumas y se subió a un guamo a esperar. Llegaron las muchachas. La menor decía que era el camino de la derecha, como él lo había dicho; la mayor, que era el que tuviera la pluma roja. No quiso oírla y tomaron el de la izquierda. Oá bajó, volvió a poner cada pluma en su sitio y las siguió.

Llegaron a una casa tranquila donde una vieja hacía ollas y creyeron que era su abuela. Les dio de comer hormigas que apestaban y les dijo que se acostaran en la hamaca del nieto, de donde salieron volando moscas zumbando «oá, oá». Al amanecer se oyó el tambor de Ãgãmahsãpu, y Oá se puso a tocar el suyo, que sonaba «oá tü, oá tü», es decir, chucha, chucha. Las moscas, las hormigas y por último el tambor lo habían delatado. Se fueron antes de aclarar hacia donde sonaba el trocano.

Llegaron a la otra orilla del Uaupés y no había canoa. El martín pescador les sintió el olor y les dijo que habían estado en la casa de Oá; el patico que iba por el caapi hizo lo mismo. Sólo el caimán, que no olió nada, las pasó. En la maloca las hicieron entrar por la puerta de atrás y las lavaron con plantas olorosas.

Oá llegó detrás a reclamarlas. Antes de salir le había dejado su cuia a la abuela: si me matan, mi sangre volverá a esta cuia. Insistió todo el día y toda la noche. Al amanecer, Ãgãmahsãpu mandó a sus empleados, las garzas y los socós, que se lo llevaran al puerto e hicieran con él lo que quisieran, y lo mataron. La cuia amaneció llena de sangre y la vieja la convirtió en dos gavilanes reales.

Terminó su baile a las ocho de la mañana. Se bañó con las dos y la mayor le pidió que cantara. Dijo que sólo cantaba en día y hora ciertos. Ella insistió; la menor le dijo que no insistiera; insistió otra vez y cedió. Apenas dijo la primera palabra, los gavilanes lo agarraron y se lo llevaron.`,
    historia: `El capítulo encabeza la parte final del libro y va seguido, sin corte, de los ciclos de los Diroá y los Koáyea. La ceremonia que Ãgãmahsãpu viene haciendo tiene nombre en desana —Miubehari, también Mübuhañahani— y es el rito de distribución del umarí, la fruta comestible de una planta de la familia de las icacináceas. El nombre del personaje se glosa en la nota como «inambú mayor», «padre», «persona».

El libro no deja la historia sin explicación. La cierra con cuatro leyes de los antiguos sobre el noviazgo y con una frase que resume el mecanismo: el crimen siempre trae venganza y así va aumentando. No es un calendario ni una moraleja agrícola; es un caso de conflicto entre dos pretendientes que termina en dos muertes.

Lo narró Umusĩ Pãrõkumu, Firmiano Arantes Lana, nacido en 1927, kumu, baya y tuxaua del clan Kẽhíripõrã del río Tiquié, muerto en 1990. Lo escribió su hijo Tõrãmũ Kẽhíri, Luiz Gomes Lana, nacido en 1947, presidente de la UNIRT desde su fundación en 1990 y autor de los dibujos del libro junto con su primo Feliciano Lana. La edición de 1995, de UNIRT y FOIRN, se hizo a partir del manuscrito original revisado por Dominique Buchillet con la orientación del propio Luiz Lana, y añade mitos que la primera edición de 1980 no traía.

Los dos lugares que el relato señala están en Brasil: el puerto de Ãgãmahsãpu en el Uaupés, donde dicen que se ve la marca del escudo de Oá en una piedra, y el puerto de Oá en la Serra da Mucura, en el Tiquié, arriba del poblado de Fátima.`,
    versiones: `Lo que sigue a este episodio en el libro Kẽhíripõrã es el ciclo de los Diroá, y ahí se ve que la cadena no es exclusiva de este clan. La abuela de Oá les pide a los gavilanes la última pluma del ala de su nieto, la convierte en el inambú de hoy, y manda a su marido, una avispa grande, hasta la maloca de los Koáyea —las «jaguares de cuias»—, en la Cachoeira de los Jaguares, donde hoy está la misión de Iauaretê, a ver qué hacen con el cuerpo.

Los Wari Dihputiro Põrã tienen esa misma cadena con otros hilos. En su libro hay un capítulo en que los Diroá matan a los gavilanes de la abuela Chucha, y otro en que la abuela de los Diroá visita a sus parientes los Koá-yeá. La chucha, los gavilanes y los jaguares están, pero enganchados a otro héroe y en otro orden.

La diferencia práctica es que el libro del Tiquié le da a Ãgãmahsãpu capítulo propio y ceremonia propia del umarí, mientras que en la colección de Cucura el nudo de la venganza aparece dentro del ciclo de los Diroá y no bajo este nombre. Quien lea sólo uno de los tres libros creerá que la historia empieza donde su libro la empieza.

El igarapé Umarí, afluente del Tiquié, es una de las zonas donde viven los desana de Brasil, y le da nombre a la fruta que este capítulo reparte.`,
    similitudes: `El engaño de las señales cambiadas en la encrucijada —el pretendiente rechazado que intercambia las marcas del camino y desvía a las viajeras hacia su propia casa— es un recurso narrativo que circula ampliamente. Aquí está contado con dos plumas de guacamaya, una roja y una verde, y con dos ríos reales, el Uaupés y el Tiquié, que en ese tiempo, dice el texto, eran caminos.

El impostor delatado por su propio olor y por su propio tambor es la parte que no se puede resumir sin perderla: las moscas, las hormigas que apestan y el tambor que repite su nombre lo denuncian uno tras otro, y con eso el relato explica por qué las mujeres huelen distinto y por qué, en los días de fiesta, entran por la puerta de atrás de la maloca.

Las aves que anuncian tiempos son un lugar común comparativo en toda la cuenca. Lo que aquí tiene apoyo textual es más estrecho y más verificable: un jefe de aves que reparte una fruta concreta entrando casa por casa, y una ceremonia con nombre propio que, dicen los narradores, hacía que al año siguiente diera mucho umarí. El calendario no está enunciado como lista; está implícito en que el reparto se haga antes de que el árbol dé.`,
    leccion:
      "Una muerte llama a otra, y la cadena sigue más allá de quienes la empezaron.",
    sceneHorizontal:
      "Ãgãmahsãpu recorre varias casas junto al río mientras aves de colores anuncian frutos de umarí",
    sceneVertical:
      "un árbol de umarí une peces, lluvia y aves en un calendario circular de capas planas",
    researchNotes:
      "ADICIÓN DOCUMENTADA: se publica el núcleo de Ãgãmahsãpu y se dejan fuera los ciclos posteriores que requieren tratamiento propio.",
  }),
];

export default desanaDefinitions;
