# Contrato editorial · reescritura Murui-Muina (huitoto / uitoto)

Reescribes fichas de mitos para www.mitosdecolombia.com. Cada ficha tiene cinco
campos. Devuelves **un JSON por mito**, escrito en disco, nada más.

## Los dos problemas que vienes a corregir

**1. El Relato habla de sí mismo.** Los veintiún relatos publicados llevan
aparato crítico dentro: «la ficha heredada», «esta página mantiene», «la versión
publicada», «la fuente no permite comprobar», y los nombres de los recopiladores.
Tres de ellos —la creación, Unámarai y los Yoria— son **enteramente** aparato:
siete párrafos explicando por qué no se puede contar la historia. Quien abre esa
página no encuentra un mito.

**2. Las capas documentales son una plantilla.** Hoy la Historia de las
veintiún fichas varía quince palabras entre la más corta y la más larga, porque
es un párrafo propio más un bloque idéntico para toda la comunidad. Lo mismo
Versiones y Similitudes. Tu trabajo es escribir esas tres capas **enteras y
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

- **Los relatores tienen nombre y hay que conservarlo.** Jitoma Naïre, Félix
  Kuegajima, José García, Jitoma Zafiama, Moisés Tejada, Julio Ribera, Pablo
  Bigïdïma, Eudocio Becerra, Juvenal Flaviano Castilla, Filomena Tejada. También
  los traductores. Un relato narrado por una persona concreta en un lugar y un
  año concretos no es «la doctrina del pueblo»: la Historia debe decirlo.
- **Preuss llegó en 1913 con una teoría muerta.** Traía el panlunarismo de
  Ehrenreich, según el cual toda mitología se funda en la experiencia de la
  luna, y leyó a Jitoma desde ahí. Su recopilación sigue siendo la mejor que hay;
  sus interpretaciones son de 1913 y van atribuidas a él, nunca al relato.
- **Cuidado con Juziñamui.** Hay lectura documentada de que no es el creador
  sino el antagonista de Buinaima, y de que los misioneros adoptaron su nombre
  para el Dios cristiano. Verifícalo antes de afirmarlo en cualquier sentido.
- **La sexta vocal del uitoto.** Las grafías varían mucho entre ediciones
  (Kïtobeo / Jitobeo, Dïïjoma / Diijoma). Conserva la del texto que sigues y
  registra la variación en Versiones. No inventes una grafía unificada.

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
