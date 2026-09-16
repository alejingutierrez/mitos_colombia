# Biblia visual Nasa–Paeces · producción API 01

Fecha: 9 de septiembre de 2026.

## Estado verificable

- Proveedor: OpenAI Image API.
- Modelo exacto: `gpt-image-2.5-sunburst`.
- Formato de maestro: JPEG `medium`, 1024×1536, compresión 92.
- Producción: 6 generaciones reales, 6 archivos presentes, 0 fallos y 0 reintentos.
- Concurrencia probada: 3 solicitudes simultáneas en dos olas.
- Tiempos de pared: 21,2 s y 18,1 s.
- Selección: 3 candidatos técnicos, 1 candidato de dirección y 2 rechazos conservados.
- Aprobación canónica/cultural: 0. No se confunde QA técnico con aprobación cultural.

Los prompts completos viven en `prompts.jsonl`, `prompts-ola-02.jsonl` y
`juan-tama-nino-v1.prompt.txt`. Las decisiones, hashes y referencias están en
`selection.v1.json`.

## Decisiones visuales

1. Juan Tama adulto y niño avanzan como pareja de identidad, todavía sujeta a
   revisión del chumbe, el calzado y la vara de autoridad.
2. Chautéh avanza sin el tocado mesoamericano de la imagen publicada; el lado del
   ojo y el calzado deben cerrarse antes de congelar el modelo.
3. Camino nocturno fija composición y atmósfera, pero debe aplanar el suelo mojado.
4. Culebra-rayo y páramo-laguna V1 están rechazados. Se conservan para auditoría y
   están prohibidos como referencias de continuidad.

## Concurrencia

Con seis solicitudes consecutivas sin `429`, concurrencia 3 queda validada como
punto de partida. No se eleva todavía: el umbral acordado para probar 4 es 20
solicitudes consecutivas sin limitación y con QA estable. Las unidades de Biblia
independientes sí pueden producirse en paralelo; los descendientes que dependan de
una identidad aprobada deben esperar esa aprobación.

## Próxima ola

- corregir culebra-rayo y páramo-laguna con una sola causa por iteración;
- corregir la materia central del camino nocturno;
- completar K’pish/Trueno, Llíban niño-adulto y Juan Chiracol;
- no usar como referencias los rechazos ni candidatos aún no congelados.
