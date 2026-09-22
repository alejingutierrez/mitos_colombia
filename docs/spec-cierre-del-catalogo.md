# Spec · cierre del catálogo

**Qué cierra:** todo lo que falta de los 596 mitos, hasta que el tablero
([`estado-enriquecimiento.md`](estado-enriquecimiento.md)) no tenga una sola
fila abierta. **Medido contra Neon el 2026-09-22**, ficha por ficha, con el
módulo de cada una resuelto desde `editorial/<ciclo>/records.mjs`.

Este spec no cambia el proceso: lo ordena hasta el final. El cómo sigue
estando en [`spec-mestizos-y-mixtos.md`](spec-mestizos-y-mixtos.md) (§5 el
contrato de texto, §6.2 los doce pasos, §8 qué bloquea) y en
[`spec-reescritura-y-fuentes.md`](spec-reescritura-y-fuentes.md) para las
comunidades. Aquí va **qué falta, en qué orden, qué hay que arreglar antes en
el kit y cuándo se da por cerrado**.

---

## 1. Qué es «cerrado»

Una ficha está cerrada cuando cumple las seis cosas, y no antes:

1. **Acta** en `content/editorial/<ciclo>/actas-<fecha>/<slug>.json`, en verde
   con `validar-acta.mjs --con-relato`: cada nombre, fecha y cifra del relato
   tiene un nudo anclado en un primario.
2. **Los cinco campos** en el módulo, dentro del contrato (§5 del spec del
   bloque), con repetición ≤ 2 % dentro del ciclo y 0 % entre ciclos.
3. **≥ 8 fuentes** en el bloque mestizo-mixto (≥ 5 en comunidades, con meta
   de 8), o `fuentesAgotadas` declarado con su razón.
4. **Cotejo 1:1**: `cotejar.mjs` da «coincide» en la ficha, es decir, las URLs
   que el módulo **resuelve** son las del JSON de fuentes.
5. **Auditoría con 0 bloqueos**, con los 403 comprobados a mano.
6. **`verificar --vivo` coincide** en la ruta pública, después de
   `aplicar-texto`, `aplicar-fuentes` y `revalidar`.

Una ficha **bloqueada y declarada** (sin registro consultable, spec §8)
también cuenta como resuelta si lleva `nudos: []` y «sin decidir» en su acta,
y su decisión está escrita en el `DECISIONES.md` del ciclo. Lo que **no**
cuenta como cerrado es tener los cinco campos: 18 fichas los tienen y no están
verificadas (carril C6).

---

## 2. El hueco, medido

| | fichas | cerradas | abiertas |
|---|---:|---:|---:|
| Bloque mestizo y mixto (incluye el huérfano) | 254 | 70 | **184** |
| 38 comunidades indígenas y afro | 342 | 342 con ≥ 5 fuentes | **84** bajo la meta de 8 · **1** sin los cinco campos · **41** con deriva módulo ↔ Neon |
| **Total** | **596** | | |

Las 184 abiertas del bloque, por carril:

| carril | qué | fichas | estado de partida |
|---|---|---:|---|
| **C1** | Bogotá + vallenato: **publicar** | 16 + 2 | acta, relato y fuentes hechos; Bogotá ya importada, cotejada y auditada el 2026-09-22; 2 bogotanas bloqueadas |
| **C2** | Santander y Piedecuesta | 38 | bibliografía cerrada; 8 actas; un primario extraído |
| **C3** | Llano y río + amazónicas residuales | 31 + 11 | bibliografía de las 31 cerrada; las 11 tienen ≥ 8 fuentes y ningún campo |
| **C4** | Andina sin empezar | 49 | nada |
| **C5** | Cierre: caribe mixto, varios, Pacífico sin texto | 19 | nada |
| **C6** | Forma cumplida sin verificar | 18 | cinco campos y fuentes de rondas viejas; sin acta ni cotejo |
| | **total** | **184** | |

Y los de comunidades:

| carril | qué | fichas |
|---|---|---:|
| **C7a** | `el-origen-de-las-frutas` (huitotos) sin los cinco campos | 1 |
| **C7b** | Muiscas: bajar sus fuentes de Neon al módulo | 41 |
| **C7c** | Fase B: 23 comunidades con fichas bajo 8 fuentes (mínimo actual 5) | 84 |

**Discrepancias con el tablero del 2026-09-21, y por qué.** Allí figuraban
«57 sin empezar» y «19 de forma cumplida». Con el módulo resuelto por slug,
las sin empezar son **68** (49 andinas + 19 de cierre): entran aquí las 3 del
Pacífico sin texto y las de Tolima que el tablero contaba aparte. Las de
forma cumplida son **18** porque las 2 vallenatas, que tienen los cinco campos
en Neon, ya están rehechas en el repo y pasan a C1. Las «19 mixtas del
Amazonas» del tablero son las 8 de `amazonas-mixto-residual` que tienen
fuentes (van en C3 con su ciclo) más las 11 residuales huitoto y ticuna.

**Tres cosas que la medición destapó y el tablero no tenía:**

1. **Tres fichas de Piedecuesta están en el módulo y no en Neon**:
   `la-luz-del-limonal`, `la-bruja-silbona` y `la-llorona-del-molino`. Por eso
   la bibliografía habla de 41 y Neon de 38.
2. **Diez fichas de comunidad están en su módulo y nunca se publicaron**:
   `como-aparecio-la-muerte-en-el-choco` (afrocolombianos), cinco yagua, una
   yucuna y tres yukpa.
3. **La Fase B de comunidades es mucho más grande** de lo que decía el
   tablero: no son seis comunidades sino 23, con 84 fichas.

La lista completa de slugs por carril está en el §9.

---

## 3. Antes de la primera ronda: cuatro arreglos del kit

Son pequeños, y sin ellos cada ciclo repite el error que Bogotá destapó el
2026-09-22.

### K1 · El `define` que no lee `sourceKeys`, en 26 de los 27 ciclos pendientes

En Bogotá, el consolidador escribió las fuentes nuevas en cada ficha y el
módulo **siguió publicando las viejas**: `define-editorial-myth.mjs` llamaba a
`pick…Sources(input.slug)`, que lee un mapa por slug en `sources.mjs` e ignora
lo que la ficha declara. El cotejo lo cazó: seis fichas sin una sola URL en
común con su investigación.

**El mismo patrón está en 26 de los 27 ciclos que faltan** (todos menos
`piedecuesta-relatos-legendarios`). Es el tercer escondite del reparto en
bloque —el `define`— y `abrir-modulo.mjs` hoy no lo abre.

- `abrir-modulo.mjs` reescribe la llamada a
  `pick…Sources(input.sourceKeys || input.slug)`, hace que `pick…` acepte una
  lista y sube el piso a 8 para las fichas con `sourceKeys` (5 para las que
  siguen heredadas). Es exactamente el arreglo que se aplicó a mano en los dos
  módulos bogotanos.
- `comprobar-modulo.mjs` falla si encuentra `pick…Sources(input.slug)` a
  secas en un ciclo con fichas reescritas.
- Se corre sobre los 26 de una vez, en un mismo commit, con sus tests.

### K2 · La auditoría pisa su propio informe

`auditar-fuentes.mjs` escribe en
`content/editorial/<comunidad>/auditoria-fuentes-<fecha>.json`. Dos ciclos del
mismo cajón auditados el mismo día se sobrescriben: la de Bogotá nocturno se
llevó por delante la de memoria. El nombre del archivo pasa a llevar
`--modulos`.

### K3 · El cambio de título tiene que verse

`aplicar-texto.mjs` en dry-run lista `title` entre los campos que cambian,
pero no dice de qué a qué. En Bogotá cambiaban 13 de 14 títulos, y tres
resolvían en silencio una decisión abierta («Margarita **Villaquirá**»,
«**Antonín**, el Bobo»). El dry-run imprime el título `antes → después`, e
`importar-texto.mjs` avisa si el `titulo` del JSON trae un nombre propio que
ningún nudo del acta ancla.

### K4 · Los tests que fijan frases del texto viejo

Cada ciclo trae tests que afirman frases literales del texto heredado. En
Bogotá, seis aserciones fijaban justo lo que el cotejo desmintió (el Mono «de
1775», el «hábito blanco»). La regla no cambia: **se reescriben sobre la
sustancia y nunca se borran**. Lo nuevo es hacerlo al abrir el ciclo y no el
día de aplicar: al abrir el módulo se marcan las aserciones de texto con
`// heredada: reescribir tras el cotejo`.

---

## 4. Las decisiones, todas juntas y primero

Hoy las decisiones están repartidas entre cuatro `DECISIONES.md` y el tablero,
y cada ciclo se detiene al final esperándolas. **Este spec las adelanta:** una
sola sesión con el director antes de C2, con las tres opciones de cada una ya
escritas en el `DECISIONES.md` de su ciclo. Las que salgan de ciclos nuevos se
acumulan y se presentan al cerrar cada carril, no ficha por ficha.

| # | decisión | fichas | dónde está escrita |
|---|---|---:|---|
| D1 | `el-hada-de-los-canaverales` **no tiene comunidad**: elegir su cajón | 1 | tablero §5 |
| D2 | El libro de López Orozco (2008) sin ejemplar: buscarlo, publicar sin él, o dejar las 2 bloqueadas | 12 (2 bloqueadas) | `content/editorial/bogota-mestizo/DECISIONES.md` §0 |
| D3 | «Villaquirá» en el título de `la-loca-margarita` | 1 | ídem §A |
| D4 | La cadena libro → ficha distrital → televisión, como una sola mano | 2 | ídem §B |
| D5 | `el-bobo-del-tranvia` y «Antonín», sin registro | 1 | ídem §C |
| D6 | Los otros títulos bogotanos que cambian (Monserrate, Russi, Arias) | 3 | informe del 2026-09-22 |
| D7 | `la-mancarita` publica otra historia | 1 | `content/editorial/piedecuesta-santander/DECISIONES.md` §A |
| D8 | Cuatro santandereanas pasan a «mixto» | 4 | ídem |
| D9 | `piedecuesta-vicente-arenas-i` sin primer escalón (8), y 7 más sin rastro | 15 | bibliografía de la ronda 2 |
| D10 | Las 3 piedecuestanas del módulo que no están en Neon: publicarlas o retirarlas | 3 | este spec |
| D11 | Siete de las doce amazónicas no sostienen «mixto», y el caso tipo `chimbilaco` | 7+ | bibliografía de la ronda 4, §III |
| D12 | `el-tesoro-de-morgan` es raizal y no hay comunidad raizal | 1 | tablero §5 |
| D13 | Las 10 fichas de comunidad que están en módulo y nunca se publicaron | 10 | este spec |

**Regla para lo que no se decida en esa sesión:** la ficha queda bloqueada y
declarada, y el resto de su ciclo se publica. Un ciclo no espera por una
ficha.

---

## 5. El orden

Por lo que cada carril desbloquea, no por región.

### C1 · Publicar lo listo — 18 fichas · 1 sesión corta

- **Bogotá (14):** importada, cotejada 14/14, auditada con 0 bloqueos y con
  los tests en verde el 2026-09-22, en el worktree
  `enriquecimiento-mitos-mestizos-mixtos-d94433` y todavía sin commit. Sólo
  falta `aplicar-texto` → `aplicar-fuentes` → `revalidar` →
  `verificar --vivo`, con D3, D5 y D6 resueltas. Si no lo están, se publican
  las 11 que no dependen de ellas.
- **Vallenato (2):** `la-bruja-del-trinche` y `la-sirena-de-hurtado`. Tienen el
  ciclo completo en `content/editorial/caribe-vallenato/`, pero su módulo
  `cesar-mestizo-residual` no las recoge. Se importan ahí y siguen la misma
  cadena. Hoy están publicadas con Wikipedia, Mapcarta y Scribd: cada día sin
  aplicar es un día con aparato vetado en producción.

### C2 · Santander y Piedecuesta — 38 fichas · 5-6 rondas

La bibliografía está hecha y encontró que el ciclo no tiene un recopilador
sino tres: Valenzuela Sánchez (abierto, con ISBN, en el sitio del autor), Juan
de Dios Arias vía Villa Posse (abierto) y Vicente Arenas Mantilla (cerrado).
Tras D9, lo previsible es:

- **8 con acta** (seis de `santander-folclor-clasico`, una de
  `santander-mixto-residual` y una de `piedecuesta-segundo-ciclo`): falta
  relato y fuentes.
- **17 con registro consultable** según la bibliografía: acta, relato y
  fuentes.
- **Las de Vicente Arenas y las 7 sin rastro**: bloqueadas y declaradas, salvo
  que D9 diga otra cosa.

Lo primero es extraer el texto de Valenzuela Sánchez a `primarias/`, que es
el cuello de botella. Si el PDF viene escaneado a dos páginas por hoja, el
canalón se detecta hoja por hoja.

### C3 · Llano y río — 31 + 11 fichas · 6-7 rondas

- **Orinoquía (19):** dos subciclos con obra abierta, Vargas Barón 1996 (11)
  y Baquero Nariño (6, con página y narrador), y dos independientes. El
  Silbón y la Bola de Fuego se comparten con Venezuela, y la bibliografía ya
  dice qué orilla tiene registro.
- **Amazonas mixto (12):** aquí cambian de cajón la mayoría (D11). Primero la
  decisión de cajón, y sólo después el acta.
- **Amazónicas residuales (11):** `huitoto-residual` (4) y `ticuna-residual`
  (7) tienen ≥ 8 fuentes en Neon y ningún campo. **No se da por buena ninguna
  de esas fuentes:** su reparto es de la época del bloque y pasa por el cotejo
  como cualquier otro. Varias son candidatas a volver a su comunidad (huitotos,
  ticuna) en lugar de quedarse en «mixto»; se decide en la misma sesión que
  D11.

### C4 · Andina sin empezar — 49 fichas · 5-6 rondas

`antioquia-mestizo` (10), `antioquia-mixto-residual` (2), `caldas-mestizo`
(9), `tolima-mestizo-residual` (4), `tolima-mixto-residual` (11),
`boyaca-mestizo-residual` (1), `boyaca-mixto-residual` (4),
`andina-varios-mestizo-residual` (5) y `andina-varios-mixto-residual` (3).

Ninguna tiene una sola fuente en Neon. Se trabajan **en tres ciclos de
investigación**, no en nueve, porque la bibliografía se comparte:

1. **Antioquia y Caldas (21):** paisa, con el archivo de la Universidad de
   Antioquia y la prensa regional.
2. **Tolima (15):** con los repositorios de la Universidad del Tolima.
3. **Boyacá y andina-varios (13):** el residual. Es donde más fichas van a
   resultar ser otra cosa: muiscas mal ubicadas, o duplicados de Bogotá.

### C5 · Cierre — 19 fichas · 2-3 rondas

`caribe-mixto-final` (6), `varios-mestizo-final` (3), `varios-mixto-final`
(7), y las tres del Pacífico que no tienen texto (`pacifico-narino` 2,
`pacifico-restante` 1). El cajón «varios» es el más sospechoso del catálogo:
antes del acta, cada ficha tiene que decir a qué región pertenece de verdad.

### C6 · Forma cumplida sin verificar — 18 fichas · 2 rondas

Tienen los cinco campos y fuentes de rondas anteriores, y pasan cualquier
control automático. Son 12 del Pacífico, 3 de
`andina-legacy-editorial-residual` (una es el huérfano), 2 katío mixtas y 1
afro.

**No se reescriben por defecto.** Se les escribe acta **retroactiva** contra
el primario y se cotejan. El patrón ya se conoce: al escribir actas
retroactivas en muiscas salieron 11 invenciones que el linter de forma no
veía. De cada ficha sale una de tres cosas:

- el texto se sostiene, y la ficha cierra sólo con su acta;
- el texto tiene invenciones o finales cambiados, y se reescribe;
- no hay primario consultable, y se declara **heredada** en su acta, y eso se
  dice en `historia`.

### C7 · Comunidades — 1 + 41 + 84 fichas · 4-5 rondas

- **C7a:** `el-origen-de-las-frutas` se redacta contra el primario huitoto
  que ya está en el repo. Es una sola ficha.
- **C7b:** las fuentes muiscas se bajan de Neon a `editorial/muisca/` con
  `exportar.mjs`, hasta que `verificar` no marque deriva. Mientras tanto **no
  se corre `sync --apply` sobre muiscas**: las borraría.
- **C7c:** Fase B pura, sin tocar el texto (receta en
  [`receta-fuentes-al-modulo.md`](receta-fuentes-al-modulo.md)). Primero las
  seis que están peor, con todas o casi todas sus fichas bajo 8: desana (8 de
  8), tucano (7 de 7), barasana (6 de 6), ticuna (6 de 6), guahibo-sikuani (9
  de 10) y motilón-barí (5 de 6), que suman 41. Después chimila (10) y katíos
  (6), y al final las 27 dispersas. Una ficha que no dé para 8 con fuentes
  defendibles declara `fuentesAgotadas`: **mejor seis buenas que ocho con
  relleno.**

---

## 6. Cómo se trabaja cada ronda

Lo que ya se aprendió, escrito como regla para no volver a pagarlo:

- **El texto y la investigación van por Bedrock; OpenAI, sólo imágenes y
  voz.** Nada de este spec genera imágenes.
- **Agentes con encargos cortos:** de 2 a 4 fichas por agente, y el
  entregable escrito a disco antes que nada. Un agente que pasa 600 segundos
  sin escribir muere y se pierde todo.
- **Todo en paralelo dentro del carril:** se lanza la ronda entera, no ficha
  por ficha.
- **Cruzar antes de dar algo por perdido:** antes de declarar que una fuente
  no existe, buscarla en los `primarias/` ya extraídos. Dos veces lo que
  parecía perdido estaba en «Varias regiones» del mismo tomo.
- **Un 503 es un límite de peticiones**, no una fuente caída.
- **Mostrar una antes de aplicar:** en el paso 11 de cada ciclo se enseña una
  ficha completa y se espera el sí antes de escribir en Neon.
- **Respaldo antes de cada escritura** (lo hacen `aplicar-texto` y
  `aplicar-fuentes`), y después `revalidar` + `verificar --vivo`. No está
  hecho hasta que `verificar --vivo` diga «todo coincide».
- **A git va el conocimiento:** actas, reescrituras, fuentes, primarios
  extraídos, decisiones e informes de auditoría. Los PDF descargados no.
- **Un commit por paso con nombre** (acta, relato, fuentes, cotejo,
  publicado), como en los ciclos Caribe y Bogotá. Así cualquiera puede
  retomar desde el último.

---

## 7. Coste y calendario

Al ritmo medido en Caribe y Bogotá, una ronda de agentes cubre una de estas
cosas: la bibliografía de un ciclo, las actas de 15-20 fichas, los relatos de
15-20, o las fuentes de 10-14. Las fuentes son el cuello de botella, porque
cada URL se abre.

| carril | fichas | rondas | sesiones largas |
|---|---:|---:|---:|
| K1-K4 (kit) | — | — | 0,5 |
| Decisiones D1-D13 | — | — | 0,5, con el director |
| C1 | 18 | 1 | 0,5 |
| C2 | 38 | 5-6 | 1 |
| C3 | 42 | 6-7 | 1,5 |
| C4 | 49 | 5-6 | 1,5 |
| C5 | 19 | 2-3 | 0,5 |
| C6 | 18 | 2 | 0,5 |
| C7 | 126 | 4-5 | 1 |
| **total** | **310** | **25-30** | **≈ 7** |

C2 y C7c pueden ir en paralelo desde el principio: no comparten módulos,
fuentes ni decisiones.

---

## 8. Cómo se sabe que terminó

La consulta del tablero —`myths` × `editorial_myths` por `slug`, contando
`sources_json` + `key_sources_json`— tiene que devolver esto:

| medida | hoy | al cerrar |
|---|---:|---:|
| fichas con los cinco campos | 431 | **596**, menos las bloqueadas y declaradas |
| fichas sin ninguna fuente | 146 | **0** |
| fichas del bloque con ≥ 8 fuentes o `fuentesAgotadas` | 106 | **todas** las publicables |
| fichas de comunidad con ≥ 8 fuentes o `fuentesAgotadas` | 258 | **342** |
| fichas sin comunidad | 1 | **0** |
| fichas del bloque con acta | 96 | **todas**, incluidas las 18 de C6 |
| módulos con deriva frente a Neon | muiscas | **ninguno** |
| slugs en módulo y no en Neon | 13 | **0**, publicados o retirados por decisión |

Al final el tablero se reescribe una última vez con esos números y deja
abiertas sólo las bloqueadas y declaradas, cada una con su razón.

---

## 9. Anexo · los slugs, carril por carril

Entre corchetes, las fuentes que la ficha tiene hoy en Neon, cuando tiene
alguna.

### C1 · Bogotá (16)

- **bogota-mestizo-memoria** (8): `el-bobo-del-tranvia`, `el-diablo-del-puente-del-comun`, `el-enigmatico-abogado`, `el-loco-arias`, `el-mono-de-la-pila`, `la-leyenda-del-santuario-de-monserrate`, `la-loca-margarita`, `los-fantasmas-de-la-candelaria`
- **bogota-mestizo-nocturno** (8): `el-hombre-del-farol`, `el-toro-en-el-ascensor`, `el-venado-de-oro`, `la-bruja-del-tranvia`, `la-monja-de-las-rosas`, `la-monja-vidente-y-el-taxista`, `la-mula-herrada`, `los-esqueletos-caminantes`

### C1 · vallenato (2)

- **cesar-mestizo-residual** (2): `la-bruja-del-trinche` [26], `la-sirena-de-hurtado` [27]

### C2 · Santander (38)

- **piedecuesta-clasicos-final** (4): `duende-del-salto`, `el-anima-coy`, `el-silbon`, `los-tunjos-de-la-cantera`
- **piedecuesta-espantos-y-entierros** (8): `el-carriazo-de-vereda-san-isidro`, `el-doctor-galeacer`, `el-reventon-de-jacobo`, `la-cueva-de-la-pisca`, `la-diabla-castigadora`, `la-hilandera`, `la-lampara-de-petroleo`, `la-monedita-en-la-alcancia`
- **piedecuesta-relatos-legendarios** (4): `el-cerro-encantado`, `el-quijote-piedecuestano`, `la-vista-del-libertador`, `un-libertador-piedecuestano`
- **piedecuesta-segundo-ciclo** (7): `cuento-fantastico`, `el-diablo-de-umpala`, `el-griton`, `la-campana-del-diablo`, `la-cueva-del-diablo`, `la-mancarita`, `nueva-version-de-la-luz-del-limonal`
- **piedecuesta-vicente-arenas-i** (7): `el-fantasma-de-el-horizonte`, `el-pollo-de-las-animas`, `la-mechuda`, `la-mula-del-diablo`, `la-mula-maneada`, `la-puerta-del-perdon`, `la-sayona-del-cementerio`
- **santander-folclor-clasico** (6): `el-cacique-salomon`, `el-trapiche-ardiendo`, `la-piedra-del-muerto`, `lagunas-encantadas`, `lo-que-ensenan-las-cuevas`, `tal-para-cual`
- **santander-mixto-residual** (2): `el-ermitano-iracundo`, `talabad`

### C3 · amazónicas residuales (11)

- **huitoto-residual** (4): `el-diluvio-guinadoma` [13], `nonuetoma` [14], `taife` [14], `taik` [13]
- **ticuna-residual** (7): `moe-e-ipi` [14], `origen-de-la-luna` [14], `origen-de-los-micos-boquiblancos` [14], `origen-de-los-vegetales-cultivaldos` [14], `origen-del-agua` [15], `origen-del-gavilan` [14], `origen-del-sol` [14]

### C3 · llano y río (31)

- **amazonas-mixto-residual** (12): `chuya-chaqui`, `el-bufeo` [15], `el-chuy-achaque` [14], `el-cotomachaco` [13], `el-descubrimiento-del-agua-y-los-peces`, `el-hijo-de-tuhixana`, `la-cobra-grande` [13], `la-curupira` [14], `madre-de-playa` [14], `ngutapa-y-chimuiyae` [15], `petapeta` [13], `yacuruna`
- **orinoquia-mestizo-final** (19): `amanecer-llanero`, `el-brujo-de-la-costa-del-pauto`, `el-domador-de-brujas`, `el-dominguez`, `el-llano-ayer-hoy`, `el-llano-cobra-sus-deudas`, `el-tesoro-de-caribare`, `el-tirapiedra`, `el-toro-negro-patorreal`, `la-bola-de-fuego`, `la-bruja-de-los-ojos-miel`, `la-culebra-cascabel`, `la-tertulia-de-la-italiana`, `las-chanzas-de-don-felipe`, `leal-hasta-la-muerte`, `los-delfines-dorados`, `los-monstruos-de-paratebueno`, `los-tres-luceros`, `madre-rio-o-mohana`

### C4 · andina sin empezar (49)

- **andina-varios-mestizo-residual** (5): `el-anima-sola`, `la-barbacoa-del-muerto`, `la-nina-de-la-carta`, `la-vieja-colmillona`, `los-meneses`
- **andina-varios-mixto-residual** (3): `el-hojarasquin-del-monte`, `esperanza-en-el-oriente`, `la-mano-peluda`
- **antioquia-mestizo** (10): `el-paton`, `el-perro-negro`, `la-cabellona`, `la-dama-verde`, `la-rodillona`, `las-ilusiones`, `los-rescoldos`, `maria-centeno`, `maria-la-larga`, `no-hay-deuda-que-no-se-pague`
- **antioquia-mixto-residual** (2): `el-mareco`, `el-patetarro`
- **boyaca-mestizo-residual** (1): `el-tesoro-de-buzaga`
- **boyaca-mixto-residual** (4): `el-cucacuy`, `furatena`, `la-sombra-creadora`, `los-mensajeros-de-los-dioses`
- **caldas-mestizo** (9): `cuento-de-animas`, `de-frente-al-sol`, `el-aserrador`, `el-cacique-cumanday`, `el-coco`, `el-cole-cabuya`, `el-viejo-del-costal`, `in-illo-tempore`, `las-brujas`
- **tolima-mestizo-residual** (4): `el-poira`, `el-sombreron`, `la-patasola`, `la-patasola-mixto`
- **tolima-mixto-residual** (11): `brujas-y-duendes`, `dioses-lares`, `el-cazador`, `el-chenche`, `el-guango`, `el-silbador`, `el-tunjo`, `la-candileja`, `la-madre-agua`, `la-muelona`, `la-tarasca`

### C5 · cierre (19)

- **caribe-mixto-final** (6): `beda-nansi-beda-monkey-y-el-molino`, `el-hombre-caiman`, `mico-y-nansi`, `tiger-y-el-baile-de-perros`, `tigre-y-nansi`, `un-perro-una-cabra-y-beda-tiger`
- **pacifico-narino** (2): `el-padre-mera`, `la-sirena-del-arco`
- **pacifico-restante** (1): `el-barco-fantasma`
- **varios-mestizo-final** (3): `el-bus-fantasma`, `el-judio-errante`, `la-viudita`
- **varios-mixto-final** (7): `el-cura-sin-cabeza`, `el-jinete-negro`, `el-mandingas`, `el-mohan`, `la-llorona`, `la-madremonte`, `los-duendes`

### C6 · forma sin verificar (18)

- **afrocolombianos** (1): `el-riviel-del-rosario` [25]
- **andina-legacy-editorial-residual** (3): `catalina-la-napanga` [28], `el-hada-de-los-canaverales` (sin comunidad) [30], `el-silbo-de-quinunchu` [28]
- **katio** (2): `dobaida` [6], `el-tesoro-de-dabeiba` [6]
- **pacifico-narino** (5): `chiles-y-cumbal` [33], `el-diablo-chivo-de-rumichaca` [27], `guagua-rayo` [27], `la-totuma-de-la-cocha`, `taita-galeras` [27]
- **pacifico-restante** (7): `buziraco` [26], `el-caballo-del-morro` [26], `el-duende-peluquero` [27], `el-roble-del-caballero` [26], `la-casa-de-la-tradicion` [25], `la-piramide-del-chontaduro` [27], `la-yesca` [27]

### C7 · comunidades bajo 8 fuentes (84)

- **chimila** (10): `el-algodon` [7], `el-hombre-que-sono-con-caiman` [7], `el-hombre-que-sono-con-danta` [7], `el-palo-de-agua` [7], `la-mala-mujer` [7], `los-animales-hablan` [6], `los-brujos` [7], `los-canibales` [7], `los-monos` [6], `los-muertos-en-el-monte` [7]
- **guahibo-sikuani** (9): `el-creador-del-cosmos` [6], `el-tigre` [7], `historia-de-un-brujo` [7], `historia-de-un-tigre` [7], `historia-de-un-viejo` [6], `kawiri-monae` [7], `la-comida-para-los-muertos` [7], `la-danta-y-el-terecay` [7], `la-mujer-sarnosa` [7]
- **desana** (8): `agamahsapu-y-el-tiempo-del-umari` [7], `creacion-desana` [7], `el-origen-de-la-mandioca-desana` [7], `el-origen-de-la-noche-desana` [7], `gainpaya-y-el-origen-del-chontaduro` [7], `guelamun-ye-el-nieto-del-trueno` [7], `nuguye-y-sepiro-fuego-y-creciente` [7], `yurupari` [7]
- **tucano** (7): `cuando-la-danta-perdio-su-hegemonia` [5], `el-origen-del-hombre` [5], `la-aparicion-del-sol-del-viento-y-los-mares` [5], `la-semilla-de-la-yuca-tucano` [5], `los-blancos-dominan-a-los-indios` [5], `yepa-abandona-la-tierra` [5], `yepa-castiaga-a-los-animales` [5]
- **barasana** (6): `el-origen-de-la-gente-de-los-frutales-silvestres` [5], `kahe-sawari-kata-yai-y-el-surgimiento-barasano` [5], `la-cuerda-de-leche-y-la-anaconda-yeba` [5], `la-luna` [6], `los-cerros-estantillos-y-la-cera-de-abejas` [5], `sol-luna-dia-y-noche` [5]
- **katios** (6): `ancastor` [7], `cobaima` [6], `coste` [6], `fragmentos-de-otras-tradiciones` [7], `icades-name` [7], `los-bibidigomias` [6]
- **ticuna** (6): `creacion` [5], `el-combate-del-sueno-y-la-palabra` [5], `la-canoa-de-moe` [5], `origen-de-la-luna-tikuna` [5], `origen-del-friaje-tikuna` [5], `origen-del-sol-tikuna` [5]
- **motilon-bari** (5): `caminar-liviano-hacia-el-mas-alla` [7], `el-dia-en-que-la-luna-y-la-tierra-se-separaron` [7], `el-gran-arbol-que-hizo-los-rios` [7], `nandou-chibaig-y-las-luces-del-cielo` [7], `sibabio-y-las-cenizas-del-mundo` [7]
- **africano** (3): `anansi` [7], `chimbilaco` [6], `tulavieja-tunda` [7]
- **makawanes** (3): `creacion-makawanes` [6], `el-alma` [6], `la-gran-inundacion` [5]
- **muiscas** (3): `la-aparicion-del-hombre` [7], `nemequene` [7], `nencatacoa` [7]
- **afrocolombianos** (2): `kijimba-de-las-animas` [7], `la-sierpe-de-bete` [6]
- **chami** (2): `el-gusano-gigante` [7], `horchibari` [7]
- **huitotos** (2): `monairue-jitoma-y-nofida-jitoma` [7], `peleas-y-aventuras-entre-el-sobrino-conejo-y-el-tio-tigre` [7]
- **koguis** (2): `el-algodon-koguis` [7], `la-candela-gotze` [7]
- **kuibas** (2): `creacion-kuibas` [7], `namon-y-la-inundacion` [7]
- **yucuna** (2): `el-nacimiento-de-los-matapi` [7], `kanuma` [7]
- **awa** (1): `barbachas-del-arbol-grande` [7]
- **embera** (1): `los-burumias-y-carautas` [7]
- **pananes** (1): `el-cualchio-y-la-olla-del-granizo` [7]
- **yaguas** (1): `yagua` [6]
- **yukpa** (1): `la-piedra-que-flota` [7]
- **zenu** (1): `juan-lara-y-la-trenza-del-aire` [7]
