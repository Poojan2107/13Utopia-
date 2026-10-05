// Fullscreen quad vertex shader shared by every pass.
export const fullscreenVertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

// Ping-pong trail buffer.
// Reads the previous frame, blurs + decays it (diffusion), then stamps the
// segment swept by the pointer this frame. Result: a smoke-like wake that
// lingers and spreads after the cursor passes.
export const trailFragmentShader = /* glsl */ `
  precision highp float;

  varying vec2 vUv;

  uniform sampler2D uPrev;
  uniform vec2 uTexel;
  uniform vec2 uMouse;
  uniform vec2 uPrevMouse;
  uniform float uAspect;
  uniform float uDecay;
  uniform float uRadius;
  uniform float uStrength;

  float segmentDistance(vec2 p, vec2 a, vec2 b) {
    vec2 pa = p - a;
    vec2 ba = b - a;
    float h = clamp(dot(pa, ba) / max(dot(ba, ba), 1e-6), 0.0, 1.0);
    return length(pa - ba * h);
  }

  void main() {
    vec2 uv = vUv;

    // 5-tap box blur of last frame, then decay -> diffusion + fade.
    float acc = 0.0;
    acc += texture2D(uPrev, uv).r * 0.36;
    acc += texture2D(uPrev, uv + vec2(uTexel.x, 0.0)).r * 0.16;
    acc += texture2D(uPrev, uv - vec2(uTexel.x, 0.0)).r * 0.16;
    acc += texture2D(uPrev, uv + vec2(0.0, uTexel.y)).r * 0.16;
    acc += texture2D(uPrev, uv - vec2(0.0, uTexel.y)).r * 0.16;
    float value = acc * uDecay;

    // Stamp the segment travelled by the pointer this frame.
    vec2 pt = vec2(uv.x * uAspect, uv.y);
    vec2 a = vec2(uPrevMouse.x * uAspect, uPrevMouse.y);
    vec2 b = vec2(uMouse.x * uAspect, uMouse.y);
    float d = segmentDistance(pt, a, b);
    float stamp = exp(-(d * d) / (uRadius * uRadius));

    value = max(value, stamp * uStrength);

    gl_FragColor = vec4(vec3(clamp(value, 0.0, 1.0)), 1.0);
  }
`;
