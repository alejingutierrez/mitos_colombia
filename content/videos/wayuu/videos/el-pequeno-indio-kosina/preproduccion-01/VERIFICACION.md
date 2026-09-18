# Verificación de preparación · Kosina 01

## Control posterior de producción parcial

Cinco planes congelados verificados por hash. 121 prompts preparados entre versiones verificados por SHA256 y presencia literal de `paper_lock` V2; eso no equivale a 121 llamadas. Diez JPEG producidos con formato y dimensiones 864×1536 comprobados; diez originales revisados directamente, siete candidatos y tres sustituidas preservadas. Quedan 21 tomas sin generar. Los contadores conservan 27 mitos, 9 paquetes completos y 234 generaciones nuevas; Kosina aporta diez generaciones, todavía ningún paquete cerrado.

Las 20 pruebas del preparador pasaron. Usan su fixture histórico de Arámai y prueban invariantes del preparador, no calidad visual de Kosina. Kosina se validó por separado con su plan, sus 29 modelos, dos referencias de tríptico y assets existentes. No se modificó Arámai.

Los resultados que siguen corresponden al corte anterior de investigación, conservado como historial.

Se ejecutó un chequeo local con Node y aserciones, con salida terminal 0:

- 29 modelos existentes, IDs únicos y SHA256 recomputados coincidentes.
- SHA256 del contenido del snapshot recomputado y coincidente.
- 14 bloques de VO, 424 palabras por separación de espacios.
- 28 IDs de toma únicos y completos: b1a/b1b hasta b14a/b14b.
- Manifiesto conserva 27 mitos; suma de generaciones de filas coincide con total 224.
- Contadores sin cierre prematuro: 9 paquetes terminados; Kosina 0 imágenes nuevas.

La revisión visual directa registrada cubre siete originales de Biblia, dos de tríptico y la hoja de contacto. No equivale a revisar todos los originales ni a aprobar imágenes de video aún inexistentes.

Estos chequeos no prueban plan congelado, prompts válidos, voz medida, keyframes generados, animación ni publicación. El siguiente trabajo es completar referencias y materializar el plan validable. La campaña permanece activa con su alcance completo.
