import { createHash, randomUUID } from "node:crypto";
import { execFile } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import { promisify } from "node:util";

import { list } from "@vercel/blob";
import { NextResponse } from "next/server";

import { getSqlClient, isPostgres } from "../../../../lib/db.js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 300;

const execFileAsync = promisify(execFile);
const LOCAL_ONLY =
  process.env.NODE_ENV !== "production" ||
  process.env.IMAGE_STYLE_REVIEW_LOCAL === "true";
const AUDIT_DIR = path.join(process.cwd(), "artifacts", "myth-image-audit");
const DECISIONS_PATH = path.join(AUDIT_DIR, "decisions.json");
const DECISIONS_BACKUP_PATH = path.join(AUDIT_DIR, "decisions.backup.json");
const CACHE_TTL_MS = 5 * 60 * 1000;
const VALID_DECISIONS = new Set(["keep", "repeat", "discard"]);
const IMAGE_EXTENSION = /\.(avif|jpe?g|png|webp)$/i;

const PLANNED_MYTHS = [
  ["aponto-y-el-arbol-manurhacha", "Aponto y el árbol Manurhacha", "Caribe > Cesar > Yukpa"],
  ["como-aparecio-la-muerte-en-el-choco", "Cómo apareció la muerte en el Chocó", "Pacífico > Chocó > Afrocolombianos"],
  ["el-calvito-yagua", "Calvito y el largo camino de regreso", "Amazonía > Amazonas > Yaguas"],
  ["el-huerfano-yagua", "El Huérfano y el compañero de hojas", "Amazonía > Amazonas > Yaguas"],
  ["karipu-lakena-y-la-primera-noche", "Los Karipú Lakena y la primera noche", "Amazonía > Amazonas > Yucuna"],
  ["la-bruja-silbona", "La Bruja Silbona", "Andina > Santander > Mestizo"],
  ["la-llorona-del-molino", "La Llorona del Molino", "Andina > Santander > Mestizo"],
  ["la-luz-del-limonal", "La Luz del Limonal", "Andina > Santander > Mestizo"],
  ["los-gemelos-yirhwach-y-las-constelaciones", "Los gemelos Yirhwach y las constelaciones", "Caribe > Cesar > Yukpa"],
  ["los-mellizos-de-avispa-yagua", "Mocayu y los mellizos de Avispa", "Amazonía > Amazonas > Yaguas"],
  ["luna-y-sol-yagua", "Luna, su hermana y el nacimiento del Sol", "Amazonía > Amazonas > Yaguas"],
  ["me-el-dueno-del-maiz", "Mé, el dueño del maíz", "Caribe > Cesar > Yukpa"],
  ["tortuga-y-jaguar-yagua", "Tortuga contra los jaguares", "Amazonía > Amazonas > Yaguas"],
].map(([slug, title, categoryPath]) => ({ slug, title, categoryPath }));

let inventoryCache = null;
let decisionWriteQueue = Promise.resolve();

function rowsOf(result) {
  return result?.rows || result || [];
}

function checkAuth(request) {
  const authHeader = request.headers.get("authorization");
  if (!authHeader?.startsWith("Basic ")) return false;
  const credentials = Buffer.from(authHeader.slice(6), "base64").toString("utf8");
  const separator = credentials.indexOf(":");
  if (separator < 0) return false;
  const username = credentials.slice(0, separator);
  const password = credentials.slice(separator + 1);
  return (
    username === (process.env.ADMIN_USERNAME || "admin") &&
    password === (process.env.ADMIN_PASSWORD || "admin")
  );
}

function disabledResponse() {
  return NextResponse.json(
    { error: "La auditoría visual completa solo está disponible en local." },
    { status: 404 },
  );
}

function stableId(value) {
  return createHash("sha256").update(String(value)).digest("hex").slice(0, 18);
}

function cleanUrl(value) {
  const url = String(value || "").trim();
  return /^https?:\/\//i.test(url) ? url : null;
}

function splitTaxonomy(categoryPath = "") {
  const parts = String(categoryPath)
    .split(">")
    .map((part) => part.trim())
    .filter(Boolean);
  return {
    region: parts[0] || "Sin región",
    community: parts.at(-1) || "Sin comunidad",
  };
}

function makeMyth({
  id = null,
  slug,
  title,
  categoryPath = "",
  region = "",
  community = "",
  published = false,
}) {
  const taxonomy = splitTaxonomy(categoryPath);
  return {
    id,
    slug,
    title: title || slug,
    categoryPath,
    region: region || taxonomy.region,
    community: community || taxonomy.community,
    published,
    candidatesByKey: new Map(),
  };
}

function candidateKey({ url, localPath, placeholderKey }) {
  return url || localPath || placeholderKey;
}

function addCandidate(myth, candidate) {
  if (!myth) return;
  const key = candidateKey(candidate);
  if (!key) return;
  const current = myth.candidatesByKey.get(key);
  if (current) {
    for (const source of candidate.sources || []) current.sources.add(source);
    for (const role of candidate.currentRoles || []) current.currentRoles.add(role);
    if (candidate.provenanceStatus) current.provenanceStatus = candidate.provenanceStatus;
    if (candidate.model) current.model = candidate.model;
    if (candidate.quality) current.quality = candidate.quality;
    if (candidate.uploadedAt && !current.uploadedAt) current.uploadedAt = candidate.uploadedAt;
    if (candidate.localPath && !current.localPath) current.localPath = candidate.localPath;
    return;
  }
  myth.candidatesByKey.set(key, {
    id: stableId(key),
    url: candidate.url || null,
    localPath: candidate.localPath || null,
    orientation: candidate.orientation || "unknown",
    placeholder: Boolean(candidate.placeholder),
    placeholderKey: candidate.placeholderKey || null,
    uploadedAt: candidate.uploadedAt || null,
    size: Number(candidate.size || 0) || null,
    pathname: candidate.pathname || null,
    model: candidate.model || null,
    quality: candidate.quality || null,
    attempt: candidate.attempt || null,
    provenanceStatus: candidate.provenanceStatus || null,
    sources: new Set(candidate.sources || []),
    currentRoles: new Set(candidate.currentRoles || []),
  });
}

function inferOrientation(value) {
  const normalized = String(value || "").toLowerCase();
  if (
    normalized.includes("/vertical/") ||
    normalized.includes("vertical/myth") ||
    /(?:^|[-_])vertical(?:[-_.]|$)/.test(normalized) ||
    /(?:^|[-_])v(?:[-_.]|$)/.test(path.basename(normalized))
  ) {
    return "vertical";
  }
  if (
    normalized.includes("/mitos/") ||
    /(?:^|[-_])horizontal(?:[-_.]|$)/.test(normalized) ||
    /(?:^|[-_])h(?:[-_.]|$)/.test(path.basename(normalized))
  ) {
    return "horizontal";
  }
  return "unknown";
}

function isCompositeAuditFile(filePath) {
  const basename = path.basename(filePath).toLowerCase();
  return (
    basename.startsWith("contact-") ||
    basename.includes("contact-sheet") ||
    /(?:^|-)pairs-\d+\./.test(basename) ||
    /(?:^|-)row\d+\./.test(basename) ||
    /^candidates?\./.test(basename)
  );
}

function matchSlug(value, sortedSlugs) {
  const basename = path
    .basename(String(value || ""))
    .replace(IMAGE_EXTENSION, "")
    .toLowerCase();
  return (
    sortedSlugs.find(
      (slug) => basename === slug || basename.startsWith(`${slug}-`),
    ) || null
  );
}

async function loadDatabaseInventory() {
  if (!isPostgres()) {
    throw new Error("Esta auditoría necesita POSTGRES_URL para leer el inventario real.");
  }
  const db = getSqlClient();
  const [mythsResult, verticalResult, editorialResult] = await Promise.all([
    db`
      SELECT m.id, m.slug, m.title, m.category_path, m.image_url,
             COALESCE(r.name, '') AS region,
             COALESCE(c.name, '') AS community
      FROM myths m
      LEFT JOIN regions r ON r.id = m.region_id
      LEFT JOIN communities c ON c.id = m.community_id
      ORDER BY m.slug
    `,
    db`
      SELECT v.id, v.entity_id, v.entity_slug, v.image_url,
             v.created_at, v.updated_at
      FROM vertical_images v
      WHERE v.entity_type = 'myth'
      ORDER BY v.entity_id, v.id
    `,
    db`
      SELECT e.id, e.source_myth_id, e.slug, e.image_url, e.updated_at
      FROM editorial_myths e
      ORDER BY e.source_myth_id, e.id
    `,
  ]);
  return {
    myths: rowsOf(mythsResult),
    vertical: rowsOf(verticalResult),
    editorial: rowsOf(editorialResult),
  };
}

async function listAllBlobs(prefix) {
  if (!process.env.BLOB_READ_WRITE_TOKEN) return [];
  const blobs = [];
  let cursor;
  do {
    const result = await list({
      prefix,
      limit: 1000,
      cursor,
      token: process.env.BLOB_READ_WRITE_TOKEN,
    });
    blobs.push(...result.blobs);
    cursor = result.hasMore ? result.cursor : undefined;
  } while (cursor);
  return blobs;
}

async function getWorktreeRoots() {
  try {
    const { stdout } = await execFileAsync("git", ["worktree", "list", "--porcelain"], {
      cwd: process.cwd(),
      maxBuffer: 2 * 1024 * 1024,
    });
    return stdout
      .split("\n")
      .filter((line) => line.startsWith("worktree "))
      .map((line) => line.slice("worktree ".length).trim())
      .filter(Boolean);
  } catch {
    return [process.cwd()];
  }
}

async function walkFiles(root, predicate, files = []) {
  let entries;
  try {
    entries = await fs.readdir(root, { withFileTypes: true });
  } catch (error) {
    if (error.code === "ENOENT") return files;
    throw error;
  }
  for (const entry of entries) {
    const fullPath = path.join(root, entry.name);
    if (entry.isDirectory()) await walkFiles(fullPath, predicate, files);
    else if (predicate(fullPath, entry.name)) files.push(fullPath);
  }
  return files;
}

async function localCandidateRoots(worktree) {
  const roots = [
    path.join(worktree, "artifacts", "generated-images"),
    path.join(worktree, "output", "imagegen"),
  ];
  try {
    const artifactEntries = await fs.readdir(path.join(worktree, "artifacts"), {
      withFileTypes: true,
    });
    for (const entry of artifactEntries) {
      if (
        entry.isDirectory() &&
        /(image-candidates|image-audit)$/i.test(entry.name)
      ) {
        roots.push(path.join(worktree, "artifacts", entry.name));
      }
    }
  } catch {
    // Este worktree no tiene artefactos locales.
  }
  return roots;
}

function localAssetUrl(localPath) {
  return `/api/admin/myth-image-audit?asset=${encodeURIComponent(
    Buffer.from(localPath).toString("base64url"),
  )}`;
}

async function collectLocalAssets(mythsBySlug, sortedSlugs) {
  const worktrees = await getWorktreeRoots();
  const seenFiles = new Set();
  const manifestFiles = [];
  const imageFiles = [];

  for (const worktree of worktrees) {
    for (const root of await localCandidateRoots(worktree)) {
      const files = await walkFiles(
        root,
        (_fullPath, name) =>
          name === "provenance-manifest.json" || IMAGE_EXTENSION.test(name),
      );
      for (const file of files) {
        if (seenFiles.has(file)) continue;
        seenFiles.add(file);
        if (path.basename(file) === "provenance-manifest.json") manifestFiles.push(file);
        else if (!isCompositeAuditFile(file)) {
          imageFiles.push(file);
        }
      }
    }
  }

  const referencedLocalPaths = new Set();
  for (const manifestPath of manifestFiles) {
    try {
      const manifest = JSON.parse(await fs.readFile(manifestPath, "utf8"));
      const worktree = worktrees.find((root) => manifestPath.startsWith(`${root}${path.sep}`));
      for (const [itemKey, item] of Object.entries(manifest.items || {})) {
        const separator = itemKey.lastIndexOf(":");
        const slug = item.slug || (separator > 0 ? itemKey.slice(0, separator) : null);
        const myth = mythsBySlug.get(slug);
        if (!myth) continue;
        const orientation =
          item.orientation || (separator > 0 ? itemKey.slice(separator + 1) : "unknown");
        const rawLocalPath = item.localPath
          ? path.resolve(worktree || process.cwd(), item.localPath)
          : null;
        let usableLocalPath = null;
        if (rawLocalPath) {
          try {
            await fs.access(rawLocalPath);
            usableLocalPath = rawLocalPath;
            referencedLocalPaths.add(rawLocalPath);
          } catch {
            // El manifiesto puede conservar una ruta de otro equipo o sesión.
          }
        }
        const remoteUrl = cleanUrl(item.url);
        if (!remoteUrl && !usableLocalPath) continue;
        addCandidate(myth, {
          url: remoteUrl || localAssetUrl(usableLocalPath),
          localPath: usableLocalPath,
          orientation,
          pathname: item.localPath || path.basename(manifestPath),
          uploadedAt: item.generatedAt || null,
          model: item.model || manifest.model || null,
          quality: item.quality || manifest.quality || null,
          attempt: item.attempt || null,
          provenanceStatus: item.visualQa || null,
          sources: ["local-manifest"],
        });
      }
    } catch {
      // Un manifiesto roto no debe ocultar el resto del inventario.
    }
  }

  const unassigned = [];
  for (const localPath of imageFiles) {
    if (referencedLocalPaths.has(localPath)) continue;
    const slug = matchSlug(localPath, sortedSlugs);
    const candidate = {
      url: localAssetUrl(localPath),
      localPath,
      orientation: inferOrientation(localPath),
      pathname: path.relative(process.cwd(), localPath),
      sources: ["local-file"],
    };
    if (slug) addCandidate(mythsBySlug.get(slug), candidate);
    else {
      unassigned.push({
        id: stableId(localPath),
        imageUrl: candidate.url,
        pathname: candidate.pathname,
        orientation: candidate.orientation,
      });
    }
  }
  return { worktrees: worktrees.length, unassigned };
}

function serializeDecisions(decisions) {
  return `${JSON.stringify(
    { schemaVersion: 1, updatedAt: new Date().toISOString(), decisions },
    null,
    2,
  )}\n`;
}

async function writeDecisionFile(filePath, contents) {
  const tempPath = `${filePath}.${process.pid}-${randomUUID()}.tmp`;
  try {
    await fs.writeFile(tempPath, contents, {
      encoding: "utf8",
      mode: 0o600,
    });
    await fs.rename(tempPath, filePath);
    await fs.chmod(filePath, 0o600);
  } finally {
    await fs.unlink(tempPath).catch(() => {});
  }
}

async function readDecisionFile(filePath) {
  try {
    const parsed = JSON.parse(await fs.readFile(filePath, "utf8"));
    if (
      !parsed?.decisions ||
      typeof parsed.decisions !== "object" ||
      Array.isArray(parsed.decisions)
    ) {
      throw new Error("El archivo no contiene un mapa de decisiones válido.");
    }
    return parsed.decisions;
  } catch (error) {
    if (error.code !== "ENOENT") {
      console.error(`[myth-image-audit] ${path.basename(filePath)}:`, error);
    }
    return null;
  }
}

async function readDecisions() {
  const primary = await readDecisionFile(DECISIONS_PATH);
  if (primary) {
    await fs.chmod(DECISIONS_PATH, 0o600).catch(() => {});
    const backup = await readDecisionFile(DECISIONS_BACKUP_PATH);
    if (!backup) {
      await fs.mkdir(AUDIT_DIR, { recursive: true });
      await writeDecisionFile(
        DECISIONS_BACKUP_PATH,
        serializeDecisions(primary),
      );
    }
    return primary;
  }

  const backup = await readDecisionFile(DECISIONS_BACKUP_PATH);
  if (backup) {
    await fs.mkdir(AUDIT_DIR, { recursive: true });
    await writeDecisionFile(DECISIONS_PATH, serializeDecisions(backup));
    return backup;
  }

  return {};
}

async function writeDecision({ slug, candidateId, decision }) {
  decisionWriteQueue = decisionWriteQueue.catch(() => {}).then(async () => {
    const decisions = await readDecisions();
    const key = `${slug}:${candidateId}`;
    if (decision === "keep") {
      const existingOwners = Object.values(decisions).filter(
        (item) =>
          item.candidateId === candidateId &&
          item.slug !== slug &&
          item.decision === "keep",
      );
      if (existingOwners.length) {
        const error = new Error(
          `Este archivo ya pertenece a ${existingOwners.map((item) => item.slug).join(", ")}. Libera esa selección antes de conservarlo aquí.`,
        );
        error.statusCode = 409;
        throw error;
      }
    }
    await fs.mkdir(AUDIT_DIR, { recursive: true });
    await writeDecisionFile(
      DECISIONS_BACKUP_PATH,
      serializeDecisions(decisions),
    );
    if (decision) {
      decisions[key] = {
        slug,
        candidateId,
        decision,
        updatedAt: new Date().toISOString(),
      };
    } else {
      delete decisions[key];
    }
    await writeDecisionFile(
      DECISIONS_PATH,
      serializeDecisions(decisions),
    );
  });
  await decisionWriteQueue;
}

async function buildInventory() {
  const database = await loadDatabaseInventory();
  const mythsBySlug = new Map();
  const mythsById = new Map();

  for (const row of database.myths) {
    const myth = makeMyth({
      id: row.id,
      slug: row.slug,
      title: row.title,
      categoryPath: row.category_path,
      region: row.region,
      community: row.community,
      published: true,
    });
    mythsBySlug.set(myth.slug, myth);
    mythsById.set(String(myth.id), myth);
  }
  for (const planned of PLANNED_MYTHS) {
    if (!mythsBySlug.has(planned.slug)) {
      mythsBySlug.set(
        planned.slug,
        makeMyth({ ...planned, published: false }),
      );
    }
  }

  const currentAssignments = new Map();
  const registerCurrent = (url, slug) => {
    if (!url) return;
    if (!currentAssignments.has(url)) currentAssignments.set(url, new Set());
    currentAssignments.get(url).add(slug);
  };

  for (const row of database.myths) {
    const myth = mythsBySlug.get(row.slug);
    const url = cleanUrl(row.image_url);
    registerCurrent(url, row.slug);
    if (url) {
      addCandidate(myth, {
        url,
        orientation: "horizontal",
        sources: ["database-current"],
        currentRoles: ["Portada actual"],
      });
    }
  }
  for (const row of database.vertical) {
    const myth = mythsById.get(String(row.entity_id)) || mythsBySlug.get(row.entity_slug);
    const url = cleanUrl(row.image_url);
    if (!myth || !url) continue;
    registerCurrent(url, myth.slug);
    addCandidate(myth, {
      url,
      orientation: "vertical",
      uploadedAt: row.updated_at || row.created_at,
      sources: ["database-current"],
      currentRoles: ["Vertical actual"],
    });
  }
  for (const row of database.editorial) {
    const myth = mythsById.get(String(row.source_myth_id)) || mythsBySlug.get(row.slug);
    const url = cleanUrl(row.image_url);
    if (!myth || !url) continue;
    addCandidate(myth, {
      url,
      orientation: "horizontal",
      uploadedAt: row.updated_at,
      sources: ["editorial-database"],
      currentRoles: ["Portada editorial"],
    });
  }

  const sortedSlugs = [...mythsBySlug.keys()].sort((a, b) => b.length - a.length);
  const [horizontalBlobs, verticalBlobs] = await Promise.all([
    listAllBlobs("mitos/"),
    listAllBlobs("vertical/myth/"),
  ]);
  let linkedBlobAssets = 0;
  for (const blob of [...horizontalBlobs, ...verticalBlobs]) {
    const slug = matchSlug(blob.pathname, sortedSlugs);
    if (!slug) continue;
    linkedBlobAssets += 1;
    addCandidate(mythsBySlug.get(slug), {
      url: blob.url,
      orientation: blob.pathname.startsWith("vertical/") ? "vertical" : "horizontal",
      pathname: blob.pathname,
      uploadedAt: blob.uploadedAt,
      size: blob.size,
      sources: ["blob-history"],
    });
  }

  const local = await collectLocalAssets(mythsBySlug, sortedSlugs);
  const affectedByReuse = new Set();
  for (const slugs of currentAssignments.values()) {
    if (slugs.size > 1) for (const slug of slugs) affectedByReuse.add(slug);
  }

  const myths = [...mythsBySlug.values()]
    .map((myth) => {
      const realOrientations = new Set(
        [...myth.candidatesByKey.values()]
          .filter((candidate) => !candidate.placeholder)
          .map((candidate) => candidate.orientation),
      );
      for (const orientation of ["horizontal", "vertical"]) {
        if (!realOrientations.has(orientation)) {
          addCandidate(myth, {
            placeholder: true,
            placeholderKey: `${myth.slug}:missing:${orientation}`,
            orientation,
            sources: ["missing-slot"],
          });
        }
      }
      const candidates = [...myth.candidatesByKey.values()]
        .map((candidate) => {
          const assignments = candidate.url
            ? [...(currentAssignments.get(candidate.url) || [])]
            : [];
          return {
            ...candidate,
            imageUrl: candidate.url,
            sources: [...candidate.sources].sort(),
            currentRoles: [...candidate.currentRoles],
            reusedByCount: assignments.length,
            reusedBySlugs: assignments,
          };
        })
        .sort((a, b) => {
          if (a.placeholder !== b.placeholder) return a.placeholder ? 1 : -1;
          if (Boolean(a.currentRoles.length) !== Boolean(b.currentRoles.length)) {
            return a.currentRoles.length ? -1 : 1;
          }
          if (a.orientation !== b.orientation) return a.orientation.localeCompare(b.orientation);
          return new Date(b.uploadedAt || 0) - new Date(a.uploadedAt || 0);
        });
      return {
        id: myth.id,
        slug: myth.slug,
        title: myth.title,
        categoryPath: myth.categoryPath,
        region: myth.region,
        community: myth.community,
        published: myth.published,
        sharedCurrent: affectedByReuse.has(myth.slug),
        candidates,
      };
    })
    .sort((a, b) => a.title.localeCompare(b.title, "es"));

  const uniqueProduced = new Set();
  let candidateAssignments = 0;
  let mythsWithThreeOrMore = 0;
  let emptyMyths = 0;
  for (const myth of myths) {
    const real = myth.candidates.filter((candidate) => !candidate.placeholder);
    candidateAssignments += real.length;
    if (real.length >= 3) mythsWithThreeOrMore += 1;
    if (!real.length) emptyMyths += 1;
    for (const candidate of real) {
      uniqueProduced.add(candidate.url || candidate.localPath || candidate.id);
    }
  }

  return {
    generatedAt: new Date().toISOString(),
    myths,
    unassigned: local.unassigned,
    baseSummary: {
      totalMyths: myths.length,
      publishedMyths: myths.filter((myth) => myth.published).length,
      plannedMyths: myths.filter((myth) => !myth.published).length,
      currentImageAssignments: [...currentAssignments.values()].reduce(
        (total, slugs) => total + slugs.size,
        0,
      ),
      currentDistinctImages: currentAssignments.size,
      mythsWithSharedCurrent: affectedByReuse.size,
      producedUniqueImages: uniqueProduced.size,
      candidateAssignments,
      mythsWithThreeOrMore,
      emptyMyths,
      blobAssetsScanned: horizontalBlobs.length + verticalBlobs.length,
      linkedBlobAssets,
      unassignedLocalAssets: local.unassigned.length,
      worktreesScanned: local.worktrees,
    },
  };
}

function applyDecisions(inventory, decisions) {
  const appearancesByAsset = new Map();
  const keepOwnersByAsset = new Map();

  for (const myth of inventory.myths) {
    for (const candidate of myth.candidates) {
      if (candidate.placeholder) continue;
      if (!appearancesByAsset.has(candidate.id)) appearancesByAsset.set(candidate.id, []);
      appearancesByAsset.get(candidate.id).push({ slug: myth.slug, title: myth.title });
      const decision = decisions[`${myth.slug}:${candidate.id}`]?.decision || null;
      if (decision === "keep") {
        if (!keepOwnersByAsset.has(candidate.id)) keepOwnersByAsset.set(candidate.id, []);
        keepOwnersByAsset.get(candidate.id).push({ slug: myth.slug, title: myth.title });
      }
    }
  }

  const myths = inventory.myths.map((myth) => {
    const candidates = myth.candidates.map((candidate) => {
      const decision = decisions[`${myth.slug}:${candidate.id}`]?.decision || null;
      const appearances = candidate.placeholder
        ? [{ slug: myth.slug, title: myth.title }]
        : appearancesByAsset.get(candidate.id) || [];
      const keepOwners = candidate.placeholder
        ? []
        : keepOwnersByAsset.get(candidate.id) || [];
      const ownedByThisMyth = keepOwners.some((owner) => owner.slug === myth.slug);
      return {
        ...candidate,
        decision,
        sharedAcrossMyths: appearances.length > 1,
        sharedAcrossMythCount: appearances.length,
        sharedAcrossSlugs: appearances.map((item) => item.slug),
        keepOwners,
        ownershipConflict: keepOwners.length > 1,
        ownedByThisMyth,
        ownedByOtherMyth: keepOwners.length > 0 && !ownedByThisMyth,
      };
    });
    const validSelected = candidates.filter(
      (candidate) =>
        candidate.decision === "repeat" ||
        (candidate.decision === "keep" && !candidate.ownershipConflict),
    );
    const ownershipConflicts = candidates.filter(
      (candidate) => candidate.decision === "keep" && candidate.ownershipConflict,
    ).length;
    const selectedOrientations = new Set(
      validSelected.map((candidate) => candidate.orientation),
    );
    const reviewedCandidates = candidates.filter((candidate) => candidate.decision).length;
    return {
      ...myth,
      hasSharedCandidates: candidates.some((candidate) => candidate.sharedAcrossMyths),
      candidates,
      selection: {
        kept: candidates.filter((candidate) => candidate.decision === "keep").length,
        validKept: candidates.filter(
          (candidate) =>
            candidate.decision === "keep" && !candidate.ownershipConflict,
        ).length,
        repeat: candidates.filter((candidate) => candidate.decision === "repeat").length,
        discarded: candidates.filter((candidate) => candidate.decision === "discard").length,
        validSelected: validSelected.length,
        ownershipConflicts,
        reviewed: reviewedCandidates,
        total: candidates.length,
        ready:
          ownershipConflicts === 0 &&
          validSelected.length >= 2 &&
          selectedOrientations.has("horizontal") &&
          selectedOrientations.has("vertical"),
        complete: reviewedCandidates === candidates.length,
      },
    };
  });
  const conflictingAssets = [...keepOwnersByAsset.values()].filter(
    (owners) => owners.length > 1,
  ).length;
  return {
    ...inventory,
    myths,
    summary: {
      ...inventory.baseSummary,
      currentDuplicateAssignments:
        inventory.baseSummary.currentImageAssignments -
        inventory.baseSummary.currentDistinctImages,
      sharedCandidateAssets: [...appearancesByAsset.values()].filter(
        (appearances) => appearances.length > 1,
      ).length,
      conflictingAssets,
      mythsWithOwnershipConflicts: myths.filter(
        (myth) => myth.selection.ownershipConflicts > 0,
      ).length,
      uniquelyOwnedAssets: [...keepOwnersByAsset.values()].filter(
        (owners) => owners.length === 1,
      ).length,
      reviewedMyths: myths.filter((myth) => myth.selection.complete).length,
      readyMyths: myths.filter((myth) => myth.selection.ready).length,
      decisions: Object.keys(decisions).length,
    },
  };
}

async function getInventory({ refresh = false } = {}) {
  const now = Date.now();
  if (
    refresh ||
    !inventoryCache ||
    inventoryCache.expiresAt < now
  ) {
    inventoryCache = {
      data: await buildInventory(),
      expiresAt: now + CACHE_TTL_MS,
    };
  }
  return applyDecisions(inventoryCache.data, await readDecisions());
}

async function serveLocalAsset(encodedPath) {
  let decoded;
  try {
    decoded = Buffer.from(String(encodedPath), "base64url").toString("utf8");
  } catch {
    return NextResponse.json({ error: "Asset inválido" }, { status: 400 });
  }
  const fullPath = path.resolve(decoded);
  const worktrees = await getWorktreeRoots();
  const isInsideWorktree = worktrees.some((root) =>
    fullPath.startsWith(`${path.resolve(root)}${path.sep}`),
  );
  const isCandidatePath =
    fullPath.includes(`${path.sep}artifacts${path.sep}`) ||
    fullPath.includes(`${path.sep}output${path.sep}`);
  if (!isInsideWorktree || !isCandidatePath || !IMAGE_EXTENSION.test(fullPath)) {
    return NextResponse.json({ error: "Asset inválido" }, { status: 400 });
  }
  try {
    const bytes = await fs.readFile(fullPath);
    const extension = path.extname(fullPath).toLowerCase();
    const contentType =
      extension === ".png"
        ? "image/png"
        : extension === ".webp"
          ? "image/webp"
          : extension === ".avif"
            ? "image/avif"
            : "image/jpeg";
    return new NextResponse(bytes, {
      headers: { "Content-Type": contentType, "Cache-Control": "no-store" },
    });
  } catch {
    return NextResponse.json({ error: "Asset no encontrado" }, { status: 404 });
  }
}

export async function GET(request) {
  if (!LOCAL_ONLY) return disabledResponse();
  const { searchParams } = new URL(request.url);
  if (searchParams.has("asset")) {
    return serveLocalAsset(searchParams.get("asset"));
  }
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const inventory = await getInventory({ refresh: searchParams.get("refresh") === "1" });
    return NextResponse.json(inventory, {
      headers: { "Cache-Control": "no-store" },
    });
  } catch (error) {
    console.error("[myth-image-audit] inventory:", error);
    return NextResponse.json(
      { error: error.message || "No se pudo construir el inventario visual." },
      { status: 500 },
    );
  }
}

export async function POST(request) {
  if (!LOCAL_ONLY) return disabledResponse();
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const body = await request.json();
    const slug = String(body.slug || "");
    const candidateId = String(body.candidateId || "");
    const decision = body.decision ? String(body.decision) : null;
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug) || !/^[a-f0-9]{18}$/.test(candidateId)) {
      return NextResponse.json({ error: "Selección inválida" }, { status: 400 });
    }
    if (decision && !VALID_DECISIONS.has(decision)) {
      return NextResponse.json({ error: "Decisión inválida" }, { status: 400 });
    }
    await writeDecision({ slug, candidateId, decision });
    return NextResponse.json({ ok: true, slug, candidateId, decision });
  } catch (error) {
    console.error("[myth-image-audit] decision:", error);
    return NextResponse.json(
      { error: error.message || "No se pudo guardar la decisión." },
      { status: error.statusCode || 500 },
    );
  }
}
