#!/usr/bin/env bash
set -euo pipefail
shopt -s nullglob

IN_DIR="${1:-.}"
OUT_DIR="$IN_DIR/eye_mirrored_out"
mkdir -p "$OUT_DIR"

# IM6 default on WSL
IM=convert

PATTERN=("$IN_DIR"/*Eye*.*)
EXTS=(png webp jpg jpeg tga bmp gif)

found_any=false

for f in "${PATTERN[@]}"; do
  [[ -f "$f" ]] || continue

  filename="$(basename "$f")"
  ext="${filename##*.}"
  base="${filename%.*}"

  ext_lc="$(printf '%s' "$ext" | tr '[:upper:]' '[:lower:]')"
  ok=false
  for e in "${EXTS[@]}"; do [[ "$ext_lc" == "$e" ]] && ok=true && break; done
  $ok || continue

  found_any=true
  out="$OUT_DIR/${base}.${ext_lc}"

  # Safe dimension read (IM6)
  read -r W H < <($IM "$f" -ping -print "%w %h\n" null:)
  HALF=$(( W / 2 ))
  TWOW=$(( W * 2 ))

  echo "Processing: $filename (${W}x${H})"

  $IM "$f" \
    -alpha set \
    -write mpr:orig +delete \
    \( mpr:orig -crop "${HALF}x${H}+0+0"        +repage -flop \) -write mpr:left  +delete \
    \( mpr:orig -crop "${HALF}x${H}+${HALF}+0"  +repage -flop \) -write mpr:right +delete \
    mpr:orig -alpha set -background transparent -gravity center -extent "${TWOW}x${H}" \
    \( mpr:left  \) -gravity west -geometry +0+0 -compose over -composite \
    \( mpr:right \) -gravity east -geometry +0+0 -compose over -composite \
    "$out"
done

if ! $found_any; then
  echo "No Eye images found in: $IN_DIR"
fi
