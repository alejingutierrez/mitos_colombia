# Depuración por intención y presupuesto duplicado — Tarot de mitos colombianos

> Actualización posterior: los planes 07, 08 y 09 se consolidaron dentro del plan 01. El nuevo pronóstico del depositario llegó a 7,6606 conversiones/mes y CPA calculado COP17.059. Véase `plan-01-merge-07-08-09-forecast-2026-08-11.md`.

> Decisión posterior de cartera: los planes 10 (volumen genérico broad) y 21 (escenario viable consolidado) se eliminaron de Keyword Planner para suspender por ahora las rutas de volumen general. El plan 01 y los planes de intención específica permanecen.

> Consolidación final: 11–16 se absorbieron en el plan 03; 17–18 en el 04; y 19–20 en el 05. Tras verificar cargas y pronósticos, las diez fuentes se eliminaron. El inventario activo de planes quedó en 01–06. Véase `plan-merges-03-04-05-2026-08-11.md`.

Fecha de corte: 11 de agosto de 2026. Mercado: Colombia. Red: Google Search. Periodo del pronóstico: 1–30 de septiembre de 2026.

## Resultado ejecutivo

Se trabajó sobre los 21 planes existentes. No se creó ni activó ninguna campaña, plan o grupo de anuncios nuevo. Una copia accidental del plan 21 se revirtió inmediatamente con `Undo` y se verificó que el aviso desapareciera.

La limpieza sustituyó volumen genérico por intención de producto físico. Cada raíz final exige una relación explícita con tarot, oráculo, baraja, mazo o cartas contextualizadas, además de la intención particular del plan. Las búsquedas incompatibles se neutralizaron con negativas exactas; las familias inequívocas —gratis, consultas, lecturas, tarotistas, cartomancia, baraja española, descargas, cursos, juegos de preguntas y competidores— se añadieron como negativas de frase.

Todos los planes conservan al menos 223 raíces útiles; el plan consolidado conserva 480. Se añadieron las nuevas raíces en concordancia de frase y exacta, evitando nuevas concordancias amplias. Después se duplicó el presupuesto diario de los 21 escenarios y Google Ads volvió a calcularlos.

El resultado no alcanza todavía el criterio de viabilidad: ningún plan con demanda queda en CPA igual o inferior a COP20.000 después de duplicar presupuesto. Los siete planes sin demanda tampoco son candidatos de inversión.

## Investigación aplicada

- Semrush Colombia: 56 semillas específicas, sin errores de API. La clave permaneció en `.env.local`.
- Google Trends, Colombia, últimos cinco años: `comprar tarot` validó `cartas tarot comprar`, `cartas de tarot comprar` y `cartas del tarot comprar`. En cambio, `tarot colombiano`, `tarot ilustrado`, `tarot mitológico`, `tarot de autor` y `tarot para regalar` no tuvieron datos suficientes. `cartas tarot` derivó sobre todo a gratuidad, tiradas y significados; `baraja tarot`, a baraja española. Esas señales se usaron como negativas, no como expansión.
- Google Keyword Ideas por URL: se analizaron páginas de Tarot Criollo, Magas Ilustradas, Napo Tarot y Mitos y leyendas colombianos. Las ideas rescatables se reescribieron como producto físico —arcanos colombianos ilustrados, baraja de arcanos con guía y oráculo de arquetipos—; lecturas, cartomancia, tarotistas, búsquedas por signo y competidores se excluyeron.
- Lenguaje de producto comparable: arcanos ilustrados, caja premium, guía, 78 cartas, edición de autor, arte latinoamericano, colección e introspección.

Fuentes: [Semrush Keyword Reports API](https://developer.semrush.com/api/v3/seo/keyword-reports/), [Google Trends: comprar tarot](https://trends.google.com/trends/explore?date=today%205-y&geo=CO&q=comprar%20tarot), [Tarot Criollo](https://www.grixoa.co/es/products/tarot-criollo), [Magas Ilustradas](https://www.munn.com.co/products/kit-tarot-magas-ilustradas), [Napo Tarot](https://www.tarot.nl/es/producto/napo-tarot) y [Mitos y leyendas colombianos](https://www.panamericanaeditorial.com.co/mitos-y-leyendas-colombianos-644702/p).

## Cambios de palabras por plan

`Raíces finales` es el universo relevante de control. `Nuevas raíces` se cargó dos veces —frase y exacta—. `Negativas` combina términos irrelevantes exactos y familias incompatibles de frase.

| # | Plan | Raíces finales | Nuevas raíces | Negativas |
|---:|---|---:|---:|---:|
| 1 | Compra directa y oráculo | 269 | 0 | 126 |
| 2 | Regalos Colombia y extranjeros | 240 | 202 | 357 |
| 3 | Souvenir y objeto cultural | 240 | 210 | 365 |
| 4 | Autoconocimiento y reflexión | 240 | 194 | 349 |
| 5 | Colección diseño e ilustración | 240 | 22 | 177 |
| 6 | Mitología cultura y leyendas | 240 | 145 | 300 |
| 7 | Principiantes y guía | 280 | 0 | 115 |
| 8 | Compra local y envío | 240 | 66 | 221 |
| 9 | Regalo espiritual y místico | 223 | 162 | 334 |
| 10 | Volumen genérico broad | 240 | 189 | 344 |
| 11 | Regalos por destinatario | 240 | 240 | 395 |
| 12 | Regalos para hombre | 240 | 240 | 395 |
| 13 | Regalos para mujer | 240 | 240 | 395 |
| 14 | Pareja y aniversario | 240 | 240 | 395 |
| 15 | Original y con significado | 240 | 240 | 395 |
| 16 | Souvenir por ciudad y viaje | 240 | 240 | 395 |
| 17 | Educativo y cultural | 240 | 132 | 287 |
| 18 | Afirmaciones y conversación | 240 | 154 | 309 |
| 19 | Temáticos y de autor | 254 | 0 | 141 |
| 20 | Arte y diseño colombiano | 240 | 89 | 244 |
| 21 | Escenario viable consolidado | 480 | 446 | 361 |

## Pronóstico después de duplicar presupuesto

La conversión estimada usa la hipótesis configurada en Keyword Planner de 2%: `clics × 2%`. El CPA se calcula con el costo mensual exacto y los clics sin redondear de la fila Colombia.

| # | Presupuesto antes → después | Clics/mes | Costo/mes | Conversiones/mes | CPA calculado |
|---:|---:|---:|---:|---:|---:|
| 1 | COP2 → COP4 | 0,22 | COP120 | 0,0044 | COP27.273 |
| 2 | COP185 → COP370 | 18,12 | COP11.100 | 0,3624 | COP30.629 |
| 3 | COP585 → COP1.170 | 56,06 | COP35.100 | 1,1212 | COP31.306 |
| 4 | COP1 → COP2 | 0 | COP0 | 0 | — |
| 5 | COP14 → COP28 | 1,51 | COP840 | 0,0302 | COP27.815 |
| 6 | COP100 → COP200 | 0 | COP0 | 0 | — |
| 7 | COP2 → COP4 | 0 | COP0 | 0 | — |
| 8 | COP100 → COP200 | 0 | COP0 | 0 | — |
| 9 | COP9 → COP18 | 0,99 | COP540 | 0,0198 | COP27.273 |
| 10 | COP4.300 → COP8.600 | 422,92 | COP258.000 | 8,4584 | COP30.502 |
| 11 | COP1.400 → COP2.800 | 145,12 | COP84.000 | 2,9024 | COP28.942 |
| 12 | COP770 → COP1.540 | 76,60 | COP46.200 | 1,5320 | COP30.157 |
| 13 | COP695 → COP1.390 | 72,83 | COP41.700 | 1,4566 | COP28.628 |
| 14 | COP510 → COP1.020 | 47,57 | COP30.600 | 0,9514 | COP32.163 |
| 15 | COP34 → COP68 | 3,19 | COP2.040 | 0,0638 | COP31.975 |
| 16 | COP750 → COP1.500 | 74,10 | COP45.000 | 1,4820 | COP30.364 |
| 17 | COP100 → COP200 | 0 | COP0 | 0 | — |
| 18 | COP1 → COP2 | 0,10 | COP60 | 0,0020 | ~COP30.000; Google muestra COP32K |
| 19 | COP100 → COP200 | 0 | COP0 | 0 | — |
| 20 | COP100 → COP200 | 0 | COP0 | 0 | — |
| 21 | COP2.800 → COP5.600 | 287,74 | COP168.000 | 5,7548 | COP29.193 |

El plan 1 no tenía presupuesto editable porque estaba en CPC manual; sólo mostraba COP2 como presupuesto diario sugerido y Google impedía duplicar el CPC máximo de COP400 por un tope de COP671. Para cumplir el escenario de COP4/día se cambió exclusivamente ese plan a Maximizar conversiones. No se activó ninguna campaña.

## Lectura de viabilidad

- Mayor escala: plan 10, 8,4584 conversiones/mes y CPA COP30.502.
- Mejor equilibrio entre escala y CPA: plan 21, 5,7548 conversiones/mes y CPA COP29.193; plan 11, 2,9024 y COP28.942.
- Menor CPA modelado: planes 1 y 9, cerca de COP27.273, pero juntos no llegan a 0,025 conversiones mensuales y no constituyen una oportunidad comercial.
- Para que los escenarios útiles alcancen CPA COP20.000 sin bajar puja, la tasa de conversión de la landing tendría que subir del 2% a aproximadamente 2,89% en el plan 11, 2,92% en el 21 y 3,05% en el 10.
- Los pronósticos se solapan; no se deben sumar como si fueran campañas independientes.

Conclusión: duplicar presupuesto compra más volumen, pero cruza el límite de rentabilidad. El siguiente cuello de botella no es añadir todavía más palabras genéricas; es elevar la conversión del producto/landing y después validar términos de búsqueda reales con una prueba pequeña.
