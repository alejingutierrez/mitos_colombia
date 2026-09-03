import { TAROT_PRODUCT_FACTS } from "./tarot-product-facts.js";

const PRODUCT_SKU = "tarot-mitos-colombia-78";

export const TAROT_COLOMBIA_REGIONS = [
  "Amazonas", "Antioquia", "Arauca", "Atlántico", "Bogotá D.C.",
  "Bolívar", "Boyacá", "Caldas", "Caquetá", "Casanare", "Cauca",
  "Cesar", "Chocó", "Córdoba", "Cundinamarca", "Guainía", "Guaviare",
  "Huila", "La Guajira", "Magdalena", "Meta", "Nariño",
  "Norte de Santander", "Putumayo", "Quindío", "Risaralda",
  "San Andrés y Providencia", "Santander", "Sucre", "Tolima",
  "Valle del Cauca", "Vaupés", "Vichada",
];

export const TAROT_REQUIRED_PAYMENT_METHODS = [
  {
    id: "card",
    mark: "CARD",
    label: "Tarjeta débito o crédito",
    detail: "Bold procesa la tarjeta y puede solicitar validación 3D Secure.",
  },
  {
    id: "pse",
    mark: "PSE",
    label: "PSE",
    detail: "El comprador elige su banco y continúa en su experiencia segura.",
  },
  {
    id: "nequi",
    mark: "NQ",
    label: "Nequi",
    detail: "La autorización se completa desde la cuenta Nequi del comprador.",
  },
  {
    id: "bancolombia",
    mark: "B",
    label: "Botón Bancolombia",
    detail: "La persona continúa en la experiencia segura del banco.",
  },
  {
    id: "qr",
    mark: "QR",
    label: "QR Bre-B",
    detail: "Bold genera un QR interoperable con vigencia limitada.",
  },
];

function parsePositiveInteger(value) {
  const parsed = Number.parseInt(String(value || ""), 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : null;
}

function clean(value) {
  return typeof value === "string" && value.trim() ? value.trim() : null;
}

function configuredPaymentMethodIds(value) {
  return new Set(
    String(value || "")
      .split(",")
      .map((item) => item.trim().toLowerCase())
      .filter(Boolean)
  );
}

function hasSecureCheckoutUrl(value) {
  try {
    return new URL(String(value || "").trim()).protocol === "https:";
  } catch {
    return false;
  }
}

function configuredShippingRegions(value) {
  const raw = String(value || "").trim();
  if (raw.toUpperCase() === "ALL_COLOMBIA") return [...TAROT_COLOMBIA_REGIONS];
  return raw
    .split("|")
    .map((item) => item.trim())
    .filter(Boolean);
}

function sellerIdentityIsReady(seller) {
  return Boolean(
    seller.legalName?.length >= 3 &&
      seller.legalId?.length >= 5 &&
      seller.address?.length >= 5 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(seller.email || "") &&
      String(seller.phone || "").replace(/\D/g, "").length >= 7
  );
}

function normalizeRegion(value) {
  return String(value || "")
    .normalize("NFKC")
    .trim()
    .toLocaleLowerCase("es-CO");
}

export function isTarotShippingRegionAllowed(product, value) {
  const normalized = normalizeRegion(value);
  return Boolean(
    normalized &&
      product?.shippingRegions?.some(
        (region) => normalizeRegion(region) === normalized
      )
  );
}

export const TAROT_CHECKOUT_INTENTS = {
  purchase: {
    id: "purchase",
    path: "/tarot/comprar",
    eyebrow: "Decisión de compra",
    cartTitle: "Revisa la baraja que elegiste",
    cartCopy:
      "Comprueba cantidad, precio, envío y condiciones antes de pasar a tus datos.",
    checkoutTitle: "Todo claro antes de pagar",
    checkoutCopy:
      "La baraja, la entrega y el total deben coincidir con lo que decidiste comprar.",
    promise: "78 cartas, un sistema completo y ninguna condición escondida al final.",
    resultPromise: "Tu orden conserva la misma baraja, cantidad y total que revisaste antes de pagar.",
  },
  gift: {
    id: "gift",
    path: "/tarot/regalo-colombiano",
    eyebrow: "Regalo con significado",
    cartTitle: "Una última mirada antes de regalar historias",
    cartCopy:
      "Confirma que esta baraja expresa la razón por la que elegiste regalar Colombia.",
    checkoutTitle: "Cuida el regalo hasta el último paso",
    checkoutCopy:
      "Revisa quién recibe, dónde se entrega y qué condiciones acompañan la compra.",
    promise: "No prometemos empaque o personalización hasta que formen parte real del producto.",
    resultPromise: "El regalo queda ligado a una orden verificable, sin añadir empaque o personalización que no hayas comprado.",
  },
  souvenir: {
    id: "souvenir",
    path: "/tarot/souvenir-colombiano",
    eyebrow: "Memoria de Colombia",
    cartTitle: "Un recuerdo que conserva sus historias",
    cartCopy:
      "Revisa la compra de este objeto editorial antes de llevarlo contigo o enviarlo.",
    checkoutTitle: "Del territorio a una entrega verificable",
    checkoutCopy:
      "La cobertura y el plazo de envío deben estar confirmados antes de pagar.",
    promise: "Un recuerdo cultural no debería convertirse en una sorpresa logística.",
    resultPromise: "La memoria del viaje continúa con una entrega comprobable, no con una promesa logística ambigua.",
  },
  reflection: {
    id: "reflection",
    path: "/tarot/autoconocimiento",
    eyebrow: "Reflexión personal",
    cartTitle: "Una baraja para seguir formulando preguntas",
    cartCopy:
      "Confirma el objeto editorial y sus condiciones sin convertirlo en una promesa terapéutica.",
    checkoutTitle: "Una decisión consciente, sin promesas exageradas",
    checkoutCopy:
      "Compras una baraja física para observar, escribir y conversar; no una consulta ni un diagnóstico.",
    promise: "La experiencia abre preguntas: nunca sustituye orientación profesional ni decide por ti.",
    resultPromise: "La orden corresponde a una baraja física y editorial; nunca a una consulta, diagnóstico o tratamiento.",
  },
  art: {
    id: "art",
    path: "/tarot/arte-y-coleccion",
    eyebrow: "Arte y colección",
    cartTitle: "Una colección para mirar carta por carta",
    cartCopy:
      "Revisa la serie completa y la ficha física confirmada antes de convertirla en parte de tu colección.",
    checkoutTitle: "La pieza y sus condiciones, antes del pago",
    checkoutCopy:
      "Materiales, acabados y contenido de la caja sólo se presentan cuando están comprobados.",
    promise: "El valor visual no necesita edición limitada ni acabados inventados para sostenerse.",
    resultPromise: "La pieza que recibes conserva la ficha física y el contenido que revisaste antes del pago.",
  },
  culture: {
    id: "culture",
    path: "/tarot/mitos-y-leyendas",
    eyebrow: "Mitos y cultura",
    cartTitle: "Un archivo de relatos para llevar contigo",
    cartCopy:
      "Confirma la baraja que conecta arcanos, mitos y territorios antes de continuar.",
    checkoutTitle: "Completa la compra sin perder el hilo de la historia",
    checkoutCopy:
      "La transacción protege el objeto físico; el archivo cultural sigue abierto para explorar.",
    promise: "La baraja es una puerta de entrada editorial, no una representación exhaustiva del país.",
    resultPromise: "La compra cubre la baraja física; los relatos del archivo continúan disponibles para seguir explorando.",
  },
};

export function getTarotCheckoutIntent(value) {
  return TAROT_CHECKOUT_INTENTS[value] || TAROT_CHECKOUT_INTENTS.purchase;
}

export function getTarotProduct() {
  const priceCop = parsePositiveInteger(process.env.TAROT_PRICE_COP);
  const status = clean(process.env.TAROT_COMMERCE_STATUS) || "preview";
  const dispatch = clean(process.env.TAROT_DISPATCH_TEXT) || clean(TAROT_PRODUCT_FACTS.dispatch);
  const taxesIncluded = process.env.TAROT_TAXES_INCLUDED === "true";
  const shippingIncluded = process.env.TAROT_SHIPPING_INCLUDED === "true";
  const shipping = clean(process.env.TAROT_SHIPPING_TEXT) || clean(TAROT_PRODUCT_FACTS.shipping);
  const shippingRegions = configuredShippingRegions(
    process.env.TAROT_SHIPPING_REGIONS || TAROT_PRODUCT_FACTS.shippingRegions
  );
  const shippingRegionsReady = shippingRegions.length > 0;
  const returns = clean(process.env.TAROT_RETURNS_TEXT) || clean(TAROT_PRODUCT_FACTS.returns);
  const contents = clean(process.env.TAROT_PRODUCT_CONTENTS) || clean(TAROT_PRODUCT_FACTS.contents);
  const physicalSpecs = clean(process.env.TAROT_PHYSICAL_SPECS) || clean(TAROT_PRODUCT_FACTS.physicalSpecs);
  const image = configuredProductImage(process.env.TAROT_PRODUCT_IMAGE);
  const imageStatus =
    (clean(process.env.TAROT_PRODUCT_IMAGE_STATUS) || "").toLowerCase() === "final"
      ? "final"
      : "provisional";
  const imageApprovedForSale =
    process.env.TAROT_PRODUCT_IMAGE_APPROVED_FOR_SALE === "true";
  const imageReady =
    imageApprovedForSale ||
    (imageStatus === "final" && image !== TAROT_PROVISIONAL_PRODUCT_IMAGE);
  const seller = {
    legalName: clean(process.env.TAROT_SELLER_LEGAL_NAME),
    legalId: clean(process.env.TAROT_SELLER_LEGAL_ID),
    address: clean(process.env.TAROT_SELLER_ADDRESS),
    email: clean(process.env.TAROT_SELLER_EMAIL),
    phone: clean(process.env.TAROT_SELLER_PHONE),
  };
  const sellerReady = sellerIdentityIsReady(seller);
  const boldEnvironment =
    clean(process.env.BOLD_ENVIRONMENT)?.toLowerCase() === "production"
      ? "production"
      : "test";
  const boldApiKey = clean(
    boldEnvironment === "production"
      ? process.env.BOLD_API_KEY_PRODUCTION
      : process.env.BOLD_API_KEY_TEST
  );
  const boldSecretKey = clean(
    boldEnvironment === "production"
      ? process.env.BOLD_SECRET_KEY_PRODUCTION
      : process.env.BOLD_SECRET_KEY_TEST
  );
  const checkoutSiteUrl = clean(process.env.NEXT_PUBLIC_SITE_URL);
  const checkoutRedirectReady = hasSecureCheckoutUrl(checkoutSiteUrl);
  const paymentMethodIds = configuredPaymentMethodIds(
    process.env.TAROT_BOLD_PAYMENT_METHODS
  );
  const paymentMethods = TAROT_REQUIRED_PAYMENT_METHODS.map((method) => ({
    ...method,
    confirmed: paymentMethodIds.has(method.id),
  }));
  const paymentMethodsReady = paymentMethods.every((method) => method.confirmed);
  const orderPersistenceReady = process.env.TAROT_ORDERS_READY === "true";
  const webhookReady = process.env.TAROT_BOLD_WEBHOOK_READY === "true";
  const serverPurchaseTrackingReady = Boolean(
    clean(
      process.env.GA4_MEASUREMENT_PROTOCOL_API_SECRET ||
        process.env.GA_MEASUREMENT_API_SECRET
    ) &&
      process.env.TAROT_SERVER_PURCHASE_TRACKING_READY === "true"
  );
  const available = ["available", "preorder"].includes(status);
  const commercialReady = Boolean(
    available &&
      priceCop &&
      taxesIncluded &&
      dispatch &&
      shippingIncluded &&
      shipping &&
      shippingRegionsReady &&
      returns &&
      contents &&
      physicalSpecs &&
      imageReady &&
      sellerReady
  );
  const paymentReady = Boolean(
    boldApiKey && boldSecretKey
  );

  return {
    sku: PRODUCT_SKU,
    name: "Tarot de Mitos Colombianos",
    description:
      "Una baraja editorial de 78 cartas que conecta arcanos, mitos y territorio.",
    currency: "COP",
    priceCop,
    status,
    available,
    commercialReady,
    checkoutReady:
      commercialReady &&
      paymentReady &&
      paymentMethodsReady &&
      checkoutRedirectReady &&
      orderPersistenceReady &&
      webhookReady &&
      serverPurchaseTrackingReady,
    paymentProvider: "Bold",
    paymentEnvironment: boldEnvironment,
    paymentReady,
    paymentMethods,
    paymentMethodsReady,
    checkoutRedirectReady,
    serverPurchaseTrackingReady,
    dispatch,
    taxesIncluded,
    shippingIncluded,
    shipping,
    shippingRegions,
    shippingRegionsReady,
    returns,
    contents,
    physicalSpecs,
    image,
    imageStatus,
    imageApprovedForSale,
    imageReady,
    imageAlt: imageStatus === "final"
      ? "Tarot de Mitos Colombianos, baraja física de 78 cartas"
      : "Visualización actual del Tarot de Mitos Colombianos, aprobada provisionalmente para esta etapa",
    seller,
    sellerReady,
    composition: {
      total: 78,
      major: 22,
      minor: 56,
      suits: 4,
      language: "Español",
    },
    missingCommercialFields: [
      !priceCop && "Precio final",
      !taxesIncluded && "Confirmación de impuestos incluidos en el precio",
      !available && "Disponibilidad o modalidad de preventa",
      !dispatch && "Fecha o plazo de despacho",
      !shippingIncluded && "Confirmación de que el envío está incluido en el precio",
      !shipping && "Cobertura del envío incluido",
      !shippingRegionsReady && "Departamentos habilitados para entrega",
      !returns && "Política de cambios y devoluciones",
      !contents && "Contenido final de la caja",
      !physicalSpecs && "Medidas, material y acabado",
      !imageReady && "Aprobación de la imagen actual para esta etapa comercial",
      !sellerReady && "Identidad y contacto verificables del vendedor",
    ].filter(Boolean),
    missingCheckoutFields: [
      !paymentReady && "Llaves activa y secreta de Bold para el ambiente seleccionado",
      !paymentMethodsReady &&
        "Verificación en Bold de tarjeta, PSE, Nequi, Botón Bancolombia y QR Bre-B",
      !checkoutRedirectReady && "URL HTTPS definitiva para el retorno del pago",
      !orderPersistenceReady && "Persistencia de órdenes",
      !webhookReady && "Confirmación firmada del estado del pago",
      !serverPurchaseTrackingReady &&
        "Medición de compra confirmada desde el servidor",
    ].filter(Boolean),
  };
}

export function formatCop(value) {
  if (!Number.isFinite(value)) return "Precio por confirmar";
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);
}

const SHARED_PROOF = "22 arcanos mayores · 56 arcanos menores · En español";
const TAROT_PROVISIONAL_PRODUCT_IMAGE = "/commerce/tarot-product-provisional.png";

function configuredProductImage(value) {
  const candidate = clean(value);
  if (!candidate) return TAROT_PROVISIONAL_PRODUCT_IMAGE;
  if (candidate.startsWith("/") && !candidate.startsWith("//")) return candidate;
  try {
    const url = new URL(candidate);
    return url.protocol === "https:" ? url.toString() : TAROT_PROVISIONAL_PRODUCT_IMAGE;
  } catch {
    return TAROT_PROVISIONAL_PRODUCT_IMAGE;
  }
}

export const TAROT_INTENT_VISUALS = {
  purchase: {
    src: "/commerce/intent-purchase-v1.png",
    alt: "Escena editorial provisional de la baraja de Mitos de Colombia dispuesta para revisar sus cartas antes de comprar.",
    status: "provisional",
    replacementNote:
      "Reemplazar por una fotografía final que muestre el producto completo y permita comprobar cartas, empaque y escala sin alterar el espacio del titular.",
  },
  gift: {
    src: "/commerce/intent-gift-v1.png",
    alt: "Escena editorial provisional de la baraja de Mitos de Colombia presentada como un regalo sobre textil verde y cinta dorada.",
    status: "provisional",
    replacementNote:
      "Reemplazar por una fotografía final del producto listo para regalar; no sugerir empaque de regalo si no forma parte de la compra.",
  },
  souvenir: {
    src: "/commerce/intent-souvenir-v1.png",
    alt: "Escena editorial provisional de la baraja de Mitos de Colombia junto a un cuaderno de viaje y relieves topográficos abstractos.",
    status: "provisional",
    replacementNote:
      "Reemplazar por una fotografía final en contexto de viaje que conserve el producto como protagonista y evite clichés turísticos.",
  },
  reflection: {
    src: "/commerce/intent-reflection-v1.png",
    alt: "Escena editorial provisional de la baraja de Mitos de Colombia junto a un cuaderno abierto para observar y escribir.",
    status: "provisional",
    replacementNote:
      "Reemplazar por una fotografía final de uso responsable con cuaderno; evitar utilería que implique terapia, adivinación garantizada o rituales incluidos.",
  },
  art: {
    src: "/commerce/intent-art-v1.png",
    alt: "Escena editorial provisional de la baraja de Mitos de Colombia preparada para observar el detalle de sus ilustraciones.",
    status: "provisional",
    replacementNote:
      "Reemplazar por macrofotografía final de impresión, bordes y material únicamente cuando esos acabados estén confirmados.",
  },
  culture: {
    src: "/commerce/intent-culture-v1.png",
    alt: "Escena editorial provisional de la baraja de Mitos de Colombia sobre papeles de archivo y un relieve abstracto del territorio.",
    status: "provisional",
    replacementNote:
      "Reemplazar por una fotografía final que conecte baraja y archivo editorial sin presentar la selección como representación exhaustiva del país.",
  },
};

export const TAROT_LANDING_VARIANTS = {
  comprar: {
    id: "purchase",
    path: "/tarot/comprar",
    campaignContent: "ag01_compra_directa",
    architecture: "product-sheet",
    sectionOrder: ["reasons", "signature", "gallery", "story", "reflection", "facts", "questions", "close"],
    heroPanel: {
      label: "Ficha de compra · Edición 01",
      title: "Una baraja completa, explicada antes de pagar",
      items: ["78 cartas", "{price}", "{shipping}"],
    },
    galleryCount: 6,
    eyebrow: "Baraja editorial · 78 cartas",
    heroVisual: TAROT_INTENT_VISUALS.purchase,
    title: "Tarot de Mitos Colombianos",
    subtitle:
      "78 cartas que conectan los arcanos del tarot con relatos y arquetipos del territorio.",
    proof: SHARED_PROOF,
    primaryCta: "Agregar al carrito",
    primaryAction: "cart",
    secondaryCta: "Conocer la baraja",
    secondaryAction: "story",
    nextHeading: "Una baraja donde cada símbolo tiene territorio",
    intro:
      "No es una adaptación decorativa de símbolos importados. Cada carta nace de una conversación editorial entre un arcano, un relato colombiano y la pregunta que ese encuentro puede abrir hoy.",
    anatomy: [
      ["Arcano", "La estructura simbólica que organiza la baraja y permite recorrerla."],
      ["Mito colombiano", "El relato, personaje o territorio que le da una raíz concreta."],
      ["Lectura editorial", "La relación argumentada entre ambos, sin promesas de adivinación."],
    ],
    reasonsTitle: "Lo que compras no termina en las 78 cartas",
    reasons: [
      ["Una baraja utilizable", "Mayores, menores y cuatro palos forman un sistema completo para explorar carta a carta."],
      ["Un archivo para volver", "Cada imagen puede llevarte del símbolo al mito y del mito a otra forma de mirar Colombia."],
      ["Un objeto con criterio", "La selección no reúne estampas al azar: cada vínculo responde a una decisión editorial."],
    ],
    signature: {
      mode: "decision",
      companion: "Comprueba si esta es tu baraja",
      title: "Antes de elegirla, mira las cuatro decisiones que la vuelven una baraja completa",
      intro:
        "Comprar una baraja no debería depender de una imagen aislada. Aquí puedes comprobar el sistema, el archivo, la forma de uso y las condiciones reales antes de decidir.",
      items: [
        ["Sistema", "78 cartas organizadas en mayores, menores y cuatro palos: una baraja completa, no una muestra."],
        ["Archivo", "Cada carta se conecta con un mito existente y permite continuar la lectura más allá de la imagen."],
        ["Uso", "Puede recorrerse como baraja, colección visual o punto de partida para conversar."],
        ["Compra informada", "Precio, ficha física, despacho, envío y cambios sólo se habilitan cuando están confirmados."],
      ],
    },
    galleryTitle: "78 formas de entrar a una historia",
    galleryBody:
      "Mira de cerca una selección real del corpus. Las fotografías finales de producto reemplazarán esta presentación provisional.",
    reflectionTitle: "No te dice qué va a pasar. Te ayuda a mirar.",
    reflectionBody:
      "Puedes recorrerla como baraja, archivo visual o punto de partida para una conversación.",
    actions: ["Observar", "Relacionar", "Conversar"],
    actionDetails: [
      "Detente en la imagen, el nombre del arcano y los elementos que vienen del mito.",
      "Lee por qué ese relato fue puesto en conversación con ese arquetipo.",
      "Usa la relación como una pregunta abierta, no como una predicción cerrada.",
    ],
    closeTitle: "Lleva contigo una forma distinta de mirar Colombia",
    diagnosticEvent: "view_product_story",
    questions: [
      ["¿La baraja está completa?", "Sí. La estructura editorial reúne 78 cartas: 22 arcanos mayores y 56 menores organizados en cuatro palos."],
      ["¿Puedo revisar las condiciones antes de pagar?", "Sí. El checkout sólo se habilita cuando precio, ficha física, cobertura de envío, despacho y cambios están confirmados."],
    ],
  },
  "regalo-colombiano": {
    id: "gift",
    path: "/tarot/regalo-colombiano",
    campaignContent: "ag02_regalo_directo",
    architecture: "gift-note",
    sectionOrder: ["signature", "story", "reasons", "gallery", "reflection", "facts", "questions", "close"],
    heroPanel: {
      label: "Una nota para quien lo recibe",
      title: "No regalas una creencia. Regalas 78 historias para compartir.",
      items: ["Sin experiencia previa", "Objeto para conversar", "Recuerdo que permanece"],
    },
    galleryCount: 6,
    eyebrow: "Regalo colombiano con significado",
    heroVisual: TAROT_INTENT_VISUALS.gift,
    title: "Un regalo colombiano lleno de historias",
    subtitle:
      "78 cartas que convierten mitos, arquetipos y territorios de Colombia en una baraja editorial para recordar.",
    proof: SHARED_PROOF,
    primaryCta: "Elegir esta baraja",
    primaryAction: "cart",
    secondaryCta: "Descubrir qué incluye",
    secondaryAction: "facts",
    nextHeading: "Regalar Colombia sin reducirla a un recuerdo genérico",
    intro:
      "Hay regalos que nombran un lugar y otros que permiten seguir descubriéndolo. Esta baraja entrega 78 puertas de entrada a relatos, personajes y paisajes que pueden acompañar a quien la recibe mucho después de abrir la caja.",
    anatomy: [
      ["Para quien ama Colombia", "Una manera visual y narrativa de volver a sus historias."],
      ["Para quien apenas la conoce", "Un comienzo accesible que no exige practicar tarot."],
      ["Para compartir", "Un objeto que puede abrir conversación entre generaciones y lugares."],
    ],
    reasonsTitle: "Un regalo con significado, incluso sin saber de tarot",
    reasons: [
      ["Dice por qué lo elegiste", "No es un detalle intercambiable: habla de memoria, curiosidad y vínculo con el país."],
      ["Se descubre con tiempo", "Cada carta ofrece una nueva historia; el regalo no se agota en el primer vistazo."],
      ["Puede ser íntimo o compartido", "Funciona como objeto visual, baraja y detonante de conversaciones."],
    ],
    signature: {
      mode: "recipients",
      companion: "Piensa en quien va a recibirla",
      title: "No hay un destinatario genérico: hay una razón distinta para cada regalo",
      intro:
        "La baraja puede decir cosas diferentes según la relación que tienes con quien la recibe. Ninguna de estas rutas exige creer en el tarot.",
      items: [
        ["Quien vive lejos", "Una manera de reencontrarse con Colombia a través de imágenes e historias que se descubren con tiempo."],
        ["Quien está conociendo el país", "Un comienzo narrativo que abre curiosidad sin convertir la cultura en un souvenir plano."],
        ["Quien te abrió su casa", "Un objeto para agradecer con una historia compartible, sin prometer personalización o empaque especial."],
        ["Tu pareja o alguien cercano", "Una forma de regalar conversación, memoria y una experiencia que pueden recorrer juntos."],
        ["Quien ama Colombia", "Un regreso a personajes, territorios y relatos que no se agota en una sola imagen del país."],
        ["Quien disfruta el arte", "Una serie de 78 ilustraciones conectadas por un mismo sistema visual y editorial."],
      ],
    },
    galleryTitle: "Cinco cartas para imaginar la conversación",
    galleryBody:
      "Una selección del universo real de la baraja para entender qué clase de historias recibirá esa persona.",
    reflectionTitle: "No necesitas regalar una creencia. Puedes regalar una pregunta.",
    reflectionBody:
      "La baraja propone curiosidad y lectura cultural; cada persona decide cómo aproximarse a ella.",
    actions: ["Una visita", "Una despedida", "Una celebración"],
    actionDetails: [
      "Agradece a quien te recibió con un objeto cultural que puede seguir abriendo conversación.",
      "Deja una forma de volver a Colombia —o de llevarla consigo— a través de sus relatos.",
      "Un aniversario, cumpleaños o encuentro puede continuar en 78 historias para descubrir juntos.",
    ],
    closeTitle: "Un regalo que sigue abriendo historias",
    diagnosticEvent: "select_gift_recipient",
    questions: [
      ["¿Sirve como regalo si esa persona no practica tarot?", "Sí. Puede recorrerse como colección visual, archivo de historias y objeto para conversar; no exige una práctica previa."],
      ["¿Incluye empaque de regalo o personalización?", "No lo afirmaremos hasta que formen parte real de la presentación final. Antes de comprar verás exactamente qué incluye la caja."],
    ],
  },
  "souvenir-colombiano": {
    id: "souvenir",
    path: "/tarot/souvenir-colombiano",
    campaignContent: "ag03_souvenir_directo",
    architecture: "travel-log",
    sectionOrder: ["gallery", "signature", "story", "reflection", "reasons", "facts", "questions", "close"],
    heroPanel: {
      label: "Bitácora · Colombia",
      title: "Un viaje que continúa cuando abres otra carta",
      items: ["Relatos situados", "Regiones visibles", "Archivo portátil"],
    },
    galleryCount: 8,
    eyebrow: "Recuerdo cultural de Colombia",
    heroVisual: TAROT_INTENT_VISUALS.souvenir,
    title: "Un recuerdo de Colombia contado en 78 cartas",
    subtitle:
      "Lleva mitos, personajes y territorios del país en una baraja editorial ilustrada.",
    proof: "Relatos de distintas regiones · 78 cartas · En español",
    primaryCta: "Agregar al carrito",
    primaryAction: "cart",
    secondaryCta: "Explorar los relatos",
    secondaryAction: "gallery",
    nextHeading: "Un recuerdo que no congela el viaje: lo continúa",
    intro:
      "Una postal fija una vista. Esta baraja conserva algo más difícil de guardar: relatos que cambian según la región, personajes que aún circulan en la memoria y símbolos que invitan a volver sobre el viaje.",
    anatomy: [
      ["Territorio", "Cada carta se vincula con un lugar o tradición específica del corpus."],
      ["Relato", "El recuerdo se sostiene en una historia, no en un cliché turístico."],
      ["Objeto editorial", "Una forma compacta de explorar y compartir ese archivo visual."],
    ],
    reasonsTitle: "Colombia cabe aquí sin volverse una sola imagen",
    reasons: [
      ["Muchas entradas, no una postal", "La selección muestra diversidad de tonos, paisajes y personajes."],
      ["Para llevar o reencontrarse", "Puede acompañar a visitantes y a colombianos que viven lejos del país."],
      ["Para contar el viaje", "Las cartas ayudan a compartir lo vivido desde relatos que van más allá de los lugares comunes."],
    ],
    signature: {
      mode: "regions",
      companion: "Recorre los territorios de la muestra",
      title: "Una muestra territorial que declara sus límites",
      intro:
        "Las cartas seleccionadas permiten reconocer regiones y comunidades del corpus. No presentamos esta muestra como un mapa exhaustivo de Colombia.",
      items: [
        ["Partir de un lugar", "La procedencia del relato evita que la carta flote como una imagen sin contexto."],
        ["Seguir una voz", "Cuando el corpus registra comunidad o región, esa información acompaña la lectura."],
        ["Continuar el viaje", "Cada carta puede conducir al mito completo y a otros relatos relacionados."],
      ],
    },
    galleryTitle: "Un recorrido visual por relatos y territorios",
    galleryBody:
      "La selección es curada y no pretende representar de forma exhaustiva todos los pueblos o regiones.",
    reflectionTitle: "Recordar un lugar también es recordar las historias que lo habitan",
    reflectionBody:
      "Explora las cartas como un mapa narrativo que puede seguir creciendo después del viaje.",
    actions: ["Recorrer", "Recordar", "Contar"],
    actionDetails: [
      "Ubica el relato en su región cuando el corpus cuenta con esa información.",
      "Vuelve a la imagen como una memoria del viaje, no como prueba de una Colombia única.",
      "Comparte el mito completo y reconoce de dónde viene antes de hacerlo propio.",
    ],
    closeTitle: "Lleva un archivo de historias, no un souvenir genérico",
    diagnosticEvent: "view_region_story",
    questions: [
      ["¿Representa todas las regiones y comunidades de Colombia?", "No. Es una selección editorial trazable y declara sus límites; no pretende sustituir la diversidad completa del país."],
      ["¿Puedo llevarla en equipaje?", "Publicaremos dimensiones y peso cuando la ficha física esté confirmada. No prometemos portabilidad específica antes de medir el producto final."],
    ],
  },
  autoconocimiento: {
    id: "reflection",
    path: "/tarot/autoconocimiento",
    campaignContent: "ag04_reflexion",
    architecture: "open-journal",
    sectionOrder: ["signature", "reflection", "story", "gallery", "reasons", "facts", "questions", "close"],
    heroPanel: {
      label: "Cuaderno abierto · Sin respuestas cerradas",
      title: "Mira. Relaciona. Formula una pregunta mejor.",
      items: ["Sin predicciones", "Ritmo personal", "Lectura responsable"],
    },
    galleryCount: 6,
    eyebrow: "Cartas para reflexión personal",
    heroVisual: TAROT_INTENT_VISUALS.reflection,
    title: "78 cartas para mirar los arquetipos desde Colombia",
    subtitle:
      "Explora símbolos, relatos y perspectivas personales a través de una baraja editorial de mitos colombianos.",
    proof: "22 arcanos mayores · 56 menores · Lectura cultural y simbólica",
    primaryCta: "Conocer la baraja",
    primaryAction: "story",
    secondaryCta: "Ver un ejemplo de lectura",
    secondaryAction: "signature",
    nextHeading: "Una carta no responde por ti. Puede ayudarte a formular mejor la pregunta.",
    intro:
      "El valor de un arquetipo no está en dictar una respuesta sino en ofrecer distancia. Al relacionarlo con un mito colombiano, la pregunta personal deja de estar sola y entra en conversación con una historia más amplia.",
    anatomy: [
      ["Carta", "Una imagen y un arquetipo que concentran la atención."],
      ["Relato", "Un mito real del corpus que aporta conflicto, territorio y memoria."],
      ["Pregunta abierta", "Una invitación a observar sin convertir la carta en diagnóstico o certeza."],
    ],
    reasonsTitle: "Una práctica de atención, no una promesa de transformación",
    reasons: [
      ["Para observar", "Detenerse en una imagen permite notar asociaciones que el ritmo cotidiano suele ocultar."],
      ["Para escribir", "Una carta puede ser un punto de partida para poner en palabras una pregunta."],
      ["Para conversar", "Compartir interpretaciones abre perspectivas sin imponer una lectura correcta."],
    ],
    signature: {
      mode: "example",
      companion: "Prueba una lectura responsable",
      title: "Tres ejemplos de lectura que no deciden por ti",
      intro:
        "La experiencia propone tres movimientos sencillos: mirar la carta, leer el relato y formular una pregunta que permanezca abierta.",
      items: [
        ["Mira", "Describe primero lo que ves sin buscar una respuesta inmediata."],
        ["Relaciona", "Pon el arquetipo en conversación con el conflicto y el territorio del mito."],
        ["Pregunta", "Escribe una pregunta que amplíe tu perspectiva en lugar de prometerte una certeza."],
      ],
      prompts: [
        "¿Qué parte de esta tensión reconozco hoy y qué cambia al mirarla desde el relato?",
        "¿Qué estoy protegiendo, evitando o intentando comprender en esta situación?",
        "¿Qué posibilidad aparece si dejo la pregunta abierta un poco más?",
      ],
    },
    galleryTitle: "Arquetipos con una raíz narrativa concreta",
    galleryBody:
      "Cada ejemplo enlaza una carta con un mito existente; la relación editorial puede leerse y discutirse.",
    reflectionTitle: "No es terapia, diagnóstico, tratamiento ni predicción garantizada",
    reflectionBody:
      "Es una experiencia cultural y simbólica para observar, escribir o conversar con responsabilidad.",
    actions: ["Observar", "Escribir", "Conversar"],
    actionDetails: [
      "Nombra detalles de la imagen y las asociaciones que aparecen, sin juzgarlas.",
      "Pon por escrito una pregunta concreta y lo que el mito cambia en tu forma de verla.",
      "Escucha otras interpretaciones como perspectivas posibles, no como diagnósticos.",
    ],
    closeTitle: "Haz espacio para una pregunta distinta",
    diagnosticEvent: "view_reflection_example",
    questions: [
      ["¿La baraja ofrece diagnósticos o respuestas terapéuticas?", "No. Propone símbolos, relatos y preguntas abiertas; no diagnostica, trata ni sustituye acompañamiento profesional."],
      ["¿Las preguntas vienen impresas en la baraja?", "La página muestra una forma responsable de recorrer las cartas. No afirmaremos que existe una guía o preguntas impresas hasta confirmar el contenido físico final."],
    ],
  },
  "arte-y-coleccion": {
    id: "art",
    path: "/tarot/arte-y-coleccion",
    campaignContent: "ag05_arte",
    architecture: "exhibition",
    sectionOrder: ["gallery", "signature", "reasons", "story", "reflection", "facts", "questions", "close"],
    heroPanel: {
      label: "Sala 01 · Serie Tarot de Mitos",
      title: "Setenta y ocho piezas dentro de un mismo sistema visual",
      items: ["Marco", "Símbolo", "Territorio"],
    },
    galleryCount: 8,
    eyebrow: "Colección de ilustración colombiana",
    heroVisual: TAROT_INTENT_VISUALS.art,
    title: "Arte colombiano contado carta por carta",
    subtitle:
      "Una colección editorial de 78 cartas donde arcanos y mitos se encuentran en un universo visual propio.",
    proof: "78 ilustraciones · 22 arcanos mayores · 56 menores",
    primaryCta: "Explorar la colección",
    primaryAction: "gallery",
    secondaryCta: "Agregar al carrito",
    secondaryAction: "cart",
    nextHeading: "Una colección que se lee con los ojos y se recorre con las manos",
    intro:
      "El marco, el ritmo cromático y la iconografía crean continuidad; cada mito rompe esa continuidad de una forma distinta. El resultado busca ser colección visual y baraja utilizable al mismo tiempo.",
    anatomy: [
      ["Marco", "Una arquitectura común hace reconocible la serie completa."],
      ["Símbolo", "Los elementos del arcano se reinterpretan desde el mito asociado."],
      ["Ilustración", "Cada escena conserva territorio, personaje y atmósfera propios."],
    ],
    reasonsTitle: "Coleccionar no es acumular: es aprender a ver la serie",
    reasons: [
      ["Una identidad coherente", "Las 78 piezas pertenecen al mismo universo sin repetirse."],
      ["Detalle para volver", "Capas, texturas y símbolos recompensan una mirada lenta."],
      ["Objeto y sistema", "La colección mantiene la estructura completa de mayores, menores y palos."],
    ],
    signature: {
      mode: "detail",
      companion: "Mira cómo se construye una carta",
      title: "Acércate al sistema visual antes de mirar la colección completa",
      intro:
        "Marco, figura, textura y territorio trabajan en capas. La ampliación es provisional y será reemplazada por fotografía final de impresión y acabados.",
      items: [
        ["Marco", "Ordena la serie y permite reconocer que cada pieza pertenece a la misma colección."],
        ["Símbolo", "Los atributos del arcano se traducen desde objetos, personajes y acciones del relato."],
        ["Territorio", "El paisaje no rellena el fondo: sostiene la procedencia y la atmósfera de la escena."],
      ],
    },
    galleryTitle: "Mira la serie antes de mirar una sola carta",
    galleryBody:
      "La galería carga una selección optimizada y permite ampliar detalles sin descargar las 78 imágenes de una vez.",
    reflectionTitle: "El arte no ilustra el mito desde afuera. Entra en su lógica.",
    reflectionBody:
      "El criterio editorial conecta cada decisión visual con un relato concreto del corpus.",
    actions: ["Mirar", "Comparar", "Coleccionar"],
    actionDetails: [
      "Acércate a los bordes, texturas y relaciones entre figura y fondo.",
      "Pon dos cartas lado a lado para reconocer continuidad y variación dentro del sistema.",
      "Recorre mayores y menores como una serie completa, no sólo como imágenes aisladas.",
    ],
    closeTitle: "Una baraja para usar y una colección para volver a mirar",
    diagnosticEvent: "view_card_detail",
    questions: [
      ["¿Es una colección visual o una baraja utilizable?", "Es ambas: conserva el sistema completo de 78 cartas y, al mismo tiempo, desarrolla una serie visual coherente carta por carta."],
      ["¿Qué materiales y acabados tendrá?", "Sólo publicaremos medidas, material, impresión, acabado y caja cuando podamos comprobarlos con el producto final."],
    ],
  },
  "mitos-y-leyendas": {
    id: "culture",
    path: "/tarot/mitos-y-leyendas",
    campaignContent: "ag06_mitos",
    architecture: "archive-file",
    sectionOrder: ["story", "signature", "gallery", "reasons", "reflection", "facts", "questions", "close"],
    heroPanel: {
      label: "Expediente editorial · Corpus vivo",
      title: "Del relato documentado a una carta que invita a volver",
      items: ["Relato", "Correspondencia", "Regreso al archivo"],
    },
    galleryCount: 10,
    eyebrow: "Archivo de mitos y leyendas",
    heroVisual: TAROT_INTENT_VISUALS.culture,
    title: "Mitos y leyendas de Colombia en 78 cartas",
    subtitle:
      "Una baraja editorial que conecta relatos del territorio con los arquetipos de los arcanos.",
    proof: "Historias de distintas regiones · 78 cartas · En español",
    primaryCta: "Explorar los mitos de la baraja",
    primaryAction: "gallery",
    secondaryCta: "Agregar al carrito",
    secondaryAction: "cart",
    nextHeading: "La mitología no es un decorado: es el corazón editorial de la baraja",
    intro:
      "Cada nombre, territorio y comunidad parte del corpus de Mitos de Colombia. La baraja no afirma contener todas las tradiciones del país: ofrece una selección explícita y trazable para seguir leyendo.",
    anatomy: [
      ["Fuente", "El relato existe en el archivo y conserva su contexto editorial."],
      ["Correspondencia", "La relación con el arcano se explica, no se presenta como obvia."],
      ["Puerta de lectura", "La carta invita a volver al mito completo y a sus matices."],
    ],
    reasonsTitle: "Una forma distinta de entrar al archivo",
    reasons: [
      ["Del símbolo al relato", "La carta despierta curiosidad; el mito aporta profundidad y contexto."],
      ["Regiones sin homogeneizar", "Las historias conservan diferencias de paisaje, voz y procedencia."],
      ["Rigor sin tarea escolar", "La investigación sostiene la experiencia, pero no la convierte en un resumen plano."],
    ],
    signature: {
      mode: "method",
      companion: "Sigue el recorrido del archivo a la carta",
      title: "Del relato documentado a una correspondencia que se puede discutir",
      intro:
        "La carta no reemplaza el mito. Condensa una puerta de entrada y deja visible el camino para volver al relato completo.",
      items: [
        ["1 · Relato", "Partimos de un mito existente en el corpus, con título y procedencia editorial identificables."],
        ["2 · Correspondencia", "La relación con el arcano se argumenta desde temas, conflictos y símbolos del relato."],
        ["3 · Imagen", "La composición traduce esa relación sin borrar el territorio ni convertirlo en decoración."],
        ["4 · Regreso", "La carta invita a abrir el mito completo, leer sus matices y seguir explorando el archivo."],
      ],
    },
    galleryTitle: "Relatos reales del corpus, convertidos en umbrales visuales",
    galleryBody:
      "Explora una muestra curada y abre el mito completo cuando quieras profundizar.",
    reflectionTitle: "Una tradición puede seguir viva sin convertirse en mercancía vacía",
    reflectionBody:
      "La compra apoya un proyecto editorial que documenta, organiza y vuelve navegables estos relatos.",
    actions: ["Explorar", "Relacionar", "Profundizar"],
    actionDetails: [
      "Abre una carta como umbral, sabiendo que el relato completo contiene más matices.",
      "Lee la correspondencia mito–arcano como una decisión editorial argumentada.",
      "Vuelve al archivo, la región y la comunidad cuando quieras seguir la historia.",
    ],
    closeTitle: "Lleva la baraja y sigue leyendo el archivo",
    diagnosticEvent: "view_myth_card",
    questions: [
      ["¿La baraja reemplaza los relatos completos?", "No. Cada carta funciona como un umbral; cuando el mito está publicado puedes abrirlo y seguir leyendo sus matices en el archivo."],
      ["¿Todos los relatos son ancestrales?", "No hacemos esa generalización. Cada relato conserva la procedencia y el contexto que el corpus permite documentar."],
    ],
  },
};

export function getTarotLandingVariant(slug) {
  return TAROT_LANDING_VARIANTS[slug] || null;
}

/**
 * Resuelve los tres hechos del panel del hero.
 *
 * Los tokens `{price}`, `{shipping}` y `{dispatch}` se llenan con el producto
 * real. Antes el precio estaba escrito a mano en la configuración: la landing
 * podía anunciar "$124.900" mientras la línea de estado, tres centímetros
 * abajo, decía que la disponibilidad estaba por confirmar. Un visitante que
 * llega por un anuncio no debería tener que decidir a cuál de las dos creerle.
 */
export function resolveTarotHeroFacts(variant, product) {
  const tokens = {
    "{price}": Number.isFinite(product?.priceCop)
      ? formatCop(product.priceCop)
      : "Precio confirmado antes de pagar",
    "{shipping}": product?.shippingIncluded
      ? "Envío incluido"
      : "Envío informado antes de pagar",
    "{dispatch}": product?.dispatch || "Despacho confirmado antes de cobrar",
  };

  return (variant?.heroPanel?.items || []).map(
    (item) => tokens[item] ?? item
  );
}
