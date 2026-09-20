# Bibliografía — Bogotá mestizo, ronda 3 (16 fichas)

Paso 1 del brief `docs/brief-mestizos-y-mixtos.md`. Escalera del spec §4.1.
Ciclos: `editorial/bogota-mestizo-memoria` (8) y `editorial/bogota-mestizo-nocturno` (8).
Levantamiento del 2026-09-20. **Documento en construcción: se amplía por tandas.**

## Las 16 fichas

**memoria**: `el-bobo-del-tranvia` · `el-loco-arias` · `el-mono-de-la-pila` ·
`la-loca-margarita` · `el-enigmatico-abogado` · `los-fantasmas-de-la-candelaria` ·
`la-leyenda-del-santuario-de-monserrate` · `el-diablo-del-puente-del-comun`

**nocturno**: `el-hombre-del-farol` · `el-toro-en-el-ascensor` · `el-venado-de-oro` ·
`la-bruja-del-tranvia` · `la-monja-de-las-rosas` · `la-monja-vidente-y-el-taxista` ·
`la-mula-herrada` · `los-esqueletos-caminantes`

---

## PRIMER ESCALÓN — el registro que fija el relato

### 1. Cordovez Moure, José María. *Reminiscencias de Santafé y Bogotá*. Bogotá: Librería Americana, 1899-1910. 4 tomos (selección Banrep). Libro / crónica costumbrista.

- URL (objeto compuesto, dominio público, PDF descargable por tomo):
  https://babel.banrepcultural.org/digital/collection/p17054coll10/id/3877/
  - Tomo I — id 2917 · https://babel.banrepcultural.org/digital/collection/p17054coll10/id/2917/
  - Tomo II — id 2854 · https://babel.banrepcultural.org/digital/collection/p17054coll10/id/2854/
  - Tomo III — id 2896 · https://babel.banrepcultural.org/digital/collection/p17054coll10/id/2896/
  - Tomo IV — id 2953 · https://babel.banrepcultural.org/digital/collection/p17054coll10/id/2953/
  - Descarga directa: `.../digital/api/collection/p17054coll10/id/<id>/download`
- **AVISO DE CERTIFICADO**: `babel.banrepcultural.org` sirve una cadena TLS incompleta.
  WebFetch devuelve `unable to verify the first certificate` y la navegación del visor
  da 403 a clientes no-navegador. `curl -k` descarga el PDF sin problema (200,
  `application/pdf`). **No está caída: es el mismo caso que
  `enciclopedia.banrepcultural.org`.**
- **CORRECCIÓN IMPORTANTE SOBRE LOS «TOMOS»**: los cuatro ficheros de Banrep **no son
  tomos I-IV sino las *series* originales**, y el orden de los metadatos no coincide con
  el de los archivos. Verificado abriendo cada PDF por su portada y su índice:
  - id **2917** = **Serie primera**, 3.ª ed. corregida y aumentada (Librería Americana).
    Índice paginado leído en el propio volumen: Bailes 1 · Los colegios y los estudiantes
    28 · Espectáculos públicos 49 · Asuntos religiosos 89 · **Crímenes célebres 112** ·
    Asesinato del presbítero Barreto 114 · Asesinato de D. Sebastián Herrera 116 ·
    **Asalto al convento de San Agustín por la Compañía de Russi 123** · Saqueo a
    D.ª María Josefa Fuenmayor de Licht 131 · Robo a D. Juan Alcina 141 · Asalto a la
    casa de D. Andrés Caicedo 147 · **Asesinato de Manuel Ferro 154** · **Juicio y
    ejecución de José Raimundo Russi y sus compañeros 178** · **Custodia o La Emparedada
    203** · Envenenamiento y robo del doctor Rudesindo López 218 · Robo sacrílego de la
    Capuchina 235 · El bandido Juan Rojas Rodríguez 250 · Asalto a la hacienda de La
    Herrera 281 · El crimen de Hato Grande 308 · Episodios sangrientos 336.
  - id **2854** = **Serie tercera**, 1.ª ed. corregida y aumentada. Índice ilegible por
    OCR, pero el cuerpo del volumen contiene el pasaje de costumbres coloniales con **la
    mula herrada**.
  - id **2896** = **Serie cuarta**, 1.ª ed. corregida y aumentada, 1900. Índice leído en
    el volumen: Prólogo · **La conspiración del 25 de septiembre de 1828, p. 1** · Una
    epopeya militar 181 · Apéndice del anterior relato 245 · Un duelo célebre 252 · Una
    explosión inesperada 265 · Artes y oficios 274.
  - id **2953** = el cuarto fichero; su descarga se corta repetidamente en el servidor
    (PDF truncado, sin `%%EOF`) — **pendiente de comprobar en navegador**.
- **Citas literales ya extraídas del texto** (sirven de anclaje para las actas del paso 2):
  - *Serie cuarta*, p. 56 (asalto a San Carlos, noche del 25-IX-1828): «la escalera,
    iluminada con una vela en un farol que descolgó D. Juan Miguel Acebedo para guiar á
    sus compañeros, no había otra luz en el patio y corredores de palacio, que la de la
    luna». En la lista de conjurados del mismo volumen: «Juan Miguel Acebedo, 20 años, de
    Bogotá». **Éste es el registro documental del farol de la Septembrina.**
  - *Serie tercera*: «el espanto de **la mula herrada** que recorría las calles en altas
    horas de la noche **y nadie veía**», dentro del catálogo de conversaciones de atrio
    de la Santafé colonial.
- Tabla de contenidos del registro bibliográfico (campo `descria`, útil pero con el orden
  de tomos equivocado):
  - **Tomo I**: Prólogo — *La conspiración del 25 de septiembre de 1828* — Una epopeya
    militar — Apéndice del anterior relato — Un duelo célebre — Una explosión inesperada
    — Artes y oficios
  - **Tomo II**: Prólogo — Raza maldita (inédito) — Doña Manuela Sáenz — Un viaje de
    recreo — Miguel Perdomo Neira — Nieves Ramos — Juicio de Dios — El Alacrán — Un duelo
    — Los chircaleños — Los guerrilleros (inédito)
  - **Tomo III**: Bailes — Los colegios y los estudiantes — Espectáculos públicos —
    Asuntos religiosos — **Crímenes célebres** — Asesinato del Presbítero Barreto —
    Asesinato de D. Sebastián Herrera — *Asalto al Convento de San Agustín por la
    Compañía de Russi* — Saqueo a D.ª María Josefa Fuenmayor de Licht — Robo a D. Juan
    Alcina — Asalto a la casa de D. Andrés Caicedo — *Asesinato de Manuel Ferro* —
    ***Juicio y ejecución de José Raimundo Russi y sus compañeros*** — *Custodia o La
    Emparedada* — Envenenamiento y robo del doctor Rudesindo López — Robo sacrílego de
    la Capuchina — El bandido Juan Rojas Rodríguez — Asalto a la hacienda de La Herrera
    — El crimen de Hato Grande — Episodios sangrientos
  - **Tomo IV**: La conspiración del 23 de mayo de 1867 (I-XXIX)
- Sirve a: `el-enigmatico-abogado` (tomo III, capítulos de Russi — el registro central),
  `el-hombre-del-farol` (tomo I, la Septembrina). Pendiente de cotejo párrafo a párrafo
  el resto (descarga en curso).
- Limitación: esta edición de Banrep **es una selección de cuatro tomos**, no las ocho
  series completas de las *Reminiscencias*. Prosa costumbrista con juicios morales de su
  época; Cordovez escribe de memoria y de oídas y no distingue el rumor del hecho.

### 2. Ibáñez, Pedro María. *Causa y ejecución de José Raimundo Russi*. Bogotá, 1894. Folleto / estudio sobre los originales del proceso.

- **Hallazgo colateral y probablemente la mejor fuente del ciclo para esa ficha.** No
  estaba en el `sources.mjs` actual. Lo cita y lo pagina Moisés de la Rosa (ver abajo):
  p. 113 (la noche del 24 de abril de 1851, la chichería de Ramona Riaño, carrera 4.ª
  n.º 210, una cuadra al sur del Puente de Santander) y p. 158 (declaración de testigo
  que sitúa la casa de Russi en la Calle de San Bruno, hoy carrera 2.ª n.º 10-39).
- Ibáñez trabajó **sobre los originales del proceso**: es aparato judicial, no leyenda.
- URL: PENDIENTE de localizar digitalizado (se busca en esta ronda).
- Sirve a: `el-enigmatico-abogado`.

### 3. Ibáñez, Pedro María. *Crónicas de Bogotá*. Bogotá: A B C, 1951. Tomos I-III (1.ª ed. 1913-1923). Historia urbana.

- Tomo I — https://babel.banrepcultural.org/digital/collection/p17054coll10/id/2400/ (261 pp., PDF con capa de texto)
- Tomo II — https://babel.banrepcultural.org/digital/collection/p17054coll10/id/2396/ (231 pp., PDF con capa de texto)
- Contiene y verificado por búsqueda en el texto: el **Mono de la Pila** (t. I, la
  estatua y sus ornamentaciones; t. II, «popularmente llamada El Mono de la Pila, para
  el artista representaba a San Juan»); el **Puente del Común** (8 menciones en el t.
  II); Monserrate y Guadalupe (18 y 25 menciones en el t. I).
- Sirve a: `el-mono-de-la-pila`, `el-diablo-del-puente-del-comun`,
  `la-leyenda-del-santuario-de-monserrate`, `el-venado-de-oro`.
- Limitación: historia de la ciudad, no recopilación de leyendas; da el hecho y el
  edificio, rara vez el relato sobrenatural.

---

## SEGUNDO ESCALÓN — el territorio y su historia

### 4. Rosa, Moisés de la. *Calles de Santafé de Bogotá: homenaje en su IV centenario, 1938*. Bogotá: Ediciones del Concejo, 1938. 367 pp. Topografía histórica calle por calle.

- URL: https://babel.banrepcultural.org/digital/collection/p17054coll10/id/2554/
- **La pieza de territorio más útil del ciclo.** Va barrio por barrio y calle por calle:
  Catedral (p. 33), Príncipe (67), San Jorge (117), Palacio (137), **Las Nieves oriental
  (163) y occidental (211)**, San Victorino (245), Santa Bárbara.
- Verificado en el texto: la **Calle de Russi** (así llamada popularmente desde el
  fusilamiento del 17 de julio de 1851 frente a las gradas del Capitolio) y la casa de
  Russi en la Calle de San Bruno; la **fuente del Mono de la Pila** trasladada de la
  Plaza Mayor; la **mula herrada** como emblema de la Santafé antigua ya en el pórtico;
  36 menciones de La Candelaria; 7 del Señor Caído.
- Sirve a: `el-enigmatico-abogado`, `la-mula-herrada` (barrio de Las Nieves),
  `los-fantasmas-de-la-candelaria`, `el-mono-de-la-pila`.
- Limitación: 1938, erudición de concejo municipal; documenta el lugar y el nombre, no
  la circulación del relato.

### 5. Talleres de Crónicas del Agua. *Memorias del agua en Bogotá: antología*. Bogotá: Alcaldía Mayor de Bogotá, 2011. Memoria oral compilada.

- URL: https://babel.banrepcultural.org/digital/collection/p17054coll10/id/2155/
- Índice verificado: «El agua en la historia bogotana», «Bogotá, zona húmeda
  patrimonial», «**La pila**», «Batallas por la cuenca del Tunjuelo», «El agua en la
  historia de Las Ferias».
- Verificado: el Mono de la Pila como «depositario de quejas y reclamos durante años».
- Sirve a: `el-mono-de-la-pila`.
- Limitación: memoria comunitaria de taller, sin aparato crítico; fecha 2011.

### 6. Mena Castro, Valentina. «El abogado de la criminalidad: José Raimundo Russi». *Lucem*, n.º 1, enero-junio 2020. Programa de Historia, FCSH, Universidad Externado de Colombia. Artículo de microhistoria.

- URL (PDF abierto, verificado y leído entero): https://sociales.uexternado.edu.co/wp-content/uploads/sites/11/2020/06/El-abogado-de-la-criminalidad.pdf
- **Nota de acceso**: WebFetch no lo convierte (devuelve «PDF corrupto»); el fichero baja
  bien y `pdftotext` lo extrae sin pérdida. No está caído.
- Qué contiene: reconstruye el último año de Russi (1850-1851) a partir de **fuentes
  primarias** —el juicio de Russi y la banda del Molino del Cubo, el escrito de defensa y
  las notas de prensa—, y declara explícitamente que su propósito es «reanudar la
  narración de José María Cordovez Moure» y explicarla «no solamente como una
  reminiscencia, sino como un hecho histórico». Sitúa el terror de Santafé entre
  septiembre de 1850 y junio de 1851 bajo Ignacio Rodríguez y la banda del Molino del
  Cubo; el asalto a San Agustín bajo el padre Salavarrieta, hermano de Policarpa; y
  cierra conectando el caso con el fantasma de Russi en La Candelaria.
- Cita la edición **BBCC 2015** (*Reminiscencias escogidas de Santafé*, Biblioteca Básica
  de Cultura Colombiana, Ministerio de Cultura / Biblioteca Nacional).
- Sirve a: `el-enigmatico-abogado` (clave), `los-fantasmas-de-la-candelaria`.
- Limitación: artículo de estudiante de pregrado en revista de programa; tiene aparato
  pero no revisión por pares equivalente a una revista indexada.

### 7. Monsalve Gaitán, Stella. *Fantasmas de ciudad / Fantasmas en La Candelaria*. Bogotá: Alcaldía Mayor de Bogotá, Secretaría General, Archivo de Bogotá, 2008. Colección «Memorias de la Ciudad». 73 pp. Recopilación de tradición oral de barrio.

- URL del registro: https://repositorio.biblored.gov.co/items/8bb2dbdc-15de-44f9-b5cd-ac1568fa2bc8
- URL del PDF (descargado y leído): https://repositorio.biblored.gov.co/server/api/core/bitstreams/f5763725-1882-4b6e-a17a-1710a7497891/content
- Espejo en la Biblioteca Digital de Bogotá: https://www.bibliotecadigitaldebogota.gov.co/resources/3678607/
- **Índice verificado con paginación**: Baltazar 24 · Bar Serenata 28 · **La Mula Herrada
  30** · El Contador 32 · El Estudiante 34 · El Gordo 37 · El Marrano 39 · El milagro en
  La Candelaria 41 · El padre Ricardo 45 · El Virrey 47 · **La Calle del Fantasma 49** ·
  La expulsión 51 · **La pandilla 1851 53** · Las labores del hogar 57 · Manuela 59 ·
  Replay en La Candelaria 61 · Rito satánico… (sigue).
- Contiene además la ficha **«Es el fantasma de Russi»**, con la descripción del aparecido
  (pantalón negro, camisa blanca, capa negra, sombrero de copa, la cara ensangrentada), la
  dirección de la casa (carrera 2.ª n.º 10-43) y la nota de que el **cráneo baleado de
  Russi** se conserva en un museo.
- Sirve a: `los-fantasmas-de-la-candelaria` (clave), `el-enigmatico-abogado`,
  `la-mula-herrada`.
- **Contradicción que hay que llevar a `versiones`, no fundir**: Monsalve da a Russi
  nacido en 1814 en Guatoque (hoy Santa Sofía, Boyacá) y fusilado **el 16 de julio de
  1861**. Cordovez, Ibáñez y Moisés de la Rosa dan el fusilamiento el **17 de julio de
  1851**, en la Plaza de Bolívar frente a las gradas del Capitolio. La fecha de Monsalve
  es errónea por diez años y hay que decirlo con nombre.
- Limitación: divulgación de tradición oral recogida por una guía de barrio, sin aparato;
  vale como registro de **lo que se cuenta hoy en La Candelaria**, no como prueba de hecho.

### 8. Bayona Posada, Jorge. *Los fantasmas de Santafé*. Fecha y editorial sin confirmar. Recopilación de espantos bogotanos.

- **Citado y transcrito literalmente por Monsalve (2008)** para la Mula Herrada: «en
  avanzadas horas de la noche se oía el galope de una cabalgadura que iba de las
  inmediaciones de la calle de Piedra Ancha (calle 6, entre carreras 5 y 6), a un sitio al
  parecer cercano a la iglesia de Las Nieves […] una mula sin jinete que corría por el
  centro de la vía, arrancando chispas a las piedras del pavimento con el choque de sus
  herraduras». Y el desenlace: la mujer «muy conocida anteriormente en la ciudad por su
  oficio celestinesco», hallada muerta en una ramada tras la ermita de Belén.
- **No se ha encontrado ejemplar digitalizado ni ficha institucional.** Va a LO QUE NO
  EXISTE. Hoy sólo se puede citar **a través de** Monsalve, y así hay que declararlo.
- Sirve a: `la-mula-herrada`.

### 9. Ocampo López, Javier. *Mitos y leyendas bogotanas*. Bogotá: Plaza & Janés, 2001. 231 pp. Recopilación académica.

- **Es, con Cordovez, el recopilador que sostiene el ciclo nocturno**, y **no aparece en
  ninguno de los dos `sources.mjs`**. Cubre los mitos chibchas, las leyendas de Bogotá y
  las de los pueblos y haciendas de la Sabana (Bosa, Engativá, Fontibón, Suba, Usaquén,
  Usme, Soacha, Mosquera, Cota, Funza, Chía, La Calera). Incluye un apartado «Algunos
  fantasmas y espantos de casas y calles bogotanas» (p. 209) y, según los índices de
  librería, **«El venado de oro» p. 101 y «La mula herrada» p. 139**.
- **Sin URL abierta verificada.** Los únicos enlaces son catálogos (Google Books, Koha de
  la Universidad La Gran Colombia) y librerías, todos fuera por la regla 4.2. **Pendiente**:
  buscarlo en el catálogo del CENDOC del IDPC y en la Biblioteca Digital de Bogotá.
- Sirve a (potencialmente todas las del nocturno): `el-venado-de-oro`, `la-mula-herrada`,
  `la-bruja-del-tranvia`, `los-fantasmas-de-la-candelaria`, `el-diablo-del-puente-del-comun`.
- Limitación: reelaboración literaria de un historiador; Ocampo raramente da narrador,
  vereda o fecha de recolección.

### 10. Villa Posse, Eugenia (investigación y compilación). *Mitos y leyendas de Colombia*, tomo II. Quito: Editorial IADAP, colección «Integración cultural», 1.ª ed., agosto de 1993, 1.000 ejemplares. ISBN 9978-60-003-5 / 9978-60-005-1 (t. II).

- URL viva y **descargable entera** (1,02 MB de texto extraído, leída): https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620
- **Aviso de host**: `www.flacso.edu.ec` **no es** ninguno de los dos dominios que el
  encargo declara fuera de alcance (`www.flacso.org.ec`, NXDOMAIN, y
  `biblio.flacsoandes.edu.ec`, que pide confirmar humanidad). Éste responde 200 y
  entrega el PDF completo a `curl`.
- **HALLAZGO NEGATIVO, Y ES EL MÁS IMPORTANTE DE ESTA RONDA**: este tomo **no contiene
  ninguna de las dieciséis**. Búsqueda en el texto completo: «mula herrada» 0,
  «venado de oro» 0, «Mono de la Pila» 0, «Russi» 0, «Puente del Común» 0,
  «Monserrate» 0, «tranvía» 0. «Bogotá» aparece 10 veces en todo el volumen, ninguna
  como escenario de un relato. Los 35 aciertos de «Candelaria» y los 29 de «monja»
  pertenecen al material conventual cartagenero.
- **Y sin embargo esta URL está citada en los dos `sources.mjs`**, memoria y nocturno.
  Es una fuente viva que no sostiene nada. Va a CAÍDAS Y BASURA.
- Pendiente: comprobar el **tomo I** de la misma colección, por si allí sí hay material
  cundiboyacense.

---

## TERCER ESCALÓN — la prensa y los medios, con condiciones

### 11. Correa Restrepo, Juan Santiago; Jimeno León, Santiago; Villamizar Bacca, Marianela. «El tranvía de Bogotá, 1882-1951». *Revista de Economía Institucional*, vol. 19, n.º 36, 2017, pp. 203-229. Artículo académico.

- URL (PDF abierto, 27 pp., descargado y leído): http://www.scielo.org.co/pdf/rei/v19n36/0124-5996-rei-19-36-00203.pdf
- **Aviso**: `www.scielo.org.co` con `https` y la ruta `scielo.php?pid=...` que usa el
  `sources.mjs` actual **no conecta** (ECONNREFUSED a 168.176.28.57). La ruta
  `/pdf/...` sí. No está caído: está mal citado.
- Sirve a: `el-bobo-del-tranvia`, `la-bruja-del-tranvia` (el escenario y su
  cronología empresarial).
- Limitación: historia económica y empresarial; no toca leyendas.

### 12. Baquero Mora, Juan Ignacio. *Tranvía municipal de Bogotá. Desarrollo y transición al sistema de buses municipal, 1884-1951*. Tesis de Maestría en Historia de Colombia, dirigida por Fabio Zambrano Pantoja. Universidad Nacional de Colombia, Facultad de Ciencias Humanas, Departamento de Historia, Bogotá, 2009.

- URL (PDF abierto, descargado y leído, ~392.000 caracteres): https://bffrepositorio.unal.edu.co/server/api/core/bitstreams/ca64573f-6e3d-4e0f-990c-831bbfc6c4df/content
- **La mejor pieza de territorio para las dos fichas del tranvía**, muy por encima de
  cualquier nota de prensa: tranvía de mulas (coches de cinco personas, dieciséis
  unidades iniciales), electrificación, líneas de Chapinero, la quema de tranvías el
  **9 de abril de 1948** y el desmonte hasta 1951.
- Sirve a: `el-bobo-del-tranvia`, `la-bruja-del-tranvia`.
- Limitación: tesis de maestría; su objeto es la empresa y la ciudad, no el relato.

### 13. Florido Caicedo, Carlos Arturo. «El anfiteatro de la Facultad de Medicina. Una visita guiada». *Morfolia*, vol. 7, n.º 2, 2015. Universidad Nacional de Colombia. (Primera versión en *Revista Contestarte* n.º 15.)

- URL (PDF abierto, leído): https://revistas.unal.edu.co/index.php/morfolia/article/download/52871/52538/259709
- **Aviso**: WebFetch lo declara ilegible; el fichero baja bien y `pdftotext` lo extrae.
- Qué contiene: la ceremonia por la que el estudiante de anatomía iba con una carta al
  administrador del Cementerio Central a que le entregaran **un esqueleto**, sacado de
  fosa común de NN o de contratos vencidos, y el proceso de hervido en agua de cal.
  Es el sustrato real de la escena que la ficha llama «morgue literaria».
- Sirve a: `los-esqueletos-caminantes`.
- Limitación: ensayo de opinión de un profesor, en primera persona; no documenta ningún
  relato de aparecidos.

### 14. Secretaría de Cultura, Recreación y Deporte de Bogotá — sección «Bogotanitos · Cuenta la leyenda».

- Fichas verificadas vivas: el-bobo-del-tranvia, el-loco-arias, el-mono-de-la-pila,
  la-loca-margarita, el-diablo-en-el-puente-del-comun, leyenda-del-santuario-de-monserrate
  (dominio `culturarecreacionydeporte.gov.co`), y **`el-venado-de-oro`** en el subdominio
  archivado: https://ant.culturarecreacionydeporte.gov.co/es/node/1196
- Limitación grave y común a todas: **son versiones de divulgación infantil, sin autor,
  sin fecha y sin bibliografía.** Sirven para fechar qué versión difunde hoy el Distrito;
  no son registro. Ninguna puede ir de fuente clave.

### 15. López Orozco, Asdrúbal. *Mitos y leyendas de Bogotá*. Bogotá: Editorial Educativa Kingkolor, 2008. Reelaboración literaria ilustrada.

- **Es el recopilador real de cuatro fichas del nocturno** y el módulo lo sabe: la
  `evidence.mjs` del ciclo dice que «El título exacto aparece como capítulo de *Mitos y
  leyendas de Bogotá*, obra literaria de Asdrúbal López Orozco publicada en 2008», y el
  `summary` del pool afirma que identifica como capítulos **La monja y el taxista, Los
  esqueletos caminantes, El venado de oro y El toro en el ascensor**.
- **Y sin embargo la única URL con que se cita son dos fichas de catálogo Koha**
  (`bibliotecasfya.kohalatino.info`, `catalogo.uniajc.edu.co`), que es exactamente el
  caso que la regla 4.2 prohíbe: responden 200 y no contienen el relato.
- **Sin ejemplar abierto.** Del mismo autor sí hay *Mitos y leyendas de Colombia* en
  Internet Archive (`archive.org/details/mitosyleyendasde0000lope`, préstamo, no texto
  abierto), que **no es el mismo libro**.
- Limitación cuando se consiga: es literatura de divulgación infantil ilustrada, no
  recolección con narrador ni vereda. Fija el texto que circula, no su origen.

### 16. Rodríguez, Héctor Mario (entrevistado). «Un toro en el ascensor», en entrevista de la revista *Tres*, n.º 42, Montevideo, viernes 15 de noviembre de 1996, p. 57.

- URL (PDF del número completo en Anáforas, Universidad de la República; descargado y leído): https://anaforas.fic.edu.uy/jspui/bitstream/123456789/11701/1/Tres%20n42%28ab%29.pdf
- **Es el registro más antiguo y más atribuible que existe hoy del toro en el ascensor**,
  y estaba ya en el módulo sin que se le reconociera ese peso. Texto literal del
  entrevistado, periodista colombiano: «En 1985 yo trabajaba para la radio Caracol en
  Bogotá. Y muy cerca de la radio, un camión que transportaba seis toros de lidia volcó
  en pleno centro de Bogotá. Los seis toros salieron corriendo por una de las principales
  avenidas […] Asustado, un toro entró a un edificio de oficinas. En ese momento se
  abrieron las puertas del ascensor y el toro entró al ascensor, matando con sus cuernos
  a una persona que iba a salir.»
- **Fija fecha (1985), lugar (centro de Bogotá, cerca de Caracol Radio) y testigo con
  nombre.** Contradice de plano la versión del edificio Henry Faux: hay que ponerlas
  frente a frente en `versiones`, no fundirlas.
- Limitación: recuerdo de quince años después, en una entrevista sobre otro tema
  (narcotráfico y lavado), publicado en Uruguay; el entrevistado cuenta la escena como
  ejemplo de lo «macondiano», no como reportaje.

### 17. León, Lizeth. «Muerte fuera del ruedo». *Cucharita de Palo*, crónicas ilustradas, 2015. Crónica de investigación sobre un rumor urbano.

- URL: https://cucharitadepalo.co/cronicasilustradas/muerte-fuera-del-ruedo/
- **403 con cuerpo de 75 KB = muro antibot, no caída. PENDIENTE DE COMPROBAR EN
  NAVEGADOR.** Según el `summary` del propio módulo, contrasta testigos, edificios,
  décadas, libros y prensa, y **localiza una nota de *El Espectador*** sobre una res que
  entró a un edificio y corneó a un hombre. Si esa nota existe y está fechada, es el
  primer escalón de la ficha.
- Sirve a: `el-toro-en-el-ascensor`.

---

## LA PLANTILLA COMPARTIDA: DÓNDE ESTÁ Y CUÁNTO PESA

El encargo apuntaba a `definition-helpers.mjs`. **En estos dos ciclos no existe ese
fichero**: la plantilla vive en `build-editorial-myth.mjs`, en dos constantes,
`sharedHistory` y `sharedVersions`, que se concatenan a cada ficha
(`historia = historyCore + "\n\n" + sharedHistory`).

| ciclo | `sharedHistory` | `sharedVersions` |
|---|---|---|
| memoria | 277 palabras, idénticas en las 8 | 190 palabras, idénticas en las 8 |
| nocturno | 274 palabras, idénticas en las 8 | 256 palabras, idénticas en las 8 |

Lo que eso significa medido sobre las fichas reales de memoria: `historia` va de 325 a
335 palabras, de las cuales **277 son las mismas en las ocho** — entre el **83 % y el
85 % del campo**. `versiones` va de 238 a 247, de las cuales 190 son compartidas:
**77-80 %**. Lo propio de cada ficha son unas 55 palabras de `historyCore` y unas 50 de
`versionCore`.

El 40-42 % de oraciones repetidas del diagnóstico mide el documento entero; **dentro de
los dos campos donde el brief exige que ninguna oración de siete palabras se repita, la
repetición es del 80 %**. No es un retoque: hay que borrar las dos constantes y escribir
dieciséis registros distintos.

**Además, la plantilla contiene afirmaciones de procedencia que no están en ninguna
fuente publicada y que sí son pistas buenas** — el `sharedVersions` del nocturno declara
que la Bruja del Tranvía «procede de una carta ficticia publicada en 2004», que los
Esqueletos Caminantes «se atribuyen a una elaboración literaria de 2008», y que el Toro
del Ascensor «conserva la inestabilidad de su fecha y edificio». Eso es conocimiento del
ciclo enterrado en el constructor, no en las fuentes. Al desmontar la plantilla hay que
rescatarlo, no tirarlo.

**Y hay una decisión ya tomada y escondida ahí**: el `sharedHistory` de memoria dice que
«El diablo del Puente del Común pasa a Andina > Varios > Mestizo porque el inmueble y el
relato se localizan en Chía, Cundinamarca». Es decir, **la ficha ya no es de Bogotá** y
sigue contándose en el ciclo de Bogotá.

---

## REPARTO REAL

`Reg.` = escalón 1 (el registro que fija el relato), con la obra concreta.
Confianza: **alta** = capítulo o página identificados y leídos · **media** = obra
identificada, falta abrir la página · **baja** = no hay registro, sólo divulgación.

| # | slug | ciclo | de qué obra sale | confianza |
|---|---|---|---|---|
| 1 | `el-enigmatico-abogado` | memoria | **Cordovez, Serie primera: «Juicio y ejecución de José Raimundo Russi y sus compañeros», pp. 178-202**; y, del mismo volumen, «Asalto al convento de San Agustín por la Compañía de Russi» 123-130 y «Asesinato de Manuel Ferro» 154-177. Más Ibáñez 1894 (pp. 113 y 158, vía De la Rosa), Mena Castro 2020, Monsalve 2008, De la Rosa 1938 (Calle de Russi) | **alta** |
| 2 | `el-hombre-del-farol` | nocturno | **Cordovez, Serie cuarta: «La conspiración del 25 de septiembre de 1828», pp. 1-180, y el farol en la p. 56**; el conjurado Juan Miguel Acebedo, 20 años, de Bogotá | **alta** para el farol y el hecho; **baja** para el «Manuelito» acusado, que no aparece en el registro |
| 3 | `los-fantasmas-de-la-candelaria` | memoria | **Monsalve Gaitán 2008** (Archivo de Bogotá), índice completo y paginado; más Mena Castro 2020 para Russi | **alta** |
| 4 | `el-mono-de-la-pila` | memoria | **Ibáñez, *Crónicas de Bogotá* t. I y t. II** (la estatua y el nombre popular); **De la Rosa 1938** (el traslado desde la Plaza Mayor y la Calle de la Cajita del Agua); *Memorias del agua en Bogotá* 2011, cap. «La pila» | **alta** |
| 5 | `la-mula-herrada` | nocturno | **Cordovez, Serie tercera** (mención literal dentro de las costumbres coloniales); **Bayona Posada, *Los fantasmas de Santafé*, transcrito por Monsalve 2008, p. 30**; Ocampo López 2001, p. 139; De la Rosa 1938, barrio de Las Nieves pp. 163 y 211 | **media-alta** (el texto de Bayona sólo se tiene de segunda mano) |
| 6 | `el-diablo-del-puente-del-comun` | memoria | **Javier Ocampo López, *Leyendas populares colombianas*** — así lo declara el propio PDF que hoy cita el módulo. Territorio: Ibáñez t. II (8 menciones del puente), obra de 1792 bajo el virrey Ezpeleta y el ingeniero Domingo Esquiaqui | **media** (la obra está identificada; falta ejemplar abierto) |
| 7 | `el-venado-de-oro` | nocturno | López Orozco 2008 (capítulo, sin ejemplar abierto); Ocampo López 2001, p. 101; SCRD (archivado) | **media-baja** |
| 8 | `la-leyenda-del-santuario-de-monserrate` | memoria | Encargo del 15 de febrero de 1656 al escultor **Pedro de Lugo Albarracín** por el padre Bernardino de Rojas, 105 patacones (libros capitulares, *Archivum Capitulare Archidioceseos Bogotensis*); Ibáñez t. I (18 menciones); De la Rosa 1938 (7) | **media** (el dato de encargo está bien documentado; el relato del peso y el cabello, no) |
| 9 | `el-bobo-del-tranvia` | memoria | **No hay registro.** Territorio sólido: Baquero Mora 2009 y Correa et al. 2017. El nombre «Antonín» sólo aparece en prensa de 2007 en adelante | **baja** |
| 10 | `el-loco-arias` | memoria | **No hay registro.** Sólo divulgación institucional y prensa reciente | **baja** |
| 11 | `la-loca-margarita` | memoria | **No hay registro de época localizado.** Sí hay datos biográficos estables y convergentes: **Margarita Villaquirá Aya, Fusagasugá 1860 – Bogotá, enero de 1942**, 82 años, neumonía, sepelio pagado por el Partido Liberal, Cementerio Central; rumba criolla «La Loca Margarita» de **Milcíades Garavito** | **baja** para el relato, **media** para la biografía |
| 12 | `el-toro-en-el-ascensor` | nocturno | **Sí hay registro, y es mejor de lo que el módulo cree**: **Héctor Mario Rodríguez en *Tres* n.º 42, Montevideo, 15-XI-1996, p. 57** — testigo con nombre, fecha (1985), lugar (centro de Bogotá, junto a Caracol Radio) y mecánica completa. Más López Orozco 2008 (capítulo) y León 2015 (que dice haber hallado la nota de *El Espectador*). Contra eso, la columna de 2017 sitúa el hecho en el **Edificio Henry Faux** (carrera 7.ª con avenida Jiménez, de Santiago Esteban de la Mora) | **media** — el hecho está datado y atribuido; el edificio, en disputa |
| 13 | `la-bruja-del-tranvia` | nocturno | **No hay registro consultable.** El constructor del módulo declara que el relato procede de **una carta ficticia publicada en 2004**, «mecanografiada, de Ezequiel, incluida en un libro que declara usar documentos imaginarios»; ese libro **no está nombrado en ninguna parte del módulo**. Identificarlo es el primer trabajo de esta ficha | **baja** |
| 14 | `la-monja-de-las-rosas` | nocturno | **No hay registro.** Quinta de Bolívar documentadísima como casa; la monja, no | **baja** |
| 15 | `la-monja-vidente-y-el-taxista` | nocturno | **Registro identificado pero no consultable**: capítulo de López Orozco 2008. Leyenda urbana migratoria contemporánea | **baja** |
| 16 | `los-esqueletos-caminantes` | nocturno | **Registro identificado pero no consultable**: capítulo de López Orozco 2008. Sustrato real documentado: Florido Caicedo 2015 (esqueletos de NN entregados a estudiantes de anatomía) | **baja** |

### Cuántas están en Cordovez Moure, y en qué capítulo

**Tres de las dieciséis, y ninguna más.**

1. `el-enigmatico-abogado` — **Serie primera, «Juicio y ejecución de José Raimundo Russi
   y sus compañeros», pp. 178-202**, dentro del bloque «Crímenes célebres» que abre en la
   p. 112. Con dos capítulos satélite en el mismo volumen: «Asalto al convento de San
   Agustín por la Compañía de Russi», pp. 123-130, y «Asesinato de Manuel Ferro»,
   pp. 154-177. Es la ficha mejor sostenida del ciclo con diferencia.
2. `el-hombre-del-farol` — **Serie cuarta, «La conspiración del 25 de septiembre de
   1828», pp. 1-180**; el farol concreto, en la p. 56.
3. `la-mula-herrada` — **Serie tercera**, sin capítulo propio: una frase dentro del
   catálogo de habladurías de atrio de la Santafé colonial.

**No están en Cordovez**: el Mono de la Pila, el Puente del Común, Monserrate, el Venado
de Oro, los fantasmas de La Candelaria y las diez restantes. Conviene decirlo porque la
tentación de este ciclo es citar a Cordovez en las dieciséis.

---

## NARRADORES Y FECHAS

En este corpus casi nunca hay narrador. Lo que sí hay —y vale igual— es **la fecha de
primera circulación impresa** y la fecha del hecho.

| ficha | narrador | fecha del hecho | primera circulación impresa localizada |
|---|---|---|---|
| `el-enigmatico-abogado` | ninguno nombrado; Cordovez escribe como contemporáneo | crímenes IX-1850 a VI-1851; **fusilamiento el 17 de julio de 1851**, Plaza de Bolívar, frente a las gradas del Capitolio | **Ibáñez, 1894** (sobre los originales del proceso); Cordovez, Serie primera |
| `el-hombre-del-farol` | Cordovez cita relaciones de Florentino González y la carta de Manuela Sáenz | **noche del 25 de septiembre de 1828** | Cordovez, **Serie cuarta, 1900** |
| `la-mula-herrada` | Bayona Posada no nombra informante | Santafé colonial; el recorrido va de la calle de Piedra Ancha (calle 6 entre carreras 5 y 6) a las inmediaciones de la iglesia de Las Nieves | mención en Cordovez, Serie tercera; texto desarrollado en Bayona Posada, transcrito en 2008 |
| `los-fantasmas-de-la-candelaria` | **Stella Monsalve Gaitán**, guía del barrio, recoge de vecinos; es lo más cercano a un narrador de todo el ciclo | siglos XVI-XX | **2008**, Archivo de Bogotá |
| `el-mono-de-la-pila` | ninguno | fuente de la Plaza Mayor, luego trasladada | Ibáñez, *Crónicas de Bogotá* (1.ª ed. 1913-1923; ed. consultada A B C, 1951); **De la Rosa, 1938** |
| `el-diablo-del-puente-del-comun` | ninguno | puente de 1792, virrey Ezpeleta, ingeniero Domingo Esquiaqui | Ocampo López, *Leyendas populares colombianas* |
| `la-leyenda-del-santuario-de-monserrate` | ninguno | **encargo del 15 de febrero de 1656**, 105 patacones, escultor Pedro de Lugo Albarracín, por encargo del padre Bernardino de Rojas | libros capitulares de la catedral |
| `la-loca-margarita` | ninguno | **Fusagasugá, 1860 – Bogotá, enero de 1942** | canción de Milcíades Garavito; prensa de los años 30-40 **sin localizar aún** |
| `el-bobo-del-tranvia`, `el-loco-arias` | ninguno | años 20-40; tranvía en servicio hasta 1951 | El Tiempo, **6 de agosto de 2007** — es decir, tardísimo |
| `el-toro-en-el-ascensor` | ninguno | sin fecha | columna de **27 de diciembre de 2017** |
| `la-bruja-del-tranvia`, `la-monja-de-las-rosas`, `la-monja-vidente-y-el-taxista`, `los-esqueletos-caminantes`, `el-venado-de-oro` | ninguno | sin fecha | sin primera circulación impresa localizada |

---

## CAÍDAS Y BASURA

Se comprobaron **las 70 URL** de los dos `sources.mjs` con navegador simulado, siguiendo
redirecciones, con 30 s de tiempo límite.

### Caídas de verdad — retirar

| URL | qué pasa | dónde está |
|---|---|---|
| `https://medicinalegal.gov.co/web/guest/que-es-el-rnd` | no conecta (000) | nocturno |
| `https://patrimoniodocumental.arquibogota.org.co/uploads/1/5/2/0/152021795/la_iglesia_1985-_0001_sch_compressed-5.pdf` | no conecta (000) | nocturno |
| `https://www.scielo.org.co/scielo.php?pid=S1900-54072006000100016&script=sci_arttext` | no conecta (000, ECONNREFUSED). **Ojo: el host sí funciona por la ruta `/pdf/`** — el artículo puede recuperarse, pero no con esta URL | memoria |
| `https://cienciassociales.uniandes.edu.co/opca/en/articulo/vaya-a-quejarse-al-mono-de-la-pila-…` | **404**. Era la mejor pieza sobre el Mono de la Pila del módulo y ya no existe; hay que buscar si OPCA la reubicó | memoria |
| `https://www.bogotavive.com/mitos-y-leyendas/leyenda-la-monja-y-el-taxista` | **500** | nocturno |
| `https://centrodocumentacion.idpc.gov.co/…/museoacielo.pdf` | **502** | memoria |
| `https://centrodocumentacion.idpc.gov.co/…/bogotalogotomoII.pdf` | **502** | nocturno |
| `https://www.upo.es/revistas/index.php/atrio/article/download/557/391/999` | **503** | memoria |

### Pendientes de comprobar en navegador (403 a cliente de línea de comandos — NO declarar muertas)

| URL | qué pasa |
|---|---|
| `https://cucharitadepalo.co/cronicasilustradas/muerte-fuera-del-ruedo/` | 403 con cuerpo de 75 KB: es un muro antibot, no un 404 |
| `https://mitoyleyenda.com/leyenda/la-mula-herrada/` | 403 idéntico (75.193 bytes exactos: el mismo validador). **Aun así hay que retirarla por ser agregador sin autoría**, no por caída |
| `https://babel.banrepcultural.org/…` (las cinco nuevas de esta bibliografía) | el visor da 403 y el certificado no valida, pero `curl -k` baja el PDF entero. **Vivas.** |

### Vivas pero basura — retirar por regla, no por caída

| URL | por qué |
|---|---|
| `https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620` (Villa Posse t. II) | **citada en los dos ciclos y no contiene ninguna de las 16.** Verificado sobre el texto completo. Es el peor caso: viva, prestigiosa e irrelevante |
| `https://openlibrary.org/books/OL26208262M/…` | catálogo (regla 4.2) |
| `https://biblioteca.apps-mosquera.gov.co/cgi-bin/koha/opac-detail.pl?biblionumber=11108` | catálogo Koha |
| `https://bibliotecasfya.kohalatino.info/cgi-bin/koha/opac-detail.pl?biblionumber=45532` | catálogo Koha — **y es la única URL con que se cita a López Orozco 2008 en cuatro fichas** |
| `https://catalogo.uniajc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=4761…` | catálogo Koha |
| `https://upload.wikimedia.org/wikipedia/commons/3/31/PUENTE_DEL_COMUN.pdf` | subida de usuario a Commons; **su primera línea dice «Sacado del libro *Leyendas Populares Colombianas* de Javier Ocampo López»**. Retirar la URL y citar el libro |
| `https://antiguatulua.blogspot.com/2020/02/la-monja-y-el-taxista.html` | blog; además **es de Tuluá**, no de Bogotá |
| `https://mitosyleyendasdebogota.blogspot.com/` | blog, portada sin permalink |
| `https://elrinconcolombiano.com/leyenda-de-la-bruja-del-tranvia/` | agregador |
| `https://colombiavisible.com/7-lugares-con-historias-paranormales-…` | listicle de turismo |
| `https://colombia.com/...` y similares | agregador |
| `https://www.museonacional.gov.co/exposiciones/lists/listaexposiciones/allitems.aspx?PageFirstRow=21991&…` | vista paginada de SharePoint que exige scripts; responde 200 y no contiene nada |
| `https://ant.idartes.gov.co/es/agenda/presentacion-de-danza/el-espectro-del-dr-russi` | anuncio de una función de danza; no documenta el relato |
| `https://kimera.com/data/redlocal/…/Memorias_infantiles_BBCC_…pdf` | espejo no institucional de la BBCC; si la obra vale, se cita por Banrep o por la Biblioteca Nacional |
| `https://archive.org/stream/CuentosDeEspantosYOtrosSeresFantasticosDelFolclorColombiano..compressed/…_djvu.txt` | el ítem existe (Universidad Autónoma de Colombia, 2004) pero se cita por su OCR en bruto; hay que citar el ítem, no el `_djvu.txt`, y comprobar que contiene la ficha |
| las dos fichas de `medicinalegal.gov.co` sobre NN y RND | no dicen nada de ningún relato |

### Y una advertencia de circularidad

Buscando `la-monja-de-las-rosas` y `el-enigmatico-abogado`, **mitosdecolombia.com aparece
entre los primeros resultados de Google**. En esas dos fichas somos parte del corpus que
circula. No se usa, y se anota en `dudas`.

---

## LO QUE NO EXISTE

Buscado y no encontrado, con lo que se buscó:

1. **Ibáñez, *Causa y ejecución de José Raimundo Russi* (1894), digitalizado.** Buscado
   en Banrep (babel), Biblioteca Digital de Bogotá, repositorios universitarios y
   búsqueda abierta. Sólo se recupera **a través de** Moisés de la Rosa (1938), que lo
   pagina. Es el hueco más caro del ciclo: es la única fuente judicial de primera mano.
2. **Bayona Posada, *Los fantasmas de Santafé*.** Ni ejemplar digitalizado, ni ficha
   institucional, ni año ni editorial confirmados. Sólo existe hoy en la transcripción
   de Monsalve (2008).
3. **Ocampo López, *Mitos y leyendas bogotanas* (Plaza & Janés, 2001), en abierto.**
   Todo lo que devuelve la red son catálogos y librerías, ambos fuera por la regla 4.2.
   Lo mismo con *Leyendas populares colombianas*.
3 bis. **López Orozco, *Mitos y leyendas de Bogotá* (Kingkolor, 2008), en abierto.** Es
   el libro del que salen cuatro fichas del nocturno y **no hay un solo ejemplar
   consultable**: sólo fichas Koha. En Internet Archive está su *Mitos y leyendas de
   Colombia*, que es otro libro y sólo en préstamo. Mientras no aparezca, cuatro fichas
   del nocturno citan como registro algo que nadie del equipo ha abierto.
3 ter. **El libro de 2004 con la carta ficticia de Ezequiel** (la Bruja del Tranvía). El
   propio módulo lo describe —«un libro que declara usar documentos imaginarios»— y no lo
   nombra. No se ha podido identificar.
4. **Prensa bogotana de época sobre los «cuatro locos».** Se buscó en la hemeroteca
   digital y en los archivos de *El Tiempo* y *El Espectador*. Lo más antiguo que se
   recupera son dos piezas de **El Tiempo del 6 de agosto de 2007** (sin firma
   individual, «Redacción El Tiempo») que declaran apoyarse en «relatos de la época» sin
   citar ninguno. **Para Margarita, muerta en enero de 1942, tiene que existir una
   esquela o una nota; no está indexada en abierto.** Es el trabajo pendiente más
   productivo de la ronda: requiere la hemeroteca de la Biblioteca Nacional con
   navegador, no `curl`.
5. **La nota de prensa del toro.** El suceso **sí está datado** por Héctor Mario
   Rodríguez (1985, *Tres* n.º 42, 1996), y Lizeth León dice haber localizado una nota de
   *El Espectador*. **Esa nota no se ha podido ver**: el sitio de León devuelve 403 a
   cliente de línea de comandos y el archivo de *El Espectador* de 1985 no está indexado
   en abierto. Queda para navegador.
6. **El texto original de la «carta ficticia» de la Bruja del Tranvía.** No se localizó
   ni autor ni publicación.
7. **Un estudio abierto sobre el Señor Caído** más allá de la ficha de encargo de 1656.
   El santuario tiene historia institucional; la creencia del peso y el cabello, no.
8. **La revista *Cuadernos de Curaduría* del IDPC**, que el encargo daba por existente:
   *Cuadernos de Curaduría* es del **Museo Nacional de Colombia**, no del IDPC. El IDPC
   publica por su sello editorial y su CENDOC, y **hoy el CENDOC devuelve 502** en los
   dos PDF que el módulo ya citaba.
9. **El *Boletín de Historia y Antigüedades* está entero y descifrado; falta barrerlo.**
   `academiahistoria.org.co/boletines/` como página da 404, pero **la ruta del fichero
   funciona**. Patrón verificado de punta a punta:
   - índices por centenas: `/boletines-de-historia-y-antiguedades-no-01-al-no-100/` …
     `/…-no-801-al-no-900/`;
   - página por número: `/bha-01/` … `/bha-200/` … (los números sueltos como `/bha-250/`
     dan «Página no encontrada»: hay que tomar el enlace del índice, porque muchos
     números salieron agrupados, `203-204`, `213-216`, `249-250`…);
   - **el PDF: `https://academiahistoria.org.co/boletines/BHA-<N>.pdf`**.
   Comprobado descargando `BHA-200.pdf`: 2,6 MB, 64 páginas, **con capa de texto**
   («Volumen XVII, Número 200, marzo 1929»). Son unos 876 números desde 1902.
   **Queda por barrer**, y es el sitio con más probabilidad de resolver Monserrate, el
   Puente del Común, el Mono de la Pila y la Margarita de 1942.

---

## DECISIONES

Tres opciones concretas por caso. Nada se aplica hasta que el director responda.

### D1 · `el-hombre-del-farol`: el registro no conoce a «Manuelito»

Cordovez documenta el farol y a quien lo llevó —Juan Miguel Acebedo, conjurado de 20
años—, pero **no hay acusación a un tal Manuelito ni exculpación posterior**, que es lo
que la ficha cuenta hoy.

- **A.** Reescribir la ficha sobre el nudo documentado: el farol de Acebedo en la
  escalera de San Carlos, y dejar «Manuelito» fuera, en `fuera` del acta.
- **B.** Conservar las dos capas y separarlas: el hecho en `mito`, la atribución a
  Manuelito en `versiones`, diciendo quién la sostiene, si aparece alguien.
- **C.** Cambiar el slug a `el-farol-de-la-septembrina` y tratarla como ficha histórica,
  no como espanto.

### D2 · `el-enigmatico-abogado`: la ficha está en el cajón equivocado

Es el relato mejor documentado de los dieciséis y no es una leyenda: es un proceso
judicial de 1851 que **después** generó un aparecido.

- **A.** Dejarla donde está y que `versiones` cargue con la distancia entre el proceso
  (Ibáñez, Cordovez, Mena Castro) y el fantasma (Monsalve).
- **B.** Partirla en dos fichas: el caso Russi en `memoria` y el fantasma de Russi
  dentro de `los-fantasmas-de-la-candelaria`.
- **C.** Moverla entera a `los-fantasmas-de-la-candelaria` y renunciar al caso judicial.

### D3 · La fecha del fusilamiento de Russi

Monsalve (2008) dice **16 de julio de 1861**; Cordovez, Ibáñez y De la Rosa dicen **17 de
julio de 1851**.

- **A.** Adoptar 1851 en `mito` y llevar la discrepancia a `versiones` con nombre y año
  de cada fuente.
- **B.** No dar fecha en `mito` y discutirla entera en `versiones`.
- **C.** Dar las dos en `mito`. *(No recomendada: el brief prohíbe declarar carencia en
  el texto publicado.)*

### D4 · `la-monja-vidente-y-el-taxista`: probablemente no es bogotana

La única fuente del módulo con texto es un blog **de Tuluá**. El motivo —taxista que
lleva a una pasajera que resulta estar en el ataúd— es una leyenda urbana migratoria
internacional.

- **A.** Retitularla y declararla en `versiones` como variante bogotana de un motivo
  extendido, con el paralelo vallecaucano documentado.
- **B.** Sacarla del ciclo Bogotá y moverla a un cajón nacional de leyenda urbana
  contemporánea.
- **C.** Bloquearla hasta encontrar un registro bogotano fechado.

### D5 · Las tres sin registro de ninguna clase: `la-bruja-del-tranvia`, `la-monja-de-las-rosas`, `los-esqueletos-caminantes`

Ninguna pasa hoy el primer escalón del spec §4.1. (`el-toro-en-el-ascensor` sale de esta
lista: Rodríguez 1996 lo data y lo atribuye.)

- **A.** Declararlas **bloqueadas** hasta la pasada de hemeroteca de la Biblioteca
  Nacional y del *Boletín de Historia y Antigüedades*.
- **B.** Reescribirlas apoyadas sólo en el territorio verificado (el tranvía de Baquero
  Mora y Correa et al.; la Quinta de Bolívar; el anfiteatro de Florido Caicedo) y decirlo
  en `dudas`, no en la página.
- **C.** Retirarlas del ciclo y dejarlo en doce fichas.

### D6 · Los tres «locos»: `el-bobo-del-tranvia`, `el-loco-arias`, `la-loca-margarita`

No son mitos: son personas reales de las que hay biografía frágil y ninguna aparición.

- **A.** Mantenerlas como ficha de memoria urbana y reforzar la `historia` con la
  biografía verificable (Margarita Villaquirá Aya, 1860-1942) y el territorio del tranvía.
- **B.** Agruparlas en una sola ficha de ciclo, «los locos de Bogotá», y que cada persona
  sea una sección.
- **C.** Sacarlas del catálogo de mitos: no hay relato sobrenatural en ninguna.

### D7 · `el-diablo-del-puente-del-comun` ya no es de Bogotá, y sigue en Bogotá

El constructor de `bogota-mestizo-memoria` declara que la ficha «pasa a Andina > Varios >
Mestizo porque el inmueble y el relato se localizan en Chía, Cundinamarca», pero la ficha
sigue trabajándose dentro del ciclo de Bogotá y compartiendo su plantilla, su
bibliografía y su `sharedHistory`.

- **A.** Sacarla del ciclo Bogotá y trabajarla con el ciclo de Cundinamarca / Varios, con
  su propia cantera (Chía, ICOMOS, Ibáñez t. II, Ocampo *Leyendas populares colombianas*).
  El ciclo de memoria baja a siete.
- **B.** Dejarla en Bogotá por continuidad de URL y taxonomía, y decir en `historia` que
  el puente está en Chía, sobre el río Bogotá, en el camino que une las dos.
- **C.** Partirla: el puente de 1792 (Ezpeleta, Esquiaqui) como ficha de patrimonio en
  Cundinamarca, y el pacto de Florentino como ficha de leyenda, cada una en su cajón.

### D8 · Cuatro fichas del nocturno se sostienen sobre un libro que nadie ha abierto

`la-monja-vidente-y-el-taxista`, `los-esqueletos-caminantes`, `el-venado-de-oro` y
`el-toro-en-el-ascensor` declaran como registro capítulos de López Orozco (2008), citados
sólo por dos fichas de catálogo Koha.

- **A.** Bloquearlas hasta conseguir el ejemplar (CENDOC del IDPC, BibloRed, Biblioteca
  Nacional) y, mientras tanto, no publicar el libro como fuente clave.
- **B.** Reescribirlas sobre los registros alternativos que sí se han verificado —para el
  toro, Rodríguez 1996; para los esqueletos, Florido Caicedo 2015— y dejar a López Orozco
  en `versiones` como «el texto que hoy circula».
- **C.** Mantener la cita bibliográfica del libro sin URL, declarando en `limitation` que
  se cita por su ficha institucional y no se ha consultado. *(Es lo que el spec §4.2
  prohíbe, pero es la opción honesta si se declara.)*

### D9 · La entrada Villa Posse

Está en los dos ciclos y no sostiene nada.

- **A.** Retirarla de las dieciséis fichas y comprobar el tomo I antes de reponerla.
- **B.** Retirarla sólo de las fichas donde no hay ningún nudo que la invoque, y
  conservarla donde alguien la haya cotejado de verdad. *(Hoy: en ninguna.)*
- **C.** Sustituirla, en las fichas del nocturno, por Ocampo López 2001 en cuanto haya
  ejemplar consultable.

---

## PENDIENTE EN ESTA MISMA RONDA

1. Barrer el *Boletín de Historia y Antigüedades* con el patrón ya resuelto
   (`/boletines/BHA-<N>.pdf`, con capa de texto): Monserrate, Puente del Común, Mono de
   la Pila, Russi, mula herrada.
2. Recuperar el cuarto fichero de Cordovez en Banrep (id 2953, descarga truncada) **desde
   navegador**.
3. Localizar **López Orozco 2008** (prioridad máxima: sostiene cuatro fichas), Ocampo
   López 2001 y el folleto de Ibáñez de 1894 en el CENDOC del IDPC, BibloRed y la
   Biblioteca Digital de Bogotá.
3 bis. Abrir en navegador `cucharitadepalo.co/cronicasilustradas/muerte-fuera-del-ruedo/`
   y sacar de ahí la referencia exacta a la nota de *El Espectador* sobre el toro.
4. Hemeroteca de la Biblioteca Nacional: Margarita Villaquirá (enero de 1942) y el toro
   del Henry Faux.
5. Comprobar el tomo I de Villa Posse en el mismo host de FLACSO.
