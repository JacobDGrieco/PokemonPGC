# ==========================================
# ImageMagick Recursive Mirror/Extend (OVERWRITE)
# ==========================================
# Skips filenames containing: Nor, Mask, ld, msk  (case-insensitive)
# Eye* files: centered + mirrored overlap (3 tiles composited)
# Others: left original + right flipped (2x width)
# Overwrites originals safely via temp output
# ==========================================

# Use current directory as root (paste-and-run friendly)
$ROOT = (Get-Location).Path

# Locate ImageMagick
$magickCmd = Get-Command magick.exe -ErrorAction SilentlyContinue
if (-not $magickCmd) { $magickCmd = Get-Command magick -ErrorAction SilentlyContinue }
if (-not $magickCmd) { throw "ImageMagick not found in PATH. Install it and ensure 'magick' works." }
$MAGICK = $magickCmd.Source

# Recursively process PNGs
Get-ChildItem -LiteralPath $ROOT -Recurse -File -Filter "*.png" |
Where-Object {
    $n = $_.Name
    # Skip any that include these tokens (case-insensitive)
    ($n -notmatch '(?i)Nor')  -and
    ($n -notmatch '(?i)Mask') -and
    ($n -notmatch '(?i)\bld\b') -and
    ($n -notmatch '(?i)msk')
} |
ForEach-Object {

    $inPath  = $_.FullName
    $tmpPath = "$inPath.__tmp.png"

    # Dimensions
    $dim = & $MAGICK identify -format "%w %h" "$inPath"
    if (-not $dim) { Write-Warning "Identify failed: $inPath"; return }

    $parts = $dim -split '\s+'
    $w = [int]$parts[0]
    $h = [int]$parts[1]
    if ($w -lt 1 -or $h -lt 1) { Write-Warning "Bad dimensions: $inPath"; return }

    $w2   = $w * 2
    $xMid = [int]($w / 2)          # +w/2
    $xL   = -1 * $xMid             # -w/2
    $xR   = $w + $xMid             # w + w/2 = 3w/2

    if ($_.BaseName -match '(?i)^Eye') {
        # Eye operation (your "perfect" version)
        & $MAGICK `
            -size "${w2}x${h}" canvas:none `
            '(' "$inPath" ')' -geometry "+${xMid}+0" -composite `
            '(' "$inPath" -flop ')' -geometry "+${xL}+0"  -composite `
            '(' "$inPath" -flop ')' -geometry "+${xR}+0"  -composite `
            "$tmpPath"
    }
    else {
        # Regular operation
        & $MAGICK `
            -size "${w2}x${h}" canvas:none `
            '(' "$inPath" ')' -geometry "+0+0" -composite `
            '(' "$inPath" -flop ')' -geometry "+${w}+0" -composite `
            "$tmpPath"
    }

    if ($LASTEXITCODE -eq 0 -and (Test-Path -LiteralPath $tmpPath)) {
        Move-Item -LiteralPath $tmpPath -Destination $inPath -Force
        Write-Host "Processed: $inPath"
    }
    else {
        Write-Warning "FAILED: $inPath"
        if (Test-Path -LiteralPath $tmpPath) { Remove-Item -LiteralPath $tmpPath -Force }
    }
}

Write-Host "`nDone."
