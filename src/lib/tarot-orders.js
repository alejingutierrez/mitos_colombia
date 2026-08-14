import "server-only";

import { randomBytes } from "node:crypto";
import { getSqlClient, getSqliteDbWritable, isPostgres } from "./db";
import { cleanTarotCampaign } from "./tarot-attribution";

const FINAL_STATUSES = new Set(["APPROVED", "DECLINED", "VOIDED", "ERROR"]);
const PAYMENT_STATUSES = new Set(["PENDING", ...FINAL_STATUSES]);
let initializationPromise;

function rows(result) {
  return result?.rows || result || [];
}

function createReference() {
  return `tarot-${Date.now().toString(36)}-${randomBytes(7).toString("hex")}`;
}

function createStatusToken() {
  return randomBytes(24).toString("hex");
}

function safeJson(value) {
  try {
    return JSON.stringify(value || {});
  } catch {
    return "{}";
  }
}

function parseJsonObject(value) {
  try {
    const parsed = JSON.parse(value || "{}");
    return parsed && typeof parsed === "object" && !Array.isArray(parsed)
      ? parsed
      : {};
  } catch {
    return {};
  }
}

async function initializePostgres() {
  const db = getSqlClient();
  await db`
    CREATE TABLE IF NOT EXISTS tarot_orders (
      reference TEXT PRIMARY KEY,
      status_token TEXT UNIQUE NOT NULL,
      status TEXT NOT NULL DEFAULT 'CREATED',
      sku TEXT NOT NULL,
      quantity INTEGER NOT NULL,
      unit_price_cop INTEGER NOT NULL,
      amount_in_cents BIGINT NOT NULL,
      currency VARCHAR(3) NOT NULL,
      email TEXT NOT NULL,
      full_name TEXT NOT NULL,
      phone TEXT NOT NULL,
      region TEXT NOT NULL,
      city TEXT NOT NULL,
      address_line_1 TEXT NOT NULL,
      address_line_2 TEXT,
      campaign_json TEXT NOT NULL DEFAULT '{}',
      analytics_json TEXT NOT NULL DEFAULT '{}',
      payment_provider TEXT NOT NULL DEFAULT 'BOLD',
      payment_transaction_id TEXT UNIQUE,
      payment_method_type TEXT,
      analytics_purchase_claimed_at TIMESTAMPTZ,
      analytics_purchase_sent_at TIMESTAMPTZ,
      analytics_purchase_last_error TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      approved_at TIMESTAMPTZ
    )
  `;
  await db`
    ALTER TABLE tarot_orders
    ADD COLUMN IF NOT EXISTS analytics_json TEXT NOT NULL DEFAULT '{}'
  `;
  await db`
    ALTER TABLE tarot_orders
    ADD COLUMN IF NOT EXISTS analytics_purchase_claimed_at TIMESTAMPTZ
  `;
  await db`
    ALTER TABLE tarot_orders
    ADD COLUMN IF NOT EXISTS analytics_purchase_sent_at TIMESTAMPTZ
  `;
  await db`
    ALTER TABLE tarot_orders
    ADD COLUMN IF NOT EXISTS analytics_purchase_last_error TEXT
  `;
  await db`
    ALTER TABLE tarot_orders
    ADD COLUMN IF NOT EXISTS payment_provider TEXT NOT NULL DEFAULT 'BOLD'
  `;
  await db`
    ALTER TABLE tarot_orders
    ADD COLUMN IF NOT EXISTS payment_transaction_id TEXT UNIQUE
  `;
}

function initializeSqlite() {
  const db = getSqliteDbWritable();
  db.exec(`
    CREATE TABLE IF NOT EXISTS tarot_orders (
      reference TEXT PRIMARY KEY,
      status_token TEXT UNIQUE NOT NULL,
      status TEXT NOT NULL DEFAULT 'CREATED',
      sku TEXT NOT NULL,
      quantity INTEGER NOT NULL,
      unit_price_cop INTEGER NOT NULL,
      amount_in_cents INTEGER NOT NULL,
      currency TEXT NOT NULL,
      email TEXT NOT NULL,
      full_name TEXT NOT NULL,
      phone TEXT NOT NULL,
      region TEXT NOT NULL,
      city TEXT NOT NULL,
      address_line_1 TEXT NOT NULL,
      address_line_2 TEXT,
      campaign_json TEXT NOT NULL DEFAULT '{}',
      analytics_json TEXT NOT NULL DEFAULT '{}',
      payment_provider TEXT NOT NULL DEFAULT 'BOLD',
      payment_transaction_id TEXT UNIQUE,
      payment_method_type TEXT,
      analytics_purchase_claimed_at TEXT,
      analytics_purchase_sent_at TEXT,
      analytics_purchase_last_error TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now')),
      approved_at TEXT
    )
  `);

  const columns = new Set(
    db.prepare("PRAGMA table_info(tarot_orders)").all().map((column) => column.name)
  );
  const missingColumns = [
    ["analytics_json", "TEXT NOT NULL DEFAULT '{}'"],
    ["analytics_purchase_claimed_at", "TEXT"],
    ["analytics_purchase_sent_at", "TEXT"],
    ["analytics_purchase_last_error", "TEXT"],
    ["payment_provider", "TEXT NOT NULL DEFAULT 'BOLD'"],
    ["payment_transaction_id", "TEXT"],
  ];
  missingColumns.forEach(([name, definition]) => {
    if (!columns.has(name)) {
      db.exec(`ALTER TABLE tarot_orders ADD COLUMN ${name} ${definition}`);
    }
  });
}

export async function ensureTarotOrdersTable() {
  if (!initializationPromise) {
    initializationPromise = (
      isPostgres()
        ? initializePostgres()
        : Promise.resolve().then(initializeSqlite)
    ).catch((error) => {
      initializationPromise = undefined;
      throw error;
    });
  }
  return initializationPromise;
}

export async function createTarotOrder({
  sku,
  quantity,
  unitPriceCop,
  amountInCents,
  currency,
  email,
  fullName,
  phone,
  region,
  city,
  addressLine1,
  addressLine2,
  campaign,
  analytics,
}) {
  await ensureTarotOrdersTable();
  const reference = createReference();
  const statusToken = createStatusToken();
  const campaignJson = safeJson(campaign);
  const analyticsJson = safeJson(analytics);

  if (isPostgres()) {
    const db = getSqlClient();
    const result = await db`
      INSERT INTO tarot_orders (
        reference, status_token, status, sku, quantity, unit_price_cop,
        amount_in_cents, currency, email, full_name, phone, region, city,
        address_line_1, address_line_2, campaign_json, analytics_json
      ) VALUES (
        ${reference}, ${statusToken}, 'CREATED', ${sku}, ${quantity},
        ${unitPriceCop}, ${amountInCents}, ${currency}, ${email}, ${fullName},
        ${phone}, ${region}, ${city}, ${addressLine1}, ${addressLine2 || null},
        ${campaignJson}, ${analyticsJson}
      )
      RETURNING reference, status_token, status, sku, quantity,
        unit_price_cop, amount_in_cents, currency, created_at
    `;
    return rows(result)[0];
  }

  const db = getSqliteDbWritable();
  db.prepare(
    `INSERT INTO tarot_orders (
      reference, status_token, status, sku, quantity, unit_price_cop,
      amount_in_cents, currency, email, full_name, phone, region, city,
      address_line_1, address_line_2, campaign_json, analytics_json
    ) VALUES (?, ?, 'CREATED', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
  ).run(
    reference,
    statusToken,
    sku,
    quantity,
    unitPriceCop,
    amountInCents,
    currency,
    email,
    fullName,
    phone,
    region,
    city,
    addressLine1,
    addressLine2 || null,
    campaignJson,
    analyticsJson
  );

  return {
    reference,
    status_token: statusToken,
    status: "CREATED",
    sku,
    quantity,
    unit_price_cop: unitPriceCop,
    amount_in_cents: amountInCents,
    currency,
    created_at: new Date().toISOString(),
  };
}

export async function findTarotOrderByStatusToken(statusToken) {
  await ensureTarotOrdersTable();
  if (!statusToken) return null;

  if (isPostgres()) {
    const db = getSqlClient();
    const result = await db`
      SELECT reference, status_token, status, sku, quantity, unit_price_cop,
        amount_in_cents, currency, payment_provider, payment_transaction_id,
        payment_method_type, campaign_json, created_at, updated_at, approved_at
      FROM tarot_orders
      WHERE status_token = ${statusToken}
      LIMIT 1
    `;
    return rows(result)[0] || null;
  }

  return (
    getSqliteDbWritable()
      .prepare(
        `SELECT reference, status_token, status, sku, quantity, unit_price_cop,
          amount_in_cents, currency, payment_provider, payment_transaction_id,
          payment_method_type, campaign_json, created_at, updated_at, approved_at
        FROM tarot_orders WHERE status_token = ? LIMIT 1`
      )
      .get(statusToken) || null
  );
}

async function findTarotOrderByReference(reference) {
  await ensureTarotOrdersTable();
  if (!reference) return null;

  if (isPostgres()) {
    const db = getSqlClient();
    const result = await db`
      SELECT * FROM tarot_orders WHERE reference = ${reference} LIMIT 1
    `;
    return rows(result)[0] || null;
  }

  return (
    getSqliteDbWritable()
      .prepare("SELECT * FROM tarot_orders WHERE reference = ? LIMIT 1")
      .get(reference) || null
  );
}

export async function findTarotOrderByPaymentTransactionId(transactionId) {
  await ensureTarotOrdersTable();
  const value = String(transactionId || "").trim();
  if (!value) return null;

  if (isPostgres()) {
    const db = getSqlClient();
    const result = await db`
      SELECT * FROM tarot_orders
      WHERE payment_transaction_id = ${value}
      LIMIT 1
    `;
    return rows(result)[0] || null;
  }

  return (
    getSqliteDbWritable()
      .prepare(
        "SELECT * FROM tarot_orders WHERE payment_transaction_id = ? LIMIT 1"
      )
      .get(value) || null
  );
}

function nextStatus(currentStatus, incomingStatus) {
  if (currentStatus === "APPROVED") return "APPROVED";
  if (incomingStatus === "APPROVED") return "APPROVED";
  if (FINAL_STATUSES.has(currentStatus) && incomingStatus === "PENDING") {
    return currentStatus;
  }
  return incomingStatus;
}

export async function markTarotOrderPaymentStarted(
  reference,
  transactionId,
  paymentMethodType
) {
  const order = await findTarotOrderByReference(String(reference || "").trim());
  if (!order) return { matched: false, reason: "order_not_found" };
  const id = String(transactionId || "").trim();
  if (!id) return { matched: false, reason: "missing_transaction_id" };

  if (isPostgres()) {
    const db = getSqlClient();
    const result = await db`
      UPDATE tarot_orders
      SET status = CASE WHEN status = 'APPROVED' THEN status ELSE 'PENDING' END,
          payment_provider = 'BOLD',
          payment_transaction_id = COALESCE(${id}, payment_transaction_id),
          payment_method_type = COALESCE(${paymentMethodType || null}, payment_method_type),
          updated_at = NOW()
      WHERE reference = ${order.reference}
      RETURNING *
    `;
    return { matched: true, order: rows(result)[0] };
  }

  getSqliteDbWritable()
    .prepare(
      `UPDATE tarot_orders
       SET status = CASE WHEN status = 'APPROVED' THEN status ELSE 'PENDING' END,
           payment_provider = 'BOLD',
           payment_transaction_id = COALESCE(?, payment_transaction_id),
           payment_method_type = COALESCE(?, payment_method_type),
           updated_at = datetime('now')
       WHERE reference = ?`
    )
    .run(id, paymentMethodType || null, order.reference);
  return { matched: true, order: await findTarotOrderByReference(order.reference) };
}

export async function markTarotOrderPaymentFailed(reference) {
  const order = await findTarotOrderByReference(String(reference || "").trim());
  if (!order) return { matched: false, reason: "order_not_found" };

  if (isPostgres()) {
    const db = getSqlClient();
    const result = await db`
      UPDATE tarot_orders
      SET status = CASE WHEN status = 'APPROVED' THEN status ELSE 'ERROR' END,
          updated_at = NOW()
      WHERE reference = ${order.reference}
      RETURNING *
    `;
    return { matched: true, order: rows(result)[0] };
  }

  getSqliteDbWritable()
    .prepare(
      `UPDATE tarot_orders
       SET status = CASE WHEN status = 'APPROVED' THEN status ELSE 'ERROR' END,
           updated_at = datetime('now')
       WHERE reference = ?`
    )
    .run(order.reference);
  return { matched: true, order: await findTarotOrderByReference(order.reference) };
}

export async function applyBoldPayment(transaction) {
  const reference = String(transaction?.reference_id || "").trim();
  const order = await findTarotOrderByReference(reference);
  if (!order) return { matched: false, reason: "order_not_found" };

  const incomingStatus = String(transaction?.status || "").toUpperCase();
  const incomingAmountCop = Number(transaction?.amount?.total_amount);
  const incomingCurrency = String(transaction?.amount?.currency || "").toUpperCase();

  if (!PAYMENT_STATUSES.has(incomingStatus)) {
    return { matched: false, reason: "unsupported_status" };
  }
  if (
    incomingAmountCop * 100 !== Number(order.amount_in_cents) ||
    incomingCurrency !== String(order.currency).toUpperCase()
  ) {
    return { matched: false, reason: "order_amount_mismatch" };
  }

  const status = nextStatus(order.status, incomingStatus);
  const transactionId = String(transaction?.transaction_id || "").trim() || null;
  const paymentMethodType = String(
    transaction?.payment_method?.name ||
      transaction?.payment_method?.type ||
      transaction?.payment_method ||
      ""
  ).trim() || null;

  if (!transactionId) {
    return { matched: false, reason: "missing_transaction_id" };
  }

  if (isPostgres()) {
    const db = getSqlClient();
    const result = await db`
      UPDATE tarot_orders
      SET status = ${status},
          payment_provider = 'BOLD',
          payment_transaction_id = COALESCE(${transactionId}, payment_transaction_id),
          payment_method_type = COALESCE(${paymentMethodType}, payment_method_type),
          updated_at = NOW(),
          approved_at = CASE
            WHEN ${status} = 'APPROVED' THEN COALESCE(approved_at, NOW())
            ELSE approved_at
          END
      WHERE reference = ${reference}
      RETURNING reference, status_token, status, sku, quantity, unit_price_cop,
        amount_in_cents, currency, payment_provider, payment_transaction_id,
        payment_method_type, campaign_json, analytics_json,
        analytics_purchase_claimed_at, analytics_purchase_sent_at,
        analytics_purchase_last_error, created_at, updated_at, approved_at
    `;
    return { matched: true, order: rows(result)[0] };
  }

  const approvedAt =
    status === "APPROVED"
      ? order.approved_at || new Date().toISOString()
      : order.approved_at;
  getSqliteDbWritable()
    .prepare(
      `UPDATE tarot_orders
       SET status = ?,
           payment_provider = 'BOLD',
           payment_transaction_id = COALESCE(?, payment_transaction_id),
           payment_method_type = COALESCE(?, payment_method_type),
           updated_at = datetime('now'),
           approved_at = ?
       WHERE reference = ?`
    )
    .run(status, transactionId, paymentMethodType, approvedAt || null, reference);

  return {
    matched: true,
    order: await findTarotOrderByReference(reference),
  };
}

export async function claimTarotPurchaseAnalytics(reference) {
  await ensureTarotOrdersTable();
  if (!reference) return { claimed: false, reason: "missing_reference" };

  if (isPostgres()) {
    const db = getSqlClient();
    const result = await db`
      UPDATE tarot_orders
      SET analytics_purchase_claimed_at = NOW(),
          analytics_purchase_last_error = NULL
      WHERE reference = ${reference}
        AND status = 'APPROVED'
        AND analytics_purchase_sent_at IS NULL
        AND (
          analytics_purchase_claimed_at IS NULL OR
          analytics_purchase_claimed_at < NOW() - INTERVAL '5 minutes'
        )
      RETURNING *
    `;
    const order = rows(result)[0];
    if (order) return { claimed: true, order };
  } else {
    const db = getSqliteDbWritable();
    const result = db
      .prepare(
        `UPDATE tarot_orders
         SET analytics_purchase_claimed_at = datetime('now'),
             analytics_purchase_last_error = NULL
         WHERE reference = ?
           AND status = 'APPROVED'
           AND analytics_purchase_sent_at IS NULL
           AND (
             analytics_purchase_claimed_at IS NULL OR
             analytics_purchase_claimed_at < datetime('now', '-5 minutes')
           )`
      )
      .run(reference);
    if (result.changes === 1) {
      return {
        claimed: true,
        order: await findTarotOrderByReference(reference),
      };
    }
  }

  const order = await findTarotOrderByReference(reference);
  if (!order) return { claimed: false, reason: "order_not_found" };
  if (order.analytics_purchase_sent_at) {
    return { claimed: false, reason: "already_sent" };
  }
  if (order.analytics_purchase_claimed_at) {
    return { claimed: false, reason: "in_progress" };
  }
  return { claimed: false, reason: "order_not_approved" };
}

export async function markTarotPurchaseAnalyticsSent(reference) {
  await ensureTarotOrdersTable();
  if (!reference) return false;

  if (isPostgres()) {
    const db = getSqlClient();
    const result = await db`
      UPDATE tarot_orders
      SET analytics_purchase_sent_at = COALESCE(analytics_purchase_sent_at, NOW()),
          analytics_purchase_claimed_at = NULL,
          analytics_purchase_last_error = NULL
      WHERE reference = ${reference}
        AND status = 'APPROVED'
      RETURNING reference
    `;
    return Boolean(rows(result)[0]);
  }

  const result = getSqliteDbWritable()
    .prepare(
      `UPDATE tarot_orders
       SET analytics_purchase_sent_at = COALESCE(analytics_purchase_sent_at, datetime('now')),
           analytics_purchase_claimed_at = NULL,
           analytics_purchase_last_error = NULL
       WHERE reference = ? AND status = 'APPROVED'`
    )
    .run(reference);
  return result.changes === 1;
}

export async function releaseTarotPurchaseAnalyticsClaim(reference, error) {
  await ensureTarotOrdersTable();
  const message = String(error?.message || error || "delivery_failed")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 500);
  if (!reference) return false;

  if (isPostgres()) {
    const db = getSqlClient();
    const result = await db`
      UPDATE tarot_orders
      SET analytics_purchase_claimed_at = NULL,
          analytics_purchase_last_error = ${message}
      WHERE reference = ${reference}
        AND analytics_purchase_sent_at IS NULL
      RETURNING reference
    `;
    return Boolean(rows(result)[0]);
  }

  const result = getSqliteDbWritable()
    .prepare(
      `UPDATE tarot_orders
       SET analytics_purchase_claimed_at = NULL,
           analytics_purchase_last_error = ?
       WHERE reference = ? AND analytics_purchase_sent_at IS NULL`
    )
    .run(message, reference);
  return result.changes === 1;
}

export function toPublicTarotOrder(order) {
  if (!order) return null;
  const transactionId = order.payment_transaction_id || null;
  const approvedAt = order.approved_at || null;
  return {
    reference: order.reference,
    status: order.status,
    sku: order.sku,
    quantity: Number(order.quantity),
    unitPriceCop: Number(order.unit_price_cop),
    amountInCents: Number(order.amount_in_cents),
    currency: order.currency,
    transactionId,
    paymentProvider: order.payment_provider || null,
    paymentMethodType: order.payment_method_type || null,
    createdAt: order.created_at,
    updatedAt: order.updated_at,
    approvedAt,
    attribution: cleanTarotCampaign(parseJsonObject(order.campaign_json)),
    paymentConfirmed: Boolean(
      order.status === "APPROVED" && transactionId && approvedAt
    ),
  };
}
