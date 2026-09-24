# Etapa 2 · el expediente de cada relato

Encargo compartido. Tu mensaje dice **qué corpus te tocan**; esto dice **qué
hacer con cada mito**.

Worktree: `/Users/alegut/MyApps/Personal/mitos_colombia/.claude/worktrees/biblias-research-generation-fc19c2`.
Ejecuta todo desde ahí. **No hagas commits y no generes imágenes.**

## De dónde vienes

Las 42 biblias dicen **cómo se ve** cada entidad: 1.565 fichas con silueta,
materiales, paleta, escala, continuidad y evidencia. No dicen **qué pasa en
cada relato**, ni qué escena lo muestra, ni con cuáles de esas fichas se
compone. Esa capa existe para las cinco comunidades del carril de vídeo —135
actas— y no existe para los 436 relatos de los 42 corpus nuevos.

El esqueleto ya está en `content/mitos-visuales/actas/<corpus>/<slug>.json`, con
el canon congelado por huella y la lista de entidades disponibles. Lo que falta
es lo que no se puede derivar sin leer.

## Lo que escribes, mito por mito

### 1 · Los nudos

Lo irrenunciable del relato: qué pasa, quién cambia, qué queda. Cada uno con
**una frase literal del canon** que lo sostiene.

```json
{ "id": "n01", "nudo": "Existen unos gigantes devoradores con nombre propio",
  "evidencia": "Había antes unos diablos gigantes llamados Yaedé" }
```

**`evidencia` se verifica contra el canon carácter a carácter** (normalizado:
sin tildes, sin puntuación). Si no aparece, el nudo se inventó y el linter lo
para. Ése es el único gate que de verdad impide que el resumen fabrique: cuando
estas actas se escribieron retroactivamente para otra comunidad, destaparon
**once invenciones** que un linter de forma no veía.

No hay número fijo de nudos. Un relato de dos párrafos da seis; uno denso da
veinte. **El relato manda.**

### 2 · `N_propuesto` y `razon_N`

`N = techo(nudos / 2)`, acotado a 8-18. Es la duración que ese relato aguanta
como vídeo, y **el linter la comprueba**: si pones otro número, falla. `razon_N`
explica qué tienen esos nudos que pide ese largo — no vale repetir la fórmula.

### 3 · `deslindes` y `descartes`

**`deslindes`**: lo que la lectura separó y que una lámina podría confundir. La
cadena etimológica que obliga a una forma, la figura que no muere aunque lo
parezca, la ficha que no existe y por dónde se resuelve.

**`descartes`**: qué se sacrifica y por qué, uno por uno. Lista vacía es válida;
ausente no. Si descartas algo que el canon dice, dilo aquí o estás borrando.

### 4 · Las escenas — `entrada`, `acto`, `huella`

Tres, y la doctrina es del tríptico que ya está en producción:

- **`entrada` · 16:9** — la entrada del personaje. Plano general de
  presentación, **figura legible, nunca paisaje vacío**.
- **`acto` · 9:16** — el acto. El vertical existe para que algo suba y algo baje
  en el mismo eje.
- **`huella` · 1:1** — lo que queda cuando el acto terminó.

```json
{ "id": "e1", "papel": "entrada", "encuadre": "16:9",
  "cubre": ["n01","n02"], "momento": "...", "composicion": "...",
  "entity_refs": ["yaede","ninos"], "no_mostrar": ["..."] }
```

**Entre las tres tienen que cubrir todos los nudos**, y el linter lo comprueba.
Que el `acto` cargue nueve de dieciséis es normal en un tríptico.

`entity_refs` sale **sólo de las fichas de tu corpus que llegan a lámina**. El
esqueleto trae `entidades_disponibles`, pero no es la lista completa: si el
relato cita una figura `embedded`, compón con **la ficha que la cubre** —el
padre de la trampa vive dentro de `gente-embera-katio`—. Traer una entidad que
el relato ni cita ni cubre es añadir al relato, y el linter lo avisa.

`no_mostrar` es por escena y sale del canon o del dossier: lo que ahí no puede
verse aunque encaje.

## El ejemplo trabajado

`content/mitos-visuales/actas/katios/icades-name.json` está completo y en
verde. Míralo antes de empezar: 16 nudos, tres escenas, y tres cosas que valen
de patrón —la cadena Yaedé → Yame → ñame escrita como deslinde porque obliga a
una forma; el hijo que sobrevive porque el canon no dice que muera; y Antomiá
descartada por no aparecer en ninguna línea aunque sea entidad del corpus.

## Verifica antes de reportar

```bash
node scripts/mitos/lint-acta-mito.mjs --corpus <id>
```

**Verde en todos los tuyos.** Otras sesiones trabajan en este worktree: no
toques planes `.v3.json` ni actas de corpus ajenos.

## Informe final

15 líneas o menos, todos tus corpus juntos: actas cerradas y nudos por corpus,
**tres ejemplos de deslinde que demuestren que leíste el relato y no el
resumen**, qué descartaste y por qué, cuántas escenas tuvieron que componerse
con una ficha que cubre a otra, y la salida del linter. Di lo que quedó flojo.
