# Brief de redacción: mestizos y mixtos

Plantilla del encargo que se le pasa a cada agente. Se copia entera,
sustituyendo lo que va entre `<>`, y se le añade el diagnóstico de partida del
ciclo. El spec que lo gobierna es [`spec-mestizos-y-mixtos.md`](spec-mestizos-y-mixtos.md).

**Un agente por ciclo cuando el ciclo tiene ≤ 12 fichas. Si tiene más, se parte
por subciclo —por recopilador, por libro o por barrio—, nunca por lotes
arbitrarios de fichas: el reparto tiene que coincidir con una unidad real, o
vuelve la plantilla.**

---

## Plantilla

> Trabajas en `<ruta del worktree>`. No hagas `cd` al repo original. Es el
> catálogo www.mitosdecolombia.com.
>
> ### Encargo: investigar y reescribir las `<N>` fichas de `<ciclo>`
>
> Carpeta del módulo: `editorial/<ciclo>/`. Comunidad en Neon: `<mestizo|mixto>`,
> región `<región>`. Lee primero `editorial/<ciclo>/records.mjs` (o
> `definitions.mjs`) y `editorial/<ciclo>/sources.mjs`.
>
> Slugs: `<lista con títulos>`
>
> ### Lo que este corpus no es
>
> No es una comunidad indígena. No hay pueblo, ni territorio, ni autoridades, ni
> plan de vida, ni etnógrafo. «Mestizo» y «mixto» son cajones administrativos:
> dentro hay leyendas de una calle, espantos de una vereda y cuentos de río que
> no comparten nada entre sí salvo la etiqueta.
>
> Eso cambia dos cosas. **La unidad real es el ciclo** —un municipio, un
> recopilador, un libro— y es la que tienes delante. Y **la prensa local antigua
> sí es fuente aquí**, con condiciones, porque muchas veces es el registro más
> antiguo que existe de ese relato.
>
> ### Diagnóstico de partida
>
> `<pegar aquí la fila del diagnóstico: repetición, dispersión, urls/ficha,
> catálogo, narradores, aparato en el relato>`
>
> `<Y la lectura en una frase. Ejemplo para caribe: «Las setenta fichas
> comparten la misma historia y las mismas 113 palabras de similitudes, casi
> literales: el 86,6 % de sus oraciones se repiten. No hay que retocar: hay que
> rehacer.»>`
>
> ---
>
> ## Paso 1 · La bibliografía del ciclo, antes que nada
>
> **Esto se hace una vez y sirve para todas las fichas.** No empieces por el
> primer mito: empieza por el lugar y por quien recogió.
>
> Levanta y verifica:
>
> - **El recopilador y su obra.** Edición, año, páginas, dónde está digitalizada.
>   Si el ciclo sale de un libro, ese libro es el primer escalón y hay que
>   tenerlo abierto, no citado de oídas.
> - **El municipio.** Monografía municipal, historia local, catálogo de
>   patrimonio, archivo de la alcaldía, casa de la cultura, biblioteca pública.
> - **La academia regional.** Tesis de literatura, etnoliteratura o historia en
>   la universidad del departamento; el Boletín Cultural y Bibliográfico;
>   revistas universitarias regionales; la Academia de Historia departamental.
> - **La prensa de la época**, si la hay: hemeroteca de la Biblioteca Nacional,
>   Banrepcultural, archivos de periódicos regionales.
>
> Escribe el resultado en `content/editorial/<ciclo>/busqueda-<fecha>/BIBLIOGRAFIA.md`:
> cada obra con autor, año, edición, URL abierta y verificada, y una línea de
> qué aporta al ciclo. Ésa es la cantera de la que saldrán todas las fichas.
>
> ## Paso 2 · Un acta de procedencia por mito
>
> **Gate: sin acta no se redacta.** Una por mito, en
> `content/editorial/<ciclo>/actas-<fecha>/<slug>.json`:
>
> ```json
> {
>   "slug": "...",
>   "registro": {
>     "obra": "...", "autor": "...", "anio": 0, "paginas": "...",
>     "url": "https://...",
>     "narrador": "nombre, o null si la fuente no lo da",
>     "lugar": "vereda, corregimiento, municipio",
>     "fecha_de_recoleccion": "o null"
>   },
>   "nudos": [
>     { "hecho": "...", "fuente": "obra, p. N", "literal": "cita textual breve" }
>   ],
>   "fuera": [
>     { "elemento": "...", "por_que": "..." }
>   ],
>   "clasificacion": {
>     "por_que_mestizo": "argumento y fuente, o «sin sostener»",
>     "propuesta": "mestizo | mixto | mover a <comunidad> | sin decidir"
>   }
> }
> ```
>
> Tres cosas que el acta te obliga a hacer:
>
> - **`nudos`**: cada hecho que vaya a aparecer en el relato, anclado a una
>   página y con su cita literal breve. **Lo que no tiene nudo no se escribe.**
> - **`fuera`**: lo que quitas de la ficha heredada y por qué. En este corpus es
>   la mitad del trabajo: hay nombres propios, episodios y fechas que se
>   añadieron sin fuente.
> - **`clasificacion`**: si el mito está en el cajón correcto. Si es «mixto»,
>   ¿quién dice que mezcla tradiciones, y dónde? Si no lo sostiene nadie, dilo.
>   Ya pasó: una ficha catalogada como africana resultó ser un rumor amazónico
>   contemporáneo.
>
> ## Paso 3 · Escribir las fichas
>
> Una por mito, en `content/editorial/<ciclo>/reescritura-<fecha>/<slug>.json`:
>
> ```json
> {
>   "slug": "...", "titulo": "...", "mito": "...", "historia": "...",
>   "versiones": "...", "leccion": "...", "similitudes": "...",
>   "fuentes": ["Autor, «Título», publicación, año — URL"],
>   "dudas": ["..."],
>   "conteoPalabras": {"mito":0,"historia":0,"versiones":0,"similitudes":0,"leccion":0}
> }
> ```
>
> ### El contrato
>
> | campo | palabras | qué es |
> |---|---|---|
> | `mito` | 300-650 | **sólo la historia**. Ni una palabra sobre fuentes, recopiladores, ediciones o versiones |
> | `historia` | 220-600 | de dónde sale este relato: obra, año, páginas, y narrador y lugar cuando la fuente los dé |
> | `versiones` | 170-550 | en qué se diferencian los registros, con quién dice cada cosa |
> | `similitudes` | 150-450 | al menos dos paralelos documentados |
> | `leccion` | 8-22 | **una sola frase**, sin nombres propios, sin órdenes morales. Una afirmación, no un consejo |
>
> ### Las cuatro exigencias nuevas de este bloque
>
> **1. La `historia` de cada ficha cuenta su propio registro.** Es donde murió
> el lote anterior: setenta fichas con el mismo párrafo sobre la misma edición.
> Ninguna oración de siete palabras o más puede repetirse entre dos fichas del
> ciclo. Si diez salen del mismo libro, cada una dice su página, su capítulo o
> su variante, y qué trae esa obra **sobre ese relato**.
>
> **2. La prosa se mide.** Además de las tres pasadas de siempre —continuidad,
> economía, lectura en voz alta—:
>
> - ninguna ficha del ciclo abre con la misma estructura que otra;
> - riqueza léxica del `mito` (*type-token ratio*) ≥ 0,45;
> - adjetivos ≤ 8 % de los tokens del `mito`;
> - ninguna oración de más de 45 palabras, y la mediana entre 12 y 22.
>
> **3. Fórmulas prohibidas**, además de las de siempre: «cuenta la leyenda
> que», «dicen los abuelos que», «nadie sabe a ciencia cierta», «lo cierto es
> que», «desde tiempos inmemoriales», «un misterio ancestral», «sabiduría
> ancestral», «el destino estaba escrito».
>
> **4. Nunca declares carencia en el texto publicado.** Que no haya más
> versiones, que la fuente no diga quién narró, que no se encontrara nada más:
> todo eso va a `dudas`. La página no habla de sus propios límites.
>
> ### Lo que la licencia literaria permite y lo que no
>
> Permite ordenar escenas, comprimir el tiempo, trabajar el ritmo, crear
> transiciones y añadir detalle sensorial compatible con el entorno: el clima, el
> río, el oficio, la hora, los materiales.
>
> No permite inventar nombres propios, parentescos, fechas, oficios, topónimos ni
> certezas históricas. Si la fuente dice «una mujer», no se llama Rosalba.
>
> ## Paso 4 · Las fuentes, estructuradas
>
> Una por mito, en `content/editorial/<ciclo>/fuentes-<fecha>/<slug>.json`:
>
> ```json
> {
>   "slug": "...",
>   "fuentes": [
>     { "title": "...", "author": "...", "year": 0, "type": "...",
>       "url": "https://...", "summary": "...", "limitation": "..." }
>   ]
> }
> ```
>
> **Mínimo 8 por ficha, meta 12.** Aquí el piso es más alto que en el corpus
> indígena, y el corpus lo permite: para una leyenda urbana con cien años de
> circulación hay más material consultable que para un canto ceremonial.
>
> - **`summary`** dice qué trae esa obra **sobre ese mito**, no qué es la obra.
>   Si Villa Posse aparece en treinta fichas, son treinta resúmenes distintos.
>   Un `summary` que sirve para dos fichas está mal escrito en al menos una.
> - **`limitation`** es obligatorio y no se publica: es donde va que la obra es
>   una reelaboración literaria, que la prensa no tiene aparato, que sólo se
>   pudo consultar por su ficha institucional, que el texto es de otro
>   municipio, que la traducción pasó por dos lenguas.
> - **El orden importa**: las tres primeras salen publicadas como fuentes clave.
> - **Una obra = una URL canónica.** Si varias fichas la usan, se repite la
>   entrada con la URL idéntica y cambian `summary` y `limitation`.
> - **Prohibido rellenar.** Si el relato sólo sostiene seis, escribe seis y
>   declara `AGOTADO` en `dudas`, con lo que buscaste y dónde.
>
> ### La escalera de fuentes
>
> 1. **El registro que fija el relato** (obligatorio: sin esto el mito se
>    declara bloqueado): el libro o artículo del recopilador con su edición y
>    sus páginas; tesis que transcriban el relato; archivos de tradición oral de
>    casas de la cultura y bibliotecas municipales.
> 2. **El territorio y su historia**: monografías municipales, catálogos de
>    patrimonio, Boletín Cultural y Bibliográfico, revistas de universidades
>    regionales, academias de historia departamentales, archivos de alcaldía,
>    IDPC, planes especiales de salvaguardia.
> 3. **La prensa local, que aquí sí entra**, con tres condiciones: que esté
>    fechada y firmada o sea identificable por cabecera y fecha; que sea de la
>    época o del lugar; y que su `limitation` diga qué es. La prensa reciente
>    que sólo reempaqueta lo que ya circula **no entra**: el criterio es el
>    aporte, no la antigüedad.
> 4. **Comparativas**, sólo si `Similitudes` nombra ese paralelo concreto. El
>    mejor paralelo de este corpus no es Ovidio: es **el mismo motivo en otro
>    municipio del mismo país**.
>
> ### Fuera, sin discusión
>
> Scribd, docslib, 1library, academia.edu, ResearchGate (copias sin editor).
> WorldCat, Google Books, Open Library, CiNii (catálogos: responden 200 y no
> contienen el relato). La Convención de la UNESCO y las declaratorias de
> patrimonio mundial (no dicen nada de ningún relato concreto; hoy están citadas
> 73 veces en este corpus). Blogs de turismo y agregadores. Wikipedia, salvo que
> no exista nada mejor, nunca como clave y con límite declarado.
>
> **Y mitosdecolombia.com o cualquiera de sus espejos.** En este corpus el
> riesgo de circularidad es máximo, porque somos de los pocos sitios que
> publican varios de estos relatos. Si buscas un nombre propio y el único
> resultado somos nosotros, anótalo en `dudas` y no lo uses como apoyo.
>
> ## Reglas de la casa
>
> 1. **No uses la API de OpenAI para nada.** Investiga con WebSearch/WebFetch y
>    descarga directa. Si necesitas un modelo, Bedrock; la clave de OpenAI es
>    para imagen y voz.
> 2. **Cada URL se abre y se lee.** Un 200 no basta: una portada de catálogo, una
>    ficha de metadatos y un registro bibliográfico responden 200 y no sostienen
>    un relato.
> 3. **Si dos fuentes se contradicen, no las fundas.** Eso es exactamente lo que
>    va en `versiones`, con quién dice cada cosa.
> 4. **No toques Neon, ni los `.mjs`, ni ejecutes los scripts de aplicar.**
> 5. **Todas las fichas del ciclo, ninguna a medias.**
>
> ## Entregables
>
> - `content/editorial/<ciclo>/busqueda-<fecha>/BIBLIOGRAFIA.md`
> - `content/editorial/<ciclo>/actas-<fecha>/<slug>.json` — una por mito
> - `content/editorial/<ciclo>/reescritura-<fecha>/<slug>.json` — una por mito
> - `content/editorial/<ciclo>/fuentes-<fecha>/<slug>.json` — una por mito
> - `content/editorial/<ciclo>/busqueda-<fecha>/INFORME.md` — qué encontraste,
>   qué quedó fuera y por qué, qué URLs están caídas, qué sigue sin fuente
> - `content/editorial/<ciclo>/DECISIONES.md` — toda ficha que deba cambiar de
>   cajón, de título o de slug, con tres opciones concretas para cada una
>
> Al terminar, dime en dos párrafos qué encontraste que no sabíamos.

---

## Notas para quien orquesta

- **El paso 1 no se delega junto con el resto.** En un ciclo grande conviene un
  agente que sólo levante la bibliografía y la deje escrita, y después los
  redactores trabajando contra ella. Si cada redactor busca por su cuenta, cada
  uno encuentra un subconjunto distinto y vuelve la dispersión.
- **El acta se revisa antes de dar paso a la redacción.** Es el gate. Un acta
  con nudos sin cita literal no es un acta.
- **El cotejo del paso 9 del spec no es opcional.** Comparar las URLs que
  resuelve el módulo contra las del JSON, ficha por ficha, es lo que destapó
  que diez de once fichas u'wa se habían publicado con las fuentes equivocadas
  mientras todo lo demás pasaba en verde.
- **Las decisiones se presentan al director al cerrar el ciclo**, con tres
  opciones concretas cada una, y nada se publica hasta que responda.
