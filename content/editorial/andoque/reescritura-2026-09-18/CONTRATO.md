# Contrato de reescritura · andoque · 2026-09-18

## Lo que se encontró

Catorce fichas, siete URLs, las mismas para las catorce. De esas siete, **una
sola contiene narración andoque**: el PDF del artículo de 1981 en Dialnet. Las
demás son la portada de Google Books del libro de 1984, su ficha en Open
Library, un registro de metadatos de Minciencias, una caracterización del
Ministerio de Cultura, el sitio de la comunidad y una página del IGAC que
responde 404 y que estaba citada en las catorce.

Tres defectos estructurales, en orden de gravedad:

1. **Once fichas declaran como fuente narrativa la portada de Google Books.**
   En el módulo, `narrativeSource: "tradicionesGoogle"`, cuyo resumen dice por
   escrito: «el índice y los fragmentos consultables confirman los once títulos
   heredados». Once mitos se publicaron desde el índice de un libro.
2. **Plantilla compartida en tres campos.** `historyCore`, `versionCore` y
   `similarityCore` aportan un párrafo propio; detrás, el constructor pega tres
   o cuatro párrafos idénticos para las catorce fichas. Se nota en el preflight:
   Historia mide entre 249 y 258 palabras en los catorce mitos.
3. **Aparato editorial dentro del Relato.** `definitions.mjs` añade a cada
   `mito` un párrafo fijo de 96 palabras («Esta reconstrucción mantiene la
   secuencia documentada…»). Es casi un tercio de cada Relato y no es la
   historia: es una nota metodológica.

## Lo que exige el primario

`content/editorial/andoque/primarias/` (ver su `LEEME.md`). El artículo de 1981
transcribe, numerado párrafo a párrafo, el primer ciclo de fundación en cuatro
secciones —A, B, C y D—, recogido en Aduche y narrado por **el capitán Yiñeko,
del linaje de las Águilas**, y por **Yiñefoque**. Ninguna de las tres fichas que
salen de ahí los nombra.

La sección **C, «Los huerfanitos»** —el padre que se va bajo tierra y vuelve
convertido en coca, Sindi el Trueno-carnívoro que anuncia la creciente, el
nacimiento del mambeadero— **no está publicada en ninguna parte del sitio**. La
ficha del diluvio salta de la cacería del pajuil a los huesos en el río, de modo
que los huérfanos aparecen sin que se sepa quiénes son.

## Reglas de esta pasada

**La reescritura mejora la escritura con lo que hay.** No se declara en el texto
publicado que no se encontró más, ni que una vista sea fragmentaria, ni que el
límite se declare. Esas advertencias son del expediente, no de la página. Lo que
se publica se sostiene sobre las fuentes verificadas y se escribe bien.

- El Relato cuenta la historia y nada más: sin «según Landaburu», sin «la
  monografía sitúa», sin declaraciones de método, sin el párrafo de descargo que
  el constructor pegaba dentro de los catorce.
- El contenido heredado no se tira: se conserva lo que cuenta y se reescribe la
  prosa. Lo que las fuentes verificadas permiten precisar, se precisa. Lo que no
  respalda ninguna fuente no se amplía ni se adorna, pero tampoco se anuncia.
- Historia y Versiones dicen lo que sí se sabe: quién narró, dónde, cuándo, qué
  dicen las notas, qué variantes hay. No son un informe sobre la búsqueda.
- Nombres y topónimos como los traen los primarios: Sitio-de-llanto,
  Remanso-de-trueno, río Duché, Loma de los Andoques, piedra tetee,
  Canoa-de-opái, Doña Cucarrón-de-vida, /di-iehe/ «gente quemadora».
- La ortografía andoque sale del OCR, nunca de la extracción nativa; las cifras
  y la numeración de párrafos, al revés.
- Similitudes nombra paralelos que una fuente citada sostenga. Un paralelo sin
  fuente es el defecto que esta pasada viene a quitar, no a repetir.
- Rangos: Relato 300-650 palabras, Historia 220-600, Versiones 170-550, Lección
  una sola frase de 8 a 22 palabras sin nombres propios, Similitudes 150-450.
