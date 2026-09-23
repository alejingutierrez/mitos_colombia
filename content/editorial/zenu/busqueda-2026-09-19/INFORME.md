# Zenú — investigación y reescritura, 19 de septiembre de 2026

Siete mitos: `mexion-y-manexca`, `la-noche-mas-larga`, `el-caiman-de-oro`, `trono-corcovao`,
`el-ojo-de-la-canoa`, `el-totumo-de-oro`, `juan-lara-y-la-trenza-del-aire`.

Entregables:
- `content/editorial/zenu/reescritura-2026-09-19/<slug>.json` — texto reescrito, 7 archivos.
- `content/editorial/zenu/fuentes-2026-09-19/<slug>.json` — fuentes estructuradas, 7 archivos.
- este informe.

No se tocó `editorial/zenu/*.mjs`, no se escribió en Neon, no se ejecutó ningún script de aplicar,
no se usó la API de OpenAI. La investigación se hizo con WebSearch/WebFetch, `curl` y el navegador.

---

## 1. Qué se deshizo: el reparto en bloque

Antes, `pickZenuSources()` devolvía las **mismas 12 obras** a los seis primeros mitos. Ahora cada ficha
declara su propio reparto. Ninguna pareja de repartos comparte más de cinco obras de ocho, y las tres
primeras de cada lista (las que salen publicadas como fuentes clave) son distintas en los siete casos.

| mito | fuentes clave (1-3) | total |
|---|---|---|
| mexion-y-manexca | ONIC · Drexler · Defensoría | 8 |
| la-noche-mas-larga | ONIC · PES Cabildo Mayor · Puche Villadiego | 8 |
| el-caiman-de-oro | Drexler · PES Cabildo Mayor · ONIC | 8 |
| trono-corcovao | SINIC Sucre · Defensoría · Fals Borda | 8 |
| el-ojo-de-la-canoa | SINIC Sucre · Drexler · Fals Borda | 8 |
| el-totumo-de-oro | Artesanías de Colombia · Drexler · SINIC Sucre | 8 |
| juan-lara-y-la-trenza-del-aire | SINIC Sucre · Drexler · SINIC Córdoba | 7 |

Obras usadas por más de una ficha (permitido: una obra, una URL canónica, `summary` y `limitation`
distintos por mito): Drexler (7), PES del Cabildo Mayor (7), FAO (4), Fals Borda (4), SINIC Sucre (4),
ONIC (3), Defensoría (3), Boletín Museo del Oro (3), Jangwa Pana (3), Tabula Rasa (3).

Obras que sólo aparecen en una ficha: cartilla de creación, Puche Villadiego, Revista Vitalia,
nota PCI de Artesanías, informe INST-D del repositorio de Artesanías, PDT de San Andrés de Sotavento,
«Figuras que nacen de un fruto de oro», SINIC Córdoba.

---

## 2. Qué URLs de catálogo (y equivalentes) se retiraron, y por qué

Se comprobó una por una, con `curl` y navegador, cada URL del módulo el 19 de septiembre de 2026.
De las 16 del pool (`zenuSources` + `juanLaraSources`), **siete se retiran**.

| URL retirada | Estado | Motivo |
|---|---|---|
| `https://reencuentroconloscuentoszenu.wordpress.com/` | 200 | **Índice de blog.** Recopilación escolar sin pie de imprenta, sin año, sin narradores. Era la fuente principal de la variante territorial del caimán y del «encanto de Tofeme»; nada de eso se pudo verificar en ninguna edición institucional. |
| `https://identidadculturalzenu.blogspot.com/p/leyenda-de-las-mohanas-segun-laleyenda.html` | 200 | **Blogspot.** Reproduce sin citarlo el texto oficial de SINIC (leyenda de las Mohanas, Corcovao de Tofeme, Torcorá). Sustituida por la fuente original del Ministerio de Cultura. |
| `https://enciclopedia.banrepcultural.org/index.php?title=Zenú` | 200 con CAPTCHA | **Entrada de enciclopedia colaborativa** (MediaWiki, título por parámetro `index.php?title=`), equivalente funcional de Wikipedia, y hoy además tras un bot manager de Radware que impide verificarla. Su contenido arqueológico se reemplazó por el artículo original: Plazas de Nieto, Falchetti y otros en el *Boletín Museo del Oro* 20 (1988). |
| `https://www.loricatravel.gov.co/mitos-sucesos-y-leyendas/` | **000** (el dominio no resuelve) | Muerta. Era la fuente #1 de Juan Lara. |
| `https://www.laguiademonteria.co/mitos-y-leyendas-de-cordoba/` | 200 | **Prensa y turismo.** Sitúa a Juan Lara en Córdoba, lo que contradice el único registro institucional (SINIC lo pone en Sucre). |
| `https://www.eluniversal.com.co/suplementos/facetas/2019/04/17/semana-santa-el-misterio-que-flota-en-los-dias-santos/` | 200 | **Prensa.** No es versión del relato, sólo color regional. |
| `https://seducacion.cordoba.gov.co/_contenido/noticias/2020/Noviembre/Lengua_castellana_5.pdf` | **000** | Muerta. |

Se conserva, **en último lugar y sólo en `mexion-y-manexca`**, un PDF alojado en WordPress
(`tribuzenucolombia.wordpress.com/.../mitos_indigenas_zenues.pdf`, 200). No es una entrada de índice
de blog sino la copia escaneada de una cartilla etnoeducativa, y es el **único** texto que trae la
secuencia completa de la primera luz y la primera noche. Se cita con esa advertencia explícita en su
`limitation` y en `dudas`. Recomendación: pedir al resguardo la edición impresa y reemplazarlo.

Se conservan, revisadas: SMT-ONIC, Drexler (UNM), Defensoría, MinCultura, FAO, las tres fichas de
Artesanías de Colombia.

### Dos URLs archivadas, y por qué se aceptan

`trono-corcovao`, `el-ojo-de-la-canoa`, `el-totumo-de-oro` y `juan-lara` dependen de una página del
**SINIC (Sistema Nacional de Información Cultural, Ministerio de Cultura)**: «Colombia Cultural →
Mitos y leyendas → Sucre». Esa URL es la que la Defensoría del Pueblo cita en su nota 3 de 2022, y
**hoy devuelve 404**: el módulo Colombia Cultural desapareció con la reestructuración del portal
(`sinic.gov.co` responde 200 en la raíz, pero `ColCulturalBusca.aspx` ya no existe). No se encontró
sustituto vivo. Se citan las copias archivadas, verificadas y abiertas:

- Sucre: `https://web.archive.org/web/20230417204328/…&IdDep=70&COLTEM=212`
- Córdoba: `https://web.archive.org/web/20240519043115/…&IdDep=23&COLTEM=212`

Preferir un snapshot de una base oficial del Ministerio de Cultura a un blog que la copia sin citarla
es lo que sostiene la cadena documental de cuatro de los siete relatos.

---

## 3. Obras nuevas incorporadas (todas abiertas y verificadas el 19-09-2026)

| Obra | URL | Para qué |
|---|---|---|
| SINIC, «Mitos y leyendas – Sucre», acopio de **Zully Torres y Oswaldo Villera** | web.archive.org (ver arriba) | Texto oficial de Corcovao de Tofeme, Torcorá y Juan Lara |
| SINIC, «Mitos y leyendas – Córdoba» | web.archive.org | Control negativo: Juan Lara **no** está en Córdoba |
| **Plan Especial de Salvaguardia del trenzado en caña flecha**, Cabildo Mayor Regional del Pueblo Zenú / Mincultura | patrimonio.mincultura.gov.co | Mapa mítico del resguardo con el caimán; cerro Tofeme como sitio sagrado; Mexión tejiendo; portadores de tradición oral con nombre |
| **Fals Borda**, *Resistencia en el San Jorge* (Serie Maestros de la Sede) | repositorio.unal.edu.co | «La amenaza permanente del mohán del cerro del Corcovado» en Jegua; el hombre-caimán como contrapunto |
| **Arrieta Fernández**, *Tabula Rasa* 23 (2015) | revistatabularasa.org | Relectura del pasaje del Corcovado y del mundo sobrenatural del riano |
| **Puche Villadiego**, «El sombrero vueltiao zenú», *Revista de Extensión Cultural* 60 (UNAL Medellín) | medellin.unal.edu.co | Anatomía técnica del sombrero: plantilla, copa, vueltas, pies, pintas, ala |
| **Plazas de Nieto, Falchetti et al.**, *Boletín Museo del Oro* 20 (1988) | publicaciones.banrepcultural.org | Arqueología del bajo San Jorge, separada de la comunidad viva |
| **Larraín**, *Jangwa Pana* 23-2 (2024), DOI 10.21676/16574923.5703 | revistas.unimagdalena.edu.co | Etnografía de relaciones interétnicas zenú |
| **Olmos Severiche et al.**, *Intropica* 17-1 (2022) | revistas.unimagdalena.edu.co | Canales ancestrales, releídos |
| **Ruiz Argel y Posada**, *Rev. Científica de Salud y Desarrollo Humano* 7-1 (2026) | revistavitalia.org | Registro bibliográfico vivo de ORUZEN (Mendoza, 2011) |
| **PDT 2020-2023 de San Andrés de Sotavento** | micolombiadigital.gov.co | El municipio reconoce «la leyenda del cerro Tofeme» |
| Artesanías de Colombia, informe INST-D 2013.43 | repositorio.artesaniasdecolombia.com.co | Municipios y talleres del resguardo |

---

## 4. Hallazgos que cambian lo publicado

**4.1 Drexler sí existe, y dice otra cosa de la que se le atribuía.** El libro completo (169 pp.) está
en el UNM Digital Repository; Cloudflare devuelve 403 a `curl` y a WebFetch, así que se leyó abriendo
el PDF en navegador y extrayendo su texto. Resultado:

- Confirma **al pie de la letra** lo que la ficha del caimán le atribuía: cabeza y corazón bajo la
  iglesia de San Andrés, cola hacia la ciénaga de Oro, patas hasta Chimá y Palmito (p. 52 y p. 132).
  Y aporta mucho más: la variante con la cabeza en Tofeme (p. 54), el Peñón Colorado bajo la iglesia
  (p. 39 y 59), el gringo que cava y se ahoga, **Mister Gallo**, el cerro de Bomba, la llegada de la
  **SAGOC en 1920**, y la politización del mito desde los años setenta (pp. 54-55).
- Da **narradoras con nombre**: Ana-Isabel Martínez Roja (Cruz del Guayabo), Santa Eustoquia
  (Los Vidales), el rezandero Clemente, el maestro trenzador Jesús Medardo de Suárez (Tuchín),
  Celedonio Padilla (MIC), el curioso Raúl Mejía. El encargo pedía nombrar a quien narra: aquí hay seis.
- **No menciona ni una sola vez a Mexión ni a Manexca.** La matriz de evidencia del módulo lo citaba
  como respaldo de «Ninha se convierte en Sol y el descanso de su luz permite la primera noche».
  Esa secuencia no está en el libro. Lo que sí está (p. 37, 53, 101, 142) es que los zenúes veneraban
  al Sol como **Ninha**, a la Luna como **Thi** y a la estrella matutina como **Uhrira** —un tercer
  nombre que el módulo no tenía—, más `mohamay`, `molemdero` y los «ojos de la Santa Lucía».
- Documenta el **totumo de oro** y la **palma de oro** dentro de las cuevas de los cerros sagrados,
  con castigo meteorológico (p. 58), y la **totuma de oro de la mohana** en la Sierra Chiquita (p. 142).
- **Lista a Juan Lara** en su tabla de categorías de espíritus (p. 81), en los montes, con la misma
  descripción que el mohán: «puede encantar», «se lleva a las personas», «se enamora».

**4.2 «Trono Corcovao» y «El ojo de la canoa» son la misma leyenda partida en dos.** El texto oficial
de SINIC dice que el tesoro de la canoa de La Sierpe «cuida el mocán del Corcovao». Las dos fichas del
sitio trataban a Tofeme y a Torcorá como guardianes independientes. No lo son: es un guardián con dos
puestos. Ambas fichas lo dicen ahora.

**4.3 El Corcovao tiene dos geografías, y no se pueden fundir.** El cerro del Corcovao de la leyenda
se ve **desde el río San Jorge**, en Sucre, y Fals Borda lo pone en Jegua (Sucre) como «el mohán del
cerro del Corcovado». El cerro **Tofeme** que el resguardo reconoce como sitio sagrado y límite de su
polígono está en **San Andrés de Sotavento, Córdoba**, en la serranía de San Jerónimo junto a Vidales,
Peñón Petaca, Cristo, Mohán y Sierra Chiquita. Drexler nunca usa la palabra «Corcovao». Queda anotado
en `dudas`: no se pudo establecer si es el mismo accidente.

**4.4 Juan Lara es de Sucre, no de Córdoba, y su reclasificación como «mestizo» perdió su base.**
El único registro institucional lo pone en Caimito, Platero, San Felipe y Santa Inés, en la órbita de
San Marcos (Sucre), recogido por Zully Torres y Oswaldo Villera. La lista oficial de Córdoba del mismo
organismo **no lo incluye**. Y Drexler lo registra como encanto del monte dentro del sistema de
creencias del resguardo. La nota de investigación del módulo decía que «los controles institucionales
no documentan» la atribución indígena: hoy sí la documentan. **Decisión pendiente del director:**
revisar la ruta Zenú → Caribe Mestizo. No se tocó la taxonomía.

**4.5 «Limón de acero» es la forma oficial, pero probablemente sea «timón».** SINIC escribe *limón*,
y a la vez llama a la entidad **Torcorá** en el título y **Torcerá** en el cuerpo. En una canoa la pieza
que se pone y se quita es el timón. Se conserva la forma publicada por el Ministerio y se anota la otra.

**4.6 La versión del sombrero estaba incompleta.** El texto que la ONIC cita de Mendoza dice que
Mexión y Manexka **vivían en el cielo**, que el cono se levantó **para observar la tierra desde arriba**
y —lo que faltaba— que los descendientes **subieron por el sombrero** y fue **ese peso** el que lo
aplanó; la parte que cedió no los aplastó y quedó como ala. La ficha anterior narraba un peso genérico
de «la vida». Además el libro tiene autor: **Wilfrido Manuel Mendoza Romero**, maestro de Tuchín,
*Ordenando el universo zenú (ORUZEN)*, Cabildo Mayor Regional del Pueblo Zenú, 2010/2011.

**4.7 El propio cabildo cuenta otro origen.** El Plan Especial de Salvaguardia, escrito por el Cabildo
Mayor Regional, dedica su capítulo histórico a un origen **técnico** del sombrero (cestería → maíz →
sol), sin Tarra ni mensajeros, y sólo trae el mito en tres líneas en un recuadro sobre el centro
artesanal. La tensión está ahora en `versiones`.

**4.8 Circularidad confirmada.** Al buscar «Mexión Manexca», `mitosdecolombia.com` aparece entre los
dos primeros resultados, y Studocu, fliphtml5 y varios blogs reproducen **la versión anterior del
sitio** —Manexca tejiendo el mundo como caña flecha, Mexión abriendo canales, los primeros zenúes
naciendo del maíz—, que ninguna fuente documenta y que las notas del módulo ya habían marcado como
ficción heredada. El sitio está alimentando el corpus del que después se citaría.

**4.9 La cadena de la ONIC se corta en un blog.** La genealogía de Ixitoco (Mexión y Manexka →
Momíl, Arachi, Chimá, Betancí, Tuchín → Panzenú, Finzenú, Zenufana) se apoya en la nota 46 del
Documento madre, que remite a `maicaoaldia.blogspot.com` (2009). La nota 45 remite a academia.edu.
Se conserva la genealogía, atribuida, y se anota el corte en `dudas`.

---

## 5. Comprobación de enlaces (19-09-2026)

Las 21 URLs citadas en los siete repartos devuelven **200** con navegador o `curl` con cabeceras de
navegador. Dos observaciones para el linter de enlaces:

- `digitalrepository.unm.edu` devuelve **403 a clientes no-navegador** (Cloudflare). La ficha de la obra
  y el PDF se abren en navegador; una comprobación automática lo marcará como caído. No lo está.
- `sembrandocapacidades.fao.org.co` devuelve **406** sin cabeceras `Accept`/`Referer` de navegador.

---

## 6. Qué queda pendiente

1. Conseguir con el resguardo la edición impresa de la cartilla de creación y de *ORUZEN*, y sustituir
   la copia de WordPress y la cita indirecta de la ONIC.
2. Preguntar al Cabildo Mayor Regional si reconoce el relato de Tarra como relato del resguardo o como
   texto de autor.
3. Resolver si el Corcovao (Sucre) y el cerro Tofeme (Córdoba) son el mismo cerro.
4. Decidir la clasificación de Juan Lara a la luz del registro de Drexler y del acopio de SINIC.
5. Renombrar o reasignar el slug `la-noche-mas-larga`, que hoy aloja el relato del sombrero, y el
   sufijo `-y-la-trenza-del-aire` de Juan Lara, motivo que ninguna fuente respalda.
6. Buscar a Zully Torres y Oswaldo Villera: son los únicos recopiladores nombrados de cuatro de los
   siete relatos, y su acopio original podría estar en un archivo departamental de Sucre.
