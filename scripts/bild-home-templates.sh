#!/usr/bin/env bash
# Home page → BILDIT CMS code library (beta CLI).
# Usage:
#   BILD_ENTRY=/path/to/bild/src/index.js ./scripts/bild-home-templates.sh template-dry-run
#   BILD_APP_ID=your-app-id ./scripts/bild-home-templates.sh library-add
#
# Requires: `bild login` (or BILD_FIREBASE_TOKEN). library-add needs --image; override with BILD_TEMPLATE_IMAGE.

set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
BILD_ENTRY="${BILD_ENTRY:-/Users/matthudson/Development/BILDIT/bild/src/index.js}"
BLOCKS="$ROOT/app/components/home"
DEFAULT_IMG="$ROOT/public/images/BILDIT Lines Animation.gif"
IMAGE="${BILD_TEMPLATE_IMAGE:-$DEFAULT_IMG}"

bild() {
  node "$BILD_ENTRY" "$@"
}

template_dry_run() {
  for f in "$BLOCKS"/*.tsx; do
    echo "==> bild template from-tsx --dry-run $f"
    bild template from-tsx "$f" --dry-run
  done
}

template_export() {
  for f in "$BLOCKS"/*.tsx; do
    echo "==> bild template from-tsx $f"
    bild template from-tsx "$f"
  done
}

library_add() {
  if [[ -z "${BILD_APP_ID:-}" ]]; then
    echo "Set BILD_APP_ID (e.g. export BILD_APP_ID=bildit-website-staging)" >&2
    exit 1
  fi
  for f in "$BLOCKS"/*.jsx; do
    base="$(basename "$f" .jsx)"
    name="${base//-/ }"
    echo "==> bild library add $f"
    bild library add "$f" \
      --app-id "$BILD_APP_ID" \
      --template-id "$base" \
      --name "$name" \
      --description "" \
      --type Homepage \
      --image "$IMAGE" \
      --code-type tsx
  done
}

cmd="${1:-template-dry-run}"

case "$cmd" in
  template-dry-run) template_dry_run ;;
  template-export) template_export ;;
  library-add) library_add ;;
  *)
    echo "Usage: $0 {template-dry-run|template-export|library-add}" >&2
    exit 1
    ;;
esac
