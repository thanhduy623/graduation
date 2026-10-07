# ==============================
# CONFIGURATION
# ==============================

$SourceFolder = "E:\Code\graduation\src"
$OutputFile = "E:\Code\graduation\merge.txt"


# ==============================
# PROCESS
# ==============================

# Remove old output file
if (Test-Path -LiteralPath $OutputFile) {
    Remove-Item -LiteralPath $OutputFile -Force
}

# Image file extensions to skip
$ImageExtensions = @(
    ".jpg",
    ".jpeg",
    ".png",
    ".gif",
    ".bmp",
    ".webp",
    ".svg",
    ".ico",
    ".tif",
    ".tiff",
    ".avif",
    ".heic",
    ".heif"
)

# Get all files recursively
$Files = Get-ChildItem -LiteralPath $SourceFolder -File -Recurse |
    Where-Object {
        $_.FullName -ne $OutputFile -and
        $ImageExtensions -notcontains $_.Extension.ToLower()
    } |
    Sort-Object FullName


# Store output
$Output = @()


foreach ($File in $Files) {

    # File path
    $Output += $File.FullName

    # Read file content
    try {
        $Content = Get-Content -LiteralPath $File.FullName -Raw -Encoding UTF8
        $Output += $Content
    }
    catch {
        $Output += "[ERROR READING FILE: $($_.Exception.Message)]"
    }

    # Separator
    $Output += ""
    $Output += "---oOo---"
    $Output += ""
}


# ==============================
# WRITE OUTPUT
# ==============================

$Output -join "`r`n" |
    Out-File -LiteralPath $OutputFile -Encoding UTF8


# ==============================
# RESULT
# ==============================

Write-Host ""
Write-Host "======================================" -ForegroundColor Green
Write-Host "DONE!" -ForegroundColor Green
Write-Host "======================================" -ForegroundColor Green
Write-Host "Files: $($Files.Count)"
Write-Host "Output: $OutputFile"
Write-Host ""
