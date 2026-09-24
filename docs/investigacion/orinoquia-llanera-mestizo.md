# Dossier de investigación visual · Orinoquía llanera

**Corpus:** 19 páginas del bucket `orinoquia-llanera-mestizo`, **ninguna con campo `mito`**: sobre
ellas no se escribe guion ni se hace video, pero aportan entidades.
**Época:** tres estratos que no se mezclan — colonial de misión hasta 1767, republicano de hato del
siglo XIX a mediados del XX, y moderno del piedemonte entre 1982 y 1985.
**Censo:** 160 entidades, 70 `required`, 71 `embedded`, 19 `excluded`, **79 láminas** repartidas en
76 de ficha y 3 hojas de agrupación.
**Etapa:** 0 — investigación previa a cualquier llamada de imagen.
**Fecha:** 19 de septiembre de 2026.

> **Aviso de deslinde, y son dos.** El primero: esto **no es una comunidad**. No hay pueblo, no hay
> autoridad tradicional, no hay lengua propia y no hay iconografía heredada. El denominador de este
> corpus es una época, un oficio y **dos libros firmados**: diecisiete de las diecinueve páginas
> salen de *Cuentos, mitos y leyendas del llano* de Getulio Vargas Barón (1996) y de *Los cuentos de
> Pascual* de Alberto Baquero Nariño (1988). El segundo deslinde es con los vecinos: este cubo
> **no comparte una sola pieza** con la biblia Sikuani ni con la U'wa, aunque los tres ocupen el
> mismo horizonte. Lo común es la ecología —la sabana que cambia con la estación, el morichal que
> crea los ríos, el cielo sin relieve que lo corta—; eso es territorio compartido y no iconografía
> prestada. Y donde este corpus **sí toca** a pueblos reales —Achaguas, Amorúas, Betoyes, Sálivas,
> Guayupes, y el nombre de un hato que es también el de una matanza— vuelve a hacer falta una
> consulta que no se hizo, y así queda dicho en §11.

---

## 0 · Contra qué texto se investigó, y las divergencias que encontré

**Este dossier se investigó contra el CUERPO DE LA PÁGINA, igual que el censo, y no contra el módulo
editorial.** Es un aviso de método y no una formalidad: en este cubo los módulos `editorial/*` **no
son el cuerpo de la página**, son una revisión escrita y **no aplicada**, y los dos textos cuentan
cosas distintas. Verifiqué las dos divergencias que el encargo señalaba y encontré una tercera.

**Primera.** En `editorial/orinoquia-mestizo-final/definitions-vargas.mjs`, «El llano cobra sus
deudas» se titula «El Llano cobra sus cuentas: hacienda y ruina» y narra el auge y la caída de la
hacienda de **don Victoriano**, con su propio aviso: «la expansión histórica del cuento no debe
usarse como cronología del Casanare». En la página publicada no hay ningún don Victoriano: hay la
crónica de la fundación de **Támara en 1626** por el padre Dadey, el resguardo jesuita con sus
campos del hombre, de la comunidad y de Dios, el algodón y el café, la expulsión, y después el Meta
y el Orinoco cargados de plumas de garza, cueros y sarrapia rumbo a Europa.

**Segunda.** En `definitions-independent.mjs`, la Bola de Fuego lleva la nota «DESINVENCIÓN Y
FRONTERA REGIONAL: se retiran David Gamboa y Hato Valbuena por falta de respaldo externo», y su
prompt pide expresamente **«sin rostro en las llamas»**. En la página, David Gamboa es el
protagonista —«un experimentado vaquero de Todos los Santos»— y del núcleo de la luz emerge una
mujer de cabellos dorados.

**Tercera, y es la que más importa para el presupuesto.** El módulo declara la procedencia que la
página no declara: diecisiete de las diecinueve páginas vienen de dos libros de autor. Once de
Vargas Barón —y la reseña de prensa de 1997 se titula, literalmente, «El llano en **once**
relatos»—; seis de Baquero Nariño, cuyo narrador **es Pascual**. Y `leal-hasta-la-muerte` no es
llanera en absoluto: el módulo la ancla en el tipo 160 del catálogo internacional, «animales
agradecidos y hombre ingrato», que llega al castellano por *Calila e Dimna*.

**Consecuencia práctica:** todo lo que este dossier afirma vale para el texto publicado. Donde el
módulo ya decidió otra cosa —`david_gamboa` y el segundo estado de `bola_de_fuego_candileja`— la
lámina **no se produce** hasta que el editor diga qué texto gobierna. Y las dos entidades quedan
marcadas en la matriz.

---

## 1 · Dimensión de época — manda sobre todo lo demás

### 1.1 Tres estratos, y ninguno comparte cuadro

Las fechas que el propio corpus pone en el texto acotan el arco y son más de las que parece: **1542**
(la llegada del ganado con don Luis de Lugo, según una de tres versiones que la página misma da),
**1626** (Támara), **1767** (la expulsión bajo Carlos III), **1840** (Villavicencio), **1856** (el
nacimiento de Ojos de Miel en Santa Fe), **1874** y **1884** (su biografía), **1906**, **1944** (las
compañías petroleras que buscan el tesoro), **1982** (la llegada de don Tarsicio) y **noviembre de
1985** —«cuando el país se desgarraba bajo el cielo encapotado de 1985… una monarquía civil se
estableció sobre las cenizas de una justicia evaporada»—, que es el pie más moderno del corpus.

| estrato | qué hay | qué no puede haber |
|---|---|---|
| **colonial de misión**, hasta 1767 | bahareque y palma, iglesia de maderos con cubierta de paja, sotana, ganado suelto, vela y mechito de cera | tapia pisada, teja de barro, arpa, cualquier cosa de metal fabril |
| **republicano de hato**, XIX a mediados del XX | caballo de silla, lazo, corral con botalón y majada, dril, pie descalzo, sombrero de fieltro, alpargata, tiple y maracas, vapor en el Meta | arpa, cuatro, luz eléctrica, motor |
| **moderno del piedemonte**, 1982-1985 | campero, carretera con abismo y barro, linterna, detector de minas, digitopuntura | nada del estrato colonial |

Y un solo objeto atraviesa los tres sin cambiar: **la cruz de madera sobre la tumba.**

### 1.2 El arpa es un anacronismo, y el censo tenía razón sin saber por qué

El censo notó, con extrañeza, que en las diecinueve páginas no hay arpa, ni cuatro, ni bongo, y que
la música es tiple, maracas y coplas. **No es un vacío del corpus: es exactitud histórica.** Dos
fuentes independientes lo fechan.

La primera, desde dentro de Casanare: «en el siglo XIX, básicamente se hacía con instrumentos de
diapasones; que incluían **las bandolas y el guitarro** (adaptación del tiple andino y del
requinto). Estos instrumentos venían de la región andina». Y: «**hasta mediados del siglo XX**, los
instrumentos de diapasón como el tiple y el requinto se cambiaron por el arpa y el cuatro, debido a
las migraciones, las guerras y los intercambios culturales». Hasta 1965 había tan pocos arpistas en
Colombia que se traían de Venezuela.

La segunda es una prueba documental negativa: en la descripción que Ramón Guerra Azuola hizo en 1855
de los músicos de Macuco se mencionan **tiples y carrascas** y no se menciona arpa; durante el siglo
XIX el arpa fue desplazada por los tiples boyacenses, y en el Meta se consolida entre los años
setenta y ochenta del siglo XX.

**Regla operativa, y es la más fácil de vigilar de todo el dossier:** si aparece un arpa en una
lámina de este cubo, la lámina está mal y se retira.

Detalle que lo confirma desde el texto: el Domínguez «burlaba a los incrédulos con su tiple y sus
canciones de **bambucos**». El bambuco es andino. Esa página es de piedemonte y su cultura musical
lo dice.

### 1.3 El vestuario tiene dos cortes fechados, y ninguno es el traje folclórico de hoy

**Mediados del XIX**, en la única cita fechada que existe: los jóvenes llevaban «pañuelos de seda
extranjera, cachamita de percla blanco con alforzas, botones dorados, **garraci recogido a media
pierna** y anudada con la uña de pavo, alpargatas».

**1943**, citado literalmente de una tesis de ese año: «viste el llanero **ropa e dril** como
cualquier ciudadano de Barranquilla, Girardot u Honda»; «el pantalón suele llevarlo **enrrollado
hasta la rodilla** en toda época»; «anda con el **pie descalzo** tanto en verano como en el
invierno»; «el sombrero predilecto del llanero es el **castor o pelo de guama**»; «usa alpargatas de
suela de cuero y hechas en tejidos de hilo en colores»; «**cinturón ancho de cuero –faja–**». La
mujer usa seda y crespón, alpargata en la casa y «zapatilla fina» para salir al pueblo.

**El liquiliqui no entra.** Deriva del garrasí casanareño y de la camisa cachicamita, pero su
consagración es venezolana y moderna: traje nacional de Venezuela desde 2017. Ponerlo en una escena
del Casanare del XIX es el error equivalente al arpa.

### 1.4 Hay una imagen de época, fechada y del sitio exacto

Manuel María Paz, **«Llaneros herrando ganado i recortándole las orejas: provincia de Casanare»**,
acuarela de 1856 pintada del natural durante el viaje de la Comisión Corográfica —Codazzi partió en
diciembre de 1855 y regresó en febrero de 1856—. Es **la única referencia visual del corpus que no
hay que reconstruir**, y debe gobernar el cuerpo, la postura y el apero de la faena del siglo XIX
por encima de cualquier descripción posterior. Con la reserva de siempre: Paz componía con criterio
costumbrista y lo que muestra es vestuario de faena, no de fiesta.

### 1.5 Una corrección pequeña y verificable

**La palabra «sombrero» no aparece ni una sola vez en las diecinueve páginas.** El censo ficha una
entidad `sombrero_y_poncho_llanero`; lo que el texto sí nombra es el **poncho cruzado** de Pascual y
su **rula**. El sombrero entra por la fuente histórica —el pelo e' guama de fieltro— y debe
declararse como aporte documental y no como dato del relato.

---

## 2 · Dimensión histórica — la revisión que sustituye a la consulta

### 2.1 Támara 1626 no está confirmada

La página lo afirma y el censo lo repitió. La bibliografía disponible apunta a otra cosa: los
jesuitas se hicieron cargo de Chita, Támara, Morcote y Pauto hacia **1624-1625**, y la fundación por
el padre **José Dadey** se sitúa el **6 de agosto de 1628**, con retiro de la Compañía ese mismo
año. Ninguna fuente académica accesible confirma 1626.

**La cifra se rotula como fecha de tradición local y ninguna lámina se fecha con ella.** Es la
carencia que más afecta a una imagen concreta, porque esa fecha es lo único que ancla el estrato
colonial del corpus.

### 2.2 Lo que sí está documentado del pueblo llanero colonial: su escala y su materia

**La escala.** San José de Cravo se funda en 1649 «con diez y nueve hombres y sus familias»,
haciendo «iglesia, casas de cabildo y otras de vecinos». Muchas de esas fundaciones «fueron
solamente puestos de avanzada, bastiones o cuarteles pomposamente bautizados como ciudades». **No se
dibuja una villa.**

**La materia, y está fechada.** La iglesia de Santiago de las Atalayas era de «maderos, cubierta de
paja o palma, pero con buenos ornamentos y alhajas», construida «de la construcción que el país
ofrecía». Y la secuencia de Nunchía y Pore es explícita:

1. primero «viviendas en **bahareque y palma** por parte de los vecinos»;
2. en **1788** una nueva iglesia «en **cal y canto y teja de barro**, signo evidente de progreso en
   la época»;
3. ese mismo año la cárcel de Pore seguía siendo «en **bahareque y paja**»;
4. y el estanco debía dotarse de casa «en **tapia pisada y techo de teja de barro**».

**La tapia y la teja son tardías y son de edificio de Estado, no del vecindario.** La ficha
`pueblo_llanero_de_tapia_y_teja` hay que producirla con esa cronología a la vista o queda
anacrónica.

### 2.3 La bóveda de Caribabare: el tesoro es tradición, el complejo económico no

El inventario de 1767 registra en **Caribabare 13.606 cabezas de ganado y 27 mulas**, en **Tocaría
3.838 cabezas, 37 mulas y 19 esclavos**, y en **Cravo 5.946**; las tres formaban «un complejo
económico casi único» y en la década de 1760 las haciendas jesuitas de los Llanos tenían **más de
80.000 reses y caballos**. Había además escolta militar.

Y está documentado el destino del despojo: para dotar la nueva parroquia se recurrió a «los
ornamentos, vasos sagrados y alhajas de las Iglesias y Capillas que fueron de los extrañados
Regulares de la Compañía», **específicamente los de la hacienda de Caribabare**, y al altar de
Tocaría.

El oro enterrado sigue siendo leyenda. **Las cajas de vasos sagrados que se movieron, no.** Eso
cambia la lámina: lo que hay que modelar son cofres litúrgicos y una excavación revestida de piedra
y calicanto, no un tesoro de aventuras.

### 2.4 El comercio que narra el corpus está documentado y fechado

La navegación del Meta permitía traer productos desde Europa y desde Ciudad Bolívar por el Orinoco
hasta Orocué y Villavicencio, y sacar **caucho, quina, plumas de garza y sarrapia**; los vapores
consumían grandes cantidades de madera y obligaron a construir puertos y bodegas. Orocué se funda el
**1 de enero de 1850** y su auge va «**desde 1890 hasta 1930**», exportando cueros de becerro, de
res, de venado y de tigre, plumas de garza, arroz, bálsamo de copaiba, caucho y sarrapia. El declive
llega con la Guerra de los Mil Días, los límites con Venezuela y la depresión de los treinta.

### 2.5 La página que no contiene lo que promete

**«Los delfines dorados» no contiene delfines.** La palabra aparece sólo en el título y en el slug;
el cuerpo narra la mordedura y la cura de María de los Ángeles en el hato La Rubiera, con el Catire
José Amalio. Leí la página entera y lo confirmo. Si el editor quiere la imagen del título, primero
hay que escribir el episodio: **no se ficha lo que no está.**

### 2.6 La Rubiera

El nombre de ese hato es el mismo del lugar de una matanza. **El 26 de diciembre de 1967**, en La
Rubiera, en la frontera colombo-venezolana, unos vaqueros dieron muerte a **dieciséis miembros del
grupo indígena cuiva**; para hacerlo los invitaron a comer. El jurado los declaró **inocentes por
ignorancia invencible**, y el proceso tardó unos seis años y dos juicios. La investigación regional
establece que aquello fue «solo un episodio más dentro de la guerra emprendida contra los indios en
el marco del proceso de colonización», y que cazar cuivas y guahibos —«**cuivar**», «**guahibiar**»—
fue práctica común de llaneros, vaqueros, colonos y hacendados. El expediente está identificado:
Juzgado Segundo Superior de Ibagué, 1973, cuaderno n.º 2.

**Va al expediente y a ninguna lámina.** Y hay que decir por qué importa aquí, y no sólo como
contexto: la página que usa ese nombre es además la que pone en escena a los **indios Sálivas** «al
margen del oro y los sueños imperiales», la que hace que don Antonio rechace al curandero con «su
orgullo anclado en prejuicios», y la que describe al Catire José Amalio como «joven alto, de ojos
azules» con «la sangre sajona que bullía en él» entre los Salivas. El censo hizo bien en excluir a
los Sálivas como colectivo y fichar sólo a José Amalio, que sí tiene cuerpo descrito. **La lámina no
representa al pueblo Sáliva, no lo nombra y no le pone atributo étnico alguno al curandero más allá
de lo que el texto dice.**

### 2.7 Y la cosmogonía inventada

«Amanecer llanero» hace de Casanari y Pamoare los troncos de los **Achaguas, Amorúas y Betoyes**,
pueblos reales. El censo excluyó con razón al gran jefe indio y a los tres pueblos descendientes:
ficharlos sería adjudicar identidad visual a partir de una genealogía literaria. Las dos figuras que
quedan se producen **sin una sola pieza de iconografía indígena real**, y la corona de plumas y la
túnica de colores se declaran en la ficha como vestuario de **un rito que el cuento inventa**. La
comparación del cuerpo de Casanari con «el antiguo mármol griego» es del texto y no pasa a la
imagen.

---

## 3 · Dimensión arquitectónica

### 3.1 El hato no es una casa: es una definición legal

En la colonia debía tener «el término de una legua en contorno y no menos de **2.000 cabezas de
ganado**»; en la república, «**dos mil quinientas hectáreas** en adelante, con una producción que
permita **herrar más de trescientas crías al año**», y por debajo de eso se llamaba **fundación**, no
hato.

Y se funda en un orden: se hacen «quemas en la sabana a intervalos de diez días» mientras se
construyen habitaciones y corrales; después se mete el rebaño al cuidado de «tres o cuatro vaqueros
a caballo, que permanecen rodeándolo durante el día y que lo conducen, a la caída del sol, al corral
de reducción». Los ocho hatos del corpus caben en una hoja porque son **la misma máquina**.

### 3.2 El corral tiene piezas con nombre y forma exacta

Aquí el expediente es excelente, porque el plan de salvaguardia de los cantos de trabajo de llano
trae glosario:

- **Botalón** o bramadero: «poste en forma de **Y**, de madera resistente, ubicado en el medio del
  corral donde se amarran los animales para amansarlos, curarlos o sacrificarlos», de madera de
  corazón —flor amarillo, congrio, guatero, guarataro—.
- **Majada**: corral grande.
- **Burro**: «armazón de tres o cuatro varas cruzadas y amarradas que sirve para sostener la vasija
  que recibe la leche en el ordeño».
- **Garabato**: trozo de árbol con ganchos «que sirve para colgar sogas, aperos y otros utensilios».
- **Mandador**: «vara corta con una correa de cuero larga amarrada a su extremo».
- **Paradero**: «espacio limpio y abierto frente a las casas», donde también se ordeña.

Con esas seis piezas la hoja del hato deja de ser una casa genérica y se vuelve reconocible.

### 3.3 La vivienda: invariantes documentados y un marcador de época

Techos altos que ventilan; **corredores abiertos** donde se cuelga el chinchorro y se recibe; palma
y bahareque —«que une barro con fibras naturales»— por su capacidad de regular la temperatura; y
espacios dimensionados «con manos, codos y pies, junto con instrumentos como cintas de cuero, varas
y cañas». El chinchorro no es mobiliario secundario: es lo que organiza el corredor.

Y el marcador: **el techo de zinc**, que «amplifica el sonido de la lluvia y aumenta la temperatura
en el interior», pertenece al siglo XX y rompe la serie. Si aparece, la lámina está en el tercer
estrato.

### 3.4 Rancho y hato no son la misma hoja, y el censo acertó

La ranchita de Ambrosio junto a las sementeras, con chinchorros colgados, es vivienda de palma y
horcones **de una familia que vive de lo que siembra**. El hato es casa grande con tranquero,
corrales y galpón, y es **una empresa ganadera**. La diferencia no es de tamaño: es de función, y es
la que distingue a Ambrosio de don Antonio Heredia y de don Felipe.

### 3.5 Los interiores de pueblo

Casona de la botija, cafeteadero, cantina, gallera y sitio de parrando comparten una sola gramática:
mesas, luz caliente y concentrada, humo, y el muro grueso como límite. En la casona el muro **no es
fondo sino objeto escénico**: es lo que se derriba y de donde sale la botija.

---

## 4 · Dimensión visual

### 4.1 La sabana tiene tres estados y la lámina declara uno

El llano alterna «entre el período pluvial o de inundación y el período seco o de escasez de pastos
y agua», y el llanero quema porque «sus pastos dispersos necesitan ser **quemados**, sus retoños
comidos y **vuelto a quemar** la sabana para que el ganado viva y prospere bien». El estado quemado
que el censo pide para «El llano ayer y hoy» **no es un efecto dramático: es la práctica ganadera
normal**, y la página la usa como duelo. Entre los tres estados cambia todo: color, altura del
pasto, cielo y fauna. Rubio pajizo de verano, verde húmedo de agua alta, gris ceniza con grietas.

### 4.2 El morichal: una divergencia que hay que declarar

**La palabra «morichal» no aparece ni una vez en las diecinueve páginas**, y el censo ficha sin
embargo `estero_laguna_y_morichal`. La hoja se sostiene, pero sobre documentación territorial y no
sobre el texto: la Orinoquia mal drenada, entre el piedemonte y el Meta en Arauca y Casanare, es
«**el área del chigüiro y de los garceros**»; la selva de sabana «se compone de morichales, en los
bajos, y de matas de monte en altos de sabana»; y el moriche es «la palma fundamental del Llano»,
proveedora de nueces, aceite, almidón y materiales de construcción, y «**ambiente reproductivo de un
sinnúmero de aves**». Queda dicho: la ficha es correcta y su respaldo es documental, no textual.

### 4.3 El piedemonte es el reverso cromático del llano

Las seis páginas de Baquero ocurren en monte cerrado con árboles gigantes, quebradas de agua fría,
caminos viejos y carretera con abismo. Las once de Vargas, en horizonte abierto. Ninguna se resuelve
con la otra, y **ninguna se resuelve con el monte andino de niebla**: el dossier del folclor sin
territorio ya declaró que «los Llanos» tienen «río de sabana y carretera nocturna» y que no heredan
el fondo del cinturón andino.

### 4.4 El río y la luz

El corpus nombra nueve ríos —Cravo, Ariporo, Tate, Pauto, Quachiría, Meta, Orinoco, Casanare,
Arauca— con la misma descripción: cauce ancho, playas de verano, embarcaciones. Una hoja. Las playas
son **estacionales**.

Y la luz fecha la escena. Son cuatro y no se mezclan: **sol alto de sabana abierta**, que aplana el
horizonte y acorta la sombra; **vela, mechito de cera y brasero**, foco corto y cálido, para el
estrato colonial y el rancho; **lámpara de petróleo y luz de cantina**, con halo, para el pueblo; y
**linterna y faro de campero**, única luz fría del corpus y exclusiva de las cinco páginas del
piedemonte moderno. Fuera de eso, sólo luna —plenilunio, menguante, luna roja— y lo que el propio
relato enciende.

---

## 5 · Dimensión de personajes — el recorte, sostenido con el texto

### 5.1 La recomendación se sostiene, pero el número no es dos o tres hojas

El encargo pedía sostener o desmentir que los **23 personajes con ficha propia** —25 láminas— puedan
colapsar en dos o tres hojas de reparto. **Se sostiene el diagnóstico y se corrige el número: son
diez fichas con catorce láminas.** Colapsarlos en dos o tres destruiría lo poco que un lector
llanero reconocería.

La prueba está en el texto, y la hice personaje por personaje. **Trece de los veintitrés no tienen
ni un rasgo físico:**

| personaje | lo único que el texto da |
|---|---|
| don Tarsicio | «un hombre con el magnetismo de un río», «cargaba en su espalda las historias de Europa» |
| don Antonio Heredia | «poseía el mayor hato del lugar» |
| doña Juana | «la esposa de Don Antonio», «el instinto indomable de una madre» |
| David Gamboa | «un experimentado vaquero de Todos los Santos» — un oficio, no un cuerpo |
| Abelardo Piriachi | «con gestos toscos desmentía el halo mágico» |
| Carlos y Victoria | sólo las edades: tres y ocho años |
| don Felipe, el narrador viajero, el viajero y el joyero de la fábula, Casanari, Rosa Linda | conducta, edad o linaje; ningún cuerpo |

Todos ésos son **registro** y no identidad.

### 5.2 Los siete que conservan ficha propia, y por qué

| ficha | razón |
|---|---|
| **Pascual** (2 láminas) | prenda y prop nombrados en el texto: «un hombre de poncho cruzado y rula firme en mano», más un estado que ninguna hoja de identidad da —vuela en escoba hacia la luna— |
| **Saúl, el Niño Mentiroso** | recurrencia: seis páginas, y la continuidad es lo que lo hace legible |
| **Ambrosio** | rasgo explícito: «su figura, **alta y enjuta**», y el lazo es su extensión natural |
| **Catire José Amalio** | la única descripción física plena del corpus: «joven alto, de ojos azules»; y su página es la del conflicto étnico, donde no es sustituible |
| **Catire Melecio** | piel curtida y el apodo que hereda el hijo; su muerte es la bisagra y su tumba el lugar donde escarba Patorreal |
| **Padre Manare** (2 láminas) | la sotana fecha la escena, y el estado de sombra de plenilunio es una silueta distinta |
| **Pamoare** | la única figura del corpus con vestuario descrito, aunque inventado, y hay que declararlo como invención |

Más **Melecio hijo**, que hereda la marca catire y sostiene el desenlace: diez fichas, catorce
láminas.

### 5.3 Las tres hojas de reparto, organizadas por época y oficio

1. **Reparto de hato**, estrato republicano. Variantes: patrón, señora de casa grande, vaquero,
   joven, muchacha. Absorbe a don Antonio, doña Juana, don Felipe, David Gamboa, María de los
   Ángeles, Rosa Linda, Carlos, Victoria y Casanari.
2. **Reparto del piedemonte**, 1982-1985. Variantes: visitante de ciudad, curandero, hombre de
   camino. Absorbe al narrador viajero, a don Tarsicio, a Piriachi con Catimay y a don Agapito.
3. **Reparto de la fábula**, que no es llanero. Absorbe al viajero y al joyero junto a la corte del
   rey, que ya está fichada.

**Ahorro: once láminas**, de 25 a 14.

### 5.4 Los que no se colapsan aunque parezca

**Los guates.** Campesinos de tierra fría que bajan al llano con sus bestias cargadas, y toda «Las
chanzas de don Felipe» se sostiene en que se ven distintos del llanero. La diferencia que la fuente
permite dibujar es concreta: ropa de altura frente al dril arremangado y el pie descalzo, y bestia
cargada frente a caballo de silla.

**La peonada.** Tiene oficios con nombre y posición, y eso da variantes sin costar láminas: el
**cabrestero** «encabeza un lote de ganado», los **orejeros** «van detrás del cabrestero a cada lado
del lote», y el **becerrero** es el «peón, casi siempre muy joven, que cuida de los becerros». Un
lote grande podía llegar a mil reses con veinte o veinticinco vaqueros. Eso convierte la hoja en una
gramática y no en un figurante repetido.

---

## 6 · Dimensión de criaturas — la herencia, comprobada y no asumida

**De las ocho figuras con duplicado verificado del folclor nacional, este cubo hereda una.**

### 6.1 El Duende sí se hereda, y el Domínguez es su variante llanera

El Duende está entre las ocho, y funciona precisamente porque **no tiene rostro canónico**: una sola
ficha sirve a todas las regiones sin contradecir ninguna, con la prohibición expresa de fijarle
cabello dorado, ojos azules o pies invertidos. El Domínguez se distingue por **conducta y no por
cuerpo**: sale de día y sólo los domingos, vive entre ceibas, macanos amarillos y guacamayos, toca
tiple y bambucos, y su falta no es trenzar caballos sino acosar muchachas. Eso es lo que la ficha
tiene que resolver **sin darle rostro**. Y hay un precedente exacto: el Duende del Salto de
Santander es «enano ensombrerado **con tiple** en la caverna», y allí el tiple se resolvió como
utilería y no como lámina nueva.

### 6.2 La Mojana NO se hereda

El dossier nacional ya resolvió por la negativa: **no producir la Mohana como lámina nacional**
«hasta que alguien decida si son una figura o tres», porque Tolima-Huila prohíbe expresamente fundir
su Madre de Agua con ella —su rasgo distintivo, «pies vueltos hacia atrás», sólo lo sostiene su
versión— y este cubo la declara la hembra del Mohán. **Las dos hojas se producen como fichas de este
corpus y de nadie más.** Lo que las justifica son dos siluetas incompatibles dentro de la misma
página: la campesina fuerte de cabello castaño recogido, diente de oro y botella de aguardiente que
sale **a pleno día** junto a la quebrada de ceibas, y la Mojana caribeña de cabellos dorados y casa
sumergida que Pascual describe de oídas.

### 6.3 La Bola de Fuego se relaciona con la Candileja sin fundirse

La versión del interior suele tener **tres llamas** y una biografía distinta; la forma llanera es una
luz errante única que salta sobre la sabana, y su contra no es el rezo sino la maldición y el
machete arrastrado. Pero el segundo estado que el censo ficha —la mujer de cabellos dorados que
emerge del núcleo— es exactamente lo que la revisión editorial prohibió al pedir «sin rostro en las
llamas». **Recomendación: producir la esfera y dejar el segundo estado en suspenso.**

### 6.4 Y no hay Silbón, ni Llorona, ni Madremonte, ni diablo apostador

El censo lo verificó y este dossier lo confirma. Conviene añadir que no es una pérdida: el cuerpo
del Silbón está **excluido** también en el corpus nacional, por doctrina acústica —del espanto
sonoro «nadie lo ha visto, nadie lo imagina»—, de modo que aquí no habría nada que heredar aunque
apareciera el nombre.

### 6.5 Las cinco criaturas propias

**El Tirapiedra** tiene aquí cuerpo, a diferencia de otras versiones: fue el estudiante al que
llamaban el muerto, flaco y pálido, apedreado por una multitud, y ahora lanza piedras invisibles en
los caminos viejos. **Las tres damas de Paratebueno** resplandecen en el local de joropo, suben al
carro y se revelan como calaveras danzantes: dos siluetas, dos hojas, y el cambio es el relato. **La
bruja de los ojos de miel** es una mujer elegante de tacones firmes sobre el barro cuyo peso hunde
el campero y cuyo cabello permanece **seco** bajo el aguacero; **su cara no se ve, y la ficha debe
fijar esa ocultación como rasgo y no resolverla**. **El verraco negro** es un animal único y
monstruoso, no la piara. Y **Patorreal** es la única aparición que nace del propio oficio: un toro
negro que sale de la tierra donde yace el Catire, escarba junto a su tumba y hace remolinear el
ganado en estampida. **No es un espanto importado: es el hato volviéndose contra sí mismo**, y su
lámina se compone con las piezas del trabajo de llano y no con el repertorio de aparecidos.

### 6.6 Un préstamo literario que hay que declarar

Las **mariposas amarillas** aparecen tres veces —con el llanto de Saúl, junto a la quebrada antes de
la Mojana, y como forma en que regresan las brujas— y en las tres funcionan como cita del realismo
mágico colombiano, no como fauna observada. La hoja se produce, porque tres páginas la necesitan,
pero se marca como **recurso de autor** y no como dato del territorio.

---

## 7 · Animales, plantas y fenómenos

**La fauna es la fauna real de la Orinoquia mal drenada**, y eso se puede afirmar con fuente:
chigüiro y garceros, y el moriche como criadero de aves. La hoja de aves es un **termómetro del
paisaje**: la bandada de alcaravanes, güéreres, patos y garzones de antes contra el cielo de
carroñeras de ahora es la imagen entera de una página.

**La garza actúa y no adorna**: talla cruces en el agua con el pico antes del diluvio chiricoa, y su
pluma es, en la otra página, el artículo de exportación que baja por el Meta rumbo a Europa. Es la
única entidad del corpus que es a la vez presagio y mercancía.

**Tres cuerpos de trabajo distintos** y el censo acertó al no fundirlos: caballo de silla con lazo
—que en una página vuelve solo con la noticia de una muerte—, mula y burro de carga, y ganado. El
perro cierra el elenco y es el que avisa. La **cascabel** cubre también la cuatronarices y la rabo
de ají, «porque el texto no distingue sus cuerpos, sólo su veneno», y ése es un límite del corpus
que la ficha declara en vez de resolver inventando tres ofidios. La **marranera** va en masa baja y
desordenada, el ganado en formación. Y el **jaguar** aparece una sola vez y quiebra la cosmogonía:
sin él no hay llanto, ni lagunas, ni dispersión del linaje.

**Las plantas se dividen en dos.** El conuco está documentado y fechado: plátano, maíz y yuca en las
sementeras, algodón y café en el resguardo jesuita, cafetales y guaduales en el XX. Las del
curandero **no se nombran nunca por especie identificable** —leche de higuerón, jabón y brandy,
hierbas amargas, raíces reunidas con el brasero, ruda y albahaca—, y esa indeterminación no se
resuelve inventando un herbario: la hoja fija deliberadamente un conjunto genérico y lo dice.

**El árbol monumental es la vertical del llano.** En un horizonte plano, el árbol grande no es
fondo: es la única arquitectura natural que la lámina tiene para componer profundidad.

**Los fenómenos son agentes.** La tormenta es condición de aparición y el aguacero es lo que revela
a la bruja. Los tres luceros son almas convertidas en luz, y la misma regla gráfica resuelve el
cierre de la fábula: sólo cambia el número. El diluvio chiricoa tiene imagen propia —cruces talladas
en el agua, familias que suben en totumos que crecen con la marea—.

Y **el tesoro enterrado** dice algo sobre este corpus: es el mismo cuerpo en cuatro páginas, y
siempre es el bien que aparece sin trabajo y que siempre castiga.

---

## 8 · Lo que va al expediente y a ninguna lámina

La Rubiera de 1967 y las guahibiadas, ya dichas. Y además: la Violencia de los cincuenta, la
guerrilla que reclama a Carlos, el estudiante apedreado, el asesinato con hacha de don Esteban, la
mujer asesinada en el Pollo de Oro y los hermanos Parra. El censo los excluyó con razón.

**Ninguna imagen de este cubo muestra a nadie huyendo, llorando ni armado contra otra persona,
ningún cuerpo, ninguna sepultura abierta y ninguna excavación de guaca.** La tumba llanera se dibuja
**cerrada**, con su cruz tosca y sus flores. La bóveda del tesoro se dibuja vacía o sellada, nunca
siendo saqueada.

---

## 9 · Expediente de fuentes

Veintinueve fuentes con localizador verificado por respuesta HTTP en esta sesión. El detalle
completo está en
[`content/mitos-visuales/research-2026-09-18/orinoquia-llanera-mestizo.json`](../../content/mitos-visuales/research-2026-09-18/orinoquia-llanera-mestizo.json).

Reparto por papel: **4 primarias o tempranas** (Vargas Barón 1996, Baquero Nariño 1988, la acuarela
de Paz de 1856 y Gumilla 1741), **12 académicas**, **4 de voz comunitaria o regional**, **5
institucionales**, **3 de comparación** y **1 territorial**.

Las cinco sobre las que descansa el dossier:

1. **Los dos libros de autor**, que son el corpus mismo y cuya condición de literatura individual es
   la clave de todo el recorte de personajes.
2. **Gómez López, Molina y Suárez (Maguaré, 2012)** — la definición legal del hato, el
   procedimiento de fundación, las quemas, el complejo jesuita, y La Rubiera con su expediente
   citado.
3. **El Plan Especial de Salvaguardia de los Cantos de Trabajo de Llano** — el glosario que hace
   dibujable el corral: botalón, majada, burro, garabato, mandador, paradero, cabrestero, orejero,
   becerrero.
4. **Rueda Enciso (HiSTOReLo, 2013)** — la secuencia fechada de materiales: bahareque y palma, cal y
   canto con teja en 1788, tapia pisada para el estanco.
5. **Castañeda (2012) y Palacio (2020)** — la cronología del conjunto instrumental, que convierte la
   ausencia de arpa en un dato y no en un vacío.

---

## 10 · Matriz de evidencia

**53 afirmaciones**, cada una con base, sensibilidad, fuentes y las fichas del censo que toca.
Cobertura verificada: **70 de 70 fichas `required`**, más las tres hojas de agrupación.

Reparto por base: 45 `documented_core`, 5 `editorial_interpretation`, 2 `uncertain` y 1 `variant`.
Las dos `uncertain` son las que hay que mirar: **la fundación de Támara en 1626** y **la autoridad
del siglo XVIII que este dossier no leyó**. Por sensibilidad: 49 `public`, 3 `consult_required` y 1
`do_not_visualize`, que es La Rubiera.

---

## 11 · Revisión histórica declarada como `documented_exception`

El bloque completo está en el JSON, con nueve límites de alcance y **cinco salvaguardas**. El
argumento, resumido: aquí no hay comunidad a la que consultar, porque el denominador es una época,
un oficio y dos libros firmados. Lo que sí correspondía y no se hizo es la revisión histórica con
instituciones identificadas: el **Juzgado Segundo Superior de Ibagué**, donde reposa el expediente
de La Rubiera que este dossier cita sin haber visto los folios; el **Ministerio de Cultura y los
portadores** del plan de salvaguardia de los cantos de trabajo, que son quienes sí saben cómo era un
corral y a quienes se cita sin haberles preguntado nada; la **Biblioteca Nacional**, que custodia la
acuarela de 1856 y que sólo se consultó por ficha digital; y las **alcaldías y casas de cultura de
Támara, Pore, Nunchía y Orocué**, cuyos archivos podrían resolver la fecha que queda dudosa.

Y hay tres puntos donde sí hay comunidad concreta: la genealogía inventada de los Achaguas, Amorúas
y Betoyes; los Sálivas y el desprecio del hacendado hacia el curandero indígena; y el nombre del
hato. **Ninguna autoridad cuiva, sáliva, achagua o sikuani fue consultada, y sin esa consulta este
cubo no produce imagen de ningún pueblo indígena, ni siquiera de espaldas.**

Las cinco salvaguardas, en titular: **el estrato declarado** y sin objetos que crucen; **la regla
del arpa**, que es el marcador más fácil de vigilar y por eso es el que se vigila; **el reparto sin
identidad prestada**, con Casanari y Pamoare sin una sola pieza indígena real; **la violencia fuera
de cuadro**, con la tumba cerrada y la bóveda sellada; y **la reversibilidad**, con las tres
decisiones que más pesan marcadas con nombre —la fecha de 1626, el segundo estado de la Bola de
Fuego y la existencia misma de David Gamboa—.

---

## 12 · Carencias documentales

Ocho, con lo que se buscó y qué se encontró, en el JSON. Las cuatro más graves:

1. **La fecha de fundación de Támara.** La página dice 1626; las fuentes apuntan a 1628 y a un
   encargo jesuita de 1624-1625. Es la carencia que más afecta a una lámina concreta.
2. **El traje llanero del siglo XIX.** Es el tema con peor cobertura académica del dossier: **no
   existe ningún artículo arbitrado colombiano dedicado al traje llanero con cronología**. Toda la
   dimensión de personajes descansa sobre una cita de mediados del XIX reproducida por divulgación,
   una tesis de 1943 citada por un blog, y la acuarela de Paz. Conviene decirlo antes de que alguien
   los tome por más de lo que son.
3. **El hato entre 1856 y 1950, con levantamiento y no con memoria.** La fuente ideal existe por
   título pero su repositorio está detrás de un muro anti-robot. La casa grande se dibuja por sus
   partes documentadas y no por un modelo levantado.
4. **No existe ninguna recolección de campo anterior a los dos libros de autor.** Para catorce de
   las diecinueve páginas, la cadena de transmisión empieza y termina en el libro firmado. **Ésta es
   la carencia estructural del cubo y la razón de fondo por la que el reparto se puede colapsar sin
   perder nada: no hay tradición detrás de esos personajes que reclame su cara.**

Las otras cuatro: el día exacto de La Rubiera (las fuentes discrepan entre el 25 y el 26 de
diciembre); la forma de los vapores del Meta, que no está descrita en ninguna parte accesible; el
alcaraván, el güérere, el gabán, la corocora y la baba, que el corpus nombra y ninguna fuente
respalda; y el respaldo de la cronología del arpa, que es sólida por convergencia pero descansa en
un trabajo de grado y en divulgación.

---

## 13 · Sistema visual propuesto

El bloque completo —técnica, técnica de plano corto, medio, luz, época, materias base, **4 reglas de
color** y **8 prohibiciones**— está en el JSON. Los titulares:

- **Técnica:** papel recortado y quilling fotografiado como maqueta 3D inmersiva, cámara dentro de
  la escena a la altura del jinete. A sangre, sin marco ni soporte.
- **Plano corto:** rostro plano de un solo tono, rasgos como piezas recortadas aparte; crin, pelaje
  y paja con **pocas piezas planas grandes con el borde en dientes**. Quilling sólo para lo que
  enrolla: el polvo de la estampida, el humo del brasero, la bola de fuego, el lazo en vuelo.
- **Época:** tres estratos que no comparten cuadro, con el alumbrado y el transporte como objetos
  que deciden.
- **Color:** el llano **no es verde**, tiene tres estados y la lámina declara uno; el cielo es la
  mitad del cuadro porque no hay relieve que lo corte; el piedemonte es el reverso cromático y nunca
  comparte paleta con la sabana abierta; el blanco es el valor más alto y sólo donde el corpus lo
  nombra.
- **Prohibiciones:** entre las ocho, las tres que definen el producto son *ningún arpa, cuatro ni
  bongo*; *ninguna pieza de las biblias Sikuani o U'wa*; y *ningún rostro para el Duende ni para la
  bruja de los ojos de miel, y ningún rostro dentro de las llamas*.
