export function authRateLimitKeys(scope, address, email) {
  const keys=[`${scope}:ip:${String(address || 'unknown').slice(0,80)}`];
  if (email) keys.push(`${scope}:account:${String(email).slice(0,220)}`);
  return keys;
}
