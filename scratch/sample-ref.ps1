Add-Type -AssemblyName System.Drawing
$img = "C:\Users\pooja\.gemini\antigravity-ide\brain\f11dd69e-5abe-4670-b6a4-150aece8e40c\.user_uploaded\media_1791452808930.png"
$b = New-Object System.Drawing.Bitmap $img
Write-Host "Dimensions: $($b.Width)x$($b.Height)"
for ($y = 40; $y -le 350; $y += 30) {
    $p = $b.GetPixel(60, $y)
    Write-Host "Left x=60, y=$y`: R=$($p.R), G=$($p.G), B=$($p.B)"
}
for ($y = 40; $y -le 350; $y += 30) {
    $p = $b.GetPixel([int]($b.Width/2), $y)
    Write-Host "Center y=$y`: R=$($p.R), G=$($p.G), B=$($p.B)"
}
$b.Dispose()
