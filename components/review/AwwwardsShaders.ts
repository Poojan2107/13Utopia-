// Awwwards-Level Background Shader Collection for 13 Utopia
// Palette: Pure Obsidian (#000000), Graphite (#0A0A0A), Liquid Silver (#1A1A1A), Titanium Light (#4A4A4A), Crystal Glint (#FFFFFF)

export const fullscreenVertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

// ── 01. OBSIDIAN FLUID CAUSTICS SHADER ──────────────────────────────────────────
export const fluidCausticsFragmentShader = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uMouse;
  uniform float uMouseStrength;
  uniform float uSpeed;
  uniform float uIntensity;

  // Hash & Noise
  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  // Smooth Simplex-style Noise
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m;
    m = m*m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution.xy) / min(uResolution.x, uResolution.y);
    float t = uTime * uSpeed * 0.4;

    vec2 mouseP = (uMouse - 0.5) * (uResolution / min(uResolution.x, uResolution.y));
    float mDist = length(uv - mouseP);
    vec2 mDir = uv - mouseP;
    
    // Cursor wave perturbation
    float mouseWave = sin(mDist * 18.0 - uTime * 3.0) * exp(-mDist * 2.8) * uMouseStrength * 0.15;
    vec2 p = uv + normalize(mDir + 0.0001) * mouseWave;

    // Multi-layered caustic wave simulation
    float c1 = snoise(p * 3.2 + vec2(t * 0.35, -t * 0.25));
    float c2 = snoise(p * 5.8 + vec2(-t * 0.45, t * 0.30) + c1 * 0.4);
    float c3 = snoise(p * 11.2 + vec2(t * 0.55, t * 0.50) + c2 * 0.3);

    float causticPattern = pow(max(0.0, 1.0 - abs(c1 * 0.6 + c2 * 0.3 + c3 * 0.1)), 4.0);
    float secondaryCaustic = pow(max(0.0, 1.0 - abs(c2 * 0.7 + c3 * 0.3)), 6.0);

    // Deep liquid monochrome palette
    vec3 voidBlack = vec3(0.0, 0.0, 0.0);
    vec3 deepGraphite = vec3(0.03, 0.03, 0.035);
    vec3 liquidSilver = vec3(0.12, 0.12, 0.13);
    vec3 titaniumShine = vec3(0.55, 0.55, 0.58);
    vec3 crystalSpecular = vec3(0.95, 0.95, 1.0);

    vec3 col = voidBlack;
    col += deepGraphite * smoothstep(0.1, 0.6, causticPattern);
    col += liquidSilver * causticPattern * uIntensity;
    col += titaniumShine * secondaryCaustic * 0.6 * uIntensity;

    // Specular cursor glint
    float cursorGlint = exp(-mDist * 3.2) * (0.12 + 0.35 * uMouseStrength);
    col += crystalSpecular * cursorGlint;

    // Micro film grain for luxury texture
    float grain = (hash(gl_FragCoord.xy + fract(uTime * 17.1)) - 0.5) * 0.015;
    col += vec3(grain);

    // Vignette
    float vig = smoothstep(1.3, 0.25, length(uv));
    col *= (0.75 + 0.25 * vig);

    gl_FragColor = vec4(max(vec3(0.0), col), 1.0);
  }
`;

// ── 02. GRAVITATIONAL FILAMENT LENS SHADER ──────────────────────────────────────
export const gravitationalFilamentFragmentShader = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uMouse;
  uniform float uMouseStrength;
  uniform float uSpeed;
  uniform float uIntensity;

  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  void main() {
    vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution.xy) / min(uResolution.x, uResolution.y);
    float t = uTime * uSpeed * 0.25;

    vec2 mouseP = (uMouse - 0.5) * (uResolution / min(uResolution.x, uResolution.y));
    vec2 delta = uv - mouseP;
    float dist = length(delta);

    // Gravitational Einstein ring lensing warp around cursor
    float lensFactor = 0.035 / (dist + 0.08);
    vec2 warpedUv = uv + normalize(delta + 0.0001) * lensFactor * (0.4 + 0.6 * uMouseStrength);

    // Quantum filament wave equations
    float filaments = 0.0;
    for (int i = 1; i <= 6; i++) {
      float fi = float(i);
      float angle = fi * 0.5235; // 30 deg intervals
      mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
      vec2 rUv = rot * warpedUv;

      float wave = sin(rUv.x * (3.0 + fi * 1.5) + sin(rUv.y * 4.0 + t * (0.8 + fi * 0.2)) + t * 0.5);
      float beam = 0.004 / (abs(rUv.y * 1.6 + wave * 0.18) + 0.006);
      filaments += beam * (0.8 / fi);
    }

    vec3 spaceVoid = vec3(0.0, 0.0, 0.0);
    vec3 darkGraphite = vec3(0.02, 0.02, 0.025);
    vec3 silverThread = vec3(0.18, 0.18, 0.20);
    vec3 titaniumHot = vec3(0.75, 0.75, 0.80);

    vec3 col = spaceVoid;
    col += darkGraphite * smoothstep(0.0, 1.0, filaments * 0.2);
    col += silverThread * filaments * 0.12 * uIntensity;
    col += titaniumHot * pow(filaments * 0.04, 2.0) * uIntensity;

    // Stardust field
    vec2 starGrid = fract(warpedUv * 45.0) - 0.5;
    vec2 starId = floor(warpedUv * 45.0);
    float starHash = hash(starId);
    if (starHash > 0.88) {
      float star = smoothstep(0.08, 0.01, length(starGrid)) * (0.4 + 0.6 * sin(uTime * 2.0 + starHash * 6.28));
      col += vec3(0.7) * star * 0.4;
    }

    // Vignette
    float vig = smoothstep(1.35, 0.2, length(uv));
    col *= (0.7 + 0.3 * vig);

    gl_FragColor = vec4(max(vec3(0.0), col), 1.0);
  }
`;

// ── 03. VOLUMETRIC FBM DARK MATTER (AMBIENTFIELD EVOLUTION) ─────────────────────
export const volumetricFbmFragmentShader = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uMouse;
  uniform float uMouseStrength;
  uniform float uSpeed;
  uniform float uIntensity;

  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

  float snoise(vec3 v) {
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod289(i);
    vec4 p = permute(permute(permute(
               i.z + vec4(0.0, i1.z, i2.z, 1.0))
             + i.y + vec4(0.0, i1.y, i2.y, 1.0))
             + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 0.142857142857;
    vec3  ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }

  float fbm(vec3 p) {
    float v = 0.52 * snoise(p);
    v += 0.30 * snoise(p * 2.05 + vec3(17.3));
    v += 0.14 * snoise(p * 4.12 + vec3(43.8));
    return v;
  }

  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  void main() {
    vec2 centeredUv = (gl_FragCoord.xy - 0.5 * uResolution.xy) / min(uResolution.x, uResolution.y);
    vec2 mouseP = (uMouse - 0.5) * (uResolution / min(uResolution.x, uResolution.y));
    
    vec2 p = centeredUv * 1.30 + (uMouse - 0.5) * 0.14;
    float t = uTime * uSpeed * 0.045;

    // Curl noise swirl
    float q1 = fbm(vec3(p * 1.15, t));
    float q2 = fbm(vec3(p * 1.75 + vec2(q1 * 0.65, -q1 * 0.45), t * 1.15));
    float smoke = fbm(vec3(p * 2.10 + vec2(q2 * 0.50, q1 * 0.50), t * 1.30));

    float density = smoothstep(-0.15, 0.78, smoke + q1 * 0.25 + q2 * 0.15);

    vec3 spaceVoid = vec3(0.0, 0.0, 0.0);
    vec3 graphitePlume = vec3(0.035, 0.035, 0.038);
    vec3 liquidSilver = vec3(0.11, 0.11, 0.12);
    vec3 titaniumLight = vec3(0.32, 0.32, 0.34);
    vec3 crystalGlint = vec3(0.92, 0.92, 0.95);

    vec3 col = spaceVoid;
    col = mix(col, graphitePlume, smoothstep(0.0, 0.35, density));
    col = mix(col, liquidSilver, smoothstep(0.28, 0.70, density) * uIntensity);
    col = mix(col, titaniumLight, smoothstep(0.60, 1.00, density) * 0.85 * uIntensity);

    // Stardust Sparkles
    vec2 sUv = centeredUv * 80.0;
    vec2 sId = floor(sUv);
    vec2 sGv = fract(sUv) - 0.5;
    float sH = hash(sId);
    if (sH > 0.84) {
      float d = length(sGv);
      float sparkle = smoothstep(0.05, 0.008, d) * (0.4 + 0.6 * sin(uTime * 3.5 + sH * 6.28));
      col += crystalGlint * sparkle * 0.35;
    }

    // Pointer Bloom
    float mDist = length(centeredUv - mouseP);
    col += titaniumLight * exp(-mDist * 2.8) * 0.15 * uMouseStrength;

    // Luxury Grain
    float grain = (hash(gl_FragCoord.xy + fract(uTime * 11.3)) - 0.5) * 0.012;
    col += vec3(grain);

    // Vignette
    float vig = smoothstep(1.4, 0.3, length(centeredUv));
    col *= (0.75 + 0.25 * vig);

    gl_FragColor = vec4(max(vec3(0.0), col), 1.0);
  }
`;

// ── 04. LIQUID CHROME VORONOI CAUSTICS ──────────────────────────────────────────
export const liquidChromeFragmentShader = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uMouse;
  uniform float uMouseStrength;
  uniform float uSpeed;
  uniform float uIntensity;

  vec2 hash2(vec2 p) {
    p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
    return fract(sin(p) * 43758.5453);
  }

  // Smooth Voronoi F1 & F2 Metric
  vec2 voronoi(vec2 x, float t) {
    vec2 n = floor(x);
    vec2 f = fract(x);
    vec2 mg, mr;
    float md = 8.0;
    for (int j = -1; j <= 1; j++) {
      for (int i = -1; i <= 1; i++) {
        vec2 g = vec2(float(i), float(j));
        vec2 o = hash2(n + g);
        o = 0.5 + 0.5 * sin(t + 6.2831 * o);
        vec2 r = g + o - f;
        float d = dot(r, r);
        if (d < md) {
          md = d;
          mr = r;
          mg = g;
        }
      }
    }
    float md2 = 8.0;
    for (int j = -1; j <= 1; j++) {
      for (int i = -1; i <= 1; i++) {
        vec2 g = vec2(float(i), float(j));
        vec2 o = hash2(n + g);
        o = 0.5 + 0.5 * sin(t + 6.2831 * o);
        vec2 r = g + o - f;
        if (dot(mr - r, mr - r) > 0.00001) {
          md2 = min(md2, dot(0.5 * (mr + r), normalize(r - mr)));
        }
      }
    }
    return vec2(sqrt(md), md2);
  }

  void main() {
    vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution.xy) / min(uResolution.x, uResolution.y);
    float t = uTime * uSpeed * 0.35;

    vec2 mouseP = (uMouse - 0.5) * (uResolution / min(uResolution.x, uResolution.y));
    float mDist = length(uv - mouseP);
    vec2 p = uv * 2.8 + (uMouse - 0.5) * 0.2;
    p += normalize(uv - mouseP + 0.001) * exp(-mDist * 2.5) * 0.12 * uMouseStrength;

    vec2 v1 = voronoi(p, t);
    vec2 v2 = voronoi(p * 1.8 + vec2(t * 0.2, -t * 0.15), t * 1.2);

    float f1 = v1.x;
    float border = smoothstep(0.04, 0.18, v1.y);
    float spec = pow(max(0.0, 1.0 - f1), 8.0);
    float spec2 = pow(max(0.0, 1.0 - v2.x), 12.0);

    vec3 spaceVoid = vec3(0.0, 0.0, 0.0);
    vec3 graphite = vec3(0.025, 0.025, 0.03);
    vec3 liquidSilver = vec3(0.14, 0.14, 0.15);
    vec3 chromeShine = vec3(0.65, 0.65, 0.70);
    vec3 specularWhite = vec3(0.98, 0.98, 1.0);

    vec3 col = spaceVoid;
    col += graphite * (1.0 - border);
    col += liquidSilver * spec * uIntensity;
    col += chromeShine * spec2 * 0.8 * uIntensity;
    col += specularWhite * pow(spec2, 2.0) * 0.5;

    // Vignette
    float vig = smoothstep(1.3, 0.2, length(uv));
    col *= (0.7 + 0.3 * vig);

    gl_FragColor = vec4(max(vec3(0.0), col), 1.0);
  }
`;
