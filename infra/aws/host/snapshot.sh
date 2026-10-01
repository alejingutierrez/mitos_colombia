#!/bin/bash
set -euo pipefail
umask 027
exec 9>/var/lock/mitos-release.lock
flock -w 30 9 || exit 1
test -f /opt/mitos/cutover-complete || { echo 'Migration acceptance gate is closed.' >&2; exit 3; }
test -s /var/lib/mitos/active.json
container=$(jq -r .container /var/lib/mitos/active.json)
[[ "$container" =~ ^mitos-web-[a-f0-9]{40}$ ]] || exit 2
image=$(docker inspect --format '{{.Config.Image}}' "$container")
[[ "$image" =~ ^907264907058.dkr.ecr.us-east-1.amazonaws.com/mitos-colombia@sha256:[a-f0-9]{64}$ ]] || exit 2
curl -fsS --max-time 10 http://127.0.0.1:3080/api/health/ready >/dev/null
install -d -m 0750 /var/lib/mitos/snapshots
folder=$(mktemp -d /var/lib/mitos/snapshots/task.XXXXXXXX)
chown 1001:1001 "$folder"
trap 'rm -rf "$folder"' EXIT
docker run --rm --memory 256m --memory-swap 256m --cpus 0.5 --pids-limit 64 --init \
  --env-file /opt/mitos/runtime.env -e MITOS_SNAPSHOT_ACCEPTED=1 -e NODE_OPTIONS=--max-old-space-size=128 \
  -v "$folder:/snapshot" --entrypoint node "$image" /app/runtime/snapshot-task.mjs
