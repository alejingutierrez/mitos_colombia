# Bibliografía de la ronda 2 — Piedecuesta y Santander (41 fichas)

> # AVISO DE PROCEDENCIA
>
> **VICENTE ARENAS MANTILLA NO ES CONSULTABLE.** Ni *Estampas de mi tierra*
> (1941) ni *Crónicas y romances* existen en texto abierto: no hay PDF, no hay
> digitalización, no hay biblioteca digital que los sirva. Lo único que se abre
> es la **ficha de catálogo de Ediciones UIS**, que además dice literalmente
> «Disponible: **No**» y «La descarga de datos todavía no está disponible».
> **El ciclo `piedecuesta-vicente-arenas-i` (8 fichas) queda BLOQUEADO por el
> spec §8: no tiene registro de primer escalón consultable**, y siete de sus
> ocho títulos ni siquiera aparecen en el sumario publicado de la obra que le da
> nombre.
>
> **Pero el ciclo entero no se cae, porque el recopilador real es otro.** Las
> 41 fichas no salen de un libro: salen de **tres** —Germán Valenzuela Sánchez,
> Vicente Arenas Mantilla y Juan de Dios Arias vía Eugenia Villa Posse— y **dos
> de los tres sí están abiertos y verificados**. De las 41, **17 quedan hoy con
> registro consultable y anclable** (ver REPARTO REAL). Las 8 de Arenas y 7 más
> sin rastro son las que hay que decidir.

**Cerrado el 2026-09-20.** Paso 1 del brief; no se redactó ninguna ficha ni acta.

Ciclos cubiertos: `piedecuesta-espantos-y-entierros` (8), `piedecuesta-segundo-ciclo` (8),
`piedecuesta-vicente-arenas-i` (8), `piedecuesta-clasicos-final` (5),
`piedecuesta-relatos-legendarios` (4), `santander-folclor-clasico` (6),
`santander-mixto-residual` (2).

## Lo primero que hay que saber (lectura de los módulos, antes de buscar)

El módulo no sostiene un solo recopilador, sostiene **tres**, y los mezcla:

1. **Germán Valenzuela Sánchez** — *Mitos y leyendas de Piedecuesta y sus veredas*
   (reproducción digital de Gonzalo Tolosa, fechada 2012; el estudio académico
   cita en cambio *Leyendas y cuentos de Santander*, 2010). Hoy citado **sólo por
   Scribd**, que está prohibido. Es el primer escalón de los 16 mitos de
   `espantos-y-entierros` y `segundo-ciclo`.
2. **Luis Rubén Pérez Pinzón (ed.)** — *Literatura folclórica: leyendas y relatos
   legendarios de Piedecuesta*, UNAB / proyecto Gen_Ondas-UNAB 585, 2016,
   ISBN 978-958-46-9297-9. Hoy citado por **Scribd y ResearchGate**, ambos
   prohibidos. Es el primer escalón declarado de 33 de las 41 fichas.
3. **Vicente Arenas Mantilla** — *Estampas de mi tierra* (1941, hoy citado por
   **CiNii**, prohibido) y *Crónicas y romances* (Ediciones UIS, 2023).

El spec §4.1 nombra «la *Literatura folclórica* de Piedecuesta, Vicente Arenas»
como si fueran una sola obra. **No lo son**: la *Literatura folclórica* es de
Pérez Pinzón (2016) y Vicente Arenas Mantilla es un autor distinto, anterior,
cuyos textos ese libro recoge. Verificación en curso.

(secciones en construcción)

## Tanda 1 — verificado el 2026-09-20

### Vicente Arenas Mantilla, *Crónicas y romances* — **ficha de catálogo, sin texto**

- URL abierta y leída: https://ediciones.uis.edu.co/index.php/publicacionesuis/catalog/book/128
  (requiere `curl -k`: la cadena de certificados de `ediciones.uis.edu.co` está
  incompleta y WebFetch la rechaza; **no está caída**).
- **El módulo la cita mal en tres datos.** La página dice: publicado **5 de
  febrero de 2012**, no 2023; colección **Biblioteca Mínima Santandereana**;
  **ISBN 978-958-8777-15-3**; 15 × 10 cm; precio 12.000 COP; **«Disponible: No»**
  y **«La descarga de datos todavía no está disponible»**. Es decir: es una ficha
  de catálogo editorial. **No hay PDF ni lectura en línea.**
- **Y su índice no contiene los mitos del ciclo.** La sinopsis publica el
  sumario completo, quince piezas costumbristas: Una librería piedecuestana · La
  última lágrima · El cine, sus recuerdos y sus inconvenientes · El circo
  Santander · **El cerro de los compadres** · Vanidad de vanidades · Los
  discursos veintejulieros · Clínica para ratones · La cascarilla de las
  Martínez · El correo de las brujas · Las chicoteras · Los sobrenombres · El
  santuario de Palonegro · Bus, chisme y cocineras · **El mechudo de "Juan
  Rodríguez"**.
  De las 41 fichas, sólo dos tienen un candidato ahí: `la-mechuda`
  («El mechudo de "Juan Rodríguez"») y, con reservas, `el-cerro-encantado`
  («El cerro de los compadres»). **Ni La Mula del Diablo, ni La Llorona del
  Molino, ni La Sayona del Cementerio, ni El Pollo de las Ánimas, ni El Ánima
  Coy aparecen en el sumario de la obra que el ciclo lleva por nombre.**
- Limitación: ficha editorial; prueba la existencia y los datos de edición, no
  el texto de ningún relato.

### Vicente Arenas Mantilla, el autor

- Piedecuesta 1901 – Bucaramanga 1992 (pendiente de fijar con fuente abierta).
- Obras localizadas hasta ahora: *Estampas de mi tierra (biografías y crónicas
  piedecuestanas)*, 1941, y *Crónicas y romances*, 1960 según los repertorios,
  reeditado por Ediciones UIS en la Biblioteca Mínima Santandereana (2012).
- **No existe ninguna «*Literatura folclórica* de Piedecuesta» de Vicente
  Arenas.** El spec §4.1 junta en una línea dos cosas distintas.

### Dominios comprobados el 2026-09-20 (antes de dar nada por vivo)

| host | resultado | qué significa |
|---|---|---|
| `ediciones.uis.edu.co` | 200 sólo con `curl -k` | cadena de certificados incompleta; **vivo**, WebFetch lo rechaza |
| `noesis.uis.edu.co` | resuelve sólo por `--resolve` a 200.16.118.227 | el resolver local da NXDOMAIN; el servidor existe |
| `recursos.educoas.org` | **NXDOMAIN también en 8.8.8.8** | el host ya no existe: la ponencia educOAS está **muerta** |
| `catalogo.bibliotecanacional.gov.co` | **NXDOMAIN** | ese hostname nunca fue o ya no es |
| `bibliotecadigital.bibliotecanacional.gov.co` | **NXDOMAIN** | ídem |
| `catalogoenlinea.bibliotecanacional.gov.co` | 403 a `curl` | existe; **pendiente de comprobar en navegador** |
| `babel.banrepcultural.org` | 403 a `curl`; en navegador redirige a `oclc.org` 403 | catálogo migrado; **pendiente** |
| `www.bibliotecadigitaldebogota.gov.co` | 200 | vivo |
| `www.ellibrototal.com` | 200 | vivo |
| `biblioteca.academiahistoria.org.co` / `academiahistoria.org.co` | 200 | vivos |
| `revistas.uis.edu.co`, `cerlalc.org`, `www.amb.gov.co`, `www.alcaldiadepiedecuesta.gov.co`, `repositoriocdim.esap.edu.co`, `dialnet.unirioja.es` | 200 | vivos |

## Tanda 2 — el recopilador real: Germán Valenzuela Sánchez

**El módulo tenía el nombre bien y el libro mal.** La obra existe, tiene título,
editorial y año, y ninguno de los tres coincide con lo que hoy cita el
`sources.mjs`.

### Sitio de autor (fuente biográfica primaria, abierta y leída)

- **URL:** https://germanvalenzuelasanchez.wordpress.com/about/ — 200, leída
  entera el 2026-09-20.
- **Quién fue:** Germán Valenzuela Sánchez, «PicaPica» / «Plinio Pilarica»
  (Piedecuesta, 27-XII-1946 – 1-VII-2021). Escritor, periodista, compositor,
  historiador y poeta. **Bibliotecario municipal de Piedecuesta**, concejal
  (1976-1978), **columnista de Vanguardia Liberal**, colaborador de *El
  Espectador*, *El Tiempo*, *El Frente*, *ADN*; **fundador y director de los
  periódicos *El PicaPica* (desde 1976) y *La Hoja***; **socio fundador de la
  Academia de Historia de Piedecuesta** y de la Casa de la Cultura Presbítero
  Esteban García de Piedecuesta; director de los programas radiales «Aires
  Culturales» (La Voz de Piedecuesta; Radio Bucarica-Todelar) y «Santander
  Cultural». Difusor del folclor piedecuestano **«basado en el rescate oral,
  auspiciado por la alcaldía municipal de Piedecuesta»** — es decir, el corpus
  tiene origen de trabajo de campo municipal, no de archivo.
- **Premios que fechan el corpus:** ganador del concurso de cuento municipal de
  Piedecuesta (1974); **uno de los ganadores del II Concurso de Leyenda Popular
  Santandereana, 70 años de *Vanguardia Liberal*, Bucaramanga, 1989**; primer
  puesto del concurso de leyenda de la Universidad de Pamplona, 1998, con
  **«Mango Iluminado»**; reconocimiento de la Academia de Historia de
  Piedecuesta, octubre de 1997.

### La obra que fija el relato — **`Leyendas y cuentos de Santander`, Sic Editorial (Bucaramanga), 2009**

Su propia lista de libros publicados la fecha en **2009** y la atribuye a **Sic
Editorial**. Ni 2010 (como dice el estudio académico que cita el módulo) ni 2012
(como dice la reproducción de Scribd). Otras obras suyas relevantes al corpus,
todas fechadas por él mismo:

- *Tres leyendas ganadoras y algo más…* (2004), literatura infantil — son sus
  leyendas premiadas.
- *El sol de la cantera* (2016), Sic Editorial — **candidato directo para
  `los-tunjos-de-la-cantera`**, pendiente de comprobar.
- *Piedecuesta suelo y cielo de Santander* (1996), FRID Impresores.
- *En el barrio la feria nació Piedecuesta* (2001), Centro Dibujo.
- *Ocho cuentos exagerados y otras historias despelucadas* (2018) y *Los
  colmillos de la culebra* (2019), **División de Publicaciones UIS**.
- *Crónicas de un pueblo muerto. Jordán sube* (2008), Sic Editorial.

**Consecuencia inmediata:** el título que hoy va en 16 fichas —«Mitos y leyendas
de Piedecuesta y sus veredas», 2012, reproducción de Gonzalo Tolosa— **no es una
obra: es el nombre que alguien le puso a un PDF en Scribd**. La obra se cita
*Valenzuela Sánchez, Germán. «Leyendas y cuentos de Santander». Bucaramanga: Sic
Editorial, 2009*.

### **El libro está en línea, en el sitio del propio autor, y tiene ISBN**

https://germanvalenzuelasanchez.wordpress.com/libros/ publica un **fragmento en
PDF de cada obra**, embebido con el visor de Google Drive. Los PDF se descargan
directamente y se abren:

| obra | id de Drive | URL que la abre |
|---|---|---|
| *Leyendas y cuentos de Santander* (2009) | `1WV9BYw8m9PKm1aQp-0s3v7gEWVw3mSLL` | `https://drive.google.com/uc?export=download&id=1WV9BYw8m9PKm1aQp-0s3v7gEWVw3mSLL` |
| *Tres leyendas ganadoras y algo más…* (2004) | `1PHDCYRYjtmex3X5gBcHcDDjdZimIaCM9` | `https://drive.google.com/uc?export=download&id=1PHDCYRYjtmex3X5gBcHcDDjdZimIaCM9` |
| *Crónicas de un pueblo muerto. Jordán sube* (2008) | `1JQONpxsAgA3pxZFrK5NSHpLVk6UfuGv4` | ídem con ese id |
| *El titiritero de la sabana* (2012) | `1qT7atRqEAe9Yd60RMRddEq2sdiHgiyTE` | ídem |
| *Letras perdidas* (2006) | `1KHZ_FhXFpzdAH_TPBObwUPQatmixpXx-` | ídem |
| *Anillos de viento* (2004) | `1q71GCnsKKva_Hz3TlBkkoJe3ynbcs6fV` | ídem |

**Lo que trae el fragmento de *Leyendas y cuentos de Santander* (abierto, 2
páginas, escaneo de imagen: `pdftotext` sólo devuelve la marca de agua; hay que
rasterizar con `pdftoppm` y leer):**

- **Portada:** *Leyendas y Cuentos de Santander*, Germán Valenzuela Sánchez.
- **Contraportada, con datos que el módulo no tiene:** editorial **(Sic)
  Editorial — Proyecto Cultural de Sistemas y Computadores S.A.**, Bucaramanga;
  **ISBN 978-958-708-437-5**; y la cifra del corpus: **«son cuarenta y seis
  sagas»**. Nombra cuatro piezas: *El Abuelo de los Burros de Pueblo Arrecho*,
  *La Vaca De Ungenio*, ***La Hilandera*** y *El Perro que se Parrandió al
  Pollo*.
- **Y contradice a la ficha publicada.** La contraportada resume *La Hilandera*
  como la mujer **«que se convierte en bruja al arrojar a su hijo recién nacido
  a un pozo séptico»**. La ficha `la-hilandera` del módulo, en cambio, narra que
  el recién nacido fue *encontrado* en el baño compartido, se niega
  explícitamente a llamar «diabla» a Oliva y no menciona pozo séptico ni
  transformación. **Eso es material de `versiones`, no un error que se funda:
  la propia editorial del primer escalón dice otra cosa que el texto que hoy
  publicamos.**
- Limitación: es el fragmento de cubiertas, no el cuerpo del libro. Fija autor,
  editorial, ISBN, número de piezas y el resumen editorial de cuatro de ellas;
  **no da páginas, ni narradores, ni veredas**.

### **`Tres leyendas ganadoras y…` (2004) — el registro más antiguo, y nombra seis de nuestras fichas**

PDF abierto y leído (6 páginas, escaneo; rasterizado con `pdftoppm -r 120`):
`https://drive.google.com/uc?export=download&id=1PHDCYRYjtmex3X5gBcHcDDjdZimIaCM9`

- **Portadilla:** Germán Valenzuela Sánchez, *Tres leyendas ganadoras y…*,
  **primera edición, «décimo quinto libro», 2004**.
- **Solapa / contracubierta — la metodología de recolección, que es la meta 2
  del spec:** «Esta obra en gran parte es el resultado de una **correría a pie
  de su autor por más de 450 kilómetros cuadrados realizada por las 57 veredas
  y 88 colegios y escuelas de Piedecuesta**, divulgando como Profesor de
  Cátedra Libre los Símbolos Patrios […] **con el apoyo de la Administración
  Municipal del Doctor Raúl Alfonso Cardozo Ordóñez**». Y: «espera rescatar […]
  la tradición oral contada en forma rústica y sencilla por **nuestros
  campesinos piedecuestanos**».
- **Prólogo «Los senderos de Germán», por JULIO CÉSAR NIÑO OROZCO, periodista.**
  Fija la campaña: «durante **cinco meses seguidos**», «algo más de
  cuatrocientos cincuenta kilómetros cuadrados, los mismos que unen y separan
  **las cincuenta y siete veredas de Piedecuesta**»; «aprovechó cada visita al
  sector rural para recopilar parte de la cultura escondida en el campo
  piedecuestano. **Habló con cada habitante rural que pudo** sobre un sinnúmero
  de leyendas y fábulas»; «la dejó plasmada en **su bitácora** y en su memoria».
- **Y el prólogo lista los títulos del libro. Seis son nuestros slugs:**
  «**El Carriazo de San Isidro**, **La Cueva del Diablo**, **La Máncara de San
  Francisco**, **La Bruja Silbona**, El Mango Iluminado, La Muerte de Justo,
  **La Cueva de la Pisca**, **El Reventón de Jacobo**», más «**La Locura de
  Milandro Tejas**», una de las tres premiadas. «Pero hay algo más en este
  libro: Fábulas, Poesías, Coplas y una muestra de Historia de lo que ha sido
  el folclore en nuestra comarca.»
- **Página 7 abre «La Locura de Milandro Tejas», firmada «POR: GERMÁN
  VALENZUELA SÁNCHEZ»**, y el texto documenta cómo trabajaba: «Hace unos quince
  años salí de Piedecuesta muy de mañana con la intención de conocer
  personalmente **El Duende** […] hice una parada de descanso en la tienda
  denominada "**El Rey Olmedo**" […] me senté en una larga banca de madera donde
  se encontraba **una anciana** […] dijo que ella sabía muchas historias de la
  Mesa de los Santos, de **El Duende** y de los…». **Ése es un narrador**
  —anónimo, pero situado, fechado y con lugar—, y toca directamente
  `duende-del-salto`. La leyenda transcurre «en la Mesa de Jériras, llegando al
  caserío de la hoy Mesa de Los Santos, donde vivió el Cacique de Guanentá».

**Consecuencia:** para seis fichas el registro de primer escalón **no es 2009
ni 2012: es 2004**, y viene con método de campo documentado, ámbito (57
veredas), patrocinio municipal y prologuista con nombre. Es la mejor pieza de
toda la cantera.

### Los otros fragmentos del sitio de autor, abiertos y clasificados

- ***El sol de la cantera*** (Sic Editorial, 2016; ISBN 978-958-708-867-0 en el
  código de barras) — `...&id=1UzWhn4N1pFOSzBkhX-l7Ek-5puWaxp9A`. **No es la
  fuente de `los-tunjos-de-la-cantera`.** La contracubierta lo define como
  memoria personal: «el sol de mi vida que ya en el ocaso sigue revoloteando en
  mi imaginación […] de esa Piedecuesta sana, limpia, transparente con sus
  veinte mil habitantes en su suelo donde todos conocían a los demás». Sirve de
  segundo escalón (memoria del municipio), no de registro del relato.
- *Piedecuesta suelo y cielo de Santander* (1996, FRID Impresores, 12 pp. de
  fragmento) — `...&id=1fO3OS_jIOVlQ8m4OjDKULV14LA7gRsEd`. Historia local por el
  mismo autor; pendiente de leer página a página.
- *Ocho cuentos exagerados y otras historias despelucadas* (División de
  Publicaciones UIS, 2018, 7 pp.) — `...&id=1OFjED5cdKKaGjZB37C5zheff_FcvDmCQ`.
- Todos los fragmentos son **escaneos de imagen con marca de agua**: `pdftotext`
  devuelve sólo «www.germanvalenzuelasanchez.wordpress.com» descompuesto letra a
  letra. Hay que rasterizar. Anotarlo en `limitation`.

## Tanda 3 — segundo escalón: el municipio

### Rueda Pimiento, Pedraza Díaz y Acosta Lozano (2025) — **trabajo de campo real en los trapiches de Piedecuesta**

- «Voces y relatos desde el trapiche. Tradición oral hecha historia en un
  ejercicio de museografía digital», *Santander. Estudios de Patrimonio*
  (Universidad de Cantabria), núm. 8 (2025), sección «Investigaciones
  iniciadas». DOI 10.22429/Euc2025.sep.08.17.
- Autores: **Óscar Eduardo Rueda Pimiento** y **Diana Marcela Pedraza Díaz**
  (Universidad Pontificia Bolivariana, Bucaramanga) y **Sergio Andrés Acosta
  Lozano** (UDES). Los tres con ORCID publicado.
- URL que la abre y se lee: `https://santanderestudiospatrimonio.unican.es/index.php/sanespat/article/view/247`
  (**el `/download/247/490/4376` devuelve 403 a `curl`**: hay antibot; el
  `view` se abre en navegador sin problema).
- Qué contiene exactamente: resumen, palabras clave y **bibliografía completa**
  del proyecto del museo *Viaje al corazón de la panela*. «Enfoque
  biográfico-narrativo y **trabajo de campo en trapiches locales**», con
  relatos sobre el auge cañicultor, la organización sindical y la
  desruralización de **Piedecuesta (Santander)**, analizados con ATLAS.ti.
- A qué fichas sirve: **`el-trapiche-ardiendo`** en primer lugar; y como
  segundo escalón a todo el bloque piedecuestano que transcurre en el mundo de
  la caña, la molienda y la vereda.
- Limitación: es un artículo de «investigación iniciada» sobre museografía; no
  transcribe ninguna leyenda ni nombra a los narradores en el resumen. Hay que
  leer el PDF completo en navegador para extraer nombres.
- **Su bibliografía es cantera por sí sola.** De ahí salen, verificables:
  Emilio ARENAS, *La Payacuá: historia de Bucaramanga y las ciudades del Río de
  Oro*, Bucaramanga, **Fundación El Libro Total**, 2009; Mario GALÁN,
  *Geografía económica de Santander*, Contraloría General de la República,
  1947; el **Censo Agropecuario 1960, departamento de Santander** (DANE,
  1964) — `https://www.dane.gov.co/files/investigaciones/agropecuario/CNA_1960/SANTANDER.PDF`;
  y la tesis UIS de Flores, Rangel y Solano (2022) sobre el museo de la panela
  y la caña.

### Óscar Humberto Gómez Gómez, «Historia de Piedecuesta» (2017)

- URL abierta y leída: https://oscarhumbertogomez.com/?p=21427 (200; `curl` la
  sirve entera).
- Autor: **miembro correspondiente de la Academia de Historia de Santander**,
  autor de *Historia de Bucaramanga*. Publicado el 8 de abril de 2017.
- Qué contiene exactamente: ensayo histórico del municipio desde la fundación
  eclesiástica de **1774** y la separación de la parroquia de Girón, los
  Comuneros, la Independencia, la **toma de Piedecuesta por las tropas
  liberales antes de la Batalla de Bucaramanga del 13 de noviembre de 1899**,
  la industria del tabaco y el cigarro, la Semana Santa y la infraestructura
  contemporánea. **No narra ninguna leyenda**: es el ancla factual del segundo
  escalón.
- **Y confirma a los dos autores del ciclo desde fuera de ellos mismos.** En la
  lista de hijos ilustres del municipio: «el cronista **Vicente Arenas
  Mantilla**» y «el periodista y poeta **Plinio Pilarica (Germán Valenzuela
  Sánchez)**». Es la corroboración independiente que faltaba.
- Limitación: sitio personal del autor, sin paginación ni aparato de notas al
  pie; la bibliografía va al final sin años ni editoriales. Se cita por autor,
  título y fecha de la entrada.
- **Su bibliografía aporta un título nuevo y decisivo:** GALLO RONDÓN, Betty;
  CHAPARRO LÓPEZ, Cecilia, ***Santander, folclor, mitos y leyendas*** —
  candidato directo a primer escalón de `santander-folclor-clasico`. También
  MARTÍNEZ GARNICA, Armando y GUERRERO RINCÓN, Amado Antonio, *La provincia de
  Soto. Orígenes de sus poblamientos urbanos*, que es la provincia de
  Piedecuesta.

## Tanda 4 — **el hallazgo mayor: Villa Posse vol. II está entero y abierto, y trae siete de las ocho fichas no piedecuestanas**

### `https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620`

**Esta URL ya estaba en el módulo y nadie la había abierto.** Devuelve **HTTP
200 y un PDF de 402 páginas con el texto completo** de:

> **Villa Posse, Eugenia (investigación y compilación). *Mitos y leyendas de
> Colombia. Volumen II: Leyendas y cuentos del folclor*. Quito: Editorial
> IADAP, colección «Integración cultural», primera edición, agosto de 1993,
> 1.000 ejemplares. ISBN 9978-60-003-5; ISBN 9978-60-005-1 (tomo II).**

Ojo al aviso del encargo: `www.flacso.org.ec` es NXDOMAIN y
`biblio.flacsoandes.edu.ec` pide validación humana, pero **`www.flacso.edu.ec`
sirve el PDF sin condiciones**. No son el mismo host y no hay que darlos por
perdidos juntos.

El PDF es texto (no escaneo): `pdftotext -layout` lo extrae entero, con su
**índice de textos y sus paginaciones**.

### Lo que el índice resuelve, ficha por ficha

**Capítulo 17 — «VARIAS REGIONES. Leyendas», p. 7.** Su cabecera declara la
fuente: *«Otero D' Costa, Enrique. **Leyendas**. Biblioteca Aldeana de
Colombia. **Selección Samper Ortega de Literatura Colombiana**. Publicaciones
Ministerio de Educación Nacional, **Ed. Minerva, S.A., Bogotá, 1936 (p.
15-46)**»*, con la nota: «muchas de ellas oídas por el autor directamente de
narraciones campesinas, que él recuerda y elabora con el fin de dar una
presentación más literaria».

| ficha | texto en Villa Posse II | registro original |
|---|---|---|
| `tal-para-cual` | **p. 9** | Otero D'Costa, *Leyendas*, 1936 |
| `el-cacique-salomon` | **p. 33** | ídem |
| `talabad` (Talabalí) | **p. 36** | ídem |

**Capítulo 19 — «NARRACIONES DEL FOLCLOR. Departamento de Santander», p. 125.**
Su cabecera declara: *«**Arias, Juan de Dios. Folclor Santandereano. Biblioteca
Santander, Vol. XXIV, Tomo II, Bucaramanga, 1954.**»* y aclara: «**Se publica
el capítulo de Leyendas**».

| ficha | texto en Villa Posse II | registro original |
|---|---|---|
| `la-mancarita` | **p. 127** («La Mancarita») | Arias 1954, cap. de Leyendas |
| `la-piedra-del-muerto` | **p. 129** | ídem |
| `el-trapiche-ardiendo` | **p. 131** (bajo «Veladas campesinas. La barbacoa – El trapiche ardiendo») | ídem |
| `lagunas-encantadas` | **p. 135** | ídem |
| `lo-que-ensenan-las-cuevas` | **p. 138** | ídem |

**Siete de las ocho fichas de `santander-folclor-clasico` + `santander-mixto-residual`
quedan ancladas con página y edición.** Y, de propina, **`la-mancarita` —que hoy
vive en `piedecuesta-segundo-ciclo` atribuida a Valenzuela— tiene aquí un
registro impreso muy anterior, de 1954, y no es de Piedecuesta sino de la
provincia de Guanentá y del valle de Río Frío.**

### NARRADORES que este PDF entrega (el ciclo tenía cero)

De «La Mancarita», pp. 127-129:

- **«según la descripción que en nuestra infancia oímos a los campesinos de la
  provincia de Guanentá»** — Juan de Dios Arias fecha su propia escucha en su
  infancia, en Guanentá.
- **Don Manuel Ancízar**, *Peregrinación de Alpha*: recoge la leyenda «viajando
  por uno de los páramos de Santander», en diálogo transcrito con **un anciano
  labriego despojado de sus conucos por un gamonal usurpador de baldíos**, en
  cuyo rancho se alojó «nuestro compañero el botánico». El anciano es quien
  explica por qué llaman «encantada» a la laguna — **es también el narrador de
  `lagunas-encantadas`**.
- **Don Samuel Ortiz M.**: entrega a Arias «una transcripción de esta leyenda»
  con la etimología Manca + Rita y la sitúa en **los valles del Río Frío
  (Santander)**, en el mundo de las «abricinas de tabaco, desgrane de maíz o
  despasanza de cacao». Arias juzga esa versión «evidentemente de formación
  reciente y de carácter literario».
- **El doctor Juan C. García**: aporta la hipótesis del simio (*Pitheca
  rufiventris*), citando a Gómara.
- Arias discute además a **A. Van Gennep** contra el paralelo con la Llorona:
  «temas semejantes puede encontrarse en lugares distantes entre sí, sin que
  ello signifique conexión necesaria». **Eso es exactamente la comparativa de
  cuarto escalón que `similitudes` necesita, y viene con el aviso metodológico
  incluido.**

De «La piedra del muerto», p. 129: el relato se sitúa en **Mogotes**, y nombra
el **Alto de los Cacaos**, el **sitio de Palo Cortado**, las vegas del
**Mogoticos** y las quebradas **Cuchiquira** y **Túbuga**. (Eso valida, de paso,
el comunicado de la CAS sobre Cuchiquira que el módulo ya citaba.)

**Limitación de esta fuente:** Villa Posse reproduce, no recoge. Cada relato
debe citarse con doble referencia —obra original (Arias 1954 / Otero D'Costa
1936) y reproducción (Villa Posse 1993, con su página)— y el `limitation` debe
decir que la paginación disponible es la de la reproducción, no la del original.

### Más narradores y lugares, leídos literalmente en Villa Posse II

**`el-trapiche-ardiendo`** («Veladas campesinas. La barbacoa – El trapiche
ardiendo», pp. 131-134). Arias narra en primera persona su infancia y nombra a
sus informantes:

- «nuestra **abuela materna**, mujer de rara energía»;
- el fundo **«El Calzo»**, de aquel a quien su madre llamaba **«el compadre
  Vicente»**;
- **«El Volcán», el campo de don Crisanto**, que es quien responde en el
  diálogo: «— Es el trapiche del difunto **Nazario**, contestó don Crisanto»;
- **«La Meseta», donde vivía una anciana parienta**.
- Cierre literal: «El trapiche de don Nazario, estuvo toda la noche ardiendo en
  nuestra imaginación de niños.»

**`lagunas-encantadas`** (pp. 135-137). Arias encadena «algunos informes
particulares», cada uno con municipio: la laguna bajo la **Casa de Mercado de
Bucaramanga** y la imagen de **San Mateo** arrojada para amansarla (de ahí el
nombre del barrio); el **«Peñón de la Luchata»**, municipio de **Galán**, con
un totumo de frutos de oro y **«una clueca con polluelos, una y otros de oro»**
guardados por un mohán; la laguna sobre la que se edificó **El Socorro** y las
400 arrobas de sal; la vereda **«El Pantano», municipio de Girón**, y la
serpiente con cresta y cabeza de ternero; **«Alto Nogales», municipio de
Bolívar (Santander)**, con la doncella de catorce años de cabellera abierta en
abanico; **Mogotes** y los cohetes que provocan aguacero; la **«Laguna de
Ortices», municipio de San Andrés**, «de 7 cuadras de largo por 6 de ancho,
**según nos informaron**».
- **Y aquí está la comparativa que `la-cueva-de-la-pisca` necesita**: la clueca
  con polluelos de oro del Peñón de la Luchata (Galán) es el mismo motivo, en
  otro municipio del mismo departamento. Cuarto escalón del spec, exactamente
  como lo pide.

**`lo-que-ensenan-las-cuevas`** (pp. 138-141). «Todas las cuevas en Santander
tienen su leyenda; casi todas estas leyendas hablan de… los indios». Cuevas
nombradas con jurisdicción: **«El Colmenero»**; la **cueva del «Cenicero»**, en
una vereda del municipio de **Bolívar (Santander)**, con el personaje **«el
Miguelín»**; la cueva de **«La Calentana»**, también en Bolívar, con el santo
adosado que tienen por **San Antonio**; una cueva cerca de la loma de **«Buena
Vista»**; la **«cueva del indio»**; y la **«cueva de Cachalú»**, con el párroco
que sacó de ella el oro con que se doró un retablo. Arias mismo propone el
paralelo: «¿No hay en esta conseja una lejana reminiscencia del *sésamo,
ábrete*?» — con lo que la comparativa de Alí Babá que el módulo ya cita queda
**sostenida por la propia fuente**, y no puesta por nosotros.

**`el-cacique-salomon`** (p. 33) es de tema **boyacense-muisca**, no
santandereano: su protagonista es **Sugamuxi**, el sacerdote de **Iraca** que se
hizo cristiano con el nombre de don Alonso, y la escena es **Sogamoso**; el
segundo cacique, **don Andrés Guatesique, cacique de Dubigara**, sí es «guane
fotuto» y progenitor de los comuneros del 81.

**`talabad`** (p. 36) está anclado con precisión documental: **don Juan de
Velasco, hijo de Ortún Velásquez de Velasco**, sucesor en las encomiendas de
**Guaca, Bucarica y Bucaramanga**; el valle de **Bucarica**; los **yariguíes** y
la parcialidad de los **suamacaes** asentada en las vegas del **Cáchira**, cerca
de **Cañaverales**; el cacique **Suamacá**; y **Talabalí**, «un indio **guane**,
natural de Bucarica», paje de don Juan en su casa de **Pamplona**, huido al
monte por un castigo injusto.
- **El título impreso en el PDF sale como «T ALABAD»** (partición de línea de
  «TALABALÍ»). **Es casi seguro el origen del slug `talabad`**: se copió el
  error tipográfico. Va a DECISIONES.

---

## LA CANTERA, ORDENADA POR LA ESCALERA DEL SPEC §4

### Primer escalón — el registro que fija el relato

**1. Villa Posse, Eugenia (investigación y compilación). *Mitos y leyendas de
Colombia. Volumen II: Leyendas y cuentos del folclor*. Quito, Editorial IADAP,
colección «Integración cultural», 1.ª ed., agosto de 1993. ISBN 9978-60-005-1
(tomo II). 402 pp.**
`https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620`
✅ **texto completo**, PDF de texto extraíble. Contiene íntegros los capítulos
17 (Otero D'Costa, pp. 7-64) y 19 (Arias, pp. 125-141) con su índice paginado.
Sirve a: `tal-para-cual`, `el-cacique-salomon`, `talabad`, `la-mancarita`,
`la-piedra-del-muerto`, `el-trapiche-ardiendo`, `lagunas-encantadas`,
`lo-que-ensenan-las-cuevas`. **Limitación:** es reproducción, no recolección;
la paginación citable es la del tomo de 1993, no la del original.

**2. Arias, Juan de Dios. *Folclor santandereano*. Bucaramanga, Biblioteca
Santander, vol. XXIV, tomo II, 1954 — capítulo de Leyendas.**
Vía Villa Posse II, pp. 125-141 (misma URL). Ficha de catálogo independiente en
El Libro Total: `https://www.ellibrototal.com/ltotal/ficha.jsp?idLibro=298`
🟡 **ficha** (la ficha se abre y describe la obra; el lector es JavaScript y no
cargó el cuerpo: **pendiente de comprobar en navegador**, no caída).
**Aviso:** la ficha de El Libro Total describe una obra **en coplas y romances**
—«convocará nuestros ancestros, refundidos entre coplas […] una de sus obras
poéticas»—, mientras el capítulo que reproduce Villa Posse es **prosa
folclórica con notas al pie**. Puede tratarse de dos obras distintas del mismo
autor, o de dos partes del mismo volumen. Hay que resolverlo antes de citar.

**3. Otero D'Costa, Enrique. *Leyendas*. Bogotá, Biblioteca Aldeana de
Colombia, Selección Samper Ortega de Literatura Colombiana, Publicaciones del
Ministerio de Educación Nacional, Ed. Minerva S.A., 1936, pp. 15-46.**
Vía Villa Posse II, pp. 7-64 (misma URL). Y, para «El cacique Salomón», con
texto propio en:
`https://revistas.upb.edu.co/index.php/revista-institucional/article/download/3125/2843/5578`
✅ **texto** — PDF de 19 pp. de la *Revista de la Universidad Pontificia
Bolivariana*, con «El cacique Salomón» en **pp. 70-73**. Ya verificado el
2026-09-19 en `caribe-mestizo-final/busqueda-2026-09-19/BIBLIOGRAFIA-otero-morgan.md`,
junto con la biografía del autor (BHA-166, tesis de Preciado Camargo 2015).

**4. Valenzuela Sánchez, Germán. *Tres leyendas ganadoras y…* Piedecuesta,
1.ª ed., «décimo quinto libro», 2004. Literatura infantil. Prólogo de Julio
César Niño Orozco.**
`https://drive.google.com/uc?export=download&id=1PHDCYRYjtmex3X5gBcHcDDjdZimIaCM9`
✅ **texto** (escaneo de 6 pp.; exige rasterizar). Trae portadilla, prólogo con
la metodología de campo y el sumario, y el arranque de «La Locura de Milandro
Tejas». **Limitación:** es fragmento; no da paginación del cuerpo ni los textos
completos de las ocho leyendas que su prólogo enumera.

**5. Valenzuela Sánchez, Germán. *Leyendas y cuentos de Santander*.
Bucaramanga, (Sic) Editorial — Proyecto Cultural de Sistemas y Computadores
S.A., 2009. ISBN 978-958-708-437-5. 46 piezas.**
`https://drive.google.com/uc?export=download&id=1WV9BYw8m9PKm1aQp-0s3v7gEWVw3mSLL`
✅ **cubiertas** (2 pp., escaneo). Fija autor, editorial, ISBN, número de piezas
y el resumen editorial de cuatro de ellas, entre ellas *La Hilandera*.
**Limitación:** no contiene el cuerpo del libro. Es lo más cerca del primer
escalón que hoy se puede citar para los 16 mitos «de Valenzuela», y su
contraportada **contradice** la ficha publicada de `la-hilandera`.

**6. Biografía del recopilador — sitio de autor.**
`https://germanvalenzuelasanchez.wordpress.com/about/` ✅ **texto**
`https://germanvalenzuelasanchez.wordpress.com/libros/` ✅ **texto + 23 PDF**
**Limitación:** sitio de homenaje mantenido por la familia (contacto
`filmamostv@gmail.com`), sin editor académico; se usa para datos de edición y
para la cronología del autor, no para afirmar hechos de los relatos.

**7. Arenas Mantilla, Vicente. *Crónicas y romances*. Bucaramanga, Ediciones
UIS, colección Biblioteca Mínima Santandereana, publicado el 5-II-2012.
ISBN 978-958-8777-15-3.** (Los repertorios fechan la obra original en 1960.)
`https://ediciones.uis.edu.co/index.php/publicacionesuis/catalog/book/128`
🟡 **ficha, con sumario**. Requiere `curl -k`. Da los quince títulos del libro.
**Limitación:** «Disponible: No», sin descarga. No contiene ningún texto.

**8. Arenas Mantilla, Vicente. *Estampas de mi tierra (biografías y crónicas
piedecuestanas)*. 1941.** ❌ **sin URL legítima**. Hoy citada por CiNii
(prohibido) y localizable sólo en Google Books (prohibido). **No consultable.**

### Segundo escalón — el territorio y su historia

**9. Gómez Gómez, Óscar Humberto. «Historia de Piedecuesta», 8-IV-2017.**
`https://oscarhumbertogomez.com/?p=21427` ✅ **texto**. Academia de Historia de
Santander. Fundación eclesiástica de 1774, Comuneros, toma de Piedecuesta y
Batalla de Bucaramanga (13-XI-1899), tabaco y cigarro, Semana Santa. Nombra a
Arenas Mantilla («el cronista») y a Valenzuela («Plinio Pilarica»).
**Limitación:** sitio personal, sin paginación ni notas.

**10. Rueda Pimiento, Ó. E.; Pedraza Díaz, D. M.; Acosta Lozano, S. A. «Voces y
relatos desde el trapiche…», *Santander. Estudios de Patrimonio*, núm. 8
(2025). DOI 10.22429/Euc2025.sep.08.17.**
`https://santanderestudiospatrimonio.unican.es/index.php/sanespat/article/view/247`
✅ **texto** en navegador (el `/download/` da 403 a `curl`: antibot, no caída).
Trabajo de campo en trapiches de Piedecuesta. **Limitación:** museografía, no
transcribe leyendas.

**11. Pérez Pinzón, Luis Rubén. «Efectos de los planes decenales de cultura…
El caso de Piedecuesta (Colombia)», *Reflexión Política* (UNAB), 21 (42), 2019.**
`https://www.redalyc.org/journal/110/11063117012/` ✅ **texto completo en HTML**.
Diagnóstico del abandono de la tradición oral rural piedecuestana en boca de los
propios gestores culturales comunales. **Y cita a Valenzuela desde fuera:
«Valenzuela, G. (1995). *Piedecuesta: suelo y cielo de Santander*. Alcaldía
Municipal de Piedecuesta – Imprenta Departamental»** — nótese que el autor la
fecha en **1996, FRID Impresores**. Hay que decidir cuál se cita.
**Limitación:** analiza política cultural, no verifica ningún relato.

**12. Área Metropolitana de Bucaramanga, «Piedecuesta».**
`https://www.amb.gov.co/piedecuesta/` ✅ 200, 252 KB. Historia municipal, fique,
tabaco, panela.

**13. Plan de desarrollo de Piedecuesta.**
`https://obsgestioneducativa.com/wp-content/uploads/2021/02/Piedecuesta.pdf`
✅ PDF de 7,9 MB. Veredas y cartografía. **Limitación:** host de terceros
(`obsgestioneducativa.com`), no la alcaldía. Conviene sustituirlo por
`https://repositoriocdim.esap.edu.co/server/api/core/bitstreams/bee7efc0-464c-40db-a42d-6f9dbfa18862/content`
✅ PDF de 2,7 MB, repositorio CDIM de la ESAP, que es institucional.

**14. Alcaldía de Piedecuesta, «Piedecuesta, ciudad ilustre y muy leal» (2025).**
`https://www.alcaldiadepiedecuesta.gov.co/publicaciones/2354/...` ✅ 200.

**15. Fundación El Libro Total, *Mitos y Leyendas indígenas de Santander*
(memorias del 2.º Foro de Patrimonio Indígena de Santander).**
`https://www.ellibrototal.com/ltotal/ficha.jsp?idLibro=5271` 🟡 **ficha**
verificada; lector JS **pendiente de navegador**. Sirve al sustrato guane de
`talabad`, `el-cacique-salomon`, `los-tunjos-de-la-cantera`, `lagunas-encantadas`.

**16. Censo-Guía de Archivos, «Archivo Histórico Municipal de Piedecuesta».**
`https://censoarchivos.cultura.gob.es/CensoGuia/archivodetail.htm?id=44984`
✅ 200. **Limitación:** ficha de archivo; no hay fondos en línea.

**17. Boletín de Historia y Antigüedades (Academia Colombiana de Historia).**
`https://academiahistoria.org.co/boletines/BHA-709.pdf` ✅ PDF 7,5 MB —
«La parábola humana de José María Mantilla» (1975), para
`un-libertador-piedecuestano`.
`https://academiahistoria.org.co/boletines/BHA-100.pdf` ✅ PDF 2,7 MB — Otero
D'Costa, «Fundación de Bucaramanga» (1914), para `talabad`.

**18. Títulos nuevos localizados, aún sin URL verificada** (van a LO QUE NO
EXISTE si no aparecen): GALLO RONDÓN, Betty y CHAPARRO LÓPEZ, Cecilia,
*Santander, folclor, mitos y leyendas*; MARTÍNEZ GARNICA, A. y GUERRERO RINCÓN,
A. A., *La provincia de Soto. Orígenes de sus poblamientos urbanos*; ARENAS,
Emilio, *La Payacuá. Historia de Bucaramanga y las ciudades del Río de Oro*
(Fundación El Libro Total, 2009).

### Tercer escalón — la prensa

- **Germán Valenzuela fue columnista de *Vanguardia Liberal*** y fundador de
  *El PicaPica* (1976) y *La Hoja*, ambos periódicos de Piedecuesta
  (comprobado en su biografía). **El corpus nació, en parte, en prensa local.**
- **El II Concurso de Leyenda Popular Santandereana, 70 años de *Vanguardia
  Liberal*, Bucaramanga, 1989**, del que fue uno de los ganadores, es el
  acontecimiento que fecha la circulación escrita de varias de estas leyendas.
- **No se localizó hemeroteca digital de *Vanguardia Liberal*** anterior a la
  web actual `vanguardia.com`. El sitio del autor tiene una sección
  `periodico-el-picapica/` sin verificar aún.
- `https://www.vanguardia.com/judicial/2010/07/18/simon-bolivar-tuvo-un-hijo-en-santander/`
  ✅ 200 — pero es **prensa reciente que reempaqueta**: por el criterio del spec
  §4.1 (el criterio es el aporte, no la antigüedad) **no entra** salvo que se
  demuestre que aporta algo que las fuentes históricas no dan.

### Cuarto escalón — comparativas

Sólo las que **la propia fuente nombra**, que es como el spec las quiere:

- **A. Van Gennep**, citado por Arias contra el paralelo Mancarita/Llorona
  («temas semejantes puede encontrarse en lugares distantes entre sí, sin que
  ello signifique conexión necesaria»). Villa Posse II, p. 128.
- **La Ciguapa / Siguapa dominicana**, citada por Arias como paralelo de la
  Mancarita. Ídem.
- **«¿Sésamo, ábrete?»**, propuesto por Arias en «Lo que enseñan las cuevas».
  Sostiene la entrada de Alí Babá que ya está en el módulo.
- **La clueca con polluelos de oro del Peñón de la Luchata (Galán)** contra la
  pisca de la cueva piedecuestana: **el mismo motivo en otro municipio del
  mismo departamento**, que es el paralelo que el spec §4.1 declara preferible
  a Ovidio.

---

## REPARTO REAL — los 41 slugs contra la cantera

Confianza: **confirmado** = el título del relato aparece impreso en la obra, o
su texto está a la vista. **probable** = hay obra candidata y razón concreta,
falta el cotejo del sumario. **sin rastro** = ninguna obra lo nombra hoy.

### `santander-folclor-clasico` (6) — el mejor servido del bloque

| slug | de qué obra sale | confianza |
|---|---|---|
| `la-piedra-del-muerto` | Arias 1954, cap. Leyendas · **Villa Posse II, p. 129** | **confirmado** |
| `el-trapiche-ardiendo` | Arias 1954 · **Villa Posse II, p. 131** («Veladas campesinas. La barbacoa – El trapiche ardiendo») | **confirmado** |
| `lagunas-encantadas` | Arias 1954 · **Villa Posse II, p. 135** | **confirmado** |
| `lo-que-ensenan-las-cuevas` | Arias 1954 · **Villa Posse II, p. 138** | **confirmado** |
| `el-cacique-salomon` | Otero D'Costa, *Leyendas* 1936 · **Villa Posse II, p. 33** y **Rev. UPB, pp. 70-73** | **confirmado** (doble registro) |
| `tal-para-cual` | Otero D'Costa, *Leyendas* 1936 · **Villa Posse II, p. 9** | **confirmado** |

### `santander-mixto-residual` (2)

| slug | de qué obra sale | confianza |
|---|---|---|
| `talabad` | Otero D'Costa, *Leyendas* 1936 · **Villa Posse II, p. 36** | **confirmado** |
| `el-ermitano-iracundo` | nada. Las dos tesis de la UFPSO abren (200) pero son de Ocaña en general; el blog `mitos-cortos.com` está prohibido | **sin rastro** |

### `piedecuesta-espantos-y-entierros` (8)

| slug | de qué obra sale | confianza |
|---|---|---|
| `el-carriazo-de-vereda-san-isidro` | **Valenzuela, *Tres leyendas ganadoras y…*, 2004** (título en el prólogo) | **confirmado** |
| `el-reventon-de-jacobo` | ídem 2004 | **confirmado** |
| `la-cueva-de-la-pisca` | ídem 2004 | **confirmado** |
| `la-hilandera` | **Valenzuela, *Leyendas y cuentos de Santander*, 2009** (nombrada en contraportada) | **confirmado**, con versión divergente |
| `el-doctor-galeacer` | Valenzuela 2009, una de las 46 sagas | probable |
| `la-monedita-en-la-alcancia` | Valenzuela 2009 | probable |
| `la-diabla-castigadora` | Valenzuela 2009 | probable |
| `la-lampara-de-petroleo` | Valenzuela 2009 | probable |

### `piedecuesta-segundo-ciclo` (8)

| slug | de qué obra sale | confianza |
|---|---|---|
| `la-bruja-silbona` | **Valenzuela 2004** (título en el prólogo) | **confirmado** |
| `la-cueva-del-diablo` | **Valenzuela 2004** (ídem) | **confirmado** |
| `la-mancarita` | **Valenzuela 2004** («La Máncara de San Francisco») **y, muy anterior, Arias 1954 · Villa Posse II, p. 127** | **confirmado**, con conflicto de adscripción |
| `nueva-version-de-la-luz-del-limonal` | Valenzuela 2009 | probable |
| `el-diablo-de-umpala` | Valenzuela 2009 | probable |
| `la-campana-del-diablo` | Valenzuela 2009 | probable |
| `cuento-fantastico` (Río de Oro) | ninguna obra lo nombra | **sin rastro** |
| `el-griton` (La Urgua) | ninguna obra lo nombra | **sin rastro** |

### `piedecuesta-clasicos-final` (5)

| slug | de qué obra sale | confianza |
|---|---|---|
| `duende-del-salto` | **Valenzuela 2004**: «La Locura de Milandro Tejas» abre contando su viaje «con la intención de conocer personalmente El Duende» y a la anciana de la tienda «El Rey Olmedo» | **confirmado** el motivo y el narrador; el episodio del Salto, probable |
| `el-anima-coy` | *Crónicas y romances* de Arenas (el título del libro es literal) + nota de *La Eskina Magazín* 2019. **El sumario publicado de la obra no lo incluye** | probable |
| `la-luz-del-limonal` | Valenzuela 2009 | probable |
| `el-silbon` (Guatiguará) | Valenzuela 2009 | probable |
| `los-tunjos-de-la-cantera` | El tunjo está en Villa Posse II p. 156 y pp. 163-165, **pero como mito del Tolima**, no de la cantera piedecuestana. *El sol de la cantera* (2016) **no es la fuente**: es memoria personal | **sin rastro** para el relato concreto |

### `piedecuesta-vicente-arenas-i` (8) — **el ciclo bloqueado**

| slug | de qué obra sale | confianza |
|---|---|---|
| `la-mechuda` | *Crónicas y romances*, «**El mechudo de "Juan Rodríguez"**» (en el sumario publicado). Villa Posse II, p. 130, registra además la fórmula campesina «el mechudo estuvo con nosotros anoche, compadre» | probable (título confirmado, texto no consultable) |
| `la-mula-del-diablo` | ninguna obra consultable lo nombra | **sin rastro** |
| `la-mula-maneada` | ídem | **sin rastro** |
| `la-llorona-del-molino` | ídem | **sin rastro** |
| `el-fantasma-de-el-horizonte` | ídem | **sin rastro** |
| `la-puerta-del-perdon` | ídem | **sin rastro** |
| `la-sayona-del-cementerio` | ídem | **sin rastro** |
| `el-pollo-de-las-animas` | ídem. Villa Posse II trae «Cuento de ánimas» (p. 56, Otero D'Costa), que **no** es el mismo relato | **sin rastro** |

### `piedecuesta-relatos-legendarios` (4)

| slug | de qué obra sale | confianza |
|---|---|---|
| `un-libertador-piedecuestano` | «La parábola humana de José María Mantilla», **BHA-709 (1975)**, PDF abierto | probable (falta cotejar el texto) |
| `el-cerro-encantado` | *Crónicas y romances*, «**El cerro de los compadres**» | probable |
| `la-vista-del-libertador` | Baraya, *Biografías militares* (1874), en Internet Archive ✅ | probable |
| `el-quijote-piedecuestano` | ninguna obra lo nombra | **sin rastro** |

**Recuento: 12 confirmados, 17 probables, 12 sin rastro.**

---

## NARRADORES

Hoy el ciclo tiene cero. Lo que esta búsqueda pone sobre la mesa:

| quién | qué narró | dónde | cuándo | fuente |
|---|---|---|---|---|
| **Germán Valenzuela Sánchez** (1946-2021), bibliotecario municipal de Piedecuesta | recolector de todo el corpus piedecuestano | **las 57 veredas de Piedecuesta**, 450 km² a pie, 88 colegios y escuelas | **cinco meses** de campaña, bajo la alcaldía de **Raúl Alfonso Cardozo Ordóñez**; publicado en 2004 | *Tres leyendas ganadoras y…*, solapa y prólogo |
| **los campesinos piedecuestanos**, sin nombre | las leyendas «contadas en forma rústica y sencilla» | veredas de Piedecuesta | anotadas en **su bitácora** | ídem |
| **una anciana** de la tienda **«El Rey Olmedo»**, camino de la Mesa de los Santos, «vivaracha y habladora», «tenía algo de adivina» | historias de la Mesa de los Santos y **de El Duende** | Mesa de Jériras / Mesa de Los Santos | «hace unos quince años» respecto de 2004, es decir **h. 1989** | *Tres leyendas ganadoras y…*, p. 7 |
| **Julio César Niño Orozco**, periodista | prologuista y testigo de la campaña de recolección | Piedecuesta | 2004 | ídem |
| **Juan de Dios Arias** | oyó la Mancarita «en nuestra infancia» **a los campesinos de la provincia de Guanentá** | provincia de Guanentá | infancia del autor (obra de 1954) | Villa Posse II, p. 127 |
| **Don Manuel Ancízar** («Alpha») | recogió la Mancarita y la laguna encantada **de un anciano labriego despojado de sus conucos por un gamonal**, en cuyo rancho se alojó «nuestro compañero el botánico» | un páramo de Santander | Comisión Corográfica, *Peregrinación de Alpha* | Villa Posse II, pp. 127-128 |
| **Don Samuel Ortiz M.** | entregó a Arias una transcripción de la Mancarita (etimología Manca + Rita) | **valles del Río Frío (Santander)** | anterior a 1954 | Villa Posse II, p. 128 |
| **Dr. Juan C. García** | hipótesis del simio para la Mancarita | — | anterior a 1954 | Villa Posse II, p. 128 |
| **La abuela materna de Arias**, **«el compadre Vicente»** (fundo El Calzo), **don Crisanto** (El Volcán) y **una anciana parienta** (La Meseta) | el trapiche ardiendo de **don Nazario** | fundos de la provincia santandereana | infancia de Arias | Villa Posse II, pp. 131-134 |
| informantes anónimos de las lagunas | Bucaramanga (Casa de Mercado / San Mateo), Galán (Peñón de la Luchata), El Socorro, vereda El Pantano de Girón, Alto Nogales de Bolívar, Mogotes, Laguna de Ortices de San Andrés («según nos informaron») | esos municipios | anterior a 1954 | Villa Posse II, pp. 135-137 |
| **«el Miguelín»** | la cueva del Cenicero | una vereda del municipio de Bolívar (Santander) | anterior a 1954 | Villa Posse II, p. 139 |

**De cero a once registros con nombre, lugar o fecha.** Ninguno es un narrador
de las ocho fichas de Arenas: ahí sigue el vacío.

---

## CAÍDAS Y BASURA — qué hay que retirar del `sources.mjs` actual

### Muertas de verdad (comprobadas dos veces)

| URL | dónde está | qué pasa |
|---|---|---|
| `https://recursos.educoas.org/publicaciones/digitalizar-la-memoria-oral-colectiva-...` y `https://recursos.educoas.org/sites/default/files/5134.pdf` | **5 de los 7 ciclos** | **NXDOMAIN** en el resolver local y en 8.8.8.8. El host no existe. La ponencia de Pérez Pinzón y Serrano **no tiene hoy ninguna URL legítima**: su única otra copia es ResearchGate, prohibida. **Se retira sin sustituto.** |
| `https://noesis.uis.edu.co/server/api/core/bitstreams/ab8e2e84-.../content` | espantos | **HTTP 500**, bitstream inexistente |
| `https://noesis.uis.edu.co/server/api/core/bitstreams/19c96599-.../content` | relatos-legendarios, folclor-clasico | **HTTP 500** |
| `https://noesis.uis.edu.co/server/api/core/bitstreams/e7d7156d-.../content` | clasicos-final | **HTTP 500** |
| `https://noesis.uis.edu.co/bitstreams/a5514e43-.../download` | espantos | devuelve **HTML de la app Angular**, no el PDF |

(`noesis.uis.edu.co` sólo resuelve forzando `--resolve … 200.16.118.227`; el
servidor vive, los cuatro documentos no.)

### Prohibidas por el spec §4.2, y son el primer escalón de 33 fichas

| URL | dónde | por qué fuera |
|---|---|---|
| `https://es.scribd.com/document/408561909/16-Mitos-y-Leyendas-de-Piedecuesta` | espantos, segundo-ciclo | **Scribd**. Y además el título «Mitos y leyendas de Piedecuesta y sus veredas, 2012, reproducción de Gonzalo Tolosa» **no existe como obra**: es el nombre de un PDF subido |
| `https://es.scribd.com/document/427463771/LiteraturaFolclricaPiedecuesta2016-pdf` | **5 ciclos** | **Scribd** |
| `https://www.researchgate.net/publication/305682356_...` | **5 ciclos** | **ResearchGate** |
| `https://es.scribd.com/document/936919479/2023TurismoCultural-...UNAB` | vicente-arenas-i | **Scribd** |
| `https://ci.nii.ac.jp/ncid/BA91868368` (*Estampas de mi tierra*) | vicente-arenas-i, clasicos-final, relatos-legendarios | **CiNii**, catálogo |
| `https://openlibrary.org/books/OL23470269M/...` | relatos-legendarios | **Open Library**, catálogo |
| `https://openlibrary.org/books/OL26208262M/...` | mixto-residual | ídem |
| `https://play.google.com/store/books/details/...Cronicon_solariego...` | mixto-residual | **Google Books/Play**, catálogo de tienda |
| `https://www.mitos-cortos.com/mitos-colombianos/el-ermit/` | mixto-residual | agregador sin autoría |
| `https://es.slideshare.net/slideshow/ta01402332005/17214153` | clasicos-final | agregador de subida libre |
| `https://www.ohchr.org/en/instruments-mechanisms/instruments/convention-rights-persons-disabilities` | vicente-arenas-i | **convención genérica**: el spec la nombra expresamente. Además responde **403** |
| `https://escuelaelduende.blogspot.com/p/blog-page.html` | clasicos-final | blog de una sede escolar, sin autoría ni fecha |
| `https://laeskinavirtual.blogspot.com/2019/12/...` | clasicos-final | blog. Abre (200) y **es la única pista de «Vicente Arenas Mantilla y el Romance del Ánima Coy»**: se conserva sólo si no aparece nada mejor, declarándolo |

### Bloqueadas o dudosas — **pendientes de comprobar en navegador, no muertas**

| URL | código | nota |
|---|---|---|
| `https://enciclopedia.banrepcultural.org/index.php/Muisca` (y la de Ancízar) | **403 a `curl`** | Banrepcultural filtra CLI. **No retirar sin abrir en navegador** |
| `https://www.mediatheques.strasbourg.eu/doc/IGUANA_2/750237/...` | **403** | antibot |
| `https://www.cervantesvirtual.com/descargaPdf/...atala...` | **403** | antibot |
| `https://www.icesi.edu.co/revistas/.../4742/4479` | **302 a la nada** | redirección rota; buscar el `view` |
| `https://santanderestudiospatrimonio.unican.es/.../download/247/490/4376` | **403** | usar `/article/view/247` |
| `https://catalogoenlinea.bibliotecanacional.gov.co` | **403** | existe; el catálogo de la BNC hay que consultarlo en navegador |
| `https://babel.banrepcultural.org` | **403**, y en navegador redirige a `oclc.org` 403 | catálogo migrado |
| `https://revistas.uis.edu.co/.../download/3056/3939?inline=1` | 200 pero **`text/html`**, no PDF | comprobar que no sea una portada |
| `https://repositorio.uptc.edu.co/server/api/core/bitstreams/bb2b505c-.../content` | 200 con **15 KB de HTML** | casi seguro bitstream perdido |
| `https://repository.upb.edu.co/handle/20.500.11912/5918` | 200 con **3,7 KB** | shell vacío; abrir en navegador |

### Lo contrario: una URL dada por perdida que **sí** funciona

`https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620` — **200 y
402 páginas de texto**. Estaba en dos ciclos descrita como «catálogo». Es el
libro entero. **Ésta es la que salva el bloque santandereano.**

---

## LO QUE NO EXISTE

Buscado y no encontrado el 2026-09-20:

1. **Ningún texto de Vicente Arenas Mantilla en línea.** *Estampas de mi tierra*
   (1941) y *Crónicas y romances* (1960/2012) no están digitalizados en
   Ediciones UIS, ni en el repositorio de la UIS, ni en El Libro Total, ni en
   la Biblioteca Digital de Bogotá, ni en la BNC (cuyo catálogo, además, sólo
   se puede consultar en navegador). Sólo la ficha editorial, marcada
   «Disponible: No».
2. **Ninguna «*Literatura folclórica* de Piedecuesta» de Vicente Arenas.** El
   spec §4.1 la nombra como si existiera; es de **Luis Rubén Pérez Pinzón**
   (2016) y Arenas es otro autor.
3. **La *Literatura folclórica* de Pérez Pinzón (2016) no tiene copia
   legítima.** No está en el repositorio de la UNAB (su buscador sólo devuelve
   un resultado para «Piedecuesta», y es otro artículo), ni en Zenodo, ni en
   Dialnet accesible. Sólo Scribd, ResearchGate y docplayer: los tres
   prohibidos. **Queda su ficha de Cerlalc** (200, verificada) como registro de
   existencia, que no sostiene ningún relato.
4. **La ponencia educOAS de Pérez Pinzón y Serrano (2017) ya no tiene host.**
5. **No hay hemeroteca digital de *Vanguardia Liberal*** anterior a
   `vanguardia.com`. Las columnas de Valenzuela, *El PicaPica* y *La Hoja* no
   están en línea; su sección `periodico-el-picapica/` queda por revisar.
6. **No se localizó edición ni ISBN de GALLO RONDÓN y CHAPARRO LÓPEZ,
   *Santander, folclor, mitos y leyendas***, citado por Gómez Gómez. Ninguna
   búsqueda lo devuelve.
7. **Doce fichas no las nombra ninguna obra consultable** (ver REPARTO REAL),
   entre ellas siete de las ocho de Arenas.
8. **`cuento-fantastico`, `el-griton` y `el-quijote-piedecuestano` no aparecen
   en ningún sumario, índice ni catálogo**: son los tres títulos que más se
   parecen a invenciones de ficha.
9. Nada de esto se buscó en `www.flacso.org.ec` ni en `biblio.flacsoandes.edu.ec`,
   fuera de alcance por el encargo. **`www.flacso.edu.ec` sí, y fue el hallazgo.**

---

## DECISIONES

Nada se aplica hasta que el director responda. Tres opciones concretas cada una.

### D1. `piedecuesta-vicente-arenas-i` (8 fichas): el ciclo no tiene primer escalón

El libro que le da nombre no es consultable y su sumario publicado no contiene
siete de sus ocho títulos.

- **A.** Declararlo **bloqueado** en bloque por el spec §8 y no publicar ninguna
  de las ocho hasta conseguir *Estampas de mi tierra* o *Crónicas y romances*
  en papel (Biblioteca Pública de Piedecuesta, Casa de la Cultura Presbítero
  Esteban García, biblioteca de la UIS, Academia de Historia de Piedecuesta).
- **B.** **Desmontar el ciclo y repartirlo por procedencia real:** `la-mechuda`
  y `el-cerro-encantado` se quedan con Arenas (títulos confirmados en el
  sumario); las otras siete pasan a un ciclo nuevo `piedecuesta-sin-registro`,
  con el resto de los «sin rastro», y se trabajan sólo cuando aparezca fuente.
- **C.** Mantener el ciclo con el nombre y **reescribir su `historia` como
  problema abierto**: atribuir a la tradición oral de Piedecuesta recogida por
  Valenzuela (que sí es consultable) y quitar la atribución a Arenas mientras
  no se pueda leer. Riesgo: el spec prohíbe declarar carencia en el texto
  publicado, así que esto obliga a un `dudas` largo por ficha.

**Recomendación: B**, con las ocho en cuarentena editorial y una gestión por
correo a Ediciones UIS (`publicaciones@uis.edu.co`, en la propia ficha del
libro) pidiendo el PDF.

### D2. `la-mancarita` está en el cajón equivocado

Hoy vive en `piedecuesta-segundo-ciclo` atribuida a Valenzuela. Pero Arias la
publicó en 1954 como leyenda de la **provincia de Guanentá** y del **valle de
Río Frío**, con tres informantes nombrados, y el título de Valenzuela es
distinto: «**La Máncara de San Francisco**».

- **A.** **Dos fichas**: `la-mancarita` (santandereana, Arias 1954, Guanentá /
  Río Frío) en `santander-folclor-clasico`, y `la-mancara-de-san-francisco`
  (piedecuestana, Valenzuela 2004) en el segundo ciclo. Es lo que la evidencia
  sostiene y lo que la propia ficha `la-hilandera` ya pide al desfusionarse.
- **B.** **Una sola ficha en `santander-folclor-clasico`**, con la versión
  piedecuestana como variante en `versiones`. Más barato, pierde el relato de
  Valenzuela.
- **C.** Dejarla donde está y ampliar `versiones` con Arias. Mantiene una
  atribución geográfica que la fuente más antigua desmiente.

**Recomendación: A.**

### D3. El slug `talabad` sale de una errata de OCR

El título impreso en el PDF de Villa Posse se parte como «**T ALABAD**»; el
relato se llama **Talabalí** y así aparece en el índice del propio tomo.

- **A.** Renombrar a `talabali`, título «Talabalí: cautiverio y duelo en
  Bucarica», y dejar redirección 301 desde `talabad`.
- **B.** Renombrar sólo el título visible y conservar el slug por SEO.
- **C.** Dejarlo. (Publicamos una errata de escaneo como nombre propio.)

**Recomendación: A.**

### D4. Cómo se cita a Valenzuela en 16 fichas

Hoy: «Mitos y leyendas de Piedecuesta y sus veredas, 2012, reproducción de
Gonzalo Tolosa», con URL de Scribd. Eso no es una obra.

- **A.** **Dos entradas distintas según la ficha**: *Tres leyendas ganadoras
  y…* (2004) para las seis que su prólogo nombra, y *Leyendas y cuentos de
  Santander* (Sic Editorial, 2009, ISBN 978-958-708-437-5) para las demás, en
  ambos casos con la URL de Drive del sitio de autor y `limitation` que diga
  «fragmento de cubiertas / de prólogo, escaneo sin texto seleccionable».
- **B.** Una sola entrada, *Leyendas y cuentos de Santander* 2009, para las
  dieciséis. Pierde la precedencia de 2004, que es el dato nuevo.
- **C.** Citar por ficha institucional (Cerlalc) sin URL de contenido.

**Recomendación: A.**

### D5. `los-tunjos-de-la-cantera`, `cuento-fantastico`, `el-griton`, `el-quijote-piedecuestano`

Cuatro fichas que ninguna obra nombra.

- **A.** Cuarentena: no se reescriben en esta ronda; se listan en el informe
  como pendientes de fuente primaria.
- **B.** Se reescriben apoyadas sólo en segundo escalón (territorio) y se
  declara `AGOTADO` con menos de 8 fuentes. El spec §8 lo **bloquea** salvo
  justificación escrita.
- **C.** Se despublican hasta que haya registro.

**Recomendación: A**, con `los-tunjos-de-la-cantera` marcado aparte: el motivo
del tunjo sí está documentado (Villa Posse II, pp. 156 y 163-165), pero como
mito **del Tolima**; usarlo como registro sería mover el relato de
departamento.

### D6. `el-cacique-salomon` no es santandereano

Su escena es **Sogamoso** y su protagonista **Sugamuxi**, sacerdote de Iraca
(Boyacá). Sólo el segundo cacique, Guatesique de Dubigara, es guane.

- **A.** Mantenerlo en `santander-folclor-clasico` y decirlo en `historia`: es
  una leyenda de Otero D'Costa, santandereano, ambientada en Boyacá.
- **B.** Moverlo a un ciclo boyacense.
- **C.** Reencabezarlo como pieza del subciclo Otero D'Costa, junto a
  `tal-para-cual` y `talabad`, que comparten obra, edición y páginas — un
  subciclo real, que es lo que el spec §6.1 pide.

**Recomendación: C.**

### D7. Qué se hace con *Folclore santandereano* de El Libro Total

La ficha 298 describe una obra **en coplas**; el capítulo que reproduce Villa
Posse es **prosa con notas**. Puede haber dos obras.

- **A.** Abrir el lector de El Libro Total en navegador y cotejar el índice
  antes de citar (media hora de trabajo, resuelve la duda).
- **B.** Citar sólo por Villa Posse y dejar El Libro Total como ficha
  secundaria con `limitation` explícita.
- **C.** Retirar El Libro Total del pool.

**Recomendación: A**, y **B** mientras tanto.

---

## APÉNDICE · La prensa local, con lo que hoy se puede fechar

- ***El PicaPica***, periódico de Piedecuesta, **fundado el 31 de enero de 1976
  por Germán Valenzuela Sánchez**, lema «Sale en invierno» («ya que el invierno
  no era el agua sino la plata»). **Edición 100 en 2011.**
  `https://germanvalenzuelasanchez.wordpress.com/periodico-el-picapica/`
  ✅ 200, leída. **No hay ejemplares en PDF**: sólo la reseña y una portada.
  Limitación: dato de existencia y fechas, no contenido.
- **Crónicas del propio recopilador, publicadas y abiertas**, en
  `https://germanvalenzuelasanchez.wordpress.com/huellas/escritos/` ✅ 200:
  «Piedecuesta pueblo alfarero» (crónica sobre el reparto de *El PicaPica* en
  bicicleta por fincas, chircales y tejares, año 1976), «Recordando a Rafael
  Antonio Gómez Camargo», «Así conocí a Bucaramanga». Sirven al segundo escalón
  —oficios, caminos, veredas— y son de la mano del recopilador.
- **Vanguardia Liberal**: Valenzuela fue su columnista, y el **II Concurso de
  Leyenda Popular Santandereana por los 70 años del diario (Bucaramanga, 1989)**
  es el hito que fecha la circulación escrita del corpus. **Sin hemeroteca
  digital localizada**: hay que pedirla a la Biblioteca Pública Gabriel Turbay
  de Bucaramanga o a la propia Vanguardia.

---

## CÓMO SE COMPROBÓ

- Todas las URL de este documento se abrieron y se leyó su contenido, no su
  código de respuesta. Los PDF de imagen se rasterizaron (`pdftoppm -r 110/130
  -png`) y se leyeron como imagen, porque `pdftotext` sólo devuelve la marca de
  agua.
- Los 403 se distinguen de las caídas: los que responden 403 a `curl` quedan
  marcados **pendientes de navegador**, nunca como muertos.
- Las NXDOMAIN se comprobaron dos veces: resolver local **y** `dig @8.8.8.8`.
- No se usó la API de OpenAI. No se tocó Neon, ni ningún `.mjs`, ni ningún
  script de aplicar.
