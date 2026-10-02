const DEFAULT_RETRY_ATTEMPTS = 5;
const DEFAULT_RETRY_DELAY_MS = 250;

function collectErrorText(error, depth = 0) {
  if (!error || depth > 4) return "";
  const parts = [
    error.message,
    error.code,
    error.name,
    collectErrorText(error.cause, depth + 1),
    collectErrorText(error.sourceError, depth + 1),
  ];
  return parts.filter(Boolean).join(" ");
}

export function isTransientDbError(error) {
  const text = collectErrorText(error).toLowerCase();
  return [
    "fetch failed",
    "socket hang up",
    "econnreset",
    "terminated",
    "connection terminated",
    "connect timeout",
    "und_err_connect_timeout",
    "client network socket disconnected",
  ].some((needle) => text.includes(needle));
}

export function isStaticDataBuild(env = process.env) {
  return (
    env.NEXT_PHASE === "phase-production-build" ||
    env.npm_lifecycle_event === "build"
  );
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function withRetry(
  operation,
  {
    attempts = Number(process.env.MITOS_DB_RETRY_ATTEMPTS || DEFAULT_RETRY_ATTEMPTS),
    baseDelayMs = Number(
      process.env.MITOS_DB_RETRY_DELAY_MS || DEFAULT_RETRY_DELAY_MS
    ),
  } = {}
) {
  let lastError;
  const maxAttempts = Math.max(1, attempts);

  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    try {
      return await operation(attempt);
    } catch (error) {
      lastError = error;
      if (!isTransientDbError(error) || attempt === maxAttempts) {
        throw error;
      }
      await wait(baseDelayMs * attempt);
    }
  }

  throw lastError;
}
