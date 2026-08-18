# Investigación de palabras clave — Tarot de mitos colombianos

Fecha de corte: 11 de agosto de 2026.

> **Actualización vigente:** los 21 planes fueron depurados por intención, ampliados con términos de producto físico y recalculados después de duplicar el presupuesto diario. Ninguno conserva CPA menor o igual a COP20.000 en ese escenario. El resultado actual está en [keyword-cleanup-double-budget-report-2026-08-11.md](keyword-research/keyword-cleanup-double-budget-report-2026-08-11.md) y el detalle numérico en [forecast-after-cleanup-and-double-budget-2026-08-11.csv](keyword-research/forecast-after-cleanup-and-double-budget-2026-08-11.csv). El resto de este documento se conserva como referencia anterior a esa depuración.

## Conclusión ejecutiva

Los 21 planes existentes fueron ampliados sin crear planes nuevos. Cada plan recibió 360 raíces relevantes en concordancia amplia, de frase y exacta. Google Ads confirmó 18.493 entradas nuevas; al sumarlas a las existentes quedan entre 1.086 y 1.443 entradas guardadas por plan, 23.777 en total. El contador visible agrupa concordancias y por eso muestra entre 365 y 719 raíces únicas. Tampoco se creó ni activó ninguna campaña.

El plan 21, consolidado, quedó con 1.443 entradas estimadas y 719 raíces visibles. Después de auditar sus negativas conserva 38: se retiraron `lectura`, `curso` y `astrologia`, que en negativa amplia bloqueaban búsquedas de producto potencialmente válidas. Se mantuvieron exclusiones inequívocas de gratuidad, servicios, descargas, empleo, imágenes, dibujos y productos competidores.

En el pronóstico actualizado de Google Keyword Planner para Colombia, español, Google Search y septiembre de 2026, con conversión hipotética de 2%, el plan 10 ofrece el mayor volumen modelado: **Maximizar conversiones**, COP 4.300/día, 327,28 clics, 6,5456 conversiones y CPA COP 19.708. Al ser concordancia amplia genérica, tiene más riesgo de tráfico irrelevante y de que el 2% supuesto no se sostenga.

El plan 21 consolidado y protegido por negativas quedó guardado con **Maximizar conversiones** y COP 2.800 de presupuesto diario:

- 211,06 clics y 5.017,88 impresiones mensuales;
- COP 84.000 de costo;
- CPC medio de COP 398;
- 4,2212 conversiones calculadas;
- CPA calculado de COP 19.900.

COP 2.800 es el mayor presupuesto efectivo probado que conserva CPA inferior a COP 20.000; a COP 2.850 el CPA ya sube a COP 20.053. El objetivo de CPA se cumple en el modelo, pero no demuestra todavía el CPA real del negocio: la viabilidad final sólo se confirma con compras pagadas correctamente medidas.

## Fuentes y método

### Semrush Colombia

Se consultó la API oficial de Semrush con la base `co` y 58 semillas comerciales y semánticas. La clave permaneció en `.env.local` y no se escribió en ningún artefacto.

Los reportes incluyeron volumen colombiano, CPC, competencia, tendencia de doce meses, intención y dificultad. Los términos de Semrush se filtraron por afinidad de ruta y se excluyeron lecturas gratis, tiradas, PDFs, cursos, consultas esotéricas, productos ajenos y búsquedas incompatibles con la baraja.

Referencias: [Semrush Keyword Reports API](https://developer.semrush.com/api/v3/seo/keyword-reports/) y [API units balance](https://developer.semrush.com/api/v3/get-started/api-units-balance/).

### Google Trends

Se investigó Colombia, búsqueda web y últimos cinco años. Las cifras siguientes son índices relativos dentro de cada comparación, no volúmenes absolutos:

- `regalo para hombre` obtuvo promedio 26 y `regalo para mujer` 17; `regalos originales` obtuvo 2, mientras `souvenir colombiano` y `comprar tarot` quedaron en 0 dentro de esa comparación;
- `leyendas colombianas` obtuvo 18, `mitos colombianos` 14 y `arte colombiano` 5;
- `oráculo` obtuvo 52, `autoconocimiento` 37 y `cartas de tarot` 29, pero las consultas emergentes de tarot estuvieron dominadas por “gratis”, tiradas y significados, por lo que se convirtieron en exclusiones y no en expansión comercial;
- `qué comprar en Colombia` obtuvo 59; los términos de souvenir tuvieron poco volumen relativo, aunque `souvenirs Colombia` apareció como consulta relacionada principal;
- se incorporaron señales emergentes pertinentes como regalo personalizado para hombre, idea de regalo para mujer, regalos originales por ocasión, el Jinete Negro, la Madre Vieja, la Cabellona, la Mano Peluda y la Mancarita.

Comparaciones: [regalos y tarot](https://trends.google.com/trends/explore?date=today%205-y&geo=CO&q=regalo%20para%20hombre,regalo%20para%20mujer,regalos%20originales,souvenir%20colombiano,comprar%20tarot), [cultura colombiana](https://trends.google.com/trends/explore?date=today%205-y&geo=CO&q=mitos%20colombianos,leyendas%20colombianas,mitologia%20colombiana,arte%20colombiano,cartas%20ilustradas), [tarot y autoconocimiento](https://trends.google.com/trends/explore?date=today%205-y&geo=CO&q=oraculo,cartas%20de%20tarot,tarot%20para%20principiantes,cartas%20de%20afirmaciones,autoconocimiento) y [viaje y recuerdos](https://trends.google.com/trends/explore?date=today%205-y&geo=CO&q=souvenir%20colombia,souvenir%20bogota,souvenir%20cartagena,que%20comprar%20en%20colombia,regalos%20colombianos).

### Construcción y control de calidad

- 360 raíces candidatas por cada uno de los 21 planes.
- Tres concordancias por raíz: amplia, de frase y exacta; 1.080 entradas generadas por plan antes de deduplicar contra lo que ya existía en Google Ads.
- Cuota mínima verificada de diez raíces cortas, diez medias y diez largas por plan.
- Máximo de 80 caracteres y 10 palabras, según las restricciones observadas en Google Ads.
- Deduplicación sin distinguir mayúsculas ni tildes.
- Mezcla de términos medidos en Semrush, señales de Trends y expansiones controladas por producto, destinatario, ocasión, ciudad, cultura, uso y estilo.
- El plan 21 se balanceó entre once rutas de compra, regalo, destinatario, ocasión, souvenir, ciudad y espiritualidad antes de completar el universo.

Los artefactos reproducibles están en `docs/keyword-research/` y el generador en `scripts/ads/research-tarot-keywords.mjs`.

### Criterio de optimización de puja

Después de la expansión se probó **Maximizar conversiones** en los 21 planes y se mantuvo fija la tasa hipotética de conversión de 2%. El presupuesto elegido es el mayor punto estable que deja el CPA calculado en COP 20.000 o menos. Google redondea visualmente algunos presupuestos; el valor efectivo se verificó con el costo mensual pronosticado dividido entre 30.

El plan 1 es la única excepción: Maximizar conversiones elevó el CPA a COP 32.636 incluso en su mínimo, mientras CPC manual máximo de COP 400 mantuvo el CPA por debajo del objetivo. Los planes sin impresiones ni clics se dejaron con una referencia prudente; subir su presupuesto no crea demanda ni gasto pronosticado.

Estos valores siguen siendo escenarios de Keyword Planner, no campañas ni presupuestos activados. La conversión se modela como `clics × 2%` y no incorpora todavía datos reales de compra.

## Conteo final verificado en Google Ads

`Entradas guardadas` suma el conteo previo y el aviso autoritativo de Google Ads después de guardar. `Raíces visibles` es el contador agrupado de la tabla histórica, que no separa amplia, frase y exacta.

| # | Plan existente | Nuevas confirmadas | Entradas guardadas | Raíces visibles |
|---:|---|---:|---:|---:|
| 1 | [Compra directa y oráculo](https://ads.google.com/aw/keywordplanner/plan/keywords/historical?ocid=8258213992&planId=1432061959&authuser=0&__u=4042601222&__c=7995239208) | 903 | 1.150 | 429 |
| 2 | [Regalos Colombia y extranjeros](https://ads.google.com/aw/keywordplanner/plan/keywords/historical?ocid=8258213992&planId=1432073026&authuser=0&__u=4042601222&__c=7995239208) | 854 | 1.095 | 375 |
| 3 | [Souvenir y objeto cultural](https://ads.google.com/aw/keywordplanner/plan/keywords/historical?ocid=8258213992&planId=1431202749&authuser=0&__u=4042601222&__c=7995239208) | 855 | 1.104 | 381 |
| 4 | [Autoconocimiento y reflexión](https://ads.google.com/aw/keywordplanner/plan/keywords/historical?ocid=8258213992&planId=1432073047&authuser=0&__u=4042601222&__c=7995239208) | 891 | 1.132 | 412 |
| 5 | [Colección, diseño e ilustración](https://ads.google.com/aw/keywordplanner/plan/keywords/historical?ocid=8258213992&planId=1431867800&authuser=0&__u=4042601222&__c=7995239208) | 919 | 1.161 | 441 |
| 6 | [Mitología, cultura y leyendas](https://ads.google.com/aw/keywordplanner/plan/keywords/historical?ocid=8258213992&planId=1432073068&authuser=0&__u=4042601222&__c=7995239208) | 892 | 1.135 | 415 |
| 7 | [Principiantes y guía](https://ads.google.com/aw/keywordplanner/plan/keywords/historical?ocid=8258213992&planId=1431202773&authuser=0&__u=4042601222&__c=7995239208) | 859 | 1.101 | 381 |
| 8 | [Compra local y envío](https://ads.google.com/aw/keywordplanner/plan/keywords/historical?ocid=8258213992&planId=1431865892&authuser=0&__u=4042601222&__c=7995239208) | 855 | 1.100 | 380 |
| 9 | [Regalo espiritual y místico](https://ads.google.com/aw/keywordplanner/plan/keywords/historical?ocid=8258213992&planId=1431201960&authuser=0&__u=4042601222&__c=7995239208) | 854 | 1.095 | 375 |
| 10 | [Volumen genérico broad](https://ads.google.com/aw/keywordplanner/plan/keywords/historical?ocid=8258213992&planId=1431865913&authuser=0&__u=4042601222&__c=7995239208) | 883 | 1.118 | 367 |
| 11 | [Regalos por destinatario](https://ads.google.com/aw/keywordplanner/plan/keywords/historical?ocid=8258213992&planId=1432071814&authuser=0&__u=4042601222&__c=7995239208) | 867 | 1.116 | 392 |
| 12 | [Regalos para hombre](https://ads.google.com/aw/keywordplanner/plan/keywords/historical?ocid=8258213992&planId=1431205404&authuser=0&__u=4042601222&__c=7995239208) | 865 | 1.100 | 379 |
| 13 | [Regalos para mujer](https://ads.google.com/aw/keywordplanner/plan/keywords/historical?ocid=8258213992&planId=1431869960&authuser=0&__u=4042601222&__c=7995239208) | 854 | 1.086 | 365 |
| 14 | [Pareja y aniversario](https://ads.google.com/aw/keywordplanner/plan/keywords/historical?ocid=8258213992&planId=1431869258&authuser=0&__u=4042601222&__c=7995239208) | 857 | 1.089 | 366 |
| 15 | [Original y con significado](https://ads.google.com/aw/keywordplanner/plan/keywords/historical?ocid=8258213992&planId=1431205716&authuser=0&__u=4042601222&__c=7995239208) | 869 | 1.111 | 373 |
| 16 | [Souvenir por ciudad y viaje](https://ads.google.com/aw/keywordplanner/plan/keywords/historical?ocid=8258213992&planId=1431869975&authuser=0&__u=4042601222&__c=7995239208) | 851 | 1.102 | 375 |
| 17 | [Educativo y cultural](https://ads.google.com/aw/keywordplanner/plan/keywords/historical?ocid=8258213992&planId=1432067047&authuser=0&__u=4042601222&__c=7995239208) | 889 | 1.138 | 418 |
| 18 | [Afirmaciones y conversación](https://ads.google.com/aw/keywordplanner/plan/keywords/historical?ocid=8258213992&planId=1431205752&authuser=0&__u=4042601222&__c=7995239208) | 891 | 1.143 | 423 |
| 19 | [Temáticos y de autor](https://ads.google.com/aw/keywordplanner/plan/keywords/historical?ocid=8258213992&planId=1431205446&authuser=0&__u=4042601222&__c=7995239208) | 853 | 1.106 | 386 |
| 20 | [Arte y diseño colombiano](https://ads.google.com/aw/keywordplanner/plan/keywords/historical?ocid=8258213992&planId=1431866153&authuser=0&__u=4042601222&__c=7995239208) | 901 | 1.152 | 432 |
| 21 | [Escenario viable consolidado](https://ads.google.com/aw/keywordplanner/plan/keywords/historical?ocid=8258213992&planId=1431870269&authuser=0&__u=4042601222&__c=7995239208) | 1.031 | 1.443 | 719 + 38 negativas |

Mínimo confirmado: 1.086 entradas. Máximo confirmado: 1.443. Planes por debajo de 1.000: ninguno.

## Pronóstico actualizado después de la expansión

Google Ads reconstruyó los pronósticos después de guardar **18.493 concordancias nuevas**. Los 21 planes quedaron verificados y guardados en su mejor punto probado bajo el CPA objetivo, salvo los que no tienen demanda o cuyo mínimo ya supera COP 20.000:

| # | Plan | Estrategia elegida | Puja o presupuesto diario | Clics/mes | Costo/mes | Conv./mes al 2% | CPA calculado |
|---:|---|---|---:|---:|---:|---:|---:|
| 1 | Compra directa y oráculo | CPC manual | CPC máx. COP 400; diario sugerido COP 2 | 0,09 | COP 22 | 0,0018 | COP 12.222 |
| 2 | Regalos Colombia y extranjeros | Maximizar conversiones | COP 185/día | 14,04 | COP 5.550 | 0,2808 | COP 19.765 |
| 3 | Souvenir y objeto cultural | Maximizar conversiones | COP 585/día | 43,97 | COP 17.550 | 0,8794 | COP 19.957 |
| 4 | Autoconocimiento y reflexión | Maximizar conversiones | COP 1/día | 0,02 | COP 30 | 0,0004 | COP 75.000 |
| 5 | Colección, diseño e ilustración | Maximizar conversiones | COP 14/día | 1,11 | COP 420 | 0,0222 | COP 18.919 |
| 6 | Mitología, cultura y leyendas | Maximizar conversiones | COP 100/día | 0 | COP 0 | 0 | — |
| 7 | Principiantes y guía | Maximizar conversiones | COP 2/día | 0 | COP 0 | 0 | — |
| 8 | Compra local y envío | Maximizar conversiones | COP 100/día | 0 | COP 0 | 0 | — |
| 9 | Regalo espiritual y místico | Maximizar conversiones | COP 9/día | 0,68 | COP 270 | 0,0136 | COP 19.853 |
| 10 | Volumen genérico broad | Maximizar conversiones | COP 4.300/día | 327,28 | COP 129.000 | 6,5456 | COP 19.708 |
| 11 | Regalos por destinatario | Maximizar conversiones | COP 1.400/día | 105,12 | COP 42.000 | 2,1024 | COP 19.977 |
| 12 | Regalos para hombre | Maximizar conversiones | COP 770/día | 57,94 | COP 23.100 | 1,1588 | COP 19.934 |
| 13 | Regalos para mujer | Maximizar conversiones | COP 700/día | 52,36 | COP 20.850 | 1,0472 | COP 19.910 |
| 14 | Pareja y aniversario | Maximizar conversiones | COP 510/día | 38,37 | COP 15.300 | 0,7674 | COP 19.937 |
| 15 | Original y con significado | Maximizar conversiones | COP 34/día | 2,57 | COP 1.020 | 0,0514 | COP 19.844 |
| 16 | Souvenir por ciudad y viaje | Maximizar conversiones | COP 750/día | 56,26 | COP 22.500 | 1,1252 | COP 19.996 |
| 17 | Educativo y cultural | Maximizar conversiones | COP 100/día | 0 | COP 0 | 0 | — |
| 18 | Afirmaciones y conversación | Maximizar conversiones | COP 1/día | 0,06 | COP 30 | 0,0012 | COP 25.000 |
| 19 | Temáticos y de autor | Maximizar conversiones | COP 100/día | 0 | COP 0 | 0 | — |
| 20 | Arte y diseño colombiano | Maximizar conversiones | COP 100/día | 0 | COP 0 | 0 | — |
| 21 | Escenario viable consolidado | Maximizar conversiones | COP 2.800/día | 211,06 | COP 84.000 | 4,2212 | COP 19.900 |

La estrategia automática no gana en todos los casos. En el plan 1, aun con COP 100/día, proyectó CPC medio COP 654 y CPA COP 32.636; por eso se conservó CPC manual. En el plan 21, Maximizar clics y Maximizar conversiones entregaron el mismo pronóstico en la prueba comparativa, por lo que se eligió Maximizar conversiones por alineación con el objetivo.

Los planes 4 y 18 no son viables aun en el presupuesto mínimo. Los planes 6, 7, 8, 17, 19 y 20 devuelven cero demanda pronosticada; el presupuesto visible no produciría gasto ni conversiones. Las cifras anteriores se conservan abajo sólo como referencia histórica y **no deben tratarse como el pronóstico vigente**.

## Referencia anterior a la expansión de 1.000+ entradas por plan

La conversión calculada es `clics × 2%`. Los planes comparten búsquedas y subastas, por lo que estas conversiones no deben sumarse como si fueran campañas independientes.

| # | Plan | CPC máximo | Presupuesto diario sugerido | Clics/mes | Costo/mes | Conv./mes al 2% | CPA calculado |
|---:|---|---:|---:|---:|---:|---:|---:|
| 1 | Compra directa y oráculo | COP 300 | COP 2 | 0,10 | COP 22 | 0,0020 | COP 11.000 |
| 2 | Regalos Colombia y extranjeros | COP 520 | COP 140 | 7,69 | COP 2.624 | 0,1538 | COP 17.061 |
| 3 | Souvenir y objeto cultural | COP 650 | COP 540 | 34,14 | COP 12.683 | 0,6828 | COP 18.575 |
| 4 | Autoconocimiento y reflexión | COP 520 | COP 0 | 0 | COP 0 | 0 | — |
| 5 | Colección, diseño e ilustración | COP 300 | COP 21 | 1,12 | COP 164 | 0,0224 | COP 7.321 |
| 6 | Mitología, cultura y leyendas | COP 520 | COP 0 | 0 | COP 0 | 0 | — |
| 7 | Principiantes y guía | COP 520 | COP 0 | 0 | COP 0 | 0 | — |
| 8 | Compra local y envío | COP 520 | COP 0 | 0 | COP 0 | 0 | — |
| 9 | Regalo espiritual y místico | COP 450 | COP 3 | 0,04 | COP 14 | 0,0008 | COP 17.500 |
| 10 | Volumen genérico broad | COP 650 | COP 360 | 8,67 | COP 3.368 | 0,1734 | COP 19.423 |
| 11 | Regalos por destinatario | COP 650 | COP 1.800 | 104,51 | COP 40.244 | 2,0902 | COP 19.254 |
| 12 | Regalos para hombre | COP 650 | COP 980 | 48,94 | COP 18.382 | 0,9788 | COP 18.780 |
| 13 | Regalos para mujer | COP 520 | COP 630 | 41,89 | COP 13.479 | 0,8378 | COP 16.089 |
| 14 | Pareja y aniversario | COP 650 | COP 610 | 29,16 | COP 11.462 | 0,5832 | COP 19.654 |
| 15 | Original y con significado | COP 520 | COP 8 | 0,30 | COP 91 | 0,0060 | COP 15.167 |
| 16 | Souvenir por ciudad y viaje | COP 520 | COP 560 | 34,12 | COP 10.999 | 0,6824 | COP 16.118 |
| 17 | Educativo y cultural | COP 520 | COP 0 | 0 | COP 0 | 0 | — |
| 18 | Afirmaciones y conversación | COP 300 | COP 0 | 0,02 | COP 2 | 0,0004 | COP 5.000 |
| 19 | Temáticos y de autor | COP 520 | COP 0 | 0 | COP 0 | 0 | — |
| 20 | Arte y diseño colombiano | COP 520 | COP 0 | 0 | COP 0 | 0 | — |
| 21 | Escenario viable consolidado | COP 650 | COP 3.200 | 194,70 | COP 75.177 | 3,8940 | COP 19.306 |

### Curva histórica del plan 21 antes de la expansión

| CPC máximo | Presupuesto diario sugerido | Clics/mes | Costo/mes | Conv./mes al 2% | CPA calculado | Decisión |
|---:|---:|---:|---:|---:|---:|---|
| COP 300 | COP 740 | 78,14 | COP 13.953 | 1,5628 | COP 8.928 | Viable, conserva margen |
| COP 450 | COP 1.800 | 129,75 | COP 34.943 | 2,5950 | COP 13.466 | Viable |
| COP 520 | COP 2.300 | 151,15 | COP 46.998 | 3,0230 | COP 15.547 | Viable |
| COP 650 | COP 3.200 | 194,70 | COP 75.177 | 3,8940 | COP 19.306 | Elegido: mayor escala bajo CPA 20K |
| COP 800 | COP 4.900 | 243,11 | COP 116.619 | 4,8622 | COP 23.985 | Rechazado |
| COP 1.000 | COP 8.600 | 296,73 | COP 175.232 | 5,9346 | COP 29.527 | Rechazado |

## Lectura operativa

1. El plan 21 sirve como universo deduplicado; los planes 11–16 explican por qué ruta llega la demanda. No deben activarse todos como campañas simultáneas.
2. La ruta de regalos —hombre, mujer, pareja, ocasión y regalo con significado— aporta la mayor escala. El anuncio y la landing deben explicar de inmediato que el producto es una baraja física ilustrada sobre mitos colombianos.
3. El mayor volumen modelado está en el plan 10: 6,5456 conversiones/mes con COP 4.300/día y CPA COP 19.708. Su concordancia amplia también implica más riesgo de tráfico irrelevante y de que la conversión real sea inferior al 2% supuesto.
4. El escenario consolidado y protegido por negativas queda en COP 2.800/día: 4,2212 conversiones/mes y CPA COP 19.900. Es el escenario más prudente para una prueba controlada.
5. La meta de 100 conversiones mensuales no está cerca: incluso el plan 10 requiere 5.000 clics mensuales y sólo pronostica 327,28, una brecha de 15,3×. No conviene intentar cerrarla elevando presupuesto por encima del límite de CPA.
6. Las rutas culturales, educativas, de autor y de autoconocimiento amplían cobertura, pero muchas combinaciones tienen volumen bajo o nulo; son útiles para descubrimiento y SEO, no una razón automática para asignar presupuesto.

## Límites

- Keyword Planner modela y redondea; no garantiza clics, ventas ni CPA.
- Un conteo alto de palabras mejora cobertura de investigación, no asegura volumen útil. La decisión debe ponderar intención, términos de búsqueda reales y negativas.
- El CPA depende de precio, envío, confianza, creatividad, velocidad y conversión de la landing, no sólo de las palabras clave.
- La meta de COP 20.000 está demostrada en pronóstico, no todavía en producción. La prueba definitiva requiere compras confirmadas y atribución correcta.
