import {
  BLEND_NORMAL,
  CULLFACE_NONE,
  SEMANTIC_POSITION,
  ShaderMaterial,
} from "playcanvas";

/**
 * PlayCanvas ShaderMaterial — singularity / accretion disc for the hero void.
 */
export function createSingularityMaterial(): ShaderMaterial {
  const material = new ShaderMaterial({
    uniqueName: "ThirteenSingularity",
    attributes: {
      aPosition: SEMANTIC_POSITION,
    },
    vertexGLSL: /* glsl */ `
attribute vec3 aPosition;
uniform mat4 matrix_model;
uniform mat4 matrix_viewProjection;
varying vec2 vUv;
void main(void) {
  vUv = aPosition.xy * 0.5 + 0.5;
  gl_Position = matrix_viewProjection * matrix_model * vec4(aPosition, 1.0);
}
`,
    fragmentGLSL: /* glsl */ `
precision highp float;
varying vec2 vUv;
uniform float uDive;
uniform float uTime;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

void main(void) {
  vec2 uv = vUv * 2.0 - 1.0;
  float r = length(uv);
  float dive = clamp(uDive, 0.0, 1.0);

  float coreR = mix(0.11, 0.38, dive);
  float diskR = mix(0.92, 0.58, dive);

  float disk = smoothstep(diskR, coreR * 0.85, r) * smoothstep(coreR * 0.2, coreR * 1.15, r);
  float angle = atan(uv.y, uv.x);
  float spiral = sin(angle * 7.0 - uTime * (1.4 + dive * 2.8) + r * 16.0);
  disk *= 0.5 + 0.5 * spiral;

  vec3 cool = vec3(0.78, 0.86, 0.96);
  vec3 hot = vec3(1.0, 0.97, 0.9);
  vec3 col = mix(cool, hot, smoothstep(0.15, 0.85, spiral * 0.5 + 0.5));
  col *= disk * mix(0.5, 1.4, dive);

  float hole = smoothstep(coreR, coreR * 0.08, r);
  col *= 1.0 - hole * 0.99;

  float glow = exp(-r * r * mix(2.4, 0.85, dive)) * mix(0.22, 0.75, dive);
  col += cool * glow * 0.4;

  float n = hash(uv * 48.0 + uTime * 0.2);
  col += (n - 0.5) * 0.028;

  float alpha = clamp(disk * 1.25 + glow * 0.55 + hole * 0.12, 0.0, 1.0);
  gl_FragColor = vec4(col, alpha);
}
`,
  });

  material.blendType = BLEND_NORMAL;
  material.cull = CULLFACE_NONE;
  material.depthWrite = false;
  material.setParameter("uDive", 0);
  material.setParameter("uTime", 0);
  material.update();
  return material;
}
