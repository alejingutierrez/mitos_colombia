export const SECRET_KEYS = new Set([
  "TAROT_COMMERCE_STATUS",
  "BOLD_ENVIRONMENT",
  "TAROT_PHYSICAL_SPECS",
  "TAROT_PRODUCT_CONTENTS",
  "TAROT_DISPATCH_TEXT",
  "TAROT_SHIPPING_TEXT",
  "BOLD_BUTTON_SECRET_KEY_TEST",
  "BOLD_BUTTON_IDENTITY_KEY_TEST",
  "BOLD_BUTTON_SECRET_KEY_PRODUCTION",
  "BOLD_BUTTON_IDENTITY_KEY_PRODUCTION",
  "BOLD_SECRET_KEY_TEST",
  "BOLD_API_KEY_TEST",
  "TAROT_SELLER_PHONE",
  "TAROT_SELLER_EMAIL",
  "TAROT_SELLER_ADDRESS",
  "TAROT_SELLER_LEGAL_ID",
  "TAROT_SELLER_LEGAL_NAME",
  "TAROT_BOLD_PAYMENT_METHODS",
  "GA4_MEASUREMENT_PROTOCOL_API_SECRET",
  "TAROT_SERVER_PURCHASE_TRACKING_READY",
  "TAROT_BOLD_WEBHOOK_READY",
  "TAROT_ORDERS_READY",
  "TAROT_SHIPPING_REGIONS",
  "TAROT_RETURNS_TEXT",
  "TAROT_PRODUCT_IMAGE_APPROVED_FOR_SALE",
  "TAROT_PRODUCT_IMAGE_STATUS",
  "TAROT_PRODUCT_IMAGE",
  "TAROT_SHIPPING_INCLUDED",
  "TAROT_TAXES_INCLUDED",
  "TAROT_PRICE_COP",
  "NEXT_PUBLIC_GTM_ID",
  "NEXT_PUBLIC_SITE_URL",
  "NEXT_PUBLIC_MUTE_GTAG_LOGS",
  "GA_MEASUREMENT_API_SECRET",
  "NEXT_PUBLIC_GA_ID",
  "OPENAI_API_KEY",
  "ADMIN_PASSWORD",
  "ADMIN_USERNAME",
  "POSTGRES_URL",
  "MITOS_PAYMENT_WORKER_TOKEN",
  "BEDROCK_TEXT_MODEL_ID",
  "BEDROCK_TEXT_MAX_TOKENS",
  "BEDROCK_TEXT_MAX_ATTEMPTS"
]);
export function mergeRuntimeSecret(secret, environment) {
  if (!secret || Array.isArray(secret) || typeof secret !== 'object') throw new Error('Invalid runtime configuration.');
  const env = { ...environment };
  for (const [key, value] of Object.entries(secret)) {
    if (!SECRET_KEYS.has(key) || typeof value !== 'string') throw new Error('Unexpected runtime configuration field.');
    env[key] = value;
  }
  for (const key of ['ADMIN_USERNAME', 'ADMIN_PASSWORD', 'POSTGRES_URL', 'MITOS_PAYMENT_WORKER_TOKEN']) {
    if (!env[key]?.trim()) throw new Error('Required runtime configuration missing.');
  }
  const db = new URL(env.POSTGRES_URL);
  if (db.hostname !== env.MITOS_RDS_HOST || db.pathname !== '/mitos' || decodeURIComponent(db.username) !== 'mitos_app') throw new Error('Runtime database must use the dedicated Mitos application account.');
  if (env.NEXT_PUBLIC_SITE_URL !== 'https://www.mitosdecolombia.com') throw new Error('Canonical site mismatch.');
  return env;
}
