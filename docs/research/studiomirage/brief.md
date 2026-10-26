# Studio Mirage Research Brief

**Target URL:** [https://studiomirage.io/](https://studiomirage.io/)  
**Site Identifier:** `studiomirage`  
**Clone Route:** `/clone/studiomirage`  
**Components Directory:** `components/sites/studiomirage/`  
**Assets Directory:** `public/sites/studiomirage/`  
**Research Directory:** `docs/research/studiomirage/`  

---

## 1. Visual & Interactive Hierarchy

1. **Preloader & Ambient Audio Controller**:
   - Atmospheric luxury soundtrack (`soundtrack.mp3`) with toggle button.
   - Dynamic 4-bar equalizer visualization indicating playback state.
   - Smooth volume fade-in and mute control.

2. **Global Navigation Header**:
   - Left: Studio Mirage wordmark (`logo-mirage.png`) with Arabic glyph toggle (`logo-mirage-arabic.svg`).
   - Center/Meta: Dual studio presence badges: "Paris, FR" & "Dubai, UAE" with live localized time.
   - Right: Sound toggle button, navigation links ("Our works", "Services", "About us"), and primary glowing contact button.
   - Multi-layer glassmorphic blur with gradient feathering (`Header__blur`).

3. **3D Desert Landscape & Dunes Canvas**:
   - Draco-compressed GLB model: `Mirage_scene_03.glb` (`ground` mesh / dunes geometry).
   - Three.js WebGL renderer with custom atmospheric shader lighting, dune shadows, and horizon fog.
   - Scroll-driven camera trajectory smoothly traversing the desert terrain as the user moves down the page.
   - Dynamic sand dust particle field drifting with cursor tilt.

4. **Hero Experience**:
   - Location tag: "PARIS / DUBAI"
   - Headline: "STUDIO MIRAGE" & "CREATIVE TECH STUDIO"
   - Subtitle: "We craft immersive digital experiences at the intersection of luxury, culture, and high technology."
   - Scroll CTA: "Scroll to start exploring" with animated floating arrow.

5. **Featured Works Slider / Showcase**:
   - Interactive project showcase cycling through real extracted work thumbnails:
     - **DIFC** — Immersive experience for Dubai International Financial Centre.
     - **Maison Margiela** — Haute-couture digital exhibition & interactive archive.
     - **Renault Trucks** — Real-time 3D interactive electric truck configurator.
     - **Omnicell Explorer** — Healthcare robotics interactive spatial simulation.
     - **Ubisoft** — Interactive gaming campaign experience.
     - **Tasmim** — Middle Eastern creative design conference platform.
     - **Sopra Banking Software** — High-performance financial technology web platform.
     - **Caisse des Dépôts** — Institutional digital transformation platform.
     - **Jinns** — Real-time WebGL cinematic 3D journey.
     - **Biotherm** — Biotech luxury skincare interactive experience.
   - Interactive preview carousel with project client, category tags, index indicator, and next/prev arrow controls.

6. **Studio Capabilities & Services Grid**:
   - **01 // Creative Technology**: Bespoke interactive web applications, WebGL, shaders, and micro-interactions.
   - **02 // 3D & Real-time**: Next-generation 3D graphics rendered live in the browser at 60+ FPS.
   - **03 // Immersive Web & Brand Experiences**: Flagship brand websites, product showcases, and interactive launches.
   - **04 // Spatial & CGI Motion**: High-fidelity procedural animations, spatial computing, and digital art.

7. **About Section**:
   - Studio manifesto bridging European craftsmanship (Paris) with futuristic Arabian innovation (Dubai).
   - Key stats: Dual-city studio, global clientele, award-winning interactive productions.

8. **Monumental Footer**:
   - Massive Arabic calligraphy watermark SVG behind footer elements.
   - Dual-city studio locations with live clock:
     - **Paris**: 28 Rue du Sentier, 75002 Paris, France
     - **Dubai**: Gate Village, DIFC, Dubai, UAE
   - Conic-gradient glowing contact CTA: "Start a project"
   - Social links: Instagram, LinkedIn, X / Twitter, Awwwards.

---

## 2. Design Tokens & Styling

- **Palette**:
  - `bg-primary`: `#050505` (Obsidian black)
  - `bg-card`: `rgba(18, 18, 20, 0.65)`
  - `fg-primary`: `#f5f5f7` (Titanium soft white)
  - `fg-muted`: `#8e8e93` (Cool slate grey)
  - `accent-gold`: `#d4af37` / `#c59b27` (Desert amber gold)
  - `accent-cyan`: `#4ecdc4`
  - `border-glass`: `rgba(255, 255, 255, 0.08)`
  - `glow-conic`: `conic-gradient(from 0deg, #d4af37, #f72585, #4361ee, #4cc9f0, #d4af37)`
- **Typography**:
  - Font Family: `PPPangramSans`, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
  - Real WOFF2 files: `PPPangramSans-Medium.woff2`, `PPPangramSans-Semibold.woff2`, `PPPangramSans-Bold.woff2`, `PPPangramSans-Extrabold.woff2`
- **Motion & Interactions**:
  - WebGL 3D terrain exploration with camera drift
  - Magnetic cursor follower
  - Conic animated glowing borders on CTAs
  - Smooth parallax on project images
