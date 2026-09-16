import { execFileSync } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function probeClip(file) {
  const raw = execFileSync(
    "ffprobe",
    [
      "-v", "error",
      "-show_entries", "stream=codec_name,width,height,r_frame_rate:format=duration,size",
      "-of", "json",
      file,
    ],
    { encoding: "utf8" },
  );
  const probe = JSON.parse(raw);
  const video = probe.streams?.find((stream) => stream.width && stream.height);
  const duration = Number(probe.format?.duration);
  if (!video || video.width !== 1080 || video.height !== 1920 || duration < 4.8 || duration > 5.3) {
    throw new Error(`Clip inválido ${file}: ${raw}`);
  }
  return {
    codec: video.codec_name,
    width: video.width,
    height: video.height,
    fps: video.r_frame_rate,
    duration,
    size: Number(probe.format.size),
  };
}

export async function runHiggsfieldQueuedBatch({
  tab,
  root,
  slugs,
  maxInFlight = 2,
  recover = [],
  maxRuntimeMs = Number.POSITIVE_INFINITY,
  refreshBeforePoll = false,
}) {
  const runStartedAt = Date.now();
  const allLog = path.join(root, "content/videos/muiscas/higgsfield-browser-batch-v1.jsonl");
  const log = (entry) => fs.appendFile(
    allLog,
    `${JSON.stringify({ at: new Date().toISOString(), ...entry })}\n`,
  );

  if (refreshBeforePoll && recover.length) {
    await tab.goto("https://higgsfield.ai/ai/video");
    await sleep(3_500);
  }

  const activeCounts = async () => ({
    processing: await tab.playwright.getByText("Processing", { exact: true }).count(),
    generating: await tab.playwright.getByText("Generating", { exact: true }).count(),
    queued: await tab.playwright.getByText("Queued", { exact: true }).count(),
  });

  const assetIds = async () => {
    const cards = tab.playwright.locator("#assets-grid [data-asset-id][data-job-status]");
    const ids = new Set();
    for (let index = 0; index < await cards.count(); index += 1) {
      const id = await cards.nth(index).getAttribute("data-asset-id");
      if (id) ids.add(id);
    }
    return ids;
  };

  async function removeActiveReference() {
    const cards = tab.playwright.locator(".relative.group.select-none");
    for (let index = 0; index < await cards.count(); index += 1) {
      const card = cards.nth(index);
      if (!await card.locator("img").count()) continue;
      const buttons = card.getByRole("button");
      if (await buttons.count() < 2) continue;
      await buttons.first().click();
      await sleep(500);
      return true;
    }
    return false;
  }

  async function uploadReference(file) {
    await tab.playwright.getByText("Add references", { exact: false }).click();
    await sleep(400);
    const beforeButtons = tab.playwright.getByRole("button", { name: /^Select / });
    const before = new Set();
    for (let index = 0; index < await beforeButtons.count(); index += 1) {
      before.add(await beforeButtons.nth(index).getAttribute("aria-label"));
    }

    const uploadText = tab.playwright.getByText("Upload file", { exact: true });
    const uploadCard = uploadText.locator("..").locator("..").locator("..");
    const chooserPromise = tab.playwright.waitForEvent("filechooser");
    await uploadCard.click();
    const chooser = await chooserPromise;
    await chooser.setFiles(file);

    const started = Date.now();
    while (Date.now() - started < 90_000) {
      const uploading = await tab.playwright.getByText("Uploading...", { exact: true }).count();
      const checking = await tab.playwright.getByText("Checking content...", { exact: true }).count();
      if (!uploading && !checking) break;
      await sleep(750);
    }

    const afterButtons = tab.playwright.getByRole("button", { name: /^Select / });
    let newName = null;
    for (let index = 0; index < await afterButtons.count(); index += 1) {
      const name = await afterButtons.nth(index).getAttribute("aria-label");
      if (name && !before.has(name)) {
        newName = name;
        break;
      }
    }
    if (!newName) throw new Error(`No apareció el asset subido para ${file}`);
    await tab.playwright.getByRole("button", { name: newName }).click();
    await tab.playwright.getByRole("button", { name: "Close assets picker" }).click();
    await sleep(500);
    return newName.replace(/^Select /, "");
  }

  async function submit(task, referenceId) {
    await tab.playwright.getByRole("textbox").first().fill(task.prompt);
    const elements = tab.playwright.getByRole("checkbox").first().locator("..");
    if ((await elements.textContent()).includes("Off")) await elements.click();

    const unlimited = tab.playwright.getByRole("switch", { name: "Unlimited mode" });
    if ((await unlimited.getAttribute("data-state")) !== "on") await unlimited.click();
    await sleep(250);
    if ((await unlimited.getAttribute("data-state")) !== "on") {
      throw new Error("Unlimited no quedó activo");
    }
    if (!await tab.playwright.locator(`img[src*="${referenceId}"]`).count()) {
      throw new Error(`Referencia no seleccionada ${referenceId}`);
    }

    const before = await assetIds();
    const generate = tab.playwright.getByRole("button", { name: /Generate/ }).first();
    const buttonText = (await generate.textContent()).replace(/\s+/g, "");
    if (!buttonText.includes("Unlimited")) throw new Error(`Botón no ilimitado: ${buttonText}`);
    await generate.click();

    const started = Date.now();
    while (Date.now() - started < 15_000) {
      const after = await assetIds();
      const added = [...after].find((id) => !before.has(id));
      if (added) return added;
      await sleep(500);
    }
    throw new Error(`No apareció tarjeta de trabajo para ${task.slug} toma ${task.shot}`);
  }

  async function download(source, destination) {
    const response = await fetch(source);
    if (!response.ok) throw new Error(`Descarga ${response.status}: ${source}`);
    const part = `${destination}.part`;
    await fs.mkdir(path.dirname(destination), { recursive: true });
    await fs.writeFile(part, Buffer.from(await response.arrayBuffer()));
    const qa = await probeClip(part);
    await fs.rename(part, destination);
    return qa;
  }

  const tasks = [];
  for (const slug of slugs) {
    const mythDir = path.join(root, "content/videos/muiscas/videos", slug);
    const movement = JSON.parse(await fs.readFile(path.join(mythDir, "movimiento-v1.json"), "utf8"));
    for (const shot of movement.shots) {
      const destination = path.join(mythDir, "clips-v1", `c${String(shot.n).padStart(2, "0")}.mp4`);
      try {
        await probeClip(destination);
      } catch {
        tasks.push({ slug, shot: shot.n, prompt: shot.prompt, keyframe: path.resolve(mythDir, shot.keyframe), destination });
      }
    }
  }

  const recoveredKeys = new Set(recover.map((job) => `${job.slug}#${job.shot}`));
  const queue = tasks.filter((task) => !recoveredKeys.has(`${task.slug}#${task.shot}`));
  const inFlight = new Map();
  for (const job of recover) {
    const task = tasks.find((candidate) => candidate.slug === job.slug && candidate.shot === job.shot);
    if (!task) continue;
    const recovered = { ...task, assetId: job.assetId, referenceId: job.referenceId ?? null, submittedAt: job.submittedAt ?? new Date().toISOString() };
    inFlight.set(job.assetId, recovered);
  }

  let lastHeartbeat = 0;
  let completed = 0;
  await removeActiveReference();

  while (queue.length || inFlight.size) {
    while (queue.length && inFlight.size < maxInFlight) {
      const task = queue.shift();
      const referenceId = await uploadReference(task.keyframe);
      const assetId = await submit(task, referenceId);
      const submittedAt = new Date().toISOString();
      inFlight.set(assetId, { ...task, assetId, referenceId, submittedAt });
      await log({
        event: "submitted",
        slug: task.slug,
        shot: task.shot,
        uuid: referenceId,
        jobAssetId: assetId,
      });
      await removeActiveReference();
    }

    for (const [assetId, task] of [...inFlight]) {
      const card = tab.playwright.locator(`[data-asset-id="${assetId}"][data-job-status]`).first();
      if (!await card.count()) continue;
      const video = card.locator("video").first();
      const source = await video.count() ? await video.getAttribute("src") : null;
      if (source?.includes("cloudfront.net")) {
        const qa = await download(source, task.destination);
        await log({
          event: "complete",
          slug: task.slug,
          shot: task.shot,
          uuid: task.referenceId,
          jobAssetId: assetId,
          source,
          qa,
        });
        inFlight.delete(assetId);
        completed += 1;
        continue;
      }

      const text = await card.textContent();
      if (/failed|moderation|could not generate/i.test(text)) {
        await log({ event: "job_failed", slug: task.slug, shot: task.shot, jobAssetId: assetId, text: text.slice(0, 500) });
        throw new Error(`Falló ${task.slug} toma ${task.shot}: ${text}`);
      }
      const age = Date.now() - Date.parse(task.submittedAt);
      if (age > 60 * 60_000) {
        await log({ event: "job_timeout", slug: task.slug, shot: task.shot, jobAssetId: assetId, minutes: Math.round(age / 60_000) });
        throw new Error(`${task.slug} toma ${task.shot} sigue activa después de 60 minutos`);
      }
    }

    if (maxRuntimeMs !== 0 && Date.now() - lastHeartbeat >= 60_000) {
      const counts = await activeCounts();
      await log({
        event: "queue_heartbeat",
        counts,
        queuedLocally: queue.length,
        inFlight: [...inFlight.values()].map(({ slug, shot, assetId }) => ({ slug, shot, assetId })),
        completedThisRun: completed,
      });
      lastHeartbeat = Date.now();
    }

    if (Date.now() - runStartedAt >= maxRuntimeMs) {
      const pending = [...inFlight.values()].map(({
        slug,
        shot,
        assetId,
        referenceId,
        submittedAt,
      }) => ({ slug, shot, assetId, referenceId, submittedAt }));
      await log({
        event: "queue_yield",
        queuedLocally: queue.length,
        inFlight: pending,
        completedThisRun: completed,
      });
      return { completed, queuedLocally: queue.length, inFlight: pending, yielded: true };
    }
    await sleep(10_000);
  }

  await log({ event: "queue_complete", completedThisRun: completed });
  return { completed };
}
