// Valeran-grade volumetric raymarch nebula.
// 40-step ray march through a 3D dot-product noise field, elliptical SDF
// mask, OKLab colour grading between bronze and beige, ACES filmic tonemap,
// interleaved-gradient-noise ray jitter and animated film grain.

export const nebulaFragmentShader = /* glsl */ `
  precision highp float;

  varying vec2 vUv;

  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uMouse;          // 0..1, y up
  uniform float uMouseStrength; // 0..1 pointer wake energy
  uniform sampler2D uTrail;     // ping-pong cursor trail
  uniform float uTrailMix;      // master enable for trail influence
  uniform vec3 uBaseColor;
  uniform vec3 uDarkColor;
  uniform vec3 uMidColor;
  uniform vec3 uBrightColor;

  const float PI = 3.14159265359;
  const float TAU = 6.28318530718;
  const int ITERATIONS = 40;

  // ── OKLab ────────────────────────────────────────────────────────────
  vec3 rgbToOklab(vec3 c) {
    float l = 0.4122214708 * c.r + 0.5363325363 * c.g + 0.0514459929 * c.b;
    float m = 0.2119034982 * c.r + 0.6806995451 * c.g + 0.1073969566 * c.b;
    float s = 0.0883024619 * c.r + 0.2817188376 * c.g + 0.6299787005 * c.b;

    l = pow(max(l, 0.0), 1.0 / 3.0);
    m = pow(max(m, 0.0), 1.0 / 3.0);
    s = pow(max(s, 0.0), 1.0 / 3.0);

    return vec3(
      0.2104542553 * l + 0.7936177850 * m - 0.0040720468 * s,
      1.9779984951 * l - 2.4285922050 * m + 0.4505937099 * s,
      0.0259040371 * l + 0.7827717662 * m - 0.8086757660 * s
    );
  }

  vec3 oklabToRgb(vec3 c) {
    float l_ = c.x + 0.3963377774 * c.y + 0.2158037573 * c.z;
    float m_ = c.x - 0.1055613458 * c.y - 0.0638541728 * c.z;
    float s_ = c.x - 0.0894841775 * c.y - 1.2914855480 * c.z;

    float l = l_ * l_ * l_;
    float m = m_ * m_ * m_;
    float s = s_ * s_ * s_;

    return vec3(
      4.0767434754 * l - 3.3077115913 * m + 0.2309699292 * s,
      -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
      -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s
    );
  }

  vec3 oklabMix(vec3 a, vec3 b, float t) {
    vec3 la = rgbToOklab(a);
    vec3 lb = rgbToOklab(b);
    vec3 lm = mix(la, lb, t);
    // Valeran's faint chroma swell through the midpoint keeps mids warm.
    lm.yz *= 1.0 + 0.025 * t * (1.0 - t) * 4.0;
    return oklabToRgb(lm);
  }

  // ── ACES filmic ──────────────────────────────────────────────────────
  vec3 acesFilmic(vec3 x) {
    return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
  }

  // ── hashes / noise ───────────────────────────────────────────────────
  float ign(vec2 st) {
    return fract(52.9829189 * fract(dot(st, vec2(0.06711056, 0.00583715))));
  }

  float hash13(vec3 p) {
    p = fract(p * 0.1031);
    p += dot(p, p.yzx + 33.33);
    return fract((p.x + p.y) * p.z);
  }

  mat3 rotY(float a) {
    float c = cos(a), s = sin(a);
    return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
  }

  // Three-octave 3D dot-product noise (Valeran's density field recipe).
  float densityField(vec3 p, float t) {
    mat3 r1 = rotY(0.9);
    mat3 r2 = rotY(-1.7);

    float d = 0.0;
    float amp = 1.0;
    vec3 q = p;

    for (int i = 0; i < 3; i++) {
      float n = dot(cos(q * 1.7), sin(q.zxy * 1.3)) - 0.15;
      d += amp * n;
      q = r1 * (q * 1.85) + vec3(1.03, 0.58, 0.43);
      amp *= 0.5;
    }

    q = r2 * (p * 0.55) + vec3(t * 0.05, t * 0.03, -t * 0.04);
    d += 0.35 * (dot(cos(q * 2.1), sin(q.zxy * 1.9)));

    return d;
  }

  void main() {
    float aspect = uResolution.x / uResolution.y;
    vec2 uv = vUv;
    vec2 p = (uv - 0.5) * vec2(aspect, 1.0);

    float t = uTime * 0.06;

    // ── cursor trail: energy + gradient (drives the wake) ──────────────
    vec2 texel = 1.0 / uResolution;
    float trC = texture2D(uTrail, uv).r;
    float trR = texture2D(uTrail, uv + vec2(texel.x, 0.0)).r;
    float trL = texture2D(uTrail, uv - vec2(texel.x, 0.0)).r;
    float trU = texture2D(uTrail, uv + vec2(0.0, texel.y)).r;
    float trD = texture2D(uTrail, uv - vec2(0.0, texel.y)).r;
    vec2 trailGrad = vec2(trR - trL, trU - trD);

    vec2 mouseP = (uMouse - 0.5) * vec2(aspect, 1.0);
    float mDist = length(p - mouseP);

    // Soft lensing: the wake bends space around the pointer path.
    p -= trailGrad * 0.55 * uTrailMix;
    p -= (p - mouseP) * exp(-mDist * 2.6) * 0.10 * uMouseStrength;

    // ── elliptical SDF mask (Valeran's composition) ────────────────────
    // Off-centre toward the upper-left, squared so the frame falls to black.
    vec2 maskP = p - vec2(-0.26, 0.20);
    maskP.x *= 0.72;
    maskP.y *= 1.32;
    maskP += vec2(maskP.y * 0.45, 0.0);
    float ellipseMask = smoothstep(1.12, 0.02, length(maskP));
    ellipseMask *= ellipseMask;

    // ── 40-step volumetric raymarch ────────────────────────────────────
    vec3 ro = vec3(0.0, 0.0, 2.6);
    vec3 rd = normalize(vec3(p * 1.15, -1.0));

    float jitter = ign(gl_FragCoord.xy + fract(uTime) * 91.7);
    float stepSize = 0.078;
    float tRay = stepSize * jitter;

    float transmittance = 1.0;
    vec3 accumulated = vec3(0.0);

    // Cursor acts as a real light inside the volume.
    vec3 lightPos = vec3(mouseP * 1.35, 1.05);
    float lightEnergy = 0.20 + 0.75 * uMouseStrength + 1.00 * trC * uTrailMix;

    for (int i = 0; i < ITERATIONS; i++) {
      vec3 pos = ro + rd * tRay;

      // Sparse filaments: most of the volume stays empty so the frame reads
      // near-black the way the Valeran reference does.
      float field = densityField(pos * 0.78, uTime);
      float d = smoothstep(0.24, 1.05, field);

      if (d > 0.01 && ellipseMask > 0.01) {
        float lDist = length(pos - lightPos);
        float lightFall = exp(-lDist * 1.6) * lightEnergy;

        vec3 c = oklabMix(uDarkColor, uMidColor, smoothstep(0.0, 0.8, d));
        c = oklabMix(c, uBrightColor, smoothstep(0.6, 1.0, d));
        c += uBrightColor * lightFall * 0.35;

        float density = d * ellipseMask * 0.11;
        density *= mix(1.0, 1.5, lightFall);

        accumulated += c * density * transmittance * 1.4;
        transmittance *= exp(-density * 3.0);

        if (transmittance < 0.015) break;
      }

      tRay += stepSize;
    }

    vec3 color = uBaseColor * transmittance + accumulated;

    // Cursor bloom bleeding through the smoke.
    float bloom = exp(-mDist * 3.4) * uMouseStrength;
    float trailGlow = trC * uTrailMix;
    color += uBrightColor * (bloom * 0.12 + trailGlow * 0.15);

    color = acesFilmic(color * 1.15);

    // Animated film grain: overlay blend at 0.32, like Valeran's grain layer.
    float gSeed = floor(uTime * 12.0);
    vec3 g = vec3(
      hash13(vec3(gl_FragCoord.xy, gSeed)),
      hash13(vec3(gl_FragCoord.xy + 17.0, gSeed + 3.0)),
      hash13(vec3(gl_FragCoord.xy + 71.0, gSeed + 7.0))
    );
    vec3 overlay = mix(2.0 * color * g, 1.0 - 2.0 * (1.0 - color) * (1.0 - g),
                       step(0.5, color));
    color = mix(color, overlay, 0.32);

    // Fine dither kills banding on the huge dark gradients.
    color += (hash13(vec3(gl_FragCoord.xy, uTime * 60.0)) - 0.5) / 255.0;

    gl_FragColor = vec4(color, 1.0);
  }
`;
