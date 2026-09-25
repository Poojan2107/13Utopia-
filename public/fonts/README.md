# Typography test fonts

Drop licensed `.woff2` files here to replace Google proxies on `/type-lab`.

```
public/fonts/
  noe-display/
    NoeDisplay-Regular.woff2
    NoeDisplay-Medium.woff2
  canela/
    Canela-Regular.woff2
    Canela-Medium.woff2
  tiempos-headline/
    TiemposHeadline-Regular.woff2
    TiemposHeadline-Medium.woff2
```

If the font is already installed on your OS, `local()` in `styles/fonts-licensed.css` will pick it up without files.

Until then the lab uses labeled proxies:

| Variant | Intended | Proxy (Google Fonts) |
|---------|----------|----------------------|
| A | Noe Display | Source Serif 4 |
| B | Canela | Fraunces |
| C | Tiempos Headline | Newsreader |

UI grotesk for all three: **IBM Plex Sans** (restrained Neue Montreal–class stand-in).
