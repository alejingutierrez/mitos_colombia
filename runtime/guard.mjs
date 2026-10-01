import { STSClient, GetCallerIdentityCommand } from '@aws-sdk/client-sts';
export const EXPECTED_ACCOUNT = '907264907058';
export async function verifyRuntimeIdentity(env = process.env, client) {
  if (env.MITOS_RUNTIME !== 'aws') return;
  if (env.AWS_REGION !== 'us-east-1') throw new Error('Mitos runtime region mismatch.');
  const identity = await (client || new STSClient({ region: env.AWS_REGION })).send(new GetCallerIdentityCommand({}));
  if (identity.Account !== EXPECTED_ACCOUNT || !/^arn:aws:sts::907264907058:assumed-role\/mitos-colombia-/.test(identity.Arn || '')) throw new Error('Mitos runtime identity mismatch.');
  if (env.BLOB_READ_WRITE_TOKEN || env.AWS_BEARER_TOKEN_BEDROCK || env.AWS_PROFILE) throw new Error('Legacy credentials must not reach the AWS runtime.');
}
