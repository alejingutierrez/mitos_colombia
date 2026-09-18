# Revisión piloto completada · rostros y atuendos

13 de septiembre de2026.

**Tres personajes rehechos: P07 Gran Cacica, P01 Papá Grande, P08 Yunari.** Biblia actual54/54, cero IDs nuevos,51 maestros retenidos. H04 no se cambió. Las54 selecciones anteriores y el manifiestoAPI06 permanecen intactos.

El usuario autorizó expresamente el envío de los tres maestros propios y los prompts a OpenAI tras el rechazo preventivo del turno anterior. Se ejecutaron **tres llamadas** a `/v1/images/edits`, modelo exacto `gpt-image-2.5-sunburst`, high, JPEG1024x1536, compresión92. Las tres tuvieron éxito; tiempos informados por el CLI: P07 35.1s, P01 35.5s, P08 42.8s. Tope simultáneo observado3. No se hicieron reintentos ni llamadas adicionales. Cero fotos documentales enviadas; misma clave local ignorada y segura, no mostrada ni modificada. [Plan y prompts enviados](jobs.v1.json).

## Qué cambió y cómo se evalúa

P07 conserva5 vistas: prenda superior más suelta, algodón sin franja, torso cubierto hasta cintura y faldilla envolvente. P01 conserva5 vistas/acciones con greda y semillas: sin camiseta de sisa ni franja, torso masculino adulto descubierto y falda envolvente con cordón. P08 conserva3 estudios y relación cuerpo-territorio: sin capa verde ni franja, algodón suelto.

La revisión guiada por la habilidad de imágenes mantuvo cantidad, gestos, papel mate y procedencia. Se inspeccionaron las tres nuevas láminas, comparación antes/después, atlasP y panorama. Los cambios de ropa son más visibles que los faciales: estos son discretos/moderados y aún emparentados con la plantilla anterior. **No se afirma que la fidelidad facial esté resuelta ni que el usuario haya aprobado estos resultados.** [Revisión por personaje](review.v1.json).

![Antes/después](/Users/alegut/MyApps/Personal/mitos_colombia/output/imagegen/chimila/biblia/produccion-api-07/review-before-after-v1.png)

Los rostros son originales de ficción, no reproducciones de personas del archivo ni un fenotipo universal. El algodón, envoltura corta, cordón y corte superior sin costuras laterales tienen apoyo parcial en el registro1946. El amarre femenino al hombro, colores y ropa concreta de estas figuras míticas son propuestas artísticas no certificadas. Gorritos U09/U14/U15 de adscripción pendiente quedan excluidos. [Criterio y referencias](CRITERIO-Y-REFERENTES.md).

## Galería y trazabilidad

[Galería actual con54 maestros](../BIBLIA-ETTE.md) · [Tres revisiones seleccionadas](selection.v1.json) · [Selección completa actual](selection.complete.v1.json) · [Galería anterior de54 conservada](GALERIA-ANTERIOR.md) · [Verificación](verification.v1.json).

El preflight.v1.json conserva el corte previo a la autorización, con estado bloqueado y cero llamadas; es registro histórico, no el estado actual. Originales y versiones nuevas tienen hashes/linaje y no se sobrescribió ninguna imagen. Los seis atlas y panorama son derivados de montaje, no retoques a originales. No se extiende este cambio a otros51 maestros ni se alteran sus decisiones culturales.

No se cambió corpus, inventario, catálogo, DB o sitio público; no se desplegó ni inició trípticos/keyframes. Validación cultural y aceptación del usuario siguen pendientes. Costo facturado no verificado.
