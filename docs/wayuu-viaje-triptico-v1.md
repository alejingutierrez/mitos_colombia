# El viaje del más allá · tríptico V1

Estado: publicado y verificado como principal el 2026-09-06; tres archivos nuevos y dos anteriores preservados. Campaña: 17/27 mitos.

## Investigación y función

Relato objetivo: `content/mitos-visuales/production/wayuu-2026-09-05/narratives/el-viaje-del-mas-alla.json`.
SHA-256 de contenido: `622df3cb2717f9ac9b95398d1351094121e5b354e18cb4cc48290c0330fe5101`.

Se contrastó la versión Perrin V2 de [Mito y cultura guajira, pp. 208–220](https://www.joseenriquefinol.com/wp-content/uploads/2020/07/MITO-Y-CULTURA-GUAJIRA-Libro.pdf), reproducida por Finol. La esposa lleva al viudo sobre el mar; el banco se enrolla; Araña permite el descenso y advierte sobre el silencio. No se incorporan rapto, dote, mulas o cardenal de Ulépala. El texto público no se modifica. El nombre de Araña no autoriza identificarla automáticamente con la protagonista de otro mito.

- Horizontal: cuidado y tránsito; ella carga, él depende de ella.
- Vertical: cambio de percepción; el banco y la boa constituyen un solo cuerpo.
- Cuadrada: regreso frágil; hilo roto cuya sombra continúa. La rotura es metáfora editorial, no un suceso atribuido a la fuente ni emblema tradicional.

## Biblia y memoria visual

Se inspeccionaron directamente seis modelos seleccionados: viudo, esposa, costa, Jepira, boa-banco e hilo. Sus archivos coinciden con los hashes de la selección aceptada. Se conserva la indumentaria completa, no el rostro fotográfico del viudo. Se excluyen puente y pozo de la ficha de Jepira durante el cruce, vegetación selvática del banco y utilería del hilo. Las dos fichas adicionales de Juyá muestran presencia de lluvia, no identidad humana; el anfitrión queda fuera de campo.

Se vieron las dos imágenes públicas anteriores mediante las capturas `output/playwright/wayuu-campaign/viaje-before-0.png` y `viaje-before-1.png`. Aportan capas marinas y paleta; se rechaza trasladar la pareja caminando de la mano en tierra, arquitectura no sustentada y decoración celeste. La revisión por formato queda congelada junto a cada prompt. El PNG antiguo inventariado no se declara inspeccionado.

Se intentó consultar la exposición contemporánea de Miguel Moya [Un viaje al Jepira](https://cdf.montevideo.gub.uy/exposicion/un-viaje-al-jepira-de-miguel-moya-ve), pero la página devolvió error/timeout. No se inspeccionó su fotografía, no se incorpora como referente usado ni se presume permiso de reproducción. La búsqueda externa no se declara exhaustiva.

## Producción y trazabilidad

OpenAI API con CLI oficial imagegen, `gpt-image-2`, cuenta autorizada de `.env`, texto solamente, sin subir imágenes locales.

| Pieza | Tamaño | Calidad |
|---|---|---|
| Entrada | 1536 × 864 | high |
| Acto | 864 × 1536 | medium |
| Huella | 1024 × 1024 | medium |

Primer lote: `content/mitos-visuales/_openai/wayuu/el-viaje-del-mas-alla/wayuu-viaje-triptych-01/`.
Corrección sólo H: `wayuu-viaje-triptych-02-entrada/`, dentro de la misma carpeta de mito.
Planes: `content/mitos-visuales/wayuu.viaje.triptico.v1.json` y `wayuu.viaje.triptico.v1.1-entrada.json`.

La primera H mostró bien carga y contacto con agua, pero el grupo ocupó aproximadamente la mitad del alto. La corrección limita el grupo completo, no cada individuo por separado, y prioriza extensión vacía del mar sobre detalle facial. La precisión numérica del prompt es un objetivo, no una medición certificada del resultado.

Los 66 tests pertinentes pasaron. Contenedor reconstruido con `docker-compose up -d --build`; ruta local HTTP 200. Estas comprobaciones locales no prueban publicación.

## Selección y verificación

Cuatro generaciones únicas: H2, V1, S1; una corrección. Auditoría y selección inmutable en `content/mitos-visuales/_openai/wayuu/el-viaje-del-mas-alla/wayuu-viaje-final-selection/`.

- H: `output/imagegen/wayuu/triptychs/wayuu-viaje-triptych-02-entrada/entrada.jpeg`.
- V: `output/imagegen/wayuu/triptychs/wayuu-viaje-triptych-01/acto.jpeg`.
- S: `output/imagegen/wayuu/triptychs/wayuu-viaje-triptych-01/huella.jpeg`.

La segunda H reduce el grupo a aproximadamente un octavo del alto: postura de carga, pies del hombre suspendidos y contacto de ella con agua conservados. La V mantiene forma híbrida única; la huella presenta rotura clara y sombra continua fina, más sutil en pequeño. El hilo sale por los bordes, desviación aceptada sin soporte exterior.

Tiempos CLI: H1 78,1 s; H2 73,1 s; V 32,6 s; S 43,8 s. Coste y request IDs no proporcionados; no se infieren.

Dry-run ejecutado antes de publicación aditiva. Recibo: `content/mitos-visuales/production/wayuu-2026-09-05/publication-receipts/wayuu-wave-16/el-viaje-del-mas-alla.json`. Fila vertical 343 preservada; nueva fila 673. Caché purgada.

`content/mitos-visuales/production/wayuu-2026-09-05/verification-wave-16.json`: base y relato intacto, tres nuevos blobs con hashes exactos, dos anteriores disponibles, filas verticales, archivo remoto y HTML. Resultado `passed`.
`content/mitos-visuales/production/wayuu-2026-09-05/browser-review-wave-16.json`: seis vistas cargadas a 1440/390 px, sin desbordamiento; pareja y banco completos fuera del título. Cero errores y cuatro advertencias CSS.

La selección mantiene `published: false` como snapshot previo a subir; el recibo acredita publicación posterior. Sin commit, push ni despliegue de código. Originales no sobrescritos ni borrados.

## Aprendizaje específico

Cuando la postura requiere describir dos cuerpos, limitar el grupo completo y la extensión vacía que lo rodea desde la primera frase. Describir la conexión corporal que hace legible la acción, sin incentivar detalle de primer plano. La relación esposa-guía / esposo-cargado importa más que rasgos faciales. No convertir esta composición marina en plantilla universal.
