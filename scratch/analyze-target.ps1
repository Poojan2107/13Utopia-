Add-Type -AssemblyName System.Drawing

$imgFile = "C:\Users\pooja\.gemini\antigravity-ide\brain\4e78eea9-f815-4747-b0aa-c563ffd0afe7\.user_uploaded\media_1791376707676.png"
$b = New-Object System.Drawing.Bitmap $imgFile
Write-Host "Target Image Dimensions: Width=$($b.Width), Height=$($b.Height)"

# Sample top-left corner
$pTL = $b.GetPixel(30, 30)
Write-Host "Top-Left (30,30): R=$($pTL.R), G=$($pTL.G), B=$($pTL.B)"

# Sample top arc apex (center top around y=100-250)
for ($y = 50; $y -lt 350; $y += 30) {
    $p = $b.GetPixel([int]($b.Width / 2), $y)
    Write-Host "Center y=${y}: R=$($p.R), G=$($p.G), B=$($p.B)"
}

# Sample far-left edge vertically (background is visible outside text)
Write-Host "`n--- Left Edge Column (x=40) ---"
for ($y = 50; $y -lt $b.Height; $y += 60) {
    $p = $b.GetPixel(40, $y)
    Write-Host "Left y=${y}: R=$($p.R), G=$($p.G), B=$($p.B)"
}

# Sample bottom arc floor
Write-Host "`n--- Center Bottom Column ---"
for ($y = $b.Height - 300; $y -lt $b.Height; $y += 30) {
    $p = $b.GetPixel([int]($b.Width / 2), $y)
    Write-Host "Center y=${y}: R=$($p.R), G=$($p.G), B=$($p.B)"
}

$b.Dispose()
