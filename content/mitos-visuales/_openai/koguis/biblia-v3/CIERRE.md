# Biblia kogui V3 · cierre de la generación

**95 de 96 láminas**, generadas entre el 2026-09-26 y el 2026-09-27, una capa
por vez y con aprobación del editor entre capas (`APROBACIONES.json`). Es la
primera biblia producida comunidad por comunidad con las reglas del
2026-09-26: fichas sobre papel blanco hueso y solo paisajes y lugares a fondo
completo.

| capa | láminas | tandas vigentes |
|---|---:|---|
| 1 · tipos base | 6 | 02, 03 (niño y mujer joven sin cara de animación) |
| 2 · mortales con nombre | 27 | 04, 05 (Nuánashe y los dos tigres), 06 |
| 3 · míticos y fuerzas | 11 | 07, 08 (Sol), 09 (Susabanka, Sol antes del oro), 10 |
| 4 · colectivos | 12 de 13 | 11 |
| 5 · animales y criaturas | 6 | 12 |
| 6 · atrezo | 18 | 13, 14 y 15 (sin lámina técnica) |
| 7 · arquitectura y fenómenos | 8 | 16 |
| 8 · paisajes y lugares | 7 | 17, 18 (sin fotorrealismo) |

Las carpetas con `RECHAZADO.md` (el piloto 01 y la tanda 01 de tipos, con
escenario) no cuentan. Cuando una ficha tiene varias tandas vale la última.

## Lo que queda abierto

- **Las mujeres inventadas por el padre malo**: el relato las describe
  desnudas, la ficha las pide sin manta y el filtro de OpenAI bloquea la
  lámina como sexual. No se insistió. Decisión del editor.
- **El jaguar**: la ficha lo pide pardo y sin rosetas («lo que lo hace jaguar
  en el corpus no es la piel sino el objeto»), y así salió en la capa 5. Los
  dos estados de tigre de la capa 2 (Nuánashe, Kashindukwe) salieron con
  rosetas porque `peticionDeEstado()` las forzaba. Hay que unificar.

## Lo que esta biblia corrigió en el preparador, y vale para las siguientes

Todo está en `scripts/mitos/prepare-biblia-tanda-v3.mjs`:

- `sobrePapel()`: fondo de papel hueso para todo lo que no sea paisaje o lugar.
- `CUERPO_Y_CARA`: cuerpo plano y **nada de cara de animación**.
- `UNA_SOLA_FIGURA` y `SIN_LAMINA_TECNICA`: sin paneles, rótulos, cotas ni
  viñetas; las medidas escritas del plan salen dibujadas y se quitan.
- `sinOtrosEstados()` y `peticionDeEstado()`: la lámina canónica no dibuja otros
  estados y la de estado sí dibuja el estado; un estado «antes de» no carga lo
  del estado posterior.
- `PAISAJE_EN_PAPEL`: agua, niebla y piedra en papel, no en fotografía.
- Y en `build-biblia-models-v3.mjs`, la paleta de cada ficha llega al prompt:
  antes no llegaba en ninguno de los 42 corpus.
