#!/bin/bash
# Prepare the first verified release behind restricted ingress. No production acceptance, DNS or workers.
set -euo pipefail
umask 027
exec 9>/var/lock/mitos-release.lock
flock -n 9 || exit 4
test "$(aws sts get-caller-identity --query Account --output text)" = 907264907058
test ! -e /opt/mitos/cutover-complete
test ! -e /var/lib/mitos/active.json
sha=${1:?SHA}; digest=${2:?Digest}
[[ "$sha" =~ ^[a-f0-9]{40}$ && "$digest" =~ ^sha256:[a-f0-9]{64}$ ]] || exit 2
work=/var/lib/mitos/initial/$sha
install -d -m 0750 "$work"
bucket=mitos-colombia-907264907058-operations
aws s3 cp "s3://$bucket/ci/$sha/release.json" "$work/release.json" --only-show-errors
jq -e --arg sha "$sha" --arg digest "$digest" '.sha==$sha and .digest==$digest and .sourceVerified==true and .schemaVersion=="002-admin-jobs" and (.snapshotPrefix|test("^build-input/snapshots/[a-f0-9-]{36}$"))' "$work/release.json" >/dev/null
prefix=$(jq -r .snapshotPrefix "$work/release.json")
aws s3 cp "s3://$bucket/$prefix/parity.json" "$work/parity.json" --only-show-errors
aws s3 cp "s3://$bucket/cutover/initial-preflight.json" "$work/preflight.json" --only-show-errors
jq -e --slurpfile release "$work/release.json" --arg prefix "$prefix" '.kind=="frozen-owned-parity" and .writer=="source-frozen" and .productionAccepted==false and .prefix==$prefix and .snapshotSha256==$release[0].snapshotSha256 and (.tables|length)==21 and .tables.myths.count>0' "$work/parity.json" >/dev/null
jq -e --slurpfile release "$work/release.json" '.kind=="initial-cut-preflight" and .sha==$release[0].sha and .digest==$release[0].digest and .snapshotSha256==$release[0].snapshotSha256 and .configurationBound==true and .commerceQaPassed==true and .callbackCaptureQaPassed==true and .finalMediaDeltaVerified==true and .finalWorkshopDeltaVerified==true and .sourceFrozen==true and .targetWritersStopped==true' "$work/preflight.json" >/dev/null
now=$(date +%s); checked=$(date -d "$(jq -r .at "$work/preflight.json")" +%s)
(( checked <= now && now-checked <= 3600 )) || { echo 'Initial preflight is stale.' >&2;exit 3; }
# Final copy must run with stage writers stopped. Do not stop an unknown active task here.
if docker ps --format '{{.Names}}' | grep -Eq '^mitos-(qa-editorial-worker|admin-worker|payment-worker)$'; then echo 'Target workers must already be drained and stopped.' >&2;exit 3;fi
old_port=$(grep -o '127.0.0.1:[0-9]*' /etc/nginx/mitos-upstream.conf | cut -d: -f2)
[[ "$old_port" = 3101 || "$old_port" = 3102 ]] || exit 3
port=3101;if test "$old_port" = 3101; then port=3102;fi
available=$(awk '/MemAvailable:/{print $2}' /proc/meminfo)
(( available >= 900000 )) || exit 4
registry=907264907058.dkr.ecr.us-east-1.amazonaws.com;image="$registry/mitos-colombia@$digest";name="mitos-web-$sha"
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin "$registry" >/dev/null
trap 'docker logout "$registry" >/dev/null 2>&1 || true' EXIT
docker pull "$image" >/dev/null;docker logout "$registry" >/dev/null
# An interrupted candidate is preserved for inspection; operator decides recovery.
if docker inspect "$name" >/dev/null 2>&1;then echo 'Initial candidate already exists; inspect before retry.' >&2;exit 4;fi
install -d -o 1001 -g 1001 /var/lib/mitos/cache /var/lib/mitos/image-cache
cp /etc/nginx/mitos-upstream.conf "$work/previous-upstream.conf"
switched=false
cleanup(){ result=$?;if (( result != 0 ));then set +e;if $switched;then cp "$work/previous-upstream.conf" /etc/nginx/mitos-upstream.conf;nginx -t && systemctl reload nginx;fi;docker stop -t 20 "$name" >/dev/null 2>&1;fi;exit "$result"; }
trap cleanup EXIT
docker run -d --name "$name" --restart unless-stopped --log-driver local --log-opt max-size=10m --log-opt max-file=3 --memory 768m --memory-swap 768m --cpus 1.5 --pids-limit 160 --init --env-file /opt/mitos/runtime.env -e MITOS_DEPLOYMENT_SHA="$sha" -e MITOS_IMAGE_DIGEST="$digest" -e MITOS_CACHE_DIR=/var/lib/mitos/cache -e NODE_OPTIONS=--max-old-space-size=384 -p "127.0.0.1:$port:3000" -v /var/lib/mitos/cache:/var/lib/mitos/cache -v /var/lib/mitos/image-cache:/app/.next/cache "$image" web >/dev/null
ready=false
for attempt in $(seq 1 30);do if curl -fsS --max-time 5 "http://127.0.0.1:$port/api/health/ready" >/dev/null;then ready=true;break;fi;sleep 2;done
$ready || exit 5
for route in / /mitos /tarot /tarot/comprar /sitemap.xml /api/taxonomy;do curl -fsS --max-time 20 "http://127.0.0.1:$port$route" >/dev/null;done
curl -fsS --max-time 5 "http://127.0.0.1:$port/api/version" | jq -e --arg sha "$sha" '.sha==$sha' >/dev/null
printf 'upstream mitos_web { server 127.0.0.1:%s; keepalive 16; }\n' "$port" > "$work/upstream.conf"
install -m 0644 "$work/upstream.conf" /etc/nginx/mitos-upstream.conf.tmp
mv /etc/nginx/mitos-upstream.conf.tmp /etc/nginx/mitos-upstream.conf;switched=true
nginx -t;systemctl reload nginx
proxy=false
for attempt in $(seq 1 15);do if curl -fsS --max-time 5 http://127.0.0.1:3080/api/version | jq -e --arg sha "$sha" '.sha==$sha' >/dev/null;then proxy=true;break;fi;sleep 1;done
$proxy || exit 5
jq -n --arg sha "$sha" --arg digest "$digest" --arg container "$name" --argjson port "$port" --arg at "$(date -u +%FT%TZ)" '{kind:"initial-prepared",sha:$sha,digest:$digest,container:$container,port:$port,at:$at,productionAccepted:false}' > "$work/prepared.json"
cp "$work/prepared.json" /var/lib/mitos/initial/prepared.json
trap - EXIT
cat "$work/prepared.json"
