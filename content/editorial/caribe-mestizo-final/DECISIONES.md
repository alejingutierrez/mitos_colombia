# Decisiones editoriales · ciclo `caribe-mestizo-final`

Ninguna se toma sola: se presentan al director con tres opciones concretas y
nada se publica hasta que responde (brief, «Notas para quien orquesta»).

---

## Resueltas el 2026-09-19

Las cuatro primeras las decidió el director; las dos últimas se resolvieron por
reglas que ya existen en la metodología y quedan aquí por constancia.

### A · Los tres subciclos son uno → **fundir los tres**

`zapata` (15), `list` (3) y `unresolved` (13) salen del mismo libro: Zapata
Olivella, *Tradición oral y conducta en Córdoba* (Incora 1972; 3.ª ed.
Univalle 2021), «Género: cuento y leyenda», pp. 237-267.

**Decisión:** un solo subciclo, `zapata-cordoba-1972`. Los tres cuentos que
George List también grabó entran como capa de `versiones`, con su narrador,
su fecha y su cinta. Con `tio-conejo-zapatero` (decisión D) son **32 fichas**.

Se descartó dejar `list` aparte pese a que es el único registro con narrador
nombrado: esa diferencia de calidad se cuenta en `versiones`, que es donde
vive, y no justifica partir un corpus que la evidencia muestra unido.

### B · `conejo-y-los-hijos-de-tia-tigra`: cinco o siete → **las dos**

El límite publicado dice que List «registra siete hijos, no cinco como decía la
versión heredada», dando por corregido un dato que estaba bien: Zapata dice
cinco y List dice siete, **y las dos cifras son correctas, cada una en su
fuente**.

**Decisión:** se retira el límite y la doble cifra pasa a `versiones`, con
quién dice qué. Es la regla 3 del brief —si dos fuentes se contradicen, no se
funden— y no hacía falta consultarla.

### C · `este-era-un-joven-que-estaba-estudiando` → **corregir título y slug**

La fuente dice «**Esta era una joven** que estaba estudiando», es una interna
en un colegio de monjas, y **la «Clara» de la ficha no aparece en el texto**.

**Decisión:** título y slug pasan a la forma de la fuente y se borra a Clara.
Es un nombre propio inventado, justo lo que la licencia literaria prohíbe, y
eso pesa más que la redirección de URL que cuesta.

### D · `tio-conejo-zapatero` → **a Zapata; Buenaventura, recepción**

Está en el libro de 1972, p. 261, **con su localización en Cotorra escrita
dentro del propio relato** («Para el Sábado de Gloria en Cotorra»). El límite
publicado dice que Cotorra «sigue sin fuente exacta»: la tiene.

**Decisión:** el primario pasa a ser el libro; la adaptación teatral de Enrique
Buenaventura (1958) queda citada como recepción posterior en `versiones`. El
subciclo `buenaventura` se queda vacío.

### E · Los tres microrrelatos → **excepción de relato corto declarada**

`tio-sapo-y-cangrejo` (dos frases, y el libro lo imprime dos veces idéntico, en
las pp. 251 y 266), `este-era-un-rey-que-tenia-dos-hijas-bonitas` y
`veinte-para-el-bollo` (cinco frases cada uno) no dan un relato de 300 palabras
sin inventar.

**Decisión:** se publican cortos, con `relatoCorto` y su razón escrita en el
módulo. El validador baja el piso a 90 palabras y la riqueza léxica prueba que
no hay relleno. El mecanismo ya existe y se usó en wayuu.

### F · Dos límites declarados que son falsos → **retirarlos**

`la-mina-de-oro-en-el-infierno` («no apareció una fuente que sostenga la
adscripción a Córdoba») y `el-paisa-y-el-gringo` («el propio escenario
contradice una procedencia cordobesa segura»). **Las dos salen del libro de
Córdoba**, y en la primera «Yo soy Jaime Restrepo, de Marinilla» es literal de
la fuente: el protagonista es antioqueño, la recolección es cordobesa, y eso
no es una contradicción.

**Decisión:** se retiran y se sustituyen por la procedencia real. Donde hay un
problema que sí merece declararse es en el estereotipo regional del chiste, no
en la procedencia.

---

## Abiertas

### G · Los once cuentos del mismo libro que no tienen ficha

«El montuno y el radio» (p. 247), «La muerte de Tía Zorra (Tercera versión)»
(255), «Un día estaba un caimán asoleándose» (257), «El diablo haciendo
palomitas» (257), «La receta» (257), «El burro y el puerco» (264), «El panadero
y el perro» (264), «El indio y el negro» (265), «Los ladrones» (265), «Tío
Conejo y Tío Gallo (Segunda versión)» (265) y «La misa del testamento» (266).

Está fuera del encargo —el alcance es reescribir lo publicado, no ampliarlo—
pero conviene decidirlo antes de cerrar el ciclo, porque el primario ya está
abierto y extraído y no volverá a salir tan barato.

① Publicarlos como fichas nuevas del mismo subciclo. ② Anotarlos en el módulo
como corpus conocido sin ficha, para cuando se quiera ampliar. ③ No hacer nada.

### H · El sitio higienizaba el material

Tres casos medidos: `la-vieja-el-burro-y-los-huevos` es un cuento de burros
apareándose y la descripción heredada lo vuelve un percance doméstico;
`el-burro-y-la-policia` es abiertamente obsceno y transcurre en la puerta de la
iglesia durante la misa; `la-confesion` es un cura rebautizando el cuerpo de
una muchacha con eufemismos.

Es la misma pregunta que apareció en wayuu con Pushaina y Mareiwa. No es una
decisión por ficha sino de criterio, y hay que tomarla antes de redactar.

① Contar lo que el cuento cuenta, sin explicitar, y declarar el registro en
`historia`. ② Mantener la higienización actual y decir en `dudas` que la fuente
es más cruda. ③ Caso por caso según el daño representado.
