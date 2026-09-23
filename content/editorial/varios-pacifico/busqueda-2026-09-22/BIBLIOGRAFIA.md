# Bibliografía · ciclo varios y Pacífico (13 fichas) · 2026-09-22

**Cerrado el 2026-09-22.** Paso 1 del brief; no se redactó ninguna ficha ni acta.

## Lo primero que hay que saber

1. **«Varios» no es una región: es el índice de un libro de ficción.** Doce de
   las trece fichas llevan el título de una entrada de *Cuentos de espantos y
   otros seres fantásticos del folclor colombiano* (Casa Editorial El Tiempo /
   U. Autónoma, 2004), que se declara «material de ficción… documentos
   imaginarios». Las «invenciones» que los módulos ya retiraron (Pamba Ahumé,
   Lina y Santiago en `el-mandingas`; la carta del pasajero en `el-bus-fantasma`)
   **son relatos de ese libro**, y las páginas web que los módulos citan para la
   Viudita copian su «ficha técnica». Ver tanda 3.
2. **La región real sale de otras fuentes, y a veces contradice al módulo**:
   el Jinete Negro es de **Ocaña** (no Cundinamarca-Boyacá), el Mandingas es un
   nombre andino del diablo (no Caribe), el Padre Mera es del **Vicariato de
   Tumaco** (no del Cauca), el Judío Errante es de **Tunja** desde un libro de
   1909, la Viudita y el Cura sin Cabeza son de **Pasto y Túquerres**, la Sirena
   del Arco de **Tumaco** (1997). Llorona, Madremonte, Mohán y duendes son
   panregionales con registros concretos en Tolima, Caldas, Boyacá, Santander y
   Huila. Ver REPARTO REAL.
3. **El Padre Mera tiene primario completo y con narradores**: Garrido 1980,
   reproducido en Villa Posse II, sección 27. Y se llamaba **Jesús María**, no
   Manuel María como dice el módulo.
4. **El registro más antiguo de cuatro fichas es una página infantil del ICAN
   de 1997** (Esmeralda Van Vliet), rescatada en un PDF de ERIC que el módulo
   citaba con otro título. Pone cada leyenda en boca de un niño de una región.
5. **Tres fichas mixtas duplican el carril Tolima** (Mohán, Madremonte,
   duendes: mismas páginas de Devia y Rocha en Villa Posse II). Ver DECISIONES.

Recuento: **6 confirmados · 5 probables · 2 sin rastro.**

---

# Levantamiento por tandas (la cantera)

Módulos: editorial/varios-mestizo-final (3), editorial/varios-mixto-final (7),
editorial/pacifico-narino (2), editorial/pacifico-restante (1).

## Estado de partida (tablero 2026-09-22)

Las 13 fichas están en Neon con **0 fuentes** y título crudo («El mohán», «La
llorona»…): los cuatro módulos del repo nunca se aplicaron. Región en Neon:
`varios` para las 10 de los dos módulos «varios»; `pacifico` para las 3 del
Pacífico. Pero los módulos ya les reasignan `category_path` —y esa es la
primera lectura crítica—:

| slug | Neon (comunidad / región) | `category_path` que propone el módulo |
|---|---|---|
| el-bus-fantasma | mestizo / varios | Varios > Varios > Mestizo |
| el-judio-errante | mestizo / varios | Andina > Boyacá > Mestizo |
| la-viudita | mestizo / varios | Andina > Nariño > Mestizo |
| el-cura-sin-cabeza | mixto / varios | Andina > Nariño > Mestizo |
| el-jinete-negro | mixto / varios | Andina > Cundinamarca y Boyacá > Mestizo |
| el-mandingas | mixto / varios | Caribe > Bolívar y Atlántico > Mestizo |
| el-mohan | mixto / varios | Andina > Tolima > Mestizo |
| la-llorona | mixto / varios | Andina > Tolima > Mestizo |
| la-madremonte | mixto / varios | Andina > Tolima > Mestizo |
| los-duendes | mixto / varios | Andina > Tolima > Mestizo |
| el-padre-mera | mestizo / pacifico | Pacífico > **Cauca** > Afrocolombianos |
| la-sirena-del-arco | mixto / pacifico | Pacífico > Nariño > Mixto |
| el-barco-fantasma | mestizo / pacifico | Pacífico > Varios > Mestizo |

## Tanda 1 · Villa Posse II, barrido completo por personaje

Abierto: `https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620`
(PDF 1,99 MB, con capa de texto; 17.183 líneas con `pdftotext -layout`). Índice
del tomo leído entero. Folio: el número **encabeza** la página (ver
`caribe-mestizo-final/primarias/LEEME-villa-posse.md`, corrección 3).

### Hallazgo 1 · El Padre Mera tiene primario, y el módulo le cambia el nombre

**Sección 27, «LEYENDA · Tumaco – Departamento de Nariño», pp. 345-358.** Nota de
procedencia (p. 345): *GARRIDO, José Miguel, O.C.D., Tras el alma de un pueblo
(Folclor religioso del Vicariato de Tumaco), Tumaco, Vicariato de Tumaco, 1980,
pp. 191-201.* Garrido lo titula «LA LEYENDA VIVA del padre Mera». Texto en
`../primarias/villa-posse-1993-ii-s27-tumaco-garrido-1980-padre-mera.txt`.

Estructura: 1. Curiosidad (Salahonda, el síndico, el alabao de Viernes Santo
«si no viene el Padre Mera / nos íbamos a acabar») · 2. Testimonios: a. Llegada,
b. Prodigios, c. Viajes, d. Personalidad, e. Pensamiento · 3. Paso a la leyenda
(coplas y décimas) · 4. Documentos (partidas parroquiales) · 5. Reflexión.

Lo que cambia la ficha:

1. **El nombre.** El módulo dice «Manuel María Mera». Garrido, con partidas
   parroquiales a la vista, dice **Jesús María Mera**: bautizado en San Antonio
   de Florida (Valle) el 27-01-1872, hijo de Pedro Mera y Eloísa Penagos (libro
   6, f. 98); partida de las misiones de Chimbuza firmada por el párroco Rosendo
   Veintemilla, 12-10-1910; muerto en el Hospital de **Palmira** y sepultado el
   2-08-1926 (Catedral de Palmira, libro 32, f. 426). La copla final lo dice:
   «se llama Jesús María». El «Manuel María» del módulo viene de la fuente
   FLACSO/Agier; hay que cotejarlo antes de escribir (ver DECISIONES).
2. **El territorio.** El módulo lo clasifica en **Cauca** (Guapi). Garrido lo
   documenta sobre todo en el **Vicariato de Tumaco (Nariño)**: Salahonda,
   Chimbuza, Papí, San Pedro del Vino, Patía Viejo, Cuandambí, Telembí, San José
   de La Laguna, Barbacoas, Payán, Bocagrande, Cabo Manglares; Guapi (Cauca) es
   sólo la Semana Santa de 1910 y el incendio del 15-07-1913. Itinerario
   documental: Pradera (Valle) mayo 1909 → Guapi, Semana Santa 1910 → Chimbuza,
   oct. 1910 → Salahonda, mar. 1911 → Payán, Semana Santa 1911 → Barbacoas,
   jun.-ago. 1911 → Cuandambí, may. 1912. Luego Puerto Tejada (h. 1919),
   Pradera, Candelaria y Florida (1920-26).
3. **La lavandera de Guapi ya está en el primario**, con otra forma: la mujer
   que lava en el río dice «¿Padre? El diablo será»; en la confesión él le
   pregunta «¿te vas a confesar con el diablo?», y desde entonces lo tiene por
   santo. El módulo la conserva bien; lo que no dice es de dónde sale.
4. **La marimba.** Garrido registra que «no permitía que en la iglesia entrasen
   bombos ni cununos; prohibía los bailes», y la copla «La marimba y la sonaja /
   con el baile y el cununo / si no olvidamos todo esto / no hemos enmendado
   ninguno». **No** registra instrumentos arrojados al río: eso viene de otra
   fuente (Comisión de la Verdad) y hay que anclarlo allí o retirarlo.
5. **Hay narradores**, sin nombre pero con edad y lugar: el síndico de Salahonda
   («más de setenta años»); una anciana que lo conoció de señorita (San José, el
   Señor del Amparo); un antiguo monaguillo nacido «en la guerra de los mil
   días» (Payán, el padre Veintemilla y el Cristo que sangra); un hombre de más
   de 90 años (llegada desde Ecuador por Cabo Manglares y Bocagrande); un señor
   de 78 años (San José, h. 1909-1910, río Nansalbí); una señora nacida el
   20-01-1889, casada en 1908 (Chimbuza → Papí → San Pedro del Vino →
   Salahonda: «decían que había salido de un guadual en la costa»); coplas
   recogidas en el río Ispí. Recolección: Garrido, párroco carmelita, h. 1979-80.
6. Motivos que el módulo no tiene y el primario sí: el Señor del Mar de
   Salahonda y la Ola de 1906; el látigo en la correa y «no se le veían los
   pies… era San Antonio»; la vaca que llena la vasija grande; la panela que se
   vuelve piedra; el Señor del Amparo que se levanta en San José; los difuntos
   que se oyen bajo la iglesia de Salahonda; la niña resucitada en Balsita, cerca
   de Iscuandé («en Sanabria»); la lluvia sin agua en San José; el buque
   *Tumaquito*, que no lo quiso llevar y se hundió; crucificado boca abajo en su
   cuarto; Garrido cree que descendía de esclavos del Sr. Julián Mera.

### Hallazgo 2 · Los Tolima de este ciclo están en las secciones 20 y 21

Ya extraídas por el carril Tolima (`content/editorial/tolima/primarias/`):
sección 20 (Devia 1962): **El Mohán p. 145**, **La madre monte p. 149**,
**Brujas y duendes p. 165**; sección 21 (Rocha Castilla 1968): **El mohán
p. 169**, **El poira p. 181**, **La madremonte p. 181**, **El duende p. 182**,
y en la misma p. 182: «**Mandingas**, Biruñas, El Maligno, El Patas, algunos de
los muchos nombres del diablo».

La Madremonte de Rocha (p. 181) es «una especie de ninfa de los montes del
llano» que seca las fuentes de quien corre las cercas: «Compadre: si me
adelanta las cercas cuidao con la Madremonte»; en Corpus la representaban
«ataviada con vestidos hechos totalmente de hojas». Es el pleito de linderos,
no la dama musgosa del módulo.

### Hallazgo 3 · La Llorona, en una nota a pie de Santander

Sección 19 (Santander), nota 5 al texto de «La mancarita»: «En algunas
comarcas santandereanas, el grito del mochuelo es atribuido también a la
Llorona, mujer salvaje que recorre de noche las quebradas y riachuelos en busca
de un hijo que ella misma ahogó». Es mención, no relato; fecha su circulación
santandereana en los años 40 (la sección cita revistas de Bucaramanga de
1941-46).

### Sin rastro en Villa Posse II

La Viudita, el Judío Errante (sólo un judío portugués en la Cartagena de Porto
de González, otro relato), el Jinete Negro (sólo «un jinete caballero en
negrísima mula» en Otero D'Costa, p. ~ sección 17, otro relato), el Cura sin
Cabeza (hay un «caballo sin cabeza» en Cartagena), la Sirena del Arco, el
barco fantasma / Maravelí, el Bus Fantasma.

## Tanda 2 · Ocampo López 1977, el segundo escalón de Boyacá (y algo más)

**Javier Ocampo López, *El pueblo boyacense y su folclor*, Tunja, Corporación
de Promoción Cultural de Boyacá, 1977.** Biblioteca Virtual Banrepcultural.
- Ficha: `https://babel.banrepcultural.org/digital/collection/p17054coll10/id/2782/`
- PDF (200, 160 pp., con texto): `https://babel.banrepcultural.org/digital/api/collection/p17054coll10/id/2782/download`
- Extracto del cap. 8, «Mitos, leyendas y creencias populares en Boyacá»
  (pp. 120-131): `../primarias/ocampo-lopez-1977-pueblo-boyacense-cap8-mitos-leyendas.txt`

Es la obra que el módulo `varios-mestizo-final` cita como `boyacaFolklore`, pero
**sin año ni editorial**. Qué dice, página a página:

- **El Judío Errante, pp. 124-125.** «La Leyenda del Judío Errante en Tunja
  aparece desde finales del siglo XVI»: la escultura del Judío de Santo Domingo,
  «esculpida con la del Nazareno en los mediados del siglo XVI»; los novicios
  creían que salía de noche, robaba alimentos, volvía la cabeza, lloraba
  escondiendo la frente; «un viernes santo el Padre Luis recibió la visita de un
  viajero… el viajero resultó ser Ahseverús». **Nota 46: la fuente de Ocampo es
  Rosa María Otálora de Corsi, *Ambiente tunjano (Crónicas y leyendas de
  Tunja)*, Tunja, 1939.** Ese es el registro más antiguo que fija el relato
  tunjano; el módulo no lo conoce. (Otálora tiene además una «Sección de
  folklore» en *Repertorio Boyacense* 161-162, 1963, pp. 23-98.)
- **La Llorona, p. 121.** «es un mito de los pueblos y los campos boyacenses…
  aparece como una mujer con largas vestiduras y rostro de calavera, llevando en
  sus brazos un niño muerto». Registro boyacense de la Llorona, con rasgo propio
  (el niño muerto en brazos, no buscado en el agua).
- **Los duendes, p. 123.** Enanos de trajes vistosos en las minas, lluvia de
  piedras sobre los techos, persecución de «las mozas casaderas», esconden
  escobas, ríen en los cielos rasos.
- **La madremonte, p. 121**, y **«el jinete negro… la viudita», p. 123**, sólo
  en listas («Otros mitos que han sido estudiados son: la dama peluda, el
  currucucú, **el jinete negro**, el ánima sola, la cabellona, **la viudita**,
  la mula de tres patas»). Es la única obra de la cantera que pone al Jinete
  Negro y a la Viudita **en Boyacá**, y no los cuenta.
- **El mohán, p. 127**: «campesinos adoraban un hueso de un mohán» (creencia,
  no el personaje fluvial).
- Tunja: espantos urbanos (farol de las Nieves, espanto del Panóptico —un fraile
  con calavera bajo la capucha—, perro de San Francisco, toque de ánimas). Nota
  44: Ramón C. Correa, *Historia de Tunja*, t. II. Sirve de paralelo para
  `el-cura-sin-cabeza` (el sacerdote-ánima de San Francisco que espera ayudante
  en el altar: es la «misa espectral» que el módulo cuenta sin fuente).

**Limitación:** síntesis de historiador, sin informantes; en mitos cita
segunda mano (Fals Borda, Correa, Otálora). Sirve para localizar y fechar, no
para narrar.

## Tanda 3 · EL HALLAZGO QUE CAMBIA EL CICLO: el cajón «varios» es el índice de un libro de ficción de 2004

**Casa Editorial El Tiempo / Universidad Autónoma de Colombia, *Cuentos de
espantos y otros seres fantásticos del folclor colombiano*, Bogotá, 2004**
(Proyectos Especiales; editor Julio Orozco Vargas; equipo de autores e
investigadores dirigido por Juan Torres Mantilla, con Constanza Orozco Vargas,
Nohora Gómez Villamarín, Luis Carlos Álzate, Enrique Rodríguez, Andrés Castillo
Brieva, Aída Lucía Quekán; ilustraciones David Niño y Rafael Yockteng;
agradecimiento a Javier Ocampo López). 103 pp. + «Diccionario básico del
horror».

- Copia íntegra en Internet Archive, subida por un particular en 2016 (no por
  el editor), identificador
  `CuentosDeEspantosYOtrosSeresFantasticosDelFolclorColombiano..compressed`:
  `https://archive.org/details/CuentosDeEspantosYOtrosSeresFantasticosDelFolclorColombiano..compressed`
  (PDF con capa de texto de 106 pp. y `_djvu.txt`). **La copia está
  incompleta**: faltan las láminas de *La Madremonte* (pp. 17-18) y de *Los
  duendes* (pp. 33-34); el salto se ve entre el PDF 25-27 y 40-41.
- Es el libro que el módulo `varios-mestizo-final` cita como
  `colombianBestiary` (ficha Koha de la Biblioteca de Mosquera) y el carril
  Tolima ya extrajo en parte
  (`content/editorial/tolima/primarias/casa-editorial-el-tiempo-2004-cuentos-de-espantos-extractos-tolima.txt`).

**El índice del libro (leído, pp. 1-103) contiene los títulos de 12 de las 13
fichas del ciclo**, con su número de página:

| p. | entrada | slug |
|---|---|---|
| 3-4 | La Llorona | `la-llorona` |
| 5-6 | El Mohán | `el-mohan` |
| 9-10 | El Cura sin Cabeza | `el-cura-sin-cabeza` |
| 17-18 | La Madremonte | `la-madremonte` |
| 21-22 | El Mandingas | `el-mandingas` |
| 23-24 | El Jinete Negro | `el-jinete-negro` |
| 33-34 | Los Duendes | `los-duendes` |
| 45-46 | La Viudita | `la-viudita` |
| 49-50 | La Sirena del Arco | `la-sirena-del-arco` |
| 51-52 | El Judío Errante | `el-judio-errante` |
| 53-54 | El Buque Fantasma | `el-barco-fantasma` (el cuerpo lo titula «El Barco Fantasma») |
| 73-74 | El Bus Fantasma | `el-bus-fantasma` |

Sólo `el-padre-mera` no está. Y los títulos de Neon («El mohán», «La
llorona», «El jinete negro», «El mandingas», «La viudita», «El bus
fantasma», «El judío errante»…) son literalmente los del índice.

**Lo que es este libro, dicho por él mismo** (portadilla, p. 525 del djvu):
«Anécdotas, testimonios, narraciones, noticias, cartas, informes médicos,
anotaciones, bocetos, fotografías y otros **documentos imaginarios** sobre
espantos y apariciones en Colombia» y, al pie de cada relato: «**Material de
ficción.** Cualquier parecido con la realidad es pura coincidencia». Cada
entrada tiene dos partes: una **lámina con «Ficha técnica»** (clase,
localización, hábitat, tamaño, poderes, características físicas, contras) y un
**relato de ficción** de autor (carta, crónica, diario, informe) con
personajes inventados.

**Consecuencia 1 — las «invenciones» que los módulos ya retiraron salen de
aquí.** El módulo `varios-mixto-final` retira de `el-mandingas` a «Pamba Ahumé,
una prometida llamada Lina y Santiago, un tamborero de pezuñas», y dice que
«no se encontró ese duelo en el archivo sonoro…». **Está en el libro, p. 22
(PDF p. 30)**: Pamba Ahumé, «nacido en el Macizo de la Guyana», Lina, el
extranjero Santiago con «patas de cabra», el testigo René Velandia, el
Carnaval de Barranquilla y la tambora con dos manos marcadas a fuego. Del mismo
modo, el bus «sin conductor», la carta hallada y el «esfero brillante y
plateado» de `el-bus-fantasma` están en la p. 74 (PDF p. 78). **No eran
invenciones del sitio: eran ficción de autor de 2004 tomada como folclor.** La
decisión de retirarlas sigue siendo correcta, pero la `historia` debe decir de
dónde venían.

**Consecuencia 2 — la «región» del cajón sale de la ficha técnica del libro.**
Lo que el libro asigna (leído en el texto o en la imagen de la lámina):

| entrada | «LOCALIZACIÓN» de la ficha técnica (2004) |
|---|---|
| La Llorona | «todos los pueblos y campos colombianos», y América Latina, Europa y Asia |
| El Mohán | «a lo largo y ancho del río Magdalena»; hábitat «playones del valle del río Magdalena» |
| El Cura sin Cabeza | «Antioquia, Tolima Grande, altiplanicie cundiboyacense, ciudades de tradición colonial como Popayán, Pasto, Mompox, Santa Fe de Antioquia, Tunja, Ocaña, Pamplona, Santa Marta y Cartagena»; otros nombres «Fraile sin cabeza, Cura descabezado, **Espanto del Panóptico** y Beato» |
| El Mandingas | «le gusta habitar entre los humanos, vive tanto en pueblos como en ciudades» (sin región; el relato pasa en Barranquilla) |
| El Jinete Negro | «Antioquia y los Santanderes»; hábitat «ciudades de origen colonial»; «en los Santanderes se conoce como **El Fantasma de Antón García**» |
| La Viudita | «Antioquia, **Nariño** y Occidente colombiano»; anciana de negro con mantilla verde, calavera que lanza fuego por las cuencas, sacristías, sótanos y callejuelas |
| El Judío Errante | «viaja por todas las regiones de la tierra» |
| El Buque/Barco Fantasma | «costa Pacífica»; hábitat «el agua» |
| La Madremonte, Los Duendes | láminas ausentes de la copia digital |

**Consecuencia 3 — los repertorios web que los módulos citan son derivados de
este libro.** La Viudita de `elrinconcolombiano.com` y del blog de 2008
(anciana, negro, mantilla verde, calavera con fuego, sacristías, sótanos,
«andar de pasos cortos y rápidos») reproduce la ficha técnica de 2004. El
módulo dice que «ninguna declara informantes y ambas pueden depender de
repertorios impresos»: **dependen de éste**. No son dos testigos: son una
fuente.

**Limitación, la que hay que escribir en cada ficha:** libro de divulgación
comercial con relatos de ficción declarada; su «ficha técnica» es invención
editorial (tamaños en metros, «contras» como «ácido fosfórico enriquecido con
agua bendita»). **No es registro de tradición oral y no puede ser primer
escalón.** Sirve para una sola cosa: explicar de dónde salió el título y la
clasificación «varios» de estas fichas en el catálogo, y fechar la forma
«mantilla verde / calavera» de la Viudita en 2004.

Extracto de las páginas del ciclo: `../primarias/el-tiempo-2004-cuentos-de-espantos-fichas-del-ciclo.txt`.
Mapa PDF → libro: Llorona PDF 13-14 · Mohán 15-16 · Cura 19-20 · Mandingas 29-30 ·
Jinete 31-32 · Viudita 51-52 · Sirena 55-56 · Judío 57-58 · Barco 61-62 · Bus 77-78.
Ficha de la Sirena del Arco (lámina 25, leída en imagen): clase «monstruo-animal»;
**localización «costa Pacífica»**; hábitat «aguas costeras y profundas del
océano… sus palacios no pueden ser descritos con palabras humanas»; «cabeza y
torso humanos y **cola de delfín**»; el relato es la carta de un biólogo marino
hallada en una botella en la isla del Gallo, con un buque maderero de Tumaco.
**Nada de máscara, puñal, cetro ni cola de ave**: esa Sirena viene de otra
cadena (ver tanda 4).

## Tanda 4 · El registro de 1997: Esmeralda Van Vliet, *Niños de las regiones de Colombia* (ICAN / Banco de la República)

El módulo cita `files.eric.ed.gov/fulltext/ED430849.pdf` como «Cuentos y leyendas
de Colombia para la escuela» (1997). **No es eso.** Es el *Document Resume* ERIC
ED 430 849, *Colombia, Many Countries in One… Fulbright-Hays Summer Seminars
Abroad 1997* (416 pp.), y lo que contiene sobre nuestras fichas es la unidad
didáctica de **Ana María Alfaro**, que **imprime el 12-01-1997** las páginas web
de **Esmeralda Van Vliet, *Niños de las regiones de Colombia*, Instituto
Colombiano de Antropología**, publicadas en la Biblioteca Virtual del Banco de la
República (`http://www.banrep.gov.co:80/biblio/bvirtual/infantil/icanco01.htm`
… `icanco05.htm`). URL ERIC abierta y leída (200, 403 pp. PDF, texto). Extracto
en `../primarias/eric-1997-alfaro-van-vliet-ninos-regiones-colombia.txt`.

La URL actual (`banrepcultural.org/blaavirtual/infantil/icanco05.htm`) está tras
un antibot de ShieldSquare (redirige a `validate.perfdrive.com`): **pendiente de
navegador, no caída**. Internet Archive no tiene copia.

Es material infantil del ICAN, sin informantes, pero es **el registro fechado
más antiguo que la cantera tiene para cuatro fichas**, y **cada leyenda está
puesta en boca de un niño de una región concreta**. Eso es exactamente la región
que el cajón «varios» no da:

| leyenda en Van Vliet | quién la cuenta, dónde | slug |
|---|---|---|
| **El Jinete Negro** — «En la época de la Colonia vivía en **Ocaña** un caballero muy rico, llamado **Antón García de Bonilla**… los ocañeros dicen oír en las noches las coces de su caballo sobre las calles empedradas… una figura montada, cubierta con una capa y un gran sombrero negro, a veces lleva un cigarro encendido» | Manuela, de Santander (campo cerca de Bucaramanga) | `el-jinete-negro` |
| **La Llorona** — «buscando, río arriba y río abajo, a su hijo que se perdió por un descuido de ella… "por aquí, por aquí lo dejé…"» | Mauricio, región cafetera (Antioquia, Caldas, Risaralda, Quindío): «las chapoleras y los peones me han contado» | `la-llorona` |
| **La Madremonte** — «mujer alta y de caminar ondulante… cabellos de helechos y lianas… sombrero de flores… piel cubierta de suave musgo… diosa guardiana de las selvas… produce tempestades, vientos e inundaciones» | Mauricio, región cafetera | `la-madremonte` |
| **La Viudita** — «una mujer muy emperifollada, que hace ruido con sus enaguas al caminar y asusta a los borrachos» | Anita, de **Pasto**: «cuando no hay clientes, las vendedoras del mercado [de Bomboná] conversan y cuentan» | `la-viudita` |
| **El Duende burlón** (destiende la ropa, pone azúcar en la sopa) y **El Duende malo** («duerme en la punta de las agujas y le hace trenzas a los caballos») | Anita, de Pasto | `los-duendes` |
| **La Sirena del Arco** — «Es la reina del mar. En el puerto de **Tumaco**, sale por las noches de su palacio marino y recorre las costas. Los pescadores dicen haberla visto solitaria en la playa» | Anita, de Pasto (sección Costa Pacífica) | `la-sirena-del-arco` |

Consecuencias:
- **`el-jinete-negro` no es de Cundinamarca y Boyacá** (como pone el módulo) ni
  una «variante del Sombrerón»: los dos registros que lo nombran con historia —
  Van Vliet 1997 y la ficha técnica de 2004— lo hacen **santandereano**, el
  espanto de **Antón García de Bonilla en Ocaña (Norte de Santander)**. Ocampo
  1977 sólo lo lista en Boyacá. Ver DECISIONES.
- **`la-viudita`**: el núcleo nariñense más antiguo es de 1997 y cabe en una
  línea (enaguas, borrachos, mercado de Pasto). La anciana de mantilla verde y
  calavera es de 2004 (El Tiempo), y las páginas web la copian.
- **`la-madremonte`** de 1997 es la del Eje Cafetero, no la del Tolima.
- **`la-sirena-del-arco`**: Tumaco, 1997. Los atributos de máscara, puñal,
  cetro y cola de ave no están en ninguno de los dos impresos; salen sólo de la
  página «Bogotanitos» de la SCRD (ver tanda 5).

## Tanda 5 · Nariño: lo que la Universidad de Nariño y la prensa de Pasto sí dan

### Bustos Delgado 2015 (Udenar) — el «Sánchez» del módulo no es nariñense

Alicia del Carmen Bustos Delgado, *La leyenda rural como estrategia didáctica
para mejorar la ortografía…*, trabajo de grado, Licenciatura en Lengua
Castellana y Literatura, Universidad de Nariño, Pasto, 2015 (asesor Luis
Ernesto Sanz). `https://sired.udenar.edu.co/8579/1/91329.pdf` (200, 159 pp.,
texto). §2.16.2 «El Cura sin Cabeza», p. 46.

El módulo presenta la versión de las **misas gregorianas** como «otra versión
nariñense, reproducida… a partir de Sánchez». **La tesis la toma de
Sánchez, L. (2001), *Colombia: mitos y leyendas*, Bogotá, Ed. Colina, p. 173**
(bibliografía de la tesis): una compilación nacional de divulgación. Es decir,
el motivo de las misas gregorianas **no está localizado en Nariño por ninguna
fuente**; sólo se leyó en Pasto. Lo mismo vale para su Llorona, Patasola y
Duende (todas «Sánchez (2001)»).

### Erazo Bravo y Martínez Cerón 2019 (Udenar) — Túquerres, con abuelos entrevistados

Vanessa Erazo Bravo y Diana Isabel Martínez Cerón, *Estrategia de narrativa
transmedia para la rememoración de relatos… de la tradición oral del municipio
de Túquerres*, Diseño Gráfico, Universidad de Nariño, Pasto, 29-10-2019.
`https://sired.udenar.edu.co/18217/1/210263.pdf` (200, 113 pp.).
**El módulo la cita como «mitos y leyendas de Pasto»: es de Túquerres.**
§6.3.9.6 La Viuda, §6.3.9.7 Los Duendes, §6.3.9.8 «El cura sin cabeza / Padre
descabezado» (pp. 54-55). Trabajo de campo: entrevista al historiador
tuquerreño Guillermo Cifuentes, cinco adultos mayores, la recopilación de la
biblioteca de Túquerres. El Padre descabezado (citando «Imbacuan, 2013»):
«anda pagando una larga cuenta de misas que en su vida no cumplió… sale hasta
las iglesias en donde celebrara misa… portando una vela que nunca se apaga…
patirribiado y sin habla se queda cuando lo ve… ha ido dejando de hacer su
aparición». **Es el ancla nariñense real de la deuda de misas**, en Túquerres,
no en Pasto. «Imbacuan 2013» queda por identificar. La Viuda tuquerreña
(«anciana de vestido negro… presagio de una tragedia… busca a los borrachos»)
cita a «Esquivel, 2018»: repertorio web, no campo.

### Diario del Sur, 26-03-2024 — «Espantos que todavía asustan en las semanas santas»

`https://www.diariodelsur.com.co/espantos-que-todavia-asustan-en-las-semanas-santas/`
(200, leída). Sin firma. Pasto: «sitios pesados» en Semana Santa (templo de
Santiago, avenida Boyacá, plaza de Rumipamba, San Felipe, Catedral, San Juan).
Cuatro relatos con testigo marcado con asterisco (nombres protegidos o
supuestos):
- **El Judío Errante en Pasto**: Martha del Carmen Rosero*, Jueves Santo, sector
  de San Ignacio: un hombre «de extraña apariencia… rezando de espaldas a una
  pared… "Dios mío perdóname, ya no puedo caminar más"», que se esfuma. **Es el
  único registro de un Judío Errante nariñense**, y el módulo no lo usa (lo cita
  sólo para el cura).
- **El padre sin cabeza**: Gabriel Guerrero*, Martes Santo, iglesia de **San
  Felipe** → barrio Las Cuadras; «de su cuello parecía chorrear sangre»; y
  «viejos residentes… dicen que pasada la media noche sale del **templo de
  Santiago**».
- La mula herrada y la Calle del Colorado (masacre del 24-12-1822).
Limitación: prensa reciente sin firma y con testigos no verificables; fecha la
circulación en 2024, no la antigüedad.

## Tanda 6 · Pacífico: la Sirena del Arco y el Maravelí

### La Sirena del Arco — la cadena completa, de 1997 a hoy

1. **Van Vliet (ICAN / Banrep web), impreso el 12-01-1997** (ERIC): «Es la
   reina del mar. En el puerto de Tumaco, sale por las noches de su palacio
   marino y recorre las costas. Los pescadores dicen haberla visto solitaria en
   la playa». Tres frases. **Registro más antiguo en la cantera.**
2. **El Tiempo 2004, lámina 25 (pp. 49-50)**: «costa Pacífica», cola de
   delfín, palacios submarinos; relato de ficción (carta en botella, isla del
   Gallo, buque maderero de Tumaco).
3. **SCRD, «Bogotanitos · Cuenta la leyenda»**
   (`https://www.culturarecreacionydeporte.gov.co/es/bogotanitos/cuenta-la-leyenda/leyenda-de-la-sirena-del-arco`,
   200, leída; espejo `ant.culturarecreacionydeporte.gov.co`, 200): «según la
   gente de la región de Tumaco, Nariño»; cola de ave, máscara, puñal y cetro de
   oro; lapidario de once piedras con sus virtudes; cantos sagrados; parejas
   que bailan en luna llena; ballenas jorobadas. **Cierra con la frase de Van
   Vliet casi literal** («Algunos pescadores dicen haberla visto solitaria en
   la playa…»): es una ampliación sin firma ni fecha de la ficha de 1997. El
   lapidario es tópico europeo, no dato de Tumaco.

Ninguna obra con informante nombra a la Sirena del Arco. El nombre y Tumaco
sí están fechados en 1997. **Probable**, no confirmado. Pendiente: Pedrosa y
Vanín, *La vertiente afropacífica de la tradición oral* (Univalle, 1992) y
Garrido 1980 (el libro completo, no sólo el capítulo que reproduce Villa Posse).

### El barco fantasma / Maravelí

- **Alfredo Vanín Romero, *Una mirada a la tradición oral del Pacífico*,
  Bogotá, Banco de la República, 2016**, p. 16.
  `https://babel.banrepcultural.org/digital/api/collection/p17054coll18/id/330/download`
  (200, PDF con texto; ficha `.../collection/p17054coll18/id/330`). Folleto de
  una antología de relatos grabados. **Narradora nombrada: María Raquel
  Riascos, nacida el 2-12-1952 en López de Micay (Cauca)**, que recuerda entre
  las historias que le contaban de niña «la del **Maravelí, un barco de
  demonios**». Es la única voz con nombre, fecha y lugar que la cantera tiene
  para el Maravelí; el relato completo está en el audio, no en el folleto.
  Extracto en `../primarias/vanin-2016-mirada-tradicion-oral-pacifico-extracto.txt`.
  Su bibliografía abre la escalera: Pedrosa y Vanín 1992; Vanín, *El príncipe
  Tulicio* (1986); Bernardo Merizalde (años cuarenta); Revelo Hurtado 2010.
- **Oviedo Arroyo 2015 (Univalle)**, `univalleMaravelly` del módulo: abierta
  y leída (texto en el bundle TEXT, `…/bitstreams/0a2e9862-89eb-4777-bc1b-77d86f83950b/content`).
  §3.7.2.4 «El Barco Fantasma», **Buenaventura**: la secuencia proa → babor →
  estribor, brújula y carta inútiles hasta el día siguiente, muy iluminado,
  tripulación de marinos con deudas con el diablo. **Su nota 32 dice la fuente:
  «Consultado en http://www.valle-buenaventura.galeon.com/grupo.html el 12 de
  junio de 2015»** — una página personal de Galeon. El módulo le atribuye
  «descripción académica»: es una tesis de administración portuaria que copia
  una web. Sirve para localizar en Buenaventura, no como registro.
- **El Tiempo 2004, lámina 28 (pp. 53-54)**: «costa Pacífica»; lámparas con
  candelas en el palo mayor, «mil brazas de largo, quinientos pies de eslora y
  ochenta pies de puntal», música siniestra, cadenas; enloquece o ciega a quien
  no ha comulgado. Esta ficha —y no el folclor— es la que repiten los
  agregadores y el DiCCOL (Semana Santa, barco negrero o de caucho y cacao).
  Ninguna página con esos datos cita fuente anterior.

**Región**: Pacífico, con tres anclas distintas y ninguna prioritaria —López de
Micay (Cauca, Vanín 2016, narradora), Buenaventura (Valle, vía Galeon 2015),
Tumaco/Barbacoas (agregadores, sin fuente)—. Confianza **probable**.

## Tanda 7 · Las fuentes de los módulos, abiertas una a una

- **El Tiempo, «El Judío Errante en Tunja», *Boyacá 7 Días*, 02-04-1996**
  (`https://www.eltiempo.com/archivo/documento/MAM-325151`, 200, leída). Sin
  firma. Fuente de autoridad: **Guillermo Rodríguez, secretario de la Academia
  Boyacense de Historia**. Da el paso procesional completo (el Nazareno al
  centro, El Judío delante «tirando a Jesús de una cuerda», Simón Cireneo
  detrás); tallas «en talleres tunjanos, en la segunda mitad del siglo XVI»;
  gente que se desmayaba; lo alimentaban con residuos de la cocina. **Y nombra
  su fuente: Ozías S. Rubio y Manuel Briceño, *Tunja desde su fundación hasta
  la época presente*, Tunja, 1909**, con el diálogo («El mismo soy… esta muerte
  que tuvo lugar hace 16 siglos, y que yo presencié»). **Rubio y Briceño 1909
  es el registro más antiguo del Judío tunjano** (Otálora de Corsi 1939 viene
  después). Digitalizado en la Biblioteca Digital AECID
  (`https://bibliotecadigital.aecid.es/bibliodig/es/consulta/registro.cmd?id=591`):
  **timeout el 22-09, pendiente**; Google Books está vetado.
- **ENSST (Escuela Normal Superior Santiago de Tunja), *Didáctica de la
  sensibilidad y el pensamiento crítico 2*, 2016** (200, 84 pp.): «El Judío
  Errante · La leyenda», con acuarela de Adrián Eduardo Munar Guarín
  («Claustro de Santo Domingo», 1996). Material escolar derivado.
- **Nicolás del Castillo Mathieu, «El léxico negro-africano de San Basilio de
  Palenque», *Thesaurus* XXXIX (1984), pp. 80-169**
  (`bibliotecadigital.caroycuervo.gov.co/id/eprint/631/1/TH_39_123_100_0.pdf`,
  200). §3.3.3.2 Mandinga, pp. 125-126: en Palenque «hombre chiquito»;
  Revollo: «llevárselo a uno mandinga» = darse al diablo; «mandinga en la
  Costa Atlántica y en muchas regiones de Colombia… significa generalmente
  "diablo"». Y el dato que decide la región: **«El ALEC registra mandingas como
  equivalente de "demonio" en una localidad de Sucre, dos de Norte de
  Santander, una del Chocó, tres de Santander, una de Boyacá, siete de
  Cundinamarca, dos de Casanare y una del Tolima (ALEC, III, 139)… Esta voz
  tiende a desaparecer en la Costa Atlántica»**. Diecisiete de dieciocho puntos
  son andinos o llaneros. **El `category_path` Caribe del módulo no lo sostiene
  ni su propia fuente**: sale del relato de ficción de 2004 ambientado en
  Barranquilla.
- **Mandingas en el Tolima, dos veces en Villa Posse II**: Devia 1962, p. 151
  (para ahuyentar a la Candileja: «el "Mandingas" te ha de tener») y Rocha
  Castilla 1968, p. 182 («Mandingas, Biruñas, El Maligno, El Patas… nombres del
  diablo»). Es nombre, no personaje con relato.
- **Múnera, «Oralitura y tradición oral colombianas: revisión de materiales
  sonoros», *Estudios de Literatura Colombiana* (UdeA)** (200): ficha del CD
  **Guillermo González Otálora, *Mitos del Huila*, Neiva, Digital Audio Mix,
  2003**, narradores **Oneyda Antury, Leo Cabrera y Alfredo Andrade Sánchez**;
  17 pistas, entre ellas «El mohán», «Madremonte», «Los duendes», «La
  llorona», «El maldingas». Registro huilense real de cinco de las siete
  fichas mixtas; **el audio no es consultable** (sólo la ficha).
- **Módulo Numi (Colombia Aprende, 2021)** (200, 122 pp.), `la-llorona`: la
  «Llorona de Purificación (Tolima)» que el módulo toma como centro **no está en
  el cuento del módulo**; es una cita de otra guía («Durante la guerra civil, se
  estableció en Purificación…», *Secundaria Activa, Lenguaje grado 7*, MEN) y el
  cuento reproducido viene de `leyendascortasparaninos.com` (agregador,
  vetado). La guía MEN de grado 7 es la que hay que abrir para anclar Tolima;
  el enlace que da Numi (`redes.colombiaaprende.edu.co/ntg/men/…/LG_Grado07.pdf`)
  no se ha comprobado.
- **Esquema de Ordenamiento Territorial de Nuquí (ESAP)** (200, 233 pp.):
  tabla de mitos, «La Viudita: mujer de baja estatura, cabellos largos, vestida
  de luto y en la mano lleva una lámpara prendida y sale a media noche llorando
  la muerte de su esposo en la guerra… galantean [hombres infieles] y ella les
  pregunta por su marido muerto y muestra su rostro cadavérico». **Chocó**.
- **Chazatar, Giraldo y Sánchez, *Cali entre ríos*, Univalle** (200, 139 pp.),
  p. 25: «La viudita», publicada en **1990** en el magazine *Despertar
  Vallecaucano* (Cali): la niña sin bautizar por pobreza, el vaquero Juan Patas
  que la engaña, casada con un campesino infiel, vestida de negro lo vigila;
  muerta, persigue a trasnochadores y borrachines. Casa a orillas del río
  Cauca. **Valle del Cauca, 1990**: prensa regional con fecha, tercer escalón.
- **Inventario turístico de Viterbo (Caldas)** (ESAP, «Inventario municipal de
  mitos» en el módulo) (200, 29 pp.), §1.4.1 La Madremonte: mujer musgosa
  «enraizada en los pantanos», ojos de candela y colmillos «como los de los
  sainos», o mujer alta «vestida de ramajes… sombrero alón cubierto con hojas y
  plumas verdes»; tempestades, borrascas, se baña en los nacimientos y enturbia
  el agua. §1.4.3 El Duende. **Caldas.** Sin autor ni fecha en el PDF.
- **Biblioteca Nacional, *Itinerancias*, vol. 2 «Mitos y leyendas», «La
  Madremonte»** (200): narradora **María del Carmen Cardona, vereda La Plata,
  Palestina (Caldas)**, Biblioteca Rural Itinerante Doris Henao Uribe. El texto
  del relato no aparece en el HTML (probablemente en PDF o imagen del volumen):
  **pendiente de abrir el volumen**.
- **Quintero Martínez 2023, UGC** (200, 66 pp.): lista «Transmilenio G66» entre
  los relatos cartografiados de Bogotá. Circulación escolar, no registro.
- Caídas o bloqueadas: `repositorio.flacsoandes.org/items/547db58e…` (**el
  certificado TLS no corresponde al host**, 403 al forzarlo: la memoria de Buga
  1990-91 sigue sin abrirse; el handle `repositorio.flacsoandes.edu.ec/handle/10469/23141`
  también da 403 de antibot); `humanasyeconomicas.medellin.unal.edu.co/…/coleccion-negros-y-esclavos.html`
  (sin respuesta); `tolima.gov.co/…` Lérida (403 antibot).

## Tanda 8 · El Jinete Negro es de Ocaña

**Academia de Historia de Ocaña, «Leyendas de Ocaña»**, blog institucional,
septiembre de 2011 (`http://academiaocana.blogspot.com/2011/09/leyendas-de-ocana.html`,
200, leída; texto en `../primarias/academia-historia-ocana-2011-leyendas-de-ocana-anton-garcia.txt`).
Blogspot, pero firmado por la Academia: segundo escalón con límite declarado.
- «Don Antón García de Bonilla: el "Jinete Fantasma"», personaje histórico:
  el primer Antón vino con Francisco Hernández (Fernández de Contreras) en la
  fundación de Ocaña (1570); regidor perpetuo y alcalde ordinario; al menos
  cuatro descendientes con el mismo nombre.
- **La leyenda literaria la fija Ciro A. Osorio Quintero, *El valle de los
  Hacaritamas* (1962)**: la epidemia en la hacienda, la promesa a **Santa
  Rita** a medianoche, la salud recobrada, la promesa olvidada; su alma
  condenada a recorrer las calles empedradas a caballo («bajada de Santa
  Rita»). Es el primer escalón probable de `el-jinete-negro`; **no está
  digitalizado en abierto** (pendiente).
- Paralelos con otra localización: Diego Andrés Rosselli Cock, «Don Antón, el
  caballero de Aguachica, Cesar», *Portafolio*, 16-11-2005 (reproducido en
  `guidoperezarevalo.org`): el mismo fantasma en **San Roque de Aguachica**.
  La Opinión (Cúcuta), «Tras la huella del "jinete fantasma" en Ocaña»
  (`laopinion.co/premium/…`, de pago, no leída).

Así, el Jinete Negro tiene cuatro registros que convergen en **Ocaña (Norte de
Santander)**: Osorio Quintero 1962 (vía Academia), Van Vliet 1997, El Tiempo
2004 («en los Santanderes se conoce como El Fantasma de Antón García») y la
Academia 2011. Ninguno lo pone en Cundinamarca y Boyacá, y ninguno lo trata
como variante del Sombrerón.

---

# REPARTO REAL — los 13 slugs contra la cantera

Confianza: **confirmado** = el relato está a la vista en una obra consultable;
**probable** = obra candidata con razón concreta; **sin rastro** = ninguna obra
consultable lo nombra. La columna «región real» es lo que dicen las fuentes,
no una decisión.

### `editorial/pacifico-narino` (2)

| slug | de qué obra sale | región real | confianza |
|---|---|---|---|
| `el-padre-mera` | **Garrido, *Tras el alma de un pueblo*, Vicariato de Tumaco, 1980, pp. 191-201**, reproducido en **Villa Posse II, sección 27, pp. 345-358** (texto a la vista). Segundo escalón: Agier (FLACSO) y Comisión de la Verdad, ya en el módulo | **Nariño, Pacífico sur** (Vicariato de Tumaco: Salahonda, Chimbuza, Patía, Barbacoas, Payán, San José de La Laguna); Guapi (Cauca) sólo como episodio. Personaje histórico nacido en Florida (Valle) 1872, muerto en Palmira 1926 | **confirmado** |
| `la-sirena-del-arco` | Van Vliet, *Niños de las regiones de Colombia* (ICAN/Banrep web), impreso 12-01-1997 en ERIC ED 430 849, p. 27 del anexo: tres frases. Ampliación sin firma: SCRD «Bogotanitos». Ficción: El Tiempo 2004, pp. 49-50 | **Tumaco (Nariño)** | **probable** (título y lugar fechados; ningún relato con informante) |

### `editorial/pacifico-restante` (1)

| slug | de qué obra sale | región real | confianza |
|---|---|---|---|
| `el-barco-fantasma` | Vanín 2016 (Banrep), p. 16: la narradora María Raquel Riascos (López de Micay, 1952) nombra «el Maravelí, un barco de demonios» (el relato está en audio). Oviedo Arroyo 2015 (Univalle) copia una web de Galeon. El Tiempo 2004 lámina 28 fija la «ficha» que repiten los agregadores | **Pacífico** sin puerto único: López de Micay (Cauca), Buenaventura (Valle) | **probable** |

### `editorial/varios-mestizo-final` (3)

| slug | de qué obra sale | región real | confianza |
|---|---|---|---|
| `el-judio-errante` | **Ocampo López 1977, pp. 124-125** (texto a la vista) ← Otálora de Corsi, *Ambiente tunjano*, 1939 ← **Rubio y Briceño, *Tunja desde su fundación…*, 1909** (citado por *El Tiempo* 02-04-1996, que da el diálogo). También *Diario del Sur* 2024 (Pasto) | **Tunja (Boyacá)**, iglesia de Santo Domingo. Segunda localización reciente: Pasto | **confirmado** (Ocampo 1977 + El Tiempo 1996); el primario de 1909 **probable** (AECID sin abrir) |
| `la-viudita` | Van Vliet 1997 (Pasto, una línea) · El Tiempo 2004 lámina 23 (Antioquia, Nariño y Occidente; mantilla verde, calavera) · Erazo y Martínez 2019 (Túquerres, «La Viuda») · EOT Nuquí (Chocó) · *Despertar Vallecaucano* 1990 vía *Cali entre ríos* (Valle) · Ocampo 1977 la lista en Boyacá | **Nariño** (Pasto) para el núcleo que cuenta la ficha; homónimas distintas en Chocó y Valle | **probable** |
| `el-bus-fantasma` | El Tiempo 2004, pp. 73-74 (ficción: carta de un pasajero muerto). G66: *El Tiempo*, *Infobae* 2023, Quintero 2023 (UGC) | **Bogotá** para la G66; la versión de carretera **no tiene lugar** en ninguna fuente | **sin rastro** como tradición (sólo ficción de 2004 y creepypasta digital fechada) |

### `editorial/varios-mixto-final` (7)

| slug | de qué obra sale | región real | confianza |
|---|---|---|---|
| `el-mohan` | **Devia 1962, VP II p. 145** y **Rocha Castilla 1968, VP II pp. 169 y 181** (texto a la vista, carril Tolima). *Mitos del Huila* 2003 (CD). Pardo 1947, «La leyenda de Juan Díaz o el Mohán del Tequendama», *Revista de Folclor* 2 (bibliografía de VP I; no abierto) | **Tolima** (Magdalena, Saldaña; Ambalema, Coyaima…); Huila; Tequendama | **confirmado** — y **duplica** el material de Tolima |
| `la-madremonte` | **Devia 1962, VP II p. 149** y **Rocha 1968, p. 181** (Tolima, a la vista) · Van Vliet 1997 (Eje Cafetero) · Inventario turístico de **Viterbo (Caldas)** · BNC *Itinerancias*: María del Carmen Cardona, **Palestina (Caldas)** · Ocampo 1977 (lista, Boyacá) · Peláez 1982, tesis Uniandes «Un encuentro con la Madre Monte» (no abierta) | **panregional andina**; los dos registros con texto son **Tolima** (1962, 1968) y **Caldas** | **confirmado** (Tolima) |
| `los-duendes` | **Devia, «Brujas y duendes», VP II p. 165**; **Rocha, «El duende», p. 182** · Ocampo 1977 p. 123 (Boyacá, minas) · Van Vliet 1997 (Pasto: duende burlón y duende malo) · Viterbo · Erazo y Martínez 2019 (Túquerres) · *Mitos del Huila* | **panregional**; con texto: Tolima y Boyacá | **confirmado** — y **duplica** `brujas-y-duendes` (Tolima) |
| `la-llorona` | Van Vliet 1997 (Eje Cafetero) · **Ocampo 1977 p. 121 (Boyacá: rostro de calavera, niño muerto en brazos)** · VP II sección 19, nota 5 (**Santander, años 40**: mujer salvaje que busca al hijo que ahogó) · Numi (cita de Purificación, Tolima, en guía MEN no abierta) · San Martín (Meta) · *Mitos del Huila* | **panregional**; ninguna fuente abierta sostiene el centro tolimense que elige el módulo | **probable** (menciones con rasgo propio, ningún relato completo con informante) |
| `el-cura-sin-cabeza` | Erazo y Martínez 2019 (Túquerres: «Padre descabezado», deuda de misas, vela, citando «Imbacuan 2013») · *Diario del Sur* 2024 (Pasto: San Felipe y templo de Santiago) · Sánchez 2001 (compilación nacional, vía Bustos 2015) · Ocampo 1977: el espanto del Panóptico y el toque de ánimas en Tunja (paralelos) · El Tiempo 2004 (panregional) | **Nariño** (Pasto, Túquerres) para lo que la ficha cuenta | **probable** |
| `el-jinete-negro` | Osorio Quintero, *El valle de los Hacaritamas*, 1962 (vía Academia de Historia de Ocaña 2011, a la vista) · Van Vliet 1997 · El Tiempo 2004 · Rosselli, *Portafolio* 2005 (Aguachica) | **Ocaña (Norte de Santander)**; Aguachica (Cesar) | **confirmado** (Academia 2011 y Van Vliet 1997 dan el relato de Antón García) |
| `el-mandingas` | Nombre del diablo: Devia 1962 p. 151, Rocha 1968 p. 182 (Tolima), ALEC III 139 vía Del Castillo 1984 (17 de 18 puntos andinos o llaneros), *Mitos del Huila* («El maldingas», audio). El relato de Pamba Ahumé es **ficción de El Tiempo 2004, p. 22** | **andina** (Cundinamarca sobre todo), no Caribe | **sin rastro** como relato; confirmado sólo como nombre |

**Recuento: 6 confirmados** (padre-mera, judio-errante, mohan, madremonte,
los-duendes, jinete-negro), **5 probables** (sirena-del-arco, barco-fantasma,
viudita, llorona, cura-sin-cabeza), **2 sin rastro** (bus-fantasma, mandingas).

---

# NARRADORES

| narrador | lugar | fecha | obra | ficha |
|---|---|---|---|---|
| síndico de Salahonda, «más de setenta años» | Salahonda (Francisco Pizarro, Nariño) | h. 1979-80 | Garrido 1980 / VP II p. 347 | padre-mera |
| anciana que lo conoció «siendo ella señorita» | San José (Señor del Amparo) | h. 1979-80 | ídem, p. 349 | padre-mera |
| antiguo monaguillo, nacido en la guerra de los Mil Días | Payán (padre Rosendo Veintemilla) | ídem | p. 350 | padre-mera |
| hombre de «más de 90 años» | llegada por Cabo Manglares y Bocagrande | ídem | p. 351 | padre-mera |
| señor de 78 años | San José; río Nansalbí, Cuandambí | ídem | p. 352 | padre-mera |
| señora nacida el 20-01-1889, casada en 1908 | Chimbuza → Papí → San Pedro del Vino → Salahonda | ídem | p. 352 | padre-mera |
| coplas «recogidas en el río Ispí» | río Ispí | ídem | p. 354 | padre-mera |
| María Raquel Riascos, n. 2-12-1952 | López de Micay (Cauca) → Buenaventura | antes de 2016 | Vanín 2016, p. 16 | barco-fantasma |
| María del Carmen Cardona | vereda La Plata, Palestina (Caldas) | s. f. | BNC *Itinerancias* v. 2 | madremonte |
| Oneyda Antury, Leo Cabrera, Alfredo Andrade Sánchez | Huila | 2003 | *Mitos del Huila* (CD) | mohan, madremonte, duendes, llorona, mandingas |
| Guillermo Cifuentes (historiador) y cinco adultos mayores | Túquerres (Nariño) | 2019 | Erazo y Martínez 2019 | cura-sin-cabeza, viudita, duendes |
| Guillermo Rodríguez, secretario de la Academia Boyacense de Historia | Tunja | 1996 | *El Tiempo* 02-04-1996 | judio-errante |
| Martha del Carmen Rosero*, Gabriel Guerrero* (nombres marcados, no verificables) | Pasto | 2024 | *Diario del Sur* | judio-errante, cura-sin-cabeza |
| Misael Devia; Cesáreo Rocha Castilla (folclorólogos, no narradores) | Tolima | 1962; 1968 | VP II | mohan, madremonte, duendes, mandingas |

Los personajes de El Tiempo 2004 (René Velandia, Pamba Ahumé, el pasajero del
bus, el biólogo de la isla del Gallo) **no son narradores**: son ficción.

---

# CAÍDAS Y BASURA en los `sources.mjs` actuales

Barrido de las 52 URLs distintas de `varios-mestizo-final` y `varios-mixto-final`
(curl con user-agent de navegador, 22-09-2026):
- **No abren:** `repositorio.flacsoandes.org/items/547db58e…` (TLS con
  certificado de otro host; 403 al forzar) — era la única fuente de la Viudita
  en Buga 1990-91; `humanasyeconomicas.medellin.unal.edu.co/…/coleccion-negros-y-esclavos.html`
  (sin respuesta); `tolima.gov.co/…` (403 antibot, no se declara muerta).
- **Vetadas por §4.2:** `elrinconcolombiano.com` (2: Viudita, Sacerdote sin
  cabeza — agregador que copia la ficha técnica de 2004);
  `compartiendoculturas.blogspot.com` (Viudita, 2008); `espantoscolombianos.blogspot.com`
  (Bus Fantasma); los catálogos Koha de Mosquera (11108) y de la USCO (16983)
  y Bibliovalle (56735) son **fichas de catálogo**, no texto; `cris.huji.ac.il`
  y `degruyterbrill.com` (202) son fichas editoriales de Hasan-Rokem y Heß.
- **Relleno sin relación con el relato:** las dos de UNESCO sobre el Carnaval de
  Barranquilla y la de herencia africana (`el-mandingas`), `patrimonio.mincultura.gov.co/…Lenguas-y-tradición-oral`,
  el informe de turismo del IDT y la nota de *El Colombiano* sobre el desfile
  (`el-cura-sin-cabeza`), la cartilla de cocinas del Tolima.
- **Mal descritas:** `files.eric.ed.gov/fulltext/ED430849.pdf` no es «Cuentos y
  leyendas de Colombia para la escuela» sino el seminario Fulbright-Hays 1997,
  con las páginas de Van Vliet (ICAN) dentro; `sired.udenar.edu.co/18217` no es
  de Pasto sino de **Túquerres**; `sired.udenar.edu.co/8579` no trae una
  versión nariñense del cura sino a Sánchez 2001 (Ed. Colina); la tesis de
  Univalle del Maravelly copia una página de Galeon; el «inventario municipal»
  de la ESAP es el **Inventario turístico de Viterbo (Caldas)**.
- Pacífico (`pacifico-narino`, `pacifico-restante`): no se barrieron las URLs
  de las fichas que no son de este ciclo. De las del ciclo: `researchgate.net`
  (Padre Mera, vetada), `prezi.com` (Maravelly, derivada),
  `panamericanaeditorial.com.co` (ficha comercial), `maguare.gov.co/tag/…`
  (página de etiqueta).

---

# DECISIONES (anotadas, no tomadas)

1. **El cajón «varios» no es una región: es el índice de *Cuentos de espantos*
   (El Tiempo, 2004).** Doce de las trece fichas tienen ahí su título, y las
   invenciones que los módulos ya retiraron (Pamba Ahumé, Lina, Santiago, el
   bus sin conductor y su carta) son relatos de ficción de ese libro. Decidir
   si la `historia` de cada ficha lo dice («el nombre llegó al catálogo desde
   un libro de 2004 que se declara ficción») y si el libro entra como fuente
   con `limitation` de ficción declarada o sólo se menciona.
2. **Reasignar región** según la tabla del REPARTO: `el-jinete-negro` →
   Norte de Santander (Ocaña), no Cundinamarca-Boyacá; `el-mandingas` → andina,
   no Caribe; `el-cura-sin-cabeza` y `la-viudita` → Nariño (el módulo ya lo
   propone; ahora con fuente); `el-judio-errante` → Boyacá (Tunja);
   `el-padre-mera` → **Nariño**, no Cauca; `la-llorona`, `la-madremonte`,
   `los-duendes`, `el-mohan` → panregionales, y decidir qué registro narran.
3. **Duplicados con el carril Tolima.** `el-mohan` (mixto) frente a
   `el-poira` (Tolima) y al propio Devia/Rocha; `los-duendes` frente a
   `brujas-y-duendes` (Tolima, misma p. 165 de Devia); `la-madremonte` con el
   mismo Devia p. 149 y Rocha p. 181 que usará el carril Tolima. Si las tres
   fichas «varios» se escriben sobre Devia y Rocha, **repiten** las fichas de
   Tolima. Alternativa: que cada una narre otro registro (Madremonte de Caldas,
   duendes de Boyacá o de Pasto, Mohán del Tequendama de Pardo 1947 o del
   Huila). También cruzan: `madre-rio-o-mohana` (Orinoquía, Baquero), `al-duende`
   y `la-vieja-la-viuda-y-el-anima` (pananes), `duende-del-salto` y
   `la-llorona-del-molino` (Piedecuesta), `el-sombreron` (Tolima), la curupira o
   madre de monte (VP II p. 255, Leticia).
4. **`el-padre-mera`: el nombre.** El módulo dice «Manuel María Mera»; Garrido
   transcribe partidas de bautismo, misión y defunción a nombre de **Jesús
   María Mera** (1872-1926). Cotejar el texto de Agier/FLACSO que usa el módulo
   antes de escribir; si Agier dice Manuel María, anotarlo como discrepancia en
   `versiones`, no fundirlo. Y la marimba arrojada al río no está en Garrido:
   sólo la prohibición de bombos, cununos y bailes.
5. **`el-bus-fantasma`**: sin registro de tradición. La ruta de carretera sólo
   existe en la ficción de 2004 y en un blog; la G66 es creepypasta fechada
   (h. 2014) con prensa de 2023. Decidir si la ficha se sostiene como leyenda
   urbana digital de Bogotá (y cambia de título/cajón) o se declara `AGOTADO`.
6. **`el-mandingas`**: no hay relato, sólo un nombre del diablo. Decidir si se
   escribe como ficha de un nombre (con ALEC y Devia/Rocha) o se funde/retira.
7. **`la-sirena-del-arco`**: los atributos que la ficha cuenta (máscara, puñal,
   cetro, cola de ave, lapidario, ballenas) sólo están en la página SCRD sin
   firma; el registro de 1997 cabe en tres frases. Decidir cuánto de la SCRD
   entra y con qué límite.
8. **`la-llorona`**: el módulo la clasifica «Tolima» sobre una cita de segunda
   mano (Purificación). Los registros abiertos son Boyacá (Ocampo 1977),
   Santander (VP II nota 5), Eje Cafetero (Van Vliet). Decidir el centro.
9. **Títulos**: Neon tiene los del libro de 2004 («El mohán», «El mandingas»,
   «El bus fantasma»…). Los módulos proponen otros («El Mohán del Tolima…», «El
   Maravelí, barco fantasma del Pacífico»). La fuente más antigua del barco lo
   llama **Maravelí** (Vanín 2016); El Tiempo 2004 lo titula «El Buque
   Fantasma» en el índice y «El Barco Fantasma» en el cuerpo.

## Pendientes que abrirían más

- Rubio y Briceño 1909 en la Biblioteca Digital AECID (timeout hoy).
- Garrido 1980 completo (Vicariato de Tumaco): otras leyendas del Pacífico sur
  (¿sirena, barco?) fuera del capítulo del Padre Mera.
- Van Vliet en `banrepcultural.org/blaavirtual/infantil/icanco0N.htm` (antibot:
  navegador).
- Osorio Quintero 1962, *El valle de los Hacaritamas* (Ocaña).
- Pedrosa y Vanín 1992, *La vertiente afropacífica de la tradición oral*
  (Univalle) — probable Maravelí y sirena.
- Pardo 1947 (Mohán del Tequendama) y López 1977 / Peláez 1982 (Madremonte),
  de la bibliografía de Villa Posse I.
- Memoria de los encuentros de narradores de Buga 1990-91 (FLACSO, 403).
- *Secundaria Activa, Lenguaje 7* (MEN): la Llorona de Purificación.
- BNC *Itinerancias* vol. 2: texto de la Madremonte de Palestina.
