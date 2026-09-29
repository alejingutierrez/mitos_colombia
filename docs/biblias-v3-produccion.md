# Biblias V3 · producción de las 42 comunidades

Estado al 2026-09-28. **1982 de 2002 láminas** generadas en las 42 biblias
V3 (todas las comunidades y corpus que no tenían biblia; wayúu, chamí,
huitoto, muiscas, nasa y ette ennaka tienen la suya aparte).

Método: fichas sobre papel blanco hueso y sólo paisajes y lugares a fondo
completo; una comunidad a la vez y, dentro de ella, capa por capa (tipos →
mortales → míticos → colectivos → animales → atrezo → arquitectura y
fenómenos → paisajes). Seis biblias se revisaron capa por capa con el editor;
las otras 36 se produjeron en masa el 2026-09-28 por su pedido
(`scripts/mitos/producir-biblia-v3.sh`) y quedan registradas como
«producida en masa, pendiente de revisión» en su `APROBACIONES.json`.

Cada biblia tiene su `BALANCE.json` en `content/mitos-visuales/_openai/<corpus>/biblia-v3/`
y sus hojas de contacto en `output/imagegen/_hojas/` (`node scripts/mitos/hojas-biblia-v3.mjs <corpus>`).

| comunidad | láminas | revisión |
|---|---|---|
| koguis | 95 de 96 | capa por capa, revisada |
| katios | 108 de 109 | capa por capa, revisada |
| andoque | 68 de 70 | capa por capa, revisada |
| u-wa | 76 de 76 | capa por capa, revisada |
| guahibo-sikuani | 75 de 75 | capa por capa, revisada |
| desana | 70 de 70 | capa por capa, revisada |
| amazonia-mestizo-mixto | 87 de 87 | en masa, pendiente de revisión |
| ansermas | 12 de 13 | en masa, pendiente de revisión |
| antioquia-occidente-mixto | 53 de 53 | en masa, pendiente de revisión |
| awa | 19 de 19 | en masa, pendiente de revisión |
| barasana | 62 de 62 | en masa, pendiente de revisión |
| bogota-sabana-mestizo | 57 de 57 | en masa, pendiente de revisión |
| bolivar-cartagena-mestizo | 89 de 89 | en masa, pendiente de revisión |
| boyaca-mestizo | 37 de 37 | en masa, pendiente de revisión |
| caribe-restante-mestizo | 43 de 43 | en masa, pendiente de revisión |
| choco-afro | 21 de 21 | en masa, pendiente de revisión |
| cordoba-sinu-mestizo | 79 de 79 | en masa, pendiente de revisión |
| cuycuyes | 18 de 19 | en masa, pendiente de revisión |
| eje-cafetero-mestizo | 39 de 39 | en masa, pendiente de revisión |
| embera | 19 de 19 | en masa, pendiente de revisión |
| eperara-siapidara | 20 de 21 | en masa, pendiente de revisión |
| kuibas | 19 de 19 | en masa, pendiente de revisión |
| makawanes | 26 de 26 | en masa, pendiente de revisión |
| misak-guambianos | 53 de 55 | en masa, pendiente de revisión |
| motilon-bari | 42 de 46 | en masa, pendiente de revisión |
| nukak-maku | 16 de 16 | en masa, pendiente de revisión |
| orinoquia-llanera-mestizo | 79 de 79 | en masa, pendiente de revisión |
| pacifico-sur-mestizo | 43 de 43 | en masa, pendiente de revisión |
| pananes | 43 de 43 | en masa, pendiente de revisión |
| pirsa | 14 de 15 | en masa, pendiente de revisión |
| quillacingas | 49 de 49 | en masa, pendiente de revisión |
| quimbaya | 15 de 18 | en masa, pendiente de revisión |
| santander-mestizo | 88 de 88 | en masa, pendiente de revisión |
| ticuna | 60 de 61 | en masa, pendiente de revisión |
| tolima-huila-mestizo | 46 de 46 | en masa, pendiente de revisión |
| tucano | 45 de 45 | en masa, pendiente de revisión |
| ufaina | 19 de 19 | en masa, pendiente de revisión |
| umbra | 15 de 15 | en masa, pendiente de revisión |
| varios-sin-territorio | 84 de 84 | en masa, pendiente de revisión |
| wounaan | 32 de 33 | en masa, pendiente de revisión |
| yukpa | 13 de 13 | en masa, pendiente de revisión |
| zenu | 34 de 35 | en masa, pendiente de revisión |

## Las 20 láminas que el filtro de OpenAI no deja pasar

Casi todas son figuras que el plan dibuja desnudas o se definen por el cuerpo.
Se reintentaron con composición recatada (`--pudor`) y volvieron a bloquearse.
Esperan decisión del editor: declararlas ausentes con su razón, cubrirlas con
una prenda documentada (como el tsitse misak) o resolverlas por silueta.

| comunidad | capa | entidad | vista |
|---|---|---|---|
| andoque | mortales | El especialista huitoto | canon |
| andoque | animales | Los seres del agua de Sitakara | canon |
| ansermas | tipos | Tipo base · hombre de Guacuma adulto | canon |
| cuycuyes | tipos | Tipo base · mujer de Arma adulta (capa de contacto) | canon |
| eperara-siapidara | mortales | Hesaa, la Conga | canon |
| katios | colectivos | Las mujeres de senos grandes del Bajía | canon |
| koguis | colectivos | Las mujeres inventadas por el padre malo | canon |
| misak-guambianos | mortales | Mama Manuela Caramaya | canon |
| misak-guambianos | colectivos | Guerreros pijaos | estado_transformados_en_frailejones |
| motilon-bari | tipos | Mujer adulta barí (tipo) | canon |
| motilon-bari | tipos | Niño barí (tipo) | canon |
| motilon-bari | miticos | Chibáig | canon |
| motilon-bari | miticos | Chibáig | estado_sombrero pequeño, la fase menguante |
| pirsa | tipos | Tipo base · niño de Pirsa | canon |
| quimbaya | tipos | Tipo base · hombre quimbaya adulto (capa de 1553) | canon |
| quimbaya | tipos | Tipo base · mujer quimbaya adulta (capa de 1553) | canon |
| quimbaya | tipos | Tipo base · muchacho quimbaya (capa de 1553) | canon |
| ticuna | tipos | Niño tikuna (tipo) | canon |
| wounaan | tipos | Tipo base · niño wounaan | canon |
| zenu | miticos | Manexca | canon |

## Consultas que siguen abiertas

Barasana (ACAIPI), wounaan (protocolo del WPNP), misak (Cabildo) y los raizales
del Caribe (Cátedra Raizal) se produjeron por pedido del editor sin que esas
consultas se hayan hecho. Las láminas no deben publicarse antes.
