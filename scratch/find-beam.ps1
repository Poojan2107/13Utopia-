Add-Type -AssemblyName System.Drawing
$img = "C:\Users\pooja\.gemini\antigravity-ide\brain\f11dd69e-5abe-4670-b6a4-150aece8e40c\.user_uploaded\media_1791452808930.png"
$b = New-Object System.Drawing.Bitmap $img
# Sample column x=135 (outside the letter 'B' of 'BE')
for ($y = 0; $y -lt $b.Height; $y += 15) {
    $p = $b.GetPixel(135, $y)
    if ($p.R -gt 50 -or $p.G -gt 50) {
        Write-Host "BEAM POINT x=135, y=$y (pct=$([math]::Round($y/$b.Height, 3))): R=$($p.R), G=$($p.G), B=$($p.B)"
    }
}
$b.Dispose()
