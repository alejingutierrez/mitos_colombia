#!/bin/bash
set -euo pipefail
umask 077
test "${RENEWED_LINEAGE:-/etc/letsencrypt/live/origin.mitosdecolombia.com}" = /etc/letsencrypt/live/origin.mitosdecolombia.com
test "$(aws sts get-caller-identity --query Account --output text)" = 907264907058
tar -C /etc -czf /opt/mitos/origin-tls-backup.tar.gz letsencrypt
chmod 600 /opt/mitos/origin-tls-backup.tar.gz
aws s3 cp /opt/mitos/origin-tls-backup.tar.gz s3://mitos-colombia-907264907058-operations/certificates/origin/letsencrypt.tar.gz --sse AES256 --only-show-errors
rm /opt/mitos/origin-tls-backup.tar.gz
nginx -t
systemctl reload nginx
