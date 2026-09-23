# Wounaan — investigación y reescritura, 19 de septiembre de 2026

Cinco mitos. Comunidad en Neon: `wounaan`. Módulo: `editorial/wounaan/`.
Entregable: `content/editorial/wounaan/reescritura-2026-09-19/*.json` (5 fichas, 8 fuentes verificadas cada una).

No se escribió en Neon, no se tocó `editorial/wounaan/*.mjs`, no se ejecutó ningún script de aplicar.
No se usó la API de OpenAI. Toda la investigación es WebSearch/WebFetch/descarga directa.

---

## 1. Qué se encontró al abrir el módulo

El diagnóstico de partida (12 URL para 5 fichas, sólo 1 de 5 nombra a alguien) describe lo publicado
en Neon. El repo ya venía una vuelta por delante: `editorial/wounaan/records.mjs` tiene un texto
no plantillado y `sources.mjs` fue tocado el mismo 19 de septiembre. Aun así, tres de esas doce URL
**ya no sostienen nada**:

| URL heredada | Estado comprobado |
|---|---|
| `archivo.minambiente.gov.co/.../libro_función_ecológica.pdf` | no responde (conexión fallida) |
| `studylib.es/doc/7889963/...` (espejo del plan de vida de CAMAWA) | HTTP 403 |
| `cendar-repositorio.metabiblioteca.org/bitstream/001/13978/1/INST-D 2019. 377.pdf` | devuelve HTML, no el PDF; por HTTPS, certificado autofirmado |
| `onic.org.co/pueblos/1155-waunana` | responde 200 pero sirve la portada de la ONIC: la ficha del pueblo ya no existe |
| `doi.org/10.1080/02560046.2017.1300829` (Critical Arts) | 403, muro de pago |
| `mdpi.com/2313-5778/5/4/91` | 403 |

Las seis se retiran del expediente. Las restantes se confirmaron abriéndolas y leyéndolas.

---

## 2. Fuentes nuevas incorporadas (todas abiertas y leídas)

1. **CNMH y Resguardo Santa Marta de Curiche, 2023** — la cartilla bilingüe ya estaba citada, pero
   nadie la había leído hasta el fondo. Se descargó completa (56 MB) y se extrajo el texto: 34.171
   palabras en woun meu y español. De ahí salen casi todos los nombres propios nuevos.
2. **Artesanías de Colombia, «El origen de la palma de weguer»** — la nota que sí nombra al narrador:
   **Celso Piña**, docente de la Escuela Centro Indígena La Unión de Pichimá, Litoral del San Juan.
3. **Artesanías de Colombia, «Barca de los espíritus», 12 de septiembre de 2016** — páchaidáma, balso,
   jagua y achiote, jais.
4. **Simão y Sánchez Ríos, Psicologia USP 27(2), 2016** — texto completo en SciELO: se recuperó la
   versión íntegra de Madre Ñame, no el resumen.
5. **Ministerio de Cultura, «Caracterización del pueblo Wounaan»** — PDF descargado y leído. Maach Hi,
   las tres rogativas nombradas, el phipha, Bên'kunn y Jaibanás.
6. **Artesanías de Colombia, Referencial Nacional de Cestería en Wérregue, mayo de 2026** — PDF leído;
   remite el mito a Ministerio de Desarrollo Económico / Artesanías de Colombia, 2001, y a Usma et al. 2001.
7. **Bernal, Galeano, García y Palacios, Tropical Conservation Science 6(2), 2013** — la transferencia
   de la cestería de Botsuana. Fuente nueva y decisiva (ver §3).
8. **Vasco Uribe, Boletín Museo del Oro 48, 2001** — PDF descargado; jagua, chaquira y curación entre
   embera y waunaan.
9. **Lucena Salmoral, Revista Colombiana de Antropología 11, 1962** — única etnografía clásica
   exclusivamente waunana localizable en abierto. **Advertencia: el facsímil del ICANH es un escaneo
   sin capa de texto** y no hay OCR disponible en esta máquina; se cita por lo que declara su resumen
   editorial y queda anotado en `dudas`.
10. **Murillo Miranda, Letras 51, 2012** — gramática del waunana a partir de una historia tradicional
    narrada por **Diego Upúa** (Darién, Panamá). Marcado como panameño.
11. **Pardo Rojas, Maguaré 4, 1986** — cosmología emberá del alto Baudó. **Marcado en cada ficha como
    fuente emberá, pueblo distinto del wounaan**, y usado sólo para paralelos.
12. **González Guerrero, Ciudad Paz-ando 9(2), 2016** — medicina wounaan en el desplazamiento.
13. **French, Ethnobiology Letters, 2021** — reseña de *Crafting Wounaan Landscapes* de Velásquez Runk
    (edición española del ICANH, 2020). El libro en sí está tras muro; la reseña es abierta y
    sustantiva. El ICANH **no** lo ofrece en descarga libre.

---

## 3. Los cuatro hallazgos que cambian una ficha

### a) La cestería fina de wérregue llegó de Botsuana en los años setenta
Bernal, Galeano, García y Palacios (2013) documentan que antes de los setenta los Wounaan hacían
cestos enrollados **simples** con la misma fibra, oscuros o del color natural, casi sin decoración y
a menudo como subproducto de las palmas tumbadas para construir casas. En los setenta, una misionera
española llamada **Rosa** llevó a **Pichimá** muestras de cestería del delta del Okavango, tejidas por
los **Ba Yei** y los **HaMbukushu** con puntada de rollo envuelto mucho más apretada. Los Wounaan
adoptaron la puntada y le pusieron sus propios diseños. El auge es de los ochenta y noventa, con el
papel del curador **Álvaro Chávez** y de Artesanías de Colombia.

Esto choca de frente con el Referencial de 2026, que dice que el tejido en rollo «ha sido practicado
por generaciones». **No se funden**: la contradicción queda expuesta en `versiones` de
`la-sal-del-weguer`. Y obliga a no cerrar el mito con la moraleja de que «los Wounaan siempre supieron
tejerlo»: el relato es tradicional, la técnica que hizo famoso al cántaro tiene fecha.

### b) La rogativa se le hace a Ewandam, y una de las tres se llama «canoíta»
La columna en español de la cartilla dice «rogar a Dios»; la columna en woun meu de la misma página
escribe **«Ẽwandamag jewaa»**, rogar a Ewandam. El Ministerio de Cultura lo confirma por otra vía:
las rogativas se hacen «por medio de cantos y bailes a Ewandam», la religiosidad se llama **Maach Hi**
y las rogativas principales son **«canoíta», «aguacerito» y «Karichipari»**.

Eso conecta tres fichas que estaban sueltas: la creación (Ewandam), la barca (canoíta) y la rogativa.
Y marca una diferencia estructural con los emberá, donde —según Pardo 1986— las figuras creadoras
quedan confinadas al origen y no reciben ruego.

### c) «La barca de dos tintas» no era un título inventado del todo
La nota de Artesanías de Colombia dice que la barca se pinta con **negro de jagua y rojo de achiote**
sobre el blanco del balso. Las dos tintas existen. Lo inventado era la trama que se les había colgado
encima (maestro, aprendiz, prueba de poder). La ficha conserva el título, describe las tintas
documentadas y retira la escena.

### d) Madre Ñame estaba mal contado
La versión que circulaba decía que la anciana «los obligó a seguir comiendo hasta que murieron». El
texto publicado por Simão y Sánchez Ríos dice otra cosa: les mete el ñame en la boca a la fuerza y,
cuando se resisten, **los agarra del cuello y los pisa en la garganta**. El joven le tira la lanza a la
espalda y suena **«zau»**, como cuando se entierra una punta en un ñame; ella no siente dolor. La
sepultura es **río abajo**, el bejuco aparece **meses después** y sus hojas se marchitan, **las mujeres**
son quienes cavan alrededor, y el relato cierra con **«cuando Ewandam nos creó no había ñame»**.
También se recuperaron los objetos: el cargador a la espalda, la olla de barro, el **arjiu**, las hojas
de plátano.

---

## 4. Los nombres que faltaban

Antes: 1 de 5 fichas nombraba a alguien. Ahora, las cinco.

| Persona | Papel | Dónde y cuándo |
|---|---|---|
| **Urelia** y **Salomón** | narran la historieta de la creación | río Curiche, Juradó; cartilla CNMH 2023 |
| **Esmeralda Carpio** | describe la rogativa; hija de Salomón y Urelia; casada con Eliseo Membache | nacida en la quebrada Balsalito, Juradó; vive en Santa Teresita, resguardo Juradó |
| **Mariano Membache** | benkhuun; en su casa se hacen hoy las rogativas | entrevista CNMH, Juradó, **agosto de 2019**; abuelo Salomón Carpio, padre Eleazar Membache, madre Domitila Carpio; retorno en 2015 |
| **Domitila Carpio** | enseñó a tejer a Esmeralda | Curiche |
| **Luis José Conquista** | conserva el saber de fabricar flautas y tamboras | retornado a Santa Marta de Curiche |
| **María Eugenia González Vélez** | investigadora del CNMH | cartilla 2023 |
| **César Romero** | fotógrafo del CNMH | Curiche, 2019 |
| **Celso Piña** | narra la creación del weguer | Escuela Centro Indígena La Unión de Pichimá, Litoral del San Juan |
| **Juan Perdiz** | narra Madre Ñame en woun meu | Puerto Pizario, río San Juan, **2005** |
| **Hernán Sánchez** y **M. Málaga** | recogen el relato | Universidad del Valle, Cali, 2005, con hogares comunitarios del ICBF |
| **Lívia Mathias Simão** | publica y analiza el texto | Psicologia USP, 2016; trabajo de campo del laboratorio de la USP en 2014 |
| **Diego Upúa** | narra el texto tradicional analizado por Murillo | Darién, Panamá (marcado como panameño) |

Lugares concretos incorporados: playa **Baaur Do Mos** (río Sábalo / Baudó), casa ceremonial
**Dichardí**, quebrada **Balsalito**, **Santa Teresita** (resguardo Juradó), **Barrancón**, río
**Truandó**, **Pichimá**, **Docordó**, **Litoral del San Juan**, **Puerto Pizario**, **Dichardí Wounaan**
(resguardo Nussí Purrú).

---

## 5. Wounaan ≠ emberá: dónde se marcó

- **Pardo Rojas 1986** (Karagabí y Tutruicá, alto Baudó) va etiquetado como emberá en la propia cadena
  de la fuente y en el texto de cada ficha que lo usa.
- **Vasco Uribe 2001** trata a embera y waunaan juntos; la escena de curación con jagua que describe
  es emberá y así se dice.
- La nota de Artesanías de Colombia sobre la barca **usa vocabulario emberá** (jaibaná, jai) para un
  objeto que presenta como wounaan. Se conserva la fuente y se señala el préstamo.
- Sobre benkhuun/jaibaná hay **cuatro posiciones incompatibles** y ninguna se impuso: la cartilla los
  separa por pueblo, el Ministerio de Cultura los separa por oficio **dentro** del pueblo Wounaan
  (Bên'kunn = médicos tradicionales, Jaibanás = pensadores), Mariano Membache dice que benkhuun,
  jaibaná y plantas «son uno», y Artesanías usa sólo el término emberá.

---

## 6. Circularidad

Al buscar en abierto «Ewandam», «Dosat» o «Maach Aai», **mitosdecolombia.com y su espejo en Vercel
aparecen entre los primeros resultados**. Ninguna afirmación de estas cinco fichas se apoya en esas
páginas; todas se apoyan en documentos descargados y leídos. Queda anotado en `dudas` de las cinco.

---

## 7. Lo que no se pudo resolver

- **Grafía del narrador del weguer**: «Celso Piña» (portal abierto) frente a «Celso Peña» (módulo).
  El impreso de 2001 que lo fijaría está en el repositorio Cendar, que no sirve el PDF.
- **Fecha y lugar de la narración de Celso Piña**: la fuente sólo dice dónde enseña. El «diciembre de
  2000» del módulo no está respaldado por la página abierta.
- **Maach Aai frente a Ewandam**: la cartilla se contradice dentro de una misma doble página (la
  columna en woun meu glosa a Maach Aai como Ẽwandam; la española separa padre e hijo y escribe
  «Ewadam» y «Edawan» en viñetas contiguas).
- **Lucena Salmoral 1962**: escaneo sin capa de texto; no hay `tesseract` ni `ocrmypdf` en esta máquina
  y no se usó OpenAI. Es la deuda de investigación más clara para una próxima vuelta: ahí puede haber
  una descripción de primera mano de la fiesta religiosa waunana del bajo San Juan.
- **Plan de vida de CAMAWA (2004/2005)**: citado por el Ministerio de Cultura y por la bibliografía,
  sin copia abierta localizable. El espejo de studylib está caído.
- **Plan de Salvaguarda Étnico del Pueblo Wounaan**: citado por el Ministerio de Cultura; el enlace
  del SIIC del Ministerio del Interior devuelve 404.
- **«páchaidáma»**: no se pudo confirmar la grafía en ninguna obra lingüística sobre woun meu.
- **«Maach Hi»** y las tres rogativas nombradas: sólo en la caracterización ministerial, sin fuente
  primaria ni localidad.

---

## 8. Contrato editorial — verificación

| slug | mito | historia | versiones | similitudes | lección | fuentes | dudas |
|---|---|---|---|---|---|---|---|
| las-manos-de-barro | 430 | 391 | 301 | 244 | 14 | 8 | 7 |
| la-sal-del-weguer | 429 | 408 | 330 | 245 | 17 | 8 | 7 |
| la-barca-de-dos-tintas | 437 | 409 | 331 | 248 | 15 | 8 | 7 |
| el-baston-de-sueno | 444 | 367 | 323 | 265 | 16 | 8 | 8 |
| madre-name | 419 | 360 | 333 | 263 | 12 | 8 | 8 |

Rangos exigidos: mito 300-650, historia 220-600, versiones 170-550, similitudes 150-450, lección 8-22
palabras en una sola frase. Las cinco lecciones son afirmaciones, sin nombres propios y sin imperativo.
Cada `similitudes` trae al menos dos paralelos documentados, y los emberá van marcados como emberá.
