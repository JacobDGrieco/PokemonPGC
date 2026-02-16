# rename_pm_prefix.ps1
# Recursively renames images by removing leading "pm####_##_##_" if present.
# Skips non-matching files. If rename would collide, it skips and prints an error.

$extensions = @(".png", ".jpg", ".jpeg", ".gif", ".bmp", ".webp", ".tif", ".tiff")
$regex = '^(pm\d{4}_\d{2}_)'   # only removes this exact prefix at the START

Get-ChildItem -Path . -Recurse -File |
Where-Object { $extensions -contains $_.Extension.ToLowerInvariant() } |
ForEach-Object {
    $file = $_
    $name = $file.Name

    if ($name -notmatch $regex) {
        return
    }

    $newName = $name -replace $regex, ''
    $destPath = Join-Path $file.DirectoryName $newName

    # If destination exists, skip and log
    if (Test-Path -LiteralPath $destPath) {
        Write-Host "DUPLICATE SKIP: '$($file.FullName)' -> '$destPath'"
        return
    }

    try {
        Rename-Item -LiteralPath $file.FullName -NewName $newName -ErrorAction Stop
        Write-Host "RENAMED: '$($file.FullName)' -> '$destPath'"
    }
    catch {
        Write-Host "ERROR SKIP: '$($file.FullName)' -> '$destPath' :: $($_.Exception.Message)"
    }
}
