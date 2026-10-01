import { NextResponse } from 'next/server';
import { createHash, timingSafeEqual } from 'node:crypto';
import { getSqlClient } from '../../../../lib/db';
import { getBoldConfiguration, verifyBoldWebhookSignature } from '../../../../lib/bold';
import { processSaleEvent } from '../../../../lib/bold-event-processor';
export const dynamic = 'force-dynamic';
const headers = { 'Cache-Control': 'no-store' };
export async function POST(request) {
  const expected = process.env.MITOS_PAYMENT_WORKER_TOKEN;
  const actual = request.headers.get('x-mitos-worker-token') || '';
  if (!expected || Buffer.byteLength(actual) !== Buffer.byteLength(expected) || !timingSafeEqual(Buffer.from(actual), Buffer.from(expected))) return NextResponse.json({ error: 'forbidden' }, { status: 403, headers });
  const configuration = getBoldConfiguration();
  const payload = await request.json();
  const { rawBody, signature } = payload;
  if (typeof rawBody !== 'string' || !verifyBoldWebhookSignature(rawBody, signature, configuration.environment === 'test' ? '' : configuration.secretKey)) return NextResponse.json({ error: 'invalid_signature' }, { status: 400, headers });
  const event = JSON.parse(rawBody);
  const bodyHash = createHash('sha256').update(rawBody).digest('hex');
  const key = String(event.id || bodyHash).slice(0, 180);
  const db = getSqlClient();
  const existing = await db.query('SELECT status, body_hash FROM payment_events WHERE event_key = $1', [key]);
  if (existing.rows[0]?.body_hash && existing.rows[0].body_hash !== bodyHash) return NextResponse.json({ error: 'event_identity_conflict' }, { status: 409, headers });
  if (existing.rows[0]?.status === 'DONE') return NextResponse.json({ ok: true, duplicate: true }, { headers });
  const claim = await db.query("INSERT INTO payment_events(event_key,body_hash,status,lease_until) VALUES ($1,$2,'RUNNING',NOW()+INTERVAL '2 minutes') ON CONFLICT (event_key) DO UPDATE SET status='RUNNING',lease_until=EXCLUDED.lease_until,attempts=payment_events.attempts+1 WHERE payment_events.status <> 'DONE' AND (payment_events.lease_until IS NULL OR payment_events.lease_until < NOW()) RETURNING event_key", [key, bodyHash]);
  if (!claim.rows.length) return NextResponse.json({ error: 'event_leased' }, { status: 409, headers });
  try {
    await processSaleEvent(event, configuration);
    await db.query("UPDATE payment_events SET status='DONE', completed_at=NOW(),lease_until=NULL WHERE event_key=$1", [key]);
    return NextResponse.json({ ok: true }, { headers });
  } catch {
    await db.query("UPDATE payment_events SET status='RETRY', lease_until=NULL WHERE event_key=$1", [key]);
    return NextResponse.json({ error: 'payment_retry' }, { status: 503, headers });
  }
}
