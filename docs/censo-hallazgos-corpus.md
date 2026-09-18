# Lo que encontró el censo, aparte del número

El 18 de septiembre de 2026 se leyeron las 436 páginas que no tienen biblia
—los cuatro campos editoriales de cada una— para contar cuántas láminas hay que
producir. El conteo está en [`censo-fichas-biblias.md`](censo-fichas-biblias.md).
Esto es lo otro que apareció, que no se buscaba y que hay que resolver antes de
gastar un peso en imagen.

## 1. La decisión que hay que tomar: ¿el módulo o la página?

**Es el hallazgo que condiciona todo lo demás.** En varios corpus, el texto
publicado en la página y el de `editorial/<com>/definitions.mjs` **cuentan
historias distintas**. Los módulos son revisiones que retiran invenciones y las
reemplazan por material con fuente, pero **no están aplicadas a la base**.

Y el censo no fue uniforme en esto, así que hay que saberlo antes de leerlo:

| corpus | se censó contra |
|---|---|
| yukpa, zenú, occidente antioqueño, Caldas, varios sin territorio | **el módulo** |
| Orinoquía llanera, Boyacá, Pacífico sur | **la página** |
| el resto | coinciden, o no hay módulo que difiera |

Los casos concretos:

- **Zenú.** El módulo llama al canon actual, con todas las letras, «FICCIÓN
  HEREDADA REEMPLAZADA»; ninguna frase del canon sobrevive en el módulo. Diez
  de las diecinueve exclusiones del censo son esa ficción —la Babilla Antigua,
  la Ceiba Primera, el aserrador y su árbol parlante, la anciana tejedora, el
  bastón de Mexión—.
- **Yukpa.** El módulo declara invención la piedra flotante, el venado guía, la
  pareja encerrada y el abuelo narrador, y publica en su lugar el diluvio con
  las cumbres Shkhimo y Tütarhi. Además declara **cinco slugs canónicos, no
  dos**: Yukpa no es un corpus mínimo.
- **Orinoquía.** En el módulo, `el-llano-cobra-sus-deudas` es la ruina de don
  Victoriano; en la página es la fundación de Támara en 1626. No es un matiz:
  es otro relato.
- **Pacífico sur.** El módulo transfiere Chimbilaco a Yagua, borra el rosario
  del Riviel, declara inventado el Kijimba-llave y manda Guagua Rayo, La Totuma
  y Taita Galeras a Quillacingas.
- **Caldas.** `cuento-de-animas` no es caldense: el módulo lo reubica en
  Rionegro y Girón, Santander.

**Regla propuesta:** el módulo es la verdad *una vez aplicado*; hasta entonces,
lo publicado es la página. Producir arte contra un canon que el módulo ya retiró
es pagar por una ficción, y producirlo contra un módulo sin aplicar deja la
lámina sin texto que la sostenga. Lo que no se puede es decidirlo corpus por
corpus, como quedó hoy.

## 2. Cinco corpus que no deberían tener biblia propia

- **Pirsa** — el relato es el capítulo CXVIII de Cieza (1553) sobre un hecho de
  1549, y el propio canon dice que «no permite escuchar cómo lo habría contado
  una persona Pirsa». De sus diez láminas, la utilería completa —copa, cruces,
  estola, agua bendita, cuerdas—, la iglesia, el fraile y los acompañantes son
  iconografía colonial cristiana; lo único indígena es una multitud sin una
  línea de descripción. **Va en un expediente colonial de Caldas y Anserma.**
- **Embera** — le queda **un slug de veintiséis**: veinte se fueron a Chamí y
  cuatro a Katío en una limpieza de frontera. El sobreviviente es **Dóbida**
  (Usagará, Bojayá). **Anexo dentro del expediente Katío**, que ya cubrirá el
  mundo fluvial chocoano. Nunca dentro de Chamí, que es andino.
- **San Andrés** — hoy vive dentro del Caribe restante, pero **catorce de las
  treinta y cuatro fichas de ese cubo son suyas** y su bestiario es cerrado:
  Nansi, Tiger, Mico, los perros, el molino. No comparte una sola entidad con
  Magdalena ni con el Cesar. **Corpus propio.**
- **Pacífico sur** — son tres territorios en un cubo: Nariño andino y volcánico,
  Valle y Cauca cañero y colonial, y litoral. Dieciséis entidades sobrenaturales
  nombradas y ocho paisajes que no se intercambian. **Partirlo en tres** baja la
  densidad de 4,4 a ~3 sin borrar nada.
- **Ufaina** — sí da para biblia, pero **mal nombrada**. Hildebrand recogió el
  ciclo con hablantes tanimuka que se autodenominaban ufaina (1972); hoy es
  denominación secundaria. Debe llamarse **Tanimuka (Ufaina)**.

### El caso más grande: la Amazonía mixta

`editorial/` **ya reasignó 15 de las 28 páginas** del cubo amazónico fuera de
«mixto»: nueve a Ticuna (`ticuna-residual`), cuatro a Huitoto
(`huitoto-residual`) y una a Ufaina/Tanimuka; `el-origen-de-las-frutas` sale de
Yucuna con la frase literal «Ninguna fuente consultada sostiene su
clasificación Yucuna». **Sólo nueve páginas quedan genuinamente mixtas.** Si
esas quince se cuentan dentro de las biblias ticuna, huitoto y tanimuka, este
corpus baja de 73 láminas a unas doce páginas de material propio.

Y una página que no debería producirse tal cual: **`yagua` es una recreación
literaria de Hugo Niño de principio a fin** —Petita, Yuané, Asento, Rajé,
Turuna, Manunjo, el yatuján—, con lenguaje de pureza racial y el rótulo «boras
caníbales» que el módulo retira. El censo excluyó sus ocho figuras: la página
aporta a la biblia exactamente un sol.

## 3. Una contaminación entre pueblos, ya cometida

La ficha de **Nɨkak** atribuía a ese pueblo a **Idn Kamni y el Río de Leche**,
que son **Kakua**. Es exactamente la falta que la doctrina prohíbe —copiar la
iconografía de una comunidad en otra— y ya está en el repo. Hay que corregirla
antes de producir, no después.

Y dos trampas vecinas que el censo alcanzó a frenar: el **cerro Batero** es
literalmente el mismo cerro en Ansermas (Karambá/Batero) y en Umbra, y quedó
con dos fichas separadas y prohibición expresa de compartir lámina; y la
comparación de los jeques Umbra con Michua, que es Ansermas, quedó excluida por
ser analogía periodística, no fuente.

## 4. Lo que el archivo no dice, y que yo di por supuesto

Al repartir el censo describí cada corpus mestizo por su estampa regional. Los
agentes fueron a contar y varias de esas estampas **no están en el texto**:

| corpus | lo que supuse | lo que hay |
|---|---|---|
| Córdoba y Sinú | espantos, brujas, ciénaga, canoa, vueltiao, fandango | **cero** de todo eso. Ciclo de Tío Conejo (12 relatos), märchen europeos trasplantados y chistes de sabana |
| Eje cafetero | cafetal, beneficiadero, guadual, guaca | cero menciones; la casa de bahareque es inferencia de época declarada |
| Tolima | una página del Mohán y otra de la Madremonte, la Tatacoa | el Mohán vive dentro de El Poira, la Madremonte se nombra de pasada, la Tatacoa no aparece |
| Chocó | minería, bogas, champán, batea | «barequear» una vez, de pasada; ni batea ni champán |
| Orinoquía | espantos de sabana, Silbón, arpa, bongo | 8 de 19 páginas tienen aparición; no hay Silbón, ni arpa, ni bongo. Sí tiple, maracas, garza y chigüiro |
| Boyacá | páramo, frailejón, ruana, tapia, mina de sal | ninguno de los cinco. Picaresca colonial en Tunja, un espanto de trapiche y tres cosmogonías muzo y chibcha |

Es la razón por la que el conteo se hizo leyendo. Una plantilla regional
plausible habría producido seis biblias que no representan a nadie.

Y una perla: la página `los-delfines-dorados` **no contiene delfines**. El
cuerpo narra la cura de María de los Ángeles en La Rubiera.

## 5. Material de otra comunidad dentro de un corpus mestizo

Tres corpus traen material indígena **escrito en el texto**, no importado:

- **Boyacá**, en tres de cinco páginas: `furatena` llama a la tierra «adoratorio
  de los muiscas»; `los-mensajeros-de-los-dioses` transcurre «en tierras
  chibchas» y su deidad es Sua; `el-tesoro-de-buzaga` sienta al mohán sobre un
  **duho** y le hace enumerar **tunjos y gargantillas**. La biblia muisca ya
  existe: hay que cotejar antes de producir o se fabrican dos identidades de la
  misma deidad.
- **Occidente antioqueño**, sólo en las dos páginas Dobaida, donde Dabeiba Katío
  se nombra siete veces y siempre para separarla de Dobaida Cueva. El censo
  excluyó las tres entidades indígenas: el archivo no conserva descripción de
  cuerpos y dibujarlas fabricaría iconografía desde la mirada del conquistador.
- **Bogotá**, en dos relatos que además **lo retiran** —Monserrate y el Venado
  de Oro—: quedan excluidos y no se tomó nada de la biblia muisca.

**Zenú y Córdoba están limpios**: cero menciones, cero orfebrería, cero
vueltiao, cero canales en el corpus mestizo del mismo territorio.

## 6. El yuruparí, y lo que no se dibuja

Dieciséis entidades del Vaupés quedaron en `do_not_visualize`, **diez de ellas
por el yuruparí** —instrumentos restringidos por género y por iniciación—:
Desana 3, Tucano 2, Barasana 5. Siete más quedaron en `consult_required`, entre
ellas el sabedor `~kubu`, excluido con el mismo criterio que dejó al jaibaná
fuera de la biblia chamí.

En kogui: máscaras, interior del nuhué, iniciación del poporo, pagamento,
ezwamas y sitios de la Línea Negra, y el dibujo tejido de la mochila. **Aviso de
producción**: el desenlace de Seiskwisbuche transcurre entero dentro de la casa
ceremonial y habrá que resolverlo por umbral o elipsis.

Y dos casos donde **no se inventaron exclusiones para parecer prudente**: en
sikuani, «dopa» y «rezo del pescado» no aparecen nunca en el canon; en
quillacingas no se nombra ninguna guaca ni sitio de entierro en los seis
relatos. Decirlo vale tanto como excluir.

## 7. Dónde está el ahorro que queda

El corpus nacional propone **52 figuras como lámina única** que las trece
regiones hereden: el Diablo, la Llorona, el Duende, la Madremonte, el Mohán, el
Sombrerón, el Ánima Sola, el Cura sin Cabeza, la Viudita, el guando, el
Hojarasquín, la Colmillona, la Muelona, la Mano Peluda, el Viejo del Costal.
Más cinco láminas de fondo que reusan las catorce regiones: camino de montaña,
casa campesina con fogón, pueblo colonial de noche, señal sonora sin cuerpo y
revelación de calavera.

Su propio informe advierte que el ahorro está estimado por la distribución
conocida del folclor, no por haber leído los otros censos.
`scripts/mitos/agregar-censo.mjs` lo mide de verdad cruzando el roster contra
las entidades `required` reales de cada región.
