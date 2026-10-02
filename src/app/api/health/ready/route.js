import { NextResponse } from 'next/server';
import { getSqlClient } from '../../../../lib/db';
export const dynamic = 'force-dynamic';
export async function GET() {
  try {
    const { rows } = await getSqlClient().query("SELECT EXISTS(SELECT 1 FROM myths) AS populated, EXISTS(SELECT 1 FROM schema_migrations WHERE version='002-admin-jobs.sql') AS schema_ready" );
    if (!rows[0]?.populated || !rows[0]?.schema_ready) throw new Error('Catalog not ready.');
    return NextResponse.json({ ok: true }, { headers: { 'Cache-Control': 'no-store' } });
  } catch {
    return NextResponse.json({ ok: false }, { status: 503, headers: { 'Cache-Control': 'no-store' } });
  }
}
