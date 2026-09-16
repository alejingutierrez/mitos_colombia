# Auditoría de las ramas sin fusionar · 16 de septiembre de 2026

55 ramas locales fuera de `main`. Auditadas una por una: la mayoría son
eslabones de dos cadenas o duplicados que `main` ya absorbió. **Lo que hay que
decidir son 10 cosas, no 55.**

Método: `git cherry` para detectar commits ya presentes en `main` con otro hash,
`git merge-base --is-ancestor` para detectar cadenas, y `git merge-tree` para
ensayar cada fusión sin tocar el árbol.

---

## 1. El tronco que `main` nunca recibió

**41 commits · 148 archivos · +23.966 líneas · conflicto: sólo `AGENTS.md`**

Punta: `86e38d1d`. No es la punta de ninguna rama con nombre: se llega a él por
las dos ramas de septiembre. Contiene los **PR #44, #47, #48, #49 y #64**, que
se fusionaron a un sitio que no era `main`:

- Tandas 1 a 5 del rediseño: suelo firme, la portada deja de repetirse, el
  archivo se puede recorrer, las rutas dejan de adivinar, los comentarios salen
  del hoyo, la pauta puede medirse.
- Mapa real de dimensiones del arte vertical.
- Formularios B y F.
- La narración con ElevenLabs completa: cuatro tandas de lechos, el léxico y el
  reparto por carácter del tramo.

Toca 44 componentes, 28 rutas, 24 módulos de `src/lib` y 21 de `content/rutas`.
**Es la pieza más grande y más barata de rescatar**: el único conflicto es
`AGENTS.md`, que se reescribió hoy.

Este tronco es la base sobre la que se apoya todo lo de septiembre. Va primero.

## 2. Encima del tronco

| rama | propios | qué trae | conflictos |
|---|---|---|---|
| `claude/next-muisca-video-3e07cd` | 50 | Video muiscas: Seedance 2.5 a 1080p como modelo por defecto, El Dorado con 17 clips a la primera, el cierre de canal como ley, manual de producción y bitácora, flipbook v3.2 de Huitaca. 1.113 archivos de `content/videos`. Contiene `muiscas-video-kling-first` y `tanda1-base-verde`. | 4 — dos son `AGENTS.md` y `.gitignore` de hoy; los reales son `channel-dna.json` y `proceso-mitos-a-video.md` |
| `claude/myth-internal-image-quality-f935fe` | 1 sobre el tronco | Devolverle a la portada del mito la nitidez que el q75 le quitaba. Contiene `elevenlabs-myth-narration`. | 2 — `AGENTS.md` y `src/components/atoms/ImageFrame.js` |
| `video/bochica` | 7 | Bochica v4 montado e importado, workflow Seedance verificado, título y corte limpio. Incluye el rescate de hoy. | 2 — `channel-dna.json` y `proceso-mitos-a-video.md` |

## 3. La cadena editorial de julio

**29 ramas `codex/*-editorial-review` son una sola cadena lineal.** 27 son
ancestros de `codex/ticuna-editorial-review`; sólo `codex/wayuu-editorial-review`
va suelta.

| rama | propios | qué trae | conflictos |
|---|---|---|---|
| `codex/ticuna-editorial-review` | 73 | **66 comunidades con módulo editorial** (`editorial/<comunidad>/`: universo, fuentes, evidencia, registros, medios) más 460 archivos de prueba en `scripts/editorial/`. `main` sólo tiene 3: muisca, wayuu y myths. Es 1.162 archivos nuevos y apenas 22 modificados: casi todo aditivo. | 11 — `src/app/page.js`, `metodologia`, `comunidades/[slug]`, `privacidad`, `src/lib/image-generation.js`, `next.config.js`, `docker-compose.yml` y 4 más |
| `codex/wayuu-editorial-review` | 3 | Revisión del corpus wayuu, fuera de la cadena. | 3 |

Es trabajo de gran alcance —la base tiene 42 comunidades y 882 mitos, y esto
cubre 66— pero es de julio y va 64 commits por detrás. Los 11 conflictos están
en archivos que `main` rehízo desde entonces.

## 4. Sueltas que valen

| rama | propios | qué trae | conflictos |
|---|---|---|---|
| `claude/carousel-generator-design-439253` | 4 | Sistema editorial v10 de carruseles con acabado A+C, planificador de guion con las siete reglas, iconografía `carousel/v3` (40 archivos). | **ninguno, fusiona limpio** |
| `claude/video-tests-search-ae3b0e` | 5 | Añade un solo archivo: `docs/videos/PRODUCCION-END-TO-END.md`. | — |
| `codex/tarot-commerce-production` | 2 | Landings de comercio del tarot. | 11, todos en archivos de tarot que `main` ya rehízo |
| `claude/muisca-myths-video-mvp-834b41` | 1 | Rescate del 2026-09-16: 35 archivos del A/B de casting de voces. | — |
| `claude/myth-internal-mobile-design-dba6fe` | 1 | Rescate del 2026-09-16: `dep.html`. | — |
| `claude/rehacer-imagenes-nueva-tecnica-a4102d` | 1 | **No fusionar en crudo.** Tiene contenido real que `main` no tiene —`enhanceImageBuffer()` con `IMAGE_POST_BRIGHTNESS`/`IMAGE_POST_SATURATION`, la concurrencia con backoff de `regenerate-craft-images.mjs` y `scripts/reprocess-realce.mjs`— pero reescribe 161 líneas de `src/lib/image-generation.js`, que `main` rehízo después con GPT Image 2. Hay que extraer las piezas, no fusionar. | 1 |

## 5. Descartables — 13 ramas

**Cero commits propios.** Todo su contenido ya está en `main` con otro hash,
verificado con `git cherry`:

`claude/comunidades-redesign-97e4a9` · `claude/peaceful-colden-ff7a55` ·
`claude/regiones-mural` · `claude/seo-backlog-handoff` · `claude/seo-eeat` ·
`claude/seo-index-linking` · `claude/seo-sitemap-hygiene` ·
`codex/methodology-review-public` · `codex/myth-detail-pilot-fixes` ·
`codex/tarot-landing-differentiation` · `fix/search-navigation`

**Superadas:**

- `claude/home-redesign-lost-changes-488e39` — **el lote 6 editorial muisca no
  se perdió: está en `main`.** La rama parecía divergente por una base de
  fusión múltiple, pero `git diff main..rama` sobre `editorial/muisca` es vacío.
- `claude/stupefied-benz-a1d43a` — el rediseño editorial del 2 de julio, 105
  commits por detrás y **142 conflictos**. `main` ya hizo ese rediseño por otro
  camino.
- `backup/local-sin-commitear-20260729` — respaldo de julio. Sus 123 archivos
  nuevos son logs de `.playwright-cli/`.

Las 27 ramas contenidas en `codex/ticuna-editorial-review` se pueden borrar sin
pérdida en cuanto se decida qué hacer con la punta: son ancestros suyos.

---

## Orden recomendado

1. **El tronco.** Un conflicto trivial y desbloquea todo septiembre.
2. **`myth-internal-image-quality`** — un commit encima del tronco.
3. **`next-muisca-video`** y **`video/bochica`**, que comparten los dos
   conflictos reales de documentación de video.
4. **`carousel-generator-design`**, que fusiona limpio, y el documento suelto de
   `video-tests-search`.
5. **La cadena editorial de julio**: decisión aparte, es la única que pide
   trabajo de verdad.
6. Borrar las 13 descartables y las 27 contenidas.

Hacer esto **antes** de mover carpetas: cualquier reorganización convierte estas
fusiones en conflictos masivos.
