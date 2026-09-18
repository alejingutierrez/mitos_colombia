# Videos Wayúu · estado de producción

Actualizado el 9 de septiembre de 2026.

Estado vigente: **27/27 paquetes de guion y keyframes completos, 496 keyframes canónicos seleccionados y 674 generaciones nuevas**. Los ocho mitos finales producidos con `gpt-image-2.5-sunburst` aportan 128 cuadros nuevos y una matriz de cámara que alterna altura, eje, escala, profundidad y escenario. [El incesto](videos/el-incesto/produccion-01/selection.json) también queda cerrado con sus 16 cuadros: los dos faltantes se resolvieron como escenas visuales ordinarias con el mismo `gpt-image-2` histórico del paquete, sin reconstrucción sensible. No quedan mitos Wayúu pendientes en esta fase. No hay voz, animación, montaje ni publicación de video.

La comunidad Wayúu queda cerrada en este alcance. Para abrir la siguiente comunidad,
usar el [traspaso Muisca + Wayúu](../../../docs/videos/TRASPASO-SIGUIENTE-COMUNIDAD.md),
que documenta el proceso portable, los límites del cierre y el prompt de arranque.

Cambio obligatorio para lo que sigue: [channel-dna.v3.json](channel-dna.v3.json) sustituye V2 únicamente para generaciones nuevas. Desde el tercer fotograma de cada mito se adjuntan al menos los dos keyframes aprobados inmediatamente anteriores; el arranque usa Biblia/tríptico porque aún no existen dos antecedentes. El modelo preferido pasa a `gpt-image-2.5-sunburst`, con `gpt-image-2.5-flare` para iteración rápida y `gpt-image-2` como fallback/histórico. La calidad de keyframes continúa en `medium`, JPEG 864×1536.

## Decisión actual: trípticos conservados; videos retomados

El usuario canceló la reproducción de los trípticos restantes y autorizó producir guiones y keyframes de los 27 mitos, mostrando cada mito al terminar. Se retoman con la dirección enriquecida; no se regeneran ni sustituyen trípticos. No se produce voz, música, animación ni publicación de video en esta fase.

- [Pipeline y criterios](ANDAMIAJE-VIDEOS.md).
- [Campaña de 27 mitos](campaign.v1.json).
- [Dirección vigente desde La majayura: dos antecedentes + modelos GPT Image 2.5](channel-dna.v3.json).
- [Dirección histórica V2: papercut constante desde Creación Wayuu hasta Worunka](channel-dna.v2.json).
- [Dirección anterior conservada para Arámai](channel-dna.v1.json).
- [Guion técnico completo de Arámai](videos/aramai/preproduccion-01/GUION-TECNICO.md).
- [Plan validable](videos/aramai/preproduccion-01/plan.json).
- [13 prompts base de producción](videos/aramai/preproduccion-01/prepared-03/freeze.json).
- [Producción autorizada y seguimiento](PRODUCCION-ACTIVA.md).
- [Arámai: selección de los 18 keyframes y QA](videos/aramai/produccion-01/selection.json).
- [Arámai: guion con imágenes completas](../../../output/imagegen/wayuu/keyframes/aramai-review-01/index.html).
- [Las Wanurü: guion técnico y 20 keyframes](videos/las-wanulus-y-el-valle-de-la-muerte/preproduccion-01/GUION-TECNICO.md).
- [Las Wanurü: selección, corrección y QA](videos/las-wanulus-y-el-valle-de-la-muerte/produccion-01/selection.json).
- [Las Wanurü: revisión navegable](../../../output/imagegen/wayuu/keyframes/las-wanulus-y-el-valle-de-la-muerte-delivery-01/index.html).
- [Los dominios de Juyá: revisión navegable](../../../output/imagegen/wayuu/keyframes/los-dominios-de-juya-delivery-01/index.html).
- [Los dos hermanos: revisión navegable](../../../output/imagegen/wayuu/keyframes/los-dos-hermanos-delivery-01/index.html).
- [Los mellizos transformadores: revisión navegable](../../../output/imagegen/wayuu/keyframes/los-mellizos-transformadores-delivery-01/index.html).
- [Mareiwa: revisión navegable](../../../output/imagegen/wayuu/keyframes/maleiwa-delivery-01/index.html).
- [Serranías de La Guajira: revisión navegable](../../../output/imagegen/wayuu/keyframes/serranias-de-la-guajira-delivery-01/index.html).
- [Ulépala: revisión navegable](../../../output/imagegen/wayuu/keyframes/ulepala-delivery-01/index.html).
- [Umaralá: revisión navegable](../../../output/imagegen/wayuu/keyframes/umarala-delivery-01/index.html).
- [Waleker: revisión navegable](../../../output/imagegen/wayuu/keyframes/waleker-el-origen-del-tejido-delivery-01/index.html).
- [El incesto: revisión navegable](../../../output/imagegen/wayuu/keyframes/el-incesto-delivery-01/index.html).
- [Creación Wayuu: guion técnico de 16 instantes](videos/creacion-wayuu/preproduccion-01/GUION-TECNICO.md).
- [Creación Wayuu: guion con las 16 imágenes](../../../output/imagegen/wayuu/keyframes/creacion-wayuu-review-01/index.html).
- [Creación Wayuu: selección y notas de continuidad](videos/creacion-wayuu/produccion-01/selection.json).
- [El hijo del Cóndor: guion técnico](videos/el-hijo-del-condor/preproduccion-01/GUION-TECNICO.md).
- [El hijo del Cóndor: guion y 20 imágenes](../../../output/imagegen/wayuu/keyframes/el-hijo-del-condor-review-01/index.html).
- [El hijo del Cóndor: selección y correcciones](videos/el-hijo-del-condor/produccion-01/selection.json).

Arámai entregado: 9 bloques, 18 imágenes seleccionadas, 169 palabras y 90 segundos estimados, no medidos. Cinco imágenes del piloto 02 preservadas; 13 nuevas y cinco correcciones (18 generaciones nuevas, 28 históricas totales). No se repite tras la observación de pérdida progresiva de papercut.

Creación Wayuu terminado y presentado: 8 bloques, 16 imágenes, 168 palabras y 96 segundos estimados. 17 generaciones (16 base y una corrección del camino entre fogones), todas medium. Contrato material V2 idéntico en los 17 prompts y revisión directa de inicio, centro y cierre.

El hijo del Cóndor terminado y presentado: 10 bloques, 20 imágenes, 242 palabras y 140 segundos estimados. 23 generaciones (20 base y tres correcciones: sombra de restitución, orden de guía, material del caballo distante). Papel constante comprobado contra inicio y cierre; notas de continuidad conservadas. Tres paquetes de 27, 54 instantes seleccionados y 58 generaciones nuevas en esta fase. Restan 24 mitos; siguiente: El incesto. Son selecciones editoriales con notas, no certificación cultural ni aprobación final del usuario. No hay video animado ni publicación.

## Decisión anterior: dirección respaldada; keyframes aplazados

El usuario indicó que el piloto 02 está en el camino correcto y pidió trasladar esa dirección a una reproducción de los trípticos Wayúu, mostrando primero Arámai. Esto respalda la dirección, no certifica cada activo del piloto como definitivo. La creación de keyframes queda aplazada por solicitud expresa; no se generan los trece restantes. Los estados de revisión que siguen se conservan como histórico de la entrega.

- [Nueva dirección y proceso de trípticos](../../mitos-visuales/production/wayuu-tripticos-reproduccion-2026-09-07/DIRECCION-Y-PROCESO.md).

## Arámai: piloto de dirección 02 · revisión actual

El usuario pidió más magia y riqueza visual y menos minimalismo exagerado. Se produjeron cinco nuevas composiciones de los mismos instantes, todas medium, JPEG 864×1536. Guion/VO idénticos. Ahora hay diez generaciones acumuladas: dos interpretaciones por cada uno de los cinco keyframes. No son diez instantes diferentes. Estado: pendiente de aprobación visual.

- [Ver segunda tanda](videos/aramai/piloto-02/REVISION.md).
- [Dirección, licencias y proceso](videos/aramai/piloto-02/DIRECCION-Y-PROCESO.md).
- [Plan con contratos de magia](videos/aramai/piloto-02/plan.json).
- [Prompts congelados y hashes](videos/aramai/piloto-02/freeze.json).
- [QA, observaciones y conteo](videos/aramai/piloto-02/qa.json).

La magia es más visible desde la apertura. Quedan notas sobre tamaño de personajes y ornamentos no pedidos: son muestras de dirección, no activos finales certificados. No se producen los otros trece ni se publica.

## Arámai: piloto de dirección 01 · histórico preservado

Guion propuesto: 9 bloques, 90 segundos estimados, 169 palabras. Storyboard: 18 instantes. Primera ronda: cinco salidas únicas, una por plano, en medium, JPEG 864×1536. El usuario solicitó revisión por minimalismo excesivo y poca presencia mágica; se conserva íntegro el paquete como histórico. Sus textos de estado corresponden a la fecha de esa primera entrega.

- [Ver las cinco imágenes](videos/aramai/piloto-01/REVISION.md).
- [Guion, fuentes y pipeline](videos/aramai/piloto-01/GUION-Y-PROCESO.md).
- [Plan y storyboard](videos/aramai/piloto-01/plan.json).
- [Referentes inspeccionados](videos/aramai/piloto-01/reference-review.json).
- [Paquete congelado antes de producir](videos/aramai/piloto-01/freeze.json).
- [Resultados y QA](videos/aramai/piloto-01/qa.json).

No animación, audio, publicación ni sustitución de imágenes previas. Se preservan los trípticos Wayúu ya producidos. Los pilotos adaptan la gramática del pipeline previo sin alterar todavía su preparador global. El próximo keyframe narrativo sería b3b, pero NO se genera hasta recibir la decisión del usuario sobre la nueva dirección.
