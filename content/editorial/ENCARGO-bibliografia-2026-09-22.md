# Encargo común · bibliografía de un ciclo (ronda R1) · 2026-09-22

Lo lee cada agente de bibliografía de los carriles C4 y C5. Su mensaje le dice
qué ciclo, qué módulos y qué slugs le tocan, y en qué carpeta escribir.

**Esto se hace una vez por ciclo y sirve para todas sus fichas.** No se redacta
ninguna ficha ni ninguna acta: se levanta la cantera y se dice, slug por slug,
de qué obra sale cada relato y con qué confianza.

## Límites

- Trabajas en `/Users/alegut/MyApps/Personal/mitos_colombia/.claude/worktrees/enriquecimiento-mitos-mestizos-99b035`.
  No hagas `cd` a otra carpeta ni a otro worktree.
- **No toques git, ni Neon, ni los módulos de `editorial/`, ni ningún script.**
  Sólo escribes en la carpeta que te indica tu mensaje, dentro de `content/editorial/`.
- Sin herramientas de navegador. Para abrir URLs: `curl -sSL -A 'Mozilla/5.0
  (Macintosh; Intel Mac OS X 14_0) AppleWebKit/537.36 Chrome/128.0 Safari/537.36'`,
  WebFetch o WebSearch. Para un PDF: `curl … | pdftotext -layout - <archivo>.txt`
  y guarda **sólo el texto** del capítulo o las páginas pertinentes en
  `<tu carpeta>/primarias/`. Si es un escaneo sin texto, pásalo a imágenes con
  `pdftoppm` en el scratchpad y léelo.
- **Regla de supervivencia:** un agente que pasa 10 minutos sin escribir en disco
  muere y se pierde todo. Escribe `BIBLIOGRAFIA.md` desde el principio y
  amplíalo por tandas.

## Lo que tienes que leer antes

1. `docs/brief-mestizos-y-mixtos.md`, paso 1, y `docs/spec-mestizos-y-mixtos.md` §4
   (la escalera de fuentes y lo vetado).
2. **Dos bibliografías ya hechas, como modelo de lo que se espera:**
   `content/editorial/piedecuesta-santander/busqueda-2026-09-20/BIBLIOGRAFIA.md` y
   `content/editorial/orinoquia-amazonas/busqueda-2026-09-20/BIBLIOGRAFIA.md`.
   Mira sobre todo su sección «REPARTO REAL».
3. Los módulos de tu ciclo en `editorial/<módulo>/`: qué dice cada ficha
   publicada, de qué obra dice salir y qué fuentes cita hoy. **No te lo creas:**
   en los ciclos anteriores el recopilador que daba nombre al ciclo no era el
   real, y la mitad de las fuentes citadas eran portadas de catálogo.
4. **Cruza antes de buscar fuera:** `grep -ril` con los títulos y personajes de
   tus fichas en todos los `content/editorial/*/primarias/` y `busqueda-*` del
   repo. Villa Posse II (`https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620`,
   ya extraído por secciones en `caribe-mestizo-final/primarias/` y
   `piedecuesta-santander/primarias/`) trae capítulos por departamento; dos
   veces lo que se daba por perdido estaba en su sección «Varias regiones».

## Qué levantar

- **El recopilador y su obra**: edición, año, páginas, dónde está digitalizada y
  abierta. Si el ciclo sale de un libro, ese libro es el primer escalón.
- **El municipio y el departamento**: monografías, historia local, patrimonio,
  casas de la cultura, planes de ordenamiento (los EOT/PBOT de la ESAP a veces
  traen la «dimensión cultural» con leyendas locales).
- **La academia regional**: tesis y revistas de las universidades del
  departamento, el Boletín Cultural y Bibliográfico, la Academia de Historia.
- **La prensa de época**, si existe (Banrepcultural, hemeroteca digital).
- Los clásicos del folclor colombiano que abren: Villa Posse, Ocampo López,
  Javier Ocampo, Tulio Bayer, Rafael Ortiz, los Cuadernos del Instituto de
  Folclor, Guillermo Abadía Morales —**sólo si hay texto consultable**, no fichas
  de catálogo—.

**Vetado como fuente:** Scribd, docslib, 1library, academia.edu, ResearchGate,
WorldCat, Google Books, Open Library, CiNii, Wikipedia como clave, blogs de
turismo, agregadores de leyendas, mitosdecolombia.com y sus espejos. Una
portada de catálogo que responde 200 no es fuente: hay que abrirla y ver si el
relato está ahí. Un 503 de Dialnet es límite de peticiones, no una caída.

## Entregable · `<tu carpeta>/busqueda-2026-09-22/BIBLIOGRAFIA.md`

1. **Lo primero que hay que saber**: la lectura crítica de los módulos (quién
   dicen que es el recopilador, qué obra citan, qué está mal).
2. **La cantera**: cada obra abierta y leída, con autor, año, edición, URL
   verificada y una línea de qué aporta al ciclo.
3. **REPARTO REAL**: una tabla por módulo con cada slug, la obra y la página de
   la que sale, y la confianza (**confirmado** = el relato está a la vista;
   **probable** = obra candidata con razón concreta; **sin rastro** = ninguna
   obra consultable lo nombra).
4. **Narradores**: los que las obras nombren, con lugar y fecha.
5. **Caídas y basura**: qué URLs del `sources.mjs` actual están muertas o
   vetadas.
6. **Decisiones**: fichas que no son de su cajón, duplicados entre ciclos o con
   otras comunidades, títulos que la fuente no da. **No las tomes: anótalas.**

Y en `<tu carpeta>/primarias/` el texto extraído de cada primario abierto, con
un `LEEME.md` que diga qué es cada archivo y de dónde sale.

## Al terminar

Responde con el recuento (confirmados / probables / sin rastro), los hallazgos
que cambian el ciclo y las decisiones que veas.
