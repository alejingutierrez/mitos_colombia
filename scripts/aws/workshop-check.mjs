import {Client} from '../../runtime/workshop-postgres.mjs';
import {storageConfigured,list} from '../../runtime/storage.mjs';
const client=new Client();
try{
 await client.connect();
 const {rows}=await client.query('SELECT current_database() AS database,current_user AS role,(SELECT count(*)::int FROM myths) AS myths,(SELECT ssl FROM pg_stat_ssl WHERE pid=pg_backend_pid()) AS tls');
 const media=await list({prefix:'blob/mitos/',limit:1});
 if(rows[0].database!=='mitos'||rows[0].role!=='mitos_backup'||rows[0].tls!==true||!storageConfigured()||!media.blobs[0]?.url.startsWith('https://media.mitosdecolombia.com/'))throw Error('Workshop probe mismatch.');
 console.log(JSON.stringify({kind:'owned-workshop-read-probe',...rows[0],s3Read:true,noAiCalls:true,noWrites:true}));
}finally{await client.end();}
