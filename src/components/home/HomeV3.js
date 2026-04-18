"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SmartSearch from "../SmartSearch";
import PaperCutArt from "../PaperCutArt";

function Reveal({ children, delay = 0, className = "", style, as: Tag = "div" }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`v3-reveal ${inView ? "is-in" : ""} ${delay ? `v3-delay-${delay}` : ""} ${className}`}
      style={style}
    >
      {children}
    </Tag>
  );
}

function SectionNumber({ n }) {
  return (
    <div className="v3-num" aria-hidden="true">
      <span>∘ {String(n).padStart(2, "0")}</span>
    </div>
  );
}

function SectionIntro({ eyebrow, title, body, align = "left", onDark = false }) {
  return (
    <div
      className={`v3-intro ${align === "center" ? "v3-intro-center" : ""} ${onDark ? "v3-intro-dark" : ""}`}
    >
      <span className="v3-rule-accent" />
      {eyebrow ? <span className="v3-eyebrow">{eyebrow}</span> : null}
      {title ? <h2 className="v3-title">{title}</h2> : null}
      {body ? <p className="v3-body">{body}</p> : null}
    </div>
  );
}

function slugify(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function tintFromCategory(cat, fallback = "jungle") {
  const map = {
    origen: "jungle",
    fundacional: "river",
    criaturas: "ember",
    memoria: "ember",
    cosmogonia: "river",
    cosmogonía: "river",
    agua: "river",
    etiologico: "jungle",
    etiológico: "jungle",
  };
  const key = String(cat || "").toLowerCase().split("/")[0].trim();
  return map[key] || fallback;
}

function HeroCarousel({ myths }) {
  const featured = myths.slice(0, 3);
  const [idx, setIdx] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto || featured.length <= 1) return;
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % featured.length);
    }, 6500);
    return () => clearInterval(t);
  }, [auto, featured.length]);

  // Swipe detection
  const touchStart = useRef(null);
  const onTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStart.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(dx) > 48) {
      setAuto(false);
      setIdx((i) =>
        dx < 0 ? (i + 1) % featured.length : (i - 1 + featured.length) % featured.length
      );
    }
    touchStart.current = null;
  };

  if (!featured.length) return null;
  const current = featured[idx];
  const tint = tintFromCategory(current.category_path || current.category);

  const [firstPart, ...restTitle] = (current.title || "").split(",");
  const secondPart = restTitle.join(",").trim();

  return (
    <section
      className="v3-section v3-hero"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <SectionNumber n={0} />
      <div className="v3-hero-grid">
        <div className="v3-hero-copy" key={`txt-${idx}`}>
          <Reveal>
            <div className="v3-eyebrow v3-hero-eyebrow">
              <span className="v3-rule-accent v3-rule-accent--sm" />
              <span>
                Mito destacado · Nº 0{idx + 1} / 0{featured.length}
              </span>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="v3-hero-title">
              {firstPart}
              {secondPart ? "," : ""}
              {secondPart ? (
                <>
                  <br />
                  <em className="v3-hero-title-em">{secondPart}</em>
                </>
              ) : null}
            </h1>
          </Reveal>
          {current.excerpt ? (
            <Reveal delay={2}>
              <p className="v3-hero-excerpt">{current.excerpt}</p>
            </Reveal>
          ) : null}
          <Reveal delay={2}>
            <div className="v3-hero-meta">
              {current.region ? (
                <span>
                  Región · <strong>{current.region}</strong>
                </span>
              ) : null}
              {current.community ? (
                <>
                  <span className="v3-dot" />
                  <span>
                    Pueblo · <strong>{current.community}</strong>
                  </span>
                </>
              ) : null}
              {current.read ? (
                <>
                  <span className="v3-dot" />
                  <span>{current.read}</span>
                </>
              ) : null}
            </div>
          </Reveal>
          <Reveal delay={3}>
            <div className="v3-hero-ctas">
              <Link
                href={`/mitos/${current.slug}`}
                className="v3-btn v3-btn-primary"
              >
                Leer el mito
              </Link>
              <Link href="/mitos" className="v3-btn v3-btn-outline">
                Explorar colección
              </Link>
            </div>
          </Reveal>

          {featured.length > 1 ? (
            <div className="v3-hero-dots">
              {featured.map((m, i) => (
                <button
                  key={m.slug || i}
                  type="button"
                  onClick={() => {
                    setIdx(i);
                    setAuto(false);
                  }}
                  className={`v3-hero-dot ${i === idx ? "is-on" : ""}`}
                  aria-label={`Mito ${i + 1}`}
                >
                  <span className="v3-hero-dot-line" />
                  <span>0{i + 1}</span>
                </button>
              ))}
            </div>
          ) : null}
        </div>

        <div className="v3-hero-art-wrap">
          <Link
            href={`/mitos/${current.slug}`}
            className="v3-hero-art"
            key={`art-${idx}`}
          >
            {current.image_url ? (
              <Image
                src={current.image_url}
                alt={current.title}
                fill
                priority
                sizes="(max-width: 900px) 100vw, 50vw"
                className="v3-hero-img"
              />
            ) : (
              <PaperCutArt
                seed={idx + 1}
                tint={tint}
                variant="portrait"
                style={{ width: "100%", height: "100%", display: "block" }}
              />
            )}
            <div className="v3-hero-art-overlay" />
            <div className="v3-hero-art-caption">
              <div>
                <div className="v3-eyebrow v3-hero-art-eyebrow">
                  Mito · {current.region || "Colombia"}
                </div>
                <div className="v3-hero-art-title">{current.title}</div>
              </div>
              <div className="v3-hero-art-num">0{idx + 1}</div>
            </div>
            <span className="v3-corner v3-corner-tl" />
            <span className="v3-corner v3-corner-tr" />
            <span className="v3-corner v3-corner-bl" />
            <span className="v3-corner v3-corner-br" />
          </Link>
        </div>
      </div>

      <Reveal delay={3}>
        <div className="v3-search">
          <SmartSearch />
        </div>
      </Reveal>
    </section>
  );
}

function Stats({ stats }) {
  return (
    <section className="v3-section v3-stats-wrap">
      <SectionNumber n={1} />
      <div className="v3-wrap">
        <Reveal>
          <SectionIntro
            eyebrow="El archivo en números"
            title={
              <>
                Un territorio narrado a tres voces
                <span className="v3-accent-dot">.</span>
              </>
            }
            body="Cada historia se organiza por región, comunidad y categoría para que puedas entrar al archivo por donde mejor te llame."
          />
        </Reveal>
        <div className="v3-stats-grid">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i + 1}>
              <div className="v3-stat-card">
                <div className="v3-stat-ghost">{s.value}</div>
                <span className="v3-eyebrow">
                  0{i + 1} / 0{stats.length}
                </span>
                <div>
                  <div className="v3-stat-value">{s.value}</div>
                  <div className="v3-stat-label">{s.label}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Routes({ routes }) {
  const tints = ["river", "jungle", "ember", "river", "ember", "jungle", "river", "ember"];
  const grads = [
    ["#1e785e", "#23629e", "#184e84"],
    ["#0c4637", "#1e785e", "#125c48"],
    ["#3a1f0d", "#9e6c30", "#bd8642"],
    ["#122a48", "#184e84", "#23629e"],
    ["#7e5424", "#bd8642", "#d8aa62"],
    ["#0c4637", "#125c48", "#1e785e"],
  ];
  const list = routes.slice(0, 6);
  return (
    <section className="v3-section v3-routes-wrap">
      <SectionNumber n={2} />
      <div className="v3-wrap">
        <Reveal>
          <div className="v3-section-head">
            <SectionIntro
              eyebrow="Rutas temáticas"
              title={
                <>
                  Cruza el país por <em className="v3-em">obsesiones</em>.
                </>
              }
              body="Colecciones curadas para entrar al archivo por un hilo y salir con una cartografía."
            />
            <Link href="/rutas" className="v3-link v3-more">
              Ver todas las rutas <span className="v3-arrow">→</span>
            </Link>
          </div>
        </Reveal>
        <div className="v3-routes-grid">
          {list.map((r, i) => {
            const tint = r.accent && r.accent !== "ink" ? r.accent : tints[i % tints.length];
            const grad = grads[i % grads.length];
            return (
              <Reveal key={r.slug} delay={(i % 3) + 1}>
                <Link href={`/rutas/${r.slug}`} className="v3-link v3-route-card">
                  <div
                    className="v3-route-bg"
                    style={{
                      background: `linear-gradient(155deg, ${grad[0]} 0%, ${grad[1]} 55%, ${grad[2]} 100%)`,
                    }}
                  />
                  <div className="v3-route-art">
                    {r.preview?.image_url ? (
                      <Image
                        src={r.preview.image_url}
                        alt={r.title}
                        fill
                        sizes="(max-width: 900px) 100vw, 33vw"
                        className="v3-route-img"
                      />
                    ) : (
                      <PaperCutArt
                        seed={i + 7}
                        tint={tint === "river" || tint === "ember" ? tint : "jungle"}
                        variant="portrait"
                        style={{ width: "100%", height: "100%" }}
                      />
                    )}
                  </div>
                  <div className="v3-route-overlay" />
                  <div className="v3-route-top">
                    <span>Ruta · 0{i + 1}</span>
                    {r.mythCount ? (
                      <span className="v3-route-count">{r.mythCount} mitos</span>
                    ) : null}
                  </div>
                  <div className="v3-route-bottom">
                    {r.tone ? <div className="v3-route-tone">{r.tone}</div> : null}
                    <h3 className="v3-route-title">{r.title}</h3>
                    {r.detail ? <p className="v3-route-detail">{r.detail}</p> : null}
                    <span className="v3-route-cta">
                      Recorrer la ruta <span className="v3-arrow">→</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Gallery({ myths }) {
  const picks = myths.slice(0, 6);
  const spans = [
    [5, "tall"],
    [7, "wide"],
    [6, "tall"],
    [6, "wide"],
    [7, "tall"],
    [5, "wide"],
  ];
  return (
    <section className="v3-section v3-gallery-wrap">
      <SectionNumber n={3} />
      <div className="v3-wrap">
        <Reveal>
          <div className="v3-section-head">
            <SectionIntro
              eyebrow="Galería editorial"
              title={
                <>
                  Mitos como <em className="v3-em">revista ilustrada</em>.
                </>
              }
              body="Cada entrada es un ensayo visual — texto, contexto cultural y una ilustración única."
            />
            <Link href="/mitos" className="v3-link v3-more">
              Ver todos los mitos <span className="v3-arrow">→</span>
            </Link>
          </div>
        </Reveal>
        <div className="v3-gallery-grid">
          {picks.map((m, i) => {
            const [span, shape] = spans[i] || [6, "tall"];
            const tint = tintFromCategory(m.category_path || m.category);
            return (
              <Reveal
                key={m.slug}
                delay={(i % 3) + 1}
                className={`v3-gallery-cell v3-gallery-span-${span}`}
              >
                <Link href={`/mitos/${m.slug}`} className="v3-link v3-gallery-card">
                  <div className={`v3-gallery-art v3-gallery-art--${shape}`}>
                    {m.image_url ? (
                      <Image
                        src={m.image_url}
                        alt={m.title}
                        fill
                        sizes="(max-width: 900px) 100vw, 50vw"
                        className="v3-gallery-img"
                      />
                    ) : (
                      <PaperCutArt
                        seed={i + 3}
                        tint={tint}
                        variant={shape === "tall" ? "portrait" : "landscape"}
                        style={{ width: "100%", height: "100%", display: "block" }}
                      />
                    )}
                    {m.region ? (
                      <div className="v3-gallery-pill">{m.region}</div>
                    ) : null}
                  </div>
                  <div className="v3-gallery-meta">
                    <div className="v3-gallery-kicker">
                      {[m.region, m.community].filter(Boolean).join(" · ")}
                    </div>
                    <h3 className="v3-gallery-title">
                      <span className="v3-title-hover">
                        {m.title}
                        <span className="v3-underline" />
                      </span>
                    </h3>
                    {m.excerpt ? (
                      <p className="v3-gallery-excerpt">{m.excerpt}</p>
                    ) : null}
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Atlas({ regions }) {
  const [hover, setHover] = useState(null);
  const grads = [
    ["#0c4637", "#1e785e"],
    ["#184e84", "#1e785e"],
    ["#122a48", "#23629e"],
    ["#0c4637", "#184e84"],
    ["#7e5424", "#bd8642"],
    ["#23629e", "#d8aa62"],
  ];
  const list = regions.slice(0, 6);
  return (
    <section className="v3-section v3-atlas-wrap">
      <SectionNumber n={4} />
      <div className="v3-wrap">
        <Reveal>
          <SectionIntro
            eyebrow="Atlas territorial"
            title={
              <>
                Seis regiones, una sola <em className="v3-em">memoria</em>.
              </>
            }
            body="Navega el archivo por geografía. Cada región guarda sus propias criaturas, deidades y advertencias."
            align="center"
          />
        </Reveal>
        <div className="v3-atlas-grid">
          {list.map((r, i) => {
            const grad = grads[i % grads.length];
            return (
              <Reveal key={r.slug || r.name} delay={(i % 3) + 1}>
                <Link
                  href={`/regiones/${r.slug || slugify(r.name)}`}
                  className="v3-link v3-atlas-card"
                  onMouseEnter={() => setHover(i)}
                  onMouseLeave={() => setHover(null)}
                >
                  <div
                    className={`v3-atlas-bg ${hover === i ? "is-hot" : ""}`}
                    style={{
                      background: `linear-gradient(135deg, ${grad[0]}, ${grad[1]})`,
                    }}
                  />
                  <div
                    className={`v3-atlas-art ${hover === i ? "is-hot" : ""}`}
                  >
                    {r.image_url ? (
                      <Image
                        src={r.image_url}
                        alt={r.name}
                        fill
                        sizes="(max-width: 900px) 100vw, 33vw"
                        className="v3-atlas-img"
                      />
                    ) : (
                      <PaperCutArt
                        seed={i + 11}
                        tint={i % 2 === 0 ? "jungle" : "river"}
                        variant="landscape"
                        style={{ width: "100%", height: "100%" }}
                      />
                    )}
                  </div>
                  <div className="v3-atlas-overlay" />
                  <div className="v3-atlas-top">
                    <span>Región</span>
                    <span className="v3-italic">
                      {String(i + 1).padStart(2, "0")} / 0{list.length}
                    </span>
                  </div>
                  <div className="v3-atlas-bottom">
                    <div className="v3-atlas-head">
                      <h3>{r.name}</h3>
                      <span>{r.myth_count || 0} mitos</span>
                    </div>
                    {r.description ? (
                      <p className="v3-atlas-desc">{r.description}</p>
                    ) : null}
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Tarot({ cards }) {
  const list = cards.slice(0, 3);
  if (!list.length) return null;
  const positions = ["Pasado", "Presente", "Porvenir"];
  return (
    <section className="v3-section v3-tarot-wrap">
      <SectionNumber n={5} />
      <div className="v3-tarot-bg">
        <PaperCutArt
          seed={5}
          tint="night"
          variant="landscape"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="v3-wrap v3-tarot-inner">
        <Reveal>
          <div className="v3-intro v3-intro-center v3-intro-dark">
            <span className="v3-rule-accent" />
            <span className="v3-eyebrow">Tarot mitológico del día</span>
            <h2 className="v3-title v3-title--huge">
              Tres cartas, tres mitos, un{" "}
              <em className="v3-em v3-em--soft">augurio</em>.
            </h2>
          </div>
        </Reveal>
        <div className="v3-tarot-grid">
          {list.map((t, i) => (
            <Reveal key={t.slug || i} delay={i + 1}>
              <Link
                href={t.slug ? `/tarot/${t.slug}` : "/tarot"}
                className={`v3-tarot-card v3-tarot-card--${i}`}
              >
                <div className="v3-tarot-inner-card">
                  <div className="v3-tarot-head">
                    <span className="v3-italic v3-tarot-roman">
                      {t.roman_numeral || t.numeral || toRoman(i + 1)}
                    </span>
                    <span className="v3-eyebrow">{positions[i]}</span>
                  </div>
                  <div className="v3-tarot-art">
                    {t.image_url ? (
                      <Image
                        src={t.image_url}
                        alt={t.name || t.title}
                        fill
                        sizes="(max-width: 900px) 100vw, 25vw"
                        className="v3-tarot-img"
                      />
                    ) : (
                      <PaperCutArt
                        seed={i + 20}
                        tint={i === 0 ? "river" : i === 1 ? "ember" : "jungle"}
                        variant="landscape"
                        style={{ width: "100%", height: "100%" }}
                      />
                    )}
                  </div>
                  <div className="v3-tarot-foot">
                    <h3>{t.name || t.title}</h3>
                    {t.myth_title ? (
                      <p className="v3-eyebrow">{t.myth_title}</p>
                    ) : null}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="v3-tarot-cta">
          <Link href="/tarot" className="v3-btn v3-btn-ember">
            Ver baraja completa <span className="v3-arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function toRoman(num) {
  const map = [
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];
  let n = num;
  let out = "";
  for (const [v, s] of map) {
    while (n >= v) {
      out += s;
      n -= v;
    }
  }
  return out || "I";
}

function Communities({ communities }) {
  const items = [...communities, ...communities];
  if (!items.length) return null;
  return (
    <section className="v3-section v3-comm-wrap">
      <div className="v3-wrap v3-comm-head">
        <SectionNumber n={6} />
        <Reveal>
          <SectionIntro
            eyebrow="Comunidades portadoras"
            title={
              <>
                Voces que <em className="v3-em">sostienen</em> el archivo.
              </>
            }
            body="Cada mito se cruza con los pueblos que lo guardan. Explora por comunidad para escuchar la diversidad de voces."
          />
        </Reveal>
      </div>
      <Reveal>
        <div className="v3-ticker">
          <div className="v3-ticker-track">
            {items.map((c, i) => (
              <Link
                key={`${c.slug || c.name}-${i}`}
                href={`/comunidades/${c.slug || slugify(c.name)}`}
                className="v3-ticker-item"
              >
                <span className="v3-ticker-name">{c.name}</span>
                {c.region ? (
                  <span className="v3-ticker-region">— {c.region}</span>
                ) : null}
                <span className="v3-ticker-dot" />
              </Link>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function FinalCTA({ total }) {
  return (
    <section className="v3-section v3-final-wrap">
      <div className="v3-wrap v3-final-inner">
        <Reveal>
          <div className="v3-final-grid">
            <div>
              <div className="v3-eyebrow v3-final-eyebrow">Una invitación</div>
              <h2 className="v3-final-title">
                Entra al archivo de <em className="v3-em v3-em--soft">{total || 500}+</em>{" "}
                relatos colombianos.
              </h2>
              <p className="v3-final-body">
                Mitos curados por región, comunidad y tema. Cada día se destaca una
                selección distinta para que vuelvas a descubrir el territorio con otros ojos.
              </p>
              <div className="v3-final-ctas">
                <Link href="/mitos" className="v3-btn v3-btn-ember">
                  Explorar colección completa
                </Link>
                <Link href="/rutas" className="v3-btn v3-btn-ghost">
                  Ver rutas temáticas
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function HomeV3({
  featuredMyths = [],
  galleryMyths = [],
  stats = [],
  regions = [],
  routes = [],
  tarotCards = [],
  communities = [],
  totalMyths = 0,
}) {
  return (
    <div className="v3">
      <div className="v3-ambient" aria-hidden="true">
        <span className="v3-b1" />
        <span className="v3-b2" />
        <span className="v3-b3" />
      </div>
      <div className="v3-grain" aria-hidden="true" />
      <div className="v3-content">
        <HeroCarousel myths={featuredMyths} />
        <Stats stats={stats} />
        <Routes routes={routes} />
        <Gallery myths={galleryMyths} />
        <Atlas regions={regions} />
        <Tarot cards={tarotCards} />
        <Communities communities={communities} />
        <FinalCTA total={totalMyths} />
      </div>
    </div>
  );
}
