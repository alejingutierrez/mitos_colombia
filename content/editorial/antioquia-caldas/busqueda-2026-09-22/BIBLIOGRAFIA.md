# Bibliografía del ciclo Antioquia y Caldas (21 fichas) — ronda R1, 2026-09-22

Paso 1 del brief. No se redacta ninguna ficha ni acta.

Módulos: `editorial/antioquia-mestizo/` (10), `editorial/antioquia-mixto-residual/` (2),
`editorial/caldas-mestizo/` (9).

**Cerrado el 2026-09-22.** Lectura crítica en §I, reparto en §II, narradores §III, caídas §IV, decisiones §V. Las tandas 1-5 de abajo son el registro de la búsqueda.

## Tanda 1 — Villa Posse, tomos II y III, abiertos enteros

- **Tomo II** (`resId=44620`, 200, PDF 1,99 MB, 17 183 líneas de texto): su índice
  (final del PDF) **no tiene capítulo de Antioquia ni de Caldas**. Secciones 17-28:
  Varias regiones (Otero D'Costa), Cartagena, Santander, Tolima (×2), San Andrés,
  Tota, Leticia, Córdoba, Llanos, Tumaco, Cartagena (Porto de González).
- **Tomo III** (`resId=44622`): muiscas, catío-chamí y guajiros. **Tampoco.**
- **Tomo I**: sólo ensayos y la bibliografía general; ahí figura Escobar Uribe,
  *Mitos de Antioquia*, Minerva, Bogotá, 1950 (p. 344 de la bibliografía).
- Lo que sí hay: **cuatro fichas del ciclo son piezas de Otero D'Costa en la
  sección 17** (texto en `../primarias/villa-posse-1993-ii-otero-cuatro-piezas.txt`):
  «De frente al sol» p. 17 · «In illo tempore» p. 25 · «No hay deuda que no se
  pague…» **p. 53** (no figura en el índice: va embebida tras «Genus irritabile
  vatum», p. 49) · «Cuento de ánimas» p. 56.

## Tanda 2 — Vélez Correa, abierto entero (el hallazgo que sostiene medio ciclo)

**Fabio Vélez Correa, *Mitos, espantos y leyendas de Caldas*.** 1.ª ed. Imprenta
Departamental de Caldas, Manizales, **1997**, 700 ejemplares (lo dice su propia
Presentación). Lo que sirve El Libro Total es **otra edición, «ampliada y
corregida»**, hecha con la Secretaría de Cultura de Caldas: su lista de fuentes
cita artículos de **2005, 2006 y 2007**, así que es posterior a 2007. La cabecera
del visor dice «(1977)»: errata.

- El visor `https://www.ellibrototal.com/ltotal/?t=1&d=4731` es JavaScript y
  `curl` sólo trae el armazón. **El texto sí se puede sacar**: `POST
  https://www.ellibrototal.com/ltotal/inicio/text_data.jsp` con
  `id_item=4731,0&tipoLibro=1&modoLibro=1&modoSeccion=paginas&seccion=N`
  (N = 1…52; de 53 en adelante devuelve 44 bytes vacíos). Así se bajó el libro
  completo (≈ 850 000 caracteres limpios). **Esta receta vale para cualquier libro
  de El Libro Total** (cambiar 4731 por el `idLibro`): desbloquea las fichas de
  Juan de Dios Arias (idLibro=298) y Diago (5831) que Piedecuesta y Caribe dieron
  por «pendiente de navegador».
- Texto pertinente en `../primarias/velez-correa-mitos-espantos-leyendas-caldas-ellibrototal.txt`.
- Los marcadores `"npag"` del visor son páginas de pantalla, no folios del
  impreso: **se cita por título de capítulo**, no por página.
- Estructura: I. Mitos y leyendas indígenas · II. Mitos (Mayores / Menores) ·
  III. Espantos · IV. Leyendas · Conclusiones · Fuentes de consulta (≈ 45
  artículos de prensa caldense y ≈ 60 libros).
- **Qué trae del ciclo** (título exacto del capítulo):
  «El Cacique Cumanday» (Primera parte, leyendas indígenas) · «El Patetarro»
  (Mitos mayores) · «María la Larga», «La Dama Verde», «La Rodillona» (Mitos
  menores) · «El Uñón» con «Rafael Toro, El aserrador. Leyenda de Supía la Alta» ·
  «El Coco» · «El Viejo del Costal» · «La Mano Peluda» · «El Cole-Cabuya» ·
  «Las Brujas» con «Una bruja salamineña» (Clementina, citando *Tierrabuena* de
  Rodrigo Jiménez Mejía) · «Presencia animal del diablo» con **el Perro negro**,
  «El perro de Maibá» (Octavio Hernández Jiménez) y **«Los Rescoldaos»** ·
  «Las ilusiones malas» · **«María, La Parda»** (tesoro escondido, pacto con el
  diablo, cordillera central: candidato serio para `maria-centeno`, ver Decisiones).
- **No trae**: la Cabellona, el Mareco, el Patón, María Centeno con ese nombre.
- **Cita a Escobar Uribe con página**, lo que da la paginación de *Mitos de
  Antioquia* (1950) de segunda mano: Patetarro **p. 20**, Rodillona **p. 119**,
  Ilusiones malas **p. 168**; y a Iván Salazar Duque, *Mitos y mensajes*
  (Grafoprint, Medellín, 1990): Patetarro p. 76, Dama Verde p. 104.

## Tanda 3 — la antología de 2004 es de dónde salieron las invenciones

***Cuentos de espantos y otros seres fantásticos del folclor colombiano*.** Casa
Editorial El Tiempo (Proyectos Especiales) con el Periódico HOY y patrocinio de la
Universidad Autónoma de Colombia, Bogotá, **2004**. Equipo de autores dirigido por
Juan Torres Mantilla; editor Julio Orozco Vargas; agradece a Javier Ocampo López.
Texto OCR completo en Internet Archive:
`https://archive.org/details/CuentosDeEspantosYOtrosSeresFantasticosDelFolclorColombiano..compressed`
(200; `_djvu.txt` de 213 KB). Extracto en `../primarias/cuentos-de-espantos-2004-el-tiempo-uautonoma.txt`.

- **Su introducción se declara «recopilación de documentos imaginarios»** con
  «sustancias y artefactos cientificcionales». Cada entrada es una noticia,
  diario o informe **inventado**. No es registro oral ni folclor recogido.
- **Trae 13 de los 21 títulos del ciclo** (folios del índice): La Dama Verde
  11-12 · El Perro Negro 15-16 · La Mano Peluda 27-28 · El Patetarro 43-44 · El
  Mareco 47-48 · La Cabellona 65-66 · El Patón 67-68 · La Rodillona 69-70 · Las
  Ilusiones 71-72 · María la Larga 83-84 · Los Rescoldaos 89-90 · María Centeno
  95-96 (además La Vieja Colmillona 57-58 y Coco Pelao 91-92, llanero, que no es
  `el-coco`).
- **Es la fuente de las invenciones que el módulo ya retiró**: «El Patón» es un
  recorte falso del periódico *El Sátrapa* (Bogotá, 29-VI-1986) sobre un «Pie
  Grande asesino» que mata a tres ecologistas en Antioquia: de ahí salió el
  «falso expediente de Sasquatch y asesinatos» que `researchNotes` dice haber
  eliminado. El Mareco (Manuel, lagartija roja, San Ildefonso) y el Patetarro
  (Ernesto, Amalia) son igualmente piezas de esta antología.
- **Uso correcto**: como testigo de circulación en 2004 y como origen declarado
  de rasgos que no están en Escobar ni en Ocampo. Nunca como registro.

## Tanda 4 — lo que el módulo ya citaba, abierto y leído

- **Alcaldía de Andes, *Andes: identidad y memoria / sostenibilidad y resiliencia*** (PDF de
  99 pp., InDesign, dic. 2019), `https://www.andes-antioquia.gov.co/MiMunicipio/HistoriaVeredas/Andes%2C%20identidad%20y%20memoria%20%20sostenibilidad%20y%20resiliencia.pdf` (200, 54 MB).
  **No trae la Dama Verde** (cero apariciones de «Dama Verde»): el módulo le atribuye una
  «localización propia» de la Dama Verde que no existe. Lo que sí trae: **p. 58, una cita
  textual de Escobar Uribe, *Mitos de Antioquia*, 1950, sobre María la Larga** (camino de
  Santa Rita, Poceta de la Virgen, calle del Cura, almadreñas claveteadas, el padre
  Eleázar Marulanda con rejo y cordón de San Francisco); p. 44, biografía de Escobar Uribe
  (**nació en Andes el 20-IV-1909**, periodista, fundó *El Yunque* en Manizales en 1937);
  p. 51, «La tradición oral» (sólo El Putas de la Mesenia). O sea: **la «memoria municipal
  de Andes» de María la Larga es Escobar 1950 citado**, no una fuente independiente.
  Extracto: `../primarias/andes-identidad-y-memoria-2019-pp44-51-58.txt`.
- **Carlos Mario Herrera Correa, «Narrativas y lógicas de una memoria mestiza»**,
  *Boletín de Antropología Universidad de Antioquia* 19 (36), 2005, pp. 33-60.
  `https://revistas.udea.edu.co/index.php/boletin/article/view/6915` (200) y copia
  `https://www.redalyc.org/pdf/557/55703603.pdf` (200). Antropología histórica con
  archivo y trabajo de campo en Santa Fe de Antioquia, Buriticá, Sabanalarga, Peque…
  Da los nombres **María Centeno / María del Pardo / «La Centena» (Buriticá, Cañasgordas,
  Frontino, Santa Fe) / María la Parda (bajo Cauca)**, un testimonio de «una mujer de
  Buriticá ya centenaria» y el **relato íntegro de un habitante de Cañaona (Sabanalarga)**
  tomado de Espinosa y Duque 1994: 201-202 (el diablo le construye las iglesias).
  Remite a su monografía de grado (UdeA, 2004). Extracto:
  `../primarias/herrera-correa-2005-maria-del-pardo-udea.txt`.
- **Fundación Secretos para Contar, «Los tesoros de María Centeno»**, en *Con los pelos
  de punta* (PDF 2024) y en la web: adaptación contemporánea («Hace 450 años nació, en
  Santa Fe de Antioquia, María de Zafra y Centeno…»). Recreación, no registro.
  `../primarias/secretos-para-contar-maria-centeno.txt`.
- **Enrique Otero D'Costa, «Leyendas»**, *Revista Universidad Pontificia Bolivariana*
  27 (95), **1964**, pp. 55-73 (CC BY-NC-ND),
  `https://revistas.upb.edu.co/index.php/revista-institucional/article/view/3125`.
  Trae «De frente al sol» e «In illo tempore» (más El castellano de San Juan, Las
  clavellinas, Genus irritabile vatum, El cacique Salomón). **No** trae «No hay deuda…»
  ni «Cuento de ánimas»: el módulo usa esta URL como respaldo de «No hay deuda»
  (`upbOtero`) y no lo es. Segundo testigo, con variantes posibles frente a 1936/1993.
  `../primarias/otero-upb-1964-de-frente-al-sol-in-illo-tempore.txt`.
- **Tomás Carrasquilla, *La marquesa de Yolombó*** (por entregas desde 1926; ed. 1928),
  edición digital BNC/Biblioteca Básica de Cultura Colombiana,
  `https://siise.bibliotecanacional.gov.co/BBCC/Documents/View/208` (200, HTML de 1,7 MB,
  sin paginación). Catálogo de «la corte infernal y selvática»: **los ilusiones**
  («duendecillos incorpóreos, que se van a las orejas de los inocentes y les revelan
  secretos feos»), el Patasola, la Madremonte, **el Patetarro** (gigantón de una pierna,
  muslo en un tarro de guadua, líquidos que arruinan sembrados, miedo a las calaveras
  de vaca) y el Bracamonte. **Primer escalón literario para `el-patetarro` y
  testigo temprano para `las-ilusiones`** (en masculino, «los ilusiones»: otro rasgo
  que Escobar no da). `../primarias/carrasquilla-marquesa-de-yolombo-seres-del-monte.txt`.
- **Proyecto Patrimonio / UNAL Medellín, *Propuesta de conservación del Tótem Mítico de
  la Selva*** (2019), `https://www.proyectopatrimonio.info/wp-content/uploads/2020/05/15-Informe-Totem-Mitico.pdf`
  (200): Pedro Nel Gómez talla «La Patetarro» en 1968 y 1972-1973; cita a «Arango et al.
  2006: 102» (Patetarro como deidad vengadora de asesinatos a traición). Recepción
  artística, útil para `historia` del Patetarro. Sin extracto guardado.
- **Materiales escolares de El Patón**: Uninorte `.../10584/7607/luis%20arturo.pdf` (200;
  texto «PATÓN», firmado «Leyenda Popular», sin procedencia) y WebColegios
  `2360bb.pdf` (200; misma versión). **UTP** (`repositorio.utp.edu.co/.../5346100f…`, 200):
  el PDF tiene la fuente codificada y **no extrae texto**; no se pudo comprobar que
  reproduzca El Patón. Uninorte `10584/695/1/9143154.pdf` (200) reproduce «La Rodillona»
  en anexo, sin procedencia. **UNAB, tesis Salazar Niño 2018** (200): un informante dice
  que «el mito Mareco no es un mito»; menciona el Mareco de pasada.
- **Decreto de Abriaquí** (Gobernación de Antioquia 2021, 200): una línea sobre «la
  minera doña María Centeno» que manda a un esclavo. Confirmado, marginal.

## Tanda 5 — oriente caldense, la pieza de Farouk y la paginación de Otero 1936

- **Useche Toledo, S.; González González, A.; Guzmán Ruiz, C. A.; Tunarrosa Echeverría,
  E. M., *Remembranzas de mis abuelos: memoria oral y ambiental del alto oriente
  caldense*.** SENA, Centro Pecuario y Agroempresarial, La Dorada (Caldas), **2022**,
  106 pp., ISBN 978-958-15-0753-5. PDF:
  `https://repositorio.sena.edu.co/bitstream/handle/11404/8024/Remembranzas_de_mis_abuelos.pdf?sequence=4&isAllowed=y`
  (200; la URL del módulo, `.../handle/11404/8024?show=full`, es sólo la ficha).
  **Trabajo de campo con narradores nombrados** en Manzanares y Marquetalia. Capítulos
  del ciclo: La Bruja p. 28 · **María La Parda p. 58** · **El Patetarro p. 70** · **El
  Perro Negro p. 75** · **La Rodillona p. 83**. Es el mejor registro oral reciente del
  ciclo. `../primarias/sena-2022-remembranzas-alto-oriente-caldense.txt`.
- **Farouk Caballero Hernández, «Ánimas y pactos diabólicos…»**, *Rastros Rostros*
  (Universidad Cooperativa de Colombia) 14 (27), 2012, pp. 69-74. **La copia de Dialnet
  que cita el módulo no respondió (timeout de 60 s)**; la del editor sí:
  `https://revistas.ucc.edu.co/index.php/ra/article/download/445/450` (200). Cita
  **Otero 1936 pp. 130-133** para Laurián y Ñuá Ulogia (Rionegro de Santander, Señor de
  los Milagros de Girón). `../primarias/caballero-2012-animas-y-pactos-rastros-rostros.txt`.
- **Contradicción de paginación de Otero, *Leyendas*, Minerva, 1936**: Villa Posse II
  dice que su selección sale de las «pp. 15-46»; Farouk sitúa «Cuento de ánimas» en las
  **pp. 130-133**. Las dos no pueden ser ciertas para las 14 piezas: se declara, no se
  decide. Para las actas, citar el folio de Villa Posse (verificable) y dar el de
  Farouk como el del original.
- **El Tiempo, «En Medellín: desfile de danzas, mitos y leyendas. Una noche a la
  colombiana», 6-XII-1990**, `https://www.eltiempo.com/archivo/documento/MAM-30929`
  (200): enumera Los Rescoldados, El Patetarro, La Mano Peluda… entre las comparsas.
  Prensa de época: fecha la circulación pública, nada más.
- **Solórzano Sánchez, *Mitología y creencias populares de Colombia*** (2.ª ed., 130 pp.),
  ficha USCO (200): **sólo índice de materias** (Cabellona, Cole cabuya, Dama verde,
  Ilusiones, María del Pardo y Zenteno, María la larga, Patetarro, Perro negro,
  Rescoldados, Rodillona…). Prueba presencia, no texto. No cuenta como fuente del relato.
- **Tomás Carrasquilla, *Cuentos (selección)***, El Libro Total idLibro=5609 (bajado
  entero con la receta de la tanda 2): «En la diestra de Dios Padre» (el Patas), «Simón
  el Mago» (brujas, fórmula de «sin Dios ni Santa María»), «El ánima sola». **Ninguno de
  los 21 títulos**; sólo comparativa para `el-perro-negro` (el Patas) y `las-brujas`.
- **No abiertos, pese a buscarlos**: Escobar Uribe, *Mitos de Antioquia* (1950) — sólo
  Google Books, vetado; Ocampo López, *Mitos y leyendas de Antioquia la grande* (Plaza &
  Janés, 2001) y *Mitos colombianos* (El Áncora, 1989) — sólo catálogos; Julián Bueno
  Rodríguez, *Creencias del Occidente Caldense* (U. de Caldas, 1988) — sólo catálogos;
  Jiménez Mejía, *Tierrabuena* (Banco de la República, 1977) — sólo Google Books;
  Catherine López Cardona, *Memoria oral de Caldas* (UNAL, 2016) — portal de venta, sin
  PDF abierto localizado; Octavio Hernández Jiménez, *Nueve noches en un amanecer* (1991)
  y el fascículo 6 de *Caldas, patrimonio y memoria cultural* (1995) — sin rastro en línea.
  Escobar y Ocampo **sólo se leen de segunda mano**, en las citas con página que hacen
  Vélez Correa y la Alcaldía de Andes.

---

# I. LO PRIMERO QUE HAY QUE SABER (lectura crítica de los módulos)

1. **El ciclo no tiene un recopilador, tiene tres bloques y ninguno es el que se
   cree.** `antioquia-mestizo` dice salir de **Escobar Uribe 1950** y de **Ocampo López
   2001**, que **no se pueden abrir** (Google Books, expydoc 403, Scribd). `caldas-mestizo`
   dice salir de **Vélez Correa 1997**, que sí se abre… pero en **otra edición** (la
   ampliada, posterior a 2007). Y cuatro fichas de ambos módulos son **cuentos firmados
   de Otero D'Costa** (1936) que están en Villa Posse II.
2. **El libro que de verdad sostiene el ciclo es Vélez Correa**, y no sólo para Caldas:
   trae con capítulo propio la Dama Verde, la Rodillona, María la Larga, el Patetarro,
   las Ilusiones malas, los Rescoldaos, el Perro negro y María la Parda, **con citas de
   Escobar Uribe con página** (pp. 20, 119, 168…) y de Ocampo López, *Mitos colombianos*
   (pp. 190, 215…). Es la vía para anclar el núcleo de Escobar/Ocampo sin abrirlos.
3. **La antología de 2004 (El Tiempo / U. Autónoma) es la fuente de las fichas viejas y
   de sus invenciones.** Se declara «recopilación de documentos imaginarios». El Patón
   como Pie Grande asesino, el Mareco con Manuel y la lagartija roja, el Patetarro con
   Ernesto y Amalia salen de ahí. Trae 12 de los 21 títulos.
4. **Tres atribuciones del módulo son falsas a la vista del texto**:
   - `andesMemory` para `la-dama-verde`: el libro de Andes **no menciona la Dama Verde**.
     Y para `maria-la-larga` no es «memoria municipal»: es **Escobar 1950 citado
     textualmente** (p. 58 del PDF).
   - `upbOtero` para `no-hay-deuda-que-no-se-pague`: la revista UPB de 1964 **no trae
     ese cuento**.
   - `el-cacique-cumanday`: «Vélez Correa firma la pieza» — **no**: Vélez la presenta como
     «otro canto, otra oda» y la transcribe entre comillas; su bibliografía registra
     «Marulanda, John. *Cumanday y su albo reino*. Citado por Alba Nelfy Bernal en *Papel
     Salmón de La Patria* n.º 242, Manizales, 8-VI-1997», autor probable.
5. **El año de Vélez**: el módulo pone 1997 a lo que se lee en El Libro Total; esa
   edición cita prensa de 2005-2007. Se cita como «ed. ampliada, s. f. (post. 2007); 1.ª
   ed. 1997».
6. **Dos fichas de un módulo son de otro departamento**: `cuento-de-animas` (en Caldas)
   es **Santander**; `no-hay-deuda-que-no-se-pague` (en Antioquia) ocurre en **la villa
   de Arma**, hoy Aguadas, **Caldas**. Su propio `researchNotes` dice «traslada la
   categoría a Caldas», pero sigue en `antioquia-mestizo`.
7. **El Patón no tiene registro folclórico**: ni Vélez, ni SENA, ni Villa Posse. Sólo la
   antología de 2004 (noticia inventada) y la versión escolar firmada «Leyenda Popular».

---

# II. REPARTO REAL

Confianza: **confirmado** = el relato está a la vista en una obra abierta · **probable**
= obra candidata con razón concreta, texto no abierto · **sin rastro** = ninguna obra
consultable lo nombra. V-C = Vélez Correa (ed. El Libro Total, por capítulo). CE 2004 =
*Cuentos de espantos* (por folio del índice). VP II = Villa Posse vol. II.

## `antioquia-mestizo` (10)

| slug | de dónde sale | confianza |
|---|---|---|
| `el-paton` | **CE 2004 pp. 67-68** (noticia falsa de *El Sátrapa*, 1986) · versión escolar «Patón», firmada «Leyenda Popular»: Uninorte `10584/7607` y WebColegios `2360bb.pdf` · Gómez y Ordóñez 1995 sólo por catálogo (Mosquera, **timeout**) | **confirmado sólo en mediación tardía**; registro folclórico **sin rastro** |
| `el-perro-negro` | **V-C, «Presencia animal del diablo»** (Ocampo *Mitos colombianos* p. 215; testimonios de José Jesús Cardona G., vereda Guacaica, Neira; Antonio Morales, Neira, fin del s. XIX; «El perro de Maibá», O. Hernández Jiménez) · **SENA 2022 p. 75** (Don Chillo; Hernán Aristizábal) · CE 2004 pp. 15-16 · Escobar 1950 (suroeste) | **confirmado** |
| `la-cabellona` | Escobar 1950 (arco Liborina–Pavarandocito, según el módulo; no abierto) · Ocampo 2001 (no abierto) · CE 2004 pp. 65-66 (recreación) · Solórzano (sólo materia) | **probable** (núcleo); sólo la recreación está a la vista |
| `la-dama-verde` | **V-C, «La Dama Verde»** (Salazar Duque 1990 p. 104; Molina Uribe 1967, *¡A echar cuentos, pues!*: se destapa y es calavera) · CE 2004 pp. 11-12 · ~~Andes~~ (no la trae) | **confirmado** |
| `la-rodillona` | **V-C, «La Rodillona»** (Escobar p. 119; copla; «La Rodillona en Risaralda», San Joaquín, finales de los años 20) · **SENA 2022 p. 83** (Javier Gallego) · Uninorte `10584/695` (anexo) · CE 2004 pp. 69-70 (OCR vacío) | **confirmado** |
| `las-ilusiones` | **V-C, «Las ilusiones malas»** (cita a Escobar p. 168) · **Carrasquilla, *La marquesa de Yolombó***: «los ilusiones», duendecillos incorpóreos · CE 2004 pp. 71-72 | **confirmado** |
| `los-rescoldos` | **V-C, «Los Rescoldaos»** (diablillos del tamaño de un dedo, color de brasa, roban carne a arrieros; Antioquia, Caldas, Quindío, Risaralda) · CE 2004 pp. 89-90 · *El Tiempo* 6-XII-1990 (desfile) · Ocampo 2001, «mitos infantiles» (no abierto) | **confirmado** |
| `maria-centeno` | **Herrera Correa 2005** (UdeA; «La Centena», María del Pardo, María la Parda; relato de Cañaona vía Espinosa y Duque 1994: 201-202) · **V-C, «María, La Parda»** (O. Hernández J. p. 6; Á. M. Ocampo p. 188; Marulanda, San Félix, Salamina, Aranzazu, Neira, Manzanares, Marquetalia) · **SENA 2022 p. 58** (Jorge Echeverry, Darío Valencia, Marquetalia) · CE 2004 pp. 95-96 · Secretos para Contar (adaptación) · decreto de Abriaquí | **confirmado** |
| `maria-la-larga` | **Escobar 1950 citado textualmente en *Andes: identidad y memoria*, p. 58 del PDF** · **V-C, «María la Larga»** (Ocampo *Mitos colombianos* p. 190; José Jesús Cardona, Alto Villarazo, Villamaría) · CE 2004 pp. 83-84 | **confirmado** |
| `no-hay-deuda-que-no-se-pague` | **VP II, sección 17, p. 53** (Otero D'Costa, *Leyendas*, 1936). No está en UPB 1964 | **confirmado** |

## `antioquia-mixto-residual` (2)

| slug | de dónde sale | confianza |
|---|---|---|
| `el-mareco` | **CE 2004 pp. 47-48** (Manuel, lagartija roja, San Ildefonso: recreación) · Ocampo 2001, «Los mitos infantiles», p. 125 (no abierto; la cita circula por un blog, vetado) · tesis UNAB 2018 (mención) | **probable** (núcleo de Ocampo); sólo la recreación a la vista |
| `el-patetarro` | **Carrasquilla, *La marquesa de Yolombó*** (catálogo de seres del monte) · **V-C, «El Patetarro»** (Escobar p. 20; Salazar Duque p. 76) · **SENA 2022 p. 70** · CE 2004 pp. 43-44 (Ernesto/Amalia) · Tótem Mítico, UNAL 2019 (Pedro Nel Gómez, 1968 y 1972-73) · *El Tiempo* 1990 | **confirmado** |

## `caldas-mestizo` (9)

| slug | de dónde sale | confianza |
|---|---|---|
| `cuento-de-animas` | **VP II p. 56** (Otero 1936; abre con Mariejesús Cañas «en tierras de Caldas» y sigue en Santander) · **Caballero 2012** (Otero 1936 pp. 130-133) | **confirmado** |
| `de-frente-al-sol` | **VP II p. 17** · **UPB 1964, pp. 55-73** (Chinchiná, Arma, Cartago, pijaos) | **confirmado** |
| `el-aserrador` | **V-C, «El Uñón» → «Rafael Toro, El aserrador. Leyenda de Supía la Alta»** (testimonio en primera persona de un narrador de 86 años; sacerdote de Caramanta) · fuente de Vélez probable: Julián Bueno 1988 (no abierto) | **confirmado** |
| `el-cacique-cumanday` | **V-C, «El Cacique Cumanday»**, texto entre comillas; autor probable John Marulanda (*Papel Salmón* n.º 242, 8-VI-1997) | **confirmado** (texto) · **probable** (autoría) |
| `el-coco` | **V-C, «El Coco»** con la «Versión de "Tatínez"» (Carlos Martínez Marín, *Séptimo Encuentro de la Palabra*, 1991): calabazo con vela, Riosucio | **confirmado** |
| `el-cole-cabuya` | **V-C, «El Cole-Cabuya»** (Julián Bueno; Llanogrande y Pasmí, San Lorenzo, y La Loma, Supía la Alta, 1969-1972; testimonio citado por Alejandrino Izquierdo) | **confirmado** |
| `el-viejo-del-costal` | **V-C, «El Viejo del Costal»** (Julián Bueno p. 92, «Mito de los caprichos»; copla vía Álvaro Gartner) + «La Mano Peluda» (Escobar p. 179) · CE 2004 «La Mano Peluda» pp. 27-28 | **confirmado** |
| `in-illo-tempore` | **VP II p. 25** · **UPB 1964** (Robledo, Anserma, Arma, Popayán, Benalcázar) | **confirmado** |
| `las-brujas` | **V-C, «Las Brujas» → «Una bruja salamineña»** (Clementina, citando a Rodrigo Jiménez Mejía, *Tierrabuena*, Banco de la República, 1977; Camilo Ángel Echeverri) · *Tierrabuena* no abierto · SENA 2022 «La Bruja» p. 28 (Manzanares; comparativa) | **confirmado** (vía Vélez) |

**Recuento por ficha: 19 confirmadas · 2 probables (`la-cabellona`, `el-mareco`) · 0 sin rastro.**
Matices dentro de las confirmadas: `el-paton` sólo en mediación escolar y en la ficción de
2004 (registro folclórico sin rastro); `el-cacique-cumanday` con el texto a la vista pero la
autoría sólo probable; `las-brujas` a la vista sólo a través de Vélez.

---

# III. NARRADORES (los que las obras nombran)

| narrador | lugar | fecha | obra · ficha |
|---|---|---|---|
| José Jesús Cardona G. | Villamaría (Alto Villarazo); vereda Guacaica, Neira | s. f. | V-C · `maria-la-larga`, `el-perro-negro` |
| Antonio Morales | Neira (carrera 9.ª) | «última década del s. XIX» | V-C · `el-perro-negro` |
| narrador anónimo de 86 años («estaba yo en la escuela hace ochenta años») | Supía la Alta (La Miel, Oro Fino, Bocatoma) | s. f. | V-C · `el-aserrador` |
| Alejandrino Izquierdo (cita) | San Lorenzo / Supía la Alta | 1969-1972 (apariciones) | V-C · `el-cole-cabuya` |
| Carlos Martínez Marín, «Tatínez» | Riosucio | 1991 (publicación) | V-C · `el-coco` |
| Rodrigo Jiménez Mejía (con Camilo Ángel Echeverri) | Salamina | «hace unos diez años» antes de *Tierrabuena* | V-C · `las-brujas` |
| Jorge Echeverry; Darío Valencia | Marquetalia | 2022 (publicación) | SENA · `maria-centeno` |
| Don Chillo (Jaramillo); Hernán Aristizábal | Manzanares / Marquetalia | 2022 | SENA · `el-perro-negro` |
| Javier Gallego | alto oriente caldense | 2022 | SENA · `la-rodillona` |
| Amparo Ramírez | Manzanares | 2022 | SENA · `las-brujas` (comparativa) |
| «una mujer de Buriticá ya centenaria»; un habitante de Cañaona (Sabanalarga) | Buriticá; Sabanalarga | c. 2004; 1994 | Herrera 2005 (vía Espinosa y Duque 1994) · `maria-centeno` |

---

# IV. CAÍDAS Y BASURA en los `sources.mjs` actuales

| clave(s) | URL | estado |
|---|---|---|
| `escobarMitos` (×2 módulos), `ocampoGrande`/`ocampoAntioquiaGrande`, `velezGoogle`, `oteroMontanas` | books.google.* | 200, **vetado** (catálogo) |
| `ocampoContents` | expydoc.com | **403** y agregador tipo docslib: **vetado** |
| `ocampoPopularScan`, `oteroAnthology` | scribd.com | **vetado** |
| `velezWorldcat` | search.worldcat.org | **429**, vetado |
| registro Open Library (mixto) | openlibrary.org | **vetado**; usar el ítem de archive.org, que sí tiene el texto |
| `gomezCatalog`, registro MARC Mosquera | biblioteca.apps-mosquera.gov.co | **timeout** ×2 (25 s) |
| `oteroAnimasAnalysis` | dialnet …/6515540.pdf | **timeout 60 s**; sustituir por `revistas.ucc.edu.co/index.php/ra/article/download/445/450` (200) |
| `flacsoMitosColombia` | repositorio.flacsoandes.edu.ec/items/… | **403**; usar `https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620` |
| `cervantesCoco`, `cervantesNanas`, `cervantesBrujaMinas`; `pradoCoco`; RAE `coco`; `smithsonianBigfoot` | cervantesvirtual / museodelprado / dle.rae.es / si.edu | **403 a curl** (no necesariamente caídas; comprobar en navegador) |
| `riosucioEncantos` | blogspot | 200, **blog: vetado** |
| «Leyenda del Mareco» | elrinconcolombiano.com | 200, **agregador: vetado** |
| «Literatura moralizante…» | profeticayserendipistica.wordpress.com | 200, **blog: vetado** (sólo sirve de pista de Ocampo p. 125) |
| `ifmAntioquia`, `rtvcDianaUribe`, `lacoladerata` | divulgación | 200; aportan poco; `rtvcDianaUribe` no nombra a la Dama Verde en el texto servido |
| `utpPaton` | repositorio.utp.edu.co | 200, pero **el PDF no extrae texto**: no se comprobó que traiga El Patón |
| `velezReader` | ellibrototal.com/?d=4731&t=1 | 200 y **sí sirve** (receta de la tanda 2); año mal (no es 1997) |
| `velezFicha` | ellibrototal.com/ficha.jsp?idLibro=4731 | 200, ficha de 400 caracteres: duplica a `velezReader` |
| `andesMemory` | andes-antioquia.gov.co | 200; **atribución errónea para la Dama Verde** |
| `upbOtero` | revistas.upb.edu.co | 200; **no trae «No hay deuda»** |
| `senaMemoriaCaldas` | repositorio.sena.edu.co/handle/11404/8024?show=full | 200, ficha; el PDF es `.../bitstream/handle/11404/8024/Remembranzas_de_mis_abuelos.pdf?sequence=4&isAllowed=y` |
| `unalMemoriaCaldas` | portaldelibros.unal.edu.co | 200, **página de venta**; sin texto |
| `supiaPlan`, `antSanLorenzo` | supia-caldas.gov.co | 200; **no mencionan ninguno de los relatos** (sólo topónimos; «Cabuyal» es una vereda) |
| `solorzanoCatalog` | biblioteca.usco.edu.co | 200, **sólo índice de materias** |

---

# V. DECISIONES (anotadas, no tomadas)

1. **`cuento-de-animas` es de Santander.** Otero la sitúa en Rionegro de Santander y
   Girón; sólo el párrafo de apertura nombra Caldas. ¿Se muda al ciclo de Santander
   (junto a las otras de Otero en `caribe-mestizo-final`), se queda en Caldas por esa
   apertura, o se parte?
2. **`no-hay-deuda-que-no-se-pague` es de Caldas** (villa de Arma, hoy Aguadas) pero vive
   en `antioquia-mestizo`. Su `researchNotes` ya dice «traslada a Caldas».
3. **Las cuatro de Otero** (`cuento-de-animas`, `de-frente-al-sol`, `in-illo-tempore`,
   `no-hay-deuda…`) son **cuentos de autor** de *Leyendas* (1936), como las seis ya
   tratadas en `caribe-mestizo-final`. ¿Subciclo Otero único para las diez, o cada una
   en su departamento?
4. **`maria-centeno` y María la Parda.** Herrera 2005 prueba que son la misma figura
   (María del Pardo / la Parda). Vélez y SENA traen la variante caldense (Marulanda,
   Marquetalia, camino a Samaná). ¿Una ficha antioqueña que nombra la variante caldense,
   una ficha nueva «María la Parda» en Caldas, o una sola ficha de las dos vertientes?
5. **`el-paton` no tiene registro folclórico** en ninguna obra abierta: sólo la
   antología de 2004 (ficción declarada) y la versión escolar sin procedencia. ¿Se
   conserva declarada como leyenda de circulación escolar, se retira, o se bloquea hasta
   abrir Gómez y Ordóñez 1995?
6. **`la-cabellona` y `el-mareco` dependen de obras no abiertas** (Escobar 1950, Ocampo
   2001). ¿Se escriben sobre Vélez y la antología de 2004 declarando el hueco, se
   bloquean, o se busca Escobar/Ocampo en papel (Biblioteca Pública Piloto, Sala
   Antioquia de la UdeA)?
7. **`el-cacique-cumanday`**: leyenda literaria de tema indígena (con una conjetura páez)
   cuyo autor probable es John Marulanda, no Vélez. ¿Mestizo con autoría corregida,
   reclasificar como literatura de autor, o esperar a abrir el *Papel Salmón* de 1997?
8. **Solapes con otros ciclos**: `el-viejo-del-costal` contiene la Mano Peluda, que ya
   tiene ficha propia (`la-mano-peluda`, en `andina-varios-mixto-residual`). La antología
   de 2004 trae también «La Bruja del Tranvía», que existe como `la-bruja-del-tranvia`.
9. **Títulos que la fuente no da**: `los-rescoldos` (slug) / «Los Rescoldados» (ficha,
   *El Tiempo*, Solórzano) / «Los Rescoldaos» (Vélez, CE 2004). `las-brujas` es un
   título genérico para una ficha que es sólo Clementina («Una bruja salamineña»).
   `el-aserrador` / «Rafael Toro, El aserrador» es un subtítulo dentro de «El Uñón».
   `el-coco` / el título «los calabazos de Riosucio» es de la ficha, no de Vélez.
10. **Edición de Vélez**: citar la de El Libro Total (ampliada, post. 2007) o buscar la
    de 1997 en papel para fijar folios. Los capítulos pueden no coincidir.
