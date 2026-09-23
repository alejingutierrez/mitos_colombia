# Encargo común · Fase B de comunidades · carril C7c

Lo lee cada agente de fuentes de las comunidades. Su mensaje le dice qué
comunidad y qué slugs le tocan; todo lo demás está aquí. **El texto no se
toca: sólo fuentes.**

## Límites

- Trabajas en `/Users/alegut/MyApps/Personal/mitos_colombia/.claude/worktrees/enriquecimiento-mitos-mestizos-99b035`.
  No hagas `cd` a otra carpeta ni a otro worktree.
- **No toques git, ni Neon, ni los módulos de `editorial/`, ni ningún script
  de aplicación.** Sólo escribes en `content/editorial/<comunidad>/fuentes-2026-09-22/`.
- Sin herramientas de navegador. Para abrir URLs: `curl -sSL -A 'Mozilla/5.0
  (Macintosh; Intel Mac OS X 14_0) AppleWebKit/537.36 Chrome/128.0 Safari/537.36'`,
  WebFetch o WebSearch.
- **Regla de supervivencia:** un agente que pasa 10 minutos sin escribir en disco
  muere y se pierde todo. Escribe el JSON de cada ficha en cuanto tengas sus
  primeras fuentes, y reescríbelo si encuentras más.

## Lo que tienes que leer antes

1. `docs/receta-fuentes-al-modulo.md` y la Fase B de
   `.claude/skills/enriquecimiento-mitos/SKILL.md` (pasos 2 a 6).
2. El módulo de la comunidad, `editorial/<carpeta>/`: el texto de cada ficha y
   sus `sourceKeys` (en `definitions.mjs`, `records.mjs` o `myths/<slug>.mjs`) y
   el pool de obras ya citadas (`sources.mjs`). **No propongas ninguna obra que
   ya esté en el pool con la misma URL.**
3. Lo ya investigado para esa comunidad en `content/editorial/<comunidad>/`
   (`busqueda-*`, `primarias/`, textos `.txt`): ahí suele estar la obra que trae
   cada mito, con su página. Búscale una URL canónica abierta si no la tiene.
4. El §5 de `docs/spec-reescritura-y-fuentes.md`, en la fila de la comunidad:
   qué primario se abrió y qué se corrigió.

## El criterio

- La fuente trata **directamente** ese mito, ese personaje o ese lugar. Una
  monografía general del pueblo no basta si no dice nada de este relato.
- **Abre cada URL y confirma que contiene lo que dices sobre ESE mito.** Un 200
  no basta: una portada de catálogo o una ficha de Open Library responden 200 y
  no sostienen nada.
- Vetadas: Scribd, docslib, 1library, academia.edu, ResearchGate, WorldCat,
  Google Books, Open Library, CiNii, Wikipedia como clave, blogs de turismo,
  agregadores de leyendas, mitosdecolombia.com y sus espejos. **Si un resultado
  reproduce el texto del sitio, no es fuente**; y si los nombres propios de la
  ficha sólo aparecen en ella misma, anótalo.
- Editor sobre agregador; `https` sobre `http` (SciELO Colombia sólo publica por
  http: se admite si el `limitation` lo dice literalmente, «sólo publica por
  http»). Un 503 de Dialnet es límite de peticiones, no una caída.
- Una comparativa (otro pueblo, otro continente) sólo entra si el campo
  `similitudes` de la ficha ya nombra ese paralelo.
- La bibliografía del otro lado de la frontera (Brasil, Venezuela, Perú) es
  válida: márcalo en `limitation`.
- **Prohibido rellenar.** Meta: llegar a ≥ 8 en total (las que ya tiene más las
  nuevas). Si no hay más, `"estado": "AGOTADO: <qué buscaste y dónde>"`. Mejor
  seis buenas que ocho con relleno.

## Entregable · `content/editorial/<comunidad>/fuentes-2026-09-22/<slug>.json`

```json
{ "slug": "...", "estado": "OK | AGOTADO: <qué se buscó>",
  "fuentes": [ { "title": "...", "author": "...", "year": 0, "type": "...",
                 "url": "https://...", "summary": "qué dice esta obra sobre ESTE mito",
                 "limitation": "hasta dónde llega; vecindad" } ] }
```

**Sólo las fuentes nuevas**, las que se añaden a las que la ficha ya tiene.

## Al terminar

Responde con: cuántas nuevas por ficha y con cuántas queda, cuáles abriste y
descartaste y por qué, y cualquier contradicción entre las fuentes y el texto
publicado. No la arregles: anótala.
