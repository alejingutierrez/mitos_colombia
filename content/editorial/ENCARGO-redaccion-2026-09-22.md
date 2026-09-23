# Encargo común · redacción de un ciclo del bloque (R2-R4) · 2026-09-22

Lo lee cada agente de redacción de los carriles C4 y C5. Su mensaje le dice qué
ciclo, qué carpeta (`<carpeta>`), qué módulos y qué slugs le tocan; todo lo
demás está aquí. Donde aquí dice `<carpeta>`, pon la de tu mensaje.

## Límites

- Trabajas en `/Users/alegut/MyApps/Personal/mitos_colombia/.claude/worktrees/enriquecimiento-mitos-mestizos-99b035`.
  No hagas `cd` a otra carpeta ni a otro worktree.
- **No toques git, ni Neon, ni los módulos de `editorial/`, ni ningún script
  de aplicación.** Sólo escribes en `content/editorial/<carpeta>/`.
- Sin herramientas de navegador. Para abrir URLs: `curl -sSL -A 'Mozilla/5.0
  (Macintosh; Intel Mac OS X 14_0) AppleWebKit/537.36 Chrome/128.0 Safari/537.36'`,
  WebFetch o WebSearch. Para un PDF: `curl … | pdftotext -layout - <archivo>.txt`
  y guarda **sólo el texto** en `content/editorial/<carpeta>/primarias/`.
- **Regla de supervivencia:** un agente que pasa 10 minutos sin escribir en disco
  muere y se pierde todo. Escribe cada archivo en cuanto lo tengas, en este
  orden: acta, relato, fuentes.

## Lo que tienes que leer antes

1. `docs/brief-mestizos-y-mixtos.md` entero: es el contrato.
2. `docs/spec-mestizos-y-mixtos.md` §4 (fuentes) y §5 (reescritura).
3. `content/editorial/<carpeta>/busqueda-2026-09-22/BIBLIOGRAFIA.md`:
   la cantera del ciclo, ya verificada. Su «REPARTO REAL» dice de qué obra y
   página sale cada slug, y su sección de decisiones qué no hay que tomar.
4. Los primarios extraídos en `content/editorial/<carpeta>/primarias/`
   (ver su `LEEME.md`). **Antes de dar algo por perdido, busca con `grep -ril`
   en todos los `content/editorial/*/primarias/` del repo**: dos veces se dio
   algo por inexistente y estaba en otro tomo.
5. La ficha publicada de cada slug, en su módulo de `editorial/`. Léela para
   saber qué hay que corregir, no para copiarla.
6. Modelos de calidad ya publicados: `content/editorial/caribe-mestizo-final/`
   (`al-convento`) y `content/editorial/orinoquia-amazonas/` (actas, reescrituras
   y fuentes del 2026-09-22).

## Paso 1 · Acta · `content/editorial/<carpeta>/actas-2026-09-22/<slug>.json`

Formato del brief, paso 2: `registro` (obra, autor, anio, paginas, url,
narrador, lugar, fecha_de_recoleccion), `nudos` (cada hecho con `hecho`,
`fuente` con página o posición del relato, y `literal`: **cita textual exacta
copiada del texto extraído**), `fuera` (lo que se quita de la ficha publicada y
por qué) y `clasificacion` (`por_que_mestizo` o por qué «mixto», con fuente, y
`propuesta`: mestizo | mixto | mover a <comunidad> | sin decidir).

**Si ninguna obra consultable contiene el relato**, el acta se escribe igual,
pero bloqueada: `"bloqueada": true`, `"por_que_bloqueada"` (qué abriste y qué
encontraste), `"nudos": []`, `"pendiente"` (qué la desbloquearía) y
`"clasificacion": {"propuesta": "sin decidir"}`. **Es un resultado válido.** No
se escribe relato para una ficha bloqueada.

Valida con:
`node scripts/editorial/enriquecimiento/validar-acta.mjs --ciclo=<carpeta> --fecha=2026-09-22`
y mira sólo las líneas de tus slugs.

## Paso 2 · Relato · `content/editorial/<carpeta>/reescritura-2026-09-22/<slug>.json`

`{ "slug", "titulo", "mito", "historia", "versiones", "leccion", "similitudes", "dudas" }`

- `mito` 300-650 palabras, **sólo la historia**. Prohibidas en el `mito`:
  cronista, recopilad-, registro, informante, «la fuente», versión, «el
  relato», «la narración», «el cuento», «la tradición», «la ficha», editorial,
  antropólog-, etnógraf-, mitología, y los apellidos de los autores. Si el
  primario es tan breve que llegar a 300 exigiría inventar, declara
  `"relato_corto": "<razón>"` (piso de 70).
- `historia` 220-600: de dónde sale este relato —obra, año, página o posición,
  narrador y lugar cuando la fuente los dé— y, si es mixto, quién dice que
  mezcla tradiciones.
- `versiones` 170-550: en qué difieren los registros y quién dice cada cosa.
  **Ningún campo publicable habla del proyecto ni de la ficha anterior**
  («la ficha publicada decía», «se corrige», «esta página»): lo que corriges
  respecto de lo publicado va a `dudas` y al campo `fuera` del acta.
- `similitudes` 150-450, con al menos dos paralelos documentados.
- `leccion`: **una** oración de 8-22 palabras, sin nombres propios, sin
  «debemos» ni «hay que», sin punto y coma.
- Sin markdown. Sin fórmulas («cuenta la leyenda que», «desde tiempos
  inmemoriales», «misterio ancestral»…). Nunca declares carencias en el texto
  publicado: van en `dudas`. Ninguna oración de siete o más palabras repetida
  de otra ficha del ciclo.
- **No inventes nombres, parentescos, fechas, cifras ni lugares.** Cada nombre
  propio, año o cifra del `mito` tiene que estar en un nudo del acta.

Valida con `… validar-acta.mjs --ciclo=<carpeta> --fecha=2026-09-22 --con-relato`
y corrige lo que marque en tus slugs.

## Paso 3 · Fuentes · `content/editorial/<carpeta>/fuentes-2026-09-22/<slug>.json`

`{ "slug", "fuentes": [ { "title", "author", "year", "type", "url", "summary", "limitation" } ] }`

- **Mínimo 8, meta 12.** Las tres primeras son las clave; la primera es el
  primario.
- `summary`: qué dice esa obra **sobre este relato**. `limitation`: hasta dónde
  llega (es venezolana, es de otro municipio, es reelaboración literaria, sólo
  se consultó su ficha…).
- **Abre cada URL y confirma que dice lo que afirmas.** Un 200 no basta. Un 503
  de Dialnet es límite de peticiones, no una caída.
- Vetadas: Scribd, docslib, 1library, academia.edu, ResearchGate, WorldCat,
  Google Books, Open Library, CiNii, Wikipedia como clave, blogs de turismo,
  agregadores de leyendas, mitosdecolombia.com y sus espejos. Si un resultado
  reproduce el texto del sitio, no es fuente.
- SciELO Colombia sólo publica por http: se admite si el `limitation` dice
  literalmente «sólo publica por http».
- Si no llegas a 8 sin rellenar, escribe las que haya y añade
  `"agotado": "<qué buscaste y dónde>"`.

## Al terminar

Responde con: qué primario usaste para cada slug, si alguna quedó bloqueada y
por qué, los conteos de palabras, fuentes por ficha, qué corregiste respecto
de lo publicado, y las decisiones editoriales que veas (cambios de cajón,
títulos que la fuente no da, duplicados). No las tomes tú: anótalas.

## Si el reparto dice «sin rastro»

La ficha no se redacta: se escribe su acta bloqueada, con lo que buscaste y lo
que la desbloquearía. Antes, un último cruce con `grep -ril` en todos los
`content/editorial/*/primarias/` del repo.

## El bestiario de 2004

*Cuentos de espantos y otros seres fantásticos del folclor colombiano* (Casa
Editorial El Tiempo / Universidad Autónoma de Colombia, 2004, en archive.org)
es el único registro abierto de muchas fichas de estos ciclos, y **se declara a
sí mismo «material de ficción… documentos imaginarios»**. Criterio, el mismo con
que se publicaron `la-bruja-del-tranvia` y `la-monja-de-las-rosas` en Bogotá:

- se usa como registro, pero **como ficción de autor declarada**: la `historia`
  lo dice con esas palabras, y sus marcos inventados —cartas, recortes de
  prensa, diarios, fichas técnicas, personajes con nombre— se cuentan como
  composición del libro, **nunca como hechos**;
- si hay un registro folclórico independiente (Villa Posse, Ocampo, Devia,
  Vélez, prensa), ése manda y el libro de 2004 va a `versiones`;
- si el libro no trae la figura y no hay otro registro, la ficha se bloquea.
