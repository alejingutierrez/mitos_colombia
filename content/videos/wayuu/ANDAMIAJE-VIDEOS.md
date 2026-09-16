# Andamiaje de videos Wayúu

Actualización 2026-09-09: la fase de guion y keyframes está completa con **27/27 paquetes, 496 keyframes canónicos seleccionados y 674 generaciones nuevas**. Los ocho paquetes finales aplican la variedad de cámara obligatoria de [channel-dna.v3.json](channel-dna.v3.json) en 128 cuadros Sunburst. El incesto se cerró con 16/16 tomas y sin revisión de proveedor pendiente. Ver [PRODUCCION-ACTIVA.md](PRODUCCION-ACTIVA.md) y [campaign.v1.json](campaign.v1.json). Los estados parciales inferiores son históricos.

Muisca y Wayúu son ahora ciclos cerrados dentro de sus respectivos alcances. La
continuidad hacia otra comunidad está descrita en el
[traspaso operativo](../../../docs/videos/TRASPASO-SIGUIENTE-COMUNIDAD.md).

## Alcance vigente

27 mitos del corpus ya trabajado, sin nuevas incorporaciones. Los trípticos quedan como están. Los 27 paquetes de investigación audiovisual, guion y keyframes están completos; no restan adaptaciones en esta fase. Todavía no se anima, graba voz, monta ni publica videos. No se inició la reproducción de los 26 trípticos que el usuario canceló.

## Dirección creativa

**Figuras sencillas; relaciones ricas.** El estilo sigue siendo papel recortado de apariencia tridimensional por separación entre capas, sombras y oclusiones; no cabezas modeladas, Pixar ni ilustración plana con textura. El encuadre entra al mundo: jamás borde de cartón, base, mesa o caja. Ropa completa según inventario y fuentes de cada personaje; pinturas y diseños se usan cuando hay contexto documentado, no como ornamento automático.

La magia cambia materia, espacio, tiempo o relación de un elemento cotidiano del relato. Debe verse su efecto. Alternar prodigio con gesto humano y consecuencias; un plano de pausa puede carecer de anomalía nueva. No confundir riqueza con acumular objetos ni volver al minimalismo vacío. No copiar literalmente las noches de Arámai a otros relatos.

## Cadena de trabajo

Relato y fuentes → inventario/modelos → guion → storyboard/continuidad → prompts congelados → keyframes → QA visual → voz medida/movimiento → montaje → publicación verificada.

1. **Relato y fuentes.** Releer la narración completa del mito. Congelar hash y versión; comprobar texto público antes de producir. Reutilizar investigación existente con fecha, límites y fuente; buscar sólo vacíos relevantes. Separar núcleo histórico, ampliación del sitio y licencia audiovisual. No convertir una incertidumbre en hecho ni atribuir a toda la comunidad una versión mediada.
2. **Inventario previo.** Enumerar personas, criaturas/entidades invisibles, animales, objetos, vegetación, lugares y estados. Cada plano declara su reparto y props, modelos y carencias. Las fichas fijan identidad, no obligan a copiar una pose. Revisar referentes actuales/históricos del mismo mito con roles y decisiones; una imagen anterior no es prueba cultural por sí sola.
3. **Guion.** Tesis emocional, situación, elección/acontecimiento, prodigio, consecuencia y cierre. Referencia de 75–110 s, no molde obligatorio. 9 bloques/18 tomas es el ejemplo de Arámai, no una cuota de todo el corpus. VO con procedencia por bloque y conteo real. El relato debe funcionar leído de corrido.
4. **Storyboard.** Cada instante tiene función, acción, tiempo estimado, escala/ángulo, inventario, tres o más distancias, vínculo con el anterior y corte al siguiente. Separar cuadros clave de tomas y fotogramas extremos de un clip: a/b no significa start/end automático.
5. **Magia y sonido en papel.** Cada anomalía tiene ancla, comportamiento imposible, efecto narrativo, agencia, prueba visible y procedencia/función temporal. La pausa cotidiana declara que no debe recibir efectos nuevos. Diseñar sonidos por función; no imitar canto ceremonial ni atribuir instrumentos rituales sin base. Voz, música y proveedor de movimiento todavía sin fijar para Wayúu.
6. **Preparación técnica.** Esquema Wayúu propio, independiente del preparador heredado muisca. Solo keyframes `medium`, JPEG 864×1536 nativo 9:16. Para producción nueva se prefiere `gpt-image-2.5-sunburst`; `gpt-image-2.5-flare` puede usarse para iteración rápida y `gpt-image-2` queda como fallback/histórico. Elegir un solo modelo por mito y registrar el ID exacto y, si aplica, su snapshot. Desde el tercer fotograma, cada job se ejecuta mediante edición con múltiples imágenes y congela, en orden, los dos keyframes aprobados inmediatamente anteriores del mismo mito, con rutas, roles y SHA-256. El primer fotograma usa al menos dos referentes aprobados de Biblia/tríptico; el segundo usa el primero más al menos un referente canónico. Esta excepción de arranque existe porque todavía no hay dos keyframes anteriores. El preparador es offline y no accede a credenciales.
7. **Producción y QA.** El nuevo orden es causal: no se dispara una tanda completa de composiciones independientes. Se aprueba el arranque y luego se genera cada toma con memoria visual de al menos dos antecedentes. Las referencias preservan identidad, vestuario, paleta, material y gramática espacial, pero no autorizan copiar objetos o acciones que no pertenezcan al plano actual. Ver cada JPEG junto a sus dos antecedentes y luego la secuencia completa. Fallo → corregir causa específica en versión nueva, reutilizando los mismos antecedentes aprobados; nunca sobrescribir ni alimentar descartes como memoria. Evaluar fidelidad de la acción, magia, profundidad, rostros, vestuario, escala, manos/objetos, repetición de cámara, continuidad y espacio útil para montaje. Anotar defectos que no impiden continuar; no llamar certificado cultural a un test verde. No eludir filtros: si hay rechazo, revisar contenido y reformular de forma segura y fiel, registrando el resultado.
8. **Tiempo y animación.** Medir voz grabada antes de fijar metraje o subtítulos. No acelerar para encajar. Elegir después qué toma merece movimiento, cuál es still, qué elemento se mueve y qué se conserva. Un JPEG es aplanado: prometer parallax físico requiere separar capas o animación generada posterior. No generar un clip automáticamente por cada prompt.
9. **Entrega.** Montaje, mezcla, subtítulos legibles, QA audiovisual y derechos de voz/música. Guardar máster y versión de distribución; verificar archivo servido y reproducción pública. Publicado es distinto de renderizado. Esta fase aún no se ejecuta ni fija proveedores o costes históricos como actuales.

## Arquitectura entregada

- campaign.v1.json: 27 IDs, snapshots y estados por mito.
- channel-dna.v3.json: contrato visual y política de dos keyframes anteriores para toda generación nueva desde La majayura de Puró.
- channel-dna.v1.json: reglas de arte, formato y límites audiovisuales.
- videos/<slug>/preproduccion-01/plan.json: fuente editable de guion e inventario.
- prepared-NN/: prompts, snapshot del plan/DNA y hashes; no se sobreescribe.
- scripts/videos/wayuu-preproduction.mjs: validate y prepare offline.
- scripts/videos/wayuu-preproduction.test.mjs: tests negativos y de preservación.

El preparador conserva y valida los paquetes históricos de texto y ya resuelve `channel-dna.v3.json`: congela los dos antecedentes por job, exige orden causal y distingue el maestro API 1024×1536 de la entrega centrada 864×1536. El preparador NO escribe automáticamente la narración de otros mitos ni certifica su cultura. Acepta distinto número de bloques/tomas y valida continuidad temporal. Las dimensiones se fijan a la política vigente; cualquier futura ampliación debe ser explícita. El tono visual es común; inventario, paleta y vehículo mágico son por mito.

## Comandos (desde el repo)

```sh
node scripts/videos/wayuu-preproduction.mjs validate --plan content/videos/wayuu/videos/aramai/preproduccion-01/plan.json
node --test scripts/videos/wayuu-preproduction.test.mjs
# Para una próxima preparación, elegir una carpeta NUEVA:
node scripts/videos/wayuu-preproduction.mjs prepare --plan content/videos/wayuu/videos/aramai/preproduccion-01/plan.json --out content/videos/wayuu/videos/aramai/preproduccion-01/prepared-04
```

prepared-03 es el paquete vigente, 13 jobs preparados y cero generaciones. prepared-01 y prepared-02 se conservan superados: un test detectó vestuario heredado en una escena sin personas; la lectura posterior detectó una función temporal global del reflejo que contradecía el cierre. Se aislaron inventario y temporalidad por plano, y se exige paleta propia por mito. Son correcciones de preparación, NO iteraciones de imágenes pagadas.

## Estado y próximo paso

Estado al 9 de septiembre de 2026: **27/27 paquetes completos, 496 keyframes canónicos seleccionados y 674 generaciones nuevas**. Los nueve paquetes del cierre tienen 16/16 originales verificados cada uno; ocho usan Sunburst y El incesto conserva el modelo histórico de su propio lote. No quedan revisiones de proveedor ni mitos pendientes.

Próximo paso posible, no iniciado: medición de voz, diseño de movimiento y montaje por mito. No hay voz, animación, montaje ni publicación de videos Wayúu.
