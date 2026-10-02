import { sql } from '@vercel/postgres';

// Community info with image prompts (top 10)
const COMMUNITY_INFO = {
  "muiscas": {
    imagePrompt: "Muisca golden ceremony at Guatavita lagoon, Bochica civilizer, Andean mountains, sacred offerings, El Dorado ritual"
  },
  "nasa-paeces": {
    imagePrompt: "Nasa people in Cauca mountains, traditional clothing, resistance symbols, sacred territory protection"
  },
  "wayuu": {
    imagePrompt: "Wayuu matrilineal society in La Guajira desert, Pulowi and Juyá spirits, traditional patterns, journey between worlds"
  },
  "huitotos": {
    imagePrompt: "Huitoto ceremonial maloca, sacred tobacco and yuca, Amazon creation mythology, spiritual renewal"
  },
  "embera": {
    imagePrompt: "Emberá village on Pacific river, traditional palafitos, rainforest spirits, ceremonial gathering, artisan crafts"
  },
  "chimila": {
    imagePrompt: "Chimila people in Caribbean lowlands, Papá Grande creation myth, sacred arrows marking territory, ancestral gatherings"
  },
  "koguis": {
    imagePrompt: "Kogui mamos in Sierra Nevada, sacred mountain peaks, Mother Universal creation, cosmic balance guardianship"
  },
  "katios": {
    imagePrompt: "Katío village in Andean-Pacific transition, Caragabí creation myth, resistance warriors, sacred forest spirits"
  },
  "pananes": {
    imagePrompt: "Pananes highland community, sacred lagoons and water springs, Catholic-indigenous syncretism, mystical fog-covered landscapes"
  },
  "andoque": {
    imagePrompt: "Andoque village in Caquetá, sacred yuca cultivation, forest spirits, Amazon traditions"
  }
};

// Category info with image prompts (top 10)
const CATEGORY_INFO = {
  "transformacion": {
    imagePrompt: "Colombian mythological transformations, shamans becoming jaguars, spirit metamorphosis, fluid boundaries between human and animal"
  },
  "culturales": {
    imagePrompt: "Colombian cultural origins, naming ceremony of natural elements, community rebuilding, sacred agricultural knowledge"
  },
  "selva": {
    imagePrompt: "Amazon rainforest mythology, Araracuara sun origin, shape-shifting shamans, jungle spirits, transformational magic"
  },
  "creacion": {
    imagePrompt: "Cosmic creation scene, primordial chaos becoming order, celestial bodies emerging, indigenous Colombian cosmology"
  },
  "muerte": {
    imagePrompt: "Journey to the afterlife in Colombian mythology, spirits crossing boundaries, ancestral realm, mystical transition"
  },
  "heroicos": {
    imagePrompt: "Colombian mythological heroes, Konago the wise turtle, Jirayauma's cunning, strategic victories, protective guardians"
  },
  "naturaleza": {
    imagePrompt: "Colombian nature mythology, Chullachaqui forest guardian, primordial flood, natural transformations, sacred ecology"
  },
  "castigos": {
    imagePrompt: "Divine punishment in Colombian mythology, Yepá judging animals, moral consequences, supernatural justice, balance restoration"
  },
  "castigo": {
    imagePrompt: "Divine punishment in mystical Colombian landscape, dramatic transformation, moral lesson visualization, powerful natural forces"
  },
  "amor": {
    imagePrompt: "Romantic encounter in Colombian mystical setting, lovers from different worlds, passionate folklore, enchanted atmosphere"
  }
};

// Region info with image prompts (all)
const REGION_INFO = {
  "amazonas": {
    imagePrompt: "Colombian Amazon rainforest, sacred rivers, indigenous maloca, anaconda mythology, pristine jungle"
  },
  "andina": {
    imagePrompt: "Colombian Andes mountains, sacred lagoons, Muisca gold offerings, misty páramo, highland mythology"
  },
  "caribe": {
    imagePrompt: "Colombian Caribbean coast, Sierra Nevada sacred mountains, Wayuu culture, coastal spirits, tropical mythology"
  },
  "orinoquia": {
    imagePrompt: "Colombian Llanos plains, Orinoco rivers, savanna wildlife, seasonal floods, cultural heroes"
  },
  "pacifico": {
    imagePrompt: "Colombian Pacific rainforest, humid jungle, coastal communities, resistance mythology, Afro-indigenous fusion"
  },
  "varios": {
    imagePrompt: "Colombian diverse landscapes merging, cultural crossroads, shared mythology, universal themes"
  }
};

async function populatePrompts() {
  console.log('🎨 Populating image prompts for taxonomy...\n');

  let totalUpdated = 0;

  // Update communities
  console.log('📍 Updating communities...');
  for (const [slug, info] of Object.entries(COMMUNITY_INFO)) {
    try {
      const result = await sql`
        UPDATE communities
        SET image_prompt = ${info.imagePrompt}
        WHERE slug = ${slug}
        RETURNING id, name, slug
      `;

      if (result.rows && result.rows.length > 0) {
        console.log(`  ✓ ${result.rows[0].name} (${slug})`);
        totalUpdated++;
      } else {
        console.log(`  ✗ Not found: ${slug}`);
      }
    } catch (error) {
      console.error(`  ✗ Error updating ${slug}:`, error.message);
    }
  }

  // Update categories (tags)
  console.log('\n🏷️  Updating categories...');
  for (const [slug, info] of Object.entries(CATEGORY_INFO)) {
    try {
      const result = await sql`
        UPDATE tags
        SET image_prompt = ${info.imagePrompt}
        WHERE slug = ${slug}
        RETURNING id, name, slug
      `;

      if (result.rows && result.rows.length > 0) {
        console.log(`  ✓ ${result.rows[0].name} (${slug})`);
        totalUpdated++;
      } else {
        console.log(`  ✗ Not found: ${slug}`);
      }
    } catch (error) {
      console.error(`  ✗ Error updating ${slug}:`, error.message);
    }
  }

  // Update regions
  console.log('\n🌎 Updating regions...');
  for (const [slug, info] of Object.entries(REGION_INFO)) {
    try {
      const result = await sql`
        UPDATE regions
        SET image_prompt = ${info.imagePrompt}
        WHERE slug = ${slug}
        RETURNING id, name, slug
      `;

      if (result.rows && result.rows.length > 0) {
        console.log(`  ✓ ${result.rows[0].name} (${slug})`);
        totalUpdated++;
      } else {
        console.log(`  ✗ Not found: ${slug}`);
      }
    } catch (error) {
      console.error(`  ✗ Error updating ${slug}:`, error.message);
    }
  }

  console.log(`\n✅ Total updated: ${totalUpdated}`);

  // Show summary
  const summary = await sql`
    SELECT
      (SELECT COUNT(*) FROM communities WHERE image_prompt IS NOT NULL AND image_url IS NULL) as communities_pending,
      (SELECT COUNT(*) FROM tags WHERE image_prompt IS NOT NULL AND image_url IS NULL) as categories_pending,
      (SELECT COUNT(*) FROM regions WHERE image_prompt IS NOT NULL AND image_url IS NULL) as regions_pending,
      (SELECT COUNT(*) FROM myths WHERE image_prompt IS NOT NULL AND image_url IS NULL) as myths_pending
  `;

  console.log('\n📊 Images pending:');
  console.log(`  Communities: ${summary.rows[0].communities_pending}`);
  console.log(`  Categories: ${summary.rows[0].categories_pending}`);
  console.log(`  Regions: ${summary.rows[0].regions_pending}`);
  console.log(`  Myths: ${summary.rows[0].myths_pending}`);
  console.log(`  TOTAL: ${summary.rows[0].communities_pending + summary.rows[0].categories_pending + summary.rows[0].regions_pending + summary.rows[0].myths_pending}`);
}

populatePrompts()
  .then(() => {
    console.log('\n✨ Done!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n❌ Error:', error);
    process.exit(1);
  });
