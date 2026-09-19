function myth({ title, summary, tags, ...definition }) {
  const seoTitle = `${title} | Sikuani`;
  const focusKeywords = [title, "relatos Sikuani", ...tags.slice(0, 3)];
  return {
    ...definition,
    title,
    summary,
    tags,
    excerpt: summary,
    seoTitle,
    seoDescription: summary,
    focusKeywords,
  };
}

export const sikuaniDefinitions = [
  myth({
    slug: "historia-de-un-brujo",
    sourceKeys: [
      "villaPosse1993",
      "ortiz1982",
      "torres1994",
      "agudelo2015",
      "baquero1989",
      "ortizRezo1988",
      "queixalos1991",
    ],
    title: "El brujo y el águila enorme",
    summary:
      "Dos enemigos envían a un brujo hacia una laguna peligrosa; su conocimiento y sus transformaciones le permiten volver con vida.",
    tags: ["brujo", "águila", "yopo", "prueba"],
    mito: `Dos hombres querían quitarse de encima a un brujo. Le hablaron de una laguna lejos, que él no conocía, y le dijeron que allá había pescado. Lo mandaron a pescar seguros de que no volvía.

El brujo aceptó el viaje. Llegó a la laguna, vio que en efecto había peces y se puso a preparar la jornada, pero antes de meterse al agua sorbió yopo para ver con qué estaba tratando. Con el yopo encima reconoció el lugar. Cerca del agua había cuatro serpientes Kueima. No lo tomaron por sorpresa.

Después vio el águila. Era tan grande como un avión. Se le dejó caer encima. Para librarse del golpe el hombre fue cambiando de cuerpo: primero picure, después lapa, después lombriz. Cada figura le servía para escaparse de un ataque y para colocarse donde el ave no lo alcanzaba, y desde ahí buscó el ángulo para responder.

Disparó. La primera flecha no acabó la pelea. La segunda tampoco. La tercera le entró al águila y la tumbó.

Con el ave en el suelo se levantó un viento bravo, como un huracán, que arrancaba todo lo que encontraba. El hombre volvió a usar lo que sabía y se hizo pequeño: primero paja y después gusano, dos formas que el aire no podía llevarse. Esperó así hasta que el viento amainó.

Cuando cesó, cogió camino de vuelta a su casa. Antes de que él llegara, la maraca que había dejado se puso a bailar sola y anunció que venía. La gente no creyó lo que contaba, así que fueron a ver. Allá estaba el águila enorme tirada, y entonces entendieron que había pasado la prueba que le prepararon sus enemigos.

Hubo después una reunión con yopo y kapi. Los dos que lo habían mandado a la laguna se emborracharon y quedaron en evidencia delante de todos. Él no cobró de la misma manera. Dijo solamente que había vuelto porque conocía su oficio y porque tenía con qué enfrentar lo que lo estaba buscando para acabarlo.`,
    historia: `Historia de un brujo la relató Pedro Martínez en 1974, y Eugenia Villa Posse la reprodujo en 1993 en las páginas 279 y 280, remitiendo al corpus que Francisco Ortiz publicó en Tunja en 1982.

Lo que el cuento da por sabido —que un hombre sorba yopo antes de meterse a una laguna desconocida y que con eso vea lo que allí hay— está documentado en detalle y con maestros nombrados. William Torres lo aprendió desde abril de 1993 en el resguardo Wakoyo, cerca de Puerto Gaitán, con don Rafael Vicente Yepes Kasulú, chamán y capitán de la comunidad de Walabó 1, y con su hermano don José Antonio Kasulú, chamán principal del resguardo, que vive en Chaparralito. Don Rafael fue enfático en que del yopo y del capi sólo se aprende usándolos bajo la orientación de los chamanes, y le señaló el árbol de yopo que da sombra a casi todo el patio de su rancho. Su costumbre es mascar primero bastante raíz asada de capi y sorber el yopo después.

Los nombres cuentan. Al sorbedor de yopo se le dice dopatubinü; al que ya recibió los poderes, penajorobinü, y también Tsamani, por el chamán ancestral. Los poderes se llaman puakari y se entregan cuando el chamán maestro ve que el iniciado practica una ética que no pasa por lo maléfico. Los cantos-conjuros con que se cura se llaman waji y los enseñó Tsamani durante los doce años que su familia bailó antes de subir al cielo.

El mismo don José Antonio Kasulú, escrito Kasulúa, aparece como narrador en dos relatos que Edwin Agudelo compiló en abril de 2004 y en enero de 2005. Es la misma cadena de enseñanza, diez años después.`,
    versiones: `La palabra «brujo» viene del título y de la traducción publicados. No se reemplaza por un término sikuani que la fuente no da, pero conviene saber que los términos existen y que no significan lo mismo: dopatubinü nombra al que sorbe yopo, penajorobinü al que ya tiene poderes, y a los chamanes se les dice también Tsamani.

De dónde salió el yopo hay dos versiones en el material, y el artículo que las trae las separa expresamente. La sikuani, escrita bajo la enseñanza de los hermanos Kasulú: Yuwaisi le notaba a su tío-suegro Yaniluanü un destello distinto en los ojos y siempre un resto de polvo carmelito en la nariz; le preguntó, y el viejo le dijo que el dopa estaba en la vagina de su suegra, Yaniluawa, que era la dueña. Tanto insistió que ella aceptó, con la condición de que metiera sólo la puntica; lo metió todo, se emborrachó, perdió el control y su cuerpo se volvió gavilán primito. Volaba y bajaba a vomitar, y en cada sitio donde vomitó brotó un árbol de yopo. La otra es cuiba, y así la marca Ortiz: un sobrino curioso por una mujer que vomitaba de noche insiste hasta copular con ella, se emborracha, se va sin rumbo y se convierte él mismo en el árbol de yopo. Vecinos documentados de la misma familia lingüística, no la misma gente.

Las metamorfosis en cadena tampoco son invención de este cuento. En la Namokaikaba Palibaisi que firma Bernardo Gaitán, un centenar de brujos sorben yopo tres días y dos noches sin comer, se vuelven invisibles y después, huyendo, se convierten sucesivamente en gabanes, en gente otra vez y por último en tijeretas.`,
    similitudes: `Que un especialista escape mudando de cuerpo y que un ave enorme se coma a la gente son motivos de ida y vuelta por toda la Orinoquia, y por eso aquí sólo se nombran paralelos que una fuente citada sostenga.

El más cercano está dentro del propio corpus sikuani. En la Namokaikaba Palibaisi, los brujos vuelan convertidos en vampiros, toman tierra y recobran su figura, se meten debajo de la tierra, caminan por abajo, salen por otro lado y acaban dispersándose como tijeretas para despistar a quienes los siguen: es la misma técnica de este cuento, cambiar de cuerpo para cambiar de posición. En el ciclo del árbol de los alimentos, Tsamani se sopla el cuerpo embriagado de yopo para volverse mosquito y meterse en el yopo que va a sorber el dueño de las hachas, y en otro relato se vuelve lagartija para copiar los signos del bastón del rayo. La transformación es, en todos, un procedimiento del oficio y no un prodigio suelto.

El águila desmedida tiene su lugar propio. En el ciclo de Kuwei, después de que las dos águilas suben al señor de las tinieblas, a una de ellas le sigue gustando la carne de gente y baja de noche al caserío hasta que Kuwei la mata; al caer aplasta el monte y así se abren las sabanas. Aquí no se abre nada: cae, se levanta el viento y el hombre se hace paja.`,
    leccion:
      "Un oficio aprendido a fondo convierte la trampa ajena en la prueba que lo confirma.",
    sceneHorizontal:
      "un águila enorme desciende sobre una laguna llanera mientras un viajero sostiene arco y flechas entre serpientes simbólicas",
    sceneVertical:
      "una maraca se mueve frente a una casa al regresar el viajero, con pequeñas siluetas de picure, lapa y lombriz como memoria de sus transformaciones",
    researchNotes:
      "RELATOR: Pedro Martínez, 1974. GÉNERO: la compilación lo presenta entre modalidades de literatura oral distintas del mito.",
  }),
  myth({
    slug: "historia-de-un-tigre",
    sourceKeys: [
      "villaPosse1993",
      "ortiz1982",
      "men2015",
      "ortizRezo1988",
      "ortiz1976",
      "queixalos1978",
      "baquero1989",
    ],
    relatoCorto:
      "El texto completo no está en disco. Sólo se conserva el resumen heredado de una pieza breve, y estirarlo hasta las trescientas palabras obligaría a inventar escenas que la fuente no da.",
    title: "El jaguar y los dos hermanos",
    summary:
      "Una disputa familiar empuja a una mujer al camino; el regreso de su esposo revela una pérdida causada por el jaguar y por la hostilidad.",
    tags: ["jaguar", "familia", "camino", "duelo"],
    mito: `Dos hermanos vivían cerca, cada uno con su familia. El menor salió a cambiar yopo y lancetas y se demoró. Su mujer se quedó en casa de la suegra con un hijo todavía de brazos.

En esos días los niños de las dos mujeres se pelearon, como se pelean los niños. La mujer del hermano mayor le reclamó a su cuñada con dureza y no se quedó con nada adentro: le hizo sentir que allí ya no tenía dónde estar. La otra no contestó. Al día siguiente alzó al niño y salió sola a buscar a su marido.

En el camino le salió un tigre. La mató y se la comió ahí mismo. Al niño lo dejó vivo, y antes de irse le habló, y el niño se quedó solo al lado de lo que quedaba de su madre.

El marido venía de regreso por ese mismo camino y oyó un llanto. Fue siguiéndolo hasta que dio con el hijo. Le dio agua. Ya era tarde: el niño se le murió.

El hombre se puso entonces a mirar el suelo. Encontró las huellas del animal y se fue detrás de ellas. Lo alcanzó, lo mató, y después volvió a donde estaban los cuerpos y enterró juntos a su mujer y a su hijo.

Cuando llegó a la casa preguntó por qué su mujer había salido sola a un camino. Nadie contestó de una vez. La cuñada terminó reconociendo que había sido su reclamo el que la echó de allí. El hombre la mató también, y ahí se acaba.`,
    historia: `Historia de un tigre la relató Rita Gaitán en 1974. Eugenia Villa Posse la reproduce en la página 281 y remite al corpus que Francisco Ortiz publicó en 1982 con cincuenta y ocho relatos, registrados en sikuani y en español. Rita Gaitán narró cuatro de las siete piezas que Villa Posse seleccionó; las otras tres son de Pedro Martínez.

El detalle con que arranca el cuento no es decorativo. Que un hombre salga a cambiar yopo y lancetas y se demore describe una economía real: Nancy Morey estableció, con fuentes documentales, que en los Llanos existió un extenso sistema comercial y que hacia el siglo XVI los guahibos, los achaguas y los sálivas comerciaban intensamente dentro y fuera de la Orinoquia usando la quiripa como medio de intercambio, con cinco mercados especializados identificados en toda el área. El marido de esta historia está en un viaje de ese tipo, y su ausencia es lo que deja sola a la mujer.

El animal que la mata está, como en todo el corpus, en un régimen donde el reparto entre lo animal y lo humano todavía no está cerrado. En la versión sikuani del árbol de los alimentos que recogió Queixalós en 1972, el narrador se detiene expresamente a aclararlo: el venado, el tucán, el mico, el agutí, la lapa, todos eran gente antes; el tapir era un ser humano; todos absolutamente. Que el tigre le hable al niño antes de irse no es un adorno del traductor: es lo que ese régimen permite.`,
    versiones: `«Tigre» es la palabra de la edición y aquí se lee jaguar, que es lo que nombra en los Llanos. Los sikuani, sin embargo, distinguen varios felinos por su nombre, y el rezo del pescado que transcribió Ortiz los nombra a la vez en una fórmula corta que se le sopla a la muchacha para que no sea dormilona: ojos de cunaguaro, ojos de tigre awakana, ojos de búho, ojos de tigre tumatsina. En el mismo rezo se invoca a Kuliwakubeni, la gente de kuliwako, el tigre de la luna, abuelo de los felinos. Y entre los emblemas de banda regional que Ortiz registró en 1976 hay uno cuyo animal es Felis onca, la gente del tigre, que en el trato con los blancos tomó el apellido León. Ninguna de esas precisiones está dentro de esta transcripción; se anotan porque muestran que «tigre», en el texto publicado, es una simplificación de castellano.

La colección conserva por separado este relato y Cuento del tigre, y hace bien. Compartir animal no basta para fundirlos: uno sigue una partida, una muerte en el camino y una venganza dentro de la casa; el otro ocurre dentro de una vivienda cerrada y termina con el rescate de una mujer y sus hijos por el techo. Las protagonistas son distintas, el desenlace es opuesto y el narrador no es el mismo.`,
    similitudes: `Las cadenas de venganza dentro de una familia son un armazón muy repartido, y la comparación sólo vale contra relatos que existan y tengan dueño. En el corpus sikuani hay dos que la sostienen.

Sikiriri, el hambriento, que publicaron los docentes de Awariba y Domoplanas, es el más duro: un hombre de un grupo de caníbales se lleva de cacería a los hijos de su hermana, uno por uno, los mata y los asa, y vuelve solo a la casa diciendo que el muchacho se devolvió. El tercero, el mayor, va prevenido, encuentra en las cenizas los pies y las manos de sus hermanitos, se encarama en un árbol y escapa. Cuando cuenta lo que vio, los parientes salen enfurecidos, lo encuentran dentro de un lago y lo matan. Ahí también el daño entra por dentro de la parentela y ahí también el cierre es una muerte más.

El otro es El hombre pájaro, del mismo libro: los cuñados de Makoko se ponen de acuerdo, lo convidan a una fiesta, lo emborrachan y le cortan la cabeza, y cuando después vienen por las mujeres, ellas les reclaman por haber matado a su marido y se niegan a salir de su casa. Lo que aquí se dice en un reclamo, allá se hace en un convite.

De esta versión es propio lo demás: el intercambio de yopo y lancetas, la pelea de los niños, el llanto oído desde el camino y el reconocimiento final de quién dijo qué.`,
    leccion:
      "Una palabra que expulsa a alguien del techo común abre un camino donde nadie vigila.",
    sceneHorizontal:
      "un sendero atraviesa la sabana y el bosque de galería, con una mujer cargando a un niño y la silueta distante de un jaguar entre los árboles",
    sceneVertical:
      "dos hermanos se encuentran junto a un camino marcado por huellas de jaguar, con una casa llanera al fondo y atmósfera de duelo",
    researchNotes:
      "RELATORA: Rita Gaitán, 1974. CAUTELA: la violencia final se presenta como desenlace narrativo, nunca como práctica cultural normativa.",
  }),
  myth({
    slug: "kawiri-monae",
    sourceKeys: [
      "villaPosse1993",
      "ortiz1982",
      "ortiz1976",
      "ortizRezo1988",
      "ortizCesteria1988",
      "men2015",
      "queixalos1978",
    ],
    relatoCorto:
      "El texto completo no está en disco; sólo el resumen heredado de una pieza breve, y no hay con qué extenderlo sin agregar escenas que la fuente no da.",
    title: "Kawiri Monae y la mujer ausente",
    summary:
      "Una mujer recién parida desaparece con los Kawiri Monae y vuelve años después, cuando su nueva familia la conduce hasta los suyos.",
    tags: ["Kawiri Monae", "retorno", "familia", "bachacos"],
    mito: `Una mujer acababa de tener a su hijo y estaba apartada, en una casita separada de la otra, como se hace en esos días. Allí llegaron los Kawiri Monae. Se la llevaron con el niño, y en la casa nadie supo para dónde.

Los parientes salieron a buscarla. Recorrieron los alrededores, bajaron por los caños, miraron en los sitios a los que ella solía ir, y la fueron llamando a gritos por el monte. No les contestó nadie.

Ella sí los oía. Los veía pasar cerca, oía que la estaban nombrando, y no conseguía responderles ni hacerse ver por ellos. Se quedó donde estaba, con el que se la había llevado, y se fue con él a su tierra. Allá comía bachacos. Allá crió al niño, que fue creciendo.

En la casa dejaron de buscar. Pasó un año y pasaron otros. Nadie sabía si estaba viva ni dónde, y el niño que se había perdido con ella seguía siendo, para los que se quedaron, el recién nacido de aquella semana.

Un día el hombre con el que vivía decidió devolverla. Se pusieron en camino los dos, con el muchacho, y en algún punto del trayecto él le dijo que cerrara los ojos y no los abriera hasta que le avisara. Ella los cerró. Cuando le avisó, los abrió y estaba cerca de su gente.

Los que la habían buscado la vieron llegar y la reconocieron. Estaba viva. Y el que venía con ella no era el bebé que se había perdido sino un muchacho crecido, que ya caminaba solo. Ella les contó entonces lo que le había pasado: que sí los había visto buscándola, que los había oído llamarla, que había estado ahí, y que en ese tiempo no podía contestarles.`,
    historia: `Kawiri Monae lo relató Rita Gaitán en septiembre de 1980. Es el registro más tardío de las siete piezas que Eugenia Villa Posse reprodujo en 1993, en la página 282, remitiendo al corpus de Francisco Ortiz de 1982.

La casita aparte donde está la mujer al empezar el cuento existe y tiene nombre. Francisco Ortiz describe la reclusión femenina sikuani: se levantaba una cabaña aislada con paredes de esterilla, tulima, que le da su nombre, tulimabo; se llama también yalipubo, de yalipu, la palabra que usan los chamanes para la menstruación, y se construía apartada del pueblo. Lo que ese tejido cierra son los ainawi, los dueños y abuelos de los animales y de los seres del agua, que en esos días acechan a las muchachas para raptárselas. Que la mujer de este cuento esté sola en una casa separada no es un dato de ambiente: es exactamente la situación que el ritual sikuani trata como peligrosa.

Los que llegan también tienen ficha. Cuando Ortiz levantó en Mochuelo, en 1972, la lista de emblemas de las bandas regionales guahibo, káwirri figura entre ellos con la glosa «caribe», y de ese grupo sus informantes decían tres cosas: que son antropófagos, que hablan muy poco guahibo y que son muy trabajadores y cultivan grandes conucos. Hay un segundo asiento en la misma lista, jwameto kawirri, glosado «luna caníbal». Y en 2015, el relato de Sikiriri que publicaron los docentes de Awariba y Domoplanas usa kawiriwi para nombrar al grupo de caníbales que se come el cadáver del antropófago.`,
    versiones: `La compilación glosa Kawiri Monae como «caribes» y kawiri como duende o caribe. La ficha conserva el nombre sikuani y describe sólo lo que el relato hace hacer a los personajes, porque las dos lecturas tienen apoyo y ninguna cierra a la otra.

La lectura histórica tiene de dónde agarrarse: los docentes de Awariba y Domoplanas escriben que los sikuani resistieron los intentos reduccionistas de los misioneros y los conquistadores y también «las incursiones de grupos indígenas caribes». La lectura de otro ámbito también: Ortiz advierte, al presentar su lista de emblemas, que el sistema permite ubicar tanto a grupos culturales vecinos —piapoco, sáliva— como a grupos que de otra manera llamaríamos míticos pero que tienen, en su opinión, un carácter propiamente teórico, y añade que la existencia real de los grupos particulares se irá comprobando a medida que avance el conocimiento de la cultura guahibo. Kawirri está en esa lista, y esa ambigüedad no es un defecto del relato: es la del sistema que lo nombra.

De la comida que ella recibe allá tampoco conviene sacar conclusiones rápidas. El bachaco, pübü, es la hormiga cortadora de hojas, y en el corpus sikuani no es un alimento degradado ni una rareza: es la que carga las astillas del árbol de los alimentos durante toda una noche y hace posible que caiga, y Matsuludani la llama «nuestros abuelos» al convocarla. Que la mujer coma bachacos en la tierra de los Kawiri Monae describe otro régimen, no un castigo.`,
    similitudes: `El paralelo más exacto está en el propio corpus y se llama Bakatsoloba. Los docentes de Awariba y Domoplanas lo publicaron como La joven sirena, y Francisco Ortiz la había registrado antes desde el otro lado, en el rezo del pescado, donde se la invoca como «la muchacha raptada por los peces», esposa de Itsaruwa, el jefe máximo de los pescados y el que preside la ceremonia de iniciación en el mundo acuático; en el ritual de Getsemaní fue Rita, una tía de la muchacha, quien contó cómo fue que se la llevaron, justo antes de que empezara el rezo.

La estructura es la misma que aquí. Una joven queda sola en la choza durante su primera menstruación, acostada en un chinchorro en la cumbrera, mientras la familia se va al conuco. Los seres del agua se enteran de que quedó sola y llegan. El pez colirrojo entra en figura de hombrecito con sombrero negro y un pañuelo rojo al cuello. El pez agujón alcanza la cumbrera de un salto. Le echan humo de tabaco en los oídos y en los ojos, la raya rompe una tinaja y con esa agua se forma un riachuelo por donde se la llevan, Vichada abajo hasta el Orinoco, bailando con ella en los pozos hondos. De ahí que el rezador vaya nombrando uno por uno a los espíritus de cada especie de pez.

Las dos historias empiezan igual: una mujer sola en la casa apartada y unos que vienen por ella. Se separan en el final. A Bakatsoloba no la devuelven; a esta sí, y vuelve con un hijo crecido y con la explicación de por qué callaba.`,
    leccion:
      "El tiempo de quien vuelve no coincide con el de quienes lo estuvieron buscando.",
    sceneHorizontal:
      "una familia busca junto al bosque de galería mientras una mujer con un niño los observa desde un sendero separado por capas de vegetación",
    sceneVertical:
      "una mujer cierra los ojos guiada de regreso por una figura discreta, y al fondo aparece su familia cerca de una casa llanera",
    researchNotes:
      "RELATORA: Rita Gaitán, septiembre de 1980. LÉXICO: se mantiene Kawiri Monae y se registra la glosa sin imponer una ontología única.",
  }),
  myth({
    slug: "la-mujer-sarnosa",
    sourceKeys: [
      "villaPosse1993",
      "ortiz1982",
      "ortizCesteria1988",
      "ortizRezo1988",
      "torres1994",
      "men2015",
      "ortiz1976",
    ],
    relatoCorto:
      "El texto completo no está en disco; sólo el resumen heredado de una pieza breve, y estirarlo hasta las trescientas palabras obligaría a inventar.",
    title: "La mujer y el áinawi",
    summary:
      "Abandonada por su esposo, una mujer recibe ayuda de un áinawi invisible, sana y elige no volver con quien la dejó.",
    tags: ["áinawi", "abandono", "sanación", "mundo subterráneo"],
    mito: `Un hombre dejó a su mujer en la cabecera de un caño y se fue. Ella tenía sarna. Quedó sola allá, sin canoa y sin camino, y sin nadie a quien pedirle nada.

Del monte le salió otro hombre. No llegó con las manos vacías: le trajo jabón, un vestido, perfume y un peine. Con eso ella se lavó, se curó la piel y volvió a quedar como era antes.

El que le llevó las cosas era un áinawi, uno de los que no se dejan ver. Se quedó con ella y se hizo su compañero, y así vivieron en la cabecera del caño.

Al cabo del tiempo volvió el primer marido. La encontró sana y limpia y quiso llevársela otra vez. Ella se negó. Le recordó que la había dejado allí enferma y sin nada, y dijo que se quedaba con el que la había atendido.

Con la nueva unión el tiempo dejó de correr como corre. Ella quedó embarazada y dio a luz a los seis días. El niño creció rápido. Cuando ya estaba crecido, su padre se lo llevó consigo debajo de la tierra, que es donde él vivía.

Ella no bajó. Y si la mujer hubiera seguido al áinawi, la gente viviría debajo de la tierra. Como no lo siguió y se quedó arriba, la gente vive encima. El hijo sí cruzó, y por eso el camino entre los dos lados quedó abierto por donde pasó él.`,
    historia: `La mujer sarnosa la relató Rita Gaitán en 1977, y Eugenia Villa Posse la reproduce en las páginas 282 y 283, remitiendo al corpus de Francisco Ortiz de 1982. El título documental describe una enfermedad y suena despectivo fuera del relato; por eso la página se titula por la protagonista y por el ser que la atiende, y el nombre de archivo se conserva aquí.

De los áinawi hay más documentación que de casi cualquier otra cosa en el corpus, y no dicen todos lo mismo. Ortiz los define desde el ritual: son los dueños y abuelos de los animales y de los seres del agua, y en los días de menstruación acechan a las muchachas para raptárselas; por eso las paredes de esterilla de la casa de reclusión les cierran el paso, por eso el banquito tallado donde la muchacha apoya los pies lleva el diseño iwidakami, que tiene un efecto defensivo contra ellos, y por eso se consigue resina de caraño para muquiarla y defenderla.

William Torres lo escribió de otro modo, como se lo enseñaron los hermanos Kasulú en el resguardo Wakoyo. Allí el ainawi no es un ser sino una potencia: una fuerza anómala e inmaterial que pueden tener los animales, capaz de enfermar y matar a una persona chupándole la energía vital si al cazar, pescar y consumir esa especie no se hacen los rezos que la contrarrestan. La adquirieron los antiguos que cayeron de la escalera de flechas y quedaron hechos animales. Los animales domésticos no la tienen y por eso se comen sin precaución. Y también la tienen los montes, los ríos, los arroyos, las lagunas y las cascadas.

Entre una definición y otra queda el hombre que sale del monte con un peine.`,
    versiones: `La glosa de la edición traduce áinawi por «invisible», y eso es lo que la página conserva en el Relato, porque es la palabra del texto. Pero «invisible» no es lo que dicen las otras dos definiciones en disco: para Ortiz son dueños y abuelos, es decir alguien; para Torres es una potencia, es decir algo. La ficha las deja a las tres en pie y no elige, porque elegir sería escribir la etnografía que falta.

El sentido de la relación también cambia según de dónde se mire. En el ritual documentado, lo que los áinawi hacen con una mujer sola es raptarla: consumir pescado no rezado provoca, dice Ortiz, el rapto del individuo al mundo subacuático, y todo el aparato del rezo está montado para impedirlo. En este relato no hay rapto. Hay un cortejo con objetos —jabón, vestido, perfume, peine—, una curación, y una mujer que después se niega a volver con el que la abandonó y se queda por decisión propia. Es el mismo encuentro, con el signo cambiado.

Dónde viven no está tampoco resuelto. Aquí el áinawi vive debajo de la tierra y se lleva al hijo para allá. En Ortiz y en Torres los áinawi están en los animales, en el agua y en los lugares —montes, ríos, cascadas—, no en un mundo de abajo. La diferencia se conserva y no se armoniza. La figura del ainawi aparece además, en la lista de emblemas que Ortiz levantó en 1972, como uno de los nombres alternos del grupo jamorúa, lo que indica que la palabra circula también fuera de lo ritual.`,
    similitudes: `El paralelo exacto, y con dueño, es Bakatsoloba. Los docentes de Awariba y Domoplanas lo publicaron como La joven sirena y Ortiz lo había registrado antes desde el rezo del pescado, donde a Bakasolowa se la invoca como «la muchacha raptada por los peces» y se la da por esposa de Itsaruwa, el jefe máximo de los pescados, el que preside la iniciación en el mundo acuático. Allí una muchacha sola en la choza es llevada por los seres del agua Vichada abajo hasta el Orinoco, y sus padres vuelven del conuco y no pueden hacer nada. Aquí la mujer también está sola, también aparece alguien de otro ámbito, y también termina viviendo con él; la diferencia es que ella escoge y que no la llevan a ninguna parte contra su voluntad. Comparado con Bakatsoloba, este relato es el mismo encuentro leído al derecho.

El segundo paralelo está en el mismo libro de 2015. En La historia de Lekonaiwa, una mujer con poderes que come ají y arranca yuca sin esfuerzo físico se casa con un hombre corriente y despierta la envidia de las vecinas, y una de ellas la mata. También ahí una unión con alguien que no es de este régimen altera lo ordinario; allá el desenlace es la muerte, aquí es un hijo que baja y una humanidad que se queda arriba.

Y en El hombre pájaro, también de 2015, las dos mujeres de Makoko se van al río, le enseñan a nadar al hijo y un día se convierten en delfín rosado y en manatí, y el niño en güío, y se quedan cada una con un río. También allí lo que decide el desenlace es una mujer que no se deja sacar de donde está.`,
    leccion:
      "Quien recibe cuidado en el abandono no queda en deuda con quien lo provocó.",
    sceneHorizontal:
      "una mujer junto a la cabecera de un caño recibe un peine, una tela y jabón de una figura apenas visible entre árboles llaneros",
    sceneVertical:
      "una madre permanece sobre la tierra mientras un niño sigue a su padre hacia un sendero subterráneo sugerido por capas planas",
    researchNotes:
      "RELATORA: Rita Gaitán, 1977. TÍTULO: se moderniza el nombre visible sin borrar el título de archivo.",
  }),
  myth({
    slug: "el-tigre",
    sourceKeys: [
      "villaPosse1993",
      "ortiz1982",
      "ortizRezo1988",
      "ortizCesteria1988",
      "ortiz1976",
      "baquero1989",
      "men2015",
    ],
    relatoCorto:
      "El relato no tiene fuente en disco ni fuera de ella: el resumen heredado es todo lo que hay, y no da más de lo que aquí se cuenta.",
    title: "El jaguar en la casa Tsorueto",
    summary:
      "Una mujer descubre un jaguar dentro de una casa Tsorueto, salva a sus hijos por el techo y avisa a los hermanos de su esposo.",
    tags: ["jaguar", "Tsorueto", "rescate", "casa"],
    mito: `Un hombre salió de viaje con su mujer y sus hijos a visitar a la familia. Llegaron a una casa Tsorueto, la casa de sueño. Estaba cerrada por todos lados para que no se metieran los insectos, y por fuera no se oía nada adentro. Parecía vacía.

No lo estaba. Adentro había un tigre. En la oscuridad se le alcanzaban a ver los ojos, y la mujer fue la que los vio. Se lo dijo al marido. El hombre miró hacia donde ella le señalaba y no le dio importancia: dijo que sería otra cosa, que ya era tarde para seguir camino, que se quedaban ahí. Se acomodaron todos.

En algún momento de la noche el animal se le arrimó a la mujer y le empezó a lamer el cuerpo. Ella no gritó. Entendió que lo que había visto era lo que era, y que no iba a alcanzar a levantar a nadie a tiempo. Pensó primero en los niños. Los fue alzando uno por uno y los pasó por la parte alta del techo, cerca del caballete, y por ahí los sacó y salió detrás de ellos.

Desde afuera oyó lo que pasaba adentro. El tigre atacó al marido y se lo comió.

La mujer y los niños se pusieron a gritar pidiendo auxilio. Los hermanos del muerto oyeron los gritos y llegaron a la casa. No entraron. Taparon las entradas para que el animal no pudiera salirse por ninguna parte y le prendieron fuego a la construcción. El tigre se quemó adentro. Afuera quedaron la mujer y los hijos que ella había alcanzado a sacar por el caballete.`,
    historia: `Cuento del tigre lo relató Pedro Martínez en 1972, y es el registro más temprano de las siete piezas sikuani que Eugenia Villa Posse reprodujo en 1993, en las páginas 283 y 284, remitiendo al corpus que Francisco Ortiz publicó en 1982 con cincuenta y ocho relatos. La compilación informa que fueron registrados en sikuani y en español.

El tigre que aparece aquí es el jaguar, y en la documentación sikuani no es un animal cualquiera. Ortiz anotó, entre las bandas regionales del sistema de emblemas guahibo, un grupo cuyo emblema es Felis onca, la gente del tigre, que en el trato con los blancos adoptó el apellido León por metonimia del emblema. En el rezo del pescado que el mismo Ortiz transcribió se invoca a Kuliwakubeni, la gente de kuliwako, el tigre de la luna, abuelo de los felinos, y en una pausa del rezo se le sopla a la muchacha una fórmula corta para que no sea dormilona en la que se nombran los ojos del cunaguaro, los ojos del tigre awakana, los ojos del búho y los ojos del tigre tumatsina. Y Baquero registra que Kajuyali, el hijo de Kuwei al que le cortan la pierna, se considera jaguar por llamarse yavi o yali, y que es entre los guahibos el creador del chamanismo.

Nada de eso está dentro de este cuento. Está alrededor: es el vecindario en el que un narrador de 1972 podía poner a un tigre dentro de una casa sin explicar nada más.`,
    versiones: `El nombre Tsorueto y su traducción, «casa de sueño», pertenecen al texto publicado y aquí se conservan tal cual. La fuente describe una casa cerrada contra los insectos y no da más: no permite convertirla en modelo de vivienda ni en escenario ceremonial.

Sí hay, en cambio, casas cerradas documentadas con nombre propio en la etnografía sikuani, y no son la misma. Ortiz describe el tulimabo, la cabaña de reclusión que se levantaba para la muchacha en su primera menstruación, con paredes de esterilla, tulima, que le dan el nombre; se llama también yalipubo, de yalipu, la palabra que usan los chamanes para la menstruación, y se construía apartada del pueblo. Lo que ese tejido cierra no son insectos: cierra el paso a los ainawi, los dueños y abuelos de los animales y de los seres del agua. La coincidencia es de forma —una casa tapada, alguien adentro, algo que quiere entrar— y por eso se anota como contraste y no como identificación.

Esta pieza tampoco se funde con Historia de un tigre. Allí el felino mata a una mujer en un camino y el relato sigue el duelo del esposo; aquí la mujer está dentro de una vivienda, evacua a los niños por el techo y consigue que la ayuda llegue. Comparten animal, no argumento, y la colección las conserva separadas.`,
    similitudes: `Un depredador escondido en la casa es un armazón que se repite en muchas literaturas, y la comparación sólo sirve si el término comparado existe y tiene dueño.

En el propio corpus sikuani hay dos. El primero es Bakatsoloba, la joven sirena, que publicaron los docentes de Awariba y Domoplanas y que el rezo del pescado de Ortiz nombra como «la muchacha raptada por los peces»: la familia se va al conuco y deja sola a la muchacha en la choza; los seres del agua, sabiendo que quedó sola, llegan a la casa; el pez colirrojo entra en figura de hombrecito con sombrero negro y pañuelo rojo y le pregunta al pavón que se está asando en la troja dónde está la muchacha, y el pavón contesta que ha oído ruidos en la cumbrera pero que no ve, porque está ciego. También ahí lo que decide es quién mira y quién no.

El segundo es Sikiriri, el hambriento, del mismo libro: el peligro no viene del monte sino de adentro de la casa y de la propia parentela, y termina con los parientes rodeándolo y matándolo, igual que aquí los hermanos rodean la casa.

Lo que no se repite en ninguno de los dos es la salida por el caballete. Esa es de este cuento: los niños pasados por la parte alta del techo antes de que la casa se cierre por última vez, ahora desde afuera.`,
    leccion:
      "Quien mira de frente lo que otro prefiere ignorar todavía alcanza a sacar a los suyos.",
    sceneHorizontal:
      "una casa Tsorueto cerrada al anochecer con dos ojos de jaguar visibles en el interior y una mujer guiando niños hacia el techo",
    sceneVertical:
      "niños descienden desde el caballete mientras familiares se acercan por la sabana y la silueta del jaguar queda dentro de la casa",
    researchNotes:
      "RELATOR: Pedro Martínez, 1972. DISTINCIÓN: este cuento no se fusiona con Historia de un tigre.",
  }),
  myth({
    slug: "la-danta-y-el-terecay",
    sourceKeys: [
      "villaPosse1993",
      "ortiz1982",
      "ortizCesteria1988",
      "ortizRezo1988",
      "ortizQueixalosOrnitologia",
      "ortiz1976",
      "men2015",
    ],
    title: "La danta y el terecay",
    summary:
      "Tras la muerte de una anciana, un terecay sigue durante años el rastro de la danta hasta encontrar una forma de vengarla.",
    tags: ["danta", "terecay", "anciana", "rastreo"],
    mito: `Una anciana cuidaba animales. Un día, conversando, comentó delante de todos que el hígado de danta era sabroso. La danta la oyó.

No dijo nada entonces. Al cabo de un tiempo se le acostó de un modo que la mujer creyera que podía alcanzarle el hígado metiendo el brazo por una abertura del cuerpo. La anciana metió el brazo. El animal la agarró ahí mismo, la mató y se la llevó.

Un terecay se quedó sin abuela. Empezó a buscarla. Preguntaba por ella donde llegaba y seguía los indicios que iba encontrando por el territorio, y así fue andando de un lado a otro. Lo que le dijo la verdad fue un excremento: por ahí supo que la danta había sido.

Saberlo no le sirvió de mucho al principio, porque no la encontraba. Pasaron años y el terecay siguió detrás del rastro. La búsqueda le llevó más tiempo del que le habría llevado cualquier respuesta rápida, y no la soltó.

Cuando por fin estuvo cerca de la danta no se le fue encima. Se le acercó despacio y le pidió orina, para beber y para calentarse el caparazón. La danta accedió. Con esa petición la distancia entre los dos quedó en nada, y fue ahí, con el animal quieto, cuando el terecay le mordió los genitales y no soltó.

La danta salió corriendo para el agua. Se tiró con la tortuga todavía prendida y trató de zafarse por debajo de la superficie, dando vueltas. En una de esas metió la cabeza entre una horqueta que estaba sumergida y quedó trancada ahí. No pudo sacarla y se ahogó. El terecay se soltó y salió.

Después se fue a donde los nietos humanos de la anciana. Les contó que había encontrado al que la mató y que ya había cobrado por ella.`,
    historia: `La danta y el terecay la relató Rita Gaitán en 1973. Eugenia Villa Posse la reproduce en las páginas 284 y 285, remitiendo al corpus que Francisco Ortiz publicó en 1982.

El terecay es una presencia cotidiana y también una figura de pensamiento entre los sikuani. Ortiz describe el calendario: durante el verano, que es la época de mayor abundancia, se recogen huevos de tortuga terecay y charapa, se pesca con barbasco y con trampas en las lagunas y los caños, y la cacería de animales mayores como la danta y el venado se facilita porque el agua se reduce a pocos puntos. Terecay y danta no son dos animales cualesquiera: son las dos presas de la misma estación.

La tortuga también está escrita. En la cestería sikuani cada «pinta» tiene nombre y es un ícono con valor convencional; los propios sikuani traducen el término itane como «letra». Entre los diseños que Ortiz recogió figura ikuli juma itane, «pinta pecho de terecay», y la Cruz del Sur es, en la astronomía sikuani, la Cruz de la tortuga charapa. El diseño del terecay se lo indicaron a Ortiz los amorúa de Agua Clara; el amorúa, según el trabajo que el mismo Ortiz firmó con Francisco Queixalós, es el habla de los hamorúa-momowi, «nietos del oso perezoso», una banda regional guahibo sin diferenciación lingüística notable. Es decir: vecinos de dentro de la misma familia, y se anota como tal.

La danta, por su parte, es uno de los emblemas de banda que Ortiz registró en Mochuelo en 1972, y sigue siendo uno de los clanes que los docentes de Awariba y Domoplanas enumeran en 2015.`,
    versiones: `La fuente no explica si el parentesco entre la anciana y el terecay debe leerse como filiación literal, como tratamiento afectivo o como una relación entre especies, y la ficha no lo decide. Lo que sí se puede decir es que en el corpus sikuani el trato de abuelo cruza la frontera de la especie con toda naturalidad: el rezo del pescado que transcribió Ortiz invoca uno tras otro al «abuelo de danta», al abuelo de la nutria, al abuelo de las garzas, al abuelo de los caimanes, y llama a Tsawaliwali «abuelo principal de los animales». Llamar abuela a una mujer y vengarla no es, en ese vocabulario, una licencia poética.

Del episodio en sí no hay otra versión en el material en disco con la cual cotejarlo, y por eso la página conserva la secuencia de esta transcripción entera y no la mezcla con otros relatos de tortugas astutas.

Sí hay otro registro sikuani sobre la danta, en otro género y con otra voz: Carmen Enciso Jilguero narra una cacería de danta en la colección De agua, viento y verdor de la Audioteca Digital del ICBF. Es una pieza distinta —una cacería, no un ajuste de cuentas entre animales— y se nombra aquí para que no se confundan.`,
    similitudes: `Que un animal pequeño derrote a uno grande con astucia es un motivo de toda la cuenca, y la comparación sólo sirve contra relatos que existan y tengan dueño. En el corpus sikuani hay tres que la sostienen, y los tres se ganan lo mismo: acercarse antes de golpear.

El primero es la lapa del ciclo del árbol de los alimentos. En todas las versiones que están en disco —la de Corocito, la de Kotsipa de 1972, la del Instituto Lingüístico de Verano de 1974, la del resguardo Wakoyo y la de Awariba y Domoplanas— la lapa no le disputa nada al mico de noche: lo sigue callada toda la noche, por debajo, y sólo actúa cuando la piña ya está cayendo.

El segundo es Tsamani en el mismo ciclo: para sacarle las hachas al dueño que se las había tragado no se las pide ni se las quita, sino que se sopla el cuerpo, se vuelve mosquito y se mete dentro del yopo que el viejo va a sorber, de modo que el otro las expulse estornudando. La cercanía es el arma.

El tercero es el desquite de las cuñadas en La historia de Lekonaiwa, que publicaron los docentes de Awariba y Domoplanas: la vecina que puede volverse zorra mata a Lekonaiwa ofreciéndose a sacarle los piojos, y las cuñadas la descubren y la matan cambiándole por zumo de ají el agua que ella tomaba. El gesto de confianza, en los dos casos, es el que abre el cuerpo del otro.

Propio de esta versión es el resto: el hígado nombrado en voz alta, el cuerpo tendido como cebo, el excremento que informa, la orina pedida para calentar el caparazón y la horqueta sumergida.`,
    leccion:
      "La paciencia de años convierte un cuerpo pequeño en la trampa de un cuerpo grande.",
    sceneHorizontal:
      "una danta corre hacia un caño con un pequeño terecay aferrado, entre raíces y una horqueta visible bajo el agua",
    sceneVertical:
      "un terecay sigue huellas por la sabana y regresa ante dos niños junto a la casa de una anciana ausente",
    researchNotes:
      "RELATORA: Rita Gaitán, 1973. CAUTELA: el parentesco interespecie se conserva sin imponer una explicación exterior.",
  }),
  myth({
    slug: "historia-de-un-viejo",
    sourceKeys: [
      "villaPosse1993",
      "ortiz1982",
      "men2015",
      "ortiz1976",
      "ortizRezo1988",
      "ortizCesteria1988",
    ],
    title: "Los hermanos y la mujer del monte",
    summary:
      "Dos hermanos abandonados recuperan la vista, sobreviven a una mujer caníbal y reciben cuatro perros surgidos de su cabeza.",
    tags: ["hermanos", "abandono", "pajuil", "cuatro perros"],
    mito: `Un viudo vivía con su hijo y su hija. Cuando se volvió a casar, la nueva mujer no quiso a los niños y le insistió al padre hasta que aceptó dejarlos botados en el monte.

La primera vez la niña fue regando granos de maíz por el camino, de trecho en trecho, sin que el padre alcanzara a verla. Cuando los dejó y se devolvió, los hermanos esperaron un rato y después fueron levantando los granos uno por uno, y por ahí llegaron otra vez a la casa. La mujer los vio entrar y no dijo nada.

La segunda vez el padre se aseguró de que no pudieran volver. Les sacó los ojos y los dejó allá. Ciegos y solos, los hermanos oyeron la voz de su madre muerta, que les habló y los fue orientando hasta un pajuil. El ave les dijo dónde encontrar una savia que sirve para eso, y con la savia volvieron a ver. Siguieron juntos.

Un sueño les avisó que se iban a encontrar con una vieja que se comía a la gente. Se prepararon: llevaron plátano frito y un palo. No les alcanzó. La vieja los cogió y en lugar de matarlos los empezó a alimentar bien para engordarlos. Los hermanos comían y miraban. Aprendieron cómo hacía las cosas y esperaron.

El día en que la vieja puso al fuego una vasija grande de agua hirviendo, los hermanos le dieron vuelta a la trampa y la hicieron caer adentro. Así la mataron. Cuando le abrieron la cabeza le salieron cuatro perros. Eran cuatro y se llamaban pantera, tigre, león y onca, y de ahí vienen los tigres de ahora. Los cuatro se quedaron con el muchacho.

Más adelante los seres del monte se llevaron a la hermana. El muchacho no alcanzó a hacer nada por ella. Siguió solo con los cuatro perros, caminó hasta el mar y lo cruzó con ellos, y los dos hermanos no se volvieron a encontrar.`,
    historia: `Historia de un viejo la relató Rita Gaitán en 1973. Es la más larga de las siete piezas que Eugenia Villa Posse reprodujo en 1993, en las páginas 285 a 288, remitiendo al corpus que Francisco Ortiz publicó en 1982. El título de archivo nombra al padre, aunque quienes sostienen la acción son los hijos. De las siete piezas que Villa Posse seleccionó, Rita Gaitán narró cuatro y Pedro Martínez tres, en registros fechados entre 1972 y 1980.

El pajuil que los orienta no es un ave cualquiera en el mapa social sikuani. Cuando Francisco Ortiz levantó en Mochuelo, en 1972, la lista de los emblemas de banda regional —el sistema de los momowi, donde el nombre de un animal, una planta o una actitud sirve para nombrar y clasificar a un grupo—, el pajuil figura entre ellos, al lado del venado, la danta, el jaguar, la guacamaya, el ocarro, el zorro y el caribe. Ortiz advierte que la relación entre el emblema y el grupo humano no es de parentesco ni supone filiación: se sitúa en el plano de la metáfora. Que un pajuil sea el que sabe dónde está el remedio, en un relato donde la madre muerta habla y los tigres salen de una cabeza, cae dentro de esa lógica.

De la fórmula final del cuento —cuatro perros que son cuatro felinos y de ahí vienen los tigres de ahora— la fuente no da más. Se conserva como está.`,
    versiones: `Pantera, tigre, león y onca son las palabras de la traducción publicada. No se corrigen a especies modernas ni se convierten en taxonomía sikuani, porque los nombres sikuani de los felinos son otros y están documentados en otra parte: el rezo del pescado que transcribió Ortiz nombra al cunaguaro, al tigre awakana, al tigre tumatsina y a kuliwako, el tigre de la luna, abuelo de los felinos. Cuatro nombres castellanos en una traducción no equivalen a cuatro especies ni a esos cuatro nombres.

La figura que engorda a los niños para comérselos tiene nombre propio en el corpus sikuani, y no es el mismo personaje. En Sikiriri, el hambriento, que publicaron los docentes de Awariba y Domoplanas, el antropófago es un hombre, tío materno de sus víctimas, y no las engorda: se las lleva de cacería y las asa en la hoguera. En este cuento es una vieja, la reclusión es larga, la comida es abundante y el arma es una vasija hirviendo. Son dos tratamientos distintos de lo mismo y la ficha no los funde.

Tampoco se presenta esta pieza como una versión sikuani de Hansel y Gretel. El abandono de dos hermanos y una captora que pretende comérselos se parecen; la voz de la madre muerta, el pajuil, los ojos sacados y devueltos con savia, los cuatro perros nacidos de una cabeza y la travesía del mar no tienen equivalente en aquel cuento, y una coincidencia de armazón no demuestra derivación.`,
    similitudes: `Los paralelos que aquí valen son los que están en el mismo corpus y tienen quién los cuente.

El primero es Sikiriri, el hambriento: un muchacho que va prevenido, que encuentra en los restos de una fogata los pies y las manos de sus hermanitos, que se encarama en un árbol para escapar y que no contesta cuando lo llaman a gritos. Sobrevive por lo mismo que aquí: por mirar antes y por esperar el momento.

El segundo invierte la figura. En La historia de Kusubaüwa, del mismo libro, una anciana vive sola en un lugar apartado, en una tierra poco fértil y sin frutos, y lo que encuentra no es un niño para comérselo sino una raíz con forma de huevo que guarda en una tinaja; de ahí crece un niño que no es suyo y que ella cría, y cuando el muchacho se va a cumplir su destino ella se eleva y se vuelve Luna para seguir alumbrándolo. La vieja del monte y la abuela que se hace Luna son la misma pieza vista por los dos lados.

El tercero es El hombre pájaro: dos mujeres que se esconden dentro del tronco hueco de un árbol y le piden a las matas de yuca que no digan nada. También ahí el monte sirve de escondite y también ahí lo que salva es un objeto puesto encima, la tapa del budare, como aquí sirven el maíz regado y el palo.

Propio de esta versión es lo demás: los ojos restituidos con savia, el ave que indica dónde está, los cuatro perros y el mar cruzado al final.`,
    leccion:
      "Dos que no se sueltan encuentran quien los guíe cuando ya nadie los está buscando.",
    sceneHorizontal:
      "dos hermanos avanzan por el monte guiados por un pajuil hacia un árbol de savia luminosa, con granos de maíz en el sendero",
    sceneVertical:
      "un muchacho cruza un agua extensa acompañado por cuatro perros de siluetas felinas mientras su hermana queda sugerida entre árboles lejanos",
    researchNotes:
      "RELATORA: Rita Gaitán, 1973. COMPARACIÓN: se reconoce una semejanza estructural sin proponer dependencia de un cuento europeo.",
  }),
  myth({
    slug: "el-creador-del-cosmos",
    sourceKeys: [
      "baquero1989",
      "queixalos1985",
      "men2015",
      "ortizRezo1988",
      "ortizCesteria1988",
      "torres1994",
    ],
    title: "Kuwei, Kuemi y el comienzo del mundo",
    summary:
      "Kuwei ordena el mundo frente a Kuemi, señor de la oscuridad, y ensaya distintos materiales antes de formar una humanidad duradera.",
    tags: ["Kuwei", "Kuemi", "creación", "Vía Láctea"],
    mito: `Antes de Kuwei mandaba un señor de las tinieblas. Se llamaba Kuemi, tenía forma de culebra gigantesca y ocupaba el universo entero: nadie podía entrar. Kuwei, a quien también se nombra Phurnaminali, pensó el mundo y lo fue sacando de su pensamiento —los cielos, el agua, los árboles, los animales— y quiso sacar de ahí también a la gente.

Para acercarse a Kuemi se volvió un insecto pequeño y se prendió del sexo de su hija Puakali. Así entró en la casa de la culebra y se casó con ella. En esa casa vivía también la mujer de Kuemi, madre de los alacranes, las culebras, las arañas y las hormigas. Un día un hijo de Kuwei llegó a la casa en figura de lapa y Kuemi se lo comió. De dos pedacitos de carne que sobraron, Kuwei crió dos polluelos de águila y los hizo crecer hasta un tamaño monstruoso.

Después creó la hormiga bachaco. Kuemi se estiró a comerlas y al estirarse dejó su huella, Kuema namuto, el camino del culebro: ese reguero de estrellas que atraviesa la noche. En ese momento cayeron del cielo las dos águilas, lo agarraron con las garras y se lo llevaron arriba.

La venganza vino enseguida. La suegra murió comida por los peces caribes en un pozo, en una trampa que le preparó el yerno, y de ella sólo quedó un hueso de la cadera. Con ese hueso su hija le cortó una pierna a Kajuyali, otro hijo de Kuwei. Kajuyali recogió la pierna, la tiró al agua y con ella hizo el bagre rayado, y siguió sentado en el borde de su canoa con una sola pierna. Antes de eso había ido de pozo en pozo sembrando los pescados, y la canoa en que andaba quedó vuelta piedra a la orilla del Vichada.

Al águila, después de subir a Kuemi, le siguió gustando la carne de gente. Bajaba de noche al caserío que Kuwei había hecho y se comía a los que encontraba. Kuwei la mató, y al caer sobre el monte lo espachurró, porque tenía el pecho de acero; ahí donde cayó se abrieron las sabanas entre la selva.

Faltaba la gente. Kuwei hizo tres mujeres: una de palo, una de barro y una de cera. La de barro tostaba casabe pero no podía tocar agua, porque se deshacía. La de cera sacaba agua pero no aguantaba el calor ni el sol. La de palo aguantaba todo menos la candela: un día se arrimó y no quedaron sino cenizas. Entonces su hijo Matsuldani le dijo: papá, si usted quiere gente, yo lo llevo donde hay gente. Buscaron una loma desde donde se viera lejos. Matsuldani zapateó fuerte, hizo bajar la brisa derecho del cielo, de la superficie de la tierra salió el arco iris y detrás empezó a brotar gente en forma de pescado; al caer y golpear el suelo se volvían humanos. Salió tanta que Matsuldani tuvo que repartirla en pueblos, y de ahí vienen las lenguas que se hablan en la región.`,
    historia: `Los ciclos que sostienen esta página los reunió el arqueólogo Álvaro Baquero en el Boletín Museo del Oro 23, en 1989, con mitos recogidos en guahibo y en español. Baquero acredita a sus informantes al abrir el ensayo: Trejas Salcedo, el Viejo Rubiano y Bernardo Gaitán, entre otros.

Cada tramo tiene dueño. La salida de la gente de la tierra —el zapateo de Matsuldani, la brisa, el arco iris, los que brotan en forma de pescado— la contó Trejas Salcedo, de Mamiyare. El nombre del camino de estrellas que deja Kuemi al estirarse, Kuema namuto, lo dio un informante de San Vicente del Cadá en 1983. El Viejo Rubiano, también de Mamiyare, es quien ordena el conjunto: «estas historias de la creación del mundo se sabe que son al principio, las otras yo creo que son después del diluvio».

Baquero advierte cómo trabaja. Dice que arma la descripción del origen del mundo retomando conceptos de versiones distintas, porque el conocimiento sikuani sobre un tema tiende a estar disperso a lo largo de la tradición oral y no existe un mito que trate un solo asunto. Lo que publica son resúmenes, salvo la Namokaikaba Palibaisi, que va completa y firmada al pie por Bernardo Gaitán, de Guacome.

El propio Baquero explica el rótulo del pueblo. En lengua guahibo, sikueni jume traduce «yo hablo sikuani», y es el término de autodenominación que usan; guahibo es el nombre que les pusieron los europeos desde la conquista de la Orinoquia, y puede venir de otra autodenominación, Wayapho jiwi, «gente de sabana».`,
    versiones: `Las grafías se mueven de una fuente a otra. Kuwei aparece también como Kuwai; Phurnaminali y Furnaminali nombran a la misma figura creadora; el hijo se escribe Matsuldani, Matsuludani o Maduédani, y Queixalós advierte que los nombres del padre y del hijo fluctúan según la versión y que pueden llegar a intercambiarse.

La creación de la gente tiene al menos tres formas documentadas. En la versión que Metzger y Morey registraron y Baquero resume, los ensayos son barro, cera y madera dura; la figura de madera no tiene vagina, varios animales lo intentan y es el kutsikutsi el que consigue copular con ella, y de ahí arranca la reproducción. En la de María, la mujer más anciana de Kotsipá en 1971, el padre hace mujercitas de barro en el río y se le derriten de pie al ir a sacar agua; el que resuelve es el hijo, Maduédani: manda cortar palitos, los hinca en el suelo y de noche ahí están las casas, patea la tierra y de ella suben las vacas, las gallinas, la gente y también los blancos. En la que publicaron en 2015 los docentes de Awariba y Domoplanas, los tres materiales no son para hacer gente sino para hacer la mujer de Kuwei: cera que se derrite al sol, barro que se deshace en el agua y por fin Pumuneruwa tallada en palo de laurel, que aguanta el agua y el calor.

Tsikiriri también cambia de sitio. Baquero la da como mujer de Kuemi y madre de los animales ponzoñosos; el rezo del pescado que transcribió Francisco Ortiz la nombra como el güío insaciable. La ficha conserva las dos formas y no decide cuál corrige a cuál.`,
    similitudes: `Las cosmogonías de materiales sucesivos son frecuentes y por sí solas no prueban parentesco. Lo que vale es dónde apoya la comparación una fuente citada.

Baquero la hace dos veces. Al contar cómo las águilas se llevan a Kuemi al cielo, anota que esa escena está presente en la estatuaria de San Agustín y entre culturas peruanas y mexicanas. Y sobre la salida de la gente que contó Trejas Salcedo señala su parecido con lo que el etnólogo Robin Wright recogió entre los baniwa del alto río Negro, donde son los tres hijos de Kuwai quienes crean a los hombres: los baniwa son arawak y vecinos, no sikuani, y el paralelo se cita como tal. Baquero agrega que los cubeo y las tribus de habla arawak del noroeste amazónico comparten la figura de Kuwai.

Dentro del mismo corpus sikuani hay un eco más cercano. En el relato de Kusubaüwa que publicaron los docentes de Awariba y Domoplanas, una raíz con forma de huevo guardada en una tinaja se vuelve almidón, del almidón crece un niño y ese niño acaba convertido en el árbol del que brotan los alimentos. También allí lo vivo sale de una materia que primero hubo que encontrar.

Lo propio de esta versión es el reparto: Kuemi que es culebra y es Vía Láctea, la hormiga bachaco usada de carnada, las dos águilas criadas con restos de un hijo, la pierna de Kajuyali vuelta bagre rayado y la gente que brota en forma de pescado.`,
    leccion:
      "Un mundo habitable se arma por ensayos, y cada materia fallida enseña algo sobre la siguiente.",
    sceneHorizontal:
      "Kuwei contempla un mundo naciente de agua, árboles y animales mientras una gran anaconda oscura cruza el cielo como Vía Láctea",
    sceneVertical:
      "tres figuras simbólicas de barro, cera y madera aparecen bajo lluvia y sol, acompañadas por un kinkajú entre ramas",
    researchNotes:
      "CORRECCIÓN MAYOR: se retira una mezcla bíblica sin respaldo y se conserva la URL histórica con contenido documentado.",
  }),
  myth({
    slug: "la-comida-para-los-muertos",
    sourceKeys: [
      "icbfTsamani",
      "torres1994",
      "agudelo2015",
      "baquero1989",
      "ortizRezo1988",
      "ortizCesteria1988",
      "men2015",
    ],
    title: "Tsamani y el camino de la luz",
    summary:
      "Tsamani y sus cinco hermanos danzan, siguen una alimentación rigurosa y se vuelven livianos hasta ocupar un lugar entre las estrellas.",
    tags: ["Tsamani", "estrellas", "danza", "Itomo"],
    mito: `Los Tsamani eran cinco hermanos: Tsamani, Kajuyali y Uwinei, y las dos hermanas, Kaweineduawa y Jumeneduawa. Eran los más sabios de los antiguos, de aquellos en los que todavía no se podía separar lo animal de lo humano, y Tsamani era el que iba adelante, el que sabía por dónde caminar.

Ya habían hecho en la tierra todo lo que había que hacer. Habían tumbado el árbol de los alimentos y habían enseñado a sembrar. En la tierra ya estaba trazado el designio de la muerte, y ellos eran chamanes inmortales: les tocaba ir a poblar un espacio que no se acabara.

Entonces se pusieron a bailar. Bailaron doce años seguidos, embriagados de capi y de yopo, sin comer otra cosa que eso. En esos doce años fueron diciendo los waji, los cantos y conjuros del saber chamanístico, y se los fueron dejando a los que después serían gente. Cuando terminaron la danza tenían lo que habían ido a buscar: el cuerpo liviano.

Faltaba el camino. Para subir hacía falta una línea de flechas que amarrara lo celeste con la tierra. Cada uno de los hermanos tensó el arco y tiró, y ninguna flecha se clavó arriba. Jumeneduawa, la menor, todavía niña, pidió que la dejaran probar. Le dijeron que si no habían podido ellos, diestros en el arco y la flecha, menos iba a poder ella, y la dejaron tirar por burla. La puya subió derechito y se clavó en lo alto. En ese instante a la niña le llegó la menstruación.

Los hermanos clavaron entonces una flecha en el asta de la primera, y otra en ésa, y otra, hasta armar la línea entera. Mascaron capi otra vez, sorbieron yopo y se soplaron el cuerpo para volverse comejenes. En cuerpo de comején subieron por las veradas de las flechas.

Otros quisieron subir detrás. La escalera no era para ellos: se rompió, y los que iban cayeron y quedaron hechos animales, y desde entonces cargan el ainawi, esa fuerza que enferma al que come de ellos sin rezarlos. Los que ni siquiera intentaron subir se quedaron abajo y en ese mismo instante se volvieron jiwi, gente.

Los cinco hermanos llegaron arriba y allá se quedaron, hechos constelaciones.`,
    historia: `Este es el episodio que canta el Canto de la familia Tsamani, interpretado por Jairo Chipiaje Cavares y Adelina Rodríguez, traducido por José Quintero Campo y publicado por la Audioteca Digital del ICBF con procedencia del resguardo Caño Ovejas, en el Meta, dentro de la colección De agua, viento y verdor. El canto registra el núcleo: Tsamani y sus cinco hermanos, los años de danza, la dieta de danana y mana, los cuerpos que se vuelven livianos y el ascenso.

La versión que se cuenta arriba es la más extensa de las que hay en disco y viene de otra cadena, también con nombres. William Torres la escribió en el Boletín Museo del Oro 37 tal como se la enseñaron, desde abril de 1993, don Rafael Vicente Yepes Kasulú, chamán y capitán de la comunidad de Walabó 1, y su hermano don José Antonio Kasulú, chamán principal del resguardo Wakoyo, en Puerto Gaitán. Torres escribe que lo hace en reconocimiento a esos sabios, sus maestros.

Es el mismo abuelo que aparece, escrito Kasulúa, al pie de dos relatos que Edwin Agudelo compiló en abril de 2004 y en enero de 2005: la cadena de enseñanza está corroborada por dos investigadores distintos con diez años de diferencia.

De la relación entre este ascenso y los muertos hay constancia etnográfica aparte. Baquero registra que entre los guahibos existe una estrecha relación entre el baile del jalekuma —que se baila cogidos de los hombros, hombres, mujeres y niños en un gran círculo, consumiendo yopo y dana—, la muerte y el viaje al cielo de las almas. Y describe el rito con el que ese baile se asocia: el itomo, el entierro secundario que se celebra al año de fallecida la persona, cuando se sacan los huesos, se lavan, se pintan de rojo con achiote y se vuelven a enterrar en una tinaja de barro.`,
    versiones: `Los hermanos no siempre son los mismos ni son siempre cinco. Torres los da como cinco: tres varones, Tsamani, Kajuyali y Uwinei, y dos mujeres, Kaweineduawa y Jumeneduawa. En los relatos que Agudelo recogió del abuelo Kasulúa son seis, y la lista incluye a Furnaminali: Furnaminali, Kajuyali, Libinei, Tsamani, Ibarruwa y Kaweinalua. El canto de Caño Ovejas dice cinco hermanos.

Cómo suben también cambia. En Torres es una escalera de flechas y suben en cuerpo de comején. En Agudelo es un camino de bejuco, y lo que lo rompe es la gritería de los otros, que al caer flotando desde lo celeste se impregnan de la fuerza de la tierra y se van volviendo animales. Agudelo añade lo que fue de las hermanas: Ibaruwa, pesada por haber infringido la dieta, tuvo que viajar en canoa mucho tiempo por el mar hasta el lugar donde el cielo se une con el mar, y quedó de estrella del atardecer; la menor, Kawainaruwa, llegó primero y quedó de estrella del amanecer. Y dice dónde quedó la raíz del bejuco: el cerro Kaliwirnae, kaliwiriboto, la serranía del Sipapo.

Qué comían durante la danza es el punto que más se mueve. El canto de Caño Ovejas dice danana y mana. Agudelo dice dana, fruto del cielo. Baquero habla de yopo y dana, y llama a dana una bebida alcohólica. Torres dice que no consumieron otro alimento que los dos enteógenos, capi y yopo. Las cuatro se conservan como están.

Y las constelaciones quedan repartidas así, según Agudelo: las Pléyades son Liwinai, Orión es Kajuyali, Delphinus es Tsamani. Ortiz, desde la cestería, coincide en Kajuyali como Orión y añade a Ibaruowa, la estrella Vega, hermana mayor de Tsamani.`,
    similitudes: `El vínculo entre este ascenso y el trato con los muertos no hay que buscarlo afuera: está dentro del corpus y lo anota quien lo transcribió.

En el rezo del pescado que Francisco Ortiz registró, don Pedro Antonio interrumpe el rezo durante unos quince minutos para contar cómo, después de que Tsamani y los suyos tumbaron el árbol kaliawiri y le cortaron una pierna a Kajuyali, les dejaron los rezos a los indígenas. Y sigue con el mito del origen de los pescados, donde las gaviotas bajan del cielo cargando una tinaja de la que decían que contenía los restos de su papá —«como es costumbre entre los sikuani antes de realizar la ceremonia de segundo enterramiento», anota Ortiz— llorando «mi papá, mi papá» para engañar al güío insaciable. Ortiz concluye que la referencia al ritual de enterramiento establece un circuito con el rito de pubertad. El mismo circuito se cierra aquí: lo que los hermanos dejan al subir son los cantos con que después se cura, se reza el pescado y se entierra.

Del cuerpo que se aligera para cambiar de mundo hay otro caso en el corpus, y es una abuela. En La historia de Kusubaüwa, que publicaron los docentes de Awariba y Domoplanas, la anciana que crió al niño que se volvió el árbol de los alimentos decide seguir cuidándolo desde arriba: cambió sus pensamientos, se elevó y se convirtió en Luna. No hay dieta ni danza ni flechas, pero el movimiento es el mismo y el motivo también: quedarse donde se los pueda seguir viendo.`,
    leccion:
      "Una disciplina sostenida entre muchos y durante años puede volver liviano lo que antes pesaba.",
    sceneHorizontal:
      "Tsamani y cinco hermanos danzan en círculo sobre la sabana nocturna mientras sus siluetas se vuelven ligeras bajo un cielo estrellado",
    sceneVertical:
      "seis figuras ascienden como capas de luz desde la tierra hasta una agrupación de estrellas sobre el horizonte llanero",
    researchNotes:
      "CORRECCIÓN MAYOR: la página inventada se reemplaza por un registro comunitario identificado. VARIANTE: Itomo y Jalekuma se explican solo como contexto de Baquero.",
  }),
  myth({
    slug: "kaliwirnae-el-arbol-de-los-alimentos",
    sourceKeys: [
      "icbfKaliwirnae",
      "queixalos1978",
      "vargasKondo1974",
      "men2015",
      "torres1994",
      "baquero1989",
      "ortizRezo1988",
      "ortizCesteria1988",
      "queixalos1991",
    ],
    title: "Kaliwirnae, el árbol de los alimentos",
    summary:
      "El mono nocturno oculta el gran árbol que reúne los alimentos, pero el picure y la lapa siguen el aroma de la piña y descubren su secreto.",
    tags: ["Kaliwirnae", "alimentos", "mono nocturno", "lapa"],
    mito: `Un niño se volvió mata de yuca, y de esa mata creció un árbol grande. Era Kaliwirnae. En sus ramas estaba toda la comida junta: la piña, el ají, la caña y frutas de todas las clases. La gente todavía no sabía que existía.

El que sí sabía era Kutsikutsi, el mico de noche. Salía cuando oscurecía y volvía de madrugada oliendo a piña, y no decía nada. El picure le sintió el olor y trató de seguirlo. No pudo: el mico iba por arriba, saltando de rama en rama, y el picure se quedó abajo sin dar con el camino.

La lapa lo hizo mejor. Se le fue detrás sin hacer ruido y no lo perdió de vista en toda la noche. Caminaron hasta el Orinoco y lo cruzaron, y del otro lado estaba el árbol cargado.

Kutsikutsi se trepó a comer. Desde arriba se le escurrió una piña, y abajo la lapa la agarró. El mico se le vino encima y alcanzó a arrancarle la cola, y la tiró al río; allá en el agua la cola se hizo anguila. La lapa se fue de todos modos con la piña y llegó a donde estaba la gente a contar lo que había visto y a mostrar de dónde venía.

Entonces le hicieron al mico de noche una invitación para que sorbiera yopo con ellos. El mico llegó y sorbió. Con el yopo encima ya no pudo guardarse nada: vomitó, y en lo que vomitó estaba el olor de la piña. Ahí quedó descubierto y tuvo que decir dónde quedaba Kaliwirnae.

El picure y el mico se agarraron. Cada uno cogió un tizón prendido de la candela y se lo puso al otro encima. Las quemadas les quedaron marcadas en el cuerpo, y por eso esos dos animales andan hasta hoy con esas señales.`,
    historia: `La narración que sigue esta página es la de Carmen Rojas Amaya, traducida por José Quintero Campo y registrada en la comunidad de Corocito, resguardo Caño Ovejas, en el Meta. La Audioteca Digital del ICBF la publica con audio y texto bilingüe, dentro de la colección De agua, viento y verdor. La narradora advierte que la historia es larga y que ella cuenta hasta ahí, y la página respeta ese final: no le pega lo que sigue en otras versiones.

Es el relato más contado del pueblo. Álvaro Baquero lo dice sin rodeos: el mito del árbol Kalivirnae es quizás la historia más popular entre los guahibos. De ahí que exista en tantos registros, y que cada uno tenga nombre y fecha. Tiberio, alias Nusalia, jefe de Kotsipa, se lo narró a Francisco Queixalós en 1972, y Queixalós lo publicó en 1978 en edición sikuani/francés con el análisis línea a línea. Eutimio Vargas, sikuani, firma como autor la versión guahibo que el Instituto Lingüístico de Verano editó en 1974 con la traducción de Victor Kondo y señora. Los docentes de Awariba y Domoplanas lo publicaron en 2015 partido en dos capítulos, el hallazgo y la tala. Y William Torres lo escribió como se lo enseñaron don Rafael Vicente Yepes Kasulú y don José Antonio Kasulú, del resguardo Wakoyo.

Lo que en esta versión queda en la sombra —de dónde salió el árbol— lo cuenta con nombre otro relato del mismo libro de 2015: Kusubaüwa, una anciana que vivía sola en tierra poco fértil, encuentra una raíz con forma de huevo, la guarda en una tinaja, y del almidón que se forma crece un niño; ese niño, ya hombre, camina hasta el confín y se convierte en el árbol frondoso del que brotan los alimentos.`,
    versiones: `Casi todo cambia entre una versión y otra, y lo que cambia se puede nombrar.

El animal que descubre el árbol. Para Ortiz, kutsikutsi es el Potos flavus, el mico nocturno, y así lo anota en el rezo del pescado: «el descubridor del árbol kaliawiri». Torres lo escribe igual. Pero Queixalós, en la edición de 1972-1978, traduce kuci'kuci como opossum, el rabo pelado, Didelphis, y añade una ficha zoológica para justificarlo. No es una errata de una de las dos: son dos identificaciones del mismo nombre sikuani.

Las marcas del cuerpo. En la versión de Queixalós los dos se queman con tizones: la lapa queda con la boca quemada —de ahí los huecos bajo los ojos donde tiene una carne muy apreciada— y el rabo pelado queda sin pelo en la cola. En la de Torres la lapa queda con los cachetes hundidos y el mico sin pelo sobre el esternón, y la cola de la lapa se la arranca el mico. En la de 2015 la piña le cae encima a la lapa y por eso no tiene cola, y el mico queda con la cara arrugada. En esta, la cola arrancada se vuelve anguila en el río.

Las hachas. Queixalós dice que hicieron hachas con mandíbulas de un pez, que se doblaban, y que sólo el pájaro carpintero pudo con el árbol. Vargas y Kondo, Torres y los docentes de 2015 cuentan otra cosa: el dueño de las herramientas metálicas —Palameco, Palomeko— se las tragó, un hombre se volvió mosquito y se le metió, y el viejo las vomitó. Ortiz confirma el personaje desde el rezo: palamekunu, «el amo de las herramientas metálicas».

La caída. En Queixalós el árbol cae cuando los bachacos se llevan las astillas. En las otras el árbol sigue en pie porque dos bejucos lo amarran al cielo, el del barbasco y el del capi, y es la ardilla la que los corta: en Torres el macho sale disparado al cielo y le da su color al crepúsculo; en la de 2015 la hembra cae con el árbol y el macho se pierde en el firmamento.`,
    similitudes: `La comparación más útil está firmada. Reseñando Entre cantos y llantos, la compilación de tradición oral sikuani de Francisco Queixalós, William Torres pone a Kaliawiri al lado de Moniya Amena, el árbol del alimento y de la abundancia en la mitogonía uitoto y muinane. Son pueblos distintos y lejanos, y el paralelo se cita como lo que es: dos árboles cósmicos que concentran lo cultivable y cuya caída reparte el mundo.

Dentro del mismo corpus sikuani el árbol no está solo. Torres anota que Kaliwirnae no sólo da frutas y cultígenos: da también el capi, que es enteógeno, y el barbasco, con el que se pesca, y por eso los dos bejucos que lo amarran al cielo son justamente esos dos. Cuando el árbol cae, cae con la técnica adentro.

Y la caída tiene consecuencias que esta versión no alcanza a contar y otras sí. En la de los docentes de Awariba y Domoplanas, al caer el árbol los animales toman forma humana y aparece la muerte para los seres vivientes; las astillas que los bachacos regaron por el territorio dan origen a las piedras; y nacen los dos valores del pueblo sikuani, wakena, la distribución colectiva de los alimentos, y unuma, el trabajo colectivo. Cada animal que participó con esos dos principios formó su clan, y por eso hay clanes de tigre, guacamaya, picure, peces, sapo, danta, perro, culebra, caimán y ocarro.

Propio de esta versión es el comienzo y el final: el niño vuelto mata de yuca, el picure que no encuentra el camino, la cola convertida en anguila y el yopo que hace hablar al que no quería.`,
    leccion:
      "El sabor que alguien esconde termina delatándose, y entonces la comida deja de ser de uno.",
    sceneHorizontal:
      "un gran árbol de capas planas sostiene piña, ají, caña y frutas junto al Orinoco, observado por mono nocturno, picure y lapa",
    sceneVertical:
      "una lapa cruza el río siguiendo al mono nocturno mientras una piña cae desde Kaliwirnae y una anguila aparece bajo el agua",
    researchNotes:
      "NUEVA FICHA: fuente comunitaria localizada. LÍMITE: se respeta el corte explícito de la narradora y no se inventa la caída del árbol.",
  }),
];

export default sikuaniDefinitions;
