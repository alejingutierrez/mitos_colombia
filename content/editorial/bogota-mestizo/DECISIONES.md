# Decisiones editoriales · ciclo Bogotá mestizo

Ninguna se toma sola: se presentan al director con tres opciones concretas y
nada se publica hasta que responde.

---

## Abiertas

### 0 · El libro de 2008 existe, sostiene DOCE fichas y nadie puede abrirlo

Identificado hasta la página: **Asdrúbal López Orozco, *Mitos y leyendas de
Bogotá: biografía*, Kingkolor, 2008, 107 pp., ISBN 978-958-8260-82-2**. Es
obra distinta de *Mitos y leyendas de Colombia* del mismo autor, que sí está
en Internet Archive pero sólo en préstamo.

La ficha Koha de Fe y Alegría trae **el índice completo con paginación**, y
ahí se ve que no sostiene cuatro fichas sino **doce de las dieciséis**: la
monja y el taxista (p. 4), los esqueletos caminantes (12), el ánima sola (18),
los fantasmas de La Candelaria (25), la Loca Margarita (30), Russi (44), el
venado de oro (51), el Loco Arias (56), el toro en el ascensor (59), el bobo
del tranvía (66), Monserrate (69) y la calle del Cartucho (84).

**No hay ejemplar digitalizado**: BibloRed, la Biblioteca Digital de Bogotá,
Internet Archive y la Biblioteca Nacional no lo tienen, y el CENDOC del IDPC
lleva días devolviendo 502. Dos fichas quedan bloqueadas por esto
—`la-monja-vidente-y-el-taxista` y `los-esqueletos-caminantes`—, con
`nudos: []` y «sin decidir», que es lo que el spec §8 prescribe. Las otras
diez se salvaron porque aparecieron registros mejores y anteriores.

① Conseguir el libro —está en Fe y Alegría y probablemente en la Luis Ángel
Arango— y desbloquear las dos. ② Publicarlas apoyadas sólo en lo que el
territorio sostiene, sin afirmar nada del relato. ③ Dejarlas bloqueadas y
dichas hasta que aparezca.


### B · La cadena que sale de un libro que nadie ha abierto

La biografía de maestra de Fusagasugá con el hijo asesinado no viene de
«perfiles posteriores», como decía el módulo: la Secretaría de Cultura la
acredita en cabecera —«Versión tomada de Asdrúbal López Orozco»—, igual que
Canal Capital acredita al Loco Arias. **Las dos fuentes que la matriz contaba
por separado son una sola cadena, y sale del libro de 2008 que nadie ha
abierto** y que sólo consta en dos fichas de catálogo.

① Tratar esa línea como una sola fuente, declarada como cadena de dos manos, y
no anclar en ella ningún hecho biográfico. ② Buscar el libro en la Biblioteca
Nacional antes de decidir. ③ Retirar la línea biográfica de las fichas hasta
que aparezca.

## Resueltas por el director, 2026-09-22

### A · resuelta ①: `la-loca-margarita`: el apellido del título no está en el registro

El único registro de época del ciclo es la crónica del **Magazín dominical de
El Espectador del domingo 20 de julio de 1924**, con la voz de la protagonista
en primera persona: hay narrador, lugar y fecha de recolección, que es más de
lo que tiene ninguna otra ficha bogotana.

**Pero en sus 2.170 palabras «Villaquirá» no aparece ni una vez.** El apellido
con que titulamos la ficha está sólo en el titular que el periódico puso a la
reedición de 2024. El único nombre que consta en el registro es el que ella
misma da: **«María Margarita Josefa Mogollón Leiva del Carmen y Santander»**.

① Dejar el slug —es URL indexada— y corregir el título visible a «Margarita,
la Loca Margarita», nombrando en `historia` el nombre completo que ella da y
declarando de dónde sale «Villaquirá». ② Corregir título y slug al nombre de
la fuente, con redirección. ③ Conservarlo todo y anotarlo en `dudas`.

**Resuelta: ①.** El slug se queda. El título visible pasa a «Margarita, la
Loca Margarita», y lo mismo el título SEO y la descripción. La `historia`
dice ahora de dónde sale el apellido: del titular de la reedición de 2024, no
de la crónica. «Villaquirá» se queda sólo como palabra clave de búsqueda,
porque así la busca la gente.

### C · resuelta ①: `el-bobo-del-tranvia` se queda sin registro

Para Antonín no hay nada: «Antonín» aparece **cero veces** en las 226 páginas
de la tesis sobre el tranvía que el módulo cita.

① Dejarla bloqueada y dicha, con `nudos: []` y «sin decidir», como se hizo con
las tres del Caribe hasta que apareció su fuente. ② Reescribirla sólo con lo
que el territorio sostiene —el tranvía, sus fechas, sus rutas— sin afirmar
nada del personaje. ③ Retirarla del ciclo.

---

**Resuelta: ①.** Se publica, y «Antonín» sale del título, del título SEO, de
la descripción y del extracto: el nombre no tiene registro. El Relato lo
conserva como lo que la divulgación distrital dice que la ciudad lo llamaba,
y la `historia` declara que no aparece en la tesis.

### Títulos de Monserrate, Russi y Arias · aceptados

«El Señor Caído de Monserrate», «José Raimundo Russi, el abogado en disputa»
y «Eduardo Arias, el Loco Arias». Los slugs no cambian.

### 0 y B · sin respuesta, y no frenan el ciclo

El libro de 2008 sigue sin ejemplar: las dos fichas que dependen sólo de él
quedan **bloqueadas y declaradas** (spec del cierre §4). Y la cadena de B ya
está escrita como una sola mano en las dos fichas afectadas, que es la
opción ①; si el director prefiere otra, se rehace.

## Resueltas por el cotejo, sin necesidad de consulta

Son correcciones de hecho, no criterio: la fuente dice una cosa y la ficha
decía otra.

- **El Mono de la Pila no es de 1775 ni está en el Museo Colonial.** Ibáñez lo
  atribuye al oidor Alonso Pérez de Salazar, que quitó el rollo y puso allí la
  fuente en los años 1580, y las tres fuentes de época —Ibáñez t. I p. 50 y
  t. II p. 203, De la Rosa p. 329— dicen **Museo Nacional**.
- **La discrepancia 1792-1796 del Puente del Común está resuelta en piedra.**
  Ibáñez transcribe la inscripción de las columnas: «SE CONSTRUYO ESTA OBRA DE
  EL PUENTE, Y SUS CAMELLONES EN 31 DE DICIEMBRE DE 1792», y se contradice a
  sí mismo cuatro párrafos antes. ICOMOS fecha además la declaratoria en el
  Decreto 1584 de 1975, no en 1967.
- **La Calle del Fantasma no es una aparición difusa: es un pacto diabólico
  completo**, con el ingeniero Alex Mogollón, el empedrado en una noche, la
  piedra que falta y las 665 piedras contadas, y con informante nombrada, doña
  Carmen Domínguez. Es el mismo relato que el Puente del Común a treinta
  kilómetros, y sustituye con ventaja a Fausto y a Ovidio en `similitudes`.
- Monsalve **no** identifica la Casaca Verde con ningún virrey; la Lavandera se
  llama Filomena; Baltazar no es un duende; el capítulo de Russi va de la p.
  173 a la 203 y no de la 178 a la 202; y las siete menciones del «Señor
  Caído» en De la Rosa hablan de una calle de Las Nieves, no del cerro.
