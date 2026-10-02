// Operator snapshot of the unpublished RDS copy. This command cannot mark migration acceptance.
import { exportPublicSnapshot } from '../../runtime/public-snapshot.mjs';
import { operatorClient } from './operator-postgres.mjs';
const client = await operatorClient('mitos_backup');
try {
  const receipt = await exportPublicSnapshot(client, {sourceVerified: false});
  console.log(JSON.stringify({sha256:receipt.sha256, sourceVerified:receipt.sourceVerified, counts:Object.fromEntries(Object.entries(receipt.tables).map(([k,v])=>[k,v.count]))}));
} finally { await client.end(); }
