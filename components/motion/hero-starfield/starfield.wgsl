// Sitewide unlensed sky using the exact optimized-black-hole star module.

import { cameraRay } from "../../../optimized-black-hole/geodesic.wgsl";
import { StarLook, shadeStars } from "../../../optimized-black-hole/stars.wgsl";

struct Params {
  resolution: vec2f,
  time: f32,
  yaw: f32,
  pitch: f32,
  orbitRadius: f32,
  fov: f32,
  centerX: f32,
  centerY: f32,
  roll: f32,
  brightness: f32,
  density: f32,
  contrast: f32,
  warmth: f32,
  twinkle: f32,
}

@group(0) @binding(0) var<uniform> params: Params;

const EXPOSURE: f32 = 1.15;

fn aces(x: vec3f) -> vec3f {
  let a = 2.51;
  let b = 0.03;
  let c = 2.43;
  let d = 0.59;
  let e = 0.14;
  return clamp((x * (a * x + vec3f(b))) / (x * (c * x + vec3f(d)) + vec3f(e)), vec3f(0.0), vec3f(1.0));
}

fn tonemap(linearColor: vec3f, uv: vec2f) -> vec3f {
  var color = aces(linearColor * EXPOSURE);
  let centered = uv - vec2f(0.5);
  let vignette = 1.0 - smoothstep(0.55, 1.15, length(centered) * 1.6);
  color *= mix(0.72, 1.0, vignette);
  color = pow(color, vec3f(1.0 / 2.2));
  let luma = dot(color, vec3f(0.2126, 0.7152, 0.0722));
  return mix(vec3f(luma), color, 0.0);
}

@fragment fn fs_main(@location(0) uv: vec2f) -> @location(0) vec4f {
  let ray = cameraRay(
    uv,
    params.resolution,
    params.yaw,
    params.pitch,
    params.orbitRadius,
    params.fov,
    params.centerX,
    params.centerY,
    params.roll,
  );

  // Unlensed hero sky — same star module, no geodesic bend / disk / hole.
  let direction = ray.velocity;
  let look = StarLook(
    params.brightness,
    params.density,
    params.contrast,
    params.warmth,
    params.twinkle,
  );
  let hdr = shadeStars(direction, look, params.time, dpdx(direction), dpdy(direction));
  return vec4f(tonemap(hdr, uv), 1.0);
}
