"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { trackEvent } from "../../lib/analytics";
import { captureTarotAttribution } from "../../lib/tarot-attribution";
import styles from "./TarotCommerce.module.css";

const CART_KEY = "mitos_tarot_cart_v1";

const SECTION_COMPANION = {
  story: "Conoce por qué es distinta",
  reasons: "Encuentra tu razón para llevarla",
  signature: "Descubre esta forma de recorrerla",
  gallery: "Mira una selección de cartas",
  reflection: "Elige cómo quieres recorrerla",
  facts: "Revisa las condiciones de compra",
  questions: "Resuelve tus preguntas",
  close: "Lleva la baraja contigo",
};

const INTENT_COMPANIONS = {
  purchase: {
    story: "Comprueba cómo está construida",
    reasons: "Valora todo lo que contiene",
    gallery: "Mira cartas reales del corpus",
    reflection: "Imagina cómo la recorrerías",
    facts: "Confirma cada condición",
    questions: "Despeja la última duda",
    close: "Lleva esta baraja contigo",
  },
  gift: {
    story: "Piensa en quien va a recibirla",
    reasons: "Encuentra por qué la recordará",
    gallery: "Imagina la conversación que abre",
    reflection: "Regala una pregunta compartida",
    facts: "Confirma qué vas a regalar",
    questions: "Compra sin dejar dudas",
    close: "Elige un regalo que permanezca",
  },
  souvenir: {
    story: "Continúa el viaje en una historia",
    reasons: "Lleva más que una postal",
    gallery: "Recorre relatos y territorios",
    reflection: "Conserva la memoria del viaje",
    facts: "Comprueba la entrega antes de partir",
    questions: "Aclara cómo llevarla contigo",
    close: "Lleva un archivo de historias",
  },
  reflection: {
    story: "Formula una pregunta más abierta",
    reasons: "Haz espacio para observar",
    gallery: "Elige una imagen para mirar",
    reflection: "Recorre la baraja con cuidado",
    facts: "Decide sin promesas exageradas",
    questions: "Aclara el alcance de la experiencia",
    close: "Haz espacio para otra pregunta",
  },
  art: {
    story: "Reconoce el lenguaje de la serie",
    reasons: "Mira qué sostiene la colección",
    gallery: "Compara la serie carta por carta",
    reflection: "Detente en cada decisión visual",
    facts: "Comprueba la pieza física",
    questions: "Aclara antes de coleccionar",
    close: "Lleva la colección contigo",
  },
  culture: {
    story: "Entra al archivo desde una carta",
    reasons: "Sigue el símbolo hasta el relato",
    gallery: "Abre un mito del corpus",
    reflection: "Profundiza más allá de la imagen",
    facts: "Confirma la baraja que llevas",
    questions: "Resuelve antes de elegir",
    close: "Lleva la baraja y sigue leyendo",
  },
};

function CommerceIcon({ name, size = 22 }) {
  const paths = {
    cart: <><path d="M3.5 5.5h2.2l1.7 9.1h10.1l2-6.2H7" /><circle cx="9.5" cy="18.5" r="1" /><circle cx="17" cy="18.5" r="1" /></>,
    arrow: <path d="M5 12h13m-5-5 5 5-5 5" />,
    plus: <path d="M12 5v14M5 12h14" />,
    minus: <path d="M5 12h14" />,
    close: <path d="m6 6 12 12M18 6 6 18" />,
    trash: <><path d="M5 7h14M9 7V4h6v3m-8 0 1 13h8l1-13M10 10v6m4-6v6" /></>,
    info: <><circle cx="12" cy="12" r="9" /><path d="M12 10v6m0-9.2v.2" /></>,
    lock: <><rect x="5" y="10" width="14" height="10" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></>,
    delivery: <><path d="M3 6h11v11H3zM14 10h3l4 4v3h-7z" /><circle cx="7" cy="19" r="1.6" /><circle cx="18" cy="19" r="1.6" /></>,
    payment: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 9h18M7 15h4" /></>,
    expand: <><path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5" /><path d="m3 8 5-5m8 0 5 5M3 16l5 5m8 0 5-5" /></>,
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

function formatPrice(product, quantity = 1) {
  if (quantity === 0) {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: product.currency,
      maximumFractionDigits: 0,
    }).format(0);
  }
  if (!Number.isFinite(product.priceCop)) return "Precio por confirmar";
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: product.currency,
    maximumFractionDigits: 0,
  }).format(product.priceCop * quantity);
}

function readStoredCart() {
  try {
    const parsed = JSON.parse(localStorage.getItem(CART_KEY) || "null");
    return parsed?.quantity > 0 ? parsed : null;
  } catch {
    return null;
  }
}

function ProductStatus({ product, inverse = false }) {
  return (
    <div className={`${styles.productStatus} ${inverse ? styles.productStatusInverse : ""}`}>
      <CommerceIcon name="info" size={18} />
      <div>
        <strong>{formatPrice(product)}</strong>
        <span>
          {product.commercialReady
            ? product.dispatch
            : "Disponibilidad y despacho por confirmar"}
        </span>
      </div>
    </div>
  );
}

function CommerceHeader({ quantity, onCart }) {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link href="/" className={styles.brand} aria-label="Mitos de Colombia, inicio">
          <span className={styles.brandMark}>M</span>
          <span>Mitos de Colombia</span>
        </Link>
        <nav className={styles.nav} aria-label="Navegación de la tienda">
          <a href="#baraja">La baraja</a>
          <a href="#historia">Historia</a>
          <a href="#arcanos">Arcanos</a>
          <a href="#preguntas">Preguntas</a>
        </nav>
        <button
          className={styles.cartButton}
          type="button"
          onClick={onCart}
          aria-label={`Abrir carrito, ${quantity} ${quantity === 1 ? "producto" : "productos"}`}
        >
          <CommerceIcon name="cart" />
          <span aria-live="polite" aria-atomic="true">{quantity}</span>
        </button>
      </div>
    </header>
  );
}

function ActionButton({ children, variant = "primary", action = "cart", onClick }) {
  const isCartAction = action === "cart";
  return (
    <button
      className={`${styles.actionButton} ${variant === "secondary" ? styles.actionSecondary : ""}`}
      type="button"
      onClick={onClick}
    >
      {isCartAction ? <CommerceIcon name="cart" /> : null}
      <span>{children}</span>
      {!isCartAction ? <CommerceIcon name="arrow" size={19} /> : null}
    </button>
  );
}

function GalleryZoom({ card, onClose }) {
  const closeRef = useRef(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!card) return undefined;
    const previouslyFocused = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab") return;
      const focusable = Array.from(
        dialogRef.current?.querySelectorAll("button:not([disabled]), a[href]") || []
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus?.();
    };
  }, [card, onClose]);

  return (
    <AnimatePresence>
      {card ? (
        <motion.div
          className={styles.galleryZoomLayer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            className={styles.galleryZoomBackdrop}
            aria-label="Cerrar ampliación"
            onClick={onClose}
          />
          <motion.section
            ref={dialogRef}
            className={styles.galleryZoomDialog}
            role="dialog"
            aria-modal="true"
            aria-labelledby="gallery-zoom-title"
            initial={{ opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            <button
              ref={closeRef}
              type="button"
              className={styles.galleryZoomClose}
              onClick={onClose}
              aria-label="Cerrar ampliación"
            >
              <CommerceIcon name="close" />
            </button>
            <div className={styles.galleryZoomImage}>
              <Image
                src={card.image_url}
                alt={`Ampliación de ${card.card_name}`}
                fill
                sizes="(max-width: 820px) 88vw, 54vw"
              />
            </div>
            <div className={styles.galleryZoomCaption}>
              <span>{card.arcana === "major" ? "Arcano mayor" : `Arcano menor${card.suit ? ` · ${card.suit}` : ""}`}</span>
              <h2 id="gallery-zoom-title">{card.card_name}</h2>
              <p>{card.myth_title}</p>
              {card.myth_slug ? (
                <Link href={`/mitos/${card.myth_slug}`} className={styles.goldLink}>
                  Leer el mito completo <CommerceIcon name="arrow" size={18} />
                </Link>
              ) : null}
            </div>
          </motion.section>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function Hero({ variant, product, onAction }) {
  const heroVisual = variant.heroVisual || {
    src: product.image,
    alt: "Visualización provisional del Tarot de Mitos Colombianos",
    status: "provisional",
  };

  return (
    <section className={styles.hero} aria-labelledby="landing-title" data-landing-intent={variant.id}>
      <div
        className={styles.heroMedia}
        data-visual-intent={variant.id}
        data-visual-status={heroVisual.status}
      >
        <Image
          src={heroVisual.src}
          alt={heroVisual.alt}
          fill
          priority
          loading="eager"
          sizes="(max-width: 900px) 100vw, 58vw"
          className={styles.heroImage}
        />
      </div>
      <div className={styles.heroShade} aria-hidden="true" />
      <div className={styles.heroInner}>
        <motion.div
          className={styles.heroCopy}
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className={styles.heroEyebrow}>{variant.eyebrow}</p>
          <h1 id="landing-title">{variant.title}</h1>
          <div className={styles.ornamentLine} aria-hidden="true"><span /></div>
          <p className={styles.heroSubtitle}>{variant.subtitle}</p>
          <p className={styles.heroProof}>{variant.proof}</p>
          <div className={styles.heroActions}>
            <ActionButton action={variant.primaryAction} onClick={() => onAction(variant.primaryAction)}>{variant.primaryCta}</ActionButton>
            <ActionButton action={variant.secondaryAction} variant="secondary" onClick={() => onAction(variant.secondaryAction)}>{variant.secondaryCta}</ActionButton>
          </div>
          <ProductStatus product={product} inverse />
        </motion.div>
        {heroVisual.status === "provisional" ? (
          <p className={styles.provisionalLabel}>Escena editorial provisional · fotografía final pendiente</p>
        ) : null}
      </div>
      <div className={styles.heroBottomMark} aria-hidden="true" />
    </section>
  );
}

function SectionHeading({ index, children, inverse = false }) {
  return (
    <div className={`${styles.sectionHeading} ${inverse ? styles.sectionHeadingInverse : ""}`}>
      <span>{String(index).padStart(2, "0")}</span>
      <i aria-hidden="true" />
      <h2>{children}</h2>
    </div>
  );
}

function StorySection({ variant, featured }) {
  return (
    <section id="historia" data-commerce-section="story" className={styles.storySection}>
      <div className={styles.lightInner}>
        <SectionHeading index={1}>{variant.nextHeading}</SectionHeading>
        <div className={styles.storyGrid}>
          <div className={styles.storyLead}>
            <p>{variant.intro}</p>
            <div className={styles.storyProof}>78 cartas · 78 relaciones editoriales</div>
          </div>
          <div className={styles.featureCardWrap}>
            {featured?.image_url ? (
              <Image
                src={featured.image_url}
                alt={`${featured.card_name}, vinculada con ${featured.myth_title}`}
                width={420}
                height={630}
                sizes="(max-width: 760px) 72vw, 360px"
                className={styles.featureCard}
              />
            ) : (
              <div className={styles.cardFallback}>M</div>
            )}
          </div>
          <div className={styles.anatomyList}>
            {variant.anatomy.map(([title, body], index) => (
              <div key={title} className={styles.anatomyItem}>
                <span>{index + 1}</span>
                <div><h3>{title}</h3><p>{body}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ReasonsSection({ variant }) {
  return (
    <section id="baraja" data-commerce-section="reasons" className={styles.reasonsSection}>
      <div className={styles.lightInner}>
        <SectionHeading index={2}>{variant.reasonsTitle}</SectionHeading>
        <div className={styles.reasonsRail}>
          {variant.reasons.map(([title, body], index) => (
            <motion.article
              key={title}
              className={styles.reason}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.1, duration: 0.55 }}
            >
              <span>{index + 1}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function IntentSignatureSection({ variant, cards, onCart, onDiagnostic }) {
  const { signature } = variant;
  const featured = cards[0] || null;
  const [activeItem, setActiveItem] = useState(null);
  const reflectionCards = cards.slice(0, 3);
  const activeReflectionIndex = activeItem ?? 0;
  const activeReflectionCard = reflectionCards[activeReflectionIndex] || featured;
  const territorialCards = cards
    .filter((card) => card.myth_region || card.myth_community)
    .filter((card, index, list) => {
      const place = `${card.myth_region || ""}|${card.myth_community || ""}`;
      return list.findIndex(
        (candidate) =>
          `${candidate.myth_region || ""}|${candidate.myth_community || ""}` === place
      ) === index;
    })
    .slice(0, 4);

  return (
    <section
      id="intent-route"
      className={styles.signatureSection}
      data-commerce-section="signature"
      data-companion={signature.companion}
      data-signature-mode={signature.mode}
    >
      <div className={styles.lightInner}>
        <SectionHeading index={3}>{signature.title}</SectionHeading>
        <p className={styles.signatureIntro}>{signature.intro}</p>

        {signature.mode === "regions" ? (
          <>
            <div className={styles.territoryLedger}>
              {territorialCards.length ? territorialCards.map((card, index) => (
                <button
                  type="button"
                  key={`${card.slug}-${card.myth_region}-${card.myth_community}`}
                  aria-pressed={activeItem === index}
                  onClick={() => {
                    setActiveItem(index);
                    onDiagnostic(variant.diagnosticEvent, "signature", card.myth_title);
                  }}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span className={styles.territoryCopy}>
                    <span>{[card.myth_region, card.myth_community].filter(Boolean).join(" · ")}</span>
                    <strong>{card.card_name}</strong>
                    <small>{card.myth_title}</small>
                  </span>
                  <CommerceIcon name="arrow" size={18} />
                </button>
              )) : (
                <p className={styles.signatureNotice}>
                  La procedencia territorial se mostrará cuando esté disponible en el corpus público.
                </p>
              )}
            </div>
            {activeItem !== null && territorialCards[activeItem] ? (
              <div className={styles.signatureSelection} aria-live="polite">
                <span>Ruta territorial seleccionada</span>
                <h3>{territorialCards[activeItem].myth_title}</h3>
                <p>
                  {[territorialCards[activeItem].myth_region, territorialCards[activeItem].myth_community]
                    .filter(Boolean)
                    .join(" · ")} · {territorialCards[activeItem].card_name}
                </p>
                {territorialCards[activeItem].myth_slug ? (
                  <Link href={`/mitos/${territorialCards[activeItem].myth_slug}`} className={styles.goldLink}>
                    Leer el relato completo <CommerceIcon name="arrow" size={18} />
                  </Link>
                ) : null}
              </div>
            ) : null}
            <div className={`${styles.signatureRail} ${styles.regionPrinciples}`}>
              {signature.items.map(([title, body], index) => (
                <article key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </>
        ) : null}

        {signature.mode === "example" ? (
          <div className={styles.readingExperience}>
            <div className={styles.readingChooser} aria-label="Tres ejemplos reales de la baraja">
              {reflectionCards.map((card, index) => (
                <button
                  type="button"
                  key={card.slug || card.card_name}
                  aria-pressed={activeReflectionIndex === index}
                  onClick={() => {
                    setActiveItem(index);
                    onDiagnostic(variant.diagnosticEvent, "reflection_example", card.card_name);
                  }}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{card.card_name}</strong>
                  <small>{card.myth_title}</small>
                </button>
              ))}
            </div>
            <div className={styles.readingExample} aria-live="polite">
              <div className={styles.readingCard}>
                {activeReflectionCard?.image_url ? (
                  <Image
                    src={activeReflectionCard.image_url}
                    alt={activeReflectionCard.card_name}
                    fill
                    sizes="(max-width: 820px) 72vw, 320px"
                  />
                ) : <div className={styles.cardFallback}>M</div>}
              </div>
              <div className={styles.readingCopy}>
                <p className={styles.signatureMeta}>{activeReflectionCard?.card_name} · {activeReflectionCard?.myth_title}</p>
                {activeReflectionCard?.meaning ? <blockquote>{activeReflectionCard.meaning}</blockquote> : null}
                {activeReflectionCard?.myth_excerpt ? (
                  <p className={styles.readingExcerpt}>{activeReflectionCard.myth_excerpt}</p>
                ) : null}
                <ol>
                  {signature.items.map(([title, body]) => (
                    <li key={title}><strong>{title}</strong><span>{body}</span></li>
                  ))}
                </ol>
                <div className={styles.openQuestion}>
                  <span>Pregunta abierta</span>
                  <p>{signature.prompts?.[activeReflectionIndex]}</p>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {signature.mode === "detail" ? (
          <div className={styles.visualDetail}>
            <div className={styles.detailImage}>
              {featured?.image_url ? (
                <Image
                  src={featured.image_url}
                  alt={`Detalle provisional de ${featured.card_name}`}
                  fill
                  sizes="(max-width: 820px) 92vw, 540px"
                />
              ) : <div className={styles.cardFallback}>M</div>}
              <span>Ampliación provisional</span>
            </div>
            <div className={styles.detailNotes}>
              {signature.items.map(([title, body], index) => (
                <article key={title}>
                  <span>{index + 1}</span>
                  <div><h3>{title}</h3><p>{body}</p></div>
                </article>
              ))}
            </div>
          </div>
        ) : null}

        {signature.mode === "recipients" ? (
          <div className={styles.signatureRail}>
            {signature.items.map(([title, body], index) => (
              <button
                type="button"
                key={title}
                aria-pressed={activeItem === index}
                onClick={() => {
                  setActiveItem(index);
                  onDiagnostic(variant.diagnosticEvent, "signature", title);
                }}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </button>
            ))}
          </div>
        ) : null}

        {activeItem !== null && signature.mode === "recipients" ? (
          <div className={styles.signatureSelection} aria-live="polite">
            <span>Ruta de regalo seleccionada</span>
            <h3>{signature.items[activeItem][0]}</h3>
            <p>{signature.items[activeItem][1]}</p>
            <small>
              Puedes compartir primero una carta y su historia: no hace falta practicar tarot para empezar a recorrer la baraja.
            </small>
            <ActionButton action="cart" onClick={onCart}>Elegir como regalo</ActionButton>
          </div>
        ) : null}

        {["decision", "method"].includes(signature.mode) ? (
          <div className={styles.signatureRail}>
            {signature.items.map(([title, body], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

function GallerySection({ variant, cards, onDiagnostic }) {
  const [selectedCard, setSelectedCard] = useState(null);
  const [zoomedCard, setZoomedCard] = useState(null);
  const closeZoom = useCallback(() => setZoomedCard(null), []);
  const galleryEvent = {
    purchase: "view_product_story",
    gift: "view_gift_card",
    souvenir: "view_region_story",
    reflection: "view_reflection_card",
    art: "view_card_detail",
    culture: "view_myth_card",
  }[variant.id];

  return (
    <>
      <section id="arcanos" data-commerce-section="gallery" className={styles.gallerySection}>
        <div className={styles.darkInner}>
        <SectionHeading index={4} inverse>{variant.galleryTitle}</SectionHeading>
        <div className={styles.galleryIntro}>
          <p>{variant.galleryBody}</p>
          <Link href="/tarot" className={styles.goldLink}>Ver la baraja editorial <CommerceIcon name="arrow" size={18} /></Link>
        </div>
        <div className={styles.cardRail}>
          {cards.map((card, index) => (
            <motion.button
              key={card.slug || card.card_name}
              className={styles.galleryCard}
              type="button"
              aria-pressed={selectedCard?.card_name === card.card_name}
              onClick={() => {
                setSelectedCard(card);
                onDiagnostic(galleryEvent, "gallery", card.card_name);
              }}
              initial={false}
              whileInView={{ opacity: 1, y: 0, rotate: (index - 2) * 1.2 }}
              whileHover={{ y: -12, rotate: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.07, duration: 0.55 }}
            >
              <div className={styles.galleryImageWrap}>
                {card.image_url ? (
                  <Image
                    src={card.image_url}
                    alt={card.card_name}
                    fill
                    sizes="(max-width: 760px) 62vw, 220px"
                    className={styles.galleryImage}
                  />
                ) : <div className={styles.cardFallback}>M</div>}
              </div>
              <h3>{card.card_name}</h3>
              <p>{card.myth_title}</p>
              {variant.id === "art" ? (
                <small className={styles.galleryContext}>
                  {card.arcana === "major" ? "Arcano mayor" : `Arcano menor${card.suit ? ` · ${card.suit}` : ""}`}
                </small>
              ) : null}
              {["culture", "souvenir"].includes(variant.id) && (card.myth_region || card.myth_community) ? (
                <small className={styles.galleryContext}>
                  {[card.myth_region, card.myth_community].filter(Boolean).join(" · ")}
                </small>
              ) : null}
            </motion.button>
          ))}
        </div>
        {selectedCard ? (
          <div className={styles.galleryDetail} aria-live="polite">
            <div>
              <span>Detalle seleccionado</span>
              <h3>{selectedCard.card_name}</h3>
              <p>{selectedCard.meaning || `Esta carta está vinculada editorialmente con ${selectedCard.myth_title}.`}</p>
            </div>
            <div>
              <small>Mito relacionado</small>
              <strong>{selectedCard.myth_title}</strong>
              {selectedCard.myth_slug ? (
                <Link href={`/mitos/${selectedCard.myth_slug}`} className={styles.goldLink}>
                  Leer el mito completo <CommerceIcon name="arrow" size={18} />
                </Link>
              ) : null}
              {variant.id === "art" && selectedCard.image_url ? (
                <button
                  type="button"
                  className={styles.zoomButton}
                  onClick={() => {
                    setZoomedCard(selectedCard);
                    onDiagnostic("view_gallery_zoom", "gallery_zoom", selectedCard.card_name);
                  }}
                >
                  <CommerceIcon name="expand" size={18} /> Ampliar la ilustración
                </button>
              ) : null}
            </div>
          </div>
        ) : (
          <p className={styles.galleryHint}>Selecciona una carta para conocer la relación editorial que propone.</p>
        )}
        </div>
      </section>
      <GalleryZoom card={zoomedCard} onClose={closeZoom} />
    </>
  );
}

function ReflectionSection({ variant }) {
  return (
    <section id="reflection" data-commerce-section="reflection" className={styles.reflectionSection}>
      <div className={styles.lightInner}>
        <SectionHeading index={5}>{variant.reflectionTitle}</SectionHeading>
        <p className={styles.reflectionLead}>{variant.reflectionBody}</p>
        <div className={styles.actionsRail}>
          {variant.actions.map((action, index) => (
            <div className={styles.reflectAction} key={action}>
              <span aria-hidden="true">{index + 1}</span>
              <h3>{action}</h3>
              <p>{variant.actionDetails[index]}</p>
            </div>
          ))}
        </div>
        {variant.id === "reflection" ? (
          <div className={styles.ethicalNote}><CommerceIcon name="info" size={18} />Una lectura cultural y simbólica. No reemplaza terapia, diagnóstico ni tratamiento.</div>
        ) : null}
      </div>
    </section>
  );
}

function FactsSection({ product, onCart }) {
  const shipping = product.shippingIncluded
    ? (product.shipping || "Incluido en el precio")
    : null;

  return (
    <section id="ficha" data-commerce-section="facts" className={styles.factsSection}>
      <div className={styles.darkInner}>
        <SectionHeading index={6} inverse>Todo lo que debes saber antes de comprar</SectionHeading>
        <div className={styles.factsGrid}>
          <div className={styles.compositionBlock}>
            <div><strong>78</strong><span>cartas</span></div>
            <div><strong>22</strong><span>mayores</span></div>
            <div><strong>56</strong><span>menores</span></div>
            <div><strong>4</strong><span>palos</span></div>
          </div>
          <div className={styles.commercialFacts}>
            <Fact label="Contenido" value={product.contents} />
            <Fact label="Ficha física" value={product.physicalSpecs} />
            <Fact label="Despacho" value={product.dispatch} />
            <Fact label="Envío incluido" value={shipping} />
            <Fact label="Cambios y devoluciones" value={product.returns} />
          </div>
          <div className={styles.factPurchase}>
            <ProductStatus product={product} inverse />
            <ActionButton action="cart" onClick={onCart}>Agregar al carrito</ActionButton>
            <p>No cobraremos nada sin mostrarte antes el total y las condiciones de entrega.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Fact({ label, value }) {
  return (
    <div className={styles.factRow}>
      <span>{label}</span>
      <strong>{value || "Pendiente de confirmación"}</strong>
    </div>
  );
}

function Questions({ product, variant }) {
  const shippingAnswer = product.shippingIncluded && product.shipping
    ? `${product.shipping} No se agregará un cobro de transporte después del precio anunciado.`
    : "Publicaremos la cobertura del envío incluido antes de habilitar el pago.";
  const questions = [
    ...(variant.questions || []),
    ["¿Qué estoy comprando?", product.contents || "Una baraja editorial física de 78 cartas. El contenido final de la caja aún debe confirmarse."],
    ["¿El envío está incluido?", shippingAnswer],
    ["¿Qué medios de pago podré usar?", "La API de Bold está preparada para tarjeta, PSE, Nequi, Botón Bancolombia y QR Bre-B. Se mostrarán sólo los medios activados y probados en la cuenta del comercio."],
    ["¿Es una lectura o un servicio de tarot?", "No. La compra corresponde a un producto físico editorial; no incluye consulta, lectura personalizada ni predicción."],
    ["¿Puedo usarla si no practico tarot?", "Sí. También puede recorrerse como colección visual y puerta de entrada a relatos colombianos."],
  ];
  return (
    <section id="preguntas" data-commerce-section="questions" className={styles.questionsSection}>
      <div className={styles.lightInner}>
        <SectionHeading index={7}>Preguntas antes de elegir</SectionHeading>
        <div className={styles.questionsList}>
          {questions.map(([question, answer], index) => (
            <details key={question} open={index === 0}>
              <summary><span>{question}</span><i aria-hidden="true" /></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function CloseSection({ variant, product, onCart }) {
  const heroVisual = variant.heroVisual || { src: product.image, status: "provisional" };

  return (
    <section data-commerce-section="close" className={styles.closeSection}>
      <div
        className={styles.closeMedia}
        data-visual-intent={variant.id}
        data-visual-status={heroVisual.status}
        aria-hidden="true"
      ><Image src={heroVisual.src} alt="" fill loading="eager" sizes="100vw" className={styles.closeImage} /></div>
      <div className={styles.closeShade} aria-hidden="true" />
      <div className={styles.closeInner}>
        <h2>{variant.closeTitle}</h2>
        <p>{product.name} · 78 cartas</p>
        <ProductStatus product={product} inverse />
        <ActionButton action="cart" onClick={onCart}>Agregar al carrito</ActionButton>
        <a href="#ficha" className={styles.goldLink}>Revisar qué incluye <CommerceIcon name="arrow" size={18} /></a>
      </div>
    </section>
  );
}

function FloatingPurchase({ visible, label, product, onCart, step, totalSteps, reduceMotion }) {
  const progress = `${Math.round((step / totalSteps) * 100)}%`;

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          className={styles.floatingPurchase}
          type="button"
          onClick={onCart}
          aria-label={`Agregar al carrito. ${label}. Paso ${step} de ${totalSteps}.`}
          initial={reduceMotion ? false : { opacity: 0, x: 36 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 36 }}
          transition={{ duration: reduceMotion ? 0 : 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className={styles.floatingMark}>M</span>
          <span className={styles.floatingCart}><CommerceIcon name="cart" />Agregar al carrito</span>
          <span className={styles.floatingMeta}>
            <span className={styles.floatingStep}>{String(step).padStart(2, "0")} / {String(totalSteps).padStart(2, "0")}</span>
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={label}
                className={styles.floatingContext}
                initial={reduceMotion ? false : { opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -5 }}
                transition={{ duration: reduceMotion ? 0 : 0.2 }}
              >
                {label}
              </motion.span>
            </AnimatePresence>
          </span>
          <small>{formatPrice(product)}</small>
          <span className={styles.floatingProgress} aria-hidden="true">
            <motion.span animate={{ width: progress }} transition={{ duration: reduceMotion ? 0 : 0.35 }} />
          </span>
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}

function CartDrawer({ open, onClose, product, quantity, onQuantity, variant }) {
  const closeButtonRef = useRef(null);
  const deliverySummary = product.shippingIncluded
    ? (product.shipping || "Incluido en el precio; cobertura por confirmar")
    : "Condición de envío incluido y cobertura pendientes de confirmación";
  const paymentSummary = product.paymentMethodsReady
    ? "Tarjeta, PSE, Nequi, Botón Bancolombia y QR Bre-B confirmados"
    : "Tarjeta, PSE, Nequi, Botón Bancolombia y QR Bre-B pendientes de activación";

  useEffect(() => {
    if (!open) return undefined;
    const previouslyFocused = document.activeElement;
    closeButtonRef.current?.focus();
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key !== "Tab") return;
      const focusable = Array.from(
        document.querySelectorAll(
          `.${styles.drawer} a[href], .${styles.drawer} button:not([disabled]), .${styles.drawer} input:not([disabled]), .${styles.drawer} select:not([disabled]), .${styles.drawer} textarea:not([disabled]), .${styles.drawer} [tabindex]:not([tabindex="-1"])`
        )
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus?.();
    };
  }, [onClose, open]);

  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.button className={styles.drawerBackdrop} type="button" aria-label="Cerrar carrito" onClick={onClose} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
          <motion.aside
            className={styles.drawer}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cart-title"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.drawerHead}>
              <h2 id="cart-title">Tu carrito</h2>
              <button ref={closeButtonRef} type="button" onClick={onClose} aria-label="Cerrar carrito"><CommerceIcon name="close" /></button>
            </div>
            <div className={styles.drawerIntent}>
              <span>{variant.eyebrow}</span>
              <p>{variant.title}</p>
            </div>
            {quantity > 0 ? (
              <div className={styles.drawerItem}>
                <Image src={product.image} alt={product.imageAlt} width={152} height={102} className={styles.drawerImage} />
                <div className={styles.drawerItemCopy}>
                  <h3>{product.name}</h3>
                  <p>{formatPrice(product)}</p>
                  <div className={styles.quantityControl} aria-label="Cantidad">
                    <button type="button" onClick={() => onQuantity(Math.max(0, quantity - 1))} aria-label="Reducir cantidad"><CommerceIcon name="minus" size={18} /></button>
                    <span>{quantity}</span>
                    <button type="button" disabled={quantity >= 8} onClick={() => onQuantity(Math.min(8, quantity + 1))} aria-label="Aumentar cantidad"><CommerceIcon name="plus" size={18} /></button>
                  </div>
                </div>
                <button type="button" onClick={() => onQuantity(0)} className={styles.removeButton} aria-label="Quitar producto"><CommerceIcon name="trash" size={19} /></button>
              </div>
            ) : <p className={styles.emptyCart}>Tu carrito está vacío.</p>}
            <div className={styles.drawerTotal}><span>Total</span><strong aria-live="polite">{formatPrice(product, quantity)}</strong></div>
            <div className={styles.drawerAssurance} aria-label="Condiciones antes de continuar">
              <div data-ready={product.shippingIncluded ? "true" : "false"}>
                <CommerceIcon name="delivery" size={20} />
                <span><strong>Entrega verificable</strong><small>{deliverySummary}</small></span>
              </div>
              <div data-ready={product.paymentMethodsReady ? "true" : "false"}>
                <CommerceIcon name="payment" size={20} />
                <span><strong>Cinco rutas de pago</strong><small>{paymentSummary}</small></span>
              </div>
            </div>
            <div className={styles.drawerActions}>
              {product.checkoutReady && quantity > 0 ? (
                <Link href="/tarot/checkout" className={styles.checkoutLink}>Continuar al checkout <CommerceIcon name="arrow" /></Link>
              ) : (
                <button type="button" disabled>Compra disponible al completar las condiciones de lanzamiento</button>
              )}
              <Link href="/tarot/carrito" onClick={onClose}>Revisar pedido y condiciones</Link>
            </div>
            <p className={styles.drawerTrust}><CommerceIcon name="lock" size={18} />Bold procesa el pago; los datos sensibles de tarjeta no se guardan en la orden.</p>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}

export function TarotCommerceExperience({ variant, product, cards }) {
  const reduceMotion = useReducedMotion();
  const [cartOpen, setCartOpen] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [floatingVisible, setFloatingVisible] = useState(false);
  const [companion, setCompanion] = useState(SECTION_COMPANION.story);
  const [journeyStep, setJourneyStep] = useState(1);
  const trackedView = useRef(false);

  const featured = cards[0] || null;
  const campaign = useMemo(() => ({
    campaign: "lanzamiento_tarot",
    content: variant.campaignContent,
    landing_intent: variant.id,
  }), [variant]);
  const attribution = useRef(campaign);

  useEffect(() => {
    attribution.current = captureTarotAttribution({ context: campaign });
    const stored = readStoredCart();
    if (stored?.sku === product.sku) setQuantity(stored.quantity);
    if (trackedView.current) return;
    trackedView.current = true;
    trackEvent({
      action: product.priceCop ? "view_item" : "view_item_preview",
      category: "ecommerce",
      label: product.sku,
      currency: product.currency,
      value: product.priceCop || undefined,
      items: [{ item_id: product.sku, item_name: product.name, price: product.priceCop || undefined, quantity: 1 }],
      ...attribution.current,
    });
  }, [campaign, product]);

  useEffect(() => {
    const hero = document.querySelector(`.${styles.hero}`);
    const sections = Array.from(document.querySelectorAll("[data-commerce-section]"));
    if (!hero || !sections.length) return undefined;

    let animationFrame = 0;
    const updateScrollCompanion = () => {
      animationFrame = 0;
      const heroBounds = hero.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const readingLine = Math.max(120, viewportHeight * 0.42);
      const sectionPositions = sections.map((section) => ({ section, bounds: section.getBoundingClientRect() }));
      const activeSection = sectionPositions
        .filter(({ bounds }) => bounds.bottom > 0 && bounds.top < viewportHeight)
        .sort((a, b) => Math.abs(a.bounds.top - readingLine) - Math.abs(b.bounds.top - readingLine))[0]?.section;
      const commerceEnd = sectionPositions[sectionPositions.length - 1]?.bounds.bottom || 0;
      const floatingBoundary = Math.max(88, viewportHeight * 0.12);

      setFloatingVisible(
        heroBounds.bottom <= floatingBoundary && commerceEnd > floatingBoundary
      );
      if (!activeSection) return;

      const id = activeSection.getAttribute("data-commerce-section");
      const activeIndex = sections.indexOf(activeSection);
      if (activeIndex >= 0) setJourneyStep(activeIndex + 1);
      setCompanion(
        activeSection.getAttribute("data-companion") ||
          INTENT_COMPANIONS[variant.id]?.[id] ||
          SECTION_COMPANION[id] ||
          SECTION_COMPANION.story
      );
    };
    const scheduleScrollCompanion = () => {
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(updateScrollCompanion);
    };

    updateScrollCompanion();
    window.addEventListener("scroll", scheduleScrollCompanion, { passive: true });
    window.addEventListener("resize", scheduleScrollCompanion);
    return () => {
      window.removeEventListener("scroll", scheduleScrollCompanion);
      window.removeEventListener("resize", scheduleScrollCompanion);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, [campaign, variant]);

  useEffect(() => {
    if (!cartOpen) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [cartOpen]);

  function persistQuantity(next) {
    const safeQuantity = Math.max(0, Math.min(8, Number.parseInt(next, 10) || 0));
    setQuantity(safeQuantity);
    try {
      if (safeQuantity <= 0) {
        localStorage.removeItem(CART_KEY);
        return;
      }
      localStorage.setItem(CART_KEY, JSON.stringify({
        sku: product.sku,
        quantity: safeQuantity,
        currency: product.currency,
        priceCop: product.priceCop,
        landingIntent: variant.id,
      }));
    } catch {
      // The in-page cart remains usable when a restrictive browser blocks storage.
    }
  }

  async function addToCart() {
    if (!product.commercialReady) {
      persistQuantity(Math.max(1, quantity));
      setCartOpen(true);
      trackEvent({ action: "commerce_preview_open", category: "tarot_commerce", label: variant.id, ...attribution.current });
      return;
    }
    try {
      const targetQuantity = Math.min(8, Math.max(1, quantity + 1));
      if (targetQuantity === quantity) {
        persistQuantity(quantity);
        setCartOpen(true);
        return;
      }
      const response = await fetch("/api/tarot/cart", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ sku: product.sku, quantity: targetQuantity }),
      });
      if (!response.ok) throw new Error("cart_rejected");
      const result = await response.json();
      persistQuantity(result.item.quantity);
      setCartOpen(true);
      trackEvent({
        action: "add_to_cart",
        category: "ecommerce",
        label: product.sku,
        currency: product.currency,
        value: result.item.priceCop,
        items: [{ item_id: product.sku, item_name: product.name, price: result.item.priceCop, quantity: 1 }],
        ...attribution.current,
      });
    } catch {
      setCartOpen(true);
    }
  }

  function trackDiagnostic(action, surface, item) {
    trackEvent({
      action,
      category: "tarot_commerce",
      label: variant.id,
      interaction_surface: surface,
      interaction_item: item,
      ...attribution.current,
    });
  }

  function handleAction(action) {
    trackEvent({
      action: "landing_cta_click",
      category: "tarot_commerce",
      label: variant.id,
      cta_action: action,
      cta_location: "hero",
      ...attribution.current,
    });
    if (action === "cart") {
      addToCart();
      return;
    }
    if (action === "signature") {
      trackDiagnostic(variant.diagnosticEvent, "hero", variant.secondaryCta);
    }
    const target = action === "story" ? "historia" : action === "gallery" ? "arcanos" : action === "facts" ? "ficha" : action === "signature" ? "intent-route" : action === "reflection" ? "reflection" : "baraja";
    document.getElementById(target)?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  }

  return (
    <div className={styles.commercePage} data-landing-intent={variant.id}>
      <CommerceHeader quantity={quantity} onCart={() => setCartOpen(true)} />
      <main id="contenido">
        <Hero variant={variant} product={product} onAction={handleAction} />
        <StorySection variant={variant} featured={featured} />
        <ReasonsSection variant={variant} />
        <IntentSignatureSection variant={variant} cards={cards} onCart={addToCart} onDiagnostic={trackDiagnostic} />
        <GallerySection variant={variant} cards={cards} onDiagnostic={trackDiagnostic} />
        <ReflectionSection variant={variant} />
        <FactsSection product={product} onCart={addToCart} />
        <Questions product={product} variant={variant} />
        <CloseSection variant={variant} product={product} onCart={addToCart} />
      </main>
      <FloatingPurchase
        visible={floatingVisible}
        label={companion}
        product={product}
        onCart={addToCart}
        step={journeyStep}
        totalSteps={8}
        reduceMotion={reduceMotion}
      />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} product={product} quantity={quantity} onQuantity={persistQuantity} variant={variant} />
    </div>
  );
}
