// 13 UTOPIA // LUMINOUS SILK STREAMLINES SUITE
// 5 Tuned Variations of the Luminous Silk Streamlines Aesthetic for Pure Luxury Noir

export const fullscreenVertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

// ── 01. TITANIUM SILK HARMONIC (Balanced Studio Edition) ───────────────────────
export const silkHarmonicShader = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uMouse;
  uniform float uMouseStrength;

  void main() {
    vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution.xy) / min(uResolution.x, uResolution.y);
    float t = uTime * 0.22;

    vec2 mouseP = (uMouse - 0.5) * (uResolution / min(uResolution.x, uResolution.y));
    float mDist = length(uv - mouseP);

    // 25-degree diagonal sweep
    float angle = 0.44;
    mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
    vec2 rUv = rot * (uv + (uMouse - 0.5) * 0.18);

    float fibers = 0.0;
    float glow = 0.0;

    for (int i = 0; i < 16; i++) {
      float fi = float(i);
      float yOffset = (fi - 8.0) * 0.13;
      
      float wave = sin(rUv.x * 2.6 + t * (0.7 + fi * 0.06) + fi * 0.5) * 0.19;
      wave += cos(rUv.x * 5.0 - t * 0.5 + fi * 0.3) * 0.07;

      // Mouse displacement
      float distToFiber = abs(rUv.y - yOffset - wave);
      
      float core = 0.0028 / (distToFiber + 0.0035);
      float halo = exp(-distToFiber * 12.0) * 0.22;
      
      float intensity = 0.5 + 0.5 * sin(rUv.x * 2.8 + t + fi * 0.7);
      fibers += core * intensity;
      glow += halo;
    }

    vec3 darkVoid = vec3(0.008, 0.008, 0.012);
    vec3 titaniumDeep = vec3(0.12, 0.13, 0.16);
    vec3 platinumBright = vec3(0.72, 0.74, 0.82);
    vec3 crystalCore = vec3(1.0, 1.0, 1.0);

    vec3 col = darkVoid;
    col += titaniumDeep * glow * 0.38;
    col += platinumBright * fibers * 0.085;
    col += crystalCore * pow(fibers * 0.04, 2.4);

    // Mouse proximity halo
    col += vec3(0.4, 0.45, 0.55) * exp(-mDist * 2.8) * (0.05 + 0.18 * uMouseStrength);

    // Luxury vignette
    float vig = smoothstep(1.4, 0.3, length(uv));
    col *= (0.7 + 0.3 * vig);

    gl_FragColor = vec4(max(vec3(0.0), col), 1.0);
  }
`;

// ── 02. ULTRA-DENSE MICRO FIBERS (High-Definition Woven Silk) ──────────────────
export const silkMicroFibersShader = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uMouse;
  uniform float uMouseStrength;

  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  void main() {
    vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution.xy) / min(uResolution.x, uResolution.y);
    float t = uTime * 0.18;

    vec2 mouseP = (uMouse - 0.5) * (uResolution / min(uResolution.x, uResolution.y));
    float mDist = length(uv - mouseP);

    float angle = 0.52;
    mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
    vec2 rUv = rot * (uv + (uMouse - 0.5) * 0.15);

    float fibers = 0.0;
    float glow = 0.0;

    // 28 Dense micro filaments
    for (int i = 0; i < 28; i++) {
      float fi = float(i);
      float yOffset = (fi - 14.0) * 0.075;
      
      float wave = sin(rUv.x * 3.4 + t * (0.6 + fi * 0.04) + fi * 0.4) * 0.14;
      wave += cos(rUv.x * 7.2 - t * 0.4 + fi * 0.25) * 0.05;

      float distToFiber = abs(rUv.y - yOffset - wave);
      
      float core = 0.0018 / (distToFiber + 0.0025);
      float halo = exp(-distToFiber * 18.0) * 0.18;
      
      float intensity = 0.4 + 0.6 * sin(rUv.x * 4.0 + t * 1.2 + fi * 0.5);
      fibers += core * intensity;
      glow += halo;
    }

    vec3 darkVoid = vec3(0.005, 0.005, 0.008);
    vec3 charcoalGlow = vec3(0.10, 0.11, 0.14);
    vec3 titaniumFibers = vec3(0.65, 0.68, 0.76);
    vec3 crystalSpecular = vec3(1.0, 1.0, 1.0);

    vec3 col = darkVoid;
    col += charcoalGlow * glow * 0.35;
    col += titaniumFibers * fibers * 0.055;
    col += crystalSpecular * pow(fibers * 0.028, 2.6);

    // Micro stardust sparkles on threads
    vec2 sUv = (uv + uMouse * 0.03) * 85.0;
    vec2 sId = floor(sUv);
    vec2 sGv = fract(sUv) - 0.5;
    float sH = hash(sId);
    if (sH > 0.88) {
      float d = length(sGv);
      float sparkle = smoothstep(0.04, 0.005, d) * (0.3 + 0.7 * sin(uTime * 3.5 + sH * 6.28));
      col += vec3(0.95, 0.96, 1.0) * sparkle * (0.3 + 0.7 * glow);
    }

    // Mouse halo
    col += vec3(0.4, 0.45, 0.55) * exp(-mDist * 3.0) * (0.04 + 0.16 * uMouseStrength);

    float vig = smoothstep(1.4, 0.3, length(uv));
    col *= (0.75 + 0.25 * vig);

    gl_FragColor = vec4(max(vec3(0.0), col), 1.0);
  }
`;

// ── 03. SCULPTURAL DEEP WAVE SILK (Broad Liquid Velvet Ribbons) ─────────────────
export const silkSculpturalWaveShader = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uMouse;
  uniform float uMouseStrength;

  void main() {
    vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution.xy) / min(uResolution.x, uResolution.y);
    float t = uTime * 0.28;

    vec2 mouseP = (uMouse - 0.5) * (uResolution / min(uResolution.x, uResolution.y));
    float mDist = length(uv - mouseP);

    float angle = 0.38;
    mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
    vec2 rUv = rot * (uv + (uMouse - 0.5) * 0.22);

    float ribbons = 0.0;
    float shadows = 0.0;

    // 8 Broad sculptural ribbons with 3D shadow falloff
    for (int i = 0; i < 8; i++) {
      float fi = float(i);
      float yOffset = (fi - 4.0) * 0.28;
      
      float wave = sin(rUv.x * 1.8 + t * (0.5 + fi * 0.08) + fi * 0.8) * 0.28;
      wave += cos(rUv.x * 3.6 - t * 0.35 + fi * 0.5) * 0.12;

      float dist = (rUv.y - yOffset - wave);
      
      // Top lit edge + bottom shadow
      float topSheen = exp(-max(0.0, dist) * 14.0) * 0.65;
      float bottomShadow = exp(-max(0.0, -dist) * 8.0) * 0.45;
      
      ribbons += topSheen;
      shadows += bottomShadow;
    }

    vec3 darkObsidian = vec3(0.005, 0.005, 0.008);
    vec3 deepGraphite = vec3(0.06, 0.065, 0.08);
    vec3 titaniumSheen = vec3(0.55, 0.58, 0.68);
    vec3 crystalHighlight = vec3(0.98, 0.98, 1.0);

    vec3 col = darkObsidian;
    col += deepGraphite * shadows * 0.4;
    col += titaniumSheen * ribbons * 0.28;
    col += crystalHighlight * pow(ribbons * 0.3, 3.0);

    // Mouse interactive gleam
    col += vec3(0.5, 0.55, 0.65) * exp(-mDist * 2.8) * (0.05 + 0.22 * uMouseStrength);

    float vig = smoothstep(1.35, 0.25, length(uv));
    col *= (0.7 + 0.3 * vig);

    gl_FragColor = vec4(max(vec3(0.0), col), 1.0);
  }
`;

// ── 04. GRAVITATIONAL VORTEX SILK (High Mouse Reactivity) ──────────────────────
export const silkGravitationalVortexShader = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uMouse;
  uniform float uMouseStrength;

  void main() {
    vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution.xy) / min(uResolution.x, uResolution.y);
    float t = uTime * 0.25;

    vec2 mouseP = (uMouse - 0.5) * (uResolution / min(uResolution.x, uResolution.y));
    vec2 delta = uv - mouseP;
    float mDist = length(delta);

    // Einstein gravitational lensing warp around mouse
    float warpFactor = 0.045 / (mDist + 0.09);
    vec2 warpedUv = uv + normalize(delta + 0.0001) * warpFactor * (0.5 + 0.8 * uMouseStrength);

    float angle = 0.45;
    mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
    vec2 rUv = rot * warpedUv;

    float fibers = 0.0;
    float glow = 0.0;

    for (int i = 0; i < 18; i++) {
      float fi = float(i);
      float yOffset = (fi - 9.0) * 0.12;
      
      float wave = sin(rUv.x * 2.8 + t * (0.8 + fi * 0.07) + fi * 0.5) * 0.18;
      float distToFiber = abs(rUv.y - yOffset - wave);
      
      float core = 0.003 / (distToFiber + 0.004);
      float halo = exp(-distToFiber * 14.0) * 0.25;
      
      fibers += core;
      glow += halo;
    }

    vec3 darkVoid = vec3(0.008, 0.008, 0.012);
    vec3 titaniumGlow = vec3(0.14, 0.15, 0.18);
    vec3 platinumBright = vec3(0.75, 0.78, 0.85);
    vec3 crystalCore = vec3(1.0, 1.0, 1.0);

    vec3 col = darkVoid;
    col += titaniumGlow * glow * 0.4;
    col += platinumBright * fibers * 0.08;
    col += crystalCore * pow(fibers * 0.038, 2.5);

    // Mouse center flare
    col += vec3(0.5, 0.55, 0.70) * exp(-mDist * 2.5) * (0.08 + 0.30 * uMouseStrength);

    float vig = smoothstep(1.4, 0.3, length(uv));
    col *= (0.7 + 0.3 * vig);

    gl_FragColor = vec4(max(vec3(0.0), col), 1.0);
  }
`;

// ── 05. MINIMAL AMBIENT NOIR SILK (Subtle, Max Contrast for Site Content) ───────
export const silkMinimalNoirShader = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uMouse;
  uniform float uMouseStrength;

  void main() {
    vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution.xy) / min(uResolution.x, uResolution.y);
    float t = uTime * 0.18;

    vec2 mouseP = (uMouse - 0.5) * (uResolution / min(uResolution.x, uResolution.y));
    float mDist = length(uv - mouseP);

    float angle = 0.40;
    mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
    vec2 rUv = rot * (uv + (uMouse - 0.5) * 0.12);

    float fibers = 0.0;
    float glow = 0.0;

    for (int i = 0; i < 12; i++) {
      float fi = float(i);
      float yOffset = (fi - 6.0) * 0.16;
      
      float wave = sin(rUv.x * 2.4 + t * (0.6 + fi * 0.05) + fi * 0.6) * 0.16;
      float distToFiber = abs(rUv.y - yOffset - wave);
      
      // Softer, lower contrast for maximum text legibility
      float core = 0.0022 / (distToFiber + 0.005);
      float halo = exp(-distToFiber * 10.0) * 0.18;
      
      fibers += core * (0.4 + 0.6 * sin(rUv.x * 2.2 + t + fi));
      glow += halo;
    }

    vec3 jetBlack = vec3(0.0, 0.0, 0.0);
    vec3 charcoalAtmosphere = vec3(0.04, 0.042, 0.05);
    vec3 subtleTitanium = vec3(0.48, 0.50, 0.56);
    vec3 glint = vec3(0.85, 0.88, 0.95);

    vec3 col = jetBlack;
    col += charcoalAtmosphere * glow * 0.30;
    col += subtleTitanium * fibers * 0.06;
    col += glint * pow(fibers * 0.03, 2.2) * 0.5;

    // Soft cursor glow
    col += vec3(0.3, 0.35, 0.42) * exp(-mDist * 2.6) * (0.04 + 0.12 * uMouseStrength);

    float vig = smoothstep(1.4, 0.25, length(uv));
    col *= (0.7 + 0.3 * vig);

    gl_FragColor = vec4(max(vec3(0.0), col), 1.0);
  }
`;
