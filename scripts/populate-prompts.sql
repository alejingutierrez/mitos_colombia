-- Populate image prompts for communities (top 10)
UPDATE communities SET image_prompt = 'Muisca golden ceremony at Guatavita lagoon, Bochica civilizer, Andean mountains, sacred offerings, El Dorado ritual' WHERE slug = 'muiscas';
UPDATE communities SET image_prompt = 'Nasa people in Cauca mountains, traditional clothing, resistance symbols, sacred territory protection' WHERE slug = 'nasa-paeces';
UPDATE communities SET image_prompt = 'Wayuu matrilineal society in La Guajira desert, Pulowi and Juyá spirits, traditional patterns, journey between worlds' WHERE slug = 'wayuu';
UPDATE communities SET image_prompt = 'Huitoto ceremonial maloca, sacred tobacco and yuca, Amazon creation mythology, spiritual renewal' WHERE slug = 'huitotos';
UPDATE communities SET image_prompt = 'Emberá village on Pacific river, traditional palafitos, rainforest spirits, ceremonial gathering, artisan crafts' WHERE slug = 'embera';
UPDATE communities SET image_prompt = 'Chimila people in Caribbean lowlands, Papá Grande creation myth, sacred arrows marking territory, ancestral gatherings' WHERE slug = 'chimila';
UPDATE communities SET image_prompt = 'Kogui mamos in Sierra Nevada, sacred mountain peaks, Mother Universal creation, cosmic balance guardianship' WHERE slug = 'koguis';
UPDATE communities SET image_prompt = 'Katío village in Andean-Pacific transition, Caragabí creation myth, resistance warriors, sacred forest spirits' WHERE slug = 'katios';
UPDATE communities SET image_prompt = 'Pananes highland community, sacred lagoons and water springs, Catholic-indigenous syncretism, mystical fog-covered landscapes' WHERE slug = 'pananes';
UPDATE communities SET image_prompt = 'Andoque village in Caquetá, sacred yuca cultivation, forest spirits, Amazon traditions' WHERE slug = 'andoque';

-- Populate image prompts for categories (top 10)
UPDATE tags SET image_prompt = 'Colombian mythological transformations, shamans becoming jaguars, spirit metamorphosis, fluid boundaries between human and animal' WHERE slug = 'transformacion';
UPDATE tags SET image_prompt = 'Colombian cultural origins, naming ceremony of natural elements, community rebuilding, sacred agricultural knowledge' WHERE slug = 'culturales';
UPDATE tags SET image_prompt = 'Amazon rainforest mythology, Araracuara sun origin, shape-shifting shamans, jungle spirits, transformational magic' WHERE slug = 'selva';
UPDATE tags SET image_prompt = 'Cosmic creation scene, primordial chaos becoming order, celestial bodies emerging, indigenous Colombian cosmology' WHERE slug = 'creacion';
UPDATE tags SET image_prompt = 'Journey to the afterlife in Colombian mythology, spirits crossing boundaries, ancestral realm, mystical transition' WHERE slug = 'muerte';
UPDATE tags SET image_prompt = 'Colombian mythological heroes, Konago the wise turtle, Jirayauma cunning, strategic victories, protective guardians' WHERE slug = 'heroicos';
UPDATE tags SET image_prompt = 'Colombian nature mythology, Chullachaqui forest guardian, primordial flood, natural transformations, sacred ecology' WHERE slug = 'naturaleza';
UPDATE tags SET image_prompt = 'Divine punishment in Colombian mythology, Yepá judging animals, moral consequences, supernatural justice, balance restoration' WHERE slug = 'castigos';
UPDATE tags SET image_prompt = 'Divine punishment in mystical Colombian landscape, dramatic transformation, moral lesson visualization, powerful natural forces' WHERE slug = 'castigo';
UPDATE tags SET image_prompt = 'Romantic encounter in Colombian mystical setting, lovers from different worlds, passionate folklore, enchanted atmosphere' WHERE slug = 'amor';

-- Populate image prompts for regions (all)
UPDATE regions SET image_prompt = 'Colombian Amazon rainforest, sacred rivers, indigenous maloca, anaconda mythology, pristine jungle' WHERE slug = 'amazonas';
UPDATE regions SET image_prompt = 'Colombian Andes mountains, sacred lagoons, Muisca gold offerings, misty páramo, highland mythology' WHERE slug = 'andina';
UPDATE regions SET image_prompt = 'Colombian Caribbean coast, Sierra Nevada sacred mountains, Wayuu culture, coastal spirits, tropical mythology' WHERE slug = 'caribe';
UPDATE regions SET image_prompt = 'Colombian Llanos plains, Orinoco rivers, savanna wildlife, seasonal floods, cultural heroes' WHERE slug = 'orinoquia';
UPDATE regions SET image_prompt = 'Colombian Pacific rainforest, humid jungle, coastal communities, resistance mythology, Afro-indigenous fusion' WHERE slug = 'pacifico';
UPDATE regions SET image_prompt = 'Colombian diverse landscapes merging, cultural crossroads, shared mythology, universal themes' WHERE slug = 'varios';

-- Show summary
SELECT
  (SELECT COUNT(*) FROM communities WHERE image_prompt IS NOT NULL AND image_url IS NULL) as communities_pending,
  (SELECT COUNT(*) FROM tags WHERE image_prompt IS NOT NULL AND image_url IS NULL) as categories_pending,
  (SELECT COUNT(*) FROM regions WHERE image_prompt IS NOT NULL AND image_url IS NULL) as regions_pending,
  (SELECT COUNT(*) FROM myths WHERE image_prompt IS NOT NULL AND image_url IS NULL) as myths_pending;
