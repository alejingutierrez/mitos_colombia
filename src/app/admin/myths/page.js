"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import AdminLayout from "../../../components/AdminLayout";
import { GlassCard } from "../../../components/ui/GlassCard";
import { Button } from "../../../components/ui/Button";
import { Badge } from "../../../components/ui/Badge";
import { ImageSlot } from "../../../components/ui/ImageSlot";
import { Toast, useToast } from "../../../components/ui/Toast";

const emptyDraft = {
  id: null,
  title: "",
  slug: "",
  region_id: "",
  community_id: "",
  department: "",
  category_path: "",
  tags_raw: "",
  mito: "",
  historia: "",
  versiones: "",
  leccion: "",
  similitudes: "",
  excerpt: "",
  seo_title: "",
  seo_description: "",
  focus_keyword: "",
  focus_keywords_raw: "",
  image_prompt: "",
  image_url: "",
  latitude: "",
  longitude: "",
  content_formatted: false,
};

function buildContentPreview(draft) {
  const sections = [
    ["Mito", draft.mito],
    ["Historia", draft.historia],
    ["Versiones", draft.versiones],
    ["Lección", draft.leccion],
    ["Similitudes", draft.similitudes],
  ];

  return sections
    .map(([title, value]) => {
      const text = String(value || "").trim();
      return text ? `${title}\n${text}` : null;
    })
    .filter(Boolean)
    .join("\n\n");
}

export default function MythsCmsPage() {
  const router = useRouter();
  const { toast, showToast, hideToast } = useToast();
  const [auth, setAuth] = useState(null);
  const [taxonomy, setTaxonomy] = useState({ regions: [], communities: [], tags: [] });
  const [loadingList, setLoadingList] = useState(true);
  const [loadingDetail, setLoadingDetail] = useState(false);
  const [saving, setSaving] = useState(false);
  const [query, setQuery] = useState("");
  const [limit, setLimit] = useState(20);
  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState(0);
  const [items, setItems] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [draft, setDraft] = useState(emptyDraft);

  const isNew = !draft.id;

  const currentRegion = useMemo(
    () => taxonomy.regions.find((region) => String(region.id) === String(draft.region_id)),
    [taxonomy.regions, draft.region_id]
  );

  const availableCommunities = useMemo(() => {
    if (!draft.region_id) return [];
    return taxonomy.communities.filter(
      (community) => String(community.region_id) === String(draft.region_id)
    );
  }, [taxonomy.communities, draft.region_id]);

  const categoryPathPreview = useMemo(() => {
    const regionName = currentRegion?.name || "";
    const communityName = availableCommunities.find(
      (community) => String(community.id) === String(draft.community_id)
    )?.name;
    return [regionName, draft.department, communityName]
      .filter(Boolean)
      .join(" > ");
  }, [currentRegion, availableCommunities, draft.department, draft.community_id]);

  const contentPreview = useMemo(() => buildContentPreview(draft), [draft]);

  const fetchTaxonomy = async () => {
    try {
      const response = await fetch("/api/taxonomy");
      if (response.ok) {
        const data = await response.json();
        setTaxonomy(data);
      }
    } catch (error) {
      console.error("Error loading taxonomy:", error);
    }
  };

  const fetchList = async (token, nextOffset = offset, nextLimit = limit, nextQuery = query) => {
    setLoadingList(true);
    try {
      const params = new URLSearchParams();
      if (nextQuery) params.set("q", nextQuery);
      params.set("limit", String(nextLimit));
      params.set("offset", String(nextOffset));

      const response = await fetch(`/api/admin/myths?${params.toString()}`, {
        headers: {
          Authorization: `Basic ${token}`,
        },
      });

      if (response.status === 401) {
        localStorage.removeItem("admin_auth");
        router.push("/admin");
        return;
      }

      if (!response.ok) {
        throw new Error("No se pudo cargar la lista");
      }

      const data = await response.json();
      setItems(data.items || []);
      setTotal(data.total || 0);
      setLimit(data.limit || nextLimit);
      setOffset(data.offset || nextOffset);
    } catch (error) {
      console.error("Error loading myths list:", error);
      showToast("No se pudo cargar la lista", "error");
    } finally {
      setLoadingList(false);
    }
  };

  const fetchDetail = async (token, id) => {
    if (!id) return;
    setLoadingDetail(true);
    try {
      const response = await fetch(`/api/admin/myths?id=${id}`, {
        headers: {
          Authorization: `Basic ${token}`,
        },
      });

      if (response.status === 401) {
        localStorage.removeItem("admin_auth");
        router.push("/admin");
        return;
      }

      if (!response.ok) {
        throw new Error("No se pudo cargar el mito");
      }

      const data = await response.json();
      const myth = data.myth || {};

      setDraft({
        id: myth.id,
        title: myth.title || "",
        slug: myth.slug || "",
        region_id: myth.region_id || "",
        community_id: myth.community_id || "",
        department: myth.department || "",
        category_path: myth.category_path || "",
        tags_raw: myth.tags_raw || "",
        mito: myth.mito || "",
        historia: myth.historia || "",
        versiones: myth.versiones || "",
        leccion: myth.leccion || "",
        similitudes: myth.similitudes || "",
        excerpt: myth.excerpt || "",
        seo_title: myth.seo_title || "",
        seo_description: myth.seo_description || "",
        focus_keyword: myth.focus_keyword || "",
        focus_keywords_raw: myth.focus_keywords_raw || "",
        image_prompt: myth.image_prompt || "",
        image_url: myth.image_url || "",
        latitude: myth.latitude ?? "",
        longitude: myth.longitude ?? "",
        content_formatted: Boolean(myth.content_formatted),
      });
    } catch (error) {
      console.error("Error loading myth detail:", error);
      showToast("No se pudo cargar el mito", "error");
    } finally {
      setLoadingDetail(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("admin_auth");
    router.push("/admin");
  };

  useEffect(() => {
    const savedAuth = localStorage.getItem("admin_auth");
    if (!savedAuth) {
      router.push("/admin");
      return;
    }
    setAuth(savedAuth);
    fetchTaxonomy();
    fetchList(savedAuth, 0, limit, "");
  }, [router]);

  useEffect(() => {
    if (!auth || !selectedId) return;
    fetchDetail(auth, selectedId);
  }, [auth, selectedId]);

  const handleSelect = (id) => {
    setSelectedId(String(id));
  };

  const handleNew = () => {
    setSelectedId("");
    setDraft(emptyDraft);
  };

  const handleChange = (field, value) => {
    setDraft((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    if (!auth) return;
    setSaving(true);

    try {
      const response = await fetch("/api/admin/myths", {
        method: isNew ? "POST" : "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${auth}`,
        },
        body: JSON.stringify({
          myth: {
            ...draft,
            region_id: draft.region_id || null,
            community_id: draft.community_id || null,
            department: draft.department || "",
            category_path: draft.category_path || "",
          },
        }),
      });

      if (response.status === 401) {
        handleLogout();
        return;
      }

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Error guardando el mito");
      }

      showToast(isNew ? "Mito creado" : "Mito actualizado", "success");
      await fetchList(auth, offset, limit, query);

      if (data.myth?.id) {
        setSelectedId(String(data.myth.id));
        await fetchDetail(auth, data.myth.id);
      }
    } catch (error) {
      console.error("Error saving myth:", error);
      showToast(error.message || "Error guardando el mito", "error");
    } finally {
      setSaving(false);
    }
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    if (!auth) return;
    setOffset(0);
    await fetchList(auth, 0, limit, query);
  };

  const handlePrev = async () => {
    if (!auth) return;
    const nextOffset = Math.max(offset - limit, 0);
    setOffset(nextOffset);
    await fetchList(auth, nextOffset, limit, query);
  };

  const handleNext = async () => {
    if (!auth) return;
    const nextOffset = offset + limit;
    if (nextOffset >= total) return;
    setOffset(nextOffset);
    await fetchList(auth, nextOffset, limit, query);
  };

  return (
    <AdminLayout onLogout={handleLogout}>
      <Toast toast={toast} onClose={hideToast} />

      <section className="grid gap-6 lg:grid-cols-[1.1fr_1.6fr]">
        <GlassCard className="p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="eyebrow text-jungle-600">CMS</p>
              <h1 className="mt-2 font-display text-2xl text-ink-900">
                Editor de mitos
              </h1>
              <p className="mt-2 text-sm text-ink-600">
                Edita mitos existentes o crea nuevos relatos para el sitio.
              </p>
            </div>
            <Button variant="accent" size="sm" onClick={handleNew}>
              Nuevo mito
            </Button>
          </div>

          <form onSubmit={handleSearch} className="mt-6 flex flex-wrap gap-3">
            <input
              className="input-glass flex-1 min-w-[200px]"
              placeholder="Buscar por titulo o slug"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Button type="submit" size="sm" variant="outline">
              Buscar
            </Button>
          </form>

          <div className="mt-6 flex items-center justify-between text-sm text-ink-600">
            <span>
              {loadingList ? "Cargando..." : `Mostrando ${items.length} de ${total}`}
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                className="rounded-full border border-ink-500/20 px-3 py-1 text-xs text-ink-600 hover:border-ink-500/40"
                disabled={offset === 0}
              >
                Anterior
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="rounded-full border border-ink-500/20 px-3 py-1 text-xs text-ink-600 hover:border-ink-500/40"
                disabled={offset + limit >= total}
              >
                Siguiente
              </button>
            </div>
          </div>

          <div className="mt-6 space-y-3 max-h-[70vh] overflow-y-auto pr-2">
            {items.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSelect(item.id)}
                className={`w-full text-left rounded-2xl border px-4 py-4 transition ${
                  String(selectedId) === String(item.id)
                    ? "border-jungle-500/60 bg-jungle-50"
                    : "border-white/60 bg-white/50 hover:border-jungle-300/60"
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-semibold text-ink-900">{item.title}</h3>
                  {item.image_url ? (
                    <Badge className="border-jungle-500/30 bg-jungle-500/10 text-jungle-700">
                      Imagen OK
                    </Badge>
                  ) : (
                    <Badge className="border-ember-500/30 bg-ember-500/10 text-ember-600">
                      Sin imagen
                    </Badge>
                  )}
                </div>
                <p className="mt-2 text-xs text-ink-600">
                  {item.region} {item.community ? `• ${item.community}` : ""}
                </p>
                {item.tags_raw ? (
                  <p className="mt-2 text-[11px] text-ink-500 line-clamp-1">
                    {item.tags_raw}
                  </p>
                ) : null}
              </button>
            ))}
          </div>
        </GlassCard>

        <div className="space-y-6">
          <GlassCard className="p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="eyebrow text-river-600">Detalles</p>
                <h2 className="mt-2 font-display text-xl text-ink-900">
                  {isNew ? "Nuevo mito" : "Editar mito"}
                </h2>
                {loadingDetail && !isNew ? (
                  <p className="text-sm text-ink-500">Cargando...</p>
                ) : null}
              </div>
              <Button onClick={handleSave} disabled={saving}>
                {saving ? "Guardando..." : isNew ? "Crear mito" : "Guardar cambios"}
              </Button>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <label className="text-sm text-ink-700">
                Titulo
                <input
                  className="input-glass mt-2 w-full"
                  value={draft.title}
                  onChange={(event) => handleChange("title", event.target.value)}
                />
              </label>
              <label className="text-sm text-ink-700">
                Slug
                <input
                  className="input-glass mt-2 w-full"
                  value={draft.slug}
                  onChange={(event) => handleChange("slug", event.target.value)}
                  placeholder="Se genera automaticamente si lo dejas vacio"
                />
              </label>
              <label className="text-sm text-ink-700">
                Region
                <select
                  className="input-glass mt-2 w-full"
                  value={draft.region_id}
                  onChange={(event) => {
                    handleChange("region_id", event.target.value);
                    handleChange("community_id", "");
                  }}
                >
                  <option value="">Selecciona una region</option>
                  {taxonomy.regions.map((region) => (
                    <option key={region.id} value={region.id}>
                      {region.name}
                    </option>
                  ))}
                </select>
              </label>
              <label className="text-sm text-ink-700">
                Comunidad
                <select
                  className="input-glass mt-2 w-full"
                  value={draft.community_id}
                  onChange={(event) => handleChange("community_id", event.target.value)}
                >
                  <option value="">Sin comunidad</option>
                  {availableCommunities.map((community) => (
                    <option key={community.id} value={community.id}>
                      {community.name}
                    </option>
                  ))}
                </select>
              </label>
              <label className="text-sm text-ink-700">
                Departamento (opcional)
                <input
                  className="input-glass mt-2 w-full"
                  value={draft.department}
                  onChange={(event) => handleChange("department", event.target.value)}
                />
              </label>
              <div className="text-sm text-ink-700">
                Ruta de categoria
                <div className="mt-2 rounded-2xl border border-white/60 bg-white/60 px-4 py-3 text-xs text-ink-600">
                  {categoryPathPreview || "Completa region y comunidad"}
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <label className="text-sm text-ink-700">
                Tags (separados por coma)
                <input
                  className="input-glass mt-2 w-full"
                  value={draft.tags_raw}
                  onChange={(event) => handleChange("tags_raw", event.target.value)}
                  placeholder="agua, fuego, animal"
                />
              </label>
              <label className="text-sm text-ink-700">
                Palabra foco
                <input
                  className="input-glass mt-2 w-full"
                  value={draft.focus_keyword}
                  onChange={(event) => handleChange("focus_keyword", event.target.value)}
                />
              </label>
              <label className="text-sm text-ink-700 md:col-span-2">
                Keywords foco (separados por | o ,)
                <input
                  className="input-glass mt-2 w-full"
                  value={draft.focus_keywords_raw}
                  onChange={(event) => handleChange("focus_keywords_raw", event.target.value)}
                />
              </label>
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <h3 className="font-display text-lg text-ink-900">Relato principal</h3>
            <p className="mt-2 text-sm text-ink-600">
              Describe cada seccion del mito para componer el contenido final.
            </p>

            <div className="mt-6 space-y-4">
              <label className="text-sm text-ink-700">
                Mito (relato)
                <textarea
                  className="input-glass mt-2 w-full min-h-[200px]"
                  value={draft.mito}
                  onChange={(event) => handleChange("mito", event.target.value)}
                />
              </label>
              <label className="text-sm text-ink-700">
                Historia
                <textarea
                  className="input-glass mt-2 w-full min-h-[140px]"
                  value={draft.historia}
                  onChange={(event) => handleChange("historia", event.target.value)}
                />
              </label>
              <label className="text-sm text-ink-700">
                Versiones
                <textarea
                  className="input-glass mt-2 w-full min-h-[140px]"
                  value={draft.versiones}
                  onChange={(event) => handleChange("versiones", event.target.value)}
                />
              </label>
              <label className="text-sm text-ink-700">
                Lección
                <textarea
                  className="input-glass mt-2 w-full min-h-[120px]"
                  value={draft.leccion}
                  onChange={(event) => handleChange("leccion", event.target.value)}
                />
              </label>
              <label className="text-sm text-ink-700">
                Similitudes
                <textarea
                  className="input-glass mt-2 w-full min-h-[120px]"
                  value={draft.similitudes}
                  onChange={(event) => handleChange("similitudes", event.target.value)}
                />
              </label>
              <label className="text-sm text-ink-700">
                Excerpt
                <textarea
                  className="input-glass mt-2 w-full min-h-[80px]"
                  value={draft.excerpt}
                  onChange={(event) => handleChange("excerpt", event.target.value)}
                />
              </label>
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <h3 className="font-display text-lg text-ink-900">SEO y ubicacion</h3>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <label className="text-sm text-ink-700 md:col-span-2">
                SEO Title
                <input
                  className="input-glass mt-2 w-full"
                  value={draft.seo_title}
                  onChange={(event) => handleChange("seo_title", event.target.value)}
                />
              </label>
              <label className="text-sm text-ink-700 md:col-span-2">
                SEO Description
                <textarea
                  className="input-glass mt-2 w-full min-h-[100px]"
                  value={draft.seo_description}
                  onChange={(event) => handleChange("seo_description", event.target.value)}
                />
              </label>
              <label className="text-sm text-ink-700">
                Latitud
                <input
                  className="input-glass mt-2 w-full"
                  value={draft.latitude}
                  onChange={(event) => handleChange("latitude", event.target.value)}
                  placeholder="Ej: 4.570868"
                />
              </label>
              <label className="text-sm text-ink-700">
                Longitud
                <input
                  className="input-glass mt-2 w-full"
                  value={draft.longitude}
                  onChange={(event) => handleChange("longitude", event.target.value)}
                  placeholder="Ej: -74.297333"
                />
              </label>
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <h3 className="font-display text-lg text-ink-900">Imagen principal</h3>

            <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_1.2fr]">
              <ImageSlot
                src={draft.image_url}
                alt={draft.title}
                size="wide"
                label="Imagen pendiente"
              />
              <div className="space-y-4">
                <label className="text-sm text-ink-700">
                  Prompt imagen (16:9)
                  <textarea
                    className="input-glass mt-2 w-full min-h-[120px]"
                    value={draft.image_prompt}
                    onChange={(event) => handleChange("image_prompt", event.target.value)}
                  />
                </label>
                <label className="text-sm text-ink-700">
                  URL imagen (opcional)
                  <input
                    className="input-glass mt-2 w-full"
                    value={draft.image_url}
                    onChange={(event) => handleChange("image_url", event.target.value)}
                  />
                </label>
                <label className="flex items-center gap-3 text-sm text-ink-700">
                  <input
                    type="checkbox"
                    checked={draft.content_formatted}
                    onChange={(event) =>
                      handleChange("content_formatted", event.target.checked)
                    }
                  />
                  Contenido formateado
                </label>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <h3 className="font-display text-lg text-ink-900">Contenido final</h3>
            <p className="mt-2 text-sm text-ink-600">
              Vista previa del contenido que se guarda en la base de datos.
            </p>
            <pre className="mt-4 whitespace-pre-wrap rounded-2xl border border-white/60 bg-white/70 p-4 text-xs text-ink-700">
              {contentPreview || "Completa el relato para ver el contenido."}
            </pre>
          </GlassCard>
        </div>
      </section>
    </AdminLayout>
  );
}
