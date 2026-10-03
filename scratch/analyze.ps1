Add-Type -AssemblyName System.Drawing
$b = New-Object System.Drawing.Bitmap "D:\13U\public\metal-human\metal-human.jpg"
Write-Host "Width: $($b.Width), Height: $($b.Height)"
$minX = $b.Width
$maxX = 0
$minY = $b.Height
$maxY = 0
for ($y = 0; $y -lt $b.Height; $y += 4) {
    for ($x = 0; $x -lt $b.Width; $x += 4) {
        $p = $b.GetPixel($x, $y)
        if ($p.R -gt 25 -or $p.G -gt 25 -or $p.B -gt 25) {
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}
Write-Host "Bounds: minX=$minX, maxX=$maxX, minY=$minY, maxY=$maxY"
$cx = ($minX + $maxX) / (2.0 * $b.Width)
$cy = ($minY + $maxY) / (2.0 * $b.Height)
$bw = ($maxX - $minX) / (1.0 * $b.Width)
$bh = ($maxY - $minY) / (1.0 * $b.Height)
Write-Host "Bust Center: X=$cx, Y=$cy"
Write-Host "Bust Span: W=$bw, H=$bh"
$b.Dispose()
