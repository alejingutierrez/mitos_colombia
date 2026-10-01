import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
export function GET() {
  return NextResponse.json({ sha: process.env.MITOS_DEPLOYMENT_SHA || null, digest: process.env.MITOS_IMAGE_DIGEST || null }, { headers: { 'Cache-Control': 'no-store' } });
}
