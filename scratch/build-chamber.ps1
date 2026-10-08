Add-Type -AssemblyName System.Drawing

$srcPath = "D:\13U\public\images\steel\plate-field.jpg"
$outPath = "D:\13U\public\images\steel\plate-chamber.jpg"

$src = [System.Drawing.Image]::FromFile($srcPath)
$w = 1920
$h = 1080

$bmp = New-Object System.Drawing.Bitmap $w, $h, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

# 1. Base pure obsidian
$g.Clear([System.Drawing.Color]::FromArgb(255, 0, 0, 0))

# 2. Extract curved floor arc from plate-field.jpg
$srcFloorH = [int]($src.Height * 0.44)
$srcFloorRect = New-Object System.Drawing.Rectangle 0, ($src.Height - $srcFloorH), $src.Width, $srcFloorH

$arcH = [int]($h * 0.35)
$botBmp = New-Object System.Drawing.Bitmap $w, $arcH
$botG = [System.Drawing.Graphics]::FromImage($botBmp)
$botG.DrawImage($src, (New-Object System.Drawing.Rectangle 0, 0, $w, $arcH), $srcFloorRect, [System.Drawing.GraphicsUnit]::Pixel)

$topBmp = New-Object System.Drawing.Bitmap $w, $arcH
$topG = [System.Drawing.Graphics]::FromImage($topBmp)
$topG.DrawImage($src, (New-Object System.Drawing.Rectangle 0, 0, $w, $arcH), $srcFloorRect, [System.Drawing.GraphicsUnit]::Pixel)
$topBmp.RotateFlip([System.Drawing.RotateFlipType]::RotateNoneFlipY)

# Draw top arc and bottom arc
$g.DrawImage($topBmp, (New-Object System.Drawing.Rectangle 0, 0, $w, $arcH))
$g.DrawImage($botBmp, (New-Object System.Drawing.Rectangle 0, ($h - $arcH), $w, $arcH))

$topBmp.Dispose()
$topG.Dispose()
$botBmp.Dispose()
$botG.Dispose()

# 3. Deep Jet Black Obsidian Mask (preserving ONLY the curved horizon light rays)
$fullRect = New-Object System.Drawing.Rectangle 0, 0, $w, $h
$blackMaskBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
    (New-Object System.Drawing.PointF 0, 0),
    (New-Object System.Drawing.PointF 0, $h),
    [System.Drawing.Color]::Transparent,
    [System.Drawing.Color]::Transparent
)
$bBlend = New-Object System.Drawing.Drawing2D.ColorBlend
$bBlend.Colors = @(
    [System.Drawing.Color]::FromArgb(255, 0, 0, 0),    # Top border 100% black
    [System.Drawing.Color]::FromArgb(210, 0, 0, 0),    # Top ceiling dark falloff
    [System.Drawing.Color]::FromArgb(0, 0, 0, 0),      # Top arc peak highlight
    [System.Drawing.Color]::FromArgb(240, 0, 0, 0),    # Fast drop into black
    [System.Drawing.Color]::FromArgb(255, 0, 0, 0),    # Upper center 100% JET BLACK
    [System.Drawing.Color]::FromArgb(255, 0, 0, 0),    # Center 100% JET BLACK
    [System.Drawing.Color]::FromArgb(255, 0, 0, 0),    # Lower center 100% JET BLACK
    [System.Drawing.Color]::FromArgb(240, 0, 0, 0),    # Fast drop into black
    [System.Drawing.Color]::FromArgb(0, 0, 0, 0),      # Bottom arc peak highlight
    [System.Drawing.Color]::FromArgb(210, 0, 0, 0),    # Bottom floor dark falloff
    [System.Drawing.Color]::FromArgb(255, 0, 0, 0)     # Bottom border 100% black
)
$bBlend.Positions = @(0.0, 0.09, 0.18, 0.29, 0.36, 0.50, 0.64, 0.71, 0.82, 0.91, 1.0)
$blackMaskBrush.InterpolationColors = $bBlend
$g.FillRectangle($blackMaskBrush, $fullRect)
$blackMaskBrush.Dispose()

# 4. Rich Burnished Bronze & Luminous Champagne Radiant Beam Colorization
# (Exact color values sampled from reference: rich amber-gold/bronze body + champagne apex)
$goldBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
    (New-Object System.Drawing.PointF 0, 0),
    (New-Object System.Drawing.PointF 0, $h),
    [System.Drawing.Color]::Transparent,
    [System.Drawing.Color]::Transparent
)
$gBlend = New-Object System.Drawing.Drawing2D.ColorBlend
$gBlend.Colors = @(
    [System.Drawing.Color]::FromArgb(0, 0, 0, 0),
    [System.Drawing.Color]::FromArgb(110, 180, 125, 70),   # Top outer bronze halo
    [System.Drawing.Color]::FromArgb(200, 248, 208, 145),  # Top radiant champagne core
    [System.Drawing.Color]::FromArgb(100, 175, 120, 65),   # Top inner bronze halo
    [System.Drawing.Color]::FromArgb(0, 0, 0, 0),
    [System.Drawing.Color]::FromArgb(0, 0, 0, 0),          # Obsidian void center
    [System.Drawing.Color]::FromArgb(0, 0, 0, 0),
    [System.Drawing.Color]::FromArgb(100, 175, 120, 65),   # Bottom inner bronze halo
    [System.Drawing.Color]::FromArgb(200, 248, 208, 145),  # Bottom radiant champagne core
    [System.Drawing.Color]::FromArgb(110, 180, 125, 70),   # Bottom outer bronze halo
    [System.Drawing.Color]::FromArgb(0, 0, 0, 0)
)
$gBlend.Positions = @(0.0, 0.12, 0.18, 0.24, 0.32, 0.50, 0.68, 0.76, 0.82, 0.88, 1.0)
$goldBrush.InterpolationColors = $gBlend
$g.FillRectangle($goldBrush, $fullRect)
$goldBrush.Dispose()

# 5. Crisp Razor Specular White Centerline
$razorBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
    (New-Object System.Drawing.PointF 0, 0),
    (New-Object System.Drawing.PointF 0, $h),
    [System.Drawing.Color]::Transparent,
    [System.Drawing.Color]::Transparent
)
$rBlend = New-Object System.Drawing.Drawing2D.ColorBlend
$rBlend.Colors = @(
    [System.Drawing.Color]::FromArgb(0, 0, 0, 0),
    [System.Drawing.Color]::FromArgb(70, 255, 245, 230),   # Razor white top centerline
    [System.Drawing.Color]::FromArgb(0, 0, 0, 0),
    [System.Drawing.Color]::FromArgb(0, 0, 0, 0),
    [System.Drawing.Color]::FromArgb(70, 255, 245, 230),   # Razor white bottom centerline
    [System.Drawing.Color]::FromArgb(0, 0, 0, 0)
)
$rBlend.Positions = @(0.0, 0.18, 0.21, 0.79, 0.82, 1.0)
$razorBrush.InterpolationColors = $rBlend
$g.FillRectangle($razorBrush, $fullRect)
$razorBrush.Dispose()

# 6. Lateral Curvature Vignette (pure black on sides)
$sideBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
    (New-Object System.Drawing.PointF 0, 0),
    (New-Object System.Drawing.PointF $w, 0),
    [System.Drawing.Color]::Transparent,
    [System.Drawing.Color]::Transparent
)
$sBlend = New-Object System.Drawing.Drawing2D.ColorBlend
$sBlend.Colors = @(
    [System.Drawing.Color]::FromArgb(255, 0, 0, 0),  # Extreme edge 100% black
    [System.Drawing.Color]::FromArgb(150, 0, 0, 0),  # Outer flank shadow
    [System.Drawing.Color]::FromArgb(0, 0, 0, 0),    # Center open
    [System.Drawing.Color]::FromArgb(150, 0, 0, 0),  # Outer flank shadow
    [System.Drawing.Color]::FromArgb(255, 0, 0, 0)   # Extreme edge 100% black
)
$sBlend.Positions = @(0.0, 0.14, 0.50, 0.86, 1.0)
$sideBrush.InterpolationColors = $sBlend
$g.FillRectangle($sideBrush, $fullRect)
$sideBrush.Dispose()

# Save High Quality JPEG
$bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)

$g.Dispose()
$bmp.Dispose()
$src.Dispose()

Write-Host "Re-generated plate-chamber.jpg with rich bronze-gold gradient"
