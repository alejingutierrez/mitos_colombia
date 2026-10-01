export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs' && process.env.MITOS_RUNTIME === 'aws') {
    const { verifyRuntimeIdentity } = await import('../runtime/guard.mjs');
    await verifyRuntimeIdentity();
  }
}
