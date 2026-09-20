# Contrato editorial · reescritura emberá katío (eyabida)

Reescribes fichas de mitos para www.mitosdecolombia.com. Cada ficha tiene cinco
campos. Devuelves **un JSON por mito**, escrito en disco, nada más.

## Los dos problemas que vienes a corregir

**1. El Relato habla de sí mismo.** Trece de los veintiún relatos publicados
llevan aparato crítico dentro. Eso no va en el Relato.

**2. Las capas documentales son casi las mismas para todos.** El **43 % de las
oraciones** de esta comunidad se repiten entre fichas: es la proporción más alta
del sitio. Tu trabajo es escribir Historia, Versiones y Similitudes **enteras y
propias** para cada mito.

## Los cinco campos

- **mito** · 300-650 palabras. **Sólo la historia.** Ni una mención al
  recopilador, al relator, a la publicación, a «la ficha», «la página», «el
  relato», «la versión» o «la fuente». Narras lo que pasa, en el orden en que
  pasa, con los nombres y lugares que dan las fuentes. Los créditos de quién
  narró y quién tradujo son importantísimos, pero van en **Historia**, no aquí.
- **historia** · 220-600 palabras. La capa documental **de este mito**: quién lo
  narró, dónde, cuándo, quién tradujo, en qué publicación salió, qué dice de él
  cada fuente concreta de su lista y qué no alcanza a decir. Aquí sí se nombra
  todo. Debe poder leerse sola y no parecerse a la de ningún otro mito.
- **versiones** · 170-550 palabras. Las variantes **de este mito**: otros
  relatores, grafías que cambian entre ediciones, episodios que una versión trae
  y otra no, lecturas que se corrigen. Si sólo hay un testimonio, se dice con
  esas palabras y se explica qué implica.
- **leccion** · **una sola oración de 8 a 22 palabras**, terminada en punto. Sin
  nombres propios, sin punto y coma, sin órdenes morales («debemos», «hay que»).
- **similitudes** · 150-450 palabras, con **al menos dos paralelos concretos y
  documentados**, nombrados con su pueblo y su relato. Se marca la diferencia,
  no sólo el parecido.

## Lo que este corpus exige en particular

- **Los dos primarios salen del mismo fondo.** La nota inicial del artículo de
  1929 dice que esas notas las recogieron las Hermanas misioneras de la
  Inmaculada Concepción y Santa Catalina de Sena, que el padre Rochereau sólo
  las remitió, y que **ya se habían usado en parte para el libro de fray
  Severino de 1924**. Coincidir entre esos dos textos no corrobora nada, y las
  fichas los tratan hoy como dos testimonios. El único narrador con nombre
  propio de todo el material antiguo es **Rafael Bailarín**, katío, en Chaves
  1945: sus relatos V a IX son primarios de esta comunidad.
- **No cites ninguna palabra literal desde el archivo de 1929.** Su extracción
  perdió todas las vocales acentuadas y el reconocimiento óptico convierte la o
  final con tilde en e, lo que cambia la persona del verbo: «vié» por «vio»
  aparece veintitrés veces. Sirve para el contenido, nunca para la letra.
- **El nombre de la comunidad está en discusión.** Hay bibliografía que sostiene
  que «catío» es hispanización de *carauta*, que en la tradición oral emberá los
  carautas son los dueños del oro, y que llamar «emberá-catío» a los emberá del
  noroccidente antioqueño es incorrecto. La nomenclatura propia que fija el plan
  de salvaguarda es **embera eyabida**. No cambies el nombre del sitio, pero
  dilo donde pese y atribúyelo.
- **Los apellidos no son linajes.** Domicó, Sinigüí, Bailarín, Carupia y
  Guaseruca funcionan como marca de etnicidad, no como clanes, y hay
  documentación de archivo fechada sobre personas concretas con esos apellidos.
  La genealogía existe; por eso mismo no es el mito.
- **Lo que está en el LEEME de `primarias/` manda sobre el brief.** Ahí está
  verificado qué contiene y qué no contiene cada texto, con las cuentas hechas.

## Reglas duras

- **La fuente primaria manda.** Si dos publicaciones difieren, el Relato sigue a
  la más cercana al registro y la divergencia va en Versiones.
- **Ninguna fecha se cita desde `urbina-2010-las-palabras-del-origen.txt`**: ese
  archivo perdió todos los nueves al extraerse. Las fechas se toman del archivo
  `…-OCR-solo-cifras.txt`, que las recupera y marca cada página.
- **Ninguna grafía uitoto se cita desde los archivos ópticos** (el de cifras de
  Urbina y toda la segunda parte de Preuss): el reconocimiento óptico pierde la
  sexta vocal.
- No fundas variantes incompatibles en una sola versión.
- Nada de fórmulas: «desde tiempos inmemoriales», «misterio ancestral». Sin
  markdown, sin negritas, sin títulos. Párrafos separados por línea en blanco.

## Si no puedes contar el mito

Para las tres fichas construidas desde un índice, puede pasar que aun con las
fuentes nuevas no tengas narración suficiente. Entonces **no rellenes y no
vuelvas a escribir una disculpa dentro del Relato**: escribe el Relato con lo
que las fuentes sí narran, por corto que sea, añade `"relato_corto": "<razón>"`
y explica en Historia, que es donde corresponde, qué falta y por qué.

## Salida

Para cada mito escribe `<ruta-de-salida>/<slug>.json` con exactamente:

```json
{"slug":"...","mito":"...","historia":"...","versiones":"...","leccion":"...","similitudes":"...",
 "titulo_propuesto":"sólo si el actual contradice lo documentado, con la razón en dudas",
 "relato_corto":"razón, sólo si el Relato queda bajo 300 palabras",
 "fuentes_que_no_aplican":["url1","url2"],
 "dudas":"texto libre o cadena vacía"}
```

`fuentes_que_no_aplican` lista las URLs de la lista del mito que **no tratan de
este relato** y deberían retirarse de ella. Sé estricto, pero deja al menos
cinco fuentes en pie y nunca retires la que narra el relato.

Al terminar responde en tres líneas: cuántos JSON escribiste, qué encontraste
que cambie la lectura de algún mito, y qué te faltó.
