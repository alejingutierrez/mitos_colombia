"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import AdminLayout from "../../../components/AdminLayout";
import { GlassCard } from "../../../components/ui/GlassCard";
import { Button } from "../../../components/ui/Button";
import { cn } from "../../../lib/utils";

const DEFAULT_BOOK_TITLE = "Mitos editoriales de Colombia";
const PAGE_WIDTH_PX = 794;
const PAGE_HEIGHT_PX = 1123;
const PAGE_CHAR_LIMIT = 2800;
const BODY_CHUNK_LIMIT = 1800;
const HEADING_WEIGHT = 40;
const TITLE_WEIGHT = 80;
const BODY_WEIGHT = 20;
const MIN_FILL_CHARS = 220;

function normalizeHeading(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function parseContentSections(content) {
  const sections = {
    mito: "",
    historia: "",
    versiones: "",
    leccion: "",
    similitudes: "",
  };
  const lines = String(content || "").split(/\r?\n/);
  let current = "mito";

  lines.forEach((line) => {
    const normalized = normalizeHeading(line);
    if (normalized === "mito") {
      current = "mito";
      return;
    }
    if (normalized === "historia") {
      current = "historia";
      return;
    }
    if (normalized === "versiones") {
      current = "versiones";
      return;
    }
    if (normalized === "leccion" || normalized === "lecciones") {
      current = "leccion";
      return;
    }
    if (normalized === "similitudes" || normalized === "similitud") {
      current = "similitudes";
      return;
    }
    const trimmed = line.trim();
    if (!trimmed) return;
    sections[current] = sections[current]
      ? `${sections[current]} ${trimmed}`
      : trimmed;
  });

  return sections;
}

function resolveMythSections(myth) {
  const parsed = parseContentSections(myth.content || "");
  return {
    mito: myth.mito || parsed.mito || myth.content || "",
    historia: myth.historia || parsed.historia || "",
    leccion: myth.leccion || parsed.leccion || "",
    similitudes: myth.similitudes || parsed.similitudes || "",
  };
}

function splitIntoSentences(text) {
  const cleaned = String(text || "").replace(/\s+/g, " ").trim();
  if (!cleaned) return [];
  const sentences = [];
  let buffer = "";
  for (let i = 0; i < cleaned.length; i += 1) {
    const char = cleaned[i];
    buffer += char;
    if (char === "." || char === "!" || char === "?") {
      const trimmed = buffer.trim();
      if (trimmed) sentences.push(trimmed);
      buffer = "";
    }
  }
  const remaining = buffer.trim();
  if (remaining) sentences.push(remaining);
  return sentences;
}

function splitText(text, maxChars) {
  const cleaned = String(text || "").replace(/\s+/g, " ").trim();
  if (!cleaned) return [];
  if (cleaned.length <= maxChars) return [cleaned];

  const sentences = splitIntoSentences(cleaned);
  if (!sentences.length) {
    return [cleaned.slice(0, maxChars), cleaned.slice(maxChars)];
  }

  const chunks = [];
  let current = "";
  sentences.forEach((sentence) => {
    if (!sentence) return;
    const next = current ? `${current} ${sentence}` : sentence;
    if (next.length > maxChars && current) {
      chunks.push(current);
      current = sentence;
      return;
    }
    current = next;
  });
  if (current) chunks.push(current);
  return chunks;
}

function splitBodyToFit(text, maxChars) {
  const cleaned = String(text || "").replace(/\s+/g, " ").trim();
  if (!cleaned) return { fit: "", rest: "" };
  if (cleaned.length <= maxChars) {
    return { fit: cleaned, rest: "" };
  }
  const sentences = splitIntoSentences(cleaned);
  if (!sentences.length) {
    return {
      fit: cleaned.slice(0, maxChars).trim(),
      rest: cleaned.slice(maxChars).trim(),
    };
  }
  let fit = "";
  let index = 0;
  while (index < sentences.length) {
    const sentence = sentences[index];
    if (!sentence) {
      index += 1;
      continue;
    }
    const next = fit ? `${fit} ${sentence}` : sentence;
    if (next.length > maxChars) break;
    fit = next;
    index += 1;
  }
  if (!fit) {
    return {
      fit: cleaned.slice(0, maxChars).trim(),
      rest: cleaned.slice(maxChars).trim(),
    };
  }
  const rest = sentences.slice(index).join(" ").trim();
  return { fit, rest };
}

function buildTextBlocks(myth) {
  const sections = resolveMythSections(myth);
  const blocks = [];
  const mitoChunks = splitText(sections.mito, BODY_CHUNK_LIMIT);
  const historiaChunks = splitText(sections.historia, BODY_CHUNK_LIMIT);
  const leccionChunks = splitText(sections.leccion, BODY_CHUNK_LIMIT);
  const similitudesChunks = splitText(sections.similitudes, BODY_CHUNK_LIMIT);

  blocks.push({ type: "title", text: myth.title || "" });
  mitoChunks.forEach((chunk) => blocks.push({ type: "body", text: chunk }));

  if (historiaChunks.length) {
    blocks.push({ type: "heading", text: "Historia" });
    historiaChunks.forEach((chunk) => blocks.push({ type: "body", text: chunk }));
  }

  if (leccionChunks.length) {
    blocks.push({ type: "heading", text: "Leccion" });
    leccionChunks.forEach((chunk) => blocks.push({ type: "body", text: chunk }));
  }

  if (similitudesChunks.length) {
    blocks.push({ type: "heading", text: "Similitudes" });
    similitudesChunks.forEach((chunk) => blocks.push({ type: "body", text: chunk }));
  }

  return blocks;
}

function paginateBlocks(blocks, maxChars) {
  const pages = [];
  let current = [];
  let count = 0;

  for (let i = 0; i < blocks.length; i += 1) {
    const block = blocks[i];
    const weight =
      block.type === "title"
        ? TITLE_WEIGHT
        : block.type === "heading"
        ? HEADING_WEIGHT
        : BODY_WEIGHT;
    let blockSize = block.text.length + weight;
    let remaining = maxChars - count;

    if (block.type === "heading") {
      const next = blocks[i + 1];
      const nextSize = next?.text ? next.text.length + BODY_WEIGHT : 0;
      if (current.length && blockSize + nextSize > remaining) {
        pages.push(current);
        current = [];
        count = 0;
        remaining = maxChars;
      }
    } else if (block.type === "body" && current.length && blockSize > remaining) {
      if (remaining > MIN_FILL_CHARS) {
        const { fit, rest } = splitBodyToFit(block.text, remaining - BODY_WEIGHT);
        if (fit) {
          current.push({ type: "body", text: fit });
          pages.push(current);
          current = [];
          count = 0;
          if (rest) {
            blocks.splice(i + 1, 0, { type: "body", text: rest });
          }
          continue;
        }
      }
      pages.push(current);
      current = [];
      count = 0;
      remaining = maxChars;
      blockSize = block.text.length + weight;
    } else if (current.length && blockSize > remaining) {
      pages.push(current);
      current = [];
      count = 0;
    }

    current.push(block);
    count += blockSize;
  }

  if (current.length) pages.push(current);
  return pages;
}

function buildBookPages(myths, bookTitle) {
  const pages = [];
  let pageNumber = 1;

  const pushPage = (page) => {
    pages.push({ ...page, pageNumber });
    pageNumber += 1;
  };

  pushPage({ type: "cover", title: bookTitle });
  pushPage({ type: "blank" });
  pushPage({ type: "book-title", title: bookTitle });
  pushPage({ type: "blank" });

  myths.forEach((myth) => {
    if (pageNumber % 2 === 0) {
      pushPage({ type: "blank" });
    }

    pushPage({
      type: "region",
      region: myth.region || "Colombia",
      title: myth.title,
    });

    if (pageNumber % 2 === 1) {
      pushPage({ type: "blank" });
    }

    pushPage({
      type: "image",
      imageUrl: myth.vertical_image_url || myth.image_url || "",
      title: myth.title,
    });

    if (pageNumber % 2 === 0) {
      pushPage({ type: "blank" });
    }

    const blocks = buildTextBlocks(myth);
    const textPages = paginateBlocks(blocks, PAGE_CHAR_LIMIT);
    textPages.forEach((blocksForPage, index) => {
      pushPage({
        type: "text",
        blocks: blocksForPage,
        title: myth.title,
        index,
        total: textPages.length,
      });
    });
  });

  return pages;
}

function buildSpreads(pages) {
  if (!pages.length) return [];
  const spreads = [];
  spreads.push({ single: true, right: pages[0], left: null });
  for (let i = 1; i < pages.length; i += 2) {
    spreads.push({
      single: false,
      left: pages[i] || null,
      right: pages[i + 1] || null,
    });
  }
  return spreads;
}

function PageContent({ page }) {
  if (!page || page.type === "blank") {
    return (
      <div className="h-full w-full rounded-[18px] bg-[radial-gradient(circle_at_top,#fffaf2_0%,#f8f1e7_55%,#f0e8dd_100%)]" />
    );
  }

  if (page.type === "cover") {
    return (
      <div className="relative h-full w-full overflow-hidden rounded-[18px] bg-[linear-gradient(135deg,#1f3a32_0%,#0f2b24_45%,#2b1f16_100%)] text-white">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,#f7d38c_0%,transparent_55%)]" />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_80%_80%,#6ee7b7_0%,transparent_60%)]" />
        <div className="relative z-10 flex h-full flex-col justify-between p-10">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-ember-400">Edicion editorial</p>
            <h2 className="mt-4 font-display text-4xl leading-tight">{page.title}</h2>
          </div>
          <div>
            <div className="h-px w-16 bg-ember-400/70" />
            <p className="mt-4 text-sm text-ember-100/80">Mitos de Colombia</p>
          </div>
        </div>
      </div>
    );
  }

  if (page.type === "book-title") {
    return (
      <div className="h-full w-full rounded-[18px] bg-[radial-gradient(circle_at_top,#fffaf2_0%,#f8f1e7_55%,#f0e8dd_100%)] p-10 text-ink-900">
        <div className="flex h-full flex-col items-center justify-center text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-jungle-600">Libro editorial</p>
          <h2 className="mt-6 font-display text-4xl">{page.title}</h2>
          <p className="mt-4 text-sm text-ink-500">Coleccion de relatos reeditados</p>
        </div>
      </div>
    );
  }

  if (page.type === "region") {
    return (
      <div className="h-full w-full rounded-[18px] bg-[radial-gradient(circle_at_top,#fffaf2_0%,#f8f1e7_55%,#f0e8dd_100%)] p-10 text-ink-900">
        <div className="flex h-full flex-col justify-center">
          <p className="text-xs uppercase tracking-[0.4em] text-river-600">Region</p>
          <h2 className="mt-6 font-display text-3xl">{page.region}</h2>
          <p className="mt-4 text-sm text-ink-500">{page.title}</p>
        </div>
      </div>
    );
  }

  if (page.type === "image") {
    return (
      <div className="h-full w-full rounded-[18px] bg-[radial-gradient(circle_at_top,#fffaf2_0%,#f8f1e7_55%,#f0e8dd_100%)] p-6">
        <div className="flex h-full flex-col items-center justify-center gap-4">
          <div className="aspect-[9/16] w-full overflow-hidden rounded-[16px] bg-ink-900/10 shadow">
            {page.imageUrl ? (
              <img
                src={page.imageUrl}
                alt={page.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-sm text-ink-500">
                Sin imagen vertical
              </div>
            )}
          </div>
          <p className="text-xs uppercase tracking-[0.3em] text-ink-500">{page.title}</p>
        </div>
      </div>
    );
  }

  if (page.type === "text") {
    return (
      <div className="h-full w-full rounded-[18px] bg-[radial-gradient(circle_at_top,#fffaf2_0%,#f8f1e7_55%,#f0e8dd_100%)] p-10 text-ink-900">
        <div className="space-y-4">
          {page.blocks.map((block, idx) => {
            if (block.type === "title") {
              return (
                <h2 key={idx} className="font-display text-[28px] font-bold leading-tight">
                  {block.text}
                </h2>
              );
            }
            if (block.type === "heading") {
              return (
                <h3 key={idx} className="text-[20px] italic text-ink-700">
                  {block.text}
                </h3>
              );
            }
            return (
              <p key={idx} className="text-[11px] leading-[1.65] text-ink-800">
                {block.text}
              </p>
            );
          })}
        </div>
      </div>
    );
  }

  return null;
}

export default function EditorialBookPage() {
  const router = useRouter();
  const [auth, setAuth] = useState(null);
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [bookTitle, setBookTitle] = useState(DEFAULT_BOOK_TITLE);
  const [spreadIndex, setSpreadIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState("next");
  const [bookScale, setBookScale] = useState(1);
  const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 });
  const viewportRef = useRef(null);

  const fetchPage = async (token, pageNumber = 1) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/admin/editorial-book?page=${pageNumber}&limit=40`, {
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
        throw new Error("No se pudo cargar el libro editorial");
      }

      const data = await response.json();
      setTotal(data.total || 0);
      if (pageNumber === 1) {
        setItems(data.items || []);
      } else {
        setItems((prev) => [...prev, ...(data.items || [])]);
      }
      setPage(pageNumber);
    } catch (error) {
      console.error("Error loading editorial book:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const savedAuth = localStorage.getItem("admin_auth");
    if (!savedAuth) {
      router.push("/admin");
      return;
    }
    setAuth(savedAuth);
    fetchPage(savedAuth, 1);
  }, [router]);

  const pages = useMemo(() => buildBookPages(items, bookTitle), [items, bookTitle]);
  const spreads = useMemo(() => buildSpreads(pages), [pages]);
  const currentSpread = spreads[spreadIndex] || null;
  const totalSpreads = spreads.length;
  const canPrev = spreadIndex > 0;
  const canNext = spreadIndex < totalSpreads - 1;
  const hasMore = items.length < total;
  const naturalWidth = currentSpread?.single ? PAGE_WIDTH_PX : PAGE_WIDTH_PX * 2;
  const naturalHeight = PAGE_HEIGHT_PX;
  const scaledWidth = Math.max(1, Math.round(naturalWidth * bookScale));
  const scaledHeight = Math.max(1, Math.round(naturalHeight * bookScale));

  useEffect(() => {
    if (!viewportRef.current) return;
    const element = viewportRef.current;
    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      const { width, height } = entry.contentRect;
      setViewportSize({ width, height });
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const { width, height } = viewportSize;
    if (!width || !height) return;
    const targetWidth = currentSpread?.single ? PAGE_WIDTH_PX : PAGE_WIDTH_PX * 2;
    const fitScale = Math.min(width / targetWidth, height / PAGE_HEIGHT_PX, 1);
    const heightScale = Math.min(height / PAGE_HEIGHT_PX, 1);
    const scale = currentSpread?.single ? fitScale : heightScale;
    setBookScale(Number.isFinite(scale) && scale > 0 ? scale : 1);
  }, [viewportSize, currentSpread]);

  const goPrev = () => {
    if (!canPrev) return;
    setFlipDirection("prev");
    setIsFlipping(true);
    setTimeout(() => {
      setSpreadIndex((prev) => Math.max(prev - 1, 0));
      setIsFlipping(false);
    }, 420);
  };

  const goNext = () => {
    if (!canNext) return;
    setFlipDirection("next");
    setIsFlipping(true);
    setTimeout(() => {
      setSpreadIndex((prev) => Math.min(prev + 1, totalSpreads - 1));
      setIsFlipping(false);
    }, 420);
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="font-display text-4xl text-ink-900">Libro editorial</h1>
          <p className="mt-2 text-ink-600">
            Vista de lectura tipo libro con mitos editoriales y paginas volteables.
          </p>
        </div>

        <GlassCard className="p-6 space-y-5">
          <div className="flex flex-col lg:flex-row gap-4 lg:items-end lg:justify-between">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-[0.3em] text-ink-500">
                Nombre del libro
              </label>
              <input
                value={bookTitle}
                onChange={(event) => setBookTitle(event.target.value)}
                className="w-full max-w-xl rounded-2xl border border-ink-500/20 bg-white/80 px-4 py-3 text-sm text-ink-900 focus:border-jungle-500 focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={goPrev} disabled={!canPrev}>
                Pagina anterior
              </Button>
              <Button variant="primary" size="sm" onClick={goNext} disabled={!canNext}>
                Pasar pagina
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-ink-600">
            <span>{items.length} mitos editoriales cargados</span>
            <span>•</span>
            <span>{pages.length} paginas</span>
            <span>•</span>
            <span>
              Spread {Math.min(spreadIndex + 1, totalSpreads)} de {totalSpreads}
            </span>
          </div>

          {hasMore && (
            <div>
              <Button
                variant="subtle"
                size="sm"
                onClick={() => auth && fetchPage(auth, page + 1)}
                disabled={loading}
              >
                Cargar mas mitos
              </Button>
            </div>
          )}
        </GlassCard>

        <div className="relative">
          {loading && (
            <div className="absolute inset-0 z-10 flex items-center justify-center rounded-[32px] bg-white/70 text-sm text-ink-600">
              Cargando libro...
            </div>
          )}

          <div className="book-shell">
            <div
              ref={viewportRef}
              className={cn(
                "book-viewport transition-transform duration-300",
                !currentSpread?.single && "book-viewport-scroll",
                isFlipping && flipDirection === "next" && "book-flip-next",
                isFlipping && flipDirection === "prev" && "book-flip-prev"
              )}
            >
              {currentSpread?.single ? (
                <div
                  className="book-zoom"
                  style={{ width: `${scaledWidth}px`, height: `${scaledHeight}px` }}
                >
                  <div
                    className="book-canvas book-single"
                    style={{
                      width: `${naturalWidth}px`,
                      height: `${naturalHeight}px`,
                      transform: `scale(${bookScale})`,
                    }}
                  >
                    <div className="book-page">
                      <PageContent page={currentSpread.right} />
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className="book-zoom"
                  style={{ width: `${scaledWidth}px`, height: `${scaledHeight}px` }}
                >
                  <div
                    className="book-canvas book-spread"
                    style={{
                      width: `${naturalWidth}px`,
                      height: `${naturalHeight}px`,
                      transform: `scale(${bookScale})`,
                    }}
                  >
                    <div className="book-page">
                      <PageContent page={currentSpread?.left} />
                    </div>
                    <div className="book-page">
                      <PageContent page={currentSpread?.right} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .book-shell {
          display: flex;
          justify-content: center;
        }
        .book-viewport {
          width: 100%;
          max-width: 1280px;
          height: min(82vh, 1200px);
          min-height: 520px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .book-viewport.book-viewport-scroll {
          overflow-x: auto;
          overflow-y: hidden;
          justify-content: flex-start;
          padding-bottom: 12px;
          scroll-snap-type: x mandatory;
        }
        .book-canvas {
          display: flex;
          align-items: stretch;
          justify-content: center;
          border-radius: 28px;
          overflow: hidden;
          background: linear-gradient(120deg, rgba(255, 255, 255, 0.8), rgba(252, 250, 245, 0.95));
          box-shadow: 0 24px 70px rgba(12, 20, 16, 0.18);
          border: 1px solid rgba(18, 32, 28, 0.08);
          transform-origin: top left;
          flex: 0 0 auto;
        }
        .book-zoom {
          display: block;
          flex-shrink: 0;
          scroll-snap-align: center;
        }
        .book-spread {
          gap: 0;
        }
        .book-single {
          justify-content: center;
        }
        .book-page {
          width: ${PAGE_WIDTH_PX}px;
          height: ${PAGE_HEIGHT_PX}px;
          padding: 42px 40px;
          box-sizing: border-box;
          overflow: hidden;
        }
        .book-flip-next {
          animation: flipNext 0.45s ease;
        }
        .book-flip-prev {
          animation: flipPrev 0.45s ease;
        }
        @keyframes flipNext {
          0% {
            transform: perspective(1200px) rotateY(0deg);
          }
          45% {
            transform: perspective(1200px) rotateY(-8deg);
          }
          100% {
            transform: perspective(1200px) rotateY(0deg);
          }
        }
        @keyframes flipPrev {
          0% {
            transform: perspective(1200px) rotateY(0deg);
          }
          45% {
            transform: perspective(1200px) rotateY(8deg);
          }
          100% {
            transform: perspective(1200px) rotateY(0deg);
          }
        }
      `}</style>
    </AdminLayout>
  );
}
