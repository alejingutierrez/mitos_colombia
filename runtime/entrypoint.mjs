import { SecretsManagerClient, GetSecretValueCommand } from '@aws-sdk/client-secrets-manager';
import { spawn } from 'node:child_process';
import { verifyRuntimeIdentity } from './guard.mjs';
import { mergeRuntimeSecret } from './environment.mjs';
try {
  await verifyRuntimeIdentity();
  const mode = process.argv[2] || 'web';
  if (!['web', 'worker'].includes(mode)) throw new Error('Unsupported process.');
  const SecretId = process.env.MITOS_RUNTIME_SECRET_ARN;
  if (!SecretId?.startsWith('arn:aws:secretsmanager:us-east-1:907264907058:secret:mitos-colombia/prod/runtime-')) throw new Error('Runtime secret ownership mismatch.');
  const result = await new SecretsManagerClient({ region: 'us-east-1' }).send(new GetSecretValueCommand({ SecretId }));
  const env = mergeRuntimeSecret(JSON.parse(result.SecretString), process.env);
  env.MITOS_PROCESS = mode;
  const child = spawn(process.execPath, [mode === 'web' ? '/app/server.js' : '/app/runtime/payment-worker.mjs'], { env, stdio: 'inherit' });
  for (const signal of ['SIGTERM', 'SIGINT']) process.on(signal, () => child.kill(signal));
  child.on('error', () => { console.error('Runtime process could not start.'); process.exitCode = 1; });
  child.on('exit', (code, signal) => { process.exitCode = signal ? 0 : code ?? 1; });
} catch (error) {
  console.error('Runtime startup refused', { code: error.code || error.name });
  process.exitCode = 1;
}
