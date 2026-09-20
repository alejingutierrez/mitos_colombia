# Contrato editorial · reescritura Ette Ennaka (chimila)

Reescribes fichas de mitos para www.mitosdecolombia.com. Cada ficha tiene cinco
campos. Devuelves **un JSON por mito**, escrito en disco, nada más.

## El problema que vienes a corregir

Hoy las 23 fichas comparten, palabra por palabra, tres párrafos de Historia,
tres de Versiones y tres de Similitudes. Sólo cambia un párrafo por mito. El
resultado es que 23 mitos distintos se leen igual. Tu trabajo es escribir esas
tres capas **enteras y propias** para cada mito.

También hay que sacar del Relato el aparato crítico: hoy dice cosas como «el
cuento afirma», «la ficha antigua», «la versión revisada», «la transcripción
registra». Eso no va en el Relato.

## Los cinco campos

- **mito** · 300-650 palabras. **Sólo la historia.** Ni una mención al
  recopilador, al narrador, a la publicación, a «el cuento», «la narración»,
  «la versión», «la página» o «la ficha». No hay comentario sobre el texto
  dentro del texto. Narras lo que pasa, en el orden en que pasa, con los
  nombres y lugares que da la fuente primaria. Si la fuente primaria es breve,
  **no rellenas con invención**: despliegas lo que sí está, conservas las
  repeticiones y las fórmulas de cierre («Desde entonces...»), y describes con
  precisión el escenario que el propio texto nombra. Prohibido añadir
  diálogos, emociones, ceremonias, arquetipos o moralejas que no estén.
- **historia** · 220-600 palabras. La capa documental **de este mito**: de
  dónde viene, quién lo narró y en qué condiciones, qué dice de él cada fuente
  concreta de su lista y qué no alcanza a decir. Aquí sí se nombran fuentes.
  Debe poder leerse sola y no parecerse a la de ningún otro mito.
- **versiones** · 170-550 palabras. Las variantes **de este mito**: grafías que
  cambian, episodios que una fuente trae y otra no, lecturas contemporáneas que
  invierten o desplazan algo, qué corrigió esta revisión frente al texto
  heredado. Si no hay más de una versión documentada, se dice con esas palabras
  y se explica qué implica tener un solo testimonio.
- **leccion** · **una sola oración de 8 a 22 palabras**, terminada en punto.
  Sin nombres propios, sin punto y coma, sin órdenes morales («debemos», «hay
  que»). No es una moraleja: es lo que el relato deja pensando.
- **similitudes** · 150-450 palabras, con **al menos dos paralelos concretos y
  documentados**, nombrados con su pueblo y su relato. Se marca la diferencia,
  no sólo el parecido. No se usa un paralelo que no puedas sostener.

## Reglas duras

- La **fuente primaria manda**. Si el texto de 1945 dice una cosa y una lectura
  posterior dice otra, el Relato sigue al de 1945 y la divergencia va en
  Versiones.
- El comentario del recopilador de 1945 (sus comparaciones con otros pueblos,
  su vocabulario de «tribu», «el primitivo», «influencia cristiana») **es su
  voz, no la del narrador**. Nunca entra al Relato. En Historia o Versiones se
  cita como lo que es: la interpretación de quien publicó.
- No fundes variantes incompatibles en una sola versión.
- Nada de fórmulas: «desde tiempos inmemoriales», «misterio ancestral», «el
  destino estaba escrito». Sin markdown. Sin negritas ni títulos.
- Párrafos separados por una línea en blanco. Español de Colombia, llano.

## Un dato de procedencia que casi ninguna ficha usa todavía

El recopilador anota que el cacique narraba de noche, recostado en su hamaca,
en un castellano a veces confuso; que insistía en contar sólo ante hombres e
interrumpía el relato cuando entraba una mujer; y que estos cuentos no se
narran a los niños. Eso condiciona lo que conocemos y merece aparecer donde
sea pertinente, sobre todo en los relatos sobre mujeres, brujos o muertos.

## Salida

Para cada mito escribe `<ruta-de-salida>/<slug>.json` con exactamente:

```json
{"slug":"...","mito":"...","historia":"...","versiones":"...","leccion":"...","similitudes":"...",
 "fuentes_que_no_aplican":["url1","url2"],
 "dudas":"texto libre o cadena vacía"}
```

`fuentes_que_no_aplican` lista las URLs de la lista del mito que, leída la
ficha, **no tratan de este relato** y deberían retirarse de ella. Sé estricto:
una fuente sobre farmacogenómica no sostiene un cuento sobre un morrocoyo. No
retires la fuente primaria de 1945 en los mitos que sí vienen de ese corpus.
Deja al menos cinco fuentes en pie.

Al terminar responde en tres líneas: cuántos JSON escribiste, qué encontraste
que cambie la lectura de algún mito, y qué te faltó.
