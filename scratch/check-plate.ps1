Add-Type -AssemblyName System.Drawing
$b = New-Object System.Drawing.Bitmap "d:\13U\public\images\steel\plate-field.jpg"
Write-Host "plate-field.jpg: $($b.Width)x$($b.Height)"
for ($y = 0; $y -lt 300; $y += 30) {
    $p = $b.GetPixel(250, $y)
    Write-Host "plate-field y=$y: R=$($p.R), G=$($p.G), B=$($p.B)"
}
$b.Dispose()
