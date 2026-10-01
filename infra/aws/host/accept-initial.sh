#!/bin/bash
# Only after operator callback QA, bridge activation and DNS cut. Continues on this RDS if a later step fails.
set -euo pipefail
umask 027
exec 9>/var/lock/mitos-release.lock
flock -n 9 || exit 4
test "$(aws sts get-caller-identity --query Account --output text)" = 907264907058
test ! -e /opt/mitos/cutover-complete
prepared=/var/lib/mitos/initial/prepared.json
jq -e '.kind=="initial-prepared" and .productionAccepted==false' "$prepared" >/dev/null
sha=$(jq -r .sha "$prepared");digest=$(jq -r .digest "$prepared");container=$(jq -r .container "$prepared")
[[ "$sha" =~ ^[a-f0-9]{40}$ && "$digest" =~ ^sha256:[a-f0-9]{64}$ && "$container" = "mitos-web-$sha" ]] || exit 2
if test -s /var/lib/mitos/active.json;then jq -e --arg sha "$sha" --arg digest "$digest" '.sha==$sha and .digest==$digest' /var/lib/mitos/active.json >/dev/null;fi
image="907264907058.dkr.ecr.us-east-1.amazonaws.com/mitos-colombia@$digest"
curl -fsS --max-time 30 "https://www.mitosdecolombia.com/api/version?initial=$sha" | jq -e --arg sha "$sha" '.sha==$sha' >/dev/null
curl -fsS --max-time 30 https://www.mitosdecolombia.com/api/health/ready >/dev/null
# Operator writes this bound receipt after testing DNS, provider callbacks and unique RDS writes.
aws s3 cp s3://mitos-colombia-907264907058-operations/cutover/public-acceptance.json /var/lib/mitos/initial/public-acceptance.json --only-show-errors
jq -e --arg sha "$sha" --arg digest "$digest" '.kind=="initial-public-acceptance" and .sha==$sha and .digest==$digest and .writer=="rds" and .sourceFrozen==true and .sourceBridgeVerified==true and .publicDnsVerified==true and .publicAuthQaPassed==true and .publicEditorialQaPassed==true and .commerceQaPassed==true and .callbackCaptureQaPassed==true' /var/lib/mitos/initial/public-acceptance.json >/dev/null
# Acceptance marker is written last. Interrupted worker startup leaves no false completion.
install -d -o 1001 -g 1001 /var/lib/mitos/locks
if test ! -e /var/lib/mitos/locks/work.lock;then install -o 1001 -g 1001 -m 0640 /dev/null /var/lib/mitos/locks/work.lock;fi
for name in mitos-admin-worker mitos-payment-worker;do
 if docker inspect "$name" >/dev/null 2>&1;then docker inspect "$name" | jq -e --arg image "$image" '.[0].State.Running==true and .[0].RestartCount==0 and .[0].Config.Image==$image' >/dev/null;continue;fi
 if test "$name" = mitos-admin-worker;then
  docker run -d --name "$name" --restart unless-stopped --log-driver local --log-opt max-size=10m --log-opt max-file=3 --memory 512m --memory-swap 512m --cpus 0.5 --pids-limit 180 --init --env-file /opt/mitos/runtime.env -e NODE_OPTIONS=--max-old-space-size=96 -e MITOS_PG_POOL_MAX=1 -e MITOS_CACHE_DIR=/var/lib/mitos/cache -v /var/lib/mitos/locks:/var/lib/mitos/locks -v /var/lib/mitos/cache:/var/lib/mitos/cache -v /var/lib/mitos/image-cache:/app/.next/cache "$image" admin-worker >/dev/null
 else
  docker run -d --name "$name" --restart unless-stopped --log-driver local --log-opt max-size=10m --log-opt max-file=3 --memory 128m --memory-swap 128m --cpus 0.25 --pids-limit 64 --init --network host --env-file /opt/mitos/runtime.env -e NODE_OPTIONS=--max-old-space-size=64 "$image" worker >/dev/null
 fi
done
sleep 5
for name in mitos-admin-worker mitos-payment-worker;do docker inspect "$name" | jq -e --arg image "$image" '.[0].State.Running==true and .[0].RestartCount==0 and .[0].Config.Image==$image' >/dev/null;done
jq '{sha,digest,container,port}' "$prepared" > /var/lib/mitos/active.json.tmp
mv /var/lib/mitos/active.json.tmp /var/lib/mitos/active.json
jq -n --arg at "$(date -u +%FT%TZ)" --arg sha "$sha" --arg digest "$digest" '{kind:"migration-accepted",at:$at,sha:$sha,digest:$digest,writer:"rds",productionAccepted:true}' > /var/lib/mitos/initial/accepted.json
aws s3 cp /var/lib/mitos/initial/accepted.json s3://mitos-colombia-907264907058-operations/cutover/accepted.json --only-show-errors
install -m 0640 /var/lib/mitos/initial/accepted.json /opt/mitos/cutover-complete
