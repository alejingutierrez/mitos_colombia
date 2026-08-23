# Producción del material visual de los mitos

Cómo se fabrica, mito por mito y comunidad por comunidad, todo el material
visual del archivo: la **biblia** de la comunidad (personajes, paisajes,
props), el **tríptico** de cada mito y los **keyframes** de su video.

Este documento es el traspaso: está escrito para que una sesión nueva, sin
ningún contexto previo, pueda retomar la producción sin repetir los errores
que ya pagamos.

---

## 0 · Empieza aquí

Cinco minutos para entrar en frío.

```bash
npm run mitos:estado -- --comunidad muiscas
```

Imprime, por mito, cuánto lleva de cada uno de los cinco pasos. **Ese comando
es la única fuente de verdad del avance**: lee el disco, no una lista aparte,
así que no se puede desincronizar. Si el archivo existe, el paso está hecho.

Luego, en este orden:

1. Lee **§1** (por qué esto no se hace por API — cuesta créditos reales).
2. Lee **§2** (el orden de los cinco pasos, que no es negociable).
3. Monta la pestaña siguiendo **§4** — sobre todo el paso 0, encender Unlimited.
4. Lanza la primera tanda con la receta de **§5**.

Lo demás se lee cuando haga falta. Si algo se comporta raro, casi seguro está
en **§9-§11** (trampas) o **§12** (bloqueo).

**Regla de oro**: el toggle Unlimited se apaga solo al recargar y el botón
vuelve a decir `Generate ✦ 7`. A partir de ahí **cada imagen cuesta 7
créditos** y nada más te avisa. Verifícalo antes de cada tanda.

---

## 1 · Por qué el trabajo se hace en la web y no por la API

El plan Unlimited de Higgsfield **no aplica fuera de higgsfield.ai**. Está en
su documentación —*"Does Unlimited work through MCP? No. Unlimited access
applies only on higgsfield.ai"*— y lo verificamos gastando: por MCP,
`gpt_image_2` a 2K/high cobra **7 créditos por imagen** y `use_unlim:true` es
rechazado con `Unlimited generations aren't supported for gpt_image_2`. Los
primeros tres trípticos costaron 21 créditos antes de descubrirlo (balance
86,01 → 65,01).

En la web, con el modelo en **GPT Image 2 + High + 2K**, aparece un toggle
**Unlimited** y el botón cambia de `Generate ✦ 7` a `Unlimited ✦`: cero
créditos. Ése es el único camino que hace viable el corpus completo — 596
mitos × ~22 piezas ≈ 13.000 imágenes, que por API serían ~91.000 créditos.

4K existe (12 cr) pero el bundle contratado cubre **2K**, que es la calidad
máxima disponible aquí.

**El precio de esa decisión, y hay que tenerlo presente:** sus reglas de fair
use prohíben automatizar el Unlimited —*"Unlimited is designed for personal,
human use only. Automation tools, scripting, credential sharing, and reselling
access are strictly prohibited"*— y avisan que ante actividad inusual pueden
bajar la prioridad de la cola o pausar el acceso para revisión manual. El
usuario, informado de eso, decidió el 2026-08-23 automatizar el navegador de
todos modos, a ritmo contenido. Por eso la tabla de abajo no es un capricho:
es lo que mantiene el patrón dentro de lo que parece uso humano.

### Ritmo que respetamos

| Regla | Valor | Por qué |
|---|---|---|
| Generaciones en vuelo | **1** | La concurrencia del Unlimited es 1. Enviar con otra en vuelo **pierde la imagen en silencio** |
| Pausa entre envíos | 6 s | Que no lleguen dos submits en el mismo segundo |
| Reintentos | **uno, manual** | Un reintento automático en bucle es exactamente lo que dispara la revisión |
| Sesiones en paralelo | **nunca** | Ver §12 |

Ritmo real medido: **~5-8 min por pieza**, de a una. No es lento por el
proceso, es el tiempo de la cola gratuita.

---

## 2 · El orden, que no es negociable

Por cada mito, en este orden, y **un mito no se abandona a medio hacer**:

1. **Personajes** — fichas de cuerpo entero, frontales, sobre fondo crema. Van
   primero porque son la cara que todo lo demás tiene que respetar.
2. **Paisajes** — los escenarios del mito, tableau de borde a borde, sin gente.
3. **Props** — los objetos del hilo narrativo, centrados sobre fondo crema.
4. **Tríptico** — entrada 16:9, acto 9:16, huella 1:1, **adjuntando como
   referencia las fichas de los pasos 1-3**.
5. **Video — 17 escenas.** El guion son 9 bloques × 2 keyframes = 18; el `acto`
   del tríptico ya cubre una, así que se generan 17 nuevas. Heredan las fichas
   *y* el tríptico, de modo que el video no estrena ninguna cara ni ningún
   lugar.

Sólo cuando los cinco pasos están hechos se pasa al mito siguiente. Saltar al
siguiente con el anterior a medias es lo que rompe la continuidad: las fichas
que faltaban se terminan inventando dentro de una escena, y esa versión
improvisada se vuelve el canon de facto.

Y los mitos entre sí van en **orden cosmogónico**, no alfabético: el elenco
visual nace en el orden en que la mitología lo introduce, así cada mito hereda
las fichas del anterior en vez de estrenarlo todo de cero. En muiscas eso es
Chiminigagua → creación → aparición del hombre → Sol y Luna → Bochica → …

### La excepción que sí conviene hacer

Las fichas **sin referencias** (la gran mayoría de personajes, paisajes y
props) no dependen de nada previo. Con una cola de 6 min por pieza, encolarlas
todas juntas al principio de una comunidad es lo único que aprovecha bien el
tiempo muerto:

```bash
npm run mitos:tanda -- --comunidad muiscas --paso biblia-libre
```

Eso construye la biblia entera de la comunidad de una vez. Después, cada mito
se cierra en orden con sus trípticos y su video, ya con todo el elenco
disponible. **No es saltarse el orden**: es adelantar el paso 1-3 de todos los
mitos antes de empezar los pasos 4-5 de ninguno.

### Deslinde

Dos mitos de la misma comunidad pueden compartir un personaje, **jamás una
escena**. Los ciclos que más lo necesitan están anotados en el plan como claves
`deslinde_ciclo_*`: la inundación (Tequendama / Chibchacum / Cuchavira comparten
la misma crecida — la vara de oro y las peñas son EXCLUSIVAS del Tequendama),
Guatavita (El Dorado / la cacica / Meicuchuca), Hunza, linderos, Bermejo y
Goranchacha.

---

## 3 · El plan editorial: lo único que decide un humano

Todo lo que cambia entre un mito y otro vive en un solo archivo:

```
content/mitos-visuales/<comunidad>.json
```

Claves de la raíz: `comunidad`, `region`, `biblia` (ruta de la carpeta de
fichas), `doctrina`, `orden`, `deslinde`, `mitos`, `orden_de_produccion`,
`ritmo`, `video`, `carpetas_heredadas` y los `deslinde_ciclo_*`.

`mitos` es un **objeto indexado por slug**, no un array. Cada mito:

```jsonc
"chiminigagua": {
  "id": 216,
  "titulo": "Chiminigagua",
  "bloque": "cosmogonía",
  "arco": "la luz sale de la noche (entrada) -> las aves cosen el cielo (acto) -> …",
  "protagonista": "las aves grandes y negras primigenias",
  "estrena": ["ave_primigenia", "altiplano_noche"],   // fichas que este mito introduce
  "paleta": "negro de noche cerrada, gris de silueta, blanco lechoso…",

  "biblia": {                                   // pasos 1-3
    "ave_primigenia": {
      "kind": "personaje",                      // personaje | paisaje | prop
      "aspect": "9:16",                         // 9:16 | 16:9 | 1:1
      "refs": [],                               // fichas previas a adjuntar
      "desc": "Una de las aves grandes y negras que…",
      "nota": "Es el protagonista visible del mito…",
      "era": "colonial_rural"                   // opcional, ver abajo
    }
  },

  "escenas": {                                  // paso 4 — el tríptico
    "entrada": { "composicion": "umbral",       // uno de los 9 esquemas
                 "refs": ["altiplano_noche"],
                 "escena": "PLANO GENERAL AMPLIO sobre un altiplano…" },
    "acto":    { "composicion": "diagonal", "refs": [...], "escena": "…" },
    "huella":  { "composicion": "contrapicado", "refs": [], "escena": "…" }
  },

  "video": {                                    // paso 5 — 9 bloques × 2
    "duracion_objetivo_s": 90,
    "nota_deslinde": "b6a lo cubre el `acto` del tríptico",
    "bloques": {
      "b1": { "linea": "<la línea del guion>", "a": "<keyframe A>", "b": "<keyframe B>" },
      "…": {}
    }
  }
}
```

**`era` por escena existe por una razón concreta**: hay mitos de dos tiempos.
El Pozo de Hunzahúa es prehispánico cuando se quiebra la vasija y colonial
cuando llega Donato con palas. Sin marcar la época, el bloque por defecto
prohíbe el metal justo donde el relato lo pide. Valores: `prehispanico`,
`colonial_rural`, `indeterminado`.

**La doctrina no se repite por mito.** Técnica (fotografía de maqueta de
papel), prohibiciones, los tres actos, los nueve esquemas de composición y los
registros de época se escriben **una vez** en `scripts/mitos/art-direction.mjs`
y `src/lib/visual-direction.js`, y desde ahí llegan a los 596 mitos. Si algo
se ve mal en todas las imágenes, se corrige ahí, no en el plan.

---

## 4 · Montaje de la sesión de navegador

**Paso 0, antes de nada:** abrir `higgsfield.ai/ai/image?model=gpt_image_2`,
poner **High** y **2K**, y encender el toggle **Unlimited**. Verificar que el
botón diga `Unlimited ✦` y no `Generate ✦ 7`. Si dice lo segundo, está
cobrando.

**Paso 1: inyectar el arnés.**

```bash
node scripts/mitos/emit-bootstrap.mjs muiscas --min
```

Imprime un bloque de JS que se pega en la consola de la pestaña. Deja allí la
parte fija del prompt —técnica, época, territorio, comunidad, los tres actos,
los nueve esquemas y las prohibiciones— más todos los helpers. Sin él, cada
escena tendría que arrastrar sus ~3.000 caracteres de preámbulo idéntico.

> **Hay que reinyectarlo después de CADA recarga de la página.** El arnés vive
> en `window`; una recarga lo borra, igual que apaga el toggle Unlimited.

El emisor se autoverifica antes de imprimir (`new Function(salida)`) y falla
ruidosamente si el JS no compila. Existe porque una barra invertida sin doblar
dentro de un template literal ya rompió el arnés dos veces de forma silenciosa.

### Los helpers que quedan en la página

| Helper | Qué hace |
|---|---|
| `hfUnlim()` | Enciende el toggle Unlimited. **Paso 0 de toda sesión** |
| `hfAspect(a)` | Pone la proporción (`"16:9"`, `"9:16"`, `"1:1"`) |
| `hfSetText(t)` | Escribe el prompt en el editor Lexical (ver §9) |
| `hfTira()` / `hfNumRefs()` / `hfClearRefs()` | Inspecciona y limpia las referencias adjuntas |
| `hfIds()` | Extrae los ids de los resultados visibles en la galería |
| `hfBarrerBG()` | Barre la galería con scroll para recoger los ids que se desmontaron |
| `hfEnVuelo()` | Cuántas generaciones hay corriendo |
| `hfBanner()` / `hfCerrarBanner()` | Detecta y cierra el banner rojo de rechazo |
| `hfEnviarUno(it)` | Envía **una** pieza y confirma que fue aceptada |
| `hfStart(items, opts)` | Recorre una tanda llamando a `hfEnviarUno` |
| `hfEstado()` | Progreso de la tanda en curso: hechas, fallos, pendientes |

---

## 5 · El ciclo de una tanda

Éste es el bucle que se repite hasta terminar el corpus.

### 1. Emitir

```bash
npm run mitos:tanda -- --slug <slug> --paso personajes
```

`--paso` acepta: `personajes`, `paisajes`, `props`, `triptico`, `video`, y
`biblia-libre` (todas las fichas sin referencias de **todos** los mitos).

Imprime a **stdout** una llamada `window.hfStart([...])` lista para pegar, y a
**stderr** el resumen y —importante— **la lista de referencias que hay que
adjuntar a mano** antes de lanzar.

La tanda **salta lo que ya está en disco**, así que es reanudable: volver a
emitirla después de una interrupción produce sólo lo que falta.

> **Reemitir la tanda justo antes de lanzarla.** Entre emitir y lanzar puede
> aterrizar una pieza tardía de la tanda anterior; si no se reemite, esa pieza
> se genera dos veces.

Para tandas grandes conviene partirlas en archivos:

```bash
npm run mitos:tanda -- --comunidad muiscas --paso biblia-libre > scripts/tmp/tanda.js
```

### 2. Adjuntar referencias (pasos 4 y 5)

Los pasos `personajes`, `paisajes`, `props` y `biblia-libre` van **sin
referencias**: son fichas que estrenan algo, sobre fondo crema. Antes de
lanzarlas, `hfClearRefs()`.

Los pasos `triptico` y `video` **sí** las llevan. El emisor imprime cuáles.
Se suben con `file_upload` desde `content/videos/<comunidad>/biblia/`:

```
content/videos/muiscas/biblia/<nombre>.jpg
```

Verificar con `hfNumRefs()` que quedaron las que debían. **Esto no está
automatizado**: el script te dice cuáles, tú las adjuntas.

### 3. Lanzar

Pegar el `window.hfStart([...])` en la consola de la pestaña. Responde
`tanda arrancada: N piezas, de a una con confirmación` y se va sola.

### 4. Esperar

N × ~6 min. No hay que vigilar: `hfEstado()` dice en qué va. Reintenta **una
sola vez** cada fallo y aborta la tanda entera si el botón deja de decir
`Unlimited`.

### 5. Recoger los ids

```js
hfBarrerBG()   // barre la galería, devuelve los ids en orden
```

Con el enviador secuencial **el orden de llegada es el de envío**, así que los
ids se emparejan con los tags por posición. Si una llegada tardía se coló, ver
la hoja de contactos en §11.

### 6. Ingestar

```bash
# fichas de biblia
npm run mitos:ingest:biblia -- --fichas "ave_primigenia=20260823|133526|ec383995,…"

# tríptico (se identifica solo por proporción)
npm run mitos:ingest -- --comunidad muiscas --slug <slug>

# keyframes de video
npm run mitos:ingest:keyframes -- --slug <slug> --pares "b1a=20260823|141002|48c9a1eb,…"
```

`ingest:biblia` encuentra sola a qué mito pertenece cada ficha buscándola en
todo el plan, descarga el original, escribe `<nombre>.jpg` y su recorte 9:16, y
actualiza el manifiesto y `higgsfield-ids.json`.

### 7. Volver al paso 1

---

## 6 · Publicar al sitio

```bash
npm run images:apply:triptych -- --slug <slug> --dir content/videos/muiscas/mitos/<slug>
```

Sube a Blob, escribe las tres URLs y los prompts, purga la caché e imprime los
valores anteriores como respaldo.

### Tablero visual

```bash
node scripts/mitos/tablero.mjs muiscas /tmp/tablero.html
```

Arma un tablero con miniaturas embebidas de todo lo producido. Publicado como
artefacto en https://claude.ai/code/artifact/b947c338-3aed-4856-a6e0-6fac460717c7
— republicar el mismo archivo lo actualiza en su sitio.

---

## 7 · Bajar los resultados a mano

La galería sirve las imágenes por un proxy con la URL firmada en el query
string, que el navegador no deja leer. Pero el nombre del archivo nativo es
determinista:

```
https://<cdn>/<user>/hf_<YYYYMMDD>_<HHMMSS>_<job_id>.png
```

Así que basta con sacar esos tres campos del `src` en el DOM con una regex y
reconstruir la ruta. Sale **mucho** más barato que pedirle el historial a la
API, que devuelve el prompt entero de cada trabajo (~1.700 tokens por imagen).

De ahí vienen los `20260823|133526|ec383995` que comen los ingestores.

```bash
node scripts/mitos/descargar.mjs --slug <slug> --ids "20260823|072548|ab7c…"
```

---

## 8 · Estado y reanudación

Ninguna sesión termina el corpus. El estado **no se lleva en una lista aparte
sino mirando el disco** —si el archivo existe, el paso está hecho—, así no
puede desincronizarse de la realidad:

```bash
npm run mitos:estado -- --comunidad muiscas
```

Imprime por mito los cinco pasos y el total de lo que falta. Honra
`mito.carpeta` y `mito.carpeta_video` para los mitos que se produjeron antes de
esta convención y viven en carpetas con nombre viejo.

---

## 9 · Trampas del editor, todas verificadas

La caja de prompt **no es un `<textarea>`**: es un `contenteditable` de
**Lexical**. Eso rompe las cuatro formas obvias de escribir en ella:

- `HTMLTextAreaElement.prototype.value` → `TypeError: Illegal invocation`.
- `document.execCommand('insertText', …)` → **corta en el primer espacio**
  (escribe "prueba" de "prueba de inyeccion").
- `Range` + `selectAll` por JS → Lexical **no lo honra** y el texto nuevo se
  **concatena** al viejo. Así es como una escena de 3.495 caracteres terminó
  con 7.431 en la caja.
- Pegar con un `ClipboardEvent` sintético → funciona a veces, y "a veces" en
  una tanda de 30 piezas es una tanda arruinada.

**Lo único fiable es reconstruir el árbol del editor:**

```js
const ed = document.querySelector('[contenteditable="true"]').__lexicalEditor;
ed.setEditorState(ed.parseEditorState({ root: { children: [ /* un párrafo por línea */ ] } }));
```

Es lo que hace `hfSetText()`.

**Y verificar antes de gastar.** Después de escribir, `hfEnviarUno` compara el
número de párrafos del editor contra el número de líneas del prompt y **aborta
sin generar** si difieren. Ese guardia ya evitó una corrida con el prompt
duplicado.

---

## 10 · La trampa cara: piezas que se pierden sin dejar rastro

De una tanda de 23 llegaron 11. De otra de 17, 13. Las que faltaban estaban
salteadas y la tanda no registraba ningún error: el botón seguía diciendo
`Unlimited`, el contador avanzaba, y la imagen simplemente no aparecía nunca.

Son **dos causas distintas** y hay que distinguirlas, porque una asusta más de
lo que debe:

**1. El Unlimited corre de a UNA.** Su documentación dice que los bundles de
imagen permiten *"2 generations at a time"* — cierto, pero **para generaciones
por crédito**. El Unlimited va de a una y lo avisa con un banner rojo que es
fácil pasar por alto:

> You can generate 1 unlimited video, image & audio generation at a time.
> To use full concurrency, switch to credit-based generations.

Lo grave es que **eso llega como banner, no como error**: nada en la respuesta
lo delata.

**2. Algunas sólo llegan tarde.** Dos piezas que dábamos por perdidas
aparecieron minutos después, fuera de orden. La cola gratuita no garantiza
tiempos, así que "no está" no significa "se perdió".

### La defensa: confirmar la aceptación, no suponerla

Mirar si hay algo en vuelo no basta, porque **el badge tarda en aparecer**: el
encolador creía la cola libre y enviaba antes de tiempo. El ciclo correcto es
una máquina de estados por pieza (`hfEnviarUno`):

1. **Cerrar el banner previo**, para que reaparecer signifique algo.
2. Poner proporción, escribir el prompt, **verificar párrafos**.
3. Verificar que el botón siga diciendo `Unlimited`. Si no, **abortar la tanda
   entera** — a partir de ahí cobra.
4. Clic, y entonces esperar hasta ~2 min a que ocurra una de dos cosas:
   aparece el badge (**aceptada**) o reaparece el banner (**rechazada**).
5. Si fue aceptada, esperar a que el badge **desaparezca** (terminada).
6. Respiro de 6 s y sólo entonces la siguiente.

Una rechazada se reintenta **una sola vez** con más respiro; si vuelve a
fallar queda anotada en `pendientes`. Nunca en bucle: el reintento automático
repetido es justo lo que dispara su revisión manual.

**Verificado: una tanda de 21 cerró 21/21, cero fallos.** Cuesta ~5-8 min por
pieza contra los 2,5 de antes, pero antes tiraba la mitad — en piezas útiles es
más rápido.

### Dos detalles del contador que costaron caro

**Una pieza pasa por `Processing` ANTES de `Generating`.** La primera versión
contaba sólo `Generating`, así que daba por no-arrancada una pieza que sí había
arrancado, la reintentaba, y producía duplicados. El contador correcto es
`/Generating|Processing|Queued/`.

**Cerrar el banner tiene que ser quirúrgico.** Una versión que hacía clic por
toda la franja superior buscando el botón de cerrar abrió el modal de búsqueda
—que tapa la página— y dejó la galería en **modo multiselección con 4 imágenes
marcadas al lado del botón de borrar**. Sólo se hace clic en el botón que está
**dentro del nodo del propio banner**, identificado por su texto.

---

## 11 · Otras trampas

**El toggle Unlimited se apaga al recargar.** El botón vuelve a decir
`Generate ✦ 7` sin ningún aviso, y a partir de ahí cada imagen cuesta 7
créditos. Por eso `hfUnlim()` es el paso 0 de toda sesión y `hfStart` verifica
la etiqueta antes de **cada** envío.

**Leer `innerText` en bucle congela la página.** La primera versión de
`hfAspect` recorría `document.querySelectorAll('div')` comparando `innerText`.
`innerText` fuerza un cálculo de layout por elemento, así que a medida que la
galería se llenaba la función se volvía más lenta, hasta que a mitad de una
tanda se quedó "preparando" durante minutos y pareció un cuelgue. Ahora sale
temprano si la proporción ya está puesta, busca sólo dentro del menú abierto y
usa `textContent`, que no fuerza layout.

**La galería es virtualizada**: desmonta los resultados que salen de pantalla.
En tandas largas hay que barrerla con `hfBarrerBG()` antes de ingestar, y
conviene ingestar por partes en vez de todo al final.

**El `job_id` que devuelve el POST de creación NO es el del archivo final.**
Intentamos emparejar tag↔imagen interceptando la respuesta de creación: no
funciona. Uno de los UUID es de sesión y se repite en todas las peticiones; el
otro no aparece en ningún resultado. El id definitivo sólo se conoce cuando la
imagen ya está en la galería. **Con el enviador secuencial el problema
desaparece**: si sólo hay una pieza en vuelo, el orden de llegada es el de
envío por construcción.

### La hoja de contactos, para cuando el emparejamiento se pierde

```bash
node scripts/mitos/hoja-contactos.mjs --ids "…" --salida /tmp/hoja.jpg
```

Arma una hoja numerada con las N imágenes más nuevas, con la etiqueta quemada
en cada celda. Se mira **una vez**, se asignan los tags a ojo y se ingesta: una
imagen en lugar de catorce. Hace falta para recuperar tandas viejas corridas
con concurrencia, y para desambiguar cuando una llegada tardía se mezcla con la
tanda nueva — que pasa.

**La hoja sirve para identificar, no para juzgar.** A 240 px una ficha de
personaje cubierto de polvo de oro parece un hombre desnudo cualquiera; el
acabado sólo se ve a tamaño real. Si lo que está en duda es la calidad y no la
identidad, hay que bajar el original.

Ya nos costó un error: dimos por hecho que cuatro resultados de un bucle
atascado eran la misma pieza reintentada, e ingestamos como `abuelo_narrador`
una imagen que era otra ficha. La hoja de contactos lo destapó. **Si un bucle
se atascó, no supongas qué produjo: míralo.**

---

## 12 · Si Higgsfield nos bloquea

Sus reglas de fair use dicen que ante actividad inusual pueden **bajar la
prioridad de la cola**, **pausar el Unlimited para revisión manual**, o ambas.
No es una expulsión: el propio texto dice que el acceso se restablece una vez
se confirma el uso normal.

### Síntoma 1 — las generaciones tardan mucho más de lo normal
Es la cola degradada, no un bloqueo. **No reintentar en bucle**: eso confirma
el patrón que disparó la degradación. Subir la pausa entre envíos a 20-30 s
durante una hora.

### Síntoma 2 — el toggle Unlimited desaparece o el botón vuelve a `Generate ✦ 7`
El Unlimited quedó pausado. **Parar de generar inmediatamente** — si se sigue,
cada imagen cobra 7 créditos sin avisar más que ese cambio de etiqueta.

### Síntoma 3 — error explícito de límite o cuenta en revisión

1. **Detener todo.** Cerrar la pestaña de generación. No abrir otra sesión ni
   probar desde otra IP: eso lee como evasión y empeora el caso.
2. **Comprobar el estado real** en Manage Account → Subscription → *Active
   unlimited models*: sale cada modelo con fecha de inicio, de expiración y
   estado. Distingue "pausado por revisión" de "expiró el bundle".
3. **Escribir a soporte desde la cuenta**, explicando el uso real: un proyecto
   editorial propio, un archivo de mitos colombianos, generación asistida pero
   supervisada por una persona, sin reventa ni acceso compartido. Pedir la
   revisión manual que su propia documentación menciona.
4. **Mientras tanto, no parar el proyecto.** El trabajo que no depende de
   generar —escribir el plan editorial de los mitos que faltan, los arcos, los
   deslindes, las composiciones, los guiones de video— es la mayor parte del
   esfuerzo y no toca Higgsfield.
5. **Al volver**, entrar con la mitad del ritmo durante el primer día.

### Y si el Unlimited no vuelve
El camino de respaldo es la API por créditos, que nunca estuvo bloqueada: 7
créditos por imagen a 2K/high con `gpt_image_2`. Sirve para cerrar un mito
urgente, no para el corpus.

### Lo que nunca hacemos
Abrir varias sesiones en paralelo, rotar IP o cuentas, reintentar en bucle
automático, o compartir credenciales. Cualquiera de esas convierte una pausa
reversible en una expulsión.

---

## 13 · Mapa de archivos

| Archivo | Qué hace |
|---|---|
| `content/mitos-visuales/<comunidad>.json` | **El plan editorial**: lo único que decide un humano — arco, deslinde, escenas, composición, referencias |
| `scripts/mitos/art-direction.mjs` | La doctrina compartida: técnica, actos, fichas, prohibiciones. Se escribe una vez y llega a los 596 mitos |
| `src/lib/visual-direction.js` | Los 9 esquemas de composición, los registros de época, la artesanía por región y comunidad |
| `scripts/mitos/emit-bootstrap.mjs` | Proyecta la doctrina + los helpers a JS inyectable. **Se autoverifica antes de imprimir** |
| `scripts/mitos/emit-tanda.mjs` | Emite el `hfStart([...])` de un paso. Salta lo ya hecho: reanudable |
| `scripts/mitos/emit-prompts.mjs` | Prompts completos para API, resumen, o paquetes de trabajo manual |
| `scripts/mitos/descargar.mjs` | Reconstruye la URL nativa y baja el `.png` a la bandeja |
| `scripts/mitos/ingest.mjs` | Tríptico: identifica por proporción, renombra, recorta 9:16, escribe el manifiesto |
| `scripts/mitos/ingest-biblia.mjs` | Fichas nuevas a la biblia; encuentra sola a qué mito pertenecen |
| `scripts/mitos/ingest-keyframes.mjs` | Keyframes + `bloques.json` con las líneas del guion |
| `scripts/mitos/estado.mjs` | Qué falta de los cinco pasos, **mirando el disco** |
| `scripts/mitos/hoja-contactos.mjs` | Hoja numerada para identificar resultados cuando se pierde el emparejamiento |
| `scripts/mitos/tablero.mjs` + `tablero-html.mjs` | Tablero visual con miniaturas embebidas |
| `content/videos/<comunidad>/biblia/` | Las fichas producidas + `manifest.json` |
| `content/videos/<comunidad>/biblia/higgsfield-ids.json` | Registro de qué assets ya están subidos, para no resubir lo mismo |
| `content/videos/<comunidad>/mitos/<slug>/` | El tríptico del mito |
| `content/videos/<comunidad>/<slug>/keyframes/` | Los keyframes del video |

---

## 14 · Dónde va esto

El corpus completo son **596 mitos × ~22 piezas ≈ 13.000 imágenes**. A ~6 min
por pieza son unas **270 horas de cola**. Eso no lo termina una sesión, ni
diez: es un proyecto de fondo, y el cuello de botella es la cola gratuita de
Higgsfield, no el esfuerzo.

Lo que sí está resuelto, y es la parte que no hay que volver a hacer:

- La **doctrina** se escribe una vez y alcanza los 596 mitos.
- El **plan** de una comunidad es la única decisión humana por comunidad.
- El **arnés** genera a coste cero y confirma pieza por pieza.
- La **ingesta** identifica sola por proporción o por par explícito.
- El **estado** se deriva del disco y no puede mentir.
- El **runbook de bloqueo** está escrito antes de necesitarlo.

Para retomar: `npm run mitos:estado -- --comunidad muiscas`, y seguir §5.
