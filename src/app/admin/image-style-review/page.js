"use client";

/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import AdminLayout from "../../../components/AdminLayout";
import { GlassCard } from "../../../components/ui/GlassCard";
import { Button } from "../../../components/ui/Button";
import { Badge } from "../../../components/ui/Badge";
import { Icon } from "../../../components/atoms";
import {
  APPROVED_STYLE_PROFILE,
  buildRegenerationCommand,
} from "../../../lib/image-style-review-data";

const sectionLabels = {
  myth: "Mito",
  region: "Region",
  homeBanner: "Banner",
  community: "Comunidad",
  category: "Categoria",
};
const companionEnabled =
  process.env.NODE_ENV !== "production" ||
  process.env.NEXT_PUBLIC_IMAGE_STYLE_REVIEW_LOCAL === "true";

function readSavedAuth() {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem("admin_auth");
}

function buildEntityOptions(data) {
  const current = data?.currentHome || {};
  return [
    ...(current.myths || []).map((item) => ({
      ...item,
      preset: "horizontal",
      group: "Home hoy",
    })),
    ...(current.regions || []).map((item) => ({
      ...item,
      preset: "horizontal",
      group: "Regiones home",
    })),
    ...(current.banners || []).map((item) => ({
      ...item,
      preset: "homeBanner",
      group: "Banners editoriales",
    })),
  ];
}

function ImageTile({ item, ratio = "aspect-[3/2]", badge }) {
  const title = item.title || item.name || item.slug;
  return (
    <div className="overflow-hidden rounded-lg border border-ink-500/10 bg-white/75">
      <div className={`relative ${ratio} bg-ink-100`}>
        {item.imageUrl ? (
          <Image
            src={item.imageUrl}
            alt={title}
            fill
            sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-xs text-ink-500">
            Sin imagen
          </div>
        )}
      </div>
      <div className="space-y-2 p-3">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-ink-900">{title}</p>
            <p className="mt-0.5 truncate text-xs text-ink-600">
              {[sectionLabels[item.type], item.region, item.community]
                .filter(Boolean)
                .join(" · ")}
            </p>
          </div>
          {badge ? <Badge>{badge}</Badge> : null}
        </div>
        {item.imageUrl ? (
          <a
            href={item.imageUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex text-xs font-semibold uppercase tracking-[0.16em] text-river-700 hover:text-river-900"
          >
            Abrir imagen
          </a>
        ) : null}
      </div>
    </div>
  );
}

function ReviewGrid({ title, items, ratio }) {
  if (!items?.length) return null;
  return (
    <GlassCard className="p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="font-display text-2xl text-ink-900">{title}</h2>
        <Badge>{items.length}</Badge>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <ImageTile
            key={`${item.type || "sample"}-${item.id || "na"}-${item.slug}-${item.imageUrl || ""}`}
            item={item}
            ratio={ratio}
            badge={item.styleLabel || (item.isCraftCandidate ? "nuevo" : "")}
          />
        ))}
      </div>
    </GlassCard>
  );
}

function RoundSetGrid({ title, sets }) {
  if (!sets?.length) return null;
  return (
    <GlassCard className="p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="font-display text-2xl text-ink-900">{title}</h2>
        <Badge>{sets.length}</Badge>
      </div>
      <div className="space-y-5">
        {sets.map((round) => (
          <div
            key={round.roundId}
            className="rounded-lg border border-ink-500/10 bg-white/60 p-4"
          >
            <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="font-display text-xl text-ink-900">
                  {round.styleLabel || round.styleProfile || "Ronda visual"}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-ink-600">
                  {round.roundId}
                </p>
              </div>
              <Badge>{round.items?.length || 0} imagenes</Badge>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
              {(round.items || []).map((item) => (
                <ImageTile
                  key={`${round.roundId}-${item.type}-${item.id}-${item.imageUrl}`}
                  item={item}
                  badge={item.styleLabel || round.styleLabel || item.styleProfile}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}

function CopyCommand({ title, command, tone = "ink" }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="rounded-lg border border-ink-500/10 bg-white/75 p-3">
      <div className="mb-2 flex items-center justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-600">
          {title}
        </p>
        <button
          type="button"
          onClick={copy}
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-ink-500/10 bg-white text-ink-700 transition hover:bg-ink-50"
          aria-label={copied ? "Comando copiado" : "Copiar comando"}
          title={copied ? "Copiado" : "Copiar"}
        >
          <Icon name={copied ? "check" : "link"} size={14} />
        </button>
      </div>
      <pre
        className={`overflow-auto whitespace-pre-wrap break-words rounded-md p-3 text-xs leading-5 ${
          tone === "river"
            ? "bg-river-700 text-white"
            : "bg-ink-900 text-mist-50"
        }`}
      >
        {command}
      </pre>
    </div>
  );
}

function ApplicationPlan({ data, selectedProfile }) {
  const scopes = data?.applicationPlan?.scopes || [];
  if (!scopes.length) return null;

  const fullScope = scopes.find((scope) => scope.key === "home-current") || scopes[0];
  const partialScopes = scopes.filter((scope) => scope.key !== fullScope.key);
  const fullDryRunCommand = buildRegenerationCommand({
    ...fullScope,
    styleProfile: selectedProfile,
    dryRun: true,
  });
  const fullApplyCommand = buildRegenerationCommand({
    ...fullScope,
    styleProfile: selectedProfile,
  });

  return (
    <GlassCard className="p-5">
      <div className="mb-4 flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="eyebrow text-river-700">Aplicacion aprobada</p>
          <h2 className="font-display text-2xl text-ink-900">
            Plan para el home actual
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-ink-600">
            Estos comandos quedan listos para usar cuando el perfil visual sea aprobado.
            La pantalla no escribe en la base de datos ni reemplaza imagenes por si sola.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge>{selectedProfile}</Badge>
          <Badge>{fullScope.count} piezas</Badge>
          {Number.isFinite(Number(fullScope.seed)) ? (
            <Badge>seed {fullScope.seed}</Badge>
          ) : null}
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <CopyCommand
          title="Ensayo sin escritura"
          command={fullDryRunCommand}
          tone="river"
        />
        <CopyCommand title="Ejecucion al aprobar" command={fullApplyCommand} />
      </div>

      {partialScopes.length ? (
        <div className="mt-4 grid gap-3 lg:grid-cols-3">
          {partialScopes.map((scope) => (
            <div
              key={scope.key}
              className="rounded-lg border border-ink-500/10 bg-white/60 p-3"
            >
              <div className="mb-2 flex items-start justify-between gap-2">
                <div>
                  <p className="font-display text-lg text-ink-900">{scope.title}</p>
                  <p className="mt-1 text-xs leading-5 text-ink-600">
                    {scope.description}
                  </p>
                </div>
                <Badge>{scope.count}</Badge>
              </div>
              <CopyCommand
                title="Comando parcial"
                command={buildRegenerationCommand({
                  ...scope,
                  styleProfile: selectedProfile,
                })}
              />
            </div>
          ))}
        </div>
      ) : null}
    </GlassCard>
  );
}

function LocalRoundCommand({ data, selectedProfile }) {
  const count = Math.min(data?.roundCandidates?.length || 0, 5);
  if (!count) return null;
  const seed = data?.currentHome?.seed ?? data?.applicationPlan?.seed;
  const command = [
    "npm run images:style-round --",
    `--style-profile ${selectedProfile}`,
    Number.isFinite(Number(seed)) ? `--seed ${Number(seed)}` : "",
    `--count ${count}`,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <GlassCard className="p-5">
      <div className="mb-4 flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="eyebrow text-jungle-700">Ronda local</p>
          <h2 className="font-display text-2xl text-ink-900">
            Generar variaciones para revisar juntos
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-ink-600">
            Este comando crea una ronda local incremental en
            artifacts/image-style-review. No sube a Blob, no escribe DB y deja
            un round.json para que el companion la lea al actualizar.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge>{count} mitos</Badge>
          {Number.isFinite(Number(seed)) ? <Badge>seed {seed}</Badge> : null}
        </div>
      </div>
      <CopyCommand title="Comando local de ronda" command={command} tone="river" />
    </GlassCard>
  );
}

export default function ImageStyleReviewPage() {
  const router = useRouter();
  const [auth, setAuth] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);
  const [selectedEntity, setSelectedEntity] = useState("");
  const [selectedProfile, setSelectedProfile] = useState(APPROVED_STYLE_PROFILE);
  const [generatedRounds, setGeneratedRounds] = useState([]);
  const [error, setError] = useState("");

  const entityOptions = useMemo(() => buildEntityOptions(data), [data]);
  const selectedOption = useMemo(
    () => entityOptions.find((item) => `${item.type}:${item.id}` === selectedEntity),
    [entityOptions, selectedEntity]
  );
  const selectedProfileLabel = useMemo(
    () =>
      data?.config?.profiles?.find((profile) => profile.value === selectedProfile)
        ?.label || selectedProfile,
    [data, selectedProfile]
  );

  const loadReview = async (token) => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/admin/image-style-review", {
        headers: { Authorization: `Basic ${token}` },
      });
      if (response.status === 401) {
        window.localStorage.removeItem("admin_auth");
        router.push("/admin");
        return;
      }
      if (!response.ok) {
        throw new Error("No se pudo cargar la ronda visual.");
      }
      const payload = await response.json();
      setData(payload);
      const options = buildEntityOptions(payload);
      if (!selectedEntity && options[0]) {
        setSelectedEntity(`${options[0].type}:${options[0].id}`);
      }
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!companionEnabled) {
      setLoading(false);
      return;
    }
    const savedAuth = readSavedAuth();
    if (!savedAuth) {
      router.push("/admin");
      return;
    }
    setAuth(savedAuth);
    loadReview(savedAuth);
  }, [router]);

  const handleLogout = () => {
    window.localStorage.removeItem("admin_auth");
    setAuth(null);
    router.push("/admin");
  };

  const generateRoundSample = async () => {
    if (!auth || !selectedOption) return;
    setGenerating(true);
    setError("");
    try {
      const response = await fetch("/api/admin/image-style-review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${auth}`,
        },
        body: JSON.stringify({
          entityType: selectedOption.type,
          entityId: selectedOption.id,
          preset: selectedOption.preset,
          styleProfile: selectedProfile,
        }),
      });
      const payload = await response.json();
      if (!response.ok) {
        throw new Error(payload.error || "No se pudo generar la muestra.");
      }
      setGeneratedRounds((items) => [
        {
          ...payload.entity,
          imageUrl: payload.imageUrl,
          prompt: payload.prompt,
          styleProfile: payload.styleProfile,
          preset: payload.preset,
          type: selectedOption.type,
        },
        ...items,
      ]);
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setGenerating(false);
    }
  };

  if (!companionEnabled) {
    return (
      <AdminLayout onLogout={handleLogout}>
        <GlassCard className="p-6">
          <p className="eyebrow text-jungle-700">Visual companion</p>
          <h1 className="mt-2 font-display text-3xl text-ink-900">
            Taller local de rondas visuales
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-ink-600">
            Este espacio esta desactivado en produccion. Las rondas de estilo se
            trabajan localmente y no publican imagenes ni escriben en la base de
            datos hasta que haya una aprobacion visual explicita.
          </p>
        </GlassCard>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout onLogout={handleLogout}>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
          <div>
            <p className="eyebrow text-jungle-700">Visual companion local</p>
            <h1 className="font-display text-4xl text-ink-900">
              Rondas visuales
            </h1>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-ink-600">
              Taller local para iterar estilo paper craft, comparar variaciones
              y generar muestras privadas antes de cualquier publicacion.
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => auth && loadReview(auth)}
            disabled={loading}
          >
            Actualizar
          </Button>
        </div>

        {error ? (
          <GlassCard className="border-ember-500/20 bg-ember-50/70 p-4 text-sm text-ember-700">
            {error}
          </GlassCard>
        ) : null}

        <div className="grid gap-4 md:grid-cols-5">
          {[
            ["Modelo", data?.config?.model || "gpt-image-2"],
            ["Calidad", data?.config?.quality || "high"],
            ["Formato", data?.config?.format || "jpeg"],
            ["Seed home", data?.currentHome?.seed ?? "..."],
            ["Rondas locales", data?.privateRounds?.length ?? "..."],
          ].map(([label, value]) => (
            <GlassCard key={label} className="p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-river-700">
                {label}
              </p>
              <p className="mt-2 font-display text-2xl text-ink-900">{value}</p>
            </GlassCard>
          ))}
        </div>

        <GlassCard className="p-5">
          <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
            <div>
              <h2 className="font-display text-2xl text-ink-900">
                Contrato de aprobacion
              </h2>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {(data?.config?.criteria || []).map((criterion) => (
                  <div
                    key={criterion}
                    className="rounded-lg border border-ink-500/10 bg-white/65 px-3 py-2 text-sm text-ink-700"
                  >
                    {criterion}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-river-500/15 bg-river-50/60 p-4">
              <h3 className="font-display text-xl text-ink-900">
                Nueva muestra privada
              </h3>
              <div className="mt-4 space-y-3">
                <label className="block">
                  <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.18em] text-ink-600">
                    Pieza
                  </span>
                  <select
                    className="input-glass"
                    value={selectedEntity}
                    onChange={(event) => setSelectedEntity(event.target.value)}
                  >
                    {entityOptions.map((item) => (
                      <option key={`${item.type}:${item.id}`} value={`${item.type}:${item.id}`}>
                        {item.group} / {sectionLabels[item.type]} / {item.title || item.name}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.18em] text-ink-600">
                    Perfil
                  </span>
                  <select
                    className="input-glass"
                    value={selectedProfile}
                    onChange={(event) => setSelectedProfile(event.target.value)}
                  >
                    {(data?.config?.profiles || []).map((profile) => (
                      <option key={profile.value} value={profile.value}>
                        {profile.label}
                      </option>
                    ))}
                  </select>
                </label>
                <div className="rounded-lg border border-ink-500/10 bg-white/60 p-3 text-sm text-ink-700">
                  Perfil activo para rondas y plan:{" "}
                  <span className="font-semibold text-ink-900">
                    {selectedProfileLabel}
                  </span>
                </div>
                <Button
                  onClick={generateRoundSample}
                  disabled={generating || !selectedOption}
                  className="w-full"
                >
                  {generating ? "Generando..." : "Generar muestra"}
                </Button>
                <p className="text-xs leading-5 text-ink-600">
                  Las muestras se guardan localmente como ronda privada y no
                  actualizan mitos, regiones ni banners.
                </p>
              </div>
            </div>
          </div>
        </GlassCard>

        <ApplicationPlan data={data} selectedProfile={selectedProfile} />

        <LocalRoundCommand data={data} selectedProfile={selectedProfile} />

        {generatedRounds.length ? (
          <GlassCard className="p-5">
            <div className="mb-4 flex items-center justify-between gap-3">
              <h2 className="font-display text-2xl text-ink-900">
                Muestras nuevas de esta sesion
              </h2>
              <Badge>{generatedRounds.length}</Badge>
            </div>
            <div className="grid gap-4 lg:grid-cols-2">
              {generatedRounds.map((item) => (
                <div key={item.imageUrl} className="space-y-3">
                  <ImageTile item={item} badge={item.styleProfile} />
                  <details className="rounded-lg border border-ink-500/10 bg-white/70 p-3 text-xs text-ink-700">
                    <summary className="cursor-pointer font-semibold uppercase tracking-[0.16em] text-ink-600">
                      Prompt
                    </summary>
                    <pre className="mt-3 max-h-72 overflow-auto whitespace-pre-wrap leading-5">
                      {item.prompt}
                    </pre>
                  </details>
                </div>
              ))}
            </div>
          </GlassCard>
        ) : null}

        <ReviewGrid
          title="Muestras privadas guardadas"
          items={data?.privateRounds || []}
        />

        <RoundSetGrid
          title="Rondas completas guardadas"
          sets={data?.privateRoundSets || []}
        />

        <ReviewGrid title="Muestras base de direccion" items={data?.samples || []} />

        <ReviewGrid
          title="Home publico segun seed actual"
          items={[
            ...(data?.currentHome?.myths || []),
            ...(data?.currentHome?.regions || []),
          ]}
        />

        <ReviewGrid
          title="Banners editoriales actuales"
          items={data?.currentHome?.banners || []}
          ratio="aspect-[16/9]"
        />

        <ReviewGrid
          title="Lote ya regenerado en produccion"
          items={[
            ...(data?.productionBatch?.myths || []),
            ...(data?.productionBatch?.regions || []),
            ...(data?.productionBatch?.banners || []),
          ]}
        />
      </div>
    </AdminLayout>
  );
}
