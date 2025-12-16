#!/usr/bin/env bash
set -euo pipefail
shopt -s nullglob

# Output folder (created if missing)
OUT_DIR="mirrored_out"
mkdir -p "$OUT_DIR"

# Extensions to process (add/remove as you want)
EXTS=("png" "jpg" "jpeg" "webp" "gif")

# Prefer ImageMagick v7 ("magick"), fall back to v6 ("convert")
if command -v magick >/dev/null 2>&1; then
  IM=(magick)
elif command -v convert >/dev/null 2>&1; then
  IM=(convert)
else
  echo "Error: ImageMagick not found. Install it (magick/convert) and try again."
  exit 1
fi

did_any=false

for ext in "${EXTS[@]}"; do
  for f in *."$ext"; do
    did_any=true

    base="${f%.*}"
    out="$OUT_DIR/${base}.${ext}"

    # original (left) + flipped (right)
    "${IM[@]}" "$f" \( "$f" -flop \) +append "$out"

    echo "Wrote: $out"
  done
done

if ! $did_any; then
  echo "No images found in $(pwd) matching: ${EXTS[*]}"
fi
