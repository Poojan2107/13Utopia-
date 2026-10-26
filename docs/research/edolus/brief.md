# Edolus Cloned Site Brief

## Overview
- **Source**: `https://edolus.com/`
- **Identifier**: `edolus`
- **Isolated Route**: `/clone/edolus`
- **Isolated Components**: `components/sites/edolus/`
- **Isolated Assets**: `public/sites/edolus/`
- **Inspection Evidence**: `docs/research/edolus/`

---

## Architecture & Technology
- **Engine**: PlayCanvas WebGL Engine
- **3D Assets**:
  - `StarlinkV2-1.glb` (Satellite with unfolding solar arrays)
  - `ComputeTrayJOINED.glb` (Orbital compute server tray)
  - `processor.glb` (AI microprocessor)
  - `Tesla-ready2.glb` (Autonomous vehicle)
  - `DiamondV4.glb`, `MAP.glb`, `CurvedScreen.glb`, `AutonomousDeployment.glb`
- **Video & Environment**:
  - `Space-compressNOAUDIO-YTfullHD.mp4` (Atmospheric Earth space video background)
  - Atmospheric glow shader and lens flares
- **Audio System**:
  - Multi-stem dynamic mixer: `bass_stemAUDITION30.ogg`, `melody_stem_AUDITION302.ogg`, `instruments_stemAUDITION305.ogg`
  - Interactive SFX for CTA, HUD scramble text, and transitions
- **Typography & Branding**:
  - Font: `General Sans` (Light, Regular, Medium, Semibold, Bold)
  - Primary Headlines: "INTELLIGENCE AT PLANETARY SCALE", "ORBITAL INTELLIGENCE"
  - Subtitles: "Orchestrating the foundation of artificial intelligence from the edge of the atmosphere."
  - HUD telemetry and constellation nodes

---

## Experience Lifecycle
1. **Boot / Splash Sequence**:
   - Vector draw-on Edolus logo on pure black background.
   - Dual-band shutter reveal exposing the live WebGL orbit scene.
   - Logo glides to top-center.
   - Title, subtitle, and `[ INITIATE SYSTEM ]` button fade in.
2. **Scroll / Choreographed Camera Orbit**:
   - 14 keyframe timeline scrolling through orbital space into datacenter server trays, chip architecture, autonomous vehicles, and future roadmap.
3. **Controls**:
   - Top-right `||| AUDIO` toggle.
   - Wheel & touch scroll scrub.
   - Mouse look / parallax orientation.
