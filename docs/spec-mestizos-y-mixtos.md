# Spec: mestizos y mixtos

**253 mitos. 184 mestizos y 69 mixtos. Es el 42 % del sitio y es lo último que
queda.**

Este documento no reemplaza a [`spec-reescritura-y-fuentes.md`](spec-reescritura-y-fuentes.md)
ni a [`metodologia-revision-mitos.md`](metodologia-revision-mitos.md): los
supone leídos. Lo que añade es **en qué se diferencia este corpus**, por qué el
proceso que cerró las treinta y seis comunidades indígenas no sirve tal cual, y
qué hay que hacer distinto —y mejor— para cerrarlo.

---

## 1. Qué es este corpus y por qué no es el mismo trabajo

Las treinta y seis comunidades que ya pasaron tenían tres cosas que aquí no
existen:

1. **Un pueblo con nombre, territorio y autoridades.** Se podía preguntar «¿qué
   dice el plan de vida?», «¿qué recogió el etnógrafo y en qué resguardo?»,
   «¿cómo se llama quien narró?».
2. **Un corpus cerrado y reconocible.** Chaves 1946 para los kogui, Osborn 1995
   para los u'wa, Castillo 1980 para los barí. Había un primario al que volver.
3. **Un criterio claro de pertenencia.** Un mito wayúu es wayúu.

Aquí no. «Mestizo» y «mixto» **no son pueblos: son dos cajones**. Dentro hay
leyendas de una calle de Cartagena, espantos de una vereda de Piedecuesta,
apariciones del tranvía de Bogotá, cuentos de llano y relatos de río. Lo que
tienen en común es administrativo, no cultural.

De ahí las tres consecuencias que gobiernan todo este documento:

- **La unidad de trabajo no es la comunidad: es el ciclo.** Un municipio, un
  recopilador, un libro. `piedecuesta-espantos-y-entierros` es una unidad real;
  «mestizo» no lo es.
- **«Mixto» es una afirmación, no una etiqueta.** Decir que un relato mezcla lo
  indígena y lo hispánico es una tesis que hay que sostener con una fuente o
  retirar. Ya pasó una vez: `chimbilaco` estaba en «Africano» y es un rumor
  amazónico contemporáneo. Pasará más veces.
- **Las fuentes son de otra naturaleza.** No hay etnografía. Hay folcloristas
  municipales, casas de la cultura, tesis de literatura, prensa de la época y
  archivos parroquiales. Las reglas de fuentes de la spec general **bloquean
  material legítimo aquí**, y hay que cambiarlas (§4).

---

## 2. El estado real, medido

Medido el 2026-09-19 contra Neon y contra los módulos del repo.

### En Neon

| | mestizo | mixto |
|---|---|---|
| mitos | 184 | 69 |
| con los cinco campos | 11 | 8 |
| **sólo `content`** | **173** | **61** |
| nombran a quien narra | 0 de 184 | 0 de 69 |
| URLs por ficha (andina / caribe) | 0,6 | 0,3 |
| regiones sin una sola URL | Orinoquía (19) | Caribe (6) y varios (8) |
| entradas de catálogo | 62 | 93 |
| cabeceras `seo_pages` viejas | 158 | 63 |

### En los módulos del repo

**Hay 256 fichas ya escritas con los cinco campos, en 31 carpetas, que nunca se
aplicaron.** No hay que escribirlas desde cero. Pero:

| | |
|---|---|
| fichas en módulos | 256 |
| **no cumplen el contrato** | **242** |
| motivo, en las 242 | `similitudes` de unas 85 palabras: el patrón `similarityCore` |
| repetición entre fichas del mismo módulo | **`caribe-mestizo-final` 86,6 %** · Orinoquía 43,6 % · Bogotá 40–42 % · piedecuesta 33–41 % |
| lo que sí traen | narrador nombrado en la mayoría (70/70 en caribe, 8/8 en Bogotá) |

Las 70 fichas de `caribe-mestizo-final` comparten **la misma `historia` y las
mismas 113 palabras de `similitudes`, casi literales**. Es la plantilla más
densa del proyecto.

### Qué se está citando hoy

Los dominios más citados de todo el corpus mestizo y mixto:

| dominio | citas | veredicto |
|---|---|---|
| `es.scribd.com` | 102 | **fuera**: copia sin editor |
| FLACSO Ecuador (tres dominios) | 133 | es donde está alojada Villa Posse, que sí es fundacional |
| `search.worldcat.org` | 66 | **catálogo**: no sostiene un relato |
| `books.google.com` | 39 | **catálogo** |
| `ich.unesco.org` + `whc.unesco.org` | 73 | **relleno**: la Convención del Patrimonio Inmaterial no sostiene un espanto de Cartagena |
| `docslib.org`, `researchgate.net` | 70 | copias sin editor |
| `perseus.tufts.edu` | 26 | comparativas clásicas, casi siempre sin paralelo escrito |

Y el caso que resume el problema: **la Convención de la UNESCO citada 34 veces
y la declaratoria de Cartagena como patrimonio mundial otras 33**, en fichas de
aparecidos. Son documentos reales y no dicen nada del relato.

---

## 3. Lo que este bloque tiene que lograr

Cinco metas, todas medibles. No se cierra un ciclo sin las cinco.

| meta | umbral |
|---|---|
| **1. Estructura** | los 253 con los cinco campos, ninguno sólo con `content` |
| **2. Procedencia** | **cada ficha nombra de dónde sale el relato**: recopilador, publicación y año como mínimo; narrador y lugar cuando la fuente los dé. Hoy: 0 de 253 |
| **3. Sin molde** | **≤ 2 % de oraciones repetidas** entre fichas del mismo ciclo, y **0 %** entre ciclos distintos |
| **4. Fuentes** | **mínimo 8 por ficha, meta 12** (ver §4: aquí el piso sube), con reparto propio, sin catálogo y sin relleno |
| **5. Prosa** | pasa las cuatro comprobaciones nuevas de §5 |

La meta 4 es la que el director pidió subir explícitamente. La 5 es la otra:
que la reescritura mejore, no que se repita.

---

## 4. Fuentes: la jerarquía para este material

Las reglas de la spec general siguen valiendo salvo donde este apartado diga
otra cosa. **Aquí el mínimo sube de 5 a 8 y la meta de 8 a 12.** El corpus lo
permite: para una leyenda urbana con cien años de circulación hay más material
consultable que para un canto ceremonial, no menos.

### 4.1 La escalera

**Primer escalón — el registro que fija el relato.** Es obligatorio. Sin al
menos uno, el ciclo no se escribe y se declara bloqueado.

- El libro o el artículo del recopilador, con su edición y sus páginas: Villa
  Posse (*Mitos y leyendas de Colombia*), las *Cuentos y leyendas de Cartagena*
  de 1948, la *Literatura folclórica* de Piedecuesta, Vicente Arenas.
- Tesis y trabajos de grado de literatura, etnoliteratura o historia regional
  que transcriban el relato. Suelen traer narrador, vereda y fecha, que es
  justamente lo que falta.
- Archivos de tradición oral de casas de la cultura, bibliotecas municipales y
  la Red de Bibliotecas del Banco de la República.

**Segundo escalón — el territorio y su historia.** Lo que permite escribir la
`historia` sin inventar.

- Monografías municipales, historias de la ciudad, catálogos de patrimonio.
- El Boletín Cultural y Bibliográfico de Banrepcultural, revistas de
  universidades regionales, la Academia de Historia del departamento.
- Archivos de la alcaldía, del Ministerio de Cultura, del IDPC en Bogotá, de la
  Escuela Taller, de los planes especiales de salvaguardia.

**Tercer escalón — la prensa, que aquí sí entra.** Esta es la diferencia más
importante con la spec general.

> Para el corpus indígena la prensa está prohibida porque siempre hay una
> etnografía mejor. Aquí muchas veces **la prensa es el registro más antiguo que
> existe**: la columna de un cronista local en los años cuarenta puede ser la
> primera vez que ese espanto quedó escrito.

Entra con tres condiciones, las tres obligatorias:

1. **Está fechada y firmada**, o es identificable por su cabecera y su fecha.
2. **Es de la época o del lugar**, no una refrito turístico de 2019.
3. **Su `limitation` dice qué es**: «crónica de prensa local, sin aparato ni
   verificación; se usa para fechar la circulación del relato, no para
   afirmar hechos».

La prensa reciente que reempaqueta lo que ya circula **no entra**. El criterio
no es la antigüedad sino el aporte: si la nota de *El Tiempo* de 2019 no añade
nada a Villa Posse, sobra.

**Cuarto escalón — comparativas.** Igual que siempre: sólo si `Similitudes`
nombra ese paralelo concreto. Aquí hay un paralelo propio y mucho más fértil que
Ovidio: **el mismo motivo en otro municipio del mismo país**. La Llorona de
Piedecuesta contra la del Magdalena es una comparación mejor documentada y más
honesta que la Llorona contra Medea.

### 4.2 Lo que queda fuera, sin discusión

| fuera | por qué |
|---|---|
| Scribd, docslib, 1library, academia.edu, ResearchGate | copias sin editor; si la obra vale, se cita por su editor o por su ficha institucional |
| WorldCat, Google Books, Open Library, CiNii | catálogos: responden 200 y no contienen el relato |
| La Convención de la UNESCO, las declaratorias de patrimonio mundial | no dicen nada de ningún relato concreto |
| Blogs de turismo, agregadores, «top 10 leyendas de Colombia» | sin autoría ni registro |
| Wikipedia | nunca como clave; sólo si no existe nada mejor y con límite declarado |
| **mitosdecolombia.com y sus espejos** | circularidad. En este corpus el riesgo es máximo: somos de los pocos sitios que publican varios de estos relatos |

### 4.3 Reglas propias de este bloque

- **Una obra fundacional se cita desde todas las fichas que la usan**, con
  `summary` distinto en cada una. Villa Posse aparecerá en decenas: bien. Lo que
  no puede repetirse es el resumen.
- **La ficha bibliográfica la fija el pool; lo que cambia por mito es qué dice
  esa obra sobre ese relato.** Un `summary` que sirve para dos fichas está mal
  escrito en al menos una.
- **Prohibido rellenar hasta ocho.** Si un relato sólo sostiene seis, se
  escriben seis y se declara `AGOTADO` en el dossier. Ocho es el piso de lo
  publicable, no una cuota que se cumple con la Convención de la UNESCO.
- **Cada URL se abre y se lee.** Un 200 no basta.

---

## 5. La reescritura: cuatro exigencias nuevas

Lo que sigue se suma al contrato de la metodología §6, que no cambia. Son las
mejoras concretas que este bloque introduce, y todas son comprobables.

### 5.1 Acta de procedencia: el gate antes de escribir

Igual que el acta de reducción es el gate entre canon y guion en el pipeline de
video, aquí **no se redacta una ficha sin su acta**. Es un JSON por mito, y sin
él el redactor no empieza:

```json
{
  "slug": "la-llorona-de-piedecuesta",
  "registro": {
    "obra": "...", "autor": "...", "anio": 1977, "paginas": "112-115",
    "url": "https://...",
    "narrador": "nombre, o null",
    "lugar": "vereda, corregimiento, municipio",
    "fecha_de_recoleccion": "o null"
  },
  "nudos": [
    { "hecho": "la mujer se aparece junto al puente al anochecer",
      "fuente": "obra citada, p. 113", "literal": "cita textual breve" }
  ],
  "fuera": [
    { "elemento": "el nombre «Rosalba»", "por_que": "no aparece en ninguna fuente; viene de la ficha heredada" }
  ],
  "clasificacion": {
    "por_que_mestizo": "argumento y fuente, o «sin sostener»",
    "propuesta": "mestizo | mixto | mover a <comunidad> | sin decidir"
  }
}
```

Tres cosas que el acta obliga a hacer y que antes se saltaban:

- **`nudos` ancla cada hecho del relato a una página.** Lo que no tiene ancla no
  se escribe. Es lo que destapó once invenciones cuando se escribieron actas
  retroactivas en el pipeline de video.
- **`fuera` deja constancia de lo que se quita**, que es la mitad del trabajo en
  un corpus donde las fichas heredadas añadieron nombres y episodios.
- **`clasificacion` fuerza la pregunta** de si el mito está en el cajón
  correcto. Ninguna ficha se publica con «mixto» sin argumento.

### 5.2 La `historia` de cada ficha cuenta su propio registro

Es donde murió el lote anterior: setenta fichas con el mismo párrafo sobre la
edición de 1948. La regla es **una frase por ficha que no podría estar en
ninguna otra**, y se comprueba:

- prohibido que dos fichas del mismo ciclo compartan una oración de siete
  palabras o más;
- la `historia` nombra **qué trae esa obra sobre este relato**, no qué es la
  obra;
- si diez fichas salen del mismo libro, cada una dice su página, su capítulo o
  su variante.

### 5.3 Prosa: cuatro comprobaciones nuevas

Las tres pasadas de la metodología §6 siguen. Se añaden cuatro medidas, que
`diagnostico.mjs` pasará a calcular:

| comprobación | umbral | por qué |
|---|---|---|
| **Apertura distinta** | ninguna ficha del ciclo abre con la misma estructura sintáctica que otra | siete de las ocho de Piedecuesta empiezan igual |
| **Riqueza léxica** | *type-token ratio* ≥ 0,45 en el `mito` | detecta la prosa de relleno, que repite las mismas veinte palabras |
| **Densidad de adjetivos** | ≤ 8 % de los tokens del `mito` | la grandilocuencia se mide |
| **Frases largas** | ninguna oración de más de 45 palabras; mediana entre 12 y 22 | ritmo, que es lo que la metodología pide y nadie medía |

Y las prohibiciones de siempre, ahora con una lista propia de este corpus:
«desde tiempos inmemoriales», «un misterio ancestral», «sabiduría ancestral»,
«el destino estaba escrito», «cuenta la leyenda que», «dicen los abuelos que»,
«nadie sabe a ciencia cierta», «lo cierto es que».

### 5.4 El relato no habla de la investigación

Ya está en la metodología, pero aquí conviene repetirlo porque es el defecto más
frecuente del material heredado: el campo `mito` **no menciona** la fuente, el
recopilador, la edición, «la versión que se conserva», «según el registro» ni
«no se sabe si». Todo eso vive en `historia`, en `versiones` o en el dossier.
**Tampoco declara carencia**: que no haya más versiones se anota en `dudas`, no
en la página.

---

## 6. El orden del trabajo

### 6.1 La unidad: el ciclo, no la comunidad

Los 253 se agrupan en **31 ciclos** que ya existen como carpetas en
`editorial/`. Un ciclo se trabaja entero, nunca por muestras.

| ronda | ciclos | fichas | por qué juntos |
|---|---|---|---|
| **1** | `caribe-mestizo-final` | 70 | la plantilla más densa (86,6 %) y el 28 % del bloque; desmontarla arregla más que ninguna otra cosa |
| **2** | las cinco de `piedecuesta`, `santander-folclor-clasico`, `santander-mixto-residual` | 41 | un solo municipio, un solo recopilador, una sola bibliografía |
| **3** | `bogota-mestizo-memoria`, `bogota-mestizo-nocturno`, `andina-*`, `boyaca-*`, `tolima-*`, `caldas-mestizo`, `antioquia-*` | 47 | andina, con archivos municipales fuertes (IDPC, Escuela Taller) |
| **4** | `orinoquia-mestizo-final`, `amazonas-mixto-residual`, `huitoto-residual`, `ticuna-residual` | 62 | llano y río; aquí es donde más fichas van a cambiar de cajón |
| **5** | `pacifico-narino`, `pacifico-restante`, `caribe-mixto-final`, `cesar-mestizo-residual`, `varios-*` | 33 | el resto, y el cierre |

### 6.2 Los pasos de cada ciclo

Doce pasos. Los seis primeros son nuevos o cambian respecto a la spec general.

1. **Preflight.** `npm run mitos:enriquecer:exportar -- --comunidad=<c> --region=<r> --modulos=<ciclo>`.
   Respaldo y estado. `mestizo` y `mixto` existen en varias regiones: sin
   `--region` el kit se niega, y hace bien.
2. **Diagnóstico.** `diagnostico.mjs` sobre el ciclo. Se anotan los números de
   partida: repetición, dispersión, URLs por ficha, catálogo, narradores. Son
   los que hay que mover.
3. **Abrir el módulo.** `abrir-modulo.mjs --modulos=<ciclo>`. Los tres
   escondites del reparto en bloque —el pool, el constructor y el `define`— y
   el bloque compartido de `similitudes`. **Comprobar los tres**: en este lote
   el `similarityCore` de 85 palabras está en las 242 fichas.
4. **Investigación por ciclo, no por mito.** Primero se levanta la bibliografía
   del municipio y del recopilador: eso se hace una vez y sirve para las setenta
   fichas. Después se reparte mito por mito.
5. **Acta de procedencia** (§5.1), una por mito, en
   `content/editorial/<ciclo>/actas-<fecha>/<slug>.json`. **Gate: sin acta no
   hay redacción.**
6. **Redacción** contra el acta, con los cinco campos y el contrato de §5.
   Entrega en `content/editorial/<ciclo>/reescritura-<fecha>/<slug>.json`.
7. **Fuentes estructuradas** en `content/editorial/<ciclo>/fuentes-<fecha>/<slug>.json`,
   con `summary` y `limitation` propios por mito.
8. **Importar y consolidar.** `importar-texto.mjs --apply` y
   `consolidar-fuentes.mjs --reemplazar --apply`.
9. **Cotejar.** Que las URLs del módulo sean las del JSON, ficha por ficha.
   Sin este paso, diez de once fichas u'wa se publicaron con las fuentes
   equivocadas y todo lo demás pasaba en verde.
10. **Auditar y probar.** `auditar-fuentes.mjs` hasta cero bloqueos y
    `node --test` del corpus. Las pruebas que fijan un número de fuentes se
    reescriben sobre la sustancia, nunca se borran.
11. **Aplicar.** `aplicar-texto.mjs` y `aplicar-fuentes.mjs`, cada uno con su
    `--confirm`. `aplicar-texto` mantiene en paso `seo_pages`, que es de donde
    la página saca su `<title>`.
12. **Purgar y verificar.** `revalidar.mjs` y `verificar.mjs --vivo`. No está
    hecho hasta que `verificar --vivo` diga «todo coincide».

### 6.3 Las decisiones que se toman por el camino

Este corpus va a producir más decisiones editoriales que ninguno, porque los
cajones están mal hechos. **Ninguna se toma sola.** Se acumulan en
`content/editorial/<ciclo>/DECISIONES.md` y se presentan al director al cerrar
el ciclo, con tres opciones concretas cada una. Las que ya se sabe que van a
salir:

- fichas que no son mestizas ni mixtas y pertenecen a una comunidad;
- fichas que son el mismo relato con dos slugs en dos municipios;
- fichas cuyo «mixto» no se sostiene con nada;
- títulos que sólo existen en este sitio.

---

## 7. Lo que hay que construir en el kit

Seis cosas. Las cinco primeras son pequeñas; la sexta es el gate.

| qué | dónde | para qué |
|---|---|---|
| `--region` en `diagnostico.mjs` y en el resto del kit | `lib.mjs` ya resuelve la ambigüedad; falta pasarla en todos | `mestizo` existe en cinco regiones |
| Las cuatro medidas de prosa de §5.3 | `diagnostico.mjs` | que «mejorar la redacción» sea una cifra y no una opinión |
| Detección de aperturas repetidas | `diagnostico.mjs` | el defecto más visible del lote |
| `cotejar.mjs` como comando del kit | `scripts/editorial/enriquecimiento/` | hoy es un script de scratchpad y es el que destapó el error más grave |
| Lista de dominios de relleno propia de este corpus | `lib.mjs`, junto a `WEAK_HOSTS` | UNESCO, WorldCat, CiNii, docslib |
| **`validar-acta.mjs`** | nuevo | comprueba que cada acta tenga registro, nudos anclados y clasificación, y **que cada hecho del relato tenga su nudo**. Es el gate del paso 5 |

---

## 8. Qué bloquea y qué no

**Bloquea** (no se publica el ciclo):

- una ficha sin registro de primer escalón;
- una ficha con menos de 8 fuentes sin `AGOTADO` declarado y justificado;
- un hecho del relato sin nudo en el acta;
- repetición entre fichas del ciclo por encima del 2 %;
- una URL caída, o que redirige a portada, o de catálogo;
- una ficha que no nombra de dónde sale el relato.

**No bloquea** (se anota y se sigue):

- servidor sin respuesta o restringido: se comprueba a mano;
- una obra sólo disponible por su ficha institucional, si se declara;
- `http` cuando el servidor no ofrece `https`, si se declara en `limitation`;
- un relato corto de verdad: hay excepción declarada, con su razón escrita.

---

## 9. Cuánto es

Cinco rondas. La primera es la más grande y la que más enseña; conviene cerrarla
entera antes de empezar la segunda, porque lo que se aprenda ahí cambia el brief
de las otras cuatro.

Al terminar: **596 de 596**, y el proceso de enriquecimiento cerrado. Quedarían
fuera sólo los dos mitos kuiva, bloqueados por falta de fuente consultable, y
esa constancia se escribe en su dossier.

---

## 10. Dónde está cada cosa

| | |
|---|---|
| Metodología general | [`metodologia-revision-mitos.md`](metodologia-revision-mitos.md) |
| Proceso general y estado | [`spec-reescritura-y-fuentes.md`](spec-reescritura-y-fuentes.md) |
| **Brief de redacción de este bloque** | [`brief-mestizos-y-mixtos.md`](brief-mestizos-y-mixtos.md) |
| Receta de fuentes al módulo | [`receta-fuentes-al-modulo.md`](receta-fuentes-al-modulo.md) |
| Kit | `scripts/editorial/enriquecimiento/` |
| Módulos | `editorial/<ciclo>/` |
| Actas, reescrituras, fuentes y decisiones | `content/editorial/<ciclo>/` |
