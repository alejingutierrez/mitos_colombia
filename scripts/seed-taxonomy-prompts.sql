-- Seed prompts for taxonomy entities (SQLite)

UPDATE communities
SET image_prompt =
  'Ilustracion editorial horizontal (3:2) estilo paper quilling y paper cut de la comunidad indigena '
  || communities.name
  || ' en la region '
  || (SELECT regions.name FROM regions WHERE regions.id = communities.region_id)
  || '. Escena respetuosa con vestimenta tradicional, paisaje local y simbolos culturales. Sin texto ni logos.'
WHERE (image_prompt IS NULL OR image_prompt = '')
  AND (SELECT COUNT(*) FROM myths WHERE myths.community_id = communities.id) >= 6;

UPDATE tags
SET image_prompt =
  'Ilustracion editorial horizontal (3:2) estilo paper quilling y paper cut sobre el tema "'
  || tags.name
  || '" en la mitologia colombiana. Simbolos abstractos, naturaleza colombiana, paleta verde selva, azul rio y dorado tierra. Sin texto.'
WHERE (image_prompt IS NULL OR image_prompt = '')
  AND (SELECT COUNT(*) FROM myth_tags WHERE myth_tags.tag_id = tags.id) >= 6
  AND lower(tags.name) NOT IN (SELECT lower(name) FROM regions)
  AND lower(tags.name) <> 'ninguno';

UPDATE regions
SET image_prompt =
  'Ilustracion editorial horizontal (3:2) estilo paper quilling y paper cut de la region '
  || regions.name
  || ' de Colombia. Paisajes iconicos, rios, montanas o selva, simbolos culturales y paleta verde selva, azul rio y dorado tierra. Sin texto ni logos.'
WHERE (image_prompt IS NULL OR image_prompt = '');
