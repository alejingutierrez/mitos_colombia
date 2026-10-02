#!/bin/bash
set -euo pipefail
umask 077
test "${CERTBOT_DOMAIN:-}" = origin.mitosdecolombia.com
[[ "${CERTBOT_VALIDATION:-}" =~ ^[A-Za-z0-9_-]+$ ]]
action=UPSERT
if test "${1:-}" = cleanup; then action=DELETE; fi
batch=$(jq -n --arg action "$action" --arg value "\"$CERTBOT_VALIDATION\"" '{Changes:[{Action:$action,ResourceRecordSet:{Name:"_acme-challenge.origin.mitosdecolombia.com",Type:"TXT",TTL:30,ResourceRecords:[{Value:$value}]}}]}')
id=$(aws route53 change-resource-record-sets --hosted-zone-id Z10003897KR85ZBPM93O --change-batch "$batch" --query ChangeInfo.Id --output text)
aws route53 wait resource-record-sets-changed --id "$id"
