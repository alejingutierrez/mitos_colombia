#!/bin/bash
set -euo pipefail
umask 027
exec 9>/var/lock/mitos-release.lock
flock -n 9 || { echo 'A Mitos release is already running.' >&2; exit 1; }
sha=${1:?SHA required}
digest=${2:?Digest required}
[[ "$sha" =~ ^[a-f0-9]{40}$ && "$digest" =~ ^sha256:[a-f0-9]{64}$ ]] || exit 2
test -f /opt/mitos/cutover-complete || { echo 'Migration acceptance gate is closed.' >&2; exit 3; }
test -s /opt/mitos/runtime.env
account=$(aws sts get-caller-identity --query Account --output text)
test "$account" = 907264907058
registry=907264907058.dkr.ecr.us-east-1.amazonaws.com
image="$registry/mitos-colombia@$digest"
workdir="/var/lib/mitos/releases/$sha"
install -d -m 0750 "$workdir"
aws s3 cp "s3://mitos-colombia-907264907058-operations/ci/$sha/release.json" "$workdir/release.json" --only-show-errors
jq -e --arg sha "$sha" --arg digest "$digest" '.sha==$sha and .digest==$digest and .sourceVerified==true and .schemaVersion=="001-operations"' "$workdir/release.json" >/dev/null
available=$(awk '/MemAvailable:/{print $2}' /proc/meminfo)
(( available >= 900000 )) || { echo 'Not enough memory for a candidate without risking the active release.' >&2; exit 4; }
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin "$registry" >/dev/null
docker pull "$image" >/dev/null
docker logout "$registry" >/dev/null
if test -s /var/lib/mitos/active.json && jq -e --arg sha "$sha" --arg digest "$digest" '.sha==$sha and .digest==$digest' /var/lib/mitos/active.json >/dev/null; then
  curl -fsS --max-time 30 "https://www.mitosdecolombia.com/api/version?release=$sha" | jq -e --arg sha "$sha" '.sha==$sha' >/dev/null
  echo 'Immutable release is already serving.'
  exit 0
fi
old_name=''
old_port=3102
if test -s /var/lib/mitos/active.json; then
  old_name=$(jq -r .container /var/lib/mitos/active.json)
  old_port=$(jq -r .port /var/lib/mitos/active.json)
fi
port=3101
if test "$old_port" = 3101; then port=3102; fi
candidate="mitos-web-$sha"
install -d -o 1001 -g 1001 /var/lib/mitos/cache /var/lib/mitos/image-cache
switched=false
worker_replaced=false
old_worker="mitos-payment-worker-before-$sha"
if test -s /var/lib/mitos/active.json; then cp /var/lib/mitos/active.json "$workdir/previous-active.json"; fi
cleanup() {
  result=$?
  if (( result != 0 )); then
    if $switched && test -s "$workdir/previous-upstream.conf"; then
      cp "$workdir/previous-upstream.conf" /etc/nginx/mitos-upstream.conf
      nginx -t && systemctl reload nginx
    fi
    if $worker_replaced; then
      docker stop -t 80 mitos-payment-worker >/dev/null 2>&1 || true
      docker rm mitos-payment-worker >/dev/null 2>&1 || true
      if docker inspect "$old_worker" >/dev/null 2>&1; then docker rename "$old_worker" mitos-payment-worker; docker start mitos-payment-worker >/dev/null; fi
    fi
    if test -s "$workdir/previous-active.json"; then cp "$workdir/previous-active.json" /var/lib/mitos/active.json; fi
    if test -n "$old_name"; then docker start "$old_name" >/dev/null 2>&1 || true; fi
    docker stop -t 30 "$candidate" >/dev/null 2>&1 || true
    echo 'Release failed; previous application image retained.' >&2
  fi
}
trap cleanup EXIT
docker run -d --name "$candidate" --restart unless-stopped --memory 768m --memory-swap 768m --cpus 1.5 --pids-limit 160 --init \
  --env-file /opt/mitos/runtime.env -e MITOS_DEPLOYMENT_SHA="$sha" -e MITOS_IMAGE_DIGEST="$digest" \
  -e MITOS_CACHE_DIR=/var/lib/mitos/cache -e NODE_OPTIONS=--max-old-space-size=384 \
  -p "127.0.0.1:$port:3000" -v /var/lib/mitos/cache:/var/lib/mitos/cache \
  -v /var/lib/mitos/image-cache:/app/.next/cache "$image" web >/dev/null
ready=false
for attempt in $(seq 1 30); do
  if curl -fsS --max-time 5 "http://127.0.0.1:$port/api/health/ready" >/dev/null; then ready=true; break; fi
  sleep 2
done
$ready || { echo 'Candidate did not become ready.' >&2; exit 5; }
for route in / /mitos /tarot /sitemap.xml /robots.txt /api/taxonomy; do
  curl -fsS --max-time 20 "http://127.0.0.1:$port$route" >/dev/null
done
curl -fsS --max-time 5 "http://127.0.0.1:$port/api/version" | jq -e --arg sha "$sha" '.sha==$sha' >/dev/null
if test -s /etc/nginx/mitos-upstream.conf; then cp /etc/nginx/mitos-upstream.conf "$workdir/previous-upstream.conf"; fi
printf 'upstream mitos_web { server 127.0.0.1:%s; keepalive 16; }\n' "$port" > "$workdir/upstream.conf"
install -m 0644 "$workdir/upstream.conf" /etc/nginx/mitos-upstream.conf
nginx -t
systemctl reload nginx
switched=true
for route in /api/health/ready /api/version /mitos /tarot; do curl -fsS --max-time 20 "http://127.0.0.1:3080$route" >/dev/null; done
# A public smoke failure rolls the application image back on the same RDS.
curl -fsS --max-time 30 "https://www.mitosdecolombia.com/api/version?release=$sha" | jq -e --arg sha "$sha" '.sha==$sha' >/dev/null
jq -n --arg sha "$sha" --arg digest "$digest" --arg container "$candidate" --argjson port "$port" '{sha:$sha,digest:$digest,container:$container,port:$port}' > "$workdir/active.json"
cp "$workdir/active.json" /var/lib/mitos/active.json.tmp
mv /var/lib/mitos/active.json.tmp /var/lib/mitos/active.json
# Drain payment work before restarting its process; the durable queue remains active.
if docker inspect mitos-payment-worker >/dev/null 2>&1; then
  docker stop -t 80 mitos-payment-worker >/dev/null
  docker rename mitos-payment-worker "$old_worker"
fi
worker_replaced=true
docker run -d --name mitos-payment-worker --restart unless-stopped --memory 128m --memory-swap 128m --cpus 0.25 --pids-limit 64 --init \
  --network host --env-file /opt/mitos/runtime.env -e MITOS_DEPLOYMENT_SHA="$sha" -e MITOS_IMAGE_DIGEST="$digest" \
  -e NODE_OPTIONS=--max-old-space-size=64 "$image" worker >/dev/null
sleep 5
docker inspect mitos-payment-worker | jq -e '.[0].State.Running==true and .[0].RestartCount==0' >/dev/null
# HTTP responses are drained before the previous container stops.
sleep 30
if test -n "$old_name" && test "$old_name" != "$candidate"; then docker stop -t 60 "$old_name" >/dev/null; fi
jq -n --arg sha "$sha" --arg digest "$digest" --arg at "$(date -u +%FT%TZ)" '{sha:$sha,digest:$digest,at:$at,status:"SUCCEEDED"}' > "$workdir/deployment.json"
aws s3 cp "$workdir/deployment.json" "s3://mitos-colombia-907264907058-operations/releases/$sha/deployment.json" --only-show-errors
trap - EXIT
