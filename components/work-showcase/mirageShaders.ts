import * as THREE from "three";

export const SAND_VERTEX_SHADER = `
varying vec2 vUv;
varying vec3 vNormal;

void main() {
  vUv = uv;
  vNormal = normalize(normalMatrix * normal);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

export const SAND_FRAGMENT_SHADER = `
uniform sampler2D normalMap;
uniform sampler2D uColorTimeline;
uniform float uLightBase;
uniform float uLightHalfLen;
uniform float uLightIntensity;
uniform float uLightRange;
uniform float uLightExponent;
uniform float uLightAngular;
uniform float uLightFloor;
uniform float uVideoTimes[10];
uniform float uFrameStart[10];
uniform float uFrameCount[10];
uniform float uTotalFrames;
uniform float uUniformMode;
uniform float uUniformFrameStart;
uniform float uUniformFrameCount;
uniform float uUniformTime;
uniform float ulightMapRotation;
uniform float uSaturation;
uniform float uGroundFade;
/** 0–1: dark sand becomes transparent so sitewide / scene stars read through */
uniform float uSkyBleed;
uniform vec2 normalMapRepeat;
uniform vec2 uLightDirs[10];
uniform vec3 uReliefColorHigh;
uniform vec3 uReliefColorLow;
uniform float uReliefTint;

// ─── Sand Sparkles & Grain ───
uniform float uTime;
uniform float uGrainScale;
uniform float uGrainIntensity;
uniform float uGrainGate;
uniform float uSparkleScale;
uniform float uSparkleIntensity;
uniform float uSparkleSpeed;

varying vec2 vUv;
varying vec3 vNormal;

const float TAU = 6.28318530718;
const vec3 LUMA = vec3(0.299, 0.587, 0.114);
const float LINEAR_LSB = 1.0 / (255.0 * 12.92);

/** Cheap 2D->1D hash (Dave Hoskins) - mobile friendly */
float hash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

/** Interleaved Gradient Noise (Jimenez 2014) */
float ign(vec2 p) {
  return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715))));
}

/** Authentic Studio Mirage extended emitter light map footprint */
float sampleLightMap(vec2 uv) {
  float dy = uLightBase - uv.y;
  if (dy < 0.0) return 0.0;
  float lx = max(abs(uv.x - 0.5) - uLightHalfLen, 0.0);
  float r2 = max(lx * lx + dy * dy, 1e-12);
  float invr = inversesqrt(r2);
  float light = uLightIntensity
    * pow(1.0 + r2 * invr / uLightRange, -uLightExponent)
    * pow(1.0 - min(lx * invr, 1.0), uLightAngular);
  return max(light - uLightFloor, 0.0);
}

void main() {
  if (uGroundFade >= 1.0) {
    gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
    return;
  }

  vec3 normalSample = texture2D(normalMap, vUv * normalMapRepeat).xyz;
  normalSample.xy *= 1.5;
  normalSample = normalize(normalSample);

  vec3 finalNormal = normalize(mix(normalize(vNormal), normalSample, 0.5));
  vec3 lightDir = normalize(vec3(1.0, 0.5, 1.0));

  float ndotl = max(dot(finalNormal, lightDir), 0.0);
  vec3 reliefTint = mix(uReliefColorLow, uReliefColorHigh, min(ndotl, 1.0));
  float ni = ndotl * 1.03;
  float ni2 = ni * ni;
  float normalFalloff = ni2 * ni2 * ni;

  vec3 uniformColor = vec3(0.0);
  if (uUniformMode > 0.5) {
    float frame = uUniformFrameStart + uUniformTime * max(uUniformFrameCount - 1.0, 0.0);
    uniformColor = texture2D(uColorTimeline, vec2(0.5, (frame + 0.5) / uTotalFrames)).rgb;
  }

  float rs = sin(ulightMapRotation);
  float rc = cos(ulightMapRotation);
  vec2 uvCentered = (vUv - 0.5) * mat2(rc, -rs, rs, rc);

  vec3 lightSum = vec3(0.0);
  for (int i = 0; i < 10; i++) {
    vec2 dir = uLightDirs[i];
    vec2 uvRotated = vec2(
      dot(uvCentered, vec2(dir.x, -dir.y)),
      dot(uvCentered, vec2(dir.y,  dir.x))
    ) + 0.5;

    vec3 sampledColor = uniformColor;
    if (uUniformMode <= 0.5) {
      float frame = uFrameStart[i] + uVideoTimes[i] * max(uFrameCount[i] - 1.0, 0.0);
      sampledColor = texture2D(uColorTimeline, vec2(0.5, (frame + 0.5) / uTotalFrames)).rgb;
    }

    if (length(sampledColor) < 0.01) {
      sampledColor = vec3(0.55);
    }

    lightSum += sampleLightMap(uvRotated) * 3.0 * normalFalloff
      * pow(sampledColor * 2.0, vec3(1.4));
  }

  vec3 totalLight = mix(vec3(dot(lightSum, LUMA)), lightSum, uSaturation);
  totalLight *= mix(vec3(1.0), reliefTint, uReliefTint);

  // High-frequency sand grain
  if (uGrainIntensity > 0.0) {
    float grain = hash12(floor(vUv * uGrainScale));
    float gate = clamp(totalLight.g * uGrainGate, 0.0, 1.0);
    totalLight *= 1.0 + (grain - 0.5) * uGrainIntensity * gate;
  }

  // Desert quartz sparkle glints
  if (uSparkleIntensity > 0.0) {
    vec2 sparkleCoord = vUv * uSparkleScale;
    vec2 cell = floor(sparkleCoord);
    float h = hash12(cell);
    float sparkleMask = step(0.985, h);

    vec2 jitter = vec2(hash12(cell + 17.31), hash12(cell + 53.17)) - 0.5;
    float point = smoothstep(0.30, 0.0, length(fract(sparkleCoord) - 0.5 - jitter * 0.5));

    float twinkle = sin(uTime * uSparkleSpeed * TAU * 0.25 + h * 100.0) * 0.5 + 0.5;
    twinkle *= twinkle;
    twinkle *= twinkle;
    twinkle *= twinkle; // ^8 sharp glint pulse

    float sparkle = sparkleMask * point * twinkle * clamp(dot(totalLight, LUMA), 0.0, 1.5);
    totalLight += vec3(1.0, 0.97, 0.90) * sparkle * uSparkleIntensity;
  }

  // IGN dither
  totalLight += (ign(gl_FragCoord.xy) - 0.5) * LINEAR_LSB;
  totalLight *= (1.0 - uGroundFade);

  float lumaOut = dot(totalLight, LUMA);
  float alpha = 1.0;
  if (uSkyBleed > 0.001) {
    float ringDist = length(vUv - 0.5);
    // Open inside the card ring (UV radius ~0.127) — stars through the void
    float centerHole = 1.0 - smoothstep(0.085, 0.122, ringDist);
    // Unlit flats go clear; lit footprints under screens stay solid
    float litSand = smoothstep(0.0, 0.032, lumaOut);
    alpha = litSand * (1.0 - centerHole);
    alpha = mix(1.0, alpha, uSkyBleed);
    // Don't write depth in the open void — lets starfield show through
    if (alpha < 0.04) discard;
  }

  gl_FragColor = vec4(totalLight, alpha);
}
`;

export const SCREEN_VERTEX_SHADER = `
uniform float uScaleX;
varying vec2 vUv;
varying vec2 vFixedUv;

void main() {
  vUv = uv;
  vFixedUv = vec2(0.5 + (uv.x - 0.5) * uScaleX, uv.y);
  vec3 scaledPosition = vec3(position.x * uScaleX, position.y, position.z);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(scaledPosition, 1.0);
}
`;

export const SCREEN_FRAGMENT_SHADER = `
uniform sampler2D map;
uniform float uFade;
uniform float uSaturation;
uniform float uTime;

varying vec2 vUv;
varying vec2 vFixedUv;

const vec3 LUMA = vec3(0.299, 0.587, 0.114);

vec3 srgbToLinear(vec3 c) {
  return mix(
    pow(c * 0.9478672986 + vec3(0.0521327014), vec3(2.4)),
    c * 0.0773993808,
    vec3(lessThanEqual(c, vec3(0.04045)))
  );
}

void main() {
  if (vUv.x < 0.0 && vUv.y < 0.0) {
    gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
    return;
  }

  if (uFade >= 1.0) {
    gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
    return;
  }

  vec4 color = texture2D(map, vFixedUv);
  color.rgb = srgbToLinear(color.rgb);

  if (uSaturation < 0.9999) {
    color.rgb = mix(vec3(dot(color.rgb, LUMA)), color.rgb, uSaturation);
  }

  color.rgb *= (1.0 - uFade);

  gl_FragColor = vec4(color.rgb, 1.0);
}
`;

export function getLightDirs(rot = 3.0, dir = -1): THREE.Vector2[] {
  const step = -(Math.PI * 2) / 10;
  return Array.from({ length: 10 }, (_, n) => {
    const a = n * dir;
    const o = step * a + step * rot;
    return new THREE.Vector2(Math.cos(o), Math.sin(o));
  });
}
