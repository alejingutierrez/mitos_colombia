# Textos primarios del corpus murui-muina (huitoto / uitoto)

Verificación de URL: 17 de septiembre de 2026. El código de respuesta anotado en
cada ficha es el que devolvió la petición ese día, siguiendo redirecciones.

Hay dos fuentes primarias y dos perfiles institucionales de contexto. Las dos
fuentes primarias son de naturaleza distinta y **no se leen igual**: Preuss es
un etnógrafo alemán de 1914 que publica el uitoto con traducción literal; Urbina
es un profesor colombiano que publica entre 1971 y 2004 nombrando a cada
relator. Lo que cada uno permite citar es diferente, y está dicho abajo.

---

## 1. Preuss 1994, primera parte (ya estaba en el repositorio)

`preuss1994-00-portada.txt`, `preuss1994-01-vida-entre-los-indigenas.txt`,
`preuss1994-02-padre-creador-antepasados-demonios.txt`,
`preuss1994-03-analisis-de-los-mitos.txt`, `preuss1994-05-vida-social.txt`

> Preuss, Konrad Theodor. *Religión y mitología de los uitotos: recopilación de
> textos y observaciones efectuadas en una tribu indígena de Colombia,
> Suramérica*. **Primera parte**. Traducción de Ricardo Castañeda Nieto, bajo la
> asesoría de Gabriele Petersen de Piñeros. Santafé de Bogotá: Editorial
> Universidad Nacional / Instituto Colombiano de Antropología – Colcultura /
> Corporación Colombiana para la Amazonia-Araracuara, 1994. Primera edición
> corregida y aumentada. Original alemán: *Religion und Mythologie der Uitoto*,
> Vandenhoeck & Ruprecht – J. C. Hinrichs'sche Buchhandlung, 1921/1923.

URL canónica viva: <https://repositorio.unal.edu.co/handle/unal/3113> — **200**.

Esta primera parte es **observación y análisis del recopilador**, no los
relatos. El capítulo III, «Análisis de los mitos», es exactamente eso: la
lectura que Preuss hace de unos textos que están en la segunda parte.

## 2. Preuss 1994, segunda parte — **los textos de los mitos** (nuevo)

`preuss1994-t2-00-portada-y-preliminares.txt` … `preuss1994-t2-33-anexo-diccionario-uitoto-espanol.txt`
(34 archivos: preliminares, 26 mitos numerados, cantos y rituales, y el
diccionario uitoto-español del anexo).

> Preuss, Konrad Theodor. *Religión y mitología de los uitotos…*. **Segunda
> parte**. Transcripción revisada y traducción de la segunda parte: **Eudocio
> Becerra (Bigïdïma) y Gabriele Petersen de Piñeros**. Santafé de Bogotá:
> Editorial Universidad Nacional / Instituto Colombiano de Antropología –
> Colcultura / Corporación Colombiana para la Amazonia-Araracuara, 1994.
> ISBN 17-0113-3 (segunda parte), 17-0114-1 (obra completa).

URL canónica viva: <https://repositorio.unal.edu.co/handle/unal/3114> — **200**.
Es un registro distinto y contiguo al de la primera parte; ahí estaba la
recopilación de textos que faltaba.

**Cómo se obtuvo el texto: reconocimiento óptico, no capa de texto nativa.**
Esto no es un matiz. Los PDF de la UNAL son imágenes escaneadas (JPEG en gris de
300 ppp) con una capa de OCR superpuesta; las fuentes declaradas (Times-Roman,
Helvetica, no embebidas) son la firma del OCR, no del original impreso. La
extracción se hizo con `pdftotext -layout` sobre esa capa.

### Advertencias de lectura de Preuss

- **La columna en lengua uitoto está corrompida y no se puede citar.** El texto
  va a dos columnas, uitoto a la izquierda y español a la derecha. El OCR
  destruyó la sexta vocal del uitoto (ɨ / ï): en los 2,4 MB extraídos de la
  segunda parte hay **cero** apariciones de `ɨ` y **cero** de `ï`. Donde iba esa
  vocal el OCR puso casi siempre una `k`. El héroe del mito 6 aparece 307 veces
  como «Fkdamona» y sólo 23 como «Fiedamona»; lo mismo pasa con «komkdi»,
  «naimkdi», «imkdi», «mootakdi». Como la `k` también existe de verdad en
  uitoto, no hay forma de deshacer la sustitución leyendo el archivo: **ninguna
  palabra en uitoto de estos .txt sirve como grafía**. Para citar una forma en
  lengua hay que ir a la página impresa del PDF. La traducción al español, en
  cambio, se lee bien, con erratas sueltas de OCR («METOLOGÍA») y encabezados de
  página convertidos en ruido.
- **Lo que es voz de quien narró y lo que es comentario del recopilador.** En la
  segunda parte, el cuerpo numerado de cada mito (los párrafos «1. / … /» con su
  traducción enfrentada) es el dictado de los narradores uitoto de 1914. Todo lo
  demás —títulos en español, subtítulos interpretativos, y sobre todo las notas
  al pie— es de Preuss. Los títulos en español son suyos, no traducciones de los
  títulos uitoto: «EL TAPIR», «LA CABEZA ANDANTE», «EL ADULTERIO Y LA ELEVACIÓN
  AL CIELO» son rótulos de etnógrafo. La primera parte entera es comentario.
- **Preuss casi nunca nombra a sus narradores.** Trabajó en 1914 en La Chorrera
  y el Igará-Paraná, en plena economía del caucho, y publicó los textos como
  material de «una tribu», no como obra de personas con nombre. El único
  interlocutor que aparece nombrado con continuidad es **«Pedro, mi intérprete»**
  (capítulo 28 de la segunda parte, `…-28-tradiciones-y-cantos-comentarios-de-pedro.txt`),
  y lo que ahí se lee ya está filtrado por él y por Preuss. Por eso **no se puede
  atribuir ningún relato de Preuss a una comunidad o a un narrador concreto**:
  se cita como «texto recogido por Preuss en 1914», nunca como «los murui-muina
  dicen».
- **Vocabulario de su época.** «Tribu», «indios», «los primitivos», y un aparato
  comparativo evolucionista que es hipótesis de Preuss, no dato de sus
  informantes. El capítulo sobre el ritual antropofágico (`…-32-bai-ritual-de-la-antropofagia.txt`)
  es el que más exige esa distancia: es la reconstrucción de un alemán de 1914
  sobre un rito que no presenció, y ha sido usado históricamente para
  estigmatizar a este pueblo. No se publica nada de ahí sin marco.
- La traducción de esta segunda parte la firma **Eudocio Becerra (Bigïdïma)**,
  hablante uitoto y lingüista, junto a Gabriele Petersen de Piñeros. Es decir:
  la versión española de 1994 pasó por manos del pueblo, cosa que el original
  alemán de 1921 no tuvo. Es un dato que conviene conservar al citar.
- Los archivos de la primera parte conservan el nombre `preuss1994-NN-…` con que
  llegaron; los de la segunda llevan `preuss1994-t2-NN-…`. Son dos tomos de la
  misma obra.

---

## 3. Urbina 2010, «Las palabras del origen»

`urbina-2010-las-palabras-del-origen.txt`

> Urbina Rangel, Fernando (comp.). *Las palabras del origen: breve compendio de
> la mitología de los uitotos*. Bogotá: Ministerio de Cultura, 2010. 296 p.
> Colección Biblioteca Básica de los Pueblos Indígenas de Colombia «Nación desde
> las raíces», tomo 4. Comité editorial: Enrique Sánchez, Fredy Chikangana
> (Wiñay Mallky), Hugo Jamioy Juagibioy, Vito Apüshana, Miguel Rocha. Colaboró:
> María Villa Largacha. ISBN colección 978-958-753-014-8; ISBN volumen
> 978-958-753-015-5. Primera edición, agosto de 2010.

**URL canónica viva** (visor de Babel, Banco de la República):
<https://babel.banrepcultural.org/digital/collection/p17054coll8/id/4> — **200**.

La URL de descarga que estaba rota **ya responde**:
<https://babel.banrepcultural.org/digital/api/collection/p17054coll8/id/4/download>
— **200**, `application/pdf`, 1 867 246 bytes, que es exactamente el tamaño que
el propio registro declara. El 502 era intermitente, no una baja. Aun así, la
que conviene citar en las fichas es la del visor: es la que tiene la ficha
bibliográfica y sobrevive a cambios del backend. Rutas equivalentes que también
sirven si la primera vuelve a fallar: `…/utils/getfile/collection/p17054coll8/id/4`
y el mismo camino en `cdm17054.contentdm.oclc.org`.

La ficha de la Biblioteca Virtual Miguel de Cervantes
(`cervantesvirtual.com/obra/las-palabras-del-origen-…-878838/`) devuelve **403**
a peticiones automatizadas y, en todo caso, sólo enlaza de vuelta al Banco de la
República. No sirve como canónica.

**Cómo se obtuvo el texto: capa de texto nativa del PDF.** 260 páginas,
maquetado en InDesign, con texto real (no OCR). Se extrajo con `pdftotext` y lo
único que se tocó fue normalizar las ligaduras tipográficas Unicode (ﬁ→fi, ﬂ→fl,
ﬀ→ff) para que el texto sea buscable. No se corrigió nada más.

Derechos: el registro declara «Derechos reservados Ministerio de Cultura». Es
una obra de distribución pública gratuita del Estado colombiano, pero **no es de
dominio público**: esta copia es para consulta editorial interna y verificación
de fuentes, no para republicar.

### Advertencias de lectura de Urbina

- **Todas las fechas del .txt están mal: les falta el 9.** El libro está
  compuesto con cifras de estilo antiguo (*oldstyle figures*) cuyo glifo «9» no
  tiene mapa ToUnicode en el PDF, así que la extracción lo pierde. En los 556 000
  caracteres extraídos el dígito `9` aparece 22 veces, contra ~100 de cada uno de
  los otros: en un libro sobre trabajo de campo del siglo XX eso es imposible.
  El resultado es que donde el papel dice **1914** el .txt dice «114»; donde dice
  **1971**, «171»; **1965**→«165»; **1976**→«176». Se verificó contra la imagen
  de la página 42, que imprime «En 1914, Konrad Theodor Preuss investiga» y se
  extrae como «En 114». El defecto es del PDF de origen, no del extractor:
  `pdftotext` y PyMuPDF dan idéntico resultado. **Ninguna fecha de este archivo
  se copia sin reponerle mentalmente los nueves y comprobarla contra la página.**
  Afecta también a los ISBN del reverso de portada.
- **Aquí sí hay nombres, y hay que conservarlos.** Es la diferencia de fondo con
  Preuss. Cada uno de los dieciséis mitos lleva impreso quién lo narró, dónde,
  cuándo y quién lo tradujo. Relatores: **Abuelo Jitoma Naïre**, **Abuelo Jitoma
  Zafiama**, **Abuelo José García**, **Abuelo Félix Kuegajima**, **Abuelo Moisés
  Tejada**, **Abuelo Pablo Bigïdïma**, **Abuelo Julio Ribera**, **Eudocio Becerra
  (Bigïdïma)**, **Juvenal Flaviano Castilla** y la **Abuela Filomena Tejada** —
  la única mujer, que narra para iniciar a los niños. Traductores: **Abuelo
  Jitoma Zafiama**, **Eudocio Becerra (Bigïdïma)**, **Rosa Amelia Tejada**,
  **Ismael Mendoza**. Citar un mito de este libro sin el nombre de quien lo narró
  es romper lo que el propio libro hizo bien. En el .txt las líneas están como
  `Relator:`, `Relatora:`, `Narrador:`, `Traductor:`, `Traductores:`.
- **Lo que es voz de quien narró y lo que es de Urbina.** Cada mito trae un
  «Introito» firmado por Urbina donde cuenta cómo lo consiguió, y un cuerpo de
  notas al pie con sus comparaciones (presocráticos, Heráclito, paralelos con
  otras mitologías). El relato es del Abuelo o la Abuela; el introito, las notas
  y el prólogo son del compilador. Urbina es explícito y honesto sobre su propio
  aprendizaje y sus errores de etnógrafo joven, y ese material es interesante,
  pero es autobiografía suya, no tradición del pueblo.
- **Qué no puede darse por dicho por la comunidad.** Es una antología de
  dieciséis relatos de nueve o diez sabedores de lugares distintos (Puerto
  Leguízamo, La Chorrera, el Igará-Paraná), recogidos a lo largo de treinta años.
  No es un canon aprobado por ninguna autoridad murui-muina ni por AZICATCH; es
  la colección de un investigador. El propio registro del Banco de la República
  lo dice: «una memoria todavía no reseñada de forma académica». Una versión
  recogida a un Abuelo en un sitio no es «la versión uitoto» del mito, y el mismo
  mito aparece con variantes entre relatores dentro del libro.
- Urbina escribe «uitotos» en minúscula y usa ese exónimo a lo largo del libro;
  el pueblo se autodenomina hoy **murui-muina**. Ver la nota de nombres abajo.

---

## 4. Perfiles institucionales del pueblo — reemplazo del enlace muerto de la ONIC

El enlace citado en los veintiún mitos,
`https://www.onic.org.co/pueblos/1125-muinane`, responde **200 pero redirige a
`https://www.onic.org.co/`**: la ONIC rehízo su sitio y el perfil dejó de existir
en esa ruta. Como URL es una portada genérica, no una fuente.

**Reemplazo propuesto: <https://www.onic.org.co/muinane/> — 200, sin redirección.**
Es el mismo perfil de la ONIC, migrado al sitio nuevo: conserva idénticas las
secciones OTROS NOMBRES / UBICACIÓN GEOGRÁFICA / POBLACIÓN y el mismo texto que
citaban las fichas. Es el cambio de mínima fricción y máxima fidelidad: no se
cambia de fuente, se corrige la dirección. Snapshot en
`onic-2026-perfil-muina-murui.txt`.

Advertencia: esa página sigue dando el **Censo DANE 2005** (6 444 personas). El
censo de 2018 registra 2 113 autorreconocidas como murui-muina, cifra muy
distinta porque cambió la forma de nombrar y contar. Si se cita población, hay
que decir de qué censo se habla. La página además arrastra en su encabezado
restos del menú de otros pueblos (Achagua, Amorúa, Andakies) que no son parte
del artículo.

**Complemento recomendado, y mejor fuente si se quiere una sola:**
<https://colecciones.icanh.gov.co/articulos/pueblos/MURUI.php> — **200**.
Ficha del ICANH sobre el **pueblo Murui**, con guion y curaduría firmados por
**Margarita Reyes**. Es más breve pero más actual y mejor escrita que la de la
ONIC: explica la autodenominación (*murui* «gente del occidente», *muinane*
«gente del oriente»), nombra los dialectos (mika, minika, búe, nipode,
noferuen), sitúa el territorio en los ríos Caquetá, Putumayo, Igará-Paraná y
Cará-Paraná, y —esto importa— nombra la esclavización cauchera y los daños
actuales (coca, petróleo, deforestación, mercurio en el pescado) en vez de
congelar al pueblo en un presente etnográfico. Snapshot en
`icanh-2026-pueblo-murui.txt`.

Tercera opción verificada, **no recomendada como fuente de contenido**:
<https://www.gobiernomayor.org.co/murui-muina/> — **200**. Es voz organizativa
legítima (Autoridades Tradicionales Indígenas de Colombia – Gobierno Mayor) y
tiene la virtud de encabezar con el nombre propio «Murui Muina» y de dar las
cifras del DANE 2018. Pero su párrafo etnográfico contiene material que no
corresponde a un pueblo amazónico —casas «en el centro de la sabana»,
«diversidad de ganado», celebraciones de «San Rafael y la Resurrección»— y tiene
erratas de copia. Sirve para el nombre y las cifras; no para describir la
cultura.

### Nota sobre los nombres

«Huitoto», «Witoto» y «Uitoto» son exónimos de origen colonial que el pueblo no
usa para sí. La autodenominación es **murui-muina** (o murui y muinane según la
orientación), y se reconocen como **«hijos del tabaco, la coca y la yuca
dulce»**, lo que en la región se dice **«gente de centro»**. Preuss (1914) y
Urbina (2010) escriben «uitotos», y así hay que citarlos; el texto editorial del
sitio no tiene por qué heredar ese exónimo.

---

## Lo que no se consiguió

- **Un sitio propio de AZICATCH** (Asociación Zonal Indígena de Cabildos y
  Autoridades Tradicionales de La Chorrera), que sería la voz organizativa más
  cercana al territorio de donde salen estos mitos. `azicatch.org` no resuelve
  (código 000). AZICATCH sólo aparece hablada por terceros —SINCHI, Patrimonio
  Natural, Unidad para las Víctimas—, nunca en primera persona y en línea. La
  página de organizaciones filiales de la OPIAC
  (`opiac.org.co/organizaciones/`) devuelve **404**, aunque `opiac.org.co`
  responde 200.
- **El original alemán de 1921/1923 en acceso abierto.** Los PDF del Max Planck
  (pure.mpg.de) siguen cerrados. No hace falta: la edición de 1994 de la UNAL es
  la obra completa en español y traducida con participación uitoto, que es mejor
  fuente para este trabajo.

---

## Addendum del 2026-09-17: las dos extracciones de Urbina y cuál usar

El PDF de «Las palabras del origen» trae capa de texto nativa, pero sus cifras
están compuestas en estilo antiguo y el glifo del **nueve** no tiene mapa
ToUnicode: al extraer, todos los nueves desaparecen. «En 1914» sale como «En
114». Falla igual con `pdftotext` y con PyMuPDF, porque el defecto está en el
archivo de origen. Comprobado: en 94 000 palabras del texto extraído sólo
sobreviven dieciséis nueves, y todos están en la portada legal, compuesta con
otra fuente.

Por eso hay **dos archivos del mismo libro y cada uno sirve para una cosa**:

| archivo | sirve para | no sirve para |
|---|---|---|
| `urbina-2010-las-palabras-del-origen.txt` (capa nativa) | el texto, la ortografía y los nombres. Conserva 881 apariciones de la sexta vocal del uitoto | **cualquier cifra**: los años, las páginas y las fechas están mutilados |
| `urbina-2010-las-palabras-del-origen-OCR-solo-cifras.txt` (reconocimiento óptico con Vision, 260 páginas a 170 ppp, marcado por página) | **las cifras**: recupera 1971, 1979, 1982, 1986 y las demás fechas de registro | la ortografía uitoto: el reconocimiento óptico pierde la sexta vocal, de 881 apariciones deja 101 |

**La regla: ninguna fecha se cita desde el archivo de capa nativa, y ninguna
grafía uitoto desde el archivo óptico.** Si una afirmación necesita las dos
cosas, se cotejan los dos archivos por número de página, que el óptico marca.

## El mismo defecto en Preuss, segunda parte

Los PDF de la segunda parte del repositorio de la Universidad Nacional son
escaneos con reconocimiento óptico, y ese reconocimiento aniquiló la sexta
vocal: **cero apariciones** de `ɨ` o `ï` en 2,4 MB de texto, sustituidas casi
siempre por una `k`. «Fkdamona» aparece 309 veces y «Fiedamona» 24, cuando el
nombre lleva la sexta vocal. La consecuencia: **la columna en lengua uitoto de
la segunda parte no sirve como grafía**. La traducción al español se lee bien y
es la que puede citarse.
