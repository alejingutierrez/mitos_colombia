# Misak (guambianos) — investigación y reescritura, 19 de septiembre de 2026

Comunidad en Neon: `misak-guambianos`. Módulo: `editorial/misak/`. Siete mitos.
Entregable: `content/editorial/misak/reescritura-2026-09-19/<slug>.json`.

No se escribió en Neon, no se tocó `editorial/misak/*.mjs`, no se ejecutó ningún script de aplicar.
No se usó la API de OpenAI en ningún punto. Toda la investigación es WebSearch/WebFetch + descarga
directa de PDFs y extracción con `pdftotext`.

---

## 1. Lo que cambió el encargo a mitad de camino

El diagnóstico de partida decía: «de las comunidades mejor documentadas del lote», «reescritura de
mejora y precisión, no de rescate». Es cierto a medias.

Lo que apareció al abrir las fuentes es que **seis de los siete slugs del sitio son, uno por uno, los
seis títulos de un solo libro infantil de 1980**: Fernando Solarte Lindo, *El hombre con cola de
león. Leyendas indígenas de Colombia* (Carlos Valencia Editores, Bogotá, 1980, pp. 39-60). La
bibliografía anotada de Luis Guillermo Vasco lo lista con precisión:

> «Presenta 6 mitos guambianos: Pedro: el mago travieso, La Mama grande, El niño serpiente, El
> Pájaro que se come las almas, El Viento y sus hijos, El viejo Tempestad, sin precisar la fuente,
> reelaborados en forma de cuentos por el autor y puestos en boca de un narrador ficticio: don
> Zabulón Banderas.»

Es decir: el corpus misak heredado por el sitio no venía de la etnografía misak, sino de una antología
escolar con narrador inventado. El séptimo slug (`creacion-misak-guambianos`) es la excepción y sí
venía del Comité de Historia.

La reescritura, entonces, no fue de estilo. Para **tres** de las siete fichas hubo que sustituir el
relato entero por versiones documentadas con narrador, lugar y recopilador.

---

## 2. Corpus consultado (todo abierto y descargado)

Cada URL se abrió y se leyó completa. Entre paréntesis, el peso del texto extraído.

**Primarias — voz misak con narradores nombrados**

| Obra | Qué aportó |
|---|---|
| Dagua Hurtado, Aranda y Vasco, *Guambianos: hijos del aroiris y del agua*, Comité de Historia del Cabildo del Pueblo Guambiano, 1998 (2.ª ed. 2015), PDF en luguiva.net (449 KB de texto) | Fuente madre. Lista nominal de ~60 mayores por vereda. Capítulo «Una historia que nace del agua» (Pishau). Capítulo del ciclo anual: los dos rayos con cuatro narradores distintos, el viento Tumpe, la etimología de Tumpe, mama Dominga y taita Ciro. Capítulo de los pantsik: **los seres de la muerte**. |
| Vasco Uribe, «Guambianos: una cultura de oro», *Boletín Museo del Oro* n.º 50, Banco de la República, 2001 (114 KB) | **Las dos versiones documentadas del niño serpiente** (laguna de Tenebío). Teresita de la Estrella narrada por el taita Abelino Dagua. Los caciques del agua. |
| Vasco Uribe, *Entre selva y páramo*, ICANH, 2002, PDF en luguiva.net (1,7 MB) | Repite Tenebío. Testimonio de Cruz Tunubalá sobre los pishau, fechado 25-IV-1988. |
| Rocha Vivas y Villa Largacha (comps.), *Antes el amanecer*, tomo 1, Ministerio de Cultura, 2010, PDF en babel.banrepcultural.org (819 KB) | Sección misak completa. Textos íntegros de «La tierra era bien plana», «Historia de Pedro Ordimales con el arco iris» y **«Piunɵ / Los hijos del agua» de Bárbara Muelas**. Anotaciones comparativas del compilador. |
| Tunubalá y Muelas Trochez, *Segundo plan de vida de pervivencia y crecimiento Misak*, 2009, PDF en repository.iom.int (3,6 MB) | Las cuatro primeras autoridades. Tata Illimpi y mama Keltsi. Tumpe entre los shurmera. |
| Cuchillo Calambás, *Shurmerai kampa nөtrө wam mera*, Misak Universidad, 2016 | Pishimisak = Kallim en voz institucional misak, en namtrik. |
| CRIC, «Pishintө waramik: vivir en equilibrio», *Revista Unidad*, 2023 | Formulación contemporánea de la Ley de Origen; Nupisu macho / Ñimpi hembra. |

**Secundarias verificadas**

- Rappaport, «Cómo se escribió *Namuy misag*…», *Revista Colombiana de Antropología* 60 (2), 2024
  (redalyc, 88 KB): genealogía de Mama Manuela y cronología del archivo Rowe/Tumiñá.
- Vasco, *Guambianos y paeces: bibliografía anotada* (luguiva): ficha exacta de Solarte 1980 y de
  *Namuy misag* 1949.
- Fernández Castelblanco, *Análisis sociológico de la literatura indígena Misak*, Univalle, 2020
  (170 KB): mapa de procedencias de cada relato de la antología.
- Escobar, «El ciclo sagrado de las altas cumbres», *Antípoda* 34, 2019 (scielo).
- Siart, «"Mama Manuela", el tejido y el hilado», Artesanías de Colombia, 3-V-2021.
- ICANH, ficha editorial de *Nuestra gente [Namuy Misag]* (2019) y Colección Etnográfica, Pueblo Misak.

**Comparativas** (todas abiertas y comprobadas): Perseus Digital Library — Ovidio *Met.* I,
Homero *Od.* X e *Il.* VIII, Hesíodo *Escudo*.

**Descartadas y por qué**

- `actualidadetnica.com` (niño serpiente): prensa, y reproduce a Solarte. Además devuelve 406.
- `calameo.com` (pájaro que se come las almas): reproducción escolar de Solarte en plataforma de
  autopublicación; no sostiene un relato.
- `mapcarta.com` ×2 (laguna de Piendamó, resguardo de Guambía): fichas de metadatos cartográficos.
- `consultas.bibliovalle.gov.co` (catálogo Solarte): portada de catálogo. El dato bibliográfico que
  daba está mejor servido, y con más detalle, por la bibliografía anotada de Vasco.
- Sefaria (Génesis) y British Museum (Papiro de Ani): 403 a cualquier cliente que no sea un navegador
  y contenido cargado por JavaScript. Se sustituyeron por paralelos internos misak documentados.

---

## 3. Qué se hizo ficha por ficha

### `creacion-misak-guambianos` — Los Pishau, hijos del agua
**Mejora.** Se mantuvo el eje (Nupisu, Pishimisak, pirran uno, los niños chumbados) y se le añadió lo
que el texto anterior no tenía: los **moropik** que sienten venir la creciente y avisan, los **rejos**
para enlazar a los niños antes de que los tape el derrumbe, los chumbes con los ocho colores del
aroiris (cuatro colores, cada uno en claro y en oscuro), los ojos claros para ver de noche, las
madres de crianza que se van muriendo, los **pisuabuelos**. Se nombró a los narradores por vereda.
Se incorporó, en versiones, a Teresita de la Estrella (taita Abelino Dagua) y a Piunɵ (Bárbara Muelas).
Se dejó abierta la contradicción sobre el sexo de las lagunas.

### `el-nino-serpiente` — **relato sustituido**
El relato publicado era la reescritura de Solarte: joven encerrada tras varias puertas con llaves,
amante que se vuelve gato, helecho que sangra. Nada de eso está en las fuentes misak. Se sustituyó
por la versión que Vasco recogió de boca de un maestro en un taller en el Núcleo Escolar de Guambía
y publicó en 2001 y 2002: hombre con **dientes de oro**, collares de oro, la culebra que mama del
pecho, la prohibición de sacar al niño de la cuna (mecerla con un palo), la **nube roja sobre el
cerro de Tenebío**, las **tulpas del fogón** por donde escapa la serpiente, la laguna que nace de la
lluvia y del llanto, la chamba, la **raíz de árbol que sangra al partirla** (no un helecho), la
laguna que se seca y **se muda arriba de Siberia**, y los hijos de **Sierpi** —calabazos y animales
con picos de oro— que agarran la sombra de quien los ve. Sierpi es el tronco atravesado; es *pi usri*,
la madre del agua.
En versiones entró la segunda versión documentada: la que el **maestro Miguel Antonio Cuchillo, de
Bujíos**, narró a la antropóloga **Reineira Argüello** (cuatro lagartijas en las cuatro estacas de la
casa, la mancha roja que se derrama, la sangre que sube y sepulta la casa, la silla de oro en la
laguna, el canal que abre el Cabildo).

### `el-pajaro-que-se-come-las-almas` — **relato sustituido**
Ver §4: es el hallazgo principal.

### `el-viejo-tempestad` — Mejora fuerte
Se leyó el capítulo entero y se reescribió con el detalle que faltaba: el **nakporotsik** o vara de
candela, la nube como **caballo blanco**, los tres rayos de cada uno (blanco, rojo y negro) con sus
efectos distintos, la enfermedad del *piru* que raja el cuerpo, el **tsitse** o capa de paja bajo la
que se esconde el rayo de páramo, la lengua arrancada que lo deja ronco, el **mate lleno de oro**, y
que donde se clava la vara hay oro. Se nombraron los cinco narradores: el profesor Miguel Antonio
Cuchillo T. (de boca de un mayor), **Jacinta y Bárbara Muelas, exterrajeras del Chimán**, el
exgobernador **Segundo Tunubalá**, **Cruz Tunubalá de Cacique**, y el mayor **Julián Cantero de San
Fernando** al profesor Miguel Antonio Tombé Tumiñá. Se añadió el marco ecológico (Srekollimisak se
fue cuando se quemó el monte; los médicos **Juan Paja de Ceral** y **Bautista Hurtado** aprendieron a
sembrar el agua y sembraron la laguna **Maweypisu**) y la pareja onírica **mama Dominga / taita Ciro**.

### `el-viento-y-sus-hijos` — Mejora
Se conservó la versión de **María Jesusita Yalanda, Floro Cuchillo y Antonio Aranda** a la profesora
**Clemencia Morales Tombé** y se incorporó al relato la segunda memoria del mismo libro (la ruana de
nube que el padre sacude por el ruedo). Se completó la discusión etimológica que la fuente misma
plantea: *tumpi* = el agua del cerro de arriba; *tumpalasrompi* = la última agua de arriba; y *tumpe*
como mata de hojas anchas que al moverse suena como el viento (*uldzipalasrar*, *tumpesrar*). Se
añadió que el mismo libro glosa el apellido Tunubalá con *tunpala*, «ramas que se mueven y silban con
el viento en los cerros altos», que **Isik Tumpe** figura en la lista de nombres pareados de Bárbara
Muelas, que **Tumpe** aparece entre los shurmera del Segundo plan de vida, y que **Isikpantsik** es el
espíritu del viento y del verano.

### `la-mama-grande` — Mejora fuerte + contradicción destapada
Se precisó la genealogía con las fechas del archivo: **Domingo Tombé → Cayetana (tía de Tumiñá, en
namtrik) → Francisco Tumiñá Pillimué**, y el **19 de agosto de 1947** como la fecha en que Tumiñá
volvió de su vereda con los dibujos y un texto en castellano sobre doña Manuela Caramaya. Se
incorporó el dibujo de Tumiñá como fuente visual: mujer desnuda, pelo largo, **ramo de lechero** en
la mano, de pie sobre una piedra, con un rebaño de animales pequeños, una choza y una peña enorme;
y el pijao enorme que baja con la lanza mientras detrás brotan dos frailejones. Se citó lo que
Hernández de Alba le sobrepuso: «la Maga protectora» que «libró al pueblo Guambiano de perecer».
Y se metió, sin fundirla, la **versión de Bárbara Muelas**, que contradice todo lo anterior (ver §4).

### `pedro-el-mago-travieso` — Mejora + la entrada documentada
El encargo pedía documentar **cómo** entró Pedro de Urdimales y qué hace en la versión misak, sin
disimularlo. La cadena quedó explícita: el fragmento «La tierra era bien plana» viene de Hernández de
Alba y Tumiñá (1949), lo cita Hugo Portela Guarín (2000) y de ahí lo toma la antología del Ministerio
de Cultura (2010). Rappaport sitúa el registro: entre el **1.º y el 16 de julio de 1947**, Rowe y
Tumiñá cerraron su primera tanda de entrevistas con **varios relatos sobre el embaucador Pedro de
Urdimales**. Y la anotación de Rocha Vivas dice de dónde viene el personaje: es el mismo **Pedro
Arrimales de la literatura pijao**, incorporado a las literaturas indígenas como héroe astuto y burlón
que a menudo presenta los rasgos del colonizador engañoso; tradición indígena con influencia popular
española. Se añadió en versiones el **segundo Pedro misak** documentado, que el módulo no tenía: la
«Historia de Pedro Ordimales con el arco iris» (Agredo y Marulanda, *Vida y pensamiento guambiano*,
1998), donde Pedro pierde la apuesta con el aroiris y **se convierte en flauta** para poder bajar —un
relato de origen de la flauta.

---

## 4. Los tres hallazgos que valen el encargo

### a) El pájaro que se come las almas tiene un sustrato misak documentado, y no es un pájaro
El capítulo «Seres de la muerte» de *Guambianos: hijos del aroiris y del agua* describe, con
narradores del Comité de Historia, exactamente el complejo que Solarte convirtió en cuento moral:

- **Yemwasro**: ser con forma de águila que chilla de noche; procede del árbol de páramo *yemkuasro*.
- **Kuawera**: **tiene figura de perro pero viene por el aire, ladrando a la media noche**; procede
  del árbol *werakwasro*.
- El **búho**, que chilla para asustar la sombra y hacerla salir del cuerpo.
- **Kuanmusik**, el chiflador, con figura de gente, que es la sombra de los que ya murieron y silba
  para lanzar a los otros tres contra el *mosik*.
- El desenlace: **«lo persiguen hasta acorralarlo contra un monte muy alto o una peña… Lo atacan por
  todas partes, lo pican y se lo tragan. Por eso, antiguamente no se decía que una persona estaba
  muerta sino que estaba *mirayen pinan*, que los animales se la tragaron.»**
- Y las luces: tres **candelillas** con nombre propio —*Paponak* (roja), *Pulopikonak* (blanquirroja),
  *Kuaykmusiknak*— más la *kosapik* verde, «la sombra del que va a irse al kansro».

El ave que ladra, las bolas luminosas y la deglución del alma están todos ahí, repartidos entre
cuatro seres y tres luces. Lo único que Solarte añadió es el criterio moral: que la caza recaiga
sobre quien duerme con rabia, con envidia o sin servir a su comunidad. En el material documentado la
sombra perseguida es la de **quien agoniza**, punto. El relato se reescribió desde ahí.

**Contrapartida:** el nombre **Kcrey** no existe fuera de este sitio. No está en el índice publicado
del ICANH de *Nuestra gente [Namuy Misag]*, ni en la bibliografía anotada de Vasco, ni en el corpus
del Comité de Historia, ni en la antología del Ministerio de Cultura. Las búsquedas devuelven
mitosdecolombia.com como único resultado. La entrada «Espíritu de persona y ave mágica (Kcrey)» que
el módulo atribuía al índice de 1949 **no se pudo comprobar**. Queda en `dudas`, con la recomendación
de consultar el libro en papel antes de mantener el nombre en el título.

### b) El niño serpiente sí está documentado, dos veces, y no se parece a lo publicado
La versión del sitio venía de Solarte. Las dos versiones misak reales las publicó Vasco: una recogida
de un maestro en un taller en el Núcleo Escolar, otra que el maestro Miguel Antonio Cuchillo, de
Bujíos, narró a la antropóloga Reineira Argüello. El detalle decisivo: lo que sangra al partirlo **no
es un helecho, es la raíz de un árbol**, y ese tronco atravesado es **Sierpi**, la madre del agua, de
la que algunos mayores dicen que es el mismo aroiris. La laguna, además, **camina**: se seca en
Tenebío y reaparece arriba de Siberia. Y el texto está encadenado con oro y con rayo, no con amor
prohibido: el visitante tiene dientes de oro, la pareja lleva collares de oro, y la laguna se forma
bajo lluvia y rayos, junto a las tulpas del fogón.

### c) Mama Manuela tiene dos tradiciones que no se dejan conciliar, y una de ellas es misak escrita
Hasta ahora la ficha solo conocía la línea Cayetana → Tumiñá → Hernández de Alba (pijaos convertidos
en frailejones, dos hijos bautizados a la fuerza, la peña, los cuyes). Bárbara Muelas escribió otra
cosa en **«Piunɵ / Los hijos del agua»** (en Lorenzo Muelas, *La fuerza de la gente*, 2005;
antologado en 2010): **Mama Manela Karamaya no es una autoridad antigua, es una de los dos hijos del
agua**. La sacan del río con rejo un domingo al amanecer, junto con **Mutauta Kasik**; **Pishimisak
les pone los nombres**, y a ella le dan tres «porque conocía más y pensaba mejor que él». Cuando los
españoles atrapan a Mutauta Kasik en el plan de Mama Manela Karamaya, él **se convierte en agua** a
la vista de todos y deja un ojo de agua en Nuyapalɵ. Ella sigue sola, enseña a **sembrar el agua por
primera vez** y también el trigo, dice que las mujeres deben ser fuertes como los hombres, y al final
entra por la puerta que tenía construida en la peña detrás de su Nuyapalɵ diciendo que se va al
**kansrɵ** porque **su casa es la laguna**. No hay pijaos, no hay frailejones, no hay cuyes.

Y un tercer frente: el **Segundo plan de vida** (2009) enumera a **Mama Caramaya** y **Mama Manuela**
como **dos** de las cuatro primeras autoridades misak (con Mama Dominga y Tata Siro), lo que
contradice el nombre compuesto «Manuela Caramaya». Detalle colateral: **Camaya sigue siendo apellido
misak** — el propio libro del Comité de Historia registra a **Manuela Camaya, de San Pedro**, entre
las mayoras que dieron su voz en los años noventa.

---

## 5. Otros hallazgos menores que quedaron en las fichas

- **Mama Dominga y taita Ciro (o taita Isidro)**: en la visión de los sueños, Pishimisak aparece como
  una mayora guambiana llamada mama Dominga, mujer de Kallim; Kallim camina y aparece en figura de
  taita Ciro. Son el páramo y el aguacero vistos como matrimonio, que vivían juntos y se separaron
  cuando la gente empezó a quemar. Ella va hasta Inzá, él vive en el Munchique. Kosrompoto, el
  aroiris, es el **cinturón de Kallim**.
- **Teresita de la Estrella / Tesha**: cacica venida de la quebrada de Ñimpi, que el pensamiento misak
  considera hembra; el aroiris se paró con un pie a cada lado de la laguna y de él bajó un
  *tampalkuare* que la tapó siete meses; la enlazaron en el plan de Nuyapale, frente a la salina de
  Las Delicias; murieron siete madres criándola.
- **Purayatun** = «cerro de la casa del maíz» (*pura* + *ya* + *tun*), y era también la casa de
  Srekollimisak: Vasco conjetura que el oro sea el maíz aún no entregado por Pishimisak a la gente.
- El **kel** o mejicano como único remedio contra el rayo: se siembra donde cae mucho rayo, o se quema
  un pedazo de calabaza y la gente se unta.
- **Pirrero**: la sombra del agua en forma de gran mariposa, que viene a las once o doce de la noche
  y ataca a los niños más pequeños.
- El saludo al agua registrado en 2016 en San Pedro por Duvan Escobar con el docente misak **Javier
  Morales**: sacarla cuatro veces a la izquierda y cuatro a la derecha antes de caminar la montaña.

---

## 6. Riesgo de circularidad

Buscar «Kcrey», «Srekollimisak», «Mama Manuela Caramaya» o «Pedro de Urdimales misak» devuelve
mitosdecolombia.com entre los primeros resultados. Toda la reescritura se hizo contra PDFs
descargados y leídos íntegros, no contra resultados de buscador. La advertencia queda anotada en
`dudas` en las siete fichas.

## 7. Recomendaciones para el módulo (no ejecutadas)

1. Sustituir en `editorial/misak/sources.mjs` las cuatro fuentes descartadas (`ninoSerpiente`,
   `pajaroAlmas`, `lagunaPiendamo`, `resguardoGuambia`, `solarteCatalogo`) por las nuevas:
   `oroMuseoDelOro` (BMO 50), `entreSelvaParamo`, `antesElAmanecer`, `planDeVida2009`,
   `antipodaEscobar`.
2. Corregir la ficha de `leyOrigenMisak`: el autor es **Mariano Eliceo Cuchillo Calambás**, Misak
   Universidad, vereda Santiago, 2016 — no «autoridades y mayores del pueblo Misak, 2020».
3. Corregir la ficha de `hijosArcoiris`: el PDF enlazado es la **segunda edición de 2015**.
4. Decidir el título de `el-pajaro-que-se-come-las-almas`. «Kcrey» no está verificado.
5. La imagen de `pedro-el-mago-travieso` muestra el tambor-arca de Solarte, que el relato ya no
   menciona.
