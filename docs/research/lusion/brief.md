# Lusion Research Brief

**Target URL:** [https://lusion.co/](https://lusion.co/)  
**Site Identifier:** `lusion`  
**Clone Route:** `/clone/lusion`  
**Components Directory:** `components/sites/lusion/`  
**Assets Directory:** `public/sites/lusion/`  

---

## 1. Visual & Interactive Hierarchy

1. **Preloader & Sound Controller**:
   - Minimal loading counter (0% to 100%)
   - Ambient sound toggle button in header with audio wave canvas indicator
2. **Global Navigation Header**:
   - Left: Lusion wordmark SVG with exclusion blend mode
   - Center: Dynamic back / breadcrumb button (appears in project view)
   - Right: Sound toggle, "Let's talk" pill CTA with animated arrow, and hamburger "Menu" button with status dots
3. **Menu Overlay**:
   - Fullscreen modal navigation:
     - Navigation Links: Home, About Us, Projects, Contact, Labs
     - Secondary: Newsletter subscription, Bristol UK office address, Social channels (Twitter/X, Instagram, LinkedIn)
4. **Hero Experience**:
   - Oversized headline: *"We create 3D visual storytelling and interactive web experiences that help brands stand out."*
   - Interactive Three.js / WebGL interactive 3D canvas: glossy reflective geometric elements with mouse inertia and tilt physics
5. **Brand Intro Section**:
   - *"Bold Ideas, Brought to Life"*
   - Statement on combining multidisciplinary craft: motion, 3D, creative technology, and bespoke digital design
6. **Play Reel**:
   - Botanical / organic 3D simulation video showcase with interactive play controls
7. **Featured Work Portfolio**:
   - Filter tags: All, 3D, Web, Motion, AI, AR / Web3
   - Key case studies:
     - **Oryzo AI** — Autonomous agricultural intelligence platform
     - **Atlas Motion** — Kinetic generative motion identity
     - **Devin AI** — World's first autonomous AI software engineer showcase
     - **Of The Oak** — Luxury craft whiskey digital storytelling
     - **Everswap** — Next-generation liquidity protocol
     - **Porsche: Dream Machine** — Interactive 3D vehicle configurator
     - **Synthetic Human** — Biometric hyper-real digital avatars
     - **Meta: Spatial Fusion** — Next-gen mixed reality interface
     - **DDD 2024** — Digital design conference experiential website
8. **Philosophy & Statement**:
   - *"Where Creative Ideas Become Immersive Experiences"*
9. **Contact & Footer Section**:
   - Bold CTA: *"Is your big idea ready to go wild?"*
   - Direct Email: `hello@lusion.co`
   - Bristol Studio: Suite 2, 9 Marsh Street, Bristol, BS1 4AA, UK

---

## 2. Design Tokens & Styling

- **Palette**:
  - `bg-primary`: `#0a0b0e` (dark obsidian mode) / `#f0f2f7` (light pale grey mode)
  - `fg-primary`: `#ffffff` / `#0f172a`
  - `accent-cyan`: `#00f2fe`
  - `accent-purple`: `#7928ca`
  - `accent-neon`: `#00ff87`
  - `border-glass`: `rgba(255, 255, 255, 0.08)`
  - `bg-glass`: `rgba(255, 255, 255, 0.03)`
- **Typography**:
  - Headings: Bold, ultra-clean grotesque sans-serif (`Syne`, `Inter`, or system display)
  - Body: Precision mono and refined grotesque (`Inter`, `-apple-system`)
- **Motion**:
  - Physics-based mouse following, magnetic buttons, smooth spring transitions via Framer Motion, and WebGL Three.js interactive shader canvas
