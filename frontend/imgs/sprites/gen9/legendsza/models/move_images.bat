@echo off
setlocal EnableDelayedExpansion

REM Image extensions to move (edit if needed)
set EXTENSIONS=png jpg jpeg gif bmp webp tif tiff

REM Loop through first-level directories only
for /d %%D in (*) do (
    REM Create target folder inside each directory
    if not exist "%%D\%%~nxD" (
        mkdir "%%D\%%~nxD"
    )

    REM Move images directly inside the folder (no recursion)
    for %%E in (%EXTENSIONS%) do (
        for %%F in ("%%D\*.%%E") do (
            if exist "%%F" (
                move "%%F" "%%D\%%~nxD\" >nul
            )
        )
    )
)

echo Done.
pause
