export const STYLE_REVIEW_SAMPLES = [
  {
    id: 721,
    title: "Amanecer de Bachue y Furachoque",
    slug: "amanecer-de-bachue-y-furachoque",
    region: "Andina",
    community: "Muiscas",
    imageUrl:
      "https://c5htob7za0dl3b5x.public.blob.vercel-storage.com/samples/image-craft/amanecer-de-bachue-y-furachoque-1783552979457.jpg",
  },
  {
    id: 32,
    title: "Jinete Dorado y la Noche Eterna",
    slug: "jinete-dorado-y-la-noche-eterna",
    region: "Caribe",
    community: "Wayuu",
    imageUrl:
      "https://c5htob7za0dl3b5x.public.blob.vercel-storage.com/samples/image-craft/jinete-dorado-y-la-noche-eterna-1783553102179.jpg",
  },
  {
    id: 184,
    title: "Desafio Magico en el Rio Yurupari",
    slug: "desafio-magico-en-el-rio-yurupari",
    region: "Amazonas",
    community: "Yukuna",
    imageUrl:
      "https://c5htob7za0dl3b5x.public.blob.vercel-storage.com/samples/image-craft/desafio-magico-en-el-rio-yurupari-1783553228427.jpg",
  },
  {
    id: 869,
    title: "Inirida: Princesa del Cerro Encantado",
    slug: "inirida-princesa-del-cerro-encantado",
    region: "Orinoquia",
    community: "Orinoquia",
    imageUrl:
      "https://c5htob7za0dl3b5x.public.blob.vercel-storage.com/samples/image-craft/inirida-princesa-del-cerro-encantado-1783553357266.jpg",
  },
  {
    id: 65,
    title: "Chauteh y el Rio Perseverante",
    slug: "chauteh-y-el-rio-perseverante",
    region: "Pacifico",
    community: "Nasa",
    imageUrl:
      "https://c5htob7za0dl3b5x.public.blob.vercel-storage.com/samples/image-craft/chauteh-y-el-rio-perseverante-1783553487446.jpg",
  },
];

export const STYLE_REVIEW_PRODUCTION_BATCH = {
  homeBannerIds: [1, 2, 3, 4, 5],
  regionIds: [1, 2, 3, 4, 5, 6],
  mythIds: [18, 41, 64, 87, 110, 133, 156, 179, 202],
};

export const STYLE_REVIEW_CRITERIA = [
  "Papel real fotografiado, no ilustracion plana.",
  "Composicion frontal, directa y llena de borde a borde.",
  "Volumen bajo por capas fisicas, sin render 3D ni perspectiva rara.",
  "Identidad visual especifica por region, cultura y geografia.",
  "Escena editorial adulta, tactil y hecha por humanos.",
];

export const APPROVED_STYLE_PROFILE = "studioPaperMaquette";

export const STYLE_PROFILE_OPTIONS = [
  {
    value: "editorialPaperPhoto",
    label: "Base editorial",
  },
  {
    value: "documentaryPaperArtifact",
    label: "Artefacto documental",
  },
  {
    value: "studioPaperMaquette",
    label: "Maqueta fisica de estudio",
  },
  {
    value: "cinematicPaperRelief",
    label: "Relieve dramatico",
  },
  {
    value: "culturalTextilePaper",
    label: "Papel y tejido cultural",
  },
];

function uniqueIds(items = []) {
  return Array.from(
    new Set(
      items
        .map((item) => Number.parseInt(item?.id ?? item, 10))
        .filter(Number.isFinite)
    )
  );
}

export function buildStyleApplicationScopes(currentHome = {}) {
  const mythIds = uniqueIds(currentHome.myths);
  const regionIds = uniqueIds(currentHome.regions);
  const bannerIds = uniqueIds(currentHome.banners);
  const seed = Number.isFinite(Number(currentHome.seed))
    ? Number(currentHome.seed)
    : null;

  return [
    {
      key: "home-current",
      title: "Home actual completo",
      target: "home-current",
      ids: [...mythIds, ...regionIds, ...bannerIds],
      seed,
      count: mythIds.length + regionIds.length + bannerIds.length,
      description:
        "Regenera mitos visibles, regiones del atlas y banners editoriales activos con el mismo seed que esta revision.",
    },
    {
      key: "home-current-myths",
      title: "Mitos visibles del home",
      target: "myths",
      ids: mythIds,
      count: mythIds.length,
      description: "Solo las piezas de mito que aparecen en el home segun el seed actual.",
    },
    {
      key: "home-current-regions",
      title: "Regiones del atlas",
      target: "regions",
      ids: regionIds,
      count: regionIds.length,
      description: "Solo las tarjetas regionales visibles en el bloque de territorio.",
    },
    {
      key: "home-current-banners",
      title: "Banners editoriales activos",
      target: "home",
      ids: bannerIds,
      count: bannerIds.length,
      description: "Solo los banners editoriales activos gestionados desde admin.",
    },
  ].filter((scope) => scope.count > 0);
}

export function buildStyleReviewRoundCandidates(currentHome = {}, limit = 5) {
  const safeLimit = Math.min(Math.max(Number(limit) || 5, 1), 5);
  return (currentHome.myths || []).slice(0, safeLimit).map((item) => ({
    id: Number(item.id),
    type: "myth",
    preset: "horizontal",
    title: item.title || item.name || item.slug,
    slug: item.slug,
    region: item.region || "",
    community: item.community || "",
  }));
}

export function buildRegenerationCommand({
  target,
  ids = [],
  seed = null,
  styleProfile = APPROVED_STYLE_PROFILE,
  dryRun = false,
  force = true,
}) {
  const parts = [
    "npm run images:regenerate:craft --",
    `--target ${target}`,
  ];
  const numericIds = uniqueIds(ids);

  if (target === "home-current" && Number.isFinite(Number(seed))) {
    parts.push(`--seed ${Number(seed)}`);
  }
  if (target !== "home-current" && numericIds.length) {
    parts.push(`--ids ${numericIds.join(",")}`);
  }
  if (force) {
    parts.push("--force");
  }
  parts.push(`--style-profile ${styleProfile}`);
  if (dryRun) {
    parts.push("--dry-run");
  }

  return parts.join(" ");
}
